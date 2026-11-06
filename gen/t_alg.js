'use strict';
const { Frac, gcd, lcm, fmtInt, show, sup, expr, nice, decide, grid } = require('./lib');
const T = [];
const add = (id, area, topic, formats, gen) => T.push({ id, area, topic, formats, gen });
const X = '<i>x</i>', Y = '<i>y</i>';
const absTxt = (v, c) => c === 0 ? `|${v}|` : `|${v} ${c > 0 ? '−' : '+'} ${Math.abs(c)}|`; // |x − c|
const quadTxt = (p, q) => expr([[1, sup(X, 2)], [-p, X], [q, '']]) + ' = 0';

// ---------- Vieta ----------
add('vieta', 'Algebra', '근과 계수의 관계 (Vieta)', ['MC', 'NE', 'QC'], r => {
  let p, q; do { p = r.int(-9, 9); q = r.int(-12, 12); } while (p === 0 || q === 0 || p * p - 4 * q <= 0);
  const v = r.pick(['sq', 'recip', 'diff']);
  let ans, ask, steps, distract;
  const base = ['근과 계수의 관계', `두 근을 r, s라 하면 r + s = ${p}, rs = ${q}입니다. 근을 직접 구할 필요가 없습니다.`];
  if (v === 'sq') { ans = p * p - 2 * q; ask = `${sup('<i>r</i>', 2)} + ${sup('<i>s</i>', 2)}`;
    steps = [base, ['식 변형', 'r² + s² = (r + s)² − 2rs'], ['계산', `(${p})² − 2(${q}) = <strong>${ans}</strong>`]];
    distract = [{ val: p * p, why: '(r + s)²에서 2rs를 빼지 않은 값입니다.' }, { val: p * p + 2 * q, why: '2rs의 부호를 반대로 처리한 값입니다.' }, { val: p * p - 4 * q, why: '(r − s)²의 값입니다.' }, { val: p * p - q, why: '2rs 대신 rs를 뺀 값입니다.' }]; }
  else if (v === 'recip') { ans = new Frac(p, q); ask = '1/<i>r</i> + 1/<i>s</i>';
    steps = [base, ['식 변형', '1/r + 1/s = (r + s)/(rs)'], ['계산', `${p}/${q} = <strong>${show(ans)}</strong>`]];
    distract = [{ val: new Frac(q, p), why: '분자와 분모를 뒤집은 값입니다.' }, { val: new Frac(-p, q), why: '근의 합의 부호를 잘못 읽은 값(r + s = −b)입니다.' }, { val: new Frac(1, p), why: '1/(r + s)로 착각한 값입니다.' }, { val: new Frac(p * p - 2 * q, q * q), why: '1/r² + 1/s²의 값입니다.' }]; }
  else { ans = p * p - 4 * q; ask = `(<i>r</i> − <i>s</i>)${sup('', 2)}`;
    steps = [base, ['식 변형', '(r − s)² = (r + s)² − 4rs'], ['계산', `(${p})² − 4(${q}) = <strong>${ans}</strong>`]];
    distract = [{ val: p * p - 2 * q, why: 'r² + s²의 값입니다.' }, { val: p * p, why: '4rs를 빼지 않았습니다.' }, { val: p * p + 4 * q, why: '부호 오류입니다.' }, { val: Math.abs(p * p - 4 * q - 4), why: '계산 실수 값입니다.' }]; }
  const eq = quadTxt(p, q);
  return {
    ctx: `<i>r</i> and <i>s</i> are the two solutions of the equation ${eq}.`,
    q: `If <i>r</i> and <i>s</i> are the two solutions of the equation ${eq}, what is the value of ${ask}?`,
    noun: ask, ans, distract, trap: distract[0], allowNeg: true,
    key: '이차방정식 x² − (r+s)x + rs = 0의 계수에서 근의 합과 곱을 바로 읽습니다.',
    steps,
  };
});

// ---------- Symmetric linear system ----------
add('symsys', 'Algebra', '대칭형 연립방정식', ['NE', 'MC', 'QC'], r => {
  let a, b, x, y; do { a = r.int(2, 9); b = r.int(2, 9); x = r.int(-8, 9); y = r.int(-8, 9); } while (a === b || Math.abs(x) === Math.abs(y));
  const m = a * x + b * y, n = b * x + a * y;
  const ans = x * x - y * y;
  const lhs = (c1, c2) => expr([[c1, X], [c2, Y]]);
  return {
    ctx: `${lhs(a, b)} = ${fmtInt(m)}<br>${lhs(b, a)} = ${fmtInt(n)}`,
    q: `If ${lhs(a, b)} = ${fmtInt(m)} and ${lhs(b, a)} = ${fmtInt(n)}, what is the value of ${sup(X, 2)} − ${sup(Y, 2)}?`,
    noun: `${sup(X, 2)} − ${sup(Y, 2)}`, ans, allowNeg: true,
    distract: [{ val: (x + y) * (x + y), why: '(x + y)²를 계산한 값입니다.' }, { val: x - y, why: 'x − y만 구한 값입니다.' }, { val: x + y, why: 'x + y만 구한 값입니다.' }, { val: -ans, why: '두 식을 뺄 때 부호를 반대로 처리한 값입니다.' }],
    trap: { val: -ans, why: '두 식의 차에서 부호를 반대로 처리한 값입니다.' },
    key: '계수가 서로 바뀐 연립방정식은 두 식을 더하고 빼면 x + y와 x − y가 바로 나옵니다.',
    steps: [
      ['두 식을 더하기', `${a + b}(x + y) = ${fmtInt(m + n)} → x + y = ${x + y}`],
      ['두 식을 빼기', `${a - b}(x − y) = ${fmtInt(m - n)} → x − y = ${x - y}`],
      ['인수분해 이용', `x² − y² = (x + y)(x − y) = ${x + y} × ${x - y} = <strong>${fmtInt(ans)}</strong>`],
    ],
  };
});

// ---------- Absolute value integer count ----------
add('abscount', 'Algebra', '절댓값 부등식의 정수해', ['NE', 'QC', 'MC'], r => {
  let a, b, c, d, xs;
  for (;;) {
    a = r.int(-5, 8); b = r.int(5, 12); c = r.int(a - b + 1, a + b + 3); d = r.int(2, 5);
    xs = []; for (let x = -100; x <= 100; x++) if (Math.abs(x - a) <= b && Math.abs(x - c) >= d) xs.push(x);
    const removed = 2 * b + 1 - xs.length;
    if (removed > 0 && xs.length > 0) break;
  }
  const removed = 2 * b + 1 - xs.length;
  const naive = 2 * b + 1 - (2 * d - 1);
  return {
    q: `How many integers ${X} satisfy both ${absTxt(X, a)} ≤ ${b} and ${absTxt(X, c)} ≥ ${d}?`,
    noun: `The number of integers ${X} that satisfy both ${absTxt(X, a)} ≤ ${b} and ${absTxt(X, c)} ≥ ${d}`,
    ans: xs.length,
    trap: naive !== xs.length ? { val: naive, why: '제외 구간이 첫 번째 구간 안에 완전히 들어간다고 가정한 값입니다. 경계가 넘치는지 확인해야 합니다.' } : { val: xs.length + 2, why: '제외 구간의 끝점(등호 포함)을 잘못 처리한 값입니다.' },
    distract: [{ val: 2 * b + 1, why: '두 번째 조건을 무시한 값입니다.' }, { val: xs.length + 2, why: `|x ${c >= 0 ? '−' : '+'} ${Math.abs(c)}| = ${d}인 끝점 두 개를 제외한 값입니다(등호 포함이므로 포함해야 함).` }, { val: naive, why: '제외 구간이 모두 첫 구간 안에 있다고 가정한 값입니다.' }, { val: xs.length - 1, why: '끝점 하나를 빠뜨린 값입니다.' }],
    key: '|x − a| ≤ b는 a − b ≤ x ≤ a + b, |x − c| ≥ d는 c − d < x < c + d를 제외한다는 뜻입니다.',
    steps: [
      ['첫 번째 조건', `${a - b} ≤ x ≤ ${a + b} → 정수 ${2 * b + 1}개`],
      ['두 번째 조건', `${c - d} < x < ${c + d}인 정수(${c - d + 1}부터 ${c + d - 1}까지)를 제외`],
      ['겹치는 부분만 제외', `첫 구간 안에서 실제로 제외되는 정수는 ${removed}개 → ${2 * b + 1} − ${removed} = <strong>${xs.length}</strong>`],
    ],
  };
});

// ---------- Custom operation ----------
add('customop', 'Algebra', '새로운 연산 정의', ['NE', 'MC'], r => {
  let p, q, k, x; do { p = r.int(1, 5); q = r.int(1, 5); k = r.int(2, 6); x = r.int(-6, 9); } while (p === q || k === q || x === 0 || x === k);
  const v = k * x + p * k - q * x;
  const ans = x * k + p * x - q * k;
  const def = expr([[1, '<i>ab</i>'], [p, '<i>a</i>'], [-q, '<i>b</i>']]);
  return {
    ctx: `For all numbers <i>a</i> and <i>b</i>, the operation ◆ is defined by <i>a</i> ◆ <i>b</i> = ${def}.`,
    q: `For all numbers <i>a</i> and <i>b</i>, the operation ◆ is defined by <i>a</i> ◆ <i>b</i> = ${def}. If ${k} ◆ ${X} = ${fmtInt(v)}, what is the value of ${X} ◆ ${k}?`,
    ans, allowNeg: true,
    distract: [{ val: v, why: '연산의 순서가 바뀌면 값이 달라집니다(교환법칙 불성립). k ◆ x와 같다고 본 값입니다.' }, { val: x, why: 'x의 값만 구한 값입니다.' }, { val: ans + 2 * (q - p) * 0 + (p + q) * (x - k), why: 'a와 b의 역할을 일부만 바꿔 대입한 값입니다.' }, { val: -ans, why: '부호 실수 값입니다.' }],
    key: '정의식에 순서대로 대입합니다. a ◆ b ≠ b ◆ a일 수 있다는 점이 함정입니다.',
    steps: [
      ['x 구하기', `${k} ◆ x = ${k}x + ${p}(${k}) − ${q}x = ${k - q}x + ${p * k} = ${fmtInt(v)} → x = <strong>${x}</strong>`],
      ['순서를 바꿔 계산', `x ◆ ${k} = (${x})(${k}) + ${p}(${x}) − ${q}(${k})`],
      ['계산', `= ${x * k} ${p * x < 0 ? '−' : '+'} ${Math.abs(p * x)} − ${q * k} = <strong>${fmtInt(ans)}</strong>`],
    ],
  };
});

// ---------- Fibonacci-type sequence ----------
add('fibseq', 'Algebra', '점화식 수열 역추적', ['NE', 'MC', 'QC'], r => {
  let x, y; do { x = r.int(-6, 9); y = r.int(-6, 9); } while (x === y || x === 0);
  const seq = [x, y]; for (let i = 2; i < 9; i++) seq.push(seq[i - 1] + seq[i - 2]);
  const v = r.pick([[5, 8], [4, 7], [5, 7]]);
  const [i, j] = v;
  const ask = r.pick([1, 2]);
  const ans = seq[ask - 1];
  const coef = n => { const a = [1, 0], b = [0, 1]; const s = [a, b]; for (let t = 2; t < n; t++) s.push([s[t - 1][0] + s[t - 2][0], s[t - 1][1] + s[t - 2][1]]); return s[n - 1]; };
  const ci = coef(i), cj = coef(j);
  const sub = (k) => `<i>a</i><sub>${k}</sub>`;
  return {
    ctx: `In the sequence ${sub(1)}, ${sub(2)}, ${sub(3)}, …, each term after the second is the sum of the two terms immediately preceding it. ${sub(i)} = ${seq[i - 1]} and ${sub(j)} = ${seq[j - 1]}.`,
    q: `In the sequence ${sub(1)}, ${sub(2)}, ${sub(3)}, …, each term after the second is the sum of the two terms immediately preceding it. If ${sub(i)} = ${seq[i - 1]} and ${sub(j)} = ${seq[j - 1]}, what is the value of ${sub(ask)}?`,
    noun: `${sub(ask)}`, ans, allowNeg: true,
    distract: [{ val: seq[2 - ask], why: `${ask === 1 ? 'a₂' : 'a₁'}의 값입니다.` }, { val: seq[2], why: 'a₃의 값입니다.' }, { val: seq[j - 1] - seq[i - 1], why: '두 항의 차를 그대로 답으로 쓴 값입니다.' }, { val: ans + 1, why: '계산 실수 값입니다.' }],
    trap: { val: seq[2 - ask], why: '다른 초기항의 값입니다.' },
    key: 'a₁ = x, a₂ = y로 두고 각 항을 x, y의 일차식으로 표현하면 연립방정식이 됩니다.',
    steps: [
      ['일반항을 x, y로 표현', `a₁ = x, a₂ = y, a₃ = x + y, a₄ = x + 2y, a₅ = 2x + 3y, a₆ = 3x + 5y, a₇ = 5x + 8y, a₈ = 8x + 13y`],
      ['연립방정식', `${ci[0]}x + ${ci[1]}y = ${seq[i - 1]}, ${cj[0]}x + ${cj[1]}y = ${seq[j - 1]}`],
      ['풀이', `x = ${x}, y = ${y} → ${sub(ask)} = <strong>${ans}</strong>`],
    ],
  };
});

// ---------- Exponential equation ----------
add('expsolve', 'Algebra', '지수방정식 (공통인수 묶기)', ['NE', 'MC', 'QC'], r => {
  const b = r.pick([2, 2, 3]); const a = r.int(1, 3); const x = b === 2 ? r.int(3, 8) : r.int(2, 5);
  const c = b ** (x - 1) * (b ** (a + 1) - 1);
  return {
    ctx: `${sup(b, X + ' + ' + a)} − ${sup(b, X + ' − 1')} = ${fmtInt(c)}`,
    q: `If ${sup(b, X + ' + ' + a)} − ${sup(b, X + ' − 1')} = ${fmtInt(c)}, what is the value of ${X}?`,
    noun: X, ans: x,
    distract: [{ val: x - 1, why: '공통인수 b^(x−1)의 지수 x − 1을 x로 착각한 값입니다.' }, { val: x + 1, why: '지수 계산에서 1을 더한 값입니다.' }, { val: x + a, why: '지수 x + a를 답으로 쓴 값입니다.' }, { val: x + 2, why: '계산 실수 값입니다.' }],
    trap: { val: x - 1, why: '공통인수의 지수(x − 1)를 답으로 쓴 값입니다.' },
    key: '지수가 다른 항의 덧셈·뺄셈은 가장 작은 거듭제곱으로 묶어 정리합니다.',
    steps: [
      ['공통인수로 묶기', `${b}<sup>x−1</sup>(${b}<sup>${a + 1}</sup> − 1) = ${b}<sup>x−1</sup> × ${b ** (a + 1) - 1}`],
      ['나누기', `${b}<sup>x−1</sup> = ${fmtInt(c)} ÷ ${b ** (a + 1) - 1} = ${b ** (x - 1)} = ${b}<sup>${x - 1}</sup>`],
      ['지수 비교', `x − 1 = ${x - 1} → x = <strong>${x}</strong>`],
    ],
  };
});

add('exppow', 'Algebra', '같은 거듭제곱의 합', ['MC'], r => {
  const [q, s, t] = r.pick([[4, 2, 2], [8, 2, 3], [9, 3, 2], [4, 2, 2]]);
  const sum = Array(q).fill(sup(q, '<i>n</i>')).join(' + ');
  const n = '<i>n</i>';
  const ans = lin(t, n, t);
  const distract = [
    { val: { disp: lin(t, n, 0), v: null }, why: `${q}개를 더하면 ${q}를 한 번 더 곱하는 것인데, 이를 빠뜨린 값입니다.` },
    { val: { disp: lin(t, n, 1), v: null }, why: `${q}개를 더한 것을 ${s}를 한 번 곱한 것으로 착각한 값입니다.` },
    { val: { disp: lin(q * t, n, 0), v: null }, why: '항의 개수를 지수에 곱한 값입니다.' },
    { val: { disp: lin(1, n, t), v: null }, why: `밑을 ${s}로 바꿀 때 n에 ${t}를 곱하지 않은 값입니다.` },
    { val: { disp: lin(t + 1, n, 0), v: null }, why: '지수법칙을 잘못 적용한 값입니다.' },
  ];
  return {
    q: `If ${sum} = ${sup(s, '<i>m</i>')}, what is <i>m</i> in terms of <i>n</i>?`,
    ans: { disp: ans, v: null }, disp: ans, distract,
    key: `같은 수 ${q}개를 더하면 ${q}를 곱한 것과 같습니다: ${q}·${q}<sup>n</sup> = ${q}<sup>n+1</sup>.`,
    steps: [
      ['덧셈을 곱셈으로', `${q}개의 ${q}<sup>n</sup>의 합 = ${q} × ${q}<sup>n</sup> = ${q}<sup>n + 1</sup>`],
      ['밑 통일', `${q} = ${s}<sup>${t}</sup>이므로 ${q}<sup>n+1</sup> = ${s}<sup>${t}(n + 1)</sup>`],
      ['지수 비교', `m = ${t}(n + 1) = <strong>${ans}</strong>`],
    ],
  };
});
const { lin } = require('./lib');

// ---------- Work rates ----------
add('work', 'Algebra', '일률 (작업 시간)', ['NE', 'MC'], r => {
  const [a, b] = r.pick([[6, 3], [12, 6], [10, 15], [12, 4], [20, 30], [6, 12], [8, 24], [9, 18], [15, 10], [30, 20], [14, 35], [24, 12], [36, 18], [12, 24], [10, 40]]);
  const t = new Frac(a * b, a + b);
  const s = r.int(1, a - 1);
  const rem = new Frac(a - s, a);
  const tb = rem.mul(b);
  return {
    q: `Working alone at its constant rate, machine A can complete a certain job in ${a} hours. Working together at their constant rates, machines A and B can complete the same job in ${show(t)} hours. If machine A works alone on the job for ${s} hour${s > 1 ? 's' : ''} and then machine B alone completes the job, how many hours does machine B work?`,
    ans: tb, decimal: !tb.isInt(), neHint: tb.isInt() ? '' : 'Give your answer as a fraction.',
    distract: [{ val: Frac.of(t).sub(s).v > 0 ? Frac.of(t).sub(s) : Frac.of(b).sub(s), why: '함께 걸리는 시간에서 A가 일한 시간을 단순히 뺀 값입니다. 일률(시간당 작업량)로 계산해야 합니다.' }, { val: b, why: 'B가 전체 작업을 혼자 하는 시간입니다. A가 이미 한 부분을 빼야 합니다.' }, { val: Frac.of(b).sub(s), why: 'B의 단독 시간에서 A의 작업 시간을 뺀 값으로, 두 기계의 속도 차이를 무시했습니다.' }, { val: new Frac(s, a).mul(b), why: 'A가 끝낸 부분을 B가 하는 시간으로 계산했습니다(남은 부분이 아님).' }],
    key: '시간이 아니라 일률(1/시간)을 더하고 뺍니다.',
    steps: [
      ['B의 일률', `1/${show(t)} − 1/${a} = ${show(new Frac(1).div(t).sub(new Frac(1, a)))} → B 단독은 ${b}시간`],
      ['A가 한 일', `${s}시간 × 1/${a} = ${show(new Frac(s, a))} → 남은 일 ${show(rem)}`],
      ['B의 작업 시간', `${show(rem)} × ${b} = <strong>${show(tb)}</strong>시간`],
    ],
  };
});

// ---------- Mixtures ----------
add('mixture', 'Algebra', '농도 (혼합·치환)', ['NE', 'MC', 'QC'], r => {
  if (r.chance(0.5)) {
    let x, p, q, rr, y;
    for (;;) { x = r.pick([10, 12, 15, 20, 24, 30, 40]); p = r.pick([10, 15, 20, 25, 30]); q = r.pick([50, 60, 75, 80, 100]); rr = r.pick([20, 25, 30, 35, 40, 45]); if (!(p < rr && rr < q)) continue; const yy = new Frac(x * (rr - p), q - rr); if (yy.isInt()) { y = yy.v; break; } }
    const pure = q === 100;
    return {
      ctx: `A chemist has ${x} liters of a solution that is ${p} percent acid by volume. The chemist adds <i>y</i> liters of ${pure ? 'pure acid' : `a solution that is ${q} percent acid by volume`}, and the resulting mixture is ${rr} percent acid by volume.`,
      q: `A chemist has ${x} liters of a solution that is ${p} percent acid by volume. How many liters of ${pure ? 'pure acid' : `a solution that is ${q} percent acid by volume`} must be added to produce a mixture that is ${rr} percent acid by volume?`,
      noun: '<i>y</i>', ans: y,
      distract: [{ val: new Frac(x * (rr - p), q - p), why: '분모를 (목표 농도 − 첨가 농도) 대신 (첨가 − 원래) 농도 차로 잡은 값입니다.' }, { val: new Frac(x * (rr - p), 100), why: '농도 차를 그대로 부피에 곱한 값으로, 혼합 후 부피 변화를 무시했습니다.' }, { val: y * 2, why: '계산 실수 값입니다.' }, { val: new Frac(x * (q - rr), rr - p), why: '가중평균의 비를 거꾸로 적용한 값입니다.' }],
      trap: { val: new Frac(x * (rr - p), q - p), why: '가중평균의 거리 비를 잘못 적용한 값입니다.' },
      key: '산의 양을 기준으로 식을 세우거나, 가중평균의 거리 비(부피비 = 반대쪽 거리 비)를 이용합니다.',
      steps: [
        ['산의 양으로 식 세우기', `0.${String(p).padStart(2, '0')}(${x}) + ${q / 100}y = 0.${String(rr).padStart(2, '0')}(${x} + y)`.replace(/0\.100/g, '1')],
        ['정리', `(${q} − ${rr})y = (${rr} − ${p}) × ${x} → ${q - rr}y = ${(rr - p) * x}`],
        ['답', `y = <strong>${y}</strong> liters`],
      ],
    };
  }
  const [V, y] = r.pick([[40, 10], [20, 5], [30, 10], [50, 10], [60, 15], [80, 20]]);
  const p = r.pick([40, 60, 80, 48, 64]);
  const fin = new Frac(p).mul(new Frac(V - y, V)).mul(new Frac(V - y, V));
  return {
    ctx: `A tank contains ${V} liters of a solution that is ${p} percent alcohol by volume. ${y} liters of the solution are removed and replaced with ${y} liters of pure water, and then this procedure is repeated once more.`,
    q: `A tank contains ${V} liters of a solution that is ${p} percent alcohol by volume. ${y} liters of the solution are removed and replaced with ${y} liters of pure water. This procedure is then repeated once more. What percent of the final solution, by volume, is alcohol?`,
    noun: 'The percent of the final solution, by volume, that is alcohol', ans: fin, decimal: true, suffix: '%',
    disp: show(fin.v),
    distract: [{ val: new Frac(p).mul(new Frac(V - 2 * y, V)), why: '매번 같은 양의 알코올이 빠진다고 보고 2번 뺀 값입니다. 두 번째에는 이미 희석된 용액이 빠집니다.' }, { val: new Frac(p).mul(new Frac(V - y, V)), why: '한 번만 치환한 결과입니다.' }, { val: new Frac(p - y), why: '퍼센트에서 부피를 직접 뺀 값입니다.' }, { val: new Frac(p).mul(new Frac(V - y, V)).mul(new Frac(V - y, V)).mul(new Frac(V - y, V)), why: '세 번 치환한 결과입니다.' }],
    trap: { val: new Frac(p).mul(new Frac(V - 2 * y, V)), why: '매번 같은 양의 알코올이 빠진다고 계산한 값입니다.' },
    key: '빼고 같은 부피의 물로 채우는 조작은 농도에 매번 (V − y)/V를 곱합니다.',
    steps: [
      ['1회 치환', `농도 × (${V} − ${y})/${V} = ${p}% × ${show(new Frac(V - y, V))} = ${show(new Frac(p).mul(new Frac(V - y, V)).v)}%`],
      ['2회 치환', `다시 × ${show(new Frac(V - y, V))} → ${p} × (${show(new Frac(V - y, V))})² = <strong>${show(fin.v)}%</strong>`],
      ['주의', '두 번째로 빼는 용액은 이미 희석되어 있으므로 알코올이 덜 빠집니다.'],
    ],
  };
});

// ---------- Round-trip average speed ----------
add('avgspeed', 'Algebra', '평균 속력 (조화평균)', ['NE', 'MC', 'QC'], r => {
  const [u, v, w] = r.pick([[30, 60, 40], [40, 60, 48], [20, 30, 24], [60, 90, 72], [45, 90, 60], [36, 45, 40], [30, 45, 36], [40, 120, 60], [50, 75, 60], [24, 40, 30], [42, 56, 48], [35, 140, 56]]);
  return {
    ctx: `A driver traveled from town P to town Q at an average speed of ${u} miles per hour and then returned from Q to P along the same route. The average speed for the entire round trip was ${w} miles per hour.`,
    q: `A driver traveled from town P to town Q at an average speed of ${u} miles per hour and then returned from Q to P along the same route. If the average speed for the entire round trip was ${w} miles per hour, what was the average speed, in miles per hour, for the return trip?`,
    noun: 'The average speed, in miles per hour, for the return trip', ans: v,
    distract: [{ val: 2 * w - u, why: '두 속력의 산술평균이 전체 평균 속력이라고 착각한 값입니다. 같은 거리를 이동했으므로 조화평균을 써야 합니다.' }, { val: w + (w - u) * 2, why: '차이를 두 배로 늘린 어림값입니다.' }, { val: Math.round((u + w) / 2), why: '두 값의 평균입니다.' }, { val: v + 10, why: '계산 실수 값입니다.' }],
    trap: { val: 2 * w - u, why: '산술평균으로 계산한 값입니다.' },
    key: '평균 속력 = 전체 거리 ÷ 전체 시간. 거리가 같으면 평균 속력은 산술평균이 아니라 조화평균 2uv/(u + v)입니다.',
    steps: [
      ['거리 설정', `편도 거리를 d라 하면 전체 시간 = 2d/${w}`],
      ['식 세우기', `d/${u} + d/v = 2d/${w} → 1/v = 2/${w} − 1/${u} = ${show(new Frac(2, w).sub(new Frac(1, u)))}`],
      ['답', `v = <strong>${v}</strong> mph`],
    ],
  };
});

// ---------- Meeting with delayed start ----------
add('meet', 'Algebra', '마주 보고 출발 (시간차)', ['NE', 'MC'], r => {
  const u = r.pick([40, 45, 50, 60]), v = r.pick([50, 55, 60, 65, 70]); const h = new Frac(r.pick([1, 1, 2, 3]), r.pick([1, 2])); const t = new Frac(r.int(2, 6), r.pick([1, 2]));
  const D = h.mul(u).add(t.mul(u + v));
  if (!D.isInt()) return T.find(x => x.id === 'meet').gen(r);
  const dist = h.mul(u).add(t.mul(u));
  return {
    q: `Two towns, A and B, are ${fmtInt(D.v)} miles apart. Car X leaves town A and travels toward town B at a constant speed of ${u} miles per hour. ${show(h)} hour${h.v === 1 ? '' : 's'} later, car Y leaves town B and travels toward town A along the same road at a constant speed of ${v} miles per hour. When the two cars meet, how many miles will car X be from town A?`,
    ans: dist,
    distract: [{ val: Frac.of(D).mul(new Frac(u, u + v)), why: '두 차가 동시에 출발했다고 보고 속력 비로 나눈 값입니다.' }, { val: t.mul(u), why: 'Y가 출발한 뒤 X가 이동한 거리만 센 값입니다.' }, { val: Frac.of(D).sub(dist), why: 'B로부터의 거리입니다.' }, { val: h.mul(u).add(t.mul(v)), why: 'X의 이동 거리에 Y의 속력을 쓴 값입니다.' }],
    key: '먼저 출발한 차가 앞서간 거리를 뺀 뒤, 남은 거리를 두 속력의 합으로 나눕니다.',
    steps: [
      ['먼저 이동한 거리', `X가 ${show(h)}시간 동안 ${show(h.mul(u))}마일 이동 → 남은 거리 ${show(D.sub(h.mul(u)))}마일`],
      ['만나는 시간', `${show(D.sub(h.mul(u)))} ÷ (${u} + ${v}) = ${show(t)}시간 후`],
      ['X의 위치', `${show(h.mul(u))} + ${u} × ${show(t)} = <strong>${show(dist)}</strong>마일`],
    ],
  };
});

// ---------- Successive percent changes ----------
add('pctchain', 'Arithmetic', '연속 백분율 변화', ['NE', 'MC', 'QC'], r => {
  const p = r.pick([10, 20, 25, 40, 50]), q = r.pick([10, 20, 25, 30, 40]), s = r.pick([10, 20, 25, 50]);
  const up3 = r.chance(0.5);
  const F = new Frac(100 + p, 100).mul(new Frac(100 - q, 100)).mul(new Frac(up3 ? 100 + s : 100 - s, 100));
  const pct = F.mul(100);
  return {
    ctx: `The price of a stock increased by ${p} percent in January, decreased by ${q} percent in February, and ${up3 ? 'increased' : 'decreased'} by ${s} percent in March.`,
    q: `The price of a stock increased by ${p} percent in January, decreased by ${q} percent in February, and ${up3 ? 'increased' : 'decreased'} by ${s} percent in March. The price at the end of March was what percent of the price at the beginning of January?`,
    noun: 'The price at the end of March, as a percent of the price at the beginning of January',
    ans: pct, decimal: true, suffix: '%', disp: show(pct.v),
    distract: [{ val: 100 + p - q + (up3 ? s : -s), why: '백분율 변화를 단순히 더하고 뺀 값입니다. 변화율은 곱으로 누적됩니다.' }, { val: pct.v + 1, why: '계산 실수 값입니다.' }, { val: +(100 * (1 + p / 100) * (1 - q / 100)).toFixed(2), why: '3월의 변화를 빠뜨린 값입니다.' }, { val: +(pct.v - 100).toFixed(2), why: '“몇 퍼센트인가”가 아니라 “몇 퍼센트 변했는가”로 답한 값입니다.' }],
    trap: { val: 100 + p - q + (up3 ? s : -s), why: '변화율을 단순 합산한 값입니다.' },
    key: '연속 백분율 변화는 배수(1 ± r)를 곱해 누적합니다.',
    steps: [
      ['배수로 변환', `${(100 + p) / 100} × ${(100 - q) / 100} × ${(up3 ? 100 + s : 100 - s) / 100}`],
      ['계산', `= ${show(F.v)}`],
      ['백분율로', `<strong>${show(pct.v)}%</strong>`],
    ],
  };
});

// ---------- Compound vs simple interest (QC) ----------
add('qc_interest', 'Arithmetic', '복리 vs 단리 비교', ['QC'], r => {
  const P = r.pick([1000, 2000, 5000, 10000]); const rate = r.pick([4, 5, 6, 8, 10, 12, 20]); const n = r.pick([2, 3]);
  let growth = new Frac(1); for (let i = 0; i < n; i++) growth = growth.mul(new Frac(100 + rate, 100));
  const comp = growth.mul(P).sub(P);
  const eff = comp.v / P / n * 100;
  const rs = r.pick([Math.floor(eff * 2) / 2, Math.ceil(eff * 2) / 2, rate, Math.floor(eff * 2) / 2 + 0.5]);
  const simple = P * rs / 100 * n;
  const ans = Math.abs(comp.v - simple) < 1e-9 ? 'C' : comp.v > simple ? 'A' : 'B';
  return {
    kind: 'qc',
    ctx: `Account X earns interest at ${rate} percent per year, compounded annually. Account Y earns simple interest at ${rs} percent per year. ${fmtInt(P)} dollars is deposited in each account, and no other deposits or withdrawals are made.`,
    A: `The interest earned by account X in ${n} years, in dollars`, B: `The interest earned by account Y in ${n} years, in dollars`, ans,
    key: '복리 이자 = P(1 + r)ⁿ − P, 단리 이자 = P·r·n. 소수점까지 정확히 계산해 비교합니다.',
    steps: [
      ['복리 이자', `${fmtInt(P)} × (${(100 + rate) / 100})<sup>${n}</sup> − ${fmtInt(P)} = ${show(comp.v)}`],
      ['단리 이자', `${fmtInt(P)} × ${rs / 100} × ${n} = ${show(simple)}`],
      ['비교', `${show(comp.v)} vs ${show(simple)}`],
    ],
  };
});

// ---------- Ratio chains ----------
add('ratiochain', 'Arithmetic', '연쇄 비율', ['NE', 'MC'], r => {
  let p, q, s, t; do { p = r.int(2, 7); q = r.int(2, 7); s = r.int(2, 7); t = r.int(2, 9); } while (gcd(p, q) !== 1 || gcd(s, t) !== 1 || q === s);
  const L = lcm(q, s); const A = p * L / q, B = L, Cc = t * L / s; const sum = A + B + Cc;
  const m = r.int(2, 6); const total = sum * m;
  const ask = r.pick(['c', 'a-c']);
  const ans = ask === 'c' ? Cc * m : (A - Cc) * m;
  return {
    q: `In a certain club, the ratio of the number of juniors to the number of seniors is ${p} to ${q}, and the ratio of the number of seniors to the number of graduate students is ${s} to ${t}. If the club has ${total} members, all of whom are juniors, seniors, or graduate students, ${ask === 'c' ? 'how many members are graduate students' : 'how many more juniors than graduate students are there in the club'}?`,
    ans, allowNeg: true,
    distract: [{ val: ask === 'c' ? Math.round(total * t / (p + q + s + t)) : Math.round(total * (p - t) / (p + q + s + t)), why: '두 비를 공통 항(seniors)으로 맞추지 않고 그대로 더해 나눈 값입니다.' }, { val: ask === 'c' ? A * m : Cc * m, why: '다른 그룹의 인원입니다.' }, { val: B * m, why: 'seniors의 인원입니다.' }, { val: ans + m, why: '계산 실수 값입니다.' }],
    key: '공통 항(seniors)을 최소공배수로 맞춰 세 항의 비를 하나로 합칩니다.',
    steps: [
      ['공통 항 맞추기', `J : S = ${p} : ${q}, S : G = ${s} : ${t} → S를 ${L}로 맞추면 J : S : G = ${A} : ${B} : ${Cc}`],
      ['한 단위의 크기', `${total} ÷ (${A} + ${B} + ${Cc}) = ${total} ÷ ${sum} = ${m}`],
      ['답', ask === 'c' ? `G = ${Cc} × ${m} = <strong>${ans}</strong>` : `J − G = (${A} − ${Cc}) × ${m} = <strong>${ans}</strong>`],
    ],
  };
});

// ---------- Markup / discount ----------
add('markup', 'Arithmetic', '정가·할인·이익률', ['NE', 'MC', 'QC'], r => {
  let d, M, g;
  for (;;) { d = r.pick([10, 20, 25, 40, 15, 30]); M = r.pick([20, 25, 40, 50, 60, 80, 100]); const G = new Frac(100 + M, 100).mul(new Frac(100 - d, 100)).sub(1).mul(100); if (G.isInt() && G.v > 0) { g = G.v; break; } }
  return {
    ctx: `A retailer sets the list price of an item at <i>x</i> percent above its cost. The item is then sold at a discount of ${d} percent off the list price, and the retailer's profit on the sale is ${g} percent of the cost.`,
    q: `A retailer sets the list price of an item at a certain percent above its cost. The item is then sold at a discount of ${d} percent off the list price, and the retailer's profit on the sale is ${g} percent of the cost. The list price was what percent above the cost?`,
    noun: '<i>x</i>', ans: M, suffix: '%',
    distract: [{ val: g + d, why: '할인율과 이익률을 단순히 더한 값입니다. 할인은 정가 기준이므로 곱으로 계산해야 합니다.' }, { val: Math.round(g / (1 - d / 100)), why: '이익률만 할인율로 나눈 값입니다.' }, { val: M + 10, why: '계산 실수 값입니다.' }, { val: M - 10, why: '계산 실수 값입니다.' }],
    trap: { val: g + d, why: '이익률과 할인율을 더한 값입니다.' },
    key: '원가를 100으로 두면 판매가 = 100(1 + x/100)(1 − d/100) = 100 + 이익.',
    steps: [
      ['원가 100으로 두기', `판매가 = 100 + ${g} = ${100 + g}`],
      ['정가 역산', `정가 × ${(100 - d) / 100} = ${100 + g} → 정가 = ${100 + M}`],
      ['답', `정가는 원가보다 <strong>${M}%</strong> 높습니다.`],
    ],
  };
});

// ---------- Marbles ratio change ----------
add('marbles', 'Arithmetic', '비율 변화로 원래 개수 구하기', ['NE', 'MC', 'QC'], r => {
  let a, b, c, d, n, k;
  for (;;) { a = r.int(2, 7); b = r.int(2, 9); c = r.int(1, 9); d = r.int(1, 9); n = r.int(2, 9); if (gcd(a, b) !== 1 || gcd(c, d) !== 1) continue; const kk = n * (c * b - d * a); if (kk <= 0 || kk % d !== 0 || c * b <= d * a) continue; k = kk / d; if (k > 0 && k < 60) break; }
  const tot = (a + b) * n;
  return {
    ctx: `A jar contains only red and blue marbles. The ratio of red marbles to blue marbles in the jar is ${a} to ${b}. After ${k} red marbles are added to the jar, the ratio of red marbles to blue marbles becomes ${c} to ${d}.`,
    q: `A jar contains only red and blue marbles, and the ratio of red marbles to blue marbles is ${a} to ${b}. After ${k} red marbles are added to the jar, the ratio of red marbles to blue marbles becomes ${c} to ${d}. How many marbles were in the jar before the red marbles were added?`,
    noun: 'The number of marbles in the jar before the red marbles were added', ans: tot,
    distract: [{ val: tot + k, why: '빨간 구슬을 추가한 뒤의 개수입니다.' }, { val: b * n, why: '파란 구슬의 개수입니다.' }, { val: a * n, why: '원래 빨간 구슬의 개수입니다.' }, { val: (a + b) * (n + 1), why: '배수를 하나 크게 잡은 값입니다.' }],
    trap: { val: tot + k, why: '추가 후의 전체 개수입니다.' },
    key: '변하지 않는 양(파란 구슬)을 기준으로 식을 세웁니다.',
    steps: [
      ['미지수 설정', `빨강 = ${a}m, 파랑 = ${b}m`],
      ['비 조건', `(${a}m + ${k}) : ${b}m = ${c} : ${d} → ${d}(${a}m + ${k}) = ${c}·${b}m → m = ${n}`],
      ['답', `원래 개수 = ${a + b} × ${n} = <strong>${tot}</strong>`],
    ],
  };
});

// ---------- Integer extreme values ----------
add('intext', 'Algebra', '정수 범위에서 최댓값·최솟값', ['NE', 'MC', 'QC'], r => {
  const x1 = r.int(-6, 1), x2 = x1 + r.int(4, 8), y1 = r.int(-7, -1), y2 = y1 + r.int(4, 8);
  const exprs = [
    { d: `${sup(X, 2)} − ${sup(Y, 2)}`, f: (x, y) => x * x - y * y },
    { d: `${X} − ${sup(Y, 2)}`, f: (x, y) => x - y * y },
    { d: `${sup(X, 2)}${Y}`, f: (x, y) => x * x * y },
    { d: `${X}${Y} − ${X}`, f: (x, y) => x * y - x },
    { d: `(${X} − ${Y})${sup('', 2)}`, f: (x, y) => (x - y) ** 2 },
    { d: `${sup(Y, 3)} − ${X}`, f: (x, y) => y ** 3 - x },
  ];
  const e = r.pick(exprs); const mode = r.pick(['greatest', 'least']);
  let best = null, at = null;
  const allv = [];
  for (let x = x1 + 1; x < x2; x++) for (let y = y1 + 1; y < y2; y++) { const v = e.f(x, y); allv.push(v); if (best === null || (mode === 'greatest' ? v > best : v < best)) { best = v; at = [x, y]; } }
  // traps: using the endpoints (not allowed due to strict inequality)
  const endpointVals = [];
  for (const x of [x1, x2]) for (const y of [y1, y2]) endpointVals.push(e.f(x, y));
  const endBest = mode === 'greatest' ? Math.max(...endpointVals, best) : Math.min(...endpointVals, best);
  const second = [...new Set(allv)].sort((a, b) => mode === 'greatest' ? b - a : a - b)[1];
  return {
    ctx: `${X} and ${Y} are integers such that ${x1} &lt; ${X} &lt; ${x2} and ${y1} &lt; ${Y} &lt; ${y2}.`,
    q: `If ${X} and ${Y} are integers such that ${x1} &lt; ${X} &lt; ${x2} and ${y1} &lt; ${Y} &lt; ${y2}, what is the ${mode} possible value of ${e.d}?`,
    noun: `The ${mode} possible value of ${e.d}`, ans: best, allowNeg: true,
    distract: [
      ...(endBest !== best ? [{ val: endBest, why: '부등호에 등호가 없는데 끝값을 대입한 값입니다.' }] : []),
      ...(second !== undefined ? [{ val: second, why: `두 번째로 ${mode === 'greatest' ? '큰' : '작은'} 값입니다. 음수의 제곱/세제곱 처리를 다시 확인하세요.` }] : []),
      { val: e.f(x2 - 1, y2 - 1), why: '두 변수 모두 가장 큰 값을 대입한 값입니다(항상 극값이 되지는 않음).' },
      { val: e.f(x1 + 1, y1 + 1), why: '두 변수 모두 가장 작은 값을 대입한 값입니다.' },
      { val: e.f(x2 - 1, y1 + 1), why: 'x 최대, y 최소를 대입한 값입니다.' },
      { val: e.f(x1 + 1, y2 - 1), why: 'x 최소, y 최대를 대입한 값입니다.' },
    ],
    trap: endBest !== best ? { val: endBest, why: '부등호의 끝값(포함되지 않음)을 대입한 값입니다.' } : undefined,
    key: '가능한 정수는 끝값을 제외한 범위입니다. 음수를 제곱하면 커질 수 있으므로 양 끝 후보를 모두 확인합니다.',
    steps: [
      ['가능한 값', `x ∈ {${x1 + 1}, …, ${x2 - 1}}, y ∈ {${y1 + 1}, …, ${y2 - 1}}`],
      ['극값 후보 점검', `식 ${e.d}에서 각 항을 ${mode === 'greatest' ? '키우는' : '줄이는'} 방향을 따지면 후보는 각 범위의 양 끝 정수입니다(제곱 항은 절댓값이 큰 쪽).`],
      ['결론', `x = ${at[0]}, y = ${at[1]}일 때 ${mode === 'greatest' ? '최댓값' : '최솟값'} <strong>${best}</strong>`],
    ],
  };
});

// ---------- Arithmetic sequence ----------
add('arithseq', 'Algebra', '등차수열 (항과 합)', ['NE', 'MC', 'QC'], r => {
  let a1, d; do { a1 = r.int(-20, 30); d = r.pick([-7, -5, -4, -3, 3, 4, 5, 6, 7, 9]); } while (false);
  const i = r.int(3, 6), j = r.int(9, 15), n = r.int(16, 30);
  const ai = a1 + (i - 1) * d, aj = a1 + (j - 1) * d;
  const S = n * (2 * a1 + (n - 1) * d) / 2;
  const sub = k => `<i>a</i><sub>${k}</sub>`;
  return {
    ctx: `In an arithmetic sequence ${sub(1)}, ${sub(2)}, ${sub(3)}, …, ${sub(i)} = ${ai} and ${sub(j)} = ${aj}.`,
    q: `In an arithmetic sequence, the ${i}th term is ${ai} and the ${j}th term is ${aj}. What is the sum of the first ${n} terms of the sequence?`,
    noun: `The sum of the first ${n} terms of the sequence`, ans: S, allowNeg: true,
    distract: [{ val: (n - 1) * (2 * a1 + (n - 2) * d) / 2, why: `${n - 1}개 항의 합입니다.` }, { val: n * (a1 + (n - 1) * d), why: '마지막 항 × 항수로 계산했습니다.' }, { val: n * (2 * a1 + n * d) / 2, why: '마지막 항을 a₁ + nd로 잘못 잡은 값입니다.' }, { val: S + n, why: '계산 실수 값입니다.' }],
    trap: { val: n * (2 * a1 + n * d) / 2, why: '마지막 항을 a₁ + nd로 잡은 값입니다.' },
    key: '두 항의 차 = (항 번호 차) × 공차. 합 = 항수 × (첫 항 + 끝 항)/2.',
    steps: [
      ['공차', `(${aj} − ${ai}) ÷ (${j} − ${i}) = ${d}`],
      ['첫 항과 끝 항', `a₁ = ${ai} − ${i - 1}(${d}) = ${a1}, a${n} = ${a1} + ${n - 1}(${d}) = ${a1 + (n - 1) * d}`],
      ['합', `${n} × (${a1} + ${a1 + (n - 1) * d}) / 2 = <strong>${fmtInt(S)}</strong>`],
    ],
  };
});

// ---------- Circular track ----------
add('track', 'Algebra', '원형 트랙 (상대 속력)', ['NE', 'MC'], r => {
  const L = r.pick([400, 600, 800, 1200]); const a = r.pick([150, 160, 180, 200]); const b = r.pick([220, 240, 250, 280, 300]);
  const opp = r.chance(0.5); const Tm = r.int(20, 45);
  const rel = opp ? a + b : b - a;
  const cnt = Math.floor(Tm * rel / L);
  return {
    q: `Two runners start at the same point on a circular track that is ${L} meters long and run ${opp ? 'in opposite directions' : 'in the same direction'} at constant speeds of ${a} meters per minute and ${b} meters per minute. How many times will the runners ${opp ? 'pass each other' : 'be side by side (not counting the start)'} during the first ${Tm} minutes?`,
    ans: cnt,
    distract: [{ val: Math.floor(Tm * (opp ? b - a : a + b) / L), why: `상대 속력을 ${opp ? '차' : '합'}로 잡은 값입니다. ${opp ? '반대 방향이면 합' : '같은 방향이면 차'}을 써야 합니다.` }, { val: cnt + 1, why: '출발 시점을 포함해 센 값입니다.' }, { val: Math.floor(Tm * b / L) - Math.floor(Tm * a / L), why: '각자 완주한 바퀴 수의 차로 계산한 값입니다.' }, { val: cnt - 1, why: '마지막 만남을 빠뜨린 값입니다.' }],
    key: `두 사람이 만날 때마다 상대 거리가 한 바퀴(${L} m)씩 누적됩니다. 상대 속력 = ${opp ? '속력의 합' : '속력의 차'}.`,
    steps: [
      ['상대 속력', `${opp ? `${a} + ${b}` : `${b} − ${a}`} = ${rel} m/min`],
      ['한 번 만나는 데 걸리는 시간', `${L} ÷ ${rel} = ${show(new Frac(L, rel))}분`],
      ['횟수', `⌊${Tm} × ${rel} / ${L}⌋ = ⌊${show(new Frac(Tm * rel, L))}⌋ = <strong>${cnt}</strong>`],
    ],
  };
});

module.exports = T;
