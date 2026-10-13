/**
 * Type-level tests for NCollection container type resolution.
 *
 * Validates that NCollection template instantiations are registered under
 * modern mangled names and resolve correctly in method signatures.
 *
 * For example, a method parameter `NCollection_Sequence<TDF_Label>&` must
 * resolve to `NCollection_Sequence_TDF_Label`, not `any` or `TDF_Label`.
 */
import { expectTypeOf, it, describe } from 'vitest';
import type {
  NCollection_Sequence_TDF_Label,
  TDF_Label,
  NCollection_BaseSequence,
  NCollection_BaseList,
  STEPCAFControl_Writer,
  XCAFDoc_ShapeTool,
  NCollection_List_BRepCheck_Status,
  NCollection_Sequence_IntTools_Range,
} from '../dist/opencascade_single';

describe('NCollection_Sequence container type resolution', () => {
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

describe('NCollection_List container type resolution', () => {
  it('NCollection_List_BRepCheck_Status should exist as a bound class', () => {
    expectTypeOf<NCollection_List_BRepCheck_Status>().toHaveProperty('delete');
    expectTypeOf<NCollection_List_BRepCheck_Status>().toHaveProperty('Size');
    expectTypeOf<NCollection_List_BRepCheck_Status>().toMatchTypeOf<NCollection_BaseList>();
  });
});

describe('Container types in method signatures', () => {
  it('STEPCAFControl_Writer.Transfer first param should not be any', () => {
    type TransferFn = STEPCAFControl_Writer['Transfer'];
    expectTypeOf<Parameters<TransferFn>[0]>().not.toBeAny();
  });

  it('XCAFDoc_ShapeTool.GetFreeShapes param should be NCollection_Sequence_TDF_Label', () => {
    type GetFreeShapes = XCAFDoc_ShapeTool['GetFreeShapes'];
    expectTypeOf<Parameters<GetFreeShapes>[0]>().toEqualTypeOf<NCollection_Sequence_TDF_Label>();
  });

  it('XCAFDoc_ShapeTool.GetShapes param should be NCollection_Sequence_TDF_Label', () => {
    type GetShapes = XCAFDoc_ShapeTool['GetShapes'];
    expectTypeOf<Parameters<GetShapes>[0]>().toEqualTypeOf<NCollection_Sequence_TDF_Label>();
  });
});
