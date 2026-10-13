// row-19 — Handle<T>& output param — RBV input-elision envelope.
//
// Primitive: rbv
// Test subject (real OCCT class): GeomLib
// Subject note: To3d(..., Handle<Geom_Curve>&)

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

await defineRow(19, async ({ mod, shape }) => {
  if (!mod || !mod.GeomLib) return { error: 'binding unavailable: GeomLib' };
  try {
    const inst = new mod.GeomLib();
    const result = inst.invokeRbv?.(...shape.args) ?? null;
    inst.delete?.();
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
