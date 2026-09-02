window.ESUR = window.ESUR || {};
window.ESUR.hsr = window.ESUR.hsr || {};

const { escapeHtml } = window.ESUR.utils;

function renderAcuteList(items) {
    return `<ul>${(items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

window.ESUR.hsr.acute = {
  renderAcuteList
};
