/**
 * Created by sakshi on 7/17/2015.
 */
/*var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    driver.manage().window().setSize(1300,1000);
    driver.get('http://google.com/').then(function(){
    driver.sleep(5000);
    driver.findElement(By.name('q')).sendKeys('selenium');
    driver.findElement(By.id('sblsbb')).click();
    driver.sleep(5000);
    driver.findElement(By.className('g')).click();
    driver.sleep(10000);

});*/

var webdriver = require('selenium-webdriver');

var sauce = 'http://ondemand.saucelabs.com:80/wd/hub';
var driver = new webdriver.Builder().
    usingServer(sauce).
    withCapabilities({
        browserName: 'Chrome',
        platform: 'Windows 2012',
        name: 'Sample selenium-webdriver test',
        username: 'sakshinagpal',
        accessKey: '8f7e582d-2e69-4fa6-a722-9d95355f2301'
    }).
    build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'webdriver - Google Search';
    });
}, 1000);

driver.quit();
