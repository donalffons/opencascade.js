// row-38 — std::initializer_list<T> constructor parameter — val + JS-array element iteration.
//
// Primitive: val
// Test subject (real OCCT class): NCollection_List_handle_BOPDS_PaveBlock
// Subject note: init-list ctor

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

await defineRow(38, async ({ mod, shape }) => {
  if (!mod || !mod.NCollection_List_handle_BOPDS_PaveBlock) return { error: 'binding unavailable: NCollection_List_handle_BOPDS_PaveBlock' };
  try {
    const result = invokeRowShape(mod.NCollection_List_handle_BOPDS_PaveBlock, shape);
    return { result };
  } catch (e) {
    return { error: String(e?.message ?? e) };
  }
});
