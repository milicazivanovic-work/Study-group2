class WorkCoLandingPage {

    open() {
        cy.visit("/");
    }

    get menuBtn() {
        return cy.get('[data-test-id="global-menu-btn"]');
    }

    get newsLink() {
        return cy.get('[data-test-id="grid-news-link"]');
    }
    
    
}

export default new WorkCoLandingPage();