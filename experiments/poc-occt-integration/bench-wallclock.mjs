// bench-wallclock.mjs — wall-clock parity check.
//
// Hypothesis: Option C's std::optional<T> wrap+unwrap path is dwarfed by
// real OCCT meshing work, so build-and-mesh wall time should be identical
// (within noise) between Corpus A (production fan-out) and Corpus B
// (std::optional) when both are called with all args explicit.
//
// We bench the SAME real OCCT operation (sphere build → incremental mesh
// → triangle count) under both corpora using their respective 5-arg
// constructor paths.
//
// 300 iterations, two warm-up runs, median + p95 reported.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

const loadCorpus = async (variant) => {
  const factory = (await import(`./mod-${variant}.mjs`)).default;
  return await factory();
};

const modA = await loadCorpus('current');
const modB = await loadCorpus('optional');

const meshSphereExplicit = (mod) => {
  const sphere = new mod.BRepPrimAPI_MakeSphere(10.0);
  const shape = sphere.Shape();
  const im = new mod.BRepMesh_IncrementalMesh(shape, 0.5, false, 0.5, false);
  if (!im.IsDone()) throw new Error('IM did not converge');
  return mod.count_triangles(shape);
};

const bench = (label, fn, iters = 300) => {
  // warm-up
  fn(); fn();
  const samples = [];
  for (let i = 0; i < iters; i++) {
    const t0 = performance.now();
    fn();
    samples.push(performance.now() - t0);
  }
  samples.sort((a, b) => a - b);
  const median = samples[Math.floor(samples.length * 0.5)];
  const p95 = samples[Math.floor(samples.length * 0.95)];
  const mean = samples.reduce((s, x) => s + x, 0) / samples.length;
  console.log(`${label.padEnd(40)} median=${median.toFixed(3)}ms  p95=${p95.toFixed(3)}ms  mean=${mean.toFixed(3)}ms`);
  return { label, median, p95, mean, iters };
};

console.log('── sphere build+mesh wall-clock, both corpora, all args explicit ──\n');

const aFull = bench('A: 5-arg explicit', () => meshSphereExplicit(modA));
const bFull = bench('B: 5-arg explicit', () => meshSphereExplicit(modB));

// Single-overload free function bench — B only (no Corpus A equivalent)
const bFreeExplicit = bench('B: free-fn explicit',
  () => modB.mesh_sphere_via_optional(10.0, 0.5, false, 0.5, false));
const bFreeOmitted = bench('B: free-fn omitted (Option C ergonomic path)',
  () => modB.mesh_sphere_via_optional(10.0, 0.5));

console.log('\n── deltas ──');
const delta = (a, b, label) => {
  const d = b - a;
  const pct = (d / a) * 100;
  console.log(`${label.padEnd(50)} Δ median = ${d >= 0 ? '+' : ''}${d.toFixed(3)}ms (${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%)`);
  return { aMedian: a, bMedian: b, deltaMs: d, deltaPct: pct };
};

const dCtor = delta(aFull.median, bFull.median, 'B vs A (5-arg ctor)');
const dFreeOmitVsExplicit = delta(bFreeExplicit.median, bFreeOmitted.median, 'B free-fn: omitted vs explicit');

const result = {
  ts: new Date().toISOString(),
  samples: [aFull, bFull, bFreeExplicit, bFreeOmitted],
  deltas: { ctor: dCtor, freeFnOmittedVsExplicit: dFreeOmitVsExplicit },
  verdict: Math.abs(dCtor.deltaPct) < 5
    ? 'Runtime cost neutral within noise — Option C imposes no measurable wall-clock penalty on real OCCT workloads'
    : 'Measurable wall-clock delta — investigate',
};
console.log(`\nverdict: ${result.verdict}`);
writeFileSync(join(here, 'bench-wallclock-results.json'), JSON.stringify(result, null, 2));
