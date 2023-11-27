import HomePage from "../support/page-object/home-page";

before(() => {
  cy.fixture("login.json").then((loginData) => {
    const { validUser } = loginData;

    cy.login(validUser.username, validUser.password);
  });
});

it("Adds an item to a cart, checks the cart badge and compares the screenshot", () => {
  cy.compareSnapshot("landing-page");
  HomePage.addSauceLabsBackpackToCartBtn.click();
  cy.compareSnapshot("landing-page");
});
