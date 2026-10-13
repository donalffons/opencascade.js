// row-09 — Same-name same-arity class-typed overloads — val + instanceof dispatch.
//
// Primitive: val
// Test subject (real OCCT class): XCAFDoc_ColorTool
// Subject note: SetColor(Label,...) vs SetColor(Shape,...)

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

await defineRow(9, async ({ mod, shape }) => {
  if (!mod || !mod.XCAFDoc_ColorTool) return { error: 'binding unavailable: XCAFDoc_ColorTool' };
  try {
    const result = invokeRowShape(mod.XCAFDoc_ColorTool, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
