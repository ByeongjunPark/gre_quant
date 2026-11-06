'use strict';
const { Frac, gcd, lcm, fmtInt, show, sup, factorDisp, factorize, numDivisors, expr, nice } = require('./lib');
const T = [];
const add = (id, area, topic, formats, gen) => T.push({ id, area, topic, formats, gen });

// ---------- Remainders with two divisors ----------
add('remainder2', 'Arithmetic', '나머지 조건 2개 + 주기(LCM)', ['NE', 'QC', 'MC'], r => {
  let a, b, r1, r2, N, xs;
  for (let guard = 0; guard < 5000; guard++) {
    a = r.int(4, 10); b = r.int(6, 15); if (a >= b) continue;
    r1 = r.int(1, a - 1); r2 = r.int(1, b - 1); N = r.int(15, 45) * 10;
    xs = []; for (let n = 1; n <= N; n++) if (n % a === r1 && n % b === r2) xs.push(n);
    if (xs.length >= 3 && xs.length <= 20 && (gcd(a, b) > 1 || r.chance(0.35))) break;
  }
  const L = lcm(a, b), cnt = xs.length, n0 = xs[0], last = xs[cnt - 1];
  const desc = `have a remainder of ${r1} when divided by ${a} and a remainder of ${r2} when divided by ${b}`;
  const naive = Math.floor(N / (a * b));
  return {
    q: `How many positive integers less than or equal to ${fmtInt(N)} ${desc}?`,
    noun: `The number of positive integers less than or equal to ${fmtInt(N)} that ${desc}`,
    ans: cnt,
    trap: naive !== cnt ? { val: naive, why: `${fmtInt(N)}을 ${a}×${b} = ${a * b}로 나눈 몫입니다. 주기는 곱이 아니라 최소공배수 lcm(${a}, ${b}) = ${L}입니다.` } : { val: cnt + 1, why: '첫 항 또는 끝 항을 한 번 더 센 값입니다.' },
    distract: [
      { val: cnt + 1, why: '끝점 처리에서 하나를 더 센 값입니다.' },
      { val: cnt - 1, why: '첫 번째 해를 빼먹은 값입니다.' },
      { val: naive, why: `주기를 lcm(${a}, ${b}) = ${L} 대신 ${a * b}로 잡은 값입니다.` },
      { val: Math.floor(N / L) + 1, why: `${fmtInt(N)}/${L}을 단순 계산한 값으로, 첫 번째 해의 위치를 고려하지 않았습니다.` },
      { val: cnt + 2, why: '주기를 잘못 계산했을 때 나오는 값입니다.' },
    ],
    key: `두 나머지 조건을 동시에 만족하는 수는 lcm(${a}, ${b}) = ${L}마다 반복됩니다.`,
    steps: [
      ['첫 번째 해 찾기', `${a}로 나눈 나머지가 ${r1}인 수: ${r1}, ${r1 + a}, ${r1 + 2 * a}, … 중 ${b}로 나눈 나머지가 ${r2}인 가장 작은 수는 <strong>${n0}</strong>입니다.`],
      ['주기 파악', `두 조건은 lcm(${a}, ${b}) = <strong>${L}</strong>마다 반복되므로, 해는 ${n0}, ${n0 + L}, ${n0 + 2 * L}, … 입니다.`],
      ['개수 세기', `${fmtInt(N)} 이하의 마지막 해는 ${last}이므로 개수는 (${last} − ${n0})/${L} + 1 = <strong>${cnt}</strong>개입니다.`],
    ],
  };
});

// ---------- Divisors with a property ----------
add('divisors', 'Arithmetic', '약수의 개수 (조건부)', ['NE', 'MC', 'QC'], r => {
  const a = r.int(2, 5), b = r.int(1, 3), c = r.int(1, 2);
  const N = 2 ** a * 3 ** b * 5 ** c;
  const fac = `${sup(2, a)} × ${b === 1 ? 3 : sup(3, b)} × ${c === 1 ? 5 : sup(5, c)}`;
  const Nd = N <= 3000 ? fmtInt(N) : fac;
  const tau = (a + 1) * (b + 1) * (c + 1);
  const divs = []; for (let d = 1; d <= N; d++) if (N % d === 0) divs.push(d);
  const v = r.pick(['odd', 'mult', 'square']);
  let cnt, desc, steps, distract;
  const s1 = ['소인수분해', `${Nd === fac ? 'N' : fmtInt(N)} = ${fac}이고, 전체 약수의 개수는 (${a}+1)(${b}+1)(${c}+1) = ${tau}개입니다.`];
  if (v === 'odd') {
    cnt = divs.filter(d => d % 2).length; desc = 'are odd';
    steps = [s1, ['조건 해석', '홀수 약수는 소인수 2를 하나도 포함하지 않습니다. 즉 2의 지수가 0이어야 합니다.'],
      ['개수 계산', `3의 지수 ${b + 1}가지 × 5의 지수 ${c + 1}가지 = <strong>${cnt}</strong>개입니다.`]];
    distract = [{ val: tau - cnt, why: '짝수 약수의 개수입니다(전체 − 홀수).' }, { val: tau, why: '조건 없이 전체 약수의 개수를 센 값입니다.' }, { val: b * c, why: '지수에 1을 더하지 않고 곱한 값입니다.' }, { val: (b + 1) + (c + 1), why: '지수 경우의 수를 곱하지 않고 더한 값입니다.' }];
  } else if (v === 'mult') {
    const opts = [6, 10, 12, 15, 18, 20, 30, 60].filter(m => N % m === 0 && m < N);
    const m = r.pick(opts);
    cnt = divs.filter(d => d % m === 0).length; desc = `are multiples of ${m}`;
    steps = [s1, ['조건 해석', `${m}의 배수인 약수는 ${m}·k 꼴이며, 이때 k는 N/${m} = ${factorDisp(N / m)}의 약수여야 합니다.`],
      ['개수 계산', `N/${m}의 약수 개수 = <strong>${cnt}</strong>개입니다.`]];
    distract = [{ val: Math.floor(tau / 2), why: '전체 약수의 절반이라고 어림한 값입니다.' }, { val: tau, why: '조건 없이 전체 약수를 센 값입니다.' }, { val: numDivisors(m), why: `${m}의 약수 개수로, 묻는 것과 다릅니다.` }, { val: tau - cnt, why: `${m}의 배수가 아닌 약수의 개수입니다.` }];
  } else {
    cnt = divs.filter(d => Number.isInteger(Math.sqrt(d))).length; desc = 'are perfect squares';
    const ch = [Math.floor(a / 2) + 1, Math.floor(b / 2) + 1, Math.floor(c / 2) + 1];
    steps = [s1, ['조건 해석', '완전제곱수인 약수는 모든 소인수의 지수가 짝수여야 합니다.'],
      ['개수 계산', `2의 지수: 0, 2, … → ${ch[0]}가지, 3의 지수 → ${ch[1]}가지, 5의 지수 → ${ch[2]}가지. 곱하면 <strong>${cnt}</strong>개입니다.`]];
    distract = [{ val: Math.floor(a / 2) * Math.floor(b / 2) * Math.floor(c / 2), why: '지수 0(즉 소인수를 포함하지 않는 경우)을 빼먹은 값입니다.' }, { val: tau, why: '조건 없이 전체 약수를 센 값입니다.' }, { val: cnt + 1, why: '1을 중복해서 센 값입니다.' }, { val: ch[0] + ch[1] + ch[2], why: '경우의 수를 곱하지 않고 더했습니다.' }];
  }
  return {
    ctx: Nd === fac ? `N = ${fac}` : '',
    q: `How many positive divisors of ${Nd === fac ? 'N' : fmtInt(N)} ${desc}?`,
    noun: `The number of positive divisors of ${Nd === fac ? 'N' : fmtInt(N)} that ${desc}`,
    ans: cnt, distract, trap: distract[0],
    key: '약수의 개수는 소인수분해 후 각 지수의 선택지 개수를 곱해서 구합니다.',
    steps,
  };
});

// ---------- Greatest power dividing n! ----------
const vp = (n, p) => { let s = 0, q = p; while (q <= n) { s += Math.floor(n / q); q *= p; } return s; };
const legendre = (n, p) => { const t = []; let q = p; while (q <= n) { t.push(Math.floor(n / q)); q *= p; } return t; };
add('factpow', 'Arithmetic', '팩토리얼의 소인수 지수 (Legendre)', ['NE', 'QC', 'MC'], r => {
  const n = r.int(25, 90);
  const B = r.pick([2, 3, 5, 7, 6, 10, 12, 15, 18, 20, 45]);
  const f = factorize(B);
  const parts = Object.keys(f).map(p => { const s = vp(n, +p); return { p: +p, e: f[p], s, k: Math.floor(s / f[p]), t: legendre(n, +p) }; });
  const k = Math.min(...parts.map(x => x.k));
  const naive = Math.floor(n / B);
  const maxP = Math.max(...parts.map(x => x.p));
  const steps = parts.map(x => [`${n}!에 들어 있는 ${x.p}의 개수`, `⌊${n}/${x.p}⌋${x.t.length > 1 ? ' + ⌊' + n + '/' + x.p + '²⌋' : ''}${x.t.length > 2 ? ' + …' : ''} = ${x.t.join(' + ')} = <strong>${x.s}</strong>${x.e > 1 ? ` → ${x.p}<sup>${x.e}</sup> 묶음은 ⌊${x.s}/${x.e}⌋ = ${x.k}개` : ''}`]);
  if (parts.length > 1) steps.push(['병목 소인수 찾기', `${B} = ${factorDisp(B)}이므로 가능한 지수는 각 소인수 묶음 개수 중 최솟값 = <strong>${k}</strong>입니다.`]);
  return {
    q: `What is the greatest integer <i>k</i> such that ${sup(B, '<i>k</i>')} is a factor of ${n}!?`,
    noun: `The greatest integer <i>k</i> such that ${sup(B, '<i>k</i>')} is a factor of ${n}!`,
    qcCtx: '',
    ans: k,
    trap: naive !== k ? { val: naive, why: `${n}/${B}의 몫만 구한 값입니다. ${B}의 배수만이 아니라 모든 소인수의 개수를 세야 합니다.` } : { val: k + 1, why: '거듭제곱 항을 하나 더 센 값입니다.' },
    distract: [
      { val: naive, why: `⌊${n}/${B}⌋만 계산한 값입니다.` },
      { val: Math.floor(n / maxP), why: `${maxP}²·${maxP}³ 등 고차 거듭제곱의 기여를 빼먹은 값입니다.` },
      { val: k + 1, why: '나눗셈 몫을 올림한 값입니다.' },
      { val: Math.max(...parts.map(x => x.s)), why: '병목(최솟값)이 아니라 가장 많은 소인수 개수를 택한 값입니다.' },
      { val: k - 1, why: '고차 거듭제곱 항 하나를 빼먹은 값입니다.' },
    ],
    key: 'n!에 소수 p가 몇 번 들어 있는지는 ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + … 로 셉니다(Legendre 공식).',
    steps,
  };
});

// ---------- Units digit ----------
const cycle = a => { const c = []; let x = a % 10; for (let i = 0; i < 4; i++) { c.push(x); x = (x * a) % 10; } const p = c[0] === c[1] ? 1 : (c[0] === c[2] ? 2 : 4); return c.slice(0, p); };
const ud = (a, e) => { const c = cycle(a); return c[(e - 1) % c.length]; };
add('unitsdigit', 'Arithmetic', '일의 자리 주기', ['MC', 'NE'], r => {
  let a, b; do { a = r.pick([2, 3, 7, 8, 4, 9]); b = r.pick([2, 3, 7, 8, 4, 9]); } while (a === b);
  const e1 = r.int(23, 99), e2 = r.int(23, 99);
  const op = r.pick(['+', '×']);
  const u1 = ud(a, e1), u2 = ud(b, e2);
  const ans = op === '+' ? (u1 + u2) % 10 : (u1 * u2) % 10;
  const c1 = cycle(a), c2 = cycle(b);
  const wrong1 = c1[e1 % c1.length], wrong2 = c2[e2 % c2.length];
  const alt = op === '+' ? (wrong1 + wrong2) % 10 : (wrong1 * wrong2) % 10;
  const alt2 = op === '+' ? (u1 * u2) % 10 : (u1 + u2) % 10;
  return {
    q: `What is the units digit of ${sup(a, e1)} ${op} ${sup(b, e2)}?`,
    ans, intOnly: true,
    distract: [
      { val: alt, why: '주기에서 나머지를 한 칸 밀려서 대응시킨 값입니다(나머지 r → r번째 항).' },
      { val: alt2, why: `일의 자리끼리 ${op === '+' ? '곱한' : '더한'} 값입니다. 연산을 확인하세요.` },
      { val: u1, why: `${sup(a, e1)}의 일의 자리만 구한 값입니다.` },
      { val: u2, why: `${sup(b, e2)}의 일의 자리만 구한 값입니다.` },
      { val: (ans + 5) % 10, why: '주기 길이를 잘못 잡았을 때 나오는 값입니다.' },
      { val: (ans + 2) % 10, why: '주기 길이를 잘못 잡았을 때 나오는 값입니다.' },
    ],
    key: '거듭제곱의 일의 자리는 짧은 주기(길이 1, 2, 4)로 반복됩니다.',
    steps: [
      [`${a}의 거듭제곱`, `일의 자리 주기: ${c1.join(', ')} (길이 ${c1.length}). ${e1} = ${c1.length}×${Math.floor((e1 - 1) / c1.length)} + ${((e1 - 1) % c1.length) + 1}이므로 일의 자리는 <strong>${u1}</strong>입니다.`],
      [`${b}의 거듭제곱`, `일의 자리 주기: ${c2.join(', ')} (길이 ${c2.length}). ${e2}번째 → <strong>${u2}</strong>입니다.`],
      ['결합', `${u1} ${op} ${u2} = ${op === '+' ? u1 + u2 : u1 * u2} → 일의 자리 <strong>${ans}</strong>입니다.`],
    ],
  };
});

// ---------- Sum of multiples of k but not of j ----------
add('summult', 'Arithmetic', '등차수열 합 + 배수 제외', ['NE', 'MC'], r => {
  const k = r.pick([3, 4, 6, 7]); const m = r.pick([2, 3, 5]); const j = k * m;
  const lo = r.int(10, 60), hi = r.int(180, 400);
  const info = (d) => { const f = Math.ceil(lo / d) * d, l = Math.floor(hi / d) * d, c = (l - f) / d + 1; return { f, l, c, s: c * (f + l) / 2 }; };
  const A = info(k), B = info(j);
  const ans = A.s - B.s;
  return {
    q: `What is the sum of all the integers from ${lo} to ${hi}, inclusive, that are multiples of ${k} but are <u>not</u> multiples of ${j}?`,
    ans,
    distract: [
      { val: A.s, why: `${j}의 배수를 빼지 않은 값입니다.` },
      { val: A.s - B.s + j, why: `${j}의 배수 개수를 하나 적게 센 값입니다.` },
      { val: ans - k, why: '끝 항을 하나 빼먹은 값입니다.' },
      { val: A.s - 2 * B.s, why: `${j}의 배수를 두 번 뺀 값입니다.` },
    ],
    key: '합 = (k의 배수 합) − (j의 배수 합). 각 합은 (항수) × (첫항 + 끝항)/2 입니다.',
    steps: [
      [`${k}의 배수 합`, `첫 항 ${A.f}, 끝 항 ${A.l}, 항수 (${A.l} − ${A.f})/${k} + 1 = ${A.c} → 합 = ${A.c} × (${A.f} + ${A.l})/2 = ${fmtInt(A.s)}`],
      [`${j}의 배수 합 (모두 ${k}의 배수)`, `첫 항 ${B.f}, 끝 항 ${B.l}, 항수 ${B.c} → 합 = ${fmtInt(B.s)}`],
      ['차이', `${fmtInt(A.s)} − ${fmtInt(B.s)} = <strong>${fmtInt(ans)}</strong>`],
    ],
  };
});

// ---------- GCD / LCM (MA) ----------
add('gcdlcm', 'Arithmetic', '최대공약수·최소공배수 (가능한 값)', ['MA'], r => {
  const G = r.pick([2, 3, 4, 6]);
  const k = r.pick([60, 30, 24, 36, 42, 84, 90]);
  const L = G * k;
  const fac = []; for (let u = 1; u * u <= k; u++) if (k % u === 0) fac.push([u, k / u]);
  const good = fac.filter(([u, v]) => gcd(u, v) === 1);
  const bad = fac.filter(([u, v]) => gcd(u, v) !== 1);
  const goodSums = good.map(([u, v]) => ({ s: G * (u + v), u, v }));
  let items = goodSums.map(g => ({ disp: fmtInt(g.s), v: g.s, ok: true, why: `x = ${G * g.u}, y = ${G * g.v}일 때 GCD = ${G}, LCM = ${L}이므로 가능합니다.` }));
  const badSums = bad.map(([u, v]) => ({ s: G * (u + v), u, v })).filter(b => !goodSums.some(g => g.s === b.s));
  const badItems = badSums.map(b => ({ disp: fmtInt(b.s), v: b.s, ok: false, why: `x = ${G * b.u}, y = ${G * b.v}이면 곱은 맞지만 GCD가 ${G * gcd(b.u, b.v)}가 되어 조건에 어긋납니다.` }));
  const extra = [G * k, L + 1, G + k, 2 * G + k].filter(s => !goodSums.some(g => g.s === s) && !badSums.some(b => b.s === s))
    .map(s => ({ disp: fmtInt(s), v: s, ok: false, why: `x = ${G}a, y = ${G}b (a·b = ${k}, a와 b는 서로소)의 꼴로 표현되지 않는 합입니다.` }));
  const nGood = Math.min(items.length, r.int(2, 3));
  items = r.sample(items, nGood);
  const wrong = r.sample([...badItems, ...extra], Math.min(6 - nGood, badItems.length + extra.length));
  const choices = [...items, ...wrong].sort((a, b) => a.v - b.v);
  return {
    kind: 'ma', sorted: true,
    q: `<i>x</i> and <i>y</i> are positive integers. The greatest common divisor of <i>x</i> and <i>y</i> is ${G}, and the least common multiple of <i>x</i> and <i>y</i> is ${L}. Which of the following could be the value of <i>x</i> + <i>y</i>?<br><br>Indicate <u>all</u> such values.`,
    choices,
    key: `x = ${G}a, y = ${G}b로 두면 a·b = ${L}/${G} = ${k}이고 a, b는 서로소여야 합니다.`,
    steps: [
      ['구조화', `GCD가 ${G}이므로 x = ${G}a, y = ${G}b (a, b 서로소). LCM = ${G}ab = ${L} → ab = ${k}.`],
      ['서로소 쌍 나열', `ab = ${k}이고 gcd(a, b) = 1인 쌍: ${good.map(([u, v]) => `(${u}, ${v})`).join(', ')}`],
      ['가능한 합', `x + y = ${G}(a + b): ${goodSums.map(g => fmtInt(g.s)).join(', ')}`],
    ],
  };
});

// ---------- Repeating decimal digit ----------
add('repdec', 'Arithmetic', '순환소수의 n번째 자리', ['MC', 'NE'], r => {
  const q = r.pick([7, 13, 27, 37, 41, 21, 33]);
  let p; do { p = r.int(1, q - 1); } while (gcd(p, q) !== 1);
  // long division digits; all chosen q are coprime to 10 so purely periodic
  const digits = []; let rem = p; const seen = {};
  while (!(rem in seen)) { seen[rem] = digits.length; rem *= 10; digits.push(Math.floor(rem / q)); rem %= q; }
  const per = digits.length;
  const n = r.int(40, 160);
  const idx = (n - 1) % per;
  const ans = digits[idx];
  const block = digits.join('');
  return {
    q: `What is the ${n}${(n % 100 >= 11 && n % 100 <= 13) ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th')} digit to the right of the decimal point in the decimal equivalent of ${p}/${q}?`,
    ans, intOnly: true,
    distract: [
      { val: digits[n % per], why: `${n}을 주기 ${per}로 나눈 나머지를 한 칸 밀려서 대응시킨 값입니다.` },
      { val: digits[(n - 2 + per) % per], why: '나머지 대응을 반대 방향으로 한 칸 밀린 값입니다.' },
      { val: digits[0], why: '순환마디의 첫 자리입니다.' },
      { val: digits[per - 1], why: '순환마디의 마지막 자리입니다.' },
      ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => ({ val: d, why: '순환마디를 잘못 구했을 때 나오는 값입니다.' })),
    ],
    key: '분모가 10과 서로소인 분수는 순수 순환소수입니다. 순환마디 길이로 n을 나눈 나머지를 이용합니다.',
    steps: [
      ['순환마디 구하기', `${p}/${q} = 0.<span style="text-decoration:overline">${block}</span> (순환마디 길이 ${per})`],
      ['위치 계산', `${n} = ${per} × ${Math.floor((n - 1) / per)} + ${idx + 1}이므로 ${n}번째 자리는 순환마디의 ${idx + 1}번째 숫자입니다.`],
      ['답', `순환마디 ${block}의 ${idx + 1}번째 숫자 = <strong>${ans}</strong>`],
    ],
  };
});

// ---------- Consecutive spaced integers ----------
add('consec', 'Arithmetic', '연속 정수의 합과 평균', ['NE', 'MC', 'QC'], r => {
  const kind = r.pick([['odd', 2], ['even', 2], ['mult5', 5], ['mult3', 3]]);
  const [name, g] = kind;
  const k = r.int(7, 15);
  let f = r.int(-15, 35);
  if (name === 'odd' && f % 2 === 0) f += 1; if (name === 'even' && f % 2 !== 0) f += 1;
  if (name === 'mult5') f = Math.round(f / 5) * 5; if (name === 'mult3') f = Math.round(f / 3) * 3;
  const S = k * f + g * k * (k - 1) / 2;
  const largest = f + g * (k - 1);
  const mean = new Frac(S, k);
  const label = { odd: 'consecutive odd integers', even: 'consecutive even integers', mult5: 'consecutive multiples of 5', mult3: 'consecutive multiples of 3' }[name];
  const trapV = mean.add(g * (k - 1));
  return {
    ctx: `The sum of ${k} ${label} is ${fmtInt(S)}.`,
    q: `The sum of ${k} ${label} is ${fmtInt(S)}. What is the greatest of these integers?`,
    noun: 'The greatest of these integers', qcCtx: `The sum of ${k} ${label} is ${fmtInt(S)}.`,
    ans: largest, allowNeg: true,
    trap: trapV.isInt() ? { val: trapV, why: `평균에서 간격 ${g}×(${k}−1)을 통째로 더한 값입니다. 평균은 가운데 값이므로 절반만 더해야 합니다.` } : { val: largest + g, why: '항을 하나 더 센 값입니다.' },
    distract: [
      ...(trapV.isInt() ? [{ val: trapV, why: '평균에 전체 폭을 더한 값입니다(절반만 더해야 함).' }] : []),
      { val: largest - g, why: '두 번째로 큰 수입니다.' },
      { val: largest + g, why: '항을 하나 더 센 값입니다.' },
      ...(mean.isInt() ? [{ val: mean, why: '평균(가운데 값)입니다.' }] : []),
      { val: f, why: '가장 작은 수입니다.' },
    ],
    key: '등간격 수열의 평균 = 가운데 값 = 합 ÷ 항수, 그리고 가장 큰 수 = 평균 + 간격×(항수−1)/2입니다.',
    steps: [
      ['평균', `${fmtInt(S)} ÷ ${k} = ${show(mean)} (가운데 값)`],
      ['가장 큰 수', `평균에서 간격 ${g}로 (${k}−1)/2 칸 위: ${show(mean)} + ${g}×${k - 1}/2 = <strong>${fmtInt(largest)}</strong>`],
      ['검산', `수열: ${f}, ${f + g}, …, ${largest} (항수 ${k}).`],
    ],
  };
});

// ---------- n^2 divisible by K: what must divide n (MA) ----------
add('n2div', 'Arithmetic', '제곱수의 약수 조건 (반드시 참)', ['MA'], r => {
  const K = r.pick([72, 96, 200, 108, 180, 150, 48, 250, 120]);
  const f = factorize(K);
  let m = 1; for (const p in f) m *= (+p) ** Math.ceil(f[p] / 2);
  const cands = []; for (let d = 2; d <= K; d++) cands.push(d);
  const must = cands.filter(d => m % d === 0 && d > 1);
  const not = cands.filter(d => m % d !== 0 && (K % d === 0 || (m * 2) % d === 0));
  const goodPick = r.sample(must, Math.min(must.length, r.int(2, 3)));
  const badPick = r.sample(not, 6 - goodPick.length);
  const choices = [...goodPick.map(d => ({ disp: fmtInt(d), v: d, ok: true, why: `n은 반드시 ${m}의 배수이고 ${d}은(는) ${m}의 약수이므로 항상 n을 나눕니다.` })),
    ...badPick.map(d => ({ disp: fmtInt(d), v: d, ok: false, why: `n = ${m}이면 n² = ${fmtInt(m * m)}은 ${K}로 나누어떨어지지만 ${m}은(는) ${d}로 나누어떨어지지 않습니다.` }))].sort((a, b) => a.v - b.v);
  return {
    kind: 'ma', sorted: true,
    q: `<i>n</i> is a positive integer, and ${sup('<i>n</i>', 2)} is divisible by ${K}. Which of the following must be a divisor of <i>n</i>?<br><br>Indicate <u>all</u> such integers.`,
    choices,
    key: `n²의 소인수 지수는 모두 짝수입니다. n² ≥ ${K}의 각 소인수 지수를 만족하려면 n의 지수는 (필요 지수/2)를 올림한 값 이상이어야 합니다.`,
    steps: [
      ['소인수분해', `${K} = ${factorDisp(K)}`],
      ['n에 반드시 들어 있어야 할 인수', Object.keys(f).map(p => `${p}: n²에 ${p}<sup>${f[p]}</sup> 이상 → n에 ${p}<sup>${Math.ceil(f[p] / 2)}</sup> 이상`).join('<br>') + `<br>따라서 n은 반드시 <strong>${m}</strong>의 배수이고, 가장 작은 n은 ${m}입니다.`],
      ['판정 방법', `보기 중 ${m}의 약수인 것만 항상 n을 나눕니다. 나머지는 n = ${m}을 반례로 쓸 수 있습니다.`],
    ],
  };
});

// ---------- Remainder transfer (MA) ----------
add('remmod', 'Arithmetic', '나머지의 가능한 값', ['MA'], r => {
  let k, j, rr, set;
  for (;;) {
    k = r.pick([12, 15, 9, 14, 10, 18]); j = r.pick([8, 6, 4, 10, 12, 7]); if (j === k) continue;
    rr = r.int(1, k - 1);
    const kind = r.pick(['n', 'n2', '2n']);
    set = new Set(); const vals = {};
    for (let n = rr; n < rr + 50 * k; n += k) { const x = kind === 'n' ? n : kind === 'n2' ? n * n : 2 * n + 1; set.add(x % j); }
    if (set.size >= 1 && set.size <= 4) { r._kind = kind; break; }
  }
  const kind = r._kind;
  const exprTxt = kind === 'n' ? '<i>n</i>' : kind === 'n2' ? sup('<i>n</i>', 2) : '2<i>n</i> + 1';
  const g = gcd(k, j), L = lcm(k, j);
  const reps = []; for (let n = rr; reps.length < L / k; n += k) reps.push(n);
  const all = []; for (let v = 0; v < j; v++) all.push(v);
  const pickVals = r.sample(all, Math.min(j, 6)).sort((a, b) => a - b);
  if (!pickVals.some(v => set.has(v))) pickVals[0] = [...set][0];
  pickVals.sort((a, b) => a - b);
  const choices = [...new Set(pickVals)].map(v => ({
    disp: String(v), v, ok: set.has(v),
    why: set.has(v) ? (() => { const n = reps.find(n => (kind === 'n' ? n : kind === 'n2' ? n * n : 2 * n + 1) % j === v); return `n = ${n}일 때 ${kind === 'n' ? 'n' : kind === 'n2' ? 'n² = ' + n * n : '2n + 1 = ' + (2 * n + 1)}을 ${j}로 나누면 나머지가 ${v}입니다.`; })()
      : `n = ${rr} + ${k}m 꼴의 모든 수를 대입해도 나머지 ${v}는 나오지 않습니다(주기 ${L} 안에서 확인).`,
  }));
  return {
    kind: 'ma', sorted: true,
    q: `When the positive integer <i>n</i> is divided by ${k}, the remainder is ${rr}. Which of the following could be the remainder when ${exprTxt} is divided by ${j}?<br><br>Indicate <u>all</u> such remainders.`,
    choices,
    key: `n = ${k}m + ${rr} 꼴입니다. ${j}로 나눈 나머지는 lcm(${k}, ${j}) = ${L} 주기로 반복되므로 한 주기만 확인하면 됩니다.`,
    steps: [
      ['n의 형태', `n = ${rr}, ${rr + k}, ${rr + 2 * k}, … (한 주기 안의 후보: ${reps.join(', ')})`],
      ['각 후보 계산', reps.map(n => { const x = kind === 'n' ? n : kind === 'n2' ? n * n : 2 * n + 1; return `${kind === 'n' ? 'n' : kind === 'n2' ? n + '²' : '2·' + n + ' + 1'} = ${x} → 나머지 ${x % j}`; }).join('<br>')],
      ['가능한 나머지', `{ ${[...set].sort((a, b) => a - b).join(', ')} }`],
    ],
  };
});

// ---------- Digit counting ----------
add('digits', 'Arithmetic', '자릿수 조건 세기', ['NE', 'MC', 'QC'], r => {
  const v = r.pick(['inc', 'atleast7', 'odddistinct', 'exactly5', 'sumdig']);
  let lo = 100, hi = 999, test, desc, steps, distract;
  const digs = n => String(n).split('').map(Number);
  if (v === 'inc') { test = n => { const d = digs(n); return d[0] < d[1] && d[1] < d[2]; }; desc = 'whose digits are in strictly increasing order from left to right (for example, 258)';
    steps = [['핵심 관찰', '세 자리가 서로 다르고 증가하면, 숫자 3개를 고르기만 하면 순서는 하나로 정해집니다.'], ['0의 처리', '0이 포함되면 맨 앞에 와야 하므로 불가 → 1~9에서 3개 선택'], ['계산', 'C(9, 3) = <strong>84</strong>']];
    distract = [{ val: 120, why: '0을 포함해 C(10, 3)으로 센 값입니다.' }, { val: 504, why: '순서까지 고려해 9×8×7로 센 값입니다.' }, { val: 168, why: '증가·감소 두 방향을 모두 센 값입니다.' }, { val: 36, why: '두 자리만 고른 C(9,2)입니다.' }]; }
  else if (v === 'atleast7') { test = n => digs(n).includes(7); desc = 'that have at least one digit equal to 7';
    steps = [['여사건', '“적어도 하나”는 전체에서 “7이 하나도 없는 경우”를 뺍니다.'], ['7이 없는 세 자리 수', '백의 자리 8가지(1~9 중 7 제외) × 십 9가지 × 일 9가지 = 648'], ['계산', '900 − 648 = <strong>252</strong>']];
    distract = [{ val: 271, why: '3 × 9 × 9 + … 식으로 위치별로 더해 중복을 센 값입니다.' }, { val: 243, why: '전체를 1000개로 보고 1000 − 9³로 계산한 값의 근사입니다.' }, { val: 225, why: '7이 정확히 한 번인 경우만 센 값입니다.' }, { val: 300, why: '각 자리에 7이 올 확률을 단순히 더해 900×(1/3)로 계산한 값입니다.' }]; }
  else if (v === 'odddistinct') { test = n => { const d = digs(n); return n % 2 === 1 && new Set(d).size === 3; }; desc = 'that are odd and have three different digits';
    steps = [['제약이 큰 자리부터', '일의 자리(홀수) 5가지를 먼저 정합니다.'], ['백의 자리', '0과 일의 자리 숫자 제외 → 8가지'], ['십의 자리', '나머지 10 − 2 = 8가지 → 5 × 8 × 8 = <strong>320</strong>']];
    distract = [{ val: 360, why: '백의 자리에서 일의 자리와의 중복을 빼지 않은 값입니다.' }, { val: 450, why: '서로 다른 숫자 조건을 무시한 홀수 개수입니다.' }, { val: 280, why: '십의 자리에서 선택지를 7개로 센 값입니다.' }, { val: 648, why: '서로 다른 숫자 조건만 적용한 전체 개수입니다.' }]; }
  else if (v === 'exactly5') { test = n => digs(n).filter(d => d === 5).length === 1; desc = 'that have exactly one digit equal to 5';
    steps = [['백의 자리가 5', '십·일의 자리는 5 이외 9가지씩 → 81'], ['십 또는 일의 자리가 5', '백의 자리는 0과 5 제외 8가지, 나머지 한 자리 9가지 → 72 + 72'], ['합', '81 + 72 + 72 = <strong>225</strong>']];
    distract = [{ val: 243, why: '세 위치 모두 81로 계산해 백의 자리 0 제약을 빠뜨린 값입니다.' }, { val: 252, why: '“적어도 하나”의 개수입니다.' }, { val: 216, why: '백의 자리가 5인 경우도 8×9로 센 값입니다.' }, { val: 280, why: '중복 처리 오류 값입니다.' }]; }
  else { const s = r.int(5, 9); test = n => digs(n).reduce((a, b) => a + b, 0) === s; desc = `whose digits have a sum of ${s}`;
    const c = C(s + 1, 2);
    steps = [['변수 설정', `백의 자리 a ≥ 1, 십 b, 일 c ≥ 0, a + b + c = ${s}`], ['치환', `a' = a − 1 ≥ 0 → a' + b + c = ${s - 1}`], ['중복조합', `C(${s - 1} + 2, 2) = <strong>${c}</strong> (모든 값이 9 이하이므로 추가 제외 없음)`]];
    distract = [{ val: C(s + 2, 2), why: '백의 자리가 0인 경우까지 포함한 값입니다.' }, { val: c - s, why: '경계를 잘못 처리한 값입니다.' }, { val: s * 3, why: '단순 곱으로 어림한 값입니다.' }, { val: c + 1, why: '하나를 더 센 값입니다.' }]; }
  let cnt = 0; for (let n = lo; n <= hi; n++) if (test(n)) cnt++;
  return {
    q: `How many three-digit positive integers are there ${desc}?`,
    noun: `The number of three-digit positive integers ${desc}`,
    ans: cnt, distract, trap: distract[0],
    key: '제약이 가장 강한 자리부터 경우의 수를 정하고, “적어도 하나”는 여사건으로 계산합니다.',
    steps,
  };
});
const { C } = require('./lib');

// ---------- Exponent comparison (QC) ----------
add('qc_expo', 'Arithmetic', '거듭제곱 비교 (지수법칙)', ['QC'], r => {
  const s = r.pick([2, 3]);
  const a = r.int(12, 40);
  const vA = r.pick(['sum', 'diff']);
  const big = BigInt;
  let Adisp, Aval, Atxt;
  if (vA === 'sum') { Adisp = Array(s).fill(sup(s, a)).join(' + '); Aval = big(s) ** big(a + 1); Atxt = `${s}개의 ${s}<sup>${a}</sup>을 더하면 ${s}·${s}<sup>${a}</sup> = ${s}<sup>${a + 1}</sup>`; }
  else { Adisp = `${sup(s, a + 1)} − ${sup(s, a)}`; Aval = big(s) ** big(a + 1) - big(s) ** big(a); Atxt = `${s}<sup>${a}</sup>(${s} − 1) = ${s === 2 ? `2<sup>${a}</sup>` : `2·3<sup>${a}</sup>`}`; }
  const t = r.pick([2, 3]);
  const q = s ** t;
  const cands = [a - 1, a, a + 1, a + 2].filter(e => e % t === 0);
  const e = r.pick(cands);
  const bExp = e / t;
  const vB = r.chance(0.7) ? 'pow' : 'two';
  let Bdisp, Bval, Btxt;
  if (vB === 'pow') { Bdisp = sup(q, bExp); Bval = big(q) ** big(bExp); Btxt = `${q}<sup>${bExp}</sup> = (${s}<sup>${t}</sup>)<sup>${bExp}</sup> = ${s}<sup>${e}</sup>`; }
  else { Bdisp = `${sup(s, a)} + ${sup(s, a)}`; Bval = 2n * big(s) ** big(a); Btxt = `2·${s}<sup>${a}</sup>`; }
  const ans = Aval > Bval ? 'A' : Aval < Bval ? 'B' : 'C';
  return {
    kind: 'qc', ctx: '', A: Adisp, B: Bdisp, ans,
    key: '같은 밑으로 통일한 뒤 지수를 비교합니다. 같은 수를 여러 번 더하는 것은 곱셈입니다.',
    steps: [['Quantity A 정리', Atxt], ['Quantity B 정리', Btxt], ['비교', `${s}<sup>${a}</sup>을 공통 인수로 보면 비교가 쉬워집니다.`]],
  };
});

module.exports = T;
