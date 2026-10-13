#!/usr/bin/env node
/**
 * `libcascade` bin.
 *
 * Runs the built CLI. jiti is still a runtime dependency — the CLI uses it to
 * load *consumer* `libcascade.config.ts` files — but it is no longer what loads
 * the CLI itself, so the package ships no raw TypeScript.
 */
import { main } from '../dist/cli.js';

try {
  await main(process.argv.slice(2));
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
}
