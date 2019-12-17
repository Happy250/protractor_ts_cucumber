import {browser, element, by } from 'protractor';
import { calculator } from './pageobjects/calculator';
import { angularHomePage } from './pageobjects/angularHomePage';

describe('Protractor Element steps', () => {
    it('Open Angular js Website',  async () => {
        let calc = new calculator();

        await browser.get('http://juliemr.github.io/protractor-demo/');
        await calc.firstEditbox.sendKeys('3');
        await calc.secondEditbox.sendKeys('5');
        await calc.go.click();

        calc.getResult.getText().then(function (text) {
            console.log(text);
        });

        expect(calc.getResult.getText()).toBe('8');
    })

    it ('Angular home page title validation', async () => {
        let angularhp = new angularHomePage();
        await browser.get("https://angularjs.org/");
        await angularhp.angularLink.click();
        await browser.sleep(3000);
        await angularhp.searchBox.sendKeys('hello');
    })
})