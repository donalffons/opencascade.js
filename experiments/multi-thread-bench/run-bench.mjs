// Single-threaded vs multi-threaded OCJS benchmark harness.
//
// Drives the same 11-sample suite (`samples.mjs`) against two binaries:
//   - `dist/opencascade_single.{js,wasm}`         (single-threaded, baseline)
//   - `dist/opencascade_multi.{js,wasm}`   (multi-threaded)
//
// For the multi-threaded run, `BOPAlgo_Options.SetParallelMode(true)` is set
// once at startup AND each parallel-aware sample receives `{ parallel: true }`
// in its options object so `BRepMesh_IncrementalMesh(..., isInParallel=true)`
// and `algo.SetRunParallel(true)` take effect per-instance.
//
// Output: structured JSON per binary, plus a side-by-side comparison table
// printed to stdout. Total wall time per binary is reported. Per-sample
// speedup factors are computed against the single-threaded baseline.
//
// Usage:
//   node experiments/multi-thread-bench/run-bench.mjs \
//     --warmup 2 --iters 7 \
//     --out experiments/multi-thread-bench/results.json
//
//   Or run a single binary:
//   node run-bench.mjs --binary single  -> only single-threaded
//   node run-bench.mjs --binary multi   -> only multi-threaded
//   node run-bench.mjs                  -> both (default)
import * as fs from 'node:fs';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import { SAMPLES, PARALLEL_AWARE_SAMPLES } from './samples.mjs';

function parseArgs(argv) {
  let warmup = 2;
  let iters = 7;
  let out = '';
  let artifactDir = '';
  let binary = 'both'; // 'single' | 'multi' | 'both'
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--warmup' && argv[i + 1]) warmup = Number(argv[++i]);
    else if (argv[i] === '--iters' && argv[i + 1]) iters = Number(argv[++i]);
    else if (argv[i] === '--out' && argv[i + 1]) out = argv[++i];
    else if (argv[i] === '--artifact-dir' && argv[i + 1]) artifactDir = argv[++i];
    else if (argv[i] === '--binary' && argv[i + 1]) binary = argv[++i];
  }
  return { warmup, iters, out, artifactDir, binary };
}

function median(values) {
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function mean(values) {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function stddev(values, m) {
  const sq = values.reduce((a, v) => a + (v - m) * (v - m), 0);
  return Math.sqrt(sq / values.length);
}

async function runBinary({ label, binaryName, useParallel, warmup, iters, buildDir }) {
  const jsPath = path.join(buildDir, `${binaryName}.js`);
  const wasmPath = path.join(buildDir, `${binaryName}.wasm`);
  if (!fs.existsSync(jsPath) || !fs.existsSync(wasmPath)) {
    throw new Error(`Missing artifacts: ${jsPath} or ${wasmPath}`);
  }

  const t0Load = performance.now();
  const initMod = await import(pathToFileURL(jsPath).href);
  const init = initMod.default;
  const oc = await init({
    locateFile: (filename) => path.join(buildDir, filename),
  });
  const loadMs = performance.now() - t0Load;

  // Activate OCCT global parallel defaults if requested.
  // SetRunParallel(true) is also set per-instance inside the sample functions
  // for redundancy, since the global toggle is sticky.
  // Captured for the result manifest so reviewers can confirm activation.
  const parallelActivation = {
    BOPAlgo_SetParallelMode: false,
    BRepMesh_SetParallelDefault: false,
    OSD_ThreadPool_DefaultPool_size: null,
    OSD_ThreadPool_SetNbDefaultThreadsToLaunch: null,
    navigator_hardwareConcurrency: typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : null,
  };
  if (useParallel && oc.BOPAlgo_Options?.SetParallelMode) {
    oc.BOPAlgo_Options.SetParallelMode(true);
    parallelActivation.BOPAlgo_SetParallelMode = true;
  }
  if (useParallel && oc.BRepMesh_IncrementalMesh?.SetParallelDefault) {
    // Global mesh default: any subsequent BRepMesh_IncrementalMesh ctor that
    // doesn't pass an explicit isInParallel arg will fan out across the pool.
    oc.BRepMesh_IncrementalMesh.SetParallelDefault(true);
    parallelActivation.BRepMesh_SetParallelDefault = true;
  }
  if (useParallel && oc.OSD_ThreadPool?.DefaultPool) {
    // Force the lazy DefaultPool init now and read back its capacity so each
    // launcher can fan out to all logical CPUs. -1 means "use NbLogicalProcessors".
    const pool = oc.OSD_ThreadPool.DefaultPool(-1);
    const nbThreads = pool?.NbThreads ? pool.NbThreads() : null;
    parallelActivation.OSD_ThreadPool_DefaultPool_size = nbThreads;
    // Match the per-launcher cap to the pool size so a single OCCT call can
    // fan out across every worker. Default is the pool size, but make it
    // explicit so future code/test changes don't silently regress.
    if (nbThreads != null && pool.SetNbDefaultThreadsToLaunch) {
      pool.SetNbDefaultThreadsToLaunch(nbThreads);
      parallelActivation.OSD_ThreadPool_SetNbDefaultThreadsToLaunch = nbThreads;
    }
  }

  const wasmSize = fs.statSync(wasmPath).size;
  const result = {
    label,
    binary: binaryName,
    useParallel,
    parallelActivation,
    wasmSize,
    loadMs,
    samples: {},
    totals: {},
  };

  const order = Object.keys(SAMPLES).sort();
  for (const name of order) {
    const fn = SAMPLES[name];
    const opts = useParallel && PARALLEL_AWARE_SAMPLES.has(name)
      ? { parallel: true }
      : { parallel: false };

    // Warmup
    for (let w = 0; w < warmup; w++) fn(oc, opts);

    const times = [];
    for (let k = 0; k < iters; k++) {
      const t0 = performance.now();
      fn(oc, opts);
      times.push(performance.now() - t0);
    }
    const m = mean(times);
    result.samples[name] = {
      medianMs: round(median(times), 4),
      meanMs: round(m, 4),
      minMs: round(Math.min(...times), 4),
      maxMs: round(Math.max(...times), 4),
      stddevMs: round(stddev(times, m), 4),
      timesMs: times.map((t) => round(t, 4)),
      parallelAware: PARALLEL_AWARE_SAMPLES.has(name),
    };
  }

  // Totals: sum of medians, sum of means.
  const sumMedian = order.reduce((acc, n) => acc + result.samples[n].medianMs, 0);
  const sumMean = order.reduce((acc, n) => acc + result.samples[n].meanMs, 0);
  result.totals.sumOfMediansMs = round(sumMedian, 4);
  result.totals.sumOfMeansMs = round(sumMean, 4);

  return result;
}

function round(n, d = 4) {
  const k = Math.pow(10, d);
  return Math.round(n * k) / k;
}

function compareResults(single, multi) {
  const samples = Object.keys(single.samples).sort();
  const lines = [];
  const fmtMs = (v) => v.toFixed(2).padStart(8);
  const fmtPct = (v) => (v >= 0 ? '+' : '') + v.toFixed(1).padStart(5) + '%';
  lines.push('');
  lines.push('═══════════════════════════════════════════════════════════════════════════════════════════════');
  lines.push(`${'Sample'.padEnd(28)} ${'ST median'.padStart(10)}  ${'MT median'.padStart(10)}  ${'Δ ms'.padStart(8)}  ${'Δ %'.padStart(8)}  ${'speedup'.padStart(8)}  parallel?`);
  lines.push('───────────────────────────────────────────────────────────────────────────────────────────────');
  let stTotal = 0;
  let mtTotal = 0;
  for (const name of samples) {
    const stMed = single.samples[name].medianMs;
    const mtMed = multi.samples[name].medianMs;
    stTotal += stMed;
    mtTotal += mtMed;
    const delta = mtMed - stMed;
    const deltaPct = stMed === 0 ? 0 : ((mtMed - stMed) / stMed) * 100;
    const speedup = mtMed === 0 ? Infinity : stMed / mtMed;
    const par = single.samples[name].parallelAware ? '   *' : '    ';
    lines.push(
      `${name.padEnd(28)} ${fmtMs(stMed)}  ${fmtMs(mtMed)}  ${fmtMs(delta)}  ${fmtPct(deltaPct)}  ${speedup.toFixed(2).padStart(7)}x  ${par}`,
    );
  }
  lines.push('───────────────────────────────────────────────────────────────────────────────────────────────');
  const totDelta = mtTotal - stTotal;
  const totPct = stTotal === 0 ? 0 : (totDelta / stTotal) * 100;
  const totSpeedup = mtTotal === 0 ? Infinity : stTotal / mtTotal;
  lines.push(
    `${'TOTAL (sum of medians)'.padEnd(28)} ${fmtMs(stTotal)}  ${fmtMs(mtTotal)}  ${fmtMs(totDelta)}  ${fmtPct(totPct)}  ${totSpeedup.toFixed(2).padStart(7)}x`,
  );
  lines.push('═══════════════════════════════════════════════════════════════════════════════════════════════');
  lines.push('Legend: parallel? * = sample exercises an OCCT API with a parallel path');
  lines.push(`        load ST=${single.loadMs.toFixed(1)}ms  MT=${multi.loadMs.toFixed(1)}ms`);
  lines.push(`        wasm size ST=${(single.wasmSize / 1024 / 1024).toFixed(2)} MB  MT=${(multi.wasmSize / 1024 / 1024).toFixed(2)} MB`);
  const pa = multi.parallelActivation || {};
  lines.push(
    `        parallel activation: BOPAlgo.SetParallelMode=${pa.BOPAlgo_SetParallelMode}, ` +
      `BRepMesh.SetParallelDefault=${pa.BRepMesh_SetParallelDefault}, ` +
      `OSD_ThreadPool pool=${pa.OSD_ThreadPool_DefaultPool_size}, ` +
      `launcher cap=${pa.OSD_ThreadPool_SetNbDefaultThreadsToLaunch}, ` +
      `navigator.hardwareConcurrency=${pa.navigator_hardwareConcurrency}`,
  );
  return lines.join('\n');
}

// ────────────────────────────────────────────────────────────────
const { warmup, iters, out, artifactDir, binary } = parseArgs(process.argv);
const buildDir = path.resolve(
  artifactDir || path.join(import.meta.dirname, '../../dist'),
);

const out_root = { warmup, iters, buildDir, generatedAt: new Date().toISOString(), runs: {} };

if (binary === 'single' || binary === 'both') {
  console.error('\n── Running single-threaded baseline (dist/opencascade_single) ──');
  const single = await runBinary({
    label: 'single-threaded',
    binaryName: 'opencascade_single',
    useParallel: false,
    warmup,
    iters,
    buildDir,
  });
  out_root.runs.single = single;
  console.error(`  load=${single.loadMs.toFixed(1)}ms  sum-of-medians=${single.totals.sumOfMediansMs}ms`);
}

if (binary === 'multi' || binary === 'both') {
  console.error('\n── Running multi-threaded (dist/opencascade_multi, parallel ON) ──');
  const multi = await runBinary({
    label: 'multi-threaded',
    binaryName: 'opencascade_multi',
    useParallel: true,
    warmup,
    iters,
    buildDir,
  });
  out_root.runs.multi = multi;
  console.error(`  load=${multi.loadMs.toFixed(1)}ms  sum-of-medians=${multi.totals.sumOfMediansMs}ms`);
}

if (out_root.runs.single && out_root.runs.multi) {
  const tbl = compareResults(out_root.runs.single, out_root.runs.multi);
  console.log(tbl);
  out_root.comparison = {
    table: tbl,
  };
}

if (out) {
  const abs = path.resolve(out);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, JSON.stringify(out_root, null, 2));
  console.error(`\nResults written to ${abs}`);
}
