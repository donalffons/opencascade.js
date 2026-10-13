// row-27 — RBV-elided arity collisions — JS-effective dedup / RBV collision dispatch.
//
// Primitive: rbv
// Test subject (synthetic binding): Row27_RbvCollision
// Blocked by Phase 1: this row depends on rule 2 / rule 3 detector landing.
// Harness reports verdict=pending-phase-1 until Phase 1 lands.

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

await defineRow(27, async ({ mod, shape }) => {
  if (!mod || !mod.Row27_RbvCollision) return { error: 'binding unavailable: Row27_RbvCollision' };
  try {
    const inst = new mod.Row27_RbvCollision();
    const result = inst.invokeRbv?.(...shape.args) ?? null;
    inst.delete?.();
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
