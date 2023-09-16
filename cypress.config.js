const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the cucumber preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    // specPattern: 'cypress/integration/examples/*.js', //js test files
    specPattern: 'cypress/integration/examples/BDD/*.feature', //cucumber(gherkin)

    //call setupNodeEvents global function
    setupNodeEvents
  },

  defaultCommandTimeout: 6000, //straight forward property
  
  //Cypress cloud
  projectId: "m82ofp",

  //aditional property
  env: {
    url: "https://rahulshettyacademy.com",
    //other examples
    username: "alex",
    password: "12345"
  },

  //Re-run failed tests
  retries: {
    runMode: 1
    }
});

//messages -> json file -> html