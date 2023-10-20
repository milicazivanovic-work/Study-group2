import CartPage from "../support/page-object/cart-page";
import HomePage from "../support/page-object/home-page";
import CheckoutPage from "../support/page-object/checkout-page";

beforeEach(() => {
  cy.fixture("login.json").then((loginData) => {
    const { validUser } = loginData;

    cy.login(validUser.username, validUser.password);
  });
});

describe("SauceDemo website test, continue on checkout without user info", () => {
  it("Opens checkout, tries to continue, expect errors", () => {
    HomePage.shoppingCartBtn.click();
    CartPage.checkoutBtn.click();
    CheckoutPage.checkoutContinueBtn.click();
    CheckoutPage.errorMsg.should(
      "have.text",
      "Error: First Name is required"
    );
  });
});

describe("SauceDemo website test, finish checkout", () => {
  it("Checks for empty cart, adds an item to a cart, checks out, verifies the empty cart", () => {
    HomePage.shoppingCartBadge.should("not.exist");
    HomePage.addSauceLabsBackpackToCartBtn.click();
    HomePage.shoppingCartBadge.should("have.text", "1");
    HomePage.shoppingCartBtn.click();
    CartPage.itemName.should("have.text", "Sauce Labs Backpack");
    CartPage.cartQuantity.should("have.text", "1");
    CartPage.itemPrice.should("have.text", "$29.99");
    CartPage.removeSauceLabsBackpackBtn.should("be.visible");
    CartPage.continueShoppingBtn.should("be.visible");
    CartPage.checkoutBtn.should("be.visible").click();
    CheckoutPage.firstName.type("James");
    CheckoutPage.lastName.type("Jones");
    CheckoutPage.postalCode.type("78701");
    CheckoutPage.checkoutContinueBtn.click();
    CheckoutPage.checkoutTitle.should("have.text", "Checkout: Overview");
    CheckoutPage.itemName.should("have.text", "Sauce Labs Backpack");
    CheckoutPage.finishBtn.click();
    CheckoutPage.checkoutComplete.should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/checkout-complete.html");
    CheckoutPage.backBtn.should("be.visible").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    HomePage.shoppingCartBadge.should("not.exist");
  });
});

describe("SauceDemo website test, add item to cart and remove", () => {
  it("Adds an item to a cart, removes item, verifies the empty cart", () => {
    HomePage.addSauceLabsTshirtToCartBtn.click();
    HomePage.shoppingCartBadge.should("have.text", "1");
    HomePage.shoppingCartBtn.click();
    CartPage.removeSauceLabsTshirtBtn.click();
    CartPage.shoppingCartBadge.should("not.exist");
  });
});

describe("SauceDemo website test, add item to cart and continue shopping", () => {
  it("Adds an item to a cart, continues shopping, verifies the item is still in the bag", () => {
    HomePage.addSauceLabsRedShirtToCartBtn.click();
    HomePage.shoppingCartBtn.click();
    CartPage.continueShoppingBtn.click();
    HomePage.shoppingCartBadge.should("have.text", "1");
  });
});
