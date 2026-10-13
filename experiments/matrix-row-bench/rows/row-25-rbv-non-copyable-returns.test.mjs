// row-25 — RBV non-copyable returns (deleted copy ctor) — ref-only envelope + [Symbol.dispose].
//
// Primitive: rbv
// Test subject (real OCCT class): BRepGraph_Builder
// Subject note: Add returns BRepGraph& non-copyable

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

await defineRow(25, async ({ mod, shape }) => {
  if (!mod || !mod.BRepGraph_Builder) return { error: 'binding unavailable: BRepGraph_Builder' };
  try {
    const inst = new mod.BRepGraph_Builder();
    const result = inst.invokeRbv?.(...shape.args) ?? null;
    inst.delete?.();
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
