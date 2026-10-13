// row-04 — Single overload, const T& foo = T() (const-ref to anonymous temporary).
//
// Primitive: optional
// Test subject (synthetic binding): Row04_ConstRefTemp

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

await defineRow(4, async ({ mod, shape }) => {
  if (!mod || !mod.Row04_ConstRefTemp) return { error: 'binding unavailable: Row04_ConstRefTemp' };
  try {
    const result = invokeRowShape(mod.Row04_ConstRefTemp, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
