beforeEach(() => cy.visit("careers/offices/belgrade/"));

describe("Take a screenshot", () => {
  it("should take a screenshot and store it in dedicated folder", () => {
    //Just take a screenshot
    cy.screenshot("belgrade-office-screenshot", "screenshots/screenshot.cy.js");
  });
});

describe("Take a screenshot", () => {
  it("should compare screenshots using plugin", () => {
    //Compare screenshot using cypress-image-diff plugin
    cy.compareSnapshot("belgrade");
  });
});
