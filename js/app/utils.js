window.ESUR = window.ESUR || {};
window.ESUR.utils = {
  escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },
  fmt(value, digits = 2) {
    return Number(value).toFixed(digits);
  }
};
