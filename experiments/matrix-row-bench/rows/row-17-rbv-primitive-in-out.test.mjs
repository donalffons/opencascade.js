// row-17 — Primitive in/out params — RBV input-passthrough envelope.
//
// Primitive: rbv
// Test subject (real OCCT class): gp_Trsf
// Subject note: Transforms(double&,double&,double&)

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

await defineRow(17, async ({ mod, shape }) => {
  if (!mod || !mod.gp_Trsf) return { error: 'binding unavailable: gp_Trsf' };
  try {
    const inst = new mod.gp_Trsf();
    const result = inst.invokeRbv?.(...shape.args) ?? null;
    inst.delete?.();
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
