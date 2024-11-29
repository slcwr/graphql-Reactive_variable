const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--remote-allow-origins=*');
        }
        return launchOptions;
      });
    }
  },
  env: {
    apiUrl: 'http://localhost:4001/graphql',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});