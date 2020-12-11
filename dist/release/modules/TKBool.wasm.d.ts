declare const libName = "./modules/TKBool.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BRepAlgo {
  constructor();
  ConcatenateWire(Wire: TopoDS_Wire, Option: GeomAbs_Shape, AngularTolerance: Standard_Real): TopoDS_Wire;
  ConcatenateWireC0(Wire: TopoDS_Wire): TopoDS_Edge;
  IsValid_1(S: TopoDS_Shape): Standard_Boolean;
  IsValid_2(theArgs: TopTools_ListOfShape, theResult: TopoDS_Shape, closedSolid: Standard_Boolean, GeomCtrl: Standard_Boolean): Standard_Boolean;
  IsTopologicallyValid(S: TopoDS_Shape): Standard_Boolean;
}

export declare class BRepAlgo_AsDes extends Standard_Transient {
  constructor()
  Clear(): void;
  Add_1(S: TopoDS_Shape, SS: TopoDS_Shape): void;
  Add_2(S: TopoDS_Shape, SS: TopTools_ListOfShape): void;
  HasAscendant(S: TopoDS_Shape): Standard_Boolean;
  HasDescendant(S: TopoDS_Shape): Standard_Boolean;
  Ascendant(S: TopoDS_Shape): TopTools_ListOfShape;
  Descendant(S: TopoDS_Shape): TopTools_ListOfShape;
  ChangeDescendant(S: TopoDS_Shape): TopTools_ListOfShape;
  Replace(OldS: TopoDS_Shape, NewS: TopoDS_Shape): void;
  Remove(S: TopoDS_Shape): void;
  HasCommonDescendant(S1: TopoDS_Shape, S2: TopoDS_Shape, LC: TopTools_ListOfShape): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepAlgo_BooleanOperation extends BRepBuilderAPI_MakeShape {
  PerformDS(): void;
  Perform(St1: TopAbs_State, St2: TopAbs_State): void;
  Builder(): any;
  Shape1(): TopoDS_Shape;
  Shape2(): TopoDS_Shape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
}

export declare class BRepAlgo_Common extends BRepAlgo_BooleanOperation {
  constructor(S1: TopoDS_Shape, S2: TopoDS_Shape)
}

export declare class BRepAlgo_Cut extends BRepAlgo_BooleanOperation {
  constructor(S1: TopoDS_Shape, S2: TopoDS_Shape)
}

export declare class BRepAlgo_FaceRestrictor {
  constructor()
  Init(F: TopoDS_Face, Proj: Standard_Boolean, ControlOrientation: Standard_Boolean): void;
  Add(W: TopoDS_Wire): void;
  Clear(): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Face;
}

export declare class BRepAlgo_Fuse extends BRepAlgo_BooleanOperation {
  constructor(S1: TopoDS_Shape, S2: TopoDS_Shape)
}

export declare class BRepAlgo_Image {
  constructor()
  SetRoot(S: TopoDS_Shape): void;
  Bind_1(OldS: TopoDS_Shape, NewS: TopoDS_Shape): void;
  Bind_2(OldS: TopoDS_Shape, NewS: TopTools_ListOfShape): void;
  Add_1(OldS: TopoDS_Shape, NewS: TopoDS_Shape): void;
  Add_2(OldS: TopoDS_Shape, NewS: TopTools_ListOfShape): void;
  Clear(): void;
  Remove(S: TopoDS_Shape): void;
  RemoveRoot(Root: TopoDS_Shape): void;
  ReplaceRoot(OldRoot: TopoDS_Shape, NewRoot: TopoDS_Shape): void;
  Roots(): TopTools_ListOfShape;
  IsImage(S: TopoDS_Shape): Standard_Boolean;
  ImageFrom(S: TopoDS_Shape): TopoDS_Shape;
  Root(S: TopoDS_Shape): TopoDS_Shape;
  HasImage(S: TopoDS_Shape): Standard_Boolean;
  Image(S: TopoDS_Shape): TopTools_ListOfShape;
  LastImage(S: TopoDS_Shape, L: TopTools_ListOfShape): void;
  Compact(): void;
  Filter(S: TopoDS_Shape, ShapeType: TopAbs_ShapeEnum): void;
}

export declare class BRepAlgo_Loop {
  constructor()
  Init(F: TopoDS_Face): void;
  AddEdge(E: TopoDS_Edge, LV: TopTools_ListOfShape): void;
  AddConstEdge(E: TopoDS_Edge): void;
  AddConstEdges(LE: TopTools_ListOfShape): void;
  Perform(): void;
  CutEdge(E: TopoDS_Edge, VonE: TopTools_ListOfShape, NE: TopTools_ListOfShape): void;
  NewWires(): TopTools_ListOfShape;
  WiresToFaces(): void;
  NewFaces(): TopTools_ListOfShape;
  NewEdges(E: TopoDS_Edge): TopTools_ListOfShape;
  GetVerticesForSubstitute(VerVerMap: TopTools_DataMapOfShapeShape): void;
  VerticesForSubstitute(VerVerMap: TopTools_DataMapOfShapeShape): void;
}

export declare class BRepAlgo_NormalProjection {
  Init(S: TopoDS_Shape): void;
  Add(ToProj: TopoDS_Shape): void;
  SetParams(Tol3D: Standard_Real, Tol2D: Standard_Real, InternalContinuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSeg: Standard_Integer): void;
  SetDefaultParams(): void;
  SetMaxDistance(MaxDist: Standard_Real): void;
  Compute3d(With3d: Standard_Boolean): void;
  SetLimit(FaceBoundaries: Standard_Boolean): void;
  Build(): void;
  IsDone(): Standard_Boolean;
  Projection(): TopoDS_Shape;
  Ancestor(E: TopoDS_Edge): TopoDS_Shape;
  Couple(E: TopoDS_Edge): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  IsElementary(C: Adaptor3d_Curve): Standard_Boolean;
  BuildWire(Liste: TopTools_ListOfShape): Standard_Boolean;
}

  export declare class BRepAlgo_NormalProjection_1 extends BRepAlgo_NormalProjection {
    constructor();
  }

  export declare class BRepAlgo_NormalProjection_2 extends BRepAlgo_NormalProjection {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepAlgo_Section extends BRepAlgo_BooleanOperation {
  Init1_1(S1: TopoDS_Shape): void;
  Init1_2(Pl: gp_Pln): void;
  Init1_3(Sf: any): void;
  Init2_1(S2: TopoDS_Shape): void;
  Init2_2(Pl: gp_Pln): void;
  Init2_3(Sf: any): void;
  Approximation(B: Standard_Boolean): void;
  ComputePCurveOn1(B: Standard_Boolean): void;
  ComputePCurveOn2(B: Standard_Boolean): void;
  Build(): void;
  HasAncestorFaceOn1(E: TopoDS_Shape, F: TopoDS_Shape): Standard_Boolean;
  HasAncestorFaceOn2(E: TopoDS_Shape, F: TopoDS_Shape): Standard_Boolean;
}

  export declare class BRepAlgo_Section_1 extends BRepAlgo_Section {
    constructor(Sh1: TopoDS_Shape, Sh2: TopoDS_Shape, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgo_Section_2 extends BRepAlgo_Section {
    constructor(Sh: TopoDS_Shape, Pl: gp_Pln, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgo_Section_3 extends BRepAlgo_Section {
    constructor(Sh: TopoDS_Shape, Sf: any, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgo_Section_4 extends BRepAlgo_Section {
    constructor(Sf: any, Sh: TopoDS_Shape, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgo_Section_5 extends BRepAlgo_Section {
    constructor(Sf1: any, Sf2: any, PerformNow: Standard_Boolean);
  }

export declare class BRepAlgo_Tool {
  constructor();
  Deboucle3D(S: TopoDS_Shape, Boundary: TopTools_MapOfShape): TopoDS_Shape;
}

export declare class BRepFill {
  constructor();
  Face(Edge1: TopoDS_Edge, Edge2: TopoDS_Edge): TopoDS_Face;
  Shell(Wire1: TopoDS_Wire, Wire2: TopoDS_Wire): TopoDS_Shell;
  Axe(Spine: TopoDS_Shape, Profile: TopoDS_Wire, AxeProf: gp_Ax3, ProfOnSpine: Standard_Boolean, Tol: Standard_Real): void;
  ComputeACR(wire: TopoDS_Wire, ACR: TColStd_Array1OfReal): void;
  InsertACR(wire: TopoDS_Wire, ACRcuts: TColStd_Array1OfReal, prec: Standard_Real): TopoDS_Wire;
}

export declare class BRepFill_LocationLaw extends Standard_Transient {
  constructor();
  GetStatus(): GeomFill_PipeError;
  TransformInG0Law(): void;
  TransformInCompatibleLaw(AngularTolerance: Standard_Real): void;
  DeleteTransform(): void;
  NbHoles(Tol: Standard_Real): Standard_Integer;
  Holes(Interval: TColStd_Array1OfInteger): void;
  NbLaw(): Standard_Integer;
  Law(Index: Standard_Integer): any;
  Wire(): TopoDS_Wire;
  Edge(Index: Standard_Integer): TopoDS_Edge;
  Vertex(Index: Standard_Integer): TopoDS_Vertex;
  PerformVertex(Index: Standard_Integer, InputVertex: TopoDS_Vertex, TolMin: Standard_Real, OutputVertex: TopoDS_Vertex, Location: Standard_Integer): void;
  CurvilinearBounds(Index: Standard_Integer, First: Standard_Real, Last: Standard_Real): void;
  IsClosed(): Standard_Boolean;
  IsG1(Index: Standard_Integer, SpatialTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Integer;
  D0(Abscissa: Standard_Real, Section: TopoDS_Shape): void;
  Parameter(Abscissa: Standard_Real, Index: Standard_Integer, Param: Standard_Real): void;
  Abscissa(Index: Standard_Integer, Param: Standard_Real): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepFill_ACRLaw extends BRepFill_LocationLaw {
  constructor(Path: TopoDS_Wire, Law: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepFill_AdvancedEvolved {
  constructor()
  Perform(theSpine: TopoDS_Wire, theProfile: TopoDS_Wire, theTolerance: Standard_Real, theSolidReq: Standard_Boolean): void;
  IsDone(theErrorCode: number): Standard_Boolean;
  Shape(): TopoDS_Shape;
  SetTemporaryDirectory(thePath: Standard_CString): void;
  SetParallelMode(theVal: Standard_Boolean): void;
}

export declare class BRepFill_MultiLine extends AppCont_Function {
  IsParticularCase(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Curves(Curve: any, PCurve1: any, PCurve2: any): void;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Value_1(U: Standard_Real): gp_Pnt;
  ValueOnF1(U: Standard_Real): gp_Pnt2d;
  ValueOnF2(U: Standard_Real): gp_Pnt2d;
  Value3dOnF1OnF2(U: Standard_Real, P3d: gp_Pnt, PF1: gp_Pnt2d, PF2: gp_Pnt2d): void;
  Value_2(theU: Standard_Real, thePnt2d: NCollection_Array1<gp_Pnt2d>, thePnt: NCollection_Array1<gp_Pnt>): Standard_Boolean;
  D1(theU: Standard_Real, theVec2d: NCollection_Array1<gp_Vec2d>, theVec: NCollection_Array1<gp_Vec>): Standard_Boolean;
}

  export declare class BRepFill_MultiLine_1 extends BRepFill_MultiLine {
    constructor();
  }

  export declare class BRepFill_MultiLine_2 extends BRepFill_MultiLine {
    constructor(Face1: TopoDS_Face, Face2: TopoDS_Face, Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, Inv1: Standard_Boolean, Inv2: Standard_Boolean, Bissec: any);
  }

export declare class BRepFill_ApproxSeewing {
  Perform(ML: BRepFill_MultiLine): void;
  IsDone(): Standard_Boolean;
  Curve(): any;
  CurveOnF1(): any;
  CurveOnF2(): any;
}

  export declare class BRepFill_ApproxSeewing_1 extends BRepFill_ApproxSeewing {
    constructor();
  }

  export declare class BRepFill_ApproxSeewing_2 extends BRepFill_ApproxSeewing {
    constructor(ML: BRepFill_MultiLine);
  }

export declare class BRepFill_CompatibleWires {
  Init(Sections: TopTools_SequenceOfShape): void;
  SetPercent(percent: Standard_Real): void;
  Perform(WithRotation: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Shape(): TopTools_SequenceOfShape;
  GeneratedShapes(SubSection: TopoDS_Edge): TopTools_ListOfShape;
  Generated(): TopTools_DataMapOfShapeListOfShape;
  IsDegeneratedFirstSection(): Standard_Boolean;
  IsDegeneratedLastSection(): Standard_Boolean;
}

  export declare class BRepFill_CompatibleWires_1 extends BRepFill_CompatibleWires {
    constructor();
  }

  export declare class BRepFill_CompatibleWires_2 extends BRepFill_CompatibleWires {
    constructor(Sections: TopTools_SequenceOfShape);
  }

export declare class BRepFill_ComputeCLine {
  Perform(Line: BRepFill_MultiLine): void;
  SetDegrees(degreemin: Standard_Integer, degreemax: Standard_Integer): void;
  SetTolerances(Tolerance3d: Standard_Real, Tolerance2d: Standard_Real): void;
  SetConstraints(FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint): void;
  SetMaxSegments(theMaxSegments: Standard_Integer): void;
  SetInvOrder(theInvOrder: Standard_Boolean): void;
  SetHangChecking(theHangChecking: Standard_Boolean): void;
  IsAllApproximated(): Standard_Boolean;
  IsToleranceReached(): Standard_Boolean;
  Error(Index: Standard_Integer, tol3d: Standard_Real, tol2d: Standard_Real): void;
  NbMultiCurves(): Standard_Integer;
  Value(Index: Standard_Integer): AppParCurves_MultiCurve;
  Parameters(Index: Standard_Integer, firstp: Standard_Real, lastp: Standard_Real): void;
}

  export declare class BRepFill_ComputeCLine_1 extends BRepFill_ComputeCLine {
    constructor(Line: BRepFill_MultiLine, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, cutting: Standard_Boolean, FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint);
  }

  export declare class BRepFill_ComputeCLine_2 extends BRepFill_ComputeCLine {
    constructor(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, cutting: Standard_Boolean, FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint);
  }

export declare class BRepFill_CurveConstraint extends GeomPlate_CurveConstraint {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepFill_CurveConstraint_1 extends BRepFill_CurveConstraint {
    constructor(Boundary: any, Order: Standard_Integer, NPt: Standard_Integer, TolDist: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real);
  }

  export declare class BRepFill_CurveConstraint_2 extends BRepFill_CurveConstraint {
    constructor(Boundary: any, Tang: Standard_Integer, NPt: Standard_Integer, TolDist: Standard_Real);
  }

export declare class BRepFill_Draft {
  constructor(Shape: TopoDS_Shape, Dir: gp_Dir, Angle: Standard_Real)
  SetOptions(Style: BRepFill_TransitionStyle, AngleMin: Standard_Real, AngleMax: Standard_Real): void;
  SetDraft(IsInternal: Standard_Boolean): void;
  Perform_1(LengthMax: Standard_Real): void;
  Perform_2(Surface: any, KeepInsideSurface: Standard_Boolean): void;
  Perform_3(StopShape: TopoDS_Shape, KeepOutSide: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Shell(): TopoDS_Shell;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Shape(): TopoDS_Shape;
}

export declare class BRepFill_Edge3DLaw extends BRepFill_LocationLaw {
  constructor(Path: TopoDS_Wire, Law: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepFill_DraftLaw extends BRepFill_Edge3DLaw {
  constructor(Path: TopoDS_Wire, Law: any)
  CleanLaw(TolAngular: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepFill_EdgeFaceAndOrder {
}

  export declare class BRepFill_EdgeFaceAndOrder_1 extends BRepFill_EdgeFaceAndOrder {
    constructor();
  }

  export declare class BRepFill_EdgeFaceAndOrder_2 extends BRepFill_EdgeFaceAndOrder {
    constructor(anEdge: TopoDS_Edge, aFace: TopoDS_Face, anOrder: GeomAbs_Shape);
  }

export declare class BRepFill_EdgeOnSurfLaw extends BRepFill_LocationLaw {
  constructor(Path: TopoDS_Wire, Surf: TopoDS_Shape)
  HasResult(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepFill_Evolved {
  Perform_1(Spine: TopoDS_Wire, Profile: TopoDS_Wire, AxeProf: gp_Ax3, Join: GeomAbs_JoinType, Solid: Standard_Boolean): void;
  Perform_2(Spine: TopoDS_Face, Profile: TopoDS_Wire, AxeProf: gp_Ax3, Join: GeomAbs_JoinType, Solid: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  GeneratedShapes(SpineShape: TopoDS_Shape, ProfShape: TopoDS_Shape): TopTools_ListOfShape;
  JoinType(): GeomAbs_JoinType;
  Top(): TopoDS_Shape;
  Bottom(): TopoDS_Shape;
}

  export declare class BRepFill_Evolved_1 extends BRepFill_Evolved {
    constructor();
  }

  export declare class BRepFill_Evolved_2 extends BRepFill_Evolved {
    constructor(Spine: TopoDS_Wire, Profile: TopoDS_Wire, AxeProf: gp_Ax3, Join: GeomAbs_JoinType, Solid: Standard_Boolean);
  }

  export declare class BRepFill_Evolved_3 extends BRepFill_Evolved {
    constructor(Spine: TopoDS_Face, Profile: TopoDS_Wire, AxeProf: gp_Ax3, Join: GeomAbs_JoinType, Solid: Standard_Boolean);
  }

export declare class BRepFill_FaceAndOrder {
}

  export declare class BRepFill_FaceAndOrder_1 extends BRepFill_FaceAndOrder {
    constructor();
  }

  export declare class BRepFill_FaceAndOrder_2 extends BRepFill_FaceAndOrder {
    constructor(aFace: TopoDS_Face, anOrder: GeomAbs_Shape);
  }

export declare class BRepFill_Filling {
  constructor(Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Anisotropie: Standard_Boolean, Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real, MaxDeg: Standard_Integer, MaxSegments: Standard_Integer)
  SetConstrParam(Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real): void;
  SetResolParam(Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Anisotropie: Standard_Boolean): void;
  SetApproxParam(MaxDeg: Standard_Integer, MaxSegments: Standard_Integer): void;
  LoadInitSurface(aFace: TopoDS_Face): void;
  Add_1(anEdge: TopoDS_Edge, Order: GeomAbs_Shape, IsBound: Standard_Boolean): Standard_Integer;
  Add_2(anEdge: TopoDS_Edge, Support: TopoDS_Face, Order: GeomAbs_Shape, IsBound: Standard_Boolean): Standard_Integer;
  Add_3(Support: TopoDS_Face, Order: GeomAbs_Shape): Standard_Integer;
  Add_4(Point: gp_Pnt): Standard_Integer;
  Add_5(U: Standard_Real, V: Standard_Real, Support: TopoDS_Face, Order: GeomAbs_Shape): Standard_Integer;
  Build(): void;
  IsDone(): Standard_Boolean;
  Face(): TopoDS_Face;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  G0Error_1(): Standard_Real;
  G1Error_1(): Standard_Real;
  G2Error_1(): Standard_Real;
  G0Error_2(Index: Standard_Integer): Standard_Real;
  G1Error_2(Index: Standard_Integer): Standard_Real;
  G2Error_2(Index: Standard_Integer): Standard_Real;
}

export declare class BRepFill_Generator {
  constructor()
  AddWire(Wire: TopoDS_Wire): void;
  Perform(): void;
  Shell(): TopoDS_Shell;
  Generated(): TopTools_DataMapOfShapeListOfShape;
  GeneratedShapes(SSection: TopoDS_Shape): TopTools_ListOfShape;
}

export declare class BRepFill_OffsetWire {
  Init(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  Perform(Offset: Standard_Real, Alt: Standard_Real): void;
  PerformWithBiLo(WSP: TopoDS_Face, Offset: Standard_Real, Locus: BRepMAT2d_BisectingLocus, Link: BRepMAT2d_LinkTopoBilo, Join: GeomAbs_JoinType, Alt: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Spine(): TopoDS_Face;
  Shape(): TopoDS_Shape;
  GeneratedShapes(SpineShape: TopoDS_Shape): TopTools_ListOfShape;
  JoinType(): GeomAbs_JoinType;
}

  export declare class BRepFill_OffsetWire_1 extends BRepFill_OffsetWire {
    constructor();
  }

  export declare class BRepFill_OffsetWire_2 extends BRepFill_OffsetWire {
    constructor(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean);
  }

export declare class BRepFill_SectionLaw extends Standard_Transient {
  NbLaw(): Standard_Integer;
  Law(Index: Standard_Integer): any;
  IndexOfEdge(anEdge: TopoDS_Shape): Standard_Integer;
  IsConstant(): Standard_Boolean;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsDone(): Standard_Boolean;
  IsVertex(): Standard_Boolean;
  ConcatenedLaw(): any;
  Continuity(Index: Standard_Integer, TolAngular: Standard_Real): GeomAbs_Shape;
  VertexTol(Index: Standard_Integer, Param: Standard_Real): Standard_Real;
  Vertex(Index: Standard_Integer, Param: Standard_Real): TopoDS_Vertex;
  D0(U: Standard_Real, S: TopoDS_Shape): void;
  Init(W: TopoDS_Wire): void;
  CurrentEdge(): TopoDS_Edge;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepFill_NSections extends BRepFill_SectionLaw {
  IsVertex(): Standard_Boolean;
  IsConstant(): Standard_Boolean;
  ConcatenedLaw(): any;
  Continuity(Index: Standard_Integer, TolAngular: Standard_Real): GeomAbs_Shape;
  VertexTol(Index: Standard_Integer, Param: Standard_Real): Standard_Real;
  Vertex(Index: Standard_Integer, Param: Standard_Real): TopoDS_Vertex;
  D0(Param: Standard_Real, S: TopoDS_Shape): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepFill_NSections_1 extends BRepFill_NSections {
    constructor(S: TopTools_SequenceOfShape, Build: Standard_Boolean);
  }

  export declare class BRepFill_NSections_2 extends BRepFill_NSections {
    constructor(S: TopTools_SequenceOfShape, Trsfs: GeomFill_SequenceOfTrsf, P: TColStd_SequenceOfReal, VF: Standard_Real, VL: Standard_Real, Build: Standard_Boolean);
  }

export declare class BRepFill_OffsetAncestors {
  Perform(Paral: BRepFill_OffsetWire): void;
  IsDone(): Standard_Boolean;
  HasAncestor(S1: TopoDS_Edge): Standard_Boolean;
  Ancestor(S1: TopoDS_Edge): TopoDS_Shape;
}

  export declare class BRepFill_OffsetAncestors_1 extends BRepFill_OffsetAncestors {
    constructor();
  }

  export declare class BRepFill_OffsetAncestors_2 extends BRepFill_OffsetAncestors {
    constructor(Paral: BRepFill_OffsetWire);
  }

export declare class BRepFill_Pipe {
  Perform(Spine: TopoDS_Wire, Profile: TopoDS_Shape, GeneratePartCase: Standard_Boolean): void;
  Spine(): TopoDS_Shape;
  Profile(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  ErrorOnSurface(): Standard_Real;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape, L: TopTools_ListOfShape): void;
  Face(ESpine: TopoDS_Edge, EProfile: TopoDS_Edge): TopoDS_Face;
  Edge(ESpine: TopoDS_Edge, VProfile: TopoDS_Vertex): TopoDS_Edge;
  Section(VSpine: TopoDS_Vertex): TopoDS_Shape;
  PipeLine(Point: gp_Pnt): TopoDS_Wire;
}

  export declare class BRepFill_Pipe_1 extends BRepFill_Pipe {
    constructor();
  }

  export declare class BRepFill_Pipe_2 extends BRepFill_Pipe {
    constructor(Spine: TopoDS_Wire, Profile: TopoDS_Shape, aMode: GeomFill_Trihedron, ForceApproxC1: Standard_Boolean, GeneratePartCase: Standard_Boolean);
  }

export declare class BRepFill_Section {
  Set(IsLaw: Standard_Boolean): void;
  OriginalShape(): TopoDS_Shape;
  Wire(): TopoDS_Wire;
  Vertex(): TopoDS_Vertex;
  ModifiedShape(theShape: TopoDS_Shape): TopoDS_Shape;
  IsLaw(): Standard_Boolean;
  IsPunctual(): Standard_Boolean;
  WithContact(): Standard_Boolean;
  WithCorrection(): Standard_Boolean;
}

  export declare class BRepFill_Section_1 extends BRepFill_Section {
    constructor();
  }

  export declare class BRepFill_Section_2 extends BRepFill_Section {
    constructor(Profile: TopoDS_Shape, V: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean);
  }

export declare class BRepFill_PipeShell extends Standard_Transient {
  constructor(Spine: TopoDS_Wire)
  Set_1(Frenet: Standard_Boolean): void;
  SetDiscrete(): void;
  Set_2(Axe: gp_Ax2): void;
  Set_3(BiNormal: gp_Dir): void;
  Set_4(SpineSupport: TopoDS_Shape): Standard_Boolean;
  Set_5(AuxiliarySpine: TopoDS_Wire, CurvilinearEquivalence: Standard_Boolean, KeepContact: BRepFill_TypeOfContact): void;
  SetMaxDegree(NewMaxDegree: Standard_Integer): void;
  SetMaxSegments(NewMaxSegments: Standard_Integer): void;
  SetForceApproxC1(ForceApproxC1: Standard_Boolean): void;
  Add_1(Profile: TopoDS_Shape, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  Add_2(Profile: TopoDS_Shape, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_1(Profile: TopoDS_Shape, L: any, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_2(Profile: TopoDS_Shape, L: any, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  DeleteProfile(Profile: TopoDS_Shape): void;
  IsReady(): Standard_Boolean;
  GetStatus(): GeomFill_PipeError;
  SetTolerance(Tol3d: Standard_Real, BoundTol: Standard_Real, TolAngular: Standard_Real): void;
  SetTransition(Mode: BRepFill_TransitionStyle, Angmin: Standard_Real, Angmax: Standard_Real): void;
  Simulate(NumberOfSection: Standard_Integer, Sections: TopTools_ListOfShape): void;
  Build(): Standard_Boolean;
  MakeSolid(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  ErrorOnSurface(): Standard_Real;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Profiles(theProfiles: TopTools_ListOfShape): void;
  Spine(): TopoDS_Wire;
  Generated(S: TopoDS_Shape, L: TopTools_ListOfShape): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepFill_SectionPlacement {
  Transformation(): gp_Trsf;
  AbscissaOnPath(): Standard_Real;
}

  export declare class BRepFill_SectionPlacement_1 extends BRepFill_SectionPlacement {
    constructor(Law: any, Section: TopoDS_Shape, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean);
  }

  export declare class BRepFill_SectionPlacement_2 extends BRepFill_SectionPlacement {
    constructor(Law: any, Section: TopoDS_Shape, Vertex: TopoDS_Shape, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean);
  }

export declare class BRepFill_ShapeLaw extends BRepFill_SectionLaw {
  IsVertex(): Standard_Boolean;
  IsConstant(): Standard_Boolean;
  ConcatenedLaw(): any;
  Continuity(Index: Standard_Integer, TolAngular: Standard_Real): GeomAbs_Shape;
  VertexTol(Index: Standard_Integer, Param: Standard_Real): Standard_Real;
  Vertex(Index: Standard_Integer, Param: Standard_Real): TopoDS_Vertex;
  D0(Param: Standard_Real, S: TopoDS_Shape): void;
  Edge(Index: Standard_Integer): TopoDS_Edge;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepFill_ShapeLaw_1 extends BRepFill_ShapeLaw {
    constructor(V: TopoDS_Vertex, Build: Standard_Boolean);
  }

  export declare class BRepFill_ShapeLaw_2 extends BRepFill_ShapeLaw {
    constructor(W: TopoDS_Wire, Build: Standard_Boolean);
  }

  export declare class BRepFill_ShapeLaw_3 extends BRepFill_ShapeLaw {
    constructor(W: TopoDS_Wire, L: any, Build: Standard_Boolean);
  }

export declare class BRepFill_Sweep {
  constructor(Section: any, Location: any, WithKPart: Standard_Boolean)
  SetBounds(FirstShape: TopoDS_Wire, LastShape: TopoDS_Wire): void;
  SetTolerance(Tol3d: Standard_Real, BoundTol: Standard_Real, Tol2d: Standard_Real, TolAngular: Standard_Real): void;
  SetAngularControl(AngleMin: Standard_Real, AngleMax: Standard_Real): void;
  SetForceApproxC1(ForceApproxC1: Standard_Boolean): void;
  Build(ReversedEdges: TopTools_MapOfShape, Tapes: BRepFill_DataMapOfShapeHArray2OfShape, Rails: BRepFill_DataMapOfShapeHArray2OfShape, Transition: BRepFill_TransitionStyle, Continuity: GeomAbs_Shape, Approx: GeomFill_ApproxStyle, Degmax: Standard_Integer, Segmax: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  ErrorOnSurface(): Standard_Real;
  SubShape(): any;
  InterFaces(): any;
  Sections(): any;
  Tape(Index: Standard_Integer): TopoDS_Shape;
}

export declare class BRepFill_TrimEdgeTool {
  IntersectWith(Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, InitShape1: TopoDS_Shape, InitShape2: TopoDS_Shape, End1: TopoDS_Vertex, End2: TopoDS_Vertex, theJoinType: GeomAbs_JoinType, IsOpenResult: Standard_Boolean, Params: TColgp_SequenceOfPnt): void;
  AddOrConfuse(Start: Standard_Boolean, Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, Params: TColgp_SequenceOfPnt): void;
  IsInside(P: gp_Pnt2d): Standard_Boolean;
}

  export declare class BRepFill_TrimEdgeTool_1 extends BRepFill_TrimEdgeTool {
    constructor();
  }

  export declare class BRepFill_TrimEdgeTool_2 extends BRepFill_TrimEdgeTool {
    constructor(Bisec: Bisector_Bisec, S1: any, S2: any, Offset: Standard_Real);
  }

export declare class BRepFill_TrimShellCorner {
  constructor(theFaces: any, theTransition: BRepFill_TransitionStyle, theAxeOfBisPlane: gp_Ax2)
  AddBounds(Bounds: any): void;
  AddUEdges(theUEdges: any): void;
  AddVEdges(theVEdges: any, theIndex: Standard_Integer): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  HasSection(): Standard_Boolean;
  Modified(S: TopoDS_Shape, theModified: TopTools_ListOfShape): void;
}

export declare class BRepFill_TrimSurfaceTool {
  constructor(Bis: any, Face1: TopoDS_Face, Face2: TopoDS_Face, Edge1: TopoDS_Edge, Edge2: TopoDS_Edge, Inv1: Standard_Boolean, Inv2: Standard_Boolean)
  IntersectWith(EdgeOnF1: TopoDS_Edge, EdgeOnF2: TopoDS_Edge, Points: TColgp_SequenceOfPnt): void;
  IsOnFace(Point: gp_Pnt2d): Standard_Boolean;
  ProjOn(Point: gp_Pnt2d, Edge: TopoDS_Edge): Standard_Real;
  Project(U1: Standard_Real, U2: Standard_Real, Curve: any, PCurve1: any, PCurve2: any, myCont: GeomAbs_Shape): void;
}

export declare class BRepProj_Projection {
  IsDone(): Standard_Boolean;
  Init(): void;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Wire;
  Shape(): TopoDS_Compound;
}

  export declare class BRepProj_Projection_1 extends BRepProj_Projection {
    constructor(Wire: TopoDS_Shape, Shape: TopoDS_Shape, D: gp_Dir);
  }

  export declare class BRepProj_Projection_2 extends BRepProj_Projection {
    constructor(Wire: TopoDS_Shape, Shape: TopoDS_Shape, P: gp_Pnt);
  }

export declare class TopOpeBRepDS_Transition {
  Set_1(StateBefore: TopAbs_State, StateAfter: TopAbs_State, ShapeBefore: TopAbs_ShapeEnum, ShapeAfter: TopAbs_ShapeEnum): void;
  StateBefore(S: TopAbs_State): void;
  StateAfter(S: TopAbs_State): void;
  ShapeBefore_1(SE: TopAbs_ShapeEnum): void;
  ShapeAfter_1(SE: TopAbs_ShapeEnum): void;
  Before_1(S: TopAbs_State, ShapeBefore: TopAbs_ShapeEnum): void;
  After_1(S: TopAbs_State, ShapeAfter: TopAbs_ShapeEnum): void;
  Index_1(I: Standard_Integer): void;
  IndexBefore_1(I: Standard_Integer): void;
  IndexAfter_1(I: Standard_Integer): void;
  Before_2(): TopAbs_State;
  ONBefore(): TopAbs_ShapeEnum;
  After_2(): TopAbs_State;
  ONAfter(): TopAbs_ShapeEnum;
  ShapeBefore_2(): TopAbs_ShapeEnum;
  ShapeAfter_2(): TopAbs_ShapeEnum;
  Index_2(): Standard_Integer;
  IndexBefore_2(): Standard_Integer;
  IndexAfter_2(): Standard_Integer;
  Set_2(O: TopAbs_Orientation): void;
  Orientation(S: TopAbs_State, T: TopAbs_ShapeEnum): TopAbs_Orientation;
  Complement(): TopOpeBRepDS_Transition;
  IsUnknown(): Standard_Boolean;
}

  export declare class TopOpeBRepDS_Transition_1 extends TopOpeBRepDS_Transition {
    constructor();
  }

  export declare class TopOpeBRepDS_Transition_2 extends TopOpeBRepDS_Transition {
    constructor(StateBefore: TopAbs_State, StateAfter: TopAbs_State, ShapeBefore: TopAbs_ShapeEnum, ShapeAfter: TopAbs_ShapeEnum);
  }

  export declare class TopOpeBRepDS_Transition_3 extends TopOpeBRepDS_Transition {
    constructor(O: TopAbs_Orientation);
  }

export declare class TopOpeBRepDS_Interference extends Standard_Transient {
  Transition_1(): TopOpeBRepDS_Transition;
  ChangeTransition(): TopOpeBRepDS_Transition;
  Transition_2(T: TopOpeBRepDS_Transition): void;
  GKGSKS(GK: TopOpeBRepDS_Kind, G: Standard_Integer, SK: TopOpeBRepDS_Kind, S: Standard_Integer): void;
  SupportType_1(): TopOpeBRepDS_Kind;
  Support_1(): Standard_Integer;
  GeometryType_1(): TopOpeBRepDS_Kind;
  Geometry_1(): Standard_Integer;
  SetGeometry(GI: Standard_Integer): void;
  SupportType_2(ST: TopOpeBRepDS_Kind): void;
  Support_2(S: Standard_Integer): void;
  GeometryType_2(GT: TopOpeBRepDS_Kind): void;
  Geometry_2(G: Standard_Integer): void;
  HasSameSupport(Other: any): Standard_Boolean;
  HasSameGeometry(Other: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopOpeBRepDS_Interference_1 extends TopOpeBRepDS_Interference {
    constructor();
  }

  export declare class TopOpeBRepDS_Interference_2 extends TopOpeBRepDS_Interference {
    constructor(Transition: TopOpeBRepDS_Transition, SupportType: TopOpeBRepDS_Kind, Support: Standard_Integer, GeometryType: TopOpeBRepDS_Kind, Geometry: Standard_Integer);
  }

  export declare class TopOpeBRepDS_Interference_3 extends TopOpeBRepDS_Interference {
    constructor(I: any);
  }

export declare class TopOpeBRepDS_SurfaceCurveInterference extends TopOpeBRepDS_Interference {
  PCurve_1(): any;
  PCurve_2(PC: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopOpeBRepDS_SurfaceCurveInterference_1 extends TopOpeBRepDS_SurfaceCurveInterference {
    constructor();
  }

  export declare class TopOpeBRepDS_SurfaceCurveInterference_2 extends TopOpeBRepDS_SurfaceCurveInterference {
    constructor(Transition: TopOpeBRepDS_Transition, SupportType: TopOpeBRepDS_Kind, Support: Standard_Integer, GeometryType: TopOpeBRepDS_Kind, Geometry: Standard_Integer, PC: any);
  }

  export declare class TopOpeBRepDS_SurfaceCurveInterference_3 extends TopOpeBRepDS_SurfaceCurveInterference {
    constructor(I: any);
  }

export declare class TopOpeBRepDS_CurvePointInterference extends TopOpeBRepDS_Interference {
  constructor(T: TopOpeBRepDS_Transition, ST: TopOpeBRepDS_Kind, S: Standard_Integer, GT: TopOpeBRepDS_Kind, G: Standard_Integer, P: Standard_Real)
  Parameter_1(): Standard_Real;
  Parameter_2(P: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepDS_Surface {
  Assign(Other: TopOpeBRepDS_Surface): void;
  Surface(): any;
  Tolerance_1(): Standard_Real;
  Tolerance_2(theTol: Standard_Real): void;
  Keep(): Standard_Boolean;
  ChangeKeep(theToKeep: Standard_Boolean): void;
}

  export declare class TopOpeBRepDS_Surface_1 extends TopOpeBRepDS_Surface {
    constructor();
  }

  export declare class TopOpeBRepDS_Surface_2 extends TopOpeBRepDS_Surface {
    constructor(P: any, T: Standard_Real);
  }

  export declare class TopOpeBRepDS_Surface_3 extends TopOpeBRepDS_Surface {
    constructor(Other: TopOpeBRepDS_Surface);
  }

export declare class TopOpeBRepDS_GeometryData {
  Assign(Other: TopOpeBRepDS_GeometryData): void;
  Interferences(): TopOpeBRepDS_ListOfInterference;
  ChangeInterferences(): TopOpeBRepDS_ListOfInterference;
  AddInterference(I: any): void;
}

  export declare class TopOpeBRepDS_GeometryData_1 extends TopOpeBRepDS_GeometryData {
    constructor();
  }

  export declare class TopOpeBRepDS_GeometryData_2 extends TopOpeBRepDS_GeometryData {
    constructor(Other: TopOpeBRepDS_GeometryData);
  }

export declare class TopOpeBRepDS_SurfaceData extends TopOpeBRepDS_GeometryData {
}

  export declare class TopOpeBRepDS_SurfaceData_1 extends TopOpeBRepDS_SurfaceData {
    constructor();
  }

  export declare class TopOpeBRepDS_SurfaceData_2 extends TopOpeBRepDS_SurfaceData {
    constructor(S: TopOpeBRepDS_Surface);
  }

export declare class TopOpeBRepDS_Curve {
  DefineCurve(P: any, T: Standard_Real, IsWalk: Standard_Boolean): void;
  Tolerance_1(tol: Standard_Real): void;
  SetSCI(I1: any, I2: any): void;
  GetSCI1(): any;
  GetSCI2(): any;
  GetSCI(I1: any, I2: any): void;
  SetShapes(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  GetShapes(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  Shape1(): TopoDS_Shape;
  ChangeShape1(): TopoDS_Shape;
  Shape2(): TopoDS_Shape;
  ChangeShape2(): TopoDS_Shape;
  Curve_1(): any;
  SetRange(First: Standard_Real, Last: Standard_Real): void;
  Range(First: Standard_Real, Last: Standard_Real): Standard_Boolean;
  Tolerance_2(): Standard_Real;
  ChangeCurve(): any;
  Curve_2(C3D: any, Tol: Standard_Real): void;
  Curve1_1(): any;
  Curve1_2(PC1: any): void;
  Curve2_1(): any;
  Curve2_2(PC2: any): void;
  IsWalk(): Standard_Boolean;
  ChangeIsWalk(B: Standard_Boolean): void;
  Keep(): Standard_Boolean;
  ChangeKeep(B: Standard_Boolean): void;
  Mother(): Standard_Integer;
  ChangeMother(I: Standard_Integer): void;
  DSIndex(): Standard_Integer;
  ChangeDSIndex(I: Standard_Integer): void;
}

  export declare class TopOpeBRepDS_Curve_1 extends TopOpeBRepDS_Curve {
    constructor();
  }

  export declare class TopOpeBRepDS_Curve_2 extends TopOpeBRepDS_Curve {
    constructor(P: any, T: Standard_Real, IsWalk: Standard_Boolean);
  }

export declare class TopOpeBRepDS_CurveData extends TopOpeBRepDS_GeometryData {
}

  export declare class TopOpeBRepDS_CurveData_1 extends TopOpeBRepDS_CurveData {
    constructor();
  }

  export declare class TopOpeBRepDS_CurveData_2 extends TopOpeBRepDS_CurveData {
    constructor(C: TopOpeBRepDS_Curve);
  }

export declare class TopOpeBRepDS_Point {
  IsEqual(other: TopOpeBRepDS_Point): Standard_Boolean;
  Point(): gp_Pnt;
  ChangePoint(): gp_Pnt;
  Tolerance_1(): Standard_Real;
  Tolerance_2(Tol: Standard_Real): void;
  Keep(): Standard_Boolean;
  ChangeKeep(B: Standard_Boolean): void;
}

  export declare class TopOpeBRepDS_Point_1 extends TopOpeBRepDS_Point {
    constructor();
  }

  export declare class TopOpeBRepDS_Point_2 extends TopOpeBRepDS_Point {
    constructor(P: gp_Pnt, T: Standard_Real);
  }

  export declare class TopOpeBRepDS_Point_3 extends TopOpeBRepDS_Point {
    constructor(S: TopoDS_Shape);
  }

export declare class TopOpeBRepDS_PointData extends TopOpeBRepDS_GeometryData {
  SetShapes(I1: Standard_Integer, I2: Standard_Integer): void;
  GetShapes(I1: Standard_Integer, I2: Standard_Integer): void;
}

  export declare class TopOpeBRepDS_PointData_1 extends TopOpeBRepDS_PointData {
    constructor();
  }

  export declare class TopOpeBRepDS_PointData_2 extends TopOpeBRepDS_PointData {
    constructor(P: TopOpeBRepDS_Point);
  }

  export declare class TopOpeBRepDS_PointData_3 extends TopOpeBRepDS_PointData {
    constructor(P: TopOpeBRepDS_Point, I1: Standard_Integer, I2: Standard_Integer);
  }

export declare class TopOpeBRepDS_ShapeData {
  constructor()
  Interferences(): TopOpeBRepDS_ListOfInterference;
  ChangeInterferences(): TopOpeBRepDS_ListOfInterference;
  Keep(): Standard_Boolean;
  ChangeKeep(B: Standard_Boolean): void;
}

export declare class TopOpeBRepDS_ShapeWithState {
  constructor()
  Part(aState: TopAbs_State): TopTools_ListOfShape;
  AddPart(aShape: TopoDS_Shape, aState: TopAbs_State): void;
  AddParts(aListOfShape: TopTools_ListOfShape, aState: TopAbs_State): void;
  SetState(aState: TopAbs_State): void;
  State(): TopAbs_State;
  SetIsSplitted(anIsSplitted: Standard_Boolean): void;
  IsSplitted(): Standard_Boolean;
}

export declare class TopOpeBRepDS_DataStructure {
  constructor()
  Init(): void;
  AddSurface(S: TopOpeBRepDS_Surface): Standard_Integer;
  RemoveSurface(I: Standard_Integer): void;
  KeepSurface_1(I: Standard_Integer): Standard_Boolean;
  KeepSurface_2(S: TopOpeBRepDS_Surface): Standard_Boolean;
  ChangeKeepSurface_1(I: Standard_Integer, FindKeep: Standard_Boolean): void;
  ChangeKeepSurface_2(S: TopOpeBRepDS_Surface, FindKeep: Standard_Boolean): void;
  AddCurve(S: TopOpeBRepDS_Curve): Standard_Integer;
  RemoveCurve(I: Standard_Integer): void;
  KeepCurve_1(I: Standard_Integer): Standard_Boolean;
  KeepCurve_2(C: TopOpeBRepDS_Curve): Standard_Boolean;
  ChangeKeepCurve_1(I: Standard_Integer, FindKeep: Standard_Boolean): void;
  ChangeKeepCurve_2(C: TopOpeBRepDS_Curve, FindKeep: Standard_Boolean): void;
  AddPoint(PDS: TopOpeBRepDS_Point): Standard_Integer;
  AddPointSS(PDS: TopOpeBRepDS_Point, S1: TopoDS_Shape, S2: TopoDS_Shape): Standard_Integer;
  RemovePoint(I: Standard_Integer): void;
  KeepPoint_1(I: Standard_Integer): Standard_Boolean;
  KeepPoint_2(P: TopOpeBRepDS_Point): Standard_Boolean;
  ChangeKeepPoint_1(I: Standard_Integer, FindKeep: Standard_Boolean): void;
  ChangeKeepPoint_2(P: TopOpeBRepDS_Point, FindKeep: Standard_Boolean): void;
  AddShape_1(S: TopoDS_Shape): Standard_Integer;
  AddShape_2(S: TopoDS_Shape, I: Standard_Integer): Standard_Integer;
  KeepShape_1(I: Standard_Integer, FindKeep: Standard_Boolean): Standard_Boolean;
  KeepShape_2(S: TopoDS_Shape, FindKeep: Standard_Boolean): Standard_Boolean;
  ChangeKeepShape_1(I: Standard_Integer, FindKeep: Standard_Boolean): void;
  ChangeKeepShape_2(S: TopoDS_Shape, FindKeep: Standard_Boolean): void;
  InitSectionEdges(): void;
  AddSectionEdge(E: TopoDS_Edge): Standard_Integer;
  SurfaceInterferences(I: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ChangeSurfaceInterferences(I: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  CurveInterferences(I: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ChangeCurveInterferences(I: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  PointInterferences(I: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ChangePointInterferences(I: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ShapeInterferences_1(S: TopoDS_Shape, FindKeep: Standard_Boolean): TopOpeBRepDS_ListOfInterference;
  ChangeShapeInterferences_1(S: TopoDS_Shape): TopOpeBRepDS_ListOfInterference;
  ShapeInterferences_2(I: Standard_Integer, FindKeep: Standard_Boolean): TopOpeBRepDS_ListOfInterference;
  ChangeShapeInterferences_2(I: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ShapeSameDomain_1(S: TopoDS_Shape): TopTools_ListOfShape;
  ChangeShapeSameDomain_1(S: TopoDS_Shape): TopTools_ListOfShape;
  ShapeSameDomain_2(I: Standard_Integer): TopTools_ListOfShape;
  ChangeShapeSameDomain_2(I: Standard_Integer): TopTools_ListOfShape;
  ChangeShapes(): TopOpeBRepDS_MapOfShapeData;
  AddShapeSameDomain(S: TopoDS_Shape, SSD: TopoDS_Shape): void;
  RemoveShapeSameDomain(S: TopoDS_Shape, SSD: TopoDS_Shape): void;
  SameDomainRef_1(I: Standard_Integer): Standard_Integer;
  SameDomainRef_2(S: TopoDS_Shape): Standard_Integer;
  SameDomainRef_3(I: Standard_Integer, Ref: Standard_Integer): void;
  SameDomainRef_4(S: TopoDS_Shape, Ref: Standard_Integer): void;
  SameDomainOri_1(I: Standard_Integer): TopOpeBRepDS_Config;
  SameDomainOri_2(S: TopoDS_Shape): TopOpeBRepDS_Config;
  SameDomainOri_3(I: Standard_Integer, Ori: TopOpeBRepDS_Config): void;
  SameDomainOri_4(S: TopoDS_Shape, Ori: TopOpeBRepDS_Config): void;
  SameDomainInd_1(I: Standard_Integer): Standard_Integer;
  SameDomainInd_2(S: TopoDS_Shape): Standard_Integer;
  SameDomainInd_3(I: Standard_Integer, Ind: Standard_Integer): void;
  SameDomainInd_4(S: TopoDS_Shape, Ind: Standard_Integer): void;
  AncestorRank_1(I: Standard_Integer): Standard_Integer;
  AncestorRank_2(S: TopoDS_Shape): Standard_Integer;
  AncestorRank_3(I: Standard_Integer, Ianc: Standard_Integer): void;
  AncestorRank_4(S: TopoDS_Shape, Ianc: Standard_Integer): void;
  AddShapeInterference(S: TopoDS_Shape, I: any): void;
  RemoveShapeInterference(S: TopoDS_Shape, I: any): void;
  FillShapesSameDomain_1(S1: TopoDS_Shape, S2: TopoDS_Shape, refFirst: Standard_Boolean): void;
  FillShapesSameDomain_2(S1: TopoDS_Shape, S2: TopoDS_Shape, c1: TopOpeBRepDS_Config, c2: TopOpeBRepDS_Config, refFirst: Standard_Boolean): void;
  UnfillShapesSameDomain(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  NbSurfaces(): Standard_Integer;
  NbCurves(): Standard_Integer;
  ChangeNbCurves(N: Standard_Integer): void;
  NbPoints(): Standard_Integer;
  NbShapes(): Standard_Integer;
  NbSectionEdges(): Standard_Integer;
  Surface(I: Standard_Integer): TopOpeBRepDS_Surface;
  ChangeSurface(I: Standard_Integer): TopOpeBRepDS_Surface;
  Curve(I: Standard_Integer): TopOpeBRepDS_Curve;
  ChangeCurve(I: Standard_Integer): TopOpeBRepDS_Curve;
  Point(I: Standard_Integer): TopOpeBRepDS_Point;
  ChangePoint(I: Standard_Integer): TopOpeBRepDS_Point;
  Shape_1(I: Standard_Integer, FindKeep: Standard_Boolean): TopoDS_Shape;
  Shape_2(S: TopoDS_Shape, FindKeep: Standard_Boolean): Standard_Integer;
  SectionEdge_1(I: Standard_Integer, FindKeep: Standard_Boolean): TopoDS_Edge;
  SectionEdge_2(E: TopoDS_Edge, FindKeep: Standard_Boolean): Standard_Integer;
  IsSectionEdge(E: TopoDS_Edge, FindKeep: Standard_Boolean): Standard_Boolean;
  HasGeometry(S: TopoDS_Shape): Standard_Boolean;
  HasShape(S: TopoDS_Shape, FindKeep: Standard_Boolean): Standard_Boolean;
  SetNewSurface(F: TopoDS_Shape, S: any): void;
  HasNewSurface(F: TopoDS_Shape): Standard_Boolean;
  NewSurface(F: TopoDS_Shape): any;
  Isfafa_1(isfafa: Standard_Boolean): void;
  Isfafa_2(): Standard_Boolean;
  ChangeMapOfShapeWithStateObj(): TopOpeBRepDS_IndexedDataMapOfShapeWithState;
  ChangeMapOfShapeWithStateTool(): TopOpeBRepDS_IndexedDataMapOfShapeWithState;
  ChangeMapOfShapeWithState(aShape: TopoDS_Shape, aFlag: Standard_Boolean): TopOpeBRepDS_IndexedDataMapOfShapeWithState;
  GetShapeWithState(aShape: TopoDS_Shape): TopOpeBRepDS_ShapeWithState;
  ChangeMapOfRejectedShapesObj(): TopTools_IndexedMapOfShape;
  ChangeMapOfRejectedShapesTool(): TopTools_IndexedMapOfShape;
}

export declare class TopOpeBRep {
  constructor();
}

export declare class TopOpeBRep_WPointInter {
  constructor()
  Set(P: IntSurf_PntOn2S): void;
  ParametersOnS1(U: Standard_Real, V: Standard_Real): void;
  ParametersOnS2(U: Standard_Real, V: Standard_Real): void;
  Parameters(U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  ValueOnS1(): gp_Pnt2d;
  ValueOnS2(): gp_Pnt2d;
  Value(): gp_Pnt;
  PPntOn2SDummy(): TopOpeBRep_PPntOn2S;
}

export declare class TopOpeBRep_VPointInter {
  constructor()
  SetPoint(P: IntPatch_Point): void;
  SetShapes(I1: Standard_Integer, I2: Standard_Integer): void;
  GetShapes(I1: Standard_Integer, I2: Standard_Integer): void;
  TransitionOnS1(): IntSurf_Transition;
  TransitionOnS2(): IntSurf_Transition;
  TransitionLineArc1(): IntSurf_Transition;
  TransitionLineArc2(): IntSurf_Transition;
  IsOnDomS1(): Standard_Boolean;
  IsOnDomS2(): Standard_Boolean;
  ParametersOnS1(u: Standard_Real, v: Standard_Real): void;
  ParametersOnS2(u: Standard_Real, v: Standard_Real): void;
  Value(): gp_Pnt;
  Tolerance(): Standard_Real;
  ArcOnS1(): TopoDS_Shape;
  ArcOnS2(): TopoDS_Shape;
  ParameterOnLine(): Standard_Real;
  ParameterOnArc1(): Standard_Real;
  IsVertexOnS1(): Standard_Boolean;
  VertexOnS1(): TopoDS_Shape;
  ParameterOnArc2(): Standard_Real;
  IsVertexOnS2(): Standard_Boolean;
  VertexOnS2(): TopoDS_Shape;
  IsInternal(): Standard_Boolean;
  IsMultiple(): Standard_Boolean;
  State_1(I: Standard_Integer): TopAbs_State;
  State_2(S: TopAbs_State, I: Standard_Integer): void;
  EdgeON_1(Eon: TopoDS_Shape, Par: Standard_Real, I: Standard_Integer): void;
  EdgeON_2(I: Standard_Integer): TopoDS_Shape;
  EdgeONParameter(I: Standard_Integer): Standard_Real;
  ShapeIndex_1(): Standard_Integer;
  ShapeIndex_2(I: Standard_Integer): void;
  Edge(I: Standard_Integer): TopoDS_Shape;
  EdgeParameter(I: Standard_Integer): Standard_Real;
  SurfaceParameters(I: Standard_Integer): gp_Pnt2d;
  IsVertex(I: Standard_Integer): Standard_Boolean;
  Vertex(I: Standard_Integer): TopoDS_Shape;
  UpdateKeep(): void;
  Keep(): Standard_Boolean;
  ChangeKeep(keep: Standard_Boolean): void;
  EqualpP(VP: TopOpeBRep_VPointInter): Standard_Boolean;
  ParonE(E: TopoDS_Edge, par: Standard_Real): Standard_Boolean;
  Index_1(I: Standard_Integer): void;
  Index_2(): Standard_Integer;
  PThePointOfIntersectionDummy(): TopOpeBRep_PThePointOfIntersection;
}

export declare class TopOpeBRep_LineInter {
  constructor()
  SetLine(L: any, S1: BRepAdaptor_Surface, S2: BRepAdaptor_Surface): void;
  SetFaces(F1: TopoDS_Face, F2: TopoDS_Face): void;
  TypeLineCurve(): TopOpeBRep_TypeLineCurve;
  NbVPoint(): Standard_Integer;
  VPoint(I: Standard_Integer): TopOpeBRep_VPointInter;
  ChangeVPoint(I: Standard_Integer): TopOpeBRep_VPointInter;
  SetINL(): void;
  INL(): Standard_Boolean;
  SetIsVClosed(): void;
  IsVClosed(): Standard_Boolean;
  SetOK(B: Standard_Boolean): void;
  OK(): Standard_Boolean;
  SetHasVPonR(): void;
  HasVPonR(): Standard_Boolean;
  SetVPBounds(): void;
  VPBounds(f: Standard_Integer, l: Standard_Integer, n: Standard_Integer): void;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Bounds(f: Standard_Real, l: Standard_Real): void;
  HasVInternal(): Standard_Boolean;
  NbWPoint(): Standard_Integer;
  WPoint(I: Standard_Integer): TopOpeBRep_WPointInter;
  TransitionOnS1(): IntSurf_TypeTrans;
  TransitionOnS2(): IntSurf_TypeTrans;
  SituationS1(): IntSurf_Situation;
  SituationS2(): IntSurf_Situation;
  Curve_1(): any;
  Curve_2(parmin: Standard_Real, parmax: Standard_Real): any;
  Arc(): TopoDS_Shape;
  ArcIsEdge(I: Standard_Integer): Standard_Boolean;
  LineW(): any;
  LineG(): any;
  LineR(): any;
  HasFirstPoint(): Standard_Boolean;
  HasLastPoint(): Standard_Boolean;
  ComputeFaceFaceTransition(): void;
  FaceFaceTransition(I: Standard_Integer): TopOpeBRepDS_Transition;
  Index_1(I: Standard_Integer): void;
  Index_2(): Standard_Integer;
  DumpType(): void;
  DumpVPoint(I: Standard_Integer, s1: TCollection_AsciiString, s2: TCollection_AsciiString): void;
  DumpBipoint(B: TopOpeBRep_Bipoint, s1: TCollection_AsciiString, s2: TCollection_AsciiString): void;
  SetTraceIndex(exF1: Standard_Integer, exF2: Standard_Integer): void;
  GetTraceIndex(exF1: Standard_Integer, exF2: Standard_Integer): void;
}

export declare class TopOpeBRep_Bipoint {
  I1(): Standard_Integer;
  I2(): Standard_Integer;
}

  export declare class TopOpeBRep_Bipoint_1 extends TopOpeBRep_Bipoint {
    constructor();
  }

  export declare class TopOpeBRep_Bipoint_2 extends TopOpeBRep_Bipoint {
    constructor(I1: Standard_Integer, I2: Standard_Integer);
  }

export declare class TopOpeBRepTool_ShapeExplorer extends TopExp_Explorer {
  Init(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum): void;
  Next(): void;
  Index(): Standard_Integer;
}

  export declare class TopOpeBRepTool_ShapeExplorer_1 extends TopOpeBRepTool_ShapeExplorer {
    constructor();
  }

  export declare class TopOpeBRepTool_ShapeExplorer_2 extends TopOpeBRepTool_ShapeExplorer {
    constructor(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum);
  }

export declare class TopOpeBRepTool_BoxSort {
  SetHBoxTool(T: any): void;
  HBoxTool(): any;
  Clear(): void;
  AddBoxes(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum): void;
  MakeHAB(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum): void;
  HAB(): any;
  MakeHABCOB(HAB: any, COB: Bnd_Box): void;
  HABShape(I: Standard_Integer): TopoDS_Shape;
  MakeCOB(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum): void;
  AddBoxesMakeCOB(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum): void;
  Compare(S: TopoDS_Shape): TColStd_ListIteratorOfListOfInteger;
  TouchedShape(I: TColStd_ListIteratorOfListOfInteger): TopoDS_Shape;
  Box(S: TopoDS_Shape): Bnd_Box;
}

  export declare class TopOpeBRepTool_BoxSort_1 extends TopOpeBRepTool_BoxSort {
    constructor();
  }

  export declare class TopOpeBRepTool_BoxSort_2 extends TopOpeBRepTool_BoxSort {
    constructor(T: any);
  }

export declare class TopOpeBRep_ShapeScanner {
  constructor()
  Clear(): void;
  AddBoxesMakeCOB(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum): void;
  Init_1(E: TopoDS_Shape): void;
  Init_2(X: TopOpeBRepTool_ShapeExplorer): void;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Shape;
  BoxSort(): TopOpeBRepTool_BoxSort;
  ChangeBoxSort(): TopOpeBRepTool_BoxSort;
  Index(): Standard_Integer;
}

export declare class TopOpeBRep_FacesIntersector {
  constructor()
  Perform_1(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  Perform_2(S1: TopoDS_Shape, S2: TopoDS_Shape, B1: Bnd_Box, B2: Bnd_Box): void;
  IsEmpty(): Standard_Boolean;
  IsDone(): Standard_Boolean;
  SameDomain(): Standard_Boolean;
  Face(Index: Standard_Integer): TopoDS_Shape;
  SurfacesSameOriented(): Standard_Boolean;
  IsRestriction(E: TopoDS_Shape): Standard_Boolean;
  Restrictions(): TopTools_IndexedMapOfShape;
  PrepareLines(): void;
  Lines(): any;
  NbLines(): Standard_Integer;
  InitLine(): void;
  MoreLine(): Standard_Boolean;
  NextLine(): void;
  CurrentLine(): TopOpeBRep_LineInter;
  CurrentLineIndex(): Standard_Integer;
  ChangeLine(IL: Standard_Integer): TopOpeBRep_LineInter;
  ForceTolerances(tolarc: Standard_Real, toltang: Standard_Real): void;
  GetTolerances(tolarc: Standard_Real, toltang: Standard_Real): void;
}

export declare class TopOpeBRep_Point2d {
  constructor()
  Dump(ie1: Standard_Integer, ie2: Standard_Integer): void;
  SetPint(P: IntRes2d_IntersectionPoint): void;
  HasPint(): Standard_Boolean;
  Pint(): IntRes2d_IntersectionPoint;
  SetIsVertex(I: Standard_Integer, B: Standard_Boolean): void;
  IsVertex(I: Standard_Integer): Standard_Boolean;
  SetVertex(I: Standard_Integer, V: TopoDS_Vertex): void;
  Vertex(I: Standard_Integer): TopoDS_Vertex;
  SetTransition(I: Standard_Integer, T: TopOpeBRepDS_Transition): void;
  Transition(I: Standard_Integer): TopOpeBRepDS_Transition;
  ChangeTransition(I: Standard_Integer): TopOpeBRepDS_Transition;
  SetParameter(I: Standard_Integer, P: Standard_Real): void;
  Parameter(I: Standard_Integer): Standard_Real;
  SetIsPointOfSegment(B: Standard_Boolean): void;
  IsPointOfSegment(): Standard_Boolean;
  SetSegmentAncestors(IP1: Standard_Integer, IP2: Standard_Integer): void;
  SegmentAncestors(IP1: Standard_Integer, IP2: Standard_Integer): Standard_Boolean;
  SetStatus(S: TopOpeBRep_P2Dstatus): void;
  Status(): TopOpeBRep_P2Dstatus;
  SetIndex(X: Standard_Integer): void;
  Index(): Standard_Integer;
  SetValue(P: gp_Pnt): void;
  Value(): gp_Pnt;
  SetValue2d(P: gp_Pnt2d): void;
  Value2d(): gp_Pnt2d;
  SetKeep(B: Standard_Boolean): void;
  Keep(): Standard_Boolean;
  SetEdgesConfig(C: TopOpeBRepDS_Config): void;
  EdgesConfig(): TopOpeBRepDS_Config;
  SetTolerance(T: Standard_Real): void;
  Tolerance(): Standard_Real;
  SetHctxff2d(ff2d: any): void;
  Hctxff2d(): any;
  SetHctxee2d(ee2d: any): void;
  Hctxee2d(): any;
}

export declare class TopOpeBRepDS_ShapeShapeInterference extends TopOpeBRepDS_Interference {
  constructor(T: TopOpeBRepDS_Transition, ST: TopOpeBRepDS_Kind, S: Standard_Integer, GT: TopOpeBRepDS_Kind, G: Standard_Integer, GBound: Standard_Boolean, C: TopOpeBRepDS_Config)
  Config(): TopOpeBRepDS_Config;
  GBound(): Standard_Boolean;
  SetGBound(b: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepDS_EdgeVertexInterference extends TopOpeBRepDS_ShapeShapeInterference {
  Parameter_1(): Standard_Real;
  Parameter_2(P: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopOpeBRepDS_EdgeVertexInterference_1 extends TopOpeBRepDS_EdgeVertexInterference {
    constructor(T: TopOpeBRepDS_Transition, ST: TopOpeBRepDS_Kind, S: Standard_Integer, G: Standard_Integer, GIsBound: Standard_Boolean, C: TopOpeBRepDS_Config, P: Standard_Real);
  }

  export declare class TopOpeBRepDS_EdgeVertexInterference_2 extends TopOpeBRepDS_EdgeVertexInterference {
    constructor(T: TopOpeBRepDS_Transition, S: Standard_Integer, G: Standard_Integer, GIsBound: Standard_Boolean, C: TopOpeBRepDS_Config, P: Standard_Real);
  }

export declare class TopOpeBRepDS_FaceEdgeInterference extends TopOpeBRepDS_ShapeShapeInterference {
  constructor(T: TopOpeBRepDS_Transition, S: Standard_Integer, G: Standard_Integer, GIsBound: Standard_Boolean, C: TopOpeBRepDS_Config)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepDS_InterferenceIterator {
  Init(L: TopOpeBRepDS_ListOfInterference): void;
  GeometryKind(GK: TopOpeBRepDS_Kind): void;
  Geometry(G: Standard_Integer): void;
  SupportKind(ST: TopOpeBRepDS_Kind): void;
  Support(S: Standard_Integer): void;
  Match(): void;
  MatchInterference(I: any): Standard_Boolean;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  ChangeIterator(): TopOpeBRepDS_ListIteratorOfListOfInterference;
}

  export declare class TopOpeBRepDS_InterferenceIterator_1 extends TopOpeBRepDS_InterferenceIterator {
    constructor();
  }

  export declare class TopOpeBRepDS_InterferenceIterator_2 extends TopOpeBRepDS_InterferenceIterator {
    constructor(L: TopOpeBRepDS_ListOfInterference);
  }

export declare class TopOpeBRepDS_HDataStructure extends Standard_Transient {
  constructor()
  AddAncestors_1(S: TopoDS_Shape): void;
  AddAncestors_2(S: TopoDS_Shape, T1: TopAbs_ShapeEnum, T2: TopAbs_ShapeEnum): void;
  ChkIntg(): void;
  DS(): TopOpeBRepDS_DataStructure;
  ChangeDS(): TopOpeBRepDS_DataStructure;
  NbSurfaces(): Standard_Integer;
  NbCurves(): Standard_Integer;
  NbPoints(): Standard_Integer;
  Surface(I: Standard_Integer): TopOpeBRepDS_Surface;
  SurfaceCurves(I: Standard_Integer): TopOpeBRepDS_CurveIterator;
  Curve(I: Standard_Integer): TopOpeBRepDS_Curve;
  ChangeCurve(I: Standard_Integer): TopOpeBRepDS_Curve;
  CurvePoints(I: Standard_Integer): TopOpeBRepDS_PointIterator;
  Point(I: Standard_Integer): TopOpeBRepDS_Point;
  NbShapes(): Standard_Integer;
  Shape_1(I: Standard_Integer, FindKeep: Standard_Boolean): TopoDS_Shape;
  Shape_2(S: TopoDS_Shape, FindKeep: Standard_Boolean): Standard_Integer;
  HasGeometry(S: TopoDS_Shape): Standard_Boolean;
  HasShape(S: TopoDS_Shape, FindKeep: Standard_Boolean): Standard_Boolean;
  HasSameDomain(S: TopoDS_Shape, FindKeep: Standard_Boolean): Standard_Boolean;
  SameDomain(S: TopoDS_Shape): TopTools_ListIteratorOfListOfShape;
  SameDomainOrientation(S: TopoDS_Shape): TopOpeBRepDS_Config;
  SameDomainReference(S: TopoDS_Shape): Standard_Integer;
  SolidSurfaces_1(S: TopoDS_Shape): TopOpeBRepDS_SurfaceIterator;
  SolidSurfaces_2(I: Standard_Integer): TopOpeBRepDS_SurfaceIterator;
  FaceCurves_1(F: TopoDS_Shape): TopOpeBRepDS_CurveIterator;
  FaceCurves_2(I: Standard_Integer): TopOpeBRepDS_CurveIterator;
  EdgePoints(E: TopoDS_Shape): TopOpeBRepDS_PointIterator;
  MakeCurve(C1: TopOpeBRepDS_Curve, C2: TopOpeBRepDS_Curve): Standard_Integer;
  RemoveCurve(iC: Standard_Integer): void;
  NbGeometry(K: TopOpeBRepDS_Kind): Standard_Integer;
  NbTopology_1(K: TopOpeBRepDS_Kind): Standard_Integer;
  NbTopology_2(): Standard_Integer;
  EdgesSameParameter(): Standard_Boolean;
  SortOnParameter_1(L1: TopOpeBRepDS_ListOfInterference, L2: TopOpeBRepDS_ListOfInterference): void;
  SortOnParameter_2(L: TopOpeBRepDS_ListOfInterference): void;
  MinMaxOnParameter(L: TopOpeBRepDS_ListOfInterference, Min: Standard_Real, Max: Standard_Real): void;
  ScanInterfList(IT: TopOpeBRepDS_ListIteratorOfListOfInterference, PDS: TopOpeBRepDS_Point): Standard_Boolean;
  GetGeometry(IT: TopOpeBRepDS_ListIteratorOfListOfInterference, PDS: TopOpeBRepDS_Point, G: Standard_Integer, K: TopOpeBRepDS_Kind): Standard_Boolean;
  StoreInterference_1(I: any, LI: TopOpeBRepDS_ListOfInterference, str: TCollection_AsciiString): void;
  StoreInterference_2(I: any, S: TopoDS_Shape, str: TCollection_AsciiString): void;
  StoreInterference_3(I: any, IS: Standard_Integer, str: TCollection_AsciiString): void;
  StoreInterferences_1(LI: TopOpeBRepDS_ListOfInterference, S: TopoDS_Shape, str: TCollection_AsciiString): void;
  StoreInterferences_2(LI: TopOpeBRepDS_ListOfInterference, IS: Standard_Integer, str: TCollection_AsciiString): void;
  ClearStoreInterferences_1(LI: TopOpeBRepDS_ListOfInterference, S: TopoDS_Shape, str: TCollection_AsciiString): void;
  ClearStoreInterferences_2(LI: TopOpeBRepDS_ListOfInterference, IS: Standard_Integer, str: TCollection_AsciiString): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRep_EdgesIntersector {
  constructor()
  SetFaces_1(F1: TopoDS_Shape, F2: TopoDS_Shape): void;
  SetFaces_2(F1: TopoDS_Shape, F2: TopoDS_Shape, B1: Bnd_Box, B2: Bnd_Box): void;
  ForceTolerances(Tol1: Standard_Real, Tol2: Standard_Real): void;
  Dimension_1(D: Standard_Integer): void;
  Dimension_2(): Standard_Integer;
  Perform(E1: TopoDS_Shape, E2: TopoDS_Shape, ReduceSegments: Standard_Boolean): void;
  IsEmpty(): Standard_Boolean;
  HasSegment(): Standard_Boolean;
  SameDomain(): Standard_Boolean;
  Edge(Index: Standard_Integer): TopoDS_Shape;
  Curve(Index: Standard_Integer): Geom2dAdaptor_Curve;
  Face(Index: Standard_Integer): TopoDS_Shape;
  Surface(Index: Standard_Integer): BRepAdaptor_Surface;
  SurfacesSameOriented(): Standard_Boolean;
  FacesSameOriented(): Standard_Boolean;
  ToleranceMax(): Standard_Real;
  Tolerances(tol1: Standard_Real, tol2: Standard_Real): void;
  NbPoints(): Standard_Integer;
  NbSegments(): Standard_Integer;
  Dump(str: TCollection_AsciiString, ie1: Standard_Integer, ie2: Standard_Integer): void;
  InitPoint(selectkeep: Standard_Boolean): void;
  MorePoint(): Standard_Boolean;
  NextPoint(): void;
  Points(): TopOpeBRep_SequenceOfPoint2d;
  Point_1(): TopOpeBRep_Point2d;
  Point_2(I: Standard_Integer): TopOpeBRep_Point2d;
  ReduceSegment(P1: TopOpeBRep_Point2d, P2: TopOpeBRep_Point2d, Pn: TopOpeBRep_Point2d): Standard_Boolean;
  Status1(): TopOpeBRep_P2Dstatus;
}

export declare class TopOpeBRep_FaceEdgeIntersector {
  constructor()
  Perform(F: TopoDS_Shape, E: TopoDS_Shape): void;
  IsEmpty(): Standard_Boolean;
  Shape(Index: Standard_Integer): TopoDS_Shape;
  ForceTolerance(tol: Standard_Real): void;
  Tolerance(): Standard_Real;
  NbPoints(): Standard_Integer;
  InitPoint(): void;
  MorePoint(): Standard_Boolean;
  NextPoint(): void;
  Value(): gp_Pnt;
  Parameter(): Standard_Real;
  UVPoint(P: gp_Pnt2d): void;
  State(): TopAbs_State;
  Transition(Index: Standard_Integer, FaceOrientation: TopAbs_Orientation): TopOpeBRepDS_Transition;
  IsVertex_1(S: TopoDS_Shape, P: gp_Pnt, Tol: Standard_Real, V: TopoDS_Vertex): Standard_Boolean;
  IsVertex_2(I: Standard_Integer, V: TopoDS_Vertex): Standard_Boolean;
  Index(): Standard_Integer;
}

export declare class TopOpeBRep_ShapeIntersector {
  constructor()
  InitIntersection_1(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  InitIntersection_2(S1: TopoDS_Shape, S2: TopoDS_Shape, F1: TopoDS_Face, F2: TopoDS_Face): void;
  Shape(Index: Standard_Integer): TopoDS_Shape;
  MoreIntersection(): Standard_Boolean;
  NextIntersection(): void;
  ChangeFacesIntersector(): TopOpeBRep_FacesIntersector;
  ChangeEdgesIntersector(): TopOpeBRep_EdgesIntersector;
  ChangeFaceEdgeIntersector(): TopOpeBRep_FaceEdgeIntersector;
  CurrentGeomShape(Index: Standard_Integer): TopoDS_Shape;
  GetTolerances(tol1: Standard_Real, tol2: Standard_Real): void;
  DumpCurrent(K: Standard_Integer): void;
  Index(K: Standard_Integer): Standard_Integer;
  RejectedFaces(anObj: TopoDS_Shape, aReference: TopoDS_Shape, aListOfShape: TopTools_ListOfShape): void;
}

export declare class TopOpeBRep_ShapeIntersector2d {
  constructor()
  InitIntersection(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  Shape(Index: Standard_Integer): TopoDS_Shape;
  MoreIntersection(): Standard_Boolean;
  NextIntersection(): void;
  ChangeEdgesIntersector(): TopOpeBRep_EdgesIntersector;
  CurrentGeomShape(Index: Standard_Integer): TopoDS_Shape;
  DumpCurrent(K: Standard_Integer): void;
  Index(K: Standard_Integer): Standard_Integer;
}

export declare class TopOpeBRep_PointClassifier {
  constructor()
  Init(): void;
  Load(F: TopoDS_Face): void;
  Classify(F: TopoDS_Face, P: gp_Pnt2d, Tol: Standard_Real): TopAbs_State;
  State(): TopAbs_State;
}

export declare class TopOpeBRep_FacesFiller {
  constructor()
  Insert(F1: TopoDS_Shape, F2: TopoDS_Shape, FACINT: TopOpeBRep_FacesIntersector, HDS: any): void;
  ProcessSectionEdges(): void;
  ChangePointClassifier(): TopOpeBRep_PointClassifier;
  PShapeClassifier(): TopOpeBRepTool_PShapeClassifier;
  SetPShapeClassifier(PSC: TopOpeBRepTool_PShapeClassifier): void;
  LoadLine(L: TopOpeBRep_LineInter): void;
  CheckLine(L: TopOpeBRep_LineInter): Standard_Boolean;
  VP_Position_1(FACINT: TopOpeBRep_FacesIntersector): void;
  VP_Position_2(L: TopOpeBRep_LineInter): void;
  VP_PositionOnL(L: TopOpeBRep_LineInter): void;
  VP_PositionOnR(L: TopOpeBRep_LineInter): void;
  VP_Position_3(VP: TopOpeBRep_VPointInter, VPC: TopOpeBRep_VPointInterClassifier): void;
  ProcessLine(): void;
  ResetDSC(): void;
  ProcessRLine(): void;
  FillLineVPonR(): void;
  FillLine(): void;
  AddShapesLine(): void;
  GetESL(LES: TopTools_ListOfShape): void;
  ProcessVPR(FF: TopOpeBRep_FacesFiller, VP: TopOpeBRep_VPointInter): void;
  ProcessVPIonR(VPI: TopOpeBRep_VPointInterIterator, trans1: TopOpeBRepDS_Transition, F1: TopoDS_Shape, ShapeIndex: Standard_Integer): void;
  ProcessVPonR(VP: TopOpeBRep_VPointInter, trans1: TopOpeBRepDS_Transition, F1: TopoDS_Shape, ShapeIndex: Standard_Integer): void;
  ProcessVPonclosingR(VP: TopOpeBRep_VPointInter, F1: TopoDS_Shape, ShapeIndex: Standard_Integer, transEdge: TopOpeBRepDS_Transition, PVKind: TopOpeBRepDS_Kind, PVIndex: Standard_Integer, EPIfound: Standard_Boolean, IEPI: any): void;
  ProcessVPondgE(VP: TopOpeBRep_VPointInter, ShapeIndex: Standard_Integer, PVKind: TopOpeBRepDS_Kind, PVIndex: Standard_Integer, EPIfound: Standard_Boolean, IEPI: any, CPIfound: Standard_Boolean, ICPI: any): Standard_Boolean;
  ProcessVPInotonR(VPI: TopOpeBRep_VPointInterIterator): void;
  ProcessVPnotonR(VP: TopOpeBRep_VPointInter): void;
  GetGeometry(IT: TopOpeBRepDS_ListIteratorOfListOfInterference, VP: TopOpeBRep_VPointInter, G: Standard_Integer, K: TopOpeBRepDS_Kind): Standard_Boolean;
  MakeGeometry(VP: TopOpeBRep_VPointInter, ShapeIndex: Standard_Integer, K: TopOpeBRepDS_Kind): Standard_Integer;
  StoreCurveInterference(I: any): void;
  GetFFGeometry_1(DSP: TopOpeBRepDS_Point, K: TopOpeBRepDS_Kind, G: Standard_Integer): Standard_Boolean;
  GetFFGeometry_2(VP: TopOpeBRep_VPointInter, K: TopOpeBRepDS_Kind, G: Standard_Integer): Standard_Boolean;
  ChangeFacesIntersector(): TopOpeBRep_FacesIntersector;
  HDataStructure(): any;
  ChangeDataStructure(): TopOpeBRepDS_DataStructure;
  Face(I: Standard_Integer): TopoDS_Face;
  FaceFaceTransition_1(L: TopOpeBRep_LineInter, I: Standard_Integer): TopOpeBRepDS_Transition;
  FaceFaceTransition_2(I: Standard_Integer): TopOpeBRepDS_Transition;
  PFacesIntersectorDummy(): TopOpeBRep_PFacesIntersector;
  PDataStructureDummy(): TopOpeBRepDS_PDataStructure;
  PLineInterDummy(): TopOpeBRep_PLineInter;
  SetTraceIndex(exF1: Standard_Integer, exF2: Standard_Integer): void;
  GetTraceIndex(exF1: Standard_Integer, exF2: Standard_Integer): void;
  Lminmax(L: TopOpeBRep_LineInter, pmin: Standard_Real, pmax: Standard_Real): void;
  LSameDomainERL(L: TopOpeBRep_LineInter, ERL: TopTools_ListOfShape): Standard_Boolean;
  IsVPtransLok(L: TopOpeBRep_LineInter, iVP: Standard_Integer, SI12: Standard_Integer, T: TopOpeBRepDS_Transition): Standard_Boolean;
  TransvpOK(L: TopOpeBRep_LineInter, iVP: Standard_Integer, SI: Standard_Integer, isINOUT: Standard_Boolean): Standard_Boolean;
  VPParamOnER(vp: TopOpeBRep_VPointInter, Lrest: TopOpeBRep_LineInter): Standard_Real;
  EqualpPonR(Lrest: TopOpeBRep_LineInter, VP1: TopOpeBRep_VPointInter, VP2: TopOpeBRep_VPointInter): Standard_Boolean;
}

export declare class TopOpeBRep_EdgesFiller {
  constructor()
  Insert(E1: TopoDS_Shape, E2: TopoDS_Shape, EI: TopOpeBRep_EdgesIntersector, HDS: any): void;
  Face_1(I: Standard_Integer, F: TopoDS_Shape): void;
  Face_2(I: Standard_Integer): TopoDS_Shape;
}

export declare class TopOpeBRep_FaceEdgeFiller {
  constructor()
  Insert(F: TopoDS_Shape, E: TopoDS_Shape, FEINT: TopOpeBRep_FaceEdgeIntersector, HDS: any): void;
}

export declare class TopOpeBRep_DSFiller {
  constructor()
  PShapeClassifier(): TopOpeBRepTool_PShapeClassifier;
  Insert(S1: TopoDS_Shape, S2: TopoDS_Shape, HDS: any, orientFORWARD: Standard_Boolean): void;
  InsertIntersection(S1: TopoDS_Shape, S2: TopoDS_Shape, HDS: any, orientFORWARD: Standard_Boolean): void;
  Complete(HDS: any): void;
  Insert2d(S1: TopoDS_Shape, S2: TopoDS_Shape, HDS: any): void;
  InsertIntersection2d(S1: TopoDS_Shape, S2: TopoDS_Shape, HDS: any): void;
  IsMadeOf1d(S: TopoDS_Shape): Standard_Boolean;
  IsContext1d(S: TopoDS_Shape): Standard_Boolean;
  Insert1d(S1: TopoDS_Shape, S2: TopoDS_Shape, F1: TopoDS_Face, F2: TopoDS_Face, HDS: any, orientFORWARD: Standard_Boolean): void;
  ChangeShapeIntersector(): TopOpeBRep_ShapeIntersector;
  ChangeShapeIntersector2d(): TopOpeBRep_ShapeIntersector2d;
  ChangeFacesFiller(): TopOpeBRep_FacesFiller;
  ChangeEdgesFiller(): TopOpeBRep_EdgesFiller;
  ChangeFaceEdgeFiller(): TopOpeBRep_FaceEdgeFiller;
  GapFiller(HDS: any): void;
  CompleteDS(HDS: any): void;
  Filter(HDS: any): void;
  Reducer(HDS: any): void;
  RemoveUnsharedGeometry(HDS: any): void;
  Checker(HDS: any): void;
  CompleteDS2d(HDS: any): void;
}

export declare class TopOpeBRep_FFDumper extends Standard_Transient {
  constructor(PFF: TopOpeBRep_PFacesFiller)
  Init(PFF: TopOpeBRep_PFacesFiller): void;
  DumpLine_1(I: Standard_Integer): void;
  DumpLine_2(L: TopOpeBRep_LineInter): void;
  DumpVP_1(VP: TopOpeBRep_VPointInter): void;
  DumpVP_2(VP: TopOpeBRep_VPointInter, ISI: Standard_Integer): void;
  ExploreIndex(S: TopoDS_Shape, ISI: Standard_Integer): Standard_Integer;
  DumpDSP(VP: TopOpeBRep_VPointInter, GK: TopOpeBRepDS_Kind, G: Standard_Integer, newinDS: Standard_Boolean): void;
  PFacesFillerDummy(): TopOpeBRep_PFacesFiller;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRep_FFTransitionTool {
  constructor();
  ProcessLineTransition_1(P: TopOpeBRep_VPointInter, Index: Standard_Integer, EdgeOrientation: TopAbs_Orientation): TopOpeBRepDS_Transition;
  ProcessLineTransition_2(P: TopOpeBRep_VPointInter, L: TopOpeBRep_LineInter): TopOpeBRepDS_Transition;
  ProcessEdgeTransition(P: TopOpeBRep_VPointInter, Index: Standard_Integer, LineOrientation: TopAbs_Orientation): TopOpeBRepDS_Transition;
  ProcessFaceTransition(L: TopOpeBRep_LineInter, Index: Standard_Integer, FaceOrientation: TopAbs_Orientation): TopOpeBRepDS_Transition;
  ProcessEdgeONTransition(VP: TopOpeBRep_VPointInter, Index: Standard_Integer, R: TopoDS_Shape, E: TopoDS_Shape, F: TopoDS_Shape): TopOpeBRepDS_Transition;
}

export declare class TopOpeBRep_GeomTool {
  constructor();
  MakeCurves(min: Standard_Real, max: Standard_Real, L: TopOpeBRep_LineInter, S1: TopoDS_Shape, S2: TopoDS_Shape, C: TopOpeBRepDS_Curve, PC1: any, PC2: any): void;
  MakeCurve(min: Standard_Real, max: Standard_Real, L: TopOpeBRep_LineInter, C: any): void;
  MakeBSpline1fromWALKING3d(L: TopOpeBRep_LineInter): any;
  MakeBSpline1fromWALKING2d(L: TopOpeBRep_LineInter, SI: Standard_Integer): any;
}

export declare class TopOpeBRep_Hctxee2d extends Standard_Transient {
  constructor()
  SetEdges(E1: TopoDS_Edge, E2: TopoDS_Edge, BAS1: BRepAdaptor_Surface, BAS2: BRepAdaptor_Surface): void;
  Edge(I: Standard_Integer): TopoDS_Shape;
  Curve(I: Standard_Integer): Geom2dAdaptor_Curve;
  Domain(I: Standard_Integer): IntRes2d_Domain;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRep_Hctxff2d extends Standard_Transient {
  constructor()
  SetFaces(F1: TopoDS_Face, F2: TopoDS_Face): void;
  SetHSurfaces(S1: any, S2: any): void;
  SetTolerances(Tol1: Standard_Real, Tol2: Standard_Real): void;
  GetTolerances(Tol1: Standard_Real, Tol2: Standard_Real): void;
  GetMaxTolerance(): Standard_Real;
  Face(I: Standard_Integer): TopoDS_Face;
  HSurface(I: Standard_Integer): any;
  SurfacesSameOriented(): Standard_Boolean;
  FacesSameOriented(): Standard_Boolean;
  FaceSameOrientedWithRef(I: Standard_Integer): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRep_PointGeomTool {
  constructor();
  MakePoint_1(IP: TopOpeBRep_VPointInter): TopOpeBRepDS_Point;
  MakePoint_2(P2D: TopOpeBRep_Point2d): TopOpeBRepDS_Point;
  MakePoint_3(FEI: TopOpeBRep_FaceEdgeIntersector): TopOpeBRepDS_Point;
  MakePoint_4(S: TopoDS_Shape): TopOpeBRepDS_Point;
  IsEqual(DSP1: TopOpeBRepDS_Point, DSP2: TopOpeBRepDS_Point): Standard_Boolean;
}

export declare class TopOpeBRep_VPointInterClassifier {
  constructor()
  VPointPosition(F: TopoDS_Shape, VP: TopOpeBRep_VPointInter, ShapeIndex: Standard_Integer, PC: TopOpeBRep_PointClassifier, AssumeINON: Standard_Boolean, Tol: Standard_Real): TopAbs_State;
  Edge(): TopoDS_Shape;
  EdgeParameter(): Standard_Real;
}

export declare class TopOpeBRep_VPointInterIterator {
  Init_1(LI: TopOpeBRep_LineInter, checkkeep: Standard_Boolean): void;
  Init_2(): void;
  More(): Standard_Boolean;
  Next(): void;
  CurrentVP(): TopOpeBRep_VPointInter;
  CurrentVPIndex(): Standard_Integer;
  ChangeCurrentVP(): TopOpeBRep_VPointInter;
  PLineInterDummy(): TopOpeBRep_PLineInter;
}

  export declare class TopOpeBRep_VPointInterIterator_1 extends TopOpeBRep_VPointInterIterator {
    constructor();
  }

  export declare class TopOpeBRep_VPointInterIterator_2 extends TopOpeBRep_VPointInterIterator {
    constructor(LI: TopOpeBRep_LineInter);
  }

export declare class TopOpeBRep_WPointInterIterator {
  Init_1(LI: TopOpeBRep_LineInter): void;
  Init_2(): void;
  More(): Standard_Boolean;
  Next(): void;
  CurrentWP(): TopOpeBRep_WPointInter;
  PLineInterDummy(): TopOpeBRep_PLineInter;
}

  export declare class TopOpeBRep_WPointInterIterator_1 extends TopOpeBRep_WPointInterIterator {
    constructor();
  }

  export declare class TopOpeBRep_WPointInterIterator_2 extends TopOpeBRep_WPointInterIterator {
    constructor(LI: TopOpeBRep_LineInter);
  }

export declare class TopOpeBRepBuild_BlockIterator {
  Initialize(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): Standard_Integer;
  Extent(): Standard_Integer;
}

  export declare class TopOpeBRepBuild_BlockIterator_1 extends TopOpeBRepBuild_BlockIterator {
    constructor();
  }

  export declare class TopOpeBRepBuild_BlockIterator_2 extends TopOpeBRepBuild_BlockIterator {
    constructor(Lower: Standard_Integer, Upper: Standard_Integer);
  }

export declare class TopOpeBRepBuild_Loop extends Standard_Transient {
  IsShape(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  BlockIterator(): TopOpeBRepBuild_BlockIterator;
  Dump(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopOpeBRepBuild_Loop_1 extends TopOpeBRepBuild_Loop {
    constructor(S: TopoDS_Shape);
  }

  export declare class TopOpeBRepBuild_Loop_2 extends TopOpeBRepBuild_Loop {
    constructor(BI: TopOpeBRepBuild_BlockIterator);
  }

export declare class TopOpeBRepBuild_AreaBuilder {
  InitAreaBuilder(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean): void;
  InitArea(): Standard_Integer;
  MoreArea(): Standard_Boolean;
  NextArea(): void;
  InitLoop(): Standard_Integer;
  MoreLoop(): Standard_Boolean;
  NextLoop(): void;
  Loop(): any;
  ADD_Loop_TO_LISTOFLoop(L: any, LOL: TopOpeBRepBuild_ListOfLoop, s: Standard_Address): void;
  REM_Loop_FROM_LISTOFLoop(ITLOL: TopOpeBRepBuild_ListIteratorOfListOfLoop, LOL: TopOpeBRepBuild_ListOfLoop, s: Standard_Address): void;
  ADD_LISTOFLoop_TO_LISTOFLoop(LOL1: TopOpeBRepBuild_ListOfLoop, LOL2: TopOpeBRepBuild_ListOfLoop, s: Standard_Address, s1: Standard_Address, s2: Standard_Address): void;
}

  export declare class TopOpeBRepBuild_AreaBuilder_1 extends TopOpeBRepBuild_AreaBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_AreaBuilder_2 extends TopOpeBRepBuild_AreaBuilder {
    constructor(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_Area1dBuilder extends TopOpeBRepBuild_AreaBuilder {
  InitAreaBuilder(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean): void;
  ADD_Loop_TO_LISTOFLoop(L: any, LOL: TopOpeBRepBuild_ListOfLoop, s: Standard_Address): void;
  REM_Loop_FROM_LISTOFLoop(ITLOL: TopOpeBRepBuild_ListIteratorOfListOfLoop, LOL: TopOpeBRepBuild_ListOfLoop, s: Standard_Address): void;
  ADD_LISTOFLoop_TO_LISTOFLoop(LOL1: TopOpeBRepBuild_ListOfLoop, LOL2: TopOpeBRepBuild_ListOfLoop, s: Standard_Address, s1: Standard_Address, s2: Standard_Address): void;
  DumpList(L: TopOpeBRepBuild_ListOfLoop): void;
}

  export declare class TopOpeBRepBuild_Area1dBuilder_1 extends TopOpeBRepBuild_Area1dBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_Area1dBuilder_2 extends TopOpeBRepBuild_Area1dBuilder {
    constructor(LS: TopOpeBRepBuild_PaveSet, LC: TopOpeBRepBuild_PaveClassifier, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_Area2dBuilder extends TopOpeBRepBuild_AreaBuilder {
  InitAreaBuilder(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean): void;
}

  export declare class TopOpeBRepBuild_Area2dBuilder_1 extends TopOpeBRepBuild_Area2dBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_Area2dBuilder_2 extends TopOpeBRepBuild_Area2dBuilder {
    constructor(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_Area3dBuilder extends TopOpeBRepBuild_AreaBuilder {
  InitAreaBuilder(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean): void;
}

  export declare class TopOpeBRepBuild_Area3dBuilder_1 extends TopOpeBRepBuild_Area3dBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_Area3dBuilder_2 extends TopOpeBRepBuild_Area3dBuilder {
    constructor(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_BlockBuilder {
  MakeBlock(SS: TopOpeBRepBuild_ShapeSet): void;
  InitBlock(): void;
  MoreBlock(): Standard_Boolean;
  NextBlock(): void;
  BlockIterator(): TopOpeBRepBuild_BlockIterator;
  Element_1(BI: TopOpeBRepBuild_BlockIterator): TopoDS_Shape;
  Element_2(I: Standard_Integer): TopoDS_Shape;
  Element_3(S: TopoDS_Shape): Standard_Integer;
  ElementIsValid_1(BI: TopOpeBRepBuild_BlockIterator): Standard_Boolean;
  ElementIsValid_2(I: Standard_Integer): Standard_Boolean;
  AddElement(S: TopoDS_Shape): Standard_Integer;
  SetValid_1(BI: TopOpeBRepBuild_BlockIterator, isvalid: Standard_Boolean): void;
  SetValid_2(I: Standard_Integer, isvalid: Standard_Boolean): void;
  CurrentBlockIsRegular(): Standard_Boolean;
}

  export declare class TopOpeBRepBuild_BlockBuilder_1 extends TopOpeBRepBuild_BlockBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_BlockBuilder_2 extends TopOpeBRepBuild_BlockBuilder {
    constructor(SS: TopOpeBRepBuild_ShapeSet);
  }

export declare class TopOpeBRepTool_GeomTool {
  constructor(TypeC3D: TopOpeBRepTool_OutCurveType, CompC3D: Standard_Boolean, CompPC1: Standard_Boolean, CompPC2: Standard_Boolean)
  Define_1(TypeC3D: TopOpeBRepTool_OutCurveType, CompC3D: Standard_Boolean, CompPC1: Standard_Boolean, CompPC2: Standard_Boolean): void;
  Define_2(TypeC3D: TopOpeBRepTool_OutCurveType): void;
  DefineCurves(CompC3D: Standard_Boolean): void;
  DefinePCurves1(CompPC1: Standard_Boolean): void;
  DefinePCurves2(CompPC2: Standard_Boolean): void;
  Define_3(GT: TopOpeBRepTool_GeomTool): void;
  GetTolerances(tol3d: Standard_Real, tol2d: Standard_Real): void;
  SetTolerances(tol3d: Standard_Real, tol2d: Standard_Real): void;
  NbPntMax(): Standard_Integer;
  SetNbPntMax(NbPntMax: Standard_Integer): void;
  TypeC3D(): TopOpeBRepTool_OutCurveType;
  CompC3D(): Standard_Boolean;
  CompPC1(): Standard_Boolean;
  CompPC2(): Standard_Boolean;
}

export declare class TopOpeBRepTool_CurveTool {
  ChangeGeomTool(): TopOpeBRepTool_GeomTool;
  GetGeomTool(): TopOpeBRepTool_GeomTool;
  SetGeomTool(GT: TopOpeBRepTool_GeomTool): void;
  MakeCurves(min: Standard_Real, max: Standard_Real, C3D: any, PC1: any, PC2: any, S1: TopoDS_Shape, S2: TopoDS_Shape, C3DN: any, PC1N: any, PC2N: any, Tol3d: Standard_Real, Tol2d: Standard_Real): Standard_Boolean;
  MakeBSpline1fromPnt(P: TColgp_Array1OfPnt): any;
  MakeBSpline1fromPnt2d(P: TColgp_Array1OfPnt2d): any;
  IsProjectable(S: TopoDS_Shape, C: any): Standard_Boolean;
  MakePCurveOnFace(S: TopoDS_Shape, C: any, TolReached2d: Standard_Real, first: Standard_Real, last: Standard_Real): any;
}

  export declare class TopOpeBRepTool_CurveTool_1 extends TopOpeBRepTool_CurveTool {
    constructor();
  }

  export declare class TopOpeBRepTool_CurveTool_2 extends TopOpeBRepTool_CurveTool {
    constructor(OCT: TopOpeBRepTool_OutCurveType);
  }

  export declare class TopOpeBRepTool_CurveTool_3 extends TopOpeBRepTool_CurveTool {
    constructor(GT: TopOpeBRepTool_GeomTool);
  }

export declare class TopOpeBRepDS_BuildTool {
  GetGeomTool(): TopOpeBRepTool_GeomTool;
  ChangeGeomTool(): TopOpeBRepTool_GeomTool;
  MakeVertex(V: TopoDS_Shape, P: TopOpeBRepDS_Point): void;
  MakeEdge_1(E: TopoDS_Shape, C: TopOpeBRepDS_Curve): void;
  MakeEdge_2(E: TopoDS_Shape, C: TopOpeBRepDS_Curve, DS: TopOpeBRepDS_DataStructure): void;
  MakeEdge_3(E: TopoDS_Shape, C: any, Tol: Standard_Real): void;
  MakeEdge_4(E: TopoDS_Shape): void;
  MakeWire(W: TopoDS_Shape): void;
  MakeFace(F: TopoDS_Shape, S: TopOpeBRepDS_Surface): void;
  MakeShell(Sh: TopoDS_Shape): void;
  MakeSolid(S: TopoDS_Shape): void;
  CopyEdge(Ein: TopoDS_Shape, Eou: TopoDS_Shape): void;
  GetOrientedEdgeVertices(E: TopoDS_Edge, Vmin: TopoDS_Vertex, Vmax: TopoDS_Vertex, Parmin: Standard_Real, Parmax: Standard_Real): void;
  UpdateEdgeCurveTol(F1: TopoDS_Face, F2: TopoDS_Face, E: TopoDS_Edge, C3Dnew: any, tol3d: Standard_Real, tol2d1: Standard_Real, tol2d2: Standard_Real, newtol: Standard_Real, newparmin: Standard_Real, newparmax: Standard_Real): void;
  ApproxCurves(C: TopOpeBRepDS_Curve, E: TopoDS_Edge, inewC: Standard_Integer, HDS: any): void;
  ComputePCurves(C: TopOpeBRepDS_Curve, E: TopoDS_Edge, newC: TopOpeBRepDS_Curve, CompPC1: Standard_Boolean, CompPC2: Standard_Boolean, CompC3D: Standard_Boolean): void;
  PutPCurves(newC: TopOpeBRepDS_Curve, E: TopoDS_Edge, CompPC1: Standard_Boolean, CompPC2: Standard_Boolean): void;
  RecomputeCurves(C: TopOpeBRepDS_Curve, oldE: TopoDS_Edge, E: TopoDS_Edge, inewC: Standard_Integer, HDS: any): void;
  CopyFace(Fin: TopoDS_Shape, Fou: TopoDS_Shape): void;
  AddEdgeVertex_1(Ein: TopoDS_Shape, Eou: TopoDS_Shape, V: TopoDS_Shape): void;
  AddEdgeVertex_2(E: TopoDS_Shape, V: TopoDS_Shape): void;
  AddWireEdge(W: TopoDS_Shape, E: TopoDS_Shape): void;
  AddFaceWire(F: TopoDS_Shape, W: TopoDS_Shape): void;
  AddShellFace(Sh: TopoDS_Shape, F: TopoDS_Shape): void;
  AddSolidShell(S: TopoDS_Shape, Sh: TopoDS_Shape): void;
  Parameter_1(E: TopoDS_Shape, V: TopoDS_Shape, P: Standard_Real): void;
  Range(E: TopoDS_Shape, first: Standard_Real, last: Standard_Real): void;
  UpdateEdge(Ein: TopoDS_Shape, Eou: TopoDS_Shape): void;
  Parameter_2(C: TopOpeBRepDS_Curve, E: TopoDS_Shape, V: TopoDS_Shape): void;
  Curve3D(E: TopoDS_Shape, C: any, Tol: Standard_Real): void;
  PCurve_1(F: TopoDS_Shape, E: TopoDS_Shape, C: any): void;
  PCurve_2(F: TopoDS_Shape, E: TopoDS_Shape, CDS: TopOpeBRepDS_Curve, C: any): void;
  Orientation_1(S: TopoDS_Shape, O: TopAbs_Orientation): void;
  Orientation_2(S: TopoDS_Shape): TopAbs_Orientation;
  Closed(S: TopoDS_Shape, B: Standard_Boolean): void;
  Approximation(): Standard_Boolean;
  UpdateSurface_1(F: TopoDS_Shape, SU: any): void;
  UpdateSurface_2(E: TopoDS_Shape, oldF: TopoDS_Shape, newF: TopoDS_Shape): void;
  OverWrite_1(): Standard_Boolean;
  OverWrite_2(O: Standard_Boolean): void;
  Translate_1(): Standard_Boolean;
  Translate_2(T: Standard_Boolean): void;
}

  export declare class TopOpeBRepDS_BuildTool_1 extends TopOpeBRepDS_BuildTool {
    constructor();
  }

  export declare class TopOpeBRepDS_BuildTool_2 extends TopOpeBRepDS_BuildTool {
    constructor(OutCurveType: TopOpeBRepTool_OutCurveType);
  }

  export declare class TopOpeBRepDS_BuildTool_3 extends TopOpeBRepDS_BuildTool {
    constructor(GT: TopOpeBRepTool_GeomTool);
  }

export declare class TopOpeBRepDS_ListOfShapeOn1State {
  constructor()
  ListOnState(): TopTools_ListOfShape;
  ChangeListOnState(): TopTools_ListOfShape;
  IsSplit(): Standard_Boolean;
  Split(B: Standard_Boolean): void;
  Clear(): void;
}

export declare class TopOpeBRepTool_SolidClassifier {
  constructor()
  Clear(): void;
  LoadSolid(S: TopoDS_Solid): void;
  Classify_1(S: TopoDS_Solid, P: gp_Pnt, Tol: Standard_Real): TopAbs_State;
  LoadShell(S: TopoDS_Shell): void;
  Classify_2(S: TopoDS_Shell, P: gp_Pnt, Tol: Standard_Real): TopAbs_State;
  State(): TopAbs_State;
}

export declare class TopOpeBRepTool_ShapeClassifier {
  ClearAll(): void;
  ClearCurrent(): void;
  SetReference(SRef: TopoDS_Shape): void;
  StateShapeShape_1(S: TopoDS_Shape, SRef: TopoDS_Shape, samedomain: Standard_Integer): TopAbs_State;
  SameDomain_1(): Standard_Integer;
  SameDomain_2(samedomain: Standard_Integer): void;
  StateShapeShape_2(S: TopoDS_Shape, AvoidS: TopoDS_Shape, SRef: TopoDS_Shape): TopAbs_State;
  StateShapeShape_3(S: TopoDS_Shape, LAvoidS: TopTools_ListOfShape, SRef: TopoDS_Shape): TopAbs_State;
  StateShapeReference_1(S: TopoDS_Shape, AvoidS: TopoDS_Shape): TopAbs_State;
  StateShapeReference_2(S: TopoDS_Shape, LAvoidS: TopTools_ListOfShape): TopAbs_State;
  ChangeSolidClassifier(): TopOpeBRepTool_SolidClassifier;
  StateP2DReference(P2D: gp_Pnt2d): void;
  StateP3DReference(P3D: gp_Pnt): void;
  State(): TopAbs_State;
  P2D(): gp_Pnt2d;
  P3D(): gp_Pnt;
}

  export declare class TopOpeBRepTool_ShapeClassifier_1 extends TopOpeBRepTool_ShapeClassifier {
    constructor();
  }

  export declare class TopOpeBRepTool_ShapeClassifier_2 extends TopOpeBRepTool_ShapeClassifier {
    constructor(SRef: TopoDS_Shape);
  }

export declare class TopOpeBRepBuild_BuilderON {
  Perform(PB: TopOpeBRepBuild_PBuilder, F: TopoDS_Shape, PG: TopOpeBRepBuild_PGTopo, PLSclass: TopOpeBRepTool_Plos, PWES: TopOpeBRepBuild_PWireEdgeSet): void;
  GFillONCheckI(I: any): Standard_Boolean;
  GFillONPartsWES1(I: any): void;
  GFillONPartsWES2(I: any, EspON: TopoDS_Shape): void;
  Perform2d(PB: TopOpeBRepBuild_PBuilder, F: TopoDS_Shape, PG: TopOpeBRepBuild_PGTopo, PLSclass: TopOpeBRepTool_Plos, PWES: TopOpeBRepBuild_PWireEdgeSet): void;
  GFillONParts2dWES2(I: any, EspON: TopoDS_Shape): void;
}

  export declare class TopOpeBRepBuild_BuilderON_1 extends TopOpeBRepBuild_BuilderON {
    constructor();
  }

  export declare class TopOpeBRepBuild_BuilderON_2 extends TopOpeBRepBuild_BuilderON {
    constructor(PB: TopOpeBRepBuild_PBuilder, F: TopoDS_Shape, PG: TopOpeBRepBuild_PGTopo, PLSclass: TopOpeBRepTool_Plos, PWES: TopOpeBRepBuild_PWireEdgeSet);
  }

export declare class TopOpeBRepBuild_LoopClassifier {
  Compare(L1: any, L2: any): TopAbs_State;
}

export declare class TopOpeBRepBuild_CompositeClassifier extends TopOpeBRepBuild_LoopClassifier {
  Compare(L1: any, L2: any): TopAbs_State;
  CompareShapes(B1: TopoDS_Shape, B2: TopoDS_Shape): TopAbs_State;
  CompareElementToShape(E: TopoDS_Shape, B: TopoDS_Shape): TopAbs_State;
  ResetShape(B: TopoDS_Shape): void;
  ResetElement(E: TopoDS_Shape): void;
  CompareElement(E: TopoDS_Shape): Standard_Boolean;
  State(): TopAbs_State;
}

export declare class TopOpeBRepBuild_CorrectFace2d {
  Face(): TopoDS_Face;
  Perform(): void;
  IsDone(): Standard_Boolean;
  ErrorStatus(): Standard_Integer;
  CorrectedFace(): TopoDS_Face;
  SetMapOfTrans2dInfo(aMap: TopTools_IndexedDataMapOfShapeShape): void;
  MapOfTrans2dInfo(): TopTools_IndexedDataMapOfShapeShape;
  GetP2dFL(aFace: TopoDS_Face, anEdge: TopoDS_Edge, P2dF: gp_Pnt2d, P2dL: gp_Pnt2d): void;
  CheckList(aFace: TopoDS_Face, aHeadList: TopTools_ListOfShape): void;
}

  export declare class TopOpeBRepBuild_CorrectFace2d_1 extends TopOpeBRepBuild_CorrectFace2d {
    constructor();
  }

  export declare class TopOpeBRepBuild_CorrectFace2d_2 extends TopOpeBRepBuild_CorrectFace2d {
    constructor(aFace: TopoDS_Face, anAvoidMap: TopTools_IndexedMapOfOrientedShape, aMap: TopTools_IndexedDataMapOfShapeShape);
  }

export declare class TopOpeBRepBuild_ShapeListOfShape {
  List(): TopTools_ListOfShape;
  ChangeList(): TopTools_ListOfShape;
  Shape(): TopoDS_Shape;
  ChangeShape(): TopoDS_Shape;
}

  export declare class TopOpeBRepBuild_ShapeListOfShape_1 extends TopOpeBRepBuild_ShapeListOfShape {
    constructor();
  }

  export declare class TopOpeBRepBuild_ShapeListOfShape_2 extends TopOpeBRepBuild_ShapeListOfShape {
    constructor(S: TopoDS_Shape);
  }

  export declare class TopOpeBRepBuild_ShapeListOfShape_3 extends TopOpeBRepBuild_ShapeListOfShape {
    constructor(S: TopoDS_Shape, L: TopTools_ListOfShape);
  }

export declare class TopOpeBRepBuild_EdgeBuilder extends TopOpeBRepBuild_Area1dBuilder {
  InitEdgeBuilder(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean): void;
  InitEdge(): void;
  MoreEdge(): Standard_Boolean;
  NextEdge(): void;
  InitVertex(): void;
  MoreVertex(): Standard_Boolean;
  NextVertex(): void;
  Vertex(): TopoDS_Shape;
  Parameter(): Standard_Real;
}

  export declare class TopOpeBRepBuild_EdgeBuilder_1 extends TopOpeBRepBuild_EdgeBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_EdgeBuilder_2 extends TopOpeBRepBuild_EdgeBuilder {
    constructor(LS: TopOpeBRepBuild_PaveSet, LC: TopOpeBRepBuild_PaveClassifier, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_FaceAreaBuilder extends TopOpeBRepBuild_Area2dBuilder {
  InitFaceAreaBuilder(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean): void;
}

  export declare class TopOpeBRepBuild_FaceAreaBuilder_1 extends TopOpeBRepBuild_FaceAreaBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_FaceAreaBuilder_2 extends TopOpeBRepBuild_FaceAreaBuilder {
    constructor(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_LoopSet {
  constructor()
  ChangeListOfLoop(): TopOpeBRepBuild_ListOfLoop;
  InitLoop(): void;
  MoreLoop(): Standard_Boolean;
  NextLoop(): void;
  Loop(): any;
}

export declare class TopOpeBRepBuild_FaceBuilder {
  InitFaceBuilder(ES: TopOpeBRepBuild_WireEdgeSet, F: TopoDS_Shape, ForceClass: Standard_Boolean): void;
  DetectUnclosedWire(mapVVsameG: TopTools_IndexedDataMapOfShapeShape, mapVon1Edge: TopTools_IndexedDataMapOfShapeShape): void;
  CorrectGclosedWire(mapVVref: TopTools_IndexedDataMapOfShapeShape, mapVon1Edge: TopTools_IndexedDataMapOfShapeShape): void;
  DetectPseudoInternalEdge(mapE: TopTools_IndexedMapOfShape): void;
  Face(): TopoDS_Shape;
  InitFace(): Standard_Integer;
  MoreFace(): Standard_Boolean;
  NextFace(): void;
  InitWire(): Standard_Integer;
  MoreWire(): Standard_Boolean;
  NextWire(): void;
  IsOldWire(): Standard_Boolean;
  OldWire(): TopoDS_Shape;
  FindNextValidElement(): void;
  InitEdge(): Standard_Integer;
  MoreEdge(): Standard_Boolean;
  NextEdge(): void;
  Edge(): TopoDS_Shape;
  EdgeConnexity(E: TopoDS_Shape): Standard_Integer;
  AddEdgeWire(E: TopoDS_Shape, W: TopoDS_Shape): Standard_Integer;
}

  export declare class TopOpeBRepBuild_FaceBuilder_1 extends TopOpeBRepBuild_FaceBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_FaceBuilder_2 extends TopOpeBRepBuild_FaceBuilder {
    constructor(ES: TopOpeBRepBuild_WireEdgeSet, F: TopoDS_Shape, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_FuseFace {
  Init(LIF: TopTools_ListOfShape, LRF: TopTools_ListOfShape, CXM: Standard_Integer): void;
  PerformFace(): void;
  PerformEdge(): void;
  ClearEdge(): void;
  ClearVertex(): void;
  IsDone(): Standard_Boolean;
  IsModified(): Standard_Boolean;
  LFuseFace(): TopTools_ListOfShape;
  LInternEdge(): TopTools_ListOfShape;
  LExternEdge(): TopTools_ListOfShape;
  LModifEdge(): TopTools_ListOfShape;
  LInternVertex(): TopTools_ListOfShape;
  LExternVertex(): TopTools_ListOfShape;
  LModifVertex(): TopTools_ListOfShape;
}

  export declare class TopOpeBRepBuild_FuseFace_1 extends TopOpeBRepBuild_FuseFace {
    constructor();
  }

  export declare class TopOpeBRepBuild_FuseFace_2 extends TopOpeBRepBuild_FuseFace {
    constructor(LIF: TopTools_ListOfShape, LRF: TopTools_ListOfShape, CXM: Standard_Integer);
  }

export declare class TopOpeBRepBuild_GIter {
  Init_1(): void;
  Init_2(G: TopOpeBRepBuild_GTopo): void;
  More(): Standard_Boolean;
  Next(): void;
  Current(s1: TopAbs_State, s2: TopAbs_State): void;
  Dump(OS: Standard_OStream): void;
}

  export declare class TopOpeBRepBuild_GIter_1 extends TopOpeBRepBuild_GIter {
    constructor();
  }

  export declare class TopOpeBRepBuild_GIter_2 extends TopOpeBRepBuild_GIter {
    constructor(G: TopOpeBRepBuild_GTopo);
  }

export declare class TopOpeBRepBuild_GTool {
  constructor();
  GFusUnsh(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GFusSame(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GFusDiff(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GCutUnsh(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GCutSame(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GCutDiff(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GComUnsh(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GComSame(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  GComDiff(s1: TopAbs_ShapeEnum, s2: TopAbs_ShapeEnum): TopOpeBRepBuild_GTopo;
  Dump(OS: Standard_OStream): void;
}

export declare class TopOpeBRepBuild_GTopo {
  Reset(): void;
  Set(II: Standard_Boolean, IN: Standard_Boolean, IO: Standard_Boolean, NI: Standard_Boolean, NN: Standard_Boolean, NO: Standard_Boolean, OI: Standard_Boolean, ON: Standard_Boolean, OO: Standard_Boolean): void;
  Type(t1: TopAbs_ShapeEnum, t2: TopAbs_ShapeEnum): void;
  ChangeType(t1: TopAbs_ShapeEnum, t2: TopAbs_ShapeEnum): void;
  Config1(): TopOpeBRepDS_Config;
  Config2(): TopOpeBRepDS_Config;
  ChangeConfig(C1: TopOpeBRepDS_Config, C2: TopOpeBRepDS_Config): void;
  Value_1(s1: TopAbs_State, s2: TopAbs_State): Standard_Boolean;
  Value_2(I1: Standard_Integer, I2: Standard_Integer): Standard_Boolean;
  Value_3(II: Standard_Integer): Standard_Boolean;
  ChangeValue_1(i1: Standard_Integer, i2: Standard_Integer, b: Standard_Boolean): void;
  ChangeValue_2(s1: TopAbs_State, s2: TopAbs_State, b: Standard_Boolean): void;
  GIndex(S: TopAbs_State): Standard_Integer;
  GState(I: Standard_Integer): TopAbs_State;
  Index(II: Standard_Integer, i1: Standard_Integer, i2: Standard_Integer): void;
  DumpVal(OS: Standard_OStream, s1: TopAbs_State, s2: TopAbs_State): void;
  DumpType(OS: Standard_OStream): void;
  DumpSSB(OS: Standard_OStream, s1: TopAbs_State, s2: TopAbs_State, b: Standard_Boolean): void;
  Dump(OS: Standard_OStream, s: Standard_Address): void;
  StatesON(s1: TopAbs_State, s2: TopAbs_State): void;
  IsToReverse1(): Standard_Boolean;
  IsToReverse2(): Standard_Boolean;
  SetReverse(rev: Standard_Boolean): void;
  Reverse(): Standard_Boolean;
  CopyPermuted(): TopOpeBRepBuild_GTopo;
}

  export declare class TopOpeBRepBuild_GTopo_1 extends TopOpeBRepBuild_GTopo {
    constructor();
  }

  export declare class TopOpeBRepBuild_GTopo_2 extends TopOpeBRepBuild_GTopo {
    constructor(II: Standard_Boolean, IN: Standard_Boolean, IO: Standard_Boolean, NI: Standard_Boolean, NN: Standard_Boolean, NO: Standard_Boolean, OI: Standard_Boolean, ON: Standard_Boolean, OO: Standard_Boolean, t1: TopAbs_ShapeEnum, t2: TopAbs_ShapeEnum, C1: TopOpeBRepDS_Config, C2: TopOpeBRepDS_Config);
  }

export declare class TopOpeBRepBuild_HBuilder extends Standard_Transient {
  constructor(BT: TopOpeBRepDS_BuildTool)
  BuildTool(): TopOpeBRepDS_BuildTool;
  Perform_1(HDS: any): void;
  Perform_2(HDS: any, S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  Clear(): void;
  DataStructure(): any;
  ChangeBuildTool(): TopOpeBRepDS_BuildTool;
  MergeShapes(S1: TopoDS_Shape, TB1: TopAbs_State, S2: TopoDS_Shape, TB2: TopAbs_State): void;
  MergeSolids(S1: TopoDS_Shape, TB1: TopAbs_State, S2: TopoDS_Shape, TB2: TopAbs_State): void;
  MergeSolid(S: TopoDS_Shape, TB: TopAbs_State): void;
  IsSplit(S: TopoDS_Shape, ToBuild: TopAbs_State): Standard_Boolean;
  Splits(S: TopoDS_Shape, ToBuild: TopAbs_State): TopTools_ListOfShape;
  IsMerged(S: TopoDS_Shape, ToBuild: TopAbs_State): Standard_Boolean;
  Merged(S: TopoDS_Shape, ToBuild: TopAbs_State): TopTools_ListOfShape;
  NewVertex(I: Standard_Integer): TopoDS_Shape;
  NewEdges(I: Standard_Integer): TopTools_ListOfShape;
  ChangeNewEdges(I: Standard_Integer): TopTools_ListOfShape;
  NewFaces(I: Standard_Integer): TopTools_ListOfShape;
  Section(): TopTools_ListOfShape;
  InitExtendedSectionDS(k: Standard_Integer): void;
  InitSection(k: Standard_Integer): void;
  MoreSection(): Standard_Boolean;
  NextSection(): void;
  CurrentSection(): TopoDS_Shape;
  GetDSEdgeFromSectEdge(E: TopoDS_Shape, rank: Standard_Integer): Standard_Integer;
  GetDSFaceFromDSEdge(indexEdg: Standard_Integer, rank: Standard_Integer): TColStd_ListOfInteger;
  GetDSCurveFromSectEdge(SectEdge: TopoDS_Shape): Standard_Integer;
  GetDSFaceFromDSCurve(indexCur: Standard_Integer, rank: Standard_Integer): Standard_Integer;
  GetDSPointFromNewVertex(NewVert: TopoDS_Shape): Standard_Integer;
  EdgeCurveAncestors(E: TopoDS_Shape, F1: TopoDS_Shape, F2: TopoDS_Shape, IC: Standard_Integer): Standard_Boolean;
  EdgeSectionAncestors(E: TopoDS_Shape, LF1: TopTools_ListOfShape, LF2: TopTools_ListOfShape, LE1: TopTools_ListOfShape, LE2: TopTools_ListOfShape): Standard_Boolean;
  IsKPart(): Standard_Integer;
  MergeKPart(TB1: TopAbs_State, TB2: TopAbs_State): void;
  ChangeBuilder(): TopOpeBRepBuild_Builder;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepBuild_VertexInfo {
  constructor()
  SetVertex(aV: TopoDS_Vertex): void;
  Vertex(): TopoDS_Vertex;
  SetSmart(aFlag: Standard_Boolean): void;
  Smart(): Standard_Boolean;
  NbCases(): Standard_Integer;
  FoundOut(): Standard_Integer;
  AddIn(anE: TopoDS_Edge): void;
  AddOut(anE: TopoDS_Edge): void;
  SetCurrentIn(anE: TopoDS_Edge): void;
  EdgesIn(): TopTools_IndexedMapOfOrientedShape;
  EdgesOut(): TopTools_IndexedMapOfOrientedShape;
  ChangeEdgesOut(): TopTools_IndexedMapOfOrientedShape;
  Dump(): void;
  CurrentOut(): TopoDS_Edge;
  AppendPassed(anE: TopoDS_Edge): void;
  RemovePassed(): void;
  ListPassed(): TopTools_ListOfShape;
  Prepare(aL: TopTools_ListOfShape): void;
}

export declare class TopOpeBRepBuild_Pave extends TopOpeBRepBuild_Loop {
  constructor(V: TopoDS_Shape, P: Standard_Real, bound: Standard_Boolean)
  HasSameDomain_1(b: Standard_Boolean): void;
  SameDomain_1(VSD: TopoDS_Shape): void;
  HasSameDomain_2(): Standard_Boolean;
  SameDomain_2(): TopoDS_Shape;
  Vertex(): TopoDS_Shape;
  ChangeVertex(): TopoDS_Shape;
  Parameter_1(): Standard_Real;
  Parameter_2(Par: Standard_Real): void;
  InterferenceType(): TopOpeBRepDS_Kind;
  IsShape(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  Dump(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepBuild_PaveClassifier extends TopOpeBRepBuild_LoopClassifier {
  constructor(E: TopoDS_Shape)
  Compare(L1: any, L2: any): TopAbs_State;
  SetFirstParameter(P: Standard_Real): void;
  ClosedVertices(B: Standard_Boolean): void;
  AdjustCase(p1: Standard_Real, o: TopAbs_Orientation, first: Standard_Real, period: Standard_Real, tol: Standard_Real, cas: Standard_Integer): Standard_Real;
}

export declare class TopOpeBRepBuild_PaveSet extends TopOpeBRepBuild_LoopSet {
  constructor(E: TopoDS_Shape)
  RemovePV(B: Standard_Boolean): void;
  Append(PV: any): void;
  InitLoop(): void;
  MoreLoop(): Standard_Boolean;
  NextLoop(): void;
  Loop(): any;
  Edge(): TopoDS_Edge;
  HasEqualParameters(): Standard_Boolean;
  EqualParameters(): Standard_Real;
  ClosedVertices(): Standard_Boolean;
  SortPave(Lin: TopOpeBRepBuild_ListOfPave, Lout: TopOpeBRepBuild_ListOfPave): void;
}

export declare class TopOpeBRepBuild_ShapeSet {
  constructor(SubShapeType: TopAbs_ShapeEnum, checkshape: Standard_Boolean)
  AddShape(S: TopoDS_Shape): void;
  AddStartElement(S: TopoDS_Shape): void;
  AddElement(S: TopoDS_Shape): void;
  StartElements(): TopTools_ListOfShape;
  InitShapes(): void;
  MoreShapes(): Standard_Boolean;
  NextShape(): void;
  Shape(): TopoDS_Shape;
  InitStartElements(): void;
  MoreStartElements(): Standard_Boolean;
  NextStartElement(): void;
  StartElement(): TopoDS_Shape;
  InitNeighbours(S: TopoDS_Shape): void;
  MoreNeighbours(): Standard_Boolean;
  NextNeighbour(): void;
  Neighbour(): TopoDS_Shape;
  ChangeStartShapes(): TopTools_ListOfShape;
  FindNeighbours(): void;
  MakeNeighboursList(E: TopoDS_Shape, V: TopoDS_Shape): TopTools_ListOfShape;
  MaxNumberSubShape(Shape: TopoDS_Shape): Standard_Integer;
  CheckShape_1(checkshape: Standard_Boolean): void;
  CheckShape_2(): Standard_Boolean;
  CheckShape_3(S: TopoDS_Shape, checkgeom: Standard_Boolean): Standard_Boolean;
  DumpName(OS: Standard_OStream, str: TCollection_AsciiString): void;
  DumpCheck(OS: Standard_OStream, str: TCollection_AsciiString, S: TopoDS_Shape, chk: Standard_Boolean): void;
  DumpSS(): void;
  DumpBB(): void;
  DEBName_1(N: TCollection_AsciiString): void;
  DEBName_2(): TCollection_AsciiString;
  DEBNumber_1(I: Standard_Integer): void;
  DEBNumber_2(): Standard_Integer;
  SName_1(S: TopoDS_Shape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SNameori_1(S: TopoDS_Shape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SName_2(S: TopTools_ListOfShape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SNameori_2(S: TopTools_ListOfShape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
}

export declare class TopOpeBRepBuild_ShellFaceClassifier extends TopOpeBRepBuild_CompositeClassifier {
  constructor(BB: TopOpeBRepBuild_BlockBuilder)
  Clear(): void;
  CompareShapes(B1: TopoDS_Shape, B2: TopoDS_Shape): TopAbs_State;
  CompareElementToShape(F: TopoDS_Shape, S: TopoDS_Shape): TopAbs_State;
  ResetShape(S: TopoDS_Shape): void;
  ResetElement(F: TopoDS_Shape): void;
  CompareElement(F: TopoDS_Shape): Standard_Boolean;
  State(): TopAbs_State;
}

export declare class TopOpeBRepBuild_ShellFaceSet extends TopOpeBRepBuild_ShapeSet {
  Solid(): TopoDS_Solid;
  AddShape(S: TopoDS_Shape): void;
  AddStartElement(S: TopoDS_Shape): void;
  AddElement(S: TopoDS_Shape): void;
  DumpSS(): void;
  SName_1(S: TopoDS_Shape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SName_2(S: TopTools_ListOfShape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SNameori_1(S: TopoDS_Shape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SNameori_2(S: TopTools_ListOfShape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
}

  export declare class TopOpeBRepBuild_ShellFaceSet_1 extends TopOpeBRepBuild_ShellFaceSet {
    constructor();
  }

  export declare class TopOpeBRepBuild_ShellFaceSet_2 extends TopOpeBRepBuild_ShellFaceSet {
    constructor(S: TopoDS_Shape, Addr: Standard_Address);
  }

export declare class TopOpeBRepBuild_ShellToSolid {
  constructor()
  Init(): void;
  AddShell(Sh: TopoDS_Shell): void;
  MakeSolids(So: TopoDS_Solid, LSo: TopTools_ListOfShape): void;
}

export declare class TopOpeBRepBuild_SolidAreaBuilder extends TopOpeBRepBuild_Area3dBuilder {
  InitSolidAreaBuilder(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean): void;
}

  export declare class TopOpeBRepBuild_SolidAreaBuilder_1 extends TopOpeBRepBuild_SolidAreaBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_SolidAreaBuilder_2 extends TopOpeBRepBuild_SolidAreaBuilder {
    constructor(LS: TopOpeBRepBuild_LoopSet, LC: TopOpeBRepBuild_LoopClassifier, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_SolidBuilder {
  InitSolidBuilder(FS: TopOpeBRepBuild_ShellFaceSet, ForceClass: Standard_Boolean): void;
  InitSolid(): Standard_Integer;
  MoreSolid(): Standard_Boolean;
  NextSolid(): void;
  InitShell(): Standard_Integer;
  MoreShell(): Standard_Boolean;
  NextShell(): void;
  IsOldShell(): Standard_Boolean;
  OldShell(): TopoDS_Shape;
  InitFace(): Standard_Integer;
  MoreFace(): Standard_Boolean;
  NextFace(): void;
  Face(): TopoDS_Shape;
}

  export declare class TopOpeBRepBuild_SolidBuilder_1 extends TopOpeBRepBuild_SolidBuilder {
    constructor();
  }

  export declare class TopOpeBRepBuild_SolidBuilder_2 extends TopOpeBRepBuild_SolidBuilder {
    constructor(FS: TopOpeBRepBuild_ShellFaceSet, ForceClass: Standard_Boolean);
  }

export declare class TopOpeBRepBuild_Tools {
  constructor();
  FindState(aVertex: TopoDS_Shape, aState: TopAbs_State, aShapeEnum: TopAbs_ShapeEnum, aMapVertexEdges: TopTools_IndexedDataMapOfShapeListOfShape, aMapProcessedVertices: TopTools_MapOfShape, aMapVs: TopOpeBRepDS_DataMapOfShapeState): void;
  PropagateState(aSplEdgesState: TopOpeBRepDS_DataMapOfShapeState, anEdgesToRestMap: TopTools_IndexedMapOfShape, aShapeEnum1: TopAbs_ShapeEnum, aShapeEnum2: TopAbs_ShapeEnum, aShapeClassifier: TopOpeBRepTool_ShapeClassifier, aMapOfShapeWithState: TopOpeBRepDS_IndexedDataMapOfShapeWithState, anUnkStateShapes: TopTools_MapOfShape): void;
  FindStateThroughVertex(aShape: TopoDS_Shape, aShapeClassifier: TopOpeBRepTool_ShapeClassifier, aMapOfShapeWithState: TopOpeBRepDS_IndexedDataMapOfShapeWithState, anAvoidSubshMap: TopTools_MapOfShape): TopAbs_State;
  PropagateStateForWires(aFacesToRestMap: TopTools_IndexedMapOfShape, aMapOfShapeWithState: TopOpeBRepDS_IndexedDataMapOfShapeWithState): void;
  SpreadStateToChild(aShape: TopoDS_Shape, aState: TopAbs_State, aMapOfShapeWithState: TopOpeBRepDS_IndexedDataMapOfShapeWithState): void;
  FindState1(anEdge: TopoDS_Shape, aState: TopAbs_State, aMapEdgesFaces: TopTools_IndexedDataMapOfShapeListOfShape, aMapProcessedVertices: TopTools_MapOfShape, aMapVs: TopOpeBRepDS_DataMapOfShapeState): void;
  FindState2(anEdge: TopoDS_Shape, aState: TopAbs_State, aMapEdgesFaces: TopTools_IndexedDataMapOfShapeListOfShape, aMapProcessedEdges: TopTools_MapOfShape, aMapVs: TopOpeBRepDS_DataMapOfShapeState): void;
  GetAdjacentFace(aFaceObj: TopoDS_Shape, anEObj: TopoDS_Shape, anEdgeFaceMap: TopTools_IndexedDataMapOfShapeListOfShape, anAdjFaceObj: TopoDS_Shape): Standard_Boolean;
  GetNormalToFaceOnEdge(aFObj: TopoDS_Face, anEdgeObj: TopoDS_Edge, aDirNormal: gp_Vec): void;
  GetNormalInNearestPoint(aFace: TopoDS_Face, anEdge: TopoDS_Edge, aNormal: gp_Vec): void;
  GetTangentToEdgeEdge(aFObj: TopoDS_Face, anEdgeObj: TopoDS_Edge, aOriEObj: TopoDS_Edge, aTangent: gp_Vec): Standard_Boolean;
  GetTangentToEdge(anEdgeObj: TopoDS_Edge, aTangent: gp_Vec): Standard_Boolean;
  UpdatePCurves(aWire: TopoDS_Wire, fromFace: TopoDS_Face, toFace: TopoDS_Face): void;
  UpdateEdgeOnPeriodicalFace(aEdgeToUpdate: TopoDS_Edge, OldFace: TopoDS_Face, NewFace: TopoDS_Face): void;
  UpdateEdgeOnFace(aEdgeToUpdate: TopoDS_Edge, OldFace: TopoDS_Face, NewFace: TopoDS_Face): void;
  IsDegEdgesTheSame(anE1: TopoDS_Shape, anE2: TopoDS_Shape): Standard_Boolean;
  NormalizeFace(oldFace: TopoDS_Shape, corrFace: TopoDS_Shape): void;
  CorrectFace2d(oldFace: TopoDS_Shape, corrFace: TopoDS_Shape, aSourceShapes: TopTools_IndexedMapOfOrientedShape, aMapOfCorrect2dEdges: TopTools_IndexedDataMapOfShapeShape): void;
  CorrectTolerances(aS: TopoDS_Shape, aTolMax: Standard_Real): void;
  CorrectCurveOnSurface(aS: TopoDS_Shape, aTolMax: Standard_Real): void;
  CorrectPointOnCurve(aS: TopoDS_Shape, aTolMax: Standard_Real): void;
  CheckFaceClosed2d(theFace: TopoDS_Face): Standard_Boolean;
}

export declare class TopOpeBRepBuild_Tools2d {
  constructor();
  MakeMapOfShapeVertexInfo(aWire: TopoDS_Wire, aMap: TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo): void;
  DumpMapOfShapeVertexInfo(aMap: TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo): void;
  Path(aWire: TopoDS_Wire, aResList: TopTools_ListOfShape): void;
}

export declare class TopOpeBRepBuild_WireEdgeClassifier extends TopOpeBRepBuild_CompositeClassifier {
  constructor(F: TopoDS_Shape, BB: TopOpeBRepBuild_BlockBuilder)
  Compare(L1: any, L2: any): TopAbs_State;
  LoopToShape(L: any): TopoDS_Shape;
  CompareShapes(B1: TopoDS_Shape, B2: TopoDS_Shape): TopAbs_State;
  CompareElementToShape(E: TopoDS_Shape, B: TopoDS_Shape): TopAbs_State;
  ResetShape(B: TopoDS_Shape): void;
  ResetElement(E: TopoDS_Shape): void;
  CompareElement(E: TopoDS_Shape): Standard_Boolean;
  State(): TopAbs_State;
}

export declare class TopOpeBRepBuild_WireEdgeSet extends TopOpeBRepBuild_ShapeSet {
  constructor(F: TopoDS_Shape, Addr: Standard_Address)
  Face(): TopoDS_Face;
  AddShape(S: TopoDS_Shape): void;
  AddStartElement(S: TopoDS_Shape): void;
  AddElement(S: TopoDS_Shape): void;
  InitNeighbours(E: TopoDS_Shape): void;
  FindNeighbours(): void;
  MakeNeighboursList(E: TopoDS_Shape, V: TopoDS_Shape): TopTools_ListOfShape;
  IsUVISO(E: TopoDS_Edge, F: TopoDS_Face, uiso: Standard_Boolean, viso: Standard_Boolean): void;
  DumpSS(): void;
  SName_1(S: TopoDS_Shape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SName_2(S: TopTools_ListOfShape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SNameori_1(S: TopoDS_Shape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
  SNameori_2(S: TopTools_ListOfShape, sb: TCollection_AsciiString, sa: TCollection_AsciiString): TCollection_AsciiString;
}

export declare class TopOpeBRepBuild_WireToFace {
  constructor()
  Init(): void;
  AddWire(W: TopoDS_Wire): void;
  MakeFaces(F: TopoDS_Face, LF: TopTools_ListOfShape): void;
}

export declare class TopOpeBRepDS {
  constructor();
  SPrint_1(S: TopAbs_State): TCollection_AsciiString;
  SPrint_2(K: TopOpeBRepDS_Kind): TCollection_AsciiString;
  SPrint_3(K: TopOpeBRepDS_Kind, I: Standard_Integer, B: TCollection_AsciiString, A: TCollection_AsciiString): TCollection_AsciiString;
  SPrint_4(T: TopAbs_ShapeEnum): TCollection_AsciiString;
  SPrint_5(T: TopAbs_ShapeEnum, I: Standard_Integer): TCollection_AsciiString;
  SPrint_6(O: TopAbs_Orientation): TCollection_AsciiString;
  SPrint_7(C: TopOpeBRepDS_Config): TCollection_AsciiString;
  IsGeometry(K: TopOpeBRepDS_Kind): Standard_Boolean;
  IsTopology(K: TopOpeBRepDS_Kind): Standard_Boolean;
  KindToShape(K: TopOpeBRepDS_Kind): TopAbs_ShapeEnum;
  ShapeToKind(S: TopAbs_ShapeEnum): TopOpeBRepDS_Kind;
}

export declare class TopOpeBRepDS_Association extends Standard_Transient {
  constructor()
  Associate_1(I: any, K: any): void;
  Associate_2(I: any, LI: TopOpeBRepDS_ListOfInterference): void;
  HasAssociation(I: any): Standard_Boolean;
  Associated(I: any): TopOpeBRepDS_ListOfInterference;
  AreAssociated(I: any, K: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepDS_Check extends Standard_Transient {
  ChkIntg(): Standard_Boolean;
  ChkIntgInterf(LI: TopOpeBRepDS_ListOfInterference): Standard_Boolean;
  CheckDS(i: Standard_Integer, K: TopOpeBRepDS_Kind): Standard_Boolean;
  ChkIntgSamDom(): Standard_Boolean;
  CheckShapes(LS: TopTools_ListOfShape): Standard_Boolean;
  OneVertexOnPnt(): Standard_Boolean;
  HDS(): any;
  ChangeHDS(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopOpeBRepDS_Check_1 extends TopOpeBRepDS_Check {
    constructor();
  }

  export declare class TopOpeBRepDS_Check_2 extends TopOpeBRepDS_Check {
    constructor(HDS: any);
  }

export declare class TopOpeBRepDS_CurveExplorer {
  Init(DS: TopOpeBRepDS_DataStructure, FindOnlyKeep: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  Curve_1(): TopOpeBRepDS_Curve;
  IsCurve(I: Standard_Integer): Standard_Boolean;
  IsCurveKeep(I: Standard_Integer): Standard_Boolean;
  Curve_2(I: Standard_Integer): TopOpeBRepDS_Curve;
  NbCurve(): Standard_Integer;
  Index(): Standard_Integer;
}

  export declare class TopOpeBRepDS_CurveExplorer_1 extends TopOpeBRepDS_CurveExplorer {
    constructor();
  }

  export declare class TopOpeBRepDS_CurveExplorer_2 extends TopOpeBRepDS_CurveExplorer {
    constructor(DS: TopOpeBRepDS_DataStructure, FindOnlyKeep: Standard_Boolean);
  }

export declare class TopOpeBRepDS_CurveIterator extends TopOpeBRepDS_InterferenceIterator {
  constructor(L: TopOpeBRepDS_ListOfInterference)
  MatchInterference(I: any): Standard_Boolean;
  Current(): Standard_Integer;
  Orientation(S: TopAbs_State): TopAbs_Orientation;
  PCurve(): any;
}

export declare class TopOpeBRepDS_Dumper {
  constructor(HDS: any)
  SDumpRefOri_1(K: TopOpeBRepDS_Kind, I: Standard_Integer): TCollection_AsciiString;
  SDumpRefOri_2(S: TopoDS_Shape): TCollection_AsciiString;
  SPrintShape_1(I: Standard_Integer): TCollection_AsciiString;
  SPrintShape_2(S: TopoDS_Shape): TCollection_AsciiString;
  SPrintShapeRefOri_1(S: TopoDS_Shape, B: TCollection_AsciiString): TCollection_AsciiString;
  SPrintShapeRefOri_2(L: TopTools_ListOfShape, B: TCollection_AsciiString): TCollection_AsciiString;
}

export declare class TopOpeBRepDS_EIR {
  constructor(HDS: any)
  ProcessEdgeInterferences_1(): void;
  ProcessEdgeInterferences_2(I: Standard_Integer): void;
}

export declare class TopOpeBRepDS_Edge3dInterferenceTool {
  constructor()
  InitPointVertex(IsVertex: Standard_Integer, VonOO: TopoDS_Shape): void;
  Init(Eref: TopoDS_Shape, E: TopoDS_Shape, F: TopoDS_Shape, I: any): void;
  Add(Eref: TopoDS_Shape, E: TopoDS_Shape, F: TopoDS_Shape, I: any): void;
  Transition(I: any): void;
}

export declare class TopOpeBRepDS_EdgeInterferenceTool {
  constructor()
  Init(E: TopoDS_Shape, I: any): void;
  Add_1(E: TopoDS_Shape, V: TopoDS_Shape, I: any): void;
  Add_2(E: TopoDS_Shape, P: TopOpeBRepDS_Point, I: any): void;
  Transition(I: any): void;
}

export declare class TopOpeBRepDS_Explorer {
  Init(HDS: any, T: TopAbs_ShapeEnum, findkeep: Standard_Boolean): void;
  Type(): TopAbs_ShapeEnum;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Shape;
  Index(): Standard_Integer;
  Face(): TopoDS_Face;
  Edge(): TopoDS_Edge;
  Vertex(): TopoDS_Vertex;
}

  export declare class TopOpeBRepDS_Explorer_1 extends TopOpeBRepDS_Explorer {
    constructor();
  }

  export declare class TopOpeBRepDS_Explorer_2 extends TopOpeBRepDS_Explorer {
    constructor(HDS: any, T: TopAbs_ShapeEnum, findkeep: Standard_Boolean);
  }

export declare class TopOpeBRepDS_FIR {
  constructor(HDS: any)
  ProcessFaceInterferences_1(M: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State): void;
  ProcessFaceInterferences_2(I: Standard_Integer, M: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State): void;
}

export declare class TopOpeBRepDS_FaceInterferenceTool {
  constructor(P: TopOpeBRepDS_PDataStructure)
  Init(FI: TopoDS_Shape, E: TopoDS_Shape, Eisnew: Standard_Boolean, I: any): void;
  Add_1(FI: TopoDS_Shape, F: TopoDS_Shape, E: TopoDS_Shape, Eisnew: Standard_Boolean, I: any): void;
  Add_2(E: TopoDS_Shape, C: TopOpeBRepDS_Curve, I: any): void;
  SetEdgePntPar(P: gp_Pnt, par: Standard_Real): void;
  GetEdgePntPar(P: gp_Pnt, par: Standard_Real): void;
  IsEdgePntParDef(): Standard_Boolean;
  Transition(I: any): void;
}

export declare class TopOpeBRepDS_Filter {
  constructor(HDS: any, pClassif: TopOpeBRepTool_PShapeClassifier)
  ProcessInterferences(): void;
  ProcessFaceInterferences_1(MEsp: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State): void;
  ProcessFaceInterferences_2(I: Standard_Integer, MEsp: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State): void;
  ProcessEdgeInterferences_1(): void;
  ProcessEdgeInterferences_2(I: Standard_Integer): void;
  ProcessCurveInterferences_1(): void;
  ProcessCurveInterferences_2(I: Standard_Integer): void;
}

export declare class TopOpeBRepDS_GapFiller {
  constructor(HDS: any)
  Perform(): void;
  FindAssociatedPoints(I: any, LI: TopOpeBRepDS_ListOfInterference): void;
  CheckConnexity(LI: TopOpeBRepDS_ListOfInterference): Standard_Boolean;
  AddPointsOnShape(S: TopoDS_Shape, LI: TopOpeBRepDS_ListOfInterference): void;
  AddPointsOnConnexShape(F: TopoDS_Shape, LI: TopOpeBRepDS_ListOfInterference): void;
  FilterByFace(F: TopoDS_Face, LI: TopOpeBRepDS_ListOfInterference): void;
  FilterByEdge(E: TopoDS_Edge, LI: TopOpeBRepDS_ListOfInterference): void;
  FilterByIncidentDistance(F: TopoDS_Face, I: any, LI: TopOpeBRepDS_ListOfInterference): void;
  IsOnFace(I: any, F: TopoDS_Face): Standard_Boolean;
  IsOnEdge(I: any, E: TopoDS_Edge): Standard_Boolean;
  BuildNewGeometries(): void;
  ReBuildGeom(I1: any, Done: TColStd_MapOfInteger): void;
}

export declare class TopOpeBRepDS_GapTool extends Standard_Transient {
  Init(HDS: any): void;
  Interferences(IndexPoint: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  SameInterferences(I: any): TopOpeBRepDS_ListOfInterference;
  ChangeSameInterferences(I: any): TopOpeBRepDS_ListOfInterference;
  Curve(I: any, C: TopOpeBRepDS_Curve): Standard_Boolean;
  EdgeSupport(I: any, E: TopoDS_Shape): Standard_Boolean;
  FacesSupport(I: any, F1: TopoDS_Shape, F2: TopoDS_Shape): Standard_Boolean;
  ParameterOnEdge(I: any, E: TopoDS_Shape, U: Standard_Real): Standard_Boolean;
  SetPoint(I: any, IndexPoint: Standard_Integer): void;
  SetParameterOnEdge(I: any, E: TopoDS_Shape, U: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopOpeBRepDS_GapTool_1 extends TopOpeBRepDS_GapTool {
    constructor();
  }

  export declare class TopOpeBRepDS_GapTool_2 extends TopOpeBRepDS_GapTool {
    constructor(HDS: any);
  }

export declare class TopOpeBRepDS_InterferenceTool {
  constructor();
  MakeEdgeInterference(T: TopOpeBRepDS_Transition, SK: TopOpeBRepDS_Kind, SI: Standard_Integer, GK: TopOpeBRepDS_Kind, GI: Standard_Integer, P: Standard_Real): any;
  MakeCurveInterference(T: TopOpeBRepDS_Transition, SK: TopOpeBRepDS_Kind, SI: Standard_Integer, GK: TopOpeBRepDS_Kind, GI: Standard_Integer, P: Standard_Real): any;
  DuplicateCurvePointInterference(I: any): any;
  MakeFaceCurveInterference(Transition: TopOpeBRepDS_Transition, FaceI: Standard_Integer, CurveI: Standard_Integer, PC: any): any;
  MakeSolidSurfaceInterference(Transition: TopOpeBRepDS_Transition, SolidI: Standard_Integer, SurfaceI: Standard_Integer): any;
  MakeEdgeVertexInterference(Transition: TopOpeBRepDS_Transition, EdgeI: Standard_Integer, VertexI: Standard_Integer, VertexIsBound: Standard_Boolean, Config: TopOpeBRepDS_Config, param: Standard_Real): any;
  MakeFaceEdgeInterference(Transition: TopOpeBRepDS_Transition, FaceI: Standard_Integer, EdgeI: Standard_Integer, EdgeIsBound: Standard_Boolean, Config: TopOpeBRepDS_Config): any;
  Parameter_1(CPI: any): Standard_Real;
  Parameter_2(CPI: any, Par: Standard_Real): void;
}

export declare class TopOpeBRepDS_Marker extends Standard_Transient {
  constructor()
  Reset(): void;
  Set_1(i: Standard_Integer, b: Standard_Boolean): void;
  Set_2(b: Standard_Boolean, n: Standard_Integer, a: Standard_Address): void;
  GetI(i: Standard_Integer): Standard_Boolean;
  Allocate(n: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepDS_PointExplorer {
  Init(DS: TopOpeBRepDS_DataStructure, FindOnlyKeep: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  Point_1(): TopOpeBRepDS_Point;
  IsPoint(I: Standard_Integer): Standard_Boolean;
  IsPointKeep(I: Standard_Integer): Standard_Boolean;
  Point_2(I: Standard_Integer): TopOpeBRepDS_Point;
  NbPoint(): Standard_Integer;
  Index(): Standard_Integer;
}

  export declare class TopOpeBRepDS_PointExplorer_1 extends TopOpeBRepDS_PointExplorer {
    constructor();
  }

  export declare class TopOpeBRepDS_PointExplorer_2 extends TopOpeBRepDS_PointExplorer {
    constructor(DS: TopOpeBRepDS_DataStructure, FindOnlyKeep: Standard_Boolean);
  }

export declare class TopOpeBRepDS_PointIterator extends TopOpeBRepDS_InterferenceIterator {
  constructor(L: TopOpeBRepDS_ListOfInterference)
  MatchInterference(I: any): Standard_Boolean;
  Current(): Standard_Integer;
  Orientation(S: TopAbs_State): TopAbs_Orientation;
  Parameter(): Standard_Real;
  IsVertex(): Standard_Boolean;
  IsPoint(): Standard_Boolean;
  DiffOriented(): Standard_Boolean;
  SameOriented(): Standard_Boolean;
  Support(): Standard_Integer;
}

export declare class TopOpeBRepDS_Reducer {
  constructor(HDS: any)
  ProcessFaceInterferences(M: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State): void;
  ProcessEdgeInterferences(): void;
}

export declare class TopOpeBRepDS_SolidSurfaceInterference extends TopOpeBRepDS_Interference {
  constructor(Transition: TopOpeBRepDS_Transition, SupportType: TopOpeBRepDS_Kind, Support: Standard_Integer, GeometryType: TopOpeBRepDS_Kind, Geometry: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepDS_SurfaceExplorer {
  Init(DS: TopOpeBRepDS_DataStructure, FindOnlyKeep: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  Surface_1(): TopOpeBRepDS_Surface;
  IsSurface(I: Standard_Integer): Standard_Boolean;
  IsSurfaceKeep(I: Standard_Integer): Standard_Boolean;
  Surface_2(I: Standard_Integer): TopOpeBRepDS_Surface;
  NbSurface(): Standard_Integer;
  Index(): Standard_Integer;
}

  export declare class TopOpeBRepDS_SurfaceExplorer_1 extends TopOpeBRepDS_SurfaceExplorer {
    constructor();
  }

  export declare class TopOpeBRepDS_SurfaceExplorer_2 extends TopOpeBRepDS_SurfaceExplorer {
    constructor(DS: TopOpeBRepDS_DataStructure, FindOnlyKeep: Standard_Boolean);
  }

export declare class TopOpeBRepDS_SurfaceIterator extends TopOpeBRepDS_InterferenceIterator {
  constructor(L: TopOpeBRepDS_ListOfInterference)
  Current(): Standard_Integer;
  Orientation(S: TopAbs_State): TopAbs_Orientation;
}

export declare class TopOpeBRepDS_TKI {
  constructor()
  Clear(): void;
  FillOnGeometry(L: TopOpeBRepDS_ListOfInterference): void;
  FillOnSupport(L: TopOpeBRepDS_ListOfInterference): void;
  IsBound(K: TopOpeBRepDS_Kind, G: Standard_Integer): Standard_Boolean;
  Interferences(K: TopOpeBRepDS_Kind, G: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ChangeInterferences(K: TopOpeBRepDS_Kind, G: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  HasInterferences(K: TopOpeBRepDS_Kind, G: Standard_Integer): Standard_Boolean;
  Add_1(K: TopOpeBRepDS_Kind, G: Standard_Integer): void;
  Add_2(K: TopOpeBRepDS_Kind, G: Standard_Integer, HI: any): void;
  DumpTKIIterator(s1: TCollection_AsciiString, s2: TCollection_AsciiString): void;
  Init(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(K: TopOpeBRepDS_Kind, G: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ChangeValue(K: TopOpeBRepDS_Kind, G: Standard_Integer): TopOpeBRepDS_ListOfInterference;
}

export declare class TopOpeBRepDS_TOOL {
  constructor();
  EShareG(HDS: any, E: TopoDS_Edge, lEsd: TopTools_ListOfShape): Standard_Integer;
  ShareG(HDS: any, is1: Standard_Integer, is2: Standard_Integer): Standard_Boolean;
  GetEsd(HDS: any, S: TopoDS_Shape, ie: Standard_Integer, iesd: Standard_Integer): Standard_Boolean;
  ShareSplitON(HDS: any, MspON: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State, i1: Standard_Integer, i2: Standard_Integer, spON: TopoDS_Shape): Standard_Boolean;
  GetConfig(HDS: any, MEspON: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State, ie: Standard_Integer, iesd: Standard_Integer, conf: Standard_Integer): Standard_Boolean;
}

export declare class TopOpeBRepTool {
  constructor();
  PurgeClosingEdges_1(F: TopoDS_Face, FF: TopoDS_Face, MWisOld: TopTools_DataMapOfShapeInteger, MshNOK: TopTools_IndexedMapOfOrientedShape): Standard_Boolean;
  PurgeClosingEdges_2(F: TopoDS_Face, LOF: TopTools_ListOfShape, MWisOld: TopTools_DataMapOfShapeInteger, MshNOK: TopTools_IndexedMapOfOrientedShape): Standard_Boolean;
  CorrectONUVISO(F: TopoDS_Face, Fsp: TopoDS_Face): Standard_Boolean;
  MakeFaces(F: TopoDS_Face, LOF: TopTools_ListOfShape, MshNOK: TopTools_IndexedMapOfOrientedShape, LOFF: TopTools_ListOfShape): Standard_Boolean;
  Regularize(aFace: TopoDS_Face, aListOfFaces: TopTools_ListOfShape, ESplits: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  RegularizeWires(aFace: TopoDS_Face, OldWiresNewWires: TopTools_DataMapOfShapeListOfShape, ESplits: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  RegularizeFace(aFace: TopoDS_Face, OldWiresnewWires: TopTools_DataMapOfShapeListOfShape, aListOfFaces: TopTools_ListOfShape): Standard_Boolean;
  RegularizeShells(aSolid: TopoDS_Solid, OldSheNewShe: TopTools_DataMapOfShapeListOfShape, FSplits: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
}

export declare class TopOpeBRepTool_AncestorsTool {
  constructor();
  MakeAncestors(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum, M: TopTools_IndexedDataMapOfShapeListOfShape): void;
}

export declare class TopOpeBRepTool_C2DF {
  SetPC(PC: any, f2d: Standard_Real, l2d: Standard_Real, tol: Standard_Real): void;
  SetFace(F: TopoDS_Face): void;
  PC(f2d: Standard_Real, l2d: Standard_Real, tol: Standard_Real): any;
  Face(): TopoDS_Face;
  IsPC(PC: any): Standard_Boolean;
  IsFace(F: TopoDS_Face): Standard_Boolean;
}

  export declare class TopOpeBRepTool_C2DF_1 extends TopOpeBRepTool_C2DF {
    constructor();
  }

  export declare class TopOpeBRepTool_C2DF_2 extends TopOpeBRepTool_C2DF {
    constructor(PC: any, f2d: Standard_Real, l2d: Standard_Real, tol: Standard_Real, F: TopoDS_Face);
  }

export declare class TopOpeBRepTool_face {
  constructor()
  Init(W: TopoDS_Wire, Fref: TopoDS_Face): Standard_Boolean;
  W(): TopoDS_Wire;
  IsDone(): Standard_Boolean;
  Finite(): Standard_Boolean;
  Ffinite(): TopoDS_Face;
  RealF(): TopoDS_Face;
}

export declare class TopOpeBRepTool_CLASSI {
  constructor()
  Init2d(Fref: TopoDS_Face): void;
  HasInit2d(): Standard_Boolean;
  Add2d(S: TopoDS_Shape): Standard_Boolean;
  GetBox2d(S: TopoDS_Shape, Box2d: Bnd_Box2d): Standard_Boolean;
  ClassiBnd2d(S1: TopoDS_Shape, S2: TopoDS_Shape, tol: Standard_Real, checklarge: Standard_Boolean): Standard_Integer;
  Classip2d(S1: TopoDS_Shape, S2: TopoDS_Shape, stabnd2d12: Standard_Integer): Standard_Integer;
  Getface(S: TopoDS_Shape, fa: TopOpeBRepTool_face): Standard_Boolean;
  Classilist(lS: TopTools_ListOfShape, mapgreasma: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
}

export declare class TopOpeBRepTool_CORRISO {
  Fref(): TopoDS_Face;
  GASref(): GeomAdaptor_Surface;
  Refclosed(x: Standard_Integer, xperiod: Standard_Real): Standard_Boolean;
  Init(S: TopoDS_Shape): Standard_Boolean;
  S(): TopoDS_Shape;
  Eds(): TopTools_ListOfShape;
  UVClosed(): Standard_Boolean;
  Tol(I: Standard_Integer, tol3d: Standard_Real): Standard_Real;
  PurgeFyClosingE(ClEds: TopTools_ListOfShape, fyClEds: TopTools_ListOfShape): Standard_Boolean;
  EdgeOUTofBoundsUV(E: TopoDS_Edge, onU: Standard_Boolean, tolx: Standard_Real, parspE: Standard_Real): Standard_Integer;
  EdgesOUTofBoundsUV(EdsToCheck: TopTools_ListOfShape, onU: Standard_Boolean, tolx: Standard_Real, FyEds: TopTools_DataMapOfOrientedShapeInteger): Standard_Boolean;
  EdgeWithFaultyUV_1(E: TopoDS_Edge, Ivfaulty: Standard_Integer): Standard_Boolean;
  EdgesWithFaultyUV(EdsToCheck: TopTools_ListOfShape, nfybounds: Standard_Integer, FyEds: TopTools_DataMapOfOrientedShapeInteger, stopatfirst: Standard_Boolean): Standard_Boolean;
  EdgeWithFaultyUV_2(EdsToCheck: TopTools_ListOfShape, nfybounds: Standard_Integer, fyE: TopoDS_Shape, Ifaulty: Standard_Integer): Standard_Boolean;
  TrslUV(onU: Standard_Boolean, FyEds: TopTools_DataMapOfOrientedShapeInteger): Standard_Boolean;
  GetnewS(newS: TopoDS_Face): Standard_Boolean;
  UVRep(E: TopoDS_Edge, C2DF: TopOpeBRepTool_C2DF): Standard_Boolean;
  SetUVRep(E: TopoDS_Edge, C2DF: TopOpeBRepTool_C2DF): Standard_Boolean;
  Connexity(V: TopoDS_Vertex, Eds: TopTools_ListOfShape): Standard_Boolean;
  SetConnexity(V: TopoDS_Vertex, Eds: TopTools_ListOfShape): Standard_Boolean;
  AddNewConnexity(V: TopoDS_Vertex, E: TopoDS_Edge): Standard_Boolean;
  RemoveOldConnexity(V: TopoDS_Vertex, E: TopoDS_Edge): Standard_Boolean;
}

  export declare class TopOpeBRepTool_CORRISO_1 extends TopOpeBRepTool_CORRISO {
    constructor();
  }

  export declare class TopOpeBRepTool_CORRISO_2 extends TopOpeBRepTool_CORRISO {
    constructor(FRef: TopoDS_Face);
  }

export declare class TopOpeBRepTool_FuseEdges {
  constructor(theShape: TopoDS_Shape, PerformNow: Standard_Boolean)
  AvoidEdges(theMapEdg: TopTools_IndexedMapOfShape): void;
  Edges(theMapLstEdg: TopTools_DataMapOfIntegerListOfShape): void;
  ResultEdges(theMapEdg: TopTools_DataMapOfIntegerShape): void;
  Faces(theMapFac: TopTools_DataMapOfShapeShape): void;
  Shape(): TopoDS_Shape;
  NbVertices(): Standard_Integer;
  Perform(): void;
}

export declare class TopOpeBRepTool_HBoxTool extends Standard_Transient {
  constructor()
  Clear(): void;
  AddBoxes(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum): void;
  AddBox(S: TopoDS_Shape): void;
  ComputeBox(S: TopoDS_Shape, B: Bnd_Box): void;
  ComputeBoxOnVertices(S: TopoDS_Shape, B: Bnd_Box): void;
  DumpB(B: Bnd_Box): void;
  Box_1(S: TopoDS_Shape): Bnd_Box;
  Box_2(I: Standard_Integer): Bnd_Box;
  HasBox(S: TopoDS_Shape): Standard_Boolean;
  Shape(I: Standard_Integer): TopoDS_Shape;
  Index(S: TopoDS_Shape): Standard_Integer;
  Extent(): Standard_Integer;
  ChangeIMS(): TopOpeBRepTool_IndexedDataMapOfShapeBox;
  IMS(): TopOpeBRepTool_IndexedDataMapOfShapeBox;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopOpeBRepTool_connexity {
  SetKey(Key: TopoDS_Shape): void;
  Key(): TopoDS_Shape;
  Item(OriKey: Standard_Integer, Item: TopTools_ListOfShape): Standard_Integer;
  AllItems(Item: TopTools_ListOfShape): Standard_Integer;
  AddItem_1(OriKey: Standard_Integer, Item: TopTools_ListOfShape): void;
  AddItem_2(OriKey: Standard_Integer, Item: TopoDS_Shape): void;
  RemoveItem_1(OriKey: Standard_Integer, Item: TopoDS_Shape): Standard_Boolean;
  RemoveItem_2(Item: TopoDS_Shape): Standard_Boolean;
  ChangeItem(OriKey: Standard_Integer): TopTools_ListOfShape;
  IsMultiple(): Standard_Boolean;
  IsFaulty(): Standard_Boolean;
  IsInternal(Item: TopTools_ListOfShape): Standard_Integer;
}

  export declare class TopOpeBRepTool_connexity_1 extends TopOpeBRepTool_connexity {
    constructor();
  }

  export declare class TopOpeBRepTool_connexity_2 extends TopOpeBRepTool_connexity {
    constructor(Key: TopoDS_Shape);
  }

export declare class TopOpeBRepTool_PurgeInternalEdges {
  constructor(theShape: TopoDS_Shape, PerformNow: Standard_Boolean)
  Faces(theMapFacLstEdg: TopTools_DataMapOfShapeListOfShape): void;
  Shape(): TopoDS_Shape;
  NbEdges(): Standard_Integer;
  IsDone(): Standard_Boolean;
  Perform(): void;
}

export declare class TopOpeBRepTool_REGUS {
  constructor()
  Init(S: TopoDS_Shape): void;
  S(): TopoDS_Shape;
  MapS(): Standard_Boolean;
  WireToFace(Fanc: TopoDS_Face, nWs: TopTools_ListOfShape, nFs: TopTools_ListOfShape): Standard_Boolean;
  SplitF(Fanc: TopoDS_Face, FSplits: TopTools_ListOfShape): Standard_Boolean;
  SplitFaces(): Standard_Boolean;
  REGU(): Standard_Boolean;
  SetFsplits(Fsplits: TopTools_DataMapOfShapeListOfShape): void;
  GetFsplits(Fsplits: TopTools_DataMapOfShapeListOfShape): void;
  SetOshNsh(OshNsh: TopTools_DataMapOfShapeListOfShape): void;
  GetOshNsh(OshNsh: TopTools_DataMapOfShapeListOfShape): void;
  InitBlock(): Standard_Boolean;
  NextinBlock(): Standard_Boolean;
  NearestF(e: TopoDS_Edge, lof: TopTools_ListOfShape, ffound: TopoDS_Face): Standard_Boolean;
}

export declare class TopOpeBRepTool_REGUW {
  constructor(FRef: TopoDS_Face)
  Fref(): TopoDS_Face;
  SetEsplits(Esplits: TopTools_DataMapOfShapeListOfShape): void;
  GetEsplits(Esplits: TopTools_DataMapOfShapeListOfShape): void;
  SetOwNw(OwNw: TopTools_DataMapOfShapeListOfShape): void;
  GetOwNw(OwNw: TopTools_DataMapOfShapeListOfShape): void;
  SplitEds(): Standard_Boolean;
  Init(S: TopoDS_Shape): void;
  S(): TopoDS_Shape;
  HasInit(): Standard_Boolean;
  MapS(): Standard_Boolean;
  REGU_1(istep: Standard_Integer, Scur: TopoDS_Shape, Splits: TopTools_ListOfShape): Standard_Boolean;
  REGU_2(): Standard_Boolean;
  GetSplits(Splits: TopTools_ListOfShape): Standard_Boolean;
  InitBlock(): Standard_Boolean;
  NextinBlock(): Standard_Boolean;
  NearestE(loe: TopTools_ListOfShape, efound: TopoDS_Edge): Standard_Boolean;
  Connexity(v: TopoDS_Vertex, co: TopOpeBRepTool_connexity): Standard_Boolean;
  AddNewConnexity(v: TopoDS_Vertex, OriKey: Standard_Integer, e: TopoDS_Edge): Standard_Boolean;
  RemoveOldConnexity(v: TopoDS_Vertex, OriKey: Standard_Integer, e: TopoDS_Edge): Standard_Boolean;
  UpdateMultiple(v: TopoDS_Vertex): Standard_Boolean;
}

export declare class TopOpeBRepTool_ShapeTool {
  constructor();
  Tolerance(S: TopoDS_Shape): Standard_Real;
  Pnt(S: TopoDS_Shape): gp_Pnt;
  BASISCURVE_1(C: any): any;
  BASISCURVE_2(E: TopoDS_Edge): any;
  BASISSURFACE_1(S: any): any;
  BASISSURFACE_2(F: TopoDS_Face): any;
  UVBOUNDS_1(S: any, UPeri: Standard_Boolean, VPeri: Standard_Boolean, Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real): void;
  UVBOUNDS_2(F: TopoDS_Face, UPeri: Standard_Boolean, VPeri: Standard_Boolean, Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real): void;
  AdjustOnPeriodic(S: TopoDS_Shape, u: Standard_Real, v: Standard_Real): void;
  Closed(S1: TopoDS_Shape, S2: TopoDS_Shape): Standard_Boolean;
  PeriodizeParameter(par: Standard_Real, EE: TopoDS_Shape, FF: TopoDS_Shape): Standard_Real;
  ShapesSameOriented(S1: TopoDS_Shape, S2: TopoDS_Shape): Standard_Boolean;
  SurfacesSameOriented(S1: BRepAdaptor_Surface, S2: BRepAdaptor_Surface): Standard_Boolean;
  FacesSameOriented(F1: TopoDS_Shape, F2: TopoDS_Shape): Standard_Boolean;
  CurvesSameOriented(C1: BRepAdaptor_Curve, C2: BRepAdaptor_Curve): Standard_Boolean;
  EdgesSameOriented(E1: TopoDS_Shape, E2: TopoDS_Shape): Standard_Boolean;
  EdgeData_1(BRAC: BRepAdaptor_Curve, P: Standard_Real, T: gp_Dir, N: gp_Dir, C: Standard_Real): Standard_Real;
  EdgeData_2(E: TopoDS_Shape, P: Standard_Real, T: gp_Dir, N: gp_Dir, C: Standard_Real): Standard_Real;
  Resolution3dU(SU: any, Tol2d: Standard_Real): Standard_Real;
  Resolution3dV(SU: any, Tol2d: Standard_Real): Standard_Real;
  Resolution3d_1(SU: any, Tol2d: Standard_Real): Standard_Real;
  Resolution3d_2(F: TopoDS_Face, Tol2d: Standard_Real): Standard_Real;
}

export declare class TopOpeBRepTool_TOOL {
  constructor();
  OriinSor(sub: TopoDS_Shape, S: TopoDS_Shape, checkclo: Standard_Boolean): Standard_Integer;
  OriinSorclosed(sub: TopoDS_Shape, S: TopoDS_Shape): Standard_Integer;
  ClosedE(E: TopoDS_Edge, vclo: TopoDS_Vertex): Standard_Boolean;
  ClosedS(F: TopoDS_Face): Standard_Boolean;
  IsClosingE_1(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  IsClosingE_2(E: TopoDS_Edge, W: TopoDS_Shape, F: TopoDS_Face): Standard_Boolean;
  Vertices(E: TopoDS_Edge, Vces: TopTools_Array1OfShape): void;
  Vertex(Iv: Standard_Integer, E: TopoDS_Edge): TopoDS_Vertex;
  ParE(Iv: Standard_Integer, E: TopoDS_Edge): Standard_Real;
  OnBoundary(par: Standard_Real, E: TopoDS_Edge): Standard_Integer;
  UVF(par: Standard_Real, C2DF: TopOpeBRepTool_C2DF): gp_Pnt2d;
  ParISO(p2d: gp_Pnt2d, e: TopoDS_Edge, f: TopoDS_Face, pare: Standard_Real): Standard_Boolean;
  ParE2d(p2d: gp_Pnt2d, e: TopoDS_Edge, f: TopoDS_Face, par: Standard_Real, dist: Standard_Real): Standard_Boolean;
  Getduv(f: TopoDS_Face, uv: gp_Pnt2d, dir: gp_Vec, factor: Standard_Real, duv: gp_Dir2d): Standard_Boolean;
  uvApp(f: TopoDS_Face, e: TopoDS_Edge, par: Standard_Real, eps: Standard_Real, uvapp: gp_Pnt2d): Standard_Boolean;
  TolUV(F: TopoDS_Face, tol3d: Standard_Real): Standard_Real;
  TolP(E: TopoDS_Edge, F: TopoDS_Face): Standard_Real;
  minDUV(F: TopoDS_Face): Standard_Real;
  outUVbounds(uv: gp_Pnt2d, F: TopoDS_Face): Standard_Boolean;
  stuvF(uv: gp_Pnt2d, F: TopoDS_Face, onU: Standard_Integer, onV: Standard_Integer): void;
  TggeomE_1(par: Standard_Real, BC: BRepAdaptor_Curve, Tg: gp_Vec): Standard_Boolean;
  TggeomE_2(par: Standard_Real, E: TopoDS_Edge, Tg: gp_Vec): Standard_Boolean;
  TgINSIDE(v: TopoDS_Vertex, E: TopoDS_Edge, Tg: gp_Vec, OvinE: Standard_Integer): Standard_Boolean;
  Tg2d(iv: Standard_Integer, E: TopoDS_Edge, C2DF: TopOpeBRepTool_C2DF): gp_Vec2d;
  Tg2dApp(iv: Standard_Integer, E: TopoDS_Edge, C2DF: TopOpeBRepTool_C2DF, factor: Standard_Real): gp_Vec2d;
  tryTg2dApp(iv: Standard_Integer, E: TopoDS_Edge, C2DF: TopOpeBRepTool_C2DF, factor: Standard_Real): gp_Vec2d;
  XX(uv: gp_Pnt2d, f: TopoDS_Face, par: Standard_Real, e: TopoDS_Edge, xx: gp_Dir): Standard_Boolean;
  Nt(uv: gp_Pnt2d, f: TopoDS_Face, normt: gp_Dir): Standard_Boolean;
  NggeomF(uv: gp_Pnt2d, F: TopoDS_Face, ng: gp_Vec): Standard_Boolean;
  NgApp(par: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face, tola: Standard_Real, ngApp: gp_Dir): Standard_Boolean;
  tryNgApp(par: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face, tola: Standard_Real, ng: gp_Dir): Standard_Boolean;
  tryOriEinF(par: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): Standard_Integer;
  IsQuad_1(E: TopoDS_Edge): Standard_Boolean;
  IsQuad_2(F: TopoDS_Face): Standard_Boolean;
  CurvE(E: TopoDS_Edge, par: Standard_Real, tg0: gp_Dir, Curv: Standard_Real): Standard_Boolean;
  CurvF(F: TopoDS_Face, uv: gp_Pnt2d, tg0: gp_Dir, Curv: Standard_Real, direct: Standard_Boolean): Standard_Boolean;
  UVISO_1(PC: any, isou: Standard_Boolean, isov: Standard_Boolean, d2d: gp_Dir2d, o2d: gp_Pnt2d): Standard_Boolean;
  UVISO_2(C2DF: TopOpeBRepTool_C2DF, isou: Standard_Boolean, isov: Standard_Boolean, d2d: gp_Dir2d, o2d: gp_Pnt2d): Standard_Boolean;
  UVISO_3(E: TopoDS_Edge, F: TopoDS_Face, isou: Standard_Boolean, isov: Standard_Boolean, d2d: gp_Dir2d, o2d: gp_Pnt2d): Standard_Boolean;
  IsonCLO_1(PC: any, onU: Standard_Boolean, xfirst: Standard_Real, xperiod: Standard_Real, xtol: Standard_Real): Standard_Boolean;
  IsonCLO_2(C2DF: TopOpeBRepTool_C2DF, onU: Standard_Boolean, xfirst: Standard_Real, xperiod: Standard_Real, xtol: Standard_Real): Standard_Boolean;
  TrslUV(t2d: gp_Vec2d, C2DF: TopOpeBRepTool_C2DF): void;
  TrslUVModifE(t2d: gp_Vec2d, F: TopoDS_Face, E: TopoDS_Edge): Standard_Boolean;
  Matter_1(d1: gp_Vec, d2: gp_Vec, ref: gp_Vec): Standard_Real;
  Matter_2(d1: gp_Vec2d, d2: gp_Vec2d): Standard_Real;
  Matter_3(xx1: gp_Dir, nt1: gp_Dir, xx2: gp_Dir, nt2: gp_Dir, tola: Standard_Real, Ang: Standard_Real): Standard_Boolean;
  Matter_4(f1: TopoDS_Face, f2: TopoDS_Face, e: TopoDS_Edge, pare: Standard_Real, tola: Standard_Real, Ang: Standard_Real): Standard_Boolean;
  MatterKPtg(f1: TopoDS_Face, f2: TopoDS_Face, e: TopoDS_Edge, Ang: Standard_Real): Standard_Boolean;
  Getstp3dF(p: gp_Pnt, f: TopoDS_Face, uv: gp_Pnt2d, st: TopAbs_State): Standard_Boolean;
  SplitE(Eanc: TopoDS_Edge, Splits: TopTools_ListOfShape): Standard_Boolean;
  MkShell(lF: TopTools_ListOfShape, She: TopoDS_Shape): void;
  Remove(loS: TopTools_ListOfShape, toremove: TopoDS_Shape): Standard_Boolean;
  WireToFace(Fref: TopoDS_Face, mapWlow: TopTools_DataMapOfShapeListOfShape, lFs: TopTools_ListOfShape): Standard_Boolean;
  EdgeONFace(par: Standard_Real, ed: TopoDS_Edge, uv: gp_Pnt2d, fa: TopoDS_Face, isonfa: Standard_Boolean): Standard_Boolean;
}

export declare class TopOpeBRepTool_makeTransition {
  constructor()
  Initialize(E: TopoDS_Edge, pbef: Standard_Real, paft: Standard_Real, parE: Standard_Real, FS: TopoDS_Face, uv: gp_Pnt2d, factor: Standard_Real): Standard_Boolean;
  Setfactor(factor: Standard_Real): void;
  Getfactor(): Standard_Real;
  IsT2d(): Standard_Boolean;
  SetRest(ES: TopoDS_Edge, parES: Standard_Real): Standard_Boolean;
  HasRest(): Standard_Boolean;
  MkT2donE(stb: TopAbs_State, sta: TopAbs_State): Standard_Boolean;
  MkT3onE(stb: TopAbs_State, sta: TopAbs_State): Standard_Boolean;
  MkT3dproj(stb: TopAbs_State, sta: TopAbs_State): Standard_Boolean;
  MkTonE(stb: TopAbs_State, sta: TopAbs_State): Standard_Boolean;
}

export declare class TopOpeBRepTool_mkTondgE {
  constructor()
  Initialize(dgE: TopoDS_Edge, F: TopoDS_Face, uvi: gp_Pnt2d, Fi: TopoDS_Face): Standard_Boolean;
  SetclE(clE: TopoDS_Edge): Standard_Boolean;
  IsT2d(): Standard_Boolean;
  SetRest(pari: Standard_Real, Ei: TopoDS_Edge): Standard_Boolean;
  GetAllRest(lEi: TopTools_ListOfShape): Standard_Integer;
  MkTonE_1(mkT: Standard_Integer, par1: Standard_Real, par2: Standard_Real): Standard_Boolean;
  MkTonE_2(Ei: TopoDS_Edge, mkT: Standard_Integer, par1: Standard_Real, par2: Standard_Real): Standard_Boolean;
}

export declare class Handle_BRepAlgo_AsDes {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAlgo_AsDes): void;
  get(): BRepAlgo_AsDes;
}

  export declare class Handle_BRepAlgo_AsDes_1 extends Handle_BRepAlgo_AsDes {
    constructor();
  }

  export declare class Handle_BRepAlgo_AsDes_2 extends Handle_BRepAlgo_AsDes {
    constructor(thePtr: BRepAlgo_AsDes);
  }

  export declare class Handle_BRepAlgo_AsDes_3 extends Handle_BRepAlgo_AsDes {
    constructor(theHandle: Handle_BRepAlgo_AsDes);
  }

  export declare class Handle_BRepAlgo_AsDes_4 extends Handle_BRepAlgo_AsDes {
    constructor(theHandle: Handle_BRepAlgo_AsDes);
  }

export declare class Handle_BRepFill_LocationLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_LocationLaw): void;
  get(): BRepFill_LocationLaw;
}

  export declare class Handle_BRepFill_LocationLaw_1 extends Handle_BRepFill_LocationLaw {
    constructor();
  }

  export declare class Handle_BRepFill_LocationLaw_2 extends Handle_BRepFill_LocationLaw {
    constructor(thePtr: BRepFill_LocationLaw);
  }

  export declare class Handle_BRepFill_LocationLaw_3 extends Handle_BRepFill_LocationLaw {
    constructor(theHandle: Handle_BRepFill_LocationLaw);
  }

  export declare class Handle_BRepFill_LocationLaw_4 extends Handle_BRepFill_LocationLaw {
    constructor(theHandle: Handle_BRepFill_LocationLaw);
  }

export declare class Handle_BRepFill_ACRLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_ACRLaw): void;
  get(): BRepFill_ACRLaw;
}

  export declare class Handle_BRepFill_ACRLaw_1 extends Handle_BRepFill_ACRLaw {
    constructor();
  }

  export declare class Handle_BRepFill_ACRLaw_2 extends Handle_BRepFill_ACRLaw {
    constructor(thePtr: BRepFill_ACRLaw);
  }

  export declare class Handle_BRepFill_ACRLaw_3 extends Handle_BRepFill_ACRLaw {
    constructor(theHandle: Handle_BRepFill_ACRLaw);
  }

  export declare class Handle_BRepFill_ACRLaw_4 extends Handle_BRepFill_ACRLaw {
    constructor(theHandle: Handle_BRepFill_ACRLaw);
  }

export declare class Handle_BRepFill_CurveConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_CurveConstraint): void;
  get(): BRepFill_CurveConstraint;
}

  export declare class Handle_BRepFill_CurveConstraint_1 extends Handle_BRepFill_CurveConstraint {
    constructor();
  }

  export declare class Handle_BRepFill_CurveConstraint_2 extends Handle_BRepFill_CurveConstraint {
    constructor(thePtr: BRepFill_CurveConstraint);
  }

  export declare class Handle_BRepFill_CurveConstraint_3 extends Handle_BRepFill_CurveConstraint {
    constructor(theHandle: Handle_BRepFill_CurveConstraint);
  }

  export declare class Handle_BRepFill_CurveConstraint_4 extends Handle_BRepFill_CurveConstraint {
    constructor(theHandle: Handle_BRepFill_CurveConstraint);
  }

export declare class BRepFill_DataMapOfOrientedShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepFill_DataMapOfOrientedShapeListOfShape): void;
  Assign(theOther: BRepFill_DataMapOfOrientedShapeListOfShape): BRepFill_DataMapOfOrientedShapeListOfShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopTools_ListOfShape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopTools_ListOfShape): TopTools_ListOfShape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopTools_ListOfShape;
  Find_1(theKey: TopoDS_Shape): TopTools_ListOfShape;
  Find_2(theKey: TopoDS_Shape, theValue: TopTools_ListOfShape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopTools_ListOfShape;
  ChangeFind(theKey: TopoDS_Shape): TopTools_ListOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepFill_DataMapOfOrientedShapeListOfShape_1 extends BRepFill_DataMapOfOrientedShapeListOfShape {
    constructor();
  }

  export declare class BRepFill_DataMapOfOrientedShapeListOfShape_2 extends BRepFill_DataMapOfOrientedShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepFill_DataMapOfOrientedShapeListOfShape_3 extends BRepFill_DataMapOfOrientedShapeListOfShape {
    constructor(theOther: BRepFill_DataMapOfOrientedShapeListOfShape);
  }

export declare class BRepFill_DataMapOfShapeDataMapOfShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepFill_DataMapOfShapeDataMapOfShapeListOfShape): void;
  Assign(theOther: BRepFill_DataMapOfShapeDataMapOfShapeListOfShape): BRepFill_DataMapOfShapeDataMapOfShapeListOfShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopTools_DataMapOfShapeListOfShape): TopTools_DataMapOfShapeListOfShape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopTools_DataMapOfShapeListOfShape;
  Find_1(theKey: TopoDS_Shape): TopTools_DataMapOfShapeListOfShape;
  Find_2(theKey: TopoDS_Shape, theValue: TopTools_DataMapOfShapeListOfShape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopTools_DataMapOfShapeListOfShape;
  ChangeFind(theKey: TopoDS_Shape): TopTools_DataMapOfShapeListOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_1 extends BRepFill_DataMapOfShapeDataMapOfShapeListOfShape {
    constructor();
  }

  export declare class BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_2 extends BRepFill_DataMapOfShapeDataMapOfShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_3 extends BRepFill_DataMapOfShapeDataMapOfShapeListOfShape {
    constructor(theOther: BRepFill_DataMapOfShapeDataMapOfShapeListOfShape);
  }

export declare class BRepFill_DataMapOfShapeSequenceOfPnt extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepFill_DataMapOfShapeSequenceOfPnt): void;
  Assign(theOther: BRepFill_DataMapOfShapeSequenceOfPnt): BRepFill_DataMapOfShapeSequenceOfPnt;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TColgp_SequenceOfPnt): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TColgp_SequenceOfPnt): TColgp_SequenceOfPnt;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TColgp_SequenceOfPnt;
  Find_1(theKey: TopoDS_Shape): TColgp_SequenceOfPnt;
  Find_2(theKey: TopoDS_Shape, theValue: TColgp_SequenceOfPnt): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TColgp_SequenceOfPnt;
  ChangeFind(theKey: TopoDS_Shape): TColgp_SequenceOfPnt;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepFill_DataMapOfShapeSequenceOfPnt_1 extends BRepFill_DataMapOfShapeSequenceOfPnt {
    constructor();
  }

  export declare class BRepFill_DataMapOfShapeSequenceOfPnt_2 extends BRepFill_DataMapOfShapeSequenceOfPnt {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepFill_DataMapOfShapeSequenceOfPnt_3 extends BRepFill_DataMapOfShapeSequenceOfPnt {
    constructor(theOther: BRepFill_DataMapOfShapeSequenceOfPnt);
  }

export declare class BRepFill_DataMapOfShapeSequenceOfReal extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepFill_DataMapOfShapeSequenceOfReal): void;
  Assign(theOther: BRepFill_DataMapOfShapeSequenceOfReal): BRepFill_DataMapOfShapeSequenceOfReal;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TColStd_SequenceOfReal): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TColStd_SequenceOfReal): TColStd_SequenceOfReal;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TColStd_SequenceOfReal;
  Find_1(theKey: TopoDS_Shape): TColStd_SequenceOfReal;
  Find_2(theKey: TopoDS_Shape, theValue: TColStd_SequenceOfReal): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TColStd_SequenceOfReal;
  ChangeFind(theKey: TopoDS_Shape): TColStd_SequenceOfReal;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepFill_DataMapOfShapeSequenceOfReal_1 extends BRepFill_DataMapOfShapeSequenceOfReal {
    constructor();
  }

  export declare class BRepFill_DataMapOfShapeSequenceOfReal_2 extends BRepFill_DataMapOfShapeSequenceOfReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepFill_DataMapOfShapeSequenceOfReal_3 extends BRepFill_DataMapOfShapeSequenceOfReal {
    constructor(theOther: BRepFill_DataMapOfShapeSequenceOfReal);
  }

export declare class Handle_BRepFill_Edge3DLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_Edge3DLaw): void;
  get(): BRepFill_Edge3DLaw;
}

  export declare class Handle_BRepFill_Edge3DLaw_1 extends Handle_BRepFill_Edge3DLaw {
    constructor();
  }

  export declare class Handle_BRepFill_Edge3DLaw_2 extends Handle_BRepFill_Edge3DLaw {
    constructor(thePtr: BRepFill_Edge3DLaw);
  }

  export declare class Handle_BRepFill_Edge3DLaw_3 extends Handle_BRepFill_Edge3DLaw {
    constructor(theHandle: Handle_BRepFill_Edge3DLaw);
  }

  export declare class Handle_BRepFill_Edge3DLaw_4 extends Handle_BRepFill_Edge3DLaw {
    constructor(theHandle: Handle_BRepFill_Edge3DLaw);
  }

export declare class Handle_BRepFill_DraftLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_DraftLaw): void;
  get(): BRepFill_DraftLaw;
}

  export declare class Handle_BRepFill_DraftLaw_1 extends Handle_BRepFill_DraftLaw {
    constructor();
  }

  export declare class Handle_BRepFill_DraftLaw_2 extends Handle_BRepFill_DraftLaw {
    constructor(thePtr: BRepFill_DraftLaw);
  }

  export declare class Handle_BRepFill_DraftLaw_3 extends Handle_BRepFill_DraftLaw {
    constructor(theHandle: Handle_BRepFill_DraftLaw);
  }

  export declare class Handle_BRepFill_DraftLaw_4 extends Handle_BRepFill_DraftLaw {
    constructor(theHandle: Handle_BRepFill_DraftLaw);
  }

export declare class Handle_BRepFill_EdgeOnSurfLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_EdgeOnSurfLaw): void;
  get(): BRepFill_EdgeOnSurfLaw;
}

  export declare class Handle_BRepFill_EdgeOnSurfLaw_1 extends Handle_BRepFill_EdgeOnSurfLaw {
    constructor();
  }

  export declare class Handle_BRepFill_EdgeOnSurfLaw_2 extends Handle_BRepFill_EdgeOnSurfLaw {
    constructor(thePtr: BRepFill_EdgeOnSurfLaw);
  }

  export declare class Handle_BRepFill_EdgeOnSurfLaw_3 extends Handle_BRepFill_EdgeOnSurfLaw {
    constructor(theHandle: Handle_BRepFill_EdgeOnSurfLaw);
  }

  export declare class Handle_BRepFill_EdgeOnSurfLaw_4 extends Handle_BRepFill_EdgeOnSurfLaw {
    constructor(theHandle: Handle_BRepFill_EdgeOnSurfLaw);
  }

export declare class BRepFill_SequenceOfEdgeFaceAndOrder extends NCollection_BaseSequence {
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
  Assign(theOther: BRepFill_SequenceOfEdgeFaceAndOrder): BRepFill_SequenceOfEdgeFaceAndOrder;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: BRepFill_EdgeFaceAndOrder): void;
  Append_2(theSeq: BRepFill_SequenceOfEdgeFaceAndOrder): void;
  Prepend_1(theItem: BRepFill_EdgeFaceAndOrder): void;
  Prepend_2(theSeq: BRepFill_SequenceOfEdgeFaceAndOrder): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: BRepFill_EdgeFaceAndOrder): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfEdgeFaceAndOrder): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfEdgeFaceAndOrder): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: BRepFill_EdgeFaceAndOrder): void;
  Split(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfEdgeFaceAndOrder): void;
  First(): BRepFill_EdgeFaceAndOrder;
  ChangeFirst(): BRepFill_EdgeFaceAndOrder;
  Last(): BRepFill_EdgeFaceAndOrder;
  ChangeLast(): BRepFill_EdgeFaceAndOrder;
  Value(theIndex: Standard_Integer): BRepFill_EdgeFaceAndOrder;
  ChangeValue(theIndex: Standard_Integer): BRepFill_EdgeFaceAndOrder;
  SetValue(theIndex: Standard_Integer, theItem: BRepFill_EdgeFaceAndOrder): void;
}

  export declare class BRepFill_SequenceOfEdgeFaceAndOrder_1 extends BRepFill_SequenceOfEdgeFaceAndOrder {
    constructor();
  }

  export declare class BRepFill_SequenceOfEdgeFaceAndOrder_2 extends BRepFill_SequenceOfEdgeFaceAndOrder {
    constructor(theAllocator: any);
  }

  export declare class BRepFill_SequenceOfEdgeFaceAndOrder_3 extends BRepFill_SequenceOfEdgeFaceAndOrder {
    constructor(theOther: BRepFill_SequenceOfEdgeFaceAndOrder);
  }

export declare class BRepFill_SequenceOfFaceAndOrder extends NCollection_BaseSequence {
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
  Assign(theOther: BRepFill_SequenceOfFaceAndOrder): BRepFill_SequenceOfFaceAndOrder;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: BRepFill_FaceAndOrder): void;
  Append_2(theSeq: BRepFill_SequenceOfFaceAndOrder): void;
  Prepend_1(theItem: BRepFill_FaceAndOrder): void;
  Prepend_2(theSeq: BRepFill_SequenceOfFaceAndOrder): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: BRepFill_FaceAndOrder): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfFaceAndOrder): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfFaceAndOrder): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: BRepFill_FaceAndOrder): void;
  Split(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfFaceAndOrder): void;
  First(): BRepFill_FaceAndOrder;
  ChangeFirst(): BRepFill_FaceAndOrder;
  Last(): BRepFill_FaceAndOrder;
  ChangeLast(): BRepFill_FaceAndOrder;
  Value(theIndex: Standard_Integer): BRepFill_FaceAndOrder;
  ChangeValue(theIndex: Standard_Integer): BRepFill_FaceAndOrder;
  SetValue(theIndex: Standard_Integer, theItem: BRepFill_FaceAndOrder): void;
}

  export declare class BRepFill_SequenceOfFaceAndOrder_1 extends BRepFill_SequenceOfFaceAndOrder {
    constructor();
  }

  export declare class BRepFill_SequenceOfFaceAndOrder_2 extends BRepFill_SequenceOfFaceAndOrder {
    constructor(theAllocator: any);
  }

  export declare class BRepFill_SequenceOfFaceAndOrder_3 extends BRepFill_SequenceOfFaceAndOrder {
    constructor(theOther: BRepFill_SequenceOfFaceAndOrder);
  }

export declare class BRepFill_IndexedDataMapOfOrientedShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepFill_IndexedDataMapOfOrientedShapeListOfShape): void;
  Assign(theOther: BRepFill_IndexedDataMapOfOrientedShapeListOfShape): BRepFill_IndexedDataMapOfOrientedShapeListOfShape;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopTools_ListOfShape): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopTools_ListOfShape): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopTools_ListOfShape;
  ChangeFromIndex(theIndex: Standard_Integer): TopTools_ListOfShape;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): TopTools_ListOfShape;
  ChangeFromKey(theKey1: TopoDS_Shape): TopTools_ListOfShape;
  Seek(theKey1: TopoDS_Shape): TopTools_ListOfShape;
  ChangeSeek(theKey1: TopoDS_Shape): TopTools_ListOfShape;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: TopTools_ListOfShape): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepFill_IndexedDataMapOfOrientedShapeListOfShape_1 extends BRepFill_IndexedDataMapOfOrientedShapeListOfShape {
    constructor();
  }

  export declare class BRepFill_IndexedDataMapOfOrientedShapeListOfShape_2 extends BRepFill_IndexedDataMapOfOrientedShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepFill_IndexedDataMapOfOrientedShapeListOfShape_3 extends BRepFill_IndexedDataMapOfOrientedShapeListOfShape {
    constructor(theOther: BRepFill_IndexedDataMapOfOrientedShapeListOfShape);
  }

export declare class BRepFill_ListOfOffsetWire extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: BRepFill_ListOfOffsetWire): BRepFill_ListOfOffsetWire;
  Clear(theAllocator: any): void;
  First_1(): BRepFill_OffsetWire;
  First_2(): BRepFill_OffsetWire;
  Last_1(): BRepFill_OffsetWire;
  Last_2(): BRepFill_OffsetWire;
  Append_1(theItem: BRepFill_OffsetWire): BRepFill_OffsetWire;
  Append_3(theOther: BRepFill_ListOfOffsetWire): void;
  Prepend_1(theItem: BRepFill_OffsetWire): BRepFill_OffsetWire;
  Prepend_2(theOther: BRepFill_ListOfOffsetWire): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class BRepFill_ListOfOffsetWire_1 extends BRepFill_ListOfOffsetWire {
    constructor();
  }

  export declare class BRepFill_ListOfOffsetWire_2 extends BRepFill_ListOfOffsetWire {
    constructor(theAllocator: any);
  }

  export declare class BRepFill_ListOfOffsetWire_3 extends BRepFill_ListOfOffsetWire {
    constructor(theOther: BRepFill_ListOfOffsetWire);
  }

export declare class Handle_BRepFill_SectionLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_SectionLaw): void;
  get(): BRepFill_SectionLaw;
}

  export declare class Handle_BRepFill_SectionLaw_1 extends Handle_BRepFill_SectionLaw {
    constructor();
  }

  export declare class Handle_BRepFill_SectionLaw_2 extends Handle_BRepFill_SectionLaw {
    constructor(thePtr: BRepFill_SectionLaw);
  }

  export declare class Handle_BRepFill_SectionLaw_3 extends Handle_BRepFill_SectionLaw {
    constructor(theHandle: Handle_BRepFill_SectionLaw);
  }

  export declare class Handle_BRepFill_SectionLaw_4 extends Handle_BRepFill_SectionLaw {
    constructor(theHandle: Handle_BRepFill_SectionLaw);
  }

export declare class Handle_BRepFill_NSections {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_NSections): void;
  get(): BRepFill_NSections;
}

  export declare class Handle_BRepFill_NSections_1 extends Handle_BRepFill_NSections {
    constructor();
  }

  export declare class Handle_BRepFill_NSections_2 extends Handle_BRepFill_NSections {
    constructor(thePtr: BRepFill_NSections);
  }

  export declare class Handle_BRepFill_NSections_3 extends Handle_BRepFill_NSections {
    constructor(theHandle: Handle_BRepFill_NSections);
  }

  export declare class Handle_BRepFill_NSections_4 extends Handle_BRepFill_NSections {
    constructor(theHandle: Handle_BRepFill_NSections);
  }

export declare class BRepFill_SequenceOfSection extends NCollection_BaseSequence {
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
  Assign(theOther: BRepFill_SequenceOfSection): BRepFill_SequenceOfSection;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: BRepFill_Section): void;
  Append_2(theSeq: BRepFill_SequenceOfSection): void;
  Prepend_1(theItem: BRepFill_Section): void;
  Prepend_2(theSeq: BRepFill_SequenceOfSection): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: BRepFill_Section): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfSection): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfSection): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: BRepFill_Section): void;
  Split(theIndex: Standard_Integer, theSeq: BRepFill_SequenceOfSection): void;
  First(): BRepFill_Section;
  ChangeFirst(): BRepFill_Section;
  Last(): BRepFill_Section;
  ChangeLast(): BRepFill_Section;
  Value(theIndex: Standard_Integer): BRepFill_Section;
  ChangeValue(theIndex: Standard_Integer): BRepFill_Section;
  SetValue(theIndex: Standard_Integer, theItem: BRepFill_Section): void;
}

  export declare class BRepFill_SequenceOfSection_1 extends BRepFill_SequenceOfSection {
    constructor();
  }

  export declare class BRepFill_SequenceOfSection_2 extends BRepFill_SequenceOfSection {
    constructor(theAllocator: any);
  }

  export declare class BRepFill_SequenceOfSection_3 extends BRepFill_SequenceOfSection {
    constructor(theOther: BRepFill_SequenceOfSection);
  }

export declare class Handle_BRepFill_PipeShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_PipeShell): void;
  get(): BRepFill_PipeShell;
}

  export declare class Handle_BRepFill_PipeShell_1 extends Handle_BRepFill_PipeShell {
    constructor();
  }

  export declare class Handle_BRepFill_PipeShell_2 extends Handle_BRepFill_PipeShell {
    constructor(thePtr: BRepFill_PipeShell);
  }

  export declare class Handle_BRepFill_PipeShell_3 extends Handle_BRepFill_PipeShell {
    constructor(theHandle: Handle_BRepFill_PipeShell);
  }

  export declare class Handle_BRepFill_PipeShell_4 extends Handle_BRepFill_PipeShell {
    constructor(theHandle: Handle_BRepFill_PipeShell);
  }

export declare class Handle_BRepFill_ShapeLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepFill_ShapeLaw): void;
  get(): BRepFill_ShapeLaw;
}

  export declare class Handle_BRepFill_ShapeLaw_1 extends Handle_BRepFill_ShapeLaw {
    constructor();
  }

  export declare class Handle_BRepFill_ShapeLaw_2 extends Handle_BRepFill_ShapeLaw {
    constructor(thePtr: BRepFill_ShapeLaw);
  }

  export declare class Handle_BRepFill_ShapeLaw_3 extends Handle_BRepFill_ShapeLaw {
    constructor(theHandle: Handle_BRepFill_ShapeLaw);
  }

  export declare class Handle_BRepFill_ShapeLaw_4 extends Handle_BRepFill_ShapeLaw {
    constructor(theHandle: Handle_BRepFill_ShapeLaw);
  }

export declare class Handle_TopOpeBRepDS_Interference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_Interference): void;
  get(): TopOpeBRepDS_Interference;
}

  export declare class Handle_TopOpeBRepDS_Interference_1 extends Handle_TopOpeBRepDS_Interference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_Interference_2 extends Handle_TopOpeBRepDS_Interference {
    constructor(thePtr: TopOpeBRepDS_Interference);
  }

  export declare class Handle_TopOpeBRepDS_Interference_3 extends Handle_TopOpeBRepDS_Interference {
    constructor(theHandle: Handle_TopOpeBRepDS_Interference);
  }

  export declare class Handle_TopOpeBRepDS_Interference_4 extends Handle_TopOpeBRepDS_Interference {
    constructor(theHandle: Handle_TopOpeBRepDS_Interference);
  }

export declare class Handle_TopOpeBRepDS_SurfaceCurveInterference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_SurfaceCurveInterference): void;
  get(): TopOpeBRepDS_SurfaceCurveInterference;
}

  export declare class Handle_TopOpeBRepDS_SurfaceCurveInterference_1 extends Handle_TopOpeBRepDS_SurfaceCurveInterference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_SurfaceCurveInterference_2 extends Handle_TopOpeBRepDS_SurfaceCurveInterference {
    constructor(thePtr: TopOpeBRepDS_SurfaceCurveInterference);
  }

  export declare class Handle_TopOpeBRepDS_SurfaceCurveInterference_3 extends Handle_TopOpeBRepDS_SurfaceCurveInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_SurfaceCurveInterference);
  }

  export declare class Handle_TopOpeBRepDS_SurfaceCurveInterference_4 extends Handle_TopOpeBRepDS_SurfaceCurveInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_SurfaceCurveInterference);
  }

export declare class Handle_TopOpeBRepDS_CurvePointInterference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_CurvePointInterference): void;
  get(): TopOpeBRepDS_CurvePointInterference;
}

  export declare class Handle_TopOpeBRepDS_CurvePointInterference_1 extends Handle_TopOpeBRepDS_CurvePointInterference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_CurvePointInterference_2 extends Handle_TopOpeBRepDS_CurvePointInterference {
    constructor(thePtr: TopOpeBRepDS_CurvePointInterference);
  }

  export declare class Handle_TopOpeBRepDS_CurvePointInterference_3 extends Handle_TopOpeBRepDS_CurvePointInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_CurvePointInterference);
  }

  export declare class Handle_TopOpeBRepDS_CurvePointInterference_4 extends Handle_TopOpeBRepDS_CurvePointInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_CurvePointInterference);
  }

export declare class TopOpeBRepDS_MapOfSurface extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_MapOfSurface): void;
  Assign(theOther: TopOpeBRepDS_MapOfSurface): TopOpeBRepDS_MapOfSurface;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopOpeBRepDS_SurfaceData): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopOpeBRepDS_SurfaceData): TopOpeBRepDS_SurfaceData;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopOpeBRepDS_SurfaceData;
  Find_1(theKey: Standard_Integer): TopOpeBRepDS_SurfaceData;
  Find_2(theKey: Standard_Integer, theValue: TopOpeBRepDS_SurfaceData): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopOpeBRepDS_SurfaceData;
  ChangeFind(theKey: Standard_Integer): TopOpeBRepDS_SurfaceData;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_MapOfSurface_1 extends TopOpeBRepDS_MapOfSurface {
    constructor();
  }

  export declare class TopOpeBRepDS_MapOfSurface_2 extends TopOpeBRepDS_MapOfSurface {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_MapOfSurface_3 extends TopOpeBRepDS_MapOfSurface {
    constructor(theOther: TopOpeBRepDS_MapOfSurface);
  }

export declare class TopOpeBRepDS_MapOfCurve extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_MapOfCurve): void;
  Assign(theOther: TopOpeBRepDS_MapOfCurve): TopOpeBRepDS_MapOfCurve;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopOpeBRepDS_CurveData): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopOpeBRepDS_CurveData): TopOpeBRepDS_CurveData;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopOpeBRepDS_CurveData;
  Find_1(theKey: Standard_Integer): TopOpeBRepDS_CurveData;
  Find_2(theKey: Standard_Integer, theValue: TopOpeBRepDS_CurveData): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopOpeBRepDS_CurveData;
  ChangeFind(theKey: Standard_Integer): TopOpeBRepDS_CurveData;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_MapOfCurve_1 extends TopOpeBRepDS_MapOfCurve {
    constructor();
  }

  export declare class TopOpeBRepDS_MapOfCurve_2 extends TopOpeBRepDS_MapOfCurve {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_MapOfCurve_3 extends TopOpeBRepDS_MapOfCurve {
    constructor(theOther: TopOpeBRepDS_MapOfCurve);
  }

export declare class TopOpeBRepDS_MapOfPoint extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_MapOfPoint): void;
  Assign(theOther: TopOpeBRepDS_MapOfPoint): TopOpeBRepDS_MapOfPoint;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopOpeBRepDS_PointData): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopOpeBRepDS_PointData): TopOpeBRepDS_PointData;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopOpeBRepDS_PointData;
  Find_1(theKey: Standard_Integer): TopOpeBRepDS_PointData;
  Find_2(theKey: Standard_Integer, theValue: TopOpeBRepDS_PointData): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopOpeBRepDS_PointData;
  ChangeFind(theKey: Standard_Integer): TopOpeBRepDS_PointData;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_MapOfPoint_1 extends TopOpeBRepDS_MapOfPoint {
    constructor();
  }

  export declare class TopOpeBRepDS_MapOfPoint_2 extends TopOpeBRepDS_MapOfPoint {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_MapOfPoint_3 extends TopOpeBRepDS_MapOfPoint {
    constructor(theOther: TopOpeBRepDS_MapOfPoint);
  }

export declare class TopOpeBRepDS_MapOfShapeData extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_MapOfShapeData): void;
  Assign(theOther: TopOpeBRepDS_MapOfShapeData): TopOpeBRepDS_MapOfShapeData;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopOpeBRepDS_ShapeData): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopOpeBRepDS_ShapeData): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopOpeBRepDS_ShapeData;
  ChangeFromIndex(theIndex: Standard_Integer): TopOpeBRepDS_ShapeData;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeData;
  ChangeFromKey(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeData;
  Seek(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeData;
  ChangeSeek(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeData;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: TopOpeBRepDS_ShapeData): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_MapOfShapeData_1 extends TopOpeBRepDS_MapOfShapeData {
    constructor();
  }

  export declare class TopOpeBRepDS_MapOfShapeData_2 extends TopOpeBRepDS_MapOfShapeData {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_MapOfShapeData_3 extends TopOpeBRepDS_MapOfShapeData {
    constructor(theOther: TopOpeBRepDS_MapOfShapeData);
  }

export declare class TopOpeBRepDS_IndexedDataMapOfShapeWithState extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_IndexedDataMapOfShapeWithState): void;
  Assign(theOther: TopOpeBRepDS_IndexedDataMapOfShapeWithState): TopOpeBRepDS_IndexedDataMapOfShapeWithState;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopOpeBRepDS_ShapeWithState): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopOpeBRepDS_ShapeWithState): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopOpeBRepDS_ShapeWithState;
  ChangeFromIndex(theIndex: Standard_Integer): TopOpeBRepDS_ShapeWithState;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeWithState;
  ChangeFromKey(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeWithState;
  Seek(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeWithState;
  ChangeSeek(theKey1: TopoDS_Shape): TopOpeBRepDS_ShapeWithState;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: TopOpeBRepDS_ShapeWithState): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_IndexedDataMapOfShapeWithState_1 extends TopOpeBRepDS_IndexedDataMapOfShapeWithState {
    constructor();
  }

  export declare class TopOpeBRepDS_IndexedDataMapOfShapeWithState_2 extends TopOpeBRepDS_IndexedDataMapOfShapeWithState {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_IndexedDataMapOfShapeWithState_3 extends TopOpeBRepDS_IndexedDataMapOfShapeWithState {
    constructor(theOther: TopOpeBRepDS_IndexedDataMapOfShapeWithState);
  }

export declare class TopOpeBRep_Array1OfVPointInter {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TopOpeBRep_VPointInter): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TopOpeBRep_Array1OfVPointInter): TopOpeBRep_Array1OfVPointInter;
  Move(theOther: TopOpeBRep_Array1OfVPointInter): TopOpeBRep_Array1OfVPointInter;
  First(): TopOpeBRep_VPointInter;
  ChangeFirst(): TopOpeBRep_VPointInter;
  Last(): TopOpeBRep_VPointInter;
  ChangeLast(): TopOpeBRep_VPointInter;
  Value(theIndex: Standard_Integer): TopOpeBRep_VPointInter;
  ChangeValue(theIndex: Standard_Integer): TopOpeBRep_VPointInter;
  SetValue(theIndex: Standard_Integer, theItem: TopOpeBRep_VPointInter): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TopOpeBRep_Array1OfVPointInter_1 extends TopOpeBRep_Array1OfVPointInter {
    constructor();
  }

  export declare class TopOpeBRep_Array1OfVPointInter_2 extends TopOpeBRep_Array1OfVPointInter {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TopOpeBRep_Array1OfVPointInter_3 extends TopOpeBRep_Array1OfVPointInter {
    constructor(theOther: TopOpeBRep_Array1OfVPointInter);
  }

  export declare class TopOpeBRep_Array1OfVPointInter_4 extends TopOpeBRep_Array1OfVPointInter {
    constructor(theOther: TopOpeBRep_Array1OfVPointInter);
  }

  export declare class TopOpeBRep_Array1OfVPointInter_5 extends TopOpeBRep_Array1OfVPointInter {
    constructor(theBegin: TopOpeBRep_VPointInter, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TopOpeBRep_HArray1OfVPointInter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRep_HArray1OfVPointInter): void;
  get(): TopOpeBRep_HArray1OfVPointInter;
}

  export declare class Handle_TopOpeBRep_HArray1OfVPointInter_1 extends Handle_TopOpeBRep_HArray1OfVPointInter {
    constructor();
  }

  export declare class Handle_TopOpeBRep_HArray1OfVPointInter_2 extends Handle_TopOpeBRep_HArray1OfVPointInter {
    constructor(thePtr: TopOpeBRep_HArray1OfVPointInter);
  }

  export declare class Handle_TopOpeBRep_HArray1OfVPointInter_3 extends Handle_TopOpeBRep_HArray1OfVPointInter {
    constructor(theHandle: Handle_TopOpeBRep_HArray1OfVPointInter);
  }

  export declare class Handle_TopOpeBRep_HArray1OfVPointInter_4 extends Handle_TopOpeBRep_HArray1OfVPointInter {
    constructor(theHandle: Handle_TopOpeBRep_HArray1OfVPointInter);
  }

export declare class TopOpeBRep_Array1OfLineInter {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TopOpeBRep_LineInter): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TopOpeBRep_Array1OfLineInter): TopOpeBRep_Array1OfLineInter;
  Move(theOther: TopOpeBRep_Array1OfLineInter): TopOpeBRep_Array1OfLineInter;
  First(): TopOpeBRep_LineInter;
  ChangeFirst(): TopOpeBRep_LineInter;
  Last(): TopOpeBRep_LineInter;
  ChangeLast(): TopOpeBRep_LineInter;
  Value(theIndex: Standard_Integer): TopOpeBRep_LineInter;
  ChangeValue(theIndex: Standard_Integer): TopOpeBRep_LineInter;
  SetValue(theIndex: Standard_Integer, theItem: TopOpeBRep_LineInter): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TopOpeBRep_Array1OfLineInter_1 extends TopOpeBRep_Array1OfLineInter {
    constructor();
  }

  export declare class TopOpeBRep_Array1OfLineInter_2 extends TopOpeBRep_Array1OfLineInter {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TopOpeBRep_Array1OfLineInter_3 extends TopOpeBRep_Array1OfLineInter {
    constructor(theOther: TopOpeBRep_Array1OfLineInter);
  }

  export declare class TopOpeBRep_Array1OfLineInter_4 extends TopOpeBRep_Array1OfLineInter {
    constructor(theOther: TopOpeBRep_Array1OfLineInter);
  }

  export declare class TopOpeBRep_Array1OfLineInter_5 extends TopOpeBRep_Array1OfLineInter {
    constructor(theBegin: TopOpeBRep_LineInter, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TopOpeBRep_HArray1OfLineInter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRep_HArray1OfLineInter): void;
  get(): TopOpeBRep_HArray1OfLineInter;
}

  export declare class Handle_TopOpeBRep_HArray1OfLineInter_1 extends Handle_TopOpeBRep_HArray1OfLineInter {
    constructor();
  }

  export declare class Handle_TopOpeBRep_HArray1OfLineInter_2 extends Handle_TopOpeBRep_HArray1OfLineInter {
    constructor(thePtr: TopOpeBRep_HArray1OfLineInter);
  }

  export declare class Handle_TopOpeBRep_HArray1OfLineInter_3 extends Handle_TopOpeBRep_HArray1OfLineInter {
    constructor(theHandle: Handle_TopOpeBRep_HArray1OfLineInter);
  }

  export declare class Handle_TopOpeBRep_HArray1OfLineInter_4 extends Handle_TopOpeBRep_HArray1OfLineInter {
    constructor(theHandle: Handle_TopOpeBRep_HArray1OfLineInter);
  }

export declare class Handle_TopOpeBRepDS_ShapeShapeInterference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_ShapeShapeInterference): void;
  get(): TopOpeBRepDS_ShapeShapeInterference;
}

  export declare class Handle_TopOpeBRepDS_ShapeShapeInterference_1 extends Handle_TopOpeBRepDS_ShapeShapeInterference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_ShapeShapeInterference_2 extends Handle_TopOpeBRepDS_ShapeShapeInterference {
    constructor(thePtr: TopOpeBRepDS_ShapeShapeInterference);
  }

  export declare class Handle_TopOpeBRepDS_ShapeShapeInterference_3 extends Handle_TopOpeBRepDS_ShapeShapeInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_ShapeShapeInterference);
  }

  export declare class Handle_TopOpeBRepDS_ShapeShapeInterference_4 extends Handle_TopOpeBRepDS_ShapeShapeInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_ShapeShapeInterference);
  }

export declare class Handle_TopOpeBRepDS_EdgeVertexInterference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_EdgeVertexInterference): void;
  get(): TopOpeBRepDS_EdgeVertexInterference;
}

  export declare class Handle_TopOpeBRepDS_EdgeVertexInterference_1 extends Handle_TopOpeBRepDS_EdgeVertexInterference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_EdgeVertexInterference_2 extends Handle_TopOpeBRepDS_EdgeVertexInterference {
    constructor(thePtr: TopOpeBRepDS_EdgeVertexInterference);
  }

  export declare class Handle_TopOpeBRepDS_EdgeVertexInterference_3 extends Handle_TopOpeBRepDS_EdgeVertexInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_EdgeVertexInterference);
  }

  export declare class Handle_TopOpeBRepDS_EdgeVertexInterference_4 extends Handle_TopOpeBRepDS_EdgeVertexInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_EdgeVertexInterference);
  }

export declare class Handle_TopOpeBRepDS_FaceEdgeInterference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_FaceEdgeInterference): void;
  get(): TopOpeBRepDS_FaceEdgeInterference;
}

  export declare class Handle_TopOpeBRepDS_FaceEdgeInterference_1 extends Handle_TopOpeBRepDS_FaceEdgeInterference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_FaceEdgeInterference_2 extends Handle_TopOpeBRepDS_FaceEdgeInterference {
    constructor(thePtr: TopOpeBRepDS_FaceEdgeInterference);
  }

  export declare class Handle_TopOpeBRepDS_FaceEdgeInterference_3 extends Handle_TopOpeBRepDS_FaceEdgeInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_FaceEdgeInterference);
  }

  export declare class Handle_TopOpeBRepDS_FaceEdgeInterference_4 extends Handle_TopOpeBRepDS_FaceEdgeInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_FaceEdgeInterference);
  }

export declare class Handle_TopOpeBRepDS_HDataStructure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_HDataStructure): void;
  get(): TopOpeBRepDS_HDataStructure;
}

  export declare class Handle_TopOpeBRepDS_HDataStructure_1 extends Handle_TopOpeBRepDS_HDataStructure {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_HDataStructure_2 extends Handle_TopOpeBRepDS_HDataStructure {
    constructor(thePtr: TopOpeBRepDS_HDataStructure);
  }

  export declare class Handle_TopOpeBRepDS_HDataStructure_3 extends Handle_TopOpeBRepDS_HDataStructure {
    constructor(theHandle: Handle_TopOpeBRepDS_HDataStructure);
  }

  export declare class Handle_TopOpeBRepDS_HDataStructure_4 extends Handle_TopOpeBRepDS_HDataStructure {
    constructor(theHandle: Handle_TopOpeBRepDS_HDataStructure);
  }

export declare class TopOpeBRep_SequenceOfPoint2d extends NCollection_BaseSequence {
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
  Assign(theOther: TopOpeBRep_SequenceOfPoint2d): TopOpeBRep_SequenceOfPoint2d;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TopOpeBRep_Point2d): void;
  Append_2(theSeq: TopOpeBRep_SequenceOfPoint2d): void;
  Prepend_1(theItem: TopOpeBRep_Point2d): void;
  Prepend_2(theSeq: TopOpeBRep_SequenceOfPoint2d): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TopOpeBRep_Point2d): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TopOpeBRep_SequenceOfPoint2d): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TopOpeBRep_SequenceOfPoint2d): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TopOpeBRep_Point2d): void;
  Split(theIndex: Standard_Integer, theSeq: TopOpeBRep_SequenceOfPoint2d): void;
  First(): TopOpeBRep_Point2d;
  ChangeFirst(): TopOpeBRep_Point2d;
  Last(): TopOpeBRep_Point2d;
  ChangeLast(): TopOpeBRep_Point2d;
  Value(theIndex: Standard_Integer): TopOpeBRep_Point2d;
  ChangeValue(theIndex: Standard_Integer): TopOpeBRep_Point2d;
  SetValue(theIndex: Standard_Integer, theItem: TopOpeBRep_Point2d): void;
}

  export declare class TopOpeBRep_SequenceOfPoint2d_1 extends TopOpeBRep_SequenceOfPoint2d {
    constructor();
  }

  export declare class TopOpeBRep_SequenceOfPoint2d_2 extends TopOpeBRep_SequenceOfPoint2d {
    constructor(theAllocator: any);
  }

  export declare class TopOpeBRep_SequenceOfPoint2d_3 extends TopOpeBRep_SequenceOfPoint2d {
    constructor(theOther: TopOpeBRep_SequenceOfPoint2d);
  }

export declare class Handle_TopOpeBRep_FFDumper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRep_FFDumper): void;
  get(): TopOpeBRep_FFDumper;
}

  export declare class Handle_TopOpeBRep_FFDumper_1 extends Handle_TopOpeBRep_FFDumper {
    constructor();
  }

  export declare class Handle_TopOpeBRep_FFDumper_2 extends Handle_TopOpeBRep_FFDumper {
    constructor(thePtr: TopOpeBRep_FFDumper);
  }

  export declare class Handle_TopOpeBRep_FFDumper_3 extends Handle_TopOpeBRep_FFDumper {
    constructor(theHandle: Handle_TopOpeBRep_FFDumper);
  }

  export declare class Handle_TopOpeBRep_FFDumper_4 extends Handle_TopOpeBRep_FFDumper {
    constructor(theHandle: Handle_TopOpeBRep_FFDumper);
  }

export declare class Handle_TopOpeBRep_Hctxee2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRep_Hctxee2d): void;
  get(): TopOpeBRep_Hctxee2d;
}

  export declare class Handle_TopOpeBRep_Hctxee2d_1 extends Handle_TopOpeBRep_Hctxee2d {
    constructor();
  }

  export declare class Handle_TopOpeBRep_Hctxee2d_2 extends Handle_TopOpeBRep_Hctxee2d {
    constructor(thePtr: TopOpeBRep_Hctxee2d);
  }

  export declare class Handle_TopOpeBRep_Hctxee2d_3 extends Handle_TopOpeBRep_Hctxee2d {
    constructor(theHandle: Handle_TopOpeBRep_Hctxee2d);
  }

  export declare class Handle_TopOpeBRep_Hctxee2d_4 extends Handle_TopOpeBRep_Hctxee2d {
    constructor(theHandle: Handle_TopOpeBRep_Hctxee2d);
  }

export declare class Handle_TopOpeBRep_Hctxff2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRep_Hctxff2d): void;
  get(): TopOpeBRep_Hctxff2d;
}

  export declare class Handle_TopOpeBRep_Hctxff2d_1 extends Handle_TopOpeBRep_Hctxff2d {
    constructor();
  }

  export declare class Handle_TopOpeBRep_Hctxff2d_2 extends Handle_TopOpeBRep_Hctxff2d {
    constructor(thePtr: TopOpeBRep_Hctxff2d);
  }

  export declare class Handle_TopOpeBRep_Hctxff2d_3 extends Handle_TopOpeBRep_Hctxff2d {
    constructor(theHandle: Handle_TopOpeBRep_Hctxff2d);
  }

  export declare class Handle_TopOpeBRep_Hctxff2d_4 extends Handle_TopOpeBRep_Hctxff2d {
    constructor(theHandle: Handle_TopOpeBRep_Hctxff2d);
  }

export declare class TopOpeBRep_ListOfBipoint extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TopOpeBRep_ListOfBipoint): TopOpeBRep_ListOfBipoint;
  Clear(theAllocator: any): void;
  First_1(): TopOpeBRep_Bipoint;
  First_2(): TopOpeBRep_Bipoint;
  Last_1(): TopOpeBRep_Bipoint;
  Last_2(): TopOpeBRep_Bipoint;
  Append_1(theItem: TopOpeBRep_Bipoint): TopOpeBRep_Bipoint;
  Append_3(theOther: TopOpeBRep_ListOfBipoint): void;
  Prepend_1(theItem: TopOpeBRep_Bipoint): TopOpeBRep_Bipoint;
  Prepend_2(theOther: TopOpeBRep_ListOfBipoint): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TopOpeBRep_ListOfBipoint_1 extends TopOpeBRep_ListOfBipoint {
    constructor();
  }

  export declare class TopOpeBRep_ListOfBipoint_2 extends TopOpeBRep_ListOfBipoint {
    constructor(theAllocator: any);
  }

  export declare class TopOpeBRep_ListOfBipoint_3 extends TopOpeBRep_ListOfBipoint {
    constructor(theOther: TopOpeBRep_ListOfBipoint);
  }

export declare class Handle_TopOpeBRepBuild_Loop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepBuild_Loop): void;
  get(): TopOpeBRepBuild_Loop;
}

  export declare class Handle_TopOpeBRepBuild_Loop_1 extends Handle_TopOpeBRepBuild_Loop {
    constructor();
  }

  export declare class Handle_TopOpeBRepBuild_Loop_2 extends Handle_TopOpeBRepBuild_Loop {
    constructor(thePtr: TopOpeBRepBuild_Loop);
  }

  export declare class Handle_TopOpeBRepBuild_Loop_3 extends Handle_TopOpeBRepBuild_Loop {
    constructor(theHandle: Handle_TopOpeBRepBuild_Loop);
  }

  export declare class Handle_TopOpeBRepBuild_Loop_4 extends Handle_TopOpeBRepBuild_Loop {
    constructor(theHandle: Handle_TopOpeBRepBuild_Loop);
  }

export declare class TopOpeBRepBuild_ListOfListOfLoop extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TopOpeBRepBuild_ListOfListOfLoop): TopOpeBRepBuild_ListOfListOfLoop;
  Clear(theAllocator: any): void;
  First_1(): TopOpeBRepBuild_ListOfLoop;
  First_2(): TopOpeBRepBuild_ListOfLoop;
  Last_1(): TopOpeBRepBuild_ListOfLoop;
  Last_2(): TopOpeBRepBuild_ListOfLoop;
  Append_1(theItem: TopOpeBRepBuild_ListOfLoop): TopOpeBRepBuild_ListOfLoop;
  Append_3(theOther: TopOpeBRepBuild_ListOfListOfLoop): void;
  Prepend_1(theItem: TopOpeBRepBuild_ListOfLoop): TopOpeBRepBuild_ListOfLoop;
  Prepend_2(theOther: TopOpeBRepBuild_ListOfListOfLoop): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TopOpeBRepBuild_ListOfListOfLoop_1 extends TopOpeBRepBuild_ListOfListOfLoop {
    constructor();
  }

  export declare class TopOpeBRepBuild_ListOfListOfLoop_2 extends TopOpeBRepBuild_ListOfListOfLoop {
    constructor(theAllocator: any);
  }

  export declare class TopOpeBRepBuild_ListOfListOfLoop_3 extends TopOpeBRepBuild_ListOfListOfLoop {
    constructor(theOther: TopOpeBRepBuild_ListOfListOfLoop);
  }

export declare class TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State): void;
  Assign(theOther: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State): TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopOpeBRepDS_ListOfShapeOn1State): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopOpeBRepDS_ListOfShapeOn1State): TopOpeBRepDS_ListOfShapeOn1State;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopOpeBRepDS_ListOfShapeOn1State;
  Find_1(theKey: TopoDS_Shape): TopOpeBRepDS_ListOfShapeOn1State;
  Find_2(theKey: TopoDS_Shape, theValue: TopOpeBRepDS_ListOfShapeOn1State): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopOpeBRepDS_ListOfShapeOn1State;
  ChangeFind(theKey: TopoDS_Shape): TopOpeBRepDS_ListOfShapeOn1State;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_1 extends TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State {
    constructor();
  }

  export declare class TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_2 extends TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_3 extends TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State {
    constructor(theOther: TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State);
  }

export declare class TopOpeBRepDS_DataMapOfShapeState extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_DataMapOfShapeState): void;
  Assign(theOther: TopOpeBRepDS_DataMapOfShapeState): TopOpeBRepDS_DataMapOfShapeState;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopAbs_State): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopAbs_State): TopAbs_State;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopAbs_State;
  Find_1(theKey: TopoDS_Shape): TopAbs_State;
  Find_2(theKey: TopoDS_Shape, theValue: TopAbs_State): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopAbs_State;
  ChangeFind(theKey: TopoDS_Shape): TopAbs_State;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_DataMapOfShapeState_1 extends TopOpeBRepDS_DataMapOfShapeState {
    constructor();
  }

  export declare class TopOpeBRepDS_DataMapOfShapeState_2 extends TopOpeBRepDS_DataMapOfShapeState {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_DataMapOfShapeState_3 extends TopOpeBRepDS_DataMapOfShapeState {
    constructor(theOther: TopOpeBRepDS_DataMapOfShapeState);
  }

export declare class TopOpeBRepBuild_ListOfShapeListOfShape extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TopOpeBRepBuild_ListOfShapeListOfShape): TopOpeBRepBuild_ListOfShapeListOfShape;
  Clear(theAllocator: any): void;
  First_1(): TopOpeBRepBuild_ShapeListOfShape;
  First_2(): TopOpeBRepBuild_ShapeListOfShape;
  Last_1(): TopOpeBRepBuild_ShapeListOfShape;
  Last_2(): TopOpeBRepBuild_ShapeListOfShape;
  Append_1(theItem: TopOpeBRepBuild_ShapeListOfShape): TopOpeBRepBuild_ShapeListOfShape;
  Append_3(theOther: TopOpeBRepBuild_ListOfShapeListOfShape): void;
  Prepend_1(theItem: TopOpeBRepBuild_ShapeListOfShape): TopOpeBRepBuild_ShapeListOfShape;
  Prepend_2(theOther: TopOpeBRepBuild_ListOfShapeListOfShape): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TopOpeBRepBuild_ListOfShapeListOfShape_1 extends TopOpeBRepBuild_ListOfShapeListOfShape {
    constructor();
  }

  export declare class TopOpeBRepBuild_ListOfShapeListOfShape_2 extends TopOpeBRepBuild_ListOfShapeListOfShape {
    constructor(theAllocator: any);
  }

  export declare class TopOpeBRepBuild_ListOfShapeListOfShape_3 extends TopOpeBRepBuild_ListOfShapeListOfShape {
    constructor(theOther: TopOpeBRepBuild_ListOfShapeListOfShape);
  }

export declare class TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape): void;
  Assign(theOther: TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape): TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopOpeBRepBuild_ListOfShapeListOfShape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopOpeBRepBuild_ListOfShapeListOfShape): TopOpeBRepBuild_ListOfShapeListOfShape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopOpeBRepBuild_ListOfShapeListOfShape;
  Find_1(theKey: TopoDS_Shape): TopOpeBRepBuild_ListOfShapeListOfShape;
  Find_2(theKey: TopoDS_Shape, theValue: TopOpeBRepBuild_ListOfShapeListOfShape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopOpeBRepBuild_ListOfShapeListOfShape;
  ChangeFind(theKey: TopoDS_Shape): TopOpeBRepBuild_ListOfShapeListOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_1 extends TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape {
    constructor();
  }

  export declare class TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_2 extends TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_3 extends TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape {
    constructor(theOther: TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape);
  }

export declare class Handle_TopOpeBRepBuild_HBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepBuild_HBuilder): void;
  get(): TopOpeBRepBuild_HBuilder;
}

  export declare class Handle_TopOpeBRepBuild_HBuilder_1 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor();
  }

  export declare class Handle_TopOpeBRepBuild_HBuilder_2 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor(thePtr: TopOpeBRepBuild_HBuilder);
  }

  export declare class Handle_TopOpeBRepBuild_HBuilder_3 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor(theHandle: Handle_TopOpeBRepBuild_HBuilder);
  }

  export declare class Handle_TopOpeBRepBuild_HBuilder_4 extends Handle_TopOpeBRepBuild_HBuilder {
    constructor(theHandle: Handle_TopOpeBRepBuild_HBuilder);
  }

export declare class TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo): void;
  Assign(theOther: TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo): TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopOpeBRepBuild_VertexInfo): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopOpeBRepBuild_VertexInfo): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopOpeBRepBuild_VertexInfo;
  ChangeFromIndex(theIndex: Standard_Integer): TopOpeBRepBuild_VertexInfo;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): TopOpeBRepBuild_VertexInfo;
  ChangeFromKey(theKey1: TopoDS_Shape): TopOpeBRepBuild_VertexInfo;
  Seek(theKey1: TopoDS_Shape): TopOpeBRepBuild_VertexInfo;
  ChangeSeek(theKey1: TopoDS_Shape): TopOpeBRepBuild_VertexInfo;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: TopOpeBRepBuild_VertexInfo): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_1 extends TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo {
    constructor();
  }

  export declare class TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_2 extends TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_3 extends TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo {
    constructor(theOther: TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo);
  }

export declare class Handle_TopOpeBRepBuild_Pave {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepBuild_Pave): void;
  get(): TopOpeBRepBuild_Pave;
}

  export declare class Handle_TopOpeBRepBuild_Pave_1 extends Handle_TopOpeBRepBuild_Pave {
    constructor();
  }

  export declare class Handle_TopOpeBRepBuild_Pave_2 extends Handle_TopOpeBRepBuild_Pave {
    constructor(thePtr: TopOpeBRepBuild_Pave);
  }

  export declare class Handle_TopOpeBRepBuild_Pave_3 extends Handle_TopOpeBRepBuild_Pave {
    constructor(theHandle: Handle_TopOpeBRepBuild_Pave);
  }

  export declare class Handle_TopOpeBRepBuild_Pave_4 extends Handle_TopOpeBRepBuild_Pave {
    constructor(theHandle: Handle_TopOpeBRepBuild_Pave);
  }

export declare class TopOpeBRepDS_DataMapOfIntegerListOfInterference extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_DataMapOfIntegerListOfInterference): void;
  Assign(theOther: TopOpeBRepDS_DataMapOfIntegerListOfInterference): TopOpeBRepDS_DataMapOfIntegerListOfInterference;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopOpeBRepDS_ListOfInterference): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopOpeBRepDS_ListOfInterference): TopOpeBRepDS_ListOfInterference;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  Find_1(theKey: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  Find_2(theKey: Standard_Integer, theValue: TopOpeBRepDS_ListOfInterference): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  ChangeFind(theKey: Standard_Integer): TopOpeBRepDS_ListOfInterference;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_DataMapOfIntegerListOfInterference_1 extends TopOpeBRepDS_DataMapOfIntegerListOfInterference {
    constructor();
  }

  export declare class TopOpeBRepDS_DataMapOfIntegerListOfInterference_2 extends TopOpeBRepDS_DataMapOfIntegerListOfInterference {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_DataMapOfIntegerListOfInterference_3 extends TopOpeBRepDS_DataMapOfIntegerListOfInterference {
    constructor(theOther: TopOpeBRepDS_DataMapOfIntegerListOfInterference);
  }

export declare class TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TopOpeBRepDS_DataMapOfIntegerListOfInterference): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference): TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference;
  Move(theOther: TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference): TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference;
  First(): TopOpeBRepDS_DataMapOfIntegerListOfInterference;
  ChangeFirst(): TopOpeBRepDS_DataMapOfIntegerListOfInterference;
  Last(): TopOpeBRepDS_DataMapOfIntegerListOfInterference;
  ChangeLast(): TopOpeBRepDS_DataMapOfIntegerListOfInterference;
  Value(theIndex: Standard_Integer): TopOpeBRepDS_DataMapOfIntegerListOfInterference;
  ChangeValue(theIndex: Standard_Integer): TopOpeBRepDS_DataMapOfIntegerListOfInterference;
  SetValue(theIndex: Standard_Integer, theItem: TopOpeBRepDS_DataMapOfIntegerListOfInterference): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_1 extends TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference {
    constructor();
  }

  export declare class TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_2 extends TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_3 extends TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference {
    constructor(theOther: TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference);
  }

  export declare class TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_4 extends TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference {
    constructor(theOther: TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference);
  }

  export declare class TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_5 extends TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference {
    constructor(theBegin: TopOpeBRepDS_DataMapOfIntegerListOfInterference, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TopOpeBRepDS_Association {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_Association): void;
  get(): TopOpeBRepDS_Association;
}

  export declare class Handle_TopOpeBRepDS_Association_1 extends Handle_TopOpeBRepDS_Association {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_Association_2 extends Handle_TopOpeBRepDS_Association {
    constructor(thePtr: TopOpeBRepDS_Association);
  }

  export declare class Handle_TopOpeBRepDS_Association_3 extends Handle_TopOpeBRepDS_Association {
    constructor(theHandle: Handle_TopOpeBRepDS_Association);
  }

  export declare class Handle_TopOpeBRepDS_Association_4 extends Handle_TopOpeBRepDS_Association {
    constructor(theHandle: Handle_TopOpeBRepDS_Association);
  }

export declare class TopOpeBRepDS_DataMapOfCheckStatus extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_DataMapOfCheckStatus): void;
  Assign(theOther: TopOpeBRepDS_DataMapOfCheckStatus): TopOpeBRepDS_DataMapOfCheckStatus;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopOpeBRepDS_CheckStatus): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopOpeBRepDS_CheckStatus): TopOpeBRepDS_CheckStatus;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopOpeBRepDS_CheckStatus;
  Find_1(theKey: Standard_Integer): TopOpeBRepDS_CheckStatus;
  Find_2(theKey: Standard_Integer, theValue: TopOpeBRepDS_CheckStatus): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopOpeBRepDS_CheckStatus;
  ChangeFind(theKey: Standard_Integer): TopOpeBRepDS_CheckStatus;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_DataMapOfCheckStatus_1 extends TopOpeBRepDS_DataMapOfCheckStatus {
    constructor();
  }

  export declare class TopOpeBRepDS_DataMapOfCheckStatus_2 extends TopOpeBRepDS_DataMapOfCheckStatus {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_DataMapOfCheckStatus_3 extends TopOpeBRepDS_DataMapOfCheckStatus {
    constructor(theOther: TopOpeBRepDS_DataMapOfCheckStatus);
  }

export declare class Handle_TopOpeBRepDS_Check {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_Check): void;
  get(): TopOpeBRepDS_Check;
}

  export declare class Handle_TopOpeBRepDS_Check_1 extends Handle_TopOpeBRepDS_Check {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_Check_2 extends Handle_TopOpeBRepDS_Check {
    constructor(thePtr: TopOpeBRepDS_Check);
  }

  export declare class Handle_TopOpeBRepDS_Check_3 extends Handle_TopOpeBRepDS_Check {
    constructor(theHandle: Handle_TopOpeBRepDS_Check);
  }

  export declare class Handle_TopOpeBRepDS_Check_4 extends Handle_TopOpeBRepDS_Check {
    constructor(theHandle: Handle_TopOpeBRepDS_Check);
  }

export declare class TopOpeBRepDS_MapOfIntegerShapeData extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_MapOfIntegerShapeData): void;
  Assign(theOther: TopOpeBRepDS_MapOfIntegerShapeData): TopOpeBRepDS_MapOfIntegerShapeData;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopOpeBRepDS_ShapeData): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopOpeBRepDS_ShapeData): TopOpeBRepDS_ShapeData;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopOpeBRepDS_ShapeData;
  Find_1(theKey: Standard_Integer): TopOpeBRepDS_ShapeData;
  Find_2(theKey: Standard_Integer, theValue: TopOpeBRepDS_ShapeData): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopOpeBRepDS_ShapeData;
  ChangeFind(theKey: Standard_Integer): TopOpeBRepDS_ShapeData;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_MapOfIntegerShapeData_1 extends TopOpeBRepDS_MapOfIntegerShapeData {
    constructor();
  }

  export declare class TopOpeBRepDS_MapOfIntegerShapeData_2 extends TopOpeBRepDS_MapOfIntegerShapeData {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_MapOfIntegerShapeData_3 extends TopOpeBRepDS_MapOfIntegerShapeData {
    constructor(theOther: TopOpeBRepDS_MapOfIntegerShapeData);
  }

export declare class TopOpeBRepDS_DoubleMapOfIntegerShape extends NCollection_BaseMap {
  Exchange(theOther: TopOpeBRepDS_DoubleMapOfIntegerShape): void;
  Assign(theOther: TopOpeBRepDS_DoubleMapOfIntegerShape): TopOpeBRepDS_DoubleMapOfIntegerShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey1: Standard_Integer, theKey2: TopoDS_Shape): void;
  AreBound(theKey1: Standard_Integer, theKey2: TopoDS_Shape): Standard_Boolean;
  IsBound1(theKey1: Standard_Integer): Standard_Boolean;
  IsBound2(theKey2: TopoDS_Shape): Standard_Boolean;
  UnBind1(theKey1: Standard_Integer): Standard_Boolean;
  UnBind2(theKey2: TopoDS_Shape): Standard_Boolean;
  Find1_1(theKey1: Standard_Integer): TopoDS_Shape;
  Find1_2(theKey1: Standard_Integer, theKey2: TopoDS_Shape): Standard_Boolean;
  Seek1(theKey1: Standard_Integer): TopoDS_Shape;
  Find2_1(theKey2: TopoDS_Shape): Standard_Integer;
  Find2_2(theKey2: TopoDS_Shape, theKey1: Standard_Integer): Standard_Boolean;
  Seek2(theKey2: TopoDS_Shape): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_DoubleMapOfIntegerShape_1 extends TopOpeBRepDS_DoubleMapOfIntegerShape {
    constructor();
  }

  export declare class TopOpeBRepDS_DoubleMapOfIntegerShape_2 extends TopOpeBRepDS_DoubleMapOfIntegerShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_DoubleMapOfIntegerShape_3 extends TopOpeBRepDS_DoubleMapOfIntegerShape {
    constructor(theOther: TopOpeBRepDS_DoubleMapOfIntegerShape);
  }

export declare class Handle_TopOpeBRepDS_GapTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_GapTool): void;
  get(): TopOpeBRepDS_GapTool;
}

  export declare class Handle_TopOpeBRepDS_GapTool_1 extends Handle_TopOpeBRepDS_GapTool {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_GapTool_2 extends Handle_TopOpeBRepDS_GapTool {
    constructor(thePtr: TopOpeBRepDS_GapTool);
  }

  export declare class Handle_TopOpeBRepDS_GapTool_3 extends Handle_TopOpeBRepDS_GapTool {
    constructor(theHandle: Handle_TopOpeBRepDS_GapTool);
  }

  export declare class Handle_TopOpeBRepDS_GapTool_4 extends Handle_TopOpeBRepDS_GapTool {
    constructor(theHandle: Handle_TopOpeBRepDS_GapTool);
  }

export declare class Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference): void;
  get(): TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference;
}

  export declare class Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_1 extends Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_2 extends Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference {
    constructor(thePtr: TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference);
  }

  export declare class Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_3 extends Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference);
  }

  export declare class Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_4 extends Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference);
  }

export declare class TopOpeBRepDS_IndexedDataMapOfVertexPoint extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepDS_IndexedDataMapOfVertexPoint): void;
  Assign(theOther: TopOpeBRepDS_IndexedDataMapOfVertexPoint): TopOpeBRepDS_IndexedDataMapOfVertexPoint;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopOpeBRepDS_Point): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopOpeBRepDS_Point): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopOpeBRepDS_Point;
  ChangeFromIndex(theIndex: Standard_Integer): TopOpeBRepDS_Point;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): TopOpeBRepDS_Point;
  ChangeFromKey(theKey1: TopoDS_Shape): TopOpeBRepDS_Point;
  Seek(theKey1: TopoDS_Shape): TopOpeBRepDS_Point;
  ChangeSeek(theKey1: TopoDS_Shape): TopOpeBRepDS_Point;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: TopOpeBRepDS_Point): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepDS_IndexedDataMapOfVertexPoint_1 extends TopOpeBRepDS_IndexedDataMapOfVertexPoint {
    constructor();
  }

  export declare class TopOpeBRepDS_IndexedDataMapOfVertexPoint_2 extends TopOpeBRepDS_IndexedDataMapOfVertexPoint {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepDS_IndexedDataMapOfVertexPoint_3 extends TopOpeBRepDS_IndexedDataMapOfVertexPoint {
    constructor(theOther: TopOpeBRepDS_IndexedDataMapOfVertexPoint);
  }

export declare class Handle_TopOpeBRepDS_Marker {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_Marker): void;
  get(): TopOpeBRepDS_Marker;
}

  export declare class Handle_TopOpeBRepDS_Marker_1 extends Handle_TopOpeBRepDS_Marker {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_Marker_2 extends Handle_TopOpeBRepDS_Marker {
    constructor(thePtr: TopOpeBRepDS_Marker);
  }

  export declare class Handle_TopOpeBRepDS_Marker_3 extends Handle_TopOpeBRepDS_Marker {
    constructor(theHandle: Handle_TopOpeBRepDS_Marker);
  }

  export declare class Handle_TopOpeBRepDS_Marker_4 extends Handle_TopOpeBRepDS_Marker {
    constructor(theHandle: Handle_TopOpeBRepDS_Marker);
  }

export declare class Handle_TopOpeBRepDS_SolidSurfaceInterference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepDS_SolidSurfaceInterference): void;
  get(): TopOpeBRepDS_SolidSurfaceInterference;
}

  export declare class Handle_TopOpeBRepDS_SolidSurfaceInterference_1 extends Handle_TopOpeBRepDS_SolidSurfaceInterference {
    constructor();
  }

  export declare class Handle_TopOpeBRepDS_SolidSurfaceInterference_2 extends Handle_TopOpeBRepDS_SolidSurfaceInterference {
    constructor(thePtr: TopOpeBRepDS_SolidSurfaceInterference);
  }

  export declare class Handle_TopOpeBRepDS_SolidSurfaceInterference_3 extends Handle_TopOpeBRepDS_SolidSurfaceInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_SolidSurfaceInterference);
  }

  export declare class Handle_TopOpeBRepDS_SolidSurfaceInterference_4 extends Handle_TopOpeBRepDS_SolidSurfaceInterference {
    constructor(theHandle: Handle_TopOpeBRepDS_SolidSurfaceInterference);
  }

export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox2d extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepTool_IndexedDataMapOfShapeBox2d): void;
  Assign(theOther: TopOpeBRepTool_IndexedDataMapOfShapeBox2d): TopOpeBRepTool_IndexedDataMapOfShapeBox2d;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: Bnd_Box2d): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: Bnd_Box2d): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): Bnd_Box2d;
  ChangeFromIndex(theIndex: Standard_Integer): Bnd_Box2d;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): Bnd_Box2d;
  ChangeFromKey(theKey1: TopoDS_Shape): Bnd_Box2d;
  Seek(theKey1: TopoDS_Shape): Bnd_Box2d;
  ChangeSeek(theKey1: TopoDS_Shape): Bnd_Box2d;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: Bnd_Box2d): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox2d_1 extends TopOpeBRepTool_IndexedDataMapOfShapeBox2d {
    constructor();
  }

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox2d_2 extends TopOpeBRepTool_IndexedDataMapOfShapeBox2d {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox2d_3 extends TopOpeBRepTool_IndexedDataMapOfShapeBox2d {
    constructor(theOther: TopOpeBRepTool_IndexedDataMapOfShapeBox2d);
  }

export declare class TopOpeBRepTool_DataMapOfShapeface extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepTool_DataMapOfShapeface): void;
  Assign(theOther: TopOpeBRepTool_DataMapOfShapeface): TopOpeBRepTool_DataMapOfShapeface;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopOpeBRepTool_face): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopOpeBRepTool_face): TopOpeBRepTool_face;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopOpeBRepTool_face;
  Find_1(theKey: TopoDS_Shape): TopOpeBRepTool_face;
  Find_2(theKey: TopoDS_Shape, theValue: TopOpeBRepTool_face): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopOpeBRepTool_face;
  ChangeFind(theKey: TopoDS_Shape): TopOpeBRepTool_face;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepTool_DataMapOfShapeface_1 extends TopOpeBRepTool_DataMapOfShapeface {
    constructor();
  }

  export declare class TopOpeBRepTool_DataMapOfShapeface_2 extends TopOpeBRepTool_DataMapOfShapeface {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepTool_DataMapOfShapeface_3 extends TopOpeBRepTool_DataMapOfShapeface {
    constructor(theOther: TopOpeBRepTool_DataMapOfShapeface);
  }

export declare class TopOpeBRepTool_DataMapOfOrientedShapeC2DF extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepTool_DataMapOfOrientedShapeC2DF): void;
  Assign(theOther: TopOpeBRepTool_DataMapOfOrientedShapeC2DF): TopOpeBRepTool_DataMapOfOrientedShapeC2DF;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopOpeBRepTool_C2DF): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopOpeBRepTool_C2DF): TopOpeBRepTool_C2DF;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopOpeBRepTool_C2DF;
  Find_1(theKey: TopoDS_Shape): TopOpeBRepTool_C2DF;
  Find_2(theKey: TopoDS_Shape, theValue: TopOpeBRepTool_C2DF): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopOpeBRepTool_C2DF;
  ChangeFind(theKey: TopoDS_Shape): TopOpeBRepTool_C2DF;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepTool_DataMapOfOrientedShapeC2DF_1 extends TopOpeBRepTool_DataMapOfOrientedShapeC2DF {
    constructor();
  }

  export declare class TopOpeBRepTool_DataMapOfOrientedShapeC2DF_2 extends TopOpeBRepTool_DataMapOfOrientedShapeC2DF {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepTool_DataMapOfOrientedShapeC2DF_3 extends TopOpeBRepTool_DataMapOfOrientedShapeC2DF {
    constructor(theOther: TopOpeBRepTool_DataMapOfOrientedShapeC2DF);
  }

export declare class TopOpeBRepTool_ListOfC2DF extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TopOpeBRepTool_ListOfC2DF): TopOpeBRepTool_ListOfC2DF;
  Clear(theAllocator: any): void;
  First_1(): TopOpeBRepTool_C2DF;
  First_2(): TopOpeBRepTool_C2DF;
  Last_1(): TopOpeBRepTool_C2DF;
  Last_2(): TopOpeBRepTool_C2DF;
  Append_1(theItem: TopOpeBRepTool_C2DF): TopOpeBRepTool_C2DF;
  Append_3(theOther: TopOpeBRepTool_ListOfC2DF): void;
  Prepend_1(theItem: TopOpeBRepTool_C2DF): TopOpeBRepTool_C2DF;
  Prepend_2(theOther: TopOpeBRepTool_ListOfC2DF): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TopOpeBRepTool_ListOfC2DF_1 extends TopOpeBRepTool_ListOfC2DF {
    constructor();
  }

  export declare class TopOpeBRepTool_ListOfC2DF_2 extends TopOpeBRepTool_ListOfC2DF {
    constructor(theAllocator: any);
  }

  export declare class TopOpeBRepTool_ListOfC2DF_3 extends TopOpeBRepTool_ListOfC2DF {
    constructor(theOther: TopOpeBRepTool_ListOfC2DF);
  }

export declare class TopOpeBRepTool_DataMapOfShapeListOfC2DF extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepTool_DataMapOfShapeListOfC2DF): void;
  Assign(theOther: TopOpeBRepTool_DataMapOfShapeListOfC2DF): TopOpeBRepTool_DataMapOfShapeListOfC2DF;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopOpeBRepTool_ListOfC2DF): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopOpeBRepTool_ListOfC2DF): TopOpeBRepTool_ListOfC2DF;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopOpeBRepTool_ListOfC2DF;
  Find_1(theKey: TopoDS_Shape): TopOpeBRepTool_ListOfC2DF;
  Find_2(theKey: TopoDS_Shape, theValue: TopOpeBRepTool_ListOfC2DF): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopOpeBRepTool_ListOfC2DF;
  ChangeFind(theKey: TopoDS_Shape): TopOpeBRepTool_ListOfC2DF;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepTool_DataMapOfShapeListOfC2DF_1 extends TopOpeBRepTool_DataMapOfShapeListOfC2DF {
    constructor();
  }

  export declare class TopOpeBRepTool_DataMapOfShapeListOfC2DF_2 extends TopOpeBRepTool_DataMapOfShapeListOfC2DF {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepTool_DataMapOfShapeListOfC2DF_3 extends TopOpeBRepTool_DataMapOfShapeListOfC2DF {
    constructor(theOther: TopOpeBRepTool_DataMapOfShapeListOfC2DF);
  }

export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepTool_IndexedDataMapOfShapeBox): void;
  Assign(theOther: TopOpeBRepTool_IndexedDataMapOfShapeBox): TopOpeBRepTool_IndexedDataMapOfShapeBox;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: Bnd_Box): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: Bnd_Box): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): Bnd_Box;
  ChangeFromIndex(theIndex: Standard_Integer): Bnd_Box;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): Bnd_Box;
  ChangeFromKey(theKey1: TopoDS_Shape): Bnd_Box;
  Seek(theKey1: TopoDS_Shape): Bnd_Box;
  ChangeSeek(theKey1: TopoDS_Shape): Bnd_Box;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: Bnd_Box): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox_1 extends TopOpeBRepTool_IndexedDataMapOfShapeBox {
    constructor();
  }

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox_2 extends TopOpeBRepTool_IndexedDataMapOfShapeBox {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeBox_3 extends TopOpeBRepTool_IndexedDataMapOfShapeBox {
    constructor(theOther: TopOpeBRepTool_IndexedDataMapOfShapeBox);
  }

export declare class Handle_TopOpeBRepTool_HBoxTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopOpeBRepTool_HBoxTool): void;
  get(): TopOpeBRepTool_HBoxTool;
}

  export declare class Handle_TopOpeBRepTool_HBoxTool_1 extends Handle_TopOpeBRepTool_HBoxTool {
    constructor();
  }

  export declare class Handle_TopOpeBRepTool_HBoxTool_2 extends Handle_TopOpeBRepTool_HBoxTool {
    constructor(thePtr: TopOpeBRepTool_HBoxTool);
  }

  export declare class Handle_TopOpeBRepTool_HBoxTool_3 extends Handle_TopOpeBRepTool_HBoxTool {
    constructor(theHandle: Handle_TopOpeBRepTool_HBoxTool);
  }

  export declare class Handle_TopOpeBRepTool_HBoxTool_4 extends Handle_TopOpeBRepTool_HBoxTool {
    constructor(theHandle: Handle_TopOpeBRepTool_HBoxTool);
  }

export declare class TopOpeBRepTool_IndexedDataMapOfShapeconnexity extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopOpeBRepTool_IndexedDataMapOfShapeconnexity): void;
  Assign(theOther: TopOpeBRepTool_IndexedDataMapOfShapeconnexity): TopOpeBRepTool_IndexedDataMapOfShapeconnexity;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopOpeBRepTool_connexity): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopOpeBRepTool_connexity): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopOpeBRepTool_connexity;
  ChangeFromIndex(theIndex: Standard_Integer): TopOpeBRepTool_connexity;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): TopOpeBRepTool_connexity;
  ChangeFromKey(theKey1: TopoDS_Shape): TopOpeBRepTool_connexity;
  Seek(theKey1: TopoDS_Shape): TopOpeBRepTool_connexity;
  ChangeSeek(theKey1: TopoDS_Shape): TopOpeBRepTool_connexity;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: TopOpeBRepTool_connexity): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeconnexity_1 extends TopOpeBRepTool_IndexedDataMapOfShapeconnexity {
    constructor();
  }

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeconnexity_2 extends TopOpeBRepTool_IndexedDataMapOfShapeconnexity {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopOpeBRepTool_IndexedDataMapOfShapeconnexity_3 extends TopOpeBRepTool_IndexedDataMapOfShapeconnexity {
    constructor(theOther: TopOpeBRepTool_IndexedDataMapOfShapeconnexity);
  }

export declare type BRepAlgo_CheckStatus = {
  BRepAlgo_OK: {};
  BRepAlgo_NOK: {};
}

export declare type BRepFill_TransitionStyle = {
  BRepFill_Modified: {};
  BRepFill_Right: {};
  BRepFill_Round: {};
}

export declare type BRepFill_TypeOfContact = {
  BRepFill_NoContact: {};
  BRepFill_Contact: {};
  BRepFill_ContactOnBorder: {};
}

export declare type TopOpeBRepDS_Kind = {
  TopOpeBRepDS_POINT: {};
  TopOpeBRepDS_CURVE: {};
  TopOpeBRepDS_SURFACE: {};
  TopOpeBRepDS_VERTEX: {};
  TopOpeBRepDS_EDGE: {};
  TopOpeBRepDS_WIRE: {};
  TopOpeBRepDS_FACE: {};
  TopOpeBRepDS_SHELL: {};
  TopOpeBRepDS_SOLID: {};
  TopOpeBRepDS_COMPSOLID: {};
  TopOpeBRepDS_COMPOUND: {};
  TopOpeBRepDS_UNKNOWN: {};
}

export declare type TopOpeBRepDS_Config = {
  TopOpeBRepDS_UNSHGEOMETRY: {};
  TopOpeBRepDS_SAMEORIENTED: {};
  TopOpeBRepDS_DIFFORIENTED: {};
}

export declare type TopOpeBRep_TypeLineCurve = {
  TopOpeBRep_ANALYTIC: {};
  TopOpeBRep_RESTRICTION: {};
  TopOpeBRep_WALKING: {};
  TopOpeBRep_LINE: {};
  TopOpeBRep_CIRCLE: {};
  TopOpeBRep_ELLIPSE: {};
  TopOpeBRep_PARABOLA: {};
  TopOpeBRep_HYPERBOLA: {};
  TopOpeBRep_OTHERTYPE: {};
}

export declare type TopOpeBRep_P2Dstatus = {
  TopOpeBRep_P2DUNK: {};
  TopOpeBRep_P2DINT: {};
  TopOpeBRep_P2DSGF: {};
  TopOpeBRep_P2DSGL: {};
  TopOpeBRep_P2DNEW: {};
}

export declare type TopOpeBRepBuild_LoopEnum = {
  TopOpeBRepBuild_ANYLOOP: {};
  TopOpeBRepBuild_BOUNDARY: {};
  TopOpeBRepBuild_BLOCK: {};
}

export declare type TopOpeBRepTool_OutCurveType = {
  TopOpeBRepTool_BSPLINE1: {};
  TopOpeBRepTool_APPROX: {};
  TopOpeBRepTool_INTERPOL: {};
}

export declare type TopOpeBRepDS_CheckStatus = {
  TopOpeBRepDS_OK: {};
  TopOpeBRepDS_NOK: {};
}

export declare type TKBoolLib = {
  BRepAlgo_AsDes: typeof BRepAlgo_AsDes;
  BRepAlgo_Common: typeof BRepAlgo_Common;
  BRepAlgo_Cut: typeof BRepAlgo_Cut;
  BRepAlgo_FaceRestrictor: typeof BRepAlgo_FaceRestrictor;
  BRepAlgo_Fuse: typeof BRepAlgo_Fuse;
  BRepAlgo_Image: typeof BRepAlgo_Image;
  BRepAlgo_Loop: typeof BRepAlgo_Loop;
  BRepAlgo_NormalProjection_1: typeof BRepAlgo_NormalProjection_1;
  BRepAlgo_NormalProjection_2: typeof BRepAlgo_NormalProjection_2;
  BRepAlgo_Section_1: typeof BRepAlgo_Section_1;
  BRepAlgo_Section_2: typeof BRepAlgo_Section_2;
  BRepAlgo_Section_3: typeof BRepAlgo_Section_3;
  BRepAlgo_Section_4: typeof BRepAlgo_Section_4;
  BRepAlgo_Section_5: typeof BRepAlgo_Section_5;
  BRepFill_ACRLaw: typeof BRepFill_ACRLaw;
  BRepFill_AdvancedEvolved: typeof BRepFill_AdvancedEvolved;
  BRepFill_MultiLine_1: typeof BRepFill_MultiLine_1;
  BRepFill_MultiLine_2: typeof BRepFill_MultiLine_2;
  BRepFill_ApproxSeewing_1: typeof BRepFill_ApproxSeewing_1;
  BRepFill_ApproxSeewing_2: typeof BRepFill_ApproxSeewing_2;
  BRepFill_CompatibleWires_1: typeof BRepFill_CompatibleWires_1;
  BRepFill_CompatibleWires_2: typeof BRepFill_CompatibleWires_2;
  BRepFill_ComputeCLine_1: typeof BRepFill_ComputeCLine_1;
  BRepFill_ComputeCLine_2: typeof BRepFill_ComputeCLine_2;
  BRepFill_CurveConstraint_1: typeof BRepFill_CurveConstraint_1;
  BRepFill_CurveConstraint_2: typeof BRepFill_CurveConstraint_2;
  BRepFill_Draft: typeof BRepFill_Draft;
  BRepFill_Edge3DLaw: typeof BRepFill_Edge3DLaw;
  BRepFill_DraftLaw: typeof BRepFill_DraftLaw;
  BRepFill_EdgeFaceAndOrder_1: typeof BRepFill_EdgeFaceAndOrder_1;
  BRepFill_EdgeFaceAndOrder_2: typeof BRepFill_EdgeFaceAndOrder_2;
  BRepFill_EdgeOnSurfLaw: typeof BRepFill_EdgeOnSurfLaw;
  BRepFill_Evolved_1: typeof BRepFill_Evolved_1;
  BRepFill_Evolved_2: typeof BRepFill_Evolved_2;
  BRepFill_Evolved_3: typeof BRepFill_Evolved_3;
  BRepFill_FaceAndOrder_1: typeof BRepFill_FaceAndOrder_1;
  BRepFill_FaceAndOrder_2: typeof BRepFill_FaceAndOrder_2;
  BRepFill_Filling: typeof BRepFill_Filling;
  BRepFill_Generator: typeof BRepFill_Generator;
  BRepFill_OffsetWire_1: typeof BRepFill_OffsetWire_1;
  BRepFill_OffsetWire_2: typeof BRepFill_OffsetWire_2;
  BRepFill_NSections_1: typeof BRepFill_NSections_1;
  BRepFill_NSections_2: typeof BRepFill_NSections_2;
  BRepFill_OffsetAncestors_1: typeof BRepFill_OffsetAncestors_1;
  BRepFill_OffsetAncestors_2: typeof BRepFill_OffsetAncestors_2;
  BRepFill_Pipe_1: typeof BRepFill_Pipe_1;
  BRepFill_Pipe_2: typeof BRepFill_Pipe_2;
  BRepFill_Section_1: typeof BRepFill_Section_1;
  BRepFill_Section_2: typeof BRepFill_Section_2;
  BRepFill_PipeShell: typeof BRepFill_PipeShell;
  BRepFill_SectionPlacement_1: typeof BRepFill_SectionPlacement_1;
  BRepFill_SectionPlacement_2: typeof BRepFill_SectionPlacement_2;
  BRepFill_ShapeLaw_1: typeof BRepFill_ShapeLaw_1;
  BRepFill_ShapeLaw_2: typeof BRepFill_ShapeLaw_2;
  BRepFill_ShapeLaw_3: typeof BRepFill_ShapeLaw_3;
  BRepFill_Sweep: typeof BRepFill_Sweep;
  BRepFill_TrimEdgeTool_1: typeof BRepFill_TrimEdgeTool_1;
  BRepFill_TrimEdgeTool_2: typeof BRepFill_TrimEdgeTool_2;
  BRepFill_TrimShellCorner: typeof BRepFill_TrimShellCorner;
  BRepFill_TrimSurfaceTool: typeof BRepFill_TrimSurfaceTool;
  BRepProj_Projection_1: typeof BRepProj_Projection_1;
  BRepProj_Projection_2: typeof BRepProj_Projection_2;
  TopOpeBRepDS_Transition_1: typeof TopOpeBRepDS_Transition_1;
  TopOpeBRepDS_Transition_2: typeof TopOpeBRepDS_Transition_2;
  TopOpeBRepDS_Transition_3: typeof TopOpeBRepDS_Transition_3;
  TopOpeBRepDS_Interference_1: typeof TopOpeBRepDS_Interference_1;
  TopOpeBRepDS_Interference_2: typeof TopOpeBRepDS_Interference_2;
  TopOpeBRepDS_Interference_3: typeof TopOpeBRepDS_Interference_3;
  TopOpeBRepDS_SurfaceCurveInterference_1: typeof TopOpeBRepDS_SurfaceCurveInterference_1;
  TopOpeBRepDS_SurfaceCurveInterference_2: typeof TopOpeBRepDS_SurfaceCurveInterference_2;
  TopOpeBRepDS_SurfaceCurveInterference_3: typeof TopOpeBRepDS_SurfaceCurveInterference_3;
  TopOpeBRepDS_CurvePointInterference: typeof TopOpeBRepDS_CurvePointInterference;
  TopOpeBRepDS_Surface_1: typeof TopOpeBRepDS_Surface_1;
  TopOpeBRepDS_Surface_2: typeof TopOpeBRepDS_Surface_2;
  TopOpeBRepDS_Surface_3: typeof TopOpeBRepDS_Surface_3;
  TopOpeBRepDS_GeometryData_1: typeof TopOpeBRepDS_GeometryData_1;
  TopOpeBRepDS_GeometryData_2: typeof TopOpeBRepDS_GeometryData_2;
  TopOpeBRepDS_SurfaceData_1: typeof TopOpeBRepDS_SurfaceData_1;
  TopOpeBRepDS_SurfaceData_2: typeof TopOpeBRepDS_SurfaceData_2;
  TopOpeBRepDS_Curve_1: typeof TopOpeBRepDS_Curve_1;
  TopOpeBRepDS_Curve_2: typeof TopOpeBRepDS_Curve_2;
  TopOpeBRepDS_CurveData_1: typeof TopOpeBRepDS_CurveData_1;
  TopOpeBRepDS_CurveData_2: typeof TopOpeBRepDS_CurveData_2;
  TopOpeBRepDS_Point_1: typeof TopOpeBRepDS_Point_1;
  TopOpeBRepDS_Point_2: typeof TopOpeBRepDS_Point_2;
  TopOpeBRepDS_Point_3: typeof TopOpeBRepDS_Point_3;
  TopOpeBRepDS_PointData_1: typeof TopOpeBRepDS_PointData_1;
  TopOpeBRepDS_PointData_2: typeof TopOpeBRepDS_PointData_2;
  TopOpeBRepDS_PointData_3: typeof TopOpeBRepDS_PointData_3;
  TopOpeBRepDS_ShapeData: typeof TopOpeBRepDS_ShapeData;
  TopOpeBRepDS_ShapeWithState: typeof TopOpeBRepDS_ShapeWithState;
  TopOpeBRepDS_DataStructure: typeof TopOpeBRepDS_DataStructure;
  TopOpeBRep_WPointInter: typeof TopOpeBRep_WPointInter;
  TopOpeBRep_VPointInter: typeof TopOpeBRep_VPointInter;
  TopOpeBRep_LineInter: typeof TopOpeBRep_LineInter;
  TopOpeBRep_Bipoint_1: typeof TopOpeBRep_Bipoint_1;
  TopOpeBRep_Bipoint_2: typeof TopOpeBRep_Bipoint_2;
  TopOpeBRepTool_ShapeExplorer_1: typeof TopOpeBRepTool_ShapeExplorer_1;
  TopOpeBRepTool_ShapeExplorer_2: typeof TopOpeBRepTool_ShapeExplorer_2;
  TopOpeBRepTool_BoxSort_1: typeof TopOpeBRepTool_BoxSort_1;
  TopOpeBRepTool_BoxSort_2: typeof TopOpeBRepTool_BoxSort_2;
  TopOpeBRep_ShapeScanner: typeof TopOpeBRep_ShapeScanner;
  TopOpeBRep_FacesIntersector: typeof TopOpeBRep_FacesIntersector;
  TopOpeBRep_Point2d: typeof TopOpeBRep_Point2d;
  TopOpeBRepDS_ShapeShapeInterference: typeof TopOpeBRepDS_ShapeShapeInterference;
  TopOpeBRepDS_EdgeVertexInterference_1: typeof TopOpeBRepDS_EdgeVertexInterference_1;
  TopOpeBRepDS_EdgeVertexInterference_2: typeof TopOpeBRepDS_EdgeVertexInterference_2;
  TopOpeBRepDS_FaceEdgeInterference: typeof TopOpeBRepDS_FaceEdgeInterference;
  TopOpeBRepDS_InterferenceIterator_1: typeof TopOpeBRepDS_InterferenceIterator_1;
  TopOpeBRepDS_InterferenceIterator_2: typeof TopOpeBRepDS_InterferenceIterator_2;
  TopOpeBRepDS_HDataStructure: typeof TopOpeBRepDS_HDataStructure;
  TopOpeBRep_EdgesIntersector: typeof TopOpeBRep_EdgesIntersector;
  TopOpeBRep_FaceEdgeIntersector: typeof TopOpeBRep_FaceEdgeIntersector;
  TopOpeBRep_ShapeIntersector: typeof TopOpeBRep_ShapeIntersector;
  TopOpeBRep_ShapeIntersector2d: typeof TopOpeBRep_ShapeIntersector2d;
  TopOpeBRep_PointClassifier: typeof TopOpeBRep_PointClassifier;
  TopOpeBRep_FacesFiller: typeof TopOpeBRep_FacesFiller;
  TopOpeBRep_EdgesFiller: typeof TopOpeBRep_EdgesFiller;
  TopOpeBRep_FaceEdgeFiller: typeof TopOpeBRep_FaceEdgeFiller;
  TopOpeBRep_DSFiller: typeof TopOpeBRep_DSFiller;
  TopOpeBRep_FFDumper: typeof TopOpeBRep_FFDumper;
  TopOpeBRep_Hctxee2d: typeof TopOpeBRep_Hctxee2d;
  TopOpeBRep_Hctxff2d: typeof TopOpeBRep_Hctxff2d;
  TopOpeBRep_VPointInterClassifier: typeof TopOpeBRep_VPointInterClassifier;
  TopOpeBRep_VPointInterIterator_1: typeof TopOpeBRep_VPointInterIterator_1;
  TopOpeBRep_VPointInterIterator_2: typeof TopOpeBRep_VPointInterIterator_2;
  TopOpeBRep_WPointInterIterator_1: typeof TopOpeBRep_WPointInterIterator_1;
  TopOpeBRep_WPointInterIterator_2: typeof TopOpeBRep_WPointInterIterator_2;
  TopOpeBRepBuild_BlockIterator_1: typeof TopOpeBRepBuild_BlockIterator_1;
  TopOpeBRepBuild_BlockIterator_2: typeof TopOpeBRepBuild_BlockIterator_2;
  TopOpeBRepBuild_Loop_1: typeof TopOpeBRepBuild_Loop_1;
  TopOpeBRepBuild_Loop_2: typeof TopOpeBRepBuild_Loop_2;
  TopOpeBRepBuild_AreaBuilder_1: typeof TopOpeBRepBuild_AreaBuilder_1;
  TopOpeBRepBuild_AreaBuilder_2: typeof TopOpeBRepBuild_AreaBuilder_2;
  TopOpeBRepBuild_Area1dBuilder_1: typeof TopOpeBRepBuild_Area1dBuilder_1;
  TopOpeBRepBuild_Area1dBuilder_2: typeof TopOpeBRepBuild_Area1dBuilder_2;
  TopOpeBRepBuild_Area2dBuilder_1: typeof TopOpeBRepBuild_Area2dBuilder_1;
  TopOpeBRepBuild_Area2dBuilder_2: typeof TopOpeBRepBuild_Area2dBuilder_2;
  TopOpeBRepBuild_Area3dBuilder_1: typeof TopOpeBRepBuild_Area3dBuilder_1;
  TopOpeBRepBuild_Area3dBuilder_2: typeof TopOpeBRepBuild_Area3dBuilder_2;
  TopOpeBRepBuild_BlockBuilder_1: typeof TopOpeBRepBuild_BlockBuilder_1;
  TopOpeBRepBuild_BlockBuilder_2: typeof TopOpeBRepBuild_BlockBuilder_2;
  TopOpeBRepTool_GeomTool: typeof TopOpeBRepTool_GeomTool;
  TopOpeBRepTool_CurveTool_1: typeof TopOpeBRepTool_CurveTool_1;
  TopOpeBRepTool_CurveTool_2: typeof TopOpeBRepTool_CurveTool_2;
  TopOpeBRepTool_CurveTool_3: typeof TopOpeBRepTool_CurveTool_3;
  TopOpeBRepDS_BuildTool_1: typeof TopOpeBRepDS_BuildTool_1;
  TopOpeBRepDS_BuildTool_2: typeof TopOpeBRepDS_BuildTool_2;
  TopOpeBRepDS_BuildTool_3: typeof TopOpeBRepDS_BuildTool_3;
  TopOpeBRepDS_ListOfShapeOn1State: typeof TopOpeBRepDS_ListOfShapeOn1State;
  TopOpeBRepTool_SolidClassifier: typeof TopOpeBRepTool_SolidClassifier;
  TopOpeBRepTool_ShapeClassifier_1: typeof TopOpeBRepTool_ShapeClassifier_1;
  TopOpeBRepTool_ShapeClassifier_2: typeof TopOpeBRepTool_ShapeClassifier_2;
  TopOpeBRepBuild_BuilderON_1: typeof TopOpeBRepBuild_BuilderON_1;
  TopOpeBRepBuild_BuilderON_2: typeof TopOpeBRepBuild_BuilderON_2;
  TopOpeBRepBuild_CorrectFace2d_1: typeof TopOpeBRepBuild_CorrectFace2d_1;
  TopOpeBRepBuild_CorrectFace2d_2: typeof TopOpeBRepBuild_CorrectFace2d_2;
  TopOpeBRepBuild_ShapeListOfShape_1: typeof TopOpeBRepBuild_ShapeListOfShape_1;
  TopOpeBRepBuild_ShapeListOfShape_2: typeof TopOpeBRepBuild_ShapeListOfShape_2;
  TopOpeBRepBuild_ShapeListOfShape_3: typeof TopOpeBRepBuild_ShapeListOfShape_3;
  TopOpeBRepBuild_EdgeBuilder_1: typeof TopOpeBRepBuild_EdgeBuilder_1;
  TopOpeBRepBuild_EdgeBuilder_2: typeof TopOpeBRepBuild_EdgeBuilder_2;
  TopOpeBRepBuild_FaceAreaBuilder_1: typeof TopOpeBRepBuild_FaceAreaBuilder_1;
  TopOpeBRepBuild_FaceAreaBuilder_2: typeof TopOpeBRepBuild_FaceAreaBuilder_2;
  TopOpeBRepBuild_LoopSet: typeof TopOpeBRepBuild_LoopSet;
  TopOpeBRepBuild_FaceBuilder_1: typeof TopOpeBRepBuild_FaceBuilder_1;
  TopOpeBRepBuild_FaceBuilder_2: typeof TopOpeBRepBuild_FaceBuilder_2;
  TopOpeBRepBuild_FuseFace_1: typeof TopOpeBRepBuild_FuseFace_1;
  TopOpeBRepBuild_FuseFace_2: typeof TopOpeBRepBuild_FuseFace_2;
  TopOpeBRepBuild_GIter_1: typeof TopOpeBRepBuild_GIter_1;
  TopOpeBRepBuild_GIter_2: typeof TopOpeBRepBuild_GIter_2;
  TopOpeBRepBuild_GTopo_1: typeof TopOpeBRepBuild_GTopo_1;
  TopOpeBRepBuild_GTopo_2: typeof TopOpeBRepBuild_GTopo_2;
  TopOpeBRepBuild_HBuilder: typeof TopOpeBRepBuild_HBuilder;
  TopOpeBRepBuild_VertexInfo: typeof TopOpeBRepBuild_VertexInfo;
  TopOpeBRepBuild_Pave: typeof TopOpeBRepBuild_Pave;
  TopOpeBRepBuild_PaveClassifier: typeof TopOpeBRepBuild_PaveClassifier;
  TopOpeBRepBuild_PaveSet: typeof TopOpeBRepBuild_PaveSet;
  TopOpeBRepBuild_ShapeSet: typeof TopOpeBRepBuild_ShapeSet;
  TopOpeBRepBuild_ShellFaceClassifier: typeof TopOpeBRepBuild_ShellFaceClassifier;
  TopOpeBRepBuild_ShellFaceSet_1: typeof TopOpeBRepBuild_ShellFaceSet_1;
  TopOpeBRepBuild_ShellFaceSet_2: typeof TopOpeBRepBuild_ShellFaceSet_2;
  TopOpeBRepBuild_ShellToSolid: typeof TopOpeBRepBuild_ShellToSolid;
  TopOpeBRepBuild_SolidAreaBuilder_1: typeof TopOpeBRepBuild_SolidAreaBuilder_1;
  TopOpeBRepBuild_SolidAreaBuilder_2: typeof TopOpeBRepBuild_SolidAreaBuilder_2;
  TopOpeBRepBuild_SolidBuilder_1: typeof TopOpeBRepBuild_SolidBuilder_1;
  TopOpeBRepBuild_SolidBuilder_2: typeof TopOpeBRepBuild_SolidBuilder_2;
  TopOpeBRepBuild_WireEdgeClassifier: typeof TopOpeBRepBuild_WireEdgeClassifier;
  TopOpeBRepBuild_WireEdgeSet: typeof TopOpeBRepBuild_WireEdgeSet;
  TopOpeBRepBuild_WireToFace: typeof TopOpeBRepBuild_WireToFace;
  TopOpeBRepDS_Association: typeof TopOpeBRepDS_Association;
  TopOpeBRepDS_Check_1: typeof TopOpeBRepDS_Check_1;
  TopOpeBRepDS_Check_2: typeof TopOpeBRepDS_Check_2;
  TopOpeBRepDS_CurveExplorer_1: typeof TopOpeBRepDS_CurveExplorer_1;
  TopOpeBRepDS_CurveExplorer_2: typeof TopOpeBRepDS_CurveExplorer_2;
  TopOpeBRepDS_CurveIterator: typeof TopOpeBRepDS_CurveIterator;
  TopOpeBRepDS_Dumper: typeof TopOpeBRepDS_Dumper;
  TopOpeBRepDS_EIR: typeof TopOpeBRepDS_EIR;
  TopOpeBRepDS_Edge3dInterferenceTool: typeof TopOpeBRepDS_Edge3dInterferenceTool;
  TopOpeBRepDS_EdgeInterferenceTool: typeof TopOpeBRepDS_EdgeInterferenceTool;
  TopOpeBRepDS_Explorer_1: typeof TopOpeBRepDS_Explorer_1;
  TopOpeBRepDS_Explorer_2: typeof TopOpeBRepDS_Explorer_2;
  TopOpeBRepDS_FIR: typeof TopOpeBRepDS_FIR;
  TopOpeBRepDS_FaceInterferenceTool: typeof TopOpeBRepDS_FaceInterferenceTool;
  TopOpeBRepDS_Filter: typeof TopOpeBRepDS_Filter;
  TopOpeBRepDS_GapFiller: typeof TopOpeBRepDS_GapFiller;
  TopOpeBRepDS_GapTool_1: typeof TopOpeBRepDS_GapTool_1;
  TopOpeBRepDS_GapTool_2: typeof TopOpeBRepDS_GapTool_2;
  TopOpeBRepDS_Marker: typeof TopOpeBRepDS_Marker;
  TopOpeBRepDS_PointExplorer_1: typeof TopOpeBRepDS_PointExplorer_1;
  TopOpeBRepDS_PointExplorer_2: typeof TopOpeBRepDS_PointExplorer_2;
  TopOpeBRepDS_PointIterator: typeof TopOpeBRepDS_PointIterator;
  TopOpeBRepDS_Reducer: typeof TopOpeBRepDS_Reducer;
  TopOpeBRepDS_SolidSurfaceInterference: typeof TopOpeBRepDS_SolidSurfaceInterference;
  TopOpeBRepDS_SurfaceExplorer_1: typeof TopOpeBRepDS_SurfaceExplorer_1;
  TopOpeBRepDS_SurfaceExplorer_2: typeof TopOpeBRepDS_SurfaceExplorer_2;
  TopOpeBRepDS_SurfaceIterator: typeof TopOpeBRepDS_SurfaceIterator;
  TopOpeBRepDS_TKI: typeof TopOpeBRepDS_TKI;
  TopOpeBRepTool_C2DF_1: typeof TopOpeBRepTool_C2DF_1;
  TopOpeBRepTool_C2DF_2: typeof TopOpeBRepTool_C2DF_2;
  TopOpeBRepTool_face: typeof TopOpeBRepTool_face;
  TopOpeBRepTool_CLASSI: typeof TopOpeBRepTool_CLASSI;
  TopOpeBRepTool_CORRISO_1: typeof TopOpeBRepTool_CORRISO_1;
  TopOpeBRepTool_CORRISO_2: typeof TopOpeBRepTool_CORRISO_2;
  TopOpeBRepTool_FuseEdges: typeof TopOpeBRepTool_FuseEdges;
  TopOpeBRepTool_HBoxTool: typeof TopOpeBRepTool_HBoxTool;
  TopOpeBRepTool_connexity_1: typeof TopOpeBRepTool_connexity_1;
  TopOpeBRepTool_connexity_2: typeof TopOpeBRepTool_connexity_2;
  TopOpeBRepTool_PurgeInternalEdges: typeof TopOpeBRepTool_PurgeInternalEdges;
  TopOpeBRepTool_REGUS: typeof TopOpeBRepTool_REGUS;
  TopOpeBRepTool_REGUW: typeof TopOpeBRepTool_REGUW;
  TopOpeBRepTool_makeTransition: typeof TopOpeBRepTool_makeTransition;
  TopOpeBRepTool_mkTondgE: typeof TopOpeBRepTool_mkTondgE;
  Handle_BRepAlgo_AsDes_1: typeof Handle_BRepAlgo_AsDes_1;
  Handle_BRepAlgo_AsDes_2: typeof Handle_BRepAlgo_AsDes_2;
  Handle_BRepAlgo_AsDes_3: typeof Handle_BRepAlgo_AsDes_3;
  Handle_BRepAlgo_AsDes_4: typeof Handle_BRepAlgo_AsDes_4;
  Handle_BRepFill_LocationLaw_1: typeof Handle_BRepFill_LocationLaw_1;
  Handle_BRepFill_LocationLaw_2: typeof Handle_BRepFill_LocationLaw_2;
  Handle_BRepFill_LocationLaw_3: typeof Handle_BRepFill_LocationLaw_3;
  Handle_BRepFill_LocationLaw_4: typeof Handle_BRepFill_LocationLaw_4;
  Handle_BRepFill_ACRLaw_1: typeof Handle_BRepFill_ACRLaw_1;
  Handle_BRepFill_ACRLaw_2: typeof Handle_BRepFill_ACRLaw_2;
  Handle_BRepFill_ACRLaw_3: typeof Handle_BRepFill_ACRLaw_3;
  Handle_BRepFill_ACRLaw_4: typeof Handle_BRepFill_ACRLaw_4;
  Handle_BRepFill_CurveConstraint_1: typeof Handle_BRepFill_CurveConstraint_1;
  Handle_BRepFill_CurveConstraint_2: typeof Handle_BRepFill_CurveConstraint_2;
  Handle_BRepFill_CurveConstraint_3: typeof Handle_BRepFill_CurveConstraint_3;
  Handle_BRepFill_CurveConstraint_4: typeof Handle_BRepFill_CurveConstraint_4;
  BRepFill_DataMapOfOrientedShapeListOfShape_1: typeof BRepFill_DataMapOfOrientedShapeListOfShape_1;
  BRepFill_DataMapOfOrientedShapeListOfShape_2: typeof BRepFill_DataMapOfOrientedShapeListOfShape_2;
  BRepFill_DataMapOfOrientedShapeListOfShape_3: typeof BRepFill_DataMapOfOrientedShapeListOfShape_3;
  BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_1: typeof BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_1;
  BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_2: typeof BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_2;
  BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_3: typeof BRepFill_DataMapOfShapeDataMapOfShapeListOfShape_3;
  BRepFill_DataMapOfShapeSequenceOfPnt_1: typeof BRepFill_DataMapOfShapeSequenceOfPnt_1;
  BRepFill_DataMapOfShapeSequenceOfPnt_2: typeof BRepFill_DataMapOfShapeSequenceOfPnt_2;
  BRepFill_DataMapOfShapeSequenceOfPnt_3: typeof BRepFill_DataMapOfShapeSequenceOfPnt_3;
  BRepFill_DataMapOfShapeSequenceOfReal_1: typeof BRepFill_DataMapOfShapeSequenceOfReal_1;
  BRepFill_DataMapOfShapeSequenceOfReal_2: typeof BRepFill_DataMapOfShapeSequenceOfReal_2;
  BRepFill_DataMapOfShapeSequenceOfReal_3: typeof BRepFill_DataMapOfShapeSequenceOfReal_3;
  Handle_BRepFill_Edge3DLaw_1: typeof Handle_BRepFill_Edge3DLaw_1;
  Handle_BRepFill_Edge3DLaw_2: typeof Handle_BRepFill_Edge3DLaw_2;
  Handle_BRepFill_Edge3DLaw_3: typeof Handle_BRepFill_Edge3DLaw_3;
  Handle_BRepFill_Edge3DLaw_4: typeof Handle_BRepFill_Edge3DLaw_4;
  Handle_BRepFill_DraftLaw_1: typeof Handle_BRepFill_DraftLaw_1;
  Handle_BRepFill_DraftLaw_2: typeof Handle_BRepFill_DraftLaw_2;
  Handle_BRepFill_DraftLaw_3: typeof Handle_BRepFill_DraftLaw_3;
  Handle_BRepFill_DraftLaw_4: typeof Handle_BRepFill_DraftLaw_4;
  Handle_BRepFill_EdgeOnSurfLaw_1: typeof Handle_BRepFill_EdgeOnSurfLaw_1;
  Handle_BRepFill_EdgeOnSurfLaw_2: typeof Handle_BRepFill_EdgeOnSurfLaw_2;
  Handle_BRepFill_EdgeOnSurfLaw_3: typeof Handle_BRepFill_EdgeOnSurfLaw_3;
  Handle_BRepFill_EdgeOnSurfLaw_4: typeof Handle_BRepFill_EdgeOnSurfLaw_4;
  BRepFill_SequenceOfEdgeFaceAndOrder_1: typeof BRepFill_SequenceOfEdgeFaceAndOrder_1;
  BRepFill_SequenceOfEdgeFaceAndOrder_2: typeof BRepFill_SequenceOfEdgeFaceAndOrder_2;
  BRepFill_SequenceOfEdgeFaceAndOrder_3: typeof BRepFill_SequenceOfEdgeFaceAndOrder_3;
  BRepFill_SequenceOfFaceAndOrder_1: typeof BRepFill_SequenceOfFaceAndOrder_1;
  BRepFill_SequenceOfFaceAndOrder_2: typeof BRepFill_SequenceOfFaceAndOrder_2;
  BRepFill_SequenceOfFaceAndOrder_3: typeof BRepFill_SequenceOfFaceAndOrder_3;
  BRepFill_IndexedDataMapOfOrientedShapeListOfShape_1: typeof BRepFill_IndexedDataMapOfOrientedShapeListOfShape_1;
  BRepFill_IndexedDataMapOfOrientedShapeListOfShape_2: typeof BRepFill_IndexedDataMapOfOrientedShapeListOfShape_2;
  BRepFill_IndexedDataMapOfOrientedShapeListOfShape_3: typeof BRepFill_IndexedDataMapOfOrientedShapeListOfShape_3;
  BRepFill_ListOfOffsetWire_1: typeof BRepFill_ListOfOffsetWire_1;
  BRepFill_ListOfOffsetWire_2: typeof BRepFill_ListOfOffsetWire_2;
  BRepFill_ListOfOffsetWire_3: typeof BRepFill_ListOfOffsetWire_3;
  Handle_BRepFill_SectionLaw_1: typeof Handle_BRepFill_SectionLaw_1;
  Handle_BRepFill_SectionLaw_2: typeof Handle_BRepFill_SectionLaw_2;
  Handle_BRepFill_SectionLaw_3: typeof Handle_BRepFill_SectionLaw_3;
  Handle_BRepFill_SectionLaw_4: typeof Handle_BRepFill_SectionLaw_4;
  Handle_BRepFill_NSections_1: typeof Handle_BRepFill_NSections_1;
  Handle_BRepFill_NSections_2: typeof Handle_BRepFill_NSections_2;
  Handle_BRepFill_NSections_3: typeof Handle_BRepFill_NSections_3;
  Handle_BRepFill_NSections_4: typeof Handle_BRepFill_NSections_4;
  BRepFill_SequenceOfSection_1: typeof BRepFill_SequenceOfSection_1;
  BRepFill_SequenceOfSection_2: typeof BRepFill_SequenceOfSection_2;
  BRepFill_SequenceOfSection_3: typeof BRepFill_SequenceOfSection_3;
  Handle_BRepFill_PipeShell_1: typeof Handle_BRepFill_PipeShell_1;
  Handle_BRepFill_PipeShell_2: typeof Handle_BRepFill_PipeShell_2;
  Handle_BRepFill_PipeShell_3: typeof Handle_BRepFill_PipeShell_3;
  Handle_BRepFill_PipeShell_4: typeof Handle_BRepFill_PipeShell_4;
  Handle_BRepFill_ShapeLaw_1: typeof Handle_BRepFill_ShapeLaw_1;
  Handle_BRepFill_ShapeLaw_2: typeof Handle_BRepFill_ShapeLaw_2;
  Handle_BRepFill_ShapeLaw_3: typeof Handle_BRepFill_ShapeLaw_3;
  Handle_BRepFill_ShapeLaw_4: typeof Handle_BRepFill_ShapeLaw_4;
  Handle_TopOpeBRepDS_Interference_1: typeof Handle_TopOpeBRepDS_Interference_1;
  Handle_TopOpeBRepDS_Interference_2: typeof Handle_TopOpeBRepDS_Interference_2;
  Handle_TopOpeBRepDS_Interference_3: typeof Handle_TopOpeBRepDS_Interference_3;
  Handle_TopOpeBRepDS_Interference_4: typeof Handle_TopOpeBRepDS_Interference_4;
  Handle_TopOpeBRepDS_SurfaceCurveInterference_1: typeof Handle_TopOpeBRepDS_SurfaceCurveInterference_1;
  Handle_TopOpeBRepDS_SurfaceCurveInterference_2: typeof Handle_TopOpeBRepDS_SurfaceCurveInterference_2;
  Handle_TopOpeBRepDS_SurfaceCurveInterference_3: typeof Handle_TopOpeBRepDS_SurfaceCurveInterference_3;
  Handle_TopOpeBRepDS_SurfaceCurveInterference_4: typeof Handle_TopOpeBRepDS_SurfaceCurveInterference_4;
  Handle_TopOpeBRepDS_CurvePointInterference_1: typeof Handle_TopOpeBRepDS_CurvePointInterference_1;
  Handle_TopOpeBRepDS_CurvePointInterference_2: typeof Handle_TopOpeBRepDS_CurvePointInterference_2;
  Handle_TopOpeBRepDS_CurvePointInterference_3: typeof Handle_TopOpeBRepDS_CurvePointInterference_3;
  Handle_TopOpeBRepDS_CurvePointInterference_4: typeof Handle_TopOpeBRepDS_CurvePointInterference_4;
  TopOpeBRepDS_MapOfSurface_1: typeof TopOpeBRepDS_MapOfSurface_1;
  TopOpeBRepDS_MapOfSurface_2: typeof TopOpeBRepDS_MapOfSurface_2;
  TopOpeBRepDS_MapOfSurface_3: typeof TopOpeBRepDS_MapOfSurface_3;
  TopOpeBRepDS_MapOfCurve_1: typeof TopOpeBRepDS_MapOfCurve_1;
  TopOpeBRepDS_MapOfCurve_2: typeof TopOpeBRepDS_MapOfCurve_2;
  TopOpeBRepDS_MapOfCurve_3: typeof TopOpeBRepDS_MapOfCurve_3;
  TopOpeBRepDS_MapOfPoint_1: typeof TopOpeBRepDS_MapOfPoint_1;
  TopOpeBRepDS_MapOfPoint_2: typeof TopOpeBRepDS_MapOfPoint_2;
  TopOpeBRepDS_MapOfPoint_3: typeof TopOpeBRepDS_MapOfPoint_3;
  TopOpeBRepDS_MapOfShapeData_1: typeof TopOpeBRepDS_MapOfShapeData_1;
  TopOpeBRepDS_MapOfShapeData_2: typeof TopOpeBRepDS_MapOfShapeData_2;
  TopOpeBRepDS_MapOfShapeData_3: typeof TopOpeBRepDS_MapOfShapeData_3;
  TopOpeBRepDS_IndexedDataMapOfShapeWithState_1: typeof TopOpeBRepDS_IndexedDataMapOfShapeWithState_1;
  TopOpeBRepDS_IndexedDataMapOfShapeWithState_2: typeof TopOpeBRepDS_IndexedDataMapOfShapeWithState_2;
  TopOpeBRepDS_IndexedDataMapOfShapeWithState_3: typeof TopOpeBRepDS_IndexedDataMapOfShapeWithState_3;
  TopOpeBRep_Array1OfVPointInter_1: typeof TopOpeBRep_Array1OfVPointInter_1;
  TopOpeBRep_Array1OfVPointInter_2: typeof TopOpeBRep_Array1OfVPointInter_2;
  TopOpeBRep_Array1OfVPointInter_3: typeof TopOpeBRep_Array1OfVPointInter_3;
  TopOpeBRep_Array1OfVPointInter_4: typeof TopOpeBRep_Array1OfVPointInter_4;
  TopOpeBRep_Array1OfVPointInter_5: typeof TopOpeBRep_Array1OfVPointInter_5;
  Handle_TopOpeBRep_HArray1OfVPointInter_1: typeof Handle_TopOpeBRep_HArray1OfVPointInter_1;
  Handle_TopOpeBRep_HArray1OfVPointInter_2: typeof Handle_TopOpeBRep_HArray1OfVPointInter_2;
  Handle_TopOpeBRep_HArray1OfVPointInter_3: typeof Handle_TopOpeBRep_HArray1OfVPointInter_3;
  Handle_TopOpeBRep_HArray1OfVPointInter_4: typeof Handle_TopOpeBRep_HArray1OfVPointInter_4;
  TopOpeBRep_Array1OfLineInter_1: typeof TopOpeBRep_Array1OfLineInter_1;
  TopOpeBRep_Array1OfLineInter_2: typeof TopOpeBRep_Array1OfLineInter_2;
  TopOpeBRep_Array1OfLineInter_3: typeof TopOpeBRep_Array1OfLineInter_3;
  TopOpeBRep_Array1OfLineInter_4: typeof TopOpeBRep_Array1OfLineInter_4;
  TopOpeBRep_Array1OfLineInter_5: typeof TopOpeBRep_Array1OfLineInter_5;
  Handle_TopOpeBRep_HArray1OfLineInter_1: typeof Handle_TopOpeBRep_HArray1OfLineInter_1;
  Handle_TopOpeBRep_HArray1OfLineInter_2: typeof Handle_TopOpeBRep_HArray1OfLineInter_2;
  Handle_TopOpeBRep_HArray1OfLineInter_3: typeof Handle_TopOpeBRep_HArray1OfLineInter_3;
  Handle_TopOpeBRep_HArray1OfLineInter_4: typeof Handle_TopOpeBRep_HArray1OfLineInter_4;
  Handle_TopOpeBRepDS_ShapeShapeInterference_1: typeof Handle_TopOpeBRepDS_ShapeShapeInterference_1;
  Handle_TopOpeBRepDS_ShapeShapeInterference_2: typeof Handle_TopOpeBRepDS_ShapeShapeInterference_2;
  Handle_TopOpeBRepDS_ShapeShapeInterference_3: typeof Handle_TopOpeBRepDS_ShapeShapeInterference_3;
  Handle_TopOpeBRepDS_ShapeShapeInterference_4: typeof Handle_TopOpeBRepDS_ShapeShapeInterference_4;
  Handle_TopOpeBRepDS_EdgeVertexInterference_1: typeof Handle_TopOpeBRepDS_EdgeVertexInterference_1;
  Handle_TopOpeBRepDS_EdgeVertexInterference_2: typeof Handle_TopOpeBRepDS_EdgeVertexInterference_2;
  Handle_TopOpeBRepDS_EdgeVertexInterference_3: typeof Handle_TopOpeBRepDS_EdgeVertexInterference_3;
  Handle_TopOpeBRepDS_EdgeVertexInterference_4: typeof Handle_TopOpeBRepDS_EdgeVertexInterference_4;
  Handle_TopOpeBRepDS_FaceEdgeInterference_1: typeof Handle_TopOpeBRepDS_FaceEdgeInterference_1;
  Handle_TopOpeBRepDS_FaceEdgeInterference_2: typeof Handle_TopOpeBRepDS_FaceEdgeInterference_2;
  Handle_TopOpeBRepDS_FaceEdgeInterference_3: typeof Handle_TopOpeBRepDS_FaceEdgeInterference_3;
  Handle_TopOpeBRepDS_FaceEdgeInterference_4: typeof Handle_TopOpeBRepDS_FaceEdgeInterference_4;
  Handle_TopOpeBRepDS_HDataStructure_1: typeof Handle_TopOpeBRepDS_HDataStructure_1;
  Handle_TopOpeBRepDS_HDataStructure_2: typeof Handle_TopOpeBRepDS_HDataStructure_2;
  Handle_TopOpeBRepDS_HDataStructure_3: typeof Handle_TopOpeBRepDS_HDataStructure_3;
  Handle_TopOpeBRepDS_HDataStructure_4: typeof Handle_TopOpeBRepDS_HDataStructure_4;
  TopOpeBRep_SequenceOfPoint2d_1: typeof TopOpeBRep_SequenceOfPoint2d_1;
  TopOpeBRep_SequenceOfPoint2d_2: typeof TopOpeBRep_SequenceOfPoint2d_2;
  TopOpeBRep_SequenceOfPoint2d_3: typeof TopOpeBRep_SequenceOfPoint2d_3;
  Handle_TopOpeBRep_FFDumper_1: typeof Handle_TopOpeBRep_FFDumper_1;
  Handle_TopOpeBRep_FFDumper_2: typeof Handle_TopOpeBRep_FFDumper_2;
  Handle_TopOpeBRep_FFDumper_3: typeof Handle_TopOpeBRep_FFDumper_3;
  Handle_TopOpeBRep_FFDumper_4: typeof Handle_TopOpeBRep_FFDumper_4;
  Handle_TopOpeBRep_Hctxee2d_1: typeof Handle_TopOpeBRep_Hctxee2d_1;
  Handle_TopOpeBRep_Hctxee2d_2: typeof Handle_TopOpeBRep_Hctxee2d_2;
  Handle_TopOpeBRep_Hctxee2d_3: typeof Handle_TopOpeBRep_Hctxee2d_3;
  Handle_TopOpeBRep_Hctxee2d_4: typeof Handle_TopOpeBRep_Hctxee2d_4;
  Handle_TopOpeBRep_Hctxff2d_1: typeof Handle_TopOpeBRep_Hctxff2d_1;
  Handle_TopOpeBRep_Hctxff2d_2: typeof Handle_TopOpeBRep_Hctxff2d_2;
  Handle_TopOpeBRep_Hctxff2d_3: typeof Handle_TopOpeBRep_Hctxff2d_3;
  Handle_TopOpeBRep_Hctxff2d_4: typeof Handle_TopOpeBRep_Hctxff2d_4;
  TopOpeBRep_ListOfBipoint_1: typeof TopOpeBRep_ListOfBipoint_1;
  TopOpeBRep_ListOfBipoint_2: typeof TopOpeBRep_ListOfBipoint_2;
  TopOpeBRep_ListOfBipoint_3: typeof TopOpeBRep_ListOfBipoint_3;
  Handle_TopOpeBRepBuild_Loop_1: typeof Handle_TopOpeBRepBuild_Loop_1;
  Handle_TopOpeBRepBuild_Loop_2: typeof Handle_TopOpeBRepBuild_Loop_2;
  Handle_TopOpeBRepBuild_Loop_3: typeof Handle_TopOpeBRepBuild_Loop_3;
  Handle_TopOpeBRepBuild_Loop_4: typeof Handle_TopOpeBRepBuild_Loop_4;
  TopOpeBRepBuild_ListOfListOfLoop_1: typeof TopOpeBRepBuild_ListOfListOfLoop_1;
  TopOpeBRepBuild_ListOfListOfLoop_2: typeof TopOpeBRepBuild_ListOfListOfLoop_2;
  TopOpeBRepBuild_ListOfListOfLoop_3: typeof TopOpeBRepBuild_ListOfListOfLoop_3;
  TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_1: typeof TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_1;
  TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_2: typeof TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_2;
  TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_3: typeof TopOpeBRepDS_DataMapOfShapeListOfShapeOn1State_3;
  TopOpeBRepDS_DataMapOfShapeState_1: typeof TopOpeBRepDS_DataMapOfShapeState_1;
  TopOpeBRepDS_DataMapOfShapeState_2: typeof TopOpeBRepDS_DataMapOfShapeState_2;
  TopOpeBRepDS_DataMapOfShapeState_3: typeof TopOpeBRepDS_DataMapOfShapeState_3;
  TopOpeBRepBuild_ListOfShapeListOfShape_1: typeof TopOpeBRepBuild_ListOfShapeListOfShape_1;
  TopOpeBRepBuild_ListOfShapeListOfShape_2: typeof TopOpeBRepBuild_ListOfShapeListOfShape_2;
  TopOpeBRepBuild_ListOfShapeListOfShape_3: typeof TopOpeBRepBuild_ListOfShapeListOfShape_3;
  TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_1: typeof TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_1;
  TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_2: typeof TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_2;
  TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_3: typeof TopOpeBRepBuild_DataMapOfShapeListOfShapeListOfShape_3;
  Handle_TopOpeBRepBuild_HBuilder_1: typeof Handle_TopOpeBRepBuild_HBuilder_1;
  Handle_TopOpeBRepBuild_HBuilder_2: typeof Handle_TopOpeBRepBuild_HBuilder_2;
  Handle_TopOpeBRepBuild_HBuilder_3: typeof Handle_TopOpeBRepBuild_HBuilder_3;
  Handle_TopOpeBRepBuild_HBuilder_4: typeof Handle_TopOpeBRepBuild_HBuilder_4;
  TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_1: typeof TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_1;
  TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_2: typeof TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_2;
  TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_3: typeof TopOpeBRepBuild_IndexedDataMapOfShapeVertexInfo_3;
  Handle_TopOpeBRepBuild_Pave_1: typeof Handle_TopOpeBRepBuild_Pave_1;
  Handle_TopOpeBRepBuild_Pave_2: typeof Handle_TopOpeBRepBuild_Pave_2;
  Handle_TopOpeBRepBuild_Pave_3: typeof Handle_TopOpeBRepBuild_Pave_3;
  Handle_TopOpeBRepBuild_Pave_4: typeof Handle_TopOpeBRepBuild_Pave_4;
  TopOpeBRepDS_DataMapOfIntegerListOfInterference_1: typeof TopOpeBRepDS_DataMapOfIntegerListOfInterference_1;
  TopOpeBRepDS_DataMapOfIntegerListOfInterference_2: typeof TopOpeBRepDS_DataMapOfIntegerListOfInterference_2;
  TopOpeBRepDS_DataMapOfIntegerListOfInterference_3: typeof TopOpeBRepDS_DataMapOfIntegerListOfInterference_3;
  TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_1: typeof TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_1;
  TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_2: typeof TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_2;
  TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_3: typeof TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_3;
  TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_4: typeof TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_4;
  TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_5: typeof TopOpeBRepDS_Array1OfDataMapOfIntegerListOfInterference_5;
  Handle_TopOpeBRepDS_Association_1: typeof Handle_TopOpeBRepDS_Association_1;
  Handle_TopOpeBRepDS_Association_2: typeof Handle_TopOpeBRepDS_Association_2;
  Handle_TopOpeBRepDS_Association_3: typeof Handle_TopOpeBRepDS_Association_3;
  Handle_TopOpeBRepDS_Association_4: typeof Handle_TopOpeBRepDS_Association_4;
  TopOpeBRepDS_DataMapOfCheckStatus_1: typeof TopOpeBRepDS_DataMapOfCheckStatus_1;
  TopOpeBRepDS_DataMapOfCheckStatus_2: typeof TopOpeBRepDS_DataMapOfCheckStatus_2;
  TopOpeBRepDS_DataMapOfCheckStatus_3: typeof TopOpeBRepDS_DataMapOfCheckStatus_3;
  Handle_TopOpeBRepDS_Check_1: typeof Handle_TopOpeBRepDS_Check_1;
  Handle_TopOpeBRepDS_Check_2: typeof Handle_TopOpeBRepDS_Check_2;
  Handle_TopOpeBRepDS_Check_3: typeof Handle_TopOpeBRepDS_Check_3;
  Handle_TopOpeBRepDS_Check_4: typeof Handle_TopOpeBRepDS_Check_4;
  TopOpeBRepDS_MapOfIntegerShapeData_1: typeof TopOpeBRepDS_MapOfIntegerShapeData_1;
  TopOpeBRepDS_MapOfIntegerShapeData_2: typeof TopOpeBRepDS_MapOfIntegerShapeData_2;
  TopOpeBRepDS_MapOfIntegerShapeData_3: typeof TopOpeBRepDS_MapOfIntegerShapeData_3;
  TopOpeBRepDS_DoubleMapOfIntegerShape_1: typeof TopOpeBRepDS_DoubleMapOfIntegerShape_1;
  TopOpeBRepDS_DoubleMapOfIntegerShape_2: typeof TopOpeBRepDS_DoubleMapOfIntegerShape_2;
  TopOpeBRepDS_DoubleMapOfIntegerShape_3: typeof TopOpeBRepDS_DoubleMapOfIntegerShape_3;
  Handle_TopOpeBRepDS_GapTool_1: typeof Handle_TopOpeBRepDS_GapTool_1;
  Handle_TopOpeBRepDS_GapTool_2: typeof Handle_TopOpeBRepDS_GapTool_2;
  Handle_TopOpeBRepDS_GapTool_3: typeof Handle_TopOpeBRepDS_GapTool_3;
  Handle_TopOpeBRepDS_GapTool_4: typeof Handle_TopOpeBRepDS_GapTool_4;
  Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_1: typeof Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_1;
  Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_2: typeof Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_2;
  Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_3: typeof Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_3;
  Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_4: typeof Handle_TopOpeBRepDS_HArray1OfDataMapOfIntegerListOfInterference_4;
  TopOpeBRepDS_IndexedDataMapOfVertexPoint_1: typeof TopOpeBRepDS_IndexedDataMapOfVertexPoint_1;
  TopOpeBRepDS_IndexedDataMapOfVertexPoint_2: typeof TopOpeBRepDS_IndexedDataMapOfVertexPoint_2;
  TopOpeBRepDS_IndexedDataMapOfVertexPoint_3: typeof TopOpeBRepDS_IndexedDataMapOfVertexPoint_3;
  Handle_TopOpeBRepDS_Marker_1: typeof Handle_TopOpeBRepDS_Marker_1;
  Handle_TopOpeBRepDS_Marker_2: typeof Handle_TopOpeBRepDS_Marker_2;
  Handle_TopOpeBRepDS_Marker_3: typeof Handle_TopOpeBRepDS_Marker_3;
  Handle_TopOpeBRepDS_Marker_4: typeof Handle_TopOpeBRepDS_Marker_4;
  Handle_TopOpeBRepDS_SolidSurfaceInterference_1: typeof Handle_TopOpeBRepDS_SolidSurfaceInterference_1;
  Handle_TopOpeBRepDS_SolidSurfaceInterference_2: typeof Handle_TopOpeBRepDS_SolidSurfaceInterference_2;
  Handle_TopOpeBRepDS_SolidSurfaceInterference_3: typeof Handle_TopOpeBRepDS_SolidSurfaceInterference_3;
  Handle_TopOpeBRepDS_SolidSurfaceInterference_4: typeof Handle_TopOpeBRepDS_SolidSurfaceInterference_4;
  TopOpeBRepTool_IndexedDataMapOfShapeBox2d_1: typeof TopOpeBRepTool_IndexedDataMapOfShapeBox2d_1;
  TopOpeBRepTool_IndexedDataMapOfShapeBox2d_2: typeof TopOpeBRepTool_IndexedDataMapOfShapeBox2d_2;
  TopOpeBRepTool_IndexedDataMapOfShapeBox2d_3: typeof TopOpeBRepTool_IndexedDataMapOfShapeBox2d_3;
  TopOpeBRepTool_DataMapOfShapeface_1: typeof TopOpeBRepTool_DataMapOfShapeface_1;
  TopOpeBRepTool_DataMapOfShapeface_2: typeof TopOpeBRepTool_DataMapOfShapeface_2;
  TopOpeBRepTool_DataMapOfShapeface_3: typeof TopOpeBRepTool_DataMapOfShapeface_3;
  TopOpeBRepTool_DataMapOfOrientedShapeC2DF_1: typeof TopOpeBRepTool_DataMapOfOrientedShapeC2DF_1;
  TopOpeBRepTool_DataMapOfOrientedShapeC2DF_2: typeof TopOpeBRepTool_DataMapOfOrientedShapeC2DF_2;
  TopOpeBRepTool_DataMapOfOrientedShapeC2DF_3: typeof TopOpeBRepTool_DataMapOfOrientedShapeC2DF_3;
  TopOpeBRepTool_ListOfC2DF_1: typeof TopOpeBRepTool_ListOfC2DF_1;
  TopOpeBRepTool_ListOfC2DF_2: typeof TopOpeBRepTool_ListOfC2DF_2;
  TopOpeBRepTool_ListOfC2DF_3: typeof TopOpeBRepTool_ListOfC2DF_3;
  TopOpeBRepTool_DataMapOfShapeListOfC2DF_1: typeof TopOpeBRepTool_DataMapOfShapeListOfC2DF_1;
  TopOpeBRepTool_DataMapOfShapeListOfC2DF_2: typeof TopOpeBRepTool_DataMapOfShapeListOfC2DF_2;
  TopOpeBRepTool_DataMapOfShapeListOfC2DF_3: typeof TopOpeBRepTool_DataMapOfShapeListOfC2DF_3;
  TopOpeBRepTool_IndexedDataMapOfShapeBox_1: typeof TopOpeBRepTool_IndexedDataMapOfShapeBox_1;
  TopOpeBRepTool_IndexedDataMapOfShapeBox_2: typeof TopOpeBRepTool_IndexedDataMapOfShapeBox_2;
  TopOpeBRepTool_IndexedDataMapOfShapeBox_3: typeof TopOpeBRepTool_IndexedDataMapOfShapeBox_3;
  Handle_TopOpeBRepTool_HBoxTool_1: typeof Handle_TopOpeBRepTool_HBoxTool_1;
  Handle_TopOpeBRepTool_HBoxTool_2: typeof Handle_TopOpeBRepTool_HBoxTool_2;
  Handle_TopOpeBRepTool_HBoxTool_3: typeof Handle_TopOpeBRepTool_HBoxTool_3;
  Handle_TopOpeBRepTool_HBoxTool_4: typeof Handle_TopOpeBRepTool_HBoxTool_4;
  TopOpeBRepTool_IndexedDataMapOfShapeconnexity_1: typeof TopOpeBRepTool_IndexedDataMapOfShapeconnexity_1;
  TopOpeBRepTool_IndexedDataMapOfShapeconnexity_2: typeof TopOpeBRepTool_IndexedDataMapOfShapeconnexity_2;
  TopOpeBRepTool_IndexedDataMapOfShapeconnexity_3: typeof TopOpeBRepTool_IndexedDataMapOfShapeconnexity_3;
  BRepAlgo_CheckStatus: typeof BRepAlgo_CheckStatus;
  BRepFill_TransitionStyle: typeof BRepFill_TransitionStyle;
  BRepFill_TypeOfContact: typeof BRepFill_TypeOfContact;
  TopOpeBRepDS_Kind: typeof TopOpeBRepDS_Kind;
  TopOpeBRepDS_Config: typeof TopOpeBRepDS_Config;
  TopOpeBRep_TypeLineCurve: typeof TopOpeBRep_TypeLineCurve;
  TopOpeBRep_P2Dstatus: typeof TopOpeBRep_P2Dstatus;
  TopOpeBRepBuild_LoopEnum: typeof TopOpeBRepBuild_LoopEnum;
  TopOpeBRepTool_OutCurveType: typeof TopOpeBRepTool_OutCurveType;
  TopOpeBRepDS_CheckStatus: typeof TopOpeBRepDS_CheckStatus;
};
