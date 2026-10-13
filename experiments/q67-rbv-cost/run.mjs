// Q6/Q7 benchmark runner.
// Usage: node run.mjs

import { performance } from 'node:perf_hooks';
import createModule from './experiment.mjs';

const Module = await createModule();

// Helper: pre-bind global Symbol.dispose disposer used by V5.
Module.__rbvDispose__ = function () {
  if (this.theP && typeof this.theP.delete === 'function') this.theP.delete();
  if (this.theV1 && typeof this.theV1.delete === 'function') this.theV1.delete();
  if (this.theV2 && typeof this.theV2.delete === 'function') this.theV2.delete();
};

// JS-side wrapper that materialises Symbol.dispose on a value_object result.
// This simulates the bindgen-generated postscript.
function withDispose(obj) {
  obj[Symbol.dispose] = function () {
    if (this.theP && typeof this.theP.delete === 'function') this.theP.delete();
    if (this.theV1 && typeof this.theV1.delete === 'function') this.theV1.delete();
    if (this.theV2 && typeof this.theV2.delete === 'function') this.theV2.delete();
  };
  return obj;
}

const ITERATIONS = parseInt(process.env.ITERATIONS ?? '200000', 10);
const WARMUP = parseInt(process.env.WARMUP ?? '20000', 10);
const REPEATS = parseInt(process.env.REPEATS ?? '15', 10);

const curve = new Module.Curve();

function bench(label, fn) {
  // Warmup
  for (let i = 0; i < WARMUP; i++) fn(i);
  const samples = [];
  for (let r = 0; r < REPEATS; r++) {
    const t0 = performance.now();
    for (let i = 0; i < ITERATIONS; i++) fn(i);
    const t1 = performance.now();
    samples.push((t1 - t0) * 1e3 / ITERATIONS); // µs/iter
  }
  samples.sort((a, b) => a - b);
  const median = samples[Math.floor(samples.length / 2)];
  const min = samples[0];
  const max = samples[samples.length - 1];
  const mean = samples.reduce((a, b) => a + b) / samples.length;
  const std = Math.sqrt(samples.reduce((s, x) => s + (x - mean) ** 2, 0) / samples.length);
  return { label, median, mean, std, min, max, samples };
}

const results = [];

// V1 baseline_ref: output-by-reference with pre-allocated outputs (no per-call alloc).
// This is the BEST case for V1 — outputs are recycled, no JS handle creation per iter.
const preP = new Module.Pnt3();
const preV1 = new Module.Vec3();
const preV2 = new Module.Vec3();
results.push(bench('V1 baseline_ref (recycled outputs)', (i) => {
  const u = 0.001 * i;
  curve.D2_baseline(u, preP, preV1, preV2);
  // No .delete() per iter (outputs are reused). This is the optimistic baseline.
}));

// V1b baseline_ref_alloc: like V1 but allocate+delete fresh outputs every call —
// reflects the natural JS API ergonomic (callers tend to not recycle).
results.push(bench('V1b baseline_ref (alloc/delete per call)', (i) => {
  const u = 0.001 * i;
  const p = new Module.Pnt3();
  const v1 = new Module.Vec3();
  const v2 = new Module.Vec3();
  curve.D2_baseline(u, p, v1, v2);
  p.delete();
  v1.delete();
  v2.delete();
}));

// V2 value_object: return POJO with class handle fields. Caller must dispose handles.
results.push(bench('V2 value_object (no dispose, property access)', (i) => {
  const u = 0.001 * i;
  const result = curve.D2_value_object(u);
  result.theP.X();
  result.theV1.Y();
  result.theV2.Z();
  result.theP.delete();
  result.theV1.delete();
  result.theV2.delete();
}));

// V2b value_object with destructuring (more idiomatic, possibly slower).
results.push(bench('V2b value_object (destructured)', (i) => {
  const u = 0.001 * i;
  const { theP, theV1, theV2 } = curve.D2_value_object(u);
  theP.X(); theV1.Y(); theV2.Z();
  theP.delete();
  theV1.delete();
  theV2.delete();
}));

// V3 value_object + JS-side Symbol.dispose wrap.
results.push(bench('V3 value_object + JS dispose wrap', (i) => {
  const u = 0.001 * i;
  const result = withDispose(curve.D2_value_object(u));
  result.theP.X(); result.theV1.Y(); result.theV2.Z();
  result[Symbol.dispose]();
}));

// V3b value_object + JS dispose via `using` (lexical resource management).
results.push(bench('V3b value_object + `using` declaration', (i) => {
  using result = withDispose(curve.D2_value_object(u(i)));
  result.theP.X(); result.theV1.Y(); result.theV2.Z();
}));

// V4 val::object() (no dispose) — fields populated on C++ side via val::set.
results.push(bench('V4 val::object() (no dispose, property access)', (i) => {
  const u = 0.001 * i;
  const result = curve.D2_val_no_dispose(u);
  result.theP.X(); result.theV1.Y(); result.theV2.Z();
  result.theP.delete();
  result.theV1.delete();
  result.theV2.delete();
}));

// Sanity check V5: verify Symbol.dispose is actually attached on C++ side.
{
  const probe = curve.D2_val_with_dispose(0.5);
  const ownKeys = Object.getOwnPropertyNames(probe);
  const ownSymbols = Object.getOwnPropertySymbols(probe);
  const disposer = probe[Symbol.dispose];
  console.log('V5 probe: keys =', ownKeys, 'symbols =', ownSymbols);
  console.log('V5 probe: Symbol.dispose property =', typeof disposer, disposer ? '(callable)' : '(missing)');
  if (ownSymbols.length) {
    const sym0 = ownSymbols[0];
    console.log('V5 probe: stored symbol description =', sym0.description, 'equals Symbol.dispose?', sym0 === Symbol.dispose);
    console.log('V5 probe: probe[sym0] =', typeof probe[sym0]);
  }
  if (typeof disposer === 'function') disposer.call(probe);
  else { probe.theP.delete(); probe.theV1.delete(); probe.theV2.delete(); }
}

// V4b val::object() + JS-side dispose wrap + `using`.
results.push(bench('V4b val::object() + JS dispose wrap (`using`)', (i) => {
  using result = withDispose(curve.D2_val_no_dispose(u(i)));
  result.theP.X(); result.theV1.Y(); result.theV2.Z();
}));

// V5 val::object() + C++-side Symbol.dispose attached, called manually.
results.push(bench('V5 val::object() + C++ Symbol.dispose (manual)', (i) => {
  const u = 0.001 * i;
  const result = curve.D2_val_with_dispose(u);
  result.theP.X(); result.theV1.Y(); result.theV2.Z();
  result[Symbol.dispose]();
}));

// V5b val::object() + C++-side Symbol.dispose, called via `using`.
// Some Node versions disagree with how V8 surfaces `Symbol.dispose` on emval-created
// objects; if `using` rejects the result we fall back to manual disposal so the bench
// still completes (logging the divergence).
{
  let usingWorks = true;
  try {
    const probe = curve.D2_val_with_dispose(0.5);
    using p = probe;
    p.theP.X();
  } catch (e) {
    usingWorks = false;
    console.log('V5b `using` not supported on emval-created objects:', e.message);
  }
  if (usingWorks) {
    results.push(bench('V5b val::object() + C++ Symbol.dispose (`using`)', (i) => {
      using result = curve.D2_val_with_dispose(u(i));
      result.theP.X(); result.theV1.Y(); result.theV2.Z();
    }));
  } else {
    results.push({ label: 'V5b skipped (using-incompatible)', median: NaN, mean: NaN, std: NaN, min: NaN, max: NaN, samples: [] });
  }
}

function u(i) {
  return 0.001 * i;
}

// ── Report ──────────────────────────────────────────────────────────

console.log('\n=== Q6/Q7: class-RBV cost benchmark ===');
console.log(`  iterations: ${ITERATIONS}, repeats: ${REPEATS}, warmup: ${WARMUP}`);
console.log(`  Node: ${process.version}\n`);
const baseline = results[0].median;
console.log('Label                                       median (µs/iter)   mean    std    min    max    vs V1');
console.log('-----                                       ----------------   ----    ---    ---    ---    -----');
for (const r of results) {
  const ratio = (r.median / baseline).toFixed(2);
  console.log(
    `${r.label.padEnd(44)}  ${r.median.toFixed(3).padStart(8)}        ${r.mean.toFixed(3).padStart(6)} ${r.std.toFixed(3).padStart(6)} ${r.min.toFixed(3).padStart(6)} ${r.max.toFixed(3).padStart(6)}   ${ratio}x`
  );
}

import { writeFileSync } from 'node:fs';
writeFileSync(new URL('./results.json', import.meta.url), JSON.stringify({
  iterations: ITERATIONS,
  repeats: REPEATS,
  warmup: WARMUP,
  node: process.version,
  results: results.map(({ samples, ...rest }) => rest),
}, null, 2));
console.log('\nWrote results.json');
