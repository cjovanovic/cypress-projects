const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {

  // Define db variable
  config.db = {
    userName: "alexdb",
    password: "Testing!24",
    server: "alexdbdemo.database.windows.net",
    options: {
      database: "alexacademy",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  }

  // This is required for the cucumber preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // SQL server plugin task
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  // Excel to Json converter task
  on('task', {

    excelToJsonConverter(filePath)
    {
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    })
      return result;
    }
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/examples/*.js', //js test files
    // specPattern: 'cypress/integration/examples/BDD/*.feature', //cucumber(gherkin)

    //call setupNodeEvents global function
    setupNodeEvents
  },

  defaultCommandTimeout: 6000, //straight forward property
  
  //Cypress cloud
  projectId: "m82ofp",

  //download
  downloadsFolder: 'cypress/downloads',

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

