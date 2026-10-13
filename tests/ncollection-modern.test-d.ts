/**
 * Type-level tests for modern NCollection mangled names.
 *
 * After auto-discovery, NCollection template instantiations are registered
 * under modern mangled names (e.g., NCollection_Sequence_TDF_Label) instead
 * of deprecated OCCT typedef names (e.g., TDF_LabelSequence).
 *
 * These tests assert that the modern names exist in the generated .d.ts
 * and have the expected methods.
 */
import { expectTypeOf, it, describe } from 'vitest';
import type {
  NCollection_Sequence_TDF_Label,
  NCollection_List_BRepCheck_Status,
  NCollection_Sequence_IntTools_Range,
  NCollection_Array1_gp_Pnt,
  NCollection_BaseSequence,
  NCollection_BaseList,
  TDF_Label,
  STEPCAFControl_Writer,
  XCAFDoc_ShapeTool,
} from '../dist/opencascade_single';

describe('Modern NCollection_Sequence mangled names', () => {
  it('NCollection_Sequence_TDF_Label should exist as a bound class', () => {
    expectTypeOf<NCollection_Sequence_TDF_Label>().toHaveProperty('delete');
    expectTypeOf<NCollection_Sequence_TDF_Label>().toHaveProperty('Size');
    expectTypeOf<NCollection_Sequence_TDF_Label>().toHaveProperty('Value');
    expectTypeOf<NCollection_Sequence_TDF_Label>().toHaveProperty('Append');
  });

  it('NCollection_Sequence_TDF_Label should extend NCollection_BaseSequence', () => {
    expectTypeOf<NCollection_Sequence_TDF_Label>().toMatchTypeOf<NCollection_BaseSequence>();
  });

  it('NCollection_Sequence_TDF_Label should be distinct from TDF_Label', () => {
    expectTypeOf<NCollection_Sequence_TDF_Label>().not.toMatchTypeOf<TDF_Label>();
  });

  it('NCollection_Sequence_IntTools_Range should exist as a bound class', () => {
    expectTypeOf<NCollection_Sequence_IntTools_Range>().toHaveProperty('delete');
    expectTypeOf<NCollection_Sequence_IntTools_Range>().toHaveProperty('Size');
    expectTypeOf<NCollection_Sequence_IntTools_Range>().toMatchTypeOf<NCollection_BaseSequence>();
  });
});

describe('Modern NCollection_List mangled names', () => {
  it('NCollection_List_BRepCheck_Status should exist as a bound class', () => {
    expectTypeOf<NCollection_List_BRepCheck_Status>().toHaveProperty('delete');
    expectTypeOf<NCollection_List_BRepCheck_Status>().toHaveProperty('Size');
    expectTypeOf<NCollection_List_BRepCheck_Status>().toMatchTypeOf<NCollection_BaseList>();
  });
});

describe('Modern NCollection_Array1 mangled names', () => {
  it('NCollection_Array1_gp_Pnt should exist as a bound class', () => {
    expectTypeOf<NCollection_Array1_gp_Pnt>().toHaveProperty('delete');
    expectTypeOf<NCollection_Array1_gp_Pnt>().toHaveProperty('Value');
    expectTypeOf<NCollection_Array1_gp_Pnt>().toHaveProperty('SetValue');
    expectTypeOf<NCollection_Array1_gp_Pnt>().toHaveProperty('Size');
  });
});

describe('Modern NCollection names in method signatures', () => {
  it('STEPCAFControl_Writer.Transfer should accept NCollection_Sequence_TDF_Label-compatible param', () => {
    type TransferFn = STEPCAFControl_Writer['Transfer'];
    expectTypeOf<Parameters<TransferFn>[0]>().not.toBeAny();
  });

  it('XCAFDoc_ShapeTool.GetFreeShapes param should not be any', () => {
    type GetFreeShapes = XCAFDoc_ShapeTool['GetFreeShapes'];
    expectTypeOf<Parameters<GetFreeShapes>[0]>().not.toBeAny();
  });

  it('XCAFDoc_ShapeTool.GetShapes param should not be any', () => {
    type GetShapes = XCAFDoc_ShapeTool['GetShapes'];
    expectTypeOf<Parameters<GetShapes>[0]>().not.toBeAny();
  });
});
