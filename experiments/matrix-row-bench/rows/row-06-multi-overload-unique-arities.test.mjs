// row-06 — Multi-overload, unique arities, no defaults — native embind arity-only.
//
// Primitive: native
// Test subject (real OCCT class): TopoDS_Shape
// Subject note: Free / Locked / Modified getter+setter pairs

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

await defineRow(6, async ({ mod, shape }) => {
  if (!mod || !mod.TopoDS_Shape) return { error: 'binding unavailable: TopoDS_Shape' };
  try {
    const result = invokeRowShape(mod.TopoDS_Shape, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
