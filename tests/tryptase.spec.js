// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect, openApp, openHsrTab, tryptaseOutput, resetApp } = require("./helpers/ui");

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
  await expect(out).toContainText("Threshold: 14.00 ng/mL");
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

test("TRYP_07 explicit 0 / 0 is a valid numeric input below threshold", async ({ page }) => {
  await openApp(page);
  await calculate(page, 0, 0);
  const out = tryptaseOutput(page);
  await expect(out).toContainText("Threshold: 2.00 ng/mL");
  await expect(out).toContainText("does not show an acute-over-baseline elevation");
  await expect(out).not.toContainText("Please enter valid numeric values");
  await expect(out).not.toContainText("The result is suggestive of an IHR");
});

test("TRYP_08 reset clears tryptase inputs and restores default result hint", async ({ page }) => {
  await openApp(page);
  await calculate(page, 10, 14);
  await expect(tryptaseOutput(page)).toContainText("The result is suggestive of an IHR");
  await resetApp(page);
  await expect(page.locator("#baseline")).toHaveValue("");
  await expect(page.locator("#acute")).toHaveValue("");
  await openHsrTab(page, "tryptase");
  await expect(tryptaseOutput(page)).toContainText("Enter an acute tryptase value obtained during or within 4 h");
  await expect(tryptaseOutput(page)).not.toContainText("The result is suggestive of an IHR");
  await expect(tryptaseOutput(page)).not.toContainText("14.00");
});

test("TRYP_09 Part 2 sampling guidance is visible and not merged with Part 1 1–2 h consider rule", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "tryptase");
  const sampling = page.locator("#hsr-tab-tryptase .card").first();
  await expect(sampling).toContainText("Measure serum tryptase within 1–4 h from the start of all moderate-to-severe immediate hypersensitivity reactions");
  await expect(sampling).toContainText("A second measurement after ≥ 24 h serves as a baseline");
  await expect(sampling).toContainText("Ideally, three samples should be obtained");
  await expect(sampling).toContainText("more than 24 h after all signs and symptoms have subsided");
  await expect(sampling).not.toContainText("ideally 1–2 h after start of the reaction");
});
