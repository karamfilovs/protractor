'use strict';
function SignUp () {
    var navigateToSignUpPagen = element(by.css('[ui-sref="auth.register"]')),
        inputUserName = element(by.model('vm.user.firstName')),
        inputUserLastName = element(by.model('vm.user.lastName')),
        inputUserEmail = element(by.model('vm.user.email')),
        inputUserPassword = element(by.model('vm.user.password')),
        inputUserRepassword = element(by.model('vm.user.repassword')),
        confirmSignUp = element(by.css('.btn-big.btn-red'));

    this.navigateToMainApp = function () {
        browser.get('https://app.skillhunt.io/');
    }

    this.goToSignUpPage = function () {
        navigateToSignUpPagen.click();
    }

    this.fillFormName = function () {
        inputUserName.sendKeys('John');
    }

    this.fillFormLastName = function () {
        inputUserLastName.sendKeys('Smith');
    }

    this.fillFormEmail = function () {
        inputUserEmail.sendKeys('john.smith@mail.com');
    }

    this.fillPassword = function () {
        inputUserPassword.sendKeys('somePassword');
        inputUserRepassword.sendKeys('somePassword');
    }

    this.confirmSignUpButton = function () {
        confirmSignUp.click()
    }
}

module.exports = SignUp;