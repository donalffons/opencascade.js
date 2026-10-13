// Bench the pure-C++ paths against current B8 JS-wrap baseline and
// against output-by-reference baseline.

import createModule from './pure-cpp.mjs';
const Module = await createModule();
console.log('Node:', process.versions.node, 'V8:', process.versions.v8);

const N_WARM = 1_000;
const N_ITERS = 200_000;

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
  const ns = Number(t1 - t0) / N_ITERS;
  console.log(`  ${label.padEnd(34)} ${ns.toFixed(0).padStart(6)} ns/op`);
  return ns;
}

const v6 = bench('V6 cached  (cpp dispose, no JS)', () => Module.Container.makeV6_cached());
const v6f = bench('V6 fresh   (new Function/call)', () => Module.Container.makeV6_fn_ctor());
const v7 = bench('V7 embind free fn (no dispose)', () => Module.Container.makeV7_embind_fn(), false);

console.log('');
console.log(`Speed-up V6_cached vs V6_fresh: ${(v6f / v6).toFixed(2)}x`);
