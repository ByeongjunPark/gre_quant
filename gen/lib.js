'use strict';
// Shared helpers for the GRE Quant item generator.

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class Rng {
  constructor(seed) { this.f = mulberry32(seed); }
  next() { return this.f(); }
  int(a, b) { return a + Math.floor(this.f() * (b - a + 1)); }
  pick(arr) { return arr[Math.floor(this.f() * arr.length)]; }
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(this.f() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  sample(arr, k) { return this.shuffle(arr).slice(0, k); }
  chance(p) { return this.f() < p; }
}

const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
const lcm = (a, b) => a / gcd(a, b) * b;

function fmtInt(n) {
  const neg = n < 0; n = Math.abs(n);
  const s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '−' : '') + s;
}

class Frac {
  constructor(n, d = 1) {
    if (!Number.isInteger(n) || !Number.isInteger(d)) throw new Error('Frac needs integers: ' + n + '/' + d);
    if (d === 0) throw new Error('division by zero');
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(n, d) || 1;
    this.n = n / g; this.d = d / g;
  }
  static of(x) { return x instanceof Frac ? x : new Frac(x, 1); }
  add(o) { o = Frac.of(o); return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); }
  sub(o) { o = Frac.of(o); return new Frac(this.n * o.d - o.n * this.d, this.d * o.d); }
  mul(o) { o = Frac.of(o); return new Frac(this.n * o.n, this.d * o.d); }
  div(o) { o = Frac.of(o); return new Frac(this.n * o.d, this.d * o.n); }
  neg() { return new Frac(-this.n, this.d); }
  get v() { return this.n / this.d; }
  isInt() { return this.d === 1; }
  eq(o) { o = Frac.of(o); return this.n === o.n && this.d === o.d; }
  cmp(o) { o = Frac.of(o); return Math.sign(this.n * o.d - o.n * this.d); }
  toString() { return this.d === 1 ? fmtInt(this.n) : `${fmtInt(this.n)}/${fmtInt(this.d)}`; }
}

function valOf(x) {
  if (x instanceof Frac) return x.v;
  if (typeof x === 'number') return x;
  if (x && typeof x === 'object' && 'v' in x) return x.v;
  return null;
}

function fmtDec(x) {
  if (Number.isInteger(x)) return fmtInt(x);
  let s = (+x.toFixed(6)).toString();
  if (s.startsWith('-')) s = '−' + s.slice(1);
  const [ip, fp] = s.replace('−', '').split('.');
  return (x < 0 ? '−' : '') + fmtInt(+ip) + (fp ? '.' + fp : '');
}

function show(x) {
  if (x instanceof Frac) return x.toString();
  if (typeof x === 'number') return fmtDec(x);
  if (x && typeof x === 'object' && 'disp' in x) return x.disp;
  return String(x);
}

// "nice" display for numbers that came out of floating point
function nice(v) {
  if (Math.abs(v - Math.round(v)) < 1e-9) return fmtInt(Math.round(v));
  for (let d = 2; d <= 128; d++) {
    const n = v * d;
    if (Math.abs(n - Math.round(n)) < 1e-9) return new Frac(Math.round(n), d).toString();
  }
  return fmtDec(+v.toFixed(3));
}

const sup = (b, e) => `${b}<sup>${e}</sup>`;
const C = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
const fact = n => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };

// terms: [coef, symbol] -> "3π − 9√3" ; coefficient may be Frac
function expr(terms) {
  let s = '';
  for (const [c0, sym] of terms) {
    const c = Frac.of(c0);
    if (c.n === 0) continue;
    const neg = c.n < 0;
    const a = neg ? c.neg() : c;
    let body;
    if (sym) body = (a.n === 1 ? '' : fmtInt(a.n)) + sym + (a.d === 1 ? '' : '/' + a.d);
    else body = a.toString();
    if (!s) s = (neg ? '−' : '') + body; else s += (neg ? ' − ' : ' + ') + body;
  }
  return s || '0';
}

// a*x + b with variable name; e.g. lin(2,'n',2) -> "2n + 2"
function lin(a, v, b) { return expr([[a, v], [b, '']]); }

function simplifySqrt(n) { // returns [k, m] with sqrt(n) = k*sqrt(m)
  let k = 1, m = n;
  for (let f = 2; f * f <= m; f++) while (m % (f * f) === 0) { m /= f * f; k *= f; }
  return [k, m];
}
function sqrtDisp(n) {
  const [k, m] = simplifySqrt(n);
  if (m === 1) return fmtInt(k);
  return (k === 1 ? '' : fmtInt(k)) + '√' + m;
}

function factorize(n) { const f = {}; let m = n; for (let p = 2; p * p <= m; p++) while (m % p === 0) { f[p] = (f[p] || 0) + 1; m /= p; } if (m > 1) f[m] = (f[m] || 0) + 1; return f; }
function factorDisp(n) {
  const f = factorize(n);
  return Object.keys(f).map(p => f[p] === 1 ? p : sup(p, f[p])).join(' × ');
}
function numDivisors(n) { return Object.values(factorize(n)).reduce((a, e) => a * (e + 1), 1); }

// decide QC relationship from list of [a, b] numeric pairs
function decide(pairs) {
  let gt = false, lt = false, eq = false;
  for (const [a, b] of pairs) {
    if (!isFinite(a) || !isFinite(b)) continue;
    const d = a - b;
    if (Math.abs(d) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b))) eq = true;
    else if (d > 0) gt = true; else lt = true;
  }
  if (gt && !lt && !eq) return 'A';
  if (lt && !gt && !eq) return 'B';
  if (eq && !gt && !lt) return 'C';
  return 'D';
}

function grid(lo, hi, n = 300) {
  const pts = [];
  for (let i = 0; i < n; i++) pts.push(lo + (hi - lo) * (i + 0.5) / n);
  pts.push(lo + (hi - lo) * 1e-4, hi - (hi - lo) * 1e-4);
  return pts;
}

const QC_CHOICES = [
  { label: 'A', text: 'Quantity A is greater.' },
  { label: 'B', text: 'Quantity B is greater.' },
  { label: 'C', text: 'The two quantities are equal.' },
  { label: 'D', text: 'The relationship cannot be determined from the information given.' },
];

const html = s => s; // marker for readability
const tableHtml = (head, rows, caption) =>
  `<table class="q-table">${caption ? `<caption>${caption}</caption>` : ''}<thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;

module.exports = { Rng, gcd, lcm, fmtInt, Frac, valOf, show, nice, fmtDec, sup, C, fact, expr, lin, simplifySqrt, sqrtDisp, factorize, factorDisp, numDivisors, decide, grid, QC_CHOICES, html, tableHtml };
