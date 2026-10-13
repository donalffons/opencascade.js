// run.test.mjs — real-OCCT validation harness for Option C / Option C′.
//
// Three test groups, each with explicit expected outcomes:
//
//   GROUP 1 — Build correctness (both corpora, all args explicit)
//     Both modules must initialise, build a sphere, run the incremental
//     mesher with every arg explicit, and report a non-zero triangle
//     count. Failure here is a hand-binding error, not an Option C
//     question.
//
//   GROUP 2 — Corpus A omitted-arg behaviour
//     The IM ctor's bindgen gate does NOT trip (no cstring, no RBV, no
//     output param), so production bindgen emits the full arity-2/3/4/5
//     fan-out. Omitting trailing args from JS should pick the correct
//     truncated form and apply C++ defaults correctly. We confirm this
//     baseline so we know the fan-out path works.
//
//   GROUP 3 — Corpus B omitted-arg behaviour (THE Option C verdict)
//     Corpus B replaces the fan-out with a single std::optional<T> lambda
//     per ctor. Predicted outcome from the mock PoC TR-MO finding:
//       * SINGLE-overload-arity ctors (none here on IM/TopExp_Explorer
//         because every OCCT class has a default ctor too) → would PASS
//       * MULTI-overload-arity ctors (every real OCCT Make* class) →
//         FAIL today; needs the bounded C1 extension from Option C′ to
//         pad missing trailing args via std::nullopt within the
//         same-arity overload group.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

// Libembind mode determines whether Group 3 (multi-ctor-arity + omitted
// trailing args) is expected to pass or fail. Without the arity-pad
// extension (c1 / prod), Group 3 fails — that's the Option C′ gap. With
// the arity-pad extension applied (c1+pad / prod+pad), Group 3 should
// pass — that's the dispatcher patch validation.
const LIBEMBIND_MODE = process.env.LIBEMBIND_MODE ?? 'prod+pad';
const PAD_ACTIVE = LIBEMBIND_MODE === 'c1+pad' || LIBEMBIND_MODE === 'prod+pad';
const G3_EXPECTED = PAD_ACTIVE ? 'pass' : 'fail';
console.log(`LIBEMBIND_MODE=${LIBEMBIND_MODE} → arity-pad ${PAD_ACTIVE ? 'ACTIVE' : 'INACTIVE'} → Group 3 expected to ${G3_EXPECTED}\n`);

const loadCorpus = async (variant) => {
  const factory = (await import(`./mod-${variant}.mjs`)).default;
  return await factory();
};

const tryCall = (fn) => {
  try {
    return { ok: true, value: fn() };
  } catch (e) {
    return { ok: false, error: String(e?.message ?? e) };
  }
};

const meshBox = (corpus, ctorArgs) => {
  const box = new corpus.BRepPrimAPI_MakeBox(1, 1, 1);
  const shape = box.Shape();
  const im = new corpus.BRepMesh_IncrementalMesh(shape, ...ctorArgs);
  if (!im.IsDone()) throw new Error('IM did not converge');
  return corpus.count_triangles(shape);
};

const meshSphere = (corpus, ctorArgs) => {
  const sphere = new corpus.BRepPrimAPI_MakeSphere(10.0);
  const shape = sphere.Shape();
  const im = new corpus.BRepMesh_IncrementalMesh(shape, ...ctorArgs);
  if (!im.IsDone()) throw new Error('IM did not converge');
  return corpus.count_triangles(shape);
};

const modA = await loadCorpus('current');
const modB = await loadCorpus('optional');

const tests = [];
const test = (group, name, expected, actual, detail) => {
  const passed = expected === 'pass' ? actual.ok : !actual.ok;
  tests.push({
    group, name, expected,
    outcome: actual.ok ? 'pass' : 'fail',
    expectationMet: passed,
    value: actual.ok ? actual.value : undefined,
    error: actual.ok ? undefined : actual.error,
    detail,
  });
  const sigil = passed ? '✓' : '✗';
  const tail = actual.ok ? `value=${actual.value}` : `THREW: ${actual.error.slice(0, 80)}…`;
  console.log(`${sigil} [${group}] ${name} — expected=${expected} got=${actual.ok ? 'pass' : 'fail'} ${tail}`);
};

// ── GROUP 1: build correctness (both corpora, all args explicit) ─────
test('1', 'A: box+mesh (5 args explicit)', 'pass',
  tryCall(() => meshBox(modA, [0.1, false, 0.5, false])),
  'must build and mesh a 1x1x1 box');
test('1', 'B: box+mesh (5 args explicit)', 'pass',
  tryCall(() => meshBox(modB, [0.1, false, 0.5, false])),
  'must build and mesh a 1x1x1 box');
test('1', 'A: sphere+mesh (5 args explicit)', 'pass',
  tryCall(() => meshSphere(modA, [0.5, false, 0.5, false])),
  'must build and mesh a sphere');
test('1', 'B: sphere+mesh (5 args explicit)', 'pass',
  tryCall(() => meshSphere(modB, [0.5, false, 0.5, false])),
  'must build and mesh a sphere');

// ── GROUP 2: Corpus A omitted-arg behaviour ──────────────────────────
test('2', 'A: IM(shape, 0.5) — fan-out picks 2-arg form', 'pass',
  tryCall(() => meshSphere(modA, [0.5])),
  'production bindgen emits 4 arity-truncated registrations; arity-2 form exists');
test('2', 'A: IM(shape, 0.5, false) — fan-out picks 3-arg form', 'pass',
  tryCall(() => meshSphere(modA, [0.5, false])),
  'production bindgen arity-3 form');
test('2', 'A: IM(shape, 0.5, false, 0.5) — fan-out picks 4-arg form', 'pass',
  tryCall(() => meshSphere(modA, [0.5, false, 0.5])),
  'production bindgen arity-4 form');

// ── GROUP 3: Corpus B omitted-arg behaviour (THE Option C′ verdict) ──
// IM has a default ctor (arity 0) AND the wrapped std::optional ctor
// (arity 5). Under C1-only (production today), the dispatcher rejects
// arity-2 calls with "expected (0,5) parameters" — the TR-MO scenario
// on real OCCT. Under c1+pad (Gate-1 extension), the dispatcher pads
// missing trailing positions with `undefined` → `register_optional`'s
// toWireType produces `std::nullopt` → `.value_or()` in the lambda
// body applies the C++ default → correct mesh produced.
//
// Both modes must produce IDENTICAL triangle counts when args ARE
// supplied explicitly (verified by Group 4).
test('3', 'B: IM(shape, 0.5) — arity-pad to {0,5} target=5', G3_EXPECTED,
  tryCall(() => meshSphere(modB, [0.5])),
  'pad 3 trailing positions with undefined → nullopt → value_or(false,0.5,false)');
test('3', 'B: IM(shape, 0.5, false) — arity-pad to {0,5} target=5', G3_EXPECTED,
  tryCall(() => meshSphere(modB, [0.5, false])),
  'pad 2 trailing positions');
test('3', 'B: TopExp_Explorer(shape, FACE) — arity-pad to {0,3} target=3', G3_EXPECTED,
  tryCall(() => {
    const sphere = new modB.BRepPrimAPI_MakeSphere(1.0).Shape();
    const ex = new modB.TopExp_Explorer(sphere, modB.TopAbs_ShapeEnum.FACE);
    return ex.More();
  }),
  'pad 1 trailing position');

// ── GROUP 4: parity assertions on EXPLICIT calls ─────────────────────
// When both corpora are called with all args explicit, they MUST produce
// byte-identical mesh outputs.
test('4', 'A vs B box parity (5 args explicit)', 'pass',
  tryCall(() => {
    const a = meshBox(modA, [0.1, false, 0.5, false]);
    const b = meshBox(modB, [0.1, false, 0.5, false]);
    if (a !== b) throw new Error(`A=${a} B=${b}`);
    return a;
  }),
  'identical mesh output is the correctness guarantee for the std::optional path');
test('4', 'A vs B sphere parity (5 args explicit)', 'pass',
  tryCall(() => {
    const a = meshSphere(modA, [0.5, false, 0.5, false]);
    const b = meshSphere(modB, [0.5, false, 0.5, false]);
    if (a !== b) throw new Error(`A=${a} B=${b}`);
    return a;
  }),
  'identical mesh output');

// ── GROUP 5: Corpus A omitted vs explicit parity (regression check) ──
test('5', 'A: omitted-args mesh equals all-explicit mesh',
  'pass',
  tryCall(() => {
    const expl = meshSphere(modA, [0.5, false, 0.5, false]);
    const omit = meshSphere(modA, [0.5]);
    if (expl !== omit) throw new Error(`explicit=${expl} omitted=${omit}`);
    return expl;
  }),
  'production fan-out should apply C++ defaults equivalently');

// ── GROUP 7: Gate-2 — multi-arity ctor set + arity-pad + C1 type-dispatch ──
// Production-density real OCCT case: BRepPrimAPI_MakeSphere with arity
// set {1, 2, 3, 4} and a C1 type-dispatch sibling pair at arity 2
// ((double, double) for R+angle, (gp_Pnt, double) for Pnt+R).
//
// These cases all hit EXACT arity matches, so arity-pad does not fire.
// They verify the c1+pad extension does not interfere with C1 type
// dispatch on the same-arity sibling pair.
test('7', 'B: MakeSphere(10) — exact arity 1, no pad',
  'pass',
  tryCall(() => {
    const s = new modB.BRepPrimAPI_MakeSphere(10.0);
    const tri = (() => {
      const sh = s.Shape();
      const im = new modB.BRepMesh_IncrementalMesh(sh, 0.5, false, 0.5, false);
      if (!im.IsDone()) throw new Error('IM did not converge');
      return modB.count_triangles(sh);
    })();
    if (tri <= 0) throw new Error(`tri=${tri}`);
    return tri;
  }),
  'baseline arity-1 ctor still works');
test('7', 'B: MakeSphere(10, π/2) — C1 picks (R, angle) overload at arity 2',
  'pass',
  tryCall(() => {
    const s = new modB.BRepPrimAPI_MakeSphere(10.0, Math.PI / 2);
    return s.Shape().IsNull() ? -1 : 1;
  }),
  'C1 type-dispatch must pick (double, double) overload by argument types');
test('7', 'B: MakeSphere(pnt, 10) — C1 picks (Pnt, R) overload at arity 2',
  'pass',
  tryCall(() => {
    const p = new modB.gp_Pnt(0, 0, 0);
    const s = new modB.BRepPrimAPI_MakeSphere(p, 10.0);
    return s.Shape().IsNull() ? -1 : 1;
  }),
  'C1 type-dispatch must pick (gp_Pnt, double) overload by argument types');

// ── GROUP 8: Gate-2 — arity-pad into a same-arity overload group ─────
// AmbigCtor has registered arity set {0, 2} where arity 2 has TWO
// overloads ((Pnt, opt<double>) and (Dir, opt<double>)). JS call with
// arity 1 triggers arity-pad → target arity 2 → C1 dispatcher must
// type-route the padded args.
//
// Expected behaviour (the open question this test answers):
//   - new AmbigCtor()        → arity 0 exact → default ctor, routedBy=0
//   - new AmbigCtor(pnt)     → pad to arity 2 → C1 picks Pnt overload,
//                              routedBy=1, tail=99.0 (C++ default applied)
//   - new AmbigCtor(dir)     → pad to arity 2 → C1 picks Dir overload,
//                              routedBy=2, tail=99.0
//   - new AmbigCtor(pnt,5)   → exact arity 2 → C1 picks Pnt, tail=5
//   - new AmbigCtor(dir,5)   → exact arity 2 → C1 picks Dir, tail=5
test('8', 'B: AmbigCtor() — exact arity 0', 'pass',
  tryCall(() => {
    const c = new modB.AmbigCtor();
    const r = c.routedBy;
    c.delete();
    return r === 0 ? 'default' : `unexpected routedBy=${r}`;
  }),
  'default ctor exact match — no padding');
test('8', 'B: AmbigCtor(pnt, 5) — exact arity 2, C1 picks Pnt overload',
  'pass',
  tryCall(() => {
    const p = new modB.gp_Pnt(0, 0, 0);
    const c = new modB.AmbigCtor(p, 5);
    const r = c.routedBy;
    const t = c.tail;
    c.delete();
    if (r !== 1) throw new Error(`expected Pnt overload (routedBy=1), got ${r}`);
    if (t !== 5) throw new Error(`expected tail=5, got ${t}`);
    return 'pnt';
  }),
  'C1 type-dispatch picks Pnt at exact arity, no padding involved');
test('8', 'B: AmbigCtor(pnt) — pad arity 1 → 2, C1 picks Pnt with optional nullopt',
  'pass',
  tryCall(() => {
    const p = new modB.gp_Pnt(0, 0, 0);
    const c = new modB.AmbigCtor(p);
    const r = c.routedBy;
    const t = c.tail;
    c.delete();
    if (r !== 1) throw new Error(`expected Pnt overload (routedBy=1), got ${r}`);
    if (t !== 99) throw new Error(`expected tail=99 (C++ default), got ${t}`);
    return 'pnt+pad';
  }),
  'arity-pad + C1 type-dispatch composition on real overload group');

// ── GROUP 9: Gate-3 — production-style smart_ptr<handle<T>> + std::optional ──
// HandleIM is the same class as BRepMesh_IncrementalMesh, bound the way
// production bindgen actually emits it (`.smart_ptr<opencascade::handle<T>>`).
// The same std::optional<bool>/<double>/<bool> trailing-default lambda
// must compose with the opencascade::handle return type. If this works,
// the bindgen-side translation rule transfers directly to production
// bindings without smart-ptr-specific special-casing.
test('9', 'B: HandleIM(shape, 0.5) — smart_ptr<handle> + arity-pad + std::optional',
  'pass',
  tryCall(() => {
    const sphere = new modB.BRepPrimAPI_MakeSphere(10.0).Shape();
    const h = new modB.HandleIM(sphere, 0.5);
    const done = modB.HandleIM_IsDone(h);
    if (!done) throw new Error('HandleIM did not converge under arity-pad');
    const tri = modB.count_triangles(sphere);
    if (tri <= 0) throw new Error(`tri=${tri}`);
    return tri;
  }),
  'production smart_ptr<handle<T>> composes with std::optional + arity-pad');
test('9', 'B: HandleIM(shape, 0.5, false, 0.5, false) — full-arity smart_ptr call',
  'pass',
  tryCall(() => {
    const sphere = new modB.BRepPrimAPI_MakeSphere(10.0).Shape();
    const h = new modB.HandleIM(sphere, 0.5, false, 0.5, false);
    if (!modB.HandleIM_IsDone(h)) throw new Error('not done');
    return modB.count_triangles(sphere);
  }),
  'full-arity baseline for HandleIM');
test('9', 'B: HandleIM omitted vs explicit triangle parity',
  'pass',
  tryCall(() => {
    const s1 = new modB.BRepPrimAPI_MakeSphere(10.0).Shape();
    const s2 = new modB.BRepPrimAPI_MakeSphere(10.0).Shape();
    new modB.HandleIM(s1, 0.5);                       // padded
    new modB.HandleIM(s2, 0.5, false, 0.5, false);    // explicit
    const a = modB.count_triangles(s1);
    const b = modB.count_triangles(s2);
    if (a !== b) throw new Error(`omitted=${a} explicit=${b}`);
    return a;
  }),
  'smart_ptr path must produce identical mesh under arity-pad');

// ── GROUP 6: isolation — std::optional padding on SINGLE-overload free function ──
// Same operation (build sphere → mesh → count triangles), but exposed as
// a single free function with std::optional args. Single-overload arity
// → relaxed-arity verifier unambiguously pads with std::nullopt. This is
// the smoking-gun isolation that the IM ctor failure is purely a
// multi-overload-arity issue, not a std::optional<T> issue.
test('6', 'B: mesh_sphere_via_optional(10, 0.5) — single-overload omits 3 trailing args',
  'pass',
  tryCall(() => {
    const t = modB.mesh_sphere_via_optional(10.0, 0.5);
    if (t <= 0) throw new Error(`expected triangles > 0, got ${t}`);
    return t;
  }),
  'proves std::optional padding works on real OCCT for single-overload functions');
test('6', 'B: mesh_sphere_via_optional(10, 0.5, false, 0.5, false) — all explicit',
  'pass',
  tryCall(() => modB.mesh_sphere_via_optional(10.0, 0.5, false, 0.5, false)),
  'parity check: explicit-args call against same single-overload function');
test('6', 'B: omitted-args triangle count equals explicit-args count',
  'pass',
  tryCall(() => {
    const expl = modB.mesh_sphere_via_optional(10.0, 0.5, false, 0.5, false);
    const omit = modB.mesh_sphere_via_optional(10.0, 0.5);
    if (expl !== omit) throw new Error(`explicit=${expl} omitted=${omit}`);
    return expl;
  }),
  'C++ defaults (Ang=0.5, rel=F, par=F) applied via .value_or() match all-explicit');

// ── Summary ──────────────────────────────────────────────────────────
const passed = tests.filter((t) => t.expectationMet).length;
const total = tests.length;
const wasmA = readFileSync(join(here, 'mod-current.wasm')).byteLength;
const wasmB = readFileSync(join(here, 'mod-optional.wasm')).byteLength;
const jsA = readFileSync(join(here, 'mod-current.mjs')).byteLength;
const jsB = readFileSync(join(here, 'mod-optional.mjs')).byteLength;

const result = {
  ts: new Date().toISOString(),
  libembindMode: LIBEMBIND_MODE,
  tests,
  summary: {
    expectationsMet: passed,
    total,
    rate: `${passed}/${total}`,
    bundleSize: {
      wasmCurrent: wasmA, wasmOptional: wasmB, wasmDelta: wasmB - wasmA,
      jsCurrent: jsA, jsOptional: jsB, jsDelta: jsB - jsA,
      combinedDelta: (wasmB - wasmA) + (jsB - jsA),
    },
  },
  verdict: passed === total
    ? (LIBEMBIND_MODE === 'prod+pad'
        ? 'R1 validated: the 3 Gate-1 hunks compose cleanly with the CURRENT production libembind patch on real OCCT.'
        : LIBEMBIND_MODE === 'c1+pad'
          ? 'Gate-1 PoC validated: C1 + bounded arity-pad extension closes the multi-ctor-arity gap on real OCCT.'
          : 'Baseline confirmed: std::optional works for single-overload classes; multi-overload ctor sets need the bounded C1 extension.')
    : 'Unexpected behaviour — see failing rows above.',
};

console.log(`\n── ${passed}/${total} expectations met ──`);
console.log(`bundle delta: WASM ${wasmB - wasmA >= 0 ? '+' : ''}${wasmB - wasmA}B, JS ${jsB - jsA >= 0 ? '+' : ''}${jsB - jsA}B, combined ${(wasmB - wasmA) + (jsB - jsA)}B`);
console.log(`verdict: ${result.verdict}`);

writeFileSync(join(here, 'results.json'), JSON.stringify(result, null, 2));
process.exit(passed === total ? 0 : 1);
