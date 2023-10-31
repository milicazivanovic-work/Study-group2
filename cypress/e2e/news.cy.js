import WorkCoLandingPage from "../support/page-object/workco-landing";
import WorkCoNewsPage from "../support/page-object/workco-news";

describe("Work & Co News links test", () => {
  it("Opens W&C site/News, iterates and opens each link, checks H1 for each page", () => {
    cy.visit("/");
    WorkCoLandingPage.menuBtn.click();
    WorkCoLandingPage.newsLink.click();

    WorkCoNewsPage.newsLinks.then((newsLinks) => {
      cy.wrap(newsLinks).each((newsLink, index) => {
        if (index === 0) {
          return;
        }

        const linkText = newsLink.text();
        const linkHref = newsLink.find("a").attr("href");

        cy.visit(linkHref);

        WorkCoNewsPage.newsHeader.should("have.text", linkText);

        cy.go("back");
      });
    });
  });
});
