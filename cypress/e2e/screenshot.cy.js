describe("Take a screenshot", () => {
  before(() => cy.visit("/"));

  it("should take a screenshot and store it in dedicated folder", () => {
    cy.visit("careers/offices/belgrade/");

    //Just take a screenshot
    cy.screenshot();

    //Compare screenshot using cypress-image-diff plugin
    cy.compareSnapshot('belgrade');
  });
});
