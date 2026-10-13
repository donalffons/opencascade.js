import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/api',
  testMatch: /.*\.visual\.spec\.ts$/,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
  },
});
