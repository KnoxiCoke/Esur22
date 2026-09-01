// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect } = require("@playwright/test");
const { openApp, openHsrTab, setLang } = require("./helpers/ui");

test("SMOKE_01 app loads without JS error; HSR and Previous reaction visible", async ({ page }) => {
  const errors = await openApp(page);
  await expect(page.locator("#view-hsr")).toBeVisible();
  await expect(page.locator("#hsr-tab-guidance")).toBeVisible();
  await expect(page.locator('[data-hsr-tab="guidance"]')).toHaveClass(/active/);
  expect(errors, errors.join("\n")).toEqual([]);
});

test("SMOKE_02 all five HSR tabs can be opened", async ({ page }) => {
  const errors = await openApp(page);
  const tabs = ["guidance", "acute", "switch", "tryptase", "nihr"];
  const views = {
    guidance: "#hsr-tab-guidance",
    acute: "#hsr-tab-acute",
    switch: "#hsr-tab-switch",
    tryptase: "#hsr-tab-tryptase",
    nihr: "#hsr-tab-nihr",
  };
  for (const tab of tabs) {
    await openHsrTab(page, tab);
    await expect(page.locator(views[tab])).toBeVisible();
    for (const other of tabs) {
      if (other === tab) continue;
      await expect(page.locator(views[other])).toBeHidden();
    }
  }
  expect(errors, errors.join("\n")).toEqual([]);
});

test("SMOKE_03 EN to DE to EN without JS error", async ({ page }) => {
  const errors = await openApp(page);
  await setLang(page, "de");
  await expect(page.locator("#lang-de")).toHaveClass(/active/);
  await setLang(page, "en");
  await expect(page.locator("#lang-en")).toHaveClass(/active/);
  expect(errors, errors.join("\n")).toEqual([]);
});
