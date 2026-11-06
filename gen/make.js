'use strict';
// Turns template "cores" into finished questions (QC / MC / MA / NE) plus Korean explanation data.
const { Frac, valOf, show, QC_CHOICES } = require('./lib');

const LETTERS = 'ABCDEFGHIJ'.split('');

function mkSteps(steps) {
  return (steps || []).map((s, i) => Array.isArray(s)
    ? { step: `Step ${i + 1}: ${s[0]}`, desc: s[1] }
    : { step: `Step ${i + 1}`, desc: s });
}

function normItem(x) {
  // -> {disp, v, why}
  if (x && typeof x === 'object' && !(x instanceof Frac) && ('val' in x)) {
    const inner = normItem(x.val);
    return { disp: inner.disp, v: inner.v, why: x.why || null };
  }
  return { disp: show(x), v: valOf(x), why: null };
}

function numericNeighbors(ans) {
  const v = valOf(ans);
  const out = [];
  if (ans instanceof Frac && !ans.isInt()) {
    out.push(ans.add(new Frac(1, ans.d)), ans.sub(new Frac(1, ans.d)), ans.mul(2), ans.add(1), new Frac(ans.d, ans.n === 0 ? 1 : ans.n));
  } else if (Number.isInteger(v)) {
    const step = Math.abs(v) >= 200 ? Math.max(1, Math.round(Math.abs(v) / 20)) : (Math.abs(v) >= 40 ? 2 : 1);
    out.push(v + step, v - step, v + 2 * step, v - 2 * step, v * 2, v + 3 * step);
  } else {
    out.push(+(v * 1.1).toFixed(2), +(v * 0.9).toFixed(2), +(v + 1).toFixed(2), +(v - 1).toFixed(2));
  }
  return out.map(x => ({ disp: show(x), v: valOf(x), why: '정답과 가까운 값입니다. 계산 중 작은 실수(경계값·부호·반올림)를 하면 고르게 되는 선택지입니다.' }));
}

function buildMC(core, r) {
  const correct = { disp: core.disp || show(core.ans), v: valOf(core.ans) };
  const seen = new Set([correct.disp]);
  const pool = [];
  const allowNeg = core.allowNeg || (correct.v !== null && correct.v < 0);
  for (const d of (core.distract || [])) {
    const it = normItem(d);
    if (seen.has(it.disp)) continue;
    if (!allowNeg && it.v !== null && it.v < 0) continue;
    if (it.v !== null && correct.v !== null && Math.abs(it.v - correct.v) < 1e-12) continue;
    seen.add(it.disp); pool.push(it);
  }
  let picks = pool.slice(0, 4);
  if (picks.length < 4 && correct.v !== null) {
    for (const it of numericNeighbors(core.ans)) {
      if (picks.length >= 4) break;
      if (seen.has(it.disp)) continue;
      if (!allowNeg && it.v < 0) continue;
      if (core.intOnly && !Number.isInteger(it.v)) continue;
      seen.add(it.disp); picks.push(it);
    }
  }
  if (picks.length < 4) throw new Error('not enough distractors for ' + core.q);
  let all = [{ ...correct, correct: true }, ...picks];
  const numeric = all.every(c => c.v !== null && c.v !== undefined);
  all = (numeric && !core.noSort) ? all.sort((a, b) => a.v - b.v) : r.shuffle(all);
  const choices = all.map((c, i) => ({ label: LETTERS[i], text: c.disp }));
  const ansLabel = LETTERS[all.findIndex(c => c.correct)];
  const why = {};
  const analysis = all.map((c, i) => {
    const label = LETTERS[i];
    if (c.correct) return { label, isCorrect: true, text: c.disp, analysis: '정답. ' + (core.answerNote || '위 풀이 과정의 결과와 일치합니다.') };
    const reason = c.why || '조건을 끝까지 반영하지 않았을 때 나오기 쉬운 값입니다.';
    why[label] = reason;
    return { label, isCorrect: false, text: c.disp, analysis: '오답. ' + reason };
  });
  return {
    q: { type: 'MC', stimulus: core.ctx || '', questionText: core.q, choices, answer: [ansLabel] },
    exp: { whySelectedWrong: why, choicesAnalysis: analysis },
  };
}

function buildNE(core) {
  const isFrac = core.ans instanceof Frac && !core.ans.isInt() && !core.decimal;
  const v = valOf(core.ans);
  const traps = [];
  for (const d of (core.distract || [])) {
    const it = normItem(d);
    if (it.why && it.v !== null && Math.abs(it.v - v) > 1e-12) traps.push({ value: it.v, display: it.disp, why: it.why });
  }
  if (core.trap) { const t = normItem(core.trap); if (t.why && t.v !== null && Math.abs(t.v - v) > 1e-12) traps.push({ value: t.v, display: t.disp, why: t.why }); }
  let hint = core.neHint || '';
  if (isFrac && !hint) hint = 'Give your answer as a fraction.';
  return {
    q: {
      type: 'NE', stimulus: core.ctx || '', questionText: core.q + (hint ? `<div class="ne-hint">${hint}</div>` : ''),
      answer: [core.disp || show(core.ans)], ne: { value: v, fraction: isFrac, tol: core.tol || 1e-9, prefix: core.prefix || '', suffix: core.suffix || '' },
    },
    exp: { commonTraps: traps },
  };
}

function qcWhy(ans, aDisp, bDisp, extra) {
  const why = {};
  const vals = (aDisp !== undefined) ? ` (실제 값: Quantity A = ${aDisp}, Quantity B = ${bDisp})` : '';
  const text = {
    A: 'Quantity A가 항상 더 크다고 판단했지만 그렇지 않습니다.' + vals,
    B: 'Quantity B가 항상 더 크다고 판단했지만 그렇지 않습니다.' + vals,
    C: '두 양이 항상 같다고 판단했지만 그렇지 않습니다.' + vals,
    D: ans === 'D' ? '' : '주어진 조건만으로 두 양의 대소가 항상 하나로 정해집니다. 관계가 결정되지 않는다고 판단하기 전에 식을 끝까지 정리해 보세요.' + vals,
  };
  if (ans === 'D') {
    for (const L of 'ABC') why[L] = `조건을 만족하는 값에 따라 두 양의 관계가 바뀝니다. 한두 개의 값만 대입해 보고 결론을 내리면 이 함정에 빠집니다.${extra ? ' ' + extra : ''}`;
  } else {
    for (const L of 'ABCD') if (L !== ans) why[L] = text[L] + (extra ? ' ' + extra : '');
  }
  return why;
}

function qcAnalysis(ans, why) {
  return QC_CHOICES.map(c => ({ label: c.label, isCorrect: c.label === ans, text: c.text, analysis: c.label === ans ? '정답.' : '오답. ' + why[c.label] }));
}

function buildQCfromNumeric(core, r) {
  const ansV = valOf(core.ans);
  let b, bWhy = null, roll = r.next();
  const trap = core.trap ? normItem(core.trap) : null;
  if (trap && trap.v !== null && Math.abs(trap.v - ansV) > 1e-12 && roll < 0.6) { b = trap; bWhy = trap.why; }
  else if (roll < 0.82) b = { disp: core.disp || show(core.ans), v: ansV };
  else {
    const cands = (core.distract || []).map(normItem).filter(d => d.v !== null && Math.abs(d.v - ansV) > 1e-12 && (core.allowNeg || d.v >= 0));
    b = cands.length ? r.pick(cands) : { disp: show(ansV + 1), v: ansV + 1 };
    bWhy = b.why;
  }
  const ans = Math.abs(ansV - b.v) < 1e-12 ? 'C' : (ansV > b.v ? 'A' : 'B');
  const swap = r.chance(0.3);
  const aDisp = core.disp || show(core.ans);
  let qa = core.noun, qb = b.disp, finalAns = ans;
  if (swap) { qa = b.disp; qb = core.noun; finalAns = ans === 'A' ? 'B' : ans === 'B' ? 'A' : ans; }
  const extra = bWhy ? `참고로 ${b.disp}은(는) ${bWhy}` : '';
  const why = swap ? qcWhy(finalAns, b.disp, aDisp, extra) : qcWhy(finalAns, aDisp, b.disp, extra);
  const conclusion = `${core.noun} = ${aDisp}이고 비교 대상은 ${b.disp}이므로 정답은 (${finalAns})입니다.`;
  return {
    q: { type: 'QC', stimulus: core.qcCtx !== undefined ? core.qcCtx : (core.ctx || ''), qa, qb, choices: QC_CHOICES, answer: [finalAns] },
    exp: { whySelectedWrong: why, choicesAnalysis: qcAnalysis(finalAns, why), conclusion },
  };
}

// QC built directly by template: {ctx, A, B, ans, steps, key, extraWhy}
function buildQC(core, r) {
  let { A, B, ans } = core;
  if (!core.noSwap && r.chance(0.35)) { [A, B] = [B, A]; ans = ans === 'A' ? 'B' : ans === 'B' ? 'A' : ans; }
  const why = qcWhy(ans, undefined, undefined, core.extraWhy || '');
  if (core.whyOverride) Object.assign(why, core.whyOverride(ans));
  return {
    q: { type: 'QC', stimulus: core.ctx || '', qa: A, qb: B, choices: QC_CHOICES, answer: [ans] },
    exp: { whySelectedWrong: why, choicesAnalysis: qcAnalysis(ans, why), conclusion: `따라서 정답은 (${ans})입니다.` },
  };
}

// MA: core.choices = [{disp, ok, why}]
function buildMA(core, r) {
  const items = core.sorted ? core.choices : r.shuffle(core.choices);
  const choices = items.map((c, i) => ({ label: LETTERS[i], text: c.disp }));
  const answer = items.map((c, i) => c.ok ? LETTERS[i] : null).filter(Boolean);
  if (!answer.length) throw new Error('MA with no correct choice');
  const why = {}; const analysis = items.map((c, i) => {
    const label = LETTERS[i];
    if (!c.ok) why[label] = c.why;
    return { label, isCorrect: c.ok, text: c.disp, analysis: (c.ok ? '정답. ' : '오답. ') + c.why };
  });
  return {
    q: { type: 'MA', stimulus: core.ctx || '', questionText: core.q, choices, answer, directions: 'Select <strong>all</strong> the answer choices that apply.' },
    exp: { whySelectedWrong: why, choicesAnalysis: analysis, maNote: `정답은 ${answer.join(', ')}입니다. 다중 선택 문항은 정답 보기를 모두, 정확히 골라야 점수를 받습니다(부분 점수 없음).` },
  };
}

function fixStr(s) {
  return s.replace(/(^|[\s(,=\[{:;>+×÷−·/≤≥])-(?=\d)/g, '$1−').replace(/<(?![a-zA-Z/!])/g, '&lt;');
}
function deepFix(o) {
  if (typeof o === 'string') return fixStr(o);
  if (Array.isArray(o)) return o.map(deepFix);
  if (o && typeof o === 'object') { const out = {}; for (const k in o) out[k] = (k === 'value' || k === 'label' || k === 'type' || k === 'template' || k === 'area') ? o[k] : deepFix(o[k]); return out; }
  return o;
}
function finalize(t, core, fmt, r) { return deepFix(finalize0(t, core, fmt, r)); }
function finalize0(t, core, fmt, r) {
  let built;
  if (fmt === 'MC') built = buildMC(core, r);
  else if (fmt === 'NE') built = buildNE(core);
  else if (fmt === 'QC') built = core.kind === 'qc' ? buildQC(core, r) : buildQCfromNumeric(core, r);
  else if (fmt === 'MA') built = buildMA(core, r);
  else throw new Error('bad fmt ' + fmt);
  const steps = mkSteps(core.steps);
  if (built.exp.conclusion) steps.push({ step: `Step ${steps.length + 1}: 결론`, desc: built.exp.conclusion });
  if (built.exp.maNote) steps.push({ step: `Step ${steps.length + 1}: 정답 확정`, desc: built.exp.maNote });
  return {
    q: { ...built.q, area: t.area, template: t.id },
    exp: { topic: t.topic, clue: core.key || '', stepByStep: steps, ...built.exp, conclusion: undefined, maNote: undefined },
  };
}

module.exports = { finalize, mkSteps, LETTERS, qcWhy, qcAnalysis };
