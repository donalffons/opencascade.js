// row-36 — Defaulted trailing param = T{} — optional if rule 2 clean, else val.
//
// Primitive: optional
// Test subject (synthetic binding): Row36_DefaultConstructed
// Q3-relevant: both val and optional primitives are candidates; the
// bench runner also feeds this row through runtime-bench.mjs for
// val-vs-optional per-call overhead quantification.

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

await defineRow(36, async ({ mod, shape }) => {
  if (!mod || !mod.Row36_DefaultConstructed) return { error: 'binding unavailable: Row36_DefaultConstructed' };
  try {
    const result = invokeRowShape(mod.Row36_DefaultConstructed, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
