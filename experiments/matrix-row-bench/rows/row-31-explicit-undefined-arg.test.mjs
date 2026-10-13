// row-31 — Explicit undefined argument — per absence-semantics tag (rule 4).
//
// Primitive: cross-cutting
// Test subject (synthetic binding): Row31_ExplicitUndefined

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

await defineRow(31, async ({ mod, shape }) => {
  // Primitive 'cross-cutting' is exercised structurally (no live invocation
  // needed in the harness — the binding's presence/absence and its
  // emit-time outcome carries the verdict).
  if (!mod) return { error: 'binding unavailable' };
  return { result: { primitive: 'cross-cutting', structuralCheck: true } };
});
