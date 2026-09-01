// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect } = require("@playwright/test");
const { openApp, openHsrTab, tryptaseOutput } = require("./helpers/ui");

async function calculate(page, baseline, acute) {
  await openHsrTab(page, "tryptase");
  const b = page.locator("#baseline");
  const a = page.locator("#acute");
  await b.fill("");
  await a.fill("");
  if (baseline !== null) await b.fill(String(baseline));
  if (acute !== null) await a.fill(String(acute));
  await page.locator("#calcTryptase").click();
}

test("TRYP_01 blank / blank is invalid", async ({ page }) => {
  await openApp(page);
  await calculate(page, null, null);
  await expect(tryptaseOutput(page)).toContainText("Please enter valid numeric values");
});

test("TRYP_02 blank / 10 is invalid", async ({ page }) => {
  await openApp(page);
  await calculate(page, null, 10);
  await expect(tryptaseOutput(page)).toContainText("Please enter valid numeric values");
});

test("TRYP_03 10 / blank is invalid", async ({ page }) => {
  await openApp(page);
  await calculate(page, 10, null);
  await expect(tryptaseOutput(page)).toContainText("Please enter valid numeric values");
});

test("TRYP_04 negative value is invalid", async ({ page }) => {
  await openApp(page);
  await calculate(page, -1, 10);
  await expect(tryptaseOutput(page)).toContainText("Please enter valid numeric values");
});

test("TRYP_05 baseline 10 / acute 14 meets threshold and is suggestive of an IHR", async ({ page }) => {
  await openApp(page);
  await calculate(page, 10, 14);
  const out = tryptaseOutput(page);
  await expect(out).toContainText("14.00");
  await expect(out).toContainText("The result is suggestive of an IHR");
  await expect(out).not.toContainText("does not show an acute-over-baseline elevation");
});

test("TRYP_06 baseline 10 / acute 13.99 is below threshold", async ({ page }) => {
  await openApp(page);
  await calculate(page, 10, 13.99);
  const out = tryptaseOutput(page);
  await expect(out).toContainText("does not show an acute-over-baseline elevation");
  await expect(out).not.toContainText("The result is suggestive of an IHR");
});

test("TRYP_10 formula and suggestive wording remain visible after a positive result", async ({ page }) => {
  await openApp(page);
  await calculate(page, 10, 14);
  const out = tryptaseOutput(page);
  await expect(out).toContainText("2 ng/mL + (1.2 × baseline tryptase)");
  await expect(out).toContainText("suggestive of an IHR");
  await expect(out).not.toContainText("proves");
  await expect(out).not.toContainText("confirms an IHR");
  await expect(out).not.toContainText("excludes");
});
