(() => {
  "use strict";

  const PART_1_DOI = "10.1007/s00330-025-11675-1";
  const PART_2_DOI = "10.1007/s00330-025-11676-0";

  const state = {
    lang: document.documentElement.lang === "de" ? "de" : "en",
    tab: "guidance",
    guidance: { situation: null, severity: null, culprit: null },
    acute: { severity: null, pattern: null },
    switcher: { type: null, group: null },
    tryptase: { calculated: false },
    nihr: {
      dangerAssessment: null,
      dangerSigns: new Set(),
      severity: null,
      cmtype: null,
      culprit: null
    }
  };

  const copy = window.ESUR2025_HSR_COPY;

  function t() {
    return copy[state.lang];
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function list(items, className = "") {
    if (!items || !items.length) return "";
    return `<ul class="${esc(className)}">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }

  function button(label, action, value, active = false, modifier = "") {
    return `<button type="button" class="hsr25-choice${modifier ? ` ${esc(modifier)}` : ""}${active ? " is-active" : ""}" data-action="${esc(action)}" data-value="${esc(value)}" aria-pressed="${active ? "true" : "false"}">${esc(label)}</button>`;
  }

  function source(part) {
    const label = part === 1 ? t().sourcePart1 : t().sourcePart2;
    const partLabel = state.lang === "de" ? `ESUR 2025 · Teil ${part}` : `ESUR 2025 · Part ${part}`;
    return `<details class="hsr25-source"><summary>${esc(t().common.source)}: ${esc(partLabel)}</summary><div>${esc(label)}</div></details>`;
  }

  function accordion(title, body, tone = "neutral", open = false) {
    return `<details class="hsr25-accordion hsr25-accordion--${esc(tone)}"${open ? " open" : ""}><summary>${esc(title)}</summary><div class="hsr25-accordion__body">${body}</div></details>`;
  }

  function phase(title, items, tone = "neutral") {
    if (!items || !items.length) return "";
    return `<section class="hsr25-phase hsr25-phase--${esc(tone)}"><h3>${esc(title)}</h3>${list(items)}</section>`;
  }

  function shellHtml() {
    return `
      <div class="hsr25-shell">
        <header class="hsr25-hero">
          <h1 id="hsr25Title"></h1>
          <p id="hsr25Subtitle"></p>
        </header>
        <div class="hsr25-tabs-wrap">
          <nav class="hsr25-tabs" role="tablist" aria-label="HSR tools" id="hsr25Tabs"></nav>
        </div>
        <section class="hsr25-panel" id="hsr25-guidance" role="tabpanel"></section>
        <section class="hsr25-panel" id="hsr25-acute" role="tabpanel" hidden></section>
        <section class="hsr25-panel" id="hsr25-switch" role="tabpanel" hidden></section>
        <section class="hsr25-panel" id="hsr25-tryptase" role="tabpanel" hidden></section>
        <section class="hsr25-panel" id="hsr25-nihr" role="tabpanel" hidden></section>
      </div>
    `;
  }

  function renderTabs() {
    const tabs = document.getElementById("hsr25Tabs");
    if (!tabs) return;
    tabs.innerHTML = Object.entries(t().tabs).map(([key, label]) => `
      <button type="button" class="hsr25-tab${state.tab === key ? " is-active" : ""}" data-action="tab" data-value="${esc(key)}" role="tab" aria-selected="${state.tab === key ? "true" : "false"}">${esc(label)}</button>
    `).join("");

    ["guidance", "acute", "switch", "tryptase", "nihr"].forEach((key) => {
      const panel = document.getElementById(`hsr25-${key}`);
      if (panel) panel.hidden = state.tab !== key;
    });
  }

  function guidanceResultHtml() {
    const c = t().guidance;
    const g = state.guidance;
    if (!g.situation || !g.severity || !g.culprit) {
      return `<div class="hsr25-card hsr25-card--compact"><div class="hsr25-muted">${esc(c.incomplete)}</div></div>`;
    }

    const chips = [c.summary[g.situation], c.summary[g.severity], c.summary[g.culprit]];
    let title = "";
    let before = [...c.generalBefore];
    let during = [];
    let after = [...c.generalAfter];
    let extra = "";

    if (g.severity === "unclear") {
      title = c.unclear.title;
      before.push(...c.unclear.before);
    } else if (g.severity === "mild") {
      title = c.mild.title;
      before.push(...c.mild.before);
      during.push(...(g.culprit === "known" ? c.mild.duringKnown : c.mild.duringUnknown));
    } else if (g.severity === "moderate") {
      title = c.moderate.title;
      before.push(...(g.situation === "elective" ? c.moderate.electiveBefore : c.moderate.emergencyBefore));
      during.push(...(g.culprit === "known" ? c.moderate.duringKnown : c.moderate.duringUnknown));
    } else if (g.severity === "severe") {
      title = c.severe.title;
      before.push(...(g.situation === "elective" ? c.severe.electiveBefore : c.severe.emergencyBefore));
      during.push(...(g.culprit === "known" ? c.severe.duringKnown : c.severe.duringUnknown));
      if (g.situation === "emergency" && g.culprit === "unknown") {
        extra = accordion(c.premedTitle, list(c.premed), "warning");
      }
    }

    return `
      <article class="hsr25-card hsr25-result">
        <div class="hsr25-summary">${chips.map((chip) => `<span class="hsr25-chip${g.severity === "severe" ? " hsr25-chip--danger" : ""}">${esc(chip)}</span>`).join("")}</div>
        <h2 class="hsr25-result__title">${esc(title)}</h2>
        ${phase(t().common.before, before)}
        ${phase(t().common.during, during, g.severity === "severe" ? "warning" : "neutral")}
        ${phase(t().common.after, after)}
        ${extra}
        ${source(2)}
      </article>
    `;
  }

  function renderGuidance() {
    const panel = document.getElementById("hsr25-guidance");
    if (!panel) return;
    const c = t().guidance;
    const g = state.guidance;

    panel.innerHTML = `
      <div class="hsr25-card hsr25-card--info hsr25-card--compact"><div class="hsr25-muted">${esc(t().common.noPreset)}</div></div>
      <section class="hsr25-card hsr25-step">
        <div class="hsr25-step__title">${esc(c.step1)}</div>
        <div class="hsr25-choices">
          ${button(c.elective, "guidance-situation", "elective", g.situation === "elective")}
          ${button(c.emergency, "guidance-situation", "emergency", g.situation === "emergency")}
        </div>
      </section>
      <section class="hsr25-card hsr25-step"${g.situation ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.step2)}</div>
        <div class="hsr25-choices hsr25-choices--4">
          ${button(c.mild, "guidance-severity", "mild", g.severity === "mild")}
          ${button(c.moderate, "guidance-severity", "moderate", g.severity === "moderate")}
          ${button(c.severe, "guidance-severity", "severe", g.severity === "severe")}
          ${button(c.unclear, "guidance-severity", "unclear", g.severity === "unclear")}
        </div>
      </section>
      <section class="hsr25-card hsr25-step"${g.severity ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.step3)}</div>
        <div class="hsr25-choices">
          ${button(c.known, "guidance-culprit", "known", g.culprit === "known")}
          ${button(c.unknown, "guidance-culprit", "unknown", g.culprit === "unknown")}
        </div>
      </section>
      ${guidanceResultHtml()}
    `;
  }

  function acuteResultHtml() {
    const c = t().acute;
    const a = state.acute;
    if (!a.severity || !a.pattern) {
      return `<div class="hsr25-card hsr25-card--compact"><div class="hsr25-muted">${esc(c.choose)}</div></div>`;
    }
    const item = c.cases[a.pattern];
    if (!item) return "";

    const special = [];
    if (item.sedating) special.push(c.sedation);
    if (item.beta) special.push(c.beta);

    const dangerClass = a.severity === "severe" ? "hsr25-card--danger" : a.severity === "moderate" ? "hsr25-card--warning" : "hsr25-card--info";

    return `
      <article class="hsr25-card ${dangerClass} hsr25-result">
        <h2 class="hsr25-result__title">${esc(item.title)}</h2>
        <p>${esc(item.clinical)}</p>
        ${item.warning ? `<div class="hsr25-alert hsr25-alert--${a.severity === "severe" ? "danger" : "warning"}">${esc(item.warning)}</div>` : ""}
        <section class="hsr25-phase hsr25-phase--${a.severity === "severe" ? "danger" : "neutral"}">
          <h3>${esc(t().common.now)}</h3>
          <ol class="hsr25-now${a.severity === "mild" ? " hsr25-now--neutral" : ""}">${item.now.map((entry) => `<li>${esc(entry)}</li>`).join("")}</ol>
        </section>
        ${item.escalation ? accordion(t().common.escalation, list(item.escalation), a.severity === "severe" ? "danger" : "warning", a.severity === "severe") : ""}
        ${item.details ? accordion(t().common.more, list(item.details)) : ""}
        ${special.length ? accordion(c.labels.special, list(special), "warning") : ""}
        ${item.arrest ? accordion(c.labels.arrest, list(item.arrest), "danger") : ""}
        ${accordion(t().common.aftercare, list(item.after), a.severity === "severe" ? "danger" : "neutral")}
        ${accordion(t().common.documentation, list(c.documentation))}
        ${source(1)}
      </article>
    `;
  }

  function renderAcute() {
    const panel = document.getElementById("hsr25-acute");
    if (!panel) return;
    const c = t().acute;
    const a = state.acute;
    const patterns = a.severity === "mild"
      ? ["mild_general"]
      : a.severity === "moderate"
        ? ["moderate_urticaria", "moderate_angioedema", "moderate_bronchospasm"]
        : a.severity === "severe"
          ? ["severe_anaphylaxis"]
          : [];

    panel.innerHTML = `
      <div class="hsr25-alert hsr25-alert--danger">${esc(t().common.adultOnly)}</div>
      <div class="hsr25-alert hsr25-alert--info">${esc(t().common.localProtocol)}</div>
      <section class="hsr25-card">
        <h2>${esc(c.firstActions)}</h2>
        <ol class="hsr25-now hsr25-now--neutral">${c.first.map((entry) => `<li>${esc(entry)}</li>`).join("")}</ol>
        ${accordion(t().common.more, list(c.positioning))}
      </section>
      <section class="hsr25-card">
        <div class="hsr25-step__title">${esc(c.severityTitle)}</div>
        <div class="hsr25-choices hsr25-choices--3">
          ${button(c.mild, "acute-severity", "mild", a.severity === "mild")}
          ${button(c.moderate, "acute-severity", "moderate", a.severity === "moderate")}
          ${button(c.severe, "acute-severity", "severe", a.severity === "severe")}
        </div>
      </section>
      <section class="hsr25-card"${patterns.length ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.patternTitle)}</div>
        <div class="hsr25-choices ${patterns.length === 3 ? "hsr25-choices--3" : ""}">
          ${patterns.map((key) => button(c.patterns[key], "acute-pattern", key, a.pattern === key)).join("")}
        </div>
      </section>
      ${acuteResultHtml()}
    `;
  }

  function renderSwitch() {
    const panel = document.getElementById("hsr25-switch");
    if (!panel) return;
    const c = t().switcher;
    const s = state.switcher;
    const groups = s.type ? c.groups[s.type] : null;
    const suggestion = s.type && s.group ? c.suggestions[s.type][s.group] : null;

    panel.innerHTML = `
      <div class="hsr25-alert hsr25-alert--warning">${esc(c.warning)}</div>
      <section class="hsr25-card">
        <div class="hsr25-step__title">${esc(c.type)}</div>
        <div class="hsr25-choices">
          ${button(c.icm, "switch-type", "icm", s.type === "icm")}
          ${button(c.gbca, "switch-type", "gbca", s.type === "gbca")}
        </div>
      </section>
      <section class="hsr25-card"${groups ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.involved)}</div>
        <div class="hsr25-choices hsr25-choices--3">
          ${groups ? Object.entries(groups).map(([key, label]) => button(label, "switch-group", key, s.group === key)).join("") : ""}
        </div>
      </section>
      ${suggestion ? `
        <article class="hsr25-card hsr25-card--warning hsr25-result">
          <h2 class="hsr25-result__title">${esc(c.result)}</h2>
          <p>${esc(suggestion)}</p>
          <div class="hsr25-alert hsr25-alert--warning">${esc(c.noGuarantee)}</div>
          ${source(2)}
        </article>
      ` : `<div class="hsr25-card hsr25-card--compact"><div class="hsr25-muted">${esc(c.choose)}</div></div>`}
    `;
  }

  function calculateTryptase() {
    const acuteInput = document.getElementById("hsr25AcuteTryptase");
    const baselineInput = document.getElementById("hsr25BaselineTryptase");
    const result = document.getElementById("hsr25TryptaseResult");
    if (!acuteInput || !baselineInput || !result) return;

    const acuteRaw = acuteInput.value.trim();
    const baselineRaw = baselineInput.value.trim();
    const acute = acuteRaw === "" ? NaN : Number(acuteRaw);
    const baseline = baselineRaw === "" ? NaN : Number(baselineRaw);
    const c = t().tryptase;

    if (!Number.isFinite(acute) || !Number.isFinite(baseline) || acute < 0 || baseline < 0) {
      state.tryptase.calculated = false;
      result.innerHTML = `<div class="hsr25-alert hsr25-alert--warning">${esc(c.invalid)}</div>`;
      return;
    }

    const threshold = 1.2 * baseline + 2;
    const positive = acute >= threshold;
    const format = new Intl.NumberFormat(state.lang === "de" ? "de-CH" : "en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    state.tryptase.calculated = true;

    result.innerHTML = `
      <article class="hsr25-card ${positive ? "hsr25-card--success" : "hsr25-card--warning"}">
        <h2 class="hsr25-result__title">${esc(positive ? c.positive : c.negative)}</h2>
        <p>${esc(positive ? c.positiveText : c.negativeText)}</p>
        <div class="hsr25-metric"><span>${esc(c.threshold)}</span><strong>${format.format(threshold)} ng/mL</strong></div>
        <div class="hsr25-metric"><span>${esc(c.acute)}</span><strong>${format.format(acute)} ng/mL</strong></div>
        <div class="hsr25-metric"><span>${esc(c.baseline)}</span><strong>${format.format(baseline)} ng/mL</strong></div>
        ${source(2)}
      </article>
    `;
  }

  function renderTryptase() {
    const panel = document.getElementById("hsr25-tryptase");
    if (!panel) return;
    const c = t().tryptase;
    const oldAcute = document.getElementById("hsr25AcuteTryptase")?.value ?? "";
    const oldBaseline = document.getElementById("hsr25BaselineTryptase")?.value ?? "";

    panel.innerHTML = `
      <section class="hsr25-card">
        <h2>${esc(c.title)}</h2>
        <div class="hsr25-formgrid">
          <div class="hsr25-field"><label for="hsr25AcuteTryptase">${esc(c.acute)}</label><input type="number" min="0" step="any" inputmode="decimal" id="hsr25AcuteTryptase" value="${esc(oldAcute)}" /></div>
          <div class="hsr25-field"><label for="hsr25BaselineTryptase">${esc(c.baseline)}</label><input type="number" min="0" step="any" inputmode="decimal" id="hsr25BaselineTryptase" value="${esc(oldBaseline)}" /></div>
        </div>
        <button type="button" class="hsr25-primary" data-action="tryptase-calc">${esc(c.calculate)}</button>
        ${accordion(c.timingTitle, list(c.timing), "neutral", true)}
        ${accordion(c.formulaTitle, `<div>${esc(c.formula)}</div>`)}
        ${source(2)}
      </section>
      <div id="hsr25TryptaseResult"></div>
    `;
  }

  function nihrResultHtml() {
    const c = t().nihr;
    const n = state.nihr;

    if (!n.dangerAssessment) {
      return `<div class="hsr25-card hsr25-card--compact"><div class="hsr25-muted">${esc(c.incomplete)}</div></div>`;
    }

    if (n.dangerAssessment === "present") {
      if (!n.dangerSigns.size || !n.cmtype) {
        return `<div class="hsr25-card hsr25-card--compact"><div class="hsr25-muted">${esc(c.incomplete)}</div></div>`;
      }
      const avoid = n.cmtype === "icm" ? c.avoidIcm : n.cmtype === "gbca" ? c.avoidGbca : c.avoidUnknown;
      return `
        <article class="hsr25-card hsr25-card--danger hsr25-result">
          <h2 class="hsr25-result__title">${esc(c.scarTitle)}</h2>
          ${phase(t().common.now, [...c.scarNow, avoid], "danger")}
          ${source(2)}
        </article>
      `;
    }

    if (!n.severity || !n.cmtype || !n.culprit) {
      return `<div class="hsr25-card hsr25-card--compact"><div class="hsr25-muted">${esc(c.incomplete)}</div></div>`;
    }

    if (n.severity === "unclearSevere") {
      return `
        <article class="hsr25-card hsr25-card--warning hsr25-result">
          <h2 class="hsr25-result__title">${esc(c.severeUnclearTitle)}</h2>
          ${phase(t().common.now, c.severeUnclear, "warning")}
          ${source(2)}
        </article>
      `;
    }

    const title = n.severity === "moderate" ? c.moderateTitle : c.mildTitle;
    const before = n.severity === "moderate" ? [...c.moderateActions] : [...c.mildActions];
    before.push(n.culprit === "known" ? c.knownAction : c.unknownAction);

    return `
      <article class="hsr25-card hsr25-result">
        <h2 class="hsr25-result__title">${esc(title)}</h2>
        ${phase(t().common.before, before)}
        ${phase(t().common.after, c.after)}
        ${n.cmtype === "icm" ? `<div class="hsr25-alert hsr25-alert--warning">${esc(c.icmCaution)}</div>` : ""}
        ${source(2)}
      </article>
    `;
  }

  function renderNihr() {
    const panel = document.getElementById("hsr25-nihr");
    if (!panel) return;
    const c = t().nihr;
    const n = state.nihr;
    const signs = Object.entries(c.signs);

    panel.innerHTML = `
      <section class="hsr25-card hsr25-card--info">
        <h2>${esc(c.title)}</h2>
        <p>${esc(c.subtitle)}</p>
      </section>
      <section class="hsr25-card">
        <div class="hsr25-step__title">${esc(c.dangerQuestion)}</div>
        <div class="hsr25-choices">
          ${button(c.none, "nihr-danger", "none", n.dangerAssessment === "none")}
          ${button(c.present, "nihr-danger", "present", n.dangerAssessment === "present", "hsr25-choice--danger")}
        </div>
      </section>
      <section class="hsr25-card hsr25-card--danger"${n.dangerAssessment === "present" ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.signsTitle)}</div>
        <div class="hsr25-checks">
          ${signs.map(([key, label]) => `<label class="hsr25-check"><input type="checkbox" data-action="nihr-sign" data-value="${esc(key)}"${n.dangerSigns.has(key) ? " checked" : ""} /><span>${esc(label)}</span></label>`).join("")}
        </div>
      </section>
      <section class="hsr25-card"${n.dangerAssessment === "none" ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.severityTitle)}</div>
        <div class="hsr25-choices hsr25-choices--3">
          ${button(c.mild, "nihr-severity", "mild", n.severity === "mild")}
          ${button(c.moderate, "nihr-severity", "moderate", n.severity === "moderate")}
          ${button(c.unclearSevere, "nihr-severity", "unclearSevere", n.severity === "unclearSevere")}
        </div>
      </section>
      <section class="hsr25-card"${n.dangerAssessment ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.classTitle)}</div>
        <div class="hsr25-choices hsr25-choices--3">
          ${button(c.icm, "nihr-class", "icm", n.cmtype === "icm")}
          ${button(c.gbca, "nihr-class", "gbca", n.cmtype === "gbca")}
          ${button(c.unknownClass, "nihr-class", "unknown", n.cmtype === "unknown")}
        </div>
      </section>
      <section class="hsr25-card"${n.dangerAssessment === "none" && n.severity && n.cmtype ? "" : " hidden"}>
        <div class="hsr25-step__title">${esc(c.culpritTitle)}</div>
        <div class="hsr25-choices">
          ${button(c.known, "nihr-culprit", "known", n.culprit === "known")}
          ${button(c.unknown, "nihr-culprit", "unknown", n.culprit === "unknown")}
        </div>
      </section>
      ${nihrResultHtml()}
    `;
  }

  function renderAll() {
    const title = document.getElementById("hsr25Title");
    const subtitle = document.getElementById("hsr25Subtitle");
    if (title) title.textContent = t().appTitle;
    if (subtitle) subtitle.textContent = t().appSubtitle;
    renderTabs();
    renderGuidance();
    renderAcute();
    renderSwitch();
    renderTryptase();
    renderNihr();
    if (state.tryptase.calculated) window.requestAnimationFrame(calculateTryptase);
  }

  function resetHsr() {
    state.tab = "guidance";
    state.guidance = { situation: null, severity: null, culprit: null };
    state.acute = { severity: null, pattern: null };
    state.switcher = { type: null, group: null };
    state.tryptase = { calculated: false };
    state.nihr = { dangerAssessment: null, dangerSigns: new Set(), severity: null, cmtype: null, culprit: null };
    renderAll();
  }

  function handleClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target || !target.closest("#view-hsr")) return;
    const action = target.dataset.action;
    const value = target.dataset.value;

    if (action === "tab") state.tab = value;
    if (action === "guidance-situation") {
      state.guidance.situation = value;
      state.guidance.severity = null;
      state.guidance.culprit = null;
    }
    if (action === "guidance-severity") {
      state.guidance.severity = value;
      state.guidance.culprit = null;
    }
    if (action === "guidance-culprit") state.guidance.culprit = value;
    if (action === "acute-severity") {
      state.acute.severity = value;
      state.acute.pattern = null;
    }
    if (action === "acute-pattern") state.acute.pattern = value;
    if (action === "switch-type") {
      state.switcher.type = value;
      state.switcher.group = null;
    }
    if (action === "switch-group") state.switcher.group = value;
    if (action === "nihr-danger") {
      state.nihr.dangerAssessment = value;
      state.nihr.dangerSigns = new Set();
      state.nihr.severity = null;
      state.nihr.cmtype = null;
      state.nihr.culprit = null;
    }
    if (action === "nihr-severity") {
      state.nihr.severity = value;
      state.nihr.culprit = null;
    }
    if (action === "nihr-class") {
      state.nihr.cmtype = value;
      state.nihr.culprit = null;
    }
    if (action === "nihr-culprit") state.nihr.culprit = value;
    if (action === "tryptase-calc") {
      calculateTryptase();
      return;
    }

    renderAll();
    if (action === "tab") {
      const active = document.querySelector(`.hsr25-tab[data-value="${CSS.escape(value)}"]`);
      active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  function handleChange(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.dataset.action !== "nihr-sign") return;
    const value = target.dataset.value;
    if (target.checked) state.nihr.dangerSigns.add(value);
    else state.nihr.dangerSigns.delete(value);
    renderNihr();
  }

  function init() {
    const view = document.getElementById("view-hsr");
    if (!view) return;
    view.innerHTML = shellHtml();
    view.addEventListener("click", handleClick);
    view.addEventListener("change", handleChange);

    document.getElementById("lang-en")?.addEventListener("click", () => {
      state.lang = "en";
      document.documentElement.lang = "en";
      window.setTimeout(renderAll, 0);
    });
    document.getElementById("lang-de")?.addEventListener("click", () => {
      state.lang = "de";
      document.documentElement.lang = "de";
      window.setTimeout(renderAll, 0);
    });
    document.getElementById("resetBtn")?.addEventListener("click", () => window.setTimeout(resetHsr, 0));

    renderAll();
  }

  window.ESUR2025HSR = {
    render: renderAll,
    reset: resetHsr,
    sources: { part1: PART_1_DOI, part2: PART_2_DOI }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
