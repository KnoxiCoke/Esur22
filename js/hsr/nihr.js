window.ESUR = window.ESUR || {};
window.ESUR.hsr = window.ESUR.hsr || {};

(function () {
  const { escapeHtml } = window.ESUR.utils;

  function renderNihrList(items) {
      return `<ul>${(items || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`;
  }

  window.ESUR.hsr.nihr = {
    renderNihrList
  };
})();
