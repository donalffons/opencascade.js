// row-12 — Integer vs floating overloads — val + Number.isInteger discrimination.
//
// Primitive: val
// Test subject (real OCCT class): TCollection_ExtendedString
// Subject note: (int) vs (double) ctor

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

await defineRow(12, async ({ mod, shape }) => {
  if (!mod || !mod.TCollection_ExtendedString) return { error: 'binding unavailable: TCollection_ExtendedString' };
  try {
    const result = invokeRowShape(mod.TCollection_ExtendedString, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
