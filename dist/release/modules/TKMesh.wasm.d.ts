declare const libName = "./modules/TKMesh.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class IMeshData_ParametersList extends Standard_Transient {
  GetParameter(theIndex: Graphic3d_ZLayerId): Quantity_AbsorbedDose;
  ParametersNb(): XCAFPrs_DocumentExplorerFlags;
  Clear(isKeepEndPoints: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_OrientedEdge {
  FirstNode(): Standard_Integer;
  LastNode(): Standard_Integer;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theOther: BRepMesh_OrientedEdge): Standard_Boolean;
}

  export declare class BRepMesh_OrientedEdge_1 extends BRepMesh_OrientedEdge {
    constructor();
  }

  export declare class BRepMesh_OrientedEdge_2 extends BRepMesh_OrientedEdge {
    constructor(theFirstNode: Standard_Integer, theLastNode: Standard_Integer);
  }

export declare class BRepMesh_Vertex {
  Initialize(theUV: gp_XY, theLocation3d: Standard_Integer, theMovability: BRepMesh_DegreeOfFreedom): void;
  Coord(): gp_XY;
  ChangeCoord(): gp_XY;
  Location3d(): Standard_Integer;
  Movability(): BRepMesh_DegreeOfFreedom;
  SetMovability(theMovability: BRepMesh_DegreeOfFreedom): void;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theOther: BRepMesh_Vertex): Standard_Boolean;
}

  export declare class BRepMesh_Vertex_1 extends BRepMesh_Vertex {
    constructor();
  }

  export declare class BRepMesh_Vertex_2 extends BRepMesh_Vertex {
    constructor(theUV: gp_XY, theLocation3d: Standard_Integer, theMovability: BRepMesh_DegreeOfFreedom);
  }

  export declare class BRepMesh_Vertex_3 extends BRepMesh_Vertex {
    constructor(theU: Standard_Real, theV: Standard_Real, theMovability: BRepMesh_DegreeOfFreedom);
  }

export declare class BRepMesh_Circle {
  SetLocation(theLocation: gp_XY): void;
  SetRadius(theRadius: Standard_Real): void;
  Location(): gp_XY;
  Radius(): Standard_Real;
}

  export declare class BRepMesh_Circle_1 extends BRepMesh_Circle {
    constructor();
  }

  export declare class BRepMesh_Circle_2 extends BRepMesh_Circle {
    constructor(theLocation: gp_XY, theRadius: Standard_Real);
  }

export declare class BRepMesh_Triangle {
  Initialize(theEdges: any, theOrientations: any, theMovability: BRepMesh_DegreeOfFreedom): void;
  Edges(theEdges: any, theOrientations: any): void;
  Movability(): BRepMesh_DegreeOfFreedom;
  SetMovability(theMovability: BRepMesh_DegreeOfFreedom): void;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theOther: BRepMesh_Triangle): Standard_Boolean;
}

  export declare class BRepMesh_Triangle_1 extends BRepMesh_Triangle {
    constructor();
  }

  export declare class BRepMesh_Triangle_2 extends BRepMesh_Triangle {
    constructor(theEdges: any, theOrientations: any, theMovability: BRepMesh_DegreeOfFreedom);
  }

export declare class BRepMesh_PairOfIndex {
  constructor()
  Clear(): void;
  Append(theIndex: Standard_Integer): void;
  Prepend(theIndex: Standard_Integer): void;
  IsEmpty(): Standard_Boolean;
  Extent(): Standard_Integer;
  FirstIndex(): Standard_Integer;
  LastIndex(): Standard_Integer;
  Index(thePairPos: Standard_Integer): Standard_Integer;
  SetIndex(thePairPos: Standard_Integer, theIndex: Standard_Integer): void;
  RemoveIndex(thePairPos: Standard_Integer): void;
}

export declare class BRepMesh_Edge extends BRepMesh_OrientedEdge {
  Movability(): BRepMesh_DegreeOfFreedom;
  SetMovability(theMovability: BRepMesh_DegreeOfFreedom): void;
  IsSameOrientation(theOther: BRepMesh_Edge): Standard_Boolean;
  IsEqual(theOther: BRepMesh_Edge): Standard_Boolean;
}

  export declare class BRepMesh_Edge_1 extends BRepMesh_Edge {
    constructor();
  }

  export declare class BRepMesh_Edge_2 extends BRepMesh_Edge {
    constructor(theFirstNode: Standard_Integer, theLastNode: Standard_Integer, theMovability: BRepMesh_DegreeOfFreedom);
  }

export declare class IMeshTools_MeshAlgo extends Standard_Transient {
  Perform(theDFace: any, theParameters: IMeshTools_Parameters, theRange: Message_ProgressRange): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_BaseMeshAlgo extends IMeshTools_MeshAlgo {
  Perform(theDFace: any, theParameters: IMeshTools_Parameters, theRange: Message_ProgressRange): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshData_Shape extends Standard_Transient {
  SetShape(theShape: TopoDS_Shape): void;
  GetShape(): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshData_TessellatedShape extends IMeshData_Shape {
  GetDeflection(): Standard_Real;
  SetDeflection(theValue: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshData_StatusOwner {
  IsEqual(theValue: IMeshData_Status): Standard_Boolean;
  IsSet(theValue: IMeshData_Status): Standard_Boolean;
  SetStatus(theValue: IMeshData_Status): void;
  UnsetStatus(theValue: IMeshData_Status): void;
  GetStatusMask(): Standard_Integer;
}

export declare class BRepMesh_DefaultRangeSplitter {
  constructor()
  Reset(theDFace: any, theParameters: IMeshTools_Parameters): void;
  AddPoint(thePoint: gp_Pnt2d): void;
  AdjustRange(): void;
  IsValid(): Standard_Boolean;
  Scale(thePoint: gp_Pnt2d, isToFaceBasis: Standard_Boolean): gp_Pnt2d;
  GenerateSurfaceNodes(theParameters: IMeshTools_Parameters): any;
  Point(thePoint2d: gp_Pnt2d): gp_Pnt;
  GetDFace(): any;
  GetSurface(): any;
  GetRangeU(): any;
  GetRangeV(): any;
  GetDelta(): any;
  GetToleranceUV(): any;
}

export declare class BRepMesh_UVParamRangeSplitter extends BRepMesh_DefaultRangeSplitter {
  constructor()
  Reset(theDFace: any, theParameters: IMeshTools_Parameters): void;
  GetParametersU_1(): any;
  GetParametersU_2(): any;
  GetParametersV_1(): any;
  GetParametersV_2(): any;
}

export declare class BRepMesh_NURBSRangeSplitter extends BRepMesh_UVParamRangeSplitter {
  constructor()
  AdjustRange(): void;
  GenerateSurfaceNodes(theParameters: IMeshTools_Parameters): any;
}

export declare class BRepMesh_BoundaryParamsRangeSplitter extends BRepMesh_NURBSRangeSplitter {
  constructor()
  AddPoint(thePoint: gp_Pnt2d): void;
}

export declare class BRepMesh_CircleInspector extends NCollection_CellFilter_InspectorXY {
  constructor(theTolerance: Standard_Real, theReservedSize: Standard_Integer, theAllocator: any)
  Bind(theIndex: Standard_Integer, theCircle: BRepMesh_Circle): void;
  Circles(): any;
  Circle(theIndex: Standard_Integer): BRepMesh_Circle;
  SetPoint(thePoint: gp_XY): void;
  GetShotCircles(): any;
  Inspect(theTargetIndex: Standard_Integer): NCollection_CellFilter_Action;
  IsEqual(theIndex: Standard_Integer, theTargetIndex: Standard_Integer): Standard_Boolean;
}

export declare class BRepMesh_CircleTool {
  Init(a0: Standard_Integer): void;
  SetCellSize_1(theSize: Standard_Real): void;
  SetCellSize_2(theSizeX: Standard_Real, theSizeY: Standard_Real): void;
  SetMinMaxSize(theMin: gp_XY, theMax: gp_XY): void;
  IsEmpty(): Standard_Boolean;
  Bind_1(theIndex: Standard_Integer, theCircle: gp_Circ2d): void;
  MakeCircle(thePoint1: gp_XY, thePoint2: gp_XY, thePoint3: gp_XY, theLocation: gp_XY, theRadius: Standard_Real): Standard_Boolean;
  Bind_2(theIndex: Standard_Integer, thePoint1: gp_XY, thePoint2: gp_XY, thePoint3: gp_XY): Standard_Boolean;
  MocBind(theIndex: Standard_Integer): void;
  Delete(theIndex: Standard_Integer): void;
  Select(thePoint: gp_XY): any;
}

  export declare class BRepMesh_CircleTool_1 extends BRepMesh_CircleTool {
    constructor(theAllocator: any);
  }

  export declare class BRepMesh_CircleTool_2 extends BRepMesh_CircleTool {
    constructor(theReservedSize: Standard_Integer, theAllocator: any);
  }

export declare class BRepMesh_Classifier extends Standard_Transient {
  constructor()
  Perform(thePoint: gp_Pnt2d): TopAbs_State;
  RegisterWire(theWire: NCollection_Sequence< gp_Pnt2d >, theTolUV: any, theRangeU: any, theRangeV: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_ConeRangeSplitter extends BRepMesh_DefaultRangeSplitter {
  constructor()
  GetSplitSteps(theParameters: IMeshTools_Parameters, theStepsNb: any): any;
  GenerateSurfaceNodes(theParameters: IMeshTools_Parameters): any;
}

export declare class BRepMesh_ConstrainedBaseMeshAlgo extends BRepMesh_BaseMeshAlgo {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshData_Model extends IMeshData_Shape {
  GetMaxSize(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  FacesNb(): Standard_Integer;
  AddFace(theFace: TopoDS_Face): any;
  GetFace(theIndex: Standard_Integer): any;
  EdgesNb(): Standard_Integer;
  AddEdge(theEdge: TopoDS_Edge): any;
  GetEdge(theIndex: Standard_Integer): any;
}

export declare class IMeshTools_ModelBuilder extends Message_Algorithm {
  Perform(theShape: TopoDS_Shape, theParameters: IMeshTools_Parameters): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshTools_ModelAlgo extends Standard_Transient {
  Perform(theModel: any, theParameters: IMeshTools_Parameters, theRange: Message_ProgressRange): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshTools_Context extends IMeshData_Shape {
  constructor()
  BuildModel(): Standard_Boolean;
  DiscretizeEdges(): Standard_Boolean;
  HealModel(): Standard_Boolean;
  PreProcessModel(): Standard_Boolean;
  DiscretizeFaces(theRange: Message_ProgressRange): Standard_Boolean;
  PostProcessModel(): Standard_Boolean;
  Clean(): void;
  GetModelBuilder(): any;
  SetModelBuilder(theBuilder: any): void;
  GetEdgeDiscret(): any;
  SetEdgeDiscret(theEdgeDiscret: any): void;
  GetModelHealer(): any;
  SetModelHealer(theModelHealer: any): void;
  GetPreProcessor(): any;
  SetPreProcessor(thePreProcessor: any): void;
  GetFaceDiscret(): any;
  SetFaceDiscret(theFaceDiscret: any): void;
  GetPostProcessor(): any;
  SetPostProcessor(thePostProcessor: any): void;
  GetParameters(): IMeshTools_Parameters;
  ChangeParameters(): IMeshTools_Parameters;
  GetModel(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_Context extends IMeshTools_Context {
  constructor(theMeshType: IMeshTools_MeshAlgoType)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshTools_CurveTessellator extends Standard_Transient {
  PointsNb(): Standard_Integer;
  Value(theIndex: Standard_Integer, thePoint: gp_Pnt, theParameter: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_CurveTessellator extends IMeshTools_CurveTessellator {
  PointsNb(): Standard_Integer;
  Value(theIndex: Standard_Integer, thePoint: gp_Pnt, theParameter: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepMesh_CurveTessellator_1 extends BRepMesh_CurveTessellator {
    constructor(theEdge: any, theParameters: IMeshTools_Parameters);
  }

  export declare class BRepMesh_CurveTessellator_2 extends BRepMesh_CurveTessellator {
    constructor(theEdge: any, theOrientation: TopAbs_Orientation, theFace: any, theParameters: IMeshTools_Parameters);
  }

export declare class BRepMesh_VertexInspector extends NCollection_CellFilter_InspectorXY {
  constructor(theAllocator: any)
  Add(theVertex: BRepMesh_Vertex): Standard_Integer;
  SetTolerance_1(theTolerance: Standard_Real): void;
  SetTolerance_2(theToleranceX: Standard_Real, theToleranceY: Standard_Real): void;
  Clear(): void;
  Delete(theIndex: Standard_Integer): void;
  NbVertices(): Standard_Integer;
  GetVertex(theIndex: Standard_Integer): BRepMesh_Vertex;
  SetPoint(thePoint: gp_XY): void;
  GetCoincidentPoint(): Standard_Integer;
  GetListOfDelPoints(): any;
  Vertices(): any;
  ChangeVertices(): any;
  Inspect(theTargetIndex: Standard_Integer): NCollection_CellFilter_Action;
  IsEqual(theIndex: Standard_Integer, theTargetIndex: Standard_Integer): Standard_Boolean;
}

export declare class BRepMesh_VertexTool extends Standard_Transient {
  constructor(theAllocator: any)
  SetCellSize_1(theSize: Standard_Real): void;
  SetCellSize_2(theSizeX: Standard_Real, theSizeY: Standard_Real): void;
  SetTolerance_1(theTolerance: Standard_Real): void;
  SetTolerance_2(theToleranceX: Standard_Real, theToleranceY: Standard_Real): void;
  GetTolerance(theToleranceX: Standard_Real, theToleranceY: Standard_Real): void;
  Add(theVertex: BRepMesh_Vertex, isForceAdd: Standard_Boolean): Standard_Integer;
  DeleteVertex(theIndex: Standard_Integer): void;
  Vertices(): any;
  ChangeVertices(): any;
  FindKey(theIndex: Standard_Integer): BRepMesh_Vertex;
  FindIndex(theVertex: BRepMesh_Vertex): Standard_Integer;
  Extent(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theVertex: BRepMesh_Vertex): void;
  RemoveLast(): void;
  GetListOfDelNodes(): any;
  Statistics(theStream: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_DataStructureOfDelaun extends Standard_Transient {
  constructor(theAllocator: any, theReservedNodeSize: Standard_Integer)
  NbNodes(): Standard_Integer;
  AddNode(theNode: BRepMesh_Vertex, isForceAdd: Standard_Boolean): Standard_Integer;
  IndexOf_1(theNode: BRepMesh_Vertex): Standard_Integer;
  GetNode(theIndex: Standard_Integer): BRepMesh_Vertex;
  SubstituteNode(theIndex: Standard_Integer, theNewNode: BRepMesh_Vertex): Standard_Boolean;
  RemoveNode(theIndex: Standard_Integer, isForce: Standard_Boolean): void;
  LinksConnectedTo(theIndex: Standard_Integer): any;
  NbLinks(): Standard_Integer;
  AddLink(theLink: BRepMesh_Edge): Standard_Integer;
  IndexOf_2(theLink: BRepMesh_Edge): Standard_Integer;
  GetLink(theIndex: Standard_Integer): BRepMesh_Edge;
  LinksOfDomain(): any;
  SubstituteLink(theIndex: Standard_Integer, theNewLink: BRepMesh_Edge): Standard_Boolean;
  RemoveLink(theIndex: Standard_Integer, isForce: Standard_Boolean): void;
  ElementsConnectedTo(theLinkIndex: Standard_Integer): BRepMesh_PairOfIndex;
  NbElements(): Standard_Integer;
  AddElement(theElement: BRepMesh_Triangle): Standard_Integer;
  GetElement(theIndex: Standard_Integer): BRepMesh_Triangle;
  ElementsOfDomain(): any;
  SubstituteElement(theIndex: Standard_Integer, theNewElement: BRepMesh_Triangle): Standard_Boolean;
  RemoveElement(theIndex: Standard_Integer): void;
  ElementNodes(theElement: BRepMesh_Triangle, theNodes: any): void;
  Dump(theFileNameStr: Standard_CString): void;
  Statistics(theStream: Standard_OStream): void;
  Allocator(): any;
  Data(): any;
  ClearDomain(): void;
  ClearDeleted(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_GeomTool {
  AddPoint(thePoint: gp_Pnt, theParam: Standard_Real, theIsReplace: Standard_Boolean): Standard_Integer;
  NbPoints(): Standard_Integer;
  Value_1(theIndex: Standard_Integer, theIsoParam: Standard_Real, theParam: Standard_Real, thePoint: gp_Pnt, theUV: gp_Pnt2d): Standard_Boolean;
  Value_2(theIndex: Standard_Integer, theSurface: any, theParam: Standard_Real, thePoint: gp_Pnt, theUV: gp_Pnt2d): Standard_Boolean;
  Normal(theSurface: any, theParamU: Standard_Real, theParamV: Standard_Real, thePoint: gp_Pnt, theNormal: gp_Dir): Standard_Boolean;
  IntLinLin(theStartPnt1: gp_XY, theEndPnt1: gp_XY, theStartPnt2: gp_XY, theEndPnt2: gp_XY, theIntPnt: gp_XY, theParamOnSegment: any): any;
  IntSegSeg(theStartPnt1: gp_XY, theEndPnt1: gp_XY, theStartPnt2: gp_XY, theEndPnt2: gp_XY, isConsiderEndPointTouch: Standard_Boolean, isConsiderPointOnSegment: Standard_Boolean, theIntPnt: gp_Pnt2d): any;
  SquareDeflectionOfSegment(theFirstPoint: gp_Pnt, theLastPoint: gp_Pnt, theMidPoint: gp_Pnt): Standard_Real;
  CellsCount(theSurface: any, theVerticesNb: Standard_Integer, theDeflection: Standard_Real, theRangeSplitter: BRepMesh_DefaultRangeSplitter): any;
}

  export declare class BRepMesh_GeomTool_1 extends BRepMesh_GeomTool {
    constructor(theCurve: BRepAdaptor_Curve, theFirstParam: Standard_Real, theLastParam: Standard_Real, theLinDeflection: Standard_Real, theAngDeflection: Standard_Real, theMinPointsNb: Standard_Integer, theMinSize: Standard_Real);
  }

  export declare class BRepMesh_GeomTool_2 extends BRepMesh_GeomTool {
    constructor(theSurface: any, theIsoType: GeomAbs_IsoType, theParamIso: Standard_Real, theFirstParam: Standard_Real, theLastParam: Standard_Real, theLinDeflection: Standard_Real, theAngDeflection: Standard_Real, theMinPointsNb: Standard_Integer, theMinSize: Standard_Real);
  }

export declare class BRepMesh_Delaun {
  Init(theVertices: any): void;
  InitCirclesTool(theCellsCountU: Standard_Integer, theCellsCountV: Standard_Integer): void;
  RemoveVertex(theVertex: BRepMesh_Vertex): void;
  AddVertices(theVerticesIndices: any, theRange: Message_ProgressRange): void;
  UseEdge(theEdge: Standard_Integer): Standard_Boolean;
  Result(): any;
  ProcessConstraints(): void;
  Frontier(): any;
  InternalEdges(): any;
  FreeEdges(): any;
  GetVertex(theIndex: Standard_Integer): BRepMesh_Vertex;
  GetEdge(theIndex: Standard_Integer): BRepMesh_Edge;
  GetTriangle(theIndex: Standard_Integer): BRepMesh_Triangle;
  Circles(): BRepMesh_CircleTool;
  Contains(theTriangleId: Standard_Integer, theVertex: BRepMesh_Vertex, theSqTolerance: Standard_Real, theEdgeOn: Standard_Integer): Standard_Boolean;
  SetAuxVertices(theSupVert: any): void;
  RemoveAuxElements(): void;
}

  export declare class BRepMesh_Delaun_1 extends BRepMesh_Delaun {
    constructor(theOldMesh: any, theCellsCountU: Standard_Integer, theCellsCountV: Standard_Integer, isFillCircles: Standard_Boolean);
  }

  export declare class BRepMesh_Delaun_2 extends BRepMesh_Delaun {
    constructor(theVertices: any);
  }

  export declare class BRepMesh_Delaun_3 extends BRepMesh_Delaun {
    constructor(theOldMesh: any, theVertices: any);
  }

  export declare class BRepMesh_Delaun_4 extends BRepMesh_Delaun {
    constructor(theOldMesh: any, theVertexIndices: any);
  }

  export declare class BRepMesh_Delaun_5 extends BRepMesh_Delaun {
    constructor(theOldMesh: any, theVertexIndices: any, theCellsCountU: Standard_Integer, theCellsCountV: Standard_Integer);
  }

export declare class BRepMesh_MeshTool extends Standard_Transient {
  constructor(theStructure: any)
  GetStructure(): any;
  DumpTriangles(theFileName: Standard_CString, theTriangles: any): void;
  AddAndLegalizeTriangle(thePoint1: Standard_Integer, thePoint2: Standard_Integer, thePoint3: Standard_Integer): void;
  AddTriangle(thePoint1: Standard_Integer, thePoint2: Standard_Integer, thePoint3: Standard_Integer, theEdges: any): void;
  AddLink(theFirstNode: Standard_Integer, theLastNode: Standard_Integer, theLinkIndex: Standard_Integer, theLinkOri: Standard_Boolean): void;
  Legalize(theLinkIndex: Standard_Integer): void;
  EraseItemsConnectedTo(theNodeIndex: Standard_Integer): void;
  CleanFrontierLinks(): void;
  EraseTriangles(theTriangles: any, theLoopEdges: any): void;
  EraseTriangle(theTriangleIndex: Standard_Integer, theLoopEdges: any): void;
  EraseFreeLinks_1(): void;
  EraseFreeLinks_2(theLinks: any): void;
  GetEdgesByType(theEdgeType: BRepMesh_DegreeOfFreedom): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_CustomBaseMeshAlgo extends BRepMesh_ConstrainedBaseMeshAlgo {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_CylinderRangeSplitter extends BRepMesh_DefaultRangeSplitter {
  constructor()
  Reset(theDFace: any, theParameters: IMeshTools_Parameters): void;
  GenerateSurfaceNodes(theParameters: IMeshTools_Parameters): any;
}

export declare class BRepMesh_Deflection extends Standard_Transient {
  constructor();
  ComputeAbsoluteDeflection(theShape: TopoDS_Shape, theRelativeDeflection: Standard_Real, theMaxShapeSize: Standard_Real): Standard_Real;
  ComputeDeflection_1(theDEdge: any, theMaxShapeSize: Standard_Real, theParameters: IMeshTools_Parameters): void;
  ComputeDeflection_2(theDWire: any, theParameters: IMeshTools_Parameters): void;
  ComputeDeflection_3(theDFace: any, theParameters: IMeshTools_Parameters): void;
  IsConsistent(theCurrent: Standard_Real, theRequired: Standard_Real, theAllowDecrease: Standard_Boolean, theRatio: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_DelabellaBaseMeshAlgo extends BRepMesh_CustomBaseMeshAlgo {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshTools_MeshAlgoFactory extends Standard_Transient {
  GetAlgo(theSurfaceType: GeomAbs_SurfaceType, theParameters: IMeshTools_Parameters): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_DelabellaMeshAlgoFactory extends IMeshTools_MeshAlgoFactory {
  constructor()
  GetAlgo(theSurfaceType: GeomAbs_SurfaceType, theParameters: IMeshTools_Parameters): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_DelaunayBaseMeshAlgo extends BRepMesh_ConstrainedBaseMeshAlgo {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshData_Curve extends IMeshData_ParametersList {
  InsertPoint(thePosition: Standard_Integer, thePoint: gp_Pnt, theParamOnPCurve: Standard_Real): void;
  AddPoint(thePoint: gp_Pnt, theParamOnCurve: Standard_Real): void;
  GetPoint(theIndex: Standard_Integer): gp_Pnt;
  RemovePoint(theIndex: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshData_PCurve extends IMeshData_ParametersList {
  InsertPoint(thePosition: Standard_Integer, thePoint: gp_Pnt2d, theParamOnPCurve: Standard_Real): void;
  AddPoint(thePoint: gp_Pnt2d, theParamOnPCurve: Standard_Real): void;
  GetPoint(theIndex: Standard_Integer): gp_Pnt2d;
  GetIndex(theIndex: Standard_Integer): Standard_Integer;
  RemovePoint(theIndex: Standard_Integer): void;
  IsForward(): Standard_Boolean;
  IsInternal(): Standard_Boolean;
  GetOrientation(): TopAbs_Orientation;
  GetFace(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_DiscretRoot extends Standard_Transient {
  SetShape(theShape: TopoDS_Shape): void;
  Shape(): TopoDS_Shape;
  IsDone(): Standard_Boolean;
  Perform(theRange: Message_ProgressRange): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_DiscretFactory {
  Get(): BRepMesh_DiscretFactory;
  Names(): TColStd_MapOfAsciiString;
  SetDefaultName(theName: TCollection_AsciiString): Standard_Boolean;
  DefaultName(): TCollection_AsciiString;
  SetFunctionName(theFuncName: TCollection_AsciiString): Standard_Boolean;
  FunctionName(): TCollection_AsciiString;
  ErrorStatus(): BRepMesh_FactoryError;
  SetDefault(theName: TCollection_AsciiString, theFuncName: TCollection_AsciiString): Standard_Boolean;
  Discret(theShape: TopoDS_Shape, theLinDeflection: Standard_Real, theAngDeflection: Standard_Real): any;
}

export declare class BRepMesh_EdgeDiscret extends IMeshTools_ModelAlgo {
  constructor()
  CreateEdgeTessellator_1(theDEdge: any, theParameters: IMeshTools_Parameters): any;
  CreateEdgeTessellator_2(theDEdge: any, theOrientation: TopAbs_Orientation, theDFace: any, theParameters: IMeshTools_Parameters): any;
  CreateEdgeTessellationExtractor(theDEdge: any, theDFace: any): any;
  Tessellate3d(theDEdge: any, theTessellator: any, theUpdateEnds: Standard_Boolean): void;
  Tessellate2d(theDEdge: any, theUpdateEnds: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_EdgeTessellationExtractor extends IMeshTools_CurveTessellator {
  constructor(theEdge: any, theFace: any)
  PointsNb(): Standard_Integer;
  Value(theIndex: Standard_Integer, thePoint: gp_Pnt, theParameter: Standard_Real): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_FaceChecker extends Standard_Transient {
  constructor(theFace: any, theParameters: IMeshTools_Parameters)
  Perform(): Standard_Boolean;
  GetIntersectingEdges(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_FaceDiscret extends IMeshTools_ModelAlgo {
  constructor(theAlgoFactory: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_FastDiscret {
  constructor();
}

export declare class BRepMesh_IncrementalMesh extends BRepMesh_DiscretRoot {
  Perform_1(theRange: Message_ProgressRange): void;
  Perform_2(theContext: any, theRange: Message_ProgressRange): void;
  Parameters(): IMeshTools_Parameters;
  ChangeParameters(): IMeshTools_Parameters;
  IsModified(): Standard_Boolean;
  GetStatusFlags(): Standard_Integer;
  Discret(theShape: TopoDS_Shape, theLinDeflection: Standard_Real, theAngDeflection: Standard_Real, theAlgo: BRepMesh_DiscretRoot): Standard_Integer;
  IsParallelDefault(): Standard_Boolean;
  SetParallelDefault(isInParallel: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepMesh_IncrementalMesh_1 extends BRepMesh_IncrementalMesh {
    constructor();
  }

  export declare class BRepMesh_IncrementalMesh_2 extends BRepMesh_IncrementalMesh {
    constructor(theShape: TopoDS_Shape, theLinDeflection: Standard_Real, isRelative: Standard_Boolean, theAngDeflection: Standard_Real, isInParallel: Standard_Boolean);
  }

  export declare class BRepMesh_IncrementalMesh_3 extends BRepMesh_IncrementalMesh {
    constructor(theShape: TopoDS_Shape, theParameters: IMeshTools_Parameters, theRange: Message_ProgressRange);
  }

export declare class BRepMesh_MeshAlgoFactory extends IMeshTools_MeshAlgoFactory {
  constructor()
  GetAlgo(theSurfaceType: GeomAbs_SurfaceType, theParameters: IMeshTools_Parameters): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_ModelBuilder extends IMeshTools_ModelBuilder {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_ModelHealer extends IMeshTools_ModelAlgo {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_ModelPostProcessor extends IMeshTools_ModelAlgo {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_ModelPreProcessor extends IMeshTools_ModelAlgo {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_SelectorOfDataStructureOfDelaun extends Standard_Transient {
  Initialize(theMesh: any): void;
  NeighboursOf_1(theNode: BRepMesh_Vertex): void;
  NeighboursOfNode(theNodeIndex: Standard_Integer): void;
  NeighboursOf_2(theLink: BRepMesh_Edge): void;
  NeighboursOfLink(theLinkIndex: Standard_Integer): void;
  NeighboursOf_3(theElement: BRepMesh_Triangle): void;
  NeighboursOfElement(theElementIndex: Standard_Integer): void;
  NeighboursByEdgeOf(theElement: BRepMesh_Triangle): void;
  NeighboursOf_4(a0: BRepMesh_SelectorOfDataStructureOfDelaun): void;
  AddNeighbours(): void;
  Nodes(): any;
  Links(): any;
  Elements(): any;
  FrontierLinks(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BRepMesh_SelectorOfDataStructureOfDelaun_1 extends BRepMesh_SelectorOfDataStructureOfDelaun {
    constructor();
  }

  export declare class BRepMesh_SelectorOfDataStructureOfDelaun_2 extends BRepMesh_SelectorOfDataStructureOfDelaun {
    constructor(theMesh: any);
  }

export declare class BRepMesh_ShapeTool extends Standard_Transient {
  constructor();
  MaxFaceTolerance(theFace: TopoDS_Face): Standard_Real;
  BoxMaxDimension(theBox: Bnd_Box, theMaxDimension: Standard_Real): void;
  CheckAndUpdateFlags(theEdge: any, thePCurve: any): void;
  AddInFace(theFace: TopoDS_Face, theTriangulation: any): void;
  NullifyFace(theFace: TopoDS_Face): void;
  NullifyEdge_1(theEdge: TopoDS_Edge, theTriangulation: any, theLocation: TopLoc_Location): void;
  NullifyEdge_2(theEdge: TopoDS_Edge, theLocation: TopLoc_Location): void;
  UpdateEdge_1(theEdge: TopoDS_Edge, thePolygon: any, theTriangulation: any, theLocation: TopLoc_Location): void;
  UpdateEdge_2(theEdge: TopoDS_Edge, thePolygon: any): void;
  UpdateEdge_3(theEdge: TopoDS_Edge, thePolygon1: any, thePolygon2: any, theTriangulation: any, theLocation: TopLoc_Location): void;
  UseLocation(thePnt: gp_Pnt, theLoc: TopLoc_Location): gp_Pnt;
  UVPoints(theEdge: TopoDS_Edge, theFace: TopoDS_Face, theFirstPoint2d: gp_Pnt2d, theLastPoint2d: gp_Pnt2d, isConsiderOrientation: Standard_Boolean): Standard_Boolean;
  Range_1(theEdge: TopoDS_Edge, theFace: TopoDS_Face, thePCurve: any, theFirstParam: Standard_Real, theLastParam: Standard_Real, isConsiderOrientation: Standard_Boolean): Standard_Boolean;
  Range_2(theEdge: TopoDS_Edge, theCurve: any, theFirstParam: Standard_Real, theLastParam: Standard_Real, isConsiderOrientation: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IMeshTools_ShapeVisitor extends Standard_Transient {
  Visit_1(theFace: TopoDS_Face): void;
  Visit_2(theEdge: TopoDS_Edge): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_ShapeVisitor extends IMeshTools_ShapeVisitor {
  constructor(theModel: any)
  Visit_1(theFace: TopoDS_Face): void;
  Visit_2(theEdge: TopoDS_Edge): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BRepMesh_SphereRangeSplitter extends BRepMesh_DefaultRangeSplitter {
  constructor()
  GenerateSurfaceNodes(theParameters: IMeshTools_Parameters): any;
}

export declare class BRepMesh_TorusRangeSplitter extends BRepMesh_UVParamRangeSplitter {
  constructor()
  GenerateSurfaceNodes(theParameters: IMeshTools_Parameters): any;
  AddPoint(thePoint: gp_Pnt2d): void;
}

export declare class IMeshTools_MeshBuilder extends Message_Algorithm {
  SetContext(theContext: any): void;
  GetContext(): any;
  Perform(theRange: Message_ProgressRange): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IMeshTools_MeshBuilder_1 extends IMeshTools_MeshBuilder {
    constructor();
  }

  export declare class IMeshTools_MeshBuilder_2 extends IMeshTools_MeshBuilder {
    constructor(theContext: any);
  }

export declare class IMeshTools_ShapeExplorer extends IMeshData_Shape {
  constructor(theShape: TopoDS_Shape)
  Accept(theVisitor: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_BRepMesh_DiscretRoot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepMesh_DiscretRoot): void;
  get(): BRepMesh_DiscretRoot;
}

  export declare class Handle_BRepMesh_DiscretRoot_1 extends Handle_BRepMesh_DiscretRoot {
    constructor();
  }

  export declare class Handle_BRepMesh_DiscretRoot_2 extends Handle_BRepMesh_DiscretRoot {
    constructor(thePtr: BRepMesh_DiscretRoot);
  }

  export declare class Handle_BRepMesh_DiscretRoot_3 extends Handle_BRepMesh_DiscretRoot {
    constructor(theHandle: Handle_BRepMesh_DiscretRoot);
  }

  export declare class Handle_BRepMesh_DiscretRoot_4 extends Handle_BRepMesh_DiscretRoot {
    constructor(theHandle: Handle_BRepMesh_DiscretRoot);
  }

export declare type BRepMesh_DegreeOfFreedom = {
  BRepMesh_Free: {};
  BRepMesh_InVolume: {};
  BRepMesh_OnSurface: {};
  BRepMesh_OnCurve: {};
  BRepMesh_Fixed: {};
  BRepMesh_Frontier: {};
  BRepMesh_Deleted: {};
}

export declare type IMeshTools_MeshAlgoType = {
  IMeshTools_MeshAlgoType_DEFAULT: {};
  IMeshTools_MeshAlgoType_Watson: {};
  IMeshTools_MeshAlgoType_Delabella: {};
}

export declare type IMeshData_Status = {
  IMeshData_NoError: {};
  IMeshData_OpenWire: {};
  IMeshData_SelfIntersectingWire: {};
  IMeshData_Failure: {};
  IMeshData_ReMesh: {};
  IMeshData_UnorientedWire: {};
  IMeshData_TooFewPoints: {};
  IMeshData_Outdated: {};
  IMeshData_Reused: {};
  IMeshData_UserBreak: {};
}

export declare type BRepMesh_FactoryError = {
  BRepMesh_FE_NOERROR: {};
  BRepMesh_FE_LIBRARYNOTFOUND: {};
  BRepMesh_FE_FUNCTIONNOTFOUND: {};
  BRepMesh_FE_CANNOTCREATEALGO: {};
}

export declare type TKMeshLib = {
  BRepMesh_OrientedEdge_1: typeof BRepMesh_OrientedEdge_1;
  BRepMesh_OrientedEdge_2: typeof BRepMesh_OrientedEdge_2;
  BRepMesh_Vertex_1: typeof BRepMesh_Vertex_1;
  BRepMesh_Vertex_2: typeof BRepMesh_Vertex_2;
  BRepMesh_Vertex_3: typeof BRepMesh_Vertex_3;
  BRepMesh_Circle_1: typeof BRepMesh_Circle_1;
  BRepMesh_Circle_2: typeof BRepMesh_Circle_2;
  BRepMesh_Triangle_1: typeof BRepMesh_Triangle_1;
  BRepMesh_Triangle_2: typeof BRepMesh_Triangle_2;
  BRepMesh_PairOfIndex: typeof BRepMesh_PairOfIndex;
  BRepMesh_Edge_1: typeof BRepMesh_Edge_1;
  BRepMesh_Edge_2: typeof BRepMesh_Edge_2;
  BRepMesh_DefaultRangeSplitter: typeof BRepMesh_DefaultRangeSplitter;
  BRepMesh_UVParamRangeSplitter: typeof BRepMesh_UVParamRangeSplitter;
  BRepMesh_NURBSRangeSplitter: typeof BRepMesh_NURBSRangeSplitter;
  BRepMesh_BoundaryParamsRangeSplitter: typeof BRepMesh_BoundaryParamsRangeSplitter;
  BRepMesh_CircleInspector: typeof BRepMesh_CircleInspector;
  BRepMesh_CircleTool_1: typeof BRepMesh_CircleTool_1;
  BRepMesh_CircleTool_2: typeof BRepMesh_CircleTool_2;
  BRepMesh_Classifier: typeof BRepMesh_Classifier;
  BRepMesh_ConeRangeSplitter: typeof BRepMesh_ConeRangeSplitter;
  IMeshTools_Context: typeof IMeshTools_Context;
  BRepMesh_Context: typeof BRepMesh_Context;
  BRepMesh_CurveTessellator_1: typeof BRepMesh_CurveTessellator_1;
  BRepMesh_CurveTessellator_2: typeof BRepMesh_CurveTessellator_2;
  BRepMesh_VertexInspector: typeof BRepMesh_VertexInspector;
  BRepMesh_VertexTool: typeof BRepMesh_VertexTool;
  BRepMesh_DataStructureOfDelaun: typeof BRepMesh_DataStructureOfDelaun;
  BRepMesh_GeomTool_1: typeof BRepMesh_GeomTool_1;
  BRepMesh_GeomTool_2: typeof BRepMesh_GeomTool_2;
  BRepMesh_Delaun_1: typeof BRepMesh_Delaun_1;
  BRepMesh_Delaun_2: typeof BRepMesh_Delaun_2;
  BRepMesh_Delaun_3: typeof BRepMesh_Delaun_3;
  BRepMesh_Delaun_4: typeof BRepMesh_Delaun_4;
  BRepMesh_Delaun_5: typeof BRepMesh_Delaun_5;
  BRepMesh_MeshTool: typeof BRepMesh_MeshTool;
  BRepMesh_CylinderRangeSplitter: typeof BRepMesh_CylinderRangeSplitter;
  BRepMesh_DelabellaBaseMeshAlgo: typeof BRepMesh_DelabellaBaseMeshAlgo;
  BRepMesh_DelabellaMeshAlgoFactory: typeof BRepMesh_DelabellaMeshAlgoFactory;
  BRepMesh_DelaunayBaseMeshAlgo: typeof BRepMesh_DelaunayBaseMeshAlgo;
  BRepMesh_EdgeDiscret: typeof BRepMesh_EdgeDiscret;
  BRepMesh_EdgeTessellationExtractor: typeof BRepMesh_EdgeTessellationExtractor;
  BRepMesh_FaceChecker: typeof BRepMesh_FaceChecker;
  BRepMesh_FaceDiscret: typeof BRepMesh_FaceDiscret;
  BRepMesh_IncrementalMesh_1: typeof BRepMesh_IncrementalMesh_1;
  BRepMesh_IncrementalMesh_2: typeof BRepMesh_IncrementalMesh_2;
  BRepMesh_IncrementalMesh_3: typeof BRepMesh_IncrementalMesh_3;
  BRepMesh_MeshAlgoFactory: typeof BRepMesh_MeshAlgoFactory;
  BRepMesh_ModelBuilder: typeof BRepMesh_ModelBuilder;
  BRepMesh_ModelHealer: typeof BRepMesh_ModelHealer;
  BRepMesh_ModelPostProcessor: typeof BRepMesh_ModelPostProcessor;
  BRepMesh_ModelPreProcessor: typeof BRepMesh_ModelPreProcessor;
  BRepMesh_SelectorOfDataStructureOfDelaun_1: typeof BRepMesh_SelectorOfDataStructureOfDelaun_1;
  BRepMesh_SelectorOfDataStructureOfDelaun_2: typeof BRepMesh_SelectorOfDataStructureOfDelaun_2;
  BRepMesh_ShapeVisitor: typeof BRepMesh_ShapeVisitor;
  BRepMesh_SphereRangeSplitter: typeof BRepMesh_SphereRangeSplitter;
  BRepMesh_TorusRangeSplitter: typeof BRepMesh_TorusRangeSplitter;
  IMeshTools_MeshBuilder_1: typeof IMeshTools_MeshBuilder_1;
  IMeshTools_MeshBuilder_2: typeof IMeshTools_MeshBuilder_2;
  IMeshTools_ShapeExplorer: typeof IMeshTools_ShapeExplorer;
  Handle_BRepMesh_DiscretRoot_1: typeof Handle_BRepMesh_DiscretRoot_1;
  Handle_BRepMesh_DiscretRoot_2: typeof Handle_BRepMesh_DiscretRoot_2;
  Handle_BRepMesh_DiscretRoot_3: typeof Handle_BRepMesh_DiscretRoot_3;
  Handle_BRepMesh_DiscretRoot_4: typeof Handle_BRepMesh_DiscretRoot_4;
  BRepMesh_DegreeOfFreedom: typeof BRepMesh_DegreeOfFreedom;
  IMeshTools_MeshAlgoType: typeof IMeshTools_MeshAlgoType;
  IMeshData_Status: typeof IMeshData_Status;
  BRepMesh_FactoryError: typeof BRepMesh_FactoryError;
};
