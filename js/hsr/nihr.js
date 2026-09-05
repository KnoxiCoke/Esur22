window.ESUR = window.ESUR || {};
window.ESUR.hsr = window.ESUR.hsr || {};

window.ESUR.hsr.nihr = {
  init({ state, t, escapeHtml, nihrOutput }) {
    function renderNihrList(items) {
      return `<ul>${(items || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`;
    }

    function renderNihr() {
      if (!nihrOutput) return;

      const hasDangerSigns = Array.from(document.querySelectorAll(".nihr-check")).some((el) => el.checked);
      const severity = state.nihrSeverity;
      const mildValid = severity === "mild" && !hasDangerSigns;
      const moderateValid = severity === "moderate" && !hasDangerSigns;
      const scarValid = severity === "severe" && hasDangerSigns;


      const adviceItems = () => {
        const items = [t("nihr_apply_advice")];
        if (state.nihrCulpritKnown === "known") items.push(t("nihr_choose_different"));
        return items;
      };

      const followUpItems = [
        t("nihr_observe"),
        t("nihr_written"),
        t("nihr_recurrence"),
        t("nihr_preventive_alt"),
        t("nihr_preventive_never_deny"),
        t("nihr_footnote_crossreact")
      ];

      if (mildValid) {
        nihrOutput.innerHTML = `
        <div><strong>${escapeHtml(t("nihr_status_mild"))}</strong></div>
        <div>
          <strong>${escapeHtml(t("nihr_recommended_actions"))}</strong>
          ${renderNihrList([
            t("nihr_mild_interview"),
            t("nihr_mild_refer"),
            t("nihr_optimize_ehr"),
            ...adviceItems(),
            ...followUpItems
          ])}
        </div>
      `;
        return;
      }

      if (moderateValid) {
        nihrOutput.innerHTML = `
        <div><strong>${escapeHtml(t("nihr_status_moderate"))}</strong></div>
        <div>
          <strong>${escapeHtml(t("nihr_recommended_actions"))}</strong>
          ${renderNihrList([
            t("nihr_moderate_refer"),
            t("nihr_optimize_ehr"),
            ...adviceItems(),
            ...followUpItems
          ])}
        </div>
      `;
        return;
      }

      if (scarValid) {
        const classRule =
          state.nihrCmtype === "gbca"
            ? t("nihr_scar_gbca_rule")
            : state.nihrCmtype === "unknown"
              ? t("nihr_scar_unknown_rule")
              : t("nihr_scar_icm_rule");

        nihrOutput.innerHTML = `
        <div><strong>${escapeHtml(t("nihr_status_scar"))}</strong></div>
        <div>
          <strong>${escapeHtml(t("nihr_recommended_actions"))}</strong>
          ${renderNihrList([
            t("nihr_scar_refer"),
            t("nihr_scar_choose_imaging"),
            t("nihr_scar_ehr"),
            t("nihr_scar_do_not_give")
          ])}
        </div>
        <div>
          <strong>${escapeHtml(t("nihr_class_specific_rule"))}</strong>
          ${renderNihrList([classRule])}
        </div>
      `;
        return;
      }

      nihrOutput.innerHTML = `<div>${escapeHtml(t("nihr_scope_guard"))}</div>`;
    }

    return { renderNihr };
  }
};
