// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect } = require("@playwright/test");
const {
  openApp,
  openHsrTab,
  clickSeg,
  switchOutput,
  switchPrinciples,
} = require("./helpers/ui");

async function openSwitch(page) {
  await openHsrTab(page, "switch");
}

test("SWITCH_PRIN_01 global optional nonvalidated practical-experience principles", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  const card = switchPrinciples(page);
  await expect(card).toBeVisible();
  await expect(card).toContainText("optional");
  await expect(card).toContainText("non-validated");
  await expect(card).toContainText("practical experience");
  await expect(card).toContainText("cannot make evidence-based recommendations");
  await expect(card).toContainText("Cross-reactivity cannot be predicted");
  await expect(card).toContainText("chemical structure");
  await expect(card).toContainText("allergy evaluation");
  await expect(card).toContainText("Brand names are shown for product identification only");
});

test("SWITCH_ICM_A practical-experience alternative B or D with carbamoyl qualifier and A-C cross-reactivity", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "icm");
  await clickSeg(page, "icm", "A");
  const out = switchOutput(page);
  await expect(out).toContainText("Practical-experience suggestion");
  await expect(out).toContainText("Group B or D");
  await expect(out).toContainText("classic carbamoyl");
  await expect(out).toContainText("High cross-reactivity between Group A and Group C");
});

test("SWITCH_ICM_B alternative from Group A, C or D", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "icm");
  await clickSeg(page, "icm", "B");
  await expect(switchOutput(page)).toContainText("Group A, C or D");
});

test("SWITCH_ICM_C alternative Group B with carbamoyl qualifier and C-A cross-reactivity", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "icm");
  await clickSeg(page, "icm", "C");
  const out = switchOutput(page);
  await expect(out).toContainText("Group B");
  await expect(out).toContainText("classic or methyl-modified carbamoyl");
  await expect(out).toContainText("High cross-reactivity between Group C and Group A");
});

test("SWITCH_ICM_D alternative Group A or B with methyl-modified carbamoyl qualifier", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "icm");
  await clickSeg(page, "icm", "D");
  const out = switchOutput(page);
  await expect(out).toContainText("Group A or B");
  await expect(out).toContainText("methyl-modified carbamoyl");
});

test("SWITCH_ICM_UNK choose alternative from B or D due to higher Group A likelihood", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "icm");
  await clickSeg(page, "icm", "unknown");
  const out = switchOutput(page);
  await expect(out).toContainText("higher likelihood");
  await expect(out).toContainText("Group A");
  await expect(out).toContainText("choose the alternative ICM from Group B or D");
  await expect(out).toContainText("High cross-reactivity between Group C and Group A");
  await expect(out).toContainText("practical-experience suggestion");
  await expect(out).toContainText("not a robust evidence-based recommendation");
});

test("SWITCH_GBCA_A alternative from Group B", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "gbca");
  await clickSeg(page, "gbca", "A");
  await expect(switchOutput(page)).toContainText("Alternative GBCA from Group B");
});

test("SWITCH_GBCA_B alternative from Group A", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "gbca");
  await clickSeg(page, "gbca", "B");
  await expect(switchOutput(page)).toContainText("Alternative GBCA from Group A");
});

test("SWITCH_GBCA_C insufficient data and no specialist-input bullet", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "gbca");
  await clickSeg(page, "gbca", "C");
  const out = switchOutput(page);
  await expect(out).toContainText("Insufficient data for empiric change advice");
  await expect(out).not.toContainText("Specialist input is preferable");
});

test("FORB_06 Switch GBCA C must not show Specialist input is preferable", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "gbca");
  await clickSeg(page, "gbca", "C");
  await expect(switchOutput(page)).not.toContainText("Specialist input is preferable");
});

test("SWITCH_GBCA_UNK cannot recommend with certainty; different routinely administered GBCA is suggested", async ({ page }) => {
  await openApp(page);
  await openSwitch(page);
  await clickSeg(page, "cmtype", "gbca");
  await clickSeg(page, "gbca", "unknown");
  const out = switchOutput(page);
  await expect(out).toContainText("not possible to recommend a regimen with certainty");
  await expect(out).toContainText("is suggested");
  await expect(out).toContainText("practical experience");
  await expect(out).toContainText("not a robust evidence-based recommendation");
});
