// Bench harness covering every (strategy × shape × size) combination.
// Captures: median µs/call, ns/element, V8 heap delta, wasm linear memory
// delta. Emits results.json + a markdown table to stdout for the research
// doc's Appendix C.

import { writeFileSync } from "node:fs";
import createModule from "./experiment.mjs";

const Module = await createModule();

const SIZES = [10, 100, 1000, 10_000];
const ITERATIONS = { 10: 5000, 100: 2000, 1000: 500, 10_000: 100 };
const WARMUP_FRACTION = 0.1;

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) >> 1] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};

const wasmMemBytes = () => Module.HEAP8.byteLength;

const sizedRun = (label, size, iters, fn) => {
  const warmups = Math.max(1, Math.floor(iters * WARMUP_FRACTION));
  for (let i = 0; i < warmups; i++) fn();

  if (global.gc) global.gc();
  const memBefore = process.memoryUsage().heapUsed;
  const wasmBefore = wasmMemBytes();

  const samples = new Array(iters);
  for (let i = 0; i < iters; i++) {
    const t0 = performance.now();
    fn();
    samples[i] = performance.now() - t0;
  }

  if (global.gc) global.gc();
  const memAfter = process.memoryUsage().heapUsed;
  const wasmAfter = wasmMemBytes();

  const medMs = median(samples);
  return {
    label,
    size,
    iters,
    median_us_per_call: medMs * 1000,
    ns_per_element: (medMs * 1e6) / Math.max(1, size),
    v8_heap_delta_bytes: memAfter - memBefore,
    wasm_mem_delta_bytes: wasmAfter - wasmBefore,
  };
};

// Each shape gets a triple of producers — the bench iterates them when
// they exist; missing strategies are silently skipped (e.g. Strategy Dp
// only applies to primitive sequences).
const shapes = [
  {
    name: "Array1<Pnt3>",
    producers: {
      A:  (n) => { const x = Module.getArray1Pnt3_strategyA(n); x.delete(); },
      D:  (n) => { Module.getArray1Pnt3_strategyD(n); },
      Dp: (n) => { Module.getArray1Pnt3_strategyDp_interleaved(n); },
    },
  },
  {
    name: "Array1<double>",
    producers: {
      A:  (n) => { const x = Module.getArray1Double_strategyA(n); x.delete(); },
      D:  (n) => { Module.getArray1Double_strategyD(n); },
      Dp: (n) => { Module.getArray1Double_strategyDp(n); },
    },
  },
  {
    name: "Array1<int>",
    producers: {
      A:  (n) => { const x = Module.getArray1Int_strategyA(n); x.delete(); },
      D:  (n) => { Module.getArray1Int_strategyD(n); },
      Dp: (n) => { Module.getArray1Int_strategyDp(n); },
    },
  },
  {
    name: "Array2<double>",
    sizeFn: (n) => n,
    producers: {
      A:  (n) => { const x = Module.getArray2Double_strategyA(Math.ceil(Math.sqrt(n)), Math.ceil(Math.sqrt(n))); x.delete(); },
      D:  (n) => { Module.getArray2Double_strategyD(Math.ceil(Math.sqrt(n)), Math.ceil(Math.sqrt(n))); },
      Dp: (n) => { Module.getArray2Double_strategyDp(Math.ceil(Math.sqrt(n)), Math.ceil(Math.sqrt(n))); },
    },
  },
  {
    name: "DynamicArray<Pnt3>",
    producers: {
      A:  (n) => { const x = Module.getDynArrayPnt3_strategyA(n); x.delete(); },
      D:  (n) => { Module.getDynArrayPnt3_strategyD(n); },
    },
  },
  {
    name: "Sequence<Pnt3>",
    producers: {
      A:  (n) => { const x = Module.getSequencePnt3_strategyA(n); x.delete(); },
      D:  (n) => { Module.getSequencePnt3_strategyD(n); },
    },
  },
  {
    name: "List<Pnt3>",
    producers: {
      A:  (n) => { const x = Module.getListPnt3_strategyA(n); x.delete(); },
      D:  (n) => { Module.getListPnt3_strategyD(n); },
    },
  },
  {
    name: "Map<int>",
    producers: {
      A:  (n) => { const x = Module.getMapInt_strategyA(n); x.delete(); },
      D:  (n) => { Module.getMapInt_strategyD(n); },
    },
  },
  {
    name: "DataMap<string,Pnt3>",
    producers: {
      A:  (n) => { const x = Module.getDataMapStrPnt_strategyA(n); x.delete(); },
      D:  (n) => { Module.getDataMapStrPnt_strategyD(n); },
      Dkv: (n) => { Module.getDataMapStrPnt_strategyD_kv(n); },
    },
  },
  {
    name: "IndexedMap<string>",
    producers: {
      A:  (n) => { const x = Module.getIndexedMapStr_strategyA(n); x.delete(); },
      D:  (n) => { Module.getIndexedMapStr_strategyD(n); },
    },
  },
  {
    name: "IndexedDataMap<string,Pnt3>",
    producers: {
      A:  (n) => { const x = Module.getIDataMapStrPnt_strategyA(n); x.delete(); },
      D:  (n) => { Module.getIDataMapStrPnt_strategyD(n); },
    },
  },
  {
    name: "DoubleMap<int,string>",
    producers: {
      A:  (n) => { const x = Module.getDoubleMapIntStr_strategyA(n); x.delete(); },
      D:  (n) => { Module.getDoubleMapIntStr_strategyD(n); },
    },
  },
];

console.log("Bench: every (shape × strategy × size). This may take ~30s …\n");

const results = [];
for (const shape of shapes) {
  for (const [strategy, fn] of Object.entries(shape.producers)) {
    for (const n of SIZES) {
      const iters = ITERATIONS[n];
      const r = sizedRun(`${shape.name} :: ${strategy}`, n, iters, () => fn(n));
      r.shape = shape.name;
      r.strategy = strategy;
      results.push(r);
      const us = r.median_us_per_call.toFixed(2).padStart(8);
      const nse = r.ns_per_element.toFixed(1).padStart(8);
      console.log(`  ${shape.name.padEnd(30)} ${strategy.padEnd(4)} n=${String(n).padEnd(6)} ${us} µs   ${nse} ns/el`);
    }
  }
}

// ── OQ4 iterator vs bulk ────────────────────────────────────────────
console.log("\nOQ4: iterator vs bulk\n");
for (const n of SIZES) {
  const bulk = sizedRun(`Iterator-vs-bulk :: bulk D`, n, ITERATIONS[n], () => {
    Module.getArray1Pnt3_strategyD(n);
  });
  const iter = sizedRun(`Iterator-vs-bulk :: iterator D`, n, ITERATIONS[n], () => {
    const src = Module.getIterator_strategyD(n);
    let item;
    do { item = Module.iteratorNextPnt3(src); } while (!item.done);
  });
  results.push({ ...bulk, shape: "Iterator vs bulk", strategy: "bulk-D" });
  results.push({ ...iter, shape: "Iterator vs bulk", strategy: "iter-D" });
  const ratio = (iter.median_us_per_call / bulk.median_us_per_call).toFixed(1);
  console.log(`  n=${String(n).padEnd(6)}  bulk=${bulk.median_us_per_call.toFixed(2)} µs  iter=${iter.median_us_per_call.toFixed(2)} µs  iter/bulk=${ratio}×`);
}

// ── OQ5 LiveHandle vs Strategy A per-permutation class ──────────────
console.log("\nOQ5: NCollectionLiveHandle.At(i) vs Strategy A per-permutation .Value(i)\n");
for (const n of SIZES) {
  const stratA = sizedRun("LH-vs-A :: A iterate", n, ITERATIONS[n] >> 1, () => {
    const a = Module.getArray1Pnt3_strategyA(n);
    for (let i = 0; i < n; i++) a.Value(i);
    a.delete();
  });
  const stratF = sizedRun("LH-vs-A :: F iterate", n, ITERATIONS[n] >> 1, () => {
    const lh = Module.getLiveHandle_Array1Pnt3(n);
    for (let i = 0; i < n; i++) lh.At(i);
    lh.delete();
  });
  const stratFBulk = sizedRun("LH-vs-A :: F ToArray", n, ITERATIONS[n] >> 1, () => {
    const lh = Module.getLiveHandle_Array1Pnt3(n);
    lh.ToArray();
    lh.delete();
  });
  results.push({ ...stratA,     shape: "LH vs A (iterate)", strategy: "A-iter" });
  results.push({ ...stratF,     shape: "LH vs A (iterate)", strategy: "F-iter" });
  results.push({ ...stratFBulk, shape: "LH vs A (iterate)", strategy: "F-ToArray" });
  console.log(`  n=${String(n).padEnd(6)}  A.Value/i=${stratA.median_us_per_call.toFixed(2)} µs  F.At/i=${stratF.median_us_per_call.toFixed(2)} µs  F.ToArray=${stratFBulk.median_us_per_call.toFixed(2)} µs`);
}

writeFileSync("./results.json", JSON.stringify(results, null, 2));
console.log(`\nWrote results.json (${results.length} rows)`);
