declare const libName = "./modules/TKRWMesh.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class RWMesh_CoordinateSystemConverter {
  constructor()
  StandardCoordinateSystem(theSys: RWMesh_CoordinateSystem): gp_Ax3;
  IsEmpty(): Standard_Boolean;
  InputLengthUnit(): Standard_Real;
  SetInputLengthUnit(theInputScale: Standard_Real): void;
  OutputLengthUnit(): Standard_Real;
  SetOutputLengthUnit(theOutputScale: Standard_Real): void;
  HasInputCoordinateSystem(): Standard_Boolean;
  InputCoordinateSystem(): gp_Ax3;
  SetInputCoordinateSystem_1(theSysFrom: gp_Ax3): void;
  SetInputCoordinateSystem_2(theSysFrom: RWMesh_CoordinateSystem): void;
  HasOutputCoordinateSystem(): Standard_Boolean;
  OutputCoordinateSystem(): gp_Ax3;
  SetOutputCoordinateSystem_1(theSysTo: gp_Ax3): void;
  SetOutputCoordinateSystem_2(theSysTo: RWMesh_CoordinateSystem): void;
  Init(theInputSystem: gp_Ax3, theInputLengthUnit: Standard_Real, theOutputSystem: gp_Ax3, theOutputLengthUnit: Standard_Real): void;
  TransformTransformation(theTrsf: gp_Trsf): void;
  TransformPosition(thePos: gp_XYZ): void;
  TransformNormal(theNorm: Graphic3d_Vec3): void;
}

export declare class RWMesh_CafReader extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Document(): any;
  SetDocument(theDoc: any): void;
  RootPrefix(): TCollection_AsciiString;
  SetRootPrefix(theRootPrefix: TCollection_AsciiString): void;
  ToFillIncompleteDocument(): Standard_Boolean;
  SetFillIncompleteDocument(theToFillIncomplete: Standard_Boolean): void;
  MemoryLimitMiB(): Standard_Integer;
  SetMemoryLimitMiB(theLimitMiB: Standard_Integer): void;
  CoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  SetCoordinateSystemConverter(theConverter: RWMesh_CoordinateSystemConverter): void;
  SystemLengthUnit(): Standard_Real;
  SetSystemLengthUnit(theUnits: Standard_Real): void;
  HasSystemCoordinateSystem(): Standard_Boolean;
  SystemCoordinateSystem(): gp_Ax3;
  SetSystemCoordinateSystem_1(theCS: gp_Ax3): void;
  SetSystemCoordinateSystem_2(theCS: RWMesh_CoordinateSystem): void;
  FileLengthUnit(): Standard_Real;
  SetFileLengthUnit(theUnits: Standard_Real): void;
  HasFileCoordinateSystem(): Standard_Boolean;
  FileCoordinateSystem(): gp_Ax3;
  SetFileCoordinateSystem_1(theCS: gp_Ax3): void;
  SetFileCoordinateSystem_2(theCS: RWMesh_CoordinateSystem): void;
  Perform(theFile: TCollection_AsciiString, theProgress: Message_ProgressRange): boolean;
  ExtraStatus(): Standard_Integer;
  SingleShape(): TopoDS_Shape;
  ExternalFiles(): NCollection_IndexedMap<TCollection_AsciiString>;
  Metadata(): TColStd_IndexedDataMapOfStringString;
  ProbeHeader(theFile: TCollection_AsciiString, theProgress: Message_ProgressRange): Standard_Boolean;
}

export declare class RWGltf_CafReader extends RWMesh_CafReader {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ToParallel(): boolean;
  SetParallel(theToParallel: boolean): void;
  ToSkipEmptyNodes(): boolean;
  SetSkipEmptyNodes(theToSkip: boolean): void;
  ToUseMeshNameAsFallback(): boolean;
  SetMeshNameAsFallback(theToFallback: boolean): void;
}

export declare class RWGltf_CafWriter extends Standard_Transient {
  constructor(theFile: TCollection_AsciiString, theIsBinary: Standard_Boolean)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  CoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  ChangeCoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  SetCoordinateSystemConverter(theConverter: RWMesh_CoordinateSystemConverter): void;
  IsBinary(): boolean;
  TransformationFormat(): RWGltf_WriterTrsfFormat;
  SetTransformationFormat(theFormat: RWGltf_WriterTrsfFormat): void;
  IsForcedUVExport(): boolean;
  SetForcedUVExport(theToForce: boolean): void;
  DefaultStyle(): XCAFPrs_Style;
  SetDefaultStyle(theStyle: XCAFPrs_Style): void;
  Perform_1(theDocument: any, theRootLabels: TDF_LabelSequence, theLabelFilter: TColStd_MapOfAsciiString, theFileInfo: TColStd_IndexedDataMapOfStringString, theProgress: Message_ProgressRange): boolean;
  Perform_2(theDocument: any, theFileInfo: TColStd_IndexedDataMapOfStringString, theProgress: Message_ProgressRange): boolean;
}

export declare class RWGltf_GltfPrimArrayData {
}

  export declare class RWGltf_GltfPrimArrayData_1 extends RWGltf_GltfPrimArrayData {
    constructor();
  }

  export declare class RWGltf_GltfPrimArrayData_2 extends RWGltf_GltfPrimArrayData {
    constructor(theType: RWGltf_GltfArrayType);
  }

export declare class RWGltf_GltfLatePrimitiveArray extends Poly_Triangulation {
  constructor(theId: TCollection_AsciiString, theName: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Id(): TCollection_AsciiString;
  Name(): TCollection_AsciiString;
  SetName(theName: TCollection_AsciiString): void;
  PrimitiveMode(): RWGltf_GltfPrimitiveMode;
  SetPrimitiveMode(theMode: RWGltf_GltfPrimitiveMode): void;
  HasStyle(): boolean;
  BaseColor(): Quantity_ColorRGBA;
  MaterialPbr(): any;
  SetMaterialPbr(theMat: any): void;
  MaterialCommon(): any;
  SetMaterialCommon(theMat: any): void;
  Data(): NCollection_Sequence<RWGltf_GltfPrimArrayData>;
  AddPrimArrayData(theType: RWGltf_GltfArrayType): RWGltf_GltfPrimArrayData;
  BoundingBox(): Bnd_Box;
  SetBoundingBox(theBox: Bnd_Box): void;
}

export declare class RWMesh_MaterialMap {
  DefaultStyle(): XCAFPrs_Style;
  SetDefaultStyle(theStyle: XCAFPrs_Style): void;
  FindMaterial(theStyle: XCAFPrs_Style): TCollection_AsciiString;
  AddMaterial(theStyle: XCAFPrs_Style): TCollection_AsciiString;
  CreateTextureFolder(): boolean;
  CopyTexture(theResTexture: TCollection_AsciiString, theTexture: any, theKey: TCollection_AsciiString): boolean;
  DefineMaterial(theStyle: XCAFPrs_Style, theKey: TCollection_AsciiString, theName: TCollection_AsciiString): void;
  IsFailed(): boolean;
}

export declare class RWGltf_GltfMaterialMap extends RWMesh_MaterialMap {
  constructor(theFile: TCollection_AsciiString, theDefSamplerId: Standard_Integer)
  AddImages(theWriter: RWGltf_GltfOStreamWriter, theStyle: XCAFPrs_Style, theIsStarted: Standard_Boolean): void;
  AddMaterial_1(theWriter: RWGltf_GltfOStreamWriter, theStyle: XCAFPrs_Style, theIsStarted: Standard_Boolean): void;
  AddTextures(theWriter: RWGltf_GltfOStreamWriter, theStyle: XCAFPrs_Style, theIsStarted: Standard_Boolean): void;
  NbImages(): Standard_Integer;
  NbTextures(): Standard_Integer;
  baseColorTexture(theMat: any): any;
}

export declare class RWGltf_GltfOStreamWriter {
  constructor(theOStream: any)
}

export declare class RWGltf_GltfSceneNodeMap {
  constructor()
  FindIndex(theNodeId: TCollection_AsciiString): Standard_Integer;
}

export declare class RWGltf_MaterialCommon extends Standard_Transient {
  constructor()
}

export declare class RWGltf_MaterialMetallicRoughness extends Standard_Transient {
  constructor()
}

export declare class RWGltf_PrimitiveArrayReader extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ErrorPrefix(): TCollection_AsciiString;
  SetErrorPrefix(theErrPrefix: TCollection_AsciiString): void;
  CoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  SetCoordinateSystemConverter(theConverter: RWMesh_CoordinateSystemConverter): void;
  Load(theMesh: any): any;
}

export declare class RWGltf_TriangulationReader extends RWGltf_PrimitiveArrayReader {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class RWMesh_FaceIterator {
  constructor(theLabel: TDF_Label, theLocation: TopLoc_Location, theToMapColors: Standard_Boolean, theStyle: XCAFPrs_Style)
  More(): boolean;
  Next(): void;
  Face(): TopoDS_Face;
  Triangulation(): any;
  IsEmptyMesh(): boolean;
  FaceStyle(): XCAFPrs_Style;
  HasFaceColor(): boolean;
  FaceColor(): Quantity_ColorRGBA;
  NbTriangles(): Standard_Integer;
  ElemLower(): Standard_Integer;
  ElemUpper(): Standard_Integer;
  TriangleOriented(theElemIndex: Standard_Integer): Poly_Triangle;
  HasNormals(): boolean;
  HasTexCoords(): boolean;
  NormalTransformed(theNode: Standard_Integer): gp_Dir;
  NbNodes(): Standard_Integer;
  NodeLower(): Standard_Integer;
  NodeUpper(): Standard_Integer;
  NodeTransformed(theNode: Standard_Integer): gp_Pnt;
  NodeTexCoord(theNode: Standard_Integer): gp_Pnt2d;
  node(theNode: Standard_Integer): gp_Pnt;
  normal(theNode: Standard_Integer): gp_Dir;
  triangle(theElemIndex: Standard_Integer): Poly_Triangle;
}

export declare class RWObj {
  constructor();
  ReadFile(theFile: Standard_CString, aProgress: Message_ProgressRange): any;
}

export declare class RWObj_Reader extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Read(theFile: TCollection_AsciiString, theProgress: Message_ProgressRange): Standard_Boolean;
  Probe(theFile: TCollection_AsciiString, theProgress: Message_ProgressRange): Standard_Boolean;
  FileComments(): TCollection_AsciiString;
  ExternalFiles(): NCollection_IndexedMap<TCollection_AsciiString>;
  NbProbeNodes(): Standard_Integer;
  NbProbeElems(): Standard_Integer;
  MemoryLimit(): Standard_Size;
  SetMemoryLimit(theMemLimit: Standard_Size): void;
  Transformation(): RWMesh_CoordinateSystemConverter;
  SetTransformation(theCSConverter: RWMesh_CoordinateSystemConverter): void;
  IsSinglePrecision(): Standard_Boolean;
  SetSinglePrecision(theIsSinglePrecision: Standard_Boolean): void;
}

export declare class RWObj_IShapeReceiver {
  BindNamedShape(theShape: TopoDS_Shape, theName: TCollection_AsciiString, theMaterial: RWObj_Material, theIsRootShape: Standard_Boolean): void;
}

export declare class RWObj_TriangulationReader extends RWObj_Reader {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetCreateShapes(theToCreateShapes: Standard_Boolean): void;
  SetShapeReceiver(theReceiver: RWObj_IShapeReceiver): void;
  GetTriangulation(): any;
  ResultShape(): TopoDS_Shape;
}

export declare class RWObj_CafReader extends RWMesh_CafReader {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsSinglePrecision(): Standard_Boolean;
  SetSinglePrecision(theIsSinglePrecision: Standard_Boolean): void;
}

export declare class RWObj_MtlReader {
  constructor(theMaterials: NCollection_DataMap<TCollection_AsciiString, RWObj_Material>)
  Read(theFolder: TCollection_AsciiString, theFile: TCollection_AsciiString): boolean;
}

export declare class RWMesh_NodeAttributeMap extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: RWMesh_NodeAttributeMap): void;
  Assign(theOther: RWMesh_NodeAttributeMap): RWMesh_NodeAttributeMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: RWMesh_NodeAttributes): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: RWMesh_NodeAttributes): RWMesh_NodeAttributes;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): RWMesh_NodeAttributes;
  Find_1(theKey: TopoDS_Shape): RWMesh_NodeAttributes;
  Find_2(theKey: TopoDS_Shape, theValue: RWMesh_NodeAttributes): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): RWMesh_NodeAttributes;
  ChangeFind(theKey: TopoDS_Shape): RWMesh_NodeAttributes;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class RWMesh_NodeAttributeMap_1 extends RWMesh_NodeAttributeMap {
    constructor();
  }

  export declare class RWMesh_NodeAttributeMap_2 extends RWMesh_NodeAttributeMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class RWMesh_NodeAttributeMap_3 extends RWMesh_NodeAttributeMap {
    constructor(theOther: RWMesh_NodeAttributeMap);
  }

export declare type RWMesh_CoordinateSystem = {
  RWMesh_CoordinateSystem_Undefined: {};
  RWMesh_CoordinateSystem_posYfwd_posZup: {};
  RWMesh_CoordinateSystem_negZfwd_posYup: {};
  RWMesh_CoordinateSystem_Blender: {};
  RWMesh_CoordinateSystem_glTF: {};
  RWMesh_CoordinateSystem_Zup: {};
  RWMesh_CoordinateSystem_Yup: {};
}

export declare type RWMesh_CafReaderStatusEx = {
  RWMesh_CafReaderStatusEx_NONE: {};
  RWMesh_CafReaderStatusEx_Partial: {};
}

export declare type RWGltf_GltfBufferViewTarget = {
  RWGltf_GltfBufferViewTarget_UNKNOWN: {};
  RWGltf_GltfBufferViewTarget_ARRAY_BUFFER: {};
  RWGltf_GltfBufferViewTarget_ELEMENT_ARRAY_BUFFER: {};
}

export declare type RWGltf_GltfAccessorCompType = {
  RWGltf_GltfAccessorCompType_UNKNOWN: {};
  RWGltf_GltfAccessorCompType_Int8: {};
  RWGltf_GltfAccessorCompType_UInt8: {};
  RWGltf_GltfAccessorCompType_Int16: {};
  RWGltf_GltfAccessorCompType_UInt16: {};
  RWGltf_GltfAccessorCompType_UInt32: {};
  RWGltf_GltfAccessorCompType_Float32: {};
}

export declare type RWGltf_GltfAccessorLayout = {
  RWGltf_GltfAccessorLayout_UNKNOWN: {};
  RWGltf_GltfAccessorLayout_Scalar: {};
  RWGltf_GltfAccessorLayout_Vec2: {};
  RWGltf_GltfAccessorLayout_Vec3: {};
  RWGltf_GltfAccessorLayout_Vec4: {};
  RWGltf_GltfAccessorLayout_Mat2: {};
  RWGltf_GltfAccessorLayout_Mat3: {};
  RWGltf_GltfAccessorLayout_Mat4: {};
}

export declare type RWGltf_WriterTrsfFormat = {
  RWGltf_WriterTrsfFormat_Compact: {};
  RWGltf_WriterTrsfFormat_Mat4: {};
  RWGltf_WriterTrsfFormat_TRS: {};
}

export declare type RWGltf_GltfAlphaMode = {
  RWGltf_GltfAlphaMode_Opaque: {};
  RWGltf_GltfAlphaMode_Mask: {};
  RWGltf_GltfAlphaMode_Blend: {};
}

export declare type RWGltf_GltfArrayType = {
  RWGltf_GltfArrayType_UNKNOWN: {};
  RWGltf_GltfArrayType_Indices: {};
  RWGltf_GltfArrayType_Position: {};
  RWGltf_GltfArrayType_Normal: {};
  RWGltf_GltfArrayType_Color: {};
  RWGltf_GltfArrayType_TCoord0: {};
  RWGltf_GltfArrayType_TCoord1: {};
  RWGltf_GltfArrayType_Joint: {};
  RWGltf_GltfArrayType_Weight: {};
}

export declare type RWGltf_GltfPrimitiveMode = {
  RWGltf_GltfPrimitiveMode_UNKNOWN: {};
  RWGltf_GltfPrimitiveMode_Points: {};
  RWGltf_GltfPrimitiveMode_Lines: {};
  RWGltf_GltfPrimitiveMode_LineLoop: {};
  RWGltf_GltfPrimitiveMode_LineStrip: {};
  RWGltf_GltfPrimitiveMode_Triangles: {};
  RWGltf_GltfPrimitiveMode_TriangleStrip: {};
  RWGltf_GltfPrimitiveMode_TriangleFan: {};
}

export declare type RWGltf_GltfRootElement = {
  RWGltf_GltfRootElement_Asset: {};
  RWGltf_GltfRootElement_Scenes: {};
  RWGltf_GltfRootElement_Scene: {};
  RWGltf_GltfRootElement_Nodes: {};
  RWGltf_GltfRootElement_Meshes: {};
  RWGltf_GltfRootElement_Accessors: {};
  RWGltf_GltfRootElement_BufferViews: {};
  RWGltf_GltfRootElement_Buffers: {};
  RWGltf_GltfRootElement_NB_MANDATORY: {};
  RWGltf_GltfRootElement_Animations: {};
  RWGltf_GltfRootElement_Materials: {};
  RWGltf_GltfRootElement_Programs: {};
  RWGltf_GltfRootElement_Samplers: {};
  RWGltf_GltfRootElement_Shaders: {};
  RWGltf_GltfRootElement_Skins: {};
  RWGltf_GltfRootElement_Techniques: {};
  RWGltf_GltfRootElement_Textures: {};
  RWGltf_GltfRootElement_Images: {};
  RWGltf_GltfRootElement_ExtensionsUsed: {};
  RWGltf_GltfRootElement_ExtensionsRequired: {};
  RWGltf_GltfRootElement_NB: {};
}

export declare type RWObj_SubMeshReason = {
  RWObj_SubMeshReason_NewObject: {};
  RWObj_SubMeshReason_NewGroup: {};
  RWObj_SubMeshReason_NewMaterial: {};
  RWObj_SubMeshReason_NewSmoothGroup: {};
}

export declare type TKRWMeshLib = {
  RWMesh_CoordinateSystemConverter: typeof RWMesh_CoordinateSystemConverter;
  RWGltf_CafReader: typeof RWGltf_CafReader;
  RWGltf_CafWriter: typeof RWGltf_CafWriter;
  RWGltf_GltfPrimArrayData_1: typeof RWGltf_GltfPrimArrayData_1;
  RWGltf_GltfPrimArrayData_2: typeof RWGltf_GltfPrimArrayData_2;
  RWGltf_GltfLatePrimitiveArray: typeof RWGltf_GltfLatePrimitiveArray;
  RWGltf_GltfMaterialMap: typeof RWGltf_GltfMaterialMap;
  RWGltf_GltfOStreamWriter: typeof RWGltf_GltfOStreamWriter;
  RWGltf_GltfSceneNodeMap: typeof RWGltf_GltfSceneNodeMap;
  RWGltf_MaterialCommon: typeof RWGltf_MaterialCommon;
  RWGltf_MaterialMetallicRoughness: typeof RWGltf_MaterialMetallicRoughness;
  RWGltf_TriangulationReader: typeof RWGltf_TriangulationReader;
  RWMesh_FaceIterator: typeof RWMesh_FaceIterator;
  RWObj_TriangulationReader: typeof RWObj_TriangulationReader;
  RWObj_CafReader: typeof RWObj_CafReader;
  RWObj_MtlReader: typeof RWObj_MtlReader;
  RWMesh_NodeAttributeMap_1: typeof RWMesh_NodeAttributeMap_1;
  RWMesh_NodeAttributeMap_2: typeof RWMesh_NodeAttributeMap_2;
  RWMesh_NodeAttributeMap_3: typeof RWMesh_NodeAttributeMap_3;
  RWMesh_CoordinateSystem: typeof RWMesh_CoordinateSystem;
  RWMesh_CafReaderStatusEx: typeof RWMesh_CafReaderStatusEx;
  RWGltf_GltfBufferViewTarget: typeof RWGltf_GltfBufferViewTarget;
  RWGltf_GltfAccessorCompType: typeof RWGltf_GltfAccessorCompType;
  RWGltf_GltfAccessorLayout: typeof RWGltf_GltfAccessorLayout;
  RWGltf_WriterTrsfFormat: typeof RWGltf_WriterTrsfFormat;
  RWGltf_GltfAlphaMode: typeof RWGltf_GltfAlphaMode;
  RWGltf_GltfArrayType: typeof RWGltf_GltfArrayType;
  RWGltf_GltfPrimitiveMode: typeof RWGltf_GltfPrimitiveMode;
  RWGltf_GltfRootElement: typeof RWGltf_GltfRootElement;
  RWObj_SubMeshReason: typeof RWObj_SubMeshReason;
};
