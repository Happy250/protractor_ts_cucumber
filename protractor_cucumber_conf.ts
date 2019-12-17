import { Config } from 'protractor';

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),


    specs: ['../features/demo.feature'],
    capabilities: {
        browserName:'chrome'
    },

    cucumberOpts: {
        // require step definitions
        require: [
          './stepdefs/*.js' // accepts a glob
        ]
    }

    
} 