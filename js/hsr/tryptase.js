window.ESUR = window.ESUR || {};
window.ESUR.hsr = window.ESUR.hsr || {};

window.ESUR.hsr.tryptase = {
  init({ t, escapeHtml, fmt, tryptaseOutput }) {
    function renderTryptase() {
      if (!tryptaseOutput) return;
      if (!tryptaseOutput.dataset.ready) {
        tryptaseOutput.innerHTML = `
        <div class="hint">${escapeHtml(t("tryptase_default"))}</div>
        <div class="hint" style="margin-top:10px">${escapeHtml(t("tryptase_formula"))}</div>
      `;
      }
    }

    function calcTryptase() {
      if (!tryptaseOutput) return;

      const baselineRaw = document.getElementById("baseline")?.value?.trim() ?? "";
      const acuteRaw = document.getElementById("acute")?.value?.trim() ?? "";

      if (baselineRaw === "" || acuteRaw === "") {
        tryptaseOutput.innerHTML = `<div class="hint">${escapeHtml(t("tryptase_invalid"))}</div>`;
        return;
      }

      const baseline = Number(baselineRaw);
      const acute = Number(acuteRaw);

      if (!Number.isFinite(baseline) || !Number.isFinite(acute) || baseline < 0 || acute < 0) {
        tryptaseOutput.innerHTML = `<div class="hint">${escapeHtml(t("tryptase_invalid"))}</div>`;
        return;
      }

      const threshold = (1.2 * baseline) + 2;
      const significant = acute >= threshold;

      tryptaseOutput.innerHTML = `
      <div><strong>${escapeHtml(t("tryptase_threshold"))}:</strong> ${fmt(threshold)} ng/mL</div>
      <div><strong>${escapeHtml(t("tryptase_acute"))}:</strong> ${fmt(acute)} ng/mL</div>
      <div><strong>${escapeHtml(t("tryptase_baseline"))}:</strong> ${fmt(baseline)} ng/mL</div>
      <div class="hint" style="margin-top:10px">${escapeHtml(t("tryptase_formula"))}</div>
      <div style="margin-top:10px"><strong>${escapeHtml(significant ? t("tryptase_positive") : t("tryptase_negative"))}</strong></div>
      <div class="hint" style="margin-top:10px">${escapeHtml(t("tryptase_note"))}</div>
    `;

      tryptaseOutput.dataset.ready = "1";
    }

    return { renderTryptase, calcTryptase };
  }
};
