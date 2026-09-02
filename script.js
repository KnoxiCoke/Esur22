document.addEventListener("DOMContentLoaded", function () {
  const state = {
    mainNav: "hsr",
    hsrTab: "guidance",
    situation: "elective",
    reaction: "moderate",
    cmtype: "icm",
    nihrCmtype: "icm",
    nihrSeverity: "mild",
    nihrCulpritKnown: "known",
    acuteSeverity: "mild",
    acutePattern: "mild_general",
    icm: null,
    gbca: null,
    lang: "en",
    changesFilter: "all",
    changesMode: "compare",
    changesSearch: "",
    openChanges: new Set()
  };
  const i18n = window.ESUR.i18n;
  const { escapeHtml, fmt } = window.ESUR.utils;
  const { iconSvg } = window.ESUR.icons;
  const { renderAcuteList } = window.ESUR.hsr.acute;
});
