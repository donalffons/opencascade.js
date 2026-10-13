// row-08 — Sub-2b degenerate sibling constructors — val-discriminated single ctor at larger arity.
//
// Primitive: val
// Test subject (real OCCT class): BRepGProp_Face
// Subject note: (bool) + (Face, bool) ctor pair
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

await defineRow(8, async ({ mod, shape }) => {
  if (!mod || !mod.BRepGProp_Face) return { error: 'binding unavailable: BRepGProp_Face' };
  try {
    const result = invokeRowShape(mod.BRepGProp_Face, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
