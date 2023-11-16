import WorkCoNewsPage from "../support/page-object/workco-news";
import news_slugs from "../fixtures/slugs.js";

describe("Work & Co News links title test", () => {
  it("Opens W&C site/News, iterates through the list of objects, checks if H1 matches the title attribute", () => {
    news_slugs.forEach((item) => {
      const { url, title } = item;

      const newsUrl = `https://work.co/news/${url}`;

      cy.visit(newsUrl);
      WorkCoNewsPage.newsHeader.should("have.text", title);
    });
  });
});
