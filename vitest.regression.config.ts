import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/regression/**/*.test.ts'],
    testTimeout: 120_000,
  },
});
