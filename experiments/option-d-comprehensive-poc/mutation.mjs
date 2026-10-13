// Resolves OQ2: mutation semantics across strategies.
//
//   Strategy A  : live handle, .SetValue(i,v) is observable on subsequent .Value(i)
//   Strategy D  : adapter returns a fresh JS Array; mutating it has no
//                 effect on subsequent producer calls (each call is an
//                 independent copy)
//   Strategy Dp : typed_memory_view returns a JS TypedArray that ALIASES
//                 the underlying wasm linear memory; mutations are
//                 OBSERVABLE through the same wasm pointer
//
// The rollout consequence (recorded in the research doc): typed_memory_view
// adapters MUST be flagged "view, not copy" in their JSDoc — consumers
// surprised by shared-storage mutation will hit the same class of bug
// that has tripped every Embind-based binding generator in the wild.

import createModule from "./experiment.mjs";

const Module = await createModule();
const N = 32;

let failures = 0;
const ok = (label, cond, detail = "") => {
  const status = cond ? "ok " : "FAIL";
  if (!cond) failures += 1;
  console.log(`  ${status}  ${label}${detail ? "  — " + detail : ""}`);
};

console.log("== Strategy A: live handle, mutation visible ==");
{
  const a = Module.getArray1Pnt3_strategyA(N);
  const before = a.Value(3);
  a.SetValue(3, { x: 999, y: 999, z: 999 });
  const after = a.Value(3);
  ok("before reflects original",         before.x === 3);
  ok("SetValue mutation visible",        after.x === 999);
  ok("Subsequent producer call is fresh", Module.getArray1Pnt3_strategyA(N).Value(3).x === 3);
  a.delete();
}

console.log("== Strategy D: copy isolation across calls ==");
{
  const d1 = Module.getArray1Pnt3_strategyD(N);
  d1[3] = { x: -1, y: -2, z: -3 };
  ok("local mutation visible in same array", d1[3].x === -1);
  const d2 = Module.getArray1Pnt3_strategyD(N);
  ok("subsequent producer call is fresh",    d2[3].x === 3);
  ok("d1 mutation did NOT leak into d2",     d1[3].x !== d2[3].x);
}

console.log("== Strategy Dp: shared-storage view (mutation IS observable) ==");
{
  const owned = Module.getArray1Double_strategyDp_owned(N);
  const ptr = owned.ptr;
  const view = owned.view;
  const before = view[5];
  ok("view is Float64Array", view instanceof Float64Array);
  ok("before from C++ matches view", before === Module.readStrategyDpBufferAt(ptr, 5));
  view[5] = 1234.5;
  const afterFromCpp = Module.readStrategyDpBufferAt(ptr, 5);
  ok("JS-side mutation reflected in C++ memory", afterFromCpp === 1234.5,
     `view[5]=${view[5]} cpp=${afterFromCpp}`);
  Module.freeStrategyDpBuffer(ptr);
}

console.log("== Strategy Dp: lifetime contract (read-only path) ==");
{
  // The non-owned variant leaks per-call (documented; bench measures the
  // cost). Demonstrate that the view stays valid until GC, then re-read.
  const v1 = Module.getArray1Double_strategyDp(N);
  const snapshot = v1[7];
  ok("view value matches expected", snapshot === 7 * 0.5);
  // After this scope the underlying buffer leaks (intentional in this
  // adapter — it has no free hook). Production rollout uses the *_owned
  // variant for any case where the view escapes a function call.
}

console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} mutation check(s) failed`);
process.exit(failures === 0 ? 0 : 1);
