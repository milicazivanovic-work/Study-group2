
# What is the test about and how to run it

The **spec.cy.js** test is opening opening the Work & Co website in a browser and checking if the headline mathes the given text.

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
Run tests from Saucedemo website in Chrome:
```
npx cypress run --browser chrome --config-file cypress.saucedemo.config.js
```
Run tests from Work&Co website in Chrome:
```
npx cypress run --browser chrome --config-file cypress.workco.config.js  
```