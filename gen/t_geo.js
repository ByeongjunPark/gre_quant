'use strict';
const { Frac, gcd, fmtInt, show, sup, expr, sqrtDisp, simplifySqrt } = require('./lib');
const T = [];
const add = (id, area, topic, formats, gen) => T.push({ id, area, topic, formats, gen });
const PI = 'π', R3 = '√3';
const E = (a, b, c) => ({ disp: expr([[a, PI], [b, R3], [c, '']]), v: null }); // a·π + b·√3 + c

// ---------- Rectangle from perimeter + diagonal ----------
add('rectpd', 'Geometry', '직사각형: 둘레와 대각선으로 넓이', ['NE', 'MC', 'QC'], r => {
  const [l0, w0, d0] = r.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 12, 15]]);
  const k = r.int(1, 3);
  const l = l0 * k, w = w0 * k, d = d0 * k, P = 2 * (l + w);
  const A = l * w;
  return {
    ctx: `A rectangle has a perimeter of ${P} and a diagonal of length ${d}.`,
    q: `A rectangle has a perimeter of ${P} and a diagonal of length ${d}. What is the area of the rectangle?`,
    noun: 'The area of the rectangle', ans: A,
    distract: [{ val: P * P / 16, why: '정사각형이라고 가정한 넓이입니다.' }, { val: (P / 2) ** 2 - d * d, why: '(l + w)² − d² = 2lw이므로 2로 나눠야 하는데 나누지 않은 값입니다.' }, { val: d * d / 2, why: '대각선만으로 정사각형 넓이를 구한 값입니다.' }, { val: A + l, why: '계산 실수 값입니다.' }],
    trap: { val: P * P / 16, why: '정사각형이라고 가정한 넓이입니다(둘레가 같으면 정사각형의 넓이가 최대).' },
    key: '(l + w)² = l² + w² + 2lw → 2lw = (반둘레)² − (대각선)².',
    steps: [
      ['식 세우기', `l + w = ${P / 2}, l² + w² = ${d}² = ${d * d}`],
      ['제곱 전개', `(l + w)² = ${(P / 2) ** 2} = ${d * d} + 2lw → 2lw = ${(P / 2) ** 2 - d * d}`],
      ['넓이', `lw = <strong>${A}</strong>`],
    ],
  };
});

// ---------- Triangle formed by a line and the axes ----------
add('lineaxes', 'Geometry', '좌표평면: 직선과 축이 만드는 삼각형', ['NE', 'MC', 'QC'], r => {
  let a, b, q, i, j;
  do { a = r.int(1, 5); b = r.int(1, 5); q = r.int(2, 9); i = r.int(-2, 3); j = r.int(-2, 4); } while (gcd(a, b) !== 1 || i === j || i === 0 || j === 0);
  // y = q - (a/b)x ; points at x = b*i, b*j
  const p1 = [b * i, q - a * i], p2 = [b * j, q - a * j];
  const xint = new Frac(q * b, a);
  const area = xint.mul(q).div(2);
  return {
    ctx: `Line <i>k</i> passes through the points (${p1[0]}, ${p1[1]}) and (${p2[0]}, ${p2[1]}) in the <i>xy</i>-plane.`,
    q: `In the <i>xy</i>-plane, line <i>k</i> passes through the points (${p1[0]}, ${p1[1]}) and (${p2[0]}, ${p2[1]}). What is the area of the triangular region bounded by line <i>k</i>, the <i>x</i>-axis, and the <i>y</i>-axis?`,
    noun: 'The area of the triangular region bounded by line <i>k</i>, the <i>x</i>-axis, and the <i>y</i>-axis', ans: area,
    distract: [{ val: xint.mul(q), why: '밑변 × 높이에서 2로 나누지 않은 값입니다.' }, { val: new Frac(q * q * a, 2 * b), why: '기울기를 뒤집어 x절편을 잘못 구한 값입니다.' }, { val: new Frac(q * q, 2), why: 'x절편과 y절편이 같다고 본 값입니다.' }, { val: area.add(1), why: '계산 실수 값입니다.' }],
    trap: { val: new Frac(q * q * a, 2 * b), why: '기울기의 역수로 x절편을 구한 값입니다.' },
    key: '기울기 → 절편 → 넓이 = (x절편 × y절편)/2.',
    steps: [
      ['기울기', `(${p2[1]} − (${p1[1]})) / (${p2[0]} − (${p1[0]})) = −${a}/${b}`.replace(/\/1$/, '')],
      ['절편', `y = −(${a}/${b})x + ${q} → y절편 ${q}, x절편 = ${show(xint)}`],
      ['넓이', `(1/2) × ${show(xint)} × ${q} = <strong>${show(area)}</strong>`],
    ],
  };
});

// ---------- Circle / inscribed square region ----------
add('circsq', 'Geometry', '원과 정사각형 사이 영역', ['MC'], r => {
  const v = r.pick(['sqInCircle', 'circleInSq']);
  const s = r.pick([4, 6, 8, 10, 12]);
  if (v === 'sqInCircle') {
    const r2 = new Frac(s * s, 2); // radius^2
    const ans = E(r2, 0, -s * s);
    return {
      q: `A square with sides of length ${s} is inscribed in a circle. What is the area of the region inside the circle but outside the square?`,
      ans, disp: ans.disp, distract: [
        { val: E(new Frac(s * s, 4), 0, -s * s), why: '원의 반지름을 s/2로 잡은 값입니다(정사각형에 내접하는 원과 혼동).' },
        { val: E(s * s, 0, -s * s), why: '반지름을 대각선 전체 길이처럼 잘못 잡은 값입니다.' },
        { val: E(r2, 0, -s * s / 2), why: '정사각형 넓이를 절반만 뺀 값입니다.' },
        { val: E(new Frac(s * s, 2).mul(2), 0, -2 * s * s), why: '반지름 대신 지름 제곱을 쓴 값입니다.' },
      ],
      key: '정사각형이 원에 내접하면 대각선 = 지름입니다.',
      steps: [['지름 = 대각선', `대각선 = ${s}√2 → 반지름 = ${s / 2}√2, r² = ${show(r2)}`], ['넓이 차', `원 ${show(r2)}π − 정사각형 ${s * s}`], ['답', ans.disp]],
    };
  }
  const ans = E(new Frac(-s * s, 4), 0, s * s);
  return {
    q: `A circle is inscribed in a square with sides of length ${s}. What is the total area of the four regions inside the square but outside the circle?`,
    ans, disp: ans.disp, distract: [
      { val: E(-s * s, 0, s * s), why: '반지름 대신 지름을 써서 원의 넓이를 구한 값입니다.' },
      { val: E(new Frac(-s * s, 2), 0, s * s), why: '반지름을 s/√2로 잡은 값입니다(외접원과 혼동).' },
      { val: E(new Frac(-s * s, 16), 0, new Frac(s * s, 4)), why: '네 영역 중 하나의 넓이만 구한 값입니다.' },
      { val: E(new Frac(-s * s, 8), 0, s * s), why: '원의 넓이를 절반(반원)만 뺀 값입니다.' },
    ],
    key: '원이 정사각형에 내접하면 지름 = 한 변입니다.',
    steps: [['반지름', `지름 = ${s} → r = ${s / 2}`], ['넓이 차', `${s * s} − ${s * s / 4}π`], ['답', ans.disp]],
  };
});

// ---------- Circular segment ----------
add('segment', 'Geometry', '활꼴의 넓이 (부채꼴 − 삼각형)', ['MC'], r => {
  const theta = r.pick([60, 90, 120]);
  const rad = r.pick([2, 4, 6, 8, 12]);
  const rr = rad * rad;
  const sector = new Frac(theta * rr, 360);
  let tri, triTxt;
  if (theta === 90) { tri = E(0, 0, new Frac(rr, 2)); triTxt = `직각이등변삼각형: (1/2)r² = ${show(new Frac(rr, 2))}`; }
  else { tri = E(0, new Frac(rr, 4), 0); triTxt = theta === 60 ? `정삼각형: (√3/4)r² = ${expr([[new Frac(rr, 4), R3]])}` : `(1/2)r²·sin120° = (√3/4)r² = ${expr([[new Frac(rr, 4), R3]])}`; }
  const ans = theta === 90 ? E(sector, 0, new Frac(-rr, 2)) : E(sector, new Frac(-rr, 4), 0);
  return {
    q: `In a circle with center O and radius ${rad}, points A and B lie on the circle, and the measure of angle AOB is ${theta}°. What is the area of the region bounded by chord AB and the minor arc AB?`,
    ans, disp: ans.disp,
    distract: [
      { val: E(sector, 0, 0), why: '부채꼴의 넓이만 구하고 삼각형을 빼지 않은 값입니다.' },
      { val: theta === 90 ? E(sector, 0, new Frac(rr, 2)) : E(sector, new Frac(rr, 4), 0), why: '삼각형을 빼야 하는데 더한 값입니다.' },
      { val: theta === 90 ? E(sector, 0, -rr) : E(sector, new Frac(-rr, 2), 0), why: '삼각형 넓이에서 1/2을 빠뜨린 값입니다.' },
      { val: theta === 90 ? E(new Frac(rr * 3, 4), 0, new Frac(rr, 2)) : E(new Frac((360 - theta) * rr, 360), new Frac(rr, 4), 0), why: '큰 활꼴(major arc 쪽)의 넓이입니다.' },
      { val: theta === 90 ? E(sector, R3 ? 0 : 0, new Frac(-rr, 4)) : E(sector, 0, new Frac(-rr, 2)), why: '삼각형 넓이 공식을 잘못 적용한 값입니다.' },
    ],
    key: '활꼴 넓이 = 부채꼴 넓이 − 중심각을 낀 삼각형 넓이.',
    steps: [['부채꼴', `(${theta}/360) × π × ${rr} = ${expr([[sector, PI]])}`], ['삼각형 OAB', triTxt], ['차', `<strong>${ans.disp}</strong>`]],
  };
});

// ---------- Obtuse triangle third side count ----------
add('obtuse', 'Geometry', '둔각삼각형이 되는 정수 변', ['NE', 'QC', 'MC'], r => {
  const a = r.int(4, 10), b = a + r.int(2, 8);
  const kind = r.pick(['obtuse', 'acute']);
  const xs = [];
  for (let x = 1; x < a + b; x++) {
    if (x <= b - a) continue;
    const s = [a, b, x].sort((p, q) => p - q);
    const t = s[0] ** 2 + s[1] ** 2 - s[2] ** 2;
    if (kind === 'obtuse' ? t < 0 : t > 0) xs.push(x);
  }
  const all = a + b - 1 - (b - a);
  const lowObt = xs.filter(x => x < b), highObt = xs.filter(x => x > b);
  return {
    q: `A triangle has sides of lengths ${a}, ${b}, and <i>x</i>, where <i>x</i> is an integer. For how many values of <i>x</i> is the triangle ${kind}?`,
    noun: `The number of integer values of <i>x</i> for which a triangle with sides ${a}, ${b}, and <i>x</i> is ${kind}`, ans: xs.length,
    distract: [{ val: all, why: '삼각형이 되는 모든 정수 x의 개수입니다.' }, { val: kind === 'obtuse' ? highObt.length : xs.length + 1, why: kind === 'obtuse' ? 'x가 가장 긴 변인 경우만 센 값입니다. b가 가장 긴 변이면서 둔각인 경우도 있습니다.' : '경계(직각)인 경우를 포함한 값입니다.' }, { val: kind === 'obtuse' ? lowObt.length : xs.length - 1, why: '한쪽 경우만 센 값입니다.' }, { val: all - xs.length, why: `${kind === 'obtuse' ? '둔각이 아닌' : '예각이 아닌'} 경우의 개수입니다.` }],
    trap: { val: all, why: '삼각형 조건만 적용한 개수입니다.' },
    key: '가장 긴 변 c에 대해 a² + b² < c²이면 둔각, > c²이면 예각. 어떤 변이 가장 긴지 경우를 나눕니다.',
    steps: [
      ['삼각형 조건', `${b - a} < x < ${a + b} → x = ${b - a + 1}, …, ${a + b - 1} (${all}개)`],
      ['x가 가장 긴 변일 때 (x > ' + b + ')', `${kind === 'obtuse' ? 'x² > ' : 'x² < '}${a}² + ${b}² = ${a * a + b * b} → ${kind === 'obtuse' ? highObt.length + '개: ' + (highObt.join(', ') || '없음') : xs.filter(x => x > b).join(', ') || '없음'}`],
      [`${b}이(가) 가장 긴 변일 때 (x ≤ ${b})`, `${kind === 'obtuse' ? `${b}² > ${a}² + x² → x² < ${b * b - a * a}` : `${b}² < ${a}² + x² → x² > ${b * b - a * a}`} → ${kind === 'obtuse' ? lowObt.join(', ') || '없음' : xs.filter(x => x <= b).join(', ') || '없음'}`],
      ['합계', `<strong>${xs.length}</strong>개`],
    ],
  };
});

// ---------- Cylinder volume change ----------
add('cylinder', 'Geometry', '원기둥 부피 변화율', ['MC'], r => {
  let p, q, F;
  for (;;) { p = r.pick([10, 20, 25, 50, 30]); q = r.pick([10, 20, 25, 36, 40, 50, 30]); F = new Frac(100 + p, 100).mul(new Frac(100 + p, 100)).mul(new Frac(100 - q, 100)); if (F.mul(1000).isInt() && Math.abs(F.v - 1) > 1e-9) break; }
  const pct = +((F.v - 1) * 100).toFixed(2);
  const txt = x => x === 0 ? 'The volume does not change.' : x > 0 ? `The volume increases by ${+x.toFixed(2)}%.` : `The volume decreases by ${+(-x).toFixed(2)}%.`;
  const ans = { disp: txt(pct), v: null };
  return {
    q: `The radius of a right circular cylinder is increased by ${p} percent, and its height is decreased by ${q} percent. Which of the following describes the change in the volume of the cylinder?`,
    ans, disp: ans.disp,
    distract: [
      { val: { disp: txt(2 * p - q) }, why: '배율을 곱하지 않고 백분율을 더하고 뺀 값입니다.' },
      { val: { disp: txt(p - q) }, why: '반지름이 제곱으로 들어간다는 것을 무시한 값입니다.' },
      { val: { disp: txt(+(((1 + p / 100) * (1 - q / 100) - 1) * 100).toFixed(2)) }, why: '반지름 배율을 제곱하지 않은 값입니다.' },
      { val: { disp: txt(+(((1 + p / 100) ** 2 - 1) * 100 - q).toFixed(2)) }, why: '높이의 감소를 단순히 뺀 값입니다.' },
      { val: { disp: txt(0) }, why: '증가와 감소가 상쇄된다고 착각한 경우입니다.' },
    ],
    key: 'V = πr²h이므로 부피 배율 = (반지름 배율)² × (높이 배율).',
    steps: [['배율', `반지름 ×${(100 + p) / 100}, 높이 ×${(100 - q) / 100}`], ['부피 배율', `(${(100 + p) / 100})² × ${(100 - q) / 100} = ${+F.v.toFixed(4)}`], ['결론', `<strong>${txt(pct)}</strong>`]],
  };
});

// ---------- Box from face areas ----------
add('boxfaces', 'Geometry', '직육면체: 세 면의 넓이', ['NE', 'MC', 'QC'], (r, fmt) => {
  let l, w, h; do { l = r.int(2, 9); w = r.int(2, 9); h = r.int(2, 9); } while (new Set([l, w, h]).size < 3);
  const A1 = l * w, A2 = w * h, A3 = l * h;
  const ask = fmt === 'MC' ? r.pick(['vol', 'diag']) : 'vol';
  if (ask === 'vol') return {
    ctx: `Three faces of a rectangular box that share a common vertex have areas ${A1}, ${A2}, and ${A3}.`,
    q: `Three faces of a rectangular box that share a common vertex have areas ${A1}, ${A2}, and ${A3}. What is the volume of the box?`,
    noun: 'The volume of the box', ans: l * w * h,
    distract: [{ val: A1 * A2 * A3, why: '세 넓이의 곱은 V²입니다. 제곱근을 취해야 합니다.' }, { val: 2 * (A1 + A2 + A3), why: '겉넓이를 구한 값입니다.' }, { val: A1 + A2 + A3, why: '세 넓이의 합입니다.' }, { val: l * w * h + l, why: '계산 실수 값입니다.' }],
    trap: { val: 2 * (A1 + A2 + A3), why: '겉넓이입니다.' },
    key: '(lw)(wh)(lh) = (lwh)² 입니다.',
    steps: [['세 넓이의 곱', `${A1} × ${A2} × ${A3} = ${fmtInt(A1 * A2 * A3)} = (lwh)²`], ['제곱근', `lwh = √${fmtInt(A1 * A2 * A3)} = <strong>${l * w * h}</strong>`], ['검산', `l, w, h = ${l}, ${w}, ${h}`]],
  };
  const d2 = l * l + w * w + h * h;
  const ans = { disp: sqrtDisp(d2), v: Math.sqrt(d2) };
  return {
    q: `Three faces of a rectangular box that share a common vertex have areas ${A1}, ${A2}, and ${A3}. What is the length of a diagonal of the box that joins two opposite vertices (that is, the longest line segment that fits inside the box)?`,
    ans, disp: ans.disp,
    distract: [{ val: { disp: sqrtDisp(A1 + A2 + A3), v: Math.sqrt(A1 + A2 + A3) }, why: '넓이의 합에 제곱근을 취한 값입니다.' }, { val: { disp: sqrtDisp(l * l + w * w), v: Math.sqrt(l * l + w * w) }, why: '한 면의 대각선입니다.' }, { val: { disp: fmtInt(l + w + h), v: l + w + h }, why: '세 모서리의 합입니다.' }, { val: { disp: sqrtDisp(2 * d2), v: Math.sqrt(2 * d2) }, why: '면 대각선 제곱들을 모두 더한 값입니다.' }],
    key: '세 넓이로 각 모서리를 구한 뒤 √(l² + w² + h²).',
    steps: [['모서리 구하기', `lwh = √(${A1}·${A2}·${A3}) = ${l * w * h} → l = ${l * w * h}/${A2} = ${l}, w = ${w}, h = ${h}`], ['공간 대각선', `√(${l}² + ${w}² + ${h}²) = √${d2} = <strong>${sqrtDisp(d2)}</strong>`]],
  };
});

// ---------- Regular polygon ----------
add('polygon', 'Geometry', '정다각형의 내각·외각', ['NE', 'QC', 'MC'], r => {
  const n = r.pick([5, 6, 8, 9, 10, 12, 15, 18, 20, 24]);
  const ext = 360 / n, int = 180 - ext;
  const v = r.pick(['diff', 'ratio']);
  const k = int / ext;
  const cond = v === 'diff' || !Number.isInteger(k) ? `each interior angle is ${int - ext}° greater than each exterior angle` : `each interior angle is ${k} times as large as each exterior angle`;
  const diag = n * (n - 3) / 2;
  return {
    ctx: `In a certain regular polygon, ${cond}.`,
    q: `In a certain regular polygon, ${cond}. How many diagonals does the polygon have?`,
    noun: 'The number of diagonals of the polygon', ans: diag,
    distract: [{ val: n * (n - 3), why: '각 대각선을 두 번 센 값입니다(2로 나눠야 함).' }, { val: n, why: '변의 개수입니다.' }, { val: C2(n), why: '꼭짓점 2개를 고르는 경우의 수로, 변까지 포함한 값입니다.' }, { val: (n - 1) * (n - 4) / 2, why: '변의 개수를 하나 적게 잡은 값입니다.' }],
    trap: { val: n * (n - 3), why: '대각선을 두 번 센 값입니다.' },
    key: '내각 + 외각 = 180°, 외각의 합 = 360°, 대각선 수 = n(n − 3)/2.',
    steps: [['외각 구하기', v === 'diff' || !Number.isInteger(k) ? `(180 − e) − e = ${int - ext} → e = ${ext}°` : `180 − e = ${k}e → e = ${ext}°`], ['변의 수', `n = 360/${ext} = ${n}`], ['대각선', `${n}(${n} − 3)/2 = <strong>${diag}</strong>`]],
  };
});
const C2 = n => n * (n - 1) / 2;

// ---------- Equilateral triangle & circle ----------
add('eqtri', 'Geometry', '정삼각형과 원 (내접·외접)', ['MC'], r => {
  const v = r.pick(['inscribedTri', 'circumTri']);
  const K = r.pick([4, 12, 16, 36, 48, 64]);
  if (v === 'inscribedTri') {
    const ans = expr([[new Frac(3 * K, 4), R3]]);
    return {
      q: `An equilateral triangle is inscribed in a circle that has area ${K}π. What is the area of the triangle?`,
      ans: { disp: ans, v: null }, disp: ans,
      distract: [{ val: { disp: expr([[new Frac(K, 4), R3]]) }, why: '한 변을 반지름과 같다고 본 값입니다.' }, { val: { disp: expr([[3 * K, R3]]) }, why: '원이 삼각형에 내접하는 경우(외접 삼각형)의 넓이입니다.' }, { val: { disp: expr([[new Frac(3 * K, 2), R3]]) }, why: '높이를 반지름 × 3으로 잡은 값입니다.' }, { val: { disp: expr([[new Frac(3 * K, 4), '']]) }, why: '√3을 빠뜨린 값입니다.' }],
      key: '정삼각형의 외접원 반지름 R = s/√3 → s = R√3, 넓이 = (√3/4)s².',
      steps: [['반지름', `πR² = ${K}π → R² = ${K}`], ['한 변', `s = R√3 → s² = 3R² = ${3 * K}`], ['넓이', `(√3/4) × ${3 * K} = <strong>${ans}</strong>`]],
    };
  }
  const ans = expr([[3 * K, R3]]);
  return {
    q: `A circle that has area ${K}π is inscribed in an equilateral triangle. What is the area of the triangle?`,
    ans: { disp: ans, v: null }, disp: ans,
    distract: [{ val: { disp: expr([[new Frac(3 * K, 4), R3]]) }, why: '삼각형이 원에 내접하는 경우의 넓이입니다.' }, { val: { disp: expr([[K, R3]]) }, why: '한 변을 2r로 본 값입니다.' }, { val: { disp: expr([[new Frac(3 * K, 2), R3]]) }, why: '높이를 2r로 잡은 값입니다.' }, { val: { disp: expr([[6 * K, R3]]) }, why: '넓이 공식에서 1/2을 빠뜨린 값입니다.' }],
    key: '정삼각형의 내접원 반지름 r = 높이의 1/3 → 높이 = 3r.',
    steps: [['반지름', `πr² = ${K}π → r² = ${K}`], ['높이와 변', `높이 = 3r, 한 변 s = 높이 × 2/√3 = 2√3 r → s² = 12r² = ${12 * K}`], ['넓이', `(√3/4) × ${12 * K} = <strong>${ans}</strong>`]],
  };
});

// ---------- Points inside a circle (MA) ----------
add('circpts', 'Geometry', '좌표평면: 원 내부의 점', ['MA'], r => {
  const h = r.int(-4, 4), k = r.int(-4, 4);
  const dx = r.int(1, 6), dy = r.int(0, 6); const R2 = dx * dx + dy * dy;
  const p0 = [h + dx, k + dy];
  const cands = [];
  for (let x = h - 8; x <= h + 8; x++) for (let y = k - 8; y <= k + 8; y++) { const d = (x - h) ** 2 + (y - k) ** 2; if (Math.abs(d - R2) <= 6 && !(x === p0[0] && y === p0[1])) cands.push([x, y, d]); }
  const inside = r.shuffle(cands.filter(c => c[2] < R2)); const outside = r.shuffle(cands.filter(c => c[2] >= R2));
  const nIn = Math.min(inside.length, r.int(2, 3));
  const pick = [...inside.slice(0, nIn), ...outside.slice(0, 6 - nIn)];
  const choices = pick.map(([x, y, d]) => ({ disp: `(${x}, ${y})`, ok: d < R2, why: `중심까지 거리의 제곱 = (${x} − ${h})² + (${y} − ${k})² = ${d} ${d < R2 ? '<' : d === R2 ? '=' : '>'} ${R2}${d === R2 ? ' → 원 위의 점이므로 내부가 아닙니다.' : d < R2 ? ' → 내부' : ' → 외부'}` }));
  return {
    kind: 'ma',
    q: `In the <i>xy</i>-plane, a circle has center (${h}, ${k}) and passes through the point (${p0[0]}, ${p0[1]}). Which of the following points lie in the interior of the circle?<br><br>Indicate <u>all</u> such points.`,
    choices,
    key: '거리를 직접 구하지 말고 거리의 제곱을 반지름의 제곱과 비교합니다. 원 위의 점은 내부가 아닙니다.',
    steps: [['반지름의 제곱', `(${p0[0]} − ${h})² + (${p0[1]} − ${k})² = ${R2}`], ['판정 기준', `(x − ${h})² + (y − ${k})² < ${R2}이면 내부`]],
  };
});

// ---------- Triangle area possibilities (MA) ----------
add('triarea', 'Geometry', '두 변이 주어진 삼각형의 넓이·둘레 범위', ['MA'], r => {
  const a = r.int(4, 10), b = r.int(5, 12);
  const v = r.pick(['area', 'perim']);
  let choices, steps, q;
  if (v === 'area') {
    const max = a * b / 2;
    const vals = [...new Set([max, max + 1, max + 0.5, max - 1, Math.round(max / 2), 1, max * 2, Math.round(max * 1.5)])].filter(x => x > 0);
    choices = r.sample(vals, 6).sort((p, q2) => p - q2).map(x => ({ disp: show(x), v: x, ok: x <= max, why: x <= max ? `${x} ≤ ${max}이므로 끼인각을 조절하면 가능합니다${x === max ? '(끼인각이 90°일 때 최대)' : ''}.` : `넓이의 최댓값 ${max}보다 큽니다.` }));
    q = `Two sides of a triangle have lengths ${a} and ${b}. Which of the following could be the area of the triangle?<br><br>Indicate <u>all</u> such values.`;
    steps = [['넓이 공식', `넓이 = (1/2)·${a}·${b}·sin θ`], ['범위', `0 < sin θ ≤ 1 → 0 < 넓이 ≤ ${max} (θ = 90°일 때 최대)`]];
  } else {
    const lo = a + b + Math.abs(a - b), hi = 2 * (a + b);
    const vals = [...new Set([lo, lo + 1, hi, hi - 1, Math.round((lo + hi) / 2), lo - 1, hi + 1])];
    choices = r.sample(vals, 6).sort((p, q2) => p - q2).map(x => ({ disp: show(x), v: x, ok: x > lo && x < hi, why: x > lo && x < hi ? `셋째 변 = ${x - a - b}가 (${Math.abs(a - b)}, ${a + b}) 범위 안이므로 가능합니다.` : `셋째 변 = ${x - a - b}가 되어 삼각형 부등식(${Math.abs(a - b)} < c < ${a + b})을 위반합니다.` }));
    q = `Two sides of a triangle have lengths ${a} and ${b}. Which of the following could be the perimeter of the triangle?<br><br>Indicate <u>all</u> such values.`;
    steps = [['셋째 변 범위', `${Math.abs(a - b)} < c < ${a + b}`], ['둘레 범위', `${lo} < 둘레 < ${hi} (등호 불가)`]];
  }
  return { kind: 'ma', sorted: true, q, choices, key: '두 변이 고정되면 넓이는 끼인각, 둘레는 셋째 변의 범위로 결정됩니다.', steps };
});

// ---------- Similar triangles (parallel line) ----------
add('similar', 'Geometry', '닮음: 평행선이 나누는 넓이', ['NE', 'MC', 'QC'], r => {
  let p, q; do { p = r.int(1, 5); q = r.int(1, 5); } while (gcd(p, q) !== 1);
  const small = p * p, big = (p + q) ** 2;
  const ans = new Frac(small, big - small);
  return {
    ctx: `In triangle ABC, point D lies on side AB and point E lies on side AC so that DE is parallel to BC. The ratio of AD to DB is ${p} to ${q}.`,
    q: `In triangle ABC, point D lies on side AB and point E lies on side AC so that DE is parallel to BC. If the ratio of AD to DB is ${p} to ${q}, what is the ratio of the area of triangle ADE to the area of quadrilateral DBCE?`,
    noun: 'The ratio of the area of triangle ADE to the area of quadrilateral DBCE', ans,
    distract: [{ val: new Frac(p, q), why: '길이의 비를 그대로 넓이의 비로 쓴 값입니다.' }, { val: new Frac(small, big), why: '삼각형 ADE와 삼각형 ABC 전체의 넓이 비입니다.' }, { val: new Frac(p * p, q * q), why: 'AD:DB를 제곱했지만 닮음비는 AD:AB입니다.' }, { val: new Frac(p, p + q), why: '닮음비(AD:AB)만 구한 값입니다.' }],
    trap: { val: new Frac(p * p, q * q), why: 'AD:DB를 제곱한 값입니다(닮음비는 AD:AB).' },
    key: '닮음비가 m:n이면 넓이비는 m²:n². 닮음비는 AD:AB = ' + p + ':' + (p + q) + '입니다.',
    steps: [['닮음비', `△ADE ∼ △ABC, AD : AB = ${p} : ${p + q}`], ['넓이비', `△ADE : △ABC = ${small} : ${big}`], ['사각형 부분', `△ADE : DBCE = ${small} : ${big - small} = <strong>${show(ans)}</strong>`]],
  };
});

// ---------- Square from diagonal endpoints ----------
add('sqdiag', 'Geometry', '좌표평면: 대각선 꼭짓점으로 정사각형 넓이', ['NE', 'QC', 'MC'], r => {
  const x1 = r.int(-6, 3), y1 = r.int(-6, 3), x2 = x1 + r.int(2, 8) * (r.chance(0.5) ? 1 : -1), y2 = y1 + r.int(2, 8);
  const d2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  const area = new Frac(d2, 2);
  return {
    ctx: `In the <i>xy</i>-plane, the points (${x1}, ${y1}) and (${x2}, ${y2}) are opposite vertices of a square.`,
    q: `In the <i>xy</i>-plane, the points (${x1}, ${y1}) and (${x2}, ${y2}) are opposite vertices of a square. What is the area of the square?`,
    noun: 'The area of the square', ans: area,
    distract: [{ val: d2, why: '대각선 길이의 제곱을 넓이로 쓴 값입니다(d²/2가 넓이).' }, { val: Math.abs((x2 - x1) * (y2 - y1)), why: '두 점을 꼭짓점으로 하는 축에 평행한 직사각형의 넓이입니다.' }, { val: new Frac(d2, 4), why: 'd²/4로 계산한 값입니다.' }, { val: area.add(1), why: '계산 실수 값입니다.' }],
    trap: { val: d2, why: '대각선의 제곱입니다.' },
    key: '정사각형 넓이 = (대각선)²/2.',
    steps: [['대각선의 제곱', `(${x2} − (${x1}))² + (${y2} − (${y1}))² = ${d2}`], ['넓이', `${d2}/2 = <strong>${show(area)}</strong>`]],
  };
});

module.exports = T;
