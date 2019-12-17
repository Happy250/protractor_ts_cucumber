import { ElementFinder, element, by } from "protractor";

export class angularHomePage {
    angularLink:ElementFinder;
    searchBox:ElementFinder;

    constructor() {
        this.angularLink = element(by.linkText('angular.io'));
        this.searchBox = element(by.css('input[type="search"]'))
    }
}