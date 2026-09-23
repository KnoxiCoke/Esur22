window.ESUR = window.ESUR || {};
window.ESUR.app = window.ESUR.app || {};

window.ESUR.app.nav = {
  init(state) {
    const views = {
      hsr: document.getElementById("view-hsr"),
      changes: document.getElementById("view-changes")
    };

    const hsrTabs = {
      guidance: document.getElementById("hsr-tab-guidance"),
      acute: document.getElementById("hsr-tab-acute"),
      switch: document.getElementById("hsr-tab-switch"),
      tryptase: document.getElementById("hsr-tab-tryptase"),
      nihr: document.getElementById("hsr-tab-nihr")
    };

    function setBodyMode() {
  const hsrView = document.getElementById("view-hsr");
  const guidanceView = document.getElementById("hsr-tab-guidance");

  const isRelevantView =
    hsrView &&
    !hsrView.hidden &&
    guidanceView &&
    !guidanceView.hidden;

  const isEmergencySelected = state.situation === "emergency";

  document.body.classList.toggle(
    "emergency",
    isRelevantView && isEmergencySelected
  );
}

    function showMainView(name) {
    Object.keys(views).forEach((key) => {
      if (views[key]) views[key].hidden = key !== name;
    });

    document.querySelectorAll(".bottomnav__btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mainNav === name);
    });

    state.mainNav = name;
  }

    function showHsrTab(name) {
    Object.keys(hsrTabs).forEach((key) => {
      if (hsrTabs[key]) hsrTabs[key].hidden = key !== name;
    });

    document.querySelectorAll("[data-hsr-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.hsrTab === name);
    });

    state.hsrTab = name;
  }

    function clearButtons(seg) {
    document.querySelectorAll(`.seg__btn[data-seg="${seg}"]`).forEach((btn) => {
      btn.classList.remove("active");
    });
  }

    return {
      setBodyMode,
      showMainView,
      showHsrTab,
      clearButtons
    };
  }
};
