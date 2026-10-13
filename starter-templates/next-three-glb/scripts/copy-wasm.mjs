#!/usr/bin/env node
/**
 * postinstall — copy `opencascade_single.wasm` from the resolved
 * `libcascade` package into `public/` so Next 15 can serve it
 * as a static asset under `/opencascade_single.wasm`.
 *
 * We resolve via `import.meta.resolve` rather than hard-coding
 * `node_modules/...` so pnpm hoisting, npm linking, and monorepo
 * scenarios all work uniformly. Failure is fail-loud — the build relies
 * on the WASM being present at request time and a silent miss would
 * produce a runtime 404 with no helpful diagnostic.
 */
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const DEST = path.join(PUBLIC_DIR, 'opencascade_single.wasm');

const SRC_URL = import.meta.resolve('libcascade/single/wasm');
const SRC = fileURLToPath(SRC_URL);

await fs.mkdir(PUBLIC_DIR, { recursive: true });
await fs.copyFile(SRC, DEST);
const stat = await fs.stat(DEST);
console.log(
  `[libcascade-next-three-glb] copied opencascade_single.wasm (${stat.size} bytes) ` +
    `from ${path.relative(PROJECT_ROOT, SRC)} to ${path.relative(PROJECT_ROOT, DEST)}`,
);

void pathToFileURL;
