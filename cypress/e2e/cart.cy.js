beforeEach(() => {
  cy.fixture("login.json").then((loginData) => {
    const { validUser } = loginData;

    cy.login(validUser.username, validUser.password);
  });
});

describe("SauceDemo website test, continue on checkout without user info", () => {
  it("Opens checkout, tries to continue, expect errors", () => {
    cy.get("#shopping_cart_container").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Error: First Name is required"
    );
  });
});

describe("SauceDemo website test, finish checkout", () => {
  it("Checks for empty cart, adds an item to a cart, checks out, verifies the empty cart", () => {
    cy.get(".shopping_cart_badge").should("not.exist");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get("#shopping_cart_container").click();
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Backpack");
    cy.get(".cart_quantity").should("have.text", "1");
    cy.get(".inventory_item_price").should("have.text", "$29.99");
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
    cy.get('[data-test="continue-shopping"]').should("be.visible");
    cy.get('[data-test="checkout"]').should("be.visible").click();
    cy.get('[data-test="firstName"]').type("James");
    cy.get('[data-test="lastName"]').type("Jones");
    cy.get('[data-test="postalCode"]').type("78701");
    cy.get('[data-test="continue"]').click();
    cy.get(".title").should("have.text", "Checkout: Overview");
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Backpack");
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/checkout-complete.html");
    cy.get('[data-test="back-to-products"]').should("be.visible").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});

describe("SauceDemo website test, add item to cart and remove", () => {
  it("Adds an item to a cart, removes item, verifies the empty cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get("#shopping_cart_container").click();
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});

describe("SauceDemo website test, add item to cart and continue shopping", () => {
  it("Adds an item to a cart, continues shopping, verifies the item is still in the bag", () => {
    cy.get(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    ).click();
    cy.get("#shopping_cart_container").click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
});
