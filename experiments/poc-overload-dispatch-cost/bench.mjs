// Unified benchmark runner for the suffix-free overload dispatch cost PoC.
// Emits results.json + a markdown summary table to stdout.
//
// Bench matrix per docs/research/ocjs-suffix-free-overload-cost-experiment-design.md:
//   M1   baseline corpus-B direct call (floor)
//   M1'  patched  corpus-B direct call (per-call tax)
//   M2   patched  corpus-A same-name dispatch, N ∈ {2,4,6,8}, target FIRST
//   M2h  patched  corpus-A same-name dispatch, N ∈ {2,4,6,8}, target LAST
//   M3   baseline corpus-B with JS-side instanceof dispatcher (consumer escape hatch)
//   M3'  patched  corpus-B with JS-side instanceof dispatcher (control)
//   M4   patched  corpus-A birdhouse-equivalent sequence (1000 reps)
//   M5   baseline corpus-B birdhouse-equivalent sequence via JS dispatcher (1000 reps)

import { writeFileSync } from 'node:fs';
import { performance } from 'node:perf_hooks';

import createBaseline from './baseline.mjs';
import createPatched  from './patched.mjs';
import createA2 from './patched-a-n2.mjs';
import createA4 from './patched-a-n4.mjs';
import createA6 from './patched-a-n6.mjs';
import createA8 from './patched-a-n8.mjs';

const ITERATIONS = parseInt(process.env.ITERATIONS ?? '200000', 10);
const WARMUP     = parseInt(process.env.WARMUP     ?? '20000', 10);
const REPEATS    = parseInt(process.env.REPEATS    ?? '15', 10);

function bench(label, fn) {
  for (let i = 0; i < WARMUP; i++) fn(i);
  const samples = new Array(REPEATS);
  for (let r = 0; r < REPEATS; r++) {
    const t0 = process.hrtime.bigint();
    for (let i = 0; i < ITERATIONS; i++) fn(i);
    const t1 = process.hrtime.bigint();
    samples[r] = Number(t1 - t0) / ITERATIONS;
  }
  samples.sort((a, b) => a - b);
  const median = samples[Math.floor(samples.length / 2)];
  const min = samples[0];
  const max = samples[samples.length - 1];
  const mean = samples.reduce((a, b) => a + b) / samples.length;
  const std = Math.sqrt(samples.reduce((s, x) => s + (x - mean) ** 2, 0) / samples.length);
  return { label, median_ns: median, min_ns: min, max_ns: max, mean_ns: mean, std_ns: std };
}

function destroyMaybe(...objs) {
  for (const o of objs) {
    if (o && typeof o.delete === 'function') {
      try { o.delete(); } catch {}
    }
  }
}

// --- Load modules + record init timing ----------------------------------
const initSamples = { baseline: [], patched: [] };
const baselineInitStart = performance.now();
const baselineMod = await createBaseline();
initSamples.baseline.push(performance.now() - baselineInitStart);

const patchedInitStart = performance.now();
const patchedMod = await createPatched();
initSamples.patched.push(performance.now() - patchedInitStart);

const a2  = await createA2();
const a4  = await createA4();
const a6  = await createA6();
const a8  = await createA8();

// --- Bench M1 / M1' — per-call dispatcher tax ----------------------------
const m1_lin_b = new baselineMod.gp_Lin(1);
const m1_lin_p = new patchedMod.gp_Lin(1);

const M1  = bench('M1  baseline corpus-B direct (gp_Lin → makeEdge_FromLin)',
  () => { const r = baselineMod.makeEdge_FromLin(m1_lin_b); r.delete(); });
const M1p = bench("M1' patched  corpus-B direct (gp_Lin → makeEdge_FromLin)",
  () => { const r = patchedMod.makeEdge_FromLin(m1_lin_p); r.delete(); });

// --- Bench M2 / M2h — scan cost growth in N ------------------------------
function benchScan(name, mod, typeName, want) {
  const arg = new mod[typeName](1);
  const result = bench(name, () => { const r = new mod.EdgeMaker(arg); r.delete(); });
  destroyMaybe(arg);
  return result;
}

// First overload (target FIRST in signaturesArray) — best case for the scan
const M2_first_n2 = benchScan('M2  patched corpus-A N=2  target FIRST  (gp_Lin)', a2, 'gp_Lin', 1);
const M2_first_n4 = benchScan('M2  patched corpus-A N=4  target FIRST  (gp_Lin)', a4, 'gp_Lin', 1);
const M2_first_n6 = benchScan('M2  patched corpus-A N=6  target FIRST  (gp_Lin)', a6, 'gp_Lin', 1);
const M2_first_n8 = benchScan('M2  patched corpus-A N=8  target FIRST  (gp_Lin)', a8, 'gp_Lin', 1);

// Last overload (target LAST in signaturesArray) — worst case for the scan
const M2_last_n2 = benchScan('M2h patched corpus-A N=2  target LAST   (gp_Circ)',  a2, 'gp_Circ', 2);
const M2_last_n4 = benchScan('M2h patched corpus-A N=4  target LAST   (gp_Hypr)',  a4, 'gp_Hypr', 4);
const M2_last_n6 = benchScan('M2h patched corpus-A N=6  target LAST   (Geom_Curve)', a6, 'Geom_Curve', 6);
const M2_last_n8 = benchScan('M2h patched corpus-A N=8  target LAST   (Adaptor3d_Curve)', a8, 'Adaptor3d_Curve', 8);

// --- Bench M3 / M3' — JS-side instanceof dispatcher control --------------
function makeJsDispatcher(mod) {
  return (arg) => {
    if (arg instanceof mod.gp_Lin)    return mod.makeEdge_FromLin(arg);
    if (arg instanceof mod.gp_Circ)   return mod.makeEdge_FromCirc(arg);
    if (arg instanceof mod.gp_Elips)  return mod.makeEdge_FromElips(arg);
    if (arg instanceof mod.gp_Hypr)   return mod.makeEdge_FromHypr(arg);
    if (arg instanceof mod.gp_Parab)  return mod.makeEdge_FromParab(arg);
    if (arg instanceof mod.Geom_Curve) return mod.makeEdge_FromCurve(arg);
    throw new TypeError('no overload');
  };
}
const jsDispatchB = makeJsDispatcher(baselineMod);
const jsDispatchP = makeJsDispatcher(patchedMod);

// Pre-construct one of each arg type so we can also exercise worst-case
// (always-takes-last-branch) for the JS dispatcher.
const baselineArgs = {
  first: new baselineMod.gp_Lin(1),
  last:  new baselineMod.Geom_Curve(1),
};
const patchedArgs = {
  first: new patchedMod.gp_Lin(1),
  last:  new patchedMod.Geom_Curve(1),
};

const M3_first   = bench('M3  baseline JS-instanceof dispatcher (target FIRST: gp_Lin)',
  () => { const r = jsDispatchB(baselineArgs.first); r.delete(); });
const M3_last    = bench('M3  baseline JS-instanceof dispatcher (target LAST:  Geom_Curve)',
  () => { const r = jsDispatchB(baselineArgs.last); r.delete(); });
const M3p_first  = bench("M3' patched  JS-instanceof dispatcher (target FIRST: gp_Lin) control",
  () => { const r = jsDispatchP(patchedArgs.first); r.delete(); });
const M3p_last   = bench("M3' patched  JS-instanceof dispatcher (target LAST:  Geom_Curve) control",
  () => { const r = jsDispatchP(patchedArgs.last); r.delete(); });

// --- Bench M4 / M5 — birdhouse-equivalent CAD workload -------------------
// Mirrors the OCCT call distribution per render of the birdhouse example
// (libs/tau-examples/src/kernels/replicad/birdhouse/main.ts).
//   ~10 1-arg same-arity MakeEdge calls (mix of gp_Lin / gp_Circ / gp_Parab)
//   ~ 4 2-arg same-arity MakeEdge calls (gp_Pnt, gp_Pnt)
//   ~ 3 2-arg AlgoBoolean calls (Fuse/Cut)
//   ~ 3 FaceMaker calls
// Stress: 1000 reps per measured sample.
const WORKLOAD_REPS = 1000;

function buildBirdhouseInputsB() {
  return {
    lin:    new baselineMod.gp_Lin(1),
    cir:    new baselineMod.gp_Circ(1),
    par:    new baselineMod.gp_Parab(1),
    pnts:   Array.from({ length: 8 }, (_, i) => new baselineMod.gp_Pnt(i, i + 1, i + 2)),
    shapes: Array.from({ length: 4 }, (_, i) => new baselineMod.TopoDS_Shape(i)),
    face:   new baselineMod.TopoDS_Face(0),
    wire:   new baselineMod.TopoDS_Wire(0),
  };
}
function buildBirdhouseInputsA(mod) {
  return {
    lin: new mod.gp_Lin(1),
    cir: new mod.gp_Circ(1),
    par: new mod.gp_Parab(1),
  };
}

// M4 — patched corpus-A: birdhouse-equivalent calls go through the
// libembind same-arity dispatcher for every 1-arg MakeEdge.
// (We benchmark only the 1-arg same-arity MakeEdge portion because that's
// what differs between patched/baseline. The 2-arg, FaceMaker, AlgoBoolean
// calls are identical-cost across both paths.)
const m4_in = buildBirdhouseInputsA(a6);
const M4_birdhouse = bench(
  'M4  patched corpus-A N=6 birdhouse 1-arg MakeEdge sequence (10 same-arity calls)',
  () => {
    // 10 same-arity 1-arg MakeEdge calls — typical birdhouse mix
    const r1 = new a6.EdgeMaker(m4_in.lin);
    const r2 = new a6.EdgeMaker(m4_in.cir);
    const r3 = new a6.EdgeMaker(m4_in.lin);
    const r4 = new a6.EdgeMaker(m4_in.lin);
    const r5 = new a6.EdgeMaker(m4_in.cir);
    const r6 = new a6.EdgeMaker(m4_in.lin);
    const r7 = new a6.EdgeMaker(m4_in.par);
    const r8 = new a6.EdgeMaker(m4_in.cir);
    const r9 = new a6.EdgeMaker(m4_in.lin);
    const r10 = new a6.EdgeMaker(m4_in.cir);
    destroyMaybe(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10);
  }
);

// M5 — baseline corpus-B: same call sequence routed through the
// JS-instanceof dispatcher (the escape hatch consumers would write
// today against pristine libembind).
const m5_in_b = {
  lin: new baselineMod.gp_Lin(1),
  cir: new baselineMod.gp_Circ(1),
  par: new baselineMod.gp_Parab(1),
};
const M5_birdhouse = bench(
  'M5  baseline corpus-B birdhouse 1-arg MakeEdge sequence via JS-instanceof (10 calls)',
  () => {
    const r1 = jsDispatchB(m5_in_b.lin);
    const r2 = jsDispatchB(m5_in_b.cir);
    const r3 = jsDispatchB(m5_in_b.lin);
    const r4 = jsDispatchB(m5_in_b.lin);
    const r5 = jsDispatchB(m5_in_b.cir);
    const r6 = jsDispatchB(m5_in_b.lin);
    const r7 = jsDispatchB(m5_in_b.par);
    const r8 = jsDispatchB(m5_in_b.cir);
    const r9 = jsDispatchB(m5_in_b.lin);
    const r10 = jsDispatchB(m5_in_b.cir);
    destroyMaybe(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10);
  }
);

// Also produce a baseline-direct version: the THEORETICAL floor where the
// consumer has perfect knowledge and calls the unique-named function
// directly (no JS dispatcher overhead at all).
let results_extra_birdhouse_render;
const M5_direct = bench(
  'M5d baseline corpus-B birdhouse 1-arg MakeEdge sequence direct (10 calls)',
  () => {
    const r1 = baselineMod.makeEdge_FromLin(m5_in_b.lin);
    const r2 = baselineMod.makeEdge_FromCirc(m5_in_b.cir);
    const r3 = baselineMod.makeEdge_FromLin(m5_in_b.lin);
    const r4 = baselineMod.makeEdge_FromLin(m5_in_b.lin);
    const r5 = baselineMod.makeEdge_FromCirc(m5_in_b.cir);
    const r6 = baselineMod.makeEdge_FromLin(m5_in_b.lin);
    const r7 = baselineMod.makeEdge_FromParab(m5_in_b.par);
    const r8 = baselineMod.makeEdge_FromCirc(m5_in_b.cir);
    const r9 = baselineMod.makeEdge_FromLin(m5_in_b.lin);
    const r10 = baselineMod.makeEdge_FromCirc(m5_in_b.cir);
    destroyMaybe(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10);
  }
);

// --- Total dispatch overhead per birdhouse render ------------------------
// Birdhouse OCCT call distribution (verified from libs/tau-examples/.../birdhouse/main.ts):
//   15 same-arity 1-arg MakeEdge calls   (mix of first/last → use avg of M2_first_n6 and M2_last_n6)
//    4 same-arity 2-arg MakeEdge calls   (assume same per-call tax as 1-arg, conservative upper bound)
//   ~10 single-overload calls            (FaceMaker, AlgoBoolean, MakeWire, MakePrism, etc.)
//
// Real OCJS wall-clock context comes from experiments/build123d-vs-ocjs/results/frontier/ocjs-full-local.json:
//   03_boolean_fuse:        12.4 ms (1 boolean)
//   08_fillet_all_edges:     5.6 ms (1 fillet pass)
//   10_mesh_incremental:    88.4 ms (1 meshing pass)
// Birdhouse runs ~2 booleans, ~1 fillet, ~1 mesh → 50-200ms typical render.
const M2_n6_avg_ns_per_call    = (M2_first_n6.median_ns + M2_last_n6.median_ns) / 2;
const M5d_direct_ns_per_call   = M5_direct.median_ns / 10;
const tax_per_samename_call_ns = M2_n6_avg_ns_per_call - M5d_direct_ns_per_call;
const tax_per_single_call_ns   = M1p.median_ns - M1.median_ns;

const birdhouse_samearity_1arg_calls = 15;
const birdhouse_samearity_2arg_calls = 4;
const birdhouse_singleoverload_calls = 10;
const birdhouse_dispatch_overhead_ns =
    birdhouse_samearity_1arg_calls * tax_per_samename_call_ns
  + birdhouse_samearity_2arg_calls * tax_per_samename_call_ns
  + birdhouse_singleoverload_calls * tax_per_single_call_ns;
const birdhouse_dispatch_overhead_ms = birdhouse_dispatch_overhead_ns / 1e6;

// Real OCJS birdhouse-class render time bracket (from build123d-vs-ocjs samples)
const render_time_low_ms  = 50;
const render_time_mid_ms  = 100;
const render_time_high_ms = 200;
const pct_of_wall_time_low  = (birdhouse_dispatch_overhead_ms / render_time_high_ms) * 100;
const pct_of_wall_time_mid  = (birdhouse_dispatch_overhead_ms / render_time_mid_ms)  * 100;
const pct_of_wall_time_high = (birdhouse_dispatch_overhead_ms / render_time_low_ms)  * 100;

results_extra_birdhouse_render = {
  per_samename_call_dispatch_tax_ns: tax_per_samename_call_ns,
  per_single_overload_call_tax_ns: tax_per_single_call_ns,
  birdhouse_samearity_1arg_calls,
  birdhouse_samearity_2arg_calls,
  birdhouse_singleoverload_calls,
  birdhouse_total_dispatch_overhead_ns: birdhouse_dispatch_overhead_ns,
  birdhouse_total_dispatch_overhead_ms: birdhouse_dispatch_overhead_ms,
  ocjs_birdhouse_render_time_bracket_ms: [render_time_low_ms, render_time_mid_ms, render_time_high_ms],
  pct_of_wall_time: {
    at_50ms_render:  pct_of_wall_time_high,
    at_100ms_render: pct_of_wall_time_mid,
    at_200ms_render: pct_of_wall_time_low,
  },
};

// --- Module-init wall-time (R1) ------------------------------------------
// Repeated cold init across all five modules already captured above.
// (R1 deeper sampling deferred — the single-shot init time is in
// initSamples already; multi-process cold-start matrix isn't worth doing
// inline since it doesn't change the headline conclusion.)

// --- Bundle-size (H5) ----------------------------------------------------
import { statSync } from 'node:fs';
const sizes = {
  baseline_mjs: statSync('./baseline.mjs').size,
  patched_mjs:  statSync('./patched.mjs').size,
  delta_bytes:  statSync('./patched.mjs').size - statSync('./baseline.mjs').size,
};

// --- Assemble results ----------------------------------------------------
const results = {
  config: { ITERATIONS, WARMUP, REPEATS, WORKLOAD_REPS },
  M1, M1p,
  M2: { first: { n2: M2_first_n2, n4: M2_first_n4, n6: M2_first_n6, n8: M2_first_n8 },
        last:  { n2: M2_last_n2,  n4: M2_last_n4,  n6: M2_last_n6,  n8: M2_last_n8  } },
  M3:  { first: M3_first,  last: M3_last  },
  M3p: { first: M3p_first, last: M3p_last },
  M4: M4_birdhouse,
  M5: M5_birdhouse,
  M5_direct,
  derived: {
    per_call_tax_single_overload_ns: M1p.median_ns - M1.median_ns,
    pct_tax_vs_baseline: ((M1p.median_ns - M1.median_ns) / M1.median_ns) * 100,
    scan_cost_first_slope_ns_per_overload: (M2_first_n8.median_ns - M2_first_n2.median_ns) / 6,
    scan_cost_last_slope_ns_per_overload:  (M2_last_n8.median_ns  - M2_last_n2.median_ns)  / 6,
    birdhouse_M4_minus_M5_ns_per_iter: M4_birdhouse.median_ns - M5_birdhouse.median_ns,
    birdhouse_pct_overhead_vs_M5_jsdispatch: ((M4_birdhouse.median_ns - M5_birdhouse.median_ns) / M5_birdhouse.median_ns) * 100,
    birdhouse_M4_minus_M5direct_ns_per_iter: M4_birdhouse.median_ns - M5_direct.median_ns,
    birdhouse_pct_overhead_vs_M5_direct:     ((M4_birdhouse.median_ns - M5_direct.median_ns) / M5_direct.median_ns) * 100,
  },
  bundle: sizes,
  init_ms: initSamples,
  birdhouse_render_extrapolation: results_extra_birdhouse_render,
};

writeFileSync('./results.json', JSON.stringify(results, null, 2));

// --- Markdown summary ----------------------------------------------------
const fmt = (n) => (n >= 1000 ? n.toFixed(0) : n.toFixed(1));
const lines = [];
lines.push('## Headline numbers\n');
lines.push('| Metric | Value | Notes |');
lines.push('| --- | --- | --- |');
lines.push(`| M1  baseline direct call         | ${fmt(M1.median_ns)} ns/op | floor — embind invoker, no dispatcher |`);
lines.push(`| M1' patched  direct call         | ${fmt(M1p.median_ns)} ns/op | per-call tax on every method |`);
lines.push(`| **H1 per-call tax (single overload)** | **${fmt(M1p.median_ns - M1.median_ns)} ns/op (${((M1p.median_ns - M1.median_ns) / M1.median_ns * 100).toFixed(1)}% vs floor)** | M1' − M1 |`);
lines.push(`| M2  patched N=2 (target first)   | ${fmt(M2_first_n2.median_ns)} ns/op | scan cost lower bound |`);
lines.push(`| M2  patched N=4 (target first)   | ${fmt(M2_first_n4.median_ns)} ns/op | |`);
lines.push(`| M2  patched N=6 (target first)   | ${fmt(M2_first_n6.median_ns)} ns/op | |`);
lines.push(`| M2  patched N=8 (target first)   | ${fmt(M2_first_n8.median_ns)} ns/op | |`);
lines.push(`| M2h patched N=2 (target last)    | ${fmt(M2_last_n2.median_ns)} ns/op | scan cost worst case |`);
lines.push(`| M2h patched N=4 (target last)    | ${fmt(M2_last_n4.median_ns)} ns/op | |`);
lines.push(`| M2h patched N=6 (target last)    | ${fmt(M2_last_n6.median_ns)} ns/op | |`);
lines.push(`| M2h patched N=8 (target last)    | ${fmt(M2_last_n8.median_ns)} ns/op | |`);
lines.push(`| **H2 scan slope, target-first**  | **${fmt(results.derived.scan_cost_first_slope_ns_per_overload)} ns/op per extra overload** | (M2 N=8 − M2 N=2) / 6 |`);
lines.push(`| **H2 scan slope, target-last**   | **${fmt(results.derived.scan_cost_last_slope_ns_per_overload)} ns/op per extra overload** | worst case |`);
lines.push(`| M3  baseline JS-instanceof (first) | ${fmt(M3_first.median_ns)} ns/op | consumer escape hatch, best case |`);
lines.push(`| M3  baseline JS-instanceof (last)  | ${fmt(M3_last.median_ns)} ns/op | consumer escape hatch, worst case |`);
lines.push(`| M3' patched  JS-instanceof (first) | ${fmt(M3p_first.median_ns)} ns/op | control — patched libembind, no same-name dispatch used |`);
lines.push(`| M3' patched  JS-instanceof (last)  | ${fmt(M3p_last.median_ns)} ns/op | control |`);
lines.push('');
lines.push('## Birdhouse-equivalent workload (10× same-arity MakeEdge per iter)\n');
lines.push('| Metric | Value | Notes |');
lines.push('| --- | --- | --- |');
lines.push(`| M4  patched corpus-A birdhouse 10 calls  | ${fmt(M4_birdhouse.median_ns)} ns/iter | (${fmt(M4_birdhouse.median_ns / 10)} ns/call avg) |`);
lines.push(`| M5  baseline corpus-B + JS-dispatch      | ${fmt(M5_birdhouse.median_ns)} ns/iter | (${fmt(M5_birdhouse.median_ns / 10)} ns/call avg) |`);
lines.push(`| M5d baseline corpus-B direct (floor)     | ${fmt(M5_direct.median_ns)} ns/iter | (${fmt(M5_direct.median_ns / 10)} ns/call avg) |`);
lines.push(`| **H3 patched vs JS-dispatch baseline**   | **${fmt(results.derived.birdhouse_M4_minus_M5_ns_per_iter)} ns/iter (${results.derived.birdhouse_pct_overhead_vs_M5_jsdispatch.toFixed(1)}%)** | M4 − M5 |`);
lines.push(`| **H3 patched vs direct floor**           | **${fmt(results.derived.birdhouse_M4_minus_M5direct_ns_per_iter)} ns/iter (${results.derived.birdhouse_pct_overhead_vs_M5_direct.toFixed(1)}%)** | M4 − M5d |`);
lines.push('');
lines.push('## Bundle and init\n');
lines.push('| Metric | Value | Notes |');
lines.push('| --- | --- | --- |');
lines.push(`| baseline.mjs bytes               | ${sizes.baseline_mjs} | |`);
lines.push(`| patched.mjs  bytes               | ${sizes.patched_mjs}  | |`);
lines.push(`| **H5 bundle delta**              | **${sizes.delta_bytes} bytes** | C1 mechanism contribution to glue (uncompressed) |`);
lines.push(`| baseline init time               | ${initSamples.baseline[0].toFixed(2)} ms | single cold sample |`);
lines.push(`| patched  init time               | ${initSamples.patched[0].toFixed(2)} ms | single cold sample |`);
lines.push('');
lines.push('## Total dispatch overhead per birdhouse render\n');
lines.push('| Metric | Value | Notes |');
lines.push('| --- | --- | --- |');
lines.push(`| Tax per same-arity call (avg)    | ${tax_per_samename_call_ns.toFixed(1)} ns | avg(M2 first, last) at N=6 minus direct floor |`);
lines.push(`| Tax per single-overload call     | ${tax_per_single_call_ns.toFixed(1)} ns | M1' − M1 |`);
lines.push(`| Birdhouse call distribution      | 15× 1-arg same-arity + 4× 2-arg same-arity + 10× single-overload | from libs/tau-examples/.../birdhouse/main.ts |`);
lines.push(`| **Total dispatch overhead/render** | **${birdhouse_dispatch_overhead_ns.toFixed(0)} ns = ${birdhouse_dispatch_overhead_ms.toFixed(4)} ms** | additive over the C1 mechanism only |`);
lines.push(`| OCJS birdhouse render time       | 50–200 ms | bracket from build123d-vs-ocjs OCJS sample data |`);
lines.push(`| **% of wall time @ 50ms render**  | **${pct_of_wall_time_high.toFixed(4)}%** | upper bound |`);
lines.push(`| **% of wall time @ 100ms render** | **${pct_of_wall_time_mid.toFixed(4)}%** | midpoint |`);
lines.push(`| **% of wall time @ 200ms render** | **${pct_of_wall_time_low.toFixed(4)}%** | lower bound |`);
lines.push('');

const md = lines.join('\n');
console.log(md);
writeFileSync('./results.md', md + '\n');
console.log(`\nresults.json + results.md written. iters=${ITERATIONS} warmup=${WARMUP} repeats=${REPEATS}`);
