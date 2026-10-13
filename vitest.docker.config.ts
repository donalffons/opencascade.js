import { defineConfig } from 'vitest/config';

/**
 * Dedicated config for the Docker build-flow tests (`tests/docker/`). These
 * run the published GHCR images through `docker run … link <yaml>` and are
 * opt-in via `OCJS_DOCKER_TESTS=1` (see `tests/docker/docker-helpers.ts`).
 *
 * Run with: `OCJS_DOCKER_TESTS=1 pnpm test:docker`.
 *
 * GitHub's native job timeout owns the execution ceiling. Tests run
 * sequentially (single fork, no concurrency) so concurrent multi-GB container
 * builds don't contend for the host's CPU/memory.
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/docker/**/*.test.ts'],
    testTimeout: 0,
    hookTimeout: 0,
    // Sequential execution so concurrent multi-GB container builds don't
    // contend for host CPU/memory.
    fileParallelism: false,
    maxWorkers: 1,
    minWorkers: 1,
  },
});
