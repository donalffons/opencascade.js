/**
 * Verifies explicit `null` raises the structured strict-null binding error for scalar,
 * value-class, C-string, and multi-overload trailing defaults.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

const RULE_5_NULL_ERROR_FRAGMENT = /null is not a valid value/;

describe.skipIf(!wasmExists)('Smoke: rule-5 strict-null rejection across val-default rows', () => {
  beforeAll(async () => { await initOC(); });

  describe('Row 1 — single overload trailing scalar default', () => {
    it('BRepMesh_IncrementalMesh(shape, 0.1, null, undefined, undefined) throws rule-5 BindingError', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
      using shape = box.Shape();
      // @ts-expect-error - null is not a valid Standard_Boolean for isRelative (rule-5 strict null)
      expect(() => new oc.BRepMesh_IncrementalMesh(shape, 0.1, null, undefined, undefined)).toThrow(
        RULE_5_NULL_ERROR_FRAGMENT,
      );
    });
  });

  describe('Row 2 — single overload trailing value-class default', () => {
    it('BRepAlgoAPI_Fuse.Build(null) throws rule-5 BindingError', () => {
      const oc = getOC();
      using box1 = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using box2 = new oc.BRepPrimAPI_MakeBox(5, 5, 5);
      using a = box1.Shape();
      using b = box2.Shape();
      using fuse = new oc.BRepAlgoAPI_Fuse(a, b);
      // @ts-expect-error - null is not a valid Message_ProgressRange (rule-5 strict null)
      expect(() => fuse.Build.call(fuse, null)).toThrow(RULE_5_NULL_ERROR_FRAGMENT);
    });
  });

  describe('Row 24 — multi-scalar trailing default stack (policy-flag triple)', () => {
    it('BRepMesh_IncrementalMesh trailing (isRel, angDef, parallel) all-null throws rule-5 BindingError', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
      using shape = box.Shape();
      // @ts-expect-error - null is not a valid value for the trailing scalar slots (rule-5 strict null)
      expect(() => new oc.BRepMesh_IncrementalMesh(shape, 0.1, null, null, null)).toThrow(
        RULE_5_NULL_ERROR_FRAGMENT,
      );
    });
  });

  describe('Row 33 — cstring-wrapper trailing default', () => {
    it('IFSelect_Act.SetGroup("grp", null) throws rule-5 BindingError', () => {
      const oc = getOC();
      // @ts-expect-error - null is not a valid Standard_CString for the file param (rule-5 strict null)
      expect(() => oc.IFSelect_Act.SetGroup('tau-rule5-row33', null)).toThrow(RULE_5_NULL_ERROR_FRAGMENT);
    });
  });

  describe('Row 34 — multi-overload trailing default', () => {
    it('BRepOffsetAPI_MakeFilling.Add(edge, GeomAbs_C0, null) throws rule-5 BindingError', () => {
      const oc = getOC();
      using p1 = new oc.gp_Pnt(0, 0, 0);
      using p2 = new oc.gp_Pnt(10, 0, 0);
      using em = new oc.BRepBuilderAPI_MakeEdge(p1, p2);
      using edge = em.Edge();
      using filling = new oc.BRepOffsetAPI_MakeFilling();
      // @ts-expect-error - null is not a valid Standard_Boolean for IsBound (rule-5 strict null)
      expect(() => filling.Add(edge, oc.GeomAbs_Shape.GeomAbs_C0, null)).toThrow(
        RULE_5_NULL_ERROR_FRAGMENT,
      );
    });
  });

  describe('Row 36 — defaulted trailing param `= T{}` (mechanism shared with row 1/24)', () => {
    it('representative case: BRepMesh_IncrementalMesh angDef null throws rule-5 BindingError', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(6, 6, 6);
      using shape = box.Shape();
      // @ts-expect-error - null is not a valid Standard_Real for theAngDeflection (rule-5 strict null)
      expect(() => new oc.BRepMesh_IncrementalMesh(shape, 0.1, undefined, null)).toThrow(
        RULE_5_NULL_ERROR_FRAGMENT,
      );
    });
  });
});
