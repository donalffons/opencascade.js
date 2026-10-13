import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

/**
 * Tests for safe duplicate filtering.
 *
 * After implementation, move ctors are filtered (only copy kept),
 * float/double deduped (only double kept), and string encoding deduped
 * (only UTF-8 kept). These tests use suffix-free constructors and will
 * FAIL before implementation — expected.
 */
describe.skipIf(!wasmExists)('Smoke: safe duplicate filtering', () => {
  beforeAll(async () => { await initOC(); });

  describe('copy construction (move ctor filtered)', () => {
    it('should copy-construct a gp_Dir from an existing gp_Dir without suffix', () => {
      const oc = getOC();
      using original = new oc.gp_Dir(0, 0, 1);
      using copy = new oc.gp_Dir(original);
      expect(copy.Z()).toBeCloseTo(1);
      expect(copy.X()).toBeCloseTo(0);

      original.SetCoord(1, 0, 0);
      expect(copy.Z()).toBeCloseTo(1);
    });
  });

  describe('UTF-8 string handling (encoding dupes filtered)', () => {
    it('should create TCollection_AsciiString from a JS string without suffix', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString('hello');
      expect(str.Length()).toBe(5);
    });

    it('should round-trip a path string through TCollection_AsciiString', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString('/tmp/test.glb');
      expect(str.ToCString()).toBe('/tmp/test.glb');
    });
  });
});
