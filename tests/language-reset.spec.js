// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const {
  test,
  expect,
  openApp,
  openHsrTab,
  clickSeg,
  expectSegActive,
  flowOutput,
  acuteOutput,
  switchOutput,
  tryptaseOutput,
  nihrOutput,
  setLang,
  resetApp,
} = require("./helpers/ui");

test("LANG_01 previous elective moderate persists across EN-DE-EN", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "guidance");
  await clickSeg(page, "situation", "elective");
  await clickSeg(page, "reaction", "moderate");
  await expect(flowOutput(page)).toContainText("Postpone imaging to wait for the results of the allergy analysis");
  await setLang(page, "de");
  await expectSegActive(page, "situation", "elective");
  await expectSegActive(page, "reaction", "moderate");
  await expect(flowOutput(page)).toContainText("Die Bildgebung aufschieben");
  await expect(flowOutput(page)).toContainText("Allergieanalyse");
  await expect(flowOutput(page)).toContainText("Die Empfehlung der Fachperson für Arzneimittelallergien");
  await expect(page.locator("#lang-de")).toHaveClass(/active/);
  await setLang(page, "en");
  await expectSegActive(page, "situation", "elective");
  await expectSegActive(page, "reaction", "moderate");
  await expect(flowOutput(page)).toContainText("Postpone imaging to wait for the results of the allergy analysis");
});

test("LANG_02 severe anaphylaxis persists with identical doses across EN-DE-EN", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "acute");
  await clickSeg(page, "acuteSeverity", "severe");
  await expect(acuteOutput(page)).toContainText("0.5 mg adrenaline IM");
  await expect(acuteOutput(page)).toContainText("2.5–5 µg");
  await setLang(page, "de");
  await expectSegActive(page, "acuteSeverity", "severe");
  await expect(page.locator('[data-seg="acutePattern"][data-value="severe_anaphylaxis"]')).toBeVisible();
  await expect(acuteOutput(page)).toContainText("0,5 mg");
  await expect(acuteOutput(page)).toContainText("2,5–5 µg");
  await setLang(page, "en");
  await expectSegActive(page, "acuteSeverity", "severe");
  await expect(acuteOutput(page)).toContainText("0.5 mg adrenaline IM");
  await expect(acuteOutput(page)).toContainText("2.5–5 µg");
});

test("LANG_03 switch ICM group C selection and rule persist across language change", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "switch");
  await clickSeg(page, "cmtype", "icm");
  await clickSeg(page, "icm", "C");
  await expect(switchOutput(page)).toContainText("Group B");
  await expect(switchOutput(page)).toContainText("High cross-reactivity between Group C and Group A");
  await setLang(page, "de");
  await expectSegActive(page, "cmtype", "icm");
  await expectSegActive(page, "icm", "C");
  await expect(switchOutput(page)).toContainText("Alternatives ICM aus Gruppe B");
  await expect(switchOutput(page)).toContainText("Hohe Kreuzreaktivität zwischen Gruppe C und Gruppe A");
  await setLang(page, "en");
  await expectSegActive(page, "cmtype", "icm");
  await expectSegActive(page, "icm", "C");
  await expect(switchOutput(page)).toContainText("High cross-reactivity between Group C and Group A");
});

test("LANG_04 tryptase 10/14 stays positive across EN-DE-EN", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "tryptase");
  await page.locator("#baseline").fill("10");
  await page.locator("#acute").fill("14");
  await page.locator("#calcTryptase").click();
  await expect(tryptaseOutput(page)).toContainText("The result is suggestive of an IHR");
  await setLang(page, "de");
  await expect(page.locator("#baseline")).toHaveValue("10");
  await expect(page.locator("#acute")).toHaveValue("14");
  await expect(tryptaseOutput(page)).toContainText("hinweisend auf eine IHR");
  await setLang(page, "en");
  await expect(page.locator("#baseline")).toHaveValue("10");
  await expect(page.locator("#acute")).toHaveValue("14");
  await expect(tryptaseOutput(page)).toContainText("The result is suggestive of an IHR");
});

test("LANG_05 NIHR SCAR GBCA state persists across EN-DE-EN", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "nihr");
  await clickSeg(page, "nihrSeverity", "severe");
  await clickSeg(page, "nihrCmtype", "gbca");
  await page.locator('.nihr-check[value="erosion"]').check();
  await expect(nihrOutput(page)).toContainText("Avoid all gadolinium-based contrast agents");
  await setLang(page, "de");
  await expectSegActive(page, "nihrSeverity", "severe");
  await expectSegActive(page, "nihrCmtype", "gbca");
  await expect(page.locator('.nihr-check[value="erosion"]')).toBeChecked();
  await expect(nihrOutput(page)).toContainText("alle gadoliniumbasierten Kontrastmittel vermeiden");
  await expect(nihrOutput(page)).not.toContainText("alle iodhaltigen Kontrastmittel vermeiden");
  await expect(nihrOutput(page)).not.toContainText("Avoid all iodine-based contrast media");
  await setLang(page, "en");
  await expectSegActive(page, "nihrSeverity", "severe");
  await expectSegActive(page, "nihrCmtype", "gbca");
  await expect(page.locator('.nihr-check[value="erosion"]')).toBeChecked();
  await expect(nihrOutput(page)).toContainText("Avoid all gadolinium-based contrast agents");
});

test("RESET_01 dirty HSR state returns to current production defaults without changing language", async ({ page }) => {
  await openApp(page);
  await setLang(page, "de");
  await openHsrTab(page, "guidance");
  await clickSeg(page, "situation", "emergency");
  await clickSeg(page, "reaction", "severe");
  await openHsrTab(page, "acute");
  await clickSeg(page, "acuteSeverity", "severe");
  await openHsrTab(page, "switch");
  await clickSeg(page, "cmtype", "gbca");
  await clickSeg(page, "gbca", "B");
  await openHsrTab(page, "nihr");
  await clickSeg(page, "nihrSeverity", "severe");
  await clickSeg(page, "nihrCmtype", "gbca");
  await clickSeg(page, "nihrCulpritKnown", "unknown");
  await page.locator('.nihr-check[value="erosion"]').check();
  await openHsrTab(page, "tryptase");
  await page.locator("#baseline").fill("10");
  await page.locator("#acute").fill("14");
  await page.locator("#calcTryptase").click();

  await resetApp(page);

  await expect(page.locator("#view-hsr")).toBeVisible();
  await expect(page.locator("#hsr-tab-guidance")).toBeVisible();
  await expect(page.locator('[data-hsr-tab="guidance"]')).toHaveClass(/active/);
  await expectSegActive(page, "situation", "elective");
  await expectSegActive(page, "reaction", "moderate");
  await expect(page.locator("#lang-de")).toHaveClass(/active/);

  await openHsrTab(page, "acute");
  await expectSegActive(page, "acuteSeverity", "mild");
  await expect(page.locator('[data-seg="acutePattern"][data-value="mild_general"]')).toBeVisible();

  await openHsrTab(page, "switch");
  await expectSegActive(page, "cmtype", "icm");
  await expect(page.locator('.seg__btn[data-seg="icm"].active')).toHaveCount(0);
  await expect(page.locator('.seg__btn[data-seg="gbca"].active')).toHaveCount(0);

  await openHsrTab(page, "nihr");
  await expectSegActive(page, "nihrSeverity", "mild");
  await expectSegActive(page, "nihrCmtype", "icm");
  await expectSegActive(page, "nihrCulpritKnown", "known");
  for (const value of ["erosion", "blister_skin", "mucosa", "extracutaneous"]) {
    await expect(page.locator(`.nihr-check[value="${value}"]`)).not.toBeChecked();
  }

  await openHsrTab(page, "tryptase");
  await expect(page.locator("#baseline")).toHaveValue("");
  await expect(page.locator("#acute")).toHaveValue("");
  await expect(tryptaseOutput(page)).toContainText("Einen akuten Tryptasewert eingeben");
  await expect(tryptaseOutput(page)).not.toContainText("Das Ergebnis ist hinweisend auf eine IHR");
  await expect(tryptaseOutput(page)).not.toContainText("Schwellenwert:");
});
