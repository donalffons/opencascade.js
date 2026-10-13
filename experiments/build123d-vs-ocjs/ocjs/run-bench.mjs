/**
 * Benchmark harness for opencascade.js (Node + WASM).
 *
 * Usage:
 *   node ocjs/run-bench.mjs --warmup 2 --iters 7 --out results/ocjs-latest.json
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import { SAMPLES } from './samples.mjs';

function median(values) {
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function parseArgs(argv) {
  let warmup = 2;
  let iters = 7;
  let out = '';
  let artifactDir = '';
  let engine = 'opencascade.js-node-wasm';
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--warmup' && argv[i + 1]) warmup = Number(argv[++i]);
    else if (argv[i] === '--iters' && argv[i + 1]) iters = Number(argv[++i]);
    else if (argv[i] === '--out' && argv[i + 1]) out = argv[++i];
    else if (argv[i] === '--artifact-dir' && argv[i + 1]) artifactDir = argv[++i];
    else if (argv[i] === '--engine' && argv[i + 1]) engine = argv[++i];
  }
  return { warmup, iters, out, artifactDir, engine };
}

const { warmup, iters, out, artifactDir, engine } = parseArgs(process.argv);
const buildDir = path.resolve(
  artifactDir || path.join(import.meta.dirname, '../../..', 'build-configs'),
);
const wasmPath = path.join(buildDir, 'opencascade_single.wasm');
const jsPath = path.join(buildDir, 'opencascade_single.js');

if (!fs.existsSync(wasmPath) || !fs.existsSync(jsPath)) {
  console.error('Missing OCJS artifacts in', buildDir);
  console.error('Pass --artifact-dir <path> or rebuild ocjs.');
  process.exit(1);
}

const initMod = await import(pathToFileURL(jsPath).href);
const init = initMod.default;

const loadT0 = performance.now();
const oc = await init({
  locateFile: (filename) => path.join(buildDir, filename),
});
const loadMs = performance.now() - loadT0;

const order = Object.keys(SAMPLES).sort();
const results = {
  engine,
  ocjsLoadMs: loadMs,
  warmup,
  iterations: iters,
  artifactDir: buildDir,
  wasmSize: fs.statSync(wasmPath).size,
  samples: {},
};

for (const name of order) {
  const fn = SAMPLES[name];
  for (let w = 0; w < warmup; w++) fn(oc);
  const times = [];
  for (let k = 0; k < iters; k++) {
    const t0 = performance.now();
    fn(oc);
    times.push(performance.now() - t0);
  }
  results.samples[name] = {
    medianMs: median(times),
    meanMs: times.reduce((a, b) => a + b, 0) / times.length,
    minMs: Math.min(...times),
    maxMs: Math.max(...times),
    timesMs: times,
  };
}

const payload = JSON.stringify(results, null, 2);
if (out) {
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(path.resolve(out), payload);
}
console.log(payload);
