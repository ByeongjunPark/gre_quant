'use strict';
// Geometry items that come with a figure (inline SVG). Most of them can only be solved by reading the figure.
const { Frac, fmtInt, show, expr, sqrtDisp, gcd } = require('./lib');
const { Fig, it, deg, bbox, SHADE } = require('./fig');
const T = [];
const add = (id, topic, formats, gen) => T.push({ id, area: 'Geometry', topic, formats, gen, fig: true });
const PI = 'π';
const E = (a, c) => ({ disp: expr([[a, PI], [c, '']]), v: null });
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const addv = (a, b) => [a[0] + b[0], a[1] + b[1]];
const mul = (a, k) => [a[0] * k, a[1] * k];
const ell = '<tspan font-style="italic">ℓ</tspan>';

// ---------- Parallel lines with a bent transversal ----------
add('fig_parallel', '평행선과 꺾인 선의 각', ['NE', 'MC', 'QC'], r => {
  let al, be, y, form;
  for (;;) {
    y = r.int(12, 40); form = r.pick([[1, r.int(5, 30)], [2, -r.int(5, 20)], [3, -r.int(10, 40)], [2, r.int(2, 15)]]);
    be = form[0] * y + form[1]; al = r.int(25, 70);
    if (be >= 22 && be <= 70 && al + be < 140 && al + be > 55) break;
  }
  const x = al + be;
  const supp = r.chance(0.5);
  const H = 4, qy = H * be / (al + be);
  const Q = [6, qy];
  const t1 = (H - qy) / Math.sin(al * Math.PI / 180), t2 = qy / Math.sin(be * Math.PI / 180);
  const A = [Q[0] - t1 * Math.cos(al * Math.PI / 180), H], B = [Q[0] - t2 * Math.cos(be * Math.PI / 180), 0];
  const xl = Math.min(A[0], B[0]) - 1.6, xr = Q[0] + 2.2;
  const f = new Fig({ w: 380, h: 230, box: [xl, -0.4, xr + 0.6, H + 0.4] });
  f.line([xl, H], [xr, H]).line([xl, 0], [xr, 0]).line(A, Q).line(Q, B);
  f.text([xr, H], ell, { dx: 12 }).text([xr, 0], `${it('m')}`, { dx: 12 });
  const bExpr = `(${form[0] === 1 ? '' : form[0]}${it('y')} ${form[1] > 0 ? '+' : '−'} ${Math.abs(form[1])})°`;
  if (supp) f.angleArc(A, [A[0] - 1, H], Q, 14).angleLabel(A, [A[0] - 1, H], Q, `${180 - al}°`, 30);
  else f.angleArc(A, [A[0] + 1, H], Q, 14).angleLabel(A, [A[0] + 1, H], Q, `${al}°`, 30);
  f.angleArc(B, [B[0] + 1, 0], Q, 16).text(B, bExpr, { dx: 58, dy: -12, anchor: 'start' });
  f.angleArc(Q, A, B, 14).angleLabel(Q, A, B, `${x}°`, 30);
  const yAns = y;
  const naive = new Frac(x - (180 - al) - form[1], form[0]);
  const distract = [
    ...(supp && naive.isInt() && naive.v > 0 ? [{ val: naive.v, why: `${180 - al}°를 그대로 꺾인 각의 한 부분으로 쓴 값입니다. 평행선과 만드는 엇각은 ${180 - al}°의 보각인 ${al}°입니다.` }] : []),
    ...(new Frac(x - form[1], form[0]).isInt() ? [{ val: new Frac(x - form[1], form[0]).v, why: `A에서의 각(${al}°)을 빼지 않은 값입니다.` }] : []),
    ...(new Frac(180 - x - form[1], form[0]).isInt() && 180 - x - form[1] > 0 ? [{ val: new Frac(180 - x - form[1], form[0]).v, why: '꺾인 각과 두 각의 관계를 보각(합 180°)으로 잘못 세운 값입니다.' }] : []),
    { val: be, why: `y가 아니라 (${form[0] === 1 ? '' : form[0]}y ${form[1] > 0 ? '+' : '−'} ${Math.abs(form[1])})의 값입니다.` },
    { val: yAns + 5, why: '계산 실수 값입니다.' },
  ];
  return {
    fig: f.svg({ alt: 'two parallel lines with a bent segment between them' }),
    ctx: 'In the figure above, line <i>ℓ</i> is parallel to line <i>m</i>.',
    q: `In the figure above, line <i>ℓ</i> is parallel to line <i>m</i>. What is the value of <i>y</i>?`,
    noun: '<i>y</i>', ans: yAns, distract, trap: distract[0],
    key: '평행선 사이에서 꺾인 선의 꺾인 각 = 위·아래 평행선과 이루는 두 엇각의 합. 꼭짓점을 지나는 평행선을 하나 더 그으면 보입니다.',
    steps: [
      ...(supp ? [['평행선과 이루는 각 바꾸기', `위쪽 직선에서 주어진 ${180 - al}°는 꺾인 선 반대쪽 각이므로, 꺾인 쪽 각은 180° − ${180 - al}° = ${al}°입니다.`]] : []),
      ['보조선', `꺾인 점을 지나고 ℓ, m에 평행한 직선을 그으면 꺾인 각 ${x}°가 두 엇각 ${al}°와 (${form[0] === 1 ? '' : form[0]}y ${form[1] > 0 ? '+' : '−'} ${Math.abs(form[1])})°로 나뉩니다.`],
      ['식', `${al} + ${form[0] === 1 ? '' : form[0]}y ${form[1] > 0 ? '+' : '−'} ${Math.abs(form[1])} = ${x} → y = <strong>${yAns}</strong>`],
    ],
  };
});

// ---------- Inscribed angle with isosceles triangle OAB ----------
add('fig_inscribed', '원주각·중심각 (그림)', ['NE', 'MC', 'QC'], r => {
  let t, major;
  for (;;) { t = r.int(18, 65); major = r.chance(0.6); const c = 180 - 2 * t; if (major || c >= 70) break; }
  const c = 180 - 2 * t;
  const A = deg(-90 - c / 2), B = deg(-90 + c / 2);
  const C = major ? deg(90 + r.int(-35, 35)) : deg(-90 + r.int(-(c / 2 - 18), c / 2 - 18));
  const O = [0, 0];
  const f = new Fig({ w: 300, h: 280, box: [-1.15, -1.15, 1.15, 1.15] });
  f.circle(O, 1).line(O, A).line(O, B).line(A, B).line(C, A).line(C, B).dot(O);
  f.label(A, 'A', O, 14).label(B, 'B', O, 14).label(C, 'C', O, 14).text(O, 'O', { dx: -13, dy: 0 });
  f.angleLabel(A, O, B, `${t}°`, 40).angleLabel(C, A, B, `${it('x')}°`, 32);
  const ans = major ? 90 - t : 90 + t;
  return {
    fig: f.svg({ alt: 'circle with center O and inscribed angle' }),
    q: `In the figure above, O is the center of the circle, and points A, B, and C lie on the circle. What is the value of <i>x</i>?`,
    noun: '<i>x</i>', qcCtx: 'O is the center of the circle, and points A, B, and C lie on the circle.',
    ans,
    distract: [
      { val: c, why: '중심각 ∠AOB입니다. 원주각은 같은 호에 대한 중심각의 절반입니다.' },
      { val: major ? 90 + t : 90 - t, why: major ? 'C가 큰 호 위에 있는데, 작은 호 위의 원주각(보각)으로 계산한 값입니다.' : 'C가 작은 호(AB 아래쪽) 위에 있으므로 원주각은 큰 호에 대한 각입니다. 반대쪽 원주각을 구한 값입니다.' },
      { val: t, why: '∠OAB와 같다고 본 값입니다.' },
      { val: 2 * t, why: 'OA = OB를 이용하지 않고 각을 두 배로 한 값입니다.' },
      { val: 180 - t, why: '보각을 잘못 적용한 값입니다.' },
    ],
    trap: { val: c, why: '중심각입니다.' },
    key: 'OA = OB(반지름)이므로 △OAB는 이등변삼각형입니다. 원주각 = 같은 호에 대한 중심각의 1/2.',
    steps: [
      ['이등변삼각형', `OA = OB이므로 ∠OBA = ∠OAB = ${t}° → ∠AOB = 180° − 2·${t}° = ${c}°`],
      ['원주각', major ? `C는 큰 호 위에 있으므로 ∠ACB는 작은 호 AB에 대한 원주각 = ${c}°/2 = ${ans}°` : `C는 작은 호 위에 있으므로 ∠ACB는 큰 호 AB(중심각 360° − ${c}° = ${360 - c}°)에 대한 원주각 = ${360 - c}°/2 = ${ans}°`],
      ['답', `x = <strong>${ans}</strong>`],
    ],
  };
});

// ---------- Shaded regions ----------
function sector(f, c, R, a0, a1, fill) {
  const p0 = addv(c, mul(deg(a0), R)), p1 = addv(c, mul(deg(a1), R));
  return f.path(`${f.M(c)} ${f.L(p0)} ${f.arcTo(p1, R, a1 - a0 > 180 ? 1 : 0, 0)} Z`, { fill });
}
add('fig_shaded', '색칠한 영역의 넓이 (그림)', ['MC'], r => {
  const v = r.pick(['corners', 'lens', 'arbelos']);
  if (v === 'corners') {
    const s = r.pick([4, 6, 8, 10, 12]), h = s / 2;
    const f = new Fig({ w: 260, h: 260, box: [-0.6, -0.6, s + 0.6, s + 0.6] });
    f.poly([[0, 0], [s, 0], [s, s], [0, s]], { fill: SHADE });
    sector(f, [0, 0], h, 0, 90, '#fff'); sector(f, [s, 0], h, 90, 180, '#fff'); sector(f, [s, s], h, 180, 270, '#fff'); sector(f, [0, s], h, 270, 360, '#fff');
    f.poly([[0, 0], [s, 0], [s, s], [0, s]]);
    f.text([s / 2, 0], String(s), { dy: 14 });
    const ans = E(new Frac(-s * s, 4), s * s);
    return {
      fig: f.svg({ alt: 'square with four quarter circles at the corners' }),
      q: `In the figure above, the square has sides of length ${s}, and each of the four unshaded regions is a quarter of a circle with radius ${h} centered at a vertex of the square. What is the area of the shaded region?`,
      ans, disp: ans.disp,
      distract: [{ val: E(-s * s, s * s), why: '사분원의 반지름을 정사각형 한 변 전체로 잡은 값입니다.' }, { val: E(new Frac(s * s, 4), 0), why: '네 사분원의 넓이 합(= 원 하나)입니다. 색칠한 부분은 그 나머지입니다.' }, { val: E(new Frac(-s * s, 16), s * s), why: '사분원 하나만 뺀 값입니다.' }, { val: E(new Frac(-s * s, 2), s * s), why: '사분원 4개를 반원 4개로 착각한 값입니다.' }],
      key: '네 귀퉁이의 사분원 4개를 합치면 반지름 s/2인 원 하나가 됩니다.',
      steps: [['사분원 4개 = 원 1개', `반지름 ${h} → 넓이 ${h * h}π`], ['색칠한 부분', `${s}² − ${h * h}π = <strong>${ans.disp}</strong>`]],
    };
  }
  if (v === 'lens') {
    const s = r.pick([2, 4, 6, 8, 10]);
    const f = new Fig({ w: 260, h: 260, box: [-0.6, -0.6, s + 0.6, s + 0.6] });
    const A = [0, 0], B = [s, 0], Cc = [s, s], D = [0, s];
    f.path(`${f.M(B)} ${f.arcTo(D, s, 0, 0)} ${f.arcTo(B, s, 0, 0)} Z`, { fill: SHADE });
    f.poly([A, B, Cc, D]);
    f.label(A, 'A', [s / 2, s / 2]).label(B, 'B', [s / 2, s / 2]).label(Cc, 'C', [s / 2, s / 2]).label(D, 'D', [s / 2, s / 2]);
    f.text([s / 2, 0], String(s), { dy: 14 });
    const ans = E(new Frac(s * s, 2), -s * s);
    return {
      fig: f.svg({ alt: 'square ABCD with two quarter-circle arcs forming a shaded lens' }),
      q: `In the figure above, ABCD is a square with sides of length ${s}. Arc BD is a quarter of a circle with center A, and arc DB is a quarter of a circle with center C. What is the area of the shaded region?`,
      ans, disp: ans.disp,
      distract: [{ val: E(new Frac(s * s, 4), new Frac(-s * s, 2)), why: '렌즈의 절반(활꼴 하나)의 넓이입니다.' }, { val: E(new Frac(s * s, 4), 0), why: '사분원 하나의 넓이입니다.' }, { val: E(new Frac(-s * s, 2), 2 * s * s), why: '정사각형에서 렌즈를 뺀 값을 잘못 계산한 값입니다.' }, { val: E(new Frac(s * s, 2), new Frac(-s * s, 2)), why: '정사각형의 넓이 전체가 아니라 절반만 뺀 값입니다.' }],
      key: '렌즈 = 사분원 두 개의 넓이 합 − 정사각형 (겹친 부분이 두 번 세어지므로).',
      steps: [['사분원 두 개', `2 × (1/4)π(${s})² = ${expr([[new Frac(s * s, 2), PI]])}`], ['겹침', `두 사분원을 합치면 정사각형 전체를 덮고 렌즈가 한 번 더 세어집니다 → 렌즈 = 두 사분원 − 정사각형`], ['답', `${expr([[new Frac(s * s, 2), PI]])} − ${s * s} = <strong>${ans.disp}</strong>`]],
    };
  }
  let a, b; do { a = r.int(2, 8); b = r.int(2, 8); } while (a === b);
  const R = (a + b) / 2;
  const A = [0, 0], Cp = [a, 0], B = [a + b, 0];
  const f = new Fig({ w: 360, h: 210, box: [-0.4, -0.6, a + b + 0.4, R + 0.3] });
  f.path(`${f.M(A)} ${f.arcTo(B, R, 0, 1)} ${f.arcTo(Cp, b / 2, 0, 0)} ${f.arcTo(A, a / 2, 0, 0)} Z`, { fill: SHADE });
  f.line(A, B).dot(Cp, 2.2);
  f.text(A, 'A', { dy: 14 }).text(Cp, 'C', { dy: 14 }).text(B, 'B', { dy: 14 });
  const ans = E(new Frac(a * b, 4), 0);
  return {
    fig: f.svg({ alt: 'large semicircle with two smaller semicircles removed' }),
    q: `In the figure above, point C lies on segment AB, AC = ${a}, and CB = ${b}. The figure consists of three semicircles with diameters AB, AC, and CB. What is the area of the shaded region?`,
    ans, disp: ans.disp,
    distract: [{ val: E(new Frac((a + b) ** 2, 8), 0), why: '큰 반원 전체의 넓이입니다. 작은 반원 두 개를 빼야 합니다.' }, { val: E(new Frac(a * a + b * b, 8), 0), why: '작은 반원 두 개의 넓이 합입니다.' }, { val: E(new Frac(a * b, 2), 0), why: '반원이 아니라 원 전체로 계산한 값입니다.' }, { val: E(new Frac(a * b, 8), 0), why: '반지름 대신 지름을 넣은 뒤 절반을 한 번 더 한 값입니다.' }],
    key: '반원 넓이 = (π/8)·(지름)². 큰 반원 − 작은 반원 두 개 = (π/8)[(a + b)² − a² − b²] = πab/4.',
    steps: [['큰 반원', `(π/8)(${a + b})² = ${expr([[new Frac((a + b) ** 2, 8), PI]])}`], ['작은 반원 두 개', `(π/8)(${a}² + ${b}²) = ${expr([[new Frac(a * a + b * b, 8), PI]])}`], ['차', `<strong>${ans.disp}</strong>`]],
  };
});

// ---------- Chain of isosceles triangles ----------
add('fig_isos', '이등변삼각형 연쇄 (외각)', ['NE', 'MC', 'QC'], r => {
  const c = r.int(15, 40);
  const D = [0, 0], C = [1, 0], A = deg(180 - 2 * c), B = [2 * deg(180 - 2 * c)[0], 0];
  const bb = bbox([A, B, C], 0.15);
  const f = new Fig({ w: 380, h: 220, box: bb });
  f.poly([A, B, C]).line(A, D);
  f.tick(A, B, 1).tick(A, D, 1).tick(D, C, 1);
  const cen = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
  f.label(A, 'A', cen).label(B, 'B', cen).label(C, 'C', cen).text(D, 'D', { dy: 14 });
  f.angleLabel(C, A, B, `${c}°`, 52).angleLabel(A, B, C, `${it('x')}°`, 24);
  const ans = 180 - 3 * c;
  return {
    fig: f.svg({ alt: 'triangle ABC with point D on BC and equal segments marked' }),
    q: `In the figure above, D lies on side BC, and AB = AD = DC. What is the value of <i>x</i>?`,
    noun: '<i>x</i>', qcCtx: 'In the figure, D lies on side BC, and AB = AD = DC.', ans,
    distract: [{ val: 180 - 2 * c, why: '△ADC 하나만 이등변으로 보고 꼭지각을 구한 값입니다.' }, { val: 180 - 4 * c, why: '∠BAD만 구하고 ∠DAC를 더하지 않은 값입니다.' }, { val: 3 * c, why: '외각과 내각의 관계를 거꾸로 적용한 값입니다.' }, { val: 2 * c, why: '∠ADB(= ∠ABD)의 크기입니다.' }, { val: 90 - c, why: '직각삼각형이라고 가정한 값입니다.' }],
    trap: { val: 180 - 4 * c, why: '∠BAD만 구한 값입니다.' },
    key: '같은 표시(틱)의 변은 길이가 같습니다. 이등변삼각형의 밑각 + 삼각형 외각 정리를 연쇄로 씁니다.',
    steps: [
      ['△ADC', `AD = DC → ∠DAC = ∠C = ${c}°`],
      ['외각', `∠ADB는 △ADC의 외각 → ${c}° + ${c}° = ${2 * c}°`],
      ['△ABD', `AB = AD → ∠ABD = ∠ADB = ${2 * c}° → ∠BAD = 180° − ${4 * c}° = ${180 - 4 * c}°`],
      ['답', `x = ∠BAD + ∠DAC = ${180 - 4 * c} + ${c} = <strong>${ans}</strong>`],
    ],
  };
});

// ---------- Triangle in the coordinate plane ----------
add('fig_coordtri', '좌표평면 위 삼각형의 넓이 (그림)', ['NE', 'MC', 'QC'], r => {
  let P, area2;
  for (;;) {
    P = [[r.int(-4, 1), r.int(-3, 2)], [r.int(3, 8), r.int(-2, 3)], [r.int(-2, 5), r.int(4, 7)]];
    area2 = Math.abs(P[0][0] * (P[1][1] - P[2][1]) + P[1][0] * (P[2][1] - P[0][1]) + P[2][0] * (P[0][1] - P[1][1]));
    const axisAligned = [[0, 1], [1, 2], [0, 2]].filter(([i, j]) => P[i][0] === P[j][0] || P[i][1] === P[j][1]).length;
    if (area2 >= 14 && axisAligned === 0) break;
  }
  const area = new Frac(area2, 2);
  const xs = P.map(p => p[0]), ys = P.map(p => p[1]);
  const W = Math.max(...xs) - Math.min(...xs), Hh = Math.max(...ys) - Math.min(...ys);
  const f = new Fig({ w: 360, h: 300, box: [Math.min(-1, ...xs) - 0.8, Math.min(-1, ...ys) - 0.8, Math.max(1, ...xs) + 1.2, Math.max(1, ...ys) + 1.2] });
  f.axes(Math.min(-1, ...xs) - 0.6, Math.max(1, ...xs) + 1, Math.min(-1, ...ys) - 0.6, Math.max(1, ...ys) + 1);
  f.poly(P);
  const cen = [(xs[0] + xs[1] + xs[2]) / 3, (ys[0] + ys[1] + ys[2]) / 3];
  P.forEach(p => { f.dot(p); f.label(p, `(${p[0]}, ${p[1]})`.replace(/-/g, '−'), cen, 32); });
  const box = W * Hh;
  return {
    fig: f.svg({ alt: 'triangle in the xy-plane' }),
    q: `What is the area of the triangle shown in the <i>xy</i>-plane above?`,
    noun: 'The area of the triangle shown', ans: area,
    distract: [{ val: box, why: '삼각형을 감싸는 직사각형의 넓이입니다.' }, { val: new Frac(box, 2), why: '감싸는 직사각형의 절반으로 어림한 값입니다(삼각형이 직각삼각형일 때만 성립).' }, { val: area2, why: '신발끈 공식에서 2로 나누지 않은 값입니다.' }, { val: area.add(new Frac(3, 2)), why: '잘라낸 직각삼각형 하나의 넓이를 잘못 계산한 값입니다.' }],
    trap: { val: new Frac(box, 2), why: '감싸는 직사각형의 절반입니다.' },
    key: '좌표축에 평행한 변이 없으면, 감싸는 직사각형에서 바깥 직각삼각형 3개를 빼거나 신발끈 공식을 씁니다.',
    steps: [
      ['감싸는 직사각형', `가로 ${W} × 세로 ${Hh} = ${box}`],
      ['신발끈 공식', `(1/2)|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)| = (1/2)(${area2})`],
      ['답', `<strong>${show(area)}</strong>`],
    ],
  };
});

// ---------- Altitude to the hypotenuse ----------
add('fig_altitude', '직각삼각형의 높이 (닮음, 기하평균)', ['MC', 'NE', 'QC'], (r, fmt) => {
  const [p, q] = r.pick([[1, 4], [4, 9], [2, 8], [3, 12], [9, 16], [4, 16], [1, 9], [2, 18], [5, 20], [8, 18], [4, 25], [3, 27], [16, 9], [9, 4], [8, 2]]);
  const h = Math.sqrt(p * q);
  const A = [0, 0], B = [p + q, 0], D = [p, 0], C = [p, h];
  const f = new Fig({ w: 380, h: 240, box: [-0.5, -2.6, p + q + 0.5, h + 0.8] });
  f.poly([A, B, C]).line(C, D).rightMark(C, A, B).rightMark(D, B, C);
  f.text(A, 'A', { dx: -10, dy: 6 }).text(B, 'B', { dx: 10, dy: 6 }).text(C, 'C', { dy: -12 }).text(D, 'D', { dy: 14 });
  f.text([p / 2, 0], String(p), { dy: 44 }).text([p + q / 2, 0], String(q), { dy: 44 });
  f.add(`<line x1="${f.P([0, 0])[0]}" y1="${f.P([0, 0])[1] + 30}" x2="${f.P([p, 0])[0]}" y2="${f.P([p, 0])[1] + 30}" stroke="#64748b" stroke-width="1"/><line x1="${f.P([p, 0])[0]}" y1="${f.P([p, 0])[1] + 30}" x2="${f.P([p + q, 0])[0]}" y2="${f.P([p + q, 0])[1] + 30}" stroke="#64748b" stroke-width="1"/>`);
  [0, p, p + q].forEach(x => { const [sx, sy] = f.P([x, 0]); f.add(`<line x1="${sx}" y1="${sy + 25}" x2="${sx}" y2="${sy + 35}" stroke="#64748b" stroke-width="1"/>`); });
  const ask = fmt === 'MC' ? r.pick(['h', 'ac', 'area']) : r.pick(['h', 'area']);
  let ans, noun, steps, distract;
  if (ask === 'h') { ans = h; noun = 'The length of CD';
    steps = [['닮음', '△ACD ∼ △CBD (각각 직각과 공통 예각) → AD/CD = CD/DB'], ['기하평균', `CD² = AD·DB = ${p}·${q} = ${p * q}`], ['답', `CD = <strong>${h}</strong>`]];
    distract = [{ val: (p + q) / 2, why: 'AD와 DB의 산술평균입니다. 높이는 기하평균입니다.' }, { val: p * q, why: 'CD²의 값입니다.' }, { val: Math.abs(q - p), why: '두 선분의 차입니다.' }, { val: h + 1, why: '계산 실수 값입니다.' }]; }
  else if (ask === 'area') { ans = (p + q) * h / 2; noun = 'The area of triangle ABC';
    steps = [['높이', `CD² = ${p}·${q} → CD = ${h}`], ['넓이', `(1/2) × AB × CD = (1/2) × ${p + q} × ${h} = <strong>${fmtInt(ans)}</strong>`]];
    distract = [{ val: (p + q) * h, why: '1/2을 빠뜨린 값입니다.' }, { val: (p + q) * (p + q) / 4, why: '높이를 AB/2로 본 값입니다(외접원의 반지름).' }, { val: p * q / 2, why: 'AD × DB / 2로 계산한 값입니다.' }, { val: (p + q) * ((p + q) / 2) / 2, why: '높이를 산술평균으로 잡은 값입니다.' }]; }
  else { ans = { disp: sqrtDisp(p * (p + q)), v: Math.sqrt(p * (p + q)) }; noun = 'The length of AC';
    steps = [['닮음', '△ACD ∼ △ABC → AD/AC = AC/AB'], ['계산', `AC² = AD·AB = ${p}·${p + q} = ${p * (p + q)}`], ['답', `AC = <strong>${sqrtDisp(p * (p + q))}</strong>`]];
    distract = [{ val: { disp: sqrtDisp(q * (p + q)), v: Math.sqrt(q * (p + q)) }, why: 'BC의 길이입니다.' }, { val: { disp: sqrtDisp(p * p + p * q), v: null }, why: '' }, { val: { disp: sqrtDisp(p * p + h * h + 1), v: null }, why: '피타고라스 계산 실수 값입니다.' }, { val: { disp: fmtInt(p + h), v: p + h }, why: 'AD + CD로 계산한 값입니다.' }, { val: { disp: sqrtDisp(p * q), v: h }, why: 'CD의 길이입니다.' }, { val: { disp: sqrtDisp((p + q) * (p + q) - p * p), v: null }, why: 'AB² − AD²로 계산한 잘못된 값입니다.' }].filter(d => d.why); }
  return {
    fig: f.svg({ alt: 'right triangle ABC with altitude CD to the hypotenuse' }),
    q: `In the figure above, angle ACB and angle CDB are right angles, AD = ${p}, and DB = ${q}. What is the ${ask === 'h' ? 'length of segment CD' : ask === 'area' ? 'area of triangle ABC' : 'length of segment AC'}?`,
    qcCtx: `In the figure, angle ACB and angle CDB are right angles, AD = ${p}, and DB = ${q}.`, noun, ans, disp: ask === 'ac' ? ans.disp : undefined, distract, trap: distract[0],
    key: '직각삼각형에서 빗변에 내린 높이는 세 개의 닮은 삼각형을 만듭니다: CD² = AD·DB, AC² = AD·AB, BC² = DB·AB.',
    steps,
  };
});

// ---------- Triangle side/angle comparison (not to scale) ----------
add('fig_qcangle', '변과 각의 대소 (축척 아님)', ['QC'], r => {
  const v = r.pick(['twoangles', 'right']);
  const A = [0, 0], B = [6, 0], C = [2.2, 3.4];
  const f = new Fig({ w: 320, h: 210, box: [-0.4, -0.5, 6.4, 3.8] });
  f.poly([A, B, C]);
  f.text(A, 'A', { dx: -10, dy: 6 }).text(B, 'B', { dx: 10, dy: 6 }).text(C, 'C', { dy: -12 });
  if (v === 'twoangles') {
    let a, b, c; do { a = r.int(4, 12); b = r.int(4, 12); c = r.int(4, 12); } while (!(a + b > c && a + c > b && b + c > a) || Math.abs(a - b) > 4);
    f.text([4.1, 1.7], String(a), { dx: 12, dy: -4 }).text([1.1, 1.7], String(b), { dx: -12, dy: -4 }).text([3, 0], String(c), { dy: 14 });
    const ans = a > b ? 'A' : a < b ? 'B' : 'C';
    return {
      kind: 'qc', ctx: f.svg({ alt: 'triangle ABC with side lengths', note: true }) + `In triangle ABC, BC = ${a}, AC = ${b}, and AB = ${c}.`,
      A: 'The measure of angle A', B: 'The measure of angle B', ans,
      key: '삼각형에서 더 긴 변의 맞은편 각이 더 큽니다. 그림이 축척대로가 아니므로 눈으로 보지 말고 길이로 판단합니다.',
      steps: [['대응', `∠A의 대변은 BC = ${a}, ∠B의 대변은 AC = ${b}`], ['비교', a === b ? '대변의 길이가 같으므로 두 각은 같습니다(이등변삼각형).' : `${Math.max(a, b)} > ${Math.min(a, b)}이므로 ∠${a > b ? 'A' : 'B'}가 더 큽니다.`]],
    };
  }
  let a, b, c; for (;;) { a = r.int(3, 12); b = r.int(3, 12); const c2 = a * a + b * b + r.pick([-3, -2, -1, 0, 0, 1, 2, 3]) * r.int(1, 4); c = Math.sqrt(c2); if (Number.isInteger(c) && c < a + b && c > Math.abs(a - b)) break; }
  f.text([4.1, 1.7], String(a), { dx: 12, dy: -4 }).text([1.1, 1.7], String(b), { dx: -12, dy: -4 }).text([3, 0], String(c), { dy: 14 });
  const s = c * c - a * a - b * b;
  const ans = s > 0 ? 'A' : s < 0 ? 'B' : 'C';
  return {
    kind: 'qc', ctx: f.svg({ alt: 'triangle ABC with side lengths', note: true }) + `In triangle ABC, BC = ${a}, AC = ${b}, and AB = ${c}.`,
    A: 'The measure of angle C', B: '90°', ans,
    key: 'c² 와 a² + b²를 비교합니다: 크면 둔각, 같으면 직각, 작으면 예각(c는 각 C의 대변).',
    steps: [['계산', `AB² = ${c * c}, BC² + AC² = ${a * a} + ${b * b} = ${a * a + b * b}`], ['판정', s > 0 ? 'AB²이 더 크므로 ∠C는 둔각(> 90°)' : s < 0 ? 'AB²이 더 작으므로 ∠C는 예각(< 90°)' : '같으므로 ∠C = 90°']],
  };
});

// ---------- Isosceles trapezoid ----------
add('fig_trap', '등변사다리꼴의 넓이 (그림)', ['NE', 'MC', 'QC'], r => {
  const [u, hh, L] = r.pick([[3, 4, 5], [4, 3, 5], [5, 12, 13], [6, 8, 10], [8, 6, 10], [9, 12, 15], [12, 5, 13], [8, 15, 17]]);
  const b1 = r.int(4, 14), b2 = b1 + 2 * u;
  const A = [0, 0], B = [b2, 0], C = [u + b1, hh], D = [u, hh];
  const f = new Fig({ w: 380, h: 220, box: [-1, -1.2, b2 + 1, hh + 1] });
  f.poly([A, B, C, D]).line(D, [u, 0], { dash: true }).rightMark([u, 0], B, D);
  f.text([u + b1 / 2, hh], String(b1), { dy: -12 }).text([b2 / 2, 0], String(b2), { dy: 14 });
  f.label([u / 2, hh / 2], String(L), [u, 0], 16).label([b2 - u / 2, hh / 2], String(L), [b2 - u, 0], 16);
  const area = (b1 + b2) * hh / 2;
  return {
    fig: f.svg({ alt: 'isosceles trapezoid with dashed height' }),
    q: `What is the area of the trapezoid shown above?`,
    noun: 'The area of the trapezoid', ans: area,
    distract: [{ val: (b1 + b2) * L / 2, why: '빗변(다리)의 길이를 높이로 쓴 값입니다.' }, { val: (b1 + b2) * hh, why: '1/2을 빠뜨린 값입니다.' }, { val: b2 * hh, why: '아랫변 × 높이(직사각형)로 계산한 값입니다.' }, { val: b1 * hh + u * hh / 2, why: '양쪽 직각삼각형 중 하나만 더한 값입니다.' }],
    trap: { val: (b1 + b2) * L / 2, why: '다리 길이를 높이로 쓴 값입니다.' },
    key: '등변사다리꼴에서 윗변 양 끝에서 수선을 내리면 양쪽에 합동인 직각삼각형이 생기고, 밑변 차이의 절반이 그 밑변입니다.',
    steps: [['양쪽 삼각형의 밑변', `(${b2} − ${b1})/2 = ${u}`], ['높이', `√(${L}² − ${u}²) = ${hh}`], ['넓이', `(${b1} + ${b2})/2 × ${hh} = <strong>${area}</strong>`]],
  };
});

module.exports = T;
