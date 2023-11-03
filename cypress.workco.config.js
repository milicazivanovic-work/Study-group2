const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://work.co',
    excludeSpecPattern: ['cypress/e2e/cart.cy.js', 'cypress/e2e/login.cy.js'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
