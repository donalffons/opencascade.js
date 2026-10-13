// Run the MT binary with `parallel: false` on ALL samples (and skip
// `SetParallelMode(true)`). Isolates pthread-binary overhead from actual
// parallelization gains -- the headline `run-bench.mjs` already gives the
// MT-with-parallel-on numbers.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import { SAMPLES } from './samples.mjs';

const median = (v) => { const s = [...v].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const round = (n, d = 4) => { const k = Math.pow(10, d); return Math.round(n * k) / k; };

const buildDir = path.resolve(import.meta.dirname, '../../dist');
const jsPath = path.join(buildDir, 'opencascade_multi.js');

const t0Load = performance.now();
const { default: init } = await import(pathToFileURL(jsPath).href);
const oc = await init({ locateFile: (f) => path.join(buildDir, f) });
const loadMs = performance.now() - t0Load;

// Do NOT call SetParallelMode(true) -- keep OCCT global default (off).
const warmup = 2, iters = 7;
const result = { binary: 'multi-noparallel', loadMs: round(loadMs, 1), samples: {}, totals: {} };
const order = Object.keys(SAMPLES).sort();
for (const name of order) {
  const fn = SAMPLES[name];
  for (let w = 0; w < warmup; w++) fn(oc, { parallel: false });
  const times = [];
  for (let k = 0; k < iters; k++) {
    const t0 = performance.now();
    fn(oc, { parallel: false });
    times.push(performance.now() - t0);
  }
  result.samples[name] = { medianMs: round(median(times), 4), timesMs: times.map((t) => round(t, 4)) };
}
result.totals.sumOfMediansMs = round(order.reduce((a, n) => a + result.samples[n].medianMs, 0), 4);
console.log(JSON.stringify(result, null, 2));
