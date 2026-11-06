'use strict';
// Data Interpretation sets: one shared table + 3 questions.
const { Frac, fmtInt, show, tableHtml, nice } = require('./lib');

function pctRound(x) { return Math.round(x); }

function diGrowth(r) {
  for (;;) {
    const cats = r.pick([['North', 'South', 'East', 'West', 'Central'], ['Apparel', 'Electronics', 'Furniture', 'Groceries', 'Toys'], ['Plant A', 'Plant B', 'Plant C', 'Plant D', 'Plant E']]);
    const y0 = r.int(2019, 2022), years = [y0, y0 + 1, y0 + 2];
    const data = cats.map(() => { const a = r.int(12, 95) * 10; const b = Math.round(a * (0.92 + r.next() * 0.4)); const c = Math.round(b * (0.92 + r.next() * 0.4)); return [a, b, c]; });
    const growth = data.map(d => (d[2] - d[0]) / d[0] * 100);
    const sortedG = [...growth].sort((a, b) => b - a);
    if (sortedG[0] - sortedG[1] < 3) continue;
    const best = growth.indexOf(sortedG[0]);
    const tot = years.map((_, j) => data.reduce((s, d) => s + d[j], 0));
    const [i1, i2] = r.sample([0, 1, 2, 3, 4], 2).sort();
    const share = (data[i1][2] + data[i2][2]) / tot[2] * 100;
    const frac = share - Math.floor(share);
    if (frac > 0.35 && frac < 0.65) continue;
    const shareUp = data.map((d, i) => d[2] / tot[2] > d[0] / tot[0]);
    const nUp = shareUp.filter(Boolean).length;
    if (nUp < 1 || nUp > 4) continue;
    const unit = r.pick(['thousands of units', 'millions of dollars']);
    const subject = unit === 'thousands of units' ? 'Unit sales' : 'Revenue';
    const tbl = tableHtml(['Category', ...years.map(String)], [...cats.map((c, i) => [c, ...data[i].map(fmtInt)]), ['<strong>Total</strong>', ...tot.map(t => `<strong>${fmtInt(t)}</strong>`)]], `${subject} by Category, ${years[0]}–${years[2]} (in ${unit})`);
    const stim = `<div class="di-label">Questions are based on the following data.</div>${tbl}`;
    const q1 = {
      ctx: stim,
      q: `For which category was the percent increase in ${subject.toLowerCase()} from ${years[0]} to ${years[2]} the greatest?`,
      ans: { disp: cats[best], v: null }, disp: cats[best], noSort: true,
      distract: cats.filter((_, i) => i !== best).map((c, i) => { const k = cats.indexOf(c); return { val: { disp: c }, why: `${c}의 증가율은 ${growth[k].toFixed(1)}%로 ${cats[best]}(${growth[best].toFixed(1)}%)보다 작습니다.${data[k][2] - data[k][0] > data[best][2] - data[best][0] ? ' 절대 증가량이 더 크다고 증가율이 큰 것은 아닙니다.' : ''}` }; }),
      key: '퍼센트 증가 = (나중 − 처음)/처음. 절대 증가량이 아니라 비율을 비교합니다.',
      steps: [['각 증가율', cats.map((c, i) => `${c}: (${data[i][2]} − ${data[i][0]})/${data[i][0]} ≈ ${growth[i].toFixed(1)}%`).join('<br>')], ['최댓값', `<strong>${cats[best]}</strong>`]],
    };
    const ansShare = pctRound(share);
    const q2 = {
      ctx: stim,
      q: `In ${years[2]}, the combined ${subject.toLowerCase()} for ${cats[i1]} and ${cats[i2]} was what percent of the total ${subject.toLowerCase()} for all five categories? (Round your answer to the nearest whole percent.)`,
      ans: ansShare, suffix: '%',
      distract: [{ val: pctRound((data[i1][0] + data[i2][0]) / tot[0] * 100), why: `${years[0]}년 자료로 계산한 값입니다.` }, { val: Math.floor(share) === ansShare ? ansShare + 1 : ansShare - 1, why: '반올림을 잘못한 값입니다.' }, { val: pctRound(data[i1][2] / tot[2] * 100), why: `${cats[i1]}만 계산한 값입니다.` }, { val: 40, why: '다섯 범주가 같다고 보고 2/5로 어림한 값입니다.' }],
      key: '부분 ÷ 전체 × 100. 해당 연도의 Total 행을 사용합니다.',
      steps: [['부분 합', `${data[i1][2]} + ${data[i2][2]} = ${data[i1][2] + data[i2][2]}`], ['비율', `${data[i1][2] + data[i2][2]} ÷ ${fmtInt(tot[2])} × 100 ≈ ${share.toFixed(2)}%`], ['반올림', `<strong>${ansShare}%</strong>`]],
    };
    const q3 = {
      kind: 'ma', ctx: stim, sorted: true,
      q: `For which of the following categories was the category's share of the total ${subject.toLowerCase()} greater in ${years[2]} than in ${years[0]}?<br><br>Indicate <u>all</u> such categories.`,
      choices: cats.map((c, i) => ({ disp: c, ok: shareUp[i], why: `${years[0]}: ${data[i][0]}/${fmtInt(tot[0])} ≈ ${(data[i][0] / tot[0] * 100).toFixed(1)}%, ${years[2]}: ${data[i][2]}/${fmtInt(tot[2])} ≈ ${(data[i][2] / tot[2] * 100).toFixed(1)}% → ${shareUp[i] ? '증가' : '증가하지 않음'}` })),
      key: '비중이 커지려면 그 범주의 증가율이 전체 증가율보다 커야 합니다.',
      steps: [['전체 증가율', `${fmtInt(tot[0])} → ${fmtInt(tot[2])}: ${((tot[2] - tot[0]) / tot[0] * 100).toFixed(1)}%`], ['판정', '각 범주의 증가율이 전체 증가율보다 큰지 비교합니다(위의 개별 계산 참고).']],
    };
    return { topic: 'Data Interpretation: 표 해석 (증가율·비중)', items: [q1, q2, q3] };
  }
}

function diBudget(r) {
  for (;;) {
    const cats = ['Housing', 'Food', 'Transportation', 'Health care', 'Entertainment', 'Other'];
    const mk = () => { const p = cats.map(() => r.int(4, 30)); const s = p.reduce((a, b) => a + b, 0); const q = p.map(x => Math.round(x * 100 / s)); q[0] += 100 - q.reduce((a, b) => a + b, 0); return q; };
    const p1 = mk();
    const p2 = p1.map(x => Math.max(2, x + r.int(-5, 5)));
    p2[0] += 100 - p2.reduce((a, b) => a + b, 0);
    if (p1.some(x => x <= 0) || p2.some(x => x <= 0)) continue;
    const T1 = r.int(40, 70) * 1000, T2 = T1 + r.int(-5, 12) * 1000;
    const amt1 = p1.map(p => T1 * p / 100), amt2 = p2.map(p => T2 * p / 100);
    const k = r.int(0, 5);
    const diff = amt2[k] - amt1[k];
    const ratio = amt2.map((a, i) => a / amt1[i]);
    if (ratio.some(x => Math.abs(x - 1.1) < 0.01 || Math.abs(x - 1) < 0.005)) continue;
    const up10 = ratio.map(x => x >= 1.1);
    const nUp10 = up10.filter(Boolean).length;
    if (nUp10 < 1 || nUp10 > 4) continue;
    const nInc = ratio.filter(x => x > 1).length;
    const y = r.int(2020, 2024);
    const tbl = tableHtml(['Category', `${y}`, `${y + 1}`], cats.map((c, i) => [c, `${p1[i]}%`, `${p2[i]}%`]), `Distribution of the Smith Family's Annual Spending`);
    const stim = `<div class="di-label">Questions are based on the following data.</div><p>The Smith family's total annual spending was $${fmtInt(T1)} in ${y} and $${fmtInt(T2)} in ${y + 1}.</p>${tbl}`;
    const q1 = {
      ctx: stim,
      q: `By how many dollars did the amount the Smith family spent on ${cats[k].toLowerCase()} change from ${y} to ${y + 1}? (Enter a negative number if the amount decreased.)`,
      ans: diff, allowNeg: true, prefix: '$',
      distract: [{ val: (p2[k] - p1[k]) * T1 / 100, why: '비율 차이에 처음 해의 총액만 곱한 값입니다. 해마다 총액이 다릅니다.' }, { val: (p2[k] - p1[k]) * T2 / 100, why: '비율 차이에 나중 해의 총액만 곱한 값입니다.' }, { val: amt2[k], why: `${y + 1}년의 지출액 자체입니다.` }, { val: -diff, why: '부호를 반대로 한 값입니다.' }],
      key: '비율 표는 각 해의 총액을 곱해 금액으로 바꾼 뒤 비교해야 합니다.',
      steps: [[`${y}`, `${fmtInt(T1)} × ${p1[k]}% = ${fmtInt(amt1[k])}`], [`${y + 1}`, `${fmtInt(T2)} × ${p2[k]}% = ${fmtInt(amt2[k])}`], ['차이', `<strong>${fmtInt(diff)}</strong>달러`]],
    };
    const q2 = {
      ctx: stim,
      q: `For how many of the six categories was the amount the Smith family spent greater in ${y + 1} than in ${y}?`,
      ans: nInc, intOnly: true,
      distract: [0, 1, 2, 3, 4, 5, 6].filter(v => v !== nInc).map(v => ({ val: v, why: v === p1.filter((x, i) => p2[i] > x).length ? '퍼센트만 비교한 개수입니다. 총액이 달라졌으므로 금액으로 비교해야 합니다.' : '금액 비교를 일부 잘못한 값입니다.' })),
      key: '금액 비교: p₂·T₂ > p₁·T₁ ⇔ p₂/p₁ > T₁/T₂.',
      steps: [['기준', `T₁/T₂ = ${fmtInt(T1)}/${fmtInt(T2)} ≈ ${(T1 / T2).toFixed(3)}`], ['각 범주', cats.map((c, i) => `${c}: ${fmtInt(amt1[i])} → ${fmtInt(amt2[i])}`).join('<br>')], ['개수', `<strong>${nInc}</strong>`]],
    };
    const q3 = {
      kind: 'ma', ctx: stim,
      q: `For which of the following categories was the amount spent in ${y + 1} at least 10 percent greater than the amount spent in ${y}?<br><br>Indicate <u>all</u> such categories.`,
      choices: cats.map((c, i) => ({ disp: c, ok: up10[i], why: `${fmtInt(amt1[i])} → ${fmtInt(amt2[i])} (${((ratio[i] - 1) * 100).toFixed(1)}% 변화)` })),
      key: '금액의 비 = (p₂/p₁) × (T₂/T₁). 이 값이 1.1 이상인지 확인합니다.',
      steps: [['총액 비', `T₂/T₁ = ${(T2 / T1).toFixed(4)}`], ['판정', '각 범주의 금액 비율이 1.1 이상인지 확인합니다(선택지별 분석 참고).']],
    };
    return { topic: 'Data Interpretation: 비율 표 → 금액 환산', items: [q1, q2, q3] };
  }
}

module.exports = { diGrowth, diBudget };
