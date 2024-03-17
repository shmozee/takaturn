const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: 'https://takaturn.io/',
    
    // Enter your own username and password here
    username: "YOUR EMAIL HERE",
    password: "YOUR PASSWORD HERE",

    invalidUsername: "random123@email.com",
    invalidPassword: "random456"

  }
});
