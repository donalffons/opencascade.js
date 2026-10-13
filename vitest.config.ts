import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: [
      'tests/**/*.test.ts',
      'tests/**/*.test-d.ts',
      'starter-templates/*/tests/**/*.test.ts',
    ],
    // The Docker build-flow suite has its own config (`vitest.docker.config.ts`)
    // and is opt-in via `OCJS_DOCKER_TESTS=1`; never pick it up here so the
    // default smoke/regression runs stay fast and Docker-free.
    exclude: [
      ...configDefaults.exclude,
      'tests/docker/**',
      'tests/package/**',
      'tests/regression/**',
      'tests/**/*.test-d.ts',
    ],
    testTimeout: 30_000,
  },
});
