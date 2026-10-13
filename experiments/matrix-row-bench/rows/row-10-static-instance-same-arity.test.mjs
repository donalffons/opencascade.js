// row-10 — Same-arity static + instance overloads — split val dispatchers.
//
// Primitive: val
// Test subject (real OCCT class): TCollection_AsciiString
// Subject note: IsEqual static + instance

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

await defineRow(10, async ({ mod, shape }) => {
  if (!mod || !mod.TCollection_AsciiString) return { error: 'binding unavailable: TCollection_AsciiString' };
  try {
    const result = invokeRowShape(mod.TCollection_AsciiString, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
