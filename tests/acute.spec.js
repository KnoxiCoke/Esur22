// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect } = require("@playwright/test");
const {
  openApp,
  openHsrTab,
  clickSeg,
  acuteOutput,
  acuteImmediate,
} = require("./helpers/ui");

async function openAcute(page) {
  await openHsrTab(page, "acute");
}

test("ACUTE_IMM_01 immediate actions present; hypotension prone rule absent", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  const imm = acuteImmediate(page);
  await expect(imm).toBeVisible();
  await expect(imm).toContainText("progression of the reaction");
  await expect(imm).toContainText("mucosal edema");
  await expect(imm).toContainText("heart rate");
  await expect(imm).toContainText("arterial blood pressure");
  await expect(imm).toContainText("consciousness");
  await expect(imm).toContainText("ABCDE");
  await expect(imm).toContainText("Stop infusing contrast agent");
  await expect(imm).toContainText("crystalloid");
  await expect(imm).toContainText("sit up");
  await expect(imm).toContainText("serum tryptase");
  await expect(imm).toContainText("1–2 h");
  await expect(imm).toContainText("electronic health record");
  await expect(imm).not.toContainText("prone position");
  await expect(imm).not.toContainText("raise legs");
});

test("FORB_04 acute does not show prone position or raise legs", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await expect(acuteImmediate(page)).not.toContainText("prone");
  await expect(acuteImmediate(page)).not.toContainText("raise legs");
  await expect(acuteOutput(page)).not.toContainText("prone");
  await expect(acuteOutput(page)).not.toContainText("raise legs");
});

test("ACUTE_02 moderate diffuse urticaria management", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "moderate");
  await clickSeg(page, "acutePattern", "moderate_urticaria");
  const out = acuteOutput(page);
  await expect(out).toContainText("Diffuse urticaria / diffuse erythema");
  await expect(out).toContainText("chlorphenamine 20 mg");
  await expect(out).toContainText("clemastine 2 mg IV");
  await expect(out).toContainText("monitoring vital functions");
  await expect(out).toContainText("hypotension");
  await expect(out).toContainText("anaphylaxis");
});

test("ACUTE_03 moderate facial edema without stridor", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "moderate");
  await clickSeg(page, "acutePattern", "moderate_angioedema");
  const out = acuteOutput(page);
  await expect(out).toContainText("Facial edema without stridor");
  await expect(out).toContainText("10 to 15 L/min");
  await expect(out).toContainText("non-rebreathing mask");
  await expect(out).toContainText("chlorphenamine 20 mg");
  await expect(out).toContainText("clemastine 2 mg IV");
  await expect(out).toContainText("stridor");
  await expect(out).toContainText("anaphylaxis");
});

test("ACUTE_04 moderate bronchospasm protects published 2.5–5 µg nebulization unit", async ({ page }) => {
  // SOURCE VALUE REPRODUCED AS PUBLISHED — DO NOT SILENTLY CORRECT
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "moderate");
  await clickSeg(page, "acutePattern", "moderate_bronchospasm");
  const out = acuteOutput(page);
  await expect(out).toContainText("Mild bronchospasm");
  await expect(out).toContainText("2–4 inhalations");
  await expect(out).toContainText("100 µg");
  await expect(out).toContainText("20 min");
  await expect(out).toContainText("2.5–5 µg");
  await expect(out).toContainText("3 mL");
  await expect(out).toContainText("adrenaline 0.5 mg IM");
  await expect(out).toContainText("rapid response team");
  await expect(out).toContainText("heart rate");
});

test("ACUTE_05 severe anaphylaxis doses routes and CPR", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "severe");
  const out = acuteOutput(page);
  await expect(out).toContainText("Anaphylactic reaction or stridor");
  await expect(out).toContainText("Call the rapid response team");
  await expect(out).toContainText("10 to 15 L/min");
  await expect(out).toContainText("0.5 mg adrenaline IM");
  await expect(out).toContainText("lateral upper thigh");
  await expect(out).toContainText("guided by heart rate");
  await expect(out).toContainText("crystalloid 500 mL");
  await expect(out).toContainText("10 min");
  await expect(out).toContainText("2–10 inhalations");
  await expect(out).toContainText("2.5–5 µg");
  await expect(out).toContainText("3 mL");
  await expect(out).toContainText("chlorphenamine 20 mg");
  await expect(out).toContainText("clemastine 2 mg IV");
  await expect(out).toContainText("Consider adding corticosteroid");
  await expect(out).toContainText("prednisolone 50 mg IV");
  await expect(out).toContainText("Call the CPR team");
  await expect(out).toContainText("Start CPR");
});

test("ACUTE_STATE_01 mild shows only the mild pattern", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "mild");
  await expect(page.locator('[data-seg="acutePattern"][data-value="mild_general"]')).toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_urticaria"]')).not.toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_angioedema"]')).not.toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_bronchospasm"]')).not.toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="severe_anaphylaxis"]')).not.toBeVisible();
});

test("ACUTE_STATE_02 moderate shows only the three moderate patterns", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "moderate");
  await expect(page.locator('[data-seg="acutePattern"][data-value="mild_general"]')).not.toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_urticaria"]')).toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_angioedema"]')).toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_bronchospasm"]')).toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="severe_anaphylaxis"]')).not.toBeVisible();
});

test("ACUTE_STATE_03 severe shows only anaphylaxis pattern", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "severe");
  await expect(page.locator('[data-seg="acutePattern"][data-value="mild_general"]')).not.toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_urticaria"]')).not.toBeVisible();
  await expect(page.locator('[data-seg="acutePattern"][data-value="severe_anaphylaxis"]')).toBeVisible();
});

test("ACUTE_STATE_04 switching from moderate angioedema to mild drops other-severity content", async ({ page }) => {
  await openApp(page);
  await openAcute(page);
  await clickSeg(page, "acuteSeverity", "moderate");
  await clickSeg(page, "acutePattern", "moderate_angioedema");
  await expect(acuteOutput(page)).toContainText("Facial edema without stridor");
  await clickSeg(page, "acuteSeverity", "mild");
  await expect(page.locator('[data-seg="acutePattern"][data-value="moderate_angioedema"]')).not.toBeVisible();
  await expect(acuteOutput(page)).not.toContainText("Facial edema without stridor");
});
