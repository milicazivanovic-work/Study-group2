describe("Work & Co News links test", () => {
  it("Opens W&C site/News, iterates and opens each link, checks H1 for each page", () => {
    cy.visit("https://work.co/");
    cy.get('[data-test-id="global-menu-btn"]').click();
    cy.get('[data-test-id="grid-news-link"]').click();

    cy.get(".TitleDateList>li").then((newsLinks) => {
      cy.wrap(newsLinks).each((newsLink, index) => {
        if (index === 0) {
          return;
        }

        const linkText = newsLink.text();
        const linkHref = newsLink.find("a").attr("href");

        cy.visit(linkHref);

        cy.get(".Header1News").should("have.text", linkText);

        cy.go("back");
      });
    });
  });
});
