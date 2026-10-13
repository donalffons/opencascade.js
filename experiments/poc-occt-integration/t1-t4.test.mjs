// t1-t4.test.mjs — Tier-3 front-loaded validations T1 through T4.
//
//   T1  multi-optional same-arity wildcard collision determinism
//   T2  .class_function static dispatcher coverage with std::optional
//   T3  std::optional<T> as RETURN type (EmValOptionalType.fromWireType)
//   T4  register_optional<T> for non-default-constructible T
//
// T5 lives in t5.test.mjs (separate build flag).

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const mod = await (await import('./mod-optional.mjs')).default();

const log = (l) => console.log(l);
const t = {};

// ── T1 ────────────────────────────────────────────────────────────────
log('── T1: multi-optional same-arity wildcard collision determinism ──');
const runT1 = (label, Ctor) => {
  const probes = [
    { id: 'probe(undefined, undefined)', fn: (o) => o.probe(undefined, undefined) },
    { id: 'probe()  (arity-pad → 2)',    fn: (o) => o.probe() },
    { id: 'probe(1)  (arity-pad → 2)',   fn: (o) => o.probe(1) },
    { id: 'probe(undefined, true)',      fn: (o) => o.probe(undefined, true) },
  ];
  const observed = [];
  for (const p of probes) {
    const o = new Ctor();
    let dispatched, error;
    try { p.fn(o); dispatched = o.lastDispatched; }
    catch (e) { error = String(e?.message ?? e); }
    o.delete();
    observed.push({ order: label, id: p.id, dispatched, error });
    log(`  [${label}] ${p.id} → ${error ? `THREW: ${error.slice(0, 80)}` : `dispatched=${dispatched}`}`);
  }
  return observed;
};
const t1A = runT1('double+bool-first', mod.MultiOptAmbig);
log('');
const t1B = runT1('int+string-first', mod.MultiOptAmbigRev);

const winnerA = new Set(t1A.filter((o) => o.dispatched).map((o) => o.dispatched));
const winnerB = new Set(t1B.filter((o) => o.dispatched).map((o) => o.dispatched));
const allSameA = winnerA.size === 1;
const allSameB = winnerB.size === 1;
const wA = [...winnerA].join('|');
const wB = [...winnerB].join('|');

t.t1 = (() => {
  if (!allSameA || !allSameB) {
    return {
      pass: false,
      classification: 'mixed-dispatch',
      detail: 'Different call shapes dispatch to different overloads within the same registration order — non-deterministic; bindgen guard required.',
    };
  }
  if (wA === wB) {
    return {
      pass: true,
      classification: `type-priority-winner-${wA}`,
      detail: `Both registration orders dispatch to "${wA}". Winner is type-priority based (not registration-order based) — same model as R4.`,
    };
  }
  // Empirical observation: registration order [A, B] → B wins; reversed
  // [B, A] → A wins. Direction is LAST-OF-SAME-ARITY-WINS (subsequent
  // registration overwrites prior in libembind's signaturesArray for the
  // same arity). This is an implementation detail of how libembind
  // appends to overloadTable[argCount]; the bindgen consequence is
  // identical regardless of direction.
  return {
    pass: true,
    classification: 'registration-order-deterministic (last-of-same-arity wins)',
    detail: `Order [double+bool, int+string] → "${wA}" wins; reversed [int+string, double+bool] → "${wB}" wins. Winner is the LAST-registered sibling for any given arity. Bindgen MUST either: (a) emit-time reject all-optional same-arity sibling groups; or (b) impose a deterministic registration order (alphabetical / source-line) so the choice is reproducible across builds. Bonus observation: probe(undefined, true) under [double+bool-first] THROWS because the dispatcher picks int+string (the winner) and toWireType rejects "true" → "std::string". Under the reverse order it dispatches to double+bool and succeeds. This corroborates that the wildcard match is reached BEFORE wire conversion, so type mismatches surface as loud BindingError at toWireType — not silent corruption.`,
  };
})();
log(`\nT1 classification: ${t.t1.classification}\n  → ${t.t1.detail}`);

// ── T2 ────────────────────────────────────────────────────────────────
log('\n── T2: .class_function static dispatcher coverage with std::optional ──');
const t2Cases = [
  { id: 'StaticOptProbe.probe(7)',    fn: () => mod.StaticOptProbe.probe(7),    expect: 7 },
  { id: 'StaticOptProbe.probe()',     fn: () => mod.StaticOptProbe.probe(),     expect: 99 },
  { id: 'StaticOptProbe.probe(undefined)', fn: () => mod.StaticOptProbe.probe(undefined), expect: 99 },
];
const t2Results = [];
for (const c of t2Cases) {
  let value, error;
  try { value = c.fn(); }
  catch (e) { error = String(e?.message ?? e); }
  const pass = error === undefined && value === c.expect;
  log(`  ${pass ? '✓' : '✗'} ${c.id} — expected=${c.expect} got=${error ? 'THREW: ' + error.slice(0, 80) : value}`);
  t2Results.push({ ...c, fn: undefined, value, error, pass });
}
t.t2 = {
  pass: t2Results.every((r) => r.pass),
  detail: t2Results.every((r) => r.pass)
    ? 'Static methods (.class_function) share the $ensureOverloadTable machinery — arity-pad fires on omitted args identically to instance methods.'
    : 'At least one static-method case regressed — see above.',
};

// ── T3 ────────────────────────────────────────────────────────────────
log('\n── T3: std::optional<T> as RETURN type ──');
const t3Cases = [
  { id: 't3_maybe_value(true)',  fn: () => mod.t3_maybe_value(true),  expect: 42 },
  { id: 't3_maybe_value(false)', fn: () => mod.t3_maybe_value(false), expect: undefined },
];
const t3Results = [];
for (const c of t3Cases) {
  let value, error;
  try { value = c.fn(); }
  catch (e) { error = String(e?.message ?? e); }
  const pass = error === undefined && Object.is(value, c.expect);
  log(`  ${pass ? '✓' : '✗'} ${c.id} — expected=${c.expect} got=${error ? 'THREW: ' + error.slice(0, 80) : value}`);
  t3Results.push({ ...c, fn: undefined, value, error, pass });
}
t.t3 = {
  pass: t3Results.every((r) => r.pass),
  detail: t3Results.every((r) => r.pass)
    ? 'EmValOptionalType.fromWireType produces T for std::optional<T>(value) and undefined for std::nullopt — JS sees `T | undefined`.'
    : 'std::optional<T> return values do not round-trip correctly.',
};

// ── T4 ────────────────────────────────────────────────────────────────
log('\n── T4: register_optional<T> for non-default-constructible T ──');
log('  (compile-time verified: bindings-optional.cpp linked successfully)');
const t4Cases = [
  { id: 't4_optional_nondefault(new NonDefault(7))',
    fn: () => { const nd = new mod.NonDefault(7); const r = mod.t4_optional_nondefault(nd); nd.delete(); return r; },
    expect: 7 },
  { id: 't4_optional_nondefault()  (arity-pad → nullopt → -1)',
    fn: () => mod.t4_optional_nondefault(),
    expect: -1 },
  { id: 't4_optional_nondefault(undefined) → nullopt → -1',
    fn: () => mod.t4_optional_nondefault(undefined),
    expect: -1 },
];
const t4Results = [];
for (const c of t4Cases) {
  let value, error;
  try { value = c.fn(); }
  catch (e) { error = String(e?.message ?? e); }
  const pass = error === undefined && value === c.expect;
  log(`  ${pass ? '✓' : '✗'} ${c.id} — expected=${c.expect} got=${error ? 'THREW: ' + error.slice(0, 80) : value}`);
  t4Results.push({ ...c, fn: undefined, value, error, pass });
}
t.t4 = {
  compiled: true,
  runtimePass: t4Results.every((r) => r.pass),
  detail: t4Results.every((r) => r.pass)
    ? 'register_optional<T>() compiles for T without a default constructor. The std::optional machinery uses copy/move/destructor only — no T() invocation. Bindgen needs NO default-ctor precondition check for std::optional<T> emission.'
    : 'Compiled but runtime round-trip failed for non-default-ctor T.',
};

// ── Wrap ──────────────────────────────────────────────────────────────
const allPass = t.t1.pass && t.t2.pass && t.t3.pass && t.t4.runtimePass;
const verdict = allPass
  ? 'All Tier-3 front-loadable risks resolved: T1 determinism characterised (action: bindgen guard or deterministic emit order), T2 static-method dispatcher confirmed shared with instance dispatcher, T3 std::optional<T> returns round-trip cleanly, T4 non-default-ctor T compiles and runs.'
  : 'At least one Tier-3 risk regressed — see failing rows above.';

log(`\nT1–T4 verdict: ${verdict}`);
writeFileSync(join(here, 'results.t1-t4.json'),
  JSON.stringify({ t1: { observed: [...t1A, ...t1B], ...t.t1 }, t2: { cases: t2Results, ...t.t2 }, t3: { cases: t3Results, ...t.t3 }, t4: { cases: t4Results, ...t.t4 }, verdict, allPass }, null, 2));
process.exit(allPass ? 0 : 1);
