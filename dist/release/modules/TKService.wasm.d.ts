declare const libName = "./modules/TKService.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Graphic3d_MarkerImage extends Standard_Transient {
  GetBitMapArray(theAlphaValue: Quantity_AbsorbedDose): any;
  GetImage(): any;
  GetImageAlpha(): any;
  GetImageId(): TCollection_AsciiString;
  GetImageAlphaId(): TCollection_AsciiString;
  GetTextureSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_MarkerImage_1 extends Graphic3d_MarkerImage {
    constructor(theImage: any);
  }

  export declare class Graphic3d_MarkerImage_2 extends Graphic3d_MarkerImage {
    constructor(theBitMap: any, theWidth: Standard_Integer, theHeight: Standard_Integer);
  }

export declare class Image_PixMapData extends NCollection_Buffer {
  constructor()
  Init(theAlloc: any, theSizeBPP: Standard_Size, theSizeX: Standard_Size, theSizeY: Standard_Size, theSizeRowBytes: Standard_Size, theDataPtr: Standard_Byte): boolean;
  ZeroData(): void;
  Row(theRow: Standard_Size): Standard_Byte;
  ChangeRow(theRow: Standard_Size): Standard_Byte;
  Value(theRow: Standard_Size, theCol: Standard_Size): Standard_Byte;
  ChangeValue(theRow: Standard_Size, theCol: Standard_Size): Standard_Byte;
  MaxRowAligmentBytes(): Standard_Size;
  SetTopDown(theIsTopDown: boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Image_PixMap extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsBigEndianHost(): boolean;
  SwapRgbaBgra(theImage: Image_PixMap): boolean;
  ToBlackWhite(theImage: Image_PixMap): void;
  DefaultAllocator(): any;
  Format(): Image_Format;
  SetFormat(thePixelFormat: Image_Format): void;
  Width(): Standard_Size;
  Height(): Standard_Size;
  SizeX(): Standard_Size;
  SizeY(): Standard_Size;
  Ratio(): Standard_Real;
  IsEmpty(): boolean;
  PixelColor(theX: Standard_Integer, theY: Standard_Integer, theToLinearize: Standard_Boolean): Quantity_ColorRGBA;
  SetPixelColor_1(theX: Standard_Integer, theY: Standard_Integer, theColor: Quantity_Color, theToDeLinearize: Standard_Boolean): void;
  SetPixelColor_2(theX: Standard_Integer, theY: Standard_Integer, theColor: Quantity_ColorRGBA, theToDeLinearize: Standard_Boolean): void;
  InitWrapper(thePixelFormat: Image_Format, theDataPtr: Standard_Byte, theSizeX: Standard_Size, theSizeY: Standard_Size, theSizeRowBytes: Standard_Size): boolean;
  InitTrash(thePixelFormat: Image_Format, theSizeX: Standard_Size, theSizeY: Standard_Size, theSizeRowBytes: Standard_Size): boolean;
  InitCopy(theCopy: Image_PixMap): boolean;
  InitZero(thePixelFormat: Image_Format, theSizeX: Standard_Size, theSizeY: Standard_Size, theSizeRowBytes: Standard_Size, theValue: Standard_Byte): boolean;
  Clear(): void;
  IsTopDown(): boolean;
  SetTopDown(theIsTopDown: boolean): void;
  TopDownInc(): Standard_Size;
  Data(): Standard_Byte;
  ChangeData(): Standard_Byte;
  Row(theRow: Standard_Size): Standard_Byte;
  ChangeRow(theRow: Standard_Size): Standard_Byte;
  SizePixelBytes_1(): Standard_Size;
  SizePixelBytes_2(thePixelFormat: Image_Format): Standard_Size;
  SizeRowBytes(): Standard_Size;
  RowExtraBytes(): Standard_Size;
  MaxRowAligmentBytes(): Standard_Size;
  SizeBytes(): Standard_Size;
  RawValue(theRow: Standard_Size, theCol: Standard_Size): Standard_Byte;
  ChangeRawValue(theRow: Standard_Size, theCol: Standard_Size): Standard_Byte;
}

export declare class Graphic3d_HatchStyle extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Pattern(): Standard_Byte;
  HatchType(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Graphic3d_HatchStyle_1 extends Graphic3d_HatchStyle {
    constructor(thePattern: any);
  }

  export declare class Graphic3d_HatchStyle_2 extends Graphic3d_HatchStyle {
    constructor(theType: Aspect_HatchStyle);
  }

export declare class Graphic3d_Fresnel {
  constructor()
  CreateSchlick(theSpecularColor: Graphic3d_Vec3): Graphic3d_Fresnel;
  CreateConstant(theReflection: Standard_ShortReal): Graphic3d_Fresnel;
  CreateDielectric(theRefractionIndex: Standard_ShortReal): Graphic3d_Fresnel;
  CreateConductor_1(theRefractionIndex: Standard_ShortReal, theAbsorptionIndex: Standard_ShortReal): Graphic3d_Fresnel;
  CreateConductor_2(theRefractionIndex: Graphic3d_Vec3, theAbsorptionIndex: Graphic3d_Vec3): Graphic3d_Fresnel;
  Serialize(): Graphic3d_Vec4;
  FresnelType(): Graphic3d_FresnelModel;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_BSDF {
  constructor()
  CreateDiffuse(theWeight: Graphic3d_Vec3): Graphic3d_BSDF;
  CreateMetallic(theWeight: Graphic3d_Vec3, theFresnel: Graphic3d_Fresnel, theRoughness: Standard_ShortReal): Graphic3d_BSDF;
  CreateTransparent(theWeight: Graphic3d_Vec3, theAbsorptionColor: Graphic3d_Vec3, theAbsorptionCoeff: Standard_ShortReal): Graphic3d_BSDF;
  CreateGlass(theWeight: Graphic3d_Vec3, theAbsorptionColor: Graphic3d_Vec3, theAbsorptionCoeff: Standard_ShortReal, theRefractionIndex: Standard_ShortReal): Graphic3d_BSDF;
  CreateMetallicRoughness(thePbr: Graphic3d_PBRMaterial): Graphic3d_BSDF;
  Normalize(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_PBRMaterial {
  Metallic(): Standard_ShortReal;
  SetMetallic(theMetallic: Standard_ShortReal): void;
  Roughness_1(theNormalizedRoughness: Standard_ShortReal): Standard_ShortReal;
  Roughness_2(): Standard_ShortReal;
  NormalizedRoughness(): Standard_ShortReal;
  SetRoughness(theRoughness: Standard_ShortReal): void;
  IOR(): Standard_ShortReal;
  SetIOR(theIOR: Standard_ShortReal): void;
  Color(): Quantity_ColorRGBA;
  SetColor_1(theColor: Quantity_ColorRGBA): void;
  SetColor_2(theColor: Quantity_Color): void;
  Alpha(): Standard_ShortReal;
  SetAlpha(theAlpha: Standard_ShortReal): void;
  Emission(): Graphic3d_Vec3;
  SetEmission(theEmission: Graphic3d_Vec3): void;
  SetBSDF(theBSDF: Graphic3d_BSDF): void;
  GenerateEnvLUT(theLUT: any, theNbIntegralSamples: number): void;
  RoughnessFromSpecular(theSpecular: Quantity_Color, theShiness: Standard_Real): Standard_ShortReal;
  MetallicFromSpecular(theSpecular: Quantity_Color): Standard_ShortReal;
  MinRoughness(): Standard_ShortReal;
  SpecIBLMapSamplesFactor(theProbability: Standard_ShortReal, theRoughness: Standard_ShortReal): Standard_ShortReal;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Graphic3d_PBRMaterial_1 extends Graphic3d_PBRMaterial {
    constructor();
  }

  export declare class Graphic3d_PBRMaterial_2 extends Graphic3d_PBRMaterial {
    constructor(theBSDF: Graphic3d_BSDF);
  }

export declare class Graphic3d_MaterialAspect {
  NumberOfMaterials(): Standard_Integer;
  MaterialName_1(theRank: Standard_Integer): Standard_CString;
  MaterialType_1(theRank: Standard_Integer): Graphic3d_TypeOfMaterial;
  MaterialFromName_1(theName: Standard_CString, theMat: Graphic3d_NameOfMaterial): Standard_Boolean;
  MaterialFromName_2(theName: Standard_CString): Graphic3d_NameOfMaterial;
  Name(): Graphic3d_NameOfMaterial;
  RequestedName(): Graphic3d_NameOfMaterial;
  StringName(): TCollection_AsciiString;
  MaterialName_2(): Standard_CString;
  SetMaterialName(theName: TCollection_AsciiString): void;
  Reset(): void;
  Color(): Quantity_Color;
  SetColor(theColor: Quantity_Color): void;
  Transparency(): Standard_ShortReal;
  Alpha(): Standard_ShortReal;
  SetTransparency(theValue: Standard_ShortReal): void;
  SetAlpha(theValue: Standard_ShortReal): void;
  AmbientColor(): Quantity_Color;
  SetAmbientColor(theColor: Quantity_Color): void;
  DiffuseColor(): Quantity_Color;
  SetDiffuseColor(theColor: Quantity_Color): void;
  SpecularColor(): Quantity_Color;
  SetSpecularColor(theColor: Quantity_Color): void;
  EmissiveColor(): Quantity_Color;
  SetEmissiveColor(theColor: Quantity_Color): void;
  Shininess(): Standard_ShortReal;
  SetShininess(theValue: Standard_ShortReal): void;
  IncreaseShine(theDelta: Standard_ShortReal): void;
  RefractionIndex(): Standard_ShortReal;
  SetRefractionIndex(theValue: Standard_ShortReal): void;
  BSDF(): Graphic3d_BSDF;
  SetBSDF(theBSDF: Graphic3d_BSDF): void;
  PBRMaterial(): Graphic3d_PBRMaterial;
  SetPBRMaterial(thePBRMaterial: Graphic3d_PBRMaterial): void;
  ReflectionMode(theType: Graphic3d_TypeOfReflection): Standard_Boolean;
  MaterialType_2(): Graphic3d_TypeOfMaterial;
  MaterialType_3(theType: Graphic3d_TypeOfMaterial): Standard_Boolean;
  SetMaterialType(theType: Graphic3d_TypeOfMaterial): void;
  IsDifferent(theOther: Graphic3d_MaterialAspect): Standard_Boolean;
  IsEqual(theOther: Graphic3d_MaterialAspect): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  SetReflectionModeOff(theType: Graphic3d_TypeOfReflection): void;
}

  export declare class Graphic3d_MaterialAspect_1 extends Graphic3d_MaterialAspect {
    constructor();
  }

  export declare class Graphic3d_MaterialAspect_2 extends Graphic3d_MaterialAspect {
    constructor(theName: Graphic3d_NameOfMaterial);
  }

export declare class Graphic3d_ShaderAttribute extends Standard_Transient {
  constructor(theName: TCollection_AsciiString, theLocation: number)
  Name(): TCollection_AsciiString;
  Location(): number;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_ShaderObject extends Standard_Transient {
  IsDone(): Standard_Boolean;
  Path(): OSD_Path;
  Source(): TCollection_AsciiString;
  Type(): Graphic3d_TypeOfShaderObject;
  GetId(): TCollection_AsciiString;
  CreateFromFile(theType: Graphic3d_TypeOfShaderObject, thePath: TCollection_AsciiString): any;
  CreateFromSource(theType: Graphic3d_TypeOfShaderObject, theSource: TCollection_AsciiString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_ShaderVariable extends Standard_Transient {
  Name(): TCollection_AsciiString;
  IsDone(): Standard_Boolean;
  Value(): Graphic3d_ValueInterface;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_TextureParams extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  TextureUnit(): Graphic3d_TextureUnit;
  SetTextureUnit(theUnit: Graphic3d_TextureUnit): void;
  IsModulate(): Standard_Boolean;
  SetModulate(theToModulate: Standard_Boolean): void;
  IsRepeat(): Standard_Boolean;
  SetRepeat(theToRepeat: Standard_Boolean): void;
  Filter(): Graphic3d_TypeOfTextureFilter;
  SetFilter(theFilter: Graphic3d_TypeOfTextureFilter): void;
  AnisoFilter(): Graphic3d_LevelOfTextureAnisotropy;
  SetAnisoFilter(theLevel: Graphic3d_LevelOfTextureAnisotropy): void;
  Rotation(): Standard_ShortReal;
  SetRotation(theAngleDegrees: Standard_ShortReal): void;
  Scale(): Graphic3d_Vec2;
  SetScale(theScale: Graphic3d_Vec2): void;
  Translation(): Graphic3d_Vec2;
  SetTranslation(theVec: Graphic3d_Vec2): void;
  GenMode(): Graphic3d_TypeOfTextureMode;
  GenPlaneS(): Graphic3d_Vec4;
  GenPlaneT(): Graphic3d_Vec4;
  SetGenMode(theMode: Graphic3d_TypeOfTextureMode, thePlaneS: Graphic3d_Vec4, thePlaneT: Graphic3d_Vec4): void;
  BaseLevel(): Standard_Integer;
  MaxLevel(): Standard_Integer;
  SetLevelsRange(theFirstLevel: Standard_Integer, theSecondLevel: Standard_Integer): void;
  SamplerRevision(): number;
}

export declare class Graphic3d_ShaderProgram extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsDone(): Standard_Boolean;
  GetId(): TCollection_AsciiString;
  SetId(theId: TCollection_AsciiString): void;
  Header(): TCollection_AsciiString;
  SetHeader(theHeader: TCollection_AsciiString): void;
  AppendToHeader(theHeaderLine: TCollection_AsciiString): void;
  NbLightsMax(): Standard_Integer;
  SetNbLightsMax(theNbLights: Standard_Integer): void;
  NbClipPlanesMax(): Standard_Integer;
  SetNbClipPlanesMax(theNbPlanes: Standard_Integer): void;
  AttachShader(theShader: any): Standard_Boolean;
  DetachShader(theShader: any): Standard_Boolean;
  ShaderObjects(): Graphic3d_ShaderObjectList;
  Variables(): Graphic3d_ShaderVariableList;
  VertexAttributes(): Graphic3d_ShaderAttributeList;
  SetVertexAttributes(theAttributes: Graphic3d_ShaderAttributeList): void;
  NbFragmentOutputs(): Standard_Integer;
  SetNbFragmentOutputs(theNbOutputs: Standard_Integer): void;
  HasAlphaTest(): Standard_Boolean;
  SetAlphaTest(theAlphaTest: Standard_Boolean): void;
  HasDefaultSampler(): Standard_Boolean;
  SetDefaultSampler(theHasDefSampler: Standard_Boolean): void;
  HasWeightOitOutput(): Standard_Boolean;
  SetWeightOitOutput(theOutput: Standard_Boolean): void;
  IsPBR(): Standard_Boolean;
  SetPBR(theIsPBR: Standard_Boolean): void;
  TextureSetBits(): Standard_Integer;
  SetTextureSetBits(theBits: Standard_Integer): void;
  ClearVariables(): void;
  PushVariableFloat(theName: TCollection_AsciiString, theValue: number): Standard_Boolean;
  PushVariableVec2(theName: TCollection_AsciiString, theValue: Graphic3d_Vec2): Standard_Boolean;
  PushVariableVec3(theName: TCollection_AsciiString, theValue: Graphic3d_Vec3): Standard_Boolean;
  PushVariableVec4(theName: TCollection_AsciiString, theValue: Graphic3d_Vec4): Standard_Boolean;
  PushVariableInt(theName: TCollection_AsciiString, theValue: number): Standard_Boolean;
  PushVariableVec2i(theName: TCollection_AsciiString, theValue: Graphic3d_Vec2i): Standard_Boolean;
  PushVariableVec3i(theName: TCollection_AsciiString, theValue: Graphic3d_Vec3i): Standard_Boolean;
  PushVariableVec4i(theName: TCollection_AsciiString, theValue: Graphic3d_Vec4i): Standard_Boolean;
  ShadersFolder(): TCollection_AsciiString;
}

export declare class Graphic3d_TextureRoot extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  TexturesFolder(): TCollection_AsciiString;
  IsDone(): Standard_Boolean;
  Path(): OSD_Path;
  Type(): Graphic3d_TypeOfTexture;
  GetId(): TCollection_AsciiString;
  Revision(): Standard_Size;
  UpdateRevision(): void;
  GetCompressedImage(theSupported: any): any;
  GetImage_1(theSupported: any): any;
  GetParams(): any;
  IsColorMap(): Standard_Boolean;
  SetColorMap(theIsColor: Standard_Boolean): void;
  IsTopDown(): Standard_Boolean;
}

export declare class Graphic3d_TextureMap extends Graphic3d_TextureRoot {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  EnableSmooth(): void;
  IsSmoothed(): Standard_Boolean;
  DisableSmooth(): void;
  EnableModulate(): void;
  DisableModulate(): void;
  IsModulate(): Standard_Boolean;
  EnableRepeat(): void;
  DisableRepeat(): void;
  IsRepeat(): Standard_Boolean;
  AnisoFilter(): Graphic3d_LevelOfTextureAnisotropy;
  SetAnisoFilter(theLevel: Graphic3d_LevelOfTextureAnisotropy): void;
}

export declare class Graphic3d_TextureSet extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsEmpty(): Standard_Boolean;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  First(): any;
  SetFirst(theTexture: any): void;
  Value(theIndex: Standard_Integer): any;
  SetValue(theIndex: Standard_Integer, theTexture: any): void;
}

  export declare class Graphic3d_TextureSet_1 extends Graphic3d_TextureSet {
    constructor();
  }

  export declare class Graphic3d_TextureSet_2 extends Graphic3d_TextureSet {
    constructor(theNbTextures: Standard_Integer);
  }

  export declare class Graphic3d_TextureSet_3 extends Graphic3d_TextureSet {
    constructor(theTexture: any);
  }

export declare class Graphic3d_Aspects extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  InteriorStyle(): Aspect_InteriorStyle;
  SetInteriorStyle(theStyle: Aspect_InteriorStyle): void;
  ShadingModel(): Graphic3d_TypeOfShadingModel;
  SetShadingModel(theShadingModel: Graphic3d_TypeOfShadingModel): void;
  AlphaMode(): Graphic3d_AlphaMode;
  AlphaCutoff(): Standard_ShortReal;
  SetAlphaMode(theMode: Graphic3d_AlphaMode, theAlphaCutoff: Standard_ShortReal): void;
  ColorRGBA(): Quantity_ColorRGBA;
  Color(): Quantity_Color;
  SetColor(theColor: Quantity_Color): void;
  InteriorColor(): Quantity_Color;
  InteriorColorRGBA(): Quantity_ColorRGBA;
  SetInteriorColor_1(theColor: Quantity_Color): void;
  SetInteriorColor_2(theColor: Quantity_ColorRGBA): void;
  BackInteriorColor(): Quantity_Color;
  BackInteriorColorRGBA(): Quantity_ColorRGBA;
  SetBackInteriorColor_1(theColor: Quantity_Color): void;
  SetBackInteriorColor_2(theColor: Quantity_ColorRGBA): void;
  FrontMaterial(): Graphic3d_MaterialAspect;
  ChangeFrontMaterial(): Graphic3d_MaterialAspect;
  SetFrontMaterial(theMaterial: Graphic3d_MaterialAspect): void;
  BackMaterial(): Graphic3d_MaterialAspect;
  ChangeBackMaterial(): Graphic3d_MaterialAspect;
  SetBackMaterial(theMaterial: Graphic3d_MaterialAspect): void;
  ToSuppressBackFaces(): boolean;
  SetSuppressBackFaces(theToSuppress: boolean): void;
  BackFace(): boolean;
  AllowBackFace(): void;
  SuppressBackFace(): void;
  Distinguish(): boolean;
  SetDistinguish(toDistinguish: boolean): void;
  SetDistinguishOn(): void;
  SetDistinguishOff(): void;
  ShaderProgram(): any;
  SetShaderProgram(theProgram: any): void;
  TextureSet(): any;
  SetTextureSet(theTextures: any): void;
  TextureMap(): any;
  SetTextureMap(theTexture: any): void;
  ToMapTexture(): boolean;
  TextureMapState(): boolean;
  SetTextureMapOn_1(theToMap: boolean): void;
  SetTextureMapOn_2(): void;
  SetTextureMapOff(): void;
  PolygonOffset(): Graphic3d_PolygonOffset;
  SetPolygonOffset(theOffset: Graphic3d_PolygonOffset): void;
  PolygonOffsets(theMode: Standard_Integer, theFactor: Standard_ShortReal, theUnits: Standard_ShortReal): void;
  SetPolygonOffsets(theMode: Standard_Integer, theFactor: Standard_ShortReal, theUnits: Standard_ShortReal): void;
  LineType(): Aspect_TypeOfLine;
  SetLineType(theType: Aspect_TypeOfLine): void;
  LinePattern(): uint16_t;
  SetLinePattern(thePattern: uint16_t): void;
  LineStippleFactor(): uint16_t;
  SetLineStippleFactor(theFactor: uint16_t): void;
  LineWidth(): Standard_ShortReal;
  SetLineWidth(theWidth: Standard_ShortReal): void;
  DefaultLinePatternForType(theType: Aspect_TypeOfLine): uint16_t;
  DefaultLineTypeForPattern(thePattern: uint16_t): Aspect_TypeOfLine;
  MarkerType(): Aspect_TypeOfMarker;
  SetMarkerType(theType: Aspect_TypeOfMarker): void;
  MarkerScale(): Standard_ShortReal;
  SetMarkerScale(theScale: Standard_ShortReal): void;
  MarkerImage(): any;
  SetMarkerImage(theImage: any): void;
  IsMarkerSprite(): boolean;
  TextFont(): any;
  SetTextFont(theFont: any): void;
  TextFontAspect(): Font_FontAspect;
  SetTextFontAspect(theFontAspect: Font_FontAspect): void;
  TextDisplayType(): Aspect_TypeOfDisplayText;
  SetTextDisplayType(theType: Aspect_TypeOfDisplayText): void;
  ColorSubTitleRGBA(): Quantity_ColorRGBA;
  ColorSubTitle(): Quantity_Color;
  SetColorSubTitle_1(theColor: Quantity_Color): void;
  SetColorSubTitle_2(theColor: Quantity_ColorRGBA): void;
  IsTextZoomable(): boolean;
  SetTextZoomable(theFlag: boolean): void;
  TextStyle(): Aspect_TypeOfStyleText;
  SetTextStyle(theStyle: Aspect_TypeOfStyleText): void;
  TextAngle(): Standard_ShortReal;
  SetTextAngle(theAngle: Standard_ShortReal): void;
  ToDrawEdges(): boolean;
  SetDrawEdges(theToDraw: boolean): void;
  SetEdgeOn(): void;
  SetEdgeOff(): void;
  EdgeColor(): Quantity_Color;
  EdgeColorRGBA(): Quantity_ColorRGBA;
  SetEdgeColor_1(theColor: Quantity_Color): void;
  SetEdgeColor_2(theColor: Quantity_ColorRGBA): void;
  EdgeLineType(): Aspect_TypeOfLine;
  SetEdgeLineType(theType: Aspect_TypeOfLine): void;
  EdgeWidth(): Standard_ShortReal;
  SetEdgeWidth(theWidth: Standard_Real): void;
  ToSkipFirstEdge(): boolean;
  SetSkipFirstEdge(theToSkipFirstEdge: boolean): void;
  ToDrawSilhouette(): boolean;
  SetDrawSilhouette(theToDraw: boolean): void;
  HatchStyle(): any;
  SetHatchStyle_1(theStyle: any): void;
  SetHatchStyle_2(theStyle: Aspect_HatchStyle): void;
  IsEqual(theOther: Graphic3d_Aspects): boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_AspectLine3d extends Graphic3d_Aspects {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Type(): Aspect_TypeOfLine;
  SetType(theType: Aspect_TypeOfLine): void;
  Width(): Standard_ShortReal;
  SetWidth_1(theWidth: Standard_Real): void;
  SetWidth_2(theWidth: Standard_ShortReal): void;
}

  export declare class Graphic3d_AspectLine3d_1 extends Graphic3d_AspectLine3d {
    constructor();
  }

  export declare class Graphic3d_AspectLine3d_2 extends Graphic3d_AspectLine3d {
    constructor(theColor: Quantity_Color, theType: Aspect_TypeOfLine, theWidth: Standard_Real);
  }

export declare class Graphic3d_AspectFillArea3d extends Graphic3d_Aspects {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Edge(): boolean;
}

  export declare class Graphic3d_AspectFillArea3d_1 extends Graphic3d_AspectFillArea3d {
    constructor();
  }

  export declare class Graphic3d_AspectFillArea3d_2 extends Graphic3d_AspectFillArea3d {
    constructor(theInterior: Aspect_InteriorStyle, theInteriorColor: Quantity_Color, theEdgeColor: Quantity_Color, theEdgeLineType: Aspect_TypeOfLine, theEdgeWidth: Standard_Real, theFrontMaterial: Graphic3d_MaterialAspect, theBackMaterial: Graphic3d_MaterialAspect);
  }

export declare class Graphic3d_AspectText3d extends Graphic3d_Aspects {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Color(): Quantity_Color;
  ColorRGBA(): Quantity_ColorRGBA;
  SetColor_1(theColor: Quantity_Color): void;
  SetColor_2(theColor: Quantity_ColorRGBA): void;
  Font(): TCollection_AsciiString;
  SetFont_1(theFont: TCollection_AsciiString): void;
  SetFont_2(theFont: Standard_CString): void;
  Style(): Aspect_TypeOfStyleText;
  SetStyle(theStyle: Aspect_TypeOfStyleText): void;
  DisplayType(): Aspect_TypeOfDisplayText;
  SetDisplayType(theDisplayType: Aspect_TypeOfDisplayText): void;
  GetTextZoomable(): boolean;
  GetTextAngle(): Standard_ShortReal;
  SetTextAngle(theAngle: Standard_Real): void;
  GetTextFontAspect(): Font_FontAspect;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Graphic3d_AspectText3d_1 extends Graphic3d_AspectText3d {
    constructor();
  }

  export declare class Graphic3d_AspectText3d_2 extends Graphic3d_AspectText3d {
    constructor(theColor: Quantity_Color, theFont: Standard_CString, theExpansionFactor: Standard_Real, theSpace: Standard_Real, theStyle: Aspect_TypeOfStyleText, theDisplayType: Aspect_TypeOfDisplayText);
  }

export declare class Graphic3d_AspectMarker3d extends Graphic3d_Aspects {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Scale(): Standard_ShortReal;
  SetScale_1(theScale: Standard_ShortReal): void;
  SetScale_2(theScale: Standard_Real): void;
  Type(): Aspect_TypeOfMarker;
  SetType(theType: Aspect_TypeOfMarker): void;
  GetTextureSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  GetMarkerImage(): any;
  SetBitMap(theWidth: Standard_Integer, theHeight: Standard_Integer, theTexture: any): void;
}

  export declare class Graphic3d_AspectMarker3d_1 extends Graphic3d_AspectMarker3d {
    constructor();
  }

  export declare class Graphic3d_AspectMarker3d_2 extends Graphic3d_AspectMarker3d {
    constructor(theType: Aspect_TypeOfMarker, theColor: Quantity_Color, theScale: Standard_Real);
  }

  export declare class Graphic3d_AspectMarker3d_3 extends Graphic3d_AspectMarker3d {
    constructor(theColor: Quantity_Color, theWidth: Standard_Integer, theHeight: Standard_Integer, theTextureBitmap: any);
  }

  export declare class Graphic3d_AspectMarker3d_4 extends Graphic3d_AspectMarker3d {
    constructor(theTextureImage: any);
  }

export declare class Graphic3d_Vertex {
  SetCoord_1(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal): void;
  SetCoord_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  Coord_1(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal): void;
  Coord_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  X(): Standard_ShortReal;
  Y(): Standard_ShortReal;
  Z(): Standard_ShortReal;
  Distance(theOther: Graphic3d_Vertex): Standard_ShortReal;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Graphic3d_Vertex_1 extends Graphic3d_Vertex {
    constructor();
  }

  export declare class Graphic3d_Vertex_2 extends Graphic3d_Vertex {
    constructor(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal);
  }

  export declare class Graphic3d_Vertex_3 extends Graphic3d_Vertex {
    constructor(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real);
  }

export declare class Graphic3d_Buffer extends NCollection_Buffer {
  constructor(theAlloc: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NbMaxElements(): Standard_Integer;
  AttributesArray(): Graphic3d_Attribute;
  Attribute(theAttribIndex: Standard_Integer): Graphic3d_Attribute;
  ChangeAttribute(theAttribIndex: Standard_Integer): Graphic3d_Attribute;
  FindAttribute(theAttrib: Graphic3d_TypeOfAttribute): Standard_Integer;
  AttributeOffset(theAttribIndex: Standard_Integer): Standard_Integer;
  Data_1(theAttribIndex: Standard_Integer): Standard_Byte;
  ChangeData_1(theAttribIndex: Standard_Integer): Standard_Byte;
  value(theElem: Standard_Integer): Standard_Byte;
  changeValue(theElem: Standard_Integer): Standard_Byte;
  ChangeAttributeData(theAttrib: Graphic3d_TypeOfAttribute, theAttribIndex: Standard_Integer, theAttribStride: Standard_Size): Standard_Byte;
  AttributeData(theAttrib: Graphic3d_TypeOfAttribute, theAttribIndex: Standard_Integer, theAttribStride: Standard_Size): Standard_Byte;
  release(): void;
  Init_1(theNbElems: Standard_Integer, theAttribs: Graphic3d_Attribute, theNbAttribs: Standard_Integer): boolean;
  Init_2(theNbElems: Standard_Integer, theAttribs: Graphic3d_Array1OfAttribute): boolean;
  IsInterleaved(): Standard_Boolean;
  IsMutable(): Standard_Boolean;
  InvalidatedRange(): Graphic3d_BufferRange;
  Validate(): void;
  Invalidate(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_IndexBuffer extends Graphic3d_Buffer {
  constructor(theAlloc: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  InitInt32(theNbElems: Standard_Integer): boolean;
  Index(theIndex: Standard_Integer): Standard_Integer;
  SetIndex(theIndex: Standard_Integer, theValue: Standard_Integer): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_BoundBuffer extends NCollection_Buffer {
  constructor(theAlloc: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Init(theNbBounds: Standard_Integer, theHasColors: Standard_Boolean): boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_Group extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Clear(theUpdateStructureMgr: Standard_Boolean): void;
  Remove(): void;
  Aspects(): any;
  SetGroupPrimitivesAspect(theAspect: any): void;
  SetPrimitivesAspect(theAspect: any): void;
  SynchronizeAspects(): void;
  ReplaceAspects(theMap: Graphic3d_MapOfAspectsToAspects): void;
  AddText(theTextParams: any, theToEvalMinMax: Standard_Boolean): void;
  AddPrimitiveArray_1(theType: Graphic3d_TypeOfPrimitiveArray, theIndices: any, theAttribs: any, theBounds: any, theToEvalMinMax: Standard_Boolean): void;
  AddPrimitiveArray_2(thePrim: any, theToEvalMinMax: Standard_Boolean): void;
  Marker(thePoint: Graphic3d_Vertex, theToEvalMinMax: Standard_Boolean): void;
  SetStencilTestOptions(theIsEnabled: Standard_Boolean): void;
  SetFlippingOptions(theIsEnabled: Standard_Boolean, theRefPlane: gp_Ax2): void;
  ContainsFacet(): boolean;
  IsDeleted(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  MinMaxValues(theXMin: Standard_Real, theYMin: Standard_Real, theZMin: Standard_Real, theXMax: Standard_Real, theYMax: Standard_Real, theZMax: Standard_Real): void;
  SetMinMaxValues(theXMin: Standard_Real, theYMin: Standard_Real, theZMin: Standard_Real, theXMax: Standard_Real, theYMax: Standard_Real, theZMax: Standard_Real): void;
  BoundingBox(): Graphic3d_BndBox4f;
  ChangeBoundingBox(): Graphic3d_BndBox4f;
  Structure(): any;
  SetClosed(theIsClosed: boolean): void;
  IsClosed(): boolean;
  Text_1(AText: Standard_CString, APoint: Graphic3d_Vertex, AHeight: Standard_Real, AAngle: Standard_Real, ATp: Graphic3d_TextPath, AHta: Graphic3d_HorizontalTextAlignment, AVta: Graphic3d_VerticalTextAlignment, EvalMinMax: Standard_Boolean): void;
  Text_2(AText: Standard_CString, APoint: Graphic3d_Vertex, AHeight: Standard_Real, EvalMinMax: Standard_Boolean): void;
  Text_3(AText: TCollection_ExtendedString, APoint: Graphic3d_Vertex, AHeight: Standard_Real, AAngle: Standard_Real, ATp: Graphic3d_TextPath, AHta: Graphic3d_HorizontalTextAlignment, AVta: Graphic3d_VerticalTextAlignment, EvalMinMax: Standard_Boolean): void;
  Text_4(AText: TCollection_ExtendedString, APoint: Graphic3d_Vertex, AHeight: Standard_Real, EvalMinMax: Standard_Boolean): void;
  Text_5(theTextUtf: Standard_CString, theOrientation: gp_Ax2, theHeight: Standard_Real, theAngle: Standard_Real, theTp: Graphic3d_TextPath, theHTA: Graphic3d_HorizontalTextAlignment, theVTA: Graphic3d_VerticalTextAlignment, theToEvalMinMax: Standard_Boolean, theHasOwnAnchor: Standard_Boolean): void;
  Text_6(theText: TCollection_ExtendedString, theOrientation: gp_Ax2, theHeight: Standard_Real, theAngle: Standard_Real, theTp: Graphic3d_TextPath, theHTA: Graphic3d_HorizontalTextAlignment, theVTA: Graphic3d_VerticalTextAlignment, theToEvalMinMax: Standard_Boolean, theHasOwnAnchor: Standard_Boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_PresentationAttributes extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Method(): Aspect_TypeOfHighlightMethod;
  SetMethod(theMethod: Aspect_TypeOfHighlightMethod): void;
  ColorRGBA(): Quantity_ColorRGBA;
  Color(): Quantity_Color;
  SetColor(theColor: Quantity_Color): void;
  Transparency(): Standard_ShortReal;
  SetTransparency(theTranspCoef: Standard_ShortReal): void;
  ZLayer(): Graphic3d_ZLayerId;
  SetZLayer(theLayer: Graphic3d_ZLayerId): void;
  DisplayMode(): Standard_Integer;
  SetDisplayMode(theMode: Standard_Integer): void;
  BasicFillAreaAspect(): any;
  SetBasicFillAreaAspect(theAspect: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_ClipPlane extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetEquation_1(thePlane: gp_Pln): void;
  SetEquation_2(theEquation: Graphic3d_Vec4d): void;
  GetEquation(): Graphic3d_Vec4d;
  ReversedEquation(): Graphic3d_Vec4d;
  IsOn(): Standard_Boolean;
  SetOn(theIsOn: Standard_Boolean): void;
  SetCapping(theIsOn: Standard_Boolean): void;
  IsCapping(): Standard_Boolean;
  ToPlane(): gp_Pln;
  Clone(): any;
  IsChain(): Standard_Boolean;
  ChainPreviousPlane(): any;
  ChainNextPlane(): any;
  NbChainNextPlanes(): Standard_Integer;
  SetChainNextPlane(thePlane: any): void;
  CappingColor(): Quantity_Color;
  SetCappingColor(theColor: Quantity_Color): void;
  SetCappingMaterial(theMat: Graphic3d_MaterialAspect): void;
  CappingMaterial(): Graphic3d_MaterialAspect;
  SetCappingTexture(theTexture: any): void;
  CappingTexture(): any;
  SetCappingHatch(theStyle: Aspect_HatchStyle): void;
  CappingHatch(): Aspect_HatchStyle;
  SetCappingCustomHatch(theStyle: any): void;
  CappingCustomHatch(): any;
  SetCappingHatchOn(): void;
  SetCappingHatchOff(): void;
  IsHatchOn(): Standard_Boolean;
  GetId(): TCollection_AsciiString;
  CappingAspect(): any;
  SetCappingAspect(theAspect: any): void;
  ToUseObjectMaterial(): boolean;
  SetUseObjectMaterial(theToUse: boolean): void;
  ToUseObjectTexture(): boolean;
  SetUseObjectTexture(theToUse: boolean): void;
  ToUseObjectShader(): boolean;
  SetUseObjectShader(theToUse: boolean): void;
  ToUseObjectProperties(): boolean;
  ProbePoint(thePoint: Graphic3d_Vec4d): Graphic3d_ClipState;
  ProbeBox(theBox: Graphic3d_BndBox3d): Graphic3d_ClipState;
  ProbeBoxTouch(theBox: Graphic3d_BndBox3d): Standard_Boolean;
  ProbePointHalfspace(thePoint: Graphic3d_Vec4d): Graphic3d_ClipState;
  ProbeBoxHalfspace(theBox: Graphic3d_BndBox3d): Graphic3d_ClipState;
  IsPointOutHalfspace(thePoint: Graphic3d_Vec4d): boolean;
  IsBoxFullOutHalfspace(theBox: Graphic3d_BndBox3d): boolean;
  ProbeBoxMaxPointHalfspace(theBox: Graphic3d_BndBox3d): Graphic3d_ClipState;
  IsBoxFullInHalfspace(theBox: Graphic3d_BndBox3d): boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  MCountEquation(): number;
  MCountAspect(): number;
}

  export declare class Graphic3d_ClipPlane_1 extends Graphic3d_ClipPlane {
    constructor();
  }

  export declare class Graphic3d_ClipPlane_2 extends Graphic3d_ClipPlane {
    constructor(theOther: Graphic3d_ClipPlane);
  }

  export declare class Graphic3d_ClipPlane_3 extends Graphic3d_ClipPlane {
    constructor(theEquation: Graphic3d_Vec4d);
  }

  export declare class Graphic3d_ClipPlane_4 extends Graphic3d_ClipPlane {
    constructor(thePlane: gp_Pln);
  }

export declare class Graphic3d_SequenceOfHClipPlane extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ToOverrideGlobal(): Standard_Boolean;
  SetOverrideGlobal(theToOverride: Standard_Boolean): void;
  IsEmpty(): boolean;
  Size(): Standard_Integer;
  Append(theItem: any): boolean;
  Remove_1(theItem: any): boolean;
  Remove_2(theItem: any): void;
  Clear(): void;
  First(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_ViewAffinity extends Standard_Transient {
  constructor()
  IsVisible(theViewId: Standard_Integer): boolean;
  SetVisible_1(theIsVisible: Standard_Boolean): void;
  SetVisible_2(theViewId: Standard_Integer, theIsVisible: boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_CameraTile {
  constructor()
  IsValid(): boolean;
  OffsetLowerLeft(): Graphic3d_Vec2i;
  Cropped(): Graphic3d_CameraTile;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_WorldViewProjState {
  IsValid(): Standard_Boolean;
  Reset(): void;
  Initialize_1(theProjectionState: Standard_Size, theWorldViewState: Standard_Size, theCamera: Standard_Transient): void;
  Initialize_2(theCamera: Standard_Transient): void;
  ProjectionState(): Standard_Size;
  WorldViewState(): Standard_Size;
  IsProjectionChanged(theState: Graphic3d_WorldViewProjState): Standard_Boolean;
  IsWorldViewChanged(theState: Graphic3d_WorldViewProjState): Standard_Boolean;
  IsChanged(theState: Graphic3d_WorldViewProjState): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, a1: Standard_Integer): void;
}

  export declare class Graphic3d_WorldViewProjState_1 extends Graphic3d_WorldViewProjState {
    constructor();
  }

  export declare class Graphic3d_WorldViewProjState_2 extends Graphic3d_WorldViewProjState {
    constructor(theProjectionState: Standard_Size, theWorldViewState: Standard_Size, theCamera: Standard_Transient);
  }

export declare class Graphic3d_Camera extends Standard_Transient {
  CopyMappingData(theOtherCamera: any): void;
  CopyOrientationData(theOtherCamera: any): void;
  Copy(theOther: any): void;
  Direction(): gp_Dir;
  SetDirectionFromEye(theDir: gp_Dir): void;
  SetDirection(theDir: gp_Dir): void;
  Up(): gp_Dir;
  SetUp(theUp: gp_Dir): void;
  OrthogonalizeUp(): void;
  OrthogonalizedUp(): gp_Dir;
  SideRight(): gp_Dir;
  Eye(): gp_Pnt;
  MoveEyeTo(theEye: gp_Pnt): void;
  SetEyeAndCenter(theEye: gp_Pnt, theCenter: gp_Pnt): void;
  SetEye(theEye: gp_Pnt): void;
  Center(): gp_Pnt;
  SetCenter(theCenter: gp_Pnt): void;
  Distance(): Standard_Real;
  SetDistance(theDistance: Standard_Real): void;
  Scale(): Standard_Real;
  SetScale(theScale: Standard_Real): void;
  AxialScale(): gp_XYZ;
  SetAxialScale(theAxialScale: gp_XYZ): void;
  SetProjectionType(theProjection: any): void;
  ProjectionType(): any;
  IsOrthographic(): Standard_Boolean;
  IsStereo(): Standard_Boolean;
  SetFOVy(theFOVy: Standard_Real): void;
  FOVy(): Standard_Real;
  FOVx(): Standard_Real;
  FOV2d(): Standard_Real;
  SetFOV2d(theFOV: Standard_Real): void;
  ZFitAll_1(theScaleFactor: Standard_Real, theMinMax: Bnd_Box, theGraphicBB: Bnd_Box, theZNear: Standard_Real, theZFar: Standard_Real): boolean;
  ZFitAll_2(theScaleFactor: Standard_Real, theMinMax: Bnd_Box, theGraphicBB: Bnd_Box): void;
  SetZRange(theZNear: Standard_Real, theZFar: Standard_Real): void;
  ZNear(): Standard_Real;
  ZFar(): Standard_Real;
  SetAspect(theAspect: Standard_Real): void;
  Aspect(): Standard_Real;
  SetZFocus(theType: any, theZFocus: Standard_Real): void;
  ZFocus(): Standard_Real;
  ZFocusType(): any;
  SetIOD(theType: any, theIOD: Standard_Real): void;
  IOD(): Standard_Real;
  GetIODType(): any;
  Tile(): Graphic3d_CameraTile;
  SetTile(theTile: Graphic3d_CameraTile): void;
  Transform(theTrsf: gp_Trsf): void;
  ViewDimensions_1(): gp_XYZ;
  ViewDimensions_2(theZValue: Standard_Real): gp_XYZ;
  NDC2dOffsetX(): Standard_Real;
  NDC2dOffsetY(): Standard_Real;
  Frustum(theLeft: gp_Pln, theRight: gp_Pln, theBottom: gp_Pln, theTop: gp_Pln, theNear: gp_Pln, theFar: gp_Pln): void;
  Project(thePnt: gp_Pnt): gp_Pnt;
  UnProject(thePnt: gp_Pnt): gp_Pnt;
  ConvertView2Proj(thePnt: gp_Pnt): gp_Pnt;
  ConvertProj2View(thePnt: gp_Pnt): gp_Pnt;
  ConvertWorld2View(thePnt: gp_Pnt): gp_Pnt;
  ConvertView2World(thePnt: gp_Pnt): gp_Pnt;
  WorldViewProjState(): Graphic3d_WorldViewProjState;
  ProjectionState(): Standard_Size;
  WorldViewState(): Standard_Size;
  OrientationMatrix(): Graphic3d_Mat4d;
  OrientationMatrixF(): Graphic3d_Mat4;
  ProjectionMatrix(): Graphic3d_Mat4d;
  ProjectionMatrixF(): Graphic3d_Mat4;
  ProjectionStereoLeft(): Graphic3d_Mat4d;
  ProjectionStereoLeftF(): Graphic3d_Mat4;
  ProjectionStereoRight(): Graphic3d_Mat4d;
  ProjectionStereoRightF(): Graphic3d_Mat4;
  InvalidateProjection(): void;
  InvalidateOrientation(): void;
  StereoProjection(theProjL: Graphic3d_Mat4d, theHeadToEyeL: Graphic3d_Mat4d, theProjR: Graphic3d_Mat4d, theHeadToEyeR: Graphic3d_Mat4d): void;
  StereoProjectionF(theProjL: Graphic3d_Mat4, theHeadToEyeL: Graphic3d_Mat4, theProjR: Graphic3d_Mat4, theHeadToEyeR: Graphic3d_Mat4): void;
  ResetCustomProjection(): void;
  IsCustomStereoFrustum(): boolean;
  SetCustomStereoFrustums(theFrustumL: Aspect_FrustumLRBT<Standard_Real>, theFrustumR: Aspect_FrustumLRBT<Standard_Real>): void;
  IsCustomStereoProjection(): boolean;
  SetCustomStereoProjection(theProjL: Graphic3d_Mat4d, theHeadToEyeL: Graphic3d_Mat4d, theProjR: Graphic3d_Mat4d, theHeadToEyeR: Graphic3d_Mat4d): void;
  IsCustomMonoProjection(): boolean;
  SetCustomMonoProjection(theProj: Graphic3d_Mat4d): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  FrustumPoints(thePoints: NCollection_Array1<Graphic3d_Vec3d>, theModelWorld: Graphic3d_Mat4d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_Camera_1 extends Graphic3d_Camera {
    constructor();
  }

  export declare class Graphic3d_Camera_2 extends Graphic3d_Camera {
    constructor(theOther: any);
  }

export declare class Graphic3d_TransformPers extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsZoomOrRotate_1(theMode: Graphic3d_TransModeFlags): Standard_Boolean;
  IsTrihedronOr2d_1(theMode: Graphic3d_TransModeFlags): Standard_Boolean;
  FromDeprecatedParams(theFlag: Graphic3d_TransModeFlags, thePoint: gp_Pnt): any;
  IsZoomOrRotate_2(): Standard_Boolean;
  IsTrihedronOr2d_2(): Standard_Boolean;
  Mode(): Graphic3d_TransModeFlags;
  Flags(): Graphic3d_TransModeFlags;
  SetPersistence_1(theMode: Graphic3d_TransModeFlags, thePnt: gp_Pnt): void;
  SetPersistence_2(theMode: Graphic3d_TransModeFlags, theCorner: Aspect_TypeOfTriedronPosition, theOffset: Graphic3d_Vec2i): void;
  AnchorPoint(): gp_Pnt;
  SetAnchorPoint(thePnt: gp_Pnt): void;
  Corner2d(): Aspect_TypeOfTriedronPosition;
  SetCorner2d(thePos: Aspect_TypeOfTriedronPosition): void;
  Offset2d(): Graphic3d_Vec2i;
  SetOffset2d(theOffset: Graphic3d_Vec2i): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Graphic3d_TransformPers_1 extends Graphic3d_TransformPers {
    constructor(theMode: Graphic3d_TransModeFlags);
  }

  export declare class Graphic3d_TransformPers_2 extends Graphic3d_TransformPers {
    constructor(theMode: Graphic3d_TransModeFlags, thePnt: gp_Pnt);
  }

  export declare class Graphic3d_TransformPers_3 extends Graphic3d_TransformPers {
    constructor(theMode: Graphic3d_TransModeFlags, theCorner: Aspect_TypeOfTriedronPosition, theOffset: Graphic3d_Vec2i);
  }

export declare class Graphic3d_CStructure extends Standard_Transient {
  GraphicDriver(): any;
  Groups(): Graphic3d_SequenceOfGroup;
  Transformation(): any;
  SetTransformation(theTrsf: any): void;
  TransformPersistence(): any;
  SetTransformPersistence(theTrsfPers: any): void;
  ClipPlanes(): any;
  SetClipPlanes(thePlanes: any): void;
  BoundingBox(): Graphic3d_BndBox3d;
  ChangeBoundingBox(): Graphic3d_BndBox3d;
  IsVisible_1(): boolean;
  IsVisible_2(theViewId: Standard_Integer): boolean;
  SetZLayer(theLayerIndex: Graphic3d_ZLayerId): void;
  ZLayer(): Graphic3d_ZLayerId;
  HighlightStyle(): any;
  IsCulled(): Standard_Boolean;
  SetCulled(theIsCulled: Standard_Boolean): void;
  MarkAsNotCulled(): void;
  BndBoxClipCheck(): Standard_Boolean;
  SetBndBoxClipCheck(theBndBoxClipCheck: Standard_Boolean): void;
  IsAlwaysRendered(): Standard_Boolean;
  OnVisibilityChanged(): void;
  Clear(): void;
  Connect(theStructure: Graphic3d_CStructure): void;
  Disconnect(theStructure: Graphic3d_CStructure): void;
  GraphicHighlight(theStyle: any): void;
  GraphicUnhighlight(): void;
  ShadowLink(theManager: any): any;
  NewGroup(theStruct: any): any;
  RemoveGroup(theGroup: any): void;
  updateLayerTransformation(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_Structure extends Standard_Transient {
  constructor(theManager: any, theLinkPrs: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Clear(WithDestruction: Standard_Boolean): void;
  Display(): void;
  DisplayPriority(): Standard_Integer;
  Erase(): void;
  Highlight(theStyle: any, theToUpdateMgr: Standard_Boolean): void;
  Remove_1(): void;
  CalculateBoundBox(): void;
  SetInfiniteState(theToSet: Standard_Boolean): void;
  SetDisplayPriority(Priority: Standard_Integer): void;
  ResetDisplayPriority(): void;
  SetZLayer(theLayerId: Graphic3d_ZLayerId): void;
  GetZLayer(): Graphic3d_ZLayerId;
  SetClipPlanes(thePlanes: any): void;
  ClipPlanes(): any;
  SetVisible(AValue: Standard_Boolean): void;
  SetVisual(AVisual: Graphic3d_TypeOfStructure): void;
  SetZoomLimit(LimitInf: Standard_Real, LimitSup: Standard_Real): void;
  SetIsForHighlight(isForHighlight: Standard_Boolean): void;
  UnHighlight(): void;
  Compute(): void;
  computeHLR(theProjector: any, theStructure: any): void;
  ReCompute_1(): void;
  ReCompute_2(aProjector: any): void;
  ContainsFacet(): Standard_Boolean;
  Groups(): Graphic3d_SequenceOfGroup;
  NumberOfGroups(): Standard_Integer;
  NewGroup(): any;
  CurrentGroup(): any;
  HighlightStyle(): any;
  IsDeleted(): Standard_Boolean;
  IsDisplayed(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  IsInfinite(): Standard_Boolean;
  IsHighlighted(): Standard_Boolean;
  IsTransformed(): Standard_Boolean;
  IsVisible(): Standard_Boolean;
  MinMaxValues(theToIgnoreInfiniteFlag: Standard_Boolean): Bnd_Box;
  Visual(): Graphic3d_TypeOfStructure;
  AcceptConnection(theStructure1: Graphic3d_Structure, theStructure2: Graphic3d_Structure, theType: Graphic3d_TypeOfConnection): Standard_Boolean;
  Ancestors(SG: Graphic3d_MapOfStructure): void;
  Connect_1(theStructure: Graphic3d_Structure, theType: Graphic3d_TypeOfConnection, theWithCheck: Standard_Boolean): void;
  Connect_2(thePrs: any): void;
  Descendants(SG: Graphic3d_MapOfStructure): void;
  Disconnect(theStructure: Graphic3d_Structure): void;
  Remove_2(thePrs: any): void;
  DisconnectAll(AType: Graphic3d_TypeOfConnection): void;
  RemoveAll(): void;
  Network(theStructure: Graphic3d_Structure, theType: Graphic3d_TypeOfConnection, theSet: NCollection_Map<Graphic3d_Structure >): void;
  SetOwner(theOwner: Standard_Address): void;
  Owner(): Standard_Address;
  SetHLRValidation(theFlag: Standard_Boolean): void;
  HLRValidation(): Standard_Boolean;
  Transformation(): any;
  SetTransformation(theTrsf: any): void;
  Transform(theTrsf: any): void;
  SetTransformPersistence(theTrsfPers: any): void;
  TransformPersistence(): any;
  SetMutable(theIsMutable: Standard_Boolean): void;
  IsMutable(): Standard_Boolean;
  ComputeVisual(): Graphic3d_TypeOfStructure;
  GraphicClear(WithDestruction: Standard_Boolean): void;
  GraphicConnect(theDaughter: any): void;
  GraphicDisconnect(theDaughter: any): void;
  GraphicTransform(theTrsf: any): void;
  Identification(): Standard_Integer;
  PrintNetwork(AStructure: any, AType: Graphic3d_TypeOfConnection): void;
  Remove_3(thePtr: Graphic3d_Structure, theType: Graphic3d_TypeOfConnection): void;
  SetComputeVisual(theVisual: Graphic3d_TypeOfStructure): void;
  Transforms(theTrsf: gp_Trsf, theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theNewX: Standard_Real, theNewY: Standard_Real, theNewZ: Standard_Real): void;
  CStructure(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Aspect_GenId {
  Free_1(): void;
  Free_2(theId: Standard_Integer): void;
  HasFree(): Standard_Boolean;
  Available(): Standard_Integer;
  Lower(): Standard_Integer;
  Next_1(): Standard_Integer;
  Next_2(theId: Standard_Integer): Standard_Boolean;
  Upper(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Aspect_GenId_1 extends Aspect_GenId {
    constructor();
  }

  export declare class Aspect_GenId_2 extends Aspect_GenId {
    constructor(theLow: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Aspect_Background {
  SetColor(AColor: Quantity_Color): void;
  Color(): Quantity_Color;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Aspect_Background_1 extends Aspect_Background {
    constructor();
  }

  export declare class Aspect_Background_2 extends Aspect_Background {
    constructor(AColor: Quantity_Color);
  }

export declare class Aspect_GradientBackground extends Aspect_Background {
  SetColors(AColor1: Quantity_Color, AColor2: Quantity_Color, AMethod: Aspect_GradientFillMethod): void;
  Colors(AColor1: Quantity_Color, AColor2: Quantity_Color): void;
  BgGradientFillMethod(): Aspect_GradientFillMethod;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Aspect_GradientBackground_1 extends Aspect_GradientBackground {
    constructor();
  }

  export declare class Aspect_GradientBackground_2 extends Aspect_GradientBackground {
    constructor(AColor1: Quantity_Color, AColor2: Quantity_Color, AMethod: Aspect_GradientFillMethod);
  }

export declare class Aspect_Window extends Standard_Transient {
  SetBackground_1(ABack: Aspect_Background): void;
  SetBackground_2(color: Quantity_Color): void;
  SetBackground_3(ABackground: Aspect_GradientBackground): void;
  SetBackground_4(theFirstColor: Quantity_Color, theSecondColor: Quantity_Color, theFillMethod: Aspect_GradientFillMethod): void;
  Map(): void;
  Unmap(): void;
  DoResize(): Aspect_TypeOfResize;
  DoMapping(): Standard_Boolean;
  Background(): Aspect_Background;
  BackgroundFillMethod(): Aspect_FillMethod;
  GradientBackground(): Aspect_GradientBackground;
  IsMapped(): Standard_Boolean;
  IsVirtual(): Standard_Boolean;
  SetVirtual(theVirtual: Standard_Boolean): void;
  Ratio(): Standard_Real;
  Position(X1: Standard_Integer, Y1: Standard_Integer, X2: Standard_Integer, Y2: Standard_Integer): void;
  Size(Width: Standard_Integer, Height: Standard_Integer): void;
  NativeHandle(): Aspect_Drawable;
  NativeParentHandle(): Aspect_Drawable;
  NativeFBConfig(): Aspect_FBConfig;
  SetTitle(theTitle: TCollection_AsciiString): void;
  InvalidateContent(theDisp: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_CubeMapOrder {
  Set_1(theOrder: Graphic3d_CubeMapOrder): Graphic3d_CubeMapOrder;
  Validated(): Graphic3d_ValidatedCubeMapOrder;
  Set_2(theCubeMapSide: Graphic3d_CubeMapSide, theValue: string): Graphic3d_CubeMapOrder;
  SetDefault(): Graphic3d_CubeMapOrder;
  Permute(anOrder: Graphic3d_ValidatedCubeMapOrder): Graphic3d_CubeMapOrder;
  Permuted(anOrder: Graphic3d_ValidatedCubeMapOrder): Graphic3d_CubeMapOrder;
  Swap(theFirstSide: Graphic3d_CubeMapSide, theSecondSide: Graphic3d_CubeMapSide): Graphic3d_CubeMapOrder;
  Swapped(theFirstSide: Graphic3d_CubeMapSide, theSecondSide: Graphic3d_CubeMapSide): Graphic3d_CubeMapOrder;
  Get(theCubeMapSide: Graphic3d_CubeMapSide): string;
  Clear(): Graphic3d_CubeMapOrder;
  IsEmpty(): boolean;
  HasRepetitions(): boolean;
  HasOverflows(): boolean;
  IsValid(): boolean;
  Default(): Graphic3d_ValidatedCubeMapOrder;
}

  export declare class Graphic3d_CubeMapOrder_1 extends Graphic3d_CubeMapOrder {
    constructor();
  }

  export declare class Graphic3d_CubeMapOrder_2 extends Graphic3d_CubeMapOrder {
    constructor(thePosXLocation: string, theNegXLocation: string, thePosYLocation: string, theNegYLocation: string, thePosZLocation: string, theNegZLocation: string);
  }

  export declare class Graphic3d_CubeMapOrder_3 extends Graphic3d_CubeMapOrder {
    constructor(theOrder: Graphic3d_ValidatedCubeMapOrder);
  }

export declare class Graphic3d_ValidatedCubeMapOrder {
  constructor(theOther: Graphic3d_ValidatedCubeMapOrder)
}

export declare class Graphic3d_CLight extends Standard_Transient {
  constructor(theType: Graphic3d_TypeOfLightSource)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Type(): Graphic3d_TypeOfLightSource;
  Name(): TCollection_AsciiString;
  SetName(theName: TCollection_AsciiString): void;
  Color(): Quantity_Color;
  SetColor(theColor: Quantity_Color): void;
  IsEnabled(): Standard_Boolean;
  SetEnabled(theIsOn: Standard_Boolean): void;
  IsHeadlight(): Standard_Boolean;
  Headlight(): Standard_Boolean;
  SetHeadlight(theValue: Standard_Boolean): void;
  Position_1(): gp_Pnt;
  SetPosition_1(thePosition: gp_Pnt): void;
  Position_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  SetPosition_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  ConstAttenuation(): Standard_ShortReal;
  LinearAttenuation(): Standard_ShortReal;
  Attenuation(theConstAttenuation: Standard_Real, theLinearAttenuation: Standard_Real): void;
  SetAttenuation(theConstAttenuation: Standard_ShortReal, theLinearAttenuation: Standard_ShortReal): void;
  Direction_1(): gp_Dir;
  SetDirection_1(theDir: gp_Dir): void;
  Direction_2(theVx: Standard_Real, theVy: Standard_Real, theVz: Standard_Real): void;
  SetDirection_2(theVx: Standard_Real, theVy: Standard_Real, theVz: Standard_Real): void;
  Angle(): Standard_ShortReal;
  SetAngle(theAngle: Standard_ShortReal): void;
  Concentration(): Standard_ShortReal;
  SetConcentration(theConcentration: Standard_ShortReal): void;
  Intensity(): Standard_ShortReal;
  SetIntensity(theValue: Standard_ShortReal): void;
  Smoothness(): Standard_ShortReal;
  SetSmoothRadius(theValue: Standard_ShortReal): void;
  SetSmoothAngle(theValue: Standard_ShortReal): void;
  Range(): Standard_ShortReal;
  SetRange(theValue: Standard_ShortReal): void;
  GetId(): TCollection_AsciiString;
  PackedParams(): Graphic3d_Vec4;
  PackedColor(): Graphic3d_Vec4;
  PackedDirectionRange(): Graphic3d_Vec4;
  Revision(): Standard_Size;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_DataStructureManager extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_AxisAspect {
  constructor(theName: TCollection_ExtendedString, theNameColor: Quantity_Color, theColor: Quantity_Color, theValuesOffset: Standard_Integer, theNameOffset: Standard_Integer, theTickmarksNumber: Standard_Integer, theTickmarksLength: Standard_Integer, theToDrawName: Standard_Boolean, theToDrawValues: Standard_Boolean, theToDrawTickmarks: Standard_Boolean)
  SetName(theName: TCollection_ExtendedString): void;
  Name(): TCollection_ExtendedString;
  ToDrawName(): Standard_Boolean;
  SetDrawName(theToDraw: Standard_Boolean): void;
  ToDrawTickmarks(): Standard_Boolean;
  SetDrawTickmarks(theToDraw: Standard_Boolean): void;
  ToDrawValues(): Standard_Boolean;
  SetDrawValues(theToDraw: Standard_Boolean): void;
  NameColor(): Quantity_Color;
  SetNameColor(theColor: Quantity_Color): void;
  Color(): Quantity_Color;
  SetColor(theColor: Quantity_Color): void;
  TickmarksNumber(): Standard_Integer;
  SetTickmarksNumber(theValue: Standard_Integer): void;
  TickmarksLength(): Standard_Integer;
  SetTickmarksLength(theValue: Standard_Integer): void;
  ValuesOffset(): Standard_Integer;
  SetValuesOffset(theValue: Standard_Integer): void;
  NameOffset(): Standard_Integer;
  SetNameOffset(theValue: Standard_Integer): void;
}

export declare class Graphic3d_GraduatedTrihedron {
  constructor(theNamesFont: TCollection_AsciiString, theNamesStyle: Font_FontAspect, theNamesSize: Standard_Integer, theValuesFont: TCollection_AsciiString, theValuesStyle: Font_FontAspect, theValuesSize: Standard_Integer, theArrowsLength: Standard_ShortReal, theGridColor: Quantity_Color, theToDrawGrid: Standard_Boolean, theToDrawAxes: Standard_Boolean)
  ChangeXAxisAspect(): Graphic3d_AxisAspect;
  ChangeYAxisAspect(): Graphic3d_AxisAspect;
  ChangeZAxisAspect(): Graphic3d_AxisAspect;
  ChangeAxisAspect(theIndex: Standard_Integer): Graphic3d_AxisAspect;
  XAxisAspect(): Graphic3d_AxisAspect;
  YAxisAspect(): Graphic3d_AxisAspect;
  ZAxisAspect(): Graphic3d_AxisAspect;
  AxisAspect(theIndex: Standard_Integer): Graphic3d_AxisAspect;
  ArrowsLength(): Standard_ShortReal;
  SetArrowsLength(theValue: Standard_ShortReal): void;
  GridColor(): Quantity_Color;
  SetGridColor(theColor: Quantity_Color): void;
  ToDrawGrid(): Standard_Boolean;
  SetDrawGrid(theToDraw: Standard_Boolean): void;
  ToDrawAxes(): Standard_Boolean;
  SetDrawAxes(theToDraw: Standard_Boolean): void;
  NamesFont(): TCollection_AsciiString;
  SetNamesFont(theFont: TCollection_AsciiString): void;
  NamesFontAspect(): Font_FontAspect;
  SetNamesFontAspect(theAspect: Font_FontAspect): void;
  NamesSize(): Standard_Integer;
  SetNamesSize(theValue: Standard_Integer): void;
  ValuesFont(): TCollection_AsciiString;
  SetValuesFont(theFont: TCollection_AsciiString): void;
  ValuesFontAspect(): Font_FontAspect;
  SetValuesFontAspect(theAspect: Font_FontAspect): void;
  ValuesSize(): Standard_Integer;
  SetValuesSize(theValue: Standard_Integer): void;
}

export declare class Graphic3d_RenderingParams {
  constructor()
  ResolutionRatio(): Standard_ShortReal;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_Texture2D extends Graphic3d_TextureMap {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NumberOfTextures(): Standard_Integer;
  TextureName(theRank: Standard_Integer): TCollection_AsciiString;
  Name(): Graphic3d_NameOfTexture2D;
  SetImage(thePixMap: any): void;
  HasMipMaps(): Standard_Boolean;
  SetMipMaps(theToUse: Standard_Boolean): void;
}

export declare class Graphic3d_Texture2Dmanual extends Graphic3d_Texture2D {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_Texture2Dmanual_1 extends Graphic3d_Texture2Dmanual {
    constructor(theFileName: TCollection_AsciiString);
  }

  export declare class Graphic3d_Texture2Dmanual_2 extends Graphic3d_Texture2Dmanual {
    constructor(theNOT: Graphic3d_NameOfTexture2D);
  }

  export declare class Graphic3d_Texture2Dmanual_3 extends Graphic3d_Texture2Dmanual {
    constructor(thePixMap: any);
  }

export declare class Graphic3d_TextureEnv extends Graphic3d_TextureRoot {
  Name(): Graphic3d_NameOfTextureEnv;
  NumberOfTextures(): Standard_Integer;
  TextureName(theRank: Standard_Integer): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_TextureEnv_1 extends Graphic3d_TextureEnv {
    constructor(theFileName: TCollection_AsciiString);
  }

  export declare class Graphic3d_TextureEnv_2 extends Graphic3d_TextureEnv {
    constructor(theName: Graphic3d_NameOfTextureEnv);
  }

  export declare class Graphic3d_TextureEnv_3 extends Graphic3d_TextureEnv {
    constructor(thePixMap: any);
  }

export declare class Graphic3d_LightSet extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Extent(): Standard_Integer;
  Value(theIndex: Standard_Integer): any;
  Contains(theLight: any): Standard_Boolean;
  Add(theLight: any): Standard_Boolean;
  Remove(theLight: any): Standard_Boolean;
  NbLightsOfType(theType: Graphic3d_TypeOfLightSource): Standard_Integer;
  UpdateRevision(): Standard_Size;
  Revision(): Standard_Size;
  NbEnabled(): Standard_Integer;
  NbEnabledLightsOfType(theType: Graphic3d_TypeOfLightSource): Standard_Integer;
  AmbientColor(): Graphic3d_Vec4;
  KeyEnabledLong(): TCollection_AsciiString;
  KeyEnabledShort(): TCollection_AsciiString;
}

export declare class Graphic3d_CView extends Graphic3d_DataStructureManager {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Identification(): Standard_Integer;
  Activate(): void;
  Deactivate(): void;
  IsActive(): Standard_Boolean;
  Remove(): void;
  IsRemoved(): Standard_Boolean;
  Camera(): any;
  SetCamera(theCamera: any): void;
  ShadingModel(): Graphic3d_TypeOfShadingModel;
  SetShadingModel(theModel: Graphic3d_TypeOfShadingModel): void;
  VisualizationType(): Graphic3d_TypeOfVisualization;
  SetVisualizationType(theType: Graphic3d_TypeOfVisualization): void;
  SetComputedMode(theMode: Standard_Boolean): void;
  ComputedMode(): Standard_Boolean;
  ReCompute(theStructure: any): void;
  Update(theLayerId: Graphic3d_ZLayerId): void;
  Compute(): void;
  ContainsFacet_1(): Standard_Boolean;
  ContainsFacet_2(theSet: Graphic3d_MapOfStructure): Standard_Boolean;
  DisplayedStructures(theStructures: Graphic3d_MapOfStructure): void;
  NumberOfDisplayedStructures(): Standard_Integer;
  HiddenObjects(): any;
  ChangeHiddenObjects(): any;
  IsComputed_1(theStructId: Standard_Integer, theComputedStruct: any): Standard_Boolean;
  MinMaxValues_1(theToIncludeAuxiliary: Standard_Boolean): Bnd_Box;
  MinMaxValues_2(theSet: Graphic3d_MapOfStructure, theToIncludeAuxiliary: Standard_Boolean): Bnd_Box;
  StructureManager(): any;
  Redraw(): void;
  RedrawImmediate(): void;
  Invalidate(): void;
  IsInvalidated(): Standard_Boolean;
  Resized(): void;
  SetImmediateModeDrawToFront(theDrawToFrontBuffer: Standard_Boolean): Standard_Boolean;
  SetWindow(theWindow: any, theContext: Aspect_RenderingContext): void;
  Window(): any;
  IsDefined(): Standard_Boolean;
  BufferDump(theImage: Image_PixMap, theBufferType: Graphic3d_BufferType): Standard_Boolean;
  InvalidateBVHData(theLayerId: Graphic3d_ZLayerId): void;
  InsertLayerBefore(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerAfter: Graphic3d_ZLayerId): void;
  InsertLayerAfter(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerBefore: Graphic3d_ZLayerId): void;
  ZLayerMax(): Standard_Integer;
  Layers(): any;
  Layer(theLayerId: Graphic3d_ZLayerId): any;
  InvalidateZLayerBoundingBox(theLayerId: Graphic3d_ZLayerId): void;
  RemoveZLayer(theLayerId: Graphic3d_ZLayerId): void;
  SetZLayerSettings(theLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings): void;
  ConsiderZoomPersistenceObjects(): Standard_Real;
  FBO(): any;
  SetFBO(theFbo: any): void;
  FBOCreate(theWidth: Standard_Integer, theHeight: Standard_Integer): any;
  FBORelease(theFbo: any): void;
  FBOGetDimensions(theFbo: any, theWidth: Standard_Integer, theHeight: Standard_Integer, theWidthMax: Standard_Integer, theHeightMax: Standard_Integer): void;
  FBOChangeViewport(theFbo: any, theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  CopySettings(theOther: any): void;
  RenderingParams(): Graphic3d_RenderingParams;
  ChangeRenderingParams(): Graphic3d_RenderingParams;
  Background(): Aspect_Background;
  SetBackground(theBackground: Aspect_Background): void;
  GradientBackground(): Aspect_GradientBackground;
  SetGradientBackground(theBackground: Aspect_GradientBackground): void;
  BackgroundImage(): any;
  SetBackgroundImage(theTextureMap: any, theToUpdatePBREnv: Standard_Boolean): void;
  BackgroundImageStyle(): Aspect_FillMethod;
  SetBackgroundImageStyle(theFillStyle: Aspect_FillMethod): void;
  BackgroundCubeMap(): any;
  GeneratePBREnvironment(): void;
  ClearPBREnvironment(): void;
  TextureEnv(): any;
  SetTextureEnv(theTextureEnv: any): void;
  BackfacingModel(): Graphic3d_TypeOfBackfacingModel;
  SetBackfacingModel(theModel: Graphic3d_TypeOfBackfacingModel): void;
  Lights(): any;
  SetLights(theLights: any): void;
  ClipPlanes(): any;
  SetClipPlanes(thePlanes: any): void;
  DiagnosticInformation(theDict: TColStd_IndexedDataMapOfStringString, theFlags: Graphic3d_DiagnosticInfo): void;
  StatisticInformation_1(): TCollection_AsciiString;
  StatisticInformation_2(theDict: TColStd_IndexedDataMapOfStringString): void;
  UnitFactor(): Standard_Real;
  SetUnitFactor(theFactor: Standard_Real): void;
  XRSession(): any;
  SetXRSession(theSession: any): void;
  IsActiveXR(): boolean;
  InitXR(): boolean;
  ReleaseXR(): void;
  ProcessXRInput(): void;
  SetupXRPosedCamera(): void;
  UnsetXRPosedCamera(): void;
  PosedXRCamera(): any;
  SetPosedXRCamera(theCamera: any): void;
  BaseXRCamera(): any;
  SetBaseXRCamera(theCamera: any): void;
  PoseXRToWorld(thePoseXR: gp_Trsf): gp_Trsf;
  SynchronizeXRBaseToPosedCamera(): void;
  SynchronizeXRPosedToBaseCamera(): void;
  ComputeXRPosedCameraFromBase(theCam: Graphic3d_Camera, theXRTrsf: gp_Trsf): void;
  ComputeXRBaseCameraFromPosed(theCamPosed: Graphic3d_Camera, thePoseTrsf: gp_Trsf): void;
  TurnViewXRCamera(theTrsfTurn: gp_Trsf): void;
  GetGraduatedTrihedron(): Graphic3d_GraduatedTrihedron;
  GraduatedTrihedronDisplay(theTrihedronData: Graphic3d_GraduatedTrihedron): void;
  GraduatedTrihedronErase(): void;
  GraduatedTrihedronMinMaxValues(theMin: Graphic3d_Vec3, theMax: Graphic3d_Vec3): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_StructureManager extends Standard_Transient {
  constructor(theDriver: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Update(theLayerId: Graphic3d_ZLayerId): void;
  Remove(): void;
  Erase_1(): void;
  DisplayedStructures(SG: Graphic3d_MapOfStructure): void;
  HighlightedStructures(SG: Graphic3d_MapOfStructure): void;
  ReCompute_1(theStructure: any): void;
  ReCompute_2(theStructure: any, theProjector: any): void;
  Clear(theStructure: Graphic3d_Structure, theWithDestruction: Standard_Boolean): void;
  Connect(theMother: Graphic3d_Structure, theDaughter: Graphic3d_Structure): void;
  Disconnect(theMother: Graphic3d_Structure, theDaughter: Graphic3d_Structure): void;
  Display(theStructure: any): void;
  Erase_2(theStructure: any): void;
  Highlight(theStructure: any): void;
  SetTransform(theStructure: any, theTrsf: any): void;
  ChangeDisplayPriority(theStructure: any, theOldPriority: Standard_Integer, theNewPriority: Standard_Integer): void;
  ChangeZLayer(theStructure: any, theLayerId: Graphic3d_ZLayerId): void;
  GraphicDriver(): any;
  Identification_1(theView: Graphic3d_CView): Standard_Integer;
  UnIdentification(theView: Graphic3d_CView): void;
  DefinedViews(): Graphic3d_IndexedMapOfView;
  MaxNumOfViews(): Standard_Integer;
  Identification_2(AId: Standard_Integer): any;
  UnHighlight_1(AStructure: any): void;
  UnHighlight_2(): void;
  RecomputeStructures_1(): void;
  RecomputeStructures_2(theStructures: NCollection_Map<Graphic3d_Structure >): void;
  RegisterObject(theObject: any): any;
  UnregisterObject(theObject: any): void;
  ObjectAffinity(theObject: any): any;
  IsDeviceLost(): Standard_Boolean;
  SetDeviceLost(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_ArrayOfPrimitives extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  CreateArray_1(theType: Graphic3d_TypeOfPrimitiveArray, theMaxVertexs: Standard_Integer, theMaxEdges: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags): any;
  CreateArray_2(theType: Graphic3d_TypeOfPrimitiveArray, theMaxVertexs: Standard_Integer, theMaxBounds: Standard_Integer, theMaxEdges: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags): any;
  Attributes(): any;
  Type(): Graphic3d_TypeOfPrimitiveArray;
  StringType(): Standard_CString;
  HasVertexNormals(): Standard_Boolean;
  HasVertexColors(): Standard_Boolean;
  HasVertexTexels(): Standard_Boolean;
  VertexNumber(): Standard_Integer;
  VertexNumberAllocated(): Standard_Integer;
  ItemNumber(): Standard_Integer;
  IsValid(): Standard_Boolean;
  AddVertex_1(theVertex: gp_Pnt): Standard_Integer;
  AddVertex_2(theVertex: Graphic3d_Vec3): Standard_Integer;
  AddVertex_3(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): Standard_Integer;
  AddVertex_4(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal): Standard_Integer;
  AddVertex_5(theVertex: gp_Pnt, theColor: Quantity_Color): Standard_Integer;
  AddVertex_6(theVertex: gp_Pnt, theColor32: Standard_Integer): Standard_Integer;
  AddVertex_7(theVertex: gp_Pnt, theColor: Graphic3d_Vec4ub): Standard_Integer;
  AddVertex_8(theVertex: gp_Pnt, theNormal: gp_Dir): Standard_Integer;
  AddVertex_9(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theNX: Standard_Real, theNY: Standard_Real, theNZ: Standard_Real): Standard_Integer;
  AddVertex_10(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal, theNX: Standard_ShortReal, theNY: Standard_ShortReal, theNZ: Standard_ShortReal): Standard_Integer;
  AddVertex_11(theVertex: gp_Pnt, theNormal: gp_Dir, theColor: Quantity_Color): Standard_Integer;
  AddVertex_12(theVertex: gp_Pnt, theNormal: gp_Dir, theColor32: Standard_Integer): Standard_Integer;
  AddVertex_13(theVertex: gp_Pnt, theTexel: gp_Pnt2d): Standard_Integer;
  AddVertex_14(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theTX: Standard_Real, theTY: Standard_Real): Standard_Integer;
  AddVertex_15(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal, theTX: Standard_ShortReal, theTY: Standard_ShortReal): Standard_Integer;
  AddVertex_16(theVertex: gp_Pnt, theNormal: gp_Dir, theTexel: gp_Pnt2d): Standard_Integer;
  AddVertex_17(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theNX: Standard_Real, theNY: Standard_Real, theNZ: Standard_Real, theTX: Standard_Real, theTY: Standard_Real): Standard_Integer;
  AddVertex_18(theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal, theNX: Standard_ShortReal, theNY: Standard_ShortReal, theNZ: Standard_ShortReal, theTX: Standard_ShortReal, theTY: Standard_ShortReal): Standard_Integer;
  SetVertice_1(theIndex: Standard_Integer, theVertex: gp_Pnt): void;
  SetVertice_2(theIndex: Standard_Integer, theX: Standard_ShortReal, theY: Standard_ShortReal, theZ: Standard_ShortReal): void;
  SetVertexColor_1(theIndex: Standard_Integer, theColor: Quantity_Color): void;
  SetVertexColor_2(theIndex: Standard_Integer, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): void;
  SetVertexColor_3(theIndex: Standard_Integer, theColor: Graphic3d_Vec4ub): void;
  SetVertexColor_4(theIndex: Standard_Integer, theColor32: Standard_Integer): void;
  SetVertexNormal_1(theIndex: Standard_Integer, theNormal: gp_Dir): void;
  SetVertexNormal_2(theIndex: Standard_Integer, theNX: Standard_Real, theNY: Standard_Real, theNZ: Standard_Real): void;
  SetVertexTexel_1(theIndex: Standard_Integer, theTexel: gp_Pnt2d): void;
  SetVertexTexel_2(theIndex: Standard_Integer, theTX: Standard_Real, theTY: Standard_Real): void;
  Vertice_1(theRank: Standard_Integer): gp_Pnt;
  Vertice_2(theRank: Standard_Integer, theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  VertexColor_1(theRank: Standard_Integer): Quantity_Color;
  VertexColor_2(theIndex: Standard_Integer, theColor: Graphic3d_Vec4ub): void;
  VertexColor_3(theRank: Standard_Integer, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): void;
  VertexColor_4(theRank: Standard_Integer, theColor: Standard_Integer): void;
  VertexNormal_1(theRank: Standard_Integer): gp_Dir;
  VertexNormal_2(theRank: Standard_Integer, theNX: Standard_Real, theNY: Standard_Real, theNZ: Standard_Real): void;
  VertexTexel_1(theRank: Standard_Integer): gp_Pnt2d;
  VertexTexel_2(theRank: Standard_Integer, theTX: Standard_Real, theTY: Standard_Real): void;
  Indices(): any;
  EdgeNumber(): Standard_Integer;
  EdgeNumberAllocated(): Standard_Integer;
  Edge(theRank: Standard_Integer): Standard_Integer;
  AddEdge(theVertexIndex: Standard_Integer): Standard_Integer;
  AddEdges_1(theVertexIndex1: Standard_Integer, theVertexIndex2: Standard_Integer): Standard_Integer;
  AddSegmentEdges(theVertexIndex1: Standard_Integer, theVertexIndex2: Standard_Integer): Standard_Integer;
  AddEdges_2(theVertexIndex1: Standard_Integer, theVertexIndex2: Standard_Integer, theVertexIndex3: Standard_Integer): Standard_Integer;
  AddTriangleEdges_1(theVertexIndex1: Standard_Integer, theVertexIndex2: Standard_Integer, theVertexIndex3: Standard_Integer): Standard_Integer;
  AddTriangleEdges_2(theIndexes: Graphic3d_Vec3i): Standard_Integer;
  AddTriangleEdges_3(theIndexes: Graphic3d_Vec4i): Standard_Integer;
  AddEdges_3(theVertexIndex1: Standard_Integer, theVertexIndex2: Standard_Integer, theVertexIndex3: Standard_Integer, theVertexIndex4: Standard_Integer): Standard_Integer;
  AddQuadEdges(theVertexIndex1: Standard_Integer, theVertexIndex2: Standard_Integer, theVertexIndex3: Standard_Integer, theVertexIndex4: Standard_Integer): Standard_Integer;
  AddQuadTriangleEdges_1(theVertexIndex1: Standard_Integer, theVertexIndex2: Standard_Integer, theVertexIndex3: Standard_Integer, theVertexIndex4: Standard_Integer): Standard_Integer;
  AddQuadTriangleEdges_2(theIndexes: Graphic3d_Vec4i): Standard_Integer;
  AddTriangleStripEdges(theVertexLower: Standard_Integer, theVertexUpper: Standard_Integer): void;
  AddTriangleFanEdges(theVertexLower: Standard_Integer, theVertexUpper: Standard_Integer, theToClose: Standard_Boolean): void;
  AddPolylineEdges(theVertexLower: Standard_Integer, theVertexUpper: Standard_Integer, theToClose: Standard_Boolean): void;
  Bounds(): any;
  HasBoundColors(): Standard_Boolean;
  BoundNumber(): Standard_Integer;
  BoundNumberAllocated(): Standard_Integer;
  Bound(theRank: Standard_Integer): Standard_Integer;
  BoundColor_1(theRank: Standard_Integer): Quantity_Color;
  BoundColor_2(theRank: Standard_Integer, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): void;
  AddBound_1(theEdgeNumber: Standard_Integer): Standard_Integer;
  AddBound_2(theEdgeNumber: Standard_Integer, theBColor: Quantity_Color): Standard_Integer;
  AddBound_3(theEdgeNumber: Standard_Integer, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): Standard_Integer;
  SetBoundColor_1(theIndex: Standard_Integer, theColor: Quantity_Color): void;
  SetBoundColor_2(theIndex: Standard_Integer, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): void;
}

export declare class Graphic3d_ArrayOfQuadrangles extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfQuadrangles_1 extends Graphic3d_ArrayOfQuadrangles {
    constructor(theMaxVertexs: Standard_Integer, theMaxEdges: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfQuadrangles_2 extends Graphic3d_ArrayOfQuadrangles {
    constructor(theMaxVertexs: Standard_Integer, theMaxEdges: Standard_Integer, theHasVNormals: Standard_Boolean, theHasVColors: Standard_Boolean, theHasVTexels: Standard_Boolean);
  }

export declare class Graphic3d_ArrayOfTriangles extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfTriangles_1 extends Graphic3d_ArrayOfTriangles {
    constructor(theMaxVertexs: Standard_Integer, theMaxEdges: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfTriangles_2 extends Graphic3d_ArrayOfTriangles {
    constructor(theMaxVertexs: Standard_Integer, theMaxEdges: Standard_Integer, theHasVNormals: Standard_Boolean, theHasVColors: Standard_Boolean, theHasVTexels: Standard_Boolean);
  }

export declare class Graphic3d_MediaTexture extends Graphic3d_Texture2D {
  constructor(theMutex: any, thePlane: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetImage(theSupported: any): any;
  Frame(): any;
  SetFrame(theFrame: any): void;
  GenerateNewId(): void;
}

export declare class Graphic3d_ArrayOfPoints extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfPoints_1 extends Graphic3d_ArrayOfPoints {
    constructor(theMaxVertexs: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfPoints_2 extends Graphic3d_ArrayOfPoints {
    constructor(theMaxVertexs: Standard_Integer, theHasVColors: Standard_Boolean, theHasVNormals: Standard_Boolean);
  }

export declare class Graphic3d_ArrayOfPolylines extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfPolylines_1 extends Graphic3d_ArrayOfPolylines {
    constructor(theMaxVertexs: Standard_Integer, theMaxBounds: Standard_Integer, theMaxEdges: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfPolylines_2 extends Graphic3d_ArrayOfPolylines {
    constructor(theMaxVertexs: Standard_Integer, theMaxBounds: Standard_Integer, theMaxEdges: Standard_Integer, theHasVColors: Standard_Boolean, theHasBColors: Standard_Boolean);
  }

export declare class Aspect_VKeySet extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Modifiers(): Aspect_VKeyFlags;
  DownTime(theKey: Aspect_VKey): number;
  TimeUp(theKey: Aspect_VKey): number;
  IsFreeKey(theKey: Aspect_VKey): boolean;
  IsKeyDown(theKey: Aspect_VKey): boolean;
  Mutex(): Standard_Mutex;
  Reset(): void;
  KeyDown(theKey: Aspect_VKey, theTime: number, thePressure: number): void;
  KeyUp(theKey: Aspect_VKey, theTime: number): void;
  KeyFromAxis(theNegative: Aspect_VKey, thePositive: Aspect_VKey, theTime: number, thePressure: number): void;
  HoldDuration_1(theKey: Aspect_VKey, theTime: number, theDuration: number): boolean;
  HoldDuration_2(theKey: Aspect_VKey, theTime: number, theDuration: number, thePressure: number): boolean;
}

export declare class Aspect_Touch {
  Delta(): NCollection_Vec2<Standard_Real>;
}

  export declare class Aspect_Touch_1 extends Aspect_Touch {
    constructor();
  }

  export declare class Aspect_Touch_2 extends Aspect_Touch {
    constructor(thePnt: NCollection_Vec2<Standard_Real>, theIsPreciseDevice: Standard_Boolean);
  }

  export declare class Aspect_Touch_3 extends Aspect_Touch {
    constructor(theX: Standard_Real, theY: Standard_Real, theIsPreciseDevice: Standard_Boolean);
  }

export declare class Aspect_AspectFillAreaDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_AspectFillAreaDefinitionError_1 extends Aspect_AspectFillAreaDefinitionError {
    constructor();
  }

  export declare class Aspect_AspectFillAreaDefinitionError_2 extends Aspect_AspectFillAreaDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Aspect_AspectLineDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_AspectLineDefinitionError_1 extends Aspect_AspectLineDefinitionError {
    constructor();
  }

  export declare class Aspect_AspectLineDefinitionError_2 extends Aspect_AspectLineDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Aspect_AspectMarkerDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_AspectMarkerDefinitionError_1 extends Aspect_AspectMarkerDefinitionError {
    constructor();
  }

  export declare class Aspect_AspectMarkerDefinitionError_2 extends Aspect_AspectMarkerDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Aspect_Grid extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetXOrigin(anOrigin: Standard_Real): void;
  SetYOrigin(anOrigin: Standard_Real): void;
  SetRotationAngle(anAngle: Standard_Real): void;
  Rotate(anAngle: Standard_Real): void;
  Translate(aDx: Standard_Real, aDy: Standard_Real): void;
  SetColors(aColor: Quantity_Color, aTenthColor: Quantity_Color): void;
  Hit(X: Standard_Real, Y: Standard_Real, gridX: Standard_Real, gridY: Standard_Real): void;
  Compute(X: Standard_Real, Y: Standard_Real, gridX: Standard_Real, gridY: Standard_Real): void;
  Activate(): void;
  Deactivate(): void;
  XOrigin(): Standard_Real;
  YOrigin(): Standard_Real;
  RotationAngle(): Standard_Real;
  IsActive(): Standard_Boolean;
  Colors(aColor: Quantity_Color, aTenthColor: Quantity_Color): void;
  SetDrawMode(aDrawMode: Aspect_GridDrawMode): void;
  DrawMode(): Aspect_GridDrawMode;
  Display(): void;
  Erase(): void;
  IsDisplayed(): Standard_Boolean;
  Init(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Aspect_CircularGrid extends Aspect_Grid {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetRadiusStep(aStep: Standard_Real): void;
  SetDivisionNumber(aNumber: Standard_Integer): void;
  SetGridValues(XOrigin: Standard_Real, YOrigin: Standard_Real, RadiusStep: Standard_Real, DivisionNumber: Standard_Integer, RotationAngle: Standard_Real): void;
  Compute(X: Standard_Real, Y: Standard_Real, gridX: Standard_Real, gridY: Standard_Real): void;
  RadiusStep(): Standard_Real;
  DivisionNumber(): Standard_Integer;
  Init(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Aspect_DisplayConnection extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Aspect_DisplayConnectionDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_DisplayConnectionDefinitionError_1 extends Aspect_DisplayConnectionDefinitionError {
    constructor();
  }

  export declare class Aspect_DisplayConnectionDefinitionError_2 extends Aspect_DisplayConnectionDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Aspect_GraphicDeviceDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_GraphicDeviceDefinitionError_1 extends Aspect_GraphicDeviceDefinitionError {
    constructor();
  }

  export declare class Aspect_GraphicDeviceDefinitionError_2 extends Aspect_GraphicDeviceDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Aspect_IdentDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_IdentDefinitionError_1 extends Aspect_IdentDefinitionError {
    constructor();
  }

  export declare class Aspect_IdentDefinitionError_2 extends Aspect_IdentDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Aspect_NeutralWindow extends Aspect_Window {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NativeHandle(): Aspect_Drawable;
  NativeParentHandle(): Aspect_Drawable;
  NativeFBConfig(): Aspect_FBConfig;
  SetNativeHandle(theWindow: Aspect_Drawable): Standard_Boolean;
  SetNativeHandles(theWindow: Aspect_Drawable, theParentWindow: Aspect_Drawable, theFbConfig: Aspect_FBConfig): Standard_Boolean;
  IsMapped(): Standard_Boolean;
  Map(): void;
  Unmap(): void;
  DoResize(): Aspect_TypeOfResize;
  DoMapping(): Standard_Boolean;
  Ratio(): Standard_Real;
  Position(theX1: Standard_Integer, theY1: Standard_Integer, theX2: Standard_Integer, theY2: Standard_Integer): void;
  SetPosition_1(theX1: Standard_Integer, theY1: Standard_Integer): Standard_Boolean;
  SetPosition_2(theX1: Standard_Integer, theY1: Standard_Integer, theX2: Standard_Integer, theY2: Standard_Integer): Standard_Boolean;
  Size(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  SetSize(theWidth: Standard_Integer, theHeight: Standard_Integer): Standard_Boolean;
}

export declare class Aspect_XRAction extends Standard_Transient {
  constructor(theId: TCollection_AsciiString, theType: Aspect_XRActionType)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Id(): TCollection_AsciiString;
  Type(): Aspect_XRActionType;
  IsValid(): boolean;
  RawHandle(): uint64_t;
  SetRawHandle(theHande: uint64_t): void;
}

export declare class Aspect_XRActionSet extends Standard_Transient {
  constructor(theId: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Id(): TCollection_AsciiString;
  RawHandle(): uint64_t;
  SetRawHandle(theHande: uint64_t): void;
  AddAction(theAction: any): void;
  Actions(): Aspect_XRActionMap;
}

export declare class Aspect_XRSession extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsOpen(): boolean;
  Open(): boolean;
  Close(): void;
  WaitPoses(): boolean;
  RecommendedViewport(): NCollection_Vec2<int>;
  EyeToHeadTransform(theEye: Aspect_Eye): NCollection_Mat4<double>;
  HeadToEyeTransform(theEye: Aspect_Eye): NCollection_Mat4<double>;
  ProjectionMatrix(theEye: Aspect_Eye, theZNear: number, theZFar: number): NCollection_Mat4<double>;
  HasProjectionFrustums(): boolean;
  ProcessEvents(): void;
  SubmitEye(theTexture: void, theGraphicsLib: Aspect_GraphicsLibrary, theColorSpace: Aspect_ColorSpace, theEye: Aspect_Eye): boolean;
  UnitFactor(): Standard_Real;
  SetUnitFactor(theFactor: Standard_Real): void;
  Aspect(): Standard_Real;
  FieldOfView(): Standard_Real;
  IOD(): Standard_Real;
  DisplayFrequency(): Standard_ShortReal;
  ProjectionFrustum(theEye: Aspect_Eye): Aspect_FrustumLRBT<double>;
  HeadPose(): gp_Trsf;
  LeftHandPose(): gp_Trsf;
  RightHandPose(): gp_Trsf;
  TrackedPoses(): Aspect_TrackedDevicePoseArray;
  HasTrackedPose(theDevice: Standard_Integer): boolean;
  NamedTrackedDevice(theDevice: Aspect_XRTrackedDeviceRole): Standard_Integer;
  LoadRenderModel_1(theDevice: Standard_Integer, theTexture: any): any;
  LoadRenderModel_2(theDevice: Standard_Integer, theToApplyUnitFactor: Standard_Boolean, theTexture: any): any;
  GetDigitalActionData(theAction: any): Aspect_XRDigitalActionData;
  GetAnalogActionData(theAction: any): Aspect_XRAnalogActionData;
  GetPoseActionDataForNextFrame(theAction: any): Aspect_XRPoseActionData;
  TriggerHapticVibrationAction(theAction: any, theParams: Aspect_XRHapticActionData): void;
  AbortHapticVibrationAction(theAction: any): void;
  TrackingOrigin(): any;
  SetTrackingOrigin(theOrigin: any): void;
  GenericAction(theDevice: Aspect_XRTrackedDeviceRole, theAction: Aspect_XRGenericAction): any;
  GetString(theInfo: any): TCollection_AsciiString;
}

export declare class Aspect_OpenVRSession extends Aspect_XRSession {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsHmdPresent(): boolean;
  IsOpen(): boolean;
  Open(): boolean;
  Close(): void;
  WaitPoses(): boolean;
  RecommendedViewport(): NCollection_Vec2<int>;
  EyeToHeadTransform(theEye: Aspect_Eye): NCollection_Mat4<double>;
  ProjectionMatrix(theEye: Aspect_Eye, theZNear: number, theZFar: number): NCollection_Mat4<double>;
  HasProjectionFrustums(): boolean;
  ProcessEvents(): void;
  SubmitEye(theTexture: void, theGraphicsLib: Aspect_GraphicsLibrary, theColorSpace: Aspect_ColorSpace, theEye: Aspect_Eye): boolean;
  GetString(theInfo: any): TCollection_AsciiString;
  NamedTrackedDevice(theDevice: Aspect_XRTrackedDeviceRole): Standard_Integer;
  GetDigitalActionData(theAction: any): Aspect_XRDigitalActionData;
  GetAnalogActionData(theAction: any): Aspect_XRAnalogActionData;
  GetPoseActionDataForNextFrame(theAction: any): Aspect_XRPoseActionData;
  SetTrackingOrigin(theOrigin: any): void;
}

export declare class Aspect_RectangularGrid extends Aspect_Grid {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetXStep(aStep: Standard_Real): void;
  SetYStep(aStep: Standard_Real): void;
  SetAngle(anAngle1: Standard_Real, anAngle2: Standard_Real): void;
  SetGridValues(XOrigin: Standard_Real, YOrigin: Standard_Real, XStep: Standard_Real, YStep: Standard_Real, RotationAngle: Standard_Real): void;
  Compute(X: Standard_Real, Y: Standard_Real, gridX: Standard_Real, gridY: Standard_Real): void;
  XStep(): Standard_Real;
  YStep(): Standard_Real;
  FirstAngle(): Standard_Real;
  SecondAngle(): Standard_Real;
  Init(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Aspect_WindowDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_WindowDefinitionError_1 extends Aspect_WindowDefinitionError {
    constructor();
  }

  export declare class Aspect_WindowDefinitionError_2 extends Aspect_WindowDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Aspect_WindowError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Aspect_WindowError_1 extends Aspect_WindowError {
    constructor();
  }

  export declare class Aspect_WindowError_2 extends Aspect_WindowError {
    constructor(theMessage: Standard_CString);
  }

export declare class Graphic3d_GraphicDriver extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  InquireLimit(theType: Graphic3d_TypeOfLimit): Standard_Integer;
  InquireLightLimit(): Standard_Integer;
  InquirePlaneLimit(): Standard_Integer;
  InquireViewLimit(): Standard_Integer;
  CreateStructure(theManager: any): any;
  RemoveStructure(theCStructure: any): void;
  CreateView(theMgr: any): any;
  RemoveView(theView: any): void;
  EnableVBO(status: Standard_Boolean): void;
  MemoryInfo(theFreeBytes: Standard_Size, theInfo: TCollection_AsciiString): Standard_Boolean;
  DefaultTextHeight(): Standard_ShortReal;
  TextSize(theView: any, theText: Standard_CString, theHeight: Standard_ShortReal, theWidth: Standard_ShortReal, theAscent: Standard_ShortReal, theDescent: Standard_ShortReal): void;
  InsertLayerBefore(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerAfter: Graphic3d_ZLayerId): void;
  InsertLayerAfter(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerBefore: Graphic3d_ZLayerId): void;
  RemoveZLayer(theLayerId: Graphic3d_ZLayerId): void;
  ZLayers(theLayerSeq: TColStd_SequenceOfInteger): void;
  SetZLayerSettings(theLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings): void;
  ZLayerSettings(theLayerId: Graphic3d_ZLayerId): Graphic3d_ZLayerSettings;
  ViewExists(theWindow: any, theView: any): Standard_Boolean;
  GetDisplayConnection(): any;
  NewIdentification(): Standard_Integer;
  RemoveIdentification(theId: Standard_Integer): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Font_FTFont extends Standard_Transient {
  constructor(theFTLib: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  FindAndCreate(theFontName: TCollection_AsciiString, theFontAspect: Font_FontAspect, theParams: Font_FTFontParams, theStrictLevel: Font_StrictLevel): any;
  IsCharFromCJK(theUChar: Standard_Utf32Char): boolean;
  IsCharFromHiragana(theUChar: Standard_Utf32Char): boolean;
  IsCharFromKatakana(theUChar: Standard_Utf32Char): boolean;
  IsCharFromKorean(theUChar: Standard_Utf32Char): boolean;
  IsCharFromArabic(theUChar: Standard_Utf32Char): boolean;
  IsCharRightToLeft(theUChar: Standard_Utf32Char): boolean;
  CharSubset(theUChar: Standard_Utf32Char): Font_UnicodeSubset;
  IsValid(): boolean;
  GlyphImage(): Image_PixMap;
  Init_1(theFontPath: TCollection_AsciiString, theParams: Font_FTFontParams, theFaceId: Standard_Integer): boolean;
  Init_2(theData: any, theFileName: TCollection_AsciiString, theParams: Font_FTFontParams, theFaceId: Standard_Integer): boolean;
  FindAndInit(theFontName: TCollection_AsciiString, theFontAspect: Font_FontAspect, theParams: Font_FTFontParams, theStrictLevel: Font_StrictLevel): boolean;
  ToUseUnicodeSubsetFallback(): Standard_Boolean;
  SetUseUnicodeSubsetFallback(theToFallback: Standard_Boolean): void;
  IsSingleStrokeFont(): boolean;
  SetSingleStrokeFont(theIsSingleLine: boolean): void;
  ToSynthesizeItalic(): boolean;
  Release(): void;
  RenderGlyph(theChar: Standard_Utf32Char): boolean;
  GlyphMaxSizeX(theToIncludeFallback: boolean): number;
  GlyphMaxSizeY(theToIncludeFallback: boolean): number;
  Ascender(): number;
  Descender(): number;
  LineSpacing(): number;
  PointSize(): number;
  WidthScaling(): number;
  SetWidthScaling(theScaleFactor: number): void;
  HasSymbol(theUChar: Standard_Utf32Char): boolean;
  AdvanceX_1(theUCharNext: Standard_Utf32Char): number;
  AdvanceX_2(theUChar: Standard_Utf32Char, theUCharNext: Standard_Utf32Char): number;
  AdvanceY_1(theUCharNext: Standard_Utf32Char): number;
  AdvanceY_2(theUChar: Standard_Utf32Char, theUCharNext: Standard_Utf32Char): number;
  GlyphsNumber(theToIncludeFallback: boolean): Standard_Integer;
  GlyphRect(theRect: Font_Rect): void;
  BoundingBox(theString: NCollection_String, theAlignX: Graphic3d_HorizontalTextAlignment, theAlignY: Graphic3d_VerticalTextAlignment): Font_Rect;
  renderGlyphOutline(theChar: Standard_Utf32Char): FT_Outline;
  Init_3(theFontPath: NCollection_String, thePointSize: number, theResolution: number): boolean;
  Init_4(theFontName: NCollection_String, theFontAspect: Font_FontAspect, thePointSize: number, theResolution: number): boolean;
}

export declare class Font_TextFormatter extends Standard_Transient {
  constructor()
  SetupAlignment(theAlignX: Graphic3d_HorizontalTextAlignment, theAlignY: Graphic3d_VerticalTextAlignment): void;
  Reset(): void;
  Append(theString: NCollection_String, theFont: Font_FTFont): void;
  Format(): void;
  TopLeft(theIndex: Standard_Integer): NCollection_Vec2<Standard_ShortReal>;
  BottomLeft(theIndex: Standard_Integer): NCollection_Vec2<Standard_ShortReal>;
  String(): NCollection_String;
  GlyphBoundingBox(theIndex: Standard_Integer, theBndBox: Font_Rect): Standard_Boolean;
  LineHeight(theIndex: Standard_Integer): Standard_ShortReal;
  LineWidth(theIndex: Standard_Integer): Standard_ShortReal;
  IsLFSymbol(theIndex: Standard_Integer): Standard_Boolean;
  FirstPosition(): Standard_ShortReal;
  LinePositionIndex(theIndex: Standard_Integer): Standard_Integer;
  LineIndex(theIndex: Standard_Integer): Standard_Integer;
  TabSize(): Standard_Integer;
  HorizontalTextAlignment(): Graphic3d_HorizontalTextAlignment;
  VerticalTextAlignment(): Graphic3d_VerticalTextAlignment;
  SetWrapping(theWidth: Standard_ShortReal): void;
  HasWrapping(): Standard_Boolean;
  Wrapping(): Standard_ShortReal;
  ResultWidth(): Standard_ShortReal;
  ResultHeight(): Standard_ShortReal;
  MaximumSymbolWidth(): Standard_ShortReal;
  BndBox(theBndBox: Font_Rect): void;
  Corners(): NCollection_Vector<NCollection_Vec2<Standard_ShortReal>>;
  NewLines(): NCollection_Vector<Standard_ShortReal>;
  IsCommandSymbol(theSymbol: Standard_Utf32Char): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Font_FTLibrary extends Standard_Transient {
  constructor()
  IsValid(): boolean;
  Instance(): FT_Library;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Font_SystemFont extends Standard_Transient {
  constructor(theFontName: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  FontKey(): TCollection_AsciiString;
  FontName(): TCollection_AsciiString;
  FontPath(theAspect: Font_FontAspect): TCollection_AsciiString;
  FontFaceId(theAspect: Font_FontAspect): Standard_Integer;
  SetFontPath(theAspect: Font_FontAspect, thePath: TCollection_AsciiString, theFaceId: Standard_Integer): void;
  HasFontAspect(theAspect: Font_FontAspect): boolean;
  FontPathAny(theAspect: Font_FontAspect, theToSynthesizeItalic: boolean, theFaceId: Standard_Integer): TCollection_AsciiString;
  IsEqual_1(theOtherFont: any): Standard_Boolean;
  IsSingleStrokeFont(): Standard_Boolean;
  SetSingleStrokeFont(theIsSingleLine: Standard_Boolean): void;
  ToString(): TCollection_AsciiString;
  HashCode(theSystemFont: any, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual_2(theFont1: any, theFont2: any): boolean;
}

export declare class Font_FontMgr extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetInstance(): any;
  FontAspectToString(theAspect: Font_FontAspect): string;
  ToUseUnicodeSubsetFallback(): Standard_Boolean;
  AvailableFonts(theList: Font_NListOfSystemFont): void;
  GetAvailableFonts(): Font_NListOfSystemFont;
  GetAvailableFontsNames(theFontsNames: TColStd_SequenceOfHAsciiString): void;
  GetFont_1(theFontName: any, theFontAspect: Font_FontAspect, theFontSize: Standard_Integer): any;
  GetFont_2(theFontName: TCollection_AsciiString): any;
  FindFont_1(theFontName: TCollection_AsciiString, theStrictLevel: Font_StrictLevel, theFontAspect: Font_FontAspect, theDoFailMsg: Standard_Boolean): any;
  FindFont_2(theFontName: TCollection_AsciiString, theFontAspect: Font_FontAspect): any;
  FindFallbackFont(theSubset: Font_UnicodeSubset, theFontAspect: Font_FontAspect): any;
  CheckFont_1(theFonts: any, theFontPath: TCollection_AsciiString): Standard_Boolean;
  CheckFont_2(theFontPath: Standard_CString): any;
  RegisterFont(theFont: any, theToOverride: Standard_Boolean): Standard_Boolean;
  RegisterFonts(theFonts: any, theToOverride: Standard_Boolean): Standard_Boolean;
  ToTraceAliases(): Standard_Boolean;
  SetTraceAliases(theToTrace: Standard_Boolean): void;
  GetAllAliases(theAliases: TColStd_SequenceOfHAsciiString): void;
  GetFontAliases(theFontNames: TColStd_SequenceOfHAsciiString, theAliasName: TCollection_AsciiString): void;
  AddFontAlias(theAliasName: TCollection_AsciiString, theFontName: TCollection_AsciiString): boolean;
  RemoveFontAlias(theAliasName: TCollection_AsciiString, theFontName: TCollection_AsciiString): boolean;
  InitFontDataBase(): void;
  ClearFontDataBase(): void;
  EmbedFallbackFont(): any;
}

export declare class Graphic3d_ArrayOfPolygons extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfPolygons_1 extends Graphic3d_ArrayOfPolygons {
    constructor(theMaxVertexs: Standard_Integer, theMaxBounds: Standard_Integer, theMaxEdges: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfPolygons_2 extends Graphic3d_ArrayOfPolygons {
    constructor(theMaxVertexs: Standard_Integer, theMaxBounds: Standard_Integer, theMaxEdges: Standard_Integer, theHasVNormals: Standard_Boolean, theHasVColors: Standard_Boolean, theHasBColors: Standard_Boolean, theHasVTexels: Standard_Boolean);
  }

export declare class Graphic3d_ArrayOfQuadrangleStrips extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfQuadrangleStrips_1 extends Graphic3d_ArrayOfQuadrangleStrips {
    constructor(theMaxVertexs: Standard_Integer, theMaxStrips: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfQuadrangleStrips_2 extends Graphic3d_ArrayOfQuadrangleStrips {
    constructor(theMaxVertexs: Standard_Integer, theMaxStrips: Standard_Integer, theHasVNormals: Standard_Boolean, theHasVColors: Standard_Boolean, theHasSColors: Standard_Boolean, theHasVTexels: Standard_Boolean);
  }

export declare class Graphic3d_ArrayOfSegments extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfSegments_1 extends Graphic3d_ArrayOfSegments {
    constructor(theMaxVertexs: Standard_Integer, theMaxEdges: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfSegments_2 extends Graphic3d_ArrayOfSegments {
    constructor(theMaxVertexs: Standard_Integer, theMaxEdges: Standard_Integer, theHasVColors: Standard_Boolean);
  }

export declare class Graphic3d_ArrayOfTriangleFans extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfTriangleFans_1 extends Graphic3d_ArrayOfTriangleFans {
    constructor(theMaxVertexs: Standard_Integer, theMaxFans: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfTriangleFans_2 extends Graphic3d_ArrayOfTriangleFans {
    constructor(theMaxVertexs: Standard_Integer, theMaxFans: Standard_Integer, theHasVNormals: Standard_Boolean, theHasVColors: Standard_Boolean, theHasBColors: Standard_Boolean, theHasVTexels: Standard_Boolean);
  }

export declare class Graphic3d_ArrayOfTriangleStrips extends Graphic3d_ArrayOfPrimitives {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_ArrayOfTriangleStrips_1 extends Graphic3d_ArrayOfTriangleStrips {
    constructor(theMaxVertexs: Standard_Integer, theMaxStrips: Standard_Integer, theArrayFlags: Graphic3d_ArrayFlags);
  }

  export declare class Graphic3d_ArrayOfTriangleStrips_2 extends Graphic3d_ArrayOfTriangleStrips {
    constructor(theMaxVertexs: Standard_Integer, theMaxStrips: Standard_Integer, theHasVNormals: Standard_Boolean, theHasVColors: Standard_Boolean, theHasBColors: Standard_Boolean, theHasVTexels: Standard_Boolean);
  }

export declare class Graphic3d_AttribBuffer extends Graphic3d_Buffer {
  constructor(theAlloc: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Init_1(theNbElems: Standard_Integer, theAttribs: Graphic3d_Attribute, theNbAttribs: Standard_Integer): boolean;
  Init_2(theNbElems: Standard_Integer, theAttribs: Graphic3d_Array1OfAttribute): boolean;
  IsMutable(): Standard_Boolean;
  SetMutable(theMutable: Standard_Boolean): void;
  IsInterleaved(): Standard_Boolean;
  SetInterleaved(theIsInterleaved: Standard_Boolean): void;
  InvalidatedRange(): Graphic3d_BufferRange;
  Validate(): void;
  Invalidate_1(): void;
  Invalidate_2(theAttributeIndex: Standard_Integer): void;
  Invalidate_3(theAttributeIndex: Standard_Integer, theVertexLower: Standard_Integer, theVertexUpper: Standard_Integer): void;
  Invalidate_4(theVertexLower: Standard_Integer, theVertexUpper: Standard_Integer): void;
  invalidate(theRange: Graphic3d_BufferRange): void;
}

export declare class Graphic3d_BvhCStructureSet extends BVH_PrimitiveSet3d {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Size(): Standard_Integer;
  Box_2(theIdx: Standard_Integer): Graphic3d_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  Add(theStruct: Graphic3d_CStructure): Standard_Boolean;
  Remove(theStruct: Graphic3d_CStructure): Standard_Boolean;
  Clear(): void;
  GetStructureById(theId: Standard_Integer): Graphic3d_CStructure;
  Structures(): NCollection_IndexedMap< Graphic3d_CStructure >;
}

export declare class Graphic3d_BvhCStructureSetTrsfPers {
  constructor(theBuilder: any)
  Size(): Standard_Integer;
  Box(theIdx: Standard_Integer): Graphic3d_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  Add(theStruct: Graphic3d_CStructure): Standard_Boolean;
  Remove(theStruct: Graphic3d_CStructure): Standard_Boolean;
  Clear(): void;
  GetStructureById(theId: Standard_Integer): Graphic3d_CStructure;
  Structures(): NCollection_IndexedMap< Graphic3d_CStructure >;
  MarkDirty(): void;
  BVH(theCamera: any, theProjectionMatrix: Graphic3d_Mat4d, theWorldViewMatrix: Graphic3d_Mat4d, theViewportWidth: Standard_Integer, theViewportHeight: Standard_Integer, theWVPState: Graphic3d_WorldViewProjState): any;
  Builder(): any;
  SetBuilder(theBuilder: any): void;
}

export declare class Graphic3d_CTexture {
  constructor()
}

export declare class Graphic3d_CubeMapPacked {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  CompressedValue(theSupported: any): any;
  Value(theSupported: any): any;
}

  export declare class Graphic3d_CubeMapPacked_1 extends Graphic3d_CubeMapPacked {
    constructor(theFileName: TCollection_AsciiString, theOrder: Graphic3d_ValidatedCubeMapOrder);
  }

  export declare class Graphic3d_CubeMapPacked_2 extends Graphic3d_CubeMapPacked {
    constructor(theImage: any, theOrder: Graphic3d_ValidatedCubeMapOrder);
  }

export declare class Graphic3d_CubeMapSeparate {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  CompressedValue(theSupported: any): any;
  Value(theSupported: any): any;
  GetImage(a0: any): any;
  IsDone(): Standard_Boolean;
}

  export declare class Graphic3d_CubeMapSeparate_1 extends Graphic3d_CubeMapSeparate {
    constructor(thePaths: NCollection_Array1<TCollection_AsciiString>);
  }

  export declare class Graphic3d_CubeMapSeparate_2 extends Graphic3d_CubeMapSeparate {
    constructor(theImages: any);
  }

export declare class Graphic3d_CullingTool {
  constructor()
  SetViewVolume(theCamera: any, theModelWorld: Graphic3d_Mat4d): void;
  SetViewportSize(theViewportWidth: Standard_Integer, theViewportHeight: Standard_Integer, theResolutionRatio: Standard_Real): void;
  SetCullingDistance(theCtx: any, theDistance: Standard_Real): void;
  SetCullingSize(theCtx: any, theSize: Standard_Real): void;
  CacheClipPtsProjections(): void;
  IsCulled(theCtx: any, theMinPnt: Graphic3d_Vec3d, theMaxPnt: Graphic3d_Vec3d, theIsInside: Standard_Boolean): boolean;
  Camera(): any;
  ProjectionMatrix(): Graphic3d_Mat4d;
  WorldViewMatrix(): Graphic3d_Mat4d;
  ViewportWidth(): Standard_Integer;
  ViewportHeight(): Standard_Integer;
  WorldViewProjState(): Graphic3d_WorldViewProjState;
  CameraEye(): Graphic3d_Vec3d;
  CameraDirection(): Graphic3d_Vec3d;
  SignedPlanePointDistance(theNormal: Graphic3d_Vec4d, thePnt: Graphic3d_Vec4d): Standard_Real;
  IsOutFrustum(theMinPnt: Graphic3d_Vec3d, theMaxPnt: Graphic3d_Vec3d, theIsInside: Standard_Boolean): boolean;
  IsTooDistant(theCtx: any, theMinPnt: Graphic3d_Vec3d, theMaxPnt: Graphic3d_Vec3d, theIsInside: Standard_Boolean): boolean;
  IsTooSmall(theCtx: any, theMinPnt: Graphic3d_Vec3d, theMaxPnt: Graphic3d_Vec3d): boolean;
}

export declare class Graphic3d_FrameStatsData {
  constructor()
  FrameRate(): Standard_Real;
  FrameRateCpu(): Standard_Real;
  ImmediateFrameRate(): Standard_Real;
  ImmediateFrameRateCpu(): Standard_Real;
  CounterValue(theIndex: Graphic3d_FrameStatsCounter): Standard_Size;
  TimerValue(theIndex: Graphic3d_FrameStatsTimer): Standard_Real;
  Reset(): void;
  FillMax(theOther: Graphic3d_FrameStatsData): void;
}

export declare class Graphic3d_FrameStatsDataTmp extends Graphic3d_FrameStatsData {
  constructor()
  FlushTimers(theNbFrames: Standard_Size, theIsFinal: boolean): void;
  Reset(): void;
  ChangeFrameRate(): Standard_Real;
  ChangeFrameRateCpu(): Standard_Real;
  ChangeImmediateFrameRate(): Standard_Real;
  ChangeImmediateFrameRateCpu(): Standard_Real;
  ChangeTimer(theTimer: Graphic3d_FrameStatsTimer): OSD_Timer;
  ChangeCounterValue(theIndex: Graphic3d_FrameStatsCounter): Standard_Size;
  ChangeTimerValue(theIndex: Graphic3d_FrameStatsTimer): Standard_Real;
}

export declare class Graphic3d_FrameStats extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  UpdateInterval(): Standard_Real;
  SetUpdateInterval(theInterval: Standard_Real): void;
  IsLongLineFormat(): Standard_Boolean;
  SetLongLineFormat(theValue: Standard_Boolean): void;
  FrameStart(theView: any, theIsImmediateOnly: boolean): void;
  FrameEnd(theView: any, theIsImmediateOnly: boolean): void;
  FormatStats_1(theFlags: any): TCollection_AsciiString;
  FormatStats_2(theDict: TColStd_IndexedDataMapOfStringString, theFlags: any): void;
  FrameDuration(): Standard_Real;
  FrameRate(): Standard_Real;
  FrameRateCpu(): Standard_Real;
  CounterValue(theCounter: Graphic3d_FrameStatsCounter): Standard_Size;
  TimerValue(theTimer: Graphic3d_FrameStatsTimer): Standard_Real;
  HasCulledLayers(): Standard_Boolean;
  HasCulledStructs(): Standard_Boolean;
  LastDataFrame(): Graphic3d_FrameStatsData;
  LastDataFrameIndex(): Standard_Integer;
  DataFrames(): NCollection_Array1<Graphic3d_FrameStatsData>;
  ChangeDataFrames(): NCollection_Array1<Graphic3d_FrameStatsData>;
  ChangeCounter(theCounter: Graphic3d_FrameStatsCounter): Standard_Size;
  ChangeTimer(theTimer: Graphic3d_FrameStatsTimer): Standard_Real;
  ActiveDataFrame(): Graphic3d_FrameStatsDataTmp;
}

export declare class Graphic3d_GroupDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_GroupDefinitionError_1 extends Graphic3d_GroupDefinitionError {
    constructor();
  }

  export declare class Graphic3d_GroupDefinitionError_2 extends Graphic3d_GroupDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Graphic3d_Layer extends Standard_Transient {
  constructor(theId: Graphic3d_ZLayerId, theNbPriorities: Standard_Integer, theBuilder: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  LayerId(): Graphic3d_ZLayerId;
  FrustumCullingBVHBuilder(): any;
  SetFrustumCullingBVHBuilder(theBuilder: any): void;
  IsImmediate(): Standard_Boolean;
  LayerSettings(): Graphic3d_ZLayerSettings;
  SetLayerSettings(theSettings: Graphic3d_ZLayerSettings): void;
  Add(theStruct: Graphic3d_CStructure, thePriority: Standard_Integer, isForChangePriority: Standard_Boolean): void;
  Remove(theStruct: Graphic3d_CStructure, thePriority: Standard_Integer, isForChangePriority: Standard_Boolean): boolean;
  NbStructures(): Standard_Integer;
  NbStructuresNotCulled(): Standard_Integer;
  NbPriorities(): Standard_Integer;
  Append(theOther: Graphic3d_Layer): Standard_Boolean;
  ArrayOfStructures(): Graphic3d_ArrayOfIndexedMapOfStructure;
  InvalidateBVHData(): void;
  InvalidateBoundingBox(): void;
  BoundingBox(theViewId: Standard_Integer, theCamera: any, theWindowWidth: Standard_Integer, theWindowHeight: Standard_Integer, theToIncludeAuxiliary: Standard_Boolean): Bnd_Box;
  considerZoomPersistenceObjects(theViewId: Standard_Integer, theCamera: any, theWindowWidth: Standard_Integer, theWindowHeight: Standard_Integer): Standard_Real;
  UpdateCulling(theViewId: Standard_Integer, theSelector: Graphic3d_CullingTool, theFrustumCullingState: any): void;
  IsCulled(): boolean;
  NbOfTransformPersistenceObjects(): Standard_Integer;
  CullableStructuresBVH(): Graphic3d_BvhCStructureSet;
  CullableTrsfPersStructuresBVH(): Graphic3d_BvhCStructureSetTrsfPers;
  NonCullableStructures(): NCollection_IndexedMap< Graphic3d_CStructure >;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Graphic3d_MaterialDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_MaterialDefinitionError_1 extends Graphic3d_MaterialDefinitionError {
    constructor();
  }

  export declare class Graphic3d_MaterialDefinitionError_2 extends Graphic3d_MaterialDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Graphic3d_MutableIndexBuffer extends Graphic3d_IndexBuffer {
  constructor(theAlloc: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsMutable(): Standard_Boolean;
  InvalidatedRange(): Graphic3d_BufferRange;
  Validate(): void;
  Invalidate_1(): void;
  Invalidate_2(theIndexLower: Standard_Integer, theIndexUpper: Standard_Integer): void;
  invalidate(theRange: Graphic3d_BufferRange): void;
}

export declare class Graphic3d_PriorityDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_PriorityDefinitionError_1 extends Graphic3d_PriorityDefinitionError {
    constructor();
  }

  export declare class Graphic3d_PriorityDefinitionError_2 extends Graphic3d_PriorityDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Graphic3d_StructureDefinitionError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_StructureDefinitionError_1 extends Graphic3d_StructureDefinitionError {
    constructor();
  }

  export declare class Graphic3d_StructureDefinitionError_2 extends Graphic3d_StructureDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Graphic3d_Text extends Standard_Transient {
  constructor(theHeight: Standard_ShortReal)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Text(): NCollection_String;
  SetText_1(theText: NCollection_String): void;
  SetText_2(theText: TCollection_AsciiString): void;
  SetText_3(theText: Standard_CString): void;
  TextFormatter(): any;
  SetTextFormatter(theFormatter: any): void;
  Position(): gp_Pnt;
  SetPosition(thePoint: gp_Pnt): void;
  Orientation(): gp_Ax2;
  HasPlane(): Standard_Boolean;
  SetOrientation(theOrientation: gp_Ax2): void;
  ResetOrientation(): void;
  HasOwnAnchorPoint(): Standard_Boolean;
  SetOwnAnchorPoint(theHasOwnAnchor: Standard_Boolean): void;
  Height(): Standard_ShortReal;
  SetHeight(theHeight: Standard_ShortReal): void;
  HorizontalAlignment(): Graphic3d_HorizontalTextAlignment;
  SetHorizontalAlignment(theJustification: Graphic3d_HorizontalTextAlignment): void;
  VerticalAlignment(): Graphic3d_VerticalTextAlignment;
  SetVerticalAlignment(theJustification: Graphic3d_VerticalTextAlignment): void;
}

export declare class Graphic3d_Texture1D extends Graphic3d_TextureMap {
  Name(): Graphic3d_NameOfTexture1D;
  NumberOfTextures(): Standard_Integer;
  TextureName(aRank: Standard_Integer): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Graphic3d_Texture1Dmanual extends Graphic3d_Texture1D {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_Texture1Dmanual_1 extends Graphic3d_Texture1Dmanual {
    constructor(theFileName: TCollection_AsciiString);
  }

  export declare class Graphic3d_Texture1Dmanual_2 extends Graphic3d_Texture1Dmanual {
    constructor(theNOT: Graphic3d_NameOfTexture1D);
  }

  export declare class Graphic3d_Texture1Dmanual_3 extends Graphic3d_Texture1Dmanual {
    constructor(thePixMap: any);
  }

export declare class Graphic3d_Texture1Dsegment extends Graphic3d_Texture1D {
  SetSegment(theX1: Standard_ShortReal, theY1: Standard_ShortReal, theZ1: Standard_ShortReal, theX2: Standard_ShortReal, theY2: Standard_ShortReal, theZ2: Standard_ShortReal): void;
  Segment(theX1: Standard_ShortReal, theY1: Standard_ShortReal, theZ1: Standard_ShortReal, theX2: Standard_ShortReal, theY2: Standard_ShortReal, theZ2: Standard_ShortReal): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_Texture1Dsegment_1 extends Graphic3d_Texture1Dsegment {
    constructor(theFileName: TCollection_AsciiString);
  }

  export declare class Graphic3d_Texture1Dsegment_2 extends Graphic3d_Texture1Dsegment {
    constructor(theNOT: Graphic3d_NameOfTexture1D);
  }

  export declare class Graphic3d_Texture1Dsegment_3 extends Graphic3d_Texture1Dsegment {
    constructor(thePixMap: any);
  }

export declare class Graphic3d_Texture2Dplane extends Graphic3d_Texture2D {
  SetPlaneS(A: Standard_ShortReal, B: Standard_ShortReal, C: Standard_ShortReal, D: Standard_ShortReal): void;
  SetPlaneT(A: Standard_ShortReal, B: Standard_ShortReal, C: Standard_ShortReal, D: Standard_ShortReal): void;
  SetPlane(thePlane: Graphic3d_NameOfTexturePlane): void;
  SetScaleS(theVal: Standard_ShortReal): void;
  SetScaleT(theVal: Standard_ShortReal): void;
  SetTranslateS(theVal: Standard_ShortReal): void;
  SetTranslateT(theVal: Standard_ShortReal): void;
  SetRotation(theVal: Standard_ShortReal): void;
  Plane(): Graphic3d_NameOfTexturePlane;
  PlaneS(A: Standard_ShortReal, B: Standard_ShortReal, C: Standard_ShortReal, D: Standard_ShortReal): void;
  PlaneT(A: Standard_ShortReal, B: Standard_ShortReal, C: Standard_ShortReal, D: Standard_ShortReal): void;
  TranslateS(theVal: Standard_ShortReal): void;
  TranslateT(theVal: Standard_ShortReal): void;
  ScaleS(theVal: Standard_ShortReal): void;
  ScaleT(theVal: Standard_ShortReal): void;
  Rotation(theVal: Standard_ShortReal): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_Texture2Dplane_1 extends Graphic3d_Texture2Dplane {
    constructor(theFileName: TCollection_AsciiString);
  }

  export declare class Graphic3d_Texture2Dplane_2 extends Graphic3d_Texture2Dplane {
    constructor(theNOT: Graphic3d_NameOfTexture2D);
  }

  export declare class Graphic3d_Texture2Dplane_3 extends Graphic3d_Texture2Dplane {
    constructor(thePixMap: any);
  }

export declare class Graphic3d_TransformError extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Graphic3d_TransformError_1 extends Graphic3d_TransformError {
    constructor();
  }

  export declare class Graphic3d_TransformError_2 extends Graphic3d_TransformError {
    constructor(theMessage: Standard_CString);
  }

export declare class Image_Texture extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  TextureId(): TCollection_AsciiString;
  FilePath(): TCollection_AsciiString;
  FileOffset(): int64_t;
  FileLength(): int64_t;
  DataBuffer(): any;
  ProbeImageFileFormat(): TCollection_AsciiString;
  ReadCompressedImage(theSupported: any): any;
  ReadImage(theSupported: any): any;
  WriteImage(theFile: TCollection_AsciiString): Standard_Boolean;
  HashCode(theTexture: any, theUpper: number): number;
  IsEqual(theTex1: any, theTex2: any): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Image_Texture_1 extends Image_Texture {
    constructor(theFileName: TCollection_AsciiString);
  }

  export declare class Image_Texture_2 extends Image_Texture {
    constructor(theFileName: TCollection_AsciiString, theOffset: int64_t, theLength: int64_t);
  }

  export declare class Image_Texture_3 extends Image_Texture {
    constructor(theBuffer: any, theId: TCollection_AsciiString);
  }

export declare class Image_AlienPixMap extends Image_PixMap {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsTopDownDefault(): boolean;
  Load_1(theFileName: TCollection_AsciiString): boolean;
  Load_2(theStream: any, theFileName: TCollection_AsciiString): boolean;
  Load_3(theData: Standard_Byte, theLength: Standard_Size, theFileName: TCollection_AsciiString): boolean;
  Save(theFileName: TCollection_AsciiString): boolean;
  InitTrash(thePixelFormat: Image_Format, theSizeX: Standard_Size, theSizeY: Standard_Size, theSizeRowBytes: Standard_Size): boolean;
  InitCopy(theCopy: Image_PixMap): boolean;
  Clear(): void;
  AdjustGamma(theGammaCorr: Standard_Real): boolean;
}

export declare class Image_CompressedPixMap extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  BaseFormat(): Image_Format;
  SetBaseFormat(theFormat: Image_Format): void;
  CompressedFormat(): Image_CompressedFormat;
  SetCompressedFormat(theFormat: Image_CompressedFormat): void;
  FaceData(): any;
  SetFaceData(theBuffer: any): void;
  MipMaps(): NCollection_Array1<Standard_Integer>;
  ChangeMipMaps(): NCollection_Array1<Standard_Integer>;
  IsCompleteMipMapSet(): Standard_Boolean;
  SetCompleteMipMapSet(theIsComplete: Standard_Boolean): void;
  FaceBytes(): Standard_Size;
  SetFaceBytes(theSize: Standard_Size): void;
  SizeX(): Standard_Integer;
  SizeY(): Standard_Integer;
  SetSize(theSizeX: Standard_Integer, theSizeY: Standard_Integer): void;
  IsTopDown(): boolean;
  NbFaces(): Standard_Integer;
  SetNbFaces(theSize: Standard_Integer): void;
}

export declare class Image_DDSParser {
  constructor();
  Load_1(theSupported: any, theFile: TCollection_AsciiString, theFaceIndex: Standard_Integer, theFileOffset: int64_t): any;
  Load_2(theSupported: any, theBuffer: any, theFaceIndex: Standard_Integer): any;
}

export declare class Image_Diff extends Standard_Transient {
  constructor()
  Init_1(theImageRef: any, theImageNew: any, theToBlackWhite: Standard_Boolean): Standard_Boolean;
  Init_2(theImgPathRef: TCollection_AsciiString, theImgPathNew: TCollection_AsciiString, theToBlackWhite: Standard_Boolean): Standard_Boolean;
  SetColorTolerance(theTolerance: Standard_Real): void;
  ColorTolerance(): Standard_Real;
  SetBorderFilterOn(theToIgnore: Standard_Boolean): void;
  IsBorderFilterOn(): Standard_Boolean;
  Compare(): Standard_Integer;
  SaveDiffImage_1(theDiffImage: Image_PixMap): Standard_Boolean;
  SaveDiffImage_2(theDiffPath: TCollection_AsciiString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Image_SupportedFormats extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsSupported_1(theFormat: Image_Format): boolean;
  Add_1(theFormat: Image_Format): void;
  HasCompressed(): boolean;
  IsSupported_2(theFormat: Image_CompressedFormat): boolean;
  Add_2(theFormat: Image_CompressedFormat): void;
  Clear(): void;
}

export declare class Image_VideoRecorder extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Close(): void;
  Open(theFileName: string, theParams: Image_VideoParams): Standard_Boolean;
  ChangeFrame(): Image_PixMap;
  FrameCount(): int64_t;
  PushFrame(): Standard_Boolean;
}

export declare class WNT_ClassDefinitionError extends Standard_ConstructionError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class WNT_ClassDefinitionError_1 extends WNT_ClassDefinitionError {
    constructor();
  }

  export declare class WNT_ClassDefinitionError_2 extends WNT_ClassDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class WNT_HIDSpaceMouse {
  constructor(theProductId: unsigned long, theData: Standard_Byte, theSize: Standard_Size)
  IsKnownProduct(theProductId: unsigned long): boolean;
  RawValueRange(): int16_t;
  SetRawValueRange(theRange: int16_t): void;
  IsTranslation(): boolean;
  Translation(theIsIdle: boolean, theIsQuadric: boolean): Graphic3d_Vec3d;
  IsRotation(): boolean;
  Rotation(theIsIdle: boolean, theIsQuadric: boolean): Graphic3d_Vec3d;
  IsKeyState(): boolean;
  KeyState(): uint32_t;
  HidToSpaceKey(theKeyBit: unsigned short): Aspect_VKey;
}

export declare class Handle_Graphic3d_MarkerImage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_MarkerImage): void;
  get(): Graphic3d_MarkerImage;
}

  export declare class Handle_Graphic3d_MarkerImage_1 extends Handle_Graphic3d_MarkerImage {
    constructor();
  }

  export declare class Handle_Graphic3d_MarkerImage_2 extends Handle_Graphic3d_MarkerImage {
    constructor(thePtr: Graphic3d_MarkerImage);
  }

  export declare class Handle_Graphic3d_MarkerImage_3 extends Handle_Graphic3d_MarkerImage {
    constructor(theHandle: Handle_Graphic3d_MarkerImage);
  }

  export declare class Handle_Graphic3d_MarkerImage_4 extends Handle_Graphic3d_MarkerImage {
    constructor(theHandle: Handle_Graphic3d_MarkerImage);
  }

export declare class Handle_Image_PixMapData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Image_PixMapData): void;
  get(): Image_PixMapData;
}

  export declare class Handle_Image_PixMapData_1 extends Handle_Image_PixMapData {
    constructor();
  }

  export declare class Handle_Image_PixMapData_2 extends Handle_Image_PixMapData {
    constructor(thePtr: Image_PixMapData);
  }

  export declare class Handle_Image_PixMapData_3 extends Handle_Image_PixMapData {
    constructor(theHandle: Handle_Image_PixMapData);
  }

  export declare class Handle_Image_PixMapData_4 extends Handle_Image_PixMapData {
    constructor(theHandle: Handle_Image_PixMapData);
  }

export declare class Handle_Image_PixMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Image_PixMap): void;
  get(): Image_PixMap;
}

  export declare class Handle_Image_PixMap_1 extends Handle_Image_PixMap {
    constructor();
  }

  export declare class Handle_Image_PixMap_2 extends Handle_Image_PixMap {
    constructor(thePtr: Image_PixMap);
  }

  export declare class Handle_Image_PixMap_3 extends Handle_Image_PixMap {
    constructor(theHandle: Handle_Image_PixMap);
  }

  export declare class Handle_Image_PixMap_4 extends Handle_Image_PixMap {
    constructor(theHandle: Handle_Image_PixMap);
  }

export declare class Handle_Graphic3d_HatchStyle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_HatchStyle): void;
  get(): Graphic3d_HatchStyle;
}

  export declare class Handle_Graphic3d_HatchStyle_1 extends Handle_Graphic3d_HatchStyle {
    constructor();
  }

  export declare class Handle_Graphic3d_HatchStyle_2 extends Handle_Graphic3d_HatchStyle {
    constructor(thePtr: Graphic3d_HatchStyle);
  }

  export declare class Handle_Graphic3d_HatchStyle_3 extends Handle_Graphic3d_HatchStyle {
    constructor(theHandle: Handle_Graphic3d_HatchStyle);
  }

  export declare class Handle_Graphic3d_HatchStyle_4 extends Handle_Graphic3d_HatchStyle {
    constructor(theHandle: Handle_Graphic3d_HatchStyle);
  }

export declare class Handle_Graphic3d_ShaderAttribute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ShaderAttribute): void;
  get(): Graphic3d_ShaderAttribute;
}

  export declare class Handle_Graphic3d_ShaderAttribute_1 extends Handle_Graphic3d_ShaderAttribute {
    constructor();
  }

  export declare class Handle_Graphic3d_ShaderAttribute_2 extends Handle_Graphic3d_ShaderAttribute {
    constructor(thePtr: Graphic3d_ShaderAttribute);
  }

  export declare class Handle_Graphic3d_ShaderAttribute_3 extends Handle_Graphic3d_ShaderAttribute {
    constructor(theHandle: Handle_Graphic3d_ShaderAttribute);
  }

  export declare class Handle_Graphic3d_ShaderAttribute_4 extends Handle_Graphic3d_ShaderAttribute {
    constructor(theHandle: Handle_Graphic3d_ShaderAttribute);
  }

export declare class Handle_Graphic3d_ShaderObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ShaderObject): void;
  get(): Graphic3d_ShaderObject;
}

  export declare class Handle_Graphic3d_ShaderObject_1 extends Handle_Graphic3d_ShaderObject {
    constructor();
  }

  export declare class Handle_Graphic3d_ShaderObject_2 extends Handle_Graphic3d_ShaderObject {
    constructor(thePtr: Graphic3d_ShaderObject);
  }

  export declare class Handle_Graphic3d_ShaderObject_3 extends Handle_Graphic3d_ShaderObject {
    constructor(theHandle: Handle_Graphic3d_ShaderObject);
  }

  export declare class Handle_Graphic3d_ShaderObject_4 extends Handle_Graphic3d_ShaderObject {
    constructor(theHandle: Handle_Graphic3d_ShaderObject);
  }

export declare class Graphic3d_Mat4 {
  constructor()
  Rows(): size_t;
  Cols(): size_t;
  GetValue(theRow: size_t, theCol: size_t): Standard_ShortReal;
  ChangeValue(theRow: size_t, theCol: size_t): Standard_ShortReal;
  SetValue(theRow: size_t, theCol: size_t, theValue: Standard_ShortReal): void;
  GetRow(theRow: size_t): NCollection_Vec4<Standard_ShortReal>;
  SetRow_1(theRow: size_t, theVec: NCollection_Vec3<Standard_ShortReal>): void;
  SetRow_2(theRow: size_t, theVec: NCollection_Vec4<Standard_ShortReal>): void;
  GetColumn(theCol: size_t): NCollection_Vec4<Standard_ShortReal>;
  SetColumn_1(theCol: size_t, theVec: NCollection_Vec3<Standard_ShortReal>): void;
  SetColumn_2(theCol: size_t, theVec: NCollection_Vec4<Standard_ShortReal>): void;
  GetDiagonal(): NCollection_Vec4<Standard_ShortReal>;
  SetDiagonal_1(theVec: NCollection_Vec3<Standard_ShortReal>): void;
  SetDiagonal_2(theVec: NCollection_Vec4<Standard_ShortReal>): void;
  InitIdentity(): void;
  IsIdentity(): boolean;
  IsEqual(theOther: Graphic3d_Mat4): boolean;
  GetData(): Standard_ShortReal;
  ChangeData(): Standard_ShortReal;
  Multiply_1(theMatA: Graphic3d_Mat4, theMatB: Graphic3d_Mat4): Graphic3d_Mat4;
  Multiply_2(theMat: Graphic3d_Mat4): void;
  Multiplied_1(theMat: Graphic3d_Mat4): Graphic3d_Mat4;
  Multiply_3(theFactor: Standard_ShortReal): void;
  Multiplied_2(theFactor: Standard_ShortReal): Graphic3d_Mat4;
  Translate(theVec: NCollection_Vec3<Standard_ShortReal>): void;
  Transposed(): Graphic3d_Mat4;
  Transpose(): void;
  Inverted(theOutMx: Graphic3d_Mat4): boolean;
  Map_1(theData: Standard_ShortReal): Graphic3d_Mat4;
  Map_2(theData: Standard_ShortReal): Graphic3d_Mat4;
  DumpJson(theOStream: Standard_OStream, a1: Standard_Integer): void;
}

export declare class Graphic3d_Mat4d {
  constructor()
  Rows(): size_t;
  Cols(): size_t;
  GetValue(theRow: size_t, theCol: size_t): Standard_Real;
  ChangeValue(theRow: size_t, theCol: size_t): Standard_Real;
  SetValue(theRow: size_t, theCol: size_t, theValue: Standard_Real): void;
  GetRow(theRow: size_t): NCollection_Vec4<Standard_Real>;
  SetRow_1(theRow: size_t, theVec: NCollection_Vec3<Standard_Real>): void;
  SetRow_2(theRow: size_t, theVec: NCollection_Vec4<Standard_Real>): void;
  GetColumn(theCol: size_t): NCollection_Vec4<Standard_Real>;
  SetColumn_1(theCol: size_t, theVec: NCollection_Vec3<Standard_Real>): void;
  SetColumn_2(theCol: size_t, theVec: NCollection_Vec4<Standard_Real>): void;
  GetDiagonal(): NCollection_Vec4<Standard_Real>;
  SetDiagonal_1(theVec: NCollection_Vec3<Standard_Real>): void;
  SetDiagonal_2(theVec: NCollection_Vec4<Standard_Real>): void;
  InitIdentity(): void;
  IsIdentity(): boolean;
  IsEqual(theOther: Graphic3d_Mat4d): boolean;
  GetData(): Standard_Real;
  ChangeData(): Standard_Real;
  Multiply_1(theMatA: Graphic3d_Mat4d, theMatB: Graphic3d_Mat4d): Graphic3d_Mat4d;
  Multiply_2(theMat: Graphic3d_Mat4d): void;
  Multiplied_1(theMat: Graphic3d_Mat4d): Graphic3d_Mat4d;
  Multiply_3(theFactor: Standard_Real): void;
  Multiplied_2(theFactor: Standard_Real): Graphic3d_Mat4d;
  Translate(theVec: NCollection_Vec3<Standard_Real>): void;
  Transposed(): Graphic3d_Mat4d;
  Transpose(): void;
  Inverted(theOutMx: Graphic3d_Mat4d): boolean;
  Map_1(theData: Standard_Real): Graphic3d_Mat4d;
  Map_2(theData: Standard_Real): Graphic3d_Mat4d;
  DumpJson(theOStream: Standard_OStream, a1: Standard_Integer): void;
}

export declare class Handle_Graphic3d_ShaderVariable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ShaderVariable): void;
  get(): Graphic3d_ShaderVariable;
}

  export declare class Handle_Graphic3d_ShaderVariable_1 extends Handle_Graphic3d_ShaderVariable {
    constructor();
  }

  export declare class Handle_Graphic3d_ShaderVariable_2 extends Handle_Graphic3d_ShaderVariable {
    constructor(thePtr: Graphic3d_ShaderVariable);
  }

  export declare class Handle_Graphic3d_ShaderVariable_3 extends Handle_Graphic3d_ShaderVariable {
    constructor(theHandle: Handle_Graphic3d_ShaderVariable);
  }

  export declare class Handle_Graphic3d_ShaderVariable_4 extends Handle_Graphic3d_ShaderVariable {
    constructor(theHandle: Handle_Graphic3d_ShaderVariable);
  }

export declare class Handle_Graphic3d_TextureParams {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_TextureParams): void;
  get(): Graphic3d_TextureParams;
}

  export declare class Handle_Graphic3d_TextureParams_1 extends Handle_Graphic3d_TextureParams {
    constructor();
  }

  export declare class Handle_Graphic3d_TextureParams_2 extends Handle_Graphic3d_TextureParams {
    constructor(thePtr: Graphic3d_TextureParams);
  }

  export declare class Handle_Graphic3d_TextureParams_3 extends Handle_Graphic3d_TextureParams {
    constructor(theHandle: Handle_Graphic3d_TextureParams);
  }

  export declare class Handle_Graphic3d_TextureParams_4 extends Handle_Graphic3d_TextureParams {
    constructor(theHandle: Handle_Graphic3d_TextureParams);
  }

export declare class Handle_Graphic3d_ShaderProgram {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ShaderProgram): void;
  get(): Graphic3d_ShaderProgram;
}

  export declare class Handle_Graphic3d_ShaderProgram_1 extends Handle_Graphic3d_ShaderProgram {
    constructor();
  }

  export declare class Handle_Graphic3d_ShaderProgram_2 extends Handle_Graphic3d_ShaderProgram {
    constructor(thePtr: Graphic3d_ShaderProgram);
  }

  export declare class Handle_Graphic3d_ShaderProgram_3 extends Handle_Graphic3d_ShaderProgram {
    constructor(theHandle: Handle_Graphic3d_ShaderProgram);
  }

  export declare class Handle_Graphic3d_ShaderProgram_4 extends Handle_Graphic3d_ShaderProgram {
    constructor(theHandle: Handle_Graphic3d_ShaderProgram);
  }

export declare class Handle_Graphic3d_TextureRoot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_TextureRoot): void;
  get(): Graphic3d_TextureRoot;
}

  export declare class Handle_Graphic3d_TextureRoot_1 extends Handle_Graphic3d_TextureRoot {
    constructor();
  }

  export declare class Handle_Graphic3d_TextureRoot_2 extends Handle_Graphic3d_TextureRoot {
    constructor(thePtr: Graphic3d_TextureRoot);
  }

  export declare class Handle_Graphic3d_TextureRoot_3 extends Handle_Graphic3d_TextureRoot {
    constructor(theHandle: Handle_Graphic3d_TextureRoot);
  }

  export declare class Handle_Graphic3d_TextureRoot_4 extends Handle_Graphic3d_TextureRoot {
    constructor(theHandle: Handle_Graphic3d_TextureRoot);
  }

export declare class Handle_Graphic3d_TextureMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_TextureMap): void;
  get(): Graphic3d_TextureMap;
}

  export declare class Handle_Graphic3d_TextureMap_1 extends Handle_Graphic3d_TextureMap {
    constructor();
  }

  export declare class Handle_Graphic3d_TextureMap_2 extends Handle_Graphic3d_TextureMap {
    constructor(thePtr: Graphic3d_TextureMap);
  }

  export declare class Handle_Graphic3d_TextureMap_3 extends Handle_Graphic3d_TextureMap {
    constructor(theHandle: Handle_Graphic3d_TextureMap);
  }

  export declare class Handle_Graphic3d_TextureMap_4 extends Handle_Graphic3d_TextureMap {
    constructor(theHandle: Handle_Graphic3d_TextureMap);
  }

export declare class Handle_Graphic3d_Aspects {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Aspects): void;
  get(): Graphic3d_Aspects;
}

  export declare class Handle_Graphic3d_Aspects_1 extends Handle_Graphic3d_Aspects {
    constructor();
  }

  export declare class Handle_Graphic3d_Aspects_2 extends Handle_Graphic3d_Aspects {
    constructor(thePtr: Graphic3d_Aspects);
  }

  export declare class Handle_Graphic3d_Aspects_3 extends Handle_Graphic3d_Aspects {
    constructor(theHandle: Handle_Graphic3d_Aspects);
  }

  export declare class Handle_Graphic3d_Aspects_4 extends Handle_Graphic3d_Aspects {
    constructor(theHandle: Handle_Graphic3d_Aspects);
  }

export declare class Handle_Graphic3d_AspectLine3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_AspectLine3d): void;
  get(): Graphic3d_AspectLine3d;
}

  export declare class Handle_Graphic3d_AspectLine3d_1 extends Handle_Graphic3d_AspectLine3d {
    constructor();
  }

  export declare class Handle_Graphic3d_AspectLine3d_2 extends Handle_Graphic3d_AspectLine3d {
    constructor(thePtr: Graphic3d_AspectLine3d);
  }

  export declare class Handle_Graphic3d_AspectLine3d_3 extends Handle_Graphic3d_AspectLine3d {
    constructor(theHandle: Handle_Graphic3d_AspectLine3d);
  }

  export declare class Handle_Graphic3d_AspectLine3d_4 extends Handle_Graphic3d_AspectLine3d {
    constructor(theHandle: Handle_Graphic3d_AspectLine3d);
  }

export declare class Handle_Graphic3d_AspectFillArea3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_AspectFillArea3d): void;
  get(): Graphic3d_AspectFillArea3d;
}

  export declare class Handle_Graphic3d_AspectFillArea3d_1 extends Handle_Graphic3d_AspectFillArea3d {
    constructor();
  }

  export declare class Handle_Graphic3d_AspectFillArea3d_2 extends Handle_Graphic3d_AspectFillArea3d {
    constructor(thePtr: Graphic3d_AspectFillArea3d);
  }

  export declare class Handle_Graphic3d_AspectFillArea3d_3 extends Handle_Graphic3d_AspectFillArea3d {
    constructor(theHandle: Handle_Graphic3d_AspectFillArea3d);
  }

  export declare class Handle_Graphic3d_AspectFillArea3d_4 extends Handle_Graphic3d_AspectFillArea3d {
    constructor(theHandle: Handle_Graphic3d_AspectFillArea3d);
  }

export declare class Handle_Graphic3d_AspectText3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_AspectText3d): void;
  get(): Graphic3d_AspectText3d;
}

  export declare class Handle_Graphic3d_AspectText3d_1 extends Handle_Graphic3d_AspectText3d {
    constructor();
  }

  export declare class Handle_Graphic3d_AspectText3d_2 extends Handle_Graphic3d_AspectText3d {
    constructor(thePtr: Graphic3d_AspectText3d);
  }

  export declare class Handle_Graphic3d_AspectText3d_3 extends Handle_Graphic3d_AspectText3d {
    constructor(theHandle: Handle_Graphic3d_AspectText3d);
  }

  export declare class Handle_Graphic3d_AspectText3d_4 extends Handle_Graphic3d_AspectText3d {
    constructor(theHandle: Handle_Graphic3d_AspectText3d);
  }

export declare class Handle_Graphic3d_AspectMarker3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_AspectMarker3d): void;
  get(): Graphic3d_AspectMarker3d;
}

  export declare class Handle_Graphic3d_AspectMarker3d_1 extends Handle_Graphic3d_AspectMarker3d {
    constructor();
  }

  export declare class Handle_Graphic3d_AspectMarker3d_2 extends Handle_Graphic3d_AspectMarker3d {
    constructor(thePtr: Graphic3d_AspectMarker3d);
  }

  export declare class Handle_Graphic3d_AspectMarker3d_3 extends Handle_Graphic3d_AspectMarker3d {
    constructor(theHandle: Handle_Graphic3d_AspectMarker3d);
  }

  export declare class Handle_Graphic3d_AspectMarker3d_4 extends Handle_Graphic3d_AspectMarker3d {
    constructor(theHandle: Handle_Graphic3d_AspectMarker3d);
  }

export declare class Graphic3d_Array1OfAttribute {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Graphic3d_Attribute): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Graphic3d_Array1OfAttribute): Graphic3d_Array1OfAttribute;
  Move(theOther: Graphic3d_Array1OfAttribute): Graphic3d_Array1OfAttribute;
  First(): Graphic3d_Attribute;
  ChangeFirst(): Graphic3d_Attribute;
  Last(): Graphic3d_Attribute;
  ChangeLast(): Graphic3d_Attribute;
  Value(theIndex: Standard_Integer): Graphic3d_Attribute;
  ChangeValue(theIndex: Standard_Integer): Graphic3d_Attribute;
  SetValue(theIndex: Standard_Integer, theItem: Graphic3d_Attribute): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Graphic3d_Array1OfAttribute_1 extends Graphic3d_Array1OfAttribute {
    constructor();
  }

  export declare class Graphic3d_Array1OfAttribute_2 extends Graphic3d_Array1OfAttribute {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Graphic3d_Array1OfAttribute_3 extends Graphic3d_Array1OfAttribute {
    constructor(theOther: Graphic3d_Array1OfAttribute);
  }

  export declare class Graphic3d_Array1OfAttribute_4 extends Graphic3d_Array1OfAttribute {
    constructor(theOther: Graphic3d_Array1OfAttribute);
  }

  export declare class Graphic3d_Array1OfAttribute_5 extends Graphic3d_Array1OfAttribute {
    constructor(theBegin: Graphic3d_Attribute, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Graphic3d_Buffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Buffer): void;
  get(): Graphic3d_Buffer;
}

  export declare class Handle_Graphic3d_Buffer_1 extends Handle_Graphic3d_Buffer {
    constructor();
  }

  export declare class Handle_Graphic3d_Buffer_2 extends Handle_Graphic3d_Buffer {
    constructor(thePtr: Graphic3d_Buffer);
  }

  export declare class Handle_Graphic3d_Buffer_3 extends Handle_Graphic3d_Buffer {
    constructor(theHandle: Handle_Graphic3d_Buffer);
  }

  export declare class Handle_Graphic3d_Buffer_4 extends Handle_Graphic3d_Buffer {
    constructor(theHandle: Handle_Graphic3d_Buffer);
  }

export declare class Handle_Graphic3d_IndexBuffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_IndexBuffer): void;
  get(): Graphic3d_IndexBuffer;
}

  export declare class Handle_Graphic3d_IndexBuffer_1 extends Handle_Graphic3d_IndexBuffer {
    constructor();
  }

  export declare class Handle_Graphic3d_IndexBuffer_2 extends Handle_Graphic3d_IndexBuffer {
    constructor(thePtr: Graphic3d_IndexBuffer);
  }

  export declare class Handle_Graphic3d_IndexBuffer_3 extends Handle_Graphic3d_IndexBuffer {
    constructor(theHandle: Handle_Graphic3d_IndexBuffer);
  }

  export declare class Handle_Graphic3d_IndexBuffer_4 extends Handle_Graphic3d_IndexBuffer {
    constructor(theHandle: Handle_Graphic3d_IndexBuffer);
  }

export declare class Handle_Graphic3d_BoundBuffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_BoundBuffer): void;
  get(): Graphic3d_BoundBuffer;
}

  export declare class Handle_Graphic3d_BoundBuffer_1 extends Handle_Graphic3d_BoundBuffer {
    constructor();
  }

  export declare class Handle_Graphic3d_BoundBuffer_2 extends Handle_Graphic3d_BoundBuffer {
    constructor(thePtr: Graphic3d_BoundBuffer);
  }

  export declare class Handle_Graphic3d_BoundBuffer_3 extends Handle_Graphic3d_BoundBuffer {
    constructor(theHandle: Handle_Graphic3d_BoundBuffer);
  }

  export declare class Handle_Graphic3d_BoundBuffer_4 extends Handle_Graphic3d_BoundBuffer {
    constructor(theHandle: Handle_Graphic3d_BoundBuffer);
  }

export declare class Handle_Graphic3d_Group {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Group): void;
  get(): Graphic3d_Group;
}

  export declare class Handle_Graphic3d_Group_1 extends Handle_Graphic3d_Group {
    constructor();
  }

  export declare class Handle_Graphic3d_Group_2 extends Handle_Graphic3d_Group {
    constructor(thePtr: Graphic3d_Group);
  }

  export declare class Handle_Graphic3d_Group_3 extends Handle_Graphic3d_Group {
    constructor(theHandle: Handle_Graphic3d_Group);
  }

  export declare class Handle_Graphic3d_Group_4 extends Handle_Graphic3d_Group {
    constructor(theHandle: Handle_Graphic3d_Group);
  }

export declare class Handle_Graphic3d_PresentationAttributes {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_PresentationAttributes): void;
  get(): Graphic3d_PresentationAttributes;
}

  export declare class Handle_Graphic3d_PresentationAttributes_1 extends Handle_Graphic3d_PresentationAttributes {
    constructor();
  }

  export declare class Handle_Graphic3d_PresentationAttributes_2 extends Handle_Graphic3d_PresentationAttributes {
    constructor(thePtr: Graphic3d_PresentationAttributes);
  }

  export declare class Handle_Graphic3d_PresentationAttributes_3 extends Handle_Graphic3d_PresentationAttributes {
    constructor(theHandle: Handle_Graphic3d_PresentationAttributes);
  }

  export declare class Handle_Graphic3d_PresentationAttributes_4 extends Handle_Graphic3d_PresentationAttributes {
    constructor(theHandle: Handle_Graphic3d_PresentationAttributes);
  }

export declare class Handle_Graphic3d_ClipPlane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ClipPlane): void;
  get(): Graphic3d_ClipPlane;
}

  export declare class Handle_Graphic3d_ClipPlane_1 extends Handle_Graphic3d_ClipPlane {
    constructor();
  }

  export declare class Handle_Graphic3d_ClipPlane_2 extends Handle_Graphic3d_ClipPlane {
    constructor(thePtr: Graphic3d_ClipPlane);
  }

  export declare class Handle_Graphic3d_ClipPlane_3 extends Handle_Graphic3d_ClipPlane {
    constructor(theHandle: Handle_Graphic3d_ClipPlane);
  }

  export declare class Handle_Graphic3d_ClipPlane_4 extends Handle_Graphic3d_ClipPlane {
    constructor(theHandle: Handle_Graphic3d_ClipPlane);
  }

export declare class Handle_Graphic3d_SequenceOfHClipPlane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_SequenceOfHClipPlane): void;
  get(): Graphic3d_SequenceOfHClipPlane;
}

  export declare class Handle_Graphic3d_SequenceOfHClipPlane_1 extends Handle_Graphic3d_SequenceOfHClipPlane {
    constructor();
  }

  export declare class Handle_Graphic3d_SequenceOfHClipPlane_2 extends Handle_Graphic3d_SequenceOfHClipPlane {
    constructor(thePtr: Graphic3d_SequenceOfHClipPlane);
  }

  export declare class Handle_Graphic3d_SequenceOfHClipPlane_3 extends Handle_Graphic3d_SequenceOfHClipPlane {
    constructor(theHandle: Handle_Graphic3d_SequenceOfHClipPlane);
  }

  export declare class Handle_Graphic3d_SequenceOfHClipPlane_4 extends Handle_Graphic3d_SequenceOfHClipPlane {
    constructor(theHandle: Handle_Graphic3d_SequenceOfHClipPlane);
  }

export declare class Handle_Graphic3d_ViewAffinity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ViewAffinity): void;
  get(): Graphic3d_ViewAffinity;
}

  export declare class Handle_Graphic3d_ViewAffinity_1 extends Handle_Graphic3d_ViewAffinity {
    constructor();
  }

  export declare class Handle_Graphic3d_ViewAffinity_2 extends Handle_Graphic3d_ViewAffinity {
    constructor(thePtr: Graphic3d_ViewAffinity);
  }

  export declare class Handle_Graphic3d_ViewAffinity_3 extends Handle_Graphic3d_ViewAffinity {
    constructor(theHandle: Handle_Graphic3d_ViewAffinity);
  }

  export declare class Handle_Graphic3d_ViewAffinity_4 extends Handle_Graphic3d_ViewAffinity {
    constructor(theHandle: Handle_Graphic3d_ViewAffinity);
  }

export declare class Handle_Graphic3d_Camera {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Camera): void;
  get(): Graphic3d_Camera;
}

  export declare class Handle_Graphic3d_Camera_1 extends Handle_Graphic3d_Camera {
    constructor();
  }

  export declare class Handle_Graphic3d_Camera_2 extends Handle_Graphic3d_Camera {
    constructor(thePtr: Graphic3d_Camera);
  }

  export declare class Handle_Graphic3d_Camera_3 extends Handle_Graphic3d_Camera {
    constructor(theHandle: Handle_Graphic3d_Camera);
  }

  export declare class Handle_Graphic3d_Camera_4 extends Handle_Graphic3d_Camera {
    constructor(theHandle: Handle_Graphic3d_Camera);
  }

export declare class Handle_Graphic3d_TransformPers {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_TransformPers): void;
  get(): Graphic3d_TransformPers;
}

  export declare class Handle_Graphic3d_TransformPers_1 extends Handle_Graphic3d_TransformPers {
    constructor();
  }

  export declare class Handle_Graphic3d_TransformPers_2 extends Handle_Graphic3d_TransformPers {
    constructor(thePtr: Graphic3d_TransformPers);
  }

  export declare class Handle_Graphic3d_TransformPers_3 extends Handle_Graphic3d_TransformPers {
    constructor(theHandle: Handle_Graphic3d_TransformPers);
  }

  export declare class Handle_Graphic3d_TransformPers_4 extends Handle_Graphic3d_TransformPers {
    constructor(theHandle: Handle_Graphic3d_TransformPers);
  }

export declare class Handle_Graphic3d_CStructure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_CStructure): void;
  get(): Graphic3d_CStructure;
}

  export declare class Handle_Graphic3d_CStructure_1 extends Handle_Graphic3d_CStructure {
    constructor();
  }

  export declare class Handle_Graphic3d_CStructure_2 extends Handle_Graphic3d_CStructure {
    constructor(thePtr: Graphic3d_CStructure);
  }

  export declare class Handle_Graphic3d_CStructure_3 extends Handle_Graphic3d_CStructure {
    constructor(theHandle: Handle_Graphic3d_CStructure);
  }

  export declare class Handle_Graphic3d_CStructure_4 extends Handle_Graphic3d_CStructure {
    constructor(theHandle: Handle_Graphic3d_CStructure);
  }

export declare class Handle_Aspect_Window {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_Window): void;
  get(): Aspect_Window;
}

  export declare class Handle_Aspect_Window_1 extends Handle_Aspect_Window {
    constructor();
  }

  export declare class Handle_Aspect_Window_2 extends Handle_Aspect_Window {
    constructor(thePtr: Aspect_Window);
  }

  export declare class Handle_Aspect_Window_3 extends Handle_Aspect_Window {
    constructor(theHandle: Handle_Aspect_Window);
  }

  export declare class Handle_Aspect_Window_4 extends Handle_Aspect_Window {
    constructor(theHandle: Handle_Aspect_Window);
  }

export declare class Handle_Graphic3d_CubeMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_CubeMap): void;
  get(): Graphic3d_CubeMap;
}

  export declare class Handle_Graphic3d_CubeMap_1 extends Handle_Graphic3d_CubeMap {
    constructor();
  }

  export declare class Handle_Graphic3d_CubeMap_2 extends Handle_Graphic3d_CubeMap {
    constructor(thePtr: Graphic3d_CubeMap);
  }

  export declare class Handle_Graphic3d_CubeMap_3 extends Handle_Graphic3d_CubeMap {
    constructor(theHandle: Handle_Graphic3d_CubeMap);
  }

  export declare class Handle_Graphic3d_CubeMap_4 extends Handle_Graphic3d_CubeMap {
    constructor(theHandle: Handle_Graphic3d_CubeMap);
  }

export declare class Handle_Graphic3d_CLight {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_CLight): void;
  get(): Graphic3d_CLight;
}

  export declare class Handle_Graphic3d_CLight_1 extends Handle_Graphic3d_CLight {
    constructor();
  }

  export declare class Handle_Graphic3d_CLight_2 extends Handle_Graphic3d_CLight {
    constructor(thePtr: Graphic3d_CLight);
  }

  export declare class Handle_Graphic3d_CLight_3 extends Handle_Graphic3d_CLight {
    constructor(theHandle: Handle_Graphic3d_CLight);
  }

  export declare class Handle_Graphic3d_CLight_4 extends Handle_Graphic3d_CLight {
    constructor(theHandle: Handle_Graphic3d_CLight);
  }

export declare class Handle_Graphic3d_DataStructureManager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_DataStructureManager): void;
  get(): Graphic3d_DataStructureManager;
}

  export declare class Handle_Graphic3d_DataStructureManager_1 extends Handle_Graphic3d_DataStructureManager {
    constructor();
  }

  export declare class Handle_Graphic3d_DataStructureManager_2 extends Handle_Graphic3d_DataStructureManager {
    constructor(thePtr: Graphic3d_DataStructureManager);
  }

  export declare class Handle_Graphic3d_DataStructureManager_3 extends Handle_Graphic3d_DataStructureManager {
    constructor(theHandle: Handle_Graphic3d_DataStructureManager);
  }

  export declare class Handle_Graphic3d_DataStructureManager_4 extends Handle_Graphic3d_DataStructureManager {
    constructor(theHandle: Handle_Graphic3d_DataStructureManager);
  }

export declare class Handle_Graphic3d_Texture2D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Texture2D): void;
  get(): Graphic3d_Texture2D;
}

  export declare class Handle_Graphic3d_Texture2D_1 extends Handle_Graphic3d_Texture2D {
    constructor();
  }

  export declare class Handle_Graphic3d_Texture2D_2 extends Handle_Graphic3d_Texture2D {
    constructor(thePtr: Graphic3d_Texture2D);
  }

  export declare class Handle_Graphic3d_Texture2D_3 extends Handle_Graphic3d_Texture2D {
    constructor(theHandle: Handle_Graphic3d_Texture2D);
  }

  export declare class Handle_Graphic3d_Texture2D_4 extends Handle_Graphic3d_Texture2D {
    constructor(theHandle: Handle_Graphic3d_Texture2D);
  }

export declare class Handle_Graphic3d_Texture2Dmanual {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Texture2Dmanual): void;
  get(): Graphic3d_Texture2Dmanual;
}

  export declare class Handle_Graphic3d_Texture2Dmanual_1 extends Handle_Graphic3d_Texture2Dmanual {
    constructor();
  }

  export declare class Handle_Graphic3d_Texture2Dmanual_2 extends Handle_Graphic3d_Texture2Dmanual {
    constructor(thePtr: Graphic3d_Texture2Dmanual);
  }

  export declare class Handle_Graphic3d_Texture2Dmanual_3 extends Handle_Graphic3d_Texture2Dmanual {
    constructor(theHandle: Handle_Graphic3d_Texture2Dmanual);
  }

  export declare class Handle_Graphic3d_Texture2Dmanual_4 extends Handle_Graphic3d_Texture2Dmanual {
    constructor(theHandle: Handle_Graphic3d_Texture2Dmanual);
  }

export declare class Handle_Graphic3d_TextureEnv {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_TextureEnv): void;
  get(): Graphic3d_TextureEnv;
}

  export declare class Handle_Graphic3d_TextureEnv_1 extends Handle_Graphic3d_TextureEnv {
    constructor();
  }

  export declare class Handle_Graphic3d_TextureEnv_2 extends Handle_Graphic3d_TextureEnv {
    constructor(thePtr: Graphic3d_TextureEnv);
  }

  export declare class Handle_Graphic3d_TextureEnv_3 extends Handle_Graphic3d_TextureEnv {
    constructor(theHandle: Handle_Graphic3d_TextureEnv);
  }

  export declare class Handle_Graphic3d_TextureEnv_4 extends Handle_Graphic3d_TextureEnv {
    constructor(theHandle: Handle_Graphic3d_TextureEnv);
  }

export declare class Handle_Graphic3d_LightSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_LightSet): void;
  get(): Graphic3d_LightSet;
}

  export declare class Handle_Graphic3d_LightSet_1 extends Handle_Graphic3d_LightSet {
    constructor();
  }

  export declare class Handle_Graphic3d_LightSet_2 extends Handle_Graphic3d_LightSet {
    constructor(thePtr: Graphic3d_LightSet);
  }

  export declare class Handle_Graphic3d_LightSet_3 extends Handle_Graphic3d_LightSet {
    constructor(theHandle: Handle_Graphic3d_LightSet);
  }

  export declare class Handle_Graphic3d_LightSet_4 extends Handle_Graphic3d_LightSet {
    constructor(theHandle: Handle_Graphic3d_LightSet);
  }

export declare class Handle_Graphic3d_CView {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_CView): void;
  get(): Graphic3d_CView;
}

  export declare class Handle_Graphic3d_CView_1 extends Handle_Graphic3d_CView {
    constructor();
  }

  export declare class Handle_Graphic3d_CView_2 extends Handle_Graphic3d_CView {
    constructor(thePtr: Graphic3d_CView);
  }

  export declare class Handle_Graphic3d_CView_3 extends Handle_Graphic3d_CView {
    constructor(theHandle: Handle_Graphic3d_CView);
  }

  export declare class Handle_Graphic3d_CView_4 extends Handle_Graphic3d_CView {
    constructor(theHandle: Handle_Graphic3d_CView);
  }

export declare class Handle_Graphic3d_StructureManager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_StructureManager): void;
  get(): Graphic3d_StructureManager;
}

  export declare class Handle_Graphic3d_StructureManager_1 extends Handle_Graphic3d_StructureManager {
    constructor();
  }

  export declare class Handle_Graphic3d_StructureManager_2 extends Handle_Graphic3d_StructureManager {
    constructor(thePtr: Graphic3d_StructureManager);
  }

  export declare class Handle_Graphic3d_StructureManager_3 extends Handle_Graphic3d_StructureManager {
    constructor(theHandle: Handle_Graphic3d_StructureManager);
  }

  export declare class Handle_Graphic3d_StructureManager_4 extends Handle_Graphic3d_StructureManager {
    constructor(theHandle: Handle_Graphic3d_StructureManager);
  }

export declare class Handle_Media_Timer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Media_Timer): void;
  get(): Media_Timer;
}

  export declare class Handle_Media_Timer_1 extends Handle_Media_Timer {
    constructor();
  }

  export declare class Handle_Media_Timer_2 extends Handle_Media_Timer {
    constructor(thePtr: Media_Timer);
  }

  export declare class Handle_Media_Timer_3 extends Handle_Media_Timer {
    constructor(theHandle: Handle_Media_Timer);
  }

  export declare class Handle_Media_Timer_4 extends Handle_Media_Timer {
    constructor(theHandle: Handle_Media_Timer);
  }

export declare class Aspect_SequenceOfColor extends NCollection_BaseSequence {
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
  Assign(theOther: Aspect_SequenceOfColor): Aspect_SequenceOfColor;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Quantity_Color): void;
  Append_2(theSeq: Aspect_SequenceOfColor): void;
  Prepend_1(theItem: Quantity_Color): void;
  Prepend_2(theSeq: Aspect_SequenceOfColor): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Quantity_Color): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Aspect_SequenceOfColor): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Aspect_SequenceOfColor): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Quantity_Color): void;
  Split(theIndex: Standard_Integer, theSeq: Aspect_SequenceOfColor): void;
  First(): Quantity_Color;
  ChangeFirst(): Quantity_Color;
  Last(): Quantity_Color;
  ChangeLast(): Quantity_Color;
  Value(theIndex: Standard_Integer): Quantity_Color;
  ChangeValue(theIndex: Standard_Integer): Quantity_Color;
  SetValue(theIndex: Standard_Integer, theItem: Quantity_Color): void;
}

  export declare class Aspect_SequenceOfColor_1 extends Aspect_SequenceOfColor {
    constructor();
  }

  export declare class Aspect_SequenceOfColor_2 extends Aspect_SequenceOfColor {
    constructor(theAllocator: any);
  }

  export declare class Aspect_SequenceOfColor_3 extends Aspect_SequenceOfColor {
    constructor(theOther: Aspect_SequenceOfColor);
  }

export declare class Handle_Graphic3d_ArrayOfPrimitives {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfPrimitives): void;
  get(): Graphic3d_ArrayOfPrimitives;
}

  export declare class Handle_Graphic3d_ArrayOfPrimitives_1 extends Handle_Graphic3d_ArrayOfPrimitives {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfPrimitives_2 extends Handle_Graphic3d_ArrayOfPrimitives {
    constructor(thePtr: Graphic3d_ArrayOfPrimitives);
  }

  export declare class Handle_Graphic3d_ArrayOfPrimitives_3 extends Handle_Graphic3d_ArrayOfPrimitives {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPrimitives);
  }

  export declare class Handle_Graphic3d_ArrayOfPrimitives_4 extends Handle_Graphic3d_ArrayOfPrimitives {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPrimitives);
  }

export declare class Handle_Graphic3d_ArrayOfQuadrangles {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfQuadrangles): void;
  get(): Graphic3d_ArrayOfQuadrangles;
}

  export declare class Handle_Graphic3d_ArrayOfQuadrangles_1 extends Handle_Graphic3d_ArrayOfQuadrangles {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfQuadrangles_2 extends Handle_Graphic3d_ArrayOfQuadrangles {
    constructor(thePtr: Graphic3d_ArrayOfQuadrangles);
  }

  export declare class Handle_Graphic3d_ArrayOfQuadrangles_3 extends Handle_Graphic3d_ArrayOfQuadrangles {
    constructor(theHandle: Handle_Graphic3d_ArrayOfQuadrangles);
  }

  export declare class Handle_Graphic3d_ArrayOfQuadrangles_4 extends Handle_Graphic3d_ArrayOfQuadrangles {
    constructor(theHandle: Handle_Graphic3d_ArrayOfQuadrangles);
  }

export declare class Handle_Graphic3d_ArrayOfTriangles {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfTriangles): void;
  get(): Graphic3d_ArrayOfTriangles;
}

  export declare class Handle_Graphic3d_ArrayOfTriangles_1 extends Handle_Graphic3d_ArrayOfTriangles {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfTriangles_2 extends Handle_Graphic3d_ArrayOfTriangles {
    constructor(thePtr: Graphic3d_ArrayOfTriangles);
  }

  export declare class Handle_Graphic3d_ArrayOfTriangles_3 extends Handle_Graphic3d_ArrayOfTriangles {
    constructor(theHandle: Handle_Graphic3d_ArrayOfTriangles);
  }

  export declare class Handle_Graphic3d_ArrayOfTriangles_4 extends Handle_Graphic3d_ArrayOfTriangles {
    constructor(theHandle: Handle_Graphic3d_ArrayOfTriangles);
  }

export declare class Handle_Graphic3d_ArrayOfPoints {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfPoints): void;
  get(): Graphic3d_ArrayOfPoints;
}

  export declare class Handle_Graphic3d_ArrayOfPoints_1 extends Handle_Graphic3d_ArrayOfPoints {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfPoints_2 extends Handle_Graphic3d_ArrayOfPoints {
    constructor(thePtr: Graphic3d_ArrayOfPoints);
  }

  export declare class Handle_Graphic3d_ArrayOfPoints_3 extends Handle_Graphic3d_ArrayOfPoints {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPoints);
  }

  export declare class Handle_Graphic3d_ArrayOfPoints_4 extends Handle_Graphic3d_ArrayOfPoints {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPoints);
  }

export declare class Handle_Graphic3d_ArrayOfPolylines {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfPolylines): void;
  get(): Graphic3d_ArrayOfPolylines;
}

  export declare class Handle_Graphic3d_ArrayOfPolylines_1 extends Handle_Graphic3d_ArrayOfPolylines {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfPolylines_2 extends Handle_Graphic3d_ArrayOfPolylines {
    constructor(thePtr: Graphic3d_ArrayOfPolylines);
  }

  export declare class Handle_Graphic3d_ArrayOfPolylines_3 extends Handle_Graphic3d_ArrayOfPolylines {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPolylines);
  }

  export declare class Handle_Graphic3d_ArrayOfPolylines_4 extends Handle_Graphic3d_ArrayOfPolylines {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPolylines);
  }

export declare class Handle_Aspect_AspectFillAreaDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_AspectFillAreaDefinitionError): void;
  get(): Aspect_AspectFillAreaDefinitionError;
}

  export declare class Handle_Aspect_AspectFillAreaDefinitionError_1 extends Handle_Aspect_AspectFillAreaDefinitionError {
    constructor();
  }

  export declare class Handle_Aspect_AspectFillAreaDefinitionError_2 extends Handle_Aspect_AspectFillAreaDefinitionError {
    constructor(thePtr: Aspect_AspectFillAreaDefinitionError);
  }

  export declare class Handle_Aspect_AspectFillAreaDefinitionError_3 extends Handle_Aspect_AspectFillAreaDefinitionError {
    constructor(theHandle: Handle_Aspect_AspectFillAreaDefinitionError);
  }

  export declare class Handle_Aspect_AspectFillAreaDefinitionError_4 extends Handle_Aspect_AspectFillAreaDefinitionError {
    constructor(theHandle: Handle_Aspect_AspectFillAreaDefinitionError);
  }

export declare class Handle_Aspect_AspectLineDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_AspectLineDefinitionError): void;
  get(): Aspect_AspectLineDefinitionError;
}

  export declare class Handle_Aspect_AspectLineDefinitionError_1 extends Handle_Aspect_AspectLineDefinitionError {
    constructor();
  }

  export declare class Handle_Aspect_AspectLineDefinitionError_2 extends Handle_Aspect_AspectLineDefinitionError {
    constructor(thePtr: Aspect_AspectLineDefinitionError);
  }

  export declare class Handle_Aspect_AspectLineDefinitionError_3 extends Handle_Aspect_AspectLineDefinitionError {
    constructor(theHandle: Handle_Aspect_AspectLineDefinitionError);
  }

  export declare class Handle_Aspect_AspectLineDefinitionError_4 extends Handle_Aspect_AspectLineDefinitionError {
    constructor(theHandle: Handle_Aspect_AspectLineDefinitionError);
  }

export declare class Handle_Aspect_AspectMarkerDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_AspectMarkerDefinitionError): void;
  get(): Aspect_AspectMarkerDefinitionError;
}

  export declare class Handle_Aspect_AspectMarkerDefinitionError_1 extends Handle_Aspect_AspectMarkerDefinitionError {
    constructor();
  }

  export declare class Handle_Aspect_AspectMarkerDefinitionError_2 extends Handle_Aspect_AspectMarkerDefinitionError {
    constructor(thePtr: Aspect_AspectMarkerDefinitionError);
  }

  export declare class Handle_Aspect_AspectMarkerDefinitionError_3 extends Handle_Aspect_AspectMarkerDefinitionError {
    constructor(theHandle: Handle_Aspect_AspectMarkerDefinitionError);
  }

  export declare class Handle_Aspect_AspectMarkerDefinitionError_4 extends Handle_Aspect_AspectMarkerDefinitionError {
    constructor(theHandle: Handle_Aspect_AspectMarkerDefinitionError);
  }

export declare class Handle_Aspect_Grid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_Grid): void;
  get(): Aspect_Grid;
}

  export declare class Handle_Aspect_Grid_1 extends Handle_Aspect_Grid {
    constructor();
  }

  export declare class Handle_Aspect_Grid_2 extends Handle_Aspect_Grid {
    constructor(thePtr: Aspect_Grid);
  }

  export declare class Handle_Aspect_Grid_3 extends Handle_Aspect_Grid {
    constructor(theHandle: Handle_Aspect_Grid);
  }

  export declare class Handle_Aspect_Grid_4 extends Handle_Aspect_Grid {
    constructor(theHandle: Handle_Aspect_Grid);
  }

export declare class Handle_Aspect_CircularGrid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_CircularGrid): void;
  get(): Aspect_CircularGrid;
}

  export declare class Handle_Aspect_CircularGrid_1 extends Handle_Aspect_CircularGrid {
    constructor();
  }

  export declare class Handle_Aspect_CircularGrid_2 extends Handle_Aspect_CircularGrid {
    constructor(thePtr: Aspect_CircularGrid);
  }

  export declare class Handle_Aspect_CircularGrid_3 extends Handle_Aspect_CircularGrid {
    constructor(theHandle: Handle_Aspect_CircularGrid);
  }

  export declare class Handle_Aspect_CircularGrid_4 extends Handle_Aspect_CircularGrid {
    constructor(theHandle: Handle_Aspect_CircularGrid);
  }

export declare class Handle_Aspect_DisplayConnection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_DisplayConnection): void;
  get(): Aspect_DisplayConnection;
}

  export declare class Handle_Aspect_DisplayConnection_1 extends Handle_Aspect_DisplayConnection {
    constructor();
  }

  export declare class Handle_Aspect_DisplayConnection_2 extends Handle_Aspect_DisplayConnection {
    constructor(thePtr: Aspect_DisplayConnection);
  }

  export declare class Handle_Aspect_DisplayConnection_3 extends Handle_Aspect_DisplayConnection {
    constructor(theHandle: Handle_Aspect_DisplayConnection);
  }

  export declare class Handle_Aspect_DisplayConnection_4 extends Handle_Aspect_DisplayConnection {
    constructor(theHandle: Handle_Aspect_DisplayConnection);
  }

export declare class Handle_Aspect_DisplayConnectionDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_DisplayConnectionDefinitionError): void;
  get(): Aspect_DisplayConnectionDefinitionError;
}

  export declare class Handle_Aspect_DisplayConnectionDefinitionError_1 extends Handle_Aspect_DisplayConnectionDefinitionError {
    constructor();
  }

  export declare class Handle_Aspect_DisplayConnectionDefinitionError_2 extends Handle_Aspect_DisplayConnectionDefinitionError {
    constructor(thePtr: Aspect_DisplayConnectionDefinitionError);
  }

  export declare class Handle_Aspect_DisplayConnectionDefinitionError_3 extends Handle_Aspect_DisplayConnectionDefinitionError {
    constructor(theHandle: Handle_Aspect_DisplayConnectionDefinitionError);
  }

  export declare class Handle_Aspect_DisplayConnectionDefinitionError_4 extends Handle_Aspect_DisplayConnectionDefinitionError {
    constructor(theHandle: Handle_Aspect_DisplayConnectionDefinitionError);
  }

export declare class Handle_Aspect_GraphicDeviceDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_GraphicDeviceDefinitionError): void;
  get(): Aspect_GraphicDeviceDefinitionError;
}

  export declare class Handle_Aspect_GraphicDeviceDefinitionError_1 extends Handle_Aspect_GraphicDeviceDefinitionError {
    constructor();
  }

  export declare class Handle_Aspect_GraphicDeviceDefinitionError_2 extends Handle_Aspect_GraphicDeviceDefinitionError {
    constructor(thePtr: Aspect_GraphicDeviceDefinitionError);
  }

  export declare class Handle_Aspect_GraphicDeviceDefinitionError_3 extends Handle_Aspect_GraphicDeviceDefinitionError {
    constructor(theHandle: Handle_Aspect_GraphicDeviceDefinitionError);
  }

  export declare class Handle_Aspect_GraphicDeviceDefinitionError_4 extends Handle_Aspect_GraphicDeviceDefinitionError {
    constructor(theHandle: Handle_Aspect_GraphicDeviceDefinitionError);
  }

export declare class Handle_Aspect_IdentDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_IdentDefinitionError): void;
  get(): Aspect_IdentDefinitionError;
}

  export declare class Handle_Aspect_IdentDefinitionError_1 extends Handle_Aspect_IdentDefinitionError {
    constructor();
  }

  export declare class Handle_Aspect_IdentDefinitionError_2 extends Handle_Aspect_IdentDefinitionError {
    constructor(thePtr: Aspect_IdentDefinitionError);
  }

  export declare class Handle_Aspect_IdentDefinitionError_3 extends Handle_Aspect_IdentDefinitionError {
    constructor(theHandle: Handle_Aspect_IdentDefinitionError);
  }

  export declare class Handle_Aspect_IdentDefinitionError_4 extends Handle_Aspect_IdentDefinitionError {
    constructor(theHandle: Handle_Aspect_IdentDefinitionError);
  }

export declare class Handle_Aspect_NeutralWindow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_NeutralWindow): void;
  get(): Aspect_NeutralWindow;
}

  export declare class Handle_Aspect_NeutralWindow_1 extends Handle_Aspect_NeutralWindow {
    constructor();
  }

  export declare class Handle_Aspect_NeutralWindow_2 extends Handle_Aspect_NeutralWindow {
    constructor(thePtr: Aspect_NeutralWindow);
  }

  export declare class Handle_Aspect_NeutralWindow_3 extends Handle_Aspect_NeutralWindow {
    constructor(theHandle: Handle_Aspect_NeutralWindow);
  }

  export declare class Handle_Aspect_NeutralWindow_4 extends Handle_Aspect_NeutralWindow {
    constructor(theHandle: Handle_Aspect_NeutralWindow);
  }

export declare class Aspect_TrackedDevicePoseArray {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Aspect_TrackedDevicePose): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Aspect_TrackedDevicePoseArray): Aspect_TrackedDevicePoseArray;
  Move(theOther: Aspect_TrackedDevicePoseArray): Aspect_TrackedDevicePoseArray;
  First(): Aspect_TrackedDevicePose;
  ChangeFirst(): Aspect_TrackedDevicePose;
  Last(): Aspect_TrackedDevicePose;
  ChangeLast(): Aspect_TrackedDevicePose;
  Value(theIndex: Standard_Integer): Aspect_TrackedDevicePose;
  ChangeValue(theIndex: Standard_Integer): Aspect_TrackedDevicePose;
  SetValue(theIndex: Standard_Integer, theItem: Aspect_TrackedDevicePose): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Aspect_TrackedDevicePoseArray_1 extends Aspect_TrackedDevicePoseArray {
    constructor();
  }

  export declare class Aspect_TrackedDevicePoseArray_2 extends Aspect_TrackedDevicePoseArray {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Aspect_TrackedDevicePoseArray_3 extends Aspect_TrackedDevicePoseArray {
    constructor(theOther: Aspect_TrackedDevicePoseArray);
  }

  export declare class Aspect_TrackedDevicePoseArray_4 extends Aspect_TrackedDevicePoseArray {
    constructor(theOther: Aspect_TrackedDevicePoseArray);
  }

  export declare class Aspect_TrackedDevicePoseArray_5 extends Aspect_TrackedDevicePoseArray {
    constructor(theBegin: Aspect_TrackedDevicePose, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Aspect_RectangularGrid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_RectangularGrid): void;
  get(): Aspect_RectangularGrid;
}

  export declare class Handle_Aspect_RectangularGrid_1 extends Handle_Aspect_RectangularGrid {
    constructor();
  }

  export declare class Handle_Aspect_RectangularGrid_2 extends Handle_Aspect_RectangularGrid {
    constructor(thePtr: Aspect_RectangularGrid);
  }

  export declare class Handle_Aspect_RectangularGrid_3 extends Handle_Aspect_RectangularGrid {
    constructor(theHandle: Handle_Aspect_RectangularGrid);
  }

  export declare class Handle_Aspect_RectangularGrid_4 extends Handle_Aspect_RectangularGrid {
    constructor(theHandle: Handle_Aspect_RectangularGrid);
  }

export declare class Handle_Aspect_WindowDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_WindowDefinitionError): void;
  get(): Aspect_WindowDefinitionError;
}

  export declare class Handle_Aspect_WindowDefinitionError_1 extends Handle_Aspect_WindowDefinitionError {
    constructor();
  }

  export declare class Handle_Aspect_WindowDefinitionError_2 extends Handle_Aspect_WindowDefinitionError {
    constructor(thePtr: Aspect_WindowDefinitionError);
  }

  export declare class Handle_Aspect_WindowDefinitionError_3 extends Handle_Aspect_WindowDefinitionError {
    constructor(theHandle: Handle_Aspect_WindowDefinitionError);
  }

  export declare class Handle_Aspect_WindowDefinitionError_4 extends Handle_Aspect_WindowDefinitionError {
    constructor(theHandle: Handle_Aspect_WindowDefinitionError);
  }

export declare class Handle_Aspect_WindowError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Aspect_WindowError): void;
  get(): Aspect_WindowError;
}

  export declare class Handle_Aspect_WindowError_1 extends Handle_Aspect_WindowError {
    constructor();
  }

  export declare class Handle_Aspect_WindowError_2 extends Handle_Aspect_WindowError {
    constructor(thePtr: Aspect_WindowError);
  }

  export declare class Handle_Aspect_WindowError_3 extends Handle_Aspect_WindowError {
    constructor(theHandle: Handle_Aspect_WindowError);
  }

  export declare class Handle_Aspect_WindowError_4 extends Handle_Aspect_WindowError {
    constructor(theHandle: Handle_Aspect_WindowError);
  }

export declare class Handle_Graphic3d_GraphicDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_GraphicDriver): void;
  get(): Graphic3d_GraphicDriver;
}

  export declare class Handle_Graphic3d_GraphicDriver_1 extends Handle_Graphic3d_GraphicDriver {
    constructor();
  }

  export declare class Handle_Graphic3d_GraphicDriver_2 extends Handle_Graphic3d_GraphicDriver {
    constructor(thePtr: Graphic3d_GraphicDriver);
  }

  export declare class Handle_Graphic3d_GraphicDriver_3 extends Handle_Graphic3d_GraphicDriver {
    constructor(theHandle: Handle_Graphic3d_GraphicDriver);
  }

  export declare class Handle_Graphic3d_GraphicDriver_4 extends Handle_Graphic3d_GraphicDriver {
    constructor(theHandle: Handle_Graphic3d_GraphicDriver);
  }

export declare class Handle_Font_FTFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Font_FTFont): void;
  get(): Font_FTFont;
}

  export declare class Handle_Font_FTFont_1 extends Handle_Font_FTFont {
    constructor();
  }

  export declare class Handle_Font_FTFont_2 extends Handle_Font_FTFont {
    constructor(thePtr: Font_FTFont);
  }

  export declare class Handle_Font_FTFont_3 extends Handle_Font_FTFont {
    constructor(theHandle: Handle_Font_FTFont);
  }

  export declare class Handle_Font_FTFont_4 extends Handle_Font_FTFont {
    constructor(theHandle: Handle_Font_FTFont);
  }

export declare class Handle_Font_TextFormatter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Font_TextFormatter): void;
  get(): Font_TextFormatter;
}

  export declare class Handle_Font_TextFormatter_1 extends Handle_Font_TextFormatter {
    constructor();
  }

  export declare class Handle_Font_TextFormatter_2 extends Handle_Font_TextFormatter {
    constructor(thePtr: Font_TextFormatter);
  }

  export declare class Handle_Font_TextFormatter_3 extends Handle_Font_TextFormatter {
    constructor(theHandle: Handle_Font_TextFormatter);
  }

  export declare class Handle_Font_TextFormatter_4 extends Handle_Font_TextFormatter {
    constructor(theHandle: Handle_Font_TextFormatter);
  }

export declare class Handle_Font_FTLibrary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Font_FTLibrary): void;
  get(): Font_FTLibrary;
}

  export declare class Handle_Font_FTLibrary_1 extends Handle_Font_FTLibrary {
    constructor();
  }

  export declare class Handle_Font_FTLibrary_2 extends Handle_Font_FTLibrary {
    constructor(thePtr: Font_FTLibrary);
  }

  export declare class Handle_Font_FTLibrary_3 extends Handle_Font_FTLibrary {
    constructor(theHandle: Handle_Font_FTLibrary);
  }

  export declare class Handle_Font_FTLibrary_4 extends Handle_Font_FTLibrary {
    constructor(theHandle: Handle_Font_FTLibrary);
  }

export declare class Handle_Font_SystemFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Font_SystemFont): void;
  get(): Font_SystemFont;
}

  export declare class Handle_Font_SystemFont_1 extends Handle_Font_SystemFont {
    constructor();
  }

  export declare class Handle_Font_SystemFont_2 extends Handle_Font_SystemFont {
    constructor(thePtr: Font_SystemFont);
  }

  export declare class Handle_Font_SystemFont_3 extends Handle_Font_SystemFont {
    constructor(theHandle: Handle_Font_SystemFont);
  }

  export declare class Handle_Font_SystemFont_4 extends Handle_Font_SystemFont {
    constructor(theHandle: Handle_Font_SystemFont);
  }

export declare class Handle_Font_FontMgr {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Font_FontMgr): void;
  get(): Font_FontMgr;
}

  export declare class Handle_Font_FontMgr_1 extends Handle_Font_FontMgr {
    constructor();
  }

  export declare class Handle_Font_FontMgr_2 extends Handle_Font_FontMgr {
    constructor(thePtr: Font_FontMgr);
  }

  export declare class Handle_Font_FontMgr_3 extends Handle_Font_FontMgr {
    constructor(theHandle: Handle_Font_FontMgr);
  }

  export declare class Handle_Font_FontMgr_4 extends Handle_Font_FontMgr {
    constructor(theHandle: Handle_Font_FontMgr);
  }

export declare class Handle_Graphic3d_ArrayOfPolygons {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfPolygons): void;
  get(): Graphic3d_ArrayOfPolygons;
}

  export declare class Handle_Graphic3d_ArrayOfPolygons_1 extends Handle_Graphic3d_ArrayOfPolygons {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfPolygons_2 extends Handle_Graphic3d_ArrayOfPolygons {
    constructor(thePtr: Graphic3d_ArrayOfPolygons);
  }

  export declare class Handle_Graphic3d_ArrayOfPolygons_3 extends Handle_Graphic3d_ArrayOfPolygons {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPolygons);
  }

  export declare class Handle_Graphic3d_ArrayOfPolygons_4 extends Handle_Graphic3d_ArrayOfPolygons {
    constructor(theHandle: Handle_Graphic3d_ArrayOfPolygons);
  }

export declare class Handle_Graphic3d_ArrayOfQuadrangleStrips {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfQuadrangleStrips): void;
  get(): Graphic3d_ArrayOfQuadrangleStrips;
}

  export declare class Handle_Graphic3d_ArrayOfQuadrangleStrips_1 extends Handle_Graphic3d_ArrayOfQuadrangleStrips {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfQuadrangleStrips_2 extends Handle_Graphic3d_ArrayOfQuadrangleStrips {
    constructor(thePtr: Graphic3d_ArrayOfQuadrangleStrips);
  }

  export declare class Handle_Graphic3d_ArrayOfQuadrangleStrips_3 extends Handle_Graphic3d_ArrayOfQuadrangleStrips {
    constructor(theHandle: Handle_Graphic3d_ArrayOfQuadrangleStrips);
  }

  export declare class Handle_Graphic3d_ArrayOfQuadrangleStrips_4 extends Handle_Graphic3d_ArrayOfQuadrangleStrips {
    constructor(theHandle: Handle_Graphic3d_ArrayOfQuadrangleStrips);
  }

export declare class Handle_Graphic3d_ArrayOfSegments {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfSegments): void;
  get(): Graphic3d_ArrayOfSegments;
}

  export declare class Handle_Graphic3d_ArrayOfSegments_1 extends Handle_Graphic3d_ArrayOfSegments {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfSegments_2 extends Handle_Graphic3d_ArrayOfSegments {
    constructor(thePtr: Graphic3d_ArrayOfSegments);
  }

  export declare class Handle_Graphic3d_ArrayOfSegments_3 extends Handle_Graphic3d_ArrayOfSegments {
    constructor(theHandle: Handle_Graphic3d_ArrayOfSegments);
  }

  export declare class Handle_Graphic3d_ArrayOfSegments_4 extends Handle_Graphic3d_ArrayOfSegments {
    constructor(theHandle: Handle_Graphic3d_ArrayOfSegments);
  }

export declare class Handle_Graphic3d_ArrayOfTriangleFans {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfTriangleFans): void;
  get(): Graphic3d_ArrayOfTriangleFans;
}

  export declare class Handle_Graphic3d_ArrayOfTriangleFans_1 extends Handle_Graphic3d_ArrayOfTriangleFans {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfTriangleFans_2 extends Handle_Graphic3d_ArrayOfTriangleFans {
    constructor(thePtr: Graphic3d_ArrayOfTriangleFans);
  }

  export declare class Handle_Graphic3d_ArrayOfTriangleFans_3 extends Handle_Graphic3d_ArrayOfTriangleFans {
    constructor(theHandle: Handle_Graphic3d_ArrayOfTriangleFans);
  }

  export declare class Handle_Graphic3d_ArrayOfTriangleFans_4 extends Handle_Graphic3d_ArrayOfTriangleFans {
    constructor(theHandle: Handle_Graphic3d_ArrayOfTriangleFans);
  }

export declare class Handle_Graphic3d_ArrayOfTriangleStrips {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_ArrayOfTriangleStrips): void;
  get(): Graphic3d_ArrayOfTriangleStrips;
}

  export declare class Handle_Graphic3d_ArrayOfTriangleStrips_1 extends Handle_Graphic3d_ArrayOfTriangleStrips {
    constructor();
  }

  export declare class Handle_Graphic3d_ArrayOfTriangleStrips_2 extends Handle_Graphic3d_ArrayOfTriangleStrips {
    constructor(thePtr: Graphic3d_ArrayOfTriangleStrips);
  }

  export declare class Handle_Graphic3d_ArrayOfTriangleStrips_3 extends Handle_Graphic3d_ArrayOfTriangleStrips {
    constructor(theHandle: Handle_Graphic3d_ArrayOfTriangleStrips);
  }

  export declare class Handle_Graphic3d_ArrayOfTriangleStrips_4 extends Handle_Graphic3d_ArrayOfTriangleStrips {
    constructor(theHandle: Handle_Graphic3d_ArrayOfTriangleStrips);
  }

export declare class Handle_Graphic3d_CubeMapPacked {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_CubeMapPacked): void;
  get(): Graphic3d_CubeMapPacked;
}

  export declare class Handle_Graphic3d_CubeMapPacked_1 extends Handle_Graphic3d_CubeMapPacked {
    constructor();
  }

  export declare class Handle_Graphic3d_CubeMapPacked_2 extends Handle_Graphic3d_CubeMapPacked {
    constructor(thePtr: Graphic3d_CubeMapPacked);
  }

  export declare class Handle_Graphic3d_CubeMapPacked_3 extends Handle_Graphic3d_CubeMapPacked {
    constructor(theHandle: Handle_Graphic3d_CubeMapPacked);
  }

  export declare class Handle_Graphic3d_CubeMapPacked_4 extends Handle_Graphic3d_CubeMapPacked {
    constructor(theHandle: Handle_Graphic3d_CubeMapPacked);
  }

export declare class Handle_Graphic3d_CubeMapSeparate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_CubeMapSeparate): void;
  get(): Graphic3d_CubeMapSeparate;
}

  export declare class Handle_Graphic3d_CubeMapSeparate_1 extends Handle_Graphic3d_CubeMapSeparate {
    constructor();
  }

  export declare class Handle_Graphic3d_CubeMapSeparate_2 extends Handle_Graphic3d_CubeMapSeparate {
    constructor(thePtr: Graphic3d_CubeMapSeparate);
  }

  export declare class Handle_Graphic3d_CubeMapSeparate_3 extends Handle_Graphic3d_CubeMapSeparate {
    constructor(theHandle: Handle_Graphic3d_CubeMapSeparate);
  }

  export declare class Handle_Graphic3d_CubeMapSeparate_4 extends Handle_Graphic3d_CubeMapSeparate {
    constructor(theHandle: Handle_Graphic3d_CubeMapSeparate);
  }

export declare class Handle_Graphic3d_GroupDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_GroupDefinitionError): void;
  get(): Graphic3d_GroupDefinitionError;
}

  export declare class Handle_Graphic3d_GroupDefinitionError_1 extends Handle_Graphic3d_GroupDefinitionError {
    constructor();
  }

  export declare class Handle_Graphic3d_GroupDefinitionError_2 extends Handle_Graphic3d_GroupDefinitionError {
    constructor(thePtr: Graphic3d_GroupDefinitionError);
  }

  export declare class Handle_Graphic3d_GroupDefinitionError_3 extends Handle_Graphic3d_GroupDefinitionError {
    constructor(theHandle: Handle_Graphic3d_GroupDefinitionError);
  }

  export declare class Handle_Graphic3d_GroupDefinitionError_4 extends Handle_Graphic3d_GroupDefinitionError {
    constructor(theHandle: Handle_Graphic3d_GroupDefinitionError);
  }

export declare class Graphic3d_ArrayOfIndexedMapOfStructure {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Graphic3d_IndexedMapOfStructure): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Graphic3d_ArrayOfIndexedMapOfStructure): Graphic3d_ArrayOfIndexedMapOfStructure;
  Move(theOther: Graphic3d_ArrayOfIndexedMapOfStructure): Graphic3d_ArrayOfIndexedMapOfStructure;
  First(): Graphic3d_IndexedMapOfStructure;
  ChangeFirst(): Graphic3d_IndexedMapOfStructure;
  Last(): Graphic3d_IndexedMapOfStructure;
  ChangeLast(): Graphic3d_IndexedMapOfStructure;
  Value(theIndex: Standard_Integer): Graphic3d_IndexedMapOfStructure;
  ChangeValue(theIndex: Standard_Integer): Graphic3d_IndexedMapOfStructure;
  SetValue(theIndex: Standard_Integer, theItem: Graphic3d_IndexedMapOfStructure): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Graphic3d_ArrayOfIndexedMapOfStructure_1 extends Graphic3d_ArrayOfIndexedMapOfStructure {
    constructor();
  }

  export declare class Graphic3d_ArrayOfIndexedMapOfStructure_2 extends Graphic3d_ArrayOfIndexedMapOfStructure {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Graphic3d_ArrayOfIndexedMapOfStructure_3 extends Graphic3d_ArrayOfIndexedMapOfStructure {
    constructor(theOther: Graphic3d_ArrayOfIndexedMapOfStructure);
  }

  export declare class Graphic3d_ArrayOfIndexedMapOfStructure_4 extends Graphic3d_ArrayOfIndexedMapOfStructure {
    constructor(theOther: Graphic3d_ArrayOfIndexedMapOfStructure);
  }

  export declare class Graphic3d_ArrayOfIndexedMapOfStructure_5 extends Graphic3d_ArrayOfIndexedMapOfStructure {
    constructor(theBegin: Graphic3d_IndexedMapOfStructure, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Graphic3d_MaterialDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_MaterialDefinitionError): void;
  get(): Graphic3d_MaterialDefinitionError;
}

  export declare class Handle_Graphic3d_MaterialDefinitionError_1 extends Handle_Graphic3d_MaterialDefinitionError {
    constructor();
  }

  export declare class Handle_Graphic3d_MaterialDefinitionError_2 extends Handle_Graphic3d_MaterialDefinitionError {
    constructor(thePtr: Graphic3d_MaterialDefinitionError);
  }

  export declare class Handle_Graphic3d_MaterialDefinitionError_3 extends Handle_Graphic3d_MaterialDefinitionError {
    constructor(theHandle: Handle_Graphic3d_MaterialDefinitionError);
  }

  export declare class Handle_Graphic3d_MaterialDefinitionError_4 extends Handle_Graphic3d_MaterialDefinitionError {
    constructor(theHandle: Handle_Graphic3d_MaterialDefinitionError);
  }

export declare class Handle_Graphic3d_PriorityDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_PriorityDefinitionError): void;
  get(): Graphic3d_PriorityDefinitionError;
}

  export declare class Handle_Graphic3d_PriorityDefinitionError_1 extends Handle_Graphic3d_PriorityDefinitionError {
    constructor();
  }

  export declare class Handle_Graphic3d_PriorityDefinitionError_2 extends Handle_Graphic3d_PriorityDefinitionError {
    constructor(thePtr: Graphic3d_PriorityDefinitionError);
  }

  export declare class Handle_Graphic3d_PriorityDefinitionError_3 extends Handle_Graphic3d_PriorityDefinitionError {
    constructor(theHandle: Handle_Graphic3d_PriorityDefinitionError);
  }

  export declare class Handle_Graphic3d_PriorityDefinitionError_4 extends Handle_Graphic3d_PriorityDefinitionError {
    constructor(theHandle: Handle_Graphic3d_PriorityDefinitionError);
  }

export declare class Handle_Graphic3d_StructureDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_StructureDefinitionError): void;
  get(): Graphic3d_StructureDefinitionError;
}

  export declare class Handle_Graphic3d_StructureDefinitionError_1 extends Handle_Graphic3d_StructureDefinitionError {
    constructor();
  }

  export declare class Handle_Graphic3d_StructureDefinitionError_2 extends Handle_Graphic3d_StructureDefinitionError {
    constructor(thePtr: Graphic3d_StructureDefinitionError);
  }

  export declare class Handle_Graphic3d_StructureDefinitionError_3 extends Handle_Graphic3d_StructureDefinitionError {
    constructor(theHandle: Handle_Graphic3d_StructureDefinitionError);
  }

  export declare class Handle_Graphic3d_StructureDefinitionError_4 extends Handle_Graphic3d_StructureDefinitionError {
    constructor(theHandle: Handle_Graphic3d_StructureDefinitionError);
  }

export declare class Handle_Graphic3d_Text {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Text): void;
  get(): Graphic3d_Text;
}

  export declare class Handle_Graphic3d_Text_1 extends Handle_Graphic3d_Text {
    constructor();
  }

  export declare class Handle_Graphic3d_Text_2 extends Handle_Graphic3d_Text {
    constructor(thePtr: Graphic3d_Text);
  }

  export declare class Handle_Graphic3d_Text_3 extends Handle_Graphic3d_Text {
    constructor(theHandle: Handle_Graphic3d_Text);
  }

  export declare class Handle_Graphic3d_Text_4 extends Handle_Graphic3d_Text {
    constructor(theHandle: Handle_Graphic3d_Text);
  }

export declare class Handle_Graphic3d_Texture1D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Texture1D): void;
  get(): Graphic3d_Texture1D;
}

  export declare class Handle_Graphic3d_Texture1D_1 extends Handle_Graphic3d_Texture1D {
    constructor();
  }

  export declare class Handle_Graphic3d_Texture1D_2 extends Handle_Graphic3d_Texture1D {
    constructor(thePtr: Graphic3d_Texture1D);
  }

  export declare class Handle_Graphic3d_Texture1D_3 extends Handle_Graphic3d_Texture1D {
    constructor(theHandle: Handle_Graphic3d_Texture1D);
  }

  export declare class Handle_Graphic3d_Texture1D_4 extends Handle_Graphic3d_Texture1D {
    constructor(theHandle: Handle_Graphic3d_Texture1D);
  }

export declare class Handle_Graphic3d_Texture1Dmanual {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Texture1Dmanual): void;
  get(): Graphic3d_Texture1Dmanual;
}

  export declare class Handle_Graphic3d_Texture1Dmanual_1 extends Handle_Graphic3d_Texture1Dmanual {
    constructor();
  }

  export declare class Handle_Graphic3d_Texture1Dmanual_2 extends Handle_Graphic3d_Texture1Dmanual {
    constructor(thePtr: Graphic3d_Texture1Dmanual);
  }

  export declare class Handle_Graphic3d_Texture1Dmanual_3 extends Handle_Graphic3d_Texture1Dmanual {
    constructor(theHandle: Handle_Graphic3d_Texture1Dmanual);
  }

  export declare class Handle_Graphic3d_Texture1Dmanual_4 extends Handle_Graphic3d_Texture1Dmanual {
    constructor(theHandle: Handle_Graphic3d_Texture1Dmanual);
  }

export declare class Handle_Graphic3d_Texture1Dsegment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Texture1Dsegment): void;
  get(): Graphic3d_Texture1Dsegment;
}

  export declare class Handle_Graphic3d_Texture1Dsegment_1 extends Handle_Graphic3d_Texture1Dsegment {
    constructor();
  }

  export declare class Handle_Graphic3d_Texture1Dsegment_2 extends Handle_Graphic3d_Texture1Dsegment {
    constructor(thePtr: Graphic3d_Texture1Dsegment);
  }

  export declare class Handle_Graphic3d_Texture1Dsegment_3 extends Handle_Graphic3d_Texture1Dsegment {
    constructor(theHandle: Handle_Graphic3d_Texture1Dsegment);
  }

  export declare class Handle_Graphic3d_Texture1Dsegment_4 extends Handle_Graphic3d_Texture1Dsegment {
    constructor(theHandle: Handle_Graphic3d_Texture1Dsegment);
  }

export declare class Handle_Graphic3d_Texture2Dplane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_Texture2Dplane): void;
  get(): Graphic3d_Texture2Dplane;
}

  export declare class Handle_Graphic3d_Texture2Dplane_1 extends Handle_Graphic3d_Texture2Dplane {
    constructor();
  }

  export declare class Handle_Graphic3d_Texture2Dplane_2 extends Handle_Graphic3d_Texture2Dplane {
    constructor(thePtr: Graphic3d_Texture2Dplane);
  }

  export declare class Handle_Graphic3d_Texture2Dplane_3 extends Handle_Graphic3d_Texture2Dplane {
    constructor(theHandle: Handle_Graphic3d_Texture2Dplane);
  }

  export declare class Handle_Graphic3d_Texture2Dplane_4 extends Handle_Graphic3d_Texture2Dplane {
    constructor(theHandle: Handle_Graphic3d_Texture2Dplane);
  }

export declare class Handle_Graphic3d_TransformError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Graphic3d_TransformError): void;
  get(): Graphic3d_TransformError;
}

  export declare class Handle_Graphic3d_TransformError_1 extends Handle_Graphic3d_TransformError {
    constructor();
  }

  export declare class Handle_Graphic3d_TransformError_2 extends Handle_Graphic3d_TransformError {
    constructor(thePtr: Graphic3d_TransformError);
  }

  export declare class Handle_Graphic3d_TransformError_3 extends Handle_Graphic3d_TransformError {
    constructor(theHandle: Handle_Graphic3d_TransformError);
  }

  export declare class Handle_Graphic3d_TransformError_4 extends Handle_Graphic3d_TransformError {
    constructor(theHandle: Handle_Graphic3d_TransformError);
  }

export declare class Handle_Image_AlienPixMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Image_AlienPixMap): void;
  get(): Image_AlienPixMap;
}

  export declare class Handle_Image_AlienPixMap_1 extends Handle_Image_AlienPixMap {
    constructor();
  }

  export declare class Handle_Image_AlienPixMap_2 extends Handle_Image_AlienPixMap {
    constructor(thePtr: Image_AlienPixMap);
  }

  export declare class Handle_Image_AlienPixMap_3 extends Handle_Image_AlienPixMap {
    constructor(theHandle: Handle_Image_AlienPixMap);
  }

  export declare class Handle_Image_AlienPixMap_4 extends Handle_Image_AlienPixMap {
    constructor(theHandle: Handle_Image_AlienPixMap);
  }

export declare class Handle_Image_Diff {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Image_Diff): void;
  get(): Image_Diff;
}

  export declare class Handle_Image_Diff_1 extends Handle_Image_Diff {
    constructor();
  }

  export declare class Handle_Image_Diff_2 extends Handle_Image_Diff {
    constructor(thePtr: Image_Diff);
  }

  export declare class Handle_Image_Diff_3 extends Handle_Image_Diff {
    constructor(theHandle: Handle_Image_Diff);
  }

  export declare class Handle_Image_Diff_4 extends Handle_Image_Diff {
    constructor(theHandle: Handle_Image_Diff);
  }

export declare class Handle_Image_VideoRecorder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Image_VideoRecorder): void;
  get(): Image_VideoRecorder;
}

  export declare class Handle_Image_VideoRecorder_1 extends Handle_Image_VideoRecorder {
    constructor();
  }

  export declare class Handle_Image_VideoRecorder_2 extends Handle_Image_VideoRecorder {
    constructor(thePtr: Image_VideoRecorder);
  }

  export declare class Handle_Image_VideoRecorder_3 extends Handle_Image_VideoRecorder {
    constructor(theHandle: Handle_Image_VideoRecorder);
  }

  export declare class Handle_Image_VideoRecorder_4 extends Handle_Image_VideoRecorder {
    constructor(theHandle: Handle_Image_VideoRecorder);
  }

export declare class Handle_WNT_ClassDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: WNT_ClassDefinitionError): void;
  get(): WNT_ClassDefinitionError;
}

  export declare class Handle_WNT_ClassDefinitionError_1 extends Handle_WNT_ClassDefinitionError {
    constructor();
  }

  export declare class Handle_WNT_ClassDefinitionError_2 extends Handle_WNT_ClassDefinitionError {
    constructor(thePtr: WNT_ClassDefinitionError);
  }

  export declare class Handle_WNT_ClassDefinitionError_3 extends Handle_WNT_ClassDefinitionError {
    constructor(theHandle: Handle_WNT_ClassDefinitionError);
  }

  export declare class Handle_WNT_ClassDefinitionError_4 extends Handle_WNT_ClassDefinitionError {
    constructor(theHandle: Handle_WNT_ClassDefinitionError);
  }

export declare type Aspect_InteriorStyle = {
  Aspect_IS_EMPTY: {};
  Aspect_IS_SOLID: {};
  Aspect_IS_HATCH: {};
  Aspect_IS_HIDDENLINE: {};
  Aspect_IS_POINT: {};
  Aspect_IS_HOLLOW: {};
}

export declare type Aspect_TypeOfDisplayText = {
  Aspect_TODT_NORMAL: {};
  Aspect_TODT_SUBTITLE: {};
  Aspect_TODT_DEKALE: {};
  Aspect_TODT_BLEND: {};
  Aspect_TODT_DIMENSION: {};
  Aspect_TODT_SHADOW: {};
}

export declare type Aspect_TypeOfLine = {
  Aspect_TOL_EMPTY: {};
  Aspect_TOL_SOLID: {};
  Aspect_TOL_DASH: {};
  Aspect_TOL_DOT: {};
  Aspect_TOL_DOTDASH: {};
  Aspect_TOL_USERDEFINED: {};
}

export declare type Aspect_TypeOfMarker = {
  Aspect_TOM_EMPTY: {};
  Aspect_TOM_POINT: {};
  Aspect_TOM_PLUS: {};
  Aspect_TOM_STAR: {};
  Aspect_TOM_X: {};
  Aspect_TOM_O: {};
  Aspect_TOM_O_POINT: {};
  Aspect_TOM_O_PLUS: {};
  Aspect_TOM_O_STAR: {};
  Aspect_TOM_O_X: {};
  Aspect_TOM_RING1: {};
  Aspect_TOM_RING2: {};
  Aspect_TOM_RING3: {};
  Aspect_TOM_BALL: {};
  Aspect_TOM_USERDEFINED: {};
}

export declare type Aspect_TypeOfStyleText = {
  Aspect_TOST_NORMAL: {};
  Aspect_TOST_ANNOTATION: {};
}

export declare type Font_FontAspect = {
  Font_FontAspect_UNDEFINED: {};
  Font_FontAspect_Regular: {};
  Font_FontAspect_Bold: {};
  Font_FontAspect_Italic: {};
  Font_FontAspect_BoldItalic: {};
  Font_FA_Undefined: {};
  Font_FA_Regular: {};
  Font_FA_Bold: {};
  Font_FA_Italic: {};
  Font_FA_BoldItalic: {};
}

export declare type Graphic3d_AlphaMode = {
  Graphic3d_AlphaMode_Opaque: {};
  Graphic3d_AlphaMode_Mask: {};
  Graphic3d_AlphaMode_Blend: {};
  Graphic3d_AlphaMode_BlendAuto: {};
}

export declare type Aspect_HatchStyle = {
  Aspect_HS_SOLID: {};
  Aspect_HS_HORIZONTAL: {};
  Aspect_HS_HORIZONTAL_WIDE: {};
  Aspect_HS_VERTICAL: {};
  Aspect_HS_VERTICAL_WIDE: {};
  Aspect_HS_DIAGONAL_45: {};
  Aspect_HS_DIAGONAL_45_WIDE: {};
  Aspect_HS_DIAGONAL_135: {};
  Aspect_HS_DIAGONAL_135_WIDE: {};
  Aspect_HS_GRID: {};
  Aspect_HS_GRID_WIDE: {};
  Aspect_HS_GRID_DIAGONAL: {};
  Aspect_HS_GRID_DIAGONAL_WIDE: {};
  Aspect_HS_NB: {};
}

export declare type Image_Format = {
  Image_Format_UNKNOWN: {};
  Image_Format_Gray: {};
  Image_Format_Alpha: {};
  Image_Format_RGB: {};
  Image_Format_BGR: {};
  Image_Format_RGB32: {};
  Image_Format_BGR32: {};
  Image_Format_RGBA: {};
  Image_Format_BGRA: {};
  Image_Format_GrayF: {};
  Image_Format_AlphaF: {};
  Image_Format_RGF: {};
  Image_Format_RGBF: {};
  Image_Format_BGRF: {};
  Image_Format_RGBAF: {};
  Image_Format_BGRAF: {};
}

export declare type Graphic3d_FresnelModel = {
  Graphic3d_FM_SCHLICK: {};
  Graphic3d_FM_CONSTANT: {};
  Graphic3d_FM_CONDUCTOR: {};
  Graphic3d_FM_DIELECTRIC: {};
}

export declare type Graphic3d_NameOfMaterial = {
  Graphic3d_NameOfMaterial_Brass: {};
  Graphic3d_NameOfMaterial_Bronze: {};
  Graphic3d_NameOfMaterial_Copper: {};
  Graphic3d_NameOfMaterial_Gold: {};
  Graphic3d_NameOfMaterial_Pewter: {};
  Graphic3d_NameOfMaterial_Plastered: {};
  Graphic3d_NameOfMaterial_Plastified: {};
  Graphic3d_NameOfMaterial_Silver: {};
  Graphic3d_NameOfMaterial_Steel: {};
  Graphic3d_NameOfMaterial_Stone: {};
  Graphic3d_NameOfMaterial_ShinyPlastified: {};
  Graphic3d_NameOfMaterial_Satin: {};
  Graphic3d_NameOfMaterial_Metalized: {};
  Graphic3d_NameOfMaterial_Ionized: {};
  Graphic3d_NameOfMaterial_Chrome: {};
  Graphic3d_NameOfMaterial_Aluminum: {};
  Graphic3d_NameOfMaterial_Obsidian: {};
  Graphic3d_NameOfMaterial_Neon: {};
  Graphic3d_NameOfMaterial_Jade: {};
  Graphic3d_NameOfMaterial_Charcoal: {};
  Graphic3d_NameOfMaterial_Water: {};
  Graphic3d_NameOfMaterial_Glass: {};
  Graphic3d_NameOfMaterial_Diamond: {};
  Graphic3d_NameOfMaterial_Transparent: {};
  Graphic3d_NameOfMaterial_DEFAULT: {};
  Graphic3d_NameOfMaterial_UserDefined: {};
  Graphic3d_NOM_BRASS: {};
  Graphic3d_NOM_BRONZE: {};
  Graphic3d_NOM_COPPER: {};
  Graphic3d_NOM_GOLD: {};
  Graphic3d_NOM_PEWTER: {};
  Graphic3d_NOM_PLASTER: {};
  Graphic3d_NOM_PLASTIC: {};
  Graphic3d_NOM_SILVER: {};
  Graphic3d_NOM_STEEL: {};
  Graphic3d_NOM_STONE: {};
  Graphic3d_NOM_SHINY_PLASTIC: {};
  Graphic3d_NOM_SATIN: {};
  Graphic3d_NOM_METALIZED: {};
  Graphic3d_NOM_NEON_GNC: {};
  Graphic3d_NOM_CHROME: {};
  Graphic3d_NOM_ALUMINIUM: {};
  Graphic3d_NOM_OBSIDIAN: {};
  Graphic3d_NOM_NEON_PHC: {};
  Graphic3d_NOM_JADE: {};
  Graphic3d_NOM_CHARCOAL: {};
  Graphic3d_NOM_WATER: {};
  Graphic3d_NOM_GLASS: {};
  Graphic3d_NOM_DIAMOND: {};
  Graphic3d_NOM_TRANSPARENT: {};
  Graphic3d_NOM_DEFAULT: {};
  Graphic3d_NOM_UserDefined: {};
}

export declare type Graphic3d_TypeOfMaterial = {
  Graphic3d_MATERIAL_ASPECT: {};
  Graphic3d_MATERIAL_PHYSIC: {};
}

export declare type Graphic3d_TypeOfReflection = {
  Graphic3d_TOR_AMBIENT: {};
  Graphic3d_TOR_DIFFUSE: {};
  Graphic3d_TOR_SPECULAR: {};
  Graphic3d_TOR_EMISSION: {};
}

export declare type Graphic3d_TypeOfShaderObject = {
  Graphic3d_TOS_VERTEX: {};
  Graphic3d_TOS_TESS_CONTROL: {};
  Graphic3d_TOS_TESS_EVALUATION: {};
  Graphic3d_TOS_GEOMETRY: {};
  Graphic3d_TOS_FRAGMENT: {};
  Graphic3d_TOS_COMPUTE: {};
}

export declare type Graphic3d_LevelOfTextureAnisotropy = {
  Graphic3d_LOTA_OFF: {};
  Graphic3d_LOTA_FAST: {};
  Graphic3d_LOTA_MIDDLE: {};
  Graphic3d_LOTA_QUALITY: {};
}

export declare type Graphic3d_TextureUnit = {
  Graphic3d_TextureUnit_0: {};
  Graphic3d_TextureUnit_1: {};
  Graphic3d_TextureUnit_2: {};
  Graphic3d_TextureUnit_3: {};
  Graphic3d_TextureUnit_4: {};
  Graphic3d_TextureUnit_5: {};
  Graphic3d_TextureUnit_6: {};
  Graphic3d_TextureUnit_7: {};
  Graphic3d_TextureUnit_8: {};
  Graphic3d_TextureUnit_9: {};
  Graphic3d_TextureUnit_10: {};
  Graphic3d_TextureUnit_11: {};
  Graphic3d_TextureUnit_12: {};
  Graphic3d_TextureUnit_13: {};
  Graphic3d_TextureUnit_14: {};
  Graphic3d_TextureUnit_15: {};
  Graphic3d_TextureUnit_BaseColor: {};
  Graphic3d_TextureUnit_Emissive: {};
  Graphic3d_TextureUnit_Occlusion: {};
  Graphic3d_TextureUnit_Normal: {};
  Graphic3d_TextureUnit_MetallicRoughness: {};
  Graphic3d_TextureUnit_EnvMap: {};
  Graphic3d_TextureUnit_PointSprite: {};
  Graphic3d_TextureUnit_PbrEnvironmentLUT: {};
  Graphic3d_TextureUnit_PbrIblDiffuseSH: {};
  Graphic3d_TextureUnit_PbrIblSpecular: {};
}

export declare type Graphic3d_TypeOfTextureFilter = {
  Graphic3d_TOTF_NEAREST: {};
  Graphic3d_TOTF_BILINEAR: {};
  Graphic3d_TOTF_TRILINEAR: {};
}

export declare type Graphic3d_TypeOfTextureMode = {
  Graphic3d_TOTM_OBJECT: {};
  Graphic3d_TOTM_SPHERE: {};
  Graphic3d_TOTM_EYE: {};
  Graphic3d_TOTM_MANUAL: {};
  Graphic3d_TOTM_SPRITE: {};
}

export declare type Graphic3d_TextureSetBits = {
  Graphic3d_TextureSetBits_NONE: {};
  Graphic3d_TextureSetBits_BaseColor: {};
  Graphic3d_TextureSetBits_Emissive: {};
  Graphic3d_TextureSetBits_Occlusion: {};
  Graphic3d_TextureSetBits_Normal: {};
  Graphic3d_TextureSetBits_MetallicRoughness: {};
}

export declare type Graphic3d_TypeOfTexture = {
  Graphic3d_TOT_1D: {};
  Graphic3d_TOT_2D: {};
  Graphic3d_TOT_2D_MIPMAP: {};
  Graphic3d_TOT_CUBEMAP: {};
}

export declare type Graphic3d_TypeOfShadingModel = {
  Graphic3d_TOSM_DEFAULT: {};
  Graphic3d_TOSM_UNLIT: {};
  Graphic3d_TOSM_FACET: {};
  Graphic3d_TOSM_VERTEX: {};
  Graphic3d_TOSM_FRAGMENT: {};
  Graphic3d_TOSM_PBR: {};
  Graphic3d_TOSM_PBR_FACET: {};
  Graphic3d_TOSM_NONE: {};
  V3d_COLOR: {};
  V3d_FLAT: {};
  V3d_GOURAUD: {};
  V3d_PHONG: {};
}

export declare type Graphic3d_TextPath = {
  Graphic3d_TP_UP: {};
  Graphic3d_TP_DOWN: {};
  Graphic3d_TP_LEFT: {};
  Graphic3d_TP_RIGHT: {};
}

export declare type Graphic3d_HorizontalTextAlignment = {
  Graphic3d_HTA_LEFT: {};
  Graphic3d_HTA_CENTER: {};
  Graphic3d_HTA_RIGHT: {};
}

export declare type Graphic3d_VerticalTextAlignment = {
  Graphic3d_VTA_BOTTOM: {};
  Graphic3d_VTA_CENTER: {};
  Graphic3d_VTA_TOP: {};
  Graphic3d_VTA_TOPFIRSTLINE: {};
}

export declare type Graphic3d_TypeOfPrimitiveArray = {
  Graphic3d_TOPA_UNDEFINED: {};
  Graphic3d_TOPA_POINTS: {};
  Graphic3d_TOPA_SEGMENTS: {};
  Graphic3d_TOPA_POLYLINES: {};
  Graphic3d_TOPA_TRIANGLES: {};
  Graphic3d_TOPA_TRIANGLESTRIPS: {};
  Graphic3d_TOPA_TRIANGLEFANS: {};
  Graphic3d_TOPA_LINES_ADJACENCY: {};
  Graphic3d_TOPA_LINE_STRIP_ADJACENCY: {};
  Graphic3d_TOPA_TRIANGLES_ADJACENCY: {};
  Graphic3d_TOPA_TRIANGLE_STRIP_ADJACENCY: {};
  Graphic3d_TOPA_QUADRANGLES: {};
  Graphic3d_TOPA_QUADRANGLESTRIPS: {};
  Graphic3d_TOPA_POLYGONS: {};
}

export declare type Graphic3d_TypeOfAttribute = {
  Graphic3d_TOA_POS: {};
  Graphic3d_TOA_NORM: {};
  Graphic3d_TOA_UV: {};
  Graphic3d_TOA_COLOR: {};
  Graphic3d_TOA_CUSTOM: {};
}

export declare type Graphic3d_TypeOfData = {
  Graphic3d_TOD_USHORT: {};
  Graphic3d_TOD_UINT: {};
  Graphic3d_TOD_VEC2: {};
  Graphic3d_TOD_VEC3: {};
  Graphic3d_TOD_VEC4: {};
  Graphic3d_TOD_VEC4UB: {};
  Graphic3d_TOD_FLOAT: {};
}

export declare type Aspect_TypeOfHighlightMethod = {
  Aspect_TOHM_COLOR: {};
  Aspect_TOHM_BOUNDBOX: {};
}

export declare type Graphic3d_CappingFlags = {
  Graphic3d_CappingFlags_None: {};
  Graphic3d_CappingFlags_ObjectMaterial: {};
  Graphic3d_CappingFlags_ObjectTexture: {};
  Graphic3d_CappingFlags_ObjectShader: {};
  Graphic3d_CappingFlags_ObjectAspect: {};
}

export declare type Graphic3d_ClipState = {
  Graphic3d_ClipState_Out: {};
  Graphic3d_ClipState_In: {};
  Graphic3d_ClipState_On: {};
}

export declare type Graphic3d_TypeOfComposition = {
  Graphic3d_TOC_REPLACE: {};
  Graphic3d_TOC_POSTCONCATENATE: {};
}

export declare type Aspect_TypeOfTriedronPosition = {
  Aspect_TOTP_CENTER: {};
  Aspect_TOTP_TOP: {};
  Aspect_TOTP_BOTTOM: {};
  Aspect_TOTP_LEFT: {};
  Aspect_TOTP_RIGHT: {};
  Aspect_TOTP_LEFT_LOWER: {};
  Aspect_TOTP_LEFT_UPPER: {};
  Aspect_TOTP_RIGHT_LOWER: {};
  Aspect_TOTP_RIGHT_UPPER: {};
}

export declare type Aspect_Eye = {
  Aspect_Eye_Left: {};
  Aspect_Eye_Right: {};
}

export declare type Graphic3d_TransModeFlags = {
  Graphic3d_TMF_None: {};
  Graphic3d_TMF_ZoomPers: {};
  Graphic3d_TMF_RotatePers: {};
  Graphic3d_TMF_TriedronPers: {};
  Graphic3d_TMF_2d: {};
  Graphic3d_TMF_ZoomRotatePers: {};
}

export declare type Graphic3d_TypeOfConnection = {
  Graphic3d_TOC_ANCESTOR: {};
  Graphic3d_TOC_DESCENDANT: {};
}

export declare type Graphic3d_TypeOfStructure = {
  Graphic3d_TOS_WIREFRAME: {};
  Graphic3d_TOS_SHADING: {};
  Graphic3d_TOS_COMPUTED: {};
  Graphic3d_TOS_ALL: {};
}

export declare type Aspect_VKeyBasic = {
  Aspect_VKey_UNKNOWN: {};
  Aspect_VKey_A: {};
  Aspect_VKey_B: {};
  Aspect_VKey_C: {};
  Aspect_VKey_D: {};
  Aspect_VKey_E: {};
  Aspect_VKey_F: {};
  Aspect_VKey_G: {};
  Aspect_VKey_H: {};
  Aspect_VKey_I: {};
  Aspect_VKey_J: {};
  Aspect_VKey_K: {};
  Aspect_VKey_L: {};
  Aspect_VKey_M: {};
  Aspect_VKey_N: {};
  Aspect_VKey_O: {};
  Aspect_VKey_P: {};
  Aspect_VKey_Q: {};
  Aspect_VKey_R: {};
  Aspect_VKey_S: {};
  Aspect_VKey_T: {};
  Aspect_VKey_U: {};
  Aspect_VKey_V: {};
  Aspect_VKey_W: {};
  Aspect_VKey_X: {};
  Aspect_VKey_Y: {};
  Aspect_VKey_Z: {};
  Aspect_VKey_0: {};
  Aspect_VKey_1: {};
  Aspect_VKey_2: {};
  Aspect_VKey_3: {};
  Aspect_VKey_4: {};
  Aspect_VKey_5: {};
  Aspect_VKey_6: {};
  Aspect_VKey_7: {};
  Aspect_VKey_8: {};
  Aspect_VKey_9: {};
  Aspect_VKey_F1: {};
  Aspect_VKey_F2: {};
  Aspect_VKey_F3: {};
  Aspect_VKey_F4: {};
  Aspect_VKey_F5: {};
  Aspect_VKey_F6: {};
  Aspect_VKey_F7: {};
  Aspect_VKey_F8: {};
  Aspect_VKey_F9: {};
  Aspect_VKey_F10: {};
  Aspect_VKey_F11: {};
  Aspect_VKey_F12: {};
  Aspect_VKey_Up: {};
  Aspect_VKey_Down: {};
  Aspect_VKey_Left: {};
  Aspect_VKey_Right: {};
  Aspect_VKey_Plus: {};
  Aspect_VKey_Minus: {};
  Aspect_VKey_Equal: {};
  Aspect_VKey_PageUp: {};
  Aspect_VKey_PageDown: {};
  Aspect_VKey_Home: {};
  Aspect_VKey_End: {};
  Aspect_VKey_Escape: {};
  Aspect_VKey_Back: {};
  Aspect_VKey_Enter: {};
  Aspect_VKey_Backspace: {};
  Aspect_VKey_Space: {};
  Aspect_VKey_Delete: {};
  Aspect_VKey_Tilde: {};
  Aspect_VKey_Tab: {};
  Aspect_VKey_Comma: {};
  Aspect_VKey_Period: {};
  Aspect_VKey_Semicolon: {};
  Aspect_VKey_Slash: {};
  Aspect_VKey_BracketLeft: {};
  Aspect_VKey_Backslash: {};
  Aspect_VKey_BracketRight: {};
  Aspect_VKey_Apostrophe: {};
  Aspect_VKey_Numlock: {};
  Aspect_VKey_Scroll: {};
  Aspect_VKey_Numpad0: {};
  Aspect_VKey_Numpad1: {};
  Aspect_VKey_Numpad2: {};
  Aspect_VKey_Numpad3: {};
  Aspect_VKey_Numpad4: {};
  Aspect_VKey_Numpad5: {};
  Aspect_VKey_Numpad6: {};
  Aspect_VKey_Numpad7: {};
  Aspect_VKey_Numpad8: {};
  Aspect_VKey_Numpad9: {};
  Aspect_VKey_NumpadMultiply: {};
  Aspect_VKey_NumpadAdd: {};
  Aspect_VKey_NumpadSubtract: {};
  Aspect_VKey_NumpadDivide: {};
  Aspect_VKey_MediaNextTrack: {};
  Aspect_VKey_MediaPreviousTrack: {};
  Aspect_VKey_MediaStop: {};
  Aspect_VKey_MediaPlayPause: {};
  Aspect_VKey_VolumeMute: {};
  Aspect_VKey_VolumeDown: {};
  Aspect_VKey_VolumeUp: {};
  Aspect_VKey_BrowserBack: {};
  Aspect_VKey_BrowserForward: {};
  Aspect_VKey_BrowserRefresh: {};
  Aspect_VKey_BrowserStop: {};
  Aspect_VKey_BrowserSearch: {};
  Aspect_VKey_BrowserFavorites: {};
  Aspect_VKey_BrowserHome: {};
  Aspect_VKey_ViewTop: {};
  Aspect_VKey_ViewBottom: {};
  Aspect_VKey_ViewLeft: {};
  Aspect_VKey_ViewRight: {};
  Aspect_VKey_ViewFront: {};
  Aspect_VKey_ViewBack: {};
  Aspect_VKey_ViewAxoLeftProj: {};
  Aspect_VKey_ViewAxoRightProj: {};
  Aspect_VKey_ViewFitAll: {};
  Aspect_VKey_ViewRoll90CW: {};
  Aspect_VKey_ViewRoll90CCW: {};
  Aspect_VKey_ViewSwitchRotate: {};
  Aspect_VKey_Shift: {};
  Aspect_VKey_Control: {};
  Aspect_VKey_Alt: {};
  Aspect_VKey_Menu: {};
  Aspect_VKey_Meta: {};
  Aspect_VKey_NavInteract: {};
  Aspect_VKey_NavForward: {};
  Aspect_VKey_NavBackward: {};
  Aspect_VKey_NavSlideLeft: {};
  Aspect_VKey_NavSlideRight: {};
  Aspect_VKey_NavSlideUp: {};
  Aspect_VKey_NavSlideDown: {};
  Aspect_VKey_NavRollCCW: {};
  Aspect_VKey_NavRollCW: {};
  Aspect_VKey_NavLookLeft: {};
  Aspect_VKey_NavLookRight: {};
  Aspect_VKey_NavLookUp: {};
  Aspect_VKey_NavLookDown: {};
  Aspect_VKey_NavCrouch: {};
  Aspect_VKey_NavJump: {};
  Aspect_VKey_NavThrustForward: {};
  Aspect_VKey_NavThrustBackward: {};
  Aspect_VKey_NavThrustStop: {};
  Aspect_VKey_NavSpeedIncrease: {};
  Aspect_VKey_NavSpeedDecrease: {};
}

export declare type Aspect_GradientFillMethod = {
  Aspect_GFM_NONE: {};
  Aspect_GFM_HOR: {};
  Aspect_GFM_VER: {};
  Aspect_GFM_DIAG1: {};
  Aspect_GFM_DIAG2: {};
  Aspect_GFM_CORNER1: {};
  Aspect_GFM_CORNER2: {};
  Aspect_GFM_CORNER3: {};
  Aspect_GFM_CORNER4: {};
}

export declare type Aspect_FillMethod = {
  Aspect_FM_NONE: {};
  Aspect_FM_CENTERED: {};
  Aspect_FM_TILED: {};
  Aspect_FM_STRETCH: {};
}

export declare type Aspect_TypeOfResize = {
  Aspect_TOR_UNKNOWN: {};
  Aspect_TOR_NO_BORDER: {};
  Aspect_TOR_TOP_BORDER: {};
  Aspect_TOR_RIGHT_BORDER: {};
  Aspect_TOR_BOTTOM_BORDER: {};
  Aspect_TOR_LEFT_BORDER: {};
  Aspect_TOR_TOP_AND_RIGHT_BORDER: {};
  Aspect_TOR_RIGHT_AND_BOTTOM_BORDER: {};
  Aspect_TOR_BOTTOM_AND_LEFT_BORDER: {};
  Aspect_TOR_LEFT_AND_TOP_BORDER: {};
}

export declare type Graphic3d_BufferType = {
  Graphic3d_BT_RGB: {};
  Graphic3d_BT_RGBA: {};
  Graphic3d_BT_Depth: {};
  Graphic3d_BT_RGB_RayTraceHdrLeft: {};
  Graphic3d_BT_Red: {};
}

export declare type Graphic3d_CubeMapSide = {
  Graphic3d_CMS_POS_X: {};
  Graphic3d_CMS_NEG_X: {};
  Graphic3d_CMS_POS_Y: {};
  Graphic3d_CMS_NEG_Y: {};
  Graphic3d_CMS_POS_Z: {};
  Graphic3d_CMS_NEG_Z: {};
}

export declare type Graphic3d_TypeOfLightSource = {
  Graphic3d_TOLS_AMBIENT: {};
  Graphic3d_TOLS_DIRECTIONAL: {};
  Graphic3d_TOLS_POSITIONAL: {};
  Graphic3d_TOLS_SPOT: {};
  V3d_AMBIENT: {};
  V3d_DIRECTIONAL: {};
  V3d_POSITIONAL: {};
  V3d_SPOT: {};
}

export declare type Graphic3d_DiagnosticInfo = {
  Graphic3d_DiagnosticInfo_Device: {};
  Graphic3d_DiagnosticInfo_FrameBuffer: {};
  Graphic3d_DiagnosticInfo_Limits: {};
  Graphic3d_DiagnosticInfo_Memory: {};
  Graphic3d_DiagnosticInfo_NativePlatform: {};
  Graphic3d_DiagnosticInfo_Extensions: {};
  Graphic3d_DiagnosticInfo_Short: {};
  Graphic3d_DiagnosticInfo_Basic: {};
  Graphic3d_DiagnosticInfo_Complete: {};
}

export declare type Graphic3d_RenderTransparentMethod = {
  Graphic3d_RTM_BLEND_UNORDERED: {};
  Graphic3d_RTM_BLEND_OIT: {};
}

export declare type Graphic3d_RenderingMode = {
  Graphic3d_RM_RASTERIZATION: {};
  Graphic3d_RM_RAYTRACING: {};
}

export declare type Graphic3d_StereoMode = {
  Graphic3d_StereoMode_QuadBuffer: {};
  Graphic3d_StereoMode_Anaglyph: {};
  Graphic3d_StereoMode_RowInterlaced: {};
  Graphic3d_StereoMode_ColumnInterlaced: {};
  Graphic3d_StereoMode_ChessBoard: {};
  Graphic3d_StereoMode_SideBySide: {};
  Graphic3d_StereoMode_OverUnder: {};
  Graphic3d_StereoMode_SoftPageFlip: {};
  Graphic3d_StereoMode_OpenVR: {};
  Graphic3d_StereoMode_NB: {};
}

export declare type Graphic3d_ToneMappingMethod = {
  Graphic3d_ToneMappingMethod_Disabled: {};
  Graphic3d_ToneMappingMethod_Filmic: {};
}

export declare type Graphic3d_NameOfTexture2D = {
  Graphic3d_NOT_2D_MATRA: {};
  Graphic3d_NOT_2D_ALIENSKIN: {};
  Graphic3d_NOT_2D_BLUE_ROCK: {};
  Graphic3d_NOT_2D_BLUEWHITE_PAPER: {};
  Graphic3d_NOT_2D_BRUSHED: {};
  Graphic3d_NOT_2D_BUBBLES: {};
  Graphic3d_NOT_2D_BUMP: {};
  Graphic3d_NOT_2D_CAST: {};
  Graphic3d_NOT_2D_CHIPBD: {};
  Graphic3d_NOT_2D_CLOUDS: {};
  Graphic3d_NOT_2D_FLESH: {};
  Graphic3d_NOT_2D_FLOOR: {};
  Graphic3d_NOT_2D_GALVNISD: {};
  Graphic3d_NOT_2D_GRASS: {};
  Graphic3d_NOT_2D_ALUMINUM: {};
  Graphic3d_NOT_2D_ROCK: {};
  Graphic3d_NOT_2D_KNURL: {};
  Graphic3d_NOT_2D_MAPLE: {};
  Graphic3d_NOT_2D_MARBLE: {};
  Graphic3d_NOT_2D_MOTTLED: {};
  Graphic3d_NOT_2D_RAIN: {};
  Graphic3d_NOT_2D_CHESS: {};
  Graphic3d_NOT_2D_UNKNOWN: {};
}

export declare type Graphic3d_NameOfTextureEnv = {
  Graphic3d_NOT_ENV_CLOUDS: {};
  Graphic3d_NOT_ENV_CV: {};
  Graphic3d_NOT_ENV_MEDIT: {};
  Graphic3d_NOT_ENV_PEARL: {};
  Graphic3d_NOT_ENV_SKY1: {};
  Graphic3d_NOT_ENV_SKY2: {};
  Graphic3d_NOT_ENV_LINES: {};
  Graphic3d_NOT_ENV_ROAD: {};
  Graphic3d_NOT_ENV_UNKNOWN: {};
}

export declare type Graphic3d_TypeOfAnswer = {
  Graphic3d_TOA_YES: {};
  Graphic3d_TOA_NO: {};
  Graphic3d_TOA_COMPUTE: {};
}

export declare type Graphic3d_TypeOfBackfacingModel = {
  Graphic3d_TOBM_AUTOMATIC: {};
  Graphic3d_TOBM_FORCE: {};
  Graphic3d_TOBM_DISABLE: {};
}

export declare type Graphic3d_TypeOfVisualization = {
  Graphic3d_TOV_WIREFRAME: {};
  Graphic3d_TOV_SHADING: {};
}

export declare type Graphic3d_ZLayerSetting = {
  Graphic3d_ZLayerDepthTest: {};
  Graphic3d_ZLayerDepthWrite: {};
  Graphic3d_ZLayerDepthClear: {};
  Graphic3d_ZLayerDepthOffset: {};
}

export declare type Aspect_TypeOfFacingModel = {
  Aspect_TOFM_BOTH_SIDE: {};
  Aspect_TOFM_BACK_SIDE: {};
  Aspect_TOFM_FRONT_SIDE: {};
}

export declare type Aspect_TypeOfDeflection = {
  Aspect_TOD_RELATIVE: {};
  Aspect_TOD_ABSOLUTE: {};
}

export declare type Graphic3d_GroupAspect = {
  Graphic3d_ASPECT_LINE: {};
  Graphic3d_ASPECT_TEXT: {};
  Graphic3d_ASPECT_MARKER: {};
  Graphic3d_ASPECT_FILL_AREA: {};
}

export declare type Aspect_TypeOfColorScaleData = {
  Aspect_TOCSD_AUTO: {};
  Aspect_TOCSD_USER: {};
}

export declare type Aspect_TypeOfColorScalePosition = {
  Aspect_TOCSP_NONE: {};
  Aspect_TOCSP_LEFT: {};
  Aspect_TOCSP_RIGHT: {};
  Aspect_TOCSP_CENTER: {};
}

export declare type Aspect_GridDrawMode = {
  Aspect_GDM_Lines: {};
  Aspect_GDM_Points: {};
  Aspect_GDM_None: {};
}

export declare type Aspect_GridType = {
  Aspect_GT_Rectangular: {};
  Aspect_GT_Circular: {};
}

export declare type Aspect_XRTrackedDeviceRole = {
  Aspect_XRTrackedDeviceRole_Head: {};
  Aspect_XRTrackedDeviceRole_LeftHand: {};
  Aspect_XRTrackedDeviceRole_RightHand: {};
  Aspect_XRTrackedDeviceRole_Other: {};
}

export declare type Aspect_GraphicsLibrary = {
  Aspect_GraphicsLibrary_OpenGL: {};
  Aspect_GraphicsLibrary_OpenGLES: {};
}

export declare type Aspect_ColorSpace = {
  Aspect_ColorSpace_sRGB: {};
  Aspect_ColorSpace_Linear: {};
}

export declare type Aspect_XAtom = {
  Aspect_XA_DELETE_WINDOW: {};
}

export declare type Aspect_XRActionType = {
  Aspect_XRActionType_InputDigital: {};
  Aspect_XRActionType_InputAnalog: {};
  Aspect_XRActionType_InputPose: {};
  Aspect_XRActionType_InputSkeletal: {};
  Aspect_XRActionType_OutputHaptic: {};
}

export declare type Aspect_XRGenericAction = {
  Aspect_XRGenericAction_IsHeadsetOn: {};
  Aspect_XRGenericAction_InputAppMenu: {};
  Aspect_XRGenericAction_InputSysMenu: {};
  Aspect_XRGenericAction_InputTriggerPull: {};
  Aspect_XRGenericAction_InputTriggerClick: {};
  Aspect_XRGenericAction_InputGripClick: {};
  Aspect_XRGenericAction_InputTrackPadPosition: {};
  Aspect_XRGenericAction_InputTrackPadTouch: {};
  Aspect_XRGenericAction_InputTrackPadClick: {};
  Aspect_XRGenericAction_InputThumbstickPosition: {};
  Aspect_XRGenericAction_InputThumbstickTouch: {};
  Aspect_XRGenericAction_InputThumbstickClick: {};
  Aspect_XRGenericAction_InputPoseBase: {};
  Aspect_XRGenericAction_InputPoseFront: {};
  Aspect_XRGenericAction_InputPoseHandGrip: {};
  Aspect_XRGenericAction_InputPoseFingerTip: {};
  Aspect_XRGenericAction_OutputHaptic: {};
}

export declare type Aspect_TypeOfColorScaleOrientation = {
  Aspect_TOCSO_NONE: {};
  Aspect_TOCSO_LEFT: {};
  Aspect_TOCSO_RIGHT: {};
  Aspect_TOCSO_CENTER: {};
}

export declare type Aspect_WidthOfLine = {
  Aspect_WOL_THIN: {};
  Aspect_WOL_MEDIUM: {};
  Aspect_WOL_THICK: {};
  Aspect_WOL_VERYTHICK: {};
  Aspect_WOL_USERDEFINED: {};
}

export declare type Image_CompressedFormat = {
  Image_CompressedFormat_UNKNOWN: {};
  Image_CompressedFormat_RGB_S3TC_DXT1: {};
  Image_CompressedFormat_RGBA_S3TC_DXT1: {};
  Image_CompressedFormat_RGBA_S3TC_DXT3: {};
  Image_CompressedFormat_RGBA_S3TC_DXT5: {};
}

export declare type Graphic3d_TypeOfLimit = {
  Graphic3d_TypeOfLimit_MaxNbLights: {};
  Graphic3d_TypeOfLimit_MaxNbClipPlanes: {};
  Graphic3d_TypeOfLimit_MaxNbViews: {};
  Graphic3d_TypeOfLimit_MaxTextureSize: {};
  Graphic3d_TypeOfLimit_MaxViewDumpSizeX: {};
  Graphic3d_TypeOfLimit_MaxViewDumpSizeY: {};
  Graphic3d_TypeOfLimit_MaxCombinedTextureUnits: {};
  Graphic3d_TypeOfLimit_MaxMsaa: {};
  Graphic3d_TypeOfLimit_HasPBR: {};
  Graphic3d_TypeOfLimit_HasRayTracing: {};
  Graphic3d_TypeOfLimit_HasRayTracingTextures: {};
  Graphic3d_TypeOfLimit_HasRayTracingAdaptiveSampling: {};
  Graphic3d_TypeOfLimit_HasRayTracingAdaptiveSamplingAtomic: {};
  Graphic3d_TypeOfLimit_HasSRGB: {};
  Graphic3d_TypeOfLimit_HasBlendedOit: {};
  Graphic3d_TypeOfLimit_HasBlendedOitMsaa: {};
  Graphic3d_TypeOfLimit_HasFlatShading: {};
  Graphic3d_TypeOfLimit_HasMeshEdges: {};
  Graphic3d_TypeOfLimit_IsWorkaroundFBO: {};
  Graphic3d_TypeOfLimit_NB: {};
}

export declare type Font_StrictLevel = {
  Font_StrictLevel_Strict: {};
  Font_StrictLevel_Aliases: {};
  Font_StrictLevel_Any: {};
}

export declare type Font_UnicodeSubset = {
  Font_UnicodeSubset_Western: {};
  Font_UnicodeSubset_Korean: {};
  Font_UnicodeSubset_CJK: {};
  Font_UnicodeSubset_Arabic: {};
}

export declare type Graphic3d_FrameStatsCounter = {
  Graphic3d_FrameStatsCounter_NbLayers: {};
  Graphic3d_FrameStatsCounter_NbStructs: {};
  Graphic3d_FrameStatsCounter_EstimatedBytesGeom: {};
  Graphic3d_FrameStatsCounter_EstimatedBytesFbos: {};
  Graphic3d_FrameStatsCounter_EstimatedBytesTextures: {};
  Graphic3d_FrameStatsCounter_NbLayersNotCulled: {};
  Graphic3d_FrameStatsCounter_NbStructsNotCulled: {};
  Graphic3d_FrameStatsCounter_NbGroupsNotCulled: {};
  Graphic3d_FrameStatsCounter_NbElemsNotCulled: {};
  Graphic3d_FrameStatsCounter_NbElemsFillNotCulled: {};
  Graphic3d_FrameStatsCounter_NbElemsLineNotCulled: {};
  Graphic3d_FrameStatsCounter_NbElemsPointNotCulled: {};
  Graphic3d_FrameStatsCounter_NbElemsTextNotCulled: {};
  Graphic3d_FrameStatsCounter_NbTrianglesNotCulled: {};
  Graphic3d_FrameStatsCounter_NbLinesNotCulled: {};
  Graphic3d_FrameStatsCounter_NbPointsNotCulled: {};
  Graphic3d_FrameStatsCounter_NbLayersImmediate: {};
  Graphic3d_FrameStatsCounter_NbStructsImmediate: {};
  Graphic3d_FrameStatsCounter_NbGroupsImmediate: {};
  Graphic3d_FrameStatsCounter_NbElemsImmediate: {};
  Graphic3d_FrameStatsCounter_NbElemsFillImmediate: {};
  Graphic3d_FrameStatsCounter_NbElemsLineImmediate: {};
  Graphic3d_FrameStatsCounter_NbElemsPointImmediate: {};
  Graphic3d_FrameStatsCounter_NbElemsTextImmediate: {};
  Graphic3d_FrameStatsCounter_NbTrianglesImmediate: {};
  Graphic3d_FrameStatsCounter_NbLinesImmediate: {};
  Graphic3d_FrameStatsCounter_NbPointsImmediate: {};
}

export declare type Graphic3d_FrameStatsTimer = {
  Graphic3d_FrameStatsTimer_ElapsedFrame: {};
  Graphic3d_FrameStatsTimer_CpuFrame: {};
  Graphic3d_FrameStatsTimer_CpuCulling: {};
  Graphic3d_FrameStatsTimer_CpuPicking: {};
  Graphic3d_FrameStatsTimer_CpuDynamics: {};
}

export declare type Graphic3d_NameOfTexture1D = {
  Graphic3d_NOT_1D_ELEVATION: {};
  Graphic3d_NOT_1D_UNKNOWN: {};
}

export declare type Graphic3d_NameOfTexturePlane = {
  Graphic3d_NOTP_XY: {};
  Graphic3d_NOTP_YZ: {};
  Graphic3d_NOTP_ZX: {};
  Graphic3d_NOTP_UNKNOWN: {};
}

export declare type Graphic3d_TypeOfBackground = {
  Graphic3d_TOB_NONE: {};
  Graphic3d_TOB_GRADIENT: {};
  Graphic3d_TOB_TEXTURE: {};
  Graphic3d_TOB_CUBEMAP: {};
}

export declare type WNT_OrientationType = {
  WNT_OT_PORTRAIT: {};
  WNT_OT_LANDSCAPE: {};
}

export declare type TKServiceLib = {
  Graphic3d_MarkerImage_1: typeof Graphic3d_MarkerImage_1;
  Graphic3d_MarkerImage_2: typeof Graphic3d_MarkerImage_2;
  Image_PixMapData: typeof Image_PixMapData;
  Image_PixMap: typeof Image_PixMap;
  Graphic3d_HatchStyle_1: typeof Graphic3d_HatchStyle_1;
  Graphic3d_HatchStyle_2: typeof Graphic3d_HatchStyle_2;
  Graphic3d_Fresnel: typeof Graphic3d_Fresnel;
  Graphic3d_BSDF: typeof Graphic3d_BSDF;
  Graphic3d_PBRMaterial_1: typeof Graphic3d_PBRMaterial_1;
  Graphic3d_PBRMaterial_2: typeof Graphic3d_PBRMaterial_2;
  Graphic3d_MaterialAspect_1: typeof Graphic3d_MaterialAspect_1;
  Graphic3d_MaterialAspect_2: typeof Graphic3d_MaterialAspect_2;
  Graphic3d_ShaderAttribute: typeof Graphic3d_ShaderAttribute;
  Graphic3d_TextureParams: typeof Graphic3d_TextureParams;
  Graphic3d_ShaderProgram: typeof Graphic3d_ShaderProgram;
  Graphic3d_TextureSet_1: typeof Graphic3d_TextureSet_1;
  Graphic3d_TextureSet_2: typeof Graphic3d_TextureSet_2;
  Graphic3d_TextureSet_3: typeof Graphic3d_TextureSet_3;
  Graphic3d_Aspects: typeof Graphic3d_Aspects;
  Graphic3d_AspectLine3d_1: typeof Graphic3d_AspectLine3d_1;
  Graphic3d_AspectLine3d_2: typeof Graphic3d_AspectLine3d_2;
  Graphic3d_AspectFillArea3d_1: typeof Graphic3d_AspectFillArea3d_1;
  Graphic3d_AspectFillArea3d_2: typeof Graphic3d_AspectFillArea3d_2;
  Graphic3d_AspectText3d_1: typeof Graphic3d_AspectText3d_1;
  Graphic3d_AspectText3d_2: typeof Graphic3d_AspectText3d_2;
  Graphic3d_AspectMarker3d_1: typeof Graphic3d_AspectMarker3d_1;
  Graphic3d_AspectMarker3d_2: typeof Graphic3d_AspectMarker3d_2;
  Graphic3d_AspectMarker3d_3: typeof Graphic3d_AspectMarker3d_3;
  Graphic3d_AspectMarker3d_4: typeof Graphic3d_AspectMarker3d_4;
  Graphic3d_Vertex_1: typeof Graphic3d_Vertex_1;
  Graphic3d_Vertex_2: typeof Graphic3d_Vertex_2;
  Graphic3d_Vertex_3: typeof Graphic3d_Vertex_3;
  Graphic3d_Buffer: typeof Graphic3d_Buffer;
  Graphic3d_IndexBuffer: typeof Graphic3d_IndexBuffer;
  Graphic3d_BoundBuffer: typeof Graphic3d_BoundBuffer;
  Graphic3d_PresentationAttributes: typeof Graphic3d_PresentationAttributes;
  Graphic3d_ClipPlane_1: typeof Graphic3d_ClipPlane_1;
  Graphic3d_ClipPlane_2: typeof Graphic3d_ClipPlane_2;
  Graphic3d_ClipPlane_3: typeof Graphic3d_ClipPlane_3;
  Graphic3d_ClipPlane_4: typeof Graphic3d_ClipPlane_4;
  Graphic3d_SequenceOfHClipPlane: typeof Graphic3d_SequenceOfHClipPlane;
  Graphic3d_ViewAffinity: typeof Graphic3d_ViewAffinity;
  Graphic3d_CameraTile: typeof Graphic3d_CameraTile;
  Graphic3d_WorldViewProjState_1: typeof Graphic3d_WorldViewProjState_1;
  Graphic3d_WorldViewProjState_2: typeof Graphic3d_WorldViewProjState_2;
  Graphic3d_Camera_1: typeof Graphic3d_Camera_1;
  Graphic3d_Camera_2: typeof Graphic3d_Camera_2;
  Graphic3d_TransformPers_1: typeof Graphic3d_TransformPers_1;
  Graphic3d_TransformPers_2: typeof Graphic3d_TransformPers_2;
  Graphic3d_TransformPers_3: typeof Graphic3d_TransformPers_3;
  Graphic3d_Structure: typeof Graphic3d_Structure;
  Aspect_GenId_1: typeof Aspect_GenId_1;
  Aspect_GenId_2: typeof Aspect_GenId_2;
  Aspect_Background_1: typeof Aspect_Background_1;
  Aspect_Background_2: typeof Aspect_Background_2;
  Aspect_GradientBackground_1: typeof Aspect_GradientBackground_1;
  Aspect_GradientBackground_2: typeof Aspect_GradientBackground_2;
  Graphic3d_CubeMapOrder_1: typeof Graphic3d_CubeMapOrder_1;
  Graphic3d_CubeMapOrder_2: typeof Graphic3d_CubeMapOrder_2;
  Graphic3d_CubeMapOrder_3: typeof Graphic3d_CubeMapOrder_3;
  Graphic3d_ValidatedCubeMapOrder: typeof Graphic3d_ValidatedCubeMapOrder;
  Graphic3d_CLight: typeof Graphic3d_CLight;
  Graphic3d_AxisAspect: typeof Graphic3d_AxisAspect;
  Graphic3d_GraduatedTrihedron: typeof Graphic3d_GraduatedTrihedron;
  Graphic3d_RenderingParams: typeof Graphic3d_RenderingParams;
  Graphic3d_Texture2Dmanual_1: typeof Graphic3d_Texture2Dmanual_1;
  Graphic3d_Texture2Dmanual_2: typeof Graphic3d_Texture2Dmanual_2;
  Graphic3d_Texture2Dmanual_3: typeof Graphic3d_Texture2Dmanual_3;
  Graphic3d_TextureEnv_1: typeof Graphic3d_TextureEnv_1;
  Graphic3d_TextureEnv_2: typeof Graphic3d_TextureEnv_2;
  Graphic3d_TextureEnv_3: typeof Graphic3d_TextureEnv_3;
  Graphic3d_LightSet: typeof Graphic3d_LightSet;
  Graphic3d_StructureManager: typeof Graphic3d_StructureManager;
  Graphic3d_ArrayOfQuadrangles_1: typeof Graphic3d_ArrayOfQuadrangles_1;
  Graphic3d_ArrayOfQuadrangles_2: typeof Graphic3d_ArrayOfQuadrangles_2;
  Graphic3d_ArrayOfTriangles_1: typeof Graphic3d_ArrayOfTriangles_1;
  Graphic3d_ArrayOfTriangles_2: typeof Graphic3d_ArrayOfTriangles_2;
  Graphic3d_MediaTexture: typeof Graphic3d_MediaTexture;
  Graphic3d_ArrayOfPoints_1: typeof Graphic3d_ArrayOfPoints_1;
  Graphic3d_ArrayOfPoints_2: typeof Graphic3d_ArrayOfPoints_2;
  Graphic3d_ArrayOfPolylines_1: typeof Graphic3d_ArrayOfPolylines_1;
  Graphic3d_ArrayOfPolylines_2: typeof Graphic3d_ArrayOfPolylines_2;
  Aspect_VKeySet: typeof Aspect_VKeySet;
  Aspect_Touch_1: typeof Aspect_Touch_1;
  Aspect_Touch_2: typeof Aspect_Touch_2;
  Aspect_Touch_3: typeof Aspect_Touch_3;
  Aspect_AspectFillAreaDefinitionError_1: typeof Aspect_AspectFillAreaDefinitionError_1;
  Aspect_AspectFillAreaDefinitionError_2: typeof Aspect_AspectFillAreaDefinitionError_2;
  Aspect_AspectLineDefinitionError_1: typeof Aspect_AspectLineDefinitionError_1;
  Aspect_AspectLineDefinitionError_2: typeof Aspect_AspectLineDefinitionError_2;
  Aspect_AspectMarkerDefinitionError_1: typeof Aspect_AspectMarkerDefinitionError_1;
  Aspect_AspectMarkerDefinitionError_2: typeof Aspect_AspectMarkerDefinitionError_2;
  Aspect_DisplayConnection: typeof Aspect_DisplayConnection;
  Aspect_DisplayConnectionDefinitionError_1: typeof Aspect_DisplayConnectionDefinitionError_1;
  Aspect_DisplayConnectionDefinitionError_2: typeof Aspect_DisplayConnectionDefinitionError_2;
  Aspect_GraphicDeviceDefinitionError_1: typeof Aspect_GraphicDeviceDefinitionError_1;
  Aspect_GraphicDeviceDefinitionError_2: typeof Aspect_GraphicDeviceDefinitionError_2;
  Aspect_IdentDefinitionError_1: typeof Aspect_IdentDefinitionError_1;
  Aspect_IdentDefinitionError_2: typeof Aspect_IdentDefinitionError_2;
  Aspect_NeutralWindow: typeof Aspect_NeutralWindow;
  Aspect_XRAction: typeof Aspect_XRAction;
  Aspect_XRActionSet: typeof Aspect_XRActionSet;
  Aspect_OpenVRSession: typeof Aspect_OpenVRSession;
  Aspect_WindowDefinitionError_1: typeof Aspect_WindowDefinitionError_1;
  Aspect_WindowDefinitionError_2: typeof Aspect_WindowDefinitionError_2;
  Aspect_WindowError_1: typeof Aspect_WindowError_1;
  Aspect_WindowError_2: typeof Aspect_WindowError_2;
  Font_FTFont: typeof Font_FTFont;
  Font_TextFormatter: typeof Font_TextFormatter;
  Font_FTLibrary: typeof Font_FTLibrary;
  Font_SystemFont: typeof Font_SystemFont;
  Graphic3d_ArrayOfPolygons_1: typeof Graphic3d_ArrayOfPolygons_1;
  Graphic3d_ArrayOfPolygons_2: typeof Graphic3d_ArrayOfPolygons_2;
  Graphic3d_ArrayOfQuadrangleStrips_1: typeof Graphic3d_ArrayOfQuadrangleStrips_1;
  Graphic3d_ArrayOfQuadrangleStrips_2: typeof Graphic3d_ArrayOfQuadrangleStrips_2;
  Graphic3d_ArrayOfSegments_1: typeof Graphic3d_ArrayOfSegments_1;
  Graphic3d_ArrayOfSegments_2: typeof Graphic3d_ArrayOfSegments_2;
  Graphic3d_ArrayOfTriangleFans_1: typeof Graphic3d_ArrayOfTriangleFans_1;
  Graphic3d_ArrayOfTriangleFans_2: typeof Graphic3d_ArrayOfTriangleFans_2;
  Graphic3d_ArrayOfTriangleStrips_1: typeof Graphic3d_ArrayOfTriangleStrips_1;
  Graphic3d_ArrayOfTriangleStrips_2: typeof Graphic3d_ArrayOfTriangleStrips_2;
  Graphic3d_AttribBuffer: typeof Graphic3d_AttribBuffer;
  Graphic3d_BvhCStructureSet: typeof Graphic3d_BvhCStructureSet;
  Graphic3d_BvhCStructureSetTrsfPers: typeof Graphic3d_BvhCStructureSetTrsfPers;
  Graphic3d_CTexture: typeof Graphic3d_CTexture;
  Graphic3d_CubeMapPacked_1: typeof Graphic3d_CubeMapPacked_1;
  Graphic3d_CubeMapPacked_2: typeof Graphic3d_CubeMapPacked_2;
  Graphic3d_CubeMapSeparate_1: typeof Graphic3d_CubeMapSeparate_1;
  Graphic3d_CubeMapSeparate_2: typeof Graphic3d_CubeMapSeparate_2;
  Graphic3d_CullingTool: typeof Graphic3d_CullingTool;
  Graphic3d_FrameStatsData: typeof Graphic3d_FrameStatsData;
  Graphic3d_FrameStatsDataTmp: typeof Graphic3d_FrameStatsDataTmp;
  Graphic3d_GroupDefinitionError_1: typeof Graphic3d_GroupDefinitionError_1;
  Graphic3d_GroupDefinitionError_2: typeof Graphic3d_GroupDefinitionError_2;
  Graphic3d_Layer: typeof Graphic3d_Layer;
  Graphic3d_MaterialDefinitionError_1: typeof Graphic3d_MaterialDefinitionError_1;
  Graphic3d_MaterialDefinitionError_2: typeof Graphic3d_MaterialDefinitionError_2;
  Graphic3d_MutableIndexBuffer: typeof Graphic3d_MutableIndexBuffer;
  Graphic3d_PriorityDefinitionError_1: typeof Graphic3d_PriorityDefinitionError_1;
  Graphic3d_PriorityDefinitionError_2: typeof Graphic3d_PriorityDefinitionError_2;
  Graphic3d_StructureDefinitionError_1: typeof Graphic3d_StructureDefinitionError_1;
  Graphic3d_StructureDefinitionError_2: typeof Graphic3d_StructureDefinitionError_2;
  Graphic3d_Text: typeof Graphic3d_Text;
  Graphic3d_Texture1Dmanual_1: typeof Graphic3d_Texture1Dmanual_1;
  Graphic3d_Texture1Dmanual_2: typeof Graphic3d_Texture1Dmanual_2;
  Graphic3d_Texture1Dmanual_3: typeof Graphic3d_Texture1Dmanual_3;
  Graphic3d_Texture1Dsegment_1: typeof Graphic3d_Texture1Dsegment_1;
  Graphic3d_Texture1Dsegment_2: typeof Graphic3d_Texture1Dsegment_2;
  Graphic3d_Texture1Dsegment_3: typeof Graphic3d_Texture1Dsegment_3;
  Graphic3d_Texture2Dplane_1: typeof Graphic3d_Texture2Dplane_1;
  Graphic3d_Texture2Dplane_2: typeof Graphic3d_Texture2Dplane_2;
  Graphic3d_Texture2Dplane_3: typeof Graphic3d_Texture2Dplane_3;
  Graphic3d_TransformError_1: typeof Graphic3d_TransformError_1;
  Graphic3d_TransformError_2: typeof Graphic3d_TransformError_2;
  Image_Texture_1: typeof Image_Texture_1;
  Image_Texture_2: typeof Image_Texture_2;
  Image_Texture_3: typeof Image_Texture_3;
  Image_AlienPixMap: typeof Image_AlienPixMap;
  Image_CompressedPixMap: typeof Image_CompressedPixMap;
  Image_Diff: typeof Image_Diff;
  Image_SupportedFormats: typeof Image_SupportedFormats;
  Image_VideoRecorder: typeof Image_VideoRecorder;
  WNT_ClassDefinitionError_1: typeof WNT_ClassDefinitionError_1;
  WNT_ClassDefinitionError_2: typeof WNT_ClassDefinitionError_2;
  WNT_HIDSpaceMouse: typeof WNT_HIDSpaceMouse;
  Handle_Graphic3d_MarkerImage_1: typeof Handle_Graphic3d_MarkerImage_1;
  Handle_Graphic3d_MarkerImage_2: typeof Handle_Graphic3d_MarkerImage_2;
  Handle_Graphic3d_MarkerImage_3: typeof Handle_Graphic3d_MarkerImage_3;
  Handle_Graphic3d_MarkerImage_4: typeof Handle_Graphic3d_MarkerImage_4;
  Handle_Image_PixMapData_1: typeof Handle_Image_PixMapData_1;
  Handle_Image_PixMapData_2: typeof Handle_Image_PixMapData_2;
  Handle_Image_PixMapData_3: typeof Handle_Image_PixMapData_3;
  Handle_Image_PixMapData_4: typeof Handle_Image_PixMapData_4;
  Handle_Image_PixMap_1: typeof Handle_Image_PixMap_1;
  Handle_Image_PixMap_2: typeof Handle_Image_PixMap_2;
  Handle_Image_PixMap_3: typeof Handle_Image_PixMap_3;
  Handle_Image_PixMap_4: typeof Handle_Image_PixMap_4;
  Handle_Graphic3d_HatchStyle_1: typeof Handle_Graphic3d_HatchStyle_1;
  Handle_Graphic3d_HatchStyle_2: typeof Handle_Graphic3d_HatchStyle_2;
  Handle_Graphic3d_HatchStyle_3: typeof Handle_Graphic3d_HatchStyle_3;
  Handle_Graphic3d_HatchStyle_4: typeof Handle_Graphic3d_HatchStyle_4;
  Handle_Graphic3d_ShaderAttribute_1: typeof Handle_Graphic3d_ShaderAttribute_1;
  Handle_Graphic3d_ShaderAttribute_2: typeof Handle_Graphic3d_ShaderAttribute_2;
  Handle_Graphic3d_ShaderAttribute_3: typeof Handle_Graphic3d_ShaderAttribute_3;
  Handle_Graphic3d_ShaderAttribute_4: typeof Handle_Graphic3d_ShaderAttribute_4;
  Handle_Graphic3d_ShaderObject_1: typeof Handle_Graphic3d_ShaderObject_1;
  Handle_Graphic3d_ShaderObject_2: typeof Handle_Graphic3d_ShaderObject_2;
  Handle_Graphic3d_ShaderObject_3: typeof Handle_Graphic3d_ShaderObject_3;
  Handle_Graphic3d_ShaderObject_4: typeof Handle_Graphic3d_ShaderObject_4;
  NCollection_Mat4: typeof NCollection_Mat4;
  NCollection_Mat4: typeof NCollection_Mat4;
  Handle_Graphic3d_ShaderVariable_1: typeof Handle_Graphic3d_ShaderVariable_1;
  Handle_Graphic3d_ShaderVariable_2: typeof Handle_Graphic3d_ShaderVariable_2;
  Handle_Graphic3d_ShaderVariable_3: typeof Handle_Graphic3d_ShaderVariable_3;
  Handle_Graphic3d_ShaderVariable_4: typeof Handle_Graphic3d_ShaderVariable_4;
  Handle_Graphic3d_TextureParams_1: typeof Handle_Graphic3d_TextureParams_1;
  Handle_Graphic3d_TextureParams_2: typeof Handle_Graphic3d_TextureParams_2;
  Handle_Graphic3d_TextureParams_3: typeof Handle_Graphic3d_TextureParams_3;
  Handle_Graphic3d_TextureParams_4: typeof Handle_Graphic3d_TextureParams_4;
  Handle_Graphic3d_ShaderProgram_1: typeof Handle_Graphic3d_ShaderProgram_1;
  Handle_Graphic3d_ShaderProgram_2: typeof Handle_Graphic3d_ShaderProgram_2;
  Handle_Graphic3d_ShaderProgram_3: typeof Handle_Graphic3d_ShaderProgram_3;
  Handle_Graphic3d_ShaderProgram_4: typeof Handle_Graphic3d_ShaderProgram_4;
  Handle_Graphic3d_TextureRoot_1: typeof Handle_Graphic3d_TextureRoot_1;
  Handle_Graphic3d_TextureRoot_2: typeof Handle_Graphic3d_TextureRoot_2;
  Handle_Graphic3d_TextureRoot_3: typeof Handle_Graphic3d_TextureRoot_3;
  Handle_Graphic3d_TextureRoot_4: typeof Handle_Graphic3d_TextureRoot_4;
  Handle_Graphic3d_TextureMap_1: typeof Handle_Graphic3d_TextureMap_1;
  Handle_Graphic3d_TextureMap_2: typeof Handle_Graphic3d_TextureMap_2;
  Handle_Graphic3d_TextureMap_3: typeof Handle_Graphic3d_TextureMap_3;
  Handle_Graphic3d_TextureMap_4: typeof Handle_Graphic3d_TextureMap_4;
  Handle_Graphic3d_Aspects_1: typeof Handle_Graphic3d_Aspects_1;
  Handle_Graphic3d_Aspects_2: typeof Handle_Graphic3d_Aspects_2;
  Handle_Graphic3d_Aspects_3: typeof Handle_Graphic3d_Aspects_3;
  Handle_Graphic3d_Aspects_4: typeof Handle_Graphic3d_Aspects_4;
  Handle_Graphic3d_AspectLine3d_1: typeof Handle_Graphic3d_AspectLine3d_1;
  Handle_Graphic3d_AspectLine3d_2: typeof Handle_Graphic3d_AspectLine3d_2;
  Handle_Graphic3d_AspectLine3d_3: typeof Handle_Graphic3d_AspectLine3d_3;
  Handle_Graphic3d_AspectLine3d_4: typeof Handle_Graphic3d_AspectLine3d_4;
  Handle_Graphic3d_AspectFillArea3d_1: typeof Handle_Graphic3d_AspectFillArea3d_1;
  Handle_Graphic3d_AspectFillArea3d_2: typeof Handle_Graphic3d_AspectFillArea3d_2;
  Handle_Graphic3d_AspectFillArea3d_3: typeof Handle_Graphic3d_AspectFillArea3d_3;
  Handle_Graphic3d_AspectFillArea3d_4: typeof Handle_Graphic3d_AspectFillArea3d_4;
  Handle_Graphic3d_AspectText3d_1: typeof Handle_Graphic3d_AspectText3d_1;
  Handle_Graphic3d_AspectText3d_2: typeof Handle_Graphic3d_AspectText3d_2;
  Handle_Graphic3d_AspectText3d_3: typeof Handle_Graphic3d_AspectText3d_3;
  Handle_Graphic3d_AspectText3d_4: typeof Handle_Graphic3d_AspectText3d_4;
  Handle_Graphic3d_AspectMarker3d_1: typeof Handle_Graphic3d_AspectMarker3d_1;
  Handle_Graphic3d_AspectMarker3d_2: typeof Handle_Graphic3d_AspectMarker3d_2;
  Handle_Graphic3d_AspectMarker3d_3: typeof Handle_Graphic3d_AspectMarker3d_3;
  Handle_Graphic3d_AspectMarker3d_4: typeof Handle_Graphic3d_AspectMarker3d_4;
  Graphic3d_Array1OfAttribute_1: typeof Graphic3d_Array1OfAttribute_1;
  Graphic3d_Array1OfAttribute_2: typeof Graphic3d_Array1OfAttribute_2;
  Graphic3d_Array1OfAttribute_3: typeof Graphic3d_Array1OfAttribute_3;
  Graphic3d_Array1OfAttribute_4: typeof Graphic3d_Array1OfAttribute_4;
  Graphic3d_Array1OfAttribute_5: typeof Graphic3d_Array1OfAttribute_5;
  Handle_Graphic3d_Buffer_1: typeof Handle_Graphic3d_Buffer_1;
  Handle_Graphic3d_Buffer_2: typeof Handle_Graphic3d_Buffer_2;
  Handle_Graphic3d_Buffer_3: typeof Handle_Graphic3d_Buffer_3;
  Handle_Graphic3d_Buffer_4: typeof Handle_Graphic3d_Buffer_4;
  Handle_Graphic3d_IndexBuffer_1: typeof Handle_Graphic3d_IndexBuffer_1;
  Handle_Graphic3d_IndexBuffer_2: typeof Handle_Graphic3d_IndexBuffer_2;
  Handle_Graphic3d_IndexBuffer_3: typeof Handle_Graphic3d_IndexBuffer_3;
  Handle_Graphic3d_IndexBuffer_4: typeof Handle_Graphic3d_IndexBuffer_4;
  Handle_Graphic3d_BoundBuffer_1: typeof Handle_Graphic3d_BoundBuffer_1;
  Handle_Graphic3d_BoundBuffer_2: typeof Handle_Graphic3d_BoundBuffer_2;
  Handle_Graphic3d_BoundBuffer_3: typeof Handle_Graphic3d_BoundBuffer_3;
  Handle_Graphic3d_BoundBuffer_4: typeof Handle_Graphic3d_BoundBuffer_4;
  Handle_Graphic3d_Group_1: typeof Handle_Graphic3d_Group_1;
  Handle_Graphic3d_Group_2: typeof Handle_Graphic3d_Group_2;
  Handle_Graphic3d_Group_3: typeof Handle_Graphic3d_Group_3;
  Handle_Graphic3d_Group_4: typeof Handle_Graphic3d_Group_4;
  Handle_Graphic3d_PresentationAttributes_1: typeof Handle_Graphic3d_PresentationAttributes_1;
  Handle_Graphic3d_PresentationAttributes_2: typeof Handle_Graphic3d_PresentationAttributes_2;
  Handle_Graphic3d_PresentationAttributes_3: typeof Handle_Graphic3d_PresentationAttributes_3;
  Handle_Graphic3d_PresentationAttributes_4: typeof Handle_Graphic3d_PresentationAttributes_4;
  Handle_Graphic3d_ClipPlane_1: typeof Handle_Graphic3d_ClipPlane_1;
  Handle_Graphic3d_ClipPlane_2: typeof Handle_Graphic3d_ClipPlane_2;
  Handle_Graphic3d_ClipPlane_3: typeof Handle_Graphic3d_ClipPlane_3;
  Handle_Graphic3d_ClipPlane_4: typeof Handle_Graphic3d_ClipPlane_4;
  Handle_Graphic3d_SequenceOfHClipPlane_1: typeof Handle_Graphic3d_SequenceOfHClipPlane_1;
  Handle_Graphic3d_SequenceOfHClipPlane_2: typeof Handle_Graphic3d_SequenceOfHClipPlane_2;
  Handle_Graphic3d_SequenceOfHClipPlane_3: typeof Handle_Graphic3d_SequenceOfHClipPlane_3;
  Handle_Graphic3d_SequenceOfHClipPlane_4: typeof Handle_Graphic3d_SequenceOfHClipPlane_4;
  Handle_Graphic3d_ViewAffinity_1: typeof Handle_Graphic3d_ViewAffinity_1;
  Handle_Graphic3d_ViewAffinity_2: typeof Handle_Graphic3d_ViewAffinity_2;
  Handle_Graphic3d_ViewAffinity_3: typeof Handle_Graphic3d_ViewAffinity_3;
  Handle_Graphic3d_ViewAffinity_4: typeof Handle_Graphic3d_ViewAffinity_4;
  Handle_Graphic3d_Camera_1: typeof Handle_Graphic3d_Camera_1;
  Handle_Graphic3d_Camera_2: typeof Handle_Graphic3d_Camera_2;
  Handle_Graphic3d_Camera_3: typeof Handle_Graphic3d_Camera_3;
  Handle_Graphic3d_Camera_4: typeof Handle_Graphic3d_Camera_4;
  Handle_Graphic3d_TransformPers_1: typeof Handle_Graphic3d_TransformPers_1;
  Handle_Graphic3d_TransformPers_2: typeof Handle_Graphic3d_TransformPers_2;
  Handle_Graphic3d_TransformPers_3: typeof Handle_Graphic3d_TransformPers_3;
  Handle_Graphic3d_TransformPers_4: typeof Handle_Graphic3d_TransformPers_4;
  Handle_Graphic3d_CStructure_1: typeof Handle_Graphic3d_CStructure_1;
  Handle_Graphic3d_CStructure_2: typeof Handle_Graphic3d_CStructure_2;
  Handle_Graphic3d_CStructure_3: typeof Handle_Graphic3d_CStructure_3;
  Handle_Graphic3d_CStructure_4: typeof Handle_Graphic3d_CStructure_4;
  Handle_Aspect_Window_1: typeof Handle_Aspect_Window_1;
  Handle_Aspect_Window_2: typeof Handle_Aspect_Window_2;
  Handle_Aspect_Window_3: typeof Handle_Aspect_Window_3;
  Handle_Aspect_Window_4: typeof Handle_Aspect_Window_4;
  Handle_Graphic3d_CubeMap_1: typeof Handle_Graphic3d_CubeMap_1;
  Handle_Graphic3d_CubeMap_2: typeof Handle_Graphic3d_CubeMap_2;
  Handle_Graphic3d_CubeMap_3: typeof Handle_Graphic3d_CubeMap_3;
  Handle_Graphic3d_CubeMap_4: typeof Handle_Graphic3d_CubeMap_4;
  Handle_Graphic3d_CLight_1: typeof Handle_Graphic3d_CLight_1;
  Handle_Graphic3d_CLight_2: typeof Handle_Graphic3d_CLight_2;
  Handle_Graphic3d_CLight_3: typeof Handle_Graphic3d_CLight_3;
  Handle_Graphic3d_CLight_4: typeof Handle_Graphic3d_CLight_4;
  Handle_Graphic3d_DataStructureManager_1: typeof Handle_Graphic3d_DataStructureManager_1;
  Handle_Graphic3d_DataStructureManager_2: typeof Handle_Graphic3d_DataStructureManager_2;
  Handle_Graphic3d_DataStructureManager_3: typeof Handle_Graphic3d_DataStructureManager_3;
  Handle_Graphic3d_DataStructureManager_4: typeof Handle_Graphic3d_DataStructureManager_4;
  Handle_Graphic3d_Texture2D_1: typeof Handle_Graphic3d_Texture2D_1;
  Handle_Graphic3d_Texture2D_2: typeof Handle_Graphic3d_Texture2D_2;
  Handle_Graphic3d_Texture2D_3: typeof Handle_Graphic3d_Texture2D_3;
  Handle_Graphic3d_Texture2D_4: typeof Handle_Graphic3d_Texture2D_4;
  Handle_Graphic3d_Texture2Dmanual_1: typeof Handle_Graphic3d_Texture2Dmanual_1;
  Handle_Graphic3d_Texture2Dmanual_2: typeof Handle_Graphic3d_Texture2Dmanual_2;
  Handle_Graphic3d_Texture2Dmanual_3: typeof Handle_Graphic3d_Texture2Dmanual_3;
  Handle_Graphic3d_Texture2Dmanual_4: typeof Handle_Graphic3d_Texture2Dmanual_4;
  Handle_Graphic3d_TextureEnv_1: typeof Handle_Graphic3d_TextureEnv_1;
  Handle_Graphic3d_TextureEnv_2: typeof Handle_Graphic3d_TextureEnv_2;
  Handle_Graphic3d_TextureEnv_3: typeof Handle_Graphic3d_TextureEnv_3;
  Handle_Graphic3d_TextureEnv_4: typeof Handle_Graphic3d_TextureEnv_4;
  Handle_Graphic3d_LightSet_1: typeof Handle_Graphic3d_LightSet_1;
  Handle_Graphic3d_LightSet_2: typeof Handle_Graphic3d_LightSet_2;
  Handle_Graphic3d_LightSet_3: typeof Handle_Graphic3d_LightSet_3;
  Handle_Graphic3d_LightSet_4: typeof Handle_Graphic3d_LightSet_4;
  Handle_Graphic3d_CView_1: typeof Handle_Graphic3d_CView_1;
  Handle_Graphic3d_CView_2: typeof Handle_Graphic3d_CView_2;
  Handle_Graphic3d_CView_3: typeof Handle_Graphic3d_CView_3;
  Handle_Graphic3d_CView_4: typeof Handle_Graphic3d_CView_4;
  Handle_Graphic3d_StructureManager_1: typeof Handle_Graphic3d_StructureManager_1;
  Handle_Graphic3d_StructureManager_2: typeof Handle_Graphic3d_StructureManager_2;
  Handle_Graphic3d_StructureManager_3: typeof Handle_Graphic3d_StructureManager_3;
  Handle_Graphic3d_StructureManager_4: typeof Handle_Graphic3d_StructureManager_4;
  Handle_Media_Timer_1: typeof Handle_Media_Timer_1;
  Handle_Media_Timer_2: typeof Handle_Media_Timer_2;
  Handle_Media_Timer_3: typeof Handle_Media_Timer_3;
  Handle_Media_Timer_4: typeof Handle_Media_Timer_4;
  Aspect_SequenceOfColor_1: typeof Aspect_SequenceOfColor_1;
  Aspect_SequenceOfColor_2: typeof Aspect_SequenceOfColor_2;
  Aspect_SequenceOfColor_3: typeof Aspect_SequenceOfColor_3;
  Handle_Graphic3d_ArrayOfPrimitives_1: typeof Handle_Graphic3d_ArrayOfPrimitives_1;
  Handle_Graphic3d_ArrayOfPrimitives_2: typeof Handle_Graphic3d_ArrayOfPrimitives_2;
  Handle_Graphic3d_ArrayOfPrimitives_3: typeof Handle_Graphic3d_ArrayOfPrimitives_3;
  Handle_Graphic3d_ArrayOfPrimitives_4: typeof Handle_Graphic3d_ArrayOfPrimitives_4;
  Handle_Graphic3d_ArrayOfQuadrangles_1: typeof Handle_Graphic3d_ArrayOfQuadrangles_1;
  Handle_Graphic3d_ArrayOfQuadrangles_2: typeof Handle_Graphic3d_ArrayOfQuadrangles_2;
  Handle_Graphic3d_ArrayOfQuadrangles_3: typeof Handle_Graphic3d_ArrayOfQuadrangles_3;
  Handle_Graphic3d_ArrayOfQuadrangles_4: typeof Handle_Graphic3d_ArrayOfQuadrangles_4;
  Handle_Graphic3d_ArrayOfTriangles_1: typeof Handle_Graphic3d_ArrayOfTriangles_1;
  Handle_Graphic3d_ArrayOfTriangles_2: typeof Handle_Graphic3d_ArrayOfTriangles_2;
  Handle_Graphic3d_ArrayOfTriangles_3: typeof Handle_Graphic3d_ArrayOfTriangles_3;
  Handle_Graphic3d_ArrayOfTriangles_4: typeof Handle_Graphic3d_ArrayOfTriangles_4;
  Handle_Graphic3d_ArrayOfPoints_1: typeof Handle_Graphic3d_ArrayOfPoints_1;
  Handle_Graphic3d_ArrayOfPoints_2: typeof Handle_Graphic3d_ArrayOfPoints_2;
  Handle_Graphic3d_ArrayOfPoints_3: typeof Handle_Graphic3d_ArrayOfPoints_3;
  Handle_Graphic3d_ArrayOfPoints_4: typeof Handle_Graphic3d_ArrayOfPoints_4;
  Handle_Graphic3d_ArrayOfPolylines_1: typeof Handle_Graphic3d_ArrayOfPolylines_1;
  Handle_Graphic3d_ArrayOfPolylines_2: typeof Handle_Graphic3d_ArrayOfPolylines_2;
  Handle_Graphic3d_ArrayOfPolylines_3: typeof Handle_Graphic3d_ArrayOfPolylines_3;
  Handle_Graphic3d_ArrayOfPolylines_4: typeof Handle_Graphic3d_ArrayOfPolylines_4;
  Handle_Aspect_AspectFillAreaDefinitionError_1: typeof Handle_Aspect_AspectFillAreaDefinitionError_1;
  Handle_Aspect_AspectFillAreaDefinitionError_2: typeof Handle_Aspect_AspectFillAreaDefinitionError_2;
  Handle_Aspect_AspectFillAreaDefinitionError_3: typeof Handle_Aspect_AspectFillAreaDefinitionError_3;
  Handle_Aspect_AspectFillAreaDefinitionError_4: typeof Handle_Aspect_AspectFillAreaDefinitionError_4;
  Handle_Aspect_AspectLineDefinitionError_1: typeof Handle_Aspect_AspectLineDefinitionError_1;
  Handle_Aspect_AspectLineDefinitionError_2: typeof Handle_Aspect_AspectLineDefinitionError_2;
  Handle_Aspect_AspectLineDefinitionError_3: typeof Handle_Aspect_AspectLineDefinitionError_3;
  Handle_Aspect_AspectLineDefinitionError_4: typeof Handle_Aspect_AspectLineDefinitionError_4;
  Handle_Aspect_AspectMarkerDefinitionError_1: typeof Handle_Aspect_AspectMarkerDefinitionError_1;
  Handle_Aspect_AspectMarkerDefinitionError_2: typeof Handle_Aspect_AspectMarkerDefinitionError_2;
  Handle_Aspect_AspectMarkerDefinitionError_3: typeof Handle_Aspect_AspectMarkerDefinitionError_3;
  Handle_Aspect_AspectMarkerDefinitionError_4: typeof Handle_Aspect_AspectMarkerDefinitionError_4;
  Handle_Aspect_Grid_1: typeof Handle_Aspect_Grid_1;
  Handle_Aspect_Grid_2: typeof Handle_Aspect_Grid_2;
  Handle_Aspect_Grid_3: typeof Handle_Aspect_Grid_3;
  Handle_Aspect_Grid_4: typeof Handle_Aspect_Grid_4;
  Handle_Aspect_CircularGrid_1: typeof Handle_Aspect_CircularGrid_1;
  Handle_Aspect_CircularGrid_2: typeof Handle_Aspect_CircularGrid_2;
  Handle_Aspect_CircularGrid_3: typeof Handle_Aspect_CircularGrid_3;
  Handle_Aspect_CircularGrid_4: typeof Handle_Aspect_CircularGrid_4;
  Handle_Aspect_DisplayConnection_1: typeof Handle_Aspect_DisplayConnection_1;
  Handle_Aspect_DisplayConnection_2: typeof Handle_Aspect_DisplayConnection_2;
  Handle_Aspect_DisplayConnection_3: typeof Handle_Aspect_DisplayConnection_3;
  Handle_Aspect_DisplayConnection_4: typeof Handle_Aspect_DisplayConnection_4;
  Handle_Aspect_DisplayConnectionDefinitionError_1: typeof Handle_Aspect_DisplayConnectionDefinitionError_1;
  Handle_Aspect_DisplayConnectionDefinitionError_2: typeof Handle_Aspect_DisplayConnectionDefinitionError_2;
  Handle_Aspect_DisplayConnectionDefinitionError_3: typeof Handle_Aspect_DisplayConnectionDefinitionError_3;
  Handle_Aspect_DisplayConnectionDefinitionError_4: typeof Handle_Aspect_DisplayConnectionDefinitionError_4;
  Handle_Aspect_GraphicDeviceDefinitionError_1: typeof Handle_Aspect_GraphicDeviceDefinitionError_1;
  Handle_Aspect_GraphicDeviceDefinitionError_2: typeof Handle_Aspect_GraphicDeviceDefinitionError_2;
  Handle_Aspect_GraphicDeviceDefinitionError_3: typeof Handle_Aspect_GraphicDeviceDefinitionError_3;
  Handle_Aspect_GraphicDeviceDefinitionError_4: typeof Handle_Aspect_GraphicDeviceDefinitionError_4;
  Handle_Aspect_IdentDefinitionError_1: typeof Handle_Aspect_IdentDefinitionError_1;
  Handle_Aspect_IdentDefinitionError_2: typeof Handle_Aspect_IdentDefinitionError_2;
  Handle_Aspect_IdentDefinitionError_3: typeof Handle_Aspect_IdentDefinitionError_3;
  Handle_Aspect_IdentDefinitionError_4: typeof Handle_Aspect_IdentDefinitionError_4;
  Handle_Aspect_NeutralWindow_1: typeof Handle_Aspect_NeutralWindow_1;
  Handle_Aspect_NeutralWindow_2: typeof Handle_Aspect_NeutralWindow_2;
  Handle_Aspect_NeutralWindow_3: typeof Handle_Aspect_NeutralWindow_3;
  Handle_Aspect_NeutralWindow_4: typeof Handle_Aspect_NeutralWindow_4;
  Aspect_TrackedDevicePoseArray_1: typeof Aspect_TrackedDevicePoseArray_1;
  Aspect_TrackedDevicePoseArray_2: typeof Aspect_TrackedDevicePoseArray_2;
  Aspect_TrackedDevicePoseArray_3: typeof Aspect_TrackedDevicePoseArray_3;
  Aspect_TrackedDevicePoseArray_4: typeof Aspect_TrackedDevicePoseArray_4;
  Aspect_TrackedDevicePoseArray_5: typeof Aspect_TrackedDevicePoseArray_5;
  Handle_Aspect_RectangularGrid_1: typeof Handle_Aspect_RectangularGrid_1;
  Handle_Aspect_RectangularGrid_2: typeof Handle_Aspect_RectangularGrid_2;
  Handle_Aspect_RectangularGrid_3: typeof Handle_Aspect_RectangularGrid_3;
  Handle_Aspect_RectangularGrid_4: typeof Handle_Aspect_RectangularGrid_4;
  Handle_Aspect_WindowDefinitionError_1: typeof Handle_Aspect_WindowDefinitionError_1;
  Handle_Aspect_WindowDefinitionError_2: typeof Handle_Aspect_WindowDefinitionError_2;
  Handle_Aspect_WindowDefinitionError_3: typeof Handle_Aspect_WindowDefinitionError_3;
  Handle_Aspect_WindowDefinitionError_4: typeof Handle_Aspect_WindowDefinitionError_4;
  Handle_Aspect_WindowError_1: typeof Handle_Aspect_WindowError_1;
  Handle_Aspect_WindowError_2: typeof Handle_Aspect_WindowError_2;
  Handle_Aspect_WindowError_3: typeof Handle_Aspect_WindowError_3;
  Handle_Aspect_WindowError_4: typeof Handle_Aspect_WindowError_4;
  Handle_Graphic3d_GraphicDriver_1: typeof Handle_Graphic3d_GraphicDriver_1;
  Handle_Graphic3d_GraphicDriver_2: typeof Handle_Graphic3d_GraphicDriver_2;
  Handle_Graphic3d_GraphicDriver_3: typeof Handle_Graphic3d_GraphicDriver_3;
  Handle_Graphic3d_GraphicDriver_4: typeof Handle_Graphic3d_GraphicDriver_4;
  Handle_Font_FTFont_1: typeof Handle_Font_FTFont_1;
  Handle_Font_FTFont_2: typeof Handle_Font_FTFont_2;
  Handle_Font_FTFont_3: typeof Handle_Font_FTFont_3;
  Handle_Font_FTFont_4: typeof Handle_Font_FTFont_4;
  Handle_Font_TextFormatter_1: typeof Handle_Font_TextFormatter_1;
  Handle_Font_TextFormatter_2: typeof Handle_Font_TextFormatter_2;
  Handle_Font_TextFormatter_3: typeof Handle_Font_TextFormatter_3;
  Handle_Font_TextFormatter_4: typeof Handle_Font_TextFormatter_4;
  Handle_Font_FTLibrary_1: typeof Handle_Font_FTLibrary_1;
  Handle_Font_FTLibrary_2: typeof Handle_Font_FTLibrary_2;
  Handle_Font_FTLibrary_3: typeof Handle_Font_FTLibrary_3;
  Handle_Font_FTLibrary_4: typeof Handle_Font_FTLibrary_4;
  Handle_Font_SystemFont_1: typeof Handle_Font_SystemFont_1;
  Handle_Font_SystemFont_2: typeof Handle_Font_SystemFont_2;
  Handle_Font_SystemFont_3: typeof Handle_Font_SystemFont_3;
  Handle_Font_SystemFont_4: typeof Handle_Font_SystemFont_4;
  Handle_Font_FontMgr_1: typeof Handle_Font_FontMgr_1;
  Handle_Font_FontMgr_2: typeof Handle_Font_FontMgr_2;
  Handle_Font_FontMgr_3: typeof Handle_Font_FontMgr_3;
  Handle_Font_FontMgr_4: typeof Handle_Font_FontMgr_4;
  Handle_Graphic3d_ArrayOfPolygons_1: typeof Handle_Graphic3d_ArrayOfPolygons_1;
  Handle_Graphic3d_ArrayOfPolygons_2: typeof Handle_Graphic3d_ArrayOfPolygons_2;
  Handle_Graphic3d_ArrayOfPolygons_3: typeof Handle_Graphic3d_ArrayOfPolygons_3;
  Handle_Graphic3d_ArrayOfPolygons_4: typeof Handle_Graphic3d_ArrayOfPolygons_4;
  Handle_Graphic3d_ArrayOfQuadrangleStrips_1: typeof Handle_Graphic3d_ArrayOfQuadrangleStrips_1;
  Handle_Graphic3d_ArrayOfQuadrangleStrips_2: typeof Handle_Graphic3d_ArrayOfQuadrangleStrips_2;
  Handle_Graphic3d_ArrayOfQuadrangleStrips_3: typeof Handle_Graphic3d_ArrayOfQuadrangleStrips_3;
  Handle_Graphic3d_ArrayOfQuadrangleStrips_4: typeof Handle_Graphic3d_ArrayOfQuadrangleStrips_4;
  Handle_Graphic3d_ArrayOfSegments_1: typeof Handle_Graphic3d_ArrayOfSegments_1;
  Handle_Graphic3d_ArrayOfSegments_2: typeof Handle_Graphic3d_ArrayOfSegments_2;
  Handle_Graphic3d_ArrayOfSegments_3: typeof Handle_Graphic3d_ArrayOfSegments_3;
  Handle_Graphic3d_ArrayOfSegments_4: typeof Handle_Graphic3d_ArrayOfSegments_4;
  Handle_Graphic3d_ArrayOfTriangleFans_1: typeof Handle_Graphic3d_ArrayOfTriangleFans_1;
  Handle_Graphic3d_ArrayOfTriangleFans_2: typeof Handle_Graphic3d_ArrayOfTriangleFans_2;
  Handle_Graphic3d_ArrayOfTriangleFans_3: typeof Handle_Graphic3d_ArrayOfTriangleFans_3;
  Handle_Graphic3d_ArrayOfTriangleFans_4: typeof Handle_Graphic3d_ArrayOfTriangleFans_4;
  Handle_Graphic3d_ArrayOfTriangleStrips_1: typeof Handle_Graphic3d_ArrayOfTriangleStrips_1;
  Handle_Graphic3d_ArrayOfTriangleStrips_2: typeof Handle_Graphic3d_ArrayOfTriangleStrips_2;
  Handle_Graphic3d_ArrayOfTriangleStrips_3: typeof Handle_Graphic3d_ArrayOfTriangleStrips_3;
  Handle_Graphic3d_ArrayOfTriangleStrips_4: typeof Handle_Graphic3d_ArrayOfTriangleStrips_4;
  Handle_Graphic3d_CubeMapPacked_1: typeof Handle_Graphic3d_CubeMapPacked_1;
  Handle_Graphic3d_CubeMapPacked_2: typeof Handle_Graphic3d_CubeMapPacked_2;
  Handle_Graphic3d_CubeMapPacked_3: typeof Handle_Graphic3d_CubeMapPacked_3;
  Handle_Graphic3d_CubeMapPacked_4: typeof Handle_Graphic3d_CubeMapPacked_4;
  Handle_Graphic3d_CubeMapSeparate_1: typeof Handle_Graphic3d_CubeMapSeparate_1;
  Handle_Graphic3d_CubeMapSeparate_2: typeof Handle_Graphic3d_CubeMapSeparate_2;
  Handle_Graphic3d_CubeMapSeparate_3: typeof Handle_Graphic3d_CubeMapSeparate_3;
  Handle_Graphic3d_CubeMapSeparate_4: typeof Handle_Graphic3d_CubeMapSeparate_4;
  Handle_Graphic3d_GroupDefinitionError_1: typeof Handle_Graphic3d_GroupDefinitionError_1;
  Handle_Graphic3d_GroupDefinitionError_2: typeof Handle_Graphic3d_GroupDefinitionError_2;
  Handle_Graphic3d_GroupDefinitionError_3: typeof Handle_Graphic3d_GroupDefinitionError_3;
  Handle_Graphic3d_GroupDefinitionError_4: typeof Handle_Graphic3d_GroupDefinitionError_4;
  Graphic3d_ArrayOfIndexedMapOfStructure_1: typeof Graphic3d_ArrayOfIndexedMapOfStructure_1;
  Graphic3d_ArrayOfIndexedMapOfStructure_2: typeof Graphic3d_ArrayOfIndexedMapOfStructure_2;
  Graphic3d_ArrayOfIndexedMapOfStructure_3: typeof Graphic3d_ArrayOfIndexedMapOfStructure_3;
  Graphic3d_ArrayOfIndexedMapOfStructure_4: typeof Graphic3d_ArrayOfIndexedMapOfStructure_4;
  Graphic3d_ArrayOfIndexedMapOfStructure_5: typeof Graphic3d_ArrayOfIndexedMapOfStructure_5;
  Handle_Graphic3d_MaterialDefinitionError_1: typeof Handle_Graphic3d_MaterialDefinitionError_1;
  Handle_Graphic3d_MaterialDefinitionError_2: typeof Handle_Graphic3d_MaterialDefinitionError_2;
  Handle_Graphic3d_MaterialDefinitionError_3: typeof Handle_Graphic3d_MaterialDefinitionError_3;
  Handle_Graphic3d_MaterialDefinitionError_4: typeof Handle_Graphic3d_MaterialDefinitionError_4;
  Handle_Graphic3d_PriorityDefinitionError_1: typeof Handle_Graphic3d_PriorityDefinitionError_1;
  Handle_Graphic3d_PriorityDefinitionError_2: typeof Handle_Graphic3d_PriorityDefinitionError_2;
  Handle_Graphic3d_PriorityDefinitionError_3: typeof Handle_Graphic3d_PriorityDefinitionError_3;
  Handle_Graphic3d_PriorityDefinitionError_4: typeof Handle_Graphic3d_PriorityDefinitionError_4;
  Handle_Graphic3d_StructureDefinitionError_1: typeof Handle_Graphic3d_StructureDefinitionError_1;
  Handle_Graphic3d_StructureDefinitionError_2: typeof Handle_Graphic3d_StructureDefinitionError_2;
  Handle_Graphic3d_StructureDefinitionError_3: typeof Handle_Graphic3d_StructureDefinitionError_3;
  Handle_Graphic3d_StructureDefinitionError_4: typeof Handle_Graphic3d_StructureDefinitionError_4;
  Handle_Graphic3d_Text_1: typeof Handle_Graphic3d_Text_1;
  Handle_Graphic3d_Text_2: typeof Handle_Graphic3d_Text_2;
  Handle_Graphic3d_Text_3: typeof Handle_Graphic3d_Text_3;
  Handle_Graphic3d_Text_4: typeof Handle_Graphic3d_Text_4;
  Handle_Graphic3d_Texture1D_1: typeof Handle_Graphic3d_Texture1D_1;
  Handle_Graphic3d_Texture1D_2: typeof Handle_Graphic3d_Texture1D_2;
  Handle_Graphic3d_Texture1D_3: typeof Handle_Graphic3d_Texture1D_3;
  Handle_Graphic3d_Texture1D_4: typeof Handle_Graphic3d_Texture1D_4;
  Handle_Graphic3d_Texture1Dmanual_1: typeof Handle_Graphic3d_Texture1Dmanual_1;
  Handle_Graphic3d_Texture1Dmanual_2: typeof Handle_Graphic3d_Texture1Dmanual_2;
  Handle_Graphic3d_Texture1Dmanual_3: typeof Handle_Graphic3d_Texture1Dmanual_3;
  Handle_Graphic3d_Texture1Dmanual_4: typeof Handle_Graphic3d_Texture1Dmanual_4;
  Handle_Graphic3d_Texture1Dsegment_1: typeof Handle_Graphic3d_Texture1Dsegment_1;
  Handle_Graphic3d_Texture1Dsegment_2: typeof Handle_Graphic3d_Texture1Dsegment_2;
  Handle_Graphic3d_Texture1Dsegment_3: typeof Handle_Graphic3d_Texture1Dsegment_3;
  Handle_Graphic3d_Texture1Dsegment_4: typeof Handle_Graphic3d_Texture1Dsegment_4;
  Handle_Graphic3d_Texture2Dplane_1: typeof Handle_Graphic3d_Texture2Dplane_1;
  Handle_Graphic3d_Texture2Dplane_2: typeof Handle_Graphic3d_Texture2Dplane_2;
  Handle_Graphic3d_Texture2Dplane_3: typeof Handle_Graphic3d_Texture2Dplane_3;
  Handle_Graphic3d_Texture2Dplane_4: typeof Handle_Graphic3d_Texture2Dplane_4;
  Handle_Graphic3d_TransformError_1: typeof Handle_Graphic3d_TransformError_1;
  Handle_Graphic3d_TransformError_2: typeof Handle_Graphic3d_TransformError_2;
  Handle_Graphic3d_TransformError_3: typeof Handle_Graphic3d_TransformError_3;
  Handle_Graphic3d_TransformError_4: typeof Handle_Graphic3d_TransformError_4;
  Handle_Image_AlienPixMap_1: typeof Handle_Image_AlienPixMap_1;
  Handle_Image_AlienPixMap_2: typeof Handle_Image_AlienPixMap_2;
  Handle_Image_AlienPixMap_3: typeof Handle_Image_AlienPixMap_3;
  Handle_Image_AlienPixMap_4: typeof Handle_Image_AlienPixMap_4;
  Handle_Image_Diff_1: typeof Handle_Image_Diff_1;
  Handle_Image_Diff_2: typeof Handle_Image_Diff_2;
  Handle_Image_Diff_3: typeof Handle_Image_Diff_3;
  Handle_Image_Diff_4: typeof Handle_Image_Diff_4;
  Handle_Image_VideoRecorder_1: typeof Handle_Image_VideoRecorder_1;
  Handle_Image_VideoRecorder_2: typeof Handle_Image_VideoRecorder_2;
  Handle_Image_VideoRecorder_3: typeof Handle_Image_VideoRecorder_3;
  Handle_Image_VideoRecorder_4: typeof Handle_Image_VideoRecorder_4;
  Handle_WNT_ClassDefinitionError_1: typeof Handle_WNT_ClassDefinitionError_1;
  Handle_WNT_ClassDefinitionError_2: typeof Handle_WNT_ClassDefinitionError_2;
  Handle_WNT_ClassDefinitionError_3: typeof Handle_WNT_ClassDefinitionError_3;
  Handle_WNT_ClassDefinitionError_4: typeof Handle_WNT_ClassDefinitionError_4;
  Aspect_InteriorStyle: typeof Aspect_InteriorStyle;
  Aspect_TypeOfDisplayText: typeof Aspect_TypeOfDisplayText;
  Aspect_TypeOfLine: typeof Aspect_TypeOfLine;
  Aspect_TypeOfMarker: typeof Aspect_TypeOfMarker;
  Aspect_TypeOfStyleText: typeof Aspect_TypeOfStyleText;
  Font_FontAspect: typeof Font_FontAspect;
  Graphic3d_AlphaMode: typeof Graphic3d_AlphaMode;
  Aspect_HatchStyle: typeof Aspect_HatchStyle;
  Image_Format: typeof Image_Format;
  Graphic3d_FresnelModel: typeof Graphic3d_FresnelModel;
  Graphic3d_NameOfMaterial: typeof Graphic3d_NameOfMaterial;
  Graphic3d_TypeOfMaterial: typeof Graphic3d_TypeOfMaterial;
  Graphic3d_TypeOfReflection: typeof Graphic3d_TypeOfReflection;
  Graphic3d_TypeOfShaderObject: typeof Graphic3d_TypeOfShaderObject;
  Graphic3d_LevelOfTextureAnisotropy: typeof Graphic3d_LevelOfTextureAnisotropy;
  Graphic3d_TextureUnit: typeof Graphic3d_TextureUnit;
  Graphic3d_TypeOfTextureFilter: typeof Graphic3d_TypeOfTextureFilter;
  Graphic3d_TypeOfTextureMode: typeof Graphic3d_TypeOfTextureMode;
  Graphic3d_TextureSetBits: typeof Graphic3d_TextureSetBits;
  Graphic3d_TypeOfTexture: typeof Graphic3d_TypeOfTexture;
  Graphic3d_TypeOfShadingModel: typeof Graphic3d_TypeOfShadingModel;
  Graphic3d_TextPath: typeof Graphic3d_TextPath;
  Graphic3d_HorizontalTextAlignment: typeof Graphic3d_HorizontalTextAlignment;
  Graphic3d_VerticalTextAlignment: typeof Graphic3d_VerticalTextAlignment;
  Graphic3d_TypeOfPrimitiveArray: typeof Graphic3d_TypeOfPrimitiveArray;
  Graphic3d_TypeOfAttribute: typeof Graphic3d_TypeOfAttribute;
  Graphic3d_TypeOfData: typeof Graphic3d_TypeOfData;
  Aspect_TypeOfHighlightMethod: typeof Aspect_TypeOfHighlightMethod;
  Graphic3d_CappingFlags: typeof Graphic3d_CappingFlags;
  Graphic3d_ClipState: typeof Graphic3d_ClipState;
  Graphic3d_TypeOfComposition: typeof Graphic3d_TypeOfComposition;
  Aspect_TypeOfTriedronPosition: typeof Aspect_TypeOfTriedronPosition;
  Aspect_Eye: typeof Aspect_Eye;
  Graphic3d_TransModeFlags: typeof Graphic3d_TransModeFlags;
  Graphic3d_TypeOfConnection: typeof Graphic3d_TypeOfConnection;
  Graphic3d_TypeOfStructure: typeof Graphic3d_TypeOfStructure;
  Aspect_VKeyBasic: typeof Aspect_VKeyBasic;
  Aspect_GradientFillMethod: typeof Aspect_GradientFillMethod;
  Aspect_FillMethod: typeof Aspect_FillMethod;
  Aspect_TypeOfResize: typeof Aspect_TypeOfResize;
  Graphic3d_BufferType: typeof Graphic3d_BufferType;
  Graphic3d_CubeMapSide: typeof Graphic3d_CubeMapSide;
  Graphic3d_TypeOfLightSource: typeof Graphic3d_TypeOfLightSource;
  Graphic3d_DiagnosticInfo: typeof Graphic3d_DiagnosticInfo;
  Graphic3d_RenderTransparentMethod: typeof Graphic3d_RenderTransparentMethod;
  Graphic3d_RenderingMode: typeof Graphic3d_RenderingMode;
  Graphic3d_StereoMode: typeof Graphic3d_StereoMode;
  Graphic3d_ToneMappingMethod: typeof Graphic3d_ToneMappingMethod;
  Graphic3d_NameOfTexture2D: typeof Graphic3d_NameOfTexture2D;
  Graphic3d_NameOfTextureEnv: typeof Graphic3d_NameOfTextureEnv;
  Graphic3d_TypeOfAnswer: typeof Graphic3d_TypeOfAnswer;
  Graphic3d_TypeOfBackfacingModel: typeof Graphic3d_TypeOfBackfacingModel;
  Graphic3d_TypeOfVisualization: typeof Graphic3d_TypeOfVisualization;
  Graphic3d_ZLayerSetting: typeof Graphic3d_ZLayerSetting;
  Aspect_TypeOfFacingModel: typeof Aspect_TypeOfFacingModel;
  Aspect_TypeOfDeflection: typeof Aspect_TypeOfDeflection;
  Graphic3d_GroupAspect: typeof Graphic3d_GroupAspect;
  Aspect_TypeOfColorScaleData: typeof Aspect_TypeOfColorScaleData;
  Aspect_TypeOfColorScalePosition: typeof Aspect_TypeOfColorScalePosition;
  Aspect_GridDrawMode: typeof Aspect_GridDrawMode;
  Aspect_GridType: typeof Aspect_GridType;
  Aspect_XRTrackedDeviceRole: typeof Aspect_XRTrackedDeviceRole;
  Aspect_GraphicsLibrary: typeof Aspect_GraphicsLibrary;
  Aspect_ColorSpace: typeof Aspect_ColorSpace;
  Aspect_XAtom: typeof Aspect_XAtom;
  Aspect_XRActionType: typeof Aspect_XRActionType;
  Aspect_XRGenericAction: typeof Aspect_XRGenericAction;
  Aspect_TypeOfColorScaleOrientation: typeof Aspect_TypeOfColorScaleOrientation;
  Aspect_WidthOfLine: typeof Aspect_WidthOfLine;
  Image_CompressedFormat: typeof Image_CompressedFormat;
  Graphic3d_TypeOfLimit: typeof Graphic3d_TypeOfLimit;
  Font_StrictLevel: typeof Font_StrictLevel;
  Font_UnicodeSubset: typeof Font_UnicodeSubset;
  Graphic3d_FrameStatsCounter: typeof Graphic3d_FrameStatsCounter;
  Graphic3d_FrameStatsTimer: typeof Graphic3d_FrameStatsTimer;
  Graphic3d_NameOfTexture1D: typeof Graphic3d_NameOfTexture1D;
  Graphic3d_NameOfTexturePlane: typeof Graphic3d_NameOfTexturePlane;
  Graphic3d_TypeOfBackground: typeof Graphic3d_TypeOfBackground;
  WNT_OrientationType: typeof WNT_OrientationType;
};
