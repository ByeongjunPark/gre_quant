/* ============================================================
   GRE Quantitative Reasoning Mock Test — Exam Engine
   - ETS (PowerPrep) style UI: header, toolbar, Review / Mark / Hide Time
   - Question types: QC, MC (one answer), MA (one or more), NE (numeric entry), DI sets
   - On-screen calculator with order of operations + Transfer Display
   - Results: scorecard, 오답노트 filters, Korean step-by-step explanations
   ============================================================ */
(function () {
  const LETTERS = 'ABCDEFGHIJ'.split('');
  const TYPE_LABELS = { QC: 'Quantitative Comparison', MC: 'Multiple Choice (one answer)', MA: 'Multiple Choice (one or more)', NE: 'Numeric Entry' };
  const TYPE_SHORT = { QC: 'QC', MC: 'MC', MA: 'MA', NE: 'NE' };
  const AREA_KO = { Arithmetic: '산술', Algebra: '대수', Geometry: '기하', 'Data Analysis': '자료 분석' };
  const DIRECTIONS = {
    QC: 'Compare Quantity A and Quantity B, using additional information centered above the two quantities if such information is given. Select one of the four answer choices.',
    MC: 'Select one answer choice.',
    MA: 'Select <strong>one or more</strong> answer choices according to the specific question directions.',
    NE: 'Enter your answer in the answer box. Equivalent forms of the correct answer, such as 2.5 and 2.50, are all correct.',
    NEF: 'Enter your answer as a fraction. Fractions do not need to be reduced to lowest terms.',
  };

  let exam, EXP, state, timerId = null, timeHidden = false, calcOpen = false, uiFilter = 'all', typeFilter = 'all', expanded = new Set(), saved = null;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // ---------------- helpers ----------------
  const section = () => exam.sections[state.sectionIdx];
  const question = () => section().questions[state.questionIdx];
  const fmtTime = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  function parseNum(str) {
    if (str == null) return NaN;
    const s = String(str).replace(/,/g, '').replace(/−/g, '-').trim();
    if (!s || !/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
    return parseFloat(s);
  }
  function neUserValue(q, ans) {
    if (!ans || !ans.length) return NaN;
    if (q.ne.fraction) { const n = parseNum(ans[0]), d = parseNum(ans[1]); return d ? n / d : NaN; }
    return parseNum(ans[0]);
  }
  function isAnswered(q) {
    const a = state.answers[q.id];
    if (!Array.isArray(a) || !a.length) return false;
    if (q.type === 'NE') return q.ne.fraction ? (String(a[0] || '').trim() !== '' && String(a[1] || '').trim() !== '') : String(a[0] || '').trim() !== '';
    return true;
  }
  function isCorrect(q) {
    const a = state.answers[q.id];
    if (!isAnswered(q)) return false;
    if (q.type === 'NE') { const v = neUserValue(q, a); return isFinite(v) && Math.abs(v - q.ne.value) <= Math.max(q.ne.tol || 1e-9, 1e-9 * Math.max(1, Math.abs(q.ne.value))); }
    if (q.type === 'MA') return a.length === q.answer.length && a.every(x => q.answer.includes(x));
    return a[0] === q.answer[0];
  }
  function userDisplay(q) {
    const a = state.answers[q.id];
    if (!isAnswered(q)) return '미응답';
    if (q.type === 'NE') return esc(q.ne.fraction ? `${a[0]}/${a[1]}` : a[0]);
    return a.slice().sort().join(', ');
  }
  function correctDisplay(q) {
    if (q.type === 'NE') return `${q.ne.prefix || ''}${q.answer[0]}${q.ne.suffix || ''}`;
    return q.answer.join(', ');
  }

  // ---------------- timer ----------------
  function startTimer() {
    stopTimer();
    if (!state.timed) return;
    timerId = setInterval(() => {
      state.timeRemaining = Math.max(0, state.timeRemaining - 1);
      const el = $('#ets-timer-text');
      if (el) { el.textContent = fmtTime(state.timeRemaining); el.classList.toggle('warning', state.timeRemaining <= 300); }
      if (state.timeRemaining <= 0) { stopTimer(); modal({ title: 'Time Expired', body: `Section ${section().number}의 제한 시간이 끝났습니다. ${state.sectionIdx === 0 ? '다음 섹션으로 넘어갑니다.' : '시험이 종료됩니다.'}`, ok: 'Continue', onOk: finishSection, noCancel: true }); }
    }, 1000);
  }
  function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }

  // ---------------- modal ----------------
  function modal({ title, sub, body, ok = 'OK', cancel = 'Cancel', onOk, onCancel, noCancel, wide, danger }) {
    const el = document.createElement('div');
    el.className = 'ets-modal-overlay';
    el.innerHTML = `<div class="ets-review-dialog" style="max-width:${wide ? 720 : 520}px">
      <div class="ets-dialog-titlebar"><span>${title}</span><span>${sub || ''}</span></div>
      <div class="ets-help-content">${body}</div>
      <div class="ets-dialog-footer">${noCancel ? '' : `<button class="ets-btn" data-act="cancel">${cancel}</button>`}<button class="ets-btn ets-btn-primary" ${danger ? 'style="background:#b91c1c;border-color:#991b1b"' : ''} data-act="ok">${ok}</button></div></div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => {
      const act = e.target.dataset && e.target.dataset.act;
      if (!act) return;
      el.remove();
      if (act === 'ok' && onOk) onOk(); if (act === 'cancel' && onCancel) onCancel();
    });
    return el;
  }

  // ---------------- screens ----------------
  function render() {
    const app = $('#app');
    document.body.classList.add('ets-exam-mode');
    if (state.screen === 'start') return renderStart(app);
    if (state.screen === 'intro') return renderIntro(app);
    if (state.screen === 'question') return renderQuestion(app);
    if (state.screen === 'results') return renderResults(app);
  }

  function header(left, right) {
    return `<div class="ets-top-header"><div class="ets-header-info-bar"><div class="ets-header-title"><span class="brand-gre">GRE®</span><span>${left}</span></div><div>${right || ''}</div></div></div>`;
  }

  function renderStart(app) {
    document.title = `GRE Quant Mock Test ${exam.round}`;
    const tot = exam.sections.reduce((s, x) => s + x.questions.length, 0);
    const hist = window.QuantHistory ? window.QuantHistory.byRound(exam.round) : [];
    app.innerHTML = `${header('Quantitative Reasoning Practice Test', exam.round)}
    <div class="ets-exam-viewport q-center">
      <div class="ets-question-paper q-start">
        <div class="q-eyebrow">Computer-Delivered Testing Practice</div>
        <h1>GRE® Quantitative Reasoning<br>Practice Test ${esc(exam.round)}</h1>
        <p class="q-lead">2023년 9월 이후 시행 중인 단축형 GRE General Test의 Quant 규격(2개 섹션, 27문항)에 맞춘 고난도 모의고사입니다.</p>
        <div class="q-info">
          <div><span>구성</span><b>Section 1 (${exam.sections[0].questions.length}문항) + Section 2 (${exam.sections[1].questions.length}문항) = ${tot}문항</b></div>
          <div><span>시험 시간</span><b>총 ${exam.sections[0].timeLimit + exam.sections[1].timeLimit}분 (섹션 1: ${exam.sections[0].timeLimit}분 · 섹션 2: ${exam.sections[1].timeLimit}분)</b></div>
          <div><span>문항 유형</span><b>QC · 객관식(단일/복수) · Numeric Entry · Data Interpretation</b></div>
          <div><span>지원 도구</span><b>Calculator, Review, Mark, Hide Time</b></div>
          <div><span>시험 후 제공</span><b class="ok">내 오답이 틀린 이유 & 단계별 풀이 (한국어)</b></div>
          ${hist.length ? `<div><span>지난 응시</span><b>${hist.length}회 · 최근 ${hist[0].scoreRaw}/${hist[0].totalQuestions} (${new Date(hist[0].timestamp).toLocaleDateString()})</b></div>` : ''}
        </div>
        <div class="q-mode">
          <label><input type="radio" name="mode" value="timed" checked> 실전 모드 (시간 제한)</label>
          <label><input type="radio" name="mode" value="untimed"> 연습 모드 (시간 무제한)</label>
        </div>
        <button class="ets-btn ets-btn-primary q-big" id="btn-start">시험 시작 (Continue) →</button>
        <div class="q-back"><a href="index.html">← 모의고사 목록으로 돌아가기</a></div>
      </div>
    </div>`;
    $('#btn-start').onclick = () => { state.timed = $('input[name=mode]:checked').value === 'timed'; state.screen = 'intro'; render(); };
  }

  function renderIntro(app) {
    const s = section();
    app.innerHTML = `${header(`Section ${s.number} of ${exam.sections.length}`, state.timed ? `Time Limit: ${s.timeLimit} Minutes` : '연습 모드 (시간 무제한)')}
    <div class="ets-exam-viewport q-center"><div class="ets-question-paper q-start">
      <div class="q-eyebrow">Section ${s.number} of ${exam.sections.length}</div>
      <h1>Quantitative Reasoning</h1>
      <p class="q-lead"><b>${s.questions.length}개 문항</b>${state.timed ? ` · 제한 시간 <b>${s.timeLimit}분</b>` : ''}</p>
      <div class="q-info q-notes">
        <div>• 모든 수는 실수입니다. 별도 언급이 없으면 도형은 그려진 대로가 아닐 수 있습니다(축척 아님).</div>
        <div>• 좌표평면의 좌표계는 직교좌표계이고, 직선은 곧습니다.</div>
        <div>• 섹션을 마치면(Exit Section) 이 섹션으로 돌아올 수 없습니다.</div>
        <div>• 오답 감점이 없으므로 모든 문항에 답하세요.</div>
      </div>
      <button class="ets-btn ets-btn-primary q-big" id="btn-go">Section ${s.number} 시작 →</button>
    </div></div>`;
    $('#btn-go').onclick = () => { state.screen = 'question'; state.questionIdx = 0; state.timeRemaining = s.timeLimit * 60; render(); startTimer(); };
  }

  function diRange(q) {
    const qs = section().questions; const idx = qs.filter(x => x.diGroup === q.diGroup).map(x => qs.indexOf(x) + 1);
    return `${idx[0]} to ${idx[idx.length - 1]}`;
  }

  function choicesHtml(q) {
    const a = state.answers[q.id] || [];
    if (q.type === 'NE') {
      const pre = q.ne.prefix ? `<span class="ne-affix">${q.ne.prefix}</span>` : '', suf = q.ne.suffix ? `<span class="ne-affix">${q.ne.suffix}</span>` : '';
      if (q.ne.fraction) return `<div class="ne-wrap ne-frac">${pre}<div class="ne-fracbox"><input class="ne-input" data-i="0" inputmode="decimal" autocomplete="off" value="${esc(a[0] || '')}" aria-label="numerator"><div class="ne-bar"></div><input class="ne-input" data-i="1" inputmode="decimal" autocomplete="off" value="${esc(a[1] || '')}" aria-label="denominator"></div>${suf}</div>`;
      return `<div class="ne-wrap">${pre}<input class="ne-input" data-i="0" inputmode="decimal" autocomplete="off" value="${esc(a[0] || '')}" aria-label="answer">${suf}</div>`;
    }
    const multi = q.type === 'MA';
    return `<ul class="ets-choices-list ${q.type === 'QC' ? 'qc-choices' : ''}">${q.choices.map(c => {
      const on = a.includes(c.label);
      return `<li class="ets-choice-item ${on ? 'selected' : ''} ${multi ? 'is-multi' : ''}" data-val="${c.label}"><input type="${multi ? 'checkbox' : 'radio'}" class="ets-choice-input" name="ch" ${on ? 'checked' : ''} tabindex="-1"><div class="ets-choice-text">${q.type === 'QC' ? '' : `<strong>${c.label}.</strong> `}${c.text}</div></li>`;
    }).join('')}</ul>`;
  }

  function bodyHtml(q) {
    let dir = q.type === 'NE' && q.ne.fraction ? DIRECTIONS.NEF : (q.directions || DIRECTIONS[q.type]);
    if (q.type === 'MA') dir = DIRECTIONS.MA;
    if (q.type === 'QC') {
      return `<div class="ets-directions-banner">${dir}</div>
        ${q.stimulus ? `<div class="qc-info">${q.stimulus}</div>` : ''}
        <table class="qc-table"><thead><tr><th>Quantity A</th><th>Quantity B</th></tr></thead><tbody><tr><td>${q.qa}</td><td>${q.qb}</td></tr></tbody></table>
        ${choicesHtml(q)}`;
    }
    const diNote = q.diGroup ? `<div class="di-note">Questions ${diRange(q)} are based on the following data.</div>` : '';
    return `<div class="ets-directions-banner">${dir}</div>${diNote}
      ${q.diGroup ? `<div class="di-stim">${q.stimulus}</div>` : ''}
      <div class="ets-q-text q-stem">${q.questionText}</div>
      ${choicesHtml(q)}`;
  }

  function renderQuestion(app) {
    const s = section(), q = question();
    const isFirst = state.questionIdx === 0, isLast = state.questionIdx === s.questions.length - 1;
    app.innerHTML = `<div class="ets-top-header">
      <div class="ets-header-info-bar">
        <div class="ets-header-title"><span class="brand-gre">GRE®</span><span>Quantitative Reasoning — Section ${s.number} of ${exam.sections.length}</span></div>
        <div class="ets-header-qcount">Question ${state.questionIdx + 1} of ${s.questions.length}</div>
        <div class="ets-header-timer-wrap">${state.timed ? `<div class="ets-timer-display ${timeHidden ? 'hidden-time' : ''} ${state.timeRemaining <= 300 ? 'warning' : ''}" id="ets-timer-text">${fmtTime(state.timeRemaining)}</div><button class="ets-timer-btn" id="btn-time">${timeHidden ? 'Show Time' : 'Hide Time'}</button>` : '<span class="untimed">Untimed</span>'}</div>
      </div>
      <div class="ets-toolbar">
        <div class="ets-toolbar-group"><button class="ets-btn" id="btn-quit">Quit Test</button><button class="ets-btn" id="btn-exit">Exit Section</button></div>
        <div class="ets-toolbar-group">
          <button class="ets-btn" id="btn-review">Review</button>
          <label class="ets-mark-checkbox-label"><input type="checkbox" id="chk-mark" ${state.marked[q.id] ? 'checked' : ''}><span>Mark</span></label>
          <button class="ets-btn" id="btn-help">Help</button>
          <button class="ets-btn ${calcOpen ? 'active' : ''}" id="btn-calc">Calculator</button>
          <button class="ets-btn" id="btn-back" ${isFirst ? 'disabled' : ''}>← Back</button>
          <button class="ets-btn ets-btn-primary" id="btn-next">${isLast ? 'Exit Section →' : 'Next →'}</button>
        </div>
      </div>
    </div>
    <div class="ets-exam-viewport"><div class="ets-question-paper q-paper">${bodyHtml(q)}</div></div>`;
    bindQuestion(q);
    if (calcOpen) Calc.show();
  }

  function bindQuestion(q) {
    if ($('#btn-time')) $('#btn-time').onclick = () => { timeHidden = !timeHidden; $('#ets-timer-text').classList.toggle('hidden-time', timeHidden); $('#btn-time').textContent = timeHidden ? 'Show Time' : 'Hide Time'; };
    $('#chk-mark').onchange = e => { state.marked[q.id] = e.target.checked; };
    $('#btn-review').onclick = showReview;
    $('#btn-help').onclick = showHelp;
    $('#btn-calc').onclick = () => { calcOpen = !calcOpen; $('#btn-calc').classList.toggle('active', calcOpen); calcOpen ? Calc.show() : Calc.hide(); };
    $('#btn-quit').onclick = () => modal({ title: 'Quit Test', body: '시험을 종료하고 바로 결과(채점·해설)를 보시겠습니까? 남은 문항은 미응답으로 처리됩니다.', ok: 'Quit Test', danger: true, onOk: () => { stopTimer(); state.screen = 'results'; render(); } });
    $('#btn-exit').onclick = confirmExit;
    $('#btn-back').onclick = () => { if (state.questionIdx > 0) { state.questionIdx--; render(); } };
    $('#btn-next').onclick = () => { if (state.questionIdx < section().questions.length - 1) { state.questionIdx++; render(); } else confirmExit(); };
    $$('.ets-choice-item').forEach(li => li.addEventListener('click', () => {
      const v = li.dataset.val;
      if (q.type === 'MA') {
        let a = (state.answers[q.id] || []).slice();
        a = a.includes(v) ? a.filter(x => x !== v) : [...a, v];
        state.answers[q.id] = a; li.classList.toggle('selected'); li.querySelector('input').checked = a.includes(v);
      } else {
        state.answers[q.id] = [v];
        $$('.ets-choice-item').forEach(x => { x.classList.remove('selected'); x.querySelector('input').checked = false; });
        li.classList.add('selected'); li.querySelector('input').checked = true;
      }
    }));
    $$('.ne-input').forEach(inp => inp.addEventListener('input', () => {
      inp.value = inp.value.replace(/[^0-9.\-−,]/g, '').slice(0, 12);
      const a = (state.answers[q.id] || ['', '']).slice(); a[+inp.dataset.i] = inp.value; state.answers[q.id] = a;
    }));
  }

  function showReview() {
    const s = section();
    let sel = state.questionIdx;
    const el = document.createElement('div');
    el.className = 'ets-modal-overlay';
    el.innerHTML = `<div class="ets-review-dialog"><div class="ets-dialog-titlebar"><span>Review</span><span>Section ${s.number} of ${exam.sections.length}</span></div>
      <div class="ets-dialog-instructions">현재 섹션의 문항 목록입니다. 문항을 선택한 뒤 <strong>Go to Question</strong>을 누르거나 더블클릭하면 이동합니다.</div>
      <div class="ets-review-table-wrap"><table class="ets-review-table"><thead><tr><th>Number</th><th>Type</th><th>Status</th><th style="text-align:center">Marked</th></tr></thead><tbody>
      ${s.questions.map((q, i) => `<tr class="review-row ${i === state.questionIdx ? 'current-question-row selected-row' : ''}" data-i="${i}"><td style="font-weight:700;width:70px">${i + 1}</td><td>${TYPE_SHORT[q.type]}${q.diGroup ? ' (DI)' : ''}</td><td>${isAnswered(q) ? '<span style="color:#16a34a;font-weight:600">Answered</span>' : '<span style="color:#64748b">Not Answered</span>'}</td><td style="text-align:center">${state.marked[q.id] ? '<span style="color:#0284c7;font-weight:700">✓</span>' : ''}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="ets-dialog-footer"><button class="ets-btn" data-act="ret">Return</button><button class="ets-btn ets-btn-primary" data-act="go">Go to Question</button></div></div>`;
    document.body.appendChild(el);
    const go = () => { el.remove(); state.questionIdx = sel; render(); };
    $$('.review-row', el).forEach(row => {
      row.onclick = () => { sel = +row.dataset.i; $$('.review-row', el).forEach(r => r.classList.remove('selected-row')); row.classList.add('selected-row'); };
      row.ondblclick = () => { sel = +row.dataset.i; go(); };
    });
    $('[data-act=ret]', el).onclick = () => el.remove();
    $('[data-act=go]', el).onclick = go;
  }

  function showHelp() {
    modal({ title: 'Help', sub: 'Quantitative Reasoning', noCancel: true, ok: 'Close', wide: true, body: `
      <p><b>Quantitative Comparison</b>: Quantity A와 B를 비교합니다. 주어진 정보만으로 관계가 하나로 정해지지 않으면 (D)입니다.</p>
      <p><b>Multiple Choice — one answer</b>: 동그라미(○) 보기 중 하나를 고릅니다.</p>
      <p><b>Multiple Choice — one or more</b>: 네모(□) 보기 중 해당하는 것을 모두 고릅니다. 부분 점수는 없습니다.</p>
      <p><b>Numeric Entry</b>: 정수·소수는 한 칸에, 분수는 분자/분모 두 칸에 입력합니다. 음수는 − 기호를 붙입니다. 분수는 약분하지 않아도 됩니다.</p>
      <p><b>Calculator</b>: 연산 순서(괄호 → 곱셈·나눗셈 → 덧셈·뺄셈)를 따릅니다. Numeric Entry 문항에서는 <i>Transfer Display</i>로 계산 결과를 답칸에 옮길 수 있습니다.</p>
      <p><b>Review / Mark</b>: 섹션 안에서 문항 상태(응답·표시 여부)를 확인하고 바로 이동할 수 있습니다.</p>` });
  }

  function confirmExit() {
    const s = section(); const un = s.questions.filter(q => !isAnswered(q)).length;
    const last = state.sectionIdx === exam.sections.length - 1;
    modal({ title: 'Exit Section', sub: `Section ${s.number} of ${exam.sections.length}`, ok: last ? '시험 종료 및 채점' : 'Exit Section', cancel: 'Return to Section',
      body: `${un ? `<p style="color:#b91c1c;font-weight:600">미응답 문항이 ${un}개 있습니다.</p>` : ''}<p>이 섹션을 마치면 다시 돌아올 수 없습니다. ${last ? '시험을 종료하고 결과를 확인합니다.' : '다음 섹션으로 이동합니다.'}</p>`,
      onOk: finishSection });
  }

  function finishSection() {
    stopTimer();
    if (state.sectionIdx < exam.sections.length - 1) { state.sectionIdx++; state.questionIdx = 0; state.screen = 'intro'; }
    else state.screen = 'results';
    Calc.hide(); calcOpen = false;
    render();
  }

  // ---------------- results ----------------
  function stats() {
    const flat = []; exam.sections.forEach(s => s.questions.forEach((q, i) => flat.push({ q, s: s.number, n: i + 1, ok: isCorrect(q), answered: isAnswered(q) })));
    const raw = flat.filter(x => x.ok).length, total = flat.length;
    const bySec = exam.sections.map(s => ({ num: s.number, correct: s.questions.filter(isCorrect).length, total: s.questions.length }));
    const byType = {}, byArea = {};
    flat.forEach(x => { const t = x.q.type, a = x.q.area || 'Other'; (byType[t] = byType[t] || { correct: 0, total: 0 }).total++; (byArea[a] = byArea[a] || { correct: 0, total: 0 }).total++; if (x.ok) { byType[t].correct++; byArea[a].correct++; } });
    const scaled = Math.round(130 + 40 * raw / total);
    return { flat, raw, total, bySec, byType, byArea, scaled };
  }

  function renderResults(app) {
    stopTimer();
    const st = stats();
    if (!saved && window.QuantHistory) {
      const answers = {}; st.flat.forEach(x => { if (state.answers[x.q.id] && isAnswered(x.q)) answers[x.q.id] = state.answers[x.q.id]; });
      saved = window.QuantHistory.save({ round: exam.round, number: exam.number, scoreScaled: st.scaled, scoreRaw: st.raw, totalQuestions: st.total, accuracy: Math.round(st.raw / st.total * 100), sections: st.bySec, typeBreakdown: st.byType, areaBreakdown: st.byArea, timed: state.timed, htmlFile: location.pathname.split('/').pop(), answers });
      st.flat.forEach(x => { if (!x.ok) expanded.add(x.q.id); });
    }
    const prev = saved && saved.previous;
    const bar = (o) => { const p = o.total ? Math.round(o.correct / o.total * 100) : 0; return `<div class="q-bar"><div style="width:${p}%"></div></div><span class="q-bar-num">${o.correct}/${o.total}</span>`; };
    const list = st.flat.filter(x => (uiFilter === 'all' || (uiFilter === 'wrong' ? !x.ok : x.ok)) && (typeFilter === 'all' || x.q.type === typeFilter));
    app.innerHTML = `${header('Quantitative Reasoning — Score Report', exam.round)}
    <div class="q-results">
      <div class="q-score-card">
        <div class="q-score-main"><div class="q-score-label">추정 점수 (Estimated)</div><div class="q-score-num">${st.scaled}</div><div class="q-score-sub">원점수 ${st.raw} / ${st.total} · 정답률 ${Math.round(st.raw / st.total * 100)}%</div>
          ${prev ? `<div class="q-delta">${exam.round} 직전 응시(${prev.scoreRaw}/${prev.totalQuestions}) 대비 ${st.raw - prev.scoreRaw >= 0 ? '+' : ''}${st.raw - prev.scoreRaw}문항</div>` : ''}
          <div class="q-note">* 130–170 환산은 원점수 비례 추정치이며 ETS 공식 환산이 아닙니다.</div></div>
        <div class="q-score-grid">
          <div><h4>섹션별</h4>${st.bySec.map(s => `<div class="q-row"><span>Section ${s.num}</span>${bar(s)}</div>`).join('')}</div>
          <div><h4>유형별</h4>${['QC', 'MC', 'MA', 'NE'].filter(t => st.byType[t]).map(t => `<div class="q-row"><span>${TYPE_SHORT[t]}</span>${bar(st.byType[t])}</div>`).join('')}</div>
          <div><h4>영역별</h4>${['Arithmetic', 'Algebra', 'Geometry', 'Data Analysis'].filter(a => st.byArea[a]).map(a => `<div class="q-row"><span>${AREA_KO[a]}</span>${bar(st.byArea[a])}</div>`).join('')}</div>
        </div>
      </div>

      <div class="review-controls-bar q-controls">
        <div class="filter-group"><span class="filter-label">보기:</span>
          ${[['all', `전체 문항 (${st.total})`], ['wrong', `오답노트만 (${st.total - st.raw})`], ['correct', `맞힌 문항 (${st.raw})`]].map(([k, l]) => `<button class="filter-btn ${uiFilter === k ? 'active' : ''}" data-f="${k}">${l}</button>`).join('')}</div>
        <div class="filter-group"><span class="filter-label">유형:</span>
          ${[['all', '전체'], ['QC', 'QC'], ['MC', 'MC'], ['MA', 'MA'], ['NE', 'NE']].map(([k, l]) => `<button class="filter-btn ${typeFilter === k ? 'active' : ''}" data-t="${k}">${l}</button>`).join('')}</div>
        <div class="filter-group"><button class="filter-btn" id="btn-expand">모두 펼치기</button><button class="filter-btn" id="btn-collapse">모두 접기</button><button class="filter-btn" id="btn-print">🖨️ 인쇄/PDF</button><a class="filter-btn" href="index.html">목록으로</a><button class="filter-btn" id="btn-retry">다시 풀기</button></div>
      </div>

      <table class="results-table q-rtable"><thead><tr><th>#</th><th>유형</th><th>주제</th><th>내 답</th><th>정답</th><th></th></tr></thead><tbody>
      ${list.map((x, i) => {
        const prevS = i > 0 ? list[i - 1].s : null;
        const e = EXP[x.q.id] || {};
        return `${x.s !== prevS ? `<tr class="section-divider"><td colspan="6">Section ${x.s}</td></tr>` : ''}
        <tr class="q-rrow ${x.ok ? 'ok' : 'bad'}" data-id="${x.q.id}"><td>S${x.s}-Q${x.n}</td><td>${TYPE_SHORT[x.q.type]}${x.q.diGroup ? ' · DI' : ''}</td><td class="q-topic">${esc(e.topic || '')}</td>
          <td><span class="user-ans-tag ${!x.answered ? 'skipped' : x.ok ? 'correct' : 'wrong'}">${userDisplay(x.q)}</span></td><td><span class="correct-ans-tag">${correctDisplay(x.q)}</span></td>
          <td><button class="btn-expand-exp">${expanded.has(x.q.id) ? '해설 접기 ▲' : '해설 보기 ▼'}</button></td></tr>
        ${expanded.has(x.q.id) ? `<tr class="inline-exp-wrapper"><td colspan="6">${expCard(x)}</td></tr>` : ''}`;
      }).join('')}
      </tbody></table>
    </div>`;
    $$('[data-f]').forEach(b => b.onclick = () => { uiFilter = b.dataset.f; render(); });
    $$('[data-t]').forEach(b => b.onclick = () => { typeFilter = b.dataset.t; render(); });
    $$('.q-rrow').forEach(row => row.querySelector('.btn-expand-exp').onclick = () => { const id = row.dataset.id; expanded.has(id) ? expanded.delete(id) : expanded.add(id); render(); });
    $('#btn-expand').onclick = () => { list.forEach(x => expanded.add(x.q.id)); render(); };
    $('#btn-collapse').onclick = () => { expanded.clear(); render(); };
    $('#btn-print').onclick = () => window.print();
    $('#btn-retry').onclick = () => { if (confirm('같은 회차를 처음부터 다시 풀까요? (이번 기록은 저장되어 있습니다)')) location.reload(); };
  }

  function questionReplay(q) {
    if (q.type === 'QC') return `${q.stimulus ? `<div class="qc-info">${q.stimulus}</div>` : ''}<table class="qc-table"><thead><tr><th>Quantity A</th><th>Quantity B</th></tr></thead><tbody><tr><td>${q.qa}</td><td>${q.qb}</td></tr></tbody></table>`;
    return `${q.diGroup ? `<div class="di-stim">${q.stimulus}</div>` : ''}<div class="exp-q-text">${q.questionText}</div>`;
  }

  function expCard(x) {
    const q = x.q, e = EXP[q.id] || {};
    const ua = state.answers[q.id] || [];
    let fb;
    if (!x.answered) fb = `<div class="user-wrong-feedback-box skipped-box"><div class="feedback-title skipped-title">⚠️ 미응답 문항입니다</div><div class="feedback-body">GRE는 오답 감점이 없습니다. 시간이 부족하면 극단값 대입·어림·소거로라도 반드시 답을 표시하세요.</div></div>`;
    else if (x.ok) fb = `<div class="user-wrong-feedback-box correct-box"><div class="feedback-title correct-title">🎉 정답입니다! (선택: ${userDisplay(q)})</div><div class="feedback-body">아래 풀이와 내 풀이 과정을 비교해 더 빠른 길이 있었는지 확인해 보세요.</div></div>`;
    else {
      let why = '';
      if (q.type === 'NE') {
        const v = neUserValue(q, ua);
        const hit = (e.commonTraps || []).find(t => isFinite(v) && Math.abs(t.value - v) <= 1e-6 * Math.max(1, Math.abs(t.value)));
        why = hit ? `입력하신 <strong>${userDisplay(q)}</strong>은(는) 자주 나오는 함정 값입니다: ${hit.why}` : `입력하신 <strong>${userDisplay(q)}</strong>은(는) 정답 <strong>${correctDisplay(q)}</strong>과 다릅니다. 아래 단계별 풀이에서 어느 단계에서 갈라졌는지 확인하세요.${q.ne.fraction ? '' : ' (반올림 지시나 단위(%, $)도 다시 확인하세요.)'}`;
      } else if (q.type === 'MA') {
        const missing = q.answer.filter(l => !ua.includes(l)), extra = ua.filter(l => !q.answer.includes(l));
        why = `${missing.length ? `놓친 정답: <strong>${missing.join(', ')}</strong>. ` : ''}${extra.length ? `잘못 고른 보기: <strong>${extra.join(', ')}</strong> — ${extra.map(l => `[${l}] ${(e.whySelectedWrong || {})[l] || ''}`).join(' ')}` : ''}`;
      } else {
        why = `<strong>[${ua[0]}]</strong>: ${(e.whySelectedWrong || {})[ua[0]] || '정답과 다른 선택지입니다.'}`;
      }
      fb = `<div class="user-wrong-feedback-box"><div class="feedback-title wrong-title"><span class="feedback-trap-tag">오답 분석</span> 내가 고른 답 [${userDisplay(q)}]가 틀린 이유</div><div class="feedback-body">${why}</div></div>`;
    }
    const steps = (e.stepByStep || []).map(s => `<div class="logic-step-item"><span class="logic-step-badge">${s.step}</span><div class="logic-step-desc">${s.desc}</div></div>`).join('');
    const choices = (e.choicesAnalysis || []).map(c => {
      const mine = ua.includes(c.label);
      return `<div class="choice-analysis-item ${c.isCorrect ? 'is-correct-choice' : (mine ? 'is-user-wrong-choice' : '')}"><div class="choice-item-header"><div class="choice-item-label">(${c.label}) ${c.text}</div><div class="choice-tags">${c.isCorrect ? '<span class="choice-tag tag-correct">정답 ✓</span>' : ''}${mine ? '<span class="choice-tag tag-user">내 선택</span>' : ''}</div></div><div class="choice-item-analysis">${c.analysis}</div></div>`;
    }).join('');
    const traps = q.type === 'NE' && (e.commonTraps || []).length ? `<div class="exp-choices-box"><div class="exp-section-title">자주 나오는 오답 값 (Common Traps)</div><div class="choices-analysis-list">${e.commonTraps.map(t => `<div class="choice-analysis-item"><div class="choice-item-header"><div class="choice-item-label">${esc(t.display)}</div></div><div class="choice-item-analysis">${t.why}</div></div>`).join('')}</div></div>` : '';
    return `<div class="exp-card">
      <div class="exp-header"><div class="exp-header-left"><span class="exp-q-id">S${x.s}-Q${x.n}</span><span class="exp-q-type">${TYPE_LABELS[q.type]}</span><span class="q-area">${AREA_KO[q.area] || ''}</span></div>
        <div>${!x.answered ? '<span class="exp-status-pill skipped">미응답 ⊘</span>' : x.ok ? '<span class="exp-status-pill correct">정답 ✓</span>' : '<span class="exp-status-pill wrong">오답 ✗</span>'}</div></div>
      ${fb}
      <div class="exp-context-box"><div class="exp-context-label">문항 (Question)</div>${questionReplay(q)}<div class="q-correct-line">정답: <strong>${correctDisplay(q)}</strong></div></div>
      ${e.clue ? `<div class="q-key"><b>💡 핵심 아이디어</b> ${e.clue}</div>` : ''}
      ${steps ? `<div class="exp-logic-box"><div class="exp-section-title">정답 도출 과정 (Step-by-Step)</div><div class="logic-steps-list">${steps}</div></div>` : ''}
      ${choices ? `<div class="exp-choices-box"><div class="exp-section-title">선택지별 분석 (Choices Analysis)</div><div class="choices-analysis-list">${choices}</div></div>` : ''}
      ${traps}
    </div>`;
  }

  // ---------------- calculator ----------------
  const Calc = {
    el: null, expr: '', mem: 0, justEval: false,
    show() {
      if (!this.el) this.build();
      this.el.style.display = 'block';
      const q = state.screen === 'question' ? question() : null;
      $('#calc-transfer', this.el).disabled = !(q && q.type === 'NE');
    },
    hide() { if (this.el) this.el.style.display = 'none'; },
    build() {
      const el = document.createElement('div'); el.className = 'q-calc'; el.id = 'q-calc';
      const keys = [['MR', 'MC', 'M+', 'C'], ['(', ')', '√', '÷'], ['7', '8', '9', '×'], ['4', '5', '6', '−'], ['1', '2', '3', '+'], ['±', '0', '.', '=']];
      el.innerHTML = `<div class="q-calc-bar"><span>Calculator</span><button data-k="close" aria-label="close">✕</button></div>
        <div class="q-calc-disp"><div class="q-calc-mem" id="calc-mem"></div><div id="calc-expr" class="q-calc-expr"></div><div id="calc-out" class="q-calc-out">0</div></div>
        <div class="q-calc-keys">${keys.flat().map(k => `<button data-k="${k}" class="${/[0-9.]/.test(k) ? 'num' : k === '=' ? 'eq' : ''}">${k}</button>`).join('')}</div>
        <button id="calc-transfer" class="q-calc-transfer">Transfer Display</button>`;
      document.body.appendChild(el); this.el = el;
      el.addEventListener('click', e => { const k = e.target.dataset && e.target.dataset.k; if (k) this.press(k); });
      $('#calc-transfer', el).onclick = () => this.transfer();
      // drag
      const bar = $('.q-calc-bar', el); let dx = 0, dy = 0, drag = false;
      bar.addEventListener('pointerdown', e => { if (e.target.tagName === 'BUTTON') return; drag = true; dx = e.clientX - el.offsetLeft; dy = e.clientY - el.offsetTop; bar.setPointerCapture(e.pointerId); });
      bar.addEventListener('pointermove', e => { if (!drag) return; el.style.left = Math.max(0, e.clientX - dx) + 'px'; el.style.top = Math.max(0, e.clientY - dy) + 'px'; el.style.right = 'auto'; el.style.bottom = 'auto'; });
      bar.addEventListener('pointerup', () => { drag = false; });
      document.addEventListener('keydown', e => {
        if (!this.el || this.el.style.display === 'none' || (e.target && e.target.classList && e.target.classList.contains('ne-input'))) return;
        const map = { '*': '×', '/': '÷', '-': '−', Enter: '=', Escape: 'C', Backspace: 'BS' };
        const k = map[e.key] || e.key;
        if (/^[0-9.()+×÷−=C]$/.test(k) || k === 'BS') { e.preventDefault(); this.press(k); }
      });
      this.refresh();
    },
    value() { try { return this.evaluate(this.expr || '0'); } catch (e) { return NaN; } },
    press(k) {
      if (k === 'close') { calcOpen = false; this.hide(); const b = $('#btn-calc'); if (b) b.classList.remove('active'); return; }
      if (k === 'C') { this.expr = ''; this.out = '0'; }
      else if (k === 'BS') { this.expr = this.expr.slice(0, -1); }
      else if (k === '=') { const v = this.value(); this.out = this.fmt(v); this.expr = isFinite(v) ? this.fmt(v).replace(/,/g, '') : ''; this.justEval = true; this.refresh(true); return; }
      else if (k === 'MR') { this.append(this.fmt(this.mem).replace(/,/g, '')); }
      else if (k === 'MC') { this.mem = 0; }
      else if (k === 'M+') { const v = this.value(); if (isFinite(v)) this.mem += v; }
      else if (k === '±') { this.expr = this.expr ? `−(${this.expr})` : '−'; }
      else if (k === '√') { this.expr = this.expr ? `√(${this.expr})` : '√('; }
      else this.append(k);
      this.justEval = false;
      this.refresh();
    },
    append(k) { if (this.justEval && /[0-9.(√]/.test(k)) this.expr = ''; this.expr += k; },
    fmt(v) {
      if (!isFinite(v)) return 'Error';
      let s = Math.abs(v) >= 1e10 || (Math.abs(v) < 1e-7 && v !== 0) ? v.toExponential(6) : String(+v.toPrecision(10));
      return s.replace('-', '−');
    },
    refresh(evaluated) {
      if (!this.el) return;
      $('#calc-expr', this.el).textContent = evaluated ? '' : this.expr;
      const v = this.value();
      $('#calc-out', this.el).textContent = evaluated ? this.out : (this.expr && isFinite(v) ? this.fmt(v) : (this.expr ? '' : '0'));
      $('#calc-mem', this.el).textContent = this.mem ? 'M' : '';
    },
    transfer() {
      const q = question(); if (!q || q.type !== 'NE') return;
      const v = this.value(); if (!isFinite(v)) return;
      const s = String(+v.toPrecision(10));
      const a = (state.answers[q.id] || ['', '']).slice(); a[0] = s; state.answers[q.id] = a;
      const inp = $('.ne-input[data-i="0"]'); if (inp) inp.value = s;
    },
    // recursive-descent parser: expr := term (('+'|'−') term)* ; term := unary (('×'|'÷') unary)* ; unary := '−' unary | '√' unary | primary
    evaluate(src) {
      const s = src.replace(/\s/g, ''); let i = 0;
      const peek = () => s[i];
      const num = () => { const m = /^\d*\.?\d+|^\d+\.?/.exec(s.slice(i)); if (!m) throw new Error('syntax'); i += m[0].length; return parseFloat(m[0]); };
      const primary = () => { if (peek() === '(') { i++; const v = expr(); if (peek() === ')') i++; return v; } return num(); };
      const unary = () => { if (peek() === '−' || peek() === '-') { i++; return -unary(); } if (peek() === '√') { i++; const v = unary(); if (v < 0) throw new Error('domain'); return Math.sqrt(v); } return primary(); };
      const term = () => { let v = unary(); while (peek() === '×' || peek() === '÷') { const op = s[i++]; const w = unary(); v = op === '×' ? v * w : v / w; } return v; };
      const expr = () => { let v = term(); while (peek() === '+' || peek() === '−' || peek() === '-') { const op = s[i++]; const w = term(); v = op === '+' ? v + w : v - w; } return v; };
      const v = expr(); if (i < s.length) throw new Error('syntax'); return v;
    },
  };

  window.QuantExam = {
    boot(data, explanations) {
      exam = data; EXP = explanations || {};
      state = { screen: 'start', sectionIdx: 0, questionIdx: 0, answers: {}, marked: {}, timeRemaining: 0, timed: true };
      window.addEventListener('beforeunload', e => { if (state.screen === 'question') { e.preventDefault(); e.returnValue = ''; } });
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
    },
    _calc: Calc, _isCorrect: q => isCorrect(q),
  };
})();
