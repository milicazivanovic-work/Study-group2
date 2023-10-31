class WorkCoNewsPage {

    open() {
        cy.visit("/news");
    }

    get newsLinks() {
        return cy.get(".TitleDateList>li");
    }

    get newsHeader() {
        return cy.get(".Header1News");
    }
    
    
}

export default new WorkCoNewsPage();