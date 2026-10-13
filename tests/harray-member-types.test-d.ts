/**
 * Type-level tests for HArray/HSequence member typedef resolution.
 *
 * NCollection_HArray1<T>.Array1() returns `Array1Type` which is a member
 * typedef for NCollection_Array1<T>. After AST-based template argument
 * resolution, these should resolve to the concrete mangled type names.
 */
import { expectTypeOf, it, describe } from 'vitest';
import type {
  NCollection_HArray1_gp_Pnt2d,
  NCollection_Array1_gp_Pnt2d,
  NCollection_HArray1_gp_Pnt,
  NCollection_Array1_gp_Pnt,
} from '../dist/opencascade_single';

describe('NCollection_HArray1 member typedef resolution', () => {
  it('NCollection_HArray1_gp_Pnt2d.Array1() should return NCollection_Array1_gp_Pnt2d', () => {
    expectTypeOf<NCollection_HArray1_gp_Pnt2d['Array1']>().returns.toEqualTypeOf<NCollection_Array1_gp_Pnt2d>();
  });

  it('NCollection_HArray1_gp_Pnt2d.ChangeArray1() should return NCollection_Array1_gp_Pnt2d', () => {
    expectTypeOf<NCollection_HArray1_gp_Pnt2d['ChangeArray1']>().returns.toEqualTypeOf<NCollection_Array1_gp_Pnt2d>();
  });

  it('NCollection_HArray1_gp_Pnt.Array1() should return NCollection_Array1_gp_Pnt', () => {
    expectTypeOf<NCollection_HArray1_gp_Pnt['Array1']>().returns.toEqualTypeOf<NCollection_Array1_gp_Pnt>();
  });

  it('NCollection_HArray1_gp_Pnt.ChangeArray1() should return NCollection_Array1_gp_Pnt', () => {
    expectTypeOf<NCollection_HArray1_gp_Pnt['ChangeArray1']>().returns.toEqualTypeOf<NCollection_Array1_gp_Pnt>();
  });

  it('NCollection_HArray1_gp_Pnt2d.Array1() should not return any', () => {
    expectTypeOf<NCollection_HArray1_gp_Pnt2d['Array1']>().returns.not.toBeAny();
  });

  it('NCollection_HArray1_gp_Pnt.Array1() should not return any', () => {
    expectTypeOf<NCollection_HArray1_gp_Pnt['Array1']>().returns.not.toBeAny();
  });
});
