module.exports = {

//Локаторы полей ввода
mailboxField: '//*[@id="login"]',
passwordField: '//*[@id="password"]',
passwordFieldWithHiddenText: '//*[@id="password"][@type="password"]',
passwordFieldPlaintText: '//*[@id="password"][@type="text"]',
fieldToWriteTo: '//*[@id="receivers"]',

//Локаторы валидаторов
loginFieldValidator: '//*[text()="Введите email"]',
loginFieldInadmissibilityValidator: '//*[text()="Недопустимый email"]',
passwordFieldValidator: '//*[text()="Необходимо ввести пароль"]',
invalidDataValidator: '//*[text()="Неправильная почта или пароль"]',

//Локаторы чекбоксов
checkboxRememberMeFalse: '//input[@id="longSession"][@value="false"]',
checkboxRememberMeTrue: '//input[@id="longSession"][@value="true"]',

//Локаторы кнопок
buttonRememberMe: '//*[text()="Запомнить меня"]',
buttonComeIn: '//*[text()="Войти"]',
buttonSectionEmail: '//a[text()="Почта"]',
buttonToWrite: '//span[text()="Написать"]',

//Локаторы имён
nameOfAccount: '//h1[text()="Артём Бочаров"]',
counterEmail: '//div[@class="FoldersItem-counter-2I"]',

}
