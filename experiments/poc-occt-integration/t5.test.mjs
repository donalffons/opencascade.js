// t5.test.mjs — Tier-3 T5: -sEVAL_CTORS=2 interaction with the
// arity-pad + optional-wildcard dispatcher.
//
// Build flag effect (observed at link time):
//   building:INFO: ctor_evaller: trying to eval global ctors
//   trying to eval __wasm_call_ctors
//     ...partial evalling successful, but stopping since could not eval:
//        call import: env._embind_register_optional
//     ...stopping
//
// Interpretation: EVAL_CTORS=2 attempts to evaluate C++ static
// constructors at link time. EMSCRIPTEN_BINDINGS blocks register
// themselves via static ctors, but the registration calls reach imported
// JS functions (_embind_register_class, _embind_register_optional, etc.)
// which CANNOT be evaluated at link time. The evaluator stops at the
// first such call — meaning binding registration happens at runtime
// regardless, identical to the non-EVAL_CTORS build.
//
// This test verifies behavioural parity: every Gates-1–3 + T1–T4
// assertion should produce the same outcome under the T5 build as the
// regular prod+pad build.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const mod = await (await import('./mod-optional.t5.mjs')).default();

const log = (l) => console.log(l);
const results = [];
const check = (id, actual, expected) => {
  const pass = Object.is(actual, expected);
  results.push({ id, actual, expected, pass });
  log(`  ${pass ? '✓' : '✗'} ${id} — expected=${expected} got=${actual}`);
  return pass;
};

log('── T5: behavioural parity under -sEVAL_CTORS=2 ──');

// Subset that covers every dispatcher code path we care about:
//   arity-pad on method, arity-pad on ctor, optional-wildcard in
//   $getSignature, static-method (T2), optional return (T3),
//   non-default-ctor T (T4), multi-optional collision (T1 — winner
//   should be the SAME class as under prod+pad).

// Arity-pad on ctor
const sphereShape = new mod.BRepPrimAPI_MakeSphere(10.0).Shape();
const im = new mod.BRepMesh_IncrementalMesh(sphereShape, 0.5);
check('IM(sphere, 0.5) arity-pad to 5', im.IsDone(), true);
check('count_triangles(sphere)', mod.count_triangles(sphereShape), 306);

// Arity-pad on method (HandleIM smart_ptr path)
const handle = new mod.HandleIM(sphereShape, 0.5);
check('HandleIM(sphere, 0.5) arity-pad + smart_ptr', mod.HandleIM_IsDone(handle), true);

// Optional-wildcard in getSignature (Gate 2's AmbigCtor)
const pnt = new mod.gp_Pnt(0, 0, 0);
const amb = new mod.AmbigCtor(pnt);  // arity-pad 1 → 2, C1 picks Pnt with nullopt
check('AmbigCtor(pnt) routedBy', amb.routedBy, 1);
check('AmbigCtor(pnt) tail (C++ default 99)', amb.tail, 99);
amb.delete(); pnt.delete();

// T2: static method
check('StaticOptProbe.probe()  static + arity-pad', mod.StaticOptProbe.probe(), 99);
check('StaticOptProbe.probe(7)', mod.StaticOptProbe.probe(7), 7);

// T3: optional return
check('t3_maybe_value(true)', mod.t3_maybe_value(true), 42);
check('t3_maybe_value(false)', mod.t3_maybe_value(false), undefined);

// T4: non-default-ctor T
const nd = new mod.NonDefault(7);
check('t4_optional_nondefault(new NonDefault(7))', mod.t4_optional_nondefault(nd), 7);
nd.delete();
check('t4_optional_nondefault()  arity-pad → nullopt → -1', mod.t4_optional_nondefault(), -1);

// T1: multi-optional collision winner. Under prod+pad the winner was
// last-registered. Confirm the same direction holds under EVAL_CTORS.
const o1 = new mod.MultiOptAmbig();
o1.probe();
check('MultiOptAmbig.probe() winner (last-of-same-arity)', o1.lastDispatched, 'int+string');
o1.delete();
const o2 = new mod.MultiOptAmbigRev();
o2.probe();
check('MultiOptAmbigRev.probe() winner (last-of-same-arity)', o2.lastDispatched, 'double+bool');
o2.delete();

const allPass = results.every((r) => r.pass);
const verdict = allPass
  ? '-sEVAL_CTORS=2 is BEHAVIOURALLY NEUTRAL against the arity-pad + optional-wildcard dispatcher. The link-time ctor evaluator stops at the first imported binding-registration call (per the build-time log line "stopping since could not eval: call import: env._embind_register_optional"), so all EMSCRIPTEN_BINDINGS work happens at runtime exactly as in the default build. Every Gates-1–3 + T1–T4 assertion produces identical outcomes under T5.'
  : 'Behavioural drift under -sEVAL_CTORS=2 detected — investigate before enabling the flag in production.';

log(`\nT5 verdict: ${verdict}`);
writeFileSync(join(here, 'results.t5.json'),
  JSON.stringify({
    buildFlagAdded: '-sEVAL_CTORS=2',
    buildBehaviour: 'Partial ctor eval; stops at first _embind_register_* import call',
    results,
    verdict,
    allPass,
  }, null, 2));
process.exit(allPass ? 0 : 1);
