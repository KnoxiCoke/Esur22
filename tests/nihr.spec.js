// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect, openApp, openHsrTab, clickSeg, nihrOutput } = require("./helpers/ui");

const GUARD =
  "This combination is not represented as a separate management pathway in ESUR Part 2 Table 2";
const CHOOSE_DIFFERENT =
  "choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known";
const AVOID_ICM = "Avoid all iodine-based contrast media";
const AVOID_GBCA = "Avoid all gadolinium-based contrast agents";
const SCAR_STATUS = "Severe non-immediate hypersensitivity reaction with danger signs (SCAR)";

async function openNihr(page) {
  await openHsrTab(page, "nihr");
}

async function setDanger(page, value, checked) {
  const box = page.locator(`.nihr-check[value="${value}"]`);
  if (checked) await box.check();
  else await box.uncheck();
}

async function clearDanger(page) {
  for (const value of ["erosion", "blister_skin", "mucosa", "extracutaneous"]) {
    await page.locator(`.nihr-check[value="${value}"]`).uncheck();
  }
}

test("NIHR_01 mild + no danger signs follows mild path", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "mild");
  await clearDanger(page);
  const out = nihrOutput(page);
  await expect(out).toContainText("Mild NIHR without danger signs");
  await expect(out).toContainText("Interview");
  await expect(out).toContainText("Optionally");
  await expect(out).not.toContainText(GUARD);
  await expect(out).not.toContainText(AVOID_ICM);
});

test("NIHR_02 moderate + no danger signs follows moderate path", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "moderate");
  await clearDanger(page);
  const out = nihrOutput(page);
  await expect(out).toContainText("Moderate NIHR without danger signs");
  await expect(out).toContainText("Refer the patient to a drug allergy specialist");
  await expect(out).not.toContainText("Optionally");
  await expect(out).not.toContainText("Interview");
  await expect(out).not.toContainText(GUARD);
});

test("NIHR_03 severe + at least one danger sign follows SCAR path", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clearDanger(page);
  await setDanger(page, "erosion", true);
  const out = nihrOutput(page);
  await expect(out).toContainText(SCAR_STATUS);
  await expect(out).not.toContainText(GUARD);
});

test("NIHR_04 mild + danger sign returns source scope guard", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "mild");
  await setDanger(page, "erosion", true);
  await expect(nihrOutput(page)).toContainText(GUARD);
  await expect(nihrOutput(page)).not.toContainText(SCAR_STATUS);
});

test("NIHR_05 moderate + danger sign returns source scope guard", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "moderate");
  await setDanger(page, "mucosa", true);
  await expect(nihrOutput(page)).toContainText(GUARD);
  await expect(nihrOutput(page)).not.toContainText(SCAR_STATUS);
});

test("NIHR_06 severe + no danger sign returns source scope guard", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clearDanger(page);
  await expect(nihrOutput(page)).toContainText(GUARD);
  await expect(nihrOutput(page)).not.toContainText(SCAR_STATUS);
});

test("NIHR_DS_01 severe + erosive lesions alone triggers SCAR", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clearDanger(page);
  await setDanger(page, "erosion", true);
  await expect(nihrOutput(page)).toContainText(SCAR_STATUS);
});

test("NIHR_DS_02 severe + blistering alone triggers SCAR", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clearDanger(page);
  await setDanger(page, "blister_skin", true);
  await expect(nihrOutput(page)).toContainText(SCAR_STATUS);
});

test("NIHR_DS_03 severe + mucosal involvement alone triggers SCAR", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clearDanger(page);
  await setDanger(page, "mucosa", true);
  await expect(nihrOutput(page)).toContainText(SCAR_STATUS);
});

test("NIHR_DS_04 severe + extracutaneous involvement alone triggers SCAR", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clearDanger(page);
  await setDanger(page, "extracutaneous", true);
  await expect(nihrOutput(page)).toContainText(SCAR_STATUS);
});

test("NIHR_SCAR_ICM avoid all ICM and not all GBCA", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clickSeg(page, "nihrCmtype", "icm");
  await setDanger(page, "erosion", true);
  const out = nihrOutput(page);
  await expect(out).toContainText(AVOID_ICM);
  await expect(out).not.toContainText(AVOID_GBCA);
});

test("NIHR_SCAR_GBCA avoid all GBCA and not all ICM", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clickSeg(page, "nihrCmtype", "gbca");
  await setDanger(page, "erosion", true);
  const out = nihrOutput(page);
  await expect(out).toContainText(AVOID_GBCA);
  await expect(out).not.toContainText(AVOID_ICM);
});

test("NIHR_SCAR_UNK individualize after multidisciplinary consultation", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clickSeg(page, "nihrCmtype", "unknown");
  await setDanger(page, "erosion", true);
  const out = nihrOutput(page);
  await expect(out).toContainText("multidisciplinary consultation");
  await expect(out).not.toContainText(AVOID_ICM);
  await expect(out).not.toContainText(AVOID_GBCA);
});

test("NIHR_SCAR_TOGGLE culprit known does not override SCAR class rule", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await clickSeg(page, "nihrCmtype", "icm");
  await setDanger(page, "erosion", true);
  await clickSeg(page, "nihrCulpritKnown", "known");
  await expect(nihrOutput(page)).toContainText(AVOID_ICM);
  await expect(nihrOutput(page)).not.toContainText(CHOOSE_DIFFERENT);
  await clickSeg(page, "nihrCulpritKnown", "unknown");
  await expect(nihrOutput(page)).toContainText(AVOID_ICM);
  await expect(nihrOutput(page)).not.toContainText(CHOOSE_DIFFERENT);
});

test("NIHR mild known shows conditional different-CM action; unknown does not", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "mild");
  await clearDanger(page);
  await clickSeg(page, "nihrCulpritKnown", "known");
  await expect(nihrOutput(page)).toContainText(CHOOSE_DIFFERENT);
  await clickSeg(page, "nihrCulpritKnown", "unknown");
  await expect(nihrOutput(page)).not.toContainText(CHOOSE_DIFFERENT);
});

test("NIHR moderate known shows conditional different-CM action; unknown does not", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "moderate");
  await clearDanger(page);
  await clickSeg(page, "nihrCulpritKnown", "known");
  await expect(nihrOutput(page)).toContainText(CHOOSE_DIFFERENT);
  await clickSeg(page, "nihrCulpritKnown", "unknown");
  await expect(nihrOutput(page)).not.toContainText(CHOOSE_DIFFERENT);
});

test("FORB_05 NIHR SCAR does not include mild/moderate observation and written-instruction bundle", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "severe");
  await setDanger(page, "erosion", true);
  const out = nihrOutput(page);
  await expect(out).not.toContainText("observe the patient for at least 30 min");
  await expect(out).not.toContainText("written instructions");
});

test("FORB_08 mild or moderate plus danger sign does not silently become SCAR", async ({ page }) => {
  await openApp(page);
  await openNihr(page);
  await clickSeg(page, "nihrSeverity", "mild");
  await setDanger(page, "blister_skin", true);
  await expect(nihrOutput(page)).toContainText(GUARD);
  await expect(nihrOutput(page)).not.toContainText(SCAR_STATUS);
  await expect(nihrOutput(page)).not.toContainText(AVOID_ICM);
});
