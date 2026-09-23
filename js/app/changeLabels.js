window.ESUR = window.ESUR || {};
window.ESUR.app = window.ESUR.app || {};

window.ESUR.app.changeLabels = {
  init({ t }) {
    function levelLabel(level) {
      if (level === "high") return t("badge_practice_changing");
      if (level === "medium") return t("badge_refined");
      return t("badge_structural");
    }

    function modeLabel(mode) {
      return mode === "action"
        ? t("changes_action_mode_badge")
        : t("changes_compare_mode_badge");
    }

    return {
      levelLabel,
      modeLabel
    };
  }
};
