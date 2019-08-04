const {
  randomSymbols,
  randomTextSymbols,
} = require("./functions/functions");
const locators = require("./locators/locators.js");

let url = "https://id.rambler.ru/login-20/login";
let randomSymbolsEmail = `${randomSymbols()}`;
let randomTextEmailOrPass = `${randomTextSymbols()}`;

Feature('Login Verification');

//Сценарий с событиями тригера всех валидаторов, прикреплённых к полям
Scenario('chekValidators', async (I) => {
  I.amOnPage(url);
  I.wait(1);
  I.waitForElement(locators.mailboxField);
  I.click(locators.buttonComeIn);
  I.seeElement(locators.loginFieldValidator);
  I.seeElement(locators.passwordFieldValidator);
  I.fillField(locators.mailboxField, `${randomSymbolsEmail}`);
  I.seeElement(locators.loginFieldInadmissibilityValidator);
  I.clearField(locators.mailboxField);
  I.fillField(locators.mailboxField, `${randomTextEmailOrPass}`);
  I.fillField(locators.passwordField, `${randomTextEmailOrPass}`);
  I.click(locators.buttonComeIn);
  I.seeElement(locators.invalidDataValidator);
  I.click(locators.buttonRememberMe);
  I.seeElement(locators.checkboxRememberMeFalse);
  I.click(locators.buttonRememberMe);
  I.seeElement(locators.checkboxRememberMeTrue);
});

Scenario('logoutAndClearCoockies', async (I) => {
  I.clearCookie();
});












































































