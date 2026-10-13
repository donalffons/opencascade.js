// row-20 — const Handle<T>& input param — native typed embind binding.
//
// Primitive: native
// Test subject (real OCCT class): BRepMesh_IncrementalMesh
// Subject note: Handle inputs ubiquitous

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

await defineRow(20, async ({ mod, shape }) => {
  if (!mod || !mod.BRepMesh_IncrementalMesh) return { error: 'binding unavailable: BRepMesh_IncrementalMesh' };
  try {
    const result = invokeRowShape(mod.BRepMesh_IncrementalMesh, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
