import LandingPage from "../support/page-object/landing-page";

describe("SauceDemo website test", () => {
  beforeEach(() => {
    LandingPage.open();
  });

  it("Opens SauceDemo site, check the page title", () => {
    cy.title().should("eq", "Swag Labs");
  });

  it("Enters invalid email and password, tries to login, expects error message", () => {
    cy.fixture("login.json").then((loginData) => {
      const { invalidUser } = loginData;

      LandingPage.username.type(invalidUser.username);
      LandingPage.password.type(invalidUser.password);
      LandingPage.loginBtn.click();
      cy.url().should("eq", "https://www.saucedemo.com/");
      LandingPage.errorMsg.should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });

  it("Logs in as a standard user, expects URL to be www.saucedemo.com", () => {
    cy.fixture("login.json").then((loginData) => {
      const { validUser } = loginData;

      LandingPage.username.type(validUser.username);
      LandingPage.password.type(validUser.password);
      LandingPage.loginBtn.click();
      cy.url().should("include", "https://www.saucedemo.com/");
    });
  });

  it("Logs in as a standard user, logs out, verifies the URL", () => {
    cy.fixture("login.json").then((loginData) => {
      const { validUser } = loginData;

      LandingPage.username.type(validUser.username);
      LandingPage.password.type(validUser.password);
      LandingPage.loginBtn.click();
      LandingPage.menuBtn.click();
      LandingPage.logoutLink.click();
      cy.url().should("eq", "https://www.saucedemo.com/");
    });
  });
});
