/** Type-level regression checks for NCollection member-typedef resolution. */
import { describe, expectTypeOf, it } from 'vitest';
import type {
  BOPDS_Curve,
  BRepGraph_OccurrenceRefId,
  BRepGraph_SolidRefId,
  BRepGraph_WireRefId,
  NCollection_Array1_BRepGraph_OccurrenceRefId,
  NCollection_Array1_BRepGraph_SolidRefId,
  NCollection_Array1_BRepGraph_WireRefId,
  NCollection_DynamicArray_BOPDS_Curve,
} from '../dist/opencascade_single';

describe('R8 — BRepGraph Array1 accessors return their concrete element type', () => {
  it('resolves OccurrenceRefId accessors', () => {
    expectTypeOf<NCollection_Array1_BRepGraph_OccurrenceRefId['Value']>().returns.toEqualTypeOf<BRepGraph_OccurrenceRefId>();
    expectTypeOf<NCollection_Array1_BRepGraph_OccurrenceRefId['First']>().returns.toEqualTypeOf<BRepGraph_OccurrenceRefId>();
    expectTypeOf<NCollection_Array1_BRepGraph_OccurrenceRefId['ChangeValue']>().returns.toEqualTypeOf<BRepGraph_OccurrenceRefId>();
  });

  it('resolves SolidRefId accessors', () => {
    expectTypeOf<NCollection_Array1_BRepGraph_SolidRefId['Value']>().returns.toEqualTypeOf<BRepGraph_SolidRefId>();
    expectTypeOf<NCollection_Array1_BRepGraph_SolidRefId['ChangeFirst']>().returns.toEqualTypeOf<BRepGraph_SolidRefId>();
  });

  it('resolves WireRefId accessors', () => {
    expectTypeOf<NCollection_Array1_BRepGraph_WireRefId['Value']>().returns.toEqualTypeOf<BRepGraph_WireRefId>();
    expectTypeOf<NCollection_Array1_BRepGraph_WireRefId['Last']>().returns.toEqualTypeOf<BRepGraph_WireRefId>();
  });
});

describe('R8 — pre-existing DynamicArray resolution remains concrete', () => {
  it('keeps BOPDS_Curve accessors typed', () => {
    expectTypeOf<NCollection_DynamicArray_BOPDS_Curve['Value']>().returns.toEqualTypeOf<BOPDS_Curve>();
    expectTypeOf<NCollection_DynamicArray_BOPDS_Curve['Append']>().returns.toEqualTypeOf<BOPDS_Curve>();
  });
});
