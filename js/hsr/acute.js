window.ESUR = window.ESUR || {};
window.ESUR.hsr = window.ESUR.hsr || {};

window.ESUR.hsr.acute = {
  init({
    state,
    t,
    escapeHtml,
    defaultAcutePattern,
    acuteImmediateOutput,
    acuteOutput
  }) {
    function renderAcuteList(items) {
      return `<ul>${(items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    }

    function renderAcuteManagement() {
      const contentByPattern = t("acute_content");
      if (!contentByPattern[state.acutePattern]) {
        state.acutePattern = defaultAcutePattern(state.acuteSeverity);
      }

      document.querySelectorAll('.seg__btn[data-seg="acuteSeverity"]').forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.value === state.acuteSeverity);
      });

      document.querySelectorAll('.seg__btn[data-seg="acutePattern"]').forEach((btn) => {
        const isVisible = btn.dataset.acuteSeverity === state.acuteSeverity;
        btn.hidden = !isVisible;
        btn.classList.toggle("active", isVisible && btn.dataset.value === state.acutePattern);
      });

      if (acuteImmediateOutput) {
  const immediateActions = t("acute_immediate_actions") || [];
  const intro = immediateActions[0] || "";
  const actions = immediateActions.slice(1);

  acuteImmediateOutput.innerHTML = `
    ${intro ? `<div>${escapeHtml(intro)}</div>` : ""}
    ${renderAcuteList(actions)}
  `;
}

      if (!acuteOutput) return;

      const content = contentByPattern[state.acutePattern];
      const warning = content.warning
        ? `<div><strong>${escapeHtml(t("acute_warning_label"))}:</strong> ${escapeHtml(content.warning)}</div>`
        : "";
      const escalation = (content.escalation || []).length
        ? renderAcuteList(content.escalation)
        : "";
      const arrest = (content.arrest || []).length
        ? `
        <div>
<strong>${escapeHtml(t("acute_arrest_title"))}:</strong>
${renderAcuteList(content.arrest)}
        </div>
      `
        : "";

      acuteOutput.innerHTML = `
      <div>
        <strong>${escapeHtml(t("acute_section_clinical"))}</strong>
        <div>${escapeHtml(content.clinical)}</div>
        ${warning}
      </div>
      <div>
        <strong>${escapeHtml(t("acute_section_management"))}</strong>
        ${renderAcuteList(content.management)}
      </div>
      <div>
        <strong>${escapeHtml(t("acute_section_escalation"))}</strong>
        ${escalation}
        ${arrest}
      </div>
      <div class="hint">
        <strong>${escapeHtml(t("acute_dose_reference_title"))}:</strong> ${escapeHtml(t("acute_dose_reference_note"))}
      </div>
    `;
    }

    return { renderAcuteManagement };
  }
};
