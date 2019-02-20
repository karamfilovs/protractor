'use strict';


function SignUp() {

    var inputUserName = element(by.id('loginusername')),
        inputUserPassword = element(by.id('loginpassword')),
        loginButton = element(by.id('loginsubmit'));

    this.navigateToMainApp = function () {
        browser.get('https://st2016.inv.bg');
    }


    this.fillFormName = function (username) {
        inputUserName.sendKeys(username);
    }


    this.fillPassword = function (password) {
        inputUserPassword.sendKeys(password);
    }

    this.confirmSignUpButton = function () {
        loginButton.click()
    }
}

module.exports = SignUp;