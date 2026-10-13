// row-16 — Primitive pure-out params (double&) — RBV envelope value_object return.
//
// Primitive: rbv
// Test subject (real OCCT class): Geom_Surface
// Subject note: Bounds(double&,double&,double&,double&)

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

await defineRow(16, async ({ mod, shape }) => {
  if (!mod || !mod.Geom_Surface) return { error: 'binding unavailable: Geom_Surface' };
  try {
    const inst = new mod.Geom_Surface();
    const result = inst.invokeRbv?.(...shape.args) ?? null;
    inst.delete?.();
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
