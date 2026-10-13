// Benchmark E2 (EM_JS + val::module_property) against E (Function(src) cached)
// and V7 (embind free fn no-op dispose, lower bound) on identical hardware/runtime.

import createCspSafe from './csp-safe.mjs';
import createPureCpp from './pure-cpp.mjs';

const csp = await createCspSafe();
const pure = await createPureCpp();

console.log('Node:', process.versions.node, 'V8:', process.versions.v8);

const N_WARM = 5_000;
const N_ITERS = 500_000;

function bench(label, factory, useDispose = true) {
  for (let i = 0; i < N_WARM; i++) {
    const r = factory();
    if (useDispose && r[Symbol.dispose]) {
      try { r[Symbol.dispose](); } catch {}
    } else if (r.theP?.delete) {
      r.theP.delete();
      r.theV1?.delete?.();
    }
  }
  const t0 = process.hrtime.bigint();
  for (let i = 0; i < N_ITERS; i++) {
    const r = factory();
    if (useDispose && r[Symbol.dispose]) {
      try { r[Symbol.dispose](); } catch {}
    } else if (r.theP?.delete) {
      r.theP.delete();
      r.theV1?.delete?.();
    }
  }
  const t1 = process.hrtime.bigint();
  return Number(t1 - t0) / N_ITERS;
}

const samples = 5;
const labels = [
  ['E2 EM_JS uncached (re-lookup)',   () => csp.Container.makeViaEmJs(),         true],
  ['E2 EM_JS cached val handles',     () => csp.Container.makeViaEmJsCached(),   true],
  ['E2 no-dispose (lower bound)',     () => csp.Container.makeWithoutDispose(),  false],
  ['E  Function(src) cached',         () => pure.Container.makeV6_cached(),      true],
  ['E  Function(src) fresh',          () => pure.Container.makeV6_fn_ctor(),     true],
  ['V7 embind free fn (no-op disp)',  () => pure.Container.makeV7_embind_fn(),   false],
];

const results = [];
for (const [label, factory, useDispose] of labels) {
  const runs = [];
  for (let s = 0; s < samples; s++) runs.push(bench(label, factory, useDispose));
  runs.sort((a, b) => a - b);
  const median = runs[Math.floor(runs.length / 2)];
  results.push({ label, median, runs });
  console.log(`  ${label.padEnd(34)} median=${median.toFixed(0).padStart(5)} ns/op  (samples: ${runs.map(r => r.toFixed(0)).join(', ')})`);
}

const e2_uncached = results[0].median;
const e2_cached = results[1].median;
const e2_no_disp = results[2].median;
const e_cached = results[3].median;

console.log('');
console.log(`E2 cached vs E2 uncached:    ${(e2_cached / e2_uncached).toFixed(3)}x  (Δ=${(e2_cached - e2_uncached).toFixed(0)} ns/op)`);
console.log(`E2 cached vs E cached:       ${(e2_cached / e_cached).toFixed(3)}x  (Δ=${(e2_cached - e_cached).toFixed(0)} ns/op)`);
console.log(`E2 cached dispose cost:      ${(e2_cached - e2_no_disp).toFixed(0)} ns/op above bare val::object()`);
