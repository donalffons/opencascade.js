// row-11 — JS-indistinguishable integer twins (size_t vs int) — emit only modern canonical.
//
// Primitive: dedup
// Test subject (synthetic binding): Row11_IntTwins

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

await defineRow(11, async ({ mod, shape }) => {
  // Primitive 'dedup' is exercised structurally (no live invocation
  // needed in the harness — the binding's presence/absence and its
  // emit-time outcome carries the verdict).
  if (!mod) return { error: 'binding unavailable' };
  return { result: { primitive: 'dedup', structuralCheck: true } };
});
