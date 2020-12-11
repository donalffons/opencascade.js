declare const libName = "./modules/TKBRep.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class TopoDS_TShape extends Standard_Transient {
  Free_1(): Standard_Boolean;
  Free_2(theIsFree: Standard_Boolean): void;
  Locked_1(): Standard_Boolean;
  Locked_2(theIsLocked: Standard_Boolean): void;
  Modified_1(): Standard_Boolean;
  Modified_2(theIsModified: Standard_Boolean): void;
  Checked_1(): Standard_Boolean;
  Checked_2(theIsChecked: Standard_Boolean): void;
  Orientable_1(): Standard_Boolean;
  Orientable_2(theIsOrientable: Standard_Boolean): void;
  Closed_1(): Standard_Boolean;
  Closed_2(theIsClosed: Standard_Boolean): void;
  Infinite_1(): Standard_Boolean;
  Infinite_2(theIsInfinite: Standard_Boolean): void;
  Convex_1(): Standard_Boolean;
  Convex_2(theIsConvex: Standard_Boolean): void;
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  NbChildren(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_Shape {
  constructor()
  IsNull(): Standard_Boolean;
  Nullify(): void;
  Location_1(): TopLoc_Location;
  Location_2(theLoc: TopLoc_Location): void;
  Located(theLoc: TopLoc_Location): TopoDS_Shape;
  Orientation_1(): TopAbs_Orientation;
  Orientation_2(theOrient: TopAbs_Orientation): void;
  Oriented(theOrient: TopAbs_Orientation): TopoDS_Shape;
  TShape_1(): any;
  ShapeType(): TopAbs_ShapeEnum;
  Free_1(): Standard_Boolean;
  Free_2(theIsFree: Standard_Boolean): void;
  Locked_1(): Standard_Boolean;
  Locked_2(theIsLocked: Standard_Boolean): void;
  Modified_1(): Standard_Boolean;
  Modified_2(theIsModified: Standard_Boolean): void;
  Checked_1(): Standard_Boolean;
  Checked_2(theIsChecked: Standard_Boolean): void;
  Orientable_1(): Standard_Boolean;
  Orientable_2(theIsOrientable: Standard_Boolean): void;
  Closed_1(): Standard_Boolean;
  Closed_2(theIsClosed: Standard_Boolean): void;
  Infinite_1(): Standard_Boolean;
  Infinite_2(theIsInfinite: Standard_Boolean): void;
  Convex_1(): Standard_Boolean;
  Convex_2(theIsConvex: Standard_Boolean): void;
  Move(thePosition: TopLoc_Location): void;
  Moved(thePosition: TopLoc_Location): TopoDS_Shape;
  Reverse(): void;
  Reversed(): TopoDS_Shape;
  Complement(): void;
  Complemented(): TopoDS_Shape;
  Compose(theOrient: TopAbs_Orientation): void;
  Composed(theOrient: TopAbs_Orientation): TopoDS_Shape;
  NbChildren(): Standard_Integer;
  IsPartner(theOther: TopoDS_Shape): Standard_Boolean;
  IsSame(theOther: TopoDS_Shape): Standard_Boolean;
  IsEqual(theOther: TopoDS_Shape): Standard_Boolean;
  IsNotEqual(theOther: TopoDS_Shape): Standard_Boolean;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
  EmptyCopy(): void;
  EmptyCopied(): TopoDS_Shape;
  TShape_2(theTShape: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TopoDS_Edge extends TopoDS_Shape {
  constructor()
}

export declare class TopoDS_Face extends TopoDS_Shape {
  constructor()
}

export declare class TopoDS {
  constructor();
  Vertex_1(S: TopoDS_Shape): TopoDS_Vertex;
  Vertex_2(a0: TopoDS_Shape): TopoDS_Vertex;
  Edge_1(S: TopoDS_Shape): TopoDS_Edge;
  Edge_2(a0: TopoDS_Shape): TopoDS_Edge;
  Wire_1(S: TopoDS_Shape): TopoDS_Wire;
  Wire_2(a0: TopoDS_Shape): TopoDS_Wire;
  Face_1(S: TopoDS_Shape): TopoDS_Face;
  Face_2(a0: TopoDS_Shape): TopoDS_Face;
  Shell_1(S: TopoDS_Shape): TopoDS_Shell;
  Shell_2(a0: TopoDS_Shape): TopoDS_Shell;
  Solid_1(S: TopoDS_Shape): TopoDS_Solid;
  Solid_2(a0: TopoDS_Shape): TopoDS_Solid;
  CompSolid_1(S: TopoDS_Shape): TopoDS_CompSolid;
  CompSolid_2(a0: TopoDS_Shape): TopoDS_CompSolid;
  Compound_1(S: TopoDS_Shape): TopoDS_Compound;
  Compound_2(a0: TopoDS_Shape): TopoDS_Compound;
}

export declare class TopoDS_Vertex extends TopoDS_Shape {
  constructor()
}

export declare class TopTools_ShapeMapHasher {
  constructor();
  HashCode(theShape: TopoDS_Shape, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(S1: TopoDS_Shape, S2: TopoDS_Shape): Standard_Boolean;
}

export declare class TopoDS_Compound extends TopoDS_Shape {
  constructor()
}

export declare class TopoDS_Wire extends TopoDS_Shape {
  constructor()
}

export declare class TopoDS_AlertWithShape extends Message_Alert {
  constructor(theShape: TopoDS_Shape)
  GetShape(): TopoDS_Shape;
  SetShape(theShape: TopoDS_Shape): void;
  SupportsMerge(): Standard_Boolean;
  Merge(theTarget: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopExp {
  constructor();
  MapShapes_1(S: TopoDS_Shape, T: TopAbs_ShapeEnum, M: TopTools_IndexedMapOfShape): void;
  MapShapes_2(S: TopoDS_Shape, M: TopTools_IndexedMapOfShape): void;
  MapShapes_3(S: TopoDS_Shape, M: TopTools_MapOfShape): void;
  MapShapesAndAncestors(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum, M: TopTools_IndexedDataMapOfShapeListOfShape): void;
  MapShapesAndUniqueAncestors(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum, M: TopTools_IndexedDataMapOfShapeListOfShape, useOrientation: Standard_Boolean): void;
  FirstVertex(E: TopoDS_Edge, CumOri: Standard_Boolean): TopoDS_Vertex;
  LastVertex(E: TopoDS_Edge, CumOri: Standard_Boolean): TopoDS_Vertex;
  Vertices_1(E: TopoDS_Edge, Vfirst: TopoDS_Vertex, Vlast: TopoDS_Vertex, CumOri: Standard_Boolean): void;
  Vertices_2(W: TopoDS_Wire, Vfirst: TopoDS_Vertex, Vlast: TopoDS_Vertex): void;
  CommonVertex(E1: TopoDS_Edge, E2: TopoDS_Edge, V: TopoDS_Vertex): Standard_Boolean;
}

export declare class BRepTools_History extends Standard_Transient {
  constructor()
  IsSupportedType(theShape: TopoDS_Shape): Standard_Boolean;
  AddGenerated(theInitial: TopoDS_Shape, theGenerated: TopoDS_Shape): void;
  AddModified(theInitial: TopoDS_Shape, theModified: TopoDS_Shape): void;
  Remove(theRemoved: TopoDS_Shape): void;
  ReplaceGenerated(theInitial: TopoDS_Shape, theGenerated: TopoDS_Shape): void;
  ReplaceModified(theInitial: TopoDS_Shape, theModified: TopoDS_Shape): void;
  Clear(): void;
  Generated(theInitial: TopoDS_Shape): TopTools_ListOfShape;
  Modified(theInitial: TopoDS_Shape): TopTools_ListOfShape;
  IsRemoved(theInitial: TopoDS_Shape): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasRemoved(): Standard_Boolean;
  Merge_1(theHistory23: any): void;
  Merge_2(theHistory23: BRepTools_History): void;
  Dump(theS: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopTools_OrientedShapeMapHasher {
  constructor();
  HashCode(theShape: TopoDS_Shape, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(S1: TopoDS_Shape, S2: TopoDS_Shape): Standard_Boolean;
}

export declare class TopoDS_Solid extends TopoDS_Shape {
  constructor()
}

export declare class BRepAdaptor_Surface extends Adaptor3d_Surface {
  Initialize(F: TopoDS_Face, Restriction: Standard_Boolean): void;
  Surface(): GeomAdaptor_Surface;
  ChangeSurface(): GeomAdaptor_Surface;
  Trsf(): gp_Trsf;
  Face(): TopoDS_Face;
  Tolerance(): Standard_Real;
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

  export declare class BRepAdaptor_Surface_1 extends BRepAdaptor_Surface {
    constructor();
  }

  export declare class BRepAdaptor_Surface_2 extends BRepAdaptor_Surface {
    constructor(F: TopoDS_Face, R: Standard_Boolean);
  }

export declare class TopoDS_Builder {
  constructor();
  MakeWire(W: TopoDS_Wire): void;
  MakeShell(S: TopoDS_Shell): void;
  MakeSolid(S: TopoDS_Solid): void;
  MakeCompSolid(C: TopoDS_CompSolid): void;
  MakeCompound(C: TopoDS_Compound): void;
  Add(S: TopoDS_Shape, C: TopoDS_Shape): void;
  Remove(S: TopoDS_Shape, C: TopoDS_Shape): void;
}

export declare class TopoDS_TWire extends TopoDS_TShape {
  constructor()
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_TShell extends TopoDS_TShape {
  constructor()
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_TSolid extends TopoDS_TShape {
  constructor()
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_TCompSolid extends TopoDS_TShape {
  constructor()
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_TCompound extends TopoDS_TShape {
  constructor()
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_Shell extends TopoDS_Shape {
  constructor()
}

export declare class TopoDS_CompSolid extends TopoDS_Shape {
  constructor()
}

export declare class BRep_Builder extends TopoDS_Builder {
  constructor();
  MakeFace_1(F: TopoDS_Face): void;
  MakeFace_2(F: TopoDS_Face, S: any, Tol: Standard_Real): void;
  MakeFace_3(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  MakeFace_4(F: TopoDS_Face, T: any): void;
  UpdateFace_1(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateFace_2(F: TopoDS_Face, T: any): void;
  UpdateFace_3(F: TopoDS_Face, Tol: Standard_Real): void;
  NaturalRestriction(F: TopoDS_Face, N: Standard_Boolean): void;
  MakeEdge_1(E: TopoDS_Edge): void;
  MakeEdge_2(E: TopoDS_Edge, C: any, Tol: Standard_Real): void;
  MakeEdge_3(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): void;
  MakeEdge_4(E: TopoDS_Edge, P: any): void;
  MakeEdge_5(E: TopoDS_Edge, N: any, T: any): void;
  MakeEdge_6(E: TopoDS_Edge, N: any, T: any, L: TopLoc_Location): void;
  UpdateEdge_1(E: TopoDS_Edge, C: any, Tol: Standard_Real): void;
  UpdateEdge_2(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_3(E: TopoDS_Edge, C: any, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateEdge_4(E: TopoDS_Edge, C1: any, C2: any, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateEdge_5(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_6(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, Tol: Standard_Real, Pf: gp_Pnt2d, Pl: gp_Pnt2d): void;
  UpdateEdge_7(E: TopoDS_Edge, C1: any, C2: any, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_8(E: TopoDS_Edge, C1: any, C2: any, S: any, L: TopLoc_Location, Tol: Standard_Real, Pf: gp_Pnt2d, Pl: gp_Pnt2d): void;
  UpdateEdge_9(E: TopoDS_Edge, P: any): void;
  UpdateEdge_10(E: TopoDS_Edge, P: any, L: TopLoc_Location): void;
  UpdateEdge_11(E: TopoDS_Edge, N: any, T: any): void;
  UpdateEdge_12(E: TopoDS_Edge, N: any, T: any, L: TopLoc_Location): void;
  UpdateEdge_13(E: TopoDS_Edge, N1: any, N2: any, T: any): void;
  UpdateEdge_14(E: TopoDS_Edge, N1: any, N2: any, T: any, L: TopLoc_Location): void;
  UpdateEdge_15(E: TopoDS_Edge, P: any, S: TopoDS_Face): void;
  UpdateEdge_16(E: TopoDS_Edge, P: any, S: any, T: TopLoc_Location): void;
  UpdateEdge_17(E: TopoDS_Edge, P1: any, P2: any, S: TopoDS_Face): void;
  UpdateEdge_18(E: TopoDS_Edge, P1: any, P2: any, S: any, L: TopLoc_Location): void;
  UpdateEdge_19(E: TopoDS_Edge, Tol: Standard_Real): void;
  Continuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, C: GeomAbs_Shape): void;
  Continuity_2(E: TopoDS_Edge, S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location, C: GeomAbs_Shape): void;
  SameParameter(E: TopoDS_Edge, S: Standard_Boolean): void;
  SameRange(E: TopoDS_Edge, S: Standard_Boolean): void;
  Degenerated(E: TopoDS_Edge, D: Standard_Boolean): void;
  Range_1(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real, Only3d: Standard_Boolean): void;
  Range_2(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  Range_3(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real): void;
  Transfert_1(Ein: TopoDS_Edge, Eout: TopoDS_Edge): void;
  MakeVertex_1(V: TopoDS_Vertex): void;
  MakeVertex_2(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
  UpdateVertex_1(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
  UpdateVertex_2(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, Tol: Standard_Real): void;
  UpdateVertex_3(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateVertex_4(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateVertex_5(Ve: TopoDS_Vertex, U: Standard_Real, V: Standard_Real, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateVertex_6(V: TopoDS_Vertex, Tol: Standard_Real): void;
  Transfert_2(Ein: TopoDS_Edge, Eout: TopoDS_Edge, Vin: TopoDS_Vertex, Vout: TopoDS_Vertex): void;
}

export declare class TopoDS_TFace extends TopoDS_TShape {
  constructor()
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_TFace extends TopoDS_TFace {
  constructor()
  Surface_1(): any;
  Triangulation_1(): any;
  Location_1(): TopLoc_Location;
  Tolerance_1(): Standard_Real;
  Surface_2(S: any): void;
  Triangulation_2(T: any): void;
  Location_2(L: TopLoc_Location): void;
  Tolerance_2(T: Standard_Real): void;
  NaturalRestriction_1(): Standard_Boolean;
  NaturalRestriction_2(N: Standard_Boolean): void;
  EmptyCopy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PointRepresentation extends Standard_Transient {
  IsPointOnCurve_1(): Standard_Boolean;
  IsPointOnCurveOnSurface_1(): Standard_Boolean;
  IsPointOnSurface_1(): Standard_Boolean;
  IsPointOnCurve_2(C: any, L: TopLoc_Location): Standard_Boolean;
  IsPointOnCurveOnSurface_2(PC: any, S: any, L: TopLoc_Location): Standard_Boolean;
  IsPointOnSurface_2(S: any, L: TopLoc_Location): Standard_Boolean;
  Location_1(): TopLoc_Location;
  Location_2(L: TopLoc_Location): void;
  Parameter_1(): Standard_Real;
  Parameter_2(P: Standard_Real): void;
  Parameter2_1(): Standard_Real;
  Parameter2_2(P: Standard_Real): void;
  Curve_1(): any;
  Curve_2(C: any): void;
  PCurve_1(): any;
  PCurve_2(C: any): void;
  Surface_1(): any;
  Surface_2(S: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_TVertex extends TopoDS_TShape {
  ShapeType(): TopAbs_ShapeEnum;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_TVertex extends TopoDS_TVertex {
  constructor()
  Tolerance_1(): Standard_Real;
  Tolerance_2(T: Standard_Real): void;
  UpdateTolerance(T: Standard_Real): void;
  Pnt_1(): gp_Pnt;
  Pnt_2(P: gp_Pnt): void;
  Points(): BRep_ListOfPointRepresentation;
  ChangePoints(): BRep_ListOfPointRepresentation;
  EmptyCopy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_Tool {
  constructor();
  IsClosed_1(S: TopoDS_Shape): Standard_Boolean;
  Surface_1(F: TopoDS_Face, L: TopLoc_Location): any;
  Surface_2(F: TopoDS_Face): any;
  Triangulation(F: TopoDS_Face, L: TopLoc_Location): any;
  Tolerance_1(F: TopoDS_Face): Standard_Real;
  NaturalRestriction(F: TopoDS_Face): Standard_Boolean;
  IsGeometric_1(F: TopoDS_Face): Standard_Boolean;
  IsGeometric_2(E: TopoDS_Edge): Standard_Boolean;
  Curve_1(E: TopoDS_Edge, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): any;
  Curve_2(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): any;
  Polygon3D(E: TopoDS_Edge, L: TopLoc_Location): any;
  CurveOnSurface_1(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real, theIsStored: Standard_Boolean): any;
  CurveOnSurface_2(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real, theIsStored: Standard_Boolean): any;
  CurveOnPlane(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): any;
  CurveOnSurface_3(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  CurveOnSurface_4(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real, Index: Standard_Integer): void;
  PolygonOnSurface_1(E: TopoDS_Edge, F: TopoDS_Face): any;
  PolygonOnSurface_2(E: TopoDS_Edge, S: any, L: TopLoc_Location): any;
  PolygonOnSurface_3(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location): void;
  PolygonOnSurface_4(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, Index: Standard_Integer): void;
  PolygonOnTriangulation_1(E: TopoDS_Edge, T: any, L: TopLoc_Location): any;
  PolygonOnTriangulation_2(E: TopoDS_Edge, P: any, T: any, L: TopLoc_Location): void;
  PolygonOnTriangulation_3(E: TopoDS_Edge, P: any, T: any, L: TopLoc_Location, Index: Standard_Integer): void;
  IsClosed_2(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  IsClosed_3(E: TopoDS_Edge, S: any, L: TopLoc_Location): Standard_Boolean;
  IsClosed_4(E: TopoDS_Edge, T: any, L: TopLoc_Location): Standard_Boolean;
  Tolerance_2(E: TopoDS_Edge): Standard_Real;
  SameParameter(E: TopoDS_Edge): Standard_Boolean;
  SameRange(E: TopoDS_Edge): Standard_Boolean;
  Degenerated(E: TopoDS_Edge): Standard_Boolean;
  Range_1(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): void;
  Range_2(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  Range_3(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real): void;
  UVPoints_1(E: TopoDS_Edge, S: any, L: TopLoc_Location, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  UVPoints_2(E: TopoDS_Edge, F: TopoDS_Face, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  SetUVPoints_1(E: TopoDS_Edge, S: any, L: TopLoc_Location, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  SetUVPoints_2(E: TopoDS_Edge, F: TopoDS_Face, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  HasContinuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): Standard_Boolean;
  Continuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): GeomAbs_Shape;
  HasContinuity_2(E: TopoDS_Edge, S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location): Standard_Boolean;
  Continuity_2(E: TopoDS_Edge, S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location): GeomAbs_Shape;
  HasContinuity_3(E: TopoDS_Edge): Standard_Boolean;
  MaxContinuity(theEdge: TopoDS_Edge): GeomAbs_Shape;
  Pnt(V: TopoDS_Vertex): gp_Pnt;
  Tolerance_3(V: TopoDS_Vertex): Standard_Real;
  Parameter_1(theV: TopoDS_Vertex, theE: TopoDS_Edge, theParam: Standard_Real): Standard_Boolean;
  Parameter_2(V: TopoDS_Vertex, E: TopoDS_Edge): Standard_Real;
  Parameter_3(V: TopoDS_Vertex, E: TopoDS_Edge, F: TopoDS_Face): Standard_Real;
  Parameter_4(V: TopoDS_Vertex, E: TopoDS_Edge, S: any, L: TopLoc_Location): Standard_Real;
  Parameters(V: TopoDS_Vertex, F: TopoDS_Face): gp_Pnt2d;
  MaxTolerance(theShape: TopoDS_Shape, theSubShape: TopAbs_ShapeEnum): Standard_Real;
}

export declare class BRep_CurveRepresentation extends Standard_Transient {
  IsCurve3D(): Standard_Boolean;
  IsCurveOnSurface_1(): Standard_Boolean;
  IsRegularity_1(): Standard_Boolean;
  IsCurveOnClosedSurface(): Standard_Boolean;
  IsCurveOnSurface_2(S: any, L: TopLoc_Location): Standard_Boolean;
  IsRegularity_2(S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location): Standard_Boolean;
  IsPolygon3D(): Standard_Boolean;
  IsPolygonOnTriangulation_1(): Standard_Boolean;
  IsPolygonOnTriangulation_2(T: any, L: TopLoc_Location): Standard_Boolean;
  IsPolygonOnClosedTriangulation(): Standard_Boolean;
  IsPolygonOnSurface_1(): Standard_Boolean;
  IsPolygonOnSurface_2(S: any, L: TopLoc_Location): Standard_Boolean;
  IsPolygonOnClosedSurface(): Standard_Boolean;
  Location_1(): TopLoc_Location;
  Location_2(L: TopLoc_Location): void;
  Curve3D_1(): any;
  Curve3D_2(C: any): void;
  Surface(): any;
  PCurve_1(): any;
  PCurve_2(C: any): void;
  PCurve2_1(): any;
  PCurve2_2(C: any): void;
  Polygon3D_1(): any;
  Polygon3D_2(P: any): void;
  Polygon_1(): any;
  Polygon_2(P: any): void;
  Polygon2_1(): any;
  Polygon2_2(P: any): void;
  Triangulation(): any;
  PolygonOnTriangulation_1(): any;
  PolygonOnTriangulation_2(P: any): void;
  PolygonOnTriangulation2_1(): any;
  PolygonOnTriangulation2_2(P2: any): void;
  Surface2(): any;
  Location2(): TopLoc_Location;
  Continuity_1(): GeomAbs_Shape;
  Continuity_2(C: GeomAbs_Shape): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_GCurve extends BRep_CurveRepresentation {
  SetRange(First: Standard_Real, Last: Standard_Real): void;
  Range(First: Standard_Real, Last: Standard_Real): void;
  First_1(): Standard_Real;
  Last_1(): Standard_Real;
  First_2(F: Standard_Real): void;
  Last_2(L: Standard_Real): void;
  D0(U: Standard_Real, P: gp_Pnt): void;
  Update(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_Curve3D extends BRep_GCurve {
  constructor(C: any, L: TopLoc_Location)
  D0(U: Standard_Real, P: gp_Pnt): void;
  IsCurve3D(): Standard_Boolean;
  Curve3D_1(): any;
  Curve3D_2(C: any): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_CurveOn2Surfaces extends BRep_CurveRepresentation {
  constructor(S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location, C: GeomAbs_Shape)
  IsRegularity_1(): Standard_Boolean;
  IsRegularity_2(S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location): Standard_Boolean;
  D0(U: Standard_Real, P: gp_Pnt): void;
  Surface(): any;
  Surface2(): any;
  Location2(): TopLoc_Location;
  Continuity_1(): GeomAbs_Shape;
  Continuity_2(C: GeomAbs_Shape): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_CurveOnSurface extends BRep_GCurve {
  constructor(PC: any, S: any, L: TopLoc_Location)
  SetUVPoints(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  UVPoints(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  D0(U: Standard_Real, P: gp_Pnt): void;
  IsCurveOnSurface_1(): Standard_Boolean;
  IsCurveOnSurface_2(S: any, L: TopLoc_Location): Standard_Boolean;
  Surface(): any;
  PCurve_1(): any;
  PCurve_2(C: any): void;
  Copy(): any;
  Update(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_CurveOnClosedSurface extends BRep_CurveOnSurface {
  constructor(PC1: any, PC2: any, S: any, L: TopLoc_Location, C: GeomAbs_Shape)
  SetUVPoints2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  UVPoints2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  IsCurveOnClosedSurface(): Standard_Boolean;
  IsRegularity_1(): Standard_Boolean;
  IsRegularity_2(S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location): Standard_Boolean;
  PCurve2_1(): any;
  Surface2(): any;
  Location2(): TopLoc_Location;
  Continuity_1(): GeomAbs_Shape;
  Continuity_2(C: GeomAbs_Shape): void;
  PCurve2_2(C: any): void;
  Copy(): any;
  Update(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PointOnCurve extends BRep_PointRepresentation {
  constructor(P: Standard_Real, C: any, L: TopLoc_Location)
  IsPointOnCurve_1(): Standard_Boolean;
  IsPointOnCurve_2(C: any, L: TopLoc_Location): Standard_Boolean;
  Curve_1(): any;
  Curve_2(C: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PointsOnSurface extends BRep_PointRepresentation {
  Surface_1(): any;
  Surface_2(S: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PointOnCurveOnSurface extends BRep_PointsOnSurface {
  constructor(P: Standard_Real, C: any, S: any, L: TopLoc_Location)
  IsPointOnCurveOnSurface_1(): Standard_Boolean;
  IsPointOnCurveOnSurface_2(PC: any, S: any, L: TopLoc_Location): Standard_Boolean;
  PCurve_1(): any;
  PCurve_2(C: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PointOnSurface extends BRep_PointsOnSurface {
  constructor(P1: Standard_Real, P2: Standard_Real, S: any, L: TopLoc_Location)
  IsPointOnSurface_1(): Standard_Boolean;
  IsPointOnSurface_2(S: any, L: TopLoc_Location): Standard_Boolean;
  Parameter2_1(): Standard_Real;
  Parameter2_2(P: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_Polygon3D extends BRep_CurveRepresentation {
  constructor(P: any, L: TopLoc_Location)
  IsPolygon3D(): Standard_Boolean;
  Polygon3D_1(): any;
  Polygon3D_2(P: any): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PolygonOnSurface extends BRep_CurveRepresentation {
  constructor(P: any, S: any, L: TopLoc_Location)
  IsPolygonOnSurface_1(): Standard_Boolean;
  IsPolygonOnSurface_2(S: any, L: TopLoc_Location): Standard_Boolean;
  Surface(): any;
  Polygon_1(): any;
  Polygon_2(P: any): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PolygonOnClosedSurface extends BRep_PolygonOnSurface {
  constructor(P1: any, P2: any, S: any, L: TopLoc_Location)
  IsPolygonOnClosedSurface(): Standard_Boolean;
  Polygon2_1(): any;
  Polygon2_2(P: any): void;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PolygonOnTriangulation extends BRep_CurveRepresentation {
  constructor(P: any, T: any, L: TopLoc_Location)
  IsPolygonOnTriangulation_1(): Standard_Boolean;
  IsPolygonOnTriangulation_2(T: any, L: TopLoc_Location): Standard_Boolean;
  PolygonOnTriangulation_1(P: any): void;
  Triangulation(): any;
  PolygonOnTriangulation_2(): any;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_PolygonOnClosedTriangulation extends BRep_PolygonOnTriangulation {
  constructor(P1: any, P2: any, Tr: any, L: TopLoc_Location)
  IsPolygonOnClosedTriangulation(): Standard_Boolean;
  PolygonOnTriangulation2_1(P2: any): void;
  PolygonOnTriangulation2_2(): any;
  Copy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopoDS_TEdge extends TopoDS_TShape {
  ShapeType(): TopAbs_ShapeEnum;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRep_TEdge extends TopoDS_TEdge {
  constructor()
  Tolerance_1(): Standard_Real;
  Tolerance_2(T: Standard_Real): void;
  UpdateTolerance(T: Standard_Real): void;
  SameParameter_1(): Standard_Boolean;
  SameParameter_2(S: Standard_Boolean): void;
  SameRange_1(): Standard_Boolean;
  SameRange_2(S: Standard_Boolean): void;
  Degenerated_1(): Standard_Boolean;
  Degenerated_2(S: Standard_Boolean): void;
  Curves(): BRep_ListOfCurveRepresentation;
  ChangeCurves(): BRep_ListOfCurveRepresentation;
  EmptyCopy(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepAdaptor_Curve extends Adaptor3d_Curve {
  Reset(): void;
  Initialize_1(E: TopoDS_Edge): void;
  Initialize_2(E: TopoDS_Edge, F: TopoDS_Face): void;
  Trsf(): gp_Trsf;
  Is3DCurve(): Standard_Boolean;
  IsCurveOnSurface(): Standard_Boolean;
  Curve(): GeomAdaptor_Curve;
  CurveOnSurface(): Adaptor3d_CurveOnSurface;
  Edge(): TopoDS_Edge;
  Tolerance(): Standard_Real;
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

  export declare class BRepAdaptor_Curve_1 extends BRepAdaptor_Curve {
    constructor();
  }

  export declare class BRepAdaptor_Curve_2 extends BRepAdaptor_Curve {
    constructor(E: TopoDS_Edge);
  }

  export declare class BRepAdaptor_Curve_3 extends BRepAdaptor_Curve {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class BRepAdaptor_CompCurve extends Adaptor3d_Curve {
  Initialize_1(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean): void;
  Initialize_2(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): void;
  Wire(): TopoDS_Wire;
  Edge(U: Standard_Real, E: TopoDS_Edge, UonE: Standard_Real): void;
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

  export declare class BRepAdaptor_CompCurve_1 extends BRepAdaptor_CompCurve {
    constructor();
  }

  export declare class BRepAdaptor_CompCurve_2 extends BRepAdaptor_CompCurve {
    constructor(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean);
  }

  export declare class BRepAdaptor_CompCurve_3 extends BRepAdaptor_CompCurve {
    constructor(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real);
  }

export declare class BRepAdaptor_Curve2d extends Geom2dAdaptor_Curve {
  Initialize(E: TopoDS_Edge, F: TopoDS_Face): void;
  Edge(): TopoDS_Edge;
  Face(): TopoDS_Face;
}

  export declare class BRepAdaptor_Curve2d_1 extends BRepAdaptor_Curve2d {
    constructor();
  }

  export declare class BRepAdaptor_Curve2d_2 extends BRepAdaptor_Curve2d {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class BRepAdaptor_HCompCurve extends Adaptor3d_HCurve {
  Set(C: BRepAdaptor_CompCurve): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): BRepAdaptor_CompCurve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepAdaptor_HCompCurve_1 extends BRepAdaptor_HCompCurve {
    constructor();
  }

  export declare class BRepAdaptor_HCompCurve_2 extends BRepAdaptor_HCompCurve {
    constructor(C: BRepAdaptor_CompCurve);
  }

export declare class BRepAdaptor_HCurve extends Adaptor3d_HCurve {
  Set(C: BRepAdaptor_Curve): void;
  Curve(): Adaptor3d_Curve;
  GetCurve(): Adaptor3d_Curve;
  ChangeCurve(): BRepAdaptor_Curve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepAdaptor_HCurve_1 extends BRepAdaptor_HCurve {
    constructor();
  }

  export declare class BRepAdaptor_HCurve_2 extends BRepAdaptor_HCurve {
    constructor(C: BRepAdaptor_Curve);
  }

export declare class BRepAdaptor_HCurve2d extends Adaptor2d_HCurve2d {
  Set(C: BRepAdaptor_Curve2d): void;
  Curve2d(): Adaptor2d_Curve2d;
  ChangeCurve2d(): BRepAdaptor_Curve2d;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepAdaptor_HCurve2d_1 extends BRepAdaptor_HCurve2d {
    constructor();
  }

  export declare class BRepAdaptor_HCurve2d_2 extends BRepAdaptor_HCurve2d {
    constructor(C: BRepAdaptor_Curve2d);
  }

export declare class BRepAdaptor_HSurface extends Adaptor3d_HSurface {
  Set(S: BRepAdaptor_Surface): void;
  Surface(): Adaptor3d_Surface;
  ChangeSurface(): BRepAdaptor_Surface;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepAdaptor_HSurface_1 extends BRepAdaptor_HSurface {
    constructor();
  }

  export declare class BRepAdaptor_HSurface_2 extends BRepAdaptor_HSurface {
    constructor(S: BRepAdaptor_Surface);
  }

export declare class BRepTools_Modifier {
  Init(S: TopoDS_Shape): void;
  Perform(M: any, theProgress: Message_ProgressRange): void;
  IsDone(): Standard_Boolean;
  IsMutableInput(): Standard_Boolean;
  SetMutableInput(theMutableInput: Standard_Boolean): void;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
}

  export declare class BRepTools_Modifier_1 extends BRepTools_Modifier {
    constructor(theMutableInput: Standard_Boolean);
  }

  export declare class BRepTools_Modifier_2 extends BRepTools_Modifier {
    constructor(S: TopoDS_Shape);
  }

  export declare class BRepTools_Modifier_3 extends BRepTools_Modifier {
    constructor(S: TopoDS_Shape, M: any);
  }

export declare class BRepTools_ReShape extends Standard_Transient {
  constructor()
  Clear(): void;
  Remove(shape: TopoDS_Shape): void;
  Replace(shape: TopoDS_Shape, newshape: TopoDS_Shape): void;
  IsRecorded(shape: TopoDS_Shape): Standard_Boolean;
  Value(shape: TopoDS_Shape): TopoDS_Shape;
  Status(shape: TopoDS_Shape, newsh: TopoDS_Shape, last: Standard_Boolean): Standard_Integer;
  Apply(shape: TopoDS_Shape, until: TopAbs_ShapeEnum): TopoDS_Shape;
  ModeConsiderLocation(): Standard_Boolean;
  CopyVertex_1(theV: TopoDS_Vertex, theTol: Standard_Real): TopoDS_Vertex;
  CopyVertex_2(theV: TopoDS_Vertex, theNewPos: gp_Pnt, aTol: Standard_Real): TopoDS_Vertex;
  IsNewShape(theShape: TopoDS_Shape): Standard_Boolean;
  History(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TopExp_Explorer {
  Init(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
  Current(): TopoDS_Shape;
  ReInit(): void;
  Depth(): Standard_Integer;
  Clear(): void;
  Destroy(): void;
}

  export declare class TopExp_Explorer_1 extends TopExp_Explorer {
    constructor();
  }

  export declare class TopExp_Explorer_2 extends TopExp_Explorer {
    constructor(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum);
  }

export declare class TopoDS_Iterator {
  Initialize(S: TopoDS_Shape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
}

  export declare class TopoDS_Iterator_1 extends TopoDS_Iterator {
    constructor();
  }

  export declare class TopoDS_Iterator_2 extends TopoDS_Iterator {
    constructor(S: TopoDS_Shape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean);
  }

export declare class BRepTools_WireExplorer {
  Init_1(W: TopoDS_Wire): void;
  Init_2(W: TopoDS_Wire, F: TopoDS_Face): void;
  Init_3(W: TopoDS_Wire, F: TopoDS_Face, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Edge;
  Orientation(): TopAbs_Orientation;
  CurrentVertex(): TopoDS_Vertex;
  Clear(): void;
}

  export declare class BRepTools_WireExplorer_1 extends BRepTools_WireExplorer {
    constructor();
  }

  export declare class BRepTools_WireExplorer_2 extends BRepTools_WireExplorer {
    constructor(W: TopoDS_Wire);
  }

  export declare class BRepTools_WireExplorer_3 extends BRepTools_WireExplorer {
    constructor(W: TopoDS_Wire, F: TopoDS_Face);
  }

export declare class BRepLProp {
  constructor();
  Continuity_1(C1: BRepAdaptor_Curve, C2: BRepAdaptor_Curve, u1: Standard_Real, u2: Standard_Real, tl: Standard_Real, ta: Standard_Real): GeomAbs_Shape;
  Continuity_2(C1: BRepAdaptor_Curve, C2: BRepAdaptor_Curve, u1: Standard_Real, u2: Standard_Real): GeomAbs_Shape;
}

export declare class BRepLProp_CLProps {
  SetParameter(U: Standard_Real): void;
  SetCurve(C: BRepAdaptor_Curve): void;
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

  export declare class BRepLProp_CLProps_1 extends BRepLProp_CLProps {
    constructor(C: BRepAdaptor_Curve, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class BRepLProp_CLProps_2 extends BRepLProp_CLProps {
    constructor(C: BRepAdaptor_Curve, U: Standard_Real, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class BRepLProp_CLProps_3 extends BRepLProp_CLProps {
    constructor(N: Standard_Integer, Resolution: Standard_Real);
  }

export declare class BRepLProp_CurveTool {
  constructor();
  Value(C: BRepAdaptor_Curve, U: Standard_Real, P: gp_Pnt): void;
  D1(C: BRepAdaptor_Curve, U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(C: BRepAdaptor_Curve, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(C: BRepAdaptor_Curve, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  Continuity(C: BRepAdaptor_Curve): Standard_Integer;
  FirstParameter(C: BRepAdaptor_Curve): Standard_Real;
  LastParameter(C: BRepAdaptor_Curve): Standard_Real;
}

export declare class BRepLProp_SLProps {
  SetSurface(S: BRepAdaptor_Surface): void;
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

  export declare class BRepLProp_SLProps_1 extends BRepLProp_SLProps {
    constructor(S: BRepAdaptor_Surface, U: Standard_Real, V: Standard_Real, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class BRepLProp_SLProps_2 extends BRepLProp_SLProps {
    constructor(S: BRepAdaptor_Surface, N: Standard_Integer, Resolution: Standard_Real);
  }

  export declare class BRepLProp_SLProps_3 extends BRepLProp_SLProps {
    constructor(N: Standard_Integer, Resolution: Standard_Real);
  }

export declare class BRepLProp_SurfaceTool {
  constructor();
  Value(S: BRepAdaptor_Surface, U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(S: BRepAdaptor_Surface, U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(S: BRepAdaptor_Surface, U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, DUV: gp_Vec): void;
  DN(S: BRepAdaptor_Surface, U: Standard_Real, V: Standard_Real, IU: Standard_Integer, IV: Standard_Integer): gp_Vec;
  Continuity(S: BRepAdaptor_Surface): Standard_Integer;
  Bounds(S: BRepAdaptor_Surface, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
}

export declare class BRepTools_Modification extends Standard_Transient {
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewTriangulation(F: TopoDS_Face, T: any): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPolygon(E: TopoDS_Edge, P: any): Standard_Boolean;
  NewPolygonOnTriangulation(E: TopoDS_Edge, F: TopoDS_Face, P: any): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepTools {
  constructor();
  UVBounds_1(F: TopoDS_Face, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  UVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  UVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  AddUVBounds_1(F: TopoDS_Face, B: Bnd_Box2d): void;
  AddUVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, B: Bnd_Box2d): void;
  AddUVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, B: Bnd_Box2d): void;
  Update_1(V: TopoDS_Vertex): void;
  Update_2(E: TopoDS_Edge): void;
  Update_3(W: TopoDS_Wire): void;
  Update_4(F: TopoDS_Face): void;
  Update_5(S: TopoDS_Shell): void;
  Update_6(S: TopoDS_Solid): void;
  Update_7(C: TopoDS_CompSolid): void;
  Update_8(C: TopoDS_Compound): void;
  Update_9(S: TopoDS_Shape): void;
  UpdateFaceUVPoints(theF: TopoDS_Face): void;
  Clean(S: TopoDS_Shape): void;
  CleanGeometry(theShape: TopoDS_Shape): void;
  RemoveUnusedPCurves(S: TopoDS_Shape): void;
  Triangulation(theShape: TopoDS_Shape, theLinDefl: Standard_Real, theToCheckFreeEdges: Standard_Boolean): Standard_Boolean;
  Compare_1(V1: TopoDS_Vertex, V2: TopoDS_Vertex): Standard_Boolean;
  Compare_2(E1: TopoDS_Edge, E2: TopoDS_Edge): Standard_Boolean;
  OuterWire(F: TopoDS_Face): TopoDS_Wire;
  Map3DEdges(S: TopoDS_Shape, M: TopTools_IndexedMapOfShape): void;
  IsReallyClosed(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  DetectClosedness(theFace: TopoDS_Face, theUclosed: Standard_Boolean, theVclosed: Standard_Boolean): void;
  Dump(Sh: TopoDS_Shape, S: Standard_OStream): void;
  Write_1(Sh: TopoDS_Shape, S: Standard_OStream, theProgress: Message_ProgressRange): void;
  Read_1(Sh: TopoDS_Shape, S: Standard_IStream, B: BRep_Builder, theProgress: Message_ProgressRange): void;
  Write_2(Sh: TopoDS_Shape, File: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  Read_2(Sh: TopoDS_Shape, File: Standard_CString, B: BRep_Builder, theProgress: Message_ProgressRange): Standard_Boolean;
  EvalAndUpdateTol(theE: TopoDS_Edge, theC3d: any, theC2d: any, theS: any, theF: Standard_Real, theL: Standard_Real): Standard_Real;
  OriEdgeInFace(theEdge: TopoDS_Edge, theFace: TopoDS_Face): TopAbs_Orientation;
  RemoveInternals(theS: TopoDS_Shape, theForce: Standard_Boolean): void;
}

export declare class BRepTools_GTrsfModification extends BRepTools_Modification {
  constructor(T: gp_GTrsf)
  GTrsf(): gp_GTrsf;
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

export declare class BRepTools_NurbsConvertModification extends BRepTools_Modification {
  constructor()
  NewSurface(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real, RevWires: Standard_Boolean, RevFace: Standard_Boolean): Standard_Boolean;
  NewCurve(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): Standard_Boolean;
  NewPoint(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): Standard_Boolean;
  NewCurve2d(E: TopoDS_Edge, F: TopoDS_Face, NewE: TopoDS_Edge, NewF: TopoDS_Face, C: any, Tol: Standard_Real): Standard_Boolean;
  NewParameter(V: TopoDS_Vertex, E: TopoDS_Edge, P: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  Continuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, NewE: TopoDS_Edge, NewF1: TopoDS_Face, NewF2: TopoDS_Face): GeomAbs_Shape;
  GetUpdatedEdges(): TopTools_ListOfShape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepTools_Quilt {
  constructor()
  Bind_1(Eold: TopoDS_Edge, Enew: TopoDS_Edge): void;
  Bind_2(Vold: TopoDS_Vertex, Vnew: TopoDS_Vertex): void;
  Add(S: TopoDS_Shape): void;
  IsCopied(S: TopoDS_Shape): Standard_Boolean;
  Copy(S: TopoDS_Shape): TopoDS_Shape;
  Shells(): TopoDS_Shape;
}

export declare class TopTools_LocationSet {
  constructor()
  Clear(): void;
  Add(L: TopLoc_Location): Standard_Integer;
  Location(I: Standard_Integer): TopLoc_Location;
  Index(L: TopLoc_Location): Standard_Integer;
  Dump(OS: Standard_OStream): void;
  Write(OS: Standard_OStream, theProgress: Message_ProgressRange): void;
  Read(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
}

export declare class TopTools_ShapeSet {
  constructor()
  SetFormatNb(theFormatNb: Standard_Integer): void;
  FormatNb(): Standard_Integer;
  Clear(): void;
  Add(S: TopoDS_Shape): Standard_Integer;
  Shape(I: Standard_Integer): TopoDS_Shape;
  Index(S: TopoDS_Shape): Standard_Integer;
  Locations(): TopTools_LocationSet;
  ChangeLocations(): TopTools_LocationSet;
  DumpExtent_2(S: TCollection_AsciiString): void;
  Dump_1(OS: Standard_OStream): void;
  Write_1(OS: Standard_OStream, theProgress: Message_ProgressRange): void;
  Read_1(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  Dump_2(S: TopoDS_Shape, OS: Standard_OStream): void;
  Write_2(S: TopoDS_Shape, OS: Standard_OStream): void;
  Read_2(S: TopoDS_Shape, IS: Standard_IStream): void;
  AddGeometry(S: TopoDS_Shape): void;
  DumpGeometry_1(OS: Standard_OStream): void;
  WriteGeometry_1(OS: Standard_OStream, theProgress: Message_ProgressRange): void;
  ReadGeometry_1(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  DumpGeometry_2(S: TopoDS_Shape, OS: Standard_OStream): void;
  WriteGeometry_2(S: TopoDS_Shape, OS: Standard_OStream): void;
  ReadGeometry_2(T: TopAbs_ShapeEnum, IS: Standard_IStream, S: TopoDS_Shape): void;
  AddShapes(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  Check(T: TopAbs_ShapeEnum, S: TopoDS_Shape): void;
  NbShapes(): Standard_Integer;
}

export declare class BRepTools_ShapeSet extends TopTools_ShapeSet {
  Clear(): void;
  AddGeometry(S: TopoDS_Shape): void;
  DumpGeometry_1(OS: Standard_OStream): void;
  WriteGeometry_1(OS: Standard_OStream, theProgress: Message_ProgressRange): void;
  ReadGeometry_1(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  DumpGeometry_2(S: TopoDS_Shape, OS: Standard_OStream): void;
  WriteGeometry_2(S: TopoDS_Shape, OS: Standard_OStream): void;
  ReadGeometry_2(T: TopAbs_ShapeEnum, IS: Standard_IStream, S: TopoDS_Shape): void;
  AddShapes(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  Check(T: TopAbs_ShapeEnum, S: TopoDS_Shape): void;
  ReadPolygon3D(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  WritePolygon3D(OS: Standard_OStream, Compact: Standard_Boolean, theProgress: Message_ProgressRange): void;
  DumpPolygon3D(OS: Standard_OStream): void;
  ReadTriangulation(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  WriteTriangulation(OS: Standard_OStream, Compact: Standard_Boolean, theProgress: Message_ProgressRange): void;
  DumpTriangulation(OS: Standard_OStream): void;
  ReadPolygonOnTriangulation(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  WritePolygonOnTriangulation(OS: Standard_OStream, Compact: Standard_Boolean, theProgress: Message_ProgressRange): void;
  DumpPolygonOnTriangulation(OS: Standard_OStream): void;
}

  export declare class BRepTools_ShapeSet_1 extends BRepTools_ShapeSet {
    constructor(isWithTriangles: Standard_Boolean);
  }

  export declare class BRepTools_ShapeSet_2 extends BRepTools_ShapeSet {
    constructor(B: BRep_Builder, isWithTriangles: Standard_Boolean);
  }

export declare class BRepTools_Substitution {
  constructor()
  Clear(): void;
  Substitute(OldShape: TopoDS_Shape, NewShapes: TopTools_ListOfShape): void;
  Build(S: TopoDS_Shape): void;
  IsCopied(S: TopoDS_Shape): Standard_Boolean;
  Copy(S: TopoDS_Shape): TopTools_ListOfShape;
}

export declare class BRepTools_TrsfModification extends BRepTools_Modification {
  constructor(T: gp_Trsf)
  Trsf(): gp_Trsf;
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

export declare class TopTools {
  constructor();
  Dump(Sh: TopoDS_Shape, S: Standard_OStream): void;
  Dummy(I: Standard_Integer): void;
}

export declare class TopTools_MutexForShapeProvider {
  constructor()
  CreateMutexesForSubShapes(theShape: TopoDS_Shape, theType: TopAbs_ShapeEnum): void;
  CreateMutexForShape(theShape: TopoDS_Shape): void;
  GetMutex(theShape: TopoDS_Shape): Standard_Mutex;
  RemoveAllMutexes(): void;
}

export declare class TopoDS_AlertAttribute {
  constructor(theShape: TopoDS_Shape, theName: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetShape(): TopoDS_Shape;
  Send(theMessenger: any, theShape: TopoDS_Shape): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TopoDS_FrozenShape extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopoDS_FrozenShape_1 extends TopoDS_FrozenShape {
    constructor();
  }

  export declare class TopoDS_FrozenShape_2 extends TopoDS_FrozenShape {
    constructor(theMessage: Standard_CString);
  }

export declare class TopoDS_HShape extends Standard_Transient {
  Shape_1(aShape: TopoDS_Shape): void;
  Shape_2(): TopoDS_Shape;
  ChangeShape(): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopoDS_HShape_1 extends TopoDS_HShape {
    constructor();
  }

  export declare class TopoDS_HShape_2 extends TopoDS_HShape {
    constructor(aShape: TopoDS_Shape);
  }

export declare class TopoDS_LockedShape extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopoDS_LockedShape_1 extends TopoDS_LockedShape {
    constructor();
  }

  export declare class TopoDS_LockedShape_2 extends TopoDS_LockedShape {
    constructor(theMessage: Standard_CString);
  }

export declare class TopoDS_UnCompatibleShapes extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopoDS_UnCompatibleShapes_1 extends TopoDS_UnCompatibleShapes {
    constructor();
  }

  export declare class TopoDS_UnCompatibleShapes_2 extends TopoDS_UnCompatibleShapes {
    constructor(theMessage: Standard_CString);
  }

export declare class Handle_TopoDS_TShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TShape): void;
  get(): TopoDS_TShape;
}

  export declare class Handle_TopoDS_TShape_1 extends Handle_TopoDS_TShape {
    constructor();
  }

  export declare class Handle_TopoDS_TShape_2 extends Handle_TopoDS_TShape {
    constructor(thePtr: TopoDS_TShape);
  }

  export declare class Handle_TopoDS_TShape_3 extends Handle_TopoDS_TShape {
    constructor(theHandle: Handle_TopoDS_TShape);
  }

  export declare class Handle_TopoDS_TShape_4 extends Handle_TopoDS_TShape {
    constructor(theHandle: Handle_TopoDS_TShape);
  }

export declare class TopTools_DataMapOfIntegerListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfIntegerListOfShape): void;
  Assign(theOther: TopTools_DataMapOfIntegerListOfShape): TopTools_DataMapOfIntegerListOfShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopTools_ListOfShape): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopTools_ListOfShape): TopTools_ListOfShape;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopTools_ListOfShape;
  Find_1(theKey: Standard_Integer): TopTools_ListOfShape;
  Find_2(theKey: Standard_Integer, theValue: TopTools_ListOfShape): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopTools_ListOfShape;
  ChangeFind(theKey: Standard_Integer): TopTools_ListOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfIntegerListOfShape_1 extends TopTools_DataMapOfIntegerListOfShape {
    constructor();
  }

  export declare class TopTools_DataMapOfIntegerListOfShape_2 extends TopTools_DataMapOfIntegerListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfIntegerListOfShape_3 extends TopTools_DataMapOfIntegerListOfShape {
    constructor(theOther: TopTools_DataMapOfIntegerListOfShape);
  }

export declare class TopTools_MapOfShape extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_MapOfShape): void;
  Assign(theOther: TopTools_MapOfShape): TopTools_MapOfShape;
  ReSize(N: Standard_Integer): void;
  Add(K: TopoDS_Shape): Standard_Boolean;
  Added(K: TopoDS_Shape): TopoDS_Shape;
  Contains_1(K: TopoDS_Shape): Standard_Boolean;
  Remove(K: TopoDS_Shape): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TopTools_MapOfShape): Standard_Boolean;
  Contains_2(theOther: TopTools_MapOfShape): Standard_Boolean;
  Union(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Unite(theOther: TopTools_MapOfShape): Standard_Boolean;
  HasIntersection(theMap: TopTools_MapOfShape): Standard_Boolean;
  Intersection(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Intersect(theOther: TopTools_MapOfShape): Standard_Boolean;
  Subtraction(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Subtract(theOther: TopTools_MapOfShape): Standard_Boolean;
  Difference(theLeft: TopTools_MapOfShape, theRight: TopTools_MapOfShape): void;
  Differ(theOther: TopTools_MapOfShape): Standard_Boolean;
}

  export declare class TopTools_MapOfShape_1 extends TopTools_MapOfShape {
    constructor();
  }

  export declare class TopTools_MapOfShape_2 extends TopTools_MapOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_MapOfShape_3 extends TopTools_MapOfShape {
    constructor(theOther: TopTools_MapOfShape);
  }

export declare class TopTools_IndexedMapOfShape extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedMapOfShape): void;
  Assign(theOther: TopTools_IndexedMapOfShape): TopTools_IndexedMapOfShape;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_IndexedMapOfShape_1 extends TopTools_IndexedMapOfShape {
    constructor();
  }

  export declare class TopTools_IndexedMapOfShape_2 extends TopTools_IndexedMapOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_IndexedMapOfShape_3 extends TopTools_IndexedMapOfShape {
    constructor(theOther: TopTools_IndexedMapOfShape);
  }

export declare class TopTools_IndexedDataMapOfShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedDataMapOfShapeListOfShape): void;
  Assign(theOther: TopTools_IndexedDataMapOfShapeListOfShape): TopTools_IndexedDataMapOfShapeListOfShape;
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

  export declare class TopTools_IndexedDataMapOfShapeListOfShape_1 extends TopTools_IndexedDataMapOfShapeListOfShape {
    constructor();
  }

  export declare class TopTools_IndexedDataMapOfShapeListOfShape_2 extends TopTools_IndexedDataMapOfShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_IndexedDataMapOfShapeListOfShape_3 extends TopTools_IndexedDataMapOfShapeListOfShape {
    constructor(theOther: TopTools_IndexedDataMapOfShapeListOfShape);
  }

export declare class TopTools_DataMapOfShapeListOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeListOfShape): void;
  Assign(theOther: TopTools_DataMapOfShapeListOfShape): TopTools_DataMapOfShapeListOfShape;
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

  export declare class TopTools_DataMapOfShapeListOfShape_1 extends TopTools_DataMapOfShapeListOfShape {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeListOfShape_2 extends TopTools_DataMapOfShapeListOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfShapeListOfShape_3 extends TopTools_DataMapOfShapeListOfShape {
    constructor(theOther: TopTools_DataMapOfShapeListOfShape);
  }

export declare class Handle_BRepTools_History {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_History): void;
  get(): BRepTools_History;
}

  export declare class Handle_BRepTools_History_1 extends Handle_BRepTools_History {
    constructor();
  }

  export declare class Handle_BRepTools_History_2 extends Handle_BRepTools_History {
    constructor(thePtr: BRepTools_History);
  }

  export declare class Handle_BRepTools_History_3 extends Handle_BRepTools_History {
    constructor(theHandle: Handle_BRepTools_History);
  }

  export declare class Handle_BRepTools_History_4 extends Handle_BRepTools_History {
    constructor(theHandle: Handle_BRepTools_History);
  }

export declare class TopTools_DataMapOfShapeShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeShape): void;
  Assign(theOther: TopTools_DataMapOfShapeShape): TopTools_DataMapOfShapeShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopoDS_Shape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopoDS_Shape): TopoDS_Shape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopoDS_Shape;
  Find_1(theKey: TopoDS_Shape): TopoDS_Shape;
  Find_2(theKey: TopoDS_Shape, theValue: TopoDS_Shape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopoDS_Shape;
  ChangeFind(theKey: TopoDS_Shape): TopoDS_Shape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfShapeShape_1 extends TopTools_DataMapOfShapeShape {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeShape_2 extends TopTools_DataMapOfShapeShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfShapeShape_3 extends TopTools_DataMapOfShapeShape {
    constructor(theOther: TopTools_DataMapOfShapeShape);
  }

export declare class TopTools_IndexedMapOfOrientedShape extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedMapOfOrientedShape): void;
  Assign(theOther: TopTools_IndexedMapOfOrientedShape): TopTools_IndexedMapOfOrientedShape;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_IndexedMapOfOrientedShape_1 extends TopTools_IndexedMapOfOrientedShape {
    constructor();
  }

  export declare class TopTools_IndexedMapOfOrientedShape_2 extends TopTools_IndexedMapOfOrientedShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_IndexedMapOfOrientedShape_3 extends TopTools_IndexedMapOfOrientedShape {
    constructor(theOther: TopTools_IndexedMapOfOrientedShape);
  }

export declare class TopTools_DataMapOfShapeBox extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeBox): void;
  Assign(theOther: TopTools_DataMapOfShapeBox): TopTools_DataMapOfShapeBox;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: Bnd_Box): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: Bnd_Box): Bnd_Box;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): Bnd_Box;
  Find_1(theKey: TopoDS_Shape): Bnd_Box;
  Find_2(theKey: TopoDS_Shape, theValue: Bnd_Box): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): Bnd_Box;
  ChangeFind(theKey: TopoDS_Shape): Bnd_Box;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfShapeBox_1 extends TopTools_DataMapOfShapeBox {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeBox_2 extends TopTools_DataMapOfShapeBox {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfShapeBox_3 extends TopTools_DataMapOfShapeBox {
    constructor(theOther: TopTools_DataMapOfShapeBox);
  }

export declare class TopTools_DataMapOfShapeInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeInteger): void;
  Assign(theOther: TopTools_DataMapOfShapeInteger): TopTools_DataMapOfShapeInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: Standard_Integer): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: Standard_Integer): Standard_Integer;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): Standard_Integer;
  Find_1(theKey: TopoDS_Shape): Standard_Integer;
  Find_2(theKey: TopoDS_Shape, theValue: Standard_Integer): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): Standard_Integer;
  ChangeFind(theKey: TopoDS_Shape): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfShapeInteger_1 extends TopTools_DataMapOfShapeInteger {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeInteger_2 extends TopTools_DataMapOfShapeInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfShapeInteger_3 extends TopTools_DataMapOfShapeInteger {
    constructor(theOther: TopTools_DataMapOfShapeInteger);
  }

export declare class TopTools_IndexedDataMapOfShapeReal extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedDataMapOfShapeReal): void;
  Assign(theOther: TopTools_IndexedDataMapOfShapeReal): TopTools_IndexedDataMapOfShapeReal;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: Standard_Real): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: Standard_Real): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): Standard_Real;
  ChangeFromIndex(theIndex: Standard_Integer): Standard_Real;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): Standard_Real;
  ChangeFromKey(theKey1: TopoDS_Shape): Standard_Real;
  Seek(theKey1: TopoDS_Shape): Standard_Real;
  ChangeSeek(theKey1: TopoDS_Shape): Standard_Real;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: Standard_Real): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_IndexedDataMapOfShapeReal_1 extends TopTools_IndexedDataMapOfShapeReal {
    constructor();
  }

  export declare class TopTools_IndexedDataMapOfShapeReal_2 extends TopTools_IndexedDataMapOfShapeReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_IndexedDataMapOfShapeReal_3 extends TopTools_IndexedDataMapOfShapeReal {
    constructor(theOther: TopTools_IndexedDataMapOfShapeReal);
  }

export declare class TopTools_ListOfListOfShape extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TopTools_ListOfListOfShape): TopTools_ListOfListOfShape;
  Clear(theAllocator: any): void;
  First_1(): TopTools_ListOfShape;
  First_2(): TopTools_ListOfShape;
  Last_1(): TopTools_ListOfShape;
  Last_2(): TopTools_ListOfShape;
  Append_1(theItem: TopTools_ListOfShape): TopTools_ListOfShape;
  Append_3(theOther: TopTools_ListOfListOfShape): void;
  Prepend_1(theItem: TopTools_ListOfShape): TopTools_ListOfShape;
  Prepend_2(theOther: TopTools_ListOfListOfShape): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TopTools_ListOfListOfShape_1 extends TopTools_ListOfListOfShape {
    constructor();
  }

  export declare class TopTools_ListOfListOfShape_2 extends TopTools_ListOfListOfShape {
    constructor(theAllocator: any);
  }

  export declare class TopTools_ListOfListOfShape_3 extends TopTools_ListOfListOfShape {
    constructor(theOther: TopTools_ListOfListOfShape);
  }

export declare class Handle_TopoDS_TWire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TWire): void;
  get(): TopoDS_TWire;
}

  export declare class Handle_TopoDS_TWire_1 extends Handle_TopoDS_TWire {
    constructor();
  }

  export declare class Handle_TopoDS_TWire_2 extends Handle_TopoDS_TWire {
    constructor(thePtr: TopoDS_TWire);
  }

  export declare class Handle_TopoDS_TWire_3 extends Handle_TopoDS_TWire {
    constructor(theHandle: Handle_TopoDS_TWire);
  }

  export declare class Handle_TopoDS_TWire_4 extends Handle_TopoDS_TWire {
    constructor(theHandle: Handle_TopoDS_TWire);
  }

export declare class Handle_TopoDS_TShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TShell): void;
  get(): TopoDS_TShell;
}

  export declare class Handle_TopoDS_TShell_1 extends Handle_TopoDS_TShell {
    constructor();
  }

  export declare class Handle_TopoDS_TShell_2 extends Handle_TopoDS_TShell {
    constructor(thePtr: TopoDS_TShell);
  }

  export declare class Handle_TopoDS_TShell_3 extends Handle_TopoDS_TShell {
    constructor(theHandle: Handle_TopoDS_TShell);
  }

  export declare class Handle_TopoDS_TShell_4 extends Handle_TopoDS_TShell {
    constructor(theHandle: Handle_TopoDS_TShell);
  }

export declare class Handle_TopoDS_TSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TSolid): void;
  get(): TopoDS_TSolid;
}

  export declare class Handle_TopoDS_TSolid_1 extends Handle_TopoDS_TSolid {
    constructor();
  }

  export declare class Handle_TopoDS_TSolid_2 extends Handle_TopoDS_TSolid {
    constructor(thePtr: TopoDS_TSolid);
  }

  export declare class Handle_TopoDS_TSolid_3 extends Handle_TopoDS_TSolid {
    constructor(theHandle: Handle_TopoDS_TSolid);
  }

  export declare class Handle_TopoDS_TSolid_4 extends Handle_TopoDS_TSolid {
    constructor(theHandle: Handle_TopoDS_TSolid);
  }

export declare class Handle_TopoDS_TCompSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TCompSolid): void;
  get(): TopoDS_TCompSolid;
}

  export declare class Handle_TopoDS_TCompSolid_1 extends Handle_TopoDS_TCompSolid {
    constructor();
  }

  export declare class Handle_TopoDS_TCompSolid_2 extends Handle_TopoDS_TCompSolid {
    constructor(thePtr: TopoDS_TCompSolid);
  }

  export declare class Handle_TopoDS_TCompSolid_3 extends Handle_TopoDS_TCompSolid {
    constructor(theHandle: Handle_TopoDS_TCompSolid);
  }

  export declare class Handle_TopoDS_TCompSolid_4 extends Handle_TopoDS_TCompSolid {
    constructor(theHandle: Handle_TopoDS_TCompSolid);
  }

export declare class Handle_TopoDS_TCompound {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TCompound): void;
  get(): TopoDS_TCompound;
}

  export declare class Handle_TopoDS_TCompound_1 extends Handle_TopoDS_TCompound {
    constructor();
  }

  export declare class Handle_TopoDS_TCompound_2 extends Handle_TopoDS_TCompound {
    constructor(thePtr: TopoDS_TCompound);
  }

  export declare class Handle_TopoDS_TCompound_3 extends Handle_TopoDS_TCompound {
    constructor(theHandle: Handle_TopoDS_TCompound);
  }

  export declare class Handle_TopoDS_TCompound_4 extends Handle_TopoDS_TCompound {
    constructor(theHandle: Handle_TopoDS_TCompound);
  }

export declare class Handle_TopoDS_TFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TFace): void;
  get(): TopoDS_TFace;
}

  export declare class Handle_TopoDS_TFace_1 extends Handle_TopoDS_TFace {
    constructor();
  }

  export declare class Handle_TopoDS_TFace_2 extends Handle_TopoDS_TFace {
    constructor(thePtr: TopoDS_TFace);
  }

  export declare class Handle_TopoDS_TFace_3 extends Handle_TopoDS_TFace {
    constructor(theHandle: Handle_TopoDS_TFace);
  }

  export declare class Handle_TopoDS_TFace_4 extends Handle_TopoDS_TFace {
    constructor(theHandle: Handle_TopoDS_TFace);
  }

export declare class Handle_BRep_TFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_TFace): void;
  get(): BRep_TFace;
}

  export declare class Handle_BRep_TFace_1 extends Handle_BRep_TFace {
    constructor();
  }

  export declare class Handle_BRep_TFace_2 extends Handle_BRep_TFace {
    constructor(thePtr: BRep_TFace);
  }

  export declare class Handle_BRep_TFace_3 extends Handle_BRep_TFace {
    constructor(theHandle: Handle_BRep_TFace);
  }

  export declare class Handle_BRep_TFace_4 extends Handle_BRep_TFace {
    constructor(theHandle: Handle_BRep_TFace);
  }

export declare class Handle_BRep_PointRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PointRepresentation): void;
  get(): BRep_PointRepresentation;
}

  export declare class Handle_BRep_PointRepresentation_1 extends Handle_BRep_PointRepresentation {
    constructor();
  }

  export declare class Handle_BRep_PointRepresentation_2 extends Handle_BRep_PointRepresentation {
    constructor(thePtr: BRep_PointRepresentation);
  }

  export declare class Handle_BRep_PointRepresentation_3 extends Handle_BRep_PointRepresentation {
    constructor(theHandle: Handle_BRep_PointRepresentation);
  }

  export declare class Handle_BRep_PointRepresentation_4 extends Handle_BRep_PointRepresentation {
    constructor(theHandle: Handle_BRep_PointRepresentation);
  }

export declare class Handle_TopoDS_TVertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TVertex): void;
  get(): TopoDS_TVertex;
}

  export declare class Handle_TopoDS_TVertex_1 extends Handle_TopoDS_TVertex {
    constructor();
  }

  export declare class Handle_TopoDS_TVertex_2 extends Handle_TopoDS_TVertex {
    constructor(thePtr: TopoDS_TVertex);
  }

  export declare class Handle_TopoDS_TVertex_3 extends Handle_TopoDS_TVertex {
    constructor(theHandle: Handle_TopoDS_TVertex);
  }

  export declare class Handle_TopoDS_TVertex_4 extends Handle_TopoDS_TVertex {
    constructor(theHandle: Handle_TopoDS_TVertex);
  }

export declare class Handle_BRep_TVertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_TVertex): void;
  get(): BRep_TVertex;
}

  export declare class Handle_BRep_TVertex_1 extends Handle_BRep_TVertex {
    constructor();
  }

  export declare class Handle_BRep_TVertex_2 extends Handle_BRep_TVertex {
    constructor(thePtr: BRep_TVertex);
  }

  export declare class Handle_BRep_TVertex_3 extends Handle_BRep_TVertex {
    constructor(theHandle: Handle_BRep_TVertex);
  }

  export declare class Handle_BRep_TVertex_4 extends Handle_BRep_TVertex {
    constructor(theHandle: Handle_BRep_TVertex);
  }

export declare class Handle_BRep_CurveRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_CurveRepresentation): void;
  get(): BRep_CurveRepresentation;
}

  export declare class Handle_BRep_CurveRepresentation_1 extends Handle_BRep_CurveRepresentation {
    constructor();
  }

  export declare class Handle_BRep_CurveRepresentation_2 extends Handle_BRep_CurveRepresentation {
    constructor(thePtr: BRep_CurveRepresentation);
  }

  export declare class Handle_BRep_CurveRepresentation_3 extends Handle_BRep_CurveRepresentation {
    constructor(theHandle: Handle_BRep_CurveRepresentation);
  }

  export declare class Handle_BRep_CurveRepresentation_4 extends Handle_BRep_CurveRepresentation {
    constructor(theHandle: Handle_BRep_CurveRepresentation);
  }

export declare class Handle_BRep_GCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_GCurve): void;
  get(): BRep_GCurve;
}

  export declare class Handle_BRep_GCurve_1 extends Handle_BRep_GCurve {
    constructor();
  }

  export declare class Handle_BRep_GCurve_2 extends Handle_BRep_GCurve {
    constructor(thePtr: BRep_GCurve);
  }

  export declare class Handle_BRep_GCurve_3 extends Handle_BRep_GCurve {
    constructor(theHandle: Handle_BRep_GCurve);
  }

  export declare class Handle_BRep_GCurve_4 extends Handle_BRep_GCurve {
    constructor(theHandle: Handle_BRep_GCurve);
  }

export declare class Handle_BRep_Curve3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_Curve3D): void;
  get(): BRep_Curve3D;
}

  export declare class Handle_BRep_Curve3D_1 extends Handle_BRep_Curve3D {
    constructor();
  }

  export declare class Handle_BRep_Curve3D_2 extends Handle_BRep_Curve3D {
    constructor(thePtr: BRep_Curve3D);
  }

  export declare class Handle_BRep_Curve3D_3 extends Handle_BRep_Curve3D {
    constructor(theHandle: Handle_BRep_Curve3D);
  }

  export declare class Handle_BRep_Curve3D_4 extends Handle_BRep_Curve3D {
    constructor(theHandle: Handle_BRep_Curve3D);
  }

export declare class Handle_BRep_CurveOn2Surfaces {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_CurveOn2Surfaces): void;
  get(): BRep_CurveOn2Surfaces;
}

  export declare class Handle_BRep_CurveOn2Surfaces_1 extends Handle_BRep_CurveOn2Surfaces {
    constructor();
  }

  export declare class Handle_BRep_CurveOn2Surfaces_2 extends Handle_BRep_CurveOn2Surfaces {
    constructor(thePtr: BRep_CurveOn2Surfaces);
  }

  export declare class Handle_BRep_CurveOn2Surfaces_3 extends Handle_BRep_CurveOn2Surfaces {
    constructor(theHandle: Handle_BRep_CurveOn2Surfaces);
  }

  export declare class Handle_BRep_CurveOn2Surfaces_4 extends Handle_BRep_CurveOn2Surfaces {
    constructor(theHandle: Handle_BRep_CurveOn2Surfaces);
  }

export declare class Handle_BRep_CurveOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_CurveOnSurface): void;
  get(): BRep_CurveOnSurface;
}

  export declare class Handle_BRep_CurveOnSurface_1 extends Handle_BRep_CurveOnSurface {
    constructor();
  }

  export declare class Handle_BRep_CurveOnSurface_2 extends Handle_BRep_CurveOnSurface {
    constructor(thePtr: BRep_CurveOnSurface);
  }

  export declare class Handle_BRep_CurveOnSurface_3 extends Handle_BRep_CurveOnSurface {
    constructor(theHandle: Handle_BRep_CurveOnSurface);
  }

  export declare class Handle_BRep_CurveOnSurface_4 extends Handle_BRep_CurveOnSurface {
    constructor(theHandle: Handle_BRep_CurveOnSurface);
  }

export declare class Handle_BRep_CurveOnClosedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_CurveOnClosedSurface): void;
  get(): BRep_CurveOnClosedSurface;
}

  export declare class Handle_BRep_CurveOnClosedSurface_1 extends Handle_BRep_CurveOnClosedSurface {
    constructor();
  }

  export declare class Handle_BRep_CurveOnClosedSurface_2 extends Handle_BRep_CurveOnClosedSurface {
    constructor(thePtr: BRep_CurveOnClosedSurface);
  }

  export declare class Handle_BRep_CurveOnClosedSurface_3 extends Handle_BRep_CurveOnClosedSurface {
    constructor(theHandle: Handle_BRep_CurveOnClosedSurface);
  }

  export declare class Handle_BRep_CurveOnClosedSurface_4 extends Handle_BRep_CurveOnClosedSurface {
    constructor(theHandle: Handle_BRep_CurveOnClosedSurface);
  }

export declare class Handle_BRep_PointOnCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PointOnCurve): void;
  get(): BRep_PointOnCurve;
}

  export declare class Handle_BRep_PointOnCurve_1 extends Handle_BRep_PointOnCurve {
    constructor();
  }

  export declare class Handle_BRep_PointOnCurve_2 extends Handle_BRep_PointOnCurve {
    constructor(thePtr: BRep_PointOnCurve);
  }

  export declare class Handle_BRep_PointOnCurve_3 extends Handle_BRep_PointOnCurve {
    constructor(theHandle: Handle_BRep_PointOnCurve);
  }

  export declare class Handle_BRep_PointOnCurve_4 extends Handle_BRep_PointOnCurve {
    constructor(theHandle: Handle_BRep_PointOnCurve);
  }

export declare class Handle_BRep_PointsOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PointsOnSurface): void;
  get(): BRep_PointsOnSurface;
}

  export declare class Handle_BRep_PointsOnSurface_1 extends Handle_BRep_PointsOnSurface {
    constructor();
  }

  export declare class Handle_BRep_PointsOnSurface_2 extends Handle_BRep_PointsOnSurface {
    constructor(thePtr: BRep_PointsOnSurface);
  }

  export declare class Handle_BRep_PointsOnSurface_3 extends Handle_BRep_PointsOnSurface {
    constructor(theHandle: Handle_BRep_PointsOnSurface);
  }

  export declare class Handle_BRep_PointsOnSurface_4 extends Handle_BRep_PointsOnSurface {
    constructor(theHandle: Handle_BRep_PointsOnSurface);
  }

export declare class Handle_BRep_PointOnCurveOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PointOnCurveOnSurface): void;
  get(): BRep_PointOnCurveOnSurface;
}

  export declare class Handle_BRep_PointOnCurveOnSurface_1 extends Handle_BRep_PointOnCurveOnSurface {
    constructor();
  }

  export declare class Handle_BRep_PointOnCurveOnSurface_2 extends Handle_BRep_PointOnCurveOnSurface {
    constructor(thePtr: BRep_PointOnCurveOnSurface);
  }

  export declare class Handle_BRep_PointOnCurveOnSurface_3 extends Handle_BRep_PointOnCurveOnSurface {
    constructor(theHandle: Handle_BRep_PointOnCurveOnSurface);
  }

  export declare class Handle_BRep_PointOnCurveOnSurface_4 extends Handle_BRep_PointOnCurveOnSurface {
    constructor(theHandle: Handle_BRep_PointOnCurveOnSurface);
  }

export declare class Handle_BRep_PointOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PointOnSurface): void;
  get(): BRep_PointOnSurface;
}

  export declare class Handle_BRep_PointOnSurface_1 extends Handle_BRep_PointOnSurface {
    constructor();
  }

  export declare class Handle_BRep_PointOnSurface_2 extends Handle_BRep_PointOnSurface {
    constructor(thePtr: BRep_PointOnSurface);
  }

  export declare class Handle_BRep_PointOnSurface_3 extends Handle_BRep_PointOnSurface {
    constructor(theHandle: Handle_BRep_PointOnSurface);
  }

  export declare class Handle_BRep_PointOnSurface_4 extends Handle_BRep_PointOnSurface {
    constructor(theHandle: Handle_BRep_PointOnSurface);
  }

export declare class Handle_BRep_Polygon3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_Polygon3D): void;
  get(): BRep_Polygon3D;
}

  export declare class Handle_BRep_Polygon3D_1 extends Handle_BRep_Polygon3D {
    constructor();
  }

  export declare class Handle_BRep_Polygon3D_2 extends Handle_BRep_Polygon3D {
    constructor(thePtr: BRep_Polygon3D);
  }

  export declare class Handle_BRep_Polygon3D_3 extends Handle_BRep_Polygon3D {
    constructor(theHandle: Handle_BRep_Polygon3D);
  }

  export declare class Handle_BRep_Polygon3D_4 extends Handle_BRep_Polygon3D {
    constructor(theHandle: Handle_BRep_Polygon3D);
  }

export declare class Handle_BRep_PolygonOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PolygonOnSurface): void;
  get(): BRep_PolygonOnSurface;
}

  export declare class Handle_BRep_PolygonOnSurface_1 extends Handle_BRep_PolygonOnSurface {
    constructor();
  }

  export declare class Handle_BRep_PolygonOnSurface_2 extends Handle_BRep_PolygonOnSurface {
    constructor(thePtr: BRep_PolygonOnSurface);
  }

  export declare class Handle_BRep_PolygonOnSurface_3 extends Handle_BRep_PolygonOnSurface {
    constructor(theHandle: Handle_BRep_PolygonOnSurface);
  }

  export declare class Handle_BRep_PolygonOnSurface_4 extends Handle_BRep_PolygonOnSurface {
    constructor(theHandle: Handle_BRep_PolygonOnSurface);
  }

export declare class Handle_BRep_PolygonOnClosedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PolygonOnClosedSurface): void;
  get(): BRep_PolygonOnClosedSurface;
}

  export declare class Handle_BRep_PolygonOnClosedSurface_1 extends Handle_BRep_PolygonOnClosedSurface {
    constructor();
  }

  export declare class Handle_BRep_PolygonOnClosedSurface_2 extends Handle_BRep_PolygonOnClosedSurface {
    constructor(thePtr: BRep_PolygonOnClosedSurface);
  }

  export declare class Handle_BRep_PolygonOnClosedSurface_3 extends Handle_BRep_PolygonOnClosedSurface {
    constructor(theHandle: Handle_BRep_PolygonOnClosedSurface);
  }

  export declare class Handle_BRep_PolygonOnClosedSurface_4 extends Handle_BRep_PolygonOnClosedSurface {
    constructor(theHandle: Handle_BRep_PolygonOnClosedSurface);
  }

export declare class Handle_BRep_PolygonOnTriangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PolygonOnTriangulation): void;
  get(): BRep_PolygonOnTriangulation;
}

  export declare class Handle_BRep_PolygonOnTriangulation_1 extends Handle_BRep_PolygonOnTriangulation {
    constructor();
  }

  export declare class Handle_BRep_PolygonOnTriangulation_2 extends Handle_BRep_PolygonOnTriangulation {
    constructor(thePtr: BRep_PolygonOnTriangulation);
  }

  export declare class Handle_BRep_PolygonOnTriangulation_3 extends Handle_BRep_PolygonOnTriangulation {
    constructor(theHandle: Handle_BRep_PolygonOnTriangulation);
  }

  export declare class Handle_BRep_PolygonOnTriangulation_4 extends Handle_BRep_PolygonOnTriangulation {
    constructor(theHandle: Handle_BRep_PolygonOnTriangulation);
  }

export declare class Handle_BRep_PolygonOnClosedTriangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_PolygonOnClosedTriangulation): void;
  get(): BRep_PolygonOnClosedTriangulation;
}

  export declare class Handle_BRep_PolygonOnClosedTriangulation_1 extends Handle_BRep_PolygonOnClosedTriangulation {
    constructor();
  }

  export declare class Handle_BRep_PolygonOnClosedTriangulation_2 extends Handle_BRep_PolygonOnClosedTriangulation {
    constructor(thePtr: BRep_PolygonOnClosedTriangulation);
  }

  export declare class Handle_BRep_PolygonOnClosedTriangulation_3 extends Handle_BRep_PolygonOnClosedTriangulation {
    constructor(theHandle: Handle_BRep_PolygonOnClosedTriangulation);
  }

  export declare class Handle_BRep_PolygonOnClosedTriangulation_4 extends Handle_BRep_PolygonOnClosedTriangulation {
    constructor(theHandle: Handle_BRep_PolygonOnClosedTriangulation);
  }

export declare class Handle_TopoDS_TEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TEdge): void;
  get(): TopoDS_TEdge;
}

  export declare class Handle_TopoDS_TEdge_1 extends Handle_TopoDS_TEdge {
    constructor();
  }

  export declare class Handle_TopoDS_TEdge_2 extends Handle_TopoDS_TEdge {
    constructor(thePtr: TopoDS_TEdge);
  }

  export declare class Handle_TopoDS_TEdge_3 extends Handle_TopoDS_TEdge {
    constructor(theHandle: Handle_TopoDS_TEdge);
  }

  export declare class Handle_TopoDS_TEdge_4 extends Handle_TopoDS_TEdge {
    constructor(theHandle: Handle_TopoDS_TEdge);
  }

export declare class Handle_BRep_TEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_TEdge): void;
  get(): BRep_TEdge;
}

  export declare class Handle_BRep_TEdge_1 extends Handle_BRep_TEdge {
    constructor();
  }

  export declare class Handle_BRep_TEdge_2 extends Handle_BRep_TEdge {
    constructor(thePtr: BRep_TEdge);
  }

  export declare class Handle_BRep_TEdge_3 extends Handle_BRep_TEdge {
    constructor(theHandle: Handle_BRep_TEdge);
  }

  export declare class Handle_BRep_TEdge_4 extends Handle_BRep_TEdge {
    constructor(theHandle: Handle_BRep_TEdge);
  }

export declare class BRepAdaptor_Array1OfCurve {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: BRepAdaptor_Curve): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: BRepAdaptor_Array1OfCurve): BRepAdaptor_Array1OfCurve;
  Move(theOther: BRepAdaptor_Array1OfCurve): BRepAdaptor_Array1OfCurve;
  First(): BRepAdaptor_Curve;
  ChangeFirst(): BRepAdaptor_Curve;
  Last(): BRepAdaptor_Curve;
  ChangeLast(): BRepAdaptor_Curve;
  Value(theIndex: Standard_Integer): BRepAdaptor_Curve;
  ChangeValue(theIndex: Standard_Integer): BRepAdaptor_Curve;
  SetValue(theIndex: Standard_Integer, theItem: BRepAdaptor_Curve): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class BRepAdaptor_Array1OfCurve_1 extends BRepAdaptor_Array1OfCurve {
    constructor();
  }

  export declare class BRepAdaptor_Array1OfCurve_2 extends BRepAdaptor_Array1OfCurve {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class BRepAdaptor_Array1OfCurve_3 extends BRepAdaptor_Array1OfCurve {
    constructor(theOther: BRepAdaptor_Array1OfCurve);
  }

  export declare class BRepAdaptor_Array1OfCurve_4 extends BRepAdaptor_Array1OfCurve {
    constructor(theOther: BRepAdaptor_Array1OfCurve);
  }

  export declare class BRepAdaptor_Array1OfCurve_5 extends BRepAdaptor_Array1OfCurve {
    constructor(theBegin: BRepAdaptor_Curve, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_BRepAdaptor_HArray1OfCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_HArray1OfCurve): void;
  get(): BRepAdaptor_HArray1OfCurve;
}

  export declare class Handle_BRepAdaptor_HArray1OfCurve_1 extends Handle_BRepAdaptor_HArray1OfCurve {
    constructor();
  }

  export declare class Handle_BRepAdaptor_HArray1OfCurve_2 extends Handle_BRepAdaptor_HArray1OfCurve {
    constructor(thePtr: BRepAdaptor_HArray1OfCurve);
  }

  export declare class Handle_BRepAdaptor_HArray1OfCurve_3 extends Handle_BRepAdaptor_HArray1OfCurve {
    constructor(theHandle: Handle_BRepAdaptor_HArray1OfCurve);
  }

  export declare class Handle_BRepAdaptor_HArray1OfCurve_4 extends Handle_BRepAdaptor_HArray1OfCurve {
    constructor(theHandle: Handle_BRepAdaptor_HArray1OfCurve);
  }

export declare class Handle_BRepAdaptor_HCompCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_HCompCurve): void;
  get(): BRepAdaptor_HCompCurve;
}

  export declare class Handle_BRepAdaptor_HCompCurve_1 extends Handle_BRepAdaptor_HCompCurve {
    constructor();
  }

  export declare class Handle_BRepAdaptor_HCompCurve_2 extends Handle_BRepAdaptor_HCompCurve {
    constructor(thePtr: BRepAdaptor_HCompCurve);
  }

  export declare class Handle_BRepAdaptor_HCompCurve_3 extends Handle_BRepAdaptor_HCompCurve {
    constructor(theHandle: Handle_BRepAdaptor_HCompCurve);
  }

  export declare class Handle_BRepAdaptor_HCompCurve_4 extends Handle_BRepAdaptor_HCompCurve {
    constructor(theHandle: Handle_BRepAdaptor_HCompCurve);
  }

export declare class Handle_BRepAdaptor_HCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_HCurve): void;
  get(): BRepAdaptor_HCurve;
}

  export declare class Handle_BRepAdaptor_HCurve_1 extends Handle_BRepAdaptor_HCurve {
    constructor();
  }

  export declare class Handle_BRepAdaptor_HCurve_2 extends Handle_BRepAdaptor_HCurve {
    constructor(thePtr: BRepAdaptor_HCurve);
  }

  export declare class Handle_BRepAdaptor_HCurve_3 extends Handle_BRepAdaptor_HCurve {
    constructor(theHandle: Handle_BRepAdaptor_HCurve);
  }

  export declare class Handle_BRepAdaptor_HCurve_4 extends Handle_BRepAdaptor_HCurve {
    constructor(theHandle: Handle_BRepAdaptor_HCurve);
  }

export declare class Handle_BRepAdaptor_HCurve2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_HCurve2d): void;
  get(): BRepAdaptor_HCurve2d;
}

  export declare class Handle_BRepAdaptor_HCurve2d_1 extends Handle_BRepAdaptor_HCurve2d {
    constructor();
  }

  export declare class Handle_BRepAdaptor_HCurve2d_2 extends Handle_BRepAdaptor_HCurve2d {
    constructor(thePtr: BRepAdaptor_HCurve2d);
  }

  export declare class Handle_BRepAdaptor_HCurve2d_3 extends Handle_BRepAdaptor_HCurve2d {
    constructor(theHandle: Handle_BRepAdaptor_HCurve2d);
  }

  export declare class Handle_BRepAdaptor_HCurve2d_4 extends Handle_BRepAdaptor_HCurve2d {
    constructor(theHandle: Handle_BRepAdaptor_HCurve2d);
  }

export declare class Handle_BRepAdaptor_HSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_HSurface): void;
  get(): BRepAdaptor_HSurface;
}

  export declare class Handle_BRepAdaptor_HSurface_1 extends Handle_BRepAdaptor_HSurface {
    constructor();
  }

  export declare class Handle_BRepAdaptor_HSurface_2 extends Handle_BRepAdaptor_HSurface {
    constructor(thePtr: BRepAdaptor_HSurface);
  }

  export declare class Handle_BRepAdaptor_HSurface_3 extends Handle_BRepAdaptor_HSurface {
    constructor(theHandle: Handle_BRepAdaptor_HSurface);
  }

  export declare class Handle_BRepAdaptor_HSurface_4 extends Handle_BRepAdaptor_HSurface {
    constructor(theHandle: Handle_BRepAdaptor_HSurface);
  }

export declare class Handle_BRepTools_ReShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_ReShape): void;
  get(): BRepTools_ReShape;
}

  export declare class Handle_BRepTools_ReShape_1 extends Handle_BRepTools_ReShape {
    constructor();
  }

  export declare class Handle_BRepTools_ReShape_2 extends Handle_BRepTools_ReShape {
    constructor(thePtr: BRepTools_ReShape);
  }

  export declare class Handle_BRepTools_ReShape_3 extends Handle_BRepTools_ReShape {
    constructor(theHandle: Handle_BRepTools_ReShape);
  }

  export declare class Handle_BRepTools_ReShape_4 extends Handle_BRepTools_ReShape {
    constructor(theHandle: Handle_BRepTools_ReShape);
  }

export declare class TopTools_IndexedDataMapOfShapeShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedDataMapOfShapeShape): void;
  Assign(theOther: TopTools_IndexedDataMapOfShapeShape): TopTools_IndexedDataMapOfShapeShape;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: TopoDS_Shape): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: TopoDS_Shape): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): TopoDS_Shape;
  ChangeFromIndex(theIndex: Standard_Integer): TopoDS_Shape;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): TopoDS_Shape;
  ChangeFromKey(theKey1: TopoDS_Shape): TopoDS_Shape;
  Seek(theKey1: TopoDS_Shape): TopoDS_Shape;
  ChangeSeek(theKey1: TopoDS_Shape): TopoDS_Shape;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: TopoDS_Shape): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_IndexedDataMapOfShapeShape_1 extends TopTools_IndexedDataMapOfShapeShape {
    constructor();
  }

  export declare class TopTools_IndexedDataMapOfShapeShape_2 extends TopTools_IndexedDataMapOfShapeShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_IndexedDataMapOfShapeShape_3 extends TopTools_IndexedDataMapOfShapeShape {
    constructor(theOther: TopTools_IndexedDataMapOfShapeShape);
  }

export declare class TopTools_SequenceOfShape extends NCollection_BaseSequence {
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
  Assign(theOther: TopTools_SequenceOfShape): TopTools_SequenceOfShape;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TopoDS_Shape): void;
  Append_2(theSeq: TopTools_SequenceOfShape): void;
  Prepend_1(theItem: TopoDS_Shape): void;
  Prepend_2(theSeq: TopTools_SequenceOfShape): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TopoDS_Shape): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TopTools_SequenceOfShape): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TopTools_SequenceOfShape): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TopoDS_Shape): void;
  Split(theIndex: Standard_Integer, theSeq: TopTools_SequenceOfShape): void;
  First(): TopoDS_Shape;
  ChangeFirst(): TopoDS_Shape;
  Last(): TopoDS_Shape;
  ChangeLast(): TopoDS_Shape;
  Value(theIndex: Standard_Integer): TopoDS_Shape;
  ChangeValue(theIndex: Standard_Integer): TopoDS_Shape;
  SetValue(theIndex: Standard_Integer, theItem: TopoDS_Shape): void;
}

  export declare class TopTools_SequenceOfShape_1 extends TopTools_SequenceOfShape {
    constructor();
  }

  export declare class TopTools_SequenceOfShape_2 extends TopTools_SequenceOfShape {
    constructor(theAllocator: any);
  }

  export declare class TopTools_SequenceOfShape_3 extends TopTools_SequenceOfShape {
    constructor(theOther: TopTools_SequenceOfShape);
  }

export declare class TopTools_Array1OfShape {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TopoDS_Shape): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TopTools_Array1OfShape): TopTools_Array1OfShape;
  Move(theOther: TopTools_Array1OfShape): TopTools_Array1OfShape;
  First(): TopoDS_Shape;
  ChangeFirst(): TopoDS_Shape;
  Last(): TopoDS_Shape;
  ChangeLast(): TopoDS_Shape;
  Value(theIndex: Standard_Integer): TopoDS_Shape;
  ChangeValue(theIndex: Standard_Integer): TopoDS_Shape;
  SetValue(theIndex: Standard_Integer, theItem: TopoDS_Shape): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TopTools_Array1OfShape_1 extends TopTools_Array1OfShape {
    constructor();
  }

  export declare class TopTools_Array1OfShape_2 extends TopTools_Array1OfShape {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TopTools_Array1OfShape_3 extends TopTools_Array1OfShape {
    constructor(theOther: TopTools_Array1OfShape);
  }

  export declare class TopTools_Array1OfShape_4 extends TopTools_Array1OfShape {
    constructor(theOther: TopTools_Array1OfShape);
  }

  export declare class TopTools_Array1OfShape_5 extends TopTools_Array1OfShape {
    constructor(theBegin: TopoDS_Shape, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TopTools_HArray1OfShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopTools_HArray1OfShape): void;
  get(): TopTools_HArray1OfShape;
}

  export declare class Handle_TopTools_HArray1OfShape_1 extends Handle_TopTools_HArray1OfShape {
    constructor();
  }

  export declare class Handle_TopTools_HArray1OfShape_2 extends Handle_TopTools_HArray1OfShape {
    constructor(thePtr: TopTools_HArray1OfShape);
  }

  export declare class Handle_TopTools_HArray1OfShape_3 extends Handle_TopTools_HArray1OfShape {
    constructor(theHandle: Handle_TopTools_HArray1OfShape);
  }

  export declare class Handle_TopTools_HArray1OfShape_4 extends Handle_TopTools_HArray1OfShape {
    constructor(theHandle: Handle_TopTools_HArray1OfShape);
  }

export declare class TopTools_Array2OfShape {
  Init(theValue: TopoDS_Shape): void;
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
  Assign(theOther: TopTools_Array2OfShape): TopTools_Array2OfShape;
  Move(theOther: TopTools_Array2OfShape): TopTools_Array2OfShape;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): TopoDS_Shape;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): TopoDS_Shape;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: TopoDS_Shape): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TopTools_Array2OfShape_1 extends TopTools_Array2OfShape {
    constructor();
  }

  export declare class TopTools_Array2OfShape_2 extends TopTools_Array2OfShape {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TopTools_Array2OfShape_3 extends TopTools_Array2OfShape {
    constructor(theOther: TopTools_Array2OfShape);
  }

  export declare class TopTools_Array2OfShape_4 extends TopTools_Array2OfShape {
    constructor(theOther: TopTools_Array2OfShape);
  }

  export declare class TopTools_Array2OfShape_5 extends TopTools_Array2OfShape {
    constructor(theBegin: TopoDS_Shape, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TopTools_HArray2OfShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopTools_HArray2OfShape): void;
  get(): TopTools_HArray2OfShape;
}

  export declare class Handle_TopTools_HArray2OfShape_1 extends Handle_TopTools_HArray2OfShape {
    constructor();
  }

  export declare class Handle_TopTools_HArray2OfShape_2 extends Handle_TopTools_HArray2OfShape {
    constructor(thePtr: TopTools_HArray2OfShape);
  }

  export declare class Handle_TopTools_HArray2OfShape_3 extends Handle_TopTools_HArray2OfShape {
    constructor(theHandle: Handle_TopTools_HArray2OfShape);
  }

  export declare class Handle_TopTools_HArray2OfShape_4 extends Handle_TopTools_HArray2OfShape {
    constructor(theHandle: Handle_TopTools_HArray2OfShape);
  }

export declare class TopTools_DataMapOfShapeListOfInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeListOfInteger): void;
  Assign(theOther: TopTools_DataMapOfShapeListOfInteger): TopTools_DataMapOfShapeListOfInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TColStd_ListOfInteger): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TColStd_ListOfInteger): TColStd_ListOfInteger;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TColStd_ListOfInteger;
  Find_1(theKey: TopoDS_Shape): TColStd_ListOfInteger;
  Find_2(theKey: TopoDS_Shape, theValue: TColStd_ListOfInteger): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TColStd_ListOfInteger;
  ChangeFind(theKey: TopoDS_Shape): TColStd_ListOfInteger;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfShapeListOfInteger_1 extends TopTools_DataMapOfShapeListOfInteger {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeListOfInteger_2 extends TopTools_DataMapOfShapeListOfInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfShapeListOfInteger_3 extends TopTools_DataMapOfShapeListOfInteger {
    constructor(theOther: TopTools_DataMapOfShapeListOfInteger);
  }

export declare class TopTools_DataMapOfIntegerShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfIntegerShape): void;
  Assign(theOther: TopTools_DataMapOfIntegerShape): TopTools_DataMapOfIntegerShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TopoDS_Shape): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TopoDS_Shape): TopoDS_Shape;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TopoDS_Shape;
  Find_1(theKey: Standard_Integer): TopoDS_Shape;
  Find_2(theKey: Standard_Integer, theValue: TopoDS_Shape): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TopoDS_Shape;
  ChangeFind(theKey: Standard_Integer): TopoDS_Shape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfIntegerShape_1 extends TopTools_DataMapOfIntegerShape {
    constructor();
  }

  export declare class TopTools_DataMapOfIntegerShape_2 extends TopTools_DataMapOfIntegerShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfIntegerShape_3 extends TopTools_DataMapOfIntegerShape {
    constructor(theOther: TopTools_DataMapOfIntegerShape);
  }

export declare class TopTools_DataMapOfShapeReal extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeReal): void;
  Assign(theOther: TopTools_DataMapOfShapeReal): TopTools_DataMapOfShapeReal;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: Standard_Real): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: Standard_Real): Standard_Real;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): Standard_Real;
  Find_1(theKey: TopoDS_Shape): Standard_Real;
  Find_2(theKey: TopoDS_Shape, theValue: Standard_Real): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): Standard_Real;
  ChangeFind(theKey: TopoDS_Shape): Standard_Real;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfShapeReal_1 extends TopTools_DataMapOfShapeReal {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeReal_2 extends TopTools_DataMapOfShapeReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfShapeReal_3 extends TopTools_DataMapOfShapeReal {
    constructor(theOther: TopTools_DataMapOfShapeReal);
  }

export declare class Handle_BRepTools_Modification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_Modification): void;
  get(): BRepTools_Modification;
}

  export declare class Handle_BRepTools_Modification_1 extends Handle_BRepTools_Modification {
    constructor();
  }

  export declare class Handle_BRepTools_Modification_2 extends Handle_BRepTools_Modification {
    constructor(thePtr: BRepTools_Modification);
  }

  export declare class Handle_BRepTools_Modification_3 extends Handle_BRepTools_Modification {
    constructor(theHandle: Handle_BRepTools_Modification);
  }

  export declare class Handle_BRepTools_Modification_4 extends Handle_BRepTools_Modification {
    constructor(theHandle: Handle_BRepTools_Modification);
  }

export declare class Handle_TopTools_HSequenceOfShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopTools_HSequenceOfShape): void;
  get(): TopTools_HSequenceOfShape;
}

  export declare class Handle_TopTools_HSequenceOfShape_1 extends Handle_TopTools_HSequenceOfShape {
    constructor();
  }

  export declare class Handle_TopTools_HSequenceOfShape_2 extends Handle_TopTools_HSequenceOfShape {
    constructor(thePtr: TopTools_HSequenceOfShape);
  }

  export declare class Handle_TopTools_HSequenceOfShape_3 extends Handle_TopTools_HSequenceOfShape {
    constructor(theHandle: Handle_TopTools_HSequenceOfShape);
  }

  export declare class Handle_TopTools_HSequenceOfShape_4 extends Handle_TopTools_HSequenceOfShape {
    constructor(theHandle: Handle_TopTools_HSequenceOfShape);
  }

export declare class BRepTools_MapOfVertexPnt2d extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BRepTools_MapOfVertexPnt2d): void;
  Assign(theOther: BRepTools_MapOfVertexPnt2d): BRepTools_MapOfVertexPnt2d;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TColgp_SequenceOfPnt2d): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TColgp_SequenceOfPnt2d): TColgp_SequenceOfPnt2d;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TColgp_SequenceOfPnt2d;
  Find_1(theKey: TopoDS_Shape): TColgp_SequenceOfPnt2d;
  Find_2(theKey: TopoDS_Shape, theValue: TColgp_SequenceOfPnt2d): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TColgp_SequenceOfPnt2d;
  ChangeFind(theKey: TopoDS_Shape): TColgp_SequenceOfPnt2d;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BRepTools_MapOfVertexPnt2d_1 extends BRepTools_MapOfVertexPnt2d {
    constructor();
  }

  export declare class BRepTools_MapOfVertexPnt2d_2 extends BRepTools_MapOfVertexPnt2d {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BRepTools_MapOfVertexPnt2d_3 extends BRepTools_MapOfVertexPnt2d {
    constructor(theOther: BRepTools_MapOfVertexPnt2d);
  }

export declare class Handle_BRepTools_GTrsfModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_GTrsfModification): void;
  get(): BRepTools_GTrsfModification;
}

  export declare class Handle_BRepTools_GTrsfModification_1 extends Handle_BRepTools_GTrsfModification {
    constructor();
  }

  export declare class Handle_BRepTools_GTrsfModification_2 extends Handle_BRepTools_GTrsfModification {
    constructor(thePtr: BRepTools_GTrsfModification);
  }

  export declare class Handle_BRepTools_GTrsfModification_3 extends Handle_BRepTools_GTrsfModification {
    constructor(theHandle: Handle_BRepTools_GTrsfModification);
  }

  export declare class Handle_BRepTools_GTrsfModification_4 extends Handle_BRepTools_GTrsfModification {
    constructor(theHandle: Handle_BRepTools_GTrsfModification);
  }

export declare class Handle_BRepTools_NurbsConvertModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_NurbsConvertModification): void;
  get(): BRepTools_NurbsConvertModification;
}

  export declare class Handle_BRepTools_NurbsConvertModification_1 extends Handle_BRepTools_NurbsConvertModification {
    constructor();
  }

  export declare class Handle_BRepTools_NurbsConvertModification_2 extends Handle_BRepTools_NurbsConvertModification {
    constructor(thePtr: BRepTools_NurbsConvertModification);
  }

  export declare class Handle_BRepTools_NurbsConvertModification_3 extends Handle_BRepTools_NurbsConvertModification {
    constructor(theHandle: Handle_BRepTools_NurbsConvertModification);
  }

  export declare class Handle_BRepTools_NurbsConvertModification_4 extends Handle_BRepTools_NurbsConvertModification {
    constructor(theHandle: Handle_BRepTools_NurbsConvertModification);
  }

export declare class Handle_BRepTools_TrsfModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_TrsfModification): void;
  get(): BRepTools_TrsfModification;
}

  export declare class Handle_BRepTools_TrsfModification_1 extends Handle_BRepTools_TrsfModification {
    constructor();
  }

  export declare class Handle_BRepTools_TrsfModification_2 extends Handle_BRepTools_TrsfModification {
    constructor(thePtr: BRepTools_TrsfModification);
  }

  export declare class Handle_BRepTools_TrsfModification_3 extends Handle_BRepTools_TrsfModification {
    constructor(theHandle: Handle_BRepTools_TrsfModification);
  }

  export declare class Handle_BRepTools_TrsfModification_4 extends Handle_BRepTools_TrsfModification {
    constructor(theHandle: Handle_BRepTools_TrsfModification);
  }

export declare class TopTools_DataMapOfOrientedShapeInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfOrientedShapeInteger): void;
  Assign(theOther: TopTools_DataMapOfOrientedShapeInteger): TopTools_DataMapOfOrientedShapeInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: Standard_Integer): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: Standard_Integer): Standard_Integer;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): Standard_Integer;
  Find_1(theKey: TopoDS_Shape): Standard_Integer;
  Find_2(theKey: TopoDS_Shape, theValue: Standard_Integer): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): Standard_Integer;
  ChangeFind(theKey: TopoDS_Shape): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfOrientedShapeInteger_1 extends TopTools_DataMapOfOrientedShapeInteger {
    constructor();
  }

  export declare class TopTools_DataMapOfOrientedShapeInteger_2 extends TopTools_DataMapOfOrientedShapeInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfOrientedShapeInteger_3 extends TopTools_DataMapOfOrientedShapeInteger {
    constructor(theOther: TopTools_DataMapOfOrientedShapeInteger);
  }

export declare class TopTools_Array1OfListOfShape {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TopTools_ListOfShape): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TopTools_Array1OfListOfShape): TopTools_Array1OfListOfShape;
  Move(theOther: TopTools_Array1OfListOfShape): TopTools_Array1OfListOfShape;
  First(): TopTools_ListOfShape;
  ChangeFirst(): TopTools_ListOfShape;
  Last(): TopTools_ListOfShape;
  ChangeLast(): TopTools_ListOfShape;
  Value(theIndex: Standard_Integer): TopTools_ListOfShape;
  ChangeValue(theIndex: Standard_Integer): TopTools_ListOfShape;
  SetValue(theIndex: Standard_Integer, theItem: TopTools_ListOfShape): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TopTools_Array1OfListOfShape_1 extends TopTools_Array1OfListOfShape {
    constructor();
  }

  export declare class TopTools_Array1OfListOfShape_2 extends TopTools_Array1OfListOfShape {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TopTools_Array1OfListOfShape_3 extends TopTools_Array1OfListOfShape {
    constructor(theOther: TopTools_Array1OfListOfShape);
  }

  export declare class TopTools_Array1OfListOfShape_4 extends TopTools_Array1OfListOfShape {
    constructor(theOther: TopTools_Array1OfListOfShape);
  }

  export declare class TopTools_Array1OfListOfShape_5 extends TopTools_Array1OfListOfShape {
    constructor(theBegin: TopTools_ListOfShape, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TopTools_HArray1OfListOfShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopTools_HArray1OfListOfShape): void;
  get(): TopTools_HArray1OfListOfShape;
}

  export declare class Handle_TopTools_HArray1OfListOfShape_1 extends Handle_TopTools_HArray1OfListOfShape {
    constructor();
  }

  export declare class Handle_TopTools_HArray1OfListOfShape_2 extends Handle_TopTools_HArray1OfListOfShape {
    constructor(thePtr: TopTools_HArray1OfListOfShape);
  }

  export declare class Handle_TopTools_HArray1OfListOfShape_3 extends Handle_TopTools_HArray1OfListOfShape {
    constructor(theHandle: Handle_TopTools_HArray1OfListOfShape);
  }

  export declare class Handle_TopTools_HArray1OfListOfShape_4 extends Handle_TopTools_HArray1OfListOfShape {
    constructor(theHandle: Handle_TopTools_HArray1OfListOfShape);
  }

export declare class TopTools_IndexedDataMapOfShapeAddress extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_IndexedDataMapOfShapeAddress): void;
  Assign(theOther: TopTools_IndexedDataMapOfShapeAddress): TopTools_IndexedDataMapOfShapeAddress;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: Standard_Address): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: Standard_Address): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): Standard_Address;
  ChangeFromIndex(theIndex: Standard_Integer): Standard_Address;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): Standard_Address;
  ChangeFromKey(theKey1: TopoDS_Shape): Standard_Address;
  Seek(theKey1: TopoDS_Shape): Standard_Address;
  ChangeSeek(theKey1: TopoDS_Shape): Standard_Address;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: Standard_Address): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_IndexedDataMapOfShapeAddress_1 extends TopTools_IndexedDataMapOfShapeAddress {
    constructor();
  }

  export declare class TopTools_IndexedDataMapOfShapeAddress_2 extends TopTools_IndexedDataMapOfShapeAddress {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_IndexedDataMapOfShapeAddress_3 extends TopTools_IndexedDataMapOfShapeAddress {
    constructor(theOther: TopTools_IndexedDataMapOfShapeAddress);
  }

export declare class TopTools_DataMapOfOrientedShapeShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfOrientedShapeShape): void;
  Assign(theOther: TopTools_DataMapOfOrientedShapeShape): TopTools_DataMapOfOrientedShapeShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopoDS_Shape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopoDS_Shape): TopoDS_Shape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopoDS_Shape;
  Find_1(theKey: TopoDS_Shape): TopoDS_Shape;
  Find_2(theKey: TopoDS_Shape, theValue: TopoDS_Shape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopoDS_Shape;
  ChangeFind(theKey: TopoDS_Shape): TopoDS_Shape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfOrientedShapeShape_1 extends TopTools_DataMapOfOrientedShapeShape {
    constructor();
  }

  export declare class TopTools_DataMapOfOrientedShapeShape_2 extends TopTools_DataMapOfOrientedShapeShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfOrientedShapeShape_3 extends TopTools_DataMapOfOrientedShapeShape {
    constructor(theOther: TopTools_DataMapOfOrientedShapeShape);
  }

export declare class TopTools_DataMapOfShapeSequenceOfShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_DataMapOfShapeSequenceOfShape): void;
  Assign(theOther: TopTools_DataMapOfShapeSequenceOfShape): TopTools_DataMapOfShapeSequenceOfShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TopTools_SequenceOfShape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TopTools_SequenceOfShape): TopTools_SequenceOfShape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TopTools_SequenceOfShape;
  Find_1(theKey: TopoDS_Shape): TopTools_SequenceOfShape;
  Find_2(theKey: TopoDS_Shape, theValue: TopTools_SequenceOfShape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TopTools_SequenceOfShape;
  ChangeFind(theKey: TopoDS_Shape): TopTools_SequenceOfShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopTools_DataMapOfShapeSequenceOfShape_1 extends TopTools_DataMapOfShapeSequenceOfShape {
    constructor();
  }

  export declare class TopTools_DataMapOfShapeSequenceOfShape_2 extends TopTools_DataMapOfShapeSequenceOfShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_DataMapOfShapeSequenceOfShape_3 extends TopTools_DataMapOfShapeSequenceOfShape {
    constructor(theOther: TopTools_DataMapOfShapeSequenceOfShape);
  }

export declare class TopTools_MapOfOrientedShape extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopTools_MapOfOrientedShape): void;
  Assign(theOther: TopTools_MapOfOrientedShape): TopTools_MapOfOrientedShape;
  ReSize(N: Standard_Integer): void;
  Add(K: TopoDS_Shape): Standard_Boolean;
  Added(K: TopoDS_Shape): TopoDS_Shape;
  Contains_1(K: TopoDS_Shape): Standard_Boolean;
  Remove(K: TopoDS_Shape): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TopTools_MapOfOrientedShape): Standard_Boolean;
  Contains_2(theOther: TopTools_MapOfOrientedShape): Standard_Boolean;
  Union(theLeft: TopTools_MapOfOrientedShape, theRight: TopTools_MapOfOrientedShape): void;
  Unite(theOther: TopTools_MapOfOrientedShape): Standard_Boolean;
  HasIntersection(theMap: TopTools_MapOfOrientedShape): Standard_Boolean;
  Intersection(theLeft: TopTools_MapOfOrientedShape, theRight: TopTools_MapOfOrientedShape): void;
  Intersect(theOther: TopTools_MapOfOrientedShape): Standard_Boolean;
  Subtraction(theLeft: TopTools_MapOfOrientedShape, theRight: TopTools_MapOfOrientedShape): void;
  Subtract(theOther: TopTools_MapOfOrientedShape): Standard_Boolean;
  Difference(theLeft: TopTools_MapOfOrientedShape, theRight: TopTools_MapOfOrientedShape): void;
  Differ(theOther: TopTools_MapOfOrientedShape): Standard_Boolean;
}

  export declare class TopTools_MapOfOrientedShape_1 extends TopTools_MapOfOrientedShape {
    constructor();
  }

  export declare class TopTools_MapOfOrientedShape_2 extends TopTools_MapOfOrientedShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopTools_MapOfOrientedShape_3 extends TopTools_MapOfOrientedShape {
    constructor(theOther: TopTools_MapOfOrientedShape);
  }

export declare class Handle_TopoDS_FrozenShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_FrozenShape): void;
  get(): TopoDS_FrozenShape;
}

  export declare class Handle_TopoDS_FrozenShape_1 extends Handle_TopoDS_FrozenShape {
    constructor();
  }

  export declare class Handle_TopoDS_FrozenShape_2 extends Handle_TopoDS_FrozenShape {
    constructor(thePtr: TopoDS_FrozenShape);
  }

  export declare class Handle_TopoDS_FrozenShape_3 extends Handle_TopoDS_FrozenShape {
    constructor(theHandle: Handle_TopoDS_FrozenShape);
  }

  export declare class Handle_TopoDS_FrozenShape_4 extends Handle_TopoDS_FrozenShape {
    constructor(theHandle: Handle_TopoDS_FrozenShape);
  }

export declare class Handle_TopoDS_HShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_HShape): void;
  get(): TopoDS_HShape;
}

  export declare class Handle_TopoDS_HShape_1 extends Handle_TopoDS_HShape {
    constructor();
  }

  export declare class Handle_TopoDS_HShape_2 extends Handle_TopoDS_HShape {
    constructor(thePtr: TopoDS_HShape);
  }

  export declare class Handle_TopoDS_HShape_3 extends Handle_TopoDS_HShape {
    constructor(theHandle: Handle_TopoDS_HShape);
  }

  export declare class Handle_TopoDS_HShape_4 extends Handle_TopoDS_HShape {
    constructor(theHandle: Handle_TopoDS_HShape);
  }

export declare class Handle_TopoDS_LockedShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_LockedShape): void;
  get(): TopoDS_LockedShape;
}

  export declare class Handle_TopoDS_LockedShape_1 extends Handle_TopoDS_LockedShape {
    constructor();
  }

  export declare class Handle_TopoDS_LockedShape_2 extends Handle_TopoDS_LockedShape {
    constructor(thePtr: TopoDS_LockedShape);
  }

  export declare class Handle_TopoDS_LockedShape_3 extends Handle_TopoDS_LockedShape {
    constructor(theHandle: Handle_TopoDS_LockedShape);
  }

  export declare class Handle_TopoDS_LockedShape_4 extends Handle_TopoDS_LockedShape {
    constructor(theHandle: Handle_TopoDS_LockedShape);
  }

export declare class Handle_TopoDS_UnCompatibleShapes {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_UnCompatibleShapes): void;
  get(): TopoDS_UnCompatibleShapes;
}

  export declare class Handle_TopoDS_UnCompatibleShapes_1 extends Handle_TopoDS_UnCompatibleShapes {
    constructor();
  }

  export declare class Handle_TopoDS_UnCompatibleShapes_2 extends Handle_TopoDS_UnCompatibleShapes {
    constructor(thePtr: TopoDS_UnCompatibleShapes);
  }

  export declare class Handle_TopoDS_UnCompatibleShapes_3 extends Handle_TopoDS_UnCompatibleShapes {
    constructor(theHandle: Handle_TopoDS_UnCompatibleShapes);
  }

  export declare class Handle_TopoDS_UnCompatibleShapes_4 extends Handle_TopoDS_UnCompatibleShapes {
    constructor(theHandle: Handle_TopoDS_UnCompatibleShapes);
  }

export declare type TKBRepLib = {
  TopoDS_Shape: typeof TopoDS_Shape;
  TopoDS_Edge: typeof TopoDS_Edge;
  TopoDS_Face: typeof TopoDS_Face;
  TopoDS_Vertex: typeof TopoDS_Vertex;
  TopoDS_Compound: typeof TopoDS_Compound;
  TopoDS_Wire: typeof TopoDS_Wire;
  TopoDS_AlertWithShape: typeof TopoDS_AlertWithShape;
  BRepTools_History: typeof BRepTools_History;
  TopoDS_Solid: typeof TopoDS_Solid;
  BRepAdaptor_Surface_1: typeof BRepAdaptor_Surface_1;
  BRepAdaptor_Surface_2: typeof BRepAdaptor_Surface_2;
  TopoDS_TWire: typeof TopoDS_TWire;
  TopoDS_TShell: typeof TopoDS_TShell;
  TopoDS_TSolid: typeof TopoDS_TSolid;
  TopoDS_TCompSolid: typeof TopoDS_TCompSolid;
  TopoDS_TCompound: typeof TopoDS_TCompound;
  TopoDS_Shell: typeof TopoDS_Shell;
  TopoDS_CompSolid: typeof TopoDS_CompSolid;
  TopoDS_TFace: typeof TopoDS_TFace;
  BRep_TFace: typeof BRep_TFace;
  BRep_TVertex: typeof BRep_TVertex;
  BRep_Curve3D: typeof BRep_Curve3D;
  BRep_CurveOn2Surfaces: typeof BRep_CurveOn2Surfaces;
  BRep_CurveOnSurface: typeof BRep_CurveOnSurface;
  BRep_CurveOnClosedSurface: typeof BRep_CurveOnClosedSurface;
  BRep_PointOnCurve: typeof BRep_PointOnCurve;
  BRep_PointOnCurveOnSurface: typeof BRep_PointOnCurveOnSurface;
  BRep_PointOnSurface: typeof BRep_PointOnSurface;
  BRep_Polygon3D: typeof BRep_Polygon3D;
  BRep_PolygonOnSurface: typeof BRep_PolygonOnSurface;
  BRep_PolygonOnClosedSurface: typeof BRep_PolygonOnClosedSurface;
  BRep_PolygonOnTriangulation: typeof BRep_PolygonOnTriangulation;
  BRep_PolygonOnClosedTriangulation: typeof BRep_PolygonOnClosedTriangulation;
  BRep_TEdge: typeof BRep_TEdge;
  BRepAdaptor_Curve_1: typeof BRepAdaptor_Curve_1;
  BRepAdaptor_Curve_2: typeof BRepAdaptor_Curve_2;
  BRepAdaptor_Curve_3: typeof BRepAdaptor_Curve_3;
  BRepAdaptor_CompCurve_1: typeof BRepAdaptor_CompCurve_1;
  BRepAdaptor_CompCurve_2: typeof BRepAdaptor_CompCurve_2;
  BRepAdaptor_CompCurve_3: typeof BRepAdaptor_CompCurve_3;
  BRepAdaptor_Curve2d_1: typeof BRepAdaptor_Curve2d_1;
  BRepAdaptor_Curve2d_2: typeof BRepAdaptor_Curve2d_2;
  BRepAdaptor_HCompCurve_1: typeof BRepAdaptor_HCompCurve_1;
  BRepAdaptor_HCompCurve_2: typeof BRepAdaptor_HCompCurve_2;
  BRepAdaptor_HCurve_1: typeof BRepAdaptor_HCurve_1;
  BRepAdaptor_HCurve_2: typeof BRepAdaptor_HCurve_2;
  BRepAdaptor_HCurve2d_1: typeof BRepAdaptor_HCurve2d_1;
  BRepAdaptor_HCurve2d_2: typeof BRepAdaptor_HCurve2d_2;
  BRepAdaptor_HSurface_1: typeof BRepAdaptor_HSurface_1;
  BRepAdaptor_HSurface_2: typeof BRepAdaptor_HSurface_2;
  BRepTools_Modifier_1: typeof BRepTools_Modifier_1;
  BRepTools_Modifier_2: typeof BRepTools_Modifier_2;
  BRepTools_Modifier_3: typeof BRepTools_Modifier_3;
  BRepTools_ReShape: typeof BRepTools_ReShape;
  TopExp_Explorer_1: typeof TopExp_Explorer_1;
  TopExp_Explorer_2: typeof TopExp_Explorer_2;
  TopoDS_Iterator_1: typeof TopoDS_Iterator_1;
  TopoDS_Iterator_2: typeof TopoDS_Iterator_2;
  BRepTools_WireExplorer_1: typeof BRepTools_WireExplorer_1;
  BRepTools_WireExplorer_2: typeof BRepTools_WireExplorer_2;
  BRepTools_WireExplorer_3: typeof BRepTools_WireExplorer_3;
  BRepLProp_CLProps_1: typeof BRepLProp_CLProps_1;
  BRepLProp_CLProps_2: typeof BRepLProp_CLProps_2;
  BRepLProp_CLProps_3: typeof BRepLProp_CLProps_3;
  BRepLProp_SLProps_1: typeof BRepLProp_SLProps_1;
  BRepLProp_SLProps_2: typeof BRepLProp_SLProps_2;
  BRepLProp_SLProps_3: typeof BRepLProp_SLProps_3;
  BRepTools_GTrsfModification: typeof BRepTools_GTrsfModification;
  BRepTools_NurbsConvertModification: typeof BRepTools_NurbsConvertModification;
  BRepTools_Quilt: typeof BRepTools_Quilt;
  TopTools_LocationSet: typeof TopTools_LocationSet;
  TopTools_ShapeSet: typeof TopTools_ShapeSet;
  BRepTools_ShapeSet_1: typeof BRepTools_ShapeSet_1;
  BRepTools_ShapeSet_2: typeof BRepTools_ShapeSet_2;
  BRepTools_Substitution: typeof BRepTools_Substitution;
  BRepTools_TrsfModification: typeof BRepTools_TrsfModification;
  TopTools_MutexForShapeProvider: typeof TopTools_MutexForShapeProvider;
  TopoDS_AlertAttribute: typeof TopoDS_AlertAttribute;
  TopoDS_FrozenShape_1: typeof TopoDS_FrozenShape_1;
  TopoDS_FrozenShape_2: typeof TopoDS_FrozenShape_2;
  TopoDS_HShape_1: typeof TopoDS_HShape_1;
  TopoDS_HShape_2: typeof TopoDS_HShape_2;
  TopoDS_LockedShape_1: typeof TopoDS_LockedShape_1;
  TopoDS_LockedShape_2: typeof TopoDS_LockedShape_2;
  TopoDS_UnCompatibleShapes_1: typeof TopoDS_UnCompatibleShapes_1;
  TopoDS_UnCompatibleShapes_2: typeof TopoDS_UnCompatibleShapes_2;
  Handle_TopoDS_TShape_1: typeof Handle_TopoDS_TShape_1;
  Handle_TopoDS_TShape_2: typeof Handle_TopoDS_TShape_2;
  Handle_TopoDS_TShape_3: typeof Handle_TopoDS_TShape_3;
  Handle_TopoDS_TShape_4: typeof Handle_TopoDS_TShape_4;
  TopTools_DataMapOfIntegerListOfShape_1: typeof TopTools_DataMapOfIntegerListOfShape_1;
  TopTools_DataMapOfIntegerListOfShape_2: typeof TopTools_DataMapOfIntegerListOfShape_2;
  TopTools_DataMapOfIntegerListOfShape_3: typeof TopTools_DataMapOfIntegerListOfShape_3;
  TopTools_MapOfShape_1: typeof TopTools_MapOfShape_1;
  TopTools_MapOfShape_2: typeof TopTools_MapOfShape_2;
  TopTools_MapOfShape_3: typeof TopTools_MapOfShape_3;
  TopTools_IndexedMapOfShape_1: typeof TopTools_IndexedMapOfShape_1;
  TopTools_IndexedMapOfShape_2: typeof TopTools_IndexedMapOfShape_2;
  TopTools_IndexedMapOfShape_3: typeof TopTools_IndexedMapOfShape_3;
  TopTools_IndexedDataMapOfShapeListOfShape_1: typeof TopTools_IndexedDataMapOfShapeListOfShape_1;
  TopTools_IndexedDataMapOfShapeListOfShape_2: typeof TopTools_IndexedDataMapOfShapeListOfShape_2;
  TopTools_IndexedDataMapOfShapeListOfShape_3: typeof TopTools_IndexedDataMapOfShapeListOfShape_3;
  TopTools_DataMapOfShapeListOfShape_1: typeof TopTools_DataMapOfShapeListOfShape_1;
  TopTools_DataMapOfShapeListOfShape_2: typeof TopTools_DataMapOfShapeListOfShape_2;
  TopTools_DataMapOfShapeListOfShape_3: typeof TopTools_DataMapOfShapeListOfShape_3;
  Handle_BRepTools_History_1: typeof Handle_BRepTools_History_1;
  Handle_BRepTools_History_2: typeof Handle_BRepTools_History_2;
  Handle_BRepTools_History_3: typeof Handle_BRepTools_History_3;
  Handle_BRepTools_History_4: typeof Handle_BRepTools_History_4;
  TopTools_DataMapOfShapeShape_1: typeof TopTools_DataMapOfShapeShape_1;
  TopTools_DataMapOfShapeShape_2: typeof TopTools_DataMapOfShapeShape_2;
  TopTools_DataMapOfShapeShape_3: typeof TopTools_DataMapOfShapeShape_3;
  TopTools_IndexedMapOfOrientedShape_1: typeof TopTools_IndexedMapOfOrientedShape_1;
  TopTools_IndexedMapOfOrientedShape_2: typeof TopTools_IndexedMapOfOrientedShape_2;
  TopTools_IndexedMapOfOrientedShape_3: typeof TopTools_IndexedMapOfOrientedShape_3;
  TopTools_DataMapOfShapeBox_1: typeof TopTools_DataMapOfShapeBox_1;
  TopTools_DataMapOfShapeBox_2: typeof TopTools_DataMapOfShapeBox_2;
  TopTools_DataMapOfShapeBox_3: typeof TopTools_DataMapOfShapeBox_3;
  TopTools_DataMapOfShapeInteger_1: typeof TopTools_DataMapOfShapeInteger_1;
  TopTools_DataMapOfShapeInteger_2: typeof TopTools_DataMapOfShapeInteger_2;
  TopTools_DataMapOfShapeInteger_3: typeof TopTools_DataMapOfShapeInteger_3;
  TopTools_IndexedDataMapOfShapeReal_1: typeof TopTools_IndexedDataMapOfShapeReal_1;
  TopTools_IndexedDataMapOfShapeReal_2: typeof TopTools_IndexedDataMapOfShapeReal_2;
  TopTools_IndexedDataMapOfShapeReal_3: typeof TopTools_IndexedDataMapOfShapeReal_3;
  TopTools_ListOfListOfShape_1: typeof TopTools_ListOfListOfShape_1;
  TopTools_ListOfListOfShape_2: typeof TopTools_ListOfListOfShape_2;
  TopTools_ListOfListOfShape_3: typeof TopTools_ListOfListOfShape_3;
  Handle_TopoDS_TWire_1: typeof Handle_TopoDS_TWire_1;
  Handle_TopoDS_TWire_2: typeof Handle_TopoDS_TWire_2;
  Handle_TopoDS_TWire_3: typeof Handle_TopoDS_TWire_3;
  Handle_TopoDS_TWire_4: typeof Handle_TopoDS_TWire_4;
  Handle_TopoDS_TShell_1: typeof Handle_TopoDS_TShell_1;
  Handle_TopoDS_TShell_2: typeof Handle_TopoDS_TShell_2;
  Handle_TopoDS_TShell_3: typeof Handle_TopoDS_TShell_3;
  Handle_TopoDS_TShell_4: typeof Handle_TopoDS_TShell_4;
  Handle_TopoDS_TSolid_1: typeof Handle_TopoDS_TSolid_1;
  Handle_TopoDS_TSolid_2: typeof Handle_TopoDS_TSolid_2;
  Handle_TopoDS_TSolid_3: typeof Handle_TopoDS_TSolid_3;
  Handle_TopoDS_TSolid_4: typeof Handle_TopoDS_TSolid_4;
  Handle_TopoDS_TCompSolid_1: typeof Handle_TopoDS_TCompSolid_1;
  Handle_TopoDS_TCompSolid_2: typeof Handle_TopoDS_TCompSolid_2;
  Handle_TopoDS_TCompSolid_3: typeof Handle_TopoDS_TCompSolid_3;
  Handle_TopoDS_TCompSolid_4: typeof Handle_TopoDS_TCompSolid_4;
  Handle_TopoDS_TCompound_1: typeof Handle_TopoDS_TCompound_1;
  Handle_TopoDS_TCompound_2: typeof Handle_TopoDS_TCompound_2;
  Handle_TopoDS_TCompound_3: typeof Handle_TopoDS_TCompound_3;
  Handle_TopoDS_TCompound_4: typeof Handle_TopoDS_TCompound_4;
  Handle_TopoDS_TFace_1: typeof Handle_TopoDS_TFace_1;
  Handle_TopoDS_TFace_2: typeof Handle_TopoDS_TFace_2;
  Handle_TopoDS_TFace_3: typeof Handle_TopoDS_TFace_3;
  Handle_TopoDS_TFace_4: typeof Handle_TopoDS_TFace_4;
  Handle_BRep_TFace_1: typeof Handle_BRep_TFace_1;
  Handle_BRep_TFace_2: typeof Handle_BRep_TFace_2;
  Handle_BRep_TFace_3: typeof Handle_BRep_TFace_3;
  Handle_BRep_TFace_4: typeof Handle_BRep_TFace_4;
  Handle_BRep_PointRepresentation_1: typeof Handle_BRep_PointRepresentation_1;
  Handle_BRep_PointRepresentation_2: typeof Handle_BRep_PointRepresentation_2;
  Handle_BRep_PointRepresentation_3: typeof Handle_BRep_PointRepresentation_3;
  Handle_BRep_PointRepresentation_4: typeof Handle_BRep_PointRepresentation_4;
  Handle_TopoDS_TVertex_1: typeof Handle_TopoDS_TVertex_1;
  Handle_TopoDS_TVertex_2: typeof Handle_TopoDS_TVertex_2;
  Handle_TopoDS_TVertex_3: typeof Handle_TopoDS_TVertex_3;
  Handle_TopoDS_TVertex_4: typeof Handle_TopoDS_TVertex_4;
  Handle_BRep_TVertex_1: typeof Handle_BRep_TVertex_1;
  Handle_BRep_TVertex_2: typeof Handle_BRep_TVertex_2;
  Handle_BRep_TVertex_3: typeof Handle_BRep_TVertex_3;
  Handle_BRep_TVertex_4: typeof Handle_BRep_TVertex_4;
  Handle_BRep_CurveRepresentation_1: typeof Handle_BRep_CurveRepresentation_1;
  Handle_BRep_CurveRepresentation_2: typeof Handle_BRep_CurveRepresentation_2;
  Handle_BRep_CurveRepresentation_3: typeof Handle_BRep_CurveRepresentation_3;
  Handle_BRep_CurveRepresentation_4: typeof Handle_BRep_CurveRepresentation_4;
  Handle_BRep_GCurve_1: typeof Handle_BRep_GCurve_1;
  Handle_BRep_GCurve_2: typeof Handle_BRep_GCurve_2;
  Handle_BRep_GCurve_3: typeof Handle_BRep_GCurve_3;
  Handle_BRep_GCurve_4: typeof Handle_BRep_GCurve_4;
  Handle_BRep_Curve3D_1: typeof Handle_BRep_Curve3D_1;
  Handle_BRep_Curve3D_2: typeof Handle_BRep_Curve3D_2;
  Handle_BRep_Curve3D_3: typeof Handle_BRep_Curve3D_3;
  Handle_BRep_Curve3D_4: typeof Handle_BRep_Curve3D_4;
  Handle_BRep_CurveOn2Surfaces_1: typeof Handle_BRep_CurveOn2Surfaces_1;
  Handle_BRep_CurveOn2Surfaces_2: typeof Handle_BRep_CurveOn2Surfaces_2;
  Handle_BRep_CurveOn2Surfaces_3: typeof Handle_BRep_CurveOn2Surfaces_3;
  Handle_BRep_CurveOn2Surfaces_4: typeof Handle_BRep_CurveOn2Surfaces_4;
  Handle_BRep_CurveOnSurface_1: typeof Handle_BRep_CurveOnSurface_1;
  Handle_BRep_CurveOnSurface_2: typeof Handle_BRep_CurveOnSurface_2;
  Handle_BRep_CurveOnSurface_3: typeof Handle_BRep_CurveOnSurface_3;
  Handle_BRep_CurveOnSurface_4: typeof Handle_BRep_CurveOnSurface_4;
  Handle_BRep_CurveOnClosedSurface_1: typeof Handle_BRep_CurveOnClosedSurface_1;
  Handle_BRep_CurveOnClosedSurface_2: typeof Handle_BRep_CurveOnClosedSurface_2;
  Handle_BRep_CurveOnClosedSurface_3: typeof Handle_BRep_CurveOnClosedSurface_3;
  Handle_BRep_CurveOnClosedSurface_4: typeof Handle_BRep_CurveOnClosedSurface_4;
  Handle_BRep_PointOnCurve_1: typeof Handle_BRep_PointOnCurve_1;
  Handle_BRep_PointOnCurve_2: typeof Handle_BRep_PointOnCurve_2;
  Handle_BRep_PointOnCurve_3: typeof Handle_BRep_PointOnCurve_3;
  Handle_BRep_PointOnCurve_4: typeof Handle_BRep_PointOnCurve_4;
  Handle_BRep_PointsOnSurface_1: typeof Handle_BRep_PointsOnSurface_1;
  Handle_BRep_PointsOnSurface_2: typeof Handle_BRep_PointsOnSurface_2;
  Handle_BRep_PointsOnSurface_3: typeof Handle_BRep_PointsOnSurface_3;
  Handle_BRep_PointsOnSurface_4: typeof Handle_BRep_PointsOnSurface_4;
  Handle_BRep_PointOnCurveOnSurface_1: typeof Handle_BRep_PointOnCurveOnSurface_1;
  Handle_BRep_PointOnCurveOnSurface_2: typeof Handle_BRep_PointOnCurveOnSurface_2;
  Handle_BRep_PointOnCurveOnSurface_3: typeof Handle_BRep_PointOnCurveOnSurface_3;
  Handle_BRep_PointOnCurveOnSurface_4: typeof Handle_BRep_PointOnCurveOnSurface_4;
  Handle_BRep_PointOnSurface_1: typeof Handle_BRep_PointOnSurface_1;
  Handle_BRep_PointOnSurface_2: typeof Handle_BRep_PointOnSurface_2;
  Handle_BRep_PointOnSurface_3: typeof Handle_BRep_PointOnSurface_3;
  Handle_BRep_PointOnSurface_4: typeof Handle_BRep_PointOnSurface_4;
  Handle_BRep_Polygon3D_1: typeof Handle_BRep_Polygon3D_1;
  Handle_BRep_Polygon3D_2: typeof Handle_BRep_Polygon3D_2;
  Handle_BRep_Polygon3D_3: typeof Handle_BRep_Polygon3D_3;
  Handle_BRep_Polygon3D_4: typeof Handle_BRep_Polygon3D_4;
  Handle_BRep_PolygonOnSurface_1: typeof Handle_BRep_PolygonOnSurface_1;
  Handle_BRep_PolygonOnSurface_2: typeof Handle_BRep_PolygonOnSurface_2;
  Handle_BRep_PolygonOnSurface_3: typeof Handle_BRep_PolygonOnSurface_3;
  Handle_BRep_PolygonOnSurface_4: typeof Handle_BRep_PolygonOnSurface_4;
  Handle_BRep_PolygonOnClosedSurface_1: typeof Handle_BRep_PolygonOnClosedSurface_1;
  Handle_BRep_PolygonOnClosedSurface_2: typeof Handle_BRep_PolygonOnClosedSurface_2;
  Handle_BRep_PolygonOnClosedSurface_3: typeof Handle_BRep_PolygonOnClosedSurface_3;
  Handle_BRep_PolygonOnClosedSurface_4: typeof Handle_BRep_PolygonOnClosedSurface_4;
  Handle_BRep_PolygonOnTriangulation_1: typeof Handle_BRep_PolygonOnTriangulation_1;
  Handle_BRep_PolygonOnTriangulation_2: typeof Handle_BRep_PolygonOnTriangulation_2;
  Handle_BRep_PolygonOnTriangulation_3: typeof Handle_BRep_PolygonOnTriangulation_3;
  Handle_BRep_PolygonOnTriangulation_4: typeof Handle_BRep_PolygonOnTriangulation_4;
  Handle_BRep_PolygonOnClosedTriangulation_1: typeof Handle_BRep_PolygonOnClosedTriangulation_1;
  Handle_BRep_PolygonOnClosedTriangulation_2: typeof Handle_BRep_PolygonOnClosedTriangulation_2;
  Handle_BRep_PolygonOnClosedTriangulation_3: typeof Handle_BRep_PolygonOnClosedTriangulation_3;
  Handle_BRep_PolygonOnClosedTriangulation_4: typeof Handle_BRep_PolygonOnClosedTriangulation_4;
  Handle_TopoDS_TEdge_1: typeof Handle_TopoDS_TEdge_1;
  Handle_TopoDS_TEdge_2: typeof Handle_TopoDS_TEdge_2;
  Handle_TopoDS_TEdge_3: typeof Handle_TopoDS_TEdge_3;
  Handle_TopoDS_TEdge_4: typeof Handle_TopoDS_TEdge_4;
  Handle_BRep_TEdge_1: typeof Handle_BRep_TEdge_1;
  Handle_BRep_TEdge_2: typeof Handle_BRep_TEdge_2;
  Handle_BRep_TEdge_3: typeof Handle_BRep_TEdge_3;
  Handle_BRep_TEdge_4: typeof Handle_BRep_TEdge_4;
  BRepAdaptor_Array1OfCurve_1: typeof BRepAdaptor_Array1OfCurve_1;
  BRepAdaptor_Array1OfCurve_2: typeof BRepAdaptor_Array1OfCurve_2;
  BRepAdaptor_Array1OfCurve_3: typeof BRepAdaptor_Array1OfCurve_3;
  BRepAdaptor_Array1OfCurve_4: typeof BRepAdaptor_Array1OfCurve_4;
  BRepAdaptor_Array1OfCurve_5: typeof BRepAdaptor_Array1OfCurve_5;
  Handle_BRepAdaptor_HArray1OfCurve_1: typeof Handle_BRepAdaptor_HArray1OfCurve_1;
  Handle_BRepAdaptor_HArray1OfCurve_2: typeof Handle_BRepAdaptor_HArray1OfCurve_2;
  Handle_BRepAdaptor_HArray1OfCurve_3: typeof Handle_BRepAdaptor_HArray1OfCurve_3;
  Handle_BRepAdaptor_HArray1OfCurve_4: typeof Handle_BRepAdaptor_HArray1OfCurve_4;
  Handle_BRepAdaptor_HCompCurve_1: typeof Handle_BRepAdaptor_HCompCurve_1;
  Handle_BRepAdaptor_HCompCurve_2: typeof Handle_BRepAdaptor_HCompCurve_2;
  Handle_BRepAdaptor_HCompCurve_3: typeof Handle_BRepAdaptor_HCompCurve_3;
  Handle_BRepAdaptor_HCompCurve_4: typeof Handle_BRepAdaptor_HCompCurve_4;
  Handle_BRepAdaptor_HCurve_1: typeof Handle_BRepAdaptor_HCurve_1;
  Handle_BRepAdaptor_HCurve_2: typeof Handle_BRepAdaptor_HCurve_2;
  Handle_BRepAdaptor_HCurve_3: typeof Handle_BRepAdaptor_HCurve_3;
  Handle_BRepAdaptor_HCurve_4: typeof Handle_BRepAdaptor_HCurve_4;
  Handle_BRepAdaptor_HCurve2d_1: typeof Handle_BRepAdaptor_HCurve2d_1;
  Handle_BRepAdaptor_HCurve2d_2: typeof Handle_BRepAdaptor_HCurve2d_2;
  Handle_BRepAdaptor_HCurve2d_3: typeof Handle_BRepAdaptor_HCurve2d_3;
  Handle_BRepAdaptor_HCurve2d_4: typeof Handle_BRepAdaptor_HCurve2d_4;
  Handle_BRepAdaptor_HSurface_1: typeof Handle_BRepAdaptor_HSurface_1;
  Handle_BRepAdaptor_HSurface_2: typeof Handle_BRepAdaptor_HSurface_2;
  Handle_BRepAdaptor_HSurface_3: typeof Handle_BRepAdaptor_HSurface_3;
  Handle_BRepAdaptor_HSurface_4: typeof Handle_BRepAdaptor_HSurface_4;
  Handle_BRepTools_ReShape_1: typeof Handle_BRepTools_ReShape_1;
  Handle_BRepTools_ReShape_2: typeof Handle_BRepTools_ReShape_2;
  Handle_BRepTools_ReShape_3: typeof Handle_BRepTools_ReShape_3;
  Handle_BRepTools_ReShape_4: typeof Handle_BRepTools_ReShape_4;
  TopTools_IndexedDataMapOfShapeShape_1: typeof TopTools_IndexedDataMapOfShapeShape_1;
  TopTools_IndexedDataMapOfShapeShape_2: typeof TopTools_IndexedDataMapOfShapeShape_2;
  TopTools_IndexedDataMapOfShapeShape_3: typeof TopTools_IndexedDataMapOfShapeShape_3;
  TopTools_SequenceOfShape_1: typeof TopTools_SequenceOfShape_1;
  TopTools_SequenceOfShape_2: typeof TopTools_SequenceOfShape_2;
  TopTools_SequenceOfShape_3: typeof TopTools_SequenceOfShape_3;
  TopTools_Array1OfShape_1: typeof TopTools_Array1OfShape_1;
  TopTools_Array1OfShape_2: typeof TopTools_Array1OfShape_2;
  TopTools_Array1OfShape_3: typeof TopTools_Array1OfShape_3;
  TopTools_Array1OfShape_4: typeof TopTools_Array1OfShape_4;
  TopTools_Array1OfShape_5: typeof TopTools_Array1OfShape_5;
  Handle_TopTools_HArray1OfShape_1: typeof Handle_TopTools_HArray1OfShape_1;
  Handle_TopTools_HArray1OfShape_2: typeof Handle_TopTools_HArray1OfShape_2;
  Handle_TopTools_HArray1OfShape_3: typeof Handle_TopTools_HArray1OfShape_3;
  Handle_TopTools_HArray1OfShape_4: typeof Handle_TopTools_HArray1OfShape_4;
  TopTools_Array2OfShape_1: typeof TopTools_Array2OfShape_1;
  TopTools_Array2OfShape_2: typeof TopTools_Array2OfShape_2;
  TopTools_Array2OfShape_3: typeof TopTools_Array2OfShape_3;
  TopTools_Array2OfShape_4: typeof TopTools_Array2OfShape_4;
  TopTools_Array2OfShape_5: typeof TopTools_Array2OfShape_5;
  Handle_TopTools_HArray2OfShape_1: typeof Handle_TopTools_HArray2OfShape_1;
  Handle_TopTools_HArray2OfShape_2: typeof Handle_TopTools_HArray2OfShape_2;
  Handle_TopTools_HArray2OfShape_3: typeof Handle_TopTools_HArray2OfShape_3;
  Handle_TopTools_HArray2OfShape_4: typeof Handle_TopTools_HArray2OfShape_4;
  TopTools_DataMapOfShapeListOfInteger_1: typeof TopTools_DataMapOfShapeListOfInteger_1;
  TopTools_DataMapOfShapeListOfInteger_2: typeof TopTools_DataMapOfShapeListOfInteger_2;
  TopTools_DataMapOfShapeListOfInteger_3: typeof TopTools_DataMapOfShapeListOfInteger_3;
  TopTools_DataMapOfIntegerShape_1: typeof TopTools_DataMapOfIntegerShape_1;
  TopTools_DataMapOfIntegerShape_2: typeof TopTools_DataMapOfIntegerShape_2;
  TopTools_DataMapOfIntegerShape_3: typeof TopTools_DataMapOfIntegerShape_3;
  TopTools_DataMapOfShapeReal_1: typeof TopTools_DataMapOfShapeReal_1;
  TopTools_DataMapOfShapeReal_2: typeof TopTools_DataMapOfShapeReal_2;
  TopTools_DataMapOfShapeReal_3: typeof TopTools_DataMapOfShapeReal_3;
  Handle_BRepTools_Modification_1: typeof Handle_BRepTools_Modification_1;
  Handle_BRepTools_Modification_2: typeof Handle_BRepTools_Modification_2;
  Handle_BRepTools_Modification_3: typeof Handle_BRepTools_Modification_3;
  Handle_BRepTools_Modification_4: typeof Handle_BRepTools_Modification_4;
  Handle_TopTools_HSequenceOfShape_1: typeof Handle_TopTools_HSequenceOfShape_1;
  Handle_TopTools_HSequenceOfShape_2: typeof Handle_TopTools_HSequenceOfShape_2;
  Handle_TopTools_HSequenceOfShape_3: typeof Handle_TopTools_HSequenceOfShape_3;
  Handle_TopTools_HSequenceOfShape_4: typeof Handle_TopTools_HSequenceOfShape_4;
  BRepTools_MapOfVertexPnt2d_1: typeof BRepTools_MapOfVertexPnt2d_1;
  BRepTools_MapOfVertexPnt2d_2: typeof BRepTools_MapOfVertexPnt2d_2;
  BRepTools_MapOfVertexPnt2d_3: typeof BRepTools_MapOfVertexPnt2d_3;
  Handle_BRepTools_GTrsfModification_1: typeof Handle_BRepTools_GTrsfModification_1;
  Handle_BRepTools_GTrsfModification_2: typeof Handle_BRepTools_GTrsfModification_2;
  Handle_BRepTools_GTrsfModification_3: typeof Handle_BRepTools_GTrsfModification_3;
  Handle_BRepTools_GTrsfModification_4: typeof Handle_BRepTools_GTrsfModification_4;
  Handle_BRepTools_NurbsConvertModification_1: typeof Handle_BRepTools_NurbsConvertModification_1;
  Handle_BRepTools_NurbsConvertModification_2: typeof Handle_BRepTools_NurbsConvertModification_2;
  Handle_BRepTools_NurbsConvertModification_3: typeof Handle_BRepTools_NurbsConvertModification_3;
  Handle_BRepTools_NurbsConvertModification_4: typeof Handle_BRepTools_NurbsConvertModification_4;
  Handle_BRepTools_TrsfModification_1: typeof Handle_BRepTools_TrsfModification_1;
  Handle_BRepTools_TrsfModification_2: typeof Handle_BRepTools_TrsfModification_2;
  Handle_BRepTools_TrsfModification_3: typeof Handle_BRepTools_TrsfModification_3;
  Handle_BRepTools_TrsfModification_4: typeof Handle_BRepTools_TrsfModification_4;
  TopTools_DataMapOfOrientedShapeInteger_1: typeof TopTools_DataMapOfOrientedShapeInteger_1;
  TopTools_DataMapOfOrientedShapeInteger_2: typeof TopTools_DataMapOfOrientedShapeInteger_2;
  TopTools_DataMapOfOrientedShapeInteger_3: typeof TopTools_DataMapOfOrientedShapeInteger_3;
  TopTools_Array1OfListOfShape_1: typeof TopTools_Array1OfListOfShape_1;
  TopTools_Array1OfListOfShape_2: typeof TopTools_Array1OfListOfShape_2;
  TopTools_Array1OfListOfShape_3: typeof TopTools_Array1OfListOfShape_3;
  TopTools_Array1OfListOfShape_4: typeof TopTools_Array1OfListOfShape_4;
  TopTools_Array1OfListOfShape_5: typeof TopTools_Array1OfListOfShape_5;
  Handle_TopTools_HArray1OfListOfShape_1: typeof Handle_TopTools_HArray1OfListOfShape_1;
  Handle_TopTools_HArray1OfListOfShape_2: typeof Handle_TopTools_HArray1OfListOfShape_2;
  Handle_TopTools_HArray1OfListOfShape_3: typeof Handle_TopTools_HArray1OfListOfShape_3;
  Handle_TopTools_HArray1OfListOfShape_4: typeof Handle_TopTools_HArray1OfListOfShape_4;
  TopTools_IndexedDataMapOfShapeAddress_1: typeof TopTools_IndexedDataMapOfShapeAddress_1;
  TopTools_IndexedDataMapOfShapeAddress_2: typeof TopTools_IndexedDataMapOfShapeAddress_2;
  TopTools_IndexedDataMapOfShapeAddress_3: typeof TopTools_IndexedDataMapOfShapeAddress_3;
  TopTools_DataMapOfOrientedShapeShape_1: typeof TopTools_DataMapOfOrientedShapeShape_1;
  TopTools_DataMapOfOrientedShapeShape_2: typeof TopTools_DataMapOfOrientedShapeShape_2;
  TopTools_DataMapOfOrientedShapeShape_3: typeof TopTools_DataMapOfOrientedShapeShape_3;
  TopTools_DataMapOfShapeSequenceOfShape_1: typeof TopTools_DataMapOfShapeSequenceOfShape_1;
  TopTools_DataMapOfShapeSequenceOfShape_2: typeof TopTools_DataMapOfShapeSequenceOfShape_2;
  TopTools_DataMapOfShapeSequenceOfShape_3: typeof TopTools_DataMapOfShapeSequenceOfShape_3;
  TopTools_MapOfOrientedShape_1: typeof TopTools_MapOfOrientedShape_1;
  TopTools_MapOfOrientedShape_2: typeof TopTools_MapOfOrientedShape_2;
  TopTools_MapOfOrientedShape_3: typeof TopTools_MapOfOrientedShape_3;
  Handle_TopoDS_FrozenShape_1: typeof Handle_TopoDS_FrozenShape_1;
  Handle_TopoDS_FrozenShape_2: typeof Handle_TopoDS_FrozenShape_2;
  Handle_TopoDS_FrozenShape_3: typeof Handle_TopoDS_FrozenShape_3;
  Handle_TopoDS_FrozenShape_4: typeof Handle_TopoDS_FrozenShape_4;
  Handle_TopoDS_HShape_1: typeof Handle_TopoDS_HShape_1;
  Handle_TopoDS_HShape_2: typeof Handle_TopoDS_HShape_2;
  Handle_TopoDS_HShape_3: typeof Handle_TopoDS_HShape_3;
  Handle_TopoDS_HShape_4: typeof Handle_TopoDS_HShape_4;
  Handle_TopoDS_LockedShape_1: typeof Handle_TopoDS_LockedShape_1;
  Handle_TopoDS_LockedShape_2: typeof Handle_TopoDS_LockedShape_2;
  Handle_TopoDS_LockedShape_3: typeof Handle_TopoDS_LockedShape_3;
  Handle_TopoDS_LockedShape_4: typeof Handle_TopoDS_LockedShape_4;
  Handle_TopoDS_UnCompatibleShapes_1: typeof Handle_TopoDS_UnCompatibleShapes_1;
  Handle_TopoDS_UnCompatibleShapes_2: typeof Handle_TopoDS_UnCompatibleShapes_2;
  Handle_TopoDS_UnCompatibleShapes_3: typeof Handle_TopoDS_UnCompatibleShapes_3;
  Handle_TopoDS_UnCompatibleShapes_4: typeof Handle_TopoDS_UnCompatibleShapes_4;
};
