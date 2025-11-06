import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',

  /* Run tests in parallel */
  fullyParallel: true,

  /* Prevent accidental test.only commits */
  forbidOnly: !!process.env.CI,

  /* Retries on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Limit workers on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporters */
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],

  /* Default settings for all tests */
  use: {
    // Point baseURL to ReqRes public API
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  /* Browser configurations */
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ]
});
