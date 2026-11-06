'use strict';
const { Frac, gcd, fmtInt, show, sup, C, fact, nice, tableHtml, grid } = require('./lib');
const T = [];
const add = (id, area, topic, formats, gen) => T.push({ id, area, topic, formats, gen });
const X = '<i>x</i>';

// ---------- Committee with "at least" ----------
add('committee', 'Data Analysis', '조합: “적어도” 조건', ['NE', 'MC', 'QC'], r => {
  const m = r.int(5, 9), w = r.int(4, 8), k = r.int(3, 5), j = r.pick([1, 2]);
  let tot = 0; const parts = [];
  for (let i = j; i <= Math.min(k, w); i++) { const v = C(w, i) * C(m, k - i); tot += v; parts.push(`C(${w},${i})·C(${m},${k - i}) = ${v}`); }
  const overcount = C(w, j) * C(m + w - j, k - j);
  let comp = 0; for (let i = 0; i < j; i++) comp += C(w, i) * C(m, k - i);
  return {
    q: `A committee of ${k} people is to be selected from a group of ${m} men and ${w} women. How many different committees can be selected that include at least ${j === 1 ? 'one woman' : 'two women'}?`,
    noun: `The number of different ${k}-person committees, selected from ${m} men and ${w} women, that include at least ${j === 1 ? 'one woman' : 'two women'}`,
    ans: tot,
    trap: { val: overcount, why: `여자 ${j}명을 먼저 고르고 나머지를 아무나 고르는 방식은 같은 위원회를 여러 번 셉니다(과잉 계산).` },
    distract: [{ val: overcount, why: '“먼저 여자 j명 고정 후 나머지 자유 선택” 방식으로 중복해서 센 값입니다.' }, { val: C(m + w, k), why: '조건 없이 전체 경우의 수입니다.' }, { val: comp, why: '조건을 만족하지 않는 경우(여사건)의 수입니다.' }, { val: C(w, j) * C(m, k - j), why: `여자가 정확히 ${j}명인 경우만 센 값입니다.` }],
    key: '“적어도”는 여사건(전체 − 조건 불만족) 또는 정확한 경우별 합으로 셉니다. “하나 고정 후 나머지 자유”는 중복을 만듭니다.',
    steps: [
      ['전체', `C(${m + w}, ${k}) = ${C(m + w, k)}`],
      ['여사건', `여자가 ${j === 1 ? '0명' : '0명 또는 1명'}인 경우 = ${comp}`],
      ['답', `${C(m + w, k)} − ${comp} = <strong>${tot}</strong> (경우별 합: ${parts.join(' + ')})`],
    ],
  };
});

// ---------- Arrangements with restrictions ----------
function perms(arr) { if (arr.length <= 1) return [arr]; const out = []; arr.forEach((x, i) => { for (const p of perms([...arr.slice(0, i), ...arr.slice(i + 1)])) out.push([x, ...p]); }); return out; }
add('arrange', 'Data Analysis', '순열: 이웃 조건·순서 조건', ['NE', 'MC', 'QC'], r => {
  const n = r.int(5, 7);
  const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].slice(0, n);
  const v = r.pick(['notadj', 'order3', 'twopairs', 'endsnot']);
  const P = perms(names);
  let test, desc, steps, distract;
  if (v === 'notadj') { test = p => Math.abs(p.indexOf('A') - p.indexOf('B')) !== 1; desc = 'if Ana and Ben must not stand next to each other';
    steps = [['전체', `${n}! = ${fact(n)}`], ['이웃하는 경우', `A, B를 한 묶음으로: 2 × ${n - 1}! = ${2 * fact(n - 1)}`], ['여사건', `${fact(n)} − ${2 * fact(n - 1)} = <strong>${fact(n) - 2 * fact(n - 1)}</strong>`]];
    distract = [{ val: 2 * fact(n - 1), why: '이웃하는 경우의 수입니다.' }, { val: fact(n) - fact(n - 1), why: '묶음 내부 순서(×2)를 빠뜨린 값입니다.' }, { val: fact(n), why: '조건을 무시한 전체 경우의 수입니다.' }, { val: fact(n) / 2, why: '“A가 B보다 왼쪽”인 경우의 수와 혼동한 값입니다.' }]; }
  else if (v === 'order3') { test = p => p.indexOf('A') < p.indexOf('B') && p.indexOf('B') < p.indexOf('C'); desc = 'if Ana must stand somewhere to the left of Ben, and Ben must stand somewhere to the left of Cara (not necessarily next to each other)';
    steps = [['대칭성', `A, B, C 세 사람의 상대적 순서 3! = 6가지는 모두 같은 횟수로 나타납니다.`], ['그중 하나', `A–B–C 순서는 그중 1가지`], ['계산', `${fact(n)} ÷ 6 = <strong>${fact(n) / 6}</strong>`]];
    distract = [{ val: fact(n) / 2, why: '두 사람의 순서 조건만 반영한 값입니다.' }, { val: fact(n - 2), why: '세 사람을 이웃하게 묶은 값입니다.' }, { val: fact(n) / 3, why: '세 사람의 순서를 3가지로 잘못 센 값입니다.' }, { val: fact(n) - fact(n) / 6, why: '여사건의 수입니다.' }]; }
  else if (v === 'twopairs') { test = p => Math.abs(p.indexOf('A') - p.indexOf('B')) === 1 && Math.abs(p.indexOf('C') - p.indexOf('D')) === 1; desc = 'if Ana must stand next to Ben and Cara must stand next to Dev';
    steps = [['두 묶음 만들기', `(AB), (CD)를 각각 하나로 보면 대상은 ${n - 2}개 → ${n - 2}! = ${fact(n - 2)}`], ['묶음 내부', '각 묶음 2가지씩 → × 4'], ['계산', `<strong>${4 * fact(n - 2)}</strong>`]];
    distract = [{ val: fact(n - 2), why: '묶음 내부 순서를 빠뜨린 값입니다.' }, { val: 2 * fact(n - 2), why: '한 묶음의 내부 순서만 반영한 값입니다.' }, { val: 4 * fact(n - 1), why: '묶음을 하나만 만든 값입니다.' }, { val: 2 * fact(n - 1), why: 'A, B만 이웃하는 경우입니다.' }]; }
  else { test = p => p[0] !== 'A' && p[n - 1] !== 'A'; desc = 'if Ana must not stand at either end of the row';
    steps = [['A의 자리', `양 끝을 제외한 ${n - 2}자리 중 하나`], ['나머지', `${n - 1}! = ${fact(n - 1)}`], ['계산', `${n - 2} × ${fact(n - 1)} = <strong>${(n - 2) * fact(n - 1)}</strong>`]];
    distract = [{ val: 2 * fact(n - 1), why: 'A가 끝에 서는 경우의 수입니다.' }, { val: fact(n) - fact(n - 1), why: '한쪽 끝만 제외한 값입니다.' }, { val: (n - 2) * fact(n - 2), why: '나머지 사람을 배열할 때 한 명을 빠뜨린 값입니다.' }, { val: fact(n), why: '조건을 무시한 값입니다.' }]; }
  const cnt = P.filter(test).length;
  const people = ['Ana', 'Ben', 'Cara', 'Dev', 'Eli', 'Fay', 'Gus'].slice(0, n).join(', ');
  return {
    q: `${n} people—${people}—are to stand in a row for a photograph. How many different arrangements are possible ${desc}?`,
    noun: `The number of different arrangements of ${n} people in a row ${desc}`, ans: cnt,
    distract, trap: distract[0],
    key: '제한 조건은 묶음(이웃), 대칭성(순서), 여사건(금지)으로 처리합니다.',
    steps,
  };
});

// ---------- Drawing without replacement ----------
add('draw', 'Data Analysis', '비복원 추출 확률', ['NE', 'MC', 'QC'], r => {
  const R = r.int(2, 6), B = r.int(2, 6), G = r.int(1, 5); const N = R + B + G;
  const v = r.pick(['same2', 'atleast1red3', 'oneeach3']);
  let ans, desc, steps, distract;
  if (v === 'same2') { ans = new Frac(C(R, 2) + C(B, 2) + C(G, 2), C(N, 2)); desc = 'If 2 marbles are selected at random without replacement, what is the probability that both marbles are the same color?';
    const wr = new Frac(R * R + B * B + G * G, N * N);
    steps = [['전체', `C(${N}, 2) = ${C(N, 2)}`], ['같은 색', `C(${R},2) + C(${B},2) + C(${G},2) = ${C(R, 2) + C(B, 2) + C(G, 2)}`], ['확률', `<strong>${show(ans)}</strong>`]];
    distract = [{ val: wr, why: '복원 추출로 계산한 확률입니다.' }, { val: new Frac(1).sub(ans), why: '서로 다른 색일 확률입니다.' }, { val: new Frac(C(R, 2), C(N, 2)), why: '빨간색 두 개인 경우만 센 값입니다.' }, { val: new Frac(3, N), why: '색의 수를 전체 개수로 나눈 잘못된 값입니다.' }]; }
  else if (v === 'atleast1red3') { ans = new Frac(1).sub(new Frac(C(N - R, 3), C(N, 3))); desc = 'If 3 marbles are selected at random without replacement, what is the probability that at least 1 of the marbles is red?';
    steps = [['여사건', `빨간 구슬이 하나도 없을 확률 = C(${N - R}, 3)/C(${N}, 3) = ${show(new Frac(C(N - R, 3), C(N, 3)))}`], ['답', `1 − ${show(new Frac(C(N - R, 3), C(N, 3)))} = <strong>${show(ans)}</strong>`]];
    distract = [{ val: new Frac(1).sub(new Frac((N - R) ** 3, N ** 3)), why: '복원 추출로 계산한 값입니다.' }, { val: new Frac(C(N - R, 3), C(N, 3)), why: '빨간 구슬이 하나도 없을 확률입니다.' }, { val: new Frac(3 * R, N), why: '1개를 뽑을 확률에 3을 곱한 값입니다(확률은 그렇게 더할 수 없음).' }, { val: new Frac(R * C(N - R, 2), C(N, 3)), why: '빨간 구슬이 정확히 1개일 확률입니다.' }]; }
  else { ans = new Frac(R * B * G, C(N, 3)); desc = 'If 3 marbles are selected at random without replacement, what is the probability that exactly one marble of each color is selected?';
    steps = [['전체', `C(${N}, 3) = ${C(N, 3)}`], ['각 색 하나씩', `${R} × ${B} × ${G} = ${R * B * G}`], ['확률', `<strong>${show(ans)}</strong>`]];
    distract = [{ val: new Frac(6 * R * B * G, N * N * N), why: '복원 추출로 계산한 값입니다.' }, { val: new Frac(R * B * G, N * (N - 1) * (N - 2)), why: '순서를 고려한 분모에 순서 없는 분자를 쓴 값입니다(3!을 곱해야 함).' }, { val: new Frac(R * B * G, N ** 3), why: '복원 추출이면서 순서를 무시한 값입니다.' }, { val: new Frac(1).sub(ans), why: '여사건의 확률입니다.' }]; }
  return {
    ctx: `A bag contains ${R} red marbles, ${B} blue marbles, and ${G} green marbles and no other marbles.`,
    q: `A bag contains ${R} red marbles, ${B} blue marbles, and ${G} green marbles and no other marbles. ${desc}`,
    noun: 'The probability ' + desc.replace(/^If (.*?), what is the probability that (.*)\?$/, (m, a, b) => `that ${b}, if ${a}`),
    qcCtx: `A bag contains ${R} red marbles, ${B} blue marbles, and ${G} green marbles and no other marbles.`,
    ans, distract, trap: distract[0],
    key: '비복원 추출은 조합(C)으로 분자·분모를 모두 셉니다. “적어도”는 여사건이 빠릅니다.',
    steps,
  };
});

// ---------- At least one / exactly k in independent trials ----------
add('binom', 'Data Analysis', '독립 시행 확률', ['MC', 'NE', 'QC'], r => {
  const [a, b] = r.pick([[1, 3], [1, 4], [2, 5], [1, 5], [2, 3], [3, 4], [1, 6]]);
  const p = new Frac(a, b), q = new Frac(b - a, b);
  const n = r.pick([3, 4]);
  const v = r.pick(['atleast', 'exactly2', 'atmost1']);
  const pw = (f, k) => { let x = new Frac(1); for (let i = 0; i < k; i++) x = x.mul(f); return x; };
  let ans, desc, steps, distract;
  if (v === 'atleast') { ans = new Frac(1).sub(pw(q, n)); desc = 'at least one';
    steps = [['여사건', `한 번도 성공하지 않을 확률 = (${show(q)})<sup>${n}</sup> = ${show(pw(q, n))}`], ['답', `1 − ${show(pw(q, n))} = <strong>${show(ans)}</strong>`]];
    distract = [{ val: p.mul(n).v <= 1 ? p.mul(n) : pw(p, n), why: '각 시행의 확률을 단순히 더한 값입니다.' }, { val: pw(p, n), why: '모두 성공할 확률입니다.' }, { val: pw(q, n), why: '한 번도 성공하지 않을 확률입니다.' }, { val: p.mul(pw(q, n - 1)).mul(n), why: '정확히 한 번 성공할 확률입니다.' }]; }
  else if (v === 'exactly2') { ans = pw(p, 2).mul(pw(q, n - 2)).mul(C(n, 2)); desc = 'exactly two';
    steps = [['한 가지 순서', `(${show(p)})² × (${show(q)})<sup>${n - 2}</sup> = ${show(pw(p, 2).mul(pw(q, n - 2)))}`], ['자리 선택', `C(${n}, 2) = ${C(n, 2)}가지`], ['답', `<strong>${show(ans)}</strong>`]];
    distract = [{ val: pw(p, 2).mul(pw(q, n - 2)), why: '성공하는 시행의 위치 C(n, 2)를 곱하지 않은 값입니다.' }, { val: pw(p, 2), why: '나머지 시행이 실패할 확률을 곱하지 않은 값입니다.' }, { val: pw(p, 2).mul(C(n, 2)), why: '실패 확률을 빠뜨린 값입니다.' }, { val: new Frac(1).sub(ans), why: '여사건의 확률입니다.' }]; }
  else { ans = pw(q, n).add(p.mul(pw(q, n - 1)).mul(n)); desc = 'at most one';
    steps = [['0번 성공', `(${show(q)})<sup>${n}</sup> = ${show(pw(q, n))}`], ['1번 성공', `${n} × ${show(p)} × (${show(q)})<sup>${n - 1}</sup> = ${show(p.mul(pw(q, n - 1)).mul(n))}`], ['합', `<strong>${show(ans)}</strong>`]];
    distract = [{ val: pw(q, n).add(p.mul(pw(q, n - 1))), why: '1번 성공하는 위치의 수(n)를 곱하지 않은 값입니다.' }, { val: pw(q, n), why: '0번 성공만 센 값입니다.' }, { val: p.mul(pw(q, n - 1)).mul(n), why: '정확히 1번만 센 값입니다.' }, { val: new Frac(1).sub(ans), why: '여사건의 확률입니다.' }]; }
  const ctx = `Each time a certain machine is tested, the probability that it passes the test is ${show(p)}, independent of all other tests. The machine will be tested ${n} times.`;
  return {
    ctx, qcCtx: ctx,
    q: `${ctx} What is the probability that the machine passes ${desc} of the ${n} tests?`,
    noun: `The probability that the machine passes ${desc} of the ${n} tests`,
    ans, distract, trap: distract[0],
    key: '독립 시행: 특정 순서의 확률을 곱하고, 가능한 순서의 수 C(n, k)를 곱합니다.',
    steps,
  };
});

// ---------- Letter arrangements ----------
add('letters', 'Data Analysis', '같은 것이 있는 순열', ['NE', 'MC', 'QC'], r => {
  const word = r.pick(['LETTER', 'BANANA', 'PEPPER', 'COFFEE', 'BALLOON', 'SUCCESS', 'ASSESS', 'CANNON', 'TATTOO', 'GOGGLES']);
  const L = word.split('');
  const cnt = {}; L.forEach(c => cnt[c] = (cnt[c] || 0) + 1);
  const repeated = Object.keys(cnt).filter(c => cnt[c] >= 2);
  const v = r.pick(['all', 'adj']);
  const total = fact(L.length) / Object.values(cnt).reduce((a, c) => a * fact(c), 1);
  const letter = r.pick(repeated);
  const all = new Set(perms(L).map(p => p.join('')));
  let ans, desc, steps;
  const den = Object.keys(cnt).map(c => `${cnt[c]}!`).filter(s => s !== '1!').join('·');
  if (v === 'all') { ans = all.size; desc = `How many distinct arrangements of the letters in the word ${word} are possible?`;
    steps = [['글자 수와 중복', `${L.length}글자, 중복: ${Object.keys(cnt).filter(c => cnt[c] > 1).map(c => `${c}×${cnt[c]}`).join(', ')}`], ['공식', `${L.length}! / (${den})`], ['답', `<strong>${ans}</strong>`]]; }
  else { const k = cnt[letter]; ans = [...all].filter(s => s.includes(letter.repeat(k))).length; desc = `How many distinct arrangements of the letters in the word ${word} have ${k === 2 ? `both ${letter}'s next to each other` : `all ${k} ${letter}'s next to one another in a single block`}?`;
    const rest = { ...cnt }; delete rest[letter];
    steps = [['묶기', `${k}개의 ${letter}를 한 덩어리로 보면 대상은 ${L.length - k + 1}개`], ['나머지 중복', `${Object.keys(rest).filter(c => rest[c] > 1).map(c => `${c}×${rest[c]}`).join(', ') || '없음'}`], ['답', `${L.length - k + 1}! / (${Object.keys(rest).map(c => `${rest[c]}!`).filter(s => s !== '1!').join('·') || '1'}) = <strong>${ans}</strong>`]]; }
  return {
    q: desc, noun: desc.replace(/^How many (.*) (are possible|have) ?(.*)\?$/, (m, a, b, c) => `The number of ${a}${b === 'have' ? ' that have ' + c : ''}`),
    ans,
    distract: [{ val: fact(L.length), why: '같은 글자를 구별해서 센 값입니다.' }, { val: v === 'all' ? total / 2 : total, why: v === 'all' ? '중복 처리를 한 번 더 한 값입니다.' : '조건 없는 전체 배열 수입니다.' }, { val: v === 'adj' ? fact(L.length - cnt[letter] + 1) : total * 2, why: v === 'adj' ? '나머지 글자의 중복을 나누지 않은 값입니다.' : '중복 하나를 빠뜨린 값입니다.' }, { val: ans * 2, why: '같은 글자 묶음 내부 순서를 센 값입니다.' }],
    trap: { val: fact(L.length), why: '같은 글자를 구별해서 센 값입니다.' },
    key: 'n! ÷ (각 중복 글자 개수의 팩토리얼 곱). 이웃 조건은 묶어서 하나로 봅니다.',
    steps,
  };
});

// ---------- Max of largest with mean/median ----------
add('maxlargest', 'Data Analysis', '평균·중앙값 조건에서 최댓값', ['NE', 'MC', 'QC'], r => {
  const n = r.pick([5, 7, 9]); const h = (n - 1) / 2;
  const med = r.int(h + 2, h + 12); const M = r.int(med + 1, med + 9);
  const lower = h * (h + 1) / 2; const upperOthers = Array.from({ length: h - 1 }, (_, i) => med + 1 + i).reduce((a, b) => a + b, 0);
  const largest = n * M - lower - med - upperOthers;
  const noDistinctBound = n * M - h * 1 - med - (h - 1) * med;
  return {
    ctx: `A list consists of ${n} different positive integers. The average (arithmetic mean) of the integers is ${M}, and the median is ${med}.`,
    q: `A list consists of ${n} different positive integers. The average (arithmetic mean) of the integers is ${M}, and the median is ${med}. What is the greatest possible value of the largest integer in the list?`,
    noun: 'The greatest possible value of the largest integer in the list', ans: largest,
    distract: [{ val: noDistinctBound, why: '“서로 다른” 조건을 무시하고 작은 수를 모두 1, 큰 수를 모두 중앙값으로 둔 값입니다.' }, { val: n * M - med, why: '나머지 수를 모두 0으로 본 값입니다(양의 정수 조건 무시).' }, { val: largest - h + 1, why: '중앙값보다 큰 수들의 최솟값을 잘못 잡은 값입니다.' }, { val: largest + 1, why: '경계 계산 실수 값입니다.' }],
    trap: { val: noDistinctBound, why: '“서로 다른” 조건을 무시한 값입니다.' },
    key: '하나를 최대로 하려면 나머지를 조건이 허락하는 한 최소로 만듭니다.',
    steps: [
      ['합', `${n} × ${M} = ${n * M}`],
      ['나머지 최소화', `중앙값 아래 ${h}개: 1, …, ${h} (합 ${lower}) / 중앙값 ${med} / 그 위 ${h - 1}개: ${h > 1 ? `${med + 1}, …, ${med + h - 1}` : '없음'} (합 ${upperOthers})`],
      ['최댓값', `${n * M} − ${lower} − ${med} − ${upperOthers} = <strong>${largest}</strong>`],
    ],
  };
});

// ---------- Normal distribution ----------
add('normal', 'Data Analysis', '정규분포 (68–95 규칙)', ['MC'], r => {
  const mu = r.int(4, 15) * 10, sd = r.pick([4, 5, 8, 10, 12, 15]);
  const Phi = { '-inf': 0, '-2': 2.5, '-1': 16, '0': 50, '1': 84, '2': 97.5, 'inf': 100 };
  const keys = ['-inf', '-2', '-1', '0', '1', '2', 'inf'];
  let i, j; do { i = r.int(0, 5); j = r.int(i + 1, 6); } while (i === 0 && j === 6);
  const pct = Phi[keys[j]] - Phi[keys[i]];
  const N = r.pick([400, 800, 1200, 2000]);
  const ans = N * pct / 100;
  const bound = k => mu + Number(k) * sd;
  const desc = keys[i] === '-inf' ? `less than ${bound(keys[j])}` : keys[j] === 'inf' ? `greater than ${bound(keys[i])}` : `between ${bound(keys[i])} and ${bound(keys[j])}`;
  const others = [];
  for (let a = 0; a < 6; a++) for (let b = a + 1; b < 7; b++) { const p = Phi[keys[b]] - Phi[keys[a]]; if (p !== pct && p !== 100) others.push(N * p / 100); }
  const uniq = [...new Set(others)];
  return {
    q: `The scores on a certain exam are approximately normally distributed with a mean of ${mu} and a standard deviation of ${sd}. Of ${fmtInt(N)} people who took the exam, approximately how many had scores ${desc}?`,
    ans, intOnly: true,
    distract: r.sample(uniq, 6).map(v => ({ val: v, why: '구간을 표준편차 단위로 바꿀 때 경계를 잘못 잡았거나 68–95 규칙의 반쪽(34%, 13.5%, 2.5%)을 잘못 더한 값입니다.' })),
    key: '정규분포: 평균 ±1σ 안에 약 68%, ±2σ 안에 약 95%. 반쪽으로는 34%, 13.5%, 2.5%.',
    steps: [
      ['표준화', `경계를 평균 ${mu}, 표준편차 ${sd} 기준으로 바꾸면 ${keys[i] === '-inf' ? '−∞' : keys[i] + 'σ'} ~ ${keys[j] === 'inf' ? '+∞' : keys[j] + 'σ'}`],
      ['비율', `누적 비율 근사: −2σ 2.5%, −1σ 16%, 0 50%, +1σ 84%, +2σ 97.5% → ${Phi[keys[j]]}% − ${Phi[keys[i]]}% = ${pct}%`],
      ['인원', `${fmtInt(N)} × ${pct}% = <strong>${fmtInt(ans)}</strong>`],
    ],
  };
});

// ---------- Weighted average ----------
add('weighted', 'Data Analysis', '가중평균 (두 집단)', ['NE', 'MC', 'QC'], r => {
  let a, b, c, nA, nB;
  for (;;) { a = r.int(60, 80); b = r.int(a + 6, 95); c = r.int(a + 1, b - 1); nA = r.int(8, 40); const nb = new Frac(nA * (c - a), b - c); if (nb.isInt() && nb.v >= 3 && nb.v <= 80) { nB = nb.v; break; } }
  return {
    ctx: `The average (arithmetic mean) score of the ${nA} students in class A is ${a}, and the average score of the students in class B is ${b}. The average score of all the students in both classes combined is ${c}.`,
    q: `The average (arithmetic mean) score of the ${nA} students in class A is ${a}, and the average score of the students in class B is ${b}. If the average score of all the students in both classes combined is ${c}, how many students are in class B?`,
    noun: 'The number of students in class B', ans: nB,
    distract: [{ val: new Frac(nA * (b - c), c - a).isInt() ? new Frac(nA * (b - c), c - a) : nA + 1, why: '가중평균의 거리 비를 거꾸로 적용한 값입니다.' }, { val: nA, why: '두 반의 인원이 같다고 가정한 값입니다.' }, { val: nA + nB, why: '두 반 전체 인원입니다.' }, { val: nB + 2, why: '계산 실수 값입니다.' }],
    trap: { val: nA, why: '두 반 인원이 같다고 본 값입니다.' },
    key: '가중평균에서 각 집단의 인원은 전체 평균까지의 거리에 반비례합니다: nA(c − a) = nB(b − c).',
    steps: [['식', `${nA}(${c} − ${a}) = n<sub>B</sub>(${b} − ${c})`], ['계산', `${nA * (c - a)} = ${b - c}n<sub>B</sub>`], ['답', `n<sub>B</sub> = <strong>${nB}</strong>`]],
  };
});

// ---------- Quartiles from frequency table ----------
function median(arr) { const n = arr.length; return n % 2 ? arr[(n - 1) / 2] : (arr[n / 2 - 1] + arr[n / 2]) / 2; }
add('quartile', 'Data Analysis', '도수분포표의 사분위수', ['NE', 'MC', 'QC'], r => {
  const vals = r.pick([[1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6], [10, 20, 30, 40, 50], [2, 4, 6, 8, 10, 12]]);
  let freq, data;
  do { freq = vals.map(() => r.int(1, 7)); data = []; vals.forEach((v, i) => { for (let k = 0; k < freq[i]; k++) data.push(v); }); } while (data.length < 15 || data.length > 30);
  const n = data.length; const half = Math.floor(n / 2);
  const lowerHalf = data.slice(0, half), upperHalf = data.slice(n - half);
  const Q1 = median(lowerHalf), Q3 = median(upperHalf), med = median(data);
  const ask = r.pick(['iqr', 'q3med']);
  const ans = ask === 'iqr' ? Q3 - Q1 : Q3 - med;
  const tbl = tableHtml(['Number of books read', 'Number of students'], vals.map((v, i) => [v, freq[i]]));
  return {
    ctx: `The table shows the distribution of the number of books read last month by each of ${n} students.${tbl}`,
    q: `The table shows the distribution of the number of books read last month by each of ${n} students.${tbl}What is the ${ask === 'iqr' ? 'interquartile range' : 'third quartile minus the median'} of the numbers of books read?`,
    noun: `The ${ask === 'iqr' ? 'interquartile range' : 'third quartile minus the median'} of the numbers of books read`,
    ans, decimal: true,
    distract: [{ val: vals[vals.length - 1] - vals[0], why: '범위(최댓값 − 최솟값)입니다.' }, { val: Math.abs((ask === 'iqr' ? Q3 - med : Q3 - Q1)), why: ask === 'iqr' ? '제3사분위수 − 중앙값입니다.' : '사분위범위입니다.' }, { val: ans + (vals[1] - vals[0]), why: '사분위수 위치를 한 칸 잘못 잡은 값입니다.' }, { val: Math.max(0, ans - (vals[1] - vals[0])), why: '사분위수 위치를 한 칸 잘못 잡은 값입니다.' }],
    trap: { val: vals[vals.length - 1] - vals[0], why: '범위입니다.' },
    key: 'GRE 방식: 자료를 크기순으로 놓고 아래쪽 절반의 중앙값이 Q1, 위쪽 절반의 중앙값이 Q3 (n이 홀수면 중앙값은 양쪽 절반에서 제외).',
    steps: [['누적 도수', vals.map((v, i) => `${v}: ${freq.slice(0, i + 1).reduce((a, b) => a + b, 0)}번째까지`).join(', ')], ['중앙값', `n = ${n} → 중앙값 = ${med}`], ['사분위수', `아래쪽 ${half}개의 중앙값 Q1 = ${Q1}, 위쪽 ${half}개의 중앙값 Q3 = ${Q3}`], ['답', ask === 'iqr' ? `Q3 − Q1 = <strong>${ans}</strong>` : `Q3 − 중앙값 = <strong>${ans}</strong>`]],
  };
});
// ---------- Average changes ----------
add('avgchange', 'Data Analysis', '평균의 변화로 값 구하기', ['NE', 'MC', 'QC'], r => {
  const v = r.pick(['remove', 'next2']);
  if (v === 'remove') {
    const n = r.int(8, 20), a = r.int(30, 80); const b = a + r.pick([-3, -2, -1, 1, 2, 3]); const x = n * a - (n - 1) * b;
    if (x <= 0) return T.find(t => t.id === 'avgchange').gen(r);
    return {
      ctx: `The average (arithmetic mean) of ${n} numbers is ${a}. When one of the numbers, <i>x</i>, is removed, the average of the remaining numbers is ${b}.`,
      q: `The average (arithmetic mean) of ${n} numbers is ${a}. When one of the numbers is removed, the average of the remaining numbers is ${b}. What number was removed?`,
      noun: '<i>x</i>', ans: x,
      distract: [{ val: a + (a - b), why: '평균의 차이만큼만 조정한 값입니다(개수를 곱해야 함).' }, { val: n * (a - b), why: '전체 합의 차이 일부만 계산한 값입니다.' }, { val: n * a - n * b, why: '남은 개수를 n으로 잘못 잡은 값입니다.' }, { val: x + b, why: '계산 실수 값입니다.' }],
      trap: { val: a + (a - b), why: '평균 차이만 반영한 값입니다.' },
      key: '평균 문제는 합으로 바꿔 생각합니다: 합 = 평균 × 개수.',
      steps: [['처음 합', `${n} × ${a} = ${n * a}`], ['남은 합', `${n - 1} × ${b} = ${(n - 1) * b}`], ['제거된 수', `${n * a} − ${(n - 1) * b} = <strong>${x}</strong>`]],
    };
  }
  const n = r.int(4, 9), a = r.int(70, 84), b = a + r.int(2, 5);
  const tot = (n + 2) * b - n * a; if (tot % 2 !== 0 || tot / 2 > 100) return T.find(t => t.id === 'avgchange').gen(r);
  const s = tot / 2;
  return {
    ctx: `A student's average (arithmetic mean) score on ${n} tests is ${a}. The student will take 2 more tests and wants to raise the average score on all ${n + 2} tests to ${b}.`,
    q: `A student's average (arithmetic mean) score on ${n} tests is ${a}. If the student receives the same score on each of the next 2 tests, what must that score be to raise the student's average on all ${n + 2} tests to exactly ${b}?`,
    noun: 'The score the student must receive on each of the next 2 tests', ans: s,
    distract: [{ val: (n + 1) * b - n * a, why: '시험을 1회만 더 보는 경우의 값입니다.' }, { val: b + (b - a), why: '평균 차이만큼만 더 받으면 된다고 본 값입니다.' }, { val: tot, why: '두 시험 점수의 합입니다.' }, { val: s + 1, why: '계산 실수 값입니다.' }],
    trap: { val: b + (b - a), why: '평균 차이만큼만 더한 값입니다.' },
    key: '필요한 총점 − 현재 총점 = 추가로 필요한 점수.',
    steps: [['필요한 총점', `${n + 2} × ${b} = ${(n + 2) * b}`], ['현재 총점', `${n} × ${a} = ${n * a}`], ['두 시험', `(${(n + 2) * b} − ${n * a}) ÷ 2 = <strong>${s}</strong>`]],
  };
});

// ---------- List with unknown x (MA) ----------
add('listx', 'Data Analysis', '미지수가 포함된 자료의 평균·중앙값', ['MA'], r => {
  const base = r.sample([3, 5, 7, 8, 10, 12, 13, 15, 18, 20], 5).sort((a, b) => a - b);
  const cond = r.pick(['mean>median', 'mean<median', 'median=mean']);
  const stats = x => { const L = [...base, x].sort((a, b) => a - b); return { mean: L.reduce((a, b) => a + b, 0) / 6, med: (L[2] + L[3]) / 2 }; };
  const ok = x => { const s = stats(x); return cond === 'mean>median' ? s.mean > s.med + 1e-9 : cond === 'mean<median' ? s.mean < s.med - 1e-9 : Math.abs(s.mean - s.med) < 1e-9; };
  let cands = []; for (let x = 0; x <= 40; x++) cands.push(x);
  let good = cands.filter(ok), bad = cands.filter(x => !ok(x));
  if (!good.length || bad.length < 3) return T.find(t => t.id === 'listx').gen(r);
  const ng = Math.min(good.length, r.int(1, 3));
  const pick = [...r.sample(good, ng), ...r.sample(bad, 6 - ng)].sort((a, b) => a - b);
  const condTxt = { 'mean>median': 'the average (arithmetic mean) of the six numbers is greater than their median', 'mean<median': 'the average (arithmetic mean) of the six numbers is less than their median', 'median=mean': 'the average (arithmetic mean) of the six numbers is equal to their median' }[cond];
  return {
    kind: 'ma', sorted: true,
    q: `The list ${base.join(', ')}, <i>x</i> consists of six numbers. If ${condTxt}, which of the following could be the value of <i>x</i>?<br><br>Indicate <u>all</u> such values.`,
    choices: pick.map(x => { const s = stats(x); return { disp: String(x), v: x, ok: ok(x), why: `x = ${x}이면 평균 = ${nice(s.mean)}, 중앙값 = ${nice(s.med)} → 조건 ${ok(x) ? '만족' : '불만족'}` }; }),
    key: 'x의 위치에 따라 중앙값(가운데 두 수의 평균)이 바뀝니다. 각 보기마다 평균과 중앙값을 직접 계산하는 것이 가장 확실합니다.',
    steps: [['평균', `(${base.reduce((a, b) => a + b, 0)} + x)/6`], ['중앙값', `x를 넣고 정렬한 뒤 3, 4번째 수의 평균 (x가 ${base[2]} 이하/사이/${base[3]} 이상인지에 따라 달라짐)`]],
  };
});

// ---------- Three-set Venn ----------
add('venn3', 'Data Analysis', '세 집합 벤다이어그램', ['NE', 'MC', 'QC'], r => {
  const reg = { a: r.int(5, 20), b: r.int(5, 20), c: r.int(5, 20), ab: r.int(2, 9), ac: r.int(2, 9), bc: r.int(2, 9), abc: r.int(1, 6), none: r.int(3, 25) };
  const A = reg.a + reg.ab + reg.ac + reg.abc, B = reg.b + reg.ab + reg.bc + reg.abc, Cc = reg.c + reg.ac + reg.bc + reg.abc;
  const E2 = reg.ab + reg.ac + reg.bc; const N = Object.values(reg).reduce((s, x) => s + x, 0);
  const ask = r.pick(['none', 'abc']);
  const base = `Of the ${N} students in a program, ${A} study French, ${B} study Spanish, and ${Cc} study Latin. ${E2} students study exactly two of these languages`;
  const ans = ask === 'none' ? reg.none : reg.abc;
  const ctx = ask === 'none' ? `${base}, and ${reg.abc} students study all three.` : `${base}, and ${reg.none} students study none of the three.`;
  const naive = ask === 'none' ? N - (A + B + Cc - E2 - reg.abc) : (A + B + Cc - E2 - (N - reg.none));
  return {
    ctx, q: `${ctx.replace(/\.$/, '')}. How many of the students study ${ask === 'none' ? 'none of the three languages' : 'all three languages'}?`.replace('..', '.'),
    noun: `The number of students who study ${ask === 'none' ? 'none of the three languages' : 'all three languages'}`, ans,
    distract: [{ val: naive, why: '“정확히 셋”의 중복을 한 번만 빼거나(전부 세 번 세어짐) 2로 나누지 않은 값입니다.' }, { val: ask === 'none' ? N - (A + B + Cc - E2) : reg.abc + 1, why: '세 언어를 모두 배우는 학생의 중복을 처리하지 않은 값입니다.' }, { val: ask === 'none' ? N - (A + B + Cc - E2 - 3 * reg.abc) : reg.abc * 2, why: '중복 처리 계수를 잘못 잡은 값입니다.' }, { val: ans + 2, why: '계산 실수 값입니다.' }],
    trap: { val: naive, why: '세 집합 공통 부분의 중복을 잘못 처리한 값입니다.' },
    key: 'A + B + C를 더하면 정확히 둘인 사람은 2번, 셋인 사람은 3번 세어집니다. 적어도 하나 = (A + B + C) − (정확히 둘) − 2 × (셋 모두).',
    steps: [['합계', `${A} + ${B} + ${Cc} = ${A + B + Cc}`], ['중복 제거', `적어도 하나 = ${A + B + Cc} − ${E2} − 2 × ${ask === 'none' ? reg.abc : 't'}${ask === 'none' ? ` = ${N - reg.none}` : ` = ${N} − ${reg.none} = ${N - reg.none}`}`], ['답', `<strong>${ans}</strong>`]],
  };
});

// ---------- Dice ----------
add('dice', 'Data Analysis', '주사위 확률', ['MC', 'NE', 'QC'], r => {
  const isPrime = n => n > 1 && [...Array(n).keys()].slice(2).every(d => n % d);
  const preds = [
    { d: 'the sum of the two numbers is a prime number', f: (a, b) => isPrime(a + b), n: 2 },
    { d: 'the product of the two numbers is a multiple of 4', f: (a, b) => (a * b) % 4 === 0, n: 2 },
    { d: 'the two numbers differ by at least 2', f: (a, b) => Math.abs(a - b) >= 2, n: 2 },
    { d: 'the greater of the two numbers is 5 (if the numbers are equal, that number is the greater)', f: (a, b) => Math.max(a, b) === 5, n: 2 },
    { d: 'the product of the two numbers is greater than their sum', f: (a, b) => a * b > a + b, n: 2 },
    { d: 'the sum of the three numbers is 10', f: (a, b, c) => a + b + c === 10, n: 3 },
    { d: 'the three numbers are all different', f: (a, b, c) => a !== b && b !== c && a !== c, n: 3 },
  ];
  const P = r.pick(preds);
  let fav = 0, tot = 0; const list = [];
  if (P.n === 2) for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) { tot++; if (P.f(a, b)) { fav++; list.push(`(${a},${b})`); } }
  else for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) for (let c = 1; c <= 6; c++) { tot++; if (P.f(a, b, c)) fav++; }
  const ans = new Frac(fav, tot);
  return {
    ctx: `${P.n === 2 ? 'Two' : 'Three'} fair six-sided dice, each with faces numbered 1 through 6, are rolled.`,
    qcCtx: `${P.n === 2 ? 'Two' : 'Three'} fair six-sided dice, each with faces numbered 1 through 6, are rolled.`,
    q: `${P.n === 2 ? 'Two' : 'Three'} fair six-sided dice, each with faces numbered 1 through 6, are rolled. What is the probability that ${P.d}?`,
    noun: `The probability that ${P.d}`, ans,
    distract: [{ val: new Frac(fav, P.n === 2 ? 21 : 56), why: '순서를 무시한(같은 확률이 아닌) 경우를 분모로 쓴 값입니다.' }, { val: new Frac(tot - fav, tot), why: '여사건의 확률입니다.' }, { val: new Frac(fav + 1, tot), why: '경우 하나를 더 센 값입니다.' }, { val: new Frac(Math.max(1, fav - 2), tot), why: '(a, b)와 (b, a)를 하나로 센 경우가 섞인 값입니다.' }],
    trap: { val: new Frac(fav + 1, tot), why: '경우 하나를 더 센 값입니다.' },
    key: `순서쌍 ${tot}가지가 모두 같은 확률입니다. (a, b)와 (b, a)는 다른 결과로 셉니다.`,
    steps: [['전체', `${P.n === 2 ? '6 × 6 = 36' : '6³ = 216'}가지`], ['유리한 경우', P.n === 2 && list.length <= 16 ? `${fav}가지: ${list.join(' ')}` : `${fav}가지`], ['확률', `${fav}/${tot} = <strong>${show(ans)}</strong>`]],
  };
});

// ---------- Lattice paths ----------
add('paths', 'Data Analysis', '격자 경로의 수', ['NE', 'MC', 'QC'], r => {
  const a = r.int(4, 7), b = r.int(3, 6); const c = r.int(1, a - 1), d = r.int(1, b - 1);
  const through = C(c + d, c) * C(a - c + b - d, a - c), total = C(a + b, a);
  const v = r.pick(['through', 'avoid']);
  const ans = v === 'through' ? through : total - through;
  return {
    q: `In the <i>xy</i>-plane, a path from (0, 0) to (${a}, ${b}) consists of a sequence of moves, each of which is either 1 unit to the right or 1 unit up. How many such paths ${v === 'through' ? 'pass through' : 'do <u>not</u> pass through'} the point (${c}, ${d})?`,
    noun: `The number of such paths from (0, 0) to (${a}, ${b}) that ${v === 'through' ? 'pass through' : 'do not pass through'} (${c}, ${d})`,
    ans,
    distract: [{ val: v === 'through' ? C(c + d, c) + C(a - c + b - d, a - c) : through, why: v === 'through' ? '두 구간의 경로 수를 곱하지 않고 더한 값입니다.' : '통과하는 경로의 수입니다.' }, { val: total, why: '조건 없는 전체 경로 수입니다.' }, { val: v === 'through' ? total - through : ans + C(c + d, c), why: '여사건과 혼동한 값입니다.' }, { val: C(a + b, 2), why: '이동 횟수에서 2개를 고른 잘못된 값입니다.' }],
    trap: { val: total, why: '전체 경로 수입니다.' },
    key: '오른쪽 m번, 위 n번 이동하는 경로 수 = C(m + n, m). 경유점은 두 구간의 곱입니다.',
    steps: [['전체', `C(${a + b}, ${a}) = ${total}`], ['경유', `(0,0)→(${c},${d}): C(${c + d}, ${c}) = ${C(c + d, c)}, (${c},${d})→(${a},${b}): C(${a - c + b - d}, ${a - c}) = ${C(a - c + b - d, a - c)} → 곱 ${through}`], ['답', `<strong>${ans}</strong>`]],
  };
});

// ---------- Must be greater (MA) ----------
add('mustgt', 'Algebra', '구간 조건에서 항상 참인 부등식', ['MA'], r => {
  const dom = r.pick([{ d: '−1 &lt; <i>x</i> &lt; 0', lo: -1, hi: 0 }, { d: '0 &lt; <i>x</i> &lt; 1', lo: 0, hi: 1 }, { d: '<i>x</i> &lt; −1', lo: -30, hi: -1 }]);
  const dir = r.pick(['greater', 'less']);
  const E = [
    { d: sup(X, 2), f: x => x * x }, { d: sup(X, 3), f: x => x ** 3 }, { d: `1/${X}`, f: x => 1 / x }, { d: `−${X}`, f: x => -x },
    { d: `${X}/2`, f: x => x / 2 }, { d: `2${X}`, f: x => 2 * x }, { d: `${X} − 1/${X}`, f: x => x - 1 / x }, { d: `|${X}|`, f: x => Math.abs(x) },
    { d: `${X} + 1`, f: x => x + 1 }, { d: `1/${sup(X, 2)}`, f: x => 1 / (x * x) }, { d: `${sup(X, 2)} − ${X}`, f: x => x * x - x },
  ];
  const pts = grid(dom.lo, dom.hi, 1000);
  const holds = (e, x) => dir === 'greater' ? e.f(x) > x : e.f(x) < x;
  const nicePts = [-0.5, -0.1, -0.9, -0.25, 0.5, 0.1, 0.9, 0.25, -2, -1.5, -10, -1.1].filter(x => x > dom.lo && x < dom.hi);
  const res = E.map(e => { const ok = pts.every(x => holds(e, x)); const cex = nicePts.find(x => !holds(e, x)) ?? pts.find(x => !holds(e, x)); return { ...e, ok, cex }; });
  const good = res.filter(e => e.ok), bad = res.filter(e => !e.ok);
  if (good.length < 1 || bad.length < 2) return T.find(t => t.id === 'mustgt').gen(r);
  const ng = Math.min(good.length, r.int(2, 3));
  const pick = [...r.sample(good, ng), ...r.sample(bad, 6 - ng)];
  const ex = dom.lo === -30 ? -2 : (dom.lo + dom.hi) / 2;
  return {
    kind: 'ma',
    q: `If ${dom.d}, which of the following must be ${dir} than <i>x</i>?<br><br>Indicate <u>all</u> such expressions.`,
    choices: pick.map(e => ({ disp: e.d, ok: e.ok, why: e.ok ? `구간 전체에서 성립합니다(예: x = ${nice(ex)}일 때 ${nice(e.f(ex))} ${dir === 'greater' ? '>' : '<'} ${nice(ex)}).` : `x = ${nice(e.cex)}이면 ${e.d.replace(/<sup>(.*?)<\/sup>/g, '^$1').replace(/<[^>]+>/g, '')} = ${nice(+e.f(e.cex).toFixed(4))}로 x보다 ${dir === 'greater' ? '크지 않습니다' : '작지 않습니다'}.` })),
    key: '“must be”는 구간 전체에서 성립해야 합니다. 구간의 양 끝 근처와 대표값을 함께 대입해 보세요.',
    steps: [['대표값', `x = ${nice(ex)} 대입 결과를 먼저 봅니다.`], ['끝 근처 확인', `구간 끝(${dom.lo === -30 ? '−∞ 쪽과 −1 근처' : `${dom.lo}과 ${dom.hi} 근처`})에서 관계가 뒤집히는지 확인합니다.`]],
  };
});

// ---------- Inequality system (MA) ----------
add('ineqma', 'Algebra', '부등식 연립: 가능한 값', ['MA'], r => {
  let a, b, c;
  do { a = r.int(-6, 2); b = a + r.int(3, 9); c = r.pick([1, 2, 3, 4, 5, 6, 8, 9]); } while (false);
  const ok = x => (x - a) * (x - b) < 0 && x * x > c;
  const cands = []; for (let t = 2 * (a - 2); t <= 2 * (b + 2); t++) cands.push(t / 2);
  const good = cands.filter(ok), bad = cands.filter(x => !ok(x));
  if (good.length < 1 || bad.length < 3) return T.find(t => t.id === 'ineqma').gen(r);
  const ng = Math.min(good.length, r.int(2, 3));
  const pick = [...r.sample(good, ng), ...r.sample(bad, 6 - ng)].sort((p, q) => p - q);
  const s = Math.sqrt(c);
  const lin = (v) => v === 0 ? X : `${X} ${v > 0 ? '−' : '+'} ${Math.abs(v)}`;
  return {
    kind: 'ma', sorted: true,
    q: `Which of the following values of <i>x</i> satisfy both (${lin(a)})(${lin(b)}) &lt; 0 and ${sup(X, 2)} &gt; ${c}?<br><br>Indicate <u>all</u> such values.`,
    choices: pick.map(x => ({ disp: nice(x), v: x, ok: ok(x), why: `x = ${nice(x)}: (x − ${a})(x − ${b}) = ${nice((x - a) * (x - b))}, x² = ${nice(x * x)} → ${ok(x) ? '두 조건 모두 만족' : '조건 불만족'}` })),
    key: '곱이 음수 ↔ x가 두 근 사이. x² > c ↔ x > √c 또는 x < −√c.',
    steps: [['첫째 조건', `${a} < x < ${b}`], ['둘째 조건', `x < −${nice(s) === String(s) ? s : '√' + c} 또는 x > ${Number.isInteger(s) ? s : '√' + c}`], ['교집합', '두 구간이 겹치는 부분의 값만 정답입니다(끝값 제외).']],
  };
});

module.exports = T;
