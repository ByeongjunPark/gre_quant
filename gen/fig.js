'use strict';
// Minimal SVG figure builder for GRE-style geometry figures.
// Points are given in math coordinates (y up) and mapped into the SVG box.

const INK = '#1e293b', SHADE = '#cbd5e1';
const r2 = v => Math.round(v * 100) / 100;

class Fig {
  constructor({ w = 360, h = 250, box, pad = 30 }) {
    const [x0, y0, x1, y1] = box;
    this.w = w; this.h = h;
    this.s = Math.min((w - 2 * pad) / (x1 - x0), (h - 2 * pad) / (y1 - y0));
    this.ox = pad + ((w - 2 * pad) - (x1 - x0) * this.s) / 2 - x0 * this.s;
    this.oy = h - pad - ((h - 2 * pad) - (y1 - y0) * this.s) / 2 + y0 * this.s;
    this.parts = [];
  }
  P([x, y]) { return [r2(this.ox + x * this.s), r2(this.oy - y * this.s)]; }
  add(s) { this.parts.push(s); return this; }
  line(a, b, o = {}) { const [x1, y1] = this.P(a), [x2, y2] = this.P(b); return this.add(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${INK}" stroke-width="${o.width || 1.6}"${o.dash ? ' stroke-dasharray="5 4"' : ''}/>`); }
  poly(pts, o = {}) { return this.add(`<polygon points="${pts.map(p => this.P(p).join(',')).join(' ')}" fill="${o.fill || 'none'}" stroke="${o.stroke === false ? 'none' : INK}" stroke-width="1.6"/>`); }
  circle(c, r, o = {}) { const [x, y] = this.P(c); return this.add(`<circle cx="${x}" cy="${y}" r="${r2(r * this.s)}" fill="${o.fill || 'none'}" stroke="${o.stroke === false ? 'none' : INK}" stroke-width="1.6"/>`); }
  path(d, o = {}) { return this.add(`<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.stroke === false ? 'none' : INK}" stroke-width="1.6"${o.rule ? ` fill-rule="${o.rule}"` : ''}/>`); }
  // SVG arc command from current point to math point b with math radius r
  arcTo(b, r, large = 0, sweep = 0) { const [x, y] = this.P(b); return `A ${r2(r * this.s)} ${r2(r * this.s)} 0 ${large} ${sweep} ${x} ${y}`; }
  M(a) { const [x, y] = this.P(a); return `M ${x} ${y}`; }
  L(a) { const [x, y] = this.P(a); return `L ${x} ${y}`; }
  dot(p, r = 2.8) { const [x, y] = this.P(p); return this.add(`<circle cx="${x}" cy="${y}" r="${r}" fill="${INK}"/>`); }
  // text at math point with pixel offset
  text(p, t, o = {}) {
    const [x, y] = this.P(p);
    return this.add(`<text x="${r2(x + (o.dx || 0))}" y="${r2(y + (o.dy || 0))}" text-anchor="${o.anchor || 'middle'}" dominant-baseline="central" font-size="${o.size || 16}" fill="${INK}">${t}</text>`);
  }
  // label pushed away from point `from` by px pixels
  label(p, t, from, px = 14) {
    const [x, y] = this.P(p), [fx, fy] = this.P(from);
    let dx = x - fx, dy = y - fy; const L = Math.hypot(dx, dy) || 1;
    return this.add(`<text x="${r2(x + dx / L * px)}" y="${r2(y + dy / L * px)}" text-anchor="middle" dominant-baseline="central" font-size="16" fill="${INK}">${t}</text>`);
  }
  // label placed inside the angle a-v-b along the bisector, px pixels from v
  angleLabel(v, a, b, t, px = 26) {
    const [vx, vy] = this.P(v), [ax, ay] = this.P(a), [bx, by] = this.P(b);
    const u1 = norm([ax - vx, ay - vy]), u2 = norm([bx - vx, by - vy]);
    let m = norm([u1[0] + u2[0], u1[1] + u2[1]]);
    if (!isFinite(m[0])) m = [-u1[1], u1[0]];
    return this.add(`<text x="${r2(vx + m[0] * px)}" y="${r2(vy + m[1] * px)}" text-anchor="middle" dominant-baseline="central" font-size="15" fill="${INK}">${t}</text>`);
  }
  angleArc(v, a, b, px = 16) {
    const [vx, vy] = this.P(v), [ax, ay] = this.P(a), [bx, by] = this.P(b);
    const u1 = norm([ax - vx, ay - vy]), u2 = norm([bx - vx, by - vy]);
    const p1 = [vx + u1[0] * px, vy + u1[1] * px], p2 = [vx + u2[0] * px, vy + u2[1] * px];
    const cross = u1[0] * u2[1] - u1[1] * u2[0];
    return this.add(`<path d="M ${r2(p1[0])} ${r2(p1[1])} A ${px} ${px} 0 0 ${cross > 0 ? 1 : 0} ${r2(p2[0])} ${r2(p2[1])}" fill="none" stroke="${INK}" stroke-width="1.2"/>`);
  }
  rightMark(v, a, b, px = 10) {
    const [vx, vy] = this.P(v), [ax, ay] = this.P(a), [bx, by] = this.P(b);
    const u1 = norm([ax - vx, ay - vy]), u2 = norm([bx - vx, by - vy]);
    const p1 = [vx + u1[0] * px, vy + u1[1] * px], p3 = [vx + u2[0] * px, vy + u2[1] * px], p2 = [p1[0] + u2[0] * px, p1[1] + u2[1] * px];
    return this.add(`<polyline points="${[p1, p2, p3].map(p => p.map(r2).join(',')).join(' ')}" fill="none" stroke="${INK}" stroke-width="1.2"/>`);
  }
  // n tick marks across the midpoint of segment a-b
  tick(a, b, n = 1) {
    const [ax, ay] = this.P(a), [bx, by] = this.P(b);
    const u = norm([bx - ax, by - ay]), nrm = [-u[1], u[0]];
    const mx = (ax + bx) / 2, my = (ay + by) / 2;
    for (let i = 0; i < n; i++) {
      const off = (i - (n - 1) / 2) * 5;
      const cx = mx + u[0] * off, cy = my + u[1] * off;
      this.add(`<line x1="${r2(cx - nrm[0] * 6)}" y1="${r2(cy - nrm[1] * 6)}" x2="${r2(cx + nrm[0] * 6)}" y2="${r2(cy + nrm[1] * 6)}" stroke="${INK}" stroke-width="1.4"/>`);
    }
    return this;
  }
  axes(x0, x1, y0, y1, o = {}) {
    const ar = (a, b) => { const [ax, ay] = this.P(a), [bx, by] = this.P(b); this.add(`<line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="${INK}" stroke-width="1.2" marker-end="url(#arr)"/>`); };
    ar([x0, 0], [x1, 0]); ar([0, y0], [0, y1]);
    this.text([x1, 0], '<tspan font-style="italic">x</tspan>', { dx: 4, dy: -12 });
    this.text([0, y1], '<tspan font-style="italic">y</tspan>', { dx: 12, dy: 4 });
    this.text([0, 0], 'O', { dx: -10, dy: 11, size: 14 });
    if (o.ticks) for (let i = Math.ceil(x0); i <= Math.floor(x1 - 0.5); i++) if (i) { const [x, y] = this.P([i, 0]); this.add(`<line x1="${x}" y1="${y - 3}" x2="${x}" y2="${y + 3}" stroke="${INK}" stroke-width="1"/>`); }
    if (o.ticks) for (let i = Math.ceil(y0); i <= Math.floor(y1 - 0.5); i++) if (i) { const [x, y] = this.P([0, i]); this.add(`<line x1="${x - 3}" y1="${y}" x2="${x + 3}" y2="${y}" stroke="${INK}" stroke-width="1"/>`); }
    return this;
  }
  svg({ alt = 'figure', note = false } = {}) {
    return `<div class="fig"><svg viewBox="0 0 ${this.w} ${this.h}" width="${this.w}" role="img" aria-label="${alt}" xmlns="http://www.w3.org/2000/svg" font-family="'Times New Roman', Times, serif"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${INK}"/></marker></defs>${this.parts.join('')}</svg>${note ? '<div class="fig-note">Note: Figure not drawn to scale.</div>' : ''}</div>`;
  }
}
function norm([x, y]) { const L = Math.hypot(x, y); return [x / L, y / L]; }
const it = s => `<tspan font-style="italic">${s}</tspan>`;
const deg = (d) => [Math.cos(d * Math.PI / 180), Math.sin(d * Math.PI / 180)];
const bbox = (pts, m = 0) => { const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]); return [Math.min(...xs) - m, Math.min(...ys) - m, Math.max(...xs) + m, Math.max(...ys) + m]; };

module.exports = { Fig, it, deg, bbox, SHADE };
