const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://work.co',
    excludeSpecPattern: ['cypress/e2e/cart.cy.js', 'cypress/e2e/login.cy.js', 'cypress/e2e/screenshot-test.cy.js'],
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
      // implement node event listeners here
    },
  },
});
