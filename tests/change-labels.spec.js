const { test, expect, openApp, setLang } = require("./helpers/ui");

const EN_LEVEL = {
  high: "Practice-changing",
  medium: "Refined",
  low: "Structural / terminological",
};

const DE_LEVEL = {
  high: "Praxisrelevant verändert",
  medium: "Präzisiert",
  low: "Strukturell / terminologisch",
};

function levelFromClass(className) {
  if (/\bchange-pill--high\b/.test(className)) return "high";
  if (/\bchange-pill--medium\b/.test(className)) return "medium";
  if (/\bchange-pill--low\b/.test(className)) return "low";
  return null;
}

async function openChanges(page) {
  await openApp(page);
  await page.locator('[data-main-nav="changes"]').click();
  await expect(page.locator("#view-changes")).toBeVisible();
}

async function expectLevelPillsMatch(page, expectedMap) {
  // Live baseline: renderChanges() clears #changesSummaryGrid and never
  // mounts renderChangeSummary(). Level pills exist on cards only.
  const listLevelPills = page.locator(
    "#changesList [data-change-card] .change-pill--high, #changesList [data-change-card] .change-pill--medium, #changesList [data-change-card] .change-pill--low"
  );
  const count = await listLevelPills.count();
  expect(count).toBeGreaterThan(0);

  const indices = count === 1 ? [0] : [0, count - 1];
  for (const i of indices) {
    const pill = listLevelPills.nth(i);
    await expect(pill).toBeVisible();
    const className = (await pill.getAttribute("class")) || "";
    const level = levelFromClass(className);
    expect(level, `unexpected pill class: ${className}`).not.toBeNull();
    await expect(pill).toHaveText(expectedMap[level]);
  }
}

test("CHGLBL_01 EN level mapping follows pill class", async ({ page }) => {
  await openChanges(page);
  await expectLevelPillsMatch(page, EN_LEVEL);
});

test("CHGLBL_02 EN mode mapping Compare / Action mode", async ({ page }) => {
  await openChanges(page);
  const modePill = page.locator("#changesList .change-pill--mode").first();
  await expect(modePill).toHaveText("Compare");

  await page.locator('[data-change-mode="action"]').click();
  await expect(modePill).toHaveText("Action mode");

  await page.locator('[data-change-mode="compare"]').click();
  await expect(modePill).toHaveText("Compare");
});

test("CHGLBL_03 DE level mapping follows pill class", async ({ page }) => {
  await openChanges(page);
  await setLang(page, "de");
  await expect(page.locator("#lang-de")).toHaveClass(/active/);
  await expectLevelPillsMatch(page, DE_LEVEL);
});

test("CHGLBL_04 DE mode mapping keeps Action mode anomaly", async ({ page }) => {
  await openChanges(page);
  await setLang(page, "de");
  const modePill = page.locator("#changesList .change-pill--mode").first();
  await expect(modePill).toHaveText("Vergleich");

  await page.locator('[data-change-mode="action"]').click();
  await expect(modePill).toHaveText("Action mode");
});
