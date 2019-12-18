import { Before, After, Status } from 'cucumber';
import { browser } from 'protractor';


Before({tags: "@CalculatorTesting"}, () => {
    browser.manage().window().maximize();
})

After({tags: "@CalculatorTesting"}, () => {
    console.log("Calculator Testing is done");
})

Before({tags: "@AngularJSTesting"}, () => {
    console.log("Before Angular Js Testing");
})

After(async function(scenerio) {
    console.log("Test is completed!");
    if (scenerio.result.status === Status.FAILED) {
        const failedScreenshot = await browser.takeScreenshot();
            this.attach(failedScreenshot, "image/png");
    }
})
