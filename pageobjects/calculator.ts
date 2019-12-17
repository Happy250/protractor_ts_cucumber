import { ElementFinder, element, by } from "protractor";

export class calculator {
    firstEditbox:ElementFinder;
    secondEditbox:ElementFinder;
    go:ElementFinder;
    getResult:ElementFinder;

    constructor() {
        this.firstEditbox = element(by.model('first'));
        this.secondEditbox = element(by.model('second'));
        this.go =  element(by.id('gobutton'));
        this.getResult = element(by.css('body > div > div > form > h2'));
    }
}