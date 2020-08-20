import { browser, element, by } from 'protractor';

describe('Calculator', function () {
  it('Add', async function () {
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    browser.manage().window().maximize();
    browser.sleep(3000);

    element(by.model('first')).sendKeys(4);
    element(by.model('second')).sendKeys(5);
    element
    .all(by.options('value for (key, value) in operators'))
    .then(function(opts){
      opts[0].click();
    });
    element(by.id('gobutton')).click();

    let result : String = await element(by.binding('latest')).getText();
    console.log(result);

    expect (result).toBe('9'); 
  });

  it('Subtract', async function() {
    element(by.model('first')).sendKeys(20);
    element(by.model('second')).sendKeys(5);
    element
    .all(by.options('value for (key, value) in operators'))
    .then(function(opts){
      opts[4].click();
    });
    element(by.id('gobutton')).click();

    let result : String = await element(by.binding('latest')).getText();
    console.log(result);
    
    expect (result).toBe('15');

  });

  it('Mulitply', async function (){
    element(by.model('first')).sendKeys(6);
    element(by.model('second')).sendKeys(7);
    element.all(by.options('value for (key, value) in operators')).then(function(opts){
      opts[3].click();
    });
    element(by.id('gobutton')).click();

    let result : String = await element(by.binding('latest')).getText();
    console.log(result);

    expect(result).toBe('42');
  });


  it('Divide', async function(){
    element(by.model('first')).sendKeys(100);
    element(by.model('second')).sendKeys(5);
    element
    .all(by.options('value for (key, value) in operators'))
    .then(function(opts){
      opts[1].click();
    });
    element(by.id('gobutton')).click();

    let result : String = await element(by.binding('latest')).getText();
    console.log(result);
    expect(result).toBe('20');

    
  });

  it('Remainder',async function(){
    element(by.model('first')).sendKeys(41);
    element(by.model('second')).sendKeys(3);
    element.all(by.options('value for (key, value) in operators')).then(function(opts){
      opts[2].click();
    });
    element(by.id('gobutton')).click();
    
    let result : String = await element(by.binding('latest')).getText();
    console.log(result);
    expect(result).toBe('2');

    browser.sleep(3000);

    
  });

});
