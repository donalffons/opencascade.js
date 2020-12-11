declare const libName = "./modules/TKVRML.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Vrml {
  constructor();
}

export declare class Vrml_AsciiText extends Standard_Transient {
  SetString(aString: Handle_TColStd_HArray1OfAsciiString): void;
  String(): any;
  SetSpacing(aSpacing: Standard_Real): void;
  Spacing(): Standard_Real;
  SetJustification(aJustification: Vrml_AsciiTextJustification): void;
  Justification(): Vrml_AsciiTextJustification;
  SetWidth(aWidth: Standard_Real): void;
  Width(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_AsciiText_1 extends Vrml_AsciiText {
    constructor();
  }

  export declare class Vrml_AsciiText_2 extends Vrml_AsciiText {
    constructor(aString: any, aSpacing: Standard_Real, aJustification: Vrml_AsciiTextJustification, aWidth: Standard_Real);
  }

export declare class Vrml_Cone {
  constructor(aParts: Vrml_ConeParts, aBottomRadius: Standard_Real, aHeight: Standard_Real)
  SetParts(aParts: Vrml_ConeParts): void;
  Parts(): Vrml_ConeParts;
  SetBottomRadius(aBottomRadius: Standard_Real): void;
  BottomRadius(): Standard_Real;
  SetHeight(aHeight: Standard_Real): void;
  Height(): Standard_Real;
}

export declare class Vrml_Coordinate3 extends Standard_Transient {
  SetPoint(aPoint: any): void;
  Point(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_Coordinate3_1 extends Vrml_Coordinate3 {
    constructor(aPoint: any);
  }

  export declare class Vrml_Coordinate3_2 extends Vrml_Coordinate3 {
    constructor();
  }

export declare class Vrml_Cube {
  constructor(aWidth: Standard_Real, aHeight: Standard_Real, aDepth: Standard_Real)
  SetWidth(aWidth: Standard_Real): void;
  Width(): Standard_Real;
  SetHeight(aHeight: Standard_Real): void;
  Height(): Standard_Real;
  SetDepth(aDepth: Standard_Real): void;
  Depth(): Standard_Real;
}

export declare class Vrml_Cylinder {
  constructor(aParts: Vrml_CylinderParts, aRadius: Standard_Real, aHeight: Standard_Real)
  SetParts(aParts: Vrml_CylinderParts): void;
  Parts(): Vrml_CylinderParts;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  SetHeight(aHeight: Standard_Real): void;
  Height(): Standard_Real;
}

export declare class Vrml_DirectionalLight {
  SetOnOff(aOnOff: Standard_Boolean): void;
  OnOff(): Standard_Boolean;
  SetIntensity(aIntensity: Standard_Real): void;
  Intensity(): Standard_Real;
  SetColor(aColor: Quantity_Color): void;
  Color(): Quantity_Color;
  SetDirection(aDirection: gp_Vec): void;
  Direction(): gp_Vec;
}

  export declare class Vrml_DirectionalLight_1 extends Vrml_DirectionalLight {
    constructor();
  }

  export declare class Vrml_DirectionalLight_2 extends Vrml_DirectionalLight {
    constructor(aOnOff: Standard_Boolean, aIntensity: Standard_Real, aColor: Quantity_Color, aDirection: gp_Vec);
  }

export declare class Vrml_FontStyle {
  constructor(aSize: Standard_Real, aFamily: Vrml_FontStyleFamily, aStyle: Vrml_FontStyleStyle)
  SetSize(aSize: Standard_Real): void;
  Size(): Standard_Real;
  SetFamily(aFamily: Vrml_FontStyleFamily): void;
  Family(): Vrml_FontStyleFamily;
  SetStyle(aStyle: Vrml_FontStyleStyle): void;
  Style(): Vrml_FontStyleStyle;
}

export declare class Vrml_Group {
  constructor()
}

export declare class Vrml_IndexedFaceSet extends Standard_Transient {
  SetCoordIndex(aCoordIndex: any): void;
  CoordIndex(): any;
  SetMaterialIndex(aMaterialIndex: any): void;
  MaterialIndex(): any;
  SetNormalIndex(aNormalIndex: any): void;
  NormalIndex(): any;
  SetTextureCoordIndex(aTextureCoordIndex: any): void;
  TextureCoordIndex(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_IndexedFaceSet_1 extends Vrml_IndexedFaceSet {
    constructor(aCoordIndex: any, aMaterialIndex: any, aNormalIndex: any, aTextureCoordIndex: any);
  }

  export declare class Vrml_IndexedFaceSet_2 extends Vrml_IndexedFaceSet {
    constructor();
  }

export declare class Vrml_IndexedLineSet extends Standard_Transient {
  SetCoordIndex(aCoordIndex: any): void;
  CoordIndex(): any;
  SetMaterialIndex(aMaterialIndex: any): void;
  MaterialIndex(): any;
  SetNormalIndex(aNormalIndex: any): void;
  NormalIndex(): any;
  SetTextureCoordIndex(aTextureCoordIndex: any): void;
  TextureCoordIndex(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_IndexedLineSet_1 extends Vrml_IndexedLineSet {
    constructor(aCoordIndex: any, aMaterialIndex: any, aNormalIndex: any, aTextureCoordIndex: any);
  }

  export declare class Vrml_IndexedLineSet_2 extends Vrml_IndexedLineSet {
    constructor();
  }

export declare class Vrml_Info {
  constructor(aString: TCollection_AsciiString)
  SetString(aString: TCollection_AsciiString): void;
  String(): TCollection_AsciiString;
}

export declare class Vrml_Instancing {
  constructor(aString: TCollection_AsciiString)
}

export declare class Vrml_LOD extends Standard_Transient {
  SetRange(aRange: any): void;
  Range(): any;
  SetCenter(aCenter: gp_Vec): void;
  Center(): gp_Vec;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_LOD_1 extends Vrml_LOD {
    constructor();
  }

  export declare class Vrml_LOD_2 extends Vrml_LOD {
    constructor(aRange: any, aCenter: gp_Vec);
  }

export declare class Vrml_Material extends Standard_Transient {
  SetAmbientColor(aAmbientColor: any): void;
  AmbientColor(): any;
  SetDiffuseColor(aDiffuseColor: any): void;
  DiffuseColor(): any;
  SetSpecularColor(aSpecularColor: any): void;
  SpecularColor(): any;
  SetEmissiveColor(aEmissiveColor: any): void;
  EmissiveColor(): any;
  SetShininess(aShininess: any): void;
  Shininess(): any;
  SetTransparency(aTransparency: any): void;
  Transparency(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_Material_1 extends Vrml_Material {
    constructor(aAmbientColor: any, aDiffuseColor: any, aSpecularColor: any, aEmissiveColor: any, aShininess: any, aTransparency: any);
  }

  export declare class Vrml_Material_2 extends Vrml_Material {
    constructor();
  }

export declare class Vrml_MaterialBinding {
  SetValue(aValue: Vrml_MaterialBindingAndNormalBinding): void;
  Value(): Vrml_MaterialBindingAndNormalBinding;
}

  export declare class Vrml_MaterialBinding_1 extends Vrml_MaterialBinding {
    constructor(aValue: Vrml_MaterialBindingAndNormalBinding);
  }

  export declare class Vrml_MaterialBinding_2 extends Vrml_MaterialBinding {
    constructor();
  }

export declare class Vrml_MatrixTransform {
  SetMatrix(aMatrix: gp_Trsf): void;
  Matrix(): gp_Trsf;
}

  export declare class Vrml_MatrixTransform_1 extends Vrml_MatrixTransform {
    constructor();
  }

  export declare class Vrml_MatrixTransform_2 extends Vrml_MatrixTransform {
    constructor(aMatrix: gp_Trsf);
  }

export declare class Vrml_Normal extends Standard_Transient {
  SetVector(aVector: any): void;
  Vector(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_Normal_1 extends Vrml_Normal {
    constructor(aVector: any);
  }

  export declare class Vrml_Normal_2 extends Vrml_Normal {
    constructor();
  }

export declare class Vrml_NormalBinding {
  SetValue(aValue: Vrml_MaterialBindingAndNormalBinding): void;
  Value(): Vrml_MaterialBindingAndNormalBinding;
}

  export declare class Vrml_NormalBinding_1 extends Vrml_NormalBinding {
    constructor(aValue: Vrml_MaterialBindingAndNormalBinding);
  }

  export declare class Vrml_NormalBinding_2 extends Vrml_NormalBinding {
    constructor();
  }

export declare class Vrml_SFRotation {
  SetRotationX(aRotationX: Standard_Real): void;
  RotationX(): Standard_Real;
  SetRotationY(aRotationY: Standard_Real): void;
  RotationY(): Standard_Real;
  SetRotationZ(aRotationZ: Standard_Real): void;
  RotationZ(): Standard_Real;
  SetAngle(anAngle: Standard_Real): void;
  Angle(): Standard_Real;
}

  export declare class Vrml_SFRotation_1 extends Vrml_SFRotation {
    constructor();
  }

  export declare class Vrml_SFRotation_2 extends Vrml_SFRotation {
    constructor(aRotationX: Standard_Real, aRotationY: Standard_Real, aRotationZ: Standard_Real, anAngle: Standard_Real);
  }

export declare class Vrml_OrthographicCamera {
  SetPosition(aPosition: gp_Vec): void;
  Position(): gp_Vec;
  SetOrientation(aOrientation: Vrml_SFRotation): void;
  Orientation(): Vrml_SFRotation;
  SetFocalDistance(aFocalDistance: Standard_Real): void;
  FocalDistance(): Standard_Real;
  SetHeight(aHeight: Standard_Real): void;
  Height(): Standard_Real;
}

  export declare class Vrml_OrthographicCamera_1 extends Vrml_OrthographicCamera {
    constructor();
  }

  export declare class Vrml_OrthographicCamera_2 extends Vrml_OrthographicCamera {
    constructor(aPosition: gp_Vec, aOrientation: Vrml_SFRotation, aFocalDistance: Standard_Real, aHeight: Standard_Real);
  }

export declare class Vrml_PerspectiveCamera {
  SetPosition(aPosition: gp_Vec): void;
  Position(): gp_Vec;
  SetOrientation(aOrientation: Vrml_SFRotation): void;
  Orientation(): Vrml_SFRotation;
  SetFocalDistance(aFocalDistance: Standard_Real): void;
  FocalDistance(): Standard_Real;
  SetAngle(aHeightAngle: Standard_Real): void;
  Angle(): Standard_Real;
}

  export declare class Vrml_PerspectiveCamera_1 extends Vrml_PerspectiveCamera {
    constructor();
  }

  export declare class Vrml_PerspectiveCamera_2 extends Vrml_PerspectiveCamera {
    constructor(aPosition: gp_Vec, aOrientation: Vrml_SFRotation, aFocalDistance: Standard_Real, aHeightAngle: Standard_Real);
  }

export declare class Vrml_PointLight {
  SetOnOff(aOnOff: Standard_Boolean): void;
  OnOff(): Standard_Boolean;
  SetIntensity(aIntensity: Standard_Real): void;
  Intensity(): Standard_Real;
  SetColor(aColor: Quantity_Color): void;
  Color(): Quantity_Color;
  SetLocation(aLocation: gp_Vec): void;
  Location(): gp_Vec;
}

  export declare class Vrml_PointLight_1 extends Vrml_PointLight {
    constructor();
  }

  export declare class Vrml_PointLight_2 extends Vrml_PointLight {
    constructor(aOnOff: Standard_Boolean, aIntensity: Standard_Real, aColor: Quantity_Color, aLocation: gp_Vec);
  }

export declare class Vrml_PointSet {
  constructor(aStartIndex: Standard_Integer, aNumPoints: Standard_Integer)
  SetStartIndex(aStartIndex: Standard_Integer): void;
  StartIndex(): Standard_Integer;
  SetNumPoints(aNumPoints: Standard_Integer): void;
  NumPoints(): Standard_Integer;
}

export declare class Vrml_Rotation {
  SetRotation(aRotation: Vrml_SFRotation): void;
  Rotation(): Vrml_SFRotation;
}

  export declare class Vrml_Rotation_1 extends Vrml_Rotation {
    constructor();
  }

  export declare class Vrml_Rotation_2 extends Vrml_Rotation {
    constructor(aRotation: Vrml_SFRotation);
  }

export declare class Vrml_SFImage extends Standard_Transient {
  SetWidth(aWidth: Standard_Integer): void;
  Width(): Standard_Integer;
  SetHeight(aHeight: Standard_Integer): void;
  Height(): Standard_Integer;
  SetNumber(aNumber: Vrml_SFImageNumber): void;
  Number(): Vrml_SFImageNumber;
  SetArray(anArray: any): void;
  Array(): any;
  ArrayFlag(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_SFImage_1 extends Vrml_SFImage {
    constructor();
  }

  export declare class Vrml_SFImage_2 extends Vrml_SFImage {
    constructor(aWidth: Standard_Integer, aHeight: Standard_Integer, aNumber: Vrml_SFImageNumber, anArray: any);
  }

export declare class Vrml_Scale {
  SetScaleFactor(aScaleFactor: gp_Vec): void;
  ScaleFactor(): gp_Vec;
}

  export declare class Vrml_Scale_1 extends Vrml_Scale {
    constructor();
  }

  export declare class Vrml_Scale_2 extends Vrml_Scale {
    constructor(aScaleFactor: gp_Vec);
  }

export declare class Vrml_Separator {
  SetRenderCulling(aRenderCulling: Vrml_SeparatorRenderCulling): void;
  RenderCulling(): Vrml_SeparatorRenderCulling;
}

  export declare class Vrml_Separator_1 extends Vrml_Separator {
    constructor(aRenderCulling: Vrml_SeparatorRenderCulling);
  }

  export declare class Vrml_Separator_2 extends Vrml_Separator {
    constructor();
  }

export declare class Vrml_ShapeHints {
  constructor(aVertexOrdering: Vrml_VertexOrdering, aShapeType: Vrml_ShapeType, aFaceType: Vrml_FaceType, aAngle: Standard_Real)
  SetVertexOrdering(aVertexOrdering: Vrml_VertexOrdering): void;
  VertexOrdering(): Vrml_VertexOrdering;
  SetShapeType(aShapeType: Vrml_ShapeType): void;
  ShapeType(): Vrml_ShapeType;
  SetFaceType(aFaceType: Vrml_FaceType): void;
  FaceType(): Vrml_FaceType;
  SetAngle(aAngle: Standard_Real): void;
  Angle(): Standard_Real;
}

export declare class Vrml_Sphere {
  constructor(aRadius: Standard_Real)
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
}

export declare class Vrml_SpotLight {
  SetOnOff(anOnOff: Standard_Boolean): void;
  OnOff(): Standard_Boolean;
  SetIntensity(aIntensity: Standard_Real): void;
  Intensity(): Standard_Real;
  SetColor(aColor: Quantity_Color): void;
  Color(): Quantity_Color;
  SetLocation(aLocation: gp_Vec): void;
  Location(): gp_Vec;
  SetDirection(aDirection: gp_Vec): void;
  Direction(): gp_Vec;
  SetDropOffRate(aDropOffRate: Standard_Real): void;
  DropOffRate(): Standard_Real;
  SetCutOffAngle(aCutOffAngle: Standard_Real): void;
  CutOffAngle(): Standard_Real;
}

  export declare class Vrml_SpotLight_1 extends Vrml_SpotLight {
    constructor();
  }

  export declare class Vrml_SpotLight_2 extends Vrml_SpotLight {
    constructor(aOnOff: Standard_Boolean, aIntensity: Standard_Real, aColor: Quantity_Color, aLocation: gp_Vec, aDirection: gp_Vec, aDropOffRate: Standard_Real, aCutOffAngle: Standard_Real);
  }

export declare class Vrml_Switch {
  constructor(aWhichChild: Standard_Integer)
  SetWhichChild(aWhichChild: Standard_Integer): void;
  WhichChild(): Standard_Integer;
}

export declare class Vrml_Texture2 {
  SetFilename(aFilename: TCollection_AsciiString): void;
  Filename(): TCollection_AsciiString;
  SetImage(aImage: any): void;
  Image(): any;
  SetWrapS(aWrapS: Vrml_Texture2Wrap): void;
  WrapS(): Vrml_Texture2Wrap;
  SetWrapT(aWrapT: Vrml_Texture2Wrap): void;
  WrapT(): Vrml_Texture2Wrap;
}

  export declare class Vrml_Texture2_1 extends Vrml_Texture2 {
    constructor();
  }

  export declare class Vrml_Texture2_2 extends Vrml_Texture2 {
    constructor(aFilename: TCollection_AsciiString, aImage: any, aWrapS: Vrml_Texture2Wrap, aWrapT: Vrml_Texture2Wrap);
  }

export declare class Vrml_Texture2Transform {
  SetTranslation(aTranslation: gp_Vec2d): void;
  Translation(): gp_Vec2d;
  SetRotation(aRotation: Standard_Real): void;
  Rotation(): Standard_Real;
  SetScaleFactor(aScaleFactor: gp_Vec2d): void;
  ScaleFactor(): gp_Vec2d;
  SetCenter(aCenter: gp_Vec2d): void;
  Center(): gp_Vec2d;
}

  export declare class Vrml_Texture2Transform_1 extends Vrml_Texture2Transform {
    constructor();
  }

  export declare class Vrml_Texture2Transform_2 extends Vrml_Texture2Transform {
    constructor(aTranslation: gp_Vec2d, aRotation: Standard_Real, aScaleFactor: gp_Vec2d, aCenter: gp_Vec2d);
  }

export declare class Vrml_TextureCoordinate2 extends Standard_Transient {
  SetPoint(aPoint: any): void;
  Point(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Vrml_TextureCoordinate2_1 extends Vrml_TextureCoordinate2 {
    constructor();
  }

  export declare class Vrml_TextureCoordinate2_2 extends Vrml_TextureCoordinate2 {
    constructor(aPoint: any);
  }

export declare class Vrml_Transform {
  SetTranslation(aTranslation: gp_Vec): void;
  Translation(): gp_Vec;
  SetRotation(aRotation: Vrml_SFRotation): void;
  Rotation(): Vrml_SFRotation;
  SetScaleFactor(aScaleFactor: gp_Vec): void;
  ScaleFactor(): gp_Vec;
  SetScaleOrientation(aScaleOrientation: Vrml_SFRotation): void;
  ScaleOrientation(): Vrml_SFRotation;
  SetCenter(aCenter: gp_Vec): void;
  Center(): gp_Vec;
}

  export declare class Vrml_Transform_1 extends Vrml_Transform {
    constructor();
  }

  export declare class Vrml_Transform_2 extends Vrml_Transform {
    constructor(aTranslation: gp_Vec, aRotation: Vrml_SFRotation, aScaleFactor: gp_Vec, aScaleOrientation: Vrml_SFRotation, aCenter: gp_Vec);
  }

export declare class Vrml_TransformSeparator {
  constructor()
}

export declare class Vrml_Translation {
  SetTranslation(aTranslation: gp_Vec): void;
  Translation(): gp_Vec;
}

  export declare class Vrml_Translation_1 extends Vrml_Translation {
    constructor();
  }

  export declare class Vrml_Translation_2 extends Vrml_Translation {
    constructor(aTranslation: gp_Vec);
  }

export declare class Vrml_WWWAnchor {
  constructor(aName: TCollection_AsciiString, aDescription: TCollection_AsciiString, aMap: Vrml_WWWAnchorMap)
  SetName(aName: TCollection_AsciiString): void;
  Name(): TCollection_AsciiString;
  SetDescription(aDescription: TCollection_AsciiString): void;
  Description(): TCollection_AsciiString;
  SetMap(aMap: Vrml_WWWAnchorMap): void;
  Map(): Vrml_WWWAnchorMap;
}

export declare class Vrml_WWWInline {
  SetName(aName: TCollection_AsciiString): void;
  Name(): TCollection_AsciiString;
  SetBboxSize(aBboxSize: gp_Vec): void;
  BboxSize(): gp_Vec;
  SetBboxCenter(aBboxCenter: gp_Vec): void;
  BboxCenter(): gp_Vec;
}

  export declare class Vrml_WWWInline_1 extends Vrml_WWWInline {
    constructor();
  }

  export declare class Vrml_WWWInline_2 extends Vrml_WWWInline {
    constructor(aName: TCollection_AsciiString, aBboxSize: gp_Vec, aBboxCenter: gp_Vec);
  }

export declare class VrmlAPI {
  constructor();
  Write(aShape: TopoDS_Shape, aFileName: Standard_CString, aVersion: Standard_Integer): Standard_Boolean;
}

export declare class VrmlAPI_Writer {
  constructor()
  ResetToDefaults(): void;
  Drawer(): any;
  SetDeflection(aDef: Standard_Real): void;
  SetRepresentation(aRep: VrmlAPI_RepresentationOfShape): void;
  SetTransparencyToMaterial(aMaterial: any, aTransparency: Standard_Real): void;
  SetShininessToMaterial(aMaterial: any, aShininess: Standard_Real): void;
  SetAmbientColorToMaterial(aMaterial: any, Color: any): void;
  SetDiffuseColorToMaterial(aMaterial: any, Color: any): void;
  SetSpecularColorToMaterial(aMaterial: any, Color: any): void;
  SetEmissiveColorToMaterial(aMaterial: any, Color: any): void;
  GetRepresentation(): VrmlAPI_RepresentationOfShape;
  GetFrontMaterial(): any;
  GetPointsMaterial(): any;
  GetUisoMaterial(): any;
  GetVisoMaterial(): any;
  GetLineMaterial(): any;
  GetWireMaterial(): any;
  GetFreeBoundsMaterial(): any;
  GetUnfreeBoundsMaterial(): any;
  Write(aShape: TopoDS_Shape, aFile: Standard_CString, aVersion: Standard_Integer): Standard_Boolean;
  WriteDoc(theDoc: any, theFile: Standard_CString, theScale: Standard_Real): Standard_Boolean;
}

export declare class VrmlConverter_Curve {
  constructor();
  Add_1(aCurve: Adaptor3d_Curve, aDrawer: any, anOStream: Standard_OStream): void;
  Add_2(aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDrawer: any, anOStream: Standard_OStream): void;
  Add_3(aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, anOStream: Standard_OStream, aNbPoints: Standard_Integer): void;
}

export declare class VrmlConverter_DeflectionCurve {
  constructor();
  Add_1(anOStream: Standard_OStream, aCurve: Adaptor3d_Curve, aDrawer: any): void;
  Add_2(anOStream: Standard_OStream, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDrawer: any): void;
  Add_3(anOStream: Standard_OStream, aCurve: Adaptor3d_Curve, aDeflection: Standard_Real, aLimit: Standard_Real): void;
  Add_4(anOStream: Standard_OStream, aCurve: Adaptor3d_Curve, aDeflection: Standard_Real, aDrawer: any): void;
  Add_5(anOStream: Standard_OStream, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDeflection: Standard_Real): void;
  Add_6(anOStream: Standard_OStream, aCurve: Adaptor3d_Curve, aParams: any, aNbNodes: Standard_Integer, aDrawer: any): void;
}

export declare class VrmlConverter_Drawer extends Standard_Transient {
  constructor()
  SetTypeOfDeflection(aTypeOfDeflection: Aspect_TypeOfDeflection): void;
  TypeOfDeflection(): Aspect_TypeOfDeflection;
  SetMaximalChordialDeviation(aChordialDeviation: Standard_Real): void;
  MaximalChordialDeviation(): Standard_Real;
  SetDeviationCoefficient(aCoefficient: Standard_Real): void;
  DeviationCoefficient(): Standard_Real;
  SetDiscretisation(d: Standard_Integer): void;
  Discretisation(): Standard_Integer;
  SetMaximalParameterValue(Value: Standard_Real): void;
  MaximalParameterValue(): Standard_Real;
  SetIsoOnPlane(OnOff: Standard_Boolean): void;
  IsoOnPlane(): Standard_Boolean;
  UIsoAspect(): any;
  SetUIsoAspect(anAspect: any): void;
  VIsoAspect(): any;
  SetVIsoAspect(anAspect: any): void;
  FreeBoundaryAspect(): any;
  SetFreeBoundaryAspect(anAspect: any): void;
  SetFreeBoundaryDraw(OnOff: Standard_Boolean): void;
  FreeBoundaryDraw(): Standard_Boolean;
  WireAspect(): any;
  SetWireAspect(anAspect: any): void;
  SetWireDraw(OnOff: Standard_Boolean): void;
  WireDraw(): Standard_Boolean;
  UnFreeBoundaryAspect(): any;
  SetUnFreeBoundaryAspect(anAspect: any): void;
  SetUnFreeBoundaryDraw(OnOff: Standard_Boolean): void;
  UnFreeBoundaryDraw(): Standard_Boolean;
  LineAspect(): any;
  SetLineAspect(anAspect: any): void;
  PointAspect(): any;
  SetPointAspect(anAspect: any): void;
  ShadingAspect(): any;
  SetShadingAspect(anAspect: any): void;
  DrawHiddenLine(): Standard_Boolean;
  EnableDrawHiddenLine(): void;
  DisableDrawHiddenLine(): void;
  HiddenLineAspect(): any;
  SetHiddenLineAspect(anAspect: any): void;
  SeenLineAspect(): any;
  SetSeenLineAspect(anAspect: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlConverter_HLRShape {
  constructor();
  Add(anOStream: Standard_OStream, aShape: TopoDS_Shape, aDrawer: any, aProjector: any): void;
}

export declare class VrmlConverter_LineAspect extends Standard_Transient {
  SetMaterial(aMaterial: any): void;
  Material(): any;
  SetHasMaterial(OnOff: Standard_Boolean): void;
  HasMaterial(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlConverter_LineAspect_1 extends VrmlConverter_LineAspect {
    constructor();
  }

  export declare class VrmlConverter_LineAspect_2 extends VrmlConverter_LineAspect {
    constructor(aMaterial: any, OnOff: Standard_Boolean);
  }

export declare class VrmlConverter_IsoAspect extends VrmlConverter_LineAspect {
  SetNumber(aNumber: Standard_Integer): void;
  Number(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlConverter_IsoAspect_1 extends VrmlConverter_IsoAspect {
    constructor();
  }

  export declare class VrmlConverter_IsoAspect_2 extends VrmlConverter_IsoAspect {
    constructor(aMaterial: any, OnOff: Standard_Boolean, aNumber: Standard_Integer);
  }

export declare class VrmlConverter_PointAspect extends Standard_Transient {
  SetMaterial(aMaterial: any): void;
  Material(): any;
  SetHasMaterial(OnOff: Standard_Boolean): void;
  HasMaterial(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlConverter_PointAspect_1 extends VrmlConverter_PointAspect {
    constructor();
  }

  export declare class VrmlConverter_PointAspect_2 extends VrmlConverter_PointAspect {
    constructor(aMaterial: any, OnOff: Standard_Boolean);
  }

export declare class VrmlConverter_Projector extends Standard_Transient {
  constructor(Shapes: TopTools_Array1OfShape, Focus: Standard_Real, DX: Standard_Real, DY: Standard_Real, DZ: Standard_Real, XUp: Standard_Real, YUp: Standard_Real, ZUp: Standard_Real, Camera: VrmlConverter_TypeOfCamera, Light: VrmlConverter_TypeOfLight)
  SetCamera(aCamera: VrmlConverter_TypeOfCamera): void;
  Camera(): VrmlConverter_TypeOfCamera;
  SetLight(aLight: VrmlConverter_TypeOfLight): void;
  Light(): VrmlConverter_TypeOfLight;
  Add(anOStream: Standard_OStream): void;
  Projector(): HLRAlgo_Projector;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlConverter_ShadedShape {
  constructor();
  Add(anOStream: Standard_OStream, aShape: TopoDS_Shape, aDrawer: any): void;
  ComputeNormal(aFace: TopoDS_Face, pc: Poly_Connect, Nor: TColgp_Array1OfDir): void;
}

export declare class VrmlConverter_ShadingAspect extends Standard_Transient {
  constructor()
  SetFrontMaterial(aMaterial: any): void;
  FrontMaterial(): any;
  SetShapeHints(aShapeHints: Vrml_ShapeHints): void;
  ShapeHints(): Vrml_ShapeHints;
  SetHasNormals(OnOff: Standard_Boolean): void;
  HasNormals(): Standard_Boolean;
  SetHasMaterial(OnOff: Standard_Boolean): void;
  HasMaterial(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlConverter_WFDeflectionRestrictedFace {
  constructor();
  Add_1(anOStream: Standard_OStream, aFace: any, aDrawer: any): void;
  AddUIso(anOStream: Standard_OStream, aFace: any, aDrawer: any): void;
  AddVIso(anOStream: Standard_OStream, aFace: any, aDrawer: any): void;
  Add_2(anOStream: Standard_OStream, aFace: any, DrawUIso: Standard_Boolean, DrawVIso: Standard_Boolean, Deflection: Standard_Real, NBUiso: Standard_Integer, NBViso: Standard_Integer, aDrawer: any): void;
}

export declare class VrmlConverter_WFDeflectionShape {
  constructor();
  Add(anOStream: Standard_OStream, aShape: TopoDS_Shape, aDrawer: any): void;
}

export declare class VrmlConverter_WFRestrictedFace {
  constructor();
  Add_1(anOStream: Standard_OStream, aFace: any, aDrawer: any): void;
  AddUIso(anOStream: Standard_OStream, aFace: any, aDrawer: any): void;
  AddVIso(anOStream: Standard_OStream, aFace: any, aDrawer: any): void;
  Add_2(anOStream: Standard_OStream, aFace: any, DrawUIso: Standard_Boolean, DrawVIso: Standard_Boolean, NBUiso: Standard_Integer, NBViso: Standard_Integer, aDrawer: any): void;
}

export declare class VrmlConverter_WFShape {
  constructor();
  Add(anOStream: Standard_OStream, aShape: TopoDS_Shape, aDrawer: any): void;
}

export declare class VrmlData_Node extends Standard_Transient {
  Scene(): VrmlData_Scene;
  Name(): string;
  ReadNode(theBuffer: VrmlData_InBuffer, theNode: any, Type: any): VrmlData_ErrorStatus;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  IsDefault(): Standard_Boolean;
  WriteClosing(): VrmlData_ErrorStatus;
  Clone(a0: any): any;
  ReadBoolean(theBuffer: VrmlData_InBuffer, theResult: Standard_Boolean): VrmlData_ErrorStatus;
  ReadString(theBuffer: VrmlData_InBuffer, theRes: TCollection_AsciiString): VrmlData_ErrorStatus;
  ReadMultiString(theBuffer: VrmlData_InBuffer, theRes: NCollection_List<TCollection_AsciiString>): VrmlData_ErrorStatus;
  ReadInteger(theBuffer: VrmlData_InBuffer, theResult: number): VrmlData_ErrorStatus;
  OK_1(theStat: VrmlData_ErrorStatus): Standard_Boolean;
  OK_2(outStat: VrmlData_ErrorStatus, theStat: VrmlData_ErrorStatus): Standard_Boolean;
  GlobalIndent(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlData_Material extends VrmlData_Node {
  AmbientIntensity(): Standard_Real;
  Shininess(): Standard_Real;
  Transparency(): Standard_Real;
  DiffuseColor(): Quantity_Color;
  EmissiveColor(): Quantity_Color;
  SpecularColor(): Quantity_Color;
  SetAmbientIntensity(theAmbientIntensity: Standard_Real): void;
  SetShininess(theShininess: Standard_Real): void;
  SetTransparency(theTransparency: Standard_Real): void;
  SetDiffuseColor(theColor: Quantity_Color): void;
  SetEmissiveColor(theColor: Quantity_Color): void;
  SetSpecularColor(theColor: Quantity_Color): void;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  IsDefault(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Material_1 extends VrmlData_Material {
    constructor();
  }

  export declare class VrmlData_Material_2 extends VrmlData_Material {
    constructor(theScene: VrmlData_Scene, theName: string, theAmbientIntensity: Standard_Real, theShininess: Standard_Real, theTransparency: Standard_Real);
  }

export declare class VrmlData_Texture extends VrmlData_Node {
  RepeatS(): Standard_Boolean;
  RepeatT(): Standard_Boolean;
  SetRepeatS(theFlag: Standard_Boolean): void;
  SetRepeatT(theFlag: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlData_TextureTransform extends VrmlData_Node {
  Center(): gp_XY;
  Rotation(): Standard_Real;
  Scale(): gp_XY;
  Translation(): gp_XY;
  SetCenter(V: gp_XY): void;
  SetRotation(V: Standard_Real): void;
  SetScale(V: gp_XY): void;
  SetTranslation(V: gp_XY): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlData_Appearance extends VrmlData_Node {
  Material(): any;
  Texture(): any;
  TextureTransform(): any;
  SetMaterial(theMat: any): void;
  SetTexture(theTexture: any): void;
  SetTextureTransform(theTT: any): void;
  Clone(a0: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  IsDefault(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Appearance_1 extends VrmlData_Appearance {
    constructor();
  }

  export declare class VrmlData_Appearance_2 extends VrmlData_Appearance {
    constructor(theScene: VrmlData_Scene, theName: string);
  }

export declare class VrmlData_ArrayVec3d extends VrmlData_Node {
  Length(): Standard_Size;
  Values(): gp_XYZ;
  AllocateValues(theLength: Standard_Size): Standard_Boolean;
  SetValues(nValues: Standard_Size, arrValues: gp_XYZ): void;
  ReadArray(theBuffer: VrmlData_InBuffer, theName: string, isScale: Standard_Boolean): VrmlData_ErrorStatus;
  WriteArray(theName: string, isScale: Standard_Boolean): VrmlData_ErrorStatus;
  IsDefault(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlData_Geometry extends VrmlData_Node {
  TShape(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlData_Box extends VrmlData_Geometry {
  Size(): gp_XYZ;
  SetSize(theSize: gp_XYZ): void;
  TShape(): any;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Box_1 extends VrmlData_Box {
    constructor();
  }

  export declare class VrmlData_Box_2 extends VrmlData_Box {
    constructor(theScene: VrmlData_Scene, theName: string, sizeX: Standard_Real, sizeY: Standard_Real, sizeZ: Standard_Real);
  }

export declare class VrmlData_Color extends VrmlData_ArrayVec3d {
  Color(i: Standard_Integer): Quantity_Color;
  SetColors(nColors: size_t, arrColors: gp_XYZ): void;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Color_1 extends VrmlData_Color {
    constructor();
  }

  export declare class VrmlData_Color_2 extends VrmlData_Color {
    constructor(theScene: VrmlData_Scene, theName: string, nColors: size_t, arrColors: gp_XYZ);
  }

export declare class VrmlData_Cone extends VrmlData_Geometry {
  BottomRadius(): Standard_Real;
  Height(): Standard_Real;
  HasBottom(): Standard_Boolean;
  HasSide(): Standard_Boolean;
  SetBottomRadius(theRadius: Standard_Real): void;
  SetHeight(theHeight: Standard_Real): void;
  SetFaces(hasBottom: Standard_Boolean, hasSide: Standard_Boolean): void;
  TShape(): any;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Cone_1 extends VrmlData_Cone {
    constructor();
  }

  export declare class VrmlData_Cone_2 extends VrmlData_Cone {
    constructor(theScene: VrmlData_Scene, theName: string, theBottomRadius: Standard_Real, theHeight: Standard_Real);
  }

export declare class VrmlData_Coordinate extends VrmlData_ArrayVec3d {
  Coordinate(i: Standard_Integer): gp_XYZ;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Coordinate_1 extends VrmlData_Coordinate {
    constructor();
  }

  export declare class VrmlData_Coordinate_2 extends VrmlData_Coordinate {
    constructor(theScene: VrmlData_Scene, theName: string, nPoints: size_t, arrPoints: gp_XYZ);
  }

export declare class VrmlData_Cylinder extends VrmlData_Geometry {
  Radius(): Standard_Real;
  Height(): Standard_Real;
  HasBottom(): Standard_Boolean;
  HasSide(): Standard_Boolean;
  HasTop(): Standard_Boolean;
  SetRadius(theRadius: Standard_Real): void;
  SetHeight(theHeight: Standard_Real): void;
  SetFaces(hasBottom: Standard_Boolean, hasSide: Standard_Boolean, hasTop: Standard_Boolean): void;
  TShape(): any;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Cylinder_1 extends VrmlData_Cylinder {
    constructor();
  }

  export declare class VrmlData_Cylinder_2 extends VrmlData_Cylinder {
    constructor(theScene: VrmlData_Scene, theName: string, theRadius: Standard_Real, theHeight: Standard_Real);
  }

export declare class VrmlData_Faceted extends VrmlData_Geometry {
  IsCCW(): Standard_Boolean;
  IsSolid(): Standard_Boolean;
  IsConvex(): Standard_Boolean;
  CreaseAngle(): Standard_Real;
  SetCCW(theValue: Standard_Boolean): void;
  SetSolid(theValue: Standard_Boolean): void;
  SetConvex(theValue: Standard_Boolean): void;
  SetCreaseAngle(theValue: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class VrmlData_Group extends VrmlData_Node {
  AddNode(theNode: any): any;
  RemoveNode(theNode: any): Standard_Boolean;
  NodeIterator(): any;
  Box(): Bnd_B3f;
  SetBox(theBox: Bnd_B3f): void;
  SetTransform(theTrsf: gp_Trsf): Standard_Boolean;
  GetTransform(): gp_Trsf;
  IsTransform(): Standard_Boolean;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  FindNode(theName: string, theLocation: gp_Trsf): any;
  Shape(theShape: TopoDS_Shape, pMapApp: VrmlData_DataMapOfShapeAppearance): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Group_1 extends VrmlData_Group {
    constructor(isTransform: Standard_Boolean);
  }

  export declare class VrmlData_Group_2 extends VrmlData_Group {
    constructor(theScene: VrmlData_Scene, theName: string, isTransform: Standard_Boolean);
  }

export declare class VrmlData_ImageTexture extends VrmlData_Texture {
  URL(): NCollection_List<TCollection_AsciiString>;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_ImageTexture_1 extends VrmlData_ImageTexture {
    constructor();
  }

  export declare class VrmlData_ImageTexture_2 extends VrmlData_ImageTexture {
    constructor(theScene: VrmlData_Scene, theName: string, theURL: string, theRepS: Standard_Boolean, theRepT: Standard_Boolean);
  }

export declare class VrmlData_Normal extends VrmlData_ArrayVec3d {
  Normal(i: Standard_Integer): gp_XYZ;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Normal_1 extends VrmlData_Normal {
    constructor();
  }

  export declare class VrmlData_Normal_2 extends VrmlData_Normal {
    constructor(theScene: VrmlData_Scene, theName: string, nVec: size_t, arrVec: gp_XYZ);
  }

export declare class VrmlData_TextureCoordinate extends VrmlData_Node {
  AllocateValues(theLength: Standard_Size): Standard_Boolean;
  Length(): size_t;
  Points(): gp_XY;
  SetPoints(nPoints: size_t, arrPoints: gp_XY): void;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_TextureCoordinate_1 extends VrmlData_TextureCoordinate {
    constructor();
  }

  export declare class VrmlData_TextureCoordinate_2 extends VrmlData_TextureCoordinate {
    constructor(theScene: VrmlData_Scene, theName: string, nPoints: size_t, arrPoints: gp_XY);
  }

export declare class VrmlData_WorldInfo extends VrmlData_Node {
  SetTitle(theString: string): void;
  AddInfo(theString: string): void;
  Title(): string;
  InfoIterator(): any;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  IsDefault(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_WorldInfo_1 extends VrmlData_WorldInfo {
    constructor();
  }

  export declare class VrmlData_WorldInfo_2 extends VrmlData_WorldInfo {
    constructor(theScene: VrmlData_Scene, theName: string, theTitle: string);
  }

export declare class VrmlData_ShapeConvert {
  constructor(theScene: VrmlData_Scene, theScale: Standard_Real)
  AddShape(theShape: TopoDS_Shape, theName: string): void;
  Convert(theExtractFaces: Standard_Boolean, theExtractEdges: Standard_Boolean, theDeflection: Standard_Real, theDeflAngle: Standard_Real): void;
  ConvertDocument(theDoc: any): void;
}

export declare class VrmlData_ShapeNode extends VrmlData_Node {
  Appearance(): any;
  Geometry(): any;
  SetAppearance(theAppear: any): void;
  SetGeometry(theGeometry: any): void;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  IsDefault(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_ShapeNode_1 extends VrmlData_ShapeNode {
    constructor();
  }

  export declare class VrmlData_ShapeNode_2 extends VrmlData_ShapeNode {
    constructor(theScene: VrmlData_Scene, theName: string);
  }

export declare class VrmlData_Sphere extends VrmlData_Geometry {
  Radius(): Standard_Real;
  SetRadius(theRadius: Standard_Real): void;
  TShape(): any;
  Clone(theOther: any): any;
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  Write(thePrefix: string): VrmlData_ErrorStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_Sphere_1 extends VrmlData_Sphere {
    constructor();
  }

  export declare class VrmlData_Sphere_2 extends VrmlData_Sphere {
    constructor(theScene: VrmlData_Scene, theName: string, theRadius: Standard_Real);
  }

export declare class VrmlData_UnknownNode extends VrmlData_Node {
  Read(theBuffer: VrmlData_InBuffer): VrmlData_ErrorStatus;
  GetTitle(): TCollection_AsciiString;
  IsDefault(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class VrmlData_UnknownNode_1 extends VrmlData_UnknownNode {
    constructor();
  }

  export declare class VrmlData_UnknownNode_2 extends VrmlData_UnknownNode {
    constructor(theScene: VrmlData_Scene, theName: string, theTitle: string);
  }

export declare class Handle_Vrml_AsciiText {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_AsciiText): void;
  get(): Vrml_AsciiText;
}

  export declare class Handle_Vrml_AsciiText_1 extends Handle_Vrml_AsciiText {
    constructor();
  }

  export declare class Handle_Vrml_AsciiText_2 extends Handle_Vrml_AsciiText {
    constructor(thePtr: Vrml_AsciiText);
  }

  export declare class Handle_Vrml_AsciiText_3 extends Handle_Vrml_AsciiText {
    constructor(theHandle: Handle_Vrml_AsciiText);
  }

  export declare class Handle_Vrml_AsciiText_4 extends Handle_Vrml_AsciiText {
    constructor(theHandle: Handle_Vrml_AsciiText);
  }

export declare class Handle_Vrml_Coordinate3 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_Coordinate3): void;
  get(): Vrml_Coordinate3;
}

  export declare class Handle_Vrml_Coordinate3_1 extends Handle_Vrml_Coordinate3 {
    constructor();
  }

  export declare class Handle_Vrml_Coordinate3_2 extends Handle_Vrml_Coordinate3 {
    constructor(thePtr: Vrml_Coordinate3);
  }

  export declare class Handle_Vrml_Coordinate3_3 extends Handle_Vrml_Coordinate3 {
    constructor(theHandle: Handle_Vrml_Coordinate3);
  }

  export declare class Handle_Vrml_Coordinate3_4 extends Handle_Vrml_Coordinate3 {
    constructor(theHandle: Handle_Vrml_Coordinate3);
  }

export declare class Handle_Vrml_IndexedFaceSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_IndexedFaceSet): void;
  get(): Vrml_IndexedFaceSet;
}

  export declare class Handle_Vrml_IndexedFaceSet_1 extends Handle_Vrml_IndexedFaceSet {
    constructor();
  }

  export declare class Handle_Vrml_IndexedFaceSet_2 extends Handle_Vrml_IndexedFaceSet {
    constructor(thePtr: Vrml_IndexedFaceSet);
  }

  export declare class Handle_Vrml_IndexedFaceSet_3 extends Handle_Vrml_IndexedFaceSet {
    constructor(theHandle: Handle_Vrml_IndexedFaceSet);
  }

  export declare class Handle_Vrml_IndexedFaceSet_4 extends Handle_Vrml_IndexedFaceSet {
    constructor(theHandle: Handle_Vrml_IndexedFaceSet);
  }

export declare class Handle_Vrml_IndexedLineSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_IndexedLineSet): void;
  get(): Vrml_IndexedLineSet;
}

  export declare class Handle_Vrml_IndexedLineSet_1 extends Handle_Vrml_IndexedLineSet {
    constructor();
  }

  export declare class Handle_Vrml_IndexedLineSet_2 extends Handle_Vrml_IndexedLineSet {
    constructor(thePtr: Vrml_IndexedLineSet);
  }

  export declare class Handle_Vrml_IndexedLineSet_3 extends Handle_Vrml_IndexedLineSet {
    constructor(theHandle: Handle_Vrml_IndexedLineSet);
  }

  export declare class Handle_Vrml_IndexedLineSet_4 extends Handle_Vrml_IndexedLineSet {
    constructor(theHandle: Handle_Vrml_IndexedLineSet);
  }

export declare class Handle_Vrml_LOD {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_LOD): void;
  get(): Vrml_LOD;
}

  export declare class Handle_Vrml_LOD_1 extends Handle_Vrml_LOD {
    constructor();
  }

  export declare class Handle_Vrml_LOD_2 extends Handle_Vrml_LOD {
    constructor(thePtr: Vrml_LOD);
  }

  export declare class Handle_Vrml_LOD_3 extends Handle_Vrml_LOD {
    constructor(theHandle: Handle_Vrml_LOD);
  }

  export declare class Handle_Vrml_LOD_4 extends Handle_Vrml_LOD {
    constructor(theHandle: Handle_Vrml_LOD);
  }

export declare class Handle_Vrml_Material {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_Material): void;
  get(): Vrml_Material;
}

  export declare class Handle_Vrml_Material_1 extends Handle_Vrml_Material {
    constructor();
  }

  export declare class Handle_Vrml_Material_2 extends Handle_Vrml_Material {
    constructor(thePtr: Vrml_Material);
  }

  export declare class Handle_Vrml_Material_3 extends Handle_Vrml_Material {
    constructor(theHandle: Handle_Vrml_Material);
  }

  export declare class Handle_Vrml_Material_4 extends Handle_Vrml_Material {
    constructor(theHandle: Handle_Vrml_Material);
  }

export declare class Handle_Vrml_Normal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_Normal): void;
  get(): Vrml_Normal;
}

  export declare class Handle_Vrml_Normal_1 extends Handle_Vrml_Normal {
    constructor();
  }

  export declare class Handle_Vrml_Normal_2 extends Handle_Vrml_Normal {
    constructor(thePtr: Vrml_Normal);
  }

  export declare class Handle_Vrml_Normal_3 extends Handle_Vrml_Normal {
    constructor(theHandle: Handle_Vrml_Normal);
  }

  export declare class Handle_Vrml_Normal_4 extends Handle_Vrml_Normal {
    constructor(theHandle: Handle_Vrml_Normal);
  }

export declare class Handle_Vrml_SFImage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_SFImage): void;
  get(): Vrml_SFImage;
}

  export declare class Handle_Vrml_SFImage_1 extends Handle_Vrml_SFImage {
    constructor();
  }

  export declare class Handle_Vrml_SFImage_2 extends Handle_Vrml_SFImage {
    constructor(thePtr: Vrml_SFImage);
  }

  export declare class Handle_Vrml_SFImage_3 extends Handle_Vrml_SFImage {
    constructor(theHandle: Handle_Vrml_SFImage);
  }

  export declare class Handle_Vrml_SFImage_4 extends Handle_Vrml_SFImage {
    constructor(theHandle: Handle_Vrml_SFImage);
  }

export declare class Handle_Vrml_TextureCoordinate2 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Vrml_TextureCoordinate2): void;
  get(): Vrml_TextureCoordinate2;
}

  export declare class Handle_Vrml_TextureCoordinate2_1 extends Handle_Vrml_TextureCoordinate2 {
    constructor();
  }

  export declare class Handle_Vrml_TextureCoordinate2_2 extends Handle_Vrml_TextureCoordinate2 {
    constructor(thePtr: Vrml_TextureCoordinate2);
  }

  export declare class Handle_Vrml_TextureCoordinate2_3 extends Handle_Vrml_TextureCoordinate2 {
    constructor(theHandle: Handle_Vrml_TextureCoordinate2);
  }

  export declare class Handle_Vrml_TextureCoordinate2_4 extends Handle_Vrml_TextureCoordinate2 {
    constructor(theHandle: Handle_Vrml_TextureCoordinate2);
  }

export declare class Handle_VrmlConverter_Drawer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlConverter_Drawer): void;
  get(): VrmlConverter_Drawer;
}

  export declare class Handle_VrmlConverter_Drawer_1 extends Handle_VrmlConverter_Drawer {
    constructor();
  }

  export declare class Handle_VrmlConverter_Drawer_2 extends Handle_VrmlConverter_Drawer {
    constructor(thePtr: VrmlConverter_Drawer);
  }

  export declare class Handle_VrmlConverter_Drawer_3 extends Handle_VrmlConverter_Drawer {
    constructor(theHandle: Handle_VrmlConverter_Drawer);
  }

  export declare class Handle_VrmlConverter_Drawer_4 extends Handle_VrmlConverter_Drawer {
    constructor(theHandle: Handle_VrmlConverter_Drawer);
  }

export declare class Handle_VrmlConverter_LineAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlConverter_LineAspect): void;
  get(): VrmlConverter_LineAspect;
}

  export declare class Handle_VrmlConverter_LineAspect_1 extends Handle_VrmlConverter_LineAspect {
    constructor();
  }

  export declare class Handle_VrmlConverter_LineAspect_2 extends Handle_VrmlConverter_LineAspect {
    constructor(thePtr: VrmlConverter_LineAspect);
  }

  export declare class Handle_VrmlConverter_LineAspect_3 extends Handle_VrmlConverter_LineAspect {
    constructor(theHandle: Handle_VrmlConverter_LineAspect);
  }

  export declare class Handle_VrmlConverter_LineAspect_4 extends Handle_VrmlConverter_LineAspect {
    constructor(theHandle: Handle_VrmlConverter_LineAspect);
  }

export declare class Handle_VrmlConverter_IsoAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlConverter_IsoAspect): void;
  get(): VrmlConverter_IsoAspect;
}

  export declare class Handle_VrmlConverter_IsoAspect_1 extends Handle_VrmlConverter_IsoAspect {
    constructor();
  }

  export declare class Handle_VrmlConverter_IsoAspect_2 extends Handle_VrmlConverter_IsoAspect {
    constructor(thePtr: VrmlConverter_IsoAspect);
  }

  export declare class Handle_VrmlConverter_IsoAspect_3 extends Handle_VrmlConverter_IsoAspect {
    constructor(theHandle: Handle_VrmlConverter_IsoAspect);
  }

  export declare class Handle_VrmlConverter_IsoAspect_4 extends Handle_VrmlConverter_IsoAspect {
    constructor(theHandle: Handle_VrmlConverter_IsoAspect);
  }

export declare class Handle_VrmlConverter_PointAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlConverter_PointAspect): void;
  get(): VrmlConverter_PointAspect;
}

  export declare class Handle_VrmlConverter_PointAspect_1 extends Handle_VrmlConverter_PointAspect {
    constructor();
  }

  export declare class Handle_VrmlConverter_PointAspect_2 extends Handle_VrmlConverter_PointAspect {
    constructor(thePtr: VrmlConverter_PointAspect);
  }

  export declare class Handle_VrmlConverter_PointAspect_3 extends Handle_VrmlConverter_PointAspect {
    constructor(theHandle: Handle_VrmlConverter_PointAspect);
  }

  export declare class Handle_VrmlConverter_PointAspect_4 extends Handle_VrmlConverter_PointAspect {
    constructor(theHandle: Handle_VrmlConverter_PointAspect);
  }

export declare class Handle_VrmlConverter_Projector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlConverter_Projector): void;
  get(): VrmlConverter_Projector;
}

  export declare class Handle_VrmlConverter_Projector_1 extends Handle_VrmlConverter_Projector {
    constructor();
  }

  export declare class Handle_VrmlConverter_Projector_2 extends Handle_VrmlConverter_Projector {
    constructor(thePtr: VrmlConverter_Projector);
  }

  export declare class Handle_VrmlConverter_Projector_3 extends Handle_VrmlConverter_Projector {
    constructor(theHandle: Handle_VrmlConverter_Projector);
  }

  export declare class Handle_VrmlConverter_Projector_4 extends Handle_VrmlConverter_Projector {
    constructor(theHandle: Handle_VrmlConverter_Projector);
  }

export declare class Handle_VrmlConverter_ShadingAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlConverter_ShadingAspect): void;
  get(): VrmlConverter_ShadingAspect;
}

  export declare class Handle_VrmlConverter_ShadingAspect_1 extends Handle_VrmlConverter_ShadingAspect {
    constructor();
  }

  export declare class Handle_VrmlConverter_ShadingAspect_2 extends Handle_VrmlConverter_ShadingAspect {
    constructor(thePtr: VrmlConverter_ShadingAspect);
  }

  export declare class Handle_VrmlConverter_ShadingAspect_3 extends Handle_VrmlConverter_ShadingAspect {
    constructor(theHandle: Handle_VrmlConverter_ShadingAspect);
  }

  export declare class Handle_VrmlConverter_ShadingAspect_4 extends Handle_VrmlConverter_ShadingAspect {
    constructor(theHandle: Handle_VrmlConverter_ShadingAspect);
  }

export declare class Handle_VrmlData_Node {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Node): void;
  get(): VrmlData_Node;
}

  export declare class Handle_VrmlData_Node_1 extends Handle_VrmlData_Node {
    constructor();
  }

  export declare class Handle_VrmlData_Node_2 extends Handle_VrmlData_Node {
    constructor(thePtr: VrmlData_Node);
  }

  export declare class Handle_VrmlData_Node_3 extends Handle_VrmlData_Node {
    constructor(theHandle: Handle_VrmlData_Node);
  }

  export declare class Handle_VrmlData_Node_4 extends Handle_VrmlData_Node {
    constructor(theHandle: Handle_VrmlData_Node);
  }

export declare class Handle_VrmlData_Material {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Material): void;
  get(): VrmlData_Material;
}

  export declare class Handle_VrmlData_Material_1 extends Handle_VrmlData_Material {
    constructor();
  }

  export declare class Handle_VrmlData_Material_2 extends Handle_VrmlData_Material {
    constructor(thePtr: VrmlData_Material);
  }

  export declare class Handle_VrmlData_Material_3 extends Handle_VrmlData_Material {
    constructor(theHandle: Handle_VrmlData_Material);
  }

  export declare class Handle_VrmlData_Material_4 extends Handle_VrmlData_Material {
    constructor(theHandle: Handle_VrmlData_Material);
  }

export declare class Handle_VrmlData_Texture {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Texture): void;
  get(): VrmlData_Texture;
}

  export declare class Handle_VrmlData_Texture_1 extends Handle_VrmlData_Texture {
    constructor();
  }

  export declare class Handle_VrmlData_Texture_2 extends Handle_VrmlData_Texture {
    constructor(thePtr: VrmlData_Texture);
  }

  export declare class Handle_VrmlData_Texture_3 extends Handle_VrmlData_Texture {
    constructor(theHandle: Handle_VrmlData_Texture);
  }

  export declare class Handle_VrmlData_Texture_4 extends Handle_VrmlData_Texture {
    constructor(theHandle: Handle_VrmlData_Texture);
  }

export declare class Handle_VrmlData_TextureTransform {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_TextureTransform): void;
  get(): VrmlData_TextureTransform;
}

  export declare class Handle_VrmlData_TextureTransform_1 extends Handle_VrmlData_TextureTransform {
    constructor();
  }

  export declare class Handle_VrmlData_TextureTransform_2 extends Handle_VrmlData_TextureTransform {
    constructor(thePtr: VrmlData_TextureTransform);
  }

  export declare class Handle_VrmlData_TextureTransform_3 extends Handle_VrmlData_TextureTransform {
    constructor(theHandle: Handle_VrmlData_TextureTransform);
  }

  export declare class Handle_VrmlData_TextureTransform_4 extends Handle_VrmlData_TextureTransform {
    constructor(theHandle: Handle_VrmlData_TextureTransform);
  }

export declare class Handle_VrmlData_Appearance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Appearance): void;
  get(): VrmlData_Appearance;
}

  export declare class Handle_VrmlData_Appearance_1 extends Handle_VrmlData_Appearance {
    constructor();
  }

  export declare class Handle_VrmlData_Appearance_2 extends Handle_VrmlData_Appearance {
    constructor(thePtr: VrmlData_Appearance);
  }

  export declare class Handle_VrmlData_Appearance_3 extends Handle_VrmlData_Appearance {
    constructor(theHandle: Handle_VrmlData_Appearance);
  }

  export declare class Handle_VrmlData_Appearance_4 extends Handle_VrmlData_Appearance {
    constructor(theHandle: Handle_VrmlData_Appearance);
  }

export declare class Handle_VrmlData_ArrayVec3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_ArrayVec3d): void;
  get(): VrmlData_ArrayVec3d;
}

  export declare class Handle_VrmlData_ArrayVec3d_1 extends Handle_VrmlData_ArrayVec3d {
    constructor();
  }

  export declare class Handle_VrmlData_ArrayVec3d_2 extends Handle_VrmlData_ArrayVec3d {
    constructor(thePtr: VrmlData_ArrayVec3d);
  }

  export declare class Handle_VrmlData_ArrayVec3d_3 extends Handle_VrmlData_ArrayVec3d {
    constructor(theHandle: Handle_VrmlData_ArrayVec3d);
  }

  export declare class Handle_VrmlData_ArrayVec3d_4 extends Handle_VrmlData_ArrayVec3d {
    constructor(theHandle: Handle_VrmlData_ArrayVec3d);
  }

export declare class Handle_VrmlData_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Geometry): void;
  get(): VrmlData_Geometry;
}

  export declare class Handle_VrmlData_Geometry_1 extends Handle_VrmlData_Geometry {
    constructor();
  }

  export declare class Handle_VrmlData_Geometry_2 extends Handle_VrmlData_Geometry {
    constructor(thePtr: VrmlData_Geometry);
  }

  export declare class Handle_VrmlData_Geometry_3 extends Handle_VrmlData_Geometry {
    constructor(theHandle: Handle_VrmlData_Geometry);
  }

  export declare class Handle_VrmlData_Geometry_4 extends Handle_VrmlData_Geometry {
    constructor(theHandle: Handle_VrmlData_Geometry);
  }

export declare class Handle_VrmlData_Box {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Box): void;
  get(): VrmlData_Box;
}

  export declare class Handle_VrmlData_Box_1 extends Handle_VrmlData_Box {
    constructor();
  }

  export declare class Handle_VrmlData_Box_2 extends Handle_VrmlData_Box {
    constructor(thePtr: VrmlData_Box);
  }

  export declare class Handle_VrmlData_Box_3 extends Handle_VrmlData_Box {
    constructor(theHandle: Handle_VrmlData_Box);
  }

  export declare class Handle_VrmlData_Box_4 extends Handle_VrmlData_Box {
    constructor(theHandle: Handle_VrmlData_Box);
  }

export declare class Handle_VrmlData_Color {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Color): void;
  get(): VrmlData_Color;
}

  export declare class Handle_VrmlData_Color_1 extends Handle_VrmlData_Color {
    constructor();
  }

  export declare class Handle_VrmlData_Color_2 extends Handle_VrmlData_Color {
    constructor(thePtr: VrmlData_Color);
  }

  export declare class Handle_VrmlData_Color_3 extends Handle_VrmlData_Color {
    constructor(theHandle: Handle_VrmlData_Color);
  }

  export declare class Handle_VrmlData_Color_4 extends Handle_VrmlData_Color {
    constructor(theHandle: Handle_VrmlData_Color);
  }

export declare class Handle_VrmlData_Cone {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Cone): void;
  get(): VrmlData_Cone;
}

  export declare class Handle_VrmlData_Cone_1 extends Handle_VrmlData_Cone {
    constructor();
  }

  export declare class Handle_VrmlData_Cone_2 extends Handle_VrmlData_Cone {
    constructor(thePtr: VrmlData_Cone);
  }

  export declare class Handle_VrmlData_Cone_3 extends Handle_VrmlData_Cone {
    constructor(theHandle: Handle_VrmlData_Cone);
  }

  export declare class Handle_VrmlData_Cone_4 extends Handle_VrmlData_Cone {
    constructor(theHandle: Handle_VrmlData_Cone);
  }

export declare class Handle_VrmlData_Coordinate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Coordinate): void;
  get(): VrmlData_Coordinate;
}

  export declare class Handle_VrmlData_Coordinate_1 extends Handle_VrmlData_Coordinate {
    constructor();
  }

  export declare class Handle_VrmlData_Coordinate_2 extends Handle_VrmlData_Coordinate {
    constructor(thePtr: VrmlData_Coordinate);
  }

  export declare class Handle_VrmlData_Coordinate_3 extends Handle_VrmlData_Coordinate {
    constructor(theHandle: Handle_VrmlData_Coordinate);
  }

  export declare class Handle_VrmlData_Coordinate_4 extends Handle_VrmlData_Coordinate {
    constructor(theHandle: Handle_VrmlData_Coordinate);
  }

export declare class Handle_VrmlData_Cylinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Cylinder): void;
  get(): VrmlData_Cylinder;
}

  export declare class Handle_VrmlData_Cylinder_1 extends Handle_VrmlData_Cylinder {
    constructor();
  }

  export declare class Handle_VrmlData_Cylinder_2 extends Handle_VrmlData_Cylinder {
    constructor(thePtr: VrmlData_Cylinder);
  }

  export declare class Handle_VrmlData_Cylinder_3 extends Handle_VrmlData_Cylinder {
    constructor(theHandle: Handle_VrmlData_Cylinder);
  }

  export declare class Handle_VrmlData_Cylinder_4 extends Handle_VrmlData_Cylinder {
    constructor(theHandle: Handle_VrmlData_Cylinder);
  }

export declare class Handle_VrmlData_Faceted {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Faceted): void;
  get(): VrmlData_Faceted;
}

  export declare class Handle_VrmlData_Faceted_1 extends Handle_VrmlData_Faceted {
    constructor();
  }

  export declare class Handle_VrmlData_Faceted_2 extends Handle_VrmlData_Faceted {
    constructor(thePtr: VrmlData_Faceted);
  }

  export declare class Handle_VrmlData_Faceted_3 extends Handle_VrmlData_Faceted {
    constructor(theHandle: Handle_VrmlData_Faceted);
  }

  export declare class Handle_VrmlData_Faceted_4 extends Handle_VrmlData_Faceted {
    constructor(theHandle: Handle_VrmlData_Faceted);
  }

export declare class Handle_VrmlData_Group {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Group): void;
  get(): VrmlData_Group;
}

  export declare class Handle_VrmlData_Group_1 extends Handle_VrmlData_Group {
    constructor();
  }

  export declare class Handle_VrmlData_Group_2 extends Handle_VrmlData_Group {
    constructor(thePtr: VrmlData_Group);
  }

  export declare class Handle_VrmlData_Group_3 extends Handle_VrmlData_Group {
    constructor(theHandle: Handle_VrmlData_Group);
  }

  export declare class Handle_VrmlData_Group_4 extends Handle_VrmlData_Group {
    constructor(theHandle: Handle_VrmlData_Group);
  }

export declare class Handle_VrmlData_ImageTexture {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_ImageTexture): void;
  get(): VrmlData_ImageTexture;
}

  export declare class Handle_VrmlData_ImageTexture_1 extends Handle_VrmlData_ImageTexture {
    constructor();
  }

  export declare class Handle_VrmlData_ImageTexture_2 extends Handle_VrmlData_ImageTexture {
    constructor(thePtr: VrmlData_ImageTexture);
  }

  export declare class Handle_VrmlData_ImageTexture_3 extends Handle_VrmlData_ImageTexture {
    constructor(theHandle: Handle_VrmlData_ImageTexture);
  }

  export declare class Handle_VrmlData_ImageTexture_4 extends Handle_VrmlData_ImageTexture {
    constructor(theHandle: Handle_VrmlData_ImageTexture);
  }

export declare class Handle_VrmlData_Normal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Normal): void;
  get(): VrmlData_Normal;
}

  export declare class Handle_VrmlData_Normal_1 extends Handle_VrmlData_Normal {
    constructor();
  }

  export declare class Handle_VrmlData_Normal_2 extends Handle_VrmlData_Normal {
    constructor(thePtr: VrmlData_Normal);
  }

  export declare class Handle_VrmlData_Normal_3 extends Handle_VrmlData_Normal {
    constructor(theHandle: Handle_VrmlData_Normal);
  }

  export declare class Handle_VrmlData_Normal_4 extends Handle_VrmlData_Normal {
    constructor(theHandle: Handle_VrmlData_Normal);
  }

export declare class Handle_VrmlData_TextureCoordinate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_TextureCoordinate): void;
  get(): VrmlData_TextureCoordinate;
}

  export declare class Handle_VrmlData_TextureCoordinate_1 extends Handle_VrmlData_TextureCoordinate {
    constructor();
  }

  export declare class Handle_VrmlData_TextureCoordinate_2 extends Handle_VrmlData_TextureCoordinate {
    constructor(thePtr: VrmlData_TextureCoordinate);
  }

  export declare class Handle_VrmlData_TextureCoordinate_3 extends Handle_VrmlData_TextureCoordinate {
    constructor(theHandle: Handle_VrmlData_TextureCoordinate);
  }

  export declare class Handle_VrmlData_TextureCoordinate_4 extends Handle_VrmlData_TextureCoordinate {
    constructor(theHandle: Handle_VrmlData_TextureCoordinate);
  }

export declare class Handle_VrmlData_IndexedFaceSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_IndexedFaceSet): void;
  get(): VrmlData_IndexedFaceSet;
}

  export declare class Handle_VrmlData_IndexedFaceSet_1 extends Handle_VrmlData_IndexedFaceSet {
    constructor();
  }

  export declare class Handle_VrmlData_IndexedFaceSet_2 extends Handle_VrmlData_IndexedFaceSet {
    constructor(thePtr: VrmlData_IndexedFaceSet);
  }

  export declare class Handle_VrmlData_IndexedFaceSet_3 extends Handle_VrmlData_IndexedFaceSet {
    constructor(theHandle: Handle_VrmlData_IndexedFaceSet);
  }

  export declare class Handle_VrmlData_IndexedFaceSet_4 extends Handle_VrmlData_IndexedFaceSet {
    constructor(theHandle: Handle_VrmlData_IndexedFaceSet);
  }

export declare class Handle_VrmlData_IndexedLineSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_IndexedLineSet): void;
  get(): VrmlData_IndexedLineSet;
}

  export declare class Handle_VrmlData_IndexedLineSet_1 extends Handle_VrmlData_IndexedLineSet {
    constructor();
  }

  export declare class Handle_VrmlData_IndexedLineSet_2 extends Handle_VrmlData_IndexedLineSet {
    constructor(thePtr: VrmlData_IndexedLineSet);
  }

  export declare class Handle_VrmlData_IndexedLineSet_3 extends Handle_VrmlData_IndexedLineSet {
    constructor(theHandle: Handle_VrmlData_IndexedLineSet);
  }

  export declare class Handle_VrmlData_IndexedLineSet_4 extends Handle_VrmlData_IndexedLineSet {
    constructor(theHandle: Handle_VrmlData_IndexedLineSet);
  }

export declare class Handle_VrmlData_WorldInfo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_WorldInfo): void;
  get(): VrmlData_WorldInfo;
}

  export declare class Handle_VrmlData_WorldInfo_1 extends Handle_VrmlData_WorldInfo {
    constructor();
  }

  export declare class Handle_VrmlData_WorldInfo_2 extends Handle_VrmlData_WorldInfo {
    constructor(thePtr: VrmlData_WorldInfo);
  }

  export declare class Handle_VrmlData_WorldInfo_3 extends Handle_VrmlData_WorldInfo {
    constructor(theHandle: Handle_VrmlData_WorldInfo);
  }

  export declare class Handle_VrmlData_WorldInfo_4 extends Handle_VrmlData_WorldInfo {
    constructor(theHandle: Handle_VrmlData_WorldInfo);
  }

export declare class Handle_VrmlData_ShapeNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_ShapeNode): void;
  get(): VrmlData_ShapeNode;
}

  export declare class Handle_VrmlData_ShapeNode_1 extends Handle_VrmlData_ShapeNode {
    constructor();
  }

  export declare class Handle_VrmlData_ShapeNode_2 extends Handle_VrmlData_ShapeNode {
    constructor(thePtr: VrmlData_ShapeNode);
  }

  export declare class Handle_VrmlData_ShapeNode_3 extends Handle_VrmlData_ShapeNode {
    constructor(theHandle: Handle_VrmlData_ShapeNode);
  }

  export declare class Handle_VrmlData_ShapeNode_4 extends Handle_VrmlData_ShapeNode {
    constructor(theHandle: Handle_VrmlData_ShapeNode);
  }

export declare class Handle_VrmlData_Sphere {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_Sphere): void;
  get(): VrmlData_Sphere;
}

  export declare class Handle_VrmlData_Sphere_1 extends Handle_VrmlData_Sphere {
    constructor();
  }

  export declare class Handle_VrmlData_Sphere_2 extends Handle_VrmlData_Sphere {
    constructor(thePtr: VrmlData_Sphere);
  }

  export declare class Handle_VrmlData_Sphere_3 extends Handle_VrmlData_Sphere {
    constructor(theHandle: Handle_VrmlData_Sphere);
  }

  export declare class Handle_VrmlData_Sphere_4 extends Handle_VrmlData_Sphere {
    constructor(theHandle: Handle_VrmlData_Sphere);
  }

export declare class Handle_VrmlData_UnknownNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: VrmlData_UnknownNode): void;
  get(): VrmlData_UnknownNode;
}

  export declare class Handle_VrmlData_UnknownNode_1 extends Handle_VrmlData_UnknownNode {
    constructor();
  }

  export declare class Handle_VrmlData_UnknownNode_2 extends Handle_VrmlData_UnknownNode {
    constructor(thePtr: VrmlData_UnknownNode);
  }

  export declare class Handle_VrmlData_UnknownNode_3 extends Handle_VrmlData_UnknownNode {
    constructor(theHandle: Handle_VrmlData_UnknownNode);
  }

  export declare class Handle_VrmlData_UnknownNode_4 extends Handle_VrmlData_UnknownNode {
    constructor(theHandle: Handle_VrmlData_UnknownNode);
  }

export declare type Vrml_AsciiTextJustification = {
  Vrml_LEFT: {};
  Vrml_CENTER: {};
  Vrml_RIGHT: {};
}

export declare type Vrml_ConeParts = {
  Vrml_ConeSIDES: {};
  Vrml_ConeBOTTOM: {};
  Vrml_ConeALL: {};
}

export declare type Vrml_CylinderParts = {
  Vrml_CylinderSIDES: {};
  Vrml_CylinderTOP: {};
  Vrml_CylinderBOTTOM: {};
  Vrml_CylinderALL: {};
}

export declare type Vrml_FaceType = {
  Vrml_UNKNOWN_FACE_TYPE: {};
  Vrml_CONVEX: {};
}

export declare type Vrml_FontStyleFamily = {
  Vrml_SERIF: {};
  Vrml_SANS: {};
  Vrml_TYPEWRITER: {};
}

export declare type Vrml_FontStyleStyle = {
  Vrml_NONE: {};
  Vrml_BOLD: {};
  Vrml_ITALIC: {};
}

export declare type Vrml_MaterialBindingAndNormalBinding = {
  Vrml_DEFAULT: {};
  Vrml_OVERALL: {};
  Vrml_PER_PART: {};
  Vrml_PER_PART_INDEXED: {};
  Vrml_PER_FACE: {};
  Vrml_PER_FACE_INDEXED: {};
  Vrml_PER_VERTEX: {};
  Vrml_PER_VERTEX_INDEXED: {};
}

export declare type Vrml_SFImageNumber = {
  Vrml_NULL: {};
  Vrml_ONE: {};
  Vrml_TWO: {};
  Vrml_THREE: {};
  Vrml_FOUR: {};
}

export declare type Vrml_SeparatorRenderCulling = {
  Vrml_OFF: {};
  Vrml_ON: {};
  Vrml_AUTO: {};
}

export declare type Vrml_VertexOrdering = {
  Vrml_UNKNOWN_ORDERING: {};
  Vrml_CLOCKWISE: {};
  Vrml_COUNTERCLOCKWISE: {};
}

export declare type Vrml_ShapeType = {
  Vrml_UNKNOWN_SHAPE_TYPE: {};
  Vrml_SOLID: {};
}

export declare type Vrml_Texture2Wrap = {
  Vrml_REPEAT: {};
  Vrml_CLAMP: {};
}

export declare type Vrml_WWWAnchorMap = {
  Vrml_MAP_NONE: {};
  Vrml_POINT: {};
}

export declare type VrmlAPI_RepresentationOfShape = {
  VrmlAPI_ShadedRepresentation: {};
  VrmlAPI_WireFrameRepresentation: {};
  VrmlAPI_BothRepresentation: {};
}

export declare type VrmlConverter_TypeOfCamera = {
  VrmlConverter_NoCamera: {};
  VrmlConverter_PerspectiveCamera: {};
  VrmlConverter_OrthographicCamera: {};
}

export declare type VrmlConverter_TypeOfLight = {
  VrmlConverter_NoLight: {};
  VrmlConverter_DirectionLight: {};
  VrmlConverter_PointLight: {};
  VrmlConverter_SpotLight: {};
}

export declare type VrmlData_ErrorStatus = {
  VrmlData_StatusOK: {};
  VrmlData_EmptyData: {};
  VrmlData_UnrecoverableError: {};
  VrmlData_GeneralError: {};
  VrmlData_EndOfFile: {};
  VrmlData_NotVrmlFile: {};
  VrmlData_CannotOpenFile: {};
  VrmlData_VrmlFormatError: {};
  VrmlData_NumericInputError: {};
  VrmlData_IrrelevantNumber: {};
  VrmlData_BooleanInputError: {};
  VrmlData_StringInputError: {};
  VrmlData_NodeNameUnknown: {};
  VrmlData_NonPositiveSize: {};
  VrmlData_ReadUnknownNode: {};
  VrmlData_NonSupportedFeature: {};
  VrmlData_OutputStreamUndefined: {};
  VrmlData_NotImplemented: {};
}

export declare type TKVRMLLib = {
  Vrml_AsciiText_1: typeof Vrml_AsciiText_1;
  Vrml_AsciiText_2: typeof Vrml_AsciiText_2;
  Vrml_Cone: typeof Vrml_Cone;
  Vrml_Coordinate3_1: typeof Vrml_Coordinate3_1;
  Vrml_Coordinate3_2: typeof Vrml_Coordinate3_2;
  Vrml_Cube: typeof Vrml_Cube;
  Vrml_Cylinder: typeof Vrml_Cylinder;
  Vrml_DirectionalLight_1: typeof Vrml_DirectionalLight_1;
  Vrml_DirectionalLight_2: typeof Vrml_DirectionalLight_2;
  Vrml_FontStyle: typeof Vrml_FontStyle;
  Vrml_Group: typeof Vrml_Group;
  Vrml_IndexedFaceSet_1: typeof Vrml_IndexedFaceSet_1;
  Vrml_IndexedFaceSet_2: typeof Vrml_IndexedFaceSet_2;
  Vrml_IndexedLineSet_1: typeof Vrml_IndexedLineSet_1;
  Vrml_IndexedLineSet_2: typeof Vrml_IndexedLineSet_2;
  Vrml_Info: typeof Vrml_Info;
  Vrml_Instancing: typeof Vrml_Instancing;
  Vrml_LOD_1: typeof Vrml_LOD_1;
  Vrml_LOD_2: typeof Vrml_LOD_2;
  Vrml_Material_1: typeof Vrml_Material_1;
  Vrml_Material_2: typeof Vrml_Material_2;
  Vrml_MaterialBinding_1: typeof Vrml_MaterialBinding_1;
  Vrml_MaterialBinding_2: typeof Vrml_MaterialBinding_2;
  Vrml_MatrixTransform_1: typeof Vrml_MatrixTransform_1;
  Vrml_MatrixTransform_2: typeof Vrml_MatrixTransform_2;
  Vrml_Normal_1: typeof Vrml_Normal_1;
  Vrml_Normal_2: typeof Vrml_Normal_2;
  Vrml_NormalBinding_1: typeof Vrml_NormalBinding_1;
  Vrml_NormalBinding_2: typeof Vrml_NormalBinding_2;
  Vrml_SFRotation_1: typeof Vrml_SFRotation_1;
  Vrml_SFRotation_2: typeof Vrml_SFRotation_2;
  Vrml_OrthographicCamera_1: typeof Vrml_OrthographicCamera_1;
  Vrml_OrthographicCamera_2: typeof Vrml_OrthographicCamera_2;
  Vrml_PerspectiveCamera_1: typeof Vrml_PerspectiveCamera_1;
  Vrml_PerspectiveCamera_2: typeof Vrml_PerspectiveCamera_2;
  Vrml_PointLight_1: typeof Vrml_PointLight_1;
  Vrml_PointLight_2: typeof Vrml_PointLight_2;
  Vrml_PointSet: typeof Vrml_PointSet;
  Vrml_Rotation_1: typeof Vrml_Rotation_1;
  Vrml_Rotation_2: typeof Vrml_Rotation_2;
  Vrml_SFImage_1: typeof Vrml_SFImage_1;
  Vrml_SFImage_2: typeof Vrml_SFImage_2;
  Vrml_Scale_1: typeof Vrml_Scale_1;
  Vrml_Scale_2: typeof Vrml_Scale_2;
  Vrml_Separator_1: typeof Vrml_Separator_1;
  Vrml_Separator_2: typeof Vrml_Separator_2;
  Vrml_ShapeHints: typeof Vrml_ShapeHints;
  Vrml_Sphere: typeof Vrml_Sphere;
  Vrml_SpotLight_1: typeof Vrml_SpotLight_1;
  Vrml_SpotLight_2: typeof Vrml_SpotLight_2;
  Vrml_Switch: typeof Vrml_Switch;
  Vrml_Texture2_1: typeof Vrml_Texture2_1;
  Vrml_Texture2_2: typeof Vrml_Texture2_2;
  Vrml_Texture2Transform_1: typeof Vrml_Texture2Transform_1;
  Vrml_Texture2Transform_2: typeof Vrml_Texture2Transform_2;
  Vrml_TextureCoordinate2_1: typeof Vrml_TextureCoordinate2_1;
  Vrml_TextureCoordinate2_2: typeof Vrml_TextureCoordinate2_2;
  Vrml_Transform_1: typeof Vrml_Transform_1;
  Vrml_Transform_2: typeof Vrml_Transform_2;
  Vrml_TransformSeparator: typeof Vrml_TransformSeparator;
  Vrml_Translation_1: typeof Vrml_Translation_1;
  Vrml_Translation_2: typeof Vrml_Translation_2;
  Vrml_WWWAnchor: typeof Vrml_WWWAnchor;
  Vrml_WWWInline_1: typeof Vrml_WWWInline_1;
  Vrml_WWWInline_2: typeof Vrml_WWWInline_2;
  VrmlAPI_Writer: typeof VrmlAPI_Writer;
  VrmlConverter_Drawer: typeof VrmlConverter_Drawer;
  VrmlConverter_LineAspect_1: typeof VrmlConverter_LineAspect_1;
  VrmlConverter_LineAspect_2: typeof VrmlConverter_LineAspect_2;
  VrmlConverter_IsoAspect_1: typeof VrmlConverter_IsoAspect_1;
  VrmlConverter_IsoAspect_2: typeof VrmlConverter_IsoAspect_2;
  VrmlConverter_PointAspect_1: typeof VrmlConverter_PointAspect_1;
  VrmlConverter_PointAspect_2: typeof VrmlConverter_PointAspect_2;
  VrmlConverter_Projector: typeof VrmlConverter_Projector;
  VrmlConverter_ShadingAspect: typeof VrmlConverter_ShadingAspect;
  VrmlData_Material_1: typeof VrmlData_Material_1;
  VrmlData_Material_2: typeof VrmlData_Material_2;
  VrmlData_Appearance_1: typeof VrmlData_Appearance_1;
  VrmlData_Appearance_2: typeof VrmlData_Appearance_2;
  VrmlData_Box_1: typeof VrmlData_Box_1;
  VrmlData_Box_2: typeof VrmlData_Box_2;
  VrmlData_Color_1: typeof VrmlData_Color_1;
  VrmlData_Color_2: typeof VrmlData_Color_2;
  VrmlData_Cone_1: typeof VrmlData_Cone_1;
  VrmlData_Cone_2: typeof VrmlData_Cone_2;
  VrmlData_Coordinate_1: typeof VrmlData_Coordinate_1;
  VrmlData_Coordinate_2: typeof VrmlData_Coordinate_2;
  VrmlData_Cylinder_1: typeof VrmlData_Cylinder_1;
  VrmlData_Cylinder_2: typeof VrmlData_Cylinder_2;
  VrmlData_Group_1: typeof VrmlData_Group_1;
  VrmlData_Group_2: typeof VrmlData_Group_2;
  VrmlData_ImageTexture_1: typeof VrmlData_ImageTexture_1;
  VrmlData_ImageTexture_2: typeof VrmlData_ImageTexture_2;
  VrmlData_Normal_1: typeof VrmlData_Normal_1;
  VrmlData_Normal_2: typeof VrmlData_Normal_2;
  VrmlData_TextureCoordinate_1: typeof VrmlData_TextureCoordinate_1;
  VrmlData_TextureCoordinate_2: typeof VrmlData_TextureCoordinate_2;
  VrmlData_WorldInfo_1: typeof VrmlData_WorldInfo_1;
  VrmlData_WorldInfo_2: typeof VrmlData_WorldInfo_2;
  VrmlData_ShapeConvert: typeof VrmlData_ShapeConvert;
  VrmlData_ShapeNode_1: typeof VrmlData_ShapeNode_1;
  VrmlData_ShapeNode_2: typeof VrmlData_ShapeNode_2;
  VrmlData_Sphere_1: typeof VrmlData_Sphere_1;
  VrmlData_Sphere_2: typeof VrmlData_Sphere_2;
  VrmlData_UnknownNode_1: typeof VrmlData_UnknownNode_1;
  VrmlData_UnknownNode_2: typeof VrmlData_UnknownNode_2;
  Handle_Vrml_AsciiText_1: typeof Handle_Vrml_AsciiText_1;
  Handle_Vrml_AsciiText_2: typeof Handle_Vrml_AsciiText_2;
  Handle_Vrml_AsciiText_3: typeof Handle_Vrml_AsciiText_3;
  Handle_Vrml_AsciiText_4: typeof Handle_Vrml_AsciiText_4;
  Handle_Vrml_Coordinate3_1: typeof Handle_Vrml_Coordinate3_1;
  Handle_Vrml_Coordinate3_2: typeof Handle_Vrml_Coordinate3_2;
  Handle_Vrml_Coordinate3_3: typeof Handle_Vrml_Coordinate3_3;
  Handle_Vrml_Coordinate3_4: typeof Handle_Vrml_Coordinate3_4;
  Handle_Vrml_IndexedFaceSet_1: typeof Handle_Vrml_IndexedFaceSet_1;
  Handle_Vrml_IndexedFaceSet_2: typeof Handle_Vrml_IndexedFaceSet_2;
  Handle_Vrml_IndexedFaceSet_3: typeof Handle_Vrml_IndexedFaceSet_3;
  Handle_Vrml_IndexedFaceSet_4: typeof Handle_Vrml_IndexedFaceSet_4;
  Handle_Vrml_IndexedLineSet_1: typeof Handle_Vrml_IndexedLineSet_1;
  Handle_Vrml_IndexedLineSet_2: typeof Handle_Vrml_IndexedLineSet_2;
  Handle_Vrml_IndexedLineSet_3: typeof Handle_Vrml_IndexedLineSet_3;
  Handle_Vrml_IndexedLineSet_4: typeof Handle_Vrml_IndexedLineSet_4;
  Handle_Vrml_LOD_1: typeof Handle_Vrml_LOD_1;
  Handle_Vrml_LOD_2: typeof Handle_Vrml_LOD_2;
  Handle_Vrml_LOD_3: typeof Handle_Vrml_LOD_3;
  Handle_Vrml_LOD_4: typeof Handle_Vrml_LOD_4;
  Handle_Vrml_Material_1: typeof Handle_Vrml_Material_1;
  Handle_Vrml_Material_2: typeof Handle_Vrml_Material_2;
  Handle_Vrml_Material_3: typeof Handle_Vrml_Material_3;
  Handle_Vrml_Material_4: typeof Handle_Vrml_Material_4;
  Handle_Vrml_Normal_1: typeof Handle_Vrml_Normal_1;
  Handle_Vrml_Normal_2: typeof Handle_Vrml_Normal_2;
  Handle_Vrml_Normal_3: typeof Handle_Vrml_Normal_3;
  Handle_Vrml_Normal_4: typeof Handle_Vrml_Normal_4;
  Handle_Vrml_SFImage_1: typeof Handle_Vrml_SFImage_1;
  Handle_Vrml_SFImage_2: typeof Handle_Vrml_SFImage_2;
  Handle_Vrml_SFImage_3: typeof Handle_Vrml_SFImage_3;
  Handle_Vrml_SFImage_4: typeof Handle_Vrml_SFImage_4;
  Handle_Vrml_TextureCoordinate2_1: typeof Handle_Vrml_TextureCoordinate2_1;
  Handle_Vrml_TextureCoordinate2_2: typeof Handle_Vrml_TextureCoordinate2_2;
  Handle_Vrml_TextureCoordinate2_3: typeof Handle_Vrml_TextureCoordinate2_3;
  Handle_Vrml_TextureCoordinate2_4: typeof Handle_Vrml_TextureCoordinate2_4;
  Handle_VrmlConverter_Drawer_1: typeof Handle_VrmlConverter_Drawer_1;
  Handle_VrmlConverter_Drawer_2: typeof Handle_VrmlConverter_Drawer_2;
  Handle_VrmlConverter_Drawer_3: typeof Handle_VrmlConverter_Drawer_3;
  Handle_VrmlConverter_Drawer_4: typeof Handle_VrmlConverter_Drawer_4;
  Handle_VrmlConverter_LineAspect_1: typeof Handle_VrmlConverter_LineAspect_1;
  Handle_VrmlConverter_LineAspect_2: typeof Handle_VrmlConverter_LineAspect_2;
  Handle_VrmlConverter_LineAspect_3: typeof Handle_VrmlConverter_LineAspect_3;
  Handle_VrmlConverter_LineAspect_4: typeof Handle_VrmlConverter_LineAspect_4;
  Handle_VrmlConverter_IsoAspect_1: typeof Handle_VrmlConverter_IsoAspect_1;
  Handle_VrmlConverter_IsoAspect_2: typeof Handle_VrmlConverter_IsoAspect_2;
  Handle_VrmlConverter_IsoAspect_3: typeof Handle_VrmlConverter_IsoAspect_3;
  Handle_VrmlConverter_IsoAspect_4: typeof Handle_VrmlConverter_IsoAspect_4;
  Handle_VrmlConverter_PointAspect_1: typeof Handle_VrmlConverter_PointAspect_1;
  Handle_VrmlConverter_PointAspect_2: typeof Handle_VrmlConverter_PointAspect_2;
  Handle_VrmlConverter_PointAspect_3: typeof Handle_VrmlConverter_PointAspect_3;
  Handle_VrmlConverter_PointAspect_4: typeof Handle_VrmlConverter_PointAspect_4;
  Handle_VrmlConverter_Projector_1: typeof Handle_VrmlConverter_Projector_1;
  Handle_VrmlConverter_Projector_2: typeof Handle_VrmlConverter_Projector_2;
  Handle_VrmlConverter_Projector_3: typeof Handle_VrmlConverter_Projector_3;
  Handle_VrmlConverter_Projector_4: typeof Handle_VrmlConverter_Projector_4;
  Handle_VrmlConverter_ShadingAspect_1: typeof Handle_VrmlConverter_ShadingAspect_1;
  Handle_VrmlConverter_ShadingAspect_2: typeof Handle_VrmlConverter_ShadingAspect_2;
  Handle_VrmlConverter_ShadingAspect_3: typeof Handle_VrmlConverter_ShadingAspect_3;
  Handle_VrmlConverter_ShadingAspect_4: typeof Handle_VrmlConverter_ShadingAspect_4;
  Handle_VrmlData_Node_1: typeof Handle_VrmlData_Node_1;
  Handle_VrmlData_Node_2: typeof Handle_VrmlData_Node_2;
  Handle_VrmlData_Node_3: typeof Handle_VrmlData_Node_3;
  Handle_VrmlData_Node_4: typeof Handle_VrmlData_Node_4;
  Handle_VrmlData_Material_1: typeof Handle_VrmlData_Material_1;
  Handle_VrmlData_Material_2: typeof Handle_VrmlData_Material_2;
  Handle_VrmlData_Material_3: typeof Handle_VrmlData_Material_3;
  Handle_VrmlData_Material_4: typeof Handle_VrmlData_Material_4;
  Handle_VrmlData_Texture_1: typeof Handle_VrmlData_Texture_1;
  Handle_VrmlData_Texture_2: typeof Handle_VrmlData_Texture_2;
  Handle_VrmlData_Texture_3: typeof Handle_VrmlData_Texture_3;
  Handle_VrmlData_Texture_4: typeof Handle_VrmlData_Texture_4;
  Handle_VrmlData_TextureTransform_1: typeof Handle_VrmlData_TextureTransform_1;
  Handle_VrmlData_TextureTransform_2: typeof Handle_VrmlData_TextureTransform_2;
  Handle_VrmlData_TextureTransform_3: typeof Handle_VrmlData_TextureTransform_3;
  Handle_VrmlData_TextureTransform_4: typeof Handle_VrmlData_TextureTransform_4;
  Handle_VrmlData_Appearance_1: typeof Handle_VrmlData_Appearance_1;
  Handle_VrmlData_Appearance_2: typeof Handle_VrmlData_Appearance_2;
  Handle_VrmlData_Appearance_3: typeof Handle_VrmlData_Appearance_3;
  Handle_VrmlData_Appearance_4: typeof Handle_VrmlData_Appearance_4;
  Handle_VrmlData_ArrayVec3d_1: typeof Handle_VrmlData_ArrayVec3d_1;
  Handle_VrmlData_ArrayVec3d_2: typeof Handle_VrmlData_ArrayVec3d_2;
  Handle_VrmlData_ArrayVec3d_3: typeof Handle_VrmlData_ArrayVec3d_3;
  Handle_VrmlData_ArrayVec3d_4: typeof Handle_VrmlData_ArrayVec3d_4;
  Handle_VrmlData_Geometry_1: typeof Handle_VrmlData_Geometry_1;
  Handle_VrmlData_Geometry_2: typeof Handle_VrmlData_Geometry_2;
  Handle_VrmlData_Geometry_3: typeof Handle_VrmlData_Geometry_3;
  Handle_VrmlData_Geometry_4: typeof Handle_VrmlData_Geometry_4;
  Handle_VrmlData_Box_1: typeof Handle_VrmlData_Box_1;
  Handle_VrmlData_Box_2: typeof Handle_VrmlData_Box_2;
  Handle_VrmlData_Box_3: typeof Handle_VrmlData_Box_3;
  Handle_VrmlData_Box_4: typeof Handle_VrmlData_Box_4;
  Handle_VrmlData_Color_1: typeof Handle_VrmlData_Color_1;
  Handle_VrmlData_Color_2: typeof Handle_VrmlData_Color_2;
  Handle_VrmlData_Color_3: typeof Handle_VrmlData_Color_3;
  Handle_VrmlData_Color_4: typeof Handle_VrmlData_Color_4;
  Handle_VrmlData_Cone_1: typeof Handle_VrmlData_Cone_1;
  Handle_VrmlData_Cone_2: typeof Handle_VrmlData_Cone_2;
  Handle_VrmlData_Cone_3: typeof Handle_VrmlData_Cone_3;
  Handle_VrmlData_Cone_4: typeof Handle_VrmlData_Cone_4;
  Handle_VrmlData_Coordinate_1: typeof Handle_VrmlData_Coordinate_1;
  Handle_VrmlData_Coordinate_2: typeof Handle_VrmlData_Coordinate_2;
  Handle_VrmlData_Coordinate_3: typeof Handle_VrmlData_Coordinate_3;
  Handle_VrmlData_Coordinate_4: typeof Handle_VrmlData_Coordinate_4;
  Handle_VrmlData_Cylinder_1: typeof Handle_VrmlData_Cylinder_1;
  Handle_VrmlData_Cylinder_2: typeof Handle_VrmlData_Cylinder_2;
  Handle_VrmlData_Cylinder_3: typeof Handle_VrmlData_Cylinder_3;
  Handle_VrmlData_Cylinder_4: typeof Handle_VrmlData_Cylinder_4;
  Handle_VrmlData_Faceted_1: typeof Handle_VrmlData_Faceted_1;
  Handle_VrmlData_Faceted_2: typeof Handle_VrmlData_Faceted_2;
  Handle_VrmlData_Faceted_3: typeof Handle_VrmlData_Faceted_3;
  Handle_VrmlData_Faceted_4: typeof Handle_VrmlData_Faceted_4;
  Handle_VrmlData_Group_1: typeof Handle_VrmlData_Group_1;
  Handle_VrmlData_Group_2: typeof Handle_VrmlData_Group_2;
  Handle_VrmlData_Group_3: typeof Handle_VrmlData_Group_3;
  Handle_VrmlData_Group_4: typeof Handle_VrmlData_Group_4;
  Handle_VrmlData_ImageTexture_1: typeof Handle_VrmlData_ImageTexture_1;
  Handle_VrmlData_ImageTexture_2: typeof Handle_VrmlData_ImageTexture_2;
  Handle_VrmlData_ImageTexture_3: typeof Handle_VrmlData_ImageTexture_3;
  Handle_VrmlData_ImageTexture_4: typeof Handle_VrmlData_ImageTexture_4;
  Handle_VrmlData_Normal_1: typeof Handle_VrmlData_Normal_1;
  Handle_VrmlData_Normal_2: typeof Handle_VrmlData_Normal_2;
  Handle_VrmlData_Normal_3: typeof Handle_VrmlData_Normal_3;
  Handle_VrmlData_Normal_4: typeof Handle_VrmlData_Normal_4;
  Handle_VrmlData_TextureCoordinate_1: typeof Handle_VrmlData_TextureCoordinate_1;
  Handle_VrmlData_TextureCoordinate_2: typeof Handle_VrmlData_TextureCoordinate_2;
  Handle_VrmlData_TextureCoordinate_3: typeof Handle_VrmlData_TextureCoordinate_3;
  Handle_VrmlData_TextureCoordinate_4: typeof Handle_VrmlData_TextureCoordinate_4;
  Handle_VrmlData_IndexedFaceSet_1: typeof Handle_VrmlData_IndexedFaceSet_1;
  Handle_VrmlData_IndexedFaceSet_2: typeof Handle_VrmlData_IndexedFaceSet_2;
  Handle_VrmlData_IndexedFaceSet_3: typeof Handle_VrmlData_IndexedFaceSet_3;
  Handle_VrmlData_IndexedFaceSet_4: typeof Handle_VrmlData_IndexedFaceSet_4;
  Handle_VrmlData_IndexedLineSet_1: typeof Handle_VrmlData_IndexedLineSet_1;
  Handle_VrmlData_IndexedLineSet_2: typeof Handle_VrmlData_IndexedLineSet_2;
  Handle_VrmlData_IndexedLineSet_3: typeof Handle_VrmlData_IndexedLineSet_3;
  Handle_VrmlData_IndexedLineSet_4: typeof Handle_VrmlData_IndexedLineSet_4;
  Handle_VrmlData_WorldInfo_1: typeof Handle_VrmlData_WorldInfo_1;
  Handle_VrmlData_WorldInfo_2: typeof Handle_VrmlData_WorldInfo_2;
  Handle_VrmlData_WorldInfo_3: typeof Handle_VrmlData_WorldInfo_3;
  Handle_VrmlData_WorldInfo_4: typeof Handle_VrmlData_WorldInfo_4;
  Handle_VrmlData_ShapeNode_1: typeof Handle_VrmlData_ShapeNode_1;
  Handle_VrmlData_ShapeNode_2: typeof Handle_VrmlData_ShapeNode_2;
  Handle_VrmlData_ShapeNode_3: typeof Handle_VrmlData_ShapeNode_3;
  Handle_VrmlData_ShapeNode_4: typeof Handle_VrmlData_ShapeNode_4;
  Handle_VrmlData_Sphere_1: typeof Handle_VrmlData_Sphere_1;
  Handle_VrmlData_Sphere_2: typeof Handle_VrmlData_Sphere_2;
  Handle_VrmlData_Sphere_3: typeof Handle_VrmlData_Sphere_3;
  Handle_VrmlData_Sphere_4: typeof Handle_VrmlData_Sphere_4;
  Handle_VrmlData_UnknownNode_1: typeof Handle_VrmlData_UnknownNode_1;
  Handle_VrmlData_UnknownNode_2: typeof Handle_VrmlData_UnknownNode_2;
  Handle_VrmlData_UnknownNode_3: typeof Handle_VrmlData_UnknownNode_3;
  Handle_VrmlData_UnknownNode_4: typeof Handle_VrmlData_UnknownNode_4;
  Vrml_AsciiTextJustification: typeof Vrml_AsciiTextJustification;
  Vrml_ConeParts: typeof Vrml_ConeParts;
  Vrml_CylinderParts: typeof Vrml_CylinderParts;
  Vrml_FaceType: typeof Vrml_FaceType;
  Vrml_FontStyleFamily: typeof Vrml_FontStyleFamily;
  Vrml_FontStyleStyle: typeof Vrml_FontStyleStyle;
  Vrml_MaterialBindingAndNormalBinding: typeof Vrml_MaterialBindingAndNormalBinding;
  Vrml_SFImageNumber: typeof Vrml_SFImageNumber;
  Vrml_SeparatorRenderCulling: typeof Vrml_SeparatorRenderCulling;
  Vrml_VertexOrdering: typeof Vrml_VertexOrdering;
  Vrml_ShapeType: typeof Vrml_ShapeType;
  Vrml_Texture2Wrap: typeof Vrml_Texture2Wrap;
  Vrml_WWWAnchorMap: typeof Vrml_WWWAnchorMap;
  VrmlAPI_RepresentationOfShape: typeof VrmlAPI_RepresentationOfShape;
  VrmlConverter_TypeOfCamera: typeof VrmlConverter_TypeOfCamera;
  VrmlConverter_TypeOfLight: typeof VrmlConverter_TypeOfLight;
  VrmlData_ErrorStatus: typeof VrmlData_ErrorStatus;
};
