declare const libName = "./modules/TKShHealing.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class ShapeBuild_ReShape extends BRepTools_ReShape {
  constructor()
  Apply_1(shape: TopoDS_Shape, until: TopAbs_ShapeEnum, buildmode: Standard_Integer): TopoDS_Shape;
  Apply_2(shape: TopoDS_Shape, until: TopAbs_ShapeEnum): TopoDS_Shape;
  Status_1(shape: TopoDS_Shape, newsh: TopoDS_Shape, last: Standard_Boolean): Standard_Integer;
  Status_2(status: ShapeExtend_Status): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeAlgo {
  constructor();
  Init(): void;
  SetAlgoContainer(aContainer: any): void;
  AlgoContainer(): any;
}

export declare class ShapeAlgo_AlgoContainer extends Standard_Transient {
  constructor()
  SetToolContainer(TC: any): void;
  ToolContainer(): any;
  ConnectNextWire(saw: any, nextsewd: any, maxtol: Standard_Real, distmin: Standard_Real, revsewd: Standard_Boolean, revnextsewd: Standard_Boolean): Standard_Boolean;
  ApproxBSplineCurve_1(bspline: any, seq: TColGeom_SequenceOfCurve): void;
  ApproxBSplineCurve_2(bspline: any, seq: TColGeom2d_SequenceOfCurve): void;
  C0BSplineToSequenceOfC1BSplineCurve_1(BS: any, seqBS: any): Standard_Boolean;
  C0BSplineToSequenceOfC1BSplineCurve_2(BS: any, seqBS: any): Standard_Boolean;
  C0ShapeToC1Shape(shape: TopoDS_Shape, tol: Standard_Real): TopoDS_Shape;
  ConvertSurfaceToBSpline(surf: any, UF: Standard_Real, UL: Standard_Real, VF: Standard_Real, VL: Standard_Real): any;
  HomoWires(wireIn1: TopoDS_Wire, wireIn2: TopoDS_Wire, wireOut1: TopoDS_Wire, wireOut2: TopoDS_Wire, byParam: Standard_Boolean): Standard_Boolean;
  OuterWire(face: TopoDS_Face): TopoDS_Wire;
  ConvertToPeriodic(surf: any): any;
  GetFaceUVBounds(F: TopoDS_Face, Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real): void;
  ConvertCurveToBSpline(C3D: any, First: Standard_Real, Last: Standard_Real, Tol3d: Standard_Real, Continuity: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeAlgo_ToolContainer extends Standard_Transient {
  constructor()
  FixShape(): any;
  EdgeProjAux(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeAnalysis {
  constructor();
  OuterWire(face: TopoDS_Face): TopoDS_Wire;
  TotCross2D(sewd: any, aFace: TopoDS_Face): Standard_Real;
  ContourArea(theWire: TopoDS_Wire): Standard_Real;
  IsOuterBound(face: TopoDS_Face): Standard_Boolean;
  AdjustByPeriod(Val: Standard_Real, ToVal: Standard_Real, Period: Standard_Real): Standard_Real;
  AdjustToPeriod(Val: Standard_Real, ValMin: Standard_Real, ValMax: Standard_Real): Standard_Real;
  FindBounds(shape: TopoDS_Shape, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  GetFaceUVBounds(F: TopoDS_Face, Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real): void;
}

export declare class ShapeExtend {
  constructor();
  Init(): void;
  EncodeStatus(status: ShapeExtend_Status): Standard_Integer;
  DecodeStatus(flag: Standard_Integer, status: ShapeExtend_Status): Standard_Boolean;
}

export declare class ShapeAnalysis_BoxBndTreeSelector {
  constructor(theSeq: any, theShared: Standard_Boolean)
  DefineBoxes(theFBox: Bnd_Box, theLBox: Bnd_Box): void;
  DefineVertexes(theVf: TopoDS_Vertex, theVl: TopoDS_Vertex): void;
  DefinePnt(theFPnt: gp_Pnt, theLPnt: gp_Pnt): void;
  GetNb(): Standard_Integer;
  SetNb(theNb: Standard_Integer): void;
  LoadList(elem: Standard_Integer): void;
  SetStop(): void;
  SetTolerance(theTol: Standard_Real): void;
  ContWire(nbWire: Standard_Integer): Standard_Boolean;
  LastCheckStatus(theStatus: ShapeExtend_Status): Standard_Boolean;
  Reject(theBnd: Bnd_Box): Standard_Boolean;
  Accept(a0: Standard_Integer): Standard_Boolean;
}

export declare class ShapeAnalysis_CheckSmallFace {
  constructor()
  IsSpotFace(F: TopoDS_Face, spot: gp_Pnt, spotol: Standard_Real, tol: Standard_Real): Standard_Integer;
  CheckSpotFace(F: TopoDS_Face, tol: Standard_Real): Standard_Boolean;
  IsStripSupport(F: TopoDS_Face, tol: Standard_Real): Standard_Boolean;
  CheckStripEdges(E1: TopoDS_Edge, E2: TopoDS_Edge, tol: Standard_Real, dmax: Standard_Real): Standard_Boolean;
  FindStripEdges(F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge, tol: Standard_Real, dmax: Standard_Real): Standard_Boolean;
  CheckSingleStrip(F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge, tol: Standard_Real): Standard_Boolean;
  CheckStripFace(F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge, tol: Standard_Real): Standard_Boolean;
  CheckSplittingVertices(F: TopoDS_Face, MapEdges: TopTools_DataMapOfShapeListOfShape, MapParam: ShapeAnalysis_DataMapOfShapeListOfReal, theAllVert: TopoDS_Compound): Standard_Integer;
  CheckPin(F: TopoDS_Face, whatrow: Standard_Integer, sence: Standard_Integer): Standard_Boolean;
  CheckTwisted(F: TopoDS_Face, paramu: Standard_Real, paramv: Standard_Real): Standard_Boolean;
  CheckPinFace(F: TopoDS_Face, mapEdges: TopTools_DataMapOfShapeShape, toler: Standard_Real): Standard_Boolean;
  CheckPinEdges(theFirstEdge: TopoDS_Edge, theSecondEdge: TopoDS_Edge, coef1: Standard_Real, coef2: Standard_Real, toler: Standard_Real): Standard_Boolean;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  SetTolerance(tol: Standard_Real): void;
  Tolerance(): Standard_Real;
  StatusSpot(status: ShapeExtend_Status): Standard_Boolean;
  StatusStrip(status: ShapeExtend_Status): Standard_Boolean;
  StatusPin(status: ShapeExtend_Status): Standard_Boolean;
  StatusTwisted(status: ShapeExtend_Status): Standard_Boolean;
  StatusSplitVert(status: ShapeExtend_Status): Standard_Boolean;
  StatusPinFace(status: ShapeExtend_Status): Standard_Boolean;
  StatusPinEdges(status: ShapeExtend_Status): Standard_Boolean;
}

export declare class ShapeAnalysis_Curve {
  constructor();
  Project_1(C3D: any, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  Project_2(C3D: Adaptor3d_Curve, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  Project_3(C3D: any, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, cf: Standard_Real, cl: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  ProjectAct(C3D: Adaptor3d_Curve, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real): Standard_Real;
  NextProject_1(paramPrev: Standard_Real, C3D: any, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, cf: Standard_Real, cl: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  NextProject_2(paramPrev: Standard_Real, C3D: Adaptor3d_Curve, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real): Standard_Real;
  ValidateRange(Crv: any, First: Standard_Real, Last: Standard_Real, prec: Standard_Real): Standard_Boolean;
  FillBndBox(C2d: any, First: Standard_Real, Last: Standard_Real, NPoints: Standard_Integer, Exact: Standard_Boolean, Box: Bnd_Box2d): void;
  SelectForwardSeam(C1: any, C2: any): Standard_Integer;
  IsPlanar_1(pnts: TColgp_Array1OfPnt, Normal: gp_XYZ, preci: Standard_Real): Standard_Boolean;
  IsPlanar_2(curve: any, Normal: gp_XYZ, preci: Standard_Real): Standard_Boolean;
  GetSamplePoints_1(curve: any, first: Standard_Real, last: Standard_Real, seq: TColgp_SequenceOfPnt2d): Standard_Boolean;
  GetSamplePoints_2(curve: any, first: Standard_Real, last: Standard_Real, seq: TColgp_SequenceOfPnt): Standard_Boolean;
  IsClosed(curve: any, preci: Standard_Real): Standard_Boolean;
  IsPeriodic_1(curve: any): Standard_Boolean;
  IsPeriodic_2(curve: any): Standard_Boolean;
}

export declare class ShapeAnalysis_Edge {
  constructor()
  HasCurve3d(edge: TopoDS_Edge): Standard_Boolean;
  Curve3d(edge: TopoDS_Edge, C3d: any, cf: Standard_Real, cl: Standard_Real, orient: Standard_Boolean): Standard_Boolean;
  IsClosed3d(edge: TopoDS_Edge): Standard_Boolean;
  HasPCurve_1(edge: TopoDS_Edge, face: TopoDS_Face): Standard_Boolean;
  HasPCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location): Standard_Boolean;
  PCurve_1(edge: TopoDS_Edge, face: TopoDS_Face, C2d: any, cf: Standard_Real, cl: Standard_Real, orient: Standard_Boolean): Standard_Boolean;
  PCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, C2d: any, cf: Standard_Real, cl: Standard_Real, orient: Standard_Boolean): Standard_Boolean;
  BoundUV_1(edge: TopoDS_Edge, face: TopoDS_Face, first: gp_Pnt2d, last: gp_Pnt2d): Standard_Boolean;
  BoundUV_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, first: gp_Pnt2d, last: gp_Pnt2d): Standard_Boolean;
  IsSeam_1(edge: TopoDS_Edge, face: TopoDS_Face): Standard_Boolean;
  IsSeam_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location): Standard_Boolean;
  FirstVertex(edge: TopoDS_Edge): TopoDS_Vertex;
  LastVertex(edge: TopoDS_Edge): TopoDS_Vertex;
  GetEndTangent2d_1(edge: TopoDS_Edge, face: TopoDS_Face, atEnd: Standard_Boolean, pos: gp_Pnt2d, tang: gp_Vec2d, dparam: Standard_Real): Standard_Boolean;
  GetEndTangent2d_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, atEnd: Standard_Boolean, pos: gp_Pnt2d, tang: gp_Vec2d, dparam: Standard_Real): Standard_Boolean;
  CheckVerticesWithCurve3d(edge: TopoDS_Edge, preci: Standard_Real, vtx: Standard_Integer): Standard_Boolean;
  CheckVerticesWithPCurve_1(edge: TopoDS_Edge, face: TopoDS_Face, preci: Standard_Real, vtx: Standard_Integer): Standard_Boolean;
  CheckVerticesWithPCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, preci: Standard_Real, vtx: Standard_Integer): Standard_Boolean;
  CheckVertexTolerance_1(edge: TopoDS_Edge, face: TopoDS_Face, toler1: Standard_Real, toler2: Standard_Real): Standard_Boolean;
  CheckVertexTolerance_2(edge: TopoDS_Edge, toler1: Standard_Real, toler2: Standard_Real): Standard_Boolean;
  CheckCurve3dWithPCurve_1(edge: TopoDS_Edge, face: TopoDS_Face): Standard_Boolean;
  CheckCurve3dWithPCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location): Standard_Boolean;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  CheckSameParameter_1(edge: TopoDS_Edge, maxdev: Standard_Real, NbControl: Standard_Integer): Standard_Boolean;
  CheckSameParameter_2(theEdge: TopoDS_Edge, theFace: TopoDS_Face, theMaxdev: Standard_Real, theNbControl: Standard_Integer): Standard_Boolean;
  CheckPCurveRange(theFirst: Standard_Real, theLast: Standard_Real, thePC: any): Standard_Boolean;
  ComputeDeviation(CRef: Adaptor3d_Curve, Other: Adaptor3d_Curve, SameParameter: Standard_Boolean, dev: Standard_Real, NCONTROL: Standard_Integer): Standard_Boolean;
  CheckOverlapping(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, theTolOverlap: Standard_Real, theDomainDist: Standard_Real): Standard_Boolean;
}

export declare class ShapeAnalysis_FreeBoundData extends Standard_Transient {
  Clear(): void;
  SetFreeBound(freebound: TopoDS_Wire): void;
  SetArea(area: Standard_Real): void;
  SetPerimeter(perimeter: Standard_Real): void;
  SetRatio(ratio: Standard_Real): void;
  SetWidth(width: Standard_Real): void;
  AddNotch(notch: TopoDS_Wire, width: Standard_Real): void;
  FreeBound(): TopoDS_Wire;
  Area(): Standard_Real;
  Perimeter(): Standard_Real;
  Ratio(): Standard_Real;
  Width(): Standard_Real;
  NbNotches(): Standard_Integer;
  Notches(): any;
  Notch(index: Standard_Integer): TopoDS_Wire;
  NotchWidth_1(index: Standard_Integer): Standard_Real;
  NotchWidth_2(notch: TopoDS_Wire): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeAnalysis_FreeBoundData_1 extends ShapeAnalysis_FreeBoundData {
    constructor();
  }

  export declare class ShapeAnalysis_FreeBoundData_2 extends ShapeAnalysis_FreeBoundData {
    constructor(freebound: TopoDS_Wire);
  }

export declare class ShapeAnalysis_FreeBounds {
  GetClosedWires(): TopoDS_Compound;
  GetOpenWires(): TopoDS_Compound;
  ConnectEdgesToWires(edges: any, toler: Standard_Real, shared: Standard_Boolean, wires: any): void;
  ConnectWiresToWires_1(iwires: any, toler: Standard_Real, shared: Standard_Boolean, owires: any): void;
  ConnectWiresToWires_2(iwires: any, toler: Standard_Real, shared: Standard_Boolean, owires: any, vertices: TopTools_DataMapOfShapeShape): void;
  SplitWires_1(wires: any, toler: Standard_Real, shared: Standard_Boolean, closed: any, open: any): void;
  DispatchWires(wires: any, closed: TopoDS_Compound, open: TopoDS_Compound): void;
}

  export declare class ShapeAnalysis_FreeBounds_1 extends ShapeAnalysis_FreeBounds {
    constructor();
  }

  export declare class ShapeAnalysis_FreeBounds_2 extends ShapeAnalysis_FreeBounds {
    constructor(shape: TopoDS_Shape, toler: Standard_Real, splitclosed: Standard_Boolean, splitopen: Standard_Boolean);
  }

  export declare class ShapeAnalysis_FreeBounds_3 extends ShapeAnalysis_FreeBounds {
    constructor(shape: TopoDS_Shape, splitclosed: Standard_Boolean, splitopen: Standard_Boolean, checkinternaledges: Standard_Boolean);
  }

export declare class ShapeAnalysis_FreeBoundsProperties {
  Init_1(shape: TopoDS_Shape, tolerance: Standard_Real, splitclosed: Standard_Boolean, splitopen: Standard_Boolean): void;
  Init_2(shape: TopoDS_Shape, splitclosed: Standard_Boolean, splitopen: Standard_Boolean): void;
  Perform(): Standard_Boolean;
  IsLoaded(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  Tolerance(): Standard_Real;
  NbFreeBounds(): Standard_Integer;
  NbClosedFreeBounds(): Standard_Integer;
  NbOpenFreeBounds(): Standard_Integer;
  ClosedFreeBounds(): any;
  OpenFreeBounds(): any;
  ClosedFreeBound(index: Standard_Integer): any;
  OpenFreeBound(index: Standard_Integer): any;
  DispatchBounds(): Standard_Boolean;
  CheckContours(prec: Standard_Real): Standard_Boolean;
  CheckNotches_1(prec: Standard_Real): Standard_Boolean;
  CheckNotches_2(fbData: any, prec: Standard_Real): Standard_Boolean;
  CheckNotches_3(freebound: TopoDS_Wire, num: Standard_Integer, notch: TopoDS_Wire, distMax: Standard_Real, prec: Standard_Real): Standard_Boolean;
  FillProperties(fbData: any, prec: Standard_Real): Standard_Boolean;
}

  export declare class ShapeAnalysis_FreeBoundsProperties_1 extends ShapeAnalysis_FreeBoundsProperties {
    constructor();
  }

  export declare class ShapeAnalysis_FreeBoundsProperties_2 extends ShapeAnalysis_FreeBoundsProperties {
    constructor(shape: TopoDS_Shape, tolerance: Standard_Real, splitclosed: Standard_Boolean, splitopen: Standard_Boolean);
  }

  export declare class ShapeAnalysis_FreeBoundsProperties_3 extends ShapeAnalysis_FreeBoundsProperties {
    constructor(shape: TopoDS_Shape, splitclosed: Standard_Boolean, splitopen: Standard_Boolean);
  }

export declare class ShapeAnalysis_Geom {
  constructor();
  NearestPlane(Pnts: TColgp_Array1OfPnt, aPln: gp_Pln, Dmax: Standard_Real): Standard_Boolean;
  PositionTrsf(coefs: any, trsf: gp_Trsf, unit: Standard_Real, prec: Standard_Real): Standard_Boolean;
}

export declare class ShapeAnalysis_ShapeContents {
  constructor()
  Clear(): void;
  ClearFlags(): void;
  Perform(shape: TopoDS_Shape): void;
  ModifyBigSplineMode(): Standard_Boolean;
  ModifyIndirectMode(): Standard_Boolean;
  ModifyOffestSurfaceMode(): Standard_Boolean;
  ModifyTrimmed3dMode(): Standard_Boolean;
  ModifyOffsetCurveMode(): Standard_Boolean;
  ModifyTrimmed2dMode(): Standard_Boolean;
  NbSolids(): Standard_Integer;
  NbShells(): Standard_Integer;
  NbFaces(): Standard_Integer;
  NbWires(): Standard_Integer;
  NbEdges(): Standard_Integer;
  NbVertices(): Standard_Integer;
  NbSolidsWithVoids(): Standard_Integer;
  NbBigSplines(): Standard_Integer;
  NbC0Surfaces(): Standard_Integer;
  NbC0Curves(): Standard_Integer;
  NbOffsetSurf(): Standard_Integer;
  NbIndirectSurf(): Standard_Integer;
  NbOffsetCurves(): Standard_Integer;
  NbTrimmedCurve2d(): Standard_Integer;
  NbTrimmedCurve3d(): Standard_Integer;
  NbBSplibeSurf(): Standard_Integer;
  NbBezierSurf(): Standard_Integer;
  NbTrimSurf(): Standard_Integer;
  NbWireWitnSeam(): Standard_Integer;
  NbWireWithSevSeams(): Standard_Integer;
  NbFaceWithSevWires(): Standard_Integer;
  NbNoPCurve(): Standard_Integer;
  NbFreeFaces(): Standard_Integer;
  NbFreeWires(): Standard_Integer;
  NbFreeEdges(): Standard_Integer;
  NbSharedSolids(): Standard_Integer;
  NbSharedShells(): Standard_Integer;
  NbSharedFaces(): Standard_Integer;
  NbSharedWires(): Standard_Integer;
  NbSharedFreeWires(): Standard_Integer;
  NbSharedFreeEdges(): Standard_Integer;
  NbSharedEdges(): Standard_Integer;
  NbSharedVertices(): Standard_Integer;
  BigSplineSec(): any;
  IndirectSec(): any;
  OffsetSurfaceSec(): any;
  Trimmed3dSec(): any;
  OffsetCurveSec(): any;
  Trimmed2dSec(): any;
}

export declare class ShapeAnalysis_ShapeTolerance {
  constructor()
  Tolerance(shape: TopoDS_Shape, mode: Standard_Integer, type: TopAbs_ShapeEnum): Standard_Real;
  OverTolerance(shape: TopoDS_Shape, value: Standard_Real, type: TopAbs_ShapeEnum): any;
  InTolerance(shape: TopoDS_Shape, valmin: Standard_Real, valmax: Standard_Real, type: TopAbs_ShapeEnum): any;
  InitTolerance(): void;
  AddTolerance(shape: TopoDS_Shape, type: TopAbs_ShapeEnum): void;
  GlobalTolerance(mode: Standard_Integer): Standard_Real;
}

export declare class ShapeAnalysis_Shell {
  constructor()
  Clear(): void;
  LoadShells(shape: TopoDS_Shape): void;
  CheckOrientedShells(shape: TopoDS_Shape, alsofree: Standard_Boolean, checkinternaledges: Standard_Boolean): Standard_Boolean;
  IsLoaded(shape: TopoDS_Shape): Standard_Boolean;
  NbLoaded(): Standard_Integer;
  Loaded(num: Standard_Integer): TopoDS_Shape;
  HasBadEdges(): Standard_Boolean;
  BadEdges(): TopoDS_Compound;
  HasFreeEdges(): Standard_Boolean;
  FreeEdges(): TopoDS_Compound;
  HasConnectedEdges(): Standard_Boolean;
}

export declare class ShapeAnalysis_Surface extends Standard_Transient {
  constructor(S: any)
  Init_1(S: any): void;
  Init_2(other: any): void;
  SetDomain(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Surface(): any;
  Adaptor3d(): any;
  TrueAdaptor3d(): any;
  Gap(): Standard_Real;
  Value_1(u: Standard_Real, v: Standard_Real): gp_Pnt;
  Value_2(p2d: gp_Pnt2d): gp_Pnt;
  HasSingularities(preci: Standard_Real): Standard_Boolean;
  NbSingularities(preci: Standard_Real): Standard_Integer;
  Singularity(num: Standard_Integer, preci: Standard_Real, P3d: gp_Pnt, firstP2d: gp_Pnt2d, lastP2d: gp_Pnt2d, firstpar: Standard_Real, lastpar: Standard_Real, uisodeg: Standard_Boolean): Standard_Boolean;
  IsDegenerated_1(P3d: gp_Pnt, preci: Standard_Real): Standard_Boolean;
  DegeneratedValues(P3d: gp_Pnt, preci: Standard_Real, firstP2d: gp_Pnt2d, lastP2d: gp_Pnt2d, firstpar: Standard_Real, lastpar: Standard_Real, forward: Standard_Boolean): Standard_Boolean;
  ProjectDegenerated_1(P3d: gp_Pnt, preci: Standard_Real, neighbour: gp_Pnt2d, result: gp_Pnt2d): Standard_Boolean;
  ProjectDegenerated_2(nbrPnt: Standard_Integer, points: TColgp_SequenceOfPnt, pnt2d: TColgp_SequenceOfPnt2d, preci: Standard_Real, direct: Standard_Boolean): Standard_Boolean;
  IsDegenerated_2(p2d1: gp_Pnt2d, p2d2: gp_Pnt2d, tol: Standard_Real, ratio: Standard_Real): Standard_Boolean;
  Bounds(ufirst: Standard_Real, ulast: Standard_Real, vfirst: Standard_Real, vlast: Standard_Real): void;
  ComputeBoundIsos(): void;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  IsUClosed(preci: Standard_Real): Standard_Boolean;
  IsVClosed(preci: Standard_Real): Standard_Boolean;
  ValueOfUV(P3D: gp_Pnt, preci: Standard_Real): gp_Pnt2d;
  NextValueOfUV(p2dPrev: gp_Pnt2d, P3D: gp_Pnt, preci: Standard_Real, maxpreci: Standard_Real): gp_Pnt2d;
  UVFromIso(P3D: gp_Pnt, preci: Standard_Real, U: Standard_Real, V: Standard_Real): Standard_Real;
  UCloseVal(): Standard_Real;
  VCloseVal(): Standard_Real;
  GetBoxUF(): Bnd_Box;
  GetBoxUL(): Bnd_Box;
  GetBoxVF(): Bnd_Box;
  GetBoxVL(): Bnd_Box;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeAnalysis_TransferParameters extends Standard_Transient {
  Init(E: TopoDS_Edge, F: TopoDS_Face): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  Perform_1(Params: any, To2d: Standard_Boolean): any;
  Perform_2(Param: Standard_Real, To2d: Standard_Boolean): Standard_Real;
  TransferRange(newEdge: TopoDS_Edge, prevPar: Standard_Real, currPar: Standard_Real, To2d: Standard_Boolean): void;
  IsSameRange(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeAnalysis_TransferParameters_1 extends ShapeAnalysis_TransferParameters {
    constructor();
  }

  export declare class ShapeAnalysis_TransferParameters_2 extends ShapeAnalysis_TransferParameters {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class ShapeAnalysis_TransferParametersProj extends ShapeAnalysis_TransferParameters {
  Init(E: TopoDS_Edge, F: TopoDS_Face): void;
  Perform_1(Papams: any, To2d: Standard_Boolean): any;
  Perform_2(Param: Standard_Real, To2d: Standard_Boolean): Standard_Real;
  ForceProjection(): Standard_Boolean;
  TransferRange(newEdge: TopoDS_Edge, prevPar: Standard_Real, currPar: Standard_Real, Is2d: Standard_Boolean): void;
  IsSameRange(): Standard_Boolean;
  CopyNMVertex_1(theVert: TopoDS_Vertex, toedge: TopoDS_Edge, fromedge: TopoDS_Edge): TopoDS_Vertex;
  CopyNMVertex_2(theVert: TopoDS_Vertex, toFace: TopoDS_Face, fromFace: TopoDS_Face): TopoDS_Vertex;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeAnalysis_TransferParametersProj_1 extends ShapeAnalysis_TransferParametersProj {
    constructor();
  }

  export declare class ShapeAnalysis_TransferParametersProj_2 extends ShapeAnalysis_TransferParametersProj {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class ShapeAnalysis_Wire extends Standard_Transient {
  Init_1(wire: TopoDS_Wire, face: TopoDS_Face, precision: Standard_Real): void;
  Init_2(sbwd: any, face: TopoDS_Face, precision: Standard_Real): void;
  Load_1(wire: TopoDS_Wire): void;
  Load_2(sbwd: any): void;
  SetFace(face: TopoDS_Face): void;
  SetSurface_1(surface: any): void;
  SetSurface_2(surface: any, location: TopLoc_Location): void;
  SetPrecision(precision: Standard_Real): void;
  ClearStatuses(): void;
  IsLoaded(): Standard_Boolean;
  IsReady(): Standard_Boolean;
  Precision(): Standard_Real;
  WireData(): any;
  NbEdges(): Standard_Integer;
  Face(): TopoDS_Face;
  Surface(): any;
  Perform(): Standard_Boolean;
  CheckOrder_1(isClosed: Standard_Boolean, mode3d: Standard_Boolean): Standard_Boolean;
  CheckConnected_1(prec: Standard_Real): Standard_Boolean;
  CheckSmall_1(precsmall: Standard_Real): Standard_Boolean;
  CheckEdgeCurves(): Standard_Boolean;
  CheckDegenerated_1(): Standard_Boolean;
  CheckClosed(prec: Standard_Real): Standard_Boolean;
  CheckSelfIntersection(): Standard_Boolean;
  CheckLacking_1(): Standard_Boolean;
  CheckGaps3d(): Standard_Boolean;
  CheckGaps2d(): Standard_Boolean;
  CheckCurveGaps(): Standard_Boolean;
  CheckOrder_2(sawo: ShapeAnalysis_WireOrder, isClosed: Standard_Boolean, mode3d: Standard_Boolean): Standard_Boolean;
  CheckConnected_2(num: Standard_Integer, prec: Standard_Real): Standard_Boolean;
  CheckSmall_2(num: Standard_Integer, precsmall: Standard_Real): Standard_Boolean;
  CheckSeam_1(num: Standard_Integer, C1: any, C2: any, cf: Standard_Real, cl: Standard_Real): Standard_Boolean;
  CheckSeam_2(num: Standard_Integer): Standard_Boolean;
  CheckDegenerated_2(num: Standard_Integer, dgnr1: gp_Pnt2d, dgnr2: gp_Pnt2d): Standard_Boolean;
  CheckDegenerated_3(num: Standard_Integer): Standard_Boolean;
  CheckGap3d(num: Standard_Integer): Standard_Boolean;
  CheckGap2d(num: Standard_Integer): Standard_Boolean;
  CheckCurveGap(num: Standard_Integer): Standard_Boolean;
  CheckSelfIntersectingEdge_1(num: Standard_Integer, points2d: IntRes2d_SequenceOfIntersectionPoint, points3d: TColgp_SequenceOfPnt): Standard_Boolean;
  CheckSelfIntersectingEdge_2(num: Standard_Integer): Standard_Boolean;
  CheckIntersectingEdges_1(num: Standard_Integer, points2d: IntRes2d_SequenceOfIntersectionPoint, points3d: TColgp_SequenceOfPnt, errors: TColStd_SequenceOfReal): Standard_Boolean;
  CheckIntersectingEdges_2(num: Standard_Integer): Standard_Boolean;
  CheckIntersectingEdges_3(num1: Standard_Integer, num2: Standard_Integer, points2d: IntRes2d_SequenceOfIntersectionPoint, points3d: TColgp_SequenceOfPnt, errors: TColStd_SequenceOfReal): Standard_Boolean;
  CheckIntersectingEdges_4(num1: Standard_Integer, num2: Standard_Integer): Standard_Boolean;
  CheckLacking_2(num: Standard_Integer, Tolerance: Standard_Real, p2d1: gp_Pnt2d, p2d2: gp_Pnt2d): Standard_Boolean;
  CheckLacking_3(num: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  CheckOuterBound(APIMake: Standard_Boolean): Standard_Boolean;
  CheckNotchedEdges(num: Standard_Integer, shortNum: Standard_Integer, param: Standard_Real, Tolerance: Standard_Real): Standard_Boolean;
  CheckSmallArea(theWire: TopoDS_Wire): Standard_Boolean;
  CheckShapeConnect_1(shape: TopoDS_Shape, prec: Standard_Real): Standard_Boolean;
  CheckShapeConnect_2(tailhead: Standard_Real, tailtail: Standard_Real, headtail: Standard_Real, headhead: Standard_Real, shape: TopoDS_Shape, prec: Standard_Real): Standard_Boolean;
  CheckLoop(aMapLoopVertices: TopTools_IndexedMapOfShape, aMapVertexEdges: TopTools_DataMapOfShapeListOfShape, aMapSmallEdges: TopTools_MapOfShape, aMapSeemEdges: TopTools_MapOfShape): Standard_Boolean;
  CheckTail(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, theMaxSine: Standard_Real, theMaxWidth: Standard_Real, theMaxTolerance: Standard_Real, theEdge11: TopoDS_Edge, theEdge12: TopoDS_Edge, theEdge21: TopoDS_Edge, theEdge22: TopoDS_Edge): Standard_Boolean;
  StatusOrder(Status: ShapeExtend_Status): Standard_Boolean;
  StatusConnected(Status: ShapeExtend_Status): Standard_Boolean;
  StatusEdgeCurves(Status: ShapeExtend_Status): Standard_Boolean;
  StatusDegenerated(Status: ShapeExtend_Status): Standard_Boolean;
  StatusClosed(Status: ShapeExtend_Status): Standard_Boolean;
  StatusSmall(Status: ShapeExtend_Status): Standard_Boolean;
  StatusSelfIntersection(Status: ShapeExtend_Status): Standard_Boolean;
  StatusLacking(Status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps3d(Status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps2d(Status: ShapeExtend_Status): Standard_Boolean;
  StatusCurveGaps(Status: ShapeExtend_Status): Standard_Boolean;
  StatusLoop(Status: ShapeExtend_Status): Standard_Boolean;
  LastCheckStatus(Status: ShapeExtend_Status): Standard_Boolean;
  MinDistance3d(): Standard_Real;
  MinDistance2d(): Standard_Real;
  MaxDistance3d(): Standard_Real;
  MaxDistance2d(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeAnalysis_Wire_1 extends ShapeAnalysis_Wire {
    constructor();
  }

  export declare class ShapeAnalysis_Wire_2 extends ShapeAnalysis_Wire {
    constructor(wire: TopoDS_Wire, face: TopoDS_Face, precision: Standard_Real);
  }

  export declare class ShapeAnalysis_Wire_3 extends ShapeAnalysis_Wire {
    constructor(sbwd: any, face: TopoDS_Face, precision: Standard_Real);
  }

export declare class ShapeExtend_WireData extends Standard_Transient {
  Init_1(other: any): void;
  Init_2(wire: TopoDS_Wire, chained: Standard_Boolean, theManifoldMode: Standard_Boolean): Standard_Boolean;
  Clear(): void;
  ComputeSeams(enforce: Standard_Boolean): void;
  SetLast(num: Standard_Integer): void;
  SetDegeneratedLast(): void;
  Add_1(edge: TopoDS_Edge, atnum: Standard_Integer): void;
  Add_2(wire: TopoDS_Wire, atnum: Standard_Integer): void;
  Add_3(wire: any, atnum: Standard_Integer): void;
  Add_4(shape: TopoDS_Shape, atnum: Standard_Integer): void;
  AddOriented_1(edge: TopoDS_Edge, mode: Standard_Integer): void;
  AddOriented_2(wire: TopoDS_Wire, mode: Standard_Integer): void;
  AddOriented_3(shape: TopoDS_Shape, mode: Standard_Integer): void;
  Remove(num: Standard_Integer): void;
  Set(edge: TopoDS_Edge, num: Standard_Integer): void;
  Reverse_1(): void;
  Reverse_2(face: TopoDS_Face): void;
  NbEdges(): Standard_Integer;
  NbNonManifoldEdges(): Standard_Integer;
  NonmanifoldEdge(num: Standard_Integer): TopoDS_Edge;
  NonmanifoldEdges(): any;
  ManifoldMode(): Standard_Boolean;
  Edge(num: Standard_Integer): TopoDS_Edge;
  Index(edge: TopoDS_Edge): Standard_Integer;
  IsSeam(num: Standard_Integer): Standard_Boolean;
  Wire(): TopoDS_Wire;
  WireAPIMake(): TopoDS_Wire;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeExtend_WireData_1 extends ShapeExtend_WireData {
    constructor();
  }

  export declare class ShapeExtend_WireData_2 extends ShapeExtend_WireData {
    constructor(wire: TopoDS_Wire, chained: Standard_Boolean, theManifoldMode: Standard_Boolean);
  }

export declare class ShapeAnalysis_WireOrder {
  SetMode(mode3d: Standard_Boolean, tol: Standard_Real): void;
  Tolerance(): Standard_Real;
  Clear(): void;
  Add_1(start3d: gp_XYZ, end3d: gp_XYZ): void;
  Add_2(start2d: gp_XY, end2d: gp_XY): void;
  NbEdges(): Standard_Integer;
  KeepLoopsMode(): Standard_Boolean;
  Perform(closed: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Status(): Standard_Integer;
  Ordered(n: Standard_Integer): Standard_Integer;
  XYZ(num: Standard_Integer, start3d: gp_XYZ, end3d: gp_XYZ): void;
  XY(num: Standard_Integer, start2d: gp_XY, end2d: gp_XY): void;
  Gap(num: Standard_Integer): Standard_Real;
  SetChains(gap: Standard_Real): void;
  NbChains(): Standard_Integer;
  Chain(num: Standard_Integer, n1: Standard_Integer, n2: Standard_Integer): void;
  SetCouples(gap: Standard_Real): void;
  NbCouples(): Standard_Integer;
  Couple(num: Standard_Integer, n1: Standard_Integer, n2: Standard_Integer): void;
}

  export declare class ShapeAnalysis_WireOrder_1 extends ShapeAnalysis_WireOrder {
    constructor();
  }

  export declare class ShapeAnalysis_WireOrder_2 extends ShapeAnalysis_WireOrder {
    constructor(mode3d: Standard_Boolean, tol: Standard_Real);
  }

export declare class ShapeAnalysis_WireVertex {
  constructor()
  Init_1(wire: TopoDS_Wire, preci: Standard_Real): void;
  Init_2(swbd: any, preci: Standard_Real): void;
  Load_1(wire: TopoDS_Wire): void;
  Load_2(sbwd: any): void;
  SetPrecision(preci: Standard_Real): void;
  Analyze(): void;
  SetSameVertex(num: Standard_Integer): void;
  SetSameCoords(num: Standard_Integer): void;
  SetClose(num: Standard_Integer): void;
  SetEnd(num: Standard_Integer, pos: gp_XYZ, ufol: Standard_Real): void;
  SetStart(num: Standard_Integer, pos: gp_XYZ, upre: Standard_Real): void;
  SetInters(num: Standard_Integer, pos: gp_XYZ, upre: Standard_Real, ufol: Standard_Real): void;
  SetDisjoined(num: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  Precision(): Standard_Real;
  NbEdges(): Standard_Integer;
  WireData(): any;
  Status(num: Standard_Integer): Standard_Integer;
  Position(num: Standard_Integer): gp_XYZ;
  UPrevious(num: Standard_Integer): Standard_Real;
  UFollowing(num: Standard_Integer): Standard_Real;
  Data(num: Standard_Integer, pos: gp_XYZ, upre: Standard_Real, ufol: Standard_Real): Standard_Integer;
  NextStatus(stat: Standard_Integer, num: Standard_Integer): Standard_Integer;
  NextCriter(crit: Standard_Integer, num: Standard_Integer): Standard_Integer;
}

export declare class ShapeBuild {
  constructor();
  PlaneXOY(): any;
}

export declare class ShapeBuild_Edge {
  constructor();
  CopyReplaceVertices(edge: TopoDS_Edge, V1: TopoDS_Vertex, V2: TopoDS_Vertex): TopoDS_Edge;
  CopyRanges(toedge: TopoDS_Edge, fromedge: TopoDS_Edge, alpha: Standard_Real, beta: Standard_Real): void;
  SetRange3d(edge: TopoDS_Edge, first: Standard_Real, last: Standard_Real): void;
  CopyPCurves(toedge: TopoDS_Edge, fromedge: TopoDS_Edge): void;
  Copy(edge: TopoDS_Edge, sharepcurves: Standard_Boolean): TopoDS_Edge;
  RemovePCurve_1(edge: TopoDS_Edge, face: TopoDS_Face): void;
  RemovePCurve_2(edge: TopoDS_Edge, surf: any): void;
  RemovePCurve_3(edge: TopoDS_Edge, surf: any, loc: TopLoc_Location): void;
  ReplacePCurve(edge: TopoDS_Edge, pcurve: any, face: TopoDS_Face): void;
  ReassignPCurve(edge: TopoDS_Edge, old: TopoDS_Face, sub: TopoDS_Face): Standard_Boolean;
  TransformPCurve(pcurve: any, trans: gp_Trsf2d, uFact: Standard_Real, aFirst: Standard_Real, aLast: Standard_Real): any;
  RemoveCurve3d(edge: TopoDS_Edge): void;
  BuildCurve3d(edge: TopoDS_Edge): Standard_Boolean;
  MakeEdge_1(edge: TopoDS_Edge, curve: any, L: TopLoc_Location): void;
  MakeEdge_2(edge: TopoDS_Edge, curve: any, L: TopLoc_Location, p1: Standard_Real, p2: Standard_Real): void;
  MakeEdge_3(edge: TopoDS_Edge, pcurve: any, face: TopoDS_Face): void;
  MakeEdge_4(edge: TopoDS_Edge, pcurve: any, face: TopoDS_Face, p1: Standard_Real, p2: Standard_Real): void;
  MakeEdge_5(edge: TopoDS_Edge, pcurve: any, S: any, L: TopLoc_Location): void;
  MakeEdge_6(edge: TopoDS_Edge, pcurve: any, S: any, L: TopLoc_Location, p1: Standard_Real, p2: Standard_Real): void;
}

export declare class ShapeBuild_Vertex {
  constructor();
  CombineVertex_1(V1: TopoDS_Vertex, V2: TopoDS_Vertex, tolFactor: Standard_Real): TopoDS_Vertex;
  CombineVertex_2(pnt1: gp_Pnt, pnt2: gp_Pnt, tol1: Standard_Real, tol2: Standard_Real, tolFactor: Standard_Real): TopoDS_Vertex;
}

export declare class ShapeConstruct {
  constructor();
  ConvertCurveToBSpline_1(C3D: any, First: Standard_Real, Last: Standard_Real, Tol3d: Standard_Real, Continuity: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer): any;
  ConvertCurveToBSpline_2(C2D: any, First: Standard_Real, Last: Standard_Real, Tol2d: Standard_Real, Continuity: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer): any;
  ConvertSurfaceToBSpline(surf: any, UF: Standard_Real, UL: Standard_Real, VF: Standard_Real, VL: Standard_Real, Tol3d: Standard_Real, Continuity: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer): any;
  JoinPCurves(theEdges: any, theFace: TopoDS_Face, theEdge: TopoDS_Edge): Standard_Boolean;
  JoinCurves_1(c3d1: any, ac3d2: any, Orient1: TopAbs_Orientation, Orient2: TopAbs_Orientation, first1: Standard_Real, last1: Standard_Real, first2: Standard_Real, last2: Standard_Real, c3dOut: any, isRev1: Standard_Boolean, isRev2: Standard_Boolean): Standard_Boolean;
  JoinCurves_2(c2d1: any, ac2d2: any, Orient1: TopAbs_Orientation, Orient2: TopAbs_Orientation, first1: Standard_Real, last1: Standard_Real, first2: Standard_Real, last2: Standard_Real, c2dOut: any, isRev1: Standard_Boolean, isRev2: Standard_Boolean, isError: Standard_Boolean): Standard_Boolean;
}

export declare class ShapeConstruct_Curve {
  constructor();
  AdjustCurve(C3D: any, P1: gp_Pnt, P2: gp_Pnt, take1: Standard_Boolean, take2: Standard_Boolean): Standard_Boolean;
  AdjustCurveSegment(C3D: any, P1: gp_Pnt, P2: gp_Pnt, U1: Standard_Real, U2: Standard_Real): Standard_Boolean;
  AdjustCurve2d(C2D: any, P1: gp_Pnt2d, P2: gp_Pnt2d, take1: Standard_Boolean, take2: Standard_Boolean): Standard_Boolean;
  ConvertToBSpline_1(C: any, first: Standard_Real, last: Standard_Real, prec: Standard_Real): any;
  ConvertToBSpline_2(C: any, first: Standard_Real, last: Standard_Real, prec: Standard_Real): any;
  FixKnots_1(knots: any): Standard_Boolean;
  FixKnots_2(knots: TColStd_Array1OfReal): Standard_Boolean;
}

export declare class ShapeConstruct_MakeTriangulation extends BRepBuilderAPI_MakeShape {
  Build(): void;
  IsDone(): Standard_Boolean;
}

  export declare class ShapeConstruct_MakeTriangulation_1 extends ShapeConstruct_MakeTriangulation {
    constructor(pnts: TColgp_Array1OfPnt, prec: Standard_Real);
  }

  export declare class ShapeConstruct_MakeTriangulation_2 extends ShapeConstruct_MakeTriangulation {
    constructor(wire: TopoDS_Wire, prec: Standard_Real);
  }

export declare class ShapeConstruct_ProjectCurveOnSurface extends Standard_Transient {
  constructor()
  Init_1(surf: any, preci: Standard_Real): void;
  Init_2(surf: any, preci: Standard_Real): void;
  SetSurface_1(surf: any): void;
  SetSurface_2(surf: any): void;
  SetPrecision(preci: Standard_Real): void;
  BuildCurveMode(): Standard_Boolean;
  AdjustOverDegenMode(): Standard_Integer;
  Status(theStatus: ShapeExtend_Status): Standard_Boolean;
  Perform(c3d: any, First: Standard_Real, Last: Standard_Real, c2d: any, TolFirst: Standard_Real, TolLast: Standard_Real): Standard_Boolean;
  PerformByProjLib(c3d: any, First: Standard_Real, Last: Standard_Real, c2d: any, continuity: GeomAbs_Shape, maxdeg: Standard_Integer, nbinterval: Standard_Integer): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeCustom {
  constructor();
  ApplyModifier(S: TopoDS_Shape, M: any, context: TopTools_DataMapOfShapeShape, MD: BRepTools_Modifier, theProgress: Message_ProgressRange, aReShape: any): TopoDS_Shape;
  DirectFaces(S: TopoDS_Shape): TopoDS_Shape;
  ScaleShape(S: TopoDS_Shape, scale: Standard_Real): TopoDS_Shape;
  BSplineRestriction(S: TopoDS_Shape, Tol3d: Standard_Real, Tol2d: Standard_Real, MaxDegree: Standard_Integer, MaxNbSegment: Standard_Integer, Continuity3d: GeomAbs_Shape, Continuity2d: GeomAbs_Shape, Degree: Standard_Boolean, Rational: Standard_Boolean, aParameters: any): TopoDS_Shape;
  ConvertToRevolution(S: TopoDS_Shape): TopoDS_Shape;
  SweptToElementary(S: TopoDS_Shape): TopoDS_Shape;
  ConvertToBSpline(S: TopoDS_Shape, extrMode: Standard_Boolean, revolMode: Standard_Boolean, offsetMode: Standard_Boolean, planeMode: Standard_Boolean): TopoDS_Shape;
}

export declare class ShapeCustom_Modification extends BRepTools_Modification {
  SetMsgRegistrator(msgreg: any): void;
  MsgRegistrator(): any;
  SendMsg(shape: TopoDS_Shape, message: Message_Msg, gravity: Message_Gravity): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeCustom_BSplineRestriction extends ShapeCustom_Modification {
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  ConvertSurface(aSurface: any, S: any, UF: Standard_Real, UL: Standard_Real, VF: Standard_Real, VL: Standard_Real, IsOf: Standard_Boolean): Standard_Boolean;
  ConvertCurve(aCurve: any, C: any, IsConvert: Standard_Boolean, First: Standard_Real, Last: Standard_Real, TolCur: Standard_Real, IsOf: Standard_Boolean): Standard_Boolean;
  ConvertCurve2d(aCurve: any, C: any, IsConvert: Standard_Boolean, First: Standard_Real, Last: Standard_Real, TolCur: Standard_Real, IsOf: Standard_Boolean): Standard_Boolean;
  SetTol3d(Tol3d: Standard_Real): void;
  SetTol2d(Tol2d: Standard_Real): void;
  ModifyApproxSurfaceFlag(): Standard_Boolean;
  ModifyApproxCurve3dFlag(): Standard_Boolean;
  ModifyApproxCurve2dFlag(): Standard_Boolean;
  SetContinuity3d(Continuity3d: GeomAbs_Shape): void;
  SetContinuity2d(Continuity2d: GeomAbs_Shape): void;
  SetMaxDegree(MaxDegree: Standard_Integer): void;
  SetMaxNbSegments(MaxNbSegments: Standard_Integer): void;
  SetPriority(Degree: Standard_Boolean): void;
  SetConvRational(Rational: Standard_Boolean): void;
  GetRestrictionParameters(): any;
  SetRestrictionParameters(aModes: any): void;
  Curve3dError(): Standard_Real;
  Curve2dError(): Standard_Real;
  SurfaceError(): Standard_Real;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  MaxErrors(aCurve3dErr: Standard_Real, aCurve2dErr: Standard_Real): Standard_Real;
  NbOfSpan(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeCustom_BSplineRestriction_1 extends ShapeCustom_BSplineRestriction {
    constructor();
  }

  export declare class ShapeCustom_BSplineRestriction_2 extends ShapeCustom_BSplineRestriction {
    constructor(anApproxSurfaceFlag: Standard_Boolean, anApproxCurve3dFlag: Standard_Boolean, anApproxCurve2dFlag: Standard_Boolean, aTol3d: Standard_Real, aTol2d: Standard_Real, aContinuity3d: GeomAbs_Shape, aContinuity2d: GeomAbs_Shape, aMaxDegree: Standard_Integer, aNbMaxSeg: Standard_Integer, Degree: Standard_Boolean, Rational: Standard_Boolean);
  }

  export declare class ShapeCustom_BSplineRestriction_3 extends ShapeCustom_BSplineRestriction {
    constructor(anApproxSurfaceFlag: Standard_Boolean, anApproxCurve3dFlag: Standard_Boolean, anApproxCurve2dFlag: Standard_Boolean, aTol3d: Standard_Real, aTol2d: Standard_Real, aContinuity3d: GeomAbs_Shape, aContinuity2d: GeomAbs_Shape, aMaxDegree: Standard_Integer, aNbMaxSeg: Standard_Integer, Degree: Standard_Boolean, Rational: Standard_Boolean, aModes: any);
  }

export declare class ShapeCustom_ConvertToBSpline extends ShapeCustom_Modification {
  constructor()
  SetExtrusionMode(extrMode: Standard_Boolean): void;
  SetRevolutionMode(revolMode: Standard_Boolean): void;
  SetOffsetMode(offsetMode: Standard_Boolean): void;
  SetPlaneMode(planeMode: Standard_Boolean): void;
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeCustom_ConvertToRevolution extends ShapeCustom_Modification {
  constructor()
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeCustom_Curve {
  Init(C: any): void;
  ConvertToPeriodic(substitute: Standard_Boolean, preci: Standard_Real): any;
}

  export declare class ShapeCustom_Curve_1 extends ShapeCustom_Curve {
    constructor();
  }

  export declare class ShapeCustom_Curve_2 extends ShapeCustom_Curve {
    constructor(C: any);
  }

export declare class ShapeCustom_Curve2d {
  constructor();
  IsLinear(thePoles: TColgp_Array1OfPnt2d, theTolerance: Standard_Real, theDeviation: Standard_Real): Standard_Boolean;
  ConvertToLine2d(theCurve: any, theFirstIn: Standard_Real, theLastIn: Standard_Real, theTolerance: Standard_Real, theNewFirst: Standard_Real, theNewLast: Standard_Real, theDeviation: Standard_Real): any;
  SimplifyBSpline2d(theBSpline2d: any, theTolerance: Standard_Real): Standard_Boolean;
}

export declare class ShapeCustom_DirectModification extends ShapeCustom_Modification {
  constructor()
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeCustom_RestrictionParameters extends Standard_Transient {
  constructor()
  GMaxDegree(): Standard_Integer;
  GMaxSeg(): Standard_Integer;
  ConvertPlane(): Standard_Boolean;
  ConvertBezierSurf(): Standard_Boolean;
  ConvertRevolutionSurf(): Standard_Boolean;
  ConvertExtrusionSurf(): Standard_Boolean;
  ConvertOffsetSurf(): Standard_Boolean;
  ConvertCylindricalSurf(): Standard_Boolean;
  ConvertConicalSurf(): Standard_Boolean;
  ConvertToroidalSurf(): Standard_Boolean;
  ConvertSphericalSurf(): Standard_Boolean;
  SegmentSurfaceMode(): Standard_Boolean;
  ConvertCurve3d(): Standard_Boolean;
  ConvertOffsetCurv3d(): Standard_Boolean;
  ConvertCurve2d(): Standard_Boolean;
  ConvertOffsetCurv2d(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeCustom_Surface {
  Init(S: any): void;
  Gap(): Standard_Real;
  ConvertToAnalytical(tol: Standard_Real, substitute: Standard_Boolean): any;
  ConvertToPeriodic(substitute: Standard_Boolean, preci: Standard_Real): any;
}

  export declare class ShapeCustom_Surface_1 extends ShapeCustom_Surface {
    constructor();
  }

  export declare class ShapeCustom_Surface_2 extends ShapeCustom_Surface {
    constructor(S: any);
  }

export declare class ShapeCustom_SweptToElementary extends ShapeCustom_Modification {
  constructor()
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeCustom_TrsfModification extends BRepTools_TrsfModification {
  constructor(T: gp_Trsf)
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeExtend_BasicMsgRegistrator extends Standard_Transient {
  constructor()
  Send_1(object: any, message: Message_Msg, gravity: Message_Gravity): void;
  Send_2(shape: TopoDS_Shape, message: Message_Msg, gravity: Message_Gravity): void;
  Send_3(message: Message_Msg, gravity: Message_Gravity): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeExtend_ComplexCurve extends Geom_Curve {
  NbCurves(): Standard_Integer;
  Curve(index: Standard_Integer): any;
  LocateParameter(U: Standard_Real, UOut: Standard_Real): Standard_Integer;
  LocalToGlobal(index: Standard_Integer, Ulocal: Standard_Real): Standard_Real;
  Transform(T: gp_Trsf): void;
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
  GetScaleFactor(ind: Standard_Integer): Standard_Real;
  CheckConnectivity(Preci: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeExtend_CompositeSurface extends Geom_Surface {
  Init_1(GridSurf: any, param: ShapeExtend_Parametrisation): Standard_Boolean;
  Init_2(GridSurf: any, UJoints: TColStd_Array1OfReal, VJoints: TColStd_Array1OfReal): Standard_Boolean;
  NbUPatches(): Standard_Integer;
  NbVPatches(): Standard_Integer;
  Patch_1(i: Standard_Integer, j: Standard_Integer): any;
  Patches(): any;
  UJointValues(): any;
  VJointValues(): any;
  UJointValue(i: Standard_Integer): Standard_Real;
  VJointValue(j: Standard_Integer): Standard_Real;
  SetUJointValues(UJoints: TColStd_Array1OfReal): Standard_Boolean;
  SetVJointValues(VJoints: TColStd_Array1OfReal): Standard_Boolean;
  SetUFirstValue(UFirst: Standard_Real): void;
  SetVFirstValue(VFirst: Standard_Real): void;
  LocateUParameter(U: Standard_Real): Standard_Integer;
  LocateVParameter(V: Standard_Real): Standard_Integer;
  LocateUVPoint(pnt: gp_Pnt2d, i: Standard_Integer, j: Standard_Integer): void;
  Patch_2(U: Standard_Real, V: Standard_Real): any;
  Patch_3(pnt: gp_Pnt2d): any;
  ULocalToGlobal(i: Standard_Integer, j: Standard_Integer, u: Standard_Real): Standard_Real;
  VLocalToGlobal(i: Standard_Integer, j: Standard_Integer, v: Standard_Real): Standard_Real;
  LocalToGlobal(i: Standard_Integer, j: Standard_Integer, uv: gp_Pnt2d): gp_Pnt2d;
  UGlobalToLocal(i: Standard_Integer, j: Standard_Integer, U: Standard_Real): Standard_Real;
  VGlobalToLocal(i: Standard_Integer, j: Standard_Integer, V: Standard_Real): Standard_Real;
  GlobalToLocal(i: Standard_Integer, j: Standard_Integer, UV: gp_Pnt2d): gp_Pnt2d;
  GlobalToLocalTransformation(i: Standard_Integer, j: Standard_Integer, uFact: Standard_Real, Trsf: gp_Trsf2d): Standard_Boolean;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
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
  Value(pnt: gp_Pnt2d): gp_Pnt;
  ComputeJointValues(param: ShapeExtend_Parametrisation): void;
  CheckConnectivity(prec: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeExtend_CompositeSurface_1 extends ShapeExtend_CompositeSurface {
    constructor();
  }

  export declare class ShapeExtend_CompositeSurface_2 extends ShapeExtend_CompositeSurface {
    constructor(GridSurf: any, param: ShapeExtend_Parametrisation);
  }

  export declare class ShapeExtend_CompositeSurface_3 extends ShapeExtend_CompositeSurface {
    constructor(GridSurf: any, UJoints: TColStd_Array1OfReal, VJoints: TColStd_Array1OfReal);
  }

export declare class ShapeExtend_Explorer {
  constructor()
  CompoundFromSeq(seqval: any): TopoDS_Shape;
  SeqFromCompound(comp: TopoDS_Shape, expcomp: Standard_Boolean): any;
  ListFromSeq(seqval: any, lisval: TopTools_ListOfShape, clear: Standard_Boolean): void;
  SeqFromList(lisval: TopTools_ListOfShape): any;
  ShapeType(shape: TopoDS_Shape, compound: Standard_Boolean): TopAbs_ShapeEnum;
  SortedCompound(shape: TopoDS_Shape, type: TopAbs_ShapeEnum, explore: Standard_Boolean, compound: Standard_Boolean): TopoDS_Shape;
  DispatchList(list: any, vertices: any, edges: any, wires: any, faces: any, shells: any, solids: any, compsols: any, compounds: any): void;
}

export declare class ShapeExtend_MsgRegistrator extends ShapeExtend_BasicMsgRegistrator {
  constructor()
  Send_1(object: any, message: Message_Msg, gravity: Message_Gravity): void;
  Send_2(shape: TopoDS_Shape, message: Message_Msg, gravity: Message_Gravity): void;
  MapTransient(): ShapeExtend_DataMapOfTransientListOfMsg;
  MapShape(): ShapeExtend_DataMapOfShapeListOfMsg;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeFix {
  constructor();
  SameParameter(shape: TopoDS_Shape, enforce: Standard_Boolean, preci: Standard_Real, theProgress: Message_ProgressRange, theMsgReg: any): Standard_Boolean;
  EncodeRegularity(shape: TopoDS_Shape, tolang: Standard_Real): void;
  RemoveSmallEdges(shape: TopoDS_Shape, Tolerance: Standard_Real, context: any): TopoDS_Shape;
  FixVertexPosition(theshape: TopoDS_Shape, theTolerance: Standard_Real, thecontext: any): Standard_Boolean;
  LeastEdgeSize(theshape: TopoDS_Shape): Standard_Real;
}

export declare class ShapeFix_Root extends Standard_Transient {
  constructor()
  Set(Root: any): void;
  SetContext(context: any): void;
  Context(): any;
  SetMsgRegistrator(msgreg: any): void;
  MsgRegistrator(): any;
  SetPrecision(preci: Standard_Real): void;
  Precision(): Standard_Real;
  SetMinTolerance(mintol: Standard_Real): void;
  MinTolerance(): Standard_Real;
  SetMaxTolerance(maxtol: Standard_Real): void;
  MaxTolerance(): Standard_Real;
  LimitTolerance(toler: Standard_Real): Standard_Real;
  SendMsg_1(shape: TopoDS_Shape, message: Message_Msg, gravity: Message_Gravity): void;
  SendMsg_2(message: Message_Msg, gravity: Message_Gravity): void;
  SendWarning_1(shape: TopoDS_Shape, message: Message_Msg): void;
  SendWarning_2(message: Message_Msg): void;
  SendFail_1(shape: TopoDS_Shape, message: Message_Msg): void;
  SendFail_2(message: Message_Msg): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeFix_ComposeShell extends ShapeFix_Root {
  constructor()
  Init(Grid: any, L: TopLoc_Location, Face: TopoDS_Face, Prec: Standard_Real): void;
  ClosedMode(): Standard_Boolean;
  Perform(): Standard_Boolean;
  SplitEdges(): void;
  Result(): TopoDS_Shape;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  DispatchWires(faces: TopTools_SequenceOfShape, wires: ShapeFix_SequenceOfWireSegment): void;
  SetTransferParamTool(TransferParam: any): void;
  GetTransferParamTool(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeFix_EdgeConnect {
  constructor()
  Add_1(aFirst: TopoDS_Edge, aSecond: TopoDS_Edge): void;
  Add_2(aShape: TopoDS_Shape): void;
  Build(): void;
  Clear(): void;
}

export declare class ShapeFix_EdgeProjAux extends Standard_Transient {
  Init(F: TopoDS_Face, E: TopoDS_Edge): void;
  Compute(preci: Standard_Real): void;
  IsFirstDone(): Standard_Boolean;
  IsLastDone(): Standard_Boolean;
  FirstParam(): Standard_Real;
  LastParam(): Standard_Real;
  IsIso(C: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeFix_EdgeProjAux_1 extends ShapeFix_EdgeProjAux {
    constructor();
  }

  export declare class ShapeFix_EdgeProjAux_2 extends ShapeFix_EdgeProjAux {
    constructor(F: TopoDS_Face, E: TopoDS_Edge);
  }

export declare class ShapeFix_Face extends ShapeFix_Root {
  ClearModes(): void;
  Init_1(face: TopoDS_Face): void;
  Init_2(surf: any, preci: Standard_Real, fwd: Standard_Boolean): void;
  Init_3(surf: any, preci: Standard_Real, fwd: Standard_Boolean): void;
  SetMsgRegistrator(msgreg: any): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixWireMode(): Standard_Integer;
  FixOrientationMode(): Standard_Integer;
  FixAddNaturalBoundMode(): Standard_Integer;
  FixMissingSeamMode(): Standard_Integer;
  FixSmallAreaWireMode(): Standard_Integer;
  RemoveSmallAreaFaceMode(): Standard_Integer;
  FixIntersectingWiresMode(): Standard_Integer;
  FixLoopWiresMode(): Standard_Integer;
  FixSplitFaceMode(): Standard_Integer;
  AutoCorrectPrecisionMode(): Standard_Integer;
  FixPeriodicDegeneratedMode(): Standard_Integer;
  Face(): TopoDS_Face;
  Result(): TopoDS_Shape;
  Add(wire: TopoDS_Wire): void;
  Perform(): Standard_Boolean;
  FixOrientation_1(): Standard_Boolean;
  FixOrientation_2(MapWires: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  FixAddNaturalBound(): Standard_Boolean;
  FixMissingSeam(): Standard_Boolean;
  FixSmallAreaWire(theIsRemoveSmallFace: Standard_Boolean): Standard_Boolean;
  FixLoopWire(aResWires: TopTools_SequenceOfShape): Standard_Boolean;
  FixIntersectingWires(): Standard_Boolean;
  FixWiresTwoCoincEdges(): Standard_Boolean;
  FixSplitFace(MapWires: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  FixPeriodicDegenerated(): Standard_Boolean;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  FixWireTool(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeFix_Face_1 extends ShapeFix_Face {
    constructor();
  }

  export declare class ShapeFix_Face_2 extends ShapeFix_Face {
    constructor(face: TopoDS_Face);
  }

export declare class ShapeFix_FaceConnect {
  constructor()
  Add(aFirst: TopoDS_Face, aSecond: TopoDS_Face): Standard_Boolean;
  Build(shell: TopoDS_Shell, sewtoler: Standard_Real, fixtoler: Standard_Real): TopoDS_Shell;
  Clear(): void;
}

export declare class ShapeFix_FixSmallFace extends ShapeFix_Root {
  constructor()
  Init(S: TopoDS_Shape): void;
  Perform(): void;
  FixSpotFace(): TopoDS_Shape;
  ReplaceVerticesInCaseOfSpot(F: TopoDS_Face, tol: Standard_Real): Standard_Boolean;
  RemoveFacesInCaseOfSpot(F: TopoDS_Face): Standard_Boolean;
  FixStripFace(wasdone: Standard_Boolean): TopoDS_Shape;
  ReplaceInCaseOfStrip(F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge, tol: Standard_Real): Standard_Boolean;
  RemoveFacesInCaseOfStrip(F: TopoDS_Face): Standard_Boolean;
  ComputeSharedEdgeForStripFace(F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge, F1: TopoDS_Face, tol: Standard_Real): TopoDS_Edge;
  FixSplitFace(S: TopoDS_Shape): TopoDS_Shape;
  SplitOneFace(F: TopoDS_Face, theSplittedFaces: TopoDS_Compound): Standard_Boolean;
  FixFace(F: TopoDS_Face): TopoDS_Face;
  FixShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  FixPinFace(F: TopoDS_Face): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeFix_FixSmallSolid extends ShapeFix_Root {
  constructor()
  SetFixMode(theMode: Standard_Integer): void;
  SetVolumeThreshold(theThreshold: Standard_Real): void;
  SetWidthFactorThreshold(theThreshold: Standard_Real): void;
  Remove(theShape: TopoDS_Shape, theContext: any): TopoDS_Shape;
  Merge(theShape: TopoDS_Shape, theContext: any): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeFix_FreeBounds {
  GetClosedWires(): TopoDS_Compound;
  GetOpenWires(): TopoDS_Compound;
  GetShape(): TopoDS_Shape;
}

  export declare class ShapeFix_FreeBounds_1 extends ShapeFix_FreeBounds {
    constructor();
  }

  export declare class ShapeFix_FreeBounds_2 extends ShapeFix_FreeBounds {
    constructor(shape: TopoDS_Shape, sewtoler: Standard_Real, closetoler: Standard_Real, splitclosed: Standard_Boolean, splitopen: Standard_Boolean);
  }

  export declare class ShapeFix_FreeBounds_3 extends ShapeFix_FreeBounds {
    constructor(shape: TopoDS_Shape, closetoler: Standard_Real, splitclosed: Standard_Boolean, splitopen: Standard_Boolean);
  }

export declare class ShapeFix_IntersectionTool {
  constructor(context: any, preci: Standard_Real, maxtol: Standard_Real)
  Context(): any;
  SplitEdge(edge: TopoDS_Edge, param: Standard_Real, vert: TopoDS_Vertex, face: TopoDS_Face, newE1: TopoDS_Edge, newE2: TopoDS_Edge, preci: Standard_Real): Standard_Boolean;
  CutEdge(edge: TopoDS_Edge, pend: Standard_Real, cut: Standard_Real, face: TopoDS_Face, iscutline: Standard_Boolean): Standard_Boolean;
  FixSelfIntersectWire(sewd: any, face: TopoDS_Face, NbSplit: Standard_Integer, NbCut: Standard_Integer, NbRemoved: Standard_Integer): Standard_Boolean;
  FixIntersectingWires(face: TopoDS_Face): Standard_Boolean;
}

export declare class ShapeFix_Shape extends ShapeFix_Root {
  Init(shape: TopoDS_Shape): void;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  Shape(): TopoDS_Shape;
  FixSolidTool(): any;
  FixShellTool(): any;
  FixFaceTool(): any;
  FixWireTool(): any;
  FixEdgeTool(): any;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  SetMsgRegistrator(msgreg: any): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixSolidMode(): Standard_Integer;
  FixFreeShellMode(): Standard_Integer;
  FixFreeFaceMode(): Standard_Integer;
  FixFreeWireMode(): Standard_Integer;
  FixSameParameterMode(): Standard_Integer;
  FixVertexPositionMode(): Standard_Integer;
  FixVertexTolMode(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeFix_Shape_1 extends ShapeFix_Shape {
    constructor();
  }

  export declare class ShapeFix_Shape_2 extends ShapeFix_Shape {
    constructor(shape: TopoDS_Shape);
  }

export declare class ShapeFix_Solid extends ShapeFix_Root {
  Init(solid: TopoDS_Solid): void;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  SolidFromShell(shell: TopoDS_Shell): TopoDS_Solid;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  Solid(): TopoDS_Shape;
  FixShellTool(): any;
  SetMsgRegistrator(msgreg: any): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixShellMode(): Standard_Integer;
  FixShellOrientationMode(): Standard_Integer;
  CreateOpenSolidMode(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeFix_Solid_1 extends ShapeFix_Solid {
    constructor();
  }

  export declare class ShapeFix_Solid_2 extends ShapeFix_Solid {
    constructor(solid: TopoDS_Solid);
  }

export declare class ShapeFix_Shell extends ShapeFix_Root {
  Init(shell: TopoDS_Shell): void;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  FixFaceOrientation(shell: TopoDS_Shell, isAccountMultiConex: Standard_Boolean, NonManifold: Standard_Boolean): Standard_Boolean;
  Shell(): TopoDS_Shell;
  Shape(): TopoDS_Shape;
  NbShells(): Standard_Integer;
  ErrorFaces(): TopoDS_Compound;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  FixFaceTool(): any;
  SetMsgRegistrator(msgreg: any): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixFaceMode(): Standard_Integer;
  FixOrientationMode(): Standard_Integer;
  SetNonManifoldFlag(isNonManifold: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeFix_Shell_1 extends ShapeFix_Shell {
    constructor();
  }

  export declare class ShapeFix_Shell_2 extends ShapeFix_Shell {
    constructor(shape: TopoDS_Shell);
  }

export declare class ShapeFix_Wire extends ShapeFix_Root {
  ClearModes(): void;
  ClearStatuses(): void;
  Init_1(wire: TopoDS_Wire, face: TopoDS_Face, prec: Standard_Real): void;
  Init_2(saw: any): void;
  Load_1(wire: TopoDS_Wire): void;
  Load_2(sbwd: any): void;
  SetFace(face: TopoDS_Face): void;
  SetSurface_1(surf: any): void;
  SetSurface_2(surf: any, loc: TopLoc_Location): void;
  SetPrecision(prec: Standard_Real): void;
  SetMaxTailAngle(theMaxTailAngle: Standard_Real): void;
  SetMaxTailWidth(theMaxTailWidth: Standard_Real): void;
  IsLoaded(): Standard_Boolean;
  IsReady(): Standard_Boolean;
  NbEdges(): Standard_Integer;
  Wire(): TopoDS_Wire;
  WireAPIMake(): TopoDS_Wire;
  Analyzer(): any;
  WireData(): any;
  Face(): TopoDS_Face;
  ModifyTopologyMode(): Standard_Boolean;
  ModifyGeometryMode(): Standard_Boolean;
  ModifyRemoveLoopMode(): Standard_Integer;
  ClosedWireMode(): Standard_Boolean;
  PreferencePCurveMode(): Standard_Boolean;
  FixGapsByRangesMode(): Standard_Boolean;
  FixReorderMode(): Standard_Integer;
  FixSmallMode(): Standard_Integer;
  FixConnectedMode(): Standard_Integer;
  FixEdgeCurvesMode(): Standard_Integer;
  FixDegeneratedMode(): Standard_Integer;
  FixSelfIntersectionMode(): Standard_Integer;
  FixLackingMode(): Standard_Integer;
  FixGaps3dMode(): Standard_Integer;
  FixGaps2dMode(): Standard_Integer;
  FixReversed2dMode(): Standard_Integer;
  FixRemovePCurveMode(): Standard_Integer;
  FixAddPCurveMode(): Standard_Integer;
  FixRemoveCurve3dMode(): Standard_Integer;
  FixAddCurve3dMode(): Standard_Integer;
  FixSeamMode(): Standard_Integer;
  FixShiftedMode(): Standard_Integer;
  FixSameParameterMode(): Standard_Integer;
  FixVertexToleranceMode(): Standard_Integer;
  FixNotchedEdgesMode(): Standard_Integer;
  FixSelfIntersectingEdgeMode(): Standard_Integer;
  FixIntersectingEdgesMode(): Standard_Integer;
  FixNonAdjacentIntersectingEdgesMode(): Standard_Integer;
  FixTailMode(): Standard_Integer;
  Perform(): Standard_Boolean;
  FixReorder_1(): Standard_Boolean;
  FixSmall_1(lockvtx: Standard_Boolean, precsmall: Standard_Real): Standard_Integer;
  FixConnected_1(prec: Standard_Real): Standard_Boolean;
  FixEdgeCurves(): Standard_Boolean;
  FixDegenerated_1(): Standard_Boolean;
  FixSelfIntersection(): Standard_Boolean;
  FixLacking_1(force: Standard_Boolean): Standard_Boolean;
  FixClosed(prec: Standard_Real): Standard_Boolean;
  FixGaps3d(): Standard_Boolean;
  FixGaps2d(): Standard_Boolean;
  FixReorder_2(wi: ShapeAnalysis_WireOrder): Standard_Boolean;
  FixSmall_2(num: Standard_Integer, lockvtx: Standard_Boolean, precsmall: Standard_Real): Standard_Boolean;
  FixConnected_2(num: Standard_Integer, prec: Standard_Real): Standard_Boolean;
  FixSeam(num: Standard_Integer): Standard_Boolean;
  FixShifted(): Standard_Boolean;
  FixDegenerated_2(num: Standard_Integer): Standard_Boolean;
  FixLacking_2(num: Standard_Integer, force: Standard_Boolean): Standard_Boolean;
  FixNotchedEdges(): Standard_Boolean;
  FixGap3d(num: Standard_Integer, convert: Standard_Boolean): Standard_Boolean;
  FixGap2d(num: Standard_Integer, convert: Standard_Boolean): Standard_Boolean;
  FixTails(): Standard_Boolean;
  StatusReorder(status: ShapeExtend_Status): Standard_Boolean;
  StatusSmall(status: ShapeExtend_Status): Standard_Boolean;
  StatusConnected(status: ShapeExtend_Status): Standard_Boolean;
  StatusEdgeCurves(status: ShapeExtend_Status): Standard_Boolean;
  StatusDegenerated(status: ShapeExtend_Status): Standard_Boolean;
  StatusSelfIntersection(status: ShapeExtend_Status): Standard_Boolean;
  StatusLacking(status: ShapeExtend_Status): Standard_Boolean;
  StatusClosed(status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps3d(status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps2d(status: ShapeExtend_Status): Standard_Boolean;
  StatusNotches(status: ShapeExtend_Status): Standard_Boolean;
  StatusRemovedSegment(): Standard_Boolean;
  StatusFixTails(status: ShapeExtend_Status): Standard_Boolean;
  LastFixStatus(status: ShapeExtend_Status): Standard_Boolean;
  FixEdgeTool(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeFix_Wire_1 extends ShapeFix_Wire {
    constructor();
  }

  export declare class ShapeFix_Wire_2 extends ShapeFix_Wire {
    constructor(wire: TopoDS_Wire, face: TopoDS_Face, prec: Standard_Real);
  }

export declare class ShapeFix_ShapeTolerance {
  constructor()
  LimitTolerance(shape: TopoDS_Shape, tmin: Standard_Real, tmax: Standard_Real, styp: TopAbs_ShapeEnum): Standard_Boolean;
  SetTolerance(shape: TopoDS_Shape, preci: Standard_Real, styp: TopAbs_ShapeEnum): void;
}

export declare class ShapeFix_SplitCommonVertex extends ShapeFix_Root {
  constructor()
  Init(S: TopoDS_Shape): void;
  Perform(): void;
  Shape(): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeFix_SplitTool {
  constructor()
  SplitEdge_1(edge: TopoDS_Edge, param: Standard_Real, vert: TopoDS_Vertex, face: TopoDS_Face, newE1: TopoDS_Edge, newE2: TopoDS_Edge, tol3d: Standard_Real, tol2d: Standard_Real): Standard_Boolean;
  SplitEdge_2(edge: TopoDS_Edge, param1: Standard_Real, param2: Standard_Real, vert: TopoDS_Vertex, face: TopoDS_Face, newE1: TopoDS_Edge, newE2: TopoDS_Edge, tol3d: Standard_Real, tol2d: Standard_Real): Standard_Boolean;
  CutEdge(edge: TopoDS_Edge, pend: Standard_Real, cut: Standard_Real, face: TopoDS_Face, iscutline: Standard_Boolean): Standard_Boolean;
  SplitEdge_3(edge: TopoDS_Edge, fp: Standard_Real, V1: TopoDS_Vertex, lp: Standard_Real, V2: TopoDS_Vertex, face: TopoDS_Face, SeqE: TopTools_SequenceOfShape, aNum: Standard_Integer, context: any, tol3d: Standard_Real, tol2d: Standard_Real): Standard_Boolean;
}

export declare class ShapeFix_WireVertex {
  constructor()
  Init_1(wire: TopoDS_Wire, preci: Standard_Real): void;
  Init_2(sbwd: any, preci: Standard_Real): void;
  Init_3(sawv: ShapeAnalysis_WireVertex): void;
  Analyzer(): ShapeAnalysis_WireVertex;
  WireData(): any;
  Wire(): TopoDS_Wire;
  FixSame(): Standard_Integer;
  Fix(): Standard_Integer;
}

export declare class ShapeFix_Wireframe extends ShapeFix_Root {
  ClearStatuses(): void;
  Load(shape: TopoDS_Shape): void;
  FixWireGaps(): Standard_Boolean;
  FixSmallEdges(): Standard_Boolean;
  CheckSmallEdges(theSmallEdges: TopTools_MapOfShape, theEdgeToFaces: TopTools_DataMapOfShapeListOfShape, theFaceWithSmall: TopTools_DataMapOfShapeListOfShape, theMultyEdges: TopTools_MapOfShape): Standard_Boolean;
  MergeSmallEdges(theSmallEdges: TopTools_MapOfShape, theEdgeToFaces: TopTools_DataMapOfShapeListOfShape, theFaceWithSmall: TopTools_DataMapOfShapeListOfShape, theMultyEdges: TopTools_MapOfShape, theModeDrop: Standard_Boolean, theLimitAngle: Standard_Real): Standard_Boolean;
  StatusWireGaps(status: ShapeExtend_Status): Standard_Boolean;
  StatusSmallEdges(status: ShapeExtend_Status): Standard_Boolean;
  Shape(): TopoDS_Shape;
  ModeDropSmallEdges(): Standard_Boolean;
  SetLimitAngle(theLimitAngle: Standard_Real): void;
  LimitAngle(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeFix_Wireframe_1 extends ShapeFix_Wireframe {
    constructor();
  }

  export declare class ShapeFix_Wireframe_2 extends ShapeFix_Wireframe {
    constructor(shape: TopoDS_Shape);
  }

export declare class ShapeProcess {
  constructor();
  RegisterOperator(name: Standard_CString, op: any): Standard_Boolean;
  FindOperator(name: Standard_CString, op: any): Standard_Boolean;
  Perform(context: any, seq: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
}

export declare class ShapeProcess_Context extends Standard_Transient {
  Init(file: Standard_CString, scope: Standard_CString): Standard_Boolean;
  LoadResourceManager(file: Standard_CString): any;
  ResourceManager(): any;
  SetScope(scope: Standard_CString): void;
  UnSetScope(): void;
  IsParamSet(param: Standard_CString): Standard_Boolean;
  GetReal(param: Standard_CString, val: Standard_Real): Standard_Boolean;
  GetInteger(param: Standard_CString, val: Standard_Integer): Standard_Boolean;
  GetBoolean(param: Standard_CString, val: Standard_Boolean): Standard_Boolean;
  GetString(param: Standard_CString, val: TCollection_AsciiString): Standard_Boolean;
  RealVal(param: Standard_CString, def: Standard_Real): Standard_Real;
  IntegerVal(param: Standard_CString, def: Standard_Integer): Standard_Integer;
  BooleanVal(param: Standard_CString, def: Standard_Boolean): Standard_Boolean;
  StringVal(param: Standard_CString, def: Standard_CString): Standard_CString;
  SetMessenger(messenger: any): void;
  Messenger(): any;
  SetTraceLevel(tracelev: Standard_Integer): void;
  TraceLevel(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeProcess_Context_1 extends ShapeProcess_Context {
    constructor();
  }

  export declare class ShapeProcess_Context_2 extends ShapeProcess_Context {
    constructor(file: Standard_CString, scope: Standard_CString);
  }

export declare class ShapeProcess_OperLibrary {
  constructor();
  Init(): void;
  ApplyModifier(S: TopoDS_Shape, context: any, M: any, map: TopTools_DataMapOfShapeShape, msg: any, theMutableInput: Standard_Boolean): TopoDS_Shape;
}

export declare class ShapeProcess_Operator extends Standard_Transient {
  Perform(context: any, theProgress: Message_ProgressRange): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeProcess_ShapeContext extends ShapeProcess_Context {
  Init(S: TopoDS_Shape): void;
  Shape(): TopoDS_Shape;
  Result(): TopoDS_Shape;
  Map(): TopTools_DataMapOfShapeShape;
  Messages_1(): any;
  Messages_2(): any;
  SetDetalisation(level: TopAbs_ShapeEnum): void;
  GetDetalisation(): TopAbs_ShapeEnum;
  SetResult(S: TopoDS_Shape): void;
  RecordModification_1(repl: TopTools_DataMapOfShapeShape, msg: any): void;
  RecordModification_2(repl: any, msg: any): void;
  RecordModification_3(repl: any): void;
  RecordModification_4(sh: TopoDS_Shape, repl: BRepTools_Modifier, msg: any): void;
  AddMessage(S: TopoDS_Shape, msg: Message_Msg, gravity: Message_Gravity): void;
  GetContinuity(param: Standard_CString, val: GeomAbs_Shape): Standard_Boolean;
  ContinuityVal(param: Standard_CString, def: GeomAbs_Shape): GeomAbs_Shape;
  PrintStatistics(): void;
  SetNonManifold(theNonManifold: Standard_Boolean): void;
  IsNonManifold(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeProcess_ShapeContext_1 extends ShapeProcess_ShapeContext {
    constructor(file: Standard_CString, seq: Standard_CString);
  }

  export declare class ShapeProcess_ShapeContext_2 extends ShapeProcess_ShapeContext {
    constructor(S: TopoDS_Shape, file: Standard_CString, seq: Standard_CString);
  }

export declare class ShapeProcess_UOperator extends ShapeProcess_Operator {
  constructor(func: ShapeProcess_OperFunc)
  Perform(context: any, theProgress: Message_ProgressRange): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeProcessAPI_ApplySequence {
  constructor(rscName: Standard_CString, seqName: Standard_CString)
  Context(): any;
  PrepareShape(shape: TopoDS_Shape, fillmap: Standard_Boolean, until: TopAbs_ShapeEnum, theProgress: Message_ProgressRange): TopoDS_Shape;
  ClearMap(): void;
  Map(): TopTools_DataMapOfShapeShape;
  PrintPreparationResult(): void;
}

export declare class ShapeUpgrade {
  constructor();
  C0BSplineToSequenceOfC1BSplineCurve_1(BS: any, seqBS: any): Standard_Boolean;
  C0BSplineToSequenceOfC1BSplineCurve_2(BS: any, seqBS: any): Standard_Boolean;
}

export declare class ShapeUpgrade_Tool extends Standard_Transient {
  constructor()
  Set(tool: any): void;
  SetContext(context: any): void;
  Context(): any;
  SetPrecision(preci: Standard_Real): void;
  Precision(): Standard_Real;
  SetMinTolerance(mintol: Standard_Real): void;
  MinTolerance(): Standard_Real;
  SetMaxTolerance(maxtol: Standard_Real): void;
  MaxTolerance(): Standard_Real;
  LimitTolerance(toler: Standard_Real): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_EdgeDivide extends ShapeUpgrade_Tool {
  constructor()
  Clear(): void;
  SetFace(F: TopoDS_Face): void;
  Compute(E: TopoDS_Edge): Standard_Boolean;
  HasCurve2d(): Standard_Boolean;
  HasCurve3d(): Standard_Boolean;
  Knots2d(): any;
  Knots3d(): any;
  SetSplitCurve2dTool(splitCurve2dTool: any): void;
  SetSplitCurve3dTool(splitCurve3dTool: any): void;
  GetSplitCurve2dTool(): any;
  GetSplitCurve3dTool(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_ClosedEdgeDivide extends ShapeUpgrade_EdgeDivide {
  constructor()
  Compute(anEdge: TopoDS_Edge): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_FaceDivide extends ShapeUpgrade_Tool {
  Init(F: TopoDS_Face): void;
  SetSurfaceSegmentMode(Segment: Standard_Boolean): void;
  Perform(): Standard_Boolean;
  SplitSurface(): Standard_Boolean;
  SplitCurves(): Standard_Boolean;
  Result(): TopoDS_Shape;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  SetSplitSurfaceTool(splitSurfaceTool: any): void;
  SetWireDivideTool(wireDivideTool: any): void;
  GetSplitSurfaceTool(): any;
  GetWireDivideTool(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeUpgrade_FaceDivide_1 extends ShapeUpgrade_FaceDivide {
    constructor();
  }

  export declare class ShapeUpgrade_FaceDivide_2 extends ShapeUpgrade_FaceDivide {
    constructor(F: TopoDS_Face);
  }

export declare class ShapeUpgrade_ClosedFaceDivide extends ShapeUpgrade_FaceDivide {
  SplitSurface(): Standard_Boolean;
  SetNbSplitPoints(num: Standard_Integer): void;
  GetNbSplitPoints(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeUpgrade_ClosedFaceDivide_1 extends ShapeUpgrade_ClosedFaceDivide {
    constructor();
  }

  export declare class ShapeUpgrade_ClosedFaceDivide_2 extends ShapeUpgrade_ClosedFaceDivide {
    constructor(F: TopoDS_Face);
  }

export declare class ShapeUpgrade_SplitCurve extends Standard_Transient {
  constructor()
  Init(First: Standard_Real, Last: Standard_Real): void;
  SetSplitValues(SplitValues: any): void;
  Build(Segment: Standard_Boolean): void;
  SplitValues(): any;
  Compute(): void;
  Perform(Segment: Standard_Boolean): void;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_SplitCurve2d extends ShapeUpgrade_SplitCurve {
  constructor()
  Init_1(C: any): void;
  Init_2(C: any, First: Standard_Real, Last: Standard_Real): void;
  Build(Segment: Standard_Boolean): void;
  GetCurves(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_ConvertCurve2dToBezier extends ShapeUpgrade_SplitCurve2d {
  constructor()
  Compute(): void;
  Build(Segment: Standard_Boolean): void;
  SplitParams(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_SplitCurve3d extends ShapeUpgrade_SplitCurve {
  constructor()
  Init_1(C: any): void;
  Init_2(C: any, First: Standard_Real, Last: Standard_Real): void;
  Build(Segment: Standard_Boolean): void;
  GetCurves(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_ConvertCurve3dToBezier extends ShapeUpgrade_SplitCurve3d {
  constructor()
  SetLineMode(mode: Standard_Boolean): void;
  GetLineMode(): Standard_Boolean;
  SetCircleMode(mode: Standard_Boolean): void;
  GetCircleMode(): Standard_Boolean;
  SetConicMode(mode: Standard_Boolean): void;
  GetConicMode(): Standard_Boolean;
  Compute(): void;
  Build(Segment: Standard_Boolean): void;
  SplitParams(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_SplitSurface extends Standard_Transient {
  constructor()
  Init_1(S: any): void;
  Init_2(S: any, UFirst: Standard_Real, ULast: Standard_Real, VFirst: Standard_Real, VLast: Standard_Real): void;
  SetUSplitValues(UValues: any): void;
  SetVSplitValues(VValues: any): void;
  Build(Segment: Standard_Boolean): void;
  Compute(Segment: Standard_Boolean): void;
  Perform(Segment: Standard_Boolean): void;
  USplitValues(): any;
  VSplitValues(): any;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  ResSurfaces(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_ConvertSurfaceToBezierBasis extends ShapeUpgrade_SplitSurface {
  constructor()
  Build(Segment: Standard_Boolean): void;
  Compute(Segment: Standard_Boolean): void;
  Segments(): any;
  SetPlaneMode(mode: Standard_Boolean): void;
  GetPlaneMode(): Standard_Boolean;
  SetRevolutionMode(mode: Standard_Boolean): void;
  GetRevolutionMode(): Standard_Boolean;
  SetExtrusionMode(mode: Standard_Boolean): void;
  GetExtrusionMode(): Standard_Boolean;
  SetBSplineMode(mode: Standard_Boolean): void;
  GetBSplineMode(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_FaceDivideArea extends ShapeUpgrade_FaceDivide {
  Perform(): Standard_Boolean;
  MaxArea(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeUpgrade_FaceDivideArea_1 extends ShapeUpgrade_FaceDivideArea {
    constructor();
  }

  export declare class ShapeUpgrade_FaceDivideArea_2 extends ShapeUpgrade_FaceDivideArea {
    constructor(F: TopoDS_Face);
  }

export declare class ShapeUpgrade_FixSmallCurves extends ShapeUpgrade_Tool {
  constructor()
  Init(theEdge: TopoDS_Edge, theFace: TopoDS_Face): void;
  Approx(Curve3d: any, Curve2d: any, Curve2dR: any, First: Standard_Real, Last: Standard_Real): Standard_Boolean;
  SetSplitCurve3dTool(splitCurve3dTool: any): void;
  SetSplitCurve2dTool(splitCurve2dTool: any): void;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_FixSmallBezierCurves extends ShapeUpgrade_FixSmallCurves {
  constructor()
  Approx(Curve3d: any, Curve2d: any, Curve2dR: any, First: Standard_Real, Last: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_RemoveInternalWires extends ShapeUpgrade_Tool {
  Init(theShape: TopoDS_Shape): void;
  Perform_1(): Standard_Boolean;
  Perform_2(theSeqShapes: TopTools_SequenceOfShape): Standard_Boolean;
  GetResult(): TopoDS_Shape;
  MinArea(): Standard_Real;
  RemoveFaceMode(): Standard_Boolean;
  RemovedFaces(): TopTools_SequenceOfShape;
  RemovedWires(): TopTools_SequenceOfShape;
  Status(theStatus: ShapeExtend_Status): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeUpgrade_RemoveInternalWires_1 extends ShapeUpgrade_RemoveInternalWires {
    constructor();
  }

  export declare class ShapeUpgrade_RemoveInternalWires_2 extends ShapeUpgrade_RemoveInternalWires {
    constructor(theShape: TopoDS_Shape);
  }

export declare class ShapeUpgrade_RemoveLocations extends Standard_Transient {
  constructor()
  Remove(theShape: TopoDS_Shape): Standard_Boolean;
  GetResult(): TopoDS_Shape;
  SetRemoveLevel(theLevel: TopAbs_ShapeEnum): void;
  RemoveLevel(): TopAbs_ShapeEnum;
  ModifiedShape(theInitShape: TopoDS_Shape): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_ShapeDivide {
  Init(S: TopoDS_Shape): void;
  SetPrecision(Prec: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetSurfaceSegmentMode(Segment: Standard_Boolean): void;
  Perform(newContext: Standard_Boolean): Standard_Boolean;
  Result(): TopoDS_Shape;
  GetContext(): any;
  SetContext(context: any): void;
  SetMsgRegistrator(msgreg: any): void;
  MsgRegistrator(): any;
  SendMsg(shape: TopoDS_Shape, message: Message_Msg, gravity: Message_Gravity): void;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  SetSplitFaceTool(splitFaceTool: any): void;
  SetEdgeMode(aEdgeMode: Standard_Integer): void;
}

  export declare class ShapeUpgrade_ShapeDivide_1 extends ShapeUpgrade_ShapeDivide {
    constructor();
  }

  export declare class ShapeUpgrade_ShapeDivide_2 extends ShapeUpgrade_ShapeDivide {
    constructor(S: TopoDS_Shape);
  }

export declare class ShapeUpgrade_ShapeConvertToBezier extends ShapeUpgrade_ShapeDivide {
  Set2dConversion(mode: Standard_Boolean): void;
  Get2dConversion(): Standard_Boolean;
  Set3dConversion(mode: Standard_Boolean): void;
  Get3dConversion(): Standard_Boolean;
  SetSurfaceConversion(mode: Standard_Boolean): void;
  GetSurfaceConversion(): Standard_Boolean;
  Set3dLineConversion(mode: Standard_Boolean): void;
  Get3dLineConversion(): Standard_Boolean;
  Set3dCircleConversion(mode: Standard_Boolean): void;
  Get3dCircleConversion(): Standard_Boolean;
  Set3dConicConversion(mode: Standard_Boolean): void;
  Get3dConicConversion(): Standard_Boolean;
  SetPlaneMode(mode: Standard_Boolean): void;
  GetPlaneMode(): Standard_Boolean;
  SetRevolutionMode(mode: Standard_Boolean): void;
  GetRevolutionMode(): Standard_Boolean;
  SetExtrusionMode(mode: Standard_Boolean): void;
  GetExtrusionMode(): Standard_Boolean;
  SetBSplineMode(mode: Standard_Boolean): void;
  GetBSplineMode(): Standard_Boolean;
  Perform(newContext: Standard_Boolean): Standard_Boolean;
}

  export declare class ShapeUpgrade_ShapeConvertToBezier_1 extends ShapeUpgrade_ShapeConvertToBezier {
    constructor();
  }

  export declare class ShapeUpgrade_ShapeConvertToBezier_2 extends ShapeUpgrade_ShapeConvertToBezier {
    constructor(S: TopoDS_Shape);
  }

export declare class ShapeUpgrade_ShapeDivideAngle extends ShapeUpgrade_ShapeDivide {
  InitTool(MaxAngle: Standard_Real): void;
  SetMaxAngle(MaxAngle: Standard_Real): void;
  MaxAngle(): Standard_Real;
}

  export declare class ShapeUpgrade_ShapeDivideAngle_1 extends ShapeUpgrade_ShapeDivideAngle {
    constructor(MaxAngle: Standard_Real);
  }

  export declare class ShapeUpgrade_ShapeDivideAngle_2 extends ShapeUpgrade_ShapeDivideAngle {
    constructor(MaxAngle: Standard_Real, S: TopoDS_Shape);
  }

export declare class ShapeUpgrade_ShapeDivideArea extends ShapeUpgrade_ShapeDivide {
  MaxArea(): Standard_Real;
}

  export declare class ShapeUpgrade_ShapeDivideArea_1 extends ShapeUpgrade_ShapeDivideArea {
    constructor();
  }

  export declare class ShapeUpgrade_ShapeDivideArea_2 extends ShapeUpgrade_ShapeDivideArea {
    constructor(S: TopoDS_Shape);
  }

export declare class ShapeUpgrade_ShapeDivideClosed extends ShapeUpgrade_ShapeDivide {
  constructor(S: TopoDS_Shape)
  SetNbSplitPoints(num: Standard_Integer): void;
}

export declare class ShapeUpgrade_ShapeDivideClosedEdges extends ShapeUpgrade_ShapeDivide {
  constructor(S: TopoDS_Shape)
  SetNbSplitPoints(num: Standard_Integer): void;
}

export declare class ShapeUpgrade_ShapeDivideContinuity extends ShapeUpgrade_ShapeDivide {
  SetTolerance(Tol: Standard_Real): void;
  SetTolerance2d(Tol: Standard_Real): void;
  SetBoundaryCriterion(Criterion: GeomAbs_Shape): void;
  SetPCurveCriterion(Criterion: GeomAbs_Shape): void;
  SetSurfaceCriterion(Criterion: GeomAbs_Shape): void;
}

  export declare class ShapeUpgrade_ShapeDivideContinuity_1 extends ShapeUpgrade_ShapeDivideContinuity {
    constructor();
  }

  export declare class ShapeUpgrade_ShapeDivideContinuity_2 extends ShapeUpgrade_ShapeDivideContinuity {
    constructor(S: TopoDS_Shape);
  }

export declare class ShapeUpgrade_ShellSewing {
  constructor()
  ApplySewing(shape: TopoDS_Shape, tol: Standard_Real): TopoDS_Shape;
}

export declare class ShapeUpgrade_SplitCurve2dContinuity extends ShapeUpgrade_SplitCurve2d {
  constructor()
  SetCriterion(Criterion: GeomAbs_Shape): void;
  SetTolerance(Tol: Standard_Real): void;
  Compute(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_SplitCurve3dContinuity extends ShapeUpgrade_SplitCurve3d {
  constructor()
  SetCriterion(Criterion: GeomAbs_Shape): void;
  SetTolerance(Tol: Standard_Real): void;
  Compute(): void;
  GetCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_SplitSurfaceAngle extends ShapeUpgrade_SplitSurface {
  constructor(MaxAngle: Standard_Real)
  SetMaxAngle(MaxAngle: Standard_Real): void;
  MaxAngle(): Standard_Real;
  Compute(Segment: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_SplitSurfaceArea extends ShapeUpgrade_SplitSurface {
  constructor()
  NbParts(): Standard_Integer;
  Compute(Segment: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_SplitSurfaceContinuity extends ShapeUpgrade_SplitSurface {
  constructor()
  SetCriterion(Criterion: GeomAbs_Shape): void;
  SetTolerance(Tol: Standard_Real): void;
  Compute(Segment: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ShapeUpgrade_UnifySameDomain extends Standard_Transient {
  Initialize(aShape: TopoDS_Shape, UnifyEdges: Standard_Boolean, UnifyFaces: Standard_Boolean, ConcatBSplines: Standard_Boolean): void;
  AllowInternalEdges(theValue: Standard_Boolean): void;
  KeepShape(theShape: TopoDS_Shape): void;
  KeepShapes(theShapes: TopTools_MapOfShape): void;
  SetSafeInputMode(theValue: Standard_Boolean): void;
  SetLinearTolerance(theValue: Standard_Real): void;
  SetAngularTolerance(theValue: Standard_Real): void;
  Build(): void;
  Shape(): TopoDS_Shape;
  History_1(): any;
  History_2(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ShapeUpgrade_UnifySameDomain_1 extends ShapeUpgrade_UnifySameDomain {
    constructor();
  }

  export declare class ShapeUpgrade_UnifySameDomain_2 extends ShapeUpgrade_UnifySameDomain {
    constructor(aShape: TopoDS_Shape, UnifyEdges: Standard_Boolean, UnifyFaces: Standard_Boolean, ConcatBSplines: Standard_Boolean);
  }

export declare class ShapeUpgrade_WireDivide extends ShapeUpgrade_Tool {
  constructor()
  Init_1(W: TopoDS_Wire, F: TopoDS_Face): void;
  Init_2(W: TopoDS_Wire, S: any): void;
  Load_1(W: TopoDS_Wire): void;
  Load_2(E: TopoDS_Edge): void;
  SetFace(F: TopoDS_Face): void;
  SetSurface_1(S: any): void;
  SetSurface_2(S: any, L: TopLoc_Location): void;
  Perform(): void;
  Wire(): TopoDS_Wire;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  SetSplitCurve3dTool(splitCurve3dTool: any): void;
  SetSplitCurve2dTool(splitCurve2dTool: any): void;
  SetTransferParamTool(TransferParam: any): void;
  SetEdgeDivideTool(edgeDivideTool: any): void;
  GetEdgeDivideTool(): any;
  GetTransferParamTool(): any;
  SetEdgeMode(EdgeMode: Standard_Integer): void;
  SetFixSmallCurveTool(FixSmallCurvesTool: any): void;
  GetFixSmallCurveTool(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_ShapeBuild_ReShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeBuild_ReShape): void;
  get(): ShapeBuild_ReShape;
}

  export declare class Handle_ShapeBuild_ReShape_1 extends Handle_ShapeBuild_ReShape {
    constructor();
  }

  export declare class Handle_ShapeBuild_ReShape_2 extends Handle_ShapeBuild_ReShape {
    constructor(thePtr: ShapeBuild_ReShape);
  }

  export declare class Handle_ShapeBuild_ReShape_3 extends Handle_ShapeBuild_ReShape {
    constructor(theHandle: Handle_ShapeBuild_ReShape);
  }

  export declare class Handle_ShapeBuild_ReShape_4 extends Handle_ShapeBuild_ReShape {
    constructor(theHandle: Handle_ShapeBuild_ReShape);
  }

export declare class Handle_ShapeAlgo_AlgoContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAlgo_AlgoContainer): void;
  get(): ShapeAlgo_AlgoContainer;
}

  export declare class Handle_ShapeAlgo_AlgoContainer_1 extends Handle_ShapeAlgo_AlgoContainer {
    constructor();
  }

  export declare class Handle_ShapeAlgo_AlgoContainer_2 extends Handle_ShapeAlgo_AlgoContainer {
    constructor(thePtr: ShapeAlgo_AlgoContainer);
  }

  export declare class Handle_ShapeAlgo_AlgoContainer_3 extends Handle_ShapeAlgo_AlgoContainer {
    constructor(theHandle: Handle_ShapeAlgo_AlgoContainer);
  }

  export declare class Handle_ShapeAlgo_AlgoContainer_4 extends Handle_ShapeAlgo_AlgoContainer {
    constructor(theHandle: Handle_ShapeAlgo_AlgoContainer);
  }

export declare class Handle_ShapeAlgo_ToolContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAlgo_ToolContainer): void;
  get(): ShapeAlgo_ToolContainer;
}

  export declare class Handle_ShapeAlgo_ToolContainer_1 extends Handle_ShapeAlgo_ToolContainer {
    constructor();
  }

  export declare class Handle_ShapeAlgo_ToolContainer_2 extends Handle_ShapeAlgo_ToolContainer {
    constructor(thePtr: ShapeAlgo_ToolContainer);
  }

  export declare class Handle_ShapeAlgo_ToolContainer_3 extends Handle_ShapeAlgo_ToolContainer {
    constructor(theHandle: Handle_ShapeAlgo_ToolContainer);
  }

  export declare class Handle_ShapeAlgo_ToolContainer_4 extends Handle_ShapeAlgo_ToolContainer {
    constructor(theHandle: Handle_ShapeAlgo_ToolContainer);
  }

export declare class ShapeAnalysis_DataMapOfShapeListOfReal extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: ShapeAnalysis_DataMapOfShapeListOfReal): void;
  Assign(theOther: ShapeAnalysis_DataMapOfShapeListOfReal): ShapeAnalysis_DataMapOfShapeListOfReal;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TColStd_ListOfReal): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TColStd_ListOfReal): TColStd_ListOfReal;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TColStd_ListOfReal;
  Find_1(theKey: TopoDS_Shape): TColStd_ListOfReal;
  Find_2(theKey: TopoDS_Shape, theValue: TColStd_ListOfReal): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TColStd_ListOfReal;
  ChangeFind(theKey: TopoDS_Shape): TColStd_ListOfReal;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class ShapeAnalysis_DataMapOfShapeListOfReal_1 extends ShapeAnalysis_DataMapOfShapeListOfReal {
    constructor();
  }

  export declare class ShapeAnalysis_DataMapOfShapeListOfReal_2 extends ShapeAnalysis_DataMapOfShapeListOfReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class ShapeAnalysis_DataMapOfShapeListOfReal_3 extends ShapeAnalysis_DataMapOfShapeListOfReal {
    constructor(theOther: ShapeAnalysis_DataMapOfShapeListOfReal);
  }

export declare class Handle_ShapeAnalysis_FreeBoundData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_FreeBoundData): void;
  get(): ShapeAnalysis_FreeBoundData;
}

  export declare class Handle_ShapeAnalysis_FreeBoundData_1 extends Handle_ShapeAnalysis_FreeBoundData {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_FreeBoundData_2 extends Handle_ShapeAnalysis_FreeBoundData {
    constructor(thePtr: ShapeAnalysis_FreeBoundData);
  }

  export declare class Handle_ShapeAnalysis_FreeBoundData_3 extends Handle_ShapeAnalysis_FreeBoundData {
    constructor(theHandle: Handle_ShapeAnalysis_FreeBoundData);
  }

  export declare class Handle_ShapeAnalysis_FreeBoundData_4 extends Handle_ShapeAnalysis_FreeBoundData {
    constructor(theHandle: Handle_ShapeAnalysis_FreeBoundData);
  }

export declare class Handle_ShapeAnalysis_HSequenceOfFreeBounds {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_HSequenceOfFreeBounds): void;
  get(): ShapeAnalysis_HSequenceOfFreeBounds;
}

  export declare class Handle_ShapeAnalysis_HSequenceOfFreeBounds_1 extends Handle_ShapeAnalysis_HSequenceOfFreeBounds {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_HSequenceOfFreeBounds_2 extends Handle_ShapeAnalysis_HSequenceOfFreeBounds {
    constructor(thePtr: ShapeAnalysis_HSequenceOfFreeBounds);
  }

  export declare class Handle_ShapeAnalysis_HSequenceOfFreeBounds_3 extends Handle_ShapeAnalysis_HSequenceOfFreeBounds {
    constructor(theHandle: Handle_ShapeAnalysis_HSequenceOfFreeBounds);
  }

  export declare class Handle_ShapeAnalysis_HSequenceOfFreeBounds_4 extends Handle_ShapeAnalysis_HSequenceOfFreeBounds {
    constructor(theHandle: Handle_ShapeAnalysis_HSequenceOfFreeBounds);
  }

export declare class Handle_ShapeAnalysis_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_Surface): void;
  get(): ShapeAnalysis_Surface;
}

  export declare class Handle_ShapeAnalysis_Surface_1 extends Handle_ShapeAnalysis_Surface {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_Surface_2 extends Handle_ShapeAnalysis_Surface {
    constructor(thePtr: ShapeAnalysis_Surface);
  }

  export declare class Handle_ShapeAnalysis_Surface_3 extends Handle_ShapeAnalysis_Surface {
    constructor(theHandle: Handle_ShapeAnalysis_Surface);
  }

  export declare class Handle_ShapeAnalysis_Surface_4 extends Handle_ShapeAnalysis_Surface {
    constructor(theHandle: Handle_ShapeAnalysis_Surface);
  }

export declare class Handle_ShapeAnalysis_TransferParameters {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_TransferParameters): void;
  get(): ShapeAnalysis_TransferParameters;
}

  export declare class Handle_ShapeAnalysis_TransferParameters_1 extends Handle_ShapeAnalysis_TransferParameters {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_TransferParameters_2 extends Handle_ShapeAnalysis_TransferParameters {
    constructor(thePtr: ShapeAnalysis_TransferParameters);
  }

  export declare class Handle_ShapeAnalysis_TransferParameters_3 extends Handle_ShapeAnalysis_TransferParameters {
    constructor(theHandle: Handle_ShapeAnalysis_TransferParameters);
  }

  export declare class Handle_ShapeAnalysis_TransferParameters_4 extends Handle_ShapeAnalysis_TransferParameters {
    constructor(theHandle: Handle_ShapeAnalysis_TransferParameters);
  }

export declare class Handle_ShapeAnalysis_TransferParametersProj {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_TransferParametersProj): void;
  get(): ShapeAnalysis_TransferParametersProj;
}

  export declare class Handle_ShapeAnalysis_TransferParametersProj_1 extends Handle_ShapeAnalysis_TransferParametersProj {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_TransferParametersProj_2 extends Handle_ShapeAnalysis_TransferParametersProj {
    constructor(thePtr: ShapeAnalysis_TransferParametersProj);
  }

  export declare class Handle_ShapeAnalysis_TransferParametersProj_3 extends Handle_ShapeAnalysis_TransferParametersProj {
    constructor(theHandle: Handle_ShapeAnalysis_TransferParametersProj);
  }

  export declare class Handle_ShapeAnalysis_TransferParametersProj_4 extends Handle_ShapeAnalysis_TransferParametersProj {
    constructor(theHandle: Handle_ShapeAnalysis_TransferParametersProj);
  }

export declare class Handle_ShapeAnalysis_Wire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeAnalysis_Wire): void;
  get(): ShapeAnalysis_Wire;
}

  export declare class Handle_ShapeAnalysis_Wire_1 extends Handle_ShapeAnalysis_Wire {
    constructor();
  }

  export declare class Handle_ShapeAnalysis_Wire_2 extends Handle_ShapeAnalysis_Wire {
    constructor(thePtr: ShapeAnalysis_Wire);
  }

  export declare class Handle_ShapeAnalysis_Wire_3 extends Handle_ShapeAnalysis_Wire {
    constructor(theHandle: Handle_ShapeAnalysis_Wire);
  }

  export declare class Handle_ShapeAnalysis_Wire_4 extends Handle_ShapeAnalysis_Wire {
    constructor(theHandle: Handle_ShapeAnalysis_Wire);
  }

export declare class Handle_ShapeExtend_WireData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeExtend_WireData): void;
  get(): ShapeExtend_WireData;
}

  export declare class Handle_ShapeExtend_WireData_1 extends Handle_ShapeExtend_WireData {
    constructor();
  }

  export declare class Handle_ShapeExtend_WireData_2 extends Handle_ShapeExtend_WireData {
    constructor(thePtr: ShapeExtend_WireData);
  }

  export declare class Handle_ShapeExtend_WireData_3 extends Handle_ShapeExtend_WireData {
    constructor(theHandle: Handle_ShapeExtend_WireData);
  }

  export declare class Handle_ShapeExtend_WireData_4 extends Handle_ShapeExtend_WireData {
    constructor(theHandle: Handle_ShapeExtend_WireData);
  }

export declare class Handle_ShapeConstruct_ProjectCurveOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeConstruct_ProjectCurveOnSurface): void;
  get(): ShapeConstruct_ProjectCurveOnSurface;
}

  export declare class Handle_ShapeConstruct_ProjectCurveOnSurface_1 extends Handle_ShapeConstruct_ProjectCurveOnSurface {
    constructor();
  }

  export declare class Handle_ShapeConstruct_ProjectCurveOnSurface_2 extends Handle_ShapeConstruct_ProjectCurveOnSurface {
    constructor(thePtr: ShapeConstruct_ProjectCurveOnSurface);
  }

  export declare class Handle_ShapeConstruct_ProjectCurveOnSurface_3 extends Handle_ShapeConstruct_ProjectCurveOnSurface {
    constructor(theHandle: Handle_ShapeConstruct_ProjectCurveOnSurface);
  }

  export declare class Handle_ShapeConstruct_ProjectCurveOnSurface_4 extends Handle_ShapeConstruct_ProjectCurveOnSurface {
    constructor(theHandle: Handle_ShapeConstruct_ProjectCurveOnSurface);
  }

export declare class Handle_ShapeCustom_Modification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_Modification): void;
  get(): ShapeCustom_Modification;
}

  export declare class Handle_ShapeCustom_Modification_1 extends Handle_ShapeCustom_Modification {
    constructor();
  }

  export declare class Handle_ShapeCustom_Modification_2 extends Handle_ShapeCustom_Modification {
    constructor(thePtr: ShapeCustom_Modification);
  }

  export declare class Handle_ShapeCustom_Modification_3 extends Handle_ShapeCustom_Modification {
    constructor(theHandle: Handle_ShapeCustom_Modification);
  }

  export declare class Handle_ShapeCustom_Modification_4 extends Handle_ShapeCustom_Modification {
    constructor(theHandle: Handle_ShapeCustom_Modification);
  }

export declare class Handle_ShapeCustom_BSplineRestriction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_BSplineRestriction): void;
  get(): ShapeCustom_BSplineRestriction;
}

  export declare class Handle_ShapeCustom_BSplineRestriction_1 extends Handle_ShapeCustom_BSplineRestriction {
    constructor();
  }

  export declare class Handle_ShapeCustom_BSplineRestriction_2 extends Handle_ShapeCustom_BSplineRestriction {
    constructor(thePtr: ShapeCustom_BSplineRestriction);
  }

  export declare class Handle_ShapeCustom_BSplineRestriction_3 extends Handle_ShapeCustom_BSplineRestriction {
    constructor(theHandle: Handle_ShapeCustom_BSplineRestriction);
  }

  export declare class Handle_ShapeCustom_BSplineRestriction_4 extends Handle_ShapeCustom_BSplineRestriction {
    constructor(theHandle: Handle_ShapeCustom_BSplineRestriction);
  }

export declare class Handle_ShapeCustom_ConvertToBSpline {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_ConvertToBSpline): void;
  get(): ShapeCustom_ConvertToBSpline;
}

  export declare class Handle_ShapeCustom_ConvertToBSpline_1 extends Handle_ShapeCustom_ConvertToBSpline {
    constructor();
  }

  export declare class Handle_ShapeCustom_ConvertToBSpline_2 extends Handle_ShapeCustom_ConvertToBSpline {
    constructor(thePtr: ShapeCustom_ConvertToBSpline);
  }

  export declare class Handle_ShapeCustom_ConvertToBSpline_3 extends Handle_ShapeCustom_ConvertToBSpline {
    constructor(theHandle: Handle_ShapeCustom_ConvertToBSpline);
  }

  export declare class Handle_ShapeCustom_ConvertToBSpline_4 extends Handle_ShapeCustom_ConvertToBSpline {
    constructor(theHandle: Handle_ShapeCustom_ConvertToBSpline);
  }

export declare class Handle_ShapeCustom_ConvertToRevolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_ConvertToRevolution): void;
  get(): ShapeCustom_ConvertToRevolution;
}

  export declare class Handle_ShapeCustom_ConvertToRevolution_1 extends Handle_ShapeCustom_ConvertToRevolution {
    constructor();
  }

  export declare class Handle_ShapeCustom_ConvertToRevolution_2 extends Handle_ShapeCustom_ConvertToRevolution {
    constructor(thePtr: ShapeCustom_ConvertToRevolution);
  }

  export declare class Handle_ShapeCustom_ConvertToRevolution_3 extends Handle_ShapeCustom_ConvertToRevolution {
    constructor(theHandle: Handle_ShapeCustom_ConvertToRevolution);
  }

  export declare class Handle_ShapeCustom_ConvertToRevolution_4 extends Handle_ShapeCustom_ConvertToRevolution {
    constructor(theHandle: Handle_ShapeCustom_ConvertToRevolution);
  }

export declare class Handle_ShapeCustom_DirectModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_DirectModification): void;
  get(): ShapeCustom_DirectModification;
}

  export declare class Handle_ShapeCustom_DirectModification_1 extends Handle_ShapeCustom_DirectModification {
    constructor();
  }

  export declare class Handle_ShapeCustom_DirectModification_2 extends Handle_ShapeCustom_DirectModification {
    constructor(thePtr: ShapeCustom_DirectModification);
  }

  export declare class Handle_ShapeCustom_DirectModification_3 extends Handle_ShapeCustom_DirectModification {
    constructor(theHandle: Handle_ShapeCustom_DirectModification);
  }

  export declare class Handle_ShapeCustom_DirectModification_4 extends Handle_ShapeCustom_DirectModification {
    constructor(theHandle: Handle_ShapeCustom_DirectModification);
  }

export declare class Handle_ShapeCustom_RestrictionParameters {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_RestrictionParameters): void;
  get(): ShapeCustom_RestrictionParameters;
}

  export declare class Handle_ShapeCustom_RestrictionParameters_1 extends Handle_ShapeCustom_RestrictionParameters {
    constructor();
  }

  export declare class Handle_ShapeCustom_RestrictionParameters_2 extends Handle_ShapeCustom_RestrictionParameters {
    constructor(thePtr: ShapeCustom_RestrictionParameters);
  }

  export declare class Handle_ShapeCustom_RestrictionParameters_3 extends Handle_ShapeCustom_RestrictionParameters {
    constructor(theHandle: Handle_ShapeCustom_RestrictionParameters);
  }

  export declare class Handle_ShapeCustom_RestrictionParameters_4 extends Handle_ShapeCustom_RestrictionParameters {
    constructor(theHandle: Handle_ShapeCustom_RestrictionParameters);
  }

export declare class Handle_ShapeCustom_SweptToElementary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_SweptToElementary): void;
  get(): ShapeCustom_SweptToElementary;
}

  export declare class Handle_ShapeCustom_SweptToElementary_1 extends Handle_ShapeCustom_SweptToElementary {
    constructor();
  }

  export declare class Handle_ShapeCustom_SweptToElementary_2 extends Handle_ShapeCustom_SweptToElementary {
    constructor(thePtr: ShapeCustom_SweptToElementary);
  }

  export declare class Handle_ShapeCustom_SweptToElementary_3 extends Handle_ShapeCustom_SweptToElementary {
    constructor(theHandle: Handle_ShapeCustom_SweptToElementary);
  }

  export declare class Handle_ShapeCustom_SweptToElementary_4 extends Handle_ShapeCustom_SweptToElementary {
    constructor(theHandle: Handle_ShapeCustom_SweptToElementary);
  }

export declare class Handle_ShapeCustom_TrsfModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_TrsfModification): void;
  get(): ShapeCustom_TrsfModification;
}

  export declare class Handle_ShapeCustom_TrsfModification_1 extends Handle_ShapeCustom_TrsfModification {
    constructor();
  }

  export declare class Handle_ShapeCustom_TrsfModification_2 extends Handle_ShapeCustom_TrsfModification {
    constructor(thePtr: ShapeCustom_TrsfModification);
  }

  export declare class Handle_ShapeCustom_TrsfModification_3 extends Handle_ShapeCustom_TrsfModification {
    constructor(theHandle: Handle_ShapeCustom_TrsfModification);
  }

  export declare class Handle_ShapeCustom_TrsfModification_4 extends Handle_ShapeCustom_TrsfModification {
    constructor(theHandle: Handle_ShapeCustom_TrsfModification);
  }

export declare class Handle_ShapeExtend_BasicMsgRegistrator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeExtend_BasicMsgRegistrator): void;
  get(): ShapeExtend_BasicMsgRegistrator;
}

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_1 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor();
  }

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_2 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor(thePtr: ShapeExtend_BasicMsgRegistrator);
  }

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_3 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor(theHandle: Handle_ShapeExtend_BasicMsgRegistrator);
  }

  export declare class Handle_ShapeExtend_BasicMsgRegistrator_4 extends Handle_ShapeExtend_BasicMsgRegistrator {
    constructor(theHandle: Handle_ShapeExtend_BasicMsgRegistrator);
  }

export declare class Handle_ShapeExtend_ComplexCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeExtend_ComplexCurve): void;
  get(): ShapeExtend_ComplexCurve;
}

  export declare class Handle_ShapeExtend_ComplexCurve_1 extends Handle_ShapeExtend_ComplexCurve {
    constructor();
  }

  export declare class Handle_ShapeExtend_ComplexCurve_2 extends Handle_ShapeExtend_ComplexCurve {
    constructor(thePtr: ShapeExtend_ComplexCurve);
  }

  export declare class Handle_ShapeExtend_ComplexCurve_3 extends Handle_ShapeExtend_ComplexCurve {
    constructor(theHandle: Handle_ShapeExtend_ComplexCurve);
  }

  export declare class Handle_ShapeExtend_ComplexCurve_4 extends Handle_ShapeExtend_ComplexCurve {
    constructor(theHandle: Handle_ShapeExtend_ComplexCurve);
  }

export declare class Handle_ShapeExtend_CompositeSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeExtend_CompositeSurface): void;
  get(): ShapeExtend_CompositeSurface;
}

  export declare class Handle_ShapeExtend_CompositeSurface_1 extends Handle_ShapeExtend_CompositeSurface {
    constructor();
  }

  export declare class Handle_ShapeExtend_CompositeSurface_2 extends Handle_ShapeExtend_CompositeSurface {
    constructor(thePtr: ShapeExtend_CompositeSurface);
  }

  export declare class Handle_ShapeExtend_CompositeSurface_3 extends Handle_ShapeExtend_CompositeSurface {
    constructor(theHandle: Handle_ShapeExtend_CompositeSurface);
  }

  export declare class Handle_ShapeExtend_CompositeSurface_4 extends Handle_ShapeExtend_CompositeSurface {
    constructor(theHandle: Handle_ShapeExtend_CompositeSurface);
  }

export declare class ShapeExtend_DataMapOfShapeListOfMsg extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: ShapeExtend_DataMapOfShapeListOfMsg): void;
  Assign(theOther: ShapeExtend_DataMapOfShapeListOfMsg): ShapeExtend_DataMapOfShapeListOfMsg;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: Message_ListOfMsg): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: Message_ListOfMsg): Message_ListOfMsg;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): Message_ListOfMsg;
  Find_1(theKey: TopoDS_Shape): Message_ListOfMsg;
  Find_2(theKey: TopoDS_Shape, theValue: Message_ListOfMsg): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): Message_ListOfMsg;
  ChangeFind(theKey: TopoDS_Shape): Message_ListOfMsg;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class ShapeExtend_DataMapOfShapeListOfMsg_1 extends ShapeExtend_DataMapOfShapeListOfMsg {
    constructor();
  }

  export declare class ShapeExtend_DataMapOfShapeListOfMsg_2 extends ShapeExtend_DataMapOfShapeListOfMsg {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class ShapeExtend_DataMapOfShapeListOfMsg_3 extends ShapeExtend_DataMapOfShapeListOfMsg {
    constructor(theOther: ShapeExtend_DataMapOfShapeListOfMsg);
  }

export declare class Handle_ShapeExtend_MsgRegistrator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeExtend_MsgRegistrator): void;
  get(): ShapeExtend_MsgRegistrator;
}

  export declare class Handle_ShapeExtend_MsgRegistrator_1 extends Handle_ShapeExtend_MsgRegistrator {
    constructor();
  }

  export declare class Handle_ShapeExtend_MsgRegistrator_2 extends Handle_ShapeExtend_MsgRegistrator {
    constructor(thePtr: ShapeExtend_MsgRegistrator);
  }

  export declare class Handle_ShapeExtend_MsgRegistrator_3 extends Handle_ShapeExtend_MsgRegistrator {
    constructor(theHandle: Handle_ShapeExtend_MsgRegistrator);
  }

  export declare class Handle_ShapeExtend_MsgRegistrator_4 extends Handle_ShapeExtend_MsgRegistrator {
    constructor(theHandle: Handle_ShapeExtend_MsgRegistrator);
  }

export declare class Handle_ShapeFix_Root {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Root): void;
  get(): ShapeFix_Root;
}

  export declare class Handle_ShapeFix_Root_1 extends Handle_ShapeFix_Root {
    constructor();
  }

  export declare class Handle_ShapeFix_Root_2 extends Handle_ShapeFix_Root {
    constructor(thePtr: ShapeFix_Root);
  }

  export declare class Handle_ShapeFix_Root_3 extends Handle_ShapeFix_Root {
    constructor(theHandle: Handle_ShapeFix_Root);
  }

  export declare class Handle_ShapeFix_Root_4 extends Handle_ShapeFix_Root {
    constructor(theHandle: Handle_ShapeFix_Root);
  }

export declare class ShapeFix_SequenceOfWireSegment extends NCollection_BaseSequence {
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
  Assign(theOther: ShapeFix_SequenceOfWireSegment): ShapeFix_SequenceOfWireSegment;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: ShapeFix_WireSegment): void;
  Append_2(theSeq: ShapeFix_SequenceOfWireSegment): void;
  Prepend_1(theItem: ShapeFix_WireSegment): void;
  Prepend_2(theSeq: ShapeFix_SequenceOfWireSegment): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: ShapeFix_WireSegment): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: ShapeFix_SequenceOfWireSegment): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: ShapeFix_SequenceOfWireSegment): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: ShapeFix_WireSegment): void;
  Split(theIndex: Standard_Integer, theSeq: ShapeFix_SequenceOfWireSegment): void;
  First(): ShapeFix_WireSegment;
  ChangeFirst(): ShapeFix_WireSegment;
  Last(): ShapeFix_WireSegment;
  ChangeLast(): ShapeFix_WireSegment;
  Value(theIndex: Standard_Integer): ShapeFix_WireSegment;
  ChangeValue(theIndex: Standard_Integer): ShapeFix_WireSegment;
  SetValue(theIndex: Standard_Integer, theItem: ShapeFix_WireSegment): void;
}

  export declare class ShapeFix_SequenceOfWireSegment_1 extends ShapeFix_SequenceOfWireSegment {
    constructor();
  }

  export declare class ShapeFix_SequenceOfWireSegment_2 extends ShapeFix_SequenceOfWireSegment {
    constructor(theAllocator: any);
  }

  export declare class ShapeFix_SequenceOfWireSegment_3 extends ShapeFix_SequenceOfWireSegment {
    constructor(theOther: ShapeFix_SequenceOfWireSegment);
  }

export declare class Handle_ShapeFix_ComposeShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_ComposeShell): void;
  get(): ShapeFix_ComposeShell;
}

  export declare class Handle_ShapeFix_ComposeShell_1 extends Handle_ShapeFix_ComposeShell {
    constructor();
  }

  export declare class Handle_ShapeFix_ComposeShell_2 extends Handle_ShapeFix_ComposeShell {
    constructor(thePtr: ShapeFix_ComposeShell);
  }

  export declare class Handle_ShapeFix_ComposeShell_3 extends Handle_ShapeFix_ComposeShell {
    constructor(theHandle: Handle_ShapeFix_ComposeShell);
  }

  export declare class Handle_ShapeFix_ComposeShell_4 extends Handle_ShapeFix_ComposeShell {
    constructor(theHandle: Handle_ShapeFix_ComposeShell);
  }

export declare class ShapeFix_DataMapOfShapeBox2d extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: ShapeFix_DataMapOfShapeBox2d): void;
  Assign(theOther: ShapeFix_DataMapOfShapeBox2d): ShapeFix_DataMapOfShapeBox2d;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: Bnd_Box2d): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: Bnd_Box2d): Bnd_Box2d;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): Bnd_Box2d;
  Find_1(theKey: TopoDS_Shape): Bnd_Box2d;
  Find_2(theKey: TopoDS_Shape, theValue: Bnd_Box2d): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): Bnd_Box2d;
  ChangeFind(theKey: TopoDS_Shape): Bnd_Box2d;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class ShapeFix_DataMapOfShapeBox2d_1 extends ShapeFix_DataMapOfShapeBox2d {
    constructor();
  }

  export declare class ShapeFix_DataMapOfShapeBox2d_2 extends ShapeFix_DataMapOfShapeBox2d {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class ShapeFix_DataMapOfShapeBox2d_3 extends ShapeFix_DataMapOfShapeBox2d {
    constructor(theOther: ShapeFix_DataMapOfShapeBox2d);
  }

export declare class Handle_ShapeFix_Edge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Edge): void;
  get(): ShapeFix_Edge;
}

  export declare class Handle_ShapeFix_Edge_1 extends Handle_ShapeFix_Edge {
    constructor();
  }

  export declare class Handle_ShapeFix_Edge_2 extends Handle_ShapeFix_Edge {
    constructor(thePtr: ShapeFix_Edge);
  }

  export declare class Handle_ShapeFix_Edge_3 extends Handle_ShapeFix_Edge {
    constructor(theHandle: Handle_ShapeFix_Edge);
  }

  export declare class Handle_ShapeFix_Edge_4 extends Handle_ShapeFix_Edge {
    constructor(theHandle: Handle_ShapeFix_Edge);
  }

export declare class Handle_ShapeFix_EdgeProjAux {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_EdgeProjAux): void;
  get(): ShapeFix_EdgeProjAux;
}

  export declare class Handle_ShapeFix_EdgeProjAux_1 extends Handle_ShapeFix_EdgeProjAux {
    constructor();
  }

  export declare class Handle_ShapeFix_EdgeProjAux_2 extends Handle_ShapeFix_EdgeProjAux {
    constructor(thePtr: ShapeFix_EdgeProjAux);
  }

  export declare class Handle_ShapeFix_EdgeProjAux_3 extends Handle_ShapeFix_EdgeProjAux {
    constructor(theHandle: Handle_ShapeFix_EdgeProjAux);
  }

  export declare class Handle_ShapeFix_EdgeProjAux_4 extends Handle_ShapeFix_EdgeProjAux {
    constructor(theHandle: Handle_ShapeFix_EdgeProjAux);
  }

export declare class Handle_ShapeFix_Face {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Face): void;
  get(): ShapeFix_Face;
}

  export declare class Handle_ShapeFix_Face_1 extends Handle_ShapeFix_Face {
    constructor();
  }

  export declare class Handle_ShapeFix_Face_2 extends Handle_ShapeFix_Face {
    constructor(thePtr: ShapeFix_Face);
  }

  export declare class Handle_ShapeFix_Face_3 extends Handle_ShapeFix_Face {
    constructor(theHandle: Handle_ShapeFix_Face);
  }

  export declare class Handle_ShapeFix_Face_4 extends Handle_ShapeFix_Face {
    constructor(theHandle: Handle_ShapeFix_Face);
  }

export declare class Handle_ShapeFix_FixSmallFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_FixSmallFace): void;
  get(): ShapeFix_FixSmallFace;
}

  export declare class Handle_ShapeFix_FixSmallFace_1 extends Handle_ShapeFix_FixSmallFace {
    constructor();
  }

  export declare class Handle_ShapeFix_FixSmallFace_2 extends Handle_ShapeFix_FixSmallFace {
    constructor(thePtr: ShapeFix_FixSmallFace);
  }

  export declare class Handle_ShapeFix_FixSmallFace_3 extends Handle_ShapeFix_FixSmallFace {
    constructor(theHandle: Handle_ShapeFix_FixSmallFace);
  }

  export declare class Handle_ShapeFix_FixSmallFace_4 extends Handle_ShapeFix_FixSmallFace {
    constructor(theHandle: Handle_ShapeFix_FixSmallFace);
  }

export declare class Handle_ShapeFix_FixSmallSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_FixSmallSolid): void;
  get(): ShapeFix_FixSmallSolid;
}

  export declare class Handle_ShapeFix_FixSmallSolid_1 extends Handle_ShapeFix_FixSmallSolid {
    constructor();
  }

  export declare class Handle_ShapeFix_FixSmallSolid_2 extends Handle_ShapeFix_FixSmallSolid {
    constructor(thePtr: ShapeFix_FixSmallSolid);
  }

  export declare class Handle_ShapeFix_FixSmallSolid_3 extends Handle_ShapeFix_FixSmallSolid {
    constructor(theHandle: Handle_ShapeFix_FixSmallSolid);
  }

  export declare class Handle_ShapeFix_FixSmallSolid_4 extends Handle_ShapeFix_FixSmallSolid {
    constructor(theHandle: Handle_ShapeFix_FixSmallSolid);
  }

export declare class Handle_ShapeFix_Shape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Shape): void;
  get(): ShapeFix_Shape;
}

  export declare class Handle_ShapeFix_Shape_1 extends Handle_ShapeFix_Shape {
    constructor();
  }

  export declare class Handle_ShapeFix_Shape_2 extends Handle_ShapeFix_Shape {
    constructor(thePtr: ShapeFix_Shape);
  }

  export declare class Handle_ShapeFix_Shape_3 extends Handle_ShapeFix_Shape {
    constructor(theHandle: Handle_ShapeFix_Shape);
  }

  export declare class Handle_ShapeFix_Shape_4 extends Handle_ShapeFix_Shape {
    constructor(theHandle: Handle_ShapeFix_Shape);
  }

export declare class Handle_ShapeFix_Solid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Solid): void;
  get(): ShapeFix_Solid;
}

  export declare class Handle_ShapeFix_Solid_1 extends Handle_ShapeFix_Solid {
    constructor();
  }

  export declare class Handle_ShapeFix_Solid_2 extends Handle_ShapeFix_Solid {
    constructor(thePtr: ShapeFix_Solid);
  }

  export declare class Handle_ShapeFix_Solid_3 extends Handle_ShapeFix_Solid {
    constructor(theHandle: Handle_ShapeFix_Solid);
  }

  export declare class Handle_ShapeFix_Solid_4 extends Handle_ShapeFix_Solid {
    constructor(theHandle: Handle_ShapeFix_Solid);
  }

export declare class Handle_ShapeFix_Shell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Shell): void;
  get(): ShapeFix_Shell;
}

  export declare class Handle_ShapeFix_Shell_1 extends Handle_ShapeFix_Shell {
    constructor();
  }

  export declare class Handle_ShapeFix_Shell_2 extends Handle_ShapeFix_Shell {
    constructor(thePtr: ShapeFix_Shell);
  }

  export declare class Handle_ShapeFix_Shell_3 extends Handle_ShapeFix_Shell {
    constructor(theHandle: Handle_ShapeFix_Shell);
  }

  export declare class Handle_ShapeFix_Shell_4 extends Handle_ShapeFix_Shell {
    constructor(theHandle: Handle_ShapeFix_Shell);
  }

export declare class Handle_ShapeFix_Wire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Wire): void;
  get(): ShapeFix_Wire;
}

  export declare class Handle_ShapeFix_Wire_1 extends Handle_ShapeFix_Wire {
    constructor();
  }

  export declare class Handle_ShapeFix_Wire_2 extends Handle_ShapeFix_Wire {
    constructor(thePtr: ShapeFix_Wire);
  }

  export declare class Handle_ShapeFix_Wire_3 extends Handle_ShapeFix_Wire {
    constructor(theHandle: Handle_ShapeFix_Wire);
  }

  export declare class Handle_ShapeFix_Wire_4 extends Handle_ShapeFix_Wire {
    constructor(theHandle: Handle_ShapeFix_Wire);
  }

export declare class Handle_ShapeFix_SplitCommonVertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_SplitCommonVertex): void;
  get(): ShapeFix_SplitCommonVertex;
}

  export declare class Handle_ShapeFix_SplitCommonVertex_1 extends Handle_ShapeFix_SplitCommonVertex {
    constructor();
  }

  export declare class Handle_ShapeFix_SplitCommonVertex_2 extends Handle_ShapeFix_SplitCommonVertex {
    constructor(thePtr: ShapeFix_SplitCommonVertex);
  }

  export declare class Handle_ShapeFix_SplitCommonVertex_3 extends Handle_ShapeFix_SplitCommonVertex {
    constructor(theHandle: Handle_ShapeFix_SplitCommonVertex);
  }

  export declare class Handle_ShapeFix_SplitCommonVertex_4 extends Handle_ShapeFix_SplitCommonVertex {
    constructor(theHandle: Handle_ShapeFix_SplitCommonVertex);
  }

export declare class Handle_ShapeFix_Wireframe {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Wireframe): void;
  get(): ShapeFix_Wireframe;
}

  export declare class Handle_ShapeFix_Wireframe_1 extends Handle_ShapeFix_Wireframe {
    constructor();
  }

  export declare class Handle_ShapeFix_Wireframe_2 extends Handle_ShapeFix_Wireframe {
    constructor(thePtr: ShapeFix_Wireframe);
  }

  export declare class Handle_ShapeFix_Wireframe_3 extends Handle_ShapeFix_Wireframe {
    constructor(theHandle: Handle_ShapeFix_Wireframe);
  }

  export declare class Handle_ShapeFix_Wireframe_4 extends Handle_ShapeFix_Wireframe {
    constructor(theHandle: Handle_ShapeFix_Wireframe);
  }

export declare class Handle_ShapeProcess_Context {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeProcess_Context): void;
  get(): ShapeProcess_Context;
}

  export declare class Handle_ShapeProcess_Context_1 extends Handle_ShapeProcess_Context {
    constructor();
  }

  export declare class Handle_ShapeProcess_Context_2 extends Handle_ShapeProcess_Context {
    constructor(thePtr: ShapeProcess_Context);
  }

  export declare class Handle_ShapeProcess_Context_3 extends Handle_ShapeProcess_Context {
    constructor(theHandle: Handle_ShapeProcess_Context);
  }

  export declare class Handle_ShapeProcess_Context_4 extends Handle_ShapeProcess_Context {
    constructor(theHandle: Handle_ShapeProcess_Context);
  }

export declare class Handle_ShapeProcess_Operator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeProcess_Operator): void;
  get(): ShapeProcess_Operator;
}

  export declare class Handle_ShapeProcess_Operator_1 extends Handle_ShapeProcess_Operator {
    constructor();
  }

  export declare class Handle_ShapeProcess_Operator_2 extends Handle_ShapeProcess_Operator {
    constructor(thePtr: ShapeProcess_Operator);
  }

  export declare class Handle_ShapeProcess_Operator_3 extends Handle_ShapeProcess_Operator {
    constructor(theHandle: Handle_ShapeProcess_Operator);
  }

  export declare class Handle_ShapeProcess_Operator_4 extends Handle_ShapeProcess_Operator {
    constructor(theHandle: Handle_ShapeProcess_Operator);
  }

export declare class Handle_ShapeProcess_ShapeContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeProcess_ShapeContext): void;
  get(): ShapeProcess_ShapeContext;
}

  export declare class Handle_ShapeProcess_ShapeContext_1 extends Handle_ShapeProcess_ShapeContext {
    constructor();
  }

  export declare class Handle_ShapeProcess_ShapeContext_2 extends Handle_ShapeProcess_ShapeContext {
    constructor(thePtr: ShapeProcess_ShapeContext);
  }

  export declare class Handle_ShapeProcess_ShapeContext_3 extends Handle_ShapeProcess_ShapeContext {
    constructor(theHandle: Handle_ShapeProcess_ShapeContext);
  }

  export declare class Handle_ShapeProcess_ShapeContext_4 extends Handle_ShapeProcess_ShapeContext {
    constructor(theHandle: Handle_ShapeProcess_ShapeContext);
  }

export declare class Handle_ShapeProcess_UOperator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeProcess_UOperator): void;
  get(): ShapeProcess_UOperator;
}

  export declare class Handle_ShapeProcess_UOperator_1 extends Handle_ShapeProcess_UOperator {
    constructor();
  }

  export declare class Handle_ShapeProcess_UOperator_2 extends Handle_ShapeProcess_UOperator {
    constructor(thePtr: ShapeProcess_UOperator);
  }

  export declare class Handle_ShapeProcess_UOperator_3 extends Handle_ShapeProcess_UOperator {
    constructor(theHandle: Handle_ShapeProcess_UOperator);
  }

  export declare class Handle_ShapeProcess_UOperator_4 extends Handle_ShapeProcess_UOperator {
    constructor(theHandle: Handle_ShapeProcess_UOperator);
  }

export declare class Handle_ShapeUpgrade_Tool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_Tool): void;
  get(): ShapeUpgrade_Tool;
}

  export declare class Handle_ShapeUpgrade_Tool_1 extends Handle_ShapeUpgrade_Tool {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_Tool_2 extends Handle_ShapeUpgrade_Tool {
    constructor(thePtr: ShapeUpgrade_Tool);
  }

  export declare class Handle_ShapeUpgrade_Tool_3 extends Handle_ShapeUpgrade_Tool {
    constructor(theHandle: Handle_ShapeUpgrade_Tool);
  }

  export declare class Handle_ShapeUpgrade_Tool_4 extends Handle_ShapeUpgrade_Tool {
    constructor(theHandle: Handle_ShapeUpgrade_Tool);
  }

export declare class Handle_ShapeUpgrade_EdgeDivide {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_EdgeDivide): void;
  get(): ShapeUpgrade_EdgeDivide;
}

  export declare class Handle_ShapeUpgrade_EdgeDivide_1 extends Handle_ShapeUpgrade_EdgeDivide {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_EdgeDivide_2 extends Handle_ShapeUpgrade_EdgeDivide {
    constructor(thePtr: ShapeUpgrade_EdgeDivide);
  }

  export declare class Handle_ShapeUpgrade_EdgeDivide_3 extends Handle_ShapeUpgrade_EdgeDivide {
    constructor(theHandle: Handle_ShapeUpgrade_EdgeDivide);
  }

  export declare class Handle_ShapeUpgrade_EdgeDivide_4 extends Handle_ShapeUpgrade_EdgeDivide {
    constructor(theHandle: Handle_ShapeUpgrade_EdgeDivide);
  }

export declare class Handle_ShapeUpgrade_ClosedEdgeDivide {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_ClosedEdgeDivide): void;
  get(): ShapeUpgrade_ClosedEdgeDivide;
}

  export declare class Handle_ShapeUpgrade_ClosedEdgeDivide_1 extends Handle_ShapeUpgrade_ClosedEdgeDivide {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_ClosedEdgeDivide_2 extends Handle_ShapeUpgrade_ClosedEdgeDivide {
    constructor(thePtr: ShapeUpgrade_ClosedEdgeDivide);
  }

  export declare class Handle_ShapeUpgrade_ClosedEdgeDivide_3 extends Handle_ShapeUpgrade_ClosedEdgeDivide {
    constructor(theHandle: Handle_ShapeUpgrade_ClosedEdgeDivide);
  }

  export declare class Handle_ShapeUpgrade_ClosedEdgeDivide_4 extends Handle_ShapeUpgrade_ClosedEdgeDivide {
    constructor(theHandle: Handle_ShapeUpgrade_ClosedEdgeDivide);
  }

export declare class Handle_ShapeUpgrade_FaceDivide {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_FaceDivide): void;
  get(): ShapeUpgrade_FaceDivide;
}

  export declare class Handle_ShapeUpgrade_FaceDivide_1 extends Handle_ShapeUpgrade_FaceDivide {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_FaceDivide_2 extends Handle_ShapeUpgrade_FaceDivide {
    constructor(thePtr: ShapeUpgrade_FaceDivide);
  }

  export declare class Handle_ShapeUpgrade_FaceDivide_3 extends Handle_ShapeUpgrade_FaceDivide {
    constructor(theHandle: Handle_ShapeUpgrade_FaceDivide);
  }

  export declare class Handle_ShapeUpgrade_FaceDivide_4 extends Handle_ShapeUpgrade_FaceDivide {
    constructor(theHandle: Handle_ShapeUpgrade_FaceDivide);
  }

export declare class Handle_ShapeUpgrade_ClosedFaceDivide {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_ClosedFaceDivide): void;
  get(): ShapeUpgrade_ClosedFaceDivide;
}

  export declare class Handle_ShapeUpgrade_ClosedFaceDivide_1 extends Handle_ShapeUpgrade_ClosedFaceDivide {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_ClosedFaceDivide_2 extends Handle_ShapeUpgrade_ClosedFaceDivide {
    constructor(thePtr: ShapeUpgrade_ClosedFaceDivide);
  }

  export declare class Handle_ShapeUpgrade_ClosedFaceDivide_3 extends Handle_ShapeUpgrade_ClosedFaceDivide {
    constructor(theHandle: Handle_ShapeUpgrade_ClosedFaceDivide);
  }

  export declare class Handle_ShapeUpgrade_ClosedFaceDivide_4 extends Handle_ShapeUpgrade_ClosedFaceDivide {
    constructor(theHandle: Handle_ShapeUpgrade_ClosedFaceDivide);
  }

export declare class Handle_ShapeUpgrade_SplitCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitCurve): void;
  get(): ShapeUpgrade_SplitCurve;
}

  export declare class Handle_ShapeUpgrade_SplitCurve_1 extends Handle_ShapeUpgrade_SplitCurve {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitCurve_2 extends Handle_ShapeUpgrade_SplitCurve {
    constructor(thePtr: ShapeUpgrade_SplitCurve);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve_3 extends Handle_ShapeUpgrade_SplitCurve {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve_4 extends Handle_ShapeUpgrade_SplitCurve {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve);
  }

export declare class Handle_ShapeUpgrade_SplitCurve2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitCurve2d): void;
  get(): ShapeUpgrade_SplitCurve2d;
}

  export declare class Handle_ShapeUpgrade_SplitCurve2d_1 extends Handle_ShapeUpgrade_SplitCurve2d {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitCurve2d_2 extends Handle_ShapeUpgrade_SplitCurve2d {
    constructor(thePtr: ShapeUpgrade_SplitCurve2d);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve2d_3 extends Handle_ShapeUpgrade_SplitCurve2d {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve2d);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve2d_4 extends Handle_ShapeUpgrade_SplitCurve2d {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve2d);
  }

export declare class Handle_ShapeUpgrade_ConvertCurve2dToBezier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_ConvertCurve2dToBezier): void;
  get(): ShapeUpgrade_ConvertCurve2dToBezier;
}

  export declare class Handle_ShapeUpgrade_ConvertCurve2dToBezier_1 extends Handle_ShapeUpgrade_ConvertCurve2dToBezier {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_ConvertCurve2dToBezier_2 extends Handle_ShapeUpgrade_ConvertCurve2dToBezier {
    constructor(thePtr: ShapeUpgrade_ConvertCurve2dToBezier);
  }

  export declare class Handle_ShapeUpgrade_ConvertCurve2dToBezier_3 extends Handle_ShapeUpgrade_ConvertCurve2dToBezier {
    constructor(theHandle: Handle_ShapeUpgrade_ConvertCurve2dToBezier);
  }

  export declare class Handle_ShapeUpgrade_ConvertCurve2dToBezier_4 extends Handle_ShapeUpgrade_ConvertCurve2dToBezier {
    constructor(theHandle: Handle_ShapeUpgrade_ConvertCurve2dToBezier);
  }

export declare class Handle_ShapeUpgrade_SplitCurve3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitCurve3d): void;
  get(): ShapeUpgrade_SplitCurve3d;
}

  export declare class Handle_ShapeUpgrade_SplitCurve3d_1 extends Handle_ShapeUpgrade_SplitCurve3d {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitCurve3d_2 extends Handle_ShapeUpgrade_SplitCurve3d {
    constructor(thePtr: ShapeUpgrade_SplitCurve3d);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve3d_3 extends Handle_ShapeUpgrade_SplitCurve3d {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve3d);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve3d_4 extends Handle_ShapeUpgrade_SplitCurve3d {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve3d);
  }

export declare class Handle_ShapeUpgrade_ConvertCurve3dToBezier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_ConvertCurve3dToBezier): void;
  get(): ShapeUpgrade_ConvertCurve3dToBezier;
}

  export declare class Handle_ShapeUpgrade_ConvertCurve3dToBezier_1 extends Handle_ShapeUpgrade_ConvertCurve3dToBezier {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_ConvertCurve3dToBezier_2 extends Handle_ShapeUpgrade_ConvertCurve3dToBezier {
    constructor(thePtr: ShapeUpgrade_ConvertCurve3dToBezier);
  }

  export declare class Handle_ShapeUpgrade_ConvertCurve3dToBezier_3 extends Handle_ShapeUpgrade_ConvertCurve3dToBezier {
    constructor(theHandle: Handle_ShapeUpgrade_ConvertCurve3dToBezier);
  }

  export declare class Handle_ShapeUpgrade_ConvertCurve3dToBezier_4 extends Handle_ShapeUpgrade_ConvertCurve3dToBezier {
    constructor(theHandle: Handle_ShapeUpgrade_ConvertCurve3dToBezier);
  }

export declare class Handle_ShapeUpgrade_SplitSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitSurface): void;
  get(): ShapeUpgrade_SplitSurface;
}

  export declare class Handle_ShapeUpgrade_SplitSurface_1 extends Handle_ShapeUpgrade_SplitSurface {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitSurface_2 extends Handle_ShapeUpgrade_SplitSurface {
    constructor(thePtr: ShapeUpgrade_SplitSurface);
  }

  export declare class Handle_ShapeUpgrade_SplitSurface_3 extends Handle_ShapeUpgrade_SplitSurface {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurface);
  }

  export declare class Handle_ShapeUpgrade_SplitSurface_4 extends Handle_ShapeUpgrade_SplitSurface {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurface);
  }

export declare class Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_ConvertSurfaceToBezierBasis): void;
  get(): ShapeUpgrade_ConvertSurfaceToBezierBasis;
}

  export declare class Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_1 extends Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_2 extends Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis {
    constructor(thePtr: ShapeUpgrade_ConvertSurfaceToBezierBasis);
  }

  export declare class Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_3 extends Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis {
    constructor(theHandle: Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis);
  }

  export declare class Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_4 extends Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis {
    constructor(theHandle: Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis);
  }

export declare class Handle_ShapeUpgrade_FaceDivideArea {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_FaceDivideArea): void;
  get(): ShapeUpgrade_FaceDivideArea;
}

  export declare class Handle_ShapeUpgrade_FaceDivideArea_1 extends Handle_ShapeUpgrade_FaceDivideArea {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_FaceDivideArea_2 extends Handle_ShapeUpgrade_FaceDivideArea {
    constructor(thePtr: ShapeUpgrade_FaceDivideArea);
  }

  export declare class Handle_ShapeUpgrade_FaceDivideArea_3 extends Handle_ShapeUpgrade_FaceDivideArea {
    constructor(theHandle: Handle_ShapeUpgrade_FaceDivideArea);
  }

  export declare class Handle_ShapeUpgrade_FaceDivideArea_4 extends Handle_ShapeUpgrade_FaceDivideArea {
    constructor(theHandle: Handle_ShapeUpgrade_FaceDivideArea);
  }

export declare class Handle_ShapeUpgrade_FixSmallCurves {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_FixSmallCurves): void;
  get(): ShapeUpgrade_FixSmallCurves;
}

  export declare class Handle_ShapeUpgrade_FixSmallCurves_1 extends Handle_ShapeUpgrade_FixSmallCurves {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_FixSmallCurves_2 extends Handle_ShapeUpgrade_FixSmallCurves {
    constructor(thePtr: ShapeUpgrade_FixSmallCurves);
  }

  export declare class Handle_ShapeUpgrade_FixSmallCurves_3 extends Handle_ShapeUpgrade_FixSmallCurves {
    constructor(theHandle: Handle_ShapeUpgrade_FixSmallCurves);
  }

  export declare class Handle_ShapeUpgrade_FixSmallCurves_4 extends Handle_ShapeUpgrade_FixSmallCurves {
    constructor(theHandle: Handle_ShapeUpgrade_FixSmallCurves);
  }

export declare class Handle_ShapeUpgrade_FixSmallBezierCurves {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_FixSmallBezierCurves): void;
  get(): ShapeUpgrade_FixSmallBezierCurves;
}

  export declare class Handle_ShapeUpgrade_FixSmallBezierCurves_1 extends Handle_ShapeUpgrade_FixSmallBezierCurves {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_FixSmallBezierCurves_2 extends Handle_ShapeUpgrade_FixSmallBezierCurves {
    constructor(thePtr: ShapeUpgrade_FixSmallBezierCurves);
  }

  export declare class Handle_ShapeUpgrade_FixSmallBezierCurves_3 extends Handle_ShapeUpgrade_FixSmallBezierCurves {
    constructor(theHandle: Handle_ShapeUpgrade_FixSmallBezierCurves);
  }

  export declare class Handle_ShapeUpgrade_FixSmallBezierCurves_4 extends Handle_ShapeUpgrade_FixSmallBezierCurves {
    constructor(theHandle: Handle_ShapeUpgrade_FixSmallBezierCurves);
  }

export declare class Handle_ShapeUpgrade_RemoveInternalWires {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_RemoveInternalWires): void;
  get(): ShapeUpgrade_RemoveInternalWires;
}

  export declare class Handle_ShapeUpgrade_RemoveInternalWires_1 extends Handle_ShapeUpgrade_RemoveInternalWires {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_RemoveInternalWires_2 extends Handle_ShapeUpgrade_RemoveInternalWires {
    constructor(thePtr: ShapeUpgrade_RemoveInternalWires);
  }

  export declare class Handle_ShapeUpgrade_RemoveInternalWires_3 extends Handle_ShapeUpgrade_RemoveInternalWires {
    constructor(theHandle: Handle_ShapeUpgrade_RemoveInternalWires);
  }

  export declare class Handle_ShapeUpgrade_RemoveInternalWires_4 extends Handle_ShapeUpgrade_RemoveInternalWires {
    constructor(theHandle: Handle_ShapeUpgrade_RemoveInternalWires);
  }

export declare class Handle_ShapeUpgrade_RemoveLocations {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_RemoveLocations): void;
  get(): ShapeUpgrade_RemoveLocations;
}

  export declare class Handle_ShapeUpgrade_RemoveLocations_1 extends Handle_ShapeUpgrade_RemoveLocations {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_RemoveLocations_2 extends Handle_ShapeUpgrade_RemoveLocations {
    constructor(thePtr: ShapeUpgrade_RemoveLocations);
  }

  export declare class Handle_ShapeUpgrade_RemoveLocations_3 extends Handle_ShapeUpgrade_RemoveLocations {
    constructor(theHandle: Handle_ShapeUpgrade_RemoveLocations);
  }

  export declare class Handle_ShapeUpgrade_RemoveLocations_4 extends Handle_ShapeUpgrade_RemoveLocations {
    constructor(theHandle: Handle_ShapeUpgrade_RemoveLocations);
  }

export declare class Handle_ShapeUpgrade_SplitCurve2dContinuity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitCurve2dContinuity): void;
  get(): ShapeUpgrade_SplitCurve2dContinuity;
}

  export declare class Handle_ShapeUpgrade_SplitCurve2dContinuity_1 extends Handle_ShapeUpgrade_SplitCurve2dContinuity {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitCurve2dContinuity_2 extends Handle_ShapeUpgrade_SplitCurve2dContinuity {
    constructor(thePtr: ShapeUpgrade_SplitCurve2dContinuity);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve2dContinuity_3 extends Handle_ShapeUpgrade_SplitCurve2dContinuity {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve2dContinuity);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve2dContinuity_4 extends Handle_ShapeUpgrade_SplitCurve2dContinuity {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve2dContinuity);
  }

export declare class Handle_ShapeUpgrade_SplitCurve3dContinuity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitCurve3dContinuity): void;
  get(): ShapeUpgrade_SplitCurve3dContinuity;
}

  export declare class Handle_ShapeUpgrade_SplitCurve3dContinuity_1 extends Handle_ShapeUpgrade_SplitCurve3dContinuity {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitCurve3dContinuity_2 extends Handle_ShapeUpgrade_SplitCurve3dContinuity {
    constructor(thePtr: ShapeUpgrade_SplitCurve3dContinuity);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve3dContinuity_3 extends Handle_ShapeUpgrade_SplitCurve3dContinuity {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve3dContinuity);
  }

  export declare class Handle_ShapeUpgrade_SplitCurve3dContinuity_4 extends Handle_ShapeUpgrade_SplitCurve3dContinuity {
    constructor(theHandle: Handle_ShapeUpgrade_SplitCurve3dContinuity);
  }

export declare class Handle_ShapeUpgrade_SplitSurfaceAngle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitSurfaceAngle): void;
  get(): ShapeUpgrade_SplitSurfaceAngle;
}

  export declare class Handle_ShapeUpgrade_SplitSurfaceAngle_1 extends Handle_ShapeUpgrade_SplitSurfaceAngle {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceAngle_2 extends Handle_ShapeUpgrade_SplitSurfaceAngle {
    constructor(thePtr: ShapeUpgrade_SplitSurfaceAngle);
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceAngle_3 extends Handle_ShapeUpgrade_SplitSurfaceAngle {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurfaceAngle);
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceAngle_4 extends Handle_ShapeUpgrade_SplitSurfaceAngle {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurfaceAngle);
  }

export declare class Handle_ShapeUpgrade_SplitSurfaceArea {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitSurfaceArea): void;
  get(): ShapeUpgrade_SplitSurfaceArea;
}

  export declare class Handle_ShapeUpgrade_SplitSurfaceArea_1 extends Handle_ShapeUpgrade_SplitSurfaceArea {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceArea_2 extends Handle_ShapeUpgrade_SplitSurfaceArea {
    constructor(thePtr: ShapeUpgrade_SplitSurfaceArea);
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceArea_3 extends Handle_ShapeUpgrade_SplitSurfaceArea {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurfaceArea);
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceArea_4 extends Handle_ShapeUpgrade_SplitSurfaceArea {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurfaceArea);
  }

export declare class Handle_ShapeUpgrade_SplitSurfaceContinuity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_SplitSurfaceContinuity): void;
  get(): ShapeUpgrade_SplitSurfaceContinuity;
}

  export declare class Handle_ShapeUpgrade_SplitSurfaceContinuity_1 extends Handle_ShapeUpgrade_SplitSurfaceContinuity {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceContinuity_2 extends Handle_ShapeUpgrade_SplitSurfaceContinuity {
    constructor(thePtr: ShapeUpgrade_SplitSurfaceContinuity);
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceContinuity_3 extends Handle_ShapeUpgrade_SplitSurfaceContinuity {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurfaceContinuity);
  }

  export declare class Handle_ShapeUpgrade_SplitSurfaceContinuity_4 extends Handle_ShapeUpgrade_SplitSurfaceContinuity {
    constructor(theHandle: Handle_ShapeUpgrade_SplitSurfaceContinuity);
  }

export declare class Handle_ShapeUpgrade_UnifySameDomain {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_UnifySameDomain): void;
  get(): ShapeUpgrade_UnifySameDomain;
}

  export declare class Handle_ShapeUpgrade_UnifySameDomain_1 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_UnifySameDomain_2 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor(thePtr: ShapeUpgrade_UnifySameDomain);
  }

  export declare class Handle_ShapeUpgrade_UnifySameDomain_3 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor(theHandle: Handle_ShapeUpgrade_UnifySameDomain);
  }

  export declare class Handle_ShapeUpgrade_UnifySameDomain_4 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor(theHandle: Handle_ShapeUpgrade_UnifySameDomain);
  }

export declare class Handle_ShapeUpgrade_WireDivide {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_WireDivide): void;
  get(): ShapeUpgrade_WireDivide;
}

  export declare class Handle_ShapeUpgrade_WireDivide_1 extends Handle_ShapeUpgrade_WireDivide {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_WireDivide_2 extends Handle_ShapeUpgrade_WireDivide {
    constructor(thePtr: ShapeUpgrade_WireDivide);
  }

  export declare class Handle_ShapeUpgrade_WireDivide_3 extends Handle_ShapeUpgrade_WireDivide {
    constructor(theHandle: Handle_ShapeUpgrade_WireDivide);
  }

  export declare class Handle_ShapeUpgrade_WireDivide_4 extends Handle_ShapeUpgrade_WireDivide {
    constructor(theHandle: Handle_ShapeUpgrade_WireDivide);
  }

export declare type ShapeExtend_Status = {
  ShapeExtend_OK: {};
  ShapeExtend_DONE1: {};
  ShapeExtend_DONE2: {};
  ShapeExtend_DONE3: {};
  ShapeExtend_DONE4: {};
  ShapeExtend_DONE5: {};
  ShapeExtend_DONE6: {};
  ShapeExtend_DONE7: {};
  ShapeExtend_DONE8: {};
  ShapeExtend_DONE: {};
  ShapeExtend_FAIL1: {};
  ShapeExtend_FAIL2: {};
  ShapeExtend_FAIL3: {};
  ShapeExtend_FAIL4: {};
  ShapeExtend_FAIL5: {};
  ShapeExtend_FAIL6: {};
  ShapeExtend_FAIL7: {};
  ShapeExtend_FAIL8: {};
  ShapeExtend_FAIL: {};
}

export declare type ShapeExtend_Parametrisation = {
  ShapeExtend_Natural: {};
  ShapeExtend_Uniform: {};
  ShapeExtend_Unitary: {};
}

export declare type TKShHealingLib = {
  ShapeBuild_ReShape: typeof ShapeBuild_ReShape;
  ShapeAlgo_AlgoContainer: typeof ShapeAlgo_AlgoContainer;
  ShapeAlgo_ToolContainer: typeof ShapeAlgo_ToolContainer;
  ShapeAnalysis_BoxBndTreeSelector: typeof ShapeAnalysis_BoxBndTreeSelector;
  ShapeAnalysis_CheckSmallFace: typeof ShapeAnalysis_CheckSmallFace;
  ShapeAnalysis_Edge: typeof ShapeAnalysis_Edge;
  ShapeAnalysis_FreeBoundData_1: typeof ShapeAnalysis_FreeBoundData_1;
  ShapeAnalysis_FreeBoundData_2: typeof ShapeAnalysis_FreeBoundData_2;
  ShapeAnalysis_FreeBounds_1: typeof ShapeAnalysis_FreeBounds_1;
  ShapeAnalysis_FreeBounds_2: typeof ShapeAnalysis_FreeBounds_2;
  ShapeAnalysis_FreeBounds_3: typeof ShapeAnalysis_FreeBounds_3;
  ShapeAnalysis_FreeBoundsProperties_1: typeof ShapeAnalysis_FreeBoundsProperties_1;
  ShapeAnalysis_FreeBoundsProperties_2: typeof ShapeAnalysis_FreeBoundsProperties_2;
  ShapeAnalysis_FreeBoundsProperties_3: typeof ShapeAnalysis_FreeBoundsProperties_3;
  ShapeAnalysis_ShapeContents: typeof ShapeAnalysis_ShapeContents;
  ShapeAnalysis_ShapeTolerance: typeof ShapeAnalysis_ShapeTolerance;
  ShapeAnalysis_Shell: typeof ShapeAnalysis_Shell;
  ShapeAnalysis_Surface: typeof ShapeAnalysis_Surface;
  ShapeAnalysis_TransferParameters_1: typeof ShapeAnalysis_TransferParameters_1;
  ShapeAnalysis_TransferParameters_2: typeof ShapeAnalysis_TransferParameters_2;
  ShapeAnalysis_TransferParametersProj_1: typeof ShapeAnalysis_TransferParametersProj_1;
  ShapeAnalysis_TransferParametersProj_2: typeof ShapeAnalysis_TransferParametersProj_2;
  ShapeAnalysis_Wire_1: typeof ShapeAnalysis_Wire_1;
  ShapeAnalysis_Wire_2: typeof ShapeAnalysis_Wire_2;
  ShapeAnalysis_Wire_3: typeof ShapeAnalysis_Wire_3;
  ShapeExtend_WireData_1: typeof ShapeExtend_WireData_1;
  ShapeExtend_WireData_2: typeof ShapeExtend_WireData_2;
  ShapeAnalysis_WireOrder_1: typeof ShapeAnalysis_WireOrder_1;
  ShapeAnalysis_WireOrder_2: typeof ShapeAnalysis_WireOrder_2;
  ShapeAnalysis_WireVertex: typeof ShapeAnalysis_WireVertex;
  ShapeConstruct_MakeTriangulation_1: typeof ShapeConstruct_MakeTriangulation_1;
  ShapeConstruct_MakeTriangulation_2: typeof ShapeConstruct_MakeTriangulation_2;
  ShapeConstruct_ProjectCurveOnSurface: typeof ShapeConstruct_ProjectCurveOnSurface;
  ShapeCustom_BSplineRestriction_1: typeof ShapeCustom_BSplineRestriction_1;
  ShapeCustom_BSplineRestriction_2: typeof ShapeCustom_BSplineRestriction_2;
  ShapeCustom_BSplineRestriction_3: typeof ShapeCustom_BSplineRestriction_3;
  ShapeCustom_ConvertToBSpline: typeof ShapeCustom_ConvertToBSpline;
  ShapeCustom_ConvertToRevolution: typeof ShapeCustom_ConvertToRevolution;
  ShapeCustom_Curve_1: typeof ShapeCustom_Curve_1;
  ShapeCustom_Curve_2: typeof ShapeCustom_Curve_2;
  ShapeCustom_DirectModification: typeof ShapeCustom_DirectModification;
  ShapeCustom_RestrictionParameters: typeof ShapeCustom_RestrictionParameters;
  ShapeCustom_Surface_1: typeof ShapeCustom_Surface_1;
  ShapeCustom_Surface_2: typeof ShapeCustom_Surface_2;
  ShapeCustom_SweptToElementary: typeof ShapeCustom_SweptToElementary;
  ShapeCustom_TrsfModification: typeof ShapeCustom_TrsfModification;
  ShapeExtend_BasicMsgRegistrator: typeof ShapeExtend_BasicMsgRegistrator;
  ShapeExtend_CompositeSurface_1: typeof ShapeExtend_CompositeSurface_1;
  ShapeExtend_CompositeSurface_2: typeof ShapeExtend_CompositeSurface_2;
  ShapeExtend_CompositeSurface_3: typeof ShapeExtend_CompositeSurface_3;
  ShapeExtend_Explorer: typeof ShapeExtend_Explorer;
  ShapeExtend_MsgRegistrator: typeof ShapeExtend_MsgRegistrator;
  ShapeFix_Root: typeof ShapeFix_Root;
  ShapeFix_ComposeShell: typeof ShapeFix_ComposeShell;
  ShapeFix_EdgeConnect: typeof ShapeFix_EdgeConnect;
  ShapeFix_EdgeProjAux_1: typeof ShapeFix_EdgeProjAux_1;
  ShapeFix_EdgeProjAux_2: typeof ShapeFix_EdgeProjAux_2;
  ShapeFix_Face_1: typeof ShapeFix_Face_1;
  ShapeFix_Face_2: typeof ShapeFix_Face_2;
  ShapeFix_FaceConnect: typeof ShapeFix_FaceConnect;
  ShapeFix_FixSmallFace: typeof ShapeFix_FixSmallFace;
  ShapeFix_FixSmallSolid: typeof ShapeFix_FixSmallSolid;
  ShapeFix_FreeBounds_1: typeof ShapeFix_FreeBounds_1;
  ShapeFix_FreeBounds_2: typeof ShapeFix_FreeBounds_2;
  ShapeFix_FreeBounds_3: typeof ShapeFix_FreeBounds_3;
  ShapeFix_IntersectionTool: typeof ShapeFix_IntersectionTool;
  ShapeFix_Shape_1: typeof ShapeFix_Shape_1;
  ShapeFix_Shape_2: typeof ShapeFix_Shape_2;
  ShapeFix_Solid_1: typeof ShapeFix_Solid_1;
  ShapeFix_Solid_2: typeof ShapeFix_Solid_2;
  ShapeFix_Shell_1: typeof ShapeFix_Shell_1;
  ShapeFix_Shell_2: typeof ShapeFix_Shell_2;
  ShapeFix_Wire_1: typeof ShapeFix_Wire_1;
  ShapeFix_Wire_2: typeof ShapeFix_Wire_2;
  ShapeFix_ShapeTolerance: typeof ShapeFix_ShapeTolerance;
  ShapeFix_SplitCommonVertex: typeof ShapeFix_SplitCommonVertex;
  ShapeFix_SplitTool: typeof ShapeFix_SplitTool;
  ShapeFix_WireVertex: typeof ShapeFix_WireVertex;
  ShapeFix_Wireframe_1: typeof ShapeFix_Wireframe_1;
  ShapeFix_Wireframe_2: typeof ShapeFix_Wireframe_2;
  ShapeProcess_Context_1: typeof ShapeProcess_Context_1;
  ShapeProcess_Context_2: typeof ShapeProcess_Context_2;
  ShapeProcess_ShapeContext_1: typeof ShapeProcess_ShapeContext_1;
  ShapeProcess_ShapeContext_2: typeof ShapeProcess_ShapeContext_2;
  ShapeProcess_UOperator: typeof ShapeProcess_UOperator;
  ShapeProcessAPI_ApplySequence: typeof ShapeProcessAPI_ApplySequence;
  ShapeUpgrade_Tool: typeof ShapeUpgrade_Tool;
  ShapeUpgrade_EdgeDivide: typeof ShapeUpgrade_EdgeDivide;
  ShapeUpgrade_ClosedEdgeDivide: typeof ShapeUpgrade_ClosedEdgeDivide;
  ShapeUpgrade_FaceDivide_1: typeof ShapeUpgrade_FaceDivide_1;
  ShapeUpgrade_FaceDivide_2: typeof ShapeUpgrade_FaceDivide_2;
  ShapeUpgrade_ClosedFaceDivide_1: typeof ShapeUpgrade_ClosedFaceDivide_1;
  ShapeUpgrade_ClosedFaceDivide_2: typeof ShapeUpgrade_ClosedFaceDivide_2;
  ShapeUpgrade_SplitCurve: typeof ShapeUpgrade_SplitCurve;
  ShapeUpgrade_SplitCurve2d: typeof ShapeUpgrade_SplitCurve2d;
  ShapeUpgrade_ConvertCurve2dToBezier: typeof ShapeUpgrade_ConvertCurve2dToBezier;
  ShapeUpgrade_SplitCurve3d: typeof ShapeUpgrade_SplitCurve3d;
  ShapeUpgrade_ConvertCurve3dToBezier: typeof ShapeUpgrade_ConvertCurve3dToBezier;
  ShapeUpgrade_SplitSurface: typeof ShapeUpgrade_SplitSurface;
  ShapeUpgrade_ConvertSurfaceToBezierBasis: typeof ShapeUpgrade_ConvertSurfaceToBezierBasis;
  ShapeUpgrade_FaceDivideArea_1: typeof ShapeUpgrade_FaceDivideArea_1;
  ShapeUpgrade_FaceDivideArea_2: typeof ShapeUpgrade_FaceDivideArea_2;
  ShapeUpgrade_FixSmallCurves: typeof ShapeUpgrade_FixSmallCurves;
  ShapeUpgrade_FixSmallBezierCurves: typeof ShapeUpgrade_FixSmallBezierCurves;
  ShapeUpgrade_RemoveInternalWires_1: typeof ShapeUpgrade_RemoveInternalWires_1;
  ShapeUpgrade_RemoveInternalWires_2: typeof ShapeUpgrade_RemoveInternalWires_2;
  ShapeUpgrade_RemoveLocations: typeof ShapeUpgrade_RemoveLocations;
  ShapeUpgrade_ShapeDivide_1: typeof ShapeUpgrade_ShapeDivide_1;
  ShapeUpgrade_ShapeDivide_2: typeof ShapeUpgrade_ShapeDivide_2;
  ShapeUpgrade_ShapeConvertToBezier_1: typeof ShapeUpgrade_ShapeConvertToBezier_1;
  ShapeUpgrade_ShapeConvertToBezier_2: typeof ShapeUpgrade_ShapeConvertToBezier_2;
  ShapeUpgrade_ShapeDivideAngle_1: typeof ShapeUpgrade_ShapeDivideAngle_1;
  ShapeUpgrade_ShapeDivideAngle_2: typeof ShapeUpgrade_ShapeDivideAngle_2;
  ShapeUpgrade_ShapeDivideArea_1: typeof ShapeUpgrade_ShapeDivideArea_1;
  ShapeUpgrade_ShapeDivideArea_2: typeof ShapeUpgrade_ShapeDivideArea_2;
  ShapeUpgrade_ShapeDivideClosed: typeof ShapeUpgrade_ShapeDivideClosed;
  ShapeUpgrade_ShapeDivideClosedEdges: typeof ShapeUpgrade_ShapeDivideClosedEdges;
  ShapeUpgrade_ShapeDivideContinuity_1: typeof ShapeUpgrade_ShapeDivideContinuity_1;
  ShapeUpgrade_ShapeDivideContinuity_2: typeof ShapeUpgrade_ShapeDivideContinuity_2;
  ShapeUpgrade_ShellSewing: typeof ShapeUpgrade_ShellSewing;
  ShapeUpgrade_SplitCurve2dContinuity: typeof ShapeUpgrade_SplitCurve2dContinuity;
  ShapeUpgrade_SplitCurve3dContinuity: typeof ShapeUpgrade_SplitCurve3dContinuity;
  ShapeUpgrade_SplitSurfaceAngle: typeof ShapeUpgrade_SplitSurfaceAngle;
  ShapeUpgrade_SplitSurfaceArea: typeof ShapeUpgrade_SplitSurfaceArea;
  ShapeUpgrade_SplitSurfaceContinuity: typeof ShapeUpgrade_SplitSurfaceContinuity;
  ShapeUpgrade_UnifySameDomain_1: typeof ShapeUpgrade_UnifySameDomain_1;
  ShapeUpgrade_UnifySameDomain_2: typeof ShapeUpgrade_UnifySameDomain_2;
  ShapeUpgrade_WireDivide: typeof ShapeUpgrade_WireDivide;
  Handle_ShapeBuild_ReShape_1: typeof Handle_ShapeBuild_ReShape_1;
  Handle_ShapeBuild_ReShape_2: typeof Handle_ShapeBuild_ReShape_2;
  Handle_ShapeBuild_ReShape_3: typeof Handle_ShapeBuild_ReShape_3;
  Handle_ShapeBuild_ReShape_4: typeof Handle_ShapeBuild_ReShape_4;
  Handle_ShapeAlgo_AlgoContainer_1: typeof Handle_ShapeAlgo_AlgoContainer_1;
  Handle_ShapeAlgo_AlgoContainer_2: typeof Handle_ShapeAlgo_AlgoContainer_2;
  Handle_ShapeAlgo_AlgoContainer_3: typeof Handle_ShapeAlgo_AlgoContainer_3;
  Handle_ShapeAlgo_AlgoContainer_4: typeof Handle_ShapeAlgo_AlgoContainer_4;
  Handle_ShapeAlgo_ToolContainer_1: typeof Handle_ShapeAlgo_ToolContainer_1;
  Handle_ShapeAlgo_ToolContainer_2: typeof Handle_ShapeAlgo_ToolContainer_2;
  Handle_ShapeAlgo_ToolContainer_3: typeof Handle_ShapeAlgo_ToolContainer_3;
  Handle_ShapeAlgo_ToolContainer_4: typeof Handle_ShapeAlgo_ToolContainer_4;
  ShapeAnalysis_DataMapOfShapeListOfReal_1: typeof ShapeAnalysis_DataMapOfShapeListOfReal_1;
  ShapeAnalysis_DataMapOfShapeListOfReal_2: typeof ShapeAnalysis_DataMapOfShapeListOfReal_2;
  ShapeAnalysis_DataMapOfShapeListOfReal_3: typeof ShapeAnalysis_DataMapOfShapeListOfReal_3;
  Handle_ShapeAnalysis_FreeBoundData_1: typeof Handle_ShapeAnalysis_FreeBoundData_1;
  Handle_ShapeAnalysis_FreeBoundData_2: typeof Handle_ShapeAnalysis_FreeBoundData_2;
  Handle_ShapeAnalysis_FreeBoundData_3: typeof Handle_ShapeAnalysis_FreeBoundData_3;
  Handle_ShapeAnalysis_FreeBoundData_4: typeof Handle_ShapeAnalysis_FreeBoundData_4;
  Handle_ShapeAnalysis_HSequenceOfFreeBounds_1: typeof Handle_ShapeAnalysis_HSequenceOfFreeBounds_1;
  Handle_ShapeAnalysis_HSequenceOfFreeBounds_2: typeof Handle_ShapeAnalysis_HSequenceOfFreeBounds_2;
  Handle_ShapeAnalysis_HSequenceOfFreeBounds_3: typeof Handle_ShapeAnalysis_HSequenceOfFreeBounds_3;
  Handle_ShapeAnalysis_HSequenceOfFreeBounds_4: typeof Handle_ShapeAnalysis_HSequenceOfFreeBounds_4;
  Handle_ShapeAnalysis_Surface_1: typeof Handle_ShapeAnalysis_Surface_1;
  Handle_ShapeAnalysis_Surface_2: typeof Handle_ShapeAnalysis_Surface_2;
  Handle_ShapeAnalysis_Surface_3: typeof Handle_ShapeAnalysis_Surface_3;
  Handle_ShapeAnalysis_Surface_4: typeof Handle_ShapeAnalysis_Surface_4;
  Handle_ShapeAnalysis_TransferParameters_1: typeof Handle_ShapeAnalysis_TransferParameters_1;
  Handle_ShapeAnalysis_TransferParameters_2: typeof Handle_ShapeAnalysis_TransferParameters_2;
  Handle_ShapeAnalysis_TransferParameters_3: typeof Handle_ShapeAnalysis_TransferParameters_3;
  Handle_ShapeAnalysis_TransferParameters_4: typeof Handle_ShapeAnalysis_TransferParameters_4;
  Handle_ShapeAnalysis_TransferParametersProj_1: typeof Handle_ShapeAnalysis_TransferParametersProj_1;
  Handle_ShapeAnalysis_TransferParametersProj_2: typeof Handle_ShapeAnalysis_TransferParametersProj_2;
  Handle_ShapeAnalysis_TransferParametersProj_3: typeof Handle_ShapeAnalysis_TransferParametersProj_3;
  Handle_ShapeAnalysis_TransferParametersProj_4: typeof Handle_ShapeAnalysis_TransferParametersProj_4;
  Handle_ShapeAnalysis_Wire_1: typeof Handle_ShapeAnalysis_Wire_1;
  Handle_ShapeAnalysis_Wire_2: typeof Handle_ShapeAnalysis_Wire_2;
  Handle_ShapeAnalysis_Wire_3: typeof Handle_ShapeAnalysis_Wire_3;
  Handle_ShapeAnalysis_Wire_4: typeof Handle_ShapeAnalysis_Wire_4;
  Handle_ShapeExtend_WireData_1: typeof Handle_ShapeExtend_WireData_1;
  Handle_ShapeExtend_WireData_2: typeof Handle_ShapeExtend_WireData_2;
  Handle_ShapeExtend_WireData_3: typeof Handle_ShapeExtend_WireData_3;
  Handle_ShapeExtend_WireData_4: typeof Handle_ShapeExtend_WireData_4;
  Handle_ShapeConstruct_ProjectCurveOnSurface_1: typeof Handle_ShapeConstruct_ProjectCurveOnSurface_1;
  Handle_ShapeConstruct_ProjectCurveOnSurface_2: typeof Handle_ShapeConstruct_ProjectCurveOnSurface_2;
  Handle_ShapeConstruct_ProjectCurveOnSurface_3: typeof Handle_ShapeConstruct_ProjectCurveOnSurface_3;
  Handle_ShapeConstruct_ProjectCurveOnSurface_4: typeof Handle_ShapeConstruct_ProjectCurveOnSurface_4;
  Handle_ShapeCustom_Modification_1: typeof Handle_ShapeCustom_Modification_1;
  Handle_ShapeCustom_Modification_2: typeof Handle_ShapeCustom_Modification_2;
  Handle_ShapeCustom_Modification_3: typeof Handle_ShapeCustom_Modification_3;
  Handle_ShapeCustom_Modification_4: typeof Handle_ShapeCustom_Modification_4;
  Handle_ShapeCustom_BSplineRestriction_1: typeof Handle_ShapeCustom_BSplineRestriction_1;
  Handle_ShapeCustom_BSplineRestriction_2: typeof Handle_ShapeCustom_BSplineRestriction_2;
  Handle_ShapeCustom_BSplineRestriction_3: typeof Handle_ShapeCustom_BSplineRestriction_3;
  Handle_ShapeCustom_BSplineRestriction_4: typeof Handle_ShapeCustom_BSplineRestriction_4;
  Handle_ShapeCustom_ConvertToBSpline_1: typeof Handle_ShapeCustom_ConvertToBSpline_1;
  Handle_ShapeCustom_ConvertToBSpline_2: typeof Handle_ShapeCustom_ConvertToBSpline_2;
  Handle_ShapeCustom_ConvertToBSpline_3: typeof Handle_ShapeCustom_ConvertToBSpline_3;
  Handle_ShapeCustom_ConvertToBSpline_4: typeof Handle_ShapeCustom_ConvertToBSpline_4;
  Handle_ShapeCustom_ConvertToRevolution_1: typeof Handle_ShapeCustom_ConvertToRevolution_1;
  Handle_ShapeCustom_ConvertToRevolution_2: typeof Handle_ShapeCustom_ConvertToRevolution_2;
  Handle_ShapeCustom_ConvertToRevolution_3: typeof Handle_ShapeCustom_ConvertToRevolution_3;
  Handle_ShapeCustom_ConvertToRevolution_4: typeof Handle_ShapeCustom_ConvertToRevolution_4;
  Handle_ShapeCustom_DirectModification_1: typeof Handle_ShapeCustom_DirectModification_1;
  Handle_ShapeCustom_DirectModification_2: typeof Handle_ShapeCustom_DirectModification_2;
  Handle_ShapeCustom_DirectModification_3: typeof Handle_ShapeCustom_DirectModification_3;
  Handle_ShapeCustom_DirectModification_4: typeof Handle_ShapeCustom_DirectModification_4;
  Handle_ShapeCustom_RestrictionParameters_1: typeof Handle_ShapeCustom_RestrictionParameters_1;
  Handle_ShapeCustom_RestrictionParameters_2: typeof Handle_ShapeCustom_RestrictionParameters_2;
  Handle_ShapeCustom_RestrictionParameters_3: typeof Handle_ShapeCustom_RestrictionParameters_3;
  Handle_ShapeCustom_RestrictionParameters_4: typeof Handle_ShapeCustom_RestrictionParameters_4;
  Handle_ShapeCustom_SweptToElementary_1: typeof Handle_ShapeCustom_SweptToElementary_1;
  Handle_ShapeCustom_SweptToElementary_2: typeof Handle_ShapeCustom_SweptToElementary_2;
  Handle_ShapeCustom_SweptToElementary_3: typeof Handle_ShapeCustom_SweptToElementary_3;
  Handle_ShapeCustom_SweptToElementary_4: typeof Handle_ShapeCustom_SweptToElementary_4;
  Handle_ShapeCustom_TrsfModification_1: typeof Handle_ShapeCustom_TrsfModification_1;
  Handle_ShapeCustom_TrsfModification_2: typeof Handle_ShapeCustom_TrsfModification_2;
  Handle_ShapeCustom_TrsfModification_3: typeof Handle_ShapeCustom_TrsfModification_3;
  Handle_ShapeCustom_TrsfModification_4: typeof Handle_ShapeCustom_TrsfModification_4;
  Handle_ShapeExtend_BasicMsgRegistrator_1: typeof Handle_ShapeExtend_BasicMsgRegistrator_1;
  Handle_ShapeExtend_BasicMsgRegistrator_2: typeof Handle_ShapeExtend_BasicMsgRegistrator_2;
  Handle_ShapeExtend_BasicMsgRegistrator_3: typeof Handle_ShapeExtend_BasicMsgRegistrator_3;
  Handle_ShapeExtend_BasicMsgRegistrator_4: typeof Handle_ShapeExtend_BasicMsgRegistrator_4;
  Handle_ShapeExtend_ComplexCurve_1: typeof Handle_ShapeExtend_ComplexCurve_1;
  Handle_ShapeExtend_ComplexCurve_2: typeof Handle_ShapeExtend_ComplexCurve_2;
  Handle_ShapeExtend_ComplexCurve_3: typeof Handle_ShapeExtend_ComplexCurve_3;
  Handle_ShapeExtend_ComplexCurve_4: typeof Handle_ShapeExtend_ComplexCurve_4;
  Handle_ShapeExtend_CompositeSurface_1: typeof Handle_ShapeExtend_CompositeSurface_1;
  Handle_ShapeExtend_CompositeSurface_2: typeof Handle_ShapeExtend_CompositeSurface_2;
  Handle_ShapeExtend_CompositeSurface_3: typeof Handle_ShapeExtend_CompositeSurface_3;
  Handle_ShapeExtend_CompositeSurface_4: typeof Handle_ShapeExtend_CompositeSurface_4;
  ShapeExtend_DataMapOfShapeListOfMsg_1: typeof ShapeExtend_DataMapOfShapeListOfMsg_1;
  ShapeExtend_DataMapOfShapeListOfMsg_2: typeof ShapeExtend_DataMapOfShapeListOfMsg_2;
  ShapeExtend_DataMapOfShapeListOfMsg_3: typeof ShapeExtend_DataMapOfShapeListOfMsg_3;
  Handle_ShapeExtend_MsgRegistrator_1: typeof Handle_ShapeExtend_MsgRegistrator_1;
  Handle_ShapeExtend_MsgRegistrator_2: typeof Handle_ShapeExtend_MsgRegistrator_2;
  Handle_ShapeExtend_MsgRegistrator_3: typeof Handle_ShapeExtend_MsgRegistrator_3;
  Handle_ShapeExtend_MsgRegistrator_4: typeof Handle_ShapeExtend_MsgRegistrator_4;
  Handle_ShapeFix_Root_1: typeof Handle_ShapeFix_Root_1;
  Handle_ShapeFix_Root_2: typeof Handle_ShapeFix_Root_2;
  Handle_ShapeFix_Root_3: typeof Handle_ShapeFix_Root_3;
  Handle_ShapeFix_Root_4: typeof Handle_ShapeFix_Root_4;
  ShapeFix_SequenceOfWireSegment_1: typeof ShapeFix_SequenceOfWireSegment_1;
  ShapeFix_SequenceOfWireSegment_2: typeof ShapeFix_SequenceOfWireSegment_2;
  ShapeFix_SequenceOfWireSegment_3: typeof ShapeFix_SequenceOfWireSegment_3;
  Handle_ShapeFix_ComposeShell_1: typeof Handle_ShapeFix_ComposeShell_1;
  Handle_ShapeFix_ComposeShell_2: typeof Handle_ShapeFix_ComposeShell_2;
  Handle_ShapeFix_ComposeShell_3: typeof Handle_ShapeFix_ComposeShell_3;
  Handle_ShapeFix_ComposeShell_4: typeof Handle_ShapeFix_ComposeShell_4;
  ShapeFix_DataMapOfShapeBox2d_1: typeof ShapeFix_DataMapOfShapeBox2d_1;
  ShapeFix_DataMapOfShapeBox2d_2: typeof ShapeFix_DataMapOfShapeBox2d_2;
  ShapeFix_DataMapOfShapeBox2d_3: typeof ShapeFix_DataMapOfShapeBox2d_3;
  Handle_ShapeFix_Edge_1: typeof Handle_ShapeFix_Edge_1;
  Handle_ShapeFix_Edge_2: typeof Handle_ShapeFix_Edge_2;
  Handle_ShapeFix_Edge_3: typeof Handle_ShapeFix_Edge_3;
  Handle_ShapeFix_Edge_4: typeof Handle_ShapeFix_Edge_4;
  Handle_ShapeFix_EdgeProjAux_1: typeof Handle_ShapeFix_EdgeProjAux_1;
  Handle_ShapeFix_EdgeProjAux_2: typeof Handle_ShapeFix_EdgeProjAux_2;
  Handle_ShapeFix_EdgeProjAux_3: typeof Handle_ShapeFix_EdgeProjAux_3;
  Handle_ShapeFix_EdgeProjAux_4: typeof Handle_ShapeFix_EdgeProjAux_4;
  Handle_ShapeFix_Face_1: typeof Handle_ShapeFix_Face_1;
  Handle_ShapeFix_Face_2: typeof Handle_ShapeFix_Face_2;
  Handle_ShapeFix_Face_3: typeof Handle_ShapeFix_Face_3;
  Handle_ShapeFix_Face_4: typeof Handle_ShapeFix_Face_4;
  Handle_ShapeFix_FixSmallFace_1: typeof Handle_ShapeFix_FixSmallFace_1;
  Handle_ShapeFix_FixSmallFace_2: typeof Handle_ShapeFix_FixSmallFace_2;
  Handle_ShapeFix_FixSmallFace_3: typeof Handle_ShapeFix_FixSmallFace_3;
  Handle_ShapeFix_FixSmallFace_4: typeof Handle_ShapeFix_FixSmallFace_4;
  Handle_ShapeFix_FixSmallSolid_1: typeof Handle_ShapeFix_FixSmallSolid_1;
  Handle_ShapeFix_FixSmallSolid_2: typeof Handle_ShapeFix_FixSmallSolid_2;
  Handle_ShapeFix_FixSmallSolid_3: typeof Handle_ShapeFix_FixSmallSolid_3;
  Handle_ShapeFix_FixSmallSolid_4: typeof Handle_ShapeFix_FixSmallSolid_4;
  Handle_ShapeFix_Shape_1: typeof Handle_ShapeFix_Shape_1;
  Handle_ShapeFix_Shape_2: typeof Handle_ShapeFix_Shape_2;
  Handle_ShapeFix_Shape_3: typeof Handle_ShapeFix_Shape_3;
  Handle_ShapeFix_Shape_4: typeof Handle_ShapeFix_Shape_4;
  Handle_ShapeFix_Solid_1: typeof Handle_ShapeFix_Solid_1;
  Handle_ShapeFix_Solid_2: typeof Handle_ShapeFix_Solid_2;
  Handle_ShapeFix_Solid_3: typeof Handle_ShapeFix_Solid_3;
  Handle_ShapeFix_Solid_4: typeof Handle_ShapeFix_Solid_4;
  Handle_ShapeFix_Shell_1: typeof Handle_ShapeFix_Shell_1;
  Handle_ShapeFix_Shell_2: typeof Handle_ShapeFix_Shell_2;
  Handle_ShapeFix_Shell_3: typeof Handle_ShapeFix_Shell_3;
  Handle_ShapeFix_Shell_4: typeof Handle_ShapeFix_Shell_4;
  Handle_ShapeFix_Wire_1: typeof Handle_ShapeFix_Wire_1;
  Handle_ShapeFix_Wire_2: typeof Handle_ShapeFix_Wire_2;
  Handle_ShapeFix_Wire_3: typeof Handle_ShapeFix_Wire_3;
  Handle_ShapeFix_Wire_4: typeof Handle_ShapeFix_Wire_4;
  Handle_ShapeFix_SplitCommonVertex_1: typeof Handle_ShapeFix_SplitCommonVertex_1;
  Handle_ShapeFix_SplitCommonVertex_2: typeof Handle_ShapeFix_SplitCommonVertex_2;
  Handle_ShapeFix_SplitCommonVertex_3: typeof Handle_ShapeFix_SplitCommonVertex_3;
  Handle_ShapeFix_SplitCommonVertex_4: typeof Handle_ShapeFix_SplitCommonVertex_4;
  Handle_ShapeFix_Wireframe_1: typeof Handle_ShapeFix_Wireframe_1;
  Handle_ShapeFix_Wireframe_2: typeof Handle_ShapeFix_Wireframe_2;
  Handle_ShapeFix_Wireframe_3: typeof Handle_ShapeFix_Wireframe_3;
  Handle_ShapeFix_Wireframe_4: typeof Handle_ShapeFix_Wireframe_4;
  Handle_ShapeProcess_Context_1: typeof Handle_ShapeProcess_Context_1;
  Handle_ShapeProcess_Context_2: typeof Handle_ShapeProcess_Context_2;
  Handle_ShapeProcess_Context_3: typeof Handle_ShapeProcess_Context_3;
  Handle_ShapeProcess_Context_4: typeof Handle_ShapeProcess_Context_4;
  Handle_ShapeProcess_Operator_1: typeof Handle_ShapeProcess_Operator_1;
  Handle_ShapeProcess_Operator_2: typeof Handle_ShapeProcess_Operator_2;
  Handle_ShapeProcess_Operator_3: typeof Handle_ShapeProcess_Operator_3;
  Handle_ShapeProcess_Operator_4: typeof Handle_ShapeProcess_Operator_4;
  Handle_ShapeProcess_ShapeContext_1: typeof Handle_ShapeProcess_ShapeContext_1;
  Handle_ShapeProcess_ShapeContext_2: typeof Handle_ShapeProcess_ShapeContext_2;
  Handle_ShapeProcess_ShapeContext_3: typeof Handle_ShapeProcess_ShapeContext_3;
  Handle_ShapeProcess_ShapeContext_4: typeof Handle_ShapeProcess_ShapeContext_4;
  Handle_ShapeProcess_UOperator_1: typeof Handle_ShapeProcess_UOperator_1;
  Handle_ShapeProcess_UOperator_2: typeof Handle_ShapeProcess_UOperator_2;
  Handle_ShapeProcess_UOperator_3: typeof Handle_ShapeProcess_UOperator_3;
  Handle_ShapeProcess_UOperator_4: typeof Handle_ShapeProcess_UOperator_4;
  Handle_ShapeUpgrade_Tool_1: typeof Handle_ShapeUpgrade_Tool_1;
  Handle_ShapeUpgrade_Tool_2: typeof Handle_ShapeUpgrade_Tool_2;
  Handle_ShapeUpgrade_Tool_3: typeof Handle_ShapeUpgrade_Tool_3;
  Handle_ShapeUpgrade_Tool_4: typeof Handle_ShapeUpgrade_Tool_4;
  Handle_ShapeUpgrade_EdgeDivide_1: typeof Handle_ShapeUpgrade_EdgeDivide_1;
  Handle_ShapeUpgrade_EdgeDivide_2: typeof Handle_ShapeUpgrade_EdgeDivide_2;
  Handle_ShapeUpgrade_EdgeDivide_3: typeof Handle_ShapeUpgrade_EdgeDivide_3;
  Handle_ShapeUpgrade_EdgeDivide_4: typeof Handle_ShapeUpgrade_EdgeDivide_4;
  Handle_ShapeUpgrade_ClosedEdgeDivide_1: typeof Handle_ShapeUpgrade_ClosedEdgeDivide_1;
  Handle_ShapeUpgrade_ClosedEdgeDivide_2: typeof Handle_ShapeUpgrade_ClosedEdgeDivide_2;
  Handle_ShapeUpgrade_ClosedEdgeDivide_3: typeof Handle_ShapeUpgrade_ClosedEdgeDivide_3;
  Handle_ShapeUpgrade_ClosedEdgeDivide_4: typeof Handle_ShapeUpgrade_ClosedEdgeDivide_4;
  Handle_ShapeUpgrade_FaceDivide_1: typeof Handle_ShapeUpgrade_FaceDivide_1;
  Handle_ShapeUpgrade_FaceDivide_2: typeof Handle_ShapeUpgrade_FaceDivide_2;
  Handle_ShapeUpgrade_FaceDivide_3: typeof Handle_ShapeUpgrade_FaceDivide_3;
  Handle_ShapeUpgrade_FaceDivide_4: typeof Handle_ShapeUpgrade_FaceDivide_4;
  Handle_ShapeUpgrade_ClosedFaceDivide_1: typeof Handle_ShapeUpgrade_ClosedFaceDivide_1;
  Handle_ShapeUpgrade_ClosedFaceDivide_2: typeof Handle_ShapeUpgrade_ClosedFaceDivide_2;
  Handle_ShapeUpgrade_ClosedFaceDivide_3: typeof Handle_ShapeUpgrade_ClosedFaceDivide_3;
  Handle_ShapeUpgrade_ClosedFaceDivide_4: typeof Handle_ShapeUpgrade_ClosedFaceDivide_4;
  Handle_ShapeUpgrade_SplitCurve_1: typeof Handle_ShapeUpgrade_SplitCurve_1;
  Handle_ShapeUpgrade_SplitCurve_2: typeof Handle_ShapeUpgrade_SplitCurve_2;
  Handle_ShapeUpgrade_SplitCurve_3: typeof Handle_ShapeUpgrade_SplitCurve_3;
  Handle_ShapeUpgrade_SplitCurve_4: typeof Handle_ShapeUpgrade_SplitCurve_4;
  Handle_ShapeUpgrade_SplitCurve2d_1: typeof Handle_ShapeUpgrade_SplitCurve2d_1;
  Handle_ShapeUpgrade_SplitCurve2d_2: typeof Handle_ShapeUpgrade_SplitCurve2d_2;
  Handle_ShapeUpgrade_SplitCurve2d_3: typeof Handle_ShapeUpgrade_SplitCurve2d_3;
  Handle_ShapeUpgrade_SplitCurve2d_4: typeof Handle_ShapeUpgrade_SplitCurve2d_4;
  Handle_ShapeUpgrade_ConvertCurve2dToBezier_1: typeof Handle_ShapeUpgrade_ConvertCurve2dToBezier_1;
  Handle_ShapeUpgrade_ConvertCurve2dToBezier_2: typeof Handle_ShapeUpgrade_ConvertCurve2dToBezier_2;
  Handle_ShapeUpgrade_ConvertCurve2dToBezier_3: typeof Handle_ShapeUpgrade_ConvertCurve2dToBezier_3;
  Handle_ShapeUpgrade_ConvertCurve2dToBezier_4: typeof Handle_ShapeUpgrade_ConvertCurve2dToBezier_4;
  Handle_ShapeUpgrade_SplitCurve3d_1: typeof Handle_ShapeUpgrade_SplitCurve3d_1;
  Handle_ShapeUpgrade_SplitCurve3d_2: typeof Handle_ShapeUpgrade_SplitCurve3d_2;
  Handle_ShapeUpgrade_SplitCurve3d_3: typeof Handle_ShapeUpgrade_SplitCurve3d_3;
  Handle_ShapeUpgrade_SplitCurve3d_4: typeof Handle_ShapeUpgrade_SplitCurve3d_4;
  Handle_ShapeUpgrade_ConvertCurve3dToBezier_1: typeof Handle_ShapeUpgrade_ConvertCurve3dToBezier_1;
  Handle_ShapeUpgrade_ConvertCurve3dToBezier_2: typeof Handle_ShapeUpgrade_ConvertCurve3dToBezier_2;
  Handle_ShapeUpgrade_ConvertCurve3dToBezier_3: typeof Handle_ShapeUpgrade_ConvertCurve3dToBezier_3;
  Handle_ShapeUpgrade_ConvertCurve3dToBezier_4: typeof Handle_ShapeUpgrade_ConvertCurve3dToBezier_4;
  Handle_ShapeUpgrade_SplitSurface_1: typeof Handle_ShapeUpgrade_SplitSurface_1;
  Handle_ShapeUpgrade_SplitSurface_2: typeof Handle_ShapeUpgrade_SplitSurface_2;
  Handle_ShapeUpgrade_SplitSurface_3: typeof Handle_ShapeUpgrade_SplitSurface_3;
  Handle_ShapeUpgrade_SplitSurface_4: typeof Handle_ShapeUpgrade_SplitSurface_4;
  Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_1: typeof Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_1;
  Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_2: typeof Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_2;
  Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_3: typeof Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_3;
  Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_4: typeof Handle_ShapeUpgrade_ConvertSurfaceToBezierBasis_4;
  Handle_ShapeUpgrade_FaceDivideArea_1: typeof Handle_ShapeUpgrade_FaceDivideArea_1;
  Handle_ShapeUpgrade_FaceDivideArea_2: typeof Handle_ShapeUpgrade_FaceDivideArea_2;
  Handle_ShapeUpgrade_FaceDivideArea_3: typeof Handle_ShapeUpgrade_FaceDivideArea_3;
  Handle_ShapeUpgrade_FaceDivideArea_4: typeof Handle_ShapeUpgrade_FaceDivideArea_4;
  Handle_ShapeUpgrade_FixSmallCurves_1: typeof Handle_ShapeUpgrade_FixSmallCurves_1;
  Handle_ShapeUpgrade_FixSmallCurves_2: typeof Handle_ShapeUpgrade_FixSmallCurves_2;
  Handle_ShapeUpgrade_FixSmallCurves_3: typeof Handle_ShapeUpgrade_FixSmallCurves_3;
  Handle_ShapeUpgrade_FixSmallCurves_4: typeof Handle_ShapeUpgrade_FixSmallCurves_4;
  Handle_ShapeUpgrade_FixSmallBezierCurves_1: typeof Handle_ShapeUpgrade_FixSmallBezierCurves_1;
  Handle_ShapeUpgrade_FixSmallBezierCurves_2: typeof Handle_ShapeUpgrade_FixSmallBezierCurves_2;
  Handle_ShapeUpgrade_FixSmallBezierCurves_3: typeof Handle_ShapeUpgrade_FixSmallBezierCurves_3;
  Handle_ShapeUpgrade_FixSmallBezierCurves_4: typeof Handle_ShapeUpgrade_FixSmallBezierCurves_4;
  Handle_ShapeUpgrade_RemoveInternalWires_1: typeof Handle_ShapeUpgrade_RemoveInternalWires_1;
  Handle_ShapeUpgrade_RemoveInternalWires_2: typeof Handle_ShapeUpgrade_RemoveInternalWires_2;
  Handle_ShapeUpgrade_RemoveInternalWires_3: typeof Handle_ShapeUpgrade_RemoveInternalWires_3;
  Handle_ShapeUpgrade_RemoveInternalWires_4: typeof Handle_ShapeUpgrade_RemoveInternalWires_4;
  Handle_ShapeUpgrade_RemoveLocations_1: typeof Handle_ShapeUpgrade_RemoveLocations_1;
  Handle_ShapeUpgrade_RemoveLocations_2: typeof Handle_ShapeUpgrade_RemoveLocations_2;
  Handle_ShapeUpgrade_RemoveLocations_3: typeof Handle_ShapeUpgrade_RemoveLocations_3;
  Handle_ShapeUpgrade_RemoveLocations_4: typeof Handle_ShapeUpgrade_RemoveLocations_4;
  Handle_ShapeUpgrade_SplitCurve2dContinuity_1: typeof Handle_ShapeUpgrade_SplitCurve2dContinuity_1;
  Handle_ShapeUpgrade_SplitCurve2dContinuity_2: typeof Handle_ShapeUpgrade_SplitCurve2dContinuity_2;
  Handle_ShapeUpgrade_SplitCurve2dContinuity_3: typeof Handle_ShapeUpgrade_SplitCurve2dContinuity_3;
  Handle_ShapeUpgrade_SplitCurve2dContinuity_4: typeof Handle_ShapeUpgrade_SplitCurve2dContinuity_4;
  Handle_ShapeUpgrade_SplitCurve3dContinuity_1: typeof Handle_ShapeUpgrade_SplitCurve3dContinuity_1;
  Handle_ShapeUpgrade_SplitCurve3dContinuity_2: typeof Handle_ShapeUpgrade_SplitCurve3dContinuity_2;
  Handle_ShapeUpgrade_SplitCurve3dContinuity_3: typeof Handle_ShapeUpgrade_SplitCurve3dContinuity_3;
  Handle_ShapeUpgrade_SplitCurve3dContinuity_4: typeof Handle_ShapeUpgrade_SplitCurve3dContinuity_4;
  Handle_ShapeUpgrade_SplitSurfaceAngle_1: typeof Handle_ShapeUpgrade_SplitSurfaceAngle_1;
  Handle_ShapeUpgrade_SplitSurfaceAngle_2: typeof Handle_ShapeUpgrade_SplitSurfaceAngle_2;
  Handle_ShapeUpgrade_SplitSurfaceAngle_3: typeof Handle_ShapeUpgrade_SplitSurfaceAngle_3;
  Handle_ShapeUpgrade_SplitSurfaceAngle_4: typeof Handle_ShapeUpgrade_SplitSurfaceAngle_4;
  Handle_ShapeUpgrade_SplitSurfaceArea_1: typeof Handle_ShapeUpgrade_SplitSurfaceArea_1;
  Handle_ShapeUpgrade_SplitSurfaceArea_2: typeof Handle_ShapeUpgrade_SplitSurfaceArea_2;
  Handle_ShapeUpgrade_SplitSurfaceArea_3: typeof Handle_ShapeUpgrade_SplitSurfaceArea_3;
  Handle_ShapeUpgrade_SplitSurfaceArea_4: typeof Handle_ShapeUpgrade_SplitSurfaceArea_4;
  Handle_ShapeUpgrade_SplitSurfaceContinuity_1: typeof Handle_ShapeUpgrade_SplitSurfaceContinuity_1;
  Handle_ShapeUpgrade_SplitSurfaceContinuity_2: typeof Handle_ShapeUpgrade_SplitSurfaceContinuity_2;
  Handle_ShapeUpgrade_SplitSurfaceContinuity_3: typeof Handle_ShapeUpgrade_SplitSurfaceContinuity_3;
  Handle_ShapeUpgrade_SplitSurfaceContinuity_4: typeof Handle_ShapeUpgrade_SplitSurfaceContinuity_4;
  Handle_ShapeUpgrade_UnifySameDomain_1: typeof Handle_ShapeUpgrade_UnifySameDomain_1;
  Handle_ShapeUpgrade_UnifySameDomain_2: typeof Handle_ShapeUpgrade_UnifySameDomain_2;
  Handle_ShapeUpgrade_UnifySameDomain_3: typeof Handle_ShapeUpgrade_UnifySameDomain_3;
  Handle_ShapeUpgrade_UnifySameDomain_4: typeof Handle_ShapeUpgrade_UnifySameDomain_4;
  Handle_ShapeUpgrade_WireDivide_1: typeof Handle_ShapeUpgrade_WireDivide_1;
  Handle_ShapeUpgrade_WireDivide_2: typeof Handle_ShapeUpgrade_WireDivide_2;
  Handle_ShapeUpgrade_WireDivide_3: typeof Handle_ShapeUpgrade_WireDivide_3;
  Handle_ShapeUpgrade_WireDivide_4: typeof Handle_ShapeUpgrade_WireDivide_4;
  ShapeExtend_Status: typeof ShapeExtend_Status;
  ShapeExtend_Parametrisation: typeof ShapeExtend_Parametrisation;
};
