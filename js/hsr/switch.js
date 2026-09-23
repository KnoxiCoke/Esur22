window.ESUR = window.ESUR || {};
window.ESUR.hsr = window.ESUR.hsr || {};

window.ESUR.hsr.switch = {
  init({ state, t, escapeHtml, switchOutput, icmCard, gbcaCard }) {
    function renderSwitch() {
      if (!switchOutput) return;

      if (state.cmtype === "icm") {
        if (icmCard) icmCard.hidden = false;
        if (gbcaCard) gbcaCard.hidden = true;

        if (!state.icm) {
          switchOutput.innerHTML = `<div class="hint">${escapeHtml(t("switch_placeholder_icm"))}</div>`;
          return;
        }

        const rule = t("icm_rules")[state.icm];
        switchOutput.innerHTML = `
        <div><strong>${escapeHtml(rule.title)}</strong></div>
        <div style="margin-top:10px">${escapeHtml(rule.text)}</div>
        <div class="hint" style="margin-top:10px">${escapeHtml(rule.note)}</div>
      `;
        return;
      }

      if (icmCard) icmCard.hidden = true;
      if (gbcaCard) gbcaCard.hidden = false;

      if (!state.gbca) {
        switchOutput.innerHTML = `<div class="hint">${escapeHtml(t("switch_placeholder_gbca"))}</div>`;
        return;
      }

      const rule = t("gbca_rules")[state.gbca];
      switchOutput.innerHTML = `
      <div><strong>${escapeHtml(rule.title)}</strong></div>
      <div style="margin-top:10px">${escapeHtml(rule.text)}</div>
      <div class="hint" style="margin-top:10px">${escapeHtml(rule.note)}</div>
    `;
    }

    return { renderSwitch };
  }
};
