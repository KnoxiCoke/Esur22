// ESUR_REFACTOR_PREP_01_FIX — technical Practice Changes smoke only.
// Does not freeze topic inventory, card IDs, or level counts.
// No 2018/2025 medical content assertions.
const { test, expect, openApp, setLang, resetApp } = require("./helpers/ui");

const cards = (page) => page.locator("#changesList [data-change-card]");

async function openChangesView(page) {
  await page.locator('[data-main-nav="changes"]').click();
  await expect(page.locator("#view-changes")).toBeVisible();
}

async function cardCount(page) {
  return cards(page).count();
}

test("CHG_SMOKE_01 Practice Changes view opens; HSR view hidden", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await expect(page.locator("#view-hsr")).toBeHidden();
  await expect(page.locator('[data-main-nav="changes"]')).toHaveClass(/active/);
  await expect(page.locator('[data-main-nav="hsr"]')).not.toHaveClass(/active/);
});

test("CHG_SMOKE_02 initial Changes list renders at least one card", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await expect(cards(page).first()).toBeVisible();
  expect(await cardCount(page)).toBeGreaterThan(0);
});

test("CHG_SMOKE_03 relevance filter changes the rendered card count", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  const initial = await cardCount(page);
  expect(initial).toBeGreaterThan(0);

  await page.locator('[data-change-filter="high"]').click();
  const highCount = await cardCount(page);
  expect(highCount).not.toBe(initial);

  await page.locator('[data-change-filter="all"]').click();
  await expect(cards(page)).toHaveCount(initial);
});

test("CHG_SMOKE_04 search reduces the list; clearing search restores the initial count", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  const initial = await cardCount(page);
  expect(initial).toBeGreaterThan(0);

  // Technical token only: reduces flatten-text matches. Not a content assertion.
  await page.locator("#changesSearch").fill("egfr-based");
  const filtered = await cardCount(page);
  expect(filtered).toBeGreaterThan(0);
  expect(filtered).toBeLessThan(initial);
  await expect(page.locator("#view-changes")).toBeVisible();

  await page.locator("#changesSearch").fill("");
  await expect(cards(page)).toHaveCount(initial);
});

test("CHG_SMOKE_05 first card toggle adds and removes is-open", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  const card = cards(page).first();
  const toggle = card.locator("[data-change-toggle]");
  await expect(card).not.toHaveClass(/is-open/);
  await toggle.click();
  await expect(card).toHaveClass(/is-open/);
  await toggle.click();
  await expect(card).not.toHaveClass(/is-open/);
});

test("CHG_SMOKE_06 compare / action mode buttons toggle active class", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await expect(page.locator('[data-change-mode="compare"]')).toHaveClass(/active/);
  await page.locator('[data-change-mode="action"]').click();
  await expect(page.locator('[data-change-mode="action"]')).toHaveClass(/active/);
  await expect(page.locator('[data-change-mode="compare"]')).not.toHaveClass(/active/);
  await page.locator('[data-change-mode="compare"]').click();
  await expect(page.locator('[data-change-mode="compare"]')).toHaveClass(/active/);
});

test("CHG_SMOKE_07 reset returns to HSR and restores Changes controls", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await page.locator('[data-change-filter="high"]').click();
  await page.locator('[data-change-mode="action"]').click();
  await page.locator("#changesSearch").fill("egfr-based");

  await resetApp(page);

  await expect(page.locator("#view-hsr")).toBeVisible();
  await expect(page.locator("#view-changes")).toBeHidden();
  await expect(page.locator("#hsr-tab-guidance")).toBeVisible();
  await expect(page.locator('[data-main-nav="hsr"]')).toHaveClass(/active/);
  await expect(page.locator("#changesSearch")).toHaveValue("");
  await expect(page.locator('[data-change-filter="all"]')).toHaveClass(/active/);
  await expect(page.locator('[data-change-mode="compare"]')).toHaveClass(/active/);
});

test("CHG_SMOKE_08 EN/DE/EN keeps Changes view and Filter/Mode/Search state", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await page.locator('[data-change-filter="high"]').click();
  await page.locator('[data-change-mode="action"]').click();
  await page.locator("#changesSearch").fill("egfr-based");

  await setLang(page, "de");
  await expect(page.locator("#lang-de")).toHaveClass(/active/);
  await expect(page.locator("#view-changes")).toBeVisible();
  await expect(page.locator('[data-change-filter="high"]')).toHaveClass(/active/);
  await expect(page.locator('[data-change-mode="action"]')).toHaveClass(/active/);
  await expect(page.locator("#changesSearch")).toHaveValue("egfr-based");

  await setLang(page, "en");
  await expect(page.locator("#lang-en")).toHaveClass(/active/);
  await expect(page.locator("#view-changes")).toBeVisible();
  await expect(page.locator('[data-change-filter="high"]')).toHaveClass(/active/);
  await expect(page.locator('[data-change-mode="action"]')).toHaveClass(/active/);
  await expect(page.locator("#changesSearch")).toHaveValue("egfr-based");
});
