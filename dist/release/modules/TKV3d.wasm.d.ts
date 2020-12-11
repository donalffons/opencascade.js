declare const libName = "./modules/TKV3d.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class AIS {
  constructor();
}

export declare class PrsMgr_PresentationManager extends Standard_Transient {
  constructor(theStructureManager: Handle_Graphic3d_StructureManager)
  get_type_name(): logical1;
  get_type_descriptor(): any;
  DynamicType(): any;
  Display(thePrsObject: any, theMode: Standard_Integer): void;
  Erase(thePrsObject: any, theMode: Standard_Integer): void;
  Clear(thePrsObject: any, theMode: Standard_Integer): void;
  SetVisibility(thePrsObject: any, theMode: Standard_Integer, theValue: Standard_Boolean): void;
  Unhighlight_1(thePrsObject: any): void;
  Unhighlight_2(thePrsObject: any, theMode: Standard_Integer): void;
  SetDisplayPriority(thePrsObject: any, theMode: Standard_Integer, theNewPrior: Standard_Integer): void;
  DisplayPriority(thePrsObject: any, theMode: Standard_Integer): Standard_Integer;
  SetZLayer(thePrsObject: any, theLayerId: Graphic3d_ZLayerId): void;
  GetZLayer(thePrsObject: any): Graphic3d_ZLayerId;
  IsDisplayed(thePrsObject: any, theMode: Standard_Integer): Standard_Boolean;
  IsHighlighted(thePrsObject: any, theMode: Standard_Integer): Standard_Boolean;
  Update(thePrsObject: any, theMode: Standard_Integer): void;
  BeginImmediateDraw(): void;
  ClearImmediateDraw(): void;
  AddToImmediateList(thePrs: any): void;
  EndImmediateDraw(theViewer: any): void;
  RedrawImmediate(theViewer: any): void;
  IsImmediateModeOn(): Standard_Boolean;
  Color(thePrsObject: any, theStyle: any, theMode: Standard_Integer, theSelObj: any, theImmediateStructLayerId: Graphic3d_ZLayerId): void;
  Connect(thePrsObject: any, theOtherObject: any, theMode: Standard_Integer, theOtherMode: Standard_Integer): void;
  Transform(thePrsObject: any, theTransformation: any, theMode: Standard_Integer): void;
  StructureManager(): any;
  HasPresentation(thePrsObject: any, theMode: Standard_Integer): Standard_Boolean;
  Presentation(thePrsObject: any, theMode: Standard_Integer, theToCreate: Standard_Boolean, theSelObj: any): any;
  UpdateHighlightTrsf(theViewer: any, theObj: any, theMode: Standard_Integer, theSelObj: any): void;
}

export declare class Prs3d_DimensionUnits {
  SetAngleUnits(theUnits: TCollection_AsciiString): void;
  GetAngleUnits(): TCollection_AsciiString;
  SetLengthUnits(theUnits: TCollection_AsciiString): void;
  GetLengthUnits(): TCollection_AsciiString;
}

  export declare class Prs3d_DimensionUnits_1 extends Prs3d_DimensionUnits {
    constructor();
  }

  export declare class Prs3d_DimensionUnits_2 extends Prs3d_DimensionUnits {
    constructor(theUnits: Prs3d_DimensionUnits);
  }

export declare class Prs3d_Drawer extends Graphic3d_PresentationAttributes {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetTypeOfDeflection(theTypeOfDeflection: Aspect_TypeOfDeflection): void;
  TypeOfDeflection(): Aspect_TypeOfDeflection;
  HasOwnTypeOfDeflection(): Standard_Boolean;
  SetMaximalChordialDeviation(theChordialDeviation: Standard_Real): void;
  MaximalChordialDeviation(): Standard_Real;
  HasOwnMaximalChordialDeviation(): Standard_Boolean;
  SetTypeOfHLR(theTypeOfHLR: Prs3d_TypeOfHLR): void;
  TypeOfHLR(): Prs3d_TypeOfHLR;
  HasOwnTypeOfHLR(): Standard_Boolean;
  SetMaximalParameterValue(theValue: Standard_Real): void;
  MaximalParameterValue(): Standard_Real;
  HasOwnMaximalParameterValue(): Standard_Boolean;
  SetIsoOnPlane(theIsEnabled: Standard_Boolean): void;
  IsoOnPlane(): Standard_Boolean;
  HasOwnIsoOnPlane(): Standard_Boolean;
  IsoOnTriangulation(): Standard_Boolean;
  HasOwnIsoOnTriangulation(): Standard_Boolean;
  SetIsoOnTriangulation(theToEnable: Standard_Boolean): void;
  SetDiscretisation(theValue: Standard_Integer): void;
  Discretisation(): Standard_Integer;
  HasOwnDiscretisation(): Standard_Boolean;
  SetDeviationCoefficient_1(theCoefficient: Standard_Real): void;
  DeviationCoefficient(): Standard_Real;
  SetDeviationCoefficient_2(): void;
  HasOwnDeviationCoefficient(): Standard_Boolean;
  PreviousDeviationCoefficient(): Standard_Real;
  UpdatePreviousDeviationCoefficient(): void;
  SetDeviationAngle_1(theAngle: Standard_Real): void;
  DeviationAngle(): Standard_Real;
  SetDeviationAngle_2(): void;
  HasOwnDeviationAngle(): Standard_Boolean;
  PreviousDeviationAngle(): Standard_Real;
  UpdatePreviousDeviationAngle(): void;
  SetAutoTriangulation(theIsEnabled: Standard_Boolean): void;
  IsAutoTriangulation(): Standard_Boolean;
  HasOwnIsAutoTriangulation(): Standard_Boolean;
  UIsoAspect(): any;
  SetUIsoAspect(theAspect: any): void;
  HasOwnUIsoAspect(): Standard_Boolean;
  VIsoAspect(): any;
  SetVIsoAspect(theAspect: any): void;
  HasOwnVIsoAspect(): Standard_Boolean;
  WireAspect(): any;
  SetWireAspect(theAspect: any): void;
  HasOwnWireAspect(): Standard_Boolean;
  SetWireDraw(theIsEnabled: Standard_Boolean): void;
  WireDraw(): Standard_Boolean;
  HasOwnWireDraw(): Standard_Boolean;
  PointAspect(): any;
  SetPointAspect(theAspect: any): void;
  HasOwnPointAspect(): Standard_Boolean;
  SetupOwnPointAspect(theDefaults: any): Standard_Boolean;
  LineAspect(): any;
  SetLineAspect(theAspect: any): void;
  HasOwnLineAspect(): Standard_Boolean;
  SetOwnLineAspects(theDefaults: any): Standard_Boolean;
  SetOwnDatumAspects(theDefaults: any): Standard_Boolean;
  TextAspect(): any;
  SetTextAspect(theAspect: any): void;
  HasOwnTextAspect(): Standard_Boolean;
  ShadingAspect(): any;
  SetShadingAspect(theAspect: any): void;
  HasOwnShadingAspect(): Standard_Boolean;
  SetupOwnShadingAspect(theDefaults: any): Standard_Boolean;
  SeenLineAspect(): any;
  SetSeenLineAspect(theAspect: any): void;
  HasOwnSeenLineAspect(): Standard_Boolean;
  PlaneAspect(): any;
  SetPlaneAspect(theAspect: any): void;
  HasOwnPlaneAspect(): Standard_Boolean;
  ArrowAspect(): any;
  SetArrowAspect(theAspect: any): void;
  HasOwnArrowAspect(): Standard_Boolean;
  SetLineArrowDraw(theIsEnabled: Standard_Boolean): void;
  LineArrowDraw(): Standard_Boolean;
  HasOwnLineArrowDraw(): Standard_Boolean;
  HiddenLineAspect(): any;
  SetHiddenLineAspect(theAspect: any): void;
  HasOwnHiddenLineAspect(): Standard_Boolean;
  DrawHiddenLine(): Standard_Boolean;
  EnableDrawHiddenLine(): void;
  DisableDrawHiddenLine(): void;
  HasOwnDrawHiddenLine(): Standard_Boolean;
  VectorAspect(): any;
  SetVectorAspect(theAspect: any): void;
  HasOwnVectorAspect(): Standard_Boolean;
  SetVertexDrawMode(theMode: Prs3d_VertexDrawMode): void;
  VertexDrawMode(): Prs3d_VertexDrawMode;
  HasOwnVertexDrawMode(): Standard_Boolean;
  DatumAspect(): any;
  SetDatumAspect(theAspect: any): void;
  HasOwnDatumAspect(): Standard_Boolean;
  SectionAspect(): any;
  SetSectionAspect(theAspect: any): void;
  HasOwnSectionAspect(): Standard_Boolean;
  SetFreeBoundaryAspect(theAspect: any): void;
  FreeBoundaryAspect(): any;
  HasOwnFreeBoundaryAspect(): Standard_Boolean;
  SetFreeBoundaryDraw(theIsEnabled: Standard_Boolean): void;
  FreeBoundaryDraw(): Standard_Boolean;
  HasOwnFreeBoundaryDraw(): Standard_Boolean;
  SetUnFreeBoundaryAspect(theAspect: any): void;
  UnFreeBoundaryAspect(): any;
  HasOwnUnFreeBoundaryAspect(): Standard_Boolean;
  SetUnFreeBoundaryDraw(theIsEnabled: Standard_Boolean): void;
  UnFreeBoundaryDraw(): Standard_Boolean;
  HasOwnUnFreeBoundaryDraw(): Standard_Boolean;
  SetFaceBoundaryAspect(theAspect: any): void;
  FaceBoundaryAspect(): any;
  HasOwnFaceBoundaryAspect(): Standard_Boolean;
  SetupOwnFaceBoundaryAspect(theDefaults: any): Standard_Boolean;
  SetFaceBoundaryDraw(theIsEnabled: Standard_Boolean): void;
  FaceBoundaryDraw(): Standard_Boolean;
  HasOwnFaceBoundaryDraw(): Standard_Boolean;
  HasOwnFaceBoundaryUpperContinuity(): Standard_Boolean;
  FaceBoundaryUpperContinuity(): GeomAbs_Shape;
  SetFaceBoundaryUpperContinuity(theMostAllowedEdgeClass: GeomAbs_Shape): void;
  UnsetFaceBoundaryUpperContinuity(): void;
  DimensionAspect(): any;
  SetDimensionAspect(theAspect: any): void;
  HasOwnDimensionAspect(): Standard_Boolean;
  SetDimLengthModelUnits(theUnits: TCollection_AsciiString): void;
  SetDimAngleModelUnits(theUnits: TCollection_AsciiString): void;
  DimLengthModelUnits(): TCollection_AsciiString;
  DimAngleModelUnits(): TCollection_AsciiString;
  HasOwnDimLengthModelUnits(): Standard_Boolean;
  HasOwnDimAngleModelUnits(): Standard_Boolean;
  SetDimLengthDisplayUnits(theUnits: TCollection_AsciiString): void;
  SetDimAngleDisplayUnits(theUnits: TCollection_AsciiString): void;
  DimLengthDisplayUnits(): TCollection_AsciiString;
  DimAngleDisplayUnits(): TCollection_AsciiString;
  HasOwnDimLengthDisplayUnits(): Standard_Boolean;
  HasOwnDimAngleDisplayUnits(): Standard_Boolean;
  Link_1(): any;
  HasLink(): Standard_Boolean;
  Link_2(theDrawer: any): void;
  SetLink(theDrawer: any): void;
  ClearLocalAttributes(): void;
  SetShaderProgram(theProgram: any, theAspect: Graphic3d_GroupAspect, theToOverrideDefaults: boolean): boolean;
  SetShadingModel(theModel: Graphic3d_TypeOfShadingModel, theToOverrideDefaults: boolean): boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  SetHLRAngle_1(theAngle: Standard_Real): void;
  HLRAngle(): Standard_Real;
  SetHLRAngle_2(): void;
  HasOwnHLRDeviationAngle(): Standard_Boolean;
  PreviousHLRDeviationAngle(): Standard_Real;
}

export declare class PrsMgr_Presentation extends Graphic3d_Structure {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Presentation(): Prs3d_Presentation;
  PresentationManager(): any;
  SetUpdateStatus(theUpdateStatus: Standard_Boolean): void;
  MustBeUpdated(): Standard_Boolean;
  Mode(): Standard_Integer;
  Display(): void;
  Erase(): void;
  Highlight(theStyle: any): void;
  Unhighlight(): void;
  IsDisplayed(): Standard_Boolean;
  Clear(theWithDestruction: Standard_Boolean): void;
  Compute(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class PrsMgr_PresentableObject extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Presentations(): PrsMgr_Presentations;
  ZLayer(): Graphic3d_ZLayerId;
  SetZLayer(theLayerId: Graphic3d_ZLayerId): void;
  IsMutable(): Standard_Boolean;
  SetMutable(theIsMutable: Standard_Boolean): void;
  HasDisplayMode(): Standard_Boolean;
  DisplayMode(): Standard_Integer;
  SetDisplayMode(theMode: Standard_Integer): void;
  UnsetDisplayMode(): void;
  HasHilightMode(): Standard_Boolean;
  HilightMode(): Standard_Integer;
  SetHilightMode(theMode: Standard_Integer): void;
  UnsetHilightMode(): void;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  DefaultDisplayMode(): Standard_Integer;
  ToBeUpdated_1(theToIncludeHidden: Standard_Boolean): Standard_Boolean;
  SetToUpdate_1(theMode: Standard_Integer): void;
  SetToUpdate_2(): void;
  IsInfinite(): Standard_Boolean;
  SetInfiniteState(theFlag: Standard_Boolean): void;
  TypeOfPresentation3d(): PrsMgr_TypeOfPresentation3d;
  SetTypeOfPresentation(theType: PrsMgr_TypeOfPresentation3d): void;
  Attributes(): any;
  SetAttributes(theDrawer: any): void;
  HilightAttributes(): any;
  SetHilightAttributes(theDrawer: any): void;
  DynamicHilightAttributes(): any;
  SetDynamicHilightAttributes(theDrawer: any): void;
  UnsetHilightAttributes(): void;
  SynchronizeAspects(): void;
  TransformPersistence(): any;
  SetTransformPersistence_1(theTrsfPers: any): void;
  LocalTransformationGeom(): any;
  SetLocalTransformation_1(theTrsf: gp_Trsf): void;
  SetLocalTransformation_2(theTrsf: any): void;
  HasTransformation(): Standard_Boolean;
  TransformationGeom(): any;
  LocalTransformation(): gp_Trsf;
  Transformation(): gp_Trsf;
  InversedTransformation(): gp_GTrsf;
  CombinedParentTransformation(): any;
  ResetTransformation(): void;
  UpdateTransformation(): void;
  ClipPlanes(): any;
  SetClipPlanes_1(thePlanes: any): void;
  AddClipPlane(thePlane: any): void;
  RemoveClipPlane(thePlane: any): void;
  Parent(): PrsMgr_PresentableObject;
  Children(): PrsMgr_ListOfPresentableObjects;
  AddChild(theObject: any): void;
  AddChildWithCurrentTransformation(theObject: any): void;
  RemoveChild(theObject: any): void;
  RemoveChildWithRestoreTransformation(theObject: any): void;
  HasOwnPresentations(): Standard_Boolean;
  BoundingBox(theBndBox: Bnd_Box): void;
  SetIsoOnTriangulation(theIsEnabled: Standard_Boolean): void;
  CurrentFacingModel(): Aspect_TypeOfFacingModel;
  SetCurrentFacingModel(theModel: Aspect_TypeOfFacingModel): void;
  HasColor(): Standard_Boolean;
  Color(theColor: Quantity_Color): void;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  HasWidth(): Standard_Boolean;
  Width(): Standard_Real;
  SetWidth(theWidth: Standard_Real): void;
  UnsetWidth(): void;
  HasMaterial(): Standard_Boolean;
  Material(): Graphic3d_NameOfMaterial;
  SetMaterial(aName: Graphic3d_MaterialAspect): void;
  UnsetMaterial(): void;
  IsTransparent(): Standard_Boolean;
  Transparency(): Standard_Real;
  SetTransparency(aValue: Standard_Real): void;
  UnsetTransparency(): void;
  HasPolygonOffsets(): Standard_Boolean;
  PolygonOffsets(aMode: Standard_Integer, aFactor: Standard_ShortReal, aUnits: Standard_ShortReal): void;
  SetPolygonOffsets(aMode: Standard_Integer, aFactor: Standard_ShortReal, aUnits: Standard_ShortReal): void;
  UnsetAttributes(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  ToBeUpdated_2(ListOfMode: TColStd_ListOfInteger): void;
  SetClipPlanes_2(thePlanes: Graphic3d_SequenceOfHClipPlane): void;
  SetTransformPersistence_2(theMode: Graphic3d_TransModeFlags, thePoint: gp_Pnt): void;
  GetTransformPersistenceMode(): Graphic3d_TransModeFlags;
  GetTransformPersistencePoint(): gp_Pnt;
  ToPropagateVisualState(): Standard_Boolean;
  SetPropagateVisualState(theFlag: Standard_Boolean): void;
}

export declare class SelectBasics_SelectingVolumeManager {
  GetActiveSelectionType(): Standard_Integer;
  Overlaps_1(theBoxMin: NCollection_Vec3<Standard_Real>, theBoxMax: NCollection_Vec3<Standard_Real>, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_2(theBoxMin: NCollection_Vec3<Standard_Real>, theBoxMax: NCollection_Vec3<Standard_Real>, theInside: Standard_Boolean): Standard_Boolean;
  Overlaps_3(thePnt: gp_Pnt, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_4(thePnt: gp_Pnt): Standard_Boolean;
  Overlaps_5(theArrayOfPts: any, theSensType: Standard_Integer, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_6(theArrayOfPts: TColgp_Array1OfPnt, theSensType: Standard_Integer, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_7(thePt1: gp_Pnt, thePt2: gp_Pnt, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_8(thePt1: gp_Pnt, thePt2: gp_Pnt, thePt3: gp_Pnt, theSensType: Standard_Integer, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  DistToGeometryCenter(theCOG: gp_Pnt): Standard_Real;
  DetectedPoint(theDepth: Standard_Real): gp_Pnt;
  IsOverlapAllowed(): Standard_Boolean;
  GetNearPickedPnt(): gp_Pnt;
  GetFarPickedPnt(): gp_Pnt;
  GetMousePosition(): gp_Pnt2d;
  GetPlanes(thePlaneEquations: NCollection_Vector<NCollection_Vec4<Standard_Real>>): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_FrustumBuilder extends Standard_Transient {
  constructor()
  SetWorldViewMatrix(theWorldViewMatrix: Graphic3d_Mat4d): void;
  WorldViewMatrix(): Graphic3d_Mat4d;
  SetProjectionMatrix(theProjection: Graphic3d_Mat4d): void;
  ProjectionMatrix(): Graphic3d_Mat4d;
  SetWorldViewProjState(theState: Graphic3d_WorldViewProjState): void;
  WorldViewProjState(): Graphic3d_WorldViewProjState;
  SetWindowSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  SetViewport(theX: Standard_Real, theY: Standard_Real, theWidth: Standard_Real, theHeight: Standard_Real): void;
  InvalidateViewport(): void;
  WindowSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  SignedPlanePntDist(theEq: SelectMgr_Vec3, thePnt: SelectMgr_Vec3): Standard_Real;
  ProjectPntOnViewPlane(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): gp_Pnt;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_ViewClipRange {
  constructor()
  IsClipped(theDepth: Standard_Real): Standard_Boolean;
  GetNearestDepth(theRange: Bnd_Range, theDepth: Standard_Real): Standard_Boolean;
  SetVoid(): void;
  AddClippingPlanes(thePlanes: Graphic3d_SequenceOfHClipPlane, thePickRay: gp_Ax1): void;
  ChangeUnclipRange(): Bnd_Range;
  AddClipSubRange(theRange: Bnd_Range): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_BaseFrustum extends Standard_Transient {
  constructor()
  Camera(): any;
  SetCamera_1(theCamera: any): void;
  SetCamera_2(theProjection: Graphic3d_Mat4d, theWorldView: Graphic3d_Mat4d, theIsOrthographic: Standard_Boolean, theWVPState: Graphic3d_WorldViewProjState): void;
  ProjectionMatrix(): Graphic3d_Mat4d;
  WorldViewMatrix(): Graphic3d_Mat4d;
  WorldViewProjState(): Graphic3d_WorldViewProjState;
  SetPixelTolerance(theTol: Standard_Integer): void;
  SetWindowSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  WindowSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  SetViewport(theX: Standard_Real, theY: Standard_Real, theWidth: Standard_Real, theHeight: Standard_Real): void;
  SetBuilder(theBuilder: any): void;
  Build_1(a0: gp_Pnt2d): void;
  Build_2(a0: gp_Pnt2d, a1: gp_Pnt2d): void;
  Build_3(a0: gp_Pnt2d, a1: gp_Pnt2d, a2: gp_Pnt2d): void;
  Build_4(a0: TColgp_Array1OfPnt2d): void;
  ScaleAndTransform(a0: Standard_Integer, a1: gp_GTrsf): any;
  Overlaps_1(theBoxMin: SelectMgr_Vec3, theBoxMax: SelectMgr_Vec3, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_2(theBoxMin: SelectMgr_Vec3, theBoxMax: SelectMgr_Vec3, theInside: Standard_Boolean): Standard_Boolean;
  Overlaps_3(thePnt: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_4(thePnt: gp_Pnt): Standard_Boolean;
  Overlaps_5(theArrayOfPnts: TColgp_Array1OfPnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_6(thePnt1: gp_Pnt, thePnt2: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_7(thePt1: gp_Pnt, thePt2: gp_Pnt, thePt3: gp_Pnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  DistToGeometryCenter(theCOG: gp_Pnt): Standard_Real;
  DetectedPoint(theDepth: Standard_Real): gp_Pnt;
  GetPlanes(thePlaneEquations: NCollection_Vector<SelectMgr_Vec4>): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_RectangularFrustum {
  constructor()
  Build_1(thePoint: gp_Pnt2d): void;
  Build_2(theMinPnt: gp_Pnt2d, theMaxPnt: gp_Pnt2d): void;
  ScaleAndTransform(theScaleFactor: Standard_Integer, theTrsf: gp_GTrsf): any;
  Overlaps_1(theBoxMin: SelectMgr_Vec3, theBoxMax: SelectMgr_Vec3, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_2(theBoxMin: SelectMgr_Vec3, theBoxMax: SelectMgr_Vec3, theInside: Standard_Boolean): Standard_Boolean;
  Overlaps_3(thePnt: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_4(thePnt: gp_Pnt): Standard_Boolean;
  Overlaps_5(theArrayOfPnts: TColgp_Array1OfPnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_6(thePnt1: gp_Pnt, thePnt2: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_7(thePnt1: gp_Pnt, thePnt2: gp_Pnt, thePnt3: gp_Pnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  DistToGeometryCenter(theCOG: gp_Pnt): Standard_Real;
  DetectedPoint(theDepth: Standard_Real): gp_Pnt;
  GetVertices(): gp_Pnt;
  GetNearPnt(): gp_Pnt;
  GetFarPnt(): gp_Pnt;
  GetViewRayDirection(): gp_Dir;
  GetMousePosition(): gp_Pnt2d;
  GetPlanes(thePlaneEquations: NCollection_Vector<SelectMgr_Vec4>): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_TriangularFrustum {
  constructor()
  Build(theP1: gp_Pnt2d, theP2: gp_Pnt2d, theP3: gp_Pnt2d): void;
  ScaleAndTransform(theScale: Standard_Integer, theTrsf: gp_GTrsf): any;
  Overlaps_1(theMinPnt: SelectMgr_Vec3, theMaxPnt: SelectMgr_Vec3, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_2(theMinPt: SelectMgr_Vec3, theMaxPt: SelectMgr_Vec3, theInside: Standard_Boolean): Standard_Boolean;
  Overlaps_3(thePnt: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_4(theArrayOfPnts: TColgp_Array1OfPnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_5(thePnt1: gp_Pnt, thePnt2: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_6(thePnt1: gp_Pnt, thePnt2: gp_Pnt, thePnt3: gp_Pnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Clear(): void;
  GetPlanes(thePlaneEquations: NCollection_Vector<SelectMgr_Vec4>): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_TriangularFrustumSet extends SelectMgr_BaseFrustum {
  constructor()
  Build(thePoints: TColgp_Array1OfPnt2d): void;
  ScaleAndTransform(theScale: Standard_Integer, theTrsf: gp_GTrsf): any;
  Overlaps_1(theMinPnt: SelectMgr_Vec3, theMaxPnt: SelectMgr_Vec3, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_2(theMinPnt: SelectMgr_Vec3, theMaxPnt: SelectMgr_Vec3, theInside: Standard_Boolean): Standard_Boolean;
  Overlaps_3(thePnt: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_4(theArrayOfPnts: TColgp_Array1OfPnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_5(thePnt1: gp_Pnt, thePnt2: gp_Pnt, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_6(thePnt1: gp_Pnt, thePnt2: gp_Pnt, thePnt3: gp_Pnt, theSensType: Select3D_TypeOfSensitivity, theClipRange: SelectMgr_ViewClipRange, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  GetPlanes(thePlaneEquations: NCollection_Vector<SelectMgr_Vec4>): void;
  SetAllowOverlapDetection(theIsToAllow: Standard_Boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_SelectingVolumeManager extends SelectBasics_SelectingVolumeManager {
  constructor(theToAllocateFrustums: Standard_Boolean)
  ScaleAndTransform(theScaleFactor: Standard_Integer, theTrsf: gp_GTrsf, theBuilder: any): SelectMgr_SelectingVolumeManager;
  GetActiveSelectionType(): Standard_Integer;
  SetActiveSelectionType(theType: any): void;
  Camera(): any;
  SetCamera_1(theCamera: any): void;
  SetCamera_2(theProjection: Graphic3d_Mat4d, theWorldView: Graphic3d_Mat4d, theIsOrthographic: Standard_Boolean, theWVPState: Graphic3d_WorldViewProjState): void;
  ProjectionMatrix(): Graphic3d_Mat4d;
  WorldViewMatrix(): Graphic3d_Mat4d;
  WindowSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  WorldViewProjState(): Graphic3d_WorldViewProjState;
  SetViewport(theX: Standard_Real, theY: Standard_Real, theWidth: Standard_Real, theHeight: Standard_Real): void;
  SetPixelTolerance(theTolerance: Standard_Integer): void;
  SetWindowSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  BuildSelectingVolume_1(thePoint: gp_Pnt2d): void;
  BuildSelectingVolume_2(theMinPt: gp_Pnt2d, theMaxPt: gp_Pnt2d): void;
  BuildSelectingVolume_3(thePoints: TColgp_Array1OfPnt2d): void;
  Overlaps_1(theBoxMin: SelectMgr_Vec3, theBoxMax: SelectMgr_Vec3, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_2(theBoxMin: SelectMgr_Vec3, theBoxMax: SelectMgr_Vec3, theInside: Standard_Boolean): Standard_Boolean;
  Overlaps_3(thePnt: gp_Pnt, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_4(thePnt: gp_Pnt): Standard_Boolean;
  Overlaps_5(theArrayOfPts: any, theSensType: Standard_Integer, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_6(theArrayOfPts: TColgp_Array1OfPnt, theSensType: Standard_Integer, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_7(thePnt1: gp_Pnt, thePnt2: gp_Pnt, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Overlaps_8(thePnt1: gp_Pnt, thePnt2: gp_Pnt, thePnt3: gp_Pnt, theSensType: Standard_Integer, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  DistToGeometryCenter(theCOG: gp_Pnt): Standard_Real;
  DetectedPoint(theDepth: Standard_Real): gp_Pnt;
  AllowOverlapDetection(theIsToAllow: Standard_Boolean): void;
  IsOverlapAllowed(): Standard_Boolean;
  ViewClipping(): any;
  ObjectClipping(): any;
  SetViewClipping_1(theViewPlanes: any, theObjPlanes: any, theWorldSelMgr: SelectMgr_SelectingVolumeManager): void;
  SetViewClipping_2(theOther: SelectMgr_SelectingVolumeManager): void;
  ViewClipRanges(): SelectMgr_ViewClipRange;
  SetViewClipRanges(theRange: SelectMgr_ViewClipRange): void;
  GetVertices(): gp_Pnt;
  GetNearPickedPnt(): gp_Pnt;
  GetFarPickedPnt(): gp_Pnt;
  GetMousePosition(): gp_Pnt2d;
  ActiveVolume(): any;
  GetPlanes(thePlaneEquations: NCollection_Vector<SelectMgr_Vec4>): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Select3D_SensitiveEntity extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  OwnerId(): any;
  Set(theOwnerId: any): void;
  SensitivityFactor(): Standard_Integer;
  SetSensitivityFactor(theNewSens: Standard_Integer): void;
  GetConnected(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  NbSubElements(): Standard_Integer;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  BVH(): void;
  ToBuildBVH(): Standard_Boolean;
  Clear(): void;
  HasInitLocation(): Standard_Boolean;
  InvInitLocation(): gp_GTrsf;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_SensitiveEntity extends Standard_Transient {
  constructor(theEntity: any)
  Clear(): void;
  BaseSensitive(): any;
  IsActiveForSelection(): Standard_Boolean;
  ResetSelectionActiveStatus(): void;
  SetActiveForSelection(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_Selection extends Standard_Transient {
  constructor(theModeIdx: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Destroy(): void;
  Add(theSensitive: any): void;
  Clear(): void;
  IsEmpty(): Standard_Boolean;
  Mode(): Standard_Integer;
  Entities(): any;
  ChangeEntities(): any;
  UpdateStatus_1(): SelectMgr_TypeOfUpdate;
  UpdateStatus_2(theStatus: SelectMgr_TypeOfUpdate): void;
  UpdateBVHStatus(theStatus: SelectMgr_TypeOfBVHUpdate): void;
  BVHUpdateStatus(): SelectMgr_TypeOfBVHUpdate;
  GetSelectionState(): SelectMgr_StateOfSelection;
  SetSelectionState(theState: SelectMgr_StateOfSelection): void;
  Sensitivity(): Standard_Integer;
  SetSensitivity(theNewSens: Standard_Integer): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_SelectableObject extends PrsMgr_PresentableObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ComputeSelection(theSelection: any, theMode: Standard_Integer): void;
  AcceptShapeDecomposition(): Standard_Boolean;
  RecomputePrimitives_1(): void;
  RecomputePrimitives_2(theMode: Standard_Integer): void;
  AddSelection(aSelection: any, aMode: Standard_Integer): void;
  ClearSelections(update: Standard_Boolean): void;
  Selection(theMode: Standard_Integer): any;
  HasSelection(theMode: Standard_Integer): Standard_Boolean;
  Selections(): SelectMgr_SequenceOfSelection;
  ResetTransformation(): void;
  UpdateTransformation(): void;
  UpdateTransformations(aSelection: any): void;
  HilightSelected(thePrsMgr: any, theSeq: SelectMgr_SequenceOfOwner): void;
  ClearSelected(): void;
  ClearDynamicHighlight(theMgr: any): void;
  HilightOwnerWithColor(thePM: any, theStyle: any, theOwner: any): void;
  IsAutoHilight(): Standard_Boolean;
  SetAutoHilight(theAutoHilight: Standard_Boolean): void;
  GetHilightPresentation(thePrsMgr: any): any;
  GetSelectPresentation(thePrsMgr: any): any;
  ErasePresentations(theToRemove: Standard_Boolean): void;
  SetZLayer(theLayerId: Graphic3d_ZLayerId): void;
  UpdateSelection(theMode: Standard_Integer): void;
  SetAssemblyOwner(theOwner: any, theMode: Standard_Integer): void;
  BndBoxOfSelected(theOwners: any): Bnd_Box;
  GlobalSelectionMode(): Standard_Integer;
  GlobalSelOwner(): any;
  GetAssemblyOwner(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_EntityOwner extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Priority(): Standard_Integer;
  SetPriority(thePriority: Standard_Integer): void;
  HasSelectable(): Standard_Boolean;
  Selectable(): any;
  SetSelectable(theSelObj: any): void;
  HandleMouseClick(thePoint: Graphic3d_Vec2i, theButton: Aspect_VKeyMouse, theModifiers: Aspect_VKeyFlags, theIsDoubleClick: boolean): Standard_Boolean;
  IsHilighted(thePrsMgr: any, theMode: Standard_Integer): Standard_Boolean;
  HilightWithColor(thePrsMgr: any, theStyle: any, theMode: Standard_Integer): void;
  Unhilight(thePrsMgr: any, theMode: Standard_Integer): void;
  Clear(thePrsMgr: any, theMode: Standard_Integer): void;
  HasLocation(): Standard_Boolean;
  Location(): TopLoc_Location;
  SetLocation(theLocation: TopLoc_Location): void;
  IsSelected(): Standard_Boolean;
  SetSelected(theIsSelected: Standard_Boolean): void;
  State_1(): Standard_Integer;
  State_2(theStatus: Standard_Integer): void;
  IsAutoHilight(): Standard_Boolean;
  IsForcedHilight(): Standard_Boolean;
  SetZLayer(theLayerId: Graphic3d_ZLayerId): void;
  UpdateHighlightTrsf(theViewer: any, theManager: any, theDispMode: Standard_Integer): void;
  IsSameSelectable(theOther: any): Standard_Boolean;
  ComesFromDecomposition(): Standard_Boolean;
  SetComesFromDecomposition(theIsFromDecomposition: Standard_Boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  Set_1(theSelObj: any): void;
  Set_2(thePriority: Standard_Integer): void;
}

  export declare class SelectMgr_EntityOwner_1 extends SelectMgr_EntityOwner {
    constructor(aPriority: Standard_Integer);
  }

  export declare class SelectMgr_EntityOwner_2 extends SelectMgr_EntityOwner {
    constructor(aSO: any, aPriority: Standard_Integer);
  }

  export declare class SelectMgr_EntityOwner_3 extends SelectMgr_EntityOwner {
    constructor(theOwner: any, aPriority: Standard_Integer);
  }

export declare class PrsDim_DimensionOwner extends SelectMgr_EntityOwner {
  constructor(theSelObject: any, theSelMode: PrsDim_DimensionSelectionMode, thePriority: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SelectionMode(): PrsDim_DimensionSelectionMode;
  HilightWithColor(thePM: any, theStyle: any, theMode: Standard_Integer): void;
  IsHilighted(thePM: any, theMode: Standard_Integer): Standard_Boolean;
  Unhilight(thePM: any, theMode: Standard_Integer): void;
}

export declare class AIS_InteractiveObject extends SelectMgr_SelectableObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Type(): AIS_KindOfInteractive;
  Signature(): Standard_Integer;
  Redisplay(AllModes: Standard_Boolean): void;
  HasInteractiveContext(): Standard_Boolean;
  InteractiveContext(): AIS_InteractiveContext;
  SetContext(aCtx: any): void;
  HasOwner(): Standard_Boolean;
  GetOwner(): any;
  SetOwner(theApplicativeEntity: any): void;
  ClearOwner(): void;
  ProcessDragging(theCtx: any, theView: any, theOwner: any, theDragFrom: Graphic3d_Vec2i, theDragTo: Graphic3d_Vec2i, theAction: AIS_DragAction): Standard_Boolean;
  GetContext(): any;
  HasPresentation(): Standard_Boolean;
  Presentation(): any;
  SetAspect(anAspect: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Prs3d_BasicAspect extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Prs3d_ArrowAspect extends Prs3d_BasicAspect {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetAngle(anAngle: Standard_Real): void;
  Angle(): Standard_Real;
  SetLength(theLength: Standard_Real): void;
  Length(): Standard_Real;
  SetColor(theColor: Quantity_Color): void;
  Aspect(): any;
  SetAspect(theAspect: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Prs3d_ArrowAspect_1 extends Prs3d_ArrowAspect {
    constructor();
  }

  export declare class Prs3d_ArrowAspect_2 extends Prs3d_ArrowAspect {
    constructor(anAngle: Standard_Real, aLength: Standard_Real);
  }

  export declare class Prs3d_ArrowAspect_3 extends Prs3d_ArrowAspect {
    constructor(theAspect: any);
  }

export declare class Prs3d_LineAspect extends Prs3d_BasicAspect {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColor(theColor: Quantity_Color): void;
  SetTypeOfLine(theType: Aspect_TypeOfLine): void;
  SetWidth(theWidth: Standard_Real): void;
  Aspect(): any;
  SetAspect(theAspect: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Prs3d_LineAspect_1 extends Prs3d_LineAspect {
    constructor(theColor: Quantity_Color, theType: Aspect_TypeOfLine, theWidth: Standard_Real);
  }

  export declare class Prs3d_LineAspect_2 extends Prs3d_LineAspect {
    constructor(theAspect: any);
  }

export declare class Prs3d_TextAspect extends Prs3d_BasicAspect {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColor(theColor: Quantity_Color): void;
  SetFont(theFont: Standard_CString): void;
  SetHeight(theHeight: Standard_Real): void;
  SetAngle(theAngle: Standard_Real): void;
  Height(): Standard_Real;
  Angle(): Standard_Real;
  SetHorizontalJustification(theJustification: Graphic3d_HorizontalTextAlignment): void;
  SetVerticalJustification(theJustification: Graphic3d_VerticalTextAlignment): void;
  SetOrientation(theOrientation: Graphic3d_TextPath): void;
  HorizontalJustification(): Graphic3d_HorizontalTextAlignment;
  VerticalJustification(): Graphic3d_VerticalTextAlignment;
  Orientation(): Graphic3d_TextPath;
  Aspect(): any;
  SetAspect(theAspect: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Prs3d_TextAspect_1 extends Prs3d_TextAspect {
    constructor();
  }

  export declare class Prs3d_TextAspect_2 extends Prs3d_TextAspect {
    constructor(theAspect: any);
  }

export declare class Prs3d_DimensionAspect extends Prs3d_BasicAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  LineAspect(): any;
  SetLineAspect(theAspect: any): void;
  TextAspect(): any;
  SetTextAspect(theAspect: any): void;
  IsText3d(): Standard_Boolean;
  MakeText3d(isText3d: Standard_Boolean): void;
  IsTextShaded(): Standard_Boolean;
  MakeTextShaded(theIsTextShaded: Standard_Boolean): void;
  IsArrows3d(): Standard_Boolean;
  MakeArrows3d(theIsArrows3d: Standard_Boolean): void;
  IsUnitsDisplayed(): Standard_Boolean;
  MakeUnitsDisplayed(theIsDisplayed: Standard_Boolean): void;
  SetArrowOrientation(theArrowOrient: Prs3d_DimensionArrowOrientation): void;
  ArrowOrientation(): Prs3d_DimensionArrowOrientation;
  SetTextVerticalPosition(thePosition: Prs3d_DimensionTextVerticalPosition): void;
  TextVerticalPosition(): Prs3d_DimensionTextVerticalPosition;
  SetTextHorizontalPosition(thePosition: Prs3d_DimensionTextHorizontalPosition): void;
  TextHorizontalPosition(): Prs3d_DimensionTextHorizontalPosition;
  ArrowAspect(): any;
  SetArrowAspect(theAspect: any): void;
  SetCommonColor(theColor: Quantity_Color): void;
  SetExtensionSize(theSize: Standard_Real): void;
  ExtensionSize(): Standard_Real;
  SetArrowTailSize(theSize: Standard_Real): void;
  ArrowTailSize(): Standard_Real;
  SetValueStringFormat(theFormat: TCollection_AsciiString): void;
  ValueStringFormat(): TCollection_AsciiString;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class PrsDim_AngleDimension {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  FirstPoint(): gp_Pnt;
  SecondPoint(): gp_Pnt;
  CenterPoint(): gp_Pnt;
  FirstShape(): TopoDS_Shape;
  SecondShape(): TopoDS_Shape;
  ThirdShape(): TopoDS_Shape;
  SetMeasuredGeometry_1(theFirstEdge: TopoDS_Edge, theSecondEdge: TopoDS_Edge): void;
  SetMeasuredGeometry_2(theFirstPoint: gp_Pnt, theSecondPoint: gp_Pnt, theThridPoint: gp_Pnt): void;
  SetMeasuredGeometry_3(theFirstVertex: TopoDS_Vertex, theSecondVertex: TopoDS_Vertex, theThirdVertex: TopoDS_Vertex): void;
  SetMeasuredGeometry_4(theCone: TopoDS_Face): void;
  SetMeasuredGeometry_5(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face): void;
  SetMeasuredGeometry_6(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face, thePoint: gp_Pnt): void;
  GetDisplayUnits(): TCollection_AsciiString;
  GetModelUnits(): TCollection_AsciiString;
  SetDisplayUnits(theUnits: TCollection_AsciiString): void;
  SetModelUnits(theUnits: TCollection_AsciiString): void;
  SetTextPosition(theTextPos: gp_Pnt): void;
  GetTextPosition(): gp_Pnt;
  SetType(theType: PrsDim_TypeOfAngle): void;
  GetType(): PrsDim_TypeOfAngle;
  SetArrowsVisibility(theType: PrsDim_TypeOfAngleArrowVisibility): void;
  GetArrowsVisibility(): PrsDim_TypeOfAngleArrowVisibility;
}

  export declare class PrsDim_AngleDimension_1 extends PrsDim_AngleDimension {
    constructor(theFirstEdge: TopoDS_Edge, theSecondEdge: TopoDS_Edge);
  }

  export declare class PrsDim_AngleDimension_2 extends PrsDim_AngleDimension {
    constructor(theFirstPoint: gp_Pnt, theSecondPoint: gp_Pnt, theThirdPoint: gp_Pnt);
  }

  export declare class PrsDim_AngleDimension_3 extends PrsDim_AngleDimension {
    constructor(theFirstVertex: TopoDS_Vertex, theSecondVertex: TopoDS_Vertex, theThirdVertex: TopoDS_Vertex);
  }

  export declare class PrsDim_AngleDimension_4 extends PrsDim_AngleDimension {
    constructor(theCone: TopoDS_Face);
  }

  export declare class PrsDim_AngleDimension_5 extends PrsDim_AngleDimension {
    constructor(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face);
  }

  export declare class PrsDim_AngleDimension_6 extends PrsDim_AngleDimension {
    constructor(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face, thePoint: gp_Pnt);
  }

export declare class AIS_Animation extends Standard_Transient {
  constructor(theAnimationName: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Name(): TCollection_AsciiString;
  StartPts(): Standard_Real;
  SetStartPts(thePtsStart: Standard_Real): void;
  Duration(): Standard_Real;
  UpdateTotalDuration(): void;
  HasOwnDuration(): Standard_Boolean;
  OwnDuration(): Standard_Real;
  SetOwnDuration(theDuration: Standard_Real): void;
  Add(theAnimation: any): void;
  Clear(): void;
  Find(theAnimationName: TCollection_AsciiString): any;
  Remove(theAnimation: any): Standard_Boolean;
  Replace(theAnimationOld: any, theAnimationNew: any): Standard_Boolean;
  CopyFrom(theOther: any): void;
  Children(): any;
  StartTimer(theStartPts: Standard_Real, thePlaySpeed: Standard_Real, theToUpdate: Standard_Boolean, theToStopTimer: Standard_Boolean): void;
  UpdateTimer(): Standard_Real;
  ElapsedTime(): Standard_Real;
  Start(theToUpdate: Standard_Boolean): void;
  Pause(): void;
  Stop(): void;
  IsStopped(): boolean;
  Update(thePts: Standard_Real): Standard_Boolean;
}

export declare class AIS_AnimationCamera extends AIS_Animation {
  constructor(theAnimationName: TCollection_AsciiString, theView: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  View(): any;
  SetView(theView: any): void;
  CameraStart(): any;
  SetCameraStart(theCameraStart: any): void;
  CameraEnd(): any;
  SetCameraEnd(theCameraEnd: any): void;
}

export declare class AIS_GlobalStatus extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetGraphicStatus(theStatus: AIS_DisplayStatus): void;
  AddSelectionMode(theMode: Standard_Integer): void;
  SetDisplayMode(theMode: Standard_Integer): void;
  DisplayMode(): Standard_Integer;
  SetLayerIndex(theIndex: Standard_Integer): void;
  SetHilightStatus(theStatus: Standard_Boolean): void;
  SetHilightStyle(theStyle: any): void;
  HilightStyle(): any;
  IsSubIntensityOn(): Standard_Boolean;
  SubIntensityOn(): void;
  SubIntensityOff(): void;
  RemoveSelectionMode(aMode: Standard_Integer): void;
  ClearSelectionModes(): void;
  GraphicStatus(): AIS_DisplayStatus;
  SelectionModes(): TColStd_ListOfInteger;
  IsHilighted(): Standard_Boolean;
  IsSModeIn(aMode: Standard_Integer): Standard_Boolean;
  GetLayerIndex(): Standard_Integer;
}

  export declare class AIS_GlobalStatus_1 extends AIS_GlobalStatus {
    constructor();
  }

  export declare class AIS_GlobalStatus_2 extends AIS_GlobalStatus {
    constructor(aStat: AIS_DisplayStatus, aDispMode: Standard_Integer, aSelMode: Standard_Integer, ishilighted: Standard_Boolean, aLayerIndex: Standard_Integer);
  }

export declare class AIS_Selection extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Clear(): void;
  Select(theObject: any): AIS_SelectStatus;
  AddSelect(theObject: any): AIS_SelectStatus;
  ClearAndSelect(theObject: any): void;
  IsSelected(theObject: any): Standard_Boolean;
  Objects(): AIS_NListOfEntityOwner;
  Extent(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Init(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
}

export declare class SelectMgr_Filter extends Standard_Transient {
  IsOk(anObj: any): Standard_Boolean;
  ActsOn(aStandardMode: TopAbs_ShapeEnum): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_CompositionFilter extends SelectMgr_Filter {
  Add(afilter: any): void;
  Remove(aFilter: any): void;
  IsEmpty(): Standard_Boolean;
  IsIn(aFilter: any): Standard_Boolean;
  StoredFilters(): SelectMgr_ListOfFilter;
  Clear(): void;
  ActsOn(aStandardMode: TopAbs_ShapeEnum): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_AndOrFilter extends SelectMgr_CompositionFilter {
  constructor(theFilterType: SelectMgr_FilterType)
  IsOk(theObj: any): Standard_Boolean;
  SetDisabledObjects(theObjects: any): void;
  FilterType(): SelectMgr_FilterType;
  SetFilterType(theFilterType: SelectMgr_FilterType): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_SortCriterion {
  constructor()
  IsCloserDepth(theOther: SelectMgr_SortCriterion): boolean;
  IsHigherPriority(theOther: SelectMgr_SortCriterion): boolean;
}

export declare class SelectMgr_SelectableObjectSet {
  constructor()
  Append(theObject: any): Standard_Boolean;
  Remove(theObject: any): Standard_Boolean;
  ChangeSubset(theObject: any): void;
  UpdateBVH(theCamera: any, theProjectionMat: Graphic3d_Mat4d, theWorldViewMat: Graphic3d_Mat4d, theViewState: Graphic3d_WorldViewProjState, theViewportWidth: Standard_Integer, theViewportHeight: Standard_Integer): void;
  MarkDirty(): void;
  Contains(theObject: any): Standard_Boolean;
  IsEmpty_1(): Standard_Boolean;
  IsEmpty_2(theSubset: any): Standard_Boolean;
  GetObjectById(theSubset: any, theIndex: Standard_Integer): any;
  BVH(theSubset: any): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class SelectMgr_ToleranceMap {
  constructor()
  Add(theTolerance: Standard_Integer): void;
  Decrement(theTolerance: Standard_Integer): void;
  Tolerance(): Standard_Integer;
  SetCustomTolerance(theTolerance: Standard_Integer): void;
  ResetDefaults(): void;
  CustomTolerance(): Standard_Integer;
  IsCustomTolSet(): Standard_Boolean;
}

export declare class SelectMgr_BVHThreadPool extends Standard_Transient {
  constructor(theNbThreads: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  AddEntity(theEntity: any): void;
  StopThreads(): void;
  WaitThreads(): void;
  Threads(): any;
}

export declare class SelectMgr_ViewerSelector extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Clear(): void;
  CustomPixelTolerance(): Standard_Integer;
  SetPixelTolerance(theTolerance: Standard_Integer): void;
  Sensitivity(): Standard_Real;
  PixelTolerance(): Standard_Integer;
  SortResult(): void;
  OnePicked(): any;
  ToPickClosest(): boolean;
  SetPickClosest(theToPreferClosest: boolean): void;
  DepthToleranceType(): SelectMgr_TypeOfDepthTolerance;
  DepthTolerance(): Standard_Real;
  SetDepthTolerance(theType: SelectMgr_TypeOfDepthTolerance, theTolerance: Standard_Real): void;
  NbPicked(): Standard_Integer;
  ClearPicked(): void;
  Picked_1(theRank: Standard_Integer): any;
  PickedData(theRank: Standard_Integer): SelectMgr_SortCriterion;
  PickedEntity(theRank: Standard_Integer): any;
  PickedPoint(theRank: Standard_Integer): gp_Pnt;
  Contains(theObject: any): Standard_Boolean;
  EntitySetBuilder(): any;
  SetEntitySetBuilder(theBuilder: any): void;
  Modes(theSelectableObject: any, theModeList: TColStd_ListOfInteger, theWantedState: SelectMgr_StateOfSelection): Standard_Boolean;
  IsActive(theSelectableObject: any, theMode: Standard_Integer): Standard_Boolean;
  IsInside(theSelectableObject: any, theMode: Standard_Integer): Standard_Boolean;
  Status_1(theSelection: any): SelectMgr_StateOfSelection;
  Status_2(theSelectableObject: any): TCollection_AsciiString;
  ActiveOwners(theOwners: any): void;
  AddSelectableObject(theObject: any): void;
  AddSelectionToObject(theObject: any, theSelection: any): void;
  MoveSelectableObject(theObject: any): void;
  RemoveSelectableObject(theObject: any): void;
  RemoveSelectionOfObject(theObject: any, theSelection: any): void;
  RebuildObjectsTree(theIsForce: Standard_Boolean): void;
  RebuildSensitivesTree(theObject: any, theIsForce: Standard_Boolean): void;
  GetManager(): SelectMgr_SelectingVolumeManager;
  SelectableObjects(): SelectMgr_SelectableObjectSet;
  ResetSelectionActivationStatus(): void;
  AllowOverlapDetection(theIsToAllow: Standard_Boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  Init(): void;
  More(): Standard_Boolean;
  Next(): void;
  Picked_2(): any;
  InitDetected(): void;
  NextDetected(): void;
  MoreDetected(): Standard_Boolean;
  DetectedEntity(): any;
  SetToPrebuildBVH(theToPrebuild: Standard_Boolean, theThreadsNum: Standard_Integer): void;
  QueueBVHBuild(theEntity: any): void;
  WaitForBVHBuild(): void;
  ToPrebuildBVH(): Standard_Boolean;
}

export declare class SelectMgr_ViewerSelector3d extends SelectMgr_ViewerSelector {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Pick_1(theXPix: Standard_Integer, theYPix: Standard_Integer, theView: any): void;
  Pick_2(theXPMin: Standard_Integer, theYPMin: Standard_Integer, theXPMax: Standard_Integer, theYPMax: Standard_Integer, theView: any): void;
  Pick_3(thePolyline: TColgp_Array1OfPnt2d, theView: any): void;
  ToPixMap(theImage: Image_PixMap, theView: any, theType: StdSelect_TypeOfSelectionImage, thePickedIndex: Standard_Integer): Standard_Boolean;
  DisplaySensitive_1(theView: any): void;
  ClearSensitive(theView: any): void;
  DisplaySensitive_2(theSel: any, theTrsf: gp_Trsf, theView: any, theToClearOthers: Standard_Boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class AIS_InteractiveContext extends Standard_Transient {
  constructor(MainViewer: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  DisplayStatus(anIobj: any): AIS_DisplayStatus;
  Status(anObj: any, astatus: TCollection_ExtendedString): void;
  IsDisplayed_1(anIobj: any): Standard_Boolean;
  IsDisplayed_2(aniobj: any, aMode: Standard_Integer): Standard_Boolean;
  SetAutoActivateSelection(theIsAuto: Standard_Boolean): void;
  GetAutoActivateSelection(): Standard_Boolean;
  Display_1(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  Display_2(theIObj: any, theDispMode: Standard_Integer, theSelectionMode: Standard_Integer, theToUpdateViewer: Standard_Boolean, theDispStatus: AIS_DisplayStatus): void;
  Load_1(theObj: any, theSelectionMode: Standard_Integer): void;
  Display_3(theIObj: any, theDispMode: Standard_Integer, theSelectionMode: Standard_Integer, theToUpdateViewer: Standard_Boolean, theToAllowDecomposition: Standard_Boolean, theDispStatus: AIS_DisplayStatus): void;
  Load_2(theObj: any, theSelectionMode: Standard_Integer, a2: Standard_Boolean): void;
  Erase(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  EraseAll(theToUpdateViewer: Standard_Boolean): void;
  DisplayAll(theToUpdateViewer: Standard_Boolean): void;
  EraseSelected(theToUpdateViewer: Standard_Boolean): void;
  DisplaySelected(theToUpdateViewer: Standard_Boolean): void;
  ClearPrs(theIObj: any, theMode: Standard_Integer, theToUpdateViewer: Standard_Boolean): void;
  Remove(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  RemoveAll(theToUpdateViewer: Standard_Boolean): void;
  Redisplay_1(theIObj: any, theToUpdateViewer: Standard_Boolean, theAllModes: Standard_Boolean): void;
  Redisplay_2(theTypeOfObject: AIS_KindOfInteractive, theSignature: Standard_Integer, theToUpdateViewer: Standard_Boolean): void;
  RecomputePrsOnly(theIObj: any, theToUpdateViewer: Standard_Boolean, theAllModes: Standard_Boolean): void;
  RecomputeSelectionOnly(anIObj: any): void;
  Update(theIObj: any, theUpdateViewer: Standard_Boolean): void;
  HighlightStyle_1(theStyleType: Prs3d_TypeOfHighlight): any;
  SetHighlightStyle_1(theStyleType: Prs3d_TypeOfHighlight, theStyle: any): void;
  HighlightStyle_2(): any;
  SetHighlightStyle_2(theStyle: any): void;
  SelectionStyle(): any;
  SetSelectionStyle(theStyle: any): void;
  HighlightStyle_3(theObj: any, theStyle: any): Standard_Boolean;
  HighlightStyle_4(theOwner: any, theStyle: any): Standard_Boolean;
  IsHilighted_1(theObj: any): Standard_Boolean;
  IsHilighted_2(theOwner: any): Standard_Boolean;
  Hilight(theObj: any, theIsToUpdateViewer: Standard_Boolean): void;
  HilightWithColor(theObj: any, theStyle: any, theToUpdateViewer: Standard_Boolean): void;
  Unhilight(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  DisplayPriority(theIObj: any): Standard_Integer;
  SetDisplayPriority(theIObj: any, thePriority: Standard_Integer): void;
  GetZLayer(theIObj: any): Graphic3d_ZLayerId;
  SetZLayer(theIObj: any, theLayerId: Graphic3d_ZLayerId): void;
  SetViewAffinity(theIObj: any, theView: any, theIsVisible: Standard_Boolean): void;
  DisplayMode(): Standard_Integer;
  SetDisplayMode_1(theMode: Standard_Integer, theToUpdateViewer: Standard_Boolean): void;
  SetDisplayMode_2(theIObj: any, theMode: Standard_Integer, theToUpdateViewer: Standard_Boolean): void;
  UnsetDisplayMode(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  SetLocation(theObject: any, theLocation: TopLoc_Location): void;
  ResetLocation(theObject: any): void;
  HasLocation(theObject: any): Standard_Boolean;
  Location(theObject: any): TopLoc_Location;
  SetTransformPersistence_1(theObject: any, theTrsfPers: any): void;
  SetTransformPersistence_2(theObj: any, theFlag: Graphic3d_TransModeFlags, thePoint: gp_Pnt): void;
  SetPixelTolerance(thePrecision: Standard_Integer): void;
  PixelTolerance(): Standard_Integer;
  SetSelectionSensitivity(theObject: any, theMode: Standard_Integer, theNewSensitivity: Standard_Integer): void;
  LastActiveView(): any;
  MoveTo(theXPix: Standard_Integer, theYPix: Standard_Integer, theView: any, theToRedrawOnUpdate: Standard_Boolean): AIS_StatusOfDetection;
  ClearDetected(theToRedrawImmediate: Standard_Boolean): Standard_Boolean;
  HasDetected(): Standard_Boolean;
  DetectedOwner(): any;
  DetectedInteractive(): any;
  HasDetectedShape(): Standard_Boolean;
  DetectedShape(): TopoDS_Shape;
  HasNextDetected(): Standard_Boolean;
  HilightNextDetected(theView: any, theToRedrawImmediate: Standard_Boolean): Standard_Integer;
  HilightPreviousDetected(theView: any, theToRedrawImmediate: Standard_Boolean): Standard_Integer;
  InitDetected(): void;
  MoreDetected(): Standard_Boolean;
  NextDetected(): void;
  DetectedCurrentOwner(): any;
  SetSelectedAspect(theAspect: any, theToUpdateViewer: Standard_Boolean): void;
  AddSelect_1(theObject: any): AIS_StatusOfPick;
  AddSelect_2(theObject: any): AIS_StatusOfPick;
  Select_1(theXPMin: Standard_Integer, theYPMin: Standard_Integer, theXPMax: Standard_Integer, theYPMax: Standard_Integer, theView: any, theToUpdateViewer: Standard_Boolean): AIS_StatusOfPick;
  Select_2(thePolyline: TColgp_Array1OfPnt2d, theView: any, theToUpdateViewer: Standard_Boolean): AIS_StatusOfPick;
  Select_3(theToUpdateViewer: Standard_Boolean): AIS_StatusOfPick;
  ShiftSelect_1(theToUpdateViewer: Standard_Boolean): AIS_StatusOfPick;
  ShiftSelect_2(thePolyline: TColgp_Array1OfPnt2d, theView: any, theToUpdateViewer: Standard_Boolean): AIS_StatusOfPick;
  ShiftSelect_3(theXPMin: Standard_Integer, theYPMin: Standard_Integer, theXPMax: Standard_Integer, theYPMax: Standard_Integer, theView: any, theToUpdateViewer: Standard_Boolean): AIS_StatusOfPick;
  BoundingBoxOfSelection(): Bnd_Box;
  FitSelected_1(theView: any, theMargin: Standard_Real, theToUpdate: Standard_Boolean): void;
  FitSelected_2(theView: any): void;
  ToHilightSelected(): Standard_Boolean;
  SetToHilightSelected(toHilight: Standard_Boolean): void;
  AutomaticHilight(): Standard_Boolean;
  SetAutomaticHilight(theStatus: Standard_Boolean): void;
  SetSelected_1(theOwners: any, theToUpdateViewer: Standard_Boolean): void;
  SetSelected_2(theObject: any, theToUpdateViewer: Standard_Boolean): void;
  AddOrRemoveSelected_1(theObject: any, theToUpdateViewer: Standard_Boolean): void;
  SetSelectedState(theOwner: any, theIsSelected: Standard_Boolean): Standard_Boolean;
  HilightSelected(theToUpdateViewer: Standard_Boolean): void;
  UnhilightSelected(theToUpdateViewer: Standard_Boolean): void;
  UpdateSelected(theToUpdateViewer: Standard_Boolean): void;
  ClearSelected(theToUpdateViewer: Standard_Boolean): void;
  AddOrRemoveSelected_2(theOwner: any, theToUpdateViewer: Standard_Boolean): void;
  IsSelected_1(theOwner: any): Standard_Boolean;
  IsSelected_2(theObj: any): Standard_Boolean;
  FirstSelectedObject(): any;
  NbSelected(): Standard_Integer;
  InitSelected(): void;
  MoreSelected(): Standard_Boolean;
  NextSelected(): void;
  SelectedOwner(): any;
  SelectedInteractive(): any;
  HasSelectedShape(): Standard_Boolean;
  SelectedShape(): TopoDS_Shape;
  HasApplicative(): Standard_Boolean;
  Applicative(): any;
  BeginImmediateDraw(): Standard_Boolean;
  ImmediateAdd(theObj: any, theMode: Standard_Integer): Standard_Boolean;
  EndImmediateDraw_1(theView: any): Standard_Boolean;
  EndImmediateDraw_2(): Standard_Boolean;
  IsImmediateModeOn(): Standard_Boolean;
  RedrawImmediate(theViewer: any): void;
  SetSelectionModeActive(theObj: any, theMode: Standard_Integer, theToActivate: Standard_Boolean, theConcurrency: AIS_SelectionModesConcurrency, theIsForce: Standard_Boolean): void;
  Activate_1(theObj: any, theMode: Standard_Integer, theIsForce: Standard_Boolean): void;
  Activate_2(theMode: Standard_Integer, theIsForce: Standard_Boolean): void;
  Deactivate_1(theObj: any): void;
  Deactivate_2(theObj: any, theMode: Standard_Integer): void;
  Deactivate_3(theMode: Standard_Integer): void;
  Deactivate_4(): void;
  ActivatedModes(anIobj: any, theList: TColStd_ListOfInteger): void;
  EntityOwners(theOwners: any, theIObj: any, theMode: Standard_Integer): void;
  FilterType(): SelectMgr_FilterType;
  SetFilterType(theFilterType: SelectMgr_FilterType): void;
  Filters(): SelectMgr_ListOfFilter;
  AddFilter(theFilter: any): void;
  RemoveFilter(theFilter: any): void;
  RemoveFilters(): void;
  PickingStrategy(): SelectMgr_PickingStrategy;
  SetPickingStrategy(theStrategy: SelectMgr_PickingStrategy): void;
  DefaultDrawer(): any;
  CurrentViewer(): any;
  SelectionManager(): any;
  MainPrsMgr(): any;
  MainSelector(): any;
  UpdateCurrentViewer(): void;
  DisplayedObjects_1(aListOfIO: AIS_ListOfInteractive): void;
  DisplayedObjects_2(theWhichKind: AIS_KindOfInteractive, theWhichSignature: Standard_Integer, theListOfIO: AIS_ListOfInteractive): void;
  ErasedObjects_1(theListOfIO: AIS_ListOfInteractive): void;
  ErasedObjects_2(theWhichKind: AIS_KindOfInteractive, theWhichSignature: Standard_Integer, theListOfIO: AIS_ListOfInteractive): void;
  ObjectsByDisplayStatus_1(theStatus: AIS_DisplayStatus, theListOfIO: AIS_ListOfInteractive): void;
  ObjectsByDisplayStatus_2(WhichKind: AIS_KindOfInteractive, WhichSignature: Standard_Integer, theStatus: AIS_DisplayStatus, theListOfIO: AIS_ListOfInteractive): void;
  ObjectsInside(aListOfIO: AIS_ListOfInteractive, WhichKind: AIS_KindOfInteractive, WhichSignature: Standard_Integer): void;
  RebuildSelectionStructs(): void;
  Disconnect(theAssembly: any, theObjToDisconnect: any): void;
  ObjectsForView(theListOfIO: AIS_ListOfInteractive, theView: any, theIsVisibleInView: Standard_Boolean, theStatus: AIS_DisplayStatus): void;
  PurgeDisplay(): Standard_Integer;
  GravityPoint(theView: any): gp_Pnt;
  DisplayActiveSensitive_1(aView: any): void;
  ClearActiveSensitive(aView: any): void;
  DisplayActiveSensitive_2(anObject: any, aView: any): void;
  SetLocalAttributes(theIObj: any, theDrawer: any, theToUpdateViewer: Standard_Boolean): void;
  UnsetLocalAttributes(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  SetCurrentFacingModel(aniobj: any, aModel: Aspect_TypeOfFacingModel): void;
  HasColor(aniobj: any): Standard_Boolean;
  Color(aniobj: any, acolor: Quantity_Color): void;
  SetColor(theIObj: any, theColor: Quantity_Color, theToUpdateViewer: Standard_Boolean): void;
  UnsetColor(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  Width(aniobj: any): Standard_Real;
  SetWidth(theIObj: any, theValue: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  UnsetWidth(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  SetMaterial(theIObj: any, theMaterial: Graphic3d_MaterialAspect, theToUpdateViewer: Standard_Boolean): void;
  UnsetMaterial(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  SetTransparency(theIObj: any, theValue: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  UnsetTransparency(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  SetPolygonOffsets(theIObj: any, theMode: Standard_Integer, theFactor: Standard_ShortReal, theUnits: Standard_ShortReal, theToUpdateViewer: Standard_Boolean): void;
  HasPolygonOffsets(anObj: any): Standard_Boolean;
  PolygonOffsets(anObj: any, aMode: Standard_Integer, aFactor: Standard_ShortReal, aUnits: Standard_ShortReal): void;
  SetTrihedronSize(theSize: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  TrihedronSize(): Standard_Real;
  SetPlaneSize_1(theSizeX: Standard_Real, theSizeY: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  SetPlaneSize_2(theSize: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  PlaneSize(XSize: Standard_Real, YSize: Standard_Real): Standard_Boolean;
  SetDeviationCoefficient_1(theIObj: any, theCoefficient: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  SetDeviationAngle_1(theIObj: any, theAngle: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  SetAngleAndDeviation(theIObj: any, theAngle: Standard_Real, theToUpdateViewer: Standard_Boolean): void;
  SetDeviationCoefficient_2(theCoefficient: Standard_Real): void;
  DeviationCoefficient(): Standard_Real;
  SetDeviationAngle_2(anAngle: Standard_Real): void;
  DeviationAngle(): Standard_Real;
  HiddenLineAspect(): any;
  SetHiddenLineAspect(anAspect: any): void;
  DrawHiddenLine(): Standard_Boolean;
  EnableDrawHiddenLine(): void;
  DisableDrawHiddenLine(): void;
  SetIsoNumber(NbIsos: Standard_Integer, WhichIsos: AIS_TypeOfIso): void;
  IsoNumber(WhichIsos: AIS_TypeOfIso): Standard_Integer;
  IsoOnPlane_1(SwitchOn: Standard_Boolean): void;
  IsoOnPlane_2(): Standard_Boolean;
  IsoOnTriangulation_1(theIsEnabled: Standard_Boolean, theObject: any): void;
  IsoOnTriangulation_2(theToSwitchOn: Standard_Boolean): void;
  IsoOnTriangulation_3(): Standard_Boolean;
  SetCurrentObject(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  AddOrRemoveCurrentObject(theObj: any, theIsToUpdateViewer: Standard_Boolean): void;
  UpdateCurrent(): void;
  IsCurrent(theObject: any): Standard_Boolean;
  InitCurrent(): void;
  MoreCurrent(): Standard_Boolean;
  NextCurrent(): void;
  Current(): any;
  NbCurrents(): Standard_Integer;
  HilightCurrents(theToUpdateViewer: Standard_Boolean): void;
  UnhilightCurrents(theToUpdateViewer: Standard_Boolean): void;
  ClearCurrents(theToUpdateViewer: Standard_Boolean): void;
  DetectedCurrentShape(): TopoDS_Shape;
  DetectedCurrentObject(): any;
  SubIntensityColor(): Quantity_Color;
  SetSubIntensityColor(theColor: Quantity_Color): void;
  SubIntensityOn(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  SubIntensityOff(theIObj: any, theToUpdateViewer: Standard_Boolean): void;
  Selection(): any;
  SetSelection(theSelection: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class AIS_AnimationObject extends AIS_Animation {
  constructor(theAnimationName: TCollection_AsciiString, theContext: any, theObject: any, theTrsfStart: gp_Trsf, theTrsfEnd: gp_Trsf)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_AttributeFilter extends SelectMgr_Filter {
  HasColor(): Standard_Boolean;
  HasWidth(): Standard_Boolean;
  SetColor(aCol: Quantity_NameOfColor): void;
  SetWidth(aWidth: Standard_Real): void;
  UnsetColor(): void;
  UnsetWidth(): void;
  IsOk(anObj: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class AIS_AttributeFilter_1 extends AIS_AttributeFilter {
    constructor();
  }

  export declare class AIS_AttributeFilter_2 extends AIS_AttributeFilter {
    constructor(aCol: Quantity_NameOfColor);
  }

  export declare class AIS_AttributeFilter_3 extends AIS_AttributeFilter {
    constructor(aWidth: Standard_Real);
  }

export declare class AIS_Axis extends AIS_InteractiveObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Component(): any;
  SetComponent(aComponent: any): void;
  Axis2Placement(): any;
  SetAxis2Placement(aComponent: any, anAxisType: AIS_TypeOfAxis): void;
  SetAxis1Placement(anAxis: any): void;
  TypeOfAxis(): AIS_TypeOfAxis;
  SetTypeOfAxis(theTypeAxis: AIS_TypeOfAxis): void;
  IsXYZAxis(): Standard_Boolean;
  AcceptDisplayMode(aMode: Standard_Integer): Standard_Boolean;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  SetColor(aColor: Quantity_Color): void;
  SetWidth(aValue: Standard_Real): void;
  UnsetColor(): void;
  UnsetWidth(): void;
}

  export declare class AIS_Axis_1 extends AIS_Axis {
    constructor(aComponent: any);
  }

  export declare class AIS_Axis_2 extends AIS_Axis {
    constructor(aComponent: any, anAxisType: AIS_TypeOfAxis);
  }

  export declare class AIS_Axis_3 extends AIS_Axis {
    constructor(anAxis: any);
  }

export declare class AIS_BadEdgeFilter extends SelectMgr_Filter {
  constructor()
  ActsOn(aType: TopAbs_ShapeEnum): Standard_Boolean;
  IsOk(EO: any): Standard_Boolean;
  SetContour(Index: Standard_Integer): void;
  AddEdge(anEdge: TopoDS_Edge, Index: Standard_Integer): void;
  RemoveEdges(Index: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_C0RegularityFilter extends SelectMgr_Filter {
  constructor(aShape: TopoDS_Shape)
  ActsOn(aType: TopAbs_ShapeEnum): Standard_Boolean;
  IsOk(EO: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_CameraFrustum extends AIS_InteractiveObject {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetCameraFrustum(theCamera: any): void;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  UnsetTransparency(): void;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
}

export declare class PrsDim_Relation extends AIS_InteractiveObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  Type(): AIS_KindOfInteractive;
  KindOfDimension(): PrsDim_KindOfDimension;
  IsMovable(): Standard_Boolean;
  FirstShape(): TopoDS_Shape;
  SetFirstShape(aFShape: TopoDS_Shape): void;
  SecondShape(): TopoDS_Shape;
  SetSecondShape(aSShape: TopoDS_Shape): void;
  SetBndBox(theXmin: Standard_Real, theYmin: Standard_Real, theZmin: Standard_Real, theXmax: Standard_Real, theYmax: Standard_Real, theZmax: Standard_Real): void;
  UnsetBndBox(): void;
  Plane(): any;
  SetPlane(thePlane: any): void;
  Value(): Standard_Real;
  SetValue(theVal: Standard_Real): void;
  Position(): gp_Pnt;
  SetPosition(thePosition: gp_Pnt): void;
  Text(): TCollection_ExtendedString;
  SetText(theText: TCollection_ExtendedString): void;
  ArrowSize(): Standard_Real;
  SetArrowSize(theArrowSize: Standard_Real): void;
  SymbolPrs(): DsgPrs_ArrowSide;
  SetSymbolPrs(theSymbolPrs: DsgPrs_ArrowSide): void;
  SetExtShape(theIndex: Standard_Integer): void;
  ExtShape(): Standard_Integer;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  SetAutomaticPosition(theStatus: Standard_Boolean): void;
  AutomaticPosition(): Standard_Boolean;
}

export declare class PrsDim_Chamf2dDimension extends PrsDim_Relation {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  KindOfDimension(): PrsDim_KindOfDimension;
  IsMovable(): Standard_Boolean;
}

  export declare class PrsDim_Chamf2dDimension_1 extends PrsDim_Chamf2dDimension {
    constructor(aFShape: TopoDS_Shape, aPlane: any, aVal: Standard_Real, aText: TCollection_ExtendedString);
  }

  export declare class PrsDim_Chamf2dDimension_2 extends PrsDim_Chamf2dDimension {
    constructor(aFShape: TopoDS_Shape, aPlane: any, aVal: Standard_Real, aText: TCollection_ExtendedString, aPosition: gp_Pnt, aSymbolPrs: DsgPrs_ArrowSide, anArrowSize: Standard_Real);
  }

export declare class PrsDim_Chamf3dDimension extends PrsDim_Relation {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  KindOfDimension(): PrsDim_KindOfDimension;
  IsMovable(): Standard_Boolean;
}

  export declare class PrsDim_Chamf3dDimension_1 extends PrsDim_Chamf3dDimension {
    constructor(aFShape: TopoDS_Shape, aVal: Standard_Real, aText: TCollection_ExtendedString);
  }

  export declare class PrsDim_Chamf3dDimension_2 extends PrsDim_Chamf3dDimension {
    constructor(aFShape: TopoDS_Shape, aVal: Standard_Real, aText: TCollection_ExtendedString, aPosition: gp_Pnt, aSymbolPrs: DsgPrs_ArrowSide, anArrowSize: Standard_Real);
  }

export declare class AIS_Circle extends AIS_InteractiveObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  Circle(): any;
  Parameters(theU1: Standard_Real, theU2: Standard_Real): void;
  SetCircle(theCircle: any): void;
  SetFirstParam(theU: Standard_Real): void;
  SetLastParam(theU: Standard_Real): void;
  SetColor(aColor: Quantity_Color): void;
  SetWidth(aValue: Standard_Real): void;
  UnsetColor(): void;
  UnsetWidth(): void;
  IsFilledCircleSens(): Standard_Boolean;
  SetFilledCircleSens(theIsFilledCircleSens: Standard_Boolean): void;
}

  export declare class AIS_Circle_1 extends AIS_Circle {
    constructor(aCircle: any);
  }

  export declare class AIS_Circle_2 extends AIS_Circle {
    constructor(theCircle: any, theUStart: Standard_Real, theUEnd: Standard_Real, theIsFilledCircleSens: Standard_Boolean);
  }

export declare class AIS_ColorScale extends AIS_InteractiveObject {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  FindColor_1(theValue: Standard_Real, theMin: Standard_Real, theMax: Standard_Real, theColorsCount: Standard_Integer, theColorHlsMin: Graphic3d_Vec3d, theColorHlsMax: Graphic3d_Vec3d, theColor: Quantity_Color): Standard_Boolean;
  FindColor_2(theValue: Standard_Real, theMin: Standard_Real, theMax: Standard_Real, theColorsCount: Standard_Integer, theColor: Quantity_Color): Standard_Boolean;
  hueToValidRange(theHue: Standard_Real): Standard_Real;
  FindColor_3(theValue: Standard_Real, theColor: Quantity_Color): Standard_Boolean;
  GetMin(): Standard_Real;
  SetMin(theMin: Standard_Real): void;
  GetMax(): Standard_Real;
  SetMax(theMax: Standard_Real): void;
  GetRange(theMin: Standard_Real, theMax: Standard_Real): void;
  SetRange(theMin: Standard_Real, theMax: Standard_Real): void;
  HueMin(): Standard_Real;
  HueMax(): Standard_Real;
  HueRange(theMinAngle: Standard_Real, theMaxAngle: Standard_Real): void;
  SetHueRange(theMinAngle: Standard_Real, theMaxAngle: Standard_Real): void;
  ColorRange(theMinColor: Quantity_Color, theMaxColor: Quantity_Color): void;
  SetColorRange(theMinColor: Quantity_Color, theMaxColor: Quantity_Color): void;
  GetLabelType(): Aspect_TypeOfColorScaleData;
  SetLabelType(theType: Aspect_TypeOfColorScaleData): void;
  GetColorType(): Aspect_TypeOfColorScaleData;
  SetColorType(theType: Aspect_TypeOfColorScaleData): void;
  GetNumberOfIntervals(): Standard_Integer;
  SetNumberOfIntervals(theNum: Standard_Integer): void;
  GetTitle(): TCollection_ExtendedString;
  SetTitle(theTitle: TCollection_ExtendedString): void;
  GetFormat(): TCollection_AsciiString;
  Format(): TCollection_AsciiString;
  SetFormat(theFormat: TCollection_AsciiString): void;
  GetLabel(theIndex: Standard_Integer): TCollection_ExtendedString;
  GetIntervalColor(theIndex: Standard_Integer): Quantity_Color;
  SetIntervalColor(theColor: Quantity_Color, theIndex: Standard_Integer): void;
  GetLabels(theLabels: TColStd_SequenceOfExtendedString): void;
  Labels(): TColStd_SequenceOfExtendedString;
  SetLabels(theSeq: TColStd_SequenceOfExtendedString): void;
  GetColors_1(theColors: Aspect_SequenceOfColor): void;
  GetColors_2(): Aspect_SequenceOfColor;
  SetColors(theSeq: Aspect_SequenceOfColor): void;
  SetUniformColors(theLightness: Standard_Real, theHueFrom: Standard_Real, theHueTo: Standard_Real): void;
  MakeUniformColors(theNbColors: Standard_Integer, theLightness: Standard_Real, theHueFrom: Standard_Real, theHueTo: Standard_Real): Aspect_SequenceOfColor;
  GetLabelPosition(): Aspect_TypeOfColorScalePosition;
  SetLabelPosition(thePos: Aspect_TypeOfColorScalePosition): void;
  GetTitlePosition(): Aspect_TypeOfColorScalePosition;
  SetTitlePosition(thePos: Aspect_TypeOfColorScalePosition): void;
  IsReversed(): Standard_Boolean;
  SetReversed(theReverse: Standard_Boolean): void;
  IsSmoothTransition(): Standard_Boolean;
  SetSmoothTransition(theIsSmooth: Standard_Boolean): void;
  IsLabelAtBorder(): Standard_Boolean;
  SetLabelAtBorder(theOn: Standard_Boolean): void;
  IsLogarithmic(): Standard_Boolean;
  SetLogarithmic(isLogarithmic: Standard_Boolean): void;
  SetLabel(theLabel: TCollection_ExtendedString, theIndex: Standard_Integer): void;
  GetSize(theBreadth: Standard_Integer, theHeight: Standard_Integer): void;
  SetSize(theBreadth: Standard_Integer, theHeight: Standard_Integer): void;
  GetBreadth(): Standard_Integer;
  SetBreadth(theBreadth: Standard_Integer): void;
  GetHeight(): Standard_Integer;
  SetHeight(theHeight: Standard_Integer): void;
  GetPosition(theX: Standard_Real, theY: Standard_Real): void;
  SetPosition(theX: Standard_Integer, theY: Standard_Integer): void;
  GetXPosition(): Standard_Integer;
  SetXPosition(theX: Standard_Integer): void;
  GetYPosition(): Standard_Integer;
  SetYPosition(theY: Standard_Integer): void;
  GetTextHeight(): Standard_Integer;
  SetTextHeight(theHeight: Standard_Integer): void;
  TextWidth(theText: TCollection_ExtendedString): Standard_Integer;
  TextHeight(theText: TCollection_ExtendedString): Standard_Integer;
  TextSize(theText: TCollection_ExtendedString, theHeight: Standard_Integer, theWidth: Standard_Integer, theAscent: Standard_Integer, theDescent: Standard_Integer): void;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  Compute(thePresentationManager: any, thePresentation: any, theMode: Standard_Integer): void;
  ComputeSelection(a0: any, a1: Standard_Integer): void;
}

export declare class AIS_ColoredDrawer extends Prs3d_Drawer {
  constructor(theLink: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsHidden(): boolean;
  SetHidden(theToHide: boolean): void;
  HasOwnMaterial(): boolean;
  UnsetOwnMaterial(): void;
  SetOwnMaterial(): void;
  HasOwnColor(): boolean;
  UnsetOwnColor(): void;
  SetOwnColor(a0: Quantity_Color): void;
  HasOwnTransparency(): boolean;
  UnsetOwnTransparency(): void;
  SetOwnTransparency(a0: Standard_Real): void;
  HasOwnWidth(): boolean;
  UnsetOwnWidth(): void;
  SetOwnWidth(a0: Standard_Real): void;
}

export declare class AIS_Shape extends AIS_InteractiveObject {
  constructor(shap: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  AcceptShapeDecomposition(): Standard_Boolean;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  Shape(): TopoDS_Shape;
  SetShape(theShape: TopoDS_Shape): void;
  Set(theShape: TopoDS_Shape): void;
  SetOwnDeviationCoefficient_1(): Standard_Boolean;
  SetOwnDeviationAngle_1(): Standard_Boolean;
  SetOwnDeviationCoefficient_2(aCoefficient: Standard_Real): void;
  SetAngleAndDeviation(anAngle: Standard_Real): void;
  UserAngle(): Standard_Real;
  SetOwnDeviationAngle_2(anAngle: Standard_Real): void;
  OwnDeviationCoefficient(aCoefficient: Standard_Real, aPreviousCoefficient: Standard_Real): Standard_Boolean;
  OwnDeviationAngle(anAngle: Standard_Real, aPreviousAngle: Standard_Real): Standard_Boolean;
  SetTypeOfHLR(theTypeOfHLR: Prs3d_TypeOfHLR): void;
  TypeOfHLR(): Prs3d_TypeOfHLR;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  SetWidth(aValue: Standard_Real): void;
  UnsetWidth(): void;
  SetMaterial(aName: Graphic3d_MaterialAspect): void;
  UnsetMaterial(): void;
  SetTransparency(aValue: Standard_Real): void;
  UnsetTransparency(): void;
  BoundingBox_1(): Bnd_Box;
  Color(aColor: Quantity_Color): void;
  Material(): Graphic3d_NameOfMaterial;
  Transparency(): Standard_Real;
  SelectionType(theSelMode: Standard_Integer): TopAbs_ShapeEnum;
  SelectionMode(theShapeType: TopAbs_ShapeEnum): Standard_Integer;
  TextureRepeatUV(): gp_Pnt2d;
  SetTextureRepeatUV(theRepeatUV: gp_Pnt2d): void;
  TextureOriginUV(): gp_Pnt2d;
  SetTextureOriginUV(theOriginUV: gp_Pnt2d): void;
  TextureScaleUV(): gp_Pnt2d;
  SetTextureScaleUV(theScaleUV: gp_Pnt2d): void;
  computeHlrPresentation(theProjector: any, thePrs: any, theShape: TopoDS_Shape, theDrawer: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class AIS_ColoredShape extends AIS_Shape {
  CustomAspects(theShape: TopoDS_Shape): any;
  ClearCustomAspects(): void;
  UnsetCustomAspects(theShape: TopoDS_Shape, theToUnregister: Standard_Boolean): void;
  SetCustomColor(theShape: TopoDS_Shape, theColor: Quantity_Color): void;
  SetCustomTransparency(theShape: TopoDS_Shape, theTransparency: Standard_Real): void;
  SetCustomWidth(theShape: TopoDS_Shape, theLineWidth: Standard_Real): void;
  CustomAspectsMap(): AIS_DataMapOfShapeDrawer;
  ChangeCustomAspectsMap(): AIS_DataMapOfShapeDrawer;
  SetColor(theColor: Quantity_Color): void;
  SetWidth(theLineWidth: Standard_Real): void;
  SetTransparency(theValue: Standard_Real): void;
  SetMaterial(theAspect: Graphic3d_MaterialAspect): void;
  UnsetTransparency(): void;
  UnsetWidth(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class AIS_ColoredShape_1 extends AIS_ColoredShape {
    constructor(theShape: TopoDS_Shape);
  }

  export declare class AIS_ColoredShape_2 extends AIS_ColoredShape {
    constructor(theShape: any);
  }

export declare class PrsDim_ConcentricRelation extends PrsDim_Relation {
  constructor(aFShape: TopoDS_Shape, aSShape: TopoDS_Shape, aPlane: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_ConnectedInteractive extends AIS_InteractiveObject {
  constructor(aTypeOfPresentation3d: PrsMgr_TypeOfPresentation3d)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Type(): AIS_KindOfInteractive;
  Signature(): Standard_Integer;
  Connect_1(theAnotherObj: any): void;
  Connect_2(theAnotherObj: any, theLocation: gp_Trsf): void;
  Connect_3(theAnotherObj: any, theLocation: any): void;
  HasConnection(): Standard_Boolean;
  ConnectedTo(): any;
  Disconnect(): void;
  AcceptShapeDecomposition(): Standard_Boolean;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
}

export declare class PrsDim_DiameterDimension {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Circle(): gp_Circ;
  AnchorPoint(): gp_Pnt;
  Shape(): TopoDS_Shape;
  SetMeasuredGeometry_1(theCircle: gp_Circ): void;
  SetMeasuredGeometry_2(theShape: TopoDS_Shape): void;
  GetDisplayUnits(): TCollection_AsciiString;
  GetModelUnits(): TCollection_AsciiString;
  SetDisplayUnits(theUnits: TCollection_AsciiString): void;
  SetModelUnits(theUnits: TCollection_AsciiString): void;
  SetTextPosition(theTextPos: gp_Pnt): void;
  GetTextPosition(): gp_Pnt;
}

  export declare class PrsDim_DiameterDimension_1 extends PrsDim_DiameterDimension {
    constructor(theCircle: gp_Circ);
  }

  export declare class PrsDim_DiameterDimension_2 extends PrsDim_DiameterDimension {
    constructor(theCircle: gp_Circ, thePlane: gp_Pln);
  }

  export declare class PrsDim_DiameterDimension_3 extends PrsDim_DiameterDimension {
    constructor(theShape: TopoDS_Shape);
  }

  export declare class PrsDim_DiameterDimension_4 extends PrsDim_DiameterDimension {
    constructor(theShape: TopoDS_Shape, thePlane: gp_Pln);
  }

export declare class PrsDim_EllipseRadiusDimension extends PrsDim_Relation {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  KindOfDimension(): PrsDim_KindOfDimension;
  IsMovable(): Standard_Boolean;
  ComputeGeometry(): void;
}

export declare class PrsDim_EqualDistanceRelation extends PrsDim_Relation {
  constructor(aShape1: TopoDS_Shape, aShape2: TopoDS_Shape, aShape3: TopoDS_Shape, aShape4: TopoDS_Shape, aPlane: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetShape3(aShape: TopoDS_Shape): void;
  Shape3(): TopoDS_Shape;
  SetShape4(aShape: TopoDS_Shape): void;
  Shape4(): TopoDS_Shape;
  ComputeTwoEdgesLength(aPresentation: any, aDrawer: any, ArrowSize: Standard_Real, FirstEdge: TopoDS_Edge, SecondEdge: TopoDS_Edge, Plane: any, AutomaticPos: Standard_Boolean, IsSetBndBox: Standard_Boolean, BndBox: Bnd_Box, Position: gp_Pnt, FirstAttach: gp_Pnt, SecondAttach: gp_Pnt, FirstExtreme: gp_Pnt, SecondExtreme: gp_Pnt, SymbolPrs: DsgPrs_ArrowSide): void;
  ComputeTwoVerticesLength(aPresentation: any, aDrawer: any, ArrowSize: Standard_Real, FirstVertex: TopoDS_Vertex, SecondVertex: TopoDS_Vertex, Plane: any, AutomaticPos: Standard_Boolean, IsSetBndBox: Standard_Boolean, BndBox: Bnd_Box, TypeDist: PrsDim_TypeOfDist, Position: gp_Pnt, FirstAttach: gp_Pnt, SecondAttach: gp_Pnt, FirstExtreme: gp_Pnt, SecondExtreme: gp_Pnt, SymbolPrs: DsgPrs_ArrowSide): void;
  ComputeOneEdgeOneVertexLength(aPresentation: any, aDrawer: any, ArrowSize: Standard_Real, FirstShape: TopoDS_Shape, SecondShape: TopoDS_Shape, Plane: any, AutomaticPos: Standard_Boolean, IsSetBndBox: Standard_Boolean, BndBox: Bnd_Box, Position: gp_Pnt, FirstAttach: gp_Pnt, SecondAttach: gp_Pnt, FirstExtreme: gp_Pnt, SecondExtreme: gp_Pnt, SymbolPrs: DsgPrs_ArrowSide): void;
}

export declare class PrsDim_EqualRadiusRelation extends PrsDim_Relation {
  constructor(aFirstEdge: TopoDS_Edge, aSecondEdge: TopoDS_Edge, aPlane: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_ExclusionFilter extends SelectMgr_Filter {
  IsOk(anObj: any): Standard_Boolean;
  Add_1(TypeToExclude: AIS_KindOfInteractive): Standard_Boolean;
  Add_2(TypeToExclude: AIS_KindOfInteractive, SignatureInType: Standard_Integer): Standard_Boolean;
  Remove_1(TypeToExclude: AIS_KindOfInteractive): Standard_Boolean;
  Remove_2(TypeToExclude: AIS_KindOfInteractive, SignatureInType: Standard_Integer): Standard_Boolean;
  Clear(): void;
  IsExclusionFlagOn(): Standard_Boolean;
  SetExclusionFlag(Status: Standard_Boolean): void;
  IsStored(aType: AIS_KindOfInteractive): Standard_Boolean;
  ListOfStoredTypes(TheList: TColStd_ListOfInteger): void;
  ListOfSignature(aType: AIS_KindOfInteractive, TheStoredList: TColStd_ListOfInteger): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class AIS_ExclusionFilter_1 extends AIS_ExclusionFilter {
    constructor(ExclusionFlagOn: Standard_Boolean);
  }

  export declare class AIS_ExclusionFilter_2 extends AIS_ExclusionFilter {
    constructor(TypeToExclude: AIS_KindOfInteractive, ExclusionFlagOn: Standard_Boolean);
  }

  export declare class AIS_ExclusionFilter_3 extends AIS_ExclusionFilter {
    constructor(TypeToExclude: AIS_KindOfInteractive, SignatureInType: Standard_Integer, ExclusionFlagOn: Standard_Boolean);
  }

export declare class PrsDim_FixRelation extends PrsDim_Relation {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Wire(): TopoDS_Wire;
  SetWire(aWire: TopoDS_Wire): void;
  IsMovable(): Standard_Boolean;
}

  export declare class PrsDim_FixRelation_1 extends PrsDim_FixRelation {
    constructor(aShape: TopoDS_Shape, aPlane: any, aWire: TopoDS_Wire);
  }

  export declare class PrsDim_FixRelation_2 extends PrsDim_FixRelation {
    constructor(aShape: TopoDS_Shape, aPlane: any, aWire: TopoDS_Wire, aPosition: gp_Pnt, anArrowSize: Standard_Real);
  }

  export declare class PrsDim_FixRelation_3 extends PrsDim_FixRelation {
    constructor(aShape: TopoDS_Shape, aPlane: any);
  }

  export declare class PrsDim_FixRelation_4 extends PrsDim_FixRelation {
    constructor(aShape: TopoDS_Shape, aPlane: any, aPosition: gp_Pnt, anArrowSize: Standard_Real);
  }

export declare class AIS_GraphicTool {
  constructor();
  GetLineColor_1(aDrawer: any, TheTypeOfAttributes: AIS_TypeOfAttribute): Quantity_NameOfColor;
  GetLineColor_2(aDrawer: any, TheTypeOfAttributes: AIS_TypeOfAttribute, TheLineColor: Quantity_Color): void;
  GetLineWidth(aDrawer: any, TheTypeOfAttributes: AIS_TypeOfAttribute): Standard_Real;
  GetLineType(aDrawer: any, TheTypeOfAttributes: AIS_TypeOfAttribute): Aspect_TypeOfLine;
  GetLineAtt(aDrawer: any, TheTypeOfAttributes: AIS_TypeOfAttribute, aCol: Quantity_NameOfColor, aWidth: Standard_Real, aTyp: Aspect_TypeOfLine): void;
  GetInteriorColor_1(aDrawer: any): Quantity_NameOfColor;
  GetInteriorColor_2(aDrawer: any, aColor: Quantity_Color): void;
  GetMaterial(aDrawer: any): Graphic3d_MaterialAspect;
}

export declare class PrsDim_IdenticRelation extends PrsDim_Relation {
  constructor(FirstShape: TopoDS_Shape, SecondShape: TopoDS_Shape, aPlane: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  HasUsers(): Standard_Boolean;
  Users(): TColStd_ListOfTransient;
  AddUser(theUser: any): void;
  ClearUsers(): void;
  IsMovable(): Standard_Boolean;
}

export declare class PrsDim_LengthDimension {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  FirstPoint(): gp_Pnt;
  SecondPoint(): gp_Pnt;
  FirstShape(): TopoDS_Shape;
  SecondShape(): TopoDS_Shape;
  SetMeasuredGeometry_1(theFirstPoint: gp_Pnt, theSecondPoint: gp_Pnt, thePlane: gp_Pln): void;
  SetMeasuredGeometry_2(theEdge: TopoDS_Edge, thePlane: gp_Pln): void;
  SetMeasuredGeometry_3(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face): void;
  SetMeasuredGeometry_4(theFace: TopoDS_Face, theEdge: TopoDS_Edge): void;
  SetMeasuredShapes(theFirstShape: TopoDS_Shape, theSecondShape: TopoDS_Shape): void;
  GetDisplayUnits(): TCollection_AsciiString;
  GetModelUnits(): TCollection_AsciiString;
  SetDisplayUnits(theUnits: TCollection_AsciiString): void;
  SetModelUnits(theUnits: TCollection_AsciiString): void;
  SetTextPosition(theTextPos: gp_Pnt): void;
  GetTextPosition(): gp_Pnt;
  SetDirection(theDirection: gp_Dir, theUseDirection: Standard_Boolean): void;
}

  export declare class PrsDim_LengthDimension_1 extends PrsDim_LengthDimension {
    constructor(theFace: TopoDS_Face, theEdge: TopoDS_Edge);
  }

  export declare class PrsDim_LengthDimension_2 extends PrsDim_LengthDimension {
    constructor(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face);
  }

  export declare class PrsDim_LengthDimension_3 extends PrsDim_LengthDimension {
    constructor(theFirstPoint: gp_Pnt, theSecondPoint: gp_Pnt, thePlane: gp_Pln);
  }

  export declare class PrsDim_LengthDimension_4 extends PrsDim_LengthDimension {
    constructor(theFirstShape: TopoDS_Shape, theSecondShape: TopoDS_Shape, thePlane: gp_Pln);
  }

  export declare class PrsDim_LengthDimension_5 extends PrsDim_LengthDimension {
    constructor(theEdge: TopoDS_Edge, thePlane: gp_Pln);
  }

export declare class AIS_Line extends AIS_InteractiveObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  Line(): any;
  Points(thePStart: any, thePEnd: any): void;
  SetLine(theLine: any): void;
  SetPoints(thePStart: any, thePEnd: any): void;
  SetColor(aColor: Quantity_Color): void;
  SetWidth(aValue: Standard_Real): void;
  UnsetColor(): void;
  UnsetWidth(): void;
}

  export declare class AIS_Line_1 extends AIS_Line {
    constructor(aLine: any);
  }

  export declare class AIS_Line_2 extends AIS_Line {
    constructor(aStartPoint: any, aEndPoint: any);
  }

export declare class Prs3d_ShadingAspect extends Prs3d_BasicAspect {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColor(aColor: Quantity_Color, aModel: Aspect_TypeOfFacingModel): void;
  SetMaterial(aMaterial: Graphic3d_MaterialAspect, aModel: Aspect_TypeOfFacingModel): void;
  SetTransparency(aValue: Standard_Real, aModel: Aspect_TypeOfFacingModel): void;
  Color(aModel: Aspect_TypeOfFacingModel): Quantity_Color;
  Material(aModel: Aspect_TypeOfFacingModel): Graphic3d_MaterialAspect;
  Transparency(aModel: Aspect_TypeOfFacingModel): Standard_Real;
  Aspect(): any;
  SetAspect(theAspect: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Prs3d_ShadingAspect_1 extends Prs3d_ShadingAspect {
    constructor();
  }

  export declare class Prs3d_ShadingAspect_2 extends Prs3d_ShadingAspect {
    constructor(theAspect: any);
  }

export declare class V3d_Trihedron extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetWireframe(theAsWireframe: Standard_Boolean): void;
  SetPosition(thePosition: Aspect_TypeOfTriedronPosition): void;
  SetScale(theScale: Standard_Real): void;
  SetSizeRatio(theRatio: Standard_Real): void;
  SetArrowDiameter(theDiam: Standard_Real): void;
  SetNbFacets(theNbFacets: Standard_Integer): void;
  SetLabelsColor(theColor: Quantity_Color): void;
  SetArrowsColor(theXColor: Quantity_Color, theYColor: Quantity_Color, theZColor: Quantity_Color): void;
  Display(theView: V3d_View): void;
  Erase(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class V3d_Viewer extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IfMoreViews(): Standard_Boolean;
  CreateView(): any;
  SetViewOn_1(): void;
  SetViewOn_2(theView: any): void;
  SetViewOff_1(): void;
  SetViewOff_2(theView: any): void;
  Update(): void;
  Redraw(): void;
  RedrawImmediate(): void;
  Invalidate(): void;
  Remove(): void;
  Driver(): any;
  StructureManager(): any;
  DefaultRenderingParams(): Graphic3d_RenderingParams;
  SetDefaultRenderingParams(theParams: Graphic3d_RenderingParams): void;
  SetDefaultBackgroundColor_1(theColor: Quantity_Color): void;
  GetGradientBackground(): Aspect_GradientBackground;
  SetDefaultBgGradientColors(theColor1: Quantity_Color, theColor2: Quantity_Color, theFillStyle: Aspect_GradientFillMethod): void;
  DefaultViewSize(): Standard_Real;
  SetDefaultViewSize(theSize: Standard_Real): void;
  DefaultViewProj(): V3d_TypeOfOrientation;
  SetDefaultViewProj(theOrientation: V3d_TypeOfOrientation): void;
  DefaultVisualization(): V3d_TypeOfVisualization;
  SetDefaultVisualization(theType: V3d_TypeOfVisualization): void;
  DefaultShadingModel(): Graphic3d_TypeOfShadingModel;
  SetDefaultShadingModel(theType: Graphic3d_TypeOfShadingModel): void;
  DefaultTypeOfView(): V3d_TypeOfView;
  SetDefaultTypeOfView(theType: V3d_TypeOfView): void;
  DefaultBackgroundColor_1(): Quantity_Color;
  DefaultBgGradientColors(theColor1: Quantity_Color, theColor2: Quantity_Color): void;
  GetAllZLayers(theLayerSeq: TColStd_SequenceOfInteger): void;
  AddZLayer(theLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings): Standard_Boolean;
  InsertLayerBefore(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerAfter: Graphic3d_ZLayerId): Standard_Boolean;
  InsertLayerAfter(theNewLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings, theLayerBefore: Graphic3d_ZLayerId): Standard_Boolean;
  RemoveZLayer(theLayerId: Graphic3d_ZLayerId): Standard_Boolean;
  ZLayerSettings(theLayerId: Graphic3d_ZLayerId): Graphic3d_ZLayerSettings;
  SetZLayerSettings(theLayerId: Graphic3d_ZLayerId, theSettings: Graphic3d_ZLayerSettings): void;
  ActiveViews(): V3d_ListOfView;
  ActiveViewIterator(): V3d_ListOfViewIterator;
  LastActiveView(): Standard_Boolean;
  DefinedViews(): V3d_ListOfView;
  DefinedViewIterator(): V3d_ListOfViewIterator;
  SetDefaultLights(): void;
  SetLightOn_1(theLight: any): void;
  SetLightOn_2(): void;
  SetLightOff_1(theLight: any): void;
  SetLightOff_2(): void;
  AddLight(theLight: any): void;
  DelLight(theLight: any): void;
  UpdateLights(): void;
  IsGlobalLight(TheLight: any): Standard_Boolean;
  ActiveLights(): V3d_ListOfLight;
  ActiveLightIterator(): V3d_ListOfLightIterator;
  DefinedLights(): V3d_ListOfLight;
  DefinedLightIterator(): V3d_ListOfLightIterator;
  Erase(): void;
  UnHighlight(): void;
  ComputedMode(): Standard_Boolean;
  SetComputedMode(theMode: Standard_Boolean): void;
  DefaultComputedMode(): Standard_Boolean;
  SetDefaultComputedMode(theMode: Standard_Boolean): void;
  PrivilegedPlane(): gp_Ax3;
  SetPrivilegedPlane(thePlane: gp_Ax3): void;
  DisplayPrivilegedPlane(theOnOff: Standard_Boolean, theSize: Standard_Real): void;
  ActivateGrid(aGridType: Aspect_GridType, aGridDrawMode: Aspect_GridDrawMode): void;
  DeactivateGrid(): void;
  SetGridEcho_1(showGrid: Standard_Boolean): void;
  SetGridEcho_2(aMarker: any): void;
  GridEcho(): Standard_Boolean;
  IsActive(): Standard_Boolean;
  Grid(): any;
  GridType(): Aspect_GridType;
  GridDrawMode(): Aspect_GridDrawMode;
  RectangularGridValues(XOrigin: Standard_Real, YOrigin: Standard_Real, XStep: Standard_Real, YStep: Standard_Real, RotationAngle: Standard_Real): void;
  SetRectangularGridValues(XOrigin: Standard_Real, YOrigin: Standard_Real, XStep: Standard_Real, YStep: Standard_Real, RotationAngle: Standard_Real): void;
  CircularGridValues(XOrigin: Standard_Real, YOrigin: Standard_Real, RadiusStep: Standard_Real, DivisionNumber: Standard_Integer, RotationAngle: Standard_Real): void;
  SetCircularGridValues(XOrigin: Standard_Real, YOrigin: Standard_Real, RadiusStep: Standard_Real, DivisionNumber: Standard_Integer, RotationAngle: Standard_Real): void;
  CircularGridGraphicValues(Radius: Standard_Real, OffSet: Standard_Real): void;
  SetCircularGridGraphicValues(Radius: Standard_Real, OffSet: Standard_Real): void;
  RectangularGridGraphicValues(XSize: Standard_Real, YSize: Standard_Real, OffSet: Standard_Real): void;
  SetRectangularGridGraphicValues(XSize: Standard_Real, YSize: Standard_Real, OffSet: Standard_Real): void;
  ShowGridEcho(theView: any, thePoint: Graphic3d_Vertex): void;
  HideGridEcho(theView: any): void;
  SetDefaultBackgroundColor_2(theType: Quantity_TypeOfColor, theV1: Standard_Real, theV2: Standard_Real, theV3: Standard_Real): void;
  DefaultBackgroundColor_2(theType: Quantity_TypeOfColor, theV1: Standard_Real, theV2: Standard_Real, theV3: Standard_Real): void;
  InitActiveViews(): void;
  MoreActiveViews(): Standard_Boolean;
  NextActiveViews(): void;
  ActiveView(): any;
  InitDefinedViews(): void;
  MoreDefinedViews(): Standard_Boolean;
  NextDefinedViews(): void;
  DefinedView(): any;
  InitActiveLights(): void;
  MoreActiveLights(): Standard_Boolean;
  NextActiveLights(): void;
  ActiveLight(): any;
  InitDefinedLights(): void;
  MoreDefinedLights(): Standard_Boolean;
  NextDefinedLights(): void;
  DefinedLight(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class V3d_Viewer_1 extends V3d_Viewer {
    constructor(theDriver: any);
  }

  export declare class V3d_Viewer_2 extends V3d_Viewer {
    constructor(theDriver: any, theName: Standard_ExtString, theDomain: Standard_CString, theViewSize: Standard_Real, theViewProj: V3d_TypeOfOrientation, theViewBackground: Quantity_Color, theVisualization: V3d_TypeOfVisualization, theShadingModel: Graphic3d_TypeOfShadingModel, theComputedMode: Standard_Boolean, theDefaultComputedMode: Standard_Boolean);
  }

export declare class V3d_View extends Standard_Transient {
  SetWindow(theWindow: any, theContext: Aspect_RenderingContext): void;
  SetMagnify(theWindow: any, thePreviousView: any, theX1: Standard_Integer, theY1: Standard_Integer, theX2: Standard_Integer, theY2: Standard_Integer): void;
  Remove(): void;
  Update(): void;
  Redraw(): void;
  RedrawImmediate(): void;
  Invalidate(): void;
  IsInvalidated(): Standard_Boolean;
  IsInvalidatedImmediate(): Standard_Boolean;
  InvalidateImmediate(): void;
  MustBeResized(): void;
  DoMapping(): void;
  IsEmpty(): Standard_Boolean;
  UpdateLights(): void;
  SetAutoZFitMode(theIsOn: Standard_Boolean, theScaleFactor: Standard_Real): void;
  AutoZFitMode(): Standard_Boolean;
  AutoZFitScaleFactor(): Standard_Real;
  AutoZFit(): void;
  ZFitAll(theScaleFactor: Standard_Real): void;
  SetBackgroundColor_1(theType: Quantity_TypeOfColor, theV1: Standard_Real, theV2: Standard_Real, theV3: Standard_Real): void;
  SetBackgroundColor_2(theColor: Quantity_Color): void;
  SetBgGradientColors(theColor1: Quantity_Color, theColor2: Quantity_Color, theFillStyle: Aspect_GradientFillMethod, theToUpdate: Standard_Boolean): void;
  SetBgGradientStyle(theMethod: Aspect_GradientFillMethod, theToUpdate: Standard_Boolean): void;
  SetBackgroundImage_1(theFileName: Standard_CString, theFillStyle: Aspect_FillMethod, theToUpdate: Standard_Boolean): void;
  SetBackgroundImage_2(theTexture: any, theFillStyle: Aspect_FillMethod, theToUpdate: Standard_Boolean): void;
  SetBgImageStyle(theFillStyle: Aspect_FillMethod, theToUpdate: Standard_Boolean): void;
  SetBackgroundCubeMap(theCubeMap: any, theToUpdatePBREnv: Standard_Boolean, theToUpdate: Standard_Boolean): void;
  GeneratePBREnvironment(theToUpdate: Standard_Boolean): void;
  ClearPBREnvironment(theToUpdate: Standard_Boolean): void;
  SetAxis(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, Vx: Standard_Real, Vy: Standard_Real, Vz: Standard_Real): void;
  SetShadingModel(theShadingModel: Graphic3d_TypeOfShadingModel): void;
  SetTextureEnv(theTexture: any): void;
  SetVisualization(theType: V3d_TypeOfVisualization): void;
  SetLightOn_1(theLight: any): void;
  SetLightOn_2(): void;
  SetLightOff_1(theLight: any): void;
  SetLightOff_2(): void;
  IsActiveLight(theLight: any): Standard_Boolean;
  SetImmediateUpdate(theImmediateUpdate: Standard_Boolean): Standard_Boolean;
  ZBufferTriedronSetup(theXColor: Quantity_Color, theYColor: Quantity_Color, theZColor: Quantity_Color, theSizeRatio: Standard_Real, theAxisDiametr: Standard_Real, theNbFacettes: Standard_Integer): void;
  TriedronDisplay(thePosition: Aspect_TypeOfTriedronPosition, theColor: Quantity_Color, theScale: Standard_Real, theMode: V3d_TypeOfVisualization): void;
  TriedronErase(): void;
  GetGraduatedTrihedron(): Graphic3d_GraduatedTrihedron;
  GraduatedTrihedronDisplay(theTrihedronData: Graphic3d_GraduatedTrihedron): void;
  GraduatedTrihedronErase(): void;
  SetFront(): void;
  Rotate_1(Ax: Standard_Real, Ay: Standard_Real, Az: Standard_Real, Start: Standard_Boolean): void;
  Rotate_2(Ax: Standard_Real, Ay: Standard_Real, Az: Standard_Real, X: Standard_Real, Y: Standard_Real, Z: Standard_Real, Start: Standard_Boolean): void;
  Rotate_3(Axe: V3d_TypeOfAxe, Angle: Standard_Real, X: Standard_Real, Y: Standard_Real, Z: Standard_Real, Start: Standard_Boolean): void;
  Rotate_4(Axe: V3d_TypeOfAxe, Angle: Standard_Real, Start: Standard_Boolean): void;
  Rotate_5(Angle: Standard_Real, Start: Standard_Boolean): void;
  Move_1(Dx: Standard_Real, Dy: Standard_Real, Dz: Standard_Real, Start: Standard_Boolean): void;
  Move_2(Axe: V3d_TypeOfAxe, Length: Standard_Real, Start: Standard_Boolean): void;
  Move_3(Length: Standard_Real, Start: Standard_Boolean): void;
  Translate_1(Dx: Standard_Real, Dy: Standard_Real, Dz: Standard_Real, Start: Standard_Boolean): void;
  Translate_2(Axe: V3d_TypeOfAxe, Length: Standard_Real, Start: Standard_Boolean): void;
  Translate_3(Length: Standard_Real, Start: Standard_Boolean): void;
  Place(theXp: Standard_Integer, theYp: Standard_Integer, theZoomFactor: Standard_Real): void;
  Turn_1(Ax: Standard_Real, Ay: Standard_Real, Az: Standard_Real, Start: Standard_Boolean): void;
  Turn_2(Axe: V3d_TypeOfAxe, Angle: Standard_Real, Start: Standard_Boolean): void;
  Turn_3(Angle: Standard_Real, Start: Standard_Boolean): void;
  SetTwist(Angle: Standard_Real): void;
  SetEye(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  SetDepth(Depth: Standard_Real): void;
  SetProj_1(Vx: Standard_Real, Vy: Standard_Real, Vz: Standard_Real): void;
  SetProj_2(theOrientation: V3d_TypeOfOrientation, theIsYup: Standard_Boolean): void;
  SetAt(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  SetUp_1(Vx: Standard_Real, Vy: Standard_Real, Vz: Standard_Real): void;
  SetUp_2(Orientation: V3d_TypeOfOrientation): void;
  SetViewOrientationDefault(): void;
  ResetViewOrientation(): void;
  Panning(theDXv: Standard_Real, theDYv: Standard_Real, theZoomFactor: Standard_Real, theToStart: Standard_Boolean): void;
  SetCenter(theXp: Standard_Integer, theYp: Standard_Integer): void;
  SetSize(theSize: Standard_Real): void;
  SetZSize(SetZSize: Standard_Real): void;
  SetZoom(Coef: Standard_Real, Start: Standard_Boolean): void;
  SetScale(Coef: Standard_Real): void;
  SetAxialScale(Sx: Standard_Real, Sy: Standard_Real, Sz: Standard_Real): void;
  FitAll_1(theMargin: Standard_Real, theToUpdate: Standard_Boolean): void;
  FitAll_2(theBox: Bnd_Box, theMargin: Standard_Real, theToUpdate: Standard_Boolean): void;
  DepthFitAll(Aspect: Standard_Real, Margin: Standard_Real): void;
  FitAll_3(theMinXv: Standard_Real, theMinYv: Standard_Real, theMaxXv: Standard_Real, theMaxYv: Standard_Real): void;
  WindowFit(theMinXp: Standard_Integer, theMinYp: Standard_Integer, theMaxXp: Standard_Integer, theMaxYp: Standard_Integer): void;
  SetViewMappingDefault(): void;
  ResetViewMapping(): void;
  Reset(theToUpdate: Standard_Boolean): void;
  Convert_1(Vp: Standard_Integer): Standard_Real;
  Convert_2(Xp: Standard_Integer, Yp: Standard_Integer, Xv: Standard_Real, Yv: Standard_Real): void;
  Convert_3(Vv: Standard_Real): Standard_Integer;
  Convert_4(Xv: Standard_Real, Yv: Standard_Real, Xp: Standard_Integer, Yp: Standard_Integer): void;
  Convert_5(Xp: Standard_Integer, Yp: Standard_Integer, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  ConvertWithProj(Xp: Standard_Integer, Yp: Standard_Integer, X: Standard_Real, Y: Standard_Real, Z: Standard_Real, Vx: Standard_Real, Vy: Standard_Real, Vz: Standard_Real): void;
  ConvertToGrid_1(Xp: Standard_Integer, Yp: Standard_Integer, Xg: Standard_Real, Yg: Standard_Real, Zg: Standard_Real): void;
  ConvertToGrid_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, Xg: Standard_Real, Yg: Standard_Real, Zg: Standard_Real): void;
  Convert_6(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, Xp: Standard_Integer, Yp: Standard_Integer): void;
  Project_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theXp: Standard_Real, theYp: Standard_Real): void;
  Project_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real): void;
  BackgroundColor_1(Type: Quantity_TypeOfColor, V1: Standard_Real, V2: Standard_Real, V3: Standard_Real): void;
  BackgroundColor_2(): Quantity_Color;
  GradientBackgroundColors(theColor1: Quantity_Color, theColor2: Quantity_Color): void;
  GradientBackground(): Aspect_GradientBackground;
  Scale_1(): Standard_Real;
  AxialScale_1(Sx: Standard_Real, Sy: Standard_Real, Sz: Standard_Real): void;
  Size(Width: Standard_Real, Height: Standard_Real): void;
  ZSize(): Standard_Real;
  Eye(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  FocalReferencePoint(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  ProjReferenceAxe(Xpix: Standard_Integer, Ypix: Standard_Integer, XP: Standard_Real, YP: Standard_Real, ZP: Standard_Real, VX: Standard_Real, VY: Standard_Real, VZ: Standard_Real): void;
  Depth(): Standard_Real;
  Proj(Vx: Standard_Real, Vy: Standard_Real, Vz: Standard_Real): void;
  At(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Up(Vx: Standard_Real, Vy: Standard_Real, Vz: Standard_Real): void;
  Twist(): Standard_Real;
  ShadingModel(): Graphic3d_TypeOfShadingModel;
  TextureEnv(): any;
  Visualization(): V3d_TypeOfVisualization;
  ActiveLights(): V3d_ListOfLight;
  ActiveLightIterator(): V3d_ListOfLightIterator;
  LightLimit(): Standard_Integer;
  Viewer(): any;
  IfWindow(): Standard_Boolean;
  Window(): any;
  Type(): V3d_TypeOfView;
  Pan(theDXp: Standard_Integer, theDYp: Standard_Integer, theZoomFactor: Standard_Real, theToStart: Standard_Boolean): void;
  Zoom(theXp1: Standard_Integer, theYp1: Standard_Integer, theXp2: Standard_Integer, theYp2: Standard_Integer): void;
  StartZoomAtPoint(theXp: Standard_Integer, theYp: Standard_Integer): void;
  ZoomAtPoint(theMouseStartX: Standard_Integer, theMouseStartY: Standard_Integer, theMouseEndX: Standard_Integer, theMouseEndY: Standard_Integer): void;
  AxialScale_2(Dx: Standard_Integer, Dy: Standard_Integer, Axis: V3d_TypeOfAxe): void;
  StartRotation(X: Standard_Integer, Y: Standard_Integer, zRotationThreshold: Standard_Real): void;
  Rotation(X: Standard_Integer, Y: Standard_Integer): void;
  SetFocale(Focale: Standard_Real): void;
  Focale(): Standard_Real;
  View(): any;
  SetComputedMode(theMode: Standard_Boolean): void;
  ComputedMode(): Standard_Boolean;
  WindowFitAll(Xmin: Standard_Integer, Ymin: Standard_Integer, Xmax: Standard_Integer, Ymax: Standard_Integer): void;
  FitMinMax(theCamera: any, theBox: Bnd_Box, theMargin: Standard_Real, theResolution: Standard_Real, theToEnlargeIfLine: Standard_Boolean): Standard_Boolean;
  SetGrid(aPlane: gp_Ax3, aGrid: any): void;
  SetGridActivity(aFlag: Standard_Boolean): void;
  Dump(theFile: Standard_CString, theBufferType: Graphic3d_BufferType): Standard_Boolean;
  ToPixMap_1(theImage: Image_PixMap, theParams: V3d_ImageDumpOptions): Standard_Boolean;
  ToPixMap_2(theImage: Image_PixMap, theWidth: Standard_Integer, theHeight: Standard_Integer, theBufferType: Graphic3d_BufferType, theToAdjustAspect: Standard_Boolean, theStereoOptions: V3d_StereoDumpOptions): Standard_Boolean;
  SetBackFacingModel(theModel: V3d_TypeOfBackfacingModel): void;
  BackFacingModel(): V3d_TypeOfBackfacingModel;
  AddClipPlane(thePlane: any): void;
  RemoveClipPlane(thePlane: any): void;
  SetClipPlanes_1(thePlanes: any): void;
  SetClipPlanes_2(thePlanes: Graphic3d_SequenceOfHClipPlane): void;
  ClipPlanes(): any;
  PlaneLimit(): Standard_Integer;
  SetCamera(theCamera: any): void;
  Camera(): any;
  DefaultCamera(): any;
  RenderingParams(): Graphic3d_RenderingParams;
  ChangeRenderingParams(): Graphic3d_RenderingParams;
  IsCullingEnabled(): Standard_Boolean;
  SetFrustumCulling(theMode: Standard_Boolean): void;
  DiagnosticInformation(theDict: TColStd_IndexedDataMapOfStringString, theFlags: Graphic3d_DiagnosticInfo): void;
  StatisticInformation_1(): TCollection_AsciiString;
  StatisticInformation_2(theDict: TColStd_IndexedDataMapOfStringString): void;
  GravityPoint(): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IfMoreLights(): Standard_Boolean;
  InitActiveLights(): void;
  MoreActiveLights(): Standard_Boolean;
  NextActiveLights(): void;
  ActiveLight(): any;
}

  export declare class V3d_View_1 extends V3d_View {
    constructor(theViewer: any, theType: V3d_TypeOfView);
  }

  export declare class V3d_View_2 extends V3d_View {
    constructor(theViewer: any, theView: any);
  }

export declare class AIS_Manipulator extends AIS_InteractiveObject {
  SetPart_1(theAxisIndex: Standard_Integer, theMode: AIS_ManipulatorMode, theIsEnabled: Standard_Boolean): void;
  SetPart_2(theMode: AIS_ManipulatorMode, theIsEnabled: Standard_Boolean): void;
  Attach_1(theObject: any, theOptions: any): void;
  Attach_2(theObject: any, theOptions: any): void;
  EnableMode(theMode: AIS_ManipulatorMode): void;
  SetModeActivationOnDetection(theToEnable: Standard_Boolean): void;
  IsModeActivationOnDetection(): Standard_Boolean;
  ProcessDragging(theCtx: any, theView: any, theOwner: any, theDragFrom: Graphic3d_Vec2i, theDragTo: Graphic3d_Vec2i, theAction: AIS_DragAction): Standard_Boolean;
  StartTransform(theX: Standard_Integer, theY: Standard_Integer, theView: any): void;
  Transform_1(aTrsf: gp_Trsf): void;
  StopTransform(theToApply: Standard_Boolean): void;
  Transform_2(theX: Standard_Integer, theY: Standard_Integer, theView: any): gp_Trsf;
  ObjectTransformation(theX: Standard_Integer, theY: Standard_Integer, theView: any, theTrsf: gp_Trsf): Standard_Boolean;
  DeactivateCurrentMode(): void;
  Detach(): void;
  Objects(): any;
  Object_1(): any;
  Object_2(theIndex: Standard_Integer): any;
  IsAttached(): Standard_Boolean;
  HasActiveMode(): Standard_Boolean;
  HasActiveTransformation(): Standard_Boolean;
  StartTransformation_1(): gp_Trsf;
  StartTransformation_2(theIndex: Standard_Integer): gp_Trsf;
  SetZoomPersistence(theToEnable: Standard_Boolean): void;
  ZoomPersistence(): Standard_Boolean;
  SetTransformPersistence(theTrsfPers: any): void;
  ActiveMode(): AIS_ManipulatorMode;
  ActiveAxisIndex(): Standard_Integer;
  Position(): gp_Ax2;
  SetPosition(thePosition: gp_Ax2): void;
  Size(): Standard_ShortReal;
  SetSize(theSideLength: Standard_ShortReal): void;
  SetGap(theValue: Standard_ShortReal): void;
  SetTransformBehavior(theSettings: any): void;
  ChangeTransformBehavior(): any;
  TransformBehavior(): any;
  Compute(thePrsMgr: any, thePrs: any, theMode: Standard_Integer): void;
  ComputeSelection(theSelection: any, theMode: Standard_Integer): void;
  IsAutoHilight(): Standard_Boolean;
  ClearSelected(): void;
  HilightSelected(thePM: any, theSeq: SelectMgr_SequenceOfOwner): void;
  HilightOwnerWithColor(thePM: any, theStyle: any, theOwner: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class AIS_Manipulator_1 extends AIS_Manipulator {
    constructor();
  }

  export declare class AIS_Manipulator_2 extends AIS_Manipulator {
    constructor(thePosition: gp_Ax2);
  }

export declare class AIS_ManipulatorOwner extends SelectMgr_EntityOwner {
  constructor(theSelObject: any, theIndex: Standard_Integer, theMode: AIS_ManipulatorMode, thePriority: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  HilightWithColor(thePM: any, theStyle: any, theMode: Standard_Integer): void;
  IsHilighted(thePM: any, theMode: Standard_Integer): Standard_Boolean;
  Unhilight(thePM: any, theMode: Standard_Integer): void;
  Mode(): AIS_ManipulatorMode;
  Index(): Standard_Integer;
}

export declare class PrsDim_MaxRadiusDimension extends PrsDim_EllipseRadiusDimension {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class PrsDim_MaxRadiusDimension_1 extends PrsDim_MaxRadiusDimension {
    constructor(aShape: TopoDS_Shape, aVal: Standard_Real, aText: TCollection_ExtendedString);
  }

  export declare class PrsDim_MaxRadiusDimension_2 extends PrsDim_MaxRadiusDimension {
    constructor(aShape: TopoDS_Shape, aVal: Standard_Real, aText: TCollection_ExtendedString, aPosition: gp_Pnt, aSymbolPrs: DsgPrs_ArrowSide, anArrowSize: Standard_Real);
  }

export declare class AIS_MediaPlayer extends AIS_InteractiveObject {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetCallback(theCallbackFunction: any, theCallbackUserPtr: void): void;
  OpenInput(thePath: TCollection_AsciiString, theToWait: Standard_Boolean): void;
  PresentFrame(theLeftCorner: Graphic3d_Vec2i, theMaxSize: Graphic3d_Vec2i): boolean;
  PlayerContext(): any;
  PlayPause(): void;
  SetClosePlayer(): void;
  Duration(): number;
}

export declare class PrsDim_MidPointRelation extends PrsDim_Relation {
  constructor(aSymmTool: TopoDS_Shape, FirstShape: TopoDS_Shape, SecondShape: TopoDS_Shape, aPlane: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsMovable(): Standard_Boolean;
  SetTool(aMidPointTool: TopoDS_Shape): void;
  GetTool(): TopoDS_Shape;
}

export declare class PrsDim_MinRadiusDimension extends PrsDim_EllipseRadiusDimension {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class PrsDim_MinRadiusDimension_1 extends PrsDim_MinRadiusDimension {
    constructor(aShape: TopoDS_Shape, aVal: Standard_Real, aText: TCollection_ExtendedString);
  }

  export declare class PrsDim_MinRadiusDimension_2 extends PrsDim_MinRadiusDimension {
    constructor(aShape: TopoDS_Shape, aVal: Standard_Real, aText: TCollection_ExtendedString, aPosition: gp_Pnt, aSymbolPrs: DsgPrs_ArrowSide, anArrowSize: Standard_Real);
  }

export declare class AIS_MultipleConnectedInteractive extends AIS_InteractiveObject {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Connect_1(theAnotherObj: any, theLocation: any, theTrsfPers: any): any;
  Type(): AIS_KindOfInteractive;
  Signature(): Standard_Integer;
  HasConnection(): Standard_Boolean;
  Disconnect(theInteractive: any): void;
  DisconnectAll(): void;
  AcceptShapeDecomposition(): Standard_Boolean;
  GetAssemblyOwner(): any;
  GlobalSelOwner(): any;
  SetContext(theCtx: any): void;
  Connect_2(theAnotherObj: any): any;
  Connect_3(theAnotherObj: any, theLocation: gp_Trsf): any;
  Connect_4(theAnotherObj: any, theLocation: gp_Trsf, theTrsfPers: any): any;
  Connect_5(theInteractive: any, theLocation: gp_Trsf, theTrsfPersFlag: Graphic3d_TransModeFlags, theTrsfPersPoint: gp_Pnt): any;
}

export declare class PrsDim_OffsetDimension extends PrsDim_Relation {
  constructor(FistShape: TopoDS_Shape, SecondShape: TopoDS_Shape, aVal: Standard_Real, aText: TCollection_ExtendedString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  KindOfDimension(): PrsDim_KindOfDimension;
  IsMovable(): Standard_Boolean;
  SetRelativePos(aTrsf: gp_Trsf): void;
}

export declare class PrsDim_ParallelRelation extends PrsDim_Relation {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsMovable(): Standard_Boolean;
}

  export declare class PrsDim_ParallelRelation_1 extends PrsDim_ParallelRelation {
    constructor(aFShape: TopoDS_Shape, aSShape: TopoDS_Shape, aPlane: any);
  }

  export declare class PrsDim_ParallelRelation_2 extends PrsDim_ParallelRelation {
    constructor(aFShape: TopoDS_Shape, aSShape: TopoDS_Shape, aPlane: any, aPosition: gp_Pnt, aSymbolPrs: DsgPrs_ArrowSide, anArrowSize: Standard_Real);
  }

export declare class PrsDim_PerpendicularRelation extends PrsDim_Relation {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class PrsDim_PerpendicularRelation_1 extends PrsDim_PerpendicularRelation {
    constructor(aFShape: TopoDS_Shape, aSShape: TopoDS_Shape, aPlane: any);
  }

  export declare class PrsDim_PerpendicularRelation_2 extends PrsDim_PerpendicularRelation {
    constructor(aFShape: TopoDS_Shape, aSShape: TopoDS_Shape);
  }

export declare class AIS_Plane extends AIS_InteractiveObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetSize_1(aValue: Standard_Real): void;
  SetSize_2(Xval: Standard_Real, YVal: Standard_Real): void;
  UnsetSize(): void;
  Size(X: Standard_Real, Y: Standard_Real): Standard_Boolean;
  HasOwnSize(): Standard_Boolean;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  Component(): any;
  SetComponent(aComponent: any): void;
  PlaneAttributes(aComponent: any, aCenter: gp_Pnt, aPmin: gp_Pnt, aPmax: gp_Pnt): Standard_Boolean;
  SetPlaneAttributes(aComponent: any, aCenter: gp_Pnt, aPmin: gp_Pnt, aPmax: gp_Pnt): void;
  Center(): gp_Pnt;
  SetCenter(theCenter: gp_Pnt): void;
  SetAxis2Placement(aComponent: any, aPlaneType: AIS_TypeOfPlane): void;
  Axis2Placement(): any;
  TypeOfPlane(): AIS_TypeOfPlane;
  IsXYZPlane(): Standard_Boolean;
  CurrentMode(): Standard_Boolean;
  SetCurrentMode(theCurrentMode: Standard_Boolean): void;
  AcceptDisplayMode(aMode: Standard_Integer): Standard_Boolean;
  SetContext(aCtx: any): void;
  TypeOfSensitivity(): Select3D_TypeOfSensitivity;
  SetTypeOfSensitivity(theTypeOfSensitivity: Select3D_TypeOfSensitivity): void;
  ComputeSelection(theSelection: any, theMode: Standard_Integer): void;
  SetColor(aColor: Quantity_Color): void;
  UnsetColor(): void;
}

  export declare class AIS_Plane_1 extends AIS_Plane {
    constructor(aComponent: any, aCurrentMode: Standard_Boolean);
  }

  export declare class AIS_Plane_2 extends AIS_Plane {
    constructor(aComponent: any, aCenter: gp_Pnt, aCurrentMode: Standard_Boolean);
  }

  export declare class AIS_Plane_3 extends AIS_Plane {
    constructor(aComponent: any, aCenter: gp_Pnt, aPmin: gp_Pnt, aPmax: gp_Pnt, aCurrentMode: Standard_Boolean);
  }

  export declare class AIS_Plane_4 extends AIS_Plane {
    constructor(aComponent: any, aPlaneType: AIS_TypeOfPlane, aCurrentMode: Standard_Boolean);
  }

export declare class AIS_PlaneTrihedron extends AIS_InteractiveObject {
  constructor(aPlane: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Component(): any;
  SetComponent(aPlane: any): void;
  XAxis(): any;
  YAxis(): any;
  Position(): any;
  SetLength(theLength: Standard_Real): void;
  GetLength(): Standard_Real;
  AcceptDisplayMode(aMode: Standard_Integer): Standard_Boolean;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  SetColor(theColor: Quantity_Color): void;
  SetXLabel(theLabel: TCollection_AsciiString): void;
  SetYLabel(theLabel: TCollection_AsciiString): void;
}

export declare class AIS_Point extends AIS_InteractiveObject {
  constructor(aComponent: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  Component(): any;
  SetComponent(aComponent: any): void;
  AcceptDisplayMode(aMode: Standard_Integer): Standard_Boolean;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  SetMarker(aType: Aspect_TypeOfMarker): void;
  UnsetMarker(): void;
  HasMarker(): Standard_Boolean;
  Vertex(): TopoDS_Vertex;
}

export declare class AIS_PointCloud extends AIS_InteractiveObject {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetPoints_1(thePoints: any): void;
  SetPoints_2(theCoords: any, theColors: any, theNormals: any): void;
  GetPoints(): any;
  GetBoundingBox(): Bnd_Box;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  SetMaterial(theMat: Graphic3d_MaterialAspect): void;
  UnsetMaterial(): void;
}

export declare class AIS_PointCloudOwner extends SelectMgr_EntityOwner {
  constructor(theOrigin: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SelectedPoints(): any;
  DetectedPoints(): any;
  IsForcedHilight(): Standard_Boolean;
  HilightWithColor(thePrsMgr: any, theStyle: any, theMode: Standard_Integer): void;
  Unhilight(thePrsMgr: any, theMode: Standard_Integer): void;
  Clear(thePrsMgr: any, theMode: Standard_Integer): void;
}

export declare class PrsDim_RadiusDimension {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Circle(): gp_Circ;
  AnchorPoint(): gp_Pnt;
  Shape(): TopoDS_Shape;
  SetMeasuredGeometry_1(theCircle: gp_Circ): void;
  SetMeasuredGeometry_2(theCircle: gp_Circ, theAnchorPoint: gp_Pnt, theHasAnchor: Standard_Boolean): void;
  SetMeasuredGeometry_3(theShape: TopoDS_Shape): void;
  SetMeasuredGeometry_4(theShape: TopoDS_Shape, theAnchorPoint: gp_Pnt, theHasAnchor: Standard_Boolean): void;
  GetDisplayUnits(): TCollection_AsciiString;
  GetModelUnits(): TCollection_AsciiString;
  SetDisplayUnits(theUnits: TCollection_AsciiString): void;
  SetModelUnits(theUnits: TCollection_AsciiString): void;
  SetTextPosition(theTextPos: gp_Pnt): void;
  GetTextPosition(): gp_Pnt;
}

  export declare class PrsDim_RadiusDimension_1 extends PrsDim_RadiusDimension {
    constructor(theCircle: gp_Circ);
  }

  export declare class PrsDim_RadiusDimension_2 extends PrsDim_RadiusDimension {
    constructor(theCircle: gp_Circ, theAnchorPoint: gp_Pnt);
  }

  export declare class PrsDim_RadiusDimension_3 extends PrsDim_RadiusDimension {
    constructor(theShape: TopoDS_Shape);
  }

export declare class AIS_RubberBand extends AIS_InteractiveObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetRectangle(theMinX: Standard_Integer, theMinY: Standard_Integer, theMaxX: Standard_Integer, theMaxY: Standard_Integer): void;
  AddPoint(thePoint: Graphic3d_Vec2i): void;
  RemoveLastPoint(): void;
  Points(): NCollection_Sequence<Graphic3d_Vec2i>;
  ClearPoints(): void;
  LineColor(): Quantity_Color;
  SetLineColor(theColor: Quantity_Color): void;
  FillColor(): Quantity_Color;
  SetFillColor(theColor: Quantity_Color): void;
  SetLineWidth(theWidth: Standard_Real): void;
  LineWidth(): Standard_Real;
  SetLineType(theType: Aspect_TypeOfLine): void;
  LineType(): Aspect_TypeOfLine;
  SetFillTransparency(theValue: Standard_Real): void;
  FillTransparency(): Standard_Real;
  SetFilling_1(theIsFilling: Standard_Boolean): void;
  SetFilling_2(theColor: Quantity_Color, theTransparency: Standard_Real): void;
  IsFilling(): Standard_Boolean;
  IsPolygonClosed(): Standard_Boolean;
  SetPolygonClosed(theIsPolygonClosed: Standard_Boolean): void;
}

  export declare class AIS_RubberBand_1 extends AIS_RubberBand {
    constructor();
  }

  export declare class AIS_RubberBand_2 extends AIS_RubberBand {
    constructor(theLineColor: Quantity_Color, theType: Aspect_TypeOfLine, theLineWidth: Standard_Real, theIsPolygonClosed: Standard_Boolean);
  }

  export declare class AIS_RubberBand_3 extends AIS_RubberBand {
    constructor(theLineColor: Quantity_Color, theType: Aspect_TypeOfLine, theFillColor: Quantity_Color, theTransparency: Standard_Real, theLineWidth: Standard_Real, theIsPolygonClosed: Standard_Boolean);
  }

export declare class AIS_TypeFilter extends SelectMgr_Filter {
  constructor(aGivenKind: AIS_KindOfInteractive)
  IsOk(anobj: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_SignatureFilter extends AIS_TypeFilter {
  constructor(aGivenKind: AIS_KindOfInteractive, aGivenSignature: Standard_Integer)
  IsOk(anobj: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class PrsDim_SymmetricRelation extends PrsDim_Relation {
  constructor(aSymmTool: TopoDS_Shape, FirstShape: TopoDS_Shape, SecondShape: TopoDS_Shape, aPlane: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsMovable(): Standard_Boolean;
  SetTool(aSymmetricTool: TopoDS_Shape): void;
  GetTool(): TopoDS_Shape;
}

export declare class PrsDim_TangentRelation extends PrsDim_Relation {
  constructor(aFShape: TopoDS_Shape, aSShape: TopoDS_Shape, aPlane: any, anExternRef: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ExternRef(): Standard_Integer;
  SetExternRef(aRef: Standard_Integer): void;
}

export declare class AIS_TextLabel extends AIS_InteractiveObject {
  constructor()
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  SetColor(theColor: Quantity_Color): void;
  SetTransparency(theValue: Standard_Real): void;
  UnsetTransparency(): void;
  SetMaterial(a0: Graphic3d_MaterialAspect): void;
  SetText(theText: TCollection_ExtendedString): void;
  SetPosition(thePosition: gp_Pnt): void;
  SetHJustification(theHJust: Graphic3d_HorizontalTextAlignment): void;
  SetVJustification(theVJust: Graphic3d_VerticalTextAlignment): void;
  SetAngle(theAngle: Standard_Real): void;
  SetZoomable(theIsZoomable: Standard_Boolean): void;
  SetHeight(theHeight: Standard_Real): void;
  SetFontAspect(theFontAspect: Font_FontAspect): void;
  SetFont(theFont: Standard_CString): void;
  SetOrientation3D(theOrientation: gp_Ax2): void;
  UnsetOrientation3D(): void;
  Position(): gp_Pnt;
  Text(): TCollection_ExtendedString;
  FontName(): TCollection_AsciiString;
  FontAspect(): Font_FontAspect;
  Orientation3D(): gp_Ax2;
  HasOrientation3D(): Standard_Boolean;
  SetFlipping(theIsFlipping: Standard_Boolean): void;
  HasFlipping(): Standard_Boolean;
  HasOwnAnchorPoint(): Standard_Boolean;
  SetOwnAnchorPoint(theOwnAnchorPoint: Standard_Boolean): void;
  SetDisplayType(theDisplayType: Aspect_TypeOfDisplayText): void;
  SetColorSubTitle(theColor: Quantity_Color): void;
  TextFormatter(): any;
  SetTextFormatter(theFormatter: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_TexturedShape extends AIS_Shape {
  constructor(theShape: TopoDS_Shape)
  SetTextureFileName(theTextureFileName: TCollection_AsciiString): void;
  SetTexturePixMap(theTexturePixMap: any): void;
  TextureMapState(): Standard_Boolean;
  SetTextureMapOn(): void;
  SetTextureMapOff(): void;
  TextureFile(): Standard_CString;
  TexturePixMap(): any;
  UpdateAttributes(): void;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  SetMaterial(theAspect: Graphic3d_MaterialAspect): void;
  UnsetMaterial(): void;
  EnableTextureModulate(): void;
  DisableTextureModulate(): void;
  TextureRepeat(): Standard_Boolean;
  URepeat(): Standard_Real;
  VRepeat(): Standard_Real;
  SetTextureRepeat(theToRepeat: Standard_Boolean, theURepeat: Standard_Real, theVRepeat: Standard_Real): void;
  TextureOrigin(): Standard_Boolean;
  TextureUOrigin(): Standard_Real;
  TextureVOrigin(): Standard_Real;
  SetTextureOrigin(theToSetTextureOrigin: Standard_Boolean, theUOrigin: Standard_Real, theVOrigin: Standard_Real): void;
  TextureScale(): Standard_Boolean;
  TextureScaleU(): Standard_Real;
  TextureScaleV(): Standard_Real;
  SetTextureScale(theToSetTextureScale: Standard_Boolean, theScaleU: Standard_Real, theScaleV: Standard_Real): void;
  ShowTriangles_1(): Standard_Boolean;
  ShowTriangles_2(theToShowTriangles: Standard_Boolean): void;
  TextureModulate(): Standard_Boolean;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AIS_Triangulation extends AIS_InteractiveObject {
  constructor(aTriangulation: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColors(aColor: any): void;
  GetColors(): any;
  HasVertexColors(): Standard_Boolean;
  SetTriangulation(aTriangulation: any): void;
  GetTriangulation(): any;
  SetTransparency(aValue: Standard_Real): void;
  UnsetTransparency(): void;
}

export declare class Prs3d_PointAspect extends Prs3d_BasicAspect {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColor(theColor: Quantity_Color): void;
  SetTypeOfMarker(theType: Aspect_TypeOfMarker): void;
  SetScale(theScale: Standard_Real): void;
  Aspect(): any;
  SetAspect(theAspect: any): void;
  GetTextureSize(theWidth: Standard_Integer, theHeight: Standard_Integer): void;
  GetTexture(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Prs3d_PointAspect_1 extends Prs3d_PointAspect {
    constructor(theType: Aspect_TypeOfMarker, theColor: Quantity_Color, theScale: Standard_Real);
  }

  export declare class Prs3d_PointAspect_2 extends Prs3d_PointAspect {
    constructor(theColor: Quantity_Color, theWidth: Standard_Integer, theHeight: Standard_Integer, theTexture: any);
  }

  export declare class Prs3d_PointAspect_3 extends Prs3d_PointAspect {
    constructor(theAspect: any);
  }

export declare class Prs3d_DatumAspect extends Prs3d_BasicAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  LineAspect(thePart: Prs3d_DatumParts): any;
  ShadingAspect(thePart: Prs3d_DatumParts): any;
  TextAspect(): any;
  SetTextAspect(theTextAspect: any): void;
  PointAspect(): any;
  SetPointAspect(theAspect: any): void;
  ArrowAspect(): any;
  SetArrowAspect(theAspect: any): void;
  FirstAxisAspect(): any;
  SecondAxisAspect(): any;
  ThirdAxisAspect(): any;
  SetDrawFirstAndSecondAxis(theToDraw: Standard_Boolean): void;
  DrawFirstAndSecondAxis(): Standard_Boolean;
  SetDrawThirdAxis(theToDraw: Standard_Boolean): void;
  DrawThirdAxis(): Standard_Boolean;
  DrawDatumPart(thePart: Prs3d_DatumParts): Standard_Boolean;
  SetDrawDatumAxes(theType: Prs3d_DatumAxes): void;
  DatumAxes(): Prs3d_DatumAxes;
  SetAttribute(theType: Prs3d_DatumAttribute, theValue: Standard_Real): void;
  Attribute(theType: Prs3d_DatumAttribute): Standard_Real;
  SetAxisLength(theL1: Standard_Real, theL2: Standard_Real, theL3: Standard_Real): void;
  AxisLength(thePart: Prs3d_DatumParts): Standard_Real;
  FirstAxisLength(): Standard_Real;
  SecondAxisLength(): Standard_Real;
  ThirdAxisLength(): Standard_Real;
  ToDrawLabels(): Standard_Boolean;
  SetDrawLabels(theToDraw: Standard_Boolean): void;
  SetToDrawLabels(theToDraw: Standard_Boolean): void;
  ToDrawArrows(): Standard_Boolean;
  SetDrawArrows(theToDraw: Standard_Boolean): void;
  ArrowPartForAxis(thePart: Prs3d_DatumParts): Prs3d_DatumParts;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class AIS_Trihedron extends AIS_InteractiveObject {
  constructor(theComponent: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetDatumDisplayMode(theMode: Prs3d_DatumMode): void;
  DatumDisplayMode(): Prs3d_DatumMode;
  Component(): any;
  SetComponent(theComponent: any): void;
  HasOwnSize(): Standard_Boolean;
  SetSize(theValue: Standard_Real): void;
  UnsetSize(): void;
  Size(): Standard_Real;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  Signature(): Standard_Integer;
  Type(): AIS_KindOfInteractive;
  SetColor(theColor: Quantity_Color): void;
  SetTextColor(theColor: Quantity_Color): void;
  HasTextColor(): Standard_Boolean;
  TextColor(): Quantity_Color;
  SetArrowColor(theColor: Quantity_Color): void;
  HasArrowColor(): Standard_Boolean;
  ArrowColor(): Quantity_Color;
  UnsetColor(): void;
  SetDatumPartColor(thePart: Prs3d_DatumParts, theColor: Quantity_Color): void;
  DatumPartColor(thePart: Prs3d_DatumParts): Quantity_Color;
  SetOriginColor(theColor: Quantity_Color): void;
  SetXAxisColor(theColor: Quantity_Color): void;
  SetYAxisColor(theColor: Quantity_Color): void;
  SetAxisColor(theColor: Quantity_Color): void;
  ToDrawArrows(): Standard_Boolean;
  SetDrawArrows(theToDraw: Standard_Boolean): void;
  SetSelectionPriority(thePart: Prs3d_DatumParts, thePriority: Standard_Integer): void;
  SelectionPriority(thePart: Prs3d_DatumParts): Standard_Integer;
  SetLabel(thePart: Prs3d_DatumParts, thePriority: TCollection_ExtendedString): void;
  Label(thePart: Prs3d_DatumParts): TCollection_ExtendedString;
  ClearSelected(): void;
  HilightSelected(thePM: any, theOwners: SelectMgr_SequenceOfOwner): void;
  HilightOwnerWithColor(thePM: any, theStyle: any, theOwner: any): void;
}

export declare class AIS_TrihedronOwner extends SelectMgr_EntityOwner {
  constructor(theSelObject: any, theDatumPart: Prs3d_DatumParts, thePriority: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  DatumPart(): Prs3d_DatumParts;
  HilightWithColor(thePM: any, theStyle: any, theMode: Standard_Integer): void;
  IsHilighted(thePM: any, theMode: Standard_Integer): Standard_Boolean;
  Unhilight(thePM: any, theMode: Standard_Integer): void;
}

export declare class AIS_ViewInputBuffer {
  constructor()
  Reset(): void;
}

export declare class AIS_ViewController {
  constructor()
  InputBuffer(theType: AIS_ViewInputBufferType): AIS_ViewInputBuffer;
  ChangeInputBuffer(theType: AIS_ViewInputBufferType): AIS_ViewInputBuffer;
  ViewAnimation(): any;
  SetViewAnimation(theAnimation: any): void;
  AbortViewAnimation(): void;
  RotationMode(): AIS_RotationMode;
  SetRotationMode(theMode: AIS_RotationMode): void;
  NavigationMode(): AIS_NavigationMode;
  SetNavigationMode(theMode: AIS_NavigationMode): void;
  MouseAcceleration(): number;
  SetMouseAcceleration(theRatio: number): void;
  OrbitAcceleration(): number;
  SetOrbitAcceleration(theRatio: number): void;
  ToShowPanAnchorPoint(): boolean;
  SetShowPanAnchorPoint(theToShow: boolean): void;
  ToShowRotateCenter(): boolean;
  SetShowRotateCenter(theToShow: boolean): void;
  ToLockOrbitZUp(): boolean;
  SetLockOrbitZUp(theToForceUp: boolean): void;
  ToAllowTouchZRotation(): boolean;
  SetAllowTouchZRotation(theToEnable: boolean): void;
  ToAllowRotation(): boolean;
  SetAllowRotation(theToEnable: boolean): void;
  ToAllowPanning(): boolean;
  SetAllowPanning(theToEnable: boolean): void;
  ToAllowZooming(): boolean;
  SetAllowZooming(theToEnable: boolean): void;
  ToAllowZFocus(): boolean;
  SetAllowZFocus(theToEnable: boolean): void;
  ToAllowHighlight(): boolean;
  SetAllowHighlight(theToEnable: boolean): void;
  ToAllowDragging(): boolean;
  SetAllowDragging(theToEnable: boolean): void;
  ToStickToRayOnZoom(): boolean;
  SetStickToRayOnZoom(theToEnable: boolean): void;
  ToStickToRayOnRotation(): boolean;
  SetStickToRayOnRotation(theToEnable: boolean): void;
  ToInvertPitch(): boolean;
  SetInvertPitch(theToInvert: boolean): void;
  WalkSpeedAbsolute(): number;
  SetWalkSpeedAbsolute(theSpeed: number): void;
  WalkSpeedRelative(): number;
  SetWalkSpeedRelative(theFactor: number): void;
  ThrustSpeed(): number;
  SetThrustSpeed(theSpeed: number): void;
  HasPreviousMoveTo(): boolean;
  PreviousMoveTo(): Graphic3d_Vec2i;
  ResetPreviousMoveTo(): void;
  ToDisplayXRAuxDevices(): boolean;
  SetDisplayXRAuxDevices(theToDisplay: boolean): void;
  ToDisplayXRHands(): boolean;
  SetDisplayXRHands(theToDisplay: boolean): void;
  KeyDown(theKey: Aspect_VKey, theTime: number, thePressure: number): void;
  KeyUp(theKey: Aspect_VKey, theTime: number): void;
  KeyFromAxis(theNegative: Aspect_VKey, thePositive: Aspect_VKey, theTime: number, thePressure: number): void;
  FetchNavigationKeys(theCrouchRatio: Standard_Real, theRunRatio: Standard_Real): AIS_WalkDelta;
  MouseGestureMap(): AIS_MouseGestureMap;
  ChangeMouseGestureMap(): AIS_MouseGestureMap;
  MouseDoubleClickInterval(): number;
  SetMouseDoubleClickInterval(theSeconds: number): void;
  SelectInViewer_1(thePnt: Graphic3d_Vec2i, theIsXOR: boolean): void;
  SelectInViewer_2(thePnts: NCollection_Sequence<Graphic3d_Vec2i>, theIsXOR: boolean): void;
  UpdateRubberBand(thePntFrom: Graphic3d_Vec2i, thePntTo: Graphic3d_Vec2i, theIsXOR: boolean): void;
  UpdatePolySelection(thePnt: Graphic3d_Vec2i, theToAppend: boolean): void;
  UpdateZoom(theDelta: Aspect_ScrollDelta): boolean;
  UpdateZRotation(theAngle: number): boolean;
  UpdateMouseScroll(theDelta: Aspect_ScrollDelta): boolean;
  UpdateMouseButtons(thePoint: Graphic3d_Vec2i, theButtons: Aspect_VKeyMouse, theModifiers: Aspect_VKeyFlags, theIsEmulated: boolean): boolean;
  UpdateMousePosition(thePoint: Graphic3d_Vec2i, theButtons: Aspect_VKeyMouse, theModifiers: Aspect_VKeyFlags, theIsEmulated: boolean): boolean;
  PressMouseButton(thePoint: Graphic3d_Vec2i, theButton: Aspect_VKeyMouse, theModifiers: Aspect_VKeyFlags, theIsEmulated: boolean): boolean;
  ReleaseMouseButton(thePoint: Graphic3d_Vec2i, theButton: Aspect_VKeyMouse, theModifiers: Aspect_VKeyFlags, theIsEmulated: boolean): boolean;
  UpdateMouseClick(thePoint: Graphic3d_Vec2i, theButton: Aspect_VKeyMouse, theModifiers: Aspect_VKeyFlags, theIsDoubleClick: boolean): boolean;
  PressedMouseButtons(): Aspect_VKeyMouse;
  LastMouseFlags(): Aspect_VKeyFlags;
  LastMousePosition(): Graphic3d_Vec2i;
  TouchToleranceScale(): number;
  SetTouchToleranceScale(theTolerance: number): void;
  HasTouchPoints(): boolean;
  AddTouchPoint(theId: Standard_Size, thePnt: Graphic3d_Vec2d, theClearBefore: Standard_Boolean): void;
  RemoveTouchPoint(theId: Standard_Size, theClearSelectPnts: Standard_Boolean): boolean;
  UpdateTouchPoint(theId: Standard_Size, thePnt: Graphic3d_Vec2d): void;
  Get3dMouseTranslationScale(): number;
  Set3dMouseTranslationScale(theScale: number): void;
  Get3dMouseRotationScale(): number;
  Set3dMouseRotationScale(theScale: number): void;
  To3dMousePreciseInput(): boolean;
  Set3dMousePreciseInput(theIsQuadric: boolean): void;
  Get3dMouseIsNoRotate(): NCollection_Vec3<bool>;
  Change3dMouseIsNoRotate(): NCollection_Vec3<bool>;
  Get3dMouseToReverse(): NCollection_Vec3<bool>;
  Change3dMouseToReverse(): NCollection_Vec3<bool>;
  Update3dMouse(theEvent: WNT_HIDSpaceMouse): boolean;
  update3dMouseTranslation(theEvent: WNT_HIDSpaceMouse): boolean;
  update3dMouseRotation(theEvent: WNT_HIDSpaceMouse): boolean;
  update3dMouseKeys(theEvent: WNT_HIDSpaceMouse): boolean;
  EventTime(): number;
  ResetViewInput(): void;
  UpdateViewOrientation(theOrientation: V3d_TypeOfOrientation, theToFitAll: boolean): void;
  FlushViewEvents(theCtx: any, theView: any, theToHandle: Standard_Boolean): void;
  HandleViewEvents(theCtx: any, theView: any): void;
  OnSelectionChanged(theCtx: any, theView: any): void;
  OnObjectDragged(theCtx: any, theView: any, theAction: AIS_DragAction): void;
  PickPoint(thePnt: gp_Pnt, theCtx: any, theView: any, theCursor: Graphic3d_Vec2i, theToStickToPickRay: boolean): boolean;
  GravityPoint(theCtx: any, theView: any): gp_Pnt;
  FitAllAuto(theCtx: any, theView: any): void;
  handleViewOrientationKeys(theCtx: any, theView: any): void;
  handleNavigationKeys(theCtx: any, theView: any): AIS_WalkDelta;
  handleCameraActions(theCtx: any, theView: any, theWalk: AIS_WalkDelta): void;
  handleMoveTo(theCtx: any, theView: any): void;
  toAskNextFrame(): boolean;
  setAskNextFrame(theToDraw: boolean): void;
  hasPanningAnchorPoint(): boolean;
  panningAnchorPoint(): gp_Pnt;
  setPanningAnchorPoint(thePnt: gp_Pnt): void;
  handlePanning(theView: any): void;
  handleZRotate(theView: any): void;
  MinZoomDistance(): number;
  SetMinZoomDistance(theDist: number): void;
  handleZoom(theView: any, theParams: Aspect_ScrollDelta, thePnt: gp_Pnt): void;
  handleZFocusScroll(theView: any, theParams: Aspect_ScrollDelta): void;
  handleOrbitRotation(theView: any, thePnt: gp_Pnt, theToLockZUp: boolean): void;
  handleViewRotation(theView: any, theYawExtra: number, thePitchExtra: number, theRoll: number, theToRestartOnIncrement: boolean): void;
  handleViewRedraw(theCtx: any, theView: any): void;
  handleXRInput(theCtx: any, theView: any, theWalk: AIS_WalkDelta): void;
  handleXRTurnPad(theCtx: any, theView: any): void;
  handleXRTeleport(theCtx: any, theView: any): void;
  handleXRPicking(theCtx: any, theView: any): void;
  handleXRHighlight(theCtx: any, theView: any): void;
  handleXRPresentations(theCtx: any, theView: any): void;
  handleXRMoveTo(theCtx: any, theView: any, thePose: gp_Trsf, theToHighlight: Standard_Boolean): Standard_Integer;
}

export declare class AIS_ViewCube extends AIS_InteractiveObject {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsBoxSide(theOrient: V3d_TypeOfOrientation): boolean;
  IsBoxEdge(theOrient: V3d_TypeOfOrientation): boolean;
  IsBoxCorner(theOrient: V3d_TypeOfOrientation): boolean;
  ViewAnimation(): any;
  SetViewAnimation(theAnimation: any): void;
  ToAutoStartAnimation(): Standard_Boolean;
  SetAutoStartAnimation(theToEnable: boolean): void;
  IsFixedAnimationLoop(): Standard_Boolean;
  SetFixedAnimationLoop(theToEnable: boolean): void;
  ResetStyles(): void;
  Size(): Standard_Real;
  SetSize(theValue: Standard_Real, theToAdaptAnother: Standard_Boolean): void;
  BoxFacetExtension(): Standard_Real;
  SetBoxFacetExtension(theValue: Standard_Real): void;
  AxesPadding(): Standard_Real;
  SetAxesPadding(theValue: Standard_Real): void;
  BoxEdgeGap(): Standard_Real;
  SetBoxEdgeGap(theValue: Standard_Real): void;
  BoxEdgeMinSize(): Standard_Real;
  SetBoxEdgeMinSize(theValue: Standard_Real): void;
  BoxCornerMinSize(): Standard_Real;
  SetBoxCornerMinSize(theValue: Standard_Real): void;
  RoundRadius(): Standard_Real;
  SetRoundRadius(theValue: Standard_Real): void;
  AxesRadius(): Standard_Real;
  SetAxesRadius(theRadius: Standard_Real): void;
  AxesConeRadius(): Standard_Real;
  SetAxesConeRadius(theRadius: Standard_Real): void;
  AxesSphereRadius(): Standard_Real;
  SetAxesSphereRadius(theRadius: Standard_Real): void;
  ToDrawAxes(): Standard_Boolean;
  SetDrawAxes(theValue: Standard_Boolean): void;
  ToDrawEdges(): Standard_Boolean;
  SetDrawEdges(theValue: Standard_Boolean): void;
  ToDrawVertices(): Standard_Boolean;
  SetDrawVertices(theValue: Standard_Boolean): void;
  IsYup(): Standard_Boolean;
  SetYup(theIsYup: Standard_Boolean, theToUpdateLabels: Standard_Boolean): void;
  BoxSideStyle(): any;
  BoxEdgeStyle(): any;
  BoxCornerStyle(): any;
  BoxColor(): Quantity_Color;
  SetBoxColor(theColor: Quantity_Color): void;
  BoxTransparency(): Standard_Real;
  SetBoxTransparency(theValue: Standard_Real): void;
  InnerColor(): Quantity_Color;
  SetInnerColor(theColor: Quantity_Color): void;
  BoxSideLabel(theSide: V3d_TypeOfOrientation): TCollection_AsciiString;
  SetBoxSideLabel(theSide: V3d_TypeOfOrientation, theLabel: TCollection_AsciiString): void;
  TextColor(): Quantity_Color;
  SetTextColor(theColor: Quantity_Color): void;
  Font(): TCollection_AsciiString;
  SetFont(theFont: TCollection_AsciiString): void;
  FontHeight(): Standard_Real;
  SetFontHeight(theValue: Standard_Real): void;
  AxisLabel(theAxis: Prs3d_DatumParts): TCollection_AsciiString;
  SetAxesLabels(theX: TCollection_AsciiString, theY: TCollection_AsciiString, theZ: TCollection_AsciiString): void;
  SetColor(theColor: Quantity_Color): void;
  UnsetColor(): void;
  SetTransparency(theValue: Standard_Real): void;
  UnsetTransparency(): void;
  SetMaterial(theMat: Graphic3d_MaterialAspect): void;
  UnsetMaterial(): void;
  Duration(): Standard_Real;
  SetDuration(theValue: Standard_Real): void;
  ToResetCameraUp(): Standard_Boolean;
  SetResetCamera(theToReset: Standard_Boolean): void;
  ToFitSelected(): Standard_Boolean;
  SetFitSelected(theToFitSelected: Standard_Boolean): void;
  HasAnimation(): Standard_Boolean;
  StartAnimation(theOwner: any): void;
  UpdateAnimation(theToUpdate: Standard_Boolean): Standard_Boolean;
  HandleClick(theOwner: any): void;
  AcceptDisplayMode(theMode: Standard_Integer): Standard_Boolean;
  GlobalSelOwner(): any;
  Compute(thePrsMgr: any, thePrs: any, theMode: Standard_Integer): void;
  ComputeSelection(theSelection: any, theMode: Standard_Integer): void;
  IsAutoHilight(): Standard_Boolean;
  ClearSelected(): void;
  HilightOwnerWithColor(thePM: any, theStyle: any, theOwner: any): void;
  HilightSelected(thePM: any, theSeq: SelectMgr_SequenceOfOwner): void;
  UnsetAttributes(): void;
  UnsetHilightAttributes(): void;
}

export declare class AIS_ViewCubeOwner extends SelectMgr_EntityOwner {
  constructor(theObject: any, theOrient: V3d_TypeOfOrientation, thePriority: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsForcedHilight(): Standard_Boolean;
  MainOrientation(): V3d_TypeOfOrientation;
  HandleMouseClick(thePoint: Graphic3d_Vec2i, theButton: Aspect_VKeyMouse, theModifiers: Aspect_VKeyFlags, theIsDoubleClick: boolean): Standard_Boolean;
}

export declare class AIS_XRTrackedDevice extends AIS_InteractiveObject {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Role(): Aspect_XRTrackedDeviceRole;
  SetRole(theRole: Aspect_XRTrackedDeviceRole): void;
  LaserColor(): Quantity_Color;
  SetLaserColor(theColor: Quantity_Color): void;
  LaserLength(): Standard_ShortReal;
  SetLaserLength(theLength: Standard_ShortReal): void;
  UnitFactor(): Standard_ShortReal;
  SetUnitFactor(theFactor: Standard_ShortReal): void;
}

  export declare class AIS_XRTrackedDevice_1 extends AIS_XRTrackedDevice {
    constructor(theTris: any, theTexture: any);
  }

  export declare class AIS_XRTrackedDevice_2 extends AIS_XRTrackedDevice {
    constructor();
  }

export declare class DsgPrs {
  constructor();
  ComputeSymbol(aPresentation: any, anAspect: any, pt1: gp_Pnt, pt2: gp_Pnt, dir1: gp_Dir, dir2: gp_Dir, ArrowSide: DsgPrs_ArrowSide, drawFromCenter: Standard_Boolean): void;
  ComputePlanarFacesLengthPresentation(FirstArrowLength: Standard_Real, SecondArrowLength: Standard_Real, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, DirAttach: gp_Dir, OffsetPoint: gp_Pnt, PlaneOfFaces: gp_Pln, EndOfArrow1: gp_Pnt, EndOfArrow2: gp_Pnt, DirOfArrow1: gp_Dir): void;
  ComputeCurvilinearFacesLengthPresentation(FirstArrowLength: Standard_Real, SecondArrowLength: Standard_Real, SecondSurf: any, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, DirAttach: gp_Dir, EndOfArrow2: gp_Pnt, DirOfArrow1: gp_Dir, VCurve: any, UCurve: any, FirstU: Standard_Real, deltaU: Standard_Real, FirstV: Standard_Real, deltaV: Standard_Real): void;
  ComputeFacesAnglePresentation(ArrowLength: Standard_Real, Value: Standard_Real, CenterPoint: gp_Pnt, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, dir1: gp_Dir, dir2: gp_Dir, axisdir: gp_Dir, isPlane: Standard_Boolean, AxisOfSurf: gp_Ax1, OffsetPoint: gp_Pnt, AngleCirc: gp_Circ, FirstParAngleCirc: Standard_Real, LastParAngleCirc: Standard_Real, EndOfArrow1: gp_Pnt, EndOfArrow2: gp_Pnt, DirOfArrow1: gp_Dir, DirOfArrow2: gp_Dir, ProjAttachPoint2: gp_Pnt, AttachCirc: gp_Circ, FirstParAttachCirc: Standard_Real, LastParAttachCirc: Standard_Real): void;
  ComputeRadiusLine(aCenter: gp_Pnt, anEndOfArrow: gp_Pnt, aPosition: gp_Pnt, drawFromCenter: Standard_Boolean, aRadLineOrign: gp_Pnt, aRadLineEnd: gp_Pnt): void;
  ComputeFilletRadiusPresentation(ArrowLength: Standard_Real, Value: Standard_Real, Position: gp_Pnt, NormalDir: gp_Dir, FirstPoint: gp_Pnt, SecondPoint: gp_Pnt, Center: gp_Pnt, BasePnt: gp_Pnt, drawRevers: Standard_Boolean, SpecCase: Standard_Boolean, FilletCirc: gp_Circ, FirstParCirc: Standard_Real, LastParCirc: Standard_Real, EndOfArrow: gp_Pnt, DirOfArrow: gp_Dir, DrawPosition: gp_Pnt): void;
  DistanceFromApex(elips: gp_Elips, Apex: gp_Pnt, par: Standard_Real): Standard_Real;
}

export declare class DsgPrs_AnglePresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, aVal: Standard_Real, aText: TCollection_ExtendedString, aCircle: gp_Circ, aPosition: gp_Pnt, Apex: gp_Pnt, VminCircle: gp_Circ, VmaxCircle: gp_Circ, aArrowSize: Standard_Real): void;
  Add_2(aPresentation: any, aDrawer: any, theval: Standard_Real, CenterPoint: gp_Pnt, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, dir1: gp_Dir, dir2: gp_Dir, OffsetPoint: gp_Pnt): void;
  Add_3(aPresentation: any, aDrawer: any, theval: Standard_Real, thevalstring: TCollection_ExtendedString, CenterPoint: gp_Pnt, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, dir1: gp_Dir, dir2: gp_Dir, OffsetPoint: gp_Pnt): void;
  Add_4(aPresentation: any, aDrawer: any, theval: Standard_Real, thevalstring: TCollection_ExtendedString, CenterPoint: gp_Pnt, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, dir1: gp_Dir, dir2: gp_Dir, OffsetPoint: gp_Pnt, ArrowSide: DsgPrs_ArrowSide): void;
  Add_5(aPresentation: any, aDrawer: any, theval: Standard_Real, thevalstring: TCollection_ExtendedString, CenterPoint: gp_Pnt, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, dir1: gp_Dir, dir2: gp_Dir, axisdir: gp_Dir, OffsetPoint: gp_Pnt): void;
  Add_6(aPresentation: any, aDrawer: any, theval: Standard_Real, thevalstring: TCollection_ExtendedString, CenterPoint: gp_Pnt, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, dir1: gp_Dir, dir2: gp_Dir, axisdir: gp_Dir, isPlane: Standard_Boolean, AxisOfSurf: gp_Ax1, OffsetPoint: gp_Pnt, ArrowSide: DsgPrs_ArrowSide): void;
  Add_7(aPresentation: any, aDrawer: any, theval: Standard_Real, theCenter: gp_Pnt, AttachmentPoint1: gp_Pnt, theAxe: gp_Ax1, ArrowSide: DsgPrs_ArrowSide): void;
}

export declare class DsgPrs_Chamf2dPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, aPntAttach: gp_Pnt, aPntEnd: gp_Pnt, aText: TCollection_ExtendedString): void;
  Add_2(aPresentation: any, aDrawer: any, aPntAttach: gp_Pnt, aPntEnd: gp_Pnt, aText: TCollection_ExtendedString, ArrowSide: DsgPrs_ArrowSide): void;
}

export declare class DsgPrs_ConcentricPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, aCenter: gp_Pnt, aRadius: Standard_Real, aNorm: gp_Dir, aPoint: gp_Pnt): void;
}

export declare class Prs3d_Root {
  constructor();
  CurrentGroup(thePrs3d: any): any;
  NewGroup(thePrs3d: any): any;
}

export declare class DsgPrs_DatumPrs extends Prs3d_Root {
  constructor();
  Add(thePresentation: any, theDatum: gp_Ax2, theDrawer: any): void;
}

export declare class DsgPrs_DiameterPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint: gp_Pnt, aCircle: gp_Circ, ArrowSide: DsgPrs_ArrowSide, IsDiamSymbol: Standard_Boolean): void;
  Add_2(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint: gp_Pnt, aCircle: gp_Circ, uFirst: Standard_Real, uLast: Standard_Real, ArrowSide: DsgPrs_ArrowSide, IsDiamSymbol: Standard_Boolean): void;
}

export declare class DsgPrs_EllipseRadiusPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, theval: Standard_Real, aText: TCollection_ExtendedString, AttachmentPoint: gp_Pnt, anEndOfArrow: gp_Pnt, aCenter: gp_Pnt, IsMaxRadius: Standard_Boolean, ArrowSide: DsgPrs_ArrowSide): void;
  Add_2(aPresentation: any, aDrawer: any, theval: Standard_Real, aText: TCollection_ExtendedString, anEllipse: gp_Elips, AttachmentPoint: gp_Pnt, anEndOfArrow: gp_Pnt, aCenter: gp_Pnt, uFirst: Standard_Real, IsInDomain: Standard_Boolean, IsMaxRadius: Standard_Boolean, ArrowSide: DsgPrs_ArrowSide): void;
  Add_3(aPresentation: any, aDrawer: any, theval: Standard_Real, aText: TCollection_ExtendedString, aCurve: any, AttachmentPoint: gp_Pnt, anEndOfArrow: gp_Pnt, aCenter: gp_Pnt, uFirst: Standard_Real, IsInDomain: Standard_Boolean, IsMaxRadius: Standard_Boolean, ArrowSide: DsgPrs_ArrowSide): void;
}

export declare class DsgPrs_EqualDistancePresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, Point1: gp_Pnt, Point2: gp_Pnt, Point3: gp_Pnt, Point4: gp_Pnt, Plane: any): void;
  AddInterval(aPresentation: any, aDrawer: any, aPoint1: gp_Pnt, aPoint2: gp_Pnt, aDir: gp_Dir, aPosition: gp_Pnt, anArrowSide: DsgPrs_ArrowSide, anExtremePnt1: gp_Pnt, anExtremePnt2: gp_Pnt): void;
  AddIntervalBetweenTwoArcs(aPresentation: any, aDrawer: any, aCircle1: gp_Circ, aCircle2: gp_Circ, aPoint1: gp_Pnt, aPoint2: gp_Pnt, aPoint3: gp_Pnt, aPoint4: gp_Pnt, anArrowSide: DsgPrs_ArrowSide): void;
}

export declare class DsgPrs_EqualRadiusPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, FirstCenter: gp_Pnt, SecondCenter: gp_Pnt, FirstPoint: gp_Pnt, SecondPoint: gp_Pnt, Plane: any): void;
}

export declare class DsgPrs_FilletRadiusPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, thevalue: Standard_Real, aText: TCollection_ExtendedString, aPosition: gp_Pnt, aNormalDir: gp_Dir, aBasePnt: gp_Pnt, aFirstPoint: gp_Pnt, aSecondPoint: gp_Pnt, aCenter: gp_Pnt, ArrowPrs: DsgPrs_ArrowSide, drawRevers: Standard_Boolean, DrawPosition: gp_Pnt, EndOfArrow: gp_Pnt, TrimCurve: any, HasCircle: Standard_Boolean): void;
}

export declare class DsgPrs_FixPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, aPntAttach: gp_Pnt, aPntEnd: gp_Pnt, aNormPln: gp_Dir, aSymbSize: Standard_Real): void;
}

export declare class DsgPrs_IdenticPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, aPntAttach: gp_Pnt, aPntOffset: gp_Pnt): void;
  Add_2(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, aFAttach: gp_Pnt, aSAttach: gp_Pnt, aPntOffset: gp_Pnt): void;
  Add_3(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, aAx2: gp_Ax2, aCenter: gp_Pnt, aFAttach: gp_Pnt, aSAttach: gp_Pnt, aPntOffset: gp_Pnt): void;
  Add_4(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, aAx2: gp_Ax2, aCenter: gp_Pnt, aFAttach: gp_Pnt, aSAttach: gp_Pnt, aPntOffset: gp_Pnt, aPntOnCirc: gp_Pnt): void;
  Add_5(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, anEllipse: gp_Elips, aFAttach: gp_Pnt, aSAttach: gp_Pnt, aPntOffset: gp_Pnt, aPntOnElli: gp_Pnt): void;
}

export declare class DsgPrs_LengthPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection: gp_Dir, OffsetPoint: gp_Pnt): void;
  Add_2(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection: gp_Dir, OffsetPoint: gp_Pnt, ArrowSide: DsgPrs_ArrowSide): void;
  Add_3(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, PlaneOfFaces: gp_Pln, aDirection: gp_Dir, OffsetPoint: gp_Pnt, ArrowSide: DsgPrs_ArrowSide): void;
  Add_4(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, SecondSurf: any, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection: gp_Dir, OffsetPoint: gp_Pnt, ArrowSide: DsgPrs_ArrowSide): void;
  Add_5(aPresentation: any, aDrawer: any, Pt1: gp_Pnt, Pt2: gp_Pnt, ArrowSide: DsgPrs_ArrowSide): void;
}

export declare class DsgPrs_MidPointPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, theAxe: gp_Ax2, MidPoint: gp_Pnt, Position: gp_Pnt, AttachPoint: gp_Pnt, first: Standard_Boolean): void;
  Add_2(aPresentation: any, aDrawer: any, theAxe: gp_Ax2, MidPoint: gp_Pnt, Position: gp_Pnt, AttachPoint: gp_Pnt, Point1: gp_Pnt, Point2: gp_Pnt, first: Standard_Boolean): void;
  Add_3(aPresentation: any, aDrawer: any, aCircle: gp_Circ, MidPoint: gp_Pnt, Position: gp_Pnt, AttachPoint: gp_Pnt, Point1: gp_Pnt, Point2: gp_Pnt, first: Standard_Boolean): void;
  Add_4(aPresentation: any, aDrawer: any, anElips: gp_Elips, MidPoint: gp_Pnt, Position: gp_Pnt, AttachPoint: gp_Pnt, Point1: gp_Pnt, Point2: gp_Pnt, first: Standard_Boolean): void;
}

export declare class DsgPrs_OffsetPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection: gp_Dir, aDirection2: gp_Dir, OffsetPoint: gp_Pnt): void;
  AddAxes(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection: gp_Dir, aDirection2: gp_Dir, OffsetPoint: gp_Pnt): void;
}

export declare class DsgPrs_ParalPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection: gp_Dir, OffsetPoint: gp_Pnt): void;
  Add_2(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection: gp_Dir, OffsetPoint: gp_Pnt, ArrowSide: DsgPrs_ArrowSide): void;
}

export declare class DsgPrs_PerpenPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, pAx1: gp_Pnt, pAx2: gp_Pnt, pnt1: gp_Pnt, pnt2: gp_Pnt, OffsetPoint: gp_Pnt, intOut1: Standard_Boolean, intOut2: Standard_Boolean): void;
}

export declare class DsgPrs_ShadedPlanePresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, aPt1: gp_Pnt, aPt2: gp_Pnt, aPt3: gp_Pnt): void;
}

export declare class DsgPrs_ShapeDirPresentation {
  constructor();
  Add(prs: any, aDrawer: any, shape: TopoDS_Shape, mode: Standard_Integer): void;
}

export declare class DsgPrs_SymbPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, aText: TCollection_ExtendedString, OffsetPoint: gp_Pnt): void;
}

export declare class DsgPrs_SymmetricPresentation {
  constructor();
  Add_1(aPresentation: any, aDrawer: any, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aDirection1: gp_Dir, aAxis: gp_Lin, OffsetPoint: gp_Pnt): void;
  Add_2(aPresentation: any, aDrawer: any, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aCircle1: gp_Circ, aAxis: gp_Lin, OffsetPoint: gp_Pnt): void;
  Add_3(aPresentation: any, aDrawer: any, AttachmentPoint1: gp_Pnt, AttachmentPoint2: gp_Pnt, aAxis: gp_Lin, OffsetPoint: gp_Pnt): void;
}

export declare class DsgPrs_TangentPresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, OffsetPoint: gp_Pnt, aDirection: gp_Dir, aLength: Standard_Real): void;
}

export declare class DsgPrs_XYZAxisPresentation {
  constructor();
  Add_1(aPresentation: any, anLineAspect: any, aDir: gp_Dir, aVal: Standard_Real, aText: Standard_CString, aPfirst: gp_Pnt, aPlast: gp_Pnt): void;
  Add_2(aPresentation: any, aLineAspect: any, anArrowAspect: any, aTextAspect: any, aDir: gp_Dir, aVal: Standard_Real, aText: Standard_CString, aPfirst: gp_Pnt, aPlast: gp_Pnt): void;
}

export declare class DsgPrs_XYZPlanePresentation {
  constructor();
  Add(aPresentation: any, aDrawer: any, aPt1: gp_Pnt, aPt2: gp_Pnt, aPt3: gp_Pnt): void;
}

export declare class StdPrs_BRepFont extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  FindAndCreate(theFontName: TCollection_AsciiString, theFontAspect: Font_FontAspect, theSize: Standard_Real, theStrictLevel: Font_StrictLevel): any;
  Release(): void;
  Init_1(theFontPath: NCollection_String, theSize: Standard_Real, theFaceId: Standard_Integer): boolean;
  FindAndInit(theFontName: TCollection_AsciiString, theFontAspect: Font_FontAspect, theSize: Standard_Real, theStrictLevel: Font_StrictLevel): boolean;
  FTFont(): any;
  RenderGlyph(theChar: Standard_Utf32Char): TopoDS_Shape;
  SetCompositeCurveMode(theToConcatenate: Standard_Boolean): void;
  SetWidthScaling(theScaleFactor: number): void;
  Ascender(): Standard_Real;
  Descender(): Standard_Real;
  LineSpacing(): Standard_Real;
  PointSize(): Standard_Real;
  AdvanceX_1(theUCharNext: Standard_Utf32Char): Standard_Real;
  AdvanceX_2(theUChar: Standard_Utf32Char, theUCharNext: Standard_Utf32Char): Standard_Real;
  AdvanceY_1(theUCharNext: Standard_Utf32Char): Standard_Real;
  AdvanceY_2(theUChar: Standard_Utf32Char, theUCharNext: Standard_Utf32Char): Standard_Real;
  Scale(): Standard_Real;
  Mutex(): Standard_Mutex;
  Init_2(theFontName: NCollection_String, theFontAspect: Font_FontAspect, theSize: Standard_Real): boolean;
}

  export declare class StdPrs_BRepFont_1 extends StdPrs_BRepFont {
    constructor();
  }

  export declare class StdPrs_BRepFont_2 extends StdPrs_BRepFont {
    constructor(theFontPath: NCollection_String, theSize: Standard_Real, theFaceId: Standard_Integer);
  }

  export declare class StdPrs_BRepFont_3 extends StdPrs_BRepFont {
    constructor(theFontName: NCollection_String, theFontAspect: Font_FontAspect, theSize: Standard_Real, theStrictLevel: Font_StrictLevel);
  }

export declare class StdPrs_BRepTextBuilder {
  constructor();
  Perform_1(theFont: StdPrs_BRepFont, theFormatter: any, thePenLoc: gp_Ax3): TopoDS_Shape;
  Perform_2(theFont: StdPrs_BRepFont, theString: NCollection_String, thePenLoc: gp_Ax3, theHAlign: Graphic3d_HorizontalTextAlignment, theVAlign: Graphic3d_VerticalTextAlignment): TopoDS_Shape;
}

export declare class Select3D_SensitiveSet extends Select3D_SensitiveEntity {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  DefaultBVHBuilder(): any;
  SetDefaultBVHBuilder(theBuilder: any): void;
  Size(): Standard_Integer;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  BVH(): void;
  ToBuildBVH(): Standard_Boolean;
  SetBuilder(theBuilder: any): void;
  MarkDirty(): void;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  Clear(): void;
  GetLeafNodeSize(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Select3D_SensitiveFace extends Select3D_SensitiveEntity {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetPoints(theHArrayOfPnt: any): void;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  GetConnected(): any;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  BVH(): void;
  ToBuildBVH(): Standard_Boolean;
  NbSubElements(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Select3D_SensitiveFace_1 extends Select3D_SensitiveFace {
    constructor(theOwnerId: any, thePoints: TColgp_Array1OfPnt, theType: Select3D_TypeOfSensitivity);
  }

  export declare class Select3D_SensitiveFace_2 extends Select3D_SensitiveFace {
    constructor(theOwnerId: any, thePoints: any, theType: Select3D_TypeOfSensitivity);
  }

export declare class Select3D_SensitiveSegment extends Select3D_SensitiveEntity {
  constructor(theOwnerId: any, theFirstPnt: gp_Pnt, theLastPnt: gp_Pnt)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetStartPoint(thePnt: gp_Pnt): void;
  SetEndPoint(thePnt: gp_Pnt): void;
  StartPoint_1(): gp_Pnt;
  EndPoint_1(): gp_Pnt;
  NbSubElements(): Standard_Integer;
  GetConnected(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  CenterOfGeometry(): gp_Pnt;
  BoundingBox(): Select3D_BndBox3d;
  ToBuildBVH(): Standard_Boolean;
  StartPoint_2(thePnt: gp_Pnt): void;
  EndPoint_2(thePnt: gp_Pnt): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Prs3d {
  constructor();
  MatchSegment(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, p1: gp_Pnt, p2: gp_Pnt, dist: Standard_Real): Standard_Boolean;
  GetDeflection_1(theBndMin: Graphic3d_Vec3d, theBndMax: Graphic3d_Vec3d, theDeviationCoefficient: Standard_Real): Standard_Real;
  GetDeflection_2(theBndBox: Bnd_Box, theDeviationCoefficient: Standard_Real, theMaximalChordialDeviation: Standard_Real): Standard_Real;
  PrimitivesFromPolylines(thePoints: Prs3d_NListOfSequenceOfPnt): any;
  AddPrimitivesGroup(thePrs: any, theAspect: any, thePolylines: Prs3d_NListOfSequenceOfPnt): void;
  AddFreeEdges(theSegments: TColgp_SequenceOfPnt, thePolyTri: any, theLocation: gp_Trsf): void;
}

export declare class Prs3d_Arrow {
  constructor();
  DrawShaded(theAxis: gp_Ax1, theTubeRadius: Standard_Real, theAxisLength: Standard_Real, theConeRadius: Standard_Real, theConeLength: Standard_Real, theNbFacettes: Standard_Integer): any;
  DrawSegments(theLocation: gp_Pnt, theDir: gp_Dir, theAngle: Standard_Real, theLength: Standard_Real, theNbSegments: Standard_Integer): any;
  Draw_1(theGroup: any, theLocation: gp_Pnt, theDirection: gp_Dir, theAngle: Standard_Real, theLength: Standard_Real): void;
  Draw_2(thePrs: any, theLocation: gp_Pnt, theDirection: gp_Dir, theAngle: Standard_Real, theLength: Standard_Real): void;
}

export declare class Prs3d_BndBox extends Prs3d_Root {
  constructor();
  Add_1(thePresentation: any, theBndBox: Bnd_Box, theDrawer: any): void;
  Add_2(thePresentation: any, theBndBox: Bnd_OBB, theDrawer: any): void;
  FillSegments_1(theBox: Bnd_OBB): any;
  FillSegments_2(theBox: Bnd_Box): any;
  FillSegments_3(theSegments: any, theBox: Bnd_OBB): void;
  FillSegments_4(theSegments: any, theBox: Bnd_Box): void;
  fillSegments(theSegments: any, theBox: gp_Pnt): void;
}

export declare class Prs3d_InvalidAngle extends Standard_RangeError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Prs3d_InvalidAngle_1 extends Prs3d_InvalidAngle {
    constructor();
  }

  export declare class Prs3d_InvalidAngle_2 extends Prs3d_InvalidAngle {
    constructor(theMessage: Standard_CString);
  }

export declare class Prs3d_IsoAspect extends Prs3d_LineAspect {
  constructor(theColor: Quantity_Color, theType: Aspect_TypeOfLine, theWidth: Standard_Real, theNumber: Standard_Integer)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetNumber(theNumber: Standard_Integer): void;
  Number(): Standard_Integer;
}

export declare class Prs3d_PlaneAspect extends Prs3d_BasicAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  EdgesAspect(): any;
  IsoAspect(): any;
  ArrowAspect(): any;
  SetArrowsLength(theLength: Standard_Real): void;
  ArrowsLength(): Standard_Real;
  SetArrowsSize(theSize: Standard_Real): void;
  ArrowsSize(): Standard_Real;
  SetArrowsAngle(theAngle: Standard_Real): void;
  ArrowsAngle(): Standard_Real;
  SetDisplayCenterArrow(theToDraw: Standard_Boolean): void;
  DisplayCenterArrow(): Standard_Boolean;
  SetDisplayEdgesArrows(theToDraw: Standard_Boolean): void;
  DisplayEdgesArrows(): Standard_Boolean;
  SetDisplayEdges(theToDraw: Standard_Boolean): void;
  DisplayEdges(): Standard_Boolean;
  SetDisplayIso(theToDraw: Standard_Boolean): void;
  DisplayIso(): Standard_Boolean;
  SetPlaneLength(theLX: Standard_Real, theLY: Standard_Real): void;
  PlaneXLength(): Standard_Real;
  PlaneYLength(): Standard_Real;
  SetIsoDistance(theL: Standard_Real): void;
  IsoDistance(): Standard_Real;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Prs3d_PresentationShadow extends Graphic3d_Structure {
  constructor(theViewer: any, thePrs: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ParentId(): Standard_Integer;
  ParentAffinity(): any;
  CalculateBoundBox(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class StdPrs_ShapeTool {
  constructor(theShape: TopoDS_Shape, theAllVertices: Standard_Boolean)
  InitFace(): void;
  MoreFace(): Standard_Boolean;
  NextFace(): void;
  GetFace(): TopoDS_Face;
  FaceBound(): Bnd_Box;
  IsPlanarFace_1(): Standard_Boolean;
  InitCurve(): void;
  MoreCurve(): Standard_Boolean;
  NextCurve(): void;
  GetCurve(): TopoDS_Edge;
  CurveBound(): Bnd_Box;
  Neighbours(): Standard_Integer;
  FacesOfEdge(): any;
  InitVertex(): void;
  MoreVertex(): Standard_Boolean;
  NextVertex(): void;
  GetVertex(): TopoDS_Vertex;
  HasSurface(): Standard_Boolean;
  CurrentTriangulation(l: TopLoc_Location): any;
  HasCurve(): Standard_Boolean;
  PolygonOnTriangulation(Indices: any, T: any, l: TopLoc_Location): void;
  Polygon3D(l: TopLoc_Location): any;
  IsPlanarFace_2(theFace: TopoDS_Face): Standard_Boolean;
}

export declare class Prs3d_Text {
  constructor();
  Draw_1(theGroup: any, theAspect: any, theText: TCollection_ExtendedString, theAttachmentPoint: gp_Pnt): any;
  Draw_2(theGroup: any, theAspect: any, theText: TCollection_ExtendedString, theOrientation: gp_Ax2, theHasOwnAnchor: Standard_Boolean): any;
  Draw_3(thePrs: any, theDrawer: any, theText: TCollection_ExtendedString, theAttachmentPoint: gp_Pnt): void;
  Draw_4(thePrs: any, theAspect: any, theText: TCollection_ExtendedString, theOrientation: gp_Ax2, theHasOwnAnchor: Standard_Boolean): void;
  Draw_5(thePrs: any, theAspect: any, theText: TCollection_ExtendedString, theAttachmentPoint: gp_Pnt): void;
}

export declare class Prs3d_ToolCylinder {
  constructor(theBottomRad: Standard_Real, theTopRad: Standard_Real, theHeight: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer)
  Create(theBottomRad: Standard_Real, theTopRad: Standard_Real, theHeight: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
}

export declare class Prs3d_ToolDisk {
  constructor(theInnerRadius: Standard_Real, theOuterRadius: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer)
  Create(theInnerRadius: Standard_Real, theOuterRadius: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
  SetAngleRange(theStartAngle: Standard_Real, theEndAngle: Standard_Real): void;
}

export declare class Prs3d_ToolSector {
  constructor(theRadius: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer)
  Create(theRadius: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
}

export declare class Prs3d_ToolSphere {
  constructor(theRadius: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer)
  Create(theRadius: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
}

export declare class Prs3d_ToolTorus {
  Create_1(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
  Create_2(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theAngle: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
  Create_3(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theAngle1: Standard_Real, theAngle2: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
  Create_4(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theAngle1: Standard_Real, theAngle2: Standard_Real, theAngle: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer, theTrsf: gp_Trsf): any;
}

  export declare class Prs3d_ToolTorus_1 extends Prs3d_ToolTorus {
    constructor(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer);
  }

  export declare class Prs3d_ToolTorus_2 extends Prs3d_ToolTorus {
    constructor(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theAngle: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer);
  }

  export declare class Prs3d_ToolTorus_3 extends Prs3d_ToolTorus {
    constructor(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theAngle1: Standard_Real, theAngle2: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer);
  }

  export declare class Prs3d_ToolTorus_4 extends Prs3d_ToolTorus {
    constructor(theMajorRad: Standard_Real, theMinorRad: Standard_Real, theAngle1: Standard_Real, theAngle2: Standard_Real, theAngle: Standard_Real, theNbSlices: Standard_Integer, theNbStacks: Standard_Integer);
  }

export declare class PrsDim {
  constructor();
  Nearest_1(aShape: TopoDS_Shape, aPoint: gp_Pnt): gp_Pnt;
  Nearest_2(theLine: gp_Lin, thePoint: gp_Pnt): gp_Pnt;
  Nearest_3(theCurve: any, thePoint: gp_Pnt, theFirstPoint: gp_Pnt, theLastPoint: gp_Pnt, theNearestPoint: gp_Pnt): Standard_Boolean;
  Farest(aShape: TopoDS_Shape, aPoint: gp_Pnt): gp_Pnt;
  ComputeGeometry_1(theEdge: TopoDS_Edge, theCurve: any, theFirstPnt: gp_Pnt, theLastPnt: gp_Pnt): Standard_Boolean;
  ComputeGeometry_2(theEdge: TopoDS_Edge, theCurve: any, theFirstPnt: gp_Pnt, theLastPnt: gp_Pnt, theIsInfinite: Standard_Boolean): Standard_Boolean;
  ComputeGeometry_3(theEdge: TopoDS_Edge, theCurve: any, theFirstPnt: gp_Pnt, theLastPnt: gp_Pnt, theExtCurve: any, theIsInfinite: Standard_Boolean, theIsOnPlane: Standard_Boolean, thePlane: any): Standard_Boolean;
  ComputeGeometry_4(theFirstEdge: TopoDS_Edge, theSecondEdge: TopoDS_Edge, theFirstCurve: any, theSecondCurve: any, theFirstPnt1: gp_Pnt, theLastPnt1: gp_Pnt, theFirstPnt2: gp_Pnt, theLastPnt2: gp_Pnt, thePlane: any): Standard_Boolean;
  ComputeGeometry_5(theFirstEdge: TopoDS_Edge, theSecondEdge: TopoDS_Edge, theFirstCurve: any, theSecondCurve: any, theFirstPnt1: gp_Pnt, theLastPnt1: gp_Pnt, theFirstPnt2: gp_Pnt, theLastPnt2: gp_Pnt, theIsinfinite1: Standard_Boolean, theIsinfinite2: Standard_Boolean): Standard_Boolean;
  ComputeGeometry_6(theFirstEdge: TopoDS_Edge, theSecondEdge: TopoDS_Edge, theExtIndex: Standard_Integer, theFirstCurve: any, theSecondCurve: any, theFirstPnt1: gp_Pnt, theLastPnt1: gp_Pnt, theFirstPnt2: gp_Pnt, theLastPnt2: gp_Pnt, theExtCurve: any, theIsinfinite1: Standard_Boolean, theIsinfinite2: Standard_Boolean, thePlane: any): Standard_Boolean;
  ComputeGeomCurve(aCurve: any, first1: Standard_Real, last1: Standard_Real, FirstPnt1: gp_Pnt, LastPnt1: gp_Pnt, aPlane: any, isOnPlane: Standard_Boolean): Standard_Boolean;
  ComputeGeometry_7(aVertex: TopoDS_Vertex, point: gp_Pnt, aPlane: any, isOnPlane: Standard_Boolean): Standard_Boolean;
  GetPlaneFromFace(aFace: TopoDS_Face, aPlane: gp_Pln, aSurf: any, aSurfType: PrsDim_KindOfSurface, Offset: Standard_Real): Standard_Boolean;
  InitFaceLength(aFace: TopoDS_Face, aPlane: gp_Pln, aSurface: any, aSurfaceType: PrsDim_KindOfSurface, anOffset: Standard_Real): void;
  InitLengthBetweenCurvilinearFaces(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face, theFirstSurf: any, theSecondSurf: any, theFirstAttach: gp_Pnt, theSecondAttach: gp_Pnt, theDirOnPlane: gp_Dir): void;
  InitAngleBetweenPlanarFaces(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face, theCenter: gp_Pnt, theFirstAttach: gp_Pnt, theSecondAttach: gp_Pnt, theIsFirstPointSet: Standard_Boolean): Standard_Boolean;
  InitAngleBetweenCurvilinearFaces(theFirstFace: TopoDS_Face, theSecondFace: TopoDS_Face, theFirstSurfType: PrsDim_KindOfSurface, theSecondSurfType: PrsDim_KindOfSurface, theCenter: gp_Pnt, theFirstAttach: gp_Pnt, theSecondAttach: gp_Pnt, theIsFirstPointSet: Standard_Boolean): Standard_Boolean;
  ProjectPointOnPlane(aPoint: gp_Pnt, aPlane: gp_Pln): gp_Pnt;
  ProjectPointOnLine(aPoint: gp_Pnt, aLine: gp_Lin): gp_Pnt;
  TranslatePointToBound(aPoint: gp_Pnt, aDir: gp_Dir, aBndBox: Bnd_Box): gp_Pnt;
  InDomain(aFirstPar: Standard_Real, aLastPar: Standard_Real, anAttachPar: Standard_Real): Standard_Boolean;
  NearestApex(elips: gp_Elips, pApex: gp_Pnt, nApex: gp_Pnt, fpara: Standard_Real, lpara: Standard_Real, IsInDomain: Standard_Boolean): gp_Pnt;
  DistanceFromApex(elips: gp_Elips, Apex: gp_Pnt, par: Standard_Real): Standard_Real;
  ComputeProjEdgePresentation(aPres: any, aDrawer: any, anEdge: TopoDS_Edge, ProjCurve: any, FirstP: gp_Pnt, LastP: gp_Pnt, aColor: Quantity_NameOfColor, aWidth: Standard_Real, aProjTOL: Aspect_TypeOfLine, aCallTOL: Aspect_TypeOfLine): void;
  ComputeProjVertexPresentation(aPres: any, aDrawer: any, aVertex: TopoDS_Vertex, ProjPoint: gp_Pnt, aColor: Quantity_NameOfColor, aWidth: Standard_Real, aProjTOM: Aspect_TypeOfMarker, aCallTOL: Aspect_TypeOfLine): void;
}

export declare class Select3D_BVHIndexBuffer extends Graphic3d_Buffer {
  constructor(theAlloc: any)
  HasPatches(): boolean;
  Init(theNbElems: Standard_Integer, theHasPatches: boolean): boolean;
  Index(theIndex: Standard_Integer): Standard_Integer;
  PatchSize(theIndex: Standard_Integer): Standard_Integer;
  SetIndex_1(theIndex: Standard_Integer, theValue: Standard_Integer): void;
  SetIndex_2(theIndex: Standard_Integer, theValue: Standard_Integer, thePatchSize: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Select3D_PointData {
  constructor(theNbPoints: Standard_Integer)
  SetPnt_1(theIndex: Standard_Integer, theValue: Select3D_Pnt): void;
  SetPnt_2(theIndex: Standard_Integer, theValue: gp_Pnt): void;
  Pnt(theIndex: Standard_Integer): Select3D_Pnt;
  Pnt3d(theIndex: Standard_Integer): gp_Pnt;
  Size(): Standard_Integer;
}

export declare class Select3D_SensitivePoly extends Select3D_SensitiveSet {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NbSubElements(): Standard_Integer;
  Points3D(theHArrayOfPnt: any): void;
  ArrayBounds(theLow: Standard_Integer, theUp: Standard_Integer): void;
  GetPoint3d(thePntIdx: Standard_Integer): gp_Pnt;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  Size(): Standard_Integer;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Select3D_SensitivePoly_1 extends Select3D_SensitivePoly {
    constructor(theOwnerId: any, thePoints: TColgp_Array1OfPnt, theIsBVHEnabled: Standard_Boolean);
  }

  export declare class Select3D_SensitivePoly_2 extends Select3D_SensitivePoly {
    constructor(theOwnerId: any, thePoints: any, theIsBVHEnabled: Standard_Boolean);
  }

  export declare class Select3D_SensitivePoly_3 extends Select3D_SensitivePoly {
    constructor(theOwnerId: any, theIsBVHEnabled: Standard_Boolean, theNbPnts: Standard_Integer);
  }

export declare class Select3D_InteriorSensitivePointSet extends Select3D_SensitiveSet {
  constructor(theOwnerId: any, thePoints: TColgp_Array1OfPnt)
  GetPoints(theHArrayOfPnt: any): void;
  Size(): Standard_Integer;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  NbSubElements(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Select3D_SensitiveBox extends Select3D_SensitiveEntity {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NbSubElements(): Standard_Integer;
  GetConnected(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Box(): Bnd_Box;
  CenterOfGeometry(): gp_Pnt;
  BoundingBox(): Select3D_BndBox3d;
  ToBuildBVH(): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Select3D_SensitiveBox_1 extends Select3D_SensitiveBox {
    constructor(theOwnerId: any, theBox: Bnd_Box);
  }

  export declare class Select3D_SensitiveBox_2 extends Select3D_SensitiveBox {
    constructor(theOwnerId: any, theXMin: Standard_Real, theYMin: Standard_Real, theZMin: Standard_Real, theXMax: Standard_Real, theYMax: Standard_Real, theZMax: Standard_Real);
  }

export declare class Select3D_SensitiveCircle extends Select3D_SensitivePoly {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  GetConnected(): any;
  CenterOfGeometry(): gp_Pnt;
  BVH(): void;
  ToBuildBVH(): Standard_Boolean;
}

  export declare class Select3D_SensitiveCircle_1 extends Select3D_SensitiveCircle {
    constructor(theOwnerId: any, theCircle: gp_Circ, theIsFilled: Standard_Boolean, theNbPnts: Standard_Integer);
  }

  export declare class Select3D_SensitiveCircle_2 extends Select3D_SensitiveCircle {
    constructor(theOwnerId: any, theCircle: gp_Circ, theU1: Standard_Real, theU2: Standard_Real, theIsFilled: Standard_Boolean, theNbPnts: Standard_Integer);
  }

  export declare class Select3D_SensitiveCircle_3 extends Select3D_SensitiveCircle {
    constructor(theOwnerId: any, thePnts3d: any, theIsFilled: Standard_Boolean);
  }

  export declare class Select3D_SensitiveCircle_4 extends Select3D_SensitiveCircle {
    constructor(theOwnerId: any, thePnts3d: TColgp_Array1OfPnt, theIsFilled: Standard_Boolean);
  }

export declare class Select3D_SensitiveCurve extends Select3D_SensitivePoly {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetConnected(): any;
}

  export declare class Select3D_SensitiveCurve_1 extends Select3D_SensitiveCurve {
    constructor(theOwnerId: any, theCurve: any, theNbPnts: Standard_Integer);
  }

  export declare class Select3D_SensitiveCurve_2 extends Select3D_SensitiveCurve {
    constructor(theOwnerId: any, thePoints: any);
  }

  export declare class Select3D_SensitiveCurve_3 extends Select3D_SensitiveCurve {
    constructor(theOwnerId: any, thePoints: TColgp_Array1OfPnt);
  }

export declare class Select3D_SensitiveGroup extends Select3D_SensitiveSet {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Entities(): Select3D_IndexedMapOfEntity;
  SubEntity(theIndex: Standard_Integer): any;
  LastDetectedEntity(): any;
  LastDetectedEntityIndex(): Standard_Integer;
  Add_1(theEntities: Select3D_EntitySequence): void;
  Add_2(theSensitive: any): void;
  Remove(theSensitive: any): void;
  Clear(): void;
  IsIn(theSensitive: any): Standard_Boolean;
  SetMatchType(theIsMustMatchAll: Standard_Boolean): void;
  MustMatchAll(): Standard_Boolean;
  ToCheckOverlapAll(): Standard_Boolean;
  SetCheckOverlapAll(theToCheckAll: Standard_Boolean): void;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  NbSubElements(): Standard_Integer;
  GetConnected(): any;
  Set(theOwnerId: any): void;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  Size(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Select3D_SensitiveGroup_1 extends Select3D_SensitiveGroup {
    constructor(theOwnerId: any, theIsMustMatchAll: Standard_Boolean);
  }

  export declare class Select3D_SensitiveGroup_2 extends Select3D_SensitiveGroup {
    constructor(theOwnerId: any, theEntities: Select3D_EntitySequence, theIsMustMatchAll: Standard_Boolean);
  }

export declare class Select3D_SensitivePoint extends Select3D_SensitiveEntity {
  constructor(theOwnerId: any, thePoint: gp_Pnt)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NbSubElements(): Standard_Integer;
  GetConnected(): any;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Point(): gp_Pnt;
  CenterOfGeometry(): gp_Pnt;
  BoundingBox(): Select3D_BndBox3d;
  ToBuildBVH(): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Select3D_SensitivePrimitiveArray extends Select3D_SensitiveSet {
  constructor(theOwnerId: any)
  PatchSizeMax(): Standard_Integer;
  SetPatchSizeMax(thePatchSizeMax: Standard_Integer): void;
  PatchDistance(): number;
  SetPatchDistance(thePatchDistMax: number): void;
  InitTriangulation_1(theVerts: any, theIndices: any, theInitLoc: TopLoc_Location, theIndexLower: Standard_Integer, theIndexUpper: Standard_Integer, theToEvalMinMax: boolean, theNbGroups: Standard_Integer): boolean;
  InitTriangulation_2(theVerts: any, theIndices: any, theInitLoc: TopLoc_Location, theToEvalMinMax: boolean, theNbGroups: Standard_Integer): boolean;
  InitPoints_1(theVerts: any, theIndices: any, theInitLoc: TopLoc_Location, theIndexLower: Standard_Integer, theIndexUpper: Standard_Integer, theToEvalMinMax: boolean, theNbGroups: Standard_Integer): boolean;
  InitPoints_2(theVerts: any, theIndices: any, theInitLoc: TopLoc_Location, theToEvalMinMax: boolean, theNbGroups: Standard_Integer): boolean;
  InitPoints_3(theVerts: any, theInitLoc: TopLoc_Location, theToEvalMinMax: boolean, theNbGroups: Standard_Integer): boolean;
  SetMinMax(theMinX: number, theMinY: number, theMinZ: number, theMaxX: number, theMaxY: number, theMaxZ: number): void;
  ToDetectElements(): boolean;
  SetDetectElements(theToDetect: boolean): void;
  ToDetectElementMap(): boolean;
  SetDetectElementMap(theToDetect: boolean): void;
  ToDetectNodes(): boolean;
  SetDetectNodes(theToDetect: boolean): void;
  ToDetectNodeMap(): boolean;
  SetDetectNodeMap(theToDetect: boolean): void;
  ToDetectEdges(): boolean;
  SetDetectEdges(theToDetect: boolean): void;
  LastDetectedElement(): Standard_Integer;
  LastDetectedElementMap(): any;
  LastDetectedNode(): Standard_Integer;
  LastDetectedNodeMap(): any;
  LastDetectedEdgeNode1(): Standard_Integer;
  LastDetectedEdgeNode2(): Standard_Integer;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  GetConnected(): any;
  Size(): Standard_Integer;
  NbSubElements(): Standard_Integer;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  HasInitLocation(): Standard_Boolean;
  InvInitLocation(): gp_GTrsf;
  Set(theOwnerId: any): void;
  BVH(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Select3D_SensitiveTriangle extends Select3D_SensitiveEntity {
  constructor(theOwnerId: any, thePnt0: gp_Pnt, thePnt1: gp_Pnt, thePnt2: gp_Pnt, theType: Select3D_TypeOfSensitivity)
  Matches(theMgr: SelectBasics_SelectingVolumeManager, thePickResult: SelectBasics_PickResult): Standard_Boolean;
  Points3D(thePnt0: gp_Pnt, thePnt1: gp_Pnt, thePnt2: gp_Pnt): void;
  Center3D(): gp_Pnt;
  GetConnected(): any;
  BoundingBox(): Select3D_BndBox3d;
  ToBuildBVH(): Standard_Boolean;
  NbSubElements(): Standard_Integer;
  CenterOfGeometry(): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Select3D_SensitiveTriangulation extends Select3D_SensitiveSet {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NbSubElements(): Standard_Integer;
  GetConnected(): any;
  Triangulation(): any;
  Size(): Standard_Integer;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  HasInitLocation(): Standard_Boolean;
  InvInitLocation(): gp_GTrsf;
  GetInitLocation(): TopLoc_Location;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Select3D_SensitiveTriangulation_1 extends Select3D_SensitiveTriangulation {
    constructor(theOwnerId: any, theTrg: any, theInitLoc: TopLoc_Location, theIsInterior: Standard_Boolean);
  }

  export declare class Select3D_SensitiveTriangulation_2 extends Select3D_SensitiveTriangulation {
    constructor(theOwnerId: any, theTrg: any, theInitLoc: TopLoc_Location, theFreeEdges: any, theCOG: gp_Pnt, theIsInterior: Standard_Boolean);
  }

export declare class Select3D_SensitiveWire extends Select3D_SensitiveSet {
  constructor(theOwnerId: any)
  Add(theSensitive: any): void;
  NbSubElements(): Standard_Integer;
  GetConnected(): any;
  GetEdges(): any;
  Set(theOwnerId: any): void;
  GetLastDetected(): any;
  BoundingBox(): Select3D_BndBox3d;
  CenterOfGeometry(): gp_Pnt;
  Size(): Standard_Integer;
  Box(theIdx: Standard_Integer): Select3D_BndBox3d;
  Center(theIdx: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIdx1: Standard_Integer, theIdx2: Standard_Integer): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectBasics {
  constructor();
  MaxOwnerPriority(): Standard_Integer;
  MinOwnerPriority(): Standard_Integer;
}

export declare class SelectMgr {
  constructor();
  ComputeSensitivePrs(theStructure: any, theSel: any, theLoc: gp_Trsf, theTrsfPers: any): void;
}

export declare class SelectMgr_AndFilter extends SelectMgr_CompositionFilter {
  constructor()
  IsOk(anobj: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_OrFilter extends SelectMgr_CompositionFilter {
  constructor()
  IsOk(anobj: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class SelectMgr_SelectionImageFiller extends Standard_Transient {
  CreateFiller(thePixMap: Image_PixMap, theSelector: SelectMgr_ViewerSelector, theType: StdSelect_TypeOfSelectionImage): any;
  Fill(theCol: Standard_Integer, theRow: Standard_Integer, thePicked: Standard_Integer): void;
  Flush(): void;
}

export declare class SelectMgr_SelectionManager extends Standard_Transient {
  constructor(theSelector: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Selector(): any;
  Contains(theObject: any): Standard_Boolean;
  Load(theObject: any, theMode: Standard_Integer): void;
  Remove(theObject: any): void;
  Activate(theObject: any, theMode: Standard_Integer): void;
  Deactivate(theObject: any, theMode: Standard_Integer): void;
  IsActivated(theObject: any, theMode: Standard_Integer): Standard_Boolean;
  ClearSelectionStructures(theObj: any, theMode: Standard_Integer): void;
  RestoreSelectionStructures(theObj: any, theMode: Standard_Integer): void;
  RecomputeSelection(theObject: any, theIsForce: Standard_Boolean, theMode: Standard_Integer): void;
  Update(theObject: any, theIsForce: Standard_Boolean): void;
  SetUpdateMode_1(theObject: any, theType: SelectMgr_TypeOfUpdate): void;
  SetUpdateMode_2(theObject: any, theMode: Standard_Integer, theType: SelectMgr_TypeOfUpdate): void;
  SetSelectionSensitivity(theObject: any, theMode: Standard_Integer, theNewSens: Standard_Integer): void;
  UpdateSelection(theObj: any): void;
}

export declare class SelectMgr_SensitiveEntitySet extends BVH_PrimitiveSet3d {
  constructor(theBuilder: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Append_1(theEntity: any): void;
  Append_2(theSelection: any): void;
  Remove(theSelection: any): void;
  Box_1(theIndex: Standard_Integer): Select3D_BndBox3d;
  Center(theIndex: Standard_Integer, theAxis: Standard_Integer): Standard_Real;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  Size(): Standard_Integer;
  GetSensitiveById(theIndex: Standard_Integer): any;
  Sensitives(): SelectMgr_IndexedMapOfHSensitive;
}

export declare class StdPrs_Curve extends Prs3d_Root {
  constructor();
  Add_1(aPresentation: any, aCurve: Adaptor3d_Curve, aDrawer: any, drawCurve: Standard_Boolean): void;
  Add_2(aPresentation: any, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDrawer: any, drawCurve: Standard_Boolean): void;
  Add_3(aPresentation: any, aCurve: Adaptor3d_Curve, aDrawer: any, Points: TColgp_SequenceOfPnt, drawCurve: Standard_Boolean): void;
  Add_4(aPresentation: any, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, Points: TColgp_SequenceOfPnt, aNbPoints: Standard_Integer, drawCurve: Standard_Boolean): void;
  Match_1(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, aDrawer: any): Standard_Boolean;
  Match_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, aDeflection: Standard_Real, aLimit: Standard_Real, aNbPoints: Standard_Integer): Standard_Boolean;
  Match_3(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDrawer: any): Standard_Boolean;
  Match_4(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDeflection: Standard_Real, aNbPoints: Standard_Integer): Standard_Boolean;
}

export declare class StdPrs_DeflectionCurve extends Prs3d_Root {
  constructor();
  Add_1(aPresentation: any, aCurve: Adaptor3d_Curve, aDrawer: any, drawCurve: Standard_Boolean): void;
  Add_2(aPresentation: any, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDrawer: any, drawCurve: Standard_Boolean): void;
  Add_3(aPresentation: any, aCurve: Adaptor3d_Curve, aDeflection: Standard_Real, aLimit: Standard_Real, anAngle: Standard_Real, drawCurve: Standard_Boolean): void;
  Add_4(aPresentation: any, aCurve: Adaptor3d_Curve, aDeflection: Standard_Real, aDrawer: any, Points: TColgp_SequenceOfPnt, drawCurve: Standard_Boolean): void;
  Add_5(aPresentation: any, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDeflection: Standard_Real, Points: TColgp_SequenceOfPnt, anAngle: Standard_Real, drawCurve: Standard_Boolean): void;
  Match_1(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, aDrawer: any): Standard_Boolean;
  Match_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, aDrawer: any): Standard_Boolean;
  Match_3(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theDistance: Standard_Real, theCurve: Adaptor3d_Curve, theDeflection: Standard_Real, theLimit: Standard_Real, theAngle: Standard_Real): Standard_Boolean;
  Match_4(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theDistance: Standard_Real, theCurve: Adaptor3d_Curve, theU1: Standard_Real, theU2: Standard_Real, theDeflection: Standard_Real, theAngle: Standard_Real): Standard_Boolean;
}

export declare class StdPrs_HLRShapeI extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ComputeHLR(thePrs: any, theShape: TopoDS_Shape, theDrawer: any, theProjector: any): void;
}

export declare class StdPrs_HLRPolyShape extends StdPrs_HLRShapeI {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ComputeHLR(thePrs: any, theShape: TopoDS_Shape, theDrawer: any, theProjector: any): void;
}

export declare class StdPrs_HLRShape extends StdPrs_HLRShapeI {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  ComputeHLR(thePrs: any, theShape: TopoDS_Shape, theDrawer: any, theProjector: any): void;
}

export declare class StdPrs_HLRToolShape {
  constructor(TheShape: TopoDS_Shape, TheProjector: HLRAlgo_Projector)
  NbEdges(): Standard_Integer;
  InitVisible(EdgeNumber: Standard_Integer): void;
  MoreVisible(): Standard_Boolean;
  NextVisible(): void;
  Visible(TheEdge: BRepAdaptor_Curve, U1: Standard_Real, U2: Standard_Real): void;
  InitHidden(EdgeNumber: Standard_Integer): void;
  MoreHidden(): Standard_Boolean;
  NextHidden(): void;
  Hidden(TheEdge: BRepAdaptor_Curve, U1: Standard_Real, U2: Standard_Real): void;
}

export declare class StdPrs_ToolTriangulatedShape {
  constructor();
  IsTriangulated(theShape: TopoDS_Shape): Standard_Boolean;
  IsClosed(theShape: TopoDS_Shape): Standard_Boolean;
  ComputeNormals_1(theFace: TopoDS_Face, theTris: any): void;
  ComputeNormals_2(theFace: TopoDS_Face, theTris: any, thePolyConnect: Poly_Connect): void;
  Normal(theFace: TopoDS_Face, thePolyConnect: Poly_Connect, theNormals: TColgp_Array1OfDir): void;
  GetDeflection(theShape: TopoDS_Shape, theDrawer: any): Standard_Real;
  IsTessellated(theShape: TopoDS_Shape, theDrawer: any): Standard_Boolean;
  Tessellate(theShape: TopoDS_Shape, theDrawer: any): Standard_Boolean;
  ClearOnOwnDeflectionChange(theShape: TopoDS_Shape, theDrawer: any, theToResetCoeff: Standard_Boolean): void;
}

export declare class StdPrs_Isolines extends Prs3d_Root {
  constructor();
  Add_1(thePresentation: any, theFace: TopoDS_Face, theDrawer: any, theDeflection: Standard_Real): void;
  Add_2(theFace: TopoDS_Face, theDrawer: any, theDeflection: Standard_Real, theUPolylines: Prs3d_NListOfSequenceOfPnt, theVPolylines: Prs3d_NListOfSequenceOfPnt): void;
  AddOnTriangulation_1(thePresentation: any, theFace: TopoDS_Face, theDrawer: any): void;
  AddOnTriangulation_2(theFace: TopoDS_Face, theDrawer: any, theUPolylines: Prs3d_NListOfSequenceOfPnt, theVPolylines: Prs3d_NListOfSequenceOfPnt): void;
  AddOnTriangulation_3(thePresentation: any, theTriangulation: any, theSurface: any, theLocation: TopLoc_Location, theDrawer: any, theUIsoParams: TColStd_SequenceOfReal, theVIsoParams: TColStd_SequenceOfReal): void;
  AddOnSurface_1(thePresentation: any, theFace: TopoDS_Face, theDrawer: any, theDeflection: Standard_Real): void;
  AddOnSurface_2(theFace: TopoDS_Face, theDrawer: any, theDeflection: Standard_Real, theUPolylines: Prs3d_NListOfSequenceOfPnt, theVPolylines: Prs3d_NListOfSequenceOfPnt): void;
  AddOnSurface_3(thePresentation: any, theSurface: any, theDrawer: any, theDeflection: Standard_Real, theUIsoParams: TColStd_SequenceOfReal, theVIsoParams: TColStd_SequenceOfReal): void;
  UVIsoParameters(theFace: TopoDS_Face, theNbIsoU: Standard_Integer, theNbIsoV: Standard_Integer, theUVLimit: Standard_Real, theUIsoParams: TColStd_SequenceOfReal, theVIsoParams: TColStd_SequenceOfReal, theUmin: Standard_Real, theUmax: Standard_Real, theVmin: Standard_Real, theVmax: Standard_Real): void;
}

export declare class StdPrs_Plane extends Prs3d_Root {
  constructor();
  Add(aPresentation: any, aPlane: Adaptor3d_Surface, aDrawer: any): void;
  Match(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aPlane: Adaptor3d_Surface, aDrawer: any): Standard_Boolean;
}

export declare class StdPrs_ToolPoint {
  constructor();
  Coord(aPoint: any, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
}

export declare class StdPrs_PoleCurve extends Prs3d_Root {
  constructor();
  Add(aPresentation: any, aCurve: Adaptor3d_Curve, aDrawer: any): void;
  Match(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, aDrawer: any): Standard_Boolean;
  Pick(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aCurve: Adaptor3d_Curve, aDrawer: any): Standard_Integer;
}

export declare class StdPrs_ShadedShape extends Prs3d_Root {
  constructor();
  Add_1(thePresentation: any, theShape: TopoDS_Shape, theDrawer: any, theVolume: StdPrs_Volume): void;
  Add_2(thePresentation: any, theShape: TopoDS_Shape, theDrawer: any, theHasTexels: Standard_Boolean, theUVOrigin: gp_Pnt2d, theUVRepeat: gp_Pnt2d, theUVScale: gp_Pnt2d, theVolume: StdPrs_Volume): void;
  ExploreSolids(theShape: TopoDS_Shape, theBuilder: BRep_Builder, theClosed: TopoDS_Compound, theOpened: TopoDS_Compound, theIgnore1DSubShape: Standard_Boolean): void;
  AddWireframeForFreeElements(thePrs: any, theShape: TopoDS_Shape, theDrawer: any): void;
  AddWireframeForFacesWithoutTriangles(thePrs: any, theShape: TopoDS_Shape, theDrawer: any): void;
  FillTriangles_1(theShape: TopoDS_Shape): any;
  FillTriangles_2(theShape: TopoDS_Shape, theHasTexels: Standard_Boolean, theUVOrigin: gp_Pnt2d, theUVRepeat: gp_Pnt2d, theUVScale: gp_Pnt2d): any;
  FillFaceBoundaries(theShape: TopoDS_Shape, theUpperContinuity: GeomAbs_Shape): any;
}

export declare class StdPrs_ShadedSurface extends Prs3d_Root {
  constructor();
  Add(aPresentation: any, aSurface: Adaptor3d_Surface, aDrawer: any): void;
}

export declare class StdPrs_ToolRFace {
  IsOriented(): Standard_Boolean;
  Init(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): Adaptor2d_Curve2d;
  Edge(): TopoDS_Edge;
  Orientation(): TopAbs_Orientation;
  IsInvalidGeometry(): Standard_Boolean;
}

  export declare class StdPrs_ToolRFace_1 extends StdPrs_ToolRFace {
    constructor();
  }

  export declare class StdPrs_ToolRFace_2 extends StdPrs_ToolRFace {
    constructor(aSurface: any);
  }

export declare class StdPrs_ToolVertex {
  constructor();
  Coord(aPoint: TopoDS_Vertex, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
}

export declare class StdPrs_WFDeflectionRestrictedFace extends Prs3d_Root {
  constructor();
  Add_1(aPresentation: any, aFace: any, aDrawer: any): void;
  AddUIso(aPresentation: any, aFace: any, aDrawer: any): void;
  AddVIso(aPresentation: any, aFace: any, aDrawer: any): void;
  Add_2(aPresentation: any, aFace: any, DrawUIso: Standard_Boolean, DrawVIso: Standard_Boolean, Deflection: Standard_Real, NBUiso: Standard_Integer, NBViso: Standard_Integer, aDrawer: any, Curves: Prs3d_NListOfSequenceOfPnt): void;
  Match_1(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aFace: any, aDrawer: any): Standard_Boolean;
  MatchUIso(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aFace: any, aDrawer: any): Standard_Boolean;
  MatchVIso(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aFace: any, aDrawer: any): Standard_Boolean;
  Match_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real, aDistance: Standard_Real, aFace: any, aDrawer: any, DrawUIso: Standard_Boolean, DrawVIso: Standard_Boolean, aDeflection: Standard_Real, NBUiso: Standard_Integer, NBViso: Standard_Integer): Standard_Boolean;
}

export declare class StdPrs_WFDeflectionSurface extends Prs3d_Root {
  constructor();
  Add(aPresentation: any, aSurface: any, aDrawer: any): void;
}

export declare class StdPrs_WFPoleSurface extends Prs3d_Root {
  constructor();
  Add(aPresentation: any, aSurface: Adaptor3d_Surface, aDrawer: any): void;
}

export declare class StdPrs_WFRestrictedFace extends Prs3d_Root {
  constructor();
  Add_1(thePresentation: any, theFace: any, theDrawUIso: Standard_Boolean, theDrawVIso: Standard_Boolean, theNbUIso: Standard_Integer, theNbVIso: Standard_Integer, theDrawer: any, theCurves: Prs3d_NListOfSequenceOfPnt): void;
  Add_2(thePresentation: any, theFace: any, theDrawer: any): void;
  Match_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theDistance: Standard_Real, theFace: any, theDrawUIso: Standard_Boolean, theDrawVIso: Standard_Boolean, theDeflection: Standard_Real, theNbUIso: Standard_Integer, theNbVIso: Standard_Integer, theDrawer: any): Standard_Boolean;
  Match_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theDistance: Standard_Real, theFace: any, theDrawer: any): Standard_Boolean;
  MatchUIso(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theDistance: Standard_Real, theFace: any, theDrawer: any): Standard_Boolean;
  MatchVIso(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theDistance: Standard_Real, theFace: any, theDrawer: any): Standard_Boolean;
  AddUIso(thePresentation: any, theFace: any, theDrawer: any): void;
  AddVIso(thePresentation: any, theFace: any, theDrawer: any): void;
}

export declare class StdPrs_WFShape extends Prs3d_Root {
  constructor();
  Add(thePresentation: any, theShape: TopoDS_Shape, theDrawer: any, theIsParallel: Standard_Boolean): void;
  AddEdgesOnTriangulation_1(theShape: TopoDS_Shape, theToExcludeGeometric: Standard_Boolean): any;
  AddEdgesOnTriangulation_2(theSegments: TColgp_SequenceOfPnt, theShape: TopoDS_Shape, theToExcludeGeometric: Standard_Boolean): void;
  AddAllEdges(theShape: TopoDS_Shape, theDrawer: any): any;
  AddVertexes(theShape: TopoDS_Shape, theVertexMode: Prs3d_VertexDrawMode): any;
}

export declare class StdPrs_WFSurface extends Prs3d_Root {
  constructor();
  Add(aPresentation: any, aSurface: any, aDrawer: any): void;
}

export declare class StdSelect {
  constructor();
  SetDrawerForBRepOwner(aSelection: any, aDrawer: any): void;
}

export declare class StdSelect_BRepOwner extends SelectMgr_EntityOwner {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  HasShape(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  HasHilightMode(): Standard_Boolean;
  SetHilightMode(theMode: Standard_Integer): void;
  ResetHilightMode(): void;
  HilightMode(): Standard_Integer;
  IsHilighted(aPM: any, aMode: Standard_Integer): Standard_Boolean;
  HilightWithColor(thePM: any, theStyle: any, theMode: Standard_Integer): void;
  Unhilight(aPM: any, aMode: Standard_Integer): void;
  Clear(aPM: any, aMode: Standard_Integer): void;
  SetLocation(aLoc: TopLoc_Location): void;
  UpdateHighlightTrsf(theViewer: any, theManager: any, theDispMode: Standard_Integer): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class StdSelect_BRepOwner_1 extends StdSelect_BRepOwner {
    constructor(aPriority: Standard_Integer);
  }

  export declare class StdSelect_BRepOwner_2 extends StdSelect_BRepOwner {
    constructor(aShape: TopoDS_Shape, aPriority: Standard_Integer, ComesFromDecomposition: Standard_Boolean);
  }

  export declare class StdSelect_BRepOwner_3 extends StdSelect_BRepOwner {
    constructor(aShape: TopoDS_Shape, theOrigin: any, aPriority: Standard_Integer, FromDecomposition: Standard_Boolean);
  }

export declare class StdSelect_BRepSelectionTool {
  constructor();
  Load_1(aSelection: any, aShape: TopoDS_Shape, aType: TopAbs_ShapeEnum, theDeflection: Standard_Real, theDeviationAngle: Standard_Real, AutoTriangulation: Standard_Boolean, aPriority: Standard_Integer, NbPOnEdge: Standard_Integer, MaximalParameter: Standard_Real): void;
  Load_2(aSelection: any, Origin: any, aShape: TopoDS_Shape, aType: TopAbs_ShapeEnum, theDeflection: Standard_Real, theDeviationAngle: Standard_Real, AutoTriangulation: Standard_Boolean, aPriority: Standard_Integer, NbPOnEdge: Standard_Integer, MaximalParameter: Standard_Real): void;
  GetStandardPriority(theShape: TopoDS_Shape, theType: TopAbs_ShapeEnum): Standard_Integer;
  ComputeSensitive(theShape: TopoDS_Shape, theOwner: any, theSelection: any, theDeflection: Standard_Real, theDeflAngle: Standard_Real, theNbPOnEdge: Standard_Integer, theMaxiParam: Standard_Real, theAutoTriang: Standard_Boolean): void;
  GetSensitiveForFace(theFace: TopoDS_Face, theOwner: any, theOutList: Select3D_EntitySequence, theAutoTriang: Standard_Boolean, theNbPOnEdge: Standard_Integer, theMaxiParam: Standard_Real, theInteriorFlag: Standard_Boolean): Standard_Boolean;
  GetEdgeSensitive(theShape: TopoDS_Shape, theOwner: any, theSelection: any, theDeflection: Standard_Real, theDeviationAngle: Standard_Real, theNbPOnEdge: Standard_Integer, theMaxiParam: Standard_Real, theSensitive: any): void;
  PreBuildBVH(theSelection: any): void;
}

export declare class StdSelect_EdgeFilter extends SelectMgr_Filter {
  constructor(Edge: StdSelect_TypeOfEdge)
  SetType(aNewType: StdSelect_TypeOfEdge): void;
  Type(): StdSelect_TypeOfEdge;
  IsOk(anobj: any): Standard_Boolean;
  ActsOn(aStandardMode: TopAbs_ShapeEnum): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StdSelect_FaceFilter extends SelectMgr_Filter {
  constructor(aTypeOfFace: StdSelect_TypeOfFace)
  SetType(aNewType: StdSelect_TypeOfFace): void;
  Type(): StdSelect_TypeOfFace;
  IsOk(anobj: any): Standard_Boolean;
  ActsOn(aStandardMode: TopAbs_ShapeEnum): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StdSelect_Shape extends PrsMgr_PresentableObject {
  constructor(theShape: TopoDS_Shape, theDrawer: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Compute(aPresentationManager: any, aPresentation: any, aMode: Standard_Integer): void;
  Shape_1(): TopoDS_Shape;
  Shape_2(theShape: TopoDS_Shape): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class StdSelect_ShapeTypeFilter extends SelectMgr_Filter {
  constructor(aType: TopAbs_ShapeEnum)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Type(): TopAbs_ShapeEnum;
  IsOk(anobj: any): Standard_Boolean;
  ActsOn(aStandardMode: TopAbs_ShapeEnum): Standard_Boolean;
}

export declare class V3d {
  constructor();
  GetProjAxis(theOrientation: V3d_TypeOfOrientation): gp_Dir;
  ArrowOfRadius(garrow: any, X0: Standard_Real, Y0: Standard_Real, Z0: Standard_Real, DX: Standard_Real, DY: Standard_Real, DZ: Standard_Real, Alpha: Standard_Real, Lng: Standard_Real): void;
  CircleInPlane(gcircle: any, X0: Standard_Real, Y0: Standard_Real, Z0: Standard_Real, VX: Standard_Real, VY: Standard_Real, VZ: Standard_Real, Radius: Standard_Real): void;
  SwitchViewsinWindow(aPreviousView: any, aNextView: any): void;
  TypeOfOrientationToString(theType: V3d_TypeOfOrientation): Standard_CString;
  TypeOfOrientationFromString_1(theTypeString: Standard_CString): V3d_TypeOfOrientation;
  TypeOfOrientationFromString_2(theTypeString: Standard_CString, theType: V3d_TypeOfOrientation): Standard_Boolean;
}

export declare class V3d_AmbientLight extends Graphic3d_CLight {
  constructor(theColor: Quantity_Color)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class V3d_BadValue extends Standard_OutOfRange {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class V3d_BadValue_1 extends V3d_BadValue {
    constructor();
  }

  export declare class V3d_BadValue_2 extends V3d_BadValue {
    constructor(theMessage: Standard_CString);
  }

export declare class V3d_CircularGrid extends Aspect_CircularGrid {
  constructor(aViewer: V3d_ViewerPointer, aColor: Quantity_Color, aTenthColor: Quantity_Color)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColors(aColor: Quantity_Color, aTenthColor: Quantity_Color): void;
  Display(): void;
  Erase(): void;
  IsDisplayed(): Standard_Boolean;
  GraphicValues(Radius: Standard_Real, OffSet: Standard_Real): void;
  SetGraphicValues(Radius: Standard_Real, OffSet: Standard_Real): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class V3d_PositionLight extends Graphic3d_CLight {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class V3d_DirectionalLight extends V3d_PositionLight {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetDirection_1(theDirection: V3d_TypeOfOrientation): void;
}

  export declare class V3d_DirectionalLight_1 extends V3d_DirectionalLight {
    constructor(theDirection: V3d_TypeOfOrientation, theColor: Quantity_Color, theIsHeadlight: Standard_Boolean);
  }

  export declare class V3d_DirectionalLight_2 extends V3d_DirectionalLight {
    constructor(theDirection: gp_Dir, theColor: Quantity_Color, theIsHeadlight: Standard_Boolean);
  }

export declare class V3d_Plane extends Standard_Transient {
  constructor(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real)
  SetPlane(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real): void;
  Display(theView: any, theColor: Quantity_Color): void;
  Erase(): void;
  Plane(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real): void;
  IsDisplayed(): Standard_Boolean;
  ClipPlane(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class V3d_PositionalLight extends V3d_PositionLight {
  constructor(thePos: gp_Pnt, theColor: Quantity_Color)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class V3d_RectangularGrid extends Aspect_RectangularGrid {
  constructor(aViewer: V3d_ViewerPointer, aColor: Quantity_Color, aTenthColor: Quantity_Color)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetColors(aColor: Quantity_Color, aTenthColor: Quantity_Color): void;
  Display(): void;
  Erase(): void;
  IsDisplayed(): Standard_Boolean;
  GraphicValues(XSize: Standard_Real, YSize: Standard_Real, OffSet: Standard_Real): void;
  SetGraphicValues(XSize: Standard_Real, YSize: Standard_Real, OffSet: Standard_Real): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class V3d_SpotLight extends V3d_PositionLight {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetDirection_1(theOrientation: V3d_TypeOfOrientation): void;
}

  export declare class V3d_SpotLight_1 extends V3d_SpotLight {
    constructor(thePos: gp_Pnt, theDirection: V3d_TypeOfOrientation, theColor: Quantity_Color);
  }

  export declare class V3d_SpotLight_2 extends V3d_SpotLight {
    constructor(thePos: gp_Pnt, theDirection: gp_Dir, theColor: Quantity_Color);
  }

export declare class V3d_UnMapped extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class V3d_UnMapped_1 extends V3d_UnMapped {
    constructor();
  }

  export declare class V3d_UnMapped_2 extends V3d_UnMapped {
    constructor(theMessage: Standard_CString);
  }

export declare class Handle_PrsMgr_PresentationManager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsMgr_PresentationManager): void;
  get(): PrsMgr_PresentationManager;
}

  export declare class Handle_PrsMgr_PresentationManager_1 extends Handle_PrsMgr_PresentationManager {
    constructor();
  }

  export declare class Handle_PrsMgr_PresentationManager_2 extends Handle_PrsMgr_PresentationManager {
    constructor(thePtr: PrsMgr_PresentationManager);
  }

  export declare class Handle_PrsMgr_PresentationManager_3 extends Handle_PrsMgr_PresentationManager {
    constructor(theHandle: Handle_PrsMgr_PresentationManager);
  }

  export declare class Handle_PrsMgr_PresentationManager_4 extends Handle_PrsMgr_PresentationManager {
    constructor(theHandle: Handle_PrsMgr_PresentationManager);
  }

export declare class Handle_Prs3d_Drawer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_Drawer): void;
  get(): Prs3d_Drawer;
}

  export declare class Handle_Prs3d_Drawer_1 extends Handle_Prs3d_Drawer {
    constructor();
  }

  export declare class Handle_Prs3d_Drawer_2 extends Handle_Prs3d_Drawer {
    constructor(thePtr: Prs3d_Drawer);
  }

  export declare class Handle_Prs3d_Drawer_3 extends Handle_Prs3d_Drawer {
    constructor(theHandle: Handle_Prs3d_Drawer);
  }

  export declare class Handle_Prs3d_Drawer_4 extends Handle_Prs3d_Drawer {
    constructor(theHandle: Handle_Prs3d_Drawer);
  }

export declare class Handle_PrsMgr_Presentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsMgr_Presentation): void;
  get(): PrsMgr_Presentation;
}

  export declare class Handle_PrsMgr_Presentation_1 extends Handle_PrsMgr_Presentation {
    constructor();
  }

  export declare class Handle_PrsMgr_Presentation_2 extends Handle_PrsMgr_Presentation {
    constructor(thePtr: PrsMgr_Presentation);
  }

  export declare class Handle_PrsMgr_Presentation_3 extends Handle_PrsMgr_Presentation {
    constructor(theHandle: Handle_PrsMgr_Presentation);
  }

  export declare class Handle_PrsMgr_Presentation_4 extends Handle_PrsMgr_Presentation {
    constructor(theHandle: Handle_PrsMgr_Presentation);
  }

export declare class Handle_PrsMgr_PresentableObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsMgr_PresentableObject): void;
  get(): PrsMgr_PresentableObject;
}

  export declare class Handle_PrsMgr_PresentableObject_1 extends Handle_PrsMgr_PresentableObject {
    constructor();
  }

  export declare class Handle_PrsMgr_PresentableObject_2 extends Handle_PrsMgr_PresentableObject {
    constructor(thePtr: PrsMgr_PresentableObject);
  }

  export declare class Handle_PrsMgr_PresentableObject_3 extends Handle_PrsMgr_PresentableObject {
    constructor(theHandle: Handle_PrsMgr_PresentableObject);
  }

  export declare class Handle_PrsMgr_PresentableObject_4 extends Handle_PrsMgr_PresentableObject {
    constructor(theHandle: Handle_PrsMgr_PresentableObject);
  }

export declare class Handle_SelectMgr_FrustumBuilder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_FrustumBuilder): void;
  get(): SelectMgr_FrustumBuilder;
}

  export declare class Handle_SelectMgr_FrustumBuilder_1 extends Handle_SelectMgr_FrustumBuilder {
    constructor();
  }

  export declare class Handle_SelectMgr_FrustumBuilder_2 extends Handle_SelectMgr_FrustumBuilder {
    constructor(thePtr: SelectMgr_FrustumBuilder);
  }

  export declare class Handle_SelectMgr_FrustumBuilder_3 extends Handle_SelectMgr_FrustumBuilder {
    constructor(theHandle: Handle_SelectMgr_FrustumBuilder);
  }

  export declare class Handle_SelectMgr_FrustumBuilder_4 extends Handle_SelectMgr_FrustumBuilder {
    constructor(theHandle: Handle_SelectMgr_FrustumBuilder);
  }

export declare class Handle_Select3D_SensitiveEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveEntity): void;
  get(): Select3D_SensitiveEntity;
}

  export declare class Handle_Select3D_SensitiveEntity_1 extends Handle_Select3D_SensitiveEntity {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveEntity_2 extends Handle_Select3D_SensitiveEntity {
    constructor(thePtr: Select3D_SensitiveEntity);
  }

  export declare class Handle_Select3D_SensitiveEntity_3 extends Handle_Select3D_SensitiveEntity {
    constructor(theHandle: Handle_Select3D_SensitiveEntity);
  }

  export declare class Handle_Select3D_SensitiveEntity_4 extends Handle_Select3D_SensitiveEntity {
    constructor(theHandle: Handle_Select3D_SensitiveEntity);
  }

export declare class Handle_SelectMgr_SensitiveEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_SensitiveEntity): void;
  get(): SelectMgr_SensitiveEntity;
}

  export declare class Handle_SelectMgr_SensitiveEntity_1 extends Handle_SelectMgr_SensitiveEntity {
    constructor();
  }

  export declare class Handle_SelectMgr_SensitiveEntity_2 extends Handle_SelectMgr_SensitiveEntity {
    constructor(thePtr: SelectMgr_SensitiveEntity);
  }

  export declare class Handle_SelectMgr_SensitiveEntity_3 extends Handle_SelectMgr_SensitiveEntity {
    constructor(theHandle: Handle_SelectMgr_SensitiveEntity);
  }

  export declare class Handle_SelectMgr_SensitiveEntity_4 extends Handle_SelectMgr_SensitiveEntity {
    constructor(theHandle: Handle_SelectMgr_SensitiveEntity);
  }

export declare class Handle_SelectMgr_Selection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_Selection): void;
  get(): SelectMgr_Selection;
}

  export declare class Handle_SelectMgr_Selection_1 extends Handle_SelectMgr_Selection {
    constructor();
  }

  export declare class Handle_SelectMgr_Selection_2 extends Handle_SelectMgr_Selection {
    constructor(thePtr: SelectMgr_Selection);
  }

  export declare class Handle_SelectMgr_Selection_3 extends Handle_SelectMgr_Selection {
    constructor(theHandle: Handle_SelectMgr_Selection);
  }

  export declare class Handle_SelectMgr_Selection_4 extends Handle_SelectMgr_Selection {
    constructor(theHandle: Handle_SelectMgr_Selection);
  }

export declare class Handle_SelectMgr_SelectableObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_SelectableObject): void;
  get(): SelectMgr_SelectableObject;
}

  export declare class Handle_SelectMgr_SelectableObject_1 extends Handle_SelectMgr_SelectableObject {
    constructor();
  }

  export declare class Handle_SelectMgr_SelectableObject_2 extends Handle_SelectMgr_SelectableObject {
    constructor(thePtr: SelectMgr_SelectableObject);
  }

  export declare class Handle_SelectMgr_SelectableObject_3 extends Handle_SelectMgr_SelectableObject {
    constructor(theHandle: Handle_SelectMgr_SelectableObject);
  }

  export declare class Handle_SelectMgr_SelectableObject_4 extends Handle_SelectMgr_SelectableObject {
    constructor(theHandle: Handle_SelectMgr_SelectableObject);
  }

export declare class Handle_SelectMgr_EntityOwner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_EntityOwner): void;
  get(): SelectMgr_EntityOwner;
}

  export declare class Handle_SelectMgr_EntityOwner_1 extends Handle_SelectMgr_EntityOwner {
    constructor();
  }

  export declare class Handle_SelectMgr_EntityOwner_2 extends Handle_SelectMgr_EntityOwner {
    constructor(thePtr: SelectMgr_EntityOwner);
  }

  export declare class Handle_SelectMgr_EntityOwner_3 extends Handle_SelectMgr_EntityOwner {
    constructor(theHandle: Handle_SelectMgr_EntityOwner);
  }

  export declare class Handle_SelectMgr_EntityOwner_4 extends Handle_SelectMgr_EntityOwner {
    constructor(theHandle: Handle_SelectMgr_EntityOwner);
  }

export declare class Handle_PrsDim_DimensionOwner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_DimensionOwner): void;
  get(): PrsDim_DimensionOwner;
}

  export declare class Handle_PrsDim_DimensionOwner_1 extends Handle_PrsDim_DimensionOwner {
    constructor();
  }

  export declare class Handle_PrsDim_DimensionOwner_2 extends Handle_PrsDim_DimensionOwner {
    constructor(thePtr: PrsDim_DimensionOwner);
  }

  export declare class Handle_PrsDim_DimensionOwner_3 extends Handle_PrsDim_DimensionOwner {
    constructor(theHandle: Handle_PrsDim_DimensionOwner);
  }

  export declare class Handle_PrsDim_DimensionOwner_4 extends Handle_PrsDim_DimensionOwner {
    constructor(theHandle: Handle_PrsDim_DimensionOwner);
  }

export declare class Handle_AIS_InteractiveObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_InteractiveObject): void;
  get(): AIS_InteractiveObject;
}

  export declare class Handle_AIS_InteractiveObject_1 extends Handle_AIS_InteractiveObject {
    constructor();
  }

  export declare class Handle_AIS_InteractiveObject_2 extends Handle_AIS_InteractiveObject {
    constructor(thePtr: AIS_InteractiveObject);
  }

  export declare class Handle_AIS_InteractiveObject_3 extends Handle_AIS_InteractiveObject {
    constructor(theHandle: Handle_AIS_InteractiveObject);
  }

  export declare class Handle_AIS_InteractiveObject_4 extends Handle_AIS_InteractiveObject {
    constructor(theHandle: Handle_AIS_InteractiveObject);
  }

export declare class Handle_Prs3d_BasicAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_BasicAspect): void;
  get(): Prs3d_BasicAspect;
}

  export declare class Handle_Prs3d_BasicAspect_1 extends Handle_Prs3d_BasicAspect {
    constructor();
  }

  export declare class Handle_Prs3d_BasicAspect_2 extends Handle_Prs3d_BasicAspect {
    constructor(thePtr: Prs3d_BasicAspect);
  }

  export declare class Handle_Prs3d_BasicAspect_3 extends Handle_Prs3d_BasicAspect {
    constructor(theHandle: Handle_Prs3d_BasicAspect);
  }

  export declare class Handle_Prs3d_BasicAspect_4 extends Handle_Prs3d_BasicAspect {
    constructor(theHandle: Handle_Prs3d_BasicAspect);
  }

export declare class Handle_Prs3d_ArrowAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_ArrowAspect): void;
  get(): Prs3d_ArrowAspect;
}

  export declare class Handle_Prs3d_ArrowAspect_1 extends Handle_Prs3d_ArrowAspect {
    constructor();
  }

  export declare class Handle_Prs3d_ArrowAspect_2 extends Handle_Prs3d_ArrowAspect {
    constructor(thePtr: Prs3d_ArrowAspect);
  }

  export declare class Handle_Prs3d_ArrowAspect_3 extends Handle_Prs3d_ArrowAspect {
    constructor(theHandle: Handle_Prs3d_ArrowAspect);
  }

  export declare class Handle_Prs3d_ArrowAspect_4 extends Handle_Prs3d_ArrowAspect {
    constructor(theHandle: Handle_Prs3d_ArrowAspect);
  }

export declare class Handle_Prs3d_LineAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_LineAspect): void;
  get(): Prs3d_LineAspect;
}

  export declare class Handle_Prs3d_LineAspect_1 extends Handle_Prs3d_LineAspect {
    constructor();
  }

  export declare class Handle_Prs3d_LineAspect_2 extends Handle_Prs3d_LineAspect {
    constructor(thePtr: Prs3d_LineAspect);
  }

  export declare class Handle_Prs3d_LineAspect_3 extends Handle_Prs3d_LineAspect {
    constructor(theHandle: Handle_Prs3d_LineAspect);
  }

  export declare class Handle_Prs3d_LineAspect_4 extends Handle_Prs3d_LineAspect {
    constructor(theHandle: Handle_Prs3d_LineAspect);
  }

export declare class Handle_Prs3d_TextAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_TextAspect): void;
  get(): Prs3d_TextAspect;
}

  export declare class Handle_Prs3d_TextAspect_1 extends Handle_Prs3d_TextAspect {
    constructor();
  }

  export declare class Handle_Prs3d_TextAspect_2 extends Handle_Prs3d_TextAspect {
    constructor(thePtr: Prs3d_TextAspect);
  }

  export declare class Handle_Prs3d_TextAspect_3 extends Handle_Prs3d_TextAspect {
    constructor(theHandle: Handle_Prs3d_TextAspect);
  }

  export declare class Handle_Prs3d_TextAspect_4 extends Handle_Prs3d_TextAspect {
    constructor(theHandle: Handle_Prs3d_TextAspect);
  }

export declare class Handle_Prs3d_DimensionAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_DimensionAspect): void;
  get(): Prs3d_DimensionAspect;
}

  export declare class Handle_Prs3d_DimensionAspect_1 extends Handle_Prs3d_DimensionAspect {
    constructor();
  }

  export declare class Handle_Prs3d_DimensionAspect_2 extends Handle_Prs3d_DimensionAspect {
    constructor(thePtr: Prs3d_DimensionAspect);
  }

  export declare class Handle_Prs3d_DimensionAspect_3 extends Handle_Prs3d_DimensionAspect {
    constructor(theHandle: Handle_Prs3d_DimensionAspect);
  }

  export declare class Handle_Prs3d_DimensionAspect_4 extends Handle_Prs3d_DimensionAspect {
    constructor(theHandle: Handle_Prs3d_DimensionAspect);
  }

export declare class Handle_PrsDim_Dimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_Dimension): void;
  get(): PrsDim_Dimension;
}

  export declare class Handle_PrsDim_Dimension_1 extends Handle_PrsDim_Dimension {
    constructor();
  }

  export declare class Handle_PrsDim_Dimension_2 extends Handle_PrsDim_Dimension {
    constructor(thePtr: PrsDim_Dimension);
  }

  export declare class Handle_PrsDim_Dimension_3 extends Handle_PrsDim_Dimension {
    constructor(theHandle: Handle_PrsDim_Dimension);
  }

  export declare class Handle_PrsDim_Dimension_4 extends Handle_PrsDim_Dimension {
    constructor(theHandle: Handle_PrsDim_Dimension);
  }

export declare class Handle_PrsDim_AngleDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_AngleDimension): void;
  get(): PrsDim_AngleDimension;
}

  export declare class Handle_PrsDim_AngleDimension_1 extends Handle_PrsDim_AngleDimension {
    constructor();
  }

  export declare class Handle_PrsDim_AngleDimension_2 extends Handle_PrsDim_AngleDimension {
    constructor(thePtr: PrsDim_AngleDimension);
  }

  export declare class Handle_PrsDim_AngleDimension_3 extends Handle_PrsDim_AngleDimension {
    constructor(theHandle: Handle_PrsDim_AngleDimension);
  }

  export declare class Handle_PrsDim_AngleDimension_4 extends Handle_PrsDim_AngleDimension {
    constructor(theHandle: Handle_PrsDim_AngleDimension);
  }

export declare class Handle_AIS_Animation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Animation): void;
  get(): AIS_Animation;
}

  export declare class Handle_AIS_Animation_1 extends Handle_AIS_Animation {
    constructor();
  }

  export declare class Handle_AIS_Animation_2 extends Handle_AIS_Animation {
    constructor(thePtr: AIS_Animation);
  }

  export declare class Handle_AIS_Animation_3 extends Handle_AIS_Animation {
    constructor(theHandle: Handle_AIS_Animation);
  }

  export declare class Handle_AIS_Animation_4 extends Handle_AIS_Animation {
    constructor(theHandle: Handle_AIS_Animation);
  }

export declare class Handle_AIS_AnimationCamera {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_AnimationCamera): void;
  get(): AIS_AnimationCamera;
}

  export declare class Handle_AIS_AnimationCamera_1 extends Handle_AIS_AnimationCamera {
    constructor();
  }

  export declare class Handle_AIS_AnimationCamera_2 extends Handle_AIS_AnimationCamera {
    constructor(thePtr: AIS_AnimationCamera);
  }

  export declare class Handle_AIS_AnimationCamera_3 extends Handle_AIS_AnimationCamera {
    constructor(theHandle: Handle_AIS_AnimationCamera);
  }

  export declare class Handle_AIS_AnimationCamera_4 extends Handle_AIS_AnimationCamera {
    constructor(theHandle: Handle_AIS_AnimationCamera);
  }

export declare class Handle_AIS_GlobalStatus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_GlobalStatus): void;
  get(): AIS_GlobalStatus;
}

  export declare class Handle_AIS_GlobalStatus_1 extends Handle_AIS_GlobalStatus {
    constructor();
  }

  export declare class Handle_AIS_GlobalStatus_2 extends Handle_AIS_GlobalStatus {
    constructor(thePtr: AIS_GlobalStatus);
  }

  export declare class Handle_AIS_GlobalStatus_3 extends Handle_AIS_GlobalStatus {
    constructor(theHandle: Handle_AIS_GlobalStatus);
  }

  export declare class Handle_AIS_GlobalStatus_4 extends Handle_AIS_GlobalStatus {
    constructor(theHandle: Handle_AIS_GlobalStatus);
  }

export declare class Handle_AIS_Selection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Selection): void;
  get(): AIS_Selection;
}

  export declare class Handle_AIS_Selection_1 extends Handle_AIS_Selection {
    constructor();
  }

  export declare class Handle_AIS_Selection_2 extends Handle_AIS_Selection {
    constructor(thePtr: AIS_Selection);
  }

  export declare class Handle_AIS_Selection_3 extends Handle_AIS_Selection {
    constructor(theHandle: Handle_AIS_Selection);
  }

  export declare class Handle_AIS_Selection_4 extends Handle_AIS_Selection {
    constructor(theHandle: Handle_AIS_Selection);
  }

export declare class Handle_SelectMgr_Filter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_Filter): void;
  get(): SelectMgr_Filter;
}

  export declare class Handle_SelectMgr_Filter_1 extends Handle_SelectMgr_Filter {
    constructor();
  }

  export declare class Handle_SelectMgr_Filter_2 extends Handle_SelectMgr_Filter {
    constructor(thePtr: SelectMgr_Filter);
  }

  export declare class Handle_SelectMgr_Filter_3 extends Handle_SelectMgr_Filter {
    constructor(theHandle: Handle_SelectMgr_Filter);
  }

  export declare class Handle_SelectMgr_Filter_4 extends Handle_SelectMgr_Filter {
    constructor(theHandle: Handle_SelectMgr_Filter);
  }

export declare class Handle_SelectMgr_CompositionFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_CompositionFilter): void;
  get(): SelectMgr_CompositionFilter;
}

  export declare class Handle_SelectMgr_CompositionFilter_1 extends Handle_SelectMgr_CompositionFilter {
    constructor();
  }

  export declare class Handle_SelectMgr_CompositionFilter_2 extends Handle_SelectMgr_CompositionFilter {
    constructor(thePtr: SelectMgr_CompositionFilter);
  }

  export declare class Handle_SelectMgr_CompositionFilter_3 extends Handle_SelectMgr_CompositionFilter {
    constructor(theHandle: Handle_SelectMgr_CompositionFilter);
  }

  export declare class Handle_SelectMgr_CompositionFilter_4 extends Handle_SelectMgr_CompositionFilter {
    constructor(theHandle: Handle_SelectMgr_CompositionFilter);
  }

export declare class Handle_SelectMgr_AndOrFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_AndOrFilter): void;
  get(): SelectMgr_AndOrFilter;
}

  export declare class Handle_SelectMgr_AndOrFilter_1 extends Handle_SelectMgr_AndOrFilter {
    constructor();
  }

  export declare class Handle_SelectMgr_AndOrFilter_2 extends Handle_SelectMgr_AndOrFilter {
    constructor(thePtr: SelectMgr_AndOrFilter);
  }

  export declare class Handle_SelectMgr_AndOrFilter_3 extends Handle_SelectMgr_AndOrFilter {
    constructor(theHandle: Handle_SelectMgr_AndOrFilter);
  }

  export declare class Handle_SelectMgr_AndOrFilter_4 extends Handle_SelectMgr_AndOrFilter {
    constructor(theHandle: Handle_SelectMgr_AndOrFilter);
  }

export declare class Handle_SelectMgr_ViewerSelector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_ViewerSelector): void;
  get(): SelectMgr_ViewerSelector;
}

  export declare class Handle_SelectMgr_ViewerSelector_1 extends Handle_SelectMgr_ViewerSelector {
    constructor();
  }

  export declare class Handle_SelectMgr_ViewerSelector_2 extends Handle_SelectMgr_ViewerSelector {
    constructor(thePtr: SelectMgr_ViewerSelector);
  }

  export declare class Handle_SelectMgr_ViewerSelector_3 extends Handle_SelectMgr_ViewerSelector {
    constructor(theHandle: Handle_SelectMgr_ViewerSelector);
  }

  export declare class Handle_SelectMgr_ViewerSelector_4 extends Handle_SelectMgr_ViewerSelector {
    constructor(theHandle: Handle_SelectMgr_ViewerSelector);
  }

export declare class Handle_SelectMgr_ViewerSelector3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_ViewerSelector3d): void;
  get(): SelectMgr_ViewerSelector3d;
}

  export declare class Handle_SelectMgr_ViewerSelector3d_1 extends Handle_SelectMgr_ViewerSelector3d {
    constructor();
  }

  export declare class Handle_SelectMgr_ViewerSelector3d_2 extends Handle_SelectMgr_ViewerSelector3d {
    constructor(thePtr: SelectMgr_ViewerSelector3d);
  }

  export declare class Handle_SelectMgr_ViewerSelector3d_3 extends Handle_SelectMgr_ViewerSelector3d {
    constructor(theHandle: Handle_SelectMgr_ViewerSelector3d);
  }

  export declare class Handle_SelectMgr_ViewerSelector3d_4 extends Handle_SelectMgr_ViewerSelector3d {
    constructor(theHandle: Handle_SelectMgr_ViewerSelector3d);
  }

export declare class Handle_AIS_InteractiveContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_InteractiveContext): void;
  get(): AIS_InteractiveContext;
}

  export declare class Handle_AIS_InteractiveContext_1 extends Handle_AIS_InteractiveContext {
    constructor();
  }

  export declare class Handle_AIS_InteractiveContext_2 extends Handle_AIS_InteractiveContext {
    constructor(thePtr: AIS_InteractiveContext);
  }

  export declare class Handle_AIS_InteractiveContext_3 extends Handle_AIS_InteractiveContext {
    constructor(theHandle: Handle_AIS_InteractiveContext);
  }

  export declare class Handle_AIS_InteractiveContext_4 extends Handle_AIS_InteractiveContext {
    constructor(theHandle: Handle_AIS_InteractiveContext);
  }

export declare class Handle_AIS_AnimationObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_AnimationObject): void;
  get(): AIS_AnimationObject;
}

  export declare class Handle_AIS_AnimationObject_1 extends Handle_AIS_AnimationObject {
    constructor();
  }

  export declare class Handle_AIS_AnimationObject_2 extends Handle_AIS_AnimationObject {
    constructor(thePtr: AIS_AnimationObject);
  }

  export declare class Handle_AIS_AnimationObject_3 extends Handle_AIS_AnimationObject {
    constructor(theHandle: Handle_AIS_AnimationObject);
  }

  export declare class Handle_AIS_AnimationObject_4 extends Handle_AIS_AnimationObject {
    constructor(theHandle: Handle_AIS_AnimationObject);
  }

export declare class Handle_AIS_AttributeFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_AttributeFilter): void;
  get(): AIS_AttributeFilter;
}

  export declare class Handle_AIS_AttributeFilter_1 extends Handle_AIS_AttributeFilter {
    constructor();
  }

  export declare class Handle_AIS_AttributeFilter_2 extends Handle_AIS_AttributeFilter {
    constructor(thePtr: AIS_AttributeFilter);
  }

  export declare class Handle_AIS_AttributeFilter_3 extends Handle_AIS_AttributeFilter {
    constructor(theHandle: Handle_AIS_AttributeFilter);
  }

  export declare class Handle_AIS_AttributeFilter_4 extends Handle_AIS_AttributeFilter {
    constructor(theHandle: Handle_AIS_AttributeFilter);
  }

export declare class Handle_AIS_Axis {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Axis): void;
  get(): AIS_Axis;
}

  export declare class Handle_AIS_Axis_1 extends Handle_AIS_Axis {
    constructor();
  }

  export declare class Handle_AIS_Axis_2 extends Handle_AIS_Axis {
    constructor(thePtr: AIS_Axis);
  }

  export declare class Handle_AIS_Axis_3 extends Handle_AIS_Axis {
    constructor(theHandle: Handle_AIS_Axis);
  }

  export declare class Handle_AIS_Axis_4 extends Handle_AIS_Axis {
    constructor(theHandle: Handle_AIS_Axis);
  }

export declare class Handle_AIS_BadEdgeFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_BadEdgeFilter): void;
  get(): AIS_BadEdgeFilter;
}

  export declare class Handle_AIS_BadEdgeFilter_1 extends Handle_AIS_BadEdgeFilter {
    constructor();
  }

  export declare class Handle_AIS_BadEdgeFilter_2 extends Handle_AIS_BadEdgeFilter {
    constructor(thePtr: AIS_BadEdgeFilter);
  }

  export declare class Handle_AIS_BadEdgeFilter_3 extends Handle_AIS_BadEdgeFilter {
    constructor(theHandle: Handle_AIS_BadEdgeFilter);
  }

  export declare class Handle_AIS_BadEdgeFilter_4 extends Handle_AIS_BadEdgeFilter {
    constructor(theHandle: Handle_AIS_BadEdgeFilter);
  }

export declare class Handle_AIS_C0RegularityFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_C0RegularityFilter): void;
  get(): AIS_C0RegularityFilter;
}

  export declare class Handle_AIS_C0RegularityFilter_1 extends Handle_AIS_C0RegularityFilter {
    constructor();
  }

  export declare class Handle_AIS_C0RegularityFilter_2 extends Handle_AIS_C0RegularityFilter {
    constructor(thePtr: AIS_C0RegularityFilter);
  }

  export declare class Handle_AIS_C0RegularityFilter_3 extends Handle_AIS_C0RegularityFilter {
    constructor(theHandle: Handle_AIS_C0RegularityFilter);
  }

  export declare class Handle_AIS_C0RegularityFilter_4 extends Handle_AIS_C0RegularityFilter {
    constructor(theHandle: Handle_AIS_C0RegularityFilter);
  }

export declare class Handle_PrsDim_Relation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_Relation): void;
  get(): PrsDim_Relation;
}

  export declare class Handle_PrsDim_Relation_1 extends Handle_PrsDim_Relation {
    constructor();
  }

  export declare class Handle_PrsDim_Relation_2 extends Handle_PrsDim_Relation {
    constructor(thePtr: PrsDim_Relation);
  }

  export declare class Handle_PrsDim_Relation_3 extends Handle_PrsDim_Relation {
    constructor(theHandle: Handle_PrsDim_Relation);
  }

  export declare class Handle_PrsDim_Relation_4 extends Handle_PrsDim_Relation {
    constructor(theHandle: Handle_PrsDim_Relation);
  }

export declare class Handle_PrsDim_Chamf2dDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_Chamf2dDimension): void;
  get(): PrsDim_Chamf2dDimension;
}

  export declare class Handle_PrsDim_Chamf2dDimension_1 extends Handle_PrsDim_Chamf2dDimension {
    constructor();
  }

  export declare class Handle_PrsDim_Chamf2dDimension_2 extends Handle_PrsDim_Chamf2dDimension {
    constructor(thePtr: PrsDim_Chamf2dDimension);
  }

  export declare class Handle_PrsDim_Chamf2dDimension_3 extends Handle_PrsDim_Chamf2dDimension {
    constructor(theHandle: Handle_PrsDim_Chamf2dDimension);
  }

  export declare class Handle_PrsDim_Chamf2dDimension_4 extends Handle_PrsDim_Chamf2dDimension {
    constructor(theHandle: Handle_PrsDim_Chamf2dDimension);
  }

export declare class Handle_PrsDim_Chamf3dDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_Chamf3dDimension): void;
  get(): PrsDim_Chamf3dDimension;
}

  export declare class Handle_PrsDim_Chamf3dDimension_1 extends Handle_PrsDim_Chamf3dDimension {
    constructor();
  }

  export declare class Handle_PrsDim_Chamf3dDimension_2 extends Handle_PrsDim_Chamf3dDimension {
    constructor(thePtr: PrsDim_Chamf3dDimension);
  }

  export declare class Handle_PrsDim_Chamf3dDimension_3 extends Handle_PrsDim_Chamf3dDimension {
    constructor(theHandle: Handle_PrsDim_Chamf3dDimension);
  }

  export declare class Handle_PrsDim_Chamf3dDimension_4 extends Handle_PrsDim_Chamf3dDimension {
    constructor(theHandle: Handle_PrsDim_Chamf3dDimension);
  }

export declare class Handle_AIS_Circle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Circle): void;
  get(): AIS_Circle;
}

  export declare class Handle_AIS_Circle_1 extends Handle_AIS_Circle {
    constructor();
  }

  export declare class Handle_AIS_Circle_2 extends Handle_AIS_Circle {
    constructor(thePtr: AIS_Circle);
  }

  export declare class Handle_AIS_Circle_3 extends Handle_AIS_Circle {
    constructor(theHandle: Handle_AIS_Circle);
  }

  export declare class Handle_AIS_Circle_4 extends Handle_AIS_Circle {
    constructor(theHandle: Handle_AIS_Circle);
  }

export declare class Handle_AIS_ColorScale {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_ColorScale): void;
  get(): AIS_ColorScale;
}

  export declare class Handle_AIS_ColorScale_1 extends Handle_AIS_ColorScale {
    constructor();
  }

  export declare class Handle_AIS_ColorScale_2 extends Handle_AIS_ColorScale {
    constructor(thePtr: AIS_ColorScale);
  }

  export declare class Handle_AIS_ColorScale_3 extends Handle_AIS_ColorScale {
    constructor(theHandle: Handle_AIS_ColorScale);
  }

  export declare class Handle_AIS_ColorScale_4 extends Handle_AIS_ColorScale {
    constructor(theHandle: Handle_AIS_ColorScale);
  }

export declare class Handle_AIS_ColoredDrawer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_ColoredDrawer): void;
  get(): AIS_ColoredDrawer;
}

  export declare class Handle_AIS_ColoredDrawer_1 extends Handle_AIS_ColoredDrawer {
    constructor();
  }

  export declare class Handle_AIS_ColoredDrawer_2 extends Handle_AIS_ColoredDrawer {
    constructor(thePtr: AIS_ColoredDrawer);
  }

  export declare class Handle_AIS_ColoredDrawer_3 extends Handle_AIS_ColoredDrawer {
    constructor(theHandle: Handle_AIS_ColoredDrawer);
  }

  export declare class Handle_AIS_ColoredDrawer_4 extends Handle_AIS_ColoredDrawer {
    constructor(theHandle: Handle_AIS_ColoredDrawer);
  }

export declare class Handle_AIS_Shape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Shape): void;
  get(): AIS_Shape;
}

  export declare class Handle_AIS_Shape_1 extends Handle_AIS_Shape {
    constructor();
  }

  export declare class Handle_AIS_Shape_2 extends Handle_AIS_Shape {
    constructor(thePtr: AIS_Shape);
  }

  export declare class Handle_AIS_Shape_3 extends Handle_AIS_Shape {
    constructor(theHandle: Handle_AIS_Shape);
  }

  export declare class Handle_AIS_Shape_4 extends Handle_AIS_Shape {
    constructor(theHandle: Handle_AIS_Shape);
  }

export declare class Handle_AIS_ColoredShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_ColoredShape): void;
  get(): AIS_ColoredShape;
}

  export declare class Handle_AIS_ColoredShape_1 extends Handle_AIS_ColoredShape {
    constructor();
  }

  export declare class Handle_AIS_ColoredShape_2 extends Handle_AIS_ColoredShape {
    constructor(thePtr: AIS_ColoredShape);
  }

  export declare class Handle_AIS_ColoredShape_3 extends Handle_AIS_ColoredShape {
    constructor(theHandle: Handle_AIS_ColoredShape);
  }

  export declare class Handle_AIS_ColoredShape_4 extends Handle_AIS_ColoredShape {
    constructor(theHandle: Handle_AIS_ColoredShape);
  }

export declare class Handle_PrsDim_ConcentricRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_ConcentricRelation): void;
  get(): PrsDim_ConcentricRelation;
}

  export declare class Handle_PrsDim_ConcentricRelation_1 extends Handle_PrsDim_ConcentricRelation {
    constructor();
  }

  export declare class Handle_PrsDim_ConcentricRelation_2 extends Handle_PrsDim_ConcentricRelation {
    constructor(thePtr: PrsDim_ConcentricRelation);
  }

  export declare class Handle_PrsDim_ConcentricRelation_3 extends Handle_PrsDim_ConcentricRelation {
    constructor(theHandle: Handle_PrsDim_ConcentricRelation);
  }

  export declare class Handle_PrsDim_ConcentricRelation_4 extends Handle_PrsDim_ConcentricRelation {
    constructor(theHandle: Handle_PrsDim_ConcentricRelation);
  }

export declare class Handle_AIS_ConnectedInteractive {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_ConnectedInteractive): void;
  get(): AIS_ConnectedInteractive;
}

  export declare class Handle_AIS_ConnectedInteractive_1 extends Handle_AIS_ConnectedInteractive {
    constructor();
  }

  export declare class Handle_AIS_ConnectedInteractive_2 extends Handle_AIS_ConnectedInteractive {
    constructor(thePtr: AIS_ConnectedInteractive);
  }

  export declare class Handle_AIS_ConnectedInteractive_3 extends Handle_AIS_ConnectedInteractive {
    constructor(theHandle: Handle_AIS_ConnectedInteractive);
  }

  export declare class Handle_AIS_ConnectedInteractive_4 extends Handle_AIS_ConnectedInteractive {
    constructor(theHandle: Handle_AIS_ConnectedInteractive);
  }

export declare class AIS_DataMapofIntegerListOfinteractive extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: AIS_DataMapofIntegerListOfinteractive): void;
  Assign(theOther: AIS_DataMapofIntegerListOfinteractive): AIS_DataMapofIntegerListOfinteractive;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: AIS_ListOfInteractive): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: AIS_ListOfInteractive): AIS_ListOfInteractive;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): AIS_ListOfInteractive;
  Find_1(theKey: Standard_Integer): AIS_ListOfInteractive;
  Find_2(theKey: Standard_Integer, theValue: AIS_ListOfInteractive): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): AIS_ListOfInteractive;
  ChangeFind(theKey: Standard_Integer): AIS_ListOfInteractive;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class AIS_DataMapofIntegerListOfinteractive_1 extends AIS_DataMapofIntegerListOfinteractive {
    constructor();
  }

  export declare class AIS_DataMapofIntegerListOfinteractive_2 extends AIS_DataMapofIntegerListOfinteractive {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class AIS_DataMapofIntegerListOfinteractive_3 extends AIS_DataMapofIntegerListOfinteractive {
    constructor(theOther: AIS_DataMapofIntegerListOfinteractive);
  }

export declare class Handle_PrsDim_DiameterDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_DiameterDimension): void;
  get(): PrsDim_DiameterDimension;
}

  export declare class Handle_PrsDim_DiameterDimension_1 extends Handle_PrsDim_DiameterDimension {
    constructor();
  }

  export declare class Handle_PrsDim_DiameterDimension_2 extends Handle_PrsDim_DiameterDimension {
    constructor(thePtr: PrsDim_DiameterDimension);
  }

  export declare class Handle_PrsDim_DiameterDimension_3 extends Handle_PrsDim_DiameterDimension {
    constructor(theHandle: Handle_PrsDim_DiameterDimension);
  }

  export declare class Handle_PrsDim_DiameterDimension_4 extends Handle_PrsDim_DiameterDimension {
    constructor(theHandle: Handle_PrsDim_DiameterDimension);
  }

export declare class Handle_PrsDim_EllipseRadiusDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_EllipseRadiusDimension): void;
  get(): PrsDim_EllipseRadiusDimension;
}

  export declare class Handle_PrsDim_EllipseRadiusDimension_1 extends Handle_PrsDim_EllipseRadiusDimension {
    constructor();
  }

  export declare class Handle_PrsDim_EllipseRadiusDimension_2 extends Handle_PrsDim_EllipseRadiusDimension {
    constructor(thePtr: PrsDim_EllipseRadiusDimension);
  }

  export declare class Handle_PrsDim_EllipseRadiusDimension_3 extends Handle_PrsDim_EllipseRadiusDimension {
    constructor(theHandle: Handle_PrsDim_EllipseRadiusDimension);
  }

  export declare class Handle_PrsDim_EllipseRadiusDimension_4 extends Handle_PrsDim_EllipseRadiusDimension {
    constructor(theHandle: Handle_PrsDim_EllipseRadiusDimension);
  }

export declare class Handle_PrsDim_EqualDistanceRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_EqualDistanceRelation): void;
  get(): PrsDim_EqualDistanceRelation;
}

  export declare class Handle_PrsDim_EqualDistanceRelation_1 extends Handle_PrsDim_EqualDistanceRelation {
    constructor();
  }

  export declare class Handle_PrsDim_EqualDistanceRelation_2 extends Handle_PrsDim_EqualDistanceRelation {
    constructor(thePtr: PrsDim_EqualDistanceRelation);
  }

  export declare class Handle_PrsDim_EqualDistanceRelation_3 extends Handle_PrsDim_EqualDistanceRelation {
    constructor(theHandle: Handle_PrsDim_EqualDistanceRelation);
  }

  export declare class Handle_PrsDim_EqualDistanceRelation_4 extends Handle_PrsDim_EqualDistanceRelation {
    constructor(theHandle: Handle_PrsDim_EqualDistanceRelation);
  }

export declare class Handle_PrsDim_EqualRadiusRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_EqualRadiusRelation): void;
  get(): PrsDim_EqualRadiusRelation;
}

  export declare class Handle_PrsDim_EqualRadiusRelation_1 extends Handle_PrsDim_EqualRadiusRelation {
    constructor();
  }

  export declare class Handle_PrsDim_EqualRadiusRelation_2 extends Handle_PrsDim_EqualRadiusRelation {
    constructor(thePtr: PrsDim_EqualRadiusRelation);
  }

  export declare class Handle_PrsDim_EqualRadiusRelation_3 extends Handle_PrsDim_EqualRadiusRelation {
    constructor(theHandle: Handle_PrsDim_EqualRadiusRelation);
  }

  export declare class Handle_PrsDim_EqualRadiusRelation_4 extends Handle_PrsDim_EqualRadiusRelation {
    constructor(theHandle: Handle_PrsDim_EqualRadiusRelation);
  }

export declare class Handle_AIS_ExclusionFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_ExclusionFilter): void;
  get(): AIS_ExclusionFilter;
}

  export declare class Handle_AIS_ExclusionFilter_1 extends Handle_AIS_ExclusionFilter {
    constructor();
  }

  export declare class Handle_AIS_ExclusionFilter_2 extends Handle_AIS_ExclusionFilter {
    constructor(thePtr: AIS_ExclusionFilter);
  }

  export declare class Handle_AIS_ExclusionFilter_3 extends Handle_AIS_ExclusionFilter {
    constructor(theHandle: Handle_AIS_ExclusionFilter);
  }

  export declare class Handle_AIS_ExclusionFilter_4 extends Handle_AIS_ExclusionFilter {
    constructor(theHandle: Handle_AIS_ExclusionFilter);
  }

export declare class Handle_PrsDim_FixRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_FixRelation): void;
  get(): PrsDim_FixRelation;
}

  export declare class Handle_PrsDim_FixRelation_1 extends Handle_PrsDim_FixRelation {
    constructor();
  }

  export declare class Handle_PrsDim_FixRelation_2 extends Handle_PrsDim_FixRelation {
    constructor(thePtr: PrsDim_FixRelation);
  }

  export declare class Handle_PrsDim_FixRelation_3 extends Handle_PrsDim_FixRelation {
    constructor(theHandle: Handle_PrsDim_FixRelation);
  }

  export declare class Handle_PrsDim_FixRelation_4 extends Handle_PrsDim_FixRelation {
    constructor(theHandle: Handle_PrsDim_FixRelation);
  }

export declare class Handle_PrsDim_IdenticRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_IdenticRelation): void;
  get(): PrsDim_IdenticRelation;
}

  export declare class Handle_PrsDim_IdenticRelation_1 extends Handle_PrsDim_IdenticRelation {
    constructor();
  }

  export declare class Handle_PrsDim_IdenticRelation_2 extends Handle_PrsDim_IdenticRelation {
    constructor(thePtr: PrsDim_IdenticRelation);
  }

  export declare class Handle_PrsDim_IdenticRelation_3 extends Handle_PrsDim_IdenticRelation {
    constructor(theHandle: Handle_PrsDim_IdenticRelation);
  }

  export declare class Handle_PrsDim_IdenticRelation_4 extends Handle_PrsDim_IdenticRelation {
    constructor(theHandle: Handle_PrsDim_IdenticRelation);
  }

export declare class Handle_PrsDim_LengthDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_LengthDimension): void;
  get(): PrsDim_LengthDimension;
}

  export declare class Handle_PrsDim_LengthDimension_1 extends Handle_PrsDim_LengthDimension {
    constructor();
  }

  export declare class Handle_PrsDim_LengthDimension_2 extends Handle_PrsDim_LengthDimension {
    constructor(thePtr: PrsDim_LengthDimension);
  }

  export declare class Handle_PrsDim_LengthDimension_3 extends Handle_PrsDim_LengthDimension {
    constructor(theHandle: Handle_PrsDim_LengthDimension);
  }

  export declare class Handle_PrsDim_LengthDimension_4 extends Handle_PrsDim_LengthDimension {
    constructor(theHandle: Handle_PrsDim_LengthDimension);
  }

export declare class Handle_AIS_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Line): void;
  get(): AIS_Line;
}

  export declare class Handle_AIS_Line_1 extends Handle_AIS_Line {
    constructor();
  }

  export declare class Handle_AIS_Line_2 extends Handle_AIS_Line {
    constructor(thePtr: AIS_Line);
  }

  export declare class Handle_AIS_Line_3 extends Handle_AIS_Line {
    constructor(theHandle: Handle_AIS_Line);
  }

  export declare class Handle_AIS_Line_4 extends Handle_AIS_Line {
    constructor(theHandle: Handle_AIS_Line);
  }

export declare class Handle_Prs3d_ShadingAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_ShadingAspect): void;
  get(): Prs3d_ShadingAspect;
}

  export declare class Handle_Prs3d_ShadingAspect_1 extends Handle_Prs3d_ShadingAspect {
    constructor();
  }

  export declare class Handle_Prs3d_ShadingAspect_2 extends Handle_Prs3d_ShadingAspect {
    constructor(thePtr: Prs3d_ShadingAspect);
  }

  export declare class Handle_Prs3d_ShadingAspect_3 extends Handle_Prs3d_ShadingAspect {
    constructor(theHandle: Handle_Prs3d_ShadingAspect);
  }

  export declare class Handle_Prs3d_ShadingAspect_4 extends Handle_Prs3d_ShadingAspect {
    constructor(theHandle: Handle_Prs3d_ShadingAspect);
  }

export declare class Handle_V3d_Trihedron {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_Trihedron): void;
  get(): V3d_Trihedron;
}

  export declare class Handle_V3d_Trihedron_1 extends Handle_V3d_Trihedron {
    constructor();
  }

  export declare class Handle_V3d_Trihedron_2 extends Handle_V3d_Trihedron {
    constructor(thePtr: V3d_Trihedron);
  }

  export declare class Handle_V3d_Trihedron_3 extends Handle_V3d_Trihedron {
    constructor(theHandle: Handle_V3d_Trihedron);
  }

  export declare class Handle_V3d_Trihedron_4 extends Handle_V3d_Trihedron {
    constructor(theHandle: Handle_V3d_Trihedron);
  }

export declare class Handle_V3d_Viewer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_Viewer): void;
  get(): V3d_Viewer;
}

  export declare class Handle_V3d_Viewer_1 extends Handle_V3d_Viewer {
    constructor();
  }

  export declare class Handle_V3d_Viewer_2 extends Handle_V3d_Viewer {
    constructor(thePtr: V3d_Viewer);
  }

  export declare class Handle_V3d_Viewer_3 extends Handle_V3d_Viewer {
    constructor(theHandle: Handle_V3d_Viewer);
  }

  export declare class Handle_V3d_Viewer_4 extends Handle_V3d_Viewer {
    constructor(theHandle: Handle_V3d_Viewer);
  }

export declare class Handle_V3d_View {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_View): void;
  get(): V3d_View;
}

  export declare class Handle_V3d_View_1 extends Handle_V3d_View {
    constructor();
  }

  export declare class Handle_V3d_View_2 extends Handle_V3d_View {
    constructor(thePtr: V3d_View);
  }

  export declare class Handle_V3d_View_3 extends Handle_V3d_View {
    constructor(theHandle: Handle_V3d_View);
  }

  export declare class Handle_V3d_View_4 extends Handle_V3d_View {
    constructor(theHandle: Handle_V3d_View);
  }

export declare class Handle_AIS_ManipulatorObjectSequence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_ManipulatorObjectSequence): void;
  get(): AIS_ManipulatorObjectSequence;
}

  export declare class Handle_AIS_ManipulatorObjectSequence_1 extends Handle_AIS_ManipulatorObjectSequence {
    constructor();
  }

  export declare class Handle_AIS_ManipulatorObjectSequence_2 extends Handle_AIS_ManipulatorObjectSequence {
    constructor(thePtr: AIS_ManipulatorObjectSequence);
  }

  export declare class Handle_AIS_ManipulatorObjectSequence_3 extends Handle_AIS_ManipulatorObjectSequence {
    constructor(theHandle: Handle_AIS_ManipulatorObjectSequence);
  }

  export declare class Handle_AIS_ManipulatorObjectSequence_4 extends Handle_AIS_ManipulatorObjectSequence {
    constructor(theHandle: Handle_AIS_ManipulatorObjectSequence);
  }

export declare class Handle_AIS_Manipulator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Manipulator): void;
  get(): AIS_Manipulator;
}

  export declare class Handle_AIS_Manipulator_1 extends Handle_AIS_Manipulator {
    constructor();
  }

  export declare class Handle_AIS_Manipulator_2 extends Handle_AIS_Manipulator {
    constructor(thePtr: AIS_Manipulator);
  }

  export declare class Handle_AIS_Manipulator_3 extends Handle_AIS_Manipulator {
    constructor(theHandle: Handle_AIS_Manipulator);
  }

  export declare class Handle_AIS_Manipulator_4 extends Handle_AIS_Manipulator {
    constructor(theHandle: Handle_AIS_Manipulator);
  }

export declare class Handle_AIS_ManipulatorOwner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_ManipulatorOwner): void;
  get(): AIS_ManipulatorOwner;
}

  export declare class Handle_AIS_ManipulatorOwner_1 extends Handle_AIS_ManipulatorOwner {
    constructor();
  }

  export declare class Handle_AIS_ManipulatorOwner_2 extends Handle_AIS_ManipulatorOwner {
    constructor(thePtr: AIS_ManipulatorOwner);
  }

  export declare class Handle_AIS_ManipulatorOwner_3 extends Handle_AIS_ManipulatorOwner {
    constructor(theHandle: Handle_AIS_ManipulatorOwner);
  }

  export declare class Handle_AIS_ManipulatorOwner_4 extends Handle_AIS_ManipulatorOwner {
    constructor(theHandle: Handle_AIS_ManipulatorOwner);
  }

export declare class Handle_PrsDim_MaxRadiusDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_MaxRadiusDimension): void;
  get(): PrsDim_MaxRadiusDimension;
}

  export declare class Handle_PrsDim_MaxRadiusDimension_1 extends Handle_PrsDim_MaxRadiusDimension {
    constructor();
  }

  export declare class Handle_PrsDim_MaxRadiusDimension_2 extends Handle_PrsDim_MaxRadiusDimension {
    constructor(thePtr: PrsDim_MaxRadiusDimension);
  }

  export declare class Handle_PrsDim_MaxRadiusDimension_3 extends Handle_PrsDim_MaxRadiusDimension {
    constructor(theHandle: Handle_PrsDim_MaxRadiusDimension);
  }

  export declare class Handle_PrsDim_MaxRadiusDimension_4 extends Handle_PrsDim_MaxRadiusDimension {
    constructor(theHandle: Handle_PrsDim_MaxRadiusDimension);
  }

export declare class Handle_PrsDim_MidPointRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_MidPointRelation): void;
  get(): PrsDim_MidPointRelation;
}

  export declare class Handle_PrsDim_MidPointRelation_1 extends Handle_PrsDim_MidPointRelation {
    constructor();
  }

  export declare class Handle_PrsDim_MidPointRelation_2 extends Handle_PrsDim_MidPointRelation {
    constructor(thePtr: PrsDim_MidPointRelation);
  }

  export declare class Handle_PrsDim_MidPointRelation_3 extends Handle_PrsDim_MidPointRelation {
    constructor(theHandle: Handle_PrsDim_MidPointRelation);
  }

  export declare class Handle_PrsDim_MidPointRelation_4 extends Handle_PrsDim_MidPointRelation {
    constructor(theHandle: Handle_PrsDim_MidPointRelation);
  }

export declare class Handle_PrsDim_MinRadiusDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_MinRadiusDimension): void;
  get(): PrsDim_MinRadiusDimension;
}

  export declare class Handle_PrsDim_MinRadiusDimension_1 extends Handle_PrsDim_MinRadiusDimension {
    constructor();
  }

  export declare class Handle_PrsDim_MinRadiusDimension_2 extends Handle_PrsDim_MinRadiusDimension {
    constructor(thePtr: PrsDim_MinRadiusDimension);
  }

  export declare class Handle_PrsDim_MinRadiusDimension_3 extends Handle_PrsDim_MinRadiusDimension {
    constructor(theHandle: Handle_PrsDim_MinRadiusDimension);
  }

  export declare class Handle_PrsDim_MinRadiusDimension_4 extends Handle_PrsDim_MinRadiusDimension {
    constructor(theHandle: Handle_PrsDim_MinRadiusDimension);
  }

export declare class Handle_AIS_MultipleConnectedInteractive {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_MultipleConnectedInteractive): void;
  get(): AIS_MultipleConnectedInteractive;
}

  export declare class Handle_AIS_MultipleConnectedInteractive_1 extends Handle_AIS_MultipleConnectedInteractive {
    constructor();
  }

  export declare class Handle_AIS_MultipleConnectedInteractive_2 extends Handle_AIS_MultipleConnectedInteractive {
    constructor(thePtr: AIS_MultipleConnectedInteractive);
  }

  export declare class Handle_AIS_MultipleConnectedInteractive_3 extends Handle_AIS_MultipleConnectedInteractive {
    constructor(theHandle: Handle_AIS_MultipleConnectedInteractive);
  }

  export declare class Handle_AIS_MultipleConnectedInteractive_4 extends Handle_AIS_MultipleConnectedInteractive {
    constructor(theHandle: Handle_AIS_MultipleConnectedInteractive);
  }

export declare class Handle_PrsDim_OffsetDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_OffsetDimension): void;
  get(): PrsDim_OffsetDimension;
}

  export declare class Handle_PrsDim_OffsetDimension_1 extends Handle_PrsDim_OffsetDimension {
    constructor();
  }

  export declare class Handle_PrsDim_OffsetDimension_2 extends Handle_PrsDim_OffsetDimension {
    constructor(thePtr: PrsDim_OffsetDimension);
  }

  export declare class Handle_PrsDim_OffsetDimension_3 extends Handle_PrsDim_OffsetDimension {
    constructor(theHandle: Handle_PrsDim_OffsetDimension);
  }

  export declare class Handle_PrsDim_OffsetDimension_4 extends Handle_PrsDim_OffsetDimension {
    constructor(theHandle: Handle_PrsDim_OffsetDimension);
  }

export declare class Handle_PrsDim_ParallelRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_ParallelRelation): void;
  get(): PrsDim_ParallelRelation;
}

  export declare class Handle_PrsDim_ParallelRelation_1 extends Handle_PrsDim_ParallelRelation {
    constructor();
  }

  export declare class Handle_PrsDim_ParallelRelation_2 extends Handle_PrsDim_ParallelRelation {
    constructor(thePtr: PrsDim_ParallelRelation);
  }

  export declare class Handle_PrsDim_ParallelRelation_3 extends Handle_PrsDim_ParallelRelation {
    constructor(theHandle: Handle_PrsDim_ParallelRelation);
  }

  export declare class Handle_PrsDim_ParallelRelation_4 extends Handle_PrsDim_ParallelRelation {
    constructor(theHandle: Handle_PrsDim_ParallelRelation);
  }

export declare class Handle_PrsDim_PerpendicularRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_PerpendicularRelation): void;
  get(): PrsDim_PerpendicularRelation;
}

  export declare class Handle_PrsDim_PerpendicularRelation_1 extends Handle_PrsDim_PerpendicularRelation {
    constructor();
  }

  export declare class Handle_PrsDim_PerpendicularRelation_2 extends Handle_PrsDim_PerpendicularRelation {
    constructor(thePtr: PrsDim_PerpendicularRelation);
  }

  export declare class Handle_PrsDim_PerpendicularRelation_3 extends Handle_PrsDim_PerpendicularRelation {
    constructor(theHandle: Handle_PrsDim_PerpendicularRelation);
  }

  export declare class Handle_PrsDim_PerpendicularRelation_4 extends Handle_PrsDim_PerpendicularRelation {
    constructor(theHandle: Handle_PrsDim_PerpendicularRelation);
  }

export declare class Handle_AIS_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Plane): void;
  get(): AIS_Plane;
}

  export declare class Handle_AIS_Plane_1 extends Handle_AIS_Plane {
    constructor();
  }

  export declare class Handle_AIS_Plane_2 extends Handle_AIS_Plane {
    constructor(thePtr: AIS_Plane);
  }

  export declare class Handle_AIS_Plane_3 extends Handle_AIS_Plane {
    constructor(theHandle: Handle_AIS_Plane);
  }

  export declare class Handle_AIS_Plane_4 extends Handle_AIS_Plane {
    constructor(theHandle: Handle_AIS_Plane);
  }

export declare class Handle_AIS_PlaneTrihedron {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_PlaneTrihedron): void;
  get(): AIS_PlaneTrihedron;
}

  export declare class Handle_AIS_PlaneTrihedron_1 extends Handle_AIS_PlaneTrihedron {
    constructor();
  }

  export declare class Handle_AIS_PlaneTrihedron_2 extends Handle_AIS_PlaneTrihedron {
    constructor(thePtr: AIS_PlaneTrihedron);
  }

  export declare class Handle_AIS_PlaneTrihedron_3 extends Handle_AIS_PlaneTrihedron {
    constructor(theHandle: Handle_AIS_PlaneTrihedron);
  }

  export declare class Handle_AIS_PlaneTrihedron_4 extends Handle_AIS_PlaneTrihedron {
    constructor(theHandle: Handle_AIS_PlaneTrihedron);
  }

export declare class Handle_AIS_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Point): void;
  get(): AIS_Point;
}

  export declare class Handle_AIS_Point_1 extends Handle_AIS_Point {
    constructor();
  }

  export declare class Handle_AIS_Point_2 extends Handle_AIS_Point {
    constructor(thePtr: AIS_Point);
  }

  export declare class Handle_AIS_Point_3 extends Handle_AIS_Point {
    constructor(theHandle: Handle_AIS_Point);
  }

  export declare class Handle_AIS_Point_4 extends Handle_AIS_Point {
    constructor(theHandle: Handle_AIS_Point);
  }

export declare class Handle_AIS_PointCloud {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_PointCloud): void;
  get(): AIS_PointCloud;
}

  export declare class Handle_AIS_PointCloud_1 extends Handle_AIS_PointCloud {
    constructor();
  }

  export declare class Handle_AIS_PointCloud_2 extends Handle_AIS_PointCloud {
    constructor(thePtr: AIS_PointCloud);
  }

  export declare class Handle_AIS_PointCloud_3 extends Handle_AIS_PointCloud {
    constructor(theHandle: Handle_AIS_PointCloud);
  }

  export declare class Handle_AIS_PointCloud_4 extends Handle_AIS_PointCloud {
    constructor(theHandle: Handle_AIS_PointCloud);
  }

export declare class Handle_PrsDim_RadiusDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_RadiusDimension): void;
  get(): PrsDim_RadiusDimension;
}

  export declare class Handle_PrsDim_RadiusDimension_1 extends Handle_PrsDim_RadiusDimension {
    constructor();
  }

  export declare class Handle_PrsDim_RadiusDimension_2 extends Handle_PrsDim_RadiusDimension {
    constructor(thePtr: PrsDim_RadiusDimension);
  }

  export declare class Handle_PrsDim_RadiusDimension_3 extends Handle_PrsDim_RadiusDimension {
    constructor(theHandle: Handle_PrsDim_RadiusDimension);
  }

  export declare class Handle_PrsDim_RadiusDimension_4 extends Handle_PrsDim_RadiusDimension {
    constructor(theHandle: Handle_PrsDim_RadiusDimension);
  }

export declare class Handle_AIS_RubberBand {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_RubberBand): void;
  get(): AIS_RubberBand;
}

  export declare class Handle_AIS_RubberBand_1 extends Handle_AIS_RubberBand {
    constructor();
  }

  export declare class Handle_AIS_RubberBand_2 extends Handle_AIS_RubberBand {
    constructor(thePtr: AIS_RubberBand);
  }

  export declare class Handle_AIS_RubberBand_3 extends Handle_AIS_RubberBand {
    constructor(theHandle: Handle_AIS_RubberBand);
  }

  export declare class Handle_AIS_RubberBand_4 extends Handle_AIS_RubberBand {
    constructor(theHandle: Handle_AIS_RubberBand);
  }

export declare class Handle_AIS_TypeFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_TypeFilter): void;
  get(): AIS_TypeFilter;
}

  export declare class Handle_AIS_TypeFilter_1 extends Handle_AIS_TypeFilter {
    constructor();
  }

  export declare class Handle_AIS_TypeFilter_2 extends Handle_AIS_TypeFilter {
    constructor(thePtr: AIS_TypeFilter);
  }

  export declare class Handle_AIS_TypeFilter_3 extends Handle_AIS_TypeFilter {
    constructor(theHandle: Handle_AIS_TypeFilter);
  }

  export declare class Handle_AIS_TypeFilter_4 extends Handle_AIS_TypeFilter {
    constructor(theHandle: Handle_AIS_TypeFilter);
  }

export declare class Handle_AIS_SignatureFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_SignatureFilter): void;
  get(): AIS_SignatureFilter;
}

  export declare class Handle_AIS_SignatureFilter_1 extends Handle_AIS_SignatureFilter {
    constructor();
  }

  export declare class Handle_AIS_SignatureFilter_2 extends Handle_AIS_SignatureFilter {
    constructor(thePtr: AIS_SignatureFilter);
  }

  export declare class Handle_AIS_SignatureFilter_3 extends Handle_AIS_SignatureFilter {
    constructor(theHandle: Handle_AIS_SignatureFilter);
  }

  export declare class Handle_AIS_SignatureFilter_4 extends Handle_AIS_SignatureFilter {
    constructor(theHandle: Handle_AIS_SignatureFilter);
  }

export declare class Handle_PrsDim_SymmetricRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_SymmetricRelation): void;
  get(): PrsDim_SymmetricRelation;
}

  export declare class Handle_PrsDim_SymmetricRelation_1 extends Handle_PrsDim_SymmetricRelation {
    constructor();
  }

  export declare class Handle_PrsDim_SymmetricRelation_2 extends Handle_PrsDim_SymmetricRelation {
    constructor(thePtr: PrsDim_SymmetricRelation);
  }

  export declare class Handle_PrsDim_SymmetricRelation_3 extends Handle_PrsDim_SymmetricRelation {
    constructor(theHandle: Handle_PrsDim_SymmetricRelation);
  }

  export declare class Handle_PrsDim_SymmetricRelation_4 extends Handle_PrsDim_SymmetricRelation {
    constructor(theHandle: Handle_PrsDim_SymmetricRelation);
  }

export declare class Handle_PrsDim_TangentRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PrsDim_TangentRelation): void;
  get(): PrsDim_TangentRelation;
}

  export declare class Handle_PrsDim_TangentRelation_1 extends Handle_PrsDim_TangentRelation {
    constructor();
  }

  export declare class Handle_PrsDim_TangentRelation_2 extends Handle_PrsDim_TangentRelation {
    constructor(thePtr: PrsDim_TangentRelation);
  }

  export declare class Handle_PrsDim_TangentRelation_3 extends Handle_PrsDim_TangentRelation {
    constructor(theHandle: Handle_PrsDim_TangentRelation);
  }

  export declare class Handle_PrsDim_TangentRelation_4 extends Handle_PrsDim_TangentRelation {
    constructor(theHandle: Handle_PrsDim_TangentRelation);
  }

export declare class Handle_AIS_TextLabel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_TextLabel): void;
  get(): AIS_TextLabel;
}

  export declare class Handle_AIS_TextLabel_1 extends Handle_AIS_TextLabel {
    constructor();
  }

  export declare class Handle_AIS_TextLabel_2 extends Handle_AIS_TextLabel {
    constructor(thePtr: AIS_TextLabel);
  }

  export declare class Handle_AIS_TextLabel_3 extends Handle_AIS_TextLabel {
    constructor(theHandle: Handle_AIS_TextLabel);
  }

  export declare class Handle_AIS_TextLabel_4 extends Handle_AIS_TextLabel {
    constructor(theHandle: Handle_AIS_TextLabel);
  }

export declare class Handle_AIS_TexturedShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_TexturedShape): void;
  get(): AIS_TexturedShape;
}

  export declare class Handle_AIS_TexturedShape_1 extends Handle_AIS_TexturedShape {
    constructor();
  }

  export declare class Handle_AIS_TexturedShape_2 extends Handle_AIS_TexturedShape {
    constructor(thePtr: AIS_TexturedShape);
  }

  export declare class Handle_AIS_TexturedShape_3 extends Handle_AIS_TexturedShape {
    constructor(theHandle: Handle_AIS_TexturedShape);
  }

  export declare class Handle_AIS_TexturedShape_4 extends Handle_AIS_TexturedShape {
    constructor(theHandle: Handle_AIS_TexturedShape);
  }

export declare class Handle_AIS_Triangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Triangulation): void;
  get(): AIS_Triangulation;
}

  export declare class Handle_AIS_Triangulation_1 extends Handle_AIS_Triangulation {
    constructor();
  }

  export declare class Handle_AIS_Triangulation_2 extends Handle_AIS_Triangulation {
    constructor(thePtr: AIS_Triangulation);
  }

  export declare class Handle_AIS_Triangulation_3 extends Handle_AIS_Triangulation {
    constructor(theHandle: Handle_AIS_Triangulation);
  }

  export declare class Handle_AIS_Triangulation_4 extends Handle_AIS_Triangulation {
    constructor(theHandle: Handle_AIS_Triangulation);
  }

export declare class Handle_Prs3d_PointAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_PointAspect): void;
  get(): Prs3d_PointAspect;
}

  export declare class Handle_Prs3d_PointAspect_1 extends Handle_Prs3d_PointAspect {
    constructor();
  }

  export declare class Handle_Prs3d_PointAspect_2 extends Handle_Prs3d_PointAspect {
    constructor(thePtr: Prs3d_PointAspect);
  }

  export declare class Handle_Prs3d_PointAspect_3 extends Handle_Prs3d_PointAspect {
    constructor(theHandle: Handle_Prs3d_PointAspect);
  }

  export declare class Handle_Prs3d_PointAspect_4 extends Handle_Prs3d_PointAspect {
    constructor(theHandle: Handle_Prs3d_PointAspect);
  }

export declare class Handle_Prs3d_DatumAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_DatumAspect): void;
  get(): Prs3d_DatumAspect;
}

  export declare class Handle_Prs3d_DatumAspect_1 extends Handle_Prs3d_DatumAspect {
    constructor();
  }

  export declare class Handle_Prs3d_DatumAspect_2 extends Handle_Prs3d_DatumAspect {
    constructor(thePtr: Prs3d_DatumAspect);
  }

  export declare class Handle_Prs3d_DatumAspect_3 extends Handle_Prs3d_DatumAspect {
    constructor(theHandle: Handle_Prs3d_DatumAspect);
  }

  export declare class Handle_Prs3d_DatumAspect_4 extends Handle_Prs3d_DatumAspect {
    constructor(theHandle: Handle_Prs3d_DatumAspect);
  }

export declare class Handle_AIS_Trihedron {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_Trihedron): void;
  get(): AIS_Trihedron;
}

  export declare class Handle_AIS_Trihedron_1 extends Handle_AIS_Trihedron {
    constructor();
  }

  export declare class Handle_AIS_Trihedron_2 extends Handle_AIS_Trihedron {
    constructor(thePtr: AIS_Trihedron);
  }

  export declare class Handle_AIS_Trihedron_3 extends Handle_AIS_Trihedron {
    constructor(theHandle: Handle_AIS_Trihedron);
  }

  export declare class Handle_AIS_Trihedron_4 extends Handle_AIS_Trihedron {
    constructor(theHandle: Handle_AIS_Trihedron);
  }

export declare class Handle_AIS_TrihedronOwner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AIS_TrihedronOwner): void;
  get(): AIS_TrihedronOwner;
}

  export declare class Handle_AIS_TrihedronOwner_1 extends Handle_AIS_TrihedronOwner {
    constructor();
  }

  export declare class Handle_AIS_TrihedronOwner_2 extends Handle_AIS_TrihedronOwner {
    constructor(thePtr: AIS_TrihedronOwner);
  }

  export declare class Handle_AIS_TrihedronOwner_3 extends Handle_AIS_TrihedronOwner {
    constructor(theHandle: Handle_AIS_TrihedronOwner);
  }

  export declare class Handle_AIS_TrihedronOwner_4 extends Handle_AIS_TrihedronOwner {
    constructor(theHandle: Handle_AIS_TrihedronOwner);
  }

export declare class Handle_StdPrs_BRepFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdPrs_BRepFont): void;
  get(): StdPrs_BRepFont;
}

  export declare class Handle_StdPrs_BRepFont_1 extends Handle_StdPrs_BRepFont {
    constructor();
  }

  export declare class Handle_StdPrs_BRepFont_2 extends Handle_StdPrs_BRepFont {
    constructor(thePtr: StdPrs_BRepFont);
  }

  export declare class Handle_StdPrs_BRepFont_3 extends Handle_StdPrs_BRepFont {
    constructor(theHandle: Handle_StdPrs_BRepFont);
  }

  export declare class Handle_StdPrs_BRepFont_4 extends Handle_StdPrs_BRepFont {
    constructor(theHandle: Handle_StdPrs_BRepFont);
  }

export declare class Handle_Select3D_SensitiveSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveSet): void;
  get(): Select3D_SensitiveSet;
}

  export declare class Handle_Select3D_SensitiveSet_1 extends Handle_Select3D_SensitiveSet {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveSet_2 extends Handle_Select3D_SensitiveSet {
    constructor(thePtr: Select3D_SensitiveSet);
  }

  export declare class Handle_Select3D_SensitiveSet_3 extends Handle_Select3D_SensitiveSet {
    constructor(theHandle: Handle_Select3D_SensitiveSet);
  }

  export declare class Handle_Select3D_SensitiveSet_4 extends Handle_Select3D_SensitiveSet {
    constructor(theHandle: Handle_Select3D_SensitiveSet);
  }

export declare class Handle_Select3D_SensitiveFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveFace): void;
  get(): Select3D_SensitiveFace;
}

  export declare class Handle_Select3D_SensitiveFace_1 extends Handle_Select3D_SensitiveFace {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveFace_2 extends Handle_Select3D_SensitiveFace {
    constructor(thePtr: Select3D_SensitiveFace);
  }

  export declare class Handle_Select3D_SensitiveFace_3 extends Handle_Select3D_SensitiveFace {
    constructor(theHandle: Handle_Select3D_SensitiveFace);
  }

  export declare class Handle_Select3D_SensitiveFace_4 extends Handle_Select3D_SensitiveFace {
    constructor(theHandle: Handle_Select3D_SensitiveFace);
  }

export declare class Handle_Select3D_SensitiveSegment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveSegment): void;
  get(): Select3D_SensitiveSegment;
}

  export declare class Handle_Select3D_SensitiveSegment_1 extends Handle_Select3D_SensitiveSegment {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveSegment_2 extends Handle_Select3D_SensitiveSegment {
    constructor(thePtr: Select3D_SensitiveSegment);
  }

  export declare class Handle_Select3D_SensitiveSegment_3 extends Handle_Select3D_SensitiveSegment {
    constructor(theHandle: Handle_Select3D_SensitiveSegment);
  }

  export declare class Handle_Select3D_SensitiveSegment_4 extends Handle_Select3D_SensitiveSegment {
    constructor(theHandle: Handle_Select3D_SensitiveSegment);
  }

export declare class Handle_Prs3d_InvalidAngle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_InvalidAngle): void;
  get(): Prs3d_InvalidAngle;
}

  export declare class Handle_Prs3d_InvalidAngle_1 extends Handle_Prs3d_InvalidAngle {
    constructor();
  }

  export declare class Handle_Prs3d_InvalidAngle_2 extends Handle_Prs3d_InvalidAngle {
    constructor(thePtr: Prs3d_InvalidAngle);
  }

  export declare class Handle_Prs3d_InvalidAngle_3 extends Handle_Prs3d_InvalidAngle {
    constructor(theHandle: Handle_Prs3d_InvalidAngle);
  }

  export declare class Handle_Prs3d_InvalidAngle_4 extends Handle_Prs3d_InvalidAngle {
    constructor(theHandle: Handle_Prs3d_InvalidAngle);
  }

export declare class Handle_Prs3d_IsoAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_IsoAspect): void;
  get(): Prs3d_IsoAspect;
}

  export declare class Handle_Prs3d_IsoAspect_1 extends Handle_Prs3d_IsoAspect {
    constructor();
  }

  export declare class Handle_Prs3d_IsoAspect_2 extends Handle_Prs3d_IsoAspect {
    constructor(thePtr: Prs3d_IsoAspect);
  }

  export declare class Handle_Prs3d_IsoAspect_3 extends Handle_Prs3d_IsoAspect {
    constructor(theHandle: Handle_Prs3d_IsoAspect);
  }

  export declare class Handle_Prs3d_IsoAspect_4 extends Handle_Prs3d_IsoAspect {
    constructor(theHandle: Handle_Prs3d_IsoAspect);
  }

export declare class Handle_Prs3d_PlaneAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_PlaneAspect): void;
  get(): Prs3d_PlaneAspect;
}

  export declare class Handle_Prs3d_PlaneAspect_1 extends Handle_Prs3d_PlaneAspect {
    constructor();
  }

  export declare class Handle_Prs3d_PlaneAspect_2 extends Handle_Prs3d_PlaneAspect {
    constructor(thePtr: Prs3d_PlaneAspect);
  }

  export declare class Handle_Prs3d_PlaneAspect_3 extends Handle_Prs3d_PlaneAspect {
    constructor(theHandle: Handle_Prs3d_PlaneAspect);
  }

  export declare class Handle_Prs3d_PlaneAspect_4 extends Handle_Prs3d_PlaneAspect {
    constructor(theHandle: Handle_Prs3d_PlaneAspect);
  }

export declare class Handle_Prs3d_PresentationShadow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Prs3d_PresentationShadow): void;
  get(): Prs3d_PresentationShadow;
}

  export declare class Handle_Prs3d_PresentationShadow_1 extends Handle_Prs3d_PresentationShadow {
    constructor();
  }

  export declare class Handle_Prs3d_PresentationShadow_2 extends Handle_Prs3d_PresentationShadow {
    constructor(thePtr: Prs3d_PresentationShadow);
  }

  export declare class Handle_Prs3d_PresentationShadow_3 extends Handle_Prs3d_PresentationShadow {
    constructor(theHandle: Handle_Prs3d_PresentationShadow);
  }

  export declare class Handle_Prs3d_PresentationShadow_4 extends Handle_Prs3d_PresentationShadow {
    constructor(theHandle: Handle_Prs3d_PresentationShadow);
  }

export declare class Handle_Select3D_BVHIndexBuffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_BVHIndexBuffer): void;
  get(): Select3D_BVHIndexBuffer;
}

  export declare class Handle_Select3D_BVHIndexBuffer_1 extends Handle_Select3D_BVHIndexBuffer {
    constructor();
  }

  export declare class Handle_Select3D_BVHIndexBuffer_2 extends Handle_Select3D_BVHIndexBuffer {
    constructor(thePtr: Select3D_BVHIndexBuffer);
  }

  export declare class Handle_Select3D_BVHIndexBuffer_3 extends Handle_Select3D_BVHIndexBuffer {
    constructor(theHandle: Handle_Select3D_BVHIndexBuffer);
  }

  export declare class Handle_Select3D_BVHIndexBuffer_4 extends Handle_Select3D_BVHIndexBuffer {
    constructor(theHandle: Handle_Select3D_BVHIndexBuffer);
  }

export declare class Handle_Select3D_SensitivePoly {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitivePoly): void;
  get(): Select3D_SensitivePoly;
}

  export declare class Handle_Select3D_SensitivePoly_1 extends Handle_Select3D_SensitivePoly {
    constructor();
  }

  export declare class Handle_Select3D_SensitivePoly_2 extends Handle_Select3D_SensitivePoly {
    constructor(thePtr: Select3D_SensitivePoly);
  }

  export declare class Handle_Select3D_SensitivePoly_3 extends Handle_Select3D_SensitivePoly {
    constructor(theHandle: Handle_Select3D_SensitivePoly);
  }

  export declare class Handle_Select3D_SensitivePoly_4 extends Handle_Select3D_SensitivePoly {
    constructor(theHandle: Handle_Select3D_SensitivePoly);
  }

export declare class Handle_Select3D_InteriorSensitivePointSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_InteriorSensitivePointSet): void;
  get(): Select3D_InteriorSensitivePointSet;
}

  export declare class Handle_Select3D_InteriorSensitivePointSet_1 extends Handle_Select3D_InteriorSensitivePointSet {
    constructor();
  }

  export declare class Handle_Select3D_InteriorSensitivePointSet_2 extends Handle_Select3D_InteriorSensitivePointSet {
    constructor(thePtr: Select3D_InteriorSensitivePointSet);
  }

  export declare class Handle_Select3D_InteriorSensitivePointSet_3 extends Handle_Select3D_InteriorSensitivePointSet {
    constructor(theHandle: Handle_Select3D_InteriorSensitivePointSet);
  }

  export declare class Handle_Select3D_InteriorSensitivePointSet_4 extends Handle_Select3D_InteriorSensitivePointSet {
    constructor(theHandle: Handle_Select3D_InteriorSensitivePointSet);
  }

export declare class Handle_Select3D_SensitiveBox {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveBox): void;
  get(): Select3D_SensitiveBox;
}

  export declare class Handle_Select3D_SensitiveBox_1 extends Handle_Select3D_SensitiveBox {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveBox_2 extends Handle_Select3D_SensitiveBox {
    constructor(thePtr: Select3D_SensitiveBox);
  }

  export declare class Handle_Select3D_SensitiveBox_3 extends Handle_Select3D_SensitiveBox {
    constructor(theHandle: Handle_Select3D_SensitiveBox);
  }

  export declare class Handle_Select3D_SensitiveBox_4 extends Handle_Select3D_SensitiveBox {
    constructor(theHandle: Handle_Select3D_SensitiveBox);
  }

export declare class Handle_Select3D_SensitiveCircle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveCircle): void;
  get(): Select3D_SensitiveCircle;
}

  export declare class Handle_Select3D_SensitiveCircle_1 extends Handle_Select3D_SensitiveCircle {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveCircle_2 extends Handle_Select3D_SensitiveCircle {
    constructor(thePtr: Select3D_SensitiveCircle);
  }

  export declare class Handle_Select3D_SensitiveCircle_3 extends Handle_Select3D_SensitiveCircle {
    constructor(theHandle: Handle_Select3D_SensitiveCircle);
  }

  export declare class Handle_Select3D_SensitiveCircle_4 extends Handle_Select3D_SensitiveCircle {
    constructor(theHandle: Handle_Select3D_SensitiveCircle);
  }

export declare class Handle_Select3D_SensitiveCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveCurve): void;
  get(): Select3D_SensitiveCurve;
}

  export declare class Handle_Select3D_SensitiveCurve_1 extends Handle_Select3D_SensitiveCurve {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveCurve_2 extends Handle_Select3D_SensitiveCurve {
    constructor(thePtr: Select3D_SensitiveCurve);
  }

  export declare class Handle_Select3D_SensitiveCurve_3 extends Handle_Select3D_SensitiveCurve {
    constructor(theHandle: Handle_Select3D_SensitiveCurve);
  }

  export declare class Handle_Select3D_SensitiveCurve_4 extends Handle_Select3D_SensitiveCurve {
    constructor(theHandle: Handle_Select3D_SensitiveCurve);
  }

export declare class Handle_Select3D_SensitiveGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveGroup): void;
  get(): Select3D_SensitiveGroup;
}

  export declare class Handle_Select3D_SensitiveGroup_1 extends Handle_Select3D_SensitiveGroup {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveGroup_2 extends Handle_Select3D_SensitiveGroup {
    constructor(thePtr: Select3D_SensitiveGroup);
  }

  export declare class Handle_Select3D_SensitiveGroup_3 extends Handle_Select3D_SensitiveGroup {
    constructor(theHandle: Handle_Select3D_SensitiveGroup);
  }

  export declare class Handle_Select3D_SensitiveGroup_4 extends Handle_Select3D_SensitiveGroup {
    constructor(theHandle: Handle_Select3D_SensitiveGroup);
  }

export declare class Handle_Select3D_SensitivePoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitivePoint): void;
  get(): Select3D_SensitivePoint;
}

  export declare class Handle_Select3D_SensitivePoint_1 extends Handle_Select3D_SensitivePoint {
    constructor();
  }

  export declare class Handle_Select3D_SensitivePoint_2 extends Handle_Select3D_SensitivePoint {
    constructor(thePtr: Select3D_SensitivePoint);
  }

  export declare class Handle_Select3D_SensitivePoint_3 extends Handle_Select3D_SensitivePoint {
    constructor(theHandle: Handle_Select3D_SensitivePoint);
  }

  export declare class Handle_Select3D_SensitivePoint_4 extends Handle_Select3D_SensitivePoint {
    constructor(theHandle: Handle_Select3D_SensitivePoint);
  }

export declare class Handle_Select3D_SensitivePrimitiveArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitivePrimitiveArray): void;
  get(): Select3D_SensitivePrimitiveArray;
}

  export declare class Handle_Select3D_SensitivePrimitiveArray_1 extends Handle_Select3D_SensitivePrimitiveArray {
    constructor();
  }

  export declare class Handle_Select3D_SensitivePrimitiveArray_2 extends Handle_Select3D_SensitivePrimitiveArray {
    constructor(thePtr: Select3D_SensitivePrimitiveArray);
  }

  export declare class Handle_Select3D_SensitivePrimitiveArray_3 extends Handle_Select3D_SensitivePrimitiveArray {
    constructor(theHandle: Handle_Select3D_SensitivePrimitiveArray);
  }

  export declare class Handle_Select3D_SensitivePrimitiveArray_4 extends Handle_Select3D_SensitivePrimitiveArray {
    constructor(theHandle: Handle_Select3D_SensitivePrimitiveArray);
  }

export declare class Handle_Select3D_SensitiveTriangle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveTriangle): void;
  get(): Select3D_SensitiveTriangle;
}

  export declare class Handle_Select3D_SensitiveTriangle_1 extends Handle_Select3D_SensitiveTriangle {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveTriangle_2 extends Handle_Select3D_SensitiveTriangle {
    constructor(thePtr: Select3D_SensitiveTriangle);
  }

  export declare class Handle_Select3D_SensitiveTriangle_3 extends Handle_Select3D_SensitiveTriangle {
    constructor(theHandle: Handle_Select3D_SensitiveTriangle);
  }

  export declare class Handle_Select3D_SensitiveTriangle_4 extends Handle_Select3D_SensitiveTriangle {
    constructor(theHandle: Handle_Select3D_SensitiveTriangle);
  }

export declare class Handle_Select3D_SensitiveTriangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveTriangulation): void;
  get(): Select3D_SensitiveTriangulation;
}

  export declare class Handle_Select3D_SensitiveTriangulation_1 extends Handle_Select3D_SensitiveTriangulation {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveTriangulation_2 extends Handle_Select3D_SensitiveTriangulation {
    constructor(thePtr: Select3D_SensitiveTriangulation);
  }

  export declare class Handle_Select3D_SensitiveTriangulation_3 extends Handle_Select3D_SensitiveTriangulation {
    constructor(theHandle: Handle_Select3D_SensitiveTriangulation);
  }

  export declare class Handle_Select3D_SensitiveTriangulation_4 extends Handle_Select3D_SensitiveTriangulation {
    constructor(theHandle: Handle_Select3D_SensitiveTriangulation);
  }

export declare class Handle_Select3D_SensitiveWire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Select3D_SensitiveWire): void;
  get(): Select3D_SensitiveWire;
}

  export declare class Handle_Select3D_SensitiveWire_1 extends Handle_Select3D_SensitiveWire {
    constructor();
  }

  export declare class Handle_Select3D_SensitiveWire_2 extends Handle_Select3D_SensitiveWire {
    constructor(thePtr: Select3D_SensitiveWire);
  }

  export declare class Handle_Select3D_SensitiveWire_3 extends Handle_Select3D_SensitiveWire {
    constructor(theHandle: Handle_Select3D_SensitiveWire);
  }

  export declare class Handle_Select3D_SensitiveWire_4 extends Handle_Select3D_SensitiveWire {
    constructor(theHandle: Handle_Select3D_SensitiveWire);
  }

export declare class Handle_SelectMgr_AndFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_AndFilter): void;
  get(): SelectMgr_AndFilter;
}

  export declare class Handle_SelectMgr_AndFilter_1 extends Handle_SelectMgr_AndFilter {
    constructor();
  }

  export declare class Handle_SelectMgr_AndFilter_2 extends Handle_SelectMgr_AndFilter {
    constructor(thePtr: SelectMgr_AndFilter);
  }

  export declare class Handle_SelectMgr_AndFilter_3 extends Handle_SelectMgr_AndFilter {
    constructor(theHandle: Handle_SelectMgr_AndFilter);
  }

  export declare class Handle_SelectMgr_AndFilter_4 extends Handle_SelectMgr_AndFilter {
    constructor(theHandle: Handle_SelectMgr_AndFilter);
  }

export declare class Handle_SelectMgr_OrFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_OrFilter): void;
  get(): SelectMgr_OrFilter;
}

  export declare class Handle_SelectMgr_OrFilter_1 extends Handle_SelectMgr_OrFilter {
    constructor();
  }

  export declare class Handle_SelectMgr_OrFilter_2 extends Handle_SelectMgr_OrFilter {
    constructor(thePtr: SelectMgr_OrFilter);
  }

  export declare class Handle_SelectMgr_OrFilter_3 extends Handle_SelectMgr_OrFilter {
    constructor(theHandle: Handle_SelectMgr_OrFilter);
  }

  export declare class Handle_SelectMgr_OrFilter_4 extends Handle_SelectMgr_OrFilter {
    constructor(theHandle: Handle_SelectMgr_OrFilter);
  }

export declare class Handle_SelectMgr_SelectionManager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: SelectMgr_SelectionManager): void;
  get(): SelectMgr_SelectionManager;
}

  export declare class Handle_SelectMgr_SelectionManager_1 extends Handle_SelectMgr_SelectionManager {
    constructor();
  }

  export declare class Handle_SelectMgr_SelectionManager_2 extends Handle_SelectMgr_SelectionManager {
    constructor(thePtr: SelectMgr_SelectionManager);
  }

  export declare class Handle_SelectMgr_SelectionManager_3 extends Handle_SelectMgr_SelectionManager {
    constructor(theHandle: Handle_SelectMgr_SelectionManager);
  }

  export declare class Handle_SelectMgr_SelectionManager_4 extends Handle_SelectMgr_SelectionManager {
    constructor(theHandle: Handle_SelectMgr_SelectionManager);
  }

export declare class Handle_StdSelect_BRepOwner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdSelect_BRepOwner): void;
  get(): StdSelect_BRepOwner;
}

  export declare class Handle_StdSelect_BRepOwner_1 extends Handle_StdSelect_BRepOwner {
    constructor();
  }

  export declare class Handle_StdSelect_BRepOwner_2 extends Handle_StdSelect_BRepOwner {
    constructor(thePtr: StdSelect_BRepOwner);
  }

  export declare class Handle_StdSelect_BRepOwner_3 extends Handle_StdSelect_BRepOwner {
    constructor(theHandle: Handle_StdSelect_BRepOwner);
  }

  export declare class Handle_StdSelect_BRepOwner_4 extends Handle_StdSelect_BRepOwner {
    constructor(theHandle: Handle_StdSelect_BRepOwner);
  }

export declare class Handle_StdSelect_EdgeFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdSelect_EdgeFilter): void;
  get(): StdSelect_EdgeFilter;
}

  export declare class Handle_StdSelect_EdgeFilter_1 extends Handle_StdSelect_EdgeFilter {
    constructor();
  }

  export declare class Handle_StdSelect_EdgeFilter_2 extends Handle_StdSelect_EdgeFilter {
    constructor(thePtr: StdSelect_EdgeFilter);
  }

  export declare class Handle_StdSelect_EdgeFilter_3 extends Handle_StdSelect_EdgeFilter {
    constructor(theHandle: Handle_StdSelect_EdgeFilter);
  }

  export declare class Handle_StdSelect_EdgeFilter_4 extends Handle_StdSelect_EdgeFilter {
    constructor(theHandle: Handle_StdSelect_EdgeFilter);
  }

export declare class Handle_StdSelect_FaceFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdSelect_FaceFilter): void;
  get(): StdSelect_FaceFilter;
}

  export declare class Handle_StdSelect_FaceFilter_1 extends Handle_StdSelect_FaceFilter {
    constructor();
  }

  export declare class Handle_StdSelect_FaceFilter_2 extends Handle_StdSelect_FaceFilter {
    constructor(thePtr: StdSelect_FaceFilter);
  }

  export declare class Handle_StdSelect_FaceFilter_3 extends Handle_StdSelect_FaceFilter {
    constructor(theHandle: Handle_StdSelect_FaceFilter);
  }

  export declare class Handle_StdSelect_FaceFilter_4 extends Handle_StdSelect_FaceFilter {
    constructor(theHandle: Handle_StdSelect_FaceFilter);
  }

export declare class Handle_StdSelect_Shape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdSelect_Shape): void;
  get(): StdSelect_Shape;
}

  export declare class Handle_StdSelect_Shape_1 extends Handle_StdSelect_Shape {
    constructor();
  }

  export declare class Handle_StdSelect_Shape_2 extends Handle_StdSelect_Shape {
    constructor(thePtr: StdSelect_Shape);
  }

  export declare class Handle_StdSelect_Shape_3 extends Handle_StdSelect_Shape {
    constructor(theHandle: Handle_StdSelect_Shape);
  }

  export declare class Handle_StdSelect_Shape_4 extends Handle_StdSelect_Shape {
    constructor(theHandle: Handle_StdSelect_Shape);
  }

export declare class Handle_StdSelect_ShapeTypeFilter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdSelect_ShapeTypeFilter): void;
  get(): StdSelect_ShapeTypeFilter;
}

  export declare class Handle_StdSelect_ShapeTypeFilter_1 extends Handle_StdSelect_ShapeTypeFilter {
    constructor();
  }

  export declare class Handle_StdSelect_ShapeTypeFilter_2 extends Handle_StdSelect_ShapeTypeFilter {
    constructor(thePtr: StdSelect_ShapeTypeFilter);
  }

  export declare class Handle_StdSelect_ShapeTypeFilter_3 extends Handle_StdSelect_ShapeTypeFilter {
    constructor(theHandle: Handle_StdSelect_ShapeTypeFilter);
  }

  export declare class Handle_StdSelect_ShapeTypeFilter_4 extends Handle_StdSelect_ShapeTypeFilter {
    constructor(theHandle: Handle_StdSelect_ShapeTypeFilter);
  }

export declare class Handle_V3d_AmbientLight {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_AmbientLight): void;
  get(): V3d_AmbientLight;
}

  export declare class Handle_V3d_AmbientLight_1 extends Handle_V3d_AmbientLight {
    constructor();
  }

  export declare class Handle_V3d_AmbientLight_2 extends Handle_V3d_AmbientLight {
    constructor(thePtr: V3d_AmbientLight);
  }

  export declare class Handle_V3d_AmbientLight_3 extends Handle_V3d_AmbientLight {
    constructor(theHandle: Handle_V3d_AmbientLight);
  }

  export declare class Handle_V3d_AmbientLight_4 extends Handle_V3d_AmbientLight {
    constructor(theHandle: Handle_V3d_AmbientLight);
  }

export declare class Handle_V3d_BadValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_BadValue): void;
  get(): V3d_BadValue;
}

  export declare class Handle_V3d_BadValue_1 extends Handle_V3d_BadValue {
    constructor();
  }

  export declare class Handle_V3d_BadValue_2 extends Handle_V3d_BadValue {
    constructor(thePtr: V3d_BadValue);
  }

  export declare class Handle_V3d_BadValue_3 extends Handle_V3d_BadValue {
    constructor(theHandle: Handle_V3d_BadValue);
  }

  export declare class Handle_V3d_BadValue_4 extends Handle_V3d_BadValue {
    constructor(theHandle: Handle_V3d_BadValue);
  }

export declare class Handle_V3d_CircularGrid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_CircularGrid): void;
  get(): V3d_CircularGrid;
}

  export declare class Handle_V3d_CircularGrid_1 extends Handle_V3d_CircularGrid {
    constructor();
  }

  export declare class Handle_V3d_CircularGrid_2 extends Handle_V3d_CircularGrid {
    constructor(thePtr: V3d_CircularGrid);
  }

  export declare class Handle_V3d_CircularGrid_3 extends Handle_V3d_CircularGrid {
    constructor(theHandle: Handle_V3d_CircularGrid);
  }

  export declare class Handle_V3d_CircularGrid_4 extends Handle_V3d_CircularGrid {
    constructor(theHandle: Handle_V3d_CircularGrid);
  }

export declare class Handle_V3d_PositionLight {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_PositionLight): void;
  get(): V3d_PositionLight;
}

  export declare class Handle_V3d_PositionLight_1 extends Handle_V3d_PositionLight {
    constructor();
  }

  export declare class Handle_V3d_PositionLight_2 extends Handle_V3d_PositionLight {
    constructor(thePtr: V3d_PositionLight);
  }

  export declare class Handle_V3d_PositionLight_3 extends Handle_V3d_PositionLight {
    constructor(theHandle: Handle_V3d_PositionLight);
  }

  export declare class Handle_V3d_PositionLight_4 extends Handle_V3d_PositionLight {
    constructor(theHandle: Handle_V3d_PositionLight);
  }

export declare class Handle_V3d_DirectionalLight {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_DirectionalLight): void;
  get(): V3d_DirectionalLight;
}

  export declare class Handle_V3d_DirectionalLight_1 extends Handle_V3d_DirectionalLight {
    constructor();
  }

  export declare class Handle_V3d_DirectionalLight_2 extends Handle_V3d_DirectionalLight {
    constructor(thePtr: V3d_DirectionalLight);
  }

  export declare class Handle_V3d_DirectionalLight_3 extends Handle_V3d_DirectionalLight {
    constructor(theHandle: Handle_V3d_DirectionalLight);
  }

  export declare class Handle_V3d_DirectionalLight_4 extends Handle_V3d_DirectionalLight {
    constructor(theHandle: Handle_V3d_DirectionalLight);
  }

export declare class Handle_V3d_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_Plane): void;
  get(): V3d_Plane;
}

  export declare class Handle_V3d_Plane_1 extends Handle_V3d_Plane {
    constructor();
  }

  export declare class Handle_V3d_Plane_2 extends Handle_V3d_Plane {
    constructor(thePtr: V3d_Plane);
  }

  export declare class Handle_V3d_Plane_3 extends Handle_V3d_Plane {
    constructor(theHandle: Handle_V3d_Plane);
  }

  export declare class Handle_V3d_Plane_4 extends Handle_V3d_Plane {
    constructor(theHandle: Handle_V3d_Plane);
  }

export declare class Handle_V3d_PositionalLight {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_PositionalLight): void;
  get(): V3d_PositionalLight;
}

  export declare class Handle_V3d_PositionalLight_1 extends Handle_V3d_PositionalLight {
    constructor();
  }

  export declare class Handle_V3d_PositionalLight_2 extends Handle_V3d_PositionalLight {
    constructor(thePtr: V3d_PositionalLight);
  }

  export declare class Handle_V3d_PositionalLight_3 extends Handle_V3d_PositionalLight {
    constructor(theHandle: Handle_V3d_PositionalLight);
  }

  export declare class Handle_V3d_PositionalLight_4 extends Handle_V3d_PositionalLight {
    constructor(theHandle: Handle_V3d_PositionalLight);
  }

export declare class Handle_V3d_RectangularGrid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_RectangularGrid): void;
  get(): V3d_RectangularGrid;
}

  export declare class Handle_V3d_RectangularGrid_1 extends Handle_V3d_RectangularGrid {
    constructor();
  }

  export declare class Handle_V3d_RectangularGrid_2 extends Handle_V3d_RectangularGrid {
    constructor(thePtr: V3d_RectangularGrid);
  }

  export declare class Handle_V3d_RectangularGrid_3 extends Handle_V3d_RectangularGrid {
    constructor(theHandle: Handle_V3d_RectangularGrid);
  }

  export declare class Handle_V3d_RectangularGrid_4 extends Handle_V3d_RectangularGrid {
    constructor(theHandle: Handle_V3d_RectangularGrid);
  }

export declare class Handle_V3d_SpotLight {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_SpotLight): void;
  get(): V3d_SpotLight;
}

  export declare class Handle_V3d_SpotLight_1 extends Handle_V3d_SpotLight {
    constructor();
  }

  export declare class Handle_V3d_SpotLight_2 extends Handle_V3d_SpotLight {
    constructor(thePtr: V3d_SpotLight);
  }

  export declare class Handle_V3d_SpotLight_3 extends Handle_V3d_SpotLight {
    constructor(theHandle: Handle_V3d_SpotLight);
  }

  export declare class Handle_V3d_SpotLight_4 extends Handle_V3d_SpotLight {
    constructor(theHandle: Handle_V3d_SpotLight);
  }

export declare class Handle_V3d_UnMapped {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: V3d_UnMapped): void;
  get(): V3d_UnMapped;
}

  export declare class Handle_V3d_UnMapped_1 extends Handle_V3d_UnMapped {
    constructor();
  }

  export declare class Handle_V3d_UnMapped_2 extends Handle_V3d_UnMapped {
    constructor(thePtr: V3d_UnMapped);
  }

  export declare class Handle_V3d_UnMapped_3 extends Handle_V3d_UnMapped {
    constructor(theHandle: Handle_V3d_UnMapped);
  }

  export declare class Handle_V3d_UnMapped_4 extends Handle_V3d_UnMapped {
    constructor(theHandle: Handle_V3d_UnMapped);
  }

export declare type PrsDim_DimensionSelectionMode = {
  PrsDim_DimensionSelectionMode_All: {};
  PrsDim_DimensionSelectionMode_Line: {};
  PrsDim_DimensionSelectionMode_Text: {};
}

export declare type Prs3d_VertexDrawMode = {
  Prs3d_VDM_Isolated: {};
  Prs3d_VDM_All: {};
  Prs3d_VDM_Inherited: {};
}

export declare type Prs3d_TypeOfHLR = {
  Prs3d_TOH_NotSet: {};
  Prs3d_TOH_PolyAlgo: {};
  Prs3d_TOH_Algo: {};
}

export declare type PrsMgr_TypeOfPresentation3d = {
  PrsMgr_TOP_AllView: {};
  PrsMgr_TOP_ProjectorDependant: {};
}

export declare type Select3D_TypeOfSensitivity = {
  Select3D_TOS_INTERIOR: {};
  Select3D_TOS_BOUNDARY: {};
}

export declare type SelectMgr_StateOfSelection = {
  SelectMgr_SOS_Any: {};
  SelectMgr_SOS_Unknown: {};
  SelectMgr_SOS_Deactivated: {};
  SelectMgr_SOS_Activated: {};
}

export declare type SelectMgr_TypeOfBVHUpdate = {
  SelectMgr_TBU_Add: {};
  SelectMgr_TBU_Remove: {};
  SelectMgr_TBU_Renew: {};
  SelectMgr_TBU_Invalidate: {};
  SelectMgr_TBU_None: {};
}

export declare type SelectMgr_TypeOfUpdate = {
  SelectMgr_TOU_Full: {};
  SelectMgr_TOU_Partial: {};
  SelectMgr_TOU_None: {};
}

export declare type PrsDim_DisplaySpecialSymbol = {
  PrsDim_DisplaySpecialSymbol_No: {};
  PrsDim_DisplaySpecialSymbol_Before: {};
  PrsDim_DisplaySpecialSymbol_After: {};
}

export declare type AIS_KindOfInteractive = {
  AIS_KOI_None: {};
  AIS_KOI_Datum: {};
  AIS_KOI_Shape: {};
  AIS_KOI_Object: {};
  AIS_KOI_Relation: {};
  AIS_KOI_Dimension: {};
}

export declare type AIS_DragAction = {
  AIS_DragAction_Start: {};
  AIS_DragAction_Update: {};
  AIS_DragAction_Stop: {};
  AIS_DragAction_Abort: {};
}

export declare type PrsDim_KindOfDimension = {
  PrsDim_KOD_NONE: {};
  PrsDim_KOD_LENGTH: {};
  PrsDim_KOD_PLANEANGLE: {};
  PrsDim_KOD_SOLIDANGLE: {};
  PrsDim_KOD_AREA: {};
  PrsDim_KOD_VOLUME: {};
  PrsDim_KOD_MASS: {};
  PrsDim_KOD_TIME: {};
  PrsDim_KOD_RADIUS: {};
  PrsDim_KOD_DIAMETER: {};
  PrsDim_KOD_CHAMF2D: {};
  PrsDim_KOD_CHAMF3D: {};
  PrsDim_KOD_OFFSET: {};
  PrsDim_KOD_ELLIPSERADIUS: {};
}

export declare type PrsDim_KindOfSurface = {
  PrsDim_KOS_Plane: {};
  PrsDim_KOS_Cylinder: {};
  PrsDim_KOS_Cone: {};
  PrsDim_KOS_Sphere: {};
  PrsDim_KOS_Torus: {};
  PrsDim_KOS_Revolution: {};
  PrsDim_KOS_Extrusion: {};
  PrsDim_KOS_OtherSurface: {};
}

export declare type Prs3d_DimensionArrowOrientation = {
  Prs3d_DAO_Internal: {};
  Prs3d_DAO_External: {};
  Prs3d_DAO_Fit: {};
}

export declare type Prs3d_DimensionTextHorizontalPosition = {
  Prs3d_DTHP_Left: {};
  Prs3d_DTHP_Right: {};
  Prs3d_DTHP_Center: {};
  Prs3d_DTHP_Fit: {};
}

export declare type Prs3d_DimensionTextVerticalPosition = {
  Prs3d_DTVP_Above: {};
  Prs3d_DTVP_Below: {};
  Prs3d_DTVP_Center: {};
}

export declare type PrsDim_TypeOfAngle = {
  PrsDim_TypeOfAngle_Interior: {};
  PrsDim_TypeOfAngle_Exterior: {};
}

export declare type PrsDim_TypeOfAngleArrowVisibility = {
  PrsDim_TypeOfAngleArrowVisibility_Both: {};
  PrsDim_TypeOfAngleArrowVisibility_First: {};
  PrsDim_TypeOfAngleArrowVisibility_Second: {};
  PrsDim_TypeOfAngleArrowVisibility_None: {};
}

export declare type AIS_DisplayStatus = {
  AIS_DS_Displayed: {};
  AIS_DS_Erased: {};
  AIS_DS_None: {};
}

export declare type AIS_DisplayMode = {
  AIS_WireFrame: {};
  AIS_Shaded: {};
}

export declare type AIS_ClearMode = {
  AIS_CM_All: {};
  AIS_CM_Interactive: {};
  AIS_CM_Filters: {};
  AIS_CM_StandardModes: {};
  AIS_CM_TemporaryShapePrs: {};
}

export declare type AIS_SelectStatus = {
  AIS_SS_Added: {};
  AIS_SS_Removed: {};
  AIS_SS_NotDone: {};
}

export declare type AIS_SelectionModesConcurrency = {
  AIS_SelectionModesConcurrency_Single: {};
  AIS_SelectionModesConcurrency_GlobalOrLocal: {};
  AIS_SelectionModesConcurrency_Multiple: {};
}

export declare type AIS_StatusOfDetection = {
  AIS_SOD_Error: {};
  AIS_SOD_Nothing: {};
  AIS_SOD_AllBad: {};
  AIS_SOD_Selected: {};
  AIS_SOD_OnlyOneDetected: {};
  AIS_SOD_OnlyOneGood: {};
  AIS_SOD_SeveralGood: {};
}

export declare type AIS_StatusOfPick = {
  AIS_SOP_Error: {};
  AIS_SOP_NothingSelected: {};
  AIS_SOP_Removed: {};
  AIS_SOP_OneSelected: {};
  AIS_SOP_SeveralSelected: {};
}

export declare type AIS_TypeOfIso = {
  AIS_TOI_IsoU: {};
  AIS_TOI_IsoV: {};
  AIS_TOI_Both: {};
}

export declare type Prs3d_TypeOfHighlight = {
  Prs3d_TypeOfHighlight_None: {};
  Prs3d_TypeOfHighlight_Selected: {};
  Prs3d_TypeOfHighlight_Dynamic: {};
  Prs3d_TypeOfHighlight_LocalSelected: {};
  Prs3d_TypeOfHighlight_LocalDynamic: {};
  Prs3d_TypeOfHighlight_SubIntensity: {};
  Prs3d_TypeOfHighlight_NB: {};
}

export declare type SelectMgr_FilterType = {
  SelectMgr_FilterType_AND: {};
  SelectMgr_FilterType_OR: {};
}

export declare type SelectMgr_PickingStrategy = {
  SelectMgr_PickingStrategy_FirstAcceptable: {};
  SelectMgr_PickingStrategy_OnlyTopmost: {};
}

export declare type SelectMgr_TypeOfDepthTolerance = {
  SelectMgr_TypeOfDepthTolerance_Uniform: {};
  SelectMgr_TypeOfDepthTolerance_UniformPixels: {};
  SelectMgr_TypeOfDepthTolerance_SensitivityFactor: {};
}

export declare type StdSelect_TypeOfSelectionImage = {
  StdSelect_TypeOfSelectionImage_NormalizedDepth: {};
  StdSelect_TypeOfSelectionImage_NormalizedDepthInverted: {};
  StdSelect_TypeOfSelectionImage_UnnormalizedDepth: {};
  StdSelect_TypeOfSelectionImage_ColoredDetectedObject: {};
  StdSelect_TypeOfSelectionImage_ColoredEntity: {};
  StdSelect_TypeOfSelectionImage_ColoredOwner: {};
  StdSelect_TypeOfSelectionImage_ColoredSelectionMode: {};
}

export declare type AIS_TypeOfAxis = {
  AIS_TOAX_Unknown: {};
  AIS_TOAX_XAxis: {};
  AIS_TOAX_YAxis: {};
  AIS_TOAX_ZAxis: {};
}

export declare type DsgPrs_ArrowSide = {
  DsgPrs_AS_NONE: {};
  DsgPrs_AS_FIRSTAR: {};
  DsgPrs_AS_LASTAR: {};
  DsgPrs_AS_BOTHAR: {};
  DsgPrs_AS_FIRSTPT: {};
  DsgPrs_AS_LASTPT: {};
  DsgPrs_AS_BOTHPT: {};
  DsgPrs_AS_FIRSTAR_LASTPT: {};
  DsgPrs_AS_FIRSTPT_LASTAR: {};
}

export declare type StdPrs_Volume = {
  StdPrs_Volume_Autodetection: {};
  StdPrs_Volume_Closed: {};
  StdPrs_Volume_Opened: {};
}

export declare type AIS_ConnectStatus = {
  AIS_CS_None: {};
  AIS_CS_Connection: {};
  AIS_CS_Transform: {};
  AIS_CS_Both: {};
}

export declare type PrsDim_TypeOfDist = {
  PrsDim_TypeOfDist_Unknown: {};
  PrsDim_TypeOfDist_Horizontal: {};
  PrsDim_TypeOfDist_Vertical: {};
}

export declare type AIS_TypeOfAttribute = {
  AIS_TOA_Line: {};
  AIS_TOA_Dimension: {};
  AIS_TOA_Wire: {};
  AIS_TOA_Plane: {};
  AIS_TOA_Vector: {};
  AIS_TOA_UIso: {};
  AIS_TOA_VIso: {};
  AIS_TOA_Free: {};
  AIS_TOA_UnFree: {};
  AIS_TOA_Section: {};
  AIS_TOA_Hidden: {};
  AIS_TOA_Seen: {};
  AIS_TOA_FaceBoundary: {};
  AIS_TOA_FirstAxis: {};
  AIS_TOA_SecondAxis: {};
  AIS_TOA_ThirdAxis: {};
}

export declare type AIS_ManipulatorMode = {
  AIS_MM_None: {};
  AIS_MM_Translation: {};
  AIS_MM_Rotation: {};
  AIS_MM_Scaling: {};
  AIS_MM_TranslationPlane: {};
}

export declare type V3d_StereoDumpOptions = {
  V3d_SDO_MONO: {};
  V3d_SDO_LEFT_EYE: {};
  V3d_SDO_RIGHT_EYE: {};
  V3d_SDO_BLENDED: {};
}

export declare type V3d_TypeOfAxe = {
  V3d_X: {};
  V3d_Y: {};
  V3d_Z: {};
}

export declare type V3d_TypeOfBackfacingModel = {
  V3d_TOBM_AUTOMATIC: {};
  V3d_TOBM_ALWAYS_DISPLAYED: {};
  V3d_TOBM_NEVER_DISPLAYED: {};
}

export declare type V3d_TypeOfOrientation = {
  V3d_Xpos: {};
  V3d_Ypos: {};
  V3d_Zpos: {};
  V3d_Xneg: {};
  V3d_Yneg: {};
  V3d_Zneg: {};
  V3d_XposYpos: {};
  V3d_XposZpos: {};
  V3d_YposZpos: {};
  V3d_XnegYneg: {};
  V3d_XnegYpos: {};
  V3d_XnegZneg: {};
  V3d_XnegZpos: {};
  V3d_YnegZneg: {};
  V3d_YnegZpos: {};
  V3d_XposYneg: {};
  V3d_XposZneg: {};
  V3d_YposZneg: {};
  V3d_XposYposZpos: {};
  V3d_XposYnegZpos: {};
  V3d_XposYposZneg: {};
  V3d_XnegYposZpos: {};
  V3d_XposYnegZneg: {};
  V3d_XnegYposZneg: {};
  V3d_XnegYnegZpos: {};
  V3d_XnegYnegZneg: {};
  V3d_TypeOfOrientation_Zup_AxoLeft: {};
  V3d_TypeOfOrientation_Zup_AxoRight: {};
  V3d_TypeOfOrientation_Zup_Front: {};
  V3d_TypeOfOrientation_Zup_Back: {};
  V3d_TypeOfOrientation_Zup_Top: {};
  V3d_TypeOfOrientation_Zup_Bottom: {};
  V3d_TypeOfOrientation_Zup_Left: {};
  V3d_TypeOfOrientation_Zup_Right: {};
  V3d_TypeOfOrientation_Yup_AxoLeft: {};
  V3d_TypeOfOrientation_Yup_AxoRight: {};
  V3d_TypeOfOrientation_Yup_Front: {};
  V3d_TypeOfOrientation_Yup_Back: {};
  V3d_TypeOfOrientation_Yup_Top: {};
  V3d_TypeOfOrientation_Yup_Bottom: {};
  V3d_TypeOfOrientation_Yup_Left: {};
  V3d_TypeOfOrientation_Yup_Right: {};
}

export declare type V3d_TypeOfView = {
  V3d_ORTHOGRAPHIC: {};
  V3d_PERSPECTIVE: {};
}

export declare type V3d_TypeOfVisualization = {
  V3d_WIREFRAME: {};
  V3d_ZBUFFER: {};
}

export declare type AIS_MouseGesture = {
  AIS_MouseGesture_NONE: {};
  AIS_MouseGesture_SelectRectangle: {};
  AIS_MouseGesture_SelectLasso: {};
  AIS_MouseGesture_Zoom: {};
  AIS_MouseGesture_ZoomWindow: {};
  AIS_MouseGesture_Pan: {};
  AIS_MouseGesture_RotateOrbit: {};
  AIS_MouseGesture_RotateView: {};
}

export declare type AIS_NavigationMode = {
  AIS_NavigationMode_Orbit: {};
  AIS_NavigationMode_FirstPersonFlight: {};
  AIS_NavigationMode_FirstPersonWalk: {};
}

export declare type AIS_TypeOfPlane = {
  AIS_TOPL_Unknown: {};
  AIS_TOPL_XYPlane: {};
  AIS_TOPL_XZPlane: {};
  AIS_TOPL_YZPlane: {};
}

export declare type AIS_RotationMode = {
  AIS_RotationMode_BndBoxActive: {};
  AIS_RotationMode_PickLast: {};
  AIS_RotationMode_PickCenter: {};
  AIS_RotationMode_CameraAt: {};
  AIS_RotationMode_BndBoxScene: {};
}

export declare type AIS_TrihedronSelectionMode = {
  AIS_TrihedronSelectionMode_EntireObject: {};
  AIS_TrihedronSelectionMode_Origin: {};
  AIS_TrihedronSelectionMode_Axes: {};
  AIS_TrihedronSelectionMode_MainPlanes: {};
}

export declare type Prs3d_DatumAttribute = {
  Prs3d_DA_XAxisLength: {};
  Prs3d_DA_YAxisLength: {};
  Prs3d_DA_ZAxisLength: {};
  Prs3d_DP_ShadingTubeRadiusPercent: {};
  Prs3d_DP_ShadingConeRadiusPercent: {};
  Prs3d_DP_ShadingConeLengthPercent: {};
  Prs3d_DP_ShadingOriginRadiusPercent: {};
  Prs3d_DP_ShadingNumberOfFacettes: {};
}

export declare type Prs3d_DatumAxes = {
  Prs3d_DA_XAxis: {};
  Prs3d_DA_YAxis: {};
  Prs3d_DA_ZAxis: {};
  Prs3d_DA_XYAxis: {};
  Prs3d_DA_YZAxis: {};
  Prs3d_DA_XZAxis: {};
  Prs3d_DA_XYZAxis: {};
}

export declare type Prs3d_DatumMode = {
  Prs3d_DM_WireFrame: {};
  Prs3d_DM_Shaded: {};
}

export declare type Prs3d_DatumParts = {
  Prs3d_DP_Origin: {};
  Prs3d_DP_XAxis: {};
  Prs3d_DP_YAxis: {};
  Prs3d_DP_ZAxis: {};
  Prs3d_DP_XArrow: {};
  Prs3d_DP_YArrow: {};
  Prs3d_DP_ZArrow: {};
  Prs3d_DP_XOYAxis: {};
  Prs3d_DP_YOZAxis: {};
  Prs3d_DP_XOZAxis: {};
  Prs3d_DP_None: {};
}

export declare type AIS_ViewSelectionTool = {
  AIS_ViewSelectionTool_Picking: {};
  AIS_ViewSelectionTool_RubberBand: {};
  AIS_ViewSelectionTool_Polygon: {};
  AIS_ViewSelectionTool_ZoomWindow: {};
}

export declare type AIS_ViewInputBufferType = {
  AIS_ViewInputBufferType_UI: {};
  AIS_ViewInputBufferType_GL: {};
}

export declare type AIS_WalkTranslation = {
  AIS_WalkTranslation_Forward: {};
  AIS_WalkTranslation_Side: {};
  AIS_WalkTranslation_Up: {};
}

export declare type AIS_WalkRotation = {
  AIS_WalkRotation_Yaw: {};
  AIS_WalkRotation_Pitch: {};
  AIS_WalkRotation_Roll: {};
}

export declare type Prs3d_TypeOfLinePicking = {
  Prs3d_TOLP_Point: {};
  Prs3d_TOLP_Segment: {};
}

export declare type PrsDim_KindOfRelation = {
  PrsDim_KOR_NONE: {};
  PrsDim_KOR_CONCENTRIC: {};
  PrsDim_KOR_EQUALDISTANCE: {};
  PrsDim_KOR_EQUALRADIUS: {};
  PrsDim_KOR_FIX: {};
  PrsDim_KOR_IDENTIC: {};
  PrsDim_KOR_OFFSET: {};
  PrsDim_KOR_PARALLEL: {};
  PrsDim_KOR_PERPENDICULAR: {};
  PrsDim_KOR_TANGENT: {};
  PrsDim_KOR_SYMMETRIC: {};
}

export declare type StdSelect_TypeOfEdge = {
  StdSelect_AnyEdge: {};
  StdSelect_Line: {};
  StdSelect_Circle: {};
}

export declare type StdSelect_TypeOfFace = {
  StdSelect_AnyFace: {};
  StdSelect_Plane: {};
  StdSelect_Cylinder: {};
  StdSelect_Sphere: {};
  StdSelect_Torus: {};
  StdSelect_Revol: {};
  StdSelect_Cone: {};
}

export declare type V3d_TypeOfPickLight = {
  V3d_POSITIONLIGHT: {};
  V3d_SPACELIGHT: {};
  V3d_RADIUSTEXTLIGHT: {};
  V3d_ExtRADIUSLIGHT: {};
  V3d_IntRADIUSLIGHT: {};
  V3d_NOTHING: {};
}

export declare type V3d_TypeOfRepresentation = {
  V3d_SIMPLE: {};
  V3d_COMPLETE: {};
  V3d_PARTIAL: {};
  V3d_SAMELAST: {};
}

export declare type V3d_TypeOfPickCamera = {
  V3d_POSITIONCAMERA: {};
  V3d_SPACECAMERA: {};
  V3d_RADIUSTEXTCAMERA: {};
  V3d_ExtRADIUSCAMERA: {};
  V3d_IntRADIUSCAMERA: {};
  V3d_NOTHINGCAMERA: {};
}

export declare type TKV3dLib = {
  PrsMgr_PresentationManager: typeof PrsMgr_PresentationManager;
  Prs3d_DimensionUnits_1: typeof Prs3d_DimensionUnits_1;
  Prs3d_DimensionUnits_2: typeof Prs3d_DimensionUnits_2;
  Prs3d_Drawer: typeof Prs3d_Drawer;
  SelectMgr_FrustumBuilder: typeof SelectMgr_FrustumBuilder;
  SelectMgr_ViewClipRange: typeof SelectMgr_ViewClipRange;
  SelectMgr_BaseFrustum: typeof SelectMgr_BaseFrustum;
  SelectMgr_RectangularFrustum: typeof SelectMgr_RectangularFrustum;
  SelectMgr_TriangularFrustum: typeof SelectMgr_TriangularFrustum;
  SelectMgr_TriangularFrustumSet: typeof SelectMgr_TriangularFrustumSet;
  SelectMgr_SelectingVolumeManager: typeof SelectMgr_SelectingVolumeManager;
  SelectMgr_SensitiveEntity: typeof SelectMgr_SensitiveEntity;
  SelectMgr_Selection: typeof SelectMgr_Selection;
  SelectMgr_EntityOwner_1: typeof SelectMgr_EntityOwner_1;
  SelectMgr_EntityOwner_2: typeof SelectMgr_EntityOwner_2;
  SelectMgr_EntityOwner_3: typeof SelectMgr_EntityOwner_3;
  PrsDim_DimensionOwner: typeof PrsDim_DimensionOwner;
  Prs3d_ArrowAspect_1: typeof Prs3d_ArrowAspect_1;
  Prs3d_ArrowAspect_2: typeof Prs3d_ArrowAspect_2;
  Prs3d_ArrowAspect_3: typeof Prs3d_ArrowAspect_3;
  Prs3d_LineAspect_1: typeof Prs3d_LineAspect_1;
  Prs3d_LineAspect_2: typeof Prs3d_LineAspect_2;
  Prs3d_TextAspect_1: typeof Prs3d_TextAspect_1;
  Prs3d_TextAspect_2: typeof Prs3d_TextAspect_2;
  Prs3d_DimensionAspect: typeof Prs3d_DimensionAspect;
  PrsDim_AngleDimension_1: typeof PrsDim_AngleDimension_1;
  PrsDim_AngleDimension_2: typeof PrsDim_AngleDimension_2;
  PrsDim_AngleDimension_3: typeof PrsDim_AngleDimension_3;
  PrsDim_AngleDimension_4: typeof PrsDim_AngleDimension_4;
  PrsDim_AngleDimension_5: typeof PrsDim_AngleDimension_5;
  PrsDim_AngleDimension_6: typeof PrsDim_AngleDimension_6;
  AIS_Animation: typeof AIS_Animation;
  AIS_AnimationCamera: typeof AIS_AnimationCamera;
  AIS_GlobalStatus_1: typeof AIS_GlobalStatus_1;
  AIS_GlobalStatus_2: typeof AIS_GlobalStatus_2;
  AIS_Selection: typeof AIS_Selection;
  SelectMgr_AndOrFilter: typeof SelectMgr_AndOrFilter;
  SelectMgr_SortCriterion: typeof SelectMgr_SortCriterion;
  SelectMgr_SelectableObjectSet: typeof SelectMgr_SelectableObjectSet;
  SelectMgr_ToleranceMap: typeof SelectMgr_ToleranceMap;
  SelectMgr_BVHThreadPool: typeof SelectMgr_BVHThreadPool;
  SelectMgr_ViewerSelector3d: typeof SelectMgr_ViewerSelector3d;
  AIS_InteractiveContext: typeof AIS_InteractiveContext;
  AIS_AnimationObject: typeof AIS_AnimationObject;
  AIS_AttributeFilter_1: typeof AIS_AttributeFilter_1;
  AIS_AttributeFilter_2: typeof AIS_AttributeFilter_2;
  AIS_AttributeFilter_3: typeof AIS_AttributeFilter_3;
  AIS_Axis_1: typeof AIS_Axis_1;
  AIS_Axis_2: typeof AIS_Axis_2;
  AIS_Axis_3: typeof AIS_Axis_3;
  AIS_BadEdgeFilter: typeof AIS_BadEdgeFilter;
  AIS_C0RegularityFilter: typeof AIS_C0RegularityFilter;
  AIS_CameraFrustum: typeof AIS_CameraFrustum;
  PrsDim_Chamf2dDimension_1: typeof PrsDim_Chamf2dDimension_1;
  PrsDim_Chamf2dDimension_2: typeof PrsDim_Chamf2dDimension_2;
  PrsDim_Chamf3dDimension_1: typeof PrsDim_Chamf3dDimension_1;
  PrsDim_Chamf3dDimension_2: typeof PrsDim_Chamf3dDimension_2;
  AIS_Circle_1: typeof AIS_Circle_1;
  AIS_Circle_2: typeof AIS_Circle_2;
  AIS_ColorScale: typeof AIS_ColorScale;
  AIS_ColoredDrawer: typeof AIS_ColoredDrawer;
  AIS_Shape: typeof AIS_Shape;
  AIS_ColoredShape_1: typeof AIS_ColoredShape_1;
  AIS_ColoredShape_2: typeof AIS_ColoredShape_2;
  PrsDim_ConcentricRelation: typeof PrsDim_ConcentricRelation;
  AIS_ConnectedInteractive: typeof AIS_ConnectedInteractive;
  PrsDim_DiameterDimension_1: typeof PrsDim_DiameterDimension_1;
  PrsDim_DiameterDimension_2: typeof PrsDim_DiameterDimension_2;
  PrsDim_DiameterDimension_3: typeof PrsDim_DiameterDimension_3;
  PrsDim_DiameterDimension_4: typeof PrsDim_DiameterDimension_4;
  PrsDim_EqualDistanceRelation: typeof PrsDim_EqualDistanceRelation;
  PrsDim_EqualRadiusRelation: typeof PrsDim_EqualRadiusRelation;
  AIS_ExclusionFilter_1: typeof AIS_ExclusionFilter_1;
  AIS_ExclusionFilter_2: typeof AIS_ExclusionFilter_2;
  AIS_ExclusionFilter_3: typeof AIS_ExclusionFilter_3;
  PrsDim_FixRelation_1: typeof PrsDim_FixRelation_1;
  PrsDim_FixRelation_2: typeof PrsDim_FixRelation_2;
  PrsDim_FixRelation_3: typeof PrsDim_FixRelation_3;
  PrsDim_FixRelation_4: typeof PrsDim_FixRelation_4;
  PrsDim_IdenticRelation: typeof PrsDim_IdenticRelation;
  PrsDim_LengthDimension_1: typeof PrsDim_LengthDimension_1;
  PrsDim_LengthDimension_2: typeof PrsDim_LengthDimension_2;
  PrsDim_LengthDimension_3: typeof PrsDim_LengthDimension_3;
  PrsDim_LengthDimension_4: typeof PrsDim_LengthDimension_4;
  PrsDim_LengthDimension_5: typeof PrsDim_LengthDimension_5;
  AIS_Line_1: typeof AIS_Line_1;
  AIS_Line_2: typeof AIS_Line_2;
  Prs3d_ShadingAspect_1: typeof Prs3d_ShadingAspect_1;
  Prs3d_ShadingAspect_2: typeof Prs3d_ShadingAspect_2;
  V3d_Trihedron: typeof V3d_Trihedron;
  V3d_Viewer_1: typeof V3d_Viewer_1;
  V3d_Viewer_2: typeof V3d_Viewer_2;
  V3d_View_1: typeof V3d_View_1;
  V3d_View_2: typeof V3d_View_2;
  AIS_Manipulator_1: typeof AIS_Manipulator_1;
  AIS_Manipulator_2: typeof AIS_Manipulator_2;
  AIS_ManipulatorOwner: typeof AIS_ManipulatorOwner;
  PrsDim_MaxRadiusDimension_1: typeof PrsDim_MaxRadiusDimension_1;
  PrsDim_MaxRadiusDimension_2: typeof PrsDim_MaxRadiusDimension_2;
  AIS_MediaPlayer: typeof AIS_MediaPlayer;
  PrsDim_MidPointRelation: typeof PrsDim_MidPointRelation;
  PrsDim_MinRadiusDimension_1: typeof PrsDim_MinRadiusDimension_1;
  PrsDim_MinRadiusDimension_2: typeof PrsDim_MinRadiusDimension_2;
  AIS_MultipleConnectedInteractive: typeof AIS_MultipleConnectedInteractive;
  PrsDim_OffsetDimension: typeof PrsDim_OffsetDimension;
  PrsDim_ParallelRelation_1: typeof PrsDim_ParallelRelation_1;
  PrsDim_ParallelRelation_2: typeof PrsDim_ParallelRelation_2;
  PrsDim_PerpendicularRelation_1: typeof PrsDim_PerpendicularRelation_1;
  PrsDim_PerpendicularRelation_2: typeof PrsDim_PerpendicularRelation_2;
  AIS_Plane_1: typeof AIS_Plane_1;
  AIS_Plane_2: typeof AIS_Plane_2;
  AIS_Plane_3: typeof AIS_Plane_3;
  AIS_Plane_4: typeof AIS_Plane_4;
  AIS_PlaneTrihedron: typeof AIS_PlaneTrihedron;
  AIS_Point: typeof AIS_Point;
  AIS_PointCloud: typeof AIS_PointCloud;
  AIS_PointCloudOwner: typeof AIS_PointCloudOwner;
  PrsDim_RadiusDimension_1: typeof PrsDim_RadiusDimension_1;
  PrsDim_RadiusDimension_2: typeof PrsDim_RadiusDimension_2;
  PrsDim_RadiusDimension_3: typeof PrsDim_RadiusDimension_3;
  AIS_RubberBand_1: typeof AIS_RubberBand_1;
  AIS_RubberBand_2: typeof AIS_RubberBand_2;
  AIS_RubberBand_3: typeof AIS_RubberBand_3;
  AIS_TypeFilter: typeof AIS_TypeFilter;
  AIS_SignatureFilter: typeof AIS_SignatureFilter;
  PrsDim_SymmetricRelation: typeof PrsDim_SymmetricRelation;
  PrsDim_TangentRelation: typeof PrsDim_TangentRelation;
  AIS_TextLabel: typeof AIS_TextLabel;
  AIS_TexturedShape: typeof AIS_TexturedShape;
  AIS_Triangulation: typeof AIS_Triangulation;
  Prs3d_PointAspect_1: typeof Prs3d_PointAspect_1;
  Prs3d_PointAspect_2: typeof Prs3d_PointAspect_2;
  Prs3d_PointAspect_3: typeof Prs3d_PointAspect_3;
  Prs3d_DatumAspect: typeof Prs3d_DatumAspect;
  AIS_Trihedron: typeof AIS_Trihedron;
  AIS_TrihedronOwner: typeof AIS_TrihedronOwner;
  AIS_ViewInputBuffer: typeof AIS_ViewInputBuffer;
  AIS_ViewController: typeof AIS_ViewController;
  AIS_ViewCube: typeof AIS_ViewCube;
  AIS_ViewCubeOwner: typeof AIS_ViewCubeOwner;
  AIS_XRTrackedDevice_1: typeof AIS_XRTrackedDevice_1;
  AIS_XRTrackedDevice_2: typeof AIS_XRTrackedDevice_2;
  StdPrs_BRepFont_1: typeof StdPrs_BRepFont_1;
  StdPrs_BRepFont_2: typeof StdPrs_BRepFont_2;
  StdPrs_BRepFont_3: typeof StdPrs_BRepFont_3;
  Select3D_SensitiveFace_1: typeof Select3D_SensitiveFace_1;
  Select3D_SensitiveFace_2: typeof Select3D_SensitiveFace_2;
  Select3D_SensitiveSegment: typeof Select3D_SensitiveSegment;
  Prs3d_InvalidAngle_1: typeof Prs3d_InvalidAngle_1;
  Prs3d_InvalidAngle_2: typeof Prs3d_InvalidAngle_2;
  Prs3d_IsoAspect: typeof Prs3d_IsoAspect;
  Prs3d_PlaneAspect: typeof Prs3d_PlaneAspect;
  Prs3d_PresentationShadow: typeof Prs3d_PresentationShadow;
  StdPrs_ShapeTool: typeof StdPrs_ShapeTool;
  Prs3d_ToolCylinder: typeof Prs3d_ToolCylinder;
  Prs3d_ToolDisk: typeof Prs3d_ToolDisk;
  Prs3d_ToolSector: typeof Prs3d_ToolSector;
  Prs3d_ToolSphere: typeof Prs3d_ToolSphere;
  Prs3d_ToolTorus_1: typeof Prs3d_ToolTorus_1;
  Prs3d_ToolTorus_2: typeof Prs3d_ToolTorus_2;
  Prs3d_ToolTorus_3: typeof Prs3d_ToolTorus_3;
  Prs3d_ToolTorus_4: typeof Prs3d_ToolTorus_4;
  Select3D_BVHIndexBuffer: typeof Select3D_BVHIndexBuffer;
  Select3D_PointData: typeof Select3D_PointData;
  Select3D_SensitivePoly_1: typeof Select3D_SensitivePoly_1;
  Select3D_SensitivePoly_2: typeof Select3D_SensitivePoly_2;
  Select3D_SensitivePoly_3: typeof Select3D_SensitivePoly_3;
  Select3D_InteriorSensitivePointSet: typeof Select3D_InteriorSensitivePointSet;
  Select3D_SensitiveBox_1: typeof Select3D_SensitiveBox_1;
  Select3D_SensitiveBox_2: typeof Select3D_SensitiveBox_2;
  Select3D_SensitiveCircle_1: typeof Select3D_SensitiveCircle_1;
  Select3D_SensitiveCircle_2: typeof Select3D_SensitiveCircle_2;
  Select3D_SensitiveCircle_3: typeof Select3D_SensitiveCircle_3;
  Select3D_SensitiveCircle_4: typeof Select3D_SensitiveCircle_4;
  Select3D_SensitiveCurve_1: typeof Select3D_SensitiveCurve_1;
  Select3D_SensitiveCurve_2: typeof Select3D_SensitiveCurve_2;
  Select3D_SensitiveCurve_3: typeof Select3D_SensitiveCurve_3;
  Select3D_SensitiveGroup_1: typeof Select3D_SensitiveGroup_1;
  Select3D_SensitiveGroup_2: typeof Select3D_SensitiveGroup_2;
  Select3D_SensitivePoint: typeof Select3D_SensitivePoint;
  Select3D_SensitivePrimitiveArray: typeof Select3D_SensitivePrimitiveArray;
  Select3D_SensitiveTriangle: typeof Select3D_SensitiveTriangle;
  Select3D_SensitiveTriangulation_1: typeof Select3D_SensitiveTriangulation_1;
  Select3D_SensitiveTriangulation_2: typeof Select3D_SensitiveTriangulation_2;
  Select3D_SensitiveWire: typeof Select3D_SensitiveWire;
  SelectMgr_AndFilter: typeof SelectMgr_AndFilter;
  SelectMgr_OrFilter: typeof SelectMgr_OrFilter;
  SelectMgr_SelectionManager: typeof SelectMgr_SelectionManager;
  SelectMgr_SensitiveEntitySet: typeof SelectMgr_SensitiveEntitySet;
  StdPrs_HLRToolShape: typeof StdPrs_HLRToolShape;
  StdPrs_ToolRFace_1: typeof StdPrs_ToolRFace_1;
  StdPrs_ToolRFace_2: typeof StdPrs_ToolRFace_2;
  StdSelect_BRepOwner_1: typeof StdSelect_BRepOwner_1;
  StdSelect_BRepOwner_2: typeof StdSelect_BRepOwner_2;
  StdSelect_BRepOwner_3: typeof StdSelect_BRepOwner_3;
  StdSelect_EdgeFilter: typeof StdSelect_EdgeFilter;
  StdSelect_FaceFilter: typeof StdSelect_FaceFilter;
  StdSelect_Shape: typeof StdSelect_Shape;
  StdSelect_ShapeTypeFilter: typeof StdSelect_ShapeTypeFilter;
  V3d_AmbientLight: typeof V3d_AmbientLight;
  V3d_BadValue_1: typeof V3d_BadValue_1;
  V3d_BadValue_2: typeof V3d_BadValue_2;
  V3d_CircularGrid: typeof V3d_CircularGrid;
  V3d_DirectionalLight_1: typeof V3d_DirectionalLight_1;
  V3d_DirectionalLight_2: typeof V3d_DirectionalLight_2;
  V3d_Plane: typeof V3d_Plane;
  V3d_PositionalLight: typeof V3d_PositionalLight;
  V3d_RectangularGrid: typeof V3d_RectangularGrid;
  V3d_SpotLight_1: typeof V3d_SpotLight_1;
  V3d_SpotLight_2: typeof V3d_SpotLight_2;
  V3d_UnMapped_1: typeof V3d_UnMapped_1;
  V3d_UnMapped_2: typeof V3d_UnMapped_2;
  Handle_PrsMgr_PresentationManager_1: typeof Handle_PrsMgr_PresentationManager_1;
  Handle_PrsMgr_PresentationManager_2: typeof Handle_PrsMgr_PresentationManager_2;
  Handle_PrsMgr_PresentationManager_3: typeof Handle_PrsMgr_PresentationManager_3;
  Handle_PrsMgr_PresentationManager_4: typeof Handle_PrsMgr_PresentationManager_4;
  Handle_Prs3d_Drawer_1: typeof Handle_Prs3d_Drawer_1;
  Handle_Prs3d_Drawer_2: typeof Handle_Prs3d_Drawer_2;
  Handle_Prs3d_Drawer_3: typeof Handle_Prs3d_Drawer_3;
  Handle_Prs3d_Drawer_4: typeof Handle_Prs3d_Drawer_4;
  Handle_PrsMgr_Presentation_1: typeof Handle_PrsMgr_Presentation_1;
  Handle_PrsMgr_Presentation_2: typeof Handle_PrsMgr_Presentation_2;
  Handle_PrsMgr_Presentation_3: typeof Handle_PrsMgr_Presentation_3;
  Handle_PrsMgr_Presentation_4: typeof Handle_PrsMgr_Presentation_4;
  Handle_PrsMgr_PresentableObject_1: typeof Handle_PrsMgr_PresentableObject_1;
  Handle_PrsMgr_PresentableObject_2: typeof Handle_PrsMgr_PresentableObject_2;
  Handle_PrsMgr_PresentableObject_3: typeof Handle_PrsMgr_PresentableObject_3;
  Handle_PrsMgr_PresentableObject_4: typeof Handle_PrsMgr_PresentableObject_4;
  Handle_SelectMgr_FrustumBuilder_1: typeof Handle_SelectMgr_FrustumBuilder_1;
  Handle_SelectMgr_FrustumBuilder_2: typeof Handle_SelectMgr_FrustumBuilder_2;
  Handle_SelectMgr_FrustumBuilder_3: typeof Handle_SelectMgr_FrustumBuilder_3;
  Handle_SelectMgr_FrustumBuilder_4: typeof Handle_SelectMgr_FrustumBuilder_4;
  Handle_Select3D_SensitiveEntity_1: typeof Handle_Select3D_SensitiveEntity_1;
  Handle_Select3D_SensitiveEntity_2: typeof Handle_Select3D_SensitiveEntity_2;
  Handle_Select3D_SensitiveEntity_3: typeof Handle_Select3D_SensitiveEntity_3;
  Handle_Select3D_SensitiveEntity_4: typeof Handle_Select3D_SensitiveEntity_4;
  Handle_SelectMgr_SensitiveEntity_1: typeof Handle_SelectMgr_SensitiveEntity_1;
  Handle_SelectMgr_SensitiveEntity_2: typeof Handle_SelectMgr_SensitiveEntity_2;
  Handle_SelectMgr_SensitiveEntity_3: typeof Handle_SelectMgr_SensitiveEntity_3;
  Handle_SelectMgr_SensitiveEntity_4: typeof Handle_SelectMgr_SensitiveEntity_4;
  Handle_SelectMgr_Selection_1: typeof Handle_SelectMgr_Selection_1;
  Handle_SelectMgr_Selection_2: typeof Handle_SelectMgr_Selection_2;
  Handle_SelectMgr_Selection_3: typeof Handle_SelectMgr_Selection_3;
  Handle_SelectMgr_Selection_4: typeof Handle_SelectMgr_Selection_4;
  Handle_SelectMgr_SelectableObject_1: typeof Handle_SelectMgr_SelectableObject_1;
  Handle_SelectMgr_SelectableObject_2: typeof Handle_SelectMgr_SelectableObject_2;
  Handle_SelectMgr_SelectableObject_3: typeof Handle_SelectMgr_SelectableObject_3;
  Handle_SelectMgr_SelectableObject_4: typeof Handle_SelectMgr_SelectableObject_4;
  Handle_SelectMgr_EntityOwner_1: typeof Handle_SelectMgr_EntityOwner_1;
  Handle_SelectMgr_EntityOwner_2: typeof Handle_SelectMgr_EntityOwner_2;
  Handle_SelectMgr_EntityOwner_3: typeof Handle_SelectMgr_EntityOwner_3;
  Handle_SelectMgr_EntityOwner_4: typeof Handle_SelectMgr_EntityOwner_4;
  Handle_PrsDim_DimensionOwner_1: typeof Handle_PrsDim_DimensionOwner_1;
  Handle_PrsDim_DimensionOwner_2: typeof Handle_PrsDim_DimensionOwner_2;
  Handle_PrsDim_DimensionOwner_3: typeof Handle_PrsDim_DimensionOwner_3;
  Handle_PrsDim_DimensionOwner_4: typeof Handle_PrsDim_DimensionOwner_4;
  Handle_AIS_InteractiveObject_1: typeof Handle_AIS_InteractiveObject_1;
  Handle_AIS_InteractiveObject_2: typeof Handle_AIS_InteractiveObject_2;
  Handle_AIS_InteractiveObject_3: typeof Handle_AIS_InteractiveObject_3;
  Handle_AIS_InteractiveObject_4: typeof Handle_AIS_InteractiveObject_4;
  Handle_Prs3d_BasicAspect_1: typeof Handle_Prs3d_BasicAspect_1;
  Handle_Prs3d_BasicAspect_2: typeof Handle_Prs3d_BasicAspect_2;
  Handle_Prs3d_BasicAspect_3: typeof Handle_Prs3d_BasicAspect_3;
  Handle_Prs3d_BasicAspect_4: typeof Handle_Prs3d_BasicAspect_4;
  Handle_Prs3d_ArrowAspect_1: typeof Handle_Prs3d_ArrowAspect_1;
  Handle_Prs3d_ArrowAspect_2: typeof Handle_Prs3d_ArrowAspect_2;
  Handle_Prs3d_ArrowAspect_3: typeof Handle_Prs3d_ArrowAspect_3;
  Handle_Prs3d_ArrowAspect_4: typeof Handle_Prs3d_ArrowAspect_4;
  Handle_Prs3d_LineAspect_1: typeof Handle_Prs3d_LineAspect_1;
  Handle_Prs3d_LineAspect_2: typeof Handle_Prs3d_LineAspect_2;
  Handle_Prs3d_LineAspect_3: typeof Handle_Prs3d_LineAspect_3;
  Handle_Prs3d_LineAspect_4: typeof Handle_Prs3d_LineAspect_4;
  Handle_Prs3d_TextAspect_1: typeof Handle_Prs3d_TextAspect_1;
  Handle_Prs3d_TextAspect_2: typeof Handle_Prs3d_TextAspect_2;
  Handle_Prs3d_TextAspect_3: typeof Handle_Prs3d_TextAspect_3;
  Handle_Prs3d_TextAspect_4: typeof Handle_Prs3d_TextAspect_4;
  Handle_Prs3d_DimensionAspect_1: typeof Handle_Prs3d_DimensionAspect_1;
  Handle_Prs3d_DimensionAspect_2: typeof Handle_Prs3d_DimensionAspect_2;
  Handle_Prs3d_DimensionAspect_3: typeof Handle_Prs3d_DimensionAspect_3;
  Handle_Prs3d_DimensionAspect_4: typeof Handle_Prs3d_DimensionAspect_4;
  Handle_PrsDim_Dimension_1: typeof Handle_PrsDim_Dimension_1;
  Handle_PrsDim_Dimension_2: typeof Handle_PrsDim_Dimension_2;
  Handle_PrsDim_Dimension_3: typeof Handle_PrsDim_Dimension_3;
  Handle_PrsDim_Dimension_4: typeof Handle_PrsDim_Dimension_4;
  Handle_PrsDim_AngleDimension_1: typeof Handle_PrsDim_AngleDimension_1;
  Handle_PrsDim_AngleDimension_2: typeof Handle_PrsDim_AngleDimension_2;
  Handle_PrsDim_AngleDimension_3: typeof Handle_PrsDim_AngleDimension_3;
  Handle_PrsDim_AngleDimension_4: typeof Handle_PrsDim_AngleDimension_4;
  Handle_AIS_Animation_1: typeof Handle_AIS_Animation_1;
  Handle_AIS_Animation_2: typeof Handle_AIS_Animation_2;
  Handle_AIS_Animation_3: typeof Handle_AIS_Animation_3;
  Handle_AIS_Animation_4: typeof Handle_AIS_Animation_4;
  Handle_AIS_AnimationCamera_1: typeof Handle_AIS_AnimationCamera_1;
  Handle_AIS_AnimationCamera_2: typeof Handle_AIS_AnimationCamera_2;
  Handle_AIS_AnimationCamera_3: typeof Handle_AIS_AnimationCamera_3;
  Handle_AIS_AnimationCamera_4: typeof Handle_AIS_AnimationCamera_4;
  Handle_AIS_GlobalStatus_1: typeof Handle_AIS_GlobalStatus_1;
  Handle_AIS_GlobalStatus_2: typeof Handle_AIS_GlobalStatus_2;
  Handle_AIS_GlobalStatus_3: typeof Handle_AIS_GlobalStatus_3;
  Handle_AIS_GlobalStatus_4: typeof Handle_AIS_GlobalStatus_4;
  Handle_AIS_Selection_1: typeof Handle_AIS_Selection_1;
  Handle_AIS_Selection_2: typeof Handle_AIS_Selection_2;
  Handle_AIS_Selection_3: typeof Handle_AIS_Selection_3;
  Handle_AIS_Selection_4: typeof Handle_AIS_Selection_4;
  Handle_SelectMgr_Filter_1: typeof Handle_SelectMgr_Filter_1;
  Handle_SelectMgr_Filter_2: typeof Handle_SelectMgr_Filter_2;
  Handle_SelectMgr_Filter_3: typeof Handle_SelectMgr_Filter_3;
  Handle_SelectMgr_Filter_4: typeof Handle_SelectMgr_Filter_4;
  Handle_SelectMgr_CompositionFilter_1: typeof Handle_SelectMgr_CompositionFilter_1;
  Handle_SelectMgr_CompositionFilter_2: typeof Handle_SelectMgr_CompositionFilter_2;
  Handle_SelectMgr_CompositionFilter_3: typeof Handle_SelectMgr_CompositionFilter_3;
  Handle_SelectMgr_CompositionFilter_4: typeof Handle_SelectMgr_CompositionFilter_4;
  Handle_SelectMgr_AndOrFilter_1: typeof Handle_SelectMgr_AndOrFilter_1;
  Handle_SelectMgr_AndOrFilter_2: typeof Handle_SelectMgr_AndOrFilter_2;
  Handle_SelectMgr_AndOrFilter_3: typeof Handle_SelectMgr_AndOrFilter_3;
  Handle_SelectMgr_AndOrFilter_4: typeof Handle_SelectMgr_AndOrFilter_4;
  Handle_SelectMgr_ViewerSelector_1: typeof Handle_SelectMgr_ViewerSelector_1;
  Handle_SelectMgr_ViewerSelector_2: typeof Handle_SelectMgr_ViewerSelector_2;
  Handle_SelectMgr_ViewerSelector_3: typeof Handle_SelectMgr_ViewerSelector_3;
  Handle_SelectMgr_ViewerSelector_4: typeof Handle_SelectMgr_ViewerSelector_4;
  Handle_SelectMgr_ViewerSelector3d_1: typeof Handle_SelectMgr_ViewerSelector3d_1;
  Handle_SelectMgr_ViewerSelector3d_2: typeof Handle_SelectMgr_ViewerSelector3d_2;
  Handle_SelectMgr_ViewerSelector3d_3: typeof Handle_SelectMgr_ViewerSelector3d_3;
  Handle_SelectMgr_ViewerSelector3d_4: typeof Handle_SelectMgr_ViewerSelector3d_4;
  Handle_AIS_InteractiveContext_1: typeof Handle_AIS_InteractiveContext_1;
  Handle_AIS_InteractiveContext_2: typeof Handle_AIS_InteractiveContext_2;
  Handle_AIS_InteractiveContext_3: typeof Handle_AIS_InteractiveContext_3;
  Handle_AIS_InteractiveContext_4: typeof Handle_AIS_InteractiveContext_4;
  Handle_AIS_AnimationObject_1: typeof Handle_AIS_AnimationObject_1;
  Handle_AIS_AnimationObject_2: typeof Handle_AIS_AnimationObject_2;
  Handle_AIS_AnimationObject_3: typeof Handle_AIS_AnimationObject_3;
  Handle_AIS_AnimationObject_4: typeof Handle_AIS_AnimationObject_4;
  Handle_AIS_AttributeFilter_1: typeof Handle_AIS_AttributeFilter_1;
  Handle_AIS_AttributeFilter_2: typeof Handle_AIS_AttributeFilter_2;
  Handle_AIS_AttributeFilter_3: typeof Handle_AIS_AttributeFilter_3;
  Handle_AIS_AttributeFilter_4: typeof Handle_AIS_AttributeFilter_4;
  Handle_AIS_Axis_1: typeof Handle_AIS_Axis_1;
  Handle_AIS_Axis_2: typeof Handle_AIS_Axis_2;
  Handle_AIS_Axis_3: typeof Handle_AIS_Axis_3;
  Handle_AIS_Axis_4: typeof Handle_AIS_Axis_4;
  Handle_AIS_BadEdgeFilter_1: typeof Handle_AIS_BadEdgeFilter_1;
  Handle_AIS_BadEdgeFilter_2: typeof Handle_AIS_BadEdgeFilter_2;
  Handle_AIS_BadEdgeFilter_3: typeof Handle_AIS_BadEdgeFilter_3;
  Handle_AIS_BadEdgeFilter_4: typeof Handle_AIS_BadEdgeFilter_4;
  Handle_AIS_C0RegularityFilter_1: typeof Handle_AIS_C0RegularityFilter_1;
  Handle_AIS_C0RegularityFilter_2: typeof Handle_AIS_C0RegularityFilter_2;
  Handle_AIS_C0RegularityFilter_3: typeof Handle_AIS_C0RegularityFilter_3;
  Handle_AIS_C0RegularityFilter_4: typeof Handle_AIS_C0RegularityFilter_4;
  Handle_PrsDim_Relation_1: typeof Handle_PrsDim_Relation_1;
  Handle_PrsDim_Relation_2: typeof Handle_PrsDim_Relation_2;
  Handle_PrsDim_Relation_3: typeof Handle_PrsDim_Relation_3;
  Handle_PrsDim_Relation_4: typeof Handle_PrsDim_Relation_4;
  Handle_PrsDim_Chamf2dDimension_1: typeof Handle_PrsDim_Chamf2dDimension_1;
  Handle_PrsDim_Chamf2dDimension_2: typeof Handle_PrsDim_Chamf2dDimension_2;
  Handle_PrsDim_Chamf2dDimension_3: typeof Handle_PrsDim_Chamf2dDimension_3;
  Handle_PrsDim_Chamf2dDimension_4: typeof Handle_PrsDim_Chamf2dDimension_4;
  Handle_PrsDim_Chamf3dDimension_1: typeof Handle_PrsDim_Chamf3dDimension_1;
  Handle_PrsDim_Chamf3dDimension_2: typeof Handle_PrsDim_Chamf3dDimension_2;
  Handle_PrsDim_Chamf3dDimension_3: typeof Handle_PrsDim_Chamf3dDimension_3;
  Handle_PrsDim_Chamf3dDimension_4: typeof Handle_PrsDim_Chamf3dDimension_4;
  Handle_AIS_Circle_1: typeof Handle_AIS_Circle_1;
  Handle_AIS_Circle_2: typeof Handle_AIS_Circle_2;
  Handle_AIS_Circle_3: typeof Handle_AIS_Circle_3;
  Handle_AIS_Circle_4: typeof Handle_AIS_Circle_4;
  Handle_AIS_ColorScale_1: typeof Handle_AIS_ColorScale_1;
  Handle_AIS_ColorScale_2: typeof Handle_AIS_ColorScale_2;
  Handle_AIS_ColorScale_3: typeof Handle_AIS_ColorScale_3;
  Handle_AIS_ColorScale_4: typeof Handle_AIS_ColorScale_4;
  Handle_AIS_ColoredDrawer_1: typeof Handle_AIS_ColoredDrawer_1;
  Handle_AIS_ColoredDrawer_2: typeof Handle_AIS_ColoredDrawer_2;
  Handle_AIS_ColoredDrawer_3: typeof Handle_AIS_ColoredDrawer_3;
  Handle_AIS_ColoredDrawer_4: typeof Handle_AIS_ColoredDrawer_4;
  Handle_AIS_Shape_1: typeof Handle_AIS_Shape_1;
  Handle_AIS_Shape_2: typeof Handle_AIS_Shape_2;
  Handle_AIS_Shape_3: typeof Handle_AIS_Shape_3;
  Handle_AIS_Shape_4: typeof Handle_AIS_Shape_4;
  Handle_AIS_ColoredShape_1: typeof Handle_AIS_ColoredShape_1;
  Handle_AIS_ColoredShape_2: typeof Handle_AIS_ColoredShape_2;
  Handle_AIS_ColoredShape_3: typeof Handle_AIS_ColoredShape_3;
  Handle_AIS_ColoredShape_4: typeof Handle_AIS_ColoredShape_4;
  Handle_PrsDim_ConcentricRelation_1: typeof Handle_PrsDim_ConcentricRelation_1;
  Handle_PrsDim_ConcentricRelation_2: typeof Handle_PrsDim_ConcentricRelation_2;
  Handle_PrsDim_ConcentricRelation_3: typeof Handle_PrsDim_ConcentricRelation_3;
  Handle_PrsDim_ConcentricRelation_4: typeof Handle_PrsDim_ConcentricRelation_4;
  Handle_AIS_ConnectedInteractive_1: typeof Handle_AIS_ConnectedInteractive_1;
  Handle_AIS_ConnectedInteractive_2: typeof Handle_AIS_ConnectedInteractive_2;
  Handle_AIS_ConnectedInteractive_3: typeof Handle_AIS_ConnectedInteractive_3;
  Handle_AIS_ConnectedInteractive_4: typeof Handle_AIS_ConnectedInteractive_4;
  AIS_DataMapofIntegerListOfinteractive_1: typeof AIS_DataMapofIntegerListOfinteractive_1;
  AIS_DataMapofIntegerListOfinteractive_2: typeof AIS_DataMapofIntegerListOfinteractive_2;
  AIS_DataMapofIntegerListOfinteractive_3: typeof AIS_DataMapofIntegerListOfinteractive_3;
  Handle_PrsDim_DiameterDimension_1: typeof Handle_PrsDim_DiameterDimension_1;
  Handle_PrsDim_DiameterDimension_2: typeof Handle_PrsDim_DiameterDimension_2;
  Handle_PrsDim_DiameterDimension_3: typeof Handle_PrsDim_DiameterDimension_3;
  Handle_PrsDim_DiameterDimension_4: typeof Handle_PrsDim_DiameterDimension_4;
  Handle_PrsDim_EllipseRadiusDimension_1: typeof Handle_PrsDim_EllipseRadiusDimension_1;
  Handle_PrsDim_EllipseRadiusDimension_2: typeof Handle_PrsDim_EllipseRadiusDimension_2;
  Handle_PrsDim_EllipseRadiusDimension_3: typeof Handle_PrsDim_EllipseRadiusDimension_3;
  Handle_PrsDim_EllipseRadiusDimension_4: typeof Handle_PrsDim_EllipseRadiusDimension_4;
  Handle_PrsDim_EqualDistanceRelation_1: typeof Handle_PrsDim_EqualDistanceRelation_1;
  Handle_PrsDim_EqualDistanceRelation_2: typeof Handle_PrsDim_EqualDistanceRelation_2;
  Handle_PrsDim_EqualDistanceRelation_3: typeof Handle_PrsDim_EqualDistanceRelation_3;
  Handle_PrsDim_EqualDistanceRelation_4: typeof Handle_PrsDim_EqualDistanceRelation_4;
  Handle_PrsDim_EqualRadiusRelation_1: typeof Handle_PrsDim_EqualRadiusRelation_1;
  Handle_PrsDim_EqualRadiusRelation_2: typeof Handle_PrsDim_EqualRadiusRelation_2;
  Handle_PrsDim_EqualRadiusRelation_3: typeof Handle_PrsDim_EqualRadiusRelation_3;
  Handle_PrsDim_EqualRadiusRelation_4: typeof Handle_PrsDim_EqualRadiusRelation_4;
  Handle_AIS_ExclusionFilter_1: typeof Handle_AIS_ExclusionFilter_1;
  Handle_AIS_ExclusionFilter_2: typeof Handle_AIS_ExclusionFilter_2;
  Handle_AIS_ExclusionFilter_3: typeof Handle_AIS_ExclusionFilter_3;
  Handle_AIS_ExclusionFilter_4: typeof Handle_AIS_ExclusionFilter_4;
  Handle_PrsDim_FixRelation_1: typeof Handle_PrsDim_FixRelation_1;
  Handle_PrsDim_FixRelation_2: typeof Handle_PrsDim_FixRelation_2;
  Handle_PrsDim_FixRelation_3: typeof Handle_PrsDim_FixRelation_3;
  Handle_PrsDim_FixRelation_4: typeof Handle_PrsDim_FixRelation_4;
  Handle_PrsDim_IdenticRelation_1: typeof Handle_PrsDim_IdenticRelation_1;
  Handle_PrsDim_IdenticRelation_2: typeof Handle_PrsDim_IdenticRelation_2;
  Handle_PrsDim_IdenticRelation_3: typeof Handle_PrsDim_IdenticRelation_3;
  Handle_PrsDim_IdenticRelation_4: typeof Handle_PrsDim_IdenticRelation_4;
  Handle_PrsDim_LengthDimension_1: typeof Handle_PrsDim_LengthDimension_1;
  Handle_PrsDim_LengthDimension_2: typeof Handle_PrsDim_LengthDimension_2;
  Handle_PrsDim_LengthDimension_3: typeof Handle_PrsDim_LengthDimension_3;
  Handle_PrsDim_LengthDimension_4: typeof Handle_PrsDim_LengthDimension_4;
  Handle_AIS_Line_1: typeof Handle_AIS_Line_1;
  Handle_AIS_Line_2: typeof Handle_AIS_Line_2;
  Handle_AIS_Line_3: typeof Handle_AIS_Line_3;
  Handle_AIS_Line_4: typeof Handle_AIS_Line_4;
  Handle_Prs3d_ShadingAspect_1: typeof Handle_Prs3d_ShadingAspect_1;
  Handle_Prs3d_ShadingAspect_2: typeof Handle_Prs3d_ShadingAspect_2;
  Handle_Prs3d_ShadingAspect_3: typeof Handle_Prs3d_ShadingAspect_3;
  Handle_Prs3d_ShadingAspect_4: typeof Handle_Prs3d_ShadingAspect_4;
  Handle_V3d_Trihedron_1: typeof Handle_V3d_Trihedron_1;
  Handle_V3d_Trihedron_2: typeof Handle_V3d_Trihedron_2;
  Handle_V3d_Trihedron_3: typeof Handle_V3d_Trihedron_3;
  Handle_V3d_Trihedron_4: typeof Handle_V3d_Trihedron_4;
  Handle_V3d_Viewer_1: typeof Handle_V3d_Viewer_1;
  Handle_V3d_Viewer_2: typeof Handle_V3d_Viewer_2;
  Handle_V3d_Viewer_3: typeof Handle_V3d_Viewer_3;
  Handle_V3d_Viewer_4: typeof Handle_V3d_Viewer_4;
  Handle_V3d_View_1: typeof Handle_V3d_View_1;
  Handle_V3d_View_2: typeof Handle_V3d_View_2;
  Handle_V3d_View_3: typeof Handle_V3d_View_3;
  Handle_V3d_View_4: typeof Handle_V3d_View_4;
  Handle_AIS_ManipulatorObjectSequence_1: typeof Handle_AIS_ManipulatorObjectSequence_1;
  Handle_AIS_ManipulatorObjectSequence_2: typeof Handle_AIS_ManipulatorObjectSequence_2;
  Handle_AIS_ManipulatorObjectSequence_3: typeof Handle_AIS_ManipulatorObjectSequence_3;
  Handle_AIS_ManipulatorObjectSequence_4: typeof Handle_AIS_ManipulatorObjectSequence_4;
  Handle_AIS_Manipulator_1: typeof Handle_AIS_Manipulator_1;
  Handle_AIS_Manipulator_2: typeof Handle_AIS_Manipulator_2;
  Handle_AIS_Manipulator_3: typeof Handle_AIS_Manipulator_3;
  Handle_AIS_Manipulator_4: typeof Handle_AIS_Manipulator_4;
  Handle_AIS_ManipulatorOwner_1: typeof Handle_AIS_ManipulatorOwner_1;
  Handle_AIS_ManipulatorOwner_2: typeof Handle_AIS_ManipulatorOwner_2;
  Handle_AIS_ManipulatorOwner_3: typeof Handle_AIS_ManipulatorOwner_3;
  Handle_AIS_ManipulatorOwner_4: typeof Handle_AIS_ManipulatorOwner_4;
  Handle_PrsDim_MaxRadiusDimension_1: typeof Handle_PrsDim_MaxRadiusDimension_1;
  Handle_PrsDim_MaxRadiusDimension_2: typeof Handle_PrsDim_MaxRadiusDimension_2;
  Handle_PrsDim_MaxRadiusDimension_3: typeof Handle_PrsDim_MaxRadiusDimension_3;
  Handle_PrsDim_MaxRadiusDimension_4: typeof Handle_PrsDim_MaxRadiusDimension_4;
  Handle_PrsDim_MidPointRelation_1: typeof Handle_PrsDim_MidPointRelation_1;
  Handle_PrsDim_MidPointRelation_2: typeof Handle_PrsDim_MidPointRelation_2;
  Handle_PrsDim_MidPointRelation_3: typeof Handle_PrsDim_MidPointRelation_3;
  Handle_PrsDim_MidPointRelation_4: typeof Handle_PrsDim_MidPointRelation_4;
  Handle_PrsDim_MinRadiusDimension_1: typeof Handle_PrsDim_MinRadiusDimension_1;
  Handle_PrsDim_MinRadiusDimension_2: typeof Handle_PrsDim_MinRadiusDimension_2;
  Handle_PrsDim_MinRadiusDimension_3: typeof Handle_PrsDim_MinRadiusDimension_3;
  Handle_PrsDim_MinRadiusDimension_4: typeof Handle_PrsDim_MinRadiusDimension_4;
  Handle_AIS_MultipleConnectedInteractive_1: typeof Handle_AIS_MultipleConnectedInteractive_1;
  Handle_AIS_MultipleConnectedInteractive_2: typeof Handle_AIS_MultipleConnectedInteractive_2;
  Handle_AIS_MultipleConnectedInteractive_3: typeof Handle_AIS_MultipleConnectedInteractive_3;
  Handle_AIS_MultipleConnectedInteractive_4: typeof Handle_AIS_MultipleConnectedInteractive_4;
  Handle_PrsDim_OffsetDimension_1: typeof Handle_PrsDim_OffsetDimension_1;
  Handle_PrsDim_OffsetDimension_2: typeof Handle_PrsDim_OffsetDimension_2;
  Handle_PrsDim_OffsetDimension_3: typeof Handle_PrsDim_OffsetDimension_3;
  Handle_PrsDim_OffsetDimension_4: typeof Handle_PrsDim_OffsetDimension_4;
  Handle_PrsDim_ParallelRelation_1: typeof Handle_PrsDim_ParallelRelation_1;
  Handle_PrsDim_ParallelRelation_2: typeof Handle_PrsDim_ParallelRelation_2;
  Handle_PrsDim_ParallelRelation_3: typeof Handle_PrsDim_ParallelRelation_3;
  Handle_PrsDim_ParallelRelation_4: typeof Handle_PrsDim_ParallelRelation_4;
  Handle_PrsDim_PerpendicularRelation_1: typeof Handle_PrsDim_PerpendicularRelation_1;
  Handle_PrsDim_PerpendicularRelation_2: typeof Handle_PrsDim_PerpendicularRelation_2;
  Handle_PrsDim_PerpendicularRelation_3: typeof Handle_PrsDim_PerpendicularRelation_3;
  Handle_PrsDim_PerpendicularRelation_4: typeof Handle_PrsDim_PerpendicularRelation_4;
  Handle_AIS_Plane_1: typeof Handle_AIS_Plane_1;
  Handle_AIS_Plane_2: typeof Handle_AIS_Plane_2;
  Handle_AIS_Plane_3: typeof Handle_AIS_Plane_3;
  Handle_AIS_Plane_4: typeof Handle_AIS_Plane_4;
  Handle_AIS_PlaneTrihedron_1: typeof Handle_AIS_PlaneTrihedron_1;
  Handle_AIS_PlaneTrihedron_2: typeof Handle_AIS_PlaneTrihedron_2;
  Handle_AIS_PlaneTrihedron_3: typeof Handle_AIS_PlaneTrihedron_3;
  Handle_AIS_PlaneTrihedron_4: typeof Handle_AIS_PlaneTrihedron_4;
  Handle_AIS_Point_1: typeof Handle_AIS_Point_1;
  Handle_AIS_Point_2: typeof Handle_AIS_Point_2;
  Handle_AIS_Point_3: typeof Handle_AIS_Point_3;
  Handle_AIS_Point_4: typeof Handle_AIS_Point_4;
  Handle_AIS_PointCloud_1: typeof Handle_AIS_PointCloud_1;
  Handle_AIS_PointCloud_2: typeof Handle_AIS_PointCloud_2;
  Handle_AIS_PointCloud_3: typeof Handle_AIS_PointCloud_3;
  Handle_AIS_PointCloud_4: typeof Handle_AIS_PointCloud_4;
  Handle_PrsDim_RadiusDimension_1: typeof Handle_PrsDim_RadiusDimension_1;
  Handle_PrsDim_RadiusDimension_2: typeof Handle_PrsDim_RadiusDimension_2;
  Handle_PrsDim_RadiusDimension_3: typeof Handle_PrsDim_RadiusDimension_3;
  Handle_PrsDim_RadiusDimension_4: typeof Handle_PrsDim_RadiusDimension_4;
  Handle_AIS_RubberBand_1: typeof Handle_AIS_RubberBand_1;
  Handle_AIS_RubberBand_2: typeof Handle_AIS_RubberBand_2;
  Handle_AIS_RubberBand_3: typeof Handle_AIS_RubberBand_3;
  Handle_AIS_RubberBand_4: typeof Handle_AIS_RubberBand_4;
  Handle_AIS_TypeFilter_1: typeof Handle_AIS_TypeFilter_1;
  Handle_AIS_TypeFilter_2: typeof Handle_AIS_TypeFilter_2;
  Handle_AIS_TypeFilter_3: typeof Handle_AIS_TypeFilter_3;
  Handle_AIS_TypeFilter_4: typeof Handle_AIS_TypeFilter_4;
  Handle_AIS_SignatureFilter_1: typeof Handle_AIS_SignatureFilter_1;
  Handle_AIS_SignatureFilter_2: typeof Handle_AIS_SignatureFilter_2;
  Handle_AIS_SignatureFilter_3: typeof Handle_AIS_SignatureFilter_3;
  Handle_AIS_SignatureFilter_4: typeof Handle_AIS_SignatureFilter_4;
  Handle_PrsDim_SymmetricRelation_1: typeof Handle_PrsDim_SymmetricRelation_1;
  Handle_PrsDim_SymmetricRelation_2: typeof Handle_PrsDim_SymmetricRelation_2;
  Handle_PrsDim_SymmetricRelation_3: typeof Handle_PrsDim_SymmetricRelation_3;
  Handle_PrsDim_SymmetricRelation_4: typeof Handle_PrsDim_SymmetricRelation_4;
  Handle_PrsDim_TangentRelation_1: typeof Handle_PrsDim_TangentRelation_1;
  Handle_PrsDim_TangentRelation_2: typeof Handle_PrsDim_TangentRelation_2;
  Handle_PrsDim_TangentRelation_3: typeof Handle_PrsDim_TangentRelation_3;
  Handle_PrsDim_TangentRelation_4: typeof Handle_PrsDim_TangentRelation_4;
  Handle_AIS_TextLabel_1: typeof Handle_AIS_TextLabel_1;
  Handle_AIS_TextLabel_2: typeof Handle_AIS_TextLabel_2;
  Handle_AIS_TextLabel_3: typeof Handle_AIS_TextLabel_3;
  Handle_AIS_TextLabel_4: typeof Handle_AIS_TextLabel_4;
  Handle_AIS_TexturedShape_1: typeof Handle_AIS_TexturedShape_1;
  Handle_AIS_TexturedShape_2: typeof Handle_AIS_TexturedShape_2;
  Handle_AIS_TexturedShape_3: typeof Handle_AIS_TexturedShape_3;
  Handle_AIS_TexturedShape_4: typeof Handle_AIS_TexturedShape_4;
  Handle_AIS_Triangulation_1: typeof Handle_AIS_Triangulation_1;
  Handle_AIS_Triangulation_2: typeof Handle_AIS_Triangulation_2;
  Handle_AIS_Triangulation_3: typeof Handle_AIS_Triangulation_3;
  Handle_AIS_Triangulation_4: typeof Handle_AIS_Triangulation_4;
  Handle_Prs3d_PointAspect_1: typeof Handle_Prs3d_PointAspect_1;
  Handle_Prs3d_PointAspect_2: typeof Handle_Prs3d_PointAspect_2;
  Handle_Prs3d_PointAspect_3: typeof Handle_Prs3d_PointAspect_3;
  Handle_Prs3d_PointAspect_4: typeof Handle_Prs3d_PointAspect_4;
  Handle_Prs3d_DatumAspect_1: typeof Handle_Prs3d_DatumAspect_1;
  Handle_Prs3d_DatumAspect_2: typeof Handle_Prs3d_DatumAspect_2;
  Handle_Prs3d_DatumAspect_3: typeof Handle_Prs3d_DatumAspect_3;
  Handle_Prs3d_DatumAspect_4: typeof Handle_Prs3d_DatumAspect_4;
  Handle_AIS_Trihedron_1: typeof Handle_AIS_Trihedron_1;
  Handle_AIS_Trihedron_2: typeof Handle_AIS_Trihedron_2;
  Handle_AIS_Trihedron_3: typeof Handle_AIS_Trihedron_3;
  Handle_AIS_Trihedron_4: typeof Handle_AIS_Trihedron_4;
  Handle_AIS_TrihedronOwner_1: typeof Handle_AIS_TrihedronOwner_1;
  Handle_AIS_TrihedronOwner_2: typeof Handle_AIS_TrihedronOwner_2;
  Handle_AIS_TrihedronOwner_3: typeof Handle_AIS_TrihedronOwner_3;
  Handle_AIS_TrihedronOwner_4: typeof Handle_AIS_TrihedronOwner_4;
  Handle_StdPrs_BRepFont_1: typeof Handle_StdPrs_BRepFont_1;
  Handle_StdPrs_BRepFont_2: typeof Handle_StdPrs_BRepFont_2;
  Handle_StdPrs_BRepFont_3: typeof Handle_StdPrs_BRepFont_3;
  Handle_StdPrs_BRepFont_4: typeof Handle_StdPrs_BRepFont_4;
  Handle_Select3D_SensitiveSet_1: typeof Handle_Select3D_SensitiveSet_1;
  Handle_Select3D_SensitiveSet_2: typeof Handle_Select3D_SensitiveSet_2;
  Handle_Select3D_SensitiveSet_3: typeof Handle_Select3D_SensitiveSet_3;
  Handle_Select3D_SensitiveSet_4: typeof Handle_Select3D_SensitiveSet_4;
  Handle_Select3D_SensitiveFace_1: typeof Handle_Select3D_SensitiveFace_1;
  Handle_Select3D_SensitiveFace_2: typeof Handle_Select3D_SensitiveFace_2;
  Handle_Select3D_SensitiveFace_3: typeof Handle_Select3D_SensitiveFace_3;
  Handle_Select3D_SensitiveFace_4: typeof Handle_Select3D_SensitiveFace_4;
  Handle_Select3D_SensitiveSegment_1: typeof Handle_Select3D_SensitiveSegment_1;
  Handle_Select3D_SensitiveSegment_2: typeof Handle_Select3D_SensitiveSegment_2;
  Handle_Select3D_SensitiveSegment_3: typeof Handle_Select3D_SensitiveSegment_3;
  Handle_Select3D_SensitiveSegment_4: typeof Handle_Select3D_SensitiveSegment_4;
  Handle_Prs3d_InvalidAngle_1: typeof Handle_Prs3d_InvalidAngle_1;
  Handle_Prs3d_InvalidAngle_2: typeof Handle_Prs3d_InvalidAngle_2;
  Handle_Prs3d_InvalidAngle_3: typeof Handle_Prs3d_InvalidAngle_3;
  Handle_Prs3d_InvalidAngle_4: typeof Handle_Prs3d_InvalidAngle_4;
  Handle_Prs3d_IsoAspect_1: typeof Handle_Prs3d_IsoAspect_1;
  Handle_Prs3d_IsoAspect_2: typeof Handle_Prs3d_IsoAspect_2;
  Handle_Prs3d_IsoAspect_3: typeof Handle_Prs3d_IsoAspect_3;
  Handle_Prs3d_IsoAspect_4: typeof Handle_Prs3d_IsoAspect_4;
  Handle_Prs3d_PlaneAspect_1: typeof Handle_Prs3d_PlaneAspect_1;
  Handle_Prs3d_PlaneAspect_2: typeof Handle_Prs3d_PlaneAspect_2;
  Handle_Prs3d_PlaneAspect_3: typeof Handle_Prs3d_PlaneAspect_3;
  Handle_Prs3d_PlaneAspect_4: typeof Handle_Prs3d_PlaneAspect_4;
  Handle_Prs3d_PresentationShadow_1: typeof Handle_Prs3d_PresentationShadow_1;
  Handle_Prs3d_PresentationShadow_2: typeof Handle_Prs3d_PresentationShadow_2;
  Handle_Prs3d_PresentationShadow_3: typeof Handle_Prs3d_PresentationShadow_3;
  Handle_Prs3d_PresentationShadow_4: typeof Handle_Prs3d_PresentationShadow_4;
  Handle_Select3D_BVHIndexBuffer_1: typeof Handle_Select3D_BVHIndexBuffer_1;
  Handle_Select3D_BVHIndexBuffer_2: typeof Handle_Select3D_BVHIndexBuffer_2;
  Handle_Select3D_BVHIndexBuffer_3: typeof Handle_Select3D_BVHIndexBuffer_3;
  Handle_Select3D_BVHIndexBuffer_4: typeof Handle_Select3D_BVHIndexBuffer_4;
  Handle_Select3D_SensitivePoly_1: typeof Handle_Select3D_SensitivePoly_1;
  Handle_Select3D_SensitivePoly_2: typeof Handle_Select3D_SensitivePoly_2;
  Handle_Select3D_SensitivePoly_3: typeof Handle_Select3D_SensitivePoly_3;
  Handle_Select3D_SensitivePoly_4: typeof Handle_Select3D_SensitivePoly_4;
  Handle_Select3D_InteriorSensitivePointSet_1: typeof Handle_Select3D_InteriorSensitivePointSet_1;
  Handle_Select3D_InteriorSensitivePointSet_2: typeof Handle_Select3D_InteriorSensitivePointSet_2;
  Handle_Select3D_InteriorSensitivePointSet_3: typeof Handle_Select3D_InteriorSensitivePointSet_3;
  Handle_Select3D_InteriorSensitivePointSet_4: typeof Handle_Select3D_InteriorSensitivePointSet_4;
  Handle_Select3D_SensitiveBox_1: typeof Handle_Select3D_SensitiveBox_1;
  Handle_Select3D_SensitiveBox_2: typeof Handle_Select3D_SensitiveBox_2;
  Handle_Select3D_SensitiveBox_3: typeof Handle_Select3D_SensitiveBox_3;
  Handle_Select3D_SensitiveBox_4: typeof Handle_Select3D_SensitiveBox_4;
  Handle_Select3D_SensitiveCircle_1: typeof Handle_Select3D_SensitiveCircle_1;
  Handle_Select3D_SensitiveCircle_2: typeof Handle_Select3D_SensitiveCircle_2;
  Handle_Select3D_SensitiveCircle_3: typeof Handle_Select3D_SensitiveCircle_3;
  Handle_Select3D_SensitiveCircle_4: typeof Handle_Select3D_SensitiveCircle_4;
  Handle_Select3D_SensitiveCurve_1: typeof Handle_Select3D_SensitiveCurve_1;
  Handle_Select3D_SensitiveCurve_2: typeof Handle_Select3D_SensitiveCurve_2;
  Handle_Select3D_SensitiveCurve_3: typeof Handle_Select3D_SensitiveCurve_3;
  Handle_Select3D_SensitiveCurve_4: typeof Handle_Select3D_SensitiveCurve_4;
  Handle_Select3D_SensitiveGroup_1: typeof Handle_Select3D_SensitiveGroup_1;
  Handle_Select3D_SensitiveGroup_2: typeof Handle_Select3D_SensitiveGroup_2;
  Handle_Select3D_SensitiveGroup_3: typeof Handle_Select3D_SensitiveGroup_3;
  Handle_Select3D_SensitiveGroup_4: typeof Handle_Select3D_SensitiveGroup_4;
  Handle_Select3D_SensitivePoint_1: typeof Handle_Select3D_SensitivePoint_1;
  Handle_Select3D_SensitivePoint_2: typeof Handle_Select3D_SensitivePoint_2;
  Handle_Select3D_SensitivePoint_3: typeof Handle_Select3D_SensitivePoint_3;
  Handle_Select3D_SensitivePoint_4: typeof Handle_Select3D_SensitivePoint_4;
  Handle_Select3D_SensitivePrimitiveArray_1: typeof Handle_Select3D_SensitivePrimitiveArray_1;
  Handle_Select3D_SensitivePrimitiveArray_2: typeof Handle_Select3D_SensitivePrimitiveArray_2;
  Handle_Select3D_SensitivePrimitiveArray_3: typeof Handle_Select3D_SensitivePrimitiveArray_3;
  Handle_Select3D_SensitivePrimitiveArray_4: typeof Handle_Select3D_SensitivePrimitiveArray_4;
  Handle_Select3D_SensitiveTriangle_1: typeof Handle_Select3D_SensitiveTriangle_1;
  Handle_Select3D_SensitiveTriangle_2: typeof Handle_Select3D_SensitiveTriangle_2;
  Handle_Select3D_SensitiveTriangle_3: typeof Handle_Select3D_SensitiveTriangle_3;
  Handle_Select3D_SensitiveTriangle_4: typeof Handle_Select3D_SensitiveTriangle_4;
  Handle_Select3D_SensitiveTriangulation_1: typeof Handle_Select3D_SensitiveTriangulation_1;
  Handle_Select3D_SensitiveTriangulation_2: typeof Handle_Select3D_SensitiveTriangulation_2;
  Handle_Select3D_SensitiveTriangulation_3: typeof Handle_Select3D_SensitiveTriangulation_3;
  Handle_Select3D_SensitiveTriangulation_4: typeof Handle_Select3D_SensitiveTriangulation_4;
  Handle_Select3D_SensitiveWire_1: typeof Handle_Select3D_SensitiveWire_1;
  Handle_Select3D_SensitiveWire_2: typeof Handle_Select3D_SensitiveWire_2;
  Handle_Select3D_SensitiveWire_3: typeof Handle_Select3D_SensitiveWire_3;
  Handle_Select3D_SensitiveWire_4: typeof Handle_Select3D_SensitiveWire_4;
  Handle_SelectMgr_AndFilter_1: typeof Handle_SelectMgr_AndFilter_1;
  Handle_SelectMgr_AndFilter_2: typeof Handle_SelectMgr_AndFilter_2;
  Handle_SelectMgr_AndFilter_3: typeof Handle_SelectMgr_AndFilter_3;
  Handle_SelectMgr_AndFilter_4: typeof Handle_SelectMgr_AndFilter_4;
  Handle_SelectMgr_OrFilter_1: typeof Handle_SelectMgr_OrFilter_1;
  Handle_SelectMgr_OrFilter_2: typeof Handle_SelectMgr_OrFilter_2;
  Handle_SelectMgr_OrFilter_3: typeof Handle_SelectMgr_OrFilter_3;
  Handle_SelectMgr_OrFilter_4: typeof Handle_SelectMgr_OrFilter_4;
  Handle_SelectMgr_SelectionManager_1: typeof Handle_SelectMgr_SelectionManager_1;
  Handle_SelectMgr_SelectionManager_2: typeof Handle_SelectMgr_SelectionManager_2;
  Handle_SelectMgr_SelectionManager_3: typeof Handle_SelectMgr_SelectionManager_3;
  Handle_SelectMgr_SelectionManager_4: typeof Handle_SelectMgr_SelectionManager_4;
  Handle_StdSelect_BRepOwner_1: typeof Handle_StdSelect_BRepOwner_1;
  Handle_StdSelect_BRepOwner_2: typeof Handle_StdSelect_BRepOwner_2;
  Handle_StdSelect_BRepOwner_3: typeof Handle_StdSelect_BRepOwner_3;
  Handle_StdSelect_BRepOwner_4: typeof Handle_StdSelect_BRepOwner_4;
  Handle_StdSelect_EdgeFilter_1: typeof Handle_StdSelect_EdgeFilter_1;
  Handle_StdSelect_EdgeFilter_2: typeof Handle_StdSelect_EdgeFilter_2;
  Handle_StdSelect_EdgeFilter_3: typeof Handle_StdSelect_EdgeFilter_3;
  Handle_StdSelect_EdgeFilter_4: typeof Handle_StdSelect_EdgeFilter_4;
  Handle_StdSelect_FaceFilter_1: typeof Handle_StdSelect_FaceFilter_1;
  Handle_StdSelect_FaceFilter_2: typeof Handle_StdSelect_FaceFilter_2;
  Handle_StdSelect_FaceFilter_3: typeof Handle_StdSelect_FaceFilter_3;
  Handle_StdSelect_FaceFilter_4: typeof Handle_StdSelect_FaceFilter_4;
  Handle_StdSelect_Shape_1: typeof Handle_StdSelect_Shape_1;
  Handle_StdSelect_Shape_2: typeof Handle_StdSelect_Shape_2;
  Handle_StdSelect_Shape_3: typeof Handle_StdSelect_Shape_3;
  Handle_StdSelect_Shape_4: typeof Handle_StdSelect_Shape_4;
  Handle_StdSelect_ShapeTypeFilter_1: typeof Handle_StdSelect_ShapeTypeFilter_1;
  Handle_StdSelect_ShapeTypeFilter_2: typeof Handle_StdSelect_ShapeTypeFilter_2;
  Handle_StdSelect_ShapeTypeFilter_3: typeof Handle_StdSelect_ShapeTypeFilter_3;
  Handle_StdSelect_ShapeTypeFilter_4: typeof Handle_StdSelect_ShapeTypeFilter_4;
  Handle_V3d_AmbientLight_1: typeof Handle_V3d_AmbientLight_1;
  Handle_V3d_AmbientLight_2: typeof Handle_V3d_AmbientLight_2;
  Handle_V3d_AmbientLight_3: typeof Handle_V3d_AmbientLight_3;
  Handle_V3d_AmbientLight_4: typeof Handle_V3d_AmbientLight_4;
  Handle_V3d_BadValue_1: typeof Handle_V3d_BadValue_1;
  Handle_V3d_BadValue_2: typeof Handle_V3d_BadValue_2;
  Handle_V3d_BadValue_3: typeof Handle_V3d_BadValue_3;
  Handle_V3d_BadValue_4: typeof Handle_V3d_BadValue_4;
  Handle_V3d_CircularGrid_1: typeof Handle_V3d_CircularGrid_1;
  Handle_V3d_CircularGrid_2: typeof Handle_V3d_CircularGrid_2;
  Handle_V3d_CircularGrid_3: typeof Handle_V3d_CircularGrid_3;
  Handle_V3d_CircularGrid_4: typeof Handle_V3d_CircularGrid_4;
  Handle_V3d_PositionLight_1: typeof Handle_V3d_PositionLight_1;
  Handle_V3d_PositionLight_2: typeof Handle_V3d_PositionLight_2;
  Handle_V3d_PositionLight_3: typeof Handle_V3d_PositionLight_3;
  Handle_V3d_PositionLight_4: typeof Handle_V3d_PositionLight_4;
  Handle_V3d_DirectionalLight_1: typeof Handle_V3d_DirectionalLight_1;
  Handle_V3d_DirectionalLight_2: typeof Handle_V3d_DirectionalLight_2;
  Handle_V3d_DirectionalLight_3: typeof Handle_V3d_DirectionalLight_3;
  Handle_V3d_DirectionalLight_4: typeof Handle_V3d_DirectionalLight_4;
  Handle_V3d_Plane_1: typeof Handle_V3d_Plane_1;
  Handle_V3d_Plane_2: typeof Handle_V3d_Plane_2;
  Handle_V3d_Plane_3: typeof Handle_V3d_Plane_3;
  Handle_V3d_Plane_4: typeof Handle_V3d_Plane_4;
  Handle_V3d_PositionalLight_1: typeof Handle_V3d_PositionalLight_1;
  Handle_V3d_PositionalLight_2: typeof Handle_V3d_PositionalLight_2;
  Handle_V3d_PositionalLight_3: typeof Handle_V3d_PositionalLight_3;
  Handle_V3d_PositionalLight_4: typeof Handle_V3d_PositionalLight_4;
  Handle_V3d_RectangularGrid_1: typeof Handle_V3d_RectangularGrid_1;
  Handle_V3d_RectangularGrid_2: typeof Handle_V3d_RectangularGrid_2;
  Handle_V3d_RectangularGrid_3: typeof Handle_V3d_RectangularGrid_3;
  Handle_V3d_RectangularGrid_4: typeof Handle_V3d_RectangularGrid_4;
  Handle_V3d_SpotLight_1: typeof Handle_V3d_SpotLight_1;
  Handle_V3d_SpotLight_2: typeof Handle_V3d_SpotLight_2;
  Handle_V3d_SpotLight_3: typeof Handle_V3d_SpotLight_3;
  Handle_V3d_SpotLight_4: typeof Handle_V3d_SpotLight_4;
  Handle_V3d_UnMapped_1: typeof Handle_V3d_UnMapped_1;
  Handle_V3d_UnMapped_2: typeof Handle_V3d_UnMapped_2;
  Handle_V3d_UnMapped_3: typeof Handle_V3d_UnMapped_3;
  Handle_V3d_UnMapped_4: typeof Handle_V3d_UnMapped_4;
  PrsDim_DimensionSelectionMode: typeof PrsDim_DimensionSelectionMode;
  Prs3d_VertexDrawMode: typeof Prs3d_VertexDrawMode;
  Prs3d_TypeOfHLR: typeof Prs3d_TypeOfHLR;
  PrsMgr_TypeOfPresentation3d: typeof PrsMgr_TypeOfPresentation3d;
  Select3D_TypeOfSensitivity: typeof Select3D_TypeOfSensitivity;
  SelectMgr_StateOfSelection: typeof SelectMgr_StateOfSelection;
  SelectMgr_TypeOfBVHUpdate: typeof SelectMgr_TypeOfBVHUpdate;
  SelectMgr_TypeOfUpdate: typeof SelectMgr_TypeOfUpdate;
  PrsDim_DisplaySpecialSymbol: typeof PrsDim_DisplaySpecialSymbol;
  AIS_KindOfInteractive: typeof AIS_KindOfInteractive;
  AIS_DragAction: typeof AIS_DragAction;
  PrsDim_KindOfDimension: typeof PrsDim_KindOfDimension;
  PrsDim_KindOfSurface: typeof PrsDim_KindOfSurface;
  Prs3d_DimensionArrowOrientation: typeof Prs3d_DimensionArrowOrientation;
  Prs3d_DimensionTextHorizontalPosition: typeof Prs3d_DimensionTextHorizontalPosition;
  Prs3d_DimensionTextVerticalPosition: typeof Prs3d_DimensionTextVerticalPosition;
  PrsDim_TypeOfAngle: typeof PrsDim_TypeOfAngle;
  PrsDim_TypeOfAngleArrowVisibility: typeof PrsDim_TypeOfAngleArrowVisibility;
  AIS_DisplayStatus: typeof AIS_DisplayStatus;
  AIS_DisplayMode: typeof AIS_DisplayMode;
  AIS_ClearMode: typeof AIS_ClearMode;
  AIS_SelectStatus: typeof AIS_SelectStatus;
  AIS_SelectionModesConcurrency: typeof AIS_SelectionModesConcurrency;
  AIS_StatusOfDetection: typeof AIS_StatusOfDetection;
  AIS_StatusOfPick: typeof AIS_StatusOfPick;
  AIS_TypeOfIso: typeof AIS_TypeOfIso;
  Prs3d_TypeOfHighlight: typeof Prs3d_TypeOfHighlight;
  SelectMgr_FilterType: typeof SelectMgr_FilterType;
  SelectMgr_PickingStrategy: typeof SelectMgr_PickingStrategy;
  SelectMgr_TypeOfDepthTolerance: typeof SelectMgr_TypeOfDepthTolerance;
  StdSelect_TypeOfSelectionImage: typeof StdSelect_TypeOfSelectionImage;
  AIS_TypeOfAxis: typeof AIS_TypeOfAxis;
  DsgPrs_ArrowSide: typeof DsgPrs_ArrowSide;
  StdPrs_Volume: typeof StdPrs_Volume;
  AIS_ConnectStatus: typeof AIS_ConnectStatus;
  PrsDim_TypeOfDist: typeof PrsDim_TypeOfDist;
  AIS_TypeOfAttribute: typeof AIS_TypeOfAttribute;
  AIS_ManipulatorMode: typeof AIS_ManipulatorMode;
  V3d_StereoDumpOptions: typeof V3d_StereoDumpOptions;
  V3d_TypeOfAxe: typeof V3d_TypeOfAxe;
  V3d_TypeOfBackfacingModel: typeof V3d_TypeOfBackfacingModel;
  V3d_TypeOfOrientation: typeof V3d_TypeOfOrientation;
  V3d_TypeOfView: typeof V3d_TypeOfView;
  V3d_TypeOfVisualization: typeof V3d_TypeOfVisualization;
  AIS_MouseGesture: typeof AIS_MouseGesture;
  AIS_NavigationMode: typeof AIS_NavigationMode;
  AIS_TypeOfPlane: typeof AIS_TypeOfPlane;
  AIS_RotationMode: typeof AIS_RotationMode;
  AIS_TrihedronSelectionMode: typeof AIS_TrihedronSelectionMode;
  Prs3d_DatumAttribute: typeof Prs3d_DatumAttribute;
  Prs3d_DatumAxes: typeof Prs3d_DatumAxes;
  Prs3d_DatumMode: typeof Prs3d_DatumMode;
  Prs3d_DatumParts: typeof Prs3d_DatumParts;
  AIS_ViewSelectionTool: typeof AIS_ViewSelectionTool;
  AIS_ViewInputBufferType: typeof AIS_ViewInputBufferType;
  AIS_WalkTranslation: typeof AIS_WalkTranslation;
  AIS_WalkRotation: typeof AIS_WalkRotation;
  Prs3d_TypeOfLinePicking: typeof Prs3d_TypeOfLinePicking;
  PrsDim_KindOfRelation: typeof PrsDim_KindOfRelation;
  StdSelect_TypeOfEdge: typeof StdSelect_TypeOfEdge;
  StdSelect_TypeOfFace: typeof StdSelect_TypeOfFace;
  V3d_TypeOfPickLight: typeof V3d_TypeOfPickLight;
  V3d_TypeOfRepresentation: typeof V3d_TypeOfRepresentation;
  V3d_TypeOfPickCamera: typeof V3d_TypeOfPickCamera;
};
