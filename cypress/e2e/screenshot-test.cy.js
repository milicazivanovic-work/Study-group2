import HomePage from "../support/page-object/home-page";

before(() => {
  //cy.visit("https://www.saucedemo.com");

  cy.fixture("login.json").then((loginData) => {
    const { validUser } = loginData;

    cy.login(validUser.username, validUser.password);
  });
});

it("Adds an item to a cart, checks the cart badge and compares the screenshot", () => {
  cy.compareSnapshot("landing-page");
  HomePage.addSauceLabsBackpackToCartBtn.click();
  HomePage.shoppingCartBadge.should("have.text", "1");
  cy.compareSnapshot("landing-page");
});
