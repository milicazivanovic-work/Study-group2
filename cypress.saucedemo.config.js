const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    excludeSpecPattern: ['cypress/e2e/homepage.cy.js', 'cypress/e2e/news.cy.js', 'cypress/e2e/spec.cy.js'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});