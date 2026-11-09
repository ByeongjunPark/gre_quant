'use strict';
// Writes glossary.html (all GRE math terms grouped by category, with search)
const fs = require('fs');
const path = require('path');
const { GLOSSARY } = require('./glossary');

function writeGlossary(root, exampleCounts) {
  const cats = [...new Set(GLOSSARY.map(g => g.cat))];
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const sections = cats.map(c => `<section data-cat="${esc(c)}"><h2>${esc(c)}</h2><table><thead><tr><th>영어 표현</th><th>뜻</th><th class="n">등장</th></tr></thead><tbody>${GLOSSARY.filter(g => g.cat === c).map(g => `<tr data-q="${esc((g.w + ' ' + g.k).toLowerCase())}"><td class="w">${esc(g.w)}</td><td>${esc(g.k)}</td><td class="n">${exampleCounts[g.w] || 0}</td></tr>`).join('')}</tbody></table></section>`).join('');
  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GRE Quant 수학 용어집</title>
<style>
  :root { --bg:#f7f5f0; --ink:#0f172a; --soft:#475569; --line:#e2e8f0; --accent:#1c3d5a; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--ink); font-family: -apple-system, 'Segoe UI', 'Malgun Gothic', sans-serif; line-height: 1.6; }
  header { background: linear-gradient(135deg, #1c3d5a, #0f2537); color: #fff; padding: 36px 0 28px; }
  .wrap { max-width: 960px; margin: 0 auto; padding: 0 16px; }
  h1 { font-size: 28px; margin-bottom: 8px; } header p { opacity: .85; font-size: 14.5px; }
  header a { color: #bfdbfe; }
  .search { margin: 20px 0; position: sticky; top: 0; background: var(--bg); padding: 10px 0; z-index: 2; }
  .search input { width: 100%; font-size: 16px; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 8px; }
  section { background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 18px; margin-bottom: 18px; }
  h2 { font-size: 18px; margin-bottom: 10px; color: var(--accent); }
  table { width: 100%; border-collapse: collapse; font-size: 14.5px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--line); vertical-align: top; }
  th { color: var(--soft); font-size: 12.5px; background: #f8fafc; }
  td.w { font-family: 'Times New Roman', Georgia, serif; font-size: 16px; font-weight: 700; width: 38%; }
  .n { width: 60px; text-align: right; color: var(--soft); font-size: 12.5px; }
  footer { color: #94a3b8; font-size: 12.5px; padding: 20px 0 40px; }
  @media (max-width: 600px) { td.w { width: auto; } .n { display: none; } }
</style>
</head>
<body>
<header><div class="wrap"><h1>📖 GRE Quant 수학 용어집</h1><p>모의고사 문항에 나오는 영어 수학 표현과 뜻을 영역별로 정리했습니다. “등장”은 20회 모의고사 전체에서 그 표현이 나온 문항 수입니다. <a href="index.html">← 모의고사 목록</a></p></div></header>
<main class="wrap">
  <div class="search"><input id="q" type="search" placeholder="영어 또는 한글로 검색 (예: median, 반지름, remainder)" autocomplete="off"></div>
  ${sections}
</main>
<footer class="wrap">해설 화면의 “📖 이 문제의 수학 용어” 칸에는 각 문항에 나온 용어만 골라 보여 줍니다.</footer>
<script>
  const input = document.getElementById('q');
  input.addEventListener('input', () => {
    const v = input.value.trim().toLowerCase();
    document.querySelectorAll('tr[data-q]').forEach(tr => { tr.style.display = !v || tr.dataset.q.includes(v) ? '' : 'none'; });
    document.querySelectorAll('section').forEach(s => { s.style.display = [...s.querySelectorAll('tr[data-q]')].some(tr => tr.style.display !== 'none') ? '' : 'none'; });
  });
</script>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, 'glossary.html'), html);
}
module.exports = { writeGlossary };
