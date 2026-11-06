'use strict';
// Quantitative Comparison items with variables. Answers are decided by dense sampling
// over the stated domain (decide()), and the explanations add hand-written reasoning
// plus concrete witnesses when the answer is (D).
const { Frac, fmtInt, sup, nice, decide, grid } = require('./lib');
const T = [];
const add = (id, area, topic, gen) => T.push({ id, area, topic, formats: ['QC'], gen });
const X = '<i>x</i>', Y = '<i>y</i>';

function witnesses(points, fA, fB, fmtPt) {
  let gt = null, lt = null, eq = null;
  for (const p of points) {
    const a = fA(p), b = fB(p); if (!isFinite(a) || !isFinite(b)) continue;
    const d = a - b;
    if (Math.abs(d) < 1e-9) { if (!eq) eq = [p, a, b]; } else if (d > 0) { if (!gt) gt = [p, a, b]; } else if (!lt) lt = [p, a, b];
  }
  const line = w => `${fmtPt(w[0])}이면 Quantity A = ${nice(w[1])}, Quantity B = ${nice(w[2])}`;
  return [gt, lt, eq].filter(Boolean).map(line).join('<br>');
}

// 0<x<1 or -1<x<0 power comparison
add('qc_pow', 'Algebra', '구간에 따른 거듭제곱 대소', r => {
  const neg = r.chance(0.5);
  let p, q; do { p = r.int(2, 7); q = r.int(2, 7); } while (p === q || (neg && (p > 6 || q > 6)));
  const root = !neg && r.chance(0.3);
  const fA = x => root ? Math.sqrt(x) : x ** p, fB = x => x ** q;
  const pts = neg ? grid(-1, 0, 500) : grid(0, 1, 500);
  const ans = decide(pts.map(x => [fA(x), fB(x)]));
  const ex = neg ? -0.5 : 0.5;
  return {
    kind: 'qc', ctx: neg ? `−1 &lt; ${X} &lt; 0` : `0 &lt; ${X} &lt; 1`, A: root ? `√${X}` : sup(X, p), B: sup(X, q), ans,
    key: neg ? '−1 < x < 0이면 짝수 거듭제곱은 양수, 홀수 거듭제곱은 음수이고, 지수가 커질수록 절댓값이 작아집니다.' : '0 < x < 1이면 x를 곱할수록 작아지므로 지수가 클수록 값이 작습니다. √x는 x보다 큽니다.',
    steps: [
      ['구간의 성질', neg ? '|x| < 1이므로 |x|ⁿ은 n이 커질수록 작아지고, 부호는 n의 홀짝으로 결정됩니다.' : '0 < x < 1에서 x² < x, x³ < x² … 이고 √x > x입니다.'],
      ['대표값 확인', `x = ${neg ? '−1/2' : '1/2'}: Quantity A = ${nice(fA(ex))}, Quantity B = ${nice(fB(ex))}`],
      ['일반화', '이 대소 관계는 구간 전체에서 유지되므로(부호와 크기 순서가 바뀌지 않음) 관계가 결정됩니다.'],
    ],
  };
});

add('qc_xy', 'Algebra', '부호 분석 (인수분해)', r => {
  const v = r.pick(['negneg', 'pospos', 'mixed', 'any']);
  const ctx = { negneg: `${X} &lt; ${Y} &lt; 0`, pospos: `0 &lt; ${X} &lt; ${Y}`, mixed: `${X} &lt; 0 &lt; ${Y}`, any: `${X} &lt; ${Y} and ${X}${Y} ≠ 0` }[v];
  const range = { negneg: [[-9, 0], [-9, 0]], pospos: [[0, 9], [0, 9]], mixed: [[-9, 0], [0, 9]], any: [[-9, 9], [-9, 9]] }[v];
  const pts = []; for (const x of grid(range[0][0], range[0][1], 60)) for (const y of grid(range[1][0], range[1][1], 60)) if (x < y && Math.abs(x * y) > 1e-9) pts.push([x, y]);
  const fA = ([x, y]) => x * x * y, fB = ([x, y]) => x * y * y;
  const ans = decide(pts.map(p => [fA(p), fB(p)]));
  const nicePts = [[-3, -1], [-2, -1], [1, 2], [1, 3], [-2, 1], [-1, 3], [2, 3]].filter(([x, y]) => x < y && ({ negneg: x < 0 && y < 0, pospos: x > 0, mixed: x < 0 && y > 0, any: true }[v]));
  return {
    kind: 'qc', ctx, A: `${sup(X, 2)}${Y}`, B: `${X}${sup(Y, 2)}`, ans,
    key: '차이를 인수분해합니다: x²y − xy² = xy(x − y).',
    steps: [
      ['차이 계산', 'A − B = x²y − xy² = xy(x − y)'],
      ['부호 판정', `x < y이므로 (x − y) < 0. ${v === 'any' ? 'xy의 부호는 주어지지 않았으므로 A − B의 부호가 정해지지 않습니다.' : `xy ${v === 'mixed' ? '< 0' : '> 0'}이므로 A − B ${v === 'mixed' ? '> 0' : '< 0'}.`}`],
      ['확인', witnesses(nicePts, fA, fB, ([x, y]) => `x = ${x}, y = ${y}`)],
    ],
  };
});

add('qc_fracadd', 'Algebra', '분자·분모에 같은 수 더하기', r => {
  const v = r.pick(['lt', 'gt', 'any']);
  const ctx = { lt: `0 &lt; <i>a</i> &lt; <i>b</i> and <i>k</i> &gt; 0`, gt: `0 &lt; <i>b</i> &lt; <i>a</i> and <i>k</i> &gt; 0`, any: `<i>a</i>, <i>b</i>, and <i>k</i> are positive` }[v];
  const pts = []; const g = grid(0, 10, 18);
  for (const a of g) for (const b of g) for (const k of grid(0, 10, 6)) { if (v === 'lt' && !(a < b)) continue; if (v === 'gt' && !(b < a)) continue; pts.push([a, b, k]); }
  const fA = ([a, b, k]) => (a + k) / (b + k), fB = ([a, b]) => a / b;
  const ans = decide(pts.map(p => [fA(p), fB(p)]));
  return {
    kind: 'qc', ctx, A: `(<i>a</i> + <i>k</i>)/(<i>b</i> + <i>k</i>)`, B: `<i>a</i>/<i>b</i>`, ans,
    key: '(a + k)/(b + k) − a/b = k(b − a)/(b(b + k)) — 부호는 (b − a)가 결정합니다.',
    steps: [
      ['차이 계산', '(a + k)/(b + k) − a/b = [b(a + k) − a(b + k)] / [b(b + k)] = k(b − a) / [b(b + k)]'],
      ['부호', v === 'any' ? 'a와 b의 대소가 주어지지 않았으므로 부호가 정해지지 않습니다(a = b이면 같음).' : `분모와 k는 양수, b − a ${v === 'lt' ? '> 0' : '< 0'}.`],
      ['직관', '분수에 같은 양수를 분자·분모에 더하면 값이 1에 가까워집니다.'],
      ...(v === 'any' ? [['반례', witnesses([[1, 2, 1], [2, 1, 1], [1, 1, 1]], fA, fB, ([a, b, k]) => `a = ${a}, b = ${b}, k = ${k}`)]] : []),
    ],
  };
});

add('qc_recip', 'Algebra', 'x + 1/x와 2 (산술-기하 평균)', r => {
  const v = r.pick(['pos', 'posne1', 'neg']);
  const ctx = { pos: `${X} &gt; 0`, posne1: `${X} &gt; 0 and ${X} ≠ 1`, neg: `${X} &lt; 0` }[v];
  const pts = (v === 'neg' ? grid(-20, 0, 2000) : grid(0, 20, 2000)).concat(v === 'pos' ? [1] : []).filter(x => !(v === 'posne1' && x === 1));
  const fA = x => x + 1 / x, fB = () => 2;
  const ans = decide(pts.map(x => [fA(x), 2]));
  return {
    kind: 'qc', ctx, A: `${X} + 1/${X}`, B: '2', ans,
    key: 'x + 1/x − 2 = (x − 1)²/x 입니다.',
    steps: [
      ['차이 정리', 'x + 1/x − 2 = (x² − 2x + 1)/x = (x − 1)²/x'],
      ['부호', v === 'neg' ? 'x < 0이면 분모가 음수 → 차이 < 0 (x + 1/x ≤ −2)' : v === 'pos' ? 'x > 0이면 차이 ≥ 0이고, x = 1일 때만 0입니다. 따라서 같을 수도, 클 수도 있습니다.' : 'x > 0, x ≠ 1이면 (x − 1)² > 0이므로 차이 > 0'],
      ['확인', witnesses(v === 'neg' ? [-1, -2] : [1, 2, 0.5], fA, fB, x => `x = ${nice(x)}`)],
    ],
  };
});

add('qc_amgm', 'Algebra', '합이 일정할 때 곱의 최대', r => {
  const S = r.pick([10, 12, 14, 16, 20]);
  const v = r.pick(['ab', 'abne', 'sqrt']);
  if (v === 'sqrt') {
    const pts = []; for (const x of grid(0, 20, 80)) for (const y of grid(0, 20, 80)) if (x < y) pts.push([x, y]);
    const fA = ([x, y]) => Math.sqrt(x * y), fB = ([x, y]) => (x + y) / 2;
    return {
      kind: 'qc', ctx: `0 &lt; ${X} &lt; ${Y}`, A: `√(${X}${Y})`, B: `(${X} + ${Y})/2`, ans: decide(pts.map(p => [fA(p), fB(p)])),
      key: '산술평균 ≥ 기하평균, 등호는 두 수가 같을 때만 성립합니다.',
      steps: [['차이', '(x + y)/2 − √(xy) = (√x − √y)²/2'], ['부호', 'x ≠ y이므로 (√x − √y)² > 0 → 산술평균이 항상 더 큽니다.'], ['예시', 'x = 1, y = 4: √4 = 2 < 2.5']],
    };
  }
  const bVal = r.pick([S * S / 4, S * S / 4, S * S / 4 - 1, S * S / 4 + 1]);
  const pts = grid(0, S, 4000).concat([S / 2]).filter(a => !(v === 'abne' && Math.abs(a - S / 2) < 1e-12));
  const fA = a => a * (S - a);
  const ans = decide(pts.map(a => [fA(a), bVal]));
  return {
    kind: 'qc', ctx: `<i>a</i> and <i>b</i> are positive numbers such that <i>a</i> + <i>b</i> = ${S}${v === 'abne' ? ' and <i>a</i> ≠ <i>b</i>' : ''}.`, A: '<i>ab</i>', B: fmtInt(bVal), ans,
    key: `a + b = ${S}이면 ab = a(${S} − a)는 a = ${S / 2}일 때 최대 ${S * S / 4}이고, a가 0에 가까우면 0에 가까워집니다.`,
    steps: [
      ['범위 구하기', `ab = a(${S} − a) = ${S * S / 4} − (a − ${S / 2})² → 0 < ab ≤ ${S * S / 4}${v === 'abne' ? ' (a ≠ b이므로 최댓값은 불가 → ab < ' + S * S / 4 + ')' : ''}`],
      ['비교', `Quantity B = ${bVal}과 ab의 가능 범위를 비교합니다.`],
      ['확인', witnesses([S / 2, 1, S / 2 - 1, 0.5].filter(a => !(v === 'abne' && a === S / 2)), fA, () => bVal, a => `a = ${nice(a)}, b = ${nice(S - a)}`) || '모든 경우 같은 대소 관계입니다.'],
    ],
  };
});

add('qc_interval', 'Algebra', '구간에서의 함수값 범위', r => {
  const m = r.int(1, 5), n = r.int(1, 5);
  const fs = [
    { d: sup(X, 2), f: x => x * x, lo: 0, loIn: true, hi: Math.max(m, n) ** 2, txt: `x² 의 범위: 0 ≤ x² < ${Math.max(m, n) ** 2}` },
    { d: sup(X, 3), f: x => x ** 3, lo: -(m ** 3), loIn: false, hi: n ** 3, txt: `x³ 의 범위: −${m ** 3} < x³ < ${n ** 3}` },
    { d: `|${X}|`, f: x => Math.abs(x), lo: 0, loIn: true, hi: Math.max(m, n), txt: `|x| 의 범위: 0 ≤ |x| < ${Math.max(m, n)}` },
  ];
  const F = r.pick(fs);
  const opts = [F.hi, F.hi + 1, F.lo, Math.round((F.lo + F.hi) / 2), F.lo - 1, Math.ceil(F.hi / 2)];
  const v = r.pick(opts);
  const pts = grid(-m, n, 3000).concat([0, -m + 1e-6, n - 1e-6]);
  const ans = decide(pts.map(x => [F.f(x), v]));
  const nicePts = [0, -m / 2, n / 2, -m + 0.01, n - 0.01, 1, -1].filter(x => x > -m && x < n);
  return {
    kind: 'qc', ctx: `−${m} &lt; ${X} &lt; ${n}`, A: F.d, B: fmtInt(v), ans,
    key: '구간의 양 끝(포함 여부)과 0을 지나는지 확인해 함수값의 범위를 먼저 구합니다.',
    steps: [
      ['값의 범위', F.txt + ' (끝값은 포함되지 않음)'],
      ['비교', `Quantity B = ${v}가 이 범위의 ${ans === 'D' ? '안쪽에 있으므로 대소가 바뀔 수 있습니다' : '바깥에 있으므로 대소가 하나로 정해집니다'}.`],
      ['확인', witnesses(nicePts, F.f, () => v, x => `x = ${nice(x)}`)],
    ],
  };
});

add('qc_tri3', 'Geometry', '삼각형 세 변의 조건', r => {
  const a = r.int(3, 9), b = a + r.int(2, 8);
  const lo = b - a, hi = a + b;
  const v = r.pick([lo, lo - 1, hi, hi + 1, Math.round((lo + hi) / 2), lo + 1, hi - 1]);
  const ans = v <= lo ? 'A' : v >= hi ? 'B' : 'D';
  return {
    kind: 'qc', ctx: `Two sides of a triangle have lengths ${a} and ${b}. The third side has length <i>x</i>.`, A: '<i>x</i>', B: fmtInt(v), ans,
    key: '삼각형의 한 변은 나머지 두 변의 차보다 크고 합보다 작습니다(등호 불가).',
    steps: [
      ['삼각형 부등식', `${b} − ${a} < x < ${a} + ${b} → ${lo} < x < ${hi}`],
      ['비교', ans === 'D' ? `${v}는 (${lo}, ${hi}) 안에 있으므로 x는 ${v}보다 클 수도 작을 수도 있습니다(예: x = ${lo + 0.5}, x = ${hi - 0.5}).` : `x는 항상 ${ans === 'A' ? `${lo}보다 크므로 ${v} 이하인 값보다 큽니다` : `${hi}보다 작으므로 ${v} 이상인 값보다 작습니다`}.`],
    ],
  };
});

add('qc_pctxyz', 'Arithmetic', '퍼센트 관계 비교', r => {
  if (r.chance(0.5)) {
    const p = r.pick([20, 25, 40, 50, 60, 75, 80, 120, 150]), q = r.pick([20, 25, 40, 50, 60, 75, 80, 120, 150]);
    const coef = new Frac(p * q, 10000);
    const alt = r.pick([coef, coef, new Frac(p + q, 100), new Frac(p * q + 100, 10000), new Frac(Math.max(1, p * q - 100), 10000)]);
    const ans = coef.cmp(alt) === 0 ? 'C' : coef.cmp(alt) > 0 ? 'A' : 'B';
    return {
      kind: 'qc', ctx: `<i>x</i> is ${p} percent of <i>y</i>, and <i>y</i> is ${q} percent of <i>z</i>, where <i>z</i> &gt; 0.`, A: '<i>x</i>', B: `${(+alt.v.toFixed(6))}<i>z</i>`, ans,
      key: '퍼센트 관계는 계수를 곱해서 연결합니다: x = (p/100)(q/100)z.',
      steps: [['연결', `x = ${p / 100} × y = ${p / 100} × ${q / 100} × z = ${+coef.v.toFixed(6)}z`], ['비교', `z > 0이므로 계수 ${+coef.v.toFixed(6)}과 ${+alt.v.toFixed(6)}을 비교하면 됩니다.`]],
    };
  }
  const [p, q] = r.pick([[25, 20], [100, 50], [150, 60], [20, 20], [50, 30], [40, 30], [60, 40], [300, 75], [10, 10], [50, 40]]);
  const coef = new Frac(100 + p, 100).mul(new Frac(100 - q, 100));
  const ans = coef.cmp(1) === 0 ? 'C' : coef.cmp(1) > 0 ? 'A' : 'B';
  return {
    kind: 'qc', ctx: `<i>x</i> is ${p} percent greater than <i>y</i>, and <i>y</i> is ${q} percent less than <i>z</i>, where <i>z</i> &gt; 0.`, A: '<i>x</i>', B: '<i>z</i>', ans,
    key: '증가 p%, 감소 q%는 (1 + p/100), (1 − q/100)을 곱합니다. p%와 q%를 단순 비교하면 함정입니다.',
    steps: [['연결', `x = ${(100 + p) / 100}y, y = ${(100 - q) / 100}z → x = ${+coef.v.toFixed(4)}z`], ['비교', `계수 ${+coef.v.toFixed(4)}과 1을 비교합니다.`]],
  };
});

add('qc_quadroot', 'Algebra', '이차방정식의 해와 비교', r => {
  let a, b; do { a = r.int(-6, 8); b = r.int(-6, 8); } while (a === b);
  const lo = Math.min(a, b), hi = Math.max(a, b);
  const c = r.pick([lo - 1, lo, hi, hi + 1, lo - 2, Math.floor((lo + hi) / 2)]);
  const ans = decide([a, b].map(x => [x, c]));
  const eq = require('./lib').expr([[1, sup(X, 2)], [-(a + b), X], [a * b, '']]) + ' = 0';
  return {
    kind: 'qc', ctx: eq, A: X, B: fmtInt(c), ans,
    key: '방정식에 해가 두 개 있으면 x는 둘 중 아무거나일 수 있습니다. 두 해 모두와 비교해야 합니다.',
    steps: [['인수분해', `(x ${a < 0 ? '+' : '−'} ${Math.abs(a)})(x ${b < 0 ? '+' : '−'} ${Math.abs(b)}) = 0 → x = ${a} 또는 x = ${b}`], ['비교', `${c}와 두 해 ${lo}, ${hi}를 각각 비교합니다.`]],
  };
});

add('qc_recip2', 'Algebra', '역수의 대소 (부호 주의)', r => {
  const v = r.pick(['pospos', 'any', 'negneg', 'mixed']);
  const ctx = { pospos: `${X} &gt; ${Y} &gt; 0`, any: `${X} &gt; ${Y} and ${X}${Y} ≠ 0`, negneg: `0 &gt; ${X} &gt; ${Y}`, mixed: `${X} &gt; 0 &gt; ${Y}` }[v];
  const pts = []; const g = grid(-9, 9, 90);
  for (const x of g) for (const y of g) { if (!(x > y) || Math.abs(x * y) < 1e-9) continue; if (v === 'pospos' && !(y > 0)) continue; if (v === 'negneg' && !(x < 0)) continue; if (v === 'mixed' && !(x > 0 && y < 0)) continue; pts.push([x, y]); }
  const fA = ([x]) => 1 / x, fB = ([, y]) => 1 / y;
  const ans = decide(pts.map(p => [fA(p), fB(p)]));
  return {
    kind: 'qc', ctx, A: `1/${X}`, B: `1/${Y}`, ans,
    key: '1/x − 1/y = (y − x)/(xy). x > y이면 분자는 음수이므로 부호는 xy가 결정합니다.',
    steps: [['차이', '1/x − 1/y = (y − x)/(xy), 그리고 y − x < 0'], ['xy의 부호', { pospos: 'xy > 0 → 차이 < 0', negneg: 'xy > 0 → 차이 < 0', mixed: 'xy < 0 → 차이 > 0', any: 'xy의 부호가 정해지지 않음' }[v]], ['확인', witnesses([[2, 1], [1, -1], [-1, -2]].filter(([x, y]) => ({ pospos: y > 0, negneg: x < 0, mixed: x > 0 && y < 0, any: true }[v])), fA, fB, ([x, y]) => `x = ${x}, y = ${y}`)]],
  };
});

add('qc_factorial', 'Arithmetic', '팩토리얼 식 정리', r => {
  const v = r.pick(['eq', 'sq', 'k2', 'k2p']);
  const Bd = { eq: `${sup('<i>k</i>', 2)} + <i>k</i>`, sq: `(<i>k</i> + 1)${sup('', 2)}`, k2: sup('<i>k</i>', 2), k2p: `${sup('<i>k</i>', 2)} + 2` }[v];
  const fB = { eq: k => k * k + k, sq: k => (k + 1) ** 2, k2: k => k * k, k2p: k => k * k + 2 }[v];
  const pts = []; for (let k = 2; k <= 30; k++) pts.push([k * (k + 1), fB(k)]);
  const ans = decide(pts);
  return {
    kind: 'qc', ctx: '<i>k</i> is an integer greater than 1.', A: '(<i>k</i> + 1)!/(<i>k</i> − 1)!', B: Bd, ans,
    key: '(k + 1)! = (k + 1)·k·(k − 1)! 이므로 (k + 1)!/(k − 1)! = k(k + 1) = k² + k.',
    steps: [['팩토리얼 약분', '(k + 1)!/(k − 1)! = (k + 1)k'], ['비교', `k² + k 와 ${Bd}를 비교합니다.${v === 'k2p' ? ' 차이는 k − 2이므로 k = 2이면 같고 k > 2이면 A가 큽니다.' : ''}`]],
  };
});

add('qc_consec3', 'Arithmetic', '연속 정수의 곱과 거듭제곱', r => {
  const v = r.pick(['ac', 'avg', 'abc', 'abcpos']);
  const pos = v === 'abcpos';
  const ctx = `<i>a</i>, <i>b</i>, and <i>c</i> are consecutive ${pos ? 'positive ' : ''}integers, and <i>a</i> &lt; <i>b</i> &lt; <i>c</i>.`;
  const map = { ac: ['<i>ac</i>', sup('<i>b</i>', 2), b => (b - 1) * (b + 1), b => b * b], avg: ['(<i>a</i> + <i>c</i>)/2', '<i>b</i>', b => b, b => b], abc: ['<i>abc</i>', sup('<i>b</i>', 3), b => (b - 1) * b * (b + 1), b => b ** 3], abcpos: ['<i>abc</i>', sup('<i>b</i>', 3), b => (b - 1) * b * (b + 1), b => b ** 3] }[v];
  const pts = []; for (let b = pos ? 2 : -20; b <= 20; b++) pts.push([map[2](b), map[3](b)]);
  const ans = decide(pts);
  return {
    kind: 'qc', ctx, A: map[0], B: map[1], ans,
    key: 'a = b − 1, c = b + 1로 놓고 b 하나로 표현합니다.',
    steps: [['b로 표현', { ac: 'ac = (b − 1)(b + 1) = b² − 1', avg: '(a + c)/2 = ((b − 1) + (b + 1))/2 = b', abc: 'abc = b(b² − 1) = b³ − b', abcpos: 'abc = b(b² − 1) = b³ − b' }[v]], ['비교', { ac: '항상 1 작습니다.', avg: '항상 같습니다.', abc: 'b > 0이면 A < B, b < 0이면 A > B, b = 0이면 같습니다(정수 b의 부호가 주어지지 않음).', abcpos: 'b ≥ 2이므로 b³ − b < b³.' }[v]]],
  };
});

// Standard deviation comparison
add('qc_sd', 'Data Analysis', '표준편차 비교 (변환·퍼짐)', r => {
  const mean = r.int(10, 60);
  const a = r.int(1, 4), b = a + r.int(1, 5);
  const X0 = [mean - b, mean - a, mean, mean + a, mean + b];
  const v = r.pick(['shift', 'scale', 'negate', 'spread', 'spread2']);
  let Y0, why;
  if (v === 'shift') { const c = r.int(5, 40); Y0 = X0.map(x => x + c); why = `List Y의 각 값은 List X의 각 값에 ${c}를 더한 것입니다. 모든 값을 같은 수만큼 이동하면 퍼짐(표준편차)은 변하지 않습니다.`; }
  else if (v === 'scale') { Y0 = X0.map(x => 2 * x); why = 'List Y는 List X의 각 값을 2배한 것이므로 표준편차도 2배가 됩니다.'; }
  else if (v === 'negate') { const c = r.int(80, 120); Y0 = X0.map(x => c - x); why = `List Y의 각 값은 ${c} − (X의 값)입니다. 부호를 바꾸고 이동해도 평균으로부터의 거리는 그대로이므로 표준편차는 같습니다.`; }
  else if (v === 'spread') { const a2 = a + r.int(0, 2), b2 = b + r.int(1, 3); const m2 = mean + r.int(-5, 5); Y0 = [m2 - b2, m2 - a2, m2, m2 + a2, m2 + b2]; why = `두 목록 모두 평균을 중심으로 대칭이고, 편차의 절댓값이 X는 {${a}, ${b}}, Y는 {${a2}, ${b2}}입니다. Y의 편차가 각각 같거나 크므로 Y의 표준편차가 더 큽니다.`; }
  else { const m2 = mean + r.int(-5, 5); const d2 = a + b; Y0 = [m2 - d2, m2, m2, m2, m2 + d2]; why = `편차제곱합을 비교합니다: X는 2(${a}² + ${b}²) = ${2 * (a * a + b * b)}, Y는 2(${d2}²) = ${2 * d2 * d2}. 항수가 같으므로 편차제곱합이 큰 쪽의 표준편차가 큽니다.`; }
  const sd = L => { const m = L.reduce((s, x) => s + x, 0) / L.length; return Math.sqrt(L.reduce((s, x) => s + (x - m) ** 2, 0) / L.length); };
  const ans = decide([[sd(X0), sd(Y0)]]);
  const sh = L => r.shuffle(L).join(', ');
  return {
    kind: 'qc', ctx: `List X: ${sh(X0)}<br>List Y: ${sh(Y0)}`, A: 'The standard deviation of the numbers in list X', B: 'The standard deviation of the numbers in list Y', ans,
    key: '표준편차는 평균으로부터의 퍼짐입니다. 평행이동은 영향이 없고, k배 하면 |k|배가 됩니다.',
    steps: [['정렬해서 구조 보기', `X: ${[...X0].sort((p, q) => p - q).join(', ')} / Y: ${[...Y0].sort((p, q) => p - q).join(', ')}`], ['핵심 비교', why]],
  };
});

module.exports = T;
