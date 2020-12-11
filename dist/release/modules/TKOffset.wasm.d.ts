declare const libName = "./modules/TKOffset.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BRepOffset {
  constructor();
  Surface(Surface: Handle_Geom_Surface, Offset: Quantity_AbsorbedDose, theStatus: BRepOffset_Status, allowC0: Standard_Boolean): any;
  CollapseSingularities(theSurface: any, theFace: TopoDS_Face, thePrecision: Standard_Real): any;
}

export declare class BRepOffset_Interval {
  First_1(U: Standard_Real): void;
  Last_1(U: Standard_Real): void;
  Type_1(T: ChFiDS_TypeOfConcavity): void;
  First_2(): Standard_Real;
  Last_2(): Standard_Real;
  Type_2(): ChFiDS_TypeOfConcavity;
}

  export declare class BRepOffset_Interval_1 extends BRepOffset_Interval {
    constructor();
  }

  export declare class BRepOffset_Interval_2 extends BRepOffset_Interval {
    constructor(U1: Standard_Real, U2: Standard_Real, Type: ChFiDS_TypeOfConcavity);
  }

export declare class BRepOffset_Analyse {
  Perform(theS: TopoDS_Shape, theAngle: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Type(theE: TopoDS_Edge): BRepOffset_ListOfInterval;
  Edges_1(theV: TopoDS_Vertex, theType: ChFiDS_TypeOfConcavity, theL: TopTools_ListOfShape): void;
  Edges_2(theF: TopoDS_Face, theType: ChFiDS_TypeOfConcavity, theL: TopTools_ListOfShape): void;
  TangentEdges(theEdge: TopoDS_Edge, theVertex: TopoDS_Vertex, theEdges: TopTools_ListOfShape): void;
  HasAncestor(theS: TopoDS_Shape): Standard_Boolean;
  Ancestors(theS: TopoDS_Shape): TopTools_ListOfShape;
  Explode_1(theL: TopTools_ListOfShape, theType: ChFiDS_TypeOfConcavity): void;
  Explode_2(theL: TopTools_ListOfShape, theType1: ChFiDS_TypeOfConcavity, theType2: ChFiDS_TypeOfConcavity): void;
  AddFaces_1(theFace: TopoDS_Face, theCo: TopoDS_Compound, theMap: TopTools_MapOfShape, theType: ChFiDS_TypeOfConcavity): void;
  AddFaces_2(theFace: TopoDS_Face, theCo: TopoDS_Compound, theMap: TopTools_MapOfShape, theType1: ChFiDS_TypeOfConcavity, theType2: ChFiDS_TypeOfConcavity): void;
  SetOffsetValue(theOffset: Standard_Real): void;
  SetFaceOffsetMap(theMap: TopTools_DataMapOfShapeReal): void;
  NewFaces(): TopTools_ListOfShape;
  Generated(theS: TopoDS_Shape): TopoDS_Shape;
  HasGenerated(theS: TopoDS_Shape): Standard_Boolean;
  EdgeReplacement(theFace: TopoDS_Face, theEdge: TopoDS_Edge): TopoDS_Edge;
  Descendants(theS: TopoDS_Shape, theUpdate: Standard_Boolean): TopTools_ListOfShape;
  Clear(): void;
}

  export declare class BRepOffset_Analyse_1 extends BRepOffset_Analyse {
    constructor();
  }

  export declare class BRepOffset_Analyse_2 extends BRepOffset_Analyse {
    constructor(theS: TopoDS_Shape, theAngle: Standard_Real);
  }

export declare class BRepOffset_Offset {
  Init_1(Face: TopoDS_Face, Offset: Standard_Real, OffsetOutside: Standard_Boolean, JoinType: GeomAbs_JoinType): void;
  Init_2(Face: TopoDS_Face, Offset: Standard_Real, Created: TopTools_DataMapOfShapeShape, OffsetOutside: Standard_Boolean, JoinType: GeomAbs_JoinType): void;
  Init_3(Path: TopoDS_Edge, Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, Offset: Standard_Real, Polynomial: Standard_Boolean, Tol: Standard_Real, Conti: GeomAbs_Shape): void;
  Init_4(Path: TopoDS_Edge, Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, Offset: Standard_Real, FirstEdge: TopoDS_Edge, LastEdge: TopoDS_Edge, Polynomial: Standard_Boolean, Tol: Standard_Real, Conti: GeomAbs_Shape): void;
  Init_5(Vertex: TopoDS_Vertex, LEdge: TopTools_ListOfShape, Offset: Standard_Real, Polynomial: Standard_Boolean, Tol: Standard_Real, Conti: GeomAbs_Shape): void;
  Init_6(Edge: TopoDS_Edge, Offset: Standard_Real): void;
  InitialShape(): TopoDS_Shape;
  Face(): TopoDS_Face;
  Generated(Shape: TopoDS_Shape): TopoDS_Shape;
  Status(): BRepOffset_Status;
}

  export declare class BRepOffset_Offset_1 extends BRepOffset_Offset {
    constructor();
  }

  export declare class BRepOffset_Offset_2 extends BRepOffset_Offset {
    constructor(Face: TopoDS_Face, Offset: Standard_Real, OffsetOutside: Standard_Boolean, JoinType: GeomAbs_JoinType);
  }

  export declare class BRepOffset_Offset_3 extends BRepOffset_Offset {
    constructor(Face: TopoDS_Face, Offset: Standard_Real, Created: TopTools_DataMapOfShapeShape, OffsetOutside: Standard_Boolean, JoinType: GeomAbs_JoinType);
  }

  export declare class BRepOffset_Offset_4 extends BRepOffset_Offset {
    constructor(Path: TopoDS_Edge, Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, Offset: Standard_Real, Polynomial: Standard_Boolean, Tol: Standard_Real, Conti: GeomAbs_Shape);
  }

  export declare class BRepOffset_Offset_5 extends BRepOffset_Offset {
    constructor(Path: TopoDS_Edge, Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, Offset: Standard_Real, FirstEdge: TopoDS_Edge, LastEdge: TopoDS_Edge, Polynomial: Standard_Boolean, Tol: Standard_Real, Conti: GeomAbs_Shape);
  }

  export declare class BRepOffset_Offset_6 extends BRepOffset_Offset {
    constructor(Vertex: TopoDS_Vertex, LEdge: TopTools_ListOfShape, Offset: Standard_Real, Polynomial: Standard_Boolean, Tol: Standard_Real, Conti: GeomAbs_Shape);
  }

export declare class BRepOffset_Inter2d {
  constructor();
  Compute(AsDes: any, F: TopoDS_Face, NewEdges: TopTools_IndexedMapOfShape, Tol: Standard_Real, theDMVV: TopTools_IndexedDataMapOfShapeListOfShape): void;
  ConnexIntByInt(FI: TopoDS_Face, OFI: BRepOffset_Offset, MES: TopTools_DataMapOfShapeShape, Build: TopTools_DataMapOfShapeShape, AsDes2d: any, Offset: Standard_Real, Tol: Standard_Real, Analyse: BRepOffset_Analyse, FacesWithVerts: TopTools_IndexedMapOfShape, theDMVV: TopTools_IndexedDataMapOfShapeListOfShape): Standard_Boolean;
  ConnexIntByIntInVert(FI: TopoDS_Face, OFI: BRepOffset_Offset, MES: TopTools_DataMapOfShapeShape, Build: TopTools_DataMapOfShapeShape, AsDes: any, AsDes2d: any, Tol: Standard_Real, Analyse: BRepOffset_Analyse, theDMVV: TopTools_IndexedDataMapOfShapeListOfShape): void;
  FuseVertices(theDMVV: TopTools_IndexedDataMapOfShapeListOfShape, theAsDes: any): Standard_Boolean;
  ExtentEdge(E: TopoDS_Edge, NE: TopoDS_Edge, theOffset: Standard_Real): Standard_Boolean;
}

export declare class BRepOffset_Inter3d {
  constructor(AsDes: any, Side: TopAbs_State, Tol: Standard_Real)
  CompletInt(SetOfFaces: TopTools_ListOfShape, InitOffsetFace: BRepAlgo_Image): void;
  FaceInter(F1: TopoDS_Face, F2: TopoDS_Face, InitOffsetFace: BRepAlgo_Image): void;
  ConnexIntByArc(SetOfFaces: TopTools_ListOfShape, ShapeInit: TopoDS_Shape, Analyse: BRepOffset_Analyse, InitOffsetFace: BRepAlgo_Image): void;
  ConnexIntByInt(SI: TopoDS_Shape, MapSF: BRepOffset_DataMapOfShapeOffset, A: BRepOffset_Analyse, MES: TopTools_DataMapOfShapeShape, Build: TopTools_DataMapOfShapeShape, Failed: TopTools_ListOfShape, bIsPlanar: Standard_Boolean): void;
  ContextIntByInt(ContextFaces: TopTools_IndexedMapOfShape, ExtentContext: Standard_Boolean, MapSF: BRepOffset_DataMapOfShapeOffset, A: BRepOffset_Analyse, MES: TopTools_DataMapOfShapeShape, Build: TopTools_DataMapOfShapeShape, Failed: TopTools_ListOfShape, bIsPlanar: Standard_Boolean): void;
  ContextIntByArc(ContextFaces: TopTools_IndexedMapOfShape, ExtentContext: Standard_Boolean, Analyse: BRepOffset_Analyse, InitOffsetFace: BRepAlgo_Image, InitOffsetEdge: BRepAlgo_Image): void;
  AddCommonEdges(SetOfFaces: TopTools_ListOfShape): void;
  SetDone(F1: TopoDS_Face, F2: TopoDS_Face): void;
  IsDone(F1: TopoDS_Face, F2: TopoDS_Face): Standard_Boolean;
  TouchedFaces(): TopTools_IndexedMapOfShape;
  AsDes(): any;
  NewEdges(): TopTools_IndexedMapOfShape;
}

export declare class BRepOffset_MakeLoops {
  constructor()
  Build(LF: TopTools_ListOfShape, AsDes: any, Image: BRepAlgo_Image): void;
  BuildOnContext(LContext: TopTools_ListOfShape, Analyse: BRepOffset_Analyse, AsDes: any, Image: BRepAlgo_Image, InSide: Standard_Boolean): void;
  BuildFaces(LF: TopTools_ListOfShape, AsDes: any, Image: BRepAlgo_Image): void;
}

export declare class BRepOffset_MakeSimpleOffset {
  Initialize(theInputShape: TopoDS_Shape, theOffsetValue: Standard_Real): void;
  Perform(): void;
  GetErrorMessage(): TCollection_AsciiString;
  GetError(): BRepOffsetSimple_Status;
  GetBuildSolidFlag(): Standard_Boolean;
  SetBuildSolidFlag(theBuildFlag: Standard_Boolean): void;
  GetOffsetValue(): Standard_Real;
  SetOffsetValue(theOffsetValue: Standard_Real): void;
  GetTolerance(): Standard_Real;
  SetTolerance(theValue: Standard_Real): void;
  IsDone(): Standard_Boolean;
  GetResultShape(): TopoDS_Shape;
  GetSafeOffset(theExpectedToler: Standard_Real): Standard_Real;
  Generated(theShape: TopoDS_Shape): TopoDS_Shape;
  Modified(theShape: TopoDS_Shape): TopoDS_Shape;
}

  export declare class BRepOffset_MakeSimpleOffset_1 extends BRepOffset_MakeSimpleOffset {
    constructor();
  }

  export declare class BRepOffset_MakeSimpleOffset_2 extends BRepOffset_MakeSimpleOffset {
    constructor(theInputShape: TopoDS_Shape, theOffsetValue: Standard_Real);
  }

export declare class BRepOffset_SimpleOffset extends BRepTools_Modification {
  constructor(theInputShape: TopoDS_Shape, theOffsetValue: Standard_Real, theTolerance: Standard_Real)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
}

export declare class BRepOffset_Tool {
  constructor();
  EdgeVertices(E: TopoDS_Edge, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  OrientSection(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, O1: TopAbs_Orientation, O2: TopAbs_Orientation): void;
  FindCommonShapes_1(theF1: TopoDS_Face, theF2: TopoDS_Face, theLE: TopTools_ListOfShape, theLV: TopTools_ListOfShape): Standard_Boolean;
  FindCommonShapes_2(theS1: TopoDS_Shape, theS2: TopoDS_Shape, theType: TopAbs_ShapeEnum, theLSC: TopTools_ListOfShape): Standard_Boolean;
  Inter3D(F1: TopoDS_Face, F2: TopoDS_Face, LInt1: TopTools_ListOfShape, LInt2: TopTools_ListOfShape, Side: TopAbs_State, RefEdge: TopoDS_Edge, IsRefEdgeDefined: Standard_Boolean): void;
  TryProject(F1: TopoDS_Face, F2: TopoDS_Face, Edges: TopTools_ListOfShape, LInt1: TopTools_ListOfShape, LInt2: TopTools_ListOfShape, Side: TopAbs_State, TolConf: Standard_Real): Standard_Boolean;
  PipeInter(F1: TopoDS_Face, F2: TopoDS_Face, LInt1: TopTools_ListOfShape, LInt2: TopTools_ListOfShape, Side: TopAbs_State): void;
  Inter2d(F: TopoDS_Face, E1: TopoDS_Edge, E2: TopoDS_Edge, LV: TopTools_ListOfShape, Tol: Standard_Real): void;
  InterOrExtent(F1: TopoDS_Face, F2: TopoDS_Face, LInt1: TopTools_ListOfShape, LInt2: TopTools_ListOfShape, Side: TopAbs_State): void;
  CheckBounds(F: TopoDS_Face, Analyse: BRepOffset_Analyse, enlargeU: Standard_Boolean, enlargeVfirst: Standard_Boolean, enlargeVlast: Standard_Boolean): void;
  EnLargeFace(F: TopoDS_Face, NF: TopoDS_Face, ChangeGeom: Standard_Boolean, UpDatePCurve: Standard_Boolean, enlargeU: Standard_Boolean, enlargeVfirst: Standard_Boolean, enlargeVlast: Standard_Boolean, theExtensionMode: Standard_Integer, theLenBeforeUfirst: Standard_Real, theLenAfterUlast: Standard_Real, theLenBeforeVfirst: Standard_Real, theLenAfterVlast: Standard_Real): Standard_Boolean;
  ExtentFace(F: TopoDS_Face, ConstShapes: TopTools_DataMapOfShapeShape, ToBuild: TopTools_DataMapOfShapeShape, Side: TopAbs_State, TolConf: Standard_Real, NF: TopoDS_Face): void;
  BuildNeighbour(W: TopoDS_Wire, F: TopoDS_Face, NOnV1: TopTools_DataMapOfShapeShape, NOnV2: TopTools_DataMapOfShapeShape): void;
  MapVertexEdges(S: TopoDS_Shape, MVE: TopTools_DataMapOfShapeListOfShape): void;
  Deboucle3D(S: TopoDS_Shape, Boundary: TopTools_MapOfShape): TopoDS_Shape;
  CorrectOrientation(SI: TopoDS_Shape, NewEdges: TopTools_IndexedMapOfShape, AsDes: any, InitOffset: BRepAlgo_Image, Offset: Standard_Real): void;
  Gabarit(aCurve: any): Standard_Real;
  CheckPlanesNormals(theFace1: TopoDS_Face, theFace2: TopoDS_Face, theTolAng: Standard_Real): Standard_Boolean;
}

export declare class BRepOffsetAPI_DraftAngle extends BRepBuilderAPI_ModifyShape {
  Clear(): void;
  Init(S: TopoDS_Shape): void;
  Add(F: TopoDS_Face, Direction: gp_Dir, Angle: Standard_Real, NeutralPlane: gp_Pln, Flag: Standard_Boolean): void;
  AddDone(): Standard_Boolean;
  Remove(F: TopoDS_Face): void;
  ProblematicShape(): TopoDS_Shape;
  Status(): Draft_ErrorStatus;
  ConnectedFaces(F: TopoDS_Face): TopTools_ListOfShape;
  ModifiedFaces(): TopTools_ListOfShape;
  Build(): void;
  CorrectWires(): void;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
}

  export declare class BRepOffsetAPI_DraftAngle_1 extends BRepOffsetAPI_DraftAngle {
    constructor();
  }

  export declare class BRepOffsetAPI_DraftAngle_2 extends BRepOffsetAPI_DraftAngle {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepOffsetAPI_MakeDraft extends BRepBuilderAPI_MakeShape {
  constructor(Shape: TopoDS_Shape, Dir: gp_Dir, Angle: Standard_Real)
  SetOptions(Style: BRepBuilderAPI_TransitionMode, AngleMin: Standard_Real, AngleMax: Standard_Real): void;
  SetDraft(IsInternal: Standard_Boolean): void;
  Perform_1(LengthMax: Standard_Real): void;
  Perform_2(Surface: any, KeepInsideSurface: Standard_Boolean): void;
  Perform_3(StopShape: TopoDS_Shape, KeepOutSide: Standard_Boolean): void;
  Shell(): TopoDS_Shell;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
}

export declare class BRepOffsetAPI_MakeEvolved extends BRepBuilderAPI_MakeShape {
  Evolved(): BRepFill_Evolved;
  Build(): void;
  GeneratedShapes(SpineShape: TopoDS_Shape, ProfShape: TopoDS_Shape): TopTools_ListOfShape;
  Top(): TopoDS_Shape;
  Bottom(): TopoDS_Shape;
}

  export declare class BRepOffsetAPI_MakeEvolved_1 extends BRepOffsetAPI_MakeEvolved {
    constructor();
  }

  export declare class BRepOffsetAPI_MakeEvolved_2 extends BRepOffsetAPI_MakeEvolved {
    constructor(theSpine: TopoDS_Shape, theProfile: TopoDS_Wire, theJoinType: GeomAbs_JoinType, theIsAxeProf: Standard_Boolean, theIsSolid: Standard_Boolean, theIsProfOnSpine: Standard_Boolean, theTol: Standard_Real, theIsVolume: Standard_Boolean, theRunInParallel: Standard_Boolean);
  }

export declare class BRepOffsetAPI_MakeFilling extends BRepBuilderAPI_MakeShape {
  constructor(Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Anisotropie: Standard_Boolean, Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real, MaxDeg: Standard_Integer, MaxSegments: Standard_Integer)
  SetConstrParam(Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real): void;
  SetResolParam(Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Anisotropie: Standard_Boolean): void;
  SetApproxParam(MaxDeg: Standard_Integer, MaxSegments: Standard_Integer): void;
  LoadInitSurface(Surf: TopoDS_Face): void;
  Add_1(Constr: TopoDS_Edge, Order: GeomAbs_Shape, IsBound: Standard_Boolean): Standard_Integer;
  Add_2(Constr: TopoDS_Edge, Support: TopoDS_Face, Order: GeomAbs_Shape, IsBound: Standard_Boolean): Standard_Integer;
  Add_3(Support: TopoDS_Face, Order: GeomAbs_Shape): Standard_Integer;
  Add_4(Point: gp_Pnt): Standard_Integer;
  Add_5(U: Standard_Real, V: Standard_Real, Support: TopoDS_Face, Order: GeomAbs_Shape): Standard_Integer;
  Build(): void;
  IsDone(): Standard_Boolean;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  G0Error_1(): Standard_Real;
  G1Error_1(): Standard_Real;
  G2Error_1(): Standard_Real;
  G0Error_2(Index: Standard_Integer): Standard_Real;
  G1Error_2(Index: Standard_Integer): Standard_Real;
  G2Error_2(Index: Standard_Integer): Standard_Real;
}

export declare class BRepOffsetAPI_MakeOffset extends BRepBuilderAPI_MakeShape {
  Init_1(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  Init_2(Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  AddWire(Spine: TopoDS_Wire): void;
  Perform(Offset: Standard_Real, Alt: Standard_Real): void;
  Build(): void;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class BRepOffsetAPI_MakeOffset_1 extends BRepOffsetAPI_MakeOffset {
    constructor();
  }

  export declare class BRepOffsetAPI_MakeOffset_2 extends BRepOffsetAPI_MakeOffset {
    constructor(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean);
  }

  export declare class BRepOffsetAPI_MakeOffset_3 extends BRepOffsetAPI_MakeOffset {
    constructor(Spine: TopoDS_Wire, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean);
  }

export declare class BRepOffsetAPI_MakeOffsetShape extends BRepBuilderAPI_MakeShape {
  PerformBySimple(theS: TopoDS_Shape, theOffsetValue: Standard_Real): void;
  PerformByJoin(S: TopoDS_Shape, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean): void;
  MakeOffset(): BRepOffset_MakeOffset;
  Build(): void;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  GetJoinType(): GeomAbs_JoinType;
}

  export declare class BRepOffsetAPI_MakeOffsetShape_1 extends BRepOffsetAPI_MakeOffsetShape {
    constructor();
  }

  export declare class BRepOffsetAPI_MakeOffsetShape_2 extends BRepOffsetAPI_MakeOffsetShape {
    constructor(S: TopoDS_Shape, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean);
  }

export declare class BRepOffsetAPI_MakePipe extends BRepPrimAPI_MakeSweep {
  Pipe(): BRepFill_Pipe;
  Build(): void;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Generated_1(S: TopoDS_Shape): TopTools_ListOfShape;
  Generated_2(SSpine: TopoDS_Shape, SProfile: TopoDS_Shape): TopoDS_Shape;
  ErrorOnSurface(): Standard_Real;
}

  export declare class BRepOffsetAPI_MakePipe_1 extends BRepOffsetAPI_MakePipe {
    constructor(Spine: TopoDS_Wire, Profile: TopoDS_Shape);
  }

  export declare class BRepOffsetAPI_MakePipe_2 extends BRepOffsetAPI_MakePipe {
    constructor(Spine: TopoDS_Wire, Profile: TopoDS_Shape, aMode: GeomFill_Trihedron, ForceApproxC1: Standard_Boolean);
  }

export declare class BRepOffsetAPI_MakePipeShell extends BRepPrimAPI_MakeSweep {
  constructor(Spine: TopoDS_Wire)
  SetMode_1(IsFrenet: Standard_Boolean): void;
  SetDiscreteMode(): void;
  SetMode_2(Axe: gp_Ax2): void;
  SetMode_3(BiNormal: gp_Dir): void;
  SetMode_4(SpineSupport: TopoDS_Shape): Standard_Boolean;
  SetMode_5(AuxiliarySpine: TopoDS_Wire, CurvilinearEquivalence: Standard_Boolean, KeepContact: BRepFill_TypeOfContact): void;
  Add_1(Profile: TopoDS_Shape, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  Add_2(Profile: TopoDS_Shape, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_1(Profile: TopoDS_Shape, L: any, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_2(Profile: TopoDS_Shape, L: any, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  Delete(Profile: TopoDS_Shape): void;
  IsReady(): Standard_Boolean;
  GetStatus(): BRepBuilderAPI_PipeError;
  SetTolerance(Tol3d: Standard_Real, BoundTol: Standard_Real, TolAngular: Standard_Real): void;
  SetMaxDegree(NewMaxDegree: Standard_Integer): void;
  SetMaxSegments(NewMaxSegments: Standard_Integer): void;
  SetForceApproxC1(ForceApproxC1: Standard_Boolean): void;
  SetTransitionMode(Mode: BRepBuilderAPI_TransitionMode): void;
  Simulate(NumberOfSection: Standard_Integer, Result: TopTools_ListOfShape): void;
  Build(): void;
  MakeSolid(): Standard_Boolean;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  ErrorOnSurface(): Standard_Real;
  Profiles(theProfiles: TopTools_ListOfShape): void;
  Spine(): TopoDS_Wire;
}

export declare class BRepOffsetAPI_MakeThickSolid extends BRepOffsetAPI_MakeOffsetShape {
  MakeThickSolidBySimple(theS: TopoDS_Shape, theOffsetValue: Standard_Real): void;
  MakeThickSolidByJoin(S: TopoDS_Shape, ClosingFaces: TopTools_ListOfShape, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean): void;
  Build(): void;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class BRepOffsetAPI_MakeThickSolid_1 extends BRepOffsetAPI_MakeThickSolid {
    constructor();
  }

  export declare class BRepOffsetAPI_MakeThickSolid_2 extends BRepOffsetAPI_MakeThickSolid {
    constructor(S: TopoDS_Shape, ClosingFaces: TopTools_ListOfShape, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean);
  }

export declare class BRepOffsetAPI_MiddlePath extends BRepBuilderAPI_MakeShape {
  constructor(aShape: TopoDS_Shape, StartShape: TopoDS_Shape, EndShape: TopoDS_Shape)
  Build(): void;
}

export declare class BRepOffsetAPI_NormalProjection extends BRepBuilderAPI_MakeShape {
  Init(S: TopoDS_Shape): void;
  Add(ToProj: TopoDS_Shape): void;
  SetParams(Tol3D: Standard_Real, Tol2D: Standard_Real, InternalContinuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSeg: Standard_Integer): void;
  SetMaxDistance(MaxDist: Standard_Real): void;
  SetLimit(FaceBoundaries: Standard_Boolean): void;
  Compute3d(With3d: Standard_Boolean): void;
  Build(): void;
  IsDone(): Standard_Boolean;
  Projection(): TopoDS_Shape;
  Couple(E: TopoDS_Edge): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Ancestor(E: TopoDS_Edge): TopoDS_Shape;
  BuildWire(Liste: TopTools_ListOfShape): Standard_Boolean;
}

  export declare class BRepOffsetAPI_NormalProjection_1 extends BRepOffsetAPI_NormalProjection {
    constructor();
  }

  export declare class BRepOffsetAPI_NormalProjection_2 extends BRepOffsetAPI_NormalProjection {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepOffsetAPI_ThruSections extends BRepBuilderAPI_MakeShape {
  constructor(isSolid: Standard_Boolean, ruled: Standard_Boolean, pres3d: Standard_Real)
  Init(isSolid: Standard_Boolean, ruled: Standard_Boolean, pres3d: Standard_Real): void;
  AddWire(wire: TopoDS_Wire): void;
  AddVertex(aVertex: TopoDS_Vertex): void;
  CheckCompatibility(check: Standard_Boolean): void;
  SetSmoothing(UseSmoothing: Standard_Boolean): void;
  SetParType(ParType: Approx_ParametrizationType): void;
  SetContinuity(C: GeomAbs_Shape): void;
  SetCriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  SetMaxDegree(MaxDeg: Standard_Integer): void;
  ParType(): Approx_ParametrizationType;
  Continuity(): GeomAbs_Shape;
  MaxDegree(): Standard_Integer;
  UseSmoothing(): Standard_Boolean;
  CriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  Build(): void;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  GeneratedFace(Edge: TopoDS_Shape): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Wires(): TopTools_ListOfShape;
}

export declare class BiTgte_Blend {
  Init(S: TopoDS_Shape, Radius: Standard_Real, Tol: Standard_Real, NUBS: Standard_Boolean): void;
  Clear(): void;
  SetFaces(F1: TopoDS_Face, F2: TopoDS_Face): void;
  SetEdge(Edge: TopoDS_Edge): void;
  SetStoppingFace(Face: TopoDS_Face): void;
  Perform(BuildShape: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  NbSurfaces(): Standard_Integer;
  Surface_1(Index: Standard_Integer): any;
  Face_1(Index: Standard_Integer): TopoDS_Face;
  CenterLines(LC: TopTools_ListOfShape): void;
  Surface_2(CenterLine: TopoDS_Shape): any;
  Face_2(CenterLine: TopoDS_Shape): TopoDS_Face;
  ContactType(Index: Standard_Integer): BiTgte_ContactType;
  SupportShape1(Index: Standard_Integer): TopoDS_Shape;
  SupportShape2(Index: Standard_Integer): TopoDS_Shape;
  CurveOnShape1(Index: Standard_Integer): any;
  CurveOnShape2(Index: Standard_Integer): any;
  PCurveOnFace1(Index: Standard_Integer): any;
  PCurve1OnFillet(Index: Standard_Integer): any;
  PCurveOnFace2(Index: Standard_Integer): any;
  PCurve2OnFillet(Index: Standard_Integer): any;
  NbBranches(): Standard_Integer;
  IndicesOfBranche(Index: Standard_Integer, From: Standard_Integer, To: Standard_Integer): void;
  ComputeCenters(): void;
}

  export declare class BiTgte_Blend_1 extends BiTgte_Blend {
    constructor();
  }

  export declare class BiTgte_Blend_2 extends BiTgte_Blend {
    constructor(S: TopoDS_Shape, Radius: Standard_Real, Tol: Standard_Real, NUBS: Standard_Boolean);
  }

export declare class BiTgte_CurveOnEdge extends Adaptor3d_Curve {
  Init(EonF: TopoDS_Edge, Edge: TopoDS_Edge): void;
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

  export declare class BiTgte_CurveOnEdge_1 extends BiTgte_CurveOnEdge {
    constructor();
  }

  export declare class BiTgte_CurveOnEdge_2 extends BiTgte_CurveOnEdge {
    constructor(EonF: TopoDS_Edge, Edge: TopoDS_Edge);
  }

export declare class BiTgte_CurveOnVertex extends Adaptor3d_Curve {
  Init(EonF: TopoDS_Edge, V: TopoDS_Vertex): void;
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

  export declare class BiTgte_CurveOnVertex_1 extends BiTgte_CurveOnVertex {
    constructor();
  }

  export declare class BiTgte_CurveOnVertex_2 extends BiTgte_CurveOnVertex {
    constructor(EonF: TopoDS_Edge, V: TopoDS_Vertex);
  }

export declare class BiTgte_HCurveOnEdge extends Adaptor3d_HCurve {
  Set(C: BiTgte_CurveOnEdge): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): BiTgte_CurveOnEdge;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BiTgte_HCurveOnEdge_1 extends BiTgte_HCurveOnEdge {
    constructor();
  }

  export declare class BiTgte_HCurveOnEdge_2 extends BiTgte_HCurveOnEdge {
    constructor(C: BiTgte_CurveOnEdge);
  }

export declare class BiTgte_HCurveOnVertex extends Adaptor3d_HCurve {
  Set(C: BiTgte_CurveOnVertex): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): BiTgte_CurveOnVertex;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BiTgte_HCurveOnVertex_1 extends BiTgte_HCurveOnVertex {
    constructor();
  }

  export declare class BiTgte_HCurveOnVertex_2 extends BiTgte_HCurveOnVertex {
    constructor(C: BiTgte_CurveOnVertex);
  }

export declare class Draft {
  constructor();
  Angle(F: TopoDS_Face, Direction: gp_Dir): Standard_Real;
}

export declare class Draft_EdgeInfo {
  Add(F: TopoDS_Face): void;
  RootFace_1(F: TopoDS_Face): void;
  Tangent(P: gp_Pnt): void;
  IsTangent(P: gp_Pnt): Standard_Boolean;
  NewGeometry(): Standard_Boolean;
  SetNewGeometry(NewGeom: Standard_Boolean): void;
  Geometry(): any;
  FirstFace(): TopoDS_Face;
  SecondFace(): TopoDS_Face;
  FirstPC(): any;
  SecondPC(): any;
  ChangeGeometry(): any;
  ChangeFirstPC(): any;
  ChangeSecondPC(): any;
  RootFace_2(): TopoDS_Face;
  Tolerance_1(tol: Standard_Real): void;
  Tolerance_2(): Standard_Real;
}

  export declare class Draft_EdgeInfo_1 extends Draft_EdgeInfo {
    constructor();
  }

  export declare class Draft_EdgeInfo_2 extends Draft_EdgeInfo {
    constructor(HasNewGeometry: Standard_Boolean);
  }

export declare class Draft_FaceInfo {
  RootFace_1(F: TopoDS_Face): void;
  NewGeometry(): Standard_Boolean;
  Add(F: TopoDS_Face): void;
  FirstFace(): TopoDS_Face;
  SecondFace(): TopoDS_Face;
  Geometry(): any;
  ChangeGeometry(): any;
  RootFace_2(): TopoDS_Face;
  ChangeCurve(): any;
  Curve(): any;
}

  export declare class Draft_FaceInfo_1 extends Draft_FaceInfo {
    constructor();
  }

  export declare class Draft_FaceInfo_2 extends Draft_FaceInfo {
    constructor(S: any, HasNewGeometry: Standard_Boolean);
  }

export declare class Draft_VertexInfo {
  constructor()
  Add(E: TopoDS_Edge): void;
  Geometry(): gp_Pnt;
  Parameter(E: TopoDS_Edge): Standard_Real;
  InitEdgeIterator(): void;
  Edge(): TopoDS_Edge;
  NextEdge(): void;
  MoreEdge(): Standard_Boolean;
  ChangeGeometry(): gp_Pnt;
  ChangeParameter(E: TopoDS_Edge): Standard_Real;
}

export declare class Draft_Modification extends BRepTools_Modification {
  constructor(S: TopoDS_Shape)
  Clear(): void;
  Init(S: TopoDS_Shape): void;
  Add(F: TopoDS_Face, Direction: gp_Dir, Angle: Standard_Real, NeutralPlane: gp_Pln, Flag: Standard_Boolean): Standard_Boolean;
  Remove(F: TopoDS_Face): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  Error(): Draft_ErrorStatus;
  ProblematicShape(): TopoDS_Shape;
  ConnectedFaces(F: TopoDS_Face): TopTools_ListOfShape;
  ModifiedFaces(): TopTools_ListOfShape;
  NewSurface_1(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve_1(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepOffset_ListOfInterval extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: BRepOffset_ListOfInterval): BRepOffset_ListOfInterval;
  Clear(theAllocator: any): void;
  First_1(): BRepOffset_Interval;
  First_2(): BRepOffset_Interval;
  Last_1(): BRepOffset_Interval;
  Last_2(): BRepOffset_Interval;
  Append_1(theItem: BRepOffset_Interval): BRepOffset_Interval;
  Append_3(theOther: BRepOffset_ListOfInterval): void;
  Prepend_1(theItem: BRepOffset_Interval): BRepOffset_Interval;
  Prepend_2(theOther: BRepOffset_ListOfInterval): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class BRepOffset_ListOfInterval_1 extends BRepOffset_ListOfInterval {
    constructor();
  }

  export declare class BRepOffset_ListOfInterval_2 extends BRepOffset_ListOfInterval {
    constructor(theAllocator: any);
  }

  export declare class BRepOffset_ListOfInterval_3 extends BRepOffset_ListOfInterval {
    constructor(theOther: BRepOffset_ListOfInterval);
  }

export declare class BRepOffset_DataMapOfShapeListOfInterval extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepOffset_DataMapOfShapeListOfInterval): void;
  Assign(theOther: BRepOffset_DataMapOfShapeListOfInterval): BRepOffset_DataMapOfShapeListOfInterval;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: BRepOffset_ListOfInterval): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: BRepOffset_ListOfInterval): BRepOffset_ListOfInterval;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): BRepOffset_ListOfInterval;
  Find_1(theKey: TopoDS_Shape): BRepOffset_ListOfInterval;
  Find_2(theKey: TopoDS_Shape, theValue: BRepOffset_ListOfInterval): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): BRepOffset_ListOfInterval;
  ChangeFind(theKey: TopoDS_Shape): BRepOffset_ListOfInterval;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepOffset_DataMapOfShapeListOfInterval_1 extends BRepOffset_DataMapOfShapeListOfInterval {
    constructor();
  }

  export declare class BRepOffset_DataMapOfShapeListOfInterval_2 extends BRepOffset_DataMapOfShapeListOfInterval {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepOffset_DataMapOfShapeListOfInterval_3 extends BRepOffset_DataMapOfShapeListOfInterval {
    constructor(theOther: BRepOffset_DataMapOfShapeListOfInterval);
  }

export declare class BRepOffset_DataMapOfShapeMapOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepOffset_DataMapOfShapeMapOfShape): void;
  Assign(theOther: BRepOffset_DataMapOfShapeMapOfShape): BRepOffset_DataMapOfShapeMapOfShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopTools_MapOfShape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopTools_MapOfShape): TopTools_MapOfShape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopTools_MapOfShape;
  Find_1(theKey: TopoDS_Shape): TopTools_MapOfShape;
  Find_2(theKey: TopoDS_Shape, theValue: TopTools_MapOfShape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopTools_MapOfShape;
  ChangeFind(theKey: TopoDS_Shape): TopTools_MapOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepOffset_DataMapOfShapeMapOfShape_1 extends BRepOffset_DataMapOfShapeMapOfShape {
    constructor();
  }

  export declare class BRepOffset_DataMapOfShapeMapOfShape_2 extends BRepOffset_DataMapOfShapeMapOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepOffset_DataMapOfShapeMapOfShape_3 extends BRepOffset_DataMapOfShapeMapOfShape {
    constructor(theOther: BRepOffset_DataMapOfShapeMapOfShape);
  }

export declare class BRepOffset_DataMapOfShapeOffset extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepOffset_DataMapOfShapeOffset): void;
  Assign(theOther: BRepOffset_DataMapOfShapeOffset): BRepOffset_DataMapOfShapeOffset;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: BRepOffset_Offset): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: BRepOffset_Offset): BRepOffset_Offset;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): BRepOffset_Offset;
  Find_1(theKey: TopoDS_Shape): BRepOffset_Offset;
  Find_2(theKey: TopoDS_Shape, theValue: BRepOffset_Offset): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): BRepOffset_Offset;
  ChangeFind(theKey: TopoDS_Shape): BRepOffset_Offset;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepOffset_DataMapOfShapeOffset_1 extends BRepOffset_DataMapOfShapeOffset {
    constructor();
  }

  export declare class BRepOffset_DataMapOfShapeOffset_2 extends BRepOffset_DataMapOfShapeOffset {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepOffset_DataMapOfShapeOffset_3 extends BRepOffset_DataMapOfShapeOffset {
    constructor(theOther: BRepOffset_DataMapOfShapeOffset);
  }

export declare class Handle_BRepOffset_SimpleOffset {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepOffset_SimpleOffset): void;
  get(): BRepOffset_SimpleOffset;
}

  export declare class Handle_BRepOffset_SimpleOffset_1 extends Handle_BRepOffset_SimpleOffset {
    constructor();
  }

  export declare class Handle_BRepOffset_SimpleOffset_2 extends Handle_BRepOffset_SimpleOffset {
    constructor(thePtr: BRepOffset_SimpleOffset);
  }

  export declare class Handle_BRepOffset_SimpleOffset_3 extends Handle_BRepOffset_SimpleOffset {
    constructor(theHandle: Handle_BRepOffset_SimpleOffset);
  }

  export declare class Handle_BRepOffset_SimpleOffset_4 extends Handle_BRepOffset_SimpleOffset {
    constructor(theHandle: Handle_BRepOffset_SimpleOffset);
  }

export declare class BRepOffsetAPI_SequenceOfSequenceOfShape extends NCollection_BaseSequence {
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
  Assign(theOther: BRepOffsetAPI_SequenceOfSequenceOfShape): BRepOffsetAPI_SequenceOfSequenceOfShape;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TopTools_SequenceOfShape): void;
  Append_2(theSeq: BRepOffsetAPI_SequenceOfSequenceOfShape): void;
  Prepend_1(theItem: TopTools_SequenceOfShape): void;
  Prepend_2(theSeq: BRepOffsetAPI_SequenceOfSequenceOfShape): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TopTools_SequenceOfShape): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: BRepOffsetAPI_SequenceOfSequenceOfShape): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: BRepOffsetAPI_SequenceOfSequenceOfShape): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TopTools_SequenceOfShape): void;
  Split(theIndex: Standard_Integer, theSeq: BRepOffsetAPI_SequenceOfSequenceOfShape): void;
  First(): TopTools_SequenceOfShape;
  ChangeFirst(): TopTools_SequenceOfShape;
  Last(): TopTools_SequenceOfShape;
  ChangeLast(): TopTools_SequenceOfShape;
  Value(theIndex: Standard_Integer): TopTools_SequenceOfShape;
  ChangeValue(theIndex: Standard_Integer): TopTools_SequenceOfShape;
  SetValue(theIndex: Standard_Integer, theItem: TopTools_SequenceOfShape): void;
}

  export declare class BRepOffsetAPI_SequenceOfSequenceOfShape_1 extends BRepOffsetAPI_SequenceOfSequenceOfShape {
    constructor();
  }

  export declare class BRepOffsetAPI_SequenceOfSequenceOfShape_2 extends BRepOffsetAPI_SequenceOfSequenceOfShape {
    constructor(theAllocator: any);
  }

  export declare class BRepOffsetAPI_SequenceOfSequenceOfShape_3 extends BRepOffsetAPI_SequenceOfSequenceOfShape {
    constructor(theOther: BRepOffsetAPI_SequenceOfSequenceOfShape);
  }

export declare class BRepOffsetAPI_SequenceOfSequenceOfReal extends NCollection_BaseSequence {
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
  Assign(theOther: BRepOffsetAPI_SequenceOfSequenceOfReal): BRepOffsetAPI_SequenceOfSequenceOfReal;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TColStd_SequenceOfReal): void;
  Append_2(theSeq: BRepOffsetAPI_SequenceOfSequenceOfReal): void;
  Prepend_1(theItem: TColStd_SequenceOfReal): void;
  Prepend_2(theSeq: BRepOffsetAPI_SequenceOfSequenceOfReal): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TColStd_SequenceOfReal): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: BRepOffsetAPI_SequenceOfSequenceOfReal): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: BRepOffsetAPI_SequenceOfSequenceOfReal): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TColStd_SequenceOfReal): void;
  Split(theIndex: Standard_Integer, theSeq: BRepOffsetAPI_SequenceOfSequenceOfReal): void;
  First(): TColStd_SequenceOfReal;
  ChangeFirst(): TColStd_SequenceOfReal;
  Last(): TColStd_SequenceOfReal;
  ChangeLast(): TColStd_SequenceOfReal;
  Value(theIndex: Standard_Integer): TColStd_SequenceOfReal;
  ChangeValue(theIndex: Standard_Integer): TColStd_SequenceOfReal;
  SetValue(theIndex: Standard_Integer, theItem: TColStd_SequenceOfReal): void;
}

  export declare class BRepOffsetAPI_SequenceOfSequenceOfReal_1 extends BRepOffsetAPI_SequenceOfSequenceOfReal {
    constructor();
  }

  export declare class BRepOffsetAPI_SequenceOfSequenceOfReal_2 extends BRepOffsetAPI_SequenceOfSequenceOfReal {
    constructor(theAllocator: any);
  }

  export declare class BRepOffsetAPI_SequenceOfSequenceOfReal_3 extends BRepOffsetAPI_SequenceOfSequenceOfReal {
    constructor(theOther: BRepOffsetAPI_SequenceOfSequenceOfReal);
  }

export declare class Handle_BiTgte_HCurveOnEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BiTgte_HCurveOnEdge): void;
  get(): BiTgte_HCurveOnEdge;
}

  export declare class Handle_BiTgte_HCurveOnEdge_1 extends Handle_BiTgte_HCurveOnEdge {
    constructor();
  }

  export declare class Handle_BiTgte_HCurveOnEdge_2 extends Handle_BiTgte_HCurveOnEdge {
    constructor(thePtr: BiTgte_HCurveOnEdge);
  }

  export declare class Handle_BiTgte_HCurveOnEdge_3 extends Handle_BiTgte_HCurveOnEdge {
    constructor(theHandle: Handle_BiTgte_HCurveOnEdge);
  }

  export declare class Handle_BiTgte_HCurveOnEdge_4 extends Handle_BiTgte_HCurveOnEdge {
    constructor(theHandle: Handle_BiTgte_HCurveOnEdge);
  }

export declare class Handle_BiTgte_HCurveOnVertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BiTgte_HCurveOnVertex): void;
  get(): BiTgte_HCurveOnVertex;
}

  export declare class Handle_BiTgte_HCurveOnVertex_1 extends Handle_BiTgte_HCurveOnVertex {
    constructor();
  }

  export declare class Handle_BiTgte_HCurveOnVertex_2 extends Handle_BiTgte_HCurveOnVertex {
    constructor(thePtr: BiTgte_HCurveOnVertex);
  }

  export declare class Handle_BiTgte_HCurveOnVertex_3 extends Handle_BiTgte_HCurveOnVertex {
    constructor(theHandle: Handle_BiTgte_HCurveOnVertex);
  }

  export declare class Handle_BiTgte_HCurveOnVertex_4 extends Handle_BiTgte_HCurveOnVertex {
    constructor(theHandle: Handle_BiTgte_HCurveOnVertex);
  }

export declare class Draft_IndexedDataMapOfEdgeEdgeInfo extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Draft_IndexedDataMapOfEdgeEdgeInfo): void;
  Assign(theOther: Draft_IndexedDataMapOfEdgeEdgeInfo): Draft_IndexedDataMapOfEdgeEdgeInfo;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Edge, theItem: Draft_EdgeInfo): Standard_Integer;
  Contains(theKey1: TopoDS_Edge): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Edge, theItem: Draft_EdgeInfo): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Edge): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Edge;
  FindFromIndex(theIndex: Standard_Integer): Draft_EdgeInfo;
  ChangeFromIndex(theIndex: Standard_Integer): Draft_EdgeInfo;
  FindIndex(theKey1: TopoDS_Edge): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Edge): Draft_EdgeInfo;
  ChangeFromKey(theKey1: TopoDS_Edge): Draft_EdgeInfo;
  Seek(theKey1: TopoDS_Edge): Draft_EdgeInfo;
  ChangeSeek(theKey1: TopoDS_Edge): Draft_EdgeInfo;
  FindFromKey_2(theKey1: TopoDS_Edge, theValue: Draft_EdgeInfo): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class Draft_IndexedDataMapOfEdgeEdgeInfo_1 extends Draft_IndexedDataMapOfEdgeEdgeInfo {
    constructor();
  }

  export declare class Draft_IndexedDataMapOfEdgeEdgeInfo_2 extends Draft_IndexedDataMapOfEdgeEdgeInfo {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class Draft_IndexedDataMapOfEdgeEdgeInfo_3 extends Draft_IndexedDataMapOfEdgeEdgeInfo {
    constructor(theOther: Draft_IndexedDataMapOfEdgeEdgeInfo);
  }

export declare class Draft_IndexedDataMapOfFaceFaceInfo extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Draft_IndexedDataMapOfFaceFaceInfo): void;
  Assign(theOther: Draft_IndexedDataMapOfFaceFaceInfo): Draft_IndexedDataMapOfFaceFaceInfo;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Face, theItem: Draft_FaceInfo): Standard_Integer;
  Contains(theKey1: TopoDS_Face): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Face, theItem: Draft_FaceInfo): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Face): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Face;
  FindFromIndex(theIndex: Standard_Integer): Draft_FaceInfo;
  ChangeFromIndex(theIndex: Standard_Integer): Draft_FaceInfo;
  FindIndex(theKey1: TopoDS_Face): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Face): Draft_FaceInfo;
  ChangeFromKey(theKey1: TopoDS_Face): Draft_FaceInfo;
  Seek(theKey1: TopoDS_Face): Draft_FaceInfo;
  ChangeSeek(theKey1: TopoDS_Face): Draft_FaceInfo;
  FindFromKey_2(theKey1: TopoDS_Face, theValue: Draft_FaceInfo): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class Draft_IndexedDataMapOfFaceFaceInfo_1 extends Draft_IndexedDataMapOfFaceFaceInfo {
    constructor();
  }

  export declare class Draft_IndexedDataMapOfFaceFaceInfo_2 extends Draft_IndexedDataMapOfFaceFaceInfo {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class Draft_IndexedDataMapOfFaceFaceInfo_3 extends Draft_IndexedDataMapOfFaceFaceInfo {
    constructor(theOther: Draft_IndexedDataMapOfFaceFaceInfo);
  }

export declare class Draft_IndexedDataMapOfVertexVertexInfo extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Draft_IndexedDataMapOfVertexVertexInfo): void;
  Assign(theOther: Draft_IndexedDataMapOfVertexVertexInfo): Draft_IndexedDataMapOfVertexVertexInfo;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Vertex, theItem: Draft_VertexInfo): Standard_Integer;
  Contains(theKey1: TopoDS_Vertex): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Vertex, theItem: Draft_VertexInfo): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Vertex): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Vertex;
  FindFromIndex(theIndex: Standard_Integer): Draft_VertexInfo;
  ChangeFromIndex(theIndex: Standard_Integer): Draft_VertexInfo;
  FindIndex(theKey1: TopoDS_Vertex): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Vertex): Draft_VertexInfo;
  ChangeFromKey(theKey1: TopoDS_Vertex): Draft_VertexInfo;
  Seek(theKey1: TopoDS_Vertex): Draft_VertexInfo;
  ChangeSeek(theKey1: TopoDS_Vertex): Draft_VertexInfo;
  FindFromKey_2(theKey1: TopoDS_Vertex, theValue: Draft_VertexInfo): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class Draft_IndexedDataMapOfVertexVertexInfo_1 extends Draft_IndexedDataMapOfVertexVertexInfo {
    constructor();
  }

  export declare class Draft_IndexedDataMapOfVertexVertexInfo_2 extends Draft_IndexedDataMapOfVertexVertexInfo {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class Draft_IndexedDataMapOfVertexVertexInfo_3 extends Draft_IndexedDataMapOfVertexVertexInfo {
    constructor(theOther: Draft_IndexedDataMapOfVertexVertexInfo);
  }

export declare class Handle_Draft_Modification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Draft_Modification): void;
  get(): Draft_Modification;
}

  export declare class Handle_Draft_Modification_1 extends Handle_Draft_Modification {
    constructor();
  }

  export declare class Handle_Draft_Modification_2 extends Handle_Draft_Modification {
    constructor(thePtr: Draft_Modification);
  }

  export declare class Handle_Draft_Modification_3 extends Handle_Draft_Modification {
    constructor(theHandle: Handle_Draft_Modification);
  }

  export declare class Handle_Draft_Modification_4 extends Handle_Draft_Modification {
    constructor(theHandle: Handle_Draft_Modification);
  }

export declare type BRepOffset_Status = {
  BRepOffset_Good: {};
  BRepOffset_Reversed: {};
  BRepOffset_Degenerated: {};
  BRepOffset_Unknown: {};
}

export declare type BRepOffset_Error = {
  BRepOffset_NoError: {};
  BRepOffset_UnknownError: {};
  BRepOffset_BadNormalsOnGeometry: {};
  BRepOffset_C0Geometry: {};
  BRepOffset_NullOffset: {};
  BRepOffset_NotConnectedShell: {};
  BRepOffset_CannotTrimEdges: {};
  BRepOffset_CannotFuseVertices: {};
  BRepOffset_CannotExtentEdge: {};
}

export declare type BRepOffset_Mode = {
  BRepOffset_Skin: {};
  BRepOffset_Pipe: {};
  BRepOffset_RectoVerso: {};
}

export declare type BRepOffsetSimple_Status = {
  BRepOffsetSimple_OK: {};
  BRepOffsetSimple_NullInputShape: {};
  BRepOffsetSimple_ErrorOffsetComputation: {};
  BRepOffsetSimple_ErrorWallFaceComputation: {};
  BRepOffsetSimple_ErrorInvalidNbShells: {};
  BRepOffsetSimple_ErrorNonClosedShell: {};
}

export declare type Draft_ErrorStatus = {
  Draft_NoError: {};
  Draft_FaceRecomputation: {};
  Draft_EdgeRecomputation: {};
  Draft_VertexRecomputation: {};
}

export declare type BiTgte_ContactType = {
  BiTgte_FaceFace: {};
  BiTgte_FaceEdge: {};
  BiTgte_FaceVertex: {};
  BiTgte_EdgeEdge: {};
  BiTgte_EdgeVertex: {};
  BiTgte_VertexVertex: {};
}

export declare type TKOffsetLib = {
  BRepOffset_Interval_1: typeof BRepOffset_Interval_1;
  BRepOffset_Interval_2: typeof BRepOffset_Interval_2;
  BRepOffset_Analyse_1: typeof BRepOffset_Analyse_1;
  BRepOffset_Analyse_2: typeof BRepOffset_Analyse_2;
  BRepOffset_Offset_1: typeof BRepOffset_Offset_1;
  BRepOffset_Offset_2: typeof BRepOffset_Offset_2;
  BRepOffset_Offset_3: typeof BRepOffset_Offset_3;
  BRepOffset_Offset_4: typeof BRepOffset_Offset_4;
  BRepOffset_Offset_5: typeof BRepOffset_Offset_5;
  BRepOffset_Offset_6: typeof BRepOffset_Offset_6;
  BRepOffset_Inter3d: typeof BRepOffset_Inter3d;
  BRepOffset_MakeLoops: typeof BRepOffset_MakeLoops;
  BRepOffset_MakeSimpleOffset_1: typeof BRepOffset_MakeSimpleOffset_1;
  BRepOffset_MakeSimpleOffset_2: typeof BRepOffset_MakeSimpleOffset_2;
  BRepOffset_SimpleOffset: typeof BRepOffset_SimpleOffset;
  BRepOffsetAPI_DraftAngle_1: typeof BRepOffsetAPI_DraftAngle_1;
  BRepOffsetAPI_DraftAngle_2: typeof BRepOffsetAPI_DraftAngle_2;
  BRepOffsetAPI_MakeDraft: typeof BRepOffsetAPI_MakeDraft;
  BRepOffsetAPI_MakeEvolved_1: typeof BRepOffsetAPI_MakeEvolved_1;
  BRepOffsetAPI_MakeEvolved_2: typeof BRepOffsetAPI_MakeEvolved_2;
  BRepOffsetAPI_MakeFilling: typeof BRepOffsetAPI_MakeFilling;
  BRepOffsetAPI_MakeOffset_1: typeof BRepOffsetAPI_MakeOffset_1;
  BRepOffsetAPI_MakeOffset_2: typeof BRepOffsetAPI_MakeOffset_2;
  BRepOffsetAPI_MakeOffset_3: typeof BRepOffsetAPI_MakeOffset_3;
  BRepOffsetAPI_MakeOffsetShape_1: typeof BRepOffsetAPI_MakeOffsetShape_1;
  BRepOffsetAPI_MakeOffsetShape_2: typeof BRepOffsetAPI_MakeOffsetShape_2;
  BRepOffsetAPI_MakePipe_1: typeof BRepOffsetAPI_MakePipe_1;
  BRepOffsetAPI_MakePipe_2: typeof BRepOffsetAPI_MakePipe_2;
  BRepOffsetAPI_MakePipeShell: typeof BRepOffsetAPI_MakePipeShell;
  BRepOffsetAPI_MakeThickSolid_1: typeof BRepOffsetAPI_MakeThickSolid_1;
  BRepOffsetAPI_MakeThickSolid_2: typeof BRepOffsetAPI_MakeThickSolid_2;
  BRepOffsetAPI_MiddlePath: typeof BRepOffsetAPI_MiddlePath;
  BRepOffsetAPI_NormalProjection_1: typeof BRepOffsetAPI_NormalProjection_1;
  BRepOffsetAPI_NormalProjection_2: typeof BRepOffsetAPI_NormalProjection_2;
  BRepOffsetAPI_ThruSections: typeof BRepOffsetAPI_ThruSections;
  BiTgte_Blend_1: typeof BiTgte_Blend_1;
  BiTgte_Blend_2: typeof BiTgte_Blend_2;
  BiTgte_CurveOnEdge_1: typeof BiTgte_CurveOnEdge_1;
  BiTgte_CurveOnEdge_2: typeof BiTgte_CurveOnEdge_2;
  BiTgte_CurveOnVertex_1: typeof BiTgte_CurveOnVertex_1;
  BiTgte_CurveOnVertex_2: typeof BiTgte_CurveOnVertex_2;
  BiTgte_HCurveOnEdge_1: typeof BiTgte_HCurveOnEdge_1;
  BiTgte_HCurveOnEdge_2: typeof BiTgte_HCurveOnEdge_2;
  BiTgte_HCurveOnVertex_1: typeof BiTgte_HCurveOnVertex_1;
  BiTgte_HCurveOnVertex_2: typeof BiTgte_HCurveOnVertex_2;
  Draft_EdgeInfo_1: typeof Draft_EdgeInfo_1;
  Draft_EdgeInfo_2: typeof Draft_EdgeInfo_2;
  Draft_FaceInfo_1: typeof Draft_FaceInfo_1;
  Draft_FaceInfo_2: typeof Draft_FaceInfo_2;
  Draft_VertexInfo: typeof Draft_VertexInfo;
  Draft_Modification: typeof Draft_Modification;
  BRepOffset_ListOfInterval_1: typeof BRepOffset_ListOfInterval_1;
  BRepOffset_ListOfInterval_2: typeof BRepOffset_ListOfInterval_2;
  BRepOffset_ListOfInterval_3: typeof BRepOffset_ListOfInterval_3;
  BRepOffset_DataMapOfShapeListOfInterval_1: typeof BRepOffset_DataMapOfShapeListOfInterval_1;
  BRepOffset_DataMapOfShapeListOfInterval_2: typeof BRepOffset_DataMapOfShapeListOfInterval_2;
  BRepOffset_DataMapOfShapeListOfInterval_3: typeof BRepOffset_DataMapOfShapeListOfInterval_3;
  BRepOffset_DataMapOfShapeMapOfShape_1: typeof BRepOffset_DataMapOfShapeMapOfShape_1;
  BRepOffset_DataMapOfShapeMapOfShape_2: typeof BRepOffset_DataMapOfShapeMapOfShape_2;
  BRepOffset_DataMapOfShapeMapOfShape_3: typeof BRepOffset_DataMapOfShapeMapOfShape_3;
  BRepOffset_DataMapOfShapeOffset_1: typeof BRepOffset_DataMapOfShapeOffset_1;
  BRepOffset_DataMapOfShapeOffset_2: typeof BRepOffset_DataMapOfShapeOffset_2;
  BRepOffset_DataMapOfShapeOffset_3: typeof BRepOffset_DataMapOfShapeOffset_3;
  Handle_BRepOffset_SimpleOffset_1: typeof Handle_BRepOffset_SimpleOffset_1;
  Handle_BRepOffset_SimpleOffset_2: typeof Handle_BRepOffset_SimpleOffset_2;
  Handle_BRepOffset_SimpleOffset_3: typeof Handle_BRepOffset_SimpleOffset_3;
  Handle_BRepOffset_SimpleOffset_4: typeof Handle_BRepOffset_SimpleOffset_4;
  BRepOffsetAPI_SequenceOfSequenceOfShape_1: typeof BRepOffsetAPI_SequenceOfSequenceOfShape_1;
  BRepOffsetAPI_SequenceOfSequenceOfShape_2: typeof BRepOffsetAPI_SequenceOfSequenceOfShape_2;
  BRepOffsetAPI_SequenceOfSequenceOfShape_3: typeof BRepOffsetAPI_SequenceOfSequenceOfShape_3;
  BRepOffsetAPI_SequenceOfSequenceOfReal_1: typeof BRepOffsetAPI_SequenceOfSequenceOfReal_1;
  BRepOffsetAPI_SequenceOfSequenceOfReal_2: typeof BRepOffsetAPI_SequenceOfSequenceOfReal_2;
  BRepOffsetAPI_SequenceOfSequenceOfReal_3: typeof BRepOffsetAPI_SequenceOfSequenceOfReal_3;
  Handle_BiTgte_HCurveOnEdge_1: typeof Handle_BiTgte_HCurveOnEdge_1;
  Handle_BiTgte_HCurveOnEdge_2: typeof Handle_BiTgte_HCurveOnEdge_2;
  Handle_BiTgte_HCurveOnEdge_3: typeof Handle_BiTgte_HCurveOnEdge_3;
  Handle_BiTgte_HCurveOnEdge_4: typeof Handle_BiTgte_HCurveOnEdge_4;
  Handle_BiTgte_HCurveOnVertex_1: typeof Handle_BiTgte_HCurveOnVertex_1;
  Handle_BiTgte_HCurveOnVertex_2: typeof Handle_BiTgte_HCurveOnVertex_2;
  Handle_BiTgte_HCurveOnVertex_3: typeof Handle_BiTgte_HCurveOnVertex_3;
  Handle_BiTgte_HCurveOnVertex_4: typeof Handle_BiTgte_HCurveOnVertex_4;
  Draft_IndexedDataMapOfEdgeEdgeInfo_1: typeof Draft_IndexedDataMapOfEdgeEdgeInfo_1;
  Draft_IndexedDataMapOfEdgeEdgeInfo_2: typeof Draft_IndexedDataMapOfEdgeEdgeInfo_2;
  Draft_IndexedDataMapOfEdgeEdgeInfo_3: typeof Draft_IndexedDataMapOfEdgeEdgeInfo_3;
  Draft_IndexedDataMapOfFaceFaceInfo_1: typeof Draft_IndexedDataMapOfFaceFaceInfo_1;
  Draft_IndexedDataMapOfFaceFaceInfo_2: typeof Draft_IndexedDataMapOfFaceFaceInfo_2;
  Draft_IndexedDataMapOfFaceFaceInfo_3: typeof Draft_IndexedDataMapOfFaceFaceInfo_3;
  Draft_IndexedDataMapOfVertexVertexInfo_1: typeof Draft_IndexedDataMapOfVertexVertexInfo_1;
  Draft_IndexedDataMapOfVertexVertexInfo_2: typeof Draft_IndexedDataMapOfVertexVertexInfo_2;
  Draft_IndexedDataMapOfVertexVertexInfo_3: typeof Draft_IndexedDataMapOfVertexVertexInfo_3;
  Handle_Draft_Modification_1: typeof Handle_Draft_Modification_1;
  Handle_Draft_Modification_2: typeof Handle_Draft_Modification_2;
  Handle_Draft_Modification_3: typeof Handle_Draft_Modification_3;
  Handle_Draft_Modification_4: typeof Handle_Draft_Modification_4;
  BRepOffset_Status: typeof BRepOffset_Status;
  BRepOffset_Error: typeof BRepOffset_Error;
  BRepOffset_Mode: typeof BRepOffset_Mode;
  BRepOffsetSimple_Status: typeof BRepOffsetSimple_Status;
  Draft_ErrorStatus: typeof Draft_ErrorStatus;
  BiTgte_ContactType: typeof BiTgte_ContactType;
};
