class HomePage {

    open() {
        cy.visit("/inventory.html");
    }

    get shoppingCartBtn() {
        return cy.get(".shopping_cart_link");
    }

    get shoppingCartBadge() {
        return cy.get(".shopping_cart_badge");
    }

    get addSauceLabsBackpackToCartBtn() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get addSauceLabsTshirtToCartBtn() {
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    get addSauceLabsRedShirtToCartBtn() {
        return cy.get(
            '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
}

export default new HomePage();