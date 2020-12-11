declare const libName = "./modules/TKG2d.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Adaptor2d_Curve2d {
  constructor();
  FirstParameter(): Quantity_AbsorbedDose;
  LastParameter(): Quantity_Acceleration;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  NbSamples(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
}

export declare class Geom2d_Geometry extends Standard_Transient {
  Mirror_1(P: gp_Pnt2d): void;
  Mirror_2(A: gp_Ax2d): void;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Translate_1(V: gp_Vec2d): void;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Transform(T: gp_Trsf2d): void;
  Mirrored_1(P: gp_Pnt2d): any;
  Mirrored_2(A: gp_Ax2d): any;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): any;
  Scaled(P: gp_Pnt2d, S: Standard_Real): any;
  Transformed(T: gp_Trsf2d): any;
  Translated_1(V: gp_Vec2d): any;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): any;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_Curve extends Geom2d_Geometry {
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Reversed(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Value(U: Standard_Real): gp_Pnt2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_BoundedCurve extends Geom2d_Curve {
  EndPoint(): gp_Pnt2d;
  StartPoint(): gp_Pnt2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_BezierCurve extends Geom2d_BoundedCurve {
  Increase(Degree: Standard_Integer): void;
  InsertPoleAfter(Index: Standard_Integer, P: gp_Pnt2d, Weight: Standard_Real): void;
  InsertPoleBefore(Index: Standard_Integer, P: gp_Pnt2d, Weight: Standard_Real): void;
  RemovePole(Index: Standard_Integer): void;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Segment(U1: Standard_Real, U2: Standard_Real): void;
  SetPole_1(Index: Standard_Integer, P: gp_Pnt2d): void;
  SetPole_2(Index: Standard_Integer, P: gp_Pnt2d, Weight: Standard_Real): void;
  SetWeight(Index: Standard_Integer, Weight: Standard_Real): void;
  IsClosed(): Standard_Boolean;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  IsRational(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Degree(): Standard_Integer;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  EndPoint(): gp_Pnt2d;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  NbPoles(): Standard_Integer;
  Pole(Index: Standard_Integer): gp_Pnt2d;
  Poles_1(P: TColgp_Array1OfPnt2d): void;
  Poles_2(): TColgp_Array1OfPnt2d;
  StartPoint(): gp_Pnt2d;
  Weight(Index: Standard_Integer): Standard_Real;
  Weights_1(W: TColStd_Array1OfReal): void;
  Weights_2(): TColStd_Array1OfReal;
  Transform(T: gp_Trsf2d): void;
  MaxDegree(): Standard_Integer;
  Resolution(ToleranceUV: Standard_Real, UTolerance: Standard_Real): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_BezierCurve_1 extends Geom2d_BezierCurve {
    constructor(CurvePoles: TColgp_Array1OfPnt2d);
  }

  export declare class Geom2d_BezierCurve_2 extends Geom2d_BezierCurve {
    constructor(CurvePoles: TColgp_Array1OfPnt2d, PoleWeights: TColStd_Array1OfReal);
  }

export declare class Geom2d_BSplineCurve extends Geom2d_BoundedCurve {
  IncreaseDegree(Degree: Standard_Integer): void;
  IncreaseMultiplicity_1(Index: Standard_Integer, M: Standard_Integer): void;
  IncreaseMultiplicity_2(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  IncrementMultiplicity(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  InsertKnot(U: Standard_Real, M: Standard_Integer, ParametricTolerance: Standard_Real): void;
  InsertKnots(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  RemoveKnot(Index: Standard_Integer, M: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  InsertPoleAfter(Index: Standard_Integer, P: gp_Pnt2d, Weight: Standard_Real): void;
  InsertPoleBefore(Index: Standard_Integer, P: gp_Pnt2d, Weight: Standard_Real): void;
  RemovePole(Index: Standard_Integer): void;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Segment(U1: Standard_Real, U2: Standard_Real, theTolerance: Standard_Real): void;
  SetKnot_1(Index: Standard_Integer, K: Standard_Real): void;
  SetKnots(K: TColStd_Array1OfReal): void;
  SetKnot_2(Index: Standard_Integer, K: Standard_Real, M: Standard_Integer): void;
  PeriodicNormalization(U: Standard_Real): void;
  SetPeriodic(): void;
  SetOrigin(Index: Standard_Integer): void;
  SetNotPeriodic(): void;
  SetPole_1(Index: Standard_Integer, P: gp_Pnt2d): void;
  SetPole_2(Index: Standard_Integer, P: gp_Pnt2d, Weight: Standard_Real): void;
  SetWeight(Index: Standard_Integer, Weight: Standard_Real): void;
  MovePoint(U: Standard_Real, P: gp_Pnt2d, Index1: Standard_Integer, Index2: Standard_Integer, FirstModifiedPole: Standard_Integer, LastModifiedPole: Standard_Integer): void;
  MovePointAndTangent(U: Standard_Real, P: gp_Pnt2d, Tangent: gp_Vec2d, Tolerance: Standard_Real, StartingCondition: Standard_Integer, EndingCondition: Standard_Integer, ErrorStatus: Standard_Integer): void;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsG1(theTf: Standard_Real, theTl: Standard_Real, theAngTol: Standard_Real): Standard_Boolean;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  IsRational(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Degree(): Standard_Integer;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  LocalValue(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer): gp_Pnt2d;
  LocalD0(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt2d): void;
  LocalD1(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt2d, V1: gp_Vec2d): void;
  LocalD2(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  LocalD3(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  LocalDN(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, N: Standard_Integer): gp_Vec2d;
  EndPoint(): gp_Pnt2d;
  FirstUKnotIndex(): Standard_Integer;
  FirstParameter(): Standard_Real;
  Knot(Index: Standard_Integer): Standard_Real;
  Knots_1(K: TColStd_Array1OfReal): void;
  Knots_2(): TColStd_Array1OfReal;
  KnotSequence_1(K: TColStd_Array1OfReal): void;
  KnotSequence_2(): TColStd_Array1OfReal;
  KnotDistribution(): GeomAbs_BSplKnotDistribution;
  LastUKnotIndex(): Standard_Integer;
  LastParameter(): Standard_Real;
  LocateU(U: Standard_Real, ParametricTolerance: Standard_Real, I1: Standard_Integer, I2: Standard_Integer, WithKnotRepetition: Standard_Boolean): void;
  Multiplicity(Index: Standard_Integer): Standard_Integer;
  Multiplicities_1(M: TColStd_Array1OfInteger): void;
  Multiplicities_2(): TColStd_Array1OfInteger;
  NbKnots(): Standard_Integer;
  NbPoles(): Standard_Integer;
  Pole(Index: Standard_Integer): gp_Pnt2d;
  Poles_1(P: TColgp_Array1OfPnt2d): void;
  Poles_2(): TColgp_Array1OfPnt2d;
  StartPoint(): gp_Pnt2d;
  Weight(Index: Standard_Integer): Standard_Real;
  Weights_1(W: TColStd_Array1OfReal): void;
  Weights_2(): TColStd_Array1OfReal;
  Transform(T: gp_Trsf2d): void;
  MaxDegree(): Standard_Integer;
  Resolution(ToleranceUV: Standard_Real, UTolerance: Standard_Real): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_BSplineCurve_1 extends Geom2d_BSplineCurve {
    constructor(Poles: TColgp_Array1OfPnt2d, Knots: TColStd_Array1OfReal, Multiplicities: TColStd_Array1OfInteger, Degree: Standard_Integer, Periodic: Standard_Boolean);
  }

  export declare class Geom2d_BSplineCurve_2 extends Geom2d_BSplineCurve {
    constructor(Poles: TColgp_Array1OfPnt2d, Weights: TColStd_Array1OfReal, Knots: TColStd_Array1OfReal, Multiplicities: TColStd_Array1OfInteger, Degree: Standard_Integer, Periodic: Standard_Boolean);
  }

export declare class Adaptor2d_HCurve2d extends Standard_Transient {
  Curve2d(): Adaptor2d_Curve2d;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Adaptor2d_Line2d extends Adaptor2d_Curve2d {
  Load_1(L: gp_Lin2d): void;
  Load_2(L: gp_Lin2d, UFirst: Standard_Real, ULast: Standard_Real): void;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(X: Standard_Real): gp_Pnt2d;
  D0(X: Standard_Real, P: gp_Pnt2d): void;
  D1(X: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(X: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(X: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
}

  export declare class Adaptor2d_Line2d_1 extends Adaptor2d_Line2d {
    constructor();
  }

  export declare class Adaptor2d_Line2d_2 extends Adaptor2d_Line2d {
    constructor(P: gp_Pnt2d, D: gp_Dir2d, UFirst: Standard_Real, ULast: Standard_Real);
  }

export declare class Adaptor2d_HLine2d extends Adaptor2d_HCurve2d {
  Set(C: Adaptor2d_Line2d): void;
  Curve2d(): Adaptor2d_Curve2d;
  ChangeCurve2d(): Adaptor2d_Line2d;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Adaptor2d_HLine2d_1 extends Adaptor2d_HLine2d {
    constructor();
  }

  export declare class Adaptor2d_HLine2d_2 extends Adaptor2d_HLine2d {
    constructor(C: Adaptor2d_Line2d);
  }

export declare class Adaptor2d_OffsetCurve extends Adaptor2d_Curve2d {
  Load_1(S: any): void;
  Load_2(Offset: Standard_Real): void;
  Load_3(Offset: Standard_Real, WFirst: Standard_Real, WLast: Standard_Real): void;
  Curve(): any;
  Offset(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  NbSamples(): Standard_Integer;
}

  export declare class Adaptor2d_OffsetCurve_1 extends Adaptor2d_OffsetCurve {
    constructor();
  }

  export declare class Adaptor2d_OffsetCurve_2 extends Adaptor2d_OffsetCurve {
    constructor(C: any);
  }

  export declare class Adaptor2d_OffsetCurve_3 extends Adaptor2d_OffsetCurve {
    constructor(C: any, Offset: Standard_Real);
  }

  export declare class Adaptor2d_OffsetCurve_4 extends Adaptor2d_OffsetCurve {
    constructor(C: any, Offset: Standard_Real, WFirst: Standard_Real, WLast: Standard_Real);
  }

export declare class Adaptor2d_HOffsetCurve extends Adaptor2d_HCurve2d {
  Set(C: Adaptor2d_OffsetCurve): void;
  Curve2d(): Adaptor2d_Curve2d;
  ChangeCurve2d(): Adaptor2d_OffsetCurve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Adaptor2d_HOffsetCurve_1 extends Adaptor2d_HOffsetCurve {
    constructor();
  }

  export declare class Adaptor2d_HOffsetCurve_2 extends Adaptor2d_HOffsetCurve {
    constructor(C: Adaptor2d_OffsetCurve);
  }

export declare class Geom2dEvaluator_Curve extends Standard_Transient {
  D0(theU: Standard_Real, theValue: gp_Pnt2d): void;
  D1(theU: Standard_Real, theValue: gp_Pnt2d, theD1: gp_Vec2d): void;
  D2(theU: Standard_Real, theValue: gp_Pnt2d, theD1: gp_Vec2d, theD2: gp_Vec2d): void;
  D3(theU: Standard_Real, theValue: gp_Pnt2d, theD1: gp_Vec2d, theD2: gp_Vec2d, theD3: gp_Vec2d): void;
  DN(theU: Standard_Real, theDerU: Standard_Integer): gp_Vec2d;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2dAdaptor_Curve extends Adaptor2d_Curve2d {
  Reset(): void;
  Load_1(C: any): void;
  Load_2(C: any, UFirst: Standard_Real, ULast: Standard_Real): void;
  Curve(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(Ruv: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  NbSamples(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
}

  export declare class Geom2dAdaptor_Curve_1 extends Geom2dAdaptor_Curve {
    constructor();
  }

  export declare class Geom2dAdaptor_Curve_2 extends Geom2dAdaptor_Curve {
    constructor(C: any);
  }

  export declare class Geom2dAdaptor_Curve_3 extends Geom2dAdaptor_Curve {
    constructor(C: any, UFirst: Standard_Real, ULast: Standard_Real);
  }

export declare class Geom2dAdaptor_GHCurve extends Adaptor2d_HCurve2d {
  Set(C: Geom2dAdaptor_Curve): void;
  Curve2d(): Adaptor2d_Curve2d;
  ChangeCurve2d(): Geom2dAdaptor_Curve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2dAdaptor_GHCurve_1 extends Geom2dAdaptor_GHCurve {
    constructor();
  }

  export declare class Geom2dAdaptor_GHCurve_2 extends Geom2dAdaptor_GHCurve {
    constructor(C: Geom2dAdaptor_Curve);
  }

export declare class Geom2dAdaptor_HCurve extends Geom2dAdaptor_GHCurve {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2dAdaptor_HCurve_1 extends Geom2dAdaptor_HCurve {
    constructor();
  }

  export declare class Geom2dAdaptor_HCurve_2 extends Geom2dAdaptor_HCurve {
    constructor(AS: Geom2dAdaptor_Curve);
  }

  export declare class Geom2dAdaptor_HCurve_3 extends Geom2dAdaptor_HCurve {
    constructor(S: any);
  }

  export declare class Geom2dAdaptor_HCurve_4 extends Geom2dAdaptor_HCurve {
    constructor(S: any, UFirst: Standard_Real, ULast: Standard_Real);
  }

export declare class Geom2d_TrimmedCurve extends Geom2d_BoundedCurve {
  constructor(C: any, U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean)
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  SetTrim(U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean): void;
  BasisCurve(): any;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EndPoint(): gp_Pnt2d;
  FirstParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  LastParameter(): Standard_Real;
  StartPoint(): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_Conic extends Geom2d_Curve {
  SetAxis(theA: gp_Ax22d): void;
  SetXAxis(theAX: gp_Ax2d): void;
  SetYAxis(theAY: gp_Ax2d): void;
  SetLocation(theP: gp_Pnt2d): void;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Location(): gp_Pnt2d;
  Position(): gp_Ax22d;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_Circle extends Geom2d_Conic {
  SetCirc2d(C: gp_Circ2d): void;
  SetRadius(R: Standard_Real): void;
  Circ2d(): gp_Circ2d;
  Radius(): Standard_Real;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Eccentricity(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_Circle_1 extends Geom2d_Circle {
    constructor(C: gp_Circ2d);
  }

  export declare class Geom2d_Circle_2 extends Geom2d_Circle {
    constructor(A: gp_Ax2d, Radius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class Geom2d_Circle_3 extends Geom2d_Circle {
    constructor(A: gp_Ax22d, Radius: Standard_Real);
  }

export declare class Geom2d_Ellipse extends Geom2d_Conic {
  SetElips2d(E: gp_Elips2d): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  Elips2d(): gp_Elips2d;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Directrix1(): gp_Ax2d;
  Directrix2(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt2d;
  Focus2(): gp_Pnt2d;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_Ellipse_1 extends Geom2d_Ellipse {
    constructor(E: gp_Elips2d);
  }

  export declare class Geom2d_Ellipse_2 extends Geom2d_Ellipse {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class Geom2d_Ellipse_3 extends Geom2d_Ellipse {
    constructor(Axis: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class Geom2d_Hyperbola extends Geom2d_Conic {
  SetHypr2d(H: gp_Hypr2d): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  Hypr2d(): gp_Hypr2d;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Asymptote1(): gp_Ax2d;
  Asymptote2(): gp_Ax2d;
  ConjugateBranch1(): gp_Hypr2d;
  ConjugateBranch2(): gp_Hypr2d;
  Directrix1(): gp_Ax2d;
  Directrix2(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt2d;
  Focus2(): gp_Pnt2d;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  OtherBranch(): gp_Hypr2d;
  Parameter(): Standard_Real;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_Hyperbola_1 extends Geom2d_Hyperbola {
    constructor(H: gp_Hypr2d);
  }

  export declare class Geom2d_Hyperbola_2 extends Geom2d_Hyperbola {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class Geom2d_Hyperbola_3 extends Geom2d_Hyperbola {
    constructor(Axis: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class Geom2d_Line extends Geom2d_Curve {
  SetLin2d(L: gp_Lin2d): void;
  SetDirection(V: gp_Dir2d): void;
  Direction(): gp_Dir2d;
  SetLocation(P: gp_Pnt2d): void;
  Location(): gp_Pnt2d;
  SetPosition(A: gp_Ax2d): void;
  Position(): gp_Ax2d;
  Lin2d(): gp_Lin2d;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Distance(P: gp_Pnt2d): Standard_Real;
  IsCN(N: Standard_Integer): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_Line_1 extends Geom2d_Line {
    constructor(A: gp_Ax2d);
  }

  export declare class Geom2d_Line_2 extends Geom2d_Line {
    constructor(L: gp_Lin2d);
  }

  export declare class Geom2d_Line_3 extends Geom2d_Line {
    constructor(P: gp_Pnt2d, V: gp_Dir2d);
  }

export declare class Geom2d_Parabola extends Geom2d_Conic {
  SetFocal(Focal: Standard_Real): void;
  SetParab2d(Prb: gp_Parab2d): void;
  Parab2d(): gp_Parab2d;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Directrix(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Focus(): gp_Pnt2d;
  Focal(): Standard_Real;
  Parameter(): Standard_Real;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_Parabola_1 extends Geom2d_Parabola {
    constructor(Prb: gp_Parab2d);
  }

  export declare class Geom2d_Parabola_2 extends Geom2d_Parabola {
    constructor(MirrorAxis: gp_Ax2d, Focal: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class Geom2d_Parabola_3 extends Geom2d_Parabola {
    constructor(Axis: gp_Ax22d, Focal: Standard_Real);
  }

  export declare class Geom2d_Parabola_4 extends Geom2d_Parabola {
    constructor(D: gp_Ax2d, F: gp_Pnt2d);
  }

export declare class Geom2d_AxisPlacement extends Geom2d_Geometry {
  Reverse(): void;
  Reversed(): any;
  SetAxis(A: gp_Ax2d): void;
  SetDirection(V: gp_Dir2d): void;
  SetLocation(P: gp_Pnt2d): void;
  Angle(Other: any): Standard_Real;
  Ax2d(): gp_Ax2d;
  Direction(): gp_Dir2d;
  Location(): gp_Pnt2d;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_AxisPlacement_1 extends Geom2d_AxisPlacement {
    constructor(A: gp_Ax2d);
  }

  export declare class Geom2d_AxisPlacement_2 extends Geom2d_AxisPlacement {
    constructor(P: gp_Pnt2d, V: gp_Dir2d);
  }

export declare class Geom2d_Point extends Geom2d_Geometry {
  Coord(X: Standard_Real, Y: Standard_Real): void;
  Pnt2d(): gp_Pnt2d;
  X(): Standard_Real;
  Y(): Standard_Real;
  Distance(Other: any): Standard_Real;
  SquareDistance(Other: any): Standard_Real;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_CartesianPoint extends Geom2d_Point {
  SetCoord(X: Standard_Real, Y: Standard_Real): void;
  SetPnt2d(P: gp_Pnt2d): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  Coord(X: Standard_Real, Y: Standard_Real): void;
  Pnt2d(): gp_Pnt2d;
  X(): Standard_Real;
  Y(): Standard_Real;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_CartesianPoint_1 extends Geom2d_CartesianPoint {
    constructor(P: gp_Pnt2d);
  }

  export declare class Geom2d_CartesianPoint_2 extends Geom2d_CartesianPoint {
    constructor(X: Standard_Real, Y: Standard_Real);
  }

export declare class Geom2d_Vector extends Geom2d_Geometry {
  Reverse(): void;
  Reversed(): any;
  Angle(Other: any): Standard_Real;
  Coord(X: Standard_Real, Y: Standard_Real): void;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  X(): Standard_Real;
  Y(): Standard_Real;
  Crossed(Other: any): Standard_Real;
  Dot(Other: any): Standard_Real;
  Vec2d(): gp_Vec2d;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_Direction extends Geom2d_Vector {
  SetCoord(X: Standard_Real, Y: Standard_Real): void;
  SetDir2d(V: gp_Dir2d): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  Dir2d(): gp_Dir2d;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Crossed(Other: any): Standard_Real;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_Direction_1 extends Geom2d_Direction {
    constructor(X: Standard_Real, Y: Standard_Real);
  }

  export declare class Geom2d_Direction_2 extends Geom2d_Direction {
    constructor(V: gp_Dir2d);
  }

export declare class Geom2dEvaluator_OffsetCurve extends Geom2dEvaluator_Curve {
  SetOffsetValue(theOffset: Standard_Real): void;
  D0(theU: Standard_Real, theValue: gp_Pnt2d): void;
  D1(theU: Standard_Real, theValue: gp_Pnt2d, theD1: gp_Vec2d): void;
  D2(theU: Standard_Real, theValue: gp_Pnt2d, theD1: gp_Vec2d, theD2: gp_Vec2d): void;
  D3(theU: Standard_Real, theValue: gp_Pnt2d, theD1: gp_Vec2d, theD2: gp_Vec2d, theD3: gp_Vec2d): void;
  DN(theU: Standard_Real, theDeriv: Standard_Integer): gp_Vec2d;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2dEvaluator_OffsetCurve_1 extends Geom2dEvaluator_OffsetCurve {
    constructor(theBase: any, theOffset: Standard_Real);
  }

  export declare class Geom2dEvaluator_OffsetCurve_2 extends Geom2dEvaluator_OffsetCurve {
    constructor(theBase: any, theOffset: Standard_Real);
  }

export declare class Geom2d_OffsetCurve extends Geom2d_Curve {
  constructor(C: any, Offset: Standard_Real, isNotCheckC0: Standard_Boolean)
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  SetBasisCurve(C: any, isNotCheckC0: Standard_Boolean): void;
  SetOffsetValue(D: Standard_Real): void;
  BasisCurve(): any;
  Continuity(): GeomAbs_Shape;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Offset(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Transform(T: gp_Trsf2d): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Copy(): any;
  GetBasisCurveContinuity(): GeomAbs_Shape;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2d_Transformation extends Standard_Transient {
  SetMirror_1(P: gp_Pnt2d): void;
  SetMirror_2(A: gp_Ax2d): void;
  SetRotation(P: gp_Pnt2d, Ang: Standard_Real): void;
  SetScale(P: gp_Pnt2d, S: Standard_Real): void;
  SetTransformation_1(FromSystem1: gp_Ax2d, ToSystem2: gp_Ax2d): void;
  SetTransformation_2(ToSystem: gp_Ax2d): void;
  SetTranslation_1(V: gp_Vec2d): void;
  SetTranslation_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  SetTrsf2d(T: gp_Trsf2d): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  Trsf2d(): gp_Trsf2d;
  Value(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): any;
  Multiplied(Other: any): any;
  Multiply(Other: any): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): any;
  PreMultiply(Other: any): void;
  Transforms(X: Standard_Real, Y: Standard_Real): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_Transformation_1 extends Geom2d_Transformation {
    constructor();
  }

  export declare class Geom2d_Transformation_2 extends Geom2d_Transformation {
    constructor(T: gp_Trsf2d);
  }

export declare class Geom2d_UndefinedDerivative extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_UndefinedDerivative_1 extends Geom2d_UndefinedDerivative {
    constructor();
  }

  export declare class Geom2d_UndefinedDerivative_2 extends Geom2d_UndefinedDerivative {
    constructor(theMessage: Standard_CString);
  }

export declare class Geom2d_UndefinedValue extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_UndefinedValue_1 extends Geom2d_UndefinedValue {
    constructor();
  }

  export declare class Geom2d_UndefinedValue_2 extends Geom2d_UndefinedValue {
    constructor(theMessage: Standard_CString);
  }

export declare class Geom2d_VectorWithMagnitude extends Geom2d_Vector {
  SetCoord(X: Standard_Real, Y: Standard_Real): void;
  SetVec2d(V: gp_Vec2d): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(Other: any): void;
  Added(Other: any): any;
  Crossed(Other: any): Standard_Real;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): any;
  Multiplied(Scalar: Standard_Real): any;
  Multiply(Scalar: Standard_Real): void;
  Normalize(): void;
  Normalized(): any;
  Subtract(Other: any): void;
  Subtracted(Other: any): any;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom2d_VectorWithMagnitude_1 extends Geom2d_VectorWithMagnitude {
    constructor(V: gp_Vec2d);
  }

  export declare class Geom2d_VectorWithMagnitude_2 extends Geom2d_VectorWithMagnitude {
    constructor(X: Standard_Real, Y: Standard_Real);
  }

  export declare class Geom2d_VectorWithMagnitude_3 extends Geom2d_VectorWithMagnitude {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

export declare class Geom2dAdaptor {
  constructor();
  MakeCurve(HC: Adaptor2d_Curve2d): any;
}

export declare class Geom2dLProp_CLProps2d {
  SetParameter(U: Standard_Real): void;
  SetCurve(C: any): void;
  Value(): gp_Pnt2d;
  D1(): gp_Vec2d;
  D2(): gp_Vec2d;
  D3(): gp_Vec2d;
  IsTangentDefined(): Standard_Boolean;
  Tangent(D: gp_Dir2d): void;
  Curvature(): Standard_Real;
  Normal(N: gp_Dir2d): void;
  CentreOfCurvature(P: gp_Pnt2d): void;
}

  export declare class Geom2dLProp_CLProps2d_1 extends Geom2dLProp_CLProps2d {
    constructor(C: any, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class Geom2dLProp_CLProps2d_2 extends Geom2dLProp_CLProps2d {
    constructor(C: any, U: Standard_Real, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class Geom2dLProp_CLProps2d_3 extends Geom2dLProp_CLProps2d {
    constructor(N: Standard_Integer, Resolution: Standard_Real);
  }

export declare class LProp_CurAndInf {
  constructor()
  AddInflection(Param: Standard_Real): void;
  AddExtCur(Param: Standard_Real, IsMin: Standard_Boolean): void;
  Clear(): void;
  IsEmpty(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Parameter(N: Standard_Integer): Standard_Real;
  Type(N: Standard_Integer): LProp_CIType;
}

export declare class Geom2dLProp_CurAndInf2d extends LProp_CurAndInf {
  constructor()
  Perform(C: any): void;
  PerformCurExt(C: any): void;
  PerformInf(C: any): void;
  IsDone(): Standard_Boolean;
}

export declare class Geom2dLProp_Curve2dTool {
  constructor();
  Value(C: any, U: Standard_Real, P: gp_Pnt2d): void;
  D1(C: any, U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(C: any, U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(C: any, U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  Continuity(C: any): Standard_Integer;
  FirstParameter(C: any): Standard_Real;
  LastParameter(C: any): Standard_Real;
}

export declare class Geom2dLProp_FuncCurExt extends math_FunctionWithDerivative {
  constructor(C: any, Tol: Standard_Real)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
  IsMinKC(Param: Standard_Real): Standard_Boolean;
}

export declare class Geom2dLProp_FuncCurNul extends math_FunctionWithDerivative {
  constructor(C: any)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class Geom2dLProp_NumericCurInf2d {
  constructor()
  PerformCurExt_1(C: any, Result: LProp_CurAndInf): void;
  PerformInf_1(C: any, Result: LProp_CurAndInf): void;
  PerformCurExt_2(C: any, UMin: Standard_Real, UMax: Standard_Real, Result: LProp_CurAndInf): void;
  PerformInf_2(C: any, UMin: Standard_Real, UMax: Standard_Real, Result: LProp_CurAndInf): void;
  IsDone(): Standard_Boolean;
}

export declare class LProp_AnalyticCurInf {
  constructor()
  Perform(T: GeomAbs_CurveType, UFirst: Standard_Real, ULast: Standard_Real, Result: LProp_CurAndInf): void;
}

export declare class LProp_BadContinuity extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class LProp_BadContinuity_1 extends LProp_BadContinuity {
    constructor();
  }

  export declare class LProp_BadContinuity_2 extends LProp_BadContinuity {
    constructor(theMessage: Standard_CString);
  }

export declare class LProp_NotDefined extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class LProp_NotDefined_1 extends LProp_NotDefined {
    constructor();
  }

  export declare class LProp_NotDefined_2 extends LProp_NotDefined {
    constructor(theMessage: Standard_CString);
  }

export declare class Handle_Geom2d_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Geometry): void;
  get(): Geom2d_Geometry;
}

  export declare class Handle_Geom2d_Geometry_1 extends Handle_Geom2d_Geometry {
    constructor();
  }

  export declare class Handle_Geom2d_Geometry_2 extends Handle_Geom2d_Geometry {
    constructor(thePtr: Geom2d_Geometry);
  }

  export declare class Handle_Geom2d_Geometry_3 extends Handle_Geom2d_Geometry {
    constructor(theHandle: Handle_Geom2d_Geometry);
  }

  export declare class Handle_Geom2d_Geometry_4 extends Handle_Geom2d_Geometry {
    constructor(theHandle: Handle_Geom2d_Geometry);
  }

export declare class Handle_Geom2d_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Curve): void;
  get(): Geom2d_Curve;
}

  export declare class Handle_Geom2d_Curve_1 extends Handle_Geom2d_Curve {
    constructor();
  }

  export declare class Handle_Geom2d_Curve_2 extends Handle_Geom2d_Curve {
    constructor(thePtr: Geom2d_Curve);
  }

  export declare class Handle_Geom2d_Curve_3 extends Handle_Geom2d_Curve {
    constructor(theHandle: Handle_Geom2d_Curve);
  }

  export declare class Handle_Geom2d_Curve_4 extends Handle_Geom2d_Curve {
    constructor(theHandle: Handle_Geom2d_Curve);
  }

export declare class Handle_Geom2d_BoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_BoundedCurve): void;
  get(): Geom2d_BoundedCurve;
}

  export declare class Handle_Geom2d_BoundedCurve_1 extends Handle_Geom2d_BoundedCurve {
    constructor();
  }

  export declare class Handle_Geom2d_BoundedCurve_2 extends Handle_Geom2d_BoundedCurve {
    constructor(thePtr: Geom2d_BoundedCurve);
  }

  export declare class Handle_Geom2d_BoundedCurve_3 extends Handle_Geom2d_BoundedCurve {
    constructor(theHandle: Handle_Geom2d_BoundedCurve);
  }

  export declare class Handle_Geom2d_BoundedCurve_4 extends Handle_Geom2d_BoundedCurve {
    constructor(theHandle: Handle_Geom2d_BoundedCurve);
  }

export declare class Handle_Geom2d_BezierCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_BezierCurve): void;
  get(): Geom2d_BezierCurve;
}

  export declare class Handle_Geom2d_BezierCurve_1 extends Handle_Geom2d_BezierCurve {
    constructor();
  }

  export declare class Handle_Geom2d_BezierCurve_2 extends Handle_Geom2d_BezierCurve {
    constructor(thePtr: Geom2d_BezierCurve);
  }

  export declare class Handle_Geom2d_BezierCurve_3 extends Handle_Geom2d_BezierCurve {
    constructor(theHandle: Handle_Geom2d_BezierCurve);
  }

  export declare class Handle_Geom2d_BezierCurve_4 extends Handle_Geom2d_BezierCurve {
    constructor(theHandle: Handle_Geom2d_BezierCurve);
  }

export declare class Handle_Geom2d_BSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_BSplineCurve): void;
  get(): Geom2d_BSplineCurve;
}

  export declare class Handle_Geom2d_BSplineCurve_1 extends Handle_Geom2d_BSplineCurve {
    constructor();
  }

  export declare class Handle_Geom2d_BSplineCurve_2 extends Handle_Geom2d_BSplineCurve {
    constructor(thePtr: Geom2d_BSplineCurve);
  }

  export declare class Handle_Geom2d_BSplineCurve_3 extends Handle_Geom2d_BSplineCurve {
    constructor(theHandle: Handle_Geom2d_BSplineCurve);
  }

  export declare class Handle_Geom2d_BSplineCurve_4 extends Handle_Geom2d_BSplineCurve {
    constructor(theHandle: Handle_Geom2d_BSplineCurve);
  }

export declare class Handle_Adaptor2d_HCurve2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor2d_HCurve2d): void;
  get(): Adaptor2d_HCurve2d;
}

  export declare class Handle_Adaptor2d_HCurve2d_1 extends Handle_Adaptor2d_HCurve2d {
    constructor();
  }

  export declare class Handle_Adaptor2d_HCurve2d_2 extends Handle_Adaptor2d_HCurve2d {
    constructor(thePtr: Adaptor2d_HCurve2d);
  }

  export declare class Handle_Adaptor2d_HCurve2d_3 extends Handle_Adaptor2d_HCurve2d {
    constructor(theHandle: Handle_Adaptor2d_HCurve2d);
  }

  export declare class Handle_Adaptor2d_HCurve2d_4 extends Handle_Adaptor2d_HCurve2d {
    constructor(theHandle: Handle_Adaptor2d_HCurve2d);
  }

export declare class Handle_Adaptor2d_HLine2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor2d_HLine2d): void;
  get(): Adaptor2d_HLine2d;
}

  export declare class Handle_Adaptor2d_HLine2d_1 extends Handle_Adaptor2d_HLine2d {
    constructor();
  }

  export declare class Handle_Adaptor2d_HLine2d_2 extends Handle_Adaptor2d_HLine2d {
    constructor(thePtr: Adaptor2d_HLine2d);
  }

  export declare class Handle_Adaptor2d_HLine2d_3 extends Handle_Adaptor2d_HLine2d {
    constructor(theHandle: Handle_Adaptor2d_HLine2d);
  }

  export declare class Handle_Adaptor2d_HLine2d_4 extends Handle_Adaptor2d_HLine2d {
    constructor(theHandle: Handle_Adaptor2d_HLine2d);
  }

export declare class Handle_Adaptor2d_HOffsetCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor2d_HOffsetCurve): void;
  get(): Adaptor2d_HOffsetCurve;
}

  export declare class Handle_Adaptor2d_HOffsetCurve_1 extends Handle_Adaptor2d_HOffsetCurve {
    constructor();
  }

  export declare class Handle_Adaptor2d_HOffsetCurve_2 extends Handle_Adaptor2d_HOffsetCurve {
    constructor(thePtr: Adaptor2d_HOffsetCurve);
  }

  export declare class Handle_Adaptor2d_HOffsetCurve_3 extends Handle_Adaptor2d_HOffsetCurve {
    constructor(theHandle: Handle_Adaptor2d_HOffsetCurve);
  }

  export declare class Handle_Adaptor2d_HOffsetCurve_4 extends Handle_Adaptor2d_HOffsetCurve {
    constructor(theHandle: Handle_Adaptor2d_HOffsetCurve);
  }

export declare class Handle_Geom2dEvaluator_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2dEvaluator_Curve): void;
  get(): Geom2dEvaluator_Curve;
}

  export declare class Handle_Geom2dEvaluator_Curve_1 extends Handle_Geom2dEvaluator_Curve {
    constructor();
  }

  export declare class Handle_Geom2dEvaluator_Curve_2 extends Handle_Geom2dEvaluator_Curve {
    constructor(thePtr: Geom2dEvaluator_Curve);
  }

  export declare class Handle_Geom2dEvaluator_Curve_3 extends Handle_Geom2dEvaluator_Curve {
    constructor(theHandle: Handle_Geom2dEvaluator_Curve);
  }

  export declare class Handle_Geom2dEvaluator_Curve_4 extends Handle_Geom2dEvaluator_Curve {
    constructor(theHandle: Handle_Geom2dEvaluator_Curve);
  }

export declare class Handle_TColGeom2d_HArray1OfCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom2d_HArray1OfCurve): void;
  get(): TColGeom2d_HArray1OfCurve;
}

  export declare class Handle_TColGeom2d_HArray1OfCurve_1 extends Handle_TColGeom2d_HArray1OfCurve {
    constructor();
  }

  export declare class Handle_TColGeom2d_HArray1OfCurve_2 extends Handle_TColGeom2d_HArray1OfCurve {
    constructor(thePtr: TColGeom2d_HArray1OfCurve);
  }

  export declare class Handle_TColGeom2d_HArray1OfCurve_3 extends Handle_TColGeom2d_HArray1OfCurve {
    constructor(theHandle: Handle_TColGeom2d_HArray1OfCurve);
  }

  export declare class Handle_TColGeom2d_HArray1OfCurve_4 extends Handle_TColGeom2d_HArray1OfCurve {
    constructor(theHandle: Handle_TColGeom2d_HArray1OfCurve);
  }

export declare class Handle_Geom2dAdaptor_GHCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2dAdaptor_GHCurve): void;
  get(): Geom2dAdaptor_GHCurve;
}

  export declare class Handle_Geom2dAdaptor_GHCurve_1 extends Handle_Geom2dAdaptor_GHCurve {
    constructor();
  }

  export declare class Handle_Geom2dAdaptor_GHCurve_2 extends Handle_Geom2dAdaptor_GHCurve {
    constructor(thePtr: Geom2dAdaptor_GHCurve);
  }

  export declare class Handle_Geom2dAdaptor_GHCurve_3 extends Handle_Geom2dAdaptor_GHCurve {
    constructor(theHandle: Handle_Geom2dAdaptor_GHCurve);
  }

  export declare class Handle_Geom2dAdaptor_GHCurve_4 extends Handle_Geom2dAdaptor_GHCurve {
    constructor(theHandle: Handle_Geom2dAdaptor_GHCurve);
  }

export declare class Handle_Geom2dAdaptor_HCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2dAdaptor_HCurve): void;
  get(): Geom2dAdaptor_HCurve;
}

  export declare class Handle_Geom2dAdaptor_HCurve_1 extends Handle_Geom2dAdaptor_HCurve {
    constructor();
  }

  export declare class Handle_Geom2dAdaptor_HCurve_2 extends Handle_Geom2dAdaptor_HCurve {
    constructor(thePtr: Geom2dAdaptor_HCurve);
  }

  export declare class Handle_Geom2dAdaptor_HCurve_3 extends Handle_Geom2dAdaptor_HCurve {
    constructor(theHandle: Handle_Geom2dAdaptor_HCurve);
  }

  export declare class Handle_Geom2dAdaptor_HCurve_4 extends Handle_Geom2dAdaptor_HCurve {
    constructor(theHandle: Handle_Geom2dAdaptor_HCurve);
  }

export declare class Handle_Geom2d_TrimmedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_TrimmedCurve): void;
  get(): Geom2d_TrimmedCurve;
}

  export declare class Handle_Geom2d_TrimmedCurve_1 extends Handle_Geom2d_TrimmedCurve {
    constructor();
  }

  export declare class Handle_Geom2d_TrimmedCurve_2 extends Handle_Geom2d_TrimmedCurve {
    constructor(thePtr: Geom2d_TrimmedCurve);
  }

  export declare class Handle_Geom2d_TrimmedCurve_3 extends Handle_Geom2d_TrimmedCurve {
    constructor(theHandle: Handle_Geom2d_TrimmedCurve);
  }

  export declare class Handle_Geom2d_TrimmedCurve_4 extends Handle_Geom2d_TrimmedCurve {
    constructor(theHandle: Handle_Geom2d_TrimmedCurve);
  }

export declare class Handle_Geom2d_Conic {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Conic): void;
  get(): Geom2d_Conic;
}

  export declare class Handle_Geom2d_Conic_1 extends Handle_Geom2d_Conic {
    constructor();
  }

  export declare class Handle_Geom2d_Conic_2 extends Handle_Geom2d_Conic {
    constructor(thePtr: Geom2d_Conic);
  }

  export declare class Handle_Geom2d_Conic_3 extends Handle_Geom2d_Conic {
    constructor(theHandle: Handle_Geom2d_Conic);
  }

  export declare class Handle_Geom2d_Conic_4 extends Handle_Geom2d_Conic {
    constructor(theHandle: Handle_Geom2d_Conic);
  }

export declare class Handle_Geom2d_Circle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Circle): void;
  get(): Geom2d_Circle;
}

  export declare class Handle_Geom2d_Circle_1 extends Handle_Geom2d_Circle {
    constructor();
  }

  export declare class Handle_Geom2d_Circle_2 extends Handle_Geom2d_Circle {
    constructor(thePtr: Geom2d_Circle);
  }

  export declare class Handle_Geom2d_Circle_3 extends Handle_Geom2d_Circle {
    constructor(theHandle: Handle_Geom2d_Circle);
  }

  export declare class Handle_Geom2d_Circle_4 extends Handle_Geom2d_Circle {
    constructor(theHandle: Handle_Geom2d_Circle);
  }

export declare class Handle_Geom2d_Ellipse {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Ellipse): void;
  get(): Geom2d_Ellipse;
}

  export declare class Handle_Geom2d_Ellipse_1 extends Handle_Geom2d_Ellipse {
    constructor();
  }

  export declare class Handle_Geom2d_Ellipse_2 extends Handle_Geom2d_Ellipse {
    constructor(thePtr: Geom2d_Ellipse);
  }

  export declare class Handle_Geom2d_Ellipse_3 extends Handle_Geom2d_Ellipse {
    constructor(theHandle: Handle_Geom2d_Ellipse);
  }

  export declare class Handle_Geom2d_Ellipse_4 extends Handle_Geom2d_Ellipse {
    constructor(theHandle: Handle_Geom2d_Ellipse);
  }

export declare class Handle_Geom2d_Hyperbola {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Hyperbola): void;
  get(): Geom2d_Hyperbola;
}

  export declare class Handle_Geom2d_Hyperbola_1 extends Handle_Geom2d_Hyperbola {
    constructor();
  }

  export declare class Handle_Geom2d_Hyperbola_2 extends Handle_Geom2d_Hyperbola {
    constructor(thePtr: Geom2d_Hyperbola);
  }

  export declare class Handle_Geom2d_Hyperbola_3 extends Handle_Geom2d_Hyperbola {
    constructor(theHandle: Handle_Geom2d_Hyperbola);
  }

  export declare class Handle_Geom2d_Hyperbola_4 extends Handle_Geom2d_Hyperbola {
    constructor(theHandle: Handle_Geom2d_Hyperbola);
  }

export declare class Handle_Geom2d_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Line): void;
  get(): Geom2d_Line;
}

  export declare class Handle_Geom2d_Line_1 extends Handle_Geom2d_Line {
    constructor();
  }

  export declare class Handle_Geom2d_Line_2 extends Handle_Geom2d_Line {
    constructor(thePtr: Geom2d_Line);
  }

  export declare class Handle_Geom2d_Line_3 extends Handle_Geom2d_Line {
    constructor(theHandle: Handle_Geom2d_Line);
  }

  export declare class Handle_Geom2d_Line_4 extends Handle_Geom2d_Line {
    constructor(theHandle: Handle_Geom2d_Line);
  }

export declare class Handle_Geom2d_Parabola {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Parabola): void;
  get(): Geom2d_Parabola;
}

  export declare class Handle_Geom2d_Parabola_1 extends Handle_Geom2d_Parabola {
    constructor();
  }

  export declare class Handle_Geom2d_Parabola_2 extends Handle_Geom2d_Parabola {
    constructor(thePtr: Geom2d_Parabola);
  }

  export declare class Handle_Geom2d_Parabola_3 extends Handle_Geom2d_Parabola {
    constructor(theHandle: Handle_Geom2d_Parabola);
  }

  export declare class Handle_Geom2d_Parabola_4 extends Handle_Geom2d_Parabola {
    constructor(theHandle: Handle_Geom2d_Parabola);
  }

export declare class Handle_Geom2d_AxisPlacement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_AxisPlacement): void;
  get(): Geom2d_AxisPlacement;
}

  export declare class Handle_Geom2d_AxisPlacement_1 extends Handle_Geom2d_AxisPlacement {
    constructor();
  }

  export declare class Handle_Geom2d_AxisPlacement_2 extends Handle_Geom2d_AxisPlacement {
    constructor(thePtr: Geom2d_AxisPlacement);
  }

  export declare class Handle_Geom2d_AxisPlacement_3 extends Handle_Geom2d_AxisPlacement {
    constructor(theHandle: Handle_Geom2d_AxisPlacement);
  }

  export declare class Handle_Geom2d_AxisPlacement_4 extends Handle_Geom2d_AxisPlacement {
    constructor(theHandle: Handle_Geom2d_AxisPlacement);
  }

export declare class Handle_Geom2d_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Point): void;
  get(): Geom2d_Point;
}

  export declare class Handle_Geom2d_Point_1 extends Handle_Geom2d_Point {
    constructor();
  }

  export declare class Handle_Geom2d_Point_2 extends Handle_Geom2d_Point {
    constructor(thePtr: Geom2d_Point);
  }

  export declare class Handle_Geom2d_Point_3 extends Handle_Geom2d_Point {
    constructor(theHandle: Handle_Geom2d_Point);
  }

  export declare class Handle_Geom2d_Point_4 extends Handle_Geom2d_Point {
    constructor(theHandle: Handle_Geom2d_Point);
  }

export declare class Handle_Geom2d_CartesianPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_CartesianPoint): void;
  get(): Geom2d_CartesianPoint;
}

  export declare class Handle_Geom2d_CartesianPoint_1 extends Handle_Geom2d_CartesianPoint {
    constructor();
  }

  export declare class Handle_Geom2d_CartesianPoint_2 extends Handle_Geom2d_CartesianPoint {
    constructor(thePtr: Geom2d_CartesianPoint);
  }

  export declare class Handle_Geom2d_CartesianPoint_3 extends Handle_Geom2d_CartesianPoint {
    constructor(theHandle: Handle_Geom2d_CartesianPoint);
  }

  export declare class Handle_Geom2d_CartesianPoint_4 extends Handle_Geom2d_CartesianPoint {
    constructor(theHandle: Handle_Geom2d_CartesianPoint);
  }

export declare class Handle_Geom2d_Vector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Vector): void;
  get(): Geom2d_Vector;
}

  export declare class Handle_Geom2d_Vector_1 extends Handle_Geom2d_Vector {
    constructor();
  }

  export declare class Handle_Geom2d_Vector_2 extends Handle_Geom2d_Vector {
    constructor(thePtr: Geom2d_Vector);
  }

  export declare class Handle_Geom2d_Vector_3 extends Handle_Geom2d_Vector {
    constructor(theHandle: Handle_Geom2d_Vector);
  }

  export declare class Handle_Geom2d_Vector_4 extends Handle_Geom2d_Vector {
    constructor(theHandle: Handle_Geom2d_Vector);
  }

export declare class Handle_Geom2d_Direction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Direction): void;
  get(): Geom2d_Direction;
}

  export declare class Handle_Geom2d_Direction_1 extends Handle_Geom2d_Direction {
    constructor();
  }

  export declare class Handle_Geom2d_Direction_2 extends Handle_Geom2d_Direction {
    constructor(thePtr: Geom2d_Direction);
  }

  export declare class Handle_Geom2d_Direction_3 extends Handle_Geom2d_Direction {
    constructor(theHandle: Handle_Geom2d_Direction);
  }

  export declare class Handle_Geom2d_Direction_4 extends Handle_Geom2d_Direction {
    constructor(theHandle: Handle_Geom2d_Direction);
  }

export declare class Handle_Geom2dEvaluator_OffsetCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2dEvaluator_OffsetCurve): void;
  get(): Geom2dEvaluator_OffsetCurve;
}

  export declare class Handle_Geom2dEvaluator_OffsetCurve_1 extends Handle_Geom2dEvaluator_OffsetCurve {
    constructor();
  }

  export declare class Handle_Geom2dEvaluator_OffsetCurve_2 extends Handle_Geom2dEvaluator_OffsetCurve {
    constructor(thePtr: Geom2dEvaluator_OffsetCurve);
  }

  export declare class Handle_Geom2dEvaluator_OffsetCurve_3 extends Handle_Geom2dEvaluator_OffsetCurve {
    constructor(theHandle: Handle_Geom2dEvaluator_OffsetCurve);
  }

  export declare class Handle_Geom2dEvaluator_OffsetCurve_4 extends Handle_Geom2dEvaluator_OffsetCurve {
    constructor(theHandle: Handle_Geom2dEvaluator_OffsetCurve);
  }

export declare class Handle_Geom2d_OffsetCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_OffsetCurve): void;
  get(): Geom2d_OffsetCurve;
}

  export declare class Handle_Geom2d_OffsetCurve_1 extends Handle_Geom2d_OffsetCurve {
    constructor();
  }

  export declare class Handle_Geom2d_OffsetCurve_2 extends Handle_Geom2d_OffsetCurve {
    constructor(thePtr: Geom2d_OffsetCurve);
  }

  export declare class Handle_Geom2d_OffsetCurve_3 extends Handle_Geom2d_OffsetCurve {
    constructor(theHandle: Handle_Geom2d_OffsetCurve);
  }

  export declare class Handle_Geom2d_OffsetCurve_4 extends Handle_Geom2d_OffsetCurve {
    constructor(theHandle: Handle_Geom2d_OffsetCurve);
  }

export declare class Handle_Geom2d_Transformation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Transformation): void;
  get(): Geom2d_Transformation;
}

  export declare class Handle_Geom2d_Transformation_1 extends Handle_Geom2d_Transformation {
    constructor();
  }

  export declare class Handle_Geom2d_Transformation_2 extends Handle_Geom2d_Transformation {
    constructor(thePtr: Geom2d_Transformation);
  }

  export declare class Handle_Geom2d_Transformation_3 extends Handle_Geom2d_Transformation {
    constructor(theHandle: Handle_Geom2d_Transformation);
  }

  export declare class Handle_Geom2d_Transformation_4 extends Handle_Geom2d_Transformation {
    constructor(theHandle: Handle_Geom2d_Transformation);
  }

export declare class Handle_Geom2d_UndefinedDerivative {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_UndefinedDerivative): void;
  get(): Geom2d_UndefinedDerivative;
}

  export declare class Handle_Geom2d_UndefinedDerivative_1 extends Handle_Geom2d_UndefinedDerivative {
    constructor();
  }

  export declare class Handle_Geom2d_UndefinedDerivative_2 extends Handle_Geom2d_UndefinedDerivative {
    constructor(thePtr: Geom2d_UndefinedDerivative);
  }

  export declare class Handle_Geom2d_UndefinedDerivative_3 extends Handle_Geom2d_UndefinedDerivative {
    constructor(theHandle: Handle_Geom2d_UndefinedDerivative);
  }

  export declare class Handle_Geom2d_UndefinedDerivative_4 extends Handle_Geom2d_UndefinedDerivative {
    constructor(theHandle: Handle_Geom2d_UndefinedDerivative);
  }

export declare class Handle_Geom2d_UndefinedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_UndefinedValue): void;
  get(): Geom2d_UndefinedValue;
}

  export declare class Handle_Geom2d_UndefinedValue_1 extends Handle_Geom2d_UndefinedValue {
    constructor();
  }

  export declare class Handle_Geom2d_UndefinedValue_2 extends Handle_Geom2d_UndefinedValue {
    constructor(thePtr: Geom2d_UndefinedValue);
  }

  export declare class Handle_Geom2d_UndefinedValue_3 extends Handle_Geom2d_UndefinedValue {
    constructor(theHandle: Handle_Geom2d_UndefinedValue);
  }

  export declare class Handle_Geom2d_UndefinedValue_4 extends Handle_Geom2d_UndefinedValue {
    constructor(theHandle: Handle_Geom2d_UndefinedValue);
  }

export declare class Handle_Geom2d_VectorWithMagnitude {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_VectorWithMagnitude): void;
  get(): Geom2d_VectorWithMagnitude;
}

  export declare class Handle_Geom2d_VectorWithMagnitude_1 extends Handle_Geom2d_VectorWithMagnitude {
    constructor();
  }

  export declare class Handle_Geom2d_VectorWithMagnitude_2 extends Handle_Geom2d_VectorWithMagnitude {
    constructor(thePtr: Geom2d_VectorWithMagnitude);
  }

  export declare class Handle_Geom2d_VectorWithMagnitude_3 extends Handle_Geom2d_VectorWithMagnitude {
    constructor(theHandle: Handle_Geom2d_VectorWithMagnitude);
  }

  export declare class Handle_Geom2d_VectorWithMagnitude_4 extends Handle_Geom2d_VectorWithMagnitude {
    constructor(theHandle: Handle_Geom2d_VectorWithMagnitude);
  }

export declare class Handle_TColGeom2d_HArray1OfBSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom2d_HArray1OfBSplineCurve): void;
  get(): TColGeom2d_HArray1OfBSplineCurve;
}

  export declare class Handle_TColGeom2d_HArray1OfBSplineCurve_1 extends Handle_TColGeom2d_HArray1OfBSplineCurve {
    constructor();
  }

  export declare class Handle_TColGeom2d_HArray1OfBSplineCurve_2 extends Handle_TColGeom2d_HArray1OfBSplineCurve {
    constructor(thePtr: TColGeom2d_HArray1OfBSplineCurve);
  }

  export declare class Handle_TColGeom2d_HArray1OfBSplineCurve_3 extends Handle_TColGeom2d_HArray1OfBSplineCurve {
    constructor(theHandle: Handle_TColGeom2d_HArray1OfBSplineCurve);
  }

  export declare class Handle_TColGeom2d_HArray1OfBSplineCurve_4 extends Handle_TColGeom2d_HArray1OfBSplineCurve {
    constructor(theHandle: Handle_TColGeom2d_HArray1OfBSplineCurve);
  }

export declare class LProp_SequenceOfCIType extends NCollection_BaseSequence {
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
  Assign(theOther: LProp_SequenceOfCIType): LProp_SequenceOfCIType;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: LProp_CIType): void;
  Append_2(theSeq: LProp_SequenceOfCIType): void;
  Prepend_1(theItem: LProp_CIType): void;
  Prepend_2(theSeq: LProp_SequenceOfCIType): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: LProp_CIType): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: LProp_SequenceOfCIType): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: LProp_SequenceOfCIType): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: LProp_CIType): void;
  Split(theIndex: Standard_Integer, theSeq: LProp_SequenceOfCIType): void;
  First(): LProp_CIType;
  ChangeFirst(): LProp_CIType;
  Last(): LProp_CIType;
  ChangeLast(): LProp_CIType;
  Value(theIndex: Standard_Integer): LProp_CIType;
  ChangeValue(theIndex: Standard_Integer): LProp_CIType;
  SetValue(theIndex: Standard_Integer, theItem: LProp_CIType): void;
}

  export declare class LProp_SequenceOfCIType_1 extends LProp_SequenceOfCIType {
    constructor();
  }

  export declare class LProp_SequenceOfCIType_2 extends LProp_SequenceOfCIType {
    constructor(theAllocator: any);
  }

  export declare class LProp_SequenceOfCIType_3 extends LProp_SequenceOfCIType {
    constructor(theOther: LProp_SequenceOfCIType);
  }

export declare class Handle_LProp_BadContinuity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: LProp_BadContinuity): void;
  get(): LProp_BadContinuity;
}

  export declare class Handle_LProp_BadContinuity_1 extends Handle_LProp_BadContinuity {
    constructor();
  }

  export declare class Handle_LProp_BadContinuity_2 extends Handle_LProp_BadContinuity {
    constructor(thePtr: LProp_BadContinuity);
  }

  export declare class Handle_LProp_BadContinuity_3 extends Handle_LProp_BadContinuity {
    constructor(theHandle: Handle_LProp_BadContinuity);
  }

  export declare class Handle_LProp_BadContinuity_4 extends Handle_LProp_BadContinuity {
    constructor(theHandle: Handle_LProp_BadContinuity);
  }

export declare class Handle_LProp_NotDefined {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: LProp_NotDefined): void;
  get(): LProp_NotDefined;
}

  export declare class Handle_LProp_NotDefined_1 extends Handle_LProp_NotDefined {
    constructor();
  }

  export declare class Handle_LProp_NotDefined_2 extends Handle_LProp_NotDefined {
    constructor(thePtr: LProp_NotDefined);
  }

  export declare class Handle_LProp_NotDefined_3 extends Handle_LProp_NotDefined {
    constructor(theHandle: Handle_LProp_NotDefined);
  }

  export declare class Handle_LProp_NotDefined_4 extends Handle_LProp_NotDefined {
    constructor(theHandle: Handle_LProp_NotDefined);
  }

export declare class Handle_TColGeom2d_HSequenceOfBoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom2d_HSequenceOfBoundedCurve): void;
  get(): TColGeom2d_HSequenceOfBoundedCurve;
}

  export declare class Handle_TColGeom2d_HSequenceOfBoundedCurve_1 extends Handle_TColGeom2d_HSequenceOfBoundedCurve {
    constructor();
  }

  export declare class Handle_TColGeom2d_HSequenceOfBoundedCurve_2 extends Handle_TColGeom2d_HSequenceOfBoundedCurve {
    constructor(thePtr: TColGeom2d_HSequenceOfBoundedCurve);
  }

  export declare class Handle_TColGeom2d_HSequenceOfBoundedCurve_3 extends Handle_TColGeom2d_HSequenceOfBoundedCurve {
    constructor(theHandle: Handle_TColGeom2d_HSequenceOfBoundedCurve);
  }

  export declare class Handle_TColGeom2d_HSequenceOfBoundedCurve_4 extends Handle_TColGeom2d_HSequenceOfBoundedCurve {
    constructor(theHandle: Handle_TColGeom2d_HSequenceOfBoundedCurve);
  }

export declare class Handle_TColGeom2d_HSequenceOfCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom2d_HSequenceOfCurve): void;
  get(): TColGeom2d_HSequenceOfCurve;
}

  export declare class Handle_TColGeom2d_HSequenceOfCurve_1 extends Handle_TColGeom2d_HSequenceOfCurve {
    constructor();
  }

  export declare class Handle_TColGeom2d_HSequenceOfCurve_2 extends Handle_TColGeom2d_HSequenceOfCurve {
    constructor(thePtr: TColGeom2d_HSequenceOfCurve);
  }

  export declare class Handle_TColGeom2d_HSequenceOfCurve_3 extends Handle_TColGeom2d_HSequenceOfCurve {
    constructor(theHandle: Handle_TColGeom2d_HSequenceOfCurve);
  }

  export declare class Handle_TColGeom2d_HSequenceOfCurve_4 extends Handle_TColGeom2d_HSequenceOfCurve {
    constructor(theHandle: Handle_TColGeom2d_HSequenceOfCurve);
  }

export declare class Handle_TColGeom2d_HArray1OfBezierCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom2d_HArray1OfBezierCurve): void;
  get(): TColGeom2d_HArray1OfBezierCurve;
}

  export declare class Handle_TColGeom2d_HArray1OfBezierCurve_1 extends Handle_TColGeom2d_HArray1OfBezierCurve {
    constructor();
  }

  export declare class Handle_TColGeom2d_HArray1OfBezierCurve_2 extends Handle_TColGeom2d_HArray1OfBezierCurve {
    constructor(thePtr: TColGeom2d_HArray1OfBezierCurve);
  }

  export declare class Handle_TColGeom2d_HArray1OfBezierCurve_3 extends Handle_TColGeom2d_HArray1OfBezierCurve {
    constructor(theHandle: Handle_TColGeom2d_HArray1OfBezierCurve);
  }

  export declare class Handle_TColGeom2d_HArray1OfBezierCurve_4 extends Handle_TColGeom2d_HArray1OfBezierCurve {
    constructor(theHandle: Handle_TColGeom2d_HArray1OfBezierCurve);
  }

export declare type LProp_Status = {
  LProp_Undecided: {};
  LProp_Undefined: {};
  LProp_Defined: {};
  LProp_Computed: {};
}

export declare type LProp_CIType = {
  LProp_Inflection: {};
  LProp_MinCur: {};
  LProp_MaxCur: {};
}

export declare type TKG2dLib = {
  Geom2d_BezierCurve_1: typeof Geom2d_BezierCurve_1;
  Geom2d_BezierCurve_2: typeof Geom2d_BezierCurve_2;
  Geom2d_BSplineCurve_1: typeof Geom2d_BSplineCurve_1;
  Geom2d_BSplineCurve_2: typeof Geom2d_BSplineCurve_2;
  Adaptor2d_Line2d_1: typeof Adaptor2d_Line2d_1;
  Adaptor2d_Line2d_2: typeof Adaptor2d_Line2d_2;
  Adaptor2d_HLine2d_1: typeof Adaptor2d_HLine2d_1;
  Adaptor2d_HLine2d_2: typeof Adaptor2d_HLine2d_2;
  Adaptor2d_OffsetCurve_1: typeof Adaptor2d_OffsetCurve_1;
  Adaptor2d_OffsetCurve_2: typeof Adaptor2d_OffsetCurve_2;
  Adaptor2d_OffsetCurve_3: typeof Adaptor2d_OffsetCurve_3;
  Adaptor2d_OffsetCurve_4: typeof Adaptor2d_OffsetCurve_4;
  Adaptor2d_HOffsetCurve_1: typeof Adaptor2d_HOffsetCurve_1;
  Adaptor2d_HOffsetCurve_2: typeof Adaptor2d_HOffsetCurve_2;
  Geom2dAdaptor_Curve_1: typeof Geom2dAdaptor_Curve_1;
  Geom2dAdaptor_Curve_2: typeof Geom2dAdaptor_Curve_2;
  Geom2dAdaptor_Curve_3: typeof Geom2dAdaptor_Curve_3;
  Geom2dAdaptor_GHCurve_1: typeof Geom2dAdaptor_GHCurve_1;
  Geom2dAdaptor_GHCurve_2: typeof Geom2dAdaptor_GHCurve_2;
  Geom2dAdaptor_HCurve_1: typeof Geom2dAdaptor_HCurve_1;
  Geom2dAdaptor_HCurve_2: typeof Geom2dAdaptor_HCurve_2;
  Geom2dAdaptor_HCurve_3: typeof Geom2dAdaptor_HCurve_3;
  Geom2dAdaptor_HCurve_4: typeof Geom2dAdaptor_HCurve_4;
  Geom2d_TrimmedCurve: typeof Geom2d_TrimmedCurve;
  Geom2d_Circle_1: typeof Geom2d_Circle_1;
  Geom2d_Circle_2: typeof Geom2d_Circle_2;
  Geom2d_Circle_3: typeof Geom2d_Circle_3;
  Geom2d_Ellipse_1: typeof Geom2d_Ellipse_1;
  Geom2d_Ellipse_2: typeof Geom2d_Ellipse_2;
  Geom2d_Ellipse_3: typeof Geom2d_Ellipse_3;
  Geom2d_Hyperbola_1: typeof Geom2d_Hyperbola_1;
  Geom2d_Hyperbola_2: typeof Geom2d_Hyperbola_2;
  Geom2d_Hyperbola_3: typeof Geom2d_Hyperbola_3;
  Geom2d_Line_1: typeof Geom2d_Line_1;
  Geom2d_Line_2: typeof Geom2d_Line_2;
  Geom2d_Line_3: typeof Geom2d_Line_3;
  Geom2d_Parabola_1: typeof Geom2d_Parabola_1;
  Geom2d_Parabola_2: typeof Geom2d_Parabola_2;
  Geom2d_Parabola_3: typeof Geom2d_Parabola_3;
  Geom2d_Parabola_4: typeof Geom2d_Parabola_4;
  Geom2d_AxisPlacement_1: typeof Geom2d_AxisPlacement_1;
  Geom2d_AxisPlacement_2: typeof Geom2d_AxisPlacement_2;
  Geom2d_CartesianPoint_1: typeof Geom2d_CartesianPoint_1;
  Geom2d_CartesianPoint_2: typeof Geom2d_CartesianPoint_2;
  Geom2d_Direction_1: typeof Geom2d_Direction_1;
  Geom2d_Direction_2: typeof Geom2d_Direction_2;
  Geom2dEvaluator_OffsetCurve_1: typeof Geom2dEvaluator_OffsetCurve_1;
  Geom2dEvaluator_OffsetCurve_2: typeof Geom2dEvaluator_OffsetCurve_2;
  Geom2d_OffsetCurve: typeof Geom2d_OffsetCurve;
  Geom2d_Transformation_1: typeof Geom2d_Transformation_1;
  Geom2d_Transformation_2: typeof Geom2d_Transformation_2;
  Geom2d_UndefinedDerivative_1: typeof Geom2d_UndefinedDerivative_1;
  Geom2d_UndefinedDerivative_2: typeof Geom2d_UndefinedDerivative_2;
  Geom2d_UndefinedValue_1: typeof Geom2d_UndefinedValue_1;
  Geom2d_UndefinedValue_2: typeof Geom2d_UndefinedValue_2;
  Geom2d_VectorWithMagnitude_1: typeof Geom2d_VectorWithMagnitude_1;
  Geom2d_VectorWithMagnitude_2: typeof Geom2d_VectorWithMagnitude_2;
  Geom2d_VectorWithMagnitude_3: typeof Geom2d_VectorWithMagnitude_3;
  Geom2dLProp_CLProps2d_1: typeof Geom2dLProp_CLProps2d_1;
  Geom2dLProp_CLProps2d_2: typeof Geom2dLProp_CLProps2d_2;
  Geom2dLProp_CLProps2d_3: typeof Geom2dLProp_CLProps2d_3;
  LProp_CurAndInf: typeof LProp_CurAndInf;
  Geom2dLProp_CurAndInf2d: typeof Geom2dLProp_CurAndInf2d;
  Geom2dLProp_FuncCurExt: typeof Geom2dLProp_FuncCurExt;
  Geom2dLProp_FuncCurNul: typeof Geom2dLProp_FuncCurNul;
  Geom2dLProp_NumericCurInf2d: typeof Geom2dLProp_NumericCurInf2d;
  LProp_AnalyticCurInf: typeof LProp_AnalyticCurInf;
  LProp_BadContinuity_1: typeof LProp_BadContinuity_1;
  LProp_BadContinuity_2: typeof LProp_BadContinuity_2;
  LProp_NotDefined_1: typeof LProp_NotDefined_1;
  LProp_NotDefined_2: typeof LProp_NotDefined_2;
  Handle_Geom2d_Geometry_1: typeof Handle_Geom2d_Geometry_1;
  Handle_Geom2d_Geometry_2: typeof Handle_Geom2d_Geometry_2;
  Handle_Geom2d_Geometry_3: typeof Handle_Geom2d_Geometry_3;
  Handle_Geom2d_Geometry_4: typeof Handle_Geom2d_Geometry_4;
  Handle_Geom2d_Curve_1: typeof Handle_Geom2d_Curve_1;
  Handle_Geom2d_Curve_2: typeof Handle_Geom2d_Curve_2;
  Handle_Geom2d_Curve_3: typeof Handle_Geom2d_Curve_3;
  Handle_Geom2d_Curve_4: typeof Handle_Geom2d_Curve_4;
  Handle_Geom2d_BoundedCurve_1: typeof Handle_Geom2d_BoundedCurve_1;
  Handle_Geom2d_BoundedCurve_2: typeof Handle_Geom2d_BoundedCurve_2;
  Handle_Geom2d_BoundedCurve_3: typeof Handle_Geom2d_BoundedCurve_3;
  Handle_Geom2d_BoundedCurve_4: typeof Handle_Geom2d_BoundedCurve_4;
  Handle_Geom2d_BezierCurve_1: typeof Handle_Geom2d_BezierCurve_1;
  Handle_Geom2d_BezierCurve_2: typeof Handle_Geom2d_BezierCurve_2;
  Handle_Geom2d_BezierCurve_3: typeof Handle_Geom2d_BezierCurve_3;
  Handle_Geom2d_BezierCurve_4: typeof Handle_Geom2d_BezierCurve_4;
  Handle_Geom2d_BSplineCurve_1: typeof Handle_Geom2d_BSplineCurve_1;
  Handle_Geom2d_BSplineCurve_2: typeof Handle_Geom2d_BSplineCurve_2;
  Handle_Geom2d_BSplineCurve_3: typeof Handle_Geom2d_BSplineCurve_3;
  Handle_Geom2d_BSplineCurve_4: typeof Handle_Geom2d_BSplineCurve_4;
  Handle_Adaptor2d_HCurve2d_1: typeof Handle_Adaptor2d_HCurve2d_1;
  Handle_Adaptor2d_HCurve2d_2: typeof Handle_Adaptor2d_HCurve2d_2;
  Handle_Adaptor2d_HCurve2d_3: typeof Handle_Adaptor2d_HCurve2d_3;
  Handle_Adaptor2d_HCurve2d_4: typeof Handle_Adaptor2d_HCurve2d_4;
  Handle_Adaptor2d_HLine2d_1: typeof Handle_Adaptor2d_HLine2d_1;
  Handle_Adaptor2d_HLine2d_2: typeof Handle_Adaptor2d_HLine2d_2;
  Handle_Adaptor2d_HLine2d_3: typeof Handle_Adaptor2d_HLine2d_3;
  Handle_Adaptor2d_HLine2d_4: typeof Handle_Adaptor2d_HLine2d_4;
  Handle_Adaptor2d_HOffsetCurve_1: typeof Handle_Adaptor2d_HOffsetCurve_1;
  Handle_Adaptor2d_HOffsetCurve_2: typeof Handle_Adaptor2d_HOffsetCurve_2;
  Handle_Adaptor2d_HOffsetCurve_3: typeof Handle_Adaptor2d_HOffsetCurve_3;
  Handle_Adaptor2d_HOffsetCurve_4: typeof Handle_Adaptor2d_HOffsetCurve_4;
  Handle_Geom2dEvaluator_Curve_1: typeof Handle_Geom2dEvaluator_Curve_1;
  Handle_Geom2dEvaluator_Curve_2: typeof Handle_Geom2dEvaluator_Curve_2;
  Handle_Geom2dEvaluator_Curve_3: typeof Handle_Geom2dEvaluator_Curve_3;
  Handle_Geom2dEvaluator_Curve_4: typeof Handle_Geom2dEvaluator_Curve_4;
  Handle_TColGeom2d_HArray1OfCurve_1: typeof Handle_TColGeom2d_HArray1OfCurve_1;
  Handle_TColGeom2d_HArray1OfCurve_2: typeof Handle_TColGeom2d_HArray1OfCurve_2;
  Handle_TColGeom2d_HArray1OfCurve_3: typeof Handle_TColGeom2d_HArray1OfCurve_3;
  Handle_TColGeom2d_HArray1OfCurve_4: typeof Handle_TColGeom2d_HArray1OfCurve_4;
  Handle_Geom2dAdaptor_GHCurve_1: typeof Handle_Geom2dAdaptor_GHCurve_1;
  Handle_Geom2dAdaptor_GHCurve_2: typeof Handle_Geom2dAdaptor_GHCurve_2;
  Handle_Geom2dAdaptor_GHCurve_3: typeof Handle_Geom2dAdaptor_GHCurve_3;
  Handle_Geom2dAdaptor_GHCurve_4: typeof Handle_Geom2dAdaptor_GHCurve_4;
  Handle_Geom2dAdaptor_HCurve_1: typeof Handle_Geom2dAdaptor_HCurve_1;
  Handle_Geom2dAdaptor_HCurve_2: typeof Handle_Geom2dAdaptor_HCurve_2;
  Handle_Geom2dAdaptor_HCurve_3: typeof Handle_Geom2dAdaptor_HCurve_3;
  Handle_Geom2dAdaptor_HCurve_4: typeof Handle_Geom2dAdaptor_HCurve_4;
  Handle_Geom2d_TrimmedCurve_1: typeof Handle_Geom2d_TrimmedCurve_1;
  Handle_Geom2d_TrimmedCurve_2: typeof Handle_Geom2d_TrimmedCurve_2;
  Handle_Geom2d_TrimmedCurve_3: typeof Handle_Geom2d_TrimmedCurve_3;
  Handle_Geom2d_TrimmedCurve_4: typeof Handle_Geom2d_TrimmedCurve_4;
  Handle_Geom2d_Conic_1: typeof Handle_Geom2d_Conic_1;
  Handle_Geom2d_Conic_2: typeof Handle_Geom2d_Conic_2;
  Handle_Geom2d_Conic_3: typeof Handle_Geom2d_Conic_3;
  Handle_Geom2d_Conic_4: typeof Handle_Geom2d_Conic_4;
  Handle_Geom2d_Circle_1: typeof Handle_Geom2d_Circle_1;
  Handle_Geom2d_Circle_2: typeof Handle_Geom2d_Circle_2;
  Handle_Geom2d_Circle_3: typeof Handle_Geom2d_Circle_3;
  Handle_Geom2d_Circle_4: typeof Handle_Geom2d_Circle_4;
  Handle_Geom2d_Ellipse_1: typeof Handle_Geom2d_Ellipse_1;
  Handle_Geom2d_Ellipse_2: typeof Handle_Geom2d_Ellipse_2;
  Handle_Geom2d_Ellipse_3: typeof Handle_Geom2d_Ellipse_3;
  Handle_Geom2d_Ellipse_4: typeof Handle_Geom2d_Ellipse_4;
  Handle_Geom2d_Hyperbola_1: typeof Handle_Geom2d_Hyperbola_1;
  Handle_Geom2d_Hyperbola_2: typeof Handle_Geom2d_Hyperbola_2;
  Handle_Geom2d_Hyperbola_3: typeof Handle_Geom2d_Hyperbola_3;
  Handle_Geom2d_Hyperbola_4: typeof Handle_Geom2d_Hyperbola_4;
  Handle_Geom2d_Line_1: typeof Handle_Geom2d_Line_1;
  Handle_Geom2d_Line_2: typeof Handle_Geom2d_Line_2;
  Handle_Geom2d_Line_3: typeof Handle_Geom2d_Line_3;
  Handle_Geom2d_Line_4: typeof Handle_Geom2d_Line_4;
  Handle_Geom2d_Parabola_1: typeof Handle_Geom2d_Parabola_1;
  Handle_Geom2d_Parabola_2: typeof Handle_Geom2d_Parabola_2;
  Handle_Geom2d_Parabola_3: typeof Handle_Geom2d_Parabola_3;
  Handle_Geom2d_Parabola_4: typeof Handle_Geom2d_Parabola_4;
  Handle_Geom2d_AxisPlacement_1: typeof Handle_Geom2d_AxisPlacement_1;
  Handle_Geom2d_AxisPlacement_2: typeof Handle_Geom2d_AxisPlacement_2;
  Handle_Geom2d_AxisPlacement_3: typeof Handle_Geom2d_AxisPlacement_3;
  Handle_Geom2d_AxisPlacement_4: typeof Handle_Geom2d_AxisPlacement_4;
  Handle_Geom2d_Point_1: typeof Handle_Geom2d_Point_1;
  Handle_Geom2d_Point_2: typeof Handle_Geom2d_Point_2;
  Handle_Geom2d_Point_3: typeof Handle_Geom2d_Point_3;
  Handle_Geom2d_Point_4: typeof Handle_Geom2d_Point_4;
  Handle_Geom2d_CartesianPoint_1: typeof Handle_Geom2d_CartesianPoint_1;
  Handle_Geom2d_CartesianPoint_2: typeof Handle_Geom2d_CartesianPoint_2;
  Handle_Geom2d_CartesianPoint_3: typeof Handle_Geom2d_CartesianPoint_3;
  Handle_Geom2d_CartesianPoint_4: typeof Handle_Geom2d_CartesianPoint_4;
  Handle_Geom2d_Vector_1: typeof Handle_Geom2d_Vector_1;
  Handle_Geom2d_Vector_2: typeof Handle_Geom2d_Vector_2;
  Handle_Geom2d_Vector_3: typeof Handle_Geom2d_Vector_3;
  Handle_Geom2d_Vector_4: typeof Handle_Geom2d_Vector_4;
  Handle_Geom2d_Direction_1: typeof Handle_Geom2d_Direction_1;
  Handle_Geom2d_Direction_2: typeof Handle_Geom2d_Direction_2;
  Handle_Geom2d_Direction_3: typeof Handle_Geom2d_Direction_3;
  Handle_Geom2d_Direction_4: typeof Handle_Geom2d_Direction_4;
  Handle_Geom2dEvaluator_OffsetCurve_1: typeof Handle_Geom2dEvaluator_OffsetCurve_1;
  Handle_Geom2dEvaluator_OffsetCurve_2: typeof Handle_Geom2dEvaluator_OffsetCurve_2;
  Handle_Geom2dEvaluator_OffsetCurve_3: typeof Handle_Geom2dEvaluator_OffsetCurve_3;
  Handle_Geom2dEvaluator_OffsetCurve_4: typeof Handle_Geom2dEvaluator_OffsetCurve_4;
  Handle_Geom2d_OffsetCurve_1: typeof Handle_Geom2d_OffsetCurve_1;
  Handle_Geom2d_OffsetCurve_2: typeof Handle_Geom2d_OffsetCurve_2;
  Handle_Geom2d_OffsetCurve_3: typeof Handle_Geom2d_OffsetCurve_3;
  Handle_Geom2d_OffsetCurve_4: typeof Handle_Geom2d_OffsetCurve_4;
  Handle_Geom2d_Transformation_1: typeof Handle_Geom2d_Transformation_1;
  Handle_Geom2d_Transformation_2: typeof Handle_Geom2d_Transformation_2;
  Handle_Geom2d_Transformation_3: typeof Handle_Geom2d_Transformation_3;
  Handle_Geom2d_Transformation_4: typeof Handle_Geom2d_Transformation_4;
  Handle_Geom2d_UndefinedDerivative_1: typeof Handle_Geom2d_UndefinedDerivative_1;
  Handle_Geom2d_UndefinedDerivative_2: typeof Handle_Geom2d_UndefinedDerivative_2;
  Handle_Geom2d_UndefinedDerivative_3: typeof Handle_Geom2d_UndefinedDerivative_3;
  Handle_Geom2d_UndefinedDerivative_4: typeof Handle_Geom2d_UndefinedDerivative_4;
  Handle_Geom2d_UndefinedValue_1: typeof Handle_Geom2d_UndefinedValue_1;
  Handle_Geom2d_UndefinedValue_2: typeof Handle_Geom2d_UndefinedValue_2;
  Handle_Geom2d_UndefinedValue_3: typeof Handle_Geom2d_UndefinedValue_3;
  Handle_Geom2d_UndefinedValue_4: typeof Handle_Geom2d_UndefinedValue_4;
  Handle_Geom2d_VectorWithMagnitude_1: typeof Handle_Geom2d_VectorWithMagnitude_1;
  Handle_Geom2d_VectorWithMagnitude_2: typeof Handle_Geom2d_VectorWithMagnitude_2;
  Handle_Geom2d_VectorWithMagnitude_3: typeof Handle_Geom2d_VectorWithMagnitude_3;
  Handle_Geom2d_VectorWithMagnitude_4: typeof Handle_Geom2d_VectorWithMagnitude_4;
  Handle_TColGeom2d_HArray1OfBSplineCurve_1: typeof Handle_TColGeom2d_HArray1OfBSplineCurve_1;
  Handle_TColGeom2d_HArray1OfBSplineCurve_2: typeof Handle_TColGeom2d_HArray1OfBSplineCurve_2;
  Handle_TColGeom2d_HArray1OfBSplineCurve_3: typeof Handle_TColGeom2d_HArray1OfBSplineCurve_3;
  Handle_TColGeom2d_HArray1OfBSplineCurve_4: typeof Handle_TColGeom2d_HArray1OfBSplineCurve_4;
  LProp_SequenceOfCIType_1: typeof LProp_SequenceOfCIType_1;
  LProp_SequenceOfCIType_2: typeof LProp_SequenceOfCIType_2;
  LProp_SequenceOfCIType_3: typeof LProp_SequenceOfCIType_3;
  Handle_LProp_BadContinuity_1: typeof Handle_LProp_BadContinuity_1;
  Handle_LProp_BadContinuity_2: typeof Handle_LProp_BadContinuity_2;
  Handle_LProp_BadContinuity_3: typeof Handle_LProp_BadContinuity_3;
  Handle_LProp_BadContinuity_4: typeof Handle_LProp_BadContinuity_4;
  Handle_LProp_NotDefined_1: typeof Handle_LProp_NotDefined_1;
  Handle_LProp_NotDefined_2: typeof Handle_LProp_NotDefined_2;
  Handle_LProp_NotDefined_3: typeof Handle_LProp_NotDefined_3;
  Handle_LProp_NotDefined_4: typeof Handle_LProp_NotDefined_4;
  Handle_TColGeom2d_HSequenceOfBoundedCurve_1: typeof Handle_TColGeom2d_HSequenceOfBoundedCurve_1;
  Handle_TColGeom2d_HSequenceOfBoundedCurve_2: typeof Handle_TColGeom2d_HSequenceOfBoundedCurve_2;
  Handle_TColGeom2d_HSequenceOfBoundedCurve_3: typeof Handle_TColGeom2d_HSequenceOfBoundedCurve_3;
  Handle_TColGeom2d_HSequenceOfBoundedCurve_4: typeof Handle_TColGeom2d_HSequenceOfBoundedCurve_4;
  Handle_TColGeom2d_HSequenceOfCurve_1: typeof Handle_TColGeom2d_HSequenceOfCurve_1;
  Handle_TColGeom2d_HSequenceOfCurve_2: typeof Handle_TColGeom2d_HSequenceOfCurve_2;
  Handle_TColGeom2d_HSequenceOfCurve_3: typeof Handle_TColGeom2d_HSequenceOfCurve_3;
  Handle_TColGeom2d_HSequenceOfCurve_4: typeof Handle_TColGeom2d_HSequenceOfCurve_4;
  Handle_TColGeom2d_HArray1OfBezierCurve_1: typeof Handle_TColGeom2d_HArray1OfBezierCurve_1;
  Handle_TColGeom2d_HArray1OfBezierCurve_2: typeof Handle_TColGeom2d_HArray1OfBezierCurve_2;
  Handle_TColGeom2d_HArray1OfBezierCurve_3: typeof Handle_TColGeom2d_HArray1OfBezierCurve_3;
  Handle_TColGeom2d_HArray1OfBezierCurve_4: typeof Handle_TColGeom2d_HArray1OfBezierCurve_4;
  LProp_Status: typeof LProp_Status;
  LProp_CIType: typeof LProp_CIType;
};
