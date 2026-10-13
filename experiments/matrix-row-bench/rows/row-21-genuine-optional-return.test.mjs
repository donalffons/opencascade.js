// row-21 — Genuine std::optional<T> return type — EmValOptionalType::fromWireType.
//
// Primitive: optional
// Test subject (real OCCT class): BOPDS_Interf
// Subject note: GetIndexNew() → std::optional<int>

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

await defineRow(21, async ({ mod, shape }) => {
  if (!mod || !mod.BOPDS_Interf) return { error: 'binding unavailable: BOPDS_Interf' };
  try {
    const result = invokeRowShape(mod.BOPDS_Interf, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
