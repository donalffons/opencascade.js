// u1-u3-u4.test.mjs — Tier-4 front-loaded validations.
//
//   U1  Mixed C2 fan-out + std::optional within ONE class/module
//   U3  Lifetime / destructor balance for std::optional<class T>
//   U4  Refcount balance for std::optional<opencascade::handle<T>>
//
// U8 (patch roundtrip) is a shell-side concern, lives in u8.test.sh.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const mod = await (await import('./mod-optional.mjs')).default();

const log = (l) => console.log(l);
const results = { u1: { cases: [] }, u3: { cases: [] }, u4: { cases: [] } };
const check = (bucket, id, actual, expected) => {
  const pass = typeof expected === 'object' && expected !== null
    ? JSON.stringify(actual) === JSON.stringify(expected)
    : Object.is(actual, expected);
  bucket.cases.push({ id, actual, expected, pass });
  log(`  ${pass ? '✓' : '✗'} ${id} — expected=${JSON.stringify(expected)} got=${JSON.stringify(actual)}`);
  return pass;
};

// ── U1: mixed fan-out + std::optional in same class ──────────────────
log('── U1: mixed C2 fan-out + std::optional within one class/module ──');
const m = new mod.MixedClass(1);
//   compute(a, b, c, d) = salt + a + (b?100:0) + (c*1000) + (d?10000:0)
//   salt=1, defaults: b=false, c=0.5, d=false
//   compute(2, false, 0.5, false) = 1+2+0+500+0 = 503
//   compute(2, true,  0.5, false) = 1+2+100+500+0 = 603
check(results.u1, 'fanout: method_fanout(2)             arity-1',                m.method_fanout(2),                    503);
check(results.u1, 'fanout: method_fanout(2, true)       arity-2',                m.method_fanout(2, true),              603);
check(results.u1, 'fanout: method_fanout(2, false, 0.25) arity-3',              m.method_fanout(2, false, 0.25),       253);
check(results.u1, 'fanout: method_fanout(2, false, 0.5, true) arity-4',         m.method_fanout(2, false, 0.5, true), 10503);
check(results.u1, 'optional: method_optional(2)         arity-1 → pad to 4',    m.method_optional(2),                  503);
check(results.u1, 'optional: method_optional(2, true)   arity-2 → pad to 4',    m.method_optional(2, true),            603);
check(results.u1, 'optional: method_optional(2, false, 0.25)                   ',m.method_optional(2, false, 0.25),     253);
check(results.u1, 'optional: method_optional(2, false, 0.5, true)             ',m.method_optional(2, false, 0.5, true), 10503);
// Parity assertion across patterns
const parities = [
  [m.method_fanout(2),                    m.method_optional(2)],
  [m.method_fanout(2, true),              m.method_optional(2, true)],
  [m.method_fanout(2, false, 0.25),       m.method_optional(2, false, 0.25)],
  [m.method_fanout(2, false, 0.5, true),  m.method_optional(2, false, 0.5, true)],
];
const allParity = parities.every(([a, b]) => a === b);
check(results.u1, 'parity: fanout(*) === optional(*) across all 4 arities', allParity, true);
m.delete();

// ── U3: ctor/dtor balance for std::optional<class T> ─────────────────
log('\n── U3: lifetime / destructor balance for std::optional<class T> ──');
mod.u3_reset_counts();
const baseline = mod.u3_counts();
log(`  baseline counts: ${JSON.stringify(baseline)}`);

// (a) Explicit-arg path — JS constructs a LifecycleTrack and passes it.
const lt = new mod.LifecycleTrack(7);
const c1 = mod.u3_counts();
log(`  after new LifecycleTrack(7): ${JSON.stringify(c1)}`);
const r1 = mod.u3_optional_consume(lt);
const c2 = mod.u3_counts();
log(`  after u3_optional_consume(lt): payload=${r1}, counts=${JSON.stringify(c2)}`);
check(results.u3, 'explicit-arg path returns payload', r1, 7);
// Each "extra" call must produce balanced ctor/dtor over the call's wire round-trip.
// The optional path is allowed to do extra copies, but ctors+copies+moves on this
// SPAN MUST equal dtors on this same span (no leak, no double-free).
const ctorsInSpan = (c2.ctors + c2.copies + c2.moves) - (c1.ctors + c1.copies + c1.moves);
const dtorsInSpan = c2.dtors - c1.dtors;
log(`  span: ctor+copy+move=${ctorsInSpan}, dtor=${dtorsInSpan}`);
check(results.u3, 'explicit-arg span: dtors === ctors+copies+moves (balanced)', dtorsInSpan, ctorsInSpan);

// (b) Omitted-arg path — arity-pad → nullopt → no T constructed at all.
const c3 = mod.u3_counts();
const r2 = mod.u3_optional_consume();
const c4 = mod.u3_counts();
log(`  omitted-arg path: result=${r2} (expect -1 for nullopt), counts before=${JSON.stringify(c3)} after=${JSON.stringify(c4)}`);
check(results.u3, 'omitted-arg path returns -1 (nullopt)', r2, -1);
check(results.u3, 'omitted-arg span: NO LifecycleTrack constructed', c4.ctors + c4.copies + c4.moves, c3.ctors + c3.copies + c3.moves);
check(results.u3, 'omitted-arg span: NO LifecycleTrack destroyed', c4.dtors, c3.dtors);

// (c) Hammer the explicit path 1000x to amplify any per-call leak.
mod.u3_reset_counts();
for (let i = 0; i < 1000; i++) mod.u3_optional_consume(lt);
const cH = mod.u3_counts();
log(`  after 1000x u3_optional_consume(lt): ${JSON.stringify(cH)}`);
const totalCreated = cH.ctors + cH.copies + cH.moves;
const totalDestroyed = cH.dtors;
check(results.u3, '1000x hammer: dtors === ctors+copies+moves (no leak per call)', totalDestroyed, totalCreated);

// (d) Baseline comparison — u3_ref_consume should incur ZERO ctor/copy/move/dtor
// (passed by const& — embind references the existing object).
mod.u3_reset_counts();
const cB1 = mod.u3_counts();
const r3 = mod.u3_ref_consume(lt);
const cB2 = mod.u3_counts();
log(`  baseline (const-ref): payload=${r3}, before=${JSON.stringify(cB1)} after=${JSON.stringify(cB2)}`);
check(results.u3, 'const-ref baseline: no special-member calls (clean wire)',
  cB2.ctors + cB2.copies + cB2.moves + cB2.dtors, 0);

// Final cleanup
lt.delete();

// Snapshot the final counts after deletes (lt's destructor runs on .delete()).
const cFinal = mod.u3_counts();
log(`  final after lt.delete(): ${JSON.stringify(cFinal)}`);

results.u3.summary = {
  classMembersAllowed: true,
  perCallSpanBalanced: results.u3.cases.find((c) => c.id.includes('explicit-arg span'))?.pass ?? false,
  hammerBalanced: results.u3.cases.find((c) => c.id.includes('1000x hammer'))?.pass ?? false,
};

// ── U4: handle refcount balance for std::optional<handle<T>> ─────────
log('\n── U4: refcount balance for std::optional<opencascade::handle<T>> ──');
const sphere = new mod.BRepPrimAPI_MakeSphere(10.0).Shape();
const handle = new mod.HandleIM(sphere, 0.5);

const rcBefore = mod.u4_handle_refcount(handle);
log(`  refcount before exercise: ${rcBefore}`);
check(results.u4, 'baseline refcount > 0 (handle is live in JS)', rcBefore > 0, true);

// Exercise the std::optional<handle> path. Each call goes:
//   JS handle  →  toWireType into std::optional<handle> (refcount+1 on copy)
//   lambda body executes; optional drops (refcount-1 on destruction)
// Net: refcount unchanged.
let allDoneOk = true;
for (let i = 0; i < 100; i++) {
  if (mod.u4_optional_exercise(handle) !== 1) allDoneOk = false;
}
const rcAfter100 = mod.u4_handle_refcount(handle);
log(`  refcount after 100x optional_exercise(handle): ${rcAfter100}`);
check(results.u4, '100x exercise: every call returned IsDone=1', allDoneOk, true);
check(results.u4, '100x exercise: refcount unchanged (no leak per call)', rcAfter100, rcBefore);

// Null/undefined path — no refcount delta possible because no handle to count.
let nullPathOk = true;
for (let i = 0; i < 100; i++) {
  if (mod.u4_optional_exercise(null) !== 0) nullPathOk = false;
  if (mod.u4_optional_exercise(undefined) !== 0) nullPathOk = false;
  if (mod.u4_optional_exercise() !== 0) nullPathOk = false;  // arity-pad
}
const rcAfterNull = mod.u4_handle_refcount(handle);
log(`  refcount after 300x null/undefined/omitted: ${rcAfterNull}`);
check(results.u4, '300x null/undefined/omitted: all returned 0', nullPathOk, true);
check(results.u4, '300x null/undefined/omitted: original handle refcount unchanged', rcAfterNull, rcBefore);

// Heavyweight: pass+drop new handles inside a loop to stress the wire path.
let heavyOk = true;
for (let i = 0; i < 100; i++) {
  const h = new mod.HandleIM(sphere, 0.5);
  if (mod.u4_optional_exercise(h) !== 1) heavyOk = false;
  h.delete();
}
const rcAfterHeavy = mod.u4_handle_refcount(handle);
log(`  refcount after 100x fresh-handle pass+exercise+drop: ${rcAfterHeavy}`);
check(results.u4, '100x fresh-handle hammer: all returned 1', heavyOk, true);
check(results.u4, '100x fresh-handle hammer: ORIGINAL handle refcount unchanged', rcAfterHeavy, rcBefore);

handle.delete();
// After delete, refcount of the now-deleted handle is meaningless; just confirm
// the bindings still respond to a fresh handle.
const handle2 = new mod.HandleIM(sphere, 0.5);
const rcFresh = mod.u4_handle_refcount(handle2);
log(`  fresh handle after originalDelete: refcount=${rcFresh}`);
check(results.u4, 'fresh handle still works after original handle.delete()', rcFresh > 0, true);
handle2.delete();

results.u4.summary = {
  exerciseBalanced: results.u4.cases.find((c) => c.id.includes('100x exercise: refcount'))?.pass ?? false,
  freshHandleHammerBalanced: results.u4.cases.find((c) => c.id.includes('fresh-handle hammer: ORIGINAL'))?.pass ?? false,
};

// ── Wrap ──────────────────────────────────────────────────────────────
const allPass =
  results.u1.cases.every((c) => c.pass) &&
  results.u3.cases.every((c) => c.pass) &&
  results.u4.cases.every((c) => c.pass);

const verdict = allPass
  ? 'U1+U3+U4 all pass: mixed fan-out + std::optional coexist in the same class with byte-identical output across both patterns; std::optional<class T> ctor/dtor is balanced per call (no leak across 1000x hammer); std::optional<opencascade::handle<T>> refcount balanced across 100x exercise + 100x fresh-handle hammer + 300x null/undefined/omitted paths.'
  : 'At least one Tier-4 risk regressed — see failing rows above.';

console.log(`\nU1+U3+U4 verdict: ${verdict}`);

writeFileSync(join(here, 'results.u1-u3-u4.json'),
  JSON.stringify({ results, verdict, allPass }, null, 2));
process.exit(allPass ? 0 : 1);
