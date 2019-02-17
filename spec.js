'use strict';
var SignUp = require('./page.js');

describe('Skillhunt app', function() {

    var signup = new SignUp();

    beforeEach(function () {
        signup.navigateToMainApp();
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Skillhunt');
    });

    it('should navigate to singup page', function () {
        signup.goToSignUpPage();
        expect(browser.getCurrentUrl()).toEqual('https://app.skillhunt.io/register');
    });

    it('and type some personal information', function () {
        var inputUserName = element(by.model('vm.user.firstName'));

        signup.goToSignUpPage();
        signup.fillFormName();
        signup.fillFormLastName();
        signup.fillFormEmail();
        signup.fillPassword();
        signup.confirmSignUpButton();
        expect(inputUserName).not.toEqual('');
    })
});