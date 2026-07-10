(() => {
  "use strict";

  const labels = {
    en: {
      mild: "Mild",
      moderate: "Moderate",
      severe: "Severe",
      unclear: "Unclear"
    },
    de: {
      mild: "Mild",
      moderate: "Moderat",
      severe: "Schwer",
      unclear: "Unklar"
    }
  };

  function currentLanguage() {
    return document.documentElement.lang === "de" ? "de" : "en";
  }

  function repairGuidanceSeverityLabels() {
    const languageLabels = labels[currentLanguage()];
    document.querySelectorAll('#view-hsr [data-action="guidance-severity"]').forEach((button) => {
      const label = languageLabels[button.dataset.value];
      if (!label) return;
      if (button.textContent !== label) button.textContent = label;
      button.setAttribute("aria-label", label);
    });
  }

  function initialise() {
    const view = document.getElementById("view-hsr");
    if (!view) return;

    repairGuidanceSeverityLabels();

    const observer = new MutationObserver(() => repairGuidanceSeverityLabels());
    observer.observe(view, { childList: true, subtree: true });

    document.getElementById("lang-en")?.addEventListener("click", () => {
      window.setTimeout(repairGuidanceSeverityLabels, 0);
    });
    document.getElementById("lang-de")?.addEventListener("click", () => {
      window.setTimeout(repairGuidanceSeverityLabels, 0);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
