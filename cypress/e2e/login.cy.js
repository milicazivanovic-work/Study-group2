describe("SauceDemo website test", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("Opens SauceDemo site, check the page title", () => {
    cy.title().should("eq", "Swag Labs");
  });

  it("Enters invalid email and password, tries to login, expects error message", () => {
    cy.get('[data-test="username"]').type("milica.zivanovic@work.co");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Logs in as a standard user, expects URL to be www.soucedemo.com", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("contains", "https://www.saucedemo.com/");
  });
});
