// r3.test.mjs — Front-load R3: std::optional<opencascade::handle<T>>.
//
// Binding under test (in bindings-optional.cpp):
//   int optional_handle_probe(const TopoDS_Shape&,
//                             std::optional<opencascade::handle<IM_Handled>>);
// Return:  -1 null-shape, 0 nullopt/null-handle, 1 non-null-handle
//
// Four call shapes:
//   (a) omitted    →  arity-pad → undefined → toWireType → nullopt → 0
//   (b) handle obj →  cross-wire smart_ptr conversion → 1
//   (c) null       →  EmValOptionalType.toWireType(null) → expected nullopt → 0
//   (d) undefined  →  same as omitted → 0

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const mod = await (await import('./mod-optional.mjs')).default();

const sphere = new mod.BRepPrimAPI_MakeSphere(10.0).Shape();
const handle = new mod.HandleIM(sphere, 0.5);

const cases = [
  { id: '(a) omitted (arity-pad → nullopt)',           fn: () => mod.optional_handle_probe(sphere),              expect: 0 },
  { id: '(b) explicit handle object',                  fn: () => mod.optional_handle_probe(sphere, handle),      expect: 1 },
  { id: '(c) explicit null',                           fn: () => mod.optional_handle_probe(sphere, null),        expect: 0 },
  { id: '(d) explicit undefined',                      fn: () => mod.optional_handle_probe(sphere, undefined),   expect: 0 },
];

const results = [];
let allPass = true;
for (const c of cases) {
  let outcome, value, error;
  try { value = c.fn(); outcome = value === c.expect ? 'pass' : 'mismatch'; }
  catch (e) { outcome = 'threw'; error = String(e?.message ?? e); }
  if (outcome !== 'pass') allPass = false;
  console.log(`${outcome === 'pass' ? '✓' : '✗'} ${c.id} — expected=${c.expect} got=${value === undefined ? `THREW: ${error?.slice(0,80)}` : value}`);
  results.push({ ...c, fn: undefined, outcome, value, error });
}

const verdict = allPass
  ? 'std::optional<opencascade::handle<T>> composes cleanly. EmValOptionalType.toWireType accepts JS handle objects via genericPointerToWireType, null/undefined collapse to nullopt, and .value_or(opencascade::handle<T>()) produces a valid null handle for the OCCT call.'
  : 'std::optional<opencascade::handle<T>> has a gap in at least one call shape — see failing rows above.';

console.log(`\nR3 verdict: ${verdict}`);
writeFileSync(join(here, 'results.r3.json'), JSON.stringify({ cases: results, verdict, allPass }, null, 2));
process.exit(allPass ? 0 : 1);
