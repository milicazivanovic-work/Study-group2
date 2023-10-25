const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    //baseUrl: 'https://www.saucedemo.com/',
    baseUrl: 'https://work.co/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
