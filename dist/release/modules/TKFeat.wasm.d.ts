declare const libName = "./modules/TKFeat.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BRepFeat_Builder extends BOPAlgo_BOP {
  constructor()
  Clear(): void;
  Init_1(theShape: TopoDS_Shape): void;
  Init_2(theShape: TopoDS_Shape, theTool: TopoDS_Shape): void;
  SetOperation_1(theFuse: Standard_Integer): void;
  SetOperation_2(theFuse: Standard_Integer, theFlag: Standard_Boolean): void;
  PartsOfTool(theLT: TopTools_ListOfShape): void;
  KeepParts(theIm: TopTools_ListOfShape): void;
  KeepPart(theS: TopoDS_Shape): void;
  PerformResult(): void;
  RebuildFaces(): void;
  RebuildEdge(theE: TopoDS_Shape, theF: TopoDS_Face, theME: TopTools_MapOfShape, aLEIm: TopTools_ListOfShape): void;
  CheckSolidImages(): void;
  FillRemoved_1(): void;
  FillRemoved_2(theS: TopoDS_Shape, theM: TopTools_MapOfShape): void;
}

export declare class BRepFeat_Form extends BRepBuilderAPI_MakeShape {
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape(): TopTools_ListOfShape;
  LastShape(): TopTools_ListOfShape;
  NewEdges(): TopTools_ListOfShape;
  TgtEdges(): TopTools_ListOfShape;
  BasisShapeValid(): void;
  GeneratedShapeValid(): void;
  ShapeFromValid(): void;
  ShapeUntilValid(): void;
  GluedFacesValid(): void;
  SketchFaceValid(): void;
  PerfSelectionValid(): void;
  Curves(S: TColGeom_SequenceOfCurve): void;
  BarycCurve(): any;
  CurrentStatusError(): BRepFeat_StatusError;
}

export declare class LocOpe_Gluer {
  Init(Sbase: TopoDS_Shape, Snew: TopoDS_Shape): void;
  Bind_1(Fnew: TopoDS_Face, Fbase: TopoDS_Face): void;
  Bind_2(Enew: TopoDS_Edge, Ebase: TopoDS_Edge): void;
  OpeType(): LocOpe_Operation;
  Perform(): void;
  IsDone(): Standard_Boolean;
  ResultingShape(): TopoDS_Shape;
  DescendantFaces(F: TopoDS_Face): TopTools_ListOfShape;
  BasisShape(): TopoDS_Shape;
  GluedShape(): TopoDS_Shape;
  Edges(): TopTools_ListOfShape;
  TgtEdges(): TopTools_ListOfShape;
}

  export declare class LocOpe_Gluer_1 extends LocOpe_Gluer {
    constructor();
  }

  export declare class LocOpe_Gluer_2 extends LocOpe_Gluer {
    constructor(Sbase: TopoDS_Shape, Snew: TopoDS_Shape);
  }

export declare class BRepFeat_Gluer extends BRepBuilderAPI_MakeShape {
  Init(Snew: TopoDS_Shape, Sbase: TopoDS_Shape): void;
  Bind_1(Fnew: TopoDS_Face, Fbase: TopoDS_Face): void;
  Bind_2(Enew: TopoDS_Edge, Ebase: TopoDS_Edge): void;
  OpeType(): LocOpe_Operation;
  BasisShape(): TopoDS_Shape;
  GluedShape(): TopoDS_Shape;
  Build(): void;
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class BRepFeat_Gluer_1 extends BRepFeat_Gluer {
    constructor();
  }

  export declare class BRepFeat_Gluer_2 extends BRepFeat_Gluer {
    constructor(Snew: TopoDS_Shape, Sbase: TopoDS_Shape);
  }

export declare class BRepFeat_MakeCylindricalHole extends BRepFeat_Builder {
  constructor()
  Init_1(Axis: gp_Ax1): void;
  Init_2(S: TopoDS_Shape, Axis: gp_Ax1): void;
  Perform_1(Radius: Standard_Real): void;
  Perform_2(Radius: Standard_Real, PFrom: Standard_Real, PTo: Standard_Real, WithControl: Standard_Boolean): void;
  PerformThruNext(Radius: Standard_Real, WithControl: Standard_Boolean): void;
  PerformUntilEnd(Radius: Standard_Real, WithControl: Standard_Boolean): void;
  PerformBlind(Radius: Standard_Real, Length: Standard_Real, WithControl: Standard_Boolean): void;
  Status(): BRepFeat_Status;
  Build(): void;
}

export declare class BRepFeat_MakeDPrism extends BRepFeat_Form {
  Init(Sbase: TopoDS_Shape, Pbase: TopoDS_Face, Skface: TopoDS_Face, Angle: Standard_Real, Fuse: Standard_Integer, Modify: Standard_Boolean): void;
  Add(E: TopoDS_Edge, OnFace: TopoDS_Face): void;
  Perform_1(Height: Standard_Real): void;
  Perform_2(Until: TopoDS_Shape): void;
  Perform_3(From: TopoDS_Shape, Until: TopoDS_Shape): void;
  PerformUntilEnd(): void;
  PerformFromEnd(FUntil: TopoDS_Shape): void;
  PerformThruAll(): void;
  PerformUntilHeight(Until: TopoDS_Shape, Height: Standard_Real): void;
  Curves(S: TColGeom_SequenceOfCurve): void;
  BarycCurve(): any;
  BossEdges(sig: Standard_Integer): void;
  TopEdges(): TopTools_ListOfShape;
  LatEdges(): TopTools_ListOfShape;
}

  export declare class BRepFeat_MakeDPrism_1 extends BRepFeat_MakeDPrism {
    constructor(Sbase: TopoDS_Shape, Pbase: TopoDS_Face, Skface: TopoDS_Face, Angle: Standard_Real, Fuse: Standard_Integer, Modify: Standard_Boolean);
  }

  export declare class BRepFeat_MakeDPrism_2 extends BRepFeat_MakeDPrism {
    constructor();
  }

export declare class BRepFeat_RibSlot extends BRepBuilderAPI_MakeShape {
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  FirstShape(): TopTools_ListOfShape;
  LastShape(): TopTools_ListOfShape;
  FacesForDraft(): TopTools_ListOfShape;
  NewEdges(): TopTools_ListOfShape;
  TgtEdges(): TopTools_ListOfShape;
  IntPar(C: any, P: gp_Pnt): Standard_Real;
  ChoiceOfFaces(faces: TopTools_ListOfShape, cc: any, par: Standard_Real, bnd: Standard_Real, Pln: any): TopoDS_Face;
  CurrentStatusError(): BRepFeat_StatusError;
}

export declare class BRepFeat_MakePipe extends BRepFeat_Form {
  Init(Sbase: TopoDS_Shape, Pbase: TopoDS_Shape, Skface: TopoDS_Face, Spine: TopoDS_Wire, Fuse: Standard_Integer, Modify: Standard_Boolean): void;
  Add(E: TopoDS_Edge, OnFace: TopoDS_Face): void;
  Perform_1(): void;
  Perform_2(Until: TopoDS_Shape): void;
  Perform_3(From: TopoDS_Shape, Until: TopoDS_Shape): void;
  Curves(S: TColGeom_SequenceOfCurve): void;
  BarycCurve(): any;
}

  export declare class BRepFeat_MakePipe_1 extends BRepFeat_MakePipe {
    constructor();
  }

  export declare class BRepFeat_MakePipe_2 extends BRepFeat_MakePipe {
    constructor(Sbase: TopoDS_Shape, Pbase: TopoDS_Shape, Skface: TopoDS_Face, Spine: TopoDS_Wire, Fuse: Standard_Integer, Modify: Standard_Boolean);
  }

export declare class BRepFeat_MakePrism extends BRepFeat_Form {
  Init(Sbase: TopoDS_Shape, Pbase: TopoDS_Shape, Skface: TopoDS_Face, Direction: gp_Dir, Fuse: Standard_Integer, Modify: Standard_Boolean): void;
  Add(E: TopoDS_Edge, OnFace: TopoDS_Face): void;
  Perform_1(Length: Standard_Real): void;
  Perform_2(Until: TopoDS_Shape): void;
  Perform_3(From: TopoDS_Shape, Until: TopoDS_Shape): void;
  PerformUntilEnd(): void;
  PerformFromEnd(FUntil: TopoDS_Shape): void;
  PerformThruAll(): void;
  PerformUntilHeight(Until: TopoDS_Shape, Length: Standard_Real): void;
  Curves(S: TColGeom_SequenceOfCurve): void;
  BarycCurve(): any;
}

  export declare class BRepFeat_MakePrism_1 extends BRepFeat_MakePrism {
    constructor();
  }

  export declare class BRepFeat_MakePrism_2 extends BRepFeat_MakePrism {
    constructor(Sbase: TopoDS_Shape, Pbase: TopoDS_Shape, Skface: TopoDS_Face, Direction: gp_Dir, Fuse: Standard_Integer, Modify: Standard_Boolean);
  }

export declare class BRepFeat_MakeRevol extends BRepFeat_Form {
  Init(Sbase: TopoDS_Shape, Pbase: TopoDS_Shape, Skface: TopoDS_Face, Axis: gp_Ax1, Fuse: Standard_Integer, Modify: Standard_Boolean): void;
  Add(E: TopoDS_Edge, OnFace: TopoDS_Face): void;
  Perform_1(Angle: Standard_Real): void;
  Perform_2(Until: TopoDS_Shape): void;
  Perform_3(From: TopoDS_Shape, Until: TopoDS_Shape): void;
  PerformThruAll(): void;
  PerformUntilAngle(Until: TopoDS_Shape, Angle: Standard_Real): void;
  Curves(S: TColGeom_SequenceOfCurve): void;
  BarycCurve(): any;
}

  export declare class BRepFeat_MakeRevol_1 extends BRepFeat_MakeRevol {
    constructor();
  }

  export declare class BRepFeat_MakeRevol_2 extends BRepFeat_MakeRevol {
    constructor(Sbase: TopoDS_Shape, Pbase: TopoDS_Shape, Skface: TopoDS_Face, Axis: gp_Ax1, Fuse: Standard_Integer, Modify: Standard_Boolean);
  }

export declare class BRepFeat_MakeRevolutionForm extends BRepFeat_RibSlot {
  Init(Sbase: TopoDS_Shape, W: TopoDS_Wire, Plane: any, Axis: gp_Ax1, Height1: Standard_Real, Height2: Standard_Real, Fuse: Standard_Integer, Sliding: Standard_Boolean): void;
  Add(E: TopoDS_Edge, OnFace: TopoDS_Face): void;
  Perform(): void;
  Propagate(L: TopTools_ListOfShape, F: TopoDS_Face, FPoint: gp_Pnt, LPoint: gp_Pnt, falseside: Standard_Boolean): Standard_Boolean;
}

  export declare class BRepFeat_MakeRevolutionForm_1 extends BRepFeat_MakeRevolutionForm {
    constructor();
  }

  export declare class BRepFeat_MakeRevolutionForm_2 extends BRepFeat_MakeRevolutionForm {
    constructor(Sbase: TopoDS_Shape, W: TopoDS_Wire, Plane: any, Axis: gp_Ax1, Height1: Standard_Real, Height2: Standard_Real, Fuse: Standard_Integer, Sliding: Standard_Boolean);
  }

export declare class LocOpe_Spliter {
  Init(S: TopoDS_Shape): void;
  Perform(PW: any): void;
  IsDone(): Standard_Boolean;
  ResultingShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  DirectLeft(): TopTools_ListOfShape;
  Left(): TopTools_ListOfShape;
  DescendantShapes(S: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class LocOpe_Spliter_1 extends LocOpe_Spliter {
    constructor();
  }

  export declare class LocOpe_Spliter_2 extends LocOpe_Spliter {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepFeat_SplitShape extends BRepBuilderAPI_MakeShape {
  Add_1(theEdges: TopTools_SequenceOfShape): Standard_Boolean;
  Init(S: TopoDS_Shape): void;
  SetCheckInterior(ToCheckInterior: Standard_Boolean): void;
  Add_2(W: TopoDS_Wire, F: TopoDS_Face): void;
  Add_3(E: TopoDS_Edge, F: TopoDS_Face): void;
  Add_4(Comp: TopoDS_Compound, F: TopoDS_Face): void;
  Add_5(E: TopoDS_Edge, EOn: TopoDS_Edge): void;
  DirectLeft(): TopTools_ListOfShape;
  Left(): TopTools_ListOfShape;
  Right(): TopTools_ListOfShape;
  Build(): void;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  Modified(F: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class BRepFeat_SplitShape_1 extends BRepFeat_SplitShape {
    constructor();
  }

  export declare class BRepFeat_SplitShape_2 extends BRepFeat_SplitShape {
    constructor(S: TopoDS_Shape);
  }

export declare class LocOpe_WiresOnShape extends Standard_Transient {
  constructor(S: TopoDS_Shape)
  Init(S: TopoDS_Shape): void;
  Add(theEdges: TopTools_SequenceOfShape): Standard_Boolean;
  SetCheckInterior(ToCheckInterior: Standard_Boolean): void;
  Bind_1(W: TopoDS_Wire, F: TopoDS_Face): void;
  Bind_2(Comp: TopoDS_Compound, F: TopoDS_Face): void;
  Bind_3(E: TopoDS_Edge, F: TopoDS_Face): void;
  Bind_4(EfromW: TopoDS_Edge, EonFace: TopoDS_Edge): void;
  BindAll(): void;
  IsDone(): Standard_Boolean;
  InitEdgeIterator(): void;
  MoreEdge(): Standard_Boolean;
  Edge(): TopoDS_Edge;
  OnFace(): TopoDS_Face;
  OnEdge_1(E: TopoDS_Edge): Standard_Boolean;
  NextEdge(): void;
  OnVertex(Vwire: TopoDS_Vertex, Vshape: TopoDS_Vertex): Standard_Boolean;
  OnEdge_2(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real): Standard_Boolean;
  OnEdge_3(V: TopoDS_Vertex, EdgeFrom: TopoDS_Edge, E: TopoDS_Edge, P: Standard_Real): Standard_Boolean;
  IsFaceWithSection(aFace: TopoDS_Shape): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class LocOpe {
  constructor();
  Closed_1(W: TopoDS_Wire, OnF: TopoDS_Face): Standard_Boolean;
  Closed_2(E: TopoDS_Edge, OnF: TopoDS_Face): Standard_Boolean;
  TgtFaces(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): Standard_Boolean;
  SampleEdges(S: TopoDS_Shape, Pt: TColgp_SequenceOfPnt): void;
}

export declare class LocOpe_BuildShape {
  Perform(L: TopTools_ListOfShape): void;
  Shape(): TopoDS_Shape;
}

  export declare class LocOpe_BuildShape_1 extends LocOpe_BuildShape {
    constructor();
  }

  export declare class LocOpe_BuildShape_2 extends LocOpe_BuildShape {
    constructor(L: TopTools_ListOfShape);
  }

export declare class LocOpe_BuildWires {
  Perform(Ledges: TopTools_ListOfShape, PW: any): void;
  IsDone(): Standard_Boolean;
  Result(): TopTools_ListOfShape;
}

  export declare class LocOpe_BuildWires_1 extends LocOpe_BuildWires {
    constructor();
  }

  export declare class LocOpe_BuildWires_2 extends LocOpe_BuildWires {
    constructor(Ledges: TopTools_ListOfShape, PW: any);
  }

export declare class LocOpe_CSIntersector {
  Init(S: TopoDS_Shape): void;
  Perform_1(Slin: LocOpe_SequenceOfLin): void;
  Perform_2(Scir: LocOpe_SequenceOfCirc): void;
  Perform_3(Scur: TColGeom_SequenceOfCurve): void;
  IsDone(): Standard_Boolean;
  NbPoints(I: Standard_Integer): Standard_Integer;
  Point(I: Standard_Integer, Index: Standard_Integer): LocOpe_PntFace;
  LocalizeAfter_1(I: Standard_Integer, From: Standard_Real, Tol: Standard_Real, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
  LocalizeBefore_1(I: Standard_Integer, From: Standard_Real, Tol: Standard_Real, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
  LocalizeAfter_2(I: Standard_Integer, FromInd: Standard_Integer, Tol: Standard_Real, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
  LocalizeBefore_2(I: Standard_Integer, FromInd: Standard_Integer, Tol: Standard_Real, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
  Destroy(): void;
}

  export declare class LocOpe_CSIntersector_1 extends LocOpe_CSIntersector {
    constructor();
  }

  export declare class LocOpe_CSIntersector_2 extends LocOpe_CSIntersector {
    constructor(S: TopoDS_Shape);
  }

export declare class LocOpe_PntFace {
  Pnt(): gp_Pnt;
  Face(): TopoDS_Face;
  Orientation(): TopAbs_Orientation;
  ChangeOrientation(): TopAbs_Orientation;
  Parameter(): Standard_Real;
  UParameter(): Standard_Real;
  VParameter(): Standard_Real;
}

  export declare class LocOpe_PntFace_1 extends LocOpe_PntFace {
    constructor();
  }

  export declare class LocOpe_PntFace_2 extends LocOpe_PntFace {
    constructor(P: gp_Pnt, F: TopoDS_Face, Or: TopAbs_Orientation, Param: Standard_Real, UPar: Standard_Real, VPar: Standard_Real);
  }

export declare class LocOpe_CurveShapeIntersector {
  Init_1(Axis: gp_Ax1, S: TopoDS_Shape): void;
  Init_2(C: gp_Circ, S: TopoDS_Shape): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): LocOpe_PntFace;
  LocalizeAfter_1(From: Standard_Real, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
  LocalizeBefore_1(From: Standard_Real, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
  LocalizeAfter_2(FromInd: Standard_Integer, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
  LocalizeBefore_2(FromInd: Standard_Integer, Or: TopAbs_Orientation, IndFrom: Standard_Integer, IndTo: Standard_Integer): Standard_Boolean;
}

  export declare class LocOpe_CurveShapeIntersector_1 extends LocOpe_CurveShapeIntersector {
    constructor();
  }

  export declare class LocOpe_CurveShapeIntersector_2 extends LocOpe_CurveShapeIntersector {
    constructor(Axis: gp_Ax1, S: TopoDS_Shape);
  }

  export declare class LocOpe_CurveShapeIntersector_3 extends LocOpe_CurveShapeIntersector {
    constructor(C: gp_Circ, S: TopoDS_Shape);
  }

export declare class LocOpe_DPrism {
  IsDone(): Standard_Boolean;
  Spine(): TopoDS_Shape;
  Profile(): TopoDS_Shape;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  Shapes(S: TopoDS_Shape): TopTools_ListOfShape;
  Curves(SCurves: TColGeom_SequenceOfCurve): void;
  BarycCurve(): any;
}

  export declare class LocOpe_DPrism_1 extends LocOpe_DPrism {
    constructor(Spine: TopoDS_Face, Height1: Standard_Real, Height2: Standard_Real, Angle: Standard_Real);
  }

  export declare class LocOpe_DPrism_2 extends LocOpe_DPrism {
    constructor(Spine: TopoDS_Face, Height: Standard_Real, Angle: Standard_Real);
  }

export declare class LocOpe_FindEdges {
  Set(FFrom: TopoDS_Shape, FTo: TopoDS_Shape): void;
  InitIterator(): void;
  More(): Standard_Boolean;
  EdgeFrom(): TopoDS_Edge;
  EdgeTo(): TopoDS_Edge;
  Next(): void;
}

  export declare class LocOpe_FindEdges_1 extends LocOpe_FindEdges {
    constructor();
  }

  export declare class LocOpe_FindEdges_2 extends LocOpe_FindEdges {
    constructor(FFrom: TopoDS_Shape, FTo: TopoDS_Shape);
  }

export declare class LocOpe_FindEdgesInFace {
  Set(S: TopoDS_Shape, F: TopoDS_Face): void;
  Init(): void;
  More(): Standard_Boolean;
  Edge(): TopoDS_Edge;
  Next(): void;
}

  export declare class LocOpe_FindEdgesInFace_1 extends LocOpe_FindEdgesInFace {
    constructor();
  }

  export declare class LocOpe_FindEdgesInFace_2 extends LocOpe_FindEdgesInFace {
    constructor(S: TopoDS_Shape, F: TopoDS_Face);
  }

export declare class LocOpe_GeneratedShape extends Standard_Transient {
  GeneratingEdges(): TopTools_ListOfShape;
  Generated_1(V: TopoDS_Vertex): TopoDS_Edge;
  Generated_2(E: TopoDS_Edge): TopoDS_Face;
  OrientedFaces(): TopTools_ListOfShape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class LocOpe_Generator {
  Init(S: TopoDS_Shape): void;
  Perform(G: any): void;
  IsDone(): Standard_Boolean;
  ResultingShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  DescendantFace(F: TopoDS_Face): TopTools_ListOfShape;
}

  export declare class LocOpe_Generator_1 extends LocOpe_Generator {
    constructor();
  }

  export declare class LocOpe_Generator_2 extends LocOpe_Generator {
    constructor(S: TopoDS_Shape);
  }

export declare class LocOpe_GluedShape extends LocOpe_GeneratedShape {
  Init(S: TopoDS_Shape): void;
  GlueOnFace(F: TopoDS_Face): void;
  GeneratingEdges(): TopTools_ListOfShape;
  Generated_1(V: TopoDS_Vertex): TopoDS_Edge;
  Generated_2(E: TopoDS_Edge): TopoDS_Face;
  OrientedFaces(): TopTools_ListOfShape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class LocOpe_GluedShape_1 extends LocOpe_GluedShape {
    constructor();
  }

  export declare class LocOpe_GluedShape_2 extends LocOpe_GluedShape {
    constructor(S: TopoDS_Shape);
  }

export declare class LocOpe_LinearForm {
  Perform_1(Base: TopoDS_Shape, V: gp_Vec, Pnt1: gp_Pnt, Pnt2: gp_Pnt): void;
  Perform_2(Base: TopoDS_Shape, V: gp_Vec, Vectra: gp_Vec, Pnt1: gp_Pnt, Pnt2: gp_Pnt): void;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  Shapes(S: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class LocOpe_LinearForm_1 extends LocOpe_LinearForm {
    constructor();
  }

  export declare class LocOpe_LinearForm_2 extends LocOpe_LinearForm {
    constructor(Base: TopoDS_Shape, V: gp_Vec, Pnt1: gp_Pnt, Pnt2: gp_Pnt);
  }

  export declare class LocOpe_LinearForm_3 extends LocOpe_LinearForm {
    constructor(Base: TopoDS_Shape, V: gp_Vec, Vectra: gp_Vec, Pnt1: gp_Pnt, Pnt2: gp_Pnt);
  }

export declare class LocOpe_Pipe {
  constructor(Spine: TopoDS_Wire, Profile: TopoDS_Shape)
  Spine(): TopoDS_Shape;
  Profile(): TopoDS_Shape;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  Shapes(S: TopoDS_Shape): TopTools_ListOfShape;
  Curves(Spt: TColgp_SequenceOfPnt): TColGeom_SequenceOfCurve;
  BarycCurve(): any;
}

export declare class LocOpe_Prism {
  Perform_1(Base: TopoDS_Shape, V: gp_Vec): void;
  Perform_2(Base: TopoDS_Shape, V: gp_Vec, Vtra: gp_Vec): void;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  Shapes(S: TopoDS_Shape): TopTools_ListOfShape;
  Curves(SCurves: TColGeom_SequenceOfCurve): void;
  BarycCurve(): any;
}

  export declare class LocOpe_Prism_1 extends LocOpe_Prism {
    constructor();
  }

  export declare class LocOpe_Prism_2 extends LocOpe_Prism {
    constructor(Base: TopoDS_Shape, V: gp_Vec);
  }

  export declare class LocOpe_Prism_3 extends LocOpe_Prism {
    constructor(Base: TopoDS_Shape, V: gp_Vec, Vectra: gp_Vec);
  }

export declare class LocOpe_SplitDrafts {
  Init(S: TopoDS_Shape): void;
  Perform_1(F: TopoDS_Face, W: TopoDS_Wire, Extractg: gp_Dir, NPlg: gp_Pln, Angleg: Standard_Real, Extractd: gp_Dir, NPld: gp_Pln, Angled: Standard_Real, ModifyLeft: Standard_Boolean, ModifyRight: Standard_Boolean): void;
  Perform_2(F: TopoDS_Face, W: TopoDS_Wire, Extract: gp_Dir, NPl: gp_Pln, Angle: Standard_Real): void;
  IsDone(): Standard_Boolean;
  OriginalShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  ShapesFromShape(S: TopoDS_Shape): TopTools_ListOfShape;
}

  export declare class LocOpe_SplitDrafts_1 extends LocOpe_SplitDrafts {
    constructor();
  }

  export declare class LocOpe_SplitDrafts_2 extends LocOpe_SplitDrafts {
    constructor(S: TopoDS_Shape);
  }

export declare class LocOpe_SplitShape {
  Init(S: TopoDS_Shape): void;
  CanSplit(E: TopoDS_Edge): Standard_Boolean;
  Add_1(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge): void;
  Add_2(W: TopoDS_Wire, F: TopoDS_Face): Standard_Boolean;
  Add_3(Lwires: TopTools_ListOfShape, F: TopoDS_Face): Standard_Boolean;
  Shape(): TopoDS_Shape;
  DescendantShapes(S: TopoDS_Shape): TopTools_ListOfShape;
  LeftOf(W: TopoDS_Wire, F: TopoDS_Face): TopTools_ListOfShape;
}

  export declare class LocOpe_SplitShape_1 extends LocOpe_SplitShape {
    constructor();
  }

  export declare class LocOpe_SplitShape_2 extends LocOpe_SplitShape {
    constructor(S: TopoDS_Shape);
  }

export declare class Handle_LocOpe_WiresOnShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: LocOpe_WiresOnShape): void;
  get(): LocOpe_WiresOnShape;
}

  export declare class Handle_LocOpe_WiresOnShape_1 extends Handle_LocOpe_WiresOnShape {
    constructor();
  }

  export declare class Handle_LocOpe_WiresOnShape_2 extends Handle_LocOpe_WiresOnShape {
    constructor(thePtr: LocOpe_WiresOnShape);
  }

  export declare class Handle_LocOpe_WiresOnShape_3 extends Handle_LocOpe_WiresOnShape {
    constructor(theHandle: Handle_LocOpe_WiresOnShape);
  }

  export declare class Handle_LocOpe_WiresOnShape_4 extends Handle_LocOpe_WiresOnShape {
    constructor(theHandle: Handle_LocOpe_WiresOnShape);
  }

export declare class LocOpe_SequenceOfLin extends NCollection_BaseSequence {
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
  Assign(theOther: LocOpe_SequenceOfLin): LocOpe_SequenceOfLin;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Lin): void;
  Append_2(theSeq: LocOpe_SequenceOfLin): void;
  Prepend_1(theItem: gp_Lin): void;
  Prepend_2(theSeq: LocOpe_SequenceOfLin): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Lin): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfLin): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfLin): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Lin): void;
  Split(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfLin): void;
  First(): gp_Lin;
  ChangeFirst(): gp_Lin;
  Last(): gp_Lin;
  ChangeLast(): gp_Lin;
  Value(theIndex: Standard_Integer): gp_Lin;
  ChangeValue(theIndex: Standard_Integer): gp_Lin;
  SetValue(theIndex: Standard_Integer, theItem: gp_Lin): void;
}

  export declare class LocOpe_SequenceOfLin_1 extends LocOpe_SequenceOfLin {
    constructor();
  }

  export declare class LocOpe_SequenceOfLin_2 extends LocOpe_SequenceOfLin {
    constructor(theAllocator: any);
  }

  export declare class LocOpe_SequenceOfLin_3 extends LocOpe_SequenceOfLin {
    constructor(theOther: LocOpe_SequenceOfLin);
  }

export declare class LocOpe_SequenceOfCirc extends NCollection_BaseSequence {
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
  Assign(theOther: LocOpe_SequenceOfCirc): LocOpe_SequenceOfCirc;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Circ): void;
  Append_2(theSeq: LocOpe_SequenceOfCirc): void;
  Prepend_1(theItem: gp_Circ): void;
  Prepend_2(theSeq: LocOpe_SequenceOfCirc): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Circ): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfCirc): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfCirc): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Circ): void;
  Split(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfCirc): void;
  First(): gp_Circ;
  ChangeFirst(): gp_Circ;
  Last(): gp_Circ;
  ChangeLast(): gp_Circ;
  Value(theIndex: Standard_Integer): gp_Circ;
  ChangeValue(theIndex: Standard_Integer): gp_Circ;
  SetValue(theIndex: Standard_Integer, theItem: gp_Circ): void;
}

  export declare class LocOpe_SequenceOfCirc_1 extends LocOpe_SequenceOfCirc {
    constructor();
  }

  export declare class LocOpe_SequenceOfCirc_2 extends LocOpe_SequenceOfCirc {
    constructor(theAllocator: any);
  }

  export declare class LocOpe_SequenceOfCirc_3 extends LocOpe_SequenceOfCirc {
    constructor(theOther: LocOpe_SequenceOfCirc);
  }

export declare class LocOpe_SequenceOfPntFace extends NCollection_BaseSequence {
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
  Assign(theOther: LocOpe_SequenceOfPntFace): LocOpe_SequenceOfPntFace;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: LocOpe_PntFace): void;
  Append_2(theSeq: LocOpe_SequenceOfPntFace): void;
  Prepend_1(theItem: LocOpe_PntFace): void;
  Prepend_2(theSeq: LocOpe_SequenceOfPntFace): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: LocOpe_PntFace): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfPntFace): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfPntFace): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: LocOpe_PntFace): void;
  Split(theIndex: Standard_Integer, theSeq: LocOpe_SequenceOfPntFace): void;
  First(): LocOpe_PntFace;
  ChangeFirst(): LocOpe_PntFace;
  Last(): LocOpe_PntFace;
  ChangeLast(): LocOpe_PntFace;
  Value(theIndex: Standard_Integer): LocOpe_PntFace;
  ChangeValue(theIndex: Standard_Integer): LocOpe_PntFace;
  SetValue(theIndex: Standard_Integer, theItem: LocOpe_PntFace): void;
}

  export declare class LocOpe_SequenceOfPntFace_1 extends LocOpe_SequenceOfPntFace {
    constructor();
  }

  export declare class LocOpe_SequenceOfPntFace_2 extends LocOpe_SequenceOfPntFace {
    constructor(theAllocator: any);
  }

  export declare class LocOpe_SequenceOfPntFace_3 extends LocOpe_SequenceOfPntFace {
    constructor(theOther: LocOpe_SequenceOfPntFace);
  }

export declare class LocOpe_DataMapOfShapePnt extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: LocOpe_DataMapOfShapePnt): void;
  Assign(theOther: LocOpe_DataMapOfShapePnt): LocOpe_DataMapOfShapePnt;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: gp_Pnt): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: gp_Pnt): gp_Pnt;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): gp_Pnt;
  Find_1(theKey: TopoDS_Shape): gp_Pnt;
  Find_2(theKey: TopoDS_Shape, theValue: gp_Pnt): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): gp_Pnt;
  ChangeFind(theKey: TopoDS_Shape): gp_Pnt;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class LocOpe_DataMapOfShapePnt_1 extends LocOpe_DataMapOfShapePnt {
    constructor();
  }

  export declare class LocOpe_DataMapOfShapePnt_2 extends LocOpe_DataMapOfShapePnt {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class LocOpe_DataMapOfShapePnt_3 extends LocOpe_DataMapOfShapePnt {
    constructor(theOther: LocOpe_DataMapOfShapePnt);
  }

export declare class Handle_LocOpe_GeneratedShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: LocOpe_GeneratedShape): void;
  get(): LocOpe_GeneratedShape;
}

  export declare class Handle_LocOpe_GeneratedShape_1 extends Handle_LocOpe_GeneratedShape {
    constructor();
  }

  export declare class Handle_LocOpe_GeneratedShape_2 extends Handle_LocOpe_GeneratedShape {
    constructor(thePtr: LocOpe_GeneratedShape);
  }

  export declare class Handle_LocOpe_GeneratedShape_3 extends Handle_LocOpe_GeneratedShape {
    constructor(theHandle: Handle_LocOpe_GeneratedShape);
  }

  export declare class Handle_LocOpe_GeneratedShape_4 extends Handle_LocOpe_GeneratedShape {
    constructor(theHandle: Handle_LocOpe_GeneratedShape);
  }

export declare class Handle_LocOpe_GluedShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: LocOpe_GluedShape): void;
  get(): LocOpe_GluedShape;
}

  export declare class Handle_LocOpe_GluedShape_1 extends Handle_LocOpe_GluedShape {
    constructor();
  }

  export declare class Handle_LocOpe_GluedShape_2 extends Handle_LocOpe_GluedShape {
    constructor(thePtr: LocOpe_GluedShape);
  }

  export declare class Handle_LocOpe_GluedShape_3 extends Handle_LocOpe_GluedShape {
    constructor(theHandle: Handle_LocOpe_GluedShape);
  }

  export declare class Handle_LocOpe_GluedShape_4 extends Handle_LocOpe_GluedShape {
    constructor(theHandle: Handle_LocOpe_GluedShape);
  }

export declare type BRepFeat_StatusError = {
  BRepFeat_OK: {};
  BRepFeat_BadDirect: {};
  BRepFeat_BadIntersect: {};
  BRepFeat_EmptyBaryCurve: {};
  BRepFeat_EmptyCutResult: {};
  BRepFeat_FalseSide: {};
  BRepFeat_IncDirection: {};
  BRepFeat_IncSlidFace: {};
  BRepFeat_IncParameter: {};
  BRepFeat_IncTypes: {};
  BRepFeat_IntervalOverlap: {};
  BRepFeat_InvFirstShape: {};
  BRepFeat_InvOption: {};
  BRepFeat_InvShape: {};
  BRepFeat_LocOpeNotDone: {};
  BRepFeat_LocOpeInvNotDone: {};
  BRepFeat_NoExtFace: {};
  BRepFeat_NoFaceProf: {};
  BRepFeat_NoGluer: {};
  BRepFeat_NoIntersectF: {};
  BRepFeat_NoIntersectU: {};
  BRepFeat_NoParts: {};
  BRepFeat_NoProjPt: {};
  BRepFeat_NotInitialized: {};
  BRepFeat_NotYetImplemented: {};
  BRepFeat_NullRealTool: {};
  BRepFeat_NullToolF: {};
  BRepFeat_NullToolU: {};
}

export declare type BRepFeat_PerfSelection = {
  BRepFeat_NoSelection: {};
  BRepFeat_SelectionFU: {};
  BRepFeat_SelectionU: {};
  BRepFeat_SelectionSh: {};
  BRepFeat_SelectionShU: {};
}

export declare type LocOpe_Operation = {
  LocOpe_FUSE: {};
  LocOpe_CUT: {};
  LocOpe_INVALID: {};
}

export declare type BRepFeat_Status = {
  BRepFeat_NoError: {};
  BRepFeat_InvalidPlacement: {};
  BRepFeat_HoleTooLong: {};
}

export declare type TKFeatLib = {
  BRepFeat_Builder: typeof BRepFeat_Builder;
  LocOpe_Gluer_1: typeof LocOpe_Gluer_1;
  LocOpe_Gluer_2: typeof LocOpe_Gluer_2;
  BRepFeat_Gluer_1: typeof BRepFeat_Gluer_1;
  BRepFeat_Gluer_2: typeof BRepFeat_Gluer_2;
  BRepFeat_MakeCylindricalHole: typeof BRepFeat_MakeCylindricalHole;
  BRepFeat_MakeDPrism_1: typeof BRepFeat_MakeDPrism_1;
  BRepFeat_MakeDPrism_2: typeof BRepFeat_MakeDPrism_2;
  BRepFeat_MakePipe_1: typeof BRepFeat_MakePipe_1;
  BRepFeat_MakePipe_2: typeof BRepFeat_MakePipe_2;
  BRepFeat_MakePrism_1: typeof BRepFeat_MakePrism_1;
  BRepFeat_MakePrism_2: typeof BRepFeat_MakePrism_2;
  BRepFeat_MakeRevol_1: typeof BRepFeat_MakeRevol_1;
  BRepFeat_MakeRevol_2: typeof BRepFeat_MakeRevol_2;
  BRepFeat_MakeRevolutionForm_1: typeof BRepFeat_MakeRevolutionForm_1;
  BRepFeat_MakeRevolutionForm_2: typeof BRepFeat_MakeRevolutionForm_2;
  LocOpe_Spliter_1: typeof LocOpe_Spliter_1;
  LocOpe_Spliter_2: typeof LocOpe_Spliter_2;
  BRepFeat_SplitShape_1: typeof BRepFeat_SplitShape_1;
  BRepFeat_SplitShape_2: typeof BRepFeat_SplitShape_2;
  LocOpe_WiresOnShape: typeof LocOpe_WiresOnShape;
  LocOpe_BuildShape_1: typeof LocOpe_BuildShape_1;
  LocOpe_BuildShape_2: typeof LocOpe_BuildShape_2;
  LocOpe_BuildWires_1: typeof LocOpe_BuildWires_1;
  LocOpe_BuildWires_2: typeof LocOpe_BuildWires_2;
  LocOpe_CSIntersector_1: typeof LocOpe_CSIntersector_1;
  LocOpe_CSIntersector_2: typeof LocOpe_CSIntersector_2;
  LocOpe_PntFace_1: typeof LocOpe_PntFace_1;
  LocOpe_PntFace_2: typeof LocOpe_PntFace_2;
  LocOpe_CurveShapeIntersector_1: typeof LocOpe_CurveShapeIntersector_1;
  LocOpe_CurveShapeIntersector_2: typeof LocOpe_CurveShapeIntersector_2;
  LocOpe_CurveShapeIntersector_3: typeof LocOpe_CurveShapeIntersector_3;
  LocOpe_DPrism_1: typeof LocOpe_DPrism_1;
  LocOpe_DPrism_2: typeof LocOpe_DPrism_2;
  LocOpe_FindEdges_1: typeof LocOpe_FindEdges_1;
  LocOpe_FindEdges_2: typeof LocOpe_FindEdges_2;
  LocOpe_FindEdgesInFace_1: typeof LocOpe_FindEdgesInFace_1;
  LocOpe_FindEdgesInFace_2: typeof LocOpe_FindEdgesInFace_2;
  LocOpe_Generator_1: typeof LocOpe_Generator_1;
  LocOpe_Generator_2: typeof LocOpe_Generator_2;
  LocOpe_GluedShape_1: typeof LocOpe_GluedShape_1;
  LocOpe_GluedShape_2: typeof LocOpe_GluedShape_2;
  LocOpe_LinearForm_1: typeof LocOpe_LinearForm_1;
  LocOpe_LinearForm_2: typeof LocOpe_LinearForm_2;
  LocOpe_LinearForm_3: typeof LocOpe_LinearForm_3;
  LocOpe_Pipe: typeof LocOpe_Pipe;
  LocOpe_Prism_1: typeof LocOpe_Prism_1;
  LocOpe_Prism_2: typeof LocOpe_Prism_2;
  LocOpe_Prism_3: typeof LocOpe_Prism_3;
  LocOpe_SplitDrafts_1: typeof LocOpe_SplitDrafts_1;
  LocOpe_SplitDrafts_2: typeof LocOpe_SplitDrafts_2;
  LocOpe_SplitShape_1: typeof LocOpe_SplitShape_1;
  LocOpe_SplitShape_2: typeof LocOpe_SplitShape_2;
  Handle_LocOpe_WiresOnShape_1: typeof Handle_LocOpe_WiresOnShape_1;
  Handle_LocOpe_WiresOnShape_2: typeof Handle_LocOpe_WiresOnShape_2;
  Handle_LocOpe_WiresOnShape_3: typeof Handle_LocOpe_WiresOnShape_3;
  Handle_LocOpe_WiresOnShape_4: typeof Handle_LocOpe_WiresOnShape_4;
  LocOpe_SequenceOfLin_1: typeof LocOpe_SequenceOfLin_1;
  LocOpe_SequenceOfLin_2: typeof LocOpe_SequenceOfLin_2;
  LocOpe_SequenceOfLin_3: typeof LocOpe_SequenceOfLin_3;
  LocOpe_SequenceOfCirc_1: typeof LocOpe_SequenceOfCirc_1;
  LocOpe_SequenceOfCirc_2: typeof LocOpe_SequenceOfCirc_2;
  LocOpe_SequenceOfCirc_3: typeof LocOpe_SequenceOfCirc_3;
  LocOpe_SequenceOfPntFace_1: typeof LocOpe_SequenceOfPntFace_1;
  LocOpe_SequenceOfPntFace_2: typeof LocOpe_SequenceOfPntFace_2;
  LocOpe_SequenceOfPntFace_3: typeof LocOpe_SequenceOfPntFace_3;
  LocOpe_DataMapOfShapePnt_1: typeof LocOpe_DataMapOfShapePnt_1;
  LocOpe_DataMapOfShapePnt_2: typeof LocOpe_DataMapOfShapePnt_2;
  LocOpe_DataMapOfShapePnt_3: typeof LocOpe_DataMapOfShapePnt_3;
  Handle_LocOpe_GeneratedShape_1: typeof Handle_LocOpe_GeneratedShape_1;
  Handle_LocOpe_GeneratedShape_2: typeof Handle_LocOpe_GeneratedShape_2;
  Handle_LocOpe_GeneratedShape_3: typeof Handle_LocOpe_GeneratedShape_3;
  Handle_LocOpe_GeneratedShape_4: typeof Handle_LocOpe_GeneratedShape_4;
  Handle_LocOpe_GluedShape_1: typeof Handle_LocOpe_GluedShape_1;
  Handle_LocOpe_GluedShape_2: typeof Handle_LocOpe_GluedShape_2;
  Handle_LocOpe_GluedShape_3: typeof Handle_LocOpe_GluedShape_3;
  Handle_LocOpe_GluedShape_4: typeof Handle_LocOpe_GluedShape_4;
  BRepFeat_StatusError: typeof BRepFeat_StatusError;
  BRepFeat_PerfSelection: typeof BRepFeat_PerfSelection;
  LocOpe_Operation: typeof LocOpe_Operation;
  BRepFeat_Status: typeof BRepFeat_Status;
};
