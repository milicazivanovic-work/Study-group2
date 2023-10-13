describe("Work & Co website test", () => {
  it("Opens W&C site, verifies the page title and headline", () => {
    cy.visit("https://work.co/");
    cy.title().should("eq", "Work & Co | Digital Product Agency");
    cy.get('[data-test-id="header-title-text"]').should(
      "have.text",
      "We solve complex problems through design & technology"
    );
  });

  it("Opens W&C site, clicks on the W&C logo and checks page URL", () => {
    cy.visit("https://work.co/");
    cy.get('[data-test-id="global-menu-btn"]').click();
    cy.url().should("eq", "https://work.co/grid");
  });

  it('Opens W&C site, clicks on the W&C logo, clicks on "Select Clients" and checks page URL', () => {
    cy.visit("https://work.co/");
    cy.get('[data-test-id="global-menu-btn"]').click();
    cy.get('[data-test-id="grid-select-clients-link"]').click();
    cy.url().should("eq", "https://work.co/clients/");
  });

  it('Opens W&C site, clicks on the W&C logo, clicks on "Expertise & Capabilities" and checks page URL', () => {
    cy.visit("https://work.co/");
    cy.get('[data-test-id="global-menu-btn"]').click();
    cy.get('[data-test-id="grid-expertise-capabilities-link"]').click();
    cy.url().should("eq", "https://work.co/company/");
  });
});
