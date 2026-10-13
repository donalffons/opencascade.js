// row-14 — Enum vs string overloads — val + Module.EnumType membership check.
//
// Primitive: val
// Test subject (synthetic binding): Row14_EnumStr

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

await defineRow(14, async ({ mod, shape }) => {
  if (!mod || !mod.Row14_EnumStr) return { error: 'binding unavailable: Row14_EnumStr' };
  try {
    const result = invokeRowShape(mod.Row14_EnumStr, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
