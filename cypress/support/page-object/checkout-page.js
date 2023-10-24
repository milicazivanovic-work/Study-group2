class CheckoutPage {

    open() {
        cy.visit("/checkout-step-one.html");
    }

    get checkoutContinueBtn() {
        return cy.get('[data-test="continue"]');
    }

    get errorMsg() {
        return cy.get('[data-test="error"]');
    }

    get firstName() {
        return cy.get('[data-test="firstName"]');
    }

    get lastName() {
        return cy.get('[data-test="lastName"]');
    }

    get postalCode() {
        return cy.get('[data-test="postalCode"]');
    }

    get checkoutTitle() {
        return cy.get(".title");
    }

    get itemName() {
        return cy.get(".inventory_item_name");
    }

    get finishBtn() {
        return cy.get('[data-test="finish"]');
    }

    get checkoutComplete() {
        return cy.get(".complete-header");
    }

    get backBtn() {
        return cy.get('[data-test="back-to-products"]');
    }

    
}

export default new CheckoutPage();