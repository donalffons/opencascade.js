declare const libName = "./modules/TKTopAlgo.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BRepBuilderAPI_Command {
  IsDone(): Standard_Boolean;
  Check(): void;
}

export declare class BRepBuilderAPI_MakeShape extends BRepBuilderAPI_Command {
  Build(): void;
  Shape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
}

export declare class BRepApprox_TheComputeLineOfApprox {
  Interpol(Line: BRepApprox_TheMultiLineOfApprox): void;
  Init(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean): void;
  Perform(Line: BRepApprox_TheMultiLineOfApprox): void;
  SetParameters(ThePar: math_Vector): void;
  SetKnots(Knots: TColStd_Array1OfReal): void;
  SetKnotsAndMultiplicities(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger): void;
  SetDegrees(degreemin: Standard_Integer, degreemax: Standard_Integer): void;
  SetTolerances(Tolerance3d: Standard_Real, Tolerance2d: Standard_Real): void;
  SetContinuity(C: Standard_Integer): void;
  SetConstraints(firstC: AppParCurves_Constraint, lastC: AppParCurves_Constraint): void;
  SetPeriodic(thePeriodic: Standard_Boolean): void;
  IsAllApproximated(): Standard_Boolean;
  IsToleranceReached(): Standard_Boolean;
  Error(tol3d: Standard_Real, tol2d: Standard_Real): void;
  Value(): AppParCurves_MultiBSpCurve;
  ChangeValue(): AppParCurves_MultiBSpCurve;
  Parameters_1(): TColStd_Array1OfReal;
}

  export declare class BRepApprox_TheComputeLineOfApprox_1 extends BRepApprox_TheComputeLineOfApprox {
    constructor(Line: BRepApprox_TheMultiLineOfApprox, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

  export declare class BRepApprox_TheComputeLineOfApprox_2 extends BRepApprox_TheComputeLineOfApprox {
    constructor(Line: BRepApprox_TheMultiLineOfApprox, Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class BRepApprox_TheComputeLineOfApprox_3 extends BRepApprox_TheComputeLineOfApprox {
    constructor(Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class BRepApprox_TheComputeLineOfApprox_4 extends BRepApprox_TheComputeLineOfApprox {
    constructor(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

export declare class BRepApprox_TheComputeLineBezierOfApprox {
  Init(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean): void;
  Perform(Line: BRepApprox_TheMultiLineOfApprox): void;
  SetDegrees(degreemin: Standard_Integer, degreemax: Standard_Integer): void;
  SetTolerances(Tolerance3d: Standard_Real, Tolerance2d: Standard_Real): void;
  SetConstraints(firstC: AppParCurves_Constraint, lastC: AppParCurves_Constraint): void;
  IsAllApproximated(): Standard_Boolean;
  IsToleranceReached(): Standard_Boolean;
  Error(Index: Standard_Integer, tol3d: Standard_Real, tol2d: Standard_Real): void;
  NbMultiCurves(): Standard_Integer;
  Value(Index: Standard_Integer): AppParCurves_MultiCurve;
  ChangeValue(Index: Standard_Integer): AppParCurves_MultiCurve;
  SplineValue(): AppParCurves_MultiBSpCurve;
  Parametrization(): Approx_ParametrizationType;
  Parameters_1(Index: Standard_Integer): TColStd_Array1OfReal;
}

  export declare class BRepApprox_TheComputeLineBezierOfApprox_1 extends BRepApprox_TheComputeLineBezierOfApprox {
    constructor(Line: BRepApprox_TheMultiLineOfApprox, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

  export declare class BRepApprox_TheComputeLineBezierOfApprox_2 extends BRepApprox_TheComputeLineBezierOfApprox {
    constructor(Line: BRepApprox_TheMultiLineOfApprox, Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class BRepApprox_TheComputeLineBezierOfApprox_3 extends BRepApprox_TheComputeLineBezierOfApprox {
    constructor(Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class BRepApprox_TheComputeLineBezierOfApprox_4 extends BRepApprox_TheComputeLineBezierOfApprox {
    constructor(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

export declare class BRepApprox_ApproxLine extends Standard_Transient {
  NbPnts(): Standard_Integer;
  Point(Index: Standard_Integer): IntSurf_PntOn2S;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepApprox_ApproxLine_1 extends BRepApprox_ApproxLine {
    constructor(CurveXYZ: any, CurveUV1: any, CurveUV2: any);
  }

  export declare class BRepApprox_ApproxLine_2 extends BRepApprox_ApproxLine {
    constructor(lin: any, theTang: Standard_Boolean);
  }

export declare class BRepApprox_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfApprox extends math_BFGS {
  constructor(F: math_MultipleVarFunctionWithGradient, StartingPoint: math_Vector, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, Eps: Standard_Real, NbIterations: Standard_Integer)
  IsSolutionReached(F: math_MultipleVarFunctionWithGradient): Standard_Boolean;
}

export declare class BRepApprox_TheMultiLineOfApprox {
  FirstPoint(): Standard_Integer;
  LastPoint(): Standard_Integer;
  NbP2d(): Standard_Integer;
  NbP3d(): Standard_Integer;
  WhatStatus(): Approx_Status;
  Value_1(MPointIndex: Standard_Integer, tabPt: TColgp_Array1OfPnt): void;
  Value_2(MPointIndex: Standard_Integer, tabPt2d: TColgp_Array1OfPnt2d): void;
  Value_3(MPointIndex: Standard_Integer, tabPt: TColgp_Array1OfPnt, tabPt2d: TColgp_Array1OfPnt2d): void;
  Tangency_1(MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec): Standard_Boolean;
  Tangency_2(MPointIndex: Standard_Integer, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Tangency_3(MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  MakeMLBetween(Low: Standard_Integer, High: Standard_Integer, NbPointsToInsert: Standard_Integer): BRepApprox_TheMultiLineOfApprox;
  MakeMLOneMorePoint(Low: Standard_Integer, High: Standard_Integer, indbad: Standard_Integer, OtherLine: BRepApprox_TheMultiLineOfApprox): Standard_Boolean;
  Dump(): void;
}

  export declare class BRepApprox_TheMultiLineOfApprox_1 extends BRepApprox_TheMultiLineOfApprox {
    constructor();
  }

  export declare class BRepApprox_TheMultiLineOfApprox_2 extends BRepApprox_TheMultiLineOfApprox {
    constructor(line: any, PtrSvSurfaces: Standard_Address, NbP3d: Standard_Integer, NbP2d: Standard_Integer, ApproxU1V1: Standard_Boolean, ApproxU2V2: Standard_Boolean, xo: Standard_Real, yo: Standard_Real, zo: Standard_Real, u1o: Standard_Real, v1o: Standard_Real, u2o: Standard_Real, v2o: Standard_Real, P2DOnFirst: Standard_Boolean, IndMin: Standard_Integer, IndMax: Standard_Integer);
  }

  export declare class BRepApprox_TheMultiLineOfApprox_3 extends BRepApprox_TheMultiLineOfApprox {
    constructor(line: any, NbP3d: Standard_Integer, NbP2d: Standard_Integer, ApproxU1V1: Standard_Boolean, ApproxU2V2: Standard_Boolean, xo: Standard_Real, yo: Standard_Real, zo: Standard_Real, u1o: Standard_Real, v1o: Standard_Real, u2o: Standard_Real, v2o: Standard_Real, P2DOnFirst: Standard_Boolean, IndMin: Standard_Integer, IndMax: Standard_Integer);
  }

export declare class BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox {
  Perform_1(Parameters: math_Vector): void;
  Perform_2(Parameters: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  Perform_3(Parameters: math_Vector, V1t: math_Vector, V2t: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  Perform_4(Parameters: math_Vector, V1t: math_Vector, V2t: math_Vector, V1c: math_Vector, V2c: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  BezierValue(): AppParCurves_MultiCurve;
  BSplineValue(): AppParCurves_MultiBSpCurve;
  FunctionMatrix(): math_Matrix;
  DerivativeFunctionMatrix(): math_Matrix;
  ErrorGradient(Grad: math_Vector, F: Standard_Real, MaxE3d: Standard_Real, MaxE2d: Standard_Real): void;
  Distance(): math_Matrix;
  Error(F: Standard_Real, MaxE3d: Standard_Real, MaxE2d: Standard_Real): void;
  FirstLambda(): Standard_Real;
  LastLambda(): Standard_Real;
  Points(): math_Matrix;
  Poles(): math_Matrix;
  KIndex(): math_IntegerVector;
}

  export declare class BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_1 extends BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_2 extends BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_3 extends BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_4 extends BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

export declare class BRepApprox_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfApprox extends math_MultipleVarFunctionWithGradient {
  constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, NbPol: Standard_Integer)
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
  NewParameters(): math_Vector;
  CurveValue(): AppParCurves_MultiBSpCurve;
  Error(IPoint: Standard_Integer, CurveIndex: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  FunctionMatrix(): math_Matrix;
  DerivativeFunctionMatrix(): math_Matrix;
  Index(): math_IntegerVector;
  FirstConstraint(TheConstraints: any, FirstPoint: Standard_Integer): AppParCurves_Constraint;
  LastConstraint(TheConstraints: any, LastPoint: Standard_Integer): AppParCurves_Constraint;
  SetFirstLambda(l1: Standard_Real): void;
  SetLastLambda(l2: Standard_Real): void;
}

export declare class BRepApprox_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfApprox extends math_BFGS {
  constructor(F: math_MultipleVarFunctionWithGradient, StartingPoint: math_Vector, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, Eps: Standard_Real, NbIterations: Standard_Integer)
  IsSolutionReached(F: math_MultipleVarFunctionWithGradient): Standard_Boolean;
}

export declare class BRepApprox_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfApprox extends math_BFGS {
  constructor(F: math_MultipleVarFunctionWithGradient, StartingPoint: math_Vector, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, Eps: Standard_Real, NbIterations: Standard_Integer)
  IsSolutionReached(F: math_MultipleVarFunctionWithGradient): Standard_Boolean;
}

export declare class BRepApprox_MyBSplGradientOfTheComputeLineOfApprox {
  IsDone(): Standard_Boolean;
  Value(): AppParCurves_MultiBSpCurve;
  Error(Index: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  AverageError(): Standard_Real;
}

  export declare class BRepApprox_MyBSplGradientOfTheComputeLineOfApprox_1 extends BRepApprox_MyBSplGradientOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer);
  }

  export declare class BRepApprox_MyBSplGradientOfTheComputeLineOfApprox_2 extends BRepApprox_MyBSplGradientOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer, lambda1: Standard_Real, lambda2: Standard_Real);
  }

export declare class BRepApprox_MyGradientOfTheComputeLineBezierOfApprox {
  constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer)
  IsDone(): Standard_Boolean;
  Value(): AppParCurves_MultiCurve;
  Error(Index: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  AverageError(): Standard_Real;
}

export declare class BRepApprox_MyGradientbisOfTheComputeLineOfApprox {
  constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer)
  IsDone(): Standard_Boolean;
  Value(): AppParCurves_MultiCurve;
  Error(Index: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  AverageError(): Standard_Real;
}

export declare class BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox {
  Perform_1(Parameters: math_Vector): void;
  Perform_2(Parameters: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  Perform_3(Parameters: math_Vector, V1t: math_Vector, V2t: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  Perform_4(Parameters: math_Vector, V1t: math_Vector, V2t: math_Vector, V1c: math_Vector, V2c: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  BezierValue(): AppParCurves_MultiCurve;
  BSplineValue(): AppParCurves_MultiBSpCurve;
  FunctionMatrix(): math_Matrix;
  DerivativeFunctionMatrix(): math_Matrix;
  ErrorGradient(Grad: math_Vector, F: Standard_Real, MaxE3d: Standard_Real, MaxE2d: Standard_Real): void;
  Distance(): math_Matrix;
  Error(F: Standard_Real, MaxE3d: Standard_Real, MaxE2d: Standard_Real): void;
  FirstLambda(): Standard_Real;
  LastLambda(): Standard_Real;
  Points(): math_Matrix;
  Poles(): math_Matrix;
  KIndex(): math_IntegerVector;
}

  export declare class BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_1 extends BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_2 extends BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_3 extends BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_4 extends BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

export declare class BRepApprox_ParFunctionOfMyGradientOfTheComputeLineBezierOfApprox extends math_MultipleVarFunctionWithGradient {
  constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer)
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
  NewParameters(): math_Vector;
  CurveValue(): AppParCurves_MultiCurve;
  Error(IPoint: Standard_Integer, CurveIndex: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  FirstConstraint(TheConstraints: any, FirstPoint: Standard_Integer): AppParCurves_Constraint;
  LastConstraint(TheConstraints: any, LastPoint: Standard_Integer): AppParCurves_Constraint;
}

export declare class BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox {
  Perform_1(Parameters: math_Vector): void;
  Perform_2(Parameters: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  Perform_3(Parameters: math_Vector, V1t: math_Vector, V2t: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  Perform_4(Parameters: math_Vector, V1t: math_Vector, V2t: math_Vector, V1c: math_Vector, V2c: math_Vector, l1: Standard_Real, l2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  BezierValue(): AppParCurves_MultiCurve;
  BSplineValue(): AppParCurves_MultiBSpCurve;
  FunctionMatrix(): math_Matrix;
  DerivativeFunctionMatrix(): math_Matrix;
  ErrorGradient(Grad: math_Vector, F: Standard_Real, MaxE3d: Standard_Real, MaxE2d: Standard_Real): void;
  Distance(): math_Matrix;
  Error(F: Standard_Real, MaxE3d: Standard_Real, MaxE2d: Standard_Real): void;
  FirstLambda(): Standard_Real;
  LastLambda(): Standard_Real;
  Points(): math_Matrix;
  Poles(): math_Matrix;
  KIndex(): math_IntegerVector;
}

  export declare class BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_1 extends BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_2 extends BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_3 extends BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_4 extends BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox {
    constructor(SSP: BRepApprox_TheMultiLineOfApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

export declare class BRepApprox_ParFunctionOfMyGradientbisOfTheComputeLineOfApprox extends math_MultipleVarFunctionWithGradient {
  constructor(SSP: BRepApprox_TheMultiLineOfApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer)
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
  NewParameters(): math_Vector;
  CurveValue(): AppParCurves_MultiCurve;
  Error(IPoint: Standard_Integer, CurveIndex: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  FirstConstraint(TheConstraints: any, FirstPoint: Standard_Integer): AppParCurves_Constraint;
  LastConstraint(TheConstraints: any, LastPoint: Standard_Integer): AppParCurves_Constraint;
}

export declare class BRepApprox_SurfaceTool {
  constructor();
  FirstUParameter(S: BRepAdaptor_Surface): Standard_Real;
  FirstVParameter(S: BRepAdaptor_Surface): Standard_Real;
  LastUParameter(S: BRepAdaptor_Surface): Standard_Real;
  LastVParameter(S: BRepAdaptor_Surface): Standard_Real;
  NbUIntervals(S: BRepAdaptor_Surface, Sh: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: BRepAdaptor_Surface, Sh: GeomAbs_Shape): Standard_Integer;
  UIntervals(S: BRepAdaptor_Surface, T: TColStd_Array1OfReal, Sh: GeomAbs_Shape): void;
  VIntervals(S: BRepAdaptor_Surface, T: TColStd_Array1OfReal, Sh: GeomAbs_Shape): void;
  UTrim(S: BRepAdaptor_Surface, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(S: BRepAdaptor_Surface, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(S: BRepAdaptor_Surface): Standard_Boolean;
  IsVClosed(S: BRepAdaptor_Surface): Standard_Boolean;
  IsUPeriodic(S: BRepAdaptor_Surface): Standard_Boolean;
  UPeriod(S: BRepAdaptor_Surface): Standard_Real;
  IsVPeriodic(S: BRepAdaptor_Surface): Standard_Boolean;
  VPeriod(S: BRepAdaptor_Surface): Standard_Real;
  Value(S: BRepAdaptor_Surface, u: Standard_Real, v: Standard_Real): gp_Pnt;
  D0(S: BRepAdaptor_Surface, u: Standard_Real, v: Standard_Real, P: gp_Pnt): void;
  D1(S: BRepAdaptor_Surface, u: Standard_Real, v: Standard_Real, P: gp_Pnt, D1u: gp_Vec, D1v: gp_Vec): void;
  D2(S: BRepAdaptor_Surface, u: Standard_Real, v: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(S: BRepAdaptor_Surface, u: Standard_Real, v: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(S: BRepAdaptor_Surface, u: Standard_Real, v: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  UResolution(S: BRepAdaptor_Surface, R3d: Standard_Real): Standard_Real;
  VResolution(S: BRepAdaptor_Surface, R3d: Standard_Real): Standard_Real;
  GetType(S: BRepAdaptor_Surface): GeomAbs_SurfaceType;
  Plane(S: BRepAdaptor_Surface): gp_Pln;
  Cylinder(S: BRepAdaptor_Surface): gp_Cylinder;
  Cone(S: BRepAdaptor_Surface): gp_Cone;
  Torus(S: BRepAdaptor_Surface): gp_Torus;
  Sphere(S: BRepAdaptor_Surface): gp_Sphere;
  Bezier(S: BRepAdaptor_Surface): any;
  BSpline(S: BRepAdaptor_Surface): any;
  AxeOfRevolution(S: BRepAdaptor_Surface): gp_Ax1;
  Direction(S: BRepAdaptor_Surface): gp_Dir;
  BasisCurve(S: BRepAdaptor_Surface): any;
  NbSamplesU_1(S: BRepAdaptor_Surface): Standard_Integer;
  NbSamplesV_1(S: BRepAdaptor_Surface): Standard_Integer;
  NbSamplesU_2(S: BRepAdaptor_Surface, u1: Standard_Real, u2: Standard_Real): Standard_Integer;
  NbSamplesV_2(S: BRepAdaptor_Surface, v1: Standard_Real, v2: Standard_Real): Standard_Integer;
}

export declare class BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox extends math_FunctionSetWithDerivatives {
  constructor(S1: BRepAdaptor_Surface, S2: BRepAdaptor_Surface)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  ComputeParameters(ChoixIso: IntImp_ConstIsoparametric, Param: TColStd_Array1OfReal, UVap: math_Vector, BornInf: math_Vector, BornSup: math_Vector, Tolerance: math_Vector): void;
  Root(): Standard_Real;
  Point(): gp_Pnt;
  IsTangent(UVap: math_Vector, Param: TColStd_Array1OfReal, BestChoix: IntImp_ConstIsoparametric): Standard_Boolean;
  Direction(): gp_Dir;
  DirectionOnS1(): gp_Dir2d;
  DirectionOnS2(): gp_Dir2d;
  AuxillarSurface1(): BRepAdaptor_Surface;
  AuxillarSurface2(): BRepAdaptor_Surface;
}

export declare class BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox extends math_FunctionSetWithDerivatives {
  Set_1(PS: BRepAdaptor_Surface): void;
  SetImplicitSurface(IS: IntSurf_Quadric): void;
  Set_2(Tolerance: Standard_Real): void;
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Root(): Standard_Real;
  Tolerance(): Standard_Real;
  Point(): gp_Pnt;
  IsTangent(): Standard_Boolean;
  Direction3d(): gp_Vec;
  Direction2d(): gp_Dir2d;
  PSurface(): BRepAdaptor_Surface;
  ISurface(): IntSurf_Quadric;
}

  export declare class BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_1 extends BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox {
    constructor();
  }

  export declare class BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_2 extends BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox {
    constructor(PS: BRepAdaptor_Surface, IS: IntSurf_Quadric);
  }

  export declare class BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_3 extends BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox {
    constructor(IS: IntSurf_Quadric);
  }

export declare class BRepApprox_TheImpPrmSvSurfacesOfApprox extends ApproxInt_SvSurfaces {
  Compute(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Pt: gp_Pnt, Tg: gp_Vec, Tguv1: gp_Vec2d, Tguv2: gp_Vec2d): Standard_Boolean;
  Pnt(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, P: gp_Pnt): void;
  SeekPoint(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Point: IntSurf_PntOn2S): Standard_Boolean;
  Tangency(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec): Standard_Boolean;
  TangencyOnSurf1(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
  TangencyOnSurf2(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
  FillInitialVectorOfSolution(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, binfu: Standard_Real, bsupu: Standard_Real, binfv: Standard_Real, bsupv: Standard_Real, X: math_Vector, TranslationU: Standard_Real, TranslationV: Standard_Real): Standard_Boolean;
}

  export declare class BRepApprox_TheImpPrmSvSurfacesOfApprox_1 extends BRepApprox_TheImpPrmSvSurfacesOfApprox {
    constructor(Surf1: BRepAdaptor_Surface, Surf2: IntSurf_Quadric);
  }

  export declare class BRepApprox_TheImpPrmSvSurfacesOfApprox_2 extends BRepApprox_TheImpPrmSvSurfacesOfApprox {
    constructor(Surf1: IntSurf_Quadric, Surf2: BRepAdaptor_Surface);
  }

export declare class BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox {
  Perform_1(Param: TColStd_Array1OfReal, Rsnld: math_FunctionSetRoot): IntImp_ConstIsoparametric;
  Perform_2(Param: TColStd_Array1OfReal, Rsnld: math_FunctionSetRoot, ChoixIso: IntImp_ConstIsoparametric): IntImp_ConstIsoparametric;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  Point(): IntSurf_PntOn2S;
  IsTangent(): Standard_Boolean;
  Direction(): gp_Dir;
  DirectionOnS1(): gp_Dir2d;
  DirectionOnS2(): gp_Dir2d;
  Function(): BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox;
  ChangePoint(): IntSurf_PntOn2S;
}

  export declare class BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox_1 extends BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox {
    constructor(Param: TColStd_Array1OfReal, S1: BRepAdaptor_Surface, S2: BRepAdaptor_Surface, TolTangency: Standard_Real);
  }

  export declare class BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox_2 extends BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox {
    constructor(S1: BRepAdaptor_Surface, S2: BRepAdaptor_Surface, TolTangency: Standard_Real);
  }

export declare class BRepApprox_TheMultiLineToolOfApprox {
  constructor();
  FirstPoint(ML: BRepApprox_TheMultiLineOfApprox): Standard_Integer;
  LastPoint(ML: BRepApprox_TheMultiLineOfApprox): Standard_Integer;
  NbP2d(ML: BRepApprox_TheMultiLineOfApprox): Standard_Integer;
  NbP3d(ML: BRepApprox_TheMultiLineOfApprox): Standard_Integer;
  Value_1(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabPt: TColgp_Array1OfPnt): void;
  Value_2(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabPt2d: TColgp_Array1OfPnt2d): void;
  Value_3(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabPt: TColgp_Array1OfPnt, tabPt2d: TColgp_Array1OfPnt2d): void;
  Tangency_1(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec): Standard_Boolean;
  Tangency_2(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Tangency_3(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Curvature_1(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec): Standard_Boolean;
  Curvature_2(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Curvature_3(ML: BRepApprox_TheMultiLineOfApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  MakeMLBetween(ML: BRepApprox_TheMultiLineOfApprox, I1: Standard_Integer, I2: Standard_Integer, NbPMin: Standard_Integer): BRepApprox_TheMultiLineOfApprox;
  MakeMLOneMorePoint(ML: BRepApprox_TheMultiLineOfApprox, I1: Standard_Integer, I2: Standard_Integer, indbad: Standard_Integer, OtherLine: BRepApprox_TheMultiLineOfApprox): Standard_Boolean;
  WhatStatus(ML: BRepApprox_TheMultiLineOfApprox, I1: Standard_Integer, I2: Standard_Integer): Approx_Status;
  Dump(ML: BRepApprox_TheMultiLineOfApprox): void;
}

export declare class BRepApprox_ThePrmPrmSvSurfacesOfApprox extends ApproxInt_SvSurfaces {
  constructor(Surf1: BRepAdaptor_Surface, Surf2: BRepAdaptor_Surface)
  Compute(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Pt: gp_Pnt, Tg: gp_Vec, Tguv1: gp_Vec2d, Tguv2: gp_Vec2d): Standard_Boolean;
  Pnt(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, P: gp_Pnt): void;
  SeekPoint(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Point: IntSurf_PntOn2S): Standard_Boolean;
  Tangency(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec): Standard_Boolean;
  TangencyOnSurf1(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
  TangencyOnSurf2(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
}

export declare class BRepBndLib {
  constructor();
  Add(S: TopoDS_Shape, B: Bnd_Box, useTriangulation: Standard_Boolean): void;
  AddClose(S: TopoDS_Shape, B: Bnd_Box): void;
  AddOptimal(S: TopoDS_Shape, B: Bnd_Box, useTriangulation: Standard_Boolean, useShapeTolerance: Standard_Boolean): void;
  AddOBB(theS: TopoDS_Shape, theOBB: Bnd_OBB, theIsTriangulationUsed: Standard_Boolean, theIsOptimal: Standard_Boolean, theIsShapeToleranceUsed: Standard_Boolean): void;
}

export declare class BRepBuilderAPI {
  constructor();
  Plane_1(P: any): void;
  Plane_2(): any;
  Precision_1(P: Standard_Real): void;
  Precision_2(): Standard_Real;
}

export declare class BRepBuilderAPI_BndBoxTreeSelector {
  constructor()
  Reject(theBox: Bnd_Box): Standard_Boolean;
  Accept(theObj: Standard_Integer): Standard_Boolean;
  ClearResList(): void;
  SetCurrent(theBox: Bnd_Box): void;
  ResInd(): TColStd_ListOfInteger;
}

export declare class BRepBuilderAPI_VertexInspector extends NCollection_CellFilter_InspectorXYZ {
  constructor(theTol: Standard_Real)
  Add(thePnt: gp_XYZ): void;
  ClearResList(): void;
  SetCurrent(theCurPnt: gp_XYZ): void;
  ResInd(): TColStd_ListOfInteger;
  Inspect(theTarget: Standard_Integer): NCollection_CellFilter_Action;
}

export declare class BRepBuilderAPI_Collect {
  constructor()
  Add(SI: TopoDS_Shape, MKS: BRepBuilderAPI_MakeShape): void;
  AddGenerated(S: TopoDS_Shape, Gen: TopoDS_Shape): void;
  AddModif(S: TopoDS_Shape, Mod: TopoDS_Shape): void;
  Filter(SF: TopoDS_Shape): void;
  Modification(): TopTools_DataMapOfShapeListOfShape;
  Generated(): TopTools_DataMapOfShapeListOfShape;
}

export declare class BRepBuilderAPI_ModifyShape extends BRepBuilderAPI_MakeShape {
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
}

export declare class BRepBuilderAPI_Copy extends BRepBuilderAPI_ModifyShape {
  Perform(S: TopoDS_Shape, copyGeom: Standard_Boolean, copyMesh: Standard_Boolean): void;
}

  export declare class BRepBuilderAPI_Copy_1 extends BRepBuilderAPI_Copy {
    constructor();
  }

  export declare class BRepBuilderAPI_Copy_2 extends BRepBuilderAPI_Copy {
    constructor(S: TopoDS_Shape, copyGeom: Standard_Boolean, copyMesh: Standard_Boolean);
  }

export declare class BRepBuilderAPI_FastSewing extends Standard_Transient {
  constructor(theTolerance: Standard_Real)
  Add_1(theShape: TopoDS_Shape): Standard_Boolean;
  Add_2(theSurface: any): Standard_Boolean;
  Perform(): void;
  SetTolerance(theToler: Standard_Real): void;
  GetTolerance(): Standard_Real;
  GetResult(): TopoDS_Shape;
  GetStatuses(theOS: Standard_OStream): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepBuilderAPI_FindPlane {
  Init(S: TopoDS_Shape, Tol: Standard_Real): void;
  Found(): Standard_Boolean;
  Plane(): any;
}

  export declare class BRepBuilderAPI_FindPlane_1 extends BRepBuilderAPI_FindPlane {
    constructor();
  }

  export declare class BRepBuilderAPI_FindPlane_2 extends BRepBuilderAPI_FindPlane {
    constructor(S: TopoDS_Shape, Tol: Standard_Real);
  }

export declare class BRepBuilderAPI_GTransform extends BRepBuilderAPI_ModifyShape {
  Perform(S: TopoDS_Shape, Copy: Standard_Boolean): void;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
}

  export declare class BRepBuilderAPI_GTransform_1 extends BRepBuilderAPI_GTransform {
    constructor(T: gp_GTrsf);
  }

  export declare class BRepBuilderAPI_GTransform_2 extends BRepBuilderAPI_GTransform {
    constructor(S: TopoDS_Shape, T: gp_GTrsf, Copy: Standard_Boolean);
  }

export declare class BRepLib_Command {
  IsDone(): Standard_Boolean;
  Check(): void;
}

export declare class BRepLib_MakeShape extends BRepLib_Command {
  Build(): void;
  Shape(): TopoDS_Shape;
  FaceStatus(F: TopoDS_Face): BRepLib_ShapeModification;
  HasDescendants(F: TopoDS_Face): Standard_Boolean;
  DescendantFaces(F: TopoDS_Face): TopTools_ListOfShape;
  NbSurfaces(): Standard_Integer;
  NewFaces(I: Standard_Integer): TopTools_ListOfShape;
  FacesFromEdges(E: TopoDS_Edge): TopTools_ListOfShape;
}

export declare class BRepLib_MakeEdge extends BRepLib_MakeShape {
  Init_1(C: any): void;
  Init_2(C: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_3(C: any, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_4(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_5(C: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_6(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  Init_7(C: any, S: any): void;
  Init_8(C: any, S: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_9(C: any, S: any, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_10(C: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_11(C: any, S: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_12(C: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  Error(): BRepLib_EdgeError;
  Edge(): TopoDS_Edge;
  Vertex1(): TopoDS_Vertex;
  Vertex2(): TopoDS_Vertex;
}

  export declare class BRepLib_MakeEdge_1 extends BRepLib_MakeEdge {
    constructor();
  }

  export declare class BRepLib_MakeEdge_2 extends BRepLib_MakeEdge {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_3 extends BRepLib_MakeEdge {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_4 extends BRepLib_MakeEdge {
    constructor(L: gp_Lin);
  }

  export declare class BRepLib_MakeEdge_5 extends BRepLib_MakeEdge {
    constructor(L: gp_Lin, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_6 extends BRepLib_MakeEdge {
    constructor(L: gp_Lin, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_7 extends BRepLib_MakeEdge {
    constructor(L: gp_Lin, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_8 extends BRepLib_MakeEdge {
    constructor(L: gp_Circ);
  }

  export declare class BRepLib_MakeEdge_9 extends BRepLib_MakeEdge {
    constructor(L: gp_Circ, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_10 extends BRepLib_MakeEdge {
    constructor(L: gp_Circ, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_11 extends BRepLib_MakeEdge {
    constructor(L: gp_Circ, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_12 extends BRepLib_MakeEdge {
    constructor(L: gp_Elips);
  }

  export declare class BRepLib_MakeEdge_13 extends BRepLib_MakeEdge {
    constructor(L: gp_Elips, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_14 extends BRepLib_MakeEdge {
    constructor(L: gp_Elips, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_15 extends BRepLib_MakeEdge {
    constructor(L: gp_Elips, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_16 extends BRepLib_MakeEdge {
    constructor(L: gp_Hypr);
  }

  export declare class BRepLib_MakeEdge_17 extends BRepLib_MakeEdge {
    constructor(L: gp_Hypr, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_18 extends BRepLib_MakeEdge {
    constructor(L: gp_Hypr, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_19 extends BRepLib_MakeEdge {
    constructor(L: gp_Hypr, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_20 extends BRepLib_MakeEdge {
    constructor(L: gp_Parab);
  }

  export declare class BRepLib_MakeEdge_21 extends BRepLib_MakeEdge {
    constructor(L: gp_Parab, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_22 extends BRepLib_MakeEdge {
    constructor(L: gp_Parab, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_23 extends BRepLib_MakeEdge {
    constructor(L: gp_Parab, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_24 extends BRepLib_MakeEdge {
    constructor(L: any);
  }

  export declare class BRepLib_MakeEdge_25 extends BRepLib_MakeEdge {
    constructor(L: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_26 extends BRepLib_MakeEdge {
    constructor(L: any, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_27 extends BRepLib_MakeEdge {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_28 extends BRepLib_MakeEdge {
    constructor(L: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_29 extends BRepLib_MakeEdge {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_30 extends BRepLib_MakeEdge {
    constructor(L: any, S: any);
  }

  export declare class BRepLib_MakeEdge_31 extends BRepLib_MakeEdge {
    constructor(L: any, S: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_32 extends BRepLib_MakeEdge {
    constructor(L: any, S: any, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakeEdge_33 extends BRepLib_MakeEdge {
    constructor(L: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge_34 extends BRepLib_MakeEdge {
    constructor(L: any, S: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge_35 extends BRepLib_MakeEdge {
    constructor(L: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

export declare class BRepBuilderAPI_MakeEdge extends BRepBuilderAPI_MakeShape {
  Init_1(C: any): void;
  Init_2(C: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_3(C: any, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_4(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_5(C: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_6(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  Init_7(C: any, S: any): void;
  Init_8(C: any, S: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_9(C: any, S: any, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_10(C: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_11(C: any, S: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_12(C: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_EdgeError;
  Edge(): TopoDS_Edge;
  Vertex1(): TopoDS_Vertex;
  Vertex2(): TopoDS_Vertex;
}

  export declare class BRepBuilderAPI_MakeEdge_1 extends BRepBuilderAPI_MakeEdge {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeEdge_2 extends BRepBuilderAPI_MakeEdge {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_3 extends BRepBuilderAPI_MakeEdge {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_4 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin);
  }

  export declare class BRepBuilderAPI_MakeEdge_5 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_6 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_7 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_8 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ);
  }

  export declare class BRepBuilderAPI_MakeEdge_9 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_10 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_11 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_12 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips);
  }

  export declare class BRepBuilderAPI_MakeEdge_13 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_14 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_15 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_16 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr);
  }

  export declare class BRepBuilderAPI_MakeEdge_17 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_18 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_19 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_20 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab);
  }

  export declare class BRepBuilderAPI_MakeEdge_21 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_22 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_23 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_24 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any);
  }

  export declare class BRepBuilderAPI_MakeEdge_25 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_26 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_27 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_28 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_29 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_30 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any);
  }

  export declare class BRepBuilderAPI_MakeEdge_31 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_32 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_33 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_34 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_35 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

export declare class BRepLib_MakeEdge2d extends BRepLib_MakeShape {
  Init_1(C: any): void;
  Init_2(C: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_3(C: any, P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Init_4(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_5(C: any, P1: gp_Pnt2d, P2: gp_Pnt2d, p1: Standard_Real, p2: Standard_Real): void;
  Init_6(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  Error(): BRepLib_EdgeError;
  Edge(): TopoDS_Edge;
  Vertex1(): TopoDS_Vertex;
  Vertex2(): TopoDS_Vertex;
}

  export declare class BRepLib_MakeEdge2d_1 extends BRepLib_MakeEdge2d {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge2d_2 extends BRepLib_MakeEdge2d {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepLib_MakeEdge2d_3 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Lin2d);
  }

  export declare class BRepLib_MakeEdge2d_4 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Lin2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge2d_5 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Lin2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepLib_MakeEdge2d_6 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Lin2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge2d_7 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Circ2d);
  }

  export declare class BRepLib_MakeEdge2d_8 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Circ2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge2d_9 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Circ2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepLib_MakeEdge2d_10 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Circ2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge2d_11 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Elips2d);
  }

  export declare class BRepLib_MakeEdge2d_12 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Elips2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge2d_13 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Elips2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepLib_MakeEdge2d_14 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Elips2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge2d_15 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Hypr2d);
  }

  export declare class BRepLib_MakeEdge2d_16 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Hypr2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge2d_17 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Hypr2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepLib_MakeEdge2d_18 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Hypr2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge2d_19 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Parab2d);
  }

  export declare class BRepLib_MakeEdge2d_20 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Parab2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge2d_21 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Parab2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepLib_MakeEdge2d_22 extends BRepLib_MakeEdge2d {
    constructor(L: gp_Parab2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge2d_23 extends BRepLib_MakeEdge2d {
    constructor(L: any);
  }

  export declare class BRepLib_MakeEdge2d_24 extends BRepLib_MakeEdge2d {
    constructor(L: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge2d_25 extends BRepLib_MakeEdge2d {
    constructor(L: any, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepLib_MakeEdge2d_26 extends BRepLib_MakeEdge2d {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakeEdge2d_27 extends BRepLib_MakeEdge2d {
    constructor(L: any, P1: gp_Pnt2d, P2: gp_Pnt2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepLib_MakeEdge2d_28 extends BRepLib_MakeEdge2d {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

export declare class BRepBuilderAPI_MakeEdge2d extends BRepBuilderAPI_MakeShape {
  Init_1(C: any): void;
  Init_2(C: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_3(C: any, P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Init_4(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_5(C: any, P1: gp_Pnt2d, P2: gp_Pnt2d, p1: Standard_Real, p2: Standard_Real): void;
  Init_6(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_EdgeError;
  Edge(): TopoDS_Edge;
  Vertex1(): TopoDS_Vertex;
  Vertex2(): TopoDS_Vertex;
}

  export declare class BRepBuilderAPI_MakeEdge2d_1 extends BRepBuilderAPI_MakeEdge2d {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_2 extends BRepBuilderAPI_MakeEdge2d {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_3 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Lin2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_4 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Lin2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_5 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Lin2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_6 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Lin2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_7 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Circ2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_8 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Circ2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_9 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Circ2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_10 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Circ2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_11 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Elips2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_12 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Elips2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_13 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Elips2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_14 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Elips2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_15 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Hypr2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_16 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Hypr2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_17 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Hypr2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_18 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Hypr2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_19 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Parab2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_20 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Parab2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_21 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Parab2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_22 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: gp_Parab2d, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_23 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: any);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_24 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_25 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: any, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_26 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_27 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: any, P1: gp_Pnt2d, P2: gp_Pnt2d, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge2d_28 extends BRepBuilderAPI_MakeEdge2d {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

export declare class BRepLib_MakeFace extends BRepLib_MakeShape {
  Init_1(F: TopoDS_Face): void;
  Init_2(S: any, Bound: Standard_Boolean, TolDegen: Standard_Real): void;
  Init_3(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real): void;
  Add(W: TopoDS_Wire): void;
  Error(): BRepLib_FaceError;
  Face(): TopoDS_Face;
  IsDegenerated(theCurve: any, theMaxTol: Standard_Real, theActTol: Standard_Real): Standard_Boolean;
}

  export declare class BRepLib_MakeFace_1 extends BRepLib_MakeFace {
    constructor();
  }

  export declare class BRepLib_MakeFace_2 extends BRepLib_MakeFace {
    constructor(F: TopoDS_Face);
  }

  export declare class BRepLib_MakeFace_3 extends BRepLib_MakeFace {
    constructor(P: gp_Pln);
  }

  export declare class BRepLib_MakeFace_4 extends BRepLib_MakeFace {
    constructor(C: gp_Cylinder);
  }

  export declare class BRepLib_MakeFace_5 extends BRepLib_MakeFace {
    constructor(C: gp_Cone);
  }

  export declare class BRepLib_MakeFace_6 extends BRepLib_MakeFace {
    constructor(S: gp_Sphere);
  }

  export declare class BRepLib_MakeFace_7 extends BRepLib_MakeFace {
    constructor(C: gp_Torus);
  }

  export declare class BRepLib_MakeFace_8 extends BRepLib_MakeFace {
    constructor(S: any, TolDegen: Standard_Real);
  }

  export declare class BRepLib_MakeFace_9 extends BRepLib_MakeFace {
    constructor(P: gp_Pln, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_10 extends BRepLib_MakeFace {
    constructor(C: gp_Cylinder, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_11 extends BRepLib_MakeFace {
    constructor(C: gp_Cone, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_12 extends BRepLib_MakeFace {
    constructor(S: gp_Sphere, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_13 extends BRepLib_MakeFace {
    constructor(C: gp_Torus, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepLib_MakeFace_14 extends BRepLib_MakeFace {
    constructor(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real);
  }

  export declare class BRepLib_MakeFace_15 extends BRepLib_MakeFace {
    constructor(W: TopoDS_Wire, OnlyPlane: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_16 extends BRepLib_MakeFace {
    constructor(P: gp_Pln, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_17 extends BRepLib_MakeFace {
    constructor(C: gp_Cylinder, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_18 extends BRepLib_MakeFace {
    constructor(C: gp_Cone, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_19 extends BRepLib_MakeFace {
    constructor(S: gp_Sphere, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_20 extends BRepLib_MakeFace {
    constructor(C: gp_Torus, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_21 extends BRepLib_MakeFace {
    constructor(S: any, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepLib_MakeFace_22 extends BRepLib_MakeFace {
    constructor(F: TopoDS_Face, W: TopoDS_Wire);
  }

export declare class BRepBuilderAPI_MakeFace extends BRepBuilderAPI_MakeShape {
  Init_1(F: TopoDS_Face): void;
  Init_2(S: any, Bound: Standard_Boolean, TolDegen: Standard_Real): void;
  Init_3(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real): void;
  Add(W: TopoDS_Wire): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_FaceError;
  Face(): TopoDS_Face;
}

  export declare class BRepBuilderAPI_MakeFace_1 extends BRepBuilderAPI_MakeFace {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeFace_2 extends BRepBuilderAPI_MakeFace {
    constructor(F: TopoDS_Face);
  }

  export declare class BRepBuilderAPI_MakeFace_3 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln);
  }

  export declare class BRepBuilderAPI_MakeFace_4 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder);
  }

  export declare class BRepBuilderAPI_MakeFace_5 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone);
  }

  export declare class BRepBuilderAPI_MakeFace_6 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere);
  }

  export declare class BRepBuilderAPI_MakeFace_7 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus);
  }

  export declare class BRepBuilderAPI_MakeFace_8 extends BRepBuilderAPI_MakeFace {
    constructor(S: any, TolDegen: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_9 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_10 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_11 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_12 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_13 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_14 extends BRepBuilderAPI_MakeFace {
    constructor(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_15 extends BRepBuilderAPI_MakeFace {
    constructor(W: TopoDS_Wire, OnlyPlane: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_16 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_17 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_18 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_19 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_20 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_21 extends BRepBuilderAPI_MakeFace {
    constructor(S: any, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_22 extends BRepBuilderAPI_MakeFace {
    constructor(F: TopoDS_Face, W: TopoDS_Wire);
  }

export declare class BRepLib_MakePolygon extends BRepLib_MakeShape {
  Add_1(P: gp_Pnt): void;
  Add_2(V: TopoDS_Vertex): void;
  Added(): Standard_Boolean;
  Close(): void;
  FirstVertex(): TopoDS_Vertex;
  LastVertex(): TopoDS_Vertex;
  Edge(): TopoDS_Edge;
  Wire(): TopoDS_Wire;
}

  export declare class BRepLib_MakePolygon_1 extends BRepLib_MakePolygon {
    constructor();
  }

  export declare class BRepLib_MakePolygon_2 extends BRepLib_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepLib_MakePolygon_3 extends BRepLib_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, Close: Standard_Boolean);
  }

  export declare class BRepLib_MakePolygon_4 extends BRepLib_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, P4: gp_Pnt, Close: Standard_Boolean);
  }

  export declare class BRepLib_MakePolygon_5 extends BRepLib_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepLib_MakePolygon_6 extends BRepLib_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, Close: Standard_Boolean);
  }

  export declare class BRepLib_MakePolygon_7 extends BRepLib_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, V4: TopoDS_Vertex, Close: Standard_Boolean);
  }

export declare class BRepBuilderAPI_MakePolygon extends BRepBuilderAPI_MakeShape {
  Add_1(P: gp_Pnt): void;
  Add_2(V: TopoDS_Vertex): void;
  Added(): Standard_Boolean;
  Close(): void;
  FirstVertex(): TopoDS_Vertex;
  LastVertex(): TopoDS_Vertex;
  IsDone(): Standard_Boolean;
  Edge(): TopoDS_Edge;
  Wire(): TopoDS_Wire;
}

  export declare class BRepBuilderAPI_MakePolygon_1 extends BRepBuilderAPI_MakePolygon {
    constructor();
  }

  export declare class BRepBuilderAPI_MakePolygon_2 extends BRepBuilderAPI_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakePolygon_3 extends BRepBuilderAPI_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, Close: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakePolygon_4 extends BRepBuilderAPI_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, P4: gp_Pnt, Close: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakePolygon_5 extends BRepBuilderAPI_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakePolygon_6 extends BRepBuilderAPI_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, Close: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakePolygon_7 extends BRepBuilderAPI_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, V4: TopoDS_Vertex, Close: Standard_Boolean);
  }

export declare class BRepLib_MakeShell extends BRepLib_MakeShape {
  Init(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Segment: Standard_Boolean): void;
  Error(): BRepLib_ShellError;
  Shell(): TopoDS_Shell;
}

  export declare class BRepLib_MakeShell_1 extends BRepLib_MakeShell {
    constructor();
  }

  export declare class BRepLib_MakeShell_2 extends BRepLib_MakeShell {
    constructor(S: any, Segment: Standard_Boolean);
  }

  export declare class BRepLib_MakeShell_3 extends BRepLib_MakeShell {
    constructor(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Segment: Standard_Boolean);
  }

export declare class BRepBuilderAPI_MakeShell extends BRepBuilderAPI_MakeShape {
  Init(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Segment: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_ShellError;
  Shell(): TopoDS_Shell;
}

  export declare class BRepBuilderAPI_MakeShell_1 extends BRepBuilderAPI_MakeShell {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeShell_2 extends BRepBuilderAPI_MakeShell {
    constructor(S: any, Segment: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeShell_3 extends BRepBuilderAPI_MakeShell {
    constructor(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Segment: Standard_Boolean);
  }

export declare class BRepLib_MakeSolid extends BRepLib_MakeShape {
  Add(S: TopoDS_Shell): void;
  Solid(): TopoDS_Solid;
  FaceStatus(F: TopoDS_Face): BRepLib_ShapeModification;
}

  export declare class BRepLib_MakeSolid_1 extends BRepLib_MakeSolid {
    constructor();
  }

  export declare class BRepLib_MakeSolid_2 extends BRepLib_MakeSolid {
    constructor(S: TopoDS_CompSolid);
  }

  export declare class BRepLib_MakeSolid_3 extends BRepLib_MakeSolid {
    constructor(S: TopoDS_Shell);
  }

  export declare class BRepLib_MakeSolid_4 extends BRepLib_MakeSolid {
    constructor(S1: TopoDS_Shell, S2: TopoDS_Shell);
  }

  export declare class BRepLib_MakeSolid_5 extends BRepLib_MakeSolid {
    constructor(S1: TopoDS_Shell, S2: TopoDS_Shell, S3: TopoDS_Shell);
  }

  export declare class BRepLib_MakeSolid_6 extends BRepLib_MakeSolid {
    constructor(So: TopoDS_Solid);
  }

  export declare class BRepLib_MakeSolid_7 extends BRepLib_MakeSolid {
    constructor(So: TopoDS_Solid, S: TopoDS_Shell);
  }

export declare class BRepBuilderAPI_MakeSolid extends BRepBuilderAPI_MakeShape {
  Add(S: TopoDS_Shell): void;
  IsDone(): Standard_Boolean;
  Solid(): TopoDS_Solid;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
}

  export declare class BRepBuilderAPI_MakeSolid_1 extends BRepBuilderAPI_MakeSolid {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeSolid_2 extends BRepBuilderAPI_MakeSolid {
    constructor(S: TopoDS_CompSolid);
  }

  export declare class BRepBuilderAPI_MakeSolid_3 extends BRepBuilderAPI_MakeSolid {
    constructor(S: TopoDS_Shell);
  }

  export declare class BRepBuilderAPI_MakeSolid_4 extends BRepBuilderAPI_MakeSolid {
    constructor(S1: TopoDS_Shell, S2: TopoDS_Shell);
  }

  export declare class BRepBuilderAPI_MakeSolid_5 extends BRepBuilderAPI_MakeSolid {
    constructor(S1: TopoDS_Shell, S2: TopoDS_Shell, S3: TopoDS_Shell);
  }

  export declare class BRepBuilderAPI_MakeSolid_6 extends BRepBuilderAPI_MakeSolid {
    constructor(So: TopoDS_Solid);
  }

  export declare class BRepBuilderAPI_MakeSolid_7 extends BRepBuilderAPI_MakeSolid {
    constructor(So: TopoDS_Solid, S: TopoDS_Shell);
  }

export declare class BRepLib_MakeVertex extends BRepLib_MakeShape {
  constructor(P: gp_Pnt)
  Vertex(): TopoDS_Vertex;
}

export declare class BRepBuilderAPI_MakeVertex extends BRepBuilderAPI_MakeShape {
  constructor(P: gp_Pnt)
  Vertex(): TopoDS_Vertex;
}

export declare class BRepLib_MakeWire extends BRepLib_MakeShape {
  Add_1(E: TopoDS_Edge): void;
  Add_2(W: TopoDS_Wire): void;
  Add_3(L: TopTools_ListOfShape): void;
  Error(): BRepLib_WireError;
  Wire(): TopoDS_Wire;
  Edge(): TopoDS_Edge;
  Vertex(): TopoDS_Vertex;
}

  export declare class BRepLib_MakeWire_1 extends BRepLib_MakeWire {
    constructor();
  }

  export declare class BRepLib_MakeWire_2 extends BRepLib_MakeWire {
    constructor(E: TopoDS_Edge);
  }

  export declare class BRepLib_MakeWire_3 extends BRepLib_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge);
  }

  export declare class BRepLib_MakeWire_4 extends BRepLib_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge);
  }

  export declare class BRepLib_MakeWire_5 extends BRepLib_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge, E4: TopoDS_Edge);
  }

  export declare class BRepLib_MakeWire_6 extends BRepLib_MakeWire {
    constructor(W: TopoDS_Wire);
  }

  export declare class BRepLib_MakeWire_7 extends BRepLib_MakeWire {
    constructor(W: TopoDS_Wire, E: TopoDS_Edge);
  }

export declare class BRepBuilderAPI_MakeWire extends BRepBuilderAPI_MakeShape {
  Add_1(E: TopoDS_Edge): void;
  Add_2(W: TopoDS_Wire): void;
  Add_3(L: TopTools_ListOfShape): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_WireError;
  Wire(): TopoDS_Wire;
  Edge(): TopoDS_Edge;
  Vertex(): TopoDS_Vertex;
}

  export declare class BRepBuilderAPI_MakeWire_1 extends BRepBuilderAPI_MakeWire {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeWire_2 extends BRepBuilderAPI_MakeWire {
    constructor(E: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_3 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_4 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_5 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge, E4: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_6 extends BRepBuilderAPI_MakeWire {
    constructor(W: TopoDS_Wire);
  }

  export declare class BRepBuilderAPI_MakeWire_7 extends BRepBuilderAPI_MakeWire {
    constructor(W: TopoDS_Wire, E: TopoDS_Edge);
  }

export declare class BRepBuilderAPI_NurbsConvert extends BRepBuilderAPI_ModifyShape {
  Perform(S: TopoDS_Shape, Copy: Standard_Boolean): void;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
}

  export declare class BRepBuilderAPI_NurbsConvert_1 extends BRepBuilderAPI_NurbsConvert {
    constructor();
  }

  export declare class BRepBuilderAPI_NurbsConvert_2 extends BRepBuilderAPI_NurbsConvert {
    constructor(S: TopoDS_Shape, Copy: Standard_Boolean);
  }

export declare class BRepBuilderAPI_Sewing extends Standard_Transient {
  constructor(tolerance: Standard_Real, option1: Standard_Boolean, option2: Standard_Boolean, option3: Standard_Boolean, option4: Standard_Boolean)
  Init(tolerance: Standard_Real, option1: Standard_Boolean, option2: Standard_Boolean, option3: Standard_Boolean, option4: Standard_Boolean): void;
  Load(shape: TopoDS_Shape): void;
  Add(shape: TopoDS_Shape): void;
  Perform(theProgress: Message_ProgressRange): void;
  SewedShape(): TopoDS_Shape;
  SetContext(theContext: any): void;
  GetContext(): any;
  NbFreeEdges(): Standard_Integer;
  FreeEdge(index: Standard_Integer): TopoDS_Edge;
  NbMultipleEdges(): Standard_Integer;
  MultipleEdge(index: Standard_Integer): TopoDS_Edge;
  NbContigousEdges(): Standard_Integer;
  ContigousEdge(index: Standard_Integer): TopoDS_Edge;
  ContigousEdgeCouple(index: Standard_Integer): TopTools_ListOfShape;
  IsSectionBound(section: TopoDS_Edge): Standard_Boolean;
  SectionToBoundary(section: TopoDS_Edge): TopoDS_Edge;
  NbDegeneratedShapes(): Standard_Integer;
  DegeneratedShape(index: Standard_Integer): TopoDS_Shape;
  IsDegenerated(shape: TopoDS_Shape): Standard_Boolean;
  IsModified(shape: TopoDS_Shape): Standard_Boolean;
  Modified(shape: TopoDS_Shape): TopoDS_Shape;
  IsModifiedSubShape(shape: TopoDS_Shape): Standard_Boolean;
  ModifiedSubShape(shape: TopoDS_Shape): TopoDS_Shape;
  Dump(): void;
  NbDeletedFaces(): Standard_Integer;
  DeletedFace(index: Standard_Integer): TopoDS_Face;
  WhichFace(theEdg: TopoDS_Edge, index: Standard_Integer): TopoDS_Face;
  SameParameterMode(): Standard_Boolean;
  SetSameParameterMode(SameParameterMode: Standard_Boolean): void;
  Tolerance(): Standard_Real;
  SetTolerance(theToler: Standard_Real): void;
  MinTolerance(): Standard_Real;
  SetMinTolerance(theMinToler: Standard_Real): void;
  MaxTolerance(): Standard_Real;
  SetMaxTolerance(theMaxToler: Standard_Real): void;
  FaceMode(): Standard_Boolean;
  SetFaceMode(theFaceMode: Standard_Boolean): void;
  FloatingEdgesMode(): Standard_Boolean;
  SetFloatingEdgesMode(theFloatingEdgesMode: Standard_Boolean): void;
  LocalTolerancesMode(): Standard_Boolean;
  SetLocalTolerancesMode(theLocalTolerancesMode: Standard_Boolean): void;
  SetNonManifoldMode(theNonManifoldMode: Standard_Boolean): void;
  NonManifoldMode(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepBuilderAPI_Transform extends BRepBuilderAPI_ModifyShape {
  Perform(S: TopoDS_Shape, Copy: Standard_Boolean): void;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class BRepBuilderAPI_Transform_1 extends BRepBuilderAPI_Transform {
    constructor(T: gp_Trsf);
  }

  export declare class BRepBuilderAPI_Transform_2 extends BRepBuilderAPI_Transform {
    constructor(S: TopoDS_Shape, T: gp_Trsf, Copy: Standard_Boolean);
  }

export declare class BRepCheck {
  constructor();
  Add(List: BRepCheck_ListOfStatus, Stat: BRepCheck_Status): void;
  Print(Stat: BRepCheck_Status, OS: Standard_OStream): void;
  SelfIntersection(W: TopoDS_Wire, F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge): Standard_Boolean;
  PrecCurve(aAC3D: Adaptor3d_Curve): Standard_Real;
  PrecSurface(aAHSurf: any): Standard_Real;
}

export declare class BRepCheck_Result extends Standard_Transient {
  Init(S: TopoDS_Shape): void;
  InContext(ContextShape: TopoDS_Shape): void;
  Minimum(): void;
  Blind(): void;
  SetFailStatus(S: TopoDS_Shape): void;
  Status(): BRepCheck_ListOfStatus;
  IsMinimum(): Standard_Boolean;
  IsBlind(): Standard_Boolean;
  StatusOnShape_1(S: TopoDS_Shape): BRepCheck_ListOfStatus;
  InitContextIterator(): void;
  MoreShapeInContext(): Standard_Boolean;
  ContextualShape(): TopoDS_Shape;
  StatusOnShape_2(): BRepCheck_ListOfStatus;
  NextShapeInContext(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepCheck_Analyzer {
  constructor(S: TopoDS_Shape, GeomControls: Standard_Boolean)
  Init(S: TopoDS_Shape, GeomControls: Standard_Boolean): void;
  IsValid_1(S: TopoDS_Shape): Standard_Boolean;
  IsValid_2(): Standard_Boolean;
  Result(SubS: TopoDS_Shape): any;
}

export declare class BRepCheck_Edge extends BRepCheck_Result {
  constructor(E: TopoDS_Edge)
  InContext(ContextShape: TopoDS_Shape): void;
  Minimum(): void;
  Blind(): void;
  GeometricControls_1(): Standard_Boolean;
  GeometricControls_2(B: Standard_Boolean): void;
  Tolerance(): Standard_Real;
  SetStatus(theStatus: BRepCheck_Status): void;
  CheckPolygonOnTriangulation(theEdge: TopoDS_Edge): BRepCheck_Status;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepCheck_Face extends BRepCheck_Result {
  constructor(F: TopoDS_Face)
  InContext(ContextShape: TopoDS_Shape): void;
  Minimum(): void;
  Blind(): void;
  IntersectWires(Update: Standard_Boolean): BRepCheck_Status;
  ClassifyWires(Update: Standard_Boolean): BRepCheck_Status;
  OrientationOfWires(Update: Standard_Boolean): BRepCheck_Status;
  SetUnorientable(): void;
  SetStatus(theStatus: BRepCheck_Status): void;
  IsUnorientable(): Standard_Boolean;
  GeometricControls_1(): Standard_Boolean;
  GeometricControls_2(B: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepCheck_Shell extends BRepCheck_Result {
  constructor(S: TopoDS_Shell)
  InContext(ContextShape: TopoDS_Shape): void;
  Minimum(): void;
  Blind(): void;
  Closed(Update: Standard_Boolean): BRepCheck_Status;
  Orientation(Update: Standard_Boolean): BRepCheck_Status;
  SetUnorientable(): void;
  IsUnorientable(): Standard_Boolean;
  NbConnectedSet(theSets: TopTools_ListOfShape): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepCheck_Solid extends BRepCheck_Result {
  constructor(theS: TopoDS_Solid)
  InContext(theContextShape: TopoDS_Shape): void;
  Minimum(): void;
  Blind(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepCheck_Vertex extends BRepCheck_Result {
  constructor(V: TopoDS_Vertex)
  InContext(ContextShape: TopoDS_Shape): void;
  Minimum(): void;
  Blind(): void;
  Tolerance(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepCheck_Wire extends BRepCheck_Result {
  constructor(W: TopoDS_Wire)
  InContext(ContextShape: TopoDS_Shape): void;
  Minimum(): void;
  Blind(): void;
  Closed(Update: Standard_Boolean): BRepCheck_Status;
  Closed2d(F: TopoDS_Face, Update: Standard_Boolean): BRepCheck_Status;
  Orientation(F: TopoDS_Face, Update: Standard_Boolean): BRepCheck_Status;
  SelfIntersect(F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge, Update: Standard_Boolean): BRepCheck_Status;
  GeometricControls_1(): Standard_Boolean;
  GeometricControls_2(B: Standard_Boolean): void;
  SetStatus(theStatus: BRepCheck_Status): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepClass_Edge {
  Edge_1(): TopoDS_Edge;
  Edge_2(): TopoDS_Edge;
  Face_1(): TopoDS_Face;
  Face_2(): TopoDS_Face;
}

  export declare class BRepClass_Edge_1 extends BRepClass_Edge {
    constructor();
  }

  export declare class BRepClass_Edge_2 extends BRepClass_Edge {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class BRepClass_Intersector {
  constructor()
  Perform(L: gp_Lin2d, P: Standard_Real, Tol: Standard_Real, E: BRepClass_Edge): void;
  LocalGeometry(E: BRepClass_Edge, U: Standard_Real, T: gp_Dir2d, N: gp_Dir2d, C: Standard_Real): void;
}

export declare class BRepClass_FClass2dOfFClassifier {
  constructor()
  Reset(L: gp_Lin2d, P: Standard_Real, Tol: Standard_Real): void;
  Compare(E: BRepClass_Edge, Or: TopAbs_Orientation): void;
  Parameter(): Standard_Real;
  Intersector(): BRepClass_Intersector;
  ClosestIntersection(): Standard_Integer;
  State(): TopAbs_State;
  IsHeadOrEnd(): Standard_Boolean;
}

export declare class BRepClass_FClassifier {
  Perform(F: BRepClass_FaceExplorer, P: gp_Pnt2d, Tol: Standard_Real): void;
  State(): TopAbs_State;
  Rejected(): Standard_Boolean;
  NoWires(): Standard_Boolean;
  Edge(): BRepClass_Edge;
  EdgeParameter(): Standard_Real;
  Position(): IntRes2d_Position;
}

  export declare class BRepClass_FClassifier_1 extends BRepClass_FClassifier {
    constructor();
  }

  export declare class BRepClass_FClassifier_2 extends BRepClass_FClassifier {
    constructor(F: BRepClass_FaceExplorer, P: gp_Pnt2d, Tol: Standard_Real);
  }

export declare class BRepClass_FaceExplorer {
  constructor(F: TopoDS_Face)
  CheckPoint(thePoint: gp_Pnt2d): Standard_Boolean;
  Reject(P: gp_Pnt2d): Standard_Boolean;
  Segment(P: gp_Pnt2d, L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  OtherSegment(P: gp_Pnt2d, L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  InitWires(): void;
  MoreWires(): Standard_Boolean;
  NextWire(): void;
  RejectWire(L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  InitEdges(): void;
  MoreEdges(): Standard_Boolean;
  NextEdge(): void;
  RejectEdge(L: gp_Lin2d, Par: Standard_Real): Standard_Boolean;
  CurrentEdge(E: BRepClass_Edge, Or: TopAbs_Orientation): void;
}

export declare class BRepClass_FaceClassifier extends BRepClass_FClassifier {
  Perform_1(F: TopoDS_Face, P: gp_Pnt2d, Tol: Standard_Real): void;
  Perform_2(F: TopoDS_Face, P: gp_Pnt, Tol: Standard_Real): void;
}

  export declare class BRepClass_FaceClassifier_1 extends BRepClass_FaceClassifier {
    constructor();
  }

  export declare class BRepClass_FaceClassifier_2 extends BRepClass_FaceClassifier {
    constructor(F: BRepClass_FaceExplorer, P: gp_Pnt2d, Tol: Standard_Real);
  }

  export declare class BRepClass_FaceClassifier_3 extends BRepClass_FaceClassifier {
    constructor(F: TopoDS_Face, P: gp_Pnt2d, Tol: Standard_Real);
  }

  export declare class BRepClass_FaceClassifier_4 extends BRepClass_FaceClassifier {
    constructor(F: TopoDS_Face, P: gp_Pnt, Tol: Standard_Real);
  }

export declare class BRepClass_FacePassiveClassifier {
  constructor()
  Reset(L: gp_Lin2d, P: Standard_Real, Tol: Standard_Real): void;
  Compare(E: BRepClass_Edge, Or: TopAbs_Orientation): void;
  Parameter(): Standard_Real;
  Intersector(): BRepClass_Intersector;
  ClosestIntersection(): Standard_Integer;
  State(): TopAbs_State;
  IsHeadOrEnd(): Standard_Boolean;
}

export declare class BRepClass3d {
  constructor();
  OuterShell(S: TopoDS_Solid): TopoDS_Shell;
}

export declare class BRepClass3d_BndBoxTreeSelectorPoint {
  constructor(theMapOfShape: TopTools_IndexedMapOfShape)
  Reject(theBox: Bnd_Box): Standard_Boolean;
  Accept(theObj: Standard_Integer): Standard_Boolean;
  SetCurrentPoint(theP: gp_Pnt): void;
}

export declare class BRepClass3d_BndBoxTreeSelectorLine {
  constructor(theMapOfShape: TopTools_IndexedMapOfShape)
  Reject(theBox: Bnd_Box): Standard_Boolean;
  Accept(theObj: Standard_Integer): Standard_Boolean;
  SetCurrentLine(theL: gp_Lin, theMaxParam: Standard_Real): void;
  GetEdgeParam(i: Standard_Integer, theOutE: TopoDS_Edge, theOutParam: Standard_Real, outLParam: Standard_Real): void;
  GetVertParam(i: Standard_Integer, theOutV: TopoDS_Vertex, outLParam: Standard_Real): void;
  GetNbEdgeParam(): Standard_Integer;
  GetNbVertParam(): Standard_Integer;
  ClearResults(): void;
  IsCorrect(): Standard_Boolean;
}

export declare class BRepClass3d_Intersector3d {
  constructor()
  Perform(L: gp_Lin, Prm: Standard_Real, Tol: Standard_Real, F: TopoDS_Face): void;
  IsDone(): Standard_Boolean;
  HasAPoint(): Standard_Boolean;
  UParameter(): Standard_Real;
  VParameter(): Standard_Real;
  WParameter(): Standard_Real;
  Pnt(): gp_Pnt;
  Transition(): IntCurveSurface_TransitionOnCurve;
  State(): TopAbs_State;
  Face(): TopoDS_Face;
}

export declare class BRepClass3d_SClassifier {
  Perform(S: BRepClass3d_SolidExplorer, P: gp_Pnt, Tol: Standard_Real): void;
  PerformInfinitePoint(S: BRepClass3d_SolidExplorer, Tol: Standard_Real): void;
  Rejected(): Standard_Boolean;
  State(): TopAbs_State;
  IsOnAFace(): Standard_Boolean;
  Face(): TopoDS_Face;
}

  export declare class BRepClass3d_SClassifier_1 extends BRepClass3d_SClassifier {
    constructor();
  }

  export declare class BRepClass3d_SClassifier_2 extends BRepClass3d_SClassifier {
    constructor(S: BRepClass3d_SolidExplorer, P: gp_Pnt, Tol: Standard_Real);
  }

export declare class BRepClass3d_SolidExplorer {
  InitShape(S: TopoDS_Shape): void;
  Reject(P: gp_Pnt): Standard_Boolean;
  FindAPointInTheFace_1(F: TopoDS_Face, P: gp_Pnt, Param: Standard_Real): Standard_Boolean;
  FindAPointInTheFace_2(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real): Standard_Boolean;
  FindAPointInTheFace_3(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, theVecD1U: gp_Vec, theVecD1V: gp_Vec): Standard_Boolean;
  FindAPointInTheFace_4(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real): Standard_Boolean;
  FindAPointInTheFace_5(F: TopoDS_Face, P: gp_Pnt): Standard_Boolean;
  FindAPointInTheFace_6(F: TopoDS_Face, u: Standard_Real, v: Standard_Real): Standard_Boolean;
  PointInTheFace_1(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, Index: Standard_Integer): Standard_Boolean;
  PointInTheFace_2(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, Index: Standard_Integer, surf: any, u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real): Standard_Boolean;
  PointInTheFace_3(F: TopoDS_Face, P: gp_Pnt, u: Standard_Real, v: Standard_Real, Param: Standard_Real, Index: Standard_Integer, surf: any, u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, theVecD1U: gp_Vec, theVecD1V: gp_Vec): Standard_Boolean;
  InitShell(): void;
  MoreShell(): Standard_Boolean;
  NextShell(): void;
  CurrentShell(): TopoDS_Shell;
  RejectShell(L: gp_Lin): Standard_Boolean;
  InitFace(): void;
  MoreFace(): Standard_Boolean;
  NextFace(): void;
  CurrentFace(): TopoDS_Face;
  RejectFace(L: gp_Lin): Standard_Boolean;
  Segment(P: gp_Pnt, L: gp_Lin, Par: Standard_Real): Standard_Integer;
  OtherSegment(P: gp_Pnt, L: gp_Lin, Par: Standard_Real): Standard_Integer;
  GetFaceSegmentIndex(): Standard_Integer;
  DumpSegment(P: gp_Pnt, L: gp_Lin, Par: Standard_Real, S: TopAbs_State): void;
  Box(): Bnd_Box;
  GetShape(): TopoDS_Shape;
  Intersector(F: TopoDS_Face): IntCurvesFace_Intersector;
  GetMapEV(): TopTools_IndexedMapOfShape;
  Destroy(): void;
}

  export declare class BRepClass3d_SolidExplorer_1 extends BRepClass3d_SolidExplorer {
    constructor();
  }

  export declare class BRepClass3d_SolidExplorer_2 extends BRepClass3d_SolidExplorer {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepClass3d_SolidClassifier extends BRepClass3d_SClassifier {
  Load(S: TopoDS_Shape): void;
  Perform(P: gp_Pnt, Tol: Standard_Real): void;
  PerformInfinitePoint(Tol: Standard_Real): void;
  Destroy(): void;
}

  export declare class BRepClass3d_SolidClassifier_1 extends BRepClass3d_SolidClassifier {
    constructor();
  }

  export declare class BRepClass3d_SolidClassifier_2 extends BRepClass3d_SolidClassifier {
    constructor(S: TopoDS_Shape);
  }

  export declare class BRepClass3d_SolidClassifier_3 extends BRepClass3d_SolidClassifier {
    constructor(S: TopoDS_Shape, P: gp_Pnt, Tol: Standard_Real);
  }

export declare class BRepClass3d_SolidPassiveClassifier {
  constructor()
  Reset(L: gp_Lin, P: Standard_Real, Tol: Standard_Real): void;
  Compare(F: TopoDS_Face, Or: TopAbs_Orientation): void;
  Parameter(): Standard_Real;
  HasIntersection(): Standard_Boolean;
  Intersector(): BRepClass3d_Intersector3d;
  State(): TopAbs_State;
}

export declare class BRepExtrema_SolutionElem {
  Dist(): Standard_Real;
  Point(): gp_Pnt;
  SupportKind(): BRepExtrema_SupportType;
  Vertex(): TopoDS_Vertex;
  Edge(): TopoDS_Edge;
  Face(): TopoDS_Face;
  EdgeParameter(theParam: Standard_Real): void;
  FaceParameter(theU: Standard_Real, theV: Standard_Real): void;
}

  export declare class BRepExtrema_SolutionElem_1 extends BRepExtrema_SolutionElem {
    constructor();
  }

  export declare class BRepExtrema_SolutionElem_2 extends BRepExtrema_SolutionElem {
    constructor(theDist: Standard_Real, thePoint: gp_Pnt, theSolType: BRepExtrema_SupportType, theVertex: TopoDS_Vertex);
  }

  export declare class BRepExtrema_SolutionElem_3 extends BRepExtrema_SolutionElem {
    constructor(theDist: Standard_Real, thePoint: gp_Pnt, theSolType: BRepExtrema_SupportType, theEdge: TopoDS_Edge, theParam: Standard_Real);
  }

  export declare class BRepExtrema_SolutionElem_4 extends BRepExtrema_SolutionElem {
    constructor(theDist: Standard_Real, thePoint: gp_Pnt, theSolType: BRepExtrema_SupportType, theFace: TopoDS_Face, theU: Standard_Real, theV: Standard_Real);
  }

export declare class BRepExtrema_DistShapeShape {
  SetDeflection(theDeflection: Standard_Real): void;
  LoadS1(Shape1: TopoDS_Shape): void;
  LoadS2(Shape1: TopoDS_Shape): void;
  Perform(): Standard_Boolean;
  IsDone(): Standard_Boolean;
  NbSolution(): Standard_Integer;
  Value(): Standard_Real;
  InnerSolution(): Standard_Boolean;
  PointOnShape1(N: Standard_Integer): gp_Pnt;
  PointOnShape2(N: Standard_Integer): gp_Pnt;
  SupportTypeShape1(N: Standard_Integer): BRepExtrema_SupportType;
  SupportTypeShape2(N: Standard_Integer): BRepExtrema_SupportType;
  SupportOnShape1(N: Standard_Integer): TopoDS_Shape;
  SupportOnShape2(N: Standard_Integer): TopoDS_Shape;
  ParOnEdgeS1(N: Standard_Integer, t: Standard_Real): void;
  ParOnEdgeS2(N: Standard_Integer, t: Standard_Real): void;
  ParOnFaceS1(N: Standard_Integer, u: Standard_Real, v: Standard_Real): void;
  ParOnFaceS2(N: Standard_Integer, u: Standard_Real, v: Standard_Real): void;
  Dump(o: Standard_OStream): void;
  SetFlag(F: Extrema_ExtFlag): void;
  SetAlgo(A: Extrema_ExtAlgo): void;
}

  export declare class BRepExtrema_DistShapeShape_1 extends BRepExtrema_DistShapeShape {
    constructor();
  }

  export declare class BRepExtrema_DistShapeShape_2 extends BRepExtrema_DistShapeShape {
    constructor(Shape1: TopoDS_Shape, Shape2: TopoDS_Shape, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

  export declare class BRepExtrema_DistShapeShape_3 extends BRepExtrema_DistShapeShape {
    constructor(Shape1: TopoDS_Shape, Shape2: TopoDS_Shape, theDeflection: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

export declare class BRepExtrema_DistanceSS {
  IsDone(): Standard_Boolean;
  DistValue(): Standard_Real;
  Seq1Value(): BRepExtrema_SeqOfSolution;
  Seq2Value(): BRepExtrema_SeqOfSolution;
  SetFlag(F: Extrema_ExtFlag): void;
  SetAlgo(A: Extrema_ExtAlgo): void;
}

  export declare class BRepExtrema_DistanceSS_1 extends BRepExtrema_DistanceSS {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, B1: Bnd_Box, B2: Bnd_Box, DstRef: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

  export declare class BRepExtrema_DistanceSS_2 extends BRepExtrema_DistanceSS {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, B1: Bnd_Box, B2: Bnd_Box, DstRef: Standard_Real, aDeflection: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

export declare class BRepExtrema_ExtCC {
  Initialize(E2: TopoDS_Edge): void;
  Perform(E1: TopoDS_Edge): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  IsParallel(): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  ParameterOnE1(N: Standard_Integer): Standard_Real;
  PointOnE1(N: Standard_Integer): gp_Pnt;
  ParameterOnE2(N: Standard_Integer): Standard_Real;
  PointOnE2(N: Standard_Integer): gp_Pnt;
  TrimmedSquareDistances(dist11: Standard_Real, distP12: Standard_Real, distP21: Standard_Real, distP22: Standard_Real, P11: gp_Pnt, P12: gp_Pnt, P21: gp_Pnt, P22: gp_Pnt): void;
}

  export declare class BRepExtrema_ExtCC_1 extends BRepExtrema_ExtCC {
    constructor();
  }

  export declare class BRepExtrema_ExtCC_2 extends BRepExtrema_ExtCC {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge);
  }

export declare class BRepExtrema_ExtCF {
  Initialize(E: TopoDS_Edge, F: TopoDS_Face): void;
  Perform(E: TopoDS_Edge, F: TopoDS_Face): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsParallel(): Standard_Boolean;
  ParameterOnEdge(N: Standard_Integer): Standard_Real;
  ParameterOnFace(N: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
  PointOnEdge(N: Standard_Integer): gp_Pnt;
  PointOnFace(N: Standard_Integer): gp_Pnt;
}

  export declare class BRepExtrema_ExtCF_1 extends BRepExtrema_ExtCF {
    constructor();
  }

  export declare class BRepExtrema_ExtCF_2 extends BRepExtrema_ExtCF {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class BRepExtrema_ExtFF {
  Initialize(F2: TopoDS_Face): void;
  Perform(F1: TopoDS_Face, F2: TopoDS_Face): void;
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  ParameterOnFace1(N: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
  ParameterOnFace2(N: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
  PointOnFace1(N: Standard_Integer): gp_Pnt;
  PointOnFace2(N: Standard_Integer): gp_Pnt;
}

  export declare class BRepExtrema_ExtFF_1 extends BRepExtrema_ExtFF {
    constructor();
  }

  export declare class BRepExtrema_ExtFF_2 extends BRepExtrema_ExtFF {
    constructor(F1: TopoDS_Face, F2: TopoDS_Face);
  }

export declare class BRepExtrema_ExtPC {
  Initialize(E: TopoDS_Edge): void;
  Perform(V: TopoDS_Vertex): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  IsMin(N: Standard_Integer): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Parameter(N: Standard_Integer): Standard_Real;
  Point(N: Standard_Integer): gp_Pnt;
  TrimmedSquareDistances(dist1: Standard_Real, dist2: Standard_Real, pnt1: gp_Pnt, pnt2: gp_Pnt): void;
}

  export declare class BRepExtrema_ExtPC_1 extends BRepExtrema_ExtPC {
    constructor();
  }

  export declare class BRepExtrema_ExtPC_2 extends BRepExtrema_ExtPC {
    constructor(V: TopoDS_Vertex, E: TopoDS_Edge);
  }

export declare class BRepExtrema_ExtPF {
  Initialize(TheFace: TopoDS_Face, TheFlag: Extrema_ExtFlag, TheAlgo: Extrema_ExtAlgo): void;
  Perform(TheVertex: TopoDS_Vertex, TheFace: TopoDS_Face): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Parameter(N: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
  Point(N: Standard_Integer): gp_Pnt;
  SetFlag(F: Extrema_ExtFlag): void;
  SetAlgo(A: Extrema_ExtAlgo): void;
}

  export declare class BRepExtrema_ExtPF_1 extends BRepExtrema_ExtPF {
    constructor();
  }

  export declare class BRepExtrema_ExtPF_2 extends BRepExtrema_ExtPF {
    constructor(TheVertex: TopoDS_Vertex, TheFace: TopoDS_Face, TheFlag: Extrema_ExtFlag, TheAlgo: Extrema_ExtAlgo);
  }

export declare class BRepExtrema_TriangleSet extends BVH_PrimitiveSet3d {
  Size(): Standard_Integer;
  Box_1(theIndex: Standard_Integer): BVH_Box<Standard_Real, 3>;
  Center(theIndex: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  Clear(): void;
  Init(theFaces: BRepExtrema_ShapeList): Standard_Boolean;
  GetVertices(theIndex: Standard_Integer, theVertex1: BVH_Vec3d, theVertex2: BVH_Vec3d, theVertex3: BVH_Vec3d): void;
  GetFaceID(theIndex: Standard_Integer): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepExtrema_TriangleSet_1 extends BRepExtrema_TriangleSet {
    constructor();
  }

  export declare class BRepExtrema_TriangleSet_2 extends BRepExtrema_TriangleSet {
    constructor(theFaces: BRepExtrema_ShapeList);
  }

export declare class BRepExtrema_OverlapTool {
  LoadTriangleSets(theSet1: any, theSet2: any): void;
  Perform(theTolerance: Standard_Real): void;
  IsDone(): Standard_Boolean;
  MarkDirty(): void;
  OverlapSubShapes1(): BRepExtrema_MapOfIntegerPackedMapOfInteger;
  OverlapSubShapes2(): BRepExtrema_MapOfIntegerPackedMapOfInteger;
  SetElementFilter(theFilter: BRepExtrema_ElementFilter): void;
  RejectNode(theCornerMin1: BVH_Vec3d, theCornerMax1: BVH_Vec3d, theCornerMin2: BVH_Vec3d, theCornerMax2: BVH_Vec3d, a4: Standard_Real): Standard_Boolean;
  Accept(theLeaf1: Standard_Integer, theLeaf2: Standard_Integer): Standard_Boolean;
}

  export declare class BRepExtrema_OverlapTool_1 extends BRepExtrema_OverlapTool {
    constructor();
  }

  export declare class BRepExtrema_OverlapTool_2 extends BRepExtrema_OverlapTool {
    constructor(theSet1: any, theSet2: any);
  }

export declare class BRepExtrema_Poly {
  constructor();
  Distance(S1: TopoDS_Shape, S2: TopoDS_Shape, P1: gp_Pnt, P2: gp_Pnt, dist: Standard_Real): Standard_Boolean;
}

export declare class BRepExtrema_SelfIntersection extends BRepExtrema_ElementFilter {
  Tolerance(): Standard_Real;
  SetTolerance(theTolerance: Standard_Real): void;
  LoadShape(theShape: TopoDS_Shape): Standard_Boolean;
  Perform(): void;
  IsDone(): Standard_Boolean;
  OverlapElements(): BRepExtrema_MapOfIntegerPackedMapOfInteger;
  GetSubShape(theID: Standard_Integer): TopoDS_Face;
  ElementSet(): any;
}

  export declare class BRepExtrema_SelfIntersection_1 extends BRepExtrema_SelfIntersection {
    constructor(theTolerance: Standard_Real);
  }

  export declare class BRepExtrema_SelfIntersection_2 extends BRepExtrema_SelfIntersection {
    constructor(theShape: TopoDS_Shape, theTolerance: Standard_Real);
  }

export declare class BRepExtrema_ShapeProximity {
  Tolerance(): Standard_Real;
  SetTolerance(theTolerance: Standard_Real): void;
  LoadShape1(theShape1: TopoDS_Shape): Standard_Boolean;
  LoadShape2(theShape2: TopoDS_Shape): Standard_Boolean;
  Perform(): void;
  IsDone(): Standard_Boolean;
  OverlapSubShapes1(): BRepExtrema_MapOfIntegerPackedMapOfInteger;
  OverlapSubShapes2(): BRepExtrema_MapOfIntegerPackedMapOfInteger;
  GetSubShape1(theID: Standard_Integer): TopoDS_Face;
  GetSubShape2(theID: Standard_Integer): TopoDS_Face;
  ElementSet1(): any;
  ElementSet2(): any;
}

  export declare class BRepExtrema_ShapeProximity_1 extends BRepExtrema_ShapeProximity {
    constructor(theTolerance: Standard_Real);
  }

  export declare class BRepExtrema_ShapeProximity_2 extends BRepExtrema_ShapeProximity {
    constructor(theShape1: TopoDS_Shape, theShape2: TopoDS_Shape, theTolerance: Standard_Real);
  }

export declare class BRepExtrema_UnCompatibleShape extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepExtrema_UnCompatibleShape_1 extends BRepExtrema_UnCompatibleShape {
    constructor();
  }

  export declare class BRepExtrema_UnCompatibleShape_2 extends BRepExtrema_UnCompatibleShape {
    constructor(theMessage: Standard_CString);
  }

export declare class MAT_Arc extends Standard_Transient {
  constructor(ArcIndex: Standard_Integer, GeomIndex: Standard_Integer, FirstElement: any, SecondElement: any)
  Index(): Standard_Integer;
  GeomIndex(): Standard_Integer;
  FirstElement(): any;
  SecondElement(): any;
  FirstNode(): any;
  SecondNode(): any;
  TheOtherNode(aNode: any): any;
  HasNeighbour(aNode: any, aSide: MAT_Side): Standard_Boolean;
  Neighbour(aNode: any, aSide: MAT_Side): any;
  SetIndex(anInteger: Standard_Integer): void;
  SetGeomIndex(anInteger: Standard_Integer): void;
  SetFirstElement(aBasicElt: any): void;
  SetSecondElement(aBasicElt: any): void;
  SetFirstNode(aNode: any): void;
  SetSecondNode(aNode: any): void;
  SetFirstArc(aSide: MAT_Side, anArc: any): void;
  SetSecondArc(aSide: MAT_Side, anArc: any): void;
  SetNeighbour(aSide: MAT_Side, aNode: any, anArc: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT_BasicElt extends Standard_Transient {
  constructor(anInteger: Standard_Integer)
  StartArc(): any;
  EndArc(): any;
  Index(): Standard_Integer;
  GeomIndex(): Standard_Integer;
  SetStartArc(anArc: any): void;
  SetEndArc(anArc: any): void;
  SetIndex(anInteger: Standard_Integer): void;
  SetGeomIndex(anInteger: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT_Node extends Standard_Transient {
  constructor(GeomIndex: Standard_Integer, LinkedArc: any, Distance: Standard_Real)
  GeomIndex(): Standard_Integer;
  Index(): Standard_Integer;
  LinkedArcs(S: MAT_SequenceOfArc): void;
  NearElts(S: MAT_SequenceOfBasicElt): void;
  Distance(): Standard_Real;
  PendingNode(): Standard_Boolean;
  OnBasicElt(): Standard_Boolean;
  Infinite(): Standard_Boolean;
  SetIndex(anIndex: Standard_Integer): void;
  SetLinkedArc(anArc: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Bisector_Bisec {
  constructor()
  Perform_1(Cu1: any, Cu2: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, ajointype: GeomAbs_JoinType, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Perform_2(Cu: any, Pnt: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Perform_3(Pnt: any, Cu: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Perform_4(Pnt1: any, Pnt2: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Value(): any;
  ChangeValue(): any;
}

export declare class MAT2d_Tool2d {
  constructor()
  Sense(aside: MAT_Side): void;
  SetJoinType(aJoinType: GeomAbs_JoinType): void;
  InitItems(aCircuit: any): void;
  NumberOfItems(): Standard_Integer;
  ToleranceOfConfusion(): Standard_Real;
  FirstPoint(anitem: Standard_Integer, dist: Standard_Real): Standard_Integer;
  TangentBefore(anitem: Standard_Integer, IsOpenResult: Standard_Boolean): Standard_Integer;
  TangentAfter(anitem: Standard_Integer, IsOpenResult: Standard_Boolean): Standard_Integer;
  Tangent(bisector: Standard_Integer): Standard_Integer;
  CreateBisector(abisector: any): void;
  TrimBisector_1(abisector: any): Standard_Boolean;
  TrimBisector_2(abisector: any, apoint: Standard_Integer): Standard_Boolean;
  IntersectBisector(bisectorone: any, bisectortwo: any, intpnt: Standard_Integer): Standard_Real;
  Distance(abisector: any, param1: Standard_Real, param2: Standard_Real): Standard_Real;
  Dump(bisector: Standard_Integer, erease: Standard_Integer): void;
  GeomBis(Index: Standard_Integer): Bisector_Bisec;
  GeomElt(Index: Standard_Integer): any;
  GeomPnt(Index: Standard_Integer): gp_Pnt2d;
  GeomVec(Index: Standard_Integer): gp_Vec2d;
  Circuit(): any;
  BisecFusion(Index1: Standard_Integer, Index2: Standard_Integer): void;
  ChangeGeomBis(Index: Standard_Integer): Bisector_Bisec;
}

export declare class MAT2d_BiInt {
  constructor(I1: Standard_Integer, I2: Standard_Integer)
  FirstIndex_1(): Standard_Integer;
  SecondIndex_1(): Standard_Integer;
  FirstIndex_2(I1: Standard_Integer): void;
  SecondIndex_2(I2: Standard_Integer): void;
  IsEqual(B: MAT2d_BiInt): Standard_Boolean;
}

export declare class MAT2d_MapBiIntHasher {
  constructor();
  HashCode(theKey: MAT2d_BiInt, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(Key1: MAT2d_BiInt, Key2: MAT2d_BiInt): Standard_Boolean;
}

export declare class BRepMAT2d_BisectingLocus {
  constructor()
  Compute(anExplo: BRepMAT2d_Explorer, LineIndex: Standard_Integer, aSide: MAT_Side, aJoinType: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Graph(): any;
  NumberOfContours(): Standard_Integer;
  NumberOfElts(IndLine: Standard_Integer): Standard_Integer;
  NumberOfSections(IndLine: Standard_Integer, Index: Standard_Integer): Standard_Integer;
  BasicElt(IndLine: Standard_Integer, Index: Standard_Integer): any;
  GeomElt_1(aBasicElt: any): any;
  GeomElt_2(aNode: any): gp_Pnt2d;
  GeomBis(anArc: any, Reverse: Standard_Boolean): Bisector_Bisec;
}

export declare class BRepMAT2d_LinkTopoBilo {
  Perform(Explo: BRepMAT2d_Explorer, BiLo: BRepMAT2d_BisectingLocus): void;
  Init(S: TopoDS_Shape): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  GeneratingShape(aBE: any): TopoDS_Shape;
}

  export declare class BRepMAT2d_LinkTopoBilo_1 extends BRepMAT2d_LinkTopoBilo {
    constructor();
  }

  export declare class BRepMAT2d_LinkTopoBilo_2 extends BRepMAT2d_LinkTopoBilo {
    constructor(Explo: BRepMAT2d_Explorer, BiLo: BRepMAT2d_BisectingLocus);
  }

export declare class BRepGProp {
  constructor();
  LinearProperties(S: TopoDS_Shape, LProps: GProp_GProps, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  SurfaceProperties_1(S: TopoDS_Shape, SProps: GProp_GProps, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  SurfaceProperties_2(S: TopoDS_Shape, SProps: GProp_GProps, Eps: Standard_Real, SkipShared: Standard_Boolean): Standard_Real;
  VolumeProperties_1(S: TopoDS_Shape, VProps: GProp_GProps, OnlyClosed: Standard_Boolean, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  VolumeProperties_2(S: TopoDS_Shape, VProps: GProp_GProps, Eps: Standard_Real, OnlyClosed: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  VolumePropertiesGK_1(S: TopoDS_Shape, VProps: GProp_GProps, Eps: Standard_Real, OnlyClosed: Standard_Boolean, IsUseSpan: Standard_Boolean, CGFlag: Standard_Boolean, IFlag: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  VolumePropertiesGK_2(S: TopoDS_Shape, VProps: GProp_GProps, thePln: gp_Pln, Eps: Standard_Real, OnlyClosed: Standard_Boolean, IsUseSpan: Standard_Boolean, CGFlag: Standard_Boolean, IFlag: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
}

export declare class BRepGProp_Cinert extends GProp_GProps {
  SetLocation(CLocation: gp_Pnt): void;
  Perform(C: BRepAdaptor_Curve): void;
}

  export declare class BRepGProp_Cinert_1 extends BRepGProp_Cinert {
    constructor();
  }

  export declare class BRepGProp_Cinert_2 extends BRepGProp_Cinert {
    constructor(C: BRepAdaptor_Curve, CLocation: gp_Pnt);
  }

export declare class BRepGProp_Domain {
  Init_1(F: TopoDS_Face): void;
  More(): Standard_Boolean;
  Init_2(): void;
  Value(): TopoDS_Edge;
  Next(): void;
}

  export declare class BRepGProp_Domain_1 extends BRepGProp_Domain {
    constructor();
  }

  export declare class BRepGProp_Domain_2 extends BRepGProp_Domain {
    constructor(F: TopoDS_Face);
  }

export declare class BRepGProp_EdgeTool {
  constructor();
  FirstParameter(C: BRepAdaptor_Curve): Standard_Real;
  LastParameter(C: BRepAdaptor_Curve): Standard_Real;
  IntegrationOrder(C: BRepAdaptor_Curve): Standard_Integer;
  Value(C: BRepAdaptor_Curve, U: Standard_Real): gp_Pnt;
  D1(C: BRepAdaptor_Curve, U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  NbIntervals(C: BRepAdaptor_Curve, S: GeomAbs_Shape): Standard_Integer;
  Intervals(C: BRepAdaptor_Curve, T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
}

export declare class BRepGProp_Face {
  Load_1(F: TopoDS_Face): void;
  VIntegrationOrder(): Standard_Integer;
  NaturalRestriction(): Standard_Boolean;
  GetFace(): TopoDS_Face;
  Value2d(U: Standard_Real): gp_Pnt2d;
  SIntOrder(Eps: Standard_Real): Standard_Integer;
  SVIntSubs(): Standard_Integer;
  SUIntSubs(): Standard_Integer;
  UKnots(Knots: TColStd_Array1OfReal): void;
  VKnots(Knots: TColStd_Array1OfReal): void;
  LIntOrder(Eps: Standard_Real): Standard_Integer;
  LIntSubs(): Standard_Integer;
  LKnots(Knots: TColStd_Array1OfReal): void;
  UIntegrationOrder(): Standard_Integer;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Normal(U: Standard_Real, V: Standard_Real, P: gp_Pnt, VNor: gp_Vec): void;
  Load_2(E: TopoDS_Edge): boolean;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IntegrationOrder(): Standard_Integer;
  D12d(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  Load_3(IsFirstParam: Standard_Boolean, theIsoType: GeomAbs_IsoType): void;
  GetUKnots(theUMin: Standard_Real, theUMax: Standard_Real, theUKnots: any): void;
  GetTKnots(theTMin: Standard_Real, theTMax: Standard_Real, theTKnots: any): void;
}

  export declare class BRepGProp_Face_1 extends BRepGProp_Face {
    constructor(IsUseSpan: Standard_Boolean);
  }

  export declare class BRepGProp_Face_2 extends BRepGProp_Face {
    constructor(F: TopoDS_Face, IsUseSpan: Standard_Boolean);
  }

export declare class BRepGProp_MeshCinert extends GProp_GProps {
  constructor()
  SetLocation(CLocation: gp_Pnt): void;
  Perform(theNodes: TColgp_Array1OfPnt): void;
  PreparePolygon(theE: TopoDS_Edge, thePolyg: any): void;
}

export declare class BRepGProp_MeshProps extends GProp_GProps {
  constructor(theType: any)
  SetLocation(theLocation: gp_Pnt): void;
  Perform_1(theMesh: any, theLoc: TopLoc_Location, theOri: TopAbs_Orientation): void;
  Perform_2(theNodes: TColgp_Array1OfPnt, theTriangles: Poly_Array1OfTriangle, theOri: TopAbs_Orientation): void;
  CalculateProps(p1: gp_Pnt, p2: gp_Pnt, p3: gp_Pnt, Apex: gp_Pnt, isVolume: Standard_Boolean, GProps: Standard_Real [10], NbGaussPoints: Standard_Integer, GaussPnts: Standard_Real): void;
  GetMeshObjType(): any;
}

export declare class BRepGProp_Sinert extends GProp_GProps {
  SetLocation(SLocation: gp_Pnt): void;
  Perform_1(S: BRepGProp_Face): void;
  Perform_2(S: BRepGProp_Face, D: BRepGProp_Domain): void;
  Perform_3(S: BRepGProp_Face, Eps: Standard_Real): Standard_Real;
  Perform_4(S: BRepGProp_Face, D: BRepGProp_Domain, Eps: Standard_Real): Standard_Real;
  GetEpsilon(): Standard_Real;
}

  export declare class BRepGProp_Sinert_1 extends BRepGProp_Sinert {
    constructor();
  }

  export declare class BRepGProp_Sinert_2 extends BRepGProp_Sinert {
    constructor(S: BRepGProp_Face, SLocation: gp_Pnt);
  }

  export declare class BRepGProp_Sinert_3 extends BRepGProp_Sinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, SLocation: gp_Pnt);
  }

  export declare class BRepGProp_Sinert_4 extends BRepGProp_Sinert {
    constructor(S: BRepGProp_Face, SLocation: gp_Pnt, Eps: Standard_Real);
  }

  export declare class BRepGProp_Sinert_5 extends BRepGProp_Sinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, SLocation: gp_Pnt, Eps: Standard_Real);
  }

export declare class BRepGProp_UFunction extends math_Function {
  constructor(theSurface: BRepGProp_Face, theVertex: gp_Pnt, IsByPoint: Standard_Boolean, theCoeffs: Standard_Address)
  SetValueType(theType: GProp_ValueType): void;
  SetVParam(theVParam: Standard_Real): void;
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
}

export declare class BRepGProp_TFunction extends math_Function {
  constructor(theSurface: BRepGProp_Face, theVertex: gp_Pnt, IsByPoint: Standard_Boolean, theCoeffs: Standard_Address, theUMin: Standard_Real, theTolerance: Standard_Real)
  Init(): void;
  SetNbKronrodPoints(theNbPoints: Standard_Integer): void;
  SetValueType(aType: GProp_ValueType): void;
  SetTolerance(aTol: Standard_Real): void;
  ErrorReached(): Standard_Real;
  AbsolutError(): Standard_Real;
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
}

export declare class BRepGProp_Vinert extends GProp_GProps {
  SetLocation(VLocation: gp_Pnt): void;
  Perform_1(S: BRepGProp_Face): void;
  Perform_2(S: BRepGProp_Face, Eps: Standard_Real): Standard_Real;
  Perform_3(S: BRepGProp_Face, O: gp_Pnt): void;
  Perform_4(S: BRepGProp_Face, O: gp_Pnt, Eps: Standard_Real): Standard_Real;
  Perform_5(S: BRepGProp_Face, Pl: gp_Pln): void;
  Perform_6(S: BRepGProp_Face, Pl: gp_Pln, Eps: Standard_Real): Standard_Real;
  Perform_7(S: BRepGProp_Face, D: BRepGProp_Domain): void;
  Perform_8(S: BRepGProp_Face, D: BRepGProp_Domain, Eps: Standard_Real): Standard_Real;
  Perform_9(S: BRepGProp_Face, D: BRepGProp_Domain, O: gp_Pnt): void;
  Perform_10(S: BRepGProp_Face, D: BRepGProp_Domain, O: gp_Pnt, Eps: Standard_Real): Standard_Real;
  Perform_11(S: BRepGProp_Face, D: BRepGProp_Domain, Pl: gp_Pln): void;
  Perform_12(S: BRepGProp_Face, D: BRepGProp_Domain, Pl: gp_Pln, Eps: Standard_Real): Standard_Real;
  GetEpsilon(): Standard_Real;
}

  export declare class BRepGProp_Vinert_1 extends BRepGProp_Vinert {
    constructor();
  }

  export declare class BRepGProp_Vinert_2 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, VLocation: gp_Pnt);
  }

  export declare class BRepGProp_Vinert_3 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, VLocation: gp_Pnt, Eps: Standard_Real);
  }

  export declare class BRepGProp_Vinert_4 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, O: gp_Pnt, VLocation: gp_Pnt);
  }

  export declare class BRepGProp_Vinert_5 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, O: gp_Pnt, VLocation: gp_Pnt, Eps: Standard_Real);
  }

  export declare class BRepGProp_Vinert_6 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, Pl: gp_Pln, VLocation: gp_Pnt);
  }

  export declare class BRepGProp_Vinert_7 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, Pl: gp_Pln, VLocation: gp_Pnt, Eps: Standard_Real);
  }

  export declare class BRepGProp_Vinert_8 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, VLocation: gp_Pnt);
  }

  export declare class BRepGProp_Vinert_9 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, VLocation: gp_Pnt, Eps: Standard_Real);
  }

  export declare class BRepGProp_Vinert_10 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, O: gp_Pnt, VLocation: gp_Pnt);
  }

  export declare class BRepGProp_Vinert_11 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, O: gp_Pnt, VLocation: gp_Pnt, Eps: Standard_Real);
  }

  export declare class BRepGProp_Vinert_12 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, Pl: gp_Pln, VLocation: gp_Pnt);
  }

  export declare class BRepGProp_Vinert_13 extends BRepGProp_Vinert {
    constructor(S: BRepGProp_Face, D: BRepGProp_Domain, Pl: gp_Pln, VLocation: gp_Pnt, Eps: Standard_Real);
  }

export declare class BRepIntCurveSurface_Inter {
  constructor()
  Init_1(theShape: TopoDS_Shape, theCurve: GeomAdaptor_Curve, theTol: Standard_Real): void;
  Init_2(theShape: TopoDS_Shape, theLine: gp_Lin, theTol: Standard_Real): void;
  Load(theShape: TopoDS_Shape, theTol: Standard_Real): void;
  Init_3(theCurve: GeomAdaptor_Curve): void;
  More(): Standard_Boolean;
  Next(): void;
  Point(): IntCurveSurface_IntersectionPoint;
  Pnt(): gp_Pnt;
  U(): Standard_Real;
  V(): Standard_Real;
  W(): Standard_Real;
  State(): TopAbs_State;
  Transition(): IntCurveSurface_TransitionOnCurve;
  Face(): TopoDS_Face;
}

export declare class BRepLib {
  constructor();
  Precision_1(P: Standard_Real): void;
  Precision_2(): Standard_Real;
  Plane_1(P: any): void;
  Plane_2(): any;
  CheckSameRange(E: TopoDS_Edge, Confusion: Standard_Real): Standard_Boolean;
  SameRange(E: TopoDS_Edge, Tolerance: Standard_Real): void;
  BuildCurve3d(E: TopoDS_Edge, Tolerance: Standard_Real, Continuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegment: Standard_Integer): Standard_Boolean;
  BuildCurves3d_1(S: TopoDS_Shape, Tolerance: Standard_Real, Continuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegment: Standard_Integer): Standard_Boolean;
  BuildCurves3d_2(S: TopoDS_Shape): Standard_Boolean;
  BuildPCurveForEdgeOnPlane_1(theE: TopoDS_Edge, theF: TopoDS_Face): void;
  BuildPCurveForEdgeOnPlane_2(theE: TopoDS_Edge, theF: TopoDS_Face, aC2D: any, bToUpdate: Standard_Boolean): void;
  UpdateEdgeTol(E: TopoDS_Edge, MinToleranceRequest: Standard_Real, MaxToleranceToCheck: Standard_Real): Standard_Boolean;
  UpdateEdgeTolerance(S: TopoDS_Shape, MinToleranceRequest: Standard_Real, MaxToleranceToCheck: Standard_Real): Standard_Boolean;
  SameParameter_1(theEdge: TopoDS_Edge, Tolerance: Standard_Real): void;
  SameParameter_2(theEdge: TopoDS_Edge, theTolerance: Standard_Real, theNewTol: Standard_Real, IsUseOldEdge: Standard_Boolean): TopoDS_Edge;
  SameParameter_3(S: TopoDS_Shape, Tolerance: Standard_Real, forced: Standard_Boolean): void;
  SameParameter_4(S: TopoDS_Shape, theReshaper: BRepTools_ReShape, Tolerance: Standard_Real, forced: Standard_Boolean): void;
  UpdateTolerances_1(S: TopoDS_Shape, verifyFaceTolerance: Standard_Boolean): void;
  UpdateTolerances_2(S: TopoDS_Shape, theReshaper: BRepTools_ReShape, verifyFaceTolerance: Standard_Boolean): void;
  UpdateInnerTolerances(S: TopoDS_Shape): void;
  OrientClosedSolid(solid: TopoDS_Solid): Standard_Boolean;
  EncodeRegularity_1(S: TopoDS_Shape, TolAng: Standard_Real): void;
  EncodeRegularity_2(S: TopoDS_Shape, LE: TopTools_ListOfShape, TolAng: Standard_Real): void;
  EncodeRegularity_3(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, TolAng: Standard_Real): void;
  SortFaces(S: TopoDS_Shape, LF: TopTools_ListOfShape): void;
  ReverseSortFaces(S: TopoDS_Shape, LF: TopTools_ListOfShape): void;
  EnsureNormalConsistency(S: TopoDS_Shape, theAngTol: Standard_Real, ForceComputeNormals: Standard_Boolean): Standard_Boolean;
  BoundingVertex(theLV: NCollection_List<TopoDS_Shape>, theNewCenter: gp_Pnt, theNewTol: Standard_Real): void;
  FindValidRange_1(theCurve: Adaptor3d_Curve, theTolE: Standard_Real, theParV1: Standard_Real, thePntV1: gp_Pnt, theTolV1: Standard_Real, theParV2: Standard_Real, thePntV2: gp_Pnt, theTolV2: Standard_Real, theFirst: Standard_Real, theLast: Standard_Real): Standard_Boolean;
  FindValidRange_2(theEdge: TopoDS_Edge, theFirst: Standard_Real, theLast: Standard_Real): Standard_Boolean;
  ExtendFace(theF: TopoDS_Face, theExtVal: Standard_Real, theExtUMin: Standard_Boolean, theExtUMax: Standard_Boolean, theExtVMin: Standard_Boolean, theExtVMax: Standard_Boolean, theFExtended: TopoDS_Face): void;
}

export declare class BRepLib_CheckCurveOnSurface {
  Init(theEdge: TopoDS_Edge, theFace: TopoDS_Face): void;
  Perform(isTheMultyTheradDisabled: Standard_Boolean): void;
  Curve(): any;
  PCurve(): any;
  PCurve2(): any;
  Surface(): any;
  Range(theFirst: Standard_Real, theLast: Standard_Real): void;
  IsDone(): Standard_Boolean;
  ErrorStatus(): Standard_Integer;
  MaxDistance(): Standard_Real;
  MaxParameter(): Standard_Real;
}

  export declare class BRepLib_CheckCurveOnSurface_1 extends BRepLib_CheckCurveOnSurface {
    constructor();
  }

  export declare class BRepLib_CheckCurveOnSurface_2 extends BRepLib_CheckCurveOnSurface {
    constructor(theEdge: TopoDS_Edge, theFace: TopoDS_Face);
  }

export declare class BRepLib_FindSurface {
  Init(S: TopoDS_Shape, Tol: Standard_Real, OnlyPlane: Standard_Boolean, OnlyClosed: Standard_Boolean): void;
  Found(): Standard_Boolean;
  Surface(): any;
  Tolerance(): Standard_Real;
  ToleranceReached(): Standard_Real;
  Existed(): Standard_Boolean;
  Location(): TopLoc_Location;
}

  export declare class BRepLib_FindSurface_1 extends BRepLib_FindSurface {
    constructor();
  }

  export declare class BRepLib_FindSurface_2 extends BRepLib_FindSurface {
    constructor(S: TopoDS_Shape, Tol: Standard_Real, OnlyPlane: Standard_Boolean, OnlyClosed: Standard_Boolean);
  }

export declare class BRepLib_FuseEdges {
  constructor(theShape: TopoDS_Shape, PerformNow: Standard_Boolean)
  AvoidEdges(theMapEdg: TopTools_IndexedMapOfShape): void;
  SetConcatBSpl(theConcatBSpl: Standard_Boolean): void;
  Edges(theMapLstEdg: TopTools_DataMapOfIntegerListOfShape): void;
  ResultEdges(theMapEdg: TopTools_DataMapOfIntegerShape): void;
  Faces(theMapFac: TopTools_DataMapOfShapeShape): void;
  Shape(): TopoDS_Shape;
  NbVertices(): Standard_Integer;
  Perform(): void;
}

export declare class BRepMAT2d_Explorer {
  Clear(): void;
  Perform(aFace: TopoDS_Face): void;
  NumberOfContours(): Standard_Integer;
  NumberOfCurves(IndexContour: Standard_Integer): Standard_Integer;
  Init(IndexContour: Standard_Integer): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  Shape(): TopoDS_Shape;
  Contour(IndexContour: Standard_Integer): TColGeom2d_SequenceOfCurve;
  IsModified(aShape: TopoDS_Shape): Standard_Boolean;
  ModifiedShape(aShape: TopoDS_Shape): TopoDS_Shape;
  GetIsClosed(): TColStd_SequenceOfBoolean;
}

  export declare class BRepMAT2d_Explorer_1 extends BRepMAT2d_Explorer {
    constructor();
  }

  export declare class BRepMAT2d_Explorer_2 extends BRepMAT2d_Explorer {
    constructor(aFace: TopoDS_Face);
  }

export declare class BRepTopAdaptor_Tool {
  Init_1(F: TopoDS_Face, Tol2d: Standard_Real): void;
  Init_2(Surface: any, Tol2d: Standard_Real): void;
  GetTopolTool(): any;
  SetTopolTool(TT: any): void;
  GetSurface(): any;
  Destroy(): void;
}

  export declare class BRepTopAdaptor_Tool_1 extends BRepTopAdaptor_Tool {
    constructor();
  }

  export declare class BRepTopAdaptor_Tool_2 extends BRepTopAdaptor_Tool {
    constructor(F: TopoDS_Face, Tol2d: Standard_Real);
  }

  export declare class BRepTopAdaptor_Tool_3 extends BRepTopAdaptor_Tool {
    constructor(Surface: any, Tol2d: Standard_Real);
  }

export declare class BRepTopAdaptor_FClass2d {
  constructor(F: TopoDS_Face, Tol: Standard_Real)
  PerformInfinitePoint(): TopAbs_State;
  Perform(Puv: gp_Pnt2d, RecadreOnPeriodic: Standard_Boolean): TopAbs_State;
  Destroy(): void;
  Copy(Other: BRepTopAdaptor_FClass2d): BRepTopAdaptor_FClass2d;
  TestOnRestriction(Puv: gp_Pnt2d, Tol: Standard_Real, RecadreOnPeriodic: Standard_Boolean): TopAbs_State;
}

export declare class BRepTopAdaptor_HVertex extends Adaptor3d_HVertex {
  constructor(Vtx: TopoDS_Vertex, Curve: any)
  Vertex(): TopoDS_Vertex;
  ChangeVertex(): TopoDS_Vertex;
  Value(): gp_Pnt2d;
  Parameter(C: any): Standard_Real;
  Resolution(C: any): Standard_Real;
  Orientation(): TopAbs_Orientation;
  IsSame(Other: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepTopAdaptor_TopolTool extends Adaptor3d_TopolTool {
  Initialize_1(): void;
  Initialize_2(S: any): void;
  Initialize_3(Curve: any): void;
  Init(): void;
  More(): Standard_Boolean;
  Value(): any;
  Next(): void;
  Edge(): Standard_Address;
  InitVertexIterator(): void;
  MoreVertex(): Standard_Boolean;
  Vertex(): any;
  NextVertex(): void;
  Classify(P2d: gp_Pnt2d, Tol: Standard_Real, RecadreOnPeriodic: Standard_Boolean): TopAbs_State;
  IsThePointOn(P2d: gp_Pnt2d, Tol: Standard_Real, RecadreOnPeriodic: Standard_Boolean): Standard_Boolean;
  Orientation_1(C: any): TopAbs_Orientation;
  Orientation_2(C: any): TopAbs_Orientation;
  Destroy(): void;
  Has3d(): Standard_Boolean;
  Tol3d_1(C: any): Standard_Real;
  Tol3d_2(V: any): Standard_Real;
  Pnt(V: any): gp_Pnt;
  ComputeSamplePoints(): void;
  NbSamplesU(): Standard_Integer;
  NbSamplesV(): Standard_Integer;
  NbSamples(): Standard_Integer;
  SamplePoint(Index: Standard_Integer, P2d: gp_Pnt2d, P3d: gp_Pnt): void;
  DomainIsInfinite(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepTopAdaptor_TopolTool_1 extends BRepTopAdaptor_TopolTool {
    constructor();
  }

  export declare class BRepTopAdaptor_TopolTool_2 extends BRepTopAdaptor_TopolTool {
    constructor(Surface: any);
  }

export declare class Bisector {
  constructor();
  IsConvex(Cu: any, Sign: Standard_Real): Standard_Boolean;
}

export declare class Bisector_Curve extends Geom2d_Curve {
  Parameter(P: gp_Pnt2d): Standard_Real;
  IsExtendAtStart(): Standard_Boolean;
  IsExtendAtEnd(): Standard_Boolean;
  NbIntervals(): Standard_Integer;
  IntervalFirst(Index: Standard_Integer): Standard_Real;
  IntervalLast(Index: Standard_Integer): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Bisector_BisecAna extends Bisector_Curve {
  constructor()
  Perform_1(Cu1: any, Cu2: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, jointype: GeomAbs_JoinType, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Perform_2(Cu: any, Pnt: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Perform_3(Pnt: any, Cu: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Perform_4(Pnt1: any, Pnt2: any, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, Sense: Standard_Real, Tolerance: Standard_Real, oncurve: Standard_Boolean): void;
  Init(bisector: any): void;
  IsExtendAtStart(): Standard_Boolean;
  IsExtendAtEnd(): Standard_Boolean;
  SetTrim_1(Cu: any): void;
  SetTrim_2(uf: Standard_Real, ul: Standard_Real): void;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  IsCN(N: Standard_Integer): Standard_Boolean;
  Copy(): any;
  Transform(T: gp_Trsf2d): void;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Geom2dCurve(): any;
  Parameter(P: gp_Pnt2d): Standard_Real;
  ParameterOfStartPoint(): Standard_Real;
  ParameterOfEndPoint(): Standard_Real;
  NbIntervals(): Standard_Integer;
  IntervalFirst(Index: Standard_Integer): Standard_Real;
  IntervalLast(Index: Standard_Integer): Standard_Real;
  Dump(Deep: Standard_Integer, Offset: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Bisector_PointOnBis {
  ParamOnC1_1(Param: Standard_Real): void;
  ParamOnC2_1(Param: Standard_Real): void;
  ParamOnBis_1(Param: Standard_Real): void;
  Distance_1(Distance: Standard_Real): void;
  IsInfinite_1(Infinite: Standard_Boolean): void;
  Point_1(P: gp_Pnt2d): void;
  ParamOnC1_2(): Standard_Real;
  ParamOnC2_2(): Standard_Real;
  ParamOnBis_2(): Standard_Real;
  Distance_2(): Standard_Real;
  Point_2(): gp_Pnt2d;
  IsInfinite_2(): Standard_Boolean;
  Dump(): void;
}

  export declare class Bisector_PointOnBis_1 extends Bisector_PointOnBis {
    constructor();
  }

  export declare class Bisector_PointOnBis_2 extends Bisector_PointOnBis {
    constructor(Param1: Standard_Real, Param2: Standard_Real, ParamBis: Standard_Real, Distance: Standard_Real, Point: gp_Pnt2d);
  }

export declare class Bisector_PolyBis {
  constructor()
  Append(Point: Bisector_PointOnBis): void;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Value(Index: Standard_Integer): Bisector_PointOnBis;
  First(): Bisector_PointOnBis;
  Last(): Bisector_PointOnBis;
  Interval(U: Standard_Real): Standard_Integer;
  Transform(T: gp_Trsf2d): void;
}

export declare class Bisector_BisecCC extends Bisector_Curve {
  Perform(Cu1: any, Cu2: any, Side1: Standard_Real, Side2: Standard_Real, Origin: gp_Pnt2d, DistMax: Standard_Real): void;
  IsExtendAtStart(): Standard_Boolean;
  IsExtendAtEnd(): Standard_Boolean;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  IsCN(N: Standard_Integer): Standard_Boolean;
  ChangeGuide(): any;
  Copy(): any;
  Transform(T: gp_Trsf2d): void;
  FirstParameter_1(): Standard_Real;
  LastParameter_1(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(): Standard_Integer;
  IntervalFirst(Index: Standard_Integer): Standard_Real;
  IntervalLast(Index: Standard_Integer): Standard_Real;
  IntervalContinuity(): GeomAbs_Shape;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  ValueAndDist(U: Standard_Real, U1: Standard_Real, U2: Standard_Real, Distance: Standard_Real): gp_Pnt2d;
  ValueByInt(U: Standard_Real, U1: Standard_Real, U2: Standard_Real, Distance: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  IsEmpty_1(): Standard_Boolean;
  LinkBisCurve(U: Standard_Real): Standard_Real;
  LinkCurveBis(U: Standard_Real): Standard_Real;
  Parameter(P: gp_Pnt2d): Standard_Real;
  Curve_1(IndCurve: Standard_Integer): any;
  Polygon_1(): Bisector_PolyBis;
  Dump(Deep: Standard_Integer, Offset: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Bisector_BisecCC_1 extends Bisector_BisecCC {
    constructor();
  }

  export declare class Bisector_BisecCC_2 extends Bisector_BisecCC {
    constructor(Cu1: any, Cu2: any, Side1: Standard_Real, Side2: Standard_Real, Origin: gp_Pnt2d, DistMax: Standard_Real);
  }

export declare class Bisector_BisecPC extends Bisector_Curve {
  Perform(Cu: any, P: gp_Pnt2d, Side: Standard_Real, DistMax: Standard_Real): void;
  IsExtendAtStart(): Standard_Boolean;
  IsExtendAtEnd(): Standard_Boolean;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Copy(): any;
  Transform(T: gp_Trsf2d): void;
  IsCN(N: Standard_Integer): Standard_Boolean;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(): Standard_Integer;
  IntervalFirst(Index: Standard_Integer): Standard_Real;
  IntervalLast(Index: Standard_Integer): Standard_Real;
  IntervalContinuity(): GeomAbs_Shape;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Distance(U: Standard_Real): Standard_Real;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Dump(Deep: Standard_Integer, Offset: Standard_Integer): void;
  LinkBisCurve(U: Standard_Real): Standard_Real;
  LinkCurveBis(U: Standard_Real): Standard_Real;
  Parameter(P: gp_Pnt2d): Standard_Real;
  IsEmpty(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Bisector_BisecPC_1 extends Bisector_BisecPC {
    constructor();
  }

  export declare class Bisector_BisecPC_2 extends Bisector_BisecPC {
    constructor(Cu: any, P: gp_Pnt2d, Side: Standard_Real, DistMax: Standard_Real);
  }

  export declare class Bisector_BisecPC_3 extends Bisector_BisecPC {
    constructor(Cu: any, P: gp_Pnt2d, Side: Standard_Real, UMin: Standard_Real, UMax: Standard_Real);
  }

export declare class Bisector_FunctionH extends math_FunctionWithDerivative {
  constructor(C2: any, P1: gp_Pnt2d, T1: gp_Vec2d)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class Bisector_FunctionInter extends math_FunctionWithDerivative {
  Perform(C: any, Bis1: any, Bis2: any): void;
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

  export declare class Bisector_FunctionInter_1 extends Bisector_FunctionInter {
    constructor();
  }

  export declare class Bisector_FunctionInter_2 extends Bisector_FunctionInter {
    constructor(C: any, Bis1: any, Bis2: any);
  }

export declare class Bisector_Inter extends IntRes2d_Intersection {
  Perform(C1: Bisector_Bisec, D1: IntRes2d_Domain, C2: Bisector_Bisec, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real, ComunElement: Standard_Boolean): void;
}

  export declare class Bisector_Inter_1 extends Bisector_Inter {
    constructor();
  }

  export declare class Bisector_Inter_2 extends Bisector_Inter {
    constructor(C1: Bisector_Bisec, D1: IntRes2d_Domain, C2: Bisector_Bisec, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real, ComunElement: Standard_Boolean);
  }

export declare class IntCurvesFace_Intersector {
  constructor(F: TopoDS_Face, aTol: Standard_Real, aRestr: Standard_Boolean, UseBToler: Standard_Boolean)
  Perform_1(L: gp_Lin, PInf: Standard_Real, PSup: Standard_Real): void;
  Perform_2(HCu: any, PInf: Standard_Real, PSup: Standard_Real): void;
  SurfaceType(): GeomAbs_SurfaceType;
  IsDone(): Standard_Boolean;
  NbPnt(): Standard_Integer;
  UParameter(I: Standard_Integer): Standard_Real;
  VParameter(I: Standard_Integer): Standard_Real;
  WParameter(I: Standard_Integer): Standard_Real;
  Pnt(I: Standard_Integer): gp_Pnt;
  Transition(I: Standard_Integer): IntCurveSurface_TransitionOnCurve;
  State(I: Standard_Integer): TopAbs_State;
  IsParallel(): Standard_Boolean;
  Face(): TopoDS_Face;
  ClassifyUVPoint(Puv: gp_Pnt2d): TopAbs_State;
  Bounding(): Bnd_Box;
  SetUseBoundToler(UseBToler: Standard_Boolean): void;
  GetUseBoundToler(): Standard_Boolean;
  Destroy(): void;
}

export declare class IntCurvesFace_ShapeIntersector {
  constructor()
  Load(Sh: TopoDS_Shape, Tol: Standard_Real): void;
  Perform_1(L: gp_Lin, PInf: Standard_Real, PSup: Standard_Real): void;
  PerformNearest(L: gp_Lin, PInf: Standard_Real, PSup: Standard_Real): void;
  Perform_2(HCu: any, PInf: Standard_Real, PSup: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbPnt(): Standard_Integer;
  UParameter(I: Standard_Integer): Standard_Real;
  VParameter(I: Standard_Integer): Standard_Real;
  WParameter(I: Standard_Integer): Standard_Real;
  Pnt(I: Standard_Integer): gp_Pnt;
  Transition(I: Standard_Integer): IntCurveSurface_TransitionOnCurve;
  State(I: Standard_Integer): TopAbs_State;
  Face(I: Standard_Integer): TopoDS_Face;
  SortResult(): void;
  Destroy(): void;
}

export declare class MAT_Bisector extends Standard_Transient {
  constructor()
  AddBisector(abisector: any): void;
  List(): any;
  FirstBisector(): any;
  LastBisector(): any;
  BisectorNumber_1(anumber: Standard_Integer): void;
  IndexNumber_1(anumber: Standard_Integer): void;
  FirstEdge_1(anedge: any): void;
  SecondEdge_1(anedge: any): void;
  IssuePoint_1(apoint: Standard_Integer): void;
  EndPoint_1(apoint: Standard_Integer): void;
  DistIssuePoint_1(areal: Standard_Real): void;
  FirstVector_1(avector: Standard_Integer): void;
  SecondVector_1(avector: Standard_Integer): void;
  Sense_1(asense: Standard_Real): void;
  FirstParameter_1(aparameter: Standard_Real): void;
  SecondParameter_1(aparameter: Standard_Real): void;
  BisectorNumber_2(): Standard_Integer;
  IndexNumber_2(): Standard_Integer;
  FirstEdge_2(): any;
  SecondEdge_2(): any;
  IssuePoint_2(): Standard_Integer;
  EndPoint_2(): Standard_Integer;
  DistIssuePoint_2(): Standard_Real;
  FirstVector_2(): Standard_Integer;
  SecondVector_2(): Standard_Integer;
  Sense_2(): Standard_Real;
  FirstParameter_2(): Standard_Real;
  SecondParameter_2(): Standard_Real;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT_Edge extends Standard_Transient {
  constructor()
  EdgeNumber_1(anumber: Standard_Integer): void;
  FirstBisector_1(abisector: any): void;
  SecondBisector_1(abisector: any): void;
  Distance_1(adistance: Standard_Real): void;
  IntersectionPoint_1(apoint: Standard_Integer): void;
  EdgeNumber_2(): Standard_Integer;
  FirstBisector_2(): any;
  SecondBisector_2(): any;
  Distance_2(): Standard_Real;
  IntersectionPoint_2(): Standard_Integer;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT_Graph extends Standard_Transient {
  constructor()
  Perform(SemiInfinite: Standard_Boolean, TheRoots: any, NbBasicElts: Standard_Integer, NbArcs: Standard_Integer): void;
  Arc(Index: Standard_Integer): any;
  BasicElt(Index: Standard_Integer): any;
  Node(Index: Standard_Integer): any;
  NumberOfArcs(): Standard_Integer;
  NumberOfNodes(): Standard_Integer;
  NumberOfBasicElts(): Standard_Integer;
  NumberOfInfiniteNodes(): Standard_Integer;
  FusionOfBasicElts(IndexElt1: Standard_Integer, IndexElt2: Standard_Integer, MergeArc1: Standard_Boolean, GeomIndexArc1: Standard_Integer, GeomIndexArc2: Standard_Integer, MergeArc2: Standard_Boolean, GeomIndexArc3: Standard_Integer, GeomIndexArc4: Standard_Integer): void;
  CompactArcs(): void;
  CompactNodes(): void;
  ChangeBasicElts(NewMap: MAT_DataMapOfIntegerBasicElt): void;
  ChangeBasicElt(Index: Standard_Integer): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT_ListOfBisector extends Standard_Transient {
  constructor()
  First(): void;
  Last(): void;
  Init(aniten: any): void;
  Next(): void;
  Previous(): void;
  More(): Standard_Boolean;
  Current_1(): any;
  Current_2(anitem: any): void;
  FirstItem(): any;
  LastItem(): any;
  PreviousItem(): any;
  NextItem(): any;
  Number(): Standard_Integer;
  Index(): Standard_Integer;
  Brackets(anindex: Standard_Integer): any;
  Unlink(): void;
  LinkBefore(anitem: any): void;
  LinkAfter(anitem: any): void;
  FrontAdd(anitem: any): void;
  BackAdd(anitem: any): void;
  Permute(): void;
  Loop(): void;
  IsEmpty(): Standard_Boolean;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT_ListOfEdge extends Standard_Transient {
  constructor()
  First(): void;
  Last(): void;
  Init(aniten: any): void;
  Next(): void;
  Previous(): void;
  More(): Standard_Boolean;
  Current_1(): any;
  Current_2(anitem: any): void;
  FirstItem(): any;
  LastItem(): any;
  PreviousItem(): any;
  NextItem(): any;
  Number(): Standard_Integer;
  Index(): Standard_Integer;
  Brackets(anindex: Standard_Integer): any;
  Unlink(): void;
  LinkBefore(anitem: any): void;
  LinkAfter(anitem: any): void;
  FrontAdd(anitem: any): void;
  BackAdd(anitem: any): void;
  Permute(): void;
  Loop(): void;
  IsEmpty(): Standard_Boolean;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT_TListNodeOfListOfBisector extends Standard_Transient {
  GetItem(): any;
  Next_1(): any;
  Previous_1(): any;
  SetItem(anitem: any): void;
  Next_2(atlistnode: any): void;
  Previous_2(atlistnode: any): void;
  Dummy(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class MAT_TListNodeOfListOfBisector_1 extends MAT_TListNodeOfListOfBisector {
    constructor();
  }

  export declare class MAT_TListNodeOfListOfBisector_2 extends MAT_TListNodeOfListOfBisector {
    constructor(anitem: any);
  }

export declare class MAT_TListNodeOfListOfEdge extends Standard_Transient {
  GetItem(): any;
  Next_1(): any;
  Previous_1(): any;
  SetItem(anitem: any): void;
  Next_2(atlistnode: any): void;
  Previous_2(atlistnode: any): void;
  Dummy(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class MAT_TListNodeOfListOfEdge_1 extends MAT_TListNodeOfListOfEdge {
    constructor();
  }

  export declare class MAT_TListNodeOfListOfEdge_2 extends MAT_TListNodeOfListOfEdge {
    constructor(anitem: any);
  }

export declare class MAT_Zone extends Standard_Transient {
  Perform(aBasicElt: any): void;
  NumberOfArcs(): Standard_Integer;
  ArcOnFrontier(Index: Standard_Integer): any;
  NoEmptyZone(): Standard_Boolean;
  Limited(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class MAT_Zone_1 extends MAT_Zone {
    constructor();
  }

  export declare class MAT_Zone_2 extends MAT_Zone {
    constructor(aBasicElt: any);
  }

export declare class MAT2d_Connexion extends Standard_Transient {
  IndexFirstLine_1(): Standard_Integer;
  IndexSecondLine_1(): Standard_Integer;
  IndexItemOnFirst_1(): Standard_Integer;
  IndexItemOnSecond_1(): Standard_Integer;
  ParameterOnFirst_1(): Standard_Real;
  ParameterOnSecond_1(): Standard_Real;
  PointOnFirst_1(): gp_Pnt2d;
  PointOnSecond_1(): gp_Pnt2d;
  Distance_1(): Standard_Real;
  IndexFirstLine_2(anIndex: Standard_Integer): void;
  IndexSecondLine_2(anIndex: Standard_Integer): void;
  IndexItemOnFirst_2(anIndex: Standard_Integer): void;
  IndexItemOnSecond_2(anIndex: Standard_Integer): void;
  ParameterOnFirst_2(aParameter: Standard_Real): void;
  ParameterOnSecond_2(aParameter: Standard_Real): void;
  PointOnFirst_2(aPoint: gp_Pnt2d): void;
  PointOnSecond_2(aPoint: gp_Pnt2d): void;
  Distance_2(aDistance: Standard_Real): void;
  Reverse(): any;
  IsAfter(aConnexion: any, aSense: Standard_Real): Standard_Boolean;
  Dump(Deep: Standard_Integer, Offset: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class MAT2d_Connexion_1 extends MAT2d_Connexion {
    constructor();
  }

  export declare class MAT2d_Connexion_2 extends MAT2d_Connexion {
    constructor(LineA: Standard_Integer, LineB: Standard_Integer, ItemA: Standard_Integer, ItemB: Standard_Integer, Distance: Standard_Real, ParameterOnA: Standard_Real, ParameterOnB: Standard_Real, PointA: gp_Pnt2d, PointB: gp_Pnt2d);
  }

export declare class MAT2d_Circuit extends Standard_Transient {
  constructor(aJoinType: GeomAbs_JoinType, IsOpenResult: Standard_Boolean)
  Perform(aFigure: MAT2d_SequenceOfSequenceOfGeometry, IsClosed: TColStd_SequenceOfBoolean, IndRefLine: Standard_Integer, Trigo: Standard_Boolean): void;
  NumberOfItems(): Standard_Integer;
  Value(Index: Standard_Integer): any;
  LineLength(IndexLine: Standard_Integer): Standard_Integer;
  RefToEqui(IndLine: Standard_Integer, IndCurve: Standard_Integer): TColStd_SequenceOfInteger;
  Connexion(Index: Standard_Integer): any;
  ConnexionOn(Index: Standard_Integer): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MAT2d_Mat2d {
  constructor(IsOpenResult: Standard_Boolean)
  CreateMat(aTool: MAT2d_Tool2d): void;
  CreateMatOpen(aTool: MAT2d_Tool2d): void;
  IsDone(): Standard_Boolean;
  Init(): void;
  More(): Standard_Boolean;
  Next(): void;
  Bisector(): any;
  SemiInfinite(): Standard_Boolean;
  NumberOfBisectors(): Standard_Integer;
}

export declare class MAT2d_MiniPath {
  constructor()
  Perform(Figure: MAT2d_SequenceOfSequenceOfGeometry, IndStart: Standard_Integer, Sense: Standard_Boolean): void;
  RunOnConnexions(): void;
  Path(): MAT2d_SequenceOfConnexion;
  IsConnexionsFrom(Index: Standard_Integer): Standard_Boolean;
  ConnexionsFrom(Index: Standard_Integer): MAT2d_SequenceOfConnexion;
  IsRoot(Index: Standard_Integer): Standard_Boolean;
  Father(Index: Standard_Integer): any;
}

export declare class Handle_BRepApprox_ApproxLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepApprox_ApproxLine): void;
  get(): BRepApprox_ApproxLine;
}

  export declare class Handle_BRepApprox_ApproxLine_1 extends Handle_BRepApprox_ApproxLine {
    constructor();
  }

  export declare class Handle_BRepApprox_ApproxLine_2 extends Handle_BRepApprox_ApproxLine {
    constructor(thePtr: BRepApprox_ApproxLine);
  }

  export declare class Handle_BRepApprox_ApproxLine_3 extends Handle_BRepApprox_ApproxLine {
    constructor(theHandle: Handle_BRepApprox_ApproxLine);
  }

  export declare class Handle_BRepApprox_ApproxLine_4 extends Handle_BRepApprox_ApproxLine {
    constructor(theHandle: Handle_BRepApprox_ApproxLine);
  }

export declare class VectorOfPoint extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: VectorOfPoint, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: gp_XYZ): gp_XYZ;
  Appended(): gp_XYZ;
  Value(theIndex: Standard_Integer): gp_XYZ;
  First(): gp_XYZ;
  ChangeFirst(): gp_XYZ;
  Last(): gp_XYZ;
  ChangeLast(): gp_XYZ;
  ChangeValue(theIndex: Standard_Integer): gp_XYZ;
  SetValue(theIndex: Standard_Integer, theValue: gp_XYZ): gp_XYZ;
}

  export declare class VectorOfPoint_1 extends VectorOfPoint {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class VectorOfPoint_2 extends VectorOfPoint {
    constructor(theOther: VectorOfPoint);
  }

export declare class Handle_BRepBuilderAPI_FastSewing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBuilderAPI_FastSewing): void;
  get(): BRepBuilderAPI_FastSewing;
}

  export declare class Handle_BRepBuilderAPI_FastSewing_1 extends Handle_BRepBuilderAPI_FastSewing {
    constructor();
  }

  export declare class Handle_BRepBuilderAPI_FastSewing_2 extends Handle_BRepBuilderAPI_FastSewing {
    constructor(thePtr: BRepBuilderAPI_FastSewing);
  }

  export declare class Handle_BRepBuilderAPI_FastSewing_3 extends Handle_BRepBuilderAPI_FastSewing {
    constructor(theHandle: Handle_BRepBuilderAPI_FastSewing);
  }

  export declare class Handle_BRepBuilderAPI_FastSewing_4 extends Handle_BRepBuilderAPI_FastSewing {
    constructor(theHandle: Handle_BRepBuilderAPI_FastSewing);
  }

export declare class Handle_BRepBuilderAPI_Sewing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBuilderAPI_Sewing): void;
  get(): BRepBuilderAPI_Sewing;
}

  export declare class Handle_BRepBuilderAPI_Sewing_1 extends Handle_BRepBuilderAPI_Sewing {
    constructor();
  }

  export declare class Handle_BRepBuilderAPI_Sewing_2 extends Handle_BRepBuilderAPI_Sewing {
    constructor(thePtr: BRepBuilderAPI_Sewing);
  }

  export declare class Handle_BRepBuilderAPI_Sewing_3 extends Handle_BRepBuilderAPI_Sewing {
    constructor(theHandle: Handle_BRepBuilderAPI_Sewing);
  }

  export declare class Handle_BRepBuilderAPI_Sewing_4 extends Handle_BRepBuilderAPI_Sewing {
    constructor(theHandle: Handle_BRepBuilderAPI_Sewing);
  }

export declare class BRepCheck_ListOfStatus extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: BRepCheck_ListOfStatus): BRepCheck_ListOfStatus;
  Clear(theAllocator: any): void;
  First_1(): BRepCheck_Status;
  First_2(): BRepCheck_Status;
  Last_1(): BRepCheck_Status;
  Last_2(): BRepCheck_Status;
  Append_1(theItem: BRepCheck_Status): BRepCheck_Status;
  Append_3(theOther: BRepCheck_ListOfStatus): void;
  Prepend_1(theItem: BRepCheck_Status): BRepCheck_Status;
  Prepend_2(theOther: BRepCheck_ListOfStatus): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class BRepCheck_ListOfStatus_1 extends BRepCheck_ListOfStatus {
    constructor();
  }

  export declare class BRepCheck_ListOfStatus_2 extends BRepCheck_ListOfStatus {
    constructor(theAllocator: any);
  }

  export declare class BRepCheck_ListOfStatus_3 extends BRepCheck_ListOfStatus {
    constructor(theOther: BRepCheck_ListOfStatus);
  }

export declare class BRepCheck_DataMapOfShapeListOfStatus extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepCheck_DataMapOfShapeListOfStatus): void;
  Assign(theOther: BRepCheck_DataMapOfShapeListOfStatus): BRepCheck_DataMapOfShapeListOfStatus;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: BRepCheck_ListOfStatus): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: BRepCheck_ListOfStatus): BRepCheck_ListOfStatus;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): BRepCheck_ListOfStatus;
  Find_1(theKey: TopoDS_Shape): BRepCheck_ListOfStatus;
  Find_2(theKey: TopoDS_Shape, theValue: BRepCheck_ListOfStatus): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): BRepCheck_ListOfStatus;
  ChangeFind(theKey: TopoDS_Shape): BRepCheck_ListOfStatus;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepCheck_DataMapOfShapeListOfStatus_1 extends BRepCheck_DataMapOfShapeListOfStatus {
    constructor();
  }

  export declare class BRepCheck_DataMapOfShapeListOfStatus_2 extends BRepCheck_DataMapOfShapeListOfStatus {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepCheck_DataMapOfShapeListOfStatus_3 extends BRepCheck_DataMapOfShapeListOfStatus {
    constructor(theOther: BRepCheck_DataMapOfShapeListOfStatus);
  }

export declare class Handle_BRepCheck_Result {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Result): void;
  get(): BRepCheck_Result;
}

  export declare class Handle_BRepCheck_Result_1 extends Handle_BRepCheck_Result {
    constructor();
  }

  export declare class Handle_BRepCheck_Result_2 extends Handle_BRepCheck_Result {
    constructor(thePtr: BRepCheck_Result);
  }

  export declare class Handle_BRepCheck_Result_3 extends Handle_BRepCheck_Result {
    constructor(theHandle: Handle_BRepCheck_Result);
  }

  export declare class Handle_BRepCheck_Result_4 extends Handle_BRepCheck_Result {
    constructor(theHandle: Handle_BRepCheck_Result);
  }

export declare class Handle_BRepCheck_Edge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Edge): void;
  get(): BRepCheck_Edge;
}

  export declare class Handle_BRepCheck_Edge_1 extends Handle_BRepCheck_Edge {
    constructor();
  }

  export declare class Handle_BRepCheck_Edge_2 extends Handle_BRepCheck_Edge {
    constructor(thePtr: BRepCheck_Edge);
  }

  export declare class Handle_BRepCheck_Edge_3 extends Handle_BRepCheck_Edge {
    constructor(theHandle: Handle_BRepCheck_Edge);
  }

  export declare class Handle_BRepCheck_Edge_4 extends Handle_BRepCheck_Edge {
    constructor(theHandle: Handle_BRepCheck_Edge);
  }

export declare class Handle_BRepCheck_Face {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Face): void;
  get(): BRepCheck_Face;
}

  export declare class Handle_BRepCheck_Face_1 extends Handle_BRepCheck_Face {
    constructor();
  }

  export declare class Handle_BRepCheck_Face_2 extends Handle_BRepCheck_Face {
    constructor(thePtr: BRepCheck_Face);
  }

  export declare class Handle_BRepCheck_Face_3 extends Handle_BRepCheck_Face {
    constructor(theHandle: Handle_BRepCheck_Face);
  }

  export declare class Handle_BRepCheck_Face_4 extends Handle_BRepCheck_Face {
    constructor(theHandle: Handle_BRepCheck_Face);
  }

export declare class Handle_BRepCheck_Shell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Shell): void;
  get(): BRepCheck_Shell;
}

  export declare class Handle_BRepCheck_Shell_1 extends Handle_BRepCheck_Shell {
    constructor();
  }

  export declare class Handle_BRepCheck_Shell_2 extends Handle_BRepCheck_Shell {
    constructor(thePtr: BRepCheck_Shell);
  }

  export declare class Handle_BRepCheck_Shell_3 extends Handle_BRepCheck_Shell {
    constructor(theHandle: Handle_BRepCheck_Shell);
  }

  export declare class Handle_BRepCheck_Shell_4 extends Handle_BRepCheck_Shell {
    constructor(theHandle: Handle_BRepCheck_Shell);
  }

export declare class Handle_BRepCheck_Solid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Solid): void;
  get(): BRepCheck_Solid;
}

  export declare class Handle_BRepCheck_Solid_1 extends Handle_BRepCheck_Solid {
    constructor();
  }

  export declare class Handle_BRepCheck_Solid_2 extends Handle_BRepCheck_Solid {
    constructor(thePtr: BRepCheck_Solid);
  }

  export declare class Handle_BRepCheck_Solid_3 extends Handle_BRepCheck_Solid {
    constructor(theHandle: Handle_BRepCheck_Solid);
  }

  export declare class Handle_BRepCheck_Solid_4 extends Handle_BRepCheck_Solid {
    constructor(theHandle: Handle_BRepCheck_Solid);
  }

export declare class Handle_BRepCheck_Vertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Vertex): void;
  get(): BRepCheck_Vertex;
}

  export declare class Handle_BRepCheck_Vertex_1 extends Handle_BRepCheck_Vertex {
    constructor();
  }

  export declare class Handle_BRepCheck_Vertex_2 extends Handle_BRepCheck_Vertex {
    constructor(thePtr: BRepCheck_Vertex);
  }

  export declare class Handle_BRepCheck_Vertex_3 extends Handle_BRepCheck_Vertex {
    constructor(theHandle: Handle_BRepCheck_Vertex);
  }

  export declare class Handle_BRepCheck_Vertex_4 extends Handle_BRepCheck_Vertex {
    constructor(theHandle: Handle_BRepCheck_Vertex);
  }

export declare class Handle_BRepCheck_Wire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepCheck_Wire): void;
  get(): BRepCheck_Wire;
}

  export declare class Handle_BRepCheck_Wire_1 extends Handle_BRepCheck_Wire {
    constructor();
  }

  export declare class Handle_BRepCheck_Wire_2 extends Handle_BRepCheck_Wire {
    constructor(thePtr: BRepCheck_Wire);
  }

  export declare class Handle_BRepCheck_Wire_3 extends Handle_BRepCheck_Wire {
    constructor(theHandle: Handle_BRepCheck_Wire);
  }

  export declare class Handle_BRepCheck_Wire_4 extends Handle_BRepCheck_Wire {
    constructor(theHandle: Handle_BRepCheck_Wire);
  }

export declare class BRepClass3d_MapOfInter extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepClass3d_MapOfInter): void;
  Assign(theOther: BRepClass3d_MapOfInter): BRepClass3d_MapOfInter;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: Standard_Address): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: Standard_Address): Standard_Address;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): Standard_Address;
  Find_1(theKey: TopoDS_Shape): Standard_Address;
  Find_2(theKey: TopoDS_Shape, theValue: Standard_Address): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): Standard_Address;
  ChangeFind(theKey: TopoDS_Shape): Standard_Address;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepClass3d_MapOfInter_1 extends BRepClass3d_MapOfInter {
    constructor();
  }

  export declare class BRepClass3d_MapOfInter_2 extends BRepClass3d_MapOfInter {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepClass3d_MapOfInter_3 extends BRepClass3d_MapOfInter {
    constructor(theOther: BRepClass3d_MapOfInter);
  }

export declare class BRepExtrema_SeqOfSolution extends NCollection_BaseSequence {
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
  Assign(theOther: BRepExtrema_SeqOfSolution): BRepExtrema_SeqOfSolution;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: BRepExtrema_SolutionElem): void;
  Append_2(theSeq: BRepExtrema_SeqOfSolution): void;
  Prepend_1(theItem: BRepExtrema_SolutionElem): void;
  Prepend_2(theSeq: BRepExtrema_SeqOfSolution): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: BRepExtrema_SolutionElem): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: BRepExtrema_SeqOfSolution): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: BRepExtrema_SeqOfSolution): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: BRepExtrema_SolutionElem): void;
  Split(theIndex: Standard_Integer, theSeq: BRepExtrema_SeqOfSolution): void;
  First(): BRepExtrema_SolutionElem;
  ChangeFirst(): BRepExtrema_SolutionElem;
  Last(): BRepExtrema_SolutionElem;
  ChangeLast(): BRepExtrema_SolutionElem;
  Value(theIndex: Standard_Integer): BRepExtrema_SolutionElem;
  ChangeValue(theIndex: Standard_Integer): BRepExtrema_SolutionElem;
  SetValue(theIndex: Standard_Integer, theItem: BRepExtrema_SolutionElem): void;
}

  export declare class BRepExtrema_SeqOfSolution_1 extends BRepExtrema_SeqOfSolution {
    constructor();
  }

  export declare class BRepExtrema_SeqOfSolution_2 extends BRepExtrema_SeqOfSolution {
    constructor(theAllocator: any);
  }

  export declare class BRepExtrema_SeqOfSolution_3 extends BRepExtrema_SeqOfSolution {
    constructor(theOther: BRepExtrema_SeqOfSolution);
  }

export declare class BRepExtrema_ShapeList extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BRepExtrema_ShapeList, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: TopoDS_Face): TopoDS_Face;
  Appended(): TopoDS_Face;
  Value(theIndex: Standard_Integer): TopoDS_Face;
  First(): TopoDS_Face;
  ChangeFirst(): TopoDS_Face;
  Last(): TopoDS_Face;
  ChangeLast(): TopoDS_Face;
  ChangeValue(theIndex: Standard_Integer): TopoDS_Face;
  SetValue(theIndex: Standard_Integer, theValue: TopoDS_Face): TopoDS_Face;
}

  export declare class BRepExtrema_ShapeList_1 extends BRepExtrema_ShapeList {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BRepExtrema_ShapeList_2 extends BRepExtrema_ShapeList {
    constructor(theOther: BRepExtrema_ShapeList);
  }

export declare class Handle_BRepExtrema_TriangleSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepExtrema_TriangleSet): void;
  get(): BRepExtrema_TriangleSet;
}

  export declare class Handle_BRepExtrema_TriangleSet_1 extends Handle_BRepExtrema_TriangleSet {
    constructor();
  }

  export declare class Handle_BRepExtrema_TriangleSet_2 extends Handle_BRepExtrema_TriangleSet {
    constructor(thePtr: BRepExtrema_TriangleSet);
  }

  export declare class Handle_BRepExtrema_TriangleSet_3 extends Handle_BRepExtrema_TriangleSet {
    constructor(theHandle: Handle_BRepExtrema_TriangleSet);
  }

  export declare class Handle_BRepExtrema_TriangleSet_4 extends Handle_BRepExtrema_TriangleSet {
    constructor(theHandle: Handle_BRepExtrema_TriangleSet);
  }

export declare class Handle_BRepExtrema_UnCompatibleShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepExtrema_UnCompatibleShape): void;
  get(): BRepExtrema_UnCompatibleShape;
}

  export declare class Handle_BRepExtrema_UnCompatibleShape_1 extends Handle_BRepExtrema_UnCompatibleShape {
    constructor();
  }

  export declare class Handle_BRepExtrema_UnCompatibleShape_2 extends Handle_BRepExtrema_UnCompatibleShape {
    constructor(thePtr: BRepExtrema_UnCompatibleShape);
  }

  export declare class Handle_BRepExtrema_UnCompatibleShape_3 extends Handle_BRepExtrema_UnCompatibleShape {
    constructor(theHandle: Handle_BRepExtrema_UnCompatibleShape);
  }

  export declare class Handle_BRepExtrema_UnCompatibleShape_4 extends Handle_BRepExtrema_UnCompatibleShape {
    constructor(theHandle: Handle_BRepExtrema_UnCompatibleShape);
  }

export declare class Handle_MAT_Arc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_Arc): void;
  get(): MAT_Arc;
}

  export declare class Handle_MAT_Arc_1 extends Handle_MAT_Arc {
    constructor();
  }

  export declare class Handle_MAT_Arc_2 extends Handle_MAT_Arc {
    constructor(thePtr: MAT_Arc);
  }

  export declare class Handle_MAT_Arc_3 extends Handle_MAT_Arc {
    constructor(theHandle: Handle_MAT_Arc);
  }

  export declare class Handle_MAT_Arc_4 extends Handle_MAT_Arc {
    constructor(theHandle: Handle_MAT_Arc);
  }

export declare class Handle_MAT_BasicElt {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_BasicElt): void;
  get(): MAT_BasicElt;
}

  export declare class Handle_MAT_BasicElt_1 extends Handle_MAT_BasicElt {
    constructor();
  }

  export declare class Handle_MAT_BasicElt_2 extends Handle_MAT_BasicElt {
    constructor(thePtr: MAT_BasicElt);
  }

  export declare class Handle_MAT_BasicElt_3 extends Handle_MAT_BasicElt {
    constructor(theHandle: Handle_MAT_BasicElt);
  }

  export declare class Handle_MAT_BasicElt_4 extends Handle_MAT_BasicElt {
    constructor(theHandle: Handle_MAT_BasicElt);
  }

export declare class Handle_MAT_Node {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_Node): void;
  get(): MAT_Node;
}

  export declare class Handle_MAT_Node_1 extends Handle_MAT_Node {
    constructor();
  }

  export declare class Handle_MAT_Node_2 extends Handle_MAT_Node {
    constructor(thePtr: MAT_Node);
  }

  export declare class Handle_MAT_Node_3 extends Handle_MAT_Node {
    constructor(theHandle: Handle_MAT_Node);
  }

  export declare class Handle_MAT_Node_4 extends Handle_MAT_Node {
    constructor(theHandle: Handle_MAT_Node);
  }

export declare class MAT2d_DataMapOfIntegerBisec extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MAT2d_DataMapOfIntegerBisec): void;
  Assign(theOther: MAT2d_DataMapOfIntegerBisec): MAT2d_DataMapOfIntegerBisec;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Bisector_Bisec): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Bisector_Bisec): Bisector_Bisec;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Bisector_Bisec;
  Find_1(theKey: Standard_Integer): Bisector_Bisec;
  Find_2(theKey: Standard_Integer, theValue: Bisector_Bisec): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Bisector_Bisec;
  ChangeFind(theKey: Standard_Integer): Bisector_Bisec;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MAT2d_DataMapOfIntegerBisec_1 extends MAT2d_DataMapOfIntegerBisec {
    constructor();
  }

  export declare class MAT2d_DataMapOfIntegerBisec_2 extends MAT2d_DataMapOfIntegerBisec {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MAT2d_DataMapOfIntegerBisec_3 extends MAT2d_DataMapOfIntegerBisec {
    constructor(theOther: MAT2d_DataMapOfIntegerBisec);
  }

export declare class MAT2d_DataMapOfIntegerPnt2d extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MAT2d_DataMapOfIntegerPnt2d): void;
  Assign(theOther: MAT2d_DataMapOfIntegerPnt2d): MAT2d_DataMapOfIntegerPnt2d;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: gp_Pnt2d): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: gp_Pnt2d): gp_Pnt2d;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): gp_Pnt2d;
  Find_1(theKey: Standard_Integer): gp_Pnt2d;
  Find_2(theKey: Standard_Integer, theValue: gp_Pnt2d): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): gp_Pnt2d;
  ChangeFind(theKey: Standard_Integer): gp_Pnt2d;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MAT2d_DataMapOfIntegerPnt2d_1 extends MAT2d_DataMapOfIntegerPnt2d {
    constructor();
  }

  export declare class MAT2d_DataMapOfIntegerPnt2d_2 extends MAT2d_DataMapOfIntegerPnt2d {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MAT2d_DataMapOfIntegerPnt2d_3 extends MAT2d_DataMapOfIntegerPnt2d {
    constructor(theOther: MAT2d_DataMapOfIntegerPnt2d);
  }

export declare class MAT2d_DataMapOfIntegerVec2d extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MAT2d_DataMapOfIntegerVec2d): void;
  Assign(theOther: MAT2d_DataMapOfIntegerVec2d): MAT2d_DataMapOfIntegerVec2d;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: gp_Vec2d): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: gp_Vec2d): gp_Vec2d;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): gp_Vec2d;
  Find_1(theKey: Standard_Integer): gp_Vec2d;
  Find_2(theKey: Standard_Integer, theValue: gp_Vec2d): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): gp_Vec2d;
  ChangeFind(theKey: Standard_Integer): gp_Vec2d;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MAT2d_DataMapOfIntegerVec2d_1 extends MAT2d_DataMapOfIntegerVec2d {
    constructor();
  }

  export declare class MAT2d_DataMapOfIntegerVec2d_2 extends MAT2d_DataMapOfIntegerVec2d {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MAT2d_DataMapOfIntegerVec2d_3 extends MAT2d_DataMapOfIntegerVec2d {
    constructor(theOther: MAT2d_DataMapOfIntegerVec2d);
  }

export declare class MAT2d_DataMapOfBiIntInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MAT2d_DataMapOfBiIntInteger): void;
  Assign(theOther: MAT2d_DataMapOfBiIntInteger): MAT2d_DataMapOfBiIntInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: MAT2d_BiInt, theItem: Standard_Integer): Standard_Boolean;
  Bound(theKey: MAT2d_BiInt, theItem: Standard_Integer): Standard_Integer;
  IsBound(theKey: MAT2d_BiInt): Standard_Boolean;
  UnBind(theKey: MAT2d_BiInt): Standard_Boolean;
  Seek(theKey: MAT2d_BiInt): Standard_Integer;
  Find_1(theKey: MAT2d_BiInt): Standard_Integer;
  Find_2(theKey: MAT2d_BiInt, theValue: Standard_Integer): Standard_Boolean;
  ChangeSeek(theKey: MAT2d_BiInt): Standard_Integer;
  ChangeFind(theKey: MAT2d_BiInt): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MAT2d_DataMapOfBiIntInteger_1 extends MAT2d_DataMapOfBiIntInteger {
    constructor();
  }

  export declare class MAT2d_DataMapOfBiIntInteger_2 extends MAT2d_DataMapOfBiIntInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MAT2d_DataMapOfBiIntInteger_3 extends MAT2d_DataMapOfBiIntInteger {
    constructor(theOther: MAT2d_DataMapOfBiIntInteger);
  }

export declare class BRepMAT2d_DataMapOfShapeSequenceOfBasicElt extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepMAT2d_DataMapOfShapeSequenceOfBasicElt): void;
  Assign(theOther: BRepMAT2d_DataMapOfShapeSequenceOfBasicElt): BRepMAT2d_DataMapOfShapeSequenceOfBasicElt;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: MAT_SequenceOfBasicElt): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: MAT_SequenceOfBasicElt): MAT_SequenceOfBasicElt;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): MAT_SequenceOfBasicElt;
  Find_1(theKey: TopoDS_Shape): MAT_SequenceOfBasicElt;
  Find_2(theKey: TopoDS_Shape, theValue: MAT_SequenceOfBasicElt): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): MAT_SequenceOfBasicElt;
  ChangeFind(theKey: TopoDS_Shape): MAT_SequenceOfBasicElt;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_1 extends BRepMAT2d_DataMapOfShapeSequenceOfBasicElt {
    constructor();
  }

  export declare class BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_2 extends BRepMAT2d_DataMapOfShapeSequenceOfBasicElt {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_3 extends BRepMAT2d_DataMapOfShapeSequenceOfBasicElt {
    constructor(theOther: BRepMAT2d_DataMapOfShapeSequenceOfBasicElt);
  }

export declare class MAT2d_SequenceOfSequenceOfCurve extends NCollection_BaseSequence {
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
  Assign(theOther: MAT2d_SequenceOfSequenceOfCurve): MAT2d_SequenceOfSequenceOfCurve;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TColGeom2d_SequenceOfCurve): void;
  Append_2(theSeq: MAT2d_SequenceOfSequenceOfCurve): void;
  Prepend_1(theItem: TColGeom2d_SequenceOfCurve): void;
  Prepend_2(theSeq: MAT2d_SequenceOfSequenceOfCurve): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TColGeom2d_SequenceOfCurve): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: MAT2d_SequenceOfSequenceOfCurve): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: MAT2d_SequenceOfSequenceOfCurve): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TColGeom2d_SequenceOfCurve): void;
  Split(theIndex: Standard_Integer, theSeq: MAT2d_SequenceOfSequenceOfCurve): void;
  First(): TColGeom2d_SequenceOfCurve;
  ChangeFirst(): TColGeom2d_SequenceOfCurve;
  Last(): TColGeom2d_SequenceOfCurve;
  ChangeLast(): TColGeom2d_SequenceOfCurve;
  Value(theIndex: Standard_Integer): TColGeom2d_SequenceOfCurve;
  ChangeValue(theIndex: Standard_Integer): TColGeom2d_SequenceOfCurve;
  SetValue(theIndex: Standard_Integer, theItem: TColGeom2d_SequenceOfCurve): void;
}

  export declare class MAT2d_SequenceOfSequenceOfCurve_1 extends MAT2d_SequenceOfSequenceOfCurve {
    constructor();
  }

  export declare class MAT2d_SequenceOfSequenceOfCurve_2 extends MAT2d_SequenceOfSequenceOfCurve {
    constructor(theAllocator: any);
  }

  export declare class MAT2d_SequenceOfSequenceOfCurve_3 extends MAT2d_SequenceOfSequenceOfCurve {
    constructor(theOther: MAT2d_SequenceOfSequenceOfCurve);
  }

export declare class BRepTopAdaptor_MapOfShapeTool extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepTopAdaptor_MapOfShapeTool): void;
  Assign(theOther: BRepTopAdaptor_MapOfShapeTool): BRepTopAdaptor_MapOfShapeTool;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: BRepTopAdaptor_Tool): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: BRepTopAdaptor_Tool): BRepTopAdaptor_Tool;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): BRepTopAdaptor_Tool;
  Find_1(theKey: TopoDS_Shape): BRepTopAdaptor_Tool;
  Find_2(theKey: TopoDS_Shape, theValue: BRepTopAdaptor_Tool): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): BRepTopAdaptor_Tool;
  ChangeFind(theKey: TopoDS_Shape): BRepTopAdaptor_Tool;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepTopAdaptor_MapOfShapeTool_1 extends BRepTopAdaptor_MapOfShapeTool {
    constructor();
  }

  export declare class BRepTopAdaptor_MapOfShapeTool_2 extends BRepTopAdaptor_MapOfShapeTool {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepTopAdaptor_MapOfShapeTool_3 extends BRepTopAdaptor_MapOfShapeTool {
    constructor(theOther: BRepTopAdaptor_MapOfShapeTool);
  }

export declare class Handle_BRepTopAdaptor_HVertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTopAdaptor_HVertex): void;
  get(): BRepTopAdaptor_HVertex;
}

  export declare class Handle_BRepTopAdaptor_HVertex_1 extends Handle_BRepTopAdaptor_HVertex {
    constructor();
  }

  export declare class Handle_BRepTopAdaptor_HVertex_2 extends Handle_BRepTopAdaptor_HVertex {
    constructor(thePtr: BRepTopAdaptor_HVertex);
  }

  export declare class Handle_BRepTopAdaptor_HVertex_3 extends Handle_BRepTopAdaptor_HVertex {
    constructor(theHandle: Handle_BRepTopAdaptor_HVertex);
  }

  export declare class Handle_BRepTopAdaptor_HVertex_4 extends Handle_BRepTopAdaptor_HVertex {
    constructor(theHandle: Handle_BRepTopAdaptor_HVertex);
  }

export declare class Handle_BRepTopAdaptor_TopolTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTopAdaptor_TopolTool): void;
  get(): BRepTopAdaptor_TopolTool;
}

  export declare class Handle_BRepTopAdaptor_TopolTool_1 extends Handle_BRepTopAdaptor_TopolTool {
    constructor();
  }

  export declare class Handle_BRepTopAdaptor_TopolTool_2 extends Handle_BRepTopAdaptor_TopolTool {
    constructor(thePtr: BRepTopAdaptor_TopolTool);
  }

  export declare class Handle_BRepTopAdaptor_TopolTool_3 extends Handle_BRepTopAdaptor_TopolTool {
    constructor(theHandle: Handle_BRepTopAdaptor_TopolTool);
  }

  export declare class Handle_BRepTopAdaptor_TopolTool_4 extends Handle_BRepTopAdaptor_TopolTool {
    constructor(theHandle: Handle_BRepTopAdaptor_TopolTool);
  }

export declare class Handle_Bisector_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Bisector_Curve): void;
  get(): Bisector_Curve;
}

  export declare class Handle_Bisector_Curve_1 extends Handle_Bisector_Curve {
    constructor();
  }

  export declare class Handle_Bisector_Curve_2 extends Handle_Bisector_Curve {
    constructor(thePtr: Bisector_Curve);
  }

  export declare class Handle_Bisector_Curve_3 extends Handle_Bisector_Curve {
    constructor(theHandle: Handle_Bisector_Curve);
  }

  export declare class Handle_Bisector_Curve_4 extends Handle_Bisector_Curve {
    constructor(theHandle: Handle_Bisector_Curve);
  }

export declare class Handle_Bisector_BisecAna {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Bisector_BisecAna): void;
  get(): Bisector_BisecAna;
}

  export declare class Handle_Bisector_BisecAna_1 extends Handle_Bisector_BisecAna {
    constructor();
  }

  export declare class Handle_Bisector_BisecAna_2 extends Handle_Bisector_BisecAna {
    constructor(thePtr: Bisector_BisecAna);
  }

  export declare class Handle_Bisector_BisecAna_3 extends Handle_Bisector_BisecAna {
    constructor(theHandle: Handle_Bisector_BisecAna);
  }

  export declare class Handle_Bisector_BisecAna_4 extends Handle_Bisector_BisecAna {
    constructor(theHandle: Handle_Bisector_BisecAna);
  }

export declare class Handle_Bisector_BisecCC {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Bisector_BisecCC): void;
  get(): Bisector_BisecCC;
}

  export declare class Handle_Bisector_BisecCC_1 extends Handle_Bisector_BisecCC {
    constructor();
  }

  export declare class Handle_Bisector_BisecCC_2 extends Handle_Bisector_BisecCC {
    constructor(thePtr: Bisector_BisecCC);
  }

  export declare class Handle_Bisector_BisecCC_3 extends Handle_Bisector_BisecCC {
    constructor(theHandle: Handle_Bisector_BisecCC);
  }

  export declare class Handle_Bisector_BisecCC_4 extends Handle_Bisector_BisecCC {
    constructor(theHandle: Handle_Bisector_BisecCC);
  }

export declare class Handle_Bisector_BisecPC {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Bisector_BisecPC): void;
  get(): Bisector_BisecPC;
}

  export declare class Handle_Bisector_BisecPC_1 extends Handle_Bisector_BisecPC {
    constructor();
  }

  export declare class Handle_Bisector_BisecPC_2 extends Handle_Bisector_BisecPC {
    constructor(thePtr: Bisector_BisecPC);
  }

  export declare class Handle_Bisector_BisecPC_3 extends Handle_Bisector_BisecPC {
    constructor(theHandle: Handle_Bisector_BisecPC);
  }

  export declare class Handle_Bisector_BisecPC_4 extends Handle_Bisector_BisecPC {
    constructor(theHandle: Handle_Bisector_BisecPC);
  }

export declare class Handle_MAT_Bisector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_Bisector): void;
  get(): MAT_Bisector;
}

  export declare class Handle_MAT_Bisector_1 extends Handle_MAT_Bisector {
    constructor();
  }

  export declare class Handle_MAT_Bisector_2 extends Handle_MAT_Bisector {
    constructor(thePtr: MAT_Bisector);
  }

  export declare class Handle_MAT_Bisector_3 extends Handle_MAT_Bisector {
    constructor(theHandle: Handle_MAT_Bisector);
  }

  export declare class Handle_MAT_Bisector_4 extends Handle_MAT_Bisector {
    constructor(theHandle: Handle_MAT_Bisector);
  }

export declare class Handle_MAT_Edge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_Edge): void;
  get(): MAT_Edge;
}

  export declare class Handle_MAT_Edge_1 extends Handle_MAT_Edge {
    constructor();
  }

  export declare class Handle_MAT_Edge_2 extends Handle_MAT_Edge {
    constructor(thePtr: MAT_Edge);
  }

  export declare class Handle_MAT_Edge_3 extends Handle_MAT_Edge {
    constructor(theHandle: Handle_MAT_Edge);
  }

  export declare class Handle_MAT_Edge_4 extends Handle_MAT_Edge {
    constructor(theHandle: Handle_MAT_Edge);
  }

export declare class Handle_MAT_Graph {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_Graph): void;
  get(): MAT_Graph;
}

  export declare class Handle_MAT_Graph_1 extends Handle_MAT_Graph {
    constructor();
  }

  export declare class Handle_MAT_Graph_2 extends Handle_MAT_Graph {
    constructor(thePtr: MAT_Graph);
  }

  export declare class Handle_MAT_Graph_3 extends Handle_MAT_Graph {
    constructor(theHandle: Handle_MAT_Graph);
  }

  export declare class Handle_MAT_Graph_4 extends Handle_MAT_Graph {
    constructor(theHandle: Handle_MAT_Graph);
  }

export declare class Handle_MAT_ListOfBisector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_ListOfBisector): void;
  get(): MAT_ListOfBisector;
}

  export declare class Handle_MAT_ListOfBisector_1 extends Handle_MAT_ListOfBisector {
    constructor();
  }

  export declare class Handle_MAT_ListOfBisector_2 extends Handle_MAT_ListOfBisector {
    constructor(thePtr: MAT_ListOfBisector);
  }

  export declare class Handle_MAT_ListOfBisector_3 extends Handle_MAT_ListOfBisector {
    constructor(theHandle: Handle_MAT_ListOfBisector);
  }

  export declare class Handle_MAT_ListOfBisector_4 extends Handle_MAT_ListOfBisector {
    constructor(theHandle: Handle_MAT_ListOfBisector);
  }

export declare class Handle_MAT_ListOfEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_ListOfEdge): void;
  get(): MAT_ListOfEdge;
}

  export declare class Handle_MAT_ListOfEdge_1 extends Handle_MAT_ListOfEdge {
    constructor();
  }

  export declare class Handle_MAT_ListOfEdge_2 extends Handle_MAT_ListOfEdge {
    constructor(thePtr: MAT_ListOfEdge);
  }

  export declare class Handle_MAT_ListOfEdge_3 extends Handle_MAT_ListOfEdge {
    constructor(theHandle: Handle_MAT_ListOfEdge);
  }

  export declare class Handle_MAT_ListOfEdge_4 extends Handle_MAT_ListOfEdge {
    constructor(theHandle: Handle_MAT_ListOfEdge);
  }

export declare class Handle_MAT_TListNodeOfListOfBisector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_TListNodeOfListOfBisector): void;
  get(): MAT_TListNodeOfListOfBisector;
}

  export declare class Handle_MAT_TListNodeOfListOfBisector_1 extends Handle_MAT_TListNodeOfListOfBisector {
    constructor();
  }

  export declare class Handle_MAT_TListNodeOfListOfBisector_2 extends Handle_MAT_TListNodeOfListOfBisector {
    constructor(thePtr: MAT_TListNodeOfListOfBisector);
  }

  export declare class Handle_MAT_TListNodeOfListOfBisector_3 extends Handle_MAT_TListNodeOfListOfBisector {
    constructor(theHandle: Handle_MAT_TListNodeOfListOfBisector);
  }

  export declare class Handle_MAT_TListNodeOfListOfBisector_4 extends Handle_MAT_TListNodeOfListOfBisector {
    constructor(theHandle: Handle_MAT_TListNodeOfListOfBisector);
  }

export declare class Handle_MAT_TListNodeOfListOfEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_TListNodeOfListOfEdge): void;
  get(): MAT_TListNodeOfListOfEdge;
}

  export declare class Handle_MAT_TListNodeOfListOfEdge_1 extends Handle_MAT_TListNodeOfListOfEdge {
    constructor();
  }

  export declare class Handle_MAT_TListNodeOfListOfEdge_2 extends Handle_MAT_TListNodeOfListOfEdge {
    constructor(thePtr: MAT_TListNodeOfListOfEdge);
  }

  export declare class Handle_MAT_TListNodeOfListOfEdge_3 extends Handle_MAT_TListNodeOfListOfEdge {
    constructor(theHandle: Handle_MAT_TListNodeOfListOfEdge);
  }

  export declare class Handle_MAT_TListNodeOfListOfEdge_4 extends Handle_MAT_TListNodeOfListOfEdge {
    constructor(theHandle: Handle_MAT_TListNodeOfListOfEdge);
  }

export declare class Handle_MAT_Zone {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT_Zone): void;
  get(): MAT_Zone;
}

  export declare class Handle_MAT_Zone_1 extends Handle_MAT_Zone {
    constructor();
  }

  export declare class Handle_MAT_Zone_2 extends Handle_MAT_Zone {
    constructor(thePtr: MAT_Zone);
  }

  export declare class Handle_MAT_Zone_3 extends Handle_MAT_Zone {
    constructor(theHandle: Handle_MAT_Zone);
  }

  export declare class Handle_MAT_Zone_4 extends Handle_MAT_Zone {
    constructor(theHandle: Handle_MAT_Zone);
  }

export declare class Handle_MAT2d_Connexion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT2d_Connexion): void;
  get(): MAT2d_Connexion;
}

  export declare class Handle_MAT2d_Connexion_1 extends Handle_MAT2d_Connexion {
    constructor();
  }

  export declare class Handle_MAT2d_Connexion_2 extends Handle_MAT2d_Connexion {
    constructor(thePtr: MAT2d_Connexion);
  }

  export declare class Handle_MAT2d_Connexion_3 extends Handle_MAT2d_Connexion {
    constructor(theHandle: Handle_MAT2d_Connexion);
  }

  export declare class Handle_MAT2d_Connexion_4 extends Handle_MAT2d_Connexion {
    constructor(theHandle: Handle_MAT2d_Connexion);
  }

export declare class MAT2d_DataMapOfBiIntSequenceOfInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MAT2d_DataMapOfBiIntSequenceOfInteger): void;
  Assign(theOther: MAT2d_DataMapOfBiIntSequenceOfInteger): MAT2d_DataMapOfBiIntSequenceOfInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: MAT2d_BiInt, theItem: TColStd_SequenceOfInteger): Standard_Boolean;
  Bound(theKey: MAT2d_BiInt, theItem: TColStd_SequenceOfInteger): TColStd_SequenceOfInteger;
  IsBound(theKey: MAT2d_BiInt): Standard_Boolean;
  UnBind(theKey: MAT2d_BiInt): Standard_Boolean;
  Seek(theKey: MAT2d_BiInt): TColStd_SequenceOfInteger;
  Find_1(theKey: MAT2d_BiInt): TColStd_SequenceOfInteger;
  Find_2(theKey: MAT2d_BiInt, theValue: TColStd_SequenceOfInteger): Standard_Boolean;
  ChangeSeek(theKey: MAT2d_BiInt): TColStd_SequenceOfInteger;
  ChangeFind(theKey: MAT2d_BiInt): TColStd_SequenceOfInteger;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MAT2d_DataMapOfBiIntSequenceOfInteger_1 extends MAT2d_DataMapOfBiIntSequenceOfInteger {
    constructor();
  }

  export declare class MAT2d_DataMapOfBiIntSequenceOfInteger_2 extends MAT2d_DataMapOfBiIntSequenceOfInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MAT2d_DataMapOfBiIntSequenceOfInteger_3 extends MAT2d_DataMapOfBiIntSequenceOfInteger {
    constructor(theOther: MAT2d_DataMapOfBiIntSequenceOfInteger);
  }

export declare class MAT2d_SequenceOfSequenceOfGeometry extends NCollection_BaseSequence {
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
  Assign(theOther: MAT2d_SequenceOfSequenceOfGeometry): MAT2d_SequenceOfSequenceOfGeometry;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TColGeom2d_SequenceOfGeometry): void;
  Append_2(theSeq: MAT2d_SequenceOfSequenceOfGeometry): void;
  Prepend_1(theItem: TColGeom2d_SequenceOfGeometry): void;
  Prepend_2(theSeq: MAT2d_SequenceOfSequenceOfGeometry): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TColGeom2d_SequenceOfGeometry): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: MAT2d_SequenceOfSequenceOfGeometry): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: MAT2d_SequenceOfSequenceOfGeometry): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TColGeom2d_SequenceOfGeometry): void;
  Split(theIndex: Standard_Integer, theSeq: MAT2d_SequenceOfSequenceOfGeometry): void;
  First(): TColGeom2d_SequenceOfGeometry;
  ChangeFirst(): TColGeom2d_SequenceOfGeometry;
  Last(): TColGeom2d_SequenceOfGeometry;
  ChangeLast(): TColGeom2d_SequenceOfGeometry;
  Value(theIndex: Standard_Integer): TColGeom2d_SequenceOfGeometry;
  ChangeValue(theIndex: Standard_Integer): TColGeom2d_SequenceOfGeometry;
  SetValue(theIndex: Standard_Integer, theItem: TColGeom2d_SequenceOfGeometry): void;
}

  export declare class MAT2d_SequenceOfSequenceOfGeometry_1 extends MAT2d_SequenceOfSequenceOfGeometry {
    constructor();
  }

  export declare class MAT2d_SequenceOfSequenceOfGeometry_2 extends MAT2d_SequenceOfSequenceOfGeometry {
    constructor(theAllocator: any);
  }

  export declare class MAT2d_SequenceOfSequenceOfGeometry_3 extends MAT2d_SequenceOfSequenceOfGeometry {
    constructor(theOther: MAT2d_SequenceOfSequenceOfGeometry);
  }

export declare class Handle_MAT2d_Circuit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MAT2d_Circuit): void;
  get(): MAT2d_Circuit;
}

  export declare class Handle_MAT2d_Circuit_1 extends Handle_MAT2d_Circuit {
    constructor();
  }

  export declare class Handle_MAT2d_Circuit_2 extends Handle_MAT2d_Circuit {
    constructor(thePtr: MAT2d_Circuit);
  }

  export declare class Handle_MAT2d_Circuit_3 extends Handle_MAT2d_Circuit {
    constructor(theHandle: Handle_MAT2d_Circuit);
  }

  export declare class Handle_MAT2d_Circuit_4 extends Handle_MAT2d_Circuit {
    constructor(theHandle: Handle_MAT2d_Circuit);
  }

export declare class MAT2d_DataMapOfIntegerSequenceOfConnexion extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MAT2d_DataMapOfIntegerSequenceOfConnexion): void;
  Assign(theOther: MAT2d_DataMapOfIntegerSequenceOfConnexion): MAT2d_DataMapOfIntegerSequenceOfConnexion;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: MAT2d_SequenceOfConnexion): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: MAT2d_SequenceOfConnexion): MAT2d_SequenceOfConnexion;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): MAT2d_SequenceOfConnexion;
  Find_1(theKey: Standard_Integer): MAT2d_SequenceOfConnexion;
  Find_2(theKey: Standard_Integer, theValue: MAT2d_SequenceOfConnexion): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): MAT2d_SequenceOfConnexion;
  ChangeFind(theKey: Standard_Integer): MAT2d_SequenceOfConnexion;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MAT2d_DataMapOfIntegerSequenceOfConnexion_1 extends MAT2d_DataMapOfIntegerSequenceOfConnexion {
    constructor();
  }

  export declare class MAT2d_DataMapOfIntegerSequenceOfConnexion_2 extends MAT2d_DataMapOfIntegerSequenceOfConnexion {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MAT2d_DataMapOfIntegerSequenceOfConnexion_3 extends MAT2d_DataMapOfIntegerSequenceOfConnexion {
    constructor(theOther: MAT2d_DataMapOfIntegerSequenceOfConnexion);
  }

export declare type BRepBuilderAPI_EdgeError = {
  BRepBuilderAPI_EdgeDone: {};
  BRepBuilderAPI_PointProjectionFailed: {};
  BRepBuilderAPI_ParameterOutOfRange: {};
  BRepBuilderAPI_DifferentPointsOnClosedCurve: {};
  BRepBuilderAPI_PointWithInfiniteParameter: {};
  BRepBuilderAPI_DifferentsPointAndParameter: {};
  BRepBuilderAPI_LineThroughIdenticPoints: {};
}

export declare type BRepBuilderAPI_FaceError = {
  BRepBuilderAPI_FaceDone: {};
  BRepBuilderAPI_NoFace: {};
  BRepBuilderAPI_NotPlanar: {};
  BRepBuilderAPI_CurveProjectionFailed: {};
  BRepBuilderAPI_ParametersOutOfRange: {};
}

export declare type BRepLib_EdgeError = {
  BRepLib_EdgeDone: {};
  BRepLib_PointProjectionFailed: {};
  BRepLib_ParameterOutOfRange: {};
  BRepLib_DifferentPointsOnClosedCurve: {};
  BRepLib_PointWithInfiniteParameter: {};
  BRepLib_DifferentsPointAndParameter: {};
  BRepLib_LineThroughIdenticPoints: {};
}

export declare type BRepLib_ShapeModification = {
  BRepLib_Preserved: {};
  BRepLib_Deleted: {};
  BRepLib_Trimmed: {};
  BRepLib_Merged: {};
  BRepLib_BoundaryModified: {};
}

export declare type BRepLib_FaceError = {
  BRepLib_FaceDone: {};
  BRepLib_NoFace: {};
  BRepLib_NotPlanar: {};
  BRepLib_CurveProjectionFailed: {};
  BRepLib_ParametersOutOfRange: {};
}

export declare type BRepLib_ShellError = {
  BRepLib_ShellDone: {};
  BRepLib_EmptyShell: {};
  BRepLib_DisconnectedShell: {};
  BRepLib_ShellParametersOutOfRange: {};
}

export declare type BRepBuilderAPI_ShellError = {
  BRepBuilderAPI_ShellDone: {};
  BRepBuilderAPI_EmptyShell: {};
  BRepBuilderAPI_DisconnectedShell: {};
  BRepBuilderAPI_ShellParametersOutOfRange: {};
}

export declare type BRepLib_WireError = {
  BRepLib_WireDone: {};
  BRepLib_EmptyWire: {};
  BRepLib_DisconnectedWire: {};
  BRepLib_NonManifoldWire: {};
}

export declare type BRepBuilderAPI_WireError = {
  BRepBuilderAPI_WireDone: {};
  BRepBuilderAPI_EmptyWire: {};
  BRepBuilderAPI_DisconnectedWire: {};
  BRepBuilderAPI_NonManifoldWire: {};
}

export declare type BRepBuilderAPI_PipeError = {
  BRepBuilderAPI_PipeDone: {};
  BRepBuilderAPI_PipeNotDone: {};
  BRepBuilderAPI_PlaneNotIntersectGuide: {};
  BRepBuilderAPI_ImpossibleContact: {};
}

export declare type BRepBuilderAPI_ShapeModification = {
  BRepBuilderAPI_Preserved: {};
  BRepBuilderAPI_Deleted: {};
  BRepBuilderAPI_Trimmed: {};
  BRepBuilderAPI_Merged: {};
  BRepBuilderAPI_BoundaryModified: {};
}

export declare type BRepBuilderAPI_TransitionMode = {
  BRepBuilderAPI_Transformed: {};
  BRepBuilderAPI_RightCorner: {};
  BRepBuilderAPI_RoundCorner: {};
}

export declare type BRepCheck_Status = {
  BRepCheck_NoError: {};
  BRepCheck_InvalidPointOnCurve: {};
  BRepCheck_InvalidPointOnCurveOnSurface: {};
  BRepCheck_InvalidPointOnSurface: {};
  BRepCheck_No3DCurve: {};
  BRepCheck_Multiple3DCurve: {};
  BRepCheck_Invalid3DCurve: {};
  BRepCheck_NoCurveOnSurface: {};
  BRepCheck_InvalidCurveOnSurface: {};
  BRepCheck_InvalidCurveOnClosedSurface: {};
  BRepCheck_InvalidSameRangeFlag: {};
  BRepCheck_InvalidSameParameterFlag: {};
  BRepCheck_InvalidDegeneratedFlag: {};
  BRepCheck_FreeEdge: {};
  BRepCheck_InvalidMultiConnexity: {};
  BRepCheck_InvalidRange: {};
  BRepCheck_EmptyWire: {};
  BRepCheck_RedundantEdge: {};
  BRepCheck_SelfIntersectingWire: {};
  BRepCheck_NoSurface: {};
  BRepCheck_InvalidWire: {};
  BRepCheck_RedundantWire: {};
  BRepCheck_IntersectingWires: {};
  BRepCheck_InvalidImbricationOfWires: {};
  BRepCheck_EmptyShell: {};
  BRepCheck_RedundantFace: {};
  BRepCheck_InvalidImbricationOfShells: {};
  BRepCheck_UnorientableShape: {};
  BRepCheck_NotClosed: {};
  BRepCheck_NotConnected: {};
  BRepCheck_SubshapeNotInShape: {};
  BRepCheck_BadOrientation: {};
  BRepCheck_BadOrientationOfSubshape: {};
  BRepCheck_InvalidPolygonOnTriangulation: {};
  BRepCheck_InvalidToleranceValue: {};
  BRepCheck_EnclosedRegion: {};
  BRepCheck_CheckFail: {};
}

export declare type BRepExtrema_SupportType = {
  BRepExtrema_IsVertex: {};
  BRepExtrema_IsOnEdge: {};
  BRepExtrema_IsInFace: {};
}

export declare type MAT_Side = {
  MAT_Left: {};
  MAT_Right: {};
}

export declare type TKTopAlgoLib = {
  BRepApprox_TheComputeLineOfApprox_1: typeof BRepApprox_TheComputeLineOfApprox_1;
  BRepApprox_TheComputeLineOfApprox_2: typeof BRepApprox_TheComputeLineOfApprox_2;
  BRepApprox_TheComputeLineOfApprox_3: typeof BRepApprox_TheComputeLineOfApprox_3;
  BRepApprox_TheComputeLineOfApprox_4: typeof BRepApprox_TheComputeLineOfApprox_4;
  BRepApprox_TheComputeLineBezierOfApprox_1: typeof BRepApprox_TheComputeLineBezierOfApprox_1;
  BRepApprox_TheComputeLineBezierOfApprox_2: typeof BRepApprox_TheComputeLineBezierOfApprox_2;
  BRepApprox_TheComputeLineBezierOfApprox_3: typeof BRepApprox_TheComputeLineBezierOfApprox_3;
  BRepApprox_TheComputeLineBezierOfApprox_4: typeof BRepApprox_TheComputeLineBezierOfApprox_4;
  BRepApprox_ApproxLine_1: typeof BRepApprox_ApproxLine_1;
  BRepApprox_ApproxLine_2: typeof BRepApprox_ApproxLine_2;
  BRepApprox_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfApprox: typeof BRepApprox_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfApprox;
  BRepApprox_TheMultiLineOfApprox_1: typeof BRepApprox_TheMultiLineOfApprox_1;
  BRepApprox_TheMultiLineOfApprox_2: typeof BRepApprox_TheMultiLineOfApprox_2;
  BRepApprox_TheMultiLineOfApprox_3: typeof BRepApprox_TheMultiLineOfApprox_3;
  BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_1: typeof BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_1;
  BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_2: typeof BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_2;
  BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_3: typeof BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_3;
  BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_4: typeof BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox_4;
  BRepApprox_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfApprox: typeof BRepApprox_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfApprox;
  BRepApprox_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfApprox: typeof BRepApprox_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfApprox;
  BRepApprox_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfApprox: typeof BRepApprox_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfApprox;
  BRepApprox_MyBSplGradientOfTheComputeLineOfApprox_1: typeof BRepApprox_MyBSplGradientOfTheComputeLineOfApprox_1;
  BRepApprox_MyBSplGradientOfTheComputeLineOfApprox_2: typeof BRepApprox_MyBSplGradientOfTheComputeLineOfApprox_2;
  BRepApprox_MyGradientOfTheComputeLineBezierOfApprox: typeof BRepApprox_MyGradientOfTheComputeLineBezierOfApprox;
  BRepApprox_MyGradientbisOfTheComputeLineOfApprox: typeof BRepApprox_MyGradientbisOfTheComputeLineOfApprox;
  BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_1: typeof BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_1;
  BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_2: typeof BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_2;
  BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_3: typeof BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_3;
  BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_4: typeof BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox_4;
  BRepApprox_ParFunctionOfMyGradientOfTheComputeLineBezierOfApprox: typeof BRepApprox_ParFunctionOfMyGradientOfTheComputeLineBezierOfApprox;
  BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_1: typeof BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_1;
  BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_2: typeof BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_2;
  BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_3: typeof BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_3;
  BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_4: typeof BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox_4;
  BRepApprox_ParFunctionOfMyGradientbisOfTheComputeLineOfApprox: typeof BRepApprox_ParFunctionOfMyGradientbisOfTheComputeLineOfApprox;
  BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox: typeof BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox;
  BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_1: typeof BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_1;
  BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_2: typeof BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_2;
  BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_3: typeof BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox_3;
  BRepApprox_TheImpPrmSvSurfacesOfApprox_1: typeof BRepApprox_TheImpPrmSvSurfacesOfApprox_1;
  BRepApprox_TheImpPrmSvSurfacesOfApprox_2: typeof BRepApprox_TheImpPrmSvSurfacesOfApprox_2;
  BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox_1: typeof BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox_1;
  BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox_2: typeof BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox_2;
  BRepApprox_ThePrmPrmSvSurfacesOfApprox: typeof BRepApprox_ThePrmPrmSvSurfacesOfApprox;
  BRepBuilderAPI_BndBoxTreeSelector: typeof BRepBuilderAPI_BndBoxTreeSelector;
  BRepBuilderAPI_VertexInspector: typeof BRepBuilderAPI_VertexInspector;
  BRepBuilderAPI_Collect: typeof BRepBuilderAPI_Collect;
  BRepBuilderAPI_Copy_1: typeof BRepBuilderAPI_Copy_1;
  BRepBuilderAPI_Copy_2: typeof BRepBuilderAPI_Copy_2;
  BRepBuilderAPI_FastSewing: typeof BRepBuilderAPI_FastSewing;
  BRepBuilderAPI_FindPlane_1: typeof BRepBuilderAPI_FindPlane_1;
  BRepBuilderAPI_FindPlane_2: typeof BRepBuilderAPI_FindPlane_2;
  BRepBuilderAPI_GTransform_1: typeof BRepBuilderAPI_GTransform_1;
  BRepBuilderAPI_GTransform_2: typeof BRepBuilderAPI_GTransform_2;
  BRepLib_MakeEdge_1: typeof BRepLib_MakeEdge_1;
  BRepLib_MakeEdge_2: typeof BRepLib_MakeEdge_2;
  BRepLib_MakeEdge_3: typeof BRepLib_MakeEdge_3;
  BRepLib_MakeEdge_4: typeof BRepLib_MakeEdge_4;
  BRepLib_MakeEdge_5: typeof BRepLib_MakeEdge_5;
  BRepLib_MakeEdge_6: typeof BRepLib_MakeEdge_6;
  BRepLib_MakeEdge_7: typeof BRepLib_MakeEdge_7;
  BRepLib_MakeEdge_8: typeof BRepLib_MakeEdge_8;
  BRepLib_MakeEdge_9: typeof BRepLib_MakeEdge_9;
  BRepLib_MakeEdge_10: typeof BRepLib_MakeEdge_10;
  BRepLib_MakeEdge_11: typeof BRepLib_MakeEdge_11;
  BRepLib_MakeEdge_12: typeof BRepLib_MakeEdge_12;
  BRepLib_MakeEdge_13: typeof BRepLib_MakeEdge_13;
  BRepLib_MakeEdge_14: typeof BRepLib_MakeEdge_14;
  BRepLib_MakeEdge_15: typeof BRepLib_MakeEdge_15;
  BRepLib_MakeEdge_16: typeof BRepLib_MakeEdge_16;
  BRepLib_MakeEdge_17: typeof BRepLib_MakeEdge_17;
  BRepLib_MakeEdge_18: typeof BRepLib_MakeEdge_18;
  BRepLib_MakeEdge_19: typeof BRepLib_MakeEdge_19;
  BRepLib_MakeEdge_20: typeof BRepLib_MakeEdge_20;
  BRepLib_MakeEdge_21: typeof BRepLib_MakeEdge_21;
  BRepLib_MakeEdge_22: typeof BRepLib_MakeEdge_22;
  BRepLib_MakeEdge_23: typeof BRepLib_MakeEdge_23;
  BRepLib_MakeEdge_24: typeof BRepLib_MakeEdge_24;
  BRepLib_MakeEdge_25: typeof BRepLib_MakeEdge_25;
  BRepLib_MakeEdge_26: typeof BRepLib_MakeEdge_26;
  BRepLib_MakeEdge_27: typeof BRepLib_MakeEdge_27;
  BRepLib_MakeEdge_28: typeof BRepLib_MakeEdge_28;
  BRepLib_MakeEdge_29: typeof BRepLib_MakeEdge_29;
  BRepLib_MakeEdge_30: typeof BRepLib_MakeEdge_30;
  BRepLib_MakeEdge_31: typeof BRepLib_MakeEdge_31;
  BRepLib_MakeEdge_32: typeof BRepLib_MakeEdge_32;
  BRepLib_MakeEdge_33: typeof BRepLib_MakeEdge_33;
  BRepLib_MakeEdge_34: typeof BRepLib_MakeEdge_34;
  BRepLib_MakeEdge_35: typeof BRepLib_MakeEdge_35;
  BRepBuilderAPI_MakeEdge_1: typeof BRepBuilderAPI_MakeEdge_1;
  BRepBuilderAPI_MakeEdge_2: typeof BRepBuilderAPI_MakeEdge_2;
  BRepBuilderAPI_MakeEdge_3: typeof BRepBuilderAPI_MakeEdge_3;
  BRepBuilderAPI_MakeEdge_4: typeof BRepBuilderAPI_MakeEdge_4;
  BRepBuilderAPI_MakeEdge_5: typeof BRepBuilderAPI_MakeEdge_5;
  BRepBuilderAPI_MakeEdge_6: typeof BRepBuilderAPI_MakeEdge_6;
  BRepBuilderAPI_MakeEdge_7: typeof BRepBuilderAPI_MakeEdge_7;
  BRepBuilderAPI_MakeEdge_8: typeof BRepBuilderAPI_MakeEdge_8;
  BRepBuilderAPI_MakeEdge_9: typeof BRepBuilderAPI_MakeEdge_9;
  BRepBuilderAPI_MakeEdge_10: typeof BRepBuilderAPI_MakeEdge_10;
  BRepBuilderAPI_MakeEdge_11: typeof BRepBuilderAPI_MakeEdge_11;
  BRepBuilderAPI_MakeEdge_12: typeof BRepBuilderAPI_MakeEdge_12;
  BRepBuilderAPI_MakeEdge_13: typeof BRepBuilderAPI_MakeEdge_13;
  BRepBuilderAPI_MakeEdge_14: typeof BRepBuilderAPI_MakeEdge_14;
  BRepBuilderAPI_MakeEdge_15: typeof BRepBuilderAPI_MakeEdge_15;
  BRepBuilderAPI_MakeEdge_16: typeof BRepBuilderAPI_MakeEdge_16;
  BRepBuilderAPI_MakeEdge_17: typeof BRepBuilderAPI_MakeEdge_17;
  BRepBuilderAPI_MakeEdge_18: typeof BRepBuilderAPI_MakeEdge_18;
  BRepBuilderAPI_MakeEdge_19: typeof BRepBuilderAPI_MakeEdge_19;
  BRepBuilderAPI_MakeEdge_20: typeof BRepBuilderAPI_MakeEdge_20;
  BRepBuilderAPI_MakeEdge_21: typeof BRepBuilderAPI_MakeEdge_21;
  BRepBuilderAPI_MakeEdge_22: typeof BRepBuilderAPI_MakeEdge_22;
  BRepBuilderAPI_MakeEdge_23: typeof BRepBuilderAPI_MakeEdge_23;
  BRepBuilderAPI_MakeEdge_24: typeof BRepBuilderAPI_MakeEdge_24;
  BRepBuilderAPI_MakeEdge_25: typeof BRepBuilderAPI_MakeEdge_25;
  BRepBuilderAPI_MakeEdge_26: typeof BRepBuilderAPI_MakeEdge_26;
  BRepBuilderAPI_MakeEdge_27: typeof BRepBuilderAPI_MakeEdge_27;
  BRepBuilderAPI_MakeEdge_28: typeof BRepBuilderAPI_MakeEdge_28;
  BRepBuilderAPI_MakeEdge_29: typeof BRepBuilderAPI_MakeEdge_29;
  BRepBuilderAPI_MakeEdge_30: typeof BRepBuilderAPI_MakeEdge_30;
  BRepBuilderAPI_MakeEdge_31: typeof BRepBuilderAPI_MakeEdge_31;
  BRepBuilderAPI_MakeEdge_32: typeof BRepBuilderAPI_MakeEdge_32;
  BRepBuilderAPI_MakeEdge_33: typeof BRepBuilderAPI_MakeEdge_33;
  BRepBuilderAPI_MakeEdge_34: typeof BRepBuilderAPI_MakeEdge_34;
  BRepBuilderAPI_MakeEdge_35: typeof BRepBuilderAPI_MakeEdge_35;
  BRepLib_MakeEdge2d_1: typeof BRepLib_MakeEdge2d_1;
  BRepLib_MakeEdge2d_2: typeof BRepLib_MakeEdge2d_2;
  BRepLib_MakeEdge2d_3: typeof BRepLib_MakeEdge2d_3;
  BRepLib_MakeEdge2d_4: typeof BRepLib_MakeEdge2d_4;
  BRepLib_MakeEdge2d_5: typeof BRepLib_MakeEdge2d_5;
  BRepLib_MakeEdge2d_6: typeof BRepLib_MakeEdge2d_6;
  BRepLib_MakeEdge2d_7: typeof BRepLib_MakeEdge2d_7;
  BRepLib_MakeEdge2d_8: typeof BRepLib_MakeEdge2d_8;
  BRepLib_MakeEdge2d_9: typeof BRepLib_MakeEdge2d_9;
  BRepLib_MakeEdge2d_10: typeof BRepLib_MakeEdge2d_10;
  BRepLib_MakeEdge2d_11: typeof BRepLib_MakeEdge2d_11;
  BRepLib_MakeEdge2d_12: typeof BRepLib_MakeEdge2d_12;
  BRepLib_MakeEdge2d_13: typeof BRepLib_MakeEdge2d_13;
  BRepLib_MakeEdge2d_14: typeof BRepLib_MakeEdge2d_14;
  BRepLib_MakeEdge2d_15: typeof BRepLib_MakeEdge2d_15;
  BRepLib_MakeEdge2d_16: typeof BRepLib_MakeEdge2d_16;
  BRepLib_MakeEdge2d_17: typeof BRepLib_MakeEdge2d_17;
  BRepLib_MakeEdge2d_18: typeof BRepLib_MakeEdge2d_18;
  BRepLib_MakeEdge2d_19: typeof BRepLib_MakeEdge2d_19;
  BRepLib_MakeEdge2d_20: typeof BRepLib_MakeEdge2d_20;
  BRepLib_MakeEdge2d_21: typeof BRepLib_MakeEdge2d_21;
  BRepLib_MakeEdge2d_22: typeof BRepLib_MakeEdge2d_22;
  BRepLib_MakeEdge2d_23: typeof BRepLib_MakeEdge2d_23;
  BRepLib_MakeEdge2d_24: typeof BRepLib_MakeEdge2d_24;
  BRepLib_MakeEdge2d_25: typeof BRepLib_MakeEdge2d_25;
  BRepLib_MakeEdge2d_26: typeof BRepLib_MakeEdge2d_26;
  BRepLib_MakeEdge2d_27: typeof BRepLib_MakeEdge2d_27;
  BRepLib_MakeEdge2d_28: typeof BRepLib_MakeEdge2d_28;
  BRepBuilderAPI_MakeEdge2d_1: typeof BRepBuilderAPI_MakeEdge2d_1;
  BRepBuilderAPI_MakeEdge2d_2: typeof BRepBuilderAPI_MakeEdge2d_2;
  BRepBuilderAPI_MakeEdge2d_3: typeof BRepBuilderAPI_MakeEdge2d_3;
  BRepBuilderAPI_MakeEdge2d_4: typeof BRepBuilderAPI_MakeEdge2d_4;
  BRepBuilderAPI_MakeEdge2d_5: typeof BRepBuilderAPI_MakeEdge2d_5;
  BRepBuilderAPI_MakeEdge2d_6: typeof BRepBuilderAPI_MakeEdge2d_6;
  BRepBuilderAPI_MakeEdge2d_7: typeof BRepBuilderAPI_MakeEdge2d_7;
  BRepBuilderAPI_MakeEdge2d_8: typeof BRepBuilderAPI_MakeEdge2d_8;
  BRepBuilderAPI_MakeEdge2d_9: typeof BRepBuilderAPI_MakeEdge2d_9;
  BRepBuilderAPI_MakeEdge2d_10: typeof BRepBuilderAPI_MakeEdge2d_10;
  BRepBuilderAPI_MakeEdge2d_11: typeof BRepBuilderAPI_MakeEdge2d_11;
  BRepBuilderAPI_MakeEdge2d_12: typeof BRepBuilderAPI_MakeEdge2d_12;
  BRepBuilderAPI_MakeEdge2d_13: typeof BRepBuilderAPI_MakeEdge2d_13;
  BRepBuilderAPI_MakeEdge2d_14: typeof BRepBuilderAPI_MakeEdge2d_14;
  BRepBuilderAPI_MakeEdge2d_15: typeof BRepBuilderAPI_MakeEdge2d_15;
  BRepBuilderAPI_MakeEdge2d_16: typeof BRepBuilderAPI_MakeEdge2d_16;
  BRepBuilderAPI_MakeEdge2d_17: typeof BRepBuilderAPI_MakeEdge2d_17;
  BRepBuilderAPI_MakeEdge2d_18: typeof BRepBuilderAPI_MakeEdge2d_18;
  BRepBuilderAPI_MakeEdge2d_19: typeof BRepBuilderAPI_MakeEdge2d_19;
  BRepBuilderAPI_MakeEdge2d_20: typeof BRepBuilderAPI_MakeEdge2d_20;
  BRepBuilderAPI_MakeEdge2d_21: typeof BRepBuilderAPI_MakeEdge2d_21;
  BRepBuilderAPI_MakeEdge2d_22: typeof BRepBuilderAPI_MakeEdge2d_22;
  BRepBuilderAPI_MakeEdge2d_23: typeof BRepBuilderAPI_MakeEdge2d_23;
  BRepBuilderAPI_MakeEdge2d_24: typeof BRepBuilderAPI_MakeEdge2d_24;
  BRepBuilderAPI_MakeEdge2d_25: typeof BRepBuilderAPI_MakeEdge2d_25;
  BRepBuilderAPI_MakeEdge2d_26: typeof BRepBuilderAPI_MakeEdge2d_26;
  BRepBuilderAPI_MakeEdge2d_27: typeof BRepBuilderAPI_MakeEdge2d_27;
  BRepBuilderAPI_MakeEdge2d_28: typeof BRepBuilderAPI_MakeEdge2d_28;
  BRepLib_MakeFace_1: typeof BRepLib_MakeFace_1;
  BRepLib_MakeFace_2: typeof BRepLib_MakeFace_2;
  BRepLib_MakeFace_3: typeof BRepLib_MakeFace_3;
  BRepLib_MakeFace_4: typeof BRepLib_MakeFace_4;
  BRepLib_MakeFace_5: typeof BRepLib_MakeFace_5;
  BRepLib_MakeFace_6: typeof BRepLib_MakeFace_6;
  BRepLib_MakeFace_7: typeof BRepLib_MakeFace_7;
  BRepLib_MakeFace_8: typeof BRepLib_MakeFace_8;
  BRepLib_MakeFace_9: typeof BRepLib_MakeFace_9;
  BRepLib_MakeFace_10: typeof BRepLib_MakeFace_10;
  BRepLib_MakeFace_11: typeof BRepLib_MakeFace_11;
  BRepLib_MakeFace_12: typeof BRepLib_MakeFace_12;
  BRepLib_MakeFace_13: typeof BRepLib_MakeFace_13;
  BRepLib_MakeFace_14: typeof BRepLib_MakeFace_14;
  BRepLib_MakeFace_15: typeof BRepLib_MakeFace_15;
  BRepLib_MakeFace_16: typeof BRepLib_MakeFace_16;
  BRepLib_MakeFace_17: typeof BRepLib_MakeFace_17;
  BRepLib_MakeFace_18: typeof BRepLib_MakeFace_18;
  BRepLib_MakeFace_19: typeof BRepLib_MakeFace_19;
  BRepLib_MakeFace_20: typeof BRepLib_MakeFace_20;
  BRepLib_MakeFace_21: typeof BRepLib_MakeFace_21;
  BRepLib_MakeFace_22: typeof BRepLib_MakeFace_22;
  BRepBuilderAPI_MakeFace_1: typeof BRepBuilderAPI_MakeFace_1;
  BRepBuilderAPI_MakeFace_2: typeof BRepBuilderAPI_MakeFace_2;
  BRepBuilderAPI_MakeFace_3: typeof BRepBuilderAPI_MakeFace_3;
  BRepBuilderAPI_MakeFace_4: typeof BRepBuilderAPI_MakeFace_4;
  BRepBuilderAPI_MakeFace_5: typeof BRepBuilderAPI_MakeFace_5;
  BRepBuilderAPI_MakeFace_6: typeof BRepBuilderAPI_MakeFace_6;
  BRepBuilderAPI_MakeFace_7: typeof BRepBuilderAPI_MakeFace_7;
  BRepBuilderAPI_MakeFace_8: typeof BRepBuilderAPI_MakeFace_8;
  BRepBuilderAPI_MakeFace_9: typeof BRepBuilderAPI_MakeFace_9;
  BRepBuilderAPI_MakeFace_10: typeof BRepBuilderAPI_MakeFace_10;
  BRepBuilderAPI_MakeFace_11: typeof BRepBuilderAPI_MakeFace_11;
  BRepBuilderAPI_MakeFace_12: typeof BRepBuilderAPI_MakeFace_12;
  BRepBuilderAPI_MakeFace_13: typeof BRepBuilderAPI_MakeFace_13;
  BRepBuilderAPI_MakeFace_14: typeof BRepBuilderAPI_MakeFace_14;
  BRepBuilderAPI_MakeFace_15: typeof BRepBuilderAPI_MakeFace_15;
  BRepBuilderAPI_MakeFace_16: typeof BRepBuilderAPI_MakeFace_16;
  BRepBuilderAPI_MakeFace_17: typeof BRepBuilderAPI_MakeFace_17;
  BRepBuilderAPI_MakeFace_18: typeof BRepBuilderAPI_MakeFace_18;
  BRepBuilderAPI_MakeFace_19: typeof BRepBuilderAPI_MakeFace_19;
  BRepBuilderAPI_MakeFace_20: typeof BRepBuilderAPI_MakeFace_20;
  BRepBuilderAPI_MakeFace_21: typeof BRepBuilderAPI_MakeFace_21;
  BRepBuilderAPI_MakeFace_22: typeof BRepBuilderAPI_MakeFace_22;
  BRepLib_MakePolygon_1: typeof BRepLib_MakePolygon_1;
  BRepLib_MakePolygon_2: typeof BRepLib_MakePolygon_2;
  BRepLib_MakePolygon_3: typeof BRepLib_MakePolygon_3;
  BRepLib_MakePolygon_4: typeof BRepLib_MakePolygon_4;
  BRepLib_MakePolygon_5: typeof BRepLib_MakePolygon_5;
  BRepLib_MakePolygon_6: typeof BRepLib_MakePolygon_6;
  BRepLib_MakePolygon_7: typeof BRepLib_MakePolygon_7;
  BRepBuilderAPI_MakePolygon_1: typeof BRepBuilderAPI_MakePolygon_1;
  BRepBuilderAPI_MakePolygon_2: typeof BRepBuilderAPI_MakePolygon_2;
  BRepBuilderAPI_MakePolygon_3: typeof BRepBuilderAPI_MakePolygon_3;
  BRepBuilderAPI_MakePolygon_4: typeof BRepBuilderAPI_MakePolygon_4;
  BRepBuilderAPI_MakePolygon_5: typeof BRepBuilderAPI_MakePolygon_5;
  BRepBuilderAPI_MakePolygon_6: typeof BRepBuilderAPI_MakePolygon_6;
  BRepBuilderAPI_MakePolygon_7: typeof BRepBuilderAPI_MakePolygon_7;
  BRepLib_MakeShell_1: typeof BRepLib_MakeShell_1;
  BRepLib_MakeShell_2: typeof BRepLib_MakeShell_2;
  BRepLib_MakeShell_3: typeof BRepLib_MakeShell_3;
  BRepBuilderAPI_MakeShell_1: typeof BRepBuilderAPI_MakeShell_1;
  BRepBuilderAPI_MakeShell_2: typeof BRepBuilderAPI_MakeShell_2;
  BRepBuilderAPI_MakeShell_3: typeof BRepBuilderAPI_MakeShell_3;
  BRepLib_MakeSolid_1: typeof BRepLib_MakeSolid_1;
  BRepLib_MakeSolid_2: typeof BRepLib_MakeSolid_2;
  BRepLib_MakeSolid_3: typeof BRepLib_MakeSolid_3;
  BRepLib_MakeSolid_4: typeof BRepLib_MakeSolid_4;
  BRepLib_MakeSolid_5: typeof BRepLib_MakeSolid_5;
  BRepLib_MakeSolid_6: typeof BRepLib_MakeSolid_6;
  BRepLib_MakeSolid_7: typeof BRepLib_MakeSolid_7;
  BRepBuilderAPI_MakeSolid_1: typeof BRepBuilderAPI_MakeSolid_1;
  BRepBuilderAPI_MakeSolid_2: typeof BRepBuilderAPI_MakeSolid_2;
  BRepBuilderAPI_MakeSolid_3: typeof BRepBuilderAPI_MakeSolid_3;
  BRepBuilderAPI_MakeSolid_4: typeof BRepBuilderAPI_MakeSolid_4;
  BRepBuilderAPI_MakeSolid_5: typeof BRepBuilderAPI_MakeSolid_5;
  BRepBuilderAPI_MakeSolid_6: typeof BRepBuilderAPI_MakeSolid_6;
  BRepBuilderAPI_MakeSolid_7: typeof BRepBuilderAPI_MakeSolid_7;
  BRepLib_MakeVertex: typeof BRepLib_MakeVertex;
  BRepBuilderAPI_MakeVertex: typeof BRepBuilderAPI_MakeVertex;
  BRepLib_MakeWire_1: typeof BRepLib_MakeWire_1;
  BRepLib_MakeWire_2: typeof BRepLib_MakeWire_2;
  BRepLib_MakeWire_3: typeof BRepLib_MakeWire_3;
  BRepLib_MakeWire_4: typeof BRepLib_MakeWire_4;
  BRepLib_MakeWire_5: typeof BRepLib_MakeWire_5;
  BRepLib_MakeWire_6: typeof BRepLib_MakeWire_6;
  BRepLib_MakeWire_7: typeof BRepLib_MakeWire_7;
  BRepBuilderAPI_MakeWire_1: typeof BRepBuilderAPI_MakeWire_1;
  BRepBuilderAPI_MakeWire_2: typeof BRepBuilderAPI_MakeWire_2;
  BRepBuilderAPI_MakeWire_3: typeof BRepBuilderAPI_MakeWire_3;
  BRepBuilderAPI_MakeWire_4: typeof BRepBuilderAPI_MakeWire_4;
  BRepBuilderAPI_MakeWire_5: typeof BRepBuilderAPI_MakeWire_5;
  BRepBuilderAPI_MakeWire_6: typeof BRepBuilderAPI_MakeWire_6;
  BRepBuilderAPI_MakeWire_7: typeof BRepBuilderAPI_MakeWire_7;
  BRepBuilderAPI_NurbsConvert_1: typeof BRepBuilderAPI_NurbsConvert_1;
  BRepBuilderAPI_NurbsConvert_2: typeof BRepBuilderAPI_NurbsConvert_2;
  BRepBuilderAPI_Sewing: typeof BRepBuilderAPI_Sewing;
  BRepBuilderAPI_Transform_1: typeof BRepBuilderAPI_Transform_1;
  BRepBuilderAPI_Transform_2: typeof BRepBuilderAPI_Transform_2;
  BRepCheck_Analyzer: typeof BRepCheck_Analyzer;
  BRepCheck_Edge: typeof BRepCheck_Edge;
  BRepCheck_Face: typeof BRepCheck_Face;
  BRepCheck_Shell: typeof BRepCheck_Shell;
  BRepCheck_Solid: typeof BRepCheck_Solid;
  BRepCheck_Vertex: typeof BRepCheck_Vertex;
  BRepCheck_Wire: typeof BRepCheck_Wire;
  BRepClass_Edge_1: typeof BRepClass_Edge_1;
  BRepClass_Edge_2: typeof BRepClass_Edge_2;
  BRepClass_Intersector: typeof BRepClass_Intersector;
  BRepClass_FClass2dOfFClassifier: typeof BRepClass_FClass2dOfFClassifier;
  BRepClass_FClassifier_1: typeof BRepClass_FClassifier_1;
  BRepClass_FClassifier_2: typeof BRepClass_FClassifier_2;
  BRepClass_FaceExplorer: typeof BRepClass_FaceExplorer;
  BRepClass_FaceClassifier_1: typeof BRepClass_FaceClassifier_1;
  BRepClass_FaceClassifier_2: typeof BRepClass_FaceClassifier_2;
  BRepClass_FaceClassifier_3: typeof BRepClass_FaceClassifier_3;
  BRepClass_FaceClassifier_4: typeof BRepClass_FaceClassifier_4;
  BRepClass_FacePassiveClassifier: typeof BRepClass_FacePassiveClassifier;
  BRepClass3d_BndBoxTreeSelectorPoint: typeof BRepClass3d_BndBoxTreeSelectorPoint;
  BRepClass3d_BndBoxTreeSelectorLine: typeof BRepClass3d_BndBoxTreeSelectorLine;
  BRepClass3d_Intersector3d: typeof BRepClass3d_Intersector3d;
  BRepClass3d_SClassifier_1: typeof BRepClass3d_SClassifier_1;
  BRepClass3d_SClassifier_2: typeof BRepClass3d_SClassifier_2;
  BRepClass3d_SolidExplorer_1: typeof BRepClass3d_SolidExplorer_1;
  BRepClass3d_SolidExplorer_2: typeof BRepClass3d_SolidExplorer_2;
  BRepClass3d_SolidClassifier_1: typeof BRepClass3d_SolidClassifier_1;
  BRepClass3d_SolidClassifier_2: typeof BRepClass3d_SolidClassifier_2;
  BRepClass3d_SolidClassifier_3: typeof BRepClass3d_SolidClassifier_3;
  BRepClass3d_SolidPassiveClassifier: typeof BRepClass3d_SolidPassiveClassifier;
  BRepExtrema_SolutionElem_1: typeof BRepExtrema_SolutionElem_1;
  BRepExtrema_SolutionElem_2: typeof BRepExtrema_SolutionElem_2;
  BRepExtrema_SolutionElem_3: typeof BRepExtrema_SolutionElem_3;
  BRepExtrema_SolutionElem_4: typeof BRepExtrema_SolutionElem_4;
  BRepExtrema_DistShapeShape_1: typeof BRepExtrema_DistShapeShape_1;
  BRepExtrema_DistShapeShape_2: typeof BRepExtrema_DistShapeShape_2;
  BRepExtrema_DistShapeShape_3: typeof BRepExtrema_DistShapeShape_3;
  BRepExtrema_DistanceSS_1: typeof BRepExtrema_DistanceSS_1;
  BRepExtrema_DistanceSS_2: typeof BRepExtrema_DistanceSS_2;
  BRepExtrema_ExtCC_1: typeof BRepExtrema_ExtCC_1;
  BRepExtrema_ExtCC_2: typeof BRepExtrema_ExtCC_2;
  BRepExtrema_ExtCF_1: typeof BRepExtrema_ExtCF_1;
  BRepExtrema_ExtCF_2: typeof BRepExtrema_ExtCF_2;
  BRepExtrema_ExtFF_1: typeof BRepExtrema_ExtFF_1;
  BRepExtrema_ExtFF_2: typeof BRepExtrema_ExtFF_2;
  BRepExtrema_ExtPC_1: typeof BRepExtrema_ExtPC_1;
  BRepExtrema_ExtPC_2: typeof BRepExtrema_ExtPC_2;
  BRepExtrema_ExtPF_1: typeof BRepExtrema_ExtPF_1;
  BRepExtrema_ExtPF_2: typeof BRepExtrema_ExtPF_2;
  BRepExtrema_TriangleSet_1: typeof BRepExtrema_TriangleSet_1;
  BRepExtrema_TriangleSet_2: typeof BRepExtrema_TriangleSet_2;
  BRepExtrema_OverlapTool_1: typeof BRepExtrema_OverlapTool_1;
  BRepExtrema_OverlapTool_2: typeof BRepExtrema_OverlapTool_2;
  BRepExtrema_SelfIntersection_1: typeof BRepExtrema_SelfIntersection_1;
  BRepExtrema_SelfIntersection_2: typeof BRepExtrema_SelfIntersection_2;
  BRepExtrema_ShapeProximity_1: typeof BRepExtrema_ShapeProximity_1;
  BRepExtrema_ShapeProximity_2: typeof BRepExtrema_ShapeProximity_2;
  BRepExtrema_UnCompatibleShape_1: typeof BRepExtrema_UnCompatibleShape_1;
  BRepExtrema_UnCompatibleShape_2: typeof BRepExtrema_UnCompatibleShape_2;
  MAT_Arc: typeof MAT_Arc;
  MAT_BasicElt: typeof MAT_BasicElt;
  MAT_Node: typeof MAT_Node;
  Bisector_Bisec: typeof Bisector_Bisec;
  MAT2d_Tool2d: typeof MAT2d_Tool2d;
  MAT2d_BiInt: typeof MAT2d_BiInt;
  BRepMAT2d_BisectingLocus: typeof BRepMAT2d_BisectingLocus;
  BRepMAT2d_LinkTopoBilo_1: typeof BRepMAT2d_LinkTopoBilo_1;
  BRepMAT2d_LinkTopoBilo_2: typeof BRepMAT2d_LinkTopoBilo_2;
  BRepGProp_Cinert_1: typeof BRepGProp_Cinert_1;
  BRepGProp_Cinert_2: typeof BRepGProp_Cinert_2;
  BRepGProp_Domain_1: typeof BRepGProp_Domain_1;
  BRepGProp_Domain_2: typeof BRepGProp_Domain_2;
  BRepGProp_Face_1: typeof BRepGProp_Face_1;
  BRepGProp_Face_2: typeof BRepGProp_Face_2;
  BRepGProp_MeshCinert: typeof BRepGProp_MeshCinert;
  BRepGProp_MeshProps: typeof BRepGProp_MeshProps;
  BRepGProp_Sinert_1: typeof BRepGProp_Sinert_1;
  BRepGProp_Sinert_2: typeof BRepGProp_Sinert_2;
  BRepGProp_Sinert_3: typeof BRepGProp_Sinert_3;
  BRepGProp_Sinert_4: typeof BRepGProp_Sinert_4;
  BRepGProp_Sinert_5: typeof BRepGProp_Sinert_5;
  BRepGProp_UFunction: typeof BRepGProp_UFunction;
  BRepGProp_TFunction: typeof BRepGProp_TFunction;
  BRepGProp_Vinert_1: typeof BRepGProp_Vinert_1;
  BRepGProp_Vinert_2: typeof BRepGProp_Vinert_2;
  BRepGProp_Vinert_3: typeof BRepGProp_Vinert_3;
  BRepGProp_Vinert_4: typeof BRepGProp_Vinert_4;
  BRepGProp_Vinert_5: typeof BRepGProp_Vinert_5;
  BRepGProp_Vinert_6: typeof BRepGProp_Vinert_6;
  BRepGProp_Vinert_7: typeof BRepGProp_Vinert_7;
  BRepGProp_Vinert_8: typeof BRepGProp_Vinert_8;
  BRepGProp_Vinert_9: typeof BRepGProp_Vinert_9;
  BRepGProp_Vinert_10: typeof BRepGProp_Vinert_10;
  BRepGProp_Vinert_11: typeof BRepGProp_Vinert_11;
  BRepGProp_Vinert_12: typeof BRepGProp_Vinert_12;
  BRepGProp_Vinert_13: typeof BRepGProp_Vinert_13;
  BRepIntCurveSurface_Inter: typeof BRepIntCurveSurface_Inter;
  BRepLib_CheckCurveOnSurface_1: typeof BRepLib_CheckCurveOnSurface_1;
  BRepLib_CheckCurveOnSurface_2: typeof BRepLib_CheckCurveOnSurface_2;
  BRepLib_FindSurface_1: typeof BRepLib_FindSurface_1;
  BRepLib_FindSurface_2: typeof BRepLib_FindSurface_2;
  BRepLib_FuseEdges: typeof BRepLib_FuseEdges;
  BRepMAT2d_Explorer_1: typeof BRepMAT2d_Explorer_1;
  BRepMAT2d_Explorer_2: typeof BRepMAT2d_Explorer_2;
  BRepTopAdaptor_Tool_1: typeof BRepTopAdaptor_Tool_1;
  BRepTopAdaptor_Tool_2: typeof BRepTopAdaptor_Tool_2;
  BRepTopAdaptor_Tool_3: typeof BRepTopAdaptor_Tool_3;
  BRepTopAdaptor_FClass2d: typeof BRepTopAdaptor_FClass2d;
  BRepTopAdaptor_HVertex: typeof BRepTopAdaptor_HVertex;
  BRepTopAdaptor_TopolTool_1: typeof BRepTopAdaptor_TopolTool_1;
  BRepTopAdaptor_TopolTool_2: typeof BRepTopAdaptor_TopolTool_2;
  Bisector_BisecAna: typeof Bisector_BisecAna;
  Bisector_PointOnBis_1: typeof Bisector_PointOnBis_1;
  Bisector_PointOnBis_2: typeof Bisector_PointOnBis_2;
  Bisector_PolyBis: typeof Bisector_PolyBis;
  Bisector_BisecCC_1: typeof Bisector_BisecCC_1;
  Bisector_BisecCC_2: typeof Bisector_BisecCC_2;
  Bisector_BisecPC_1: typeof Bisector_BisecPC_1;
  Bisector_BisecPC_2: typeof Bisector_BisecPC_2;
  Bisector_BisecPC_3: typeof Bisector_BisecPC_3;
  Bisector_FunctionH: typeof Bisector_FunctionH;
  Bisector_FunctionInter_1: typeof Bisector_FunctionInter_1;
  Bisector_FunctionInter_2: typeof Bisector_FunctionInter_2;
  Bisector_Inter_1: typeof Bisector_Inter_1;
  Bisector_Inter_2: typeof Bisector_Inter_2;
  IntCurvesFace_Intersector: typeof IntCurvesFace_Intersector;
  IntCurvesFace_ShapeIntersector: typeof IntCurvesFace_ShapeIntersector;
  MAT_Bisector: typeof MAT_Bisector;
  MAT_Edge: typeof MAT_Edge;
  MAT_Graph: typeof MAT_Graph;
  MAT_ListOfBisector: typeof MAT_ListOfBisector;
  MAT_ListOfEdge: typeof MAT_ListOfEdge;
  MAT_TListNodeOfListOfBisector_1: typeof MAT_TListNodeOfListOfBisector_1;
  MAT_TListNodeOfListOfBisector_2: typeof MAT_TListNodeOfListOfBisector_2;
  MAT_TListNodeOfListOfEdge_1: typeof MAT_TListNodeOfListOfEdge_1;
  MAT_TListNodeOfListOfEdge_2: typeof MAT_TListNodeOfListOfEdge_2;
  MAT_Zone_1: typeof MAT_Zone_1;
  MAT_Zone_2: typeof MAT_Zone_2;
  MAT2d_Connexion_1: typeof MAT2d_Connexion_1;
  MAT2d_Connexion_2: typeof MAT2d_Connexion_2;
  MAT2d_Circuit: typeof MAT2d_Circuit;
  MAT2d_Mat2d: typeof MAT2d_Mat2d;
  MAT2d_MiniPath: typeof MAT2d_MiniPath;
  Handle_BRepApprox_ApproxLine_1: typeof Handle_BRepApprox_ApproxLine_1;
  Handle_BRepApprox_ApproxLine_2: typeof Handle_BRepApprox_ApproxLine_2;
  Handle_BRepApprox_ApproxLine_3: typeof Handle_BRepApprox_ApproxLine_3;
  Handle_BRepApprox_ApproxLine_4: typeof Handle_BRepApprox_ApproxLine_4;
  VectorOfPoint_1: typeof VectorOfPoint_1;
  VectorOfPoint_2: typeof VectorOfPoint_2;
  Handle_BRepBuilderAPI_FastSewing_1: typeof Handle_BRepBuilderAPI_FastSewing_1;
  Handle_BRepBuilderAPI_FastSewing_2: typeof Handle_BRepBuilderAPI_FastSewing_2;
  Handle_BRepBuilderAPI_FastSewing_3: typeof Handle_BRepBuilderAPI_FastSewing_3;
  Handle_BRepBuilderAPI_FastSewing_4: typeof Handle_BRepBuilderAPI_FastSewing_4;
  Handle_BRepBuilderAPI_Sewing_1: typeof Handle_BRepBuilderAPI_Sewing_1;
  Handle_BRepBuilderAPI_Sewing_2: typeof Handle_BRepBuilderAPI_Sewing_2;
  Handle_BRepBuilderAPI_Sewing_3: typeof Handle_BRepBuilderAPI_Sewing_3;
  Handle_BRepBuilderAPI_Sewing_4: typeof Handle_BRepBuilderAPI_Sewing_4;
  BRepCheck_ListOfStatus_1: typeof BRepCheck_ListOfStatus_1;
  BRepCheck_ListOfStatus_2: typeof BRepCheck_ListOfStatus_2;
  BRepCheck_ListOfStatus_3: typeof BRepCheck_ListOfStatus_3;
  BRepCheck_DataMapOfShapeListOfStatus_1: typeof BRepCheck_DataMapOfShapeListOfStatus_1;
  BRepCheck_DataMapOfShapeListOfStatus_2: typeof BRepCheck_DataMapOfShapeListOfStatus_2;
  BRepCheck_DataMapOfShapeListOfStatus_3: typeof BRepCheck_DataMapOfShapeListOfStatus_3;
  Handle_BRepCheck_Result_1: typeof Handle_BRepCheck_Result_1;
  Handle_BRepCheck_Result_2: typeof Handle_BRepCheck_Result_2;
  Handle_BRepCheck_Result_3: typeof Handle_BRepCheck_Result_3;
  Handle_BRepCheck_Result_4: typeof Handle_BRepCheck_Result_4;
  Handle_BRepCheck_Edge_1: typeof Handle_BRepCheck_Edge_1;
  Handle_BRepCheck_Edge_2: typeof Handle_BRepCheck_Edge_2;
  Handle_BRepCheck_Edge_3: typeof Handle_BRepCheck_Edge_3;
  Handle_BRepCheck_Edge_4: typeof Handle_BRepCheck_Edge_4;
  Handle_BRepCheck_Face_1: typeof Handle_BRepCheck_Face_1;
  Handle_BRepCheck_Face_2: typeof Handle_BRepCheck_Face_2;
  Handle_BRepCheck_Face_3: typeof Handle_BRepCheck_Face_3;
  Handle_BRepCheck_Face_4: typeof Handle_BRepCheck_Face_4;
  Handle_BRepCheck_Shell_1: typeof Handle_BRepCheck_Shell_1;
  Handle_BRepCheck_Shell_2: typeof Handle_BRepCheck_Shell_2;
  Handle_BRepCheck_Shell_3: typeof Handle_BRepCheck_Shell_3;
  Handle_BRepCheck_Shell_4: typeof Handle_BRepCheck_Shell_4;
  Handle_BRepCheck_Solid_1: typeof Handle_BRepCheck_Solid_1;
  Handle_BRepCheck_Solid_2: typeof Handle_BRepCheck_Solid_2;
  Handle_BRepCheck_Solid_3: typeof Handle_BRepCheck_Solid_3;
  Handle_BRepCheck_Solid_4: typeof Handle_BRepCheck_Solid_4;
  Handle_BRepCheck_Vertex_1: typeof Handle_BRepCheck_Vertex_1;
  Handle_BRepCheck_Vertex_2: typeof Handle_BRepCheck_Vertex_2;
  Handle_BRepCheck_Vertex_3: typeof Handle_BRepCheck_Vertex_3;
  Handle_BRepCheck_Vertex_4: typeof Handle_BRepCheck_Vertex_4;
  Handle_BRepCheck_Wire_1: typeof Handle_BRepCheck_Wire_1;
  Handle_BRepCheck_Wire_2: typeof Handle_BRepCheck_Wire_2;
  Handle_BRepCheck_Wire_3: typeof Handle_BRepCheck_Wire_3;
  Handle_BRepCheck_Wire_4: typeof Handle_BRepCheck_Wire_4;
  BRepClass3d_MapOfInter_1: typeof BRepClass3d_MapOfInter_1;
  BRepClass3d_MapOfInter_2: typeof BRepClass3d_MapOfInter_2;
  BRepClass3d_MapOfInter_3: typeof BRepClass3d_MapOfInter_3;
  BRepExtrema_SeqOfSolution_1: typeof BRepExtrema_SeqOfSolution_1;
  BRepExtrema_SeqOfSolution_2: typeof BRepExtrema_SeqOfSolution_2;
  BRepExtrema_SeqOfSolution_3: typeof BRepExtrema_SeqOfSolution_3;
  BRepExtrema_ShapeList_1: typeof BRepExtrema_ShapeList_1;
  BRepExtrema_ShapeList_2: typeof BRepExtrema_ShapeList_2;
  Handle_BRepExtrema_TriangleSet_1: typeof Handle_BRepExtrema_TriangleSet_1;
  Handle_BRepExtrema_TriangleSet_2: typeof Handle_BRepExtrema_TriangleSet_2;
  Handle_BRepExtrema_TriangleSet_3: typeof Handle_BRepExtrema_TriangleSet_3;
  Handle_BRepExtrema_TriangleSet_4: typeof Handle_BRepExtrema_TriangleSet_4;
  Handle_BRepExtrema_UnCompatibleShape_1: typeof Handle_BRepExtrema_UnCompatibleShape_1;
  Handle_BRepExtrema_UnCompatibleShape_2: typeof Handle_BRepExtrema_UnCompatibleShape_2;
  Handle_BRepExtrema_UnCompatibleShape_3: typeof Handle_BRepExtrema_UnCompatibleShape_3;
  Handle_BRepExtrema_UnCompatibleShape_4: typeof Handle_BRepExtrema_UnCompatibleShape_4;
  Handle_MAT_Arc_1: typeof Handle_MAT_Arc_1;
  Handle_MAT_Arc_2: typeof Handle_MAT_Arc_2;
  Handle_MAT_Arc_3: typeof Handle_MAT_Arc_3;
  Handle_MAT_Arc_4: typeof Handle_MAT_Arc_4;
  Handle_MAT_BasicElt_1: typeof Handle_MAT_BasicElt_1;
  Handle_MAT_BasicElt_2: typeof Handle_MAT_BasicElt_2;
  Handle_MAT_BasicElt_3: typeof Handle_MAT_BasicElt_3;
  Handle_MAT_BasicElt_4: typeof Handle_MAT_BasicElt_4;
  Handle_MAT_Node_1: typeof Handle_MAT_Node_1;
  Handle_MAT_Node_2: typeof Handle_MAT_Node_2;
  Handle_MAT_Node_3: typeof Handle_MAT_Node_3;
  Handle_MAT_Node_4: typeof Handle_MAT_Node_4;
  MAT2d_DataMapOfIntegerBisec_1: typeof MAT2d_DataMapOfIntegerBisec_1;
  MAT2d_DataMapOfIntegerBisec_2: typeof MAT2d_DataMapOfIntegerBisec_2;
  MAT2d_DataMapOfIntegerBisec_3: typeof MAT2d_DataMapOfIntegerBisec_3;
  MAT2d_DataMapOfIntegerPnt2d_1: typeof MAT2d_DataMapOfIntegerPnt2d_1;
  MAT2d_DataMapOfIntegerPnt2d_2: typeof MAT2d_DataMapOfIntegerPnt2d_2;
  MAT2d_DataMapOfIntegerPnt2d_3: typeof MAT2d_DataMapOfIntegerPnt2d_3;
  MAT2d_DataMapOfIntegerVec2d_1: typeof MAT2d_DataMapOfIntegerVec2d_1;
  MAT2d_DataMapOfIntegerVec2d_2: typeof MAT2d_DataMapOfIntegerVec2d_2;
  MAT2d_DataMapOfIntegerVec2d_3: typeof MAT2d_DataMapOfIntegerVec2d_3;
  MAT2d_DataMapOfBiIntInteger_1: typeof MAT2d_DataMapOfBiIntInteger_1;
  MAT2d_DataMapOfBiIntInteger_2: typeof MAT2d_DataMapOfBiIntInteger_2;
  MAT2d_DataMapOfBiIntInteger_3: typeof MAT2d_DataMapOfBiIntInteger_3;
  BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_1: typeof BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_1;
  BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_2: typeof BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_2;
  BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_3: typeof BRepMAT2d_DataMapOfShapeSequenceOfBasicElt_3;
  MAT2d_SequenceOfSequenceOfCurve_1: typeof MAT2d_SequenceOfSequenceOfCurve_1;
  MAT2d_SequenceOfSequenceOfCurve_2: typeof MAT2d_SequenceOfSequenceOfCurve_2;
  MAT2d_SequenceOfSequenceOfCurve_3: typeof MAT2d_SequenceOfSequenceOfCurve_3;
  BRepTopAdaptor_MapOfShapeTool_1: typeof BRepTopAdaptor_MapOfShapeTool_1;
  BRepTopAdaptor_MapOfShapeTool_2: typeof BRepTopAdaptor_MapOfShapeTool_2;
  BRepTopAdaptor_MapOfShapeTool_3: typeof BRepTopAdaptor_MapOfShapeTool_3;
  Handle_BRepTopAdaptor_HVertex_1: typeof Handle_BRepTopAdaptor_HVertex_1;
  Handle_BRepTopAdaptor_HVertex_2: typeof Handle_BRepTopAdaptor_HVertex_2;
  Handle_BRepTopAdaptor_HVertex_3: typeof Handle_BRepTopAdaptor_HVertex_3;
  Handle_BRepTopAdaptor_HVertex_4: typeof Handle_BRepTopAdaptor_HVertex_4;
  Handle_BRepTopAdaptor_TopolTool_1: typeof Handle_BRepTopAdaptor_TopolTool_1;
  Handle_BRepTopAdaptor_TopolTool_2: typeof Handle_BRepTopAdaptor_TopolTool_2;
  Handle_BRepTopAdaptor_TopolTool_3: typeof Handle_BRepTopAdaptor_TopolTool_3;
  Handle_BRepTopAdaptor_TopolTool_4: typeof Handle_BRepTopAdaptor_TopolTool_4;
  Handle_Bisector_Curve_1: typeof Handle_Bisector_Curve_1;
  Handle_Bisector_Curve_2: typeof Handle_Bisector_Curve_2;
  Handle_Bisector_Curve_3: typeof Handle_Bisector_Curve_3;
  Handle_Bisector_Curve_4: typeof Handle_Bisector_Curve_4;
  Handle_Bisector_BisecAna_1: typeof Handle_Bisector_BisecAna_1;
  Handle_Bisector_BisecAna_2: typeof Handle_Bisector_BisecAna_2;
  Handle_Bisector_BisecAna_3: typeof Handle_Bisector_BisecAna_3;
  Handle_Bisector_BisecAna_4: typeof Handle_Bisector_BisecAna_4;
  Handle_Bisector_BisecCC_1: typeof Handle_Bisector_BisecCC_1;
  Handle_Bisector_BisecCC_2: typeof Handle_Bisector_BisecCC_2;
  Handle_Bisector_BisecCC_3: typeof Handle_Bisector_BisecCC_3;
  Handle_Bisector_BisecCC_4: typeof Handle_Bisector_BisecCC_4;
  Handle_Bisector_BisecPC_1: typeof Handle_Bisector_BisecPC_1;
  Handle_Bisector_BisecPC_2: typeof Handle_Bisector_BisecPC_2;
  Handle_Bisector_BisecPC_3: typeof Handle_Bisector_BisecPC_3;
  Handle_Bisector_BisecPC_4: typeof Handle_Bisector_BisecPC_4;
  Handle_MAT_Bisector_1: typeof Handle_MAT_Bisector_1;
  Handle_MAT_Bisector_2: typeof Handle_MAT_Bisector_2;
  Handle_MAT_Bisector_3: typeof Handle_MAT_Bisector_3;
  Handle_MAT_Bisector_4: typeof Handle_MAT_Bisector_4;
  Handle_MAT_Edge_1: typeof Handle_MAT_Edge_1;
  Handle_MAT_Edge_2: typeof Handle_MAT_Edge_2;
  Handle_MAT_Edge_3: typeof Handle_MAT_Edge_3;
  Handle_MAT_Edge_4: typeof Handle_MAT_Edge_4;
  Handle_MAT_Graph_1: typeof Handle_MAT_Graph_1;
  Handle_MAT_Graph_2: typeof Handle_MAT_Graph_2;
  Handle_MAT_Graph_3: typeof Handle_MAT_Graph_3;
  Handle_MAT_Graph_4: typeof Handle_MAT_Graph_4;
  Handle_MAT_ListOfBisector_1: typeof Handle_MAT_ListOfBisector_1;
  Handle_MAT_ListOfBisector_2: typeof Handle_MAT_ListOfBisector_2;
  Handle_MAT_ListOfBisector_3: typeof Handle_MAT_ListOfBisector_3;
  Handle_MAT_ListOfBisector_4: typeof Handle_MAT_ListOfBisector_4;
  Handle_MAT_ListOfEdge_1: typeof Handle_MAT_ListOfEdge_1;
  Handle_MAT_ListOfEdge_2: typeof Handle_MAT_ListOfEdge_2;
  Handle_MAT_ListOfEdge_3: typeof Handle_MAT_ListOfEdge_3;
  Handle_MAT_ListOfEdge_4: typeof Handle_MAT_ListOfEdge_4;
  Handle_MAT_TListNodeOfListOfBisector_1: typeof Handle_MAT_TListNodeOfListOfBisector_1;
  Handle_MAT_TListNodeOfListOfBisector_2: typeof Handle_MAT_TListNodeOfListOfBisector_2;
  Handle_MAT_TListNodeOfListOfBisector_3: typeof Handle_MAT_TListNodeOfListOfBisector_3;
  Handle_MAT_TListNodeOfListOfBisector_4: typeof Handle_MAT_TListNodeOfListOfBisector_4;
  Handle_MAT_TListNodeOfListOfEdge_1: typeof Handle_MAT_TListNodeOfListOfEdge_1;
  Handle_MAT_TListNodeOfListOfEdge_2: typeof Handle_MAT_TListNodeOfListOfEdge_2;
  Handle_MAT_TListNodeOfListOfEdge_3: typeof Handle_MAT_TListNodeOfListOfEdge_3;
  Handle_MAT_TListNodeOfListOfEdge_4: typeof Handle_MAT_TListNodeOfListOfEdge_4;
  Handle_MAT_Zone_1: typeof Handle_MAT_Zone_1;
  Handle_MAT_Zone_2: typeof Handle_MAT_Zone_2;
  Handle_MAT_Zone_3: typeof Handle_MAT_Zone_3;
  Handle_MAT_Zone_4: typeof Handle_MAT_Zone_4;
  Handle_MAT2d_Connexion_1: typeof Handle_MAT2d_Connexion_1;
  Handle_MAT2d_Connexion_2: typeof Handle_MAT2d_Connexion_2;
  Handle_MAT2d_Connexion_3: typeof Handle_MAT2d_Connexion_3;
  Handle_MAT2d_Connexion_4: typeof Handle_MAT2d_Connexion_4;
  MAT2d_DataMapOfBiIntSequenceOfInteger_1: typeof MAT2d_DataMapOfBiIntSequenceOfInteger_1;
  MAT2d_DataMapOfBiIntSequenceOfInteger_2: typeof MAT2d_DataMapOfBiIntSequenceOfInteger_2;
  MAT2d_DataMapOfBiIntSequenceOfInteger_3: typeof MAT2d_DataMapOfBiIntSequenceOfInteger_3;
  MAT2d_SequenceOfSequenceOfGeometry_1: typeof MAT2d_SequenceOfSequenceOfGeometry_1;
  MAT2d_SequenceOfSequenceOfGeometry_2: typeof MAT2d_SequenceOfSequenceOfGeometry_2;
  MAT2d_SequenceOfSequenceOfGeometry_3: typeof MAT2d_SequenceOfSequenceOfGeometry_3;
  Handle_MAT2d_Circuit_1: typeof Handle_MAT2d_Circuit_1;
  Handle_MAT2d_Circuit_2: typeof Handle_MAT2d_Circuit_2;
  Handle_MAT2d_Circuit_3: typeof Handle_MAT2d_Circuit_3;
  Handle_MAT2d_Circuit_4: typeof Handle_MAT2d_Circuit_4;
  MAT2d_DataMapOfIntegerSequenceOfConnexion_1: typeof MAT2d_DataMapOfIntegerSequenceOfConnexion_1;
  MAT2d_DataMapOfIntegerSequenceOfConnexion_2: typeof MAT2d_DataMapOfIntegerSequenceOfConnexion_2;
  MAT2d_DataMapOfIntegerSequenceOfConnexion_3: typeof MAT2d_DataMapOfIntegerSequenceOfConnexion_3;
  BRepBuilderAPI_EdgeError: typeof BRepBuilderAPI_EdgeError;
  BRepBuilderAPI_FaceError: typeof BRepBuilderAPI_FaceError;
  BRepLib_EdgeError: typeof BRepLib_EdgeError;
  BRepLib_ShapeModification: typeof BRepLib_ShapeModification;
  BRepLib_FaceError: typeof BRepLib_FaceError;
  BRepLib_ShellError: typeof BRepLib_ShellError;
  BRepBuilderAPI_ShellError: typeof BRepBuilderAPI_ShellError;
  BRepLib_WireError: typeof BRepLib_WireError;
  BRepBuilderAPI_WireError: typeof BRepBuilderAPI_WireError;
  BRepBuilderAPI_PipeError: typeof BRepBuilderAPI_PipeError;
  BRepBuilderAPI_ShapeModification: typeof BRepBuilderAPI_ShapeModification;
  BRepBuilderAPI_TransitionMode: typeof BRepBuilderAPI_TransitionMode;
  BRepCheck_Status: typeof BRepCheck_Status;
  BRepExtrema_SupportType: typeof BRepExtrema_SupportType;
  MAT_Side: typeof MAT_Side;
};
