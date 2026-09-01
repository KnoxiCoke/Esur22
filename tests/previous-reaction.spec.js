// HSR_REGRESSION_01 baseline: bc7e4e3df7cf4f2dde5093ff9575c985b3c5048b
const { test, expect, openApp, openHsrTab, clickSeg, flowOutput, setLang } = require("./helpers/ui");

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
  await expect(out).toContainText("Emergency premedication protocol: 50 mg prednisolone IV (or equivalent) ≥ 30 min before contrast medium administration.");
  await expect(out).toContainText("Emergency premedication protocol: 2 mg clemastine IV (or equivalent) ≥ 30 min before contrast medium administration.");
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

test("PREV_01 elective mild: interview optional referral observation never-deny; no premed postpone or nearby team", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "elective", "mild");
  const out = flowOutput(page);
  await expect(out).toContainText("Elective imaging — prior mild immediate hypersensitivity reaction");
  await expect(out).toContainText("Interview the patient about their previous hypersensitivity reaction");
  await expect(out).toContainText("Optionally, refer the patient to a drug allergy specialist");
  await expect(out).toContainText("when the local drug allergy specialist capacity is sufficient");
  await expect(out).toContainText("Optimize the allergy registration in the electronic health record");
  await expect(out).toContainText("Apply the advice of the drug allergy specialist");
  await expect(out).toContainText("choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known");
  await expect(out).toContainText("at least 30 min with the IV line in place");
  await expect(out).toContainText("Be prepared and vigilant");
  await expect(out).toContainText("referral to a drug allergy specialist is mandatory");
  await expect(out).toContainText("Consider an alternative imaging modality");
  await expect(out).toContainText("Never deny a patient a clinically well-indicated enhanced examination");
  await expect(out).not.toContainText("premedication");
  await expect(out).not.toContainText("trained imaging or emergency room physician");
  await expect(out).not.toContainText("rapid response");
  await expect(out).not.toContainText("Postpone imaging");
});

test("PREV_02 emergency mild uses the same medical list with emergency title", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "emergency", "mild");
  const out = flowOutput(page);
  await expect(out).toContainText("Emergency imaging — prior mild immediate hypersensitivity reaction");
  await expect(out).toContainText("Interview the patient about their previous hypersensitivity reaction");
  await expect(out).toContainText("Optionally, refer the patient to a drug allergy specialist");
  await expect(out).toContainText("when the local drug allergy specialist capacity is sufficient");
  await expect(out).toContainText("Optimize the allergy registration in the electronic health record");
  await expect(out).toContainText("Apply the advice of the drug allergy specialist");
  await expect(out).toContainText("choose a different iodine-based contrast medium or gadolinium-based contrast agent if the culprit contrast agent is known");
  await expect(out).toContainText("at least 30 min with the IV line in place");
  await expect(out).toContainText("Be prepared and vigilant");
  await expect(out).toContainText("referral to a drug allergy specialist is mandatory");
  await expect(out).toContainText("Consider an alternative imaging modality");
  await expect(out).toContainText("Never deny a patient a clinically well-indicated enhanced examination");
  await expect(out).not.toContainText("premedication");
  await expect(out).not.toContainText("trained imaging or emergency room physician");
  await expect(out).not.toContainText("rapid response");
  await expect(out).not.toContainText("resuscitation");
  await expect(out).not.toContainText("Postpone imaging");
});

test("GLOBAL_01 Previous Reaction referral and documentation block is visible independent of severity", async ({ page }) => {
  await openApp(page);
  await setPrevious(page, "elective", "mild");
  const tab = page.locator("#hsr-tab-guidance");
  await expect(tab).toContainText("Referral & documentation");
  await expect(tab).toContainText("When referring the patient to a drug allergy specialist, always specify the used contrast medium");
  await expect(tab).toContainText("Detailed documentation of the culprit contrast agent and the severity of the reaction, including a grading scheme, is mandatory");
  await setPrevious(page, "emergency", "severe");
  await expect(tab).toContainText("Referral & documentation");
  await expect(tab).toContainText("is mandatory");
  await setLang(page, "de");
  await expect(tab).toContainText("Überweisung & Dokumentation");
  await expect(tab).toContainText("verwendete Kontrastmittel angeben");
  await expect(tab).toContainText("verpflichtend");
});

test("PREV_ROUTING_01 previous-reaction tab is scoped to immediate reactions", async ({ page }) => {
  await openApp(page);
  await openHsrTab(page, "guidance");
  await expect(page.locator("#hsr-tab-guidance")).toContainText(
    "Educational support for prior immediate hypersensitivity reactions. For non-immediate reactions, use the NIHR module."
  );
});
