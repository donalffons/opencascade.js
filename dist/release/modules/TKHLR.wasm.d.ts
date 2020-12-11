declare const libName = "./modules/TKHLR.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Contap_ArcFunction extends math_FunctionWithDerivative {
  constructor()
  Set_1(S: Handle_Adaptor3d_HSurface): void;
  Set_2(Direction: gp_Dir): void;
  Set_3(Direction: gp_Dir, Angle: Standard_Real): void;
  Set_4(Eye: gp_Pnt): void;
  Set_5(Eye: gp_Pnt, Angle: Standard_Real): void;
  Set_6(A: any): void;
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
  NbSamples(): Standard_Integer;
  GetStateNumber(): Standard_Integer;
  Valpoint(Index: Standard_Integer): gp_Pnt;
  Quadric(): IntSurf_Quadric;
  Surface(): any;
  LastComputedPoint(): gp_Pnt;
}

export declare class Contap_ContAna {
  constructor()
  Perform_1(S: gp_Sphere, D: gp_Dir): void;
  Perform_2(S: gp_Sphere, D: gp_Dir, Ang: Standard_Real): void;
  Perform_3(S: gp_Sphere, Eye: gp_Pnt): void;
  Perform_4(C: gp_Cylinder, D: gp_Dir): void;
  Perform_5(C: gp_Cylinder, D: gp_Dir, Ang: Standard_Real): void;
  Perform_6(C: gp_Cylinder, Eye: gp_Pnt): void;
  Perform_7(C: gp_Cone, D: gp_Dir): void;
  Perform_8(C: gp_Cone, D: gp_Dir, Ang: Standard_Real): void;
  Perform_9(C: gp_Cone, Eye: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbContours(): Standard_Integer;
  TypeContour(): GeomAbs_CurveType;
  Circle(): gp_Circ;
  Line(Index: Standard_Integer): gp_Lin;
}

export declare class Contap_Point {
  SetValue(Pt: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  SetParameter(Para: Standard_Real): void;
  SetVertex(V: any): void;
  SetArc(A: any, Param: Standard_Real, TLine: IntSurf_Transition, TArc: IntSurf_Transition): void;
  SetMultiple(): void;
  SetInternal(): void;
  Value(): gp_Pnt;
  ParameterOnLine(): Standard_Real;
  Parameters(U1: Standard_Real, V1: Standard_Real): void;
  IsOnArc(): Standard_Boolean;
  Arc(): any;
  ParameterOnArc(): Standard_Real;
  TransitionOnLine(): IntSurf_Transition;
  TransitionOnArc(): IntSurf_Transition;
  IsVertex(): Standard_Boolean;
  Vertex(): any;
  IsMultiple(): Standard_Boolean;
  IsInternal(): Standard_Boolean;
}

  export declare class Contap_Point_1 extends Contap_Point {
    constructor();
  }

  export declare class Contap_Point_2 extends Contap_Point {
    constructor(Pt: gp_Pnt, U: Standard_Real, V: Standard_Real);
  }

export declare class Contap_Line {
  constructor()
  SetLineOn2S(L: any): void;
  Clear(): void;
  LineOn2S(): any;
  ResetSeqOfVertex(): void;
  Add_1(P: IntSurf_PntOn2S): void;
  SetValue_1(L: gp_Lin): void;
  SetValue_2(C: gp_Circ): void;
  SetValue_3(A: any): void;
  Add_2(P: Contap_Point): void;
  NbVertex(): Standard_Integer;
  Vertex(Index: Standard_Integer): Contap_Point;
  TypeContour(): Contap_IType;
  NbPnts(): Standard_Integer;
  Point(Index: Standard_Integer): IntSurf_PntOn2S;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Arc(): any;
  SetTransitionOnS(T: IntSurf_TypeTrans): void;
  TransitionOnS(): IntSurf_TypeTrans;
}

export declare class Contap_ThePathPointOfTheSearch {
  SetValue_1(P: gp_Pnt, Tol: Standard_Real, V: any, A: any, Parameter: Standard_Real): void;
  SetValue_2(P: gp_Pnt, Tol: Standard_Real, A: any, Parameter: Standard_Real): void;
  Value(): gp_Pnt;
  Tolerance(): Standard_Real;
  IsNew(): Standard_Boolean;
  Vertex(): any;
  Arc(): any;
  Parameter(): Standard_Real;
}

  export declare class Contap_ThePathPointOfTheSearch_1 extends Contap_ThePathPointOfTheSearch {
    constructor();
  }

  export declare class Contap_ThePathPointOfTheSearch_2 extends Contap_ThePathPointOfTheSearch {
    constructor(P: gp_Pnt, Tol: Standard_Real, V: any, A: any, Parameter: Standard_Real);
  }

  export declare class Contap_ThePathPointOfTheSearch_3 extends Contap_ThePathPointOfTheSearch {
    constructor(P: gp_Pnt, Tol: Standard_Real, A: any, Parameter: Standard_Real);
  }

export declare class Contap_TheSegmentOfTheSearch {
  constructor()
  SetValue(A: any): void;
  SetLimitPoint(V: Contap_ThePathPointOfTheSearch, First: Standard_Boolean): void;
  Curve(): any;
  HasFirstPoint(): Standard_Boolean;
  FirstPoint(): Contap_ThePathPointOfTheSearch;
  HasLastPoint(): Standard_Boolean;
  LastPoint(): Contap_ThePathPointOfTheSearch;
}

export declare class Contap_TheSearch {
  constructor()
  Perform(F: Contap_ArcFunction, Domain: any, TolBoundary: Standard_Real, TolTangency: Standard_Real, RecheckOnRegularity: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  AllArcSolution(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): Contap_ThePathPointOfTheSearch;
  NbSegments(): Standard_Integer;
  Segment(Index: Standard_Integer): Contap_TheSegmentOfTheSearch;
}

export declare class Contap_TheSearchInside {
  Perform_1(F: Contap_SurfFunction, Surf: any, T: any, Epsilon: Standard_Real): void;
  Perform_2(F: Contap_SurfFunction, Surf: any, UStart: Standard_Real, VStart: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Value(Index: Standard_Integer): IntSurf_InteriorPoint;
}

  export declare class Contap_TheSearchInside_1 extends Contap_TheSearchInside {
    constructor();
  }

  export declare class Contap_TheSearchInside_2 extends Contap_TheSearchInside {
    constructor(F: Contap_SurfFunction, Surf: any, T: any, Epsilon: Standard_Real);
  }

export declare class Contap_SurfFunction extends math_FunctionSetWithDerivatives {
  constructor()
  Set_1(S: any): void;
  Set_2(Eye: gp_Pnt): void;
  Set_3(Dir: gp_Dir): void;
  Set_4(Dir: gp_Dir, Angle: Standard_Real): void;
  Set_5(Eye: gp_Pnt, Angle: Standard_Real): void;
  Set_6(Tolerance: Standard_Real): void;
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
  FunctionType(): Contap_TFunction;
  Eye(): gp_Pnt;
  Direction(): gp_Dir;
  Angle(): Standard_Real;
  Surface(): any;
  PSurface(): any;
}

export declare class Contap_Contour {
  Perform_1(Surf: any, Domain: any): void;
  Perform_2(Surf: any, Domain: any, Direction: gp_Vec): void;
  Perform_3(Surf: any, Domain: any, Direction: gp_Vec, Angle: Standard_Real): void;
  Perform_4(Surf: any, Domain: any, Eye: gp_Pnt): void;
  Init_1(Direction: gp_Vec): void;
  Init_2(Direction: gp_Vec, Angle: Standard_Real): void;
  Init_3(Eye: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  NbLines(): Standard_Integer;
  Line(Index: Standard_Integer): Contap_Line;
  SurfaceFunction(): Contap_SurfFunction;
}

  export declare class Contap_Contour_1 extends Contap_Contour {
    constructor();
  }

  export declare class Contap_Contour_2 extends Contap_Contour {
    constructor(Direction: gp_Vec);
  }

  export declare class Contap_Contour_3 extends Contap_Contour {
    constructor(Direction: gp_Vec, Angle: Standard_Real);
  }

  export declare class Contap_Contour_4 extends Contap_Contour {
    constructor(Eye: gp_Pnt);
  }

  export declare class Contap_Contour_5 extends Contap_Contour {
    constructor(Surf: any, Domain: any, Direction: gp_Vec);
  }

  export declare class Contap_Contour_6 extends Contap_Contour {
    constructor(Surf: any, Domain: any, Direction: gp_Vec, Angle: Standard_Real);
  }

  export declare class Contap_Contour_7 extends Contap_Contour {
    constructor(Surf: any, Domain: any, Eye: gp_Pnt);
  }

export declare class Contap_HContTool {
  constructor();
  NbSamplesU(S: any, u1: Standard_Real, u2: Standard_Real): Standard_Integer;
  NbSamplesV(S: any, v1: Standard_Real, v2: Standard_Real): Standard_Integer;
  NbSamplePoints(S: any): Standard_Integer;
  SamplePoint(S: any, Index: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
  HasBeenSeen(C: any): Standard_Boolean;
  NbSamplesOnArc(A: any): Standard_Integer;
  Bounds(C: any, Ufirst: Standard_Real, Ulast: Standard_Real): void;
  Project(C: any, P: gp_Pnt2d, Paramproj: Standard_Real, Ptproj: gp_Pnt2d): Standard_Boolean;
  Tolerance(V: any, C: any): Standard_Real;
  Parameter(V: any, C: any): Standard_Real;
  NbPoints(C: any): Standard_Integer;
  Value(C: any, Index: Standard_Integer, Pt: gp_Pnt, Tol: Standard_Real, U: Standard_Real): void;
  IsVertex(C: any, Index: Standard_Integer): Standard_Boolean;
  Vertex(C: any, Index: Standard_Integer, V: any): void;
  NbSegments(C: any): Standard_Integer;
  HasFirstPoint(C: any, Index: Standard_Integer, IndFirst: Standard_Integer): Standard_Boolean;
  HasLastPoint(C: any, Index: Standard_Integer, IndLast: Standard_Integer): Standard_Boolean;
  IsAllSolution(C: any): Standard_Boolean;
}

export declare class Contap_HCurve2dTool {
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

export declare class Contap_TheIWLineOfTheIWalking extends Standard_Transient {
  constructor(theAllocator: IntSurf_Allocator)
  Reverse(): void;
  Cut(Index: Standard_Integer): void;
  AddPoint(P: IntSurf_PntOn2S): void;
  AddStatusFirst_1(Closed: Standard_Boolean, HasFirst: Standard_Boolean): void;
  AddStatusFirst_2(Closed: Standard_Boolean, HasLast: Standard_Boolean, Index: Standard_Integer, P: IntSurf_PathPoint): void;
  AddStatusFirstLast(Closed: Standard_Boolean, HasFirst: Standard_Boolean, HasLast: Standard_Boolean): void;
  AddStatusLast_1(HasLast: Standard_Boolean): void;
  AddStatusLast_2(HasLast: Standard_Boolean, Index: Standard_Integer, P: IntSurf_PathPoint): void;
  AddIndexPassing(Index: Standard_Integer): void;
  SetTangentVector(V: gp_Vec, Index: Standard_Integer): void;
  SetTangencyAtBegining(IsTangent: Standard_Boolean): void;
  SetTangencyAtEnd(IsTangent: Standard_Boolean): void;
  NbPoints(): Standard_Integer;
  Value(Index: Standard_Integer): IntSurf_PntOn2S;
  Line(): any;
  IsClosed(): Standard_Boolean;
  HasFirstPoint(): Standard_Boolean;
  HasLastPoint(): Standard_Boolean;
  FirstPoint(): IntSurf_PathPoint;
  FirstPointIndex(): Standard_Integer;
  LastPoint(): IntSurf_PathPoint;
  LastPointIndex(): Standard_Integer;
  NbPassingPoint(): Standard_Integer;
  PassingPoint(Index: Standard_Integer, IndexLine: Standard_Integer, IndexPnts: Standard_Integer): void;
  TangentVector(Index: Standard_Integer): gp_Vec;
  IsTangentAtBegining(): Standard_Boolean;
  IsTangentAtEnd(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Contap_SurfProps {
  constructor();
  Normale(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt, N: gp_Vec): void;
  DerivAndNorm(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt, d1u: gp_Vec, d1v: gp_Vec, N: gp_Vec): void;
  NormAndDn(S: any, U: Standard_Real, V: Standard_Real, P: gp_Pnt, N: gp_Vec, Dnu: gp_Vec, Dnv: gp_Vec): void;
}

export declare class Contap_TheIWalking {
  constructor(Epsilon: Standard_Real, Deflection: Standard_Real, Step: Standard_Real, theToFillHoles: Standard_Boolean)
  SetTolerance(Epsilon: Standard_Real, Deflection: Standard_Real, Step: Standard_Real): void;
  Perform_1(Pnts1: IntSurf_SequenceOfPathPoint, Pnts2: IntSurf_SequenceOfInteriorPoint, Func: Contap_SurfFunction, S: any, Reversed: Standard_Boolean): void;
  Perform_2(Pnts1: IntSurf_SequenceOfPathPoint, Func: Contap_SurfFunction, S: any, Reversed: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  NbLines(): Standard_Integer;
  Value(Index: Standard_Integer): any;
  NbSinglePnts(): Standard_Integer;
  SinglePnt(Index: Standard_Integer): IntSurf_PathPoint;
}

export declare class HLRAlgo_EdgesBlock extends Standard_Transient {
  constructor(NbEdges: Standard_Integer)
  NbEdges(): Standard_Integer;
  Edge_1(I: Standard_Integer, EI: Standard_Integer): void;
  Edge_2(I: Standard_Integer): Standard_Integer;
  Orientation_1(I: Standard_Integer, Or: TopAbs_Orientation): void;
  Orientation_2(I: Standard_Integer): TopAbs_Orientation;
  OutLine_1(I: Standard_Integer): Standard_Boolean;
  OutLine_2(I: Standard_Integer, B: Standard_Boolean): void;
  Internal_1(I: Standard_Integer): Standard_Boolean;
  Internal_2(I: Standard_Integer, B: Standard_Boolean): void;
  Double_1(I: Standard_Integer): Standard_Boolean;
  Double_2(I: Standard_Integer, B: Standard_Boolean): void;
  IsoLine_1(I: Standard_Integer): Standard_Boolean;
  IsoLine_2(I: Standard_Integer, B: Standard_Boolean): void;
  UpdateMinMax(TotMinMax: any): void;
  MinMax(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HLRAlgo_WiresBlock extends Standard_Transient {
  constructor(NbWires: Standard_Integer)
  NbWires(): Standard_Integer;
  Set(I: Standard_Integer, W: any): void;
  Wire(I: Standard_Integer): any;
  UpdateMinMax(theMinMaxes: any): void;
  MinMax(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HLRAlgo {
  constructor();
  UpdateMinMax(x: Standard_Real, y: Standard_Real, z: Standard_Real, Min: Standard_Real [16], Max: Standard_Real [16]): void;
  EnlargeMinMax(tol: Standard_Real, Min: Standard_Real [16], Max: Standard_Real [16]): void;
  InitMinMax(Big: Standard_Real, Min: Standard_Real [16], Max: Standard_Real [16]): void;
  EncodeMinMax(Min: any, Max: any, MinMax: any): void;
  SizeBox(Min: any, Max: any): Standard_Real;
  DecodeMinMax(MinMax: any, Min: any, Max: any): void;
  CopyMinMax(IMin: any, IMax: any, OMin: any, OMax: any): void;
  AddMinMax(IMin: any, IMax: any, OMin: any, OMax: any): void;
}

export declare class HLRAlgo_PolyHidingData {
  constructor()
  Set(Index: Standard_Integer, Minim: Standard_Integer, Maxim: Standard_Integer, A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real): void;
  Indices(): any;
  Plane(): any;
}

export declare class HLRAlgo_PolyInternalNode extends Standard_Transient {
  constructor()
  Indices(): any;
  Data(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HLRAlgo_BiPoint {
  Rg1Line_1(): Standard_Boolean;
  Rg1Line_2(B: Standard_Boolean): void;
  RgNLine_1(): Standard_Boolean;
  RgNLine_2(B: Standard_Boolean): void;
  OutLine_1(): Standard_Boolean;
  OutLine_2(B: Standard_Boolean): void;
  IntLine_1(): Standard_Boolean;
  IntLine_2(B: Standard_Boolean): void;
  Hidden_1(): Standard_Boolean;
  Hidden_2(B: Standard_Boolean): void;
  Indices(): any;
  Points(): any;
}

  export declare class HLRAlgo_BiPoint_1 extends HLRAlgo_BiPoint {
    constructor();
  }

  export declare class HLRAlgo_BiPoint_2 extends HLRAlgo_BiPoint {
    constructor(X1: Standard_Real, Y1: Standard_Real, Z1: Standard_Real, X2: Standard_Real, Y2: Standard_Real, Z2: Standard_Real, XT1: Standard_Real, YT1: Standard_Real, ZT1: Standard_Real, XT2: Standard_Real, YT2: Standard_Real, ZT2: Standard_Real, Index: Standard_Integer, reg1: Standard_Boolean, regn: Standard_Boolean, outl: Standard_Boolean, intl: Standard_Boolean);
  }

  export declare class HLRAlgo_BiPoint_3 extends HLRAlgo_BiPoint {
    constructor(X1: Standard_Real, Y1: Standard_Real, Z1: Standard_Real, X2: Standard_Real, Y2: Standard_Real, Z2: Standard_Real, XT1: Standard_Real, YT1: Standard_Real, ZT1: Standard_Real, XT2: Standard_Real, YT2: Standard_Real, ZT2: Standard_Real, Index: Standard_Integer, flag: Standard_Integer);
  }

  export declare class HLRAlgo_BiPoint_4 extends HLRAlgo_BiPoint {
    constructor(X1: Standard_Real, Y1: Standard_Real, Z1: Standard_Real, X2: Standard_Real, Y2: Standard_Real, Z2: Standard_Real, XT1: Standard_Real, YT1: Standard_Real, ZT1: Standard_Real, XT2: Standard_Real, YT2: Standard_Real, ZT2: Standard_Real, Index: Standard_Integer, i1: Standard_Integer, i1p1: Standard_Integer, i1p2: Standard_Integer, reg1: Standard_Boolean, regn: Standard_Boolean, outl: Standard_Boolean, intl: Standard_Boolean);
  }

  export declare class HLRAlgo_BiPoint_5 extends HLRAlgo_BiPoint {
    constructor(X1: Standard_Real, Y1: Standard_Real, Z1: Standard_Real, X2: Standard_Real, Y2: Standard_Real, Z2: Standard_Real, XT1: Standard_Real, YT1: Standard_Real, ZT1: Standard_Real, XT2: Standard_Real, YT2: Standard_Real, ZT2: Standard_Real, Index: Standard_Integer, i1: Standard_Integer, i1p1: Standard_Integer, i1p2: Standard_Integer, flag: Standard_Integer);
  }

  export declare class HLRAlgo_BiPoint_6 extends HLRAlgo_BiPoint {
    constructor(X1: Standard_Real, Y1: Standard_Real, Z1: Standard_Real, X2: Standard_Real, Y2: Standard_Real, Z2: Standard_Real, XT1: Standard_Real, YT1: Standard_Real, ZT1: Standard_Real, XT2: Standard_Real, YT2: Standard_Real, ZT2: Standard_Real, Index: Standard_Integer, i1: Standard_Integer, i1p1: Standard_Integer, i1p2: Standard_Integer, i2: Standard_Integer, i2p1: Standard_Integer, i2p2: Standard_Integer, reg1: Standard_Boolean, regn: Standard_Boolean, outl: Standard_Boolean, intl: Standard_Boolean);
  }

  export declare class HLRAlgo_BiPoint_7 extends HLRAlgo_BiPoint {
    constructor(X1: Standard_Real, Y1: Standard_Real, Z1: Standard_Real, X2: Standard_Real, Y2: Standard_Real, Z2: Standard_Real, XT1: Standard_Real, YT1: Standard_Real, ZT1: Standard_Real, XT2: Standard_Real, YT2: Standard_Real, ZT2: Standard_Real, Index: Standard_Integer, i1: Standard_Integer, i1p1: Standard_Integer, i1p2: Standard_Integer, i2: Standard_Integer, i2p1: Standard_Integer, i2p2: Standard_Integer, flag: Standard_Integer);
  }

export declare class HLRAlgo_Coincidence {
  constructor()
  Set2D(FE: Standard_Integer, Param: Standard_Real): void;
  SetState3D(stbef: TopAbs_State, staft: TopAbs_State): void;
  Value2D(FE: Standard_Integer, Param: Standard_Real): void;
  State3D(stbef: TopAbs_State, staft: TopAbs_State): void;
}

export declare class HLRAlgo_EdgeIterator {
  constructor()
  InitHidden(status: HLRAlgo_EdgeStatus): void;
  MoreHidden(): Standard_Boolean;
  NextHidden(): void;
  Hidden(Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal): void;
  InitVisible(status: HLRAlgo_EdgeStatus): void;
  MoreVisible(): Standard_Boolean;
  NextVisible(): void;
  Visible(Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal): void;
}

export declare class Intrv_Interval {
  Start(): Standard_Real;
  End(): Standard_Real;
  TolStart(): Standard_ShortReal;
  TolEnd(): Standard_ShortReal;
  Bounds(Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal): void;
  SetStart(Start: Standard_Real, TolStart: Standard_ShortReal): void;
  FuseAtStart(Start: Standard_Real, TolStart: Standard_ShortReal): void;
  CutAtStart(Start: Standard_Real, TolStart: Standard_ShortReal): void;
  SetEnd(End: Standard_Real, TolEnd: Standard_ShortReal): void;
  FuseAtEnd(End: Standard_Real, TolEnd: Standard_ShortReal): void;
  CutAtEnd(End: Standard_Real, TolEnd: Standard_ShortReal): void;
  IsProbablyEmpty(): Standard_Boolean;
  Position(Other: Intrv_Interval): Intrv_Position;
  IsBefore(Other: Intrv_Interval): Standard_Boolean;
  IsAfter(Other: Intrv_Interval): Standard_Boolean;
  IsInside(Other: Intrv_Interval): Standard_Boolean;
  IsEnclosing(Other: Intrv_Interval): Standard_Boolean;
  IsJustEnclosingAtStart(Other: Intrv_Interval): Standard_Boolean;
  IsJustEnclosingAtEnd(Other: Intrv_Interval): Standard_Boolean;
  IsJustBefore(Other: Intrv_Interval): Standard_Boolean;
  IsJustAfter(Other: Intrv_Interval): Standard_Boolean;
  IsOverlappingAtStart(Other: Intrv_Interval): Standard_Boolean;
  IsOverlappingAtEnd(Other: Intrv_Interval): Standard_Boolean;
  IsJustOverlappingAtStart(Other: Intrv_Interval): Standard_Boolean;
  IsJustOverlappingAtEnd(Other: Intrv_Interval): Standard_Boolean;
  IsSimilar(Other: Intrv_Interval): Standard_Boolean;
}

  export declare class Intrv_Interval_1 extends Intrv_Interval {
    constructor();
  }

  export declare class Intrv_Interval_2 extends Intrv_Interval {
    constructor(Start: Standard_Real, End: Standard_Real);
  }

  export declare class Intrv_Interval_3 extends Intrv_Interval {
    constructor(Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal);
  }

export declare class Intrv_Intervals {
  Intersect_1(Tool: Intrv_Interval): void;
  Intersect_2(Tool: Intrv_Intervals): void;
  Subtract_1(Tool: Intrv_Interval): void;
  Subtract_2(Tool: Intrv_Intervals): void;
  Unite_1(Tool: Intrv_Interval): void;
  Unite_2(Tool: Intrv_Intervals): void;
  XUnite_1(Tool: Intrv_Interval): void;
  XUnite_2(Tool: Intrv_Intervals): void;
  NbIntervals(): Standard_Integer;
  Value(Index: Standard_Integer): Intrv_Interval;
}

  export declare class Intrv_Intervals_1 extends Intrv_Intervals {
    constructor();
  }

  export declare class Intrv_Intervals_2 extends Intrv_Intervals {
    constructor(Int: Intrv_Interval);
  }

export declare class HLRAlgo_EdgeStatus {
  Initialize(Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal): void;
  Bounds(theStart: Standard_Real, theTolStart: Standard_ShortReal, theEnd: Standard_Real, theTolEnd: Standard_ShortReal): void;
  NbVisiblePart(): Standard_Integer;
  VisiblePart(Index: Standard_Integer, Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal): void;
  Hide(Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal, OnFace: Standard_Boolean, OnBoundary: Standard_Boolean): void;
  HideAll(): void;
  ShowAll(): void;
  AllHidden_1(): Standard_Boolean;
  AllHidden_2(B: Standard_Boolean): void;
  AllVisible_1(): Standard_Boolean;
  AllVisible_2(B: Standard_Boolean): void;
}

  export declare class HLRAlgo_EdgeStatus_1 extends HLRAlgo_EdgeStatus {
    constructor();
  }

  export declare class HLRAlgo_EdgeStatus_2 extends HLRAlgo_EdgeStatus {
    constructor(Start: Standard_Real, TolStart: Standard_ShortReal, End: Standard_Real, TolEnd: Standard_ShortReal);
  }

export declare class HLRAlgo_Intersection {
  Orientation_1(Ori: TopAbs_Orientation): void;
  Orientation_2(): TopAbs_Orientation;
  Level_1(Lev: Standard_Integer): void;
  Level_2(): Standard_Integer;
  SegIndex_1(SegInd: Standard_Integer): void;
  SegIndex_2(): Standard_Integer;
  Index_1(Ind: Standard_Integer): void;
  Index_2(): Standard_Integer;
  Parameter_1(P: Standard_Real): void;
  Parameter_2(): Standard_Real;
  Tolerance_1(T: Standard_ShortReal): void;
  Tolerance_2(): Standard_ShortReal;
  State_1(S: TopAbs_State): void;
  State_2(): TopAbs_State;
}

  export declare class HLRAlgo_Intersection_1 extends HLRAlgo_Intersection {
    constructor();
  }

  export declare class HLRAlgo_Intersection_2 extends HLRAlgo_Intersection {
    constructor(Ori: TopAbs_Orientation, Lev: Standard_Integer, SegInd: Standard_Integer, Ind: Standard_Integer, P: Standard_Real, Tol: Standard_ShortReal, S: TopAbs_State);
  }

export declare class HLRAlgo_Interference {
  Intersection_1(I: HLRAlgo_Intersection): void;
  Boundary_1(B: HLRAlgo_Coincidence): void;
  Orientation_1(O: TopAbs_Orientation): void;
  Transition_1(Tr: TopAbs_Orientation): void;
  BoundaryTransition_1(BTr: TopAbs_Orientation): void;
  Intersection_2(): HLRAlgo_Intersection;
  ChangeIntersection(): HLRAlgo_Intersection;
  Boundary_2(): HLRAlgo_Coincidence;
  ChangeBoundary(): HLRAlgo_Coincidence;
  Orientation_2(): TopAbs_Orientation;
  Transition_2(): TopAbs_Orientation;
  BoundaryTransition_2(): TopAbs_Orientation;
}

  export declare class HLRAlgo_Interference_1 extends HLRAlgo_Interference {
    constructor();
  }

  export declare class HLRAlgo_Interference_2 extends HLRAlgo_Interference {
    constructor(Inters: HLRAlgo_Intersection, Bound: HLRAlgo_Coincidence, Orient: TopAbs_Orientation, Trans: TopAbs_Orientation, BTrans: TopAbs_Orientation);
  }

export declare class HLRAlgo_PolyData extends Standard_Transient {
  constructor()
  HNodes(HNodes: any): void;
  HTData(HTData: any): void;
  HPHDat(HPHDat: any): void;
  FaceIndex_1(I: Standard_Integer): void;
  FaceIndex_2(): Standard_Integer;
  Nodes(): TColgp_Array1OfXYZ;
  TData(): HLRAlgo_Array1OfTData;
  PHDat(): HLRAlgo_Array1OfPHDat;
  UpdateGlobalMinMax(theBox: any): void;
  Hiding(): Standard_Boolean;
  HideByPolyData(thePoints: any, theTriangle: any, theIndices: any, HidingShell: Standard_Boolean, status: HLRAlgo_EdgeStatus): void;
  Indices(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HLRAlgo_PolyAlgo extends Standard_Transient {
  constructor()
  Init(HShell: any): void;
  PolyShell(): TColStd_Array1OfTransient;
  Clear(): void;
  Update(): void;
  InitHide(): void;
  MoreHide(): Standard_Boolean;
  NextHide(): void;
  Hide(status: HLRAlgo_EdgeStatus, Index: Standard_Integer, reg1: Standard_Boolean, regn: Standard_Boolean, outl: Standard_Boolean, intl: Standard_Boolean): any;
  InitShow(): void;
  MoreShow(): Standard_Boolean;
  NextShow(): void;
  Show(Index: Standard_Integer, reg1: Standard_Boolean, regn: Standard_Boolean, outl: Standard_Boolean, intl: Standard_Boolean): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HLRAlgo_PolyInternalData extends Standard_Transient {
  constructor(nbNod: Standard_Integer, nbTri: Standard_Integer)
  UpdateLinks_1(TData: HLRAlgo_Array1OfTData, PISeg: HLRAlgo_Array1OfPISeg, PINod: HLRAlgo_Array1OfPINod): void;
  AddNode(Nod1RValues: any, Nod2RValues: any, PINod1: HLRAlgo_Array1OfPINod, PINod2: HLRAlgo_Array1OfPINod, coef1: Standard_Real, X3: Standard_Real, Y3: Standard_Real, Z3: Standard_Real): Standard_Integer;
  UpdateLinks_2(ip1: Standard_Integer, ip2: Standard_Integer, ip3: Standard_Integer, TData1: HLRAlgo_Array1OfTData, TData2: HLRAlgo_Array1OfTData, PISeg1: HLRAlgo_Array1OfPISeg, PISeg2: HLRAlgo_Array1OfPISeg, PINod1: HLRAlgo_Array1OfPINod, PINod2: HLRAlgo_Array1OfPINod): void;
  Dump(): void;
  IncTData(TData1: HLRAlgo_Array1OfTData, TData2: HLRAlgo_Array1OfTData): void;
  IncPISeg(PISeg1: HLRAlgo_Array1OfPISeg, PISeg2: HLRAlgo_Array1OfPISeg): void;
  IncPINod(PINod1: HLRAlgo_Array1OfPINod, PINod2: HLRAlgo_Array1OfPINod): void;
  DecTData(): void;
  DecPISeg(): void;
  DecPINod(): void;
  NbTData(): Standard_Integer;
  NbPISeg(): Standard_Integer;
  NbPINod(): Standard_Integer;
  Planar_1(): Standard_Boolean;
  Planar_2(B: Standard_Boolean): void;
  IntOutL_1(): Standard_Boolean;
  IntOutL_2(B: Standard_Boolean): void;
  TData(): HLRAlgo_Array1OfTData;
  PISeg(): HLRAlgo_Array1OfPISeg;
  PINod(): HLRAlgo_Array1OfPINod;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HLRAlgo_PolyShellData extends Standard_Transient {
  constructor(nbFace: Standard_Integer)
  UpdateGlobalMinMax(theBox: any): void;
  UpdateHiding(nbHiding: Standard_Integer): void;
  Hiding(): Standard_Boolean;
  PolyData(): TColStd_Array1OfTransient;
  HidingPolyData(): TColStd_Array1OfTransient;
  Edges(): HLRAlgo_ListOfBPoint;
  Indices(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HLRAlgo_Projector {
  Set(T: gp_Trsf, Persp: Standard_Boolean, Focus: Standard_Real): void;
  Directions(D1: gp_Vec2d, D2: gp_Vec2d, D3: gp_Vec2d): void;
  Scaled(On: Standard_Boolean): void;
  Perspective(): Standard_Boolean;
  Transformation(): gp_Trsf;
  InvertedTransformation(): gp_Trsf;
  FullTransformation(): gp_Trsf;
  Focus(): Standard_Real;
  Transform_1(D: gp_Vec): void;
  Transform_2(Pnt: gp_Pnt): void;
  Project_1(P: gp_Pnt, Pout: gp_Pnt2d): void;
  Project_2(P: gp_Pnt, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Project_3(P: gp_Pnt, D1: gp_Vec, Pout: gp_Pnt2d, D1out: gp_Vec2d): void;
  Shoot(X: Standard_Real, Y: Standard_Real): gp_Lin;
}

  export declare class HLRAlgo_Projector_1 extends HLRAlgo_Projector {
    constructor();
  }

  export declare class HLRAlgo_Projector_2 extends HLRAlgo_Projector {
    constructor(CS: gp_Ax2);
  }

  export declare class HLRAlgo_Projector_3 extends HLRAlgo_Projector {
    constructor(CS: gp_Ax2, Focus: Standard_Real);
  }

  export declare class HLRAlgo_Projector_4 extends HLRAlgo_Projector {
    constructor(T: gp_Trsf, Persp: Standard_Boolean, Focus: Standard_Real);
  }

  export declare class HLRAlgo_Projector_5 extends HLRAlgo_Projector {
    constructor(T: gp_Trsf, Persp: Standard_Boolean, Focus: Standard_Real, v1: gp_Vec2d, v2: gp_Vec2d, v3: gp_Vec2d);
  }

export declare class HLRAppli_ReflectLines {
  constructor(aShape: TopoDS_Shape)
  SetAxes(Nx: Standard_Real, Ny: Standard_Real, Nz: Standard_Real, XAt: Standard_Real, YAt: Standard_Real, ZAt: Standard_Real, XUp: Standard_Real, YUp: Standard_Real, ZUp: Standard_Real): void;
  Perform(): void;
  GetResult(): TopoDS_Shape;
  GetCompoundOf3dEdges(type: HLRBRep_TypeOfResultingEdge, visible: Standard_Boolean, In3d: Standard_Boolean): TopoDS_Shape;
}

export declare class HLRTopoBRep_DSFiller {
  constructor();
  Insert(S: TopoDS_Shape, FO: Contap_Contour, DS: HLRTopoBRep_Data, MST: BRepTopAdaptor_MapOfShapeTool, nbIso: Standard_Integer): void;
}

export declare class HLRTopoBRep_FaceData {
  constructor()
  FaceIntL(): TopTools_ListOfShape;
  FaceOutL(): TopTools_ListOfShape;
  FaceIsoL(): TopTools_ListOfShape;
  AddIntL(): TopTools_ListOfShape;
  AddOutL(): TopTools_ListOfShape;
  AddIsoL(): TopTools_ListOfShape;
}

export declare class HLRTopoBRep_VData {
  Parameter(): Standard_Real;
  Vertex(): TopoDS_Shape;
}

  export declare class HLRTopoBRep_VData_1 extends HLRTopoBRep_VData {
    constructor();
  }

  export declare class HLRTopoBRep_VData_2 extends HLRTopoBRep_VData {
    constructor(P: Standard_Real, V: TopoDS_Shape);
  }

export declare class HLRTopoBRep_Data {
  constructor()
  Clear(): void;
  Clean(): void;
  EdgeHasSplE(E: TopoDS_Edge): Standard_Boolean;
  FaceHasIntL(F: TopoDS_Face): Standard_Boolean;
  FaceHasOutL(F: TopoDS_Face): Standard_Boolean;
  FaceHasIsoL(F: TopoDS_Face): Standard_Boolean;
  IsSplEEdgeEdge(E1: TopoDS_Edge, E2: TopoDS_Edge): Standard_Boolean;
  IsIntLFaceEdge(F: TopoDS_Face, E: TopoDS_Edge): Standard_Boolean;
  IsOutLFaceEdge(F: TopoDS_Face, E: TopoDS_Edge): Standard_Boolean;
  IsIsoLFaceEdge(F: TopoDS_Face, E: TopoDS_Edge): Standard_Boolean;
  NewSOldS(New: TopoDS_Shape): TopoDS_Shape;
  EdgeSplE(E: TopoDS_Edge): TopTools_ListOfShape;
  FaceIntL(F: TopoDS_Face): TopTools_ListOfShape;
  FaceOutL(F: TopoDS_Face): TopTools_ListOfShape;
  FaceIsoL(F: TopoDS_Face): TopTools_ListOfShape;
  IsOutV(V: TopoDS_Vertex): Standard_Boolean;
  IsIntV(V: TopoDS_Vertex): Standard_Boolean;
  AddOldS(NewS: TopoDS_Shape, OldS: TopoDS_Shape): void;
  AddSplE(E: TopoDS_Edge): TopTools_ListOfShape;
  AddIntL(F: TopoDS_Face): TopTools_ListOfShape;
  AddOutL(F: TopoDS_Face): TopTools_ListOfShape;
  AddIsoL(F: TopoDS_Face): TopTools_ListOfShape;
  AddOutV(V: TopoDS_Vertex): void;
  AddIntV(V: TopoDS_Vertex): void;
  InitEdge(): void;
  MoreEdge(): Standard_Boolean;
  NextEdge(): void;
  Edge(): TopoDS_Edge;
  InitVertex(E: TopoDS_Edge): void;
  MoreVertex(): Standard_Boolean;
  NextVertex(): void;
  Vertex(): TopoDS_Vertex;
  Parameter(): Standard_Real;
  InsertBefore(V: TopoDS_Vertex, P: Standard_Real): void;
  Append(V: TopoDS_Vertex, P: Standard_Real): void;
}

export declare class HLRTopoBRep_FaceIsoLiner {
  constructor();
  Perform(FI: Standard_Integer, F: TopoDS_Face, DS: HLRTopoBRep_Data, nbIsos: Standard_Integer): void;
  MakeVertex(E: TopoDS_Edge, P: gp_Pnt, Par: Standard_Real, Tol: Standard_Real, DS: HLRTopoBRep_Data): TopoDS_Vertex;
  MakeIsoLine(F: TopoDS_Face, Iso: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real, DS: HLRTopoBRep_Data): void;
}

export declare class HLRTopoBRep_OutLiner extends Standard_Transient {
  OriginalShape_1(OriS: TopoDS_Shape): void;
  OriginalShape_2(): TopoDS_Shape;
  OutLinedShape_1(OutS: TopoDS_Shape): void;
  OutLinedShape_2(): TopoDS_Shape;
  DataStructure(): HLRTopoBRep_Data;
  Fill(P: HLRAlgo_Projector, MST: BRepTopAdaptor_MapOfShapeTool, nbIso: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class HLRTopoBRep_OutLiner_1 extends HLRTopoBRep_OutLiner {
    constructor();
  }

  export declare class HLRTopoBRep_OutLiner_2 extends HLRTopoBRep_OutLiner {
    constructor(OriSh: TopoDS_Shape);
  }

  export declare class HLRTopoBRep_OutLiner_3 extends HLRTopoBRep_OutLiner {
    constructor(OriS: TopoDS_Shape, OutS: TopoDS_Shape);
  }

export declare class TopBas_TestInterference {
  Intersection_1(I: Standard_Real): void;
  Boundary_1(B: Standard_Integer): void;
  Orientation_1(O: TopAbs_Orientation): void;
  Transition_1(Tr: TopAbs_Orientation): void;
  BoundaryTransition_1(BTr: TopAbs_Orientation): void;
  Intersection_2(): Standard_Real;
  ChangeIntersection(): Standard_Real;
  Boundary_2(): Standard_Integer;
  ChangeBoundary(): Standard_Integer;
  Orientation_2(): TopAbs_Orientation;
  Transition_2(): TopAbs_Orientation;
  BoundaryTransition_2(): TopAbs_Orientation;
}

  export declare class TopBas_TestInterference_1 extends TopBas_TestInterference {
    constructor();
  }

  export declare class TopBas_TestInterference_2 extends TopBas_TestInterference {
    constructor(Inters: Standard_Real, Bound: Standard_Integer, Orient: TopAbs_Orientation, Trans: TopAbs_Orientation, BTrans: TopAbs_Orientation);
  }

export declare class TopCnx_EdgeFaceTransition {
  constructor()
  Reset_1(Tgt: gp_Dir, Norm: gp_Dir, Curv: Standard_Real): void;
  Reset_2(Tgt: gp_Dir): void;
  AddInterference(Tole: Standard_Real, Tang: gp_Dir, Norm: gp_Dir, Curv: Standard_Real, Or: TopAbs_Orientation, Tr: TopAbs_Orientation, BTr: TopAbs_Orientation): void;
  Transition(): TopAbs_Orientation;
  BoundaryTransition(): TopAbs_Orientation;
}

export declare class HLRBRep_ListOfBPoint extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: HLRBRep_ListOfBPoint): HLRBRep_ListOfBPoint;
  Clear(theAllocator: any): void;
  First_1(): HLRBRep_BiPoint;
  First_2(): HLRBRep_BiPoint;
  Last_1(): HLRBRep_BiPoint;
  Last_2(): HLRBRep_BiPoint;
  Append_1(theItem: HLRBRep_BiPoint): HLRBRep_BiPoint;
  Append_3(theOther: HLRBRep_ListOfBPoint): void;
  Prepend_1(theItem: HLRBRep_BiPoint): HLRBRep_BiPoint;
  Prepend_2(theOther: HLRBRep_ListOfBPoint): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class HLRBRep_ListOfBPoint_1 extends HLRBRep_ListOfBPoint {
    constructor();
  }

  export declare class HLRBRep_ListOfBPoint_2 extends HLRBRep_ListOfBPoint {
    constructor(theAllocator: any);
  }

  export declare class HLRBRep_ListOfBPoint_3 extends HLRBRep_ListOfBPoint {
    constructor(theOther: HLRBRep_ListOfBPoint);
  }

export declare class Contap_TheSequenceOfPoint extends NCollection_BaseSequence {
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
  Assign(theOther: Contap_TheSequenceOfPoint): Contap_TheSequenceOfPoint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Contap_Point): void;
  Append_2(theSeq: Contap_TheSequenceOfPoint): void;
  Prepend_1(theItem: Contap_Point): void;
  Prepend_2(theSeq: Contap_TheSequenceOfPoint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Contap_Point): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Contap_TheSequenceOfPoint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Contap_TheSequenceOfPoint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Contap_Point): void;
  Split(theIndex: Standard_Integer, theSeq: Contap_TheSequenceOfPoint): void;
  First(): Contap_Point;
  ChangeFirst(): Contap_Point;
  Last(): Contap_Point;
  ChangeLast(): Contap_Point;
  Value(theIndex: Standard_Integer): Contap_Point;
  ChangeValue(theIndex: Standard_Integer): Contap_Point;
  SetValue(theIndex: Standard_Integer, theItem: Contap_Point): void;
}

  export declare class Contap_TheSequenceOfPoint_1 extends Contap_TheSequenceOfPoint {
    constructor();
  }

  export declare class Contap_TheSequenceOfPoint_2 extends Contap_TheSequenceOfPoint {
    constructor(theAllocator: any);
  }

  export declare class Contap_TheSequenceOfPoint_3 extends Contap_TheSequenceOfPoint {
    constructor(theOther: Contap_TheSequenceOfPoint);
  }

export declare class Handle_Contap_TheHSequenceOfPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Contap_TheHSequenceOfPoint): void;
  get(): Contap_TheHSequenceOfPoint;
}

  export declare class Handle_Contap_TheHSequenceOfPoint_1 extends Handle_Contap_TheHSequenceOfPoint {
    constructor();
  }

  export declare class Handle_Contap_TheHSequenceOfPoint_2 extends Handle_Contap_TheHSequenceOfPoint {
    constructor(thePtr: Contap_TheHSequenceOfPoint);
  }

  export declare class Handle_Contap_TheHSequenceOfPoint_3 extends Handle_Contap_TheHSequenceOfPoint {
    constructor(theHandle: Handle_Contap_TheHSequenceOfPoint);
  }

  export declare class Handle_Contap_TheHSequenceOfPoint_4 extends Handle_Contap_TheHSequenceOfPoint {
    constructor(theHandle: Handle_Contap_TheHSequenceOfPoint);
  }

export declare class Contap_TheSequenceOfLine extends NCollection_BaseSequence {
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
  Assign(theOther: Contap_TheSequenceOfLine): Contap_TheSequenceOfLine;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Contap_Line): void;
  Append_2(theSeq: Contap_TheSequenceOfLine): void;
  Prepend_1(theItem: Contap_Line): void;
  Prepend_2(theSeq: Contap_TheSequenceOfLine): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Contap_Line): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Contap_TheSequenceOfLine): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Contap_TheSequenceOfLine): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Contap_Line): void;
  Split(theIndex: Standard_Integer, theSeq: Contap_TheSequenceOfLine): void;
  First(): Contap_Line;
  ChangeFirst(): Contap_Line;
  Last(): Contap_Line;
  ChangeLast(): Contap_Line;
  Value(theIndex: Standard_Integer): Contap_Line;
  ChangeValue(theIndex: Standard_Integer): Contap_Line;
  SetValue(theIndex: Standard_Integer, theItem: Contap_Line): void;
}

  export declare class Contap_TheSequenceOfLine_1 extends Contap_TheSequenceOfLine {
    constructor();
  }

  export declare class Contap_TheSequenceOfLine_2 extends Contap_TheSequenceOfLine {
    constructor(theAllocator: any);
  }

  export declare class Contap_TheSequenceOfLine_3 extends Contap_TheSequenceOfLine {
    constructor(theOther: Contap_TheSequenceOfLine);
  }

export declare class Contap_SequenceOfSegmentOfTheSearch extends NCollection_BaseSequence {
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
  Assign(theOther: Contap_SequenceOfSegmentOfTheSearch): Contap_SequenceOfSegmentOfTheSearch;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Contap_TheSegmentOfTheSearch): void;
  Append_2(theSeq: Contap_SequenceOfSegmentOfTheSearch): void;
  Prepend_1(theItem: Contap_TheSegmentOfTheSearch): void;
  Prepend_2(theSeq: Contap_SequenceOfSegmentOfTheSearch): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Contap_TheSegmentOfTheSearch): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Contap_SequenceOfSegmentOfTheSearch): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Contap_SequenceOfSegmentOfTheSearch): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Contap_TheSegmentOfTheSearch): void;
  Split(theIndex: Standard_Integer, theSeq: Contap_SequenceOfSegmentOfTheSearch): void;
  First(): Contap_TheSegmentOfTheSearch;
  ChangeFirst(): Contap_TheSegmentOfTheSearch;
  Last(): Contap_TheSegmentOfTheSearch;
  ChangeLast(): Contap_TheSegmentOfTheSearch;
  Value(theIndex: Standard_Integer): Contap_TheSegmentOfTheSearch;
  ChangeValue(theIndex: Standard_Integer): Contap_TheSegmentOfTheSearch;
  SetValue(theIndex: Standard_Integer, theItem: Contap_TheSegmentOfTheSearch): void;
}

  export declare class Contap_SequenceOfSegmentOfTheSearch_1 extends Contap_SequenceOfSegmentOfTheSearch {
    constructor();
  }

  export declare class Contap_SequenceOfSegmentOfTheSearch_2 extends Contap_SequenceOfSegmentOfTheSearch {
    constructor(theAllocator: any);
  }

  export declare class Contap_SequenceOfSegmentOfTheSearch_3 extends Contap_SequenceOfSegmentOfTheSearch {
    constructor(theOther: Contap_SequenceOfSegmentOfTheSearch);
  }

export declare class Contap_SequenceOfPathPointOfTheSearch extends NCollection_BaseSequence {
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
  Assign(theOther: Contap_SequenceOfPathPointOfTheSearch): Contap_SequenceOfPathPointOfTheSearch;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Contap_ThePathPointOfTheSearch): void;
  Append_2(theSeq: Contap_SequenceOfPathPointOfTheSearch): void;
  Prepend_1(theItem: Contap_ThePathPointOfTheSearch): void;
  Prepend_2(theSeq: Contap_SequenceOfPathPointOfTheSearch): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Contap_ThePathPointOfTheSearch): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Contap_SequenceOfPathPointOfTheSearch): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Contap_SequenceOfPathPointOfTheSearch): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Contap_ThePathPointOfTheSearch): void;
  Split(theIndex: Standard_Integer, theSeq: Contap_SequenceOfPathPointOfTheSearch): void;
  First(): Contap_ThePathPointOfTheSearch;
  ChangeFirst(): Contap_ThePathPointOfTheSearch;
  Last(): Contap_ThePathPointOfTheSearch;
  ChangeLast(): Contap_ThePathPointOfTheSearch;
  Value(theIndex: Standard_Integer): Contap_ThePathPointOfTheSearch;
  ChangeValue(theIndex: Standard_Integer): Contap_ThePathPointOfTheSearch;
  SetValue(theIndex: Standard_Integer, theItem: Contap_ThePathPointOfTheSearch): void;
}

  export declare class Contap_SequenceOfPathPointOfTheSearch_1 extends Contap_SequenceOfPathPointOfTheSearch {
    constructor();
  }

  export declare class Contap_SequenceOfPathPointOfTheSearch_2 extends Contap_SequenceOfPathPointOfTheSearch {
    constructor(theAllocator: any);
  }

  export declare class Contap_SequenceOfPathPointOfTheSearch_3 extends Contap_SequenceOfPathPointOfTheSearch {
    constructor(theOther: Contap_SequenceOfPathPointOfTheSearch);
  }

export declare class Handle_Contap_TheIWLineOfTheIWalking {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Contap_TheIWLineOfTheIWalking): void;
  get(): Contap_TheIWLineOfTheIWalking;
}

  export declare class Handle_Contap_TheIWLineOfTheIWalking_1 extends Handle_Contap_TheIWLineOfTheIWalking {
    constructor();
  }

  export declare class Handle_Contap_TheIWLineOfTheIWalking_2 extends Handle_Contap_TheIWLineOfTheIWalking {
    constructor(thePtr: Contap_TheIWLineOfTheIWalking);
  }

  export declare class Handle_Contap_TheIWLineOfTheIWalking_3 extends Handle_Contap_TheIWLineOfTheIWalking {
    constructor(theHandle: Handle_Contap_TheIWLineOfTheIWalking);
  }

  export declare class Handle_Contap_TheIWLineOfTheIWalking_4 extends Handle_Contap_TheIWLineOfTheIWalking {
    constructor(theHandle: Handle_Contap_TheIWLineOfTheIWalking);
  }

export declare class Handle_HLRAlgo_EdgesBlock {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_EdgesBlock): void;
  get(): HLRAlgo_EdgesBlock;
}

  export declare class Handle_HLRAlgo_EdgesBlock_1 extends Handle_HLRAlgo_EdgesBlock {
    constructor();
  }

  export declare class Handle_HLRAlgo_EdgesBlock_2 extends Handle_HLRAlgo_EdgesBlock {
    constructor(thePtr: HLRAlgo_EdgesBlock);
  }

  export declare class Handle_HLRAlgo_EdgesBlock_3 extends Handle_HLRAlgo_EdgesBlock {
    constructor(theHandle: Handle_HLRAlgo_EdgesBlock);
  }

  export declare class Handle_HLRAlgo_EdgesBlock_4 extends Handle_HLRAlgo_EdgesBlock {
    constructor(theHandle: Handle_HLRAlgo_EdgesBlock);
  }

export declare class Handle_HLRAlgo_WiresBlock {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_WiresBlock): void;
  get(): HLRAlgo_WiresBlock;
}

  export declare class Handle_HLRAlgo_WiresBlock_1 extends Handle_HLRAlgo_WiresBlock {
    constructor();
  }

  export declare class Handle_HLRAlgo_WiresBlock_2 extends Handle_HLRAlgo_WiresBlock {
    constructor(thePtr: HLRAlgo_WiresBlock);
  }

  export declare class Handle_HLRAlgo_WiresBlock_3 extends Handle_HLRAlgo_WiresBlock {
    constructor(theHandle: Handle_HLRAlgo_WiresBlock);
  }

  export declare class Handle_HLRAlgo_WiresBlock_4 extends Handle_HLRAlgo_WiresBlock {
    constructor(theHandle: Handle_HLRAlgo_WiresBlock);
  }

export declare class HLRAlgo_Array1OfPHDat {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: HLRAlgo_PolyHidingData): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: HLRAlgo_Array1OfPHDat): HLRAlgo_Array1OfPHDat;
  Move(theOther: HLRAlgo_Array1OfPHDat): HLRAlgo_Array1OfPHDat;
  First(): HLRAlgo_PolyHidingData;
  ChangeFirst(): HLRAlgo_PolyHidingData;
  Last(): HLRAlgo_PolyHidingData;
  ChangeLast(): HLRAlgo_PolyHidingData;
  Value(theIndex: Standard_Integer): HLRAlgo_PolyHidingData;
  ChangeValue(theIndex: Standard_Integer): HLRAlgo_PolyHidingData;
  SetValue(theIndex: Standard_Integer, theItem: HLRAlgo_PolyHidingData): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class HLRAlgo_Array1OfPHDat_1 extends HLRAlgo_Array1OfPHDat {
    constructor();
  }

  export declare class HLRAlgo_Array1OfPHDat_2 extends HLRAlgo_Array1OfPHDat {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class HLRAlgo_Array1OfPHDat_3 extends HLRAlgo_Array1OfPHDat {
    constructor(theOther: HLRAlgo_Array1OfPHDat);
  }

  export declare class HLRAlgo_Array1OfPHDat_4 extends HLRAlgo_Array1OfPHDat {
    constructor(theOther: HLRAlgo_Array1OfPHDat);
  }

  export declare class HLRAlgo_Array1OfPHDat_5 extends HLRAlgo_Array1OfPHDat {
    constructor(theBegin: HLRAlgo_PolyHidingData, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_HLRAlgo_PolyInternalNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_PolyInternalNode): void;
  get(): HLRAlgo_PolyInternalNode;
}

  export declare class Handle_HLRAlgo_PolyInternalNode_1 extends Handle_HLRAlgo_PolyInternalNode {
    constructor();
  }

  export declare class Handle_HLRAlgo_PolyInternalNode_2 extends Handle_HLRAlgo_PolyInternalNode {
    constructor(thePtr: HLRAlgo_PolyInternalNode);
  }

  export declare class Handle_HLRAlgo_PolyInternalNode_3 extends Handle_HLRAlgo_PolyInternalNode {
    constructor(theHandle: Handle_HLRAlgo_PolyInternalNode);
  }

  export declare class Handle_HLRAlgo_PolyInternalNode_4 extends Handle_HLRAlgo_PolyInternalNode {
    constructor(theHandle: Handle_HLRAlgo_PolyInternalNode);
  }

export declare class HLRAlgo_Array1OfPISeg {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: HLRAlgo_PolyInternalSegment): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: HLRAlgo_Array1OfPISeg): HLRAlgo_Array1OfPISeg;
  Move(theOther: HLRAlgo_Array1OfPISeg): HLRAlgo_Array1OfPISeg;
  First(): HLRAlgo_PolyInternalSegment;
  ChangeFirst(): HLRAlgo_PolyInternalSegment;
  Last(): HLRAlgo_PolyInternalSegment;
  ChangeLast(): HLRAlgo_PolyInternalSegment;
  Value(theIndex: Standard_Integer): HLRAlgo_PolyInternalSegment;
  ChangeValue(theIndex: Standard_Integer): HLRAlgo_PolyInternalSegment;
  SetValue(theIndex: Standard_Integer, theItem: HLRAlgo_PolyInternalSegment): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class HLRAlgo_Array1OfPISeg_1 extends HLRAlgo_Array1OfPISeg {
    constructor();
  }

  export declare class HLRAlgo_Array1OfPISeg_2 extends HLRAlgo_Array1OfPISeg {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class HLRAlgo_Array1OfPISeg_3 extends HLRAlgo_Array1OfPISeg {
    constructor(theOther: HLRAlgo_Array1OfPISeg);
  }

  export declare class HLRAlgo_Array1OfPISeg_4 extends HLRAlgo_Array1OfPISeg {
    constructor(theOther: HLRAlgo_Array1OfPISeg);
  }

  export declare class HLRAlgo_Array1OfPISeg_5 extends HLRAlgo_Array1OfPISeg {
    constructor(theBegin: HLRAlgo_PolyInternalSegment, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class HLRAlgo_Array1OfTData {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: HLRAlgo_TriangleData): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: HLRAlgo_Array1OfTData): HLRAlgo_Array1OfTData;
  Move(theOther: HLRAlgo_Array1OfTData): HLRAlgo_Array1OfTData;
  First(): HLRAlgo_TriangleData;
  ChangeFirst(): HLRAlgo_TriangleData;
  Last(): HLRAlgo_TriangleData;
  ChangeLast(): HLRAlgo_TriangleData;
  Value(theIndex: Standard_Integer): HLRAlgo_TriangleData;
  ChangeValue(theIndex: Standard_Integer): HLRAlgo_TriangleData;
  SetValue(theIndex: Standard_Integer, theItem: HLRAlgo_TriangleData): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class HLRAlgo_Array1OfTData_1 extends HLRAlgo_Array1OfTData {
    constructor();
  }

  export declare class HLRAlgo_Array1OfTData_2 extends HLRAlgo_Array1OfTData {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class HLRAlgo_Array1OfTData_3 extends HLRAlgo_Array1OfTData {
    constructor(theOther: HLRAlgo_Array1OfTData);
  }

  export declare class HLRAlgo_Array1OfTData_4 extends HLRAlgo_Array1OfTData {
    constructor(theOther: HLRAlgo_Array1OfTData);
  }

  export declare class HLRAlgo_Array1OfTData_5 extends HLRAlgo_Array1OfTData {
    constructor(theBegin: HLRAlgo_TriangleData, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Intrv_SequenceOfInterval extends NCollection_BaseSequence {
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
  Assign(theOther: Intrv_SequenceOfInterval): Intrv_SequenceOfInterval;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Intrv_Interval): void;
  Append_2(theSeq: Intrv_SequenceOfInterval): void;
  Prepend_1(theItem: Intrv_Interval): void;
  Prepend_2(theSeq: Intrv_SequenceOfInterval): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Intrv_Interval): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Intrv_SequenceOfInterval): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Intrv_SequenceOfInterval): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Intrv_Interval): void;
  Split(theIndex: Standard_Integer, theSeq: Intrv_SequenceOfInterval): void;
  First(): Intrv_Interval;
  ChangeFirst(): Intrv_Interval;
  Last(): Intrv_Interval;
  ChangeLast(): Intrv_Interval;
  Value(theIndex: Standard_Integer): Intrv_Interval;
  ChangeValue(theIndex: Standard_Integer): Intrv_Interval;
  SetValue(theIndex: Standard_Integer, theItem: Intrv_Interval): void;
}

  export declare class Intrv_SequenceOfInterval_1 extends Intrv_SequenceOfInterval {
    constructor();
  }

  export declare class Intrv_SequenceOfInterval_2 extends Intrv_SequenceOfInterval {
    constructor(theAllocator: any);
  }

  export declare class Intrv_SequenceOfInterval_3 extends Intrv_SequenceOfInterval {
    constructor(theOther: Intrv_SequenceOfInterval);
  }

export declare class Handle_HLRAlgo_HArray1OfPHDat {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_HArray1OfPHDat): void;
  get(): HLRAlgo_HArray1OfPHDat;
}

  export declare class Handle_HLRAlgo_HArray1OfPHDat_1 extends Handle_HLRAlgo_HArray1OfPHDat {
    constructor();
  }

  export declare class Handle_HLRAlgo_HArray1OfPHDat_2 extends Handle_HLRAlgo_HArray1OfPHDat {
    constructor(thePtr: HLRAlgo_HArray1OfPHDat);
  }

  export declare class Handle_HLRAlgo_HArray1OfPHDat_3 extends Handle_HLRAlgo_HArray1OfPHDat {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfPHDat);
  }

  export declare class Handle_HLRAlgo_HArray1OfPHDat_4 extends Handle_HLRAlgo_HArray1OfPHDat {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfPHDat);
  }

export declare class Handle_HLRAlgo_HArray1OfPINod {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_HArray1OfPINod): void;
  get(): HLRAlgo_HArray1OfPINod;
}

  export declare class Handle_HLRAlgo_HArray1OfPINod_1 extends Handle_HLRAlgo_HArray1OfPINod {
    constructor();
  }

  export declare class Handle_HLRAlgo_HArray1OfPINod_2 extends Handle_HLRAlgo_HArray1OfPINod {
    constructor(thePtr: HLRAlgo_HArray1OfPINod);
  }

  export declare class Handle_HLRAlgo_HArray1OfPINod_3 extends Handle_HLRAlgo_HArray1OfPINod {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfPINod);
  }

  export declare class Handle_HLRAlgo_HArray1OfPINod_4 extends Handle_HLRAlgo_HArray1OfPINod {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfPINod);
  }

export declare class Handle_HLRAlgo_HArray1OfPISeg {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_HArray1OfPISeg): void;
  get(): HLRAlgo_HArray1OfPISeg;
}

  export declare class Handle_HLRAlgo_HArray1OfPISeg_1 extends Handle_HLRAlgo_HArray1OfPISeg {
    constructor();
  }

  export declare class Handle_HLRAlgo_HArray1OfPISeg_2 extends Handle_HLRAlgo_HArray1OfPISeg {
    constructor(thePtr: HLRAlgo_HArray1OfPISeg);
  }

  export declare class Handle_HLRAlgo_HArray1OfPISeg_3 extends Handle_HLRAlgo_HArray1OfPISeg {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfPISeg);
  }

  export declare class Handle_HLRAlgo_HArray1OfPISeg_4 extends Handle_HLRAlgo_HArray1OfPISeg {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfPISeg);
  }

export declare class Handle_HLRAlgo_HArray1OfTData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_HArray1OfTData): void;
  get(): HLRAlgo_HArray1OfTData;
}

  export declare class Handle_HLRAlgo_HArray1OfTData_1 extends Handle_HLRAlgo_HArray1OfTData {
    constructor();
  }

  export declare class Handle_HLRAlgo_HArray1OfTData_2 extends Handle_HLRAlgo_HArray1OfTData {
    constructor(thePtr: HLRAlgo_HArray1OfTData);
  }

  export declare class Handle_HLRAlgo_HArray1OfTData_3 extends Handle_HLRAlgo_HArray1OfTData {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfTData);
  }

  export declare class Handle_HLRAlgo_HArray1OfTData_4 extends Handle_HLRAlgo_HArray1OfTData {
    constructor(theHandle: Handle_HLRAlgo_HArray1OfTData);
  }

export declare class HLRAlgo_InterferenceList extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: HLRAlgo_InterferenceList): HLRAlgo_InterferenceList;
  Clear(theAllocator: any): void;
  First_1(): HLRAlgo_Interference;
  First_2(): HLRAlgo_Interference;
  Last_1(): HLRAlgo_Interference;
  Last_2(): HLRAlgo_Interference;
  Append_1(theItem: HLRAlgo_Interference): HLRAlgo_Interference;
  Append_3(theOther: HLRAlgo_InterferenceList): void;
  Prepend_1(theItem: HLRAlgo_Interference): HLRAlgo_Interference;
  Prepend_2(theOther: HLRAlgo_InterferenceList): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class HLRAlgo_InterferenceList_1 extends HLRAlgo_InterferenceList {
    constructor();
  }

  export declare class HLRAlgo_InterferenceList_2 extends HLRAlgo_InterferenceList {
    constructor(theAllocator: any);
  }

  export declare class HLRAlgo_InterferenceList_3 extends HLRAlgo_InterferenceList {
    constructor(theOther: HLRAlgo_InterferenceList);
  }

export declare class HLRAlgo_ListOfBPoint extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: HLRAlgo_ListOfBPoint): HLRAlgo_ListOfBPoint;
  Clear(theAllocator: any): void;
  First_1(): HLRAlgo_BiPoint;
  First_2(): HLRAlgo_BiPoint;
  Last_1(): HLRAlgo_BiPoint;
  Last_2(): HLRAlgo_BiPoint;
  Append_1(theItem: HLRAlgo_BiPoint): HLRAlgo_BiPoint;
  Append_3(theOther: HLRAlgo_ListOfBPoint): void;
  Prepend_1(theItem: HLRAlgo_BiPoint): HLRAlgo_BiPoint;
  Prepend_2(theOther: HLRAlgo_ListOfBPoint): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class HLRAlgo_ListOfBPoint_1 extends HLRAlgo_ListOfBPoint {
    constructor();
  }

  export declare class HLRAlgo_ListOfBPoint_2 extends HLRAlgo_ListOfBPoint {
    constructor(theAllocator: any);
  }

  export declare class HLRAlgo_ListOfBPoint_3 extends HLRAlgo_ListOfBPoint {
    constructor(theOther: HLRAlgo_ListOfBPoint);
  }

export declare class Handle_HLRAlgo_PolyData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_PolyData): void;
  get(): HLRAlgo_PolyData;
}

  export declare class Handle_HLRAlgo_PolyData_1 extends Handle_HLRAlgo_PolyData {
    constructor();
  }

  export declare class Handle_HLRAlgo_PolyData_2 extends Handle_HLRAlgo_PolyData {
    constructor(thePtr: HLRAlgo_PolyData);
  }

  export declare class Handle_HLRAlgo_PolyData_3 extends Handle_HLRAlgo_PolyData {
    constructor(theHandle: Handle_HLRAlgo_PolyData);
  }

  export declare class Handle_HLRAlgo_PolyData_4 extends Handle_HLRAlgo_PolyData {
    constructor(theHandle: Handle_HLRAlgo_PolyData);
  }

export declare class Handle_HLRAlgo_PolyAlgo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_PolyAlgo): void;
  get(): HLRAlgo_PolyAlgo;
}

  export declare class Handle_HLRAlgo_PolyAlgo_1 extends Handle_HLRAlgo_PolyAlgo {
    constructor();
  }

  export declare class Handle_HLRAlgo_PolyAlgo_2 extends Handle_HLRAlgo_PolyAlgo {
    constructor(thePtr: HLRAlgo_PolyAlgo);
  }

  export declare class Handle_HLRAlgo_PolyAlgo_3 extends Handle_HLRAlgo_PolyAlgo {
    constructor(theHandle: Handle_HLRAlgo_PolyAlgo);
  }

  export declare class Handle_HLRAlgo_PolyAlgo_4 extends Handle_HLRAlgo_PolyAlgo {
    constructor(theHandle: Handle_HLRAlgo_PolyAlgo);
  }

export declare class Handle_HLRAlgo_PolyInternalData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_PolyInternalData): void;
  get(): HLRAlgo_PolyInternalData;
}

  export declare class Handle_HLRAlgo_PolyInternalData_1 extends Handle_HLRAlgo_PolyInternalData {
    constructor();
  }

  export declare class Handle_HLRAlgo_PolyInternalData_2 extends Handle_HLRAlgo_PolyInternalData {
    constructor(thePtr: HLRAlgo_PolyInternalData);
  }

  export declare class Handle_HLRAlgo_PolyInternalData_3 extends Handle_HLRAlgo_PolyInternalData {
    constructor(theHandle: Handle_HLRAlgo_PolyInternalData);
  }

  export declare class Handle_HLRAlgo_PolyInternalData_4 extends Handle_HLRAlgo_PolyInternalData {
    constructor(theHandle: Handle_HLRAlgo_PolyInternalData);
  }

export declare class Handle_HLRAlgo_PolyShellData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRAlgo_PolyShellData): void;
  get(): HLRAlgo_PolyShellData;
}

  export declare class Handle_HLRAlgo_PolyShellData_1 extends Handle_HLRAlgo_PolyShellData {
    constructor();
  }

  export declare class Handle_HLRAlgo_PolyShellData_2 extends Handle_HLRAlgo_PolyShellData {
    constructor(thePtr: HLRAlgo_PolyShellData);
  }

  export declare class Handle_HLRAlgo_PolyShellData_3 extends Handle_HLRAlgo_PolyShellData {
    constructor(theHandle: Handle_HLRAlgo_PolyShellData);
  }

  export declare class Handle_HLRAlgo_PolyShellData_4 extends Handle_HLRAlgo_PolyShellData {
    constructor(theHandle: Handle_HLRAlgo_PolyShellData);
  }

export declare class HLRBRep_SeqOfShapeBounds extends NCollection_BaseSequence {
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
  Assign(theOther: HLRBRep_SeqOfShapeBounds): HLRBRep_SeqOfShapeBounds;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: HLRBRep_ShapeBounds): void;
  Append_2(theSeq: HLRBRep_SeqOfShapeBounds): void;
  Prepend_1(theItem: HLRBRep_ShapeBounds): void;
  Prepend_2(theSeq: HLRBRep_SeqOfShapeBounds): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: HLRBRep_ShapeBounds): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: HLRBRep_SeqOfShapeBounds): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: HLRBRep_SeqOfShapeBounds): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: HLRBRep_ShapeBounds): void;
  Split(theIndex: Standard_Integer, theSeq: HLRBRep_SeqOfShapeBounds): void;
  First(): HLRBRep_ShapeBounds;
  ChangeFirst(): HLRBRep_ShapeBounds;
  Last(): HLRBRep_ShapeBounds;
  ChangeLast(): HLRBRep_ShapeBounds;
  Value(theIndex: Standard_Integer): HLRBRep_ShapeBounds;
  ChangeValue(theIndex: Standard_Integer): HLRBRep_ShapeBounds;
  SetValue(theIndex: Standard_Integer, theItem: HLRBRep_ShapeBounds): void;
}

  export declare class HLRBRep_SeqOfShapeBounds_1 extends HLRBRep_SeqOfShapeBounds {
    constructor();
  }

  export declare class HLRBRep_SeqOfShapeBounds_2 extends HLRBRep_SeqOfShapeBounds {
    constructor(theAllocator: any);
  }

  export declare class HLRBRep_SeqOfShapeBounds_3 extends HLRBRep_SeqOfShapeBounds {
    constructor(theOther: HLRBRep_SeqOfShapeBounds);
  }

export declare class Handle_HLRBRep_InternalAlgo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRBRep_InternalAlgo): void;
  get(): HLRBRep_InternalAlgo;
}

  export declare class Handle_HLRBRep_InternalAlgo_1 extends Handle_HLRBRep_InternalAlgo {
    constructor();
  }

  export declare class Handle_HLRBRep_InternalAlgo_2 extends Handle_HLRBRep_InternalAlgo {
    constructor(thePtr: HLRBRep_InternalAlgo);
  }

  export declare class Handle_HLRBRep_InternalAlgo_3 extends Handle_HLRBRep_InternalAlgo {
    constructor(theHandle: Handle_HLRBRep_InternalAlgo);
  }

  export declare class Handle_HLRBRep_InternalAlgo_4 extends Handle_HLRBRep_InternalAlgo {
    constructor(theHandle: Handle_HLRBRep_InternalAlgo);
  }

export declare class Handle_HLRBRep_Algo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRBRep_Algo): void;
  get(): HLRBRep_Algo;
}

  export declare class Handle_HLRBRep_Algo_1 extends Handle_HLRBRep_Algo {
    constructor();
  }

  export declare class Handle_HLRBRep_Algo_2 extends Handle_HLRBRep_Algo {
    constructor(thePtr: HLRBRep_Algo);
  }

  export declare class Handle_HLRBRep_Algo_3 extends Handle_HLRBRep_Algo {
    constructor(theHandle: Handle_HLRBRep_Algo);
  }

  export declare class Handle_HLRBRep_Algo_4 extends Handle_HLRBRep_Algo {
    constructor(theHandle: Handle_HLRBRep_Algo);
  }

export declare class Handle_HLRBRep_AreaLimit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRBRep_AreaLimit): void;
  get(): HLRBRep_AreaLimit;
}

  export declare class Handle_HLRBRep_AreaLimit_1 extends Handle_HLRBRep_AreaLimit {
    constructor();
  }

  export declare class Handle_HLRBRep_AreaLimit_2 extends Handle_HLRBRep_AreaLimit {
    constructor(thePtr: HLRBRep_AreaLimit);
  }

  export declare class Handle_HLRBRep_AreaLimit_3 extends Handle_HLRBRep_AreaLimit {
    constructor(theHandle: Handle_HLRBRep_AreaLimit);
  }

  export declare class Handle_HLRBRep_AreaLimit_4 extends Handle_HLRBRep_AreaLimit {
    constructor(theHandle: Handle_HLRBRep_AreaLimit);
  }

export declare class HLRBRep_Array1OfEData {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: HLRBRep_EdgeData): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: HLRBRep_Array1OfEData): HLRBRep_Array1OfEData;
  Move(theOther: HLRBRep_Array1OfEData): HLRBRep_Array1OfEData;
  First(): HLRBRep_EdgeData;
  ChangeFirst(): HLRBRep_EdgeData;
  Last(): HLRBRep_EdgeData;
  ChangeLast(): HLRBRep_EdgeData;
  Value(theIndex: Standard_Integer): HLRBRep_EdgeData;
  ChangeValue(theIndex: Standard_Integer): HLRBRep_EdgeData;
  SetValue(theIndex: Standard_Integer, theItem: HLRBRep_EdgeData): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class HLRBRep_Array1OfEData_1 extends HLRBRep_Array1OfEData {
    constructor();
  }

  export declare class HLRBRep_Array1OfEData_2 extends HLRBRep_Array1OfEData {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class HLRBRep_Array1OfEData_3 extends HLRBRep_Array1OfEData {
    constructor(theOther: HLRBRep_Array1OfEData);
  }

  export declare class HLRBRep_Array1OfEData_4 extends HLRBRep_Array1OfEData {
    constructor(theOther: HLRBRep_Array1OfEData);
  }

  export declare class HLRBRep_Array1OfEData_5 extends HLRBRep_Array1OfEData {
    constructor(theBegin: HLRBRep_EdgeData, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class HLRBRep_Array1OfFData {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: HLRBRep_FaceData): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: HLRBRep_Array1OfFData): HLRBRep_Array1OfFData;
  Move(theOther: HLRBRep_Array1OfFData): HLRBRep_Array1OfFData;
  First(): HLRBRep_FaceData;
  ChangeFirst(): HLRBRep_FaceData;
  Last(): HLRBRep_FaceData;
  ChangeLast(): HLRBRep_FaceData;
  Value(theIndex: Standard_Integer): HLRBRep_FaceData;
  ChangeValue(theIndex: Standard_Integer): HLRBRep_FaceData;
  SetValue(theIndex: Standard_Integer, theItem: HLRBRep_FaceData): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class HLRBRep_Array1OfFData_1 extends HLRBRep_Array1OfFData {
    constructor();
  }

  export declare class HLRBRep_Array1OfFData_2 extends HLRBRep_Array1OfFData {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class HLRBRep_Array1OfFData_3 extends HLRBRep_Array1OfFData {
    constructor(theOther: HLRBRep_Array1OfFData);
  }

  export declare class HLRBRep_Array1OfFData_4 extends HLRBRep_Array1OfFData {
    constructor(theOther: HLRBRep_Array1OfFData);
  }

  export declare class HLRBRep_Array1OfFData_5 extends HLRBRep_Array1OfFData {
    constructor(theBegin: HLRBRep_FaceData, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_HLRBRep_Data {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRBRep_Data): void;
  get(): HLRBRep_Data;
}

  export declare class Handle_HLRBRep_Data_1 extends Handle_HLRBRep_Data {
    constructor();
  }

  export declare class Handle_HLRBRep_Data_2 extends Handle_HLRBRep_Data {
    constructor(thePtr: HLRBRep_Data);
  }

  export declare class Handle_HLRBRep_Data_3 extends Handle_HLRBRep_Data {
    constructor(theHandle: Handle_HLRBRep_Data);
  }

  export declare class Handle_HLRBRep_Data_4 extends Handle_HLRBRep_Data {
    constructor(theHandle: Handle_HLRBRep_Data);
  }

export declare class HLRBRep_ListOfBPnt2D extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: HLRBRep_ListOfBPnt2D): HLRBRep_ListOfBPnt2D;
  Clear(theAllocator: any): void;
  First_1(): HLRBRep_BiPnt2D;
  First_2(): HLRBRep_BiPnt2D;
  Last_1(): HLRBRep_BiPnt2D;
  Last_2(): HLRBRep_BiPnt2D;
  Append_1(theItem: HLRBRep_BiPnt2D): HLRBRep_BiPnt2D;
  Append_3(theOther: HLRBRep_ListOfBPnt2D): void;
  Prepend_1(theItem: HLRBRep_BiPnt2D): HLRBRep_BiPnt2D;
  Prepend_2(theOther: HLRBRep_ListOfBPnt2D): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class HLRBRep_ListOfBPnt2D_1 extends HLRBRep_ListOfBPnt2D {
    constructor();
  }

  export declare class HLRBRep_ListOfBPnt2D_2 extends HLRBRep_ListOfBPnt2D {
    constructor(theAllocator: any);
  }

  export declare class HLRBRep_ListOfBPnt2D_3 extends HLRBRep_ListOfBPnt2D {
    constructor(theOther: HLRBRep_ListOfBPnt2D);
  }

export declare class Handle_HLRBRep_PolyAlgo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRBRep_PolyAlgo): void;
  get(): HLRBRep_PolyAlgo;
}

  export declare class Handle_HLRBRep_PolyAlgo_1 extends Handle_HLRBRep_PolyAlgo {
    constructor();
  }

  export declare class Handle_HLRBRep_PolyAlgo_2 extends Handle_HLRBRep_PolyAlgo {
    constructor(thePtr: HLRBRep_PolyAlgo);
  }

  export declare class Handle_HLRBRep_PolyAlgo_3 extends Handle_HLRBRep_PolyAlgo {
    constructor(theHandle: Handle_HLRBRep_PolyAlgo);
  }

  export declare class Handle_HLRBRep_PolyAlgo_4 extends Handle_HLRBRep_PolyAlgo {
    constructor(theHandle: Handle_HLRBRep_PolyAlgo);
  }

export declare class HLRTopoBRep_DataMapOfShapeFaceData extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: HLRTopoBRep_DataMapOfShapeFaceData): void;
  Assign(theOther: HLRTopoBRep_DataMapOfShapeFaceData): HLRTopoBRep_DataMapOfShapeFaceData;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: HLRTopoBRep_FaceData): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: HLRTopoBRep_FaceData): HLRTopoBRep_FaceData;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): HLRTopoBRep_FaceData;
  Find_1(theKey: TopoDS_Shape): HLRTopoBRep_FaceData;
  Find_2(theKey: TopoDS_Shape, theValue: HLRTopoBRep_FaceData): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): HLRTopoBRep_FaceData;
  ChangeFind(theKey: TopoDS_Shape): HLRTopoBRep_FaceData;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class HLRTopoBRep_DataMapOfShapeFaceData_1 extends HLRTopoBRep_DataMapOfShapeFaceData {
    constructor();
  }

  export declare class HLRTopoBRep_DataMapOfShapeFaceData_2 extends HLRTopoBRep_DataMapOfShapeFaceData {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class HLRTopoBRep_DataMapOfShapeFaceData_3 extends HLRTopoBRep_DataMapOfShapeFaceData {
    constructor(theOther: HLRTopoBRep_DataMapOfShapeFaceData);
  }

export declare class HLRTopoBRep_ListOfVData extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: HLRTopoBRep_ListOfVData): HLRTopoBRep_ListOfVData;
  Clear(theAllocator: any): void;
  First_1(): HLRTopoBRep_VData;
  First_2(): HLRTopoBRep_VData;
  Last_1(): HLRTopoBRep_VData;
  Last_2(): HLRTopoBRep_VData;
  Append_1(theItem: HLRTopoBRep_VData): HLRTopoBRep_VData;
  Append_3(theOther: HLRTopoBRep_ListOfVData): void;
  Prepend_1(theItem: HLRTopoBRep_VData): HLRTopoBRep_VData;
  Prepend_2(theOther: HLRTopoBRep_ListOfVData): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class HLRTopoBRep_ListOfVData_1 extends HLRTopoBRep_ListOfVData {
    constructor();
  }

  export declare class HLRTopoBRep_ListOfVData_2 extends HLRTopoBRep_ListOfVData {
    constructor(theAllocator: any);
  }

  export declare class HLRTopoBRep_ListOfVData_3 extends HLRTopoBRep_ListOfVData {
    constructor(theOther: HLRTopoBRep_ListOfVData);
  }

export declare class HLRTopoBRep_MapOfShapeListOfVData extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: HLRTopoBRep_MapOfShapeListOfVData): void;
  Assign(theOther: HLRTopoBRep_MapOfShapeListOfVData): HLRTopoBRep_MapOfShapeListOfVData;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: HLRTopoBRep_ListOfVData): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: HLRTopoBRep_ListOfVData): HLRTopoBRep_ListOfVData;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): HLRTopoBRep_ListOfVData;
  Find_1(theKey: TopoDS_Shape): HLRTopoBRep_ListOfVData;
  Find_2(theKey: TopoDS_Shape, theValue: HLRTopoBRep_ListOfVData): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): HLRTopoBRep_ListOfVData;
  ChangeFind(theKey: TopoDS_Shape): HLRTopoBRep_ListOfVData;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class HLRTopoBRep_MapOfShapeListOfVData_1 extends HLRTopoBRep_MapOfShapeListOfVData {
    constructor();
  }

  export declare class HLRTopoBRep_MapOfShapeListOfVData_2 extends HLRTopoBRep_MapOfShapeListOfVData {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class HLRTopoBRep_MapOfShapeListOfVData_3 extends HLRTopoBRep_MapOfShapeListOfVData {
    constructor(theOther: HLRTopoBRep_MapOfShapeListOfVData);
  }

export declare class Handle_HLRTopoBRep_OutLiner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRTopoBRep_OutLiner): void;
  get(): HLRTopoBRep_OutLiner;
}

  export declare class Handle_HLRTopoBRep_OutLiner_1 extends Handle_HLRTopoBRep_OutLiner {
    constructor();
  }

  export declare class Handle_HLRTopoBRep_OutLiner_2 extends Handle_HLRTopoBRep_OutLiner {
    constructor(thePtr: HLRTopoBRep_OutLiner);
  }

  export declare class Handle_HLRTopoBRep_OutLiner_3 extends Handle_HLRTopoBRep_OutLiner {
    constructor(theHandle: Handle_HLRTopoBRep_OutLiner);
  }

  export declare class Handle_HLRTopoBRep_OutLiner_4 extends Handle_HLRTopoBRep_OutLiner {
    constructor(theHandle: Handle_HLRTopoBRep_OutLiner);
  }

export declare class TopBas_ListOfTestInterference extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TopBas_ListOfTestInterference): TopBas_ListOfTestInterference;
  Clear(theAllocator: any): void;
  First_1(): TopBas_TestInterference;
  First_2(): TopBas_TestInterference;
  Last_1(): TopBas_TestInterference;
  Last_2(): TopBas_TestInterference;
  Append_1(theItem: TopBas_TestInterference): TopBas_TestInterference;
  Append_3(theOther: TopBas_ListOfTestInterference): void;
  Prepend_1(theItem: TopBas_TestInterference): TopBas_TestInterference;
  Prepend_2(theOther: TopBas_ListOfTestInterference): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TopBas_ListOfTestInterference_1 extends TopBas_ListOfTestInterference {
    constructor();
  }

  export declare class TopBas_ListOfTestInterference_2 extends TopBas_ListOfTestInterference {
    constructor(theAllocator: any);
  }

  export declare class TopBas_ListOfTestInterference_3 extends TopBas_ListOfTestInterference {
    constructor(theOther: TopBas_ListOfTestInterference);
  }

export declare type Contap_TFunction = {
  Contap_ContourStd: {};
  Contap_ContourPrs: {};
  Contap_DraftStd: {};
  Contap_DraftPrs: {};
}

export declare type Contap_IType = {
  Contap_Lin: {};
  Contap_Circle: {};
  Contap_Walking: {};
  Contap_Restriction: {};
}

export declare type Intrv_Position = {
  Intrv_Before: {};
  Intrv_JustBefore: {};
  Intrv_OverlappingAtStart: {};
  Intrv_JustEnclosingAtEnd: {};
  Intrv_Enclosing: {};
  Intrv_JustOverlappingAtStart: {};
  Intrv_Similar: {};
  Intrv_JustEnclosingAtStart: {};
  Intrv_Inside: {};
  Intrv_JustOverlappingAtEnd: {};
  Intrv_OverlappingAtEnd: {};
  Intrv_JustAfter: {};
  Intrv_After: {};
}

export declare type HLRAlgo_PolyMask = {
  HLRAlgo_PolyMask_EMskOutLin1: {};
  HLRAlgo_PolyMask_EMskOutLin2: {};
  HLRAlgo_PolyMask_EMskOutLin3: {};
  HLRAlgo_PolyMask_EMskGrALin1: {};
  HLRAlgo_PolyMask_EMskGrALin2: {};
  HLRAlgo_PolyMask_EMskGrALin3: {};
  HLRAlgo_PolyMask_FMskBack: {};
  HLRAlgo_PolyMask_FMskSide: {};
  HLRAlgo_PolyMask_FMskHiding: {};
  HLRAlgo_PolyMask_FMskFlat: {};
  HLRAlgo_PolyMask_FMskOnOutL: {};
  HLRAlgo_PolyMask_FMskOrBack: {};
  HLRAlgo_PolyMask_FMskFrBack: {};
}

export declare type HLRBRep_TypeOfResultingEdge = {
  HLRBRep_Undefined: {};
  HLRBRep_IsoLine: {};
  HLRBRep_OutLine: {};
  HLRBRep_Rg1Line: {};
  HLRBRep_RgNLine: {};
  HLRBRep_Sharp: {};
}

export declare type TKHLRLib = {
  Contap_ArcFunction: typeof Contap_ArcFunction;
  Contap_ContAna: typeof Contap_ContAna;
  Contap_Point_1: typeof Contap_Point_1;
  Contap_Point_2: typeof Contap_Point_2;
  Contap_Line: typeof Contap_Line;
  Contap_ThePathPointOfTheSearch_1: typeof Contap_ThePathPointOfTheSearch_1;
  Contap_ThePathPointOfTheSearch_2: typeof Contap_ThePathPointOfTheSearch_2;
  Contap_ThePathPointOfTheSearch_3: typeof Contap_ThePathPointOfTheSearch_3;
  Contap_TheSegmentOfTheSearch: typeof Contap_TheSegmentOfTheSearch;
  Contap_TheSearch: typeof Contap_TheSearch;
  Contap_TheSearchInside_1: typeof Contap_TheSearchInside_1;
  Contap_TheSearchInside_2: typeof Contap_TheSearchInside_2;
  Contap_SurfFunction: typeof Contap_SurfFunction;
  Contap_Contour_1: typeof Contap_Contour_1;
  Contap_Contour_2: typeof Contap_Contour_2;
  Contap_Contour_3: typeof Contap_Contour_3;
  Contap_Contour_4: typeof Contap_Contour_4;
  Contap_Contour_5: typeof Contap_Contour_5;
  Contap_Contour_6: typeof Contap_Contour_6;
  Contap_Contour_7: typeof Contap_Contour_7;
  Contap_TheIWLineOfTheIWalking: typeof Contap_TheIWLineOfTheIWalking;
  Contap_TheIWalking: typeof Contap_TheIWalking;
  HLRAlgo_EdgesBlock: typeof HLRAlgo_EdgesBlock;
  HLRAlgo_WiresBlock: typeof HLRAlgo_WiresBlock;
  HLRAlgo_PolyHidingData: typeof HLRAlgo_PolyHidingData;
  HLRAlgo_PolyInternalNode: typeof HLRAlgo_PolyInternalNode;
  HLRAlgo_BiPoint_1: typeof HLRAlgo_BiPoint_1;
  HLRAlgo_BiPoint_2: typeof HLRAlgo_BiPoint_2;
  HLRAlgo_BiPoint_3: typeof HLRAlgo_BiPoint_3;
  HLRAlgo_BiPoint_4: typeof HLRAlgo_BiPoint_4;
  HLRAlgo_BiPoint_5: typeof HLRAlgo_BiPoint_5;
  HLRAlgo_BiPoint_6: typeof HLRAlgo_BiPoint_6;
  HLRAlgo_BiPoint_7: typeof HLRAlgo_BiPoint_7;
  HLRAlgo_Coincidence: typeof HLRAlgo_Coincidence;
  HLRAlgo_EdgeIterator: typeof HLRAlgo_EdgeIterator;
  Intrv_Interval_1: typeof Intrv_Interval_1;
  Intrv_Interval_2: typeof Intrv_Interval_2;
  Intrv_Interval_3: typeof Intrv_Interval_3;
  Intrv_Intervals_1: typeof Intrv_Intervals_1;
  Intrv_Intervals_2: typeof Intrv_Intervals_2;
  HLRAlgo_EdgeStatus_1: typeof HLRAlgo_EdgeStatus_1;
  HLRAlgo_EdgeStatus_2: typeof HLRAlgo_EdgeStatus_2;
  HLRAlgo_Intersection_1: typeof HLRAlgo_Intersection_1;
  HLRAlgo_Intersection_2: typeof HLRAlgo_Intersection_2;
  HLRAlgo_Interference_1: typeof HLRAlgo_Interference_1;
  HLRAlgo_Interference_2: typeof HLRAlgo_Interference_2;
  HLRAlgo_PolyData: typeof HLRAlgo_PolyData;
  HLRAlgo_PolyAlgo: typeof HLRAlgo_PolyAlgo;
  HLRAlgo_PolyInternalData: typeof HLRAlgo_PolyInternalData;
  HLRAlgo_PolyShellData: typeof HLRAlgo_PolyShellData;
  HLRAlgo_Projector_1: typeof HLRAlgo_Projector_1;
  HLRAlgo_Projector_2: typeof HLRAlgo_Projector_2;
  HLRAlgo_Projector_3: typeof HLRAlgo_Projector_3;
  HLRAlgo_Projector_4: typeof HLRAlgo_Projector_4;
  HLRAlgo_Projector_5: typeof HLRAlgo_Projector_5;
  HLRAppli_ReflectLines: typeof HLRAppli_ReflectLines;
  HLRTopoBRep_FaceData: typeof HLRTopoBRep_FaceData;
  HLRTopoBRep_VData_1: typeof HLRTopoBRep_VData_1;
  HLRTopoBRep_VData_2: typeof HLRTopoBRep_VData_2;
  HLRTopoBRep_Data: typeof HLRTopoBRep_Data;
  HLRTopoBRep_OutLiner_1: typeof HLRTopoBRep_OutLiner_1;
  HLRTopoBRep_OutLiner_2: typeof HLRTopoBRep_OutLiner_2;
  HLRTopoBRep_OutLiner_3: typeof HLRTopoBRep_OutLiner_3;
  TopBas_TestInterference_1: typeof TopBas_TestInterference_1;
  TopBas_TestInterference_2: typeof TopBas_TestInterference_2;
  TopCnx_EdgeFaceTransition: typeof TopCnx_EdgeFaceTransition;
  HLRBRep_ListOfBPoint_1: typeof HLRBRep_ListOfBPoint_1;
  HLRBRep_ListOfBPoint_2: typeof HLRBRep_ListOfBPoint_2;
  HLRBRep_ListOfBPoint_3: typeof HLRBRep_ListOfBPoint_3;
  Contap_TheSequenceOfPoint_1: typeof Contap_TheSequenceOfPoint_1;
  Contap_TheSequenceOfPoint_2: typeof Contap_TheSequenceOfPoint_2;
  Contap_TheSequenceOfPoint_3: typeof Contap_TheSequenceOfPoint_3;
  Handle_Contap_TheHSequenceOfPoint_1: typeof Handle_Contap_TheHSequenceOfPoint_1;
  Handle_Contap_TheHSequenceOfPoint_2: typeof Handle_Contap_TheHSequenceOfPoint_2;
  Handle_Contap_TheHSequenceOfPoint_3: typeof Handle_Contap_TheHSequenceOfPoint_3;
  Handle_Contap_TheHSequenceOfPoint_4: typeof Handle_Contap_TheHSequenceOfPoint_4;
  Contap_TheSequenceOfLine_1: typeof Contap_TheSequenceOfLine_1;
  Contap_TheSequenceOfLine_2: typeof Contap_TheSequenceOfLine_2;
  Contap_TheSequenceOfLine_3: typeof Contap_TheSequenceOfLine_3;
  Contap_SequenceOfSegmentOfTheSearch_1: typeof Contap_SequenceOfSegmentOfTheSearch_1;
  Contap_SequenceOfSegmentOfTheSearch_2: typeof Contap_SequenceOfSegmentOfTheSearch_2;
  Contap_SequenceOfSegmentOfTheSearch_3: typeof Contap_SequenceOfSegmentOfTheSearch_3;
  Contap_SequenceOfPathPointOfTheSearch_1: typeof Contap_SequenceOfPathPointOfTheSearch_1;
  Contap_SequenceOfPathPointOfTheSearch_2: typeof Contap_SequenceOfPathPointOfTheSearch_2;
  Contap_SequenceOfPathPointOfTheSearch_3: typeof Contap_SequenceOfPathPointOfTheSearch_3;
  Handle_Contap_TheIWLineOfTheIWalking_1: typeof Handle_Contap_TheIWLineOfTheIWalking_1;
  Handle_Contap_TheIWLineOfTheIWalking_2: typeof Handle_Contap_TheIWLineOfTheIWalking_2;
  Handle_Contap_TheIWLineOfTheIWalking_3: typeof Handle_Contap_TheIWLineOfTheIWalking_3;
  Handle_Contap_TheIWLineOfTheIWalking_4: typeof Handle_Contap_TheIWLineOfTheIWalking_4;
  Handle_HLRAlgo_EdgesBlock_1: typeof Handle_HLRAlgo_EdgesBlock_1;
  Handle_HLRAlgo_EdgesBlock_2: typeof Handle_HLRAlgo_EdgesBlock_2;
  Handle_HLRAlgo_EdgesBlock_3: typeof Handle_HLRAlgo_EdgesBlock_3;
  Handle_HLRAlgo_EdgesBlock_4: typeof Handle_HLRAlgo_EdgesBlock_4;
  Handle_HLRAlgo_WiresBlock_1: typeof Handle_HLRAlgo_WiresBlock_1;
  Handle_HLRAlgo_WiresBlock_2: typeof Handle_HLRAlgo_WiresBlock_2;
  Handle_HLRAlgo_WiresBlock_3: typeof Handle_HLRAlgo_WiresBlock_3;
  Handle_HLRAlgo_WiresBlock_4: typeof Handle_HLRAlgo_WiresBlock_4;
  HLRAlgo_Array1OfPHDat_1: typeof HLRAlgo_Array1OfPHDat_1;
  HLRAlgo_Array1OfPHDat_2: typeof HLRAlgo_Array1OfPHDat_2;
  HLRAlgo_Array1OfPHDat_3: typeof HLRAlgo_Array1OfPHDat_3;
  HLRAlgo_Array1OfPHDat_4: typeof HLRAlgo_Array1OfPHDat_4;
  HLRAlgo_Array1OfPHDat_5: typeof HLRAlgo_Array1OfPHDat_5;
  Handle_HLRAlgo_PolyInternalNode_1: typeof Handle_HLRAlgo_PolyInternalNode_1;
  Handle_HLRAlgo_PolyInternalNode_2: typeof Handle_HLRAlgo_PolyInternalNode_2;
  Handle_HLRAlgo_PolyInternalNode_3: typeof Handle_HLRAlgo_PolyInternalNode_3;
  Handle_HLRAlgo_PolyInternalNode_4: typeof Handle_HLRAlgo_PolyInternalNode_4;
  HLRAlgo_Array1OfPISeg_1: typeof HLRAlgo_Array1OfPISeg_1;
  HLRAlgo_Array1OfPISeg_2: typeof HLRAlgo_Array1OfPISeg_2;
  HLRAlgo_Array1OfPISeg_3: typeof HLRAlgo_Array1OfPISeg_3;
  HLRAlgo_Array1OfPISeg_4: typeof HLRAlgo_Array1OfPISeg_4;
  HLRAlgo_Array1OfPISeg_5: typeof HLRAlgo_Array1OfPISeg_5;
  HLRAlgo_Array1OfTData_1: typeof HLRAlgo_Array1OfTData_1;
  HLRAlgo_Array1OfTData_2: typeof HLRAlgo_Array1OfTData_2;
  HLRAlgo_Array1OfTData_3: typeof HLRAlgo_Array1OfTData_3;
  HLRAlgo_Array1OfTData_4: typeof HLRAlgo_Array1OfTData_4;
  HLRAlgo_Array1OfTData_5: typeof HLRAlgo_Array1OfTData_5;
  Intrv_SequenceOfInterval_1: typeof Intrv_SequenceOfInterval_1;
  Intrv_SequenceOfInterval_2: typeof Intrv_SequenceOfInterval_2;
  Intrv_SequenceOfInterval_3: typeof Intrv_SequenceOfInterval_3;
  Handle_HLRAlgo_HArray1OfPHDat_1: typeof Handle_HLRAlgo_HArray1OfPHDat_1;
  Handle_HLRAlgo_HArray1OfPHDat_2: typeof Handle_HLRAlgo_HArray1OfPHDat_2;
  Handle_HLRAlgo_HArray1OfPHDat_3: typeof Handle_HLRAlgo_HArray1OfPHDat_3;
  Handle_HLRAlgo_HArray1OfPHDat_4: typeof Handle_HLRAlgo_HArray1OfPHDat_4;
  Handle_HLRAlgo_HArray1OfPINod_1: typeof Handle_HLRAlgo_HArray1OfPINod_1;
  Handle_HLRAlgo_HArray1OfPINod_2: typeof Handle_HLRAlgo_HArray1OfPINod_2;
  Handle_HLRAlgo_HArray1OfPINod_3: typeof Handle_HLRAlgo_HArray1OfPINod_3;
  Handle_HLRAlgo_HArray1OfPINod_4: typeof Handle_HLRAlgo_HArray1OfPINod_4;
  Handle_HLRAlgo_HArray1OfPISeg_1: typeof Handle_HLRAlgo_HArray1OfPISeg_1;
  Handle_HLRAlgo_HArray1OfPISeg_2: typeof Handle_HLRAlgo_HArray1OfPISeg_2;
  Handle_HLRAlgo_HArray1OfPISeg_3: typeof Handle_HLRAlgo_HArray1OfPISeg_3;
  Handle_HLRAlgo_HArray1OfPISeg_4: typeof Handle_HLRAlgo_HArray1OfPISeg_4;
  Handle_HLRAlgo_HArray1OfTData_1: typeof Handle_HLRAlgo_HArray1OfTData_1;
  Handle_HLRAlgo_HArray1OfTData_2: typeof Handle_HLRAlgo_HArray1OfTData_2;
  Handle_HLRAlgo_HArray1OfTData_3: typeof Handle_HLRAlgo_HArray1OfTData_3;
  Handle_HLRAlgo_HArray1OfTData_4: typeof Handle_HLRAlgo_HArray1OfTData_4;
  HLRAlgo_InterferenceList_1: typeof HLRAlgo_InterferenceList_1;
  HLRAlgo_InterferenceList_2: typeof HLRAlgo_InterferenceList_2;
  HLRAlgo_InterferenceList_3: typeof HLRAlgo_InterferenceList_3;
  HLRAlgo_ListOfBPoint_1: typeof HLRAlgo_ListOfBPoint_1;
  HLRAlgo_ListOfBPoint_2: typeof HLRAlgo_ListOfBPoint_2;
  HLRAlgo_ListOfBPoint_3: typeof HLRAlgo_ListOfBPoint_3;
  Handle_HLRAlgo_PolyData_1: typeof Handle_HLRAlgo_PolyData_1;
  Handle_HLRAlgo_PolyData_2: typeof Handle_HLRAlgo_PolyData_2;
  Handle_HLRAlgo_PolyData_3: typeof Handle_HLRAlgo_PolyData_3;
  Handle_HLRAlgo_PolyData_4: typeof Handle_HLRAlgo_PolyData_4;
  Handle_HLRAlgo_PolyAlgo_1: typeof Handle_HLRAlgo_PolyAlgo_1;
  Handle_HLRAlgo_PolyAlgo_2: typeof Handle_HLRAlgo_PolyAlgo_2;
  Handle_HLRAlgo_PolyAlgo_3: typeof Handle_HLRAlgo_PolyAlgo_3;
  Handle_HLRAlgo_PolyAlgo_4: typeof Handle_HLRAlgo_PolyAlgo_4;
  Handle_HLRAlgo_PolyInternalData_1: typeof Handle_HLRAlgo_PolyInternalData_1;
  Handle_HLRAlgo_PolyInternalData_2: typeof Handle_HLRAlgo_PolyInternalData_2;
  Handle_HLRAlgo_PolyInternalData_3: typeof Handle_HLRAlgo_PolyInternalData_3;
  Handle_HLRAlgo_PolyInternalData_4: typeof Handle_HLRAlgo_PolyInternalData_4;
  Handle_HLRAlgo_PolyShellData_1: typeof Handle_HLRAlgo_PolyShellData_1;
  Handle_HLRAlgo_PolyShellData_2: typeof Handle_HLRAlgo_PolyShellData_2;
  Handle_HLRAlgo_PolyShellData_3: typeof Handle_HLRAlgo_PolyShellData_3;
  Handle_HLRAlgo_PolyShellData_4: typeof Handle_HLRAlgo_PolyShellData_4;
  HLRBRep_SeqOfShapeBounds_1: typeof HLRBRep_SeqOfShapeBounds_1;
  HLRBRep_SeqOfShapeBounds_2: typeof HLRBRep_SeqOfShapeBounds_2;
  HLRBRep_SeqOfShapeBounds_3: typeof HLRBRep_SeqOfShapeBounds_3;
  Handle_HLRBRep_InternalAlgo_1: typeof Handle_HLRBRep_InternalAlgo_1;
  Handle_HLRBRep_InternalAlgo_2: typeof Handle_HLRBRep_InternalAlgo_2;
  Handle_HLRBRep_InternalAlgo_3: typeof Handle_HLRBRep_InternalAlgo_3;
  Handle_HLRBRep_InternalAlgo_4: typeof Handle_HLRBRep_InternalAlgo_4;
  Handle_HLRBRep_Algo_1: typeof Handle_HLRBRep_Algo_1;
  Handle_HLRBRep_Algo_2: typeof Handle_HLRBRep_Algo_2;
  Handle_HLRBRep_Algo_3: typeof Handle_HLRBRep_Algo_3;
  Handle_HLRBRep_Algo_4: typeof Handle_HLRBRep_Algo_4;
  Handle_HLRBRep_AreaLimit_1: typeof Handle_HLRBRep_AreaLimit_1;
  Handle_HLRBRep_AreaLimit_2: typeof Handle_HLRBRep_AreaLimit_2;
  Handle_HLRBRep_AreaLimit_3: typeof Handle_HLRBRep_AreaLimit_3;
  Handle_HLRBRep_AreaLimit_4: typeof Handle_HLRBRep_AreaLimit_4;
  HLRBRep_Array1OfEData_1: typeof HLRBRep_Array1OfEData_1;
  HLRBRep_Array1OfEData_2: typeof HLRBRep_Array1OfEData_2;
  HLRBRep_Array1OfEData_3: typeof HLRBRep_Array1OfEData_3;
  HLRBRep_Array1OfEData_4: typeof HLRBRep_Array1OfEData_4;
  HLRBRep_Array1OfEData_5: typeof HLRBRep_Array1OfEData_5;
  HLRBRep_Array1OfFData_1: typeof HLRBRep_Array1OfFData_1;
  HLRBRep_Array1OfFData_2: typeof HLRBRep_Array1OfFData_2;
  HLRBRep_Array1OfFData_3: typeof HLRBRep_Array1OfFData_3;
  HLRBRep_Array1OfFData_4: typeof HLRBRep_Array1OfFData_4;
  HLRBRep_Array1OfFData_5: typeof HLRBRep_Array1OfFData_5;
  Handle_HLRBRep_Data_1: typeof Handle_HLRBRep_Data_1;
  Handle_HLRBRep_Data_2: typeof Handle_HLRBRep_Data_2;
  Handle_HLRBRep_Data_3: typeof Handle_HLRBRep_Data_3;
  Handle_HLRBRep_Data_4: typeof Handle_HLRBRep_Data_4;
  HLRBRep_ListOfBPnt2D_1: typeof HLRBRep_ListOfBPnt2D_1;
  HLRBRep_ListOfBPnt2D_2: typeof HLRBRep_ListOfBPnt2D_2;
  HLRBRep_ListOfBPnt2D_3: typeof HLRBRep_ListOfBPnt2D_3;
  Handle_HLRBRep_PolyAlgo_1: typeof Handle_HLRBRep_PolyAlgo_1;
  Handle_HLRBRep_PolyAlgo_2: typeof Handle_HLRBRep_PolyAlgo_2;
  Handle_HLRBRep_PolyAlgo_3: typeof Handle_HLRBRep_PolyAlgo_3;
  Handle_HLRBRep_PolyAlgo_4: typeof Handle_HLRBRep_PolyAlgo_4;
  HLRTopoBRep_DataMapOfShapeFaceData_1: typeof HLRTopoBRep_DataMapOfShapeFaceData_1;
  HLRTopoBRep_DataMapOfShapeFaceData_2: typeof HLRTopoBRep_DataMapOfShapeFaceData_2;
  HLRTopoBRep_DataMapOfShapeFaceData_3: typeof HLRTopoBRep_DataMapOfShapeFaceData_3;
  HLRTopoBRep_ListOfVData_1: typeof HLRTopoBRep_ListOfVData_1;
  HLRTopoBRep_ListOfVData_2: typeof HLRTopoBRep_ListOfVData_2;
  HLRTopoBRep_ListOfVData_3: typeof HLRTopoBRep_ListOfVData_3;
  HLRTopoBRep_MapOfShapeListOfVData_1: typeof HLRTopoBRep_MapOfShapeListOfVData_1;
  HLRTopoBRep_MapOfShapeListOfVData_2: typeof HLRTopoBRep_MapOfShapeListOfVData_2;
  HLRTopoBRep_MapOfShapeListOfVData_3: typeof HLRTopoBRep_MapOfShapeListOfVData_3;
  Handle_HLRTopoBRep_OutLiner_1: typeof Handle_HLRTopoBRep_OutLiner_1;
  Handle_HLRTopoBRep_OutLiner_2: typeof Handle_HLRTopoBRep_OutLiner_2;
  Handle_HLRTopoBRep_OutLiner_3: typeof Handle_HLRTopoBRep_OutLiner_3;
  Handle_HLRTopoBRep_OutLiner_4: typeof Handle_HLRTopoBRep_OutLiner_4;
  TopBas_ListOfTestInterference_1: typeof TopBas_ListOfTestInterference_1;
  TopBas_ListOfTestInterference_2: typeof TopBas_ListOfTestInterference_2;
  TopBas_ListOfTestInterference_3: typeof TopBas_ListOfTestInterference_3;
  Contap_TFunction: typeof Contap_TFunction;
  Contap_IType: typeof Contap_IType;
  Intrv_Position: typeof Intrv_Position;
  HLRAlgo_PolyMask: typeof HLRAlgo_PolyMask;
  HLRBRep_TypeOfResultingEdge: typeof HLRBRep_TypeOfResultingEdge;
};
