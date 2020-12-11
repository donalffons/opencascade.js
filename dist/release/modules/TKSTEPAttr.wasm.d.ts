declare const libName = "./modules/TKSTEPAttr.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class RWStepDimTol_RWAngularityTolerance {
  constructor()
  ReadStep(data: Handle_StepData_StepReaderData, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWCircularRunoutTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWCoaxialityTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWCommonDatum {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWConcentricityTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWCylindricityTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWDatum {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWDatumFeature {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWDatumReference {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWDatumReferenceCompartment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWDatumReferenceElement {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWDatumReferenceModifierWithValue {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepDimTol_RWDatumSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWDatumTarget {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWFlatnessTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeneralDatumReference {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeoTolAndGeoTolWthDatRef {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeoTolAndGeoTolWthMaxTol {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeoTolAndGeoTolWthMod {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeometricTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeometricToleranceRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeometricToleranceWithDatumReference {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeometricToleranceWithDefinedAreaUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeometricToleranceWithDefinedUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeometricToleranceWithMaximumTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWGeometricToleranceWithModifiers {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWLineProfileTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWModifiedGeometricTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWNonUniformZoneDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWParallelismTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWPerpendicularityTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWPlacedDatumTargetFeature {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWPositionTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWProjectedZoneDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWRoundnessTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWRunoutZoneDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWRunoutZoneOrientation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepDimTol_RWStraightnessTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWSurfaceProfileTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWSymmetryTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWToleranceZone {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWToleranceZoneDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWToleranceZoneForm {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepDimTol_RWTotalRunoutTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepDimTol_RWUnequallyDisposedGeometricTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWAnnotationCurveOccurrence {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWAnnotationCurveOccurrenceAndGeomReprItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWAnnotationFillArea {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWAnnotationFillAreaOccurrence {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWAnnotationOccurrence {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWAnnotationPlane {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWAreaInSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWBackgroundColour {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCameraImage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCameraModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWCameraModelD2 {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCameraModelD3 {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCameraModelD3MultiClipping {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCameraModelD3MultiClippingIntersection {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCameraModelD3MultiClippingUnion {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCameraUsage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCharacterizedObjAndRepresentationAndDraughtingModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWColour {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWColourRgb {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWColourSpecification {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWCompositeText {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCompositeTextWithExtent {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWContextDependentInvisibility {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWContextDependentOverRidingStyledItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCoordinatesList {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWCurveStyle {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCurveStyleFont {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWCurveStyleFontPattern {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWDraughtingCallout {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWDraughtingModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWDraughtingPreDefinedColour {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWDraughtingPreDefinedCurveFont {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWExternallyDefinedCurveFont {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWFillAreaStyle {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWFillAreaStyleColour {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWInvisibility {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWMechanicalDesignGeometricPresentationArea {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWMechanicalDesignGeometricPresentationRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWOverRidingStyledItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPlanarBox {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPlanarExtent {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWPointStyle {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPreDefinedColour {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWPreDefinedCurveFont {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWPreDefinedItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWPresentationArea {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentationLayerAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentationLayerUsage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentationRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentationSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWPresentationSize {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentationStyleAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentationStyleByContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentationView {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWPresentedItemRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWStyledItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceSideStyle {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleBoundary {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleControlGrid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleFillArea {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleParameterLine {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleReflectanceAmbient {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleRendering {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleRenderingWithProperties {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleSegmentationCurve {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleSilhouette {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleTransparent {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWSurfaceStyleUsage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTemplate {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTemplateInstance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTessellatedAnnotationOccurrence {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class StepVisual_TessellatedItem extends StepGeom_GeometricRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CoordinatesList extends StepVisual_TessellatedItem {
  constructor()
  Init(theName: any, thePoints: any): void;
  Points(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_TessellatedCurveSet extends StepVisual_TessellatedItem {
  constructor()
  Init(theName: any, theCoordList: any, theCurves: NCollection_Handle<StepVisual_VectorOfHSequenceOfInteger>): void;
  CoordList(): any;
  Curves(): NCollection_Handle<StepVisual_VectorOfHSequenceOfInteger>;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class RWStepVisual_RWTessellatedCurveSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTessellatedGeometricSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTessellatedItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepVisual_RWTextLiteral {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTextStyle {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTextStyleForDefinedFont {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWTextStyleWithBoxCharacteristics {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepVisual_RWViewVolume {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class StepDimTol_GeometricToleranceTarget extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  DimensionalLocation(): any;
  DimensionalSize(): any;
  ProductDefinitionShape(): any;
  ShapeAspect(): any;
}

export declare class StepDimTol_GeometricTolerance extends Standard_Transient {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any): void;
  Init_2(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget): void;
  Name(): any;
  SetName(theName: any): void;
  Description(): any;
  SetDescription(theDescription: any): void;
  Magnitude(): any;
  SetMagnitude(theMagnitude: any): void;
  TolerancedShapeAspect(): StepDimTol_GeometricToleranceTarget;
  SetTolerancedShapeAspect_1(theTolerancedShapeAspect: any): void;
  SetTolerancedShapeAspect_2(theTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumReferenceModifierWithValue extends Standard_Transient {
  constructor()
  Init(theModifierType: StepDimTol_DatumReferenceModifierType, theModifierValue: any): void;
  ModifierType(): StepDimTol_DatumReferenceModifierType;
  SetModifierType(theModifierType: StepDimTol_DatumReferenceModifierType): void;
  ModifierValue(): any;
  SetModifierValue(theModifierValue: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_SimpleDatumReferenceModifierMember extends StepData_SelectInt {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(a0: Standard_CString): Standard_Boolean;
  Kind(): Standard_Integer;
  EnumText(): Standard_CString;
  SetEnumText(theValue: Standard_Integer, theText: Standard_CString): void;
  SetValue(theValue: StepDimTol_SimpleDatumReferenceModifier): void;
  Value(): StepDimTol_SimpleDatumReferenceModifier;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumReferenceModifier extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  DatumReferenceModifierWithValue(): any;
  SimpleDatumReferenceModifierMember(): any;
}

export declare class StepVisual_TessellatedGeometricSet extends StepVisual_TessellatedItem {
  constructor()
  Init(theName: any, theItems: NCollection_Handle<StepVisual_Array1OfTessellatedItem>): void;
  Items(): NCollection_Handle<StepVisual_Array1OfTessellatedItem>;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_Datum extends StepRepr_ShapeAspect {
  constructor()
  Init(theShapeAspect_Name: any, theShapeAspect_Description: any, theShapeAspect_OfShape: any, theShapeAspect_ProductDefinitional: StepData_Logical, theIdentification: any): void;
  Identification(): any;
  SetIdentification(theIdentification: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumSystemOrReference extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  DatumSystem(): any;
  DatumReference(): any;
}

export declare class StepVisual_DraughtingModel extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationStyleSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PointStyle(): any;
  CurveStyle(): any;
  NullStyle(): any;
  SurfaceStyleUsage(): any;
}

export declare class StepVisual_PresentationStyleAssignment extends Standard_Transient {
  constructor()
  Init(aStyles: any): void;
  SetStyles(aStyles: any): void;
  Styles(): any;
  StylesValue(num: Standard_Integer): StepVisual_PresentationStyleSelect;
  NbStyles(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentedItem extends Standard_Transient {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumReference extends Standard_Transient {
  constructor()
  Init(thePrecedence: Standard_Integer, theReferencedDatum: any): void;
  Precedence(): Standard_Integer;
  SetPrecedence(thePrecedence: Standard_Integer): void;
  ReferencedDatum(): any;
  SetReferencedDatum(theReferencedDatum: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeometricToleranceWithDatumReference extends StepDimTol_GeometricTolerance {
  constructor()
  Init_1(theGeometricTolerance_Name: any, theGeometricTolerance_Description: any, theGeometricTolerance_Magnitude: any, theGeometricTolerance_TolerancedShapeAspect: any, theDatumSystem: any): void;
  Init_2(theGeometricTolerance_Name: any, theGeometricTolerance_Description: any, theGeometricTolerance_Magnitude: any, theGeometricTolerance_TolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, theDatumSystem: any): void;
  DatumSystem(): any;
  DatumSystemAP242(): any;
  SetDatumSystem_1(theDatumSystem: any): void;
  SetDatumSystem_2(theDatumSystem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_AngularityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumOrCommonDatum extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Datum(): any;
  CommonDatumList(): any;
}

export declare class StepDimTol_GeneralDatumReference extends StepRepr_ShapeAspect {
  constructor()
  Init(theName: any, theDescription: any, theOfShape: any, theProductDefinitional: StepData_Logical, theBase: StepDimTol_DatumOrCommonDatum, theHasModifiers: Standard_Boolean, theModifiers: any): void;
  Base(): StepDimTol_DatumOrCommonDatum;
  SetBase(theBase: StepDimTol_DatumOrCommonDatum): void;
  HasModifiers(): Standard_Boolean;
  Modifiers(): any;
  SetModifiers(theModifiers: any): void;
  NbModifiers(): Standard_Integer;
  ModifiersValue_1(theNum: Standard_Integer): StepDimTol_DatumReferenceModifier;
  ModifiersValue_2(theNum: Standard_Integer, theItem: StepDimTol_DatumReferenceModifier): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumReferenceCompartment extends StepDimTol_GeneralDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumReferenceElement extends StepDimTol_GeneralDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ToleranceZoneTarget extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  DimensionalLocation(): any;
  DimensionalSize(): any;
  GeometricTolerance(): any;
  GeneralDatumReference(): any;
}

export declare class StepDimTol_CircularRunoutTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_CoaxialityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_CommonDatum extends StepRepr_CompositeShapeAspect {
  constructor()
  Init(theShapeAspect_Name: any, theShapeAspect_Description: any, theShapeAspect_OfShape: any, theShapeAspect_ProductDefinitional: StepData_Logical, theDatum_Name: any, theDatum_Description: any, theDatum_OfShape: any, theDatum_ProductDefinitional: StepData_Logical, theDatum_Identification: any): void;
  Datum(): any;
  SetDatum(theDatum: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ConcentricityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_CylindricityTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumFeature extends StepRepr_ShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumSystem extends StepRepr_ShapeAspect {
  constructor()
  Init(theName: any, theDescription: any, theOfShape: any, theProductDefinitional: StepData_Logical, theConstituents: any): void;
  Constituents(): any;
  SetConstituents(theConstituents: any): void;
  NbConstituents(): Standard_Integer;
  ConstituentsValue_1(num: Standard_Integer): any;
  ConstituentsValue_2(num: Standard_Integer, theItem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_DatumTarget extends StepRepr_ShapeAspect {
  constructor()
  Init(theShapeAspect_Name: any, theShapeAspect_Description: any, theShapeAspect_OfShape: any, theShapeAspect_ProductDefinitional: StepData_Logical, theTargetId: any): void;
  TargetId(): any;
  SetTargetId(theTargetId: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_FlatnessTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeoTolAndGeoTolWthDatRef extends StepDimTol_GeometricTolerance {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any, theGTWDR: any, theType: StepDimTol_GeometricToleranceType): void;
  Init_2(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, aGTWDR: any, theType: StepDimTol_GeometricToleranceType): void;
  SetGeometricToleranceWithDatumReference(theGTWDR: any): void;
  GetGeometricToleranceWithDatumReference(): any;
  SetGeometricToleranceType(theType: StepDimTol_GeometricToleranceType): void;
  GetToleranceType(): StepDimTol_GeometricToleranceType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod extends StepDimTol_GeometricTolerance {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any, theGTWDR: any, theGTWM: any, theType: StepDimTol_GeometricToleranceType): void;
  Init_2(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, aGTWDR: any, aGTWM: any, theType: StepDimTol_GeometricToleranceType): void;
  SetGeometricToleranceWithDatumReference(theGTWDR: any): void;
  GetGeometricToleranceWithDatumReference(): any;
  SetGeometricToleranceWithModifiers(theGTWM: any): void;
  GetGeometricToleranceWithModifiers(): any;
  SetGeometricToleranceType(theType: StepDimTol_GeometricToleranceType): void;
  GetToleranceType(): StepDimTol_GeometricToleranceType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol extends StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any, theGTWDR: any, theGTWM: any, theMaxTol: any, theType: StepDimTol_GeometricToleranceType): void;
  Init_2(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, aGTWDR: any, aGTWM: any, theMaxTol: any, theType: StepDimTol_GeometricToleranceType): void;
  SetMaxTolerance(theMaxTol: any): void;
  GetMaxTolerance(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol extends StepDimTol_GeometricTolerance {
  constructor()
  Init_1(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: any, aGTWDR: any, aMGT: any): void;
  Init_2(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, aGTWDR: any, aMGT: any): void;
  SetGeometricToleranceWithDatumReference(aGTWDR: any): void;
  GetGeometricToleranceWithDatumReference(): any;
  SetModifiedGeometricTolerance(aMGT: any): void;
  GetModifiedGeometricTolerance(): any;
  SetPositionTolerance(aPT: any): void;
  GetPositionTolerance(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol extends StepDimTol_GeoTolAndGeoTolWthDatRef {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any, theGTWDR: any, theType: StepDimTol_GeometricToleranceType, theUDGT: any): void;
  Init_2(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, aGTWDR: any, theType: StepDimTol_GeometricToleranceType, theUDGT: any): void;
  SetUnequallyDisposedGeometricTolerance(theUDGT: any): void;
  GetUnequallyDisposedGeometricTolerance(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeoTolAndGeoTolWthMod extends StepDimTol_GeometricTolerance {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any, theGTWM: any, theType: StepDimTol_GeometricToleranceType): void;
  Init_2(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, aGTWM: any, theType: StepDimTol_GeometricToleranceType): void;
  SetGeometricToleranceWithModifiers(theGTWM: any): void;
  GetGeometricToleranceWithModifiers(): any;
  SetGeometricToleranceType(theType: StepDimTol_GeometricToleranceType): void;
  GetToleranceType(): StepDimTol_GeometricToleranceType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeoTolAndGeoTolWthMaxTol extends StepDimTol_GeoTolAndGeoTolWthMod {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any, theGTWM: any, theMaxTol: any, theType: StepDimTol_GeometricToleranceType): void;
  Init_2(aName: any, aDescription: any, aMagnitude: any, aTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, aGTWM: any, theMaxTol: any, theType: StepDimTol_GeometricToleranceType): void;
  SetMaxTolerance(theMaxTol: any): void;
  GetMaxTolerance(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeometricToleranceRelationship extends Standard_Transient {
  constructor()
  Init(theName: any, theDescription: any, theRelatingGeometricTolerance: any, theRelatedGeometricTolerance: any): void;
  Name(): any;
  SetName(theName: any): void;
  Description(): any;
  SetDescription(theDescription: any): void;
  RelatingGeometricTolerance(): any;
  SetRelatingGeometricTolerance(theRelatingGeometricTolerance: any): void;
  RelatedGeometricTolerance(): any;
  SetRelatedGeometricTolerance(theRelatedGeometricTolerance: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeometricToleranceWithDefinedUnit extends StepDimTol_GeometricTolerance {
  constructor()
  Init_1(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: any, theUnitSize: any): void;
  Init_2(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, theUnitSize: any): void;
  UnitSize(): any;
  SetUnitSize(theUnitSize: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeometricToleranceWithDefinedAreaUnit extends StepDimTol_GeometricToleranceWithDefinedUnit {
  constructor()
  Init(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, theUnitSize: any, theAreaType: StepDimTol_AreaUnitType, theHasSecondUnitSize: Standard_Boolean, theSecondUnitSize: any): void;
  AreaType(): StepDimTol_AreaUnitType;
  SetAreaType(theAreaType: StepDimTol_AreaUnitType): void;
  SecondUnitSize(): any;
  SetSecondUnitSize(theSecondUnitSize: any): void;
  HasSecondUnitSize(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeometricToleranceWithModifiers extends StepDimTol_GeometricTolerance {
  constructor()
  Init(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, theModifiers: any): void;
  Modifiers(): any;
  SetModifiers(theModifiers: any): void;
  NbModifiers(): Standard_Integer;
  ModifierValue(theNum: Standard_Integer): StepDimTol_GeometricToleranceModifier;
  SetModifierValue(theNum: Standard_Integer, theItem: StepDimTol_GeometricToleranceModifier): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_GeometricToleranceWithMaximumTolerance extends StepDimTol_GeometricToleranceWithModifiers {
  constructor()
  Init(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, theModifiers: any, theUnitSize: any): void;
  MaximumUpperTolerance(): any;
  SetMaximumUpperTolerance(theMaximumUpperTolerance: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_LineProfileTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ModifiedGeometricTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  Init_1(theGeometricTolerance_Name: any, theGeometricTolerance_Description: any, theGeometricTolerance_Magnitude: any, theGeometricTolerance_TolerancedShapeAspect: any, theModifier: StepDimTol_LimitCondition): void;
  Init_2(theGeometricTolerance_Name: any, theGeometricTolerance_Description: any, theGeometricTolerance_Magnitude: any, theGeometricTolerance_TolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, theModifier: StepDimTol_LimitCondition): void;
  Modifier(): StepDimTol_LimitCondition;
  SetModifier(theModifier: StepDimTol_LimitCondition): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ToleranceZoneForm extends Standard_Transient {
  constructor()
  Init(theName: any): void;
  Name(): any;
  SetName(theName: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ToleranceZone extends StepRepr_ShapeAspect {
  constructor()
  Init(theName: any, theDescription: any, theOfShape: any, theProductDefinitional: StepData_Logical, theDefiningTolerance: any, theForm: any): void;
  DefiningTolerance(): any;
  SetDefiningTolerance(theDefiningTolerance: any): void;
  NbDefiningTolerances(): Standard_Integer;
  DefiningToleranceValue(theNum: Standard_Integer): StepDimTol_ToleranceZoneTarget;
  SetDefiningToleranceValue(theNum: Standard_Integer, theItem: StepDimTol_ToleranceZoneTarget): void;
  Form(): any;
  SetForm(theForm: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ToleranceZoneDefinition extends Standard_Transient {
  constructor()
  Init(theZone: any, theBoundaries: any): void;
  Boundaries(): any;
  SetBoundaries(theBoundaries: any): void;
  NbBoundaries(): Standard_Integer;
  BoundariesValue(theNum: Standard_Integer): any;
  SetBoundariesValue(theNum: Standard_Integer, theItem: any): void;
  Zone(): any;
  SetZone(theZone: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_NonUniformZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ParallelismTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_PerpendicularityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_PlacedDatumTargetFeature extends StepDimTol_DatumTarget {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_PositionTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ProjectedZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
  constructor()
  Init(theZone: any, theBoundaries: any, theProjectionEnd: any, theProjectionLength: any): void;
  ProjectionEnd(): any;
  SetProjectionEnd(theProjectionEnd: any): void;
  ProjectionLength(): any;
  SetProjectionLength(theProjectionLength: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_RoundnessTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_RunoutZoneOrientation extends Standard_Transient {
  constructor()
  Init(theAngle: any): void;
  Angle(): any;
  SetAngle(theAngle: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_RunoutZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
  constructor()
  Init(theZone: any, theBoundaries: any, theOrientation: any): void;
  Orientation(): any;
  SetOrientation(theOrientation: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_ShapeToleranceSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  GeometricTolerance(): any;
  PlusMinusTolerance(): any;
}

export declare class StepDimTol_StraightnessTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_SurfaceProfileTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_SymmetryTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_TotalRunoutTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepDimTol_UnequallyDisposedGeometricTolerance extends StepDimTol_GeometricTolerance {
  constructor()
  Init(theName: any, theDescription: any, theMagnitude: any, theTolerancedShapeAspect: StepDimTol_GeometricToleranceTarget, theDisplacement: any): void;
  Displacement(): any;
  SetDisplacement(theDisplacement: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_StyledItemTarget extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  GeometricRepresentationItem(): any;
  MappedItem(): any;
  Representation(): any;
  TopologicalRepresentationItem(): any;
}

export declare class StepVisual_StyledItem extends StepRepr_RepresentationItem {
  constructor()
  Init(aName: any, aStyles: any, aItem: any): void;
  SetStyles(aStyles: any): void;
  Styles(): any;
  StylesValue(num: Standard_Integer): any;
  NbStyles(): Standard_Integer;
  SetItem_1(aItem: any): void;
  Item(): any;
  SetItem_2(aItem: StepVisual_StyledItemTarget): void;
  ItemAP242(): StepVisual_StyledItemTarget;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationOccurrence extends StepVisual_StyledItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationCurveOccurrence extends StepVisual_AnnotationOccurrence {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationCurveOccurrenceAndGeomReprItem extends StepVisual_AnnotationCurveOccurrence {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationFillArea extends StepShape_GeometricCurveSet {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationFillAreaOccurrence extends StepVisual_AnnotationOccurrence {
  constructor()
  Init(theName: any, theStyles: any, theItem: any, theFillStyleTarget: any): void;
  FillStyleTarget(): any;
  SetFillStyleTarget(theTarget: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationPlaneElement extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  DraughtingCallout(): any;
  StyledItem(): any;
}

export declare class StepVisual_AnnotationPlane extends StepVisual_AnnotationOccurrence {
  constructor()
  Init(theName: any, theStyles: any, theItem: any, theElements: any): void;
  Elements(): any;
  SetElements(theElements: any): void;
  NbElements(): Standard_Integer;
  ElementsValue(theNum: Standard_Integer): StepVisual_AnnotationPlaneElement;
  SetElementsValue(theNum: Standard_Integer, theItem: StepVisual_AnnotationPlaneElement): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationText extends StepRepr_MappedItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AnnotationTextOccurrence extends StepVisual_AnnotationOccurrence {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AreaInSet extends Standard_Transient {
  constructor()
  Init(aArea: any, aInSet: any): void;
  SetArea(aArea: any): void;
  Area(): any;
  SetInSet(aInSet: any): void;
  InSet(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_AreaOrView extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PresentationArea(): any;
  PresentationView(): any;
}

export declare class StepVisual_BoxCharacteristicSelect {
  constructor()
  TypeOfContent(): Standard_Integer;
  SetTypeOfContent(aType: Standard_Integer): void;
  RealValue(): Standard_Real;
  SetRealValue(aValue: Standard_Real): void;
}

export declare class StepVisual_CameraModelD3MultiClippingInterectionSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Plane(): any;
  CameraModelD3MultiClippingUnion(): any;
}

export declare class StepVisual_CameraModelD3MultiClippingUnionSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Plane(): any;
  CameraModelD3MultiClippingIntersection(): any;
}

export declare class StepVisual_CurveStyleFontPattern extends Standard_Transient {
  constructor()
  Init(aVisibleSegmentLength: Standard_Real, aInvisibleSegmentLength: Standard_Real): void;
  SetVisibleSegmentLength(aVisibleSegmentLength: Standard_Real): void;
  VisibleSegmentLength(): Standard_Real;
  SetInvisibleSegmentLength(aInvisibleSegmentLength: Standard_Real): void;
  InvisibleSegmentLength(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_DirectionCountSelect {
  constructor()
  SetTypeOfContent(aTypeOfContent: Standard_Integer): void;
  TypeOfContent(): Standard_Integer;
  UDirectionCount(): Standard_Integer;
  SetUDirectionCount(aUDirectionCount: Standard_Integer): void;
  VDirectionCount(): Standard_Integer;
  SetVDirectionCount(aUDirectionCount: Standard_Integer): void;
}

export declare class StepVisual_DraughtingCalloutElement extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AnnotationCurveOccurrence(): any;
  AnnotationTextOccurrence(): any;
  TessellatedAnnotationOccurrence(): any;
  AnnotationFillAreaOccurrence(): any;
}

export declare class StepVisual_FillStyleSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  FillAreaStyleColour(): any;
}

export declare class StepVisual_InvisibleItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  StyledItem(): any;
  PresentationLayerAssignment(): any;
  PresentationRepresentation(): any;
}

export declare class StepVisual_LayeredItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PresentationRepresentation(): any;
  RepresentationItem(): any;
}

export declare class StepVisual_RenderingPropertiesSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  SurfaceStyleReflectanceAmbient(): any;
  SurfaceStyleTransparent(): any;
}

export declare class StepVisual_StyleContextSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Representation(): any;
  RepresentationItem(): any;
  PresentationSet(): any;
}

export declare class StepVisual_SurfaceStyleElementSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  SurfaceStyleFillArea(): any;
  SurfaceStyleBoundary(): any;
  SurfaceStyleParameterLine(): any;
  SurfaceStyleRendering(): any;
}

export declare class StepVisual_TextOrCharacter extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AnnotationText(): any;
  CompositeText(): any;
  TextLiteral(): any;
}

export declare class StepVisual_Colour extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_BackgroundColour extends StepVisual_Colour {
  constructor()
  Init(aPresentation: StepVisual_AreaOrView): void;
  SetPresentation(aPresentation: StepVisual_AreaOrView): void;
  Presentation(): StepVisual_AreaOrView;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraImage extends StepRepr_MappedItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraImage2dWithScale extends StepVisual_CameraImage {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraImage3dWithScale extends StepVisual_CameraImage {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraModel extends StepGeom_GeometricRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraModelD2 extends StepVisual_CameraModel {
  constructor()
  Init(aName: any, aViewWindow: any, aViewWindowClipping: Standard_Boolean): void;
  SetViewWindow(aViewWindow: any): void;
  ViewWindow(): any;
  SetViewWindowClipping(aViewWindowClipping: Standard_Boolean): void;
  ViewWindowClipping(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraModelD3 extends StepVisual_CameraModel {
  constructor()
  Init(aName: any, aViewReferenceSystem: any, aPerspectiveOfVolume: any): void;
  SetViewReferenceSystem(aViewReferenceSystem: any): void;
  ViewReferenceSystem(): any;
  SetPerspectiveOfVolume(aPerspectiveOfVolume: any): void;
  PerspectiveOfVolume(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraModelD3MultiClipping extends StepVisual_CameraModelD3 {
  constructor()
  Init(theName: any, theViewReferenceSystem: any, thePerspectiveOfVolume: any, theShapeClipping: any): void;
  SetShapeClipping(theShapeClipping: any): void;
  ShapeClipping(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraModelD3MultiClippingIntersection extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(theName: any, theShapeClipping: any): void;
  SetShapeClipping(theShapeClipping: any): void;
  ShapeClipping(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraModelD3MultiClippingUnion extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(theName: any, theShapeClipping: any): void;
  SetShapeClipping(theShapeClipping: any): void;
  ShapeClipping(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CameraUsage extends StepRepr_RepresentationMap {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel extends StepVisual_DraughtingModel {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_ColourSpecification extends StepVisual_Colour {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_ColourRgb extends StepVisual_ColourSpecification {
  constructor()
  Init(aName: any, aRed: Standard_Real, aGreen: Standard_Real, aBlue: Standard_Real): void;
  SetRed(aRed: Standard_Real): void;
  Red(): Standard_Real;
  SetGreen(aGreen: Standard_Real): void;
  Green(): Standard_Real;
  SetBlue(aBlue: Standard_Real): void;
  Blue(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CompositeText extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aCollectedText: any): void;
  SetCollectedText(aCollectedText: any): void;
  CollectedText(): any;
  CollectedTextValue(num: Standard_Integer): StepVisual_TextOrCharacter;
  NbCollectedText(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CompositeTextWithExtent extends StepVisual_CompositeText {
  constructor()
  Init(aName: any, aCollectedText: any, aExtent: any): void;
  SetExtent(aExtent: any): void;
  Extent(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_InvisibilityContext extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PresentationRepresentation(): any;
  PresentationSet(): any;
  DraughtingModel(): any;
}

export declare class StepVisual_Invisibility extends Standard_Transient {
  constructor()
  Init(aInvisibleItems: any): void;
  SetInvisibleItems(aInvisibleItems: any): void;
  InvisibleItems(): any;
  InvisibleItemsValue(num: Standard_Integer): StepVisual_InvisibleItem;
  NbInvisibleItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_ContextDependentInvisibility extends StepVisual_Invisibility {
  constructor()
  Init(aInvisibleItems: any, aPresentationContext: StepVisual_InvisibilityContext): void;
  SetPresentationContext(aPresentationContext: StepVisual_InvisibilityContext): void;
  PresentationContext(): StepVisual_InvisibilityContext;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_OverRidingStyledItem extends StepVisual_StyledItem {
  constructor()
  Init(aName: any, aStyles: any, aItem: any, aOverRiddenStyle: any): void;
  SetOverRiddenStyle(aOverRiddenStyle: any): void;
  OverRiddenStyle(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_ContextDependentOverRidingStyledItem extends StepVisual_OverRidingStyledItem {
  constructor()
  Init(aName: any, aStyles: any, aItem: any, aOverRiddenStyle: any, aStyleContext: any): void;
  SetStyleContext(aStyleContext: any): void;
  StyleContext(): any;
  StyleContextValue(num: Standard_Integer): StepVisual_StyleContextSelect;
  NbStyleContext(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CurveStyleFontSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CurveStyleFont(): any;
  PreDefinedCurveFont(): any;
  ExternallyDefinedCurveFont(): any;
}

export declare class StepVisual_CurveStyle extends Standard_Transient {
  constructor()
  Init(aName: any, aCurveFont: StepVisual_CurveStyleFontSelect, aCurveWidth: StepBasic_SizeSelect, aCurveColour: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetCurveFont(aCurveFont: StepVisual_CurveStyleFontSelect): void;
  CurveFont(): StepVisual_CurveStyleFontSelect;
  SetCurveWidth(aCurveWidth: StepBasic_SizeSelect): void;
  CurveWidth(): StepBasic_SizeSelect;
  SetCurveColour(aCurveColour: any): void;
  CurveColour(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_CurveStyleFont extends Standard_Transient {
  constructor()
  Init(aName: any, aPatternList: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetPatternList(aPatternList: any): void;
  PatternList(): any;
  PatternListValue(num: Standard_Integer): any;
  NbPatternList(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_DraughtingAnnotationOccurrence extends StepVisual_AnnotationOccurrence {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_DraughtingCallout extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(theName: any, theContents: any): void;
  Contents(): any;
  SetContents(theContents: any): void;
  NbContents(): Standard_Integer;
  ContentsValue(theNum: Standard_Integer): StepVisual_DraughtingCalloutElement;
  SetContentsValue(theNum: Standard_Integer, theItem: StepVisual_DraughtingCalloutElement): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PreDefinedColour extends StepVisual_Colour {
  constructor()
  SetPreDefinedItem(item: any): void;
  GetPreDefinedItem(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_DraughtingPreDefinedColour extends StepVisual_PreDefinedColour {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PreDefinedItem extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PreDefinedCurveFont extends StepVisual_PreDefinedItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_DraughtingPreDefinedCurveFont extends StepVisual_PreDefinedCurveFont {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_ExternallyDefinedCurveFont extends StepBasic_ExternallyDefinedItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_ExternallyDefinedTextFont extends StepBasic_ExternallyDefinedItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_FillAreaStyle extends Standard_Transient {
  constructor()
  Init(aName: any, aFillStyles: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetFillStyles(aFillStyles: any): void;
  FillStyles(): any;
  FillStylesValue(num: Standard_Integer): StepVisual_FillStyleSelect;
  NbFillStyles(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_FillAreaStyleColour extends Standard_Transient {
  constructor()
  Init(aName: any, aFillColour: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetFillColour(aFillColour: any): void;
  FillColour(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_FontSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PreDefinedTextFont(): any;
  ExternallyDefinedTextFont(): any;
}

export declare class StepVisual_MarkerMember extends StepData_SelectInt {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  EnumText(): Standard_CString;
  SetEnumText(val: Standard_Integer, text: Standard_CString): void;
  SetValue(val: StepVisual_MarkerType): void;
  Value(): StepVisual_MarkerType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_MarkerSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  NewMember(): any;
  CaseMem(sm: any): Standard_Integer;
  MarkerMember(): any;
}

export declare class StepVisual_PresentationRepresentation extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationArea extends StepVisual_PresentationRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_MechanicalDesignGeometricPresentationArea extends StepVisual_PresentationArea {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_MechanicalDesignGeometricPresentationRepresentation extends StepVisual_PresentationRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_NullStyleMember extends StepData_SelectInt {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(a0: Standard_CString): Standard_Boolean;
  Kind(): Standard_Integer;
  EnumText(): Standard_CString;
  SetEnumText(theValue: Standard_Integer, theText: Standard_CString): void;
  SetValue(theValue: StepVisual_NullStyle): void;
  Value(): StepVisual_NullStyle;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PlanarExtent extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aSizeInX: Standard_Real, aSizeInY: Standard_Real): void;
  SetSizeInX(aSizeInX: Standard_Real): void;
  SizeInX(): Standard_Real;
  SetSizeInY(aSizeInY: Standard_Real): void;
  SizeInY(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PlanarBox extends StepVisual_PlanarExtent {
  constructor()
  Init(aName: any, aSizeInX: Standard_Real, aSizeInY: Standard_Real, aPlacement: StepGeom_Axis2Placement): void;
  SetPlacement(aPlacement: StepGeom_Axis2Placement): void;
  Placement(): StepGeom_Axis2Placement;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PointStyle extends Standard_Transient {
  constructor()
  Init(aName: any, aMarker: StepVisual_MarkerSelect, aMarkerSize: StepBasic_SizeSelect, aMarkerColour: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetMarker(aMarker: StepVisual_MarkerSelect): void;
  Marker(): StepVisual_MarkerSelect;
  SetMarkerSize(aMarkerSize: StepBasic_SizeSelect): void;
  MarkerSize(): StepBasic_SizeSelect;
  SetMarkerColour(aMarkerColour: any): void;
  MarkerColour(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PreDefinedTextFont extends StepVisual_PreDefinedItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationLayerAssignment extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aAssignedItems: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetAssignedItems(aAssignedItems: any): void;
  AssignedItems(): any;
  AssignedItemsValue(num: Standard_Integer): StepVisual_LayeredItem;
  NbAssignedItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationLayerUsage extends Standard_Transient {
  constructor()
  Init(aAssignment: any, aPresentation: any): void;
  SetAssignment(aAssignment: any): void;
  Assignment(): any;
  SetPresentation(aPresentation: any): void;
  Presentation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationRepresentationSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PresentationRepresentation(): any;
  PresentationSet(): any;
}

export declare class StepVisual_PresentationSet extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationSizeAssignmentSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PresentationView(): any;
  PresentationArea(): any;
  AreaInSet(): any;
}

export declare class StepVisual_PresentationSize extends Standard_Transient {
  constructor()
  Init(aUnit: StepVisual_PresentationSizeAssignmentSelect, aSize: any): void;
  SetUnit(aUnit: StepVisual_PresentationSizeAssignmentSelect): void;
  Unit(): StepVisual_PresentationSizeAssignmentSelect;
  SetSize(aSize: any): void;
  Size(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationStyleByContext extends StepVisual_PresentationStyleAssignment {
  constructor()
  Init(aStyles: any, aStyleContext: StepVisual_StyleContextSelect): void;
  SetStyleContext(aStyleContext: StepVisual_StyleContextSelect): void;
  StyleContext(): StepVisual_StyleContextSelect;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentationView extends StepVisual_PresentationRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_PresentedItemRepresentation extends Standard_Transient {
  constructor()
  Init(aPresentation: StepVisual_PresentationRepresentationSelect, aItem: any): void;
  SetPresentation(aPresentation: StepVisual_PresentationRepresentationSelect): void;
  Presentation(): StepVisual_PresentationRepresentationSelect;
  SetItem(aItem: any): void;
  Item(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceSideStyle extends Standard_Transient {
  constructor()
  Init(aName: any, aStyles: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetStyles(aStyles: any): void;
  Styles(): any;
  StylesValue(num: Standard_Integer): StepVisual_SurfaceStyleElementSelect;
  NbStyles(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleBoundary extends Standard_Transient {
  constructor()
  Init(aStyleOfBoundary: any): void;
  SetStyleOfBoundary(aStyleOfBoundary: any): void;
  StyleOfBoundary(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleControlGrid extends Standard_Transient {
  constructor()
  Init(aStyleOfControlGrid: any): void;
  SetStyleOfControlGrid(aStyleOfControlGrid: any): void;
  StyleOfControlGrid(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleFillArea extends Standard_Transient {
  constructor()
  Init(aFillArea: any): void;
  SetFillArea(aFillArea: any): void;
  FillArea(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleParameterLine extends Standard_Transient {
  constructor()
  Init(aStyleOfParameterLines: any, aDirectionCounts: any): void;
  SetStyleOfParameterLines(aStyleOfParameterLines: any): void;
  StyleOfParameterLines(): any;
  SetDirectionCounts(aDirectionCounts: any): void;
  DirectionCounts(): any;
  DirectionCountsValue(num: Standard_Integer): StepVisual_DirectionCountSelect;
  NbDirectionCounts(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleReflectanceAmbient extends Standard_Transient {
  constructor()
  Init(theAmbientReflectance: Standard_Real): void;
  AmbientReflectance(): Standard_Real;
  SetAmbientReflectance(theAmbientReflectance: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleRendering extends Standard_Transient {
  constructor()
  Init(theRenderingMethod: StepVisual_ShadingSurfaceMethod, theSurfaceColour: any): void;
  RenderingMethod(): StepVisual_ShadingSurfaceMethod;
  SetRenderingMethod(theRenderingMethod: StepVisual_ShadingSurfaceMethod): void;
  SurfaceColour(): any;
  SetSurfaceColour(theSurfaceColour: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleRenderingWithProperties extends StepVisual_SurfaceStyleRendering {
  constructor()
  Init(theSurfaceStyleRendering_RenderingMethod: StepVisual_ShadingSurfaceMethod, theSurfaceStyleRendering_SurfaceColour: any, theProperties: any): void;
  Properties(): any;
  SetProperties(theProperties: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleSegmentationCurve extends Standard_Transient {
  constructor()
  Init(aStyleOfSegmentationCurve: any): void;
  SetStyleOfSegmentationCurve(aStyleOfSegmentationCurve: any): void;
  StyleOfSegmentationCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleSilhouette extends Standard_Transient {
  constructor()
  Init(aStyleOfSilhouette: any): void;
  SetStyleOfSilhouette(aStyleOfSilhouette: any): void;
  StyleOfSilhouette(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleTransparent extends Standard_Transient {
  constructor()
  Init(theTransparency: Standard_Real): void;
  Transparency(): Standard_Real;
  SetTransparency(theTransparency: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_SurfaceStyleUsage extends Standard_Transient {
  constructor()
  Init(aSide: StepVisual_SurfaceSide, aStyle: any): void;
  SetSide(aSide: StepVisual_SurfaceSide): void;
  Side(): StepVisual_SurfaceSide;
  SetStyle(aStyle: any): void;
  Style(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_Template extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_TemplateInstance extends StepRepr_MappedItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_TessellatedAnnotationOccurrence extends StepVisual_StyledItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_TextLiteral extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aLiteral: any, aPlacement: StepGeom_Axis2Placement, aAlignment: any, aPath: StepVisual_TextPath, aFont: StepVisual_FontSelect): void;
  SetLiteral(aLiteral: any): void;
  Literal(): any;
  SetPlacement(aPlacement: StepGeom_Axis2Placement): void;
  Placement(): StepGeom_Axis2Placement;
  SetAlignment(aAlignment: any): void;
  Alignment(): any;
  SetPath(aPath: StepVisual_TextPath): void;
  Path(): StepVisual_TextPath;
  SetFont(aFont: StepVisual_FontSelect): void;
  Font(): StepVisual_FontSelect;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_TextStyle extends Standard_Transient {
  constructor()
  Init(aName: any, aCharacterAppearance: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetCharacterAppearance(aCharacterAppearance: any): void;
  CharacterAppearance(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_TextStyleForDefinedFont extends Standard_Transient {
  constructor()
  Init(aTextColour: any): void;
  SetTextColour(aTextColour: any): void;
  TextColour(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_TextStyleWithBoxCharacteristics extends StepVisual_TextStyle {
  constructor()
  Init(aName: any, aCharacterAppearance: any, aCharacteristics: any): void;
  SetCharacteristics(aCharacteristics: any): void;
  Characteristics(): any;
  CharacteristicsValue(num: Standard_Integer): StepVisual_BoxCharacteristicSelect;
  NbCharacteristics(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepVisual_ViewVolume extends Standard_Transient {
  constructor()
  Init(aProjectionType: StepVisual_CentralOrParallel, aProjectionPoint: any, aViewPlaneDistance: Standard_Real, aFrontPlaneDistance: Standard_Real, aFrontPlaneClipping: Standard_Boolean, aBackPlaneDistance: Standard_Real, aBackPlaneClipping: Standard_Boolean, aViewVolumeSidesClipping: Standard_Boolean, aViewWindow: any): void;
  SetProjectionType(aProjectionType: StepVisual_CentralOrParallel): void;
  ProjectionType(): StepVisual_CentralOrParallel;
  SetProjectionPoint(aProjectionPoint: any): void;
  ProjectionPoint(): any;
  SetViewPlaneDistance(aViewPlaneDistance: Standard_Real): void;
  ViewPlaneDistance(): Standard_Real;
  SetFrontPlaneDistance(aFrontPlaneDistance: Standard_Real): void;
  FrontPlaneDistance(): Standard_Real;
  SetFrontPlaneClipping(aFrontPlaneClipping: Standard_Boolean): void;
  FrontPlaneClipping(): Standard_Boolean;
  SetBackPlaneDistance(aBackPlaneDistance: Standard_Real): void;
  BackPlaneDistance(): Standard_Real;
  SetBackPlaneClipping(aBackPlaneClipping: Standard_Boolean): void;
  BackPlaneClipping(): Standard_Boolean;
  SetViewVolumeSidesClipping(aViewVolumeSidesClipping: Standard_Boolean): void;
  ViewVolumeSidesClipping(): Standard_Boolean;
  SetViewWindow(aViewWindow: any): void;
  ViewWindow(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_StepVisual_TessellatedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TessellatedItem): void;
  get(): StepVisual_TessellatedItem;
}

  export declare class Handle_StepVisual_TessellatedItem_1 extends Handle_StepVisual_TessellatedItem {
    constructor();
  }

  export declare class Handle_StepVisual_TessellatedItem_2 extends Handle_StepVisual_TessellatedItem {
    constructor(thePtr: StepVisual_TessellatedItem);
  }

  export declare class Handle_StepVisual_TessellatedItem_3 extends Handle_StepVisual_TessellatedItem {
    constructor(theHandle: Handle_StepVisual_TessellatedItem);
  }

  export declare class Handle_StepVisual_TessellatedItem_4 extends Handle_StepVisual_TessellatedItem {
    constructor(theHandle: Handle_StepVisual_TessellatedItem);
  }

export declare class Handle_StepVisual_CoordinatesList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CoordinatesList): void;
  get(): StepVisual_CoordinatesList;
}

  export declare class Handle_StepVisual_CoordinatesList_1 extends Handle_StepVisual_CoordinatesList {
    constructor();
  }

  export declare class Handle_StepVisual_CoordinatesList_2 extends Handle_StepVisual_CoordinatesList {
    constructor(thePtr: StepVisual_CoordinatesList);
  }

  export declare class Handle_StepVisual_CoordinatesList_3 extends Handle_StepVisual_CoordinatesList {
    constructor(theHandle: Handle_StepVisual_CoordinatesList);
  }

  export declare class Handle_StepVisual_CoordinatesList_4 extends Handle_StepVisual_CoordinatesList {
    constructor(theHandle: Handle_StepVisual_CoordinatesList);
  }

export declare class Handle_StepVisual_TessellatedCurveSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TessellatedCurveSet): void;
  get(): StepVisual_TessellatedCurveSet;
}

  export declare class Handle_StepVisual_TessellatedCurveSet_1 extends Handle_StepVisual_TessellatedCurveSet {
    constructor();
  }

  export declare class Handle_StepVisual_TessellatedCurveSet_2 extends Handle_StepVisual_TessellatedCurveSet {
    constructor(thePtr: StepVisual_TessellatedCurveSet);
  }

  export declare class Handle_StepVisual_TessellatedCurveSet_3 extends Handle_StepVisual_TessellatedCurveSet {
    constructor(theHandle: Handle_StepVisual_TessellatedCurveSet);
  }

  export declare class Handle_StepVisual_TessellatedCurveSet_4 extends Handle_StepVisual_TessellatedCurveSet {
    constructor(theHandle: Handle_StepVisual_TessellatedCurveSet);
  }

export declare class Handle_StepDimTol_GeometricTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeometricTolerance): void;
  get(): StepDimTol_GeometricTolerance;
}

  export declare class Handle_StepDimTol_GeometricTolerance_1 extends Handle_StepDimTol_GeometricTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_GeometricTolerance_2 extends Handle_StepDimTol_GeometricTolerance {
    constructor(thePtr: StepDimTol_GeometricTolerance);
  }

  export declare class Handle_StepDimTol_GeometricTolerance_3 extends Handle_StepDimTol_GeometricTolerance {
    constructor(theHandle: Handle_StepDimTol_GeometricTolerance);
  }

  export declare class Handle_StepDimTol_GeometricTolerance_4 extends Handle_StepDimTol_GeometricTolerance {
    constructor(theHandle: Handle_StepDimTol_GeometricTolerance);
  }

export declare class Handle_StepDimTol_DatumReferenceModifierWithValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_DatumReferenceModifierWithValue): void;
  get(): StepDimTol_DatumReferenceModifierWithValue;
}

  export declare class Handle_StepDimTol_DatumReferenceModifierWithValue_1 extends Handle_StepDimTol_DatumReferenceModifierWithValue {
    constructor();
  }

  export declare class Handle_StepDimTol_DatumReferenceModifierWithValue_2 extends Handle_StepDimTol_DatumReferenceModifierWithValue {
    constructor(thePtr: StepDimTol_DatumReferenceModifierWithValue);
  }

  export declare class Handle_StepDimTol_DatumReferenceModifierWithValue_3 extends Handle_StepDimTol_DatumReferenceModifierWithValue {
    constructor(theHandle: Handle_StepDimTol_DatumReferenceModifierWithValue);
  }

  export declare class Handle_StepDimTol_DatumReferenceModifierWithValue_4 extends Handle_StepDimTol_DatumReferenceModifierWithValue {
    constructor(theHandle: Handle_StepDimTol_DatumReferenceModifierWithValue);
  }

export declare class Handle_StepDimTol_SimpleDatumReferenceModifierMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_SimpleDatumReferenceModifierMember): void;
  get(): StepDimTol_SimpleDatumReferenceModifierMember;
}

  export declare class Handle_StepDimTol_SimpleDatumReferenceModifierMember_1 extends Handle_StepDimTol_SimpleDatumReferenceModifierMember {
    constructor();
  }

  export declare class Handle_StepDimTol_SimpleDatumReferenceModifierMember_2 extends Handle_StepDimTol_SimpleDatumReferenceModifierMember {
    constructor(thePtr: StepDimTol_SimpleDatumReferenceModifierMember);
  }

  export declare class Handle_StepDimTol_SimpleDatumReferenceModifierMember_3 extends Handle_StepDimTol_SimpleDatumReferenceModifierMember {
    constructor(theHandle: Handle_StepDimTol_SimpleDatumReferenceModifierMember);
  }

  export declare class Handle_StepDimTol_SimpleDatumReferenceModifierMember_4 extends Handle_StepDimTol_SimpleDatumReferenceModifierMember {
    constructor(theHandle: Handle_StepDimTol_SimpleDatumReferenceModifierMember);
  }

export declare class StepDimTol_Array1OfDatumReferenceModifier {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepDimTol_DatumReferenceModifier): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepDimTol_Array1OfDatumReferenceModifier): StepDimTol_Array1OfDatumReferenceModifier;
  Move(theOther: StepDimTol_Array1OfDatumReferenceModifier): StepDimTol_Array1OfDatumReferenceModifier;
  First(): StepDimTol_DatumReferenceModifier;
  ChangeFirst(): StepDimTol_DatumReferenceModifier;
  Last(): StepDimTol_DatumReferenceModifier;
  ChangeLast(): StepDimTol_DatumReferenceModifier;
  Value(theIndex: Standard_Integer): StepDimTol_DatumReferenceModifier;
  ChangeValue(theIndex: Standard_Integer): StepDimTol_DatumReferenceModifier;
  SetValue(theIndex: Standard_Integer, theItem: StepDimTol_DatumReferenceModifier): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepDimTol_Array1OfDatumReferenceModifier_1 extends StepDimTol_Array1OfDatumReferenceModifier {
    constructor();
  }

  export declare class StepDimTol_Array1OfDatumReferenceModifier_2 extends StepDimTol_Array1OfDatumReferenceModifier {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepDimTol_Array1OfDatumReferenceModifier_3 extends StepDimTol_Array1OfDatumReferenceModifier {
    constructor(theOther: StepDimTol_Array1OfDatumReferenceModifier);
  }

  export declare class StepDimTol_Array1OfDatumReferenceModifier_4 extends StepDimTol_Array1OfDatumReferenceModifier {
    constructor(theOther: StepDimTol_Array1OfDatumReferenceModifier);
  }

  export declare class StepDimTol_Array1OfDatumReferenceModifier_5 extends StepDimTol_Array1OfDatumReferenceModifier {
    constructor(theBegin: StepDimTol_DatumReferenceModifier, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepDimTol_HArray1OfDatumReferenceModifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_HArray1OfDatumReferenceModifier): void;
  get(): StepDimTol_HArray1OfDatumReferenceModifier;
}

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceModifier_1 extends Handle_StepDimTol_HArray1OfDatumReferenceModifier {
    constructor();
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceModifier_2 extends Handle_StepDimTol_HArray1OfDatumReferenceModifier {
    constructor(thePtr: StepDimTol_HArray1OfDatumReferenceModifier);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceModifier_3 extends Handle_StepDimTol_HArray1OfDatumReferenceModifier {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReferenceModifier);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceModifier_4 extends Handle_StepDimTol_HArray1OfDatumReferenceModifier {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReferenceModifier);
  }

export declare class Handle_StepVisual_TessellatedGeometricSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TessellatedGeometricSet): void;
  get(): StepVisual_TessellatedGeometricSet;
}

  export declare class Handle_StepVisual_TessellatedGeometricSet_1 extends Handle_StepVisual_TessellatedGeometricSet {
    constructor();
  }

  export declare class Handle_StepVisual_TessellatedGeometricSet_2 extends Handle_StepVisual_TessellatedGeometricSet {
    constructor(thePtr: StepVisual_TessellatedGeometricSet);
  }

  export declare class Handle_StepVisual_TessellatedGeometricSet_3 extends Handle_StepVisual_TessellatedGeometricSet {
    constructor(theHandle: Handle_StepVisual_TessellatedGeometricSet);
  }

  export declare class Handle_StepVisual_TessellatedGeometricSet_4 extends Handle_StepVisual_TessellatedGeometricSet {
    constructor(theHandle: Handle_StepVisual_TessellatedGeometricSet);
  }

export declare class Handle_StepDimTol_Datum {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_Datum): void;
  get(): StepDimTol_Datum;
}

  export declare class Handle_StepDimTol_Datum_1 extends Handle_StepDimTol_Datum {
    constructor();
  }

  export declare class Handle_StepDimTol_Datum_2 extends Handle_StepDimTol_Datum {
    constructor(thePtr: StepDimTol_Datum);
  }

  export declare class Handle_StepDimTol_Datum_3 extends Handle_StepDimTol_Datum {
    constructor(theHandle: Handle_StepDimTol_Datum);
  }

  export declare class Handle_StepDimTol_Datum_4 extends Handle_StepDimTol_Datum {
    constructor(theHandle: Handle_StepDimTol_Datum);
  }

export declare class StepDimTol_Array1OfDatumSystemOrReference {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepDimTol_DatumSystemOrReference): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepDimTol_Array1OfDatumSystemOrReference): StepDimTol_Array1OfDatumSystemOrReference;
  Move(theOther: StepDimTol_Array1OfDatumSystemOrReference): StepDimTol_Array1OfDatumSystemOrReference;
  First(): StepDimTol_DatumSystemOrReference;
  ChangeFirst(): StepDimTol_DatumSystemOrReference;
  Last(): StepDimTol_DatumSystemOrReference;
  ChangeLast(): StepDimTol_DatumSystemOrReference;
  Value(theIndex: Standard_Integer): StepDimTol_DatumSystemOrReference;
  ChangeValue(theIndex: Standard_Integer): StepDimTol_DatumSystemOrReference;
  SetValue(theIndex: Standard_Integer, theItem: StepDimTol_DatumSystemOrReference): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepDimTol_Array1OfDatumSystemOrReference_1 extends StepDimTol_Array1OfDatumSystemOrReference {
    constructor();
  }

  export declare class StepDimTol_Array1OfDatumSystemOrReference_2 extends StepDimTol_Array1OfDatumSystemOrReference {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepDimTol_Array1OfDatumSystemOrReference_3 extends StepDimTol_Array1OfDatumSystemOrReference {
    constructor(theOther: StepDimTol_Array1OfDatumSystemOrReference);
  }

  export declare class StepDimTol_Array1OfDatumSystemOrReference_4 extends StepDimTol_Array1OfDatumSystemOrReference {
    constructor(theOther: StepDimTol_Array1OfDatumSystemOrReference);
  }

  export declare class StepDimTol_Array1OfDatumSystemOrReference_5 extends StepDimTol_Array1OfDatumSystemOrReference {
    constructor(theBegin: StepDimTol_DatumSystemOrReference, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepDimTol_HArray1OfDatumSystemOrReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_HArray1OfDatumSystemOrReference): void;
  get(): StepDimTol_HArray1OfDatumSystemOrReference;
}

  export declare class Handle_StepDimTol_HArray1OfDatumSystemOrReference_1 extends Handle_StepDimTol_HArray1OfDatumSystemOrReference {
    constructor();
  }

  export declare class Handle_StepDimTol_HArray1OfDatumSystemOrReference_2 extends Handle_StepDimTol_HArray1OfDatumSystemOrReference {
    constructor(thePtr: StepDimTol_HArray1OfDatumSystemOrReference);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumSystemOrReference_3 extends Handle_StepDimTol_HArray1OfDatumSystemOrReference {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumSystemOrReference);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumSystemOrReference_4 extends Handle_StepDimTol_HArray1OfDatumSystemOrReference {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumSystemOrReference);
  }

export declare class Handle_StepVisual_DraughtingModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_DraughtingModel): void;
  get(): StepVisual_DraughtingModel;
}

  export declare class Handle_StepVisual_DraughtingModel_1 extends Handle_StepVisual_DraughtingModel {
    constructor();
  }

  export declare class Handle_StepVisual_DraughtingModel_2 extends Handle_StepVisual_DraughtingModel {
    constructor(thePtr: StepVisual_DraughtingModel);
  }

  export declare class Handle_StepVisual_DraughtingModel_3 extends Handle_StepVisual_DraughtingModel {
    constructor(theHandle: Handle_StepVisual_DraughtingModel);
  }

  export declare class Handle_StepVisual_DraughtingModel_4 extends Handle_StepVisual_DraughtingModel {
    constructor(theHandle: Handle_StepVisual_DraughtingModel);
  }

export declare class StepVisual_Array1OfPresentationStyleSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_PresentationStyleSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfPresentationStyleSelect): StepVisual_Array1OfPresentationStyleSelect;
  Move(theOther: StepVisual_Array1OfPresentationStyleSelect): StepVisual_Array1OfPresentationStyleSelect;
  First(): StepVisual_PresentationStyleSelect;
  ChangeFirst(): StepVisual_PresentationStyleSelect;
  Last(): StepVisual_PresentationStyleSelect;
  ChangeLast(): StepVisual_PresentationStyleSelect;
  Value(theIndex: Standard_Integer): StepVisual_PresentationStyleSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_PresentationStyleSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_PresentationStyleSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfPresentationStyleSelect_1 extends StepVisual_Array1OfPresentationStyleSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfPresentationStyleSelect_2 extends StepVisual_Array1OfPresentationStyleSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfPresentationStyleSelect_3 extends StepVisual_Array1OfPresentationStyleSelect {
    constructor(theOther: StepVisual_Array1OfPresentationStyleSelect);
  }

  export declare class StepVisual_Array1OfPresentationStyleSelect_4 extends StepVisual_Array1OfPresentationStyleSelect {
    constructor(theOther: StepVisual_Array1OfPresentationStyleSelect);
  }

  export declare class StepVisual_Array1OfPresentationStyleSelect_5 extends StepVisual_Array1OfPresentationStyleSelect {
    constructor(theBegin: StepVisual_PresentationStyleSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepVisual_HArray1OfPresentationStyleSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfPresentationStyleSelect): void;
  get(): StepVisual_HArray1OfPresentationStyleSelect;
}

  export declare class Handle_StepVisual_HArray1OfPresentationStyleSelect_1 extends Handle_StepVisual_HArray1OfPresentationStyleSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfPresentationStyleSelect_2 extends Handle_StepVisual_HArray1OfPresentationStyleSelect {
    constructor(thePtr: StepVisual_HArray1OfPresentationStyleSelect);
  }

  export declare class Handle_StepVisual_HArray1OfPresentationStyleSelect_3 extends Handle_StepVisual_HArray1OfPresentationStyleSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfPresentationStyleSelect);
  }

  export declare class Handle_StepVisual_HArray1OfPresentationStyleSelect_4 extends Handle_StepVisual_HArray1OfPresentationStyleSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfPresentationStyleSelect);
  }

export declare class Handle_StepVisual_PresentationStyleAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationStyleAssignment): void;
  get(): StepVisual_PresentationStyleAssignment;
}

  export declare class Handle_StepVisual_PresentationStyleAssignment_1 extends Handle_StepVisual_PresentationStyleAssignment {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationStyleAssignment_2 extends Handle_StepVisual_PresentationStyleAssignment {
    constructor(thePtr: StepVisual_PresentationStyleAssignment);
  }

  export declare class Handle_StepVisual_PresentationStyleAssignment_3 extends Handle_StepVisual_PresentationStyleAssignment {
    constructor(theHandle: Handle_StepVisual_PresentationStyleAssignment);
  }

  export declare class Handle_StepVisual_PresentationStyleAssignment_4 extends Handle_StepVisual_PresentationStyleAssignment {
    constructor(theHandle: Handle_StepVisual_PresentationStyleAssignment);
  }

export declare class Handle_StepVisual_HArray1OfPresentationStyleAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfPresentationStyleAssignment): void;
  get(): StepVisual_HArray1OfPresentationStyleAssignment;
}

  export declare class Handle_StepVisual_HArray1OfPresentationStyleAssignment_1 extends Handle_StepVisual_HArray1OfPresentationStyleAssignment {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfPresentationStyleAssignment_2 extends Handle_StepVisual_HArray1OfPresentationStyleAssignment {
    constructor(thePtr: StepVisual_HArray1OfPresentationStyleAssignment);
  }

  export declare class Handle_StepVisual_HArray1OfPresentationStyleAssignment_3 extends Handle_StepVisual_HArray1OfPresentationStyleAssignment {
    constructor(theHandle: Handle_StepVisual_HArray1OfPresentationStyleAssignment);
  }

  export declare class Handle_StepVisual_HArray1OfPresentationStyleAssignment_4 extends Handle_StepVisual_HArray1OfPresentationStyleAssignment {
    constructor(theHandle: Handle_StepVisual_HArray1OfPresentationStyleAssignment);
  }

export declare class Handle_StepVisual_PresentedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentedItem): void;
  get(): StepVisual_PresentedItem;
}

  export declare class Handle_StepVisual_PresentedItem_1 extends Handle_StepVisual_PresentedItem {
    constructor();
  }

  export declare class Handle_StepVisual_PresentedItem_2 extends Handle_StepVisual_PresentedItem {
    constructor(thePtr: StepVisual_PresentedItem);
  }

  export declare class Handle_StepVisual_PresentedItem_3 extends Handle_StepVisual_PresentedItem {
    constructor(theHandle: Handle_StepVisual_PresentedItem);
  }

  export declare class Handle_StepVisual_PresentedItem_4 extends Handle_StepVisual_PresentedItem {
    constructor(theHandle: Handle_StepVisual_PresentedItem);
  }

export declare class Handle_StepDimTol_DatumReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_DatumReference): void;
  get(): StepDimTol_DatumReference;
}

  export declare class Handle_StepDimTol_DatumReference_1 extends Handle_StepDimTol_DatumReference {
    constructor();
  }

  export declare class Handle_StepDimTol_DatumReference_2 extends Handle_StepDimTol_DatumReference {
    constructor(thePtr: StepDimTol_DatumReference);
  }

  export declare class Handle_StepDimTol_DatumReference_3 extends Handle_StepDimTol_DatumReference {
    constructor(theHandle: Handle_StepDimTol_DatumReference);
  }

  export declare class Handle_StepDimTol_DatumReference_4 extends Handle_StepDimTol_DatumReference {
    constructor(theHandle: Handle_StepDimTol_DatumReference);
  }

export declare class Handle_StepDimTol_HArray1OfDatumReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_HArray1OfDatumReference): void;
  get(): StepDimTol_HArray1OfDatumReference;
}

  export declare class Handle_StepDimTol_HArray1OfDatumReference_1 extends Handle_StepDimTol_HArray1OfDatumReference {
    constructor();
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReference_2 extends Handle_StepDimTol_HArray1OfDatumReference {
    constructor(thePtr: StepDimTol_HArray1OfDatumReference);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReference_3 extends Handle_StepDimTol_HArray1OfDatumReference {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReference);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReference_4 extends Handle_StepDimTol_HArray1OfDatumReference {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReference);
  }

export declare class Handle_StepDimTol_GeometricToleranceWithDatumReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeometricToleranceWithDatumReference): void;
  get(): StepDimTol_GeometricToleranceWithDatumReference;
}

  export declare class Handle_StepDimTol_GeometricToleranceWithDatumReference_1 extends Handle_StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDatumReference_2 extends Handle_StepDimTol_GeometricToleranceWithDatumReference {
    constructor(thePtr: StepDimTol_GeometricToleranceWithDatumReference);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDatumReference_3 extends Handle_StepDimTol_GeometricToleranceWithDatumReference {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithDatumReference);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDatumReference_4 extends Handle_StepDimTol_GeometricToleranceWithDatumReference {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithDatumReference);
  }

export declare class Handle_StepDimTol_AngularityTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_AngularityTolerance): void;
  get(): StepDimTol_AngularityTolerance;
}

  export declare class Handle_StepDimTol_AngularityTolerance_1 extends Handle_StepDimTol_AngularityTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_AngularityTolerance_2 extends Handle_StepDimTol_AngularityTolerance {
    constructor(thePtr: StepDimTol_AngularityTolerance);
  }

  export declare class Handle_StepDimTol_AngularityTolerance_3 extends Handle_StepDimTol_AngularityTolerance {
    constructor(theHandle: Handle_StepDimTol_AngularityTolerance);
  }

  export declare class Handle_StepDimTol_AngularityTolerance_4 extends Handle_StepDimTol_AngularityTolerance {
    constructor(theHandle: Handle_StepDimTol_AngularityTolerance);
  }

export declare class Handle_StepDimTol_GeneralDatumReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeneralDatumReference): void;
  get(): StepDimTol_GeneralDatumReference;
}

  export declare class Handle_StepDimTol_GeneralDatumReference_1 extends Handle_StepDimTol_GeneralDatumReference {
    constructor();
  }

  export declare class Handle_StepDimTol_GeneralDatumReference_2 extends Handle_StepDimTol_GeneralDatumReference {
    constructor(thePtr: StepDimTol_GeneralDatumReference);
  }

  export declare class Handle_StepDimTol_GeneralDatumReference_3 extends Handle_StepDimTol_GeneralDatumReference {
    constructor(theHandle: Handle_StepDimTol_GeneralDatumReference);
  }

  export declare class Handle_StepDimTol_GeneralDatumReference_4 extends Handle_StepDimTol_GeneralDatumReference {
    constructor(theHandle: Handle_StepDimTol_GeneralDatumReference);
  }

export declare class Handle_StepDimTol_DatumReferenceCompartment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_DatumReferenceCompartment): void;
  get(): StepDimTol_DatumReferenceCompartment;
}

  export declare class Handle_StepDimTol_DatumReferenceCompartment_1 extends Handle_StepDimTol_DatumReferenceCompartment {
    constructor();
  }

  export declare class Handle_StepDimTol_DatumReferenceCompartment_2 extends Handle_StepDimTol_DatumReferenceCompartment {
    constructor(thePtr: StepDimTol_DatumReferenceCompartment);
  }

  export declare class Handle_StepDimTol_DatumReferenceCompartment_3 extends Handle_StepDimTol_DatumReferenceCompartment {
    constructor(theHandle: Handle_StepDimTol_DatumReferenceCompartment);
  }

  export declare class Handle_StepDimTol_DatumReferenceCompartment_4 extends Handle_StepDimTol_DatumReferenceCompartment {
    constructor(theHandle: Handle_StepDimTol_DatumReferenceCompartment);
  }

export declare class Handle_StepDimTol_DatumReferenceElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_DatumReferenceElement): void;
  get(): StepDimTol_DatumReferenceElement;
}

  export declare class Handle_StepDimTol_DatumReferenceElement_1 extends Handle_StepDimTol_DatumReferenceElement {
    constructor();
  }

  export declare class Handle_StepDimTol_DatumReferenceElement_2 extends Handle_StepDimTol_DatumReferenceElement {
    constructor(thePtr: StepDimTol_DatumReferenceElement);
  }

  export declare class Handle_StepDimTol_DatumReferenceElement_3 extends Handle_StepDimTol_DatumReferenceElement {
    constructor(theHandle: Handle_StepDimTol_DatumReferenceElement);
  }

  export declare class Handle_StepDimTol_DatumReferenceElement_4 extends Handle_StepDimTol_DatumReferenceElement {
    constructor(theHandle: Handle_StepDimTol_DatumReferenceElement);
  }

export declare class StepDimTol_Array1OfGeometricToleranceModifier {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepDimTol_GeometricToleranceModifier): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepDimTol_Array1OfGeometricToleranceModifier): StepDimTol_Array1OfGeometricToleranceModifier;
  Move(theOther: StepDimTol_Array1OfGeometricToleranceModifier): StepDimTol_Array1OfGeometricToleranceModifier;
  First(): StepDimTol_GeometricToleranceModifier;
  ChangeFirst(): StepDimTol_GeometricToleranceModifier;
  Last(): StepDimTol_GeometricToleranceModifier;
  ChangeLast(): StepDimTol_GeometricToleranceModifier;
  Value(theIndex: Standard_Integer): StepDimTol_GeometricToleranceModifier;
  ChangeValue(theIndex: Standard_Integer): StepDimTol_GeometricToleranceModifier;
  SetValue(theIndex: Standard_Integer, theItem: StepDimTol_GeometricToleranceModifier): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepDimTol_Array1OfGeometricToleranceModifier_1 extends StepDimTol_Array1OfGeometricToleranceModifier {
    constructor();
  }

  export declare class StepDimTol_Array1OfGeometricToleranceModifier_2 extends StepDimTol_Array1OfGeometricToleranceModifier {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepDimTol_Array1OfGeometricToleranceModifier_3 extends StepDimTol_Array1OfGeometricToleranceModifier {
    constructor(theOther: StepDimTol_Array1OfGeometricToleranceModifier);
  }

  export declare class StepDimTol_Array1OfGeometricToleranceModifier_4 extends StepDimTol_Array1OfGeometricToleranceModifier {
    constructor(theOther: StepDimTol_Array1OfGeometricToleranceModifier);
  }

  export declare class StepDimTol_Array1OfGeometricToleranceModifier_5 extends StepDimTol_Array1OfGeometricToleranceModifier {
    constructor(theBegin: StepDimTol_GeometricToleranceModifier, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepDimTol_Array1OfToleranceZoneTarget {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepDimTol_ToleranceZoneTarget): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepDimTol_Array1OfToleranceZoneTarget): StepDimTol_Array1OfToleranceZoneTarget;
  Move(theOther: StepDimTol_Array1OfToleranceZoneTarget): StepDimTol_Array1OfToleranceZoneTarget;
  First(): StepDimTol_ToleranceZoneTarget;
  ChangeFirst(): StepDimTol_ToleranceZoneTarget;
  Last(): StepDimTol_ToleranceZoneTarget;
  ChangeLast(): StepDimTol_ToleranceZoneTarget;
  Value(theIndex: Standard_Integer): StepDimTol_ToleranceZoneTarget;
  ChangeValue(theIndex: Standard_Integer): StepDimTol_ToleranceZoneTarget;
  SetValue(theIndex: Standard_Integer, theItem: StepDimTol_ToleranceZoneTarget): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepDimTol_Array1OfToleranceZoneTarget_1 extends StepDimTol_Array1OfToleranceZoneTarget {
    constructor();
  }

  export declare class StepDimTol_Array1OfToleranceZoneTarget_2 extends StepDimTol_Array1OfToleranceZoneTarget {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepDimTol_Array1OfToleranceZoneTarget_3 extends StepDimTol_Array1OfToleranceZoneTarget {
    constructor(theOther: StepDimTol_Array1OfToleranceZoneTarget);
  }

  export declare class StepDimTol_Array1OfToleranceZoneTarget_4 extends StepDimTol_Array1OfToleranceZoneTarget {
    constructor(theOther: StepDimTol_Array1OfToleranceZoneTarget);
  }

  export declare class StepDimTol_Array1OfToleranceZoneTarget_5 extends StepDimTol_Array1OfToleranceZoneTarget {
    constructor(theBegin: StepDimTol_ToleranceZoneTarget, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepDimTol_CircularRunoutTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_CircularRunoutTolerance): void;
  get(): StepDimTol_CircularRunoutTolerance;
}

  export declare class Handle_StepDimTol_CircularRunoutTolerance_1 extends Handle_StepDimTol_CircularRunoutTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_CircularRunoutTolerance_2 extends Handle_StepDimTol_CircularRunoutTolerance {
    constructor(thePtr: StepDimTol_CircularRunoutTolerance);
  }

  export declare class Handle_StepDimTol_CircularRunoutTolerance_3 extends Handle_StepDimTol_CircularRunoutTolerance {
    constructor(theHandle: Handle_StepDimTol_CircularRunoutTolerance);
  }

  export declare class Handle_StepDimTol_CircularRunoutTolerance_4 extends Handle_StepDimTol_CircularRunoutTolerance {
    constructor(theHandle: Handle_StepDimTol_CircularRunoutTolerance);
  }

export declare class Handle_StepDimTol_CoaxialityTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_CoaxialityTolerance): void;
  get(): StepDimTol_CoaxialityTolerance;
}

  export declare class Handle_StepDimTol_CoaxialityTolerance_1 extends Handle_StepDimTol_CoaxialityTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_CoaxialityTolerance_2 extends Handle_StepDimTol_CoaxialityTolerance {
    constructor(thePtr: StepDimTol_CoaxialityTolerance);
  }

  export declare class Handle_StepDimTol_CoaxialityTolerance_3 extends Handle_StepDimTol_CoaxialityTolerance {
    constructor(theHandle: Handle_StepDimTol_CoaxialityTolerance);
  }

  export declare class Handle_StepDimTol_CoaxialityTolerance_4 extends Handle_StepDimTol_CoaxialityTolerance {
    constructor(theHandle: Handle_StepDimTol_CoaxialityTolerance);
  }

export declare class Handle_StepDimTol_CommonDatum {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_CommonDatum): void;
  get(): StepDimTol_CommonDatum;
}

  export declare class Handle_StepDimTol_CommonDatum_1 extends Handle_StepDimTol_CommonDatum {
    constructor();
  }

  export declare class Handle_StepDimTol_CommonDatum_2 extends Handle_StepDimTol_CommonDatum {
    constructor(thePtr: StepDimTol_CommonDatum);
  }

  export declare class Handle_StepDimTol_CommonDatum_3 extends Handle_StepDimTol_CommonDatum {
    constructor(theHandle: Handle_StepDimTol_CommonDatum);
  }

  export declare class Handle_StepDimTol_CommonDatum_4 extends Handle_StepDimTol_CommonDatum {
    constructor(theHandle: Handle_StepDimTol_CommonDatum);
  }

export declare class Handle_StepDimTol_ConcentricityTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_ConcentricityTolerance): void;
  get(): StepDimTol_ConcentricityTolerance;
}

  export declare class Handle_StepDimTol_ConcentricityTolerance_1 extends Handle_StepDimTol_ConcentricityTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_ConcentricityTolerance_2 extends Handle_StepDimTol_ConcentricityTolerance {
    constructor(thePtr: StepDimTol_ConcentricityTolerance);
  }

  export declare class Handle_StepDimTol_ConcentricityTolerance_3 extends Handle_StepDimTol_ConcentricityTolerance {
    constructor(theHandle: Handle_StepDimTol_ConcentricityTolerance);
  }

  export declare class Handle_StepDimTol_ConcentricityTolerance_4 extends Handle_StepDimTol_ConcentricityTolerance {
    constructor(theHandle: Handle_StepDimTol_ConcentricityTolerance);
  }

export declare class Handle_StepDimTol_CylindricityTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_CylindricityTolerance): void;
  get(): StepDimTol_CylindricityTolerance;
}

  export declare class Handle_StepDimTol_CylindricityTolerance_1 extends Handle_StepDimTol_CylindricityTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_CylindricityTolerance_2 extends Handle_StepDimTol_CylindricityTolerance {
    constructor(thePtr: StepDimTol_CylindricityTolerance);
  }

  export declare class Handle_StepDimTol_CylindricityTolerance_3 extends Handle_StepDimTol_CylindricityTolerance {
    constructor(theHandle: Handle_StepDimTol_CylindricityTolerance);
  }

  export declare class Handle_StepDimTol_CylindricityTolerance_4 extends Handle_StepDimTol_CylindricityTolerance {
    constructor(theHandle: Handle_StepDimTol_CylindricityTolerance);
  }

export declare class Handle_StepDimTol_DatumFeature {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_DatumFeature): void;
  get(): StepDimTol_DatumFeature;
}

  export declare class Handle_StepDimTol_DatumFeature_1 extends Handle_StepDimTol_DatumFeature {
    constructor();
  }

  export declare class Handle_StepDimTol_DatumFeature_2 extends Handle_StepDimTol_DatumFeature {
    constructor(thePtr: StepDimTol_DatumFeature);
  }

  export declare class Handle_StepDimTol_DatumFeature_3 extends Handle_StepDimTol_DatumFeature {
    constructor(theHandle: Handle_StepDimTol_DatumFeature);
  }

  export declare class Handle_StepDimTol_DatumFeature_4 extends Handle_StepDimTol_DatumFeature {
    constructor(theHandle: Handle_StepDimTol_DatumFeature);
  }

export declare class Handle_StepDimTol_HArray1OfDatumReferenceCompartment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_HArray1OfDatumReferenceCompartment): void;
  get(): StepDimTol_HArray1OfDatumReferenceCompartment;
}

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceCompartment_1 extends Handle_StepDimTol_HArray1OfDatumReferenceCompartment {
    constructor();
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceCompartment_2 extends Handle_StepDimTol_HArray1OfDatumReferenceCompartment {
    constructor(thePtr: StepDimTol_HArray1OfDatumReferenceCompartment);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceCompartment_3 extends Handle_StepDimTol_HArray1OfDatumReferenceCompartment {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReferenceCompartment);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceCompartment_4 extends Handle_StepDimTol_HArray1OfDatumReferenceCompartment {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReferenceCompartment);
  }

export declare class Handle_StepDimTol_DatumSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_DatumSystem): void;
  get(): StepDimTol_DatumSystem;
}

  export declare class Handle_StepDimTol_DatumSystem_1 extends Handle_StepDimTol_DatumSystem {
    constructor();
  }

  export declare class Handle_StepDimTol_DatumSystem_2 extends Handle_StepDimTol_DatumSystem {
    constructor(thePtr: StepDimTol_DatumSystem);
  }

  export declare class Handle_StepDimTol_DatumSystem_3 extends Handle_StepDimTol_DatumSystem {
    constructor(theHandle: Handle_StepDimTol_DatumSystem);
  }

  export declare class Handle_StepDimTol_DatumSystem_4 extends Handle_StepDimTol_DatumSystem {
    constructor(theHandle: Handle_StepDimTol_DatumSystem);
  }

export declare class Handle_StepDimTol_DatumTarget {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_DatumTarget): void;
  get(): StepDimTol_DatumTarget;
}

  export declare class Handle_StepDimTol_DatumTarget_1 extends Handle_StepDimTol_DatumTarget {
    constructor();
  }

  export declare class Handle_StepDimTol_DatumTarget_2 extends Handle_StepDimTol_DatumTarget {
    constructor(thePtr: StepDimTol_DatumTarget);
  }

  export declare class Handle_StepDimTol_DatumTarget_3 extends Handle_StepDimTol_DatumTarget {
    constructor(theHandle: Handle_StepDimTol_DatumTarget);
  }

  export declare class Handle_StepDimTol_DatumTarget_4 extends Handle_StepDimTol_DatumTarget {
    constructor(theHandle: Handle_StepDimTol_DatumTarget);
  }

export declare class Handle_StepDimTol_FlatnessTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_FlatnessTolerance): void;
  get(): StepDimTol_FlatnessTolerance;
}

  export declare class Handle_StepDimTol_FlatnessTolerance_1 extends Handle_StepDimTol_FlatnessTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_FlatnessTolerance_2 extends Handle_StepDimTol_FlatnessTolerance {
    constructor(thePtr: StepDimTol_FlatnessTolerance);
  }

  export declare class Handle_StepDimTol_FlatnessTolerance_3 extends Handle_StepDimTol_FlatnessTolerance {
    constructor(theHandle: Handle_StepDimTol_FlatnessTolerance);
  }

  export declare class Handle_StepDimTol_FlatnessTolerance_4 extends Handle_StepDimTol_FlatnessTolerance {
    constructor(theHandle: Handle_StepDimTol_FlatnessTolerance);
  }

export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRef): void;
  get(): StepDimTol_GeoTolAndGeoTolWthDatRef;
}

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_1 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRef {
    constructor();
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_2 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRef {
    constructor(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRef);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_3 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRef {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRef);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_4 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRef {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRef);
  }

export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod): void;
  get(): StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod;
}

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_1 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
    constructor();
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_2 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
    constructor(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_3 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_4 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod);
  }

export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol): void;
  get(): StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol;
}

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_1 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
    constructor();
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_2 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
    constructor(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_3 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_4 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol);
  }

export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol): void;
  get(): StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol;
}

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_1 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
    constructor();
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_2 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
    constructor(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_3 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_4 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol);
  }

export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol): void;
  get(): StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol;
}

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_1 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
    constructor();
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_2 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
    constructor(thePtr: StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_3 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_4 extends Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol);
  }

export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMod {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeoTolAndGeoTolWthMod): void;
  get(): StepDimTol_GeoTolAndGeoTolWthMod;
}

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMod_1 extends Handle_StepDimTol_GeoTolAndGeoTolWthMod {
    constructor();
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMod_2 extends Handle_StepDimTol_GeoTolAndGeoTolWthMod {
    constructor(thePtr: StepDimTol_GeoTolAndGeoTolWthMod);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMod_3 extends Handle_StepDimTol_GeoTolAndGeoTolWthMod {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthMod);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMod_4 extends Handle_StepDimTol_GeoTolAndGeoTolWthMod {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthMod);
  }

export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeoTolAndGeoTolWthMaxTol): void;
  get(): StepDimTol_GeoTolAndGeoTolWthMaxTol;
}

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_1 extends Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol {
    constructor();
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_2 extends Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol {
    constructor(thePtr: StepDimTol_GeoTolAndGeoTolWthMaxTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_3 extends Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol);
  }

  export declare class Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_4 extends Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol {
    constructor(theHandle: Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol);
  }

export declare class Handle_StepDimTol_GeometricToleranceRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeometricToleranceRelationship): void;
  get(): StepDimTol_GeometricToleranceRelationship;
}

  export declare class Handle_StepDimTol_GeometricToleranceRelationship_1 extends Handle_StepDimTol_GeometricToleranceRelationship {
    constructor();
  }

  export declare class Handle_StepDimTol_GeometricToleranceRelationship_2 extends Handle_StepDimTol_GeometricToleranceRelationship {
    constructor(thePtr: StepDimTol_GeometricToleranceRelationship);
  }

  export declare class Handle_StepDimTol_GeometricToleranceRelationship_3 extends Handle_StepDimTol_GeometricToleranceRelationship {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceRelationship);
  }

  export declare class Handle_StepDimTol_GeometricToleranceRelationship_4 extends Handle_StepDimTol_GeometricToleranceRelationship {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceRelationship);
  }

export declare class Handle_StepDimTol_GeometricToleranceWithDefinedUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeometricToleranceWithDefinedUnit): void;
  get(): StepDimTol_GeometricToleranceWithDefinedUnit;
}

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedUnit_1 extends Handle_StepDimTol_GeometricToleranceWithDefinedUnit {
    constructor();
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedUnit_2 extends Handle_StepDimTol_GeometricToleranceWithDefinedUnit {
    constructor(thePtr: StepDimTol_GeometricToleranceWithDefinedUnit);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedUnit_3 extends Handle_StepDimTol_GeometricToleranceWithDefinedUnit {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithDefinedUnit);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedUnit_4 extends Handle_StepDimTol_GeometricToleranceWithDefinedUnit {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithDefinedUnit);
  }

export declare class Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeometricToleranceWithDefinedAreaUnit): void;
  get(): StepDimTol_GeometricToleranceWithDefinedAreaUnit;
}

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_1 extends Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit {
    constructor();
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_2 extends Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit {
    constructor(thePtr: StepDimTol_GeometricToleranceWithDefinedAreaUnit);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_3 extends Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_4 extends Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit);
  }

export declare class Handle_StepDimTol_HArray1OfGeometricToleranceModifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_HArray1OfGeometricToleranceModifier): void;
  get(): StepDimTol_HArray1OfGeometricToleranceModifier;
}

  export declare class Handle_StepDimTol_HArray1OfGeometricToleranceModifier_1 extends Handle_StepDimTol_HArray1OfGeometricToleranceModifier {
    constructor();
  }

  export declare class Handle_StepDimTol_HArray1OfGeometricToleranceModifier_2 extends Handle_StepDimTol_HArray1OfGeometricToleranceModifier {
    constructor(thePtr: StepDimTol_HArray1OfGeometricToleranceModifier);
  }

  export declare class Handle_StepDimTol_HArray1OfGeometricToleranceModifier_3 extends Handle_StepDimTol_HArray1OfGeometricToleranceModifier {
    constructor(theHandle: Handle_StepDimTol_HArray1OfGeometricToleranceModifier);
  }

  export declare class Handle_StepDimTol_HArray1OfGeometricToleranceModifier_4 extends Handle_StepDimTol_HArray1OfGeometricToleranceModifier {
    constructor(theHandle: Handle_StepDimTol_HArray1OfGeometricToleranceModifier);
  }

export declare class Handle_StepDimTol_GeometricToleranceWithModifiers {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeometricToleranceWithModifiers): void;
  get(): StepDimTol_GeometricToleranceWithModifiers;
}

  export declare class Handle_StepDimTol_GeometricToleranceWithModifiers_1 extends Handle_StepDimTol_GeometricToleranceWithModifiers {
    constructor();
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithModifiers_2 extends Handle_StepDimTol_GeometricToleranceWithModifiers {
    constructor(thePtr: StepDimTol_GeometricToleranceWithModifiers);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithModifiers_3 extends Handle_StepDimTol_GeometricToleranceWithModifiers {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithModifiers);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithModifiers_4 extends Handle_StepDimTol_GeometricToleranceWithModifiers {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithModifiers);
  }

export declare class Handle_StepDimTol_GeometricToleranceWithMaximumTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_GeometricToleranceWithMaximumTolerance): void;
  get(): StepDimTol_GeometricToleranceWithMaximumTolerance;
}

  export declare class Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_1 extends Handle_StepDimTol_GeometricToleranceWithMaximumTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_2 extends Handle_StepDimTol_GeometricToleranceWithMaximumTolerance {
    constructor(thePtr: StepDimTol_GeometricToleranceWithMaximumTolerance);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_3 extends Handle_StepDimTol_GeometricToleranceWithMaximumTolerance {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithMaximumTolerance);
  }

  export declare class Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_4 extends Handle_StepDimTol_GeometricToleranceWithMaximumTolerance {
    constructor(theHandle: Handle_StepDimTol_GeometricToleranceWithMaximumTolerance);
  }

export declare class Handle_StepDimTol_HArray1OfDatumReferenceElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_HArray1OfDatumReferenceElement): void;
  get(): StepDimTol_HArray1OfDatumReferenceElement;
}

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceElement_1 extends Handle_StepDimTol_HArray1OfDatumReferenceElement {
    constructor();
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceElement_2 extends Handle_StepDimTol_HArray1OfDatumReferenceElement {
    constructor(thePtr: StepDimTol_HArray1OfDatumReferenceElement);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceElement_3 extends Handle_StepDimTol_HArray1OfDatumReferenceElement {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReferenceElement);
  }

  export declare class Handle_StepDimTol_HArray1OfDatumReferenceElement_4 extends Handle_StepDimTol_HArray1OfDatumReferenceElement {
    constructor(theHandle: Handle_StepDimTol_HArray1OfDatumReferenceElement);
  }

export declare class Handle_StepDimTol_HArray1OfToleranceZoneTarget {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_HArray1OfToleranceZoneTarget): void;
  get(): StepDimTol_HArray1OfToleranceZoneTarget;
}

  export declare class Handle_StepDimTol_HArray1OfToleranceZoneTarget_1 extends Handle_StepDimTol_HArray1OfToleranceZoneTarget {
    constructor();
  }

  export declare class Handle_StepDimTol_HArray1OfToleranceZoneTarget_2 extends Handle_StepDimTol_HArray1OfToleranceZoneTarget {
    constructor(thePtr: StepDimTol_HArray1OfToleranceZoneTarget);
  }

  export declare class Handle_StepDimTol_HArray1OfToleranceZoneTarget_3 extends Handle_StepDimTol_HArray1OfToleranceZoneTarget {
    constructor(theHandle: Handle_StepDimTol_HArray1OfToleranceZoneTarget);
  }

  export declare class Handle_StepDimTol_HArray1OfToleranceZoneTarget_4 extends Handle_StepDimTol_HArray1OfToleranceZoneTarget {
    constructor(theHandle: Handle_StepDimTol_HArray1OfToleranceZoneTarget);
  }

export declare class Handle_StepDimTol_LineProfileTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_LineProfileTolerance): void;
  get(): StepDimTol_LineProfileTolerance;
}

  export declare class Handle_StepDimTol_LineProfileTolerance_1 extends Handle_StepDimTol_LineProfileTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_LineProfileTolerance_2 extends Handle_StepDimTol_LineProfileTolerance {
    constructor(thePtr: StepDimTol_LineProfileTolerance);
  }

  export declare class Handle_StepDimTol_LineProfileTolerance_3 extends Handle_StepDimTol_LineProfileTolerance {
    constructor(theHandle: Handle_StepDimTol_LineProfileTolerance);
  }

  export declare class Handle_StepDimTol_LineProfileTolerance_4 extends Handle_StepDimTol_LineProfileTolerance {
    constructor(theHandle: Handle_StepDimTol_LineProfileTolerance);
  }

export declare class Handle_StepDimTol_ModifiedGeometricTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_ModifiedGeometricTolerance): void;
  get(): StepDimTol_ModifiedGeometricTolerance;
}

  export declare class Handle_StepDimTol_ModifiedGeometricTolerance_1 extends Handle_StepDimTol_ModifiedGeometricTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_ModifiedGeometricTolerance_2 extends Handle_StepDimTol_ModifiedGeometricTolerance {
    constructor(thePtr: StepDimTol_ModifiedGeometricTolerance);
  }

  export declare class Handle_StepDimTol_ModifiedGeometricTolerance_3 extends Handle_StepDimTol_ModifiedGeometricTolerance {
    constructor(theHandle: Handle_StepDimTol_ModifiedGeometricTolerance);
  }

  export declare class Handle_StepDimTol_ModifiedGeometricTolerance_4 extends Handle_StepDimTol_ModifiedGeometricTolerance {
    constructor(theHandle: Handle_StepDimTol_ModifiedGeometricTolerance);
  }

export declare class Handle_StepDimTol_ToleranceZoneForm {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_ToleranceZoneForm): void;
  get(): StepDimTol_ToleranceZoneForm;
}

  export declare class Handle_StepDimTol_ToleranceZoneForm_1 extends Handle_StepDimTol_ToleranceZoneForm {
    constructor();
  }

  export declare class Handle_StepDimTol_ToleranceZoneForm_2 extends Handle_StepDimTol_ToleranceZoneForm {
    constructor(thePtr: StepDimTol_ToleranceZoneForm);
  }

  export declare class Handle_StepDimTol_ToleranceZoneForm_3 extends Handle_StepDimTol_ToleranceZoneForm {
    constructor(theHandle: Handle_StepDimTol_ToleranceZoneForm);
  }

  export declare class Handle_StepDimTol_ToleranceZoneForm_4 extends Handle_StepDimTol_ToleranceZoneForm {
    constructor(theHandle: Handle_StepDimTol_ToleranceZoneForm);
  }

export declare class Handle_StepDimTol_ToleranceZone {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_ToleranceZone): void;
  get(): StepDimTol_ToleranceZone;
}

  export declare class Handle_StepDimTol_ToleranceZone_1 extends Handle_StepDimTol_ToleranceZone {
    constructor();
  }

  export declare class Handle_StepDimTol_ToleranceZone_2 extends Handle_StepDimTol_ToleranceZone {
    constructor(thePtr: StepDimTol_ToleranceZone);
  }

  export declare class Handle_StepDimTol_ToleranceZone_3 extends Handle_StepDimTol_ToleranceZone {
    constructor(theHandle: Handle_StepDimTol_ToleranceZone);
  }

  export declare class Handle_StepDimTol_ToleranceZone_4 extends Handle_StepDimTol_ToleranceZone {
    constructor(theHandle: Handle_StepDimTol_ToleranceZone);
  }

export declare class Handle_StepDimTol_ToleranceZoneDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_ToleranceZoneDefinition): void;
  get(): StepDimTol_ToleranceZoneDefinition;
}

  export declare class Handle_StepDimTol_ToleranceZoneDefinition_1 extends Handle_StepDimTol_ToleranceZoneDefinition {
    constructor();
  }

  export declare class Handle_StepDimTol_ToleranceZoneDefinition_2 extends Handle_StepDimTol_ToleranceZoneDefinition {
    constructor(thePtr: StepDimTol_ToleranceZoneDefinition);
  }

  export declare class Handle_StepDimTol_ToleranceZoneDefinition_3 extends Handle_StepDimTol_ToleranceZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_ToleranceZoneDefinition);
  }

  export declare class Handle_StepDimTol_ToleranceZoneDefinition_4 extends Handle_StepDimTol_ToleranceZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_ToleranceZoneDefinition);
  }

export declare class Handle_StepDimTol_NonUniformZoneDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_NonUniformZoneDefinition): void;
  get(): StepDimTol_NonUniformZoneDefinition;
}

  export declare class Handle_StepDimTol_NonUniformZoneDefinition_1 extends Handle_StepDimTol_NonUniformZoneDefinition {
    constructor();
  }

  export declare class Handle_StepDimTol_NonUniformZoneDefinition_2 extends Handle_StepDimTol_NonUniformZoneDefinition {
    constructor(thePtr: StepDimTol_NonUniformZoneDefinition);
  }

  export declare class Handle_StepDimTol_NonUniformZoneDefinition_3 extends Handle_StepDimTol_NonUniformZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_NonUniformZoneDefinition);
  }

  export declare class Handle_StepDimTol_NonUniformZoneDefinition_4 extends Handle_StepDimTol_NonUniformZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_NonUniformZoneDefinition);
  }

export declare class Handle_StepDimTol_ParallelismTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_ParallelismTolerance): void;
  get(): StepDimTol_ParallelismTolerance;
}

  export declare class Handle_StepDimTol_ParallelismTolerance_1 extends Handle_StepDimTol_ParallelismTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_ParallelismTolerance_2 extends Handle_StepDimTol_ParallelismTolerance {
    constructor(thePtr: StepDimTol_ParallelismTolerance);
  }

  export declare class Handle_StepDimTol_ParallelismTolerance_3 extends Handle_StepDimTol_ParallelismTolerance {
    constructor(theHandle: Handle_StepDimTol_ParallelismTolerance);
  }

  export declare class Handle_StepDimTol_ParallelismTolerance_4 extends Handle_StepDimTol_ParallelismTolerance {
    constructor(theHandle: Handle_StepDimTol_ParallelismTolerance);
  }

export declare class Handle_StepDimTol_PerpendicularityTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_PerpendicularityTolerance): void;
  get(): StepDimTol_PerpendicularityTolerance;
}

  export declare class Handle_StepDimTol_PerpendicularityTolerance_1 extends Handle_StepDimTol_PerpendicularityTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_PerpendicularityTolerance_2 extends Handle_StepDimTol_PerpendicularityTolerance {
    constructor(thePtr: StepDimTol_PerpendicularityTolerance);
  }

  export declare class Handle_StepDimTol_PerpendicularityTolerance_3 extends Handle_StepDimTol_PerpendicularityTolerance {
    constructor(theHandle: Handle_StepDimTol_PerpendicularityTolerance);
  }

  export declare class Handle_StepDimTol_PerpendicularityTolerance_4 extends Handle_StepDimTol_PerpendicularityTolerance {
    constructor(theHandle: Handle_StepDimTol_PerpendicularityTolerance);
  }

export declare class Handle_StepDimTol_PlacedDatumTargetFeature {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_PlacedDatumTargetFeature): void;
  get(): StepDimTol_PlacedDatumTargetFeature;
}

  export declare class Handle_StepDimTol_PlacedDatumTargetFeature_1 extends Handle_StepDimTol_PlacedDatumTargetFeature {
    constructor();
  }

  export declare class Handle_StepDimTol_PlacedDatumTargetFeature_2 extends Handle_StepDimTol_PlacedDatumTargetFeature {
    constructor(thePtr: StepDimTol_PlacedDatumTargetFeature);
  }

  export declare class Handle_StepDimTol_PlacedDatumTargetFeature_3 extends Handle_StepDimTol_PlacedDatumTargetFeature {
    constructor(theHandle: Handle_StepDimTol_PlacedDatumTargetFeature);
  }

  export declare class Handle_StepDimTol_PlacedDatumTargetFeature_4 extends Handle_StepDimTol_PlacedDatumTargetFeature {
    constructor(theHandle: Handle_StepDimTol_PlacedDatumTargetFeature);
  }

export declare class Handle_StepDimTol_PositionTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_PositionTolerance): void;
  get(): StepDimTol_PositionTolerance;
}

  export declare class Handle_StepDimTol_PositionTolerance_1 extends Handle_StepDimTol_PositionTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_PositionTolerance_2 extends Handle_StepDimTol_PositionTolerance {
    constructor(thePtr: StepDimTol_PositionTolerance);
  }

  export declare class Handle_StepDimTol_PositionTolerance_3 extends Handle_StepDimTol_PositionTolerance {
    constructor(theHandle: Handle_StepDimTol_PositionTolerance);
  }

  export declare class Handle_StepDimTol_PositionTolerance_4 extends Handle_StepDimTol_PositionTolerance {
    constructor(theHandle: Handle_StepDimTol_PositionTolerance);
  }

export declare class Handle_StepDimTol_ProjectedZoneDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_ProjectedZoneDefinition): void;
  get(): StepDimTol_ProjectedZoneDefinition;
}

  export declare class Handle_StepDimTol_ProjectedZoneDefinition_1 extends Handle_StepDimTol_ProjectedZoneDefinition {
    constructor();
  }

  export declare class Handle_StepDimTol_ProjectedZoneDefinition_2 extends Handle_StepDimTol_ProjectedZoneDefinition {
    constructor(thePtr: StepDimTol_ProjectedZoneDefinition);
  }

  export declare class Handle_StepDimTol_ProjectedZoneDefinition_3 extends Handle_StepDimTol_ProjectedZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_ProjectedZoneDefinition);
  }

  export declare class Handle_StepDimTol_ProjectedZoneDefinition_4 extends Handle_StepDimTol_ProjectedZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_ProjectedZoneDefinition);
  }

export declare class Handle_StepDimTol_RoundnessTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_RoundnessTolerance): void;
  get(): StepDimTol_RoundnessTolerance;
}

  export declare class Handle_StepDimTol_RoundnessTolerance_1 extends Handle_StepDimTol_RoundnessTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_RoundnessTolerance_2 extends Handle_StepDimTol_RoundnessTolerance {
    constructor(thePtr: StepDimTol_RoundnessTolerance);
  }

  export declare class Handle_StepDimTol_RoundnessTolerance_3 extends Handle_StepDimTol_RoundnessTolerance {
    constructor(theHandle: Handle_StepDimTol_RoundnessTolerance);
  }

  export declare class Handle_StepDimTol_RoundnessTolerance_4 extends Handle_StepDimTol_RoundnessTolerance {
    constructor(theHandle: Handle_StepDimTol_RoundnessTolerance);
  }

export declare class Handle_StepDimTol_RunoutZoneOrientation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_RunoutZoneOrientation): void;
  get(): StepDimTol_RunoutZoneOrientation;
}

  export declare class Handle_StepDimTol_RunoutZoneOrientation_1 extends Handle_StepDimTol_RunoutZoneOrientation {
    constructor();
  }

  export declare class Handle_StepDimTol_RunoutZoneOrientation_2 extends Handle_StepDimTol_RunoutZoneOrientation {
    constructor(thePtr: StepDimTol_RunoutZoneOrientation);
  }

  export declare class Handle_StepDimTol_RunoutZoneOrientation_3 extends Handle_StepDimTol_RunoutZoneOrientation {
    constructor(theHandle: Handle_StepDimTol_RunoutZoneOrientation);
  }

  export declare class Handle_StepDimTol_RunoutZoneOrientation_4 extends Handle_StepDimTol_RunoutZoneOrientation {
    constructor(theHandle: Handle_StepDimTol_RunoutZoneOrientation);
  }

export declare class Handle_StepDimTol_RunoutZoneDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_RunoutZoneDefinition): void;
  get(): StepDimTol_RunoutZoneDefinition;
}

  export declare class Handle_StepDimTol_RunoutZoneDefinition_1 extends Handle_StepDimTol_RunoutZoneDefinition {
    constructor();
  }

  export declare class Handle_StepDimTol_RunoutZoneDefinition_2 extends Handle_StepDimTol_RunoutZoneDefinition {
    constructor(thePtr: StepDimTol_RunoutZoneDefinition);
  }

  export declare class Handle_StepDimTol_RunoutZoneDefinition_3 extends Handle_StepDimTol_RunoutZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_RunoutZoneDefinition);
  }

  export declare class Handle_StepDimTol_RunoutZoneDefinition_4 extends Handle_StepDimTol_RunoutZoneDefinition {
    constructor(theHandle: Handle_StepDimTol_RunoutZoneDefinition);
  }

export declare class Handle_StepDimTol_StraightnessTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_StraightnessTolerance): void;
  get(): StepDimTol_StraightnessTolerance;
}

  export declare class Handle_StepDimTol_StraightnessTolerance_1 extends Handle_StepDimTol_StraightnessTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_StraightnessTolerance_2 extends Handle_StepDimTol_StraightnessTolerance {
    constructor(thePtr: StepDimTol_StraightnessTolerance);
  }

  export declare class Handle_StepDimTol_StraightnessTolerance_3 extends Handle_StepDimTol_StraightnessTolerance {
    constructor(theHandle: Handle_StepDimTol_StraightnessTolerance);
  }

  export declare class Handle_StepDimTol_StraightnessTolerance_4 extends Handle_StepDimTol_StraightnessTolerance {
    constructor(theHandle: Handle_StepDimTol_StraightnessTolerance);
  }

export declare class Handle_StepDimTol_SurfaceProfileTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_SurfaceProfileTolerance): void;
  get(): StepDimTol_SurfaceProfileTolerance;
}

  export declare class Handle_StepDimTol_SurfaceProfileTolerance_1 extends Handle_StepDimTol_SurfaceProfileTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_SurfaceProfileTolerance_2 extends Handle_StepDimTol_SurfaceProfileTolerance {
    constructor(thePtr: StepDimTol_SurfaceProfileTolerance);
  }

  export declare class Handle_StepDimTol_SurfaceProfileTolerance_3 extends Handle_StepDimTol_SurfaceProfileTolerance {
    constructor(theHandle: Handle_StepDimTol_SurfaceProfileTolerance);
  }

  export declare class Handle_StepDimTol_SurfaceProfileTolerance_4 extends Handle_StepDimTol_SurfaceProfileTolerance {
    constructor(theHandle: Handle_StepDimTol_SurfaceProfileTolerance);
  }

export declare class Handle_StepDimTol_SymmetryTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_SymmetryTolerance): void;
  get(): StepDimTol_SymmetryTolerance;
}

  export declare class Handle_StepDimTol_SymmetryTolerance_1 extends Handle_StepDimTol_SymmetryTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_SymmetryTolerance_2 extends Handle_StepDimTol_SymmetryTolerance {
    constructor(thePtr: StepDimTol_SymmetryTolerance);
  }

  export declare class Handle_StepDimTol_SymmetryTolerance_3 extends Handle_StepDimTol_SymmetryTolerance {
    constructor(theHandle: Handle_StepDimTol_SymmetryTolerance);
  }

  export declare class Handle_StepDimTol_SymmetryTolerance_4 extends Handle_StepDimTol_SymmetryTolerance {
    constructor(theHandle: Handle_StepDimTol_SymmetryTolerance);
  }

export declare class Handle_StepDimTol_TotalRunoutTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_TotalRunoutTolerance): void;
  get(): StepDimTol_TotalRunoutTolerance;
}

  export declare class Handle_StepDimTol_TotalRunoutTolerance_1 extends Handle_StepDimTol_TotalRunoutTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_TotalRunoutTolerance_2 extends Handle_StepDimTol_TotalRunoutTolerance {
    constructor(thePtr: StepDimTol_TotalRunoutTolerance);
  }

  export declare class Handle_StepDimTol_TotalRunoutTolerance_3 extends Handle_StepDimTol_TotalRunoutTolerance {
    constructor(theHandle: Handle_StepDimTol_TotalRunoutTolerance);
  }

  export declare class Handle_StepDimTol_TotalRunoutTolerance_4 extends Handle_StepDimTol_TotalRunoutTolerance {
    constructor(theHandle: Handle_StepDimTol_TotalRunoutTolerance);
  }

export declare class Handle_StepDimTol_UnequallyDisposedGeometricTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepDimTol_UnequallyDisposedGeometricTolerance): void;
  get(): StepDimTol_UnequallyDisposedGeometricTolerance;
}

  export declare class Handle_StepDimTol_UnequallyDisposedGeometricTolerance_1 extends Handle_StepDimTol_UnequallyDisposedGeometricTolerance {
    constructor();
  }

  export declare class Handle_StepDimTol_UnequallyDisposedGeometricTolerance_2 extends Handle_StepDimTol_UnequallyDisposedGeometricTolerance {
    constructor(thePtr: StepDimTol_UnequallyDisposedGeometricTolerance);
  }

  export declare class Handle_StepDimTol_UnequallyDisposedGeometricTolerance_3 extends Handle_StepDimTol_UnequallyDisposedGeometricTolerance {
    constructor(theHandle: Handle_StepDimTol_UnequallyDisposedGeometricTolerance);
  }

  export declare class Handle_StepDimTol_UnequallyDisposedGeometricTolerance_4 extends Handle_StepDimTol_UnequallyDisposedGeometricTolerance {
    constructor(theHandle: Handle_StepDimTol_UnequallyDisposedGeometricTolerance);
  }

export declare class Handle_StepVisual_StyledItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_StyledItem): void;
  get(): StepVisual_StyledItem;
}

  export declare class Handle_StepVisual_StyledItem_1 extends Handle_StepVisual_StyledItem {
    constructor();
  }

  export declare class Handle_StepVisual_StyledItem_2 extends Handle_StepVisual_StyledItem {
    constructor(thePtr: StepVisual_StyledItem);
  }

  export declare class Handle_StepVisual_StyledItem_3 extends Handle_StepVisual_StyledItem {
    constructor(theHandle: Handle_StepVisual_StyledItem);
  }

  export declare class Handle_StepVisual_StyledItem_4 extends Handle_StepVisual_StyledItem {
    constructor(theHandle: Handle_StepVisual_StyledItem);
  }

export declare class Handle_StepVisual_AnnotationOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationOccurrence): void;
  get(): StepVisual_AnnotationOccurrence;
}

  export declare class Handle_StepVisual_AnnotationOccurrence_1 extends Handle_StepVisual_AnnotationOccurrence {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationOccurrence_2 extends Handle_StepVisual_AnnotationOccurrence {
    constructor(thePtr: StepVisual_AnnotationOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationOccurrence_3 extends Handle_StepVisual_AnnotationOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationOccurrence_4 extends Handle_StepVisual_AnnotationOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationOccurrence);
  }

export declare class Handle_StepVisual_AnnotationCurveOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationCurveOccurrence): void;
  get(): StepVisual_AnnotationCurveOccurrence;
}

  export declare class Handle_StepVisual_AnnotationCurveOccurrence_1 extends Handle_StepVisual_AnnotationCurveOccurrence {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationCurveOccurrence_2 extends Handle_StepVisual_AnnotationCurveOccurrence {
    constructor(thePtr: StepVisual_AnnotationCurveOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationCurveOccurrence_3 extends Handle_StepVisual_AnnotationCurveOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationCurveOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationCurveOccurrence_4 extends Handle_StepVisual_AnnotationCurveOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationCurveOccurrence);
  }

export declare class Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationCurveOccurrenceAndGeomReprItem): void;
  get(): StepVisual_AnnotationCurveOccurrenceAndGeomReprItem;
}

  export declare class Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_1 extends Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_2 extends Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem {
    constructor(thePtr: StepVisual_AnnotationCurveOccurrenceAndGeomReprItem);
  }

  export declare class Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_3 extends Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem {
    constructor(theHandle: Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem);
  }

  export declare class Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_4 extends Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem {
    constructor(theHandle: Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem);
  }

export declare class Handle_StepVisual_AnnotationFillArea {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationFillArea): void;
  get(): StepVisual_AnnotationFillArea;
}

  export declare class Handle_StepVisual_AnnotationFillArea_1 extends Handle_StepVisual_AnnotationFillArea {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationFillArea_2 extends Handle_StepVisual_AnnotationFillArea {
    constructor(thePtr: StepVisual_AnnotationFillArea);
  }

  export declare class Handle_StepVisual_AnnotationFillArea_3 extends Handle_StepVisual_AnnotationFillArea {
    constructor(theHandle: Handle_StepVisual_AnnotationFillArea);
  }

  export declare class Handle_StepVisual_AnnotationFillArea_4 extends Handle_StepVisual_AnnotationFillArea {
    constructor(theHandle: Handle_StepVisual_AnnotationFillArea);
  }

export declare class Handle_StepVisual_AnnotationFillAreaOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationFillAreaOccurrence): void;
  get(): StepVisual_AnnotationFillAreaOccurrence;
}

  export declare class Handle_StepVisual_AnnotationFillAreaOccurrence_1 extends Handle_StepVisual_AnnotationFillAreaOccurrence {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationFillAreaOccurrence_2 extends Handle_StepVisual_AnnotationFillAreaOccurrence {
    constructor(thePtr: StepVisual_AnnotationFillAreaOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationFillAreaOccurrence_3 extends Handle_StepVisual_AnnotationFillAreaOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationFillAreaOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationFillAreaOccurrence_4 extends Handle_StepVisual_AnnotationFillAreaOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationFillAreaOccurrence);
  }

export declare class StepVisual_Array1OfAnnotationPlaneElement {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_AnnotationPlaneElement): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfAnnotationPlaneElement): StepVisual_Array1OfAnnotationPlaneElement;
  Move(theOther: StepVisual_Array1OfAnnotationPlaneElement): StepVisual_Array1OfAnnotationPlaneElement;
  First(): StepVisual_AnnotationPlaneElement;
  ChangeFirst(): StepVisual_AnnotationPlaneElement;
  Last(): StepVisual_AnnotationPlaneElement;
  ChangeLast(): StepVisual_AnnotationPlaneElement;
  Value(theIndex: Standard_Integer): StepVisual_AnnotationPlaneElement;
  ChangeValue(theIndex: Standard_Integer): StepVisual_AnnotationPlaneElement;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_AnnotationPlaneElement): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfAnnotationPlaneElement_1 extends StepVisual_Array1OfAnnotationPlaneElement {
    constructor();
  }

  export declare class StepVisual_Array1OfAnnotationPlaneElement_2 extends StepVisual_Array1OfAnnotationPlaneElement {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfAnnotationPlaneElement_3 extends StepVisual_Array1OfAnnotationPlaneElement {
    constructor(theOther: StepVisual_Array1OfAnnotationPlaneElement);
  }

  export declare class StepVisual_Array1OfAnnotationPlaneElement_4 extends StepVisual_Array1OfAnnotationPlaneElement {
    constructor(theOther: StepVisual_Array1OfAnnotationPlaneElement);
  }

  export declare class StepVisual_Array1OfAnnotationPlaneElement_5 extends StepVisual_Array1OfAnnotationPlaneElement {
    constructor(theBegin: StepVisual_AnnotationPlaneElement, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepVisual_HArray1OfAnnotationPlaneElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfAnnotationPlaneElement): void;
  get(): StepVisual_HArray1OfAnnotationPlaneElement;
}

  export declare class Handle_StepVisual_HArray1OfAnnotationPlaneElement_1 extends Handle_StepVisual_HArray1OfAnnotationPlaneElement {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfAnnotationPlaneElement_2 extends Handle_StepVisual_HArray1OfAnnotationPlaneElement {
    constructor(thePtr: StepVisual_HArray1OfAnnotationPlaneElement);
  }

  export declare class Handle_StepVisual_HArray1OfAnnotationPlaneElement_3 extends Handle_StepVisual_HArray1OfAnnotationPlaneElement {
    constructor(theHandle: Handle_StepVisual_HArray1OfAnnotationPlaneElement);
  }

  export declare class Handle_StepVisual_HArray1OfAnnotationPlaneElement_4 extends Handle_StepVisual_HArray1OfAnnotationPlaneElement {
    constructor(theHandle: Handle_StepVisual_HArray1OfAnnotationPlaneElement);
  }

export declare class Handle_StepVisual_AnnotationPlane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationPlane): void;
  get(): StepVisual_AnnotationPlane;
}

  export declare class Handle_StepVisual_AnnotationPlane_1 extends Handle_StepVisual_AnnotationPlane {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationPlane_2 extends Handle_StepVisual_AnnotationPlane {
    constructor(thePtr: StepVisual_AnnotationPlane);
  }

  export declare class Handle_StepVisual_AnnotationPlane_3 extends Handle_StepVisual_AnnotationPlane {
    constructor(theHandle: Handle_StepVisual_AnnotationPlane);
  }

  export declare class Handle_StepVisual_AnnotationPlane_4 extends Handle_StepVisual_AnnotationPlane {
    constructor(theHandle: Handle_StepVisual_AnnotationPlane);
  }

export declare class Handle_StepVisual_AnnotationText {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationText): void;
  get(): StepVisual_AnnotationText;
}

  export declare class Handle_StepVisual_AnnotationText_1 extends Handle_StepVisual_AnnotationText {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationText_2 extends Handle_StepVisual_AnnotationText {
    constructor(thePtr: StepVisual_AnnotationText);
  }

  export declare class Handle_StepVisual_AnnotationText_3 extends Handle_StepVisual_AnnotationText {
    constructor(theHandle: Handle_StepVisual_AnnotationText);
  }

  export declare class Handle_StepVisual_AnnotationText_4 extends Handle_StepVisual_AnnotationText {
    constructor(theHandle: Handle_StepVisual_AnnotationText);
  }

export declare class Handle_StepVisual_AnnotationTextOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AnnotationTextOccurrence): void;
  get(): StepVisual_AnnotationTextOccurrence;
}

  export declare class Handle_StepVisual_AnnotationTextOccurrence_1 extends Handle_StepVisual_AnnotationTextOccurrence {
    constructor();
  }

  export declare class Handle_StepVisual_AnnotationTextOccurrence_2 extends Handle_StepVisual_AnnotationTextOccurrence {
    constructor(thePtr: StepVisual_AnnotationTextOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationTextOccurrence_3 extends Handle_StepVisual_AnnotationTextOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationTextOccurrence);
  }

  export declare class Handle_StepVisual_AnnotationTextOccurrence_4 extends Handle_StepVisual_AnnotationTextOccurrence {
    constructor(theHandle: Handle_StepVisual_AnnotationTextOccurrence);
  }

export declare class Handle_StepVisual_AreaInSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_AreaInSet): void;
  get(): StepVisual_AreaInSet;
}

  export declare class Handle_StepVisual_AreaInSet_1 extends Handle_StepVisual_AreaInSet {
    constructor();
  }

  export declare class Handle_StepVisual_AreaInSet_2 extends Handle_StepVisual_AreaInSet {
    constructor(thePtr: StepVisual_AreaInSet);
  }

  export declare class Handle_StepVisual_AreaInSet_3 extends Handle_StepVisual_AreaInSet {
    constructor(theHandle: Handle_StepVisual_AreaInSet);
  }

  export declare class Handle_StepVisual_AreaInSet_4 extends Handle_StepVisual_AreaInSet {
    constructor(theHandle: Handle_StepVisual_AreaInSet);
  }

export declare class StepVisual_Array1OfBoxCharacteristicSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_BoxCharacteristicSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfBoxCharacteristicSelect): StepVisual_Array1OfBoxCharacteristicSelect;
  Move(theOther: StepVisual_Array1OfBoxCharacteristicSelect): StepVisual_Array1OfBoxCharacteristicSelect;
  First(): StepVisual_BoxCharacteristicSelect;
  ChangeFirst(): StepVisual_BoxCharacteristicSelect;
  Last(): StepVisual_BoxCharacteristicSelect;
  ChangeLast(): StepVisual_BoxCharacteristicSelect;
  Value(theIndex: Standard_Integer): StepVisual_BoxCharacteristicSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_BoxCharacteristicSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_BoxCharacteristicSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfBoxCharacteristicSelect_1 extends StepVisual_Array1OfBoxCharacteristicSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfBoxCharacteristicSelect_2 extends StepVisual_Array1OfBoxCharacteristicSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfBoxCharacteristicSelect_3 extends StepVisual_Array1OfBoxCharacteristicSelect {
    constructor(theOther: StepVisual_Array1OfBoxCharacteristicSelect);
  }

  export declare class StepVisual_Array1OfBoxCharacteristicSelect_4 extends StepVisual_Array1OfBoxCharacteristicSelect {
    constructor(theOther: StepVisual_Array1OfBoxCharacteristicSelect);
  }

  export declare class StepVisual_Array1OfBoxCharacteristicSelect_5 extends StepVisual_Array1OfBoxCharacteristicSelect {
    constructor(theBegin: StepVisual_BoxCharacteristicSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_CameraModelD3MultiClippingInterectionSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect): StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect;
  Move(theOther: StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect): StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect;
  First(): StepVisual_CameraModelD3MultiClippingInterectionSelect;
  ChangeFirst(): StepVisual_CameraModelD3MultiClippingInterectionSelect;
  Last(): StepVisual_CameraModelD3MultiClippingInterectionSelect;
  ChangeLast(): StepVisual_CameraModelD3MultiClippingInterectionSelect;
  Value(theIndex: Standard_Integer): StepVisual_CameraModelD3MultiClippingInterectionSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_CameraModelD3MultiClippingInterectionSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_CameraModelD3MultiClippingInterectionSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_1 extends StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_2 extends StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_3 extends StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect {
    constructor(theOther: StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect);
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_4 extends StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect {
    constructor(theOther: StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect);
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_5 extends StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect {
    constructor(theBegin: StepVisual_CameraModelD3MultiClippingInterectionSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_CameraModelD3MultiClippingUnionSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect): StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect;
  Move(theOther: StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect): StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect;
  First(): StepVisual_CameraModelD3MultiClippingUnionSelect;
  ChangeFirst(): StepVisual_CameraModelD3MultiClippingUnionSelect;
  Last(): StepVisual_CameraModelD3MultiClippingUnionSelect;
  ChangeLast(): StepVisual_CameraModelD3MultiClippingUnionSelect;
  Value(theIndex: Standard_Integer): StepVisual_CameraModelD3MultiClippingUnionSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_CameraModelD3MultiClippingUnionSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_CameraModelD3MultiClippingUnionSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_1 extends StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_2 extends StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_3 extends StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect {
    constructor(theOther: StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect);
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_4 extends StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect {
    constructor(theOther: StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect);
  }

  export declare class StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_5 extends StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect {
    constructor(theBegin: StepVisual_CameraModelD3MultiClippingUnionSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepVisual_CurveStyleFontPattern {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CurveStyleFontPattern): void;
  get(): StepVisual_CurveStyleFontPattern;
}

  export declare class Handle_StepVisual_CurveStyleFontPattern_1 extends Handle_StepVisual_CurveStyleFontPattern {
    constructor();
  }

  export declare class Handle_StepVisual_CurveStyleFontPattern_2 extends Handle_StepVisual_CurveStyleFontPattern {
    constructor(thePtr: StepVisual_CurveStyleFontPattern);
  }

  export declare class Handle_StepVisual_CurveStyleFontPattern_3 extends Handle_StepVisual_CurveStyleFontPattern {
    constructor(theHandle: Handle_StepVisual_CurveStyleFontPattern);
  }

  export declare class Handle_StepVisual_CurveStyleFontPattern_4 extends Handle_StepVisual_CurveStyleFontPattern {
    constructor(theHandle: Handle_StepVisual_CurveStyleFontPattern);
  }

export declare class StepVisual_Array1OfDirectionCountSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_DirectionCountSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfDirectionCountSelect): StepVisual_Array1OfDirectionCountSelect;
  Move(theOther: StepVisual_Array1OfDirectionCountSelect): StepVisual_Array1OfDirectionCountSelect;
  First(): StepVisual_DirectionCountSelect;
  ChangeFirst(): StepVisual_DirectionCountSelect;
  Last(): StepVisual_DirectionCountSelect;
  ChangeLast(): StepVisual_DirectionCountSelect;
  Value(theIndex: Standard_Integer): StepVisual_DirectionCountSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_DirectionCountSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_DirectionCountSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfDirectionCountSelect_1 extends StepVisual_Array1OfDirectionCountSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfDirectionCountSelect_2 extends StepVisual_Array1OfDirectionCountSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfDirectionCountSelect_3 extends StepVisual_Array1OfDirectionCountSelect {
    constructor(theOther: StepVisual_Array1OfDirectionCountSelect);
  }

  export declare class StepVisual_Array1OfDirectionCountSelect_4 extends StepVisual_Array1OfDirectionCountSelect {
    constructor(theOther: StepVisual_Array1OfDirectionCountSelect);
  }

  export declare class StepVisual_Array1OfDirectionCountSelect_5 extends StepVisual_Array1OfDirectionCountSelect {
    constructor(theBegin: StepVisual_DirectionCountSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfDraughtingCalloutElement {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_DraughtingCalloutElement): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfDraughtingCalloutElement): StepVisual_Array1OfDraughtingCalloutElement;
  Move(theOther: StepVisual_Array1OfDraughtingCalloutElement): StepVisual_Array1OfDraughtingCalloutElement;
  First(): StepVisual_DraughtingCalloutElement;
  ChangeFirst(): StepVisual_DraughtingCalloutElement;
  Last(): StepVisual_DraughtingCalloutElement;
  ChangeLast(): StepVisual_DraughtingCalloutElement;
  Value(theIndex: Standard_Integer): StepVisual_DraughtingCalloutElement;
  ChangeValue(theIndex: Standard_Integer): StepVisual_DraughtingCalloutElement;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_DraughtingCalloutElement): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfDraughtingCalloutElement_1 extends StepVisual_Array1OfDraughtingCalloutElement {
    constructor();
  }

  export declare class StepVisual_Array1OfDraughtingCalloutElement_2 extends StepVisual_Array1OfDraughtingCalloutElement {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfDraughtingCalloutElement_3 extends StepVisual_Array1OfDraughtingCalloutElement {
    constructor(theOther: StepVisual_Array1OfDraughtingCalloutElement);
  }

  export declare class StepVisual_Array1OfDraughtingCalloutElement_4 extends StepVisual_Array1OfDraughtingCalloutElement {
    constructor(theOther: StepVisual_Array1OfDraughtingCalloutElement);
  }

  export declare class StepVisual_Array1OfDraughtingCalloutElement_5 extends StepVisual_Array1OfDraughtingCalloutElement {
    constructor(theBegin: StepVisual_DraughtingCalloutElement, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfFillStyleSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_FillStyleSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfFillStyleSelect): StepVisual_Array1OfFillStyleSelect;
  Move(theOther: StepVisual_Array1OfFillStyleSelect): StepVisual_Array1OfFillStyleSelect;
  First(): StepVisual_FillStyleSelect;
  ChangeFirst(): StepVisual_FillStyleSelect;
  Last(): StepVisual_FillStyleSelect;
  ChangeLast(): StepVisual_FillStyleSelect;
  Value(theIndex: Standard_Integer): StepVisual_FillStyleSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_FillStyleSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_FillStyleSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfFillStyleSelect_1 extends StepVisual_Array1OfFillStyleSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfFillStyleSelect_2 extends StepVisual_Array1OfFillStyleSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfFillStyleSelect_3 extends StepVisual_Array1OfFillStyleSelect {
    constructor(theOther: StepVisual_Array1OfFillStyleSelect);
  }

  export declare class StepVisual_Array1OfFillStyleSelect_4 extends StepVisual_Array1OfFillStyleSelect {
    constructor(theOther: StepVisual_Array1OfFillStyleSelect);
  }

  export declare class StepVisual_Array1OfFillStyleSelect_5 extends StepVisual_Array1OfFillStyleSelect {
    constructor(theBegin: StepVisual_FillStyleSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfInvisibleItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_InvisibleItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfInvisibleItem): StepVisual_Array1OfInvisibleItem;
  Move(theOther: StepVisual_Array1OfInvisibleItem): StepVisual_Array1OfInvisibleItem;
  First(): StepVisual_InvisibleItem;
  ChangeFirst(): StepVisual_InvisibleItem;
  Last(): StepVisual_InvisibleItem;
  ChangeLast(): StepVisual_InvisibleItem;
  Value(theIndex: Standard_Integer): StepVisual_InvisibleItem;
  ChangeValue(theIndex: Standard_Integer): StepVisual_InvisibleItem;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_InvisibleItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfInvisibleItem_1 extends StepVisual_Array1OfInvisibleItem {
    constructor();
  }

  export declare class StepVisual_Array1OfInvisibleItem_2 extends StepVisual_Array1OfInvisibleItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfInvisibleItem_3 extends StepVisual_Array1OfInvisibleItem {
    constructor(theOther: StepVisual_Array1OfInvisibleItem);
  }

  export declare class StepVisual_Array1OfInvisibleItem_4 extends StepVisual_Array1OfInvisibleItem {
    constructor(theOther: StepVisual_Array1OfInvisibleItem);
  }

  export declare class StepVisual_Array1OfInvisibleItem_5 extends StepVisual_Array1OfInvisibleItem {
    constructor(theBegin: StepVisual_InvisibleItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfLayeredItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_LayeredItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfLayeredItem): StepVisual_Array1OfLayeredItem;
  Move(theOther: StepVisual_Array1OfLayeredItem): StepVisual_Array1OfLayeredItem;
  First(): StepVisual_LayeredItem;
  ChangeFirst(): StepVisual_LayeredItem;
  Last(): StepVisual_LayeredItem;
  ChangeLast(): StepVisual_LayeredItem;
  Value(theIndex: Standard_Integer): StepVisual_LayeredItem;
  ChangeValue(theIndex: Standard_Integer): StepVisual_LayeredItem;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_LayeredItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfLayeredItem_1 extends StepVisual_Array1OfLayeredItem {
    constructor();
  }

  export declare class StepVisual_Array1OfLayeredItem_2 extends StepVisual_Array1OfLayeredItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfLayeredItem_3 extends StepVisual_Array1OfLayeredItem {
    constructor(theOther: StepVisual_Array1OfLayeredItem);
  }

  export declare class StepVisual_Array1OfLayeredItem_4 extends StepVisual_Array1OfLayeredItem {
    constructor(theOther: StepVisual_Array1OfLayeredItem);
  }

  export declare class StepVisual_Array1OfLayeredItem_5 extends StepVisual_Array1OfLayeredItem {
    constructor(theBegin: StepVisual_LayeredItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfRenderingPropertiesSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_RenderingPropertiesSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfRenderingPropertiesSelect): StepVisual_Array1OfRenderingPropertiesSelect;
  Move(theOther: StepVisual_Array1OfRenderingPropertiesSelect): StepVisual_Array1OfRenderingPropertiesSelect;
  First(): StepVisual_RenderingPropertiesSelect;
  ChangeFirst(): StepVisual_RenderingPropertiesSelect;
  Last(): StepVisual_RenderingPropertiesSelect;
  ChangeLast(): StepVisual_RenderingPropertiesSelect;
  Value(theIndex: Standard_Integer): StepVisual_RenderingPropertiesSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_RenderingPropertiesSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_RenderingPropertiesSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfRenderingPropertiesSelect_1 extends StepVisual_Array1OfRenderingPropertiesSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfRenderingPropertiesSelect_2 extends StepVisual_Array1OfRenderingPropertiesSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfRenderingPropertiesSelect_3 extends StepVisual_Array1OfRenderingPropertiesSelect {
    constructor(theOther: StepVisual_Array1OfRenderingPropertiesSelect);
  }

  export declare class StepVisual_Array1OfRenderingPropertiesSelect_4 extends StepVisual_Array1OfRenderingPropertiesSelect {
    constructor(theOther: StepVisual_Array1OfRenderingPropertiesSelect);
  }

  export declare class StepVisual_Array1OfRenderingPropertiesSelect_5 extends StepVisual_Array1OfRenderingPropertiesSelect {
    constructor(theBegin: StepVisual_RenderingPropertiesSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfStyleContextSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_StyleContextSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfStyleContextSelect): StepVisual_Array1OfStyleContextSelect;
  Move(theOther: StepVisual_Array1OfStyleContextSelect): StepVisual_Array1OfStyleContextSelect;
  First(): StepVisual_StyleContextSelect;
  ChangeFirst(): StepVisual_StyleContextSelect;
  Last(): StepVisual_StyleContextSelect;
  ChangeLast(): StepVisual_StyleContextSelect;
  Value(theIndex: Standard_Integer): StepVisual_StyleContextSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_StyleContextSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_StyleContextSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfStyleContextSelect_1 extends StepVisual_Array1OfStyleContextSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfStyleContextSelect_2 extends StepVisual_Array1OfStyleContextSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfStyleContextSelect_3 extends StepVisual_Array1OfStyleContextSelect {
    constructor(theOther: StepVisual_Array1OfStyleContextSelect);
  }

  export declare class StepVisual_Array1OfStyleContextSelect_4 extends StepVisual_Array1OfStyleContextSelect {
    constructor(theOther: StepVisual_Array1OfStyleContextSelect);
  }

  export declare class StepVisual_Array1OfStyleContextSelect_5 extends StepVisual_Array1OfStyleContextSelect {
    constructor(theBegin: StepVisual_StyleContextSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfSurfaceStyleElementSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_SurfaceStyleElementSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfSurfaceStyleElementSelect): StepVisual_Array1OfSurfaceStyleElementSelect;
  Move(theOther: StepVisual_Array1OfSurfaceStyleElementSelect): StepVisual_Array1OfSurfaceStyleElementSelect;
  First(): StepVisual_SurfaceStyleElementSelect;
  ChangeFirst(): StepVisual_SurfaceStyleElementSelect;
  Last(): StepVisual_SurfaceStyleElementSelect;
  ChangeLast(): StepVisual_SurfaceStyleElementSelect;
  Value(theIndex: Standard_Integer): StepVisual_SurfaceStyleElementSelect;
  ChangeValue(theIndex: Standard_Integer): StepVisual_SurfaceStyleElementSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_SurfaceStyleElementSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfSurfaceStyleElementSelect_1 extends StepVisual_Array1OfSurfaceStyleElementSelect {
    constructor();
  }

  export declare class StepVisual_Array1OfSurfaceStyleElementSelect_2 extends StepVisual_Array1OfSurfaceStyleElementSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfSurfaceStyleElementSelect_3 extends StepVisual_Array1OfSurfaceStyleElementSelect {
    constructor(theOther: StepVisual_Array1OfSurfaceStyleElementSelect);
  }

  export declare class StepVisual_Array1OfSurfaceStyleElementSelect_4 extends StepVisual_Array1OfSurfaceStyleElementSelect {
    constructor(theOther: StepVisual_Array1OfSurfaceStyleElementSelect);
  }

  export declare class StepVisual_Array1OfSurfaceStyleElementSelect_5 extends StepVisual_Array1OfSurfaceStyleElementSelect {
    constructor(theBegin: StepVisual_SurfaceStyleElementSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepVisual_Array1OfTextOrCharacter {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepVisual_TextOrCharacter): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepVisual_Array1OfTextOrCharacter): StepVisual_Array1OfTextOrCharacter;
  Move(theOther: StepVisual_Array1OfTextOrCharacter): StepVisual_Array1OfTextOrCharacter;
  First(): StepVisual_TextOrCharacter;
  ChangeFirst(): StepVisual_TextOrCharacter;
  Last(): StepVisual_TextOrCharacter;
  ChangeLast(): StepVisual_TextOrCharacter;
  Value(theIndex: Standard_Integer): StepVisual_TextOrCharacter;
  ChangeValue(theIndex: Standard_Integer): StepVisual_TextOrCharacter;
  SetValue(theIndex: Standard_Integer, theItem: StepVisual_TextOrCharacter): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepVisual_Array1OfTextOrCharacter_1 extends StepVisual_Array1OfTextOrCharacter {
    constructor();
  }

  export declare class StepVisual_Array1OfTextOrCharacter_2 extends StepVisual_Array1OfTextOrCharacter {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepVisual_Array1OfTextOrCharacter_3 extends StepVisual_Array1OfTextOrCharacter {
    constructor(theOther: StepVisual_Array1OfTextOrCharacter);
  }

  export declare class StepVisual_Array1OfTextOrCharacter_4 extends StepVisual_Array1OfTextOrCharacter {
    constructor(theOther: StepVisual_Array1OfTextOrCharacter);
  }

  export declare class StepVisual_Array1OfTextOrCharacter_5 extends StepVisual_Array1OfTextOrCharacter {
    constructor(theBegin: StepVisual_TextOrCharacter, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepVisual_Colour {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_Colour): void;
  get(): StepVisual_Colour;
}

  export declare class Handle_StepVisual_Colour_1 extends Handle_StepVisual_Colour {
    constructor();
  }

  export declare class Handle_StepVisual_Colour_2 extends Handle_StepVisual_Colour {
    constructor(thePtr: StepVisual_Colour);
  }

  export declare class Handle_StepVisual_Colour_3 extends Handle_StepVisual_Colour {
    constructor(theHandle: Handle_StepVisual_Colour);
  }

  export declare class Handle_StepVisual_Colour_4 extends Handle_StepVisual_Colour {
    constructor(theHandle: Handle_StepVisual_Colour);
  }

export declare class Handle_StepVisual_BackgroundColour {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_BackgroundColour): void;
  get(): StepVisual_BackgroundColour;
}

  export declare class Handle_StepVisual_BackgroundColour_1 extends Handle_StepVisual_BackgroundColour {
    constructor();
  }

  export declare class Handle_StepVisual_BackgroundColour_2 extends Handle_StepVisual_BackgroundColour {
    constructor(thePtr: StepVisual_BackgroundColour);
  }

  export declare class Handle_StepVisual_BackgroundColour_3 extends Handle_StepVisual_BackgroundColour {
    constructor(theHandle: Handle_StepVisual_BackgroundColour);
  }

  export declare class Handle_StepVisual_BackgroundColour_4 extends Handle_StepVisual_BackgroundColour {
    constructor(theHandle: Handle_StepVisual_BackgroundColour);
  }

export declare class Handle_StepVisual_CameraImage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraImage): void;
  get(): StepVisual_CameraImage;
}

  export declare class Handle_StepVisual_CameraImage_1 extends Handle_StepVisual_CameraImage {
    constructor();
  }

  export declare class Handle_StepVisual_CameraImage_2 extends Handle_StepVisual_CameraImage {
    constructor(thePtr: StepVisual_CameraImage);
  }

  export declare class Handle_StepVisual_CameraImage_3 extends Handle_StepVisual_CameraImage {
    constructor(theHandle: Handle_StepVisual_CameraImage);
  }

  export declare class Handle_StepVisual_CameraImage_4 extends Handle_StepVisual_CameraImage {
    constructor(theHandle: Handle_StepVisual_CameraImage);
  }

export declare class Handle_StepVisual_CameraImage2dWithScale {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraImage2dWithScale): void;
  get(): StepVisual_CameraImage2dWithScale;
}

  export declare class Handle_StepVisual_CameraImage2dWithScale_1 extends Handle_StepVisual_CameraImage2dWithScale {
    constructor();
  }

  export declare class Handle_StepVisual_CameraImage2dWithScale_2 extends Handle_StepVisual_CameraImage2dWithScale {
    constructor(thePtr: StepVisual_CameraImage2dWithScale);
  }

  export declare class Handle_StepVisual_CameraImage2dWithScale_3 extends Handle_StepVisual_CameraImage2dWithScale {
    constructor(theHandle: Handle_StepVisual_CameraImage2dWithScale);
  }

  export declare class Handle_StepVisual_CameraImage2dWithScale_4 extends Handle_StepVisual_CameraImage2dWithScale {
    constructor(theHandle: Handle_StepVisual_CameraImage2dWithScale);
  }

export declare class Handle_StepVisual_CameraImage3dWithScale {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraImage3dWithScale): void;
  get(): StepVisual_CameraImage3dWithScale;
}

  export declare class Handle_StepVisual_CameraImage3dWithScale_1 extends Handle_StepVisual_CameraImage3dWithScale {
    constructor();
  }

  export declare class Handle_StepVisual_CameraImage3dWithScale_2 extends Handle_StepVisual_CameraImage3dWithScale {
    constructor(thePtr: StepVisual_CameraImage3dWithScale);
  }

  export declare class Handle_StepVisual_CameraImage3dWithScale_3 extends Handle_StepVisual_CameraImage3dWithScale {
    constructor(theHandle: Handle_StepVisual_CameraImage3dWithScale);
  }

  export declare class Handle_StepVisual_CameraImage3dWithScale_4 extends Handle_StepVisual_CameraImage3dWithScale {
    constructor(theHandle: Handle_StepVisual_CameraImage3dWithScale);
  }

export declare class Handle_StepVisual_CameraModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraModel): void;
  get(): StepVisual_CameraModel;
}

  export declare class Handle_StepVisual_CameraModel_1 extends Handle_StepVisual_CameraModel {
    constructor();
  }

  export declare class Handle_StepVisual_CameraModel_2 extends Handle_StepVisual_CameraModel {
    constructor(thePtr: StepVisual_CameraModel);
  }

  export declare class Handle_StepVisual_CameraModel_3 extends Handle_StepVisual_CameraModel {
    constructor(theHandle: Handle_StepVisual_CameraModel);
  }

  export declare class Handle_StepVisual_CameraModel_4 extends Handle_StepVisual_CameraModel {
    constructor(theHandle: Handle_StepVisual_CameraModel);
  }

export declare class Handle_StepVisual_CameraModelD2 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraModelD2): void;
  get(): StepVisual_CameraModelD2;
}

  export declare class Handle_StepVisual_CameraModelD2_1 extends Handle_StepVisual_CameraModelD2 {
    constructor();
  }

  export declare class Handle_StepVisual_CameraModelD2_2 extends Handle_StepVisual_CameraModelD2 {
    constructor(thePtr: StepVisual_CameraModelD2);
  }

  export declare class Handle_StepVisual_CameraModelD2_3 extends Handle_StepVisual_CameraModelD2 {
    constructor(theHandle: Handle_StepVisual_CameraModelD2);
  }

  export declare class Handle_StepVisual_CameraModelD2_4 extends Handle_StepVisual_CameraModelD2 {
    constructor(theHandle: Handle_StepVisual_CameraModelD2);
  }

export declare class Handle_StepVisual_CameraModelD3 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraModelD3): void;
  get(): StepVisual_CameraModelD3;
}

  export declare class Handle_StepVisual_CameraModelD3_1 extends Handle_StepVisual_CameraModelD3 {
    constructor();
  }

  export declare class Handle_StepVisual_CameraModelD3_2 extends Handle_StepVisual_CameraModelD3 {
    constructor(thePtr: StepVisual_CameraModelD3);
  }

  export declare class Handle_StepVisual_CameraModelD3_3 extends Handle_StepVisual_CameraModelD3 {
    constructor(theHandle: Handle_StepVisual_CameraModelD3);
  }

  export declare class Handle_StepVisual_CameraModelD3_4 extends Handle_StepVisual_CameraModelD3 {
    constructor(theHandle: Handle_StepVisual_CameraModelD3);
  }

export declare class Handle_StepVisual_CameraModelD3MultiClipping {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraModelD3MultiClipping): void;
  get(): StepVisual_CameraModelD3MultiClipping;
}

  export declare class Handle_StepVisual_CameraModelD3MultiClipping_1 extends Handle_StepVisual_CameraModelD3MultiClipping {
    constructor();
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClipping_2 extends Handle_StepVisual_CameraModelD3MultiClipping {
    constructor(thePtr: StepVisual_CameraModelD3MultiClipping);
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClipping_3 extends Handle_StepVisual_CameraModelD3MultiClipping {
    constructor(theHandle: Handle_StepVisual_CameraModelD3MultiClipping);
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClipping_4 extends Handle_StepVisual_CameraModelD3MultiClipping {
    constructor(theHandle: Handle_StepVisual_CameraModelD3MultiClipping);
  }

export declare class Handle_StepVisual_CameraModelD3MultiClippingIntersection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraModelD3MultiClippingIntersection): void;
  get(): StepVisual_CameraModelD3MultiClippingIntersection;
}

  export declare class Handle_StepVisual_CameraModelD3MultiClippingIntersection_1 extends Handle_StepVisual_CameraModelD3MultiClippingIntersection {
    constructor();
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClippingIntersection_2 extends Handle_StepVisual_CameraModelD3MultiClippingIntersection {
    constructor(thePtr: StepVisual_CameraModelD3MultiClippingIntersection);
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClippingIntersection_3 extends Handle_StepVisual_CameraModelD3MultiClippingIntersection {
    constructor(theHandle: Handle_StepVisual_CameraModelD3MultiClippingIntersection);
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClippingIntersection_4 extends Handle_StepVisual_CameraModelD3MultiClippingIntersection {
    constructor(theHandle: Handle_StepVisual_CameraModelD3MultiClippingIntersection);
  }

export declare class Handle_StepVisual_CameraModelD3MultiClippingUnion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraModelD3MultiClippingUnion): void;
  get(): StepVisual_CameraModelD3MultiClippingUnion;
}

  export declare class Handle_StepVisual_CameraModelD3MultiClippingUnion_1 extends Handle_StepVisual_CameraModelD3MultiClippingUnion {
    constructor();
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClippingUnion_2 extends Handle_StepVisual_CameraModelD3MultiClippingUnion {
    constructor(thePtr: StepVisual_CameraModelD3MultiClippingUnion);
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClippingUnion_3 extends Handle_StepVisual_CameraModelD3MultiClippingUnion {
    constructor(theHandle: Handle_StepVisual_CameraModelD3MultiClippingUnion);
  }

  export declare class Handle_StepVisual_CameraModelD3MultiClippingUnion_4 extends Handle_StepVisual_CameraModelD3MultiClippingUnion {
    constructor(theHandle: Handle_StepVisual_CameraModelD3MultiClippingUnion);
  }

export declare class Handle_StepVisual_CameraUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CameraUsage): void;
  get(): StepVisual_CameraUsage;
}

  export declare class Handle_StepVisual_CameraUsage_1 extends Handle_StepVisual_CameraUsage {
    constructor();
  }

  export declare class Handle_StepVisual_CameraUsage_2 extends Handle_StepVisual_CameraUsage {
    constructor(thePtr: StepVisual_CameraUsage);
  }

  export declare class Handle_StepVisual_CameraUsage_3 extends Handle_StepVisual_CameraUsage {
    constructor(theHandle: Handle_StepVisual_CameraUsage);
  }

  export declare class Handle_StepVisual_CameraUsage_4 extends Handle_StepVisual_CameraUsage {
    constructor(theHandle: Handle_StepVisual_CameraUsage);
  }

export declare class Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel): void;
  get(): StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel;
}

  export declare class Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_1 extends Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel {
    constructor();
  }

  export declare class Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_2 extends Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel {
    constructor(thePtr: StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel);
  }

  export declare class Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_3 extends Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel {
    constructor(theHandle: Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel);
  }

  export declare class Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_4 extends Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel {
    constructor(theHandle: Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel);
  }

export declare class Handle_StepVisual_ColourSpecification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_ColourSpecification): void;
  get(): StepVisual_ColourSpecification;
}

  export declare class Handle_StepVisual_ColourSpecification_1 extends Handle_StepVisual_ColourSpecification {
    constructor();
  }

  export declare class Handle_StepVisual_ColourSpecification_2 extends Handle_StepVisual_ColourSpecification {
    constructor(thePtr: StepVisual_ColourSpecification);
  }

  export declare class Handle_StepVisual_ColourSpecification_3 extends Handle_StepVisual_ColourSpecification {
    constructor(theHandle: Handle_StepVisual_ColourSpecification);
  }

  export declare class Handle_StepVisual_ColourSpecification_4 extends Handle_StepVisual_ColourSpecification {
    constructor(theHandle: Handle_StepVisual_ColourSpecification);
  }

export declare class Handle_StepVisual_ColourRgb {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_ColourRgb): void;
  get(): StepVisual_ColourRgb;
}

  export declare class Handle_StepVisual_ColourRgb_1 extends Handle_StepVisual_ColourRgb {
    constructor();
  }

  export declare class Handle_StepVisual_ColourRgb_2 extends Handle_StepVisual_ColourRgb {
    constructor(thePtr: StepVisual_ColourRgb);
  }

  export declare class Handle_StepVisual_ColourRgb_3 extends Handle_StepVisual_ColourRgb {
    constructor(theHandle: Handle_StepVisual_ColourRgb);
  }

  export declare class Handle_StepVisual_ColourRgb_4 extends Handle_StepVisual_ColourRgb {
    constructor(theHandle: Handle_StepVisual_ColourRgb);
  }

export declare class Handle_StepVisual_HArray1OfTextOrCharacter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfTextOrCharacter): void;
  get(): StepVisual_HArray1OfTextOrCharacter;
}

  export declare class Handle_StepVisual_HArray1OfTextOrCharacter_1 extends Handle_StepVisual_HArray1OfTextOrCharacter {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfTextOrCharacter_2 extends Handle_StepVisual_HArray1OfTextOrCharacter {
    constructor(thePtr: StepVisual_HArray1OfTextOrCharacter);
  }

  export declare class Handle_StepVisual_HArray1OfTextOrCharacter_3 extends Handle_StepVisual_HArray1OfTextOrCharacter {
    constructor(theHandle: Handle_StepVisual_HArray1OfTextOrCharacter);
  }

  export declare class Handle_StepVisual_HArray1OfTextOrCharacter_4 extends Handle_StepVisual_HArray1OfTextOrCharacter {
    constructor(theHandle: Handle_StepVisual_HArray1OfTextOrCharacter);
  }

export declare class Handle_StepVisual_CompositeText {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CompositeText): void;
  get(): StepVisual_CompositeText;
}

  export declare class Handle_StepVisual_CompositeText_1 extends Handle_StepVisual_CompositeText {
    constructor();
  }

  export declare class Handle_StepVisual_CompositeText_2 extends Handle_StepVisual_CompositeText {
    constructor(thePtr: StepVisual_CompositeText);
  }

  export declare class Handle_StepVisual_CompositeText_3 extends Handle_StepVisual_CompositeText {
    constructor(theHandle: Handle_StepVisual_CompositeText);
  }

  export declare class Handle_StepVisual_CompositeText_4 extends Handle_StepVisual_CompositeText {
    constructor(theHandle: Handle_StepVisual_CompositeText);
  }

export declare class Handle_StepVisual_CompositeTextWithExtent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CompositeTextWithExtent): void;
  get(): StepVisual_CompositeTextWithExtent;
}

  export declare class Handle_StepVisual_CompositeTextWithExtent_1 extends Handle_StepVisual_CompositeTextWithExtent {
    constructor();
  }

  export declare class Handle_StepVisual_CompositeTextWithExtent_2 extends Handle_StepVisual_CompositeTextWithExtent {
    constructor(thePtr: StepVisual_CompositeTextWithExtent);
  }

  export declare class Handle_StepVisual_CompositeTextWithExtent_3 extends Handle_StepVisual_CompositeTextWithExtent {
    constructor(theHandle: Handle_StepVisual_CompositeTextWithExtent);
  }

  export declare class Handle_StepVisual_CompositeTextWithExtent_4 extends Handle_StepVisual_CompositeTextWithExtent {
    constructor(theHandle: Handle_StepVisual_CompositeTextWithExtent);
  }

export declare class Handle_StepVisual_HArray1OfInvisibleItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfInvisibleItem): void;
  get(): StepVisual_HArray1OfInvisibleItem;
}

  export declare class Handle_StepVisual_HArray1OfInvisibleItem_1 extends Handle_StepVisual_HArray1OfInvisibleItem {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfInvisibleItem_2 extends Handle_StepVisual_HArray1OfInvisibleItem {
    constructor(thePtr: StepVisual_HArray1OfInvisibleItem);
  }

  export declare class Handle_StepVisual_HArray1OfInvisibleItem_3 extends Handle_StepVisual_HArray1OfInvisibleItem {
    constructor(theHandle: Handle_StepVisual_HArray1OfInvisibleItem);
  }

  export declare class Handle_StepVisual_HArray1OfInvisibleItem_4 extends Handle_StepVisual_HArray1OfInvisibleItem {
    constructor(theHandle: Handle_StepVisual_HArray1OfInvisibleItem);
  }

export declare class Handle_StepVisual_Invisibility {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_Invisibility): void;
  get(): StepVisual_Invisibility;
}

  export declare class Handle_StepVisual_Invisibility_1 extends Handle_StepVisual_Invisibility {
    constructor();
  }

  export declare class Handle_StepVisual_Invisibility_2 extends Handle_StepVisual_Invisibility {
    constructor(thePtr: StepVisual_Invisibility);
  }

  export declare class Handle_StepVisual_Invisibility_3 extends Handle_StepVisual_Invisibility {
    constructor(theHandle: Handle_StepVisual_Invisibility);
  }

  export declare class Handle_StepVisual_Invisibility_4 extends Handle_StepVisual_Invisibility {
    constructor(theHandle: Handle_StepVisual_Invisibility);
  }

export declare class Handle_StepVisual_ContextDependentInvisibility {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_ContextDependentInvisibility): void;
  get(): StepVisual_ContextDependentInvisibility;
}

  export declare class Handle_StepVisual_ContextDependentInvisibility_1 extends Handle_StepVisual_ContextDependentInvisibility {
    constructor();
  }

  export declare class Handle_StepVisual_ContextDependentInvisibility_2 extends Handle_StepVisual_ContextDependentInvisibility {
    constructor(thePtr: StepVisual_ContextDependentInvisibility);
  }

  export declare class Handle_StepVisual_ContextDependentInvisibility_3 extends Handle_StepVisual_ContextDependentInvisibility {
    constructor(theHandle: Handle_StepVisual_ContextDependentInvisibility);
  }

  export declare class Handle_StepVisual_ContextDependentInvisibility_4 extends Handle_StepVisual_ContextDependentInvisibility {
    constructor(theHandle: Handle_StepVisual_ContextDependentInvisibility);
  }

export declare class Handle_StepVisual_HArray1OfStyleContextSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfStyleContextSelect): void;
  get(): StepVisual_HArray1OfStyleContextSelect;
}

  export declare class Handle_StepVisual_HArray1OfStyleContextSelect_1 extends Handle_StepVisual_HArray1OfStyleContextSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfStyleContextSelect_2 extends Handle_StepVisual_HArray1OfStyleContextSelect {
    constructor(thePtr: StepVisual_HArray1OfStyleContextSelect);
  }

  export declare class Handle_StepVisual_HArray1OfStyleContextSelect_3 extends Handle_StepVisual_HArray1OfStyleContextSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfStyleContextSelect);
  }

  export declare class Handle_StepVisual_HArray1OfStyleContextSelect_4 extends Handle_StepVisual_HArray1OfStyleContextSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfStyleContextSelect);
  }

export declare class Handle_StepVisual_OverRidingStyledItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_OverRidingStyledItem): void;
  get(): StepVisual_OverRidingStyledItem;
}

  export declare class Handle_StepVisual_OverRidingStyledItem_1 extends Handle_StepVisual_OverRidingStyledItem {
    constructor();
  }

  export declare class Handle_StepVisual_OverRidingStyledItem_2 extends Handle_StepVisual_OverRidingStyledItem {
    constructor(thePtr: StepVisual_OverRidingStyledItem);
  }

  export declare class Handle_StepVisual_OverRidingStyledItem_3 extends Handle_StepVisual_OverRidingStyledItem {
    constructor(theHandle: Handle_StepVisual_OverRidingStyledItem);
  }

  export declare class Handle_StepVisual_OverRidingStyledItem_4 extends Handle_StepVisual_OverRidingStyledItem {
    constructor(theHandle: Handle_StepVisual_OverRidingStyledItem);
  }

export declare class Handle_StepVisual_ContextDependentOverRidingStyledItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_ContextDependentOverRidingStyledItem): void;
  get(): StepVisual_ContextDependentOverRidingStyledItem;
}

  export declare class Handle_StepVisual_ContextDependentOverRidingStyledItem_1 extends Handle_StepVisual_ContextDependentOverRidingStyledItem {
    constructor();
  }

  export declare class Handle_StepVisual_ContextDependentOverRidingStyledItem_2 extends Handle_StepVisual_ContextDependentOverRidingStyledItem {
    constructor(thePtr: StepVisual_ContextDependentOverRidingStyledItem);
  }

  export declare class Handle_StepVisual_ContextDependentOverRidingStyledItem_3 extends Handle_StepVisual_ContextDependentOverRidingStyledItem {
    constructor(theHandle: Handle_StepVisual_ContextDependentOverRidingStyledItem);
  }

  export declare class Handle_StepVisual_ContextDependentOverRidingStyledItem_4 extends Handle_StepVisual_ContextDependentOverRidingStyledItem {
    constructor(theHandle: Handle_StepVisual_ContextDependentOverRidingStyledItem);
  }

export declare class Handle_StepVisual_CurveStyle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CurveStyle): void;
  get(): StepVisual_CurveStyle;
}

  export declare class Handle_StepVisual_CurveStyle_1 extends Handle_StepVisual_CurveStyle {
    constructor();
  }

  export declare class Handle_StepVisual_CurveStyle_2 extends Handle_StepVisual_CurveStyle {
    constructor(thePtr: StepVisual_CurveStyle);
  }

  export declare class Handle_StepVisual_CurveStyle_3 extends Handle_StepVisual_CurveStyle {
    constructor(theHandle: Handle_StepVisual_CurveStyle);
  }

  export declare class Handle_StepVisual_CurveStyle_4 extends Handle_StepVisual_CurveStyle {
    constructor(theHandle: Handle_StepVisual_CurveStyle);
  }

export declare class Handle_StepVisual_HArray1OfCurveStyleFontPattern {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfCurveStyleFontPattern): void;
  get(): StepVisual_HArray1OfCurveStyleFontPattern;
}

  export declare class Handle_StepVisual_HArray1OfCurveStyleFontPattern_1 extends Handle_StepVisual_HArray1OfCurveStyleFontPattern {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfCurveStyleFontPattern_2 extends Handle_StepVisual_HArray1OfCurveStyleFontPattern {
    constructor(thePtr: StepVisual_HArray1OfCurveStyleFontPattern);
  }

  export declare class Handle_StepVisual_HArray1OfCurveStyleFontPattern_3 extends Handle_StepVisual_HArray1OfCurveStyleFontPattern {
    constructor(theHandle: Handle_StepVisual_HArray1OfCurveStyleFontPattern);
  }

  export declare class Handle_StepVisual_HArray1OfCurveStyleFontPattern_4 extends Handle_StepVisual_HArray1OfCurveStyleFontPattern {
    constructor(theHandle: Handle_StepVisual_HArray1OfCurveStyleFontPattern);
  }

export declare class Handle_StepVisual_CurveStyleFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_CurveStyleFont): void;
  get(): StepVisual_CurveStyleFont;
}

  export declare class Handle_StepVisual_CurveStyleFont_1 extends Handle_StepVisual_CurveStyleFont {
    constructor();
  }

  export declare class Handle_StepVisual_CurveStyleFont_2 extends Handle_StepVisual_CurveStyleFont {
    constructor(thePtr: StepVisual_CurveStyleFont);
  }

  export declare class Handle_StepVisual_CurveStyleFont_3 extends Handle_StepVisual_CurveStyleFont {
    constructor(theHandle: Handle_StepVisual_CurveStyleFont);
  }

  export declare class Handle_StepVisual_CurveStyleFont_4 extends Handle_StepVisual_CurveStyleFont {
    constructor(theHandle: Handle_StepVisual_CurveStyleFont);
  }

export declare class Handle_StepVisual_DraughtingAnnotationOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_DraughtingAnnotationOccurrence): void;
  get(): StepVisual_DraughtingAnnotationOccurrence;
}

  export declare class Handle_StepVisual_DraughtingAnnotationOccurrence_1 extends Handle_StepVisual_DraughtingAnnotationOccurrence {
    constructor();
  }

  export declare class Handle_StepVisual_DraughtingAnnotationOccurrence_2 extends Handle_StepVisual_DraughtingAnnotationOccurrence {
    constructor(thePtr: StepVisual_DraughtingAnnotationOccurrence);
  }

  export declare class Handle_StepVisual_DraughtingAnnotationOccurrence_3 extends Handle_StepVisual_DraughtingAnnotationOccurrence {
    constructor(theHandle: Handle_StepVisual_DraughtingAnnotationOccurrence);
  }

  export declare class Handle_StepVisual_DraughtingAnnotationOccurrence_4 extends Handle_StepVisual_DraughtingAnnotationOccurrence {
    constructor(theHandle: Handle_StepVisual_DraughtingAnnotationOccurrence);
  }

export declare class Handle_StepVisual_HArray1OfDraughtingCalloutElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfDraughtingCalloutElement): void;
  get(): StepVisual_HArray1OfDraughtingCalloutElement;
}

  export declare class Handle_StepVisual_HArray1OfDraughtingCalloutElement_1 extends Handle_StepVisual_HArray1OfDraughtingCalloutElement {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfDraughtingCalloutElement_2 extends Handle_StepVisual_HArray1OfDraughtingCalloutElement {
    constructor(thePtr: StepVisual_HArray1OfDraughtingCalloutElement);
  }

  export declare class Handle_StepVisual_HArray1OfDraughtingCalloutElement_3 extends Handle_StepVisual_HArray1OfDraughtingCalloutElement {
    constructor(theHandle: Handle_StepVisual_HArray1OfDraughtingCalloutElement);
  }

  export declare class Handle_StepVisual_HArray1OfDraughtingCalloutElement_4 extends Handle_StepVisual_HArray1OfDraughtingCalloutElement {
    constructor(theHandle: Handle_StepVisual_HArray1OfDraughtingCalloutElement);
  }

export declare class Handle_StepVisual_DraughtingCallout {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_DraughtingCallout): void;
  get(): StepVisual_DraughtingCallout;
}

  export declare class Handle_StepVisual_DraughtingCallout_1 extends Handle_StepVisual_DraughtingCallout {
    constructor();
  }

  export declare class Handle_StepVisual_DraughtingCallout_2 extends Handle_StepVisual_DraughtingCallout {
    constructor(thePtr: StepVisual_DraughtingCallout);
  }

  export declare class Handle_StepVisual_DraughtingCallout_3 extends Handle_StepVisual_DraughtingCallout {
    constructor(theHandle: Handle_StepVisual_DraughtingCallout);
  }

  export declare class Handle_StepVisual_DraughtingCallout_4 extends Handle_StepVisual_DraughtingCallout {
    constructor(theHandle: Handle_StepVisual_DraughtingCallout);
  }

export declare class Handle_StepVisual_PreDefinedColour {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PreDefinedColour): void;
  get(): StepVisual_PreDefinedColour;
}

  export declare class Handle_StepVisual_PreDefinedColour_1 extends Handle_StepVisual_PreDefinedColour {
    constructor();
  }

  export declare class Handle_StepVisual_PreDefinedColour_2 extends Handle_StepVisual_PreDefinedColour {
    constructor(thePtr: StepVisual_PreDefinedColour);
  }

  export declare class Handle_StepVisual_PreDefinedColour_3 extends Handle_StepVisual_PreDefinedColour {
    constructor(theHandle: Handle_StepVisual_PreDefinedColour);
  }

  export declare class Handle_StepVisual_PreDefinedColour_4 extends Handle_StepVisual_PreDefinedColour {
    constructor(theHandle: Handle_StepVisual_PreDefinedColour);
  }

export declare class Handle_StepVisual_DraughtingPreDefinedColour {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_DraughtingPreDefinedColour): void;
  get(): StepVisual_DraughtingPreDefinedColour;
}

  export declare class Handle_StepVisual_DraughtingPreDefinedColour_1 extends Handle_StepVisual_DraughtingPreDefinedColour {
    constructor();
  }

  export declare class Handle_StepVisual_DraughtingPreDefinedColour_2 extends Handle_StepVisual_DraughtingPreDefinedColour {
    constructor(thePtr: StepVisual_DraughtingPreDefinedColour);
  }

  export declare class Handle_StepVisual_DraughtingPreDefinedColour_3 extends Handle_StepVisual_DraughtingPreDefinedColour {
    constructor(theHandle: Handle_StepVisual_DraughtingPreDefinedColour);
  }

  export declare class Handle_StepVisual_DraughtingPreDefinedColour_4 extends Handle_StepVisual_DraughtingPreDefinedColour {
    constructor(theHandle: Handle_StepVisual_DraughtingPreDefinedColour);
  }

export declare class Handle_StepVisual_PreDefinedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PreDefinedItem): void;
  get(): StepVisual_PreDefinedItem;
}

  export declare class Handle_StepVisual_PreDefinedItem_1 extends Handle_StepVisual_PreDefinedItem {
    constructor();
  }

  export declare class Handle_StepVisual_PreDefinedItem_2 extends Handle_StepVisual_PreDefinedItem {
    constructor(thePtr: StepVisual_PreDefinedItem);
  }

  export declare class Handle_StepVisual_PreDefinedItem_3 extends Handle_StepVisual_PreDefinedItem {
    constructor(theHandle: Handle_StepVisual_PreDefinedItem);
  }

  export declare class Handle_StepVisual_PreDefinedItem_4 extends Handle_StepVisual_PreDefinedItem {
    constructor(theHandle: Handle_StepVisual_PreDefinedItem);
  }

export declare class Handle_StepVisual_PreDefinedCurveFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PreDefinedCurveFont): void;
  get(): StepVisual_PreDefinedCurveFont;
}

  export declare class Handle_StepVisual_PreDefinedCurveFont_1 extends Handle_StepVisual_PreDefinedCurveFont {
    constructor();
  }

  export declare class Handle_StepVisual_PreDefinedCurveFont_2 extends Handle_StepVisual_PreDefinedCurveFont {
    constructor(thePtr: StepVisual_PreDefinedCurveFont);
  }

  export declare class Handle_StepVisual_PreDefinedCurveFont_3 extends Handle_StepVisual_PreDefinedCurveFont {
    constructor(theHandle: Handle_StepVisual_PreDefinedCurveFont);
  }

  export declare class Handle_StepVisual_PreDefinedCurveFont_4 extends Handle_StepVisual_PreDefinedCurveFont {
    constructor(theHandle: Handle_StepVisual_PreDefinedCurveFont);
  }

export declare class Handle_StepVisual_DraughtingPreDefinedCurveFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_DraughtingPreDefinedCurveFont): void;
  get(): StepVisual_DraughtingPreDefinedCurveFont;
}

  export declare class Handle_StepVisual_DraughtingPreDefinedCurveFont_1 extends Handle_StepVisual_DraughtingPreDefinedCurveFont {
    constructor();
  }

  export declare class Handle_StepVisual_DraughtingPreDefinedCurveFont_2 extends Handle_StepVisual_DraughtingPreDefinedCurveFont {
    constructor(thePtr: StepVisual_DraughtingPreDefinedCurveFont);
  }

  export declare class Handle_StepVisual_DraughtingPreDefinedCurveFont_3 extends Handle_StepVisual_DraughtingPreDefinedCurveFont {
    constructor(theHandle: Handle_StepVisual_DraughtingPreDefinedCurveFont);
  }

  export declare class Handle_StepVisual_DraughtingPreDefinedCurveFont_4 extends Handle_StepVisual_DraughtingPreDefinedCurveFont {
    constructor(theHandle: Handle_StepVisual_DraughtingPreDefinedCurveFont);
  }

export declare class Handle_StepVisual_ExternallyDefinedCurveFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_ExternallyDefinedCurveFont): void;
  get(): StepVisual_ExternallyDefinedCurveFont;
}

  export declare class Handle_StepVisual_ExternallyDefinedCurveFont_1 extends Handle_StepVisual_ExternallyDefinedCurveFont {
    constructor();
  }

  export declare class Handle_StepVisual_ExternallyDefinedCurveFont_2 extends Handle_StepVisual_ExternallyDefinedCurveFont {
    constructor(thePtr: StepVisual_ExternallyDefinedCurveFont);
  }

  export declare class Handle_StepVisual_ExternallyDefinedCurveFont_3 extends Handle_StepVisual_ExternallyDefinedCurveFont {
    constructor(theHandle: Handle_StepVisual_ExternallyDefinedCurveFont);
  }

  export declare class Handle_StepVisual_ExternallyDefinedCurveFont_4 extends Handle_StepVisual_ExternallyDefinedCurveFont {
    constructor(theHandle: Handle_StepVisual_ExternallyDefinedCurveFont);
  }

export declare class Handle_StepVisual_ExternallyDefinedTextFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_ExternallyDefinedTextFont): void;
  get(): StepVisual_ExternallyDefinedTextFont;
}

  export declare class Handle_StepVisual_ExternallyDefinedTextFont_1 extends Handle_StepVisual_ExternallyDefinedTextFont {
    constructor();
  }

  export declare class Handle_StepVisual_ExternallyDefinedTextFont_2 extends Handle_StepVisual_ExternallyDefinedTextFont {
    constructor(thePtr: StepVisual_ExternallyDefinedTextFont);
  }

  export declare class Handle_StepVisual_ExternallyDefinedTextFont_3 extends Handle_StepVisual_ExternallyDefinedTextFont {
    constructor(theHandle: Handle_StepVisual_ExternallyDefinedTextFont);
  }

  export declare class Handle_StepVisual_ExternallyDefinedTextFont_4 extends Handle_StepVisual_ExternallyDefinedTextFont {
    constructor(theHandle: Handle_StepVisual_ExternallyDefinedTextFont);
  }

export declare class Handle_StepVisual_HArray1OfFillStyleSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfFillStyleSelect): void;
  get(): StepVisual_HArray1OfFillStyleSelect;
}

  export declare class Handle_StepVisual_HArray1OfFillStyleSelect_1 extends Handle_StepVisual_HArray1OfFillStyleSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfFillStyleSelect_2 extends Handle_StepVisual_HArray1OfFillStyleSelect {
    constructor(thePtr: StepVisual_HArray1OfFillStyleSelect);
  }

  export declare class Handle_StepVisual_HArray1OfFillStyleSelect_3 extends Handle_StepVisual_HArray1OfFillStyleSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfFillStyleSelect);
  }

  export declare class Handle_StepVisual_HArray1OfFillStyleSelect_4 extends Handle_StepVisual_HArray1OfFillStyleSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfFillStyleSelect);
  }

export declare class Handle_StepVisual_FillAreaStyle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_FillAreaStyle): void;
  get(): StepVisual_FillAreaStyle;
}

  export declare class Handle_StepVisual_FillAreaStyle_1 extends Handle_StepVisual_FillAreaStyle {
    constructor();
  }

  export declare class Handle_StepVisual_FillAreaStyle_2 extends Handle_StepVisual_FillAreaStyle {
    constructor(thePtr: StepVisual_FillAreaStyle);
  }

  export declare class Handle_StepVisual_FillAreaStyle_3 extends Handle_StepVisual_FillAreaStyle {
    constructor(theHandle: Handle_StepVisual_FillAreaStyle);
  }

  export declare class Handle_StepVisual_FillAreaStyle_4 extends Handle_StepVisual_FillAreaStyle {
    constructor(theHandle: Handle_StepVisual_FillAreaStyle);
  }

export declare class Handle_StepVisual_FillAreaStyleColour {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_FillAreaStyleColour): void;
  get(): StepVisual_FillAreaStyleColour;
}

  export declare class Handle_StepVisual_FillAreaStyleColour_1 extends Handle_StepVisual_FillAreaStyleColour {
    constructor();
  }

  export declare class Handle_StepVisual_FillAreaStyleColour_2 extends Handle_StepVisual_FillAreaStyleColour {
    constructor(thePtr: StepVisual_FillAreaStyleColour);
  }

  export declare class Handle_StepVisual_FillAreaStyleColour_3 extends Handle_StepVisual_FillAreaStyleColour {
    constructor(theHandle: Handle_StepVisual_FillAreaStyleColour);
  }

  export declare class Handle_StepVisual_FillAreaStyleColour_4 extends Handle_StepVisual_FillAreaStyleColour {
    constructor(theHandle: Handle_StepVisual_FillAreaStyleColour);
  }

export declare class Handle_StepVisual_HArray1OfBoxCharacteristicSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfBoxCharacteristicSelect): void;
  get(): StepVisual_HArray1OfBoxCharacteristicSelect;
}

  export declare class Handle_StepVisual_HArray1OfBoxCharacteristicSelect_1 extends Handle_StepVisual_HArray1OfBoxCharacteristicSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfBoxCharacteristicSelect_2 extends Handle_StepVisual_HArray1OfBoxCharacteristicSelect {
    constructor(thePtr: StepVisual_HArray1OfBoxCharacteristicSelect);
  }

  export declare class Handle_StepVisual_HArray1OfBoxCharacteristicSelect_3 extends Handle_StepVisual_HArray1OfBoxCharacteristicSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfBoxCharacteristicSelect);
  }

  export declare class Handle_StepVisual_HArray1OfBoxCharacteristicSelect_4 extends Handle_StepVisual_HArray1OfBoxCharacteristicSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfBoxCharacteristicSelect);
  }

export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect): void;
  get(): StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect;
}

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_1 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_2 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect {
    constructor(thePtr: StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect);
  }

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_3 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect);
  }

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_4 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect);
  }

export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect): void;
  get(): StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect;
}

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_1 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_2 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect {
    constructor(thePtr: StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect);
  }

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_3 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect);
  }

  export declare class Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_4 extends Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect);
  }

export declare class Handle_StepVisual_HArray1OfDirectionCountSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfDirectionCountSelect): void;
  get(): StepVisual_HArray1OfDirectionCountSelect;
}

  export declare class Handle_StepVisual_HArray1OfDirectionCountSelect_1 extends Handle_StepVisual_HArray1OfDirectionCountSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfDirectionCountSelect_2 extends Handle_StepVisual_HArray1OfDirectionCountSelect {
    constructor(thePtr: StepVisual_HArray1OfDirectionCountSelect);
  }

  export declare class Handle_StepVisual_HArray1OfDirectionCountSelect_3 extends Handle_StepVisual_HArray1OfDirectionCountSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfDirectionCountSelect);
  }

  export declare class Handle_StepVisual_HArray1OfDirectionCountSelect_4 extends Handle_StepVisual_HArray1OfDirectionCountSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfDirectionCountSelect);
  }

export declare class Handle_StepVisual_HArray1OfLayeredItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfLayeredItem): void;
  get(): StepVisual_HArray1OfLayeredItem;
}

  export declare class Handle_StepVisual_HArray1OfLayeredItem_1 extends Handle_StepVisual_HArray1OfLayeredItem {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfLayeredItem_2 extends Handle_StepVisual_HArray1OfLayeredItem {
    constructor(thePtr: StepVisual_HArray1OfLayeredItem);
  }

  export declare class Handle_StepVisual_HArray1OfLayeredItem_3 extends Handle_StepVisual_HArray1OfLayeredItem {
    constructor(theHandle: Handle_StepVisual_HArray1OfLayeredItem);
  }

  export declare class Handle_StepVisual_HArray1OfLayeredItem_4 extends Handle_StepVisual_HArray1OfLayeredItem {
    constructor(theHandle: Handle_StepVisual_HArray1OfLayeredItem);
  }

export declare class Handle_StepVisual_HArray1OfRenderingPropertiesSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfRenderingPropertiesSelect): void;
  get(): StepVisual_HArray1OfRenderingPropertiesSelect;
}

  export declare class Handle_StepVisual_HArray1OfRenderingPropertiesSelect_1 extends Handle_StepVisual_HArray1OfRenderingPropertiesSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfRenderingPropertiesSelect_2 extends Handle_StepVisual_HArray1OfRenderingPropertiesSelect {
    constructor(thePtr: StepVisual_HArray1OfRenderingPropertiesSelect);
  }

  export declare class Handle_StepVisual_HArray1OfRenderingPropertiesSelect_3 extends Handle_StepVisual_HArray1OfRenderingPropertiesSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfRenderingPropertiesSelect);
  }

  export declare class Handle_StepVisual_HArray1OfRenderingPropertiesSelect_4 extends Handle_StepVisual_HArray1OfRenderingPropertiesSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfRenderingPropertiesSelect);
  }

export declare class Handle_StepVisual_HArray1OfSurfaceStyleElementSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_HArray1OfSurfaceStyleElementSelect): void;
  get(): StepVisual_HArray1OfSurfaceStyleElementSelect;
}

  export declare class Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_1 extends Handle_StepVisual_HArray1OfSurfaceStyleElementSelect {
    constructor();
  }

  export declare class Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_2 extends Handle_StepVisual_HArray1OfSurfaceStyleElementSelect {
    constructor(thePtr: StepVisual_HArray1OfSurfaceStyleElementSelect);
  }

  export declare class Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_3 extends Handle_StepVisual_HArray1OfSurfaceStyleElementSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfSurfaceStyleElementSelect);
  }

  export declare class Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_4 extends Handle_StepVisual_HArray1OfSurfaceStyleElementSelect {
    constructor(theHandle: Handle_StepVisual_HArray1OfSurfaceStyleElementSelect);
  }

export declare class Handle_StepVisual_MarkerMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_MarkerMember): void;
  get(): StepVisual_MarkerMember;
}

  export declare class Handle_StepVisual_MarkerMember_1 extends Handle_StepVisual_MarkerMember {
    constructor();
  }

  export declare class Handle_StepVisual_MarkerMember_2 extends Handle_StepVisual_MarkerMember {
    constructor(thePtr: StepVisual_MarkerMember);
  }

  export declare class Handle_StepVisual_MarkerMember_3 extends Handle_StepVisual_MarkerMember {
    constructor(theHandle: Handle_StepVisual_MarkerMember);
  }

  export declare class Handle_StepVisual_MarkerMember_4 extends Handle_StepVisual_MarkerMember {
    constructor(theHandle: Handle_StepVisual_MarkerMember);
  }

export declare class Handle_StepVisual_PresentationRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationRepresentation): void;
  get(): StepVisual_PresentationRepresentation;
}

  export declare class Handle_StepVisual_PresentationRepresentation_1 extends Handle_StepVisual_PresentationRepresentation {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationRepresentation_2 extends Handle_StepVisual_PresentationRepresentation {
    constructor(thePtr: StepVisual_PresentationRepresentation);
  }

  export declare class Handle_StepVisual_PresentationRepresentation_3 extends Handle_StepVisual_PresentationRepresentation {
    constructor(theHandle: Handle_StepVisual_PresentationRepresentation);
  }

  export declare class Handle_StepVisual_PresentationRepresentation_4 extends Handle_StepVisual_PresentationRepresentation {
    constructor(theHandle: Handle_StepVisual_PresentationRepresentation);
  }

export declare class Handle_StepVisual_PresentationArea {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationArea): void;
  get(): StepVisual_PresentationArea;
}

  export declare class Handle_StepVisual_PresentationArea_1 extends Handle_StepVisual_PresentationArea {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationArea_2 extends Handle_StepVisual_PresentationArea {
    constructor(thePtr: StepVisual_PresentationArea);
  }

  export declare class Handle_StepVisual_PresentationArea_3 extends Handle_StepVisual_PresentationArea {
    constructor(theHandle: Handle_StepVisual_PresentationArea);
  }

  export declare class Handle_StepVisual_PresentationArea_4 extends Handle_StepVisual_PresentationArea {
    constructor(theHandle: Handle_StepVisual_PresentationArea);
  }

export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationArea {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_MechanicalDesignGeometricPresentationArea): void;
  get(): StepVisual_MechanicalDesignGeometricPresentationArea;
}

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationArea_1 extends Handle_StepVisual_MechanicalDesignGeometricPresentationArea {
    constructor();
  }

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationArea_2 extends Handle_StepVisual_MechanicalDesignGeometricPresentationArea {
    constructor(thePtr: StepVisual_MechanicalDesignGeometricPresentationArea);
  }

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationArea_3 extends Handle_StepVisual_MechanicalDesignGeometricPresentationArea {
    constructor(theHandle: Handle_StepVisual_MechanicalDesignGeometricPresentationArea);
  }

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationArea_4 extends Handle_StepVisual_MechanicalDesignGeometricPresentationArea {
    constructor(theHandle: Handle_StepVisual_MechanicalDesignGeometricPresentationArea);
  }

export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_MechanicalDesignGeometricPresentationRepresentation): void;
  get(): StepVisual_MechanicalDesignGeometricPresentationRepresentation;
}

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_1 extends Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation {
    constructor();
  }

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_2 extends Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation {
    constructor(thePtr: StepVisual_MechanicalDesignGeometricPresentationRepresentation);
  }

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_3 extends Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation {
    constructor(theHandle: Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation);
  }

  export declare class Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_4 extends Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation {
    constructor(theHandle: Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation);
  }

export declare class Handle_StepVisual_NullStyleMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_NullStyleMember): void;
  get(): StepVisual_NullStyleMember;
}

  export declare class Handle_StepVisual_NullStyleMember_1 extends Handle_StepVisual_NullStyleMember {
    constructor();
  }

  export declare class Handle_StepVisual_NullStyleMember_2 extends Handle_StepVisual_NullStyleMember {
    constructor(thePtr: StepVisual_NullStyleMember);
  }

  export declare class Handle_StepVisual_NullStyleMember_3 extends Handle_StepVisual_NullStyleMember {
    constructor(theHandle: Handle_StepVisual_NullStyleMember);
  }

  export declare class Handle_StepVisual_NullStyleMember_4 extends Handle_StepVisual_NullStyleMember {
    constructor(theHandle: Handle_StepVisual_NullStyleMember);
  }

export declare class Handle_StepVisual_PlanarExtent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PlanarExtent): void;
  get(): StepVisual_PlanarExtent;
}

  export declare class Handle_StepVisual_PlanarExtent_1 extends Handle_StepVisual_PlanarExtent {
    constructor();
  }

  export declare class Handle_StepVisual_PlanarExtent_2 extends Handle_StepVisual_PlanarExtent {
    constructor(thePtr: StepVisual_PlanarExtent);
  }

  export declare class Handle_StepVisual_PlanarExtent_3 extends Handle_StepVisual_PlanarExtent {
    constructor(theHandle: Handle_StepVisual_PlanarExtent);
  }

  export declare class Handle_StepVisual_PlanarExtent_4 extends Handle_StepVisual_PlanarExtent {
    constructor(theHandle: Handle_StepVisual_PlanarExtent);
  }

export declare class Handle_StepVisual_PlanarBox {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PlanarBox): void;
  get(): StepVisual_PlanarBox;
}

  export declare class Handle_StepVisual_PlanarBox_1 extends Handle_StepVisual_PlanarBox {
    constructor();
  }

  export declare class Handle_StepVisual_PlanarBox_2 extends Handle_StepVisual_PlanarBox {
    constructor(thePtr: StepVisual_PlanarBox);
  }

  export declare class Handle_StepVisual_PlanarBox_3 extends Handle_StepVisual_PlanarBox {
    constructor(theHandle: Handle_StepVisual_PlanarBox);
  }

  export declare class Handle_StepVisual_PlanarBox_4 extends Handle_StepVisual_PlanarBox {
    constructor(theHandle: Handle_StepVisual_PlanarBox);
  }

export declare class Handle_StepVisual_PointStyle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PointStyle): void;
  get(): StepVisual_PointStyle;
}

  export declare class Handle_StepVisual_PointStyle_1 extends Handle_StepVisual_PointStyle {
    constructor();
  }

  export declare class Handle_StepVisual_PointStyle_2 extends Handle_StepVisual_PointStyle {
    constructor(thePtr: StepVisual_PointStyle);
  }

  export declare class Handle_StepVisual_PointStyle_3 extends Handle_StepVisual_PointStyle {
    constructor(theHandle: Handle_StepVisual_PointStyle);
  }

  export declare class Handle_StepVisual_PointStyle_4 extends Handle_StepVisual_PointStyle {
    constructor(theHandle: Handle_StepVisual_PointStyle);
  }

export declare class Handle_StepVisual_PreDefinedTextFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PreDefinedTextFont): void;
  get(): StepVisual_PreDefinedTextFont;
}

  export declare class Handle_StepVisual_PreDefinedTextFont_1 extends Handle_StepVisual_PreDefinedTextFont {
    constructor();
  }

  export declare class Handle_StepVisual_PreDefinedTextFont_2 extends Handle_StepVisual_PreDefinedTextFont {
    constructor(thePtr: StepVisual_PreDefinedTextFont);
  }

  export declare class Handle_StepVisual_PreDefinedTextFont_3 extends Handle_StepVisual_PreDefinedTextFont {
    constructor(theHandle: Handle_StepVisual_PreDefinedTextFont);
  }

  export declare class Handle_StepVisual_PreDefinedTextFont_4 extends Handle_StepVisual_PreDefinedTextFont {
    constructor(theHandle: Handle_StepVisual_PreDefinedTextFont);
  }

export declare class Handle_StepVisual_PresentationLayerAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationLayerAssignment): void;
  get(): StepVisual_PresentationLayerAssignment;
}

  export declare class Handle_StepVisual_PresentationLayerAssignment_1 extends Handle_StepVisual_PresentationLayerAssignment {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationLayerAssignment_2 extends Handle_StepVisual_PresentationLayerAssignment {
    constructor(thePtr: StepVisual_PresentationLayerAssignment);
  }

  export declare class Handle_StepVisual_PresentationLayerAssignment_3 extends Handle_StepVisual_PresentationLayerAssignment {
    constructor(theHandle: Handle_StepVisual_PresentationLayerAssignment);
  }

  export declare class Handle_StepVisual_PresentationLayerAssignment_4 extends Handle_StepVisual_PresentationLayerAssignment {
    constructor(theHandle: Handle_StepVisual_PresentationLayerAssignment);
  }

export declare class Handle_StepVisual_PresentationLayerUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationLayerUsage): void;
  get(): StepVisual_PresentationLayerUsage;
}

  export declare class Handle_StepVisual_PresentationLayerUsage_1 extends Handle_StepVisual_PresentationLayerUsage {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationLayerUsage_2 extends Handle_StepVisual_PresentationLayerUsage {
    constructor(thePtr: StepVisual_PresentationLayerUsage);
  }

  export declare class Handle_StepVisual_PresentationLayerUsage_3 extends Handle_StepVisual_PresentationLayerUsage {
    constructor(theHandle: Handle_StepVisual_PresentationLayerUsage);
  }

  export declare class Handle_StepVisual_PresentationLayerUsage_4 extends Handle_StepVisual_PresentationLayerUsage {
    constructor(theHandle: Handle_StepVisual_PresentationLayerUsage);
  }

export declare class Handle_StepVisual_PresentationSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationSet): void;
  get(): StepVisual_PresentationSet;
}

  export declare class Handle_StepVisual_PresentationSet_1 extends Handle_StepVisual_PresentationSet {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationSet_2 extends Handle_StepVisual_PresentationSet {
    constructor(thePtr: StepVisual_PresentationSet);
  }

  export declare class Handle_StepVisual_PresentationSet_3 extends Handle_StepVisual_PresentationSet {
    constructor(theHandle: Handle_StepVisual_PresentationSet);
  }

  export declare class Handle_StepVisual_PresentationSet_4 extends Handle_StepVisual_PresentationSet {
    constructor(theHandle: Handle_StepVisual_PresentationSet);
  }

export declare class Handle_StepVisual_PresentationSize {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationSize): void;
  get(): StepVisual_PresentationSize;
}

  export declare class Handle_StepVisual_PresentationSize_1 extends Handle_StepVisual_PresentationSize {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationSize_2 extends Handle_StepVisual_PresentationSize {
    constructor(thePtr: StepVisual_PresentationSize);
  }

  export declare class Handle_StepVisual_PresentationSize_3 extends Handle_StepVisual_PresentationSize {
    constructor(theHandle: Handle_StepVisual_PresentationSize);
  }

  export declare class Handle_StepVisual_PresentationSize_4 extends Handle_StepVisual_PresentationSize {
    constructor(theHandle: Handle_StepVisual_PresentationSize);
  }

export declare class Handle_StepVisual_PresentationStyleByContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationStyleByContext): void;
  get(): StepVisual_PresentationStyleByContext;
}

  export declare class Handle_StepVisual_PresentationStyleByContext_1 extends Handle_StepVisual_PresentationStyleByContext {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationStyleByContext_2 extends Handle_StepVisual_PresentationStyleByContext {
    constructor(thePtr: StepVisual_PresentationStyleByContext);
  }

  export declare class Handle_StepVisual_PresentationStyleByContext_3 extends Handle_StepVisual_PresentationStyleByContext {
    constructor(theHandle: Handle_StepVisual_PresentationStyleByContext);
  }

  export declare class Handle_StepVisual_PresentationStyleByContext_4 extends Handle_StepVisual_PresentationStyleByContext {
    constructor(theHandle: Handle_StepVisual_PresentationStyleByContext);
  }

export declare class Handle_StepVisual_PresentationView {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentationView): void;
  get(): StepVisual_PresentationView;
}

  export declare class Handle_StepVisual_PresentationView_1 extends Handle_StepVisual_PresentationView {
    constructor();
  }

  export declare class Handle_StepVisual_PresentationView_2 extends Handle_StepVisual_PresentationView {
    constructor(thePtr: StepVisual_PresentationView);
  }

  export declare class Handle_StepVisual_PresentationView_3 extends Handle_StepVisual_PresentationView {
    constructor(theHandle: Handle_StepVisual_PresentationView);
  }

  export declare class Handle_StepVisual_PresentationView_4 extends Handle_StepVisual_PresentationView {
    constructor(theHandle: Handle_StepVisual_PresentationView);
  }

export declare class Handle_StepVisual_PresentedItemRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_PresentedItemRepresentation): void;
  get(): StepVisual_PresentedItemRepresentation;
}

  export declare class Handle_StepVisual_PresentedItemRepresentation_1 extends Handle_StepVisual_PresentedItemRepresentation {
    constructor();
  }

  export declare class Handle_StepVisual_PresentedItemRepresentation_2 extends Handle_StepVisual_PresentedItemRepresentation {
    constructor(thePtr: StepVisual_PresentedItemRepresentation);
  }

  export declare class Handle_StepVisual_PresentedItemRepresentation_3 extends Handle_StepVisual_PresentedItemRepresentation {
    constructor(theHandle: Handle_StepVisual_PresentedItemRepresentation);
  }

  export declare class Handle_StepVisual_PresentedItemRepresentation_4 extends Handle_StepVisual_PresentedItemRepresentation {
    constructor(theHandle: Handle_StepVisual_PresentedItemRepresentation);
  }

export declare class Handle_StepVisual_SurfaceSideStyle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceSideStyle): void;
  get(): StepVisual_SurfaceSideStyle;
}

  export declare class Handle_StepVisual_SurfaceSideStyle_1 extends Handle_StepVisual_SurfaceSideStyle {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceSideStyle_2 extends Handle_StepVisual_SurfaceSideStyle {
    constructor(thePtr: StepVisual_SurfaceSideStyle);
  }

  export declare class Handle_StepVisual_SurfaceSideStyle_3 extends Handle_StepVisual_SurfaceSideStyle {
    constructor(theHandle: Handle_StepVisual_SurfaceSideStyle);
  }

  export declare class Handle_StepVisual_SurfaceSideStyle_4 extends Handle_StepVisual_SurfaceSideStyle {
    constructor(theHandle: Handle_StepVisual_SurfaceSideStyle);
  }

export declare class Handle_StepVisual_SurfaceStyleBoundary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleBoundary): void;
  get(): StepVisual_SurfaceStyleBoundary;
}

  export declare class Handle_StepVisual_SurfaceStyleBoundary_1 extends Handle_StepVisual_SurfaceStyleBoundary {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleBoundary_2 extends Handle_StepVisual_SurfaceStyleBoundary {
    constructor(thePtr: StepVisual_SurfaceStyleBoundary);
  }

  export declare class Handle_StepVisual_SurfaceStyleBoundary_3 extends Handle_StepVisual_SurfaceStyleBoundary {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleBoundary);
  }

  export declare class Handle_StepVisual_SurfaceStyleBoundary_4 extends Handle_StepVisual_SurfaceStyleBoundary {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleBoundary);
  }

export declare class Handle_StepVisual_SurfaceStyleControlGrid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleControlGrid): void;
  get(): StepVisual_SurfaceStyleControlGrid;
}

  export declare class Handle_StepVisual_SurfaceStyleControlGrid_1 extends Handle_StepVisual_SurfaceStyleControlGrid {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleControlGrid_2 extends Handle_StepVisual_SurfaceStyleControlGrid {
    constructor(thePtr: StepVisual_SurfaceStyleControlGrid);
  }

  export declare class Handle_StepVisual_SurfaceStyleControlGrid_3 extends Handle_StepVisual_SurfaceStyleControlGrid {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleControlGrid);
  }

  export declare class Handle_StepVisual_SurfaceStyleControlGrid_4 extends Handle_StepVisual_SurfaceStyleControlGrid {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleControlGrid);
  }

export declare class Handle_StepVisual_SurfaceStyleFillArea {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleFillArea): void;
  get(): StepVisual_SurfaceStyleFillArea;
}

  export declare class Handle_StepVisual_SurfaceStyleFillArea_1 extends Handle_StepVisual_SurfaceStyleFillArea {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleFillArea_2 extends Handle_StepVisual_SurfaceStyleFillArea {
    constructor(thePtr: StepVisual_SurfaceStyleFillArea);
  }

  export declare class Handle_StepVisual_SurfaceStyleFillArea_3 extends Handle_StepVisual_SurfaceStyleFillArea {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleFillArea);
  }

  export declare class Handle_StepVisual_SurfaceStyleFillArea_4 extends Handle_StepVisual_SurfaceStyleFillArea {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleFillArea);
  }

export declare class Handle_StepVisual_SurfaceStyleParameterLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleParameterLine): void;
  get(): StepVisual_SurfaceStyleParameterLine;
}

  export declare class Handle_StepVisual_SurfaceStyleParameterLine_1 extends Handle_StepVisual_SurfaceStyleParameterLine {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleParameterLine_2 extends Handle_StepVisual_SurfaceStyleParameterLine {
    constructor(thePtr: StepVisual_SurfaceStyleParameterLine);
  }

  export declare class Handle_StepVisual_SurfaceStyleParameterLine_3 extends Handle_StepVisual_SurfaceStyleParameterLine {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleParameterLine);
  }

  export declare class Handle_StepVisual_SurfaceStyleParameterLine_4 extends Handle_StepVisual_SurfaceStyleParameterLine {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleParameterLine);
  }

export declare class Handle_StepVisual_SurfaceStyleReflectanceAmbient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleReflectanceAmbient): void;
  get(): StepVisual_SurfaceStyleReflectanceAmbient;
}

  export declare class Handle_StepVisual_SurfaceStyleReflectanceAmbient_1 extends Handle_StepVisual_SurfaceStyleReflectanceAmbient {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleReflectanceAmbient_2 extends Handle_StepVisual_SurfaceStyleReflectanceAmbient {
    constructor(thePtr: StepVisual_SurfaceStyleReflectanceAmbient);
  }

  export declare class Handle_StepVisual_SurfaceStyleReflectanceAmbient_3 extends Handle_StepVisual_SurfaceStyleReflectanceAmbient {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleReflectanceAmbient);
  }

  export declare class Handle_StepVisual_SurfaceStyleReflectanceAmbient_4 extends Handle_StepVisual_SurfaceStyleReflectanceAmbient {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleReflectanceAmbient);
  }

export declare class Handle_StepVisual_SurfaceStyleRendering {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleRendering): void;
  get(): StepVisual_SurfaceStyleRendering;
}

  export declare class Handle_StepVisual_SurfaceStyleRendering_1 extends Handle_StepVisual_SurfaceStyleRendering {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleRendering_2 extends Handle_StepVisual_SurfaceStyleRendering {
    constructor(thePtr: StepVisual_SurfaceStyleRendering);
  }

  export declare class Handle_StepVisual_SurfaceStyleRendering_3 extends Handle_StepVisual_SurfaceStyleRendering {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleRendering);
  }

  export declare class Handle_StepVisual_SurfaceStyleRendering_4 extends Handle_StepVisual_SurfaceStyleRendering {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleRendering);
  }

export declare class Handle_StepVisual_SurfaceStyleRenderingWithProperties {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleRenderingWithProperties): void;
  get(): StepVisual_SurfaceStyleRenderingWithProperties;
}

  export declare class Handle_StepVisual_SurfaceStyleRenderingWithProperties_1 extends Handle_StepVisual_SurfaceStyleRenderingWithProperties {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleRenderingWithProperties_2 extends Handle_StepVisual_SurfaceStyleRenderingWithProperties {
    constructor(thePtr: StepVisual_SurfaceStyleRenderingWithProperties);
  }

  export declare class Handle_StepVisual_SurfaceStyleRenderingWithProperties_3 extends Handle_StepVisual_SurfaceStyleRenderingWithProperties {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleRenderingWithProperties);
  }

  export declare class Handle_StepVisual_SurfaceStyleRenderingWithProperties_4 extends Handle_StepVisual_SurfaceStyleRenderingWithProperties {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleRenderingWithProperties);
  }

export declare class Handle_StepVisual_SurfaceStyleSegmentationCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleSegmentationCurve): void;
  get(): StepVisual_SurfaceStyleSegmentationCurve;
}

  export declare class Handle_StepVisual_SurfaceStyleSegmentationCurve_1 extends Handle_StepVisual_SurfaceStyleSegmentationCurve {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleSegmentationCurve_2 extends Handle_StepVisual_SurfaceStyleSegmentationCurve {
    constructor(thePtr: StepVisual_SurfaceStyleSegmentationCurve);
  }

  export declare class Handle_StepVisual_SurfaceStyleSegmentationCurve_3 extends Handle_StepVisual_SurfaceStyleSegmentationCurve {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleSegmentationCurve);
  }

  export declare class Handle_StepVisual_SurfaceStyleSegmentationCurve_4 extends Handle_StepVisual_SurfaceStyleSegmentationCurve {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleSegmentationCurve);
  }

export declare class Handle_StepVisual_SurfaceStyleSilhouette {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleSilhouette): void;
  get(): StepVisual_SurfaceStyleSilhouette;
}

  export declare class Handle_StepVisual_SurfaceStyleSilhouette_1 extends Handle_StepVisual_SurfaceStyleSilhouette {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleSilhouette_2 extends Handle_StepVisual_SurfaceStyleSilhouette {
    constructor(thePtr: StepVisual_SurfaceStyleSilhouette);
  }

  export declare class Handle_StepVisual_SurfaceStyleSilhouette_3 extends Handle_StepVisual_SurfaceStyleSilhouette {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleSilhouette);
  }

  export declare class Handle_StepVisual_SurfaceStyleSilhouette_4 extends Handle_StepVisual_SurfaceStyleSilhouette {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleSilhouette);
  }

export declare class Handle_StepVisual_SurfaceStyleTransparent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleTransparent): void;
  get(): StepVisual_SurfaceStyleTransparent;
}

  export declare class Handle_StepVisual_SurfaceStyleTransparent_1 extends Handle_StepVisual_SurfaceStyleTransparent {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleTransparent_2 extends Handle_StepVisual_SurfaceStyleTransparent {
    constructor(thePtr: StepVisual_SurfaceStyleTransparent);
  }

  export declare class Handle_StepVisual_SurfaceStyleTransparent_3 extends Handle_StepVisual_SurfaceStyleTransparent {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleTransparent);
  }

  export declare class Handle_StepVisual_SurfaceStyleTransparent_4 extends Handle_StepVisual_SurfaceStyleTransparent {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleTransparent);
  }

export declare class Handle_StepVisual_SurfaceStyleUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_SurfaceStyleUsage): void;
  get(): StepVisual_SurfaceStyleUsage;
}

  export declare class Handle_StepVisual_SurfaceStyleUsage_1 extends Handle_StepVisual_SurfaceStyleUsage {
    constructor();
  }

  export declare class Handle_StepVisual_SurfaceStyleUsage_2 extends Handle_StepVisual_SurfaceStyleUsage {
    constructor(thePtr: StepVisual_SurfaceStyleUsage);
  }

  export declare class Handle_StepVisual_SurfaceStyleUsage_3 extends Handle_StepVisual_SurfaceStyleUsage {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleUsage);
  }

  export declare class Handle_StepVisual_SurfaceStyleUsage_4 extends Handle_StepVisual_SurfaceStyleUsage {
    constructor(theHandle: Handle_StepVisual_SurfaceStyleUsage);
  }

export declare class Handle_StepVisual_Template {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_Template): void;
  get(): StepVisual_Template;
}

  export declare class Handle_StepVisual_Template_1 extends Handle_StepVisual_Template {
    constructor();
  }

  export declare class Handle_StepVisual_Template_2 extends Handle_StepVisual_Template {
    constructor(thePtr: StepVisual_Template);
  }

  export declare class Handle_StepVisual_Template_3 extends Handle_StepVisual_Template {
    constructor(theHandle: Handle_StepVisual_Template);
  }

  export declare class Handle_StepVisual_Template_4 extends Handle_StepVisual_Template {
    constructor(theHandle: Handle_StepVisual_Template);
  }

export declare class Handle_StepVisual_TemplateInstance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TemplateInstance): void;
  get(): StepVisual_TemplateInstance;
}

  export declare class Handle_StepVisual_TemplateInstance_1 extends Handle_StepVisual_TemplateInstance {
    constructor();
  }

  export declare class Handle_StepVisual_TemplateInstance_2 extends Handle_StepVisual_TemplateInstance {
    constructor(thePtr: StepVisual_TemplateInstance);
  }

  export declare class Handle_StepVisual_TemplateInstance_3 extends Handle_StepVisual_TemplateInstance {
    constructor(theHandle: Handle_StepVisual_TemplateInstance);
  }

  export declare class Handle_StepVisual_TemplateInstance_4 extends Handle_StepVisual_TemplateInstance {
    constructor(theHandle: Handle_StepVisual_TemplateInstance);
  }

export declare class Handle_StepVisual_TessellatedAnnotationOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TessellatedAnnotationOccurrence): void;
  get(): StepVisual_TessellatedAnnotationOccurrence;
}

  export declare class Handle_StepVisual_TessellatedAnnotationOccurrence_1 extends Handle_StepVisual_TessellatedAnnotationOccurrence {
    constructor();
  }

  export declare class Handle_StepVisual_TessellatedAnnotationOccurrence_2 extends Handle_StepVisual_TessellatedAnnotationOccurrence {
    constructor(thePtr: StepVisual_TessellatedAnnotationOccurrence);
  }

  export declare class Handle_StepVisual_TessellatedAnnotationOccurrence_3 extends Handle_StepVisual_TessellatedAnnotationOccurrence {
    constructor(theHandle: Handle_StepVisual_TessellatedAnnotationOccurrence);
  }

  export declare class Handle_StepVisual_TessellatedAnnotationOccurrence_4 extends Handle_StepVisual_TessellatedAnnotationOccurrence {
    constructor(theHandle: Handle_StepVisual_TessellatedAnnotationOccurrence);
  }

export declare class Handle_StepVisual_TextLiteral {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TextLiteral): void;
  get(): StepVisual_TextLiteral;
}

  export declare class Handle_StepVisual_TextLiteral_1 extends Handle_StepVisual_TextLiteral {
    constructor();
  }

  export declare class Handle_StepVisual_TextLiteral_2 extends Handle_StepVisual_TextLiteral {
    constructor(thePtr: StepVisual_TextLiteral);
  }

  export declare class Handle_StepVisual_TextLiteral_3 extends Handle_StepVisual_TextLiteral {
    constructor(theHandle: Handle_StepVisual_TextLiteral);
  }

  export declare class Handle_StepVisual_TextLiteral_4 extends Handle_StepVisual_TextLiteral {
    constructor(theHandle: Handle_StepVisual_TextLiteral);
  }

export declare class Handle_StepVisual_TextStyle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TextStyle): void;
  get(): StepVisual_TextStyle;
}

  export declare class Handle_StepVisual_TextStyle_1 extends Handle_StepVisual_TextStyle {
    constructor();
  }

  export declare class Handle_StepVisual_TextStyle_2 extends Handle_StepVisual_TextStyle {
    constructor(thePtr: StepVisual_TextStyle);
  }

  export declare class Handle_StepVisual_TextStyle_3 extends Handle_StepVisual_TextStyle {
    constructor(theHandle: Handle_StepVisual_TextStyle);
  }

  export declare class Handle_StepVisual_TextStyle_4 extends Handle_StepVisual_TextStyle {
    constructor(theHandle: Handle_StepVisual_TextStyle);
  }

export declare class Handle_StepVisual_TextStyleForDefinedFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TextStyleForDefinedFont): void;
  get(): StepVisual_TextStyleForDefinedFont;
}

  export declare class Handle_StepVisual_TextStyleForDefinedFont_1 extends Handle_StepVisual_TextStyleForDefinedFont {
    constructor();
  }

  export declare class Handle_StepVisual_TextStyleForDefinedFont_2 extends Handle_StepVisual_TextStyleForDefinedFont {
    constructor(thePtr: StepVisual_TextStyleForDefinedFont);
  }

  export declare class Handle_StepVisual_TextStyleForDefinedFont_3 extends Handle_StepVisual_TextStyleForDefinedFont {
    constructor(theHandle: Handle_StepVisual_TextStyleForDefinedFont);
  }

  export declare class Handle_StepVisual_TextStyleForDefinedFont_4 extends Handle_StepVisual_TextStyleForDefinedFont {
    constructor(theHandle: Handle_StepVisual_TextStyleForDefinedFont);
  }

export declare class Handle_StepVisual_TextStyleWithBoxCharacteristics {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_TextStyleWithBoxCharacteristics): void;
  get(): StepVisual_TextStyleWithBoxCharacteristics;
}

  export declare class Handle_StepVisual_TextStyleWithBoxCharacteristics_1 extends Handle_StepVisual_TextStyleWithBoxCharacteristics {
    constructor();
  }

  export declare class Handle_StepVisual_TextStyleWithBoxCharacteristics_2 extends Handle_StepVisual_TextStyleWithBoxCharacteristics {
    constructor(thePtr: StepVisual_TextStyleWithBoxCharacteristics);
  }

  export declare class Handle_StepVisual_TextStyleWithBoxCharacteristics_3 extends Handle_StepVisual_TextStyleWithBoxCharacteristics {
    constructor(theHandle: Handle_StepVisual_TextStyleWithBoxCharacteristics);
  }

  export declare class Handle_StepVisual_TextStyleWithBoxCharacteristics_4 extends Handle_StepVisual_TextStyleWithBoxCharacteristics {
    constructor(theHandle: Handle_StepVisual_TextStyleWithBoxCharacteristics);
  }

export declare class Handle_StepVisual_ViewVolume {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepVisual_ViewVolume): void;
  get(): StepVisual_ViewVolume;
}

  export declare class Handle_StepVisual_ViewVolume_1 extends Handle_StepVisual_ViewVolume {
    constructor();
  }

  export declare class Handle_StepVisual_ViewVolume_2 extends Handle_StepVisual_ViewVolume {
    constructor(thePtr: StepVisual_ViewVolume);
  }

  export declare class Handle_StepVisual_ViewVolume_3 extends Handle_StepVisual_ViewVolume {
    constructor(theHandle: Handle_StepVisual_ViewVolume);
  }

  export declare class Handle_StepVisual_ViewVolume_4 extends Handle_StepVisual_ViewVolume {
    constructor(theHandle: Handle_StepVisual_ViewVolume);
  }

export declare type StepDimTol_GeometricToleranceModifier = {
  StepDimTol_GTMAnyCrossSection: {};
  StepDimTol_GTMCommonZone: {};
  StepDimTol_GTMEachRadialElement: {};
  StepDimTol_GTMFreeState: {};
  StepDimTol_GTMLeastMaterialRequirement: {};
  StepDimTol_GTMLineElement: {};
  StepDimTol_GTMMajorDiameter: {};
  StepDimTol_GTMMaximumMaterialRequirement: {};
  StepDimTol_GTMMinorDiameter: {};
  StepDimTol_GTMNotConvex: {};
  StepDimTol_GTMPitchDiameter: {};
  StepDimTol_GTMReciprocityRequirement: {};
  StepDimTol_GTMSeparateRequirement: {};
  StepDimTol_GTMStatisticalTolerance: {};
  StepDimTol_GTMTangentPlane: {};
}

export declare type StepDimTol_GeometricToleranceType = {
  StepDimTol_GTTAngularityTolerance: {};
  StepDimTol_GTTCircularRunoutTolerance: {};
  StepDimTol_GTTCoaxialityTolerance: {};
  StepDimTol_GTTConcentricityTolerance: {};
  StepDimTol_GTTCylindricityTolerance: {};
  StepDimTol_GTTFlatnessTolerance: {};
  StepDimTol_GTTLineProfileTolerance: {};
  StepDimTol_GTTParallelismTolerance: {};
  StepDimTol_GTTPerpendicularityTolerance: {};
  StepDimTol_GTTPositionTolerance: {};
  StepDimTol_GTTRoundnessTolerance: {};
  StepDimTol_GTTStraightnessTolerance: {};
  StepDimTol_GTTSurfaceProfileTolerance: {};
  StepDimTol_GTTSymmetryTolerance: {};
  StepDimTol_GTTTotalRunoutTolerance: {};
}

export declare type StepDimTol_DatumReferenceModifierType = {
  StepDimTol_CircularOrCylindrical: {};
  StepDimTol_Distance: {};
  StepDimTol_Projected: {};
  StepDimTol_Spherical: {};
}

export declare type StepDimTol_SimpleDatumReferenceModifier = {
  StepDimTol_SDRMAnyCrossSection: {};
  StepDimTol_SDRMAnyLongitudinalSection: {};
  StepDimTol_SDRMBasic: {};
  StepDimTol_SDRMContactingFeature: {};
  StepDimTol_SDRMDegreeOfFreedomConstraintU: {};
  StepDimTol_SDRMDegreeOfFreedomConstraintV: {};
  StepDimTol_SDRMDegreeOfFreedomConstraintW: {};
  StepDimTol_SDRMDegreeOfFreedomConstraintX: {};
  StepDimTol_SDRMDegreeOfFreedomConstraintY: {};
  StepDimTol_SDRMDegreeOfFreedomConstraintZ: {};
  StepDimTol_SDRMDistanceVariable: {};
  StepDimTol_SDRMFreeState: {};
  StepDimTol_SDRMLeastMaterialRequirement: {};
  StepDimTol_SDRMLine: {};
  StepDimTol_SDRMMajorDiameter: {};
  StepDimTol_SDRMMaximumMaterialRequirement: {};
  StepDimTol_SDRMMinorDiameter: {};
  StepDimTol_SDRMOrientation: {};
  StepDimTol_SDRMPitchDiameter: {};
  StepDimTol_SDRMPlane: {};
  StepDimTol_SDRMPoint: {};
  StepDimTol_SDRMTranslation: {};
}

export declare type StepDimTol_AreaUnitType = {
  StepDimTol_Circular: {};
  StepDimTol_Rectangular: {};
  StepDimTol_Square: {};
}

export declare type StepDimTol_LimitCondition = {
  StepDimTol_MaximumMaterialCondition: {};
  StepDimTol_LeastMaterialCondition: {};
  StepDimTol_RegardlessOfFeatureSize: {};
}

export declare type StepVisual_CentralOrParallel = {
  StepVisual_copCentral: {};
  StepVisual_copParallel: {};
}

export declare type StepVisual_MarkerType = {
  StepVisual_mtDot: {};
  StepVisual_mtX: {};
  StepVisual_mtPlus: {};
  StepVisual_mtAsterisk: {};
  StepVisual_mtRing: {};
  StepVisual_mtSquare: {};
  StepVisual_mtTriangle: {};
}

export declare type StepVisual_NullStyle = {
  StepVisual_Null: {};
}

export declare type StepVisual_ShadingSurfaceMethod = {
  StepVisual_ssmConstantShading: {};
  StepVisual_ssmColourShading: {};
  StepVisual_ssmDotShading: {};
  StepVisual_ssmNormalShading: {};
}

export declare type StepVisual_SurfaceSide = {
  StepVisual_ssNegative: {};
  StepVisual_ssPositive: {};
  StepVisual_ssBoth: {};
}

export declare type StepVisual_TextPath = {
  StepVisual_tpUp: {};
  StepVisual_tpRight: {};
  StepVisual_tpDown: {};
  StepVisual_tpLeft: {};
}

export declare type TKSTEPAttrLib = {
  RWStepDimTol_RWAngularityTolerance: typeof RWStepDimTol_RWAngularityTolerance;
  RWStepDimTol_RWCircularRunoutTolerance: typeof RWStepDimTol_RWCircularRunoutTolerance;
  RWStepDimTol_RWCoaxialityTolerance: typeof RWStepDimTol_RWCoaxialityTolerance;
  RWStepDimTol_RWCommonDatum: typeof RWStepDimTol_RWCommonDatum;
  RWStepDimTol_RWConcentricityTolerance: typeof RWStepDimTol_RWConcentricityTolerance;
  RWStepDimTol_RWCylindricityTolerance: typeof RWStepDimTol_RWCylindricityTolerance;
  RWStepDimTol_RWDatum: typeof RWStepDimTol_RWDatum;
  RWStepDimTol_RWDatumFeature: typeof RWStepDimTol_RWDatumFeature;
  RWStepDimTol_RWDatumReference: typeof RWStepDimTol_RWDatumReference;
  RWStepDimTol_RWDatumReferenceCompartment: typeof RWStepDimTol_RWDatumReferenceCompartment;
  RWStepDimTol_RWDatumReferenceElement: typeof RWStepDimTol_RWDatumReferenceElement;
  RWStepDimTol_RWDatumReferenceModifierWithValue: typeof RWStepDimTol_RWDatumReferenceModifierWithValue;
  RWStepDimTol_RWDatumSystem: typeof RWStepDimTol_RWDatumSystem;
  RWStepDimTol_RWDatumTarget: typeof RWStepDimTol_RWDatumTarget;
  RWStepDimTol_RWFlatnessTolerance: typeof RWStepDimTol_RWFlatnessTolerance;
  RWStepDimTol_RWGeneralDatumReference: typeof RWStepDimTol_RWGeneralDatumReference;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRef: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRef;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMod: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMod;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndUneqDisGeoTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndUneqDisGeoTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthMaxTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthMaxTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthMod: typeof RWStepDimTol_RWGeoTolAndGeoTolWthMod;
  RWStepDimTol_RWGeometricTolerance: typeof RWStepDimTol_RWGeometricTolerance;
  RWStepDimTol_RWGeometricToleranceRelationship: typeof RWStepDimTol_RWGeometricToleranceRelationship;
  RWStepDimTol_RWGeometricToleranceWithDatumReference: typeof RWStepDimTol_RWGeometricToleranceWithDatumReference;
  RWStepDimTol_RWGeometricToleranceWithDefinedAreaUnit: typeof RWStepDimTol_RWGeometricToleranceWithDefinedAreaUnit;
  RWStepDimTol_RWGeometricToleranceWithDefinedUnit: typeof RWStepDimTol_RWGeometricToleranceWithDefinedUnit;
  RWStepDimTol_RWGeometricToleranceWithMaximumTolerance: typeof RWStepDimTol_RWGeometricToleranceWithMaximumTolerance;
  RWStepDimTol_RWGeometricToleranceWithModifiers: typeof RWStepDimTol_RWGeometricToleranceWithModifiers;
  RWStepDimTol_RWLineProfileTolerance: typeof RWStepDimTol_RWLineProfileTolerance;
  RWStepDimTol_RWModifiedGeometricTolerance: typeof RWStepDimTol_RWModifiedGeometricTolerance;
  RWStepDimTol_RWNonUniformZoneDefinition: typeof RWStepDimTol_RWNonUniformZoneDefinition;
  RWStepDimTol_RWParallelismTolerance: typeof RWStepDimTol_RWParallelismTolerance;
  RWStepDimTol_RWPerpendicularityTolerance: typeof RWStepDimTol_RWPerpendicularityTolerance;
  RWStepDimTol_RWPlacedDatumTargetFeature: typeof RWStepDimTol_RWPlacedDatumTargetFeature;
  RWStepDimTol_RWPositionTolerance: typeof RWStepDimTol_RWPositionTolerance;
  RWStepDimTol_RWProjectedZoneDefinition: typeof RWStepDimTol_RWProjectedZoneDefinition;
  RWStepDimTol_RWRoundnessTolerance: typeof RWStepDimTol_RWRoundnessTolerance;
  RWStepDimTol_RWRunoutZoneDefinition: typeof RWStepDimTol_RWRunoutZoneDefinition;
  RWStepDimTol_RWRunoutZoneOrientation: typeof RWStepDimTol_RWRunoutZoneOrientation;
  RWStepDimTol_RWStraightnessTolerance: typeof RWStepDimTol_RWStraightnessTolerance;
  RWStepDimTol_RWSurfaceProfileTolerance: typeof RWStepDimTol_RWSurfaceProfileTolerance;
  RWStepDimTol_RWSymmetryTolerance: typeof RWStepDimTol_RWSymmetryTolerance;
  RWStepDimTol_RWToleranceZone: typeof RWStepDimTol_RWToleranceZone;
  RWStepDimTol_RWToleranceZoneDefinition: typeof RWStepDimTol_RWToleranceZoneDefinition;
  RWStepDimTol_RWToleranceZoneForm: typeof RWStepDimTol_RWToleranceZoneForm;
  RWStepDimTol_RWTotalRunoutTolerance: typeof RWStepDimTol_RWTotalRunoutTolerance;
  RWStepDimTol_RWUnequallyDisposedGeometricTolerance: typeof RWStepDimTol_RWUnequallyDisposedGeometricTolerance;
  RWStepVisual_RWAnnotationCurveOccurrence: typeof RWStepVisual_RWAnnotationCurveOccurrence;
  RWStepVisual_RWAnnotationCurveOccurrenceAndGeomReprItem: typeof RWStepVisual_RWAnnotationCurveOccurrenceAndGeomReprItem;
  RWStepVisual_RWAnnotationFillArea: typeof RWStepVisual_RWAnnotationFillArea;
  RWStepVisual_RWAnnotationFillAreaOccurrence: typeof RWStepVisual_RWAnnotationFillAreaOccurrence;
  RWStepVisual_RWAnnotationOccurrence: typeof RWStepVisual_RWAnnotationOccurrence;
  RWStepVisual_RWAnnotationPlane: typeof RWStepVisual_RWAnnotationPlane;
  RWStepVisual_RWAreaInSet: typeof RWStepVisual_RWAreaInSet;
  RWStepVisual_RWBackgroundColour: typeof RWStepVisual_RWBackgroundColour;
  RWStepVisual_RWCameraImage: typeof RWStepVisual_RWCameraImage;
  RWStepVisual_RWCameraModel: typeof RWStepVisual_RWCameraModel;
  RWStepVisual_RWCameraModelD2: typeof RWStepVisual_RWCameraModelD2;
  RWStepVisual_RWCameraModelD3: typeof RWStepVisual_RWCameraModelD3;
  RWStepVisual_RWCameraModelD3MultiClipping: typeof RWStepVisual_RWCameraModelD3MultiClipping;
  RWStepVisual_RWCameraModelD3MultiClippingIntersection: typeof RWStepVisual_RWCameraModelD3MultiClippingIntersection;
  RWStepVisual_RWCameraModelD3MultiClippingUnion: typeof RWStepVisual_RWCameraModelD3MultiClippingUnion;
  RWStepVisual_RWCameraUsage: typeof RWStepVisual_RWCameraUsage;
  RWStepVisual_RWCharacterizedObjAndRepresentationAndDraughtingModel: typeof RWStepVisual_RWCharacterizedObjAndRepresentationAndDraughtingModel;
  RWStepVisual_RWColour: typeof RWStepVisual_RWColour;
  RWStepVisual_RWColourRgb: typeof RWStepVisual_RWColourRgb;
  RWStepVisual_RWColourSpecification: typeof RWStepVisual_RWColourSpecification;
  RWStepVisual_RWCompositeText: typeof RWStepVisual_RWCompositeText;
  RWStepVisual_RWCompositeTextWithExtent: typeof RWStepVisual_RWCompositeTextWithExtent;
  RWStepVisual_RWContextDependentInvisibility: typeof RWStepVisual_RWContextDependentInvisibility;
  RWStepVisual_RWContextDependentOverRidingStyledItem: typeof RWStepVisual_RWContextDependentOverRidingStyledItem;
  RWStepVisual_RWCoordinatesList: typeof RWStepVisual_RWCoordinatesList;
  RWStepVisual_RWCurveStyle: typeof RWStepVisual_RWCurveStyle;
  RWStepVisual_RWCurveStyleFont: typeof RWStepVisual_RWCurveStyleFont;
  RWStepVisual_RWCurveStyleFontPattern: typeof RWStepVisual_RWCurveStyleFontPattern;
  RWStepVisual_RWDraughtingCallout: typeof RWStepVisual_RWDraughtingCallout;
  RWStepVisual_RWDraughtingModel: typeof RWStepVisual_RWDraughtingModel;
  RWStepVisual_RWDraughtingPreDefinedColour: typeof RWStepVisual_RWDraughtingPreDefinedColour;
  RWStepVisual_RWDraughtingPreDefinedCurveFont: typeof RWStepVisual_RWDraughtingPreDefinedCurveFont;
  RWStepVisual_RWExternallyDefinedCurveFont: typeof RWStepVisual_RWExternallyDefinedCurveFont;
  RWStepVisual_RWFillAreaStyle: typeof RWStepVisual_RWFillAreaStyle;
  RWStepVisual_RWFillAreaStyleColour: typeof RWStepVisual_RWFillAreaStyleColour;
  RWStepVisual_RWInvisibility: typeof RWStepVisual_RWInvisibility;
  RWStepVisual_RWMechanicalDesignGeometricPresentationArea: typeof RWStepVisual_RWMechanicalDesignGeometricPresentationArea;
  RWStepVisual_RWMechanicalDesignGeometricPresentationRepresentation: typeof RWStepVisual_RWMechanicalDesignGeometricPresentationRepresentation;
  RWStepVisual_RWOverRidingStyledItem: typeof RWStepVisual_RWOverRidingStyledItem;
  RWStepVisual_RWPlanarBox: typeof RWStepVisual_RWPlanarBox;
  RWStepVisual_RWPlanarExtent: typeof RWStepVisual_RWPlanarExtent;
  RWStepVisual_RWPointStyle: typeof RWStepVisual_RWPointStyle;
  RWStepVisual_RWPreDefinedColour: typeof RWStepVisual_RWPreDefinedColour;
  RWStepVisual_RWPreDefinedCurveFont: typeof RWStepVisual_RWPreDefinedCurveFont;
  RWStepVisual_RWPreDefinedItem: typeof RWStepVisual_RWPreDefinedItem;
  RWStepVisual_RWPresentationArea: typeof RWStepVisual_RWPresentationArea;
  RWStepVisual_RWPresentationLayerAssignment: typeof RWStepVisual_RWPresentationLayerAssignment;
  RWStepVisual_RWPresentationLayerUsage: typeof RWStepVisual_RWPresentationLayerUsage;
  RWStepVisual_RWPresentationRepresentation: typeof RWStepVisual_RWPresentationRepresentation;
  RWStepVisual_RWPresentationSet: typeof RWStepVisual_RWPresentationSet;
  RWStepVisual_RWPresentationSize: typeof RWStepVisual_RWPresentationSize;
  RWStepVisual_RWPresentationStyleAssignment: typeof RWStepVisual_RWPresentationStyleAssignment;
  RWStepVisual_RWPresentationStyleByContext: typeof RWStepVisual_RWPresentationStyleByContext;
  RWStepVisual_RWPresentationView: typeof RWStepVisual_RWPresentationView;
  RWStepVisual_RWPresentedItemRepresentation: typeof RWStepVisual_RWPresentedItemRepresentation;
  RWStepVisual_RWStyledItem: typeof RWStepVisual_RWStyledItem;
  RWStepVisual_RWSurfaceSideStyle: typeof RWStepVisual_RWSurfaceSideStyle;
  RWStepVisual_RWSurfaceStyleBoundary: typeof RWStepVisual_RWSurfaceStyleBoundary;
  RWStepVisual_RWSurfaceStyleControlGrid: typeof RWStepVisual_RWSurfaceStyleControlGrid;
  RWStepVisual_RWSurfaceStyleFillArea: typeof RWStepVisual_RWSurfaceStyleFillArea;
  RWStepVisual_RWSurfaceStyleParameterLine: typeof RWStepVisual_RWSurfaceStyleParameterLine;
  RWStepVisual_RWSurfaceStyleReflectanceAmbient: typeof RWStepVisual_RWSurfaceStyleReflectanceAmbient;
  RWStepVisual_RWSurfaceStyleRendering: typeof RWStepVisual_RWSurfaceStyleRendering;
  RWStepVisual_RWSurfaceStyleRenderingWithProperties: typeof RWStepVisual_RWSurfaceStyleRenderingWithProperties;
  RWStepVisual_RWSurfaceStyleSegmentationCurve: typeof RWStepVisual_RWSurfaceStyleSegmentationCurve;
  RWStepVisual_RWSurfaceStyleSilhouette: typeof RWStepVisual_RWSurfaceStyleSilhouette;
  RWStepVisual_RWSurfaceStyleTransparent: typeof RWStepVisual_RWSurfaceStyleTransparent;
  RWStepVisual_RWSurfaceStyleUsage: typeof RWStepVisual_RWSurfaceStyleUsage;
  RWStepVisual_RWTemplate: typeof RWStepVisual_RWTemplate;
  RWStepVisual_RWTemplateInstance: typeof RWStepVisual_RWTemplateInstance;
  RWStepVisual_RWTessellatedAnnotationOccurrence: typeof RWStepVisual_RWTessellatedAnnotationOccurrence;
  StepVisual_TessellatedItem: typeof StepVisual_TessellatedItem;
  StepVisual_CoordinatesList: typeof StepVisual_CoordinatesList;
  StepVisual_TessellatedCurveSet: typeof StepVisual_TessellatedCurveSet;
  RWStepVisual_RWTessellatedCurveSet: typeof RWStepVisual_RWTessellatedCurveSet;
  RWStepVisual_RWTessellatedGeometricSet: typeof RWStepVisual_RWTessellatedGeometricSet;
  RWStepVisual_RWTessellatedItem: typeof RWStepVisual_RWTessellatedItem;
  RWStepVisual_RWTextLiteral: typeof RWStepVisual_RWTextLiteral;
  RWStepVisual_RWTextStyle: typeof RWStepVisual_RWTextStyle;
  RWStepVisual_RWTextStyleForDefinedFont: typeof RWStepVisual_RWTextStyleForDefinedFont;
  RWStepVisual_RWTextStyleWithBoxCharacteristics: typeof RWStepVisual_RWTextStyleWithBoxCharacteristics;
  RWStepVisual_RWViewVolume: typeof RWStepVisual_RWViewVolume;
  StepDimTol_GeometricToleranceTarget: typeof StepDimTol_GeometricToleranceTarget;
  StepDimTol_GeometricTolerance: typeof StepDimTol_GeometricTolerance;
  StepDimTol_DatumReferenceModifierWithValue: typeof StepDimTol_DatumReferenceModifierWithValue;
  StepDimTol_SimpleDatumReferenceModifierMember: typeof StepDimTol_SimpleDatumReferenceModifierMember;
  StepDimTol_DatumReferenceModifier: typeof StepDimTol_DatumReferenceModifier;
  StepVisual_TessellatedGeometricSet: typeof StepVisual_TessellatedGeometricSet;
  StepDimTol_Datum: typeof StepDimTol_Datum;
  StepDimTol_DatumSystemOrReference: typeof StepDimTol_DatumSystemOrReference;
  StepVisual_DraughtingModel: typeof StepVisual_DraughtingModel;
  StepVisual_PresentationStyleSelect: typeof StepVisual_PresentationStyleSelect;
  StepVisual_PresentationStyleAssignment: typeof StepVisual_PresentationStyleAssignment;
  StepDimTol_DatumReference: typeof StepDimTol_DatumReference;
  StepDimTol_GeometricToleranceWithDatumReference: typeof StepDimTol_GeometricToleranceWithDatumReference;
  StepDimTol_AngularityTolerance: typeof StepDimTol_AngularityTolerance;
  StepDimTol_DatumOrCommonDatum: typeof StepDimTol_DatumOrCommonDatum;
  StepDimTol_GeneralDatumReference: typeof StepDimTol_GeneralDatumReference;
  StepDimTol_DatumReferenceCompartment: typeof StepDimTol_DatumReferenceCompartment;
  StepDimTol_DatumReferenceElement: typeof StepDimTol_DatumReferenceElement;
  StepDimTol_ToleranceZoneTarget: typeof StepDimTol_ToleranceZoneTarget;
  StepDimTol_CircularRunoutTolerance: typeof StepDimTol_CircularRunoutTolerance;
  StepDimTol_CoaxialityTolerance: typeof StepDimTol_CoaxialityTolerance;
  StepDimTol_CommonDatum: typeof StepDimTol_CommonDatum;
  StepDimTol_ConcentricityTolerance: typeof StepDimTol_ConcentricityTolerance;
  StepDimTol_CylindricityTolerance: typeof StepDimTol_CylindricityTolerance;
  StepDimTol_DatumFeature: typeof StepDimTol_DatumFeature;
  StepDimTol_DatumSystem: typeof StepDimTol_DatumSystem;
  StepDimTol_DatumTarget: typeof StepDimTol_DatumTarget;
  StepDimTol_FlatnessTolerance: typeof StepDimTol_FlatnessTolerance;
  StepDimTol_GeoTolAndGeoTolWthDatRef: typeof StepDimTol_GeoTolAndGeoTolWthDatRef;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol;
  StepDimTol_GeoTolAndGeoTolWthMod: typeof StepDimTol_GeoTolAndGeoTolWthMod;
  StepDimTol_GeoTolAndGeoTolWthMaxTol: typeof StepDimTol_GeoTolAndGeoTolWthMaxTol;
  StepDimTol_GeometricToleranceRelationship: typeof StepDimTol_GeometricToleranceRelationship;
  StepDimTol_GeometricToleranceWithDefinedUnit: typeof StepDimTol_GeometricToleranceWithDefinedUnit;
  StepDimTol_GeometricToleranceWithDefinedAreaUnit: typeof StepDimTol_GeometricToleranceWithDefinedAreaUnit;
  StepDimTol_GeometricToleranceWithModifiers: typeof StepDimTol_GeometricToleranceWithModifiers;
  StepDimTol_GeometricToleranceWithMaximumTolerance: typeof StepDimTol_GeometricToleranceWithMaximumTolerance;
  StepDimTol_LineProfileTolerance: typeof StepDimTol_LineProfileTolerance;
  StepDimTol_ModifiedGeometricTolerance: typeof StepDimTol_ModifiedGeometricTolerance;
  StepDimTol_ToleranceZoneForm: typeof StepDimTol_ToleranceZoneForm;
  StepDimTol_ToleranceZone: typeof StepDimTol_ToleranceZone;
  StepDimTol_ToleranceZoneDefinition: typeof StepDimTol_ToleranceZoneDefinition;
  StepDimTol_NonUniformZoneDefinition: typeof StepDimTol_NonUniformZoneDefinition;
  StepDimTol_ParallelismTolerance: typeof StepDimTol_ParallelismTolerance;
  StepDimTol_PerpendicularityTolerance: typeof StepDimTol_PerpendicularityTolerance;
  StepDimTol_PlacedDatumTargetFeature: typeof StepDimTol_PlacedDatumTargetFeature;
  StepDimTol_PositionTolerance: typeof StepDimTol_PositionTolerance;
  StepDimTol_ProjectedZoneDefinition: typeof StepDimTol_ProjectedZoneDefinition;
  StepDimTol_RoundnessTolerance: typeof StepDimTol_RoundnessTolerance;
  StepDimTol_RunoutZoneOrientation: typeof StepDimTol_RunoutZoneOrientation;
  StepDimTol_RunoutZoneDefinition: typeof StepDimTol_RunoutZoneDefinition;
  StepDimTol_ShapeToleranceSelect: typeof StepDimTol_ShapeToleranceSelect;
  StepDimTol_StraightnessTolerance: typeof StepDimTol_StraightnessTolerance;
  StepDimTol_SurfaceProfileTolerance: typeof StepDimTol_SurfaceProfileTolerance;
  StepDimTol_SymmetryTolerance: typeof StepDimTol_SymmetryTolerance;
  StepDimTol_TotalRunoutTolerance: typeof StepDimTol_TotalRunoutTolerance;
  StepDimTol_UnequallyDisposedGeometricTolerance: typeof StepDimTol_UnequallyDisposedGeometricTolerance;
  StepVisual_StyledItemTarget: typeof StepVisual_StyledItemTarget;
  StepVisual_StyledItem: typeof StepVisual_StyledItem;
  StepVisual_AnnotationOccurrence: typeof StepVisual_AnnotationOccurrence;
  StepVisual_AnnotationCurveOccurrence: typeof StepVisual_AnnotationCurveOccurrence;
  StepVisual_AnnotationCurveOccurrenceAndGeomReprItem: typeof StepVisual_AnnotationCurveOccurrenceAndGeomReprItem;
  StepVisual_AnnotationFillArea: typeof StepVisual_AnnotationFillArea;
  StepVisual_AnnotationFillAreaOccurrence: typeof StepVisual_AnnotationFillAreaOccurrence;
  StepVisual_AnnotationPlaneElement: typeof StepVisual_AnnotationPlaneElement;
  StepVisual_AnnotationPlane: typeof StepVisual_AnnotationPlane;
  StepVisual_AnnotationText: typeof StepVisual_AnnotationText;
  StepVisual_AnnotationTextOccurrence: typeof StepVisual_AnnotationTextOccurrence;
  StepVisual_AreaInSet: typeof StepVisual_AreaInSet;
  StepVisual_AreaOrView: typeof StepVisual_AreaOrView;
  StepVisual_BoxCharacteristicSelect: typeof StepVisual_BoxCharacteristicSelect;
  StepVisual_CameraModelD3MultiClippingInterectionSelect: typeof StepVisual_CameraModelD3MultiClippingInterectionSelect;
  StepVisual_CameraModelD3MultiClippingUnionSelect: typeof StepVisual_CameraModelD3MultiClippingUnionSelect;
  StepVisual_CurveStyleFontPattern: typeof StepVisual_CurveStyleFontPattern;
  StepVisual_DirectionCountSelect: typeof StepVisual_DirectionCountSelect;
  StepVisual_DraughtingCalloutElement: typeof StepVisual_DraughtingCalloutElement;
  StepVisual_FillStyleSelect: typeof StepVisual_FillStyleSelect;
  StepVisual_InvisibleItem: typeof StepVisual_InvisibleItem;
  StepVisual_LayeredItem: typeof StepVisual_LayeredItem;
  StepVisual_RenderingPropertiesSelect: typeof StepVisual_RenderingPropertiesSelect;
  StepVisual_StyleContextSelect: typeof StepVisual_StyleContextSelect;
  StepVisual_SurfaceStyleElementSelect: typeof StepVisual_SurfaceStyleElementSelect;
  StepVisual_TextOrCharacter: typeof StepVisual_TextOrCharacter;
  StepVisual_Colour: typeof StepVisual_Colour;
  StepVisual_BackgroundColour: typeof StepVisual_BackgroundColour;
  StepVisual_CameraImage: typeof StepVisual_CameraImage;
  StepVisual_CameraImage2dWithScale: typeof StepVisual_CameraImage2dWithScale;
  StepVisual_CameraImage3dWithScale: typeof StepVisual_CameraImage3dWithScale;
  StepVisual_CameraModel: typeof StepVisual_CameraModel;
  StepVisual_CameraModelD2: typeof StepVisual_CameraModelD2;
  StepVisual_CameraModelD3: typeof StepVisual_CameraModelD3;
  StepVisual_CameraModelD3MultiClipping: typeof StepVisual_CameraModelD3MultiClipping;
  StepVisual_CameraModelD3MultiClippingIntersection: typeof StepVisual_CameraModelD3MultiClippingIntersection;
  StepVisual_CameraModelD3MultiClippingUnion: typeof StepVisual_CameraModelD3MultiClippingUnion;
  StepVisual_CameraUsage: typeof StepVisual_CameraUsage;
  StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel: typeof StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel;
  StepVisual_ColourSpecification: typeof StepVisual_ColourSpecification;
  StepVisual_ColourRgb: typeof StepVisual_ColourRgb;
  StepVisual_CompositeText: typeof StepVisual_CompositeText;
  StepVisual_CompositeTextWithExtent: typeof StepVisual_CompositeTextWithExtent;
  StepVisual_InvisibilityContext: typeof StepVisual_InvisibilityContext;
  StepVisual_Invisibility: typeof StepVisual_Invisibility;
  StepVisual_ContextDependentInvisibility: typeof StepVisual_ContextDependentInvisibility;
  StepVisual_OverRidingStyledItem: typeof StepVisual_OverRidingStyledItem;
  StepVisual_ContextDependentOverRidingStyledItem: typeof StepVisual_ContextDependentOverRidingStyledItem;
  StepVisual_CurveStyleFontSelect: typeof StepVisual_CurveStyleFontSelect;
  StepVisual_CurveStyle: typeof StepVisual_CurveStyle;
  StepVisual_CurveStyleFont: typeof StepVisual_CurveStyleFont;
  StepVisual_DraughtingAnnotationOccurrence: typeof StepVisual_DraughtingAnnotationOccurrence;
  StepVisual_DraughtingCallout: typeof StepVisual_DraughtingCallout;
  StepVisual_PreDefinedColour: typeof StepVisual_PreDefinedColour;
  StepVisual_DraughtingPreDefinedColour: typeof StepVisual_DraughtingPreDefinedColour;
  StepVisual_PreDefinedItem: typeof StepVisual_PreDefinedItem;
  StepVisual_PreDefinedCurveFont: typeof StepVisual_PreDefinedCurveFont;
  StepVisual_DraughtingPreDefinedCurveFont: typeof StepVisual_DraughtingPreDefinedCurveFont;
  StepVisual_ExternallyDefinedCurveFont: typeof StepVisual_ExternallyDefinedCurveFont;
  StepVisual_ExternallyDefinedTextFont: typeof StepVisual_ExternallyDefinedTextFont;
  StepVisual_FillAreaStyle: typeof StepVisual_FillAreaStyle;
  StepVisual_FillAreaStyleColour: typeof StepVisual_FillAreaStyleColour;
  StepVisual_FontSelect: typeof StepVisual_FontSelect;
  StepVisual_MarkerMember: typeof StepVisual_MarkerMember;
  StepVisual_MarkerSelect: typeof StepVisual_MarkerSelect;
  StepVisual_PresentationRepresentation: typeof StepVisual_PresentationRepresentation;
  StepVisual_PresentationArea: typeof StepVisual_PresentationArea;
  StepVisual_MechanicalDesignGeometricPresentationArea: typeof StepVisual_MechanicalDesignGeometricPresentationArea;
  StepVisual_MechanicalDesignGeometricPresentationRepresentation: typeof StepVisual_MechanicalDesignGeometricPresentationRepresentation;
  StepVisual_NullStyleMember: typeof StepVisual_NullStyleMember;
  StepVisual_PlanarExtent: typeof StepVisual_PlanarExtent;
  StepVisual_PlanarBox: typeof StepVisual_PlanarBox;
  StepVisual_PointStyle: typeof StepVisual_PointStyle;
  StepVisual_PreDefinedTextFont: typeof StepVisual_PreDefinedTextFont;
  StepVisual_PresentationLayerAssignment: typeof StepVisual_PresentationLayerAssignment;
  StepVisual_PresentationLayerUsage: typeof StepVisual_PresentationLayerUsage;
  StepVisual_PresentationRepresentationSelect: typeof StepVisual_PresentationRepresentationSelect;
  StepVisual_PresentationSet: typeof StepVisual_PresentationSet;
  StepVisual_PresentationSizeAssignmentSelect: typeof StepVisual_PresentationSizeAssignmentSelect;
  StepVisual_PresentationSize: typeof StepVisual_PresentationSize;
  StepVisual_PresentationStyleByContext: typeof StepVisual_PresentationStyleByContext;
  StepVisual_PresentationView: typeof StepVisual_PresentationView;
  StepVisual_PresentedItemRepresentation: typeof StepVisual_PresentedItemRepresentation;
  StepVisual_SurfaceSideStyle: typeof StepVisual_SurfaceSideStyle;
  StepVisual_SurfaceStyleBoundary: typeof StepVisual_SurfaceStyleBoundary;
  StepVisual_SurfaceStyleControlGrid: typeof StepVisual_SurfaceStyleControlGrid;
  StepVisual_SurfaceStyleFillArea: typeof StepVisual_SurfaceStyleFillArea;
  StepVisual_SurfaceStyleParameterLine: typeof StepVisual_SurfaceStyleParameterLine;
  StepVisual_SurfaceStyleReflectanceAmbient: typeof StepVisual_SurfaceStyleReflectanceAmbient;
  StepVisual_SurfaceStyleRendering: typeof StepVisual_SurfaceStyleRendering;
  StepVisual_SurfaceStyleRenderingWithProperties: typeof StepVisual_SurfaceStyleRenderingWithProperties;
  StepVisual_SurfaceStyleSegmentationCurve: typeof StepVisual_SurfaceStyleSegmentationCurve;
  StepVisual_SurfaceStyleSilhouette: typeof StepVisual_SurfaceStyleSilhouette;
  StepVisual_SurfaceStyleTransparent: typeof StepVisual_SurfaceStyleTransparent;
  StepVisual_SurfaceStyleUsage: typeof StepVisual_SurfaceStyleUsage;
  StepVisual_Template: typeof StepVisual_Template;
  StepVisual_TemplateInstance: typeof StepVisual_TemplateInstance;
  StepVisual_TessellatedAnnotationOccurrence: typeof StepVisual_TessellatedAnnotationOccurrence;
  StepVisual_TextLiteral: typeof StepVisual_TextLiteral;
  StepVisual_TextStyle: typeof StepVisual_TextStyle;
  StepVisual_TextStyleForDefinedFont: typeof StepVisual_TextStyleForDefinedFont;
  StepVisual_TextStyleWithBoxCharacteristics: typeof StepVisual_TextStyleWithBoxCharacteristics;
  StepVisual_ViewVolume: typeof StepVisual_ViewVolume;
  Handle_StepVisual_TessellatedItem_1: typeof Handle_StepVisual_TessellatedItem_1;
  Handle_StepVisual_TessellatedItem_2: typeof Handle_StepVisual_TessellatedItem_2;
  Handle_StepVisual_TessellatedItem_3: typeof Handle_StepVisual_TessellatedItem_3;
  Handle_StepVisual_TessellatedItem_4: typeof Handle_StepVisual_TessellatedItem_4;
  Handle_StepVisual_CoordinatesList_1: typeof Handle_StepVisual_CoordinatesList_1;
  Handle_StepVisual_CoordinatesList_2: typeof Handle_StepVisual_CoordinatesList_2;
  Handle_StepVisual_CoordinatesList_3: typeof Handle_StepVisual_CoordinatesList_3;
  Handle_StepVisual_CoordinatesList_4: typeof Handle_StepVisual_CoordinatesList_4;
  Handle_StepVisual_TessellatedCurveSet_1: typeof Handle_StepVisual_TessellatedCurveSet_1;
  Handle_StepVisual_TessellatedCurveSet_2: typeof Handle_StepVisual_TessellatedCurveSet_2;
  Handle_StepVisual_TessellatedCurveSet_3: typeof Handle_StepVisual_TessellatedCurveSet_3;
  Handle_StepVisual_TessellatedCurveSet_4: typeof Handle_StepVisual_TessellatedCurveSet_4;
  Handle_StepDimTol_GeometricTolerance_1: typeof Handle_StepDimTol_GeometricTolerance_1;
  Handle_StepDimTol_GeometricTolerance_2: typeof Handle_StepDimTol_GeometricTolerance_2;
  Handle_StepDimTol_GeometricTolerance_3: typeof Handle_StepDimTol_GeometricTolerance_3;
  Handle_StepDimTol_GeometricTolerance_4: typeof Handle_StepDimTol_GeometricTolerance_4;
  Handle_StepDimTol_DatumReferenceModifierWithValue_1: typeof Handle_StepDimTol_DatumReferenceModifierWithValue_1;
  Handle_StepDimTol_DatumReferenceModifierWithValue_2: typeof Handle_StepDimTol_DatumReferenceModifierWithValue_2;
  Handle_StepDimTol_DatumReferenceModifierWithValue_3: typeof Handle_StepDimTol_DatumReferenceModifierWithValue_3;
  Handle_StepDimTol_DatumReferenceModifierWithValue_4: typeof Handle_StepDimTol_DatumReferenceModifierWithValue_4;
  Handle_StepDimTol_SimpleDatumReferenceModifierMember_1: typeof Handle_StepDimTol_SimpleDatumReferenceModifierMember_1;
  Handle_StepDimTol_SimpleDatumReferenceModifierMember_2: typeof Handle_StepDimTol_SimpleDatumReferenceModifierMember_2;
  Handle_StepDimTol_SimpleDatumReferenceModifierMember_3: typeof Handle_StepDimTol_SimpleDatumReferenceModifierMember_3;
  Handle_StepDimTol_SimpleDatumReferenceModifierMember_4: typeof Handle_StepDimTol_SimpleDatumReferenceModifierMember_4;
  StepDimTol_Array1OfDatumReferenceModifier_1: typeof StepDimTol_Array1OfDatumReferenceModifier_1;
  StepDimTol_Array1OfDatumReferenceModifier_2: typeof StepDimTol_Array1OfDatumReferenceModifier_2;
  StepDimTol_Array1OfDatumReferenceModifier_3: typeof StepDimTol_Array1OfDatumReferenceModifier_3;
  StepDimTol_Array1OfDatumReferenceModifier_4: typeof StepDimTol_Array1OfDatumReferenceModifier_4;
  StepDimTol_Array1OfDatumReferenceModifier_5: typeof StepDimTol_Array1OfDatumReferenceModifier_5;
  Handle_StepDimTol_HArray1OfDatumReferenceModifier_1: typeof Handle_StepDimTol_HArray1OfDatumReferenceModifier_1;
  Handle_StepDimTol_HArray1OfDatumReferenceModifier_2: typeof Handle_StepDimTol_HArray1OfDatumReferenceModifier_2;
  Handle_StepDimTol_HArray1OfDatumReferenceModifier_3: typeof Handle_StepDimTol_HArray1OfDatumReferenceModifier_3;
  Handle_StepDimTol_HArray1OfDatumReferenceModifier_4: typeof Handle_StepDimTol_HArray1OfDatumReferenceModifier_4;
  Handle_StepVisual_TessellatedGeometricSet_1: typeof Handle_StepVisual_TessellatedGeometricSet_1;
  Handle_StepVisual_TessellatedGeometricSet_2: typeof Handle_StepVisual_TessellatedGeometricSet_2;
  Handle_StepVisual_TessellatedGeometricSet_3: typeof Handle_StepVisual_TessellatedGeometricSet_3;
  Handle_StepVisual_TessellatedGeometricSet_4: typeof Handle_StepVisual_TessellatedGeometricSet_4;
  Handle_StepDimTol_Datum_1: typeof Handle_StepDimTol_Datum_1;
  Handle_StepDimTol_Datum_2: typeof Handle_StepDimTol_Datum_2;
  Handle_StepDimTol_Datum_3: typeof Handle_StepDimTol_Datum_3;
  Handle_StepDimTol_Datum_4: typeof Handle_StepDimTol_Datum_4;
  StepDimTol_Array1OfDatumSystemOrReference_1: typeof StepDimTol_Array1OfDatumSystemOrReference_1;
  StepDimTol_Array1OfDatumSystemOrReference_2: typeof StepDimTol_Array1OfDatumSystemOrReference_2;
  StepDimTol_Array1OfDatumSystemOrReference_3: typeof StepDimTol_Array1OfDatumSystemOrReference_3;
  StepDimTol_Array1OfDatumSystemOrReference_4: typeof StepDimTol_Array1OfDatumSystemOrReference_4;
  StepDimTol_Array1OfDatumSystemOrReference_5: typeof StepDimTol_Array1OfDatumSystemOrReference_5;
  Handle_StepDimTol_HArray1OfDatumSystemOrReference_1: typeof Handle_StepDimTol_HArray1OfDatumSystemOrReference_1;
  Handle_StepDimTol_HArray1OfDatumSystemOrReference_2: typeof Handle_StepDimTol_HArray1OfDatumSystemOrReference_2;
  Handle_StepDimTol_HArray1OfDatumSystemOrReference_3: typeof Handle_StepDimTol_HArray1OfDatumSystemOrReference_3;
  Handle_StepDimTol_HArray1OfDatumSystemOrReference_4: typeof Handle_StepDimTol_HArray1OfDatumSystemOrReference_4;
  Handle_StepVisual_DraughtingModel_1: typeof Handle_StepVisual_DraughtingModel_1;
  Handle_StepVisual_DraughtingModel_2: typeof Handle_StepVisual_DraughtingModel_2;
  Handle_StepVisual_DraughtingModel_3: typeof Handle_StepVisual_DraughtingModel_3;
  Handle_StepVisual_DraughtingModel_4: typeof Handle_StepVisual_DraughtingModel_4;
  StepVisual_Array1OfPresentationStyleSelect_1: typeof StepVisual_Array1OfPresentationStyleSelect_1;
  StepVisual_Array1OfPresentationStyleSelect_2: typeof StepVisual_Array1OfPresentationStyleSelect_2;
  StepVisual_Array1OfPresentationStyleSelect_3: typeof StepVisual_Array1OfPresentationStyleSelect_3;
  StepVisual_Array1OfPresentationStyleSelect_4: typeof StepVisual_Array1OfPresentationStyleSelect_4;
  StepVisual_Array1OfPresentationStyleSelect_5: typeof StepVisual_Array1OfPresentationStyleSelect_5;
  Handle_StepVisual_HArray1OfPresentationStyleSelect_1: typeof Handle_StepVisual_HArray1OfPresentationStyleSelect_1;
  Handle_StepVisual_HArray1OfPresentationStyleSelect_2: typeof Handle_StepVisual_HArray1OfPresentationStyleSelect_2;
  Handle_StepVisual_HArray1OfPresentationStyleSelect_3: typeof Handle_StepVisual_HArray1OfPresentationStyleSelect_3;
  Handle_StepVisual_HArray1OfPresentationStyleSelect_4: typeof Handle_StepVisual_HArray1OfPresentationStyleSelect_4;
  Handle_StepVisual_PresentationStyleAssignment_1: typeof Handle_StepVisual_PresentationStyleAssignment_1;
  Handle_StepVisual_PresentationStyleAssignment_2: typeof Handle_StepVisual_PresentationStyleAssignment_2;
  Handle_StepVisual_PresentationStyleAssignment_3: typeof Handle_StepVisual_PresentationStyleAssignment_3;
  Handle_StepVisual_PresentationStyleAssignment_4: typeof Handle_StepVisual_PresentationStyleAssignment_4;
  Handle_StepVisual_HArray1OfPresentationStyleAssignment_1: typeof Handle_StepVisual_HArray1OfPresentationStyleAssignment_1;
  Handle_StepVisual_HArray1OfPresentationStyleAssignment_2: typeof Handle_StepVisual_HArray1OfPresentationStyleAssignment_2;
  Handle_StepVisual_HArray1OfPresentationStyleAssignment_3: typeof Handle_StepVisual_HArray1OfPresentationStyleAssignment_3;
  Handle_StepVisual_HArray1OfPresentationStyleAssignment_4: typeof Handle_StepVisual_HArray1OfPresentationStyleAssignment_4;
  Handle_StepVisual_PresentedItem_1: typeof Handle_StepVisual_PresentedItem_1;
  Handle_StepVisual_PresentedItem_2: typeof Handle_StepVisual_PresentedItem_2;
  Handle_StepVisual_PresentedItem_3: typeof Handle_StepVisual_PresentedItem_3;
  Handle_StepVisual_PresentedItem_4: typeof Handle_StepVisual_PresentedItem_4;
  Handle_StepDimTol_DatumReference_1: typeof Handle_StepDimTol_DatumReference_1;
  Handle_StepDimTol_DatumReference_2: typeof Handle_StepDimTol_DatumReference_2;
  Handle_StepDimTol_DatumReference_3: typeof Handle_StepDimTol_DatumReference_3;
  Handle_StepDimTol_DatumReference_4: typeof Handle_StepDimTol_DatumReference_4;
  Handle_StepDimTol_HArray1OfDatumReference_1: typeof Handle_StepDimTol_HArray1OfDatumReference_1;
  Handle_StepDimTol_HArray1OfDatumReference_2: typeof Handle_StepDimTol_HArray1OfDatumReference_2;
  Handle_StepDimTol_HArray1OfDatumReference_3: typeof Handle_StepDimTol_HArray1OfDatumReference_3;
  Handle_StepDimTol_HArray1OfDatumReference_4: typeof Handle_StepDimTol_HArray1OfDatumReference_4;
  Handle_StepDimTol_GeometricToleranceWithDatumReference_1: typeof Handle_StepDimTol_GeometricToleranceWithDatumReference_1;
  Handle_StepDimTol_GeometricToleranceWithDatumReference_2: typeof Handle_StepDimTol_GeometricToleranceWithDatumReference_2;
  Handle_StepDimTol_GeometricToleranceWithDatumReference_3: typeof Handle_StepDimTol_GeometricToleranceWithDatumReference_3;
  Handle_StepDimTol_GeometricToleranceWithDatumReference_4: typeof Handle_StepDimTol_GeometricToleranceWithDatumReference_4;
  Handle_StepDimTol_AngularityTolerance_1: typeof Handle_StepDimTol_AngularityTolerance_1;
  Handle_StepDimTol_AngularityTolerance_2: typeof Handle_StepDimTol_AngularityTolerance_2;
  Handle_StepDimTol_AngularityTolerance_3: typeof Handle_StepDimTol_AngularityTolerance_3;
  Handle_StepDimTol_AngularityTolerance_4: typeof Handle_StepDimTol_AngularityTolerance_4;
  Handle_StepDimTol_GeneralDatumReference_1: typeof Handle_StepDimTol_GeneralDatumReference_1;
  Handle_StepDimTol_GeneralDatumReference_2: typeof Handle_StepDimTol_GeneralDatumReference_2;
  Handle_StepDimTol_GeneralDatumReference_3: typeof Handle_StepDimTol_GeneralDatumReference_3;
  Handle_StepDimTol_GeneralDatumReference_4: typeof Handle_StepDimTol_GeneralDatumReference_4;
  Handle_StepDimTol_DatumReferenceCompartment_1: typeof Handle_StepDimTol_DatumReferenceCompartment_1;
  Handle_StepDimTol_DatumReferenceCompartment_2: typeof Handle_StepDimTol_DatumReferenceCompartment_2;
  Handle_StepDimTol_DatumReferenceCompartment_3: typeof Handle_StepDimTol_DatumReferenceCompartment_3;
  Handle_StepDimTol_DatumReferenceCompartment_4: typeof Handle_StepDimTol_DatumReferenceCompartment_4;
  Handle_StepDimTol_DatumReferenceElement_1: typeof Handle_StepDimTol_DatumReferenceElement_1;
  Handle_StepDimTol_DatumReferenceElement_2: typeof Handle_StepDimTol_DatumReferenceElement_2;
  Handle_StepDimTol_DatumReferenceElement_3: typeof Handle_StepDimTol_DatumReferenceElement_3;
  Handle_StepDimTol_DatumReferenceElement_4: typeof Handle_StepDimTol_DatumReferenceElement_4;
  StepDimTol_Array1OfGeometricToleranceModifier_1: typeof StepDimTol_Array1OfGeometricToleranceModifier_1;
  StepDimTol_Array1OfGeometricToleranceModifier_2: typeof StepDimTol_Array1OfGeometricToleranceModifier_2;
  StepDimTol_Array1OfGeometricToleranceModifier_3: typeof StepDimTol_Array1OfGeometricToleranceModifier_3;
  StepDimTol_Array1OfGeometricToleranceModifier_4: typeof StepDimTol_Array1OfGeometricToleranceModifier_4;
  StepDimTol_Array1OfGeometricToleranceModifier_5: typeof StepDimTol_Array1OfGeometricToleranceModifier_5;
  StepDimTol_Array1OfToleranceZoneTarget_1: typeof StepDimTol_Array1OfToleranceZoneTarget_1;
  StepDimTol_Array1OfToleranceZoneTarget_2: typeof StepDimTol_Array1OfToleranceZoneTarget_2;
  StepDimTol_Array1OfToleranceZoneTarget_3: typeof StepDimTol_Array1OfToleranceZoneTarget_3;
  StepDimTol_Array1OfToleranceZoneTarget_4: typeof StepDimTol_Array1OfToleranceZoneTarget_4;
  StepDimTol_Array1OfToleranceZoneTarget_5: typeof StepDimTol_Array1OfToleranceZoneTarget_5;
  Handle_StepDimTol_CircularRunoutTolerance_1: typeof Handle_StepDimTol_CircularRunoutTolerance_1;
  Handle_StepDimTol_CircularRunoutTolerance_2: typeof Handle_StepDimTol_CircularRunoutTolerance_2;
  Handle_StepDimTol_CircularRunoutTolerance_3: typeof Handle_StepDimTol_CircularRunoutTolerance_3;
  Handle_StepDimTol_CircularRunoutTolerance_4: typeof Handle_StepDimTol_CircularRunoutTolerance_4;
  Handle_StepDimTol_CoaxialityTolerance_1: typeof Handle_StepDimTol_CoaxialityTolerance_1;
  Handle_StepDimTol_CoaxialityTolerance_2: typeof Handle_StepDimTol_CoaxialityTolerance_2;
  Handle_StepDimTol_CoaxialityTolerance_3: typeof Handle_StepDimTol_CoaxialityTolerance_3;
  Handle_StepDimTol_CoaxialityTolerance_4: typeof Handle_StepDimTol_CoaxialityTolerance_4;
  Handle_StepDimTol_CommonDatum_1: typeof Handle_StepDimTol_CommonDatum_1;
  Handle_StepDimTol_CommonDatum_2: typeof Handle_StepDimTol_CommonDatum_2;
  Handle_StepDimTol_CommonDatum_3: typeof Handle_StepDimTol_CommonDatum_3;
  Handle_StepDimTol_CommonDatum_4: typeof Handle_StepDimTol_CommonDatum_4;
  Handle_StepDimTol_ConcentricityTolerance_1: typeof Handle_StepDimTol_ConcentricityTolerance_1;
  Handle_StepDimTol_ConcentricityTolerance_2: typeof Handle_StepDimTol_ConcentricityTolerance_2;
  Handle_StepDimTol_ConcentricityTolerance_3: typeof Handle_StepDimTol_ConcentricityTolerance_3;
  Handle_StepDimTol_ConcentricityTolerance_4: typeof Handle_StepDimTol_ConcentricityTolerance_4;
  Handle_StepDimTol_CylindricityTolerance_1: typeof Handle_StepDimTol_CylindricityTolerance_1;
  Handle_StepDimTol_CylindricityTolerance_2: typeof Handle_StepDimTol_CylindricityTolerance_2;
  Handle_StepDimTol_CylindricityTolerance_3: typeof Handle_StepDimTol_CylindricityTolerance_3;
  Handle_StepDimTol_CylindricityTolerance_4: typeof Handle_StepDimTol_CylindricityTolerance_4;
  Handle_StepDimTol_DatumFeature_1: typeof Handle_StepDimTol_DatumFeature_1;
  Handle_StepDimTol_DatumFeature_2: typeof Handle_StepDimTol_DatumFeature_2;
  Handle_StepDimTol_DatumFeature_3: typeof Handle_StepDimTol_DatumFeature_3;
  Handle_StepDimTol_DatumFeature_4: typeof Handle_StepDimTol_DatumFeature_4;
  Handle_StepDimTol_HArray1OfDatumReferenceCompartment_1: typeof Handle_StepDimTol_HArray1OfDatumReferenceCompartment_1;
  Handle_StepDimTol_HArray1OfDatumReferenceCompartment_2: typeof Handle_StepDimTol_HArray1OfDatumReferenceCompartment_2;
  Handle_StepDimTol_HArray1OfDatumReferenceCompartment_3: typeof Handle_StepDimTol_HArray1OfDatumReferenceCompartment_3;
  Handle_StepDimTol_HArray1OfDatumReferenceCompartment_4: typeof Handle_StepDimTol_HArray1OfDatumReferenceCompartment_4;
  Handle_StepDimTol_DatumSystem_1: typeof Handle_StepDimTol_DatumSystem_1;
  Handle_StepDimTol_DatumSystem_2: typeof Handle_StepDimTol_DatumSystem_2;
  Handle_StepDimTol_DatumSystem_3: typeof Handle_StepDimTol_DatumSystem_3;
  Handle_StepDimTol_DatumSystem_4: typeof Handle_StepDimTol_DatumSystem_4;
  Handle_StepDimTol_DatumTarget_1: typeof Handle_StepDimTol_DatumTarget_1;
  Handle_StepDimTol_DatumTarget_2: typeof Handle_StepDimTol_DatumTarget_2;
  Handle_StepDimTol_DatumTarget_3: typeof Handle_StepDimTol_DatumTarget_3;
  Handle_StepDimTol_DatumTarget_4: typeof Handle_StepDimTol_DatumTarget_4;
  Handle_StepDimTol_FlatnessTolerance_1: typeof Handle_StepDimTol_FlatnessTolerance_1;
  Handle_StepDimTol_FlatnessTolerance_2: typeof Handle_StepDimTol_FlatnessTolerance_2;
  Handle_StepDimTol_FlatnessTolerance_3: typeof Handle_StepDimTol_FlatnessTolerance_3;
  Handle_StepDimTol_FlatnessTolerance_4: typeof Handle_StepDimTol_FlatnessTolerance_4;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_1: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_1;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_2: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_2;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_3: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_3;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_4: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRef_4;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_1: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_1;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_2: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_2;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_3: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_3;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_4: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod_4;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_1: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_1;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_2: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_2;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_3: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_3;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_4: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol_4;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_1: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_1;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_2: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_2;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_3: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_3;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_4: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol_4;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_1: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_1;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_2: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_2;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_3: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_3;
  Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_4: typeof Handle_StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol_4;
  Handle_StepDimTol_GeoTolAndGeoTolWthMod_1: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMod_1;
  Handle_StepDimTol_GeoTolAndGeoTolWthMod_2: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMod_2;
  Handle_StepDimTol_GeoTolAndGeoTolWthMod_3: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMod_3;
  Handle_StepDimTol_GeoTolAndGeoTolWthMod_4: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMod_4;
  Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_1: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_1;
  Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_2: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_2;
  Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_3: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_3;
  Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_4: typeof Handle_StepDimTol_GeoTolAndGeoTolWthMaxTol_4;
  Handle_StepDimTol_GeometricToleranceRelationship_1: typeof Handle_StepDimTol_GeometricToleranceRelationship_1;
  Handle_StepDimTol_GeometricToleranceRelationship_2: typeof Handle_StepDimTol_GeometricToleranceRelationship_2;
  Handle_StepDimTol_GeometricToleranceRelationship_3: typeof Handle_StepDimTol_GeometricToleranceRelationship_3;
  Handle_StepDimTol_GeometricToleranceRelationship_4: typeof Handle_StepDimTol_GeometricToleranceRelationship_4;
  Handle_StepDimTol_GeometricToleranceWithDefinedUnit_1: typeof Handle_StepDimTol_GeometricToleranceWithDefinedUnit_1;
  Handle_StepDimTol_GeometricToleranceWithDefinedUnit_2: typeof Handle_StepDimTol_GeometricToleranceWithDefinedUnit_2;
  Handle_StepDimTol_GeometricToleranceWithDefinedUnit_3: typeof Handle_StepDimTol_GeometricToleranceWithDefinedUnit_3;
  Handle_StepDimTol_GeometricToleranceWithDefinedUnit_4: typeof Handle_StepDimTol_GeometricToleranceWithDefinedUnit_4;
  Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_1: typeof Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_1;
  Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_2: typeof Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_2;
  Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_3: typeof Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_3;
  Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_4: typeof Handle_StepDimTol_GeometricToleranceWithDefinedAreaUnit_4;
  Handle_StepDimTol_HArray1OfGeometricToleranceModifier_1: typeof Handle_StepDimTol_HArray1OfGeometricToleranceModifier_1;
  Handle_StepDimTol_HArray1OfGeometricToleranceModifier_2: typeof Handle_StepDimTol_HArray1OfGeometricToleranceModifier_2;
  Handle_StepDimTol_HArray1OfGeometricToleranceModifier_3: typeof Handle_StepDimTol_HArray1OfGeometricToleranceModifier_3;
  Handle_StepDimTol_HArray1OfGeometricToleranceModifier_4: typeof Handle_StepDimTol_HArray1OfGeometricToleranceModifier_4;
  Handle_StepDimTol_GeometricToleranceWithModifiers_1: typeof Handle_StepDimTol_GeometricToleranceWithModifiers_1;
  Handle_StepDimTol_GeometricToleranceWithModifiers_2: typeof Handle_StepDimTol_GeometricToleranceWithModifiers_2;
  Handle_StepDimTol_GeometricToleranceWithModifiers_3: typeof Handle_StepDimTol_GeometricToleranceWithModifiers_3;
  Handle_StepDimTol_GeometricToleranceWithModifiers_4: typeof Handle_StepDimTol_GeometricToleranceWithModifiers_4;
  Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_1: typeof Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_1;
  Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_2: typeof Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_2;
  Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_3: typeof Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_3;
  Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_4: typeof Handle_StepDimTol_GeometricToleranceWithMaximumTolerance_4;
  Handle_StepDimTol_HArray1OfDatumReferenceElement_1: typeof Handle_StepDimTol_HArray1OfDatumReferenceElement_1;
  Handle_StepDimTol_HArray1OfDatumReferenceElement_2: typeof Handle_StepDimTol_HArray1OfDatumReferenceElement_2;
  Handle_StepDimTol_HArray1OfDatumReferenceElement_3: typeof Handle_StepDimTol_HArray1OfDatumReferenceElement_3;
  Handle_StepDimTol_HArray1OfDatumReferenceElement_4: typeof Handle_StepDimTol_HArray1OfDatumReferenceElement_4;
  Handle_StepDimTol_HArray1OfToleranceZoneTarget_1: typeof Handle_StepDimTol_HArray1OfToleranceZoneTarget_1;
  Handle_StepDimTol_HArray1OfToleranceZoneTarget_2: typeof Handle_StepDimTol_HArray1OfToleranceZoneTarget_2;
  Handle_StepDimTol_HArray1OfToleranceZoneTarget_3: typeof Handle_StepDimTol_HArray1OfToleranceZoneTarget_3;
  Handle_StepDimTol_HArray1OfToleranceZoneTarget_4: typeof Handle_StepDimTol_HArray1OfToleranceZoneTarget_4;
  Handle_StepDimTol_LineProfileTolerance_1: typeof Handle_StepDimTol_LineProfileTolerance_1;
  Handle_StepDimTol_LineProfileTolerance_2: typeof Handle_StepDimTol_LineProfileTolerance_2;
  Handle_StepDimTol_LineProfileTolerance_3: typeof Handle_StepDimTol_LineProfileTolerance_3;
  Handle_StepDimTol_LineProfileTolerance_4: typeof Handle_StepDimTol_LineProfileTolerance_4;
  Handle_StepDimTol_ModifiedGeometricTolerance_1: typeof Handle_StepDimTol_ModifiedGeometricTolerance_1;
  Handle_StepDimTol_ModifiedGeometricTolerance_2: typeof Handle_StepDimTol_ModifiedGeometricTolerance_2;
  Handle_StepDimTol_ModifiedGeometricTolerance_3: typeof Handle_StepDimTol_ModifiedGeometricTolerance_3;
  Handle_StepDimTol_ModifiedGeometricTolerance_4: typeof Handle_StepDimTol_ModifiedGeometricTolerance_4;
  Handle_StepDimTol_ToleranceZoneForm_1: typeof Handle_StepDimTol_ToleranceZoneForm_1;
  Handle_StepDimTol_ToleranceZoneForm_2: typeof Handle_StepDimTol_ToleranceZoneForm_2;
  Handle_StepDimTol_ToleranceZoneForm_3: typeof Handle_StepDimTol_ToleranceZoneForm_3;
  Handle_StepDimTol_ToleranceZoneForm_4: typeof Handle_StepDimTol_ToleranceZoneForm_4;
  Handle_StepDimTol_ToleranceZone_1: typeof Handle_StepDimTol_ToleranceZone_1;
  Handle_StepDimTol_ToleranceZone_2: typeof Handle_StepDimTol_ToleranceZone_2;
  Handle_StepDimTol_ToleranceZone_3: typeof Handle_StepDimTol_ToleranceZone_3;
  Handle_StepDimTol_ToleranceZone_4: typeof Handle_StepDimTol_ToleranceZone_4;
  Handle_StepDimTol_ToleranceZoneDefinition_1: typeof Handle_StepDimTol_ToleranceZoneDefinition_1;
  Handle_StepDimTol_ToleranceZoneDefinition_2: typeof Handle_StepDimTol_ToleranceZoneDefinition_2;
  Handle_StepDimTol_ToleranceZoneDefinition_3: typeof Handle_StepDimTol_ToleranceZoneDefinition_3;
  Handle_StepDimTol_ToleranceZoneDefinition_4: typeof Handle_StepDimTol_ToleranceZoneDefinition_4;
  Handle_StepDimTol_NonUniformZoneDefinition_1: typeof Handle_StepDimTol_NonUniformZoneDefinition_1;
  Handle_StepDimTol_NonUniformZoneDefinition_2: typeof Handle_StepDimTol_NonUniformZoneDefinition_2;
  Handle_StepDimTol_NonUniformZoneDefinition_3: typeof Handle_StepDimTol_NonUniformZoneDefinition_3;
  Handle_StepDimTol_NonUniformZoneDefinition_4: typeof Handle_StepDimTol_NonUniformZoneDefinition_4;
  Handle_StepDimTol_ParallelismTolerance_1: typeof Handle_StepDimTol_ParallelismTolerance_1;
  Handle_StepDimTol_ParallelismTolerance_2: typeof Handle_StepDimTol_ParallelismTolerance_2;
  Handle_StepDimTol_ParallelismTolerance_3: typeof Handle_StepDimTol_ParallelismTolerance_3;
  Handle_StepDimTol_ParallelismTolerance_4: typeof Handle_StepDimTol_ParallelismTolerance_4;
  Handle_StepDimTol_PerpendicularityTolerance_1: typeof Handle_StepDimTol_PerpendicularityTolerance_1;
  Handle_StepDimTol_PerpendicularityTolerance_2: typeof Handle_StepDimTol_PerpendicularityTolerance_2;
  Handle_StepDimTol_PerpendicularityTolerance_3: typeof Handle_StepDimTol_PerpendicularityTolerance_3;
  Handle_StepDimTol_PerpendicularityTolerance_4: typeof Handle_StepDimTol_PerpendicularityTolerance_4;
  Handle_StepDimTol_PlacedDatumTargetFeature_1: typeof Handle_StepDimTol_PlacedDatumTargetFeature_1;
  Handle_StepDimTol_PlacedDatumTargetFeature_2: typeof Handle_StepDimTol_PlacedDatumTargetFeature_2;
  Handle_StepDimTol_PlacedDatumTargetFeature_3: typeof Handle_StepDimTol_PlacedDatumTargetFeature_3;
  Handle_StepDimTol_PlacedDatumTargetFeature_4: typeof Handle_StepDimTol_PlacedDatumTargetFeature_4;
  Handle_StepDimTol_PositionTolerance_1: typeof Handle_StepDimTol_PositionTolerance_1;
  Handle_StepDimTol_PositionTolerance_2: typeof Handle_StepDimTol_PositionTolerance_2;
  Handle_StepDimTol_PositionTolerance_3: typeof Handle_StepDimTol_PositionTolerance_3;
  Handle_StepDimTol_PositionTolerance_4: typeof Handle_StepDimTol_PositionTolerance_4;
  Handle_StepDimTol_ProjectedZoneDefinition_1: typeof Handle_StepDimTol_ProjectedZoneDefinition_1;
  Handle_StepDimTol_ProjectedZoneDefinition_2: typeof Handle_StepDimTol_ProjectedZoneDefinition_2;
  Handle_StepDimTol_ProjectedZoneDefinition_3: typeof Handle_StepDimTol_ProjectedZoneDefinition_3;
  Handle_StepDimTol_ProjectedZoneDefinition_4: typeof Handle_StepDimTol_ProjectedZoneDefinition_4;
  Handle_StepDimTol_RoundnessTolerance_1: typeof Handle_StepDimTol_RoundnessTolerance_1;
  Handle_StepDimTol_RoundnessTolerance_2: typeof Handle_StepDimTol_RoundnessTolerance_2;
  Handle_StepDimTol_RoundnessTolerance_3: typeof Handle_StepDimTol_RoundnessTolerance_3;
  Handle_StepDimTol_RoundnessTolerance_4: typeof Handle_StepDimTol_RoundnessTolerance_4;
  Handle_StepDimTol_RunoutZoneOrientation_1: typeof Handle_StepDimTol_RunoutZoneOrientation_1;
  Handle_StepDimTol_RunoutZoneOrientation_2: typeof Handle_StepDimTol_RunoutZoneOrientation_2;
  Handle_StepDimTol_RunoutZoneOrientation_3: typeof Handle_StepDimTol_RunoutZoneOrientation_3;
  Handle_StepDimTol_RunoutZoneOrientation_4: typeof Handle_StepDimTol_RunoutZoneOrientation_4;
  Handle_StepDimTol_RunoutZoneDefinition_1: typeof Handle_StepDimTol_RunoutZoneDefinition_1;
  Handle_StepDimTol_RunoutZoneDefinition_2: typeof Handle_StepDimTol_RunoutZoneDefinition_2;
  Handle_StepDimTol_RunoutZoneDefinition_3: typeof Handle_StepDimTol_RunoutZoneDefinition_3;
  Handle_StepDimTol_RunoutZoneDefinition_4: typeof Handle_StepDimTol_RunoutZoneDefinition_4;
  Handle_StepDimTol_StraightnessTolerance_1: typeof Handle_StepDimTol_StraightnessTolerance_1;
  Handle_StepDimTol_StraightnessTolerance_2: typeof Handle_StepDimTol_StraightnessTolerance_2;
  Handle_StepDimTol_StraightnessTolerance_3: typeof Handle_StepDimTol_StraightnessTolerance_3;
  Handle_StepDimTol_StraightnessTolerance_4: typeof Handle_StepDimTol_StraightnessTolerance_4;
  Handle_StepDimTol_SurfaceProfileTolerance_1: typeof Handle_StepDimTol_SurfaceProfileTolerance_1;
  Handle_StepDimTol_SurfaceProfileTolerance_2: typeof Handle_StepDimTol_SurfaceProfileTolerance_2;
  Handle_StepDimTol_SurfaceProfileTolerance_3: typeof Handle_StepDimTol_SurfaceProfileTolerance_3;
  Handle_StepDimTol_SurfaceProfileTolerance_4: typeof Handle_StepDimTol_SurfaceProfileTolerance_4;
  Handle_StepDimTol_SymmetryTolerance_1: typeof Handle_StepDimTol_SymmetryTolerance_1;
  Handle_StepDimTol_SymmetryTolerance_2: typeof Handle_StepDimTol_SymmetryTolerance_2;
  Handle_StepDimTol_SymmetryTolerance_3: typeof Handle_StepDimTol_SymmetryTolerance_3;
  Handle_StepDimTol_SymmetryTolerance_4: typeof Handle_StepDimTol_SymmetryTolerance_4;
  Handle_StepDimTol_TotalRunoutTolerance_1: typeof Handle_StepDimTol_TotalRunoutTolerance_1;
  Handle_StepDimTol_TotalRunoutTolerance_2: typeof Handle_StepDimTol_TotalRunoutTolerance_2;
  Handle_StepDimTol_TotalRunoutTolerance_3: typeof Handle_StepDimTol_TotalRunoutTolerance_3;
  Handle_StepDimTol_TotalRunoutTolerance_4: typeof Handle_StepDimTol_TotalRunoutTolerance_4;
  Handle_StepDimTol_UnequallyDisposedGeometricTolerance_1: typeof Handle_StepDimTol_UnequallyDisposedGeometricTolerance_1;
  Handle_StepDimTol_UnequallyDisposedGeometricTolerance_2: typeof Handle_StepDimTol_UnequallyDisposedGeometricTolerance_2;
  Handle_StepDimTol_UnequallyDisposedGeometricTolerance_3: typeof Handle_StepDimTol_UnequallyDisposedGeometricTolerance_3;
  Handle_StepDimTol_UnequallyDisposedGeometricTolerance_4: typeof Handle_StepDimTol_UnequallyDisposedGeometricTolerance_4;
  Handle_StepVisual_StyledItem_1: typeof Handle_StepVisual_StyledItem_1;
  Handle_StepVisual_StyledItem_2: typeof Handle_StepVisual_StyledItem_2;
  Handle_StepVisual_StyledItem_3: typeof Handle_StepVisual_StyledItem_3;
  Handle_StepVisual_StyledItem_4: typeof Handle_StepVisual_StyledItem_4;
  Handle_StepVisual_AnnotationOccurrence_1: typeof Handle_StepVisual_AnnotationOccurrence_1;
  Handle_StepVisual_AnnotationOccurrence_2: typeof Handle_StepVisual_AnnotationOccurrence_2;
  Handle_StepVisual_AnnotationOccurrence_3: typeof Handle_StepVisual_AnnotationOccurrence_3;
  Handle_StepVisual_AnnotationOccurrence_4: typeof Handle_StepVisual_AnnotationOccurrence_4;
  Handle_StepVisual_AnnotationCurveOccurrence_1: typeof Handle_StepVisual_AnnotationCurveOccurrence_1;
  Handle_StepVisual_AnnotationCurveOccurrence_2: typeof Handle_StepVisual_AnnotationCurveOccurrence_2;
  Handle_StepVisual_AnnotationCurveOccurrence_3: typeof Handle_StepVisual_AnnotationCurveOccurrence_3;
  Handle_StepVisual_AnnotationCurveOccurrence_4: typeof Handle_StepVisual_AnnotationCurveOccurrence_4;
  Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_1: typeof Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_1;
  Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_2: typeof Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_2;
  Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_3: typeof Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_3;
  Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_4: typeof Handle_StepVisual_AnnotationCurveOccurrenceAndGeomReprItem_4;
  Handle_StepVisual_AnnotationFillArea_1: typeof Handle_StepVisual_AnnotationFillArea_1;
  Handle_StepVisual_AnnotationFillArea_2: typeof Handle_StepVisual_AnnotationFillArea_2;
  Handle_StepVisual_AnnotationFillArea_3: typeof Handle_StepVisual_AnnotationFillArea_3;
  Handle_StepVisual_AnnotationFillArea_4: typeof Handle_StepVisual_AnnotationFillArea_4;
  Handle_StepVisual_AnnotationFillAreaOccurrence_1: typeof Handle_StepVisual_AnnotationFillAreaOccurrence_1;
  Handle_StepVisual_AnnotationFillAreaOccurrence_2: typeof Handle_StepVisual_AnnotationFillAreaOccurrence_2;
  Handle_StepVisual_AnnotationFillAreaOccurrence_3: typeof Handle_StepVisual_AnnotationFillAreaOccurrence_3;
  Handle_StepVisual_AnnotationFillAreaOccurrence_4: typeof Handle_StepVisual_AnnotationFillAreaOccurrence_4;
  StepVisual_Array1OfAnnotationPlaneElement_1: typeof StepVisual_Array1OfAnnotationPlaneElement_1;
  StepVisual_Array1OfAnnotationPlaneElement_2: typeof StepVisual_Array1OfAnnotationPlaneElement_2;
  StepVisual_Array1OfAnnotationPlaneElement_3: typeof StepVisual_Array1OfAnnotationPlaneElement_3;
  StepVisual_Array1OfAnnotationPlaneElement_4: typeof StepVisual_Array1OfAnnotationPlaneElement_4;
  StepVisual_Array1OfAnnotationPlaneElement_5: typeof StepVisual_Array1OfAnnotationPlaneElement_5;
  Handle_StepVisual_HArray1OfAnnotationPlaneElement_1: typeof Handle_StepVisual_HArray1OfAnnotationPlaneElement_1;
  Handle_StepVisual_HArray1OfAnnotationPlaneElement_2: typeof Handle_StepVisual_HArray1OfAnnotationPlaneElement_2;
  Handle_StepVisual_HArray1OfAnnotationPlaneElement_3: typeof Handle_StepVisual_HArray1OfAnnotationPlaneElement_3;
  Handle_StepVisual_HArray1OfAnnotationPlaneElement_4: typeof Handle_StepVisual_HArray1OfAnnotationPlaneElement_4;
  Handle_StepVisual_AnnotationPlane_1: typeof Handle_StepVisual_AnnotationPlane_1;
  Handle_StepVisual_AnnotationPlane_2: typeof Handle_StepVisual_AnnotationPlane_2;
  Handle_StepVisual_AnnotationPlane_3: typeof Handle_StepVisual_AnnotationPlane_3;
  Handle_StepVisual_AnnotationPlane_4: typeof Handle_StepVisual_AnnotationPlane_4;
  Handle_StepVisual_AnnotationText_1: typeof Handle_StepVisual_AnnotationText_1;
  Handle_StepVisual_AnnotationText_2: typeof Handle_StepVisual_AnnotationText_2;
  Handle_StepVisual_AnnotationText_3: typeof Handle_StepVisual_AnnotationText_3;
  Handle_StepVisual_AnnotationText_4: typeof Handle_StepVisual_AnnotationText_4;
  Handle_StepVisual_AnnotationTextOccurrence_1: typeof Handle_StepVisual_AnnotationTextOccurrence_1;
  Handle_StepVisual_AnnotationTextOccurrence_2: typeof Handle_StepVisual_AnnotationTextOccurrence_2;
  Handle_StepVisual_AnnotationTextOccurrence_3: typeof Handle_StepVisual_AnnotationTextOccurrence_3;
  Handle_StepVisual_AnnotationTextOccurrence_4: typeof Handle_StepVisual_AnnotationTextOccurrence_4;
  Handle_StepVisual_AreaInSet_1: typeof Handle_StepVisual_AreaInSet_1;
  Handle_StepVisual_AreaInSet_2: typeof Handle_StepVisual_AreaInSet_2;
  Handle_StepVisual_AreaInSet_3: typeof Handle_StepVisual_AreaInSet_3;
  Handle_StepVisual_AreaInSet_4: typeof Handle_StepVisual_AreaInSet_4;
  StepVisual_Array1OfBoxCharacteristicSelect_1: typeof StepVisual_Array1OfBoxCharacteristicSelect_1;
  StepVisual_Array1OfBoxCharacteristicSelect_2: typeof StepVisual_Array1OfBoxCharacteristicSelect_2;
  StepVisual_Array1OfBoxCharacteristicSelect_3: typeof StepVisual_Array1OfBoxCharacteristicSelect_3;
  StepVisual_Array1OfBoxCharacteristicSelect_4: typeof StepVisual_Array1OfBoxCharacteristicSelect_4;
  StepVisual_Array1OfBoxCharacteristicSelect_5: typeof StepVisual_Array1OfBoxCharacteristicSelect_5;
  StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_1: typeof StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_1;
  StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_2: typeof StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_2;
  StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_3: typeof StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_3;
  StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_4: typeof StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_4;
  StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_5: typeof StepVisual_Array1OfCameraModelD3MultiClippingInterectionSelect_5;
  StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_1: typeof StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_1;
  StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_2: typeof StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_2;
  StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_3: typeof StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_3;
  StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_4: typeof StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_4;
  StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_5: typeof StepVisual_Array1OfCameraModelD3MultiClippingUnionSelect_5;
  Handle_StepVisual_CurveStyleFontPattern_1: typeof Handle_StepVisual_CurveStyleFontPattern_1;
  Handle_StepVisual_CurveStyleFontPattern_2: typeof Handle_StepVisual_CurveStyleFontPattern_2;
  Handle_StepVisual_CurveStyleFontPattern_3: typeof Handle_StepVisual_CurveStyleFontPattern_3;
  Handle_StepVisual_CurveStyleFontPattern_4: typeof Handle_StepVisual_CurveStyleFontPattern_4;
  StepVisual_Array1OfDirectionCountSelect_1: typeof StepVisual_Array1OfDirectionCountSelect_1;
  StepVisual_Array1OfDirectionCountSelect_2: typeof StepVisual_Array1OfDirectionCountSelect_2;
  StepVisual_Array1OfDirectionCountSelect_3: typeof StepVisual_Array1OfDirectionCountSelect_3;
  StepVisual_Array1OfDirectionCountSelect_4: typeof StepVisual_Array1OfDirectionCountSelect_4;
  StepVisual_Array1OfDirectionCountSelect_5: typeof StepVisual_Array1OfDirectionCountSelect_5;
  StepVisual_Array1OfDraughtingCalloutElement_1: typeof StepVisual_Array1OfDraughtingCalloutElement_1;
  StepVisual_Array1OfDraughtingCalloutElement_2: typeof StepVisual_Array1OfDraughtingCalloutElement_2;
  StepVisual_Array1OfDraughtingCalloutElement_3: typeof StepVisual_Array1OfDraughtingCalloutElement_3;
  StepVisual_Array1OfDraughtingCalloutElement_4: typeof StepVisual_Array1OfDraughtingCalloutElement_4;
  StepVisual_Array1OfDraughtingCalloutElement_5: typeof StepVisual_Array1OfDraughtingCalloutElement_5;
  StepVisual_Array1OfFillStyleSelect_1: typeof StepVisual_Array1OfFillStyleSelect_1;
  StepVisual_Array1OfFillStyleSelect_2: typeof StepVisual_Array1OfFillStyleSelect_2;
  StepVisual_Array1OfFillStyleSelect_3: typeof StepVisual_Array1OfFillStyleSelect_3;
  StepVisual_Array1OfFillStyleSelect_4: typeof StepVisual_Array1OfFillStyleSelect_4;
  StepVisual_Array1OfFillStyleSelect_5: typeof StepVisual_Array1OfFillStyleSelect_5;
  StepVisual_Array1OfInvisibleItem_1: typeof StepVisual_Array1OfInvisibleItem_1;
  StepVisual_Array1OfInvisibleItem_2: typeof StepVisual_Array1OfInvisibleItem_2;
  StepVisual_Array1OfInvisibleItem_3: typeof StepVisual_Array1OfInvisibleItem_3;
  StepVisual_Array1OfInvisibleItem_4: typeof StepVisual_Array1OfInvisibleItem_4;
  StepVisual_Array1OfInvisibleItem_5: typeof StepVisual_Array1OfInvisibleItem_5;
  StepVisual_Array1OfLayeredItem_1: typeof StepVisual_Array1OfLayeredItem_1;
  StepVisual_Array1OfLayeredItem_2: typeof StepVisual_Array1OfLayeredItem_2;
  StepVisual_Array1OfLayeredItem_3: typeof StepVisual_Array1OfLayeredItem_3;
  StepVisual_Array1OfLayeredItem_4: typeof StepVisual_Array1OfLayeredItem_4;
  StepVisual_Array1OfLayeredItem_5: typeof StepVisual_Array1OfLayeredItem_5;
  StepVisual_Array1OfRenderingPropertiesSelect_1: typeof StepVisual_Array1OfRenderingPropertiesSelect_1;
  StepVisual_Array1OfRenderingPropertiesSelect_2: typeof StepVisual_Array1OfRenderingPropertiesSelect_2;
  StepVisual_Array1OfRenderingPropertiesSelect_3: typeof StepVisual_Array1OfRenderingPropertiesSelect_3;
  StepVisual_Array1OfRenderingPropertiesSelect_4: typeof StepVisual_Array1OfRenderingPropertiesSelect_4;
  StepVisual_Array1OfRenderingPropertiesSelect_5: typeof StepVisual_Array1OfRenderingPropertiesSelect_5;
  StepVisual_Array1OfStyleContextSelect_1: typeof StepVisual_Array1OfStyleContextSelect_1;
  StepVisual_Array1OfStyleContextSelect_2: typeof StepVisual_Array1OfStyleContextSelect_2;
  StepVisual_Array1OfStyleContextSelect_3: typeof StepVisual_Array1OfStyleContextSelect_3;
  StepVisual_Array1OfStyleContextSelect_4: typeof StepVisual_Array1OfStyleContextSelect_4;
  StepVisual_Array1OfStyleContextSelect_5: typeof StepVisual_Array1OfStyleContextSelect_5;
  StepVisual_Array1OfSurfaceStyleElementSelect_1: typeof StepVisual_Array1OfSurfaceStyleElementSelect_1;
  StepVisual_Array1OfSurfaceStyleElementSelect_2: typeof StepVisual_Array1OfSurfaceStyleElementSelect_2;
  StepVisual_Array1OfSurfaceStyleElementSelect_3: typeof StepVisual_Array1OfSurfaceStyleElementSelect_3;
  StepVisual_Array1OfSurfaceStyleElementSelect_4: typeof StepVisual_Array1OfSurfaceStyleElementSelect_4;
  StepVisual_Array1OfSurfaceStyleElementSelect_5: typeof StepVisual_Array1OfSurfaceStyleElementSelect_5;
  StepVisual_Array1OfTextOrCharacter_1: typeof StepVisual_Array1OfTextOrCharacter_1;
  StepVisual_Array1OfTextOrCharacter_2: typeof StepVisual_Array1OfTextOrCharacter_2;
  StepVisual_Array1OfTextOrCharacter_3: typeof StepVisual_Array1OfTextOrCharacter_3;
  StepVisual_Array1OfTextOrCharacter_4: typeof StepVisual_Array1OfTextOrCharacter_4;
  StepVisual_Array1OfTextOrCharacter_5: typeof StepVisual_Array1OfTextOrCharacter_5;
  Handle_StepVisual_Colour_1: typeof Handle_StepVisual_Colour_1;
  Handle_StepVisual_Colour_2: typeof Handle_StepVisual_Colour_2;
  Handle_StepVisual_Colour_3: typeof Handle_StepVisual_Colour_3;
  Handle_StepVisual_Colour_4: typeof Handle_StepVisual_Colour_4;
  Handle_StepVisual_BackgroundColour_1: typeof Handle_StepVisual_BackgroundColour_1;
  Handle_StepVisual_BackgroundColour_2: typeof Handle_StepVisual_BackgroundColour_2;
  Handle_StepVisual_BackgroundColour_3: typeof Handle_StepVisual_BackgroundColour_3;
  Handle_StepVisual_BackgroundColour_4: typeof Handle_StepVisual_BackgroundColour_4;
  Handle_StepVisual_CameraImage_1: typeof Handle_StepVisual_CameraImage_1;
  Handle_StepVisual_CameraImage_2: typeof Handle_StepVisual_CameraImage_2;
  Handle_StepVisual_CameraImage_3: typeof Handle_StepVisual_CameraImage_3;
  Handle_StepVisual_CameraImage_4: typeof Handle_StepVisual_CameraImage_4;
  Handle_StepVisual_CameraImage2dWithScale_1: typeof Handle_StepVisual_CameraImage2dWithScale_1;
  Handle_StepVisual_CameraImage2dWithScale_2: typeof Handle_StepVisual_CameraImage2dWithScale_2;
  Handle_StepVisual_CameraImage2dWithScale_3: typeof Handle_StepVisual_CameraImage2dWithScale_3;
  Handle_StepVisual_CameraImage2dWithScale_4: typeof Handle_StepVisual_CameraImage2dWithScale_4;
  Handle_StepVisual_CameraImage3dWithScale_1: typeof Handle_StepVisual_CameraImage3dWithScale_1;
  Handle_StepVisual_CameraImage3dWithScale_2: typeof Handle_StepVisual_CameraImage3dWithScale_2;
  Handle_StepVisual_CameraImage3dWithScale_3: typeof Handle_StepVisual_CameraImage3dWithScale_3;
  Handle_StepVisual_CameraImage3dWithScale_4: typeof Handle_StepVisual_CameraImage3dWithScale_4;
  Handle_StepVisual_CameraModel_1: typeof Handle_StepVisual_CameraModel_1;
  Handle_StepVisual_CameraModel_2: typeof Handle_StepVisual_CameraModel_2;
  Handle_StepVisual_CameraModel_3: typeof Handle_StepVisual_CameraModel_3;
  Handle_StepVisual_CameraModel_4: typeof Handle_StepVisual_CameraModel_4;
  Handle_StepVisual_CameraModelD2_1: typeof Handle_StepVisual_CameraModelD2_1;
  Handle_StepVisual_CameraModelD2_2: typeof Handle_StepVisual_CameraModelD2_2;
  Handle_StepVisual_CameraModelD2_3: typeof Handle_StepVisual_CameraModelD2_3;
  Handle_StepVisual_CameraModelD2_4: typeof Handle_StepVisual_CameraModelD2_4;
  Handle_StepVisual_CameraModelD3_1: typeof Handle_StepVisual_CameraModelD3_1;
  Handle_StepVisual_CameraModelD3_2: typeof Handle_StepVisual_CameraModelD3_2;
  Handle_StepVisual_CameraModelD3_3: typeof Handle_StepVisual_CameraModelD3_3;
  Handle_StepVisual_CameraModelD3_4: typeof Handle_StepVisual_CameraModelD3_4;
  Handle_StepVisual_CameraModelD3MultiClipping_1: typeof Handle_StepVisual_CameraModelD3MultiClipping_1;
  Handle_StepVisual_CameraModelD3MultiClipping_2: typeof Handle_StepVisual_CameraModelD3MultiClipping_2;
  Handle_StepVisual_CameraModelD3MultiClipping_3: typeof Handle_StepVisual_CameraModelD3MultiClipping_3;
  Handle_StepVisual_CameraModelD3MultiClipping_4: typeof Handle_StepVisual_CameraModelD3MultiClipping_4;
  Handle_StepVisual_CameraModelD3MultiClippingIntersection_1: typeof Handle_StepVisual_CameraModelD3MultiClippingIntersection_1;
  Handle_StepVisual_CameraModelD3MultiClippingIntersection_2: typeof Handle_StepVisual_CameraModelD3MultiClippingIntersection_2;
  Handle_StepVisual_CameraModelD3MultiClippingIntersection_3: typeof Handle_StepVisual_CameraModelD3MultiClippingIntersection_3;
  Handle_StepVisual_CameraModelD3MultiClippingIntersection_4: typeof Handle_StepVisual_CameraModelD3MultiClippingIntersection_4;
  Handle_StepVisual_CameraModelD3MultiClippingUnion_1: typeof Handle_StepVisual_CameraModelD3MultiClippingUnion_1;
  Handle_StepVisual_CameraModelD3MultiClippingUnion_2: typeof Handle_StepVisual_CameraModelD3MultiClippingUnion_2;
  Handle_StepVisual_CameraModelD3MultiClippingUnion_3: typeof Handle_StepVisual_CameraModelD3MultiClippingUnion_3;
  Handle_StepVisual_CameraModelD3MultiClippingUnion_4: typeof Handle_StepVisual_CameraModelD3MultiClippingUnion_4;
  Handle_StepVisual_CameraUsage_1: typeof Handle_StepVisual_CameraUsage_1;
  Handle_StepVisual_CameraUsage_2: typeof Handle_StepVisual_CameraUsage_2;
  Handle_StepVisual_CameraUsage_3: typeof Handle_StepVisual_CameraUsage_3;
  Handle_StepVisual_CameraUsage_4: typeof Handle_StepVisual_CameraUsage_4;
  Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_1: typeof Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_1;
  Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_2: typeof Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_2;
  Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_3: typeof Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_3;
  Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_4: typeof Handle_StepVisual_CharacterizedObjAndRepresentationAndDraughtingModel_4;
  Handle_StepVisual_ColourSpecification_1: typeof Handle_StepVisual_ColourSpecification_1;
  Handle_StepVisual_ColourSpecification_2: typeof Handle_StepVisual_ColourSpecification_2;
  Handle_StepVisual_ColourSpecification_3: typeof Handle_StepVisual_ColourSpecification_3;
  Handle_StepVisual_ColourSpecification_4: typeof Handle_StepVisual_ColourSpecification_4;
  Handle_StepVisual_ColourRgb_1: typeof Handle_StepVisual_ColourRgb_1;
  Handle_StepVisual_ColourRgb_2: typeof Handle_StepVisual_ColourRgb_2;
  Handle_StepVisual_ColourRgb_3: typeof Handle_StepVisual_ColourRgb_3;
  Handle_StepVisual_ColourRgb_4: typeof Handle_StepVisual_ColourRgb_4;
  Handle_StepVisual_HArray1OfTextOrCharacter_1: typeof Handle_StepVisual_HArray1OfTextOrCharacter_1;
  Handle_StepVisual_HArray1OfTextOrCharacter_2: typeof Handle_StepVisual_HArray1OfTextOrCharacter_2;
  Handle_StepVisual_HArray1OfTextOrCharacter_3: typeof Handle_StepVisual_HArray1OfTextOrCharacter_3;
  Handle_StepVisual_HArray1OfTextOrCharacter_4: typeof Handle_StepVisual_HArray1OfTextOrCharacter_4;
  Handle_StepVisual_CompositeText_1: typeof Handle_StepVisual_CompositeText_1;
  Handle_StepVisual_CompositeText_2: typeof Handle_StepVisual_CompositeText_2;
  Handle_StepVisual_CompositeText_3: typeof Handle_StepVisual_CompositeText_3;
  Handle_StepVisual_CompositeText_4: typeof Handle_StepVisual_CompositeText_4;
  Handle_StepVisual_CompositeTextWithExtent_1: typeof Handle_StepVisual_CompositeTextWithExtent_1;
  Handle_StepVisual_CompositeTextWithExtent_2: typeof Handle_StepVisual_CompositeTextWithExtent_2;
  Handle_StepVisual_CompositeTextWithExtent_3: typeof Handle_StepVisual_CompositeTextWithExtent_3;
  Handle_StepVisual_CompositeTextWithExtent_4: typeof Handle_StepVisual_CompositeTextWithExtent_4;
  Handle_StepVisual_HArray1OfInvisibleItem_1: typeof Handle_StepVisual_HArray1OfInvisibleItem_1;
  Handle_StepVisual_HArray1OfInvisibleItem_2: typeof Handle_StepVisual_HArray1OfInvisibleItem_2;
  Handle_StepVisual_HArray1OfInvisibleItem_3: typeof Handle_StepVisual_HArray1OfInvisibleItem_3;
  Handle_StepVisual_HArray1OfInvisibleItem_4: typeof Handle_StepVisual_HArray1OfInvisibleItem_4;
  Handle_StepVisual_Invisibility_1: typeof Handle_StepVisual_Invisibility_1;
  Handle_StepVisual_Invisibility_2: typeof Handle_StepVisual_Invisibility_2;
  Handle_StepVisual_Invisibility_3: typeof Handle_StepVisual_Invisibility_3;
  Handle_StepVisual_Invisibility_4: typeof Handle_StepVisual_Invisibility_4;
  Handle_StepVisual_ContextDependentInvisibility_1: typeof Handle_StepVisual_ContextDependentInvisibility_1;
  Handle_StepVisual_ContextDependentInvisibility_2: typeof Handle_StepVisual_ContextDependentInvisibility_2;
  Handle_StepVisual_ContextDependentInvisibility_3: typeof Handle_StepVisual_ContextDependentInvisibility_3;
  Handle_StepVisual_ContextDependentInvisibility_4: typeof Handle_StepVisual_ContextDependentInvisibility_4;
  Handle_StepVisual_HArray1OfStyleContextSelect_1: typeof Handle_StepVisual_HArray1OfStyleContextSelect_1;
  Handle_StepVisual_HArray1OfStyleContextSelect_2: typeof Handle_StepVisual_HArray1OfStyleContextSelect_2;
  Handle_StepVisual_HArray1OfStyleContextSelect_3: typeof Handle_StepVisual_HArray1OfStyleContextSelect_3;
  Handle_StepVisual_HArray1OfStyleContextSelect_4: typeof Handle_StepVisual_HArray1OfStyleContextSelect_4;
  Handle_StepVisual_OverRidingStyledItem_1: typeof Handle_StepVisual_OverRidingStyledItem_1;
  Handle_StepVisual_OverRidingStyledItem_2: typeof Handle_StepVisual_OverRidingStyledItem_2;
  Handle_StepVisual_OverRidingStyledItem_3: typeof Handle_StepVisual_OverRidingStyledItem_3;
  Handle_StepVisual_OverRidingStyledItem_4: typeof Handle_StepVisual_OverRidingStyledItem_4;
  Handle_StepVisual_ContextDependentOverRidingStyledItem_1: typeof Handle_StepVisual_ContextDependentOverRidingStyledItem_1;
  Handle_StepVisual_ContextDependentOverRidingStyledItem_2: typeof Handle_StepVisual_ContextDependentOverRidingStyledItem_2;
  Handle_StepVisual_ContextDependentOverRidingStyledItem_3: typeof Handle_StepVisual_ContextDependentOverRidingStyledItem_3;
  Handle_StepVisual_ContextDependentOverRidingStyledItem_4: typeof Handle_StepVisual_ContextDependentOverRidingStyledItem_4;
  Handle_StepVisual_CurveStyle_1: typeof Handle_StepVisual_CurveStyle_1;
  Handle_StepVisual_CurveStyle_2: typeof Handle_StepVisual_CurveStyle_2;
  Handle_StepVisual_CurveStyle_3: typeof Handle_StepVisual_CurveStyle_3;
  Handle_StepVisual_CurveStyle_4: typeof Handle_StepVisual_CurveStyle_4;
  Handle_StepVisual_HArray1OfCurveStyleFontPattern_1: typeof Handle_StepVisual_HArray1OfCurveStyleFontPattern_1;
  Handle_StepVisual_HArray1OfCurveStyleFontPattern_2: typeof Handle_StepVisual_HArray1OfCurveStyleFontPattern_2;
  Handle_StepVisual_HArray1OfCurveStyleFontPattern_3: typeof Handle_StepVisual_HArray1OfCurveStyleFontPattern_3;
  Handle_StepVisual_HArray1OfCurveStyleFontPattern_4: typeof Handle_StepVisual_HArray1OfCurveStyleFontPattern_4;
  Handle_StepVisual_CurveStyleFont_1: typeof Handle_StepVisual_CurveStyleFont_1;
  Handle_StepVisual_CurveStyleFont_2: typeof Handle_StepVisual_CurveStyleFont_2;
  Handle_StepVisual_CurveStyleFont_3: typeof Handle_StepVisual_CurveStyleFont_3;
  Handle_StepVisual_CurveStyleFont_4: typeof Handle_StepVisual_CurveStyleFont_4;
  Handle_StepVisual_DraughtingAnnotationOccurrence_1: typeof Handle_StepVisual_DraughtingAnnotationOccurrence_1;
  Handle_StepVisual_DraughtingAnnotationOccurrence_2: typeof Handle_StepVisual_DraughtingAnnotationOccurrence_2;
  Handle_StepVisual_DraughtingAnnotationOccurrence_3: typeof Handle_StepVisual_DraughtingAnnotationOccurrence_3;
  Handle_StepVisual_DraughtingAnnotationOccurrence_4: typeof Handle_StepVisual_DraughtingAnnotationOccurrence_4;
  Handle_StepVisual_HArray1OfDraughtingCalloutElement_1: typeof Handle_StepVisual_HArray1OfDraughtingCalloutElement_1;
  Handle_StepVisual_HArray1OfDraughtingCalloutElement_2: typeof Handle_StepVisual_HArray1OfDraughtingCalloutElement_2;
  Handle_StepVisual_HArray1OfDraughtingCalloutElement_3: typeof Handle_StepVisual_HArray1OfDraughtingCalloutElement_3;
  Handle_StepVisual_HArray1OfDraughtingCalloutElement_4: typeof Handle_StepVisual_HArray1OfDraughtingCalloutElement_4;
  Handle_StepVisual_DraughtingCallout_1: typeof Handle_StepVisual_DraughtingCallout_1;
  Handle_StepVisual_DraughtingCallout_2: typeof Handle_StepVisual_DraughtingCallout_2;
  Handle_StepVisual_DraughtingCallout_3: typeof Handle_StepVisual_DraughtingCallout_3;
  Handle_StepVisual_DraughtingCallout_4: typeof Handle_StepVisual_DraughtingCallout_4;
  Handle_StepVisual_PreDefinedColour_1: typeof Handle_StepVisual_PreDefinedColour_1;
  Handle_StepVisual_PreDefinedColour_2: typeof Handle_StepVisual_PreDefinedColour_2;
  Handle_StepVisual_PreDefinedColour_3: typeof Handle_StepVisual_PreDefinedColour_3;
  Handle_StepVisual_PreDefinedColour_4: typeof Handle_StepVisual_PreDefinedColour_4;
  Handle_StepVisual_DraughtingPreDefinedColour_1: typeof Handle_StepVisual_DraughtingPreDefinedColour_1;
  Handle_StepVisual_DraughtingPreDefinedColour_2: typeof Handle_StepVisual_DraughtingPreDefinedColour_2;
  Handle_StepVisual_DraughtingPreDefinedColour_3: typeof Handle_StepVisual_DraughtingPreDefinedColour_3;
  Handle_StepVisual_DraughtingPreDefinedColour_4: typeof Handle_StepVisual_DraughtingPreDefinedColour_4;
  Handle_StepVisual_PreDefinedItem_1: typeof Handle_StepVisual_PreDefinedItem_1;
  Handle_StepVisual_PreDefinedItem_2: typeof Handle_StepVisual_PreDefinedItem_2;
  Handle_StepVisual_PreDefinedItem_3: typeof Handle_StepVisual_PreDefinedItem_3;
  Handle_StepVisual_PreDefinedItem_4: typeof Handle_StepVisual_PreDefinedItem_4;
  Handle_StepVisual_PreDefinedCurveFont_1: typeof Handle_StepVisual_PreDefinedCurveFont_1;
  Handle_StepVisual_PreDefinedCurveFont_2: typeof Handle_StepVisual_PreDefinedCurveFont_2;
  Handle_StepVisual_PreDefinedCurveFont_3: typeof Handle_StepVisual_PreDefinedCurveFont_3;
  Handle_StepVisual_PreDefinedCurveFont_4: typeof Handle_StepVisual_PreDefinedCurveFont_4;
  Handle_StepVisual_DraughtingPreDefinedCurveFont_1: typeof Handle_StepVisual_DraughtingPreDefinedCurveFont_1;
  Handle_StepVisual_DraughtingPreDefinedCurveFont_2: typeof Handle_StepVisual_DraughtingPreDefinedCurveFont_2;
  Handle_StepVisual_DraughtingPreDefinedCurveFont_3: typeof Handle_StepVisual_DraughtingPreDefinedCurveFont_3;
  Handle_StepVisual_DraughtingPreDefinedCurveFont_4: typeof Handle_StepVisual_DraughtingPreDefinedCurveFont_4;
  Handle_StepVisual_ExternallyDefinedCurveFont_1: typeof Handle_StepVisual_ExternallyDefinedCurveFont_1;
  Handle_StepVisual_ExternallyDefinedCurveFont_2: typeof Handle_StepVisual_ExternallyDefinedCurveFont_2;
  Handle_StepVisual_ExternallyDefinedCurveFont_3: typeof Handle_StepVisual_ExternallyDefinedCurveFont_3;
  Handle_StepVisual_ExternallyDefinedCurveFont_4: typeof Handle_StepVisual_ExternallyDefinedCurveFont_4;
  Handle_StepVisual_ExternallyDefinedTextFont_1: typeof Handle_StepVisual_ExternallyDefinedTextFont_1;
  Handle_StepVisual_ExternallyDefinedTextFont_2: typeof Handle_StepVisual_ExternallyDefinedTextFont_2;
  Handle_StepVisual_ExternallyDefinedTextFont_3: typeof Handle_StepVisual_ExternallyDefinedTextFont_3;
  Handle_StepVisual_ExternallyDefinedTextFont_4: typeof Handle_StepVisual_ExternallyDefinedTextFont_4;
  Handle_StepVisual_HArray1OfFillStyleSelect_1: typeof Handle_StepVisual_HArray1OfFillStyleSelect_1;
  Handle_StepVisual_HArray1OfFillStyleSelect_2: typeof Handle_StepVisual_HArray1OfFillStyleSelect_2;
  Handle_StepVisual_HArray1OfFillStyleSelect_3: typeof Handle_StepVisual_HArray1OfFillStyleSelect_3;
  Handle_StepVisual_HArray1OfFillStyleSelect_4: typeof Handle_StepVisual_HArray1OfFillStyleSelect_4;
  Handle_StepVisual_FillAreaStyle_1: typeof Handle_StepVisual_FillAreaStyle_1;
  Handle_StepVisual_FillAreaStyle_2: typeof Handle_StepVisual_FillAreaStyle_2;
  Handle_StepVisual_FillAreaStyle_3: typeof Handle_StepVisual_FillAreaStyle_3;
  Handle_StepVisual_FillAreaStyle_4: typeof Handle_StepVisual_FillAreaStyle_4;
  Handle_StepVisual_FillAreaStyleColour_1: typeof Handle_StepVisual_FillAreaStyleColour_1;
  Handle_StepVisual_FillAreaStyleColour_2: typeof Handle_StepVisual_FillAreaStyleColour_2;
  Handle_StepVisual_FillAreaStyleColour_3: typeof Handle_StepVisual_FillAreaStyleColour_3;
  Handle_StepVisual_FillAreaStyleColour_4: typeof Handle_StepVisual_FillAreaStyleColour_4;
  Handle_StepVisual_HArray1OfBoxCharacteristicSelect_1: typeof Handle_StepVisual_HArray1OfBoxCharacteristicSelect_1;
  Handle_StepVisual_HArray1OfBoxCharacteristicSelect_2: typeof Handle_StepVisual_HArray1OfBoxCharacteristicSelect_2;
  Handle_StepVisual_HArray1OfBoxCharacteristicSelect_3: typeof Handle_StepVisual_HArray1OfBoxCharacteristicSelect_3;
  Handle_StepVisual_HArray1OfBoxCharacteristicSelect_4: typeof Handle_StepVisual_HArray1OfBoxCharacteristicSelect_4;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_1: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_1;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_2: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_2;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_3: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_3;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_4: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingInterectionSelect_4;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_1: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_1;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_2: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_2;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_3: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_3;
  Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_4: typeof Handle_StepVisual_HArray1OfCameraModelD3MultiClippingUnionSelect_4;
  Handle_StepVisual_HArray1OfDirectionCountSelect_1: typeof Handle_StepVisual_HArray1OfDirectionCountSelect_1;
  Handle_StepVisual_HArray1OfDirectionCountSelect_2: typeof Handle_StepVisual_HArray1OfDirectionCountSelect_2;
  Handle_StepVisual_HArray1OfDirectionCountSelect_3: typeof Handle_StepVisual_HArray1OfDirectionCountSelect_3;
  Handle_StepVisual_HArray1OfDirectionCountSelect_4: typeof Handle_StepVisual_HArray1OfDirectionCountSelect_4;
  Handle_StepVisual_HArray1OfLayeredItem_1: typeof Handle_StepVisual_HArray1OfLayeredItem_1;
  Handle_StepVisual_HArray1OfLayeredItem_2: typeof Handle_StepVisual_HArray1OfLayeredItem_2;
  Handle_StepVisual_HArray1OfLayeredItem_3: typeof Handle_StepVisual_HArray1OfLayeredItem_3;
  Handle_StepVisual_HArray1OfLayeredItem_4: typeof Handle_StepVisual_HArray1OfLayeredItem_4;
  Handle_StepVisual_HArray1OfRenderingPropertiesSelect_1: typeof Handle_StepVisual_HArray1OfRenderingPropertiesSelect_1;
  Handle_StepVisual_HArray1OfRenderingPropertiesSelect_2: typeof Handle_StepVisual_HArray1OfRenderingPropertiesSelect_2;
  Handle_StepVisual_HArray1OfRenderingPropertiesSelect_3: typeof Handle_StepVisual_HArray1OfRenderingPropertiesSelect_3;
  Handle_StepVisual_HArray1OfRenderingPropertiesSelect_4: typeof Handle_StepVisual_HArray1OfRenderingPropertiesSelect_4;
  Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_1: typeof Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_1;
  Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_2: typeof Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_2;
  Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_3: typeof Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_3;
  Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_4: typeof Handle_StepVisual_HArray1OfSurfaceStyleElementSelect_4;
  Handle_StepVisual_MarkerMember_1: typeof Handle_StepVisual_MarkerMember_1;
  Handle_StepVisual_MarkerMember_2: typeof Handle_StepVisual_MarkerMember_2;
  Handle_StepVisual_MarkerMember_3: typeof Handle_StepVisual_MarkerMember_3;
  Handle_StepVisual_MarkerMember_4: typeof Handle_StepVisual_MarkerMember_4;
  Handle_StepVisual_PresentationRepresentation_1: typeof Handle_StepVisual_PresentationRepresentation_1;
  Handle_StepVisual_PresentationRepresentation_2: typeof Handle_StepVisual_PresentationRepresentation_2;
  Handle_StepVisual_PresentationRepresentation_3: typeof Handle_StepVisual_PresentationRepresentation_3;
  Handle_StepVisual_PresentationRepresentation_4: typeof Handle_StepVisual_PresentationRepresentation_4;
  Handle_StepVisual_PresentationArea_1: typeof Handle_StepVisual_PresentationArea_1;
  Handle_StepVisual_PresentationArea_2: typeof Handle_StepVisual_PresentationArea_2;
  Handle_StepVisual_PresentationArea_3: typeof Handle_StepVisual_PresentationArea_3;
  Handle_StepVisual_PresentationArea_4: typeof Handle_StepVisual_PresentationArea_4;
  Handle_StepVisual_MechanicalDesignGeometricPresentationArea_1: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationArea_1;
  Handle_StepVisual_MechanicalDesignGeometricPresentationArea_2: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationArea_2;
  Handle_StepVisual_MechanicalDesignGeometricPresentationArea_3: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationArea_3;
  Handle_StepVisual_MechanicalDesignGeometricPresentationArea_4: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationArea_4;
  Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_1: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_1;
  Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_2: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_2;
  Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_3: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_3;
  Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_4: typeof Handle_StepVisual_MechanicalDesignGeometricPresentationRepresentation_4;
  Handle_StepVisual_NullStyleMember_1: typeof Handle_StepVisual_NullStyleMember_1;
  Handle_StepVisual_NullStyleMember_2: typeof Handle_StepVisual_NullStyleMember_2;
  Handle_StepVisual_NullStyleMember_3: typeof Handle_StepVisual_NullStyleMember_3;
  Handle_StepVisual_NullStyleMember_4: typeof Handle_StepVisual_NullStyleMember_4;
  Handle_StepVisual_PlanarExtent_1: typeof Handle_StepVisual_PlanarExtent_1;
  Handle_StepVisual_PlanarExtent_2: typeof Handle_StepVisual_PlanarExtent_2;
  Handle_StepVisual_PlanarExtent_3: typeof Handle_StepVisual_PlanarExtent_3;
  Handle_StepVisual_PlanarExtent_4: typeof Handle_StepVisual_PlanarExtent_4;
  Handle_StepVisual_PlanarBox_1: typeof Handle_StepVisual_PlanarBox_1;
  Handle_StepVisual_PlanarBox_2: typeof Handle_StepVisual_PlanarBox_2;
  Handle_StepVisual_PlanarBox_3: typeof Handle_StepVisual_PlanarBox_3;
  Handle_StepVisual_PlanarBox_4: typeof Handle_StepVisual_PlanarBox_4;
  Handle_StepVisual_PointStyle_1: typeof Handle_StepVisual_PointStyle_1;
  Handle_StepVisual_PointStyle_2: typeof Handle_StepVisual_PointStyle_2;
  Handle_StepVisual_PointStyle_3: typeof Handle_StepVisual_PointStyle_3;
  Handle_StepVisual_PointStyle_4: typeof Handle_StepVisual_PointStyle_4;
  Handle_StepVisual_PreDefinedTextFont_1: typeof Handle_StepVisual_PreDefinedTextFont_1;
  Handle_StepVisual_PreDefinedTextFont_2: typeof Handle_StepVisual_PreDefinedTextFont_2;
  Handle_StepVisual_PreDefinedTextFont_3: typeof Handle_StepVisual_PreDefinedTextFont_3;
  Handle_StepVisual_PreDefinedTextFont_4: typeof Handle_StepVisual_PreDefinedTextFont_4;
  Handle_StepVisual_PresentationLayerAssignment_1: typeof Handle_StepVisual_PresentationLayerAssignment_1;
  Handle_StepVisual_PresentationLayerAssignment_2: typeof Handle_StepVisual_PresentationLayerAssignment_2;
  Handle_StepVisual_PresentationLayerAssignment_3: typeof Handle_StepVisual_PresentationLayerAssignment_3;
  Handle_StepVisual_PresentationLayerAssignment_4: typeof Handle_StepVisual_PresentationLayerAssignment_4;
  Handle_StepVisual_PresentationLayerUsage_1: typeof Handle_StepVisual_PresentationLayerUsage_1;
  Handle_StepVisual_PresentationLayerUsage_2: typeof Handle_StepVisual_PresentationLayerUsage_2;
  Handle_StepVisual_PresentationLayerUsage_3: typeof Handle_StepVisual_PresentationLayerUsage_3;
  Handle_StepVisual_PresentationLayerUsage_4: typeof Handle_StepVisual_PresentationLayerUsage_4;
  Handle_StepVisual_PresentationSet_1: typeof Handle_StepVisual_PresentationSet_1;
  Handle_StepVisual_PresentationSet_2: typeof Handle_StepVisual_PresentationSet_2;
  Handle_StepVisual_PresentationSet_3: typeof Handle_StepVisual_PresentationSet_3;
  Handle_StepVisual_PresentationSet_4: typeof Handle_StepVisual_PresentationSet_4;
  Handle_StepVisual_PresentationSize_1: typeof Handle_StepVisual_PresentationSize_1;
  Handle_StepVisual_PresentationSize_2: typeof Handle_StepVisual_PresentationSize_2;
  Handle_StepVisual_PresentationSize_3: typeof Handle_StepVisual_PresentationSize_3;
  Handle_StepVisual_PresentationSize_4: typeof Handle_StepVisual_PresentationSize_4;
  Handle_StepVisual_PresentationStyleByContext_1: typeof Handle_StepVisual_PresentationStyleByContext_1;
  Handle_StepVisual_PresentationStyleByContext_2: typeof Handle_StepVisual_PresentationStyleByContext_2;
  Handle_StepVisual_PresentationStyleByContext_3: typeof Handle_StepVisual_PresentationStyleByContext_3;
  Handle_StepVisual_PresentationStyleByContext_4: typeof Handle_StepVisual_PresentationStyleByContext_4;
  Handle_StepVisual_PresentationView_1: typeof Handle_StepVisual_PresentationView_1;
  Handle_StepVisual_PresentationView_2: typeof Handle_StepVisual_PresentationView_2;
  Handle_StepVisual_PresentationView_3: typeof Handle_StepVisual_PresentationView_3;
  Handle_StepVisual_PresentationView_4: typeof Handle_StepVisual_PresentationView_4;
  Handle_StepVisual_PresentedItemRepresentation_1: typeof Handle_StepVisual_PresentedItemRepresentation_1;
  Handle_StepVisual_PresentedItemRepresentation_2: typeof Handle_StepVisual_PresentedItemRepresentation_2;
  Handle_StepVisual_PresentedItemRepresentation_3: typeof Handle_StepVisual_PresentedItemRepresentation_3;
  Handle_StepVisual_PresentedItemRepresentation_4: typeof Handle_StepVisual_PresentedItemRepresentation_4;
  Handle_StepVisual_SurfaceSideStyle_1: typeof Handle_StepVisual_SurfaceSideStyle_1;
  Handle_StepVisual_SurfaceSideStyle_2: typeof Handle_StepVisual_SurfaceSideStyle_2;
  Handle_StepVisual_SurfaceSideStyle_3: typeof Handle_StepVisual_SurfaceSideStyle_3;
  Handle_StepVisual_SurfaceSideStyle_4: typeof Handle_StepVisual_SurfaceSideStyle_4;
  Handle_StepVisual_SurfaceStyleBoundary_1: typeof Handle_StepVisual_SurfaceStyleBoundary_1;
  Handle_StepVisual_SurfaceStyleBoundary_2: typeof Handle_StepVisual_SurfaceStyleBoundary_2;
  Handle_StepVisual_SurfaceStyleBoundary_3: typeof Handle_StepVisual_SurfaceStyleBoundary_3;
  Handle_StepVisual_SurfaceStyleBoundary_4: typeof Handle_StepVisual_SurfaceStyleBoundary_4;
  Handle_StepVisual_SurfaceStyleControlGrid_1: typeof Handle_StepVisual_SurfaceStyleControlGrid_1;
  Handle_StepVisual_SurfaceStyleControlGrid_2: typeof Handle_StepVisual_SurfaceStyleControlGrid_2;
  Handle_StepVisual_SurfaceStyleControlGrid_3: typeof Handle_StepVisual_SurfaceStyleControlGrid_3;
  Handle_StepVisual_SurfaceStyleControlGrid_4: typeof Handle_StepVisual_SurfaceStyleControlGrid_4;
  Handle_StepVisual_SurfaceStyleFillArea_1: typeof Handle_StepVisual_SurfaceStyleFillArea_1;
  Handle_StepVisual_SurfaceStyleFillArea_2: typeof Handle_StepVisual_SurfaceStyleFillArea_2;
  Handle_StepVisual_SurfaceStyleFillArea_3: typeof Handle_StepVisual_SurfaceStyleFillArea_3;
  Handle_StepVisual_SurfaceStyleFillArea_4: typeof Handle_StepVisual_SurfaceStyleFillArea_4;
  Handle_StepVisual_SurfaceStyleParameterLine_1: typeof Handle_StepVisual_SurfaceStyleParameterLine_1;
  Handle_StepVisual_SurfaceStyleParameterLine_2: typeof Handle_StepVisual_SurfaceStyleParameterLine_2;
  Handle_StepVisual_SurfaceStyleParameterLine_3: typeof Handle_StepVisual_SurfaceStyleParameterLine_3;
  Handle_StepVisual_SurfaceStyleParameterLine_4: typeof Handle_StepVisual_SurfaceStyleParameterLine_4;
  Handle_StepVisual_SurfaceStyleReflectanceAmbient_1: typeof Handle_StepVisual_SurfaceStyleReflectanceAmbient_1;
  Handle_StepVisual_SurfaceStyleReflectanceAmbient_2: typeof Handle_StepVisual_SurfaceStyleReflectanceAmbient_2;
  Handle_StepVisual_SurfaceStyleReflectanceAmbient_3: typeof Handle_StepVisual_SurfaceStyleReflectanceAmbient_3;
  Handle_StepVisual_SurfaceStyleReflectanceAmbient_4: typeof Handle_StepVisual_SurfaceStyleReflectanceAmbient_4;
  Handle_StepVisual_SurfaceStyleRendering_1: typeof Handle_StepVisual_SurfaceStyleRendering_1;
  Handle_StepVisual_SurfaceStyleRendering_2: typeof Handle_StepVisual_SurfaceStyleRendering_2;
  Handle_StepVisual_SurfaceStyleRendering_3: typeof Handle_StepVisual_SurfaceStyleRendering_3;
  Handle_StepVisual_SurfaceStyleRendering_4: typeof Handle_StepVisual_SurfaceStyleRendering_4;
  Handle_StepVisual_SurfaceStyleRenderingWithProperties_1: typeof Handle_StepVisual_SurfaceStyleRenderingWithProperties_1;
  Handle_StepVisual_SurfaceStyleRenderingWithProperties_2: typeof Handle_StepVisual_SurfaceStyleRenderingWithProperties_2;
  Handle_StepVisual_SurfaceStyleRenderingWithProperties_3: typeof Handle_StepVisual_SurfaceStyleRenderingWithProperties_3;
  Handle_StepVisual_SurfaceStyleRenderingWithProperties_4: typeof Handle_StepVisual_SurfaceStyleRenderingWithProperties_4;
  Handle_StepVisual_SurfaceStyleSegmentationCurve_1: typeof Handle_StepVisual_SurfaceStyleSegmentationCurve_1;
  Handle_StepVisual_SurfaceStyleSegmentationCurve_2: typeof Handle_StepVisual_SurfaceStyleSegmentationCurve_2;
  Handle_StepVisual_SurfaceStyleSegmentationCurve_3: typeof Handle_StepVisual_SurfaceStyleSegmentationCurve_3;
  Handle_StepVisual_SurfaceStyleSegmentationCurve_4: typeof Handle_StepVisual_SurfaceStyleSegmentationCurve_4;
  Handle_StepVisual_SurfaceStyleSilhouette_1: typeof Handle_StepVisual_SurfaceStyleSilhouette_1;
  Handle_StepVisual_SurfaceStyleSilhouette_2: typeof Handle_StepVisual_SurfaceStyleSilhouette_2;
  Handle_StepVisual_SurfaceStyleSilhouette_3: typeof Handle_StepVisual_SurfaceStyleSilhouette_3;
  Handle_StepVisual_SurfaceStyleSilhouette_4: typeof Handle_StepVisual_SurfaceStyleSilhouette_4;
  Handle_StepVisual_SurfaceStyleTransparent_1: typeof Handle_StepVisual_SurfaceStyleTransparent_1;
  Handle_StepVisual_SurfaceStyleTransparent_2: typeof Handle_StepVisual_SurfaceStyleTransparent_2;
  Handle_StepVisual_SurfaceStyleTransparent_3: typeof Handle_StepVisual_SurfaceStyleTransparent_3;
  Handle_StepVisual_SurfaceStyleTransparent_4: typeof Handle_StepVisual_SurfaceStyleTransparent_4;
  Handle_StepVisual_SurfaceStyleUsage_1: typeof Handle_StepVisual_SurfaceStyleUsage_1;
  Handle_StepVisual_SurfaceStyleUsage_2: typeof Handle_StepVisual_SurfaceStyleUsage_2;
  Handle_StepVisual_SurfaceStyleUsage_3: typeof Handle_StepVisual_SurfaceStyleUsage_3;
  Handle_StepVisual_SurfaceStyleUsage_4: typeof Handle_StepVisual_SurfaceStyleUsage_4;
  Handle_StepVisual_Template_1: typeof Handle_StepVisual_Template_1;
  Handle_StepVisual_Template_2: typeof Handle_StepVisual_Template_2;
  Handle_StepVisual_Template_3: typeof Handle_StepVisual_Template_3;
  Handle_StepVisual_Template_4: typeof Handle_StepVisual_Template_4;
  Handle_StepVisual_TemplateInstance_1: typeof Handle_StepVisual_TemplateInstance_1;
  Handle_StepVisual_TemplateInstance_2: typeof Handle_StepVisual_TemplateInstance_2;
  Handle_StepVisual_TemplateInstance_3: typeof Handle_StepVisual_TemplateInstance_3;
  Handle_StepVisual_TemplateInstance_4: typeof Handle_StepVisual_TemplateInstance_4;
  Handle_StepVisual_TessellatedAnnotationOccurrence_1: typeof Handle_StepVisual_TessellatedAnnotationOccurrence_1;
  Handle_StepVisual_TessellatedAnnotationOccurrence_2: typeof Handle_StepVisual_TessellatedAnnotationOccurrence_2;
  Handle_StepVisual_TessellatedAnnotationOccurrence_3: typeof Handle_StepVisual_TessellatedAnnotationOccurrence_3;
  Handle_StepVisual_TessellatedAnnotationOccurrence_4: typeof Handle_StepVisual_TessellatedAnnotationOccurrence_4;
  Handle_StepVisual_TextLiteral_1: typeof Handle_StepVisual_TextLiteral_1;
  Handle_StepVisual_TextLiteral_2: typeof Handle_StepVisual_TextLiteral_2;
  Handle_StepVisual_TextLiteral_3: typeof Handle_StepVisual_TextLiteral_3;
  Handle_StepVisual_TextLiteral_4: typeof Handle_StepVisual_TextLiteral_4;
  Handle_StepVisual_TextStyle_1: typeof Handle_StepVisual_TextStyle_1;
  Handle_StepVisual_TextStyle_2: typeof Handle_StepVisual_TextStyle_2;
  Handle_StepVisual_TextStyle_3: typeof Handle_StepVisual_TextStyle_3;
  Handle_StepVisual_TextStyle_4: typeof Handle_StepVisual_TextStyle_4;
  Handle_StepVisual_TextStyleForDefinedFont_1: typeof Handle_StepVisual_TextStyleForDefinedFont_1;
  Handle_StepVisual_TextStyleForDefinedFont_2: typeof Handle_StepVisual_TextStyleForDefinedFont_2;
  Handle_StepVisual_TextStyleForDefinedFont_3: typeof Handle_StepVisual_TextStyleForDefinedFont_3;
  Handle_StepVisual_TextStyleForDefinedFont_4: typeof Handle_StepVisual_TextStyleForDefinedFont_4;
  Handle_StepVisual_TextStyleWithBoxCharacteristics_1: typeof Handle_StepVisual_TextStyleWithBoxCharacteristics_1;
  Handle_StepVisual_TextStyleWithBoxCharacteristics_2: typeof Handle_StepVisual_TextStyleWithBoxCharacteristics_2;
  Handle_StepVisual_TextStyleWithBoxCharacteristics_3: typeof Handle_StepVisual_TextStyleWithBoxCharacteristics_3;
  Handle_StepVisual_TextStyleWithBoxCharacteristics_4: typeof Handle_StepVisual_TextStyleWithBoxCharacteristics_4;
  Handle_StepVisual_ViewVolume_1: typeof Handle_StepVisual_ViewVolume_1;
  Handle_StepVisual_ViewVolume_2: typeof Handle_StepVisual_ViewVolume_2;
  Handle_StepVisual_ViewVolume_3: typeof Handle_StepVisual_ViewVolume_3;
  Handle_StepVisual_ViewVolume_4: typeof Handle_StepVisual_ViewVolume_4;
  StepDimTol_GeometricToleranceModifier: typeof StepDimTol_GeometricToleranceModifier;
  StepDimTol_GeometricToleranceType: typeof StepDimTol_GeometricToleranceType;
  StepDimTol_DatumReferenceModifierType: typeof StepDimTol_DatumReferenceModifierType;
  StepDimTol_SimpleDatumReferenceModifier: typeof StepDimTol_SimpleDatumReferenceModifier;
  StepDimTol_AreaUnitType: typeof StepDimTol_AreaUnitType;
  StepDimTol_LimitCondition: typeof StepDimTol_LimitCondition;
  StepVisual_CentralOrParallel: typeof StepVisual_CentralOrParallel;
  StepVisual_MarkerType: typeof StepVisual_MarkerType;
  StepVisual_NullStyle: typeof StepVisual_NullStyle;
  StepVisual_ShadingSurfaceMethod: typeof StepVisual_ShadingSurfaceMethod;
  StepVisual_SurfaceSide: typeof StepVisual_SurfaceSide;
  StepVisual_TextPath: typeof StepVisual_TextPath;
};
