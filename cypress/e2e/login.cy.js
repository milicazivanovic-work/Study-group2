describe("SauceDemo website test", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Opens SauceDemo site, check the page title", () => {
    cy.title().should("eq", "Swag Labs");
  });

  it("Enters invalid email and password, tries to login, expects error message", () => {
    cy.fixture("login.json").then((loginData) => {
      const { invalidUser } = loginData;

      cy.get('[data-test="username"]').type(invalidUser.username);
      cy.get('[data-test="password"]').type(invalidUser.password);
      cy.get('[data-test="login-button"]').click();
      cy.url().should("eq", "https://www.saucedemo.com/");
      cy.get('[data-test="error"]').should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });

  it("Logs in as a standard user, expects URL to be www.saucedemo.com", () => {
    cy.fixture("login.json").then((loginData) => {
      const { validUser } = loginData;

      cy.get('[data-test="username"]').type(validUser.username);
      cy.get('[data-test="password"]').type(validUser.password);
      cy.get('[data-test="login-button"]').click();
      cy.url().should("include", "https://www.saucedemo.com/");
    });
  });

  it("Logs in as a standard user, logs out, verifies the URL", () => {
    cy.fixture("login.json").then((loginData) => {
      const { validUser } = loginData;

      cy.get('[data-test="username"]').type(validUser.username);
      cy.get('[data-test="password"]').type(validUser.password);
      cy.get('[data-test="login-button"]').click();
      cy.get("#react-burger-menu-btn").click();
      cy.get("#logout_sidebar_link").click();
      cy.url().should("eq", "https://www.saucedemo.com/");
    });
  });
});
