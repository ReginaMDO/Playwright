import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false, 
    baseURL: 'https://www.saucedemo.com',
  },
  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome', 
      },
    },
    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge', 
      },
    },
  ],
});