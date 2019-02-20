'use strict';
var SignUp = require('./page.js');

describe('Inv.bg app', function() {

    var signup = new SignUp();

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        signup.navigateToMainApp();
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Вход - QA Ground');
    });

    it('should navigate to singup page', function () {
        expect(browser.getCurrentUrl()).toEqual('https://st2016.inv.bg/login');
    });

    it('and type some personal information', function () {
        signup.fillFormName("karamfilovs@gmail.com");;
        signup.fillPassword("123456");
        signup.confirmSignUpButton();
    })
});