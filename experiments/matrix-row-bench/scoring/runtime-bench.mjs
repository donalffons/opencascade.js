// runtime-bench.mjs — microbench for val-vs-optional per-call overhead (Q3).
//
// Per Q3 expectation: quantify ns/call delta between std::optional<T>
// trailing-default and emscripten::val isUndefined()-discrimination on
// the same C++ method, across both warm + cold call shapes.
//
// Calls are budgeted at N=10000 per shape per primitive, with a 100-iter
// warmup. Reports mean / p95 / p99 in nanoseconds.
//
// Usage:
//   import { benchPair } from './runtime-bench.mjs';
//   const result = await benchPair({
//     rowId: 1,
//     valCallable:  (args) => valMod.row01_val(...args),
//     optCallable:  (args) => optMod.row01_optional(...args),
//     shapes: [{ name: 'omitted', args: [] }, { name: 'value-true', args: [true] }],
//   });
//
// In scaffold mode (callables undefined / unbound), returns nulls with a
// 'pending build' marker so the runner aggregates a complete row.

import { performance } from 'node:perf_hooks';

// Batched nanobench: each "sample" times BATCH_SIZE calls in a tight loop, then
// divides total elapsed by BATCH_SIZE. This amortises performance.now()
// resolution (≈1µs on Node) so sub-µs per-call costs are measurable.
const DEFAULT_SAMPLES = 50;
const DEFAULT_BATCH_SIZE = 2000;
const DEFAULT_WARMUP_BATCHES = 5;

const percentile = (sorted, p) => {
  if (sorted.length === 0) return null;
  const idx = Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length));
  return sorted[idx];
};

const benchShape = async (callable, shape, samples, batchSize, warmupBatches) => {
  if (typeof callable !== 'function') {
    return { name: shape.name, scaffold: true, meanNs: null, p95Ns: null, p99Ns: null };
  }

  let firstError = null;
  const runBatch = (n) => {
    for (let i = 0; i < n; i += 1) {
      try {
        callable(shape.args);
      } catch (err) {
        firstError = String(err?.message ?? err);
        return false;
      }
    }
    return true;
  };

  for (let w = 0; w < warmupBatches; w += 1) {
    if (!runBatch(batchSize)) break;
  }
  if (firstError) {
    return { name: shape.name, scaffold: false, error: firstError, meanNs: null, p95Ns: null, p99Ns: null };
  }

  const perCallSamples = new Array(samples);
  for (let s = 0; s < samples; s += 1) {
    const t0 = performance.now();
    if (!runBatch(batchSize)) break;
    const t1 = performance.now();
    perCallSamples[s] = ((t1 - t0) * 1_000_000) / batchSize;
  }
  if (firstError) {
    return { name: shape.name, scaffold: false, error: firstError, meanNs: null, p95Ns: null, p99Ns: null };
  }

  const sorted = perCallSamples.slice().sort((a, b) => a - b);
  const meanNs = Math.round(perCallSamples.reduce((a, b) => a + b, 0) / perCallSamples.length);
  return {
    name: shape.name,
    scaffold: false,
    samples,
    batchSize,
    meanNs,
    medianNs: Math.round(percentile(sorted, 50)),
    p95Ns: Math.round(percentile(sorted, 95)),
    p99Ns: Math.round(percentile(sorted, 99)),
  };
};

export const benchPair = async (options) => {
  const samples = options.samples ?? DEFAULT_SAMPLES;
  const batchSize = options.batchSize ?? DEFAULT_BATCH_SIZE;
  const warmupBatches = options.warmupBatches ?? DEFAULT_WARMUP_BATCHES;

  const valResults = [];
  const optResults = [];
  for (const shape of options.shapes) {
    valResults.push(await benchShape(options.valCallable, shape, samples, batchSize, warmupBatches));
    optResults.push(await benchShape(options.optCallable, shape, samples, batchSize, warmupBatches));
  }

  const perShapeDelta = options.shapes.map((shape, i) => {
    const v = valResults[i];
    const o = optResults[i];
    if (v?.meanNs == null || o?.meanNs == null) {
      return { name: shape.name, deltaNs: null, deltaPct: null, scaffold: true };
    }
    const deltaNs = v.meanNs - o.meanNs;
    const deltaPct = o.meanNs === 0 ? null : (deltaNs / o.meanNs) * 100;
    return { name: shape.name, deltaNs, deltaPct: deltaPct === null ? null : Number(deltaPct.toFixed(2)) };
  });

  const meanValNs = average(valResults.map((r) => r.meanNs));
  const meanOptNs = average(optResults.map((r) => r.meanNs));
  const overallDeltaNs = meanValNs == null || meanOptNs == null ? null : meanValNs - meanOptNs;
  const overallDeltaPct =
    meanValNs == null || meanOptNs == null || meanOptNs === 0
      ? null
      : Number((((meanValNs - meanOptNs) / meanOptNs) * 100).toFixed(2));

  return {
    rowId: options.rowId,
    samples,
    batchSize,
    warmupBatches,
    valShapes: valResults,
    optionalShapes: optResults,
    perShapeDelta,
    overall: { meanValNs, meanOptNs, deltaNs: overallDeltaNs, deltaPct: overallDeltaPct },
  };
};

const average = (arr) => {
  const filtered = arr.filter((v) => typeof v === 'number');
  if (filtered.length === 0) return null;
  return Math.round(filtered.reduce((a, b) => a + b, 0) / filtered.length);
};
