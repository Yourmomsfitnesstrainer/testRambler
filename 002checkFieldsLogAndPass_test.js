const locators = require("./locators/locators.js");
const data = require("./data/data.js");
let url = "https://id.rambler.ru/login-20/login";

Feature('checkFieldsLogAndPass');


Scenario('Login', async (I) => {
  I.amOnPage(url);
  I.waitForElement(locators.mailboxField);
  I.fillField(locators.mailboxField, data.emailForTests);
  I.fillField(locators.passwordField, data.passwordEmail);
  I.click(locators.buttonComeIn);
  I.wait(3);
});

Scenario('Check for incoming letters', async (I) => {
  I.click(locators.buttonSectionEmail);
  I.wait(2);
  let newEmailsCounter = await I.grabTextFrom(locators.counterEmail);;
  if (newEmailsCounter > 1) {
    I.saveScreenshot('NewEmails.png');
  } else {
    I.saveScreenshot('noNewEmails.png');
  }
});

Scenario('logoutAndClearCoockies', async (I) => {
  I.clearCookie();
});












































































