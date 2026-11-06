'use strict';
// Stress-tests every template/format and validates generated test files.
const { Rng } = require('./lib');
const { finalize } = require('./make');
const { TEMPLATES, buildTest } = require('./build');
const { diGrowth, diBudget } = require('./t_di');

const N = +(process.argv[2] || 300);
let errors = 0;
const fail = (msg) => { errors++; if (errors < 40) console.log('FAIL', msg); };

function check(item, tag) {
  const q = item.q, e = item.exp;
  if (!q.answer || !q.answer.length) return fail(`${tag} no answer`);
  if (q.type === 'MC' || q.type === 'QC' || q.type === 'MA') {
    const labels = q.choices.map(c => c.label);
    const texts = q.choices.map(c => c.text);
    if (new Set(texts).size !== texts.length) fail(`${tag} duplicate choice texts: ${texts.join(' | ')}`);
    for (const a of q.answer) if (!labels.includes(a)) fail(`${tag} answer ${a} not in choices`);
    if (q.type === 'MC' && q.choices.length !== 5) fail(`${tag} MC has ${q.choices.length} choices`);
    if (q.type !== 'MA' && q.answer.length !== 1) fail(`${tag} single-answer item has ${q.answer.length} answers`);
    if (q.type === 'MA' && (q.choices.length < 3 || q.choices.length > 8)) fail(`${tag} MA has ${q.choices.length} choices`);
    if (texts.some(t => /NaN|undefined|Infinity|null/.test(String(t)))) fail(`${tag} bad choice text ${texts.join(' | ')}`);
  }
  if (q.type === 'NE') { if (!isFinite(q.ne.value)) fail(`${tag} NE value ${q.ne.value}`); }
  const blob = JSON.stringify(item);
  if (/NaN|undefined|Infinity/.test(blob)) fail(`${tag} NaN/undefined in output: ${blob.match(/.{60}(NaN|undefined|Infinity).{20}/)?.[0]}`);
  if (!e.stepByStep || !e.stepByStep.length) fail(`${tag} no steps`);
}

const r = new Rng(12345);
for (const t of TEMPLATES) {
  for (const fmt of t.formats) {
    for (let i = 0; i < N; i++) {
      let core;
      try {
        core = t.gen(r, fmt);
        if (fmt === 'QC' && core.kind !== 'qc' && !core.noun) { fail(`${t.id} QC without noun`); break; }
        check(finalize(t, core, fmt, r), `${t.id}/${fmt}`);
      } catch (err) { fail(`${t.id}/${fmt} threw ${err.stack.split('\n').slice(0, 2).join(' ')}`); break; }
    }
  }
}
for (const [name, f] of [['growth', diGrowth], ['budget', diBudget]]) {
  for (let i = 0; i < N; i++) {
    const di = f(r);
    di.items.forEach((core, k) => {
      const fmt = core.kind === 'ma' ? 'MA' : (k === 1 || (k === 0 && name === 'budget') ? 'NE' : 'MC');
      check(finalize({ id: 'di', area: 'Data Analysis', topic: di.topic }, core, fmt, r), `di_${name}/${k}`);
    });
  }
}
for (let n = 1; n <= 20; n++) {
  const { examData } = buildTest(n);
  const s = examData.sections;
  if (s[0].questions.length !== 12 || s[1].questions.length !== 15) fail(`test ${n} section sizes`);
}
console.log(errors ? `${errors} problems` : `OK: ${TEMPLATES.length} templates × formats × ${N} runs, 2 DI generators, 20 tests`);
process.exit(errors ? 1 : 0);
