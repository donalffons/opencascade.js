/**
 * Verifies class-scoped aliases resolve to their exported TypeScript forms.
 * `ParameterMap` resolves to its concrete `NCollection_DataMap` class, while the
 * unsupported `std::bitset<18>` backing `OperationsFlags` resolves to `any`.
 */
import { expectTypeOf, it, describe } from 'vitest';
import type {
  IGESControl_Writer,
  NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString,
  STEPCAFControl_Writer,
  XSControl_Reader,
} from '../dist/opencascade_single';

describe('Class-scoped using-alias resolution in data exchange classes', () => {
  it('IGESControl_Writer.GetShapeFixParameters() returns concrete DataMap class (R8.1 unblocked)', () => {
    expectTypeOf<IGESControl_Writer['GetShapeFixParameters']>()
      .returns.toEqualTypeOf<NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString>();
  });

  it('IGESControl_Writer.SetShapeProcessFlags() param is std::bitset<18> (no STL handler)', () => {
    expectTypeOf<Parameters<IGESControl_Writer['SetShapeProcessFlags']>[0]>().toBeAny();
  });

  it('IGESControl_Writer.GetShapeProcessFlags() returns std::bitset<18> (no STL handler)', () => {
    expectTypeOf<IGESControl_Writer['GetShapeProcessFlags']>().returns.toBeAny();
  });

  it('STEPCAFControl_Writer.GetShapeFixParameters() returns concrete DataMap class (R8.1 unblocked)', () => {
    expectTypeOf<STEPCAFControl_Writer['GetShapeFixParameters']>()
      .returns.toEqualTypeOf<NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString>();
  });

  it('XSControl_Reader.GetShapeFixParameters() returns concrete DataMap class (R8.1 unblocked)', () => {
    expectTypeOf<XSControl_Reader['GetShapeFixParameters']>()
      .returns.toEqualTypeOf<NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString>();
  });
});
