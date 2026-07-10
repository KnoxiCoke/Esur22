(() => {
  "use strict";

  const assets = [
    "./hsr-2025-data-en.js",
    "./hsr-2025-data-de.js",
    "./hsr-2025-app.js"
  ];

  if (!document.querySelector('link[href="./hsr-2025.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./hsr-2025.css";
    document.head.appendChild(link);
  }

  const layoutFix = document.createElement("style");
  layoutFix.textContent = `
    .hsr25-tabs-wrap { position: relative; top: auto; }
    @media (max-width: 768px) {
      .hsr25-tabs-wrap { position: sticky; top: 58px; }
    }
  `;
  document.head.appendChild(layoutFix);

  function showLoadError(asset) {
    const view = document.getElementById("view-hsr");
    if (!view) return;
    view.innerHTML = `<div class="card card--output"><strong>HSR module could not be loaded.</strong><div class="hint">Missing asset: ${asset}</div></div>`;
  }

  function loadNext(index) {
    if (index >= assets.length) return;
    const script = document.createElement("script");
    script.src = assets[index];
    script.onload = () => loadNext(index + 1);
    script.onerror = () => {
      console.error(`Failed to load ${assets[index]}`);
      showLoadError(assets[index]);
    };
    document.head.appendChild(script);
  }

  loadNext(0);
})();
