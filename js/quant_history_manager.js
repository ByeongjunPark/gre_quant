/* ============================================================
   GRE Quant Mock — Attempt History (localStorage)
   ============================================================ */
(function () {
  const KEY = 'gre_quant_history_v1';
  function read() {
    try { const raw = localStorage.getItem(KEY); const list = raw ? JSON.parse(raw) : []; return Array.isArray(list) ? list : []; } catch (e) { return []; }
  }
  function write(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); return true; } catch (e) { return false; } }

  window.QuantHistory = {
    getAll: read,
    save: function (record) {
      const list = read();
      const prev = list.filter(a => a.round === record.round).sort((a, b) => b.timestamp - a.timestamp)[0] || null;
      const rec = Object.assign({ id: 'q' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), timestamp: Date.now() }, record);
      list.push(rec);
      write(list);
      return { record: rec, previous: prev };
    },
    remove: function (id) { write(read().filter(a => a.id !== id)); },
    clear: function () { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } },
    export: function () { return JSON.stringify(read(), null, 2); },
    import: function (json) { const list = JSON.parse(json); if (!Array.isArray(list)) throw new Error('형식 오류'); write(list); },
    byRound: function (round) { return read().filter(a => a.round === round).sort((a, b) => b.timestamp - a.timestamp); },
  };
})();
