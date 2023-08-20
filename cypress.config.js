const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
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
