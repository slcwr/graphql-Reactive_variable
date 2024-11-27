// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
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
})