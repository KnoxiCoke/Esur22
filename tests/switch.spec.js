// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect, openApp, openHsrTab, clickSeg, switchOutput, switchPrinciples } = require("./helpers/ui");
async function openSwitch(page) { await openHsrTab(page, "switch"); }
test("SWITCH_PRIN_01 global optional nonvalidated practical-experience principles", async ({ page }) => {
  await openApp(page); await openSwitch(page);
  const card = switchPrinciples(page);
  await expect(card).toContainText("optional");
  await expect(card).toContainText("non-validated");
  await expect(card).toContainText("practical experience");
  await expect(card).toContainText("cannot make evidence-based recommendations");
  await expect(card).toContainText("Cross-reactivity cannot be predicted");
  await expect(card).toContainText("allergy evaluation");
  await expect(card).toContainText("Brand names are shown for product identification only");
});
test("SWITCH_ICM_A practical-experience alternative B or D with carbamoyl qualifier and A-C cross-reactivity", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "icm"); await clickSeg(page, "icm", "A");
  const out = switchOutput(page);
  await expect(out).toContainText("Group B or D");
  await expect(out).toContainText("classic carbamoyl");
  await expect(out).toContainText("High cross-reactivity between Group A and Group C");
});
test("SWITCH_ICM_B alternative from Group A, C or D", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "icm"); await clickSeg(page, "icm", "B");
  await expect(switchOutput(page)).toContainText("Group A, C or D");
});
test("SWITCH_ICM_C alternative Group B with carbamoyl qualifier and C-A cross-reactivity", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "icm"); await clickSeg(page, "icm", "C");
  const out = switchOutput(page);
  await expect(out).toContainText("classic or methyl-modified carbamoyl");
  await expect(out).toContainText("High cross-reactivity between Group C and Group A");
});
test("SWITCH_ICM_D alternative Group A or B with methyl-modified carbamoyl qualifier", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "icm"); await clickSeg(page, "icm", "D");
  const out = switchOutput(page);
  await expect(out).toContainText("Group A or B");
  await expect(out).toContainText("methyl-modified carbamoyl");
});
test("SWITCH_ICM_UNK choose alternative from B or D due to higher Group A likelihood", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "icm"); await clickSeg(page, "icm", "unknown");
  const out = switchOutput(page);
  await expect(out).toContainText("choose the alternative ICM from Group B or D");
  await expect(out).toContainText("not a robust evidence-based recommendation");
});
test("SWITCH_GBCA_A alternative from Group B", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "gbca"); await clickSeg(page, "gbca", "A");
  await expect(switchOutput(page)).toContainText("Alternative GBCA from Group B");
});
test("SWITCH_GBCA_B alternative from Group A", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "gbca"); await clickSeg(page, "gbca", "B");
  await expect(switchOutput(page)).toContainText("Alternative GBCA from Group A");
});
test("SWITCH_GBCA_C insufficient data and no specialist-input bullet", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "gbca"); await clickSeg(page, "gbca", "C");
  await expect(switchOutput(page)).toContainText("Insufficient data for empiric change advice");
  await expect(switchOutput(page)).not.toContainText("Specialist input is preferable");
});
test("FORB_06 Switch GBCA C must not show Specialist input is preferable", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "gbca"); await clickSeg(page, "gbca", "C");
  await expect(switchOutput(page)).not.toContainText("Specialist input is preferable");
});
test("SWITCH_GBCA_UNK cannot recommend with certainty; different routinely administered GBCA is suggested", async ({ page }) => {
  await openApp(page); await openSwitch(page); await clickSeg(page, "cmtype", "gbca"); await clickSeg(page, "gbca", "unknown");
  const out = switchOutput(page);
  await expect(out).toContainText("is suggested");
  await expect(out).toContainText("not a robust evidence-based recommendation");
});
test("SWITCH_BRAND_01 ICM brand names are visible product identifiers by group", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "icm");
  const a = page.locator("#icm-group-a-names");
  await expect(a).toContainText("Omnipaque® — iohexol");
  await expect(a).toContainText("Visipaque® — iodixanol");
  await expect(a).toContainText("Iomeron® — iomeprol");
  await expect(a).toContainText("Optiray® — ioversol");
  await expect(page.locator("#icm-group-b-names")).toContainText("Iopamiro® / Isovue® — iopamidol");
  await expect(page.locator("#icm-group-c-names")).toContainText("Ultravist® — iopromide");
  await expect(page.locator("#icm-group-d-names")).toContainText("Xenetix® — iobitridol");
});
test("SWITCH_BRAND_02 GBCA brand names are visible product identifiers by group", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "gbca");
  await expect(page.locator("#gbca-group-a-names")).toContainText("Dotarem® / Clariscan® — gadoterate meglumine");
  const b = page.locator("#gbca-group-b-names");
  await expect(b).toContainText("ProHance® — gadoteridol");
  await expect(b).toContainText("Gadovist® / Gadavist® — gadobutrol");
  await expect(page.locator("#gbca-group-c-names")).toContainText("Elucirem® / Vueway® — gadopiclenol");
});
