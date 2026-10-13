// POC runner — verifies the three strategies side by side.
//
//  1. Data parity: all three strategies must produce the same (x, y, z) tuples.
//  2. JS-side type ergonomics: Strategy D must return a real Array; Strategy
//     A must return an opaque embind ClassHandle.
//  3. Round-trip cost: time per call across n in {10, 100, 1000, 10000}.

import { createRequire } from "node:module";
import { performance } from "node:perf_hooks";

const require = createRequire(import.meta.url);
const createModule = (await import("./experiment.mjs")).default;
const Module = await createModule();

function bench(label, fn, iters) {
  // warmup
  for (let i = 0; i < 5; ++i) fn();
  const t0 = performance.now();
  let last;
  for (let i = 0; i < iters; ++i) last = fn();
  const t1 = performance.now();
  return { label, iters, ms: t1 - t0, last };
}

function readPointsViaStatusQuoHandle(handle) {
  const out = [];
  const lo = handle.Lower();
  const hi = handle.Upper();
  for (let i = lo; i <= hi; ++i) {
    const p = handle.Value(i);
    out.push([p.x, p.y, p.z]);
  }
  return out;
}

function asTuples(arr) {
  return arr.map((p) => [p.x, p.y, p.z]);
}

function deepEq(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }
  return true;
}

console.log("\n══════ Data-parity check (n=5) ══════");
const expected = [
  [0, 0, 0], [1, 2, 3], [2, 4, 6], [3, 6, 9], [4, 8, 12],
];

const handleA = Module.getPoints_strategyA(5);
const arrA = readPointsViaStatusQuoHandle(handleA);
handleA.delete();

const rawC = Module.getPoints_strategyC(5);
const arrC = Array.isArray(rawC) ? asTuples(rawC) : null;
const arrD = asTuples(Module.getPoints_strategyD(5));
const arrDg = asTuples(Module.getPoints_strategyD_generic(5));

console.log("  Expected                                       :", expected);
console.log("  Strategy A (status quo class_<>)               :", arrA);
console.log("  Strategy C (BindingType<> specialization)      :", arrC ?? `[NOT array — ${rawC?.constructor?.name}]`);
console.log("  Strategy D (adapter + register_type<>)         :", arrD);
console.log("  Strategy D (generic-named)                     :", arrDg);

const ok = (label, val) => {
  const eq = deepEq(expected, val);
  console.log(`  parity ${label.padEnd(40)}: ${eq ? "OK" : "FAIL"}`);
  return eq;
};
const a = ok("A (class_<> opaque handle)", arrA);
const d = ok("D (adapter Pnt3[])", arrD);
const dg = ok("D-generic (NCollection_Array1<Pnt3>)", arrDg);
if (!d || !dg) process.exit(1);

console.log("\n══════ Strategy D — DataMap shape ══════");
const map = Module.getDataMap_strategyD(3);
console.log("  raw:", JSON.stringify(map));
console.log(`  keys=${JSON.stringify(map.keys)} values=${JSON.stringify(map.values.map((p) => [p.x, p.y, p.z]))}`);

console.log("\n══════ Type-ergonomics check ══════");
const sample = Module.getPoints_strategyD(3);
console.log(
  "  Strategy D return is a real JS Array?",
  Array.isArray(sample),
  "  → typeof:", typeof sample,
  "  → constructor:", sample.constructor.name,
);
const sampleA = Module.getPoints_strategyA(3);
console.log(
  "  Strategy A return is a real JS Array?",
  Array.isArray(sampleA),
  "  → typeof:", typeof sampleA,
  "  → constructor:", sampleA.constructor.name,
);
sampleA.delete();

console.log("\n══════ Round-trip cost (median over 3 runs) ══════");
const sizes = [10, 100, 1000];
for (const n of sizes) {
  const iters = Math.max(20, Math.floor(2000 / n));
  const runs = [];
  for (let r = 0; r < 3; ++r) {
    runs.push({
      D: bench("D", () => {
        const arr = Module.getPoints_strategyD(n);
        let sum = 0;
        for (const p of arr) sum += p.x + p.y + p.z;
        return sum;
      }, iters),
    });
  }
  const median = (key) =>
    runs.map((r) => r[key].ms).sort((a, b) => a - b)[Math.floor(runs.length / 2)];
  const d = median("D");
  console.log(
    `  n=${String(n).padStart(5)}  iters=${String(iters).padStart(4)}  ` +
      `D=${d.toFixed(2).padStart(7)}ms  ` +
      `→ ${(d / iters * 1000).toFixed(2).padStart(6)}µs/call  ` +
      `${(d / iters / n * 1000000).toFixed(0).padStart(4)}ns/element`,
  );
}

console.log("\n══════ Generated .d.ts surface (excerpt) ══════");
const fs = require("node:fs");
const dts = fs.readFileSync("./experiment.d.ts", "utf8");
const interesting = dts
  .split("\n")
  .filter((l) =>
    /getPoints_strategy|NCollection_Array1|Pnt3\[\]|Pnt3Array|GenericPnt3Container|register_type|class NCollection_Array1_Pnt3/.test(
      l,
    ),
  )
  .slice(0, 40);
for (const l of interesting) console.log("  " + l.trim());

console.log("\nDONE.");
