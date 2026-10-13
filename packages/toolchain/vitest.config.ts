import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      // The replicad config lives outside this repo and imports the toolchain by
      // package name; wave W1 adds no devDependency there (see its file header).
      '@libcascade/toolchain': new URL('./src/index.ts', import.meta.url).pathname,
    },
  },
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
    root: import.meta.dirname,
    testTimeout: 30_000,
  },
});
