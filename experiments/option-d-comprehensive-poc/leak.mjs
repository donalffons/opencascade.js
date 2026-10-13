// Leak detection: hammer each producer 100k times and assert no
// monotonic growth past a 5% envelope (10MB floor for noise) in either
// V8 heap or wasm linear memory.
//
// Per-strategy contracts under test:
//   Strategy A  : requires explicit .delete() per call. Without .delete(),
//                 the underlying C++ instance leaks via embind's class
//                 wire bridge.
//   Strategy D  : GC-only — no explicit cleanup needed. JS Array becomes
//                 unreachable after the loop iteration; V8 reclaims it.
//   Strategy Dp : the *_owned variant requires explicit freeStrategyDpBuffer.
//                 The non-owned variant LEAKS on purpose (documented).
//                 Tested via the *_owned variant only.

import createModule from "./experiment.mjs";

const Module = await createModule();
const ITERATIONS = 100_000;
const ELEMENT_COUNT = 64;
const FLOOR_BYTES = 10 * 1024 * 1024;
const ENVELOPE = 0.05;

let failures = 0;
const ok = (label, cond, detail = "") => {
  const status = cond ? "ok " : "FAIL";
  if (!cond) failures += 1;
  console.log(`  ${status}  ${label}${detail ? "  — " + detail : ""}`);
};

const wasmMem = () => Module.HEAP8.byteLength;

const sample = () => {
  if (global.gc) global.gc();
  return { v8: process.memoryUsage().heapUsed, wasm: wasmMem() };
};

const fmtMB = (b) => (b / (1024 * 1024)).toFixed(2);

const runLeakProbe = (label, loopFn) => {
  // Warmup so the wasm linear memory grows to its steady state before we
  // baseline the comparison.
  for (let i = 0; i < 1000; i++) loopFn();
  const before = sample();
  for (let i = 0; i < ITERATIONS; i++) loopFn();
  const after = sample();
  const v8Delta = after.v8 - before.v8;
  const wasmDelta = after.wasm - before.wasm;
  const v8Growth = v8Delta / Math.max(before.v8, FLOOR_BYTES);
  const wasmGrowth = wasmDelta / Math.max(before.wasm, FLOOR_BYTES);
  console.log(`  ${label}`);
  console.log(`    v8   : ${fmtMB(before.v8)} MB → ${fmtMB(after.v8)} MB  (Δ ${fmtMB(v8Delta).padStart(6)} MB, ${(v8Growth * 100).toFixed(1)}%)`);
  console.log(`    wasm : ${fmtMB(before.wasm)} MB → ${fmtMB(after.wasm)} MB  (Δ ${fmtMB(wasmDelta).padStart(6)} MB, ${(wasmGrowth * 100).toFixed(1)}%)`);
  ok(`${label} v8 within ${ENVELOPE * 100}%`,   v8Growth   < ENVELOPE, `growth=${(v8Growth * 100).toFixed(1)}%`);
  ok(`${label} wasm within ${ENVELOPE * 100}%`, wasmGrowth < ENVELOPE, `growth=${(wasmGrowth * 100).toFixed(1)}%`);
};

console.log("Strategy A — requires .delete() per call");
runLeakProbe("Strategy A (.delete() called)", () => {
  const a = Module.getArray1Pnt3_strategyA(ELEMENT_COUNT);
  a.delete();
});

console.log("\nStrategy D — GC-only, no explicit cleanup");
runLeakProbe("Strategy D (Array1<Pnt3>)", () => {
  Module.getArray1Pnt3_strategyD(ELEMENT_COUNT);
});

console.log("\nStrategy Dp owned — requires freeStrategyDpBuffer(ptr)");
runLeakProbe("Strategy Dp owned (free called)", () => {
  const env = Module.getArray1Double_strategyDp_owned(ELEMENT_COUNT);
  Module.freeStrategyDpBuffer(env.ptr);
});

console.log("\nStrategy F — class_<NCollectionLiveHandle>, requires .delete()");
runLeakProbe("Strategy F (.delete() called)", () => {
  const lh = Module.getLiveHandle_Array1Pnt3(ELEMENT_COUNT);
  lh.delete();
});

console.log("\nNegative control — Strategy A without .delete() (expected to leak wasm memory)");
{
  // Larger element count + element size (Pnt3=24B) so the wasm allocations
  // dominate over Embind's small-block bucket reuse and the leak shows up
  // in HEAP8.byteLength growth.
  const LEAK_N = 4096;
  const LEAK_ITERS = 5000;
  const before = sample();
  for (let i = 0; i < LEAK_ITERS; i++) {
    Module.getArray1Pnt3_strategyA(LEAK_N);
  }
  const after = sample();
  const wasmDelta = after.wasm - before.wasm;
  console.log(`    Δwasm=${fmtMB(wasmDelta)} MB after ${LEAK_ITERS} undeleted ${LEAK_N}-element handles`);
  ok("Negative control DID leak wasm linear memory (sanity check)",
     wasmDelta > 1024 * 1024, `δ=${fmtMB(wasmDelta)} MB (expected > 1 MB)`);
}

console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} leak check(s) failed`);
process.exit(failures === 0 ? 0 : 1);
