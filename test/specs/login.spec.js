/**
 * Created by sakshi on 7/17/2015.
 */


var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.manage().window().setSize(1300,1000);
driver.get('http://reader.comprodls.com/#/login').then(function(){
    driver.sleep(8000);
    driver.findElement(by.name('orgid')).sendKeys('test6');
});