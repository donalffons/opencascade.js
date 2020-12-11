declare const libName = "./modules/TKFillet.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Blend_Point {
  SetValue_1(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Tg1: gp_Vec, Tg2: gp_Vec, Tg12d: gp_Vec2d, Tg22d: gp_Vec2d): void;
  SetValue_2(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  SetValue_3(Pts: gp_Pnt, Ptc: gp_Pnt, Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, Tgs: gp_Vec, Tgc: gp_Vec, Tg2d: gp_Vec2d): void;
  SetValue_4(Pts: gp_Pnt, Ptc: gp_Pnt, Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real): void;
  SetValue_5(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC: Standard_Real, Tg1: gp_Vec, Tg2: gp_Vec, Tg12d: gp_Vec2d, Tg22d: gp_Vec2d): void;
  SetValue_6(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC: Standard_Real): void;
  SetValue_7(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC1: Standard_Real, PC2: Standard_Real, Tg1: gp_Vec, Tg2: gp_Vec, Tg12d: gp_Vec2d, Tg22d: gp_Vec2d): void;
  SetValue_8(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC1: Standard_Real, PC2: Standard_Real): void;
  SetValue_9(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, PC1: Standard_Real, PC2: Standard_Real): void;
  SetParameter(Param: Standard_Real): void;
  Parameter(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  ParametersOnS1(U: Standard_Real, V: Standard_Real): void;
  ParametersOnS2(U: Standard_Real, V: Standard_Real): void;
  TangentOnS1(): gp_Vec;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  Tangent2dOnS2(): gp_Vec2d;
  PointOnS(): gp_Pnt;
  PointOnC(): gp_Pnt;
  ParametersOnS(U: Standard_Real, V: Standard_Real): void;
  ParameterOnC(): Standard_Real;
  TangentOnS(): gp_Vec;
  TangentOnC(): gp_Vec;
  Tangent2d(): gp_Vec2d;
  PointOnC1(): gp_Pnt;
  PointOnC2(): gp_Pnt;
  ParameterOnC1(): Standard_Real;
  ParameterOnC2(): Standard_Real;
  TangentOnC1(): gp_Vec;
  TangentOnC2(): gp_Vec;
}

  export declare class Blend_Point_1 extends Blend_Point {
    constructor();
  }

  export declare class Blend_Point_2 extends Blend_Point {
    constructor(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Tg1: gp_Vec, Tg2: gp_Vec, Tg12d: gp_Vec2d, Tg22d: gp_Vec2d);
  }

  export declare class Blend_Point_3 extends Blend_Point {
    constructor(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real);
  }

  export declare class Blend_Point_4 extends Blend_Point {
    constructor(Pts: gp_Pnt, Ptc: gp_Pnt, Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, Tgs: gp_Vec, Tgc: gp_Vec, Tg2d: gp_Vec2d);
  }

  export declare class Blend_Point_5 extends Blend_Point {
    constructor(Pts: gp_Pnt, Ptc: gp_Pnt, Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real);
  }

  export declare class Blend_Point_6 extends Blend_Point {
    constructor(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC: Standard_Real, Tg1: gp_Vec, Tg2: gp_Vec, Tg12d: gp_Vec2d, Tg22d: gp_Vec2d);
  }

  export declare class Blend_Point_7 extends Blend_Point {
    constructor(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC: Standard_Real);
  }

  export declare class Blend_Point_8 extends Blend_Point {
    constructor(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC1: Standard_Real, PC2: Standard_Real, Tg1: gp_Vec, Tg2: gp_Vec, Tg12d: gp_Vec2d, Tg22d: gp_Vec2d);
  }

  export declare class Blend_Point_9 extends Blend_Point {
    constructor(Pt1: gp_Pnt, Pt2: gp_Pnt, Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, PC1: Standard_Real, PC2: Standard_Real);
  }

export declare class BRepBlend_AppFuncRoot extends Approx_SweepFunction {
  D0(Param: Standard_Real, First: Standard_Real, Last: Standard_Real, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): Standard_Boolean;
  D1(Param: Standard_Real, First: Standard_Real, Last: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  D2(Param: Standard_Real, First: Standard_Real, Last: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Nb2dCurves(): Standard_Integer;
  SectionShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  IsRational(): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  Resolution(Index: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  GetTolerance(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: TColStd_Array1OfReal): void;
  SetTolerance(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  BarycentreOfSurf(): gp_Pnt;
  MaximalSection(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  Point(Func: Blend_AppFunction, Param: Standard_Real, Sol: math_Vector, Pnt: Blend_Point): void;
  Vec(Sol: math_Vector, Pnt: Blend_Point): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepBlend_AppFunc extends BRepBlend_AppFuncRoot {
  constructor(Line: any, Func: Blend_Function, Tol3d: Standard_Real, Tol2d: Standard_Real)
  Point(Func: Blend_AppFunction, Param: Standard_Real, Sol: math_Vector, Pnt: Blend_Point): void;
  Vec(Sol: math_Vector, Pnt: Blend_Point): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepBlend_AppFuncRst extends BRepBlend_AppFuncRoot {
  constructor(Line: any, Func: Blend_SurfRstFunction, Tol3d: Standard_Real, Tol2d: Standard_Real)
  Point(Func: Blend_AppFunction, Param: Standard_Real, Sol: math_Vector, Pnt: Blend_Point): void;
  Vec(Sol: math_Vector, Pnt: Blend_Point): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepBlend_AppFuncRstRst extends BRepBlend_AppFuncRoot {
  constructor(Line: any, Func: Blend_RstRstFunction, Tol3d: Standard_Real, Tol2d: Standard_Real)
  Point(Func: Blend_AppFunction, Param: Standard_Real, Sol: math_Vector, Pnt: Blend_Point): void;
  Vec(Sol: math_Vector, Pnt: Blend_Point): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepBlend_AppSurf extends AppBlend_Approx {
  Init(Degmin: Standard_Integer, Degmax: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIt: Standard_Integer, KnownParameters: Standard_Boolean): void;
  SetParType(ParType: Approx_ParametrizationType): void;
  SetContinuity(C: GeomAbs_Shape): void;
  SetCriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  ParType(): Approx_ParametrizationType;
  Continuity(): GeomAbs_Shape;
  CriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  Perform_1(Lin: any, SecGen: Blend_AppFunction, SpApprox: Standard_Boolean): void;
  PerformSmoothing(Lin: any, SecGen: Blend_AppFunction): void;
  Perform_2(Lin: any, SecGen: Blend_AppFunction, NbMaxP: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  SurfShape(UDegree: Standard_Integer, VDegree: Standard_Integer, NbUPoles: Standard_Integer, NbVPoles: Standard_Integer, NbUKnots: Standard_Integer, NbVKnots: Standard_Integer): void;
  Surface(TPoles: TColgp_Array2OfPnt, TWeights: TColStd_Array2OfReal, TUKnots: TColStd_Array1OfReal, TVKnots: TColStd_Array1OfReal, TUMults: TColStd_Array1OfInteger, TVMults: TColStd_Array1OfInteger): void;
  UDegree(): Standard_Integer;
  VDegree(): Standard_Integer;
  SurfPoles(): TColgp_Array2OfPnt;
  SurfWeights(): TColStd_Array2OfReal;
  SurfUKnots(): TColStd_Array1OfReal;
  SurfVKnots(): TColStd_Array1OfReal;
  SurfUMults(): TColStd_Array1OfInteger;
  SurfVMults(): TColStd_Array1OfInteger;
  NbCurves2d(): Standard_Integer;
  Curves2dShape(Degree: Standard_Integer, NbPoles: Standard_Integer, NbKnots: Standard_Integer): void;
  Curve2d(Index: Standard_Integer, TPoles: TColgp_Array1OfPnt2d, TKnots: TColStd_Array1OfReal, TMults: TColStd_Array1OfInteger): void;
  Curves2dDegree(): Standard_Integer;
  Curve2dPoles(Index: Standard_Integer): TColgp_Array1OfPnt2d;
  Curves2dKnots(): TColStd_Array1OfReal;
  Curves2dMults(): TColStd_Array1OfInteger;
  TolReached(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  TolCurveOnSurf(Index: Standard_Integer): Standard_Real;
}

  export declare class BRepBlend_AppSurf_1 extends BRepBlend_AppSurf {
    constructor();
  }

  export declare class BRepBlend_AppSurf_2 extends BRepBlend_AppSurf {
    constructor(Degmin: Standard_Integer, Degmax: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIt: Standard_Integer, KnownParameters: Standard_Boolean);
  }

export declare class BRepBlend_AppSurface extends AppBlend_Approx {
  constructor(Funct: any, First: Standard_Real, Last: Standard_Real, Tol3d: Standard_Real, Tol2d: Standard_Real, TolAngular: Standard_Real, Continuity: GeomAbs_Shape, Degmax: Standard_Integer, Segmax: Standard_Integer)
  IsDone(): Standard_Boolean;
  SurfShape(UDegree: Standard_Integer, VDegree: Standard_Integer, NbUPoles: Standard_Integer, NbVPoles: Standard_Integer, NbUKnots: Standard_Integer, NbVKnots: Standard_Integer): void;
  Surface(TPoles: TColgp_Array2OfPnt, TWeights: TColStd_Array2OfReal, TUKnots: TColStd_Array1OfReal, TVKnots: TColStd_Array1OfReal, TUMults: TColStd_Array1OfInteger, TVMults: TColStd_Array1OfInteger): void;
  UDegree(): Standard_Integer;
  VDegree(): Standard_Integer;
  SurfPoles(): TColgp_Array2OfPnt;
  SurfWeights(): TColStd_Array2OfReal;
  SurfUKnots(): TColStd_Array1OfReal;
  SurfVKnots(): TColStd_Array1OfReal;
  SurfUMults(): TColStd_Array1OfInteger;
  SurfVMults(): TColStd_Array1OfInteger;
  MaxErrorOnSurf(): Standard_Real;
  NbCurves2d(): Standard_Integer;
  Curves2dShape(Degree: Standard_Integer, NbPoles: Standard_Integer, NbKnots: Standard_Integer): void;
  Curve2d(Index: Standard_Integer, TPoles: TColgp_Array1OfPnt2d, TKnots: TColStd_Array1OfReal, TMults: TColStd_Array1OfInteger): void;
  Curves2dDegree(): Standard_Integer;
  Curve2dPoles(Index: Standard_Integer): TColgp_Array1OfPnt2d;
  Curves2dKnots(): TColStd_Array1OfReal;
  Curves2dMults(): TColStd_Array1OfInteger;
  TolReached(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  Max2dError(Index: Standard_Integer): Standard_Real;
  TolCurveOnSurf(Index: Standard_Integer): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class BRepBlend_BlendTool {
  constructor();
  Project(P: gp_Pnt2d, S: any, C: any, Paramproj: Standard_Real, Dist: Standard_Real): Standard_Boolean;
  Inters(P1: gp_Pnt2d, P2: gp_Pnt2d, S: any, C: any, Param: Standard_Real, Dist: Standard_Real): Standard_Boolean;
  Parameter(V: any, A: any): Standard_Real;
  Tolerance(V: any, A: any): Standard_Real;
  SingularOnUMin(S: any): Standard_Boolean;
  SingularOnUMax(S: any): Standard_Boolean;
  SingularOnVMin(S: any): Standard_Boolean;
  SingularOnVMax(S: any): Standard_Boolean;
  NbSamplesU(S: any, u1: Standard_Real, u2: Standard_Real): Standard_Integer;
  NbSamplesV(S: any, v1: Standard_Real, v2: Standard_Real): Standard_Integer;
  Bounds(C: any, Ufirst: Standard_Real, Ulast: Standard_Real): void;
  CurveOnSurf(C: any, S: any): any;
}

export declare class Blend_AppFunction extends math_FunctionSetWithDerivatives {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  Pnt1(): gp_Pnt;
  Pnt2(): gp_Pnt;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_1(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  Parameter(P: Blend_Point): Standard_Real;
}

export declare class Blend_CSFunction extends Blend_AppFunction {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  Pnt1(): gp_Pnt;
  Pnt2(): gp_Pnt;
  PointOnS(): gp_Pnt;
  PointOnC(): gp_Pnt;
  Pnt2d(): gp_Pnt2d;
  ParameterOnC(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS(): gp_Vec;
  Tangent2d(): gp_Vec2d;
  TangentOnC(): gp_Vec;
  Tangent(U: Standard_Real, V: Standard_Real, TgS: gp_Vec, NormS: gp_Vec): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_1(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
}

export declare class BlendFunc_CSCircular extends Blend_CSFunction {
  constructor(S: any, C: any, CGuide: any, L: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  PointOnS(): gp_Pnt;
  PointOnC(): gp_Pnt;
  Pnt2d(): gp_Pnt2d;
  ParameterOnC(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS(): gp_Vec;
  Tangent2d(): gp_Vec2d;
  TangentOnC(): gp_Vec;
  Tangent(U: Standard_Real, V: Standard_Real, TgS: gp_Vec, NormS: gp_Vec): void;
  Set_3(Radius: Standard_Real, Choix: Standard_Integer): void;
  Set_4(TypeSection: BlendFunc_SectionShape): void;
  Section_1(Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  GetSection(Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, tabP: TColgp_Array1OfPnt, tabV: TColgp_Array1OfVec): Standard_Boolean;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BlendFunc_CSConstRad extends Blend_CSFunction {
  constructor(S: any, C: any, CGuide: any)
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  PointOnS(): gp_Pnt;
  PointOnC(): gp_Pnt;
  Pnt2d(): gp_Pnt2d;
  ParameterOnC(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS(): gp_Vec;
  Tangent2d(): gp_Vec2d;
  TangentOnC(): gp_Vec;
  Tangent(U: Standard_Real, V: Standard_Real, TgS: gp_Vec, NormS: gp_Vec): void;
  Set_3(Radius: Standard_Real, Choix: Standard_Integer): void;
  Set_4(TypeSection: BlendFunc_SectionShape): void;
  Section_1(Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  GetSection(Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, tabP: TColgp_Array1OfPnt, tabV: TColgp_Array1OfVec): Standard_Boolean;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BRepBlend_PointOnRst {
  SetArc(A: any, Param: Standard_Real, TLine: IntSurf_Transition, TArc: IntSurf_Transition): void;
  Arc(): any;
  TransitionOnLine(): IntSurf_Transition;
  TransitionOnArc(): IntSurf_Transition;
  ParameterOnArc(): Standard_Real;
}

  export declare class BRepBlend_PointOnRst_1 extends BRepBlend_PointOnRst {
    constructor();
  }

  export declare class BRepBlend_PointOnRst_2 extends BRepBlend_PointOnRst {
    constructor(A: any, Param: Standard_Real, TLine: IntSurf_Transition, TArc: IntSurf_Transition);
  }

export declare class BRepBlend_CSWalking {
  constructor(Curv: any, Surf: any, Domain: any)
  Perform(F: Blend_CSFunction, Pdep: Standard_Real, Pmax: Standard_Real, MaxStep: Standard_Real, TolGuide: Standard_Real, Soldep: math_Vector, Tolesp: Standard_Real, Fleche: Standard_Real, Appro: Standard_Boolean): void;
  Complete(F: Blend_CSFunction, Pmin: Standard_Real): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Line(): any;
}

export declare class Blend_Function extends Blend_AppFunction {
  NbVariables(): Standard_Integer;
  Pnt1(): gp_Pnt;
  Pnt2(): gp_Pnt;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  Tangent(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TgFirst: gp_Vec, TgLast: gp_Vec, NormFirst: gp_Vec, NormLast: gp_Vec): void;
  TwistOnS1(): Standard_Boolean;
  TwistOnS2(): Standard_Boolean;
  Section_1(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
}

export declare class BlendFunc_ChAsym extends Blend_Function {
  constructor(S1: any, S2: any, C: any)
  NbEquations(): Standard_Integer;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  ComputeValues(X: math_Vector, DegF: Standard_Integer, DegL: Standard_Integer): Standard_Boolean;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  TwistOnS1(): Standard_Boolean;
  TwistOnS2(): Standard_Boolean;
  Tangent(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TgFirst: gp_Vec, TgLast: gp_Vec, NormFirst: gp_Vec, NormLast: gp_Vec): void;
  Section_1(Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Lin): void;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  Set_3(Dist1: Standard_Real, Angle: Standard_Real, Choix: Standard_Integer): void;
}

export declare class Blend_FuncInv extends math_FunctionSetWithDerivatives {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set(OnFirst: Standard_Boolean, COnSurf: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BlendFunc_ChAsymInv extends Blend_FuncInv {
  constructor(S1: any, S2: any, C: any)
  Set_1(OnFirst: Standard_Boolean, COnSurf: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  NbEquations(): Standard_Integer;
  ComputeValues(X: math_Vector, DegF: Standard_Integer, DegL: Standard_Integer): Standard_Boolean;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(Dist1: Standard_Real, Angle: Standard_Real, Choix: Standard_Integer): void;
}

export declare class BlendFunc_Corde {
  constructor(S: any, CGuide: any)
  SetParam(Param: Standard_Real): void;
  SetDist(Dist: Standard_Real): void;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  PointOnS(): gp_Pnt;
  PointOnGuide(): gp_Pnt;
  NPlan(): gp_Vec;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS(): gp_Vec;
  Tangent2dOnS(): gp_Vec2d;
  DerFguide(Sol: math_Vector, DerF: gp_Vec2d): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BlendFunc_GenChamfInv extends Blend_FuncInv {
  Set_1(OnFirst: Standard_Boolean, COnSurf: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  NbEquations(): Standard_Integer;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(Dist1: Standard_Real, Dist2: Standard_Real, Choix: Standard_Integer): void;
}

export declare class BlendFunc_ChamfInv extends BlendFunc_GenChamfInv {
  constructor(S1: any, S2: any, C: any)
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(Dist1: Standard_Real, Dist2: Standard_Real, Choix: Standard_Integer): void;
}

export declare class BlendFunc_GenChamfer extends Blend_Function {
  NbEquations(): Standard_Integer;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  GetMinimalDistance(): Standard_Real;
  Set_3(Dist1: Standard_Real, Dist2: Standard_Real, Choix: Standard_Integer): void;
  IsRational(): Standard_Boolean;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_1(Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Lin): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BlendFunc_Chamfer extends BlendFunc_GenChamfer {
  constructor(S1: any, S2: any, CG: any)
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  Tangent(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TgFirst: gp_Vec, TgLast: gp_Vec, NormFirst: gp_Vec, NormLast: gp_Vec): void;
  Set_2(Dist1: Standard_Real, Dist2: Standard_Real, Choix: Standard_Integer): void;
  GetSectionSize(): Standard_Real;
}

export declare class BlendFunc_Tensor {
  constructor(NbRow: Standard_Integer, NbCol: Standard_Integer, NbMat: Standard_Integer)
  Init(InitialValue: Standard_Real): void;
  Value(Row: Standard_Integer, Col: Standard_Integer, Mat: Standard_Integer): Standard_Real;
  ChangeValue(Row: Standard_Integer, Col: Standard_Integer, Mat: Standard_Integer): Standard_Real;
  Multiply(Right: math_Vector, Product: math_Matrix): void;
}

export declare class BlendFunc_ConstRad extends Blend_Function {
  constructor(S1: any, S2: any, C: any)
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  Tangent(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TgFirst: gp_Vec, TgLast: gp_Vec, NormFirst: gp_Vec, NormLast: gp_Vec): void;
  TwistOnS1(): Standard_Boolean;
  TwistOnS2(): Standard_Boolean;
  Set_3(Radius: Standard_Real, Choix: Standard_Integer): void;
  Set_4(TypeSection: BlendFunc_SectionShape): void;
  Section_1(Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  AxeRot(Prm: Standard_Real): gp_Ax1;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BlendFunc_ConstRadInv extends Blend_FuncInv {
  constructor(S1: any, S2: any, C: any)
  Set_1(OnFirst: Standard_Boolean, COnSurf: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(R: Standard_Real, Choix: Standard_Integer): void;
}

export declare class BlendFunc_ConstThroat extends BlendFunc_GenChamfer {
  constructor(S1: any, S2: any, C: any)
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  Tangent(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TgFirst: gp_Vec, TgLast: gp_Vec, NormFirst: gp_Vec, NormLast: gp_Vec): void;
  Set_2(aThroat: Standard_Real, a1: Standard_Real, Choix: Standard_Integer): void;
  GetSectionSize(): Standard_Real;
}

export declare class BlendFunc_ConstThroatInv extends BlendFunc_GenChamfInv {
  constructor(S1: any, S2: any, C: any)
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(theThroat: Standard_Real, a1: Standard_Real, Choix: Standard_Integer): void;
}

export declare class BlendFunc_ConstThroatWithPenetration extends BlendFunc_ConstThroat {
  constructor(S1: any, S2: any, C: any)
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  GetSectionSize(): Standard_Real;
}

export declare class BlendFunc_ConstThroatWithPenetrationInv extends BlendFunc_ConstThroatInv {
  constructor(S1: any, S2: any, C: any)
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
}

export declare class Blend_CurvPointFuncInv extends math_FunctionSetWithDerivatives {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set(P: gp_Pnt): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BRepBlend_CurvPointRadInv extends Blend_CurvPointFuncInv {
  constructor(C1: any, C2: any)
  Set_1(Choix: Standard_Integer): void;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(P: gp_Pnt): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BlendFunc_EvolRad extends Blend_Function {
  constructor(S1: any, S2: any, C: any, Law: any)
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  Tangent(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TgFirst: gp_Vec, TgLast: gp_Vec, NormFirst: gp_Vec, NormLast: gp_Vec): void;
  TwistOnS1(): Standard_Boolean;
  TwistOnS2(): Standard_Boolean;
  Set_3(Choix: Standard_Integer): void;
  Set_4(TypeSection: BlendFunc_SectionShape): void;
  Section_1(Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BlendFunc_EvolRadInv extends Blend_FuncInv {
  constructor(S1: any, S2: any, C: any, Law: any)
  Set_1(OnFirst: Standard_Boolean, COnSurf: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(Choix: Standard_Integer): void;
}

export declare class BRepBlend_Extremity {
  SetValue_1(P: gp_Pnt, U: Standard_Real, V: Standard_Real, Param: Standard_Real, Tol: Standard_Real): void;
  SetValue_2(P: gp_Pnt, U: Standard_Real, V: Standard_Real, Param: Standard_Real, Tol: Standard_Real, Vtx: any): void;
  SetValue_3(P: gp_Pnt, W: Standard_Real, Param: Standard_Real, Tol: Standard_Real): void;
  Value(): gp_Pnt;
  SetTangent(Tangent: gp_Vec): void;
  HasTangent(): Standard_Boolean;
  Tangent(): gp_Vec;
  Tolerance(): Standard_Real;
  SetVertex(V: any): void;
  AddArc(A: any, Param: Standard_Real, TLine: IntSurf_Transition, TArc: IntSurf_Transition): void;
  Parameters(U: Standard_Real, V: Standard_Real): void;
  IsVertex(): Standard_Boolean;
  Vertex(): any;
  NbPointOnRst(): Standard_Integer;
  PointOnRst(Index: Standard_Integer): BRepBlend_PointOnRst;
  Parameter(): Standard_Real;
  ParameterOnGuide(): Standard_Real;
}

  export declare class BRepBlend_Extremity_1 extends BRepBlend_Extremity {
    constructor();
  }

  export declare class BRepBlend_Extremity_2 extends BRepBlend_Extremity {
    constructor(P: gp_Pnt, U: Standard_Real, V: Standard_Real, Param: Standard_Real, Tol: Standard_Real);
  }

  export declare class BRepBlend_Extremity_3 extends BRepBlend_Extremity {
    constructor(P: gp_Pnt, U: Standard_Real, V: Standard_Real, Param: Standard_Real, Tol: Standard_Real, Vtx: any);
  }

  export declare class BRepBlend_Extremity_4 extends BRepBlend_Extremity {
    constructor(P: gp_Pnt, W: Standard_Real, Param: Standard_Real, Tol: Standard_Real);
  }

export declare class BRepBlend_HCurve2dTool {
  constructor();
  FirstParameter(C: any): Standard_Real;
  LastParameter(C: any): Standard_Real;
  Continuity(C: any): GeomAbs_Shape;
  NbIntervals(C: any, S: GeomAbs_Shape): Standard_Integer;
  Intervals(C: any, T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  IsClosed(C: any): Standard_Boolean;
  IsPeriodic(C: any): Standard_Boolean;
  Period(C: any): Standard_Real;
  Value(C: any, U: Standard_Real): gp_Pnt2d;
  D0(C: any, U: Standard_Real, P: gp_Pnt2d): void;
  D1(C: any, U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(C: any, U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(C: any, U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(C: any, U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(C: any, R3d: Standard_Real): Standard_Real;
  GetType(C: any): GeomAbs_CurveType;
  Line(C: any): gp_Lin2d;
  Circle(C: any): gp_Circ2d;
  Ellipse(C: any): gp_Elips2d;
  Hyperbola(C: any): gp_Hypr2d;
  Parabola(C: any): gp_Parab2d;
  Bezier(C: any): any;
  BSpline(C: any): any;
  NbSamples(C: any, U0: Standard_Real, U1: Standard_Real): Standard_Integer;
}

export declare class BRepBlend_HCurveTool {
  constructor();
  FirstParameter(C: any): Standard_Real;
  LastParameter(C: any): Standard_Real;
  Continuity(C: any): GeomAbs_Shape;
  NbIntervals(C: any, S: GeomAbs_Shape): Standard_Integer;
  Intervals(C: any, T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  IsClosed(C: any): Standard_Boolean;
  IsPeriodic(C: any): Standard_Boolean;
  Period(C: any): Standard_Real;
  Value(C: any, U: Standard_Real): gp_Pnt;
  D0(C: any, U: Standard_Real, P: gp_Pnt): void;
  D1(C: any, U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(C: any, U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(C: any, R3d: Standard_Real): Standard_Real;
  GetType(C: any): GeomAbs_CurveType;
  Line(C: any): gp_Lin;
  Circle(C: any): gp_Circ;
  Ellipse(C: any): gp_Elips;
  Hyperbola(C: any): gp_Hypr;
  Parabola(C: any): gp_Parab;
  Bezier(C: any): any;
  BSpline(C: any): any;
  NbSamples(C: any, U0: Standard_Real, U1: Standard_Real): Standard_Integer;
}

export declare class BRepBlend_Line extends Standard_Transient {
  constructor()
  Clear(): void;
  Append(P: Blend_Point): void;
  Prepend(P: Blend_Point): void;
  InsertBefore(Index: Standard_Integer, P: Blend_Point): void;
  Remove(FromIndex: Standard_Integer, ToIndex: Standard_Integer): void;
  Set_1(TranS1: IntSurf_TypeTrans, TranS2: IntSurf_TypeTrans): void;
  Set_2(Trans: IntSurf_TypeTrans): void;
  SetStartPoints(StartPt1: BRepBlend_Extremity, StartPt2: BRepBlend_Extremity): void;
  SetEndPoints(EndPt1: BRepBlend_Extremity, EndPt2: BRepBlend_Extremity): void;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): Blend_Point;
  TransitionOnS1(): IntSurf_TypeTrans;
  TransitionOnS2(): IntSurf_TypeTrans;
  StartPointOnFirst(): BRepBlend_Extremity;
  StartPointOnSecond(): BRepBlend_Extremity;
  EndPointOnFirst(): BRepBlend_Extremity;
  EndPointOnSecond(): BRepBlend_Extremity;
  TransitionOnS(): IntSurf_TypeTrans;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Blend_RstRstFunction extends Blend_AppFunction {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  Pnt1(): gp_Pnt;
  Pnt2(): gp_Pnt;
  PointOnRst1(): gp_Pnt;
  PointOnRst2(): gp_Pnt;
  Pnt2dOnRst1(): gp_Pnt2d;
  Pnt2dOnRst2(): gp_Pnt2d;
  ParameterOnRst1(): Standard_Real;
  ParameterOnRst2(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnRst1(): gp_Vec;
  Tangent2dOnRst1(): gp_Vec2d;
  TangentOnRst2(): gp_Vec;
  Tangent2dOnRst2(): gp_Vec2d;
  Decroch(Sol: math_Vector, NRst1: gp_Vec, TgRst1: gp_Vec, NRst2: gp_Vec, TgRst2: gp_Vec): Blend_DecrochStatus;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_1(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
}

export declare class BRepBlend_RstRstConstRad extends Blend_RstRstFunction {
  constructor(Surf1: any, Rst1: any, Surf2: any, Rst2: any, CGuide: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(SurfRef1: any, RstRef1: any, SurfRef2: any, RstRef2: any): void;
  Set_2(Param: Standard_Real): void;
  Set_3(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  PointOnRst1(): gp_Pnt;
  PointOnRst2(): gp_Pnt;
  Pnt2dOnRst1(): gp_Pnt2d;
  Pnt2dOnRst2(): gp_Pnt2d;
  ParameterOnRst1(): Standard_Real;
  ParameterOnRst2(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnRst1(): gp_Vec;
  Tangent2dOnRst1(): gp_Vec2d;
  TangentOnRst2(): gp_Vec;
  Tangent2dOnRst2(): gp_Vec2d;
  Decroch(Sol: math_Vector, NRst1: gp_Vec, TgRst1: gp_Vec, NRst2: gp_Vec, TgRst2: gp_Vec): Blend_DecrochStatus;
  Set_4(Radius: Standard_Real, Choix: Standard_Integer): void;
  Set_5(TypeSection: BlendFunc_SectionShape): void;
  CenterCircleRst1Rst2(PtRst1: gp_Pnt, PtRst2: gp_Pnt, np: gp_Vec, Center: gp_Pnt, VdMed: gp_Vec): Standard_Boolean;
  Section_1(Param: Standard_Real, U: Standard_Real, V: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BRepBlend_RstRstEvolRad extends Blend_RstRstFunction {
  constructor(Surf1: any, Rst1: any, Surf2: any, Rst2: any, CGuide: any, Evol: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(SurfRef1: any, RstRef1: any, SurfRef2: any, RstRef2: any): void;
  Set_2(Param: Standard_Real): void;
  Set_3(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  PointOnRst1(): gp_Pnt;
  PointOnRst2(): gp_Pnt;
  Pnt2dOnRst1(): gp_Pnt2d;
  Pnt2dOnRst2(): gp_Pnt2d;
  ParameterOnRst1(): Standard_Real;
  ParameterOnRst2(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnRst1(): gp_Vec;
  Tangent2dOnRst1(): gp_Vec2d;
  TangentOnRst2(): gp_Vec;
  Tangent2dOnRst2(): gp_Vec2d;
  Decroch(Sol: math_Vector, NRst1: gp_Vec, TgRst1: gp_Vec, NRst2: gp_Vec, TgRst2: gp_Vec): Blend_DecrochStatus;
  Set_4(Choix: Standard_Integer): void;
  Set_5(TypeSection: BlendFunc_SectionShape): void;
  CenterCircleRst1Rst2(PtRst1: gp_Pnt, PtRst2: gp_Pnt, np: gp_Vec, Center: gp_Pnt, VdMed: gp_Vec): Standard_Boolean;
  Section_1(Param: Standard_Real, U: Standard_Real, V: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BRepBlend_RstRstLineBuilder {
  constructor(Surf1: any, Rst1: any, Domain1: any, Surf2: any, Rst2: any, Domain2: any)
  Perform(Func: Blend_RstRstFunction, Finv1: Blend_SurfCurvFuncInv, FinvP1: Blend_CurvPointFuncInv, Finv2: Blend_SurfCurvFuncInv, FinvP2: Blend_CurvPointFuncInv, Pdep: Standard_Real, Pmax: Standard_Real, MaxStep: Standard_Real, TolGuide: Standard_Real, Soldep: math_Vector, Tolesp: Standard_Real, Fleche: Standard_Real, Appro: Standard_Boolean): void;
  PerformFirstSection(Func: Blend_RstRstFunction, Finv1: Blend_SurfCurvFuncInv, FinvP1: Blend_CurvPointFuncInv, Finv2: Blend_SurfCurvFuncInv, FinvP2: Blend_CurvPointFuncInv, Pdep: Standard_Real, Pmax: Standard_Real, Soldep: math_Vector, Tolesp: Standard_Real, TolGuide: Standard_Real, RecRst1: Standard_Boolean, RecP1: Standard_Boolean, RecRst2: Standard_Boolean, RecP2: Standard_Boolean, Psol: Standard_Real, ParSol: math_Vector): Standard_Boolean;
  Complete(Func: Blend_RstRstFunction, Finv1: Blend_SurfCurvFuncInv, FinvP1: Blend_CurvPointFuncInv, Finv2: Blend_SurfCurvFuncInv, FinvP2: Blend_CurvPointFuncInv, Pmin: Standard_Real): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Line(): any;
  Decroch1Start(): Standard_Boolean;
  Decroch1End(): Standard_Boolean;
  Decroch2Start(): Standard_Boolean;
  Decroch2End(): Standard_Boolean;
}

export declare class BlendFunc_Ruled extends Blend_Function {
  constructor(S1: any, S2: any, C: any)
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  PointOnS1(): gp_Pnt;
  PointOnS2(): gp_Pnt;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS1(): gp_Vec;
  Tangent2dOnS1(): gp_Vec2d;
  TangentOnS2(): gp_Vec;
  Tangent2dOnS2(): gp_Vec2d;
  Tangent(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TgFirst: gp_Vec, TgLast: gp_Vec, NormFirst: gp_Vec, NormLast: gp_Vec): void;
  GetSection(Param: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, tabP: TColgp_Array1OfPnt, tabV: TColgp_Array1OfVec): Standard_Boolean;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_1(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  AxeRot(Prm: Standard_Real): gp_Ax1;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BlendFunc_RuledInv extends Blend_FuncInv {
  constructor(S1: any, S2: any, C: any)
  Set(OnFirst: Standard_Boolean, COnSurf: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
}

export declare class Blend_SurfCurvFuncInv extends math_FunctionSetWithDerivatives {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set(Rst: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BRepBlend_SurfCurvConstRadInv extends Blend_SurfCurvFuncInv {
  constructor(S: any, C: any, Cg: any)
  Set_1(R: Standard_Real, Choix: Standard_Integer): void;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(Rst: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BRepBlend_SurfCurvEvolRadInv extends Blend_SurfCurvFuncInv {
  constructor(S: any, C: any, Cg: any, Evol: any)
  Set_1(Choix: Standard_Integer): void;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(Rst: any): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class Blend_SurfPointFuncInv extends math_FunctionSetWithDerivatives {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set(P: gp_Pnt): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BRepBlend_SurfPointConstRadInv extends Blend_SurfPointFuncInv {
  constructor(S: any, C: any)
  Set_1(R: Standard_Real, Choix: Standard_Integer): void;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(P: gp_Pnt): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class BRepBlend_SurfPointEvolRadInv extends Blend_SurfPointFuncInv {
  constructor(S: any, C: any, Evol: any)
  Set_1(Choix: Standard_Integer): void;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_2(P: gp_Pnt): void;
  GetTolerance(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
}

export declare class Blend_SurfRstFunction extends Blend_AppFunction {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(Param: Standard_Real): void;
  Set_2(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  Pnt1(): gp_Pnt;
  Pnt2(): gp_Pnt;
  PointOnS(): gp_Pnt;
  PointOnRst(): gp_Pnt;
  Pnt2dOnS(): gp_Pnt2d;
  Pnt2dOnRst(): gp_Pnt2d;
  ParameterOnRst(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS(): gp_Vec;
  Tangent2dOnS(): gp_Vec2d;
  TangentOnRst(): gp_Vec;
  Tangent2dOnRst(): gp_Vec2d;
  Decroch(Sol: math_Vector, NS: gp_Vec, TgS: gp_Vec): Standard_Boolean;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_1(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
}

export declare class BRepBlend_SurfRstConstRad extends Blend_SurfRstFunction {
  constructor(Surf: any, SurfRst: any, Rst: any, CGuide: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(SurfRef: any, RstRef: any): void;
  Set_2(Param: Standard_Real): void;
  Set_3(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  PointOnS(): gp_Pnt;
  PointOnRst(): gp_Pnt;
  Pnt2dOnS(): gp_Pnt2d;
  Pnt2dOnRst(): gp_Pnt2d;
  ParameterOnRst(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS(): gp_Vec;
  Tangent2dOnS(): gp_Vec2d;
  TangentOnRst(): gp_Vec;
  Tangent2dOnRst(): gp_Vec2d;
  Decroch(Sol: math_Vector, NS: gp_Vec, TgS: gp_Vec): Standard_Boolean;
  Set_4(Radius: Standard_Real, Choix: Standard_Integer): void;
  Set_5(TypeSection: BlendFunc_SectionShape): void;
  Section_1(Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BRepBlend_SurfRstEvolRad extends Blend_SurfRstFunction {
  constructor(Surf: any, SurfRst: any, Rst: any, CGuide: any, Evol: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Set_1(SurfRef: any, RstRef: any): void;
  Set_2(Param: Standard_Real): void;
  Set_3(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance_1(Tolerance: math_Vector, Tol: Standard_Real): void;
  GetBounds(InfBound: math_Vector, SupBound: math_Vector): void;
  IsSolution(Sol: math_Vector, Tol: Standard_Real): Standard_Boolean;
  GetMinimalDistance(): Standard_Real;
  PointOnS(): gp_Pnt;
  PointOnRst(): gp_Pnt;
  Pnt2dOnS(): gp_Pnt2d;
  Pnt2dOnRst(): gp_Pnt2d;
  ParameterOnRst(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  TangentOnS(): gp_Vec;
  Tangent2dOnS(): gp_Vec2d;
  TangentOnRst(): gp_Vec;
  Tangent2dOnRst(): gp_Vec2d;
  Decroch(Sol: math_Vector, NS: gp_Vec, TgS: gp_Vec): Standard_Boolean;
  Set_4(Choix: Standard_Integer): void;
  Set_5(TypeSection: BlendFunc_SectionShape): void;
  Section_1(Param: Standard_Real, U: Standard_Real, V: Standard_Real, W: Standard_Real, Pdeb: Standard_Real, Pfin: Standard_Real, C: gp_Circ): void;
  IsRational(): Standard_Boolean;
  GetSectionSize(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  GetTolerance_2(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: math_Vector, Tol1D: math_Vector): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_2(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_3(P: Blend_Point, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_4(P: Blend_Point, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Resolution(IC2d: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
}

export declare class BRepBlend_SurfRstLineBuilder {
  constructor(Surf1: any, Domain1: any, Surf2: any, Rst: any, Domain2: any)
  Perform(Func: Blend_SurfRstFunction, Finv: Blend_FuncInv, FinvP: Blend_SurfPointFuncInv, FinvC: Blend_SurfCurvFuncInv, Pdep: Standard_Real, Pmax: Standard_Real, MaxStep: Standard_Real, TolGuide: Standard_Real, Soldep: math_Vector, Tolesp: Standard_Real, Fleche: Standard_Real, Appro: Standard_Boolean): void;
  PerformFirstSection(Func: Blend_SurfRstFunction, Finv: Blend_FuncInv, FinvP: Blend_SurfPointFuncInv, FinvC: Blend_SurfCurvFuncInv, Pdep: Standard_Real, Pmax: Standard_Real, Soldep: math_Vector, Tolesp: Standard_Real, TolGuide: Standard_Real, RecRst: Standard_Boolean, RecP: Standard_Boolean, RecS: Standard_Boolean, Psol: Standard_Real, ParSol: math_Vector): Standard_Boolean;
  Complete(Func: Blend_SurfRstFunction, Finv: Blend_FuncInv, FinvP: Blend_SurfPointFuncInv, FinvC: Blend_SurfCurvFuncInv, Pmin: Standard_Real): Standard_Boolean;
  ArcToRecadre(Sol: math_Vector, PrevIndex: Standard_Integer, pt2d: gp_Pnt2d, lastpt2d: gp_Pnt2d, ponarc: Standard_Real): Standard_Integer;
  IsDone(): Standard_Boolean;
  Line(): any;
  DecrochStart(): Standard_Boolean;
  DecrochEnd(): Standard_Boolean;
}

export declare class BRepBlend_Walking {
  constructor(Surf1: any, Surf2: any, Domain1: any, Domain2: any, HGuide: any)
  SetDomainsToRecadre(RecDomain1: any, RecDomain2: any): void;
  AddSingularPoint(P: Blend_Point): void;
  Perform(F: Blend_Function, FInv: Blend_FuncInv, Pdep: Standard_Real, Pmax: Standard_Real, MaxStep: Standard_Real, TolGuide: Standard_Real, Soldep: math_Vector, Tolesp: Standard_Real, Fleche: Standard_Real, Appro: Standard_Boolean): void;
  PerformFirstSection_1(F: Blend_Function, Pdep: Standard_Real, ParDep: math_Vector, Tolesp: Standard_Real, TolGuide: Standard_Real, Pos1: TopAbs_State, Pos2: TopAbs_State): Standard_Boolean;
  PerformFirstSection_2(F: Blend_Function, FInv: Blend_FuncInv, Pdep: Standard_Real, Pmax: Standard_Real, ParDep: math_Vector, Tolesp: Standard_Real, TolGuide: Standard_Real, RecOnS1: Standard_Boolean, RecOnS2: Standard_Boolean, Psol: Standard_Real, ParSol: math_Vector): Standard_Boolean;
  Continu_1(F: Blend_Function, FInv: Blend_FuncInv, P: Standard_Real): Standard_Boolean;
  Continu_2(F: Blend_Function, FInv: Blend_FuncInv, P: Standard_Real, OnS1: Standard_Boolean): Standard_Boolean;
  Complete(F: Blend_Function, FInv: Blend_FuncInv, Pmin: Standard_Real): Standard_Boolean;
  ClassificationOnS1(C: Standard_Boolean): void;
  ClassificationOnS2(C: Standard_Boolean): void;
  Check2d(C: Standard_Boolean): void;
  Check(C: Standard_Boolean): void;
  TwistOnS1(): Standard_Boolean;
  TwistOnS2(): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Line(): any;
}

export declare class ChFiDS_CircSection {
  constructor()
  Set_1(C: gp_Circ, F: Standard_Real, L: Standard_Real): void;
  Set_2(C: gp_Lin, F: Standard_Real, L: Standard_Real): void;
  Get_1(C: gp_Circ, F: Standard_Real, L: Standard_Real): void;
  Get_2(C: gp_Lin, F: Standard_Real, L: Standard_Real): void;
}

export declare class BRepFilletAPI_LocalOperation extends BRepBuilderAPI_MakeShape {
  Add(E: TopoDS_Edge): void;
  ResetContour(IC: Standard_Integer): void;
  NbContours(): Standard_Integer;
  Contour(E: TopoDS_Edge): Standard_Integer;
  NbEdges(I: Standard_Integer): Standard_Integer;
  Edge(I: Standard_Integer, J: Standard_Integer): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Standard_Integer): Standard_Real;
  FirstVertex(IC: Standard_Integer): TopoDS_Vertex;
  LastVertex(IC: Standard_Integer): TopoDS_Vertex;
  Abscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Standard_Integer): Standard_Boolean;
  Closed(IC: Standard_Integer): Standard_Boolean;
  Reset(): void;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
}

export declare class ChFiDS_Map {
  constructor()
  Fill(S: TopoDS_Shape, T1: TopAbs_ShapeEnum, T2: TopAbs_ShapeEnum): void;
  Contains(S: TopoDS_Shape): Standard_Boolean;
  FindFromKey(S: TopoDS_Shape): TopTools_ListOfShape;
  FindFromIndex(I: Standard_Integer): TopTools_ListOfShape;
}

export declare class ChFiDS_CommonPoint {
  constructor()
  Reset(): void;
  SetVertex(theVertex: TopoDS_Vertex): void;
  SetArc(Tol: Standard_Real, A: TopoDS_Edge, Param: Standard_Real, TArc: TopAbs_Orientation): void;
  SetParameter(Param: Standard_Real): void;
  SetPoint(thePoint: gp_Pnt): void;
  SetVector(theVector: gp_Vec): void;
  SetTolerance(Tol: Standard_Real): void;
  Tolerance(): Standard_Real;
  IsVertex(): Standard_Boolean;
  Vertex(): TopoDS_Vertex;
  IsOnArc(): Standard_Boolean;
  Arc(): TopoDS_Edge;
  TransitionOnArc(): TopAbs_Orientation;
  ParameterOnArc(): Standard_Real;
  Parameter(): Standard_Real;
  Point(): gp_Pnt;
  HasVector(): Standard_Boolean;
  Vector(): gp_Vec;
}

export declare class ChFiDS_FaceInterference {
  constructor()
  SetInterference(LineIndex: Standard_Integer, Trans: TopAbs_Orientation, PCurv1: any, PCurv2: any): void;
  SetTransition(Trans: TopAbs_Orientation): void;
  SetFirstParameter(U1: Standard_Real): void;
  SetLastParameter(U1: Standard_Real): void;
  SetParameter(U1: Standard_Real, IsFirst: Standard_Boolean): void;
  LineIndex(): Standard_Integer;
  SetLineIndex(I: Standard_Integer): void;
  Transition(): TopAbs_Orientation;
  PCurveOnFace(): any;
  PCurveOnSurf(): any;
  ChangePCurveOnFace(): any;
  ChangePCurveOnSurf(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Parameter(IsFirst: Standard_Boolean): Standard_Real;
}

export declare class ChFiDS_SurfData extends Standard_Transient {
  constructor()
  Copy(Other: any): void;
  IndexOfS1(): Standard_Integer;
  IndexOfS2(): Standard_Integer;
  IsOnCurve1(): Standard_Boolean;
  IsOnCurve2(): Standard_Boolean;
  IndexOfC1(): Standard_Integer;
  IndexOfC2(): Standard_Integer;
  Surf(): Standard_Integer;
  Orientation(): TopAbs_Orientation;
  InterferenceOnS1(): ChFiDS_FaceInterference;
  InterferenceOnS2(): ChFiDS_FaceInterference;
  VertexFirstOnS1(): ChFiDS_CommonPoint;
  VertexFirstOnS2(): ChFiDS_CommonPoint;
  VertexLastOnS1(): ChFiDS_CommonPoint;
  VertexLastOnS2(): ChFiDS_CommonPoint;
  ChangeIndexOfS1(Index: Standard_Integer): void;
  ChangeIndexOfS2(Index: Standard_Integer): void;
  ChangeSurf(Index: Standard_Integer): void;
  SetIndexOfC1(Index: Standard_Integer): void;
  SetIndexOfC2(Index: Standard_Integer): void;
  ChangeOrientation(): TopAbs_Orientation;
  ChangeInterferenceOnS1(): ChFiDS_FaceInterference;
  ChangeInterferenceOnS2(): ChFiDS_FaceInterference;
  ChangeVertexFirstOnS1(): ChFiDS_CommonPoint;
  ChangeVertexFirstOnS2(): ChFiDS_CommonPoint;
  ChangeVertexLastOnS1(): ChFiDS_CommonPoint;
  ChangeVertexLastOnS2(): ChFiDS_CommonPoint;
  Interference(OnS: Standard_Integer): ChFiDS_FaceInterference;
  ChangeInterference(OnS: Standard_Integer): ChFiDS_FaceInterference;
  Index(OfS: Standard_Integer): Standard_Integer;
  Vertex(First: Standard_Boolean, OnS: Standard_Integer): ChFiDS_CommonPoint;
  ChangeVertex(First: Standard_Boolean, OnS: Standard_Integer): ChFiDS_CommonPoint;
  IsOnCurve(OnS: Standard_Integer): Standard_Boolean;
  IndexOfC(OnS: Standard_Integer): Standard_Integer;
  FirstSpineParam_1(): Standard_Real;
  LastSpineParam_1(): Standard_Real;
  FirstSpineParam_2(Par: Standard_Real): void;
  LastSpineParam_2(Par: Standard_Real): void;
  FirstExtensionValue_1(): Standard_Real;
  LastExtensionValue_1(): Standard_Real;
  FirstExtensionValue_2(Extend: Standard_Real): void;
  LastExtensionValue_2(Extend: Standard_Real): void;
  Simul(): any;
  SetSimul(S: any): void;
  ResetSimul(): void;
  Get2dPoints_1(First: Standard_Boolean, OnS: Standard_Integer): gp_Pnt2d;
  Get2dPoints_2(P2df1: gp_Pnt2d, P2dl1: gp_Pnt2d, P2df2: gp_Pnt2d, P2dl2: gp_Pnt2d): void;
  Set2dPoints(P2df1: gp_Pnt2d, P2dl1: gp_Pnt2d, P2df2: gp_Pnt2d, P2dl2: gp_Pnt2d): void;
  TwistOnS1_1(): Standard_Boolean;
  TwistOnS2_1(): Standard_Boolean;
  TwistOnS1_2(T: Standard_Boolean): void;
  TwistOnS2_2(T: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ChFiDS_Stripe extends Standard_Transient {
  constructor()
  Reset(): void;
  SetOfSurfData(): any;
  Spine(): any;
  OrientationOnFace1_1(): TopAbs_Orientation;
  OrientationOnFace2_1(): TopAbs_Orientation;
  Choix_1(): Standard_Integer;
  ChangeSetOfSurfData(): any;
  ChangeSpine(): any;
  OrientationOnFace1_2(Or1: TopAbs_Orientation): void;
  OrientationOnFace2_2(Or2: TopAbs_Orientation): void;
  Choix_2(C: Standard_Integer): void;
  FirstParameters(Pdeb: Standard_Real, Pfin: Standard_Real): void;
  LastParameters(Pdeb: Standard_Real, Pfin: Standard_Real): void;
  ChangeFirstParameters(Pdeb: Standard_Real, Pfin: Standard_Real): void;
  ChangeLastParameters(Pdeb: Standard_Real, Pfin: Standard_Real): void;
  FirstCurve(): Standard_Integer;
  LastCurve(): Standard_Integer;
  ChangeFirstCurve(Index: Standard_Integer): void;
  ChangeLastCurve(Index: Standard_Integer): void;
  FirstPCurve(): any;
  LastPCurve(): any;
  ChangeFirstPCurve(): any;
  ChangeLastPCurve(): any;
  FirstPCurveOrientation_1(): TopAbs_Orientation;
  LastPCurveOrientation_1(): TopAbs_Orientation;
  FirstPCurveOrientation_2(O: TopAbs_Orientation): void;
  LastPCurveOrientation_2(O: TopAbs_Orientation): void;
  IndexFirstPointOnS1(): Standard_Integer;
  IndexFirstPointOnS2(): Standard_Integer;
  IndexLastPointOnS1(): Standard_Integer;
  IndexLastPointOnS2(): Standard_Integer;
  ChangeIndexFirstPointOnS1(Index: Standard_Integer): void;
  ChangeIndexFirstPointOnS2(Index: Standard_Integer): void;
  ChangeIndexLastPointOnS1(Index: Standard_Integer): void;
  ChangeIndexLastPointOnS2(Index: Standard_Integer): void;
  Parameters(First: Standard_Boolean, Pdeb: Standard_Real, Pfin: Standard_Real): void;
  SetParameters(First: Standard_Boolean, Pdeb: Standard_Real, Pfin: Standard_Real): void;
  Curve(First: Standard_Boolean): Standard_Integer;
  SetCurve(Index: Standard_Integer, First: Standard_Boolean): void;
  PCurve(First: Standard_Boolean): any;
  ChangePCurve(First: Standard_Boolean): any;
  Orientation_1(OnS: Standard_Integer): TopAbs_Orientation;
  SetOrientation_1(Or: TopAbs_Orientation, OnS: Standard_Integer): void;
  Orientation_2(First: Standard_Boolean): TopAbs_Orientation;
  SetOrientation_2(Or: TopAbs_Orientation, First: Standard_Boolean): void;
  IndexPoint(First: Standard_Boolean, OnS: Standard_Integer): Standard_Integer;
  SetIndexPoint(Index: Standard_Integer, First: Standard_Boolean, OnS: Standard_Integer): void;
  SolidIndex(): Standard_Integer;
  SetSolidIndex(Index: Standard_Integer): void;
  InDS(First: Standard_Boolean, Nb: Standard_Integer): void;
  IsInDS(First: Standard_Boolean): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ChFiDS_StripeMap {
  constructor()
  Add(V: TopoDS_Vertex, F: any): void;
  Extent(): Standard_Integer;
  FindFromKey(V: TopoDS_Vertex): ChFiDS_ListOfStripe;
  FindFromIndex(I: Standard_Integer): ChFiDS_ListOfStripe;
  FindKey(I: Standard_Integer): TopoDS_Vertex;
  Clear(): void;
}

export declare class ChFiDS_Regul {
  constructor()
  SetCurve(IC: Standard_Integer): void;
  SetS1(IS1: Standard_Integer, IsFace: Standard_Boolean): void;
  SetS2(IS2: Standard_Integer, IsFace: Standard_Boolean): void;
  IsSurface1(): Standard_Boolean;
  IsSurface2(): Standard_Boolean;
  Curve(): Standard_Integer;
  S1(): Standard_Integer;
  S2(): Standard_Integer;
}

export declare class ChFi3d_Builder {
  SetParams(Tang: Standard_Real, Tesp: Standard_Real, T2d: Standard_Real, TApp3d: Standard_Real, TolApp2d: Standard_Real, Fleche: Standard_Real): void;
  SetContinuity(InternalContinuity: GeomAbs_Shape, AngularTolerance: Standard_Real): void;
  Remove(E: TopoDS_Edge): void;
  Contains_1(E: TopoDS_Edge): Standard_Integer;
  Contains_2(E: TopoDS_Edge, IndexInSpine: Standard_Integer): Standard_Integer;
  NbElements(): Standard_Integer;
  Value(I: Standard_Integer): any;
  Length(IC: Standard_Integer): Standard_Real;
  FirstVertex(IC: Standard_Integer): TopoDS_Vertex;
  LastVertex(IC: Standard_Integer): TopoDS_Vertex;
  Abscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Standard_Integer): Standard_Boolean;
  Closed(IC: Standard_Integer): Standard_Boolean;
  Compute(): void;
  IsDone(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  Generated(EouV: TopoDS_Shape): TopTools_ListOfShape;
  NbFaultyContours(): Standard_Integer;
  FaultyContour(I: Standard_Integer): Standard_Integer;
  NbComputedSurfaces(IC: Standard_Integer): Standard_Integer;
  ComputedSurface(IC: Standard_Integer, IS: Standard_Integer): any;
  NbFaultyVertices(): Standard_Integer;
  FaultyVertex(IV: Standard_Integer): TopoDS_Vertex;
  HasResult(): Standard_Boolean;
  BadShape(): TopoDS_Shape;
  StripeStatus(IC: Standard_Integer): ChFiDS_ErrorStatus;
  Reset(): void;
  Builder(): any;
  SplitKPart(Data: any, SetData: ChFiDS_SequenceOfSurfData, Spine: any, Iedge: Standard_Integer, S1: any, I1: any, S2: any, I2: any, Intf: Standard_Boolean, Intl: Standard_Boolean): Standard_Boolean;
  PerformTwoCornerbyInter(Index: Standard_Integer): Standard_Boolean;
}

export declare class ChFi3d_ChBuilder extends ChFi3d_Builder {
  constructor(S: TopoDS_Shape, Ta: Standard_Real)
  Add_1(E: TopoDS_Edge): void;
  Add_2(Dis: Standard_Real, E: TopoDS_Edge): void;
  SetDist(Dis: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  GetDist(IC: Standard_Integer, Dis: Standard_Real): void;
  Add_3(Dis1: Standard_Real, Dis2: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDists(Dis1: Standard_Real, Dis2: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  Dists(IC: Standard_Integer, Dis1: Standard_Real, Dis2: Standard_Real): void;
  AddDA(Dis: Standard_Real, Angle: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDistAngle(Dis: Standard_Real, Angle: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  GetDistAngle(IC: Standard_Integer, Dis: Standard_Real, Angle: Standard_Real): void;
  SetMode(theMode: ChFiDS_ChamfMode): void;
  IsChamfer(IC: Standard_Integer): ChFiDS_ChamfMethod;
  Mode(): ChFiDS_ChamfMode;
  ResetContour(IC: Standard_Integer): void;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
  SimulSurf_1(Data: any, Guide: any, Spine: any, Choix: Standard_Integer, S1: any, I1: any, PC1: any, Sref1: any, PCref1: any, Decroch1: Standard_Boolean, S2: any, I2: any, Or2: TopAbs_Orientation, Fleche: Standard_Real, TolGuide: Standard_Real, First: Standard_Real, Last: Standard_Real, Inside: Standard_Boolean, Appro: Standard_Boolean, Forward: Standard_Boolean, RecP: Standard_Boolean, RecS: Standard_Boolean, RecRst: Standard_Boolean, Soldep: math_Vector): void;
  SimulSurf_2(Data: any, Guide: any, Spine: any, Choix: Standard_Integer, S1: any, I1: any, Or1: TopAbs_Orientation, S2: any, I2: any, PC2: any, Sref2: any, PCref2: any, Decroch2: Standard_Boolean, Fleche: Standard_Real, TolGuide: Standard_Real, First: Standard_Real, Last: Standard_Real, Inside: Standard_Boolean, Appro: Standard_Boolean, Forward: Standard_Boolean, RecP: Standard_Boolean, RecS: Standard_Boolean, RecRst: Standard_Boolean, Soldep: math_Vector): void;
  SimulSurf_3(Data: any, Guide: any, Spine: any, Choix: Standard_Integer, S1: any, I1: any, PC1: any, Sref1: any, PCref1: any, Decroch1: Standard_Boolean, Or1: TopAbs_Orientation, S2: any, I2: any, PC2: any, Sref2: any, PCref2: any, Decroch2: Standard_Boolean, Or2: TopAbs_Orientation, Fleche: Standard_Real, TolGuide: Standard_Real, First: Standard_Real, Last: Standard_Real, Inside: Standard_Boolean, Appro: Standard_Boolean, Forward: Standard_Boolean, RecP1: Standard_Boolean, RecRst1: Standard_Boolean, RecP2: Standard_Boolean, RecRst2: Standard_Boolean, Soldep: math_Vector): void;
  PerformSurf_1(Data: ChFiDS_SequenceOfSurfData, Guide: any, Spine: any, Choix: Standard_Integer, S1: any, I1: any, S2: any, I2: any, MaxStep: Standard_Real, Fleche: Standard_Real, TolGuide: Standard_Real, First: Standard_Real, Last: Standard_Real, Inside: Standard_Boolean, Appro: Standard_Boolean, Forward: Standard_Boolean, RecOnS1: Standard_Boolean, RecOnS2: Standard_Boolean, Soldep: math_Vector, Intf: Standard_Integer, Intl: Standard_Integer): Standard_Boolean;
  PerformSurf_2(Data: ChFiDS_SequenceOfSurfData, Guide: any, Spine: any, Choix: Standard_Integer, S1: any, I1: any, PC1: any, Sref1: any, PCref1: any, Decroch1: Standard_Boolean, S2: any, I2: any, Or2: TopAbs_Orientation, MaxStep: Standard_Real, Fleche: Standard_Real, TolGuide: Standard_Real, First: Standard_Real, Last: Standard_Real, Inside: Standard_Boolean, Appro: Standard_Boolean, Forward: Standard_Boolean, RecP: Standard_Boolean, RecS: Standard_Boolean, RecRst: Standard_Boolean, Soldep: math_Vector): void;
  PerformSurf_3(Data: ChFiDS_SequenceOfSurfData, Guide: any, Spine: any, Choix: Standard_Integer, S1: any, I1: any, Or1: TopAbs_Orientation, S2: any, I2: any, PC2: any, Sref2: any, PCref2: any, Decroch2: Standard_Boolean, MaxStep: Standard_Real, Fleche: Standard_Real, TolGuide: Standard_Real, First: Standard_Real, Last: Standard_Real, Inside: Standard_Boolean, Appro: Standard_Boolean, Forward: Standard_Boolean, RecP: Standard_Boolean, RecS: Standard_Boolean, RecRst: Standard_Boolean, Soldep: math_Vector): void;
  PerformSurf_4(Data: ChFiDS_SequenceOfSurfData, Guide: any, Spine: any, Choix: Standard_Integer, S1: any, I1: any, PC1: any, Sref1: any, PCref1: any, Decroch1: Standard_Boolean, Or1: TopAbs_Orientation, S2: any, I2: any, PC2: any, Sref2: any, PCref2: any, Decroch2: Standard_Boolean, Or2: TopAbs_Orientation, MaxStep: Standard_Real, Fleche: Standard_Real, TolGuide: Standard_Real, First: Standard_Real, Last: Standard_Real, Inside: Standard_Boolean, Appro: Standard_Boolean, Forward: Standard_Boolean, RecP1: Standard_Boolean, RecRst1: Standard_Boolean, RecP2: Standard_Boolean, RecRst2: Standard_Boolean, Soldep: math_Vector): void;
}

export declare class BRepFilletAPI_MakeChamfer extends BRepFilletAPI_LocalOperation {
  constructor(S: TopoDS_Shape)
  Add_1(E: TopoDS_Edge): void;
  Add_2(Dis: Standard_Real, E: TopoDS_Edge): void;
  SetDist(Dis: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  GetDist(IC: Standard_Integer, Dis: Standard_Real): void;
  Add_3(Dis1: Standard_Real, Dis2: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDists(Dis1: Standard_Real, Dis2: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  Dists(IC: Standard_Integer, Dis1: Standard_Real, Dis2: Standard_Real): void;
  AddDA(Dis: Standard_Real, Angle: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDistAngle(Dis: Standard_Real, Angle: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  GetDistAngle(IC: Standard_Integer, Dis: Standard_Real, Angle: Standard_Real): void;
  SetMode(theMode: ChFiDS_ChamfMode): void;
  IsSymetric(IC: Standard_Integer): Standard_Boolean;
  IsTwoDistances(IC: Standard_Integer): Standard_Boolean;
  IsDistanceAngle(IC: Standard_Integer): Standard_Boolean;
  ResetContour(IC: Standard_Integer): void;
  NbContours(): Standard_Integer;
  Contour(E: TopoDS_Edge): Standard_Integer;
  NbEdges(I: Standard_Integer): Standard_Integer;
  Edge(I: Standard_Integer, J: Standard_Integer): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Standard_Integer): Standard_Real;
  FirstVertex(IC: Standard_Integer): TopoDS_Vertex;
  LastVertex(IC: Standard_Integer): TopoDS_Vertex;
  Abscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Standard_Integer): Standard_Boolean;
  Closed(IC: Standard_Integer): Standard_Boolean;
  Build(): void;
  Reset(): void;
  Builder(): any;
  Generated(EorV: TopoDS_Shape): TopTools_ListOfShape;
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
}

export declare class ChFi3d_FilBuilder extends ChFi3d_Builder {
  constructor(S: TopoDS_Shape, FShape: ChFi3d_FilletShape, Ta: Standard_Real)
  SetFilletShape(FShape: ChFi3d_FilletShape): void;
  GetFilletShape(): ChFi3d_FilletShape;
  Add_1(E: TopoDS_Edge): void;
  Add_2(Radius: Standard_Real, E: TopoDS_Edge): void;
  SetRadius_1(C: any, IC: Standard_Integer, IinC: Standard_Integer): void;
  IsConstant_1(IC: Standard_Integer): Standard_Boolean;
  Radius_1(IC: Standard_Integer): Standard_Real;
  ResetContour(IC: Standard_Integer): void;
  SetRadius_2(Radius: Standard_Real, IC: Standard_Integer, E: TopoDS_Edge): void;
  UnSet_1(IC: Standard_Integer, E: TopoDS_Edge): void;
  SetRadius_3(Radius: Standard_Real, IC: Standard_Integer, V: TopoDS_Vertex): void;
  UnSet_2(IC: Standard_Integer, V: TopoDS_Vertex): void;
  SetRadius_4(UandR: gp_XY, IC: Standard_Integer, IinC: Standard_Integer): void;
  IsConstant_2(IC: Standard_Integer, E: TopoDS_Edge): Standard_Boolean;
  Radius_2(IC: Standard_Integer, E: TopoDS_Edge): Standard_Real;
  GetBounds(IC: Standard_Integer, E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): Standard_Boolean;
  GetLaw(IC: Standard_Integer, E: TopoDS_Edge): any;
  SetLaw(IC: Standard_Integer, E: TopoDS_Edge, L: any): void;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
}

export declare class BRepFilletAPI_MakeFillet extends BRepFilletAPI_LocalOperation {
  constructor(S: TopoDS_Shape, FShape: ChFi3d_FilletShape)
  SetParams(Tang: Standard_Real, Tesp: Standard_Real, T2d: Standard_Real, TApp3d: Standard_Real, TolApp2d: Standard_Real, Fleche: Standard_Real): void;
  SetContinuity(InternalContinuity: GeomAbs_Shape, AngularTolerance: Standard_Real): void;
  Add_1(E: TopoDS_Edge): void;
  Add_2(Radius: Standard_Real, E: TopoDS_Edge): void;
  Add_3(R1: Standard_Real, R2: Standard_Real, E: TopoDS_Edge): void;
  Add_4(L: any, E: TopoDS_Edge): void;
  Add_5(UandR: TColgp_Array1OfPnt2d, E: TopoDS_Edge): void;
  SetRadius_1(Radius: Standard_Real, IC: Standard_Integer, IinC: Standard_Integer): void;
  SetRadius_2(R1: Standard_Real, R2: Standard_Real, IC: Standard_Integer, IinC: Standard_Integer): void;
  SetRadius_3(L: any, IC: Standard_Integer, IinC: Standard_Integer): void;
  SetRadius_4(UandR: TColgp_Array1OfPnt2d, IC: Standard_Integer, IinC: Standard_Integer): void;
  ResetContour(IC: Standard_Integer): void;
  IsConstant_1(IC: Standard_Integer): Standard_Boolean;
  Radius_1(IC: Standard_Integer): Standard_Real;
  IsConstant_2(IC: Standard_Integer, E: TopoDS_Edge): Standard_Boolean;
  Radius_2(IC: Standard_Integer, E: TopoDS_Edge): Standard_Real;
  SetRadius_5(Radius: Standard_Real, IC: Standard_Integer, E: TopoDS_Edge): void;
  SetRadius_6(Radius: Standard_Real, IC: Standard_Integer, V: TopoDS_Vertex): void;
  GetBounds(IC: Standard_Integer, E: TopoDS_Edge, F: Standard_Real, L: Standard_Real): Standard_Boolean;
  GetLaw(IC: Standard_Integer, E: TopoDS_Edge): any;
  SetLaw(IC: Standard_Integer, E: TopoDS_Edge, L: any): void;
  SetFilletShape(FShape: ChFi3d_FilletShape): void;
  GetFilletShape(): ChFi3d_FilletShape;
  NbContours(): Standard_Integer;
  Contour(E: TopoDS_Edge): Standard_Integer;
  NbEdges(I: Standard_Integer): Standard_Integer;
  Edge(I: Standard_Integer, J: Standard_Integer): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Standard_Integer): Standard_Real;
  FirstVertex(IC: Standard_Integer): TopoDS_Vertex;
  LastVertex(IC: Standard_Integer): TopoDS_Vertex;
  Abscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Standard_Integer): Standard_Boolean;
  Closed(IC: Standard_Integer): Standard_Boolean;
  Build(): void;
  Reset(): void;
  Builder(): any;
  Generated(EorV: TopoDS_Shape): TopTools_ListOfShape;
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  NbSurfaces(): Standard_Integer;
  NewFaces(I: Standard_Integer): TopTools_ListOfShape;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
  NbFaultyContours(): Standard_Integer;
  FaultyContour(I: Standard_Integer): Standard_Integer;
  NbComputedSurfaces(IC: Standard_Integer): Standard_Integer;
  ComputedSurface(IC: Standard_Integer, IS: Standard_Integer): any;
  NbFaultyVertices(): Standard_Integer;
  FaultyVertex(IV: Standard_Integer): TopoDS_Vertex;
  HasResult(): Standard_Boolean;
  BadShape(): TopoDS_Shape;
  StripeStatus(IC: Standard_Integer): ChFiDS_ErrorStatus;
}

export declare class ChFi2d_Builder {
  Init_1(F: TopoDS_Face): void;
  Init_2(RefFace: TopoDS_Face, ModFace: TopoDS_Face): void;
  AddFillet(V: TopoDS_Vertex, Radius: Standard_Real): TopoDS_Edge;
  ModifyFillet(Fillet: TopoDS_Edge, Radius: Standard_Real): TopoDS_Edge;
  RemoveFillet(Fillet: TopoDS_Edge): TopoDS_Vertex;
  AddChamfer_1(E1: TopoDS_Edge, E2: TopoDS_Edge, D1: Standard_Real, D2: Standard_Real): TopoDS_Edge;
  AddChamfer_2(E: TopoDS_Edge, V: TopoDS_Vertex, D: Standard_Real, Ang: Standard_Real): TopoDS_Edge;
  ModifyChamfer_1(Chamfer: TopoDS_Edge, E1: TopoDS_Edge, E2: TopoDS_Edge, D1: Standard_Real, D2: Standard_Real): TopoDS_Edge;
  ModifyChamfer_2(Chamfer: TopoDS_Edge, E: TopoDS_Edge, D: Standard_Real, Ang: Standard_Real): TopoDS_Edge;
  RemoveChamfer(Chamfer: TopoDS_Edge): TopoDS_Vertex;
  Result(): TopoDS_Face;
  IsModified(E: TopoDS_Edge): Standard_Boolean;
  FilletEdges(): TopTools_SequenceOfShape;
  NbFillet(): Standard_Integer;
  ChamferEdges(): TopTools_SequenceOfShape;
  NbChamfer(): Standard_Integer;
  HasDescendant(E: TopoDS_Edge): Standard_Boolean;
  DescendantEdge(E: TopoDS_Edge): TopoDS_Edge;
  BasisEdge(E: TopoDS_Edge): TopoDS_Edge;
  Status(): ChFi2d_ConstructionError;
}

  export declare class ChFi2d_Builder_1 extends ChFi2d_Builder {
    constructor();
  }

  export declare class ChFi2d_Builder_2 extends ChFi2d_Builder {
    constructor(F: TopoDS_Face);
  }

export declare class BRepFilletAPI_MakeFillet2d extends BRepBuilderAPI_MakeShape {
  Init_1(F: TopoDS_Face): void;
  Init_2(RefFace: TopoDS_Face, ModFace: TopoDS_Face): void;
  AddFillet(V: TopoDS_Vertex, Radius: Standard_Real): TopoDS_Edge;
  ModifyFillet(Fillet: TopoDS_Edge, Radius: Standard_Real): TopoDS_Edge;
  RemoveFillet(Fillet: TopoDS_Edge): TopoDS_Vertex;
  AddChamfer_1(E1: TopoDS_Edge, E2: TopoDS_Edge, D1: Standard_Real, D2: Standard_Real): TopoDS_Edge;
  AddChamfer_2(E: TopoDS_Edge, V: TopoDS_Vertex, D: Standard_Real, Ang: Standard_Real): TopoDS_Edge;
  ModifyChamfer_1(Chamfer: TopoDS_Edge, E1: TopoDS_Edge, E2: TopoDS_Edge, D1: Standard_Real, D2: Standard_Real): TopoDS_Edge;
  ModifyChamfer_2(Chamfer: TopoDS_Edge, E: TopoDS_Edge, D: Standard_Real, Ang: Standard_Real): TopoDS_Edge;
  RemoveChamfer(Chamfer: TopoDS_Edge): TopoDS_Vertex;
  IsModified(E: TopoDS_Edge): Standard_Boolean;
  FilletEdges(): TopTools_SequenceOfShape;
  NbFillet(): Standard_Integer;
  ChamferEdges(): TopTools_SequenceOfShape;
  NbChamfer(): Standard_Integer;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  NbCurves(): Standard_Integer;
  NewEdges(I: Standard_Integer): TopTools_ListOfShape;
  HasDescendant(E: TopoDS_Edge): Standard_Boolean;
  DescendantEdge(E: TopoDS_Edge): TopoDS_Edge;
  BasisEdge(E: TopoDS_Edge): TopoDS_Edge;
  Status(): ChFi2d_ConstructionError;
  Build(): void;
}

  export declare class BRepFilletAPI_MakeFillet2d_1 extends BRepFilletAPI_MakeFillet2d {
    constructor();
  }

  export declare class BRepFilletAPI_MakeFillet2d_2 extends BRepFilletAPI_MakeFillet2d {
    constructor(F: TopoDS_Face);
  }

export declare class ChFi2d {
  constructor();
}

export declare class ChFi2d_AnaFilletAlgo {
  Init_1(theWire: TopoDS_Wire, thePlane: gp_Pln): void;
  Init_2(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln): void;
  Perform(radius: Standard_Real): Standard_Boolean;
  Result(e1: TopoDS_Edge, e2: TopoDS_Edge): TopoDS_Edge;
}

  export declare class ChFi2d_AnaFilletAlgo_1 extends ChFi2d_AnaFilletAlgo {
    constructor();
  }

  export declare class ChFi2d_AnaFilletAlgo_2 extends ChFi2d_AnaFilletAlgo {
    constructor(theWire: TopoDS_Wire, thePlane: gp_Pln);
  }

  export declare class ChFi2d_AnaFilletAlgo_3 extends ChFi2d_AnaFilletAlgo {
    constructor(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln);
  }

export declare class ChFi2d_ChamferAPI {
  Init_1(theWire: TopoDS_Wire): void;
  Init_2(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge): void;
  Perform(): Standard_Boolean;
  Result(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, theLength1: Standard_Real, theLength2: Standard_Real): TopoDS_Edge;
}

  export declare class ChFi2d_ChamferAPI_1 extends ChFi2d_ChamferAPI {
    constructor();
  }

  export declare class ChFi2d_ChamferAPI_2 extends ChFi2d_ChamferAPI {
    constructor(theWire: TopoDS_Wire);
  }

  export declare class ChFi2d_ChamferAPI_3 extends ChFi2d_ChamferAPI {
    constructor(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge);
  }

export declare class ChFi2d_FilletAlgo {
  Init_1(theWire: TopoDS_Wire, thePlane: gp_Pln): void;
  Init_2(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln): void;
  Perform(theRadius: Standard_Real): Standard_Boolean;
  NbResults(thePoint: gp_Pnt): Standard_Integer;
  Result(thePoint: gp_Pnt, theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, iSolution: Standard_Integer): TopoDS_Edge;
}

  export declare class ChFi2d_FilletAlgo_1 extends ChFi2d_FilletAlgo {
    constructor();
  }

  export declare class ChFi2d_FilletAlgo_2 extends ChFi2d_FilletAlgo {
    constructor(theWire: TopoDS_Wire, thePlane: gp_Pln);
  }

  export declare class ChFi2d_FilletAlgo_3 extends ChFi2d_FilletAlgo {
    constructor(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln);
  }

export declare class FilletPoint {
  constructor(theParam: Standard_Real)
  setParam(theParam: Standard_Real): void;
  getParam(): Standard_Real;
  getNBValues(): Standard_Integer;
  getValue(theIndex: number): Standard_Real;
  getDiff(theIndex: number): Standard_Real;
  isValid(theIndex: number): Standard_Boolean;
  getNear(theIndex: number): number;
  setParam2(theParam2: Standard_Real): void;
  getParam2(): Standard_Real;
  setCenter(thePoint: gp_Pnt2d): void;
  getCenter(): gp_Pnt2d;
  appendValue(theValue: Standard_Real, theValid: Standard_Boolean): void;
  calculateDiff(a0: FilletPoint): Standard_Boolean;
  FilterPoints(a0: FilletPoint): void;
  Copy(): FilletPoint;
  hasSolution(theRadius: Standard_Real): Standard_Integer;
  LowerValue(): Standard_Real;
  remove(theIndex: Standard_Integer): void;
}

export declare class ChFi2d_FilletAPI {
  Init_1(theWire: TopoDS_Wire, thePlane: gp_Pln): void;
  Init_2(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln): void;
  Perform(theRadius: Standard_Real): Standard_Boolean;
  NbResults(thePoint: gp_Pnt): Standard_Integer;
  Result(thePoint: gp_Pnt, theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, iSolution: Standard_Integer): TopoDS_Edge;
}

  export declare class ChFi2d_FilletAPI_1 extends ChFi2d_FilletAPI {
    constructor();
  }

  export declare class ChFi2d_FilletAPI_2 extends ChFi2d_FilletAPI {
    constructor(theWire: TopoDS_Wire, thePlane: gp_Pln);
  }

  export declare class ChFi2d_FilletAPI_3 extends ChFi2d_FilletAPI {
    constructor(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, thePlane: gp_Pln);
  }

export declare class ChFi3d {
  constructor();
  DefineConnectType(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, SinTol: Standard_Real, CorrectPoint: Standard_Boolean): ChFiDS_TypeOfConcavity;
  IsTangentFaces(theEdge: TopoDS_Edge, theFace1: TopoDS_Face, theFace2: TopoDS_Face, Order: GeomAbs_Shape): Standard_Boolean;
  ConcaveSide(S1: BRepAdaptor_Surface, S2: BRepAdaptor_Surface, E: TopoDS_Edge, Or1: TopAbs_Orientation, Or2: TopAbs_Orientation): Standard_Integer;
  NextSide_1(Or1: TopAbs_Orientation, Or2: TopAbs_Orientation, OrSave1: TopAbs_Orientation, OrSave2: TopAbs_Orientation, ChoixSauv: Standard_Integer): Standard_Integer;
  NextSide_2(Or: TopAbs_Orientation, OrSave: TopAbs_Orientation, OrFace: TopAbs_Orientation): void;
  SameSide(Or: TopAbs_Orientation, OrSave1: TopAbs_Orientation, OrSave2: TopAbs_Orientation, OrFace1: TopAbs_Orientation, OrFace2: TopAbs_Orientation): Standard_Boolean;
}

export declare class ChFiDS_ElSpine extends Adaptor3d_Curve {
  constructor()
  FirstParameter_1(): Standard_Real;
  LastParameter_1(): Standard_Real;
  GetSavedFirstParameter(): Standard_Real;
  GetSavedLastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  IsPeriodic(): Standard_Boolean;
  SetPeriodic(I: Standard_Boolean): void;
  Period(): Standard_Real;
  Value(AbsC: Standard_Real): gp_Pnt;
  D0(AbsC: Standard_Real, P: gp_Pnt): void;
  D1(AbsC: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(AbsC: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(AbsC: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  FirstParameter_2(P: Standard_Real): void;
  LastParameter_2(P: Standard_Real): void;
  SaveFirstParameter(): void;
  SaveLastParameter(): void;
  SetOrigin(O: Standard_Real): void;
  FirstPointAndTgt(P: gp_Pnt, T: gp_Vec): void;
  LastPointAndTgt(P: gp_Pnt, T: gp_Vec): void;
  NbVertices(): Standard_Integer;
  VertexWithTangent(Index: Standard_Integer): gp_Ax1;
  SetFirstPointAndTgt(P: gp_Pnt, T: gp_Vec): void;
  SetLastPointAndTgt(P: gp_Pnt, T: gp_Vec): void;
  AddVertexWithTangent(anAx1: gp_Ax1): void;
  SetCurve(C: any): void;
  Previous(): any;
  ChangePrevious(): any;
  Next(): any;
  ChangeNext(): any;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Bezier(): any;
  BSpline(): any;
}

export declare class ChFiDS_HElSpine extends Adaptor3d_HCurve {
  Set(C: ChFiDS_ElSpine): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): ChFiDS_ElSpine;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ChFiDS_HElSpine_1 extends ChFiDS_HElSpine {
    constructor();
  }

  export declare class ChFiDS_HElSpine_2 extends ChFiDS_HElSpine {
    constructor(C: ChFiDS_ElSpine);
  }

export declare class ChFiDS_Spine extends Standard_Transient {
  SetEdges(E: TopoDS_Edge): void;
  SetOffsetEdges(E: TopoDS_Edge): void;
  PutInFirst(E: TopoDS_Edge): void;
  PutInFirstOffset(E: TopoDS_Edge): void;
  NbEdges(): Standard_Integer;
  Edges(I: Standard_Integer): TopoDS_Edge;
  OffsetEdges(I: Standard_Integer): TopoDS_Edge;
  SetFirstStatus(S: ChFiDS_State): void;
  SetLastStatus(S: ChFiDS_State): void;
  AppendElSpine(Els: any): void;
  AppendOffsetElSpine(Els: any): void;
  ElSpine_1(IE: Standard_Integer): any;
  ElSpine_2(E: TopoDS_Edge): any;
  ElSpine_3(W: Standard_Real): any;
  ChangeElSpines(): ChFiDS_ListOfHElSpine;
  ChangeOffsetElSpines(): ChFiDS_ListOfHElSpine;
  Reset(AllData: Standard_Boolean): void;
  SplitDone_1(): Standard_Boolean;
  SplitDone_2(B: Standard_Boolean): void;
  Load(): void;
  Resolution(R3d: Standard_Real): Standard_Real;
  IsClosed(): Standard_Boolean;
  FirstParameter_1(): Standard_Real;
  LastParameter_1(): Standard_Real;
  SetFirstParameter(Par: Standard_Real): void;
  SetLastParameter(Par: Standard_Real): void;
  FirstParameter_2(IndexSpine: Standard_Integer): Standard_Real;
  LastParameter_2(IndexSpine: Standard_Integer): Standard_Real;
  Length(IndexSpine: Standard_Integer): Standard_Real;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Absc_1(U: Standard_Real): Standard_Real;
  Absc_2(U: Standard_Real, I: Standard_Integer): Standard_Real;
  Parameter_1(AbsC: Standard_Real, U: Standard_Real, Oriented: Standard_Boolean): void;
  Parameter_2(Index: Standard_Integer, AbsC: Standard_Real, U: Standard_Real, Oriented: Standard_Boolean): void;
  Value(AbsC: Standard_Real): gp_Pnt;
  D0(AbsC: Standard_Real, P: gp_Pnt): void;
  D1(AbsC: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(AbsC: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  SetCurrent(Index: Standard_Integer): void;
  CurrentElementarySpine(Index: Standard_Integer): BRepAdaptor_Curve;
  CurrentIndexOfElementarySpine(): Standard_Integer;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  FirstStatus(): ChFiDS_State;
  LastStatus(): ChFiDS_State;
  Status(IsFirst: Standard_Boolean): ChFiDS_State;
  GetTypeOfConcavity(): ChFiDS_TypeOfConcavity;
  SetStatus(S: ChFiDS_State, IsFirst: Standard_Boolean): void;
  SetTypeOfConcavity(theType: ChFiDS_TypeOfConcavity): void;
  IsTangencyExtremity(IsFirst: Standard_Boolean): Standard_Boolean;
  SetTangencyExtremity(IsTangency: Standard_Boolean, IsFirst: Standard_Boolean): void;
  Absc_3(V: TopoDS_Vertex): Standard_Real;
  FirstVertex(): TopoDS_Vertex;
  LastVertex(): TopoDS_Vertex;
  SetFirstTgt(W: Standard_Real): void;
  SetLastTgt(W: Standard_Real): void;
  HasFirstTgt(): Standard_Boolean;
  HasLastTgt(): Standard_Boolean;
  SetReference_1(W: Standard_Real): void;
  SetReference_2(I: Standard_Integer): void;
  Index_1(W: Standard_Real, Forward: Standard_Boolean): Standard_Integer;
  Index_2(E: TopoDS_Edge): Standard_Integer;
  UnsetReference(): void;
  SetErrorStatus(state: ChFiDS_ErrorStatus): void;
  ErrorStatus(): ChFiDS_ErrorStatus;
  Mode(): ChFiDS_ChamfMode;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ChFiDS_Spine_1 extends ChFiDS_Spine {
    constructor();
  }

  export declare class ChFiDS_Spine_2 extends ChFiDS_Spine {
    constructor(Tol: Standard_Real);
  }

export declare class ChFi3d_SearchSing extends math_FunctionWithDerivative {
  constructor(C1: any, C2: any)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class ChFiDS_ChamfSpine extends ChFiDS_Spine {
  SetDist(Dis: Standard_Real): void;
  GetDist(Dis: Standard_Real): void;
  SetDists(Dis1: Standard_Real, Dis2: Standard_Real): void;
  Dists(Dis1: Standard_Real, Dis2: Standard_Real): void;
  GetDistAngle(Dis: Standard_Real, Angle: Standard_Real): void;
  SetDistAngle(Dis: Standard_Real, Angle: Standard_Real): void;
  SetMode(theMode: ChFiDS_ChamfMode): void;
  IsChamfer(): ChFiDS_ChamfMethod;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ChFiDS_ChamfSpine_1 extends ChFiDS_ChamfSpine {
    constructor();
  }

  export declare class ChFiDS_ChamfSpine_2 extends ChFiDS_ChamfSpine {
    constructor(Tol: Standard_Real);
  }

export declare class ChFiDS_FilSpine extends ChFiDS_Spine {
  Reset(AllData: Standard_Boolean): void;
  SetRadius_1(Radius: Standard_Real, E: TopoDS_Edge): void;
  UnSetRadius_1(E: TopoDS_Edge): void;
  SetRadius_2(Radius: Standard_Real, V: TopoDS_Vertex): void;
  UnSetRadius_2(V: TopoDS_Vertex): void;
  SetRadius_3(UandR: gp_XY, IinC: Standard_Integer): void;
  SetRadius_4(Radius: Standard_Real): void;
  SetRadius_5(C: any, IinC: Standard_Integer): void;
  IsConstant_1(): Standard_Boolean;
  IsConstant_2(IE: Standard_Integer): Standard_Boolean;
  Radius_1(): Standard_Real;
  Radius_2(IE: Standard_Integer): Standard_Real;
  Radius_3(E: TopoDS_Edge): Standard_Real;
  AppendElSpine(Els: any): void;
  Law(Els: any): any;
  ChangeLaw(E: TopoDS_Edge): any;
  MaxRadFromSeqAndLaws(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ChFiDS_FilSpine_1 extends ChFiDS_FilSpine {
    constructor();
  }

  export declare class ChFiDS_FilSpine_2 extends ChFiDS_FilSpine {
    constructor(Tol: Standard_Real);
  }

export declare class ChFiKPart_ComputeData {
  constructor();
  Compute(DStr: TopOpeBRepDS_DataStructure, Data: any, S1: any, S2: any, Or1: TopAbs_Orientation, Or2: TopAbs_Orientation, Sp: any, Iedge: Standard_Integer): Standard_Boolean;
  ComputeCorner_1(DStr: TopOpeBRepDS_DataStructure, Data: any, S1: any, S2: any, OrFace1: TopAbs_Orientation, OrFace2: TopAbs_Orientation, Or1: TopAbs_Orientation, Or2: TopAbs_Orientation, minRad: Standard_Real, majRad: Standard_Real, P1S1: gp_Pnt2d, P2S1: gp_Pnt2d, P1S2: gp_Pnt2d, P2S2: gp_Pnt2d): Standard_Boolean;
  ComputeCorner_2(DStr: TopOpeBRepDS_DataStructure, Data: any, S1: any, S2: any, OrFace1: TopAbs_Orientation, OrFace2: TopAbs_Orientation, Or1: TopAbs_Orientation, Or2: TopAbs_Orientation, Rad: Standard_Real, PS1: gp_Pnt2d, P1S2: gp_Pnt2d, P2S2: gp_Pnt2d): Standard_Boolean;
  ComputeCorner_3(DStr: TopOpeBRepDS_DataStructure, Data: any, S: any, S1: any, S2: any, OfS: TopAbs_Orientation, OS: TopAbs_Orientation, OS1: TopAbs_Orientation, OS2: TopAbs_Orientation, Radius: Standard_Real): Standard_Boolean;
}

export declare class FilletSurf_InternalBuilder extends ChFi3d_FilBuilder {
  constructor(S: TopoDS_Shape, FShape: ChFi3d_FilletShape, Ta: Standard_Real, Tapp3d: Standard_Real, Tapp2d: Standard_Real)
  Add(E: TopTools_ListOfShape, R: Standard_Real): Standard_Integer;
  Perform(): void;
  Done(): Standard_Boolean;
  NbSurface(): Standard_Integer;
  SurfaceFillet(Index: Standard_Integer): any;
  TolApp3d(Index: Standard_Integer): Standard_Real;
  SupportFace1(Index: Standard_Integer): TopoDS_Face;
  SupportFace2(Index: Standard_Integer): TopoDS_Face;
  CurveOnFace1(Index: Standard_Integer): any;
  CurveOnFace2(Index: Standard_Integer): any;
  PCurveOnFace1(Index: Standard_Integer): any;
  PCurve1OnFillet(Index: Standard_Integer): any;
  PCurveOnFace2(Index: Standard_Integer): any;
  PCurve2OnFillet(Index: Standard_Integer): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  StartSectionStatus(): FilletSurf_StatusType;
  EndSectionStatus(): FilletSurf_StatusType;
  Simulate(): void;
  NbSection(IndexSurf: Standard_Integer): Standard_Integer;
  Section(IndexSurf: Standard_Integer, IndexSec: Standard_Integer, Circ: any): void;
}

export declare class FilletSurf_Builder {
  constructor(S: TopoDS_Shape, E: TopTools_ListOfShape, R: Standard_Real, Ta: Standard_Real, Tapp3d: Standard_Real, Tapp2d: Standard_Real)
  Perform(): void;
  Simulate(): void;
  IsDone(): FilletSurf_StatusDone;
  StatusError(): FilletSurf_ErrorTypeStatus;
  NbSurface(): Standard_Integer;
  SurfaceFillet(Index: Standard_Integer): any;
  TolApp3d(Index: Standard_Integer): Standard_Real;
  SupportFace1(Index: Standard_Integer): TopoDS_Face;
  SupportFace2(Index: Standard_Integer): TopoDS_Face;
  CurveOnFace1(Index: Standard_Integer): any;
  CurveOnFace2(Index: Standard_Integer): any;
  PCurveOnFace1(Index: Standard_Integer): any;
  PCurve1OnFillet(Index: Standard_Integer): any;
  PCurveOnFace2(Index: Standard_Integer): any;
  PCurve2OnFillet(Index: Standard_Integer): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  StartSectionStatus(): FilletSurf_StatusType;
  EndSectionStatus(): FilletSurf_StatusType;
  NbSection(IndexSurf: Standard_Integer): Standard_Integer;
  Section(IndexSurf: Standard_Integer, IndexSec: Standard_Integer, Circ: any): void;
}

export declare class Handle_BRepBlend_AppFuncRoot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBlend_AppFuncRoot): void;
  get(): BRepBlend_AppFuncRoot;
}

  export declare class Handle_BRepBlend_AppFuncRoot_1 extends Handle_BRepBlend_AppFuncRoot {
    constructor();
  }

  export declare class Handle_BRepBlend_AppFuncRoot_2 extends Handle_BRepBlend_AppFuncRoot {
    constructor(thePtr: BRepBlend_AppFuncRoot);
  }

  export declare class Handle_BRepBlend_AppFuncRoot_3 extends Handle_BRepBlend_AppFuncRoot {
    constructor(theHandle: Handle_BRepBlend_AppFuncRoot);
  }

  export declare class Handle_BRepBlend_AppFuncRoot_4 extends Handle_BRepBlend_AppFuncRoot {
    constructor(theHandle: Handle_BRepBlend_AppFuncRoot);
  }

export declare class Handle_BRepBlend_AppFunc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBlend_AppFunc): void;
  get(): BRepBlend_AppFunc;
}

  export declare class Handle_BRepBlend_AppFunc_1 extends Handle_BRepBlend_AppFunc {
    constructor();
  }

  export declare class Handle_BRepBlend_AppFunc_2 extends Handle_BRepBlend_AppFunc {
    constructor(thePtr: BRepBlend_AppFunc);
  }

  export declare class Handle_BRepBlend_AppFunc_3 extends Handle_BRepBlend_AppFunc {
    constructor(theHandle: Handle_BRepBlend_AppFunc);
  }

  export declare class Handle_BRepBlend_AppFunc_4 extends Handle_BRepBlend_AppFunc {
    constructor(theHandle: Handle_BRepBlend_AppFunc);
  }

export declare class Handle_BRepBlend_AppFuncRst {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBlend_AppFuncRst): void;
  get(): BRepBlend_AppFuncRst;
}

  export declare class Handle_BRepBlend_AppFuncRst_1 extends Handle_BRepBlend_AppFuncRst {
    constructor();
  }

  export declare class Handle_BRepBlend_AppFuncRst_2 extends Handle_BRepBlend_AppFuncRst {
    constructor(thePtr: BRepBlend_AppFuncRst);
  }

  export declare class Handle_BRepBlend_AppFuncRst_3 extends Handle_BRepBlend_AppFuncRst {
    constructor(theHandle: Handle_BRepBlend_AppFuncRst);
  }

  export declare class Handle_BRepBlend_AppFuncRst_4 extends Handle_BRepBlend_AppFuncRst {
    constructor(theHandle: Handle_BRepBlend_AppFuncRst);
  }

export declare class Handle_BRepBlend_AppFuncRstRst {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBlend_AppFuncRstRst): void;
  get(): BRepBlend_AppFuncRstRst;
}

  export declare class Handle_BRepBlend_AppFuncRstRst_1 extends Handle_BRepBlend_AppFuncRstRst {
    constructor();
  }

  export declare class Handle_BRepBlend_AppFuncRstRst_2 extends Handle_BRepBlend_AppFuncRstRst {
    constructor(thePtr: BRepBlend_AppFuncRstRst);
  }

  export declare class Handle_BRepBlend_AppFuncRstRst_3 extends Handle_BRepBlend_AppFuncRstRst {
    constructor(theHandle: Handle_BRepBlend_AppFuncRstRst);
  }

  export declare class Handle_BRepBlend_AppFuncRstRst_4 extends Handle_BRepBlend_AppFuncRstRst {
    constructor(theHandle: Handle_BRepBlend_AppFuncRstRst);
  }

export declare class BRepBlend_SequenceOfPointOnRst extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: BRepBlend_SequenceOfPointOnRst): BRepBlend_SequenceOfPointOnRst;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: BRepBlend_PointOnRst): void;
  Append_2(theSeq: BRepBlend_SequenceOfPointOnRst): void;
  Prepend_1(theItem: BRepBlend_PointOnRst): void;
  Prepend_2(theSeq: BRepBlend_SequenceOfPointOnRst): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: BRepBlend_PointOnRst): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: BRepBlend_SequenceOfPointOnRst): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: BRepBlend_SequenceOfPointOnRst): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: BRepBlend_PointOnRst): void;
  Split(theIndex: Standard_Integer, theSeq: BRepBlend_SequenceOfPointOnRst): void;
  First(): BRepBlend_PointOnRst;
  ChangeFirst(): BRepBlend_PointOnRst;
  Last(): BRepBlend_PointOnRst;
  ChangeLast(): BRepBlend_PointOnRst;
  Value(theIndex: Standard_Integer): BRepBlend_PointOnRst;
  ChangeValue(theIndex: Standard_Integer): BRepBlend_PointOnRst;
  SetValue(theIndex: Standard_Integer, theItem: BRepBlend_PointOnRst): void;
}

  export declare class BRepBlend_SequenceOfPointOnRst_1 extends BRepBlend_SequenceOfPointOnRst {
    constructor();
  }

  export declare class BRepBlend_SequenceOfPointOnRst_2 extends BRepBlend_SequenceOfPointOnRst {
    constructor(theAllocator: any);
  }

  export declare class BRepBlend_SequenceOfPointOnRst_3 extends BRepBlend_SequenceOfPointOnRst {
    constructor(theOther: BRepBlend_SequenceOfPointOnRst);
  }

export declare class Blend_SequenceOfPoint extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: Blend_SequenceOfPoint): Blend_SequenceOfPoint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Blend_Point): void;
  Append_2(theSeq: Blend_SequenceOfPoint): void;
  Prepend_1(theItem: Blend_Point): void;
  Prepend_2(theSeq: Blend_SequenceOfPoint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Blend_Point): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Blend_SequenceOfPoint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Blend_SequenceOfPoint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Blend_Point): void;
  Split(theIndex: Standard_Integer, theSeq: Blend_SequenceOfPoint): void;
  First(): Blend_Point;
  ChangeFirst(): Blend_Point;
  Last(): Blend_Point;
  ChangeLast(): Blend_Point;
  Value(theIndex: Standard_Integer): Blend_Point;
  ChangeValue(theIndex: Standard_Integer): Blend_Point;
  SetValue(theIndex: Standard_Integer, theItem: Blend_Point): void;
}

  export declare class Blend_SequenceOfPoint_1 extends Blend_SequenceOfPoint {
    constructor();
  }

  export declare class Blend_SequenceOfPoint_2 extends Blend_SequenceOfPoint {
    constructor(theAllocator: any);
  }

  export declare class Blend_SequenceOfPoint_3 extends Blend_SequenceOfPoint {
    constructor(theOther: Blend_SequenceOfPoint);
  }

export declare class Handle_BRepBlend_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBlend_Line): void;
  get(): BRepBlend_Line;
}

  export declare class Handle_BRepBlend_Line_1 extends Handle_BRepBlend_Line {
    constructor();
  }

  export declare class Handle_BRepBlend_Line_2 extends Handle_BRepBlend_Line {
    constructor(thePtr: BRepBlend_Line);
  }

  export declare class Handle_BRepBlend_Line_3 extends Handle_BRepBlend_Line {
    constructor(theHandle: Handle_BRepBlend_Line);
  }

  export declare class Handle_BRepBlend_Line_4 extends Handle_BRepBlend_Line {
    constructor(theHandle: Handle_BRepBlend_Line);
  }

export declare class ChFiDS_SecArray1 {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: ChFiDS_CircSection): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: ChFiDS_SecArray1): ChFiDS_SecArray1;
  Move(theOther: ChFiDS_SecArray1): ChFiDS_SecArray1;
  First(): ChFiDS_CircSection;
  ChangeFirst(): ChFiDS_CircSection;
  Last(): ChFiDS_CircSection;
  ChangeLast(): ChFiDS_CircSection;
  Value(theIndex: Standard_Integer): ChFiDS_CircSection;
  ChangeValue(theIndex: Standard_Integer): ChFiDS_CircSection;
  SetValue(theIndex: Standard_Integer, theItem: ChFiDS_CircSection): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class ChFiDS_SecArray1_1 extends ChFiDS_SecArray1 {
    constructor();
  }

  export declare class ChFiDS_SecArray1_2 extends ChFiDS_SecArray1 {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class ChFiDS_SecArray1_3 extends ChFiDS_SecArray1 {
    constructor(theOther: ChFiDS_SecArray1);
  }

  export declare class ChFiDS_SecArray1_4 extends ChFiDS_SecArray1 {
    constructor(theOther: ChFiDS_SecArray1);
  }

  export declare class ChFiDS_SecArray1_5 extends ChFiDS_SecArray1 {
    constructor(theBegin: ChFiDS_CircSection, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_ChFiDS_SecHArray1 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_SecHArray1): void;
  get(): ChFiDS_SecHArray1;
}

  export declare class Handle_ChFiDS_SecHArray1_1 extends Handle_ChFiDS_SecHArray1 {
    constructor();
  }

  export declare class Handle_ChFiDS_SecHArray1_2 extends Handle_ChFiDS_SecHArray1 {
    constructor(thePtr: ChFiDS_SecHArray1);
  }

  export declare class Handle_ChFiDS_SecHArray1_3 extends Handle_ChFiDS_SecHArray1 {
    constructor(theHandle: Handle_ChFiDS_SecHArray1);
  }

  export declare class Handle_ChFiDS_SecHArray1_4 extends Handle_ChFiDS_SecHArray1 {
    constructor(theHandle: Handle_ChFiDS_SecHArray1);
  }

export declare class Handle_ChFiDS_SurfData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_SurfData): void;
  get(): ChFiDS_SurfData;
}

  export declare class Handle_ChFiDS_SurfData_1 extends Handle_ChFiDS_SurfData {
    constructor();
  }

  export declare class Handle_ChFiDS_SurfData_2 extends Handle_ChFiDS_SurfData {
    constructor(thePtr: ChFiDS_SurfData);
  }

  export declare class Handle_ChFiDS_SurfData_3 extends Handle_ChFiDS_SurfData {
    constructor(theHandle: Handle_ChFiDS_SurfData);
  }

  export declare class Handle_ChFiDS_SurfData_4 extends Handle_ChFiDS_SurfData {
    constructor(theHandle: Handle_ChFiDS_SurfData);
  }

export declare class Handle_ChFiDS_HData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_HData): void;
  get(): ChFiDS_HData;
}

  export declare class Handle_ChFiDS_HData_1 extends Handle_ChFiDS_HData {
    constructor();
  }

  export declare class Handle_ChFiDS_HData_2 extends Handle_ChFiDS_HData {
    constructor(thePtr: ChFiDS_HData);
  }

  export declare class Handle_ChFiDS_HData_3 extends Handle_ChFiDS_HData {
    constructor(theHandle: Handle_ChFiDS_HData);
  }

  export declare class Handle_ChFiDS_HData_4 extends Handle_ChFiDS_HData {
    constructor(theHandle: Handle_ChFiDS_HData);
  }

export declare class Handle_ChFiDS_Stripe {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_Stripe): void;
  get(): ChFiDS_Stripe;
}

  export declare class Handle_ChFiDS_Stripe_1 extends Handle_ChFiDS_Stripe {
    constructor();
  }

  export declare class Handle_ChFiDS_Stripe_2 extends Handle_ChFiDS_Stripe {
    constructor(thePtr: ChFiDS_Stripe);
  }

  export declare class Handle_ChFiDS_Stripe_3 extends Handle_ChFiDS_Stripe {
    constructor(theHandle: Handle_ChFiDS_Stripe);
  }

  export declare class Handle_ChFiDS_Stripe_4 extends Handle_ChFiDS_Stripe {
    constructor(theHandle: Handle_ChFiDS_Stripe);
  }

export declare class ChFiDS_IndexedDataMapOfVertexListOfStripe extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: ChFiDS_IndexedDataMapOfVertexListOfStripe): void;
  Assign(theOther: ChFiDS_IndexedDataMapOfVertexListOfStripe): ChFiDS_IndexedDataMapOfVertexListOfStripe;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Vertex, theItem: ChFiDS_ListOfStripe): Standard_Integer;
  Contains(theKey1: TopoDS_Vertex): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Vertex, theItem: ChFiDS_ListOfStripe): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Vertex): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Vertex;
  FindFromIndex(theIndex: Standard_Integer): ChFiDS_ListOfStripe;
  ChangeFromIndex(theIndex: Standard_Integer): ChFiDS_ListOfStripe;
  FindIndex(theKey1: TopoDS_Vertex): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Vertex): ChFiDS_ListOfStripe;
  ChangeFromKey(theKey1: TopoDS_Vertex): ChFiDS_ListOfStripe;
  Seek(theKey1: TopoDS_Vertex): ChFiDS_ListOfStripe;
  ChangeSeek(theKey1: TopoDS_Vertex): ChFiDS_ListOfStripe;
  FindFromKey_2(theKey1: TopoDS_Vertex, theValue: ChFiDS_ListOfStripe): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class ChFiDS_IndexedDataMapOfVertexListOfStripe_1 extends ChFiDS_IndexedDataMapOfVertexListOfStripe {
    constructor();
  }

  export declare class ChFiDS_IndexedDataMapOfVertexListOfStripe_2 extends ChFiDS_IndexedDataMapOfVertexListOfStripe {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class ChFiDS_IndexedDataMapOfVertexListOfStripe_3 extends ChFiDS_IndexedDataMapOfVertexListOfStripe {
    constructor(theOther: ChFiDS_IndexedDataMapOfVertexListOfStripe);
  }

export declare class ChFiDS_Regularities extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: ChFiDS_Regularities): ChFiDS_Regularities;
  Clear(theAllocator: any): void;
  First_1(): ChFiDS_Regul;
  First_2(): ChFiDS_Regul;
  Last_1(): ChFiDS_Regul;
  Last_2(): ChFiDS_Regul;
  Append_1(theItem: ChFiDS_Regul): ChFiDS_Regul;
  Append_3(theOther: ChFiDS_Regularities): void;
  Prepend_1(theItem: ChFiDS_Regul): ChFiDS_Regul;
  Prepend_2(theOther: ChFiDS_Regularities): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class ChFiDS_Regularities_1 extends ChFiDS_Regularities {
    constructor();
  }

  export declare class ChFiDS_Regularities_2 extends ChFiDS_Regularities {
    constructor(theAllocator: any);
  }

  export declare class ChFiDS_Regularities_3 extends ChFiDS_Regularities {
    constructor(theOther: ChFiDS_Regularities);
  }

export declare class Handle_ChFiDS_HElSpine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_HElSpine): void;
  get(): ChFiDS_HElSpine;
}

  export declare class Handle_ChFiDS_HElSpine_1 extends Handle_ChFiDS_HElSpine {
    constructor();
  }

  export declare class Handle_ChFiDS_HElSpine_2 extends Handle_ChFiDS_HElSpine {
    constructor(thePtr: ChFiDS_HElSpine);
  }

  export declare class Handle_ChFiDS_HElSpine_3 extends Handle_ChFiDS_HElSpine {
    constructor(theHandle: Handle_ChFiDS_HElSpine);
  }

  export declare class Handle_ChFiDS_HElSpine_4 extends Handle_ChFiDS_HElSpine {
    constructor(theHandle: Handle_ChFiDS_HElSpine);
  }

export declare class Handle_ChFiDS_Spine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_Spine): void;
  get(): ChFiDS_Spine;
}

  export declare class Handle_ChFiDS_Spine_1 extends Handle_ChFiDS_Spine {
    constructor();
  }

  export declare class Handle_ChFiDS_Spine_2 extends Handle_ChFiDS_Spine {
    constructor(thePtr: ChFiDS_Spine);
  }

  export declare class Handle_ChFiDS_Spine_3 extends Handle_ChFiDS_Spine {
    constructor(theHandle: Handle_ChFiDS_Spine);
  }

  export declare class Handle_ChFiDS_Spine_4 extends Handle_ChFiDS_Spine {
    constructor(theHandle: Handle_ChFiDS_Spine);
  }

export declare class Handle_ChFiDS_ChamfSpine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_ChamfSpine): void;
  get(): ChFiDS_ChamfSpine;
}

  export declare class Handle_ChFiDS_ChamfSpine_1 extends Handle_ChFiDS_ChamfSpine {
    constructor();
  }

  export declare class Handle_ChFiDS_ChamfSpine_2 extends Handle_ChFiDS_ChamfSpine {
    constructor(thePtr: ChFiDS_ChamfSpine);
  }

  export declare class Handle_ChFiDS_ChamfSpine_3 extends Handle_ChFiDS_ChamfSpine {
    constructor(theHandle: Handle_ChFiDS_ChamfSpine);
  }

  export declare class Handle_ChFiDS_ChamfSpine_4 extends Handle_ChFiDS_ChamfSpine {
    constructor(theHandle: Handle_ChFiDS_ChamfSpine);
  }

export declare class Handle_ChFiDS_FilSpine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ChFiDS_FilSpine): void;
  get(): ChFiDS_FilSpine;
}

  export declare class Handle_ChFiDS_FilSpine_1 extends Handle_ChFiDS_FilSpine {
    constructor();
  }

  export declare class Handle_ChFiDS_FilSpine_2 extends Handle_ChFiDS_FilSpine {
    constructor(thePtr: ChFiDS_FilSpine);
  }

  export declare class Handle_ChFiDS_FilSpine_3 extends Handle_ChFiDS_FilSpine {
    constructor(theHandle: Handle_ChFiDS_FilSpine);
  }

  export declare class Handle_ChFiDS_FilSpine_4 extends Handle_ChFiDS_FilSpine {
    constructor(theHandle: Handle_ChFiDS_FilSpine);
  }

export declare type BlendFunc_SectionShape = {
  BlendFunc_Rational: {};
  BlendFunc_QuasiAngular: {};
  BlendFunc_Polynomial: {};
  BlendFunc_Linear: {};
}

export declare type Blend_Status = {
  Blend_StepTooLarge: {};
  Blend_StepTooSmall: {};
  Blend_Backward: {};
  Blend_SamePoints: {};
  Blend_OnRst1: {};
  Blend_OnRst2: {};
  Blend_OnRst12: {};
  Blend_OK: {};
}

export declare type Blend_DecrochStatus = {
  Blend_NoDecroch: {};
  Blend_DecrochRst1: {};
  Blend_DecrochRst2: {};
  Blend_DecrochBoth: {};
}

export declare type ChFiDS_ErrorStatus = {
  ChFiDS_Ok: {};
  ChFiDS_Error: {};
  ChFiDS_WalkingFailure: {};
  ChFiDS_StartsolFailure: {};
  ChFiDS_TwistedSurface: {};
}

export declare type ChFiDS_ChamfMethod = {
  ChFiDS_Sym: {};
  ChFiDS_TwoDist: {};
  ChFiDS_DistAngle: {};
}

export declare type ChFiDS_ChamfMode = {
  ChFiDS_ClassicChamfer: {};
  ChFiDS_ConstThroatChamfer: {};
  ChFiDS_ConstThroatWithPenetrationChamfer: {};
}

export declare type ChFi3d_FilletShape = {
  ChFi3d_Rational: {};
  ChFi3d_QuasiAngular: {};
  ChFi3d_Polynomial: {};
}

export declare type ChFi2d_ConstructionError = {
  ChFi2d_NotPlanar: {};
  ChFi2d_NoFace: {};
  ChFi2d_InitialisationError: {};
  ChFi2d_ParametersError: {};
  ChFi2d_Ready: {};
  ChFi2d_IsDone: {};
  ChFi2d_ComputationError: {};
  ChFi2d_ConnexionError: {};
  ChFi2d_TangencyError: {};
  ChFi2d_FirstEdgeDegenerated: {};
  ChFi2d_LastEdgeDegenerated: {};
  ChFi2d_BothEdgesDegenerated: {};
  ChFi2d_NotAuthorized: {};
}

export declare type ChFiDS_TypeOfConcavity = {
  ChFiDS_Concave: {};
  ChFiDS_Convex: {};
  ChFiDS_Tangential: {};
  ChFiDS_FreeBound: {};
  ChFiDS_Other: {};
}

export declare type ChFiDS_State = {
  ChFiDS_OnSame: {};
  ChFiDS_OnDiff: {};
  ChFiDS_AllSame: {};
  ChFiDS_BreakPoint: {};
  ChFiDS_FreeBoundary: {};
  ChFiDS_Closed: {};
  ChFiDS_Tangent: {};
}

export declare type FilletSurf_StatusType = {
  FilletSurf_TwoExtremityOnEdge: {};
  FilletSurf_OneExtremityOnEdge: {};
  FilletSurf_NoExtremityOnEdge: {};
}

export declare type FilletSurf_StatusDone = {
  FilletSurf_IsOk: {};
  FilletSurf_IsNotOk: {};
  FilletSurf_IsPartial: {};
}

export declare type FilletSurf_ErrorTypeStatus = {
  FilletSurf_EmptyList: {};
  FilletSurf_EdgeNotG1: {};
  FilletSurf_FacesNotG1: {};
  FilletSurf_EdgeNotOnShape: {};
  FilletSurf_NotSharpEdge: {};
  FilletSurf_PbFilletCompute: {};
}

export declare type TKFilletLib = {
  Blend_Point_1: typeof Blend_Point_1;
  Blend_Point_2: typeof Blend_Point_2;
  Blend_Point_3: typeof Blend_Point_3;
  Blend_Point_4: typeof Blend_Point_4;
  Blend_Point_5: typeof Blend_Point_5;
  Blend_Point_6: typeof Blend_Point_6;
  Blend_Point_7: typeof Blend_Point_7;
  Blend_Point_8: typeof Blend_Point_8;
  Blend_Point_9: typeof Blend_Point_9;
  BRepBlend_AppFunc: typeof BRepBlend_AppFunc;
  BRepBlend_AppFuncRst: typeof BRepBlend_AppFuncRst;
  BRepBlend_AppFuncRstRst: typeof BRepBlend_AppFuncRstRst;
  BRepBlend_AppSurf_1: typeof BRepBlend_AppSurf_1;
  BRepBlend_AppSurf_2: typeof BRepBlend_AppSurf_2;
  BRepBlend_AppSurface: typeof BRepBlend_AppSurface;
  BlendFunc_CSCircular: typeof BlendFunc_CSCircular;
  BlendFunc_CSConstRad: typeof BlendFunc_CSConstRad;
  BRepBlend_PointOnRst_1: typeof BRepBlend_PointOnRst_1;
  BRepBlend_PointOnRst_2: typeof BRepBlend_PointOnRst_2;
  BRepBlend_CSWalking: typeof BRepBlend_CSWalking;
  BlendFunc_ChAsym: typeof BlendFunc_ChAsym;
  BlendFunc_ChAsymInv: typeof BlendFunc_ChAsymInv;
  BlendFunc_Corde: typeof BlendFunc_Corde;
  BlendFunc_ChamfInv: typeof BlendFunc_ChamfInv;
  BlendFunc_Chamfer: typeof BlendFunc_Chamfer;
  BlendFunc_Tensor: typeof BlendFunc_Tensor;
  BlendFunc_ConstRad: typeof BlendFunc_ConstRad;
  BlendFunc_ConstRadInv: typeof BlendFunc_ConstRadInv;
  BlendFunc_ConstThroat: typeof BlendFunc_ConstThroat;
  BlendFunc_ConstThroatInv: typeof BlendFunc_ConstThroatInv;
  BlendFunc_ConstThroatWithPenetration: typeof BlendFunc_ConstThroatWithPenetration;
  BlendFunc_ConstThroatWithPenetrationInv: typeof BlendFunc_ConstThroatWithPenetrationInv;
  BRepBlend_CurvPointRadInv: typeof BRepBlend_CurvPointRadInv;
  BlendFunc_EvolRad: typeof BlendFunc_EvolRad;
  BlendFunc_EvolRadInv: typeof BlendFunc_EvolRadInv;
  BRepBlend_Extremity_1: typeof BRepBlend_Extremity_1;
  BRepBlend_Extremity_2: typeof BRepBlend_Extremity_2;
  BRepBlend_Extremity_3: typeof BRepBlend_Extremity_3;
  BRepBlend_Extremity_4: typeof BRepBlend_Extremity_4;
  BRepBlend_Line: typeof BRepBlend_Line;
  BRepBlend_RstRstConstRad: typeof BRepBlend_RstRstConstRad;
  BRepBlend_RstRstEvolRad: typeof BRepBlend_RstRstEvolRad;
  BRepBlend_RstRstLineBuilder: typeof BRepBlend_RstRstLineBuilder;
  BlendFunc_Ruled: typeof BlendFunc_Ruled;
  BlendFunc_RuledInv: typeof BlendFunc_RuledInv;
  BRepBlend_SurfCurvConstRadInv: typeof BRepBlend_SurfCurvConstRadInv;
  BRepBlend_SurfCurvEvolRadInv: typeof BRepBlend_SurfCurvEvolRadInv;
  BRepBlend_SurfPointConstRadInv: typeof BRepBlend_SurfPointConstRadInv;
  BRepBlend_SurfPointEvolRadInv: typeof BRepBlend_SurfPointEvolRadInv;
  BRepBlend_SurfRstConstRad: typeof BRepBlend_SurfRstConstRad;
  BRepBlend_SurfRstEvolRad: typeof BRepBlend_SurfRstEvolRad;
  BRepBlend_SurfRstLineBuilder: typeof BRepBlend_SurfRstLineBuilder;
  BRepBlend_Walking: typeof BRepBlend_Walking;
  ChFiDS_CircSection: typeof ChFiDS_CircSection;
  ChFiDS_Map: typeof ChFiDS_Map;
  ChFiDS_CommonPoint: typeof ChFiDS_CommonPoint;
  ChFiDS_FaceInterference: typeof ChFiDS_FaceInterference;
  ChFiDS_SurfData: typeof ChFiDS_SurfData;
  ChFiDS_Stripe: typeof ChFiDS_Stripe;
  ChFiDS_StripeMap: typeof ChFiDS_StripeMap;
  ChFiDS_Regul: typeof ChFiDS_Regul;
  ChFi3d_ChBuilder: typeof ChFi3d_ChBuilder;
  BRepFilletAPI_MakeChamfer: typeof BRepFilletAPI_MakeChamfer;
  ChFi3d_FilBuilder: typeof ChFi3d_FilBuilder;
  BRepFilletAPI_MakeFillet: typeof BRepFilletAPI_MakeFillet;
  ChFi2d_Builder_1: typeof ChFi2d_Builder_1;
  ChFi2d_Builder_2: typeof ChFi2d_Builder_2;
  BRepFilletAPI_MakeFillet2d_1: typeof BRepFilletAPI_MakeFillet2d_1;
  BRepFilletAPI_MakeFillet2d_2: typeof BRepFilletAPI_MakeFillet2d_2;
  ChFi2d_AnaFilletAlgo_1: typeof ChFi2d_AnaFilletAlgo_1;
  ChFi2d_AnaFilletAlgo_2: typeof ChFi2d_AnaFilletAlgo_2;
  ChFi2d_AnaFilletAlgo_3: typeof ChFi2d_AnaFilletAlgo_3;
  ChFi2d_ChamferAPI_1: typeof ChFi2d_ChamferAPI_1;
  ChFi2d_ChamferAPI_2: typeof ChFi2d_ChamferAPI_2;
  ChFi2d_ChamferAPI_3: typeof ChFi2d_ChamferAPI_3;
  ChFi2d_FilletAlgo_1: typeof ChFi2d_FilletAlgo_1;
  ChFi2d_FilletAlgo_2: typeof ChFi2d_FilletAlgo_2;
  ChFi2d_FilletAlgo_3: typeof ChFi2d_FilletAlgo_3;
  FilletPoint: typeof FilletPoint;
  ChFi2d_FilletAPI_1: typeof ChFi2d_FilletAPI_1;
  ChFi2d_FilletAPI_2: typeof ChFi2d_FilletAPI_2;
  ChFi2d_FilletAPI_3: typeof ChFi2d_FilletAPI_3;
  ChFiDS_ElSpine: typeof ChFiDS_ElSpine;
  ChFiDS_HElSpine_1: typeof ChFiDS_HElSpine_1;
  ChFiDS_HElSpine_2: typeof ChFiDS_HElSpine_2;
  ChFiDS_Spine_1: typeof ChFiDS_Spine_1;
  ChFiDS_Spine_2: typeof ChFiDS_Spine_2;
  ChFi3d_SearchSing: typeof ChFi3d_SearchSing;
  ChFiDS_ChamfSpine_1: typeof ChFiDS_ChamfSpine_1;
  ChFiDS_ChamfSpine_2: typeof ChFiDS_ChamfSpine_2;
  ChFiDS_FilSpine_1: typeof ChFiDS_FilSpine_1;
  ChFiDS_FilSpine_2: typeof ChFiDS_FilSpine_2;
  FilletSurf_InternalBuilder: typeof FilletSurf_InternalBuilder;
  FilletSurf_Builder: typeof FilletSurf_Builder;
  Handle_BRepBlend_AppFuncRoot_1: typeof Handle_BRepBlend_AppFuncRoot_1;
  Handle_BRepBlend_AppFuncRoot_2: typeof Handle_BRepBlend_AppFuncRoot_2;
  Handle_BRepBlend_AppFuncRoot_3: typeof Handle_BRepBlend_AppFuncRoot_3;
  Handle_BRepBlend_AppFuncRoot_4: typeof Handle_BRepBlend_AppFuncRoot_4;
  Handle_BRepBlend_AppFunc_1: typeof Handle_BRepBlend_AppFunc_1;
  Handle_BRepBlend_AppFunc_2: typeof Handle_BRepBlend_AppFunc_2;
  Handle_BRepBlend_AppFunc_3: typeof Handle_BRepBlend_AppFunc_3;
  Handle_BRepBlend_AppFunc_4: typeof Handle_BRepBlend_AppFunc_4;
  Handle_BRepBlend_AppFuncRst_1: typeof Handle_BRepBlend_AppFuncRst_1;
  Handle_BRepBlend_AppFuncRst_2: typeof Handle_BRepBlend_AppFuncRst_2;
  Handle_BRepBlend_AppFuncRst_3: typeof Handle_BRepBlend_AppFuncRst_3;
  Handle_BRepBlend_AppFuncRst_4: typeof Handle_BRepBlend_AppFuncRst_4;
  Handle_BRepBlend_AppFuncRstRst_1: typeof Handle_BRepBlend_AppFuncRstRst_1;
  Handle_BRepBlend_AppFuncRstRst_2: typeof Handle_BRepBlend_AppFuncRstRst_2;
  Handle_BRepBlend_AppFuncRstRst_3: typeof Handle_BRepBlend_AppFuncRstRst_3;
  Handle_BRepBlend_AppFuncRstRst_4: typeof Handle_BRepBlend_AppFuncRstRst_4;
  BRepBlend_SequenceOfPointOnRst_1: typeof BRepBlend_SequenceOfPointOnRst_1;
  BRepBlend_SequenceOfPointOnRst_2: typeof BRepBlend_SequenceOfPointOnRst_2;
  BRepBlend_SequenceOfPointOnRst_3: typeof BRepBlend_SequenceOfPointOnRst_3;
  Blend_SequenceOfPoint_1: typeof Blend_SequenceOfPoint_1;
  Blend_SequenceOfPoint_2: typeof Blend_SequenceOfPoint_2;
  Blend_SequenceOfPoint_3: typeof Blend_SequenceOfPoint_3;
  Handle_BRepBlend_Line_1: typeof Handle_BRepBlend_Line_1;
  Handle_BRepBlend_Line_2: typeof Handle_BRepBlend_Line_2;
  Handle_BRepBlend_Line_3: typeof Handle_BRepBlend_Line_3;
  Handle_BRepBlend_Line_4: typeof Handle_BRepBlend_Line_4;
  ChFiDS_SecArray1_1: typeof ChFiDS_SecArray1_1;
  ChFiDS_SecArray1_2: typeof ChFiDS_SecArray1_2;
  ChFiDS_SecArray1_3: typeof ChFiDS_SecArray1_3;
  ChFiDS_SecArray1_4: typeof ChFiDS_SecArray1_4;
  ChFiDS_SecArray1_5: typeof ChFiDS_SecArray1_5;
  Handle_ChFiDS_SecHArray1_1: typeof Handle_ChFiDS_SecHArray1_1;
  Handle_ChFiDS_SecHArray1_2: typeof Handle_ChFiDS_SecHArray1_2;
  Handle_ChFiDS_SecHArray1_3: typeof Handle_ChFiDS_SecHArray1_3;
  Handle_ChFiDS_SecHArray1_4: typeof Handle_ChFiDS_SecHArray1_4;
  Handle_ChFiDS_SurfData_1: typeof Handle_ChFiDS_SurfData_1;
  Handle_ChFiDS_SurfData_2: typeof Handle_ChFiDS_SurfData_2;
  Handle_ChFiDS_SurfData_3: typeof Handle_ChFiDS_SurfData_3;
  Handle_ChFiDS_SurfData_4: typeof Handle_ChFiDS_SurfData_4;
  Handle_ChFiDS_HData_1: typeof Handle_ChFiDS_HData_1;
  Handle_ChFiDS_HData_2: typeof Handle_ChFiDS_HData_2;
  Handle_ChFiDS_HData_3: typeof Handle_ChFiDS_HData_3;
  Handle_ChFiDS_HData_4: typeof Handle_ChFiDS_HData_4;
  Handle_ChFiDS_Stripe_1: typeof Handle_ChFiDS_Stripe_1;
  Handle_ChFiDS_Stripe_2: typeof Handle_ChFiDS_Stripe_2;
  Handle_ChFiDS_Stripe_3: typeof Handle_ChFiDS_Stripe_3;
  Handle_ChFiDS_Stripe_4: typeof Handle_ChFiDS_Stripe_4;
  ChFiDS_IndexedDataMapOfVertexListOfStripe_1: typeof ChFiDS_IndexedDataMapOfVertexListOfStripe_1;
  ChFiDS_IndexedDataMapOfVertexListOfStripe_2: typeof ChFiDS_IndexedDataMapOfVertexListOfStripe_2;
  ChFiDS_IndexedDataMapOfVertexListOfStripe_3: typeof ChFiDS_IndexedDataMapOfVertexListOfStripe_3;
  ChFiDS_Regularities_1: typeof ChFiDS_Regularities_1;
  ChFiDS_Regularities_2: typeof ChFiDS_Regularities_2;
  ChFiDS_Regularities_3: typeof ChFiDS_Regularities_3;
  Handle_ChFiDS_HElSpine_1: typeof Handle_ChFiDS_HElSpine_1;
  Handle_ChFiDS_HElSpine_2: typeof Handle_ChFiDS_HElSpine_2;
  Handle_ChFiDS_HElSpine_3: typeof Handle_ChFiDS_HElSpine_3;
  Handle_ChFiDS_HElSpine_4: typeof Handle_ChFiDS_HElSpine_4;
  Handle_ChFiDS_Spine_1: typeof Handle_ChFiDS_Spine_1;
  Handle_ChFiDS_Spine_2: typeof Handle_ChFiDS_Spine_2;
  Handle_ChFiDS_Spine_3: typeof Handle_ChFiDS_Spine_3;
  Handle_ChFiDS_Spine_4: typeof Handle_ChFiDS_Spine_4;
  Handle_ChFiDS_ChamfSpine_1: typeof Handle_ChFiDS_ChamfSpine_1;
  Handle_ChFiDS_ChamfSpine_2: typeof Handle_ChFiDS_ChamfSpine_2;
  Handle_ChFiDS_ChamfSpine_3: typeof Handle_ChFiDS_ChamfSpine_3;
  Handle_ChFiDS_ChamfSpine_4: typeof Handle_ChFiDS_ChamfSpine_4;
  Handle_ChFiDS_FilSpine_1: typeof Handle_ChFiDS_FilSpine_1;
  Handle_ChFiDS_FilSpine_2: typeof Handle_ChFiDS_FilSpine_2;
  Handle_ChFiDS_FilSpine_3: typeof Handle_ChFiDS_FilSpine_3;
  Handle_ChFiDS_FilSpine_4: typeof Handle_ChFiDS_FilSpine_4;
  BlendFunc_SectionShape: typeof BlendFunc_SectionShape;
  Blend_Status: typeof Blend_Status;
  Blend_DecrochStatus: typeof Blend_DecrochStatus;
  ChFiDS_ErrorStatus: typeof ChFiDS_ErrorStatus;
  ChFiDS_ChamfMethod: typeof ChFiDS_ChamfMethod;
  ChFiDS_ChamfMode: typeof ChFiDS_ChamfMode;
  ChFi3d_FilletShape: typeof ChFi3d_FilletShape;
  ChFi2d_ConstructionError: typeof ChFi2d_ConstructionError;
  ChFiDS_TypeOfConcavity: typeof ChFiDS_TypeOfConcavity;
  ChFiDS_State: typeof ChFiDS_State;
  FilletSurf_StatusType: typeof FilletSurf_StatusType;
  FilletSurf_StatusDone: typeof FilletSurf_StatusDone;
  FilletSurf_ErrorTypeStatus: typeof FilletSurf_ErrorTypeStatus;
};
