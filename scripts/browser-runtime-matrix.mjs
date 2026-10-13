#!/usr/bin/env node

import { createServer } from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium, firefox, webkit } from 'playwright';
import { validateBrowserRuntimeResult } from './lib/browser-runtime-result.mjs';

const TIMEOUT_MS = 120_000;
const VARIANTS = {
  single: 'opencascade_single',
  multi: 'opencascade_multi',
};

const html = (variant) => `<!doctype html>
<meta charset="utf-8">
<link rel="icon" href="data:,">
<script type="module">
import init from '/dist/${VARIANTS[variant]}.js';

const owned = [];
let oc;
try {
  oc = await init({ locateFile: file => '/dist/' + file });
  const memory = oc.wasmMemory?.buffer;
  const memoryKind = memory instanceof SharedArrayBuffer
    ? 'SharedArrayBuffer'
    : memory instanceof ArrayBuffer
      ? 'ArrayBuffer'
      : 'unknown';
  const box = new oc.BRepPrimAPI_MakeBox(1, 2, 3);
  const shape = box.Shape();
  owned.push(box, shape);
  const result = {
    isolated: crossOriginIsolated,
    memoryKind,
    shape: !shape.IsNull(),
  };

  if (${JSON.stringify(variant)} === 'multi') {
    const pool = oc.OSD_ThreadPool.DefaultPool(-1);
    owned.push(pool);
    oc.BRepMesh_IncrementalMesh.SetParallelDefault(true);
    const mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.1, true);
    const progress = new oc.Message_ProgressRange();
    owned.push(mesh, progress);
    mesh.Perform(progress);
    result.poolThreads = pool.NbThreads();
    result.meshDone = mesh.IsDone();
  }

  window.__ocjsResult = result;
} catch (error) {
  window.__ocjsResult = { error: String(error?.stack ?? error) };
} finally {
  for (const value of owned.reverse()) value.delete();
  oc?.PThread?.terminateAllThreads?.();
}
</script>`;

const contentType = (pathname) => {
  if (pathname.endsWith('.wasm')) return 'application/wasm';
  if (pathname.endsWith('.js')) return 'text/javascript';
  return 'application/octet-stream';
};

const createPackageServer = (packageRoot) => createServer(async (request, response) => {
  response.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  response.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  response.setHeader('Cross-Origin-Resource-Policy', 'same-origin');

  const url = new URL(request.url ?? '/', 'http://127.0.0.1');
  if (url.pathname === '/') {
    const variant = url.searchParams.get('variant');
    if (!(variant in VARIANTS)) {
      response.statusCode = 400;
      response.end('unknown variant');
      return;
    }
    response.setHeader('Content-Type', 'text/html');
    response.end(html(variant));
    return;
  }

  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  const filename = path.resolve(packageRoot, relative);
  if (!filename.startsWith(`${packageRoot}${path.sep}`)) {
    response.statusCode = 403;
    response.end();
    return;
  }
  try {
    response.setHeader('Content-Type', contentType(filename));
    response.end(await fs.readFile(filename));
  } catch {
    response.statusCode = 404;
    response.end();
  }
});

const runCell = async ({ browserName, browser, variant, origin }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  let workerCount = 0;
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console.error: ${message.text()}`);
  });
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.stack ?? error.message}`));
  page.on('worker', () => workerCount++);

  try {
    await page.goto(`${origin}/?variant=${variant}`, {
      waitUntil: 'domcontentloaded',
      timeout: TIMEOUT_MS,
    });
    await page.waitForFunction(() => window.__ocjsResult, undefined, { timeout: TIMEOUT_MS });
    const result = await page.evaluate(() => window.__ocjsResult);
    validateBrowserRuntimeResult({ browser: browserName, variant, result, workerCount, errors });
    console.log(JSON.stringify({ browser: browserName, variant, workerCount, ...result }));
  } finally {
    await context.close();
  }
};

const main = async () => {
  const packageRoot = path.resolve(process.argv[2] ?? 'node_modules/libcascade');
  const server = createPackageServer(packageRoot);
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const address = server.address();
  const origin = `http://127.0.0.1:${address.port}`;

  try {
    for (const [browserName, browserType] of Object.entries({ chromium, firefox, webkit })) {
      const browser = await browserType.launch({ headless: true });
      try {
        for (const variant of Object.keys(VARIANTS)) {
          await runCell({ browserName, browser, variant, origin });
        }
      } finally {
        await browser.close();
      }
    }
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
};

const isMain = process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (isMain) await main();
