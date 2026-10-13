// row-37 — Reference-default T& foo = singleton() (speculative) — val (NEVER optional).
//
// Primitive: val
// Test subject (synthetic binding): Row37_RefDefault
// Speculative: zero production instances per the surface audit; retained
// as defensive coverage.

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

await defineRow(37, async ({ mod, shape }) => {
  if (!mod || !mod.Row37_RefDefault) return { error: 'binding unavailable: Row37_RefDefault' };
  try {
    const result = invokeRowShape(mod.Row37_RefDefault, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
