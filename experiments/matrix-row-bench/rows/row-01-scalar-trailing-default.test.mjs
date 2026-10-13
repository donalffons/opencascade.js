// row-01 — single overload, trailing scalar default (val primitive).
//
// Real-world example: SetUseSpan(bool=false). The val primitive routes
// via isUndefined()/isNull() in the dispatch lambda, so 'undefined' →
// default while 'null' → reject (per the strict-by-default policy).
//
// Test subject in live mode: Row01_Scalar synthetic class in bindings.

import { defineRow } from '../harness.mjs';

await defineRow(1, async ({ mod, shape }) => {
  if (!mod || !mod.Row01_Scalar) return { error: 'binding unavailable' };
  const inst = new mod.Row01_Scalar();
  try {
    const result = inst.setUseSpan(...shape.args);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  } finally {
    inst.delete?.();
  }
});
