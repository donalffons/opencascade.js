// row-33 — Cstring-wrapper with trailing default — val + isUndefined() inside cstring lambda.
//
// Primitive: val
// Test subject (real OCCT class): IFSelect_Act
// Subject note: SetGroup(CString,CString="")
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

await defineRow(33, async ({ mod, shape }) => {
  if (!mod || !mod.IFSelect_Act) return { error: 'binding unavailable: IFSelect_Act' };
  try {
    const result = invokeRowShape(mod.IFSelect_Act, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
