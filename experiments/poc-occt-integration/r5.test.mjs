// r5.test.mjs — Front-load R5: four real OCCT trailing-default shapes.
//
// Bindings in bindings-optional.cpp:
//   r5_funccall_default(double v, std::optional<double> tol)
//     → C++ default: Precision::Confusion() ≈ 1e-7
//   r5_handle_default(Shape, std::optional<handle<IM_Handled>>) -> int
//     → 1 = null-handle default applied, 0 = handle passed
//   r5_classvalue_default(Shape, std::optional<TopLoc_Location>) -> int
//     → 1 = default-constructed TopLoc applied (IsIdentity), 0 otherwise
//   r5_constref_default(Shape, std::optional<TopLoc_Location>) -> int
//     → 1 = const& bound to value_or default (identity), 0 otherwise
//
// Note on shapes 3 and 4: we can only test the OMITTED path from JS
// because TopLoc_Location isn't bound to embind in this PoC (binding
// it adds noise unrelated to the R5 verification). The OMITTED path is
// the bindgen-tricky path — the EXPLICIT path is exercised in R3.
//
// What we're verifying:
//   - All four lambda bodies COMPILED (verified at build time)
//   - All four omitted-arg paths produce the expected C++ default
//   - value_or rvalue conversion works for: function-call expr,
//     handle expr, default-ctor T, const& bound to value_or result.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const mod = await (await import('./mod-optional.mjs')).default();

const sphere = new mod.BRepPrimAPI_MakeSphere(1.0).Shape();
const handle = new mod.HandleIM(sphere, 0.5);

const cases = [
  {
    shape: '1. function-call expr default (Precision::Confusion())',
    omitted: () => mod.r5_funccall_default(10.0),
    explicit: () => mod.r5_funccall_default(10.0, 0.25),
    expectOmittedNear: 10.0 + 1e-7,
    expectExplicit: 10.25,
    tol: 1e-6,
  },
  {
    shape: '2. handle expression default (null Handle())',
    omitted: () => mod.r5_handle_default(sphere),
    explicit: () => mod.r5_handle_default(sphere, handle),
    expectOmitted: 1, expectExplicit: 0,
  },
  {
    shape: '3. class-constructed value default (TopLoc_Location())',
    omitted: () => mod.r5_classvalue_default(sphere),
    explicit: null, // TopLoc_Location not bound — see header
    expectOmitted: 1,
  },
  {
    shape: '4. const T& bound from anonymous temporary (TopLoc_Location())',
    omitted: () => mod.r5_constref_default(sphere),
    explicit: null,
    expectOmitted: 1,
  },
];

const results = [];
let allPass = true;
for (const c of cases) {
  let omitted, explicit, err;
  try { omitted = c.omitted(); } catch (e) { err = String(e?.message ?? e); }
  if (c.explicit) {
    try { explicit = c.explicit(); } catch (e) { err = err ?? String(e?.message ?? e); }
  }

  let omittedPass;
  if (c.tol !== undefined) {
    omittedPass = err === undefined && Math.abs(omitted - c.expectOmittedNear) < c.tol;
  } else {
    omittedPass = err === undefined && omitted === c.expectOmitted;
  }
  const explicitPass = c.explicit ? (err === undefined && explicit === c.expectExplicit) : 'n/a';
  const pass = omittedPass && (explicitPass === 'n/a' || explicitPass);
  if (!pass) allPass = false;

  console.log(`${pass ? '✓' : '✗'} ${c.shape}`);
  console.log(`    omitted  → got=${omitted} expected≈${c.expectOmittedNear ?? c.expectOmitted}  ${omittedPass ? 'OK' : 'FAIL'}`);
  if (c.explicit) console.log(`    explicit → got=${explicit} expected=${c.expectExplicit}  ${explicitPass ? 'OK' : 'FAIL'}`);
  if (err) console.log(`    ERROR: ${err.slice(0, 200)}`);
  results.push({ shape: c.shape, omitted, explicit, err, pass });
}

const verdict = allPass
  ? 'All four real OCCT trailing-default shapes translate cleanly: function-call expr (rvalue forwardable), handle expr (null handle), default-ctor by-value, and const& bound from value_or rvalue. Shape 4 confirms the "const T& → std::optional<T> by-value" ABI shift is mechanical — the value_or rvalue binds correctly to the const& parameter at call time inside the bindgen-emitted lambda body.'
  : 'At least one OCCT trailing-default shape regressed — see failing rows above.';

console.log(`\nR5 verdict: ${verdict}`);

writeFileSync(join(here, 'results.r5.json'), JSON.stringify({ results, verdict, allPass }, null, 2));
process.exit(allPass ? 0 : 1);
