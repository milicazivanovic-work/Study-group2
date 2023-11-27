
# What is the test about and how to run it

The **screenshot.cy.js** test is opening the Work & Co website/URL for Belgrade office in a browser and taking a screenshot of the entire page, as well as doing a comparison using the plugin [cypress-image-diff](https://github.com/uktrade/cypress-image-diff)

The **screenshot-test.cy.js** test is opening the Saucedemo website in a browser, taking a screenshot of the entire page, adding an item into a cart, capturing the screen and comparing it to the baseline, again, by using the forementioned plugin


##Commands:

Install dependencies:
```
npm install
```
Open Cypress runner:
```
npx cypress open
```
Run all tests (default browser is headless Electron): /won't work due to different baseURLs
```
npx cypress run
```
Run all tests in Chrome: /won't work due to different baseURLs
```
npx cypress run --browser chrome
```
Run tests for Saucedemo website in Chrome:
```
npx cypress run --browser chrome --config-file cypress.saucedemo.config.js
```
Run tests for Saucedemo website in Chrome using alias:
```
npm run saucedemo
```
Run tests for Work&Co website in Chrome:
```
npx cypress run --browser chrome --config-file cypress.workco.config.js  
```
Run tests for Work&Co website in Chrome using alias:
```
npm run workco
```