import * as path from 'node:path';
import { createInstance, type OpenCascadeInstance } from 'libcascade/single/init';

let cached: Promise<OpenCascadeInstance> | null = null;

/**
 * Canonical exactly-once libcascade init for Node ESM.
 *
 * We resolve `opencascade_single.wasm` via `import.meta.resolve` so the
 * locator works regardless of how the consumer manages packages
 * (pnpm hoisting, npm linking, monorepo workspaces).
 */
export function getLibcascade(): Promise<OpenCascadeInstance> {
  if (cached === null) {
    const wasmUrl = new URL(import.meta.resolve('libcascade/single/wasm'));
    const buildDir = path.dirname(wasmUrl.pathname);
    const instance = createInstance({
      locateFile: (filename: string) => path.join(buildDir, filename),
    });
    cached = instance;
    return instance;
  }
  return cached;
}
