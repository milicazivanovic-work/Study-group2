class CartPage {

    open() {
        cy.visit("/cart.html");
    }

    get checkoutBtn() {
        return cy.get('[data-test="checkout"]');
    }
    get itemName() {
        return cy.get("#item_4_title_link > .inventory_item_name");
    }
    get cartQuantity() {
        return cy.get(".cart_quantity");
    }
    get itemPrice() {
        return cy.get(".inventory_item_price");
    }

    get removeSauceLabsBackpackBtn() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }

    get continueShoppingBtn() {
        return cy.get('[data-test="continue-shopping"]');
    }

    get removeSauceLabsTshirtBtn() {
        return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]');
    }

    get shoppingCartBadge() {
        return cy.get("shopping_cart_badge");
    }
}

export default new CartPage();