// row-05 — Single overload, scoped-constant default (= NS::Const).
//
// Primitive: optional
// Test subject (synthetic binding): Row05_ScopedConst

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

await defineRow(5, async ({ mod, shape }) => {
  if (!mod || !mod.Row05_ScopedConst) return { error: 'binding unavailable: Row05_ScopedConst' };
  try {
    const result = invokeRowShape(mod.Row05_ScopedConst, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
