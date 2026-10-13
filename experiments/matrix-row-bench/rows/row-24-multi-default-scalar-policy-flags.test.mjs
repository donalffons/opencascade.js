// row-24 — Defaulted scalar policy flags (bool/enum/double) — optional if rule 2 clean, else val.
//
// Primitive: optional
// Test subject (synthetic binding): Row24_PolicyFlags
// Blocked by Phase 1: this row depends on rule 2 / rule 3 detector landing.
// Harness reports verdict=pending-phase-1 until Phase 1 lands.
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

await defineRow(24, async ({ mod, shape }) => {
  if (!mod || !mod.Row24_PolicyFlags) return { error: 'binding unavailable: Row24_PolicyFlags' };
  try {
    const result = invokeRowShape(mod.Row24_PolicyFlags, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
