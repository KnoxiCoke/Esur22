document.addEventListener("DOMContentLoaded", function () {
  const state = {
    mainNav: "hsr",          // hsr | changes
    hsrTab: "guidance",      // guidance | acute | switch | tryptase | nihr

    // HSR
    situation: "elective",
    reaction: "moderate",    // mild | moderate | severe
    cmtype: "icm",
    nihrCmtype: "icm",
    nihrSeverity: "mild",
    nihrCulpritKnown: "known",
    acuteSeverity: "mild",   // mild | moderate | severe
    acutePattern: "mild_general",
    icm: null,
    gbca: null,

    // Global
    lang: "en",

    // Practice Changes tab
    changesFilter: "all",   // all | high | medium | low
    changesMode: "compare", // compare | action
    changesSearch: "",
    openChanges: new Set()
  };
