// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect, openApp, openHsrTab, clickSeg, setLang } = require("./helpers/ui");

test("GLOBAL_02 NIHR referral and documentation block remains visible with mandatory strength", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "nihr");
  const tab = page.locator("#hsr-tab-nihr");
  await expect(tab).toContainText("Referral & documentation");
  await expect(tab).toContainText("When referring the patient to a drug allergy specialist, always specify the used contrast medium");
  await expect(tab).toContainText("including a grading scheme, is mandatory");
  await setLang(page, "de");
  await expect(tab).toContainText("Überweisung & Dokumentation");
  await expect(tab).toContainText("verpflichtend");
});
