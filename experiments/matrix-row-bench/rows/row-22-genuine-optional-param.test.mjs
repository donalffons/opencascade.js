// row-22 — Genuine std::optional<T> parameter — native, explicit-undefined-policy.
//
// Primitive: optional
// Test subject (real OCCT class): BRepGraph_ParentExplorer
// Subject note: theAvoidKind: const std::optional<Kind>&

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

await defineRow(22, async ({ mod, shape }) => {
  if (!mod || !mod.BRepGraph_ParentExplorer) return { error: 'binding unavailable: BRepGraph_ParentExplorer' };
  try {
    const result = invokeRowShape(mod.BRepGraph_ParentExplorer, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
