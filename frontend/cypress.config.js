"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// cypress.config.ts
const cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        baseUrl: 'http://localhost:3000',
        screenshotOnRunFailure: false,
        // Dockerでの実行時の設定
        chromeWebSecurity: false
    },
    env: {
        apiUrl: 'http://localhost:4001/graphql',
    },
    viewportWidth: 1280,
    viewportHeight: 720,
});
