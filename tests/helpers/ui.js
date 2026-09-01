// UI helpers only. No medical decision logic.
// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b

async function openApp(page) {
  const errors = [];
  page.on("pageerror", (err) => errors.push(String(err)));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console.error: ${msg.text()}`);
  });
  await page.goto("/index.html", { waitUntil: "domcontentloaded" });
  page._hsrErrors = errors;
  return errors;
}

async function openHsrTab(page, tab) {
  await page.locator(`[data-hsr-tab="${tab}"]`).click();
}

async function clickSeg(page, seg, value) {
  await page.locator(`.seg__btn[data-seg="${seg}"][data-value="${value}"]`).click();
}

function flowOutput(page) {
  return page.locator("#flowOutput");
}

function acuteOutput(page) {
  return page.locator("#acuteOutput");
}

function acuteImmediate(page) {
  return page.locator("#acuteImmediateOutput");
}

function switchOutput(page) {
  return page.locator("#switchOutput");
}

function switchPrinciples(page) {
  return page.locator("#switchNonvalidated");
}

function tryptaseOutput(page) {
  return page.locator("#tryptaseOutput");
}

function nihrOutput(page) {
  return page.locator("#nihrOutput");
}

async function setLang(page, lang) {
  await page.locator(lang === "de" ? "#lang-de" : "#lang-en").click();
}

async function resetApp(page) {
  await page.locator("#resetBtn").click();
}

module.exports = {
  openApp,
  openHsrTab,
  clickSeg,
  flowOutput,
  acuteOutput,
  acuteImmediate,
  switchOutput,
  switchPrinciples,
  tryptaseOutput,
  nihrOutput,
  setLang,
  resetApp,
};
