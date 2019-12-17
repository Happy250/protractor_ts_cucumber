import { Given, When, Then } from 'cucumber';
import { calculator } from '../pageobjects/calculator';
import { browser } from 'protractor';
import { angularHomePage } from '../pageobjects/angularHomePage';
import chai from 'chai';

var expect = chai.expect;
let calc = new calculator();
let angularhp = new angularHomePage();

Given('I will navigate to {string} Site', async function (page_name) {
    if (page_name == 'Calculator') {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (page_name == 'AngularJS') {
        await browser.get('https://angularjs.org/');
    }
});

When('I add two number {string} and {string}', async function (string, string2) {

 
    await calc.firstEditbox.sendKeys(string);
    await calc.secondEditbox.sendKeys(string2);
});

Then('the output displayed should be {string}', async function (string) {
    await calc.go.click();

    await calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
});

When('I clicked on header link', async function () {
    await angularhp.angularLink.click();
});


When('you will navigate to angular Page', async () => {
    console.log("Navigate to new Screen!");
});


Then('you will enter {string} in search box', async function (key_word) {
    await browser.sleep(3000);
    await angularhp.searchBox.sendKeys(key_word);
  });
