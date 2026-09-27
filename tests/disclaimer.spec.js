const { test, expect, openApp } = require("./helpers/ui");

test("DISC_01 sticky disclaimer initial attributes after load", async ({ page }) => {
  await openApp(page);
  const el = page.locator("#stickyDisclaimer");
  await expect(el).toBeVisible();
  await expect(el).toHaveAttribute("role", "button");
  await expect(el).toHaveAttribute("tabindex", "0");
  await expect(el).toHaveAttribute("aria-expanded", "false");
  await expect(el).not.toHaveClass(/is-open/);
});

test("DISC_02 click toggles open and closed", async ({ page }) => {
  await openApp(page);
  const el = page.locator("#stickyDisclaimer");

  await el.click();
  await expect(el).toHaveClass(/is-open/);
  await expect(el).toHaveAttribute("aria-expanded", "true");

  await el.click();
  await expect(el).not.toHaveClass(/is-open/);
  await expect(el).toHaveAttribute("aria-expanded", "false");
});

test("DISC_03 Enter toggles open and closed", async ({ page }) => {
  await openApp(page);
  const el = page.locator("#stickyDisclaimer");
  await el.focus();

  await el.press("Enter");
  await expect(el).toHaveClass(/is-open/);
  await expect(el).toHaveAttribute("aria-expanded", "true");

  await el.press("Enter");
  await expect(el).not.toHaveClass(/is-open/);
  await expect(el).toHaveAttribute("aria-expanded", "false");
});

test("DISC_04 Space toggles open and closed", async ({ page }) => {
  await openApp(page);
  const el = page.locator("#stickyDisclaimer");
  await el.focus();

  await el.press(" ");
  await expect(el).toHaveClass(/is-open/);
  await expect(el).toHaveAttribute("aria-expanded", "true");

  await el.press(" ");
  await expect(el).not.toHaveClass(/is-open/);
  await expect(el).toHaveAttribute("aria-expanded", "false");
});
