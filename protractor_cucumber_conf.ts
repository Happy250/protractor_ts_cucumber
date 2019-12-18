import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: ['../features/demo.feature'],
    capabilities: {
        browserName:'chrome'
    },

    cucumberOpts: {

        tags: "@CalculatorTesting",
        format:'json:./cucumber_report/report.json',
        // require step definitions
        require: [
          './stepdefs/*.js' // accepts a glob
        ],
    },

    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumber_report/report.json',
            output: './cucumber_report/report.html',
            // screenshotsDirectory: './cucumber_report/screenshots/',
            // storeScreenshots: true,
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
} 