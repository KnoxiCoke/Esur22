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

  function loadNext(index) {
    if (index >= assets.length) return;
    const script = document.createElement("script");
    script.src = assets[index];
    script.onload = () => loadNext(index + 1);
    script.onerror = () => console.error(`Failed to load ${assets[index]}`);
    document.head.appendChild(script);
  }

  loadNext(0);
})();
