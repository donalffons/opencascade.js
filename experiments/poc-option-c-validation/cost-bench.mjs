// Quantify the cost of Option C's std::optional<T> emission on three axes:
//   1. Bundle size (already measured at build time — see README headline)
//   2. Module init time (register_optional<T> overhead at startup)
//   3. Per-call runtime (std::optional wrap/unwrap, relaxed-arity verifier)
//
// Runs each case ITERS × REPS times, reports median ns/op + min/max.
import { performance } from 'node:perf_hooks';
import * as fs from 'node:fs';

const ITERS = 50_000;
const REPS = 7;
const WARMUP = 10_000;

function median(values) {
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function benchOne(label, fn) {
  for (let i = 0; i < WARMUP; i++) fn();
  const samples = [];
  for (let r = 0; r < REPS; r++) {
    const t0 = performance.now();
    for (let i = 0; i < ITERS; i++) fn();
    const t1 = performance.now();
    samples.push(((t1 - t0) * 1e6) / ITERS); // ns/op
  }
  const med = median(samples);
  const min = Math.min(...samples);
  const max = Math.max(...samples);
  return { label, med_ns: med, min_ns: min, max_ns: max, samples };
}

// ── Module init time (cold) ───────────────────────────────────────────────
async function timeInit(label, factory) {
  const samples = [];
  for (let r = 0; r < 5; r++) {
    const t0 = performance.now();
    await factory({});
    samples.push(performance.now() - t0);
  }
  return { label, med_ms: median(samples), samples };
}

const importA = () => import('./mod-a-fan-out.mjs').then((m) => m.default);
const importB = () => import('./mod-b-optional.mjs').then((m) => m.default);

const initA = await timeInit('A (fan-out, no register_optional)', await importA());
const initB = await timeInit('B (std::optional, 3× register_optional)', await importB());

const modA = await (await importA())({});
const modB = await (await importB())({});

// ── Pre-build args reused across iterations so the bench doesn't measure
//    JS object allocation. ──
const edgeA = new modA.Edge();
const edgeB = new modB.Edge();
const stA = new modA.StrTool();
const stB = new modB.StrTool();
const ctA = new modA.CurveTool();
const ctB = new modB.CurveTool();
const coA = new modA.Combo();
const coB = new modB.Combo();

// ── Bench cases ────────────────────────────────────────────────────────────
const cases = [
  // Reference: Corpus A full-arity (the baseline Corpus A consumers always pay)
  ['A.Set(name, mode) — full arity (no optional involved)',  () => stA.Set('x', modA.OpenMode.ReadOnly)],
  // Corpus B with explicit arg — measures the std::optional wrap cost paid
  // on EVERY call, even when the consumer hasn't migrated to omit-the-arg
  ['B.Set(name, mode) — std::optional wrap path (arg passed)', () => stB.Set('x', modB.OpenMode.ReadOnly)],
  // Corpus B with arg omitted — measures the relaxed-arity verifier +
  // value_or path that is the actual ergonomic win
  ['B.Set(name)       — relaxed-arity verifier + value_or',    () => stB.Set('x')],

  // Same triple for the numeric-default case (CurveTool::GetCurve)
  ['A.GetCurve(edge, tol) — full arity (RBV return)',          () => ctA.GetCurve(edgeA, 0.5)],
  ['B.GetCurve(edge, tol) — std::optional wrap (RBV return)',  () => ctB.GetCurve(edgeB, 0.5)],
  ['B.GetCurve(edge)      — relaxed-arity (RBV return)',       () => ctB.GetCurve(edgeB)],

  // Same triple for the TR-GATE case (cstring + RBV combined)
  ['A.Proc(name, t) — full arity (cstring + RBV)',             () => coA.Proc('x', 0.5)],
  ['B.Proc(name, t) — std::optional wrap (cstring + RBV)',     () => coB.Proc('x', 0.5)],
  ['B.Proc(name)    — relaxed-arity (cstring + RBV)',          () => coB.Proc('x')],
];

const results = cases.map(([label, fn]) => benchOne(label, fn));

// ── Compute deltas ─────────────────────────────────────────────────────────
const lookup = Object.fromEntries(results.map((r) => [r.label, r.med_ns]));

const pairs = [
  ['Set', 'A.Set(name, mode) — full arity (no optional involved)',
          'B.Set(name, mode) — std::optional wrap path (arg passed)',
          'B.Set(name)       — relaxed-arity verifier + value_or'],
  ['GetCurve (RBV)', 'A.GetCurve(edge, tol) — full arity (RBV return)',
                     'B.GetCurve(edge, tol) — std::optional wrap (RBV return)',
                     'B.GetCurve(edge)      — relaxed-arity (RBV return)'],
  ['Proc (cstring + RBV)', 'A.Proc(name, t) — full arity (cstring + RBV)',
                           'B.Proc(name, t) — std::optional wrap (cstring + RBV)',
                           'B.Proc(name)    — relaxed-arity (cstring + RBV)'],
];

// ── Report ────────────────────────────────────────────────────────────────
console.log('\n══════ Module init time (5 cold starts, median ms) ══════');
console.log(`  ${initA.label}: ${initA.med_ms.toFixed(2)} ms`);
console.log(`  ${initB.label}: ${initB.med_ms.toFixed(2)} ms`);
console.log(`  ⇒ Init delta: +${(initB.med_ms - initA.med_ms).toFixed(2)} ms (${((initB.med_ms - initA.med_ms) / initA.med_ms * 100).toFixed(1)}%)`);

console.log(`\n══════ Per-call runtime (${ITERS.toLocaleString()} iters × ${REPS} reps, median ns/op) ══════`);
for (const r of results) {
  console.log(`  ${r.label.padEnd(60)} ${r.med_ns.toFixed(0).padStart(6)} ns  (min ${r.min_ns.toFixed(0).padStart(5)} max ${r.max_ns.toFixed(0).padStart(5)})`);
}

console.log('\n══════ Cost deltas — what Option C costs per call ══════');
for (const [name, base, explicit, omit] of pairs) {
  const dExplicit = lookup[explicit] - lookup[base];
  const dOmit = lookup[omit] - lookup[base];
  console.log(`  ${name}:`);
  console.log(`    A baseline                       ${lookup[base].toFixed(0).padStart(5)} ns/op`);
  console.log(`    B explicit (std::optional wrap)  ${lookup[explicit].toFixed(0).padStart(5)} ns/op   Δ ${(dExplicit >= 0 ? '+' : '')}${dExplicit.toFixed(0)} ns (${(dExplicit / lookup[base] * 100).toFixed(1)}%)`);
  console.log(`    B omit     (relaxed + value_or)  ${lookup[omit].toFixed(0).padStart(5)} ns/op   Δ ${(dOmit >= 0 ? '+' : '')}${dOmit.toFixed(0)} ns (${(dOmit / lookup[base] * 100).toFixed(1)}%)`);
}

// Cleanup
edgeA.delete(); edgeB.delete();
stA.delete(); stB.delete();
ctA.delete(); ctB.delete();
coA.delete(); coB.delete();

fs.writeFileSync('./cost-bench-results.json', JSON.stringify({
  init: { a: initA, b: initB, delta_ms: initB.med_ms - initA.med_ms },
  per_call: results,
  bundle: {
    a_mjs: 55733, a_wasm: 19535, a_combined: 75268,
    b_mjs: 58500, b_wasm: 23080, b_combined: 81580,
    delta_mjs: 2767, delta_wasm: 3545, delta_combined: 6312,
    delta_per_register_optional_T_amortised: 2104,
  },
  config: { iters: ITERS, reps: REPS, warmup: WARMUP, node: process.version },
  timestamp: new Date().toISOString(),
}, null, 2));
console.log('\nWrote cost-bench-results.json');
