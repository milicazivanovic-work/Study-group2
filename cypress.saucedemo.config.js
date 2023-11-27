const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    excludeSpecPattern: ['cypress/e2e/homepage.cy.js', 'cypress/e2e/news.cy.js', 'cypress/e2e/spec.cy.js', 'cypress/e2e/check-news-pages.cy.js', 'cypress/e2e/screenshot.cy.js'],
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);

      // implement node event listeners here
    },
  },

});