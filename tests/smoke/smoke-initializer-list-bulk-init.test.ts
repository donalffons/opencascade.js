/**
 * Verifies NCollection initializer-list constructors accept empty and populated JavaScript arrays
 * and preserve their element counts.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: std::initializer_list<T> bulk-init (row 38)', () => {
  beforeAll(async () => { await initOC(); });

  it('empty initializer list: new NCollection_List_handle_BOPDS_PaveBlock([]) — POST-PHASE-4', () => {
    const oc = getOC();
    // The .d.ts declares the initializer-list ctor
    // `constructor(theInitList: BOPDS_PaveBlock[], theAllocator?)`, so the
    // call is type-valid. Pre-Phase-4 it THROWS at runtime because embind
    // cannot lift a JS Array to a C++ `std::initializer_list<T>` (the ctor
    // is registered-but-unreachable). This pin flips green once the
    // NCollection auto-discovery generator emits the val-array adapter.
    expect(() => {
      using list = new oc.NCollection_List_handle_BOPDS_PaveBlock([]);
      expect(list).toBeDefined();
      expect(list.Size()).toBe(0);
    }).not.toThrow();
  });

  it('populated initializer list of handles — POST-PHASE-4', () => {
    const oc = getOC();
    using h1 = new oc.BOPDS_PaveBlock();
    using h2 = new oc.BOPDS_PaveBlock();
    using h3 = new oc.BOPDS_PaveBlock();
    expect(() => {
      using list = new oc.NCollection_List_handle_BOPDS_PaveBlock([h1, h2, h3]);
      expect(list).toBeDefined();
      expect(list.Size()).toBe(3);
    }).not.toThrow();
  });
});
