declare const libName = "./modules/TKGeomAlgo.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class AppBlend_Approx {
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

export declare class ApproxInt_KnotTools {
  constructor();
  BuildKnots(thePntsXYZ: TColgp_Array1OfPnt, thePntsU1V1: TColgp_Array1OfPnt2d, thePntsU2V2: TColgp_Array1OfPnt2d, thePars: math_Vector, theApproxXYZ: Standard_Boolean, theApproxU1V1: Standard_Boolean, theApproxU2V2: Standard_Boolean, theMinNbPnts: Standard_Integer, theKnots: NCollection_Vector<Standard_Integer>): void;
}

export declare class ApproxInt_SvSurfaces {
  Compute(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Pt: gp_Pnt, Tg: gp_Vec, Tguv1: gp_Vec2d, Tguv2: gp_Vec2d): Standard_Boolean;
  Pnt(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, P: gp_Pnt): void;
  SeekPoint(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Point: IntSurf_PntOn2S): Standard_Boolean;
  Tangency(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec): Standard_Boolean;
  TangencyOnSurf1(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
  TangencyOnSurf2(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
}

export declare class IntSurf_PntOn2S {
  constructor()
  SetValue_1(Pt: gp_Pnt): void;
  SetValue_2(Pt: gp_Pnt, OnFirst: Standard_Boolean, U: Standard_Real, V: Standard_Real): void;
  SetValue_3(Pt: gp_Pnt, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  SetValue_4(OnFirst: Standard_Boolean, U: Standard_Real, V: Standard_Real): void;
  SetValue_5(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  Value(): gp_Pnt;
  ValueOnSurface(OnFirst: Standard_Boolean): gp_Pnt2d;
  ParametersOnS1(U1: Standard_Real, V1: Standard_Real): void;
  ParametersOnS2(U2: Standard_Real, V2: Standard_Real): void;
  ParametersOnSurface(OnFirst: Standard_Boolean, U: Standard_Real, V: Standard_Real): void;
  Parameters(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  IsSame(theOtherPoint: IntSurf_PntOn2S, theTol3D: Standard_Real, theTol2D: Standard_Real): Standard_Boolean;
}

export declare class IntSurf_Transition {
  SetValue_1(Tangent: Standard_Boolean, Type: IntSurf_TypeTrans): void;
  SetValue_2(Tangent: Standard_Boolean, Situ: IntSurf_Situation, Oppos: Standard_Boolean): void;
  SetValue_3(): void;
  TransitionType(): IntSurf_TypeTrans;
  IsTangent(): Standard_Boolean;
  Situation(): IntSurf_Situation;
  IsOpposite(): Standard_Boolean;
}

  export declare class IntSurf_Transition_1 extends IntSurf_Transition {
    constructor();
  }

  export declare class IntSurf_Transition_2 extends IntSurf_Transition {
    constructor(Tangent: Standard_Boolean, Type: IntSurf_TypeTrans);
  }

  export declare class IntSurf_Transition_3 extends IntSurf_Transition {
    constructor(Tangent: Standard_Boolean, Situ: IntSurf_Situation, Oppos: Standard_Boolean);
  }

export declare class TopTrans_CurveTransition {
  constructor()
  Reset_1(Tgt: gp_Dir, Norm: gp_Dir, Curv: Standard_Real): void;
  Reset_2(Tgt: gp_Dir): void;
  Compare_1(Tole: Standard_Real, Tang: gp_Dir, Norm: gp_Dir, Curv: Standard_Real, S: TopAbs_Orientation, Or: TopAbs_Orientation): void;
  StateBefore(): TopAbs_State;
  StateAfter(): TopAbs_State;
}

export declare class IntRes2d_Transition {
  SetValue_1(Tangent: Standard_Boolean, Pos: IntRes2d_Position, Type: IntRes2d_TypeTrans): void;
  SetValue_2(Tangent: Standard_Boolean, Pos: IntRes2d_Position, Situ: IntRes2d_Situation, Oppos: Standard_Boolean): void;
  SetValue_3(Pos: IntRes2d_Position): void;
  SetPosition(Pos: IntRes2d_Position): void;
  PositionOnCurve(): IntRes2d_Position;
  TransitionType(): IntRes2d_TypeTrans;
  IsTangent(): Standard_Boolean;
  Situation(): IntRes2d_Situation;
  IsOpposite(): Standard_Boolean;
}

  export declare class IntRes2d_Transition_1 extends IntRes2d_Transition {
    constructor();
  }

  export declare class IntRes2d_Transition_2 extends IntRes2d_Transition {
    constructor(Tangent: Standard_Boolean, Pos: IntRes2d_Position, Type: IntRes2d_TypeTrans);
  }

  export declare class IntRes2d_Transition_3 extends IntRes2d_Transition {
    constructor(Tangent: Standard_Boolean, Pos: IntRes2d_Position, Situ: IntRes2d_Situation, Oppos: Standard_Boolean);
  }

  export declare class IntRes2d_Transition_4 extends IntRes2d_Transition {
    constructor(Pos: IntRes2d_Position);
  }

export declare class IntRes2d_IntersectionPoint {
  SetValues(P: gp_Pnt2d, Uc1: Standard_Real, Uc2: Standard_Real, Trans1: IntRes2d_Transition, Trans2: IntRes2d_Transition, ReversedFlag: Standard_Boolean): void;
  Value(): gp_Pnt2d;
  ParamOnFirst(): Standard_Real;
  ParamOnSecond(): Standard_Real;
  TransitionOfFirst(): IntRes2d_Transition;
  TransitionOfSecond(): IntRes2d_Transition;
}

  export declare class IntRes2d_IntersectionPoint_1 extends IntRes2d_IntersectionPoint {
    constructor();
  }

  export declare class IntRes2d_IntersectionPoint_2 extends IntRes2d_IntersectionPoint {
    constructor(P: gp_Pnt2d, Uc1: Standard_Real, Uc2: Standard_Real, Trans1: IntRes2d_Transition, Trans2: IntRes2d_Transition, ReversedFlag: Standard_Boolean);
  }

export declare class IntRes2d_IntersectionSegment {
  IsOpposite(): Standard_Boolean;
  HasFirstPoint(): Standard_Boolean;
  FirstPoint(): IntRes2d_IntersectionPoint;
  HasLastPoint(): Standard_Boolean;
  LastPoint(): IntRes2d_IntersectionPoint;
}

  export declare class IntRes2d_IntersectionSegment_1 extends IntRes2d_IntersectionSegment {
    constructor();
  }

  export declare class IntRes2d_IntersectionSegment_2 extends IntRes2d_IntersectionSegment {
    constructor(P1: IntRes2d_IntersectionPoint, P2: IntRes2d_IntersectionPoint, Oppos: Standard_Boolean, ReverseFlag: Standard_Boolean);
  }

  export declare class IntRes2d_IntersectionSegment_3 extends IntRes2d_IntersectionSegment {
    constructor(P: IntRes2d_IntersectionPoint, First: Standard_Boolean, Oppos: Standard_Boolean, ReverseFlag: Standard_Boolean);
  }

  export declare class IntRes2d_IntersectionSegment_4 extends IntRes2d_IntersectionSegment {
    constructor(Oppos: Standard_Boolean);
  }

export declare class IntRes2d_Intersection {
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(N: Standard_Integer): IntRes2d_IntersectionPoint;
  NbSegments(): Standard_Integer;
  Segment(N: Standard_Integer): IntRes2d_IntersectionSegment;
  SetReversedParameters(Reverseflag: Standard_Boolean): void;
}

export declare class IntCurve_IntImpConicParConic extends IntRes2d_Intersection {
  Perform(ITool: IntCurve_IConicTool, Dom1: IntRes2d_Domain, PCurve: IntCurve_PConic, Dom2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  FindU(parameter: Standard_Real, point: gp_Pnt2d, TheParCurev: IntCurve_PConic, TheImpTool: IntCurve_IConicTool): Standard_Real;
  FindV(parameter: Standard_Real, point: gp_Pnt2d, TheImpTool: IntCurve_IConicTool, ParCurve: IntCurve_PConic, TheParCurveDomain: IntRes2d_Domain, V0: Standard_Real, V1: Standard_Real, Tolerance: Standard_Real): Standard_Real;
  And_Domaine_Objet1_Intersections(TheImpTool: IntCurve_IConicTool, TheParCurve: IntCurve_PConic, TheImpCurveDomain: IntRes2d_Domain, TheParCurveDomain: IntRes2d_Domain, NbResultats: Standard_Integer, Inter2_And_Domain2: TColStd_Array1OfReal, Inter1: TColStd_Array1OfReal, Resultat1: TColStd_Array1OfReal, Resultat2: TColStd_Array1OfReal, EpsNul: Standard_Real): void;
}

  export declare class IntCurve_IntImpConicParConic_1 extends IntCurve_IntImpConicParConic {
    constructor();
  }

  export declare class IntCurve_IntImpConicParConic_2 extends IntCurve_IntImpConicParConic {
    constructor(ITool: IntCurve_IConicTool, Dom1: IntRes2d_Domain, PCurve: IntCurve_PConic, Dom2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

export declare class IntCurve_IntConicConic extends IntRes2d_Intersection {
  Perform_1(L1: gp_Lin2d, D1: IntRes2d_Domain, L2: gp_Lin2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_2(L: gp_Lin2d, DL: IntRes2d_Domain, C: gp_Circ2d, DC: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_3(L: gp_Lin2d, DL: IntRes2d_Domain, E: gp_Elips2d, DE: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_4(L: gp_Lin2d, DL: IntRes2d_Domain, P: gp_Parab2d, DP: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_5(L: gp_Lin2d, DL: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_6(C1: gp_Circ2d, D1: IntRes2d_Domain, C2: gp_Circ2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_7(C: gp_Circ2d, DC: IntRes2d_Domain, E: gp_Elips2d, DE: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_8(C: gp_Circ2d, DC: IntRes2d_Domain, P: gp_Parab2d, DP: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_9(C: gp_Circ2d, DC: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_10(E1: gp_Elips2d, D1: IntRes2d_Domain, E2: gp_Elips2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_11(E: gp_Elips2d, DE: IntRes2d_Domain, P: gp_Parab2d, DP: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_12(E: gp_Elips2d, DE: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_13(P1: gp_Parab2d, D1: IntRes2d_Domain, P2: gp_Parab2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_14(P: gp_Parab2d, DP: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
  Perform_15(H1: gp_Hypr2d, D1: IntRes2d_Domain, H2: gp_Hypr2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real): void;
}

  export declare class IntCurve_IntConicConic_1 extends IntCurve_IntConicConic {
    constructor();
  }

  export declare class IntCurve_IntConicConic_2 extends IntCurve_IntConicConic {
    constructor(L1: gp_Lin2d, D1: IntRes2d_Domain, L2: gp_Lin2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_3 extends IntCurve_IntConicConic {
    constructor(L: gp_Lin2d, DL: IntRes2d_Domain, C: gp_Circ2d, DC: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_4 extends IntCurve_IntConicConic {
    constructor(L: gp_Lin2d, DL: IntRes2d_Domain, E: gp_Elips2d, DE: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_5 extends IntCurve_IntConicConic {
    constructor(L: gp_Lin2d, DL: IntRes2d_Domain, P: gp_Parab2d, DP: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_6 extends IntCurve_IntConicConic {
    constructor(L: gp_Lin2d, DL: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_7 extends IntCurve_IntConicConic {
    constructor(C1: gp_Circ2d, D1: IntRes2d_Domain, C2: gp_Circ2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_8 extends IntCurve_IntConicConic {
    constructor(C: gp_Circ2d, DC: IntRes2d_Domain, E: gp_Elips2d, DE: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_9 extends IntCurve_IntConicConic {
    constructor(C: gp_Circ2d, DC: IntRes2d_Domain, P: gp_Parab2d, DP: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_10 extends IntCurve_IntConicConic {
    constructor(C: gp_Circ2d, DC: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_11 extends IntCurve_IntConicConic {
    constructor(E1: gp_Elips2d, D1: IntRes2d_Domain, E2: gp_Elips2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_12 extends IntCurve_IntConicConic {
    constructor(E: gp_Elips2d, DE: IntRes2d_Domain, P: gp_Parab2d, DP: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_13 extends IntCurve_IntConicConic {
    constructor(E: gp_Elips2d, DE: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_14 extends IntCurve_IntConicConic {
    constructor(P1: gp_Parab2d, D1: IntRes2d_Domain, P2: gp_Parab2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_15 extends IntCurve_IntConicConic {
    constructor(P: gp_Parab2d, DP: IntRes2d_Domain, H: gp_Hypr2d, DH: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntCurve_IntConicConic_16 extends IntCurve_IntConicConic {
    constructor(H1: gp_Hypr2d, D1: IntRes2d_Domain, H2: gp_Hypr2d, D2: IntRes2d_Domain, TolConf: Standard_Real, Tol: Standard_Real);
  }

export declare class IntRes2d_Domain {
  SetValues_1(Pnt1: gp_Pnt2d, Par1: Standard_Real, Tol1: Standard_Real, Pnt2: gp_Pnt2d, Par2: Standard_Real, Tol2: Standard_Real): void;
  SetValues_2(): void;
  SetValues_3(Pnt: gp_Pnt2d, Par: Standard_Real, Tol: Standard_Real, First: Standard_Boolean): void;
  SetEquivalentParameters(zero: Standard_Real, period: Standard_Real): void;
  HasFirstPoint(): Standard_Boolean;
  FirstParameter(): Standard_Real;
  FirstPoint(): gp_Pnt2d;
  FirstTolerance(): Standard_Real;
  HasLastPoint(): Standard_Boolean;
  LastParameter(): Standard_Real;
  LastPoint(): gp_Pnt2d;
  LastTolerance(): Standard_Real;
  IsClosed(): Standard_Boolean;
  EquivalentParameters(zero: Standard_Real, zeroplusperiod: Standard_Real): void;
}

  export declare class IntRes2d_Domain_1 extends IntRes2d_Domain {
    constructor();
  }

  export declare class IntRes2d_Domain_2 extends IntRes2d_Domain {
    constructor(Pnt1: gp_Pnt2d, Par1: Standard_Real, Tol1: Standard_Real, Pnt2: gp_Pnt2d, Par2: Standard_Real, Tol2: Standard_Real);
  }

  export declare class IntRes2d_Domain_3 extends IntRes2d_Domain {
    constructor(Pnt: gp_Pnt2d, Par: Standard_Real, Tol: Standard_Real, First: Standard_Boolean);
  }

export declare class IntCurve_IConicTool {
  Value(X: Standard_Real): gp_Pnt2d;
  D1(U: Standard_Real, P: gp_Pnt2d, T: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, T: gp_Vec2d, N: gp_Vec2d): void;
  Distance(P: gp_Pnt2d): Standard_Real;
  GradDistance(P: gp_Pnt2d): gp_Vec2d;
  FindParameter(P: gp_Pnt2d): Standard_Real;
}

  export declare class IntCurve_IConicTool_1 extends IntCurve_IConicTool {
    constructor();
  }

  export declare class IntCurve_IConicTool_2 extends IntCurve_IConicTool {
    constructor(IT: IntCurve_IConicTool);
  }

  export declare class IntCurve_IConicTool_3 extends IntCurve_IConicTool {
    constructor(E: gp_Elips2d);
  }

  export declare class IntCurve_IConicTool_4 extends IntCurve_IConicTool {
    constructor(L: gp_Lin2d);
  }

  export declare class IntCurve_IConicTool_5 extends IntCurve_IConicTool {
    constructor(C: gp_Circ2d);
  }

  export declare class IntCurve_IConicTool_6 extends IntCurve_IConicTool {
    constructor(P: gp_Parab2d);
  }

  export declare class IntCurve_IConicTool_7 extends IntCurve_IConicTool {
    constructor(H: gp_Hypr2d);
  }

export declare class GeomFill_LocationLaw extends Standard_Transient {
  SetCurve(C: any): void;
  GetCurve(): any;
  SetTrsf(Transfo: gp_Mat): void;
  Copy(): any;
  D0_1(Param: Standard_Real, M: gp_Mat, V: gp_Vec): Standard_Boolean;
  D0_2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d): Standard_Boolean;
  D1(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  D2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, D2M: gp_Mat, D2V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Nb2dCurves(): Standard_Integer;
  HasFirstRestriction(): Standard_Boolean;
  HasLastRestriction(): Standard_Boolean;
  TraceNumber(): Standard_Integer;
  ErrorStatus(): GeomFill_PipeError;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetDomain(First: Standard_Real, Last: Standard_Real): void;
  Resolution(Index: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  SetTolerance(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  GetMaximalNorm(): Standard_Real;
  GetAverageLaw(AM: gp_Mat, AV: gp_Vec): void;
  IsTranslation(Error: Standard_Real): Standard_Boolean;
  IsRotation(Error: Standard_Real): Standard_Boolean;
  Rotation(Center: gp_Pnt): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomPlate_CurveConstraint extends Standard_Transient {
  SetOrder(Order: Standard_Integer): void;
  Order(): Standard_Integer;
  NbPoints(): Standard_Integer;
  SetNbPoints(NewNb: Standard_Integer): void;
  SetG0Criterion(G0Crit: any): void;
  SetG1Criterion(G1Crit: any): void;
  SetG2Criterion(G2Crit: any): void;
  G0Criterion(U: Standard_Real): Standard_Real;
  G1Criterion(U: Standard_Real): Standard_Real;
  G2Criterion(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Length(): Standard_Real;
  LPropSurf(U: Standard_Real): GeomLProp_SLProps;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec, V4: gp_Vec, V5: gp_Vec): void;
  Curve3d(): any;
  SetCurve2dOnSurf(Curve2d: any): void;
  Curve2dOnSurf(): any;
  SetProjectedCurve(Curve2d: any, TolU: Standard_Real, TolV: Standard_Real): void;
  ProjectedCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomPlate_CurveConstraint_1 extends GeomPlate_CurveConstraint {
    constructor();
  }

  export declare class GeomPlate_CurveConstraint_2 extends GeomPlate_CurveConstraint {
    constructor(Boundary: any, Order: Standard_Integer, NPt: Standard_Integer, TolDist: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real);
  }

export declare class GeomPlate_PointConstraint extends Standard_Transient {
  SetOrder(Order: Standard_Integer): void;
  Order(): Standard_Integer;
  SetG0Criterion(TolDist: Standard_Real): void;
  SetG1Criterion(TolAng: Standard_Real): void;
  SetG2Criterion(TolCurv: Standard_Real): void;
  G0Criterion(): Standard_Real;
  G1Criterion(): Standard_Real;
  G2Criterion(): Standard_Real;
  D0(P: gp_Pnt): void;
  D1(P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D2(P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec, V4: gp_Vec, V5: gp_Vec): void;
  HasPnt2dOnSurf(): Standard_Boolean;
  SetPnt2dOnSurf(Pnt: gp_Pnt2d): void;
  Pnt2dOnSurf(): gp_Pnt2d;
  LPropSurf(): GeomLProp_SLProps;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomPlate_PointConstraint_1 extends GeomPlate_PointConstraint {
    constructor(Pt: gp_Pnt, Order: Standard_Integer, TolDist: Standard_Real);
  }

  export declare class GeomPlate_PointConstraint_2 extends GeomPlate_PointConstraint {
    constructor(U: Standard_Real, V: Standard_Real, Surf: any, Order: Standard_Integer, TolDist: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real);
  }

export declare class Plate_PinpointConstraint {
  Pnt2d(): gp_XY;
  Idu(): Standard_Integer;
  Idv(): Standard_Integer;
  Value(): gp_XYZ;
}

  export declare class Plate_PinpointConstraint_1 extends Plate_PinpointConstraint {
    constructor();
  }

  export declare class Plate_PinpointConstraint_2 extends Plate_PinpointConstraint {
    constructor(point2d: gp_XY, ImposedValue: gp_XYZ, iu: Standard_Integer, iv: Standard_Integer);
  }

export declare class Plate_LinearXYZConstraint {
  GetPPC(): Plate_Array1OfPinpointConstraint;
  Coeff(): TColStd_Array2OfReal;
  SetPPC(Index: Standard_Integer, Value: Plate_PinpointConstraint): void;
  SetCoeff(Row: Standard_Integer, Col: Standard_Integer, Value: Standard_Real): void;
}

  export declare class Plate_LinearXYZConstraint_1 extends Plate_LinearXYZConstraint {
    constructor();
  }

  export declare class Plate_LinearXYZConstraint_2 extends Plate_LinearXYZConstraint {
    constructor(thePPC: Plate_Array1OfPinpointConstraint, theCoeff: TColStd_Array1OfReal);
  }

  export declare class Plate_LinearXYZConstraint_3 extends Plate_LinearXYZConstraint {
    constructor(thePPC: Plate_Array1OfPinpointConstraint, theCoeff: TColStd_Array2OfReal);
  }

  export declare class Plate_LinearXYZConstraint_4 extends Plate_LinearXYZConstraint {
    constructor(ColLen: Standard_Integer, RowLen: Standard_Integer);
  }

export declare class Plate_LinearScalarConstraint {
  GetPPC(): Plate_Array1OfPinpointConstraint;
  Coeff(): TColgp_Array2OfXYZ;
  SetPPC(Index: Standard_Integer, Value: Plate_PinpointConstraint): void;
  SetCoeff(Row: Standard_Integer, Col: Standard_Integer, Value: gp_XYZ): void;
}

  export declare class Plate_LinearScalarConstraint_1 extends Plate_LinearScalarConstraint {
    constructor();
  }

  export declare class Plate_LinearScalarConstraint_2 extends Plate_LinearScalarConstraint {
    constructor(thePPC1: Plate_PinpointConstraint, theCoeff: gp_XYZ);
  }

  export declare class Plate_LinearScalarConstraint_3 extends Plate_LinearScalarConstraint {
    constructor(thePPC: Plate_Array1OfPinpointConstraint, theCoeff: TColgp_Array1OfXYZ);
  }

  export declare class Plate_LinearScalarConstraint_4 extends Plate_LinearScalarConstraint {
    constructor(thePPC: Plate_Array1OfPinpointConstraint, theCoeff: TColgp_Array2OfXYZ);
  }

  export declare class Plate_LinearScalarConstraint_5 extends Plate_LinearScalarConstraint {
    constructor(ColLen: Standard_Integer, RowLen: Standard_Integer);
  }

export declare class Plate_Plate {
  Copy(Ref: Plate_Plate): Plate_Plate;
  Load_1(PConst: Plate_PinpointConstraint): void;
  Load_2(LXYZConst: Plate_LinearXYZConstraint): void;
  Load_3(LScalarConst: Plate_LinearScalarConstraint): void;
  Load_4(GTConst: Plate_GlobalTranslationConstraint): void;
  Load_5(LConst: Plate_LineConstraint): void;
  Load_6(PConst: Plate_PlaneConstraint): void;
  Load_7(SCConst: Plate_SampledCurveConstraint): void;
  Load_8(GtoCConst: Plate_GtoCConstraint): void;
  Load_9(FGtoCConst: Plate_FreeGtoCConstraint): void;
  SolveTI(ord: Standard_Integer, anisotropie: Standard_Real, theProgress: Message_ProgressRange): void;
  IsDone(): Standard_Boolean;
  destroy(): void;
  Init(): void;
  Evaluate(point2d: gp_XY): gp_XYZ;
  EvaluateDerivative(point2d: gp_XY, iu: Standard_Integer, iv: Standard_Integer): gp_XYZ;
  CoefPol(Coefs: any): void;
  SetPolynomialPartOnly(PPOnly: Standard_Boolean): void;
  Continuity(): Standard_Integer;
  UVBox(UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  UVConstraints(Seq: TColgp_SequenceOfXY): void;
}

  export declare class Plate_Plate_1 extends Plate_Plate {
    constructor();
  }

  export declare class Plate_Plate_2 extends Plate_Plate {
    constructor(Ref: Plate_Plate);
  }

export declare class GeomPlate_BuildPlateSurface {
  Init(): void;
  LoadInitSurface(Surf: any): void;
  Add_1(Cont: any): void;
  SetNbBounds(NbBounds: Standard_Integer): void;
  Add_2(Cont: any): void;
  Perform(theProgress: Message_ProgressRange): void;
  CurveConstraint(order: Standard_Integer): any;
  PointConstraint(order: Standard_Integer): any;
  Disc2dContour(nbp: Standard_Integer, Seq2d: TColgp_SequenceOfXY): void;
  Disc3dContour(nbp: Standard_Integer, iordre: Standard_Integer, Seq3d: TColgp_SequenceOfXYZ): void;
  IsDone(): Standard_Boolean;
  Surface(): any;
  SurfInit(): any;
  Sense(): any;
  Curves2d(): any;
  Order(): any;
  G0Error_1(): Standard_Real;
  G1Error_1(): Standard_Real;
  G2Error_1(): Standard_Real;
  G0Error_2(Index: Standard_Integer): Standard_Real;
  G1Error_2(Index: Standard_Integer): Standard_Real;
  G2Error_2(Index: Standard_Integer): Standard_Real;
}

  export declare class GeomPlate_BuildPlateSurface_1 extends GeomPlate_BuildPlateSurface {
    constructor(NPoints: any, TabCurve: any, Tang: any, Degree: Standard_Integer, NbIter: Standard_Integer, Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real, Anisotropie: Standard_Boolean);
  }

  export declare class GeomPlate_BuildPlateSurface_2 extends GeomPlate_BuildPlateSurface {
    constructor(Surf: any, Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real, Anisotropie: Standard_Boolean);
  }

  export declare class GeomPlate_BuildPlateSurface_3 extends GeomPlate_BuildPlateSurface {
    constructor(Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real, Anisotropie: Standard_Boolean);
  }

export declare class GeomFill_SectionLaw extends Standard_Transient {
  D0(Param: Standard_Real, Poles: TColgp_Array1OfPnt, Weigths: TColStd_Array1OfReal): Standard_Boolean;
  D1(Param: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  D2(Param: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  BSplineSurface(): any;
  SectionShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  IsRational(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetDomain(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: TColStd_Array1OfReal): void;
  SetTolerance(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  BarycentreOfSurf(): gp_Pnt;
  MaximalSection(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  IsConstant(Error: Standard_Real): Standard_Boolean;
  ConstantSection(): any;
  IsConicalLaw(Error: Standard_Real): Standard_Boolean;
  CirclSection(Param: Standard_Real): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IntCurveSurface_IntersectionPoint {
  SetValues(P: gp_Pnt, USurf: Standard_Real, VSurf: Standard_Real, UCurv: Standard_Real, TrCurv: IntCurveSurface_TransitionOnCurve): void;
  Values(P: gp_Pnt, USurf: Standard_Real, VSurf: Standard_Real, UCurv: Standard_Real, TrCurv: IntCurveSurface_TransitionOnCurve): void;
  Pnt(): gp_Pnt;
  U(): Standard_Real;
  V(): Standard_Real;
  W(): Standard_Real;
  Transition(): IntCurveSurface_TransitionOnCurve;
  Dump(): void;
}

  export declare class IntCurveSurface_IntersectionPoint_1 extends IntCurveSurface_IntersectionPoint {
    constructor();
  }

  export declare class IntCurveSurface_IntersectionPoint_2 extends IntCurveSurface_IntersectionPoint {
    constructor(P: gp_Pnt, USurf: Standard_Real, VSurf: Standard_Real, UCurv: Standard_Real, TrCurv: IntCurveSurface_TransitionOnCurve);
  }

export declare class IntCurveSurface_IntersectionSegment {
  SetValues(P1: IntCurveSurface_IntersectionPoint, P2: IntCurveSurface_IntersectionPoint): void;
  Values(P1: IntCurveSurface_IntersectionPoint, P2: IntCurveSurface_IntersectionPoint): void;
  FirstPoint_1(P1: IntCurveSurface_IntersectionPoint): void;
  SecondPoint_1(P2: IntCurveSurface_IntersectionPoint): void;
  FirstPoint_2(): IntCurveSurface_IntersectionPoint;
  SecondPoint_2(): IntCurveSurface_IntersectionPoint;
  Dump(): void;
}

  export declare class IntCurveSurface_IntersectionSegment_1 extends IntCurveSurface_IntersectionSegment {
    constructor();
  }

  export declare class IntCurveSurface_IntersectionSegment_2 extends IntCurveSurface_IntersectionSegment {
    constructor(P1: IntCurveSurface_IntersectionPoint, P2: IntCurveSurface_IntersectionPoint);
  }

export declare class IntCurveSurface_Intersection {
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): IntCurveSurface_IntersectionPoint;
  NbSegments(): Standard_Integer;
  Segment(Index: Standard_Integer): IntCurveSurface_IntersectionSegment;
  IsParallel(): Standard_Boolean;
  Dump(): void;
}

export declare class IntCurveSurface_HInter extends IntCurveSurface_Intersection {
  constructor()
  Perform_1(Curve: any, Surface: any): void;
  Perform_2(Curve: any, Polygon: IntCurveSurface_ThePolygonOfHInter, Surface: any): void;
  Perform_3(Curve: any, ThePolygon: IntCurveSurface_ThePolygonOfHInter, Surface: any, Polyhedron: IntCurveSurface_ThePolyhedronOfHInter): void;
  Perform_4(Curve: any, ThePolygon: IntCurveSurface_ThePolygonOfHInter, Surface: any, Polyhedron: IntCurveSurface_ThePolyhedronOfHInter, BndBSB: Bnd_BoundSortBox): void;
  Perform_5(Curve: any, Surface: any, Polyhedron: IntCurveSurface_ThePolyhedronOfHInter): void;
}

export declare class IntSurf_LineOn2S extends Standard_Transient {
  constructor(theAllocator: IntSurf_Allocator)
  Add(P: IntSurf_PntOn2S): void;
  NbPoints(): Standard_Integer;
  Value_1(Index: Standard_Integer): IntSurf_PntOn2S;
  Reverse(): void;
  Split(Index: Standard_Integer): any;
  Value_2(Index: Standard_Integer, P: IntSurf_PntOn2S): void;
  SetUV(Index: Standard_Integer, OnFirst: Standard_Boolean, U: Standard_Real, V: Standard_Real): void;
  Clear(): void;
  InsertBefore(I: Standard_Integer, P: IntSurf_PntOn2S): void;
  RemovePoint(I: Standard_Integer): void;
  IsOutSurf1Box(theP: gp_Pnt2d): Standard_Boolean;
  IsOutSurf2Box(theP: gp_Pnt2d): Standard_Boolean;
  IsOutBox(theP: gp_Pnt): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Boundary extends Standard_Transient {
  Value(U: Standard_Real): gp_Pnt;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  HasNormals(): Standard_Boolean;
  Norm(U: Standard_Real): gp_Vec;
  D1Norm(U: Standard_Real, N: gp_Vec, DN: gp_Vec): void;
  Reparametrize(First: Standard_Real, Last: Standard_Real, HasDF: Standard_Boolean, HasDL: Standard_Boolean, DF: Standard_Real, DL: Standard_Real, Rev: Standard_Boolean): void;
  Points(PFirst: gp_Pnt, PLast: gp_Pnt): void;
  Bounds(First: Standard_Real, Last: Standard_Real): void;
  IsDegenerated(): Standard_Boolean;
  Tol3d_1(): Standard_Real;
  Tol3d_2(Tol: Standard_Real): void;
  Tolang_1(): Standard_Real;
  Tolang_2(Tol: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_BoundWithSurf extends GeomFill_Boundary {
  constructor(CurveOnSurf: Adaptor3d_CurveOnSurface, Tol3d: Standard_Real, Tolang: Standard_Real)
  Value(U: Standard_Real): gp_Pnt;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  HasNormals(): Standard_Boolean;
  Norm(U: Standard_Real): gp_Vec;
  D1Norm(U: Standard_Real, N: gp_Vec, DN: gp_Vec): void;
  Reparametrize(First: Standard_Real, Last: Standard_Real, HasDF: Standard_Boolean, HasDL: Standard_Boolean, DF: Standard_Real, DL: Standard_Real, Rev: Standard_Boolean): void;
  Bounds(First: Standard_Real, Last: Standard_Real): void;
  IsDegenerated(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_SimpleBound extends GeomFill_Boundary {
  constructor(Curve: any, Tol3d: Standard_Real, Tolang: Standard_Real)
  Value(U: Standard_Real): gp_Pnt;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  Reparametrize(First: Standard_Real, Last: Standard_Real, HasDF: Standard_Boolean, HasDL: Standard_Boolean, DF: Standard_Real, DL: Standard_Real, Rev: Standard_Boolean): void;
  Bounds(First: Standard_Real, Last: Standard_Real): void;
  IsDegenerated(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_CornerState {
  constructor()
  Gap_1(): Standard_Real;
  Gap_2(G: Standard_Real): void;
  TgtAng_1(): Standard_Real;
  TgtAng_2(Ang: Standard_Real): void;
  HasConstraint(): Standard_Boolean;
  Constraint(): void;
  NorAng_1(): Standard_Real;
  NorAng_2(Ang: Standard_Real): void;
  IsToKill(Scal: Standard_Real): Standard_Boolean;
  DoKill(Scal: Standard_Real): void;
}

export declare class GeomFill_ConstrainedFilling {
  constructor(MaxDeg: Standard_Integer, MaxSeg: Standard_Integer)
  Init_1(B1: any, B2: any, B3: any, NoCheck: Standard_Boolean): void;
  Init_2(B1: any, B2: any, B3: any, B4: any, NoCheck: Standard_Boolean): void;
  SetDomain(l: Standard_Real, B: any): void;
  ReBuild(): void;
  Boundary(I: Standard_Integer): any;
  Surface(): any;
  Eval(W: Standard_Real, Ord: Standard_Integer, Result: Standard_Real): Standard_Integer;
  CheckCoonsAlgPatch(I: Standard_Integer): void;
  CheckTgteField(I: Standard_Integer): void;
  CheckApprox(I: Standard_Integer): void;
  CheckResult(I: Standard_Integer): void;
}

export declare class Law_Function extends Standard_Transient {
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Value(X: Standard_Real): Standard_Real;
  D1(X: Standard_Real, F: Standard_Real, D: Standard_Real): void;
  D2(X: Standard_Real, F: Standard_Real, D: Standard_Real, D2: Standard_Real): void;
  Trim(PFirst: Standard_Real, PLast: Standard_Real, Tol: Standard_Real): any;
  Bounds(PFirst: Standard_Real, PLast: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IntSurf_Quadric {
  SetValue_1(P: gp_Pln): void;
  SetValue_2(C: gp_Cylinder): void;
  SetValue_3(S: gp_Sphere): void;
  SetValue_4(C: gp_Cone): void;
  SetValue_5(T: gp_Torus): void;
  Distance(P: gp_Pnt): Standard_Real;
  Gradient(P: gp_Pnt): gp_Vec;
  ValAndGrad(P: gp_Pnt, Dist: Standard_Real, Grad: gp_Vec): void;
  TypeQuadric(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Sphere(): gp_Sphere;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Torus(): gp_Torus;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Normale_1(U: Standard_Real, V: Standard_Real): gp_Vec;
  Parameters(P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  Normale_2(P: gp_Pnt): gp_Vec;
}

  export declare class IntSurf_Quadric_1 extends IntSurf_Quadric {
    constructor();
  }

  export declare class IntSurf_Quadric_2 extends IntSurf_Quadric {
    constructor(P: gp_Pln);
  }

  export declare class IntSurf_Quadric_3 extends IntSurf_Quadric {
    constructor(C: gp_Cylinder);
  }

  export declare class IntSurf_Quadric_4 extends IntSurf_Quadric {
    constructor(S: gp_Sphere);
  }

  export declare class IntSurf_Quadric_5 extends IntSurf_Quadric {
    constructor(C: gp_Cone);
  }

  export declare class IntSurf_Quadric_6 extends IntSurf_Quadric {
    constructor(T: gp_Torus);
  }

export declare class IntSurf_InteriorPoint {
  SetValue(P: gp_Pnt, U: Standard_Real, V: Standard_Real, Direc: gp_Vec, Direc2d: gp_Vec2d): void;
  Value(): gp_Pnt;
  Parameters(U: Standard_Real, V: Standard_Real): void;
  UParameter(): Standard_Real;
  VParameter(): Standard_Real;
  Direction(): gp_Vec;
  Direction2d(): gp_Vec2d;
}

  export declare class IntSurf_InteriorPoint_1 extends IntSurf_InteriorPoint {
    constructor();
  }

  export declare class IntSurf_InteriorPoint_2 extends IntSurf_InteriorPoint {
    constructor(P: gp_Pnt, U: Standard_Real, V: Standard_Real, Direc: gp_Vec, Direc2d: gp_Vec2d);
  }

export declare class IntSurf_Couple {
  First(): Standard_Integer;
  Second(): Standard_Integer;
}

  export declare class IntSurf_Couple_1 extends IntSurf_Couple {
    constructor();
  }

  export declare class IntSurf_Couple_2 extends IntSurf_Couple {
    constructor(Index1: Standard_Integer, Index2: Standard_Integer);
  }

export declare class IntSurf_PathPoint {
  SetValue(P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  AddUV(U: Standard_Real, V: Standard_Real): void;
  SetDirections(V: gp_Vec, D: gp_Dir2d): void;
  SetTangency(Tang: Standard_Boolean): void;
  SetPassing(Pass: Standard_Boolean): void;
  Value(): gp_Pnt;
  Value2d(U: Standard_Real, V: Standard_Real): void;
  IsPassingPnt(): Standard_Boolean;
  IsTangent(): Standard_Boolean;
  Direction3d(): gp_Vec;
  Direction2d(): gp_Dir2d;
  Multiplicity(): Standard_Integer;
  Parameters(Index: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
}

  export declare class IntSurf_PathPoint_1 extends IntSurf_PathPoint {
    constructor();
  }

  export declare class IntSurf_PathPoint_2 extends IntSurf_PathPoint {
    constructor(P: gp_Pnt, U: Standard_Real, V: Standard_Real);
  }

export declare class HatchGen_IntersectionPoint {
  SetIndex(Index: Standard_Integer): void;
  Index(): Standard_Integer;
  SetParameter(Parameter: Standard_Real): void;
  Parameter(): Standard_Real;
  SetPosition(Position: TopAbs_Orientation): void;
  Position(): TopAbs_Orientation;
  SetStateBefore(State: TopAbs_State): void;
  StateBefore(): TopAbs_State;
  SetStateAfter(State: TopAbs_State): void;
  StateAfter(): TopAbs_State;
  SetSegmentBeginning(State: Standard_Boolean): void;
  SegmentBeginning(): Standard_Boolean;
  SetSegmentEnd(State: Standard_Boolean): void;
  SegmentEnd(): Standard_Boolean;
  Dump(Index: Standard_Integer): void;
}

export declare class HatchGen_PointOnElement extends HatchGen_IntersectionPoint {
  SetIntersectionType(Type: HatchGen_IntersectionType): void;
  IntersectionType(): HatchGen_IntersectionType;
  IsIdentical(Point: HatchGen_PointOnElement, Confusion: Standard_Real): Standard_Boolean;
  IsDifferent(Point: HatchGen_PointOnElement, Confusion: Standard_Real): Standard_Boolean;
  Dump(Index: Standard_Integer): void;
}

  export declare class HatchGen_PointOnElement_1 extends HatchGen_PointOnElement {
    constructor();
  }

  export declare class HatchGen_PointOnElement_2 extends HatchGen_PointOnElement {
    constructor(Point: IntRes2d_IntersectionPoint);
  }

export declare class HatchGen_PointOnHatching extends HatchGen_IntersectionPoint {
  AddPoint(Point: HatchGen_PointOnElement, Confusion: Standard_Real): void;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): HatchGen_PointOnElement;
  RemPoint(Index: Standard_Integer): void;
  ClrPoints(): void;
  IsLower(Point: HatchGen_PointOnHatching, Confusion: Standard_Real): Standard_Boolean;
  IsEqual(Point: HatchGen_PointOnHatching, Confusion: Standard_Real): Standard_Boolean;
  IsGreater(Point: HatchGen_PointOnHatching, Confusion: Standard_Real): Standard_Boolean;
  Dump(Index: Standard_Integer): void;
}

  export declare class HatchGen_PointOnHatching_1 extends HatchGen_PointOnHatching {
    constructor();
  }

  export declare class HatchGen_PointOnHatching_2 extends HatchGen_PointOnHatching {
    constructor(Point: IntRes2d_IntersectionPoint);
  }

export declare class HatchGen_Domain {
  SetPoints_1(P1: HatchGen_PointOnHatching, P2: HatchGen_PointOnHatching): void;
  SetPoints_2(): void;
  SetFirstPoint_1(P: HatchGen_PointOnHatching): void;
  SetFirstPoint_2(): void;
  SetSecondPoint_1(P: HatchGen_PointOnHatching): void;
  SetSecondPoint_2(): void;
  HasFirstPoint(): Standard_Boolean;
  FirstPoint(): HatchGen_PointOnHatching;
  HasSecondPoint(): Standard_Boolean;
  SecondPoint(): HatchGen_PointOnHatching;
  Dump(Index: Standard_Integer): void;
}

  export declare class HatchGen_Domain_1 extends HatchGen_Domain {
    constructor();
  }

  export declare class HatchGen_Domain_2 extends HatchGen_Domain {
    constructor(P1: HatchGen_PointOnHatching, P2: HatchGen_PointOnHatching);
  }

  export declare class HatchGen_Domain_3 extends HatchGen_Domain {
    constructor(P: HatchGen_PointOnHatching, First: Standard_Boolean);
  }

export declare class FairCurve_Batten {
  constructor(P1: gp_Pnt2d, P2: gp_Pnt2d, Height: Standard_Real, Slope: Standard_Real)
  SetFreeSliding(FreeSliding: Standard_Boolean): void;
  SetConstraintOrder1(ConstraintOrder: Standard_Integer): void;
  SetConstraintOrder2(ConstraintOrder: Standard_Integer): void;
  SetP1(P1: gp_Pnt2d): void;
  SetP2(P2: gp_Pnt2d): void;
  SetAngle1(Angle1: Standard_Real): void;
  SetAngle2(Angle2: Standard_Real): void;
  SetHeight(Height: Standard_Real): void;
  SetSlope(Slope: Standard_Real): void;
  SetSlidingFactor(SlidingFactor: Standard_Real): void;
  Compute_1(Code: FairCurve_AnalysisCode, NbIterations: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  SlidingOfReference_1(): Standard_Real;
  GetFreeSliding(): Standard_Boolean;
  GetConstraintOrder1(): Standard_Integer;
  GetConstraintOrder2(): Standard_Integer;
  GetP1(): gp_Pnt2d;
  GetP2(): gp_Pnt2d;
  GetAngle1(): Standard_Real;
  GetAngle2(): Standard_Real;
  GetHeight(): Standard_Real;
  GetSlope(): Standard_Real;
  GetSlidingFactor(): Standard_Real;
  Curve(): any;
  Dump(o: Standard_OStream): void;
}

export declare class FairCurve_BattenLaw extends math_Function {
  constructor(Heigth: Standard_Real, Slope: Standard_Real, Sliding: Standard_Real)
  SetSliding(Sliding: Standard_Real): void;
  SetHeigth(Heigth: Standard_Real): void;
  SetSlope(Slope: Standard_Real): void;
  Value(T: Standard_Real, THeigth: Standard_Real): Standard_Boolean;
}

export declare class FairCurve_DistributionOfEnergy extends math_FunctionSet {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  SetDerivativeOrder(DerivativeOrder: Standard_Integer): void;
}

export declare class FairCurve_DistributionOfJerk extends FairCurve_DistributionOfEnergy {
  constructor(BSplOrder: Standard_Integer, FlatKnots: any, Poles: any, DerivativeOrder: Standard_Integer, Law: FairCurve_BattenLaw, NbValAux: Standard_Integer)
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
}

export declare class FairCurve_DistributionOfSagging extends FairCurve_DistributionOfEnergy {
  constructor(BSplOrder: Standard_Integer, FlatKnots: any, Poles: any, DerivativeOrder: Standard_Integer, Law: FairCurve_BattenLaw, NbValAux: Standard_Integer)
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
}

export declare class FairCurve_DistributionOfTension extends FairCurve_DistributionOfEnergy {
  constructor(BSplOrder: Standard_Integer, FlatKnots: any, Poles: any, DerivativeOrder: Standard_Integer, LengthSliding: Standard_Real, Law: FairCurve_BattenLaw, NbValAux: Standard_Integer, Uniform: Standard_Boolean)
  SetLengthSliding(LengthSliding: Standard_Real): void;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
}

export declare class FairCurve_Energy extends math_MultipleVarFunctionWithHessian {
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, E: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values_1(X: math_Vector, E: Standard_Real, G: math_Vector): Standard_Boolean;
  Values_2(X: math_Vector, E: Standard_Real, G: math_Vector, H: math_Matrix): Standard_Boolean;
  Variable(X: math_Vector): Standard_Boolean;
  Poles(): any;
}

export declare class FairCurve_EnergyOfBatten extends FairCurve_Energy {
  constructor(BSplOrder: Standard_Integer, FlatKnots: any, Poles: any, ContrOrder1: Standard_Integer, ContrOrder2: Standard_Integer, Law: FairCurve_BattenLaw, LengthSliding: Standard_Real, FreeSliding: Standard_Boolean, Angle1: Standard_Real, Angle2: Standard_Real)
  LengthSliding(): Standard_Real;
  Status(): FairCurve_AnalysisCode;
  Variable(X: math_Vector): Standard_Boolean;
}

export declare class FairCurve_EnergyOfMVC extends FairCurve_Energy {
  constructor(BSplOrder: Standard_Integer, FlatKnots: any, Poles: any, ContrOrder1: Standard_Integer, ContrOrder2: Standard_Integer, Law: FairCurve_BattenLaw, PhysicalRatio: Standard_Real, LengthSliding: Standard_Real, FreeSliding: Standard_Boolean, Angle1: Standard_Real, Angle2: Standard_Real, Curvature1: Standard_Real, Curvature2: Standard_Real)
  LengthSliding(): Standard_Real;
  Status(): FairCurve_AnalysisCode;
  Variable(X: math_Vector): Standard_Boolean;
}

export declare class FairCurve_MinimalVariation extends FairCurve_Batten {
  constructor(P1: gp_Pnt2d, P2: gp_Pnt2d, Heigth: Standard_Real, Slope: Standard_Real, PhysicalRatio: Standard_Real)
  SetCurvature1(Curvature: Standard_Real): void;
  SetCurvature2(Curvature: Standard_Real): void;
  SetPhysicalRatio(Ratio: Standard_Real): void;
  Compute_1(ACode: FairCurve_AnalysisCode, NbIterations: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  GetCurvature1(): Standard_Real;
  GetCurvature2(): Standard_Real;
  GetPhysicalRatio(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class FairCurve_Newton {
  constructor(theFunction: math_MultipleVarFunctionWithHessian, theSpatialTolerance: Standard_Real, theCriteriumTolerance: Standard_Real, theNbIterations: Standard_Integer, theConvexity: Standard_Real, theWithSingularity: Standard_Boolean)
  IsConverged(): Standard_Boolean;
}

export declare class GccAna_Circ2d2TanOn {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  CenterOn3(Index: Standard_Integer, ParArg: Standard_Real, PntArg: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  IsTheSame2(Index: Standard_Integer): Standard_Boolean;
}

  export declare class GccAna_Circ2d2TanOn_1 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, OnLine: gp_Lin2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_2 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedLin, OnLine: gp_Lin2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_3 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedLin, Qualified2: GccEnt_QualifiedLin, OnLine: gp_Lin2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_4 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedCirc, Point2: gp_Pnt2d, OnLine: gp_Lin2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_5 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedLin, Point2: gp_Pnt2d, OnLine: gp_Lin2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_6 extends GccAna_Circ2d2TanOn {
    constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d, OnLine: gp_Lin2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_7 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, OnCirc: gp_Circ2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_8 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedLin, OnCirc: gp_Circ2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_9 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedCirc, Point2: gp_Pnt2d, OnCirc: gp_Circ2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_10 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedLin, Qualified2: GccEnt_QualifiedLin, OnCirc: gp_Circ2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_11 extends GccAna_Circ2d2TanOn {
    constructor(Qualified1: GccEnt_QualifiedLin, Point2: gp_Pnt2d, OnCirc: gp_Circ2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanOn_12 extends GccAna_Circ2d2TanOn {
    constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d, OnCirc: gp_Circ2d, Tolerance: Standard_Real);
  }

export declare class GccAna_Circ2d2TanRad {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  IsTheSame2(Index: Standard_Integer): Standard_Boolean;
}

  export declare class GccAna_Circ2d2TanRad_1 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_2 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedLin, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_3 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, Point2: gp_Pnt2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_4 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedLin, Point2: gp_Pnt2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_5 extends GccAna_Circ2d2TanRad {
    constructor(Qualified1: GccEnt_QualifiedLin, Qualified2: GccEnt_QualifiedLin, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d2TanRad_6 extends GccAna_Circ2d2TanRad {
    constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

export declare class GccAna_Circ2d3Tan {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position, Qualif3: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency3(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  IsTheSame2(Index: Standard_Integer): Standard_Boolean;
  IsTheSame3(Index: Standard_Integer): Standard_Boolean;
}

  export declare class GccAna_Circ2d3Tan_1 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, Qualified3: GccEnt_QualifiedCirc, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_2 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, Qualified3: GccEnt_QualifiedLin, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_3 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedLin, Qualified3: GccEnt_QualifiedLin, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_4 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedLin, Qualified2: GccEnt_QualifiedLin, Qualified3: GccEnt_QualifiedLin, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_5 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, Point3: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_6 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedLin, Point3: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_7 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedLin, Qualified2: GccEnt_QualifiedLin, Point3: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_8 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Point2: gp_Pnt2d, Point3: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_9 extends GccAna_Circ2d3Tan {
    constructor(Qualified1: GccEnt_QualifiedLin, Point2: gp_Pnt2d, Point3: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2d3Tan_10 extends GccAna_Circ2d3Tan {
    constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d, Point3: gp_Pnt2d, Tolerance: Standard_Real);
  }

export declare class GccAna_Circ2dBisec {
  constructor(Circ1: gp_Circ2d, Circ2: gp_Circ2d)
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): any;
}

export declare class GccAna_Circ2dTanCen {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
}

  export declare class GccAna_Circ2dTanCen_1 extends GccAna_Circ2dTanCen {
    constructor(Qualified1: GccEnt_QualifiedCirc, Pcenter: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2dTanCen_2 extends GccAna_Circ2dTanCen {
    constructor(Linetan: gp_Lin2d, Pcenter: gp_Pnt2d);
  }

  export declare class GccAna_Circ2dTanCen_3 extends GccAna_Circ2dTanCen {
    constructor(Point1: gp_Pnt2d, Pcenter: gp_Pnt2d);
  }

export declare class GccAna_Circ2dTanOnRad {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  CenterOn3(Index: Standard_Integer, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
}

  export declare class GccAna_Circ2dTanOnRad_1 extends GccAna_Circ2dTanOnRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, OnLine: gp_Lin2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2dTanOnRad_2 extends GccAna_Circ2dTanOnRad {
    constructor(Qualified1: GccEnt_QualifiedLin, OnLine: gp_Lin2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2dTanOnRad_3 extends GccAna_Circ2dTanOnRad {
    constructor(Point1: gp_Pnt2d, OnLine: gp_Lin2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2dTanOnRad_4 extends GccAna_Circ2dTanOnRad {
    constructor(Qualified1: GccEnt_QualifiedCirc, OnCirc: gp_Circ2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2dTanOnRad_5 extends GccAna_Circ2dTanOnRad {
    constructor(Qualified1: GccEnt_QualifiedLin, OnCirc: gp_Circ2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class GccAna_Circ2dTanOnRad_6 extends GccAna_Circ2dTanOnRad {
    constructor(Point1: gp_Pnt2d, OnCirc: gp_Circ2d, Radius: Standard_Real, Tolerance: Standard_Real);
  }

export declare class GccAna_CircLin2dBisec {
  constructor(Circle: gp_Circ2d, Line: gp_Lin2d)
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): any;
}

export declare class GccAna_CircPnt2dBisec {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): any;
}

  export declare class GccAna_CircPnt2dBisec_1 extends GccAna_CircPnt2dBisec {
    constructor(Circle1: gp_Circ2d, Point2: gp_Pnt2d);
  }

  export declare class GccAna_CircPnt2dBisec_2 extends GccAna_CircPnt2dBisec {
    constructor(Circle1: gp_Circ2d, Point2: gp_Pnt2d, Tolerance: Standard_Real);
  }

export declare class GccAna_Lin2d2Tan {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Lin2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
}

  export declare class GccAna_Lin2d2Tan_1 extends GccAna_Lin2d2Tan {
    constructor(ThePoint1: gp_Pnt2d, ThePoint2: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Lin2d2Tan_2 extends GccAna_Lin2d2Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, ThePoint: gp_Pnt2d, Tolerance: Standard_Real);
  }

  export declare class GccAna_Lin2d2Tan_3 extends GccAna_Lin2d2Tan {
    constructor(Qualified1: GccEnt_QualifiedCirc, Qualified2: GccEnt_QualifiedCirc, Tolerance: Standard_Real);
  }

export declare class GccAna_Lin2dBisec {
  constructor(Lin1: gp_Lin2d, Lin2: gp_Lin2d)
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Lin2d;
  Intersection1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Intersection2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
}

export declare class GccAna_Lin2dTanObl {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Lin2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Intersection2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
}

  export declare class GccAna_Lin2dTanObl_1 extends GccAna_Lin2dTanObl {
    constructor(ThePoint: gp_Pnt2d, TheLine: gp_Lin2d, TheAngle: Standard_Real);
  }

  export declare class GccAna_Lin2dTanObl_2 extends GccAna_Lin2dTanObl {
    constructor(Qualified1: GccEnt_QualifiedCirc, TheLine: gp_Lin2d, TheAngle: Standard_Real);
  }

export declare class GccAna_Lin2dTanPar {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Lin2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, Pnt: gp_Pnt2d): void;
}

  export declare class GccAna_Lin2dTanPar_1 extends GccAna_Lin2dTanPar {
    constructor(ThePoint: gp_Pnt2d, Lin1: gp_Lin2d);
  }

  export declare class GccAna_Lin2dTanPar_2 extends GccAna_Lin2dTanPar {
    constructor(Qualified1: GccEnt_QualifiedCirc, Lin1: gp_Lin2d);
  }

export declare class GccAna_Lin2dTanPer {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  ThisSolution(Index: Standard_Integer): gp_Lin2d;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, Pnt: gp_Pnt2d): void;
  Intersection2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
}

  export declare class GccAna_Lin2dTanPer_1 extends GccAna_Lin2dTanPer {
    constructor(ThePnt: gp_Pnt2d, TheLin: gp_Lin2d);
  }

  export declare class GccAna_Lin2dTanPer_2 extends GccAna_Lin2dTanPer {
    constructor(ThePnt: gp_Pnt2d, TheCircle: gp_Circ2d);
  }

  export declare class GccAna_Lin2dTanPer_3 extends GccAna_Lin2dTanPer {
    constructor(Qualified1: GccEnt_QualifiedCirc, TheLin: gp_Lin2d);
  }

  export declare class GccAna_Lin2dTanPer_4 extends GccAna_Lin2dTanPer {
    constructor(Qualified1: GccEnt_QualifiedCirc, TheCircle: gp_Circ2d);
  }

export declare class GccAna_LinPnt2dBisec {
  constructor(Line1: gp_Lin2d, Point2: gp_Pnt2d)
  IsDone(): Standard_Boolean;
  ThisSolution(): any;
}

export declare class GccAna_NoSolution extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GccAna_NoSolution_1 extends GccAna_NoSolution {
    constructor();
  }

  export declare class GccAna_NoSolution_2 extends GccAna_NoSolution {
    constructor(theMessage: Standard_CString);
  }

export declare class GccAna_Pnt2dBisec {
  constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d)
  IsDone(): Standard_Boolean;
  HasSolution(): Standard_Boolean;
  ThisSolution(): gp_Lin2d;
}

export declare class GccEnt {
  constructor();
  PositionToString(thePosition: GccEnt_Position): Standard_CString;
  PositionFromString_1(thePositionString: Standard_CString): GccEnt_Position;
  PositionFromString_2(thePositionString: Standard_CString, thePosition: GccEnt_Position): Standard_Boolean;
  Unqualified_1(Obj: gp_Lin2d): GccEnt_QualifiedLin;
  Unqualified_2(Obj: gp_Circ2d): GccEnt_QualifiedCirc;
  Enclosing(Obj: gp_Circ2d): GccEnt_QualifiedCirc;
  Enclosed_1(Obj: gp_Lin2d): GccEnt_QualifiedLin;
  Enclosed_2(Obj: gp_Circ2d): GccEnt_QualifiedCirc;
  Outside_1(Obj: gp_Lin2d): GccEnt_QualifiedLin;
  Outside_2(Obj: gp_Circ2d): GccEnt_QualifiedCirc;
}

export declare class GccEnt_BadQualifier extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GccEnt_BadQualifier_1 extends GccEnt_BadQualifier {
    constructor();
  }

  export declare class GccEnt_BadQualifier_2 extends GccEnt_BadQualifier {
    constructor(theMessage: Standard_CString);
  }

export declare class GccEnt_QualifiedCirc {
  constructor(Qualified: gp_Circ2d, Qualifier: GccEnt_Position)
  Qualified(): gp_Circ2d;
  Qualifier(): GccEnt_Position;
  IsUnqualified(): Standard_Boolean;
  IsEnclosing(): Standard_Boolean;
  IsEnclosed(): Standard_Boolean;
  IsOutside(): Standard_Boolean;
}

export declare class GccEnt_QualifiedLin {
  constructor(Qualified: gp_Lin2d, Qualifier: GccEnt_Position)
  Qualified(): gp_Lin2d;
  Qualifier(): GccEnt_Position;
  IsUnqualified(): Standard_Boolean;
  IsEnclosed(): Standard_Boolean;
  IsOutside(): Standard_Boolean;
}

export declare class GccInt_Bisec extends Standard_Transient {
  ArcType(): GccInt_IType;
  Point(): gp_Pnt2d;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Ellipse(): gp_Elips2d;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GccInt_BCirc extends GccInt_Bisec {
  constructor(Circ: gp_Circ2d)
  Circle(): gp_Circ2d;
  ArcType(): GccInt_IType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GccInt_BElips extends GccInt_Bisec {
  constructor(Ellipse: gp_Elips2d)
  Ellipse(): gp_Elips2d;
  ArcType(): GccInt_IType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GccInt_BHyper extends GccInt_Bisec {
  constructor(Hyper: gp_Hypr2d)
  Hyperbola(): gp_Hypr2d;
  ArcType(): GccInt_IType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GccInt_BLine extends GccInt_Bisec {
  constructor(Line: gp_Lin2d)
  Line(): gp_Lin2d;
  ArcType(): GccInt_IType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GccInt_BParab extends GccInt_Bisec {
  constructor(Parab: gp_Parab2d)
  Parabola(): gp_Parab2d;
  ArcType(): GccInt_IType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GccInt_BPoint extends GccInt_Bisec {
  constructor(Point: gp_Pnt2d)
  Point(): gp_Pnt2d;
  ArcType(): GccInt_IType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Intf_Polygon2d {
  Bounding(): Bnd_Box2d;
  Closed(): Standard_Boolean;
  DeflectionOverEstimation(): Standard_Real;
  NbSegments(): Standard_Integer;
  Segment(theIndex: Standard_Integer, theBegin: gp_Pnt2d, theEnd: gp_Pnt2d): void;
}

export declare class GeomAPI {
  constructor();
  To2d(C: any, P: gp_Pln): any;
  To3d(C: any, P: gp_Pln): any;
}

export declare class GeomAPI_ExtremaCurveCurve {
  Init_1(C1: any, C2: any): void;
  Init_2(C1: any, C2: any, U1min: Standard_Real, U1max: Standard_Real, U2min: Standard_Real, U2max: Standard_Real): void;
  NbExtrema(): Standard_Integer;
  Points(Index: Standard_Integer, P1: gp_Pnt, P2: gp_Pnt): void;
  Parameters(Index: Standard_Integer, U1: Standard_Real, U2: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoints(P1: gp_Pnt, P2: gp_Pnt): void;
  LowerDistanceParameters(U1: Standard_Real, U2: Standard_Real): void;
  LowerDistance(): Standard_Real;
  Extrema(): Extrema_ExtCC;
  TotalNearestPoints(P1: gp_Pnt, P2: gp_Pnt): Standard_Boolean;
  TotalLowerDistanceParameters(U1: Standard_Real, U2: Standard_Real): Standard_Boolean;
  TotalLowerDistance(): Standard_Real;
}

  export declare class GeomAPI_ExtremaCurveCurve_1 extends GeomAPI_ExtremaCurveCurve {
    constructor();
  }

  export declare class GeomAPI_ExtremaCurveCurve_2 extends GeomAPI_ExtremaCurveCurve {
    constructor(C1: any, C2: any);
  }

  export declare class GeomAPI_ExtremaCurveCurve_3 extends GeomAPI_ExtremaCurveCurve {
    constructor(C1: any, C2: any, U1min: Standard_Real, U1max: Standard_Real, U2min: Standard_Real, U2max: Standard_Real);
  }

export declare class GeomAPI_ExtremaCurveSurface {
  Init_1(Curve: any, Surface: any): void;
  Init_2(Curve: any, Surface: any, Wmin: Standard_Real, Wmax: Standard_Real, Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real): void;
  NbExtrema(): Standard_Integer;
  Points(Index: Standard_Integer, P1: gp_Pnt, P2: gp_Pnt): void;
  Parameters(Index: Standard_Integer, W: Standard_Real, U: Standard_Real, V: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoints(PC: gp_Pnt, PS: gp_Pnt): void;
  LowerDistanceParameters(W: Standard_Real, U: Standard_Real, V: Standard_Real): void;
  LowerDistance(): Standard_Real;
  Extrema(): Extrema_ExtCS;
}

  export declare class GeomAPI_ExtremaCurveSurface_1 extends GeomAPI_ExtremaCurveSurface {
    constructor();
  }

  export declare class GeomAPI_ExtremaCurveSurface_2 extends GeomAPI_ExtremaCurveSurface {
    constructor(Curve: any, Surface: any);
  }

  export declare class GeomAPI_ExtremaCurveSurface_3 extends GeomAPI_ExtremaCurveSurface {
    constructor(Curve: any, Surface: any, Wmin: Standard_Real, Wmax: Standard_Real, Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real);
  }

export declare class GeomAPI_ExtremaSurfaceSurface {
  Init_1(S1: any, S2: any): void;
  Init_2(S1: any, S2: any, U1min: Standard_Real, U1max: Standard_Real, V1min: Standard_Real, V1max: Standard_Real, U2min: Standard_Real, U2max: Standard_Real, V2min: Standard_Real, V2max: Standard_Real): void;
  NbExtrema(): Standard_Integer;
  Points(Index: Standard_Integer, P1: gp_Pnt, P2: gp_Pnt): void;
  Parameters(Index: Standard_Integer, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoints(P1: gp_Pnt, P2: gp_Pnt): void;
  LowerDistanceParameters(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  LowerDistance(): Standard_Real;
  Extrema(): Extrema_ExtSS;
}

  export declare class GeomAPI_ExtremaSurfaceSurface_1 extends GeomAPI_ExtremaSurfaceSurface {
    constructor();
  }

  export declare class GeomAPI_ExtremaSurfaceSurface_2 extends GeomAPI_ExtremaSurfaceSurface {
    constructor(S1: any, S2: any);
  }

  export declare class GeomAPI_ExtremaSurfaceSurface_3 extends GeomAPI_ExtremaSurfaceSurface {
    constructor(S1: any, S2: any, U1min: Standard_Real, U1max: Standard_Real, V1min: Standard_Real, V1max: Standard_Real, U2min: Standard_Real, U2max: Standard_Real, V2min: Standard_Real, V2max: Standard_Real);
  }

export declare class GeomAPI_IntCS {
  Perform(C: any, S: any): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt;
  Parameters_1(Index: Standard_Integer, U: Standard_Real, V: Standard_Real, W: Standard_Real): void;
  NbSegments(): Standard_Integer;
  Segment(Index: Standard_Integer): any;
  Parameters_2(Index: Standard_Integer, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
}

  export declare class GeomAPI_IntCS_1 extends GeomAPI_IntCS {
    constructor();
  }

  export declare class GeomAPI_IntCS_2 extends GeomAPI_IntCS {
    constructor(C: any, S: any);
  }

export declare class IntPatch_Point {
  constructor()
  SetValue_1(Pt: gp_Pnt, Tol: Standard_Real, Tangent: Standard_Boolean): void;
  SetValue_2(Pt: gp_Pnt): void;
  SetValue_3(thePOn2S: IntSurf_PntOn2S): void;
  SetTolerance(Tol: Standard_Real): void;
  SetParameters(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  SetParameter(Para: Standard_Real): void;
  SetVertex(OnFirst: Standard_Boolean, V: any): void;
  SetArc(OnFirst: Standard_Boolean, A: any, Param: Standard_Real, TLine: IntSurf_Transition, TArc: IntSurf_Transition): void;
  SetMultiple(IsMult: Standard_Boolean): void;
  Value(): gp_Pnt;
  ParameterOnLine(): Standard_Real;
  Tolerance(): Standard_Real;
  IsTangencyPoint(): Standard_Boolean;
  ParametersOnS1(U1: Standard_Real, V1: Standard_Real): void;
  ParametersOnS2(U2: Standard_Real, V2: Standard_Real): void;
  IsMultiple(): Standard_Boolean;
  IsOnDomS1(): Standard_Boolean;
  IsVertexOnS1(): Standard_Boolean;
  VertexOnS1(): any;
  ArcOnS1(): any;
  TransitionLineArc1(): IntSurf_Transition;
  TransitionOnS1(): IntSurf_Transition;
  ParameterOnArc1(): Standard_Real;
  IsOnDomS2(): Standard_Boolean;
  IsVertexOnS2(): Standard_Boolean;
  VertexOnS2(): any;
  ArcOnS2(): any;
  TransitionLineArc2(): IntSurf_Transition;
  TransitionOnS2(): IntSurf_Transition;
  ParameterOnArc2(): Standard_Real;
  PntOn2S(): IntSurf_PntOn2S;
  Parameters(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  ReverseTransition(): void;
  Dump(): void;
}

export declare class IntPatch_Line extends Standard_Transient {
  SetValue(Uiso1: Standard_Boolean, Viso1: Standard_Boolean, Uiso2: Standard_Boolean, Viso2: Standard_Boolean): void;
  ArcType(): IntPatch_IType;
  IsTangent(): Standard_Boolean;
  TransitionOnS1(): IntSurf_TypeTrans;
  TransitionOnS2(): IntSurf_TypeTrans;
  SituationS1(): IntSurf_Situation;
  SituationS2(): IntSurf_Situation;
  IsUIsoOnS1(): Standard_Boolean;
  IsVIsoOnS1(): Standard_Boolean;
  IsUIsoOnS2(): Standard_Boolean;
  IsVIsoOnS2(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IntPatch_Intersection {
  SetTolerances(TolArc: Standard_Real, TolTang: Standard_Real, UVMaxStep: Standard_Real, Fleche: Standard_Real): void;
  Perform_1(S1: any, D1: any, S2: any, D2: any, TolArc: Standard_Real, TolTang: Standard_Real, isGeomInt: Standard_Boolean, theIsReqToKeepRLine: Standard_Boolean, theIsReqToPostWLProc: Standard_Boolean): void;
  Perform_2(S1: any, D1: any, S2: any, D2: any, TolArc: Standard_Real, TolTang: Standard_Real, LOfPnts: IntSurf_ListOfPntOn2S, isGeomInt: Standard_Boolean, theIsReqToKeepRLine: Standard_Boolean, theIsReqToPostWLProc: Standard_Boolean): void;
  Perform_3(S1: any, D1: any, S2: any, D2: any, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TolArc: Standard_Real, TolTang: Standard_Real): void;
  Perform_4(S1: any, D1: any, TolArc: Standard_Real, TolTang: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  TangentFaces(): Standard_Boolean;
  OppositeFaces(): Standard_Boolean;
  NbPnts(): Standard_Integer;
  Point(Index: Standard_Integer): IntPatch_Point;
  NbLines(): Standard_Integer;
  Line(Index: Standard_Integer): any;
  SequenceOfLine(): IntPatch_SequenceOfLine;
  Dump(Mode: Standard_Integer, S1: any, D1: any, S2: any, D2: any): void;
}

  export declare class IntPatch_Intersection_1 extends IntPatch_Intersection {
    constructor();
  }

  export declare class IntPatch_Intersection_2 extends IntPatch_Intersection {
    constructor(S1: any, D1: any, S2: any, D2: any, TolArc: Standard_Real, TolTang: Standard_Real);
  }

  export declare class IntPatch_Intersection_3 extends IntPatch_Intersection {
    constructor(S1: any, D1: any, TolArc: Standard_Real, TolTang: Standard_Real);
  }

export declare class GeomInt_LineConstructor {
  constructor()
  Load(D1: any, D2: any, S1: any, S2: any): void;
  Perform(L: any): void;
  IsDone(): Standard_Boolean;
  NbParts(): Standard_Integer;
  Part(I: Standard_Integer, WFirst: Standard_Real, WLast: Standard_Real): void;
}

export declare class GeomAPI_IntSS {
  Perform(S1: any, S2: any, Tol: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbLines(): Standard_Integer;
  Line(Index: Standard_Integer): any;
}

  export declare class GeomAPI_IntSS_1 extends GeomAPI_IntSS {
    constructor();
  }

  export declare class GeomAPI_IntSS_2 extends GeomAPI_IntSS {
    constructor(S1: any, S2: any, Tol: Standard_Real);
  }

export declare class GeomAPI_PointsToBSpline {
  Init_1(Points: TColgp_Array1OfPnt, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Init_2(Points: TColgp_Array1OfPnt, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Init_3(Points: TColgp_Array1OfPnt, Parameters: TColStd_Array1OfReal, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Init_4(Points: TColgp_Array1OfPnt, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Curve(): any;
  IsDone(): Standard_Boolean;
}

  export declare class GeomAPI_PointsToBSpline_1 extends GeomAPI_PointsToBSpline {
    constructor();
  }

  export declare class GeomAPI_PointsToBSpline_2 extends GeomAPI_PointsToBSpline {
    constructor(Points: TColgp_Array1OfPnt, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSpline_3 extends GeomAPI_PointsToBSpline {
    constructor(Points: TColgp_Array1OfPnt, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSpline_4 extends GeomAPI_PointsToBSpline {
    constructor(Points: TColgp_Array1OfPnt, Parameters: TColStd_Array1OfReal, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSpline_5 extends GeomAPI_PointsToBSpline {
    constructor(Points: TColgp_Array1OfPnt, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

export declare class GeomAPI_PointsToBSplineSurface {
  Init_1(Points: TColgp_Array2OfPnt, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Interpolate_1(Points: TColgp_Array2OfPnt, thePeriodic: Standard_Boolean): void;
  Interpolate_2(Points: TColgp_Array2OfPnt, ParType: Approx_ParametrizationType, thePeriodic: Standard_Boolean): void;
  Init_2(ZPoints: TColStd_Array2OfReal, X0: Standard_Real, dX: Standard_Real, Y0: Standard_Real, dY: Standard_Real, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Interpolate_3(ZPoints: TColStd_Array2OfReal, X0: Standard_Real, dX: Standard_Real, Y0: Standard_Real, dY: Standard_Real): void;
  Init_3(Points: TColgp_Array2OfPnt, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real, thePeriodic: Standard_Boolean): void;
  Init_4(Points: TColgp_Array2OfPnt, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Surface(): any;
  IsDone(): Standard_Boolean;
}

  export declare class GeomAPI_PointsToBSplineSurface_1 extends GeomAPI_PointsToBSplineSurface {
    constructor();
  }

  export declare class GeomAPI_PointsToBSplineSurface_2 extends GeomAPI_PointsToBSplineSurface {
    constructor(Points: TColgp_Array2OfPnt, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSplineSurface_3 extends GeomAPI_PointsToBSplineSurface {
    constructor(Points: TColgp_Array2OfPnt, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSplineSurface_4 extends GeomAPI_PointsToBSplineSurface {
    constructor(Points: TColgp_Array2OfPnt, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSplineSurface_5 extends GeomAPI_PointsToBSplineSurface {
    constructor(ZPoints: TColStd_Array2OfReal, X0: Standard_Real, dX: Standard_Real, Y0: Standard_Real, dY: Standard_Real, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

export declare class GeomAPI_ProjectPointOnCurve {
  Init_1(P: gp_Pnt, Curve: any): void;
  Init_2(P: gp_Pnt, Curve: any, Umin: Standard_Real, Usup: Standard_Real): void;
  Init_3(Curve: any, Umin: Standard_Real, Usup: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt;
  Parameter_1(Index: Standard_Integer): Standard_Real;
  Parameter_2(Index: Standard_Integer, U: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoint(): gp_Pnt;
  LowerDistanceParameter(): Standard_Real;
  LowerDistance(): Standard_Real;
  Extrema(): Extrema_ExtPC;
}

  export declare class GeomAPI_ProjectPointOnCurve_1 extends GeomAPI_ProjectPointOnCurve {
    constructor();
  }

  export declare class GeomAPI_ProjectPointOnCurve_2 extends GeomAPI_ProjectPointOnCurve {
    constructor(P: gp_Pnt, Curve: any);
  }

  export declare class GeomAPI_ProjectPointOnCurve_3 extends GeomAPI_ProjectPointOnCurve {
    constructor(P: gp_Pnt, Curve: any, Umin: Standard_Real, Usup: Standard_Real);
  }

export declare class GeomAPI_ProjectPointOnSurf {
  Init_1(P: gp_Pnt, Surface: any, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_2(P: gp_Pnt, Surface: any, Algo: Extrema_ExtAlgo): void;
  Init_3(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_4(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_5(Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_6(Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Algo: Extrema_ExtAlgo): void;
  SetExtremaAlgo(theAlgo: Extrema_ExtAlgo): void;
  SetExtremaFlag(theExtFlag: Extrema_ExtFlag): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt;
  Parameters(Index: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoint(): gp_Pnt;
  LowerDistanceParameters(U: Standard_Real, V: Standard_Real): void;
  LowerDistance(): Standard_Real;
  Extrema(): Extrema_ExtPS;
}

  export declare class GeomAPI_ProjectPointOnSurf_1 extends GeomAPI_ProjectPointOnSurf {
    constructor();
  }

  export declare class GeomAPI_ProjectPointOnSurf_2 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Algo: Extrema_ExtAlgo);
  }

  export declare class GeomAPI_ProjectPointOnSurf_3 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo);
  }

  export declare class GeomAPI_ProjectPointOnSurf_4 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo);
  }

  export declare class GeomAPI_ProjectPointOnSurf_5 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Algo: Extrema_ExtAlgo);
  }

export declare class GeomFill {
  constructor();
  Surface(Curve1: any, Curve2: any): any;
  GetCircle_1(TConv: Convert_ParameterisationType, ns1: gp_Vec, ns2: gp_Vec, nplan: gp_Vec, pt1: gp_Pnt, pt2: gp_Pnt, Rayon: Standard_Real, Center: gp_Pnt, Poles: TColgp_Array1OfPnt, Weigths: TColStd_Array1OfReal): void;
  GetCircle_2(TConv: Convert_ParameterisationType, ns1: gp_Vec, ns2: gp_Vec, dn1w: gp_Vec, dn2w: gp_Vec, nplan: gp_Vec, dnplan: gp_Vec, pts1: gp_Pnt, pts2: gp_Pnt, tang1: gp_Vec, tang2: gp_Vec, Rayon: Standard_Real, DRayon: Standard_Real, Center: gp_Pnt, DCenter: gp_Vec, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  GetCircle_3(TConv: Convert_ParameterisationType, ns1: gp_Vec, ns2: gp_Vec, dn1w: gp_Vec, dn2w: gp_Vec, d2n1w: gp_Vec, d2n2w: gp_Vec, nplan: gp_Vec, dnplan: gp_Vec, d2nplan: gp_Vec, pts1: gp_Pnt, pts2: gp_Pnt, tang1: gp_Vec, tang2: gp_Vec, Dtang1: gp_Vec, Dtang2: gp_Vec, Rayon: Standard_Real, DRayon: Standard_Real, D2Rayon: Standard_Real, Center: gp_Pnt, DCenter: gp_Vec, D2Center: gp_Vec, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  GetShape(MaxAng: Standard_Real, NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, TypeConv: Convert_ParameterisationType): void;
  Knots(TypeConv: Convert_ParameterisationType, TKnots: TColStd_Array1OfReal): void;
  Mults(TypeConv: Convert_ParameterisationType, TMults: TColStd_Array1OfInteger): void;
  GetMinimalWeights(TConv: Convert_ParameterisationType, AngleMin: Standard_Real, AngleMax: Standard_Real, Weigths: TColStd_Array1OfReal): void;
  GetTolerance(TConv: Convert_ParameterisationType, AngleMin: Standard_Real, Radius: Standard_Real, AngularTol: Standard_Real, SpatialTol: Standard_Real): Standard_Real;
}

export declare class GeomFill_AppSurf extends AppBlend_Approx {
  Init(Degmin: Standard_Integer, Degmax: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIt: Standard_Integer, KnownParameters: Standard_Boolean): void;
  SetParType(ParType: Approx_ParametrizationType): void;
  SetContinuity(C: GeomAbs_Shape): void;
  SetCriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  ParType(): Approx_ParametrizationType;
  Continuity(): GeomAbs_Shape;
  CriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  Perform_1(Lin: any, SecGen: GeomFill_SectionGenerator, SpApprox: Standard_Boolean): void;
  PerformSmoothing(Lin: any, SecGen: GeomFill_SectionGenerator): void;
  Perform_2(Lin: any, SecGen: GeomFill_SectionGenerator, NbMaxP: Standard_Integer): void;
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

  export declare class GeomFill_AppSurf_1 extends GeomFill_AppSurf {
    constructor();
  }

  export declare class GeomFill_AppSurf_2 extends GeomFill_AppSurf {
    constructor(Degmin: Standard_Integer, Degmax: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIt: Standard_Integer, KnownParameters: Standard_Boolean);
  }

export declare class GeomFill_AppSweep extends AppBlend_Approx {
  Init(Degmin: Standard_Integer, Degmax: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIt: Standard_Integer, KnownParameters: Standard_Boolean): void;
  SetParType(ParType: Approx_ParametrizationType): void;
  SetContinuity(C: GeomAbs_Shape): void;
  SetCriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  ParType(): Approx_ParametrizationType;
  Continuity(): GeomAbs_Shape;
  CriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  Perform_1(Lin: any, SecGen: GeomFill_SweepSectionGenerator, SpApprox: Standard_Boolean): void;
  PerformSmoothing(Lin: any, SecGen: GeomFill_SweepSectionGenerator): void;
  Perform_2(Lin: any, SecGen: GeomFill_SweepSectionGenerator, NbMaxP: Standard_Integer): void;
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

  export declare class GeomFill_AppSweep_1 extends GeomFill_AppSweep {
    constructor();
  }

  export declare class GeomFill_AppSweep_2 extends GeomFill_AppSweep {
    constructor(Degmin: Standard_Integer, Degmax: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIt: Standard_Integer, KnownParameters: Standard_Boolean);
  }

export declare class GeomFill_BSplineCurves {
  Init_1(C1: any, C2: any, C3: any, C4: any, Type: GeomFill_FillingStyle): void;
  Init_2(C1: any, C2: any, C3: any, Type: GeomFill_FillingStyle): void;
  Init_3(C1: any, C2: any, Type: GeomFill_FillingStyle): void;
  Surface(): any;
}

  export declare class GeomFill_BSplineCurves_1 extends GeomFill_BSplineCurves {
    constructor();
  }

  export declare class GeomFill_BSplineCurves_2 extends GeomFill_BSplineCurves {
    constructor(C1: any, C2: any, C3: any, C4: any, Type: GeomFill_FillingStyle);
  }

  export declare class GeomFill_BSplineCurves_3 extends GeomFill_BSplineCurves {
    constructor(C1: any, C2: any, C3: any, Type: GeomFill_FillingStyle);
  }

  export declare class GeomFill_BSplineCurves_4 extends GeomFill_BSplineCurves {
    constructor(C1: any, C2: any, Type: GeomFill_FillingStyle);
  }

export declare class GeomFill_BezierCurves {
  Init_1(C1: any, C2: any, C3: any, C4: any, Type: GeomFill_FillingStyle): void;
  Init_2(C1: any, C2: any, C3: any, Type: GeomFill_FillingStyle): void;
  Init_3(C1: any, C2: any, Type: GeomFill_FillingStyle): void;
  Surface(): any;
}

  export declare class GeomFill_BezierCurves_1 extends GeomFill_BezierCurves {
    constructor();
  }

  export declare class GeomFill_BezierCurves_2 extends GeomFill_BezierCurves {
    constructor(C1: any, C2: any, C3: any, C4: any, Type: GeomFill_FillingStyle);
  }

  export declare class GeomFill_BezierCurves_3 extends GeomFill_BezierCurves {
    constructor(C1: any, C2: any, C3: any, Type: GeomFill_FillingStyle);
  }

  export declare class GeomFill_BezierCurves_4 extends GeomFill_BezierCurves {
    constructor(C1: any, C2: any, Type: GeomFill_FillingStyle);
  }

export declare class GeomFill_CircularBlendFunc extends Approx_SweepFunction {
  constructor(Path: any, Curve1: any, Curve2: any, Radius: Standard_Real, Polynomial: Standard_Boolean)
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
  GetTolerance(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: TColStd_Array1OfReal): void;
  SetTolerance(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  BarycentreOfSurf(): gp_Pnt;
  MaximalSection(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_TrihedronLaw extends Standard_Transient {
  SetCurve(C: any): void;
  Copy(): any;
  ErrorStatus(): GeomFill_PipeError;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_ConstantBiNormal extends GeomFill_TrihedronLaw {
  constructor(BiNormal: gp_Dir)
  Copy(): any;
  SetCurve(C: any): void;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Filling {
  constructor()
  NbUPoles(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  Poles(Poles: TColgp_Array2OfPnt): void;
  isRational(): Standard_Boolean;
  Weights(Weights: TColStd_Array2OfReal): void;
}

export declare class GeomFill_Coons extends GeomFill_Filling {
  Init_1(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt): void;
  Init_2(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal, W3: TColStd_Array1OfReal, W4: TColStd_Array1OfReal): void;
}

  export declare class GeomFill_Coons_1 extends GeomFill_Coons {
    constructor();
  }

  export declare class GeomFill_Coons_2 extends GeomFill_Coons {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt);
  }

  export declare class GeomFill_Coons_3 extends GeomFill_Coons {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal, W3: TColStd_Array1OfReal, W4: TColStd_Array1OfReal);
  }

export declare class GeomFill_CoonsAlgPatch extends Standard_Transient {
  constructor(B1: any, B2: any, B3: any, B4: any)
  Func_1(f1: any, f2: any): void;
  SetFunc(f1: any, f2: any): void;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  D1U(U: Standard_Real, V: Standard_Real): gp_Vec;
  D1V(U: Standard_Real, V: Standard_Real): gp_Vec;
  DUV(U: Standard_Real, V: Standard_Real): gp_Vec;
  Corner(I: Standard_Integer): gp_Pnt;
  Bound(I: Standard_Integer): any;
  Func_2(I: Standard_Integer): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_CorrectedFrenet extends GeomFill_TrihedronLaw {
  Copy(): any;
  SetCurve(C: any): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  EvaluateBestMode(): GeomFill_Trihedron;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomFill_CorrectedFrenet_1 extends GeomFill_CorrectedFrenet {
    constructor();
  }

  export declare class GeomFill_CorrectedFrenet_2 extends GeomFill_CorrectedFrenet {
    constructor(ForEvaluation: Standard_Boolean);
  }

export declare class GeomFill_CurveAndTrihedron extends GeomFill_LocationLaw {
  constructor(Trihedron: any)
  SetCurve(C: any): void;
  GetCurve(): any;
  SetTrsf(Transfo: gp_Mat): void;
  Copy(): any;
  D0_1(Param: Standard_Real, M: gp_Mat, V: gp_Vec): Standard_Boolean;
  D0_2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d): Standard_Boolean;
  D1(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  D2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, D2M: gp_Mat, D2V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetDomain(First: Standard_Real, Last: Standard_Real): void;
  GetMaximalNorm(): Standard_Real;
  GetAverageLaw(AM: gp_Mat, AV: gp_Vec): void;
  IsTranslation(Error: Standard_Real): Standard_Boolean;
  IsRotation(Error: Standard_Real): Standard_Boolean;
  Rotation(Center: gp_Pnt): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Curved extends GeomFill_Filling {
  Init_1(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt): void;
  Init_2(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal, W3: TColStd_Array1OfReal, W4: TColStd_Array1OfReal): void;
  Init_3(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt): void;
  Init_4(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal): void;
}

  export declare class GeomFill_Curved_1 extends GeomFill_Curved {
    constructor();
  }

  export declare class GeomFill_Curved_2 extends GeomFill_Curved {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt);
  }

  export declare class GeomFill_Curved_3 extends GeomFill_Curved {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal, W3: TColStd_Array1OfReal, W4: TColStd_Array1OfReal);
  }

  export declare class GeomFill_Curved_4 extends GeomFill_Curved {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt);
  }

  export declare class GeomFill_Curved_5 extends GeomFill_Curved {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal);
  }

export declare class GeomFill_Darboux extends GeomFill_TrihedronLaw {
  constructor()
  Copy(): any;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_DegeneratedBound extends GeomFill_Boundary {
  constructor(Point: gp_Pnt, First: Standard_Real, Last: Standard_Real, Tol3d: Standard_Real, Tolang: Standard_Real)
  Value(U: Standard_Real): gp_Pnt;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  Reparametrize(First: Standard_Real, Last: Standard_Real, HasDF: Standard_Boolean, HasDL: Standard_Boolean, DF: Standard_Real, DL: Standard_Real, Rev: Standard_Boolean): void;
  Bounds(First: Standard_Real, Last: Standard_Real): void;
  IsDegenerated(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_DiscreteTrihedron extends GeomFill_TrihedronLaw {
  constructor()
  Copy(): any;
  Init(): void;
  SetCurve(C: any): void;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_DraftTrihedron extends GeomFill_TrihedronLaw {
  constructor(BiNormal: gp_Vec, Angle: Standard_Real)
  SetAngle(Angle: Standard_Real): void;
  Copy(): any;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_EvolvedSection extends GeomFill_SectionLaw {
  constructor(C: any, L: any)
  D0(Param: Standard_Real, Poles: TColgp_Array1OfPnt, Weigths: TColStd_Array1OfReal): Standard_Boolean;
  D1(Param: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  D2(Param: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  BSplineSurface(): any;
  SectionShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  IsRational(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetDomain(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: TColStd_Array1OfReal): void;
  BarycentreOfSurf(): gp_Pnt;
  MaximalSection(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  IsConstant(Error: Standard_Real): Standard_Boolean;
  ConstantSection(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Fixed extends GeomFill_TrihedronLaw {
  constructor(Tangent: gp_Vec, Normal: gp_Vec)
  Copy(): any;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Frenet extends GeomFill_TrihedronLaw {
  constructor()
  Copy(): any;
  Init(): void;
  SetCurve(C: any): void;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_FunctionDraft extends math_FunctionSetWithDerivatives {
  constructor(S: any, C: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  DerivT(C: any, Param: Standard_Real, W: Standard_Real, dN: gp_Vec, teta: Standard_Real, F: math_Vector): Standard_Boolean;
  Deriv2T(C: any, Param: Standard_Real, W: Standard_Real, d2N: gp_Vec, teta: Standard_Real, F: math_Vector): Standard_Boolean;
  DerivTX(dN: gp_Vec, teta: Standard_Real, D: math_Matrix): Standard_Boolean;
  Deriv2X(X: math_Vector, T: GeomFill_Tensor): Standard_Boolean;
}

export declare class GeomFill_Profiler {
  constructor()
  AddCurve(Curve: any): void;
  Perform(PTol: Standard_Real): void;
  Degree(): Standard_Integer;
  IsPeriodic(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  Poles(Index: Standard_Integer, Poles: TColgp_Array1OfPnt): void;
  Weights(Index: Standard_Integer, Weights: TColStd_Array1OfReal): void;
  NbKnots(): Standard_Integer;
  KnotsAndMults(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger): void;
  Curve(Index: Standard_Integer): any;
}

export declare class GeomFill_Generator extends GeomFill_Profiler {
  constructor()
  Perform(PTol: Standard_Real): void;
  Surface(): any;
}

export declare class GeomFill_TrihedronWithGuide extends GeomFill_TrihedronLaw {
  Guide(): any;
  Origine(Param1: Standard_Real, Param2: Standard_Real): void;
  CurrentPointOnGuide(): gp_Pnt;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_GuideTrihedronAC extends GeomFill_TrihedronWithGuide {
  constructor(guide: any)
  SetCurve(C: any): void;
  Copy(): any;
  Guide(): any;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  Origine(OrACR1: Standard_Real, OrACR2: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_GuideTrihedronPlan extends GeomFill_TrihedronWithGuide {
  constructor(theGuide: any)
  SetCurve(thePath: any): void;
  Copy(): any;
  ErrorStatus(): GeomFill_PipeError;
  Guide(): any;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  Origine(OrACR1: Standard_Real, OrACR2: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Line extends Standard_Transient {
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class GeomFill_Line_1 extends GeomFill_Line {
    constructor();
  }

  export declare class GeomFill_Line_2 extends GeomFill_Line {
    constructor(NbPoints: Standard_Integer);
  }

export declare class GeomFill_LocFunction {
  constructor(Law: any)
  D0(Param: Standard_Real, First: Standard_Real, Last: Standard_Real): Standard_Boolean;
  D1(Param: Standard_Real, First: Standard_Real, Last: Standard_Real): Standard_Boolean;
  D2(Param: Standard_Real, First: Standard_Real, Last: Standard_Real): Standard_Boolean;
  DN(Param: Standard_Real, First: Standard_Real, Last: Standard_Real, Order: Standard_Integer, Result: Standard_Real, Ier: Standard_Integer): void;
}

export declare class GeomFill_LocationDraft extends GeomFill_LocationLaw {
  constructor(Direction: gp_Dir, Angle: Standard_Real)
  SetStopSurf(Surf: any): void;
  SetAngle(Angle: Standard_Real): void;
  SetCurve(C: any): void;
  GetCurve(): any;
  SetTrsf(Transfo: gp_Mat): void;
  Copy(): any;
  D0_1(Param: Standard_Real, M: gp_Mat, V: gp_Vec): Standard_Boolean;
  D0_2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d): Standard_Boolean;
  D1(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  D2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, D2M: gp_Mat, D2V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  HasFirstRestriction(): Standard_Boolean;
  HasLastRestriction(): Standard_Boolean;
  TraceNumber(): Standard_Integer;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetDomain(First: Standard_Real, Last: Standard_Real): void;
  Resolution(Index: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  GetMaximalNorm(): Standard_Real;
  GetAverageLaw(AM: gp_Mat, AV: gp_Vec): void;
  IsTranslation(Error: Standard_Real): Standard_Boolean;
  IsRotation(Error: Standard_Real): Standard_Boolean;
  Rotation(Center: gp_Pnt): void;
  IsIntersec(): Standard_Boolean;
  Direction(): gp_Dir;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_LocationGuide extends GeomFill_LocationLaw {
  constructor(Triedre: any)
  Set(Section: any, rotat: Standard_Boolean, SFirst: Standard_Real, SLast: Standard_Real, PrecAngle: Standard_Real, LastAngle: Standard_Real): void;
  EraseRotation(): void;
  SetCurve(C: any): void;
  GetCurve(): any;
  SetTrsf(Transfo: gp_Mat): void;
  Copy(): any;
  D0_1(Param: Standard_Real, M: gp_Mat, V: gp_Vec): Standard_Boolean;
  D0_2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d): Standard_Boolean;
  D1(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  D2(Param: Standard_Real, M: gp_Mat, V: gp_Vec, DM: gp_Mat, DV: gp_Vec, D2M: gp_Mat, D2V: gp_Vec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d): Standard_Boolean;
  HasFirstRestriction(): Standard_Boolean;
  HasLastRestriction(): Standard_Boolean;
  TraceNumber(): Standard_Integer;
  ErrorStatus(): GeomFill_PipeError;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetDomain(First: Standard_Real, Last: Standard_Real): void;
  SetTolerance(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  Resolution(Index: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  GetMaximalNorm(): Standard_Real;
  GetAverageLaw(AM: gp_Mat, AV: gp_Vec): void;
  IsTranslation(Error: Standard_Real): Standard_Boolean;
  IsRotation(Error: Standard_Real): Standard_Boolean;
  Rotation(Center: gp_Pnt): void;
  Section(): any;
  Guide(): any;
  SetOrigine(Param1: Standard_Real, Param2: Standard_Real): void;
  ComputeAutomaticLaw(ParAndRad: any): GeomFill_PipeError;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Pipe {
  Init_1(Path: any, Radius: Standard_Real): void;
  Init_2(Path: any, FirstSect: any, Option: GeomFill_Trihedron): void;
  Init_3(Path: any, Support: any, FirstSect: any): void;
  Init_4(Path: any, FirstSect: any, Dir: gp_Dir): void;
  Init_5(Path: any, FirstSect: any, LastSect: any): void;
  Init_6(Path: any, NSections: TColGeom_SequenceOfCurve): void;
  Init_7(Path: any, Curve1: any, Curve2: any, Radius: Standard_Real): void;
  Init_8(Path: any, Guide: any, FirstSect: any, ByACR: Standard_Boolean, rotat: Standard_Boolean): void;
  Perform_1(WithParameters: Standard_Boolean, myPolynomial: Standard_Boolean): void;
  Perform_2(Tol: Standard_Real, Polynomial: Standard_Boolean, Conti: GeomAbs_Shape, MaxDegree: Standard_Integer, NbMaxSegment: Standard_Integer): void;
  Surface(): any;
  ExchangeUV(): Standard_Boolean;
  GenerateParticularCase_1(B: Standard_Boolean): void;
  GenerateParticularCase_2(): Standard_Boolean;
  ErrorOnSurf(): Standard_Real;
  IsDone(): Standard_Boolean;
}

  export declare class GeomFill_Pipe_1 extends GeomFill_Pipe {
    constructor();
  }

  export declare class GeomFill_Pipe_2 extends GeomFill_Pipe {
    constructor(Path: any, Radius: Standard_Real);
  }

  export declare class GeomFill_Pipe_3 extends GeomFill_Pipe {
    constructor(Path: any, FirstSect: any, Option: GeomFill_Trihedron);
  }

  export declare class GeomFill_Pipe_4 extends GeomFill_Pipe {
    constructor(Path: any, Support: any, FirstSect: any);
  }

  export declare class GeomFill_Pipe_5 extends GeomFill_Pipe {
    constructor(Path: any, FirstSect: any, Dir: gp_Dir);
  }

  export declare class GeomFill_Pipe_6 extends GeomFill_Pipe {
    constructor(Path: any, FirstSect: any, LastSect: any);
  }

  export declare class GeomFill_Pipe_7 extends GeomFill_Pipe {
    constructor(Path: any, NSections: TColGeom_SequenceOfCurve);
  }

  export declare class GeomFill_Pipe_8 extends GeomFill_Pipe {
    constructor(Path: any, Curve1: any, Curve2: any, Radius: Standard_Real);
  }

  export declare class GeomFill_Pipe_9 extends GeomFill_Pipe {
    constructor(Path: any, Curve1: any, Curve2: any, Radius: Standard_Real);
  }

  export declare class GeomFill_Pipe_10 extends GeomFill_Pipe {
    constructor(Path: any, Guide: any, FirstSect: any, ByACR: Standard_Boolean, rotat: Standard_Boolean);
  }

export declare class GeomFill_PlanFunc extends math_FunctionWithDerivative {
  constructor(P: gp_Pnt, V: gp_Vec, C: any)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
  D2(X: Standard_Real, F: Standard_Real, D1: Standard_Real, D2: Standard_Real): void;
  DEDT(X: Standard_Real, DP: gp_Vec, DV: gp_Vec, DF: Standard_Real): void;
  D2E(X: Standard_Real, DP: gp_Vec, D2P: gp_Vec, DV: gp_Vec, D2V: gp_Vec, DFDT: Standard_Real, D2FDT2: Standard_Real, D2FDTDX: Standard_Real): void;
}

export declare class GeomFill_PolynomialConvertor {
  constructor()
  Initialized(): Standard_Boolean;
  Init(): void;
  Section_1(FirstPnt: gp_Pnt, Center: gp_Pnt, Dir: gp_Vec, Angle: Standard_Real, Poles: TColgp_Array1OfPnt): void;
  Section_2(FirstPnt: gp_Pnt, DFirstPnt: gp_Vec, Center: gp_Pnt, DCenter: gp_Vec, Dir: gp_Vec, DDir: gp_Vec, Angle: Standard_Real, DAngle: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec): void;
  Section_3(FirstPnt: gp_Pnt, DFirstPnt: gp_Vec, D2FirstPnt: gp_Vec, Center: gp_Pnt, DCenter: gp_Vec, D2Center: gp_Vec, Dir: gp_Vec, DDir: gp_Vec, D2Dir: gp_Vec, Angle: Standard_Real, DAngle: Standard_Real, D2Angle: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec): void;
}

export declare class GeomFill_QuasiAngularConvertor {
  constructor()
  Initialized(): Standard_Boolean;
  Init(): void;
  Section_1(FirstPnt: gp_Pnt, Center: gp_Pnt, Dir: gp_Vec, Angle: Standard_Real, Poles: TColgp_Array1OfPnt, Weights: TColStd_Array1OfReal): void;
  Section_2(FirstPnt: gp_Pnt, DFirstPnt: gp_Vec, Center: gp_Pnt, DCenter: gp_Vec, Dir: gp_Vec, DDir: gp_Vec, Angle: Standard_Real, DAngle: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Weights: TColStd_Array1OfReal, DWeights: TColStd_Array1OfReal): void;
  Section_3(FirstPnt: gp_Pnt, DFirstPnt: gp_Vec, D2FirstPnt: gp_Vec, Center: gp_Pnt, DCenter: gp_Vec, D2Center: gp_Vec, Dir: gp_Vec, DDir: gp_Vec, D2Dir: gp_Vec, Angle: Standard_Real, DAngle: Standard_Real, D2Angle: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Weights: TColStd_Array1OfReal, DWeights: TColStd_Array1OfReal, D2Weights: TColStd_Array1OfReal): void;
}

export declare class GeomFill_SectionGenerator extends GeomFill_Profiler {
  constructor()
  SetParam(Params: any): void;
  GetShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer, NbPoles2d: Standard_Integer): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  Section_1(P: Standard_Integer, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  Section_2(P: Standard_Integer, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): void;
  Parameter(P: Standard_Integer): Standard_Real;
}

export declare class GeomFill_SectionPlacement {
  constructor(L: any, Section: any)
  SetLocation(L: any): void;
  Perform_1(Tol: Standard_Real): void;
  Perform_2(Path: any, Tol: Standard_Real): void;
  Perform_3(ParamOnPath: Standard_Real, Tol: Standard_Real): void;
  IsDone(): Standard_Boolean;
  ParameterOnPath(): Standard_Real;
  ParameterOnSection(): Standard_Real;
  Distance(): Standard_Real;
  Angle(): Standard_Real;
  Transformation(WithTranslation: Standard_Boolean, WithCorrection: Standard_Boolean): gp_Trsf;
  Section(WithTranslation: Standard_Boolean): any;
  ModifiedSection(WithTranslation: Standard_Boolean): any;
}

export declare class GeomFill_SnglrFunc extends Adaptor3d_Curve {
  constructor(HC: any)
  SetRatio(Ratio: Standard_Real): void;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Value(U: Standard_Real): gp_Pnt;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
}

export declare class GeomFill_Stretch extends GeomFill_Filling {
  Init_1(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt): void;
  Init_2(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal, W3: TColStd_Array1OfReal, W4: TColStd_Array1OfReal): void;
}

  export declare class GeomFill_Stretch_1 extends GeomFill_Stretch {
    constructor();
  }

  export declare class GeomFill_Stretch_2 extends GeomFill_Stretch {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt);
  }

  export declare class GeomFill_Stretch_3 extends GeomFill_Stretch {
    constructor(P1: TColgp_Array1OfPnt, P2: TColgp_Array1OfPnt, P3: TColgp_Array1OfPnt, P4: TColgp_Array1OfPnt, W1: TColStd_Array1OfReal, W2: TColStd_Array1OfReal, W3: TColStd_Array1OfReal, W4: TColStd_Array1OfReal);
  }

export declare class GeomFill_Sweep {
  constructor(Location: any, WithKpart: Standard_Boolean)
  SetDomain(First: Standard_Real, Last: Standard_Real, SectionFirst: Standard_Real, SectionLast: Standard_Real): void;
  SetTolerance(Tol3d: Standard_Real, BoundTol: Standard_Real, Tol2d: Standard_Real, TolAngular: Standard_Real): void;
  SetForceApproxC1(ForceApproxC1: Standard_Boolean): void;
  ExchangeUV(): Standard_Boolean;
  UReversed(): Standard_Boolean;
  VReversed(): Standard_Boolean;
  Build(Section: any, Methode: GeomFill_ApproxStyle, Continuity: GeomAbs_Shape, Degmax: Standard_Integer, Segmax: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  ErrorOnSurface(): Standard_Real;
  ErrorOnRestriction(IsFirst: Standard_Boolean, UError: Standard_Real, VError: Standard_Real): void;
  ErrorOnTrace(IndexOfTrace: Standard_Integer, UError: Standard_Real, VError: Standard_Real): void;
  Surface(): any;
  Restriction(IsFirst: Standard_Boolean): any;
  NumberOfTrace(): Standard_Integer;
  Trace(IndexOfTrace: Standard_Integer): any;
}

export declare class GeomFill_SweepFunction extends Approx_SweepFunction {
  constructor(Section: any, Location: any, FirstParameter: Standard_Real, FirstParameterOnS: Standard_Real, RatioParameterOnS: Standard_Real)
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
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_Tensor {
  constructor(NbRow: Standard_Integer, NbCol: Standard_Integer, NbMat: Standard_Integer)
  Init(InitialValue: Standard_Real): void;
  Value(Row: Standard_Integer, Col: Standard_Integer, Mat: Standard_Integer): Standard_Real;
  ChangeValue(Row: Standard_Integer, Col: Standard_Integer, Mat: Standard_Integer): Standard_Real;
  Multiply(Right: math_Vector, Product: math_Matrix): void;
}

export declare class GeomFill_TgtField extends Standard_Transient {
  IsScalable(): Standard_Boolean;
  Scale(Func: any): void;
  Value(W: Standard_Real): gp_Vec;
  D1_1(W: Standard_Real): gp_Vec;
  D1_2(W: Standard_Real, V: gp_Vec, DV: gp_Vec): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_TgtOnCoons extends GeomFill_TgtField {
  constructor(K: any, I: Standard_Integer)
  Value(W: Standard_Real): gp_Vec;
  D1_1(W: Standard_Real): gp_Vec;
  D1_2(W: Standard_Real, T: gp_Vec, DT: gp_Vec): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomFill_UniformSection extends GeomFill_SectionLaw {
  constructor(C: any, FirstParameter: Standard_Real, LastParameter: Standard_Real)
  D0(Param: Standard_Real, Poles: TColgp_Array1OfPnt, Weigths: TColStd_Array1OfReal): Standard_Boolean;
  D1(Param: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  D2(Param: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  BSplineSurface(): any;
  SectionShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  IsRational(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetDomain(First: Standard_Real, Last: Standard_Real): void;
  GetTolerance(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: TColStd_Array1OfReal): void;
  BarycentreOfSurf(): gp_Pnt;
  MaximalSection(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  IsConstant(Error: Standard_Real): Standard_Boolean;
  ConstantSection(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class GeomInt {
  constructor();
  AdjustPeriodic(thePar: Standard_Real, theParMin: Standard_Real, theParMax: Standard_Real, thePeriod: Standard_Real, theNewPar: Standard_Real, theOffset: Standard_Real, theEps: Standard_Real): Standard_Boolean;
}

export declare class GeomInt_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfWLApprox extends math_BFGS {
  constructor(F: math_MultipleVarFunctionWithGradient, StartingPoint: math_Vector, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, Eps: Standard_Real, NbIterations: Standard_Integer)
  IsSolutionReached(F: math_MultipleVarFunctionWithGradient): Standard_Boolean;
}

export declare class GeomInt_TheMultiLineOfWLApprox {
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
  MakeMLBetween(Low: Standard_Integer, High: Standard_Integer, NbPointsToInsert: Standard_Integer): GeomInt_TheMultiLineOfWLApprox;
  MakeMLOneMorePoint(Low: Standard_Integer, High: Standard_Integer, indbad: Standard_Integer, OtherLine: GeomInt_TheMultiLineOfWLApprox): Standard_Boolean;
  Dump(): void;
}

  export declare class GeomInt_TheMultiLineOfWLApprox_1 extends GeomInt_TheMultiLineOfWLApprox {
    constructor();
  }

  export declare class GeomInt_TheMultiLineOfWLApprox_2 extends GeomInt_TheMultiLineOfWLApprox {
    constructor(line: any, PtrSvSurfaces: Standard_Address, NbP3d: Standard_Integer, NbP2d: Standard_Integer, ApproxU1V1: Standard_Boolean, ApproxU2V2: Standard_Boolean, xo: Standard_Real, yo: Standard_Real, zo: Standard_Real, u1o: Standard_Real, v1o: Standard_Real, u2o: Standard_Real, v2o: Standard_Real, P2DOnFirst: Standard_Boolean, IndMin: Standard_Integer, IndMax: Standard_Integer);
  }

  export declare class GeomInt_TheMultiLineOfWLApprox_3 extends GeomInt_TheMultiLineOfWLApprox {
    constructor(line: any, NbP3d: Standard_Integer, NbP2d: Standard_Integer, ApproxU1V1: Standard_Boolean, ApproxU2V2: Standard_Boolean, xo: Standard_Real, yo: Standard_Real, zo: Standard_Real, u1o: Standard_Real, v1o: Standard_Real, u2o: Standard_Real, v2o: Standard_Real, P2DOnFirst: Standard_Boolean, IndMin: Standard_Integer, IndMax: Standard_Integer);
  }

export declare class GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox {
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

  export declare class GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_1 extends GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_2 extends GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

  export declare class GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_3 extends GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_4 extends GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

export declare class GeomInt_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfWLApprox extends math_MultipleVarFunctionWithGradient {
  constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, NbPol: Standard_Integer)
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

export declare class GeomInt_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfWLApprox extends math_BFGS {
  constructor(F: math_MultipleVarFunctionWithGradient, StartingPoint: math_Vector, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, Eps: Standard_Real, NbIterations: Standard_Integer)
  IsSolutionReached(F: math_MultipleVarFunctionWithGradient): Standard_Boolean;
}

export declare class GeomInt_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfWLApprox extends math_BFGS {
  constructor(F: math_MultipleVarFunctionWithGradient, StartingPoint: math_Vector, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, Eps: Standard_Real, NbIterations: Standard_Integer)
  IsSolutionReached(F: math_MultipleVarFunctionWithGradient): Standard_Boolean;
}

export declare class GeomInt_LineTool {
  constructor();
  NbVertex(L: any): Standard_Integer;
  Vertex(L: any, I: Standard_Integer): IntPatch_Point;
  FirstParameter(L: any): Standard_Real;
  LastParameter(L: any): Standard_Real;
  DecompositionOfWLine(theWLine: any, theSurface1: any, theSurface2: any, aTolSum: Standard_Real, theLConstructor: GeomInt_LineConstructor, theNewLines: IntPatch_SequenceOfLine): Standard_Boolean;
}

export declare class GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox {
  IsDone(): Standard_Boolean;
  Value(): AppParCurves_MultiBSpCurve;
  Error(Index: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  AverageError(): Standard_Real;
}

  export declare class GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox_1 extends GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer);
  }

  export declare class GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox_2 extends GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer, lambda1: Standard_Real, lambda2: Standard_Real);
  }

export declare class GeomInt_MyGradientOfTheComputeLineBezierOfWLApprox {
  constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer)
  IsDone(): Standard_Boolean;
  Value(): AppParCurves_MultiCurve;
  Error(Index: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  AverageError(): Standard_Real;
}

export declare class GeomInt_MyGradientbisOfTheComputeLineOfWLApprox {
  constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer, Tol3d: Standard_Real, Tol2d: Standard_Real, NbIterations: Standard_Integer)
  IsDone(): Standard_Boolean;
  Value(): AppParCurves_MultiCurve;
  Error(Index: Standard_Integer): Standard_Real;
  MaxError3d(): Standard_Real;
  MaxError2d(): Standard_Real;
  AverageError(): Standard_Real;
}

export declare class GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox {
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

  export declare class GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_1 extends GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_2 extends GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

  export declare class GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_3 extends GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_4 extends GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

export declare class GeomInt_ParFunctionOfMyGradientOfTheComputeLineBezierOfWLApprox extends math_MultipleVarFunctionWithGradient {
  constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer)
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

export declare class GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox {
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

  export declare class GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_1 extends GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_2 extends GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

  export declare class GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_3 extends GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Parameters: math_Vector, NbPol: Standard_Integer);
  }

  export declare class GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_4 extends GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox {
    constructor(SSP: GeomInt_TheMultiLineOfWLApprox, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, NbPol: Standard_Integer);
  }

export declare class GeomInt_ParFunctionOfMyGradientbisOfTheComputeLineOfWLApprox extends math_MultipleVarFunctionWithGradient {
  constructor(SSP: GeomInt_TheMultiLineOfWLApprox, FirstPoint: Standard_Integer, LastPoint: Standard_Integer, TheConstraints: any, Parameters: math_Vector, Deg: Standard_Integer)
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

export declare class GeomInt_ParameterAndOrientation {
  SetOrientation1(Or: TopAbs_Orientation): void;
  SetOrientation2(Or: TopAbs_Orientation): void;
  Parameter(): Standard_Real;
  Orientation1(): TopAbs_Orientation;
  Orientation2(): TopAbs_Orientation;
}

  export declare class GeomInt_ParameterAndOrientation_1 extends GeomInt_ParameterAndOrientation {
    constructor();
  }

  export declare class GeomInt_ParameterAndOrientation_2 extends GeomInt_ParameterAndOrientation {
    constructor(P: Standard_Real, Or1: TopAbs_Orientation, Or2: TopAbs_Orientation);
  }

export declare class GeomInt_TheComputeLineBezierOfWLApprox {
  Init(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean): void;
  Perform(Line: GeomInt_TheMultiLineOfWLApprox): void;
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

  export declare class GeomInt_TheComputeLineBezierOfWLApprox_1 extends GeomInt_TheComputeLineBezierOfWLApprox {
    constructor(Line: GeomInt_TheMultiLineOfWLApprox, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

  export declare class GeomInt_TheComputeLineBezierOfWLApprox_2 extends GeomInt_TheComputeLineBezierOfWLApprox {
    constructor(Line: GeomInt_TheMultiLineOfWLApprox, Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class GeomInt_TheComputeLineBezierOfWLApprox_3 extends GeomInt_TheComputeLineBezierOfWLApprox {
    constructor(Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class GeomInt_TheComputeLineBezierOfWLApprox_4 extends GeomInt_TheComputeLineBezierOfWLApprox {
    constructor(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

export declare class GeomInt_TheComputeLineOfWLApprox {
  Interpol(Line: GeomInt_TheMultiLineOfWLApprox): void;
  Init(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean): void;
  Perform(Line: GeomInt_TheMultiLineOfWLApprox): void;
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

  export declare class GeomInt_TheComputeLineOfWLApprox_1 extends GeomInt_TheComputeLineOfWLApprox {
    constructor(Line: GeomInt_TheMultiLineOfWLApprox, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

  export declare class GeomInt_TheComputeLineOfWLApprox_2 extends GeomInt_TheComputeLineOfWLApprox {
    constructor(Line: GeomInt_TheMultiLineOfWLApprox, Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class GeomInt_TheComputeLineOfWLApprox_3 extends GeomInt_TheComputeLineOfWLApprox {
    constructor(Parameters: math_Vector, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, Squares: Standard_Boolean);
  }

  export declare class GeomInt_TheComputeLineOfWLApprox_4 extends GeomInt_TheComputeLineOfWLApprox {
    constructor(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, NbIterations: Standard_Integer, cutting: Standard_Boolean, parametrization: Approx_ParametrizationType, Squares: Standard_Boolean);
  }

export declare class GeomInt_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfWLApprox extends math_FunctionSetWithDerivatives {
  constructor(S1: any, S2: any)
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
  AuxillarSurface1(): any;
  AuxillarSurface2(): any;
}

export declare class GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox extends math_FunctionSetWithDerivatives {
  Set_1(PS: any): void;
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
  PSurface(): any;
  ISurface(): IntSurf_Quadric;
}

  export declare class GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_1 extends GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox {
    constructor();
  }

  export declare class GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_2 extends GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox {
    constructor(PS: any, IS: IntSurf_Quadric);
  }

  export declare class GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_3 extends GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox {
    constructor(IS: IntSurf_Quadric);
  }

export declare class GeomInt_TheImpPrmSvSurfacesOfWLApprox extends ApproxInt_SvSurfaces {
  Compute(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Pt: gp_Pnt, Tg: gp_Vec, Tguv1: gp_Vec2d, Tguv2: gp_Vec2d): Standard_Boolean;
  Pnt(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, P: gp_Pnt): void;
  SeekPoint(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Point: IntSurf_PntOn2S): Standard_Boolean;
  Tangency(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec): Standard_Boolean;
  TangencyOnSurf1(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
  TangencyOnSurf2(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
  FillInitialVectorOfSolution(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, binfu: Standard_Real, bsupu: Standard_Real, binfv: Standard_Real, bsupv: Standard_Real, X: math_Vector, TranslationU: Standard_Real, TranslationV: Standard_Real): Standard_Boolean;
}

  export declare class GeomInt_TheImpPrmSvSurfacesOfWLApprox_1 extends GeomInt_TheImpPrmSvSurfacesOfWLApprox {
    constructor(Surf1: any, Surf2: IntSurf_Quadric);
  }

  export declare class GeomInt_TheImpPrmSvSurfacesOfWLApprox_2 extends GeomInt_TheImpPrmSvSurfacesOfWLApprox {
    constructor(Surf1: IntSurf_Quadric, Surf2: any);
  }

export declare class GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox {
  Perform_1(Param: TColStd_Array1OfReal, Rsnld: math_FunctionSetRoot): IntImp_ConstIsoparametric;
  Perform_2(Param: TColStd_Array1OfReal, Rsnld: math_FunctionSetRoot, ChoixIso: IntImp_ConstIsoparametric): IntImp_ConstIsoparametric;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  Point(): IntSurf_PntOn2S;
  IsTangent(): Standard_Boolean;
  Direction(): gp_Dir;
  DirectionOnS1(): gp_Dir2d;
  DirectionOnS2(): gp_Dir2d;
  Function(): GeomInt_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfWLApprox;
  ChangePoint(): IntSurf_PntOn2S;
}

  export declare class GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox_1 extends GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox {
    constructor(Param: TColStd_Array1OfReal, S1: any, S2: any, TolTangency: Standard_Real);
  }

  export declare class GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox_2 extends GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox {
    constructor(S1: any, S2: any, TolTangency: Standard_Real);
  }

export declare class GeomInt_TheMultiLineToolOfWLApprox {
  constructor();
  FirstPoint(ML: GeomInt_TheMultiLineOfWLApprox): Standard_Integer;
  LastPoint(ML: GeomInt_TheMultiLineOfWLApprox): Standard_Integer;
  NbP2d(ML: GeomInt_TheMultiLineOfWLApprox): Standard_Integer;
  NbP3d(ML: GeomInt_TheMultiLineOfWLApprox): Standard_Integer;
  Value_1(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabPt: TColgp_Array1OfPnt): void;
  Value_2(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabPt2d: TColgp_Array1OfPnt2d): void;
  Value_3(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabPt: TColgp_Array1OfPnt, tabPt2d: TColgp_Array1OfPnt2d): void;
  Tangency_1(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec): Standard_Boolean;
  Tangency_2(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Tangency_3(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Curvature_1(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec): Standard_Boolean;
  Curvature_2(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  Curvature_3(ML: GeomInt_TheMultiLineOfWLApprox, MPointIndex: Standard_Integer, tabV: TColgp_Array1OfVec, tabV2d: TColgp_Array1OfVec2d): Standard_Boolean;
  MakeMLBetween(ML: GeomInt_TheMultiLineOfWLApprox, I1: Standard_Integer, I2: Standard_Integer, NbPMin: Standard_Integer): GeomInt_TheMultiLineOfWLApprox;
  MakeMLOneMorePoint(ML: GeomInt_TheMultiLineOfWLApprox, I1: Standard_Integer, I2: Standard_Integer, indbad: Standard_Integer, OtherLine: GeomInt_TheMultiLineOfWLApprox): Standard_Boolean;
  WhatStatus(ML: GeomInt_TheMultiLineOfWLApprox, I1: Standard_Integer, I2: Standard_Integer): Approx_Status;
  Dump(ML: GeomInt_TheMultiLineOfWLApprox): void;
}

export declare class GeomInt_ThePrmPrmSvSurfacesOfWLApprox extends ApproxInt_SvSurfaces {
  constructor(Surf1: any, Surf2: any)
  Compute(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Pt: gp_Pnt, Tg: gp_Vec, Tguv1: gp_Vec2d, Tguv2: gp_Vec2d): Standard_Boolean;
  Pnt(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, P: gp_Pnt): void;
  SeekPoint(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Point: IntSurf_PntOn2S): Standard_Boolean;
  Tangency(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec): Standard_Boolean;
  TangencyOnSurf1(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
  TangencyOnSurf2(u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, Tg: gp_Vec2d): Standard_Boolean;
}

export declare class GeomPlate_Aij {
}

  export declare class GeomPlate_Aij_1 extends GeomPlate_Aij {
    constructor();
  }

  export declare class GeomPlate_Aij_2 extends GeomPlate_Aij {
    constructor(anInd1: Standard_Integer, anInd2: Standard_Integer, aVec: gp_Vec);
  }

export declare class GeomPlate_BuildAveragePlane {
  Plane(): any;
  Line(): any;
  IsPlane(): Standard_Boolean;
  IsLine(): Standard_Boolean;
  MinMaxBox(Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real): void;
  HalfSpace(NewNormals: TColgp_SequenceOfVec, Normals: TColgp_SequenceOfVec, Bset: GeomPlate_SequenceOfAij, LinTol: Standard_Real, AngTol: Standard_Real): Standard_Boolean;
}

  export declare class GeomPlate_BuildAveragePlane_1 extends GeomPlate_BuildAveragePlane {
    constructor(Pts: any, NbBoundPoints: Standard_Integer, Tol: Standard_Real, POption: Standard_Integer, NOption: Standard_Integer);
  }

  export declare class GeomPlate_BuildAveragePlane_2 extends GeomPlate_BuildAveragePlane {
    constructor(Normals: TColgp_SequenceOfVec, Pts: any);
  }

export declare class GeomPlate_MakeApprox {
  Surface(): any;
  ApproxError(): Standard_Real;
  CriterionError(): Standard_Real;
}

  export declare class GeomPlate_MakeApprox_1 extends GeomPlate_MakeApprox {
    constructor(SurfPlate: any, PlateCrit: AdvApp2Var_Criterion, Tol3d: Standard_Real, Nbmax: Standard_Integer, dgmax: Standard_Integer, Continuity: GeomAbs_Shape, EnlargeCoeff: Standard_Real);
  }

  export declare class GeomPlate_MakeApprox_2 extends GeomPlate_MakeApprox {
    constructor(SurfPlate: any, Tol3d: Standard_Real, Nbmax: Standard_Integer, dgmax: Standard_Integer, dmax: Standard_Real, CritOrder: Standard_Integer, Continuity: GeomAbs_Shape, EnlargeCoeff: Standard_Real);
  }

export declare class GeomPlate_PlateG0Criterion extends AdvApp2Var_Criterion {
  constructor(Data: TColgp_SequenceOfXY, G0Data: TColgp_SequenceOfXYZ, Maximum: Standard_Real, Type: AdvApp2Var_CriterionType, Repart: AdvApp2Var_CriterionRepartition)
  Value(P: AdvApp2Var_Patch, C: AdvApp2Var_Context): void;
  IsSatisfied(P: AdvApp2Var_Patch): Standard_Boolean;
}

export declare class GeomPlate_PlateG1Criterion extends AdvApp2Var_Criterion {
  constructor(Data: TColgp_SequenceOfXY, G1Data: TColgp_SequenceOfXYZ, Maximum: Standard_Real, Type: AdvApp2Var_CriterionType, Repart: AdvApp2Var_CriterionRepartition)
  Value(P: AdvApp2Var_Patch, C: AdvApp2Var_Context): void;
  IsSatisfied(P: AdvApp2Var_Patch): Standard_Boolean;
}

export declare class GeomPlate_Surface extends Geom_Surface {
  constructor(Surfinit: any, Surfinter: Plate_Plate)
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
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
  Copy(): any;
  Transform(T: gp_Trsf): void;
  CallSurfinit(): any;
  SetBounds(Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real): void;
  RealBounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Constraints(Seq: TColgp_SequenceOfXY): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Intf_SectionPoint {
  Pnt(): gp_Pnt;
  ParamOnFirst(): Standard_Real;
  ParamOnSecond(): Standard_Real;
  TypeOnFirst(): Intf_PIType;
  TypeOnSecond(): Intf_PIType;
  InfoFirst_1(Dim: Intf_PIType, Add1: Standard_Integer, Add2: Standard_Integer, Param: Standard_Real): void;
  InfoFirst_2(Dim: Intf_PIType, Addr: Standard_Integer, Param: Standard_Real): void;
  InfoSecond_1(Dim: Intf_PIType, Add1: Standard_Integer, Add2: Standard_Integer, Param: Standard_Real): void;
  InfoSecond_2(Dim: Intf_PIType, Addr: Standard_Integer, Param: Standard_Real): void;
  Incidence(): Standard_Real;
  IsEqual(Other: Intf_SectionPoint): Standard_Boolean;
  IsOnSameEdge(Other: Intf_SectionPoint): Standard_Boolean;
  Merge(Other: Intf_SectionPoint): void;
  Dump(Indent: Standard_Integer): void;
}

  export declare class Intf_SectionPoint_1 extends Intf_SectionPoint {
    constructor();
  }

  export declare class Intf_SectionPoint_2 extends Intf_SectionPoint {
    constructor(Where: gp_Pnt, DimeO: Intf_PIType, AddrO1: Standard_Integer, AddrO2: Standard_Integer, ParamO: Standard_Real, DimeT: Intf_PIType, AddrT1: Standard_Integer, AddrT2: Standard_Integer, ParamT: Standard_Real, Incid: Standard_Real);
  }

  export declare class Intf_SectionPoint_3 extends Intf_SectionPoint {
    constructor(Where: gp_Pnt2d, DimeO: Intf_PIType, AddrO1: Standard_Integer, ParamO: Standard_Real, DimeT: Intf_PIType, AddrT1: Standard_Integer, ParamT: Standard_Real, Incid: Standard_Real);
  }

export declare class Intf_SectionLine {
  NumberOfPoints(): Standard_Integer;
  GetPoint(Index: Standard_Integer): Intf_SectionPoint;
  IsClosed(): Standard_Boolean;
  Contains(ThePI: Intf_SectionPoint): Standard_Boolean;
  IsEnd(ThePI: Intf_SectionPoint): Standard_Integer;
  IsEqual(Other: Intf_SectionLine): Standard_Boolean;
  Append_1(Pi: Intf_SectionPoint): void;
  Append_2(LS: Intf_SectionLine): void;
  Prepend_1(Pi: Intf_SectionPoint): void;
  Prepend_2(LS: Intf_SectionLine): void;
  Reverse(): void;
  Close(): void;
  Dump(Indent: Standard_Integer): void;
}

  export declare class Intf_SectionLine_1 extends Intf_SectionLine {
    constructor();
  }

  export declare class Intf_SectionLine_2 extends Intf_SectionLine {
    constructor(Other: Intf_SectionLine);
  }

export declare class Intf_TangentZone {
  constructor()
  NumberOfPoints(): Standard_Integer;
  GetPoint(Index: Standard_Integer): Intf_SectionPoint;
  IsEqual(Other: Intf_TangentZone): Standard_Boolean;
  Contains(ThePI: Intf_SectionPoint): Standard_Boolean;
  ParamOnFirst(paraMin: Standard_Real, paraMax: Standard_Real): void;
  ParamOnSecond(paraMin: Standard_Real, paraMax: Standard_Real): void;
  InfoFirst(segMin: Standard_Integer, paraMin: Standard_Real, segMax: Standard_Integer, paraMax: Standard_Real): void;
  InfoSecond(segMin: Standard_Integer, paraMin: Standard_Real, segMax: Standard_Integer, paraMax: Standard_Real): void;
  RangeContains(ThePI: Intf_SectionPoint): Standard_Boolean;
  HasCommonRange(Other: Intf_TangentZone): Standard_Boolean;
  Append_1(Pi: Intf_SectionPoint): void;
  Append_2(Tzi: Intf_TangentZone): void;
  Insert(Pi: Intf_SectionPoint): Standard_Boolean;
  PolygonInsert(Pi: Intf_SectionPoint): void;
  InsertBefore(Index: Standard_Integer, Pi: Intf_SectionPoint): void;
  InsertAfter(Index: Standard_Integer, Pi: Intf_SectionPoint): void;
  Dump(Indent: Standard_Integer): void;
}

export declare class Intf_Interference {
  NbSectionPoints(): Standard_Integer;
  PntValue(Index: Standard_Integer): Intf_SectionPoint;
  NbSectionLines(): Standard_Integer;
  LineValue(Index: Standard_Integer): Intf_SectionLine;
  NbTangentZones(): Standard_Integer;
  ZoneValue(Index: Standard_Integer): Intf_TangentZone;
  GetTolerance(): Standard_Real;
  Contains(ThePnt: Intf_SectionPoint): Standard_Boolean;
  Insert_1(TheZone: Intf_TangentZone): Standard_Boolean;
  Insert_2(pdeb: Intf_SectionPoint, pfin: Intf_SectionPoint): void;
  Dump(): void;
}

export declare class Hatch_Parameter {
}

  export declare class Hatch_Parameter_1 extends Hatch_Parameter {
    constructor();
  }

  export declare class Hatch_Parameter_2 extends Hatch_Parameter {
    constructor(Par1: Standard_Real, Start: Standard_Boolean, Index: Standard_Integer, Par2: Standard_Real);
  }

export declare class Hatch_Line {
  AddIntersection(Par1: Standard_Real, Start: Standard_Boolean, Index: Standard_Integer, Par2: Standard_Real, theToler: Standard_Real): void;
}

  export declare class Hatch_Line_1 extends Hatch_Line {
    constructor();
  }

  export declare class Hatch_Line_2 extends Hatch_Line {
    constructor(L: gp_Lin2d, T: Hatch_LineForm);
  }

export declare class Hatch_Hatcher {
  constructor(Tol: Standard_Real, Oriented: Standard_Boolean)
  Tolerance_1(Tol: Standard_Real): void;
  Tolerance_2(): Standard_Real;
  AddLine_1(L: gp_Lin2d, T: Hatch_LineForm): void;
  AddLine_2(D: gp_Dir2d, Dist: Standard_Real): void;
  AddXLine(X: Standard_Real): void;
  AddYLine(Y: Standard_Real): void;
  Trim_1(L: gp_Lin2d, Index: Standard_Integer): void;
  Trim_2(L: gp_Lin2d, Start: Standard_Real, End: Standard_Real, Index: Standard_Integer): void;
  Trim_3(P1: gp_Pnt2d, P2: gp_Pnt2d, Index: Standard_Integer): void;
  NbIntervals_1(): Standard_Integer;
  NbLines(): Standard_Integer;
  Line(I: Standard_Integer): gp_Lin2d;
  LineForm(I: Standard_Integer): Hatch_LineForm;
  IsXLine(I: Standard_Integer): Standard_Boolean;
  IsYLine(I: Standard_Integer): Standard_Boolean;
  Coordinate(I: Standard_Integer): Standard_Real;
  NbIntervals_2(I: Standard_Integer): Standard_Integer;
  Start(I: Standard_Integer, J: Standard_Integer): Standard_Real;
  StartIndex(I: Standard_Integer, J: Standard_Integer, Index: Standard_Integer, Par2: Standard_Real): void;
  End(I: Standard_Integer, J: Standard_Integer): Standard_Real;
  EndIndex(I: Standard_Integer, J: Standard_Integer, Index: Standard_Integer, Par2: Standard_Real): void;
}

export declare class IntCurve_PConic {
  SetEpsX(EpsDist: Standard_Real): void;
  SetAccuracy(Nb: Standard_Integer): void;
  Accuracy(): Standard_Integer;
  EpsX(): Standard_Real;
  TypeCurve(): GeomAbs_CurveType;
  Axis2(): gp_Ax22d;
  Param1(): Standard_Real;
  Param2(): Standard_Real;
}

  export declare class IntCurve_PConic_1 extends IntCurve_PConic {
    constructor(PC: IntCurve_PConic);
  }

  export declare class IntCurve_PConic_2 extends IntCurve_PConic {
    constructor(E: gp_Elips2d);
  }

  export declare class IntCurve_PConic_3 extends IntCurve_PConic {
    constructor(C: gp_Circ2d);
  }

  export declare class IntCurve_PConic_4 extends IntCurve_PConic {
    constructor(P: gp_Parab2d);
  }

  export declare class IntCurve_PConic_5 extends IntCurve_PConic {
    constructor(H: gp_Hypr2d);
  }

  export declare class IntCurve_PConic_6 extends IntCurve_PConic {
    constructor(L: gp_Lin2d);
  }

export declare class Interval {
  Length(): Standard_Real;
  IntersectionWithBounded(Inter: Interval): Interval;
}

  export declare class Interval_1 extends Interval {
    constructor();
  }

  export declare class Interval_2 extends Interval {
    constructor(a: Standard_Real, b: Standard_Real);
  }

  export declare class Interval_3 extends Interval {
    constructor(Domain: IntRes2d_Domain);
  }

  export declare class Interval_4 extends Interval {
    constructor(a: Standard_Real, hf: Standard_Boolean, b: Standard_Real, hl: Standard_Boolean);
  }

export declare class PeriodicInterval {
  SetNull(): void;
  IsNull(): Standard_Boolean;
  Complement(): void;
  Length(): Standard_Real;
  SetValues(a: Standard_Real, b: Standard_Real): void;
  Normalize(): void;
  FirstIntersection(I1: PeriodicInterval): PeriodicInterval;
  SecondIntersection(I2: PeriodicInterval): PeriodicInterval;
}

  export declare class PeriodicInterval_1 extends PeriodicInterval {
    constructor(Domain: IntRes2d_Domain);
  }

  export declare class PeriodicInterval_2 extends PeriodicInterval {
    constructor();
  }

  export declare class PeriodicInterval_3 extends PeriodicInterval {
    constructor(a: Standard_Real, b: Standard_Real);
  }

export declare class IntCurve_MyImpParToolOfIntImpConicParConic extends math_FunctionWithDerivative {
  constructor(IT: IntCurve_IConicTool, PC: IntCurve_PConic)
  Value(Param: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(Param: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(Param: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class IntCurve_PConicTool {
  constructor();
  EpsX(C: IntCurve_PConic): Standard_Real;
  NbSamples_1(C: IntCurve_PConic): Standard_Integer;
  NbSamples_2(C: IntCurve_PConic, U0: Standard_Real, U1: Standard_Real): Standard_Integer;
  Value(C: IntCurve_PConic, X: Standard_Real): gp_Pnt2d;
  D1(C: IntCurve_PConic, U: Standard_Real, P: gp_Pnt2d, T: gp_Vec2d): void;
  D2(C: IntCurve_PConic, U: Standard_Real, P: gp_Pnt2d, T: gp_Vec2d, N: gp_Vec2d): void;
}

export declare class IntCurve_ProjectOnPConicTool {
  constructor();
  FindParameter_1(C: IntCurve_PConic, Pnt: gp_Pnt2d, Tol: Standard_Real): Standard_Real;
  FindParameter_2(C: IntCurve_PConic, Pnt: gp_Pnt2d, LowParameter: Standard_Real, HighParameter: Standard_Real, Tol: Standard_Real): Standard_Real;
}

export declare class IntCurveSurface_TheCSFunctionOfHInter extends math_FunctionSetWithDerivatives {
  constructor(S: any, C: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Point(): gp_Pnt;
  Root(): Standard_Real;
  AuxillarSurface(): any;
  AuxillarCurve(): any;
}

export declare class IntCurveSurface_TheExactHInter {
  Perform(U: Standard_Real, V: Standard_Real, W: Standard_Real, Rsnld: math_FunctionSetRoot, u0: Standard_Real, v0: Standard_Real, u1: Standard_Real, v1: Standard_Real, w0: Standard_Real, w1: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  Point(): gp_Pnt;
  ParameterOnCurve(): Standard_Real;
  ParameterOnSurface(U: Standard_Real, V: Standard_Real): void;
  Function(): IntCurveSurface_TheCSFunctionOfHInter;
}

  export declare class IntCurveSurface_TheExactHInter_1 extends IntCurveSurface_TheExactHInter {
    constructor(U: Standard_Real, V: Standard_Real, W: Standard_Real, F: IntCurveSurface_TheCSFunctionOfHInter, TolTangency: Standard_Real, MarginCoef: Standard_Real);
  }

  export declare class IntCurveSurface_TheExactHInter_2 extends IntCurveSurface_TheExactHInter {
    constructor(F: IntCurveSurface_TheCSFunctionOfHInter, TolTangency: Standard_Real);
  }

export declare class IntCurveSurface_TheHCurveTool {
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
  SamplePars(C: any, U0: Standard_Real, U1: Standard_Real, Defl: Standard_Real, NbMin: Standard_Integer, Pars: any): void;
}

export declare class IntCurveSurface_TheInterferenceOfHInter extends Intf_Interference {
  Perform_1(thePolyg: IntCurveSurface_ThePolygonOfHInter, thePolyh: IntCurveSurface_ThePolyhedronOfHInter): void;
  Perform_2(theLin: gp_Lin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter): void;
  Perform_3(theLins: Intf_Array1OfLin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter): void;
  Perform_4(thePolyg: IntCurveSurface_ThePolygonOfHInter, thePolyh: IntCurveSurface_ThePolyhedronOfHInter, theBoundSB: Bnd_BoundSortBox): void;
  Perform_5(theLin: gp_Lin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter, theBoundSB: Bnd_BoundSortBox): void;
  Perform_6(theLins: Intf_Array1OfLin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter, theBoundSB: Bnd_BoundSortBox): void;
  Interference_1(thePolyg: IntCurveSurface_ThePolygonOfHInter, thePolyh: IntCurveSurface_ThePolyhedronOfHInter, theBoundSB: Bnd_BoundSortBox): void;
  Interference_2(thePolyg: IntCurveSurface_ThePolygonOfHInter, thePolyh: IntCurveSurface_ThePolyhedronOfHInter): void;
}

  export declare class IntCurveSurface_TheInterferenceOfHInter_1 extends IntCurveSurface_TheInterferenceOfHInter {
    constructor();
  }

  export declare class IntCurveSurface_TheInterferenceOfHInter_2 extends IntCurveSurface_TheInterferenceOfHInter {
    constructor(thePolyg: IntCurveSurface_ThePolygonOfHInter, thePolyh: IntCurveSurface_ThePolyhedronOfHInter);
  }

  export declare class IntCurveSurface_TheInterferenceOfHInter_3 extends IntCurveSurface_TheInterferenceOfHInter {
    constructor(theLin: gp_Lin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter);
  }

  export declare class IntCurveSurface_TheInterferenceOfHInter_4 extends IntCurveSurface_TheInterferenceOfHInter {
    constructor(theLins: Intf_Array1OfLin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter);
  }

  export declare class IntCurveSurface_TheInterferenceOfHInter_5 extends IntCurveSurface_TheInterferenceOfHInter {
    constructor(thePolyg: IntCurveSurface_ThePolygonOfHInter, thePolyh: IntCurveSurface_ThePolyhedronOfHInter, theBoundSB: Bnd_BoundSortBox);
  }

  export declare class IntCurveSurface_TheInterferenceOfHInter_6 extends IntCurveSurface_TheInterferenceOfHInter {
    constructor(theLin: gp_Lin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter, theBoundSB: Bnd_BoundSortBox);
  }

  export declare class IntCurveSurface_TheInterferenceOfHInter_7 extends IntCurveSurface_TheInterferenceOfHInter {
    constructor(theLins: Intf_Array1OfLin, thePolyh: IntCurveSurface_ThePolyhedronOfHInter, theBoundSB: Bnd_BoundSortBox);
  }

export declare class IntCurveSurface_ThePolygonOfHInter {
  Bounding(): Bnd_Box;
  DeflectionOverEstimation(): Standard_Real;
  SetDeflectionOverEstimation(x: Standard_Real): void;
  Closed_1(clos: Standard_Boolean): void;
  Closed_2(): Standard_Boolean;
  NbSegments(): Standard_Integer;
  BeginOfSeg(Index: Standard_Integer): gp_Pnt;
  EndOfSeg(Index: Standard_Integer): gp_Pnt;
  InfParameter(): Standard_Real;
  SupParameter(): Standard_Real;
  ApproxParamOnCurve(Index: Standard_Integer, ParamOnLine: Standard_Real): Standard_Real;
  Dump(): void;
}

  export declare class IntCurveSurface_ThePolygonOfHInter_1 extends IntCurveSurface_ThePolygonOfHInter {
    constructor(Curve: any, NbPnt: Standard_Integer);
  }

  export declare class IntCurveSurface_ThePolygonOfHInter_2 extends IntCurveSurface_ThePolygonOfHInter {
    constructor(Curve: any, U1: Standard_Real, U2: Standard_Real, NbPnt: Standard_Integer);
  }

  export declare class IntCurveSurface_ThePolygonOfHInter_3 extends IntCurveSurface_ThePolygonOfHInter {
    constructor(Curve: any, Upars: TColStd_Array1OfReal);
  }

export declare class IntCurveSurface_ThePolygonToolOfHInter {
  constructor();
  Bounding(thePolygon: IntCurveSurface_ThePolygonOfHInter): Bnd_Box;
  DeflectionOverEstimation(thePolygon: IntCurveSurface_ThePolygonOfHInter): Standard_Real;
  Closed(thePolygon: IntCurveSurface_ThePolygonOfHInter): Standard_Boolean;
  NbSegments(thePolygon: IntCurveSurface_ThePolygonOfHInter): Standard_Integer;
  BeginOfSeg(thePolygon: IntCurveSurface_ThePolygonOfHInter, Index: Standard_Integer): gp_Pnt;
  EndOfSeg(thePolygon: IntCurveSurface_ThePolygonOfHInter, Index: Standard_Integer): gp_Pnt;
  Dump(thePolygon: IntCurveSurface_ThePolygonOfHInter): void;
}

export declare class IntCurveSurface_ThePolyhedronToolOfHInter {
  constructor();
  Bounding(thePolyh: IntCurveSurface_ThePolyhedronOfHInter): Bnd_Box;
  ComponentsBounding(thePolyh: IntCurveSurface_ThePolyhedronOfHInter): any;
  DeflectionOverEstimation(thePolyh: IntCurveSurface_ThePolyhedronOfHInter): Standard_Real;
  NbTriangles(thePolyh: IntCurveSurface_ThePolyhedronOfHInter): Standard_Integer;
  Triangle(thePolyh: IntCurveSurface_ThePolyhedronOfHInter, Index: Standard_Integer, P1: Standard_Integer, P2: Standard_Integer, P3: Standard_Integer): void;
  Point(thePolyh: IntCurveSurface_ThePolyhedronOfHInter, Index: Standard_Integer): gp_Pnt;
  TriConnex(thePolyh: IntCurveSurface_ThePolyhedronOfHInter, Triang: Standard_Integer, Pivot: Standard_Integer, Pedge: Standard_Integer, TriCon: Standard_Integer, OtherP: Standard_Integer): Standard_Integer;
  IsOnBound(thePolyh: IntCurveSurface_ThePolyhedronOfHInter, Index1: Standard_Integer, Index2: Standard_Integer): Standard_Boolean;
  GetBorderDeflection(thePolyh: IntCurveSurface_ThePolyhedronOfHInter): Standard_Real;
  Dump(thePolyh: IntCurveSurface_ThePolyhedronOfHInter): void;
}

export declare class IntCurveSurface_TheQuadCurvExactHInter {
  constructor(S: any, C: any)
  IsDone(): Standard_Boolean;
  NbRoots(): Standard_Integer;
  Root(Index: Standard_Integer): Standard_Real;
  NbIntervals(): Standard_Integer;
  Intervals(Index: Standard_Integer, U1: Standard_Real, U2: Standard_Real): void;
}

export declare class IntCurveSurface_TheQuadCurvFuncOfTheQuadCurvExactHInter extends math_FunctionWithDerivative {
  constructor(Q: IntSurf_Quadric, C: any)
  Value(Param: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(Param: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(Param: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class IntPatch_ALine extends IntPatch_Line {
  AddVertex(Pnt: IntPatch_Point): void;
  Replace(Index: Standard_Integer, Pnt: IntPatch_Point): void;
  SetFirstPoint(IndFirst: Standard_Integer): void;
  SetLastPoint(IndLast: Standard_Integer): void;
  FirstParameter(IsIncluded: Standard_Boolean): Standard_Real;
  LastParameter(IsIncluded: Standard_Boolean): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D1(U: Standard_Real, P: gp_Pnt, Du: gp_Vec): Standard_Boolean;
  FindParameter(P: gp_Pnt, theParams: TColStd_ListOfReal): void;
  HasFirstPoint(): Standard_Boolean;
  HasLastPoint(): Standard_Boolean;
  FirstPoint(): IntPatch_Point;
  LastPoint(): IntPatch_Point;
  NbVertex(): Standard_Integer;
  Vertex(Index: Standard_Integer): IntPatch_Point;
  ChangeVertex(theIndex: Standard_Integer): IntPatch_Point;
  ComputeVertexParameters(Tol: Standard_Real): void;
  Curve(): IntAna_Curve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IntPatch_ALine_1 extends IntPatch_ALine {
    constructor(C: IntAna_Curve, Tang: Standard_Boolean, Trans1: IntSurf_TypeTrans, Trans2: IntSurf_TypeTrans);
  }

  export declare class IntPatch_ALine_2 extends IntPatch_ALine {
    constructor(C: IntAna_Curve, Tang: Standard_Boolean, Situ1: IntSurf_Situation, Situ2: IntSurf_Situation);
  }

  export declare class IntPatch_ALine_3 extends IntPatch_ALine {
    constructor(C: IntAna_Curve, Tang: Standard_Boolean);
  }

export declare class IntPatch_ALineToWLine {
  constructor(theS1: any, theS2: any, theNbPoints: Standard_Integer)
  SetTolOpenDomain(aT: Standard_Real): void;
  TolOpenDomain(): Standard_Real;
  SetTolTransition(aT: Standard_Real): void;
  TolTransition(): Standard_Real;
  SetTol3D(aT: Standard_Real): void;
  Tol3D(): Standard_Real;
  MakeWLine_1(aline: any, theLines: IntPatch_SequenceOfLine): void;
  MakeWLine_2(aline: any, paraminf: Standard_Real, paramsup: Standard_Real, theLines: IntPatch_SequenceOfLine): void;
}

export declare class IntPatch_ArcFunction extends math_FunctionWithDerivative {
  constructor()
  SetQuadric(Q: IntSurf_Quadric): void;
  Set_1(A: any): void;
  Set_2(S: any): void;
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
  NbSamples(): Standard_Integer;
  GetStateNumber(): Standard_Integer;
  Valpoint(Index: Standard_Integer): gp_Pnt;
  Quadric(): IntSurf_Quadric;
  Arc(): any;
  Surface(): any;
  LastComputedPoint(): gp_Pnt;
}

export declare class IntPatch_CSFunction extends math_FunctionSetWithDerivatives {
  constructor(S1: any, C: any, S2: any)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Point(): gp_Pnt;
  Root(): Standard_Real;
  AuxillarSurface(): any;
  AuxillarCurve(): any;
}

export declare class IntPatch_CurvIntSurf {
  Perform(U: Standard_Real, V: Standard_Real, W: Standard_Real, Rsnld: math_FunctionSetRoot, u0: Standard_Real, v0: Standard_Real, u1: Standard_Real, v1: Standard_Real, w0: Standard_Real, w1: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  Point(): gp_Pnt;
  ParameterOnCurve(): Standard_Real;
  ParameterOnSurface(U: Standard_Real, V: Standard_Real): void;
  Function(): IntPatch_CSFunction;
}

  export declare class IntPatch_CurvIntSurf_1 extends IntPatch_CurvIntSurf {
    constructor(U: Standard_Real, V: Standard_Real, W: Standard_Real, F: IntPatch_CSFunction, TolTangency: Standard_Real, MarginCoef: Standard_Real);
  }

  export declare class IntPatch_CurvIntSurf_2 extends IntPatch_CurvIntSurf {
    constructor(F: IntPatch_CSFunction, TolTangency: Standard_Real);
  }

export declare class IntPatch_GLine extends IntPatch_Line {
  AddVertex(Pnt: IntPatch_Point): void;
  Replace(Index: Standard_Integer, Pnt: IntPatch_Point): void;
  SetFirstPoint(IndFirst: Standard_Integer): void;
  SetLastPoint(IndLast: Standard_Integer): void;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Parabola(): gp_Parab;
  Hyperbola(): gp_Hypr;
  HasFirstPoint(): Standard_Boolean;
  HasLastPoint(): Standard_Boolean;
  FirstPoint(): IntPatch_Point;
  LastPoint(): IntPatch_Point;
  NbVertex(): Standard_Integer;
  Vertex(Index: Standard_Integer): IntPatch_Point;
  ComputeVertexParameters(Tol: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IntPatch_GLine_1 extends IntPatch_GLine {
    constructor(L: gp_Lin, Tang: Standard_Boolean, Trans1: IntSurf_TypeTrans, Trans2: IntSurf_TypeTrans);
  }

  export declare class IntPatch_GLine_2 extends IntPatch_GLine {
    constructor(L: gp_Lin, Tang: Standard_Boolean, Situ1: IntSurf_Situation, Situ2: IntSurf_Situation);
  }

  export declare class IntPatch_GLine_3 extends IntPatch_GLine {
    constructor(L: gp_Lin, Tang: Standard_Boolean);
  }

  export declare class IntPatch_GLine_4 extends IntPatch_GLine {
    constructor(C: gp_Circ, Tang: Standard_Boolean, Trans1: IntSurf_TypeTrans, Trans2: IntSurf_TypeTrans);
  }

  export declare class IntPatch_GLine_5 extends IntPatch_GLine {
    constructor(C: gp_Circ, Tang: Standard_Boolean, Situ1: IntSurf_Situation, Situ2: IntSurf_Situation);
  }

  export declare class IntPatch_GLine_6 extends IntPatch_GLine {
    constructor(C: gp_Circ, Tang: Standard_Boolean);
  }

  export declare class IntPatch_GLine_7 extends IntPatch_GLine {
    constructor(E: gp_Elips, Tang: Standard_Boolean, Trans1: IntSurf_TypeTrans, Trans2: IntSurf_TypeTrans);
  }

  export declare class IntPatch_GLine_8 extends IntPatch_GLine {
    constructor(E: gp_Elips, Tang: Standard_Boolean, Situ1: IntSurf_Situation, Situ2: IntSurf_Situation);
  }

  export declare class IntPatch_GLine_9 extends IntPatch_GLine {
    constructor(E: gp_Elips, Tang: Standard_Boolean);
  }

  export declare class IntPatch_GLine_10 extends IntPatch_GLine {
    constructor(P: gp_Parab, Tang: Standard_Boolean, Trans1: IntSurf_TypeTrans, Trans2: IntSurf_TypeTrans);
  }

  export declare class IntPatch_GLine_11 extends IntPatch_GLine {
    constructor(P: gp_Parab, Tang: Standard_Boolean, Situ1: IntSurf_Situation, Situ2: IntSurf_Situation);
  }

  export declare class IntPatch_GLine_12 extends IntPatch_GLine {
    constructor(P: gp_Parab, Tang: Standard_Boolean);
  }

  export declare class IntPatch_GLine_13 extends IntPatch_GLine {
    constructor(H: gp_Hypr, Tang: Standard_Boolean, Trans1: IntSurf_TypeTrans, Trans2: IntSurf_TypeTrans);
  }

  export declare class IntPatch_GLine_14 extends IntPatch_GLine {
    constructor(H: gp_Hypr, Tang: Standard_Boolean, Situ1: IntSurf_Situation, Situ2: IntSurf_Situation);
  }

  export declare class IntPatch_GLine_15 extends IntPatch_GLine {
    constructor(H: gp_Hypr, Tang: Standard_Boolean);
  }

export declare class IntPatch_HCurve2dTool {
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

export declare class IntPatch_HInterTool {
  constructor()
  SingularOnUMin(S: any): Standard_Boolean;
  SingularOnUMax(S: any): Standard_Boolean;
  SingularOnVMin(S: any): Standard_Boolean;
  SingularOnVMax(S: any): Standard_Boolean;
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

export declare class IntPatch_ThePathPointOfTheSOnBounds {
  SetValue_1(P: gp_Pnt, Tol: Standard_Real, V: any, A: any, Parameter: Standard_Real): void;
  SetValue_2(P: gp_Pnt, Tol: Standard_Real, A: any, Parameter: Standard_Real): void;
  Value(): gp_Pnt;
  Tolerance(): Standard_Real;
  IsNew(): Standard_Boolean;
  Vertex(): any;
  Arc(): any;
  Parameter(): Standard_Real;
}

  export declare class IntPatch_ThePathPointOfTheSOnBounds_1 extends IntPatch_ThePathPointOfTheSOnBounds {
    constructor();
  }

  export declare class IntPatch_ThePathPointOfTheSOnBounds_2 extends IntPatch_ThePathPointOfTheSOnBounds {
    constructor(P: gp_Pnt, Tol: Standard_Real, V: any, A: any, Parameter: Standard_Real);
  }

  export declare class IntPatch_ThePathPointOfTheSOnBounds_3 extends IntPatch_ThePathPointOfTheSOnBounds {
    constructor(P: gp_Pnt, Tol: Standard_Real, A: any, Parameter: Standard_Real);
  }

export declare class IntPatch_TheSegmentOfTheSOnBounds {
  constructor()
  SetValue(A: any): void;
  SetLimitPoint(V: IntPatch_ThePathPointOfTheSOnBounds, First: Standard_Boolean): void;
  Curve(): any;
  HasFirstPoint(): Standard_Boolean;
  FirstPoint(): IntPatch_ThePathPointOfTheSOnBounds;
  HasLastPoint(): Standard_Boolean;
  LastPoint(): IntPatch_ThePathPointOfTheSOnBounds;
}

export declare class IntPatch_TheSOnBounds {
  constructor()
  Perform(F: IntPatch_ArcFunction, Domain: any, TolBoundary: Standard_Real, TolTangency: Standard_Real, RecheckOnRegularity: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  AllArcSolution(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): IntPatch_ThePathPointOfTheSOnBounds;
  NbSegments(): Standard_Integer;
  Segment(Index: Standard_Integer): IntPatch_TheSegmentOfTheSOnBounds;
}

export declare class IntPatch_ImpImpIntersection {
  Perform(S1: any, D1: any, S2: any, D2: any, TolArc: Standard_Real, TolTang: Standard_Real, theIsReqToKeepRLine: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  GetStatus(): any;
  IsEmpty(): Standard_Boolean;
  TangentFaces(): Standard_Boolean;
  OppositeFaces(): Standard_Boolean;
  NbPnts(): Standard_Integer;
  Point(Index: Standard_Integer): IntPatch_Point;
  NbLines(): Standard_Integer;
  Line(Index: Standard_Integer): any;
}

  export declare class IntPatch_ImpImpIntersection_1 extends IntPatch_ImpImpIntersection {
    constructor();
  }

  export declare class IntPatch_ImpImpIntersection_2 extends IntPatch_ImpImpIntersection {
    constructor(S1: any, D1: any, S2: any, D2: any, TolArc: Standard_Real, TolTang: Standard_Real, theIsReqToKeepRLine: Standard_Boolean);
  }

export declare class IntPatch_TheSearchInside {
  Perform_1(F: IntPatch_TheSurfFunction, Surf: any, T: any, Epsilon: Standard_Real): void;
  Perform_2(F: IntPatch_TheSurfFunction, Surf: any, UStart: Standard_Real, VStart: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Value(Index: Standard_Integer): IntSurf_InteriorPoint;
}

  export declare class IntPatch_TheSearchInside_1 extends IntPatch_TheSearchInside {
    constructor();
  }

  export declare class IntPatch_TheSearchInside_2 extends IntPatch_TheSearchInside {
    constructor(F: IntPatch_TheSurfFunction, Surf: any, T: any, Epsilon: Standard_Real);
  }

export declare class IntPatch_ImpPrmIntersection {
  SetStartPoint(U: Standard_Real, V: Standard_Real): void;
  Perform(Surf1: any, D1: any, Surf2: any, D2: any, TolArc: Standard_Real, TolTang: Standard_Real, Fleche: Standard_Real, Pas: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  NbPnts(): Standard_Integer;
  Point(Index: Standard_Integer): IntPatch_Point;
  NbLines(): Standard_Integer;
  Line(Index: Standard_Integer): any;
}

  export declare class IntPatch_ImpPrmIntersection_1 extends IntPatch_ImpPrmIntersection {
    constructor();
  }

  export declare class IntPatch_ImpPrmIntersection_2 extends IntPatch_ImpPrmIntersection {
    constructor(Surf1: any, D1: any, Surf2: any, D2: any, TolArc: Standard_Real, TolTang: Standard_Real, Fleche: Standard_Real, Pas: Standard_Real);
  }

export declare class IntPatch_InterferencePolyhedron extends Intf_Interference {
  Perform_1(Obje1: IntPatch_Polyhedron, Obje2: IntPatch_Polyhedron): void;
  Perform_2(Obje: IntPatch_Polyhedron): void;
}

  export declare class IntPatch_InterferencePolyhedron_1 extends IntPatch_InterferencePolyhedron {
    constructor();
  }

  export declare class IntPatch_InterferencePolyhedron_2 extends IntPatch_InterferencePolyhedron {
    constructor(Obje1: IntPatch_Polyhedron, Obje2: IntPatch_Polyhedron);
  }

  export declare class IntPatch_InterferencePolyhedron_3 extends IntPatch_InterferencePolyhedron {
    constructor(Obje: IntPatch_Polyhedron);
  }

export declare class IntPatch_LineConstructor {
  constructor(mode: Standard_Integer)
  Perform(SL: IntPatch_SequenceOfLine, L: any, S1: any, D1: any, S2: any, D2: any, Tol: Standard_Real): void;
  NbLines(): Standard_Integer;
  Line(index: Standard_Integer): any;
}

export declare class IntPatch_PointLine extends IntPatch_Line {
  AddVertex(Pnt: IntPatch_Point, theIsPrepend: Standard_Boolean): void;
  NbPnts(): Standard_Integer;
  NbVertex(): Standard_Integer;
  Point(Index: Standard_Integer): IntSurf_PntOn2S;
  Vertex(Index: Standard_Integer): IntPatch_Point;
  ChangeVertex(Index: Standard_Integer): IntPatch_Point;
  ClearVertexes(): void;
  RemoveVertex(theIndex: Standard_Integer): void;
  Curve(): any;
  IsOutSurf1Box(P1: gp_Pnt2d): Standard_Boolean;
  IsOutSurf2Box(P2: gp_Pnt2d): Standard_Boolean;
  IsOutBox(P: gp_Pnt): Standard_Boolean;
  CurvatureRadiusOfIntersLine(theS1: any, theS2: any, theUVPoint: IntSurf_PntOn2S): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IntPatch_Polygo extends Intf_Polygon2d {
  Error(): Standard_Real;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt2d;
  DeflectionOverEstimation(): Standard_Real;
  NbSegments(): Standard_Integer;
  Segment(theIndex: Standard_Integer, theBegin: gp_Pnt2d, theEnd: gp_Pnt2d): void;
  Dump(): void;
}

export declare class IntPatch_PolyArc extends IntPatch_Polygo {
  constructor(A: any, NbSample: Standard_Integer, Pfirst: Standard_Real, Plast: Standard_Real, BoxOtherPolygon: Bnd_Box2d)
  Closed(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt2d;
  Parameter(Index: Standard_Integer): Standard_Real;
  SetOffset(OffsetX: Standard_Real, OffsetY: Standard_Real): void;
}

export declare class IntPatch_PolyLine extends IntPatch_Polygo {
  SetWLine(OnFirst: Standard_Boolean, Line: any): void;
  SetRLine(OnFirst: Standard_Boolean, Line: any): void;
  ResetError(): void;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt2d;
}

  export declare class IntPatch_PolyLine_1 extends IntPatch_PolyLine {
    constructor();
  }

  export declare class IntPatch_PolyLine_2 extends IntPatch_PolyLine {
    constructor(InitDefle: Standard_Real);
  }

export declare class IntPatch_PolyhedronTool {
  constructor();
  Bounding(thePolyh: IntPatch_Polyhedron): Bnd_Box;
  ComponentsBounding(thePolyh: IntPatch_Polyhedron): any;
  DeflectionOverEstimation(thePolyh: IntPatch_Polyhedron): Standard_Real;
  NbTriangles(thePolyh: IntPatch_Polyhedron): Standard_Integer;
  Triangle(thePolyh: IntPatch_Polyhedron, Index: Standard_Integer, P1: Standard_Integer, P2: Standard_Integer, P3: Standard_Integer): void;
  Point(thePolyh: IntPatch_Polyhedron, Index: Standard_Integer): gp_Pnt;
  TriConnex(thePolyh: IntPatch_Polyhedron, Triang: Standard_Integer, Pivot: Standard_Integer, Pedge: Standard_Integer, TriCon: Standard_Integer, OtherP: Standard_Integer): Standard_Integer;
}

export declare class IntPatch_PrmPrmIntersection {
  constructor()
  Perform_1(Caro1: any, Polyhedron1: IntPatch_Polyhedron, Domain1: any, Caro2: any, Polyhedron2: IntPatch_Polyhedron, Domain2: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real): void;
  Perform_2(Caro1: any, Polyhedron1: IntPatch_Polyhedron, Domain1: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real): void;
  Perform_3(Caro1: any, Domain1: any, Caro2: any, Domain2: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real, ClearFlag: Standard_Boolean): void;
  Perform_4(Caro1: any, Domain1: any, Caro2: any, Domain2: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real, ListOfPnts: IntSurf_ListOfPntOn2S): void;
  Perform_5(Caro1: any, Domain1: any, Caro2: any, Domain2: any, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real): void;
  Perform_6(Caro1: any, Domain1: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real): void;
  Perform_7(Caro1: any, Domain1: any, Caro2: any, Polyhedron2: IntPatch_Polyhedron, Domain2: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real): void;
  Perform_8(Caro1: any, Polyhedron1: IntPatch_Polyhedron, Domain1: any, Caro2: any, Domain2: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  NbLines(): Standard_Integer;
  Line(Index: Standard_Integer): any;
  NewLine(Caro1: any, Caro2: any, IndexLine: Standard_Integer, LowPoint: Standard_Integer, HighPoint: Standard_Integer, NbPoints: Standard_Integer): any;
  GrilleInteger(ix: Standard_Integer, iy: Standard_Integer, iz: Standard_Integer): Standard_Integer;
  IntegerGrille(t: Standard_Integer, ix: Standard_Integer, iy: Standard_Integer, iz: Standard_Integer): void;
  DansGrille(t: Standard_Integer): Standard_Integer;
  NbPointsGrille(): Standard_Integer;
  RemplitLin(x1: Standard_Integer, y1: Standard_Integer, z1: Standard_Integer, x2: Standard_Integer, y2: Standard_Integer, z2: Standard_Integer, Map: IntPatch_PrmPrmIntersection_T3Bits): void;
  RemplitTri(x1: Standard_Integer, y1: Standard_Integer, z1: Standard_Integer, x2: Standard_Integer, y2: Standard_Integer, z2: Standard_Integer, x3: Standard_Integer, y3: Standard_Integer, z3: Standard_Integer, Map: IntPatch_PrmPrmIntersection_T3Bits): void;
  Remplit(a: Standard_Integer, b: Standard_Integer, c: Standard_Integer, Map: IntPatch_PrmPrmIntersection_T3Bits): void;
  CodeReject(x1: Standard_Real, y1: Standard_Real, z1: Standard_Real, x2: Standard_Real, y2: Standard_Real, z2: Standard_Real, x3: Standard_Real, y3: Standard_Real, z3: Standard_Real): Standard_Integer;
  PointDepart(LineOn2S: any, S1: any, SU1: Standard_Integer, SV1: Standard_Integer, S2: any, SU2: Standard_Integer, SV2: Standard_Integer): void;
}

export declare class IntPatch_PrmPrmIntersection_T3Bits {
  constructor(size: Standard_Integer)
  Destroy(): void;
  Add(t: Standard_Integer): void;
  Val(t: Standard_Integer): Standard_Integer;
  Raz(t: Standard_Integer): void;
  ResetAnd(): void;
  And(Oth: IntPatch_PrmPrmIntersection_T3Bits, indiceprecedent: Standard_Integer): Standard_Integer;
}

export declare class IntPatch_RstInt {
  constructor();
  PutVertexOnLine(L: any, Surf: any, Domain: any, OtherSurf: any, OnFirst: Standard_Boolean, Tol: Standard_Real): void;
}

export declare class Intf_InterferencePolygon2d extends Intf_Interference {
  Perform_1(Obje1: Intf_Polygon2d, Obje2: Intf_Polygon2d): void;
  Perform_2(Obje: Intf_Polygon2d): void;
  Pnt2dValue(Index: Standard_Integer): gp_Pnt2d;
}

  export declare class Intf_InterferencePolygon2d_1 extends Intf_InterferencePolygon2d {
    constructor();
  }

  export declare class Intf_InterferencePolygon2d_2 extends Intf_InterferencePolygon2d {
    constructor(Obje1: Intf_Polygon2d, Obje2: Intf_Polygon2d);
  }

  export declare class Intf_InterferencePolygon2d_3 extends Intf_InterferencePolygon2d {
    constructor(Obje: Intf_Polygon2d);
  }

export declare class IntPatch_TheIWLineOfTheIWalking extends Standard_Transient {
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

export declare class IntPatch_SpecialPoints {
  constructor();
  AddCrossUVIsoPoint(theQSurf: any, thePSurf: any, theRefPt: IntSurf_PntOn2S, theTol3d: Standard_Real, theAddedPoint: IntSurf_PntOn2S, theIsReversed: Standard_Boolean): Standard_Boolean;
  AddPointOnUorVIso(theQSurf: any, thePSurf: any, theRefPt: IntSurf_PntOn2S, theIsU: Standard_Boolean, theIsoParameter: Standard_Real, theToler: math_Vector, theInitPoint: math_Vector, theInfBound: math_Vector, theSupBound: math_Vector, theAddedPoint: IntSurf_PntOn2S, theIsReversed: Standard_Boolean): Standard_Boolean;
  AddSingularPole(theQSurf: any, thePSurf: any, thePtIso: IntSurf_PntOn2S, theVertex: IntPatch_Point, theAddedPoint: IntSurf_PntOn2S, theIsReversed: Standard_Boolean, theIsReqRefCheck: Standard_Boolean): Standard_Boolean;
  ContinueAfterSpecialPoint(theQSurf: any, thePSurf: any, theRefPt: IntSurf_PntOn2S, theSPType: IntPatch_SpecPntType, theTol2D: Standard_Real, theNewPoint: IntSurf_PntOn2S, theIsReversed: Standard_Boolean): Standard_Boolean;
  AdjustPointAndVertex(theRefPoint: IntSurf_PntOn2S, theArrPeriods: Standard_Real [4], theNewPoint: IntSurf_PntOn2S, theVertex: IntPatch_Point): void;
}

export declare class IntPatch_TheIWalking {
  constructor(Epsilon: Standard_Real, Deflection: Standard_Real, Step: Standard_Real, theToFillHoles: Standard_Boolean)
  SetTolerance(Epsilon: Standard_Real, Deflection: Standard_Real, Step: Standard_Real): void;
  Perform_1(Pnts1: IntSurf_SequenceOfPathPoint, Pnts2: IntSurf_SequenceOfInteriorPoint, Func: IntPatch_TheSurfFunction, S: any, Reversed: Standard_Boolean): void;
  Perform_2(Pnts1: IntSurf_SequenceOfPathPoint, Func: IntPatch_TheSurfFunction, S: any, Reversed: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  NbLines(): Standard_Integer;
  Value(Index: Standard_Integer): any;
  NbSinglePnts(): Standard_Integer;
  SinglePnt(Index: Standard_Integer): IntSurf_PathPoint;
}

export declare class IntPatch_TheSurfFunction extends math_FunctionSetWithDerivatives {
  Set_1(PS: any): void;
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
  PSurface(): any;
  ISurface(): IntSurf_Quadric;
}

  export declare class IntPatch_TheSurfFunction_1 extends IntPatch_TheSurfFunction {
    constructor();
  }

  export declare class IntPatch_TheSurfFunction_2 extends IntPatch_TheSurfFunction {
    constructor(PS: any, IS: IntSurf_Quadric);
  }

  export declare class IntPatch_TheSurfFunction_3 extends IntPatch_TheSurfFunction {
    constructor(IS: IntSurf_Quadric);
  }

export declare class IntPatch_WLine extends IntPatch_PointLine {
  AddVertex(Pnt: IntPatch_Point, theIsPrepend: Standard_Boolean): void;
  SetPoint(Index: Standard_Integer, Pnt: IntPatch_Point): void;
  Replace(Index: Standard_Integer, Pnt: IntPatch_Point): void;
  SetFirstPoint(IndFirst: Standard_Integer): void;
  SetLastPoint(IndLast: Standard_Integer): void;
  NbPnts(): Standard_Integer;
  Point(Index: Standard_Integer): IntSurf_PntOn2S;
  HasFirstPoint(): Standard_Boolean;
  HasLastPoint(): Standard_Boolean;
  FirstPoint_1(): IntPatch_Point;
  LastPoint_1(): IntPatch_Point;
  FirstPoint_2(Indfirst: Standard_Integer): IntPatch_Point;
  LastPoint_2(Indlast: Standard_Integer): IntPatch_Point;
  NbVertex(): Standard_Integer;
  Vertex(Index: Standard_Integer): IntPatch_Point;
  ChangeVertex(Index: Standard_Integer): IntPatch_Point;
  ComputeVertexParameters(Tol: Standard_Real): void;
  Curve(): any;
  IsOutSurf1Box(theP: gp_Pnt2d): Standard_Boolean;
  IsOutSurf2Box(theP: gp_Pnt2d): Standard_Boolean;
  IsOutBox(theP: gp_Pnt): Standard_Boolean;
  SetPeriod(pu1: Standard_Real, pv1: Standard_Real, pu2: Standard_Real, pv2: Standard_Real): void;
  U1Period(): Standard_Real;
  V1Period(): Standard_Real;
  U2Period(): Standard_Real;
  V2Period(): Standard_Real;
  SetArcOnS1(A: any): void;
  HasArcOnS1(): Standard_Boolean;
  GetArcOnS1(): any;
  SetArcOnS2(A: any): void;
  HasArcOnS2(): Standard_Boolean;
  GetArcOnS2(): any;
  ClearVertexes(): void;
  RemoveVertex(theIndex: Standard_Integer): void;
  InsertVertexBefore(theIndex: Standard_Integer, thePnt: IntPatch_Point): void;
  Dump(theMode: Standard_Integer): void;
  EnablePurging(theIsEnabled: Standard_Boolean): void;
  IsPurgingAllowed(): Standard_Boolean;
  GetCreatingWay(): any;
  SetCreatingWayInfo(theAlgo: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IntPatch_WLine_1 extends IntPatch_WLine {
    constructor(Line: any, Tang: Standard_Boolean, Trans1: IntSurf_TypeTrans, Trans2: IntSurf_TypeTrans);
  }

  export declare class IntPatch_WLine_2 extends IntPatch_WLine {
    constructor(Line: any, Tang: Standard_Boolean, Situ1: IntSurf_Situation, Situ2: IntSurf_Situation);
  }

  export declare class IntPatch_WLine_3 extends IntPatch_WLine {
    constructor(Line: any, Tang: Standard_Boolean);
  }

export declare class IntPatch_WLineTool {
  constructor();
  ComputePurgedWLine(theWLine: any, theS1: any, theS2: any, theDom1: any, theDom2: any): any;
  JoinWLines(theSlin: IntPatch_SequenceOfLine, theSPnt: IntPatch_SequenceOfPoint, theS1: any, theS2: any, theTol3D: Standard_Real): void;
  ExtendTwoWLines(theSlin: IntPatch_SequenceOfLine, theS1: any, theS2: any, theToler3D: Standard_Real, theArrPeriods: Standard_Real, theBoxS1: Bnd_Box2d, theBoxS2: Bnd_Box2d, theListOfCriticalPoints: NCollection_List<gp_Pnt>): void;
}

export declare class IntPolyh_Edge {
  FirstPoint(): Standard_Integer;
  SecondPoint(): Standard_Integer;
  FirstTriangle(): Standard_Integer;
  SecondTriangle(): Standard_Integer;
  SetFirstPoint(thePoint: Standard_Integer): void;
  SetSecondPoint(thePoint: Standard_Integer): void;
  SetFirstTriangle(theTriangle: Standard_Integer): void;
  SetSecondTriangle(theTriangle: Standard_Integer): void;
  Dump(v: Standard_Integer): void;
}

  export declare class IntPolyh_Edge_1 extends IntPolyh_Edge {
    constructor();
  }

  export declare class IntPolyh_Edge_2 extends IntPolyh_Edge {
    constructor(thePoint1: Standard_Integer, thePoint2: Standard_Integer, theTriangle1: Standard_Integer, theTriangle2: Standard_Integer);
  }

export declare class IntPolyh_Point {
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  U(): Standard_Real;
  V(): Standard_Real;
  PartOfCommon(): Standard_Integer;
  Set(x: Standard_Real, y: Standard_Real, z: Standard_Real, u: Standard_Real, v: Standard_Real, II: Standard_Integer): void;
  SetX(x: Standard_Real): void;
  SetY(y: Standard_Real): void;
  SetZ(z: Standard_Real): void;
  SetU(u: Standard_Real): void;
  SetV(v: Standard_Real): void;
  SetPartOfCommon(ii: Standard_Integer): void;
  Middle(MySurface: any, P1: IntPolyh_Point, P2: IntPolyh_Point): void;
  Add(P1: IntPolyh_Point): IntPolyh_Point;
  Sub(P1: IntPolyh_Point): IntPolyh_Point;
  Divide(rr: Standard_Real): IntPolyh_Point;
  Multiplication(rr: Standard_Real): IntPolyh_Point;
  SquareModulus(): Standard_Real;
  SquareDistance(P2: IntPolyh_Point): Standard_Real;
  Dot(P2: IntPolyh_Point): Standard_Real;
  Cross(P1: IntPolyh_Point, P2: IntPolyh_Point): void;
  Dump_1(): void;
  Dump_2(i: Standard_Integer): void;
  SetDegenerated(theFlag: Standard_Boolean): void;
  Degenerated(): Standard_Boolean;
}

  export declare class IntPolyh_Point_1 extends IntPolyh_Point {
    constructor();
  }

  export declare class IntPolyh_Point_2 extends IntPolyh_Point {
    constructor(x: Standard_Real, y: Standard_Real, z: Standard_Real, u: Standard_Real, v: Standard_Real);
  }

export declare class IntPolyh_StartPoint {
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  U1(): Standard_Real;
  V1(): Standard_Real;
  U2(): Standard_Real;
  V2(): Standard_Real;
  T1(): Standard_Integer;
  E1(): Standard_Integer;
  Lambda1(): Standard_Real;
  T2(): Standard_Integer;
  E2(): Standard_Integer;
  Lambda2(): Standard_Real;
  GetAngle(): Standard_Real;
  ChainList(): Standard_Integer;
  GetEdgePoints(Triangle: IntPolyh_Triangle, FirstEdgePoint: Standard_Integer, SecondEdgePoint: Standard_Integer, LastPoint: Standard_Integer): Standard_Integer;
  SetXYZ(XX: Standard_Real, YY: Standard_Real, ZZ: Standard_Real): void;
  SetUV1(UU1: Standard_Real, VV1: Standard_Real): void;
  SetUV2(UU2: Standard_Real, VV2: Standard_Real): void;
  SetEdge1(IE1: Standard_Integer): void;
  SetLambda1(LAM1: Standard_Real): void;
  SetEdge2(IE2: Standard_Integer): void;
  SetLambda2(LAM2: Standard_Real): void;
  SetCoupleValue(IT1: Standard_Integer, IT2: Standard_Integer): void;
  SetAngle(ang: Standard_Real): void;
  SetChainList(ChList: Standard_Integer): void;
  CheckSameSP(SP: IntPolyh_StartPoint): Standard_Integer;
  Dump_1(): void;
  Dump_2(i: Standard_Integer): void;
}

  export declare class IntPolyh_StartPoint_1 extends IntPolyh_StartPoint {
    constructor();
  }

  export declare class IntPolyh_StartPoint_2 extends IntPolyh_StartPoint {
    constructor(xx: Standard_Real, yy: Standard_Real, zz: Standard_Real, uu1: Standard_Real, vv1: Standard_Real, uu2: Standard_Real, vv2: Standard_Real, T1: Standard_Integer, E1: Standard_Integer, LAM1: Standard_Real, T2: Standard_Integer, E2: Standard_Integer, LAM2: Standard_Real, List: Standard_Integer);
  }

export declare class IntPolyh_SectionLine {
  Init(nn: Standard_Integer): void;
  Value(nn: Standard_Integer): IntPolyh_StartPoint;
  ChangeValue(nn: Standard_Integer): IntPolyh_StartPoint;
  Copy(Other: IntPolyh_SectionLine): IntPolyh_SectionLine;
  GetN(): Standard_Integer;
  NbStartPoints(): Standard_Integer;
  IncrementNbStartPoints(): void;
  Destroy(): void;
  Dump(): void;
  Prepend(SP: IntPolyh_StartPoint): void;
}

  export declare class IntPolyh_SectionLine_1 extends IntPolyh_SectionLine {
    constructor();
  }

  export declare class IntPolyh_SectionLine_2 extends IntPolyh_SectionLine {
    constructor(nn: Standard_Integer);
  }

export declare class IntPolyh_Couple {
  FirstValue(): Standard_Integer;
  SecondValue(): Standard_Integer;
  IsAnalyzed(): Standard_Boolean;
  Angle(): Standard_Real;
  SetCoupleValue(theInd1: Standard_Integer, theInd2: Standard_Integer): void;
  SetAnalyzed(theAnalyzed: Standard_Boolean): void;
  SetAngle(theAngle: Standard_Real): void;
  IsEqual(theOther: IntPolyh_Couple): Standard_Boolean;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
  Dump(v: Standard_Integer): void;
}

  export declare class IntPolyh_Couple_1 extends IntPolyh_Couple {
    constructor();
  }

  export declare class IntPolyh_Couple_2 extends IntPolyh_Couple {
    constructor(theTriangle1: Standard_Integer, theTriangle2: Standard_Integer, theAngle: Standard_Real);
  }

export declare class IntPolyh_CoupleMapHasher {
  constructor();
  HashCode(theCouple: IntPolyh_Couple, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theCouple1: IntPolyh_Couple, theCouple2: IntPolyh_Couple): Standard_Boolean;
}

export declare class IntPolyh_Intersection {
  IsDone(): Standard_Boolean;
  NbSectionLines(): Standard_Integer;
  NbPointsInLine(IndexLine: Standard_Integer): Standard_Integer;
  NbTangentZones(): Standard_Integer;
  NbPointsInTangentZone(a0: Standard_Integer): Standard_Integer;
  GetLinePoint(IndexLine: Standard_Integer, IndexPoint: Standard_Integer, x: Standard_Real, y: Standard_Real, z: Standard_Real, u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real, incidence: Standard_Real): void;
  GetTangentZonePoint(IndexLine: Standard_Integer, IndexPoint: Standard_Integer, x: Standard_Real, y: Standard_Real, z: Standard_Real, u1: Standard_Real, v1: Standard_Real, u2: Standard_Real, v2: Standard_Real): void;
}

  export declare class IntPolyh_Intersection_1 extends IntPolyh_Intersection {
    constructor(theS1: any, theS2: any);
  }

  export declare class IntPolyh_Intersection_2 extends IntPolyh_Intersection {
    constructor(theS1: any, theNbSU1: Standard_Integer, theNbSV1: Standard_Integer, theS2: any, theNbSU2: Standard_Integer, theNbSV2: Standard_Integer);
  }

  export declare class IntPolyh_Intersection_3 extends IntPolyh_Intersection {
    constructor(theS1: any, theUPars1: TColStd_Array1OfReal, theVPars1: TColStd_Array1OfReal, theS2: any, theUPars2: TColStd_Array1OfReal, theVPars2: TColStd_Array1OfReal);
  }

export declare class IntPolyh_Tools {
  constructor();
  IsEnlargePossible(theSurf: any, theUEnlarge: Standard_Boolean, theVEnlarge: Standard_Boolean): void;
  MakeSampling(theSurf: any, theNbSU: Standard_Integer, theNbSV: Standard_Integer, theEnlargeZone: Standard_Boolean, theUPars: TColStd_Array1OfReal, theVPars: TColStd_Array1OfReal): void;
  ComputeDeflection(theSurf: any, theUPars: TColStd_Array1OfReal, theVPars: TColStd_Array1OfReal): Standard_Real;
  FillArrayOfPointNormal(theSurf: any, theUPars: TColStd_Array1OfReal, theVPars: TColStd_Array1OfReal, thePoints: IntPolyh_ArrayOfPointNormal): void;
}

export declare class IntPolyh_Triangle {
  FirstPoint(): Standard_Integer;
  SecondPoint(): Standard_Integer;
  ThirdPoint(): Standard_Integer;
  FirstEdge(): Standard_Integer;
  FirstEdgeOrientation(): Standard_Integer;
  SecondEdge(): Standard_Integer;
  SecondEdgeOrientation(): Standard_Integer;
  ThirdEdge(): Standard_Integer;
  ThirdEdgeOrientation(): Standard_Integer;
  Deflection(): Standard_Real;
  IsIntersectionPossible(): Standard_Boolean;
  HasIntersection(): Standard_Boolean;
  IsDegenerated(): Standard_Boolean;
  SetFirstPoint(thePoint: Standard_Integer): void;
  SetSecondPoint(thePoint: Standard_Integer): void;
  SetThirdPoint(thePoint: Standard_Integer): void;
  SetFirstEdge(theEdge: Standard_Integer, theEdgeOrientation: Standard_Integer): void;
  SetSecondEdge(theEdge: Standard_Integer, theEdgeOrientation: Standard_Integer): void;
  SetThirdEdge(theEdge: Standard_Integer, theEdgeOrientation: Standard_Integer): void;
  SetDeflection(theDeflection: Standard_Real): void;
  SetIntersectionPossible(theIP: Standard_Boolean): void;
  SetIntersection(theInt: Standard_Boolean): void;
  SetDegenerated(theDegFlag: Standard_Boolean): void;
  GetEdgeNumber(theEdgeIndex: Standard_Integer): Standard_Integer;
  SetEdge(theEdgeIndex: Standard_Integer, theEdgeNumber: Standard_Integer): void;
  GetEdgeOrientation(theEdgeIndex: Standard_Integer): Standard_Integer;
  SetEdgeOrientation(theEdgeIndex: Standard_Integer, theEdgeOrientation: Standard_Integer): void;
  ComputeDeflection(theSurface: any, thePoints: IntPolyh_ArrayOfPoints): Standard_Real;
  GetNextTriangle(theTriangle: Standard_Integer, theEdgeNum: Standard_Integer, TEdges: IntPolyh_ArrayOfEdges): Standard_Integer;
  MiddleRefinement(theTriangleNumber: Standard_Integer, theSurface: any, TPoints: IntPolyh_ArrayOfPoints, TTriangles: IntPolyh_ArrayOfTriangles, TEdges: IntPolyh_ArrayOfEdges): void;
  MultipleMiddleRefinement(theRefineCriterion: Standard_Real, theBox: Bnd_Box, theTriangleNumber: Standard_Integer, theSurface: any, TPoints: IntPolyh_ArrayOfPoints, TTriangles: IntPolyh_ArrayOfTriangles, TEdges: IntPolyh_ArrayOfEdges): void;
  LinkEdges2Triangle(TEdges: IntPolyh_ArrayOfEdges, theEdge1: Standard_Integer, theEdge2: Standard_Integer, theEdge3: Standard_Integer): void;
  SetEdgeAndOrientation(theEdge: IntPolyh_Edge, theEdgeIndex: Standard_Integer): void;
  BoundingBox(thePoints: IntPolyh_ArrayOfPoints): Bnd_Box;
  Dump(v: Standard_Integer): void;
}

  export declare class IntPolyh_Triangle_1 extends IntPolyh_Triangle {
    constructor();
  }

  export declare class IntPolyh_Triangle_2 extends IntPolyh_Triangle {
    constructor(thePoint1: Standard_Integer, thePoint2: Standard_Integer, thePoint3: Standard_Integer);
  }

export declare class IntStart_SITopolTool extends Standard_Transient {
  Classify(P: gp_Pnt2d, Tol: Standard_Real): TopAbs_State;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IntSurf {
  constructor();
  MakeTransition(TgFirst: gp_Vec, TgSecond: gp_Vec, Normal: gp_Dir, TFirst: IntSurf_Transition, TSecond: IntSurf_Transition): void;
  SetPeriod(theFirstSurf: any, theSecondSurf: any, theArrOfPeriod: Standard_Real [4]): void;
}

export declare class IntSurf_InteriorPointTool {
  constructor();
  Value3d(PStart: IntSurf_InteriorPoint): gp_Pnt;
  Value2d(PStart: IntSurf_InteriorPoint, U: Standard_Real, V: Standard_Real): void;
  Direction3d(PStart: IntSurf_InteriorPoint): gp_Vec;
  Direction2d(PStart: IntSurf_InteriorPoint): gp_Dir2d;
}

export declare class IntSurf_PathPointTool {
  constructor();
  Value3d(PStart: IntSurf_PathPoint): gp_Pnt;
  Value2d(PStart: IntSurf_PathPoint, U: Standard_Real, V: Standard_Real): void;
  IsPassingPnt(PStart: IntSurf_PathPoint): Standard_Boolean;
  IsTangent(PStart: IntSurf_PathPoint): Standard_Boolean;
  Direction3d(PStart: IntSurf_PathPoint): gp_Vec;
  Direction2d(PStart: IntSurf_PathPoint): gp_Dir2d;
  Multiplicity(PStart: IntSurf_PathPoint): Standard_Integer;
  Parameters(PStart: IntSurf_PathPoint, Mult: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
}

export declare class IntSurf_QuadricTool {
  constructor();
  Value(Quad: IntSurf_Quadric, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): Standard_Real;
  Gradient(Quad: IntSurf_Quadric, X: Standard_Real, Y: Standard_Real, Z: Standard_Real, V: gp_Vec): void;
  ValueAndGradient(Quad: IntSurf_Quadric, X: Standard_Real, Y: Standard_Real, Z: Standard_Real, Val: Standard_Real, Grad: gp_Vec): void;
  Tolerance(Quad: IntSurf_Quadric): Standard_Real;
}

export declare class IntWalk_TheFunctionOfTheInt2S extends math_FunctionSetWithDerivatives {
  constructor(S1: any, S2: any)
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
  AuxillarSurface1(): any;
  AuxillarSurface2(): any;
}

export declare class IntWalk_TheInt2S {
  Perform_1(Param: TColStd_Array1OfReal, Rsnld: math_FunctionSetRoot): IntImp_ConstIsoparametric;
  Perform_2(Param: TColStd_Array1OfReal, Rsnld: math_FunctionSetRoot, ChoixIso: IntImp_ConstIsoparametric): IntImp_ConstIsoparametric;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  Point(): IntSurf_PntOn2S;
  IsTangent(): Standard_Boolean;
  Direction(): gp_Dir;
  DirectionOnS1(): gp_Dir2d;
  DirectionOnS2(): gp_Dir2d;
  Function(): IntWalk_TheFunctionOfTheInt2S;
  ChangePoint(): IntSurf_PntOn2S;
}

  export declare class IntWalk_TheInt2S_1 extends IntWalk_TheInt2S {
    constructor(Param: TColStd_Array1OfReal, S1: any, S2: any, TolTangency: Standard_Real);
  }

  export declare class IntWalk_TheInt2S_2 extends IntWalk_TheInt2S {
    constructor(S1: any, S2: any, TolTangency: Standard_Real);
  }

export declare class IntWalk_PWalking {
  Perform_1(ParDep: TColStd_Array1OfReal): void;
  Perform_2(ParDep: TColStd_Array1OfReal, u1min: Standard_Real, v1min: Standard_Real, u2min: Standard_Real, v2min: Standard_Real, u1max: Standard_Real, v1max: Standard_Real, u2max: Standard_Real, v2max: Standard_Real): void;
  PerformFirstPoint(ParDep: TColStd_Array1OfReal, FirstPoint: IntSurf_PntOn2S): Standard_Boolean;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Value(Index: Standard_Integer): IntSurf_PntOn2S;
  Line(): any;
  TangentAtFirst(): Standard_Boolean;
  TangentAtLast(): Standard_Boolean;
  IsClosed(): Standard_Boolean;
  TangentAtLine(Index: Standard_Integer): gp_Dir;
  TestDeflection(ChoixIso: IntImp_ConstIsoparametric, theStatus: IntWalk_StatusDeflection): IntWalk_StatusDeflection;
  TestArret(DejaReparti: Standard_Boolean, Param: TColStd_Array1OfReal, ChoixIso: IntImp_ConstIsoparametric): Standard_Boolean;
  RepartirOuDiviser(DejaReparti: Standard_Boolean, ChoixIso: IntImp_ConstIsoparametric, Arrive: Standard_Boolean): void;
  AddAPoint(thePOn2S: IntSurf_PntOn2S): void;
  RemoveAPoint(theIndex: Standard_Integer): void;
  PutToBoundary(theASurf1: any, theASurf2: any): Standard_Boolean;
  SeekAdditionalPoints(theASurf1: any, theASurf2: any, theMinNbPoints: Standard_Integer): Standard_Boolean;
  MaxStep(theIndex: Standard_Integer): Standard_Real;
}

  export declare class IntWalk_PWalking_1 extends IntWalk_PWalking {
    constructor(Caro1: any, Caro2: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real);
  }

  export declare class IntWalk_PWalking_2 extends IntWalk_PWalking {
    constructor(Caro1: any, Caro2: any, TolTangency: Standard_Real, Epsilon: Standard_Real, Deflection: Standard_Real, Increment: Standard_Real, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real);
  }

export declare class Intf {
  constructor();
  PlaneEquation(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, NormalVector: gp_XYZ, PolarDistance: Standard_Real): void;
  Contain(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, ThePnt: gp_Pnt): Standard_Boolean;
}

export declare class Intf_Tool {
  constructor()
  Lin2dBox(theLin2d: gp_Lin2d, bounding: Bnd_Box2d, boxLin: Bnd_Box2d): void;
  Hypr2dBox(theHypr2d: gp_Hypr2d, bounding: Bnd_Box2d, boxHypr: Bnd_Box2d): void;
  Parab2dBox(theParab2d: gp_Parab2d, bounding: Bnd_Box2d, boxHypr: Bnd_Box2d): void;
  LinBox(theLin: gp_Lin, bounding: Bnd_Box, boxLin: Bnd_Box): void;
  HyprBox(theHypr: gp_Hypr, bounding: Bnd_Box, boxHypr: Bnd_Box): void;
  ParabBox(theParab: gp_Parab, bounding: Bnd_Box, boxHypr: Bnd_Box): void;
  NbSegments(): Standard_Integer;
  BeginParam(SegmentNum: Standard_Integer): Standard_Real;
  EndParam(SegmentNum: Standard_Integer): Standard_Real;
}

export declare class Law {
  constructor();
  MixBnd_1(Lin: any): any;
  MixBnd_2(Degree: Standard_Integer, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, Lin: any): any;
  MixTgt(Degree: Standard_Integer, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, NulOnTheRight: Standard_Boolean, Index: Standard_Integer): any;
  Reparametrize(Curve: Adaptor3d_Curve, First: Standard_Real, Last: Standard_Real, HasDF: Standard_Boolean, HasDL: Standard_Boolean, DFirst: Standard_Real, DLast: Standard_Real, Rev: Standard_Boolean, NbPoints: Standard_Integer): any;
  Scale(First: Standard_Real, Last: Standard_Real, HasF: Standard_Boolean, HasL: Standard_Boolean, VFirst: Standard_Real, VLast: Standard_Real): any;
  ScaleCub(First: Standard_Real, Last: Standard_Real, HasF: Standard_Boolean, HasL: Standard_Boolean, VFirst: Standard_Real, VLast: Standard_Real): any;
}

export declare class Law_BSpFunc extends Law_Function {
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Value(X: Standard_Real): Standard_Real;
  D1(X: Standard_Real, F: Standard_Real, D: Standard_Real): void;
  D2(X: Standard_Real, F: Standard_Real, D: Standard_Real, D2: Standard_Real): void;
  Trim(PFirst: Standard_Real, PLast: Standard_Real, Tol: Standard_Real): any;
  Bounds(PFirst: Standard_Real, PLast: Standard_Real): void;
  Curve(): any;
  SetCurve(C: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Law_BSpFunc_1 extends Law_BSpFunc {
    constructor();
  }

  export declare class Law_BSpFunc_2 extends Law_BSpFunc {
    constructor(C: any, First: Standard_Real, Last: Standard_Real);
  }

export declare class Law_BSpline extends Standard_Transient {
  IncreaseDegree(Degree: Standard_Integer): void;
  IncreaseMultiplicity_1(Index: Standard_Integer, M: Standard_Integer): void;
  IncreaseMultiplicity_2(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  IncrementMultiplicity(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  InsertKnot(U: Standard_Real, M: Standard_Integer, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  InsertKnots(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  RemoveKnot(Index: Standard_Integer, M: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Segment(U1: Standard_Real, U2: Standard_Real): void;
  SetKnot_1(Index: Standard_Integer, K: Standard_Real): void;
  SetKnots(K: TColStd_Array1OfReal): void;
  SetKnot_2(Index: Standard_Integer, K: Standard_Real, M: Standard_Integer): void;
  PeriodicNormalization(U: Standard_Real): void;
  SetPeriodic(): void;
  SetOrigin(Index: Standard_Integer): void;
  SetNotPeriodic(): void;
  SetPole_1(Index: Standard_Integer, P: Standard_Real): void;
  SetPole_2(Index: Standard_Integer, P: Standard_Real, Weight: Standard_Real): void;
  SetWeight(Index: Standard_Integer, Weight: Standard_Real): void;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  IsRational(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Degree(): Standard_Integer;
  Value(U: Standard_Real): Standard_Real;
  D0(U: Standard_Real, P: Standard_Real): void;
  D1(U: Standard_Real, P: Standard_Real, V1: Standard_Real): void;
  D2(U: Standard_Real, P: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  D3(U: Standard_Real, P: Standard_Real, V1: Standard_Real, V2: Standard_Real, V3: Standard_Real): void;
  DN(U: Standard_Real, N: Standard_Integer): Standard_Real;
  LocalValue(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer): Standard_Real;
  LocalD0(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: Standard_Real): void;
  LocalD1(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: Standard_Real, V1: Standard_Real): void;
  LocalD2(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  LocalD3(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: Standard_Real, V1: Standard_Real, V2: Standard_Real, V3: Standard_Real): void;
  LocalDN(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, N: Standard_Integer): Standard_Real;
  EndPoint(): Standard_Real;
  FirstUKnotIndex(): Standard_Integer;
  FirstParameter(): Standard_Real;
  Knot(Index: Standard_Integer): Standard_Real;
  Knots(K: TColStd_Array1OfReal): void;
  KnotSequence(K: TColStd_Array1OfReal): void;
  KnotDistribution(): GeomAbs_BSplKnotDistribution;
  LastUKnotIndex(): Standard_Integer;
  LastParameter(): Standard_Real;
  LocateU(U: Standard_Real, ParametricTolerance: Standard_Real, I1: Standard_Integer, I2: Standard_Integer, WithKnotRepetition: Standard_Boolean): void;
  Multiplicity(Index: Standard_Integer): Standard_Integer;
  Multiplicities(M: TColStd_Array1OfInteger): void;
  NbKnots(): Standard_Integer;
  NbPoles(): Standard_Integer;
  Pole(Index: Standard_Integer): Standard_Real;
  Poles(P: TColStd_Array1OfReal): void;
  StartPoint(): Standard_Real;
  Weight(Index: Standard_Integer): Standard_Real;
  Weights(W: TColStd_Array1OfReal): void;
  MaxDegree(): Standard_Integer;
  MovePointAndTangent(U: Standard_Real, NewValue: Standard_Real, Derivative: Standard_Real, Tolerance: Standard_Real, StartingCondition: Standard_Integer, EndingCondition: Standard_Integer, ErrorStatus: Standard_Integer): void;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real): void;
  Copy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Law_BSpline_1 extends Law_BSpline {
    constructor(Poles: TColStd_Array1OfReal, Knots: TColStd_Array1OfReal, Multiplicities: TColStd_Array1OfInteger, Degree: Standard_Integer, Periodic: Standard_Boolean);
  }

  export declare class Law_BSpline_2 extends Law_BSpline {
    constructor(Poles: TColStd_Array1OfReal, Weights: TColStd_Array1OfReal, Knots: TColStd_Array1OfReal, Multiplicities: TColStd_Array1OfInteger, Degree: Standard_Integer, Periodic: Standard_Boolean);
  }

export declare class Law_BSplineKnotSplitting {
  constructor(BasisLaw: any, ContinuityRange: Standard_Integer)
  NbSplits(): Standard_Integer;
  Splitting(SplitValues: TColStd_Array1OfInteger): void;
  SplitValue(Index: Standard_Integer): Standard_Integer;
}

export declare class Law_Composite extends Law_Function {
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Value(X: Standard_Real): Standard_Real;
  D1(X: Standard_Real, F: Standard_Real, D: Standard_Real): void;
  D2(X: Standard_Real, F: Standard_Real, D: Standard_Real, D2: Standard_Real): void;
  Trim(PFirst: Standard_Real, PLast: Standard_Real, Tol: Standard_Real): any;
  Bounds(PFirst: Standard_Real, PLast: Standard_Real): void;
  ChangeElementaryLaw(W: Standard_Real): any;
  ChangeLaws(): Law_Laws;
  IsPeriodic(): Standard_Boolean;
  SetPeriodic(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Law_Composite_1 extends Law_Composite {
    constructor();
  }

  export declare class Law_Composite_2 extends Law_Composite {
    constructor(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real);
  }

export declare class Law_Constant extends Law_Function {
  constructor()
  Set(Radius: Standard_Real, PFirst: Standard_Real, PLast: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Value(X: Standard_Real): Standard_Real;
  D1(X: Standard_Real, F: Standard_Real, D: Standard_Real): void;
  D2(X: Standard_Real, F: Standard_Real, D: Standard_Real, D2: Standard_Real): void;
  Trim(PFirst: Standard_Real, PLast: Standard_Real, Tol: Standard_Real): any;
  Bounds(PFirst: Standard_Real, PLast: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Law_Interpol extends Law_BSpFunc {
  constructor()
  Set_1(ParAndRad: TColgp_Array1OfPnt2d, Periodic: Standard_Boolean): void;
  SetInRelative_1(ParAndRad: TColgp_Array1OfPnt2d, Ud: Standard_Real, Uf: Standard_Real, Periodic: Standard_Boolean): void;
  Set_2(ParAndRad: TColgp_Array1OfPnt2d, Dd: Standard_Real, Df: Standard_Real, Periodic: Standard_Boolean): void;
  SetInRelative_2(ParAndRad: TColgp_Array1OfPnt2d, Ud: Standard_Real, Uf: Standard_Real, Dd: Standard_Real, Df: Standard_Real, Periodic: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Law_Linear extends Law_Function {
  constructor()
  Set(Pdeb: Standard_Real, Valdeb: Standard_Real, Pfin: Standard_Real, Valfin: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Value(X: Standard_Real): Standard_Real;
  D1(X: Standard_Real, F: Standard_Real, D: Standard_Real): void;
  D2(X: Standard_Real, F: Standard_Real, D: Standard_Real, D2: Standard_Real): void;
  Trim(PFirst: Standard_Real, PLast: Standard_Real, Tol: Standard_Real): any;
  Bounds(PFirst: Standard_Real, PLast: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Law_S extends Law_BSpFunc {
  constructor()
  Set_1(Pdeb: Standard_Real, Valdeb: Standard_Real, Pfin: Standard_Real, Valfin: Standard_Real): void;
  Set_2(Pdeb: Standard_Real, Valdeb: Standard_Real, Ddeb: Standard_Real, Pfin: Standard_Real, Valfin: Standard_Real, Dfin: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class LocalAnalysis {
  constructor();
  Dump_1(surfconti: LocalAnalysis_SurfaceContinuity, o: Standard_OStream): void;
  Dump_2(curvconti: LocalAnalysis_CurveContinuity, o: Standard_OStream): void;
}

export declare class LocalAnalysis_CurveContinuity {
  constructor(Curv1: any, u1: Standard_Real, Curv2: any, u2: Standard_Real, Order: GeomAbs_Shape, EpsNul: Standard_Real, EpsC0: Standard_Real, EpsC1: Standard_Real, EpsC2: Standard_Real, EpsG1: Standard_Real, EpsG2: Standard_Real, Percent: Standard_Real, Maxlen: Standard_Real)
  IsDone(): Standard_Boolean;
  StatusError(): LocalAnalysis_StatusErrorType;
  ContinuityStatus(): GeomAbs_Shape;
  C0Value(): Standard_Real;
  C1Angle(): Standard_Real;
  C1Ratio(): Standard_Real;
  C2Angle(): Standard_Real;
  C2Ratio(): Standard_Real;
  G1Angle(): Standard_Real;
  G2Angle(): Standard_Real;
  G2CurvatureVariation(): Standard_Real;
  IsC0(): Standard_Boolean;
  IsC1(): Standard_Boolean;
  IsC2(): Standard_Boolean;
  IsG1(): Standard_Boolean;
  IsG2(): Standard_Boolean;
}

export declare class LocalAnalysis_SurfaceContinuity {
  ComputeAnalysis(Surf1: GeomLProp_SLProps, Surf2: GeomLProp_SLProps, Order: GeomAbs_Shape): void;
  IsDone(): Standard_Boolean;
  ContinuityStatus(): GeomAbs_Shape;
  StatusError(): LocalAnalysis_StatusErrorType;
  C0Value(): Standard_Real;
  C1UAngle(): Standard_Real;
  C1URatio(): Standard_Real;
  C1VAngle(): Standard_Real;
  C1VRatio(): Standard_Real;
  C2UAngle(): Standard_Real;
  C2URatio(): Standard_Real;
  C2VAngle(): Standard_Real;
  C2VRatio(): Standard_Real;
  G1Angle(): Standard_Real;
  G2CurvatureGap(): Standard_Real;
  IsC0(): Standard_Boolean;
  IsC1(): Standard_Boolean;
  IsC2(): Standard_Boolean;
  IsG1(): Standard_Boolean;
  IsG2(): Standard_Boolean;
}

  export declare class LocalAnalysis_SurfaceContinuity_1 extends LocalAnalysis_SurfaceContinuity {
    constructor(Surf1: any, u1: Standard_Real, v1: Standard_Real, Surf2: any, u2: Standard_Real, v2: Standard_Real, Order: GeomAbs_Shape, EpsNul: Standard_Real, EpsC0: Standard_Real, EpsC1: Standard_Real, EpsC2: Standard_Real, EpsG1: Standard_Real, Percent: Standard_Real, Maxlen: Standard_Real);
  }

  export declare class LocalAnalysis_SurfaceContinuity_2 extends LocalAnalysis_SurfaceContinuity {
    constructor(curv1: any, curv2: any, U: Standard_Real, Surf1: any, Surf2: any, Order: GeomAbs_Shape, EpsNul: Standard_Real, EpsC0: Standard_Real, EpsC1: Standard_Real, EpsC2: Standard_Real, EpsG1: Standard_Real, Percent: Standard_Real, Maxlen: Standard_Real);
  }

  export declare class LocalAnalysis_SurfaceContinuity_3 extends LocalAnalysis_SurfaceContinuity {
    constructor(EpsNul: Standard_Real, EpsC0: Standard_Real, EpsC1: Standard_Real, EpsC2: Standard_Real, EpsG1: Standard_Real, Percent: Standard_Real, Maxlen: Standard_Real);
  }

export declare class NLPlate_HGPPConstraint extends Standard_Transient {
  SetUVFreeSliding(UVFree: Standard_Boolean): void;
  SetIncrementalLoadAllowed(ILA: Standard_Boolean): void;
  SetActiveOrder(ActiveOrder: Standard_Integer): void;
  SetUV(UV: gp_XY): void;
  SetOrientation(Orient: Standard_Integer): void;
  SetG0Criterion(TolDist: Standard_Real): void;
  SetG1Criterion(TolAng: Standard_Real): void;
  SetG2Criterion(TolCurv: Standard_Real): void;
  SetG3Criterion(TolG3: Standard_Real): void;
  UVFreeSliding(): Standard_Boolean;
  IncrementalLoadAllowed(): Standard_Boolean;
  ActiveOrder(): Standard_Integer;
  UV(): gp_XY;
  Orientation(): Standard_Integer;
  IsG0(): Standard_Boolean;
  G0Target(): gp_XYZ;
  G1Target(): Plate_D1;
  G2Target(): Plate_D2;
  G3Target(): Plate_D3;
  G0Criterion(): Standard_Real;
  G1Criterion(): Standard_Real;
  G2Criterion(): Standard_Real;
  G3Criterion(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NLPlate_HPG0Constraint extends NLPlate_HGPPConstraint {
  constructor(UV: gp_XY, Value: gp_XYZ)
  SetUVFreeSliding(UVFree: Standard_Boolean): void;
  SetIncrementalLoadAllowed(ILA: Standard_Boolean): void;
  UVFreeSliding(): Standard_Boolean;
  IncrementalLoadAllowed(): Standard_Boolean;
  ActiveOrder(): Standard_Integer;
  IsG0(): Standard_Boolean;
  G0Target(): gp_XYZ;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Plate_D1 {
  DU(): gp_XYZ;
  DV(): gp_XYZ;
}

  export declare class Plate_D1_1 extends Plate_D1 {
    constructor(du: gp_XYZ, dv: gp_XYZ);
  }

  export declare class Plate_D1_2 extends Plate_D1 {
    constructor(ref: Plate_D1);
  }

export declare class NLPlate_HPG0G1Constraint extends NLPlate_HPG0Constraint {
  constructor(UV: gp_XY, Value: gp_XYZ, D1T: Plate_D1)
  SetOrientation(Orient: Standard_Integer): void;
  ActiveOrder(): Standard_Integer;
  Orientation(): Standard_Integer;
  G1Target(): Plate_D1;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Plate_D2 {
}

  export declare class Plate_D2_1 extends Plate_D2 {
    constructor(duu: gp_XYZ, duv: gp_XYZ, dvv: gp_XYZ);
  }

  export declare class Plate_D2_2 extends Plate_D2 {
    constructor(ref: Plate_D2);
  }

export declare class NLPlate_HPG0G2Constraint extends NLPlate_HPG0G1Constraint {
  constructor(UV: gp_XY, Value: gp_XYZ, D1T: Plate_D1, D2T: Plate_D2)
  ActiveOrder(): Standard_Integer;
  G2Target(): Plate_D2;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Plate_D3 {
}

  export declare class Plate_D3_1 extends Plate_D3 {
    constructor(duuu: gp_XYZ, duuv: gp_XYZ, duvv: gp_XYZ, dvvv: gp_XYZ);
  }

  export declare class Plate_D3_2 extends Plate_D3 {
    constructor(ref: Plate_D3);
  }

export declare class NLPlate_HPG0G3Constraint extends NLPlate_HPG0G2Constraint {
  constructor(UV: gp_XY, Value: gp_XYZ, D1T: Plate_D1, D2T: Plate_D2, D3T: Plate_D3)
  ActiveOrder(): Standard_Integer;
  G3Target(): Plate_D3;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NLPlate_HPG1Constraint extends NLPlate_HGPPConstraint {
  constructor(UV: gp_XY, D1T: Plate_D1)
  SetIncrementalLoadAllowed(ILA: Standard_Boolean): void;
  SetOrientation(Orient: Standard_Integer): void;
  IncrementalLoadAllowed(): Standard_Boolean;
  ActiveOrder(): Standard_Integer;
  IsG0(): Standard_Boolean;
  Orientation(): Standard_Integer;
  G1Target(): Plate_D1;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NLPlate_HPG2Constraint extends NLPlate_HPG1Constraint {
  constructor(UV: gp_XY, D1T: Plate_D1, D2T: Plate_D2)
  ActiveOrder(): Standard_Integer;
  G2Target(): Plate_D2;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NLPlate_HPG3Constraint extends NLPlate_HPG2Constraint {
  constructor(UV: gp_XY, D1T: Plate_D1, D2T: Plate_D2, D3T: Plate_D3)
  ActiveOrder(): Standard_Integer;
  G3Target(): Plate_D3;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NLPlate_NLPlate {
  constructor(InitialSurface: any)
  Load(GConst: any): void;
  Solve(ord: Standard_Integer, InitialConsraintOrder: Standard_Integer): void;
  Solve2(ord: Standard_Integer, InitialConsraintOrder: Standard_Integer): void;
  IncrementalSolve(ord: Standard_Integer, InitialConsraintOrder: Standard_Integer, NbIncrements: Standard_Integer, UVSliding: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  destroy(): void;
  Init(): void;
  Evaluate(point2d: gp_XY): gp_XYZ;
  EvaluateDerivative(point2d: gp_XY, iu: Standard_Integer, iv: Standard_Integer): gp_XYZ;
  Continuity(): Standard_Integer;
  ConstraintsSliding(NbIterations: Standard_Integer): void;
  MaxActiveConstraintOrder(): Standard_Integer;
}

export declare class Plate_FreeGtoCConstraint {
  nb_PPC(): Standard_Integer;
  GetPPC(Index: Standard_Integer): Plate_PinpointConstraint;
  nb_LSC(): Standard_Integer;
  LSC(Index: Standard_Integer): Plate_LinearScalarConstraint;
}

  export declare class Plate_FreeGtoCConstraint_1 extends Plate_FreeGtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, IncrementalLoad: Standard_Real, orientation: Standard_Integer);
  }

  export declare class Plate_FreeGtoCConstraint_2 extends Plate_FreeGtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, D2S: Plate_D2, D2T: Plate_D2, IncrementalLoad: Standard_Real, orientation: Standard_Integer);
  }

  export declare class Plate_FreeGtoCConstraint_3 extends Plate_FreeGtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, D2S: Plate_D2, D2T: Plate_D2, D3S: Plate_D3, D3T: Plate_D3, IncrementalLoad: Standard_Real, orientation: Standard_Integer);
  }

export declare class Plate_GlobalTranslationConstraint {
  constructor(SOfXY: TColgp_SequenceOfXY)
  LXYZC(): Plate_LinearXYZConstraint;
}

export declare class Plate_GtoCConstraint {
  nb_PPC(): Standard_Integer;
  GetPPC(Index: Standard_Integer): Plate_PinpointConstraint;
  D1SurfInit(): Plate_D1;
}

  export declare class Plate_GtoCConstraint_1 extends Plate_GtoCConstraint {
    constructor(ref: Plate_GtoCConstraint);
  }

  export declare class Plate_GtoCConstraint_2 extends Plate_GtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1);
  }

  export declare class Plate_GtoCConstraint_3 extends Plate_GtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, nP: gp_XYZ);
  }

  export declare class Plate_GtoCConstraint_4 extends Plate_GtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, D2S: Plate_D2, D2T: Plate_D2);
  }

  export declare class Plate_GtoCConstraint_5 extends Plate_GtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, D2S: Plate_D2, D2T: Plate_D2, nP: gp_XYZ);
  }

  export declare class Plate_GtoCConstraint_6 extends Plate_GtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, D2S: Plate_D2, D2T: Plate_D2, D3S: Plate_D3, D3T: Plate_D3);
  }

  export declare class Plate_GtoCConstraint_7 extends Plate_GtoCConstraint {
    constructor(point2d: gp_XY, D1S: Plate_D1, D1T: Plate_D1, D2S: Plate_D2, D2T: Plate_D2, D3S: Plate_D3, D3T: Plate_D3, nP: gp_XYZ);
  }

export declare class Plate_LineConstraint {
  constructor(point2d: gp_XY, lin: gp_Lin, iu: Standard_Integer, iv: Standard_Integer)
  LSC(): Plate_LinearScalarConstraint;
}

export declare class Plate_PlaneConstraint {
  constructor(point2d: gp_XY, pln: gp_Pln, iu: Standard_Integer, iv: Standard_Integer)
  LSC(): Plate_LinearScalarConstraint;
}

export declare class Plate_SampledCurveConstraint {
  constructor(SOPPC: Plate_SequenceOfPinpointConstraint, n: Standard_Integer)
  LXYZC(): Plate_LinearXYZConstraint;
}

export declare class TopTrans_SurfaceTransition {
  constructor()
  Reset_1(Tgt: gp_Dir, Norm: gp_Dir, MaxD: gp_Dir, MinD: gp_Dir, MaxCurv: Standard_Real, MinCurv: Standard_Real): void;
  Reset_2(Tgt: gp_Dir, Norm: gp_Dir): void;
  Compare_1(Tole: Standard_Real, Norm: gp_Dir, MaxD: gp_Dir, MinD: gp_Dir, MaxCurv: Standard_Real, MinCurv: Standard_Real, S: TopAbs_Orientation, O: TopAbs_Orientation): void;
  Compare_2(Tole: Standard_Real, Norm: gp_Dir, S: TopAbs_Orientation, O: TopAbs_Orientation): void;
  StateBefore(): TopAbs_State;
  StateAfter(): TopAbs_State;
  GetBefore(Tran: TopAbs_Orientation): TopAbs_State;
  GetAfter(Tran: TopAbs_Orientation): TopAbs_State;
}

export declare class IntSurf_ListOfPntOn2S extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: IntSurf_ListOfPntOn2S): IntSurf_ListOfPntOn2S;
  Clear(theAllocator: IntSurf_Allocator): void;
  First_1(): IntSurf_PntOn2S;
  First_2(): IntSurf_PntOn2S;
  Last_1(): IntSurf_PntOn2S;
  Last_2(): IntSurf_PntOn2S;
  Append_1(theItem: IntSurf_PntOn2S): IntSurf_PntOn2S;
  Append_3(theOther: IntSurf_ListOfPntOn2S): void;
  Prepend_1(theItem: IntSurf_PntOn2S): IntSurf_PntOn2S;
  Prepend_2(theOther: IntSurf_ListOfPntOn2S): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class IntSurf_ListOfPntOn2S_1 extends IntSurf_ListOfPntOn2S {
    constructor();
  }

  export declare class IntSurf_ListOfPntOn2S_2 extends IntSurf_ListOfPntOn2S {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntSurf_ListOfPntOn2S_3 extends IntSurf_ListOfPntOn2S {
    constructor(theOther: IntSurf_ListOfPntOn2S);
  }

export declare class IntRes2d_SequenceOfIntersectionPoint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntRes2d_SequenceOfIntersectionPoint): IntRes2d_SequenceOfIntersectionPoint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntRes2d_IntersectionPoint): void;
  Append_2(theSeq: IntRes2d_SequenceOfIntersectionPoint): void;
  Prepend_1(theItem: IntRes2d_IntersectionPoint): void;
  Prepend_2(theSeq: IntRes2d_SequenceOfIntersectionPoint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntRes2d_IntersectionPoint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntRes2d_SequenceOfIntersectionPoint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntRes2d_SequenceOfIntersectionPoint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntRes2d_IntersectionPoint): void;
  Split(theIndex: Standard_Integer, theSeq: IntRes2d_SequenceOfIntersectionPoint): void;
  First(): IntRes2d_IntersectionPoint;
  ChangeFirst(): IntRes2d_IntersectionPoint;
  Last(): IntRes2d_IntersectionPoint;
  ChangeLast(): IntRes2d_IntersectionPoint;
  Value(theIndex: Standard_Integer): IntRes2d_IntersectionPoint;
  ChangeValue(theIndex: Standard_Integer): IntRes2d_IntersectionPoint;
  SetValue(theIndex: Standard_Integer, theItem: IntRes2d_IntersectionPoint): void;
}

  export declare class IntRes2d_SequenceOfIntersectionPoint_1 extends IntRes2d_SequenceOfIntersectionPoint {
    constructor();
  }

  export declare class IntRes2d_SequenceOfIntersectionPoint_2 extends IntRes2d_SequenceOfIntersectionPoint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntRes2d_SequenceOfIntersectionPoint_3 extends IntRes2d_SequenceOfIntersectionPoint {
    constructor(theOther: IntRes2d_SequenceOfIntersectionPoint);
  }

export declare class IntRes2d_SequenceOfIntersectionSegment extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntRes2d_SequenceOfIntersectionSegment): IntRes2d_SequenceOfIntersectionSegment;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntRes2d_IntersectionSegment): void;
  Append_2(theSeq: IntRes2d_SequenceOfIntersectionSegment): void;
  Prepend_1(theItem: IntRes2d_IntersectionSegment): void;
  Prepend_2(theSeq: IntRes2d_SequenceOfIntersectionSegment): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntRes2d_IntersectionSegment): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntRes2d_SequenceOfIntersectionSegment): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntRes2d_SequenceOfIntersectionSegment): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntRes2d_IntersectionSegment): void;
  Split(theIndex: Standard_Integer, theSeq: IntRes2d_SequenceOfIntersectionSegment): void;
  First(): IntRes2d_IntersectionSegment;
  ChangeFirst(): IntRes2d_IntersectionSegment;
  Last(): IntRes2d_IntersectionSegment;
  ChangeLast(): IntRes2d_IntersectionSegment;
  Value(theIndex: Standard_Integer): IntRes2d_IntersectionSegment;
  ChangeValue(theIndex: Standard_Integer): IntRes2d_IntersectionSegment;
  SetValue(theIndex: Standard_Integer, theItem: IntRes2d_IntersectionSegment): void;
}

  export declare class IntRes2d_SequenceOfIntersectionSegment_1 extends IntRes2d_SequenceOfIntersectionSegment {
    constructor();
  }

  export declare class IntRes2d_SequenceOfIntersectionSegment_2 extends IntRes2d_SequenceOfIntersectionSegment {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntRes2d_SequenceOfIntersectionSegment_3 extends IntRes2d_SequenceOfIntersectionSegment {
    constructor(theOther: IntRes2d_SequenceOfIntersectionSegment);
  }

export declare class Handle_GeomFill_LocationLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_LocationLaw): void;
  get(): GeomFill_LocationLaw;
}

  export declare class Handle_GeomFill_LocationLaw_1 extends Handle_GeomFill_LocationLaw {
    constructor();
  }

  export declare class Handle_GeomFill_LocationLaw_2 extends Handle_GeomFill_LocationLaw {
    constructor(thePtr: GeomFill_LocationLaw);
  }

  export declare class Handle_GeomFill_LocationLaw_3 extends Handle_GeomFill_LocationLaw {
    constructor(theHandle: Handle_GeomFill_LocationLaw);
  }

  export declare class Handle_GeomFill_LocationLaw_4 extends Handle_GeomFill_LocationLaw {
    constructor(theHandle: Handle_GeomFill_LocationLaw);
  }

export declare class Handle_GeomFill_HArray1OfLocationLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_HArray1OfLocationLaw): void;
  get(): GeomFill_HArray1OfLocationLaw;
}

  export declare class Handle_GeomFill_HArray1OfLocationLaw_1 extends Handle_GeomFill_HArray1OfLocationLaw {
    constructor();
  }

  export declare class Handle_GeomFill_HArray1OfLocationLaw_2 extends Handle_GeomFill_HArray1OfLocationLaw {
    constructor(thePtr: GeomFill_HArray1OfLocationLaw);
  }

  export declare class Handle_GeomFill_HArray1OfLocationLaw_3 extends Handle_GeomFill_HArray1OfLocationLaw {
    constructor(theHandle: Handle_GeomFill_HArray1OfLocationLaw);
  }

  export declare class Handle_GeomFill_HArray1OfLocationLaw_4 extends Handle_GeomFill_HArray1OfLocationLaw {
    constructor(theHandle: Handle_GeomFill_HArray1OfLocationLaw);
  }

export declare class Handle_GeomPlate_CurveConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomPlate_CurveConstraint): void;
  get(): GeomPlate_CurveConstraint;
}

  export declare class Handle_GeomPlate_CurveConstraint_1 extends Handle_GeomPlate_CurveConstraint {
    constructor();
  }

  export declare class Handle_GeomPlate_CurveConstraint_2 extends Handle_GeomPlate_CurveConstraint {
    constructor(thePtr: GeomPlate_CurveConstraint);
  }

  export declare class Handle_GeomPlate_CurveConstraint_3 extends Handle_GeomPlate_CurveConstraint {
    constructor(theHandle: Handle_GeomPlate_CurveConstraint);
  }

  export declare class Handle_GeomPlate_CurveConstraint_4 extends Handle_GeomPlate_CurveConstraint {
    constructor(theHandle: Handle_GeomPlate_CurveConstraint);
  }

export declare class Handle_GeomPlate_HSequenceOfCurveConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomPlate_HSequenceOfCurveConstraint): void;
  get(): GeomPlate_HSequenceOfCurveConstraint;
}

  export declare class Handle_GeomPlate_HSequenceOfCurveConstraint_1 extends Handle_GeomPlate_HSequenceOfCurveConstraint {
    constructor();
  }

  export declare class Handle_GeomPlate_HSequenceOfCurveConstraint_2 extends Handle_GeomPlate_HSequenceOfCurveConstraint {
    constructor(thePtr: GeomPlate_HSequenceOfCurveConstraint);
  }

  export declare class Handle_GeomPlate_HSequenceOfCurveConstraint_3 extends Handle_GeomPlate_HSequenceOfCurveConstraint {
    constructor(theHandle: Handle_GeomPlate_HSequenceOfCurveConstraint);
  }

  export declare class Handle_GeomPlate_HSequenceOfCurveConstraint_4 extends Handle_GeomPlate_HSequenceOfCurveConstraint {
    constructor(theHandle: Handle_GeomPlate_HSequenceOfCurveConstraint);
  }

export declare class GeomPlate_Array1OfSequenceOfReal {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TColStd_SequenceOfReal): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: GeomPlate_Array1OfSequenceOfReal): GeomPlate_Array1OfSequenceOfReal;
  Move(theOther: GeomPlate_Array1OfSequenceOfReal): GeomPlate_Array1OfSequenceOfReal;
  First(): TColStd_SequenceOfReal;
  ChangeFirst(): TColStd_SequenceOfReal;
  Last(): TColStd_SequenceOfReal;
  ChangeLast(): TColStd_SequenceOfReal;
  Value(theIndex: Standard_Integer): TColStd_SequenceOfReal;
  ChangeValue(theIndex: Standard_Integer): TColStd_SequenceOfReal;
  SetValue(theIndex: Standard_Integer, theItem: TColStd_SequenceOfReal): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class GeomPlate_Array1OfSequenceOfReal_1 extends GeomPlate_Array1OfSequenceOfReal {
    constructor();
  }

  export declare class GeomPlate_Array1OfSequenceOfReal_2 extends GeomPlate_Array1OfSequenceOfReal {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class GeomPlate_Array1OfSequenceOfReal_3 extends GeomPlate_Array1OfSequenceOfReal {
    constructor(theOther: GeomPlate_Array1OfSequenceOfReal);
  }

  export declare class GeomPlate_Array1OfSequenceOfReal_4 extends GeomPlate_Array1OfSequenceOfReal {
    constructor(theOther: GeomPlate_Array1OfSequenceOfReal);
  }

  export declare class GeomPlate_Array1OfSequenceOfReal_5 extends GeomPlate_Array1OfSequenceOfReal {
    constructor(theBegin: TColStd_SequenceOfReal, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_GeomPlate_HArray1OfSequenceOfReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomPlate_HArray1OfSequenceOfReal): void;
  get(): GeomPlate_HArray1OfSequenceOfReal;
}

  export declare class Handle_GeomPlate_HArray1OfSequenceOfReal_1 extends Handle_GeomPlate_HArray1OfSequenceOfReal {
    constructor();
  }

  export declare class Handle_GeomPlate_HArray1OfSequenceOfReal_2 extends Handle_GeomPlate_HArray1OfSequenceOfReal {
    constructor(thePtr: GeomPlate_HArray1OfSequenceOfReal);
  }

  export declare class Handle_GeomPlate_HArray1OfSequenceOfReal_3 extends Handle_GeomPlate_HArray1OfSequenceOfReal {
    constructor(theHandle: Handle_GeomPlate_HArray1OfSequenceOfReal);
  }

  export declare class Handle_GeomPlate_HArray1OfSequenceOfReal_4 extends Handle_GeomPlate_HArray1OfSequenceOfReal {
    constructor(theHandle: Handle_GeomPlate_HArray1OfSequenceOfReal);
  }

export declare class Handle_GeomPlate_PointConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomPlate_PointConstraint): void;
  get(): GeomPlate_PointConstraint;
}

  export declare class Handle_GeomPlate_PointConstraint_1 extends Handle_GeomPlate_PointConstraint {
    constructor();
  }

  export declare class Handle_GeomPlate_PointConstraint_2 extends Handle_GeomPlate_PointConstraint {
    constructor(thePtr: GeomPlate_PointConstraint);
  }

  export declare class Handle_GeomPlate_PointConstraint_3 extends Handle_GeomPlate_PointConstraint {
    constructor(theHandle: Handle_GeomPlate_PointConstraint);
  }

  export declare class Handle_GeomPlate_PointConstraint_4 extends Handle_GeomPlate_PointConstraint {
    constructor(theHandle: Handle_GeomPlate_PointConstraint);
  }

export declare class Handle_GeomPlate_HSequenceOfPointConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomPlate_HSequenceOfPointConstraint): void;
  get(): GeomPlate_HSequenceOfPointConstraint;
}

  export declare class Handle_GeomPlate_HSequenceOfPointConstraint_1 extends Handle_GeomPlate_HSequenceOfPointConstraint {
    constructor();
  }

  export declare class Handle_GeomPlate_HSequenceOfPointConstraint_2 extends Handle_GeomPlate_HSequenceOfPointConstraint {
    constructor(thePtr: GeomPlate_HSequenceOfPointConstraint);
  }

  export declare class Handle_GeomPlate_HSequenceOfPointConstraint_3 extends Handle_GeomPlate_HSequenceOfPointConstraint {
    constructor(theHandle: Handle_GeomPlate_HSequenceOfPointConstraint);
  }

  export declare class Handle_GeomPlate_HSequenceOfPointConstraint_4 extends Handle_GeomPlate_HSequenceOfPointConstraint {
    constructor(theHandle: Handle_GeomPlate_HSequenceOfPointConstraint);
  }

export declare class Plate_SequenceOfPinpointConstraint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Plate_SequenceOfPinpointConstraint): Plate_SequenceOfPinpointConstraint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Plate_PinpointConstraint): void;
  Append_2(theSeq: Plate_SequenceOfPinpointConstraint): void;
  Prepend_1(theItem: Plate_PinpointConstraint): void;
  Prepend_2(theSeq: Plate_SequenceOfPinpointConstraint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Plate_PinpointConstraint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Plate_SequenceOfPinpointConstraint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Plate_SequenceOfPinpointConstraint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Plate_PinpointConstraint): void;
  Split(theIndex: Standard_Integer, theSeq: Plate_SequenceOfPinpointConstraint): void;
  First(): Plate_PinpointConstraint;
  ChangeFirst(): Plate_PinpointConstraint;
  Last(): Plate_PinpointConstraint;
  ChangeLast(): Plate_PinpointConstraint;
  Value(theIndex: Standard_Integer): Plate_PinpointConstraint;
  ChangeValue(theIndex: Standard_Integer): Plate_PinpointConstraint;
  SetValue(theIndex: Standard_Integer, theItem: Plate_PinpointConstraint): void;
}

  export declare class Plate_SequenceOfPinpointConstraint_1 extends Plate_SequenceOfPinpointConstraint {
    constructor();
  }

  export declare class Plate_SequenceOfPinpointConstraint_2 extends Plate_SequenceOfPinpointConstraint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Plate_SequenceOfPinpointConstraint_3 extends Plate_SequenceOfPinpointConstraint {
    constructor(theOther: Plate_SequenceOfPinpointConstraint);
  }

export declare class Plate_Array1OfPinpointConstraint {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Plate_PinpointConstraint): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Plate_Array1OfPinpointConstraint): Plate_Array1OfPinpointConstraint;
  Move(theOther: Plate_Array1OfPinpointConstraint): Plate_Array1OfPinpointConstraint;
  First(): Plate_PinpointConstraint;
  ChangeFirst(): Plate_PinpointConstraint;
  Last(): Plate_PinpointConstraint;
  ChangeLast(): Plate_PinpointConstraint;
  Value(theIndex: Standard_Integer): Plate_PinpointConstraint;
  ChangeValue(theIndex: Standard_Integer): Plate_PinpointConstraint;
  SetValue(theIndex: Standard_Integer, theItem: Plate_PinpointConstraint): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Plate_Array1OfPinpointConstraint_1 extends Plate_Array1OfPinpointConstraint {
    constructor();
  }

  export declare class Plate_Array1OfPinpointConstraint_2 extends Plate_Array1OfPinpointConstraint {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Plate_Array1OfPinpointConstraint_3 extends Plate_Array1OfPinpointConstraint {
    constructor(theOther: Plate_Array1OfPinpointConstraint);
  }

  export declare class Plate_Array1OfPinpointConstraint_4 extends Plate_Array1OfPinpointConstraint {
    constructor(theOther: Plate_Array1OfPinpointConstraint);
  }

  export declare class Plate_Array1OfPinpointConstraint_5 extends Plate_Array1OfPinpointConstraint {
    constructor(theBegin: Plate_PinpointConstraint, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Plate_HArray1OfPinpointConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Plate_HArray1OfPinpointConstraint): void;
  get(): Plate_HArray1OfPinpointConstraint;
}

  export declare class Handle_Plate_HArray1OfPinpointConstraint_1 extends Handle_Plate_HArray1OfPinpointConstraint {
    constructor();
  }

  export declare class Handle_Plate_HArray1OfPinpointConstraint_2 extends Handle_Plate_HArray1OfPinpointConstraint {
    constructor(thePtr: Plate_HArray1OfPinpointConstraint);
  }

  export declare class Handle_Plate_HArray1OfPinpointConstraint_3 extends Handle_Plate_HArray1OfPinpointConstraint {
    constructor(theHandle: Handle_Plate_HArray1OfPinpointConstraint);
  }

  export declare class Handle_Plate_HArray1OfPinpointConstraint_4 extends Handle_Plate_HArray1OfPinpointConstraint {
    constructor(theHandle: Handle_Plate_HArray1OfPinpointConstraint);
  }

export declare class Plate_SequenceOfLinearXYZConstraint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Plate_SequenceOfLinearXYZConstraint): Plate_SequenceOfLinearXYZConstraint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Plate_LinearXYZConstraint): void;
  Append_2(theSeq: Plate_SequenceOfLinearXYZConstraint): void;
  Prepend_1(theItem: Plate_LinearXYZConstraint): void;
  Prepend_2(theSeq: Plate_SequenceOfLinearXYZConstraint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Plate_LinearXYZConstraint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Plate_SequenceOfLinearXYZConstraint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Plate_SequenceOfLinearXYZConstraint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Plate_LinearXYZConstraint): void;
  Split(theIndex: Standard_Integer, theSeq: Plate_SequenceOfLinearXYZConstraint): void;
  First(): Plate_LinearXYZConstraint;
  ChangeFirst(): Plate_LinearXYZConstraint;
  Last(): Plate_LinearXYZConstraint;
  ChangeLast(): Plate_LinearXYZConstraint;
  Value(theIndex: Standard_Integer): Plate_LinearXYZConstraint;
  ChangeValue(theIndex: Standard_Integer): Plate_LinearXYZConstraint;
  SetValue(theIndex: Standard_Integer, theItem: Plate_LinearXYZConstraint): void;
}

  export declare class Plate_SequenceOfLinearXYZConstraint_1 extends Plate_SequenceOfLinearXYZConstraint {
    constructor();
  }

  export declare class Plate_SequenceOfLinearXYZConstraint_2 extends Plate_SequenceOfLinearXYZConstraint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Plate_SequenceOfLinearXYZConstraint_3 extends Plate_SequenceOfLinearXYZConstraint {
    constructor(theOther: Plate_SequenceOfLinearXYZConstraint);
  }

export declare class Plate_SequenceOfLinearScalarConstraint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Plate_SequenceOfLinearScalarConstraint): Plate_SequenceOfLinearScalarConstraint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Plate_LinearScalarConstraint): void;
  Append_2(theSeq: Plate_SequenceOfLinearScalarConstraint): void;
  Prepend_1(theItem: Plate_LinearScalarConstraint): void;
  Prepend_2(theSeq: Plate_SequenceOfLinearScalarConstraint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Plate_LinearScalarConstraint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Plate_SequenceOfLinearScalarConstraint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Plate_SequenceOfLinearScalarConstraint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Plate_LinearScalarConstraint): void;
  Split(theIndex: Standard_Integer, theSeq: Plate_SequenceOfLinearScalarConstraint): void;
  First(): Plate_LinearScalarConstraint;
  ChangeFirst(): Plate_LinearScalarConstraint;
  Last(): Plate_LinearScalarConstraint;
  ChangeLast(): Plate_LinearScalarConstraint;
  Value(theIndex: Standard_Integer): Plate_LinearScalarConstraint;
  ChangeValue(theIndex: Standard_Integer): Plate_LinearScalarConstraint;
  SetValue(theIndex: Standard_Integer, theItem: Plate_LinearScalarConstraint): void;
}

  export declare class Plate_SequenceOfLinearScalarConstraint_1 extends Plate_SequenceOfLinearScalarConstraint {
    constructor();
  }

  export declare class Plate_SequenceOfLinearScalarConstraint_2 extends Plate_SequenceOfLinearScalarConstraint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Plate_SequenceOfLinearScalarConstraint_3 extends Plate_SequenceOfLinearScalarConstraint {
    constructor(theOther: Plate_SequenceOfLinearScalarConstraint);
  }

export declare class Handle_GeomPlate_HArray1OfHCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomPlate_HArray1OfHCurve): void;
  get(): GeomPlate_HArray1OfHCurve;
}

  export declare class Handle_GeomPlate_HArray1OfHCurve_1 extends Handle_GeomPlate_HArray1OfHCurve {
    constructor();
  }

  export declare class Handle_GeomPlate_HArray1OfHCurve_2 extends Handle_GeomPlate_HArray1OfHCurve {
    constructor(thePtr: GeomPlate_HArray1OfHCurve);
  }

  export declare class Handle_GeomPlate_HArray1OfHCurve_3 extends Handle_GeomPlate_HArray1OfHCurve {
    constructor(theHandle: Handle_GeomPlate_HArray1OfHCurve);
  }

  export declare class Handle_GeomPlate_HArray1OfHCurve_4 extends Handle_GeomPlate_HArray1OfHCurve {
    constructor(theHandle: Handle_GeomPlate_HArray1OfHCurve);
  }

export declare class GeomFill_SequenceOfTrsf extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: GeomFill_SequenceOfTrsf): GeomFill_SequenceOfTrsf;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Trsf): void;
  Append_2(theSeq: GeomFill_SequenceOfTrsf): void;
  Prepend_1(theItem: gp_Trsf): void;
  Prepend_2(theSeq: GeomFill_SequenceOfTrsf): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Trsf): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: GeomFill_SequenceOfTrsf): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: GeomFill_SequenceOfTrsf): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Trsf): void;
  Split(theIndex: Standard_Integer, theSeq: GeomFill_SequenceOfTrsf): void;
  First(): gp_Trsf;
  ChangeFirst(): gp_Trsf;
  Last(): gp_Trsf;
  ChangeLast(): gp_Trsf;
  Value(theIndex: Standard_Integer): gp_Trsf;
  ChangeValue(theIndex: Standard_Integer): gp_Trsf;
  SetValue(theIndex: Standard_Integer, theItem: gp_Trsf): void;
}

  export declare class GeomFill_SequenceOfTrsf_1 extends GeomFill_SequenceOfTrsf {
    constructor();
  }

  export declare class GeomFill_SequenceOfTrsf_2 extends GeomFill_SequenceOfTrsf {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class GeomFill_SequenceOfTrsf_3 extends GeomFill_SequenceOfTrsf {
    constructor(theOther: GeomFill_SequenceOfTrsf);
  }

export declare class Handle_GeomFill_SectionLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_SectionLaw): void;
  get(): GeomFill_SectionLaw;
}

  export declare class Handle_GeomFill_SectionLaw_1 extends Handle_GeomFill_SectionLaw {
    constructor();
  }

  export declare class Handle_GeomFill_SectionLaw_2 extends Handle_GeomFill_SectionLaw {
    constructor(thePtr: GeomFill_SectionLaw);
  }

  export declare class Handle_GeomFill_SectionLaw_3 extends Handle_GeomFill_SectionLaw {
    constructor(theHandle: Handle_GeomFill_SectionLaw);
  }

  export declare class Handle_GeomFill_SectionLaw_4 extends Handle_GeomFill_SectionLaw {
    constructor(theHandle: Handle_GeomFill_SectionLaw);
  }

export declare class Handle_GeomFill_HArray1OfSectionLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_HArray1OfSectionLaw): void;
  get(): GeomFill_HArray1OfSectionLaw;
}

  export declare class Handle_GeomFill_HArray1OfSectionLaw_1 extends Handle_GeomFill_HArray1OfSectionLaw {
    constructor();
  }

  export declare class Handle_GeomFill_HArray1OfSectionLaw_2 extends Handle_GeomFill_HArray1OfSectionLaw {
    constructor(thePtr: GeomFill_HArray1OfSectionLaw);
  }

  export declare class Handle_GeomFill_HArray1OfSectionLaw_3 extends Handle_GeomFill_HArray1OfSectionLaw {
    constructor(theHandle: Handle_GeomFill_HArray1OfSectionLaw);
  }

  export declare class Handle_GeomFill_HArray1OfSectionLaw_4 extends Handle_GeomFill_HArray1OfSectionLaw {
    constructor(theHandle: Handle_GeomFill_HArray1OfSectionLaw);
  }

export declare class IntCurveSurface_SequenceOfPnt extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntCurveSurface_SequenceOfPnt): IntCurveSurface_SequenceOfPnt;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntCurveSurface_IntersectionPoint): void;
  Append_2(theSeq: IntCurveSurface_SequenceOfPnt): void;
  Prepend_1(theItem: IntCurveSurface_IntersectionPoint): void;
  Prepend_2(theSeq: IntCurveSurface_SequenceOfPnt): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntCurveSurface_IntersectionPoint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntCurveSurface_SequenceOfPnt): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntCurveSurface_SequenceOfPnt): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntCurveSurface_IntersectionPoint): void;
  Split(theIndex: Standard_Integer, theSeq: IntCurveSurface_SequenceOfPnt): void;
  First(): IntCurveSurface_IntersectionPoint;
  ChangeFirst(): IntCurveSurface_IntersectionPoint;
  Last(): IntCurveSurface_IntersectionPoint;
  ChangeLast(): IntCurveSurface_IntersectionPoint;
  Value(theIndex: Standard_Integer): IntCurveSurface_IntersectionPoint;
  ChangeValue(theIndex: Standard_Integer): IntCurveSurface_IntersectionPoint;
  SetValue(theIndex: Standard_Integer, theItem: IntCurveSurface_IntersectionPoint): void;
}

  export declare class IntCurveSurface_SequenceOfPnt_1 extends IntCurveSurface_SequenceOfPnt {
    constructor();
  }

  export declare class IntCurveSurface_SequenceOfPnt_2 extends IntCurveSurface_SequenceOfPnt {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntCurveSurface_SequenceOfPnt_3 extends IntCurveSurface_SequenceOfPnt {
    constructor(theOther: IntCurveSurface_SequenceOfPnt);
  }

export declare class IntCurveSurface_SequenceOfSeg extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntCurveSurface_SequenceOfSeg): IntCurveSurface_SequenceOfSeg;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntCurveSurface_IntersectionSegment): void;
  Append_2(theSeq: IntCurveSurface_SequenceOfSeg): void;
  Prepend_1(theItem: IntCurveSurface_IntersectionSegment): void;
  Prepend_2(theSeq: IntCurveSurface_SequenceOfSeg): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntCurveSurface_IntersectionSegment): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntCurveSurface_SequenceOfSeg): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntCurveSurface_SequenceOfSeg): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntCurveSurface_IntersectionSegment): void;
  Split(theIndex: Standard_Integer, theSeq: IntCurveSurface_SequenceOfSeg): void;
  First(): IntCurveSurface_IntersectionSegment;
  ChangeFirst(): IntCurveSurface_IntersectionSegment;
  Last(): IntCurveSurface_IntersectionSegment;
  ChangeLast(): IntCurveSurface_IntersectionSegment;
  Value(theIndex: Standard_Integer): IntCurveSurface_IntersectionSegment;
  ChangeValue(theIndex: Standard_Integer): IntCurveSurface_IntersectionSegment;
  SetValue(theIndex: Standard_Integer, theItem: IntCurveSurface_IntersectionSegment): void;
}

  export declare class IntCurveSurface_SequenceOfSeg_1 extends IntCurveSurface_SequenceOfSeg {
    constructor();
  }

  export declare class IntCurveSurface_SequenceOfSeg_2 extends IntCurveSurface_SequenceOfSeg {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntCurveSurface_SequenceOfSeg_3 extends IntCurveSurface_SequenceOfSeg {
    constructor(theOther: IntCurveSurface_SequenceOfSeg);
  }

export declare class IntSurf_SequenceOfPntOn2S extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntSurf_SequenceOfPntOn2S): IntSurf_SequenceOfPntOn2S;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntSurf_PntOn2S): void;
  Append_2(theSeq: IntSurf_SequenceOfPntOn2S): void;
  Prepend_1(theItem: IntSurf_PntOn2S): void;
  Prepend_2(theSeq: IntSurf_SequenceOfPntOn2S): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntSurf_PntOn2S): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfPntOn2S): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfPntOn2S): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntSurf_PntOn2S): void;
  Split(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfPntOn2S): void;
  First(): IntSurf_PntOn2S;
  ChangeFirst(): IntSurf_PntOn2S;
  Last(): IntSurf_PntOn2S;
  ChangeLast(): IntSurf_PntOn2S;
  Value(theIndex: Standard_Integer): IntSurf_PntOn2S;
  ChangeValue(theIndex: Standard_Integer): IntSurf_PntOn2S;
  SetValue(theIndex: Standard_Integer, theItem: IntSurf_PntOn2S): void;
}

  export declare class IntSurf_SequenceOfPntOn2S_1 extends IntSurf_SequenceOfPntOn2S {
    constructor();
  }

  export declare class IntSurf_SequenceOfPntOn2S_2 extends IntSurf_SequenceOfPntOn2S {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntSurf_SequenceOfPntOn2S_3 extends IntSurf_SequenceOfPntOn2S {
    constructor(theOther: IntSurf_SequenceOfPntOn2S);
  }

export declare class Handle_IntSurf_LineOn2S {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntSurf_LineOn2S): void;
  get(): IntSurf_LineOn2S;
}

  export declare class Handle_IntSurf_LineOn2S_1 extends Handle_IntSurf_LineOn2S {
    constructor();
  }

  export declare class Handle_IntSurf_LineOn2S_2 extends Handle_IntSurf_LineOn2S {
    constructor(thePtr: IntSurf_LineOn2S);
  }

  export declare class Handle_IntSurf_LineOn2S_3 extends Handle_IntSurf_LineOn2S {
    constructor(theHandle: Handle_IntSurf_LineOn2S);
  }

  export declare class Handle_IntSurf_LineOn2S_4 extends Handle_IntSurf_LineOn2S {
    constructor(theHandle: Handle_IntSurf_LineOn2S);
  }

export declare class Handle_GeomFill_Boundary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_Boundary): void;
  get(): GeomFill_Boundary;
}

  export declare class Handle_GeomFill_Boundary_1 extends Handle_GeomFill_Boundary {
    constructor();
  }

  export declare class Handle_GeomFill_Boundary_2 extends Handle_GeomFill_Boundary {
    constructor(thePtr: GeomFill_Boundary);
  }

  export declare class Handle_GeomFill_Boundary_3 extends Handle_GeomFill_Boundary {
    constructor(theHandle: Handle_GeomFill_Boundary);
  }

  export declare class Handle_GeomFill_Boundary_4 extends Handle_GeomFill_Boundary {
    constructor(theHandle: Handle_GeomFill_Boundary);
  }

export declare class Handle_GeomFill_BoundWithSurf {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_BoundWithSurf): void;
  get(): GeomFill_BoundWithSurf;
}

  export declare class Handle_GeomFill_BoundWithSurf_1 extends Handle_GeomFill_BoundWithSurf {
    constructor();
  }

  export declare class Handle_GeomFill_BoundWithSurf_2 extends Handle_GeomFill_BoundWithSurf {
    constructor(thePtr: GeomFill_BoundWithSurf);
  }

  export declare class Handle_GeomFill_BoundWithSurf_3 extends Handle_GeomFill_BoundWithSurf {
    constructor(theHandle: Handle_GeomFill_BoundWithSurf);
  }

  export declare class Handle_GeomFill_BoundWithSurf_4 extends Handle_GeomFill_BoundWithSurf {
    constructor(theHandle: Handle_GeomFill_BoundWithSurf);
  }

export declare class Handle_GeomFill_SimpleBound {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_SimpleBound): void;
  get(): GeomFill_SimpleBound;
}

  export declare class Handle_GeomFill_SimpleBound_1 extends Handle_GeomFill_SimpleBound {
    constructor();
  }

  export declare class Handle_GeomFill_SimpleBound_2 extends Handle_GeomFill_SimpleBound {
    constructor(thePtr: GeomFill_SimpleBound);
  }

  export declare class Handle_GeomFill_SimpleBound_3 extends Handle_GeomFill_SimpleBound {
    constructor(theHandle: Handle_GeomFill_SimpleBound);
  }

  export declare class Handle_GeomFill_SimpleBound_4 extends Handle_GeomFill_SimpleBound {
    constructor(theHandle: Handle_GeomFill_SimpleBound);
  }

export declare class Handle_Law_Function {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_Function): void;
  get(): Law_Function;
}

  export declare class Handle_Law_Function_1 extends Handle_Law_Function {
    constructor();
  }

  export declare class Handle_Law_Function_2 extends Handle_Law_Function {
    constructor(thePtr: Law_Function);
  }

  export declare class Handle_Law_Function_3 extends Handle_Law_Function {
    constructor(theHandle: Handle_Law_Function);
  }

  export declare class Handle_Law_Function_4 extends Handle_Law_Function {
    constructor(theHandle: Handle_Law_Function);
  }

export declare class IntSurf_SequenceOfInteriorPoint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntSurf_SequenceOfInteriorPoint): IntSurf_SequenceOfInteriorPoint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntSurf_InteriorPoint): void;
  Append_2(theSeq: IntSurf_SequenceOfInteriorPoint): void;
  Prepend_1(theItem: IntSurf_InteriorPoint): void;
  Prepend_2(theSeq: IntSurf_SequenceOfInteriorPoint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntSurf_InteriorPoint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfInteriorPoint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfInteriorPoint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntSurf_InteriorPoint): void;
  Split(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfInteriorPoint): void;
  First(): IntSurf_InteriorPoint;
  ChangeFirst(): IntSurf_InteriorPoint;
  Last(): IntSurf_InteriorPoint;
  ChangeLast(): IntSurf_InteriorPoint;
  Value(theIndex: Standard_Integer): IntSurf_InteriorPoint;
  ChangeValue(theIndex: Standard_Integer): IntSurf_InteriorPoint;
  SetValue(theIndex: Standard_Integer, theItem: IntSurf_InteriorPoint): void;
}

  export declare class IntSurf_SequenceOfInteriorPoint_1 extends IntSurf_SequenceOfInteriorPoint {
    constructor();
  }

  export declare class IntSurf_SequenceOfInteriorPoint_2 extends IntSurf_SequenceOfInteriorPoint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntSurf_SequenceOfInteriorPoint_3 extends IntSurf_SequenceOfInteriorPoint {
    constructor(theOther: IntSurf_SequenceOfInteriorPoint);
  }

export declare class IntSurf_SequenceOfCouple extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntSurf_SequenceOfCouple): IntSurf_SequenceOfCouple;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntSurf_Couple): void;
  Append_2(theSeq: IntSurf_SequenceOfCouple): void;
  Prepend_1(theItem: IntSurf_Couple): void;
  Prepend_2(theSeq: IntSurf_SequenceOfCouple): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntSurf_Couple): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfCouple): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfCouple): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntSurf_Couple): void;
  Split(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfCouple): void;
  First(): IntSurf_Couple;
  ChangeFirst(): IntSurf_Couple;
  Last(): IntSurf_Couple;
  ChangeLast(): IntSurf_Couple;
  Value(theIndex: Standard_Integer): IntSurf_Couple;
  ChangeValue(theIndex: Standard_Integer): IntSurf_Couple;
  SetValue(theIndex: Standard_Integer, theItem: IntSurf_Couple): void;
}

  export declare class IntSurf_SequenceOfCouple_1 extends IntSurf_SequenceOfCouple {
    constructor();
  }

  export declare class IntSurf_SequenceOfCouple_2 extends IntSurf_SequenceOfCouple {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntSurf_SequenceOfCouple_3 extends IntSurf_SequenceOfCouple {
    constructor(theOther: IntSurf_SequenceOfCouple);
  }

export declare class IntSurf_SequenceOfPathPoint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntSurf_SequenceOfPathPoint): IntSurf_SequenceOfPathPoint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntSurf_PathPoint): void;
  Append_2(theSeq: IntSurf_SequenceOfPathPoint): void;
  Prepend_1(theItem: IntSurf_PathPoint): void;
  Prepend_2(theSeq: IntSurf_SequenceOfPathPoint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntSurf_PathPoint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfPathPoint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfPathPoint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntSurf_PathPoint): void;
  Split(theIndex: Standard_Integer, theSeq: IntSurf_SequenceOfPathPoint): void;
  First(): IntSurf_PathPoint;
  ChangeFirst(): IntSurf_PathPoint;
  Last(): IntSurf_PathPoint;
  ChangeLast(): IntSurf_PathPoint;
  Value(theIndex: Standard_Integer): IntSurf_PathPoint;
  ChangeValue(theIndex: Standard_Integer): IntSurf_PathPoint;
  SetValue(theIndex: Standard_Integer, theItem: IntSurf_PathPoint): void;
}

  export declare class IntSurf_SequenceOfPathPoint_1 extends IntSurf_SequenceOfPathPoint {
    constructor();
  }

  export declare class IntSurf_SequenceOfPathPoint_2 extends IntSurf_SequenceOfPathPoint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntSurf_SequenceOfPathPoint_3 extends IntSurf_SequenceOfPathPoint {
    constructor(theOther: IntSurf_SequenceOfPathPoint);
  }

export declare class Geom2dHatch_MapOfElements extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Geom2dHatch_MapOfElements): void;
  Assign(theOther: Geom2dHatch_MapOfElements): Geom2dHatch_MapOfElements;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Geom2dHatch_Element): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Geom2dHatch_Element): Geom2dHatch_Element;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Geom2dHatch_Element;
  Find_1(theKey: Standard_Integer): Geom2dHatch_Element;
  Find_2(theKey: Standard_Integer, theValue: Geom2dHatch_Element): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Geom2dHatch_Element;
  ChangeFind(theKey: Standard_Integer): Geom2dHatch_Element;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: IntSurf_Allocator): void;
  Size(): Standard_Integer;
}

  export declare class Geom2dHatch_MapOfElements_1 extends Geom2dHatch_MapOfElements {
    constructor();
  }

  export declare class Geom2dHatch_MapOfElements_2 extends Geom2dHatch_MapOfElements {
    constructor(theNbBuckets: Standard_Integer, theAllocator: IntSurf_Allocator);
  }

  export declare class Geom2dHatch_MapOfElements_3 extends Geom2dHatch_MapOfElements {
    constructor(theOther: Geom2dHatch_MapOfElements);
  }

export declare class HatchGen_PointsOnElement extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: HatchGen_PointsOnElement): HatchGen_PointsOnElement;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: HatchGen_PointOnElement): void;
  Append_2(theSeq: HatchGen_PointsOnElement): void;
  Prepend_1(theItem: HatchGen_PointOnElement): void;
  Prepend_2(theSeq: HatchGen_PointsOnElement): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: HatchGen_PointOnElement): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: HatchGen_PointsOnElement): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: HatchGen_PointsOnElement): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: HatchGen_PointOnElement): void;
  Split(theIndex: Standard_Integer, theSeq: HatchGen_PointsOnElement): void;
  First(): HatchGen_PointOnElement;
  ChangeFirst(): HatchGen_PointOnElement;
  Last(): HatchGen_PointOnElement;
  ChangeLast(): HatchGen_PointOnElement;
  Value(theIndex: Standard_Integer): HatchGen_PointOnElement;
  ChangeValue(theIndex: Standard_Integer): HatchGen_PointOnElement;
  SetValue(theIndex: Standard_Integer, theItem: HatchGen_PointOnElement): void;
}

  export declare class HatchGen_PointsOnElement_1 extends HatchGen_PointsOnElement {
    constructor();
  }

  export declare class HatchGen_PointsOnElement_2 extends HatchGen_PointsOnElement {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class HatchGen_PointsOnElement_3 extends HatchGen_PointsOnElement {
    constructor(theOther: HatchGen_PointsOnElement);
  }

export declare class HatchGen_PointsOnHatching extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: HatchGen_PointsOnHatching): HatchGen_PointsOnHatching;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: HatchGen_PointOnHatching): void;
  Append_2(theSeq: HatchGen_PointsOnHatching): void;
  Prepend_1(theItem: HatchGen_PointOnHatching): void;
  Prepend_2(theSeq: HatchGen_PointsOnHatching): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: HatchGen_PointOnHatching): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: HatchGen_PointsOnHatching): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: HatchGen_PointsOnHatching): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: HatchGen_PointOnHatching): void;
  Split(theIndex: Standard_Integer, theSeq: HatchGen_PointsOnHatching): void;
  First(): HatchGen_PointOnHatching;
  ChangeFirst(): HatchGen_PointOnHatching;
  Last(): HatchGen_PointOnHatching;
  ChangeLast(): HatchGen_PointOnHatching;
  Value(theIndex: Standard_Integer): HatchGen_PointOnHatching;
  ChangeValue(theIndex: Standard_Integer): HatchGen_PointOnHatching;
  SetValue(theIndex: Standard_Integer, theItem: HatchGen_PointOnHatching): void;
}

  export declare class HatchGen_PointsOnHatching_1 extends HatchGen_PointsOnHatching {
    constructor();
  }

  export declare class HatchGen_PointsOnHatching_2 extends HatchGen_PointsOnHatching {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class HatchGen_PointsOnHatching_3 extends HatchGen_PointsOnHatching {
    constructor(theOther: HatchGen_PointsOnHatching);
  }

export declare class HatchGen_Domains extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: HatchGen_Domains): HatchGen_Domains;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: HatchGen_Domain): void;
  Append_2(theSeq: HatchGen_Domains): void;
  Prepend_1(theItem: HatchGen_Domain): void;
  Prepend_2(theSeq: HatchGen_Domains): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: HatchGen_Domain): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: HatchGen_Domains): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: HatchGen_Domains): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: HatchGen_Domain): void;
  Split(theIndex: Standard_Integer, theSeq: HatchGen_Domains): void;
  First(): HatchGen_Domain;
  ChangeFirst(): HatchGen_Domain;
  Last(): HatchGen_Domain;
  ChangeLast(): HatchGen_Domain;
  Value(theIndex: Standard_Integer): HatchGen_Domain;
  ChangeValue(theIndex: Standard_Integer): HatchGen_Domain;
  SetValue(theIndex: Standard_Integer, theItem: HatchGen_Domain): void;
}

  export declare class HatchGen_Domains_1 extends HatchGen_Domains {
    constructor();
  }

  export declare class HatchGen_Domains_2 extends HatchGen_Domains {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class HatchGen_Domains_3 extends HatchGen_Domains {
    constructor(theOther: HatchGen_Domains);
  }

export declare class Geom2dHatch_Hatchings extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Geom2dHatch_Hatchings): void;
  Assign(theOther: Geom2dHatch_Hatchings): Geom2dHatch_Hatchings;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Geom2dHatch_Hatching): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Geom2dHatch_Hatching): Geom2dHatch_Hatching;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Geom2dHatch_Hatching;
  Find_1(theKey: Standard_Integer): Geom2dHatch_Hatching;
  Find_2(theKey: Standard_Integer, theValue: Geom2dHatch_Hatching): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Geom2dHatch_Hatching;
  ChangeFind(theKey: Standard_Integer): Geom2dHatch_Hatching;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: IntSurf_Allocator): void;
  Size(): Standard_Integer;
}

  export declare class Geom2dHatch_Hatchings_1 extends Geom2dHatch_Hatchings {
    constructor();
  }

  export declare class Geom2dHatch_Hatchings_2 extends Geom2dHatch_Hatchings {
    constructor(theNbBuckets: Standard_Integer, theAllocator: IntSurf_Allocator);
  }

  export declare class Geom2dHatch_Hatchings_3 extends Geom2dHatch_Hatchings {
    constructor(theOther: Geom2dHatch_Hatchings);
  }

export declare class GccEnt_Array1OfPosition {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: GccEnt_Position): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: GccEnt_Array1OfPosition): GccEnt_Array1OfPosition;
  Move(theOther: GccEnt_Array1OfPosition): GccEnt_Array1OfPosition;
  First(): GccEnt_Position;
  ChangeFirst(): GccEnt_Position;
  Last(): GccEnt_Position;
  ChangeLast(): GccEnt_Position;
  Value(theIndex: Standard_Integer): GccEnt_Position;
  ChangeValue(theIndex: Standard_Integer): GccEnt_Position;
  SetValue(theIndex: Standard_Integer, theItem: GccEnt_Position): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class GccEnt_Array1OfPosition_1 extends GccEnt_Array1OfPosition {
    constructor();
  }

  export declare class GccEnt_Array1OfPosition_2 extends GccEnt_Array1OfPosition {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class GccEnt_Array1OfPosition_3 extends GccEnt_Array1OfPosition {
    constructor(theOther: GccEnt_Array1OfPosition);
  }

  export declare class GccEnt_Array1OfPosition_4 extends GccEnt_Array1OfPosition {
    constructor(theOther: GccEnt_Array1OfPosition);
  }

  export declare class GccEnt_Array1OfPosition_5 extends GccEnt_Array1OfPosition {
    constructor(theBegin: GccEnt_Position, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_GccAna_NoSolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccAna_NoSolution): void;
  get(): GccAna_NoSolution;
}

  export declare class Handle_GccAna_NoSolution_1 extends Handle_GccAna_NoSolution {
    constructor();
  }

  export declare class Handle_GccAna_NoSolution_2 extends Handle_GccAna_NoSolution {
    constructor(thePtr: GccAna_NoSolution);
  }

  export declare class Handle_GccAna_NoSolution_3 extends Handle_GccAna_NoSolution {
    constructor(theHandle: Handle_GccAna_NoSolution);
  }

  export declare class Handle_GccAna_NoSolution_4 extends Handle_GccAna_NoSolution {
    constructor(theHandle: Handle_GccAna_NoSolution);
  }

export declare class Handle_GccEnt_BadQualifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccEnt_BadQualifier): void;
  get(): GccEnt_BadQualifier;
}

  export declare class Handle_GccEnt_BadQualifier_1 extends Handle_GccEnt_BadQualifier {
    constructor();
  }

  export declare class Handle_GccEnt_BadQualifier_2 extends Handle_GccEnt_BadQualifier {
    constructor(thePtr: GccEnt_BadQualifier);
  }

  export declare class Handle_GccEnt_BadQualifier_3 extends Handle_GccEnt_BadQualifier {
    constructor(theHandle: Handle_GccEnt_BadQualifier);
  }

  export declare class Handle_GccEnt_BadQualifier_4 extends Handle_GccEnt_BadQualifier {
    constructor(theHandle: Handle_GccEnt_BadQualifier);
  }

export declare class Handle_GccInt_Bisec {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccInt_Bisec): void;
  get(): GccInt_Bisec;
}

  export declare class Handle_GccInt_Bisec_1 extends Handle_GccInt_Bisec {
    constructor();
  }

  export declare class Handle_GccInt_Bisec_2 extends Handle_GccInt_Bisec {
    constructor(thePtr: GccInt_Bisec);
  }

  export declare class Handle_GccInt_Bisec_3 extends Handle_GccInt_Bisec {
    constructor(theHandle: Handle_GccInt_Bisec);
  }

  export declare class Handle_GccInt_Bisec_4 extends Handle_GccInt_Bisec {
    constructor(theHandle: Handle_GccInt_Bisec);
  }

export declare class Handle_GccInt_BCirc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccInt_BCirc): void;
  get(): GccInt_BCirc;
}

  export declare class Handle_GccInt_BCirc_1 extends Handle_GccInt_BCirc {
    constructor();
  }

  export declare class Handle_GccInt_BCirc_2 extends Handle_GccInt_BCirc {
    constructor(thePtr: GccInt_BCirc);
  }

  export declare class Handle_GccInt_BCirc_3 extends Handle_GccInt_BCirc {
    constructor(theHandle: Handle_GccInt_BCirc);
  }

  export declare class Handle_GccInt_BCirc_4 extends Handle_GccInt_BCirc {
    constructor(theHandle: Handle_GccInt_BCirc);
  }

export declare class Handle_GccInt_BElips {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccInt_BElips): void;
  get(): GccInt_BElips;
}

  export declare class Handle_GccInt_BElips_1 extends Handle_GccInt_BElips {
    constructor();
  }

  export declare class Handle_GccInt_BElips_2 extends Handle_GccInt_BElips {
    constructor(thePtr: GccInt_BElips);
  }

  export declare class Handle_GccInt_BElips_3 extends Handle_GccInt_BElips {
    constructor(theHandle: Handle_GccInt_BElips);
  }

  export declare class Handle_GccInt_BElips_4 extends Handle_GccInt_BElips {
    constructor(theHandle: Handle_GccInt_BElips);
  }

export declare class Handle_GccInt_BHyper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccInt_BHyper): void;
  get(): GccInt_BHyper;
}

  export declare class Handle_GccInt_BHyper_1 extends Handle_GccInt_BHyper {
    constructor();
  }

  export declare class Handle_GccInt_BHyper_2 extends Handle_GccInt_BHyper {
    constructor(thePtr: GccInt_BHyper);
  }

  export declare class Handle_GccInt_BHyper_3 extends Handle_GccInt_BHyper {
    constructor(theHandle: Handle_GccInt_BHyper);
  }

  export declare class Handle_GccInt_BHyper_4 extends Handle_GccInt_BHyper {
    constructor(theHandle: Handle_GccInt_BHyper);
  }

export declare class Handle_GccInt_BLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccInt_BLine): void;
  get(): GccInt_BLine;
}

  export declare class Handle_GccInt_BLine_1 extends Handle_GccInt_BLine {
    constructor();
  }

  export declare class Handle_GccInt_BLine_2 extends Handle_GccInt_BLine {
    constructor(thePtr: GccInt_BLine);
  }

  export declare class Handle_GccInt_BLine_3 extends Handle_GccInt_BLine {
    constructor(theHandle: Handle_GccInt_BLine);
  }

  export declare class Handle_GccInt_BLine_4 extends Handle_GccInt_BLine {
    constructor(theHandle: Handle_GccInt_BLine);
  }

export declare class Handle_GccInt_BParab {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccInt_BParab): void;
  get(): GccInt_BParab;
}

  export declare class Handle_GccInt_BParab_1 extends Handle_GccInt_BParab {
    constructor();
  }

  export declare class Handle_GccInt_BParab_2 extends Handle_GccInt_BParab {
    constructor(thePtr: GccInt_BParab);
  }

  export declare class Handle_GccInt_BParab_3 extends Handle_GccInt_BParab {
    constructor(theHandle: Handle_GccInt_BParab);
  }

  export declare class Handle_GccInt_BParab_4 extends Handle_GccInt_BParab {
    constructor(theHandle: Handle_GccInt_BParab);
  }

export declare class Handle_GccInt_BPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GccInt_BPoint): void;
  get(): GccInt_BPoint;
}

  export declare class Handle_GccInt_BPoint_1 extends Handle_GccInt_BPoint {
    constructor();
  }

  export declare class Handle_GccInt_BPoint_2 extends Handle_GccInt_BPoint {
    constructor(thePtr: GccInt_BPoint);
  }

  export declare class Handle_GccInt_BPoint_3 extends Handle_GccInt_BPoint {
    constructor(theHandle: Handle_GccInt_BPoint);
  }

  export declare class Handle_GccInt_BPoint_4 extends Handle_GccInt_BPoint {
    constructor(theHandle: Handle_GccInt_BPoint);
  }

export declare class Handle_Geom2dGcc_IsParallel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2dGcc_IsParallel): void;
  get(): Geom2dGcc_IsParallel;
}

  export declare class Handle_Geom2dGcc_IsParallel_1 extends Handle_Geom2dGcc_IsParallel {
    constructor();
  }

  export declare class Handle_Geom2dGcc_IsParallel_2 extends Handle_Geom2dGcc_IsParallel {
    constructor(thePtr: Geom2dGcc_IsParallel);
  }

  export declare class Handle_Geom2dGcc_IsParallel_3 extends Handle_Geom2dGcc_IsParallel {
    constructor(theHandle: Handle_Geom2dGcc_IsParallel);
  }

  export declare class Handle_Geom2dGcc_IsParallel_4 extends Handle_Geom2dGcc_IsParallel {
    constructor(theHandle: Handle_Geom2dGcc_IsParallel);
  }

export declare class IntPatch_SequenceOfPoint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntPatch_SequenceOfPoint): IntPatch_SequenceOfPoint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntPatch_Point): void;
  Append_2(theSeq: IntPatch_SequenceOfPoint): void;
  Prepend_1(theItem: IntPatch_Point): void;
  Prepend_2(theSeq: IntPatch_SequenceOfPoint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntPatch_Point): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfPoint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfPoint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntPatch_Point): void;
  Split(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfPoint): void;
  First(): IntPatch_Point;
  ChangeFirst(): IntPatch_Point;
  Last(): IntPatch_Point;
  ChangeLast(): IntPatch_Point;
  Value(theIndex: Standard_Integer): IntPatch_Point;
  ChangeValue(theIndex: Standard_Integer): IntPatch_Point;
  SetValue(theIndex: Standard_Integer, theItem: IntPatch_Point): void;
}

  export declare class IntPatch_SequenceOfPoint_1 extends IntPatch_SequenceOfPoint {
    constructor();
  }

  export declare class IntPatch_SequenceOfPoint_2 extends IntPatch_SequenceOfPoint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntPatch_SequenceOfPoint_3 extends IntPatch_SequenceOfPoint {
    constructor(theOther: IntPatch_SequenceOfPoint);
  }

export declare class Handle_IntPatch_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntPatch_Line): void;
  get(): IntPatch_Line;
}

  export declare class Handle_IntPatch_Line_1 extends Handle_IntPatch_Line {
    constructor();
  }

  export declare class Handle_IntPatch_Line_2 extends Handle_IntPatch_Line {
    constructor(thePtr: IntPatch_Line);
  }

  export declare class Handle_IntPatch_Line_3 extends Handle_IntPatch_Line {
    constructor(theHandle: Handle_IntPatch_Line);
  }

  export declare class Handle_IntPatch_Line_4 extends Handle_IntPatch_Line {
    constructor(theHandle: Handle_IntPatch_Line);
  }

export declare class GeomInt_VectorOfReal extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: GeomInt_VectorOfReal, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: Standard_Real): Standard_Real;
  Appended(): Standard_Real;
  Value(theIndex: Standard_Integer): Standard_Real;
  First(): Standard_Real;
  ChangeFirst(): Standard_Real;
  Last(): Standard_Real;
  ChangeLast(): Standard_Real;
  ChangeValue(theIndex: Standard_Integer): Standard_Real;
  SetValue(theIndex: Standard_Integer, theValue: Standard_Real): Standard_Real;
}

  export declare class GeomInt_VectorOfReal_1 extends GeomInt_VectorOfReal {
    constructor(theIncrement: Standard_Integer, theAlloc: IntSurf_Allocator);
  }

  export declare class GeomInt_VectorOfReal_2 extends GeomInt_VectorOfReal {
    constructor(theOther: GeomInt_VectorOfReal);
  }

export declare class Handle_GeomFill_CircularBlendFunc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_CircularBlendFunc): void;
  get(): GeomFill_CircularBlendFunc;
}

  export declare class Handle_GeomFill_CircularBlendFunc_1 extends Handle_GeomFill_CircularBlendFunc {
    constructor();
  }

  export declare class Handle_GeomFill_CircularBlendFunc_2 extends Handle_GeomFill_CircularBlendFunc {
    constructor(thePtr: GeomFill_CircularBlendFunc);
  }

  export declare class Handle_GeomFill_CircularBlendFunc_3 extends Handle_GeomFill_CircularBlendFunc {
    constructor(theHandle: Handle_GeomFill_CircularBlendFunc);
  }

  export declare class Handle_GeomFill_CircularBlendFunc_4 extends Handle_GeomFill_CircularBlendFunc {
    constructor(theHandle: Handle_GeomFill_CircularBlendFunc);
  }

export declare class Handle_GeomFill_TrihedronLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_TrihedronLaw): void;
  get(): GeomFill_TrihedronLaw;
}

  export declare class Handle_GeomFill_TrihedronLaw_1 extends Handle_GeomFill_TrihedronLaw {
    constructor();
  }

  export declare class Handle_GeomFill_TrihedronLaw_2 extends Handle_GeomFill_TrihedronLaw {
    constructor(thePtr: GeomFill_TrihedronLaw);
  }

  export declare class Handle_GeomFill_TrihedronLaw_3 extends Handle_GeomFill_TrihedronLaw {
    constructor(theHandle: Handle_GeomFill_TrihedronLaw);
  }

  export declare class Handle_GeomFill_TrihedronLaw_4 extends Handle_GeomFill_TrihedronLaw {
    constructor(theHandle: Handle_GeomFill_TrihedronLaw);
  }

export declare class Handle_GeomFill_ConstantBiNormal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_ConstantBiNormal): void;
  get(): GeomFill_ConstantBiNormal;
}

  export declare class Handle_GeomFill_ConstantBiNormal_1 extends Handle_GeomFill_ConstantBiNormal {
    constructor();
  }

  export declare class Handle_GeomFill_ConstantBiNormal_2 extends Handle_GeomFill_ConstantBiNormal {
    constructor(thePtr: GeomFill_ConstantBiNormal);
  }

  export declare class Handle_GeomFill_ConstantBiNormal_3 extends Handle_GeomFill_ConstantBiNormal {
    constructor(theHandle: Handle_GeomFill_ConstantBiNormal);
  }

  export declare class Handle_GeomFill_ConstantBiNormal_4 extends Handle_GeomFill_ConstantBiNormal {
    constructor(theHandle: Handle_GeomFill_ConstantBiNormal);
  }

export declare class Handle_GeomFill_CoonsAlgPatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_CoonsAlgPatch): void;
  get(): GeomFill_CoonsAlgPatch;
}

  export declare class Handle_GeomFill_CoonsAlgPatch_1 extends Handle_GeomFill_CoonsAlgPatch {
    constructor();
  }

  export declare class Handle_GeomFill_CoonsAlgPatch_2 extends Handle_GeomFill_CoonsAlgPatch {
    constructor(thePtr: GeomFill_CoonsAlgPatch);
  }

  export declare class Handle_GeomFill_CoonsAlgPatch_3 extends Handle_GeomFill_CoonsAlgPatch {
    constructor(theHandle: Handle_GeomFill_CoonsAlgPatch);
  }

  export declare class Handle_GeomFill_CoonsAlgPatch_4 extends Handle_GeomFill_CoonsAlgPatch {
    constructor(theHandle: Handle_GeomFill_CoonsAlgPatch);
  }

export declare class Handle_GeomFill_CorrectedFrenet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_CorrectedFrenet): void;
  get(): GeomFill_CorrectedFrenet;
}

  export declare class Handle_GeomFill_CorrectedFrenet_1 extends Handle_GeomFill_CorrectedFrenet {
    constructor();
  }

  export declare class Handle_GeomFill_CorrectedFrenet_2 extends Handle_GeomFill_CorrectedFrenet {
    constructor(thePtr: GeomFill_CorrectedFrenet);
  }

  export declare class Handle_GeomFill_CorrectedFrenet_3 extends Handle_GeomFill_CorrectedFrenet {
    constructor(theHandle: Handle_GeomFill_CorrectedFrenet);
  }

  export declare class Handle_GeomFill_CorrectedFrenet_4 extends Handle_GeomFill_CorrectedFrenet {
    constructor(theHandle: Handle_GeomFill_CorrectedFrenet);
  }

export declare class Handle_GeomFill_CurveAndTrihedron {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_CurveAndTrihedron): void;
  get(): GeomFill_CurveAndTrihedron;
}

  export declare class Handle_GeomFill_CurveAndTrihedron_1 extends Handle_GeomFill_CurveAndTrihedron {
    constructor();
  }

  export declare class Handle_GeomFill_CurveAndTrihedron_2 extends Handle_GeomFill_CurveAndTrihedron {
    constructor(thePtr: GeomFill_CurveAndTrihedron);
  }

  export declare class Handle_GeomFill_CurveAndTrihedron_3 extends Handle_GeomFill_CurveAndTrihedron {
    constructor(theHandle: Handle_GeomFill_CurveAndTrihedron);
  }

  export declare class Handle_GeomFill_CurveAndTrihedron_4 extends Handle_GeomFill_CurveAndTrihedron {
    constructor(theHandle: Handle_GeomFill_CurveAndTrihedron);
  }

export declare class Handle_GeomFill_Darboux {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_Darboux): void;
  get(): GeomFill_Darboux;
}

  export declare class Handle_GeomFill_Darboux_1 extends Handle_GeomFill_Darboux {
    constructor();
  }

  export declare class Handle_GeomFill_Darboux_2 extends Handle_GeomFill_Darboux {
    constructor(thePtr: GeomFill_Darboux);
  }

  export declare class Handle_GeomFill_Darboux_3 extends Handle_GeomFill_Darboux {
    constructor(theHandle: Handle_GeomFill_Darboux);
  }

  export declare class Handle_GeomFill_Darboux_4 extends Handle_GeomFill_Darboux {
    constructor(theHandle: Handle_GeomFill_Darboux);
  }

export declare class Handle_GeomFill_DegeneratedBound {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_DegeneratedBound): void;
  get(): GeomFill_DegeneratedBound;
}

  export declare class Handle_GeomFill_DegeneratedBound_1 extends Handle_GeomFill_DegeneratedBound {
    constructor();
  }

  export declare class Handle_GeomFill_DegeneratedBound_2 extends Handle_GeomFill_DegeneratedBound {
    constructor(thePtr: GeomFill_DegeneratedBound);
  }

  export declare class Handle_GeomFill_DegeneratedBound_3 extends Handle_GeomFill_DegeneratedBound {
    constructor(theHandle: Handle_GeomFill_DegeneratedBound);
  }

  export declare class Handle_GeomFill_DegeneratedBound_4 extends Handle_GeomFill_DegeneratedBound {
    constructor(theHandle: Handle_GeomFill_DegeneratedBound);
  }

export declare class GeomFill_SequenceOfAx2 extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: GeomFill_SequenceOfAx2): GeomFill_SequenceOfAx2;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Ax2): void;
  Append_2(theSeq: GeomFill_SequenceOfAx2): void;
  Prepend_1(theItem: gp_Ax2): void;
  Prepend_2(theSeq: GeomFill_SequenceOfAx2): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Ax2): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: GeomFill_SequenceOfAx2): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: GeomFill_SequenceOfAx2): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Ax2): void;
  Split(theIndex: Standard_Integer, theSeq: GeomFill_SequenceOfAx2): void;
  First(): gp_Ax2;
  ChangeFirst(): gp_Ax2;
  Last(): gp_Ax2;
  ChangeLast(): gp_Ax2;
  Value(theIndex: Standard_Integer): gp_Ax2;
  ChangeValue(theIndex: Standard_Integer): gp_Ax2;
  SetValue(theIndex: Standard_Integer, theItem: gp_Ax2): void;
}

  export declare class GeomFill_SequenceOfAx2_1 extends GeomFill_SequenceOfAx2 {
    constructor();
  }

  export declare class GeomFill_SequenceOfAx2_2 extends GeomFill_SequenceOfAx2 {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class GeomFill_SequenceOfAx2_3 extends GeomFill_SequenceOfAx2 {
    constructor(theOther: GeomFill_SequenceOfAx2);
  }

export declare class Handle_GeomFill_HSequenceOfAx2 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_HSequenceOfAx2): void;
  get(): GeomFill_HSequenceOfAx2;
}

  export declare class Handle_GeomFill_HSequenceOfAx2_1 extends Handle_GeomFill_HSequenceOfAx2 {
    constructor();
  }

  export declare class Handle_GeomFill_HSequenceOfAx2_2 extends Handle_GeomFill_HSequenceOfAx2 {
    constructor(thePtr: GeomFill_HSequenceOfAx2);
  }

  export declare class Handle_GeomFill_HSequenceOfAx2_3 extends Handle_GeomFill_HSequenceOfAx2 {
    constructor(theHandle: Handle_GeomFill_HSequenceOfAx2);
  }

  export declare class Handle_GeomFill_HSequenceOfAx2_4 extends Handle_GeomFill_HSequenceOfAx2 {
    constructor(theHandle: Handle_GeomFill_HSequenceOfAx2);
  }

export declare class Handle_GeomFill_DiscreteTrihedron {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_DiscreteTrihedron): void;
  get(): GeomFill_DiscreteTrihedron;
}

  export declare class Handle_GeomFill_DiscreteTrihedron_1 extends Handle_GeomFill_DiscreteTrihedron {
    constructor();
  }

  export declare class Handle_GeomFill_DiscreteTrihedron_2 extends Handle_GeomFill_DiscreteTrihedron {
    constructor(thePtr: GeomFill_DiscreteTrihedron);
  }

  export declare class Handle_GeomFill_DiscreteTrihedron_3 extends Handle_GeomFill_DiscreteTrihedron {
    constructor(theHandle: Handle_GeomFill_DiscreteTrihedron);
  }

  export declare class Handle_GeomFill_DiscreteTrihedron_4 extends Handle_GeomFill_DiscreteTrihedron {
    constructor(theHandle: Handle_GeomFill_DiscreteTrihedron);
  }

export declare class Handle_GeomFill_DraftTrihedron {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_DraftTrihedron): void;
  get(): GeomFill_DraftTrihedron;
}

  export declare class Handle_GeomFill_DraftTrihedron_1 extends Handle_GeomFill_DraftTrihedron {
    constructor();
  }

  export declare class Handle_GeomFill_DraftTrihedron_2 extends Handle_GeomFill_DraftTrihedron {
    constructor(thePtr: GeomFill_DraftTrihedron);
  }

  export declare class Handle_GeomFill_DraftTrihedron_3 extends Handle_GeomFill_DraftTrihedron {
    constructor(theHandle: Handle_GeomFill_DraftTrihedron);
  }

  export declare class Handle_GeomFill_DraftTrihedron_4 extends Handle_GeomFill_DraftTrihedron {
    constructor(theHandle: Handle_GeomFill_DraftTrihedron);
  }

export declare class Handle_GeomFill_EvolvedSection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_EvolvedSection): void;
  get(): GeomFill_EvolvedSection;
}

  export declare class Handle_GeomFill_EvolvedSection_1 extends Handle_GeomFill_EvolvedSection {
    constructor();
  }

  export declare class Handle_GeomFill_EvolvedSection_2 extends Handle_GeomFill_EvolvedSection {
    constructor(thePtr: GeomFill_EvolvedSection);
  }

  export declare class Handle_GeomFill_EvolvedSection_3 extends Handle_GeomFill_EvolvedSection {
    constructor(theHandle: Handle_GeomFill_EvolvedSection);
  }

  export declare class Handle_GeomFill_EvolvedSection_4 extends Handle_GeomFill_EvolvedSection {
    constructor(theHandle: Handle_GeomFill_EvolvedSection);
  }

export declare class Handle_GeomFill_Fixed {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_Fixed): void;
  get(): GeomFill_Fixed;
}

  export declare class Handle_GeomFill_Fixed_1 extends Handle_GeomFill_Fixed {
    constructor();
  }

  export declare class Handle_GeomFill_Fixed_2 extends Handle_GeomFill_Fixed {
    constructor(thePtr: GeomFill_Fixed);
  }

  export declare class Handle_GeomFill_Fixed_3 extends Handle_GeomFill_Fixed {
    constructor(theHandle: Handle_GeomFill_Fixed);
  }

  export declare class Handle_GeomFill_Fixed_4 extends Handle_GeomFill_Fixed {
    constructor(theHandle: Handle_GeomFill_Fixed);
  }

export declare class Handle_GeomFill_Frenet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_Frenet): void;
  get(): GeomFill_Frenet;
}

  export declare class Handle_GeomFill_Frenet_1 extends Handle_GeomFill_Frenet {
    constructor();
  }

  export declare class Handle_GeomFill_Frenet_2 extends Handle_GeomFill_Frenet {
    constructor(thePtr: GeomFill_Frenet);
  }

  export declare class Handle_GeomFill_Frenet_3 extends Handle_GeomFill_Frenet {
    constructor(theHandle: Handle_GeomFill_Frenet);
  }

  export declare class Handle_GeomFill_Frenet_4 extends Handle_GeomFill_Frenet {
    constructor(theHandle: Handle_GeomFill_Frenet);
  }

export declare class Handle_GeomFill_TrihedronWithGuide {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_TrihedronWithGuide): void;
  get(): GeomFill_TrihedronWithGuide;
}

  export declare class Handle_GeomFill_TrihedronWithGuide_1 extends Handle_GeomFill_TrihedronWithGuide {
    constructor();
  }

  export declare class Handle_GeomFill_TrihedronWithGuide_2 extends Handle_GeomFill_TrihedronWithGuide {
    constructor(thePtr: GeomFill_TrihedronWithGuide);
  }

  export declare class Handle_GeomFill_TrihedronWithGuide_3 extends Handle_GeomFill_TrihedronWithGuide {
    constructor(theHandle: Handle_GeomFill_TrihedronWithGuide);
  }

  export declare class Handle_GeomFill_TrihedronWithGuide_4 extends Handle_GeomFill_TrihedronWithGuide {
    constructor(theHandle: Handle_GeomFill_TrihedronWithGuide);
  }

export declare class Handle_GeomFill_GuideTrihedronAC {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_GuideTrihedronAC): void;
  get(): GeomFill_GuideTrihedronAC;
}

  export declare class Handle_GeomFill_GuideTrihedronAC_1 extends Handle_GeomFill_GuideTrihedronAC {
    constructor();
  }

  export declare class Handle_GeomFill_GuideTrihedronAC_2 extends Handle_GeomFill_GuideTrihedronAC {
    constructor(thePtr: GeomFill_GuideTrihedronAC);
  }

  export declare class Handle_GeomFill_GuideTrihedronAC_3 extends Handle_GeomFill_GuideTrihedronAC {
    constructor(theHandle: Handle_GeomFill_GuideTrihedronAC);
  }

  export declare class Handle_GeomFill_GuideTrihedronAC_4 extends Handle_GeomFill_GuideTrihedronAC {
    constructor(theHandle: Handle_GeomFill_GuideTrihedronAC);
  }

export declare class Handle_GeomFill_GuideTrihedronPlan {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_GuideTrihedronPlan): void;
  get(): GeomFill_GuideTrihedronPlan;
}

  export declare class Handle_GeomFill_GuideTrihedronPlan_1 extends Handle_GeomFill_GuideTrihedronPlan {
    constructor();
  }

  export declare class Handle_GeomFill_GuideTrihedronPlan_2 extends Handle_GeomFill_GuideTrihedronPlan {
    constructor(thePtr: GeomFill_GuideTrihedronPlan);
  }

  export declare class Handle_GeomFill_GuideTrihedronPlan_3 extends Handle_GeomFill_GuideTrihedronPlan {
    constructor(theHandle: Handle_GeomFill_GuideTrihedronPlan);
  }

  export declare class Handle_GeomFill_GuideTrihedronPlan_4 extends Handle_GeomFill_GuideTrihedronPlan {
    constructor(theHandle: Handle_GeomFill_GuideTrihedronPlan);
  }

export declare class Handle_GeomFill_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_Line): void;
  get(): GeomFill_Line;
}

  export declare class Handle_GeomFill_Line_1 extends Handle_GeomFill_Line {
    constructor();
  }

  export declare class Handle_GeomFill_Line_2 extends Handle_GeomFill_Line {
    constructor(thePtr: GeomFill_Line);
  }

  export declare class Handle_GeomFill_Line_3 extends Handle_GeomFill_Line {
    constructor(theHandle: Handle_GeomFill_Line);
  }

  export declare class Handle_GeomFill_Line_4 extends Handle_GeomFill_Line {
    constructor(theHandle: Handle_GeomFill_Line);
  }

export declare class Handle_GeomFill_LocationDraft {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_LocationDraft): void;
  get(): GeomFill_LocationDraft;
}

  export declare class Handle_GeomFill_LocationDraft_1 extends Handle_GeomFill_LocationDraft {
    constructor();
  }

  export declare class Handle_GeomFill_LocationDraft_2 extends Handle_GeomFill_LocationDraft {
    constructor(thePtr: GeomFill_LocationDraft);
  }

  export declare class Handle_GeomFill_LocationDraft_3 extends Handle_GeomFill_LocationDraft {
    constructor(theHandle: Handle_GeomFill_LocationDraft);
  }

  export declare class Handle_GeomFill_LocationDraft_4 extends Handle_GeomFill_LocationDraft {
    constructor(theHandle: Handle_GeomFill_LocationDraft);
  }

export declare class Handle_GeomFill_LocationGuide {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_LocationGuide): void;
  get(): GeomFill_LocationGuide;
}

  export declare class Handle_GeomFill_LocationGuide_1 extends Handle_GeomFill_LocationGuide {
    constructor();
  }

  export declare class Handle_GeomFill_LocationGuide_2 extends Handle_GeomFill_LocationGuide {
    constructor(thePtr: GeomFill_LocationGuide);
  }

  export declare class Handle_GeomFill_LocationGuide_3 extends Handle_GeomFill_LocationGuide {
    constructor(theHandle: Handle_GeomFill_LocationGuide);
  }

  export declare class Handle_GeomFill_LocationGuide_4 extends Handle_GeomFill_LocationGuide {
    constructor(theHandle: Handle_GeomFill_LocationGuide);
  }

export declare class Handle_GeomFill_NSections {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_NSections): void;
  get(): GeomFill_NSections;
}

  export declare class Handle_GeomFill_NSections_1 extends Handle_GeomFill_NSections {
    constructor();
  }

  export declare class Handle_GeomFill_NSections_2 extends Handle_GeomFill_NSections {
    constructor(thePtr: GeomFill_NSections);
  }

  export declare class Handle_GeomFill_NSections_3 extends Handle_GeomFill_NSections {
    constructor(theHandle: Handle_GeomFill_NSections);
  }

  export declare class Handle_GeomFill_NSections_4 extends Handle_GeomFill_NSections {
    constructor(theHandle: Handle_GeomFill_NSections);
  }

export declare class Handle_GeomFill_SweepFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_SweepFunction): void;
  get(): GeomFill_SweepFunction;
}

  export declare class Handle_GeomFill_SweepFunction_1 extends Handle_GeomFill_SweepFunction {
    constructor();
  }

  export declare class Handle_GeomFill_SweepFunction_2 extends Handle_GeomFill_SweepFunction {
    constructor(thePtr: GeomFill_SweepFunction);
  }

  export declare class Handle_GeomFill_SweepFunction_3 extends Handle_GeomFill_SweepFunction {
    constructor(theHandle: Handle_GeomFill_SweepFunction);
  }

  export declare class Handle_GeomFill_SweepFunction_4 extends Handle_GeomFill_SweepFunction {
    constructor(theHandle: Handle_GeomFill_SweepFunction);
  }

export declare class Handle_GeomFill_TgtField {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_TgtField): void;
  get(): GeomFill_TgtField;
}

  export declare class Handle_GeomFill_TgtField_1 extends Handle_GeomFill_TgtField {
    constructor();
  }

  export declare class Handle_GeomFill_TgtField_2 extends Handle_GeomFill_TgtField {
    constructor(thePtr: GeomFill_TgtField);
  }

  export declare class Handle_GeomFill_TgtField_3 extends Handle_GeomFill_TgtField {
    constructor(theHandle: Handle_GeomFill_TgtField);
  }

  export declare class Handle_GeomFill_TgtField_4 extends Handle_GeomFill_TgtField {
    constructor(theHandle: Handle_GeomFill_TgtField);
  }

export declare class Handle_GeomFill_TgtOnCoons {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_TgtOnCoons): void;
  get(): GeomFill_TgtOnCoons;
}

  export declare class Handle_GeomFill_TgtOnCoons_1 extends Handle_GeomFill_TgtOnCoons {
    constructor();
  }

  export declare class Handle_GeomFill_TgtOnCoons_2 extends Handle_GeomFill_TgtOnCoons {
    constructor(thePtr: GeomFill_TgtOnCoons);
  }

  export declare class Handle_GeomFill_TgtOnCoons_3 extends Handle_GeomFill_TgtOnCoons {
    constructor(theHandle: Handle_GeomFill_TgtOnCoons);
  }

  export declare class Handle_GeomFill_TgtOnCoons_4 extends Handle_GeomFill_TgtOnCoons {
    constructor(theHandle: Handle_GeomFill_TgtOnCoons);
  }

export declare class Handle_GeomFill_UniformSection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_UniformSection): void;
  get(): GeomFill_UniformSection;
}

  export declare class Handle_GeomFill_UniformSection_1 extends Handle_GeomFill_UniformSection {
    constructor();
  }

  export declare class Handle_GeomFill_UniformSection_2 extends Handle_GeomFill_UniformSection {
    constructor(thePtr: GeomFill_UniformSection);
  }

  export declare class Handle_GeomFill_UniformSection_3 extends Handle_GeomFill_UniformSection {
    constructor(theHandle: Handle_GeomFill_UniformSection);
  }

  export declare class Handle_GeomFill_UniformSection_4 extends Handle_GeomFill_UniformSection {
    constructor(theHandle: Handle_GeomFill_UniformSection);
  }

export declare class GeomInt_SequenceOfParameterAndOrientation extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: GeomInt_SequenceOfParameterAndOrientation): GeomInt_SequenceOfParameterAndOrientation;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: GeomInt_ParameterAndOrientation): void;
  Append_2(theSeq: GeomInt_SequenceOfParameterAndOrientation): void;
  Prepend_1(theItem: GeomInt_ParameterAndOrientation): void;
  Prepend_2(theSeq: GeomInt_SequenceOfParameterAndOrientation): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: GeomInt_ParameterAndOrientation): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: GeomInt_SequenceOfParameterAndOrientation): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: GeomInt_SequenceOfParameterAndOrientation): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: GeomInt_ParameterAndOrientation): void;
  Split(theIndex: Standard_Integer, theSeq: GeomInt_SequenceOfParameterAndOrientation): void;
  First(): GeomInt_ParameterAndOrientation;
  ChangeFirst(): GeomInt_ParameterAndOrientation;
  Last(): GeomInt_ParameterAndOrientation;
  ChangeLast(): GeomInt_ParameterAndOrientation;
  Value(theIndex: Standard_Integer): GeomInt_ParameterAndOrientation;
  ChangeValue(theIndex: Standard_Integer): GeomInt_ParameterAndOrientation;
  SetValue(theIndex: Standard_Integer, theItem: GeomInt_ParameterAndOrientation): void;
}

  export declare class GeomInt_SequenceOfParameterAndOrientation_1 extends GeomInt_SequenceOfParameterAndOrientation {
    constructor();
  }

  export declare class GeomInt_SequenceOfParameterAndOrientation_2 extends GeomInt_SequenceOfParameterAndOrientation {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class GeomInt_SequenceOfParameterAndOrientation_3 extends GeomInt_SequenceOfParameterAndOrientation {
    constructor(theOther: GeomInt_SequenceOfParameterAndOrientation);
  }

export declare class GeomPlate_SequenceOfAij extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: GeomPlate_SequenceOfAij): GeomPlate_SequenceOfAij;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: GeomPlate_Aij): void;
  Append_2(theSeq: GeomPlate_SequenceOfAij): void;
  Prepend_1(theItem: GeomPlate_Aij): void;
  Prepend_2(theSeq: GeomPlate_SequenceOfAij): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: GeomPlate_Aij): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: GeomPlate_SequenceOfAij): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: GeomPlate_SequenceOfAij): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: GeomPlate_Aij): void;
  Split(theIndex: Standard_Integer, theSeq: GeomPlate_SequenceOfAij): void;
  First(): GeomPlate_Aij;
  ChangeFirst(): GeomPlate_Aij;
  Last(): GeomPlate_Aij;
  ChangeLast(): GeomPlate_Aij;
  Value(theIndex: Standard_Integer): GeomPlate_Aij;
  ChangeValue(theIndex: Standard_Integer): GeomPlate_Aij;
  SetValue(theIndex: Standard_Integer, theItem: GeomPlate_Aij): void;
}

  export declare class GeomPlate_SequenceOfAij_1 extends GeomPlate_SequenceOfAij {
    constructor();
  }

  export declare class GeomPlate_SequenceOfAij_2 extends GeomPlate_SequenceOfAij {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class GeomPlate_SequenceOfAij_3 extends GeomPlate_SequenceOfAij {
    constructor(theOther: GeomPlate_SequenceOfAij);
  }

export declare class Handle_GeomPlate_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomPlate_Surface): void;
  get(): GeomPlate_Surface;
}

  export declare class Handle_GeomPlate_Surface_1 extends Handle_GeomPlate_Surface {
    constructor();
  }

  export declare class Handle_GeomPlate_Surface_2 extends Handle_GeomPlate_Surface {
    constructor(thePtr: GeomPlate_Surface);
  }

  export declare class Handle_GeomPlate_Surface_3 extends Handle_GeomPlate_Surface {
    constructor(theHandle: Handle_GeomPlate_Surface);
  }

  export declare class Handle_GeomPlate_Surface_4 extends Handle_GeomPlate_Surface {
    constructor(theHandle: Handle_GeomPlate_Surface);
  }

export declare class Intf_SeqOfSectionPoint extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Intf_SeqOfSectionPoint): Intf_SeqOfSectionPoint;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Intf_SectionPoint): void;
  Append_2(theSeq: Intf_SeqOfSectionPoint): void;
  Prepend_1(theItem: Intf_SectionPoint): void;
  Prepend_2(theSeq: Intf_SeqOfSectionPoint): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Intf_SectionPoint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Intf_SeqOfSectionPoint): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Intf_SeqOfSectionPoint): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Intf_SectionPoint): void;
  Split(theIndex: Standard_Integer, theSeq: Intf_SeqOfSectionPoint): void;
  First(): Intf_SectionPoint;
  ChangeFirst(): Intf_SectionPoint;
  Last(): Intf_SectionPoint;
  ChangeLast(): Intf_SectionPoint;
  Value(theIndex: Standard_Integer): Intf_SectionPoint;
  ChangeValue(theIndex: Standard_Integer): Intf_SectionPoint;
  SetValue(theIndex: Standard_Integer, theItem: Intf_SectionPoint): void;
}

  export declare class Intf_SeqOfSectionPoint_1 extends Intf_SeqOfSectionPoint {
    constructor();
  }

  export declare class Intf_SeqOfSectionPoint_2 extends Intf_SeqOfSectionPoint {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Intf_SeqOfSectionPoint_3 extends Intf_SeqOfSectionPoint {
    constructor(theOther: Intf_SeqOfSectionPoint);
  }

export declare class Intf_SeqOfSectionLine extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Intf_SeqOfSectionLine): Intf_SeqOfSectionLine;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Intf_SectionLine): void;
  Append_2(theSeq: Intf_SeqOfSectionLine): void;
  Prepend_1(theItem: Intf_SectionLine): void;
  Prepend_2(theSeq: Intf_SeqOfSectionLine): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Intf_SectionLine): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Intf_SeqOfSectionLine): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Intf_SeqOfSectionLine): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Intf_SectionLine): void;
  Split(theIndex: Standard_Integer, theSeq: Intf_SeqOfSectionLine): void;
  First(): Intf_SectionLine;
  ChangeFirst(): Intf_SectionLine;
  Last(): Intf_SectionLine;
  ChangeLast(): Intf_SectionLine;
  Value(theIndex: Standard_Integer): Intf_SectionLine;
  ChangeValue(theIndex: Standard_Integer): Intf_SectionLine;
  SetValue(theIndex: Standard_Integer, theItem: Intf_SectionLine): void;
}

  export declare class Intf_SeqOfSectionLine_1 extends Intf_SeqOfSectionLine {
    constructor();
  }

  export declare class Intf_SeqOfSectionLine_2 extends Intf_SeqOfSectionLine {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Intf_SeqOfSectionLine_3 extends Intf_SeqOfSectionLine {
    constructor(theOther: Intf_SeqOfSectionLine);
  }

export declare class Intf_SeqOfTangentZone extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Intf_SeqOfTangentZone): Intf_SeqOfTangentZone;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Intf_TangentZone): void;
  Append_2(theSeq: Intf_SeqOfTangentZone): void;
  Prepend_1(theItem: Intf_TangentZone): void;
  Prepend_2(theSeq: Intf_SeqOfTangentZone): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Intf_TangentZone): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Intf_SeqOfTangentZone): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Intf_SeqOfTangentZone): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Intf_TangentZone): void;
  Split(theIndex: Standard_Integer, theSeq: Intf_SeqOfTangentZone): void;
  First(): Intf_TangentZone;
  ChangeFirst(): Intf_TangentZone;
  Last(): Intf_TangentZone;
  ChangeLast(): Intf_TangentZone;
  Value(theIndex: Standard_Integer): Intf_TangentZone;
  ChangeValue(theIndex: Standard_Integer): Intf_TangentZone;
  SetValue(theIndex: Standard_Integer, theItem: Intf_TangentZone): void;
}

  export declare class Intf_SeqOfTangentZone_1 extends Intf_SeqOfTangentZone {
    constructor();
  }

  export declare class Intf_SeqOfTangentZone_2 extends Intf_SeqOfTangentZone {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Intf_SeqOfTangentZone_3 extends Intf_SeqOfTangentZone {
    constructor(theOther: Intf_SeqOfTangentZone);
  }

export declare class Intf_Array1OfLin {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Lin): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Intf_Array1OfLin): Intf_Array1OfLin;
  Move(theOther: Intf_Array1OfLin): Intf_Array1OfLin;
  First(): gp_Lin;
  ChangeFirst(): gp_Lin;
  Last(): gp_Lin;
  ChangeLast(): gp_Lin;
  Value(theIndex: Standard_Integer): gp_Lin;
  ChangeValue(theIndex: Standard_Integer): gp_Lin;
  SetValue(theIndex: Standard_Integer, theItem: gp_Lin): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Intf_Array1OfLin_1 extends Intf_Array1OfLin {
    constructor();
  }

  export declare class Intf_Array1OfLin_2 extends Intf_Array1OfLin {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Intf_Array1OfLin_3 extends Intf_Array1OfLin {
    constructor(theOther: Intf_Array1OfLin);
  }

  export declare class Intf_Array1OfLin_4 extends Intf_Array1OfLin {
    constructor(theOther: Intf_Array1OfLin);
  }

  export declare class Intf_Array1OfLin_5 extends Intf_Array1OfLin {
    constructor(theBegin: gp_Lin, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Hatch_SequenceOfParameter extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Hatch_SequenceOfParameter): Hatch_SequenceOfParameter;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Hatch_Parameter): void;
  Append_2(theSeq: Hatch_SequenceOfParameter): void;
  Prepend_1(theItem: Hatch_Parameter): void;
  Prepend_2(theSeq: Hatch_SequenceOfParameter): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Hatch_Parameter): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Hatch_SequenceOfParameter): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Hatch_SequenceOfParameter): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Hatch_Parameter): void;
  Split(theIndex: Standard_Integer, theSeq: Hatch_SequenceOfParameter): void;
  First(): Hatch_Parameter;
  ChangeFirst(): Hatch_Parameter;
  Last(): Hatch_Parameter;
  ChangeLast(): Hatch_Parameter;
  Value(theIndex: Standard_Integer): Hatch_Parameter;
  ChangeValue(theIndex: Standard_Integer): Hatch_Parameter;
  SetValue(theIndex: Standard_Integer, theItem: Hatch_Parameter): void;
}

  export declare class Hatch_SequenceOfParameter_1 extends Hatch_SequenceOfParameter {
    constructor();
  }

  export declare class Hatch_SequenceOfParameter_2 extends Hatch_SequenceOfParameter {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Hatch_SequenceOfParameter_3 extends Hatch_SequenceOfParameter {
    constructor(theOther: Hatch_SequenceOfParameter);
  }

export declare class Hatch_SequenceOfLine extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: Hatch_SequenceOfLine): Hatch_SequenceOfLine;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Hatch_Line): void;
  Append_2(theSeq: Hatch_SequenceOfLine): void;
  Prepend_1(theItem: Hatch_Line): void;
  Prepend_2(theSeq: Hatch_SequenceOfLine): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Hatch_Line): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Hatch_SequenceOfLine): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Hatch_SequenceOfLine): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Hatch_Line): void;
  Split(theIndex: Standard_Integer, theSeq: Hatch_SequenceOfLine): void;
  First(): Hatch_Line;
  ChangeFirst(): Hatch_Line;
  Last(): Hatch_Line;
  ChangeLast(): Hatch_Line;
  Value(theIndex: Standard_Integer): Hatch_Line;
  ChangeValue(theIndex: Standard_Integer): Hatch_Line;
  SetValue(theIndex: Standard_Integer, theItem: Hatch_Line): void;
}

  export declare class Hatch_SequenceOfLine_1 extends Hatch_SequenceOfLine {
    constructor();
  }

  export declare class Hatch_SequenceOfLine_2 extends Hatch_SequenceOfLine {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class Hatch_SequenceOfLine_3 extends Hatch_SequenceOfLine {
    constructor(theOther: Hatch_SequenceOfLine);
  }

export declare class Handle_IntPatch_ALine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntPatch_ALine): void;
  get(): IntPatch_ALine;
}

  export declare class Handle_IntPatch_ALine_1 extends Handle_IntPatch_ALine {
    constructor();
  }

  export declare class Handle_IntPatch_ALine_2 extends Handle_IntPatch_ALine {
    constructor(thePtr: IntPatch_ALine);
  }

  export declare class Handle_IntPatch_ALine_3 extends Handle_IntPatch_ALine {
    constructor(theHandle: Handle_IntPatch_ALine);
  }

  export declare class Handle_IntPatch_ALine_4 extends Handle_IntPatch_ALine {
    constructor(theHandle: Handle_IntPatch_ALine);
  }

export declare class Handle_IntPatch_GLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntPatch_GLine): void;
  get(): IntPatch_GLine;
}

  export declare class Handle_IntPatch_GLine_1 extends Handle_IntPatch_GLine {
    constructor();
  }

  export declare class Handle_IntPatch_GLine_2 extends Handle_IntPatch_GLine {
    constructor(thePtr: IntPatch_GLine);
  }

  export declare class Handle_IntPatch_GLine_3 extends Handle_IntPatch_GLine {
    constructor(theHandle: Handle_IntPatch_GLine);
  }

  export declare class Handle_IntPatch_GLine_4 extends Handle_IntPatch_GLine {
    constructor(theHandle: Handle_IntPatch_GLine);
  }

export declare class IntPatch_SequenceOfSegmentOfTheSOnBounds extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntPatch_SequenceOfSegmentOfTheSOnBounds): IntPatch_SequenceOfSegmentOfTheSOnBounds;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntPatch_TheSegmentOfTheSOnBounds): void;
  Append_2(theSeq: IntPatch_SequenceOfSegmentOfTheSOnBounds): void;
  Prepend_1(theItem: IntPatch_TheSegmentOfTheSOnBounds): void;
  Prepend_2(theSeq: IntPatch_SequenceOfSegmentOfTheSOnBounds): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntPatch_TheSegmentOfTheSOnBounds): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfSegmentOfTheSOnBounds): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfSegmentOfTheSOnBounds): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntPatch_TheSegmentOfTheSOnBounds): void;
  Split(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfSegmentOfTheSOnBounds): void;
  First(): IntPatch_TheSegmentOfTheSOnBounds;
  ChangeFirst(): IntPatch_TheSegmentOfTheSOnBounds;
  Last(): IntPatch_TheSegmentOfTheSOnBounds;
  ChangeLast(): IntPatch_TheSegmentOfTheSOnBounds;
  Value(theIndex: Standard_Integer): IntPatch_TheSegmentOfTheSOnBounds;
  ChangeValue(theIndex: Standard_Integer): IntPatch_TheSegmentOfTheSOnBounds;
  SetValue(theIndex: Standard_Integer, theItem: IntPatch_TheSegmentOfTheSOnBounds): void;
}

  export declare class IntPatch_SequenceOfSegmentOfTheSOnBounds_1 extends IntPatch_SequenceOfSegmentOfTheSOnBounds {
    constructor();
  }

  export declare class IntPatch_SequenceOfSegmentOfTheSOnBounds_2 extends IntPatch_SequenceOfSegmentOfTheSOnBounds {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntPatch_SequenceOfSegmentOfTheSOnBounds_3 extends IntPatch_SequenceOfSegmentOfTheSOnBounds {
    constructor(theOther: IntPatch_SequenceOfSegmentOfTheSOnBounds);
  }

export declare class IntPatch_SequenceOfPathPointOfTheSOnBounds extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntPatch_SequenceOfPathPointOfTheSOnBounds): IntPatch_SequenceOfPathPointOfTheSOnBounds;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntPatch_ThePathPointOfTheSOnBounds): void;
  Append_2(theSeq: IntPatch_SequenceOfPathPointOfTheSOnBounds): void;
  Prepend_1(theItem: IntPatch_ThePathPointOfTheSOnBounds): void;
  Prepend_2(theSeq: IntPatch_SequenceOfPathPointOfTheSOnBounds): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntPatch_ThePathPointOfTheSOnBounds): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfPathPointOfTheSOnBounds): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfPathPointOfTheSOnBounds): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntPatch_ThePathPointOfTheSOnBounds): void;
  Split(theIndex: Standard_Integer, theSeq: IntPatch_SequenceOfPathPointOfTheSOnBounds): void;
  First(): IntPatch_ThePathPointOfTheSOnBounds;
  ChangeFirst(): IntPatch_ThePathPointOfTheSOnBounds;
  Last(): IntPatch_ThePathPointOfTheSOnBounds;
  ChangeLast(): IntPatch_ThePathPointOfTheSOnBounds;
  Value(theIndex: Standard_Integer): IntPatch_ThePathPointOfTheSOnBounds;
  ChangeValue(theIndex: Standard_Integer): IntPatch_ThePathPointOfTheSOnBounds;
  SetValue(theIndex: Standard_Integer, theItem: IntPatch_ThePathPointOfTheSOnBounds): void;
}

  export declare class IntPatch_SequenceOfPathPointOfTheSOnBounds_1 extends IntPatch_SequenceOfPathPointOfTheSOnBounds {
    constructor();
  }

  export declare class IntPatch_SequenceOfPathPointOfTheSOnBounds_2 extends IntPatch_SequenceOfPathPointOfTheSOnBounds {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntPatch_SequenceOfPathPointOfTheSOnBounds_3 extends IntPatch_SequenceOfPathPointOfTheSOnBounds {
    constructor(theOther: IntPatch_SequenceOfPathPointOfTheSOnBounds);
  }

export declare class Handle_IntPatch_PointLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntPatch_PointLine): void;
  get(): IntPatch_PointLine;
}

  export declare class Handle_IntPatch_PointLine_1 extends Handle_IntPatch_PointLine {
    constructor();
  }

  export declare class Handle_IntPatch_PointLine_2 extends Handle_IntPatch_PointLine {
    constructor(thePtr: IntPatch_PointLine);
  }

  export declare class Handle_IntPatch_PointLine_3 extends Handle_IntPatch_PointLine {
    constructor(theHandle: Handle_IntPatch_PointLine);
  }

  export declare class Handle_IntPatch_PointLine_4 extends Handle_IntPatch_PointLine {
    constructor(theHandle: Handle_IntPatch_PointLine);
  }

export declare class Handle_IntPatch_RLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntPatch_RLine): void;
  get(): IntPatch_RLine;
}

  export declare class Handle_IntPatch_RLine_1 extends Handle_IntPatch_RLine {
    constructor();
  }

  export declare class Handle_IntPatch_RLine_2 extends Handle_IntPatch_RLine {
    constructor(thePtr: IntPatch_RLine);
  }

  export declare class Handle_IntPatch_RLine_3 extends Handle_IntPatch_RLine {
    constructor(theHandle: Handle_IntPatch_RLine);
  }

  export declare class Handle_IntPatch_RLine_4 extends Handle_IntPatch_RLine {
    constructor(theHandle: Handle_IntPatch_RLine);
  }

export declare class Handle_IntPatch_TheIWLineOfTheIWalking {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntPatch_TheIWLineOfTheIWalking): void;
  get(): IntPatch_TheIWLineOfTheIWalking;
}

  export declare class Handle_IntPatch_TheIWLineOfTheIWalking_1 extends Handle_IntPatch_TheIWLineOfTheIWalking {
    constructor();
  }

  export declare class Handle_IntPatch_TheIWLineOfTheIWalking_2 extends Handle_IntPatch_TheIWLineOfTheIWalking {
    constructor(thePtr: IntPatch_TheIWLineOfTheIWalking);
  }

  export declare class Handle_IntPatch_TheIWLineOfTheIWalking_3 extends Handle_IntPatch_TheIWLineOfTheIWalking {
    constructor(theHandle: Handle_IntPatch_TheIWLineOfTheIWalking);
  }

  export declare class Handle_IntPatch_TheIWLineOfTheIWalking_4 extends Handle_IntPatch_TheIWLineOfTheIWalking {
    constructor(theHandle: Handle_IntPatch_TheIWLineOfTheIWalking);
  }

export declare class Handle_IntPatch_WLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntPatch_WLine): void;
  get(): IntPatch_WLine;
}

  export declare class Handle_IntPatch_WLine_1 extends Handle_IntPatch_WLine {
    constructor();
  }

  export declare class Handle_IntPatch_WLine_2 extends Handle_IntPatch_WLine {
    constructor(thePtr: IntPatch_WLine);
  }

  export declare class Handle_IntPatch_WLine_3 extends Handle_IntPatch_WLine {
    constructor(theHandle: Handle_IntPatch_WLine);
  }

  export declare class Handle_IntPatch_WLine_4 extends Handle_IntPatch_WLine {
    constructor(theHandle: Handle_IntPatch_WLine);
  }

export declare class IntPolyh_SeqOfStartPoints extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: IntSurf_Allocator): void;
  Clear(theAllocator: IntSurf_Allocator): void;
  Assign(theOther: IntPolyh_SeqOfStartPoints): IntPolyh_SeqOfStartPoints;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntPolyh_StartPoint): void;
  Append_2(theSeq: IntPolyh_SeqOfStartPoints): void;
  Prepend_1(theItem: IntPolyh_StartPoint): void;
  Prepend_2(theSeq: IntPolyh_SeqOfStartPoints): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntPolyh_StartPoint): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntPolyh_SeqOfStartPoints): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntPolyh_SeqOfStartPoints): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntPolyh_StartPoint): void;
  Split(theIndex: Standard_Integer, theSeq: IntPolyh_SeqOfStartPoints): void;
  First(): IntPolyh_StartPoint;
  ChangeFirst(): IntPolyh_StartPoint;
  Last(): IntPolyh_StartPoint;
  ChangeLast(): IntPolyh_StartPoint;
  Value(theIndex: Standard_Integer): IntPolyh_StartPoint;
  ChangeValue(theIndex: Standard_Integer): IntPolyh_StartPoint;
  SetValue(theIndex: Standard_Integer, theItem: IntPolyh_StartPoint): void;
}

  export declare class IntPolyh_SeqOfStartPoints_1 extends IntPolyh_SeqOfStartPoints {
    constructor();
  }

  export declare class IntPolyh_SeqOfStartPoints_2 extends IntPolyh_SeqOfStartPoints {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntPolyh_SeqOfStartPoints_3 extends IntPolyh_SeqOfStartPoints {
    constructor(theOther: IntPolyh_SeqOfStartPoints);
  }

export declare class IntPolyh_ListOfCouples extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: IntPolyh_ListOfCouples): IntPolyh_ListOfCouples;
  Clear(theAllocator: IntSurf_Allocator): void;
  First_1(): IntPolyh_Couple;
  First_2(): IntPolyh_Couple;
  Last_1(): IntPolyh_Couple;
  Last_2(): IntPolyh_Couple;
  Append_1(theItem: IntPolyh_Couple): IntPolyh_Couple;
  Append_3(theOther: IntPolyh_ListOfCouples): void;
  Prepend_1(theItem: IntPolyh_Couple): IntPolyh_Couple;
  Prepend_2(theOther: IntPolyh_ListOfCouples): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class IntPolyh_ListOfCouples_1 extends IntPolyh_ListOfCouples {
    constructor();
  }

  export declare class IntPolyh_ListOfCouples_2 extends IntPolyh_ListOfCouples {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class IntPolyh_ListOfCouples_3 extends IntPolyh_ListOfCouples {
    constructor(theOther: IntPolyh_ListOfCouples);
  }

export declare class Handle_IntStart_SITopolTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntStart_SITopolTool): void;
  get(): IntStart_SITopolTool;
}

  export declare class Handle_IntStart_SITopolTool_1 extends Handle_IntStart_SITopolTool {
    constructor();
  }

  export declare class Handle_IntStart_SITopolTool_2 extends Handle_IntStart_SITopolTool {
    constructor(thePtr: IntStart_SITopolTool);
  }

  export declare class Handle_IntStart_SITopolTool_3 extends Handle_IntStart_SITopolTool {
    constructor(theHandle: Handle_IntStart_SITopolTool);
  }

  export declare class Handle_IntStart_SITopolTool_4 extends Handle_IntStart_SITopolTool {
    constructor(theHandle: Handle_IntStart_SITopolTool);
  }

export declare class Handle_Law_BSpFunc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_BSpFunc): void;
  get(): Law_BSpFunc;
}

  export declare class Handle_Law_BSpFunc_1 extends Handle_Law_BSpFunc {
    constructor();
  }

  export declare class Handle_Law_BSpFunc_2 extends Handle_Law_BSpFunc {
    constructor(thePtr: Law_BSpFunc);
  }

  export declare class Handle_Law_BSpFunc_3 extends Handle_Law_BSpFunc {
    constructor(theHandle: Handle_Law_BSpFunc);
  }

  export declare class Handle_Law_BSpFunc_4 extends Handle_Law_BSpFunc {
    constructor(theHandle: Handle_Law_BSpFunc);
  }

export declare class Handle_Law_BSpline {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_BSpline): void;
  get(): Law_BSpline;
}

  export declare class Handle_Law_BSpline_1 extends Handle_Law_BSpline {
    constructor();
  }

  export declare class Handle_Law_BSpline_2 extends Handle_Law_BSpline {
    constructor(thePtr: Law_BSpline);
  }

  export declare class Handle_Law_BSpline_3 extends Handle_Law_BSpline {
    constructor(theHandle: Handle_Law_BSpline);
  }

  export declare class Handle_Law_BSpline_4 extends Handle_Law_BSpline {
    constructor(theHandle: Handle_Law_BSpline);
  }

export declare class Handle_Law_Composite {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_Composite): void;
  get(): Law_Composite;
}

  export declare class Handle_Law_Composite_1 extends Handle_Law_Composite {
    constructor();
  }

  export declare class Handle_Law_Composite_2 extends Handle_Law_Composite {
    constructor(thePtr: Law_Composite);
  }

  export declare class Handle_Law_Composite_3 extends Handle_Law_Composite {
    constructor(theHandle: Handle_Law_Composite);
  }

  export declare class Handle_Law_Composite_4 extends Handle_Law_Composite {
    constructor(theHandle: Handle_Law_Composite);
  }

export declare class Handle_Law_Constant {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_Constant): void;
  get(): Law_Constant;
}

  export declare class Handle_Law_Constant_1 extends Handle_Law_Constant {
    constructor();
  }

  export declare class Handle_Law_Constant_2 extends Handle_Law_Constant {
    constructor(thePtr: Law_Constant);
  }

  export declare class Handle_Law_Constant_3 extends Handle_Law_Constant {
    constructor(theHandle: Handle_Law_Constant);
  }

  export declare class Handle_Law_Constant_4 extends Handle_Law_Constant {
    constructor(theHandle: Handle_Law_Constant);
  }

export declare class Handle_Law_Interpol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_Interpol): void;
  get(): Law_Interpol;
}

  export declare class Handle_Law_Interpol_1 extends Handle_Law_Interpol {
    constructor();
  }

  export declare class Handle_Law_Interpol_2 extends Handle_Law_Interpol {
    constructor(thePtr: Law_Interpol);
  }

  export declare class Handle_Law_Interpol_3 extends Handle_Law_Interpol {
    constructor(theHandle: Handle_Law_Interpol);
  }

  export declare class Handle_Law_Interpol_4 extends Handle_Law_Interpol {
    constructor(theHandle: Handle_Law_Interpol);
  }

export declare class Handle_Law_Linear {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_Linear): void;
  get(): Law_Linear;
}

  export declare class Handle_Law_Linear_1 extends Handle_Law_Linear {
    constructor();
  }

  export declare class Handle_Law_Linear_2 extends Handle_Law_Linear {
    constructor(thePtr: Law_Linear);
  }

  export declare class Handle_Law_Linear_3 extends Handle_Law_Linear {
    constructor(theHandle: Handle_Law_Linear);
  }

  export declare class Handle_Law_Linear_4 extends Handle_Law_Linear {
    constructor(theHandle: Handle_Law_Linear);
  }

export declare class Handle_Law_S {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Law_S): void;
  get(): Law_S;
}

  export declare class Handle_Law_S_1 extends Handle_Law_S {
    constructor();
  }

  export declare class Handle_Law_S_2 extends Handle_Law_S {
    constructor(thePtr: Law_S);
  }

  export declare class Handle_Law_S_3 extends Handle_Law_S {
    constructor(theHandle: Handle_Law_S);
  }

  export declare class Handle_Law_S_4 extends Handle_Law_S {
    constructor(theHandle: Handle_Law_S);
  }

export declare class Handle_NLPlate_HGPPConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HGPPConstraint): void;
  get(): NLPlate_HGPPConstraint;
}

  export declare class Handle_NLPlate_HGPPConstraint_1 extends Handle_NLPlate_HGPPConstraint {
    constructor();
  }

  export declare class Handle_NLPlate_HGPPConstraint_2 extends Handle_NLPlate_HGPPConstraint {
    constructor(thePtr: NLPlate_HGPPConstraint);
  }

  export declare class Handle_NLPlate_HGPPConstraint_3 extends Handle_NLPlate_HGPPConstraint {
    constructor(theHandle: Handle_NLPlate_HGPPConstraint);
  }

  export declare class Handle_NLPlate_HGPPConstraint_4 extends Handle_NLPlate_HGPPConstraint {
    constructor(theHandle: Handle_NLPlate_HGPPConstraint);
  }

export declare class Handle_NLPlate_HPG0Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HPG0Constraint): void;
  get(): NLPlate_HPG0Constraint;
}

  export declare class Handle_NLPlate_HPG0Constraint_1 extends Handle_NLPlate_HPG0Constraint {
    constructor();
  }

  export declare class Handle_NLPlate_HPG0Constraint_2 extends Handle_NLPlate_HPG0Constraint {
    constructor(thePtr: NLPlate_HPG0Constraint);
  }

  export declare class Handle_NLPlate_HPG0Constraint_3 extends Handle_NLPlate_HPG0Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0Constraint);
  }

  export declare class Handle_NLPlate_HPG0Constraint_4 extends Handle_NLPlate_HPG0Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0Constraint);
  }

export declare class Handle_NLPlate_HPG0G1Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HPG0G1Constraint): void;
  get(): NLPlate_HPG0G1Constraint;
}

  export declare class Handle_NLPlate_HPG0G1Constraint_1 extends Handle_NLPlate_HPG0G1Constraint {
    constructor();
  }

  export declare class Handle_NLPlate_HPG0G1Constraint_2 extends Handle_NLPlate_HPG0G1Constraint {
    constructor(thePtr: NLPlate_HPG0G1Constraint);
  }

  export declare class Handle_NLPlate_HPG0G1Constraint_3 extends Handle_NLPlate_HPG0G1Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0G1Constraint);
  }

  export declare class Handle_NLPlate_HPG0G1Constraint_4 extends Handle_NLPlate_HPG0G1Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0G1Constraint);
  }

export declare class Handle_NLPlate_HPG0G2Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HPG0G2Constraint): void;
  get(): NLPlate_HPG0G2Constraint;
}

  export declare class Handle_NLPlate_HPG0G2Constraint_1 extends Handle_NLPlate_HPG0G2Constraint {
    constructor();
  }

  export declare class Handle_NLPlate_HPG0G2Constraint_2 extends Handle_NLPlate_HPG0G2Constraint {
    constructor(thePtr: NLPlate_HPG0G2Constraint);
  }

  export declare class Handle_NLPlate_HPG0G2Constraint_3 extends Handle_NLPlate_HPG0G2Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0G2Constraint);
  }

  export declare class Handle_NLPlate_HPG0G2Constraint_4 extends Handle_NLPlate_HPG0G2Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0G2Constraint);
  }

export declare class Handle_NLPlate_HPG0G3Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HPG0G3Constraint): void;
  get(): NLPlate_HPG0G3Constraint;
}

  export declare class Handle_NLPlate_HPG0G3Constraint_1 extends Handle_NLPlate_HPG0G3Constraint {
    constructor();
  }

  export declare class Handle_NLPlate_HPG0G3Constraint_2 extends Handle_NLPlate_HPG0G3Constraint {
    constructor(thePtr: NLPlate_HPG0G3Constraint);
  }

  export declare class Handle_NLPlate_HPG0G3Constraint_3 extends Handle_NLPlate_HPG0G3Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0G3Constraint);
  }

  export declare class Handle_NLPlate_HPG0G3Constraint_4 extends Handle_NLPlate_HPG0G3Constraint {
    constructor(theHandle: Handle_NLPlate_HPG0G3Constraint);
  }

export declare class Handle_NLPlate_HPG1Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HPG1Constraint): void;
  get(): NLPlate_HPG1Constraint;
}

  export declare class Handle_NLPlate_HPG1Constraint_1 extends Handle_NLPlate_HPG1Constraint {
    constructor();
  }

  export declare class Handle_NLPlate_HPG1Constraint_2 extends Handle_NLPlate_HPG1Constraint {
    constructor(thePtr: NLPlate_HPG1Constraint);
  }

  export declare class Handle_NLPlate_HPG1Constraint_3 extends Handle_NLPlate_HPG1Constraint {
    constructor(theHandle: Handle_NLPlate_HPG1Constraint);
  }

  export declare class Handle_NLPlate_HPG1Constraint_4 extends Handle_NLPlate_HPG1Constraint {
    constructor(theHandle: Handle_NLPlate_HPG1Constraint);
  }

export declare class Handle_NLPlate_HPG2Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HPG2Constraint): void;
  get(): NLPlate_HPG2Constraint;
}

  export declare class Handle_NLPlate_HPG2Constraint_1 extends Handle_NLPlate_HPG2Constraint {
    constructor();
  }

  export declare class Handle_NLPlate_HPG2Constraint_2 extends Handle_NLPlate_HPG2Constraint {
    constructor(thePtr: NLPlate_HPG2Constraint);
  }

  export declare class Handle_NLPlate_HPG2Constraint_3 extends Handle_NLPlate_HPG2Constraint {
    constructor(theHandle: Handle_NLPlate_HPG2Constraint);
  }

  export declare class Handle_NLPlate_HPG2Constraint_4 extends Handle_NLPlate_HPG2Constraint {
    constructor(theHandle: Handle_NLPlate_HPG2Constraint);
  }

export declare class Handle_NLPlate_HPG3Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NLPlate_HPG3Constraint): void;
  get(): NLPlate_HPG3Constraint;
}

  export declare class Handle_NLPlate_HPG3Constraint_1 extends Handle_NLPlate_HPG3Constraint {
    constructor();
  }

  export declare class Handle_NLPlate_HPG3Constraint_2 extends Handle_NLPlate_HPG3Constraint {
    constructor(thePtr: NLPlate_HPG3Constraint);
  }

  export declare class Handle_NLPlate_HPG3Constraint_3 extends Handle_NLPlate_HPG3Constraint {
    constructor(theHandle: Handle_NLPlate_HPG3Constraint);
  }

  export declare class Handle_NLPlate_HPG3Constraint_4 extends Handle_NLPlate_HPG3Constraint {
    constructor(theHandle: Handle_NLPlate_HPG3Constraint);
  }

export declare class NLPlate_StackOfPlate extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: NLPlate_StackOfPlate): NLPlate_StackOfPlate;
  Clear(theAllocator: IntSurf_Allocator): void;
  First_1(): Plate_Plate;
  First_2(): Plate_Plate;
  Last_1(): Plate_Plate;
  Last_2(): Plate_Plate;
  Append_1(theItem: Plate_Plate): Plate_Plate;
  Append_3(theOther: NLPlate_StackOfPlate): void;
  Prepend_1(theItem: Plate_Plate): Plate_Plate;
  Prepend_2(theOther: NLPlate_StackOfPlate): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class NLPlate_StackOfPlate_1 extends NLPlate_StackOfPlate {
    constructor();
  }

  export declare class NLPlate_StackOfPlate_2 extends NLPlate_StackOfPlate {
    constructor(theAllocator: IntSurf_Allocator);
  }

  export declare class NLPlate_StackOfPlate_3 extends NLPlate_StackOfPlate {
    constructor(theOther: NLPlate_StackOfPlate);
  }

export declare class TopTrans_Array2OfOrientation {
  Init(theValue: TopAbs_Orientation): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TopTrans_Array2OfOrientation): TopTrans_Array2OfOrientation;
  Move(theOther: TopTrans_Array2OfOrientation): TopTrans_Array2OfOrientation;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): TopAbs_Orientation;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): TopAbs_Orientation;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: TopAbs_Orientation): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TopTrans_Array2OfOrientation_1 extends TopTrans_Array2OfOrientation {
    constructor();
  }

  export declare class TopTrans_Array2OfOrientation_2 extends TopTrans_Array2OfOrientation {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TopTrans_Array2OfOrientation_3 extends TopTrans_Array2OfOrientation {
    constructor(theOther: TopTrans_Array2OfOrientation);
  }

  export declare class TopTrans_Array2OfOrientation_4 extends TopTrans_Array2OfOrientation {
    constructor(theOther: TopTrans_Array2OfOrientation);
  }

  export declare class TopTrans_Array2OfOrientation_5 extends TopTrans_Array2OfOrientation {
    constructor(theBegin: TopAbs_Orientation, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare type IntImp_ConstIsoparametric = {
  IntImp_UIsoparametricOnCaro1: {};
  IntImp_VIsoparametricOnCaro1: {};
  IntImp_UIsoparametricOnCaro2: {};
  IntImp_VIsoparametricOnCaro2: {};
}

export declare type IntSurf_TypeTrans = {
  IntSurf_In: {};
  IntSurf_Out: {};
  IntSurf_Touch: {};
  IntSurf_Undecided: {};
}

export declare type IntSurf_Situation = {
  IntSurf_Inside: {};
  IntSurf_Outside: {};
  IntSurf_Unknown: {};
}

export declare type IntRes2d_Position = {
  IntRes2d_Head: {};
  IntRes2d_Middle: {};
  IntRes2d_End: {};
}

export declare type IntRes2d_TypeTrans = {
  IntRes2d_In: {};
  IntRes2d_Out: {};
  IntRes2d_Touch: {};
  IntRes2d_Undecided: {};
}

export declare type IntRes2d_Situation = {
  IntRes2d_Inside: {};
  IntRes2d_Outside: {};
  IntRes2d_Unknown: {};
}

export declare type IntCurveSurface_TransitionOnCurve = {
  IntCurveSurface_Tangent: {};
  IntCurveSurface_In: {};
  IntCurveSurface_Out: {};
}

export declare type GeomFill_PipeError = {
  GeomFill_PipeOk: {};
  GeomFill_PipeNotOk: {};
  GeomFill_PlaneNotIntersectGuide: {};
  GeomFill_ImpossibleContact: {};
}

export declare type GeomFill_Trihedron = {
  GeomFill_IsCorrectedFrenet: {};
  GeomFill_IsFixed: {};
  GeomFill_IsFrenet: {};
  GeomFill_IsConstantNormal: {};
  GeomFill_IsDarboux: {};
  GeomFill_IsGuideAC: {};
  GeomFill_IsGuidePlan: {};
  GeomFill_IsGuideACWithContact: {};
  GeomFill_IsGuidePlanWithContact: {};
  GeomFill_IsDiscreteTrihedron: {};
}

export declare type GeomFill_ApproxStyle = {
  GeomFill_Section: {};
  GeomFill_Location: {};
}

export declare type IntWalk_StatusDeflection = {
  IntWalk_PasTropGrand: {};
  IntWalk_StepTooSmall: {};
  IntWalk_PointConfondu: {};
  IntWalk_ArretSurPointPrecedent: {};
  IntWalk_ArretSurPoint: {};
  IntWalk_OK: {};
}

export declare type HatchGen_IntersectionType = {
  HatchGen_TRUE: {};
  HatchGen_TOUCH: {};
  HatchGen_TANGENT: {};
  HatchGen_UNDETERMINED: {};
}

export declare type HatchGen_ErrorStatus = {
  HatchGen_NoProblem: {};
  HatchGen_TrimFailure: {};
  HatchGen_TransitionFailure: {};
  HatchGen_IncoherentParity: {};
  HatchGen_IncompatibleStates: {};
}

export declare type FairCurve_AnalysisCode = {
  FairCurve_OK: {};
  FairCurve_NotConverged: {};
  FairCurve_InfiniteSliding: {};
  FairCurve_NullHeight: {};
}

export declare type GccEnt_Position = {
  GccEnt_unqualified: {};
  GccEnt_enclosing: {};
  GccEnt_enclosed: {};
  GccEnt_outside: {};
  GccEnt_noqualifier: {};
}

export declare type GccInt_IType = {
  GccInt_Lin: {};
  GccInt_Cir: {};
  GccInt_Ell: {};
  GccInt_Par: {};
  GccInt_Hpr: {};
  GccInt_Pnt: {};
}

export declare type Geom2dGcc_Type3 = {
  Geom2dGcc_CuCu: {};
  Geom2dGcc_CiCu: {};
}

export declare type Geom2dGcc_Type1 = {
  Geom2dGcc_CuCuCu: {};
  Geom2dGcc_CiCuCu: {};
  Geom2dGcc_CiCiCu: {};
  Geom2dGcc_CiLiCu: {};
  Geom2dGcc_LiLiCu: {};
  Geom2dGcc_LiCuCu: {};
}

export declare type Geom2dGcc_Type2 = {
  Geom2dGcc_CuCuOnCu: {};
  Geom2dGcc_CiCuOnCu: {};
  Geom2dGcc_LiCuOnCu: {};
  Geom2dGcc_CuPtOnCu: {};
  Geom2dGcc_CuCuOnLi: {};
  Geom2dGcc_CiCuOnLi: {};
  Geom2dGcc_LiCuOnLi: {};
  Geom2dGcc_CuPtOnLi: {};
  Geom2dGcc_CuCuOnCi: {};
  Geom2dGcc_CiCuOnCi: {};
  Geom2dGcc_LiCuOnCi: {};
  Geom2dGcc_CuPtOnCi: {};
}

export declare type IntPatch_IType = {
  IntPatch_Lin: {};
  IntPatch_Circle: {};
  IntPatch_Ellipse: {};
  IntPatch_Parabola: {};
  IntPatch_Hyperbola: {};
  IntPatch_Analytic: {};
  IntPatch_Walking: {};
  IntPatch_Restriction: {};
}

export declare type GeomFill_FillingStyle = {
  GeomFill_StretchStyle: {};
  GeomFill_CoonsStyle: {};
  GeomFill_CurvedStyle: {};
}

export declare type Intf_PIType = {
  Intf_EXTERNAL: {};
  Intf_FACE: {};
  Intf_EDGE: {};
  Intf_VERTEX: {};
}

export declare type Hatch_LineForm = {
  Hatch_XLINE: {};
  Hatch_YLINE: {};
  Hatch_ANYLINE: {};
}

export declare type IntPatch_SpecPntType = {
  IntPatch_SPntNone: {};
  IntPatch_SPntSeamU: {};
  IntPatch_SPntSeamV: {};
  IntPatch_SPntSeamUV: {};
  IntPatch_SPntPoleSeamU: {};
  IntPatch_SPntPole: {};
}

export declare type LocalAnalysis_StatusErrorType = {
  LocalAnalysis_NullFirstDerivative: {};
  LocalAnalysis_NullSecondDerivative: {};
  LocalAnalysis_TangentNotDefined: {};
  LocalAnalysis_NormalNotDefined: {};
  LocalAnalysis_CurvatureNotDefined: {};
}

export declare type TKGeomAlgoLib = {
  IntSurf_PntOn2S: typeof IntSurf_PntOn2S;
  IntSurf_Transition_1: typeof IntSurf_Transition_1;
  IntSurf_Transition_2: typeof IntSurf_Transition_2;
  IntSurf_Transition_3: typeof IntSurf_Transition_3;
  TopTrans_CurveTransition: typeof TopTrans_CurveTransition;
  IntRes2d_Transition_1: typeof IntRes2d_Transition_1;
  IntRes2d_Transition_2: typeof IntRes2d_Transition_2;
  IntRes2d_Transition_3: typeof IntRes2d_Transition_3;
  IntRes2d_Transition_4: typeof IntRes2d_Transition_4;
  IntRes2d_IntersectionPoint_1: typeof IntRes2d_IntersectionPoint_1;
  IntRes2d_IntersectionPoint_2: typeof IntRes2d_IntersectionPoint_2;
  IntRes2d_IntersectionSegment_1: typeof IntRes2d_IntersectionSegment_1;
  IntRes2d_IntersectionSegment_2: typeof IntRes2d_IntersectionSegment_2;
  IntRes2d_IntersectionSegment_3: typeof IntRes2d_IntersectionSegment_3;
  IntRes2d_IntersectionSegment_4: typeof IntRes2d_IntersectionSegment_4;
  IntCurve_IntImpConicParConic_1: typeof IntCurve_IntImpConicParConic_1;
  IntCurve_IntImpConicParConic_2: typeof IntCurve_IntImpConicParConic_2;
  IntCurve_IntConicConic_1: typeof IntCurve_IntConicConic_1;
  IntCurve_IntConicConic_2: typeof IntCurve_IntConicConic_2;
  IntCurve_IntConicConic_3: typeof IntCurve_IntConicConic_3;
  IntCurve_IntConicConic_4: typeof IntCurve_IntConicConic_4;
  IntCurve_IntConicConic_5: typeof IntCurve_IntConicConic_5;
  IntCurve_IntConicConic_6: typeof IntCurve_IntConicConic_6;
  IntCurve_IntConicConic_7: typeof IntCurve_IntConicConic_7;
  IntCurve_IntConicConic_8: typeof IntCurve_IntConicConic_8;
  IntCurve_IntConicConic_9: typeof IntCurve_IntConicConic_9;
  IntCurve_IntConicConic_10: typeof IntCurve_IntConicConic_10;
  IntCurve_IntConicConic_11: typeof IntCurve_IntConicConic_11;
  IntCurve_IntConicConic_12: typeof IntCurve_IntConicConic_12;
  IntCurve_IntConicConic_13: typeof IntCurve_IntConicConic_13;
  IntCurve_IntConicConic_14: typeof IntCurve_IntConicConic_14;
  IntCurve_IntConicConic_15: typeof IntCurve_IntConicConic_15;
  IntCurve_IntConicConic_16: typeof IntCurve_IntConicConic_16;
  IntRes2d_Domain_1: typeof IntRes2d_Domain_1;
  IntRes2d_Domain_2: typeof IntRes2d_Domain_2;
  IntRes2d_Domain_3: typeof IntRes2d_Domain_3;
  IntCurve_IConicTool_1: typeof IntCurve_IConicTool_1;
  IntCurve_IConicTool_2: typeof IntCurve_IConicTool_2;
  IntCurve_IConicTool_3: typeof IntCurve_IConicTool_3;
  IntCurve_IConicTool_4: typeof IntCurve_IConicTool_4;
  IntCurve_IConicTool_5: typeof IntCurve_IConicTool_5;
  IntCurve_IConicTool_6: typeof IntCurve_IConicTool_6;
  IntCurve_IConicTool_7: typeof IntCurve_IConicTool_7;
  GeomPlate_CurveConstraint_1: typeof GeomPlate_CurveConstraint_1;
  GeomPlate_CurveConstraint_2: typeof GeomPlate_CurveConstraint_2;
  GeomPlate_PointConstraint_1: typeof GeomPlate_PointConstraint_1;
  GeomPlate_PointConstraint_2: typeof GeomPlate_PointConstraint_2;
  Plate_PinpointConstraint_1: typeof Plate_PinpointConstraint_1;
  Plate_PinpointConstraint_2: typeof Plate_PinpointConstraint_2;
  Plate_LinearXYZConstraint_1: typeof Plate_LinearXYZConstraint_1;
  Plate_LinearXYZConstraint_2: typeof Plate_LinearXYZConstraint_2;
  Plate_LinearXYZConstraint_3: typeof Plate_LinearXYZConstraint_3;
  Plate_LinearXYZConstraint_4: typeof Plate_LinearXYZConstraint_4;
  Plate_LinearScalarConstraint_1: typeof Plate_LinearScalarConstraint_1;
  Plate_LinearScalarConstraint_2: typeof Plate_LinearScalarConstraint_2;
  Plate_LinearScalarConstraint_3: typeof Plate_LinearScalarConstraint_3;
  Plate_LinearScalarConstraint_4: typeof Plate_LinearScalarConstraint_4;
  Plate_LinearScalarConstraint_5: typeof Plate_LinearScalarConstraint_5;
  Plate_Plate_1: typeof Plate_Plate_1;
  Plate_Plate_2: typeof Plate_Plate_2;
  GeomPlate_BuildPlateSurface_1: typeof GeomPlate_BuildPlateSurface_1;
  GeomPlate_BuildPlateSurface_2: typeof GeomPlate_BuildPlateSurface_2;
  GeomPlate_BuildPlateSurface_3: typeof GeomPlate_BuildPlateSurface_3;
  IntCurveSurface_IntersectionPoint_1: typeof IntCurveSurface_IntersectionPoint_1;
  IntCurveSurface_IntersectionPoint_2: typeof IntCurveSurface_IntersectionPoint_2;
  IntCurveSurface_IntersectionSegment_1: typeof IntCurveSurface_IntersectionSegment_1;
  IntCurveSurface_IntersectionSegment_2: typeof IntCurveSurface_IntersectionSegment_2;
  IntCurveSurface_HInter: typeof IntCurveSurface_HInter;
  IntSurf_LineOn2S: typeof IntSurf_LineOn2S;
  GeomFill_BoundWithSurf: typeof GeomFill_BoundWithSurf;
  GeomFill_SimpleBound: typeof GeomFill_SimpleBound;
  GeomFill_CornerState: typeof GeomFill_CornerState;
  GeomFill_ConstrainedFilling: typeof GeomFill_ConstrainedFilling;
  IntSurf_Quadric_1: typeof IntSurf_Quadric_1;
  IntSurf_Quadric_2: typeof IntSurf_Quadric_2;
  IntSurf_Quadric_3: typeof IntSurf_Quadric_3;
  IntSurf_Quadric_4: typeof IntSurf_Quadric_4;
  IntSurf_Quadric_5: typeof IntSurf_Quadric_5;
  IntSurf_Quadric_6: typeof IntSurf_Quadric_6;
  IntSurf_InteriorPoint_1: typeof IntSurf_InteriorPoint_1;
  IntSurf_InteriorPoint_2: typeof IntSurf_InteriorPoint_2;
  IntSurf_Couple_1: typeof IntSurf_Couple_1;
  IntSurf_Couple_2: typeof IntSurf_Couple_2;
  IntSurf_PathPoint_1: typeof IntSurf_PathPoint_1;
  IntSurf_PathPoint_2: typeof IntSurf_PathPoint_2;
  HatchGen_PointOnElement_1: typeof HatchGen_PointOnElement_1;
  HatchGen_PointOnElement_2: typeof HatchGen_PointOnElement_2;
  HatchGen_PointOnHatching_1: typeof HatchGen_PointOnHatching_1;
  HatchGen_PointOnHatching_2: typeof HatchGen_PointOnHatching_2;
  HatchGen_Domain_1: typeof HatchGen_Domain_1;
  HatchGen_Domain_2: typeof HatchGen_Domain_2;
  HatchGen_Domain_3: typeof HatchGen_Domain_3;
  FairCurve_Batten: typeof FairCurve_Batten;
  FairCurve_BattenLaw: typeof FairCurve_BattenLaw;
  FairCurve_DistributionOfJerk: typeof FairCurve_DistributionOfJerk;
  FairCurve_DistributionOfSagging: typeof FairCurve_DistributionOfSagging;
  FairCurve_DistributionOfTension: typeof FairCurve_DistributionOfTension;
  FairCurve_EnergyOfBatten: typeof FairCurve_EnergyOfBatten;
  FairCurve_EnergyOfMVC: typeof FairCurve_EnergyOfMVC;
  FairCurve_MinimalVariation: typeof FairCurve_MinimalVariation;
  FairCurve_Newton: typeof FairCurve_Newton;
  GccAna_Circ2d2TanOn_1: typeof GccAna_Circ2d2TanOn_1;
  GccAna_Circ2d2TanOn_2: typeof GccAna_Circ2d2TanOn_2;
  GccAna_Circ2d2TanOn_3: typeof GccAna_Circ2d2TanOn_3;
  GccAna_Circ2d2TanOn_4: typeof GccAna_Circ2d2TanOn_4;
  GccAna_Circ2d2TanOn_5: typeof GccAna_Circ2d2TanOn_5;
  GccAna_Circ2d2TanOn_6: typeof GccAna_Circ2d2TanOn_6;
  GccAna_Circ2d2TanOn_7: typeof GccAna_Circ2d2TanOn_7;
  GccAna_Circ2d2TanOn_8: typeof GccAna_Circ2d2TanOn_8;
  GccAna_Circ2d2TanOn_9: typeof GccAna_Circ2d2TanOn_9;
  GccAna_Circ2d2TanOn_10: typeof GccAna_Circ2d2TanOn_10;
  GccAna_Circ2d2TanOn_11: typeof GccAna_Circ2d2TanOn_11;
  GccAna_Circ2d2TanOn_12: typeof GccAna_Circ2d2TanOn_12;
  GccAna_Circ2d2TanRad_1: typeof GccAna_Circ2d2TanRad_1;
  GccAna_Circ2d2TanRad_2: typeof GccAna_Circ2d2TanRad_2;
  GccAna_Circ2d2TanRad_3: typeof GccAna_Circ2d2TanRad_3;
  GccAna_Circ2d2TanRad_4: typeof GccAna_Circ2d2TanRad_4;
  GccAna_Circ2d2TanRad_5: typeof GccAna_Circ2d2TanRad_5;
  GccAna_Circ2d2TanRad_6: typeof GccAna_Circ2d2TanRad_6;
  GccAna_Circ2d3Tan_1: typeof GccAna_Circ2d3Tan_1;
  GccAna_Circ2d3Tan_2: typeof GccAna_Circ2d3Tan_2;
  GccAna_Circ2d3Tan_3: typeof GccAna_Circ2d3Tan_3;
  GccAna_Circ2d3Tan_4: typeof GccAna_Circ2d3Tan_4;
  GccAna_Circ2d3Tan_5: typeof GccAna_Circ2d3Tan_5;
  GccAna_Circ2d3Tan_6: typeof GccAna_Circ2d3Tan_6;
  GccAna_Circ2d3Tan_7: typeof GccAna_Circ2d3Tan_7;
  GccAna_Circ2d3Tan_8: typeof GccAna_Circ2d3Tan_8;
  GccAna_Circ2d3Tan_9: typeof GccAna_Circ2d3Tan_9;
  GccAna_Circ2d3Tan_10: typeof GccAna_Circ2d3Tan_10;
  GccAna_Circ2dBisec: typeof GccAna_Circ2dBisec;
  GccAna_Circ2dTanCen_1: typeof GccAna_Circ2dTanCen_1;
  GccAna_Circ2dTanCen_2: typeof GccAna_Circ2dTanCen_2;
  GccAna_Circ2dTanCen_3: typeof GccAna_Circ2dTanCen_3;
  GccAna_Circ2dTanOnRad_1: typeof GccAna_Circ2dTanOnRad_1;
  GccAna_Circ2dTanOnRad_2: typeof GccAna_Circ2dTanOnRad_2;
  GccAna_Circ2dTanOnRad_3: typeof GccAna_Circ2dTanOnRad_3;
  GccAna_Circ2dTanOnRad_4: typeof GccAna_Circ2dTanOnRad_4;
  GccAna_Circ2dTanOnRad_5: typeof GccAna_Circ2dTanOnRad_5;
  GccAna_Circ2dTanOnRad_6: typeof GccAna_Circ2dTanOnRad_6;
  GccAna_CircLin2dBisec: typeof GccAna_CircLin2dBisec;
  GccAna_CircPnt2dBisec_1: typeof GccAna_CircPnt2dBisec_1;
  GccAna_CircPnt2dBisec_2: typeof GccAna_CircPnt2dBisec_2;
  GccAna_Lin2d2Tan_1: typeof GccAna_Lin2d2Tan_1;
  GccAna_Lin2d2Tan_2: typeof GccAna_Lin2d2Tan_2;
  GccAna_Lin2d2Tan_3: typeof GccAna_Lin2d2Tan_3;
  GccAna_Lin2dBisec: typeof GccAna_Lin2dBisec;
  GccAna_Lin2dTanObl_1: typeof GccAna_Lin2dTanObl_1;
  GccAna_Lin2dTanObl_2: typeof GccAna_Lin2dTanObl_2;
  GccAna_Lin2dTanPar_1: typeof GccAna_Lin2dTanPar_1;
  GccAna_Lin2dTanPar_2: typeof GccAna_Lin2dTanPar_2;
  GccAna_Lin2dTanPer_1: typeof GccAna_Lin2dTanPer_1;
  GccAna_Lin2dTanPer_2: typeof GccAna_Lin2dTanPer_2;
  GccAna_Lin2dTanPer_3: typeof GccAna_Lin2dTanPer_3;
  GccAna_Lin2dTanPer_4: typeof GccAna_Lin2dTanPer_4;
  GccAna_LinPnt2dBisec: typeof GccAna_LinPnt2dBisec;
  GccAna_NoSolution_1: typeof GccAna_NoSolution_1;
  GccAna_NoSolution_2: typeof GccAna_NoSolution_2;
  GccAna_Pnt2dBisec: typeof GccAna_Pnt2dBisec;
  GccEnt_BadQualifier_1: typeof GccEnt_BadQualifier_1;
  GccEnt_BadQualifier_2: typeof GccEnt_BadQualifier_2;
  GccEnt_QualifiedCirc: typeof GccEnt_QualifiedCirc;
  GccEnt_QualifiedLin: typeof GccEnt_QualifiedLin;
  GccInt_BCirc: typeof GccInt_BCirc;
  GccInt_BElips: typeof GccInt_BElips;
  GccInt_BHyper: typeof GccInt_BHyper;
  GccInt_BLine: typeof GccInt_BLine;
  GccInt_BParab: typeof GccInt_BParab;
  GccInt_BPoint: typeof GccInt_BPoint;
  GeomAPI_ExtremaCurveCurve_1: typeof GeomAPI_ExtremaCurveCurve_1;
  GeomAPI_ExtremaCurveCurve_2: typeof GeomAPI_ExtremaCurveCurve_2;
  GeomAPI_ExtremaCurveCurve_3: typeof GeomAPI_ExtremaCurveCurve_3;
  GeomAPI_ExtremaCurveSurface_1: typeof GeomAPI_ExtremaCurveSurface_1;
  GeomAPI_ExtremaCurveSurface_2: typeof GeomAPI_ExtremaCurveSurface_2;
  GeomAPI_ExtremaCurveSurface_3: typeof GeomAPI_ExtremaCurveSurface_3;
  GeomAPI_ExtremaSurfaceSurface_1: typeof GeomAPI_ExtremaSurfaceSurface_1;
  GeomAPI_ExtremaSurfaceSurface_2: typeof GeomAPI_ExtremaSurfaceSurface_2;
  GeomAPI_ExtremaSurfaceSurface_3: typeof GeomAPI_ExtremaSurfaceSurface_3;
  GeomAPI_IntCS_1: typeof GeomAPI_IntCS_1;
  GeomAPI_IntCS_2: typeof GeomAPI_IntCS_2;
  IntPatch_Point: typeof IntPatch_Point;
  IntPatch_Intersection_1: typeof IntPatch_Intersection_1;
  IntPatch_Intersection_2: typeof IntPatch_Intersection_2;
  IntPatch_Intersection_3: typeof IntPatch_Intersection_3;
  GeomInt_LineConstructor: typeof GeomInt_LineConstructor;
  GeomAPI_IntSS_1: typeof GeomAPI_IntSS_1;
  GeomAPI_IntSS_2: typeof GeomAPI_IntSS_2;
  GeomAPI_PointsToBSpline_1: typeof GeomAPI_PointsToBSpline_1;
  GeomAPI_PointsToBSpline_2: typeof GeomAPI_PointsToBSpline_2;
  GeomAPI_PointsToBSpline_3: typeof GeomAPI_PointsToBSpline_3;
  GeomAPI_PointsToBSpline_4: typeof GeomAPI_PointsToBSpline_4;
  GeomAPI_PointsToBSpline_5: typeof GeomAPI_PointsToBSpline_5;
  GeomAPI_PointsToBSplineSurface_1: typeof GeomAPI_PointsToBSplineSurface_1;
  GeomAPI_PointsToBSplineSurface_2: typeof GeomAPI_PointsToBSplineSurface_2;
  GeomAPI_PointsToBSplineSurface_3: typeof GeomAPI_PointsToBSplineSurface_3;
  GeomAPI_PointsToBSplineSurface_4: typeof GeomAPI_PointsToBSplineSurface_4;
  GeomAPI_PointsToBSplineSurface_5: typeof GeomAPI_PointsToBSplineSurface_5;
  GeomAPI_ProjectPointOnCurve_1: typeof GeomAPI_ProjectPointOnCurve_1;
  GeomAPI_ProjectPointOnCurve_2: typeof GeomAPI_ProjectPointOnCurve_2;
  GeomAPI_ProjectPointOnCurve_3: typeof GeomAPI_ProjectPointOnCurve_3;
  GeomAPI_ProjectPointOnSurf_1: typeof GeomAPI_ProjectPointOnSurf_1;
  GeomAPI_ProjectPointOnSurf_2: typeof GeomAPI_ProjectPointOnSurf_2;
  GeomAPI_ProjectPointOnSurf_3: typeof GeomAPI_ProjectPointOnSurf_3;
  GeomAPI_ProjectPointOnSurf_4: typeof GeomAPI_ProjectPointOnSurf_4;
  GeomAPI_ProjectPointOnSurf_5: typeof GeomAPI_ProjectPointOnSurf_5;
  GeomFill_AppSurf_1: typeof GeomFill_AppSurf_1;
  GeomFill_AppSurf_2: typeof GeomFill_AppSurf_2;
  GeomFill_AppSweep_1: typeof GeomFill_AppSweep_1;
  GeomFill_AppSweep_2: typeof GeomFill_AppSweep_2;
  GeomFill_BSplineCurves_1: typeof GeomFill_BSplineCurves_1;
  GeomFill_BSplineCurves_2: typeof GeomFill_BSplineCurves_2;
  GeomFill_BSplineCurves_3: typeof GeomFill_BSplineCurves_3;
  GeomFill_BSplineCurves_4: typeof GeomFill_BSplineCurves_4;
  GeomFill_BezierCurves_1: typeof GeomFill_BezierCurves_1;
  GeomFill_BezierCurves_2: typeof GeomFill_BezierCurves_2;
  GeomFill_BezierCurves_3: typeof GeomFill_BezierCurves_3;
  GeomFill_BezierCurves_4: typeof GeomFill_BezierCurves_4;
  GeomFill_CircularBlendFunc: typeof GeomFill_CircularBlendFunc;
  GeomFill_ConstantBiNormal: typeof GeomFill_ConstantBiNormal;
  GeomFill_Filling: typeof GeomFill_Filling;
  GeomFill_Coons_1: typeof GeomFill_Coons_1;
  GeomFill_Coons_2: typeof GeomFill_Coons_2;
  GeomFill_Coons_3: typeof GeomFill_Coons_3;
  GeomFill_CoonsAlgPatch: typeof GeomFill_CoonsAlgPatch;
  GeomFill_CorrectedFrenet_1: typeof GeomFill_CorrectedFrenet_1;
  GeomFill_CorrectedFrenet_2: typeof GeomFill_CorrectedFrenet_2;
  GeomFill_CurveAndTrihedron: typeof GeomFill_CurveAndTrihedron;
  GeomFill_Curved_1: typeof GeomFill_Curved_1;
  GeomFill_Curved_2: typeof GeomFill_Curved_2;
  GeomFill_Curved_3: typeof GeomFill_Curved_3;
  GeomFill_Curved_4: typeof GeomFill_Curved_4;
  GeomFill_Curved_5: typeof GeomFill_Curved_5;
  GeomFill_Darboux: typeof GeomFill_Darboux;
  GeomFill_DegeneratedBound: typeof GeomFill_DegeneratedBound;
  GeomFill_DiscreteTrihedron: typeof GeomFill_DiscreteTrihedron;
  GeomFill_DraftTrihedron: typeof GeomFill_DraftTrihedron;
  GeomFill_EvolvedSection: typeof GeomFill_EvolvedSection;
  GeomFill_Fixed: typeof GeomFill_Fixed;
  GeomFill_Frenet: typeof GeomFill_Frenet;
  GeomFill_FunctionDraft: typeof GeomFill_FunctionDraft;
  GeomFill_Profiler: typeof GeomFill_Profiler;
  GeomFill_Generator: typeof GeomFill_Generator;
  GeomFill_GuideTrihedronAC: typeof GeomFill_GuideTrihedronAC;
  GeomFill_GuideTrihedronPlan: typeof GeomFill_GuideTrihedronPlan;
  GeomFill_Line_1: typeof GeomFill_Line_1;
  GeomFill_Line_2: typeof GeomFill_Line_2;
  GeomFill_LocFunction: typeof GeomFill_LocFunction;
  GeomFill_LocationDraft: typeof GeomFill_LocationDraft;
  GeomFill_LocationGuide: typeof GeomFill_LocationGuide;
  GeomFill_Pipe_1: typeof GeomFill_Pipe_1;
  GeomFill_Pipe_2: typeof GeomFill_Pipe_2;
  GeomFill_Pipe_3: typeof GeomFill_Pipe_3;
  GeomFill_Pipe_4: typeof GeomFill_Pipe_4;
  GeomFill_Pipe_5: typeof GeomFill_Pipe_5;
  GeomFill_Pipe_6: typeof GeomFill_Pipe_6;
  GeomFill_Pipe_7: typeof GeomFill_Pipe_7;
  GeomFill_Pipe_8: typeof GeomFill_Pipe_8;
  GeomFill_Pipe_9: typeof GeomFill_Pipe_9;
  GeomFill_Pipe_10: typeof GeomFill_Pipe_10;
  GeomFill_PlanFunc: typeof GeomFill_PlanFunc;
  GeomFill_PolynomialConvertor: typeof GeomFill_PolynomialConvertor;
  GeomFill_QuasiAngularConvertor: typeof GeomFill_QuasiAngularConvertor;
  GeomFill_SectionGenerator: typeof GeomFill_SectionGenerator;
  GeomFill_SectionPlacement: typeof GeomFill_SectionPlacement;
  GeomFill_SnglrFunc: typeof GeomFill_SnglrFunc;
  GeomFill_Stretch_1: typeof GeomFill_Stretch_1;
  GeomFill_Stretch_2: typeof GeomFill_Stretch_2;
  GeomFill_Stretch_3: typeof GeomFill_Stretch_3;
  GeomFill_Sweep: typeof GeomFill_Sweep;
  GeomFill_SweepFunction: typeof GeomFill_SweepFunction;
  GeomFill_Tensor: typeof GeomFill_Tensor;
  GeomFill_TgtOnCoons: typeof GeomFill_TgtOnCoons;
  GeomFill_UniformSection: typeof GeomFill_UniformSection;
  GeomInt_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfWLApprox: typeof GeomInt_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfWLApprox;
  GeomInt_TheMultiLineOfWLApprox_1: typeof GeomInt_TheMultiLineOfWLApprox_1;
  GeomInt_TheMultiLineOfWLApprox_2: typeof GeomInt_TheMultiLineOfWLApprox_2;
  GeomInt_TheMultiLineOfWLApprox_3: typeof GeomInt_TheMultiLineOfWLApprox_3;
  GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_1: typeof GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_1;
  GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_2: typeof GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_2;
  GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_3: typeof GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_3;
  GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_4: typeof GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox_4;
  GeomInt_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfWLApprox: typeof GeomInt_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfWLApprox;
  GeomInt_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfWLApprox: typeof GeomInt_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfWLApprox;
  GeomInt_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfWLApprox: typeof GeomInt_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfWLApprox;
  GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox_1: typeof GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox_1;
  GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox_2: typeof GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox_2;
  GeomInt_MyGradientOfTheComputeLineBezierOfWLApprox: typeof GeomInt_MyGradientOfTheComputeLineBezierOfWLApprox;
  GeomInt_MyGradientbisOfTheComputeLineOfWLApprox: typeof GeomInt_MyGradientbisOfTheComputeLineOfWLApprox;
  GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_1: typeof GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_1;
  GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_2: typeof GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_2;
  GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_3: typeof GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_3;
  GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_4: typeof GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox_4;
  GeomInt_ParFunctionOfMyGradientOfTheComputeLineBezierOfWLApprox: typeof GeomInt_ParFunctionOfMyGradientOfTheComputeLineBezierOfWLApprox;
  GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_1: typeof GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_1;
  GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_2: typeof GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_2;
  GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_3: typeof GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_3;
  GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_4: typeof GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox_4;
  GeomInt_ParFunctionOfMyGradientbisOfTheComputeLineOfWLApprox: typeof GeomInt_ParFunctionOfMyGradientbisOfTheComputeLineOfWLApprox;
  GeomInt_ParameterAndOrientation_1: typeof GeomInt_ParameterAndOrientation_1;
  GeomInt_ParameterAndOrientation_2: typeof GeomInt_ParameterAndOrientation_2;
  GeomInt_TheComputeLineBezierOfWLApprox_1: typeof GeomInt_TheComputeLineBezierOfWLApprox_1;
  GeomInt_TheComputeLineBezierOfWLApprox_2: typeof GeomInt_TheComputeLineBezierOfWLApprox_2;
  GeomInt_TheComputeLineBezierOfWLApprox_3: typeof GeomInt_TheComputeLineBezierOfWLApprox_3;
  GeomInt_TheComputeLineBezierOfWLApprox_4: typeof GeomInt_TheComputeLineBezierOfWLApprox_4;
  GeomInt_TheComputeLineOfWLApprox_1: typeof GeomInt_TheComputeLineOfWLApprox_1;
  GeomInt_TheComputeLineOfWLApprox_2: typeof GeomInt_TheComputeLineOfWLApprox_2;
  GeomInt_TheComputeLineOfWLApprox_3: typeof GeomInt_TheComputeLineOfWLApprox_3;
  GeomInt_TheComputeLineOfWLApprox_4: typeof GeomInt_TheComputeLineOfWLApprox_4;
  GeomInt_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfWLApprox: typeof GeomInt_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfWLApprox;
  GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_1: typeof GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_1;
  GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_2: typeof GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_2;
  GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_3: typeof GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox_3;
  GeomInt_TheImpPrmSvSurfacesOfWLApprox_1: typeof GeomInt_TheImpPrmSvSurfacesOfWLApprox_1;
  GeomInt_TheImpPrmSvSurfacesOfWLApprox_2: typeof GeomInt_TheImpPrmSvSurfacesOfWLApprox_2;
  GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox_1: typeof GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox_1;
  GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox_2: typeof GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox_2;
  GeomInt_ThePrmPrmSvSurfacesOfWLApprox: typeof GeomInt_ThePrmPrmSvSurfacesOfWLApprox;
  GeomPlate_Aij_1: typeof GeomPlate_Aij_1;
  GeomPlate_Aij_2: typeof GeomPlate_Aij_2;
  GeomPlate_BuildAveragePlane_1: typeof GeomPlate_BuildAveragePlane_1;
  GeomPlate_BuildAveragePlane_2: typeof GeomPlate_BuildAveragePlane_2;
  GeomPlate_MakeApprox_1: typeof GeomPlate_MakeApprox_1;
  GeomPlate_MakeApprox_2: typeof GeomPlate_MakeApprox_2;
  GeomPlate_PlateG0Criterion: typeof GeomPlate_PlateG0Criterion;
  GeomPlate_PlateG1Criterion: typeof GeomPlate_PlateG1Criterion;
  GeomPlate_Surface: typeof GeomPlate_Surface;
  Intf_SectionPoint_1: typeof Intf_SectionPoint_1;
  Intf_SectionPoint_2: typeof Intf_SectionPoint_2;
  Intf_SectionPoint_3: typeof Intf_SectionPoint_3;
  Intf_SectionLine_1: typeof Intf_SectionLine_1;
  Intf_SectionLine_2: typeof Intf_SectionLine_2;
  Intf_TangentZone: typeof Intf_TangentZone;
  Hatch_Parameter_1: typeof Hatch_Parameter_1;
  Hatch_Parameter_2: typeof Hatch_Parameter_2;
  Hatch_Line_1: typeof Hatch_Line_1;
  Hatch_Line_2: typeof Hatch_Line_2;
  Hatch_Hatcher: typeof Hatch_Hatcher;
  IntCurve_PConic_1: typeof IntCurve_PConic_1;
  IntCurve_PConic_2: typeof IntCurve_PConic_2;
  IntCurve_PConic_3: typeof IntCurve_PConic_3;
  IntCurve_PConic_4: typeof IntCurve_PConic_4;
  IntCurve_PConic_5: typeof IntCurve_PConic_5;
  IntCurve_PConic_6: typeof IntCurve_PConic_6;
  Interval_1: typeof Interval_1;
  Interval_2: typeof Interval_2;
  Interval_3: typeof Interval_3;
  Interval_4: typeof Interval_4;
  PeriodicInterval_1: typeof PeriodicInterval_1;
  PeriodicInterval_2: typeof PeriodicInterval_2;
  PeriodicInterval_3: typeof PeriodicInterval_3;
  IntCurve_MyImpParToolOfIntImpConicParConic: typeof IntCurve_MyImpParToolOfIntImpConicParConic;
  IntCurveSurface_TheCSFunctionOfHInter: typeof IntCurveSurface_TheCSFunctionOfHInter;
  IntCurveSurface_TheExactHInter_1: typeof IntCurveSurface_TheExactHInter_1;
  IntCurveSurface_TheExactHInter_2: typeof IntCurveSurface_TheExactHInter_2;
  IntCurveSurface_TheInterferenceOfHInter_1: typeof IntCurveSurface_TheInterferenceOfHInter_1;
  IntCurveSurface_TheInterferenceOfHInter_2: typeof IntCurveSurface_TheInterferenceOfHInter_2;
  IntCurveSurface_TheInterferenceOfHInter_3: typeof IntCurveSurface_TheInterferenceOfHInter_3;
  IntCurveSurface_TheInterferenceOfHInter_4: typeof IntCurveSurface_TheInterferenceOfHInter_4;
  IntCurveSurface_TheInterferenceOfHInter_5: typeof IntCurveSurface_TheInterferenceOfHInter_5;
  IntCurveSurface_TheInterferenceOfHInter_6: typeof IntCurveSurface_TheInterferenceOfHInter_6;
  IntCurveSurface_TheInterferenceOfHInter_7: typeof IntCurveSurface_TheInterferenceOfHInter_7;
  IntCurveSurface_ThePolygonOfHInter_1: typeof IntCurveSurface_ThePolygonOfHInter_1;
  IntCurveSurface_ThePolygonOfHInter_2: typeof IntCurveSurface_ThePolygonOfHInter_2;
  IntCurveSurface_ThePolygonOfHInter_3: typeof IntCurveSurface_ThePolygonOfHInter_3;
  IntCurveSurface_TheQuadCurvExactHInter: typeof IntCurveSurface_TheQuadCurvExactHInter;
  IntCurveSurface_TheQuadCurvFuncOfTheQuadCurvExactHInter: typeof IntCurveSurface_TheQuadCurvFuncOfTheQuadCurvExactHInter;
  IntPatch_ALine_1: typeof IntPatch_ALine_1;
  IntPatch_ALine_2: typeof IntPatch_ALine_2;
  IntPatch_ALine_3: typeof IntPatch_ALine_3;
  IntPatch_ALineToWLine: typeof IntPatch_ALineToWLine;
  IntPatch_ArcFunction: typeof IntPatch_ArcFunction;
  IntPatch_CSFunction: typeof IntPatch_CSFunction;
  IntPatch_CurvIntSurf_1: typeof IntPatch_CurvIntSurf_1;
  IntPatch_CurvIntSurf_2: typeof IntPatch_CurvIntSurf_2;
  IntPatch_GLine_1: typeof IntPatch_GLine_1;
  IntPatch_GLine_2: typeof IntPatch_GLine_2;
  IntPatch_GLine_3: typeof IntPatch_GLine_3;
  IntPatch_GLine_4: typeof IntPatch_GLine_4;
  IntPatch_GLine_5: typeof IntPatch_GLine_5;
  IntPatch_GLine_6: typeof IntPatch_GLine_6;
  IntPatch_GLine_7: typeof IntPatch_GLine_7;
  IntPatch_GLine_8: typeof IntPatch_GLine_8;
  IntPatch_GLine_9: typeof IntPatch_GLine_9;
  IntPatch_GLine_10: typeof IntPatch_GLine_10;
  IntPatch_GLine_11: typeof IntPatch_GLine_11;
  IntPatch_GLine_12: typeof IntPatch_GLine_12;
  IntPatch_GLine_13: typeof IntPatch_GLine_13;
  IntPatch_GLine_14: typeof IntPatch_GLine_14;
  IntPatch_GLine_15: typeof IntPatch_GLine_15;
  IntPatch_HInterTool: typeof IntPatch_HInterTool;
  IntPatch_ThePathPointOfTheSOnBounds_1: typeof IntPatch_ThePathPointOfTheSOnBounds_1;
  IntPatch_ThePathPointOfTheSOnBounds_2: typeof IntPatch_ThePathPointOfTheSOnBounds_2;
  IntPatch_ThePathPointOfTheSOnBounds_3: typeof IntPatch_ThePathPointOfTheSOnBounds_3;
  IntPatch_TheSegmentOfTheSOnBounds: typeof IntPatch_TheSegmentOfTheSOnBounds;
  IntPatch_TheSOnBounds: typeof IntPatch_TheSOnBounds;
  IntPatch_ImpImpIntersection_1: typeof IntPatch_ImpImpIntersection_1;
  IntPatch_ImpImpIntersection_2: typeof IntPatch_ImpImpIntersection_2;
  IntPatch_TheSearchInside_1: typeof IntPatch_TheSearchInside_1;
  IntPatch_TheSearchInside_2: typeof IntPatch_TheSearchInside_2;
  IntPatch_ImpPrmIntersection_1: typeof IntPatch_ImpPrmIntersection_1;
  IntPatch_ImpPrmIntersection_2: typeof IntPatch_ImpPrmIntersection_2;
  IntPatch_InterferencePolyhedron_1: typeof IntPatch_InterferencePolyhedron_1;
  IntPatch_InterferencePolyhedron_2: typeof IntPatch_InterferencePolyhedron_2;
  IntPatch_InterferencePolyhedron_3: typeof IntPatch_InterferencePolyhedron_3;
  IntPatch_LineConstructor: typeof IntPatch_LineConstructor;
  IntPatch_PolyArc: typeof IntPatch_PolyArc;
  IntPatch_PolyLine_1: typeof IntPatch_PolyLine_1;
  IntPatch_PolyLine_2: typeof IntPatch_PolyLine_2;
  IntPatch_PrmPrmIntersection: typeof IntPatch_PrmPrmIntersection;
  IntPatch_PrmPrmIntersection_T3Bits: typeof IntPatch_PrmPrmIntersection_T3Bits;
  Intf_InterferencePolygon2d_1: typeof Intf_InterferencePolygon2d_1;
  Intf_InterferencePolygon2d_2: typeof Intf_InterferencePolygon2d_2;
  Intf_InterferencePolygon2d_3: typeof Intf_InterferencePolygon2d_3;
  IntPatch_TheIWLineOfTheIWalking: typeof IntPatch_TheIWLineOfTheIWalking;
  IntPatch_TheIWalking: typeof IntPatch_TheIWalking;
  IntPatch_TheSurfFunction_1: typeof IntPatch_TheSurfFunction_1;
  IntPatch_TheSurfFunction_2: typeof IntPatch_TheSurfFunction_2;
  IntPatch_TheSurfFunction_3: typeof IntPatch_TheSurfFunction_3;
  IntPatch_WLine_1: typeof IntPatch_WLine_1;
  IntPatch_WLine_2: typeof IntPatch_WLine_2;
  IntPatch_WLine_3: typeof IntPatch_WLine_3;
  IntPolyh_Edge_1: typeof IntPolyh_Edge_1;
  IntPolyh_Edge_2: typeof IntPolyh_Edge_2;
  IntPolyh_Point_1: typeof IntPolyh_Point_1;
  IntPolyh_Point_2: typeof IntPolyh_Point_2;
  IntPolyh_StartPoint_1: typeof IntPolyh_StartPoint_1;
  IntPolyh_StartPoint_2: typeof IntPolyh_StartPoint_2;
  IntPolyh_SectionLine_1: typeof IntPolyh_SectionLine_1;
  IntPolyh_SectionLine_2: typeof IntPolyh_SectionLine_2;
  IntPolyh_Couple_1: typeof IntPolyh_Couple_1;
  IntPolyh_Couple_2: typeof IntPolyh_Couple_2;
  IntPolyh_Intersection_1: typeof IntPolyh_Intersection_1;
  IntPolyh_Intersection_2: typeof IntPolyh_Intersection_2;
  IntPolyh_Intersection_3: typeof IntPolyh_Intersection_3;
  IntPolyh_Triangle_1: typeof IntPolyh_Triangle_1;
  IntPolyh_Triangle_2: typeof IntPolyh_Triangle_2;
  IntWalk_TheFunctionOfTheInt2S: typeof IntWalk_TheFunctionOfTheInt2S;
  IntWalk_TheInt2S_1: typeof IntWalk_TheInt2S_1;
  IntWalk_TheInt2S_2: typeof IntWalk_TheInt2S_2;
  IntWalk_PWalking_1: typeof IntWalk_PWalking_1;
  IntWalk_PWalking_2: typeof IntWalk_PWalking_2;
  Intf_Tool: typeof Intf_Tool;
  Law_BSpFunc_1: typeof Law_BSpFunc_1;
  Law_BSpFunc_2: typeof Law_BSpFunc_2;
  Law_BSpline_1: typeof Law_BSpline_1;
  Law_BSpline_2: typeof Law_BSpline_2;
  Law_BSplineKnotSplitting: typeof Law_BSplineKnotSplitting;
  Law_Composite_1: typeof Law_Composite_1;
  Law_Composite_2: typeof Law_Composite_2;
  Law_Constant: typeof Law_Constant;
  Law_Interpol: typeof Law_Interpol;
  Law_Linear: typeof Law_Linear;
  Law_S: typeof Law_S;
  LocalAnalysis_CurveContinuity: typeof LocalAnalysis_CurveContinuity;
  LocalAnalysis_SurfaceContinuity_1: typeof LocalAnalysis_SurfaceContinuity_1;
  LocalAnalysis_SurfaceContinuity_2: typeof LocalAnalysis_SurfaceContinuity_2;
  LocalAnalysis_SurfaceContinuity_3: typeof LocalAnalysis_SurfaceContinuity_3;
  NLPlate_HPG0Constraint: typeof NLPlate_HPG0Constraint;
  Plate_D1_1: typeof Plate_D1_1;
  Plate_D1_2: typeof Plate_D1_2;
  NLPlate_HPG0G1Constraint: typeof NLPlate_HPG0G1Constraint;
  Plate_D2_1: typeof Plate_D2_1;
  Plate_D2_2: typeof Plate_D2_2;
  NLPlate_HPG0G2Constraint: typeof NLPlate_HPG0G2Constraint;
  Plate_D3_1: typeof Plate_D3_1;
  Plate_D3_2: typeof Plate_D3_2;
  NLPlate_HPG0G3Constraint: typeof NLPlate_HPG0G3Constraint;
  NLPlate_HPG1Constraint: typeof NLPlate_HPG1Constraint;
  NLPlate_HPG2Constraint: typeof NLPlate_HPG2Constraint;
  NLPlate_HPG3Constraint: typeof NLPlate_HPG3Constraint;
  NLPlate_NLPlate: typeof NLPlate_NLPlate;
  Plate_FreeGtoCConstraint_1: typeof Plate_FreeGtoCConstraint_1;
  Plate_FreeGtoCConstraint_2: typeof Plate_FreeGtoCConstraint_2;
  Plate_FreeGtoCConstraint_3: typeof Plate_FreeGtoCConstraint_3;
  Plate_GlobalTranslationConstraint: typeof Plate_GlobalTranslationConstraint;
  Plate_GtoCConstraint_1: typeof Plate_GtoCConstraint_1;
  Plate_GtoCConstraint_2: typeof Plate_GtoCConstraint_2;
  Plate_GtoCConstraint_3: typeof Plate_GtoCConstraint_3;
  Plate_GtoCConstraint_4: typeof Plate_GtoCConstraint_4;
  Plate_GtoCConstraint_5: typeof Plate_GtoCConstraint_5;
  Plate_GtoCConstraint_6: typeof Plate_GtoCConstraint_6;
  Plate_GtoCConstraint_7: typeof Plate_GtoCConstraint_7;
  Plate_LineConstraint: typeof Plate_LineConstraint;
  Plate_PlaneConstraint: typeof Plate_PlaneConstraint;
  Plate_SampledCurveConstraint: typeof Plate_SampledCurveConstraint;
  TopTrans_SurfaceTransition: typeof TopTrans_SurfaceTransition;
  IntSurf_ListOfPntOn2S_1: typeof IntSurf_ListOfPntOn2S_1;
  IntSurf_ListOfPntOn2S_2: typeof IntSurf_ListOfPntOn2S_2;
  IntSurf_ListOfPntOn2S_3: typeof IntSurf_ListOfPntOn2S_3;
  IntRes2d_SequenceOfIntersectionPoint_1: typeof IntRes2d_SequenceOfIntersectionPoint_1;
  IntRes2d_SequenceOfIntersectionPoint_2: typeof IntRes2d_SequenceOfIntersectionPoint_2;
  IntRes2d_SequenceOfIntersectionPoint_3: typeof IntRes2d_SequenceOfIntersectionPoint_3;
  IntRes2d_SequenceOfIntersectionSegment_1: typeof IntRes2d_SequenceOfIntersectionSegment_1;
  IntRes2d_SequenceOfIntersectionSegment_2: typeof IntRes2d_SequenceOfIntersectionSegment_2;
  IntRes2d_SequenceOfIntersectionSegment_3: typeof IntRes2d_SequenceOfIntersectionSegment_3;
  Handle_GeomFill_LocationLaw_1: typeof Handle_GeomFill_LocationLaw_1;
  Handle_GeomFill_LocationLaw_2: typeof Handle_GeomFill_LocationLaw_2;
  Handle_GeomFill_LocationLaw_3: typeof Handle_GeomFill_LocationLaw_3;
  Handle_GeomFill_LocationLaw_4: typeof Handle_GeomFill_LocationLaw_4;
  Handle_GeomFill_HArray1OfLocationLaw_1: typeof Handle_GeomFill_HArray1OfLocationLaw_1;
  Handle_GeomFill_HArray1OfLocationLaw_2: typeof Handle_GeomFill_HArray1OfLocationLaw_2;
  Handle_GeomFill_HArray1OfLocationLaw_3: typeof Handle_GeomFill_HArray1OfLocationLaw_3;
  Handle_GeomFill_HArray1OfLocationLaw_4: typeof Handle_GeomFill_HArray1OfLocationLaw_4;
  Handle_GeomPlate_CurveConstraint_1: typeof Handle_GeomPlate_CurveConstraint_1;
  Handle_GeomPlate_CurveConstraint_2: typeof Handle_GeomPlate_CurveConstraint_2;
  Handle_GeomPlate_CurveConstraint_3: typeof Handle_GeomPlate_CurveConstraint_3;
  Handle_GeomPlate_CurveConstraint_4: typeof Handle_GeomPlate_CurveConstraint_4;
  Handle_GeomPlate_HSequenceOfCurveConstraint_1: typeof Handle_GeomPlate_HSequenceOfCurveConstraint_1;
  Handle_GeomPlate_HSequenceOfCurveConstraint_2: typeof Handle_GeomPlate_HSequenceOfCurveConstraint_2;
  Handle_GeomPlate_HSequenceOfCurveConstraint_3: typeof Handle_GeomPlate_HSequenceOfCurveConstraint_3;
  Handle_GeomPlate_HSequenceOfCurveConstraint_4: typeof Handle_GeomPlate_HSequenceOfCurveConstraint_4;
  GeomPlate_Array1OfSequenceOfReal_1: typeof GeomPlate_Array1OfSequenceOfReal_1;
  GeomPlate_Array1OfSequenceOfReal_2: typeof GeomPlate_Array1OfSequenceOfReal_2;
  GeomPlate_Array1OfSequenceOfReal_3: typeof GeomPlate_Array1OfSequenceOfReal_3;
  GeomPlate_Array1OfSequenceOfReal_4: typeof GeomPlate_Array1OfSequenceOfReal_4;
  GeomPlate_Array1OfSequenceOfReal_5: typeof GeomPlate_Array1OfSequenceOfReal_5;
  Handle_GeomPlate_HArray1OfSequenceOfReal_1: typeof Handle_GeomPlate_HArray1OfSequenceOfReal_1;
  Handle_GeomPlate_HArray1OfSequenceOfReal_2: typeof Handle_GeomPlate_HArray1OfSequenceOfReal_2;
  Handle_GeomPlate_HArray1OfSequenceOfReal_3: typeof Handle_GeomPlate_HArray1OfSequenceOfReal_3;
  Handle_GeomPlate_HArray1OfSequenceOfReal_4: typeof Handle_GeomPlate_HArray1OfSequenceOfReal_4;
  Handle_GeomPlate_PointConstraint_1: typeof Handle_GeomPlate_PointConstraint_1;
  Handle_GeomPlate_PointConstraint_2: typeof Handle_GeomPlate_PointConstraint_2;
  Handle_GeomPlate_PointConstraint_3: typeof Handle_GeomPlate_PointConstraint_3;
  Handle_GeomPlate_PointConstraint_4: typeof Handle_GeomPlate_PointConstraint_4;
  Handle_GeomPlate_HSequenceOfPointConstraint_1: typeof Handle_GeomPlate_HSequenceOfPointConstraint_1;
  Handle_GeomPlate_HSequenceOfPointConstraint_2: typeof Handle_GeomPlate_HSequenceOfPointConstraint_2;
  Handle_GeomPlate_HSequenceOfPointConstraint_3: typeof Handle_GeomPlate_HSequenceOfPointConstraint_3;
  Handle_GeomPlate_HSequenceOfPointConstraint_4: typeof Handle_GeomPlate_HSequenceOfPointConstraint_4;
  Plate_SequenceOfPinpointConstraint_1: typeof Plate_SequenceOfPinpointConstraint_1;
  Plate_SequenceOfPinpointConstraint_2: typeof Plate_SequenceOfPinpointConstraint_2;
  Plate_SequenceOfPinpointConstraint_3: typeof Plate_SequenceOfPinpointConstraint_3;
  Plate_Array1OfPinpointConstraint_1: typeof Plate_Array1OfPinpointConstraint_1;
  Plate_Array1OfPinpointConstraint_2: typeof Plate_Array1OfPinpointConstraint_2;
  Plate_Array1OfPinpointConstraint_3: typeof Plate_Array1OfPinpointConstraint_3;
  Plate_Array1OfPinpointConstraint_4: typeof Plate_Array1OfPinpointConstraint_4;
  Plate_Array1OfPinpointConstraint_5: typeof Plate_Array1OfPinpointConstraint_5;
  Handle_Plate_HArray1OfPinpointConstraint_1: typeof Handle_Plate_HArray1OfPinpointConstraint_1;
  Handle_Plate_HArray1OfPinpointConstraint_2: typeof Handle_Plate_HArray1OfPinpointConstraint_2;
  Handle_Plate_HArray1OfPinpointConstraint_3: typeof Handle_Plate_HArray1OfPinpointConstraint_3;
  Handle_Plate_HArray1OfPinpointConstraint_4: typeof Handle_Plate_HArray1OfPinpointConstraint_4;
  Plate_SequenceOfLinearXYZConstraint_1: typeof Plate_SequenceOfLinearXYZConstraint_1;
  Plate_SequenceOfLinearXYZConstraint_2: typeof Plate_SequenceOfLinearXYZConstraint_2;
  Plate_SequenceOfLinearXYZConstraint_3: typeof Plate_SequenceOfLinearXYZConstraint_3;
  Plate_SequenceOfLinearScalarConstraint_1: typeof Plate_SequenceOfLinearScalarConstraint_1;
  Plate_SequenceOfLinearScalarConstraint_2: typeof Plate_SequenceOfLinearScalarConstraint_2;
  Plate_SequenceOfLinearScalarConstraint_3: typeof Plate_SequenceOfLinearScalarConstraint_3;
  Handle_GeomPlate_HArray1OfHCurve_1: typeof Handle_GeomPlate_HArray1OfHCurve_1;
  Handle_GeomPlate_HArray1OfHCurve_2: typeof Handle_GeomPlate_HArray1OfHCurve_2;
  Handle_GeomPlate_HArray1OfHCurve_3: typeof Handle_GeomPlate_HArray1OfHCurve_3;
  Handle_GeomPlate_HArray1OfHCurve_4: typeof Handle_GeomPlate_HArray1OfHCurve_4;
  GeomFill_SequenceOfTrsf_1: typeof GeomFill_SequenceOfTrsf_1;
  GeomFill_SequenceOfTrsf_2: typeof GeomFill_SequenceOfTrsf_2;
  GeomFill_SequenceOfTrsf_3: typeof GeomFill_SequenceOfTrsf_3;
  Handle_GeomFill_SectionLaw_1: typeof Handle_GeomFill_SectionLaw_1;
  Handle_GeomFill_SectionLaw_2: typeof Handle_GeomFill_SectionLaw_2;
  Handle_GeomFill_SectionLaw_3: typeof Handle_GeomFill_SectionLaw_3;
  Handle_GeomFill_SectionLaw_4: typeof Handle_GeomFill_SectionLaw_4;
  Handle_GeomFill_HArray1OfSectionLaw_1: typeof Handle_GeomFill_HArray1OfSectionLaw_1;
  Handle_GeomFill_HArray1OfSectionLaw_2: typeof Handle_GeomFill_HArray1OfSectionLaw_2;
  Handle_GeomFill_HArray1OfSectionLaw_3: typeof Handle_GeomFill_HArray1OfSectionLaw_3;
  Handle_GeomFill_HArray1OfSectionLaw_4: typeof Handle_GeomFill_HArray1OfSectionLaw_4;
  IntCurveSurface_SequenceOfPnt_1: typeof IntCurveSurface_SequenceOfPnt_1;
  IntCurveSurface_SequenceOfPnt_2: typeof IntCurveSurface_SequenceOfPnt_2;
  IntCurveSurface_SequenceOfPnt_3: typeof IntCurveSurface_SequenceOfPnt_3;
  IntCurveSurface_SequenceOfSeg_1: typeof IntCurveSurface_SequenceOfSeg_1;
  IntCurveSurface_SequenceOfSeg_2: typeof IntCurveSurface_SequenceOfSeg_2;
  IntCurveSurface_SequenceOfSeg_3: typeof IntCurveSurface_SequenceOfSeg_3;
  IntSurf_SequenceOfPntOn2S_1: typeof IntSurf_SequenceOfPntOn2S_1;
  IntSurf_SequenceOfPntOn2S_2: typeof IntSurf_SequenceOfPntOn2S_2;
  IntSurf_SequenceOfPntOn2S_3: typeof IntSurf_SequenceOfPntOn2S_3;
  Handle_IntSurf_LineOn2S_1: typeof Handle_IntSurf_LineOn2S_1;
  Handle_IntSurf_LineOn2S_2: typeof Handle_IntSurf_LineOn2S_2;
  Handle_IntSurf_LineOn2S_3: typeof Handle_IntSurf_LineOn2S_3;
  Handle_IntSurf_LineOn2S_4: typeof Handle_IntSurf_LineOn2S_4;
  Handle_GeomFill_Boundary_1: typeof Handle_GeomFill_Boundary_1;
  Handle_GeomFill_Boundary_2: typeof Handle_GeomFill_Boundary_2;
  Handle_GeomFill_Boundary_3: typeof Handle_GeomFill_Boundary_3;
  Handle_GeomFill_Boundary_4: typeof Handle_GeomFill_Boundary_4;
  Handle_GeomFill_BoundWithSurf_1: typeof Handle_GeomFill_BoundWithSurf_1;
  Handle_GeomFill_BoundWithSurf_2: typeof Handle_GeomFill_BoundWithSurf_2;
  Handle_GeomFill_BoundWithSurf_3: typeof Handle_GeomFill_BoundWithSurf_3;
  Handle_GeomFill_BoundWithSurf_4: typeof Handle_GeomFill_BoundWithSurf_4;
  Handle_GeomFill_SimpleBound_1: typeof Handle_GeomFill_SimpleBound_1;
  Handle_GeomFill_SimpleBound_2: typeof Handle_GeomFill_SimpleBound_2;
  Handle_GeomFill_SimpleBound_3: typeof Handle_GeomFill_SimpleBound_3;
  Handle_GeomFill_SimpleBound_4: typeof Handle_GeomFill_SimpleBound_4;
  Handle_Law_Function_1: typeof Handle_Law_Function_1;
  Handle_Law_Function_2: typeof Handle_Law_Function_2;
  Handle_Law_Function_3: typeof Handle_Law_Function_3;
  Handle_Law_Function_4: typeof Handle_Law_Function_4;
  IntSurf_SequenceOfInteriorPoint_1: typeof IntSurf_SequenceOfInteriorPoint_1;
  IntSurf_SequenceOfInteriorPoint_2: typeof IntSurf_SequenceOfInteriorPoint_2;
  IntSurf_SequenceOfInteriorPoint_3: typeof IntSurf_SequenceOfInteriorPoint_3;
  IntSurf_SequenceOfCouple_1: typeof IntSurf_SequenceOfCouple_1;
  IntSurf_SequenceOfCouple_2: typeof IntSurf_SequenceOfCouple_2;
  IntSurf_SequenceOfCouple_3: typeof IntSurf_SequenceOfCouple_3;
  IntSurf_SequenceOfPathPoint_1: typeof IntSurf_SequenceOfPathPoint_1;
  IntSurf_SequenceOfPathPoint_2: typeof IntSurf_SequenceOfPathPoint_2;
  IntSurf_SequenceOfPathPoint_3: typeof IntSurf_SequenceOfPathPoint_3;
  Geom2dHatch_MapOfElements_1: typeof Geom2dHatch_MapOfElements_1;
  Geom2dHatch_MapOfElements_2: typeof Geom2dHatch_MapOfElements_2;
  Geom2dHatch_MapOfElements_3: typeof Geom2dHatch_MapOfElements_3;
  HatchGen_PointsOnElement_1: typeof HatchGen_PointsOnElement_1;
  HatchGen_PointsOnElement_2: typeof HatchGen_PointsOnElement_2;
  HatchGen_PointsOnElement_3: typeof HatchGen_PointsOnElement_3;
  HatchGen_PointsOnHatching_1: typeof HatchGen_PointsOnHatching_1;
  HatchGen_PointsOnHatching_2: typeof HatchGen_PointsOnHatching_2;
  HatchGen_PointsOnHatching_3: typeof HatchGen_PointsOnHatching_3;
  HatchGen_Domains_1: typeof HatchGen_Domains_1;
  HatchGen_Domains_2: typeof HatchGen_Domains_2;
  HatchGen_Domains_3: typeof HatchGen_Domains_3;
  Geom2dHatch_Hatchings_1: typeof Geom2dHatch_Hatchings_1;
  Geom2dHatch_Hatchings_2: typeof Geom2dHatch_Hatchings_2;
  Geom2dHatch_Hatchings_3: typeof Geom2dHatch_Hatchings_3;
  GccEnt_Array1OfPosition_1: typeof GccEnt_Array1OfPosition_1;
  GccEnt_Array1OfPosition_2: typeof GccEnt_Array1OfPosition_2;
  GccEnt_Array1OfPosition_3: typeof GccEnt_Array1OfPosition_3;
  GccEnt_Array1OfPosition_4: typeof GccEnt_Array1OfPosition_4;
  GccEnt_Array1OfPosition_5: typeof GccEnt_Array1OfPosition_5;
  Handle_GccAna_NoSolution_1: typeof Handle_GccAna_NoSolution_1;
  Handle_GccAna_NoSolution_2: typeof Handle_GccAna_NoSolution_2;
  Handle_GccAna_NoSolution_3: typeof Handle_GccAna_NoSolution_3;
  Handle_GccAna_NoSolution_4: typeof Handle_GccAna_NoSolution_4;
  Handle_GccEnt_BadQualifier_1: typeof Handle_GccEnt_BadQualifier_1;
  Handle_GccEnt_BadQualifier_2: typeof Handle_GccEnt_BadQualifier_2;
  Handle_GccEnt_BadQualifier_3: typeof Handle_GccEnt_BadQualifier_3;
  Handle_GccEnt_BadQualifier_4: typeof Handle_GccEnt_BadQualifier_4;
  Handle_GccInt_Bisec_1: typeof Handle_GccInt_Bisec_1;
  Handle_GccInt_Bisec_2: typeof Handle_GccInt_Bisec_2;
  Handle_GccInt_Bisec_3: typeof Handle_GccInt_Bisec_3;
  Handle_GccInt_Bisec_4: typeof Handle_GccInt_Bisec_4;
  Handle_GccInt_BCirc_1: typeof Handle_GccInt_BCirc_1;
  Handle_GccInt_BCirc_2: typeof Handle_GccInt_BCirc_2;
  Handle_GccInt_BCirc_3: typeof Handle_GccInt_BCirc_3;
  Handle_GccInt_BCirc_4: typeof Handle_GccInt_BCirc_4;
  Handle_GccInt_BElips_1: typeof Handle_GccInt_BElips_1;
  Handle_GccInt_BElips_2: typeof Handle_GccInt_BElips_2;
  Handle_GccInt_BElips_3: typeof Handle_GccInt_BElips_3;
  Handle_GccInt_BElips_4: typeof Handle_GccInt_BElips_4;
  Handle_GccInt_BHyper_1: typeof Handle_GccInt_BHyper_1;
  Handle_GccInt_BHyper_2: typeof Handle_GccInt_BHyper_2;
  Handle_GccInt_BHyper_3: typeof Handle_GccInt_BHyper_3;
  Handle_GccInt_BHyper_4: typeof Handle_GccInt_BHyper_4;
  Handle_GccInt_BLine_1: typeof Handle_GccInt_BLine_1;
  Handle_GccInt_BLine_2: typeof Handle_GccInt_BLine_2;
  Handle_GccInt_BLine_3: typeof Handle_GccInt_BLine_3;
  Handle_GccInt_BLine_4: typeof Handle_GccInt_BLine_4;
  Handle_GccInt_BParab_1: typeof Handle_GccInt_BParab_1;
  Handle_GccInt_BParab_2: typeof Handle_GccInt_BParab_2;
  Handle_GccInt_BParab_3: typeof Handle_GccInt_BParab_3;
  Handle_GccInt_BParab_4: typeof Handle_GccInt_BParab_4;
  Handle_GccInt_BPoint_1: typeof Handle_GccInt_BPoint_1;
  Handle_GccInt_BPoint_2: typeof Handle_GccInt_BPoint_2;
  Handle_GccInt_BPoint_3: typeof Handle_GccInt_BPoint_3;
  Handle_GccInt_BPoint_4: typeof Handle_GccInt_BPoint_4;
  Handle_Geom2dGcc_IsParallel_1: typeof Handle_Geom2dGcc_IsParallel_1;
  Handle_Geom2dGcc_IsParallel_2: typeof Handle_Geom2dGcc_IsParallel_2;
  Handle_Geom2dGcc_IsParallel_3: typeof Handle_Geom2dGcc_IsParallel_3;
  Handle_Geom2dGcc_IsParallel_4: typeof Handle_Geom2dGcc_IsParallel_4;
  IntPatch_SequenceOfPoint_1: typeof IntPatch_SequenceOfPoint_1;
  IntPatch_SequenceOfPoint_2: typeof IntPatch_SequenceOfPoint_2;
  IntPatch_SequenceOfPoint_3: typeof IntPatch_SequenceOfPoint_3;
  Handle_IntPatch_Line_1: typeof Handle_IntPatch_Line_1;
  Handle_IntPatch_Line_2: typeof Handle_IntPatch_Line_2;
  Handle_IntPatch_Line_3: typeof Handle_IntPatch_Line_3;
  Handle_IntPatch_Line_4: typeof Handle_IntPatch_Line_4;
  GeomInt_VectorOfReal_1: typeof GeomInt_VectorOfReal_1;
  GeomInt_VectorOfReal_2: typeof GeomInt_VectorOfReal_2;
  Handle_GeomFill_CircularBlendFunc_1: typeof Handle_GeomFill_CircularBlendFunc_1;
  Handle_GeomFill_CircularBlendFunc_2: typeof Handle_GeomFill_CircularBlendFunc_2;
  Handle_GeomFill_CircularBlendFunc_3: typeof Handle_GeomFill_CircularBlendFunc_3;
  Handle_GeomFill_CircularBlendFunc_4: typeof Handle_GeomFill_CircularBlendFunc_4;
  Handle_GeomFill_TrihedronLaw_1: typeof Handle_GeomFill_TrihedronLaw_1;
  Handle_GeomFill_TrihedronLaw_2: typeof Handle_GeomFill_TrihedronLaw_2;
  Handle_GeomFill_TrihedronLaw_3: typeof Handle_GeomFill_TrihedronLaw_3;
  Handle_GeomFill_TrihedronLaw_4: typeof Handle_GeomFill_TrihedronLaw_4;
  Handle_GeomFill_ConstantBiNormal_1: typeof Handle_GeomFill_ConstantBiNormal_1;
  Handle_GeomFill_ConstantBiNormal_2: typeof Handle_GeomFill_ConstantBiNormal_2;
  Handle_GeomFill_ConstantBiNormal_3: typeof Handle_GeomFill_ConstantBiNormal_3;
  Handle_GeomFill_ConstantBiNormal_4: typeof Handle_GeomFill_ConstantBiNormal_4;
  Handle_GeomFill_CoonsAlgPatch_1: typeof Handle_GeomFill_CoonsAlgPatch_1;
  Handle_GeomFill_CoonsAlgPatch_2: typeof Handle_GeomFill_CoonsAlgPatch_2;
  Handle_GeomFill_CoonsAlgPatch_3: typeof Handle_GeomFill_CoonsAlgPatch_3;
  Handle_GeomFill_CoonsAlgPatch_4: typeof Handle_GeomFill_CoonsAlgPatch_4;
  Handle_GeomFill_CorrectedFrenet_1: typeof Handle_GeomFill_CorrectedFrenet_1;
  Handle_GeomFill_CorrectedFrenet_2: typeof Handle_GeomFill_CorrectedFrenet_2;
  Handle_GeomFill_CorrectedFrenet_3: typeof Handle_GeomFill_CorrectedFrenet_3;
  Handle_GeomFill_CorrectedFrenet_4: typeof Handle_GeomFill_CorrectedFrenet_4;
  Handle_GeomFill_CurveAndTrihedron_1: typeof Handle_GeomFill_CurveAndTrihedron_1;
  Handle_GeomFill_CurveAndTrihedron_2: typeof Handle_GeomFill_CurveAndTrihedron_2;
  Handle_GeomFill_CurveAndTrihedron_3: typeof Handle_GeomFill_CurveAndTrihedron_3;
  Handle_GeomFill_CurveAndTrihedron_4: typeof Handle_GeomFill_CurveAndTrihedron_4;
  Handle_GeomFill_Darboux_1: typeof Handle_GeomFill_Darboux_1;
  Handle_GeomFill_Darboux_2: typeof Handle_GeomFill_Darboux_2;
  Handle_GeomFill_Darboux_3: typeof Handle_GeomFill_Darboux_3;
  Handle_GeomFill_Darboux_4: typeof Handle_GeomFill_Darboux_4;
  Handle_GeomFill_DegeneratedBound_1: typeof Handle_GeomFill_DegeneratedBound_1;
  Handle_GeomFill_DegeneratedBound_2: typeof Handle_GeomFill_DegeneratedBound_2;
  Handle_GeomFill_DegeneratedBound_3: typeof Handle_GeomFill_DegeneratedBound_3;
  Handle_GeomFill_DegeneratedBound_4: typeof Handle_GeomFill_DegeneratedBound_4;
  GeomFill_SequenceOfAx2_1: typeof GeomFill_SequenceOfAx2_1;
  GeomFill_SequenceOfAx2_2: typeof GeomFill_SequenceOfAx2_2;
  GeomFill_SequenceOfAx2_3: typeof GeomFill_SequenceOfAx2_3;
  Handle_GeomFill_HSequenceOfAx2_1: typeof Handle_GeomFill_HSequenceOfAx2_1;
  Handle_GeomFill_HSequenceOfAx2_2: typeof Handle_GeomFill_HSequenceOfAx2_2;
  Handle_GeomFill_HSequenceOfAx2_3: typeof Handle_GeomFill_HSequenceOfAx2_3;
  Handle_GeomFill_HSequenceOfAx2_4: typeof Handle_GeomFill_HSequenceOfAx2_4;
  Handle_GeomFill_DiscreteTrihedron_1: typeof Handle_GeomFill_DiscreteTrihedron_1;
  Handle_GeomFill_DiscreteTrihedron_2: typeof Handle_GeomFill_DiscreteTrihedron_2;
  Handle_GeomFill_DiscreteTrihedron_3: typeof Handle_GeomFill_DiscreteTrihedron_3;
  Handle_GeomFill_DiscreteTrihedron_4: typeof Handle_GeomFill_DiscreteTrihedron_4;
  Handle_GeomFill_DraftTrihedron_1: typeof Handle_GeomFill_DraftTrihedron_1;
  Handle_GeomFill_DraftTrihedron_2: typeof Handle_GeomFill_DraftTrihedron_2;
  Handle_GeomFill_DraftTrihedron_3: typeof Handle_GeomFill_DraftTrihedron_3;
  Handle_GeomFill_DraftTrihedron_4: typeof Handle_GeomFill_DraftTrihedron_4;
  Handle_GeomFill_EvolvedSection_1: typeof Handle_GeomFill_EvolvedSection_1;
  Handle_GeomFill_EvolvedSection_2: typeof Handle_GeomFill_EvolvedSection_2;
  Handle_GeomFill_EvolvedSection_3: typeof Handle_GeomFill_EvolvedSection_3;
  Handle_GeomFill_EvolvedSection_4: typeof Handle_GeomFill_EvolvedSection_4;
  Handle_GeomFill_Fixed_1: typeof Handle_GeomFill_Fixed_1;
  Handle_GeomFill_Fixed_2: typeof Handle_GeomFill_Fixed_2;
  Handle_GeomFill_Fixed_3: typeof Handle_GeomFill_Fixed_3;
  Handle_GeomFill_Fixed_4: typeof Handle_GeomFill_Fixed_4;
  Handle_GeomFill_Frenet_1: typeof Handle_GeomFill_Frenet_1;
  Handle_GeomFill_Frenet_2: typeof Handle_GeomFill_Frenet_2;
  Handle_GeomFill_Frenet_3: typeof Handle_GeomFill_Frenet_3;
  Handle_GeomFill_Frenet_4: typeof Handle_GeomFill_Frenet_4;
  Handle_GeomFill_TrihedronWithGuide_1: typeof Handle_GeomFill_TrihedronWithGuide_1;
  Handle_GeomFill_TrihedronWithGuide_2: typeof Handle_GeomFill_TrihedronWithGuide_2;
  Handle_GeomFill_TrihedronWithGuide_3: typeof Handle_GeomFill_TrihedronWithGuide_3;
  Handle_GeomFill_TrihedronWithGuide_4: typeof Handle_GeomFill_TrihedronWithGuide_4;
  Handle_GeomFill_GuideTrihedronAC_1: typeof Handle_GeomFill_GuideTrihedronAC_1;
  Handle_GeomFill_GuideTrihedronAC_2: typeof Handle_GeomFill_GuideTrihedronAC_2;
  Handle_GeomFill_GuideTrihedronAC_3: typeof Handle_GeomFill_GuideTrihedronAC_3;
  Handle_GeomFill_GuideTrihedronAC_4: typeof Handle_GeomFill_GuideTrihedronAC_4;
  Handle_GeomFill_GuideTrihedronPlan_1: typeof Handle_GeomFill_GuideTrihedronPlan_1;
  Handle_GeomFill_GuideTrihedronPlan_2: typeof Handle_GeomFill_GuideTrihedronPlan_2;
  Handle_GeomFill_GuideTrihedronPlan_3: typeof Handle_GeomFill_GuideTrihedronPlan_3;
  Handle_GeomFill_GuideTrihedronPlan_4: typeof Handle_GeomFill_GuideTrihedronPlan_4;
  Handle_GeomFill_Line_1: typeof Handle_GeomFill_Line_1;
  Handle_GeomFill_Line_2: typeof Handle_GeomFill_Line_2;
  Handle_GeomFill_Line_3: typeof Handle_GeomFill_Line_3;
  Handle_GeomFill_Line_4: typeof Handle_GeomFill_Line_4;
  Handle_GeomFill_LocationDraft_1: typeof Handle_GeomFill_LocationDraft_1;
  Handle_GeomFill_LocationDraft_2: typeof Handle_GeomFill_LocationDraft_2;
  Handle_GeomFill_LocationDraft_3: typeof Handle_GeomFill_LocationDraft_3;
  Handle_GeomFill_LocationDraft_4: typeof Handle_GeomFill_LocationDraft_4;
  Handle_GeomFill_LocationGuide_1: typeof Handle_GeomFill_LocationGuide_1;
  Handle_GeomFill_LocationGuide_2: typeof Handle_GeomFill_LocationGuide_2;
  Handle_GeomFill_LocationGuide_3: typeof Handle_GeomFill_LocationGuide_3;
  Handle_GeomFill_LocationGuide_4: typeof Handle_GeomFill_LocationGuide_4;
  Handle_GeomFill_NSections_1: typeof Handle_GeomFill_NSections_1;
  Handle_GeomFill_NSections_2: typeof Handle_GeomFill_NSections_2;
  Handle_GeomFill_NSections_3: typeof Handle_GeomFill_NSections_3;
  Handle_GeomFill_NSections_4: typeof Handle_GeomFill_NSections_4;
  Handle_GeomFill_SweepFunction_1: typeof Handle_GeomFill_SweepFunction_1;
  Handle_GeomFill_SweepFunction_2: typeof Handle_GeomFill_SweepFunction_2;
  Handle_GeomFill_SweepFunction_3: typeof Handle_GeomFill_SweepFunction_3;
  Handle_GeomFill_SweepFunction_4: typeof Handle_GeomFill_SweepFunction_4;
  Handle_GeomFill_TgtField_1: typeof Handle_GeomFill_TgtField_1;
  Handle_GeomFill_TgtField_2: typeof Handle_GeomFill_TgtField_2;
  Handle_GeomFill_TgtField_3: typeof Handle_GeomFill_TgtField_3;
  Handle_GeomFill_TgtField_4: typeof Handle_GeomFill_TgtField_4;
  Handle_GeomFill_TgtOnCoons_1: typeof Handle_GeomFill_TgtOnCoons_1;
  Handle_GeomFill_TgtOnCoons_2: typeof Handle_GeomFill_TgtOnCoons_2;
  Handle_GeomFill_TgtOnCoons_3: typeof Handle_GeomFill_TgtOnCoons_3;
  Handle_GeomFill_TgtOnCoons_4: typeof Handle_GeomFill_TgtOnCoons_4;
  Handle_GeomFill_UniformSection_1: typeof Handle_GeomFill_UniformSection_1;
  Handle_GeomFill_UniformSection_2: typeof Handle_GeomFill_UniformSection_2;
  Handle_GeomFill_UniformSection_3: typeof Handle_GeomFill_UniformSection_3;
  Handle_GeomFill_UniformSection_4: typeof Handle_GeomFill_UniformSection_4;
  GeomInt_SequenceOfParameterAndOrientation_1: typeof GeomInt_SequenceOfParameterAndOrientation_1;
  GeomInt_SequenceOfParameterAndOrientation_2: typeof GeomInt_SequenceOfParameterAndOrientation_2;
  GeomInt_SequenceOfParameterAndOrientation_3: typeof GeomInt_SequenceOfParameterAndOrientation_3;
  GeomPlate_SequenceOfAij_1: typeof GeomPlate_SequenceOfAij_1;
  GeomPlate_SequenceOfAij_2: typeof GeomPlate_SequenceOfAij_2;
  GeomPlate_SequenceOfAij_3: typeof GeomPlate_SequenceOfAij_3;
  Handle_GeomPlate_Surface_1: typeof Handle_GeomPlate_Surface_1;
  Handle_GeomPlate_Surface_2: typeof Handle_GeomPlate_Surface_2;
  Handle_GeomPlate_Surface_3: typeof Handle_GeomPlate_Surface_3;
  Handle_GeomPlate_Surface_4: typeof Handle_GeomPlate_Surface_4;
  Intf_SeqOfSectionPoint_1: typeof Intf_SeqOfSectionPoint_1;
  Intf_SeqOfSectionPoint_2: typeof Intf_SeqOfSectionPoint_2;
  Intf_SeqOfSectionPoint_3: typeof Intf_SeqOfSectionPoint_3;
  Intf_SeqOfSectionLine_1: typeof Intf_SeqOfSectionLine_1;
  Intf_SeqOfSectionLine_2: typeof Intf_SeqOfSectionLine_2;
  Intf_SeqOfSectionLine_3: typeof Intf_SeqOfSectionLine_3;
  Intf_SeqOfTangentZone_1: typeof Intf_SeqOfTangentZone_1;
  Intf_SeqOfTangentZone_2: typeof Intf_SeqOfTangentZone_2;
  Intf_SeqOfTangentZone_3: typeof Intf_SeqOfTangentZone_3;
  Intf_Array1OfLin_1: typeof Intf_Array1OfLin_1;
  Intf_Array1OfLin_2: typeof Intf_Array1OfLin_2;
  Intf_Array1OfLin_3: typeof Intf_Array1OfLin_3;
  Intf_Array1OfLin_4: typeof Intf_Array1OfLin_4;
  Intf_Array1OfLin_5: typeof Intf_Array1OfLin_5;
  Hatch_SequenceOfParameter_1: typeof Hatch_SequenceOfParameter_1;
  Hatch_SequenceOfParameter_2: typeof Hatch_SequenceOfParameter_2;
  Hatch_SequenceOfParameter_3: typeof Hatch_SequenceOfParameter_3;
  Hatch_SequenceOfLine_1: typeof Hatch_SequenceOfLine_1;
  Hatch_SequenceOfLine_2: typeof Hatch_SequenceOfLine_2;
  Hatch_SequenceOfLine_3: typeof Hatch_SequenceOfLine_3;
  Handle_IntPatch_ALine_1: typeof Handle_IntPatch_ALine_1;
  Handle_IntPatch_ALine_2: typeof Handle_IntPatch_ALine_2;
  Handle_IntPatch_ALine_3: typeof Handle_IntPatch_ALine_3;
  Handle_IntPatch_ALine_4: typeof Handle_IntPatch_ALine_4;
  Handle_IntPatch_GLine_1: typeof Handle_IntPatch_GLine_1;
  Handle_IntPatch_GLine_2: typeof Handle_IntPatch_GLine_2;
  Handle_IntPatch_GLine_3: typeof Handle_IntPatch_GLine_3;
  Handle_IntPatch_GLine_4: typeof Handle_IntPatch_GLine_4;
  IntPatch_SequenceOfSegmentOfTheSOnBounds_1: typeof IntPatch_SequenceOfSegmentOfTheSOnBounds_1;
  IntPatch_SequenceOfSegmentOfTheSOnBounds_2: typeof IntPatch_SequenceOfSegmentOfTheSOnBounds_2;
  IntPatch_SequenceOfSegmentOfTheSOnBounds_3: typeof IntPatch_SequenceOfSegmentOfTheSOnBounds_3;
  IntPatch_SequenceOfPathPointOfTheSOnBounds_1: typeof IntPatch_SequenceOfPathPointOfTheSOnBounds_1;
  IntPatch_SequenceOfPathPointOfTheSOnBounds_2: typeof IntPatch_SequenceOfPathPointOfTheSOnBounds_2;
  IntPatch_SequenceOfPathPointOfTheSOnBounds_3: typeof IntPatch_SequenceOfPathPointOfTheSOnBounds_3;
  Handle_IntPatch_PointLine_1: typeof Handle_IntPatch_PointLine_1;
  Handle_IntPatch_PointLine_2: typeof Handle_IntPatch_PointLine_2;
  Handle_IntPatch_PointLine_3: typeof Handle_IntPatch_PointLine_3;
  Handle_IntPatch_PointLine_4: typeof Handle_IntPatch_PointLine_4;
  Handle_IntPatch_RLine_1: typeof Handle_IntPatch_RLine_1;
  Handle_IntPatch_RLine_2: typeof Handle_IntPatch_RLine_2;
  Handle_IntPatch_RLine_3: typeof Handle_IntPatch_RLine_3;
  Handle_IntPatch_RLine_4: typeof Handle_IntPatch_RLine_4;
  Handle_IntPatch_TheIWLineOfTheIWalking_1: typeof Handle_IntPatch_TheIWLineOfTheIWalking_1;
  Handle_IntPatch_TheIWLineOfTheIWalking_2: typeof Handle_IntPatch_TheIWLineOfTheIWalking_2;
  Handle_IntPatch_TheIWLineOfTheIWalking_3: typeof Handle_IntPatch_TheIWLineOfTheIWalking_3;
  Handle_IntPatch_TheIWLineOfTheIWalking_4: typeof Handle_IntPatch_TheIWLineOfTheIWalking_4;
  Handle_IntPatch_WLine_1: typeof Handle_IntPatch_WLine_1;
  Handle_IntPatch_WLine_2: typeof Handle_IntPatch_WLine_2;
  Handle_IntPatch_WLine_3: typeof Handle_IntPatch_WLine_3;
  Handle_IntPatch_WLine_4: typeof Handle_IntPatch_WLine_4;
  IntPolyh_SeqOfStartPoints_1: typeof IntPolyh_SeqOfStartPoints_1;
  IntPolyh_SeqOfStartPoints_2: typeof IntPolyh_SeqOfStartPoints_2;
  IntPolyh_SeqOfStartPoints_3: typeof IntPolyh_SeqOfStartPoints_3;
  IntPolyh_ListOfCouples_1: typeof IntPolyh_ListOfCouples_1;
  IntPolyh_ListOfCouples_2: typeof IntPolyh_ListOfCouples_2;
  IntPolyh_ListOfCouples_3: typeof IntPolyh_ListOfCouples_3;
  Handle_IntStart_SITopolTool_1: typeof Handle_IntStart_SITopolTool_1;
  Handle_IntStart_SITopolTool_2: typeof Handle_IntStart_SITopolTool_2;
  Handle_IntStart_SITopolTool_3: typeof Handle_IntStart_SITopolTool_3;
  Handle_IntStart_SITopolTool_4: typeof Handle_IntStart_SITopolTool_4;
  Handle_Law_BSpFunc_1: typeof Handle_Law_BSpFunc_1;
  Handle_Law_BSpFunc_2: typeof Handle_Law_BSpFunc_2;
  Handle_Law_BSpFunc_3: typeof Handle_Law_BSpFunc_3;
  Handle_Law_BSpFunc_4: typeof Handle_Law_BSpFunc_4;
  Handle_Law_BSpline_1: typeof Handle_Law_BSpline_1;
  Handle_Law_BSpline_2: typeof Handle_Law_BSpline_2;
  Handle_Law_BSpline_3: typeof Handle_Law_BSpline_3;
  Handle_Law_BSpline_4: typeof Handle_Law_BSpline_4;
  Handle_Law_Composite_1: typeof Handle_Law_Composite_1;
  Handle_Law_Composite_2: typeof Handle_Law_Composite_2;
  Handle_Law_Composite_3: typeof Handle_Law_Composite_3;
  Handle_Law_Composite_4: typeof Handle_Law_Composite_4;
  Handle_Law_Constant_1: typeof Handle_Law_Constant_1;
  Handle_Law_Constant_2: typeof Handle_Law_Constant_2;
  Handle_Law_Constant_3: typeof Handle_Law_Constant_3;
  Handle_Law_Constant_4: typeof Handle_Law_Constant_4;
  Handle_Law_Interpol_1: typeof Handle_Law_Interpol_1;
  Handle_Law_Interpol_2: typeof Handle_Law_Interpol_2;
  Handle_Law_Interpol_3: typeof Handle_Law_Interpol_3;
  Handle_Law_Interpol_4: typeof Handle_Law_Interpol_4;
  Handle_Law_Linear_1: typeof Handle_Law_Linear_1;
  Handle_Law_Linear_2: typeof Handle_Law_Linear_2;
  Handle_Law_Linear_3: typeof Handle_Law_Linear_3;
  Handle_Law_Linear_4: typeof Handle_Law_Linear_4;
  Handle_Law_S_1: typeof Handle_Law_S_1;
  Handle_Law_S_2: typeof Handle_Law_S_2;
  Handle_Law_S_3: typeof Handle_Law_S_3;
  Handle_Law_S_4: typeof Handle_Law_S_4;
  Handle_NLPlate_HGPPConstraint_1: typeof Handle_NLPlate_HGPPConstraint_1;
  Handle_NLPlate_HGPPConstraint_2: typeof Handle_NLPlate_HGPPConstraint_2;
  Handle_NLPlate_HGPPConstraint_3: typeof Handle_NLPlate_HGPPConstraint_3;
  Handle_NLPlate_HGPPConstraint_4: typeof Handle_NLPlate_HGPPConstraint_4;
  Handle_NLPlate_HPG0Constraint_1: typeof Handle_NLPlate_HPG0Constraint_1;
  Handle_NLPlate_HPG0Constraint_2: typeof Handle_NLPlate_HPG0Constraint_2;
  Handle_NLPlate_HPG0Constraint_3: typeof Handle_NLPlate_HPG0Constraint_3;
  Handle_NLPlate_HPG0Constraint_4: typeof Handle_NLPlate_HPG0Constraint_4;
  Handle_NLPlate_HPG0G1Constraint_1: typeof Handle_NLPlate_HPG0G1Constraint_1;
  Handle_NLPlate_HPG0G1Constraint_2: typeof Handle_NLPlate_HPG0G1Constraint_2;
  Handle_NLPlate_HPG0G1Constraint_3: typeof Handle_NLPlate_HPG0G1Constraint_3;
  Handle_NLPlate_HPG0G1Constraint_4: typeof Handle_NLPlate_HPG0G1Constraint_4;
  Handle_NLPlate_HPG0G2Constraint_1: typeof Handle_NLPlate_HPG0G2Constraint_1;
  Handle_NLPlate_HPG0G2Constraint_2: typeof Handle_NLPlate_HPG0G2Constraint_2;
  Handle_NLPlate_HPG0G2Constraint_3: typeof Handle_NLPlate_HPG0G2Constraint_3;
  Handle_NLPlate_HPG0G2Constraint_4: typeof Handle_NLPlate_HPG0G2Constraint_4;
  Handle_NLPlate_HPG0G3Constraint_1: typeof Handle_NLPlate_HPG0G3Constraint_1;
  Handle_NLPlate_HPG0G3Constraint_2: typeof Handle_NLPlate_HPG0G3Constraint_2;
  Handle_NLPlate_HPG0G3Constraint_3: typeof Handle_NLPlate_HPG0G3Constraint_3;
  Handle_NLPlate_HPG0G3Constraint_4: typeof Handle_NLPlate_HPG0G3Constraint_4;
  Handle_NLPlate_HPG1Constraint_1: typeof Handle_NLPlate_HPG1Constraint_1;
  Handle_NLPlate_HPG1Constraint_2: typeof Handle_NLPlate_HPG1Constraint_2;
  Handle_NLPlate_HPG1Constraint_3: typeof Handle_NLPlate_HPG1Constraint_3;
  Handle_NLPlate_HPG1Constraint_4: typeof Handle_NLPlate_HPG1Constraint_4;
  Handle_NLPlate_HPG2Constraint_1: typeof Handle_NLPlate_HPG2Constraint_1;
  Handle_NLPlate_HPG2Constraint_2: typeof Handle_NLPlate_HPG2Constraint_2;
  Handle_NLPlate_HPG2Constraint_3: typeof Handle_NLPlate_HPG2Constraint_3;
  Handle_NLPlate_HPG2Constraint_4: typeof Handle_NLPlate_HPG2Constraint_4;
  Handle_NLPlate_HPG3Constraint_1: typeof Handle_NLPlate_HPG3Constraint_1;
  Handle_NLPlate_HPG3Constraint_2: typeof Handle_NLPlate_HPG3Constraint_2;
  Handle_NLPlate_HPG3Constraint_3: typeof Handle_NLPlate_HPG3Constraint_3;
  Handle_NLPlate_HPG3Constraint_4: typeof Handle_NLPlate_HPG3Constraint_4;
  NLPlate_StackOfPlate_1: typeof NLPlate_StackOfPlate_1;
  NLPlate_StackOfPlate_2: typeof NLPlate_StackOfPlate_2;
  NLPlate_StackOfPlate_3: typeof NLPlate_StackOfPlate_3;
  TopTrans_Array2OfOrientation_1: typeof TopTrans_Array2OfOrientation_1;
  TopTrans_Array2OfOrientation_2: typeof TopTrans_Array2OfOrientation_2;
  TopTrans_Array2OfOrientation_3: typeof TopTrans_Array2OfOrientation_3;
  TopTrans_Array2OfOrientation_4: typeof TopTrans_Array2OfOrientation_4;
  TopTrans_Array2OfOrientation_5: typeof TopTrans_Array2OfOrientation_5;
  IntImp_ConstIsoparametric: typeof IntImp_ConstIsoparametric;
  IntSurf_TypeTrans: typeof IntSurf_TypeTrans;
  IntSurf_Situation: typeof IntSurf_Situation;
  IntRes2d_Position: typeof IntRes2d_Position;
  IntRes2d_TypeTrans: typeof IntRes2d_TypeTrans;
  IntRes2d_Situation: typeof IntRes2d_Situation;
  IntCurveSurface_TransitionOnCurve: typeof IntCurveSurface_TransitionOnCurve;
  GeomFill_PipeError: typeof GeomFill_PipeError;
  GeomFill_Trihedron: typeof GeomFill_Trihedron;
  GeomFill_ApproxStyle: typeof GeomFill_ApproxStyle;
  IntWalk_StatusDeflection: typeof IntWalk_StatusDeflection;
  HatchGen_IntersectionType: typeof HatchGen_IntersectionType;
  HatchGen_ErrorStatus: typeof HatchGen_ErrorStatus;
  FairCurve_AnalysisCode: typeof FairCurve_AnalysisCode;
  GccEnt_Position: typeof GccEnt_Position;
  GccInt_IType: typeof GccInt_IType;
  Geom2dGcc_Type3: typeof Geom2dGcc_Type3;
  Geom2dGcc_Type1: typeof Geom2dGcc_Type1;
  Geom2dGcc_Type2: typeof Geom2dGcc_Type2;
  IntPatch_IType: typeof IntPatch_IType;
  GeomFill_FillingStyle: typeof GeomFill_FillingStyle;
  Intf_PIType: typeof Intf_PIType;
  Hatch_LineForm: typeof Hatch_LineForm;
  IntPatch_SpecPntType: typeof IntPatch_SpecPntType;
  LocalAnalysis_StatusErrorType: typeof LocalAnalysis_StatusErrorType;
};
