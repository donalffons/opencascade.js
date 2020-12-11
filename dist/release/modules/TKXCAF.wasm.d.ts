declare const libName = "./modules/TKXCAF.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class XCAFDoc_VisMaterial extends TDF_Attribute {
  constructor()
  get_type_name(): Standard_Character;
  get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): any;
  GetID(): Standard_GUID;
  IsEmpty(): boolean;
  FillMaterialAspect(theAspect: Graphic3d_MaterialAspect): void;
  FillAspect(theAspect: any): void;
  HasPbrMaterial(): Standard_Boolean;
  PbrMaterial(): XCAFDoc_VisMaterialPBR;
  SetPbrMaterial(theMaterial: XCAFDoc_VisMaterialPBR): void;
  UnsetPbrMaterial(): void;
  HasCommonMaterial(): Standard_Boolean;
  CommonMaterial(): XCAFDoc_VisMaterialCommon;
  SetCommonMaterial(theMaterial: XCAFDoc_VisMaterialCommon): void;
  UnsetCommonMaterial(): void;
  BaseColor(): Quantity_ColorRGBA;
  AlphaMode(): Graphic3d_AlphaMode;
  AlphaCutOff(): Standard_ShortReal;
  SetAlphaMode(theMode: Graphic3d_AlphaMode, theCutOff: Standard_ShortReal): void;
  IsDoubleSided(): Standard_Boolean;
  SetDoubleSided(theIsDoubleSided: Standard_Boolean): void;
  RawName(): any;
  SetRawName(theName: any): void;
  IsEqual(theOther: any): Standard_Boolean;
  ConvertToCommonMaterial(): XCAFDoc_VisMaterialCommon;
  ConvertToPbrMaterial(): XCAFDoc_VisMaterialPBR;
  ID(): Standard_GUID;
  Restore(theWith: any): void;
  NewEmpty(): any;
  Paste(theInto: any, theRelTable: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class XCAFPrs_Style {
  constructor()
  IsEmpty(): Standard_Boolean;
  Material(): any;
  SetMaterial(theMaterial: any): void;
  IsSetColorSurf(): Standard_Boolean;
  GetColorSurf(): Quantity_Color;
  SetColorSurf_1(theColor: Quantity_Color): void;
  GetColorSurfRGBA(): Quantity_ColorRGBA;
  SetColorSurf_2(theColor: Quantity_ColorRGBA): void;
  UnSetColorSurf(): void;
  IsSetColorCurv(): Standard_Boolean;
  GetColorCurv(): Quantity_Color;
  SetColorCurv(col: Quantity_Color): void;
  UnSetColorCurv(): void;
  SetVisibility(theVisibility: Standard_Boolean): void;
  IsVisible(): Standard_Boolean;
  IsEqual_1(theOther: XCAFPrs_Style): Standard_Boolean;
  HashCode(theStyle: XCAFPrs_Style, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual_2(theS1: XCAFPrs_Style, theS2: XCAFPrs_Style): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class XCAFPrs_DocumentExplorer {
  DefineChildId(theLabel: TDF_Label, theParentId: TCollection_AsciiString): TCollection_AsciiString;
  FindLabelFromPathId_1(theDocument: any, theId: TCollection_AsciiString, theParentLocation: TopLoc_Location, theLocation: TopLoc_Location): TDF_Label;
  FindLabelFromPathId_2(theDocument: any, theId: TCollection_AsciiString, theLocation: TopLoc_Location): TDF_Label;
  FindShapeFromPathId(theDocument: any, theId: TCollection_AsciiString): TopoDS_Shape;
  Init_1(theDocument: any, theRoot: TDF_Label, theFlags: XCAFPrs_DocumentExplorerFlags, theDefStyle: XCAFPrs_Style): void;
  Init_2(theDocument: any, theRoots: TDF_LabelSequence, theFlags: XCAFPrs_DocumentExplorerFlags, theDefStyle: XCAFPrs_Style): void;
  More(): Standard_Boolean;
  Current_1(): XCAFPrs_DocumentNode;
  ChangeCurrent(): XCAFPrs_DocumentNode;
  Current_2(theDepth: Standard_Integer): XCAFPrs_DocumentNode;
  CurrentDepth(): Standard_Integer;
  Next(): void;
  ColorTool(): any;
  VisMaterialTool(): any;
}

  export declare class XCAFPrs_DocumentExplorer_1 extends XCAFPrs_DocumentExplorer {
    constructor();
  }

  export declare class XCAFPrs_DocumentExplorer_2 extends XCAFPrs_DocumentExplorer {
    constructor(theDocument: any, theFlags: XCAFPrs_DocumentExplorerFlags, theDefStyle: XCAFPrs_Style);
  }

  export declare class XCAFPrs_DocumentExplorer_3 extends XCAFPrs_DocumentExplorer {
    constructor(theDocument: any, theRoots: TDF_LabelSequence, theFlags: XCAFPrs_DocumentExplorerFlags, theDefStyle: XCAFPrs_Style);
  }

export declare class XCAFDimTolObjects_GeomToleranceObject extends Standard_Transient {
  GetSemanticName(): any;
  SetSemanticName(theName: any): void;
  SetType(theType: XCAFDimTolObjects_GeomToleranceType): void;
  GetType(): XCAFDimTolObjects_GeomToleranceType;
  SetTypeOfValue(theTypeOfValue: XCAFDimTolObjects_GeomToleranceTypeValue): void;
  GetTypeOfValue(): XCAFDimTolObjects_GeomToleranceTypeValue;
  SetValue(theValue: Standard_Real): void;
  GetValue(): Standard_Real;
  SetMaterialRequirementModifier(theMatReqModif: XCAFDimTolObjects_GeomToleranceMatReqModif): void;
  GetMaterialRequirementModifier(): XCAFDimTolObjects_GeomToleranceMatReqModif;
  SetZoneModifier(theZoneModif: XCAFDimTolObjects_GeomToleranceZoneModif): void;
  GetZoneModifier(): XCAFDimTolObjects_GeomToleranceZoneModif;
  SetValueOfZoneModifier(theValue: Standard_Real): void;
  GetValueOfZoneModifier(): Standard_Real;
  SetModifiers(theModifiers: XCAFDimTolObjects_GeomToleranceModifiersSequence): void;
  AddModifier(theModifier: XCAFDimTolObjects_GeomToleranceModif): void;
  GetModifiers(): XCAFDimTolObjects_GeomToleranceModifiersSequence;
  SetMaxValueModifier(theModifier: Standard_Real): void;
  GetMaxValueModifier(): Standard_Real;
  SetAxis(theAxis: gp_Ax2): void;
  GetAxis(): gp_Ax2;
  HasAxis(): Standard_Boolean;
  SetPlane(thePlane: gp_Ax2): void;
  GetPlane(): gp_Ax2;
  SetPoint(thePnt: gp_Pnt): void;
  GetPoint(): gp_Pnt;
  SetPointTextAttach(thePntText: gp_Pnt): void;
  GetPointTextAttach(): gp_Pnt;
  HasPlane(): Standard_Boolean;
  HasPoint(): Standard_Boolean;
  HasPointText(): Standard_Boolean;
  SetPresentation(thePresentation: TopoDS_Shape, thePresentationName: any): void;
  GetPresentation(): TopoDS_Shape;
  GetPresentationName(): any;
  HasAffectedPlane(): boolean;
  GetAffectedPlaneType(): XCAFDimTolObjects_ToleranceZoneAffectedPlane;
  SetAffectedPlaneType(theType: XCAFDimTolObjects_ToleranceZoneAffectedPlane): void;
  SetAffectedPlane_1(thePlane: gp_Pln): void;
  SetAffectedPlane_2(thePlane: gp_Pln, theType: XCAFDimTolObjects_ToleranceZoneAffectedPlane): void;
  GetAffectedPlane(): gp_Pln;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class XCAFDimTolObjects_GeomToleranceObject_1 extends XCAFDimTolObjects_GeomToleranceObject {
    constructor();
  }

  export declare class XCAFDimTolObjects_GeomToleranceObject_2 extends XCAFDimTolObjects_GeomToleranceObject {
    constructor(theObj: any);
  }

export declare class XCAFDimTolObjects_DatumObject extends Standard_Transient {
  GetSemanticName(): any;
  SetSemanticName(theName: any): void;
  GetName(): any;
  SetName(theTag: any): void;
  GetModifiers(): XCAFDimTolObjects_DatumModifiersSequence;
  SetModifiers(theModifiers: XCAFDimTolObjects_DatumModifiersSequence): void;
  GetModifierWithValue(theModifier: XCAFDimTolObjects_DatumModifWithValue, theValue: Standard_Real): void;
  SetModifierWithValue(theModifier: XCAFDimTolObjects_DatumModifWithValue, theValue: Standard_Real): void;
  AddModifier(theModifier: XCAFDimTolObjects_DatumSingleModif): void;
  GetDatumTarget(): TopoDS_Shape;
  SetDatumTarget(theShape: TopoDS_Shape): void;
  GetPosition(): Standard_Integer;
  SetPosition(thePosition: Standard_Integer): void;
  IsDatumTarget_1(): Standard_Boolean;
  IsDatumTarget_2(theIsDT: Standard_Boolean): void;
  GetDatumTargetType(): XCAFDimTolObjects_DatumTargetType;
  SetDatumTargetType(theType: XCAFDimTolObjects_DatumTargetType): void;
  GetDatumTargetAxis(): gp_Ax2;
  SetDatumTargetAxis(theAxis: gp_Ax2): void;
  GetDatumTargetLength(): Standard_Real;
  SetDatumTargetLength(theLength: Standard_Real): void;
  GetDatumTargetWidth(): Standard_Real;
  SetDatumTargetWidth(theWidth: Standard_Real): void;
  GetDatumTargetNumber(): Standard_Integer;
  SetDatumTargetNumber(theNumber: Standard_Integer): void;
  SetPlane(thePlane: gp_Ax2): void;
  GetPlane(): gp_Ax2;
  SetPoint(thePnt: gp_Pnt): void;
  GetPoint(): gp_Pnt;
  SetPointTextAttach(thePntText: gp_Pnt): void;
  GetPointTextAttach(): gp_Pnt;
  HasPlane(): Standard_Boolean;
  HasPoint(): Standard_Boolean;
  HasPointText(): Standard_Boolean;
  SetPresentation(thePresentation: TopoDS_Shape, thePresentationName: any): void;
  GetPresentation(): TopoDS_Shape;
  GetPresentationName(): any;
  HasDatumTargetParams(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class XCAFDimTolObjects_DatumObject_1 extends XCAFDimTolObjects_DatumObject {
    constructor();
  }

  export declare class XCAFDimTolObjects_DatumObject_2 extends XCAFDimTolObjects_DatumObject {
    constructor(theObj: any);
  }

export declare class XCAFDimTolObjects_DimensionObject extends Standard_Transient {
  GetSemanticName(): any;
  SetSemanticName(theName: any): void;
  SetQualifier(theQualifier: XCAFDimTolObjects_DimensionQualifier): void;
  GetQualifier(): XCAFDimTolObjects_DimensionQualifier;
  HasQualifier(): Standard_Boolean;
  SetType(theTyupe: XCAFDimTolObjects_DimensionType): void;
  GetType(): XCAFDimTolObjects_DimensionType;
  GetValue(): Standard_Real;
  GetValues(): any;
  SetValue(theValue: Standard_Real): void;
  SetValues(theValue: any): void;
  IsDimWithRange(): Standard_Boolean;
  SetUpperBound(theUpperBound: Standard_Real): void;
  SetLowerBound(theLowerBound: Standard_Real): void;
  GetUpperBound(): Standard_Real;
  GetLowerBound(): Standard_Real;
  IsDimWithPlusMinusTolerance(): Standard_Boolean;
  SetUpperTolValue(theUperTolValue: Standard_Real): Standard_Boolean;
  SetLowerTolValue(theLowerTolValue: Standard_Real): Standard_Boolean;
  GetUpperTolValue(): Standard_Real;
  GetLowerTolValue(): Standard_Real;
  IsDimWithClassOfTolerance(): Standard_Boolean;
  SetClassOfTolerance(theHole: Standard_Boolean, theFormVariance: XCAFDimTolObjects_DimensionFormVariance, theGrade: XCAFDimTolObjects_DimensionGrade): void;
  GetClassOfTolerance(theHole: Standard_Boolean, theFormVariance: XCAFDimTolObjects_DimensionFormVariance, theGrade: XCAFDimTolObjects_DimensionGrade): Standard_Boolean;
  SetNbOfDecimalPlaces(theL: Standard_Integer, theR: Standard_Integer): void;
  GetNbOfDecimalPlaces(theL: Standard_Integer, theR: Standard_Integer): void;
  GetModifiers(): XCAFDimTolObjects_DimensionModifiersSequence;
  SetModifiers(theModifiers: XCAFDimTolObjects_DimensionModifiersSequence): void;
  AddModifier(theModifier: XCAFDimTolObjects_DimensionModif): void;
  GetPath(): TopoDS_Edge;
  SetPath(thePath: TopoDS_Edge): void;
  GetDirection(theDir: gp_Dir): Standard_Boolean;
  SetDirection(theDir: gp_Dir): Standard_Boolean;
  SetPointTextAttach(thePntText: gp_Pnt): void;
  GetPointTextAttach(): gp_Pnt;
  HasTextPoint(): Standard_Boolean;
  SetPlane(thePlane: gp_Ax2): void;
  GetPlane(): gp_Ax2;
  HasPlane(): Standard_Boolean;
  HasPoint(): Standard_Boolean;
  HasPoint2(): Standard_Boolean;
  SetPoint(thePnt: gp_Pnt): void;
  SetPoint2(thePnt: gp_Pnt): void;
  GetPoint(): gp_Pnt;
  GetPoint2(): gp_Pnt;
  SetPresentation(thePresentation: TopoDS_Shape, thePresentationName: any): void;
  GetPresentation(): TopoDS_Shape;
  GetPresentationName(): any;
  HasDescriptions(): Standard_Boolean;
  NbDescriptions(): Standard_Integer;
  GetDescription(theNumber: Standard_Integer): any;
  GetDescriptionName(theNumber: Standard_Integer): any;
  RemoveDescription(theNumber: Standard_Integer): void;
  AddDescription(theDescription: any, theName: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class XCAFDimTolObjects_DimensionObject_1 extends XCAFDimTolObjects_DimensionObject {
    constructor();
  }

  export declare class XCAFDimTolObjects_DimensionObject_2 extends XCAFDimTolObjects_DimensionObject {
    constructor(theObj: any);
  }

export declare class XCAFDoc_DimTolTool extends TDataStd_GenericEmpty {
  constructor()
  Set(L: TDF_Label): any;
  GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): any;
  IsDimension(theLab: TDF_Label): Standard_Boolean;
  GetDimensionLabels(theLabels: TDF_LabelSequence): void;
  SetDimension_1(theFirstLS: TDF_LabelSequence, theSecondLS: TDF_LabelSequence, theDimL: TDF_Label): void;
  SetDimension_2(theFirstL: TDF_Label, theSecondL: TDF_Label, theDimL: TDF_Label): void;
  SetDimension_3(theL: TDF_Label, theDimL: TDF_Label): void;
  GetRefDimensionLabels(theShapeL: TDF_Label, theDimensions: TDF_LabelSequence): Standard_Boolean;
  AddDimension(): TDF_Label;
  IsGeomTolerance(theLab: TDF_Label): Standard_Boolean;
  GetGeomToleranceLabels(theLabels: TDF_LabelSequence): void;
  SetGeomTolerance_1(theL: TDF_Label, theGeomTolL: TDF_Label): void;
  SetGeomTolerance_2(theL: TDF_LabelSequence, theGeomTolL: TDF_Label): void;
  GetRefGeomToleranceLabels(theShapeL: TDF_Label, theDimTols: TDF_LabelSequence): Standard_Boolean;
  AddGeomTolerance(): TDF_Label;
  IsDimTol(theLab: TDF_Label): Standard_Boolean;
  GetDimTolLabels(Labels: TDF_LabelSequence): void;
  FindDimTol_1(theKind: Standard_Integer, theVal: any, theName: any, theDescription: any, lab: TDF_Label): Standard_Boolean;
  FindDimTol_2(theKind: Standard_Integer, theVal: any, theName: any, theDescription: any): TDF_Label;
  AddDimTol(theKind: Standard_Integer, theVal: any, theName: any, theDescription: any): TDF_Label;
  SetDimTol_1(theL: TDF_Label, theDimTolL: TDF_Label): void;
  SetDimTol_2(theL: TDF_Label, theKind: Standard_Integer, theVal: any, theName: any, theDescription: any): TDF_Label;
  GetRefShapeLabel(theL: TDF_Label, theShapeLFirst: TDF_LabelSequence, theShapeLSecond: TDF_LabelSequence): Standard_Boolean;
  GetDimTol(theDimTolL: TDF_Label, theKind: Standard_Integer, theVal: any, theName: any, theDescription: any): Standard_Boolean;
  IsDatum(lab: TDF_Label): Standard_Boolean;
  GetDatumLabels(Labels: TDF_LabelSequence): void;
  FindDatum(theName: any, theDescription: any, theIdentification: any, lab: TDF_Label): Standard_Boolean;
  AddDatum_1(theName: any, theDescription: any, theIdentification: any): TDF_Label;
  AddDatum_2(): TDF_Label;
  SetDatum_1(theShapeLabels: TDF_LabelSequence, theDatumL: TDF_Label): void;
  SetDatum_2(theL: TDF_Label, theTolerL: TDF_Label, theName: any, theDescription: any, theIdentification: any): void;
  SetDatumToGeomTol(theDatumL: TDF_Label, theTolerL: TDF_Label): void;
  GetDatum(theDatumL: TDF_Label, theName: any, theDescription: any, theIdentification: any): Standard_Boolean;
  GetDatumOfTolerLabels(theDimTolL: TDF_Label, theDatums: TDF_LabelSequence): Standard_Boolean;
  GetDatumWithObjectOfTolerLabels(theDimTolL: TDF_Label, theDatums: TDF_LabelSequence): Standard_Boolean;
  GetTolerOfDatumLabels(theDatumL: TDF_Label, theTols: TDF_LabelSequence): Standard_Boolean;
  GetRefDatumLabel(theShapeL: TDF_Label, theDatum: TDF_LabelSequence): Standard_Boolean;
  IsLocked(theViewL: TDF_Label): Standard_Boolean;
  Lock(theViewL: TDF_Label): void;
  GetGDTPresentations(theGDTLabelToShape: NCollection_IndexedDataMap<TDF_Label, TopoDS_Shape, TDF_LabelMapHasher>): void;
  SetGDTPresentations(theGDTLabelToPrs: NCollection_IndexedDataMap<TDF_Label, TopoDS_Shape, TDF_LabelMapHasher>): void;
  Unlock(theViewL: TDF_Label): void;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDimTolObjects_Tool {
  constructor(theDoc: any)
  GetDimensions(theDimensionObjectSequence: XCAFDimTolObjects_DimensionObjectSequence): void;
  GetRefDimensions(theShape: TopoDS_Shape, theDimensions: XCAFDimTolObjects_DimensionObjectSequence): Standard_Boolean;
  GetGeomTolerances(theGeomToleranceObjectSequence: XCAFDimTolObjects_GeomToleranceObjectSequence, theDatumObjectSequence: XCAFDimTolObjects_DatumObjectSequence, theMap: XCAFDimTolObjects_DataMapOfToleranceDatum): void;
  GetRefGeomTolerances(theShape: TopoDS_Shape, theGeomToleranceObjectSequence: XCAFDimTolObjects_GeomToleranceObjectSequence, theDatumObjectSequence: XCAFDimTolObjects_DatumObjectSequence, theMap: XCAFDimTolObjects_DataMapOfToleranceDatum): Standard_Boolean;
  GetRefDatum(theShape: TopoDS_Shape, theDatum: any): Standard_Boolean;
}

export declare class XCAFDoc {
  constructor();
  AssemblyGUID(): Standard_GUID;
  ShapeRefGUID(): Standard_GUID;
  ColorRefGUID(type: XCAFDoc_ColorType): Standard_GUID;
  DimTolRefGUID(): Standard_GUID;
  DimensionRefFirstGUID(): Standard_GUID;
  DimensionRefSecondGUID(): Standard_GUID;
  GeomToleranceRefGUID(): Standard_GUID;
  DatumRefGUID(): Standard_GUID;
  DatumTolRefGUID(): Standard_GUID;
  LayerRefGUID(): Standard_GUID;
  MaterialRefGUID(): Standard_GUID;
  VisMaterialRefGUID(): Standard_GUID;
  NoteRefGUID(): Standard_GUID;
  InvisibleGUID(): Standard_GUID;
  ColorByLayerGUID(): Standard_GUID;
  ExternRefGUID(): Standard_GUID;
  SHUORefGUID(): Standard_GUID;
  ViewRefGUID(): Standard_GUID;
  ViewRefShapeGUID(): Standard_GUID;
  ViewRefGDTGUID(): Standard_GUID;
  ViewRefPlaneGUID(): Standard_GUID;
  ViewRefNoteGUID(): Standard_GUID;
  ViewRefAnnotationGUID(): Standard_GUID;
  LockGUID(): Standard_GUID;
}

export declare class XCAFDoc_Area extends TDataStd_Real {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set_1(vol: Standard_Real): void;
  Set_2(label: TDF_Label, area: Standard_Real): any;
  Get_1(): Standard_Real;
  Get_2(label: TDF_Label, area: Standard_Real): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_AssemblyItemId {
  Init_1(thePath: TColStd_ListOfAsciiString): void;
  Init_2(theString: TCollection_AsciiString): void;
  IsNull(): Standard_Boolean;
  Nullify(): void;
  IsChild(theOther: XCAFDoc_AssemblyItemId): Standard_Boolean;
  IsDirectChild(theOther: XCAFDoc_AssemblyItemId): Standard_Boolean;
  IsEqual(theOther: XCAFDoc_AssemblyItemId): Standard_Boolean;
  GetPath(): TColStd_ListOfAsciiString;
  ToString(): TCollection_AsciiString;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class XCAFDoc_AssemblyItemId_1 extends XCAFDoc_AssemblyItemId {
    constructor();
  }

  export declare class XCAFDoc_AssemblyItemId_2 extends XCAFDoc_AssemblyItemId {
    constructor(thePath: TColStd_ListOfAsciiString);
  }

  export declare class XCAFDoc_AssemblyItemId_3 extends XCAFDoc_AssemblyItemId {
    constructor(theString: TCollection_AsciiString);
  }

export declare class XCAFDoc_AssemblyItemRef extends TDF_Attribute {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Get(theLabel: TDF_Label): any;
  Set_1(theLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId): any;
  Set_2(theLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID): any;
  Set_3(theLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theShapeIndex: Standard_Integer): any;
  IsOrphan(): Standard_Boolean;
  HasExtraRef(): Standard_Boolean;
  IsGUID(): Standard_Boolean;
  IsSubshapeIndex(): Standard_Boolean;
  GetGUID(): Standard_GUID;
  GetSubshapeIndex(): Standard_Integer;
  GetItem(): XCAFDoc_AssemblyItemId;
  SetItem_1(theItemId: XCAFDoc_AssemblyItemId): void;
  SetItem_2(thePath: TColStd_ListOfAsciiString): void;
  SetItem_3(theString: TCollection_AsciiString): void;
  SetGUID(theAttrGUID: Standard_GUID): void;
  SetSubshapeIndex(theShapeIndex: Standard_Integer): void;
  ClearExtraRef(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  ID(): Standard_GUID;
  NewEmpty(): any;
  Restore(theAttrFrom: any): void;
  Paste(theAttrInto: any, theRT: any): void;
}

export declare class XCAFDoc_Centroid extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, pnt: gp_Pnt): any;
  Set_2(pnt: gp_Pnt): void;
  Get_1(): gp_Pnt;
  Get_2(label: TDF_Label, pnt: gp_Pnt): Standard_Boolean;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_ClippingPlaneTool extends TDataStd_GenericEmpty {
  constructor()
  Set(theLabel: TDF_Label): any;
  GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  IsClippingPlane(theLabel: TDF_Label): Standard_Boolean;
  GetClippingPlane_1(theLabel: TDF_Label, thePlane: gp_Pln, theName: TCollection_ExtendedString, theCapping: Standard_Boolean): Standard_Boolean;
  GetClippingPlane_2(theLabel: TDF_Label, thePlane: gp_Pln, theName: any, theCapping: Standard_Boolean): Standard_Boolean;
  AddClippingPlane_1(thePlane: gp_Pln, theName: TCollection_ExtendedString, theCapping: Standard_Boolean): TDF_Label;
  AddClippingPlane_2(thePlane: gp_Pln, theName: any, theCapping: Standard_Boolean): TDF_Label;
  AddClippingPlane_3(thePlane: gp_Pln, theName: TCollection_ExtendedString): TDF_Label;
  AddClippingPlane_4(thePlane: gp_Pln, theName: any): TDF_Label;
  RemoveClippingPlane(theLabel: TDF_Label): Standard_Boolean;
  GetClippingPlanes(Labels: TDF_LabelSequence): void;
  UpdateClippingPlane(theLabelL: TDF_Label, thePlane: gp_Pln, theName: TCollection_ExtendedString): void;
  SetCapping(theClippingPlaneL: TDF_Label, theCapping: Standard_Boolean): void;
  GetCapping_1(theClippingPlaneL: TDF_Label): Standard_Boolean;
  GetCapping_2(theClippingPlaneL: TDF_Label, theCapping: Standard_Boolean): Standard_Boolean;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_Color extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, C: Quantity_Color): any;
  Set_2(label: TDF_Label, C: Quantity_ColorRGBA): any;
  Set_3(label: TDF_Label, C: Quantity_NameOfColor): any;
  Set_4(label: TDF_Label, R: Standard_Real, G: Standard_Real, B: Standard_Real, alpha: Standard_Real): any;
  Set_5(C: Quantity_Color): void;
  Set_6(C: Quantity_ColorRGBA): void;
  Set_7(C: Quantity_NameOfColor): void;
  Set_8(R: Standard_Real, G: Standard_Real, B: Standard_Real, alpha: Standard_Real): void;
  GetColor(): Quantity_Color;
  GetColorRGBA(): Quantity_ColorRGBA;
  GetNOC(): Quantity_NameOfColor;
  GetRGB(R: Standard_Real, G: Standard_Real, B: Standard_Real): void;
  GetAlpha(): Standard_ShortReal;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_ColorTool extends TDataStd_GenericEmpty {
  constructor()
  AutoNaming(): Standard_Boolean;
  SetAutoNaming(theIsAutoNaming: Standard_Boolean): void;
  Set(L: TDF_Label): any;
  GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): any;
  IsColor(lab: TDF_Label): Standard_Boolean;
  GetColor_1(lab: TDF_Label, col: Quantity_Color): Standard_Boolean;
  GetColor_2(lab: TDF_Label, col: Quantity_ColorRGBA): Standard_Boolean;
  FindColor_1(col: Quantity_Color, lab: TDF_Label): Standard_Boolean;
  FindColor_2(col: Quantity_ColorRGBA, lab: TDF_Label): Standard_Boolean;
  FindColor_3(col: Quantity_Color): TDF_Label;
  FindColor_4(col: Quantity_ColorRGBA): TDF_Label;
  AddColor_1(col: Quantity_Color): TDF_Label;
  AddColor_2(col: Quantity_ColorRGBA): TDF_Label;
  RemoveColor(lab: TDF_Label): void;
  GetColors(Labels: TDF_LabelSequence): void;
  SetColor_1(L: TDF_Label, colorL: TDF_Label, type: XCAFDoc_ColorType): void;
  SetColor_2(L: TDF_Label, Color: Quantity_Color, type: XCAFDoc_ColorType): void;
  SetColor_3(L: TDF_Label, Color: Quantity_ColorRGBA, type: XCAFDoc_ColorType): void;
  UnSetColor_1(L: TDF_Label, type: XCAFDoc_ColorType): void;
  IsSet_1(L: TDF_Label, type: XCAFDoc_ColorType): Standard_Boolean;
  GetColor_3(L: TDF_Label, type: XCAFDoc_ColorType, colorL: TDF_Label): Standard_Boolean;
  GetColor_4(L: TDF_Label, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetColor_5(L: TDF_Label, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  SetColor_4(S: TopoDS_Shape, colorL: TDF_Label, type: XCAFDoc_ColorType): Standard_Boolean;
  SetColor_5(S: TopoDS_Shape, Color: Quantity_Color, type: XCAFDoc_ColorType): Standard_Boolean;
  SetColor_6(S: TopoDS_Shape, Color: Quantity_ColorRGBA, type: XCAFDoc_ColorType): Standard_Boolean;
  UnSetColor_2(S: TopoDS_Shape, type: XCAFDoc_ColorType): Standard_Boolean;
  IsSet_2(S: TopoDS_Shape, type: XCAFDoc_ColorType): Standard_Boolean;
  GetColor_6(S: TopoDS_Shape, type: XCAFDoc_ColorType, colorL: TDF_Label): Standard_Boolean;
  GetColor_7(S: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetColor_8(S: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  IsVisible(L: TDF_Label): Standard_Boolean;
  SetVisibility(shapeLabel: TDF_Label, isvisible: Standard_Boolean): void;
  IsColorByLayer(L: TDF_Label): Standard_Boolean;
  SetColorByLayer(shapeLabel: TDF_Label, isColorByLayer: Standard_Boolean): void;
  SetInstanceColor_1(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color, isCreateSHUO: Standard_Boolean): Standard_Boolean;
  SetInstanceColor_2(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA, isCreateSHUO: Standard_Boolean): Standard_Boolean;
  GetInstanceColor_1(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetInstanceColor_2(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  IsInstanceVisible(theShape: TopoDS_Shape): Standard_Boolean;
  ReverseChainsOfTreeNodes(): Standard_Boolean;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_Datum extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, aName: any, aDescription: any, anIdentification: any): any;
  Set_2(theLabel: TDF_Label): any;
  Set_3(aName: any, aDescription: any, anIdentification: any): void;
  GetName(): any;
  GetDescription(): any;
  GetIdentification(): any;
  GetObject(): any;
  SetObject(theDatumObject: any): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_DimTol extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, kind: Standard_Integer, aVal: any, aName: any, aDescription: any): any;
  Set_2(kind: Standard_Integer, aVal: any, aName: any, aDescription: any): void;
  GetKind(): Standard_Integer;
  GetVal(): any;
  GetName(): any;
  GetDescription(): any;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_Dimension extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set(theLabel: TDF_Label): any;
  ID(): Standard_GUID;
  SetObject(theDimensionObject: any): void;
  GetObject(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_DocumentTool extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set(L: TDF_Label, IsAcces: Standard_Boolean): any;
  IsXCAFDocument(Doc: any): Standard_Boolean;
  DocLabel(acces: TDF_Label): TDF_Label;
  ShapesLabel(acces: TDF_Label): TDF_Label;
  ColorsLabel(acces: TDF_Label): TDF_Label;
  LayersLabel(acces: TDF_Label): TDF_Label;
  DGTsLabel(acces: TDF_Label): TDF_Label;
  MaterialsLabel(acces: TDF_Label): TDF_Label;
  ViewsLabel(acces: TDF_Label): TDF_Label;
  ClippingPlanesLabel(acces: TDF_Label): TDF_Label;
  NotesLabel(acces: TDF_Label): TDF_Label;
  VisMaterialLabel(theLabel: TDF_Label): TDF_Label;
  ShapeTool(acces: TDF_Label): any;
  ColorTool(acces: TDF_Label): any;
  VisMaterialTool(theLabel: TDF_Label): any;
  LayerTool(acces: TDF_Label): any;
  DimTolTool(acces: TDF_Label): any;
  MaterialTool(acces: TDF_Label): any;
  ViewTool(acces: TDF_Label): any;
  ClippingPlaneTool(acces: TDF_Label): any;
  NotesTool(acces: TDF_Label): any;
  Init(): void;
  ID(): Standard_GUID;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_Editor {
  constructor();
  Expand_1(Doc: TDF_Label, Shape: TDF_Label, recursively: Standard_Boolean): Standard_Boolean;
  Expand_2(Doc: TDF_Label, recursively: Standard_Boolean): Standard_Boolean;
}

export declare class XCAFDoc_GraphNode extends TDF_Attribute {
  constructor()
  Find(L: TDF_Label, G: any): Standard_Boolean;
  Set_1(L: TDF_Label): any;
  Set_2(L: TDF_Label, ExplicitGraphID: Standard_GUID): any;
  GetDefaultGraphID(): Standard_GUID;
  SetGraphID(explicitID: Standard_GUID): void;
  SetFather(F: any): Standard_Integer;
  SetChild(Ch: any): Standard_Integer;
  UnSetFather_1(F: any): void;
  UnSetFather_2(Findex: Standard_Integer): void;
  UnSetChild_1(Ch: any): void;
  UnSetChild_2(Chindex: Standard_Integer): void;
  GetFather(Findex: Standard_Integer): any;
  GetChild(Chindex: Standard_Integer): any;
  FatherIndex(F: any): Standard_Integer;
  ChildIndex(Ch: any): Standard_Integer;
  IsFather(Ch: any): Standard_Boolean;
  IsChild(F: any): Standard_Boolean;
  NbFathers(): Standard_Integer;
  NbChildren(): Standard_Integer;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  NewEmpty(): any;
  References(aDataSet: any): void;
  BeforeForget(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_LayerTool extends TDataStd_GenericEmpty {
  constructor()
  Set(L: TDF_Label): any;
  GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): any;
  IsLayer(lab: TDF_Label): Standard_Boolean;
  GetLayer(lab: TDF_Label, aLayer: TCollection_ExtendedString): Standard_Boolean;
  FindLayer_1(aLayer: TCollection_ExtendedString, lab: TDF_Label): Standard_Boolean;
  FindLayer_2(aLayer: TCollection_ExtendedString): TDF_Label;
  AddLayer(aLayer: TCollection_ExtendedString): TDF_Label;
  RemoveLayer(lab: TDF_Label): void;
  GetLayerLabels(Labels: TDF_LabelSequence): void;
  SetLayer_1(L: TDF_Label, LayerL: TDF_Label, shapeInOneLayer: Standard_Boolean): void;
  SetLayer_2(L: TDF_Label, aLayer: TCollection_ExtendedString, shapeInOneLayer: Standard_Boolean): void;
  UnSetLayers_1(L: TDF_Label): void;
  UnSetOneLayer_1(L: TDF_Label, aLayer: TCollection_ExtendedString): Standard_Boolean;
  UnSetOneLayer_2(L: TDF_Label, aLayerL: TDF_Label): Standard_Boolean;
  IsSet_1(L: TDF_Label, aLayer: TCollection_ExtendedString): Standard_Boolean;
  IsSet_2(L: TDF_Label, aLayerL: TDF_Label): Standard_Boolean;
  GetLayers_1(L: TDF_Label, aLayerS: any): Standard_Boolean;
  GetLayers_2(L: TDF_Label, aLayerLS: TDF_LabelSequence): Standard_Boolean;
  GetLayers_3(L: TDF_Label): any;
  GetShapesOfLayer(layerL: TDF_Label, ShLabels: TDF_LabelSequence): void;
  IsVisible(layerL: TDF_Label): Standard_Boolean;
  SetVisibility(layerL: TDF_Label, isvisible: Standard_Boolean): void;
  SetLayer_3(Sh: TopoDS_Shape, LayerL: TDF_Label, shapeInOneLayer: Standard_Boolean): Standard_Boolean;
  SetLayer_4(Sh: TopoDS_Shape, aLayer: TCollection_ExtendedString, shapeInOneLayer: Standard_Boolean): Standard_Boolean;
  UnSetLayers_2(Sh: TopoDS_Shape): Standard_Boolean;
  UnSetOneLayer_3(Sh: TopoDS_Shape, aLayer: TCollection_ExtendedString): Standard_Boolean;
  UnSetOneLayer_4(Sh: TopoDS_Shape, aLayerL: TDF_Label): Standard_Boolean;
  IsSet_3(Sh: TopoDS_Shape, aLayer: TCollection_ExtendedString): Standard_Boolean;
  IsSet_4(Sh: TopoDS_Shape, aLayerL: TDF_Label): Standard_Boolean;
  GetLayers_4(Sh: TopoDS_Shape, aLayerS: any): Standard_Boolean;
  GetLayers_5(Sh: TopoDS_Shape, aLayerLS: TDF_LabelSequence): Standard_Boolean;
  GetLayers_6(Sh: TopoDS_Shape): any;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_Location extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, Loc: TopLoc_Location): any;
  Set_2(Loc: TopLoc_Location): void;
  Get(): TopLoc_Location;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_Material extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, aName: any, aDescription: any, aDensity: Standard_Real, aDensName: any, aDensValType: any): any;
  Set_2(aName: any, aDescription: any, aDensity: Standard_Real, aDensName: any, aDensValType: any): void;
  GetName(): any;
  GetDescription(): any;
  GetDensity(): Standard_Real;
  GetDensName(): any;
  GetDensValType(): any;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_MaterialTool extends TDataStd_GenericEmpty {
  constructor()
  Set(L: TDF_Label): any;
  GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): any;
  IsMaterial(lab: TDF_Label): Standard_Boolean;
  GetMaterialLabels(Labels: TDF_LabelSequence): void;
  AddMaterial(aName: any, aDescription: any, aDensity: Standard_Real, aDensName: any, aDensValType: any): TDF_Label;
  SetMaterial_1(L: TDF_Label, MatL: TDF_Label): void;
  SetMaterial_2(L: TDF_Label, aName: any, aDescription: any, aDensity: Standard_Real, aDensName: any, aDensValType: any): void;
  GetMaterial(MatL: TDF_Label, aName: any, aDescription: any, aDensity: Standard_Real, aDensName: any, aDensValType: any): Standard_Boolean;
  GetDensityForShape(ShapeL: TDF_Label): Standard_Real;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFNoteObjects_NoteObject extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  HasPlane(): Standard_Boolean;
  GetPlane(): gp_Ax2;
  SetPlane(thePlane: gp_Ax2): void;
  HasPoint(): Standard_Boolean;
  GetPoint(): gp_Pnt;
  SetPoint(thePnt: gp_Pnt): void;
  HasPointText(): Standard_Boolean;
  GetPointText(): gp_Pnt;
  SetPointText(thePnt: gp_Pnt): void;
  GetPresentation(): TopoDS_Shape;
  SetPresentation(thePresentation: TopoDS_Shape): void;
  Reset(): void;
}

  export declare class XCAFNoteObjects_NoteObject_1 extends XCAFNoteObjects_NoteObject {
    constructor();
  }

  export declare class XCAFNoteObjects_NoteObject_2 extends XCAFNoteObjects_NoteObject {
    constructor(theObj: any);
  }

export declare class XCAFDoc_Note extends TDF_Attribute {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsMine(theLabel: TDF_Label): Standard_Boolean;
  Get(theLabel: TDF_Label): any;
  Set(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString): void;
  UserName(): TCollection_ExtendedString;
  TimeStamp(): TCollection_ExtendedString;
  IsOrphan(): Standard_Boolean;
  GetObject(): any;
  SetObject(theObject: any): void;
  Restore(theAttrFrom: any): void;
  Paste(theAttrInto: any, theRT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class XCAFDoc_NoteComment extends XCAFDoc_Note {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Get(theLabel: TDF_Label): any;
  Set_1(theLabel: TDF_Label, theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theComment: TCollection_ExtendedString): any;
  Set_2(theComment: TCollection_ExtendedString): void;
  Comment(): TCollection_ExtendedString;
  ID(): Standard_GUID;
  NewEmpty(): any;
  Restore(theAttrFrom: any): void;
  Paste(theAttrInto: any, theRT: any): void;
}

export declare class XCAFDoc_NoteBalloon extends XCAFDoc_NoteComment {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  GetID(): Standard_GUID;
  Get(theLabel: TDF_Label): any;
  Set(theLabel: TDF_Label, theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theComment: TCollection_ExtendedString): any;
  ID(): Standard_GUID;
}

export declare class XCAFDoc_NoteBinData extends XCAFDoc_Note {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Get(theLabel: TDF_Label): any;
  Set_1(theLabel: TDF_Label, theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theTitle: TCollection_ExtendedString, theMIMEtype: TCollection_AsciiString, theFile: OSD_File): any;
  Set_2(theLabel: TDF_Label, theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theTitle: TCollection_ExtendedString, theMIMEtype: TCollection_AsciiString, theData: any): any;
  Set_3(theTitle: TCollection_ExtendedString, theMIMEtype: TCollection_AsciiString, theFile: OSD_File): Standard_Boolean;
  Set_4(theTitle: TCollection_ExtendedString, theMIMEtype: TCollection_AsciiString, theData: any): void;
  Title(): TCollection_ExtendedString;
  MIMEtype(): TCollection_AsciiString;
  Size(): Standard_Integer;
  Data(): any;
  ID(): Standard_GUID;
  NewEmpty(): any;
  Restore(theAttrFrom: any): void;
  Paste(theAttrInto: any, theRT: any): void;
}

export declare class XCAFDoc_NotesTool extends TDataStd_GenericEmpty {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  GetID(): Standard_GUID;
  Set(theLabel: TDF_Label): any;
  GetNotesLabel(): TDF_Label;
  GetAnnotatedItemsLabel(): TDF_Label;
  NbNotes(): Standard_Integer;
  NbAnnotatedItems(): Standard_Integer;
  GetNotes_1(theNoteLabels: TDF_LabelSequence): void;
  GetAnnotatedItems(theLabels: TDF_LabelSequence): void;
  IsAnnotatedItem_1(theItemId: XCAFDoc_AssemblyItemId): Standard_Boolean;
  IsAnnotatedItem_2(theItemLabel: TDF_Label): Standard_Boolean;
  FindAnnotatedItem_1(theItemId: XCAFDoc_AssemblyItemId): TDF_Label;
  FindAnnotatedItem_2(theItemLabel: TDF_Label): TDF_Label;
  FindAnnotatedItemAttr_1(theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID): TDF_Label;
  FindAnnotatedItemAttr_2(theItemLabel: TDF_Label, theGUID: Standard_GUID): TDF_Label;
  FindAnnotatedItemSubshape_1(theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Standard_Integer): TDF_Label;
  FindAnnotatedItemSubshape_2(theItemLabel: TDF_Label, theSubshapeIndex: Standard_Integer): TDF_Label;
  CreateComment(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theComment: TCollection_ExtendedString): any;
  CreateBalloon(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theComment: TCollection_ExtendedString): any;
  CreateBinData_1(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theTitle: TCollection_ExtendedString, theMIMEtype: TCollection_AsciiString, theFile: OSD_File): any;
  CreateBinData_2(theUserName: TCollection_ExtendedString, theTimeStamp: TCollection_ExtendedString, theTitle: TCollection_ExtendedString, theMIMEtype: TCollection_AsciiString, theData: any): any;
  GetNotes_2(theItemId: XCAFDoc_AssemblyItemId, theNoteLabels: TDF_LabelSequence): Standard_Integer;
  GetNotes_3(theItemLabel: TDF_Label, theNoteLabels: TDF_LabelSequence): Standard_Integer;
  GetAttrNotes_1(theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID, theNoteLabels: TDF_LabelSequence): Standard_Integer;
  GetAttrNotes_2(theItemLabel: TDF_Label, theGUID: Standard_GUID, theNoteLabels: TDF_LabelSequence): Standard_Integer;
  GetSubshapeNotes(theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Standard_Integer, theNoteLabels: TDF_LabelSequence): Standard_Integer;
  AddNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId): any;
  AddNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label): any;
  AddNoteToAttr_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID): any;
  AddNoteToAttr_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theGUID: Standard_GUID): any;
  AddNoteToSubshape_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Standard_Integer): any;
  AddNoteToSubshape_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theSubshapeIndex: Standard_Integer): any;
  RemoveNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveSubshapeNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Standard_Integer, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveSubshapeNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theSubshapeIndex: Standard_Integer, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAttrNote_1(theNoteLabel: TDF_Label, theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAttrNote_2(theNoteLabel: TDF_Label, theItemLabel: TDF_Label, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllNotes_1(theItemId: XCAFDoc_AssemblyItemId, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllNotes_2(theItemLabel: TDF_Label, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllSubshapeNotes(theItemId: XCAFDoc_AssemblyItemId, theSubshapeIndex: Standard_Integer, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllAttrNotes_1(theItemId: XCAFDoc_AssemblyItemId, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  RemoveAllAttrNotes_2(theItemLabel: TDF_Label, theGUID: Standard_GUID, theDelIfOrphan: Standard_Boolean): Standard_Boolean;
  DeleteNote(theNoteLabel: TDF_Label): Standard_Boolean;
  DeleteNotes(theNoteLabels: TDF_LabelSequence): Standard_Integer;
  DeleteAllNotes(): Standard_Integer;
  NbOrphanNotes(): Standard_Integer;
  GetOrphanNotes(theNoteLabels: TDF_LabelSequence): void;
  DeleteOrphanNotes(): Standard_Integer;
  ID(): Standard_GUID;
}

export declare class XCAFDoc_ShapeMapTool extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set(L: TDF_Label): any;
  IsSubShape(sub: TopoDS_Shape): Standard_Boolean;
  SetShape(S: TopoDS_Shape): void;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(into: any, RT: any): void;
  GetMap(): TopTools_IndexedMapOfShape;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFDoc_ShapeTool extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set(L: TDF_Label): any;
  IsTopLevel(L: TDF_Label): Standard_Boolean;
  IsFree(L: TDF_Label): Standard_Boolean;
  IsShape(L: TDF_Label): Standard_Boolean;
  IsSimpleShape(L: TDF_Label): Standard_Boolean;
  IsReference(L: TDF_Label): Standard_Boolean;
  IsAssembly(L: TDF_Label): Standard_Boolean;
  IsComponent(L: TDF_Label): Standard_Boolean;
  IsCompound(L: TDF_Label): Standard_Boolean;
  IsSubShape_1(L: TDF_Label): Standard_Boolean;
  IsSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape): Standard_Boolean;
  SearchUsingMap(S: TopoDS_Shape, L: TDF_Label, findWithoutLoc: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  Search(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean, findComponent: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  FindShape_1(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean): Standard_Boolean;
  FindShape_2(S: TopoDS_Shape, findInstance: Standard_Boolean): TDF_Label;
  GetShape_1(L: TDF_Label, S: TopoDS_Shape): Standard_Boolean;
  GetShape_2(L: TDF_Label): TopoDS_Shape;
  NewShape(): TDF_Label;
  SetShape(L: TDF_Label, S: TopoDS_Shape): void;
  AddShape(S: TopoDS_Shape, makeAssembly: Standard_Boolean, makePrepare: Standard_Boolean): TDF_Label;
  RemoveShape(L: TDF_Label, removeCompletely: Standard_Boolean): Standard_Boolean;
  Init(): void;
  SetAutoNaming(V: Standard_Boolean): void;
  AutoNaming(): Standard_Boolean;
  ComputeShapes(L: TDF_Label): void;
  ComputeSimpleShapes(): void;
  GetShapes(Labels: TDF_LabelSequence): void;
  GetFreeShapes(FreeLabels: TDF_LabelSequence): void;
  GetUsers(L: TDF_Label, Labels: TDF_LabelSequence, getsubchilds: Standard_Boolean): Standard_Integer;
  GetLocation(L: TDF_Label): TopLoc_Location;
  GetReferredShape(L: TDF_Label, Label: TDF_Label): Standard_Boolean;
  NbComponents(L: TDF_Label, getsubchilds: Standard_Boolean): Standard_Integer;
  GetComponents(L: TDF_Label, Labels: TDF_LabelSequence, getsubchilds: Standard_Boolean): Standard_Boolean;
  AddComponent_1(assembly: TDF_Label, comp: TDF_Label, Loc: TopLoc_Location): TDF_Label;
  AddComponent_2(assembly: TDF_Label, comp: TopoDS_Shape, expand: Standard_Boolean): TDF_Label;
  RemoveComponent(comp: TDF_Label): void;
  UpdateAssemblies(): void;
  FindSubShape(shapeL: TDF_Label, sub: TopoDS_Shape, L: TDF_Label): Standard_Boolean;
  AddSubShape_1(shapeL: TDF_Label, sub: TopoDS_Shape): TDF_Label;
  AddSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape, addedSubShapeL: TDF_Label): Standard_Boolean;
  FindMainShapeUsingMap(sub: TopoDS_Shape): TDF_Label;
  FindMainShape(sub: TopoDS_Shape): TDF_Label;
  GetSubShapes(L: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  BaseLabel(): TDF_Label;
  DumpShape(theDumpLog: Standard_OStream, L: TDF_Label, level: Standard_Integer, deep: Standard_Boolean): void;
  ID(): Standard_GUID;
  IsExternRef(L: TDF_Label): Standard_Boolean;
  SetExternRefs_1(SHAS: TColStd_SequenceOfHAsciiString): TDF_Label;
  SetExternRefs_2(L: TDF_Label, SHAS: TColStd_SequenceOfHAsciiString): void;
  GetExternRefs(L: TDF_Label, SHAS: TColStd_SequenceOfHAsciiString): void;
  SetSHUO(Labels: TDF_LabelSequence, MainSHUOAttr: any): Standard_Boolean;
  GetSHUO(SHUOLabel: TDF_Label, aSHUOAttr: any): Standard_Boolean;
  GetAllComponentSHUO(CompLabel: TDF_Label, SHUOAttrs: TDF_AttributeSequence): Standard_Boolean;
  GetSHUOUpperUsage(NextUsageL: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  GetSHUONextUsage(UpperUsageL: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  RemoveSHUO(SHUOLabel: TDF_Label): Standard_Boolean;
  FindComponent(theShape: TopoDS_Shape, Labels: TDF_LabelSequence): Standard_Boolean;
  GetSHUOInstance(theSHUO: any): TopoDS_Shape;
  SetInstanceSHUO(theShape: TopoDS_Shape): any;
  GetAllSHUOInstances(theSHUO: any, theSHUOShapeSeq: TopTools_SequenceOfShape): Standard_Boolean;
  FindSHUO(Labels: TDF_LabelSequence, theSHUOAttr: any): Standard_Boolean;
  Expand(Shape: TDF_Label): Standard_Boolean;
  GetNamedProperties_1(theLabel: TDF_Label, theToCreate: Standard_Boolean): any;
  GetNamedProperties_2(theShape: TopoDS_Shape, theToCreate: Standard_Boolean): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_View extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set(theLabel: TDF_Label): any;
  ID(): Standard_GUID;
  SetObject(theViewObject: any): void;
  GetObject(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_ViewTool extends TDataStd_GenericEmpty {
  constructor()
  Set(L: TDF_Label): any;
  GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  IsView(theLabel: TDF_Label): Standard_Boolean;
  GetViewLabels(theLabels: TDF_LabelSequence): void;
  SetView_1(theShapes: TDF_LabelSequence, theGDTs: TDF_LabelSequence, theClippingPlanes: TDF_LabelSequence, theNotes: TDF_LabelSequence, theAnnotations: TDF_LabelSequence, theViewL: TDF_Label): void;
  SetView_2(theShapes: TDF_LabelSequence, theGDTs: TDF_LabelSequence, theClippingPlanes: TDF_LabelSequence, theViewL: TDF_Label): void;
  SetView_3(theShapes: TDF_LabelSequence, theGDTs: TDF_LabelSequence, theViewL: TDF_Label): void;
  SetClippingPlanes(theClippingPlaneLabels: TDF_LabelSequence, theViewL: TDF_Label): void;
  RemoveView(theViewL: TDF_Label): void;
  GetViewLabelsForShape(theShapeL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForGDT(theGDTL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForClippingPlane(theClippingPlaneL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForNote(theNoteL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  GetViewLabelsForAnnotation(theAnnotationL: TDF_Label, theViews: TDF_LabelSequence): Standard_Boolean;
  AddView(): TDF_Label;
  GetRefShapeLabel(theViewL: TDF_Label, theShapeLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefGDTLabel(theViewL: TDF_Label, theGDTLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefClippingPlaneLabel(theViewL: TDF_Label, theClippingPlaneLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefNoteLabel(theViewL: TDF_Label, theNoteLabels: TDF_LabelSequence): Standard_Boolean;
  GetRefAnnotationLabel(theViewL: TDF_Label, theAnnotationLabels: TDF_LabelSequence): Standard_Boolean;
  IsLocked(theViewL: TDF_Label): Standard_Boolean;
  Lock(theViewL: TDF_Label): void;
  Unlock(theViewL: TDF_Label): void;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFDoc_VisMaterialTool extends TDF_Attribute {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Set(L: TDF_Label): any;
  GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): any;
  IsMaterial(theLabel: TDF_Label): Standard_Boolean;
  GetMaterial(theMatLabel: TDF_Label): any;
  AddMaterial_1(theMat: any, theName: TCollection_AsciiString): TDF_Label;
  AddMaterial_2(theName: TCollection_AsciiString): TDF_Label;
  RemoveMaterial(theLabel: TDF_Label): void;
  GetMaterials(Labels: TDF_LabelSequence): void;
  SetShapeMaterial_1(theShapeLabel: TDF_Label, theMaterialLabel: TDF_Label): void;
  UnSetShapeMaterial_1(theShapeLabel: TDF_Label): void;
  IsSetShapeMaterial_1(theLabel: TDF_Label): Standard_Boolean;
  GetShapeMaterial_1(theShapeLabel: TDF_Label, theMaterialLabel: TDF_Label): Standard_Boolean;
  GetShapeMaterial_2(theShapeLabel: TDF_Label): any;
  SetShapeMaterial_2(theShape: TopoDS_Shape, theMaterialLabel: TDF_Label): Standard_Boolean;
  UnSetShapeMaterial_2(theShape: TopoDS_Shape): Standard_Boolean;
  IsSetShapeMaterial_2(theShape: TopoDS_Shape): Standard_Boolean;
  GetShapeMaterial_3(theShape: TopoDS_Shape, theMaterialLabel: TDF_Label): Standard_Boolean;
  GetShapeMaterial_4(theShape: TopoDS_Shape): any;
  ID(): Standard_GUID;
  Restore(a0: any): void;
  NewEmpty(): any;
  Paste(a0: any, a1: any): void;
}

export declare class XCAFDoc_Volume extends TDataStd_Real {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set_1(vol: Standard_Real): void;
  Set_2(label: TDF_Label, vol: Standard_Real): any;
  Get_1(): Standard_Real;
  Get_2(label: TDF_Label, vol: Standard_Real): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class XCAFPrs {
  constructor();
  CollectStyleSettings(L: TDF_Label, loc: TopLoc_Location, settings: XCAFPrs_IndexedDataMapOfShapeStyle, theLayerColor: Quantity_ColorRGBA): void;
  SetViewNameMode(viewNameMode: Standard_Boolean): void;
  GetViewNameMode(): Standard_Boolean;
}

export declare class XCAFPrs_AISObject extends AIS_ColoredShape {
  constructor(theLabel: TDF_Label)
  GetLabel(): TDF_Label;
  SetLabel(theLabel: TDF_Label): void;
  DispatchStyles(theToSyncStyles: Standard_Boolean): void;
  SetMaterial(theMaterial: Graphic3d_MaterialAspect): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFPrs_DocumentIdIterator {
  constructor(thePath: TCollection_AsciiString)
  More(): boolean;
  Value(): TCollection_AsciiString;
  Next(): void;
}

export declare class XCAFPrs_Driver {
  constructor();
  Update(L: TDF_Label, ais: any): Standard_Boolean;
  GetID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XCAFPrs_Texture extends Graphic3d_Texture2Dmanual {
  constructor(theImageSource: Image_Texture, theUnit: Graphic3d_TextureUnit)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetCompressedImage(theSupported: any): any;
  GetImage(theSupported: any): any;
  GetImageSource(): Image_Texture;
}

export declare class XCAFView_Object extends Standard_Transient {
  SetName(theName: any): void;
  Name(): any;
  SetType(theType: XCAFView_ProjectionType): void;
  Type(): XCAFView_ProjectionType;
  SetProjectionPoint(thePoint: gp_Pnt): void;
  ProjectionPoint(): gp_Pnt;
  SetViewDirection(theDirection: gp_Dir): void;
  ViewDirection(): gp_Dir;
  SetUpDirection(theDirection: gp_Dir): void;
  UpDirection(): gp_Dir;
  SetZoomFactor(theZoomFactor: Standard_Real): void;
  ZoomFactor(): Standard_Real;
  SetWindowHorizontalSize(theSize: Standard_Real): void;
  WindowHorizontalSize(): Standard_Real;
  SetWindowVerticalSize(theSize: Standard_Real): void;
  WindowVerticalSize(): Standard_Real;
  SetClippingExpression(theExpression: any): void;
  ClippingExpression(): any;
  UnsetFrontPlaneClipping(): void;
  HasFrontPlaneClipping(): Standard_Boolean;
  SetFrontPlaneDistance(theDistance: Standard_Real): void;
  FrontPlaneDistance(): Standard_Real;
  UnsetBackPlaneClipping(): void;
  HasBackPlaneClipping(): Standard_Boolean;
  SetBackPlaneDistance(theDistance: Standard_Real): void;
  BackPlaneDistance(): Standard_Real;
  SetViewVolumeSidesClipping(theViewVolumeSidesClipping: Standard_Boolean): void;
  HasViewVolumeSidesClipping(): Standard_Boolean;
  CreateGDTPoints(theLenght: Standard_Integer): void;
  HasGDTPoints(): Standard_Boolean;
  NbGDTPoints(): Standard_Integer;
  SetGDTPoint(theIndex: Standard_Integer, thePoint: gp_Pnt): void;
  GDTPoint(theIndex: Standard_Integer): gp_Pnt;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class XCAFView_Object_1 extends XCAFView_Object {
    constructor();
  }

  export declare class XCAFView_Object_2 extends XCAFView_Object {
    constructor(theObj: any);
  }

export declare class Handle_XCAFDoc_VisMaterial {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_VisMaterial): void;
  get(): XCAFDoc_VisMaterial;
}

  export declare class Handle_XCAFDoc_VisMaterial_1 extends Handle_XCAFDoc_VisMaterial {
    constructor();
  }

  export declare class Handle_XCAFDoc_VisMaterial_2 extends Handle_XCAFDoc_VisMaterial {
    constructor(thePtr: XCAFDoc_VisMaterial);
  }

  export declare class Handle_XCAFDoc_VisMaterial_3 extends Handle_XCAFDoc_VisMaterial {
    constructor(theHandle: Handle_XCAFDoc_VisMaterial);
  }

  export declare class Handle_XCAFDoc_VisMaterial_4 extends Handle_XCAFDoc_VisMaterial {
    constructor(theHandle: Handle_XCAFDoc_VisMaterial);
  }

export declare class XCAFPrs_IndexedDataMapOfShapeStyle extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: XCAFPrs_IndexedDataMapOfShapeStyle): void;
  Assign(theOther: XCAFPrs_IndexedDataMapOfShapeStyle): XCAFPrs_IndexedDataMapOfShapeStyle;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: XCAFPrs_Style): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: XCAFPrs_Style): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): XCAFPrs_Style;
  ChangeFromIndex(theIndex: Standard_Integer): XCAFPrs_Style;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): XCAFPrs_Style;
  ChangeFromKey(theKey1: TopoDS_Shape): XCAFPrs_Style;
  Seek(theKey1: TopoDS_Shape): XCAFPrs_Style;
  ChangeSeek(theKey1: TopoDS_Shape): XCAFPrs_Style;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: XCAFPrs_Style): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class XCAFPrs_IndexedDataMapOfShapeStyle_1 extends XCAFPrs_IndexedDataMapOfShapeStyle {
    constructor();
  }

  export declare class XCAFPrs_IndexedDataMapOfShapeStyle_2 extends XCAFPrs_IndexedDataMapOfShapeStyle {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class XCAFPrs_IndexedDataMapOfShapeStyle_3 extends XCAFPrs_IndexedDataMapOfShapeStyle {
    constructor(theOther: XCAFPrs_IndexedDataMapOfShapeStyle);
  }

export declare class XCAFDimTolObjects_DimensionModifiersSequence extends NCollection_BaseSequence {
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
  Assign(theOther: XCAFDimTolObjects_DimensionModifiersSequence): XCAFDimTolObjects_DimensionModifiersSequence;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: XCAFDimTolObjects_DimensionModif): void;
  Append_2(theSeq: XCAFDimTolObjects_DimensionModifiersSequence): void;
  Prepend_1(theItem: XCAFDimTolObjects_DimensionModif): void;
  Prepend_2(theSeq: XCAFDimTolObjects_DimensionModifiersSequence): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: XCAFDimTolObjects_DimensionModif): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: XCAFDimTolObjects_DimensionModifiersSequence): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: XCAFDimTolObjects_DimensionModifiersSequence): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: XCAFDimTolObjects_DimensionModif): void;
  Split(theIndex: Standard_Integer, theSeq: XCAFDimTolObjects_DimensionModifiersSequence): void;
  First(): XCAFDimTolObjects_DimensionModif;
  ChangeFirst(): XCAFDimTolObjects_DimensionModif;
  Last(): XCAFDimTolObjects_DimensionModif;
  ChangeLast(): XCAFDimTolObjects_DimensionModif;
  Value(theIndex: Standard_Integer): XCAFDimTolObjects_DimensionModif;
  ChangeValue(theIndex: Standard_Integer): XCAFDimTolObjects_DimensionModif;
  SetValue(theIndex: Standard_Integer, theItem: XCAFDimTolObjects_DimensionModif): void;
}

  export declare class XCAFDimTolObjects_DimensionModifiersSequence_1 extends XCAFDimTolObjects_DimensionModifiersSequence {
    constructor();
  }

  export declare class XCAFDimTolObjects_DimensionModifiersSequence_2 extends XCAFDimTolObjects_DimensionModifiersSequence {
    constructor(theAllocator: any);
  }

  export declare class XCAFDimTolObjects_DimensionModifiersSequence_3 extends XCAFDimTolObjects_DimensionModifiersSequence {
    constructor(theOther: XCAFDimTolObjects_DimensionModifiersSequence);
  }

export declare class XCAFDoc_DataMapOfShapeLabel extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: XCAFDoc_DataMapOfShapeLabel): void;
  Assign(theOther: XCAFDoc_DataMapOfShapeLabel): XCAFDoc_DataMapOfShapeLabel;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TDF_Label): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TDF_Label): TDF_Label;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TDF_Label;
  Find_1(theKey: TopoDS_Shape): TDF_Label;
  Find_2(theKey: TopoDS_Shape, theValue: TDF_Label): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TDF_Label;
  ChangeFind(theKey: TopoDS_Shape): TDF_Label;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class XCAFDoc_DataMapOfShapeLabel_1 extends XCAFDoc_DataMapOfShapeLabel {
    constructor();
  }

  export declare class XCAFDoc_DataMapOfShapeLabel_2 extends XCAFDoc_DataMapOfShapeLabel {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class XCAFDoc_DataMapOfShapeLabel_3 extends XCAFDoc_DataMapOfShapeLabel {
    constructor(theOther: XCAFDoc_DataMapOfShapeLabel);
  }

export declare class XCAFDimTolObjects_GeomToleranceModifiersSequence extends NCollection_BaseSequence {
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
  Assign(theOther: XCAFDimTolObjects_GeomToleranceModifiersSequence): XCAFDimTolObjects_GeomToleranceModifiersSequence;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: XCAFDimTolObjects_GeomToleranceModif): void;
  Append_2(theSeq: XCAFDimTolObjects_GeomToleranceModifiersSequence): void;
  Prepend_1(theItem: XCAFDimTolObjects_GeomToleranceModif): void;
  Prepend_2(theSeq: XCAFDimTolObjects_GeomToleranceModifiersSequence): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: XCAFDimTolObjects_GeomToleranceModif): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: XCAFDimTolObjects_GeomToleranceModifiersSequence): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: XCAFDimTolObjects_GeomToleranceModifiersSequence): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: XCAFDimTolObjects_GeomToleranceModif): void;
  Split(theIndex: Standard_Integer, theSeq: XCAFDimTolObjects_GeomToleranceModifiersSequence): void;
  First(): XCAFDimTolObjects_GeomToleranceModif;
  ChangeFirst(): XCAFDimTolObjects_GeomToleranceModif;
  Last(): XCAFDimTolObjects_GeomToleranceModif;
  ChangeLast(): XCAFDimTolObjects_GeomToleranceModif;
  Value(theIndex: Standard_Integer): XCAFDimTolObjects_GeomToleranceModif;
  ChangeValue(theIndex: Standard_Integer): XCAFDimTolObjects_GeomToleranceModif;
  SetValue(theIndex: Standard_Integer, theItem: XCAFDimTolObjects_GeomToleranceModif): void;
}

  export declare class XCAFDimTolObjects_GeomToleranceModifiersSequence_1 extends XCAFDimTolObjects_GeomToleranceModifiersSequence {
    constructor();
  }

  export declare class XCAFDimTolObjects_GeomToleranceModifiersSequence_2 extends XCAFDimTolObjects_GeomToleranceModifiersSequence {
    constructor(theAllocator: any);
  }

  export declare class XCAFDimTolObjects_GeomToleranceModifiersSequence_3 extends XCAFDimTolObjects_GeomToleranceModifiersSequence {
    constructor(theOther: XCAFDimTolObjects_GeomToleranceModifiersSequence);
  }

export declare class Handle_XCAFDimTolObjects_GeomToleranceObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDimTolObjects_GeomToleranceObject): void;
  get(): XCAFDimTolObjects_GeomToleranceObject;
}

  export declare class Handle_XCAFDimTolObjects_GeomToleranceObject_1 extends Handle_XCAFDimTolObjects_GeomToleranceObject {
    constructor();
  }

  export declare class Handle_XCAFDimTolObjects_GeomToleranceObject_2 extends Handle_XCAFDimTolObjects_GeomToleranceObject {
    constructor(thePtr: XCAFDimTolObjects_GeomToleranceObject);
  }

  export declare class Handle_XCAFDimTolObjects_GeomToleranceObject_3 extends Handle_XCAFDimTolObjects_GeomToleranceObject {
    constructor(theHandle: Handle_XCAFDimTolObjects_GeomToleranceObject);
  }

  export declare class Handle_XCAFDimTolObjects_GeomToleranceObject_4 extends Handle_XCAFDimTolObjects_GeomToleranceObject {
    constructor(theHandle: Handle_XCAFDimTolObjects_GeomToleranceObject);
  }

export declare class Handle_XCAFApp_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFApp_Application): void;
  get(): XCAFApp_Application;
}

  export declare class Handle_XCAFApp_Application_1 extends Handle_XCAFApp_Application {
    constructor();
  }

  export declare class Handle_XCAFApp_Application_2 extends Handle_XCAFApp_Application {
    constructor(thePtr: XCAFApp_Application);
  }

  export declare class Handle_XCAFApp_Application_3 extends Handle_XCAFApp_Application {
    constructor(theHandle: Handle_XCAFApp_Application);
  }

  export declare class Handle_XCAFApp_Application_4 extends Handle_XCAFApp_Application {
    constructor(theHandle: Handle_XCAFApp_Application);
  }

export declare class Handle_XCAFDimTolObjects_DatumObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDimTolObjects_DatumObject): void;
  get(): XCAFDimTolObjects_DatumObject;
}

  export declare class Handle_XCAFDimTolObjects_DatumObject_1 extends Handle_XCAFDimTolObjects_DatumObject {
    constructor();
  }

  export declare class Handle_XCAFDimTolObjects_DatumObject_2 extends Handle_XCAFDimTolObjects_DatumObject {
    constructor(thePtr: XCAFDimTolObjects_DatumObject);
  }

  export declare class Handle_XCAFDimTolObjects_DatumObject_3 extends Handle_XCAFDimTolObjects_DatumObject {
    constructor(theHandle: Handle_XCAFDimTolObjects_DatumObject);
  }

  export declare class Handle_XCAFDimTolObjects_DatumObject_4 extends Handle_XCAFDimTolObjects_DatumObject {
    constructor(theHandle: Handle_XCAFDimTolObjects_DatumObject);
  }

export declare class Handle_XCAFDimTolObjects_DimensionObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDimTolObjects_DimensionObject): void;
  get(): XCAFDimTolObjects_DimensionObject;
}

  export declare class Handle_XCAFDimTolObjects_DimensionObject_1 extends Handle_XCAFDimTolObjects_DimensionObject {
    constructor();
  }

  export declare class Handle_XCAFDimTolObjects_DimensionObject_2 extends Handle_XCAFDimTolObjects_DimensionObject {
    constructor(thePtr: XCAFDimTolObjects_DimensionObject);
  }

  export declare class Handle_XCAFDimTolObjects_DimensionObject_3 extends Handle_XCAFDimTolObjects_DimensionObject {
    constructor(theHandle: Handle_XCAFDimTolObjects_DimensionObject);
  }

  export declare class Handle_XCAFDimTolObjects_DimensionObject_4 extends Handle_XCAFDimTolObjects_DimensionObject {
    constructor(theHandle: Handle_XCAFDimTolObjects_DimensionObject);
  }

export declare class Handle_XCAFDoc_DimTolTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_DimTolTool): void;
  get(): XCAFDoc_DimTolTool;
}

  export declare class Handle_XCAFDoc_DimTolTool_1 extends Handle_XCAFDoc_DimTolTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_DimTolTool_2 extends Handle_XCAFDoc_DimTolTool {
    constructor(thePtr: XCAFDoc_DimTolTool);
  }

  export declare class Handle_XCAFDoc_DimTolTool_3 extends Handle_XCAFDoc_DimTolTool {
    constructor(theHandle: Handle_XCAFDoc_DimTolTool);
  }

  export declare class Handle_XCAFDoc_DimTolTool_4 extends Handle_XCAFDoc_DimTolTool {
    constructor(theHandle: Handle_XCAFDoc_DimTolTool);
  }

export declare class Handle_XCAFDoc_Area {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Area): void;
  get(): XCAFDoc_Area;
}

  export declare class Handle_XCAFDoc_Area_1 extends Handle_XCAFDoc_Area {
    constructor();
  }

  export declare class Handle_XCAFDoc_Area_2 extends Handle_XCAFDoc_Area {
    constructor(thePtr: XCAFDoc_Area);
  }

  export declare class Handle_XCAFDoc_Area_3 extends Handle_XCAFDoc_Area {
    constructor(theHandle: Handle_XCAFDoc_Area);
  }

  export declare class Handle_XCAFDoc_Area_4 extends Handle_XCAFDoc_Area {
    constructor(theHandle: Handle_XCAFDoc_Area);
  }

export declare class Handle_XCAFDoc_AssemblyItemRef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_AssemblyItemRef): void;
  get(): XCAFDoc_AssemblyItemRef;
}

  export declare class Handle_XCAFDoc_AssemblyItemRef_1 extends Handle_XCAFDoc_AssemblyItemRef {
    constructor();
  }

  export declare class Handle_XCAFDoc_AssemblyItemRef_2 extends Handle_XCAFDoc_AssemblyItemRef {
    constructor(thePtr: XCAFDoc_AssemblyItemRef);
  }

  export declare class Handle_XCAFDoc_AssemblyItemRef_3 extends Handle_XCAFDoc_AssemblyItemRef {
    constructor(theHandle: Handle_XCAFDoc_AssemblyItemRef);
  }

  export declare class Handle_XCAFDoc_AssemblyItemRef_4 extends Handle_XCAFDoc_AssemblyItemRef {
    constructor(theHandle: Handle_XCAFDoc_AssemblyItemRef);
  }

export declare class Handle_XCAFDoc_Centroid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Centroid): void;
  get(): XCAFDoc_Centroid;
}

  export declare class Handle_XCAFDoc_Centroid_1 extends Handle_XCAFDoc_Centroid {
    constructor();
  }

  export declare class Handle_XCAFDoc_Centroid_2 extends Handle_XCAFDoc_Centroid {
    constructor(thePtr: XCAFDoc_Centroid);
  }

  export declare class Handle_XCAFDoc_Centroid_3 extends Handle_XCAFDoc_Centroid {
    constructor(theHandle: Handle_XCAFDoc_Centroid);
  }

  export declare class Handle_XCAFDoc_Centroid_4 extends Handle_XCAFDoc_Centroid {
    constructor(theHandle: Handle_XCAFDoc_Centroid);
  }

export declare class Handle_XCAFDoc_ClippingPlaneTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ClippingPlaneTool): void;
  get(): XCAFDoc_ClippingPlaneTool;
}

  export declare class Handle_XCAFDoc_ClippingPlaneTool_1 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ClippingPlaneTool_2 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor(thePtr: XCAFDoc_ClippingPlaneTool);
  }

  export declare class Handle_XCAFDoc_ClippingPlaneTool_3 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor(theHandle: Handle_XCAFDoc_ClippingPlaneTool);
  }

  export declare class Handle_XCAFDoc_ClippingPlaneTool_4 extends Handle_XCAFDoc_ClippingPlaneTool {
    constructor(theHandle: Handle_XCAFDoc_ClippingPlaneTool);
  }

export declare class Handle_XCAFDoc_Color {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Color): void;
  get(): XCAFDoc_Color;
}

  export declare class Handle_XCAFDoc_Color_1 extends Handle_XCAFDoc_Color {
    constructor();
  }

  export declare class Handle_XCAFDoc_Color_2 extends Handle_XCAFDoc_Color {
    constructor(thePtr: XCAFDoc_Color);
  }

  export declare class Handle_XCAFDoc_Color_3 extends Handle_XCAFDoc_Color {
    constructor(theHandle: Handle_XCAFDoc_Color);
  }

  export declare class Handle_XCAFDoc_Color_4 extends Handle_XCAFDoc_Color {
    constructor(theHandle: Handle_XCAFDoc_Color);
  }

export declare class Handle_XCAFDoc_ColorTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ColorTool): void;
  get(): XCAFDoc_ColorTool;
}

  export declare class Handle_XCAFDoc_ColorTool_1 extends Handle_XCAFDoc_ColorTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ColorTool_2 extends Handle_XCAFDoc_ColorTool {
    constructor(thePtr: XCAFDoc_ColorTool);
  }

  export declare class Handle_XCAFDoc_ColorTool_3 extends Handle_XCAFDoc_ColorTool {
    constructor(theHandle: Handle_XCAFDoc_ColorTool);
  }

  export declare class Handle_XCAFDoc_ColorTool_4 extends Handle_XCAFDoc_ColorTool {
    constructor(theHandle: Handle_XCAFDoc_ColorTool);
  }

export declare class Handle_XCAFDoc_Datum {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Datum): void;
  get(): XCAFDoc_Datum;
}

  export declare class Handle_XCAFDoc_Datum_1 extends Handle_XCAFDoc_Datum {
    constructor();
  }

  export declare class Handle_XCAFDoc_Datum_2 extends Handle_XCAFDoc_Datum {
    constructor(thePtr: XCAFDoc_Datum);
  }

  export declare class Handle_XCAFDoc_Datum_3 extends Handle_XCAFDoc_Datum {
    constructor(theHandle: Handle_XCAFDoc_Datum);
  }

  export declare class Handle_XCAFDoc_Datum_4 extends Handle_XCAFDoc_Datum {
    constructor(theHandle: Handle_XCAFDoc_Datum);
  }

export declare class Handle_XCAFDoc_DimTol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_DimTol): void;
  get(): XCAFDoc_DimTol;
}

  export declare class Handle_XCAFDoc_DimTol_1 extends Handle_XCAFDoc_DimTol {
    constructor();
  }

  export declare class Handle_XCAFDoc_DimTol_2 extends Handle_XCAFDoc_DimTol {
    constructor(thePtr: XCAFDoc_DimTol);
  }

  export declare class Handle_XCAFDoc_DimTol_3 extends Handle_XCAFDoc_DimTol {
    constructor(theHandle: Handle_XCAFDoc_DimTol);
  }

  export declare class Handle_XCAFDoc_DimTol_4 extends Handle_XCAFDoc_DimTol {
    constructor(theHandle: Handle_XCAFDoc_DimTol);
  }

export declare class Handle_XCAFDoc_Dimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Dimension): void;
  get(): XCAFDoc_Dimension;
}

  export declare class Handle_XCAFDoc_Dimension_1 extends Handle_XCAFDoc_Dimension {
    constructor();
  }

  export declare class Handle_XCAFDoc_Dimension_2 extends Handle_XCAFDoc_Dimension {
    constructor(thePtr: XCAFDoc_Dimension);
  }

  export declare class Handle_XCAFDoc_Dimension_3 extends Handle_XCAFDoc_Dimension {
    constructor(theHandle: Handle_XCAFDoc_Dimension);
  }

  export declare class Handle_XCAFDoc_Dimension_4 extends Handle_XCAFDoc_Dimension {
    constructor(theHandle: Handle_XCAFDoc_Dimension);
  }

export declare class Handle_XCAFDoc_DocumentTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_DocumentTool): void;
  get(): XCAFDoc_DocumentTool;
}

  export declare class Handle_XCAFDoc_DocumentTool_1 extends Handle_XCAFDoc_DocumentTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_DocumentTool_2 extends Handle_XCAFDoc_DocumentTool {
    constructor(thePtr: XCAFDoc_DocumentTool);
  }

  export declare class Handle_XCAFDoc_DocumentTool_3 extends Handle_XCAFDoc_DocumentTool {
    constructor(theHandle: Handle_XCAFDoc_DocumentTool);
  }

  export declare class Handle_XCAFDoc_DocumentTool_4 extends Handle_XCAFDoc_DocumentTool {
    constructor(theHandle: Handle_XCAFDoc_DocumentTool);
  }

export declare class Handle_XCAFDoc_GeomTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_GeomTolerance): void;
  get(): XCAFDoc_GeomTolerance;
}

  export declare class Handle_XCAFDoc_GeomTolerance_1 extends Handle_XCAFDoc_GeomTolerance {
    constructor();
  }

  export declare class Handle_XCAFDoc_GeomTolerance_2 extends Handle_XCAFDoc_GeomTolerance {
    constructor(thePtr: XCAFDoc_GeomTolerance);
  }

  export declare class Handle_XCAFDoc_GeomTolerance_3 extends Handle_XCAFDoc_GeomTolerance {
    constructor(theHandle: Handle_XCAFDoc_GeomTolerance);
  }

  export declare class Handle_XCAFDoc_GeomTolerance_4 extends Handle_XCAFDoc_GeomTolerance {
    constructor(theHandle: Handle_XCAFDoc_GeomTolerance);
  }

export declare class Handle_XCAFDoc_GraphNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_GraphNode): void;
  get(): XCAFDoc_GraphNode;
}

  export declare class Handle_XCAFDoc_GraphNode_1 extends Handle_XCAFDoc_GraphNode {
    constructor();
  }

  export declare class Handle_XCAFDoc_GraphNode_2 extends Handle_XCAFDoc_GraphNode {
    constructor(thePtr: XCAFDoc_GraphNode);
  }

  export declare class Handle_XCAFDoc_GraphNode_3 extends Handle_XCAFDoc_GraphNode {
    constructor(theHandle: Handle_XCAFDoc_GraphNode);
  }

  export declare class Handle_XCAFDoc_GraphNode_4 extends Handle_XCAFDoc_GraphNode {
    constructor(theHandle: Handle_XCAFDoc_GraphNode);
  }

export declare class Handle_XCAFDoc_LayerTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_LayerTool): void;
  get(): XCAFDoc_LayerTool;
}

  export declare class Handle_XCAFDoc_LayerTool_1 extends Handle_XCAFDoc_LayerTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_LayerTool_2 extends Handle_XCAFDoc_LayerTool {
    constructor(thePtr: XCAFDoc_LayerTool);
  }

  export declare class Handle_XCAFDoc_LayerTool_3 extends Handle_XCAFDoc_LayerTool {
    constructor(theHandle: Handle_XCAFDoc_LayerTool);
  }

  export declare class Handle_XCAFDoc_LayerTool_4 extends Handle_XCAFDoc_LayerTool {
    constructor(theHandle: Handle_XCAFDoc_LayerTool);
  }

export declare class Handle_XCAFDoc_Location {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Location): void;
  get(): XCAFDoc_Location;
}

  export declare class Handle_XCAFDoc_Location_1 extends Handle_XCAFDoc_Location {
    constructor();
  }

  export declare class Handle_XCAFDoc_Location_2 extends Handle_XCAFDoc_Location {
    constructor(thePtr: XCAFDoc_Location);
  }

  export declare class Handle_XCAFDoc_Location_3 extends Handle_XCAFDoc_Location {
    constructor(theHandle: Handle_XCAFDoc_Location);
  }

  export declare class Handle_XCAFDoc_Location_4 extends Handle_XCAFDoc_Location {
    constructor(theHandle: Handle_XCAFDoc_Location);
  }

export declare class Handle_XCAFDoc_Material {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Material): void;
  get(): XCAFDoc_Material;
}

  export declare class Handle_XCAFDoc_Material_1 extends Handle_XCAFDoc_Material {
    constructor();
  }

  export declare class Handle_XCAFDoc_Material_2 extends Handle_XCAFDoc_Material {
    constructor(thePtr: XCAFDoc_Material);
  }

  export declare class Handle_XCAFDoc_Material_3 extends Handle_XCAFDoc_Material {
    constructor(theHandle: Handle_XCAFDoc_Material);
  }

  export declare class Handle_XCAFDoc_Material_4 extends Handle_XCAFDoc_Material {
    constructor(theHandle: Handle_XCAFDoc_Material);
  }

export declare class Handle_XCAFDoc_MaterialTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_MaterialTool): void;
  get(): XCAFDoc_MaterialTool;
}

  export declare class Handle_XCAFDoc_MaterialTool_1 extends Handle_XCAFDoc_MaterialTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_MaterialTool_2 extends Handle_XCAFDoc_MaterialTool {
    constructor(thePtr: XCAFDoc_MaterialTool);
  }

  export declare class Handle_XCAFDoc_MaterialTool_3 extends Handle_XCAFDoc_MaterialTool {
    constructor(theHandle: Handle_XCAFDoc_MaterialTool);
  }

  export declare class Handle_XCAFDoc_MaterialTool_4 extends Handle_XCAFDoc_MaterialTool {
    constructor(theHandle: Handle_XCAFDoc_MaterialTool);
  }

export declare class Handle_XCAFNoteObjects_NoteObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFNoteObjects_NoteObject): void;
  get(): XCAFNoteObjects_NoteObject;
}

  export declare class Handle_XCAFNoteObjects_NoteObject_1 extends Handle_XCAFNoteObjects_NoteObject {
    constructor();
  }

  export declare class Handle_XCAFNoteObjects_NoteObject_2 extends Handle_XCAFNoteObjects_NoteObject {
    constructor(thePtr: XCAFNoteObjects_NoteObject);
  }

  export declare class Handle_XCAFNoteObjects_NoteObject_3 extends Handle_XCAFNoteObjects_NoteObject {
    constructor(theHandle: Handle_XCAFNoteObjects_NoteObject);
  }

  export declare class Handle_XCAFNoteObjects_NoteObject_4 extends Handle_XCAFNoteObjects_NoteObject {
    constructor(theHandle: Handle_XCAFNoteObjects_NoteObject);
  }

export declare class Handle_XCAFDoc_Note {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Note): void;
  get(): XCAFDoc_Note;
}

  export declare class Handle_XCAFDoc_Note_1 extends Handle_XCAFDoc_Note {
    constructor();
  }

  export declare class Handle_XCAFDoc_Note_2 extends Handle_XCAFDoc_Note {
    constructor(thePtr: XCAFDoc_Note);
  }

  export declare class Handle_XCAFDoc_Note_3 extends Handle_XCAFDoc_Note {
    constructor(theHandle: Handle_XCAFDoc_Note);
  }

  export declare class Handle_XCAFDoc_Note_4 extends Handle_XCAFDoc_Note {
    constructor(theHandle: Handle_XCAFDoc_Note);
  }

export declare class Handle_XCAFDoc_NoteComment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_NoteComment): void;
  get(): XCAFDoc_NoteComment;
}

  export declare class Handle_XCAFDoc_NoteComment_1 extends Handle_XCAFDoc_NoteComment {
    constructor();
  }

  export declare class Handle_XCAFDoc_NoteComment_2 extends Handle_XCAFDoc_NoteComment {
    constructor(thePtr: XCAFDoc_NoteComment);
  }

  export declare class Handle_XCAFDoc_NoteComment_3 extends Handle_XCAFDoc_NoteComment {
    constructor(theHandle: Handle_XCAFDoc_NoteComment);
  }

  export declare class Handle_XCAFDoc_NoteComment_4 extends Handle_XCAFDoc_NoteComment {
    constructor(theHandle: Handle_XCAFDoc_NoteComment);
  }

export declare class Handle_XCAFDoc_NoteBalloon {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_NoteBalloon): void;
  get(): XCAFDoc_NoteBalloon;
}

  export declare class Handle_XCAFDoc_NoteBalloon_1 extends Handle_XCAFDoc_NoteBalloon {
    constructor();
  }

  export declare class Handle_XCAFDoc_NoteBalloon_2 extends Handle_XCAFDoc_NoteBalloon {
    constructor(thePtr: XCAFDoc_NoteBalloon);
  }

  export declare class Handle_XCAFDoc_NoteBalloon_3 extends Handle_XCAFDoc_NoteBalloon {
    constructor(theHandle: Handle_XCAFDoc_NoteBalloon);
  }

  export declare class Handle_XCAFDoc_NoteBalloon_4 extends Handle_XCAFDoc_NoteBalloon {
    constructor(theHandle: Handle_XCAFDoc_NoteBalloon);
  }

export declare class Handle_XCAFDoc_NoteBinData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_NoteBinData): void;
  get(): XCAFDoc_NoteBinData;
}

  export declare class Handle_XCAFDoc_NoteBinData_1 extends Handle_XCAFDoc_NoteBinData {
    constructor();
  }

  export declare class Handle_XCAFDoc_NoteBinData_2 extends Handle_XCAFDoc_NoteBinData {
    constructor(thePtr: XCAFDoc_NoteBinData);
  }

  export declare class Handle_XCAFDoc_NoteBinData_3 extends Handle_XCAFDoc_NoteBinData {
    constructor(theHandle: Handle_XCAFDoc_NoteBinData);
  }

  export declare class Handle_XCAFDoc_NoteBinData_4 extends Handle_XCAFDoc_NoteBinData {
    constructor(theHandle: Handle_XCAFDoc_NoteBinData);
  }

export declare class Handle_XCAFDoc_NotesTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_NotesTool): void;
  get(): XCAFDoc_NotesTool;
}

  export declare class Handle_XCAFDoc_NotesTool_1 extends Handle_XCAFDoc_NotesTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_NotesTool_2 extends Handle_XCAFDoc_NotesTool {
    constructor(thePtr: XCAFDoc_NotesTool);
  }

  export declare class Handle_XCAFDoc_NotesTool_3 extends Handle_XCAFDoc_NotesTool {
    constructor(theHandle: Handle_XCAFDoc_NotesTool);
  }

  export declare class Handle_XCAFDoc_NotesTool_4 extends Handle_XCAFDoc_NotesTool {
    constructor(theHandle: Handle_XCAFDoc_NotesTool);
  }

export declare class Handle_XCAFDoc_ShapeMapTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ShapeMapTool): void;
  get(): XCAFDoc_ShapeMapTool;
}

  export declare class Handle_XCAFDoc_ShapeMapTool_1 extends Handle_XCAFDoc_ShapeMapTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ShapeMapTool_2 extends Handle_XCAFDoc_ShapeMapTool {
    constructor(thePtr: XCAFDoc_ShapeMapTool);
  }

  export declare class Handle_XCAFDoc_ShapeMapTool_3 extends Handle_XCAFDoc_ShapeMapTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeMapTool);
  }

  export declare class Handle_XCAFDoc_ShapeMapTool_4 extends Handle_XCAFDoc_ShapeMapTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeMapTool);
  }

export declare class Handle_XCAFDoc_ShapeTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ShapeTool): void;
  get(): XCAFDoc_ShapeTool;
}

  export declare class Handle_XCAFDoc_ShapeTool_1 extends Handle_XCAFDoc_ShapeTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ShapeTool_2 extends Handle_XCAFDoc_ShapeTool {
    constructor(thePtr: XCAFDoc_ShapeTool);
  }

  export declare class Handle_XCAFDoc_ShapeTool_3 extends Handle_XCAFDoc_ShapeTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeTool);
  }

  export declare class Handle_XCAFDoc_ShapeTool_4 extends Handle_XCAFDoc_ShapeTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeTool);
  }

export declare class Handle_XCAFDoc_View {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_View): void;
  get(): XCAFDoc_View;
}

  export declare class Handle_XCAFDoc_View_1 extends Handle_XCAFDoc_View {
    constructor();
  }

  export declare class Handle_XCAFDoc_View_2 extends Handle_XCAFDoc_View {
    constructor(thePtr: XCAFDoc_View);
  }

  export declare class Handle_XCAFDoc_View_3 extends Handle_XCAFDoc_View {
    constructor(theHandle: Handle_XCAFDoc_View);
  }

  export declare class Handle_XCAFDoc_View_4 extends Handle_XCAFDoc_View {
    constructor(theHandle: Handle_XCAFDoc_View);
  }

export declare class Handle_XCAFDoc_ViewTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ViewTool): void;
  get(): XCAFDoc_ViewTool;
}

  export declare class Handle_XCAFDoc_ViewTool_1 extends Handle_XCAFDoc_ViewTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ViewTool_2 extends Handle_XCAFDoc_ViewTool {
    constructor(thePtr: XCAFDoc_ViewTool);
  }

  export declare class Handle_XCAFDoc_ViewTool_3 extends Handle_XCAFDoc_ViewTool {
    constructor(theHandle: Handle_XCAFDoc_ViewTool);
  }

  export declare class Handle_XCAFDoc_ViewTool_4 extends Handle_XCAFDoc_ViewTool {
    constructor(theHandle: Handle_XCAFDoc_ViewTool);
  }

export declare class Handle_XCAFDoc_VisMaterialTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_VisMaterialTool): void;
  get(): XCAFDoc_VisMaterialTool;
}

  export declare class Handle_XCAFDoc_VisMaterialTool_1 extends Handle_XCAFDoc_VisMaterialTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_VisMaterialTool_2 extends Handle_XCAFDoc_VisMaterialTool {
    constructor(thePtr: XCAFDoc_VisMaterialTool);
  }

  export declare class Handle_XCAFDoc_VisMaterialTool_3 extends Handle_XCAFDoc_VisMaterialTool {
    constructor(theHandle: Handle_XCAFDoc_VisMaterialTool);
  }

  export declare class Handle_XCAFDoc_VisMaterialTool_4 extends Handle_XCAFDoc_VisMaterialTool {
    constructor(theHandle: Handle_XCAFDoc_VisMaterialTool);
  }

export declare class Handle_XCAFDoc_Volume {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_Volume): void;
  get(): XCAFDoc_Volume;
}

  export declare class Handle_XCAFDoc_Volume_1 extends Handle_XCAFDoc_Volume {
    constructor();
  }

  export declare class Handle_XCAFDoc_Volume_2 extends Handle_XCAFDoc_Volume {
    constructor(thePtr: XCAFDoc_Volume);
  }

  export declare class Handle_XCAFDoc_Volume_3 extends Handle_XCAFDoc_Volume {
    constructor(theHandle: Handle_XCAFDoc_Volume);
  }

  export declare class Handle_XCAFDoc_Volume_4 extends Handle_XCAFDoc_Volume {
    constructor(theHandle: Handle_XCAFDoc_Volume);
  }

export declare class Handle_XCAFPrs_AISObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFPrs_AISObject): void;
  get(): XCAFPrs_AISObject;
}

  export declare class Handle_XCAFPrs_AISObject_1 extends Handle_XCAFPrs_AISObject {
    constructor();
  }

  export declare class Handle_XCAFPrs_AISObject_2 extends Handle_XCAFPrs_AISObject {
    constructor(thePtr: XCAFPrs_AISObject);
  }

  export declare class Handle_XCAFPrs_AISObject_3 extends Handle_XCAFPrs_AISObject {
    constructor(theHandle: Handle_XCAFPrs_AISObject);
  }

  export declare class Handle_XCAFPrs_AISObject_4 extends Handle_XCAFPrs_AISObject {
    constructor(theHandle: Handle_XCAFPrs_AISObject);
  }

export declare class XCAFPrs_DataMapOfStyleShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: XCAFPrs_DataMapOfStyleShape): void;
  Assign(theOther: XCAFPrs_DataMapOfStyleShape): XCAFPrs_DataMapOfStyleShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: XCAFPrs_Style, theItem: TopoDS_Shape): Standard_Boolean;
  Bound(theKey: XCAFPrs_Style, theItem: TopoDS_Shape): TopoDS_Shape;
  IsBound(theKey: XCAFPrs_Style): Standard_Boolean;
  UnBind(theKey: XCAFPrs_Style): Standard_Boolean;
  Seek(theKey: XCAFPrs_Style): TopoDS_Shape;
  Find_1(theKey: XCAFPrs_Style): TopoDS_Shape;
  Find_2(theKey: XCAFPrs_Style, theValue: TopoDS_Shape): Standard_Boolean;
  ChangeSeek(theKey: XCAFPrs_Style): TopoDS_Shape;
  ChangeFind(theKey: XCAFPrs_Style): TopoDS_Shape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class XCAFPrs_DataMapOfStyleShape_1 extends XCAFPrs_DataMapOfStyleShape {
    constructor();
  }

  export declare class XCAFPrs_DataMapOfStyleShape_2 extends XCAFPrs_DataMapOfStyleShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class XCAFPrs_DataMapOfStyleShape_3 extends XCAFPrs_DataMapOfStyleShape {
    constructor(theOther: XCAFPrs_DataMapOfStyleShape);
  }

export declare class Handle_XCAFPrs_Driver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFPrs_Driver): void;
  get(): XCAFPrs_Driver;
}

  export declare class Handle_XCAFPrs_Driver_1 extends Handle_XCAFPrs_Driver {
    constructor();
  }

  export declare class Handle_XCAFPrs_Driver_2 extends Handle_XCAFPrs_Driver {
    constructor(thePtr: XCAFPrs_Driver);
  }

  export declare class Handle_XCAFPrs_Driver_3 extends Handle_XCAFPrs_Driver {
    constructor(theHandle: Handle_XCAFPrs_Driver);
  }

  export declare class Handle_XCAFPrs_Driver_4 extends Handle_XCAFPrs_Driver {
    constructor(theHandle: Handle_XCAFPrs_Driver);
  }

export declare class Handle_XCAFView_Object {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFView_Object): void;
  get(): XCAFView_Object;
}

  export declare class Handle_XCAFView_Object_1 extends Handle_XCAFView_Object {
    constructor();
  }

  export declare class Handle_XCAFView_Object_2 extends Handle_XCAFView_Object {
    constructor(thePtr: XCAFView_Object);
  }

  export declare class Handle_XCAFView_Object_3 extends Handle_XCAFView_Object {
    constructor(theHandle: Handle_XCAFView_Object);
  }

  export declare class Handle_XCAFView_Object_4 extends Handle_XCAFView_Object {
    constructor(theHandle: Handle_XCAFView_Object);
  }

export declare type XCAFDimTolObjects_DimensionModif = {
  XCAFDimTolObjects_DimensionModif_ControlledRadius: {};
  XCAFDimTolObjects_DimensionModif_Square: {};
  XCAFDimTolObjects_DimensionModif_StatisticalTolerance: {};
  XCAFDimTolObjects_DimensionModif_ContinuousFeature: {};
  XCAFDimTolObjects_DimensionModif_TwoPointSize: {};
  XCAFDimTolObjects_DimensionModif_LocalSizeDefinedBySphere: {};
  XCAFDimTolObjects_DimensionModif_LeastSquaresAssociationCriterion: {};
  XCAFDimTolObjects_DimensionModif_MaximumInscribedAssociation: {};
  XCAFDimTolObjects_DimensionModif_MinimumCircumscribedAssociation: {};
  XCAFDimTolObjects_DimensionModif_CircumferenceDiameter: {};
  XCAFDimTolObjects_DimensionModif_AreaDiameter: {};
  XCAFDimTolObjects_DimensionModif_VolumeDiameter: {};
  XCAFDimTolObjects_DimensionModif_MaximumSize: {};
  XCAFDimTolObjects_DimensionModif_MinimumSize: {};
  XCAFDimTolObjects_DimensionModif_AverageSize: {};
  XCAFDimTolObjects_DimensionModif_MedianSize: {};
  XCAFDimTolObjects_DimensionModif_MidRangeSize: {};
  XCAFDimTolObjects_DimensionModif_RangeOfSizes: {};
  XCAFDimTolObjects_DimensionModif_AnyRestrictedPortionOfFeature: {};
  XCAFDimTolObjects_DimensionModif_AnyCrossSection: {};
  XCAFDimTolObjects_DimensionModif_SpecificFixedCrossSection: {};
  XCAFDimTolObjects_DimensionModif_CommonTolerance: {};
  XCAFDimTolObjects_DimensionModif_FreeStateCondition: {};
  XCAFDimTolObjects_DimensionModif_Between: {};
}

export declare type XCAFDimTolObjects_DatumSingleModif = {
  XCAFDimTolObjects_DatumSingleModif_AnyCrossSection: {};
  XCAFDimTolObjects_DatumSingleModif_Any_LongitudinalSection: {};
  XCAFDimTolObjects_DatumSingleModif_Basic: {};
  XCAFDimTolObjects_DatumSingleModif_ContactingFeature: {};
  XCAFDimTolObjects_DatumSingleModif_DegreeOfFreedomConstraintU: {};
  XCAFDimTolObjects_DatumSingleModif_DegreeOfFreedomConstraintV: {};
  XCAFDimTolObjects_DatumSingleModif_DegreeOfFreedomConstraintW: {};
  XCAFDimTolObjects_DatumSingleModif_DegreeOfFreedomConstraintX: {};
  XCAFDimTolObjects_DatumSingleModif_DegreeOfFreedomConstraintY: {};
  XCAFDimTolObjects_DatumSingleModif_DegreeOfFreedomConstraintZ: {};
  XCAFDimTolObjects_DatumSingleModif_DistanceVariable: {};
  XCAFDimTolObjects_DatumSingleModif_FreeState: {};
  XCAFDimTolObjects_DatumSingleModif_LeastMaterialRequirement: {};
  XCAFDimTolObjects_DatumSingleModif_Line: {};
  XCAFDimTolObjects_DatumSingleModif_MajorDiameter: {};
  XCAFDimTolObjects_DatumSingleModif_MaximumMaterialRequirement: {};
  XCAFDimTolObjects_DatumSingleModif_MinorDiameter: {};
  XCAFDimTolObjects_DatumSingleModif_Orientation: {};
  XCAFDimTolObjects_DatumSingleModif_PitchDiameter: {};
  XCAFDimTolObjects_DatumSingleModif_Plane: {};
  XCAFDimTolObjects_DatumSingleModif_Point: {};
  XCAFDimTolObjects_DatumSingleModif_Translation: {};
}

export declare type XCAFDimTolObjects_DatumModifWithValue = {
  XCAFDimTolObjects_DatumModifWithValue_None: {};
  XCAFDimTolObjects_DatumModifWithValue_CircularOrCylindrical: {};
  XCAFDimTolObjects_DatumModifWithValue_Distance: {};
  XCAFDimTolObjects_DatumModifWithValue_Projected: {};
  XCAFDimTolObjects_DatumModifWithValue_Spherical: {};
}

export declare type XCAFDimTolObjects_DimensionFormVariance = {
  XCAFDimTolObjects_DimensionFormVariance_None: {};
  XCAFDimTolObjects_DimensionFormVariance_A: {};
  XCAFDimTolObjects_DimensionFormVariance_B: {};
  XCAFDimTolObjects_DimensionFormVariance_C: {};
  XCAFDimTolObjects_DimensionFormVariance_CD: {};
  XCAFDimTolObjects_DimensionFormVariance_D: {};
  XCAFDimTolObjects_DimensionFormVariance_E: {};
  XCAFDimTolObjects_DimensionFormVariance_EF: {};
  XCAFDimTolObjects_DimensionFormVariance_F: {};
  XCAFDimTolObjects_DimensionFormVariance_FG: {};
  XCAFDimTolObjects_DimensionFormVariance_G: {};
  XCAFDimTolObjects_DimensionFormVariance_H: {};
  XCAFDimTolObjects_DimensionFormVariance_JS: {};
  XCAFDimTolObjects_DimensionFormVariance_J: {};
  XCAFDimTolObjects_DimensionFormVariance_K: {};
  XCAFDimTolObjects_DimensionFormVariance_M: {};
  XCAFDimTolObjects_DimensionFormVariance_N: {};
  XCAFDimTolObjects_DimensionFormVariance_P: {};
  XCAFDimTolObjects_DimensionFormVariance_R: {};
  XCAFDimTolObjects_DimensionFormVariance_S: {};
  XCAFDimTolObjects_DimensionFormVariance_T: {};
  XCAFDimTolObjects_DimensionFormVariance_U: {};
  XCAFDimTolObjects_DimensionFormVariance_V: {};
  XCAFDimTolObjects_DimensionFormVariance_X: {};
  XCAFDimTolObjects_DimensionFormVariance_Y: {};
  XCAFDimTolObjects_DimensionFormVariance_Z: {};
  XCAFDimTolObjects_DimensionFormVariance_ZA: {};
  XCAFDimTolObjects_DimensionFormVariance_ZB: {};
  XCAFDimTolObjects_DimensionFormVariance_ZC: {};
}

export declare type XCAFDimTolObjects_DimensionGrade = {
  XCAFDimTolObjects_DimensionGrade_IT01: {};
  XCAFDimTolObjects_DimensionGrade_IT0: {};
  XCAFDimTolObjects_DimensionGrade_IT1: {};
  XCAFDimTolObjects_DimensionGrade_IT2: {};
  XCAFDimTolObjects_DimensionGrade_IT3: {};
  XCAFDimTolObjects_DimensionGrade_IT4: {};
  XCAFDimTolObjects_DimensionGrade_IT5: {};
  XCAFDimTolObjects_DimensionGrade_IT6: {};
  XCAFDimTolObjects_DimensionGrade_IT7: {};
  XCAFDimTolObjects_DimensionGrade_IT8: {};
  XCAFDimTolObjects_DimensionGrade_IT9: {};
  XCAFDimTolObjects_DimensionGrade_IT10: {};
  XCAFDimTolObjects_DimensionGrade_IT11: {};
  XCAFDimTolObjects_DimensionGrade_IT12: {};
  XCAFDimTolObjects_DimensionGrade_IT13: {};
  XCAFDimTolObjects_DimensionGrade_IT14: {};
  XCAFDimTolObjects_DimensionGrade_IT15: {};
  XCAFDimTolObjects_DimensionGrade_IT16: {};
  XCAFDimTolObjects_DimensionGrade_IT17: {};
  XCAFDimTolObjects_DimensionGrade_IT18: {};
}

export declare type XCAFDimTolObjects_DimensionType = {
  XCAFDimTolObjects_DimensionType_Location_None: {};
  XCAFDimTolObjects_DimensionType_Location_CurvedDistance: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromCenterToOuter: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromCenterToInner: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromOuterToCenter: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromOuterToOuter: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromOuterToInner: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromInnerToCenter: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromInnerToOuter: {};
  XCAFDimTolObjects_DimensionType_Location_LinearDistance_FromInnerToInner: {};
  XCAFDimTolObjects_DimensionType_Location_Angular: {};
  XCAFDimTolObjects_DimensionType_Location_Oriented: {};
  XCAFDimTolObjects_DimensionType_Location_WithPath: {};
  XCAFDimTolObjects_DimensionType_Size_CurveLength: {};
  XCAFDimTolObjects_DimensionType_Size_Diameter: {};
  XCAFDimTolObjects_DimensionType_Size_SphericalDiameter: {};
  XCAFDimTolObjects_DimensionType_Size_Radius: {};
  XCAFDimTolObjects_DimensionType_Size_SphericalRadius: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalMinorDiameter: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalMajorDiameter: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalMinorRadius: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalMajorRadius: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalHighMajorDiameter: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalLowMajorDiameter: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalHighMajorRadius: {};
  XCAFDimTolObjects_DimensionType_Size_ToroidalLowMajorRadius: {};
  XCAFDimTolObjects_DimensionType_Size_Thickness: {};
  XCAFDimTolObjects_DimensionType_Size_Angular: {};
  XCAFDimTolObjects_DimensionType_Size_WithPath: {};
  XCAFDimTolObjects_DimensionType_CommonLabel: {};
  XCAFDimTolObjects_DimensionType_DimensionPresentation: {};
}

export declare type XCAFDimTolObjects_DatumTargetType = {
  XCAFDimTolObjects_DatumTargetType_Point: {};
  XCAFDimTolObjects_DatumTargetType_Line: {};
  XCAFDimTolObjects_DatumTargetType_Rectangle: {};
  XCAFDimTolObjects_DatumTargetType_Circle: {};
  XCAFDimTolObjects_DatumTargetType_Area: {};
}

export declare type XCAFDimTolObjects_DimensionQualifier = {
  XCAFDimTolObjects_DimensionQualifier_None: {};
  XCAFDimTolObjects_DimensionQualifier_Min: {};
  XCAFDimTolObjects_DimensionQualifier_Max: {};
  XCAFDimTolObjects_DimensionQualifier_Avg: {};
}

export declare type XCAFDimTolObjects_GeomToleranceModif = {
  XCAFDimTolObjects_GeomToleranceModif_Any_Cross_Section: {};
  XCAFDimTolObjects_GeomToleranceModif_Common_Zone: {};
  XCAFDimTolObjects_GeomToleranceModif_Each_Radial_Element: {};
  XCAFDimTolObjects_GeomToleranceModif_Free_State: {};
  XCAFDimTolObjects_GeomToleranceModif_Least_Material_Requirement: {};
  XCAFDimTolObjects_GeomToleranceModif_Line_Element: {};
  XCAFDimTolObjects_GeomToleranceModif_Major_Diameter: {};
  XCAFDimTolObjects_GeomToleranceModif_Maximum_Material_Requirement: {};
  XCAFDimTolObjects_GeomToleranceModif_Minor_Diameter: {};
  XCAFDimTolObjects_GeomToleranceModif_Not_Convex: {};
  XCAFDimTolObjects_GeomToleranceModif_Pitch_Diameter: {};
  XCAFDimTolObjects_GeomToleranceModif_Reciprocity_Requirement: {};
  XCAFDimTolObjects_GeomToleranceModif_Separate_Requirement: {};
  XCAFDimTolObjects_GeomToleranceModif_Statistical_Tolerance: {};
  XCAFDimTolObjects_GeomToleranceModif_Tangent_Plane: {};
  XCAFDimTolObjects_GeomToleranceModif_All_Around: {};
  XCAFDimTolObjects_GeomToleranceModif_All_Over: {};
}

export declare type XCAFDimTolObjects_GeomToleranceType = {
  XCAFDimTolObjects_GeomToleranceType_None: {};
  XCAFDimTolObjects_GeomToleranceType_Angularity: {};
  XCAFDimTolObjects_GeomToleranceType_CircularRunout: {};
  XCAFDimTolObjects_GeomToleranceType_CircularityOrRoundness: {};
  XCAFDimTolObjects_GeomToleranceType_Coaxiality: {};
  XCAFDimTolObjects_GeomToleranceType_Concentricity: {};
  XCAFDimTolObjects_GeomToleranceType_Cylindricity: {};
  XCAFDimTolObjects_GeomToleranceType_Flatness: {};
  XCAFDimTolObjects_GeomToleranceType_Parallelism: {};
  XCAFDimTolObjects_GeomToleranceType_Perpendicularity: {};
  XCAFDimTolObjects_GeomToleranceType_Position: {};
  XCAFDimTolObjects_GeomToleranceType_ProfileOfLine: {};
  XCAFDimTolObjects_GeomToleranceType_ProfileOfSurface: {};
  XCAFDimTolObjects_GeomToleranceType_Straightness: {};
  XCAFDimTolObjects_GeomToleranceType_Symmetry: {};
  XCAFDimTolObjects_GeomToleranceType_TotalRunout: {};
}

export declare type XCAFDimTolObjects_GeomToleranceTypeValue = {
  XCAFDimTolObjects_GeomToleranceTypeValue_None: {};
  XCAFDimTolObjects_GeomToleranceTypeValue_Diameter: {};
  XCAFDimTolObjects_GeomToleranceTypeValue_SphericalDiameter: {};
}

export declare type XCAFDimTolObjects_GeomToleranceMatReqModif = {
  XCAFDimTolObjects_GeomToleranceMatReqModif_None: {};
  XCAFDimTolObjects_GeomToleranceMatReqModif_M: {};
  XCAFDimTolObjects_GeomToleranceMatReqModif_L: {};
}

export declare type XCAFDimTolObjects_GeomToleranceZoneModif = {
  XCAFDimTolObjects_GeomToleranceZoneModif_None: {};
  XCAFDimTolObjects_GeomToleranceZoneModif_Projected: {};
  XCAFDimTolObjects_GeomToleranceZoneModif_Runout: {};
  XCAFDimTolObjects_GeomToleranceZoneModif_NonUniform: {};
}

export declare type XCAFDimTolObjects_ToleranceZoneAffectedPlane = {
  XCAFDimTolObjects_ToleranceZoneAffectedPlane_None: {};
  XCAFDimTolObjects_ToleranceZoneAffectedPlane_Intersection: {};
  XCAFDimTolObjects_ToleranceZoneAffectedPlane_Orientation: {};
}

export declare type XCAFDoc_ColorType = {
  XCAFDoc_ColorGen: {};
  XCAFDoc_ColorSurf: {};
  XCAFDoc_ColorCurv: {};
}

export declare type XCAFView_ProjectionType = {
  XCAFView_ProjectionType_NoCamera: {};
  XCAFView_ProjectionType_Parallel: {};
  XCAFView_ProjectionType_Central: {};
}

export declare type TKXCAFLib = {
  XCAFDoc_VisMaterial: typeof XCAFDoc_VisMaterial;
  XCAFPrs_Style: typeof XCAFPrs_Style;
  XCAFPrs_DocumentExplorer_1: typeof XCAFPrs_DocumentExplorer_1;
  XCAFPrs_DocumentExplorer_2: typeof XCAFPrs_DocumentExplorer_2;
  XCAFPrs_DocumentExplorer_3: typeof XCAFPrs_DocumentExplorer_3;
  XCAFDimTolObjects_GeomToleranceObject_1: typeof XCAFDimTolObjects_GeomToleranceObject_1;
  XCAFDimTolObjects_GeomToleranceObject_2: typeof XCAFDimTolObjects_GeomToleranceObject_2;
  XCAFDimTolObjects_DatumObject_1: typeof XCAFDimTolObjects_DatumObject_1;
  XCAFDimTolObjects_DatumObject_2: typeof XCAFDimTolObjects_DatumObject_2;
  XCAFDimTolObjects_DimensionObject_1: typeof XCAFDimTolObjects_DimensionObject_1;
  XCAFDimTolObjects_DimensionObject_2: typeof XCAFDimTolObjects_DimensionObject_2;
  XCAFDoc_DimTolTool: typeof XCAFDoc_DimTolTool;
  XCAFDimTolObjects_Tool: typeof XCAFDimTolObjects_Tool;
  XCAFDoc_Area: typeof XCAFDoc_Area;
  XCAFDoc_AssemblyItemId_1: typeof XCAFDoc_AssemblyItemId_1;
  XCAFDoc_AssemblyItemId_2: typeof XCAFDoc_AssemblyItemId_2;
  XCAFDoc_AssemblyItemId_3: typeof XCAFDoc_AssemblyItemId_3;
  XCAFDoc_AssemblyItemRef: typeof XCAFDoc_AssemblyItemRef;
  XCAFDoc_Centroid: typeof XCAFDoc_Centroid;
  XCAFDoc_ClippingPlaneTool: typeof XCAFDoc_ClippingPlaneTool;
  XCAFDoc_Color: typeof XCAFDoc_Color;
  XCAFDoc_ColorTool: typeof XCAFDoc_ColorTool;
  XCAFDoc_Datum: typeof XCAFDoc_Datum;
  XCAFDoc_DimTol: typeof XCAFDoc_DimTol;
  XCAFDoc_Dimension: typeof XCAFDoc_Dimension;
  XCAFDoc_DocumentTool: typeof XCAFDoc_DocumentTool;
  XCAFDoc_GraphNode: typeof XCAFDoc_GraphNode;
  XCAFDoc_LayerTool: typeof XCAFDoc_LayerTool;
  XCAFDoc_Location: typeof XCAFDoc_Location;
  XCAFDoc_Material: typeof XCAFDoc_Material;
  XCAFDoc_MaterialTool: typeof XCAFDoc_MaterialTool;
  XCAFNoteObjects_NoteObject_1: typeof XCAFNoteObjects_NoteObject_1;
  XCAFNoteObjects_NoteObject_2: typeof XCAFNoteObjects_NoteObject_2;
  XCAFDoc_NoteComment: typeof XCAFDoc_NoteComment;
  XCAFDoc_NoteBalloon: typeof XCAFDoc_NoteBalloon;
  XCAFDoc_NoteBinData: typeof XCAFDoc_NoteBinData;
  XCAFDoc_NotesTool: typeof XCAFDoc_NotesTool;
  XCAFDoc_ShapeMapTool: typeof XCAFDoc_ShapeMapTool;
  XCAFDoc_ShapeTool: typeof XCAFDoc_ShapeTool;
  XCAFDoc_View: typeof XCAFDoc_View;
  XCAFDoc_ViewTool: typeof XCAFDoc_ViewTool;
  XCAFDoc_VisMaterialTool: typeof XCAFDoc_VisMaterialTool;
  XCAFDoc_Volume: typeof XCAFDoc_Volume;
  XCAFPrs_AISObject: typeof XCAFPrs_AISObject;
  XCAFPrs_DocumentIdIterator: typeof XCAFPrs_DocumentIdIterator;
  XCAFPrs_Texture: typeof XCAFPrs_Texture;
  XCAFView_Object_1: typeof XCAFView_Object_1;
  XCAFView_Object_2: typeof XCAFView_Object_2;
  Handle_XCAFDoc_VisMaterial_1: typeof Handle_XCAFDoc_VisMaterial_1;
  Handle_XCAFDoc_VisMaterial_2: typeof Handle_XCAFDoc_VisMaterial_2;
  Handle_XCAFDoc_VisMaterial_3: typeof Handle_XCAFDoc_VisMaterial_3;
  Handle_XCAFDoc_VisMaterial_4: typeof Handle_XCAFDoc_VisMaterial_4;
  XCAFPrs_IndexedDataMapOfShapeStyle_1: typeof XCAFPrs_IndexedDataMapOfShapeStyle_1;
  XCAFPrs_IndexedDataMapOfShapeStyle_2: typeof XCAFPrs_IndexedDataMapOfShapeStyle_2;
  XCAFPrs_IndexedDataMapOfShapeStyle_3: typeof XCAFPrs_IndexedDataMapOfShapeStyle_3;
  XCAFDimTolObjects_DimensionModifiersSequence_1: typeof XCAFDimTolObjects_DimensionModifiersSequence_1;
  XCAFDimTolObjects_DimensionModifiersSequence_2: typeof XCAFDimTolObjects_DimensionModifiersSequence_2;
  XCAFDimTolObjects_DimensionModifiersSequence_3: typeof XCAFDimTolObjects_DimensionModifiersSequence_3;
  XCAFDoc_DataMapOfShapeLabel_1: typeof XCAFDoc_DataMapOfShapeLabel_1;
  XCAFDoc_DataMapOfShapeLabel_2: typeof XCAFDoc_DataMapOfShapeLabel_2;
  XCAFDoc_DataMapOfShapeLabel_3: typeof XCAFDoc_DataMapOfShapeLabel_3;
  XCAFDimTolObjects_GeomToleranceModifiersSequence_1: typeof XCAFDimTolObjects_GeomToleranceModifiersSequence_1;
  XCAFDimTolObjects_GeomToleranceModifiersSequence_2: typeof XCAFDimTolObjects_GeomToleranceModifiersSequence_2;
  XCAFDimTolObjects_GeomToleranceModifiersSequence_3: typeof XCAFDimTolObjects_GeomToleranceModifiersSequence_3;
  Handle_XCAFDimTolObjects_GeomToleranceObject_1: typeof Handle_XCAFDimTolObjects_GeomToleranceObject_1;
  Handle_XCAFDimTolObjects_GeomToleranceObject_2: typeof Handle_XCAFDimTolObjects_GeomToleranceObject_2;
  Handle_XCAFDimTolObjects_GeomToleranceObject_3: typeof Handle_XCAFDimTolObjects_GeomToleranceObject_3;
  Handle_XCAFDimTolObjects_GeomToleranceObject_4: typeof Handle_XCAFDimTolObjects_GeomToleranceObject_4;
  Handle_XCAFApp_Application_1: typeof Handle_XCAFApp_Application_1;
  Handle_XCAFApp_Application_2: typeof Handle_XCAFApp_Application_2;
  Handle_XCAFApp_Application_3: typeof Handle_XCAFApp_Application_3;
  Handle_XCAFApp_Application_4: typeof Handle_XCAFApp_Application_4;
  Handle_XCAFDimTolObjects_DatumObject_1: typeof Handle_XCAFDimTolObjects_DatumObject_1;
  Handle_XCAFDimTolObjects_DatumObject_2: typeof Handle_XCAFDimTolObjects_DatumObject_2;
  Handle_XCAFDimTolObjects_DatumObject_3: typeof Handle_XCAFDimTolObjects_DatumObject_3;
  Handle_XCAFDimTolObjects_DatumObject_4: typeof Handle_XCAFDimTolObjects_DatumObject_4;
  Handle_XCAFDimTolObjects_DimensionObject_1: typeof Handle_XCAFDimTolObjects_DimensionObject_1;
  Handle_XCAFDimTolObjects_DimensionObject_2: typeof Handle_XCAFDimTolObjects_DimensionObject_2;
  Handle_XCAFDimTolObjects_DimensionObject_3: typeof Handle_XCAFDimTolObjects_DimensionObject_3;
  Handle_XCAFDimTolObjects_DimensionObject_4: typeof Handle_XCAFDimTolObjects_DimensionObject_4;
  Handle_XCAFDoc_DimTolTool_1: typeof Handle_XCAFDoc_DimTolTool_1;
  Handle_XCAFDoc_DimTolTool_2: typeof Handle_XCAFDoc_DimTolTool_2;
  Handle_XCAFDoc_DimTolTool_3: typeof Handle_XCAFDoc_DimTolTool_3;
  Handle_XCAFDoc_DimTolTool_4: typeof Handle_XCAFDoc_DimTolTool_4;
  Handle_XCAFDoc_Area_1: typeof Handle_XCAFDoc_Area_1;
  Handle_XCAFDoc_Area_2: typeof Handle_XCAFDoc_Area_2;
  Handle_XCAFDoc_Area_3: typeof Handle_XCAFDoc_Area_3;
  Handle_XCAFDoc_Area_4: typeof Handle_XCAFDoc_Area_4;
  Handle_XCAFDoc_AssemblyItemRef_1: typeof Handle_XCAFDoc_AssemblyItemRef_1;
  Handle_XCAFDoc_AssemblyItemRef_2: typeof Handle_XCAFDoc_AssemblyItemRef_2;
  Handle_XCAFDoc_AssemblyItemRef_3: typeof Handle_XCAFDoc_AssemblyItemRef_3;
  Handle_XCAFDoc_AssemblyItemRef_4: typeof Handle_XCAFDoc_AssemblyItemRef_4;
  Handle_XCAFDoc_Centroid_1: typeof Handle_XCAFDoc_Centroid_1;
  Handle_XCAFDoc_Centroid_2: typeof Handle_XCAFDoc_Centroid_2;
  Handle_XCAFDoc_Centroid_3: typeof Handle_XCAFDoc_Centroid_3;
  Handle_XCAFDoc_Centroid_4: typeof Handle_XCAFDoc_Centroid_4;
  Handle_XCAFDoc_ClippingPlaneTool_1: typeof Handle_XCAFDoc_ClippingPlaneTool_1;
  Handle_XCAFDoc_ClippingPlaneTool_2: typeof Handle_XCAFDoc_ClippingPlaneTool_2;
  Handle_XCAFDoc_ClippingPlaneTool_3: typeof Handle_XCAFDoc_ClippingPlaneTool_3;
  Handle_XCAFDoc_ClippingPlaneTool_4: typeof Handle_XCAFDoc_ClippingPlaneTool_4;
  Handle_XCAFDoc_Color_1: typeof Handle_XCAFDoc_Color_1;
  Handle_XCAFDoc_Color_2: typeof Handle_XCAFDoc_Color_2;
  Handle_XCAFDoc_Color_3: typeof Handle_XCAFDoc_Color_3;
  Handle_XCAFDoc_Color_4: typeof Handle_XCAFDoc_Color_4;
  Handle_XCAFDoc_ColorTool_1: typeof Handle_XCAFDoc_ColorTool_1;
  Handle_XCAFDoc_ColorTool_2: typeof Handle_XCAFDoc_ColorTool_2;
  Handle_XCAFDoc_ColorTool_3: typeof Handle_XCAFDoc_ColorTool_3;
  Handle_XCAFDoc_ColorTool_4: typeof Handle_XCAFDoc_ColorTool_4;
  Handle_XCAFDoc_Datum_1: typeof Handle_XCAFDoc_Datum_1;
  Handle_XCAFDoc_Datum_2: typeof Handle_XCAFDoc_Datum_2;
  Handle_XCAFDoc_Datum_3: typeof Handle_XCAFDoc_Datum_3;
  Handle_XCAFDoc_Datum_4: typeof Handle_XCAFDoc_Datum_4;
  Handle_XCAFDoc_DimTol_1: typeof Handle_XCAFDoc_DimTol_1;
  Handle_XCAFDoc_DimTol_2: typeof Handle_XCAFDoc_DimTol_2;
  Handle_XCAFDoc_DimTol_3: typeof Handle_XCAFDoc_DimTol_3;
  Handle_XCAFDoc_DimTol_4: typeof Handle_XCAFDoc_DimTol_4;
  Handle_XCAFDoc_Dimension_1: typeof Handle_XCAFDoc_Dimension_1;
  Handle_XCAFDoc_Dimension_2: typeof Handle_XCAFDoc_Dimension_2;
  Handle_XCAFDoc_Dimension_3: typeof Handle_XCAFDoc_Dimension_3;
  Handle_XCAFDoc_Dimension_4: typeof Handle_XCAFDoc_Dimension_4;
  Handle_XCAFDoc_DocumentTool_1: typeof Handle_XCAFDoc_DocumentTool_1;
  Handle_XCAFDoc_DocumentTool_2: typeof Handle_XCAFDoc_DocumentTool_2;
  Handle_XCAFDoc_DocumentTool_3: typeof Handle_XCAFDoc_DocumentTool_3;
  Handle_XCAFDoc_DocumentTool_4: typeof Handle_XCAFDoc_DocumentTool_4;
  Handle_XCAFDoc_GeomTolerance_1: typeof Handle_XCAFDoc_GeomTolerance_1;
  Handle_XCAFDoc_GeomTolerance_2: typeof Handle_XCAFDoc_GeomTolerance_2;
  Handle_XCAFDoc_GeomTolerance_3: typeof Handle_XCAFDoc_GeomTolerance_3;
  Handle_XCAFDoc_GeomTolerance_4: typeof Handle_XCAFDoc_GeomTolerance_4;
  Handle_XCAFDoc_GraphNode_1: typeof Handle_XCAFDoc_GraphNode_1;
  Handle_XCAFDoc_GraphNode_2: typeof Handle_XCAFDoc_GraphNode_2;
  Handle_XCAFDoc_GraphNode_3: typeof Handle_XCAFDoc_GraphNode_3;
  Handle_XCAFDoc_GraphNode_4: typeof Handle_XCAFDoc_GraphNode_4;
  Handle_XCAFDoc_LayerTool_1: typeof Handle_XCAFDoc_LayerTool_1;
  Handle_XCAFDoc_LayerTool_2: typeof Handle_XCAFDoc_LayerTool_2;
  Handle_XCAFDoc_LayerTool_3: typeof Handle_XCAFDoc_LayerTool_3;
  Handle_XCAFDoc_LayerTool_4: typeof Handle_XCAFDoc_LayerTool_4;
  Handle_XCAFDoc_Location_1: typeof Handle_XCAFDoc_Location_1;
  Handle_XCAFDoc_Location_2: typeof Handle_XCAFDoc_Location_2;
  Handle_XCAFDoc_Location_3: typeof Handle_XCAFDoc_Location_3;
  Handle_XCAFDoc_Location_4: typeof Handle_XCAFDoc_Location_4;
  Handle_XCAFDoc_Material_1: typeof Handle_XCAFDoc_Material_1;
  Handle_XCAFDoc_Material_2: typeof Handle_XCAFDoc_Material_2;
  Handle_XCAFDoc_Material_3: typeof Handle_XCAFDoc_Material_3;
  Handle_XCAFDoc_Material_4: typeof Handle_XCAFDoc_Material_4;
  Handle_XCAFDoc_MaterialTool_1: typeof Handle_XCAFDoc_MaterialTool_1;
  Handle_XCAFDoc_MaterialTool_2: typeof Handle_XCAFDoc_MaterialTool_2;
  Handle_XCAFDoc_MaterialTool_3: typeof Handle_XCAFDoc_MaterialTool_3;
  Handle_XCAFDoc_MaterialTool_4: typeof Handle_XCAFDoc_MaterialTool_4;
  Handle_XCAFNoteObjects_NoteObject_1: typeof Handle_XCAFNoteObjects_NoteObject_1;
  Handle_XCAFNoteObjects_NoteObject_2: typeof Handle_XCAFNoteObjects_NoteObject_2;
  Handle_XCAFNoteObjects_NoteObject_3: typeof Handle_XCAFNoteObjects_NoteObject_3;
  Handle_XCAFNoteObjects_NoteObject_4: typeof Handle_XCAFNoteObjects_NoteObject_4;
  Handle_XCAFDoc_Note_1: typeof Handle_XCAFDoc_Note_1;
  Handle_XCAFDoc_Note_2: typeof Handle_XCAFDoc_Note_2;
  Handle_XCAFDoc_Note_3: typeof Handle_XCAFDoc_Note_3;
  Handle_XCAFDoc_Note_4: typeof Handle_XCAFDoc_Note_4;
  Handle_XCAFDoc_NoteComment_1: typeof Handle_XCAFDoc_NoteComment_1;
  Handle_XCAFDoc_NoteComment_2: typeof Handle_XCAFDoc_NoteComment_2;
  Handle_XCAFDoc_NoteComment_3: typeof Handle_XCAFDoc_NoteComment_3;
  Handle_XCAFDoc_NoteComment_4: typeof Handle_XCAFDoc_NoteComment_4;
  Handle_XCAFDoc_NoteBalloon_1: typeof Handle_XCAFDoc_NoteBalloon_1;
  Handle_XCAFDoc_NoteBalloon_2: typeof Handle_XCAFDoc_NoteBalloon_2;
  Handle_XCAFDoc_NoteBalloon_3: typeof Handle_XCAFDoc_NoteBalloon_3;
  Handle_XCAFDoc_NoteBalloon_4: typeof Handle_XCAFDoc_NoteBalloon_4;
  Handle_XCAFDoc_NoteBinData_1: typeof Handle_XCAFDoc_NoteBinData_1;
  Handle_XCAFDoc_NoteBinData_2: typeof Handle_XCAFDoc_NoteBinData_2;
  Handle_XCAFDoc_NoteBinData_3: typeof Handle_XCAFDoc_NoteBinData_3;
  Handle_XCAFDoc_NoteBinData_4: typeof Handle_XCAFDoc_NoteBinData_4;
  Handle_XCAFDoc_NotesTool_1: typeof Handle_XCAFDoc_NotesTool_1;
  Handle_XCAFDoc_NotesTool_2: typeof Handle_XCAFDoc_NotesTool_2;
  Handle_XCAFDoc_NotesTool_3: typeof Handle_XCAFDoc_NotesTool_3;
  Handle_XCAFDoc_NotesTool_4: typeof Handle_XCAFDoc_NotesTool_4;
  Handle_XCAFDoc_ShapeMapTool_1: typeof Handle_XCAFDoc_ShapeMapTool_1;
  Handle_XCAFDoc_ShapeMapTool_2: typeof Handle_XCAFDoc_ShapeMapTool_2;
  Handle_XCAFDoc_ShapeMapTool_3: typeof Handle_XCAFDoc_ShapeMapTool_3;
  Handle_XCAFDoc_ShapeMapTool_4: typeof Handle_XCAFDoc_ShapeMapTool_4;
  Handle_XCAFDoc_ShapeTool_1: typeof Handle_XCAFDoc_ShapeTool_1;
  Handle_XCAFDoc_ShapeTool_2: typeof Handle_XCAFDoc_ShapeTool_2;
  Handle_XCAFDoc_ShapeTool_3: typeof Handle_XCAFDoc_ShapeTool_3;
  Handle_XCAFDoc_ShapeTool_4: typeof Handle_XCAFDoc_ShapeTool_4;
  Handle_XCAFDoc_View_1: typeof Handle_XCAFDoc_View_1;
  Handle_XCAFDoc_View_2: typeof Handle_XCAFDoc_View_2;
  Handle_XCAFDoc_View_3: typeof Handle_XCAFDoc_View_3;
  Handle_XCAFDoc_View_4: typeof Handle_XCAFDoc_View_4;
  Handle_XCAFDoc_ViewTool_1: typeof Handle_XCAFDoc_ViewTool_1;
  Handle_XCAFDoc_ViewTool_2: typeof Handle_XCAFDoc_ViewTool_2;
  Handle_XCAFDoc_ViewTool_3: typeof Handle_XCAFDoc_ViewTool_3;
  Handle_XCAFDoc_ViewTool_4: typeof Handle_XCAFDoc_ViewTool_4;
  Handle_XCAFDoc_VisMaterialTool_1: typeof Handle_XCAFDoc_VisMaterialTool_1;
  Handle_XCAFDoc_VisMaterialTool_2: typeof Handle_XCAFDoc_VisMaterialTool_2;
  Handle_XCAFDoc_VisMaterialTool_3: typeof Handle_XCAFDoc_VisMaterialTool_3;
  Handle_XCAFDoc_VisMaterialTool_4: typeof Handle_XCAFDoc_VisMaterialTool_4;
  Handle_XCAFDoc_Volume_1: typeof Handle_XCAFDoc_Volume_1;
  Handle_XCAFDoc_Volume_2: typeof Handle_XCAFDoc_Volume_2;
  Handle_XCAFDoc_Volume_3: typeof Handle_XCAFDoc_Volume_3;
  Handle_XCAFDoc_Volume_4: typeof Handle_XCAFDoc_Volume_4;
  Handle_XCAFPrs_AISObject_1: typeof Handle_XCAFPrs_AISObject_1;
  Handle_XCAFPrs_AISObject_2: typeof Handle_XCAFPrs_AISObject_2;
  Handle_XCAFPrs_AISObject_3: typeof Handle_XCAFPrs_AISObject_3;
  Handle_XCAFPrs_AISObject_4: typeof Handle_XCAFPrs_AISObject_4;
  XCAFPrs_DataMapOfStyleShape_1: typeof XCAFPrs_DataMapOfStyleShape_1;
  XCAFPrs_DataMapOfStyleShape_2: typeof XCAFPrs_DataMapOfStyleShape_2;
  XCAFPrs_DataMapOfStyleShape_3: typeof XCAFPrs_DataMapOfStyleShape_3;
  Handle_XCAFPrs_Driver_1: typeof Handle_XCAFPrs_Driver_1;
  Handle_XCAFPrs_Driver_2: typeof Handle_XCAFPrs_Driver_2;
  Handle_XCAFPrs_Driver_3: typeof Handle_XCAFPrs_Driver_3;
  Handle_XCAFPrs_Driver_4: typeof Handle_XCAFPrs_Driver_4;
  Handle_XCAFView_Object_1: typeof Handle_XCAFView_Object_1;
  Handle_XCAFView_Object_2: typeof Handle_XCAFView_Object_2;
  Handle_XCAFView_Object_3: typeof Handle_XCAFView_Object_3;
  Handle_XCAFView_Object_4: typeof Handle_XCAFView_Object_4;
  XCAFDimTolObjects_DimensionModif: typeof XCAFDimTolObjects_DimensionModif;
  XCAFDimTolObjects_DatumSingleModif: typeof XCAFDimTolObjects_DatumSingleModif;
  XCAFDimTolObjects_DatumModifWithValue: typeof XCAFDimTolObjects_DatumModifWithValue;
  XCAFDimTolObjects_DimensionFormVariance: typeof XCAFDimTolObjects_DimensionFormVariance;
  XCAFDimTolObjects_DimensionGrade: typeof XCAFDimTolObjects_DimensionGrade;
  XCAFDimTolObjects_DimensionType: typeof XCAFDimTolObjects_DimensionType;
  XCAFDimTolObjects_DatumTargetType: typeof XCAFDimTolObjects_DatumTargetType;
  XCAFDimTolObjects_DimensionQualifier: typeof XCAFDimTolObjects_DimensionQualifier;
  XCAFDimTolObjects_GeomToleranceModif: typeof XCAFDimTolObjects_GeomToleranceModif;
  XCAFDimTolObjects_GeomToleranceType: typeof XCAFDimTolObjects_GeomToleranceType;
  XCAFDimTolObjects_GeomToleranceTypeValue: typeof XCAFDimTolObjects_GeomToleranceTypeValue;
  XCAFDimTolObjects_GeomToleranceMatReqModif: typeof XCAFDimTolObjects_GeomToleranceMatReqModif;
  XCAFDimTolObjects_GeomToleranceZoneModif: typeof XCAFDimTolObjects_GeomToleranceZoneModif;
  XCAFDimTolObjects_ToleranceZoneAffectedPlane: typeof XCAFDimTolObjects_ToleranceZoneAffectedPlane;
  XCAFDoc_ColorType: typeof XCAFDoc_ColorType;
  XCAFView_ProjectionType: typeof XCAFView_ProjectionType;
};
