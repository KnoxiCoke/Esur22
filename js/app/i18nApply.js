window.ESUR = window.ESUR || {};
window.ESUR.app = window.ESUR.app || {};

window.ESUR.app.i18nApply = {
  init({ state, i18n, escapeHtml, changesSearchInput }) {
    function t(key) {
      return i18n[state.lang][key];
    }

    function fillSwitchPrinciples() {
      const items = [
        t("switch_status_optional"),
        t("switch_cmsc"),
        t("switch_cr_structure"),
        t("switch_cr_frequency"),
        t("switch_best_option")
      ];
      const html =
        `<ul>${items.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` +
        `<div class="hint">${escapeHtml(t("switch_brand_governance"))}</div>`;
      const top = document.getElementById("switchNonvalidated");
      const safety = document.getElementById("switchSafety");
      if (top) top.innerHTML = html;
      if (safety) safety.innerHTML = html;
    }

    function applyStaticTranslations() {
      document.documentElement.lang = state.lang;
      document.title = t("app_title");

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (i18n[state.lang][key] !== undefined) {
          el.textContent = i18n[state.lang][key];
        }
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        if (i18n[state.lang][key] !== undefined) {
          el.placeholder = i18n[state.lang][key];
        }
      });

      const stickyDisclaimer = document.getElementById("stickyDisclaimer");
      if (stickyDisclaimer) {
        let extra = stickyDisclaimer.querySelector('[data-i18n="disclaimer_line3"]');
        if (!extra) {
          extra = document.createElement("span");
          extra.setAttribute("data-i18n", "disclaimer_line3");
          stickyDisclaimer.appendChild(extra);
        }
        extra.textContent = t("disclaimer_line3");
      }

      const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };

      const setMultilineText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = escapeHtml(value).replace(/\n/g, "<br />");
      };

      const setGroupLabel = (seg, value, label) => {
        const el = document.querySelector(`.seg__btn[data-seg="${seg}"][data-value="${value}"] > span`);
        if (el) el.textContent = label;
      };

      setMultilineText("icmHint", t("icm_hint"));
      setMultilineText("gbcaHint", t("gbca_hint"));
      fillSwitchPrinciples();

      setGroupLabel("icm", "A", t("icm_group_a_label"));
      setGroupLabel("icm", "B", t("icm_group_b_label"));
      setGroupLabel("icm", "C", t("icm_group_c_label"));
      setGroupLabel("icm", "D", t("icm_group_d_label"));
      setGroupLabel("gbca", "A", t("gbca_group_a_label"));
      setGroupLabel("gbca", "B", t("gbca_group_b_label"));
      setGroupLabel("gbca", "C", t("gbca_group_c_label"));

      setText("icm-group-a-names", t("icm_group_a_names"));
      setText("icm-group-b-names", t("icm_group_b_names"));
      setText("icm-group-c-names", t("icm_group_c_names"));
      setText("icm-group-d-names", t("icm_group_d_names"));
      setText("gbca-group-a-names", t("gbca_group_a_names"));
      setText("gbca-group-b-names", t("gbca_group_b_names"));
      setText("gbca-group-c-names", t("gbca_group_c_names"));

      const baseline = document.getElementById("baseline");
      const acute = document.getElementById("acute");
      if (baseline) baseline.placeholder = `${t("tryptase_baseline")} (ng/mL)`;
      if (acute) acute.placeholder = `${t("tryptase_acute")} (ng/mL)`;

      if (changesSearchInput && changesSearchInput.value !== state.changesSearch) {
        changesSearchInput.value = state.changesSearch;
      }
    }

    return {
      t,
      applyStaticTranslations
    };
  }
};
