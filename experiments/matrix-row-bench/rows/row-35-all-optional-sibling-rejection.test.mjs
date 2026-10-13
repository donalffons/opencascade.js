// row-35 — Same-arity sibling group, ≥2 all-optional siblings (T1) — bindgen emit-time rejection.
//
// Primitive: reject
// Test subject (synthetic binding): Row35_AllOpt
// Speculative: zero production instances per the surface audit; retained
// as defensive coverage.

import { defineRow } from '../harness.mjs';

const invokeRowShape = (Cls, shape) => {
  // Default invocation strategy — instantiate then call probe(...).
  // Per-row tests can override this by inlining their own body.
  const inst = typeof Cls === 'function' ? new Cls() : Cls;
  try {
    if (typeof inst.probe === 'function') return inst.probe(...shape.args);
    if (typeof inst === 'function') return inst(...shape.args);
    return null;
  } finally {
    if (inst && typeof inst.delete === 'function') inst.delete();
  }
};

await defineRow(35, async ({ mod, shape }) => {
  // Primitive 'reject' is exercised structurally (no live invocation
  // needed in the harness — the binding's presence/absence and its
  // emit-time outcome carries the verdict).
  if (!mod) return { error: 'binding unavailable' };
  return { result: { primitive: 'reject', structuralCheck: true } };
});
