// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect } = require("@playwright/test");
const { openApp, openHsrTab, clickSeg, flowOutput } = require("./helpers/ui");

async function setPrevious(page, situation, reaction) {
  await openHsrTab(page, "guidance");
  await clickSeg(page, "situation", situation);
  await clickSeg(page, "reaction", reaction);
}

test("PREV_03 elective moderate: postpone and specialist advice; no emergency physician or premedication", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "elective", "moderate");
  const out = flowOutput(page);
  await expect(out).toContainText("Elective imaging — prior moderate immediate hypersensitivity reaction");
  await expect(out).toContainText("Postpone imaging to wait for the results of the allergy analysis");
  await expect(out).toContainText("Apply the advice of the drug allergy specialist");
  await expect(out).toContainText("Refer the patient to a drug allergy specialist");
  await expect(out).not.toContainText("trained imaging or emergency room physician");
  await expect(out).not.toContainText("premedication");
  await expect(out).not.toContainText("prednisolone");
  await expect(out).not.toContainText("clemastine");
});

test("PREV_04 emergency moderate: trained imaging or ER physician; choose different if culprit known; no postpone or premed or RRT nearby", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "emergency", "moderate");
  const out = flowOutput(page);
  await expect(out).toContainText("Emergency imaging — prior moderate immediate hypersensitivity reaction");
  await expect(out).toContainText("Have a trained imaging or emergency room physician nearby");
  await expect(out).toContainText("Choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast medium is known");
  await expect(out).not.toContainText("Postpone imaging");
  await expect(out).not.toContainText("premedication");
  await expect(out).not.toContainText("rapid response");
  await expect(out).not.toContainText("resuscitation");
});

test("PREV_05 elective severe: RRT nearby and postpone; no emergency premedication protocol", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "elective", "severe");
  const out = flowOutput(page);
  await expect(out).toContainText("Elective imaging — prior severe immediate hypersensitivity reaction");
  await expect(out).toContainText("rapid response");
  await expect(out).toContainText("resuscitation");
  await expect(out).toContainText("Postpone imaging to wait for the results of the allergy analysis");
  await expect(out).toContainText("Apply the advice of the drug allergy specialist");
  await expect(out).not.toContainText("Consider administration of premedication");
  await expect(out).not.toContainText("Emergency premedication protocol");
  await expect(out).not.toContainText("50 mg prednisolone");
});

test("PREV_06 emergency severe: consider premedication plus protocol and separate routine-not-recommended context", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "emergency", "severe");
  const out = flowOutput(page);
  await expect(out).toContainText("Emergency imaging — prior severe immediate hypersensitivity reaction");
  await expect(out).toContainText("rapid response");
  await expect(out).toContainText("Consider administration of premedication");
  await expect(out).toContainText("50 mg prednisolone IV");
  await expect(out).toContainText("2 mg clemastine IV");
  await expect(out).toContainText("≥ 30 min");
  await expect(out).toContainText("Routine premedication is not recommended");
  await expect(out).toContainText("Premedication is optional in emergency situations");
  await expect(out).toContainText("Choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast medium is known");
  await expect(out).not.toContainText("Premedication is recommended");
});

test("PREV_NEG_01 no visible unclear previous-reaction severity or legacy unclear flow", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "guidance");
  const severityCard = page.locator("#hsr-tab-guidance .card").filter({
    has: page.locator('[data-seg="reaction"]'),
  });
  await expect(severityCard.locator('[data-value="unclear"]')).toHaveCount(0);
  await expect(severityCard).not.toContainText("Unclear");
  await expect(flowOutput(page)).not.toContainText("unclear");
});

test("FORB_01 previous mild has no premedication", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "elective", "mild");
  await expect(flowOutput(page)).not.toContainText("premedication");
  await expect(flowOutput(page)).not.toContainText("prednisolone");
});

test("FORB_02 previous moderate emergency has no premedication", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "emergency", "moderate");
  await expect(flowOutput(page)).not.toContainText("premedication");
});

test("FORB_03 previous severe elective has no emergency premedication protocol", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "elective", "severe");
  const out = flowOutput(page);
  await expect(out).not.toContainText("Emergency premedication protocol");
  await expect(out).not.toContainText("Consider administration of premedication");
});

test("FORB_07 no legacy previous unclear severity option", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "guidance");
  await expect(page.locator('#hsr-tab-guidance [data-value="unclear"]')).toHaveCount(0);
});
