// row-30 — Nullable object arguments (null meaningful in C++) — val with explicit null policy.
//
// Primitive: val
// Test subject (synthetic binding): Row30_NullableObject

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

await defineRow(30, async ({ mod, shape }) => {
  if (!mod || !mod.Row30_NullableObject) return { error: 'binding unavailable: Row30_NullableObject' };
  try {
    const result = invokeRowShape(mod.Row30_NullableObject, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
