/**
 * Smoke tests: NCollection container types under modern mangled names.
 *
 * Validates that auto-discovered NCollection containers are correctly bound
 * as classes with working methods under their modern mangled names
 * (e.g., NCollection_Sequence_TDF_Label instead of TDF_LabelSequence).
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: NCollection modern container types', () => {
  beforeAll(async () => { await initOC(); });

  describe('NCollection_Sequence_TDF_Label', () => {
    it('should construct an empty sequence with Size() === 0', () => {
      const oc = getOC();
      using seq = new oc.NCollection_Sequence_TDF_Label();
      expect(seq.Size()).toBe(0);
    });

    it('should support Append and Size', () => {
      const oc = getOC();
      using seq = new oc.NCollection_Sequence_TDF_Label();
      using label = new oc.TDF_Label();
      seq.Append(label);
      expect(seq.Size()).toBe(1);
    });
  });

  describe('NCollection_List_BRepCheck_Status', () => {
    it('should construct an empty list with Size() === 0', () => {
      const oc = getOC();
      using list = new oc.NCollection_List_BRepCheck_Status();
      expect(list.Size()).toBe(0);
    });
  });

  describe('NCollection_Sequence_IntTools_Range', () => {
    it('should construct an empty sequence with Size() === 0', () => {
      const oc = getOC();
      using seq = new oc.NCollection_Sequence_IntTools_Range();
      expect(seq.Size()).toBe(0);
    });
  });

  describe('NCollection_Array1_gp_Pnt', () => {
    it('should construct an array with correct Size', () => {
      const oc = getOC();
      using arr = new oc.NCollection_Array1_gp_Pnt(1, 3);
      expect(arr.Size()).toBe(3);
    });
  });
});
