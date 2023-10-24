class LandingPage {

    open() {
        cy.visit("/");
    }

    get username() {
        return cy.get('[data-test="username"]');
    }

    get password() {
        return cy.get('[data-test="password"]');
    }

    get loginBtn() {
        return cy.get('[data-test="login-button"]');
    }

    get errorMsg() {
        return cy.get('[data-test="error"]');
    }

    get menuBtn() {
        return cy.get("#react-burger-menu-btn");
    }

    get logoutLink() {
        return cy.get("#logout_sidebar_link");
    }

    
}

export default new LandingPage();