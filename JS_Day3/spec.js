const { browser } = require("protractor");


describe('Test Suite 1', function () {

    it('My Test Case', function () {
         browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
         
    });

    it('TC google', function () {
        browser.get('http://www.google.com');
    });

    it('Test Case 3', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');       
    });

    it('Test Case 4', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');       
    });
        
});

