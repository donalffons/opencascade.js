declare const libName = "./modules/TKOpenGl.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class OpenGl_Caps extends Standard_Transient {
  constructor()
  get_type_name(): Standard_Character;
  get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): any;
}

export declare class OpenGl_Resource extends Standard_Transient {
  Release(theGlCtx: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_LineAttributes extends OpenGl_Resource {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Release(theGlCtx: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  SetTypeOfHatch(theGlCtx: OpenGl_Context, theStyle: any): boolean;
}

export declare class OpenGl_TextureSet extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  TextureSetBits(): Standard_Integer;
  ChangeTextureSetBits(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  First(): any;
  ChangeFirst(): any;
  FirstUnit(): Graphic3d_TextureUnit;
  Last(): any;
  ChangeLast(): any;
  LastUnit(): Graphic3d_TextureUnit;
  ChangeLastUnit(): Graphic3d_TextureUnit;
  Value(theIndex: Standard_Integer): any;
  ChangeValue(theIndex: Standard_Integer): any;
  IsModulate(): boolean;
  HasNonPointSprite(): boolean;
  HasPointSprite(): boolean;
  InitZero(): void;
}

  export declare class OpenGl_TextureSet_1 extends OpenGl_TextureSet {
    constructor();
  }

  export declare class OpenGl_TextureSet_2 extends OpenGl_TextureSet {
    constructor(theNbTextures: Standard_Integer);
  }

  export declare class OpenGl_TextureSet_3 extends OpenGl_TextureSet {
    constructor(theTexture: any);
  }

export declare class OpenGl_Clipping {
  constructor()
  Init(): void;
  Reset(thePlanes: any): void;
  SetLocalPlanes(thePlanes: any): void;
  IsCappingOn(): Standard_Boolean;
  IsClippingOrCappingOn(): Standard_Boolean;
  NbClippingOrCappingOn(): Standard_Integer;
  HasClippingChains(): Standard_Boolean;
  HasDisabled(): Standard_Boolean;
  SetEnabled(thePlane: OpenGl_ClippingIterator, theIsEnabled: Standard_Boolean): Standard_Boolean;
  DisableGlobal(): void;
  RestoreDisabled(): void;
  CappedChain(): any;
  CappedSubPlane(): Standard_Integer;
  IsCappingFilterOn(): boolean;
  IsCappingDisableAllExcept(): boolean;
  IsCappingEnableAllExcept(): boolean;
  DisableAllExcept(theChain: any, theSubPlaneIndex: Standard_Integer): void;
  EnableAllExcept(theChain: any, theSubPlaneIndex: Standard_Integer): void;
  ResetCappingFilter(): void;
}

export declare class OpenGl_TextureFormat {
  constructor()
  FindFormat(theCtx: any, theFormat: Image_Format, theIsColorMap: boolean): OpenGl_TextureFormat;
  FindSizedFormat(theCtx: any, theSizedFormat: GLint): OpenGl_TextureFormat;
  FindCompressedFormat(theCtx: any, theFormat: Image_CompressedFormat, theIsColorMap: boolean): OpenGl_TextureFormat;
  IsValid(): boolean;
  InternalFormat(): GLint;
  SetInternalFormat(theInternal: GLint): void;
  PixelFormat(): GLenum;
  SetPixelFormat(theFormat: GLenum): void;
  DataType(): GLint;
  SetDataType(theType: GLint): void;
  NbComponents(): GLint;
  SetNbComponents(theNbComponents: GLint): void;
  IsSRGB(): boolean;
  Internal(): GLint;
  Format(): GLenum;
}

export declare class OpenGl_NamedResource extends OpenGl_Resource {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ResourceId(): TCollection_AsciiString;
}

export declare class OpenGl_Sampler extends OpenGl_Resource {
  constructor(theParams: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Release(theContext: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  Create(theContext: any): Standard_Boolean;
  Init(theContext: any, theTexture: OpenGl_Texture): Standard_Boolean;
  IsValid(): Standard_Boolean;
  Bind_1(theCtx: any): void;
  Unbind_1(theCtx: any): void;
  Bind_2(theCtx: any, theUnit: Graphic3d_TextureUnit): void;
  Unbind_2(theCtx: any, theUnit: Graphic3d_TextureUnit): void;
  SetParameter(theCtx: any, theTarget: GLenum, theParam: GLenum, theValue: GLint): void;
  SamplerID(): GLuint;
  IsImmutable(): boolean;
  SetImmutable(): void;
  Parameters(): any;
  SetParameters(theParams: any): void;
  ToUpdateParameters(): boolean;
}

export declare class OpenGl_Texture extends OpenGl_NamedResource {
  constructor(theResourceId: TCollection_AsciiString, theParams: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  PixelSizeOfPixelFormat(theInternalFormat: Standard_Integer): Standard_Size;
  IsValid(): boolean;
  GetTarget(): GLenum;
  SizeX(): GLsizei;
  SizeY(): GLsizei;
  TextureId(): GLuint;
  GetFormat(): GLenum;
  SizedFormat(): GLint;
  IsAlpha(): boolean;
  SetAlpha(theValue: boolean): void;
  IsTopDown(): boolean;
  SetTopDown(theIsTopDown: boolean): void;
  Create(theCtx: any): boolean;
  Release(theCtx: OpenGl_Context): void;
  Sampler(): any;
  SetSampler(theSampler: any): void;
  InitSamplerObject(theCtx: any): boolean;
  Bind_1(theCtx: any): void;
  Unbind_1(theCtx: any): void;
  Bind_2(theCtx: any, theTextureUnit: Graphic3d_TextureUnit): void;
  Unbind_2(theCtx: any, theTextureUnit: Graphic3d_TextureUnit): void;
  Revision(): Standard_Size;
  SetRevision(theRevision: Standard_Size): void;
  Init_1(theCtx: any, theImage: Image_PixMap, theType: Graphic3d_TypeOfTexture, theIsColorMap: Standard_Boolean): boolean;
  Init_2(theCtx: any, theFormat: OpenGl_TextureFormat, theSizeXY: Graphic3d_Vec2i, theType: Graphic3d_TypeOfTexture, theImage: Image_PixMap): boolean;
  Init_3(theCtx: any, theTextureMap: any): boolean;
  InitCompressed(theCtx: any, theImage: Image_CompressedPixMap, theIsColorMap: Standard_Boolean): boolean;
  Init2DMultisample(theCtx: any, theNbSamples: GLsizei, theTextFormat: GLint, theSizeX: GLsizei, theSizeY: GLsizei): boolean;
  InitRectangle(theCtx: any, theSizeX: Standard_Integer, theSizeY: Standard_Integer, theFormat: OpenGl_TextureFormat): boolean;
  Init3D_1(theCtx: any, theFormat: OpenGl_TextureFormat, theSizeXYZ: Graphic3d_Vec3i, thePixels: void): boolean;
  HasMipmaps(): Standard_Boolean;
  MaxMipmapLevel(): Standard_Integer;
  EstimatedDataSize(): Standard_Size;
  IsPointSprite(): boolean;
  GetDataFormat_1(theCtx: any, theFormat: Image_Format, theTextFormat: GLint, thePixelFormat: GLenum, theDataType: GLenum): boolean;
  GetDataFormat_2(theCtx: any, theData: Image_PixMap, theTextFormat: GLint, thePixelFormat: GLenum, theDataType: GLenum): boolean;
  Init_4(theCtx: any, theTextFormat: GLint, thePixelFormat: GLenum, theDataType: GLenum, theSizeX: GLsizei, theSizeY: GLsizei, theType: Graphic3d_TypeOfTexture, theImage: Image_PixMap): boolean;
  Init_5(theCtx: any, theImage: Image_PixMap, theType: Graphic3d_TypeOfTexture): boolean;
  Init3D_2(theCtx: any, theTextFormat: GLint, thePixelFormat: GLenum, theDataType: GLenum, theSizeX: Standard_Integer, theSizeY: Standard_Integer, theSizeZ: Standard_Integer, thePixels: void): boolean;
  InitCubeMap(theCtx: any, theCubeMap: any, theSize: Standard_Size, theFormat: Image_Format, theToGenMipmap: Standard_Boolean, theIsColorMap: Standard_Boolean): boolean;
}

export declare class OpenGl_FrameBuffer extends OpenGl_Resource {
  constructor()
  BufferDump(theGlCtx: any, theFbo: any, theImage: Image_PixMap, theBufferType: Graphic3d_BufferType): Standard_Boolean;
  Release(theGlCtx: OpenGl_Context): void;
  NbSamples(): GLsizei;
  NbColorBuffers(): GLsizei;
  HasColor(): boolean;
  HasDepth(): boolean;
  GetSizeX(): GLsizei;
  GetSizeY(): GLsizei;
  GetVPSizeX(): GLsizei;
  GetVPSizeY(): GLsizei;
  GetInitVPSizeX(): GLsizei;
  GetInitVPSizeY(): GLsizei;
  IsValid(): Standard_Boolean;
  Init_1(theGlCtx: any, theSizeX: GLsizei, theSizeY: GLsizei, theColorFormats: OpenGl_ColorFormats, theDepthStencilTexture: any, theNbSamples: GLsizei): Standard_Boolean;
  Init_2(theGlCtx: any, theSizeX: GLsizei, theSizeY: GLsizei, theColorFormat: GLint, theDepthFormat: GLint, theNbSamples: GLsizei): Standard_Boolean;
  Init_3(theGlCtx: any, theSizeX: GLsizei, theSizeY: GLsizei, theColorFormats: OpenGl_ColorFormats, theDepthFormat: GLint, theNbSamples: GLsizei): Standard_Boolean;
  InitLazy_1(theGlCtx: any, theViewportSizeX: GLsizei, theViewportSizeY: GLsizei, theColorFormat: GLint, theDepthFormat: GLint, theNbSamples: GLsizei): Standard_Boolean;
  InitLazy_2(theGlCtx: any, theViewportSizeX: GLsizei, theViewportSizeY: GLsizei, theColorFormats: OpenGl_ColorFormats, theDepthFormat: GLint, theNbSamples: GLsizei): Standard_Boolean;
  InitLazy_3(theGlCtx: any, theFbo: OpenGl_FrameBuffer): Standard_Boolean;
  InitWithRB(theGlCtx: any, theSizeX: GLsizei, theSizeY: GLsizei, theColorFormat: GLint, theDepthFormat: GLint, theColorRBufferFromWindow: GLuint): Standard_Boolean;
  InitWrapper(theGlCtx: any): Standard_Boolean;
  SetupViewport(theGlCtx: any): void;
  ChangeViewport(theVPSizeX: GLsizei, theVPSizeY: GLsizei): void;
  BindBuffer(theGlCtx: any): void;
  BindDrawBuffer(theGlCtx: any): void;
  BindReadBuffer(theGlCtx: any): void;
  UnbindBuffer(theGlCtx: any): void;
  ColorTexture(theColorBufferIndex: GLint): any;
  DepthStencilTexture(): any;
  ColorRenderBuffer(): GLuint;
  DepthStencilRenderBuffer(): GLuint;
  EstimatedDataSize(): Standard_Size;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_StateCounter {
  constructor()
  Increment(): Standard_Size;
}

export declare class OpenGl_GraphicDriver extends Graphic3d_GraphicDriver {
  constructor(theDisp: any, theToInitialize: Standard_Boolean)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ReleaseContext(): void;
  InitContext(): Standard_Boolean;
  InitEglContext(theEglDisplay: Aspect_Display, theEglContext: Aspect_RenderingContext, theEglConfig: void): Standard_Boolean;
  InquireLimit(theType: Graphic3d_TypeOfLimit): Standard_Integer;
  CreateStructure(theManager: any): any;
  RemoveStructure(theCStructure: any): void;
  CreateView(theMgr: any): any;
  RemoveView(theView: any): void;
  CreateRenderWindow(theWindow: any, theContext: Aspect_RenderingContext): any;
  TextSize(theView: any, theText: Standard_CString, theHeight: Standard_ShortReal, theWidth: Standard_ShortReal, theAscent: Standard_ShortReal, theDescent: Standard_ShortReal): void;
  DefaultTextHeight(): Standard_ShortReal;
  ViewExists(theWindow: any, theView: any): Standard_Boolean;
  InsertLayerBefore(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerAfter: Graphic3d_ZLayerId): void;
  InsertLayerAfter(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerBefore: Graphic3d_ZLayerId): void;
  RemoveZLayer(theLayerId: Graphic3d_ZLayerId): void;
  SetZLayerSettings(theLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings): void;
  Options(): OpenGl_Caps;
  ChangeOptions(): OpenGl_Caps;
  SetBuffersNoSwap(theIsNoSwap: Standard_Boolean): void;
  EnableVBO(theToTurnOn: Standard_Boolean): void;
  MemoryInfo(theFreeBytes: Standard_Size, theInfo: TCollection_AsciiString): Standard_Boolean;
  GetSharedContext(theBound: boolean): any;
  getRawGlDisplay(): Aspect_Display;
  getRawGlContext(): Aspect_RenderingContext;
  getRawGlConfig(): void;
  setDeviceLost(): void;
  GetStateCounter(): OpenGl_StateCounter;
  GetNextPrimitiveArrayUID(): Standard_Size;
}

export declare class OpenGl_Element {
  Render(theWorkspace: any): void;
  Release(theContext: OpenGl_Context): void;
  IsFillDrawMode(): Standard_Boolean;
  EstimatedDataSize(): Standard_Size;
  UpdateMemStats(theStats: Graphic3d_FrameStatsDataTmp): void;
  UpdateDrawStats(theStats: Graphic3d_FrameStatsDataTmp, theIsDetailed: boolean): void;
  SynchronizeAspects(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class OpenGl_AspectsProgram {
  constructor()
  ShaderProgram(theCtx: any, theShader: any): any;
  UpdateRediness(theAspect: any): void;
  Release(theCtx: OpenGl_Context): void;
}

export declare class OpenGl_AspectsTextureSet {
  constructor()
  IsReady(): boolean;
  Invalidate(): void;
  TextureSet(theCtx: any, theAspect: any, theSprite: any, theSpriteA: any, theToHighlight: boolean): any;
  UpdateRediness(theAspect: any): void;
  Release(theCtx: OpenGl_Context): void;
}

export declare class OpenGl_AspectsSprite {
  constructor()
  MarkerSize(): Standard_ShortReal;
  IsReady(): boolean;
  Invalidate(): void;
  HasPointSprite(theCtx: any, theAspects: any): boolean;
  IsDisplayListSprite(theCtx: any, theAspects: any): boolean;
  Sprite(theCtx: any, theAspects: any, theIsAlphaSprite: boolean): any;
  UpdateRediness(theAspect: any): void;
  Release(theCtx: OpenGl_Context): void;
}

export declare class OpenGl_Aspects extends OpenGl_Element {
  Aspect(): any;
  SetAspect(theAspect: any): void;
  ShadingModel(): Graphic3d_TypeOfShadingModel;
  SetNoLighting(): void;
  TextureSet(theCtx: any, theToHighlight: boolean): any;
  ShaderProgramRes(theCtx: any): any;
  MarkerSize(): Standard_ShortReal;
  HasPointSprite(theCtx: any): boolean;
  IsDisplayListSprite(theCtx: any): boolean;
  SpriteRes(theCtx: any, theIsAlphaSprite: boolean): any;
  Render(theWorkspace: any): void;
  Release(theContext: OpenGl_Context): void;
  SynchronizeAspects(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class OpenGl_Aspects_1 extends OpenGl_Aspects {
    constructor();
  }

  export declare class OpenGl_Aspects_2 extends OpenGl_Aspects {
    constructor(theAspect: any);
  }

export declare class OpenGl_ShaderObject extends OpenGl_Resource {
  constructor(theType: GLenum)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  CreateFromSource(theSource: TCollection_AsciiString, theType: Graphic3d_TypeOfShaderObject, theUniforms: any, theStageInOuts: any, theInName: TCollection_AsciiString, theOutName: TCollection_AsciiString, theNbGeomInputVerts: Standard_Integer): any;
  LoadSource(theCtx: any, theSource: TCollection_AsciiString): Standard_Boolean;
  Compile(theCtx: any): Standard_Boolean;
  LoadAndCompile(theCtx: any, theId: TCollection_AsciiString, theSource: TCollection_AsciiString, theIsVerbose: boolean, theToPrintSource: boolean): Standard_Boolean;
  DumpSourceCode(theCtx: any, theId: TCollection_AsciiString, theSource: TCollection_AsciiString): void;
  FetchInfoLog(theCtx: any, theLog: TCollection_AsciiString): Standard_Boolean;
  Create(theCtx: any): Standard_Boolean;
  Release(theCtx: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  Type(): GLenum;
  updateDebugDump(theCtx: any, theId: TCollection_AsciiString, theFolder: TCollection_AsciiString, theToBeautify: Standard_Boolean, theToReset: Standard_Boolean): Standard_Boolean;
}

export declare class OpenGl_VariableSetterSelector {
  constructor()
  Set(theCtx: any, theVariable: any, theProgram: OpenGl_ShaderProgram): void;
}

export declare class OpenGl_ShaderUniformLocation {
  IsValid(): boolean;
}

  export declare class OpenGl_ShaderUniformLocation_1 extends OpenGl_ShaderUniformLocation {
    constructor();
  }

  export declare class OpenGl_ShaderUniformLocation_2 extends OpenGl_ShaderUniformLocation {
    constructor(theLocation: GLint);
  }

export declare class OpenGl_VertexBuffer extends OpenGl_Resource {
  constructor()
  GetTarget(): GLenum;
  IsVirtual(): boolean;
  IsValid(): boolean;
  GetComponentsNb(): GLuint;
  GetElemsNb(): GLsizei;
  SetElemsNb(theNbElems: GLsizei): void;
  GetDataType(): GLenum;
  GetDataOffset(): GLubyte;
  Create(theGlCtx: any): boolean;
  Release(theGlCtx: OpenGl_Context): void;
  Bind(theGlCtx: any): void;
  Unbind(theGlCtx: any): void;
  Init_1(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLfloat): boolean;
  Init_2(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLuint): boolean;
  Init_3(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLushort): boolean;
  Init_4(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLubyte): boolean;
  SubData_1(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLfloat): boolean;
  GetSubData_1(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLfloat): boolean;
  SubData_2(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLuint): boolean;
  GetSubData_2(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLuint): boolean;
  SubData_3(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLushort): boolean;
  GetSubData_3(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLushort): boolean;
  SubData_4(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLubyte): boolean;
  GetSubData_4(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: GLubyte): boolean;
  BindVertexAttrib(theGlCtx: any, theAttribLoc: GLuint): void;
  UnbindVertexAttrib(theGlCtx: any, theAttribLoc: GLuint): void;
  BindAttribute(theCtx: any, theMode: Graphic3d_TypeOfAttribute): void;
  UnbindAttribute(theCtx: any, theMode: Graphic3d_TypeOfAttribute): void;
  EstimatedDataSize(): Standard_Size;
  sizeOfGlType(theType: GLenum): size_t;
  init_1(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: void, theDataType: GLenum, theStride: GLsizei): boolean;
  init_2(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: void, theDataType: GLenum): boolean;
  subData(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: void, theDataType: GLenum): boolean;
  getSubData(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: void, theDataType: GLenum): boolean;
  bindAttribute(theGlCtx: any, theMode: Graphic3d_TypeOfAttribute, theNbComp: GLint, theDataType: GLenum, theStride: GLsizei, theOffset: GLvoid): void;
  unbindAttribute(theGlCtx: any, theMode: Graphic3d_TypeOfAttribute): void;
  HasColorAttribute(): boolean;
  HasNormalAttribute(): boolean;
  BindAllAttributes(theGlCtx: any): void;
  BindPositionAttribute(theGlCtx: any): void;
  UnbindAllAttributes(theGlCtx: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_IndexBuffer extends OpenGl_VertexBuffer {
  constructor()
  GetTarget(): GLenum;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_PrimitiveArray extends OpenGl_Element {
  Render(theWorkspace: any): void;
  Release(theContext: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  UpdateDrawStats(theStats: Graphic3d_FrameStatsDataTmp, theIsDetailed: boolean): void;
  IsInitialized(): Standard_Boolean;
  Invalidate(): void;
  DrawMode(): GLint;
  IsFillDrawMode(): Standard_Boolean;
  Indices(): any;
  Attributes(): any;
  Bounds(): any;
  GetUID(): Standard_Size;
  InitBuffers(theContext: any, theType: Graphic3d_TypeOfPrimitiveArray, theIndices: any, theAttribs: any, theBounds: any): void;
  IndexVbo(): any;
  AttributesVbo(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class OpenGl_PrimitiveArray_1 extends OpenGl_PrimitiveArray {
    constructor(theDriver: OpenGl_GraphicDriver);
  }

  export declare class OpenGl_PrimitiveArray_2 extends OpenGl_PrimitiveArray {
    constructor(theDriver: OpenGl_GraphicDriver, theType: Graphic3d_TypeOfPrimitiveArray, theIndices: any, theAttribs: any, theBounds: any);
  }

export declare class OpenGl_Group extends Graphic3d_Group {
  constructor(theStruct: any)
  Clear(theToUpdateStructureMgr: Standard_Boolean): void;
  Aspects(): any;
  SetGroupPrimitivesAspect(theAspect: any): void;
  SetPrimitivesAspect(theAspect: any): void;
  SynchronizeAspects(): void;
  ReplaceAspects(theMap: Graphic3d_MapOfAspectsToAspects): void;
  AddPrimitiveArray(theType: Graphic3d_TypeOfPrimitiveArray, theIndices: any, theAttribs: any, theBounds: any, theToEvalMinMax: Standard_Boolean): void;
  AddText(theTextParams: any, theToEvalMinMax: Standard_Boolean): void;
  SetFlippingOptions(theIsEnabled: Standard_Boolean, theRefPlane: gp_Ax2): void;
  SetStencilTestOptions(theIsEnabled: Standard_Boolean): void;
  GlStruct(): OpenGl_Structure;
  AddElement(theElem: OpenGl_Element): void;
  Render(theWorkspace: any): void;
  Release(theGlCtx: any): void;
  FirstNode(): OpenGl_ElementNode;
  GlAspects(): OpenGl_Aspects;
  IsRaytracable(): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_CappingAlgo {
  constructor();
  RenderCapping(theWorkspace: any, theStructure: OpenGl_Structure): void;
}

export declare class OpenGl_TextureBufferArb extends OpenGl_VertexBuffer {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetTarget(): GLenum;
  IsValid(): boolean;
  Release(theGlCtx: OpenGl_Context): void;
  Create(theGlCtx: any): boolean;
  Init_1(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLfloat): boolean;
  Init_2(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLuint): boolean;
  Init_3(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLushort): boolean;
  Init_4(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: GLubyte): boolean;
  BindTexture(theGlCtx: any, theTextureUnit: Graphic3d_TextureUnit): void;
  UnbindTexture(theGlCtx: any, theTextureUnit: Graphic3d_TextureUnit): void;
  TextureId(): GLuint;
  TextureFormat(): GLenum;
}

export declare class OpenGl_Window extends Standard_Transient {
  constructor(theDriver: any, thePlatformWindow: any, theGContext: Aspect_RenderingContext, theCaps: any, theShareCtx: any)
  Resize(): void;
  PlatformWindow(): any;
  Width(): Standard_Integer;
  Height(): Standard_Integer;
  GetGlContext(): any;
  Init(): void;
  Activate(): Standard_Boolean;
  SetSwapInterval(theToForceNoSync: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_Workspace extends Standard_Transient {
  constructor(theView: OpenGl_View, theWindow: any)
  Activate(): Standard_Boolean;
  View(): OpenGl_View;
  GetGlContext(): any;
  FBOCreate(theWidth: Standard_Integer, theHeight: Standard_Integer): any;
  FBORelease(theFbo: any): void;
  BufferDump(theFbo: any, theImage: Image_PixMap, theBufferType: Graphic3d_BufferType): Standard_Boolean;
  Width(): Standard_Integer;
  Height(): Standard_Integer;
  SetUseZBuffer(theToUse: Standard_Boolean): Standard_Boolean;
  UseZBuffer(): Standard_Boolean;
  UseDepthWrite(): Standard_Boolean;
  SetDefaultPolygonOffset(theOffset: Graphic3d_PolygonOffset): Graphic3d_PolygonOffset;
  ToAllowFaceCulling(): boolean;
  SetAllowFaceCulling(theToAllow: boolean): boolean;
  ToHighlight(): boolean;
  HighlightStyle(): any;
  SetHighlightStyle(theStyle: any): void;
  EdgeColor(): OpenGl_Vec4;
  InteriorColor(): OpenGl_Vec4;
  TextColor(): OpenGl_Vec4;
  TextSubtitleColor(): OpenGl_Vec4;
  Aspects(): OpenGl_Aspects;
  SetAspects(theAspect: OpenGl_Aspects): OpenGl_Aspects;
  TextureSet(): any;
  ApplyAspects(theToBindTextures: boolean): OpenGl_Aspects;
  ResetAppliedAspect(): void;
  RenderFilter(): Standard_Integer;
  SetRenderFilter(theFilter: Standard_Integer): void;
  ShouldRender(theElement: OpenGl_Element): boolean;
  NbSkippedTransparentElements(): Standard_Integer;
  ResetSkippedCounter(): void;
  ViewMatrix(): OpenGl_Matrix;
  ModelMatrix(): OpenGl_Matrix;
  NoneCulling(): OpenGl_Aspects;
  FrontCulling(): OpenGl_Aspects;
  SetEnvironmentTexture(theTexture: any): void;
  EnvironmentTexture(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_BackgroundArray extends OpenGl_PrimitiveArray {
  constructor(theType: Graphic3d_TypeOfBackground)
  Render_1(theWorkspace: any, theProjection: any): void;
  IsDefined(): boolean;
  SetTextureParameters(theFillMethod: Aspect_FillMethod): void;
  SetTextureFillMethod(theFillMethod: Aspect_FillMethod): void;
  TextureFillMethod(): Aspect_FillMethod;
  GradientFillMethod(): Aspect_GradientFillMethod;
  GradientColor(theIndex: Standard_Integer): OpenGl_Vec4;
  SetGradientFillMethod(theType: Aspect_GradientFillMethod): void;
  SetGradientParameters(theColor1: Quantity_Color, theColor2: Quantity_Color, theType: Aspect_GradientFillMethod): void;
}

export declare class OpenGl_CappingPlaneResource extends OpenGl_Resource {
  constructor(thePlane: any)
  Update(theContext: any, theObjAspect: any): void;
  Release(theContext: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  Plane(): any;
  AspectFace(): OpenGl_Aspects;
  Orientation(): OpenGl_Matrix;
  Primitives(): OpenGl_PrimitiveArray;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_ClippingIterator {
  constructor(theClipping: OpenGl_Clipping)
  More(): boolean;
  Next(): void;
  IsDisabled(): boolean;
  Value(): any;
  IsGlobal(): boolean;
  PlaneIndex(): Standard_Integer;
}

export declare class OpenGl_Flipper extends OpenGl_Element {
  constructor(theReferenceSystem: gp_Ax2)
  SetOptions(theIsEnabled: Standard_Boolean): void;
  Render(theWorkspace: any): void;
  Release(theCtx: OpenGl_Context): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class OpenGl_Font extends OpenGl_Resource {
  constructor(theFont: any, theKey: TCollection_AsciiString)
  Release(theCtx: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  ResourceKey(): TCollection_AsciiString;
  FTFont(): any;
  IsValid(): boolean;
  WasInitialized(): boolean;
  Init(theCtx: any): boolean;
  Ascender(): number;
  Descender(): number;
  RenderGlyph(theCtx: any, theUChar: Standard_Utf32Char, theGlyph: any): boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_FrameStats extends Graphic3d_FrameStats {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsFrameUpdated(thePrev: any): boolean;
}

export declare class OpenGl_TextBuilder {
  constructor()
  Perform(theFormatter: any, theContext: any, theFont: OpenGl_Font, theTextures: NCollection_Vector<GLuint>, theVertsPerTexture: any, theTCrdsPerTexture: any): void;
}

export declare class OpenGl_Text extends OpenGl_Element {
  Reset(theCtx: any): void;
  Text(): any;
  SetText(theText: any): void;
  Is2D(): Standard_Boolean;
  Set2D(theEnable: Standard_Boolean): void;
  SetFontSize(theContext: any, theFontSize: Standard_Integer): void;
  Render_1(theWorkspace: any): void;
  Release(theContext: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  UpdateDrawStats(theStats: Graphic3d_FrameStatsDataTmp, theIsDetailed: boolean): void;
  FontKey(theAspect: OpenGl_Aspects, theHeight: Standard_Integer, theResolution: number): TCollection_AsciiString;
  FindFont(theCtx: any, theAspect: OpenGl_Aspects, theHeight: Standard_Integer, theResolution: number, theKey: TCollection_AsciiString): any;
  StringSize(theCtx: any, theText: NCollection_String, theTextAspect: OpenGl_Aspects, theHeight: Standard_ShortReal, theResolution: number, theWidth: Standard_ShortReal, theAscent: Standard_ShortReal, theDescent: Standard_ShortReal): void;
  Render_2(theCtx: any, theTextAspect: OpenGl_Aspects, theResolution: number): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  Init(theCtx: any, theText: Standard_Utf8Char, thePoint: OpenGl_Vec3): void;
  SetPosition(thePoint: OpenGl_Vec3): void;
}

  export declare class OpenGl_Text_1 extends OpenGl_Text {
    constructor(theTextParams: any);
  }

  export declare class OpenGl_Text_2 extends OpenGl_Text {
    constructor();
  }

export declare class OpenGl_FrameStatsPrs extends OpenGl_Element {
  constructor()
  Render(theWorkspace: any): void;
  Release(theCtx: OpenGl_Context): void;
  Update(theWorkspace: any): void;
  SetTextAspect(theAspect: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class OpenGl_GraduatedTrihedron extends OpenGl_Element {
  constructor()
  Render(theWorkspace: any): void;
  Release(theCtx: OpenGl_Context): void;
  SetValues(theData: Graphic3d_GraduatedTrihedron): void;
  SetMinMax(theMin: OpenGl_Vec3, theMax: OpenGl_Vec3): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class OpenGl_LayerList {
  constructor(theNbPriorities: Standard_Integer)
  NbPriorities(): Standard_Integer;
  NbStructures(): Standard_Integer;
  NbImmediateStructures(): Standard_Integer;
  InsertLayerBefore(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerAfter: Graphic3d_ZLayerId): void;
  InsertLayerAfter(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerBefore: Graphic3d_ZLayerId): void;
  RemoveLayer(theLayerId: Graphic3d_ZLayerId): void;
  AddStructure(theStruct: OpenGl_Structure, theLayerId: Graphic3d_ZLayerId, thePriority: Standard_Integer, isForChangePriority: Standard_Boolean): void;
  RemoveStructure(theStructure: OpenGl_Structure): void;
  ChangeLayer(theStructure: OpenGl_Structure, theOldLayerId: Graphic3d_ZLayerId, theNewLayerId: Graphic3d_ZLayerId): void;
  ChangePriority(theStructure: OpenGl_Structure, theLayerId: Graphic3d_ZLayerId, theNewPriority: Standard_Integer): void;
  Layer_1(theLayerId: Graphic3d_ZLayerId): OpenGl_Layer;
  Layer_2(theLayerId: Graphic3d_ZLayerId): OpenGl_Layer;
  SetLayerSettings(theLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings): void;
  UpdateCulling(theWorkspace: any, theToDrawImmediate: Standard_Boolean): void;
  Render(theWorkspace: any, theToDrawImmediate: Standard_Boolean, theLayersToProcess: OpenGl_LayerFilter, theReadDrawFbo: OpenGl_FrameBuffer, theOitAccumFbo: OpenGl_FrameBuffer): void;
  Layers(): any;
  LayerIDs(): any;
  InvalidateBVHData(theLayerId: Graphic3d_ZLayerId): void;
  ModificationStateOfRaytracable(): Standard_Size;
  FrustumCullingBVHBuilder(): any;
  SetFrustumCullingBVHBuilder(theBuilder: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class OpenGl_StateInterface {
  constructor()
  Index(): Standard_Size;
  Update(): void;
}

export declare class OpenGl_ProjectionState extends OpenGl_StateInterface {
  constructor()
  Set(theProjectionMatrix: OpenGl_Mat4): void;
  ProjectionMatrix(): OpenGl_Mat4;
  ProjectionMatrixInverse(): OpenGl_Mat4;
}

export declare class OpenGl_ModelWorldState extends OpenGl_StateInterface {
  constructor()
  Set(theModelWorldMatrix: OpenGl_Mat4): void;
  ModelWorldMatrix(): OpenGl_Mat4;
  ModelWorldMatrixInverse(): OpenGl_Mat4;
}

export declare class OpenGl_WorldViewState extends OpenGl_StateInterface {
  constructor()
  Set(theWorldViewMatrix: OpenGl_Mat4): void;
  WorldViewMatrix(): OpenGl_Mat4;
  WorldViewMatrixInverse(): OpenGl_Mat4;
}

export declare class OpenGl_LightSourceState extends OpenGl_StateInterface {
  constructor()
  Set(theLightSources: any): void;
  LightSources(): any;
  SpecIBLMapLevels(): Standard_Integer;
  SetSpecIBLMapLevels(theSpecIBLMapLevels: Standard_Integer): void;
}

export declare class OpenGl_ClippingState {
  constructor()
  Index(): Standard_Size;
  Update(): void;
  Revert(): void;
}

export declare class OpenGl_OitState extends OpenGl_StateInterface {
  constructor()
  Set(theToEnableWrite: boolean, theDepthFactor: number): void;
  ToEnableWrite(): boolean;
  DepthFactor(): number;
}

export declare class OpenGl_MaterialState extends OpenGl_StateInterface {
  constructor()
  Set(theFrontMat: OpenGl_Material, theBackMat: OpenGl_Material, theAlphaCutoff: number, theToDistinguish: boolean, theToMapTexture: boolean): void;
  FrontMaterial(): OpenGl_Material;
  BackMaterial(): OpenGl_Material;
  AlphaCutoff(): number;
  HasAlphaCutoff(): boolean;
  ToDistinguish(): boolean;
  ToMapTexture(): boolean;
}

export declare class OpenGl_PBREnvironment extends OpenGl_NamedResource {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Create(theCtx: any, thePow2Size: number, theSpecMapLevelsNum: number, theId: TCollection_AsciiString): any;
  Bind(theCtx: any): void;
  Unbind(theCtx: any): void;
  Clear(theCtx: any, theColor: Graphic3d_Vec3): void;
  Bake(theCtx: any, theEnvMap: any, theZIsInverted: Standard_Boolean, theIsTopDown: Standard_Boolean, theDiffMapNbSamples: Standard_Size, theSpecMapNbSamples: Standard_Size, theProbability: Standard_ShortReal): void;
  SpecMapLevelsNumber(): number;
  Pow2Size(): number;
  SizesAreDifferent(thePow2Size: number, theSpecMapLevelsNumber: number): boolean;
  IsNeededToBeBound(): boolean;
  Release(theCtx: OpenGl_Context): void;
  EstimatedDataSize(): Standard_Size;
  IsComplete(): Standard_Boolean;
}

export declare class OpenGl_PointSprite extends OpenGl_Texture {
  constructor(theResourceId: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Release(theCtx: OpenGl_Context): void;
  IsPointSprite(): boolean;
  IsDisplayList(): Standard_Boolean;
  DrawBitmap(theCtx: any): void;
  SetDisplayList(theCtx: any, theBitmapList: GLuint): void;
}

export declare class OpenGl_TriangleSet extends OpenGl_BVHTriangulation3f {
  constructor(theArrayID: Standard_Size, theBuilder: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  AssociatedPArrayID(): Standard_Size;
  MaterialIndex(): Standard_Integer;
  SetMaterialIndex(theMatID: Standard_Integer): void;
  Box_1(): any;
  Center(theIndex: Standard_Integer, theAxis: Standard_Integer): Standard_ShortReal;
  QuadBVH(): QuadBvhHandle;
}

export declare class OpenGl_RaytraceGeometry {
  constructor()
  ClearMaterials(): void;
  Clear(): void;
  ProcessAcceleration(): Standard_Boolean;
  AccelerationOffset(theNodeIdx: Standard_Integer): Standard_Integer;
  VerticesOffset(theNodeIdx: Standard_Integer): Standard_Integer;
  ElementsOffset(theNodeIdx: Standard_Integer): Standard_Integer;
  TriangleSet(theNodeIdx: Standard_Integer): OpenGl_TriangleSet;
  QuadBVH(): QuadBvhHandle;
  HasTextures(): Standard_Boolean;
  AddTexture(theTexture: any): Standard_Integer;
  UpdateTextureHandles(theContext: any): Standard_Boolean;
  AcquireTextures(theContext: any): Standard_Boolean;
  ReleaseTextures(theContext: any): Standard_Boolean;
  TextureHandles(): any;
  ReleaseResources(a0: any): void;
  TopLevelTreeDepth(): Standard_Integer;
  BotLevelTreeDepth(): Standard_Integer;
}

export declare class OpenGl_SetOfPrograms extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ChangeValue(theProgramBits: Standard_Integer): any;
}

export declare class OpenGl_SetOfShaderPrograms extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ChangeValue(theShadingModel: Graphic3d_TypeOfShadingModel, theProgramBits: Standard_Integer): any;
}

  export declare class OpenGl_SetOfShaderPrograms_1 extends OpenGl_SetOfShaderPrograms {
    constructor();
  }

  export declare class OpenGl_SetOfShaderPrograms_2 extends OpenGl_SetOfShaderPrograms {
    constructor(thePrograms: any);
  }

export declare class OpenGl_ShaderManager extends Standard_Transient {
  constructor(theContext: OpenGl_Context)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  clear(): void;
  UpdateSRgbState(): void;
  LocalOrigin(): gp_XYZ;
  SetLocalOrigin(theOrigin: gp_XYZ): void;
  LocalClippingPlaneW(thePlane: Graphic3d_ClipPlane): Standard_Real;
  Create(theProxy: any, theShareKey: TCollection_AsciiString, theProgram: any): Standard_Boolean;
  Unregister(theShareKey: TCollection_AsciiString, theProgram: any): void;
  ShaderPrograms(): OpenGl_ShaderProgramList;
  IsEmpty(): Standard_Boolean;
  BindFaceProgram_1(theTextures: any, theShadingModel: Graphic3d_TypeOfShadingModel, theAlphaMode: Graphic3d_AlphaMode, theHasVertColor: Standard_Boolean, theEnableEnvMap: Standard_Boolean, theCustomProgram: any): Standard_Boolean;
  BindFaceProgram_2(theTextures: any, theShadingModel: Graphic3d_TypeOfShadingModel, theAlphaMode: Graphic3d_AlphaMode, theInteriorStyle: Aspect_InteriorStyle, theHasVertColor: Standard_Boolean, theEnableEnvMap: Standard_Boolean, theEnableMeshEdges: Standard_Boolean, theCustomProgram: any): Standard_Boolean;
  BindLineProgram(theTextures: any, theLineType: Aspect_TypeOfLine, theShadingModel: Graphic3d_TypeOfShadingModel, theAlphaMode: Graphic3d_AlphaMode, theHasVertColor: Standard_Boolean, theCustomProgram: any): Standard_Boolean;
  BindMarkerProgram(theTextures: any, theShadingModel: Graphic3d_TypeOfShadingModel, theAlphaMode: Graphic3d_AlphaMode, theHasVertColor: Standard_Boolean, theCustomProgram: any): Standard_Boolean;
  BindFontProgram(theCustomProgram: any): Standard_Boolean;
  BindOutlineProgram(): Standard_Boolean;
  BindFboBlitProgram(theNbSamples: Standard_Integer, theIsFallback_sRGB: Standard_Boolean): Standard_Boolean;
  BindOitCompositingProgram(theIsMSAAEnabled: Standard_Boolean): Standard_Boolean;
  BindStereoProgram(theStereoMode: Graphic3d_StereoMode): Standard_Boolean;
  BindBoundBoxProgram(): Standard_Boolean;
  BoundBoxVertBuffer(): any;
  BindPBREnvBakingProgram(): Standard_Boolean;
  GetBgCubeMapProgram(): any;
  PBRShadingModelFallback(theShadingModel: Graphic3d_TypeOfShadingModel, theIsPbrAllowed: Standard_Boolean): Graphic3d_TypeOfShadingModel;
  LightSourceState(): OpenGl_LightSourceState;
  UpdateLightSourceStateTo(theLights: any, theSpecIBLMapLevels: Standard_Integer): void;
  UpdateLightSourceState(): void;
  PushLightSourceState(theProgram: any): void;
  pushLightSourceState(theProgram: any): void;
  ProjectionState(): OpenGl_ProjectionState;
  UpdateProjectionStateTo(theProjectionMatrix: OpenGl_Mat4): void;
  PushProjectionState(theProgram: any): void;
  pushProjectionState(theProgram: any): void;
  ModelWorldState(): OpenGl_ModelWorldState;
  UpdateModelWorldStateTo(theModelWorldMatrix: OpenGl_Mat4): void;
  PushModelWorldState(theProgram: any): void;
  pushModelWorldState(theProgram: any): void;
  WorldViewState(): OpenGl_WorldViewState;
  UpdateWorldViewStateTo(theWorldViewMatrix: OpenGl_Mat4): void;
  PushWorldViewState(theProgram: any): void;
  pushWorldViewState(theProgram: any): void;
  UpdateClippingState(): void;
  RevertClippingState(): void;
  PushClippingState(theProgram: any): void;
  pushClippingState(theProgram: any): void;
  MaterialState(): OpenGl_MaterialState;
  UpdateMaterialStateTo(theFrontMat: OpenGl_Material, theBackMat: OpenGl_Material, theAlphaCutoff: number, theToDistinguish: boolean, theToMapTexture: boolean): void;
  UpdateMaterialState(): void;
  PushMaterialState(theProgram: any): void;
  pushMaterialState(theProgram: any): void;
  PushInteriorState(theProgram: any, theAspect: any): void;
  OitState(): OpenGl_OitState;
  SetOitState(theToEnableOitWrite: boolean, theDepthFactor: number): void;
  PushOitState(theProgram: any): void;
  pushOitState(theProgram: any): void;
  PushState(theProgram: any, theShadingModel: Graphic3d_TypeOfShadingModel): void;
  SetContext(theCtx: OpenGl_Context): void;
  IsSameContext(theCtx: OpenGl_Context): boolean;
  ChooseFaceShadingModel(theCustomModel: Graphic3d_TypeOfShadingModel, theHasNodalNormals: boolean): Graphic3d_TypeOfShadingModel;
  ChooseLineShadingModel(theCustomModel: Graphic3d_TypeOfShadingModel, theHasNodalNormals: boolean): Graphic3d_TypeOfShadingModel;
  ChooseMarkerShadingModel(theCustomModel: Graphic3d_TypeOfShadingModel, theHasNodalNormals: boolean): Graphic3d_TypeOfShadingModel;
  ShadingModel(): Graphic3d_TypeOfShadingModel;
  SetShadingModel(theModel: Graphic3d_TypeOfShadingModel): void;
  SetLastView(theLastView: OpenGl_View): void;
  IsSameView(theView: OpenGl_View): boolean;
}

export declare class OpenGl_StencilTest extends OpenGl_Element {
  constructor()
  Render(theWorkspace: any): void;
  Release(theContext: OpenGl_Context): void;
  SetOptions(theIsEnabled: Standard_Boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class OpenGl_Structure extends Graphic3d_CStructure {
  constructor(theManager: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  OnVisibilityChanged(): void;
  Clear_1(): void;
  Connect(theStructure: Graphic3d_CStructure): void;
  Disconnect(theStructure: Graphic3d_CStructure): void;
  SetTransformation(theTrsf: any): void;
  SetTransformPersistence(theTrsfPers: any): void;
  SetZLayer(theLayerIndex: Graphic3d_ZLayerId): void;
  GraphicHighlight(theStyle: any): void;
  GraphicUnhighlight(): void;
  ShadowLink(theManager: any): any;
  NewGroup(theStruct: any): any;
  RemoveGroup(theGroup: any): void;
  GlDriver(): OpenGl_GraphicDriver;
  Clear_2(theGlCtx: any): void;
  Render(theWorkspace: any): void;
  Release(theGlCtx: any): void;
  ReleaseGlResources(theGlCtx: any): void;
  InstancedStructure(): OpenGl_Structure;
  ModificationState(): Standard_Size;
  ResetModificationState(): void;
  IsRaytracable(): Standard_Boolean;
  updateLayerTransformation(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class OpenGl_StructureShadow extends OpenGl_Structure {
  constructor(theManager: any, theStructure: any)
  Connect(a0: Graphic3d_CStructure): void;
  Disconnect(a0: Graphic3d_CStructure): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OpenGl_TextureSetPairIterator {
  constructor(theSet1: any, theSet2: any)
  More(): boolean;
  Unit(): Graphic3d_TextureUnit;
  Texture1(): OpenGl_Texture;
  Texture2(): OpenGl_Texture;
  Next(): void;
}

export declare class OpenGl_VertexBufferCompat extends OpenGl_VertexBuffer {
  constructor()
  IsVirtual(): boolean;
  Create(theGlCtx: any): boolean;
  Release(theGlCtx: OpenGl_Context): void;
  Bind(theGlCtx: any): void;
  Unbind(theGlCtx: any): void;
  initLink(theData: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theDataType: GLenum): boolean;
  init(theGlCtx: any, theComponentsNb: GLuint, theElemsNb: GLsizei, theData: void, theDataType: GLenum, theStride: GLsizei): boolean;
  subData(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: void, theDataType: GLenum): boolean;
  getSubData(theGlCtx: any, theElemFrom: GLsizei, theElemsNb: GLsizei, theData: void, theDataType: GLenum): boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_OpenGl_Caps {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Caps): void;
  get(): OpenGl_Caps;
}

  export declare class Handle_OpenGl_Caps_1 extends Handle_OpenGl_Caps {
    constructor();
  }

  export declare class Handle_OpenGl_Caps_2 extends Handle_OpenGl_Caps {
    constructor(thePtr: OpenGl_Caps);
  }

  export declare class Handle_OpenGl_Caps_3 extends Handle_OpenGl_Caps {
    constructor(theHandle: Handle_OpenGl_Caps);
  }

  export declare class Handle_OpenGl_Caps_4 extends Handle_OpenGl_Caps {
    constructor(theHandle: Handle_OpenGl_Caps);
  }

export declare class Handle_OpenGl_Resource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Resource): void;
  get(): OpenGl_Resource;
}

  export declare class Handle_OpenGl_Resource_1 extends Handle_OpenGl_Resource {
    constructor();
  }

  export declare class Handle_OpenGl_Resource_2 extends Handle_OpenGl_Resource {
    constructor(thePtr: OpenGl_Resource);
  }

  export declare class Handle_OpenGl_Resource_3 extends Handle_OpenGl_Resource {
    constructor(theHandle: Handle_OpenGl_Resource);
  }

  export declare class Handle_OpenGl_Resource_4 extends Handle_OpenGl_Resource {
    constructor(theHandle: Handle_OpenGl_Resource);
  }

export declare class Handle_OpenGl_LineAttributes {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_LineAttributes): void;
  get(): OpenGl_LineAttributes;
}

  export declare class Handle_OpenGl_LineAttributes_1 extends Handle_OpenGl_LineAttributes {
    constructor();
  }

  export declare class Handle_OpenGl_LineAttributes_2 extends Handle_OpenGl_LineAttributes {
    constructor(thePtr: OpenGl_LineAttributes);
  }

  export declare class Handle_OpenGl_LineAttributes_3 extends Handle_OpenGl_LineAttributes {
    constructor(theHandle: Handle_OpenGl_LineAttributes);
  }

  export declare class Handle_OpenGl_LineAttributes_4 extends Handle_OpenGl_LineAttributes {
    constructor(theHandle: Handle_OpenGl_LineAttributes);
  }

export declare class Handle_OpenGl_Context {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Context): void;
  get(): OpenGl_Context;
}

  export declare class Handle_OpenGl_Context_1 extends Handle_OpenGl_Context {
    constructor();
  }

  export declare class Handle_OpenGl_Context_2 extends Handle_OpenGl_Context {
    constructor(thePtr: OpenGl_Context);
  }

  export declare class Handle_OpenGl_Context_3 extends Handle_OpenGl_Context {
    constructor(theHandle: Handle_OpenGl_Context);
  }

  export declare class Handle_OpenGl_Context_4 extends Handle_OpenGl_Context {
    constructor(theHandle: Handle_OpenGl_Context);
  }

export declare class Handle_OpenGl_Sampler {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Sampler): void;
  get(): OpenGl_Sampler;
}

  export declare class Handle_OpenGl_Sampler_1 extends Handle_OpenGl_Sampler {
    constructor();
  }

  export declare class Handle_OpenGl_Sampler_2 extends Handle_OpenGl_Sampler {
    constructor(thePtr: OpenGl_Sampler);
  }

  export declare class Handle_OpenGl_Sampler_3 extends Handle_OpenGl_Sampler {
    constructor(theHandle: Handle_OpenGl_Sampler);
  }

  export declare class Handle_OpenGl_Sampler_4 extends Handle_OpenGl_Sampler {
    constructor(theHandle: Handle_OpenGl_Sampler);
  }

export declare class Handle_OpenGl_Texture {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Texture): void;
  get(): OpenGl_Texture;
}

  export declare class Handle_OpenGl_Texture_1 extends Handle_OpenGl_Texture {
    constructor();
  }

  export declare class Handle_OpenGl_Texture_2 extends Handle_OpenGl_Texture {
    constructor(thePtr: OpenGl_Texture);
  }

  export declare class Handle_OpenGl_Texture_3 extends Handle_OpenGl_Texture {
    constructor(theHandle: Handle_OpenGl_Texture);
  }

  export declare class Handle_OpenGl_Texture_4 extends Handle_OpenGl_Texture {
    constructor(theHandle: Handle_OpenGl_Texture);
  }

export declare class Handle_OpenGl_FrameBuffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_FrameBuffer): void;
  get(): OpenGl_FrameBuffer;
}

  export declare class Handle_OpenGl_FrameBuffer_1 extends Handle_OpenGl_FrameBuffer {
    constructor();
  }

  export declare class Handle_OpenGl_FrameBuffer_2 extends Handle_OpenGl_FrameBuffer {
    constructor(thePtr: OpenGl_FrameBuffer);
  }

  export declare class Handle_OpenGl_FrameBuffer_3 extends Handle_OpenGl_FrameBuffer {
    constructor(theHandle: Handle_OpenGl_FrameBuffer);
  }

  export declare class Handle_OpenGl_FrameBuffer_4 extends Handle_OpenGl_FrameBuffer {
    constructor(theHandle: Handle_OpenGl_FrameBuffer);
  }

export declare class OpenGl_ColorFormats extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: OpenGl_ColorFormats, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: GLint): GLint;
  Appended(): GLint;
  Value(theIndex: Standard_Integer): GLint;
  First(): GLint;
  ChangeFirst(): GLint;
  Last(): GLint;
  ChangeLast(): GLint;
  ChangeValue(theIndex: Standard_Integer): GLint;
  SetValue(theIndex: Standard_Integer, theValue: GLint): GLint;
}

  export declare class OpenGl_ColorFormats_1 extends OpenGl_ColorFormats {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class OpenGl_ColorFormats_2 extends OpenGl_ColorFormats {
    constructor(theOther: OpenGl_ColorFormats);
  }

export declare class Handle_OpenGl_GraphicDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_GraphicDriver): void;
  get(): OpenGl_GraphicDriver;
}

  export declare class Handle_OpenGl_GraphicDriver_1 extends Handle_OpenGl_GraphicDriver {
    constructor();
  }

  export declare class Handle_OpenGl_GraphicDriver_2 extends Handle_OpenGl_GraphicDriver {
    constructor(thePtr: OpenGl_GraphicDriver);
  }

  export declare class Handle_OpenGl_GraphicDriver_3 extends Handle_OpenGl_GraphicDriver {
    constructor(theHandle: Handle_OpenGl_GraphicDriver);
  }

  export declare class Handle_OpenGl_GraphicDriver_4 extends Handle_OpenGl_GraphicDriver {
    constructor(theHandle: Handle_OpenGl_GraphicDriver);
  }

export declare class Handle_OpenGl_ShaderObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_ShaderObject): void;
  get(): OpenGl_ShaderObject;
}

  export declare class Handle_OpenGl_ShaderObject_1 extends Handle_OpenGl_ShaderObject {
    constructor();
  }

  export declare class Handle_OpenGl_ShaderObject_2 extends Handle_OpenGl_ShaderObject {
    constructor(thePtr: OpenGl_ShaderObject);
  }

  export declare class Handle_OpenGl_ShaderObject_3 extends Handle_OpenGl_ShaderObject {
    constructor(theHandle: Handle_OpenGl_ShaderObject);
  }

  export declare class Handle_OpenGl_ShaderObject_4 extends Handle_OpenGl_ShaderObject {
    constructor(theHandle: Handle_OpenGl_ShaderObject);
  }

export declare class Handle_OpenGl_ShaderProgram {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_ShaderProgram): void;
  get(): OpenGl_ShaderProgram;
}

  export declare class Handle_OpenGl_ShaderProgram_1 extends Handle_OpenGl_ShaderProgram {
    constructor();
  }

  export declare class Handle_OpenGl_ShaderProgram_2 extends Handle_OpenGl_ShaderProgram {
    constructor(thePtr: OpenGl_ShaderProgram);
  }

  export declare class Handle_OpenGl_ShaderProgram_3 extends Handle_OpenGl_ShaderProgram {
    constructor(theHandle: Handle_OpenGl_ShaderProgram);
  }

  export declare class Handle_OpenGl_ShaderProgram_4 extends Handle_OpenGl_ShaderProgram {
    constructor(theHandle: Handle_OpenGl_ShaderProgram);
  }

export declare class Handle_OpenGl_VertexBuffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_VertexBuffer): void;
  get(): OpenGl_VertexBuffer;
}

  export declare class Handle_OpenGl_VertexBuffer_1 extends Handle_OpenGl_VertexBuffer {
    constructor();
  }

  export declare class Handle_OpenGl_VertexBuffer_2 extends Handle_OpenGl_VertexBuffer {
    constructor(thePtr: OpenGl_VertexBuffer);
  }

  export declare class Handle_OpenGl_VertexBuffer_3 extends Handle_OpenGl_VertexBuffer {
    constructor(theHandle: Handle_OpenGl_VertexBuffer);
  }

  export declare class Handle_OpenGl_VertexBuffer_4 extends Handle_OpenGl_VertexBuffer {
    constructor(theHandle: Handle_OpenGl_VertexBuffer);
  }

export declare class Handle_OpenGl_IndexBuffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_IndexBuffer): void;
  get(): OpenGl_IndexBuffer;
}

  export declare class Handle_OpenGl_IndexBuffer_1 extends Handle_OpenGl_IndexBuffer {
    constructor();
  }

  export declare class Handle_OpenGl_IndexBuffer_2 extends Handle_OpenGl_IndexBuffer {
    constructor(thePtr: OpenGl_IndexBuffer);
  }

  export declare class Handle_OpenGl_IndexBuffer_3 extends Handle_OpenGl_IndexBuffer {
    constructor(theHandle: Handle_OpenGl_IndexBuffer);
  }

  export declare class Handle_OpenGl_IndexBuffer_4 extends Handle_OpenGl_IndexBuffer {
    constructor(theHandle: Handle_OpenGl_IndexBuffer);
  }

export declare class Handle_OpenGl_Group {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Group): void;
  get(): OpenGl_Group;
}

  export declare class Handle_OpenGl_Group_1 extends Handle_OpenGl_Group {
    constructor();
  }

  export declare class Handle_OpenGl_Group_2 extends Handle_OpenGl_Group {
    constructor(thePtr: OpenGl_Group);
  }

  export declare class Handle_OpenGl_Group_3 extends Handle_OpenGl_Group {
    constructor(theHandle: Handle_OpenGl_Group);
  }

  export declare class Handle_OpenGl_Group_4 extends Handle_OpenGl_Group {
    constructor(theHandle: Handle_OpenGl_Group);
  }

export declare class Handle_OpenGl_TextureBufferArb {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_TextureBufferArb): void;
  get(): OpenGl_TextureBufferArb;
}

  export declare class Handle_OpenGl_TextureBufferArb_1 extends Handle_OpenGl_TextureBufferArb {
    constructor();
  }

  export declare class Handle_OpenGl_TextureBufferArb_2 extends Handle_OpenGl_TextureBufferArb {
    constructor(thePtr: OpenGl_TextureBufferArb);
  }

  export declare class Handle_OpenGl_TextureBufferArb_3 extends Handle_OpenGl_TextureBufferArb {
    constructor(theHandle: Handle_OpenGl_TextureBufferArb);
  }

  export declare class Handle_OpenGl_TextureBufferArb_4 extends Handle_OpenGl_TextureBufferArb {
    constructor(theHandle: Handle_OpenGl_TextureBufferArb);
  }

export declare class Handle_OpenGl_Window {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Window): void;
  get(): OpenGl_Window;
}

  export declare class Handle_OpenGl_Window_1 extends Handle_OpenGl_Window {
    constructor();
  }

  export declare class Handle_OpenGl_Window_2 extends Handle_OpenGl_Window {
    constructor(thePtr: OpenGl_Window);
  }

  export declare class Handle_OpenGl_Window_3 extends Handle_OpenGl_Window {
    constructor(theHandle: Handle_OpenGl_Window);
  }

  export declare class Handle_OpenGl_Window_4 extends Handle_OpenGl_Window {
    constructor(theHandle: Handle_OpenGl_Window);
  }

export declare class Handle_OpenGl_Workspace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Workspace): void;
  get(): OpenGl_Workspace;
}

  export declare class Handle_OpenGl_Workspace_1 extends Handle_OpenGl_Workspace {
    constructor();
  }

  export declare class Handle_OpenGl_Workspace_2 extends Handle_OpenGl_Workspace {
    constructor(thePtr: OpenGl_Workspace);
  }

  export declare class Handle_OpenGl_Workspace_3 extends Handle_OpenGl_Workspace {
    constructor(theHandle: Handle_OpenGl_Workspace);
  }

  export declare class Handle_OpenGl_Workspace_4 extends Handle_OpenGl_Workspace {
    constructor(theHandle: Handle_OpenGl_Workspace);
  }

export declare class Handle_OpenGl_CappingPlaneResource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_CappingPlaneResource): void;
  get(): OpenGl_CappingPlaneResource;
}

  export declare class Handle_OpenGl_CappingPlaneResource_1 extends Handle_OpenGl_CappingPlaneResource {
    constructor();
  }

  export declare class Handle_OpenGl_CappingPlaneResource_2 extends Handle_OpenGl_CappingPlaneResource {
    constructor(thePtr: OpenGl_CappingPlaneResource);
  }

  export declare class Handle_OpenGl_CappingPlaneResource_3 extends Handle_OpenGl_CappingPlaneResource {
    constructor(theHandle: Handle_OpenGl_CappingPlaneResource);
  }

  export declare class Handle_OpenGl_CappingPlaneResource_4 extends Handle_OpenGl_CappingPlaneResource {
    constructor(theHandle: Handle_OpenGl_CappingPlaneResource);
  }

export declare class Handle_OpenGl_Font {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Font): void;
  get(): OpenGl_Font;
}

  export declare class Handle_OpenGl_Font_1 extends Handle_OpenGl_Font {
    constructor();
  }

  export declare class Handle_OpenGl_Font_2 extends Handle_OpenGl_Font {
    constructor(thePtr: OpenGl_Font);
  }

  export declare class Handle_OpenGl_Font_3 extends Handle_OpenGl_Font {
    constructor(theHandle: Handle_OpenGl_Font);
  }

  export declare class Handle_OpenGl_Font_4 extends Handle_OpenGl_Font {
    constructor(theHandle: Handle_OpenGl_Font);
  }

export declare class Handle_OpenGl_FrameStats {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_FrameStats): void;
  get(): OpenGl_FrameStats;
}

  export declare class Handle_OpenGl_FrameStats_1 extends Handle_OpenGl_FrameStats {
    constructor();
  }

  export declare class Handle_OpenGl_FrameStats_2 extends Handle_OpenGl_FrameStats {
    constructor(thePtr: OpenGl_FrameStats);
  }

  export declare class Handle_OpenGl_FrameStats_3 extends Handle_OpenGl_FrameStats {
    constructor(theHandle: Handle_OpenGl_FrameStats);
  }

  export declare class Handle_OpenGl_FrameStats_4 extends Handle_OpenGl_FrameStats {
    constructor(theHandle: Handle_OpenGl_FrameStats);
  }

export declare class Handle_OpenGl_PointSprite {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_PointSprite): void;
  get(): OpenGl_PointSprite;
}

  export declare class Handle_OpenGl_PointSprite_1 extends Handle_OpenGl_PointSprite {
    constructor();
  }

  export declare class Handle_OpenGl_PointSprite_2 extends Handle_OpenGl_PointSprite {
    constructor(thePtr: OpenGl_PointSprite);
  }

  export declare class Handle_OpenGl_PointSprite_3 extends Handle_OpenGl_PointSprite {
    constructor(theHandle: Handle_OpenGl_PointSprite);
  }

  export declare class Handle_OpenGl_PointSprite_4 extends Handle_OpenGl_PointSprite {
    constructor(theHandle: Handle_OpenGl_PointSprite);
  }

export declare class Handle_OpenGl_ShaderManager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_ShaderManager): void;
  get(): OpenGl_ShaderManager;
}

  export declare class Handle_OpenGl_ShaderManager_1 extends Handle_OpenGl_ShaderManager {
    constructor();
  }

  export declare class Handle_OpenGl_ShaderManager_2 extends Handle_OpenGl_ShaderManager {
    constructor(thePtr: OpenGl_ShaderManager);
  }

  export declare class Handle_OpenGl_ShaderManager_3 extends Handle_OpenGl_ShaderManager {
    constructor(theHandle: Handle_OpenGl_ShaderManager);
  }

  export declare class Handle_OpenGl_ShaderManager_4 extends Handle_OpenGl_ShaderManager {
    constructor(theHandle: Handle_OpenGl_ShaderManager);
  }

export declare class Handle_OpenGl_Structure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_Structure): void;
  get(): OpenGl_Structure;
}

  export declare class Handle_OpenGl_Structure_1 extends Handle_OpenGl_Structure {
    constructor();
  }

  export declare class Handle_OpenGl_Structure_2 extends Handle_OpenGl_Structure {
    constructor(thePtr: OpenGl_Structure);
  }

  export declare class Handle_OpenGl_Structure_3 extends Handle_OpenGl_Structure {
    constructor(theHandle: Handle_OpenGl_Structure);
  }

  export declare class Handle_OpenGl_Structure_4 extends Handle_OpenGl_Structure {
    constructor(theHandle: Handle_OpenGl_Structure);
  }

export declare class Handle_OpenGl_StructureShadow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_StructureShadow): void;
  get(): OpenGl_StructureShadow;
}

  export declare class Handle_OpenGl_StructureShadow_1 extends Handle_OpenGl_StructureShadow {
    constructor();
  }

  export declare class Handle_OpenGl_StructureShadow_2 extends Handle_OpenGl_StructureShadow {
    constructor(thePtr: OpenGl_StructureShadow);
  }

  export declare class Handle_OpenGl_StructureShadow_3 extends Handle_OpenGl_StructureShadow {
    constructor(theHandle: Handle_OpenGl_StructureShadow);
  }

  export declare class Handle_OpenGl_StructureShadow_4 extends Handle_OpenGl_StructureShadow {
    constructor(theHandle: Handle_OpenGl_StructureShadow);
  }

export declare class Handle_OpenGl_VertexBufferCompat {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OpenGl_VertexBufferCompat): void;
  get(): OpenGl_VertexBufferCompat;
}

  export declare class Handle_OpenGl_VertexBufferCompat_1 extends Handle_OpenGl_VertexBufferCompat {
    constructor();
  }

  export declare class Handle_OpenGl_VertexBufferCompat_2 extends Handle_OpenGl_VertexBufferCompat {
    constructor(thePtr: OpenGl_VertexBufferCompat);
  }

  export declare class Handle_OpenGl_VertexBufferCompat_3 extends Handle_OpenGl_VertexBufferCompat {
    constructor(theHandle: Handle_OpenGl_VertexBufferCompat);
  }

  export declare class Handle_OpenGl_VertexBufferCompat_4 extends Handle_OpenGl_VertexBufferCompat {
    constructor(theHandle: Handle_OpenGl_VertexBufferCompat);
  }

export declare type OpenGl_ShaderProgramDumpLevel = {
  OpenGl_ShaderProgramDumpLevel_Off: {};
  OpenGl_ShaderProgramDumpLevel_Short: {};
  OpenGl_ShaderProgramDumpLevel_Full: {};
}

export declare type OpenGl_MaterialFlag = {
  OpenGl_MaterialFlag_Front: {};
  OpenGl_MaterialFlag_Back: {};
}

export declare type OpenGl_FeatureFlag = {
  OpenGl_FeatureNotAvailable: {};
  OpenGl_FeatureInExtensions: {};
  OpenGl_FeatureInCore: {};
}

export declare type OpenGl_RenderFilter = {
  OpenGl_RenderFilter_Empty: {};
  OpenGl_RenderFilter_OpaqueOnly: {};
  OpenGl_RenderFilter_TransparentOnly: {};
  OpenGl_RenderFilter_NonRaytraceableOnly: {};
  OpenGl_RenderFilter_FillModeOnly: {};
}

export declare type OpenGl_StateVariable = {
  OpenGl_OCC_MODEL_WORLD_MATRIX: {};
  OpenGl_OCC_WORLD_VIEW_MATRIX: {};
  OpenGl_OCC_PROJECTION_MATRIX: {};
  OpenGl_OCC_MODEL_WORLD_MATRIX_INVERSE: {};
  OpenGl_OCC_WORLD_VIEW_MATRIX_INVERSE: {};
  OpenGl_OCC_PROJECTION_MATRIX_INVERSE: {};
  OpenGl_OCC_MODEL_WORLD_MATRIX_TRANSPOSE: {};
  OpenGl_OCC_WORLD_VIEW_MATRIX_TRANSPOSE: {};
  OpenGl_OCC_PROJECTION_MATRIX_TRANSPOSE: {};
  OpenGl_OCC_MODEL_WORLD_MATRIX_INVERSE_TRANSPOSE: {};
  OpenGl_OCC_WORLD_VIEW_MATRIX_INVERSE_TRANSPOSE: {};
  OpenGl_OCC_PROJECTION_MATRIX_INVERSE_TRANSPOSE: {};
  OpenGl_OCC_CLIP_PLANE_EQUATIONS: {};
  OpenGl_OCC_CLIP_PLANE_CHAINS: {};
  OpenGl_OCC_CLIP_PLANE_COUNT: {};
  OpenGl_OCC_LIGHT_SOURCE_COUNT: {};
  OpenGl_OCC_LIGHT_SOURCE_TYPES: {};
  OpenGl_OCC_LIGHT_SOURCE_PARAMS: {};
  OpenGl_OCC_LIGHT_AMBIENT: {};
  OpenGl_OCCT_TEXTURE_ENABLE: {};
  OpenGl_OCCT_DISTINGUISH_MODE: {};
  OpenGl_OCCT_PBR_FRONT_MATERIAL: {};
  OpenGl_OCCT_PBR_BACK_MATERIAL: {};
  OpenGl_OCCT_COMMON_FRONT_MATERIAL: {};
  OpenGl_OCCT_COMMON_BACK_MATERIAL: {};
  OpenGl_OCCT_ALPHA_CUTOFF: {};
  OpenGl_OCCT_COLOR: {};
  OpenGl_OCCT_OIT_OUTPUT: {};
  OpenGl_OCCT_OIT_DEPTH_FACTOR: {};
  OpenGl_OCCT_TEXTURE_TRSF2D: {};
  OpenGl_OCCT_POINT_SIZE: {};
  OpenGl_OCCT_VIEWPORT: {};
  OpenGl_OCCT_LINE_WIDTH: {};
  OpenGl_OCCT_LINE_FEATHER: {};
  OpenGl_OCCT_LINE_STIPPLE_PATTERN: {};
  OpenGl_OCCT_LINE_STIPPLE_FACTOR: {};
  OpenGl_OCCT_WIREFRAME_COLOR: {};
  OpenGl_OCCT_QUAD_MODE_STATE: {};
  OpenGl_OCCT_ORTHO_SCALE: {};
  OpenGl_OCCT_SILHOUETTE_THICKNESS: {};
  OpenGl_OCCT_NB_SPEC_IBL_LEVELS: {};
  OpenGl_OCCT_NUMBER_OF_STATE_VARIABLES: {};
}

export declare type OpenGl_UniformStateType = {
  OpenGl_LIGHT_SOURCES_STATE: {};
  OpenGl_CLIP_PLANES_STATE: {};
  OpenGl_MODEL_WORLD_STATE: {};
  OpenGl_WORLD_VIEW_STATE: {};
  OpenGl_PROJECTION_STATE: {};
  OpenGl_MATERIAL_STATE: {};
  OpenGl_SURF_DETAIL_STATE: {};
  OpenGL_OIT_STATE: {};
  OpenGl_UniformStateType_NB: {};
}

export declare type OpenGl_LayerFilter = {
  OpenGl_LF_All: {};
  OpenGl_LF_Upper: {};
  OpenGl_LF_Bottom: {};
  OpenGl_LF_RayTracable: {};
}

export declare type OpenGl_ProgramOptions = {
  OpenGl_PO_VertColor: {};
  OpenGl_PO_TextureRGB: {};
  OpenGl_PO_TextureEnv: {};
  OpenGl_PO_TextureNormal: {};
  OpenGl_PO_PointSimple: {};
  OpenGl_PO_PointSprite: {};
  OpenGl_PO_PointSpriteA: {};
  OpenGl_PO_StippleLine: {};
  OpenGl_PO_ClipPlanes1: {};
  OpenGl_PO_ClipPlanes2: {};
  OpenGl_PO_ClipPlanesN: {};
  OpenGl_PO_ClipChains: {};
  OpenGl_PO_MeshEdges: {};
  OpenGl_PO_AlphaTest: {};
  OpenGl_PO_WriteOit: {};
  OpenGl_PO_NB: {};
  OpenGl_PO_IsPoint: {};
  OpenGl_PO_HasTextures: {};
  OpenGl_PO_NeedsGeomShader: {};
}

export declare type TKOpenGlLib = {
  OpenGl_Caps: typeof OpenGl_Caps;
  OpenGl_LineAttributes: typeof OpenGl_LineAttributes;
  OpenGl_TextureSet_1: typeof OpenGl_TextureSet_1;
  OpenGl_TextureSet_2: typeof OpenGl_TextureSet_2;
  OpenGl_TextureSet_3: typeof OpenGl_TextureSet_3;
  OpenGl_Clipping: typeof OpenGl_Clipping;
  OpenGl_TextureFormat: typeof OpenGl_TextureFormat;
  OpenGl_Sampler: typeof OpenGl_Sampler;
  OpenGl_Texture: typeof OpenGl_Texture;
  OpenGl_FrameBuffer: typeof OpenGl_FrameBuffer;
  OpenGl_StateCounter: typeof OpenGl_StateCounter;
  OpenGl_GraphicDriver: typeof OpenGl_GraphicDriver;
  OpenGl_AspectsProgram: typeof OpenGl_AspectsProgram;
  OpenGl_AspectsTextureSet: typeof OpenGl_AspectsTextureSet;
  OpenGl_AspectsSprite: typeof OpenGl_AspectsSprite;
  OpenGl_Aspects_1: typeof OpenGl_Aspects_1;
  OpenGl_Aspects_2: typeof OpenGl_Aspects_2;
  OpenGl_ShaderObject: typeof OpenGl_ShaderObject;
  OpenGl_VariableSetterSelector: typeof OpenGl_VariableSetterSelector;
  OpenGl_ShaderUniformLocation_1: typeof OpenGl_ShaderUniformLocation_1;
  OpenGl_ShaderUniformLocation_2: typeof OpenGl_ShaderUniformLocation_2;
  OpenGl_VertexBuffer: typeof OpenGl_VertexBuffer;
  OpenGl_IndexBuffer: typeof OpenGl_IndexBuffer;
  OpenGl_PrimitiveArray_1: typeof OpenGl_PrimitiveArray_1;
  OpenGl_PrimitiveArray_2: typeof OpenGl_PrimitiveArray_2;
  OpenGl_Group: typeof OpenGl_Group;
  OpenGl_TextureBufferArb: typeof OpenGl_TextureBufferArb;
  OpenGl_Window: typeof OpenGl_Window;
  OpenGl_Workspace: typeof OpenGl_Workspace;
  OpenGl_BackgroundArray: typeof OpenGl_BackgroundArray;
  OpenGl_CappingPlaneResource: typeof OpenGl_CappingPlaneResource;
  OpenGl_ClippingIterator: typeof OpenGl_ClippingIterator;
  OpenGl_Flipper: typeof OpenGl_Flipper;
  OpenGl_Font: typeof OpenGl_Font;
  OpenGl_FrameStats: typeof OpenGl_FrameStats;
  OpenGl_TextBuilder: typeof OpenGl_TextBuilder;
  OpenGl_Text_1: typeof OpenGl_Text_1;
  OpenGl_Text_2: typeof OpenGl_Text_2;
  OpenGl_FrameStatsPrs: typeof OpenGl_FrameStatsPrs;
  OpenGl_GraduatedTrihedron: typeof OpenGl_GraduatedTrihedron;
  OpenGl_LayerList: typeof OpenGl_LayerList;
  OpenGl_StateInterface: typeof OpenGl_StateInterface;
  OpenGl_ProjectionState: typeof OpenGl_ProjectionState;
  OpenGl_ModelWorldState: typeof OpenGl_ModelWorldState;
  OpenGl_WorldViewState: typeof OpenGl_WorldViewState;
  OpenGl_LightSourceState: typeof OpenGl_LightSourceState;
  OpenGl_ClippingState: typeof OpenGl_ClippingState;
  OpenGl_OitState: typeof OpenGl_OitState;
  OpenGl_MaterialState: typeof OpenGl_MaterialState;
  OpenGl_PointSprite: typeof OpenGl_PointSprite;
  OpenGl_TriangleSet: typeof OpenGl_TriangleSet;
  OpenGl_RaytraceGeometry: typeof OpenGl_RaytraceGeometry;
  OpenGl_SetOfPrograms: typeof OpenGl_SetOfPrograms;
  OpenGl_SetOfShaderPrograms_1: typeof OpenGl_SetOfShaderPrograms_1;
  OpenGl_SetOfShaderPrograms_2: typeof OpenGl_SetOfShaderPrograms_2;
  OpenGl_ShaderManager: typeof OpenGl_ShaderManager;
  OpenGl_StencilTest: typeof OpenGl_StencilTest;
  OpenGl_Structure: typeof OpenGl_Structure;
  OpenGl_StructureShadow: typeof OpenGl_StructureShadow;
  OpenGl_TextureSetPairIterator: typeof OpenGl_TextureSetPairIterator;
  OpenGl_VertexBufferCompat: typeof OpenGl_VertexBufferCompat;
  Handle_OpenGl_Caps_1: typeof Handle_OpenGl_Caps_1;
  Handle_OpenGl_Caps_2: typeof Handle_OpenGl_Caps_2;
  Handle_OpenGl_Caps_3: typeof Handle_OpenGl_Caps_3;
  Handle_OpenGl_Caps_4: typeof Handle_OpenGl_Caps_4;
  Handle_OpenGl_Resource_1: typeof Handle_OpenGl_Resource_1;
  Handle_OpenGl_Resource_2: typeof Handle_OpenGl_Resource_2;
  Handle_OpenGl_Resource_3: typeof Handle_OpenGl_Resource_3;
  Handle_OpenGl_Resource_4: typeof Handle_OpenGl_Resource_4;
  Handle_OpenGl_LineAttributes_1: typeof Handle_OpenGl_LineAttributes_1;
  Handle_OpenGl_LineAttributes_2: typeof Handle_OpenGl_LineAttributes_2;
  Handle_OpenGl_LineAttributes_3: typeof Handle_OpenGl_LineAttributes_3;
  Handle_OpenGl_LineAttributes_4: typeof Handle_OpenGl_LineAttributes_4;
  Handle_OpenGl_Context_1: typeof Handle_OpenGl_Context_1;
  Handle_OpenGl_Context_2: typeof Handle_OpenGl_Context_2;
  Handle_OpenGl_Context_3: typeof Handle_OpenGl_Context_3;
  Handle_OpenGl_Context_4: typeof Handle_OpenGl_Context_4;
  Handle_OpenGl_Sampler_1: typeof Handle_OpenGl_Sampler_1;
  Handle_OpenGl_Sampler_2: typeof Handle_OpenGl_Sampler_2;
  Handle_OpenGl_Sampler_3: typeof Handle_OpenGl_Sampler_3;
  Handle_OpenGl_Sampler_4: typeof Handle_OpenGl_Sampler_4;
  Handle_OpenGl_Texture_1: typeof Handle_OpenGl_Texture_1;
  Handle_OpenGl_Texture_2: typeof Handle_OpenGl_Texture_2;
  Handle_OpenGl_Texture_3: typeof Handle_OpenGl_Texture_3;
  Handle_OpenGl_Texture_4: typeof Handle_OpenGl_Texture_4;
  Handle_OpenGl_FrameBuffer_1: typeof Handle_OpenGl_FrameBuffer_1;
  Handle_OpenGl_FrameBuffer_2: typeof Handle_OpenGl_FrameBuffer_2;
  Handle_OpenGl_FrameBuffer_3: typeof Handle_OpenGl_FrameBuffer_3;
  Handle_OpenGl_FrameBuffer_4: typeof Handle_OpenGl_FrameBuffer_4;
  OpenGl_ColorFormats_1: typeof OpenGl_ColorFormats_1;
  OpenGl_ColorFormats_2: typeof OpenGl_ColorFormats_2;
  Handle_OpenGl_GraphicDriver_1: typeof Handle_OpenGl_GraphicDriver_1;
  Handle_OpenGl_GraphicDriver_2: typeof Handle_OpenGl_GraphicDriver_2;
  Handle_OpenGl_GraphicDriver_3: typeof Handle_OpenGl_GraphicDriver_3;
  Handle_OpenGl_GraphicDriver_4: typeof Handle_OpenGl_GraphicDriver_4;
  Handle_OpenGl_ShaderObject_1: typeof Handle_OpenGl_ShaderObject_1;
  Handle_OpenGl_ShaderObject_2: typeof Handle_OpenGl_ShaderObject_2;
  Handle_OpenGl_ShaderObject_3: typeof Handle_OpenGl_ShaderObject_3;
  Handle_OpenGl_ShaderObject_4: typeof Handle_OpenGl_ShaderObject_4;
  Handle_OpenGl_ShaderProgram_1: typeof Handle_OpenGl_ShaderProgram_1;
  Handle_OpenGl_ShaderProgram_2: typeof Handle_OpenGl_ShaderProgram_2;
  Handle_OpenGl_ShaderProgram_3: typeof Handle_OpenGl_ShaderProgram_3;
  Handle_OpenGl_ShaderProgram_4: typeof Handle_OpenGl_ShaderProgram_4;
  Handle_OpenGl_VertexBuffer_1: typeof Handle_OpenGl_VertexBuffer_1;
  Handle_OpenGl_VertexBuffer_2: typeof Handle_OpenGl_VertexBuffer_2;
  Handle_OpenGl_VertexBuffer_3: typeof Handle_OpenGl_VertexBuffer_3;
  Handle_OpenGl_VertexBuffer_4: typeof Handle_OpenGl_VertexBuffer_4;
  Handle_OpenGl_IndexBuffer_1: typeof Handle_OpenGl_IndexBuffer_1;
  Handle_OpenGl_IndexBuffer_2: typeof Handle_OpenGl_IndexBuffer_2;
  Handle_OpenGl_IndexBuffer_3: typeof Handle_OpenGl_IndexBuffer_3;
  Handle_OpenGl_IndexBuffer_4: typeof Handle_OpenGl_IndexBuffer_4;
  Handle_OpenGl_Group_1: typeof Handle_OpenGl_Group_1;
  Handle_OpenGl_Group_2: typeof Handle_OpenGl_Group_2;
  Handle_OpenGl_Group_3: typeof Handle_OpenGl_Group_3;
  Handle_OpenGl_Group_4: typeof Handle_OpenGl_Group_4;
  Handle_OpenGl_TextureBufferArb_1: typeof Handle_OpenGl_TextureBufferArb_1;
  Handle_OpenGl_TextureBufferArb_2: typeof Handle_OpenGl_TextureBufferArb_2;
  Handle_OpenGl_TextureBufferArb_3: typeof Handle_OpenGl_TextureBufferArb_3;
  Handle_OpenGl_TextureBufferArb_4: typeof Handle_OpenGl_TextureBufferArb_4;
  Handle_OpenGl_Window_1: typeof Handle_OpenGl_Window_1;
  Handle_OpenGl_Window_2: typeof Handle_OpenGl_Window_2;
  Handle_OpenGl_Window_3: typeof Handle_OpenGl_Window_3;
  Handle_OpenGl_Window_4: typeof Handle_OpenGl_Window_4;
  Handle_OpenGl_Workspace_1: typeof Handle_OpenGl_Workspace_1;
  Handle_OpenGl_Workspace_2: typeof Handle_OpenGl_Workspace_2;
  Handle_OpenGl_Workspace_3: typeof Handle_OpenGl_Workspace_3;
  Handle_OpenGl_Workspace_4: typeof Handle_OpenGl_Workspace_4;
  Handle_OpenGl_CappingPlaneResource_1: typeof Handle_OpenGl_CappingPlaneResource_1;
  Handle_OpenGl_CappingPlaneResource_2: typeof Handle_OpenGl_CappingPlaneResource_2;
  Handle_OpenGl_CappingPlaneResource_3: typeof Handle_OpenGl_CappingPlaneResource_3;
  Handle_OpenGl_CappingPlaneResource_4: typeof Handle_OpenGl_CappingPlaneResource_4;
  Handle_OpenGl_Font_1: typeof Handle_OpenGl_Font_1;
  Handle_OpenGl_Font_2: typeof Handle_OpenGl_Font_2;
  Handle_OpenGl_Font_3: typeof Handle_OpenGl_Font_3;
  Handle_OpenGl_Font_4: typeof Handle_OpenGl_Font_4;
  Handle_OpenGl_FrameStats_1: typeof Handle_OpenGl_FrameStats_1;
  Handle_OpenGl_FrameStats_2: typeof Handle_OpenGl_FrameStats_2;
  Handle_OpenGl_FrameStats_3: typeof Handle_OpenGl_FrameStats_3;
  Handle_OpenGl_FrameStats_4: typeof Handle_OpenGl_FrameStats_4;
  Handle_OpenGl_PointSprite_1: typeof Handle_OpenGl_PointSprite_1;
  Handle_OpenGl_PointSprite_2: typeof Handle_OpenGl_PointSprite_2;
  Handle_OpenGl_PointSprite_3: typeof Handle_OpenGl_PointSprite_3;
  Handle_OpenGl_PointSprite_4: typeof Handle_OpenGl_PointSprite_4;
  Handle_OpenGl_ShaderManager_1: typeof Handle_OpenGl_ShaderManager_1;
  Handle_OpenGl_ShaderManager_2: typeof Handle_OpenGl_ShaderManager_2;
  Handle_OpenGl_ShaderManager_3: typeof Handle_OpenGl_ShaderManager_3;
  Handle_OpenGl_ShaderManager_4: typeof Handle_OpenGl_ShaderManager_4;
  Handle_OpenGl_Structure_1: typeof Handle_OpenGl_Structure_1;
  Handle_OpenGl_Structure_2: typeof Handle_OpenGl_Structure_2;
  Handle_OpenGl_Structure_3: typeof Handle_OpenGl_Structure_3;
  Handle_OpenGl_Structure_4: typeof Handle_OpenGl_Structure_4;
  Handle_OpenGl_StructureShadow_1: typeof Handle_OpenGl_StructureShadow_1;
  Handle_OpenGl_StructureShadow_2: typeof Handle_OpenGl_StructureShadow_2;
  Handle_OpenGl_StructureShadow_3: typeof Handle_OpenGl_StructureShadow_3;
  Handle_OpenGl_StructureShadow_4: typeof Handle_OpenGl_StructureShadow_4;
  Handle_OpenGl_VertexBufferCompat_1: typeof Handle_OpenGl_VertexBufferCompat_1;
  Handle_OpenGl_VertexBufferCompat_2: typeof Handle_OpenGl_VertexBufferCompat_2;
  Handle_OpenGl_VertexBufferCompat_3: typeof Handle_OpenGl_VertexBufferCompat_3;
  Handle_OpenGl_VertexBufferCompat_4: typeof Handle_OpenGl_VertexBufferCompat_4;
  OpenGl_ShaderProgramDumpLevel: typeof OpenGl_ShaderProgramDumpLevel;
  OpenGl_MaterialFlag: typeof OpenGl_MaterialFlag;
  OpenGl_FeatureFlag: typeof OpenGl_FeatureFlag;
  OpenGl_RenderFilter: typeof OpenGl_RenderFilter;
  OpenGl_StateVariable: typeof OpenGl_StateVariable;
  OpenGl_UniformStateType: typeof OpenGl_UniformStateType;
  OpenGl_LayerFilter: typeof OpenGl_LayerFilter;
  OpenGl_ProgramOptions: typeof OpenGl_ProgramOptions;
};
