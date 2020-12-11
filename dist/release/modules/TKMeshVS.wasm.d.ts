declare const libName = "./modules/TKMeshVS.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class MeshVS_Buffer {
  constructor(theSize: Standard_ThreadId)
}

export declare class MeshVS_DataSource extends Standard_Transient {
  GetGeom(ID: Graphic3d_ArrayFlags, IsElement: Standard_Boolean, Coords: TColStd_Array1OfReal, NbNodes: Standard_Integer, Type: MeshVS_EntityType): Standard_Boolean;
  GetGeomType(ID: Standard_Integer, IsElement: Standard_Boolean, Type: MeshVS_EntityType): Standard_Boolean;
  Get3DGeom(ID: Standard_Integer, NbNodes: Standard_Integer, Data: any): Standard_Boolean;
  GetAddr(ID: Standard_Integer, IsElement: Standard_Boolean): Standard_Address;
  GetNodesByElement(ID: Standard_Integer, NodeIDs: TColStd_Array1OfInteger, NbNodes: Standard_Integer): Standard_Boolean;
  GetAllNodes(): TColStd_PackedMapOfInteger;
  GetAllElements(): TColStd_PackedMapOfInteger;
  GetNormal(Id: Standard_Integer, Max: Standard_Integer, nx: Standard_Real, ny: Standard_Real, nz: Standard_Real): Standard_Boolean;
  GetNodeNormal(ranknode: Standard_Integer, ElementId: Standard_Integer, nx: Standard_Real, ny: Standard_Real, nz: Standard_Real): Standard_Boolean;
  GetNormalsByElement(Id: Standard_Integer, IsNodal: Standard_Boolean, MaxNodes: Standard_Integer, Normals: any): Standard_Boolean;
  GetAllGroups(Ids: TColStd_PackedMapOfInteger): void;
  GetGroup(Id: Standard_Integer, Type: MeshVS_EntityType, Ids: TColStd_PackedMapOfInteger): Standard_Boolean;
  GetGroupAddr(ID: Standard_Integer): Standard_Address;
  IsAdvancedSelectionEnabled(): Standard_Boolean;
  GetBoundingBox(): Bnd_Box;
  GetDetectedEntities_1(Prs: any, X: Standard_Real, Y: Standard_Real, aTol: Standard_Real, Nodes: any, Elements: any, DMin: Standard_Real): Standard_Boolean;
  GetDetectedEntities_2(Prs: any, XMin: Standard_Real, YMin: Standard_Real, XMax: Standard_Real, YMax: Standard_Real, aTol: Standard_Real, Nodes: any, Elements: any): Standard_Boolean;
  GetDetectedEntities_3(Prs: any, Polyline: TColgp_Array1OfPnt2d, aBox: Bnd_Box2d, aTol: Standard_Real, Nodes: any, Elements: any): Standard_Boolean;
  GetDetectedEntities_4(Prs: any, Nodes: any, Elements: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_PrsBuilder extends Standard_Transient {
  Build(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, IsElement: Standard_Boolean, DisplayMode: Standard_Integer): void;
  CustomBuild(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, DisplayMode: Standard_Integer): void;
  CustomSensitiveEntity(Owner: any, SelectMode: Standard_Integer): any;
  GetFlags(): Standard_Integer;
  TestFlags(DisplayMode: Standard_Integer): Standard_Boolean;
  GetId(): Standard_Integer;
  GetPriority(): Standard_Integer;
  GetDataSource(): any;
  SetDataSource(newDS: any): void;
  GetDrawer(): any;
  SetDrawer(newDr: any): void;
  SetExcluding(state: Standard_Boolean): void;
  IsExcludingOn(): Standard_Boolean;
  SetPresentationManager(thePrsMgr: any): void;
  GetPresentationManager(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_Mesh extends AIS_InteractiveObject {
  constructor(theIsAllowOverlapped: Standard_Boolean)
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  Compute(PM: any, Prs: any, DisplayMode: Standard_Integer): void;
  ComputeSelection(Sel: any, SelectMode: Standard_Integer): void;
  HilightSelected(PM: any, Owners: SelectMgr_SequenceOfOwner): void;
  HilightOwnerWithColor(thePM: any, theColor: any, theOwner: any): void;
  ClearSelected(): void;
  GetBuildersCount(): Standard_Integer;
  GetBuilder(Index: Standard_Integer): any;
  GetBuilderById(Id: Standard_Integer): any;
  GetFreeId(): Standard_Integer;
  AddBuilder(Builder: any, TreatAsHilighter: Standard_Boolean): void;
  SetHilighter_1(Builder: any): void;
  SetHilighter_2(Index: Standard_Integer): Standard_Boolean;
  SetHilighterById(Id: Standard_Integer): Standard_Boolean;
  GetHilighter(): any;
  RemoveBuilder(Index: Standard_Integer): void;
  RemoveBuilderById(Id: Standard_Integer): void;
  FindBuilder(TypeString: Standard_CString): any;
  GetOwnerMaps(IsElement: Standard_Boolean): MeshVS_DataMapOfIntegerOwner;
  GetDataSource(): any;
  SetDataSource(aDataSource: any): void;
  GetDrawer(): any;
  SetDrawer(aDrawer: any): void;
  IsHiddenElem(ID: Standard_Integer): Standard_Boolean;
  IsHiddenNode(ID: Standard_Integer): Standard_Boolean;
  IsSelectableElem(ID: Standard_Integer): Standard_Boolean;
  IsSelectableNode(ID: Standard_Integer): Standard_Boolean;
  GetHiddenNodes(): any;
  SetHiddenNodes(Ids: any): void;
  GetHiddenElems(): any;
  SetHiddenElems(Ids: any): void;
  GetSelectableNodes(): any;
  SetSelectableNodes(Ids: any): void;
  UpdateSelectableNodes(): void;
  GetMeshSelMethod(): MeshVS_MeshSelectionMethod;
  SetMeshSelMethod(M: MeshVS_MeshSelectionMethod): void;
  IsWholeMeshOwner(theOwner: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_CommonSensitiveEntity extends Select3D_SensitiveSet {
  constructor(theOwner: any, theParentMesh: any, theSelMethod: MeshVS_MeshSelectionMethod)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NbSubElements(): Standard_Integer;
  Size(): Standard_Integer;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  GetConnected(): any;
}

export declare class MeshVS_MeshEntityOwner extends SelectMgr_EntityOwner {
  constructor(SelObj: SelectMgr_SelectableObject, ID: Standard_Integer, MeshEntity: Standard_Address, Type: MeshVS_EntityType, Priority: Standard_Integer, IsGroup: Standard_Boolean)
  Owner(): Standard_Address;
  Type(): MeshVS_EntityType;
  ID(): Standard_Integer;
  IsGroup(): Standard_Boolean;
  IsHilighted(PM: any, Mode: Standard_Integer): Standard_Boolean;
  HilightWithColor(thePM: any, theStyle: any, theMode: Standard_Integer): void;
  Unhilight(PM: any, Mode: Standard_Integer): void;
  Clear(PM: any, Mode: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_DataSource3D extends MeshVS_DataSource {
  GetPrismTopology(BasePoints: Standard_Integer): any;
  GetPyramidTopology(BasePoints: Standard_Integer): any;
  CreatePrismTopology(BasePoints: Standard_Integer): any;
  CreatePyramidTopology(BasePoints: Standard_Integer): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_DeformedDataSource extends MeshVS_DataSource {
  constructor(theNonDeformDS: any, theMagnify: Standard_Real)
  GetGeom(ID: Standard_Integer, IsElement: Standard_Boolean, Coords: TColStd_Array1OfReal, NbNodes: Standard_Integer, Type: MeshVS_EntityType): Standard_Boolean;
  GetGeomType(ID: Standard_Integer, IsElement: Standard_Boolean, Type: MeshVS_EntityType): Standard_Boolean;
  Get3DGeom(ID: Standard_Integer, NbNodes: Standard_Integer, Data: any): Standard_Boolean;
  GetAddr(ID: Standard_Integer, IsElement: Standard_Boolean): Standard_Address;
  GetNodesByElement(ID: Standard_Integer, NodeIDs: TColStd_Array1OfInteger, NbNodes: Standard_Integer): Standard_Boolean;
  GetAllNodes(): TColStd_PackedMapOfInteger;
  GetAllElements(): TColStd_PackedMapOfInteger;
  GetVectors(): MeshVS_DataMapOfIntegerVector;
  SetVectors(Map: MeshVS_DataMapOfIntegerVector): void;
  GetVector(ID: Standard_Integer, Vect: gp_Vec): Standard_Boolean;
  SetVector(ID: Standard_Integer, Vect: gp_Vec): void;
  SetNonDeformedDataSource(theDS: any): void;
  GetNonDeformedDataSource(): any;
  SetMagnify(theMagnify: Standard_Real): void;
  GetMagnify(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_Drawer extends Standard_Transient {
  constructor();
  Assign(aDrawer: any): void;
  SetInteger(Key: Standard_Integer, Value: Standard_Integer): void;
  SetDouble(Key: Standard_Integer, Value: Standard_Real): void;
  SetBoolean(Key: Standard_Integer, Value: Standard_Boolean): void;
  SetColor(Key: Standard_Integer, Value: Quantity_Color): void;
  SetMaterial(Key: Standard_Integer, Value: Graphic3d_MaterialAspect): void;
  SetAsciiString(Key: Standard_Integer, Value: TCollection_AsciiString): void;
  GetInteger(Key: Standard_Integer, Value: Standard_Integer): Standard_Boolean;
  GetDouble(Key: Standard_Integer, Value: Standard_Real): Standard_Boolean;
  GetBoolean(Key: Standard_Integer, Value: Standard_Boolean): Standard_Boolean;
  GetColor(Key: Standard_Integer, Value: Quantity_Color): Standard_Boolean;
  GetMaterial(Key: Standard_Integer, Value: Graphic3d_MaterialAspect): Standard_Boolean;
  GetAsciiString(Key: Standard_Integer, Value: TCollection_AsciiString): Standard_Boolean;
  RemoveInteger(Key: Standard_Integer): Standard_Boolean;
  RemoveDouble(Key: Standard_Integer): Standard_Boolean;
  RemoveBoolean(Key: Standard_Integer): Standard_Boolean;
  RemoveColor(Key: Standard_Integer): Standard_Boolean;
  RemoveMaterial(Key: Standard_Integer): Standard_Boolean;
  RemoveAsciiString(Key: Standard_Integer): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_DummySensitiveEntity extends Select3D_SensitiveEntity {
  constructor(theOwnerId: any)
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  NbSubElements(): Standard_Integer;
  BoundingBox(): Select3D_BndBox3d;
  BVH(): void;
  ToBuildBVH(): Standard_Boolean;
  Clear(): void;
  HasInitLocation(): Standard_Boolean;
  InvInitLocation(): gp_GTrsf;
  CenterOfGeometry(): gp_Pnt;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_ElementalColorPrsBuilder extends MeshVS_PrsBuilder {
  constructor(Parent: any, Flags: MeshVS_DisplayModeFlags, DS: any, Id: Standard_Integer, Priority: MeshVS_BuilderPriority)
  Build(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, IsElement: Standard_Boolean, DisplayMode: Standard_Integer): void;
  GetColors1(): MeshVS_DataMapOfIntegerColor;
  SetColors1(Map: MeshVS_DataMapOfIntegerColor): void;
  HasColors1(): Standard_Boolean;
  GetColor1(ID: Standard_Integer, theColor: Quantity_Color): Standard_Boolean;
  SetColor1(ID: Standard_Integer, theColor: Quantity_Color): void;
  GetColors2(): MeshVS_DataMapOfIntegerTwoColors;
  SetColors2(Map: MeshVS_DataMapOfIntegerTwoColors): void;
  HasColors2(): Standard_Boolean;
  GetColor2_1(ID: Standard_Integer, theColor: MeshVS_TwoColors): Standard_Boolean;
  GetColor2_2(ID: Standard_Integer, theColor1: Quantity_Color, theColor2: Quantity_Color): Standard_Boolean;
  SetColor2_1(ID: Standard_Integer, theTwoColors: MeshVS_TwoColors): void;
  SetColor2_2(ID: Standard_Integer, theColor1: Quantity_Color, theColor2: Quantity_Color): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_MeshOwner extends SelectMgr_EntityOwner {
  constructor(theSelObj: SelectMgr_SelectableObject, theDS: any, thePriority: Standard_Integer)
  GetDataSource(): any;
  GetSelectedNodes(): any;
  GetSelectedElements(): any;
  AddSelectedEntities(Nodes: any, Elems: any): void;
  ClearSelectedEntities(): void;
  GetDetectedNodes(): any;
  GetDetectedElements(): any;
  SetDetectedEntities(Nodes: any, Elems: any): void;
  HilightWithColor(thePM: any, theColor: any, theMode: Standard_Integer): void;
  Unhilight(PM: any, Mode: Standard_Integer): void;
  IsForcedHilight(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_MeshPrsBuilder extends MeshVS_PrsBuilder {
  constructor(Parent: any, Flags: MeshVS_DisplayModeFlags, DS: any, Id: Standard_Integer, Priority: MeshVS_BuilderPriority)
  Build(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, IsElement: Standard_Boolean, DisplayMode: Standard_Integer): void;
  BuildNodes(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, DisplayMode: Standard_Integer): void;
  BuildElements(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, DisplayMode: Standard_Integer): void;
  BuildHilightPrs(Prs: any, IDs: TColStd_PackedMapOfInteger, IsElement: Standard_Boolean): void;
  AddVolumePrs(Topo: any, Nodes: TColStd_Array1OfReal, NbNodes: Standard_Integer, Array: any, IsReflected: Standard_Boolean, IsShrinked: Standard_Boolean, IsSelect: Standard_Boolean, ShrinkCoef: Standard_Real): void;
  HowManyPrimitives(Topo: any, AsPolygons: Standard_Boolean, IsSelect: Standard_Boolean, NbNodes: Standard_Integer, Vertices: Standard_Integer, Bounds: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_NodalColorPrsBuilder extends MeshVS_PrsBuilder {
  constructor(Parent: any, Flags: MeshVS_DisplayModeFlags, DS: any, Id: Standard_Integer, Priority: MeshVS_BuilderPriority)
  Build(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, IsElement: Standard_Boolean, DisplayMode: Standard_Integer): void;
  GetColors(): MeshVS_DataMapOfIntegerColor;
  SetColors(Map: MeshVS_DataMapOfIntegerColor): void;
  HasColors(): Standard_Boolean;
  GetColor(ID: Standard_Integer, theColor: Quantity_Color): Standard_Boolean;
  SetColor(ID: Standard_Integer, theColor: Quantity_Color): void;
  UseTexture(theToUse: Standard_Boolean): void;
  IsUseTexture(): Standard_Boolean;
  SetColorMap(theColors: Aspect_SequenceOfColor): void;
  GetColorMap(): Aspect_SequenceOfColor;
  SetInvalidColor(theInvalidColor: Quantity_Color): void;
  GetInvalidColor(): Quantity_Color;
  SetTextureCoords(theMap: TColStd_DataMapOfIntegerReal): void;
  GetTextureCoords(): TColStd_DataMapOfIntegerReal;
  SetTextureCoord(theID: Standard_Integer, theCoord: Standard_Real): void;
  GetTextureCoord(theID: Standard_Integer): Standard_Real;
  AddVolumePrs(theTopo: any, theNodes: TColStd_Array1OfInteger, theCoords: TColStd_Array1OfReal, theArray: any, theIsShaded: Standard_Boolean, theNbColors: Standard_Integer, theNbTexColors: Standard_Integer, theColorRatio: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_SensitiveFace extends Select3D_SensitiveFace {
  constructor(theOwner: any, thePoints: TColgp_Array1OfPnt, theSensType: Select3D_TypeOfSensitivity)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_SensitiveMesh extends Select3D_SensitiveEntity {
  constructor(theOwner: any, theMode: Standard_Integer)
  GetMode(): Standard_Integer;
  GetConnected(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  NbSubElements(): Standard_Integer;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_SensitivePolyhedron extends Select3D_SensitiveEntity {
  constructor(theOwner: any, theNodes: TColgp_Array1OfPnt, theTopo: any)
  GetConnected(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  NbSubElements(): Standard_Integer;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_SensitiveQuad extends Select3D_SensitiveEntity {
  NbSubElements(): Standard_Integer;
  GetConnected(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  CenterOfGeometry(): gp_Pnt;
  BoundingBox(): Select3D_BndBox3d;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class MeshVS_SensitiveQuad_1 extends MeshVS_SensitiveQuad {
    constructor(theOwner: any, theQuadVerts: TColgp_Array1OfPnt);
  }

  export declare class MeshVS_SensitiveQuad_2 extends MeshVS_SensitiveQuad {
    constructor(theOwner: any, thePnt1: gp_Pnt, thePnt2: gp_Pnt, thePnt3: gp_Pnt, thePnt4: gp_Pnt);
  }

export declare class MeshVS_SensitiveSegment extends Select3D_SensitiveSegment {
  constructor(theOwner: any, theFirstPnt: gp_Pnt, theLastPnt: gp_Pnt)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_TextPrsBuilder extends MeshVS_PrsBuilder {
  constructor(Parent: any, Height: Standard_Real, Color: Quantity_Color, Flags: MeshVS_DisplayModeFlags, DS: any, Id: Standard_Integer, Priority: MeshVS_BuilderPriority)
  Build(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, IsElement: Standard_Boolean, theDisplayMode: Standard_Integer): void;
  GetTexts(IsElement: Standard_Boolean): MeshVS_DataMapOfIntegerAsciiString;
  SetTexts(IsElement: Standard_Boolean, Map: MeshVS_DataMapOfIntegerAsciiString): void;
  HasTexts(IsElement: Standard_Boolean): Standard_Boolean;
  GetText(IsElement: Standard_Boolean, ID: Standard_Integer, Text: TCollection_AsciiString): Standard_Boolean;
  SetText(IsElement: Standard_Boolean, ID: Standard_Integer, Text: TCollection_AsciiString): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_Tool {
  constructor();
  CreateAspectFillArea3d_1(theDr: any, UseDefaults: Standard_Boolean): any;
  CreateAspectFillArea3d_2(theDr: any, Mat: Graphic3d_MaterialAspect, UseDefaults: Standard_Boolean): any;
  CreateAspectLine3d(theDr: any, UseDefaults: Standard_Boolean): any;
  CreateAspectMarker3d(theDr: any, UseDefaults: Standard_Boolean): any;
  CreateAspectText3d(theDr: any, UseDefaults: Standard_Boolean): any;
  GetNormal(Nodes: TColStd_Array1OfReal, Norm: gp_Vec): Standard_Boolean;
  GetAverageNormal(Nodes: TColStd_Array1OfReal, Norm: gp_Vec): Standard_Boolean;
}

export declare class MeshVS_VectorPrsBuilder extends MeshVS_PrsBuilder {
  constructor(Parent: any, MaxLength: Standard_Real, VectorColor: Quantity_Color, Flags: MeshVS_DisplayModeFlags, DS: any, Id: Standard_Integer, Priority: MeshVS_BuilderPriority, IsSimplePrs: Standard_Boolean)
  Build(Prs: any, IDs: TColStd_PackedMapOfInteger, IDsToExclude: TColStd_PackedMapOfInteger, IsElement: Standard_Boolean, theDisplayMode: Standard_Integer): void;
  DrawVector(theTrsf: gp_Trsf, Length: Standard_Real, MaxLength: Standard_Real, ArrowPoints: TColgp_Array1OfPnt, Lines: any, ArrowLines: any, Triangles: any): void;
  calculateArrow(Points: TColgp_Array1OfPnt, Length: Standard_Real, ArrowPart: Standard_Real): Standard_Real;
  GetVectors(IsElement: Standard_Boolean): MeshVS_DataMapOfIntegerVector;
  SetVectors(IsElement: Standard_Boolean, Map: MeshVS_DataMapOfIntegerVector): void;
  HasVectors(IsElement: Standard_Boolean): Standard_Boolean;
  GetVector(IsElement: Standard_Boolean, ID: Standard_Integer, Vect: gp_Vec): Standard_Boolean;
  SetVector(IsElement: Standard_Boolean, ID: Standard_Integer, Vect: gp_Vec): void;
  GetMinMaxVectorValue(IsElement: Standard_Boolean, MinValue: Standard_Real, MaxValue: Standard_Real): void;
  SetSimplePrsMode(IsSimpleArrow: Standard_Boolean): void;
  SetSimplePrsParams(theLineWidthParam: Standard_Real, theStartParam: Standard_Real, theEndParam: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MeshVS_Array1OfSequenceOfInteger {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TColStd_SequenceOfInteger): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: MeshVS_Array1OfSequenceOfInteger): MeshVS_Array1OfSequenceOfInteger;
  Move(theOther: MeshVS_Array1OfSequenceOfInteger): MeshVS_Array1OfSequenceOfInteger;
  First(): TColStd_SequenceOfInteger;
  ChangeFirst(): TColStd_SequenceOfInteger;
  Last(): TColStd_SequenceOfInteger;
  ChangeLast(): TColStd_SequenceOfInteger;
  Value(theIndex: Standard_Integer): TColStd_SequenceOfInteger;
  ChangeValue(theIndex: Standard_Integer): TColStd_SequenceOfInteger;
  SetValue(theIndex: Standard_Integer, theItem: TColStd_SequenceOfInteger): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class MeshVS_Array1OfSequenceOfInteger_1 extends MeshVS_Array1OfSequenceOfInteger {
    constructor();
  }

  export declare class MeshVS_Array1OfSequenceOfInteger_2 extends MeshVS_Array1OfSequenceOfInteger {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class MeshVS_Array1OfSequenceOfInteger_3 extends MeshVS_Array1OfSequenceOfInteger {
    constructor(theOther: MeshVS_Array1OfSequenceOfInteger);
  }

  export declare class MeshVS_Array1OfSequenceOfInteger_4 extends MeshVS_Array1OfSequenceOfInteger {
    constructor(theOther: MeshVS_Array1OfSequenceOfInteger);
  }

  export declare class MeshVS_Array1OfSequenceOfInteger_5 extends MeshVS_Array1OfSequenceOfInteger {
    constructor(theBegin: TColStd_SequenceOfInteger, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_MeshVS_HArray1OfSequenceOfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_HArray1OfSequenceOfInteger): void;
  get(): MeshVS_HArray1OfSequenceOfInteger;
}

  export declare class Handle_MeshVS_HArray1OfSequenceOfInteger_1 extends Handle_MeshVS_HArray1OfSequenceOfInteger {
    constructor();
  }

  export declare class Handle_MeshVS_HArray1OfSequenceOfInteger_2 extends Handle_MeshVS_HArray1OfSequenceOfInteger {
    constructor(thePtr: MeshVS_HArray1OfSequenceOfInteger);
  }

  export declare class Handle_MeshVS_HArray1OfSequenceOfInteger_3 extends Handle_MeshVS_HArray1OfSequenceOfInteger {
    constructor(theHandle: Handle_MeshVS_HArray1OfSequenceOfInteger);
  }

  export declare class Handle_MeshVS_HArray1OfSequenceOfInteger_4 extends Handle_MeshVS_HArray1OfSequenceOfInteger {
    constructor(theHandle: Handle_MeshVS_HArray1OfSequenceOfInteger);
  }

export declare class Handle_MeshVS_DataSource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_DataSource): void;
  get(): MeshVS_DataSource;
}

  export declare class Handle_MeshVS_DataSource_1 extends Handle_MeshVS_DataSource {
    constructor();
  }

  export declare class Handle_MeshVS_DataSource_2 extends Handle_MeshVS_DataSource {
    constructor(thePtr: MeshVS_DataSource);
  }

  export declare class Handle_MeshVS_DataSource_3 extends Handle_MeshVS_DataSource {
    constructor(theHandle: Handle_MeshVS_DataSource);
  }

  export declare class Handle_MeshVS_DataSource_4 extends Handle_MeshVS_DataSource {
    constructor(theHandle: Handle_MeshVS_DataSource);
  }

export declare class Handle_MeshVS_PrsBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_PrsBuilder): void;
  get(): MeshVS_PrsBuilder;
}

  export declare class Handle_MeshVS_PrsBuilder_1 extends Handle_MeshVS_PrsBuilder {
    constructor();
  }

  export declare class Handle_MeshVS_PrsBuilder_2 extends Handle_MeshVS_PrsBuilder {
    constructor(thePtr: MeshVS_PrsBuilder);
  }

  export declare class Handle_MeshVS_PrsBuilder_3 extends Handle_MeshVS_PrsBuilder {
    constructor(theHandle: Handle_MeshVS_PrsBuilder);
  }

  export declare class Handle_MeshVS_PrsBuilder_4 extends Handle_MeshVS_PrsBuilder {
    constructor(theHandle: Handle_MeshVS_PrsBuilder);
  }

export declare class Handle_MeshVS_Mesh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_Mesh): void;
  get(): MeshVS_Mesh;
}

  export declare class Handle_MeshVS_Mesh_1 extends Handle_MeshVS_Mesh {
    constructor();
  }

  export declare class Handle_MeshVS_Mesh_2 extends Handle_MeshVS_Mesh {
    constructor(thePtr: MeshVS_Mesh);
  }

  export declare class Handle_MeshVS_Mesh_3 extends Handle_MeshVS_Mesh {
    constructor(theHandle: Handle_MeshVS_Mesh);
  }

  export declare class Handle_MeshVS_Mesh_4 extends Handle_MeshVS_Mesh {
    constructor(theHandle: Handle_MeshVS_Mesh);
  }

export declare class Handle_MeshVS_CommonSensitiveEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_CommonSensitiveEntity): void;
  get(): MeshVS_CommonSensitiveEntity;
}

  export declare class Handle_MeshVS_CommonSensitiveEntity_1 extends Handle_MeshVS_CommonSensitiveEntity {
    constructor();
  }

  export declare class Handle_MeshVS_CommonSensitiveEntity_2 extends Handle_MeshVS_CommonSensitiveEntity {
    constructor(thePtr: MeshVS_CommonSensitiveEntity);
  }

  export declare class Handle_MeshVS_CommonSensitiveEntity_3 extends Handle_MeshVS_CommonSensitiveEntity {
    constructor(theHandle: Handle_MeshVS_CommonSensitiveEntity);
  }

  export declare class Handle_MeshVS_CommonSensitiveEntity_4 extends Handle_MeshVS_CommonSensitiveEntity {
    constructor(theHandle: Handle_MeshVS_CommonSensitiveEntity);
  }

export declare class MeshVS_DataMapOfColorMapOfInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfColorMapOfInteger): void;
  Assign(theOther: MeshVS_DataMapOfColorMapOfInteger): MeshVS_DataMapOfColorMapOfInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Quantity_Color, theItem: TColStd_MapOfInteger): Standard_Boolean;
  Bound(theKey: Quantity_Color, theItem: TColStd_MapOfInteger): TColStd_MapOfInteger;
  IsBound(theKey: Quantity_Color): Standard_Boolean;
  UnBind(theKey: Quantity_Color): Standard_Boolean;
  Seek(theKey: Quantity_Color): TColStd_MapOfInteger;
  Find_1(theKey: Quantity_Color): TColStd_MapOfInteger;
  Find_2(theKey: Quantity_Color, theValue: TColStd_MapOfInteger): Standard_Boolean;
  ChangeSeek(theKey: Quantity_Color): TColStd_MapOfInteger;
  ChangeFind(theKey: Quantity_Color): TColStd_MapOfInteger;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfColorMapOfInteger_1 extends MeshVS_DataMapOfColorMapOfInteger {
    constructor();
  }

  export declare class MeshVS_DataMapOfColorMapOfInteger_2 extends MeshVS_DataMapOfColorMapOfInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfColorMapOfInteger_3 extends MeshVS_DataMapOfColorMapOfInteger {
    constructor(theOther: MeshVS_DataMapOfColorMapOfInteger);
  }

export declare class MeshVS_DataMapOfIntegerAsciiString extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfIntegerAsciiString): void;
  Assign(theOther: MeshVS_DataMapOfIntegerAsciiString): MeshVS_DataMapOfIntegerAsciiString;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TCollection_AsciiString): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TCollection_AsciiString): TCollection_AsciiString;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TCollection_AsciiString;
  Find_1(theKey: Standard_Integer): TCollection_AsciiString;
  Find_2(theKey: Standard_Integer, theValue: TCollection_AsciiString): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TCollection_AsciiString;
  ChangeFind(theKey: Standard_Integer): TCollection_AsciiString;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfIntegerAsciiString_1 extends MeshVS_DataMapOfIntegerAsciiString {
    constructor();
  }

  export declare class MeshVS_DataMapOfIntegerAsciiString_2 extends MeshVS_DataMapOfIntegerAsciiString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfIntegerAsciiString_3 extends MeshVS_DataMapOfIntegerAsciiString {
    constructor(theOther: MeshVS_DataMapOfIntegerAsciiString);
  }

export declare class MeshVS_DataMapOfIntegerBoolean extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfIntegerBoolean): void;
  Assign(theOther: MeshVS_DataMapOfIntegerBoolean): MeshVS_DataMapOfIntegerBoolean;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Standard_Boolean): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Standard_Boolean): Standard_Boolean;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Standard_Boolean;
  Find_1(theKey: Standard_Integer): Standard_Boolean;
  Find_2(theKey: Standard_Integer, theValue: Standard_Boolean): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Standard_Boolean;
  ChangeFind(theKey: Standard_Integer): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfIntegerBoolean_1 extends MeshVS_DataMapOfIntegerBoolean {
    constructor();
  }

  export declare class MeshVS_DataMapOfIntegerBoolean_2 extends MeshVS_DataMapOfIntegerBoolean {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfIntegerBoolean_3 extends MeshVS_DataMapOfIntegerBoolean {
    constructor(theOther: MeshVS_DataMapOfIntegerBoolean);
  }

export declare class MeshVS_DataMapOfIntegerColor extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfIntegerColor): void;
  Assign(theOther: MeshVS_DataMapOfIntegerColor): MeshVS_DataMapOfIntegerColor;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Quantity_Color): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Quantity_Color): Quantity_Color;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Quantity_Color;
  Find_1(theKey: Standard_Integer): Quantity_Color;
  Find_2(theKey: Standard_Integer, theValue: Quantity_Color): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Quantity_Color;
  ChangeFind(theKey: Standard_Integer): Quantity_Color;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfIntegerColor_1 extends MeshVS_DataMapOfIntegerColor {
    constructor();
  }

  export declare class MeshVS_DataMapOfIntegerColor_2 extends MeshVS_DataMapOfIntegerColor {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfIntegerColor_3 extends MeshVS_DataMapOfIntegerColor {
    constructor(theOther: MeshVS_DataMapOfIntegerColor);
  }

export declare class MeshVS_DataMapOfIntegerMaterial extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfIntegerMaterial): void;
  Assign(theOther: MeshVS_DataMapOfIntegerMaterial): MeshVS_DataMapOfIntegerMaterial;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Graphic3d_MaterialAspect): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Graphic3d_MaterialAspect): Graphic3d_MaterialAspect;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Graphic3d_MaterialAspect;
  Find_1(theKey: Standard_Integer): Graphic3d_MaterialAspect;
  Find_2(theKey: Standard_Integer, theValue: Graphic3d_MaterialAspect): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Graphic3d_MaterialAspect;
  ChangeFind(theKey: Standard_Integer): Graphic3d_MaterialAspect;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfIntegerMaterial_1 extends MeshVS_DataMapOfIntegerMaterial {
    constructor();
  }

  export declare class MeshVS_DataMapOfIntegerMaterial_2 extends MeshVS_DataMapOfIntegerMaterial {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfIntegerMaterial_3 extends MeshVS_DataMapOfIntegerMaterial {
    constructor(theOther: MeshVS_DataMapOfIntegerMaterial);
  }

export declare class Handle_MeshVS_MeshEntityOwner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_MeshEntityOwner): void;
  get(): MeshVS_MeshEntityOwner;
}

  export declare class Handle_MeshVS_MeshEntityOwner_1 extends Handle_MeshVS_MeshEntityOwner {
    constructor();
  }

  export declare class Handle_MeshVS_MeshEntityOwner_2 extends Handle_MeshVS_MeshEntityOwner {
    constructor(thePtr: MeshVS_MeshEntityOwner);
  }

  export declare class Handle_MeshVS_MeshEntityOwner_3 extends Handle_MeshVS_MeshEntityOwner {
    constructor(theHandle: Handle_MeshVS_MeshEntityOwner);
  }

  export declare class Handle_MeshVS_MeshEntityOwner_4 extends Handle_MeshVS_MeshEntityOwner {
    constructor(theHandle: Handle_MeshVS_MeshEntityOwner);
  }

export declare class MeshVS_DataMapOfIntegerTwoColors extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfIntegerTwoColors): void;
  Assign(theOther: MeshVS_DataMapOfIntegerTwoColors): MeshVS_DataMapOfIntegerTwoColors;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: MeshVS_TwoColors): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: MeshVS_TwoColors): MeshVS_TwoColors;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): MeshVS_TwoColors;
  Find_1(theKey: Standard_Integer): MeshVS_TwoColors;
  Find_2(theKey: Standard_Integer, theValue: MeshVS_TwoColors): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): MeshVS_TwoColors;
  ChangeFind(theKey: Standard_Integer): MeshVS_TwoColors;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfIntegerTwoColors_1 extends MeshVS_DataMapOfIntegerTwoColors {
    constructor();
  }

  export declare class MeshVS_DataMapOfIntegerTwoColors_2 extends MeshVS_DataMapOfIntegerTwoColors {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfIntegerTwoColors_3 extends MeshVS_DataMapOfIntegerTwoColors {
    constructor(theOther: MeshVS_DataMapOfIntegerTwoColors);
  }

export declare class MeshVS_DataMapOfIntegerVector extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfIntegerVector): void;
  Assign(theOther: MeshVS_DataMapOfIntegerVector): MeshVS_DataMapOfIntegerVector;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: gp_Vec): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: gp_Vec): gp_Vec;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): gp_Vec;
  Find_1(theKey: Standard_Integer): gp_Vec;
  Find_2(theKey: Standard_Integer, theValue: gp_Vec): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): gp_Vec;
  ChangeFind(theKey: Standard_Integer): gp_Vec;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfIntegerVector_1 extends MeshVS_DataMapOfIntegerVector {
    constructor();
  }

  export declare class MeshVS_DataMapOfIntegerVector_2 extends MeshVS_DataMapOfIntegerVector {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfIntegerVector_3 extends MeshVS_DataMapOfIntegerVector {
    constructor(theOther: MeshVS_DataMapOfIntegerVector);
  }

export declare class MeshVS_TwoColorsHasher {
  constructor();
  HashCode(theKey: MeshVS_TwoColors, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theKey1: MeshVS_TwoColors, theKey2: MeshVS_TwoColors): Standard_Boolean;
}

export declare class MeshVS_DataMapOfTwoColorsMapOfInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_DataMapOfTwoColorsMapOfInteger): void;
  Assign(theOther: MeshVS_DataMapOfTwoColorsMapOfInteger): MeshVS_DataMapOfTwoColorsMapOfInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: MeshVS_TwoColors, theItem: TColStd_MapOfInteger): Standard_Boolean;
  Bound(theKey: MeshVS_TwoColors, theItem: TColStd_MapOfInteger): TColStd_MapOfInteger;
  IsBound(theKey: MeshVS_TwoColors): Standard_Boolean;
  UnBind(theKey: MeshVS_TwoColors): Standard_Boolean;
  Seek(theKey: MeshVS_TwoColors): TColStd_MapOfInteger;
  Find_1(theKey: MeshVS_TwoColors): TColStd_MapOfInteger;
  Find_2(theKey: MeshVS_TwoColors, theValue: TColStd_MapOfInteger): Standard_Boolean;
  ChangeSeek(theKey: MeshVS_TwoColors): TColStd_MapOfInteger;
  ChangeFind(theKey: MeshVS_TwoColors): TColStd_MapOfInteger;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class MeshVS_DataMapOfTwoColorsMapOfInteger_1 extends MeshVS_DataMapOfTwoColorsMapOfInteger {
    constructor();
  }

  export declare class MeshVS_DataMapOfTwoColorsMapOfInteger_2 extends MeshVS_DataMapOfTwoColorsMapOfInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_DataMapOfTwoColorsMapOfInteger_3 extends MeshVS_DataMapOfTwoColorsMapOfInteger {
    constructor(theOther: MeshVS_DataMapOfTwoColorsMapOfInteger);
  }

export declare class Handle_MeshVS_DataSource3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_DataSource3D): void;
  get(): MeshVS_DataSource3D;
}

  export declare class Handle_MeshVS_DataSource3D_1 extends Handle_MeshVS_DataSource3D {
    constructor();
  }

  export declare class Handle_MeshVS_DataSource3D_2 extends Handle_MeshVS_DataSource3D {
    constructor(thePtr: MeshVS_DataSource3D);
  }

  export declare class Handle_MeshVS_DataSource3D_3 extends Handle_MeshVS_DataSource3D {
    constructor(theHandle: Handle_MeshVS_DataSource3D);
  }

  export declare class Handle_MeshVS_DataSource3D_4 extends Handle_MeshVS_DataSource3D {
    constructor(theHandle: Handle_MeshVS_DataSource3D);
  }

export declare class Handle_MeshVS_DeformedDataSource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_DeformedDataSource): void;
  get(): MeshVS_DeformedDataSource;
}

  export declare class Handle_MeshVS_DeformedDataSource_1 extends Handle_MeshVS_DeformedDataSource {
    constructor();
  }

  export declare class Handle_MeshVS_DeformedDataSource_2 extends Handle_MeshVS_DeformedDataSource {
    constructor(thePtr: MeshVS_DeformedDataSource);
  }

  export declare class Handle_MeshVS_DeformedDataSource_3 extends Handle_MeshVS_DeformedDataSource {
    constructor(theHandle: Handle_MeshVS_DeformedDataSource);
  }

  export declare class Handle_MeshVS_DeformedDataSource_4 extends Handle_MeshVS_DeformedDataSource {
    constructor(theHandle: Handle_MeshVS_DeformedDataSource);
  }

export declare class Handle_MeshVS_Drawer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_Drawer): void;
  get(): MeshVS_Drawer;
}

  export declare class Handle_MeshVS_Drawer_1 extends Handle_MeshVS_Drawer {
    constructor();
  }

  export declare class Handle_MeshVS_Drawer_2 extends Handle_MeshVS_Drawer {
    constructor(thePtr: MeshVS_Drawer);
  }

  export declare class Handle_MeshVS_Drawer_3 extends Handle_MeshVS_Drawer {
    constructor(theHandle: Handle_MeshVS_Drawer);
  }

  export declare class Handle_MeshVS_Drawer_4 extends Handle_MeshVS_Drawer {
    constructor(theHandle: Handle_MeshVS_Drawer);
  }

export declare class Handle_MeshVS_DummySensitiveEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_DummySensitiveEntity): void;
  get(): MeshVS_DummySensitiveEntity;
}

  export declare class Handle_MeshVS_DummySensitiveEntity_1 extends Handle_MeshVS_DummySensitiveEntity {
    constructor();
  }

  export declare class Handle_MeshVS_DummySensitiveEntity_2 extends Handle_MeshVS_DummySensitiveEntity {
    constructor(thePtr: MeshVS_DummySensitiveEntity);
  }

  export declare class Handle_MeshVS_DummySensitiveEntity_3 extends Handle_MeshVS_DummySensitiveEntity {
    constructor(theHandle: Handle_MeshVS_DummySensitiveEntity);
  }

  export declare class Handle_MeshVS_DummySensitiveEntity_4 extends Handle_MeshVS_DummySensitiveEntity {
    constructor(theHandle: Handle_MeshVS_DummySensitiveEntity);
  }

export declare class Handle_MeshVS_ElementalColorPrsBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_ElementalColorPrsBuilder): void;
  get(): MeshVS_ElementalColorPrsBuilder;
}

  export declare class Handle_MeshVS_ElementalColorPrsBuilder_1 extends Handle_MeshVS_ElementalColorPrsBuilder {
    constructor();
  }

  export declare class Handle_MeshVS_ElementalColorPrsBuilder_2 extends Handle_MeshVS_ElementalColorPrsBuilder {
    constructor(thePtr: MeshVS_ElementalColorPrsBuilder);
  }

  export declare class Handle_MeshVS_ElementalColorPrsBuilder_3 extends Handle_MeshVS_ElementalColorPrsBuilder {
    constructor(theHandle: Handle_MeshVS_ElementalColorPrsBuilder);
  }

  export declare class Handle_MeshVS_ElementalColorPrsBuilder_4 extends Handle_MeshVS_ElementalColorPrsBuilder {
    constructor(theHandle: Handle_MeshVS_ElementalColorPrsBuilder);
  }

export declare class MeshVS_TwoNodesHasher {
  constructor();
  HashCode(theKey: MeshVS_TwoNodes, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theKey1: MeshVS_TwoNodes, theKey2: MeshVS_TwoNodes): Standard_Boolean;
}

export declare class MeshVS_MapOfTwoNodes extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: MeshVS_MapOfTwoNodes): void;
  Assign(theOther: MeshVS_MapOfTwoNodes): MeshVS_MapOfTwoNodes;
  ReSize(N: Standard_Integer): void;
  Add(K: MeshVS_TwoNodes): Standard_Boolean;
  Added(K: MeshVS_TwoNodes): MeshVS_TwoNodes;
  Contains_1(K: MeshVS_TwoNodes): Standard_Boolean;
  Remove(K: MeshVS_TwoNodes): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: MeshVS_MapOfTwoNodes): Standard_Boolean;
  Contains_2(theOther: MeshVS_MapOfTwoNodes): Standard_Boolean;
  Union(theLeft: MeshVS_MapOfTwoNodes, theRight: MeshVS_MapOfTwoNodes): void;
  Unite(theOther: MeshVS_MapOfTwoNodes): Standard_Boolean;
  HasIntersection(theMap: MeshVS_MapOfTwoNodes): Standard_Boolean;
  Intersection(theLeft: MeshVS_MapOfTwoNodes, theRight: MeshVS_MapOfTwoNodes): void;
  Intersect(theOther: MeshVS_MapOfTwoNodes): Standard_Boolean;
  Subtraction(theLeft: MeshVS_MapOfTwoNodes, theRight: MeshVS_MapOfTwoNodes): void;
  Subtract(theOther: MeshVS_MapOfTwoNodes): Standard_Boolean;
  Difference(theLeft: MeshVS_MapOfTwoNodes, theRight: MeshVS_MapOfTwoNodes): void;
  Differ(theOther: MeshVS_MapOfTwoNodes): Standard_Boolean;
}

  export declare class MeshVS_MapOfTwoNodes_1 extends MeshVS_MapOfTwoNodes {
    constructor();
  }

  export declare class MeshVS_MapOfTwoNodes_2 extends MeshVS_MapOfTwoNodes {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class MeshVS_MapOfTwoNodes_3 extends MeshVS_MapOfTwoNodes {
    constructor(theOther: MeshVS_MapOfTwoNodes);
  }

export declare class Handle_MeshVS_MeshOwner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_MeshOwner): void;
  get(): MeshVS_MeshOwner;
}

  export declare class Handle_MeshVS_MeshOwner_1 extends Handle_MeshVS_MeshOwner {
    constructor();
  }

  export declare class Handle_MeshVS_MeshOwner_2 extends Handle_MeshVS_MeshOwner {
    constructor(thePtr: MeshVS_MeshOwner);
  }

  export declare class Handle_MeshVS_MeshOwner_3 extends Handle_MeshVS_MeshOwner {
    constructor(theHandle: Handle_MeshVS_MeshOwner);
  }

  export declare class Handle_MeshVS_MeshOwner_4 extends Handle_MeshVS_MeshOwner {
    constructor(theHandle: Handle_MeshVS_MeshOwner);
  }

export declare class Handle_MeshVS_MeshPrsBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_MeshPrsBuilder): void;
  get(): MeshVS_MeshPrsBuilder;
}

  export declare class Handle_MeshVS_MeshPrsBuilder_1 extends Handle_MeshVS_MeshPrsBuilder {
    constructor();
  }

  export declare class Handle_MeshVS_MeshPrsBuilder_2 extends Handle_MeshVS_MeshPrsBuilder {
    constructor(thePtr: MeshVS_MeshPrsBuilder);
  }

  export declare class Handle_MeshVS_MeshPrsBuilder_3 extends Handle_MeshVS_MeshPrsBuilder {
    constructor(theHandle: Handle_MeshVS_MeshPrsBuilder);
  }

  export declare class Handle_MeshVS_MeshPrsBuilder_4 extends Handle_MeshVS_MeshPrsBuilder {
    constructor(theHandle: Handle_MeshVS_MeshPrsBuilder);
  }

export declare class Handle_MeshVS_NodalColorPrsBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_NodalColorPrsBuilder): void;
  get(): MeshVS_NodalColorPrsBuilder;
}

  export declare class Handle_MeshVS_NodalColorPrsBuilder_1 extends Handle_MeshVS_NodalColorPrsBuilder {
    constructor();
  }

  export declare class Handle_MeshVS_NodalColorPrsBuilder_2 extends Handle_MeshVS_NodalColorPrsBuilder {
    constructor(thePtr: MeshVS_NodalColorPrsBuilder);
  }

  export declare class Handle_MeshVS_NodalColorPrsBuilder_3 extends Handle_MeshVS_NodalColorPrsBuilder {
    constructor(theHandle: Handle_MeshVS_NodalColorPrsBuilder);
  }

  export declare class Handle_MeshVS_NodalColorPrsBuilder_4 extends Handle_MeshVS_NodalColorPrsBuilder {
    constructor(theHandle: Handle_MeshVS_NodalColorPrsBuilder);
  }

export declare class Handle_MeshVS_SensitiveFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_SensitiveFace): void;
  get(): MeshVS_SensitiveFace;
}

  export declare class Handle_MeshVS_SensitiveFace_1 extends Handle_MeshVS_SensitiveFace {
    constructor();
  }

  export declare class Handle_MeshVS_SensitiveFace_2 extends Handle_MeshVS_SensitiveFace {
    constructor(thePtr: MeshVS_SensitiveFace);
  }

  export declare class Handle_MeshVS_SensitiveFace_3 extends Handle_MeshVS_SensitiveFace {
    constructor(theHandle: Handle_MeshVS_SensitiveFace);
  }

  export declare class Handle_MeshVS_SensitiveFace_4 extends Handle_MeshVS_SensitiveFace {
    constructor(theHandle: Handle_MeshVS_SensitiveFace);
  }

export declare class Handle_MeshVS_SensitiveMesh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_SensitiveMesh): void;
  get(): MeshVS_SensitiveMesh;
}

  export declare class Handle_MeshVS_SensitiveMesh_1 extends Handle_MeshVS_SensitiveMesh {
    constructor();
  }

  export declare class Handle_MeshVS_SensitiveMesh_2 extends Handle_MeshVS_SensitiveMesh {
    constructor(thePtr: MeshVS_SensitiveMesh);
  }

  export declare class Handle_MeshVS_SensitiveMesh_3 extends Handle_MeshVS_SensitiveMesh {
    constructor(theHandle: Handle_MeshVS_SensitiveMesh);
  }

  export declare class Handle_MeshVS_SensitiveMesh_4 extends Handle_MeshVS_SensitiveMesh {
    constructor(theHandle: Handle_MeshVS_SensitiveMesh);
  }

export declare class Handle_MeshVS_SensitivePolyhedron {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_SensitivePolyhedron): void;
  get(): MeshVS_SensitivePolyhedron;
}

  export declare class Handle_MeshVS_SensitivePolyhedron_1 extends Handle_MeshVS_SensitivePolyhedron {
    constructor();
  }

  export declare class Handle_MeshVS_SensitivePolyhedron_2 extends Handle_MeshVS_SensitivePolyhedron {
    constructor(thePtr: MeshVS_SensitivePolyhedron);
  }

  export declare class Handle_MeshVS_SensitivePolyhedron_3 extends Handle_MeshVS_SensitivePolyhedron {
    constructor(theHandle: Handle_MeshVS_SensitivePolyhedron);
  }

  export declare class Handle_MeshVS_SensitivePolyhedron_4 extends Handle_MeshVS_SensitivePolyhedron {
    constructor(theHandle: Handle_MeshVS_SensitivePolyhedron);
  }

export declare class Handle_MeshVS_SensitiveQuad {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_SensitiveQuad): void;
  get(): MeshVS_SensitiveQuad;
}

  export declare class Handle_MeshVS_SensitiveQuad_1 extends Handle_MeshVS_SensitiveQuad {
    constructor();
  }

  export declare class Handle_MeshVS_SensitiveQuad_2 extends Handle_MeshVS_SensitiveQuad {
    constructor(thePtr: MeshVS_SensitiveQuad);
  }

  export declare class Handle_MeshVS_SensitiveQuad_3 extends Handle_MeshVS_SensitiveQuad {
    constructor(theHandle: Handle_MeshVS_SensitiveQuad);
  }

  export declare class Handle_MeshVS_SensitiveQuad_4 extends Handle_MeshVS_SensitiveQuad {
    constructor(theHandle: Handle_MeshVS_SensitiveQuad);
  }

export declare class Handle_MeshVS_SensitiveSegment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_SensitiveSegment): void;
  get(): MeshVS_SensitiveSegment;
}

  export declare class Handle_MeshVS_SensitiveSegment_1 extends Handle_MeshVS_SensitiveSegment {
    constructor();
  }

  export declare class Handle_MeshVS_SensitiveSegment_2 extends Handle_MeshVS_SensitiveSegment {
    constructor(thePtr: MeshVS_SensitiveSegment);
  }

  export declare class Handle_MeshVS_SensitiveSegment_3 extends Handle_MeshVS_SensitiveSegment {
    constructor(theHandle: Handle_MeshVS_SensitiveSegment);
  }

  export declare class Handle_MeshVS_SensitiveSegment_4 extends Handle_MeshVS_SensitiveSegment {
    constructor(theHandle: Handle_MeshVS_SensitiveSegment);
  }

export declare class Handle_MeshVS_TextPrsBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_TextPrsBuilder): void;
  get(): MeshVS_TextPrsBuilder;
}

  export declare class Handle_MeshVS_TextPrsBuilder_1 extends Handle_MeshVS_TextPrsBuilder {
    constructor();
  }

  export declare class Handle_MeshVS_TextPrsBuilder_2 extends Handle_MeshVS_TextPrsBuilder {
    constructor(thePtr: MeshVS_TextPrsBuilder);
  }

  export declare class Handle_MeshVS_TextPrsBuilder_3 extends Handle_MeshVS_TextPrsBuilder {
    constructor(theHandle: Handle_MeshVS_TextPrsBuilder);
  }

  export declare class Handle_MeshVS_TextPrsBuilder_4 extends Handle_MeshVS_TextPrsBuilder {
    constructor(theHandle: Handle_MeshVS_TextPrsBuilder);
  }

export declare class Handle_MeshVS_VectorPrsBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MeshVS_VectorPrsBuilder): void;
  get(): MeshVS_VectorPrsBuilder;
}

  export declare class Handle_MeshVS_VectorPrsBuilder_1 extends Handle_MeshVS_VectorPrsBuilder {
    constructor();
  }

  export declare class Handle_MeshVS_VectorPrsBuilder_2 extends Handle_MeshVS_VectorPrsBuilder {
    constructor(thePtr: MeshVS_VectorPrsBuilder);
  }

  export declare class Handle_MeshVS_VectorPrsBuilder_3 extends Handle_MeshVS_VectorPrsBuilder {
    constructor(theHandle: Handle_MeshVS_VectorPrsBuilder);
  }

  export declare class Handle_MeshVS_VectorPrsBuilder_4 extends Handle_MeshVS_VectorPrsBuilder {
    constructor(theHandle: Handle_MeshVS_VectorPrsBuilder);
  }

export declare type MeshVS_MeshSelectionMethod = {
  MeshVS_MSM_PRECISE: {};
  MeshVS_MSM_NODES: {};
  MeshVS_MSM_BOX: {};
}

export declare type MeshVS_DrawerAttribute = {
  MeshVS_DA_InteriorStyle: {};
  MeshVS_DA_InteriorColor: {};
  MeshVS_DA_BackInteriorColor: {};
  MeshVS_DA_EdgeColor: {};
  MeshVS_DA_EdgeType: {};
  MeshVS_DA_EdgeWidth: {};
  MeshVS_DA_HatchStyle: {};
  MeshVS_DA_FrontMaterial: {};
  MeshVS_DA_BackMaterial: {};
  MeshVS_DA_BeamType: {};
  MeshVS_DA_BeamWidth: {};
  MeshVS_DA_BeamColor: {};
  MeshVS_DA_MarkerType: {};
  MeshVS_DA_MarkerColor: {};
  MeshVS_DA_MarkerScale: {};
  MeshVS_DA_TextColor: {};
  MeshVS_DA_TextHeight: {};
  MeshVS_DA_TextFont: {};
  MeshVS_DA_TextExpansionFactor: {};
  MeshVS_DA_TextSpace: {};
  MeshVS_DA_TextStyle: {};
  MeshVS_DA_TextDisplayType: {};
  MeshVS_DA_TextTexFont: {};
  MeshVS_DA_TextFontAspect: {};
  MeshVS_DA_VectorColor: {};
  MeshVS_DA_VectorMaxLength: {};
  MeshVS_DA_VectorArrowPart: {};
  MeshVS_DA_IsAllowOverlapped: {};
  MeshVS_DA_Reflection: {};
  MeshVS_DA_ColorReflection: {};
  MeshVS_DA_ShrinkCoeff: {};
  MeshVS_DA_MaxFaceNodes: {};
  MeshVS_DA_ComputeTime: {};
  MeshVS_DA_ComputeSelectionTime: {};
  MeshVS_DA_DisplayNodes: {};
  MeshVS_DA_SelectableAuto: {};
  MeshVS_DA_ShowEdges: {};
  MeshVS_DA_SmoothShading: {};
  MeshVS_DA_SupressBackFaces: {};
  MeshVS_DA_User: {};
}

export declare type TKMeshVSLib = {
  MeshVS_Buffer: typeof MeshVS_Buffer;
  MeshVS_Mesh: typeof MeshVS_Mesh;
  MeshVS_CommonSensitiveEntity: typeof MeshVS_CommonSensitiveEntity;
  MeshVS_MeshEntityOwner: typeof MeshVS_MeshEntityOwner;
  MeshVS_DeformedDataSource: typeof MeshVS_DeformedDataSource;
  MeshVS_DummySensitiveEntity: typeof MeshVS_DummySensitiveEntity;
  MeshVS_ElementalColorPrsBuilder: typeof MeshVS_ElementalColorPrsBuilder;
  MeshVS_MeshOwner: typeof MeshVS_MeshOwner;
  MeshVS_MeshPrsBuilder: typeof MeshVS_MeshPrsBuilder;
  MeshVS_NodalColorPrsBuilder: typeof MeshVS_NodalColorPrsBuilder;
  MeshVS_SensitiveFace: typeof MeshVS_SensitiveFace;
  MeshVS_SensitiveMesh: typeof MeshVS_SensitiveMesh;
  MeshVS_SensitivePolyhedron: typeof MeshVS_SensitivePolyhedron;
  MeshVS_SensitiveQuad_1: typeof MeshVS_SensitiveQuad_1;
  MeshVS_SensitiveQuad_2: typeof MeshVS_SensitiveQuad_2;
  MeshVS_SensitiveSegment: typeof MeshVS_SensitiveSegment;
  MeshVS_TextPrsBuilder: typeof MeshVS_TextPrsBuilder;
  MeshVS_VectorPrsBuilder: typeof MeshVS_VectorPrsBuilder;
  MeshVS_Array1OfSequenceOfInteger_1: typeof MeshVS_Array1OfSequenceOfInteger_1;
  MeshVS_Array1OfSequenceOfInteger_2: typeof MeshVS_Array1OfSequenceOfInteger_2;
  MeshVS_Array1OfSequenceOfInteger_3: typeof MeshVS_Array1OfSequenceOfInteger_3;
  MeshVS_Array1OfSequenceOfInteger_4: typeof MeshVS_Array1OfSequenceOfInteger_4;
  MeshVS_Array1OfSequenceOfInteger_5: typeof MeshVS_Array1OfSequenceOfInteger_5;
  Handle_MeshVS_HArray1OfSequenceOfInteger_1: typeof Handle_MeshVS_HArray1OfSequenceOfInteger_1;
  Handle_MeshVS_HArray1OfSequenceOfInteger_2: typeof Handle_MeshVS_HArray1OfSequenceOfInteger_2;
  Handle_MeshVS_HArray1OfSequenceOfInteger_3: typeof Handle_MeshVS_HArray1OfSequenceOfInteger_3;
  Handle_MeshVS_HArray1OfSequenceOfInteger_4: typeof Handle_MeshVS_HArray1OfSequenceOfInteger_4;
  Handle_MeshVS_DataSource_1: typeof Handle_MeshVS_DataSource_1;
  Handle_MeshVS_DataSource_2: typeof Handle_MeshVS_DataSource_2;
  Handle_MeshVS_DataSource_3: typeof Handle_MeshVS_DataSource_3;
  Handle_MeshVS_DataSource_4: typeof Handle_MeshVS_DataSource_4;
  Handle_MeshVS_PrsBuilder_1: typeof Handle_MeshVS_PrsBuilder_1;
  Handle_MeshVS_PrsBuilder_2: typeof Handle_MeshVS_PrsBuilder_2;
  Handle_MeshVS_PrsBuilder_3: typeof Handle_MeshVS_PrsBuilder_3;
  Handle_MeshVS_PrsBuilder_4: typeof Handle_MeshVS_PrsBuilder_4;
  Handle_MeshVS_Mesh_1: typeof Handle_MeshVS_Mesh_1;
  Handle_MeshVS_Mesh_2: typeof Handle_MeshVS_Mesh_2;
  Handle_MeshVS_Mesh_3: typeof Handle_MeshVS_Mesh_3;
  Handle_MeshVS_Mesh_4: typeof Handle_MeshVS_Mesh_4;
  Handle_MeshVS_CommonSensitiveEntity_1: typeof Handle_MeshVS_CommonSensitiveEntity_1;
  Handle_MeshVS_CommonSensitiveEntity_2: typeof Handle_MeshVS_CommonSensitiveEntity_2;
  Handle_MeshVS_CommonSensitiveEntity_3: typeof Handle_MeshVS_CommonSensitiveEntity_3;
  Handle_MeshVS_CommonSensitiveEntity_4: typeof Handle_MeshVS_CommonSensitiveEntity_4;
  MeshVS_DataMapOfColorMapOfInteger_1: typeof MeshVS_DataMapOfColorMapOfInteger_1;
  MeshVS_DataMapOfColorMapOfInteger_2: typeof MeshVS_DataMapOfColorMapOfInteger_2;
  MeshVS_DataMapOfColorMapOfInteger_3: typeof MeshVS_DataMapOfColorMapOfInteger_3;
  MeshVS_DataMapOfIntegerAsciiString_1: typeof MeshVS_DataMapOfIntegerAsciiString_1;
  MeshVS_DataMapOfIntegerAsciiString_2: typeof MeshVS_DataMapOfIntegerAsciiString_2;
  MeshVS_DataMapOfIntegerAsciiString_3: typeof MeshVS_DataMapOfIntegerAsciiString_3;
  MeshVS_DataMapOfIntegerBoolean_1: typeof MeshVS_DataMapOfIntegerBoolean_1;
  MeshVS_DataMapOfIntegerBoolean_2: typeof MeshVS_DataMapOfIntegerBoolean_2;
  MeshVS_DataMapOfIntegerBoolean_3: typeof MeshVS_DataMapOfIntegerBoolean_3;
  MeshVS_DataMapOfIntegerColor_1: typeof MeshVS_DataMapOfIntegerColor_1;
  MeshVS_DataMapOfIntegerColor_2: typeof MeshVS_DataMapOfIntegerColor_2;
  MeshVS_DataMapOfIntegerColor_3: typeof MeshVS_DataMapOfIntegerColor_3;
  MeshVS_DataMapOfIntegerMaterial_1: typeof MeshVS_DataMapOfIntegerMaterial_1;
  MeshVS_DataMapOfIntegerMaterial_2: typeof MeshVS_DataMapOfIntegerMaterial_2;
  MeshVS_DataMapOfIntegerMaterial_3: typeof MeshVS_DataMapOfIntegerMaterial_3;
  Handle_MeshVS_MeshEntityOwner_1: typeof Handle_MeshVS_MeshEntityOwner_1;
  Handle_MeshVS_MeshEntityOwner_2: typeof Handle_MeshVS_MeshEntityOwner_2;
  Handle_MeshVS_MeshEntityOwner_3: typeof Handle_MeshVS_MeshEntityOwner_3;
  Handle_MeshVS_MeshEntityOwner_4: typeof Handle_MeshVS_MeshEntityOwner_4;
  MeshVS_DataMapOfIntegerTwoColors_1: typeof MeshVS_DataMapOfIntegerTwoColors_1;
  MeshVS_DataMapOfIntegerTwoColors_2: typeof MeshVS_DataMapOfIntegerTwoColors_2;
  MeshVS_DataMapOfIntegerTwoColors_3: typeof MeshVS_DataMapOfIntegerTwoColors_3;
  MeshVS_DataMapOfIntegerVector_1: typeof MeshVS_DataMapOfIntegerVector_1;
  MeshVS_DataMapOfIntegerVector_2: typeof MeshVS_DataMapOfIntegerVector_2;
  MeshVS_DataMapOfIntegerVector_3: typeof MeshVS_DataMapOfIntegerVector_3;
  MeshVS_DataMapOfTwoColorsMapOfInteger_1: typeof MeshVS_DataMapOfTwoColorsMapOfInteger_1;
  MeshVS_DataMapOfTwoColorsMapOfInteger_2: typeof MeshVS_DataMapOfTwoColorsMapOfInteger_2;
  MeshVS_DataMapOfTwoColorsMapOfInteger_3: typeof MeshVS_DataMapOfTwoColorsMapOfInteger_3;
  Handle_MeshVS_DataSource3D_1: typeof Handle_MeshVS_DataSource3D_1;
  Handle_MeshVS_DataSource3D_2: typeof Handle_MeshVS_DataSource3D_2;
  Handle_MeshVS_DataSource3D_3: typeof Handle_MeshVS_DataSource3D_3;
  Handle_MeshVS_DataSource3D_4: typeof Handle_MeshVS_DataSource3D_4;
  Handle_MeshVS_DeformedDataSource_1: typeof Handle_MeshVS_DeformedDataSource_1;
  Handle_MeshVS_DeformedDataSource_2: typeof Handle_MeshVS_DeformedDataSource_2;
  Handle_MeshVS_DeformedDataSource_3: typeof Handle_MeshVS_DeformedDataSource_3;
  Handle_MeshVS_DeformedDataSource_4: typeof Handle_MeshVS_DeformedDataSource_4;
  Handle_MeshVS_Drawer_1: typeof Handle_MeshVS_Drawer_1;
  Handle_MeshVS_Drawer_2: typeof Handle_MeshVS_Drawer_2;
  Handle_MeshVS_Drawer_3: typeof Handle_MeshVS_Drawer_3;
  Handle_MeshVS_Drawer_4: typeof Handle_MeshVS_Drawer_4;
  Handle_MeshVS_DummySensitiveEntity_1: typeof Handle_MeshVS_DummySensitiveEntity_1;
  Handle_MeshVS_DummySensitiveEntity_2: typeof Handle_MeshVS_DummySensitiveEntity_2;
  Handle_MeshVS_DummySensitiveEntity_3: typeof Handle_MeshVS_DummySensitiveEntity_3;
  Handle_MeshVS_DummySensitiveEntity_4: typeof Handle_MeshVS_DummySensitiveEntity_4;
  Handle_MeshVS_ElementalColorPrsBuilder_1: typeof Handle_MeshVS_ElementalColorPrsBuilder_1;
  Handle_MeshVS_ElementalColorPrsBuilder_2: typeof Handle_MeshVS_ElementalColorPrsBuilder_2;
  Handle_MeshVS_ElementalColorPrsBuilder_3: typeof Handle_MeshVS_ElementalColorPrsBuilder_3;
  Handle_MeshVS_ElementalColorPrsBuilder_4: typeof Handle_MeshVS_ElementalColorPrsBuilder_4;
  MeshVS_MapOfTwoNodes_1: typeof MeshVS_MapOfTwoNodes_1;
  MeshVS_MapOfTwoNodes_2: typeof MeshVS_MapOfTwoNodes_2;
  MeshVS_MapOfTwoNodes_3: typeof MeshVS_MapOfTwoNodes_3;
  Handle_MeshVS_MeshOwner_1: typeof Handle_MeshVS_MeshOwner_1;
  Handle_MeshVS_MeshOwner_2: typeof Handle_MeshVS_MeshOwner_2;
  Handle_MeshVS_MeshOwner_3: typeof Handle_MeshVS_MeshOwner_3;
  Handle_MeshVS_MeshOwner_4: typeof Handle_MeshVS_MeshOwner_4;
  Handle_MeshVS_MeshPrsBuilder_1: typeof Handle_MeshVS_MeshPrsBuilder_1;
  Handle_MeshVS_MeshPrsBuilder_2: typeof Handle_MeshVS_MeshPrsBuilder_2;
  Handle_MeshVS_MeshPrsBuilder_3: typeof Handle_MeshVS_MeshPrsBuilder_3;
  Handle_MeshVS_MeshPrsBuilder_4: typeof Handle_MeshVS_MeshPrsBuilder_4;
  Handle_MeshVS_NodalColorPrsBuilder_1: typeof Handle_MeshVS_NodalColorPrsBuilder_1;
  Handle_MeshVS_NodalColorPrsBuilder_2: typeof Handle_MeshVS_NodalColorPrsBuilder_2;
  Handle_MeshVS_NodalColorPrsBuilder_3: typeof Handle_MeshVS_NodalColorPrsBuilder_3;
  Handle_MeshVS_NodalColorPrsBuilder_4: typeof Handle_MeshVS_NodalColorPrsBuilder_4;
  Handle_MeshVS_SensitiveFace_1: typeof Handle_MeshVS_SensitiveFace_1;
  Handle_MeshVS_SensitiveFace_2: typeof Handle_MeshVS_SensitiveFace_2;
  Handle_MeshVS_SensitiveFace_3: typeof Handle_MeshVS_SensitiveFace_3;
  Handle_MeshVS_SensitiveFace_4: typeof Handle_MeshVS_SensitiveFace_4;
  Handle_MeshVS_SensitiveMesh_1: typeof Handle_MeshVS_SensitiveMesh_1;
  Handle_MeshVS_SensitiveMesh_2: typeof Handle_MeshVS_SensitiveMesh_2;
  Handle_MeshVS_SensitiveMesh_3: typeof Handle_MeshVS_SensitiveMesh_3;
  Handle_MeshVS_SensitiveMesh_4: typeof Handle_MeshVS_SensitiveMesh_4;
  Handle_MeshVS_SensitivePolyhedron_1: typeof Handle_MeshVS_SensitivePolyhedron_1;
  Handle_MeshVS_SensitivePolyhedron_2: typeof Handle_MeshVS_SensitivePolyhedron_2;
  Handle_MeshVS_SensitivePolyhedron_3: typeof Handle_MeshVS_SensitivePolyhedron_3;
  Handle_MeshVS_SensitivePolyhedron_4: typeof Handle_MeshVS_SensitivePolyhedron_4;
  Handle_MeshVS_SensitiveQuad_1: typeof Handle_MeshVS_SensitiveQuad_1;
  Handle_MeshVS_SensitiveQuad_2: typeof Handle_MeshVS_SensitiveQuad_2;
  Handle_MeshVS_SensitiveQuad_3: typeof Handle_MeshVS_SensitiveQuad_3;
  Handle_MeshVS_SensitiveQuad_4: typeof Handle_MeshVS_SensitiveQuad_4;
  Handle_MeshVS_SensitiveSegment_1: typeof Handle_MeshVS_SensitiveSegment_1;
  Handle_MeshVS_SensitiveSegment_2: typeof Handle_MeshVS_SensitiveSegment_2;
  Handle_MeshVS_SensitiveSegment_3: typeof Handle_MeshVS_SensitiveSegment_3;
  Handle_MeshVS_SensitiveSegment_4: typeof Handle_MeshVS_SensitiveSegment_4;
  Handle_MeshVS_TextPrsBuilder_1: typeof Handle_MeshVS_TextPrsBuilder_1;
  Handle_MeshVS_TextPrsBuilder_2: typeof Handle_MeshVS_TextPrsBuilder_2;
  Handle_MeshVS_TextPrsBuilder_3: typeof Handle_MeshVS_TextPrsBuilder_3;
  Handle_MeshVS_TextPrsBuilder_4: typeof Handle_MeshVS_TextPrsBuilder_4;
  Handle_MeshVS_VectorPrsBuilder_1: typeof Handle_MeshVS_VectorPrsBuilder_1;
  Handle_MeshVS_VectorPrsBuilder_2: typeof Handle_MeshVS_VectorPrsBuilder_2;
  Handle_MeshVS_VectorPrsBuilder_3: typeof Handle_MeshVS_VectorPrsBuilder_3;
  Handle_MeshVS_VectorPrsBuilder_4: typeof Handle_MeshVS_VectorPrsBuilder_4;
  MeshVS_MeshSelectionMethod: typeof MeshVS_MeshSelectionMethod;
  MeshVS_DrawerAttribute: typeof MeshVS_DrawerAttribute;
};
