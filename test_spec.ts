import {browser, element, by } from 'protractor';

describe('Protractor Element steps', function() {
    it('Open Angular js Website', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('5');
        element(by.id('gobutton')).click();

        element(by.css('body > div > div > form > h2')).getText().then(function (text) {
            console.log(text);
        });

        expect(element(by.css('body > div > div > form > h2')).getText()).toBe('8');
    })

    // it ('close browser', function() {

    // })
})