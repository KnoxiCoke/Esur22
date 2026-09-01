// ESUR_REFACTOR_PREP_01 — technical Practice Changes smoke only.
// No 2018/2025 medical content assertions.
const { test, expect, openApp, setLang, resetApp } = require("./helpers/ui");

const CHANGE_IDS = [
  "publication_structure",
  "hypersensitivity",
  "ca_aki_terminology",
  "waiting_times",
  "laboratory_interference",
  "extravasation",
  "dialysis_refinement",
  "new_clinical_scenarios",
  "other_reorganized_topics",
];

async function openChangesView(page) {
  await page.locator('[data-main-nav="changes"]').click();
}

test("CHG_SMOKE_01 Practice Changes view opens; HSR view hidden", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await expect(page.locator("#view-changes")).toBeVisible();
  await expect(page.locator("#view-hsr")).toBeHidden();
  await expect(page.locator('[data-main-nav="changes"]')).toHaveClass(/active/);
  await expect(page.locator('[data-main-nav="hsr"]')).not.toHaveClass(/active/);
});

test("CHG_SMOKE_02 nine change cards render with stable data-change-card ids", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  const cards = page.locator("#changesList [data-change-card]");
  await expect(cards).toHaveCount(9);
  for (const id of CHANGE_IDS) {
    await expect(page.locator(`[data-change-card="${id}"]`)).toHaveCount(1);
  }
});

test("CHG_SMOKE_03 relevance filter reduces visible cards by level", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await page.locator('[data-change-filter="high"]').click();
  await expect(page.locator("#changesList [data-change-card]")).toHaveCount(4);
  await page.locator('[data-change-filter="medium"]').click();
  await expect(page.locator("#changesList [data-change-card]")).toHaveCount(3);
  await page.locator('[data-change-filter="low"]').click();
  await expect(page.locator("#changesList [data-change-card]")).toHaveCount(2);
  await page.locator('[data-change-filter="all"]').click();
  await expect(page.locator("#changesList [data-change-card]")).toHaveCount(9);
});

test("CHG_SMOKE_04 search filters the card list without leaving the Changes view", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  // Token unique to laboratory_interference flatten text; not a medical assertion.
  await page.locator("#changesSearch").fill("egfr-based");
  await expect(page.locator("#changesList [data-change-card]")).toHaveCount(1);
  await expect(page.locator('[data-change-card="laboratory_interference"]')).toHaveCount(1);
  await expect(page.locator("#view-changes")).toBeVisible();
});

test("CHG_SMOKE_05 card toggle adds and removes is-open", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  const card = page.locator('[data-change-card="publication_structure"]');
  await expect(card).not.toHaveClass(/is-open/);
  await page.locator('[data-change-toggle="publication_structure"]').click();
  await expect(card).toHaveClass(/is-open/);
  await page.locator('[data-change-toggle="publication_structure"]').click();
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

test("CHG_SMOKE_07 reset from Changes returns to HSR Previous reaction", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await page.locator('[data-change-filter="high"]').click();
  await resetApp(page);
  await expect(page.locator("#view-hsr")).toBeVisible();
  await expect(page.locator("#view-changes")).toBeHidden();
  await expect(page.locator("#hsr-tab-guidance")).toBeVisible();
  await expect(page.locator('[data-main-nav="hsr"]')).toHaveClass(/active/);
});

test("CHG_SMOKE_08 EN/DE switch on Changes view does not throw and keeps nine cards", async ({ page }) => {
  await openApp(page);
  await openChangesView(page);
  await setLang(page, "de");
  await expect(page.locator("#lang-de")).toHaveClass(/active/);
  await expect(page.locator("#changesList [data-change-card]")).toHaveCount(9);
  await setLang(page, "en");
  await expect(page.locator("#lang-en")).toHaveClass(/active/);
  await expect(page.locator("#changesList [data-change-card]")).toHaveCount(9);
});
