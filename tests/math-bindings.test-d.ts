import { describe, expectTypeOf, it } from 'vitest';
import {
  math_Gauss,
  math_Matrix,
  math_VectorBase_double,
  math_VectorBase_int,
  type math_Vector,
  type NCollection_Array1_double,
  type NCollection_Array1_int,
  type OpenCascadeInstance,
  type gp_XY,
  type gp_XYZ,
} from '../dist/opencascade_single';
import type { OpenCascadeInstance as OpenCascadeInstanceMulti } from '../dist/opencascade_multi';

type DoubleVector = InstanceType<typeof math_VectorBase_double>;
type IntVector = InstanceType<typeof math_VectorBase_int>;

interface DoubleVectorConstructors {
  new (other: gp_XY): DoubleVector;
  new (other: gp_XYZ): DoubleVector;
  new (other: DoubleVector): DoubleVector;
  new (lower: number, upper: number): DoubleVector;
  new (lower: number, upper: number, initialValue: number): DoubleVector;
}

interface IntVectorConstructors {
  new (other: gp_XYZ): IntVector;
  new (other: IntVector): IntVector;
  new (lower: number, upper: number): IntVector;
  new (lower: number, upper: number, initialValue: number): IntVector;
}

type RegisteredContributorKeys =
  | 'GccAna_Circ2d2TanOn'
  | 'GccAna_Circ2d2TanRad'
  | 'GccAna_Circ2d3Tan'
  | 'GccAna_Circ2dTanCen'
  | 'GccAna_Circ2dTanOnRad'
  | 'GccAna_Lin2d2Tan'
  | 'GccAna_Lin2dTanObl'
  | 'GccAna_Lin2dTanPar'
  | 'GccAna_Lin2dTanPer'
  | 'GccEnt'
  | 'Geom2dGcc_Circ2d2TanOn'
  | 'Geom2dGcc_Circ2d2TanOnGeo'
  | 'Geom2dGcc_Circ2d2TanOnIter'
  | 'Geom2dGcc_Circ2d2TanRad'
  | 'Geom2dGcc_Circ2d2TanRadGeo'
  | 'Geom2dGcc_Circ2d3Tan'
  | 'Geom2dGcc_Circ2d3TanIter'
  | 'Geom2dGcc_Circ2dTanCen'
  | 'Geom2dGcc_Circ2dTanCenGeo'
  | 'Geom2dGcc_Circ2dTanOnRad'
  | 'Geom2dGcc_Circ2dTanOnRadGeo'
  | 'Geom2dGcc_Lin2d2Tan'
  | 'Geom2dGcc_Lin2d2TanIter'
  | 'Geom2dGcc_Lin2dTanObl'
  | 'Geom2dGcc_Lin2dTanOblIter'
  | 'ProjLib'
  | 'ProjLib_Cone'
  | 'ProjLib_Cylinder'
  | 'ProjLib_Plane'
  | 'ProjLib_ProjectOnPlane'
  | 'ProjLib_ProjectOnSurface'
  | 'ProjLib_ProjectedCurve'
  | 'ProjLib_Projector'
  | 'ProjLib_Sphere'
  | 'ProjLib_Torus';

describe('math binding declarations', () => {
  it('should preserve exact vector aliases and array interoperability', () => {
    expectTypeOf<typeof math_VectorBase_double>().toMatchTypeOf<DoubleVectorConstructors>();
    expectTypeOf<typeof math_VectorBase_int>().toMatchTypeOf<IntVectorConstructors>();
    expectTypeOf<math_Vector>().toEqualTypeOf<DoubleVector>();
    expectTypeOf<DoubleVector['Array1']>().returns.toEqualTypeOf<NCollection_Array1_double>();
    expectTypeOf<IntVector['Array1']>().returns.toEqualTypeOf<NCollection_Array1_int>();
  });

  it('should preserve vector types across matrix and Gauss operations', () => {
    expectTypeOf<InstanceType<typeof math_Matrix>['Row']>().returns.toEqualTypeOf<DoubleVector>();
    expectTypeOf<InstanceType<typeof math_Matrix>['Col']>().returns.toEqualTypeOf<DoubleVector>();
    expectTypeOf<InstanceType<typeof math_Gauss>['Solve']>().parameters.toMatchTypeOf<
      [DoubleVector] | [DoubleVector, DoubleVector]
    >();
  });

  it('should expose the same retained math surface in ST and MT declarations', () => {
    type RetainedMathKeys =
      | 'math_Gauss'
      | 'math_Matrix'
      | 'math_VectorBase_double'
      | 'math_VectorBase_int';
    expectTypeOf<Pick<OpenCascadeInstance, RetainedMathKeys>>().toEqualTypeOf<
      Pick<OpenCascadeInstanceMulti, RetainedMathKeys>
    >();
    expectTypeOf<Pick<OpenCascadeInstance, RegisteredContributorKeys>>().toEqualTypeOf<
      Pick<OpenCascadeInstanceMulti, RegisteredContributorKeys>
    >();
  });
});
