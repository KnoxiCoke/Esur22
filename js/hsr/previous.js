window.ESUR = window.ESUR || {};
window.ESUR.hsr = window.ESUR.hsr || {};

window.ESUR.hsr.previous = {
  init({ state, t, escapeHtml, flowOutput, flowSafety }) {
    function renderFlow() {
      const key = `${state.situation}_${state.reaction}`;
      const title = t("flow_titles")[key];
      const bullets = t("flow_bullets")[key];

      if (flowOutput) {
        flowOutput.innerHTML = `
        <div><strong>${escapeHtml(title)}</strong></div>
        <ul>${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      `;
      }

      if (flowSafety) flowSafety.textContent = t("flow_safety");
    }

    return { renderFlow };
  }
};
