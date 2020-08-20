import { browser } from 'protractor';

describe('Login Page', function () {
  it('My Test Case 11', function () {
    browser.get('http://www.google.com');
    browser.manage().window().maximize();
    browser.sleep(3000);
  });
});
