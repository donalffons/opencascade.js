/**
 * Smoke: NCollection_IncAllocator lifecycle (Allocate is not surfaced on the JS wrapper).
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: NCollection_IncAllocator', () => {
  beforeAll(async () => {
    await initOC();
  });

  it('constructs with block size, supports SetThreadSafe, and Reset(false) is safe', () => {
    const oc = getOC();
    using alloc = new oc.NCollection_IncAllocator(1024);
    expect(oc.NCollection_IncAllocator.get_type_name()).toContain('IncAllocator');

    expect(() => {
      alloc.SetThreadSafe(false);
    }).not.toThrow();

    expect(() => {
      alloc.Reset(false);
    }).not.toThrow();
  });
});
