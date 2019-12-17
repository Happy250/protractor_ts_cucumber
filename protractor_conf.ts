import { Config } from 'protractor';

export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  framework: "jasmine",
  jasmineNodeOpts: {
      showColors: true
  },
  specs: ['test_spec.js'],
  capabilities: {
      browserName:'chrome'
  }
} 