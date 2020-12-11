declare const libName = "./modules/TKG3d.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Geom_Geometry extends Standard_Transient {
  Mirror_1(P: gp_Pnt): void;
  Mirror_2(A1: gp_Ax1): void;
  Mirror_3(A2: gp_Ax2): void;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Translate_1(V: gp_Vec): void;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Transform(T: gp_Trsf): void;
  Mirrored_1(P: gp_Pnt): any;
  Mirrored_2(A1: gp_Ax1): any;
  Mirrored_3(A2: gp_Ax2): any;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): any;
  Scaled(P: gp_Pnt, S: Standard_Real): any;
  Transformed(T: gp_Trsf): any;
  Translated_1(V: gp_Vec): any;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): any;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_Curve extends Geom_Geometry {
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Reversed(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Value(U: Standard_Real): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopAbs {
  constructor();
  Compose(Or1: TopAbs_Orientation, Or2: TopAbs_Orientation): TopAbs_Orientation;
  Reverse(Or: TopAbs_Orientation): TopAbs_Orientation;
  Complement(Or: TopAbs_Orientation): TopAbs_Orientation;
  ShapeTypeToString(theType: TopAbs_ShapeEnum): Standard_CString;
  ShapeTypeFromString_1(theTypeString: Standard_CString): TopAbs_ShapeEnum;
  ShapeTypeFromString_2(theTypeString: Standard_CString, theType: TopAbs_ShapeEnum): Standard_Boolean;
  ShapeOrientationToString(theOrientation: TopAbs_Orientation): Standard_CString;
  ShapeOrientationFromString_1(theOrientationString: Standard_CString): TopAbs_Orientation;
  ShapeOrientationFromString_2(theOrientationString: Standard_CString, theOrientation: TopAbs_Orientation): Standard_Boolean;
}

export declare class Geom_Surface extends Geom_Geometry {
  UReverse(): void;
  UReversed(): any;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversed(): any;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_ElementarySurface extends Geom_Surface {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theAx3: gp_Ax3): void;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_Plane extends Geom_ElementarySurface {
  SetPln(Pl: gp_Pln): void;
  Pln(): gp_Pln;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Plane_1 extends Geom_Plane {
    constructor(A3: gp_Ax3);
  }

  export declare class Geom_Plane_2 extends Geom_Plane {
    constructor(Pl: gp_Pln);
  }

  export declare class Geom_Plane_3 extends Geom_Plane {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class Geom_Plane_4 extends Geom_Plane {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real);
  }

export declare class Geom_Line extends Geom_Curve {
  SetLin(L: gp_Lin): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(P: gp_Pnt): void;
  SetPosition(A1: gp_Ax1): void;
  Lin(): gp_Lin;
  Position(): gp_Ax1;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Line_1 extends Geom_Line {
    constructor(A1: gp_Ax1);
  }

  export declare class Geom_Line_2 extends Geom_Line {
    constructor(L: gp_Lin);
  }

  export declare class Geom_Line_3 extends Geom_Line {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class Adaptor3d_Curve {
  constructor();
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  OffsetCurve(): any;
}

export declare class Adaptor3d_CurveOnSurface extends Adaptor3d_Curve {
  Load_1(S: any): void;
  Load_2(C: any): void;
  Load_3(C: any, S: any): void;
  GetCurve(): any;
  GetSurface(): any;
  ChangeCurve(): any;
  ChangeSurface(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
}

  export declare class Adaptor3d_CurveOnSurface_1 extends Adaptor3d_CurveOnSurface {
    constructor();
  }

  export declare class Adaptor3d_CurveOnSurface_2 extends Adaptor3d_CurveOnSurface {
    constructor(S: any);
  }

  export declare class Adaptor3d_CurveOnSurface_3 extends Adaptor3d_CurveOnSurface {
    constructor(C: any, S: any);
  }

export declare class Adaptor3d_HCurve extends Standard_Transient {
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  OffsetCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Adaptor3d_HCurveOnSurface extends Adaptor3d_HCurve {
  Set(C: Adaptor3d_CurveOnSurface): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): Adaptor3d_CurveOnSurface;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Adaptor3d_HCurveOnSurface_1 extends Adaptor3d_HCurveOnSurface {
    constructor();
  }

  export declare class Adaptor3d_HCurveOnSurface_2 extends Adaptor3d_HCurveOnSurface {
    constructor(C: Adaptor3d_CurveOnSurface);
  }

export declare class Adaptor3d_IsoCurve extends Adaptor3d_Curve {
  Load_1(S: any): void;
  Load_2(Iso: GeomAbs_IsoType, Param: Standard_Real): void;
  Load_3(Iso: GeomAbs_IsoType, Param: Standard_Real, WFirst: Standard_Real, WLast: Standard_Real): void;
  Surface(): any;
  Iso(): GeomAbs_IsoType;
  Parameter(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
}

  export declare class Adaptor3d_IsoCurve_1 extends Adaptor3d_IsoCurve {
    constructor();
  }

  export declare class Adaptor3d_IsoCurve_2 extends Adaptor3d_IsoCurve {
    constructor(S: any);
  }

  export declare class Adaptor3d_IsoCurve_3 extends Adaptor3d_IsoCurve {
    constructor(S: any, Iso: GeomAbs_IsoType, Param: Standard_Real);
  }

  export declare class Adaptor3d_IsoCurve_4 extends Adaptor3d_IsoCurve {
    constructor(S: any, Iso: GeomAbs_IsoType, Param: Standard_Real, WFirst: Standard_Real, WLast: Standard_Real);
  }

export declare class Adaptor3d_HIsoCurve extends Adaptor3d_HCurve {
  Set(C: Adaptor3d_IsoCurve): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): Adaptor3d_IsoCurve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Adaptor3d_HIsoCurve_1 extends Adaptor3d_HIsoCurve {
    constructor();
  }

  export declare class Adaptor3d_HIsoCurve_2 extends Adaptor3d_HIsoCurve {
    constructor(C: Adaptor3d_IsoCurve);
  }

export declare class Adaptor3d_HSurface extends Standard_Transient {
  Surface(): Adaptor3d_Surface;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: GeomAbs_Shape): Standard_Integer;
  UIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): any;
  BasisSurface(): any;
  OffsetValue(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Adaptor3d_Surface {
  constructor();
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: GeomAbs_Shape): Standard_Integer;
  UIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): any;
  BasisSurface(): any;
  OffsetValue(): Standard_Real;
}

export declare class Adaptor3d_HSurfaceTool {
  constructor();
  FirstUParameter(S: any): Standard_Real;
  FirstVParameter(S: any): Standard_Real;
  LastUParameter(S: any): Standard_Real;
  LastVParameter(S: any): Standard_Real;
  NbUIntervals(S: any, Sh: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: any, Sh: GeomAbs_Shape): Standard_Integer;
  UIntervals(S: any, T: TColStd_Array1OfReal, Sh: GeomAbs_Shape): void;
  VIntervals(S: any, T: TColStd_Array1OfReal, Sh: GeomAbs_Shape): void;
  UTrim(S: any, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(S: any, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(S: any): Standard_Boolean;
  IsVClosed(S: any): Standard_Boolean;
  IsUPeriodic(S: any): Standard_Boolean;
  UPeriod(S: any): Standard_Real;
  IsVPeriodic(S: any): Standard_Boolean;
  VPeriod(S: any): Standard_Real;
  Value(S: any, u: Standard_Real, v: Standard_Real): gp_Pnt;
  D0(S: any, u: Standard_Real, v: Standard_Real, P: gp_Pnt): void;
  D1(S: any, u: Standard_Real, v: Standard_Real, P: gp_Pnt, D1u: gp_Vec, D1v: gp_Vec): void;
  D2(S: any, u: Standard_Real, v: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(S: any, u: Standard_Real, v: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(S: any, u: Standard_Real, v: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  UResolution(S: any, R3d: Standard_Real): Standard_Real;
  VResolution(S: any, R3d: Standard_Real): Standard_Real;
  GetType(S: any): GeomAbs_SurfaceType;
  Plane(S: any): gp_Pln;
  Cylinder(S: any): gp_Cylinder;
  Cone(S: any): gp_Cone;
  Torus(S: any): gp_Torus;
  Sphere(S: any): gp_Sphere;
  Bezier(S: any): any;
  BSpline(S: any): any;
  AxeOfRevolution(S: any): gp_Ax1;
  Direction(S: any): gp_Dir;
  BasisCurve(S: any): any;
  BasisSurface(S: any): any;
  OffsetValue(S: any): Standard_Real;
  NbSamplesU_1(S: any): Standard_Integer;
  NbSamplesV_1(S: any): Standard_Integer;
  NbSamplesU_2(S: any, u1: Standard_Real, u2: Standard_Real): Standard_Integer;
  NbSamplesV_2(S: any, v1: Standard_Real, v2: Standard_Real): Standard_Integer;
}

export declare class Geom_BoundedSurface extends Geom_Surface {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_BezierSurface extends Geom_BoundedSurface {
  ExchangeUV(): void;
  Increase(UDeg: Standard_Integer, VDeg: Standard_Integer): void;
  InsertPoleColAfter_1(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  InsertPoleColAfter_2(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  InsertPoleColBefore_1(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  InsertPoleColBefore_2(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  InsertPoleRowAfter_1(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  InsertPoleRowAfter_2(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  InsertPoleRowBefore_1(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  InsertPoleRowBefore_2(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  RemovePoleCol(VIndex: Standard_Integer): void;
  RemovePoleRow(UIndex: Standard_Integer): void;
  Segment(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  SetPole_1(UIndex: Standard_Integer, VIndex: Standard_Integer, P: gp_Pnt): void;
  SetPole_2(UIndex: Standard_Integer, VIndex: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  SetPoleCol_1(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  SetPoleCol_2(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  SetPoleRow_1(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  SetPoleRow_2(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  SetWeight(UIndex: Standard_Integer, VIndex: Standard_Integer, Weight: Standard_Real): void;
  SetWeightCol(VIndex: Standard_Integer, CPoleWeights: TColStd_Array1OfReal): void;
  SetWeightRow(UIndex: Standard_Integer, CPoleWeights: TColStd_Array1OfReal): void;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  NbUPoles(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  Pole(UIndex: Standard_Integer, VIndex: Standard_Integer): gp_Pnt;
  Poles_1(P: TColgp_Array2OfPnt): void;
  Poles_2(): TColgp_Array2OfPnt;
  UDegree(): Standard_Integer;
  UIso(U: Standard_Real): any;
  VDegree(): Standard_Integer;
  VIso(V: Standard_Real): any;
  Weight(UIndex: Standard_Integer, VIndex: Standard_Integer): Standard_Real;
  Weights_1(W: TColStd_Array2OfReal): void;
  Weights_2(): TColStd_Array2OfReal;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Transform(T: gp_Trsf): void;
  MaxDegree(): Standard_Integer;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real, VTolerance: Standard_Real): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_BezierSurface_1 extends Geom_BezierSurface {
    constructor(SurfacePoles: TColgp_Array2OfPnt);
  }

  export declare class Geom_BezierSurface_2 extends Geom_BezierSurface {
    constructor(SurfacePoles: TColgp_Array2OfPnt, PoleWeights: TColStd_Array2OfReal);
  }

export declare class Geom_BSplineSurface extends Geom_BoundedSurface {
  ExchangeUV(): void;
  SetUPeriodic(): void;
  SetVPeriodic(): void;
  PeriodicNormalization(U: Standard_Real, V: Standard_Real): void;
  SetUOrigin(Index: Standard_Integer): void;
  SetVOrigin(Index: Standard_Integer): void;
  SetUNotPeriodic(): void;
  SetVNotPeriodic(): void;
  UReverse(): void;
  VReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReversedParameter(V: Standard_Real): Standard_Real;
  IncreaseDegree(UDegree: Standard_Integer, VDegree: Standard_Integer): void;
  InsertUKnots(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  InsertVKnots(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  RemoveUKnot(Index: Standard_Integer, M: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  RemoveVKnot(Index: Standard_Integer, M: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  IncreaseUMultiplicity_1(UIndex: Standard_Integer, M: Standard_Integer): void;
  IncreaseUMultiplicity_2(FromI1: Standard_Integer, ToI2: Standard_Integer, M: Standard_Integer): void;
  IncrementUMultiplicity(FromI1: Standard_Integer, ToI2: Standard_Integer, Step: Standard_Integer): void;
  IncreaseVMultiplicity_1(VIndex: Standard_Integer, M: Standard_Integer): void;
  IncreaseVMultiplicity_2(FromI1: Standard_Integer, ToI2: Standard_Integer, M: Standard_Integer): void;
  IncrementVMultiplicity(FromI1: Standard_Integer, ToI2: Standard_Integer, Step: Standard_Integer): void;
  InsertUKnot(U: Standard_Real, M: Standard_Integer, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  InsertVKnot(V: Standard_Real, M: Standard_Integer, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  Segment(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, theUTolerance: Standard_Real, theVTolerance: Standard_Real): void;
  CheckAndSegment(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, theUTolerance: Standard_Real, theVTolerance: Standard_Real): void;
  SetUKnot_1(UIndex: Standard_Integer, K: Standard_Real): void;
  SetUKnots(UK: TColStd_Array1OfReal): void;
  SetUKnot_2(UIndex: Standard_Integer, K: Standard_Real, M: Standard_Integer): void;
  SetVKnot_1(VIndex: Standard_Integer, K: Standard_Real): void;
  SetVKnots(VK: TColStd_Array1OfReal): void;
  SetVKnot_2(VIndex: Standard_Integer, K: Standard_Real, M: Standard_Integer): void;
  LocateU(U: Standard_Real, ParametricTolerance: Standard_Real, I1: Standard_Integer, I2: Standard_Integer, WithKnotRepetition: Standard_Boolean): void;
  LocateV(V: Standard_Real, ParametricTolerance: Standard_Real, I1: Standard_Integer, I2: Standard_Integer, WithKnotRepetition: Standard_Boolean): void;
  SetPole_1(UIndex: Standard_Integer, VIndex: Standard_Integer, P: gp_Pnt): void;
  SetPole_2(UIndex: Standard_Integer, VIndex: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  SetPoleCol_1(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  SetPoleCol_2(VIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  SetPoleRow_1(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt, CPoleWeights: TColStd_Array1OfReal): void;
  SetPoleRow_2(UIndex: Standard_Integer, CPoles: TColgp_Array1OfPnt): void;
  SetWeight(UIndex: Standard_Integer, VIndex: Standard_Integer, Weight: Standard_Real): void;
  SetWeightCol(VIndex: Standard_Integer, CPoleWeights: TColStd_Array1OfReal): void;
  SetWeightRow(UIndex: Standard_Integer, CPoleWeights: TColStd_Array1OfReal): void;
  MovePoint(U: Standard_Real, V: Standard_Real, P: gp_Pnt, UIndex1: Standard_Integer, UIndex2: Standard_Integer, VIndex1: Standard_Integer, VIndex2: Standard_Integer, UFirstIndex: Standard_Integer, ULastIndex: Standard_Integer, VFirstIndex: Standard_Integer, VLastIndex: Standard_Integer): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsURational(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  FirstUKnotIndex(): Standard_Integer;
  FirstVKnotIndex(): Standard_Integer;
  LastUKnotIndex(): Standard_Integer;
  LastVKnotIndex(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  Pole(UIndex: Standard_Integer, VIndex: Standard_Integer): gp_Pnt;
  Poles_1(P: TColgp_Array2OfPnt): void;
  Poles_2(): TColgp_Array2OfPnt;
  UDegree(): Standard_Integer;
  UKnot(UIndex: Standard_Integer): Standard_Real;
  UKnotDistribution(): GeomAbs_BSplKnotDistribution;
  UKnots_1(Ku: TColStd_Array1OfReal): void;
  UKnots_2(): TColStd_Array1OfReal;
  UKnotSequence_1(Ku: TColStd_Array1OfReal): void;
  UKnotSequence_2(): TColStd_Array1OfReal;
  UMultiplicity(UIndex: Standard_Integer): Standard_Integer;
  UMultiplicities_1(Mu: TColStd_Array1OfInteger): void;
  UMultiplicities_2(): TColStd_Array1OfInteger;
  VDegree(): Standard_Integer;
  VKnot(VIndex: Standard_Integer): Standard_Real;
  VKnotDistribution(): GeomAbs_BSplKnotDistribution;
  VKnots_1(Kv: TColStd_Array1OfReal): void;
  VKnots_2(): TColStd_Array1OfReal;
  VKnotSequence_1(Kv: TColStd_Array1OfReal): void;
  VKnotSequence_2(): TColStd_Array1OfReal;
  VMultiplicity(VIndex: Standard_Integer): Standard_Integer;
  VMultiplicities_1(Mv: TColStd_Array1OfInteger): void;
  VMultiplicities_2(): TColStd_Array1OfInteger;
  Weight(UIndex: Standard_Integer, VIndex: Standard_Integer): Standard_Real;
  Weights_1(W: TColStd_Array2OfReal): void;
  Weights_2(): TColStd_Array2OfReal;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  LocalD0(U: Standard_Real, V: Standard_Real, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer, P: gp_Pnt): void;
  LocalD1(U: Standard_Real, V: Standard_Real, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  LocalD2(U: Standard_Real, V: Standard_Real, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  LocalD3(U: Standard_Real, V: Standard_Real, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  LocalDN(U: Standard_Real, V: Standard_Real, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  LocalValue(U: Standard_Real, V: Standard_Real, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer): gp_Pnt;
  UIso_1(U: Standard_Real): any;
  VIso_1(V: Standard_Real): any;
  UIso_2(U: Standard_Real, CheckRational: Standard_Boolean): any;
  VIso_2(V: Standard_Real, CheckRational: Standard_Boolean): any;
  Transform(T: gp_Trsf): void;
  MaxDegree(): Standard_Integer;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real, VTolerance: Standard_Real): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_BSplineSurface_1 extends Geom_BSplineSurface {
    constructor(Poles: TColgp_Array2OfPnt, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, UPeriodic: Standard_Boolean, VPeriodic: Standard_Boolean);
  }

  export declare class Geom_BSplineSurface_2 extends Geom_BSplineSurface {
    constructor(Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, UPeriodic: Standard_Boolean, VPeriodic: Standard_Boolean);
  }

export declare class Adaptor3d_HVertex extends Standard_Transient {
  Value(): gp_Pnt2d;
  Parameter(C: any): Standard_Real;
  Resolution(C: any): Standard_Real;
  Orientation(): TopAbs_Orientation;
  IsSame(Other: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Adaptor3d_HVertex_1 extends Adaptor3d_HVertex {
    constructor();
  }

  export declare class Adaptor3d_HVertex_2 extends Adaptor3d_HVertex {
    constructor(P: gp_Pnt2d, Ori: TopAbs_Orientation, Resolution: Standard_Real);
  }

export declare class Adaptor3d_InterFunc extends math_FunctionWithDerivative {
  constructor(C: any, FixVal: Standard_Real, Fix: Standard_Integer)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class Adaptor3d_TopolTool extends Standard_Transient {
  Initialize_1(): void;
  Initialize_2(S: any): void;
  Initialize_3(Curve: any): void;
  Init(): void;
  More(): Standard_Boolean;
  Value(): any;
  Next(): void;
  InitVertexIterator(): void;
  MoreVertex(): Standard_Boolean;
  Vertex(): any;
  NextVertex(): void;
  Classify(P: gp_Pnt2d, Tol: Standard_Real, ReacdreOnPeriodic: Standard_Boolean): TopAbs_State;
  IsThePointOn(P: gp_Pnt2d, Tol: Standard_Real, ReacdreOnPeriodic: Standard_Boolean): Standard_Boolean;
  Orientation_1(C: any): TopAbs_Orientation;
  Orientation_2(V: any): TopAbs_Orientation;
  Identical(V1: any, V2: any): Standard_Boolean;
  Has3d(): Standard_Boolean;
  Tol3d_1(C: any): Standard_Real;
  Tol3d_2(V: any): Standard_Real;
  Pnt(V: any): gp_Pnt;
  ComputeSamplePoints(): void;
  NbSamplesU(): Standard_Integer;
  NbSamplesV(): Standard_Integer;
  NbSamples(): Standard_Integer;
  UParameters(theArray: TColStd_Array1OfReal): void;
  VParameters(theArray: TColStd_Array1OfReal): void;
  SamplePoint(Index: Standard_Integer, P2d: gp_Pnt2d, P3d: gp_Pnt): void;
  DomainIsInfinite(): Standard_Boolean;
  Edge(): Standard_Address;
  SamplePnts(theDefl: Standard_Real, theNUmin: Standard_Integer, theNVmin: Standard_Integer): void;
  BSplSamplePnts(theDefl: Standard_Real, theNUmin: Standard_Integer, theNVmin: Standard_Integer): void;
  IsUniformSampling(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Adaptor3d_TopolTool_1 extends Adaptor3d_TopolTool {
    constructor();
  }

  export declare class Adaptor3d_TopolTool_2 extends Adaptor3d_TopolTool {
    constructor(Surface: any);
  }

export declare class AdvApprox_EvaluatorFunction {
  Evaluate(Dimension: Standard_Integer, StartEnd: Standard_Real [2], Parameter: Standard_Real, DerivativeRequest: Standard_Integer, Result: Standard_Real, ErrorCode: Standard_Integer): void;
}

export declare class AdvApprox_ApproxAFunction {
  Approximation(TotalDimension: Standard_Integer, TotalNumSS: Standard_Integer, LocalDimension: TColStd_Array1OfInteger, First: Standard_Real, Last: Standard_Real, Evaluator: AdvApprox_EvaluatorFunction, CutTool: AdvApprox_Cutting, ContinuityOrder: Standard_Integer, NumMaxCoeffs: Standard_Integer, MaxSegments: Standard_Integer, TolerancesArray: TColStd_Array1OfReal, code_precis: Standard_Integer, NumCurves: Standard_Integer, NumCoeffPerCurveArray: TColStd_Array1OfInteger, LocalCoefficientArray: TColStd_Array1OfReal, IntervalsArray: TColStd_Array1OfReal, ErrorMaxArray: TColStd_Array1OfReal, AverageErrorArray: TColStd_Array1OfReal, ErrorCode: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  Poles1d_1(): any;
  Poles2d_1(): any;
  Poles_1(): any;
  NbPoles(): Standard_Integer;
  Poles1d_2(Index: Standard_Integer, P: TColStd_Array1OfReal): void;
  Poles2d_2(Index: Standard_Integer, P: TColgp_Array1OfPnt2d): void;
  Poles_2(Index: Standard_Integer, P: TColgp_Array1OfPnt): void;
  Degree(): Standard_Integer;
  NbKnots(): Standard_Integer;
  NumSubSpaces(Dimension: Standard_Integer): Standard_Integer;
  Knots(): any;
  Multiplicities(): any;
  MaxError_1(Dimension: Standard_Integer): any;
  AverageError_1(Dimension: Standard_Integer): any;
  MaxError_2(Dimension: Standard_Integer, Index: Standard_Integer): Standard_Real;
  AverageError_2(Dimension: Standard_Integer, Index: Standard_Integer): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class AdvApprox_ApproxAFunction_1 extends AdvApprox_ApproxAFunction {
    constructor(Num1DSS: Standard_Integer, Num2DSS: Standard_Integer, Num3DSS: Standard_Integer, OneDTol: any, TwoDTol: any, ThreeDTol: any, First: Standard_Real, Last: Standard_Real, Continuity: GeomAbs_Shape, MaxDeg: Standard_Integer, MaxSeg: Standard_Integer, Func: AdvApprox_EvaluatorFunction);
  }

  export declare class AdvApprox_ApproxAFunction_2 extends AdvApprox_ApproxAFunction {
    constructor(Num1DSS: Standard_Integer, Num2DSS: Standard_Integer, Num3DSS: Standard_Integer, OneDTol: any, TwoDTol: any, ThreeDTol: any, First: Standard_Real, Last: Standard_Real, Continuity: GeomAbs_Shape, MaxDeg: Standard_Integer, MaxSeg: Standard_Integer, Func: AdvApprox_EvaluatorFunction, CutTool: AdvApprox_Cutting);
  }

export declare class AdvApprox_Cutting {
  Value(a: Standard_Real, b: Standard_Real, cuttingvalue: Standard_Real): Standard_Boolean;
}

export declare class AdvApprox_DichoCutting extends AdvApprox_Cutting {
  constructor()
  Value(a: Standard_Real, b: Standard_Real, cuttingvalue: Standard_Real): Standard_Boolean;
}

export declare class AdvApprox_PrefAndRec extends AdvApprox_Cutting {
  constructor(RecomendedCut: TColStd_Array1OfReal, PrefferedCut: TColStd_Array1OfReal, Weight: Standard_Real)
  Value(a: Standard_Real, b: Standard_Real, cuttingvalue: Standard_Real): Standard_Boolean;
}

export declare class AdvApprox_PrefCutting extends AdvApprox_Cutting {
  constructor(CutPnts: TColStd_Array1OfReal)
  Value(a: Standard_Real, b: Standard_Real, cuttingvalue: Standard_Real): Standard_Boolean;
}

export declare class AdvApprox_SimpleApprox {
  constructor(TotalDimension: Standard_Integer, TotalNumSS: Standard_Integer, Continuity: GeomAbs_Shape, WorkDegree: Standard_Integer, NbGaussPoints: Standard_Integer, JacobiBase: any, Func: AdvApprox_EvaluatorFunction)
  Perform(LocalDimension: TColStd_Array1OfInteger, LocalTolerancesArray: TColStd_Array1OfReal, First: Standard_Real, Last: Standard_Real, MaxDegree: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  Degree(): Standard_Integer;
  Coefficients(): any;
  FirstConstr(): any;
  LastConstr(): any;
  SomTab(): any;
  DifTab(): any;
  MaxError(Index: Standard_Integer): Standard_Real;
  AverageError(Index: Standard_Integer): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class Geom_BoundedCurve extends Geom_Curve {
  EndPoint(): gp_Pnt;
  StartPoint(): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_BSplineCurve extends Geom_BoundedCurve {
  IncreaseDegree(Degree: Standard_Integer): void;
  IncreaseMultiplicity_1(Index: Standard_Integer, M: Standard_Integer): void;
  IncreaseMultiplicity_2(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  IncrementMultiplicity(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  InsertKnot(U: Standard_Real, M: Standard_Integer, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  InsertKnots(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  RemoveKnot(Index: Standard_Integer, M: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Segment(U1: Standard_Real, U2: Standard_Real, theTolerance: Standard_Real): void;
  SetKnot_1(Index: Standard_Integer, K: Standard_Real): void;
  SetKnots(K: TColStd_Array1OfReal): void;
  SetKnot_2(Index: Standard_Integer, K: Standard_Real, M: Standard_Integer): void;
  PeriodicNormalization(U: Standard_Real): void;
  SetPeriodic(): void;
  SetOrigin_1(Index: Standard_Integer): void;
  SetOrigin_2(U: Standard_Real, Tol: Standard_Real): void;
  SetNotPeriodic(): void;
  SetPole_1(Index: Standard_Integer, P: gp_Pnt): void;
  SetPole_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  SetWeight(Index: Standard_Integer, Weight: Standard_Real): void;
  MovePoint(U: Standard_Real, P: gp_Pnt, Index1: Standard_Integer, Index2: Standard_Integer, FirstModifiedPole: Standard_Integer, LastModifiedPole: Standard_Integer): void;
  MovePointAndTangent(U: Standard_Real, P: gp_Pnt, Tangent: gp_Vec, Tolerance: Standard_Real, StartingCondition: Standard_Integer, EndingCondition: Standard_Integer, ErrorStatus: Standard_Integer): void;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsG1(theTf: Standard_Real, theTl: Standard_Real, theAngTol: Standard_Real): Standard_Boolean;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  IsRational(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Degree(): Standard_Integer;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  LocalValue(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer): gp_Pnt;
  LocalD0(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt): void;
  LocalD1(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt, V1: gp_Vec): void;
  LocalD2(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  LocalD3(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  LocalDN(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, N: Standard_Integer): gp_Vec;
  EndPoint(): gp_Pnt;
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
  Pole(Index: Standard_Integer): gp_Pnt;
  Poles_1(P: TColgp_Array1OfPnt): void;
  Poles_2(): TColgp_Array1OfPnt;
  StartPoint(): gp_Pnt;
  Weight(Index: Standard_Integer): Standard_Real;
  Weights_1(W: TColStd_Array1OfReal): void;
  Weights_2(): TColStd_Array1OfReal;
  Transform(T: gp_Trsf): void;
  MaxDegree(): Standard_Integer;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real): void;
  Copy(): any;
  IsEqual(theOther: any, thePreci: Standard_Real): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_BSplineCurve_1 extends Geom_BSplineCurve {
    constructor(Poles: TColgp_Array1OfPnt, Knots: TColStd_Array1OfReal, Multiplicities: TColStd_Array1OfInteger, Degree: Standard_Integer, Periodic: Standard_Boolean);
  }

  export declare class Geom_BSplineCurve_2 extends Geom_BSplineCurve {
    constructor(Poles: TColgp_Array1OfPnt, Weights: TColStd_Array1OfReal, Knots: TColStd_Array1OfReal, Multiplicities: TColStd_Array1OfInteger, Degree: Standard_Integer, Periodic: Standard_Boolean, CheckRational: Standard_Boolean);
  }

export declare class GeomEvaluator_Surface extends Standard_Transient {
  D0(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt): void;
  D1(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec): void;
  D2(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec): void;
  D3(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec, theD3U: gp_Vec, theD3V: gp_Vec, theD3UUV: gp_Vec, theD3UVV: gp_Vec): void;
  DN(theU: Standard_Real, theV: Standard_Real, theDerU: Standard_Integer, theDerV: Standard_Integer): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomAdaptor_Surface extends Adaptor3d_Surface {
  Load_1(S: any): void;
  Load_2(S: any, UFirst: Standard_Real, ULast: Standard_Real, VFirst: Standard_Real, VLast: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  Surface(): any;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: GeomAbs_Shape): Standard_Integer;
  UIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): any;
  BasisSurface(): any;
  OffsetValue(): Standard_Real;
}

  export declare class GeomAdaptor_Surface_1 extends GeomAdaptor_Surface {
    constructor();
  }

  export declare class GeomAdaptor_Surface_2 extends GeomAdaptor_Surface {
    constructor(S: any);
  }

  export declare class GeomAdaptor_Surface_3 extends GeomAdaptor_Surface {
    constructor(S: any, UFirst: Standard_Real, ULast: Standard_Real, VFirst: Standard_Real, VLast: Standard_Real, TolU: Standard_Real, TolV: Standard_Real);
  }

export declare class GeomEvaluator_Curve extends Standard_Transient {
  D0(theU: Standard_Real, theValue: gp_Pnt): void;
  D1(theU: Standard_Real, theValue: gp_Pnt, theD1: gp_Vec): void;
  D2(theU: Standard_Real, theValue: gp_Pnt, theD1: gp_Vec, theD2: gp_Vec): void;
  D3(theU: Standard_Real, theValue: gp_Pnt, theD1: gp_Vec, theD2: gp_Vec, theD3: gp_Vec): void;
  DN(theU: Standard_Real, theDerU: Standard_Integer): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomAdaptor_Curve extends Adaptor3d_Curve {
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
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  OffsetCurve(): any;
}

  export declare class GeomAdaptor_Curve_1 extends GeomAdaptor_Curve {
    constructor();
  }

  export declare class GeomAdaptor_Curve_2 extends GeomAdaptor_Curve {
    constructor(C: any);
  }

  export declare class GeomAdaptor_Curve_3 extends GeomAdaptor_Curve {
    constructor(C: any, UFirst: Standard_Real, ULast: Standard_Real);
  }

export declare class Geom_BezierCurve extends Geom_BoundedCurve {
  Increase(Degree: Standard_Integer): void;
  InsertPoleAfter_1(Index: Standard_Integer, P: gp_Pnt): void;
  InsertPoleAfter_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  InsertPoleBefore_1(Index: Standard_Integer, P: gp_Pnt): void;
  InsertPoleBefore_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  RemovePole(Index: Standard_Integer): void;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Segment(U1: Standard_Real, U2: Standard_Real): void;
  SetPole_1(Index: Standard_Integer, P: gp_Pnt): void;
  SetPole_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  SetWeight(Index: Standard_Integer, Weight: Standard_Real): void;
  IsClosed(): Standard_Boolean;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  IsRational(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Degree(): Standard_Integer;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  StartPoint(): gp_Pnt;
  EndPoint(): gp_Pnt;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  NbPoles(): Standard_Integer;
  Pole(Index: Standard_Integer): gp_Pnt;
  Poles_1(P: TColgp_Array1OfPnt): void;
  Poles_2(): TColgp_Array1OfPnt;
  Weight(Index: Standard_Integer): Standard_Real;
  Weights_1(W: TColStd_Array1OfReal): void;
  Weights_2(): TColStd_Array1OfReal;
  Transform(T: gp_Trsf): void;
  MaxDegree(): Standard_Integer;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_BezierCurve_1 extends Geom_BezierCurve {
    constructor(CurvePoles: TColgp_Array1OfPnt);
  }

  export declare class Geom_BezierCurve_2 extends Geom_BezierCurve {
    constructor(CurvePoles: TColgp_Array1OfPnt, PoleWeights: TColStd_Array1OfReal);
  }

export declare class GeomLProp_SLProps {
  SetSurface(S: any): void;
  SetParameters(U: Standard_Real, V: Standard_Real): void;
  Value(): gp_Pnt;
  D1U(): gp_Vec;
  D1V(): gp_Vec;
  D2U(): gp_Vec;
  D2V(): gp_Vec;
  DUV(): gp_Vec;
  IsTangentUDefined(): Standard_Boolean;
  TangentU(D: gp_Dir): void;
  IsTangentVDefined(): Standard_Boolean;
  TangentV(D: gp_Dir): void;
  IsNormalDefined(): Standard_Boolean;
  Normal(): gp_Dir;
  IsCurvatureDefined(): Standard_Boolean;
  IsUmbilic(): Standard_Boolean;
  MaxCurvature(): Standard_Real;
  MinCurvature(): Standard_Real;
  CurvatureDirections(MaxD: gp_Dir, MinD: gp_Dir): void;
  MeanCurvature(): Standard_Real;
  GaussianCurvature(): Standard_Real;
}

  export declare class GeomLProp_SLProps_1 extends GeomLProp_SLProps {
    constructor(S: any, U: Standard_Real, V: Standard_Real, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class GeomLProp_SLProps_2 extends GeomLProp_SLProps {
    constructor(S: any, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class GeomLProp_SLProps_3 extends GeomLProp_SLProps {
    constructor(N: Standard_Integer, Resolution: Standard_Real);
  }

export declare class GProp_GProps {
  Add(Item: GProp_GProps, Density: Standard_Real): void;
  Mass(): Standard_Real;
  CentreOfMass(): gp_Pnt;
  MatrixOfInertia(): gp_Mat;
  StaticMoments(Ix: Standard_Real, Iy: Standard_Real, Iz: Standard_Real): void;
  MomentOfInertia(A: gp_Ax1): Standard_Real;
  PrincipalProperties(): GProp_PrincipalProps;
  RadiusOfGyration(A: gp_Ax1): Standard_Real;
}

  export declare class GProp_GProps_1 extends GProp_GProps {
    constructor();
  }

  export declare class GProp_GProps_2 extends GProp_GProps {
    constructor(SystemLocation: gp_Pnt);
  }

export declare class GeomAdaptor_GHSurface extends Adaptor3d_HSurface {
  Set(S: GeomAdaptor_Surface): void;
  Surface(): Adaptor3d_Surface;
  ChangeSurface(): GeomAdaptor_Surface;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomAdaptor_GHSurface_1 extends GeomAdaptor_GHSurface {
    constructor();
  }

  export declare class GeomAdaptor_GHSurface_2 extends GeomAdaptor_GHSurface {
    constructor(S: GeomAdaptor_Surface);
  }

export declare class GeomAdaptor_HSurface extends GeomAdaptor_GHSurface {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomAdaptor_HSurface_1 extends GeomAdaptor_HSurface {
    constructor();
  }

  export declare class GeomAdaptor_HSurface_2 extends GeomAdaptor_HSurface {
    constructor(AS: GeomAdaptor_Surface);
  }

  export declare class GeomAdaptor_HSurface_3 extends GeomAdaptor_HSurface {
    constructor(S: any);
  }

  export declare class GeomAdaptor_HSurface_4 extends GeomAdaptor_HSurface {
    constructor(S: any, UFirst: Standard_Real, ULast: Standard_Real, VFirst: Standard_Real, VLast: Standard_Real, TolU: Standard_Real, TolV: Standard_Real);
  }

export declare class Geom_TrimmedCurve extends Geom_BoundedCurve {
  constructor(C: any, U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean)
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  SetTrim(U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean): void;
  BasisCurve(): any;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EndPoint(): gp_Pnt;
  FirstParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  LastParameter(): Standard_Real;
  StartPoint(): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_Conic extends Geom_Curve {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax2;
  Eccentricity(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_Circle extends Geom_Conic {
  SetCirc(C: gp_Circ): void;
  SetRadius(R: Standard_Real): void;
  Circ(): gp_Circ;
  Radius(): Standard_Real;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Eccentricity(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Circle_1 extends Geom_Circle {
    constructor(C: gp_Circ);
  }

  export declare class Geom_Circle_2 extends Geom_Circle {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

export declare class Geom_ConicalSurface extends Geom_ElementarySurface {
  SetCone(C: gp_Cone): void;
  SetRadius(R: Standard_Real): void;
  SetSemiAngle(Ang: Standard_Real): void;
  Cone(): gp_Cone;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReversedParameter(V: Standard_Real): Standard_Real;
  VReverse(): void;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Apex(): gp_Pnt;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  RefRadius(): Standard_Real;
  SemiAngle(): Standard_Real;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_ConicalSurface_1 extends Geom_ConicalSurface {
    constructor(A3: gp_Ax3, Ang: Standard_Real, Radius: Standard_Real);
  }

  export declare class Geom_ConicalSurface_2 extends Geom_ConicalSurface {
    constructor(C: gp_Cone);
  }

export declare class Geom_CylindricalSurface extends Geom_ElementarySurface {
  SetCylinder(C: gp_Cylinder): void;
  SetRadius(R: Standard_Real): void;
  Cylinder(): gp_Cylinder;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  Radius(): Standard_Real;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_CylindricalSurface_1 extends Geom_CylindricalSurface {
    constructor(A3: gp_Ax3, Radius: Standard_Real);
  }

  export declare class Geom_CylindricalSurface_2 extends Geom_CylindricalSurface {
    constructor(C: gp_Cylinder);
  }

export declare class Geom_Ellipse extends Geom_Conic {
  SetElips(E: gp_Elips): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  Elips(): gp_Elips;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Ellipse_1 extends Geom_Ellipse {
    constructor(E: gp_Elips);
  }

  export declare class Geom_Ellipse_2 extends Geom_Ellipse {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class Geom_Hyperbola extends Geom_Conic {
  SetHypr(H: gp_Hypr): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  Hypr(): gp_Hypr;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Asymptote1(): gp_Ax1;
  Asymptote2(): gp_Ax1;
  ConjugateBranch1(): gp_Hypr;
  ConjugateBranch2(): gp_Hypr;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  OtherBranch(): gp_Hypr;
  Parameter(): Standard_Real;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Hyperbola_1 extends Geom_Hyperbola {
    constructor(H: gp_Hypr);
  }

  export declare class Geom_Hyperbola_2 extends Geom_Hyperbola {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class Geom_RectangularTrimmedSurface extends Geom_BoundedSurface {
  SetTrim_1(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, USense: Standard_Boolean, VSense: Standard_Boolean): void;
  SetTrim_2(Param1: Standard_Real, Param2: Standard_Real, UTrim: Standard_Boolean, Sense: Standard_Boolean): void;
  BasisSurface(): any;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_RectangularTrimmedSurface_1 extends Geom_RectangularTrimmedSurface {
    constructor(S: any, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, USense: Standard_Boolean, VSense: Standard_Boolean);
  }

  export declare class Geom_RectangularTrimmedSurface_2 extends Geom_RectangularTrimmedSurface {
    constructor(S: any, Param1: Standard_Real, Param2: Standard_Real, UTrim: Standard_Boolean, Sense: Standard_Boolean);
  }

export declare class GProp {
  constructor();
  HOperator(G: gp_Pnt, Q: gp_Pnt, Mass: Standard_Real, Operator: gp_Mat): void;
}

export declare class GProp_CelGProps extends GProp_GProps {
  SetLocation(CLocation: gp_Pnt): void;
  Perform_1(C: gp_Circ, U1: Standard_Real, U2: Standard_Real): void;
  Perform_2(C: gp_Lin, U1: Standard_Real, U2: Standard_Real): void;
}

  export declare class GProp_CelGProps_1 extends GProp_CelGProps {
    constructor();
  }

  export declare class GProp_CelGProps_2 extends GProp_CelGProps {
    constructor(C: gp_Circ, CLocation: gp_Pnt);
  }

  export declare class GProp_CelGProps_3 extends GProp_CelGProps {
    constructor(C: gp_Circ, U1: Standard_Real, U2: Standard_Real, CLocation: gp_Pnt);
  }

  export declare class GProp_CelGProps_4 extends GProp_CelGProps {
    constructor(C: gp_Lin, U1: Standard_Real, U2: Standard_Real, CLocation: gp_Pnt);
  }

export declare class GProp_PEquation {
  constructor(Pnts: TColgp_Array1OfPnt, Tol: Standard_Real)
  IsPlanar(): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  IsPoint(): Standard_Boolean;
  IsSpace(): Standard_Boolean;
  Plane(): gp_Pln;
  Line(): gp_Lin;
  Point(): gp_Pnt;
  Box(P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
}

export declare class GProp_PGProps extends GProp_GProps {
  AddPoint_1(P: gp_Pnt): void;
  AddPoint_2(P: gp_Pnt, Density: Standard_Real): void;
  Barycentre_1(Pnts: TColgp_Array1OfPnt): gp_Pnt;
  Barycentre_2(Pnts: TColgp_Array2OfPnt): gp_Pnt;
  Barycentre_3(Pnts: TColgp_Array1OfPnt, Density: TColStd_Array1OfReal, Mass: Standard_Real, G: gp_Pnt): void;
  Barycentre_4(Pnts: TColgp_Array2OfPnt, Density: TColStd_Array2OfReal, Mass: Standard_Real, G: gp_Pnt): void;
}

  export declare class GProp_PGProps_1 extends GProp_PGProps {
    constructor();
  }

  export declare class GProp_PGProps_2 extends GProp_PGProps {
    constructor(Pnts: TColgp_Array1OfPnt);
  }

  export declare class GProp_PGProps_3 extends GProp_PGProps {
    constructor(Pnts: TColgp_Array2OfPnt);
  }

  export declare class GProp_PGProps_4 extends GProp_PGProps {
    constructor(Pnts: TColgp_Array1OfPnt, Density: TColStd_Array1OfReal);
  }

  export declare class GProp_PGProps_5 extends GProp_PGProps {
    constructor(Pnts: TColgp_Array2OfPnt, Density: TColStd_Array2OfReal);
  }

export declare class GProp_PrincipalProps {
  constructor()
  HasSymmetryAxis_1(): Standard_Boolean;
  HasSymmetryAxis_2(aTol: Standard_Real): Standard_Boolean;
  HasSymmetryPoint_1(): Standard_Boolean;
  HasSymmetryPoint_2(aTol: Standard_Real): Standard_Boolean;
  Moments(Ixx: Standard_Real, Iyy: Standard_Real, Izz: Standard_Real): void;
  FirstAxisOfInertia(): gp_Vec;
  SecondAxisOfInertia(): gp_Vec;
  ThirdAxisOfInertia(): gp_Vec;
  RadiusOfGyration(Rxx: Standard_Real, Ryy: Standard_Real, Rzz: Standard_Real): void;
}

export declare class GProp_SelGProps extends GProp_GProps {
  SetLocation(SLocation: gp_Pnt): void;
  Perform_1(S: gp_Cylinder, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real): void;
  Perform_2(S: gp_Cone, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real): void;
  Perform_3(S: gp_Sphere, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real): void;
  Perform_4(S: gp_Torus, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real): void;
}

  export declare class GProp_SelGProps_1 extends GProp_SelGProps {
    constructor();
  }

  export declare class GProp_SelGProps_2 extends GProp_SelGProps {
    constructor(S: gp_Cylinder, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real, SLocation: gp_Pnt);
  }

  export declare class GProp_SelGProps_3 extends GProp_SelGProps {
    constructor(S: gp_Cone, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real, SLocation: gp_Pnt);
  }

  export declare class GProp_SelGProps_4 extends GProp_SelGProps {
    constructor(S: gp_Sphere, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real, SLocation: gp_Pnt);
  }

  export declare class GProp_SelGProps_5 extends GProp_SelGProps {
    constructor(S: gp_Torus, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real, SLocation: gp_Pnt);
  }

export declare class GProp_UndefinedAxis extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GProp_UndefinedAxis_1 extends GProp_UndefinedAxis {
    constructor();
  }

  export declare class GProp_UndefinedAxis_2 extends GProp_UndefinedAxis {
    constructor(theMessage: Standard_CString);
  }

export declare class GProp_VelGProps extends GProp_GProps {
  SetLocation(VLocation: gp_Pnt): void;
  Perform_1(S: gp_Cylinder, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real): void;
  Perform_2(S: gp_Cone, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real): void;
  Perform_3(S: gp_Sphere, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real): void;
  Perform_4(S: gp_Torus, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real): void;
}

  export declare class GProp_VelGProps_1 extends GProp_VelGProps {
    constructor();
  }

  export declare class GProp_VelGProps_2 extends GProp_VelGProps {
    constructor(S: gp_Cylinder, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real, VLocation: gp_Pnt);
  }

  export declare class GProp_VelGProps_3 extends GProp_VelGProps {
    constructor(S: gp_Cone, Alpha1: Standard_Real, Alpha2: Standard_Real, Z1: Standard_Real, Z2: Standard_Real, VLocation: gp_Pnt);
  }

  export declare class GProp_VelGProps_4 extends GProp_VelGProps {
    constructor(S: gp_Sphere, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real, VLocation: gp_Pnt);
  }

  export declare class GProp_VelGProps_5 extends GProp_VelGProps {
    constructor(S: gp_Torus, Teta1: Standard_Real, Teta2: Standard_Real, Alpha1: Standard_Real, Alpha2: Standard_Real, VLocation: gp_Pnt);
  }

export declare class Geom_AxisPlacement extends Geom_Geometry {
  SetAxis(A1: gp_Ax1): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(P: gp_Pnt): void;
  Angle(Other: any): Standard_Real;
  Axis(): gp_Ax1;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_Axis1Placement extends Geom_AxisPlacement {
  Ax1(): gp_Ax1;
  Reverse(): void;
  Reversed(): any;
  SetDirection(V: gp_Dir): void;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Axis1Placement_1 extends Geom_Axis1Placement {
    constructor(A1: gp_Ax1);
  }

  export declare class Geom_Axis1Placement_2 extends Geom_Axis1Placement {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class Geom_Axis2Placement extends Geom_AxisPlacement {
  SetAx2(A2: gp_Ax2): void;
  SetDirection(V: gp_Dir): void;
  SetXDirection(Vx: gp_Dir): void;
  SetYDirection(Vy: gp_Dir): void;
  Ax2(): gp_Ax2;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Axis2Placement_1 extends Geom_Axis2Placement {
    constructor(A2: gp_Ax2);
  }

  export declare class Geom_Axis2Placement_2 extends Geom_Axis2Placement {
    constructor(P: gp_Pnt, N: gp_Dir, Vx: gp_Dir);
  }

export declare class Geom_Point extends Geom_Geometry {
  Coord(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Pnt(): gp_Pnt;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  Distance(Other: any): Standard_Real;
  SquareDistance(Other: any): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_CartesianPoint extends Geom_Point {
  SetCoord(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  SetPnt(P: gp_Pnt): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetZ(Z: Standard_Real): void;
  Coord(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Pnt(): gp_Pnt;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_CartesianPoint_1 extends Geom_CartesianPoint {
    constructor(P: gp_Pnt);
  }

  export declare class Geom_CartesianPoint_2 extends Geom_CartesianPoint {
    constructor(X: Standard_Real, Y: Standard_Real, Z: Standard_Real);
  }

export declare class Geom_Vector extends Geom_Geometry {
  Reverse(): void;
  Reversed(): any;
  Angle(Other: any): Standard_Real;
  AngleWithRef(Other: any, VRef: any): Standard_Real;
  Coord(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  Cross(Other: any): void;
  Crossed(Other: any): any;
  CrossCross(V1: any, V2: any): void;
  CrossCrossed(V1: any, V2: any): any;
  Dot(Other: any): Standard_Real;
  DotCross(V1: any, V2: any): Standard_Real;
  Vec(): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_Direction extends Geom_Vector {
  SetCoord(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  SetDir(V: gp_Dir): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetZ(Z: Standard_Real): void;
  Dir(): gp_Dir;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Cross(Other: any): void;
  CrossCross(V1: any, V2: any): void;
  Crossed(Other: any): any;
  CrossCrossed(V1: any, V2: any): any;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Direction_1 extends Geom_Direction {
    constructor(X: Standard_Real, Y: Standard_Real, Z: Standard_Real);
  }

  export declare class Geom_Direction_2 extends Geom_Direction {
    constructor(V: gp_Dir);
  }

export declare class GeomEvaluator_OffsetCurve extends GeomEvaluator_Curve {
  SetOffsetValue(theOffset: Standard_Real): void;
  SetOffsetDirection(theDirection: gp_Dir): void;
  D0(theU: Standard_Real, theValue: gp_Pnt): void;
  D1(theU: Standard_Real, theValue: gp_Pnt, theD1: gp_Vec): void;
  D2(theU: Standard_Real, theValue: gp_Pnt, theD1: gp_Vec, theD2: gp_Vec): void;
  D3(theU: Standard_Real, theValue: gp_Pnt, theD1: gp_Vec, theD2: gp_Vec, theD3: gp_Vec): void;
  DN(theU: Standard_Real, theDeriv: Standard_Integer): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomEvaluator_OffsetCurve_1 extends GeomEvaluator_OffsetCurve {
    constructor(theBase: any, theOffset: Standard_Real, theDirection: gp_Dir);
  }

  export declare class GeomEvaluator_OffsetCurve_2 extends GeomEvaluator_OffsetCurve {
    constructor(theBase: any, theOffset: Standard_Real, theDirection: gp_Dir);
  }

export declare class Geom_OffsetCurve extends Geom_Curve {
  constructor(C: any, Offset: Standard_Real, V: gp_Dir, isNotCheckC0: Standard_Boolean)
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  SetBasisCurve(C: any, isNotCheckC0: Standard_Boolean): void;
  SetDirection(V: gp_Dir): void;
  SetOffsetValue(D: Standard_Real): void;
  BasisCurve(): any;
  Continuity(): GeomAbs_Shape;
  Direction(): gp_Dir;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Offset(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Transform(T: gp_Trsf): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Copy(): any;
  GetBasisCurveContinuity(): GeomAbs_Shape;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_OsculatingSurface extends Standard_Transient {
  Init(BS: any, Tol: Standard_Real): void;
  BasisSurface(): any;
  Tolerance(): Standard_Real;
  UOscSurf(U: Standard_Real, V: Standard_Real, t: Standard_Boolean, L: any): Standard_Boolean;
  VOscSurf(U: Standard_Real, V: Standard_Real, t: Standard_Boolean, L: any): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_OsculatingSurface_1 extends Geom_OsculatingSurface {
    constructor();
  }

  export declare class Geom_OsculatingSurface_2 extends Geom_OsculatingSurface {
    constructor(BS: any, Tol: Standard_Real);
  }

export declare class GeomEvaluator_OffsetSurface extends GeomEvaluator_Surface {
  SetOffsetValue(theOffset: Standard_Real): void;
  D0(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt): void;
  D1(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec): void;
  D2(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec): void;
  D3(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec, theD3U: gp_Vec, theD3V: gp_Vec, theD3UUV: gp_Vec, theD3UVV: gp_Vec): void;
  DN(theU: Standard_Real, theV: Standard_Real, theDerU: Standard_Integer, theDerV: Standard_Integer): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomEvaluator_OffsetSurface_1 extends GeomEvaluator_OffsetSurface {
    constructor(theBase: any, theOffset: Standard_Real, theOscSurf: any);
  }

  export declare class GeomEvaluator_OffsetSurface_2 extends GeomEvaluator_OffsetSurface {
    constructor(theBase: any, theOffset: Standard_Real, theOscSurf: any);
  }

export declare class Geom_OffsetSurface extends Geom_Surface {
  constructor(S: any, Offset: Standard_Real, isNotCheckC0: Standard_Boolean)
  SetBasisSurface(S: any, isNotCheckC0: Standard_Boolean): void;
  SetOffsetValue(D: Standard_Real): void;
  Offset(): Standard_Real;
  BasisSurface(): any;
  OsculatingSurface(): any;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Copy(): any;
  Surface(): any;
  UOsculatingSurface(U: Standard_Real, V: Standard_Real, IsOpposite: Standard_Boolean, UOsculSurf: any): Standard_Boolean;
  VOsculatingSurface(U: Standard_Real, V: Standard_Real, IsOpposite: Standard_Boolean, VOsculSurf: any): Standard_Boolean;
  GetBasisSurfContinuity(): GeomAbs_Shape;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_Parabola extends Geom_Conic {
  SetFocal(Focal: Standard_Real): void;
  SetParab(Prb: gp_Parab): void;
  Parab(): gp_Parab;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Directrix(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focus(): gp_Pnt;
  Focal(): Standard_Real;
  Parameter(): Standard_Real;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_Parabola_1 extends Geom_Parabola {
    constructor(Prb: gp_Parab);
  }

  export declare class Geom_Parabola_2 extends Geom_Parabola {
    constructor(A2: gp_Ax2, Focal: Standard_Real);
  }

  export declare class Geom_Parabola_3 extends Geom_Parabola {
    constructor(D: gp_Ax1, F: gp_Pnt);
  }

export declare class Geom_SphericalSurface extends Geom_ElementarySurface {
  SetRadius(R: Standard_Real): void;
  SetSphere(S: gp_Sphere): void;
  Sphere(): gp_Sphere;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Area(): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  Radius(): Standard_Real;
  Volume(): Standard_Real;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_SphericalSurface_1 extends Geom_SphericalSurface {
    constructor(A3: gp_Ax3, Radius: Standard_Real);
  }

  export declare class Geom_SphericalSurface_2 extends Geom_SphericalSurface {
    constructor(S: gp_Sphere);
  }

export declare class Geom_SweptSurface extends Geom_Surface {
  Continuity(): GeomAbs_Shape;
  Direction(): gp_Dir;
  BasisCurve(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomEvaluator_SurfaceOfExtrusion extends GeomEvaluator_Surface {
  SetDirection(theDirection: gp_Dir): void;
  D0(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt): void;
  D1(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec): void;
  D2(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec): void;
  D3(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec, theD3U: gp_Vec, theD3V: gp_Vec, theD3UUV: gp_Vec, theD3UVV: gp_Vec): void;
  DN(theU: Standard_Real, theV: Standard_Real, theDerU: Standard_Integer, theDerV: Standard_Integer): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomEvaluator_SurfaceOfExtrusion_1 extends GeomEvaluator_SurfaceOfExtrusion {
    constructor(theBase: any, theExtrusionDir: gp_Dir);
  }

  export declare class GeomEvaluator_SurfaceOfExtrusion_2 extends GeomEvaluator_SurfaceOfExtrusion {
    constructor(theBase: any, theExtrusionDir: gp_Dir);
  }

export declare class Geom_SurfaceOfLinearExtrusion extends Geom_SweptSurface {
  constructor(C: any, V: gp_Dir)
  SetDirection(V: gp_Dir): void;
  SetBasisCurve(C: any): void;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomEvaluator_SurfaceOfRevolution extends GeomEvaluator_Surface {
  SetDirection(theDirection: gp_Dir): void;
  SetLocation(theLocation: gp_Pnt): void;
  SetAxis(theAxis: gp_Ax1): void;
  D0(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt): void;
  D1(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec): void;
  D2(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec): void;
  D3(theU: Standard_Real, theV: Standard_Real, theValue: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec, theD3U: gp_Vec, theD3V: gp_Vec, theD3UUV: gp_Vec, theD3UVV: gp_Vec): void;
  DN(theU: Standard_Real, theV: Standard_Real, theDerU: Standard_Integer, theDerV: Standard_Integer): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomEvaluator_SurfaceOfRevolution_1 extends GeomEvaluator_SurfaceOfRevolution {
    constructor(theBase: any, theRevolDir: gp_Dir, theRevolLoc: gp_Pnt);
  }

  export declare class GeomEvaluator_SurfaceOfRevolution_2 extends GeomEvaluator_SurfaceOfRevolution {
    constructor(theBase: any, theRevolDir: gp_Dir, theRevolLoc: gp_Pnt);
  }

export declare class Geom_SurfaceOfRevolution extends Geom_SweptSurface {
  constructor(C: any, A1: gp_Ax1)
  SetAxis(A1: gp_Ax1): void;
  SetDirection(V: gp_Dir): void;
  SetBasisCurve(C: any): void;
  SetLocation(P: gp_Pnt): void;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  ReferencePlane(): gp_Ax2;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom_ToroidalSurface extends Geom_ElementarySurface {
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  SetTorus(T: gp_Torus): void;
  Torus(): gp_Torus;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReversedParameter(U: Standard_Real): Standard_Real;
  Area(): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(Coef: TColStd_Array1OfReal): void;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Volume(): Standard_Real;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_ToroidalSurface_1 extends Geom_ToroidalSurface {
    constructor(A3: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class Geom_ToroidalSurface_2 extends Geom_ToroidalSurface {
    constructor(T: gp_Torus);
  }

export declare class Geom_Transformation extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetMirror_1(thePnt: gp_Pnt): void;
  SetMirror_2(theA1: gp_Ax1): void;
  SetMirror_3(theA2: gp_Ax2): void;
  SetRotation(theA1: gp_Ax1, theAng: Standard_Real): void;
  SetScale(thePnt: gp_Pnt, theScale: Standard_Real): void;
  SetTransformation_1(theFromSystem1: gp_Ax3, theToSystem2: gp_Ax3): void;
  SetTransformation_2(theToSystem: gp_Ax3): void;
  SetTranslation_1(theVec: gp_Vec): void;
  SetTranslation_2(P1: gp_Pnt, P2: gp_Pnt): void;
  SetTrsf(theTrsf: gp_Trsf): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  Trsf(): gp_Trsf;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): any;
  Multiplied(Other: any): any;
  Multiply(theOther: any): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): any;
  PreMultiply(Other: any): void;
  Transforms(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Geom_Transformation_1 extends Geom_Transformation {
    constructor();
  }

  export declare class Geom_Transformation_2 extends Geom_Transformation {
    constructor(T: gp_Trsf);
  }

export declare class Geom_UndefinedDerivative extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_UndefinedDerivative_1 extends Geom_UndefinedDerivative {
    constructor();
  }

  export declare class Geom_UndefinedDerivative_2 extends Geom_UndefinedDerivative {
    constructor(theMessage: Standard_CString);
  }

export declare class Geom_UndefinedValue extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_UndefinedValue_1 extends Geom_UndefinedValue {
    constructor();
  }

  export declare class Geom_UndefinedValue_2 extends Geom_UndefinedValue {
    constructor(theMessage: Standard_CString);
  }

export declare class Geom_VectorWithMagnitude extends Geom_Vector {
  SetCoord(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  SetVec(V: gp_Vec): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetZ(Z: Standard_Real): void;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(Other: any): void;
  Added(Other: any): any;
  Cross(Other: any): void;
  Crossed(Other: any): any;
  CrossCross(V1: any, V2: any): void;
  CrossCrossed(V1: any, V2: any): any;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): any;
  Multiplied(Scalar: Standard_Real): any;
  Multiply(Scalar: Standard_Real): void;
  Normalize(): void;
  Normalized(): any;
  Subtract(Other: any): void;
  Subtracted(Other: any): any;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Geom_VectorWithMagnitude_1 extends Geom_VectorWithMagnitude {
    constructor(V: gp_Vec);
  }

  export declare class Geom_VectorWithMagnitude_2 extends Geom_VectorWithMagnitude {
    constructor(X: Standard_Real, Y: Standard_Real, Z: Standard_Real);
  }

  export declare class Geom_VectorWithMagnitude_3 extends Geom_VectorWithMagnitude {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class GeomAdaptor {
  constructor();
  MakeCurve(C: Adaptor3d_Curve): any;
  MakeSurface(theS: Adaptor3d_Surface, theTrimFlag: Standard_Boolean): any;
}

export declare class GeomAdaptor_GHCurve extends Adaptor3d_HCurve {
  Set(C: GeomAdaptor_Curve): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): GeomAdaptor_Curve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomAdaptor_GHCurve_1 extends GeomAdaptor_GHCurve {
    constructor();
  }

  export declare class GeomAdaptor_GHCurve_2 extends GeomAdaptor_GHCurve {
    constructor(C: GeomAdaptor_Curve);
  }

export declare class GeomAdaptor_HCurve extends GeomAdaptor_GHCurve {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomAdaptor_HCurve_1 extends GeomAdaptor_HCurve {
    constructor();
  }

  export declare class GeomAdaptor_HCurve_2 extends GeomAdaptor_HCurve {
    constructor(AS: GeomAdaptor_Curve);
  }

  export declare class GeomAdaptor_HCurve_3 extends GeomAdaptor_HCurve {
    constructor(S: any);
  }

  export declare class GeomAdaptor_HCurve_4 extends GeomAdaptor_HCurve {
    constructor(S: any, UFirst: Standard_Real, ULast: Standard_Real);
  }

export declare class GeomAdaptor_SurfaceOfLinearExtrusion extends GeomAdaptor_Surface {
  Load_1(C: any): void;
  Load_2(V: gp_Dir): void;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: GeomAbs_Shape): Standard_Integer;
  UIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): any;
}

  export declare class GeomAdaptor_SurfaceOfLinearExtrusion_1 extends GeomAdaptor_SurfaceOfLinearExtrusion {
    constructor();
  }

  export declare class GeomAdaptor_SurfaceOfLinearExtrusion_2 extends GeomAdaptor_SurfaceOfLinearExtrusion {
    constructor(C: any);
  }

  export declare class GeomAdaptor_SurfaceOfLinearExtrusion_3 extends GeomAdaptor_SurfaceOfLinearExtrusion {
    constructor(C: any, V: gp_Dir);
  }

export declare class GeomAdaptor_HSurfaceOfLinearExtrusion extends Adaptor3d_HSurface {
  Set(S: GeomAdaptor_SurfaceOfLinearExtrusion): void;
  Surface(): Adaptor3d_Surface;
  ChangeSurface(): GeomAdaptor_SurfaceOfLinearExtrusion;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomAdaptor_HSurfaceOfLinearExtrusion_1 extends GeomAdaptor_HSurfaceOfLinearExtrusion {
    constructor();
  }

  export declare class GeomAdaptor_HSurfaceOfLinearExtrusion_2 extends GeomAdaptor_HSurfaceOfLinearExtrusion {
    constructor(S: GeomAdaptor_SurfaceOfLinearExtrusion);
  }

export declare class GeomAdaptor_SurfaceOfRevolution extends GeomAdaptor_Surface {
  Load_1(C: any): void;
  Load_2(V: gp_Ax1): void;
  AxeOfRevolution(): gp_Ax1;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: GeomAbs_Shape): Standard_Integer;
  UIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  VIntervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  VDegree(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  Axis(): gp_Ax3;
  BasisCurve(): any;
}

  export declare class GeomAdaptor_SurfaceOfRevolution_1 extends GeomAdaptor_SurfaceOfRevolution {
    constructor();
  }

  export declare class GeomAdaptor_SurfaceOfRevolution_2 extends GeomAdaptor_SurfaceOfRevolution {
    constructor(C: any);
  }

  export declare class GeomAdaptor_SurfaceOfRevolution_3 extends GeomAdaptor_SurfaceOfRevolution {
    constructor(C: any, V: gp_Ax1);
  }

export declare class GeomAdaptor_HSurfaceOfRevolution extends Adaptor3d_HSurface {
  Set(S: GeomAdaptor_SurfaceOfRevolution): void;
  Surface(): Adaptor3d_Surface;
  ChangeSurface(): GeomAdaptor_SurfaceOfRevolution;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomAdaptor_HSurfaceOfRevolution_1 extends GeomAdaptor_HSurfaceOfRevolution {
    constructor();
  }

  export declare class GeomAdaptor_HSurfaceOfRevolution_2 extends GeomAdaptor_HSurfaceOfRevolution {
    constructor(S: GeomAdaptor_SurfaceOfRevolution);
  }

export declare class GeomLProp {
  constructor();
  Continuity_1(C1: any, C2: any, u1: Standard_Real, u2: Standard_Real, r1: Standard_Boolean, r2: Standard_Boolean, tl: Standard_Real, ta: Standard_Real): GeomAbs_Shape;
  Continuity_2(C1: any, C2: any, u1: Standard_Real, u2: Standard_Real, r1: Standard_Boolean, r2: Standard_Boolean): GeomAbs_Shape;
}

export declare class GeomLProp_CLProps {
  SetParameter(U: Standard_Real): void;
  SetCurve(C: any): void;
  Value(): gp_Pnt;
  D1(): gp_Vec;
  D2(): gp_Vec;
  D3(): gp_Vec;
  IsTangentDefined(): Standard_Boolean;
  Tangent(D: gp_Dir): void;
  Curvature(): Standard_Real;
  Normal(N: gp_Dir): void;
  CentreOfCurvature(P: gp_Pnt): void;
}

  export declare class GeomLProp_CLProps_1 extends GeomLProp_CLProps {
    constructor(C: any, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class GeomLProp_CLProps_2 extends GeomLProp_CLProps {
    constructor(C: any, U: Standard_Real, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class GeomLProp_CLProps_3 extends GeomLProp_CLProps {
    constructor(N: Standard_Integer, Resolution: Standard_Real);
  }

export declare class GeomLProp_CurveTool {
  constructor();
  Value(C: any, U: Standard_Real, P: gp_Pnt): void;
  D1(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  Continuity(C: any): Standard_Integer;
  FirstParameter(C: any): Standard_Real;
  LastParameter(C: any): Standard_Real;
}

export declare class GeomLProp_SurfaceTool {
  constructor();
  Value(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, DUV: gp_Vec): void;
  DN(S: any, U: Standard_Real, V: Standard_Real, IU: Standard_Integer, IV: Standard_Integer): gp_Vec;
  Continuity(S: any): Standard_Integer;
  Bounds(S: any, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
}

export declare class LProp3d_CLProps {
  SetParameter(U: Standard_Real): void;
  SetCurve(C: any): void;
  Value(): gp_Pnt;
  D1(): gp_Vec;
  D2(): gp_Vec;
  D3(): gp_Vec;
  IsTangentDefined(): Standard_Boolean;
  Tangent(D: gp_Dir): void;
  Curvature(): Standard_Real;
  Normal(N: gp_Dir): void;
  CentreOfCurvature(P: gp_Pnt): void;
}

  export declare class LProp3d_CLProps_1 extends LProp3d_CLProps {
    constructor(C: any, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class LProp3d_CLProps_2 extends LProp3d_CLProps {
    constructor(C: any, U: Standard_Real, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class LProp3d_CLProps_3 extends LProp3d_CLProps {
    constructor(N: Standard_Integer, Resolution: Standard_Real);
  }

export declare class LProp3d_CurveTool {
  constructor();
  Value(C: any, U: Standard_Real, P: gp_Pnt): void;
  D1(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(C: any, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  Continuity(C: any): Standard_Integer;
  FirstParameter(C: any): Standard_Real;
  LastParameter(C: any): Standard_Real;
}

export declare class LProp3d_SLProps {
  SetSurface(S: any): void;
  SetParameters(U: Standard_Real, V: Standard_Real): void;
  Value(): gp_Pnt;
  D1U(): gp_Vec;
  D1V(): gp_Vec;
  D2U(): gp_Vec;
  D2V(): gp_Vec;
  DUV(): gp_Vec;
  IsTangentUDefined(): Standard_Boolean;
  TangentU(D: gp_Dir): void;
  IsTangentVDefined(): Standard_Boolean;
  TangentV(D: gp_Dir): void;
  IsNormalDefined(): Standard_Boolean;
  Normal(): gp_Dir;
  IsCurvatureDefined(): Standard_Boolean;
  IsUmbilic(): Standard_Boolean;
  MaxCurvature(): Standard_Real;
  MinCurvature(): Standard_Real;
  CurvatureDirections(MaxD: gp_Dir, MinD: gp_Dir): void;
  MeanCurvature(): Standard_Real;
  GaussianCurvature(): Standard_Real;
}

  export declare class LProp3d_SLProps_1 extends LProp3d_SLProps {
    constructor(S: any, U: Standard_Real, V: Standard_Real, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class LProp3d_SLProps_2 extends LProp3d_SLProps {
    constructor(S: any, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class LProp3d_SLProps_3 extends LProp3d_SLProps {
    constructor(N: Standard_Integer, Resolution: Standard_Real);
  }

export declare class LProp3d_SurfaceTool {
  constructor();
  Value(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, DUV: gp_Vec): void;
  DN(S: any, U: Standard_Real, V: Standard_Real, IU: Standard_Integer, IV: Standard_Integer): gp_Vec;
  Continuity(S: any): Standard_Integer;
  Bounds(S: any, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
}

export declare class Handle_Geom_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Geometry): void;
  get(): Geom_Geometry;
}

  export declare class Handle_Geom_Geometry_1 extends Handle_Geom_Geometry {
    constructor();
  }

  export declare class Handle_Geom_Geometry_2 extends Handle_Geom_Geometry {
    constructor(thePtr: Geom_Geometry);
  }

  export declare class Handle_Geom_Geometry_3 extends Handle_Geom_Geometry {
    constructor(theHandle: Handle_Geom_Geometry);
  }

  export declare class Handle_Geom_Geometry_4 extends Handle_Geom_Geometry {
    constructor(theHandle: Handle_Geom_Geometry);
  }

export declare class Handle_Geom_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Curve): void;
  get(): Geom_Curve;
}

  export declare class Handle_Geom_Curve_1 extends Handle_Geom_Curve {
    constructor();
  }

  export declare class Handle_Geom_Curve_2 extends Handle_Geom_Curve {
    constructor(thePtr: Geom_Curve);
  }

  export declare class Handle_Geom_Curve_3 extends Handle_Geom_Curve {
    constructor(theHandle: Handle_Geom_Curve);
  }

  export declare class Handle_Geom_Curve_4 extends Handle_Geom_Curve {
    constructor(theHandle: Handle_Geom_Curve);
  }

export declare class Handle_Geom_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Surface): void;
  get(): Geom_Surface;
}

  export declare class Handle_Geom_Surface_1 extends Handle_Geom_Surface {
    constructor();
  }

  export declare class Handle_Geom_Surface_2 extends Handle_Geom_Surface {
    constructor(thePtr: Geom_Surface);
  }

  export declare class Handle_Geom_Surface_3 extends Handle_Geom_Surface {
    constructor(theHandle: Handle_Geom_Surface);
  }

  export declare class Handle_Geom_Surface_4 extends Handle_Geom_Surface {
    constructor(theHandle: Handle_Geom_Surface);
  }

export declare class Handle_Geom_ElementarySurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_ElementarySurface): void;
  get(): Geom_ElementarySurface;
}

  export declare class Handle_Geom_ElementarySurface_1 extends Handle_Geom_ElementarySurface {
    constructor();
  }

  export declare class Handle_Geom_ElementarySurface_2 extends Handle_Geom_ElementarySurface {
    constructor(thePtr: Geom_ElementarySurface);
  }

  export declare class Handle_Geom_ElementarySurface_3 extends Handle_Geom_ElementarySurface {
    constructor(theHandle: Handle_Geom_ElementarySurface);
  }

  export declare class Handle_Geom_ElementarySurface_4 extends Handle_Geom_ElementarySurface {
    constructor(theHandle: Handle_Geom_ElementarySurface);
  }

export declare class Handle_Geom_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Plane): void;
  get(): Geom_Plane;
}

  export declare class Handle_Geom_Plane_1 extends Handle_Geom_Plane {
    constructor();
  }

  export declare class Handle_Geom_Plane_2 extends Handle_Geom_Plane {
    constructor(thePtr: Geom_Plane);
  }

  export declare class Handle_Geom_Plane_3 extends Handle_Geom_Plane {
    constructor(theHandle: Handle_Geom_Plane);
  }

  export declare class Handle_Geom_Plane_4 extends Handle_Geom_Plane {
    constructor(theHandle: Handle_Geom_Plane);
  }

export declare class Handle_Geom_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Line): void;
  get(): Geom_Line;
}

  export declare class Handle_Geom_Line_1 extends Handle_Geom_Line {
    constructor();
  }

  export declare class Handle_Geom_Line_2 extends Handle_Geom_Line {
    constructor(thePtr: Geom_Line);
  }

  export declare class Handle_Geom_Line_3 extends Handle_Geom_Line {
    constructor(theHandle: Handle_Geom_Line);
  }

  export declare class Handle_Geom_Line_4 extends Handle_Geom_Line {
    constructor(theHandle: Handle_Geom_Line);
  }

export declare class Handle_Adaptor3d_HCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_HCurve): void;
  get(): Adaptor3d_HCurve;
}

  export declare class Handle_Adaptor3d_HCurve_1 extends Handle_Adaptor3d_HCurve {
    constructor();
  }

  export declare class Handle_Adaptor3d_HCurve_2 extends Handle_Adaptor3d_HCurve {
    constructor(thePtr: Adaptor3d_HCurve);
  }

  export declare class Handle_Adaptor3d_HCurve_3 extends Handle_Adaptor3d_HCurve {
    constructor(theHandle: Handle_Adaptor3d_HCurve);
  }

  export declare class Handle_Adaptor3d_HCurve_4 extends Handle_Adaptor3d_HCurve {
    constructor(theHandle: Handle_Adaptor3d_HCurve);
  }

export declare class Handle_Adaptor3d_HCurveOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_HCurveOnSurface): void;
  get(): Adaptor3d_HCurveOnSurface;
}

  export declare class Handle_Adaptor3d_HCurveOnSurface_1 extends Handle_Adaptor3d_HCurveOnSurface {
    constructor();
  }

  export declare class Handle_Adaptor3d_HCurveOnSurface_2 extends Handle_Adaptor3d_HCurveOnSurface {
    constructor(thePtr: Adaptor3d_HCurveOnSurface);
  }

  export declare class Handle_Adaptor3d_HCurveOnSurface_3 extends Handle_Adaptor3d_HCurveOnSurface {
    constructor(theHandle: Handle_Adaptor3d_HCurveOnSurface);
  }

  export declare class Handle_Adaptor3d_HCurveOnSurface_4 extends Handle_Adaptor3d_HCurveOnSurface {
    constructor(theHandle: Handle_Adaptor3d_HCurveOnSurface);
  }

export declare class Handle_Adaptor3d_HIsoCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_HIsoCurve): void;
  get(): Adaptor3d_HIsoCurve;
}

  export declare class Handle_Adaptor3d_HIsoCurve_1 extends Handle_Adaptor3d_HIsoCurve {
    constructor();
  }

  export declare class Handle_Adaptor3d_HIsoCurve_2 extends Handle_Adaptor3d_HIsoCurve {
    constructor(thePtr: Adaptor3d_HIsoCurve);
  }

  export declare class Handle_Adaptor3d_HIsoCurve_3 extends Handle_Adaptor3d_HIsoCurve {
    constructor(theHandle: Handle_Adaptor3d_HIsoCurve);
  }

  export declare class Handle_Adaptor3d_HIsoCurve_4 extends Handle_Adaptor3d_HIsoCurve {
    constructor(theHandle: Handle_Adaptor3d_HIsoCurve);
  }

export declare class Handle_Adaptor3d_HSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_HSurface): void;
  get(): Adaptor3d_HSurface;
}

  export declare class Handle_Adaptor3d_HSurface_1 extends Handle_Adaptor3d_HSurface {
    constructor();
  }

  export declare class Handle_Adaptor3d_HSurface_2 extends Handle_Adaptor3d_HSurface {
    constructor(thePtr: Adaptor3d_HSurface);
  }

  export declare class Handle_Adaptor3d_HSurface_3 extends Handle_Adaptor3d_HSurface {
    constructor(theHandle: Handle_Adaptor3d_HSurface);
  }

  export declare class Handle_Adaptor3d_HSurface_4 extends Handle_Adaptor3d_HSurface {
    constructor(theHandle: Handle_Adaptor3d_HSurface);
  }

export declare class Handle_Geom_BoundedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BoundedSurface): void;
  get(): Geom_BoundedSurface;
}

  export declare class Handle_Geom_BoundedSurface_1 extends Handle_Geom_BoundedSurface {
    constructor();
  }

  export declare class Handle_Geom_BoundedSurface_2 extends Handle_Geom_BoundedSurface {
    constructor(thePtr: Geom_BoundedSurface);
  }

  export declare class Handle_Geom_BoundedSurface_3 extends Handle_Geom_BoundedSurface {
    constructor(theHandle: Handle_Geom_BoundedSurface);
  }

  export declare class Handle_Geom_BoundedSurface_4 extends Handle_Geom_BoundedSurface {
    constructor(theHandle: Handle_Geom_BoundedSurface);
  }

export declare class Handle_Geom_BezierSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BezierSurface): void;
  get(): Geom_BezierSurface;
}

  export declare class Handle_Geom_BezierSurface_1 extends Handle_Geom_BezierSurface {
    constructor();
  }

  export declare class Handle_Geom_BezierSurface_2 extends Handle_Geom_BezierSurface {
    constructor(thePtr: Geom_BezierSurface);
  }

  export declare class Handle_Geom_BezierSurface_3 extends Handle_Geom_BezierSurface {
    constructor(theHandle: Handle_Geom_BezierSurface);
  }

  export declare class Handle_Geom_BezierSurface_4 extends Handle_Geom_BezierSurface {
    constructor(theHandle: Handle_Geom_BezierSurface);
  }

export declare class Handle_Geom_BSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BSplineSurface): void;
  get(): Geom_BSplineSurface;
}

  export declare class Handle_Geom_BSplineSurface_1 extends Handle_Geom_BSplineSurface {
    constructor();
  }

  export declare class Handle_Geom_BSplineSurface_2 extends Handle_Geom_BSplineSurface {
    constructor(thePtr: Geom_BSplineSurface);
  }

  export declare class Handle_Geom_BSplineSurface_3 extends Handle_Geom_BSplineSurface {
    constructor(theHandle: Handle_Geom_BSplineSurface);
  }

  export declare class Handle_Geom_BSplineSurface_4 extends Handle_Geom_BSplineSurface {
    constructor(theHandle: Handle_Geom_BSplineSurface);
  }

export declare class Handle_Adaptor3d_HVertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_HVertex): void;
  get(): Adaptor3d_HVertex;
}

  export declare class Handle_Adaptor3d_HVertex_1 extends Handle_Adaptor3d_HVertex {
    constructor();
  }

  export declare class Handle_Adaptor3d_HVertex_2 extends Handle_Adaptor3d_HVertex {
    constructor(thePtr: Adaptor3d_HVertex);
  }

  export declare class Handle_Adaptor3d_HVertex_3 extends Handle_Adaptor3d_HVertex {
    constructor(theHandle: Handle_Adaptor3d_HVertex);
  }

  export declare class Handle_Adaptor3d_HVertex_4 extends Handle_Adaptor3d_HVertex {
    constructor(theHandle: Handle_Adaptor3d_HVertex);
  }

export declare class Handle_Adaptor3d_TopolTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_TopolTool): void;
  get(): Adaptor3d_TopolTool;
}

  export declare class Handle_Adaptor3d_TopolTool_1 extends Handle_Adaptor3d_TopolTool {
    constructor();
  }

  export declare class Handle_Adaptor3d_TopolTool_2 extends Handle_Adaptor3d_TopolTool {
    constructor(thePtr: Adaptor3d_TopolTool);
  }

  export declare class Handle_Adaptor3d_TopolTool_3 extends Handle_Adaptor3d_TopolTool {
    constructor(theHandle: Handle_Adaptor3d_TopolTool);
  }

  export declare class Handle_Adaptor3d_TopolTool_4 extends Handle_Adaptor3d_TopolTool {
    constructor(theHandle: Handle_Adaptor3d_TopolTool);
  }

export declare class Handle_TColGeom_HArray1OfSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom_HArray1OfSurface): void;
  get(): TColGeom_HArray1OfSurface;
}

  export declare class Handle_TColGeom_HArray1OfSurface_1 extends Handle_TColGeom_HArray1OfSurface {
    constructor();
  }

  export declare class Handle_TColGeom_HArray1OfSurface_2 extends Handle_TColGeom_HArray1OfSurface {
    constructor(thePtr: TColGeom_HArray1OfSurface);
  }

  export declare class Handle_TColGeom_HArray1OfSurface_3 extends Handle_TColGeom_HArray1OfSurface {
    constructor(theHandle: Handle_TColGeom_HArray1OfSurface);
  }

  export declare class Handle_TColGeom_HArray1OfSurface_4 extends Handle_TColGeom_HArray1OfSurface {
    constructor(theHandle: Handle_TColGeom_HArray1OfSurface);
  }

export declare class Handle_Geom_BoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BoundedCurve): void;
  get(): Geom_BoundedCurve;
}

  export declare class Handle_Geom_BoundedCurve_1 extends Handle_Geom_BoundedCurve {
    constructor();
  }

  export declare class Handle_Geom_BoundedCurve_2 extends Handle_Geom_BoundedCurve {
    constructor(thePtr: Geom_BoundedCurve);
  }

  export declare class Handle_Geom_BoundedCurve_3 extends Handle_Geom_BoundedCurve {
    constructor(theHandle: Handle_Geom_BoundedCurve);
  }

  export declare class Handle_Geom_BoundedCurve_4 extends Handle_Geom_BoundedCurve {
    constructor(theHandle: Handle_Geom_BoundedCurve);
  }

export declare class Handle_Geom_BSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BSplineCurve): void;
  get(): Geom_BSplineCurve;
}

  export declare class Handle_Geom_BSplineCurve_1 extends Handle_Geom_BSplineCurve {
    constructor();
  }

  export declare class Handle_Geom_BSplineCurve_2 extends Handle_Geom_BSplineCurve {
    constructor(thePtr: Geom_BSplineCurve);
  }

  export declare class Handle_Geom_BSplineCurve_3 extends Handle_Geom_BSplineCurve {
    constructor(theHandle: Handle_Geom_BSplineCurve);
  }

  export declare class Handle_Geom_BSplineCurve_4 extends Handle_Geom_BSplineCurve {
    constructor(theHandle: Handle_Geom_BSplineCurve);
  }

export declare class Handle_GeomEvaluator_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomEvaluator_Surface): void;
  get(): GeomEvaluator_Surface;
}

  export declare class Handle_GeomEvaluator_Surface_1 extends Handle_GeomEvaluator_Surface {
    constructor();
  }

  export declare class Handle_GeomEvaluator_Surface_2 extends Handle_GeomEvaluator_Surface {
    constructor(thePtr: GeomEvaluator_Surface);
  }

  export declare class Handle_GeomEvaluator_Surface_3 extends Handle_GeomEvaluator_Surface {
    constructor(theHandle: Handle_GeomEvaluator_Surface);
  }

  export declare class Handle_GeomEvaluator_Surface_4 extends Handle_GeomEvaluator_Surface {
    constructor(theHandle: Handle_GeomEvaluator_Surface);
  }

export declare class Handle_GeomEvaluator_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomEvaluator_Curve): void;
  get(): GeomEvaluator_Curve;
}

  export declare class Handle_GeomEvaluator_Curve_1 extends Handle_GeomEvaluator_Curve {
    constructor();
  }

  export declare class Handle_GeomEvaluator_Curve_2 extends Handle_GeomEvaluator_Curve {
    constructor(thePtr: GeomEvaluator_Curve);
  }

  export declare class Handle_GeomEvaluator_Curve_3 extends Handle_GeomEvaluator_Curve {
    constructor(theHandle: Handle_GeomEvaluator_Curve);
  }

  export declare class Handle_GeomEvaluator_Curve_4 extends Handle_GeomEvaluator_Curve {
    constructor(theHandle: Handle_GeomEvaluator_Curve);
  }

export declare class Handle_Geom_BezierCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BezierCurve): void;
  get(): Geom_BezierCurve;
}

  export declare class Handle_Geom_BezierCurve_1 extends Handle_Geom_BezierCurve {
    constructor();
  }

  export declare class Handle_Geom_BezierCurve_2 extends Handle_Geom_BezierCurve {
    constructor(thePtr: Geom_BezierCurve);
  }

  export declare class Handle_Geom_BezierCurve_3 extends Handle_Geom_BezierCurve {
    constructor(theHandle: Handle_Geom_BezierCurve);
  }

  export declare class Handle_Geom_BezierCurve_4 extends Handle_Geom_BezierCurve {
    constructor(theHandle: Handle_Geom_BezierCurve);
  }

export declare class Handle_GeomAdaptor_GHSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_GHSurface): void;
  get(): GeomAdaptor_GHSurface;
}

  export declare class Handle_GeomAdaptor_GHSurface_1 extends Handle_GeomAdaptor_GHSurface {
    constructor();
  }

  export declare class Handle_GeomAdaptor_GHSurface_2 extends Handle_GeomAdaptor_GHSurface {
    constructor(thePtr: GeomAdaptor_GHSurface);
  }

  export declare class Handle_GeomAdaptor_GHSurface_3 extends Handle_GeomAdaptor_GHSurface {
    constructor(theHandle: Handle_GeomAdaptor_GHSurface);
  }

  export declare class Handle_GeomAdaptor_GHSurface_4 extends Handle_GeomAdaptor_GHSurface {
    constructor(theHandle: Handle_GeomAdaptor_GHSurface);
  }

export declare class Handle_GeomAdaptor_HSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_HSurface): void;
  get(): GeomAdaptor_HSurface;
}

  export declare class Handle_GeomAdaptor_HSurface_1 extends Handle_GeomAdaptor_HSurface {
    constructor();
  }

  export declare class Handle_GeomAdaptor_HSurface_2 extends Handle_GeomAdaptor_HSurface {
    constructor(thePtr: GeomAdaptor_HSurface);
  }

  export declare class Handle_GeomAdaptor_HSurface_3 extends Handle_GeomAdaptor_HSurface {
    constructor(theHandle: Handle_GeomAdaptor_HSurface);
  }

  export declare class Handle_GeomAdaptor_HSurface_4 extends Handle_GeomAdaptor_HSurface {
    constructor(theHandle: Handle_GeomAdaptor_HSurface);
  }

export declare class Handle_Geom_TrimmedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_TrimmedCurve): void;
  get(): Geom_TrimmedCurve;
}

  export declare class Handle_Geom_TrimmedCurve_1 extends Handle_Geom_TrimmedCurve {
    constructor();
  }

  export declare class Handle_Geom_TrimmedCurve_2 extends Handle_Geom_TrimmedCurve {
    constructor(thePtr: Geom_TrimmedCurve);
  }

  export declare class Handle_Geom_TrimmedCurve_3 extends Handle_Geom_TrimmedCurve {
    constructor(theHandle: Handle_Geom_TrimmedCurve);
  }

  export declare class Handle_Geom_TrimmedCurve_4 extends Handle_Geom_TrimmedCurve {
    constructor(theHandle: Handle_Geom_TrimmedCurve);
  }

export declare class Handle_Geom_Conic {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Conic): void;
  get(): Geom_Conic;
}

  export declare class Handle_Geom_Conic_1 extends Handle_Geom_Conic {
    constructor();
  }

  export declare class Handle_Geom_Conic_2 extends Handle_Geom_Conic {
    constructor(thePtr: Geom_Conic);
  }

  export declare class Handle_Geom_Conic_3 extends Handle_Geom_Conic {
    constructor(theHandle: Handle_Geom_Conic);
  }

  export declare class Handle_Geom_Conic_4 extends Handle_Geom_Conic {
    constructor(theHandle: Handle_Geom_Conic);
  }

export declare class Handle_Geom_Circle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Circle): void;
  get(): Geom_Circle;
}

  export declare class Handle_Geom_Circle_1 extends Handle_Geom_Circle {
    constructor();
  }

  export declare class Handle_Geom_Circle_2 extends Handle_Geom_Circle {
    constructor(thePtr: Geom_Circle);
  }

  export declare class Handle_Geom_Circle_3 extends Handle_Geom_Circle {
    constructor(theHandle: Handle_Geom_Circle);
  }

  export declare class Handle_Geom_Circle_4 extends Handle_Geom_Circle {
    constructor(theHandle: Handle_Geom_Circle);
  }

export declare class Handle_Geom_ConicalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_ConicalSurface): void;
  get(): Geom_ConicalSurface;
}

  export declare class Handle_Geom_ConicalSurface_1 extends Handle_Geom_ConicalSurface {
    constructor();
  }

  export declare class Handle_Geom_ConicalSurface_2 extends Handle_Geom_ConicalSurface {
    constructor(thePtr: Geom_ConicalSurface);
  }

  export declare class Handle_Geom_ConicalSurface_3 extends Handle_Geom_ConicalSurface {
    constructor(theHandle: Handle_Geom_ConicalSurface);
  }

  export declare class Handle_Geom_ConicalSurface_4 extends Handle_Geom_ConicalSurface {
    constructor(theHandle: Handle_Geom_ConicalSurface);
  }

export declare class Handle_Geom_CylindricalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_CylindricalSurface): void;
  get(): Geom_CylindricalSurface;
}

  export declare class Handle_Geom_CylindricalSurface_1 extends Handle_Geom_CylindricalSurface {
    constructor();
  }

  export declare class Handle_Geom_CylindricalSurface_2 extends Handle_Geom_CylindricalSurface {
    constructor(thePtr: Geom_CylindricalSurface);
  }

  export declare class Handle_Geom_CylindricalSurface_3 extends Handle_Geom_CylindricalSurface {
    constructor(theHandle: Handle_Geom_CylindricalSurface);
  }

  export declare class Handle_Geom_CylindricalSurface_4 extends Handle_Geom_CylindricalSurface {
    constructor(theHandle: Handle_Geom_CylindricalSurface);
  }

export declare class Handle_Geom_Ellipse {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Ellipse): void;
  get(): Geom_Ellipse;
}

  export declare class Handle_Geom_Ellipse_1 extends Handle_Geom_Ellipse {
    constructor();
  }

  export declare class Handle_Geom_Ellipse_2 extends Handle_Geom_Ellipse {
    constructor(thePtr: Geom_Ellipse);
  }

  export declare class Handle_Geom_Ellipse_3 extends Handle_Geom_Ellipse {
    constructor(theHandle: Handle_Geom_Ellipse);
  }

  export declare class Handle_Geom_Ellipse_4 extends Handle_Geom_Ellipse {
    constructor(theHandle: Handle_Geom_Ellipse);
  }

export declare class Handle_Geom_Hyperbola {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Hyperbola): void;
  get(): Geom_Hyperbola;
}

  export declare class Handle_Geom_Hyperbola_1 extends Handle_Geom_Hyperbola {
    constructor();
  }

  export declare class Handle_Geom_Hyperbola_2 extends Handle_Geom_Hyperbola {
    constructor(thePtr: Geom_Hyperbola);
  }

  export declare class Handle_Geom_Hyperbola_3 extends Handle_Geom_Hyperbola {
    constructor(theHandle: Handle_Geom_Hyperbola);
  }

  export declare class Handle_Geom_Hyperbola_4 extends Handle_Geom_Hyperbola {
    constructor(theHandle: Handle_Geom_Hyperbola);
  }

export declare class Handle_Geom_RectangularTrimmedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_RectangularTrimmedSurface): void;
  get(): Geom_RectangularTrimmedSurface;
}

  export declare class Handle_Geom_RectangularTrimmedSurface_1 extends Handle_Geom_RectangularTrimmedSurface {
    constructor();
  }

  export declare class Handle_Geom_RectangularTrimmedSurface_2 extends Handle_Geom_RectangularTrimmedSurface {
    constructor(thePtr: Geom_RectangularTrimmedSurface);
  }

  export declare class Handle_Geom_RectangularTrimmedSurface_3 extends Handle_Geom_RectangularTrimmedSurface {
    constructor(theHandle: Handle_Geom_RectangularTrimmedSurface);
  }

  export declare class Handle_Geom_RectangularTrimmedSurface_4 extends Handle_Geom_RectangularTrimmedSurface {
    constructor(theHandle: Handle_Geom_RectangularTrimmedSurface);
  }

export declare class Handle_GProp_UndefinedAxis {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GProp_UndefinedAxis): void;
  get(): GProp_UndefinedAxis;
}

  export declare class Handle_GProp_UndefinedAxis_1 extends Handle_GProp_UndefinedAxis {
    constructor();
  }

  export declare class Handle_GProp_UndefinedAxis_2 extends Handle_GProp_UndefinedAxis {
    constructor(thePtr: GProp_UndefinedAxis);
  }

  export declare class Handle_GProp_UndefinedAxis_3 extends Handle_GProp_UndefinedAxis {
    constructor(theHandle: Handle_GProp_UndefinedAxis);
  }

  export declare class Handle_GProp_UndefinedAxis_4 extends Handle_GProp_UndefinedAxis {
    constructor(theHandle: Handle_GProp_UndefinedAxis);
  }

export declare class Handle_Geom_AxisPlacement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_AxisPlacement): void;
  get(): Geom_AxisPlacement;
}

  export declare class Handle_Geom_AxisPlacement_1 extends Handle_Geom_AxisPlacement {
    constructor();
  }

  export declare class Handle_Geom_AxisPlacement_2 extends Handle_Geom_AxisPlacement {
    constructor(thePtr: Geom_AxisPlacement);
  }

  export declare class Handle_Geom_AxisPlacement_3 extends Handle_Geom_AxisPlacement {
    constructor(theHandle: Handle_Geom_AxisPlacement);
  }

  export declare class Handle_Geom_AxisPlacement_4 extends Handle_Geom_AxisPlacement {
    constructor(theHandle: Handle_Geom_AxisPlacement);
  }

export declare class Handle_Geom_Axis1Placement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Axis1Placement): void;
  get(): Geom_Axis1Placement;
}

  export declare class Handle_Geom_Axis1Placement_1 extends Handle_Geom_Axis1Placement {
    constructor();
  }

  export declare class Handle_Geom_Axis1Placement_2 extends Handle_Geom_Axis1Placement {
    constructor(thePtr: Geom_Axis1Placement);
  }

  export declare class Handle_Geom_Axis1Placement_3 extends Handle_Geom_Axis1Placement {
    constructor(theHandle: Handle_Geom_Axis1Placement);
  }

  export declare class Handle_Geom_Axis1Placement_4 extends Handle_Geom_Axis1Placement {
    constructor(theHandle: Handle_Geom_Axis1Placement);
  }

export declare class Handle_Geom_Axis2Placement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Axis2Placement): void;
  get(): Geom_Axis2Placement;
}

  export declare class Handle_Geom_Axis2Placement_1 extends Handle_Geom_Axis2Placement {
    constructor();
  }

  export declare class Handle_Geom_Axis2Placement_2 extends Handle_Geom_Axis2Placement {
    constructor(thePtr: Geom_Axis2Placement);
  }

  export declare class Handle_Geom_Axis2Placement_3 extends Handle_Geom_Axis2Placement {
    constructor(theHandle: Handle_Geom_Axis2Placement);
  }

  export declare class Handle_Geom_Axis2Placement_4 extends Handle_Geom_Axis2Placement {
    constructor(theHandle: Handle_Geom_Axis2Placement);
  }

export declare class Handle_Geom_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Point): void;
  get(): Geom_Point;
}

  export declare class Handle_Geom_Point_1 extends Handle_Geom_Point {
    constructor();
  }

  export declare class Handle_Geom_Point_2 extends Handle_Geom_Point {
    constructor(thePtr: Geom_Point);
  }

  export declare class Handle_Geom_Point_3 extends Handle_Geom_Point {
    constructor(theHandle: Handle_Geom_Point);
  }

  export declare class Handle_Geom_Point_4 extends Handle_Geom_Point {
    constructor(theHandle: Handle_Geom_Point);
  }

export declare class Handle_Geom_CartesianPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_CartesianPoint): void;
  get(): Geom_CartesianPoint;
}

  export declare class Handle_Geom_CartesianPoint_1 extends Handle_Geom_CartesianPoint {
    constructor();
  }

  export declare class Handle_Geom_CartesianPoint_2 extends Handle_Geom_CartesianPoint {
    constructor(thePtr: Geom_CartesianPoint);
  }

  export declare class Handle_Geom_CartesianPoint_3 extends Handle_Geom_CartesianPoint {
    constructor(theHandle: Handle_Geom_CartesianPoint);
  }

  export declare class Handle_Geom_CartesianPoint_4 extends Handle_Geom_CartesianPoint {
    constructor(theHandle: Handle_Geom_CartesianPoint);
  }

export declare class Handle_Geom_Vector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Vector): void;
  get(): Geom_Vector;
}

  export declare class Handle_Geom_Vector_1 extends Handle_Geom_Vector {
    constructor();
  }

  export declare class Handle_Geom_Vector_2 extends Handle_Geom_Vector {
    constructor(thePtr: Geom_Vector);
  }

  export declare class Handle_Geom_Vector_3 extends Handle_Geom_Vector {
    constructor(theHandle: Handle_Geom_Vector);
  }

  export declare class Handle_Geom_Vector_4 extends Handle_Geom_Vector {
    constructor(theHandle: Handle_Geom_Vector);
  }

export declare class Handle_Geom_Direction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Direction): void;
  get(): Geom_Direction;
}

  export declare class Handle_Geom_Direction_1 extends Handle_Geom_Direction {
    constructor();
  }

  export declare class Handle_Geom_Direction_2 extends Handle_Geom_Direction {
    constructor(thePtr: Geom_Direction);
  }

  export declare class Handle_Geom_Direction_3 extends Handle_Geom_Direction {
    constructor(theHandle: Handle_Geom_Direction);
  }

  export declare class Handle_Geom_Direction_4 extends Handle_Geom_Direction {
    constructor(theHandle: Handle_Geom_Direction);
  }

export declare class Handle_Geom_HSequenceOfBSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_HSequenceOfBSplineSurface): void;
  get(): Geom_HSequenceOfBSplineSurface;
}

  export declare class Handle_Geom_HSequenceOfBSplineSurface_1 extends Handle_Geom_HSequenceOfBSplineSurface {
    constructor();
  }

  export declare class Handle_Geom_HSequenceOfBSplineSurface_2 extends Handle_Geom_HSequenceOfBSplineSurface {
    constructor(thePtr: Geom_HSequenceOfBSplineSurface);
  }

  export declare class Handle_Geom_HSequenceOfBSplineSurface_3 extends Handle_Geom_HSequenceOfBSplineSurface {
    constructor(theHandle: Handle_Geom_HSequenceOfBSplineSurface);
  }

  export declare class Handle_Geom_HSequenceOfBSplineSurface_4 extends Handle_Geom_HSequenceOfBSplineSurface {
    constructor(theHandle: Handle_Geom_HSequenceOfBSplineSurface);
  }

export declare class Handle_GeomEvaluator_OffsetCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomEvaluator_OffsetCurve): void;
  get(): GeomEvaluator_OffsetCurve;
}

  export declare class Handle_GeomEvaluator_OffsetCurve_1 extends Handle_GeomEvaluator_OffsetCurve {
    constructor();
  }

  export declare class Handle_GeomEvaluator_OffsetCurve_2 extends Handle_GeomEvaluator_OffsetCurve {
    constructor(thePtr: GeomEvaluator_OffsetCurve);
  }

  export declare class Handle_GeomEvaluator_OffsetCurve_3 extends Handle_GeomEvaluator_OffsetCurve {
    constructor(theHandle: Handle_GeomEvaluator_OffsetCurve);
  }

  export declare class Handle_GeomEvaluator_OffsetCurve_4 extends Handle_GeomEvaluator_OffsetCurve {
    constructor(theHandle: Handle_GeomEvaluator_OffsetCurve);
  }

export declare class Handle_Geom_OffsetCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_OffsetCurve): void;
  get(): Geom_OffsetCurve;
}

  export declare class Handle_Geom_OffsetCurve_1 extends Handle_Geom_OffsetCurve {
    constructor();
  }

  export declare class Handle_Geom_OffsetCurve_2 extends Handle_Geom_OffsetCurve {
    constructor(thePtr: Geom_OffsetCurve);
  }

  export declare class Handle_Geom_OffsetCurve_3 extends Handle_Geom_OffsetCurve {
    constructor(theHandle: Handle_Geom_OffsetCurve);
  }

  export declare class Handle_Geom_OffsetCurve_4 extends Handle_Geom_OffsetCurve {
    constructor(theHandle: Handle_Geom_OffsetCurve);
  }

export declare class Handle_Geom_OsculatingSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_OsculatingSurface): void;
  get(): Geom_OsculatingSurface;
}

  export declare class Handle_Geom_OsculatingSurface_1 extends Handle_Geom_OsculatingSurface {
    constructor();
  }

  export declare class Handle_Geom_OsculatingSurface_2 extends Handle_Geom_OsculatingSurface {
    constructor(thePtr: Geom_OsculatingSurface);
  }

  export declare class Handle_Geom_OsculatingSurface_3 extends Handle_Geom_OsculatingSurface {
    constructor(theHandle: Handle_Geom_OsculatingSurface);
  }

  export declare class Handle_Geom_OsculatingSurface_4 extends Handle_Geom_OsculatingSurface {
    constructor(theHandle: Handle_Geom_OsculatingSurface);
  }

export declare class Handle_GeomEvaluator_OffsetSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomEvaluator_OffsetSurface): void;
  get(): GeomEvaluator_OffsetSurface;
}

  export declare class Handle_GeomEvaluator_OffsetSurface_1 extends Handle_GeomEvaluator_OffsetSurface {
    constructor();
  }

  export declare class Handle_GeomEvaluator_OffsetSurface_2 extends Handle_GeomEvaluator_OffsetSurface {
    constructor(thePtr: GeomEvaluator_OffsetSurface);
  }

  export declare class Handle_GeomEvaluator_OffsetSurface_3 extends Handle_GeomEvaluator_OffsetSurface {
    constructor(theHandle: Handle_GeomEvaluator_OffsetSurface);
  }

  export declare class Handle_GeomEvaluator_OffsetSurface_4 extends Handle_GeomEvaluator_OffsetSurface {
    constructor(theHandle: Handle_GeomEvaluator_OffsetSurface);
  }

export declare class Handle_Geom_OffsetSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_OffsetSurface): void;
  get(): Geom_OffsetSurface;
}

  export declare class Handle_Geom_OffsetSurface_1 extends Handle_Geom_OffsetSurface {
    constructor();
  }

  export declare class Handle_Geom_OffsetSurface_2 extends Handle_Geom_OffsetSurface {
    constructor(thePtr: Geom_OffsetSurface);
  }

  export declare class Handle_Geom_OffsetSurface_3 extends Handle_Geom_OffsetSurface {
    constructor(theHandle: Handle_Geom_OffsetSurface);
  }

  export declare class Handle_Geom_OffsetSurface_4 extends Handle_Geom_OffsetSurface {
    constructor(theHandle: Handle_Geom_OffsetSurface);
  }

export declare class Handle_Geom_Parabola {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Parabola): void;
  get(): Geom_Parabola;
}

  export declare class Handle_Geom_Parabola_1 extends Handle_Geom_Parabola {
    constructor();
  }

  export declare class Handle_Geom_Parabola_2 extends Handle_Geom_Parabola {
    constructor(thePtr: Geom_Parabola);
  }

  export declare class Handle_Geom_Parabola_3 extends Handle_Geom_Parabola {
    constructor(theHandle: Handle_Geom_Parabola);
  }

  export declare class Handle_Geom_Parabola_4 extends Handle_Geom_Parabola {
    constructor(theHandle: Handle_Geom_Parabola);
  }

export declare class Handle_Geom_SphericalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_SphericalSurface): void;
  get(): Geom_SphericalSurface;
}

  export declare class Handle_Geom_SphericalSurface_1 extends Handle_Geom_SphericalSurface {
    constructor();
  }

  export declare class Handle_Geom_SphericalSurface_2 extends Handle_Geom_SphericalSurface {
    constructor(thePtr: Geom_SphericalSurface);
  }

  export declare class Handle_Geom_SphericalSurface_3 extends Handle_Geom_SphericalSurface {
    constructor(theHandle: Handle_Geom_SphericalSurface);
  }

  export declare class Handle_Geom_SphericalSurface_4 extends Handle_Geom_SphericalSurface {
    constructor(theHandle: Handle_Geom_SphericalSurface);
  }

export declare class Handle_Geom_SweptSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_SweptSurface): void;
  get(): Geom_SweptSurface;
}

  export declare class Handle_Geom_SweptSurface_1 extends Handle_Geom_SweptSurface {
    constructor();
  }

  export declare class Handle_Geom_SweptSurface_2 extends Handle_Geom_SweptSurface {
    constructor(thePtr: Geom_SweptSurface);
  }

  export declare class Handle_Geom_SweptSurface_3 extends Handle_Geom_SweptSurface {
    constructor(theHandle: Handle_Geom_SweptSurface);
  }

  export declare class Handle_Geom_SweptSurface_4 extends Handle_Geom_SweptSurface {
    constructor(theHandle: Handle_Geom_SweptSurface);
  }

export declare class Handle_GeomEvaluator_SurfaceOfExtrusion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomEvaluator_SurfaceOfExtrusion): void;
  get(): GeomEvaluator_SurfaceOfExtrusion;
}

  export declare class Handle_GeomEvaluator_SurfaceOfExtrusion_1 extends Handle_GeomEvaluator_SurfaceOfExtrusion {
    constructor();
  }

  export declare class Handle_GeomEvaluator_SurfaceOfExtrusion_2 extends Handle_GeomEvaluator_SurfaceOfExtrusion {
    constructor(thePtr: GeomEvaluator_SurfaceOfExtrusion);
  }

  export declare class Handle_GeomEvaluator_SurfaceOfExtrusion_3 extends Handle_GeomEvaluator_SurfaceOfExtrusion {
    constructor(theHandle: Handle_GeomEvaluator_SurfaceOfExtrusion);
  }

  export declare class Handle_GeomEvaluator_SurfaceOfExtrusion_4 extends Handle_GeomEvaluator_SurfaceOfExtrusion {
    constructor(theHandle: Handle_GeomEvaluator_SurfaceOfExtrusion);
  }

export declare class Handle_Geom_SurfaceOfLinearExtrusion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_SurfaceOfLinearExtrusion): void;
  get(): Geom_SurfaceOfLinearExtrusion;
}

  export declare class Handle_Geom_SurfaceOfLinearExtrusion_1 extends Handle_Geom_SurfaceOfLinearExtrusion {
    constructor();
  }

  export declare class Handle_Geom_SurfaceOfLinearExtrusion_2 extends Handle_Geom_SurfaceOfLinearExtrusion {
    constructor(thePtr: Geom_SurfaceOfLinearExtrusion);
  }

  export declare class Handle_Geom_SurfaceOfLinearExtrusion_3 extends Handle_Geom_SurfaceOfLinearExtrusion {
    constructor(theHandle: Handle_Geom_SurfaceOfLinearExtrusion);
  }

  export declare class Handle_Geom_SurfaceOfLinearExtrusion_4 extends Handle_Geom_SurfaceOfLinearExtrusion {
    constructor(theHandle: Handle_Geom_SurfaceOfLinearExtrusion);
  }

export declare class Handle_GeomEvaluator_SurfaceOfRevolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomEvaluator_SurfaceOfRevolution): void;
  get(): GeomEvaluator_SurfaceOfRevolution;
}

  export declare class Handle_GeomEvaluator_SurfaceOfRevolution_1 extends Handle_GeomEvaluator_SurfaceOfRevolution {
    constructor();
  }

  export declare class Handle_GeomEvaluator_SurfaceOfRevolution_2 extends Handle_GeomEvaluator_SurfaceOfRevolution {
    constructor(thePtr: GeomEvaluator_SurfaceOfRevolution);
  }

  export declare class Handle_GeomEvaluator_SurfaceOfRevolution_3 extends Handle_GeomEvaluator_SurfaceOfRevolution {
    constructor(theHandle: Handle_GeomEvaluator_SurfaceOfRevolution);
  }

  export declare class Handle_GeomEvaluator_SurfaceOfRevolution_4 extends Handle_GeomEvaluator_SurfaceOfRevolution {
    constructor(theHandle: Handle_GeomEvaluator_SurfaceOfRevolution);
  }

export declare class Handle_Geom_SurfaceOfRevolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_SurfaceOfRevolution): void;
  get(): Geom_SurfaceOfRevolution;
}

  export declare class Handle_Geom_SurfaceOfRevolution_1 extends Handle_Geom_SurfaceOfRevolution {
    constructor();
  }

  export declare class Handle_Geom_SurfaceOfRevolution_2 extends Handle_Geom_SurfaceOfRevolution {
    constructor(thePtr: Geom_SurfaceOfRevolution);
  }

  export declare class Handle_Geom_SurfaceOfRevolution_3 extends Handle_Geom_SurfaceOfRevolution {
    constructor(theHandle: Handle_Geom_SurfaceOfRevolution);
  }

  export declare class Handle_Geom_SurfaceOfRevolution_4 extends Handle_Geom_SurfaceOfRevolution {
    constructor(theHandle: Handle_Geom_SurfaceOfRevolution);
  }

export declare class Handle_Geom_ToroidalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_ToroidalSurface): void;
  get(): Geom_ToroidalSurface;
}

  export declare class Handle_Geom_ToroidalSurface_1 extends Handle_Geom_ToroidalSurface {
    constructor();
  }

  export declare class Handle_Geom_ToroidalSurface_2 extends Handle_Geom_ToroidalSurface {
    constructor(thePtr: Geom_ToroidalSurface);
  }

  export declare class Handle_Geom_ToroidalSurface_3 extends Handle_Geom_ToroidalSurface {
    constructor(theHandle: Handle_Geom_ToroidalSurface);
  }

  export declare class Handle_Geom_ToroidalSurface_4 extends Handle_Geom_ToroidalSurface {
    constructor(theHandle: Handle_Geom_ToroidalSurface);
  }

export declare class Handle_Geom_Transformation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Transformation): void;
  get(): Geom_Transformation;
}

  export declare class Handle_Geom_Transformation_1 extends Handle_Geom_Transformation {
    constructor();
  }

  export declare class Handle_Geom_Transformation_2 extends Handle_Geom_Transformation {
    constructor(thePtr: Geom_Transformation);
  }

  export declare class Handle_Geom_Transformation_3 extends Handle_Geom_Transformation {
    constructor(theHandle: Handle_Geom_Transformation);
  }

  export declare class Handle_Geom_Transformation_4 extends Handle_Geom_Transformation {
    constructor(theHandle: Handle_Geom_Transformation);
  }

export declare class Handle_Geom_UndefinedDerivative {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_UndefinedDerivative): void;
  get(): Geom_UndefinedDerivative;
}

  export declare class Handle_Geom_UndefinedDerivative_1 extends Handle_Geom_UndefinedDerivative {
    constructor();
  }

  export declare class Handle_Geom_UndefinedDerivative_2 extends Handle_Geom_UndefinedDerivative {
    constructor(thePtr: Geom_UndefinedDerivative);
  }

  export declare class Handle_Geom_UndefinedDerivative_3 extends Handle_Geom_UndefinedDerivative {
    constructor(theHandle: Handle_Geom_UndefinedDerivative);
  }

  export declare class Handle_Geom_UndefinedDerivative_4 extends Handle_Geom_UndefinedDerivative {
    constructor(theHandle: Handle_Geom_UndefinedDerivative);
  }

export declare class Handle_Geom_UndefinedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_UndefinedValue): void;
  get(): Geom_UndefinedValue;
}

  export declare class Handle_Geom_UndefinedValue_1 extends Handle_Geom_UndefinedValue {
    constructor();
  }

  export declare class Handle_Geom_UndefinedValue_2 extends Handle_Geom_UndefinedValue {
    constructor(thePtr: Geom_UndefinedValue);
  }

  export declare class Handle_Geom_UndefinedValue_3 extends Handle_Geom_UndefinedValue {
    constructor(theHandle: Handle_Geom_UndefinedValue);
  }

  export declare class Handle_Geom_UndefinedValue_4 extends Handle_Geom_UndefinedValue {
    constructor(theHandle: Handle_Geom_UndefinedValue);
  }

export declare class Handle_Geom_VectorWithMagnitude {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_VectorWithMagnitude): void;
  get(): Geom_VectorWithMagnitude;
}

  export declare class Handle_Geom_VectorWithMagnitude_1 extends Handle_Geom_VectorWithMagnitude {
    constructor();
  }

  export declare class Handle_Geom_VectorWithMagnitude_2 extends Handle_Geom_VectorWithMagnitude {
    constructor(thePtr: Geom_VectorWithMagnitude);
  }

  export declare class Handle_Geom_VectorWithMagnitude_3 extends Handle_Geom_VectorWithMagnitude {
    constructor(theHandle: Handle_Geom_VectorWithMagnitude);
  }

  export declare class Handle_Geom_VectorWithMagnitude_4 extends Handle_Geom_VectorWithMagnitude {
    constructor(theHandle: Handle_Geom_VectorWithMagnitude);
  }

export declare class Handle_GeomAdaptor_GHCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_GHCurve): void;
  get(): GeomAdaptor_GHCurve;
}

  export declare class Handle_GeomAdaptor_GHCurve_1 extends Handle_GeomAdaptor_GHCurve {
    constructor();
  }

  export declare class Handle_GeomAdaptor_GHCurve_2 extends Handle_GeomAdaptor_GHCurve {
    constructor(thePtr: GeomAdaptor_GHCurve);
  }

  export declare class Handle_GeomAdaptor_GHCurve_3 extends Handle_GeomAdaptor_GHCurve {
    constructor(theHandle: Handle_GeomAdaptor_GHCurve);
  }

  export declare class Handle_GeomAdaptor_GHCurve_4 extends Handle_GeomAdaptor_GHCurve {
    constructor(theHandle: Handle_GeomAdaptor_GHCurve);
  }

export declare class Handle_GeomAdaptor_HCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_HCurve): void;
  get(): GeomAdaptor_HCurve;
}

  export declare class Handle_GeomAdaptor_HCurve_1 extends Handle_GeomAdaptor_HCurve {
    constructor();
  }

  export declare class Handle_GeomAdaptor_HCurve_2 extends Handle_GeomAdaptor_HCurve {
    constructor(thePtr: GeomAdaptor_HCurve);
  }

  export declare class Handle_GeomAdaptor_HCurve_3 extends Handle_GeomAdaptor_HCurve {
    constructor(theHandle: Handle_GeomAdaptor_HCurve);
  }

  export declare class Handle_GeomAdaptor_HCurve_4 extends Handle_GeomAdaptor_HCurve {
    constructor(theHandle: Handle_GeomAdaptor_HCurve);
  }

export declare class Handle_GeomAdaptor_HSurfaceOfLinearExtrusion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_HSurfaceOfLinearExtrusion): void;
  get(): GeomAdaptor_HSurfaceOfLinearExtrusion;
}

  export declare class Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_1 extends Handle_GeomAdaptor_HSurfaceOfLinearExtrusion {
    constructor();
  }

  export declare class Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_2 extends Handle_GeomAdaptor_HSurfaceOfLinearExtrusion {
    constructor(thePtr: GeomAdaptor_HSurfaceOfLinearExtrusion);
  }

  export declare class Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_3 extends Handle_GeomAdaptor_HSurfaceOfLinearExtrusion {
    constructor(theHandle: Handle_GeomAdaptor_HSurfaceOfLinearExtrusion);
  }

  export declare class Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_4 extends Handle_GeomAdaptor_HSurfaceOfLinearExtrusion {
    constructor(theHandle: Handle_GeomAdaptor_HSurfaceOfLinearExtrusion);
  }

export declare class Handle_GeomAdaptor_HSurfaceOfRevolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_HSurfaceOfRevolution): void;
  get(): GeomAdaptor_HSurfaceOfRevolution;
}

  export declare class Handle_GeomAdaptor_HSurfaceOfRevolution_1 extends Handle_GeomAdaptor_HSurfaceOfRevolution {
    constructor();
  }

  export declare class Handle_GeomAdaptor_HSurfaceOfRevolution_2 extends Handle_GeomAdaptor_HSurfaceOfRevolution {
    constructor(thePtr: GeomAdaptor_HSurfaceOfRevolution);
  }

  export declare class Handle_GeomAdaptor_HSurfaceOfRevolution_3 extends Handle_GeomAdaptor_HSurfaceOfRevolution {
    constructor(theHandle: Handle_GeomAdaptor_HSurfaceOfRevolution);
  }

  export declare class Handle_GeomAdaptor_HSurfaceOfRevolution_4 extends Handle_GeomAdaptor_HSurfaceOfRevolution {
    constructor(theHandle: Handle_GeomAdaptor_HSurfaceOfRevolution);
  }

export declare class Handle_TColGeom_HArray1OfBSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom_HArray1OfBSplineCurve): void;
  get(): TColGeom_HArray1OfBSplineCurve;
}

  export declare class Handle_TColGeom_HArray1OfBSplineCurve_1 extends Handle_TColGeom_HArray1OfBSplineCurve {
    constructor();
  }

  export declare class Handle_TColGeom_HArray1OfBSplineCurve_2 extends Handle_TColGeom_HArray1OfBSplineCurve {
    constructor(thePtr: TColGeom_HArray1OfBSplineCurve);
  }

  export declare class Handle_TColGeom_HArray1OfBSplineCurve_3 extends Handle_TColGeom_HArray1OfBSplineCurve {
    constructor(theHandle: Handle_TColGeom_HArray1OfBSplineCurve);
  }

  export declare class Handle_TColGeom_HArray1OfBSplineCurve_4 extends Handle_TColGeom_HArray1OfBSplineCurve {
    constructor(theHandle: Handle_TColGeom_HArray1OfBSplineCurve);
  }

export declare class Handle_TColGeom_HSequenceOfBoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom_HSequenceOfBoundedCurve): void;
  get(): TColGeom_HSequenceOfBoundedCurve;
}

  export declare class Handle_TColGeom_HSequenceOfBoundedCurve_1 extends Handle_TColGeom_HSequenceOfBoundedCurve {
    constructor();
  }

  export declare class Handle_TColGeom_HSequenceOfBoundedCurve_2 extends Handle_TColGeom_HSequenceOfBoundedCurve {
    constructor(thePtr: TColGeom_HSequenceOfBoundedCurve);
  }

  export declare class Handle_TColGeom_HSequenceOfBoundedCurve_3 extends Handle_TColGeom_HSequenceOfBoundedCurve {
    constructor(theHandle: Handle_TColGeom_HSequenceOfBoundedCurve);
  }

  export declare class Handle_TColGeom_HSequenceOfBoundedCurve_4 extends Handle_TColGeom_HSequenceOfBoundedCurve {
    constructor(theHandle: Handle_TColGeom_HSequenceOfBoundedCurve);
  }

export declare class Handle_TColGeom_HArray2OfSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom_HArray2OfSurface): void;
  get(): TColGeom_HArray2OfSurface;
}

  export declare class Handle_TColGeom_HArray2OfSurface_1 extends Handle_TColGeom_HArray2OfSurface {
    constructor();
  }

  export declare class Handle_TColGeom_HArray2OfSurface_2 extends Handle_TColGeom_HArray2OfSurface {
    constructor(thePtr: TColGeom_HArray2OfSurface);
  }

  export declare class Handle_TColGeom_HArray2OfSurface_3 extends Handle_TColGeom_HArray2OfSurface {
    constructor(theHandle: Handle_TColGeom_HArray2OfSurface);
  }

  export declare class Handle_TColGeom_HArray2OfSurface_4 extends Handle_TColGeom_HArray2OfSurface {
    constructor(theHandle: Handle_TColGeom_HArray2OfSurface);
  }

export declare class Handle_TColGeom_HSequenceOfCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom_HSequenceOfCurve): void;
  get(): TColGeom_HSequenceOfCurve;
}

  export declare class Handle_TColGeom_HSequenceOfCurve_1 extends Handle_TColGeom_HSequenceOfCurve {
    constructor();
  }

  export declare class Handle_TColGeom_HSequenceOfCurve_2 extends Handle_TColGeom_HSequenceOfCurve {
    constructor(thePtr: TColGeom_HSequenceOfCurve);
  }

  export declare class Handle_TColGeom_HSequenceOfCurve_3 extends Handle_TColGeom_HSequenceOfCurve {
    constructor(theHandle: Handle_TColGeom_HSequenceOfCurve);
  }

  export declare class Handle_TColGeom_HSequenceOfCurve_4 extends Handle_TColGeom_HSequenceOfCurve {
    constructor(theHandle: Handle_TColGeom_HSequenceOfCurve);
  }

export declare class Handle_TColGeom_HArray1OfCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom_HArray1OfCurve): void;
  get(): TColGeom_HArray1OfCurve;
}

  export declare class Handle_TColGeom_HArray1OfCurve_1 extends Handle_TColGeom_HArray1OfCurve {
    constructor();
  }

  export declare class Handle_TColGeom_HArray1OfCurve_2 extends Handle_TColGeom_HArray1OfCurve {
    constructor(thePtr: TColGeom_HArray1OfCurve);
  }

  export declare class Handle_TColGeom_HArray1OfCurve_3 extends Handle_TColGeom_HArray1OfCurve {
    constructor(theHandle: Handle_TColGeom_HArray1OfCurve);
  }

  export declare class Handle_TColGeom_HArray1OfCurve_4 extends Handle_TColGeom_HArray1OfCurve {
    constructor(theHandle: Handle_TColGeom_HArray1OfCurve);
  }

export declare class Handle_TColGeom_HArray1OfBezierCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColGeom_HArray1OfBezierCurve): void;
  get(): TColGeom_HArray1OfBezierCurve;
}

  export declare class Handle_TColGeom_HArray1OfBezierCurve_1 extends Handle_TColGeom_HArray1OfBezierCurve {
    constructor();
  }

  export declare class Handle_TColGeom_HArray1OfBezierCurve_2 extends Handle_TColGeom_HArray1OfBezierCurve {
    constructor(thePtr: TColGeom_HArray1OfBezierCurve);
  }

  export declare class Handle_TColGeom_HArray1OfBezierCurve_3 extends Handle_TColGeom_HArray1OfBezierCurve {
    constructor(theHandle: Handle_TColGeom_HArray1OfBezierCurve);
  }

  export declare class Handle_TColGeom_HArray1OfBezierCurve_4 extends Handle_TColGeom_HArray1OfBezierCurve {
    constructor(theHandle: Handle_TColGeom_HArray1OfBezierCurve);
  }

export declare type TopAbs_Orientation = {
  TopAbs_FORWARD: {};
  TopAbs_REVERSED: {};
  TopAbs_INTERNAL: {};
  TopAbs_EXTERNAL: {};
}

export declare type TopAbs_ShapeEnum = {
  TopAbs_COMPOUND: {};
  TopAbs_COMPSOLID: {};
  TopAbs_SOLID: {};
  TopAbs_SHELL: {};
  TopAbs_FACE: {};
  TopAbs_WIRE: {};
  TopAbs_EDGE: {};
  TopAbs_VERTEX: {};
  TopAbs_SHAPE: {};
}

export declare type TopAbs_State = {
  TopAbs_IN: {};
  TopAbs_OUT: {};
  TopAbs_ON: {};
  TopAbs_UNKNOWN: {};
}

export declare type GProp_ValueType = {
  GProp_Mass: {};
  GProp_CenterMassX: {};
  GProp_CenterMassY: {};
  GProp_CenterMassZ: {};
  GProp_InertiaXX: {};
  GProp_InertiaYY: {};
  GProp_InertiaZZ: {};
  GProp_InertiaXY: {};
  GProp_InertiaXZ: {};
  GProp_InertiaYZ: {};
  GProp_Unknown: {};
}

export declare type GProp_EquaType = {
  GProp_Plane: {};
  GProp_Line: {};
  GProp_Point: {};
  GProp_Space: {};
  GProp_None: {};
}

export declare type TKG3dLib = {
  Geom_Plane_1: typeof Geom_Plane_1;
  Geom_Plane_2: typeof Geom_Plane_2;
  Geom_Plane_3: typeof Geom_Plane_3;
  Geom_Plane_4: typeof Geom_Plane_4;
  Geom_Line_1: typeof Geom_Line_1;
  Geom_Line_2: typeof Geom_Line_2;
  Geom_Line_3: typeof Geom_Line_3;
  Adaptor3d_CurveOnSurface_1: typeof Adaptor3d_CurveOnSurface_1;
  Adaptor3d_CurveOnSurface_2: typeof Adaptor3d_CurveOnSurface_2;
  Adaptor3d_CurveOnSurface_3: typeof Adaptor3d_CurveOnSurface_3;
  Adaptor3d_HCurveOnSurface_1: typeof Adaptor3d_HCurveOnSurface_1;
  Adaptor3d_HCurveOnSurface_2: typeof Adaptor3d_HCurveOnSurface_2;
  Adaptor3d_IsoCurve_1: typeof Adaptor3d_IsoCurve_1;
  Adaptor3d_IsoCurve_2: typeof Adaptor3d_IsoCurve_2;
  Adaptor3d_IsoCurve_3: typeof Adaptor3d_IsoCurve_3;
  Adaptor3d_IsoCurve_4: typeof Adaptor3d_IsoCurve_4;
  Adaptor3d_HIsoCurve_1: typeof Adaptor3d_HIsoCurve_1;
  Adaptor3d_HIsoCurve_2: typeof Adaptor3d_HIsoCurve_2;
  Geom_BezierSurface_1: typeof Geom_BezierSurface_1;
  Geom_BezierSurface_2: typeof Geom_BezierSurface_2;
  Geom_BSplineSurface_1: typeof Geom_BSplineSurface_1;
  Geom_BSplineSurface_2: typeof Geom_BSplineSurface_2;
  Adaptor3d_HVertex_1: typeof Adaptor3d_HVertex_1;
  Adaptor3d_HVertex_2: typeof Adaptor3d_HVertex_2;
  Adaptor3d_InterFunc: typeof Adaptor3d_InterFunc;
  Adaptor3d_TopolTool_1: typeof Adaptor3d_TopolTool_1;
  Adaptor3d_TopolTool_2: typeof Adaptor3d_TopolTool_2;
  AdvApprox_ApproxAFunction_1: typeof AdvApprox_ApproxAFunction_1;
  AdvApprox_ApproxAFunction_2: typeof AdvApprox_ApproxAFunction_2;
  AdvApprox_DichoCutting: typeof AdvApprox_DichoCutting;
  AdvApprox_PrefAndRec: typeof AdvApprox_PrefAndRec;
  AdvApprox_PrefCutting: typeof AdvApprox_PrefCutting;
  AdvApprox_SimpleApprox: typeof AdvApprox_SimpleApprox;
  Geom_BSplineCurve_1: typeof Geom_BSplineCurve_1;
  Geom_BSplineCurve_2: typeof Geom_BSplineCurve_2;
  GeomAdaptor_Surface_1: typeof GeomAdaptor_Surface_1;
  GeomAdaptor_Surface_2: typeof GeomAdaptor_Surface_2;
  GeomAdaptor_Surface_3: typeof GeomAdaptor_Surface_3;
  GeomAdaptor_Curve_1: typeof GeomAdaptor_Curve_1;
  GeomAdaptor_Curve_2: typeof GeomAdaptor_Curve_2;
  GeomAdaptor_Curve_3: typeof GeomAdaptor_Curve_3;
  Geom_BezierCurve_1: typeof Geom_BezierCurve_1;
  Geom_BezierCurve_2: typeof Geom_BezierCurve_2;
  GeomLProp_SLProps_1: typeof GeomLProp_SLProps_1;
  GeomLProp_SLProps_2: typeof GeomLProp_SLProps_2;
  GeomLProp_SLProps_3: typeof GeomLProp_SLProps_3;
  GProp_GProps_1: typeof GProp_GProps_1;
  GProp_GProps_2: typeof GProp_GProps_2;
  GeomAdaptor_GHSurface_1: typeof GeomAdaptor_GHSurface_1;
  GeomAdaptor_GHSurface_2: typeof GeomAdaptor_GHSurface_2;
  GeomAdaptor_HSurface_1: typeof GeomAdaptor_HSurface_1;
  GeomAdaptor_HSurface_2: typeof GeomAdaptor_HSurface_2;
  GeomAdaptor_HSurface_3: typeof GeomAdaptor_HSurface_3;
  GeomAdaptor_HSurface_4: typeof GeomAdaptor_HSurface_4;
  Geom_TrimmedCurve: typeof Geom_TrimmedCurve;
  Geom_Circle_1: typeof Geom_Circle_1;
  Geom_Circle_2: typeof Geom_Circle_2;
  Geom_ConicalSurface_1: typeof Geom_ConicalSurface_1;
  Geom_ConicalSurface_2: typeof Geom_ConicalSurface_2;
  Geom_CylindricalSurface_1: typeof Geom_CylindricalSurface_1;
  Geom_CylindricalSurface_2: typeof Geom_CylindricalSurface_2;
  Geom_Ellipse_1: typeof Geom_Ellipse_1;
  Geom_Ellipse_2: typeof Geom_Ellipse_2;
  Geom_Hyperbola_1: typeof Geom_Hyperbola_1;
  Geom_Hyperbola_2: typeof Geom_Hyperbola_2;
  Geom_RectangularTrimmedSurface_1: typeof Geom_RectangularTrimmedSurface_1;
  Geom_RectangularTrimmedSurface_2: typeof Geom_RectangularTrimmedSurface_2;
  GProp_CelGProps_1: typeof GProp_CelGProps_1;
  GProp_CelGProps_2: typeof GProp_CelGProps_2;
  GProp_CelGProps_3: typeof GProp_CelGProps_3;
  GProp_CelGProps_4: typeof GProp_CelGProps_4;
  GProp_PEquation: typeof GProp_PEquation;
  GProp_PGProps_1: typeof GProp_PGProps_1;
  GProp_PGProps_2: typeof GProp_PGProps_2;
  GProp_PGProps_3: typeof GProp_PGProps_3;
  GProp_PGProps_4: typeof GProp_PGProps_4;
  GProp_PGProps_5: typeof GProp_PGProps_5;
  GProp_PrincipalProps: typeof GProp_PrincipalProps;
  GProp_SelGProps_1: typeof GProp_SelGProps_1;
  GProp_SelGProps_2: typeof GProp_SelGProps_2;
  GProp_SelGProps_3: typeof GProp_SelGProps_3;
  GProp_SelGProps_4: typeof GProp_SelGProps_4;
  GProp_SelGProps_5: typeof GProp_SelGProps_5;
  GProp_UndefinedAxis_1: typeof GProp_UndefinedAxis_1;
  GProp_UndefinedAxis_2: typeof GProp_UndefinedAxis_2;
  GProp_VelGProps_1: typeof GProp_VelGProps_1;
  GProp_VelGProps_2: typeof GProp_VelGProps_2;
  GProp_VelGProps_3: typeof GProp_VelGProps_3;
  GProp_VelGProps_4: typeof GProp_VelGProps_4;
  GProp_VelGProps_5: typeof GProp_VelGProps_5;
  Geom_Axis1Placement_1: typeof Geom_Axis1Placement_1;
  Geom_Axis1Placement_2: typeof Geom_Axis1Placement_2;
  Geom_Axis2Placement_1: typeof Geom_Axis2Placement_1;
  Geom_Axis2Placement_2: typeof Geom_Axis2Placement_2;
  Geom_CartesianPoint_1: typeof Geom_CartesianPoint_1;
  Geom_CartesianPoint_2: typeof Geom_CartesianPoint_2;
  Geom_Direction_1: typeof Geom_Direction_1;
  Geom_Direction_2: typeof Geom_Direction_2;
  GeomEvaluator_OffsetCurve_1: typeof GeomEvaluator_OffsetCurve_1;
  GeomEvaluator_OffsetCurve_2: typeof GeomEvaluator_OffsetCurve_2;
  Geom_OffsetCurve: typeof Geom_OffsetCurve;
  Geom_OsculatingSurface_1: typeof Geom_OsculatingSurface_1;
  Geom_OsculatingSurface_2: typeof Geom_OsculatingSurface_2;
  GeomEvaluator_OffsetSurface_1: typeof GeomEvaluator_OffsetSurface_1;
  GeomEvaluator_OffsetSurface_2: typeof GeomEvaluator_OffsetSurface_2;
  Geom_OffsetSurface: typeof Geom_OffsetSurface;
  Geom_Parabola_1: typeof Geom_Parabola_1;
  Geom_Parabola_2: typeof Geom_Parabola_2;
  Geom_Parabola_3: typeof Geom_Parabola_3;
  Geom_SphericalSurface_1: typeof Geom_SphericalSurface_1;
  Geom_SphericalSurface_2: typeof Geom_SphericalSurface_2;
  GeomEvaluator_SurfaceOfExtrusion_1: typeof GeomEvaluator_SurfaceOfExtrusion_1;
  GeomEvaluator_SurfaceOfExtrusion_2: typeof GeomEvaluator_SurfaceOfExtrusion_2;
  Geom_SurfaceOfLinearExtrusion: typeof Geom_SurfaceOfLinearExtrusion;
  GeomEvaluator_SurfaceOfRevolution_1: typeof GeomEvaluator_SurfaceOfRevolution_1;
  GeomEvaluator_SurfaceOfRevolution_2: typeof GeomEvaluator_SurfaceOfRevolution_2;
  Geom_SurfaceOfRevolution: typeof Geom_SurfaceOfRevolution;
  Geom_ToroidalSurface_1: typeof Geom_ToroidalSurface_1;
  Geom_ToroidalSurface_2: typeof Geom_ToroidalSurface_2;
  Geom_Transformation_1: typeof Geom_Transformation_1;
  Geom_Transformation_2: typeof Geom_Transformation_2;
  Geom_UndefinedDerivative_1: typeof Geom_UndefinedDerivative_1;
  Geom_UndefinedDerivative_2: typeof Geom_UndefinedDerivative_2;
  Geom_UndefinedValue_1: typeof Geom_UndefinedValue_1;
  Geom_UndefinedValue_2: typeof Geom_UndefinedValue_2;
  Geom_VectorWithMagnitude_1: typeof Geom_VectorWithMagnitude_1;
  Geom_VectorWithMagnitude_2: typeof Geom_VectorWithMagnitude_2;
  Geom_VectorWithMagnitude_3: typeof Geom_VectorWithMagnitude_3;
  GeomAdaptor_GHCurve_1: typeof GeomAdaptor_GHCurve_1;
  GeomAdaptor_GHCurve_2: typeof GeomAdaptor_GHCurve_2;
  GeomAdaptor_HCurve_1: typeof GeomAdaptor_HCurve_1;
  GeomAdaptor_HCurve_2: typeof GeomAdaptor_HCurve_2;
  GeomAdaptor_HCurve_3: typeof GeomAdaptor_HCurve_3;
  GeomAdaptor_HCurve_4: typeof GeomAdaptor_HCurve_4;
  GeomAdaptor_SurfaceOfLinearExtrusion_1: typeof GeomAdaptor_SurfaceOfLinearExtrusion_1;
  GeomAdaptor_SurfaceOfLinearExtrusion_2: typeof GeomAdaptor_SurfaceOfLinearExtrusion_2;
  GeomAdaptor_SurfaceOfLinearExtrusion_3: typeof GeomAdaptor_SurfaceOfLinearExtrusion_3;
  GeomAdaptor_HSurfaceOfLinearExtrusion_1: typeof GeomAdaptor_HSurfaceOfLinearExtrusion_1;
  GeomAdaptor_HSurfaceOfLinearExtrusion_2: typeof GeomAdaptor_HSurfaceOfLinearExtrusion_2;
  GeomAdaptor_SurfaceOfRevolution_1: typeof GeomAdaptor_SurfaceOfRevolution_1;
  GeomAdaptor_SurfaceOfRevolution_2: typeof GeomAdaptor_SurfaceOfRevolution_2;
  GeomAdaptor_SurfaceOfRevolution_3: typeof GeomAdaptor_SurfaceOfRevolution_3;
  GeomAdaptor_HSurfaceOfRevolution_1: typeof GeomAdaptor_HSurfaceOfRevolution_1;
  GeomAdaptor_HSurfaceOfRevolution_2: typeof GeomAdaptor_HSurfaceOfRevolution_2;
  GeomLProp_CLProps_1: typeof GeomLProp_CLProps_1;
  GeomLProp_CLProps_2: typeof GeomLProp_CLProps_2;
  GeomLProp_CLProps_3: typeof GeomLProp_CLProps_3;
  LProp3d_CLProps_1: typeof LProp3d_CLProps_1;
  LProp3d_CLProps_2: typeof LProp3d_CLProps_2;
  LProp3d_CLProps_3: typeof LProp3d_CLProps_3;
  LProp3d_SLProps_1: typeof LProp3d_SLProps_1;
  LProp3d_SLProps_2: typeof LProp3d_SLProps_2;
  LProp3d_SLProps_3: typeof LProp3d_SLProps_3;
  Handle_Geom_Geometry_1: typeof Handle_Geom_Geometry_1;
  Handle_Geom_Geometry_2: typeof Handle_Geom_Geometry_2;
  Handle_Geom_Geometry_3: typeof Handle_Geom_Geometry_3;
  Handle_Geom_Geometry_4: typeof Handle_Geom_Geometry_4;
  Handle_Geom_Curve_1: typeof Handle_Geom_Curve_1;
  Handle_Geom_Curve_2: typeof Handle_Geom_Curve_2;
  Handle_Geom_Curve_3: typeof Handle_Geom_Curve_3;
  Handle_Geom_Curve_4: typeof Handle_Geom_Curve_4;
  Handle_Geom_Surface_1: typeof Handle_Geom_Surface_1;
  Handle_Geom_Surface_2: typeof Handle_Geom_Surface_2;
  Handle_Geom_Surface_3: typeof Handle_Geom_Surface_3;
  Handle_Geom_Surface_4: typeof Handle_Geom_Surface_4;
  Handle_Geom_ElementarySurface_1: typeof Handle_Geom_ElementarySurface_1;
  Handle_Geom_ElementarySurface_2: typeof Handle_Geom_ElementarySurface_2;
  Handle_Geom_ElementarySurface_3: typeof Handle_Geom_ElementarySurface_3;
  Handle_Geom_ElementarySurface_4: typeof Handle_Geom_ElementarySurface_4;
  Handle_Geom_Plane_1: typeof Handle_Geom_Plane_1;
  Handle_Geom_Plane_2: typeof Handle_Geom_Plane_2;
  Handle_Geom_Plane_3: typeof Handle_Geom_Plane_3;
  Handle_Geom_Plane_4: typeof Handle_Geom_Plane_4;
  Handle_Geom_Line_1: typeof Handle_Geom_Line_1;
  Handle_Geom_Line_2: typeof Handle_Geom_Line_2;
  Handle_Geom_Line_3: typeof Handle_Geom_Line_3;
  Handle_Geom_Line_4: typeof Handle_Geom_Line_4;
  Handle_Adaptor3d_HCurve_1: typeof Handle_Adaptor3d_HCurve_1;
  Handle_Adaptor3d_HCurve_2: typeof Handle_Adaptor3d_HCurve_2;
  Handle_Adaptor3d_HCurve_3: typeof Handle_Adaptor3d_HCurve_3;
  Handle_Adaptor3d_HCurve_4: typeof Handle_Adaptor3d_HCurve_4;
  Handle_Adaptor3d_HCurveOnSurface_1: typeof Handle_Adaptor3d_HCurveOnSurface_1;
  Handle_Adaptor3d_HCurveOnSurface_2: typeof Handle_Adaptor3d_HCurveOnSurface_2;
  Handle_Adaptor3d_HCurveOnSurface_3: typeof Handle_Adaptor3d_HCurveOnSurface_3;
  Handle_Adaptor3d_HCurveOnSurface_4: typeof Handle_Adaptor3d_HCurveOnSurface_4;
  Handle_Adaptor3d_HIsoCurve_1: typeof Handle_Adaptor3d_HIsoCurve_1;
  Handle_Adaptor3d_HIsoCurve_2: typeof Handle_Adaptor3d_HIsoCurve_2;
  Handle_Adaptor3d_HIsoCurve_3: typeof Handle_Adaptor3d_HIsoCurve_3;
  Handle_Adaptor3d_HIsoCurve_4: typeof Handle_Adaptor3d_HIsoCurve_4;
  Handle_Adaptor3d_HSurface_1: typeof Handle_Adaptor3d_HSurface_1;
  Handle_Adaptor3d_HSurface_2: typeof Handle_Adaptor3d_HSurface_2;
  Handle_Adaptor3d_HSurface_3: typeof Handle_Adaptor3d_HSurface_3;
  Handle_Adaptor3d_HSurface_4: typeof Handle_Adaptor3d_HSurface_4;
  Handle_Geom_BoundedSurface_1: typeof Handle_Geom_BoundedSurface_1;
  Handle_Geom_BoundedSurface_2: typeof Handle_Geom_BoundedSurface_2;
  Handle_Geom_BoundedSurface_3: typeof Handle_Geom_BoundedSurface_3;
  Handle_Geom_BoundedSurface_4: typeof Handle_Geom_BoundedSurface_4;
  Handle_Geom_BezierSurface_1: typeof Handle_Geom_BezierSurface_1;
  Handle_Geom_BezierSurface_2: typeof Handle_Geom_BezierSurface_2;
  Handle_Geom_BezierSurface_3: typeof Handle_Geom_BezierSurface_3;
  Handle_Geom_BezierSurface_4: typeof Handle_Geom_BezierSurface_4;
  Handle_Geom_BSplineSurface_1: typeof Handle_Geom_BSplineSurface_1;
  Handle_Geom_BSplineSurface_2: typeof Handle_Geom_BSplineSurface_2;
  Handle_Geom_BSplineSurface_3: typeof Handle_Geom_BSplineSurface_3;
  Handle_Geom_BSplineSurface_4: typeof Handle_Geom_BSplineSurface_4;
  Handle_Adaptor3d_HVertex_1: typeof Handle_Adaptor3d_HVertex_1;
  Handle_Adaptor3d_HVertex_2: typeof Handle_Adaptor3d_HVertex_2;
  Handle_Adaptor3d_HVertex_3: typeof Handle_Adaptor3d_HVertex_3;
  Handle_Adaptor3d_HVertex_4: typeof Handle_Adaptor3d_HVertex_4;
  Handle_Adaptor3d_TopolTool_1: typeof Handle_Adaptor3d_TopolTool_1;
  Handle_Adaptor3d_TopolTool_2: typeof Handle_Adaptor3d_TopolTool_2;
  Handle_Adaptor3d_TopolTool_3: typeof Handle_Adaptor3d_TopolTool_3;
  Handle_Adaptor3d_TopolTool_4: typeof Handle_Adaptor3d_TopolTool_4;
  Handle_TColGeom_HArray1OfSurface_1: typeof Handle_TColGeom_HArray1OfSurface_1;
  Handle_TColGeom_HArray1OfSurface_2: typeof Handle_TColGeom_HArray1OfSurface_2;
  Handle_TColGeom_HArray1OfSurface_3: typeof Handle_TColGeom_HArray1OfSurface_3;
  Handle_TColGeom_HArray1OfSurface_4: typeof Handle_TColGeom_HArray1OfSurface_4;
  Handle_Geom_BoundedCurve_1: typeof Handle_Geom_BoundedCurve_1;
  Handle_Geom_BoundedCurve_2: typeof Handle_Geom_BoundedCurve_2;
  Handle_Geom_BoundedCurve_3: typeof Handle_Geom_BoundedCurve_3;
  Handle_Geom_BoundedCurve_4: typeof Handle_Geom_BoundedCurve_4;
  Handle_Geom_BSplineCurve_1: typeof Handle_Geom_BSplineCurve_1;
  Handle_Geom_BSplineCurve_2: typeof Handle_Geom_BSplineCurve_2;
  Handle_Geom_BSplineCurve_3: typeof Handle_Geom_BSplineCurve_3;
  Handle_Geom_BSplineCurve_4: typeof Handle_Geom_BSplineCurve_4;
  Handle_GeomEvaluator_Surface_1: typeof Handle_GeomEvaluator_Surface_1;
  Handle_GeomEvaluator_Surface_2: typeof Handle_GeomEvaluator_Surface_2;
  Handle_GeomEvaluator_Surface_3: typeof Handle_GeomEvaluator_Surface_3;
  Handle_GeomEvaluator_Surface_4: typeof Handle_GeomEvaluator_Surface_4;
  Handle_GeomEvaluator_Curve_1: typeof Handle_GeomEvaluator_Curve_1;
  Handle_GeomEvaluator_Curve_2: typeof Handle_GeomEvaluator_Curve_2;
  Handle_GeomEvaluator_Curve_3: typeof Handle_GeomEvaluator_Curve_3;
  Handle_GeomEvaluator_Curve_4: typeof Handle_GeomEvaluator_Curve_4;
  Handle_Geom_BezierCurve_1: typeof Handle_Geom_BezierCurve_1;
  Handle_Geom_BezierCurve_2: typeof Handle_Geom_BezierCurve_2;
  Handle_Geom_BezierCurve_3: typeof Handle_Geom_BezierCurve_3;
  Handle_Geom_BezierCurve_4: typeof Handle_Geom_BezierCurve_4;
  Handle_GeomAdaptor_GHSurface_1: typeof Handle_GeomAdaptor_GHSurface_1;
  Handle_GeomAdaptor_GHSurface_2: typeof Handle_GeomAdaptor_GHSurface_2;
  Handle_GeomAdaptor_GHSurface_3: typeof Handle_GeomAdaptor_GHSurface_3;
  Handle_GeomAdaptor_GHSurface_4: typeof Handle_GeomAdaptor_GHSurface_4;
  Handle_GeomAdaptor_HSurface_1: typeof Handle_GeomAdaptor_HSurface_1;
  Handle_GeomAdaptor_HSurface_2: typeof Handle_GeomAdaptor_HSurface_2;
  Handle_GeomAdaptor_HSurface_3: typeof Handle_GeomAdaptor_HSurface_3;
  Handle_GeomAdaptor_HSurface_4: typeof Handle_GeomAdaptor_HSurface_4;
  Handle_Geom_TrimmedCurve_1: typeof Handle_Geom_TrimmedCurve_1;
  Handle_Geom_TrimmedCurve_2: typeof Handle_Geom_TrimmedCurve_2;
  Handle_Geom_TrimmedCurve_3: typeof Handle_Geom_TrimmedCurve_3;
  Handle_Geom_TrimmedCurve_4: typeof Handle_Geom_TrimmedCurve_4;
  Handle_Geom_Conic_1: typeof Handle_Geom_Conic_1;
  Handle_Geom_Conic_2: typeof Handle_Geom_Conic_2;
  Handle_Geom_Conic_3: typeof Handle_Geom_Conic_3;
  Handle_Geom_Conic_4: typeof Handle_Geom_Conic_4;
  Handle_Geom_Circle_1: typeof Handle_Geom_Circle_1;
  Handle_Geom_Circle_2: typeof Handle_Geom_Circle_2;
  Handle_Geom_Circle_3: typeof Handle_Geom_Circle_3;
  Handle_Geom_Circle_4: typeof Handle_Geom_Circle_4;
  Handle_Geom_ConicalSurface_1: typeof Handle_Geom_ConicalSurface_1;
  Handle_Geom_ConicalSurface_2: typeof Handle_Geom_ConicalSurface_2;
  Handle_Geom_ConicalSurface_3: typeof Handle_Geom_ConicalSurface_3;
  Handle_Geom_ConicalSurface_4: typeof Handle_Geom_ConicalSurface_4;
  Handle_Geom_CylindricalSurface_1: typeof Handle_Geom_CylindricalSurface_1;
  Handle_Geom_CylindricalSurface_2: typeof Handle_Geom_CylindricalSurface_2;
  Handle_Geom_CylindricalSurface_3: typeof Handle_Geom_CylindricalSurface_3;
  Handle_Geom_CylindricalSurface_4: typeof Handle_Geom_CylindricalSurface_4;
  Handle_Geom_Ellipse_1: typeof Handle_Geom_Ellipse_1;
  Handle_Geom_Ellipse_2: typeof Handle_Geom_Ellipse_2;
  Handle_Geom_Ellipse_3: typeof Handle_Geom_Ellipse_3;
  Handle_Geom_Ellipse_4: typeof Handle_Geom_Ellipse_4;
  Handle_Geom_Hyperbola_1: typeof Handle_Geom_Hyperbola_1;
  Handle_Geom_Hyperbola_2: typeof Handle_Geom_Hyperbola_2;
  Handle_Geom_Hyperbola_3: typeof Handle_Geom_Hyperbola_3;
  Handle_Geom_Hyperbola_4: typeof Handle_Geom_Hyperbola_4;
  Handle_Geom_RectangularTrimmedSurface_1: typeof Handle_Geom_RectangularTrimmedSurface_1;
  Handle_Geom_RectangularTrimmedSurface_2: typeof Handle_Geom_RectangularTrimmedSurface_2;
  Handle_Geom_RectangularTrimmedSurface_3: typeof Handle_Geom_RectangularTrimmedSurface_3;
  Handle_Geom_RectangularTrimmedSurface_4: typeof Handle_Geom_RectangularTrimmedSurface_4;
  Handle_GProp_UndefinedAxis_1: typeof Handle_GProp_UndefinedAxis_1;
  Handle_GProp_UndefinedAxis_2: typeof Handle_GProp_UndefinedAxis_2;
  Handle_GProp_UndefinedAxis_3: typeof Handle_GProp_UndefinedAxis_3;
  Handle_GProp_UndefinedAxis_4: typeof Handle_GProp_UndefinedAxis_4;
  Handle_Geom_AxisPlacement_1: typeof Handle_Geom_AxisPlacement_1;
  Handle_Geom_AxisPlacement_2: typeof Handle_Geom_AxisPlacement_2;
  Handle_Geom_AxisPlacement_3: typeof Handle_Geom_AxisPlacement_3;
  Handle_Geom_AxisPlacement_4: typeof Handle_Geom_AxisPlacement_4;
  Handle_Geom_Axis1Placement_1: typeof Handle_Geom_Axis1Placement_1;
  Handle_Geom_Axis1Placement_2: typeof Handle_Geom_Axis1Placement_2;
  Handle_Geom_Axis1Placement_3: typeof Handle_Geom_Axis1Placement_3;
  Handle_Geom_Axis1Placement_4: typeof Handle_Geom_Axis1Placement_4;
  Handle_Geom_Axis2Placement_1: typeof Handle_Geom_Axis2Placement_1;
  Handle_Geom_Axis2Placement_2: typeof Handle_Geom_Axis2Placement_2;
  Handle_Geom_Axis2Placement_3: typeof Handle_Geom_Axis2Placement_3;
  Handle_Geom_Axis2Placement_4: typeof Handle_Geom_Axis2Placement_4;
  Handle_Geom_Point_1: typeof Handle_Geom_Point_1;
  Handle_Geom_Point_2: typeof Handle_Geom_Point_2;
  Handle_Geom_Point_3: typeof Handle_Geom_Point_3;
  Handle_Geom_Point_4: typeof Handle_Geom_Point_4;
  Handle_Geom_CartesianPoint_1: typeof Handle_Geom_CartesianPoint_1;
  Handle_Geom_CartesianPoint_2: typeof Handle_Geom_CartesianPoint_2;
  Handle_Geom_CartesianPoint_3: typeof Handle_Geom_CartesianPoint_3;
  Handle_Geom_CartesianPoint_4: typeof Handle_Geom_CartesianPoint_4;
  Handle_Geom_Vector_1: typeof Handle_Geom_Vector_1;
  Handle_Geom_Vector_2: typeof Handle_Geom_Vector_2;
  Handle_Geom_Vector_3: typeof Handle_Geom_Vector_3;
  Handle_Geom_Vector_4: typeof Handle_Geom_Vector_4;
  Handle_Geom_Direction_1: typeof Handle_Geom_Direction_1;
  Handle_Geom_Direction_2: typeof Handle_Geom_Direction_2;
  Handle_Geom_Direction_3: typeof Handle_Geom_Direction_3;
  Handle_Geom_Direction_4: typeof Handle_Geom_Direction_4;
  Handle_Geom_HSequenceOfBSplineSurface_1: typeof Handle_Geom_HSequenceOfBSplineSurface_1;
  Handle_Geom_HSequenceOfBSplineSurface_2: typeof Handle_Geom_HSequenceOfBSplineSurface_2;
  Handle_Geom_HSequenceOfBSplineSurface_3: typeof Handle_Geom_HSequenceOfBSplineSurface_3;
  Handle_Geom_HSequenceOfBSplineSurface_4: typeof Handle_Geom_HSequenceOfBSplineSurface_4;
  Handle_GeomEvaluator_OffsetCurve_1: typeof Handle_GeomEvaluator_OffsetCurve_1;
  Handle_GeomEvaluator_OffsetCurve_2: typeof Handle_GeomEvaluator_OffsetCurve_2;
  Handle_GeomEvaluator_OffsetCurve_3: typeof Handle_GeomEvaluator_OffsetCurve_3;
  Handle_GeomEvaluator_OffsetCurve_4: typeof Handle_GeomEvaluator_OffsetCurve_4;
  Handle_Geom_OffsetCurve_1: typeof Handle_Geom_OffsetCurve_1;
  Handle_Geom_OffsetCurve_2: typeof Handle_Geom_OffsetCurve_2;
  Handle_Geom_OffsetCurve_3: typeof Handle_Geom_OffsetCurve_3;
  Handle_Geom_OffsetCurve_4: typeof Handle_Geom_OffsetCurve_4;
  Handle_Geom_OsculatingSurface_1: typeof Handle_Geom_OsculatingSurface_1;
  Handle_Geom_OsculatingSurface_2: typeof Handle_Geom_OsculatingSurface_2;
  Handle_Geom_OsculatingSurface_3: typeof Handle_Geom_OsculatingSurface_3;
  Handle_Geom_OsculatingSurface_4: typeof Handle_Geom_OsculatingSurface_4;
  Handle_GeomEvaluator_OffsetSurface_1: typeof Handle_GeomEvaluator_OffsetSurface_1;
  Handle_GeomEvaluator_OffsetSurface_2: typeof Handle_GeomEvaluator_OffsetSurface_2;
  Handle_GeomEvaluator_OffsetSurface_3: typeof Handle_GeomEvaluator_OffsetSurface_3;
  Handle_GeomEvaluator_OffsetSurface_4: typeof Handle_GeomEvaluator_OffsetSurface_4;
  Handle_Geom_OffsetSurface_1: typeof Handle_Geom_OffsetSurface_1;
  Handle_Geom_OffsetSurface_2: typeof Handle_Geom_OffsetSurface_2;
  Handle_Geom_OffsetSurface_3: typeof Handle_Geom_OffsetSurface_3;
  Handle_Geom_OffsetSurface_4: typeof Handle_Geom_OffsetSurface_4;
  Handle_Geom_Parabola_1: typeof Handle_Geom_Parabola_1;
  Handle_Geom_Parabola_2: typeof Handle_Geom_Parabola_2;
  Handle_Geom_Parabola_3: typeof Handle_Geom_Parabola_3;
  Handle_Geom_Parabola_4: typeof Handle_Geom_Parabola_4;
  Handle_Geom_SphericalSurface_1: typeof Handle_Geom_SphericalSurface_1;
  Handle_Geom_SphericalSurface_2: typeof Handle_Geom_SphericalSurface_2;
  Handle_Geom_SphericalSurface_3: typeof Handle_Geom_SphericalSurface_3;
  Handle_Geom_SphericalSurface_4: typeof Handle_Geom_SphericalSurface_4;
  Handle_Geom_SweptSurface_1: typeof Handle_Geom_SweptSurface_1;
  Handle_Geom_SweptSurface_2: typeof Handle_Geom_SweptSurface_2;
  Handle_Geom_SweptSurface_3: typeof Handle_Geom_SweptSurface_3;
  Handle_Geom_SweptSurface_4: typeof Handle_Geom_SweptSurface_4;
  Handle_GeomEvaluator_SurfaceOfExtrusion_1: typeof Handle_GeomEvaluator_SurfaceOfExtrusion_1;
  Handle_GeomEvaluator_SurfaceOfExtrusion_2: typeof Handle_GeomEvaluator_SurfaceOfExtrusion_2;
  Handle_GeomEvaluator_SurfaceOfExtrusion_3: typeof Handle_GeomEvaluator_SurfaceOfExtrusion_3;
  Handle_GeomEvaluator_SurfaceOfExtrusion_4: typeof Handle_GeomEvaluator_SurfaceOfExtrusion_4;
  Handle_Geom_SurfaceOfLinearExtrusion_1: typeof Handle_Geom_SurfaceOfLinearExtrusion_1;
  Handle_Geom_SurfaceOfLinearExtrusion_2: typeof Handle_Geom_SurfaceOfLinearExtrusion_2;
  Handle_Geom_SurfaceOfLinearExtrusion_3: typeof Handle_Geom_SurfaceOfLinearExtrusion_3;
  Handle_Geom_SurfaceOfLinearExtrusion_4: typeof Handle_Geom_SurfaceOfLinearExtrusion_4;
  Handle_GeomEvaluator_SurfaceOfRevolution_1: typeof Handle_GeomEvaluator_SurfaceOfRevolution_1;
  Handle_GeomEvaluator_SurfaceOfRevolution_2: typeof Handle_GeomEvaluator_SurfaceOfRevolution_2;
  Handle_GeomEvaluator_SurfaceOfRevolution_3: typeof Handle_GeomEvaluator_SurfaceOfRevolution_3;
  Handle_GeomEvaluator_SurfaceOfRevolution_4: typeof Handle_GeomEvaluator_SurfaceOfRevolution_4;
  Handle_Geom_SurfaceOfRevolution_1: typeof Handle_Geom_SurfaceOfRevolution_1;
  Handle_Geom_SurfaceOfRevolution_2: typeof Handle_Geom_SurfaceOfRevolution_2;
  Handle_Geom_SurfaceOfRevolution_3: typeof Handle_Geom_SurfaceOfRevolution_3;
  Handle_Geom_SurfaceOfRevolution_4: typeof Handle_Geom_SurfaceOfRevolution_4;
  Handle_Geom_ToroidalSurface_1: typeof Handle_Geom_ToroidalSurface_1;
  Handle_Geom_ToroidalSurface_2: typeof Handle_Geom_ToroidalSurface_2;
  Handle_Geom_ToroidalSurface_3: typeof Handle_Geom_ToroidalSurface_3;
  Handle_Geom_ToroidalSurface_4: typeof Handle_Geom_ToroidalSurface_4;
  Handle_Geom_Transformation_1: typeof Handle_Geom_Transformation_1;
  Handle_Geom_Transformation_2: typeof Handle_Geom_Transformation_2;
  Handle_Geom_Transformation_3: typeof Handle_Geom_Transformation_3;
  Handle_Geom_Transformation_4: typeof Handle_Geom_Transformation_4;
  Handle_Geom_UndefinedDerivative_1: typeof Handle_Geom_UndefinedDerivative_1;
  Handle_Geom_UndefinedDerivative_2: typeof Handle_Geom_UndefinedDerivative_2;
  Handle_Geom_UndefinedDerivative_3: typeof Handle_Geom_UndefinedDerivative_3;
  Handle_Geom_UndefinedDerivative_4: typeof Handle_Geom_UndefinedDerivative_4;
  Handle_Geom_UndefinedValue_1: typeof Handle_Geom_UndefinedValue_1;
  Handle_Geom_UndefinedValue_2: typeof Handle_Geom_UndefinedValue_2;
  Handle_Geom_UndefinedValue_3: typeof Handle_Geom_UndefinedValue_3;
  Handle_Geom_UndefinedValue_4: typeof Handle_Geom_UndefinedValue_4;
  Handle_Geom_VectorWithMagnitude_1: typeof Handle_Geom_VectorWithMagnitude_1;
  Handle_Geom_VectorWithMagnitude_2: typeof Handle_Geom_VectorWithMagnitude_2;
  Handle_Geom_VectorWithMagnitude_3: typeof Handle_Geom_VectorWithMagnitude_3;
  Handle_Geom_VectorWithMagnitude_4: typeof Handle_Geom_VectorWithMagnitude_4;
  Handle_GeomAdaptor_GHCurve_1: typeof Handle_GeomAdaptor_GHCurve_1;
  Handle_GeomAdaptor_GHCurve_2: typeof Handle_GeomAdaptor_GHCurve_2;
  Handle_GeomAdaptor_GHCurve_3: typeof Handle_GeomAdaptor_GHCurve_3;
  Handle_GeomAdaptor_GHCurve_4: typeof Handle_GeomAdaptor_GHCurve_4;
  Handle_GeomAdaptor_HCurve_1: typeof Handle_GeomAdaptor_HCurve_1;
  Handle_GeomAdaptor_HCurve_2: typeof Handle_GeomAdaptor_HCurve_2;
  Handle_GeomAdaptor_HCurve_3: typeof Handle_GeomAdaptor_HCurve_3;
  Handle_GeomAdaptor_HCurve_4: typeof Handle_GeomAdaptor_HCurve_4;
  Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_1: typeof Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_1;
  Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_2: typeof Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_2;
  Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_3: typeof Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_3;
  Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_4: typeof Handle_GeomAdaptor_HSurfaceOfLinearExtrusion_4;
  Handle_GeomAdaptor_HSurfaceOfRevolution_1: typeof Handle_GeomAdaptor_HSurfaceOfRevolution_1;
  Handle_GeomAdaptor_HSurfaceOfRevolution_2: typeof Handle_GeomAdaptor_HSurfaceOfRevolution_2;
  Handle_GeomAdaptor_HSurfaceOfRevolution_3: typeof Handle_GeomAdaptor_HSurfaceOfRevolution_3;
  Handle_GeomAdaptor_HSurfaceOfRevolution_4: typeof Handle_GeomAdaptor_HSurfaceOfRevolution_4;
  Handle_TColGeom_HArray1OfBSplineCurve_1: typeof Handle_TColGeom_HArray1OfBSplineCurve_1;
  Handle_TColGeom_HArray1OfBSplineCurve_2: typeof Handle_TColGeom_HArray1OfBSplineCurve_2;
  Handle_TColGeom_HArray1OfBSplineCurve_3: typeof Handle_TColGeom_HArray1OfBSplineCurve_3;
  Handle_TColGeom_HArray1OfBSplineCurve_4: typeof Handle_TColGeom_HArray1OfBSplineCurve_4;
  Handle_TColGeom_HSequenceOfBoundedCurve_1: typeof Handle_TColGeom_HSequenceOfBoundedCurve_1;
  Handle_TColGeom_HSequenceOfBoundedCurve_2: typeof Handle_TColGeom_HSequenceOfBoundedCurve_2;
  Handle_TColGeom_HSequenceOfBoundedCurve_3: typeof Handle_TColGeom_HSequenceOfBoundedCurve_3;
  Handle_TColGeom_HSequenceOfBoundedCurve_4: typeof Handle_TColGeom_HSequenceOfBoundedCurve_4;
  Handle_TColGeom_HArray2OfSurface_1: typeof Handle_TColGeom_HArray2OfSurface_1;
  Handle_TColGeom_HArray2OfSurface_2: typeof Handle_TColGeom_HArray2OfSurface_2;
  Handle_TColGeom_HArray2OfSurface_3: typeof Handle_TColGeom_HArray2OfSurface_3;
  Handle_TColGeom_HArray2OfSurface_4: typeof Handle_TColGeom_HArray2OfSurface_4;
  Handle_TColGeom_HSequenceOfCurve_1: typeof Handle_TColGeom_HSequenceOfCurve_1;
  Handle_TColGeom_HSequenceOfCurve_2: typeof Handle_TColGeom_HSequenceOfCurve_2;
  Handle_TColGeom_HSequenceOfCurve_3: typeof Handle_TColGeom_HSequenceOfCurve_3;
  Handle_TColGeom_HSequenceOfCurve_4: typeof Handle_TColGeom_HSequenceOfCurve_4;
  Handle_TColGeom_HArray1OfCurve_1: typeof Handle_TColGeom_HArray1OfCurve_1;
  Handle_TColGeom_HArray1OfCurve_2: typeof Handle_TColGeom_HArray1OfCurve_2;
  Handle_TColGeom_HArray1OfCurve_3: typeof Handle_TColGeom_HArray1OfCurve_3;
  Handle_TColGeom_HArray1OfCurve_4: typeof Handle_TColGeom_HArray1OfCurve_4;
  Handle_TColGeom_HArray1OfBezierCurve_1: typeof Handle_TColGeom_HArray1OfBezierCurve_1;
  Handle_TColGeom_HArray1OfBezierCurve_2: typeof Handle_TColGeom_HArray1OfBezierCurve_2;
  Handle_TColGeom_HArray1OfBezierCurve_3: typeof Handle_TColGeom_HArray1OfBezierCurve_3;
  Handle_TColGeom_HArray1OfBezierCurve_4: typeof Handle_TColGeom_HArray1OfBezierCurve_4;
  TopAbs_Orientation: typeof TopAbs_Orientation;
  TopAbs_ShapeEnum: typeof TopAbs_ShapeEnum;
  TopAbs_State: typeof TopAbs_State;
  GProp_ValueType: typeof GProp_ValueType;
  GProp_EquaType: typeof GProp_EquaType;
};
