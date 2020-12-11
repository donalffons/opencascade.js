declare const libName = "./modules/TKSTEPBase.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class RWStepBasic_RWAction {
  constructor()
  ReadStep(data: Handle_StepData_StepReaderData, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWActionAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWActionMethod {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWActionRequestAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWActionRequestSolution {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWAddress {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWApplicationContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWApplicationContextElement {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWApplicationProtocolDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWApproval {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWApprovalDateTime {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWApprovalPersonOrganization {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWApprovalRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWApprovalRole {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWApprovalStatus {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWCalendarDate {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWCertification {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWCertificationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWCertificationType {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWCharacterizedObject {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWContract {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWContractAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWContractType {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndAreaUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndLengthUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndMassUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndPlaneAngleUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndRatioUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndSolidAngleUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndTimeUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWConversionBasedUnitAndVolumeUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWCoordinatedUniversalTimeOffset {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWDate {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWDateAndTime {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDateRole {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWDateTimeRole {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWDerivedUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDerivedUnitElement {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDimensionalExponents {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWDocument {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDocumentFile {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDocumentProductAssociation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDocumentProductEquivalence {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDocumentRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDocumentRepresentationType {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDocumentType {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWDocumentUsageConstraint {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWEffectivity {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWEffectivityAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWEulerAngles {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWExternalIdentificationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWExternalSource {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWExternallyDefinedItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWGeneralProperty {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWGroup {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWGroupAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWGroupRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWIdentificationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWIdentificationRole {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWLengthMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWLengthUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWLocalTime {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWMassMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWMassUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWMechanicalContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWNameAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWNamedUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWObjectRole {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWOrdinalDate {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWOrganization {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWOrganizationRole {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWOrganizationalAddress {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWPerson {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWPersonAndOrganization {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWPersonAndOrganizationRole {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWPersonalAddress {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWPlaneAngleMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWPlaneAngleUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProduct {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductCategory {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWProductCategoryRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductConceptContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionEffectivity {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionFormation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionFormationRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionFormationWithSpecifiedSource {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionReference {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionReferenceWithLocalRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductDefinitionWithAssociatedDocuments {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductRelatedProductCategory {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWProductType {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWRatioMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWRoleAssociation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWSecurityClassification {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWSecurityClassificationLevel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  DecodePrefix(aPrefix: StepBasic_SiPrefix, text: Standard_CString): Standard_Boolean;
  DecodeName(aName: StepBasic_SiUnitName, text: Standard_CString): Standard_Boolean;
  EncodePrefix(aPrefix: StepBasic_SiPrefix): TCollection_AsciiString;
  EncodeName(aName: StepBasic_SiUnitName): TCollection_AsciiString;
}

export declare class RWStepBasic_RWSiUnitAndAreaUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndLengthUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndMassUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndPlaneAngleUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndRatioUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndSolidAngleUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndThermodynamicTemperatureUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndTimeUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSiUnitAndVolumeUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepBasic_RWSolidAngleMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWSolidAngleUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWThermodynamicTemperatureUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWUncertaintyMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWVersionedActionRequest {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepBasic_RWWeekOfYearAndDayDate {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWAllAroundShapeAspect {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWApex {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWAssemblyComponentUsage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWAssemblyComponentUsageSubstitute {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWBetweenShapeAspect {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWCentreOfSymmetry {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWCharacterizedRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWCompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWCompShAspAndDatumFeatAndShAsp {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWCompositeGroupShapeAspect {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWCompositeShapeAspect {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWCompoundRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWConfigurationDesign {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWConfigurationEffectivity {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWConfigurationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWConstructiveGeometryRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWConstructiveGeometryRepresentationRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWContinuosShapeAspect {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWDataEnvironment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWDefinitionalRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWDerivedShapeAspect {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWDescriptiveRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWExtension {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWFeatureForDatumTargetRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWFunctionallyDefinedTransformation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWGeometricAlignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWGlobalUncertaintyAssignedContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWGlobalUnitAssignedContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWIntegerRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWItemDefinedTransformation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWMakeFromUsageOption {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWMappedItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWMaterialDesignation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWMaterialProperty {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWMaterialPropertyRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWMeasureRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWParallelOffset {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWParametricRepresentationContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWPerpendicularTo {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWProductConcept {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWProductDefinitionShape {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWPropertyDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWPropertyDefinitionRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWPropertyDefinitionRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWQuantifiedAssemblyComponentUsage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWReprItemAndLengthMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWReprItemAndLengthMeasureWithUnitAndQRI {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnit {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnitAndQRI {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWRepresentationContext {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepRepr_RWRepresentationMap {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWRepresentationRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWRepresentationRelationshipWithTransformation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWShapeAspect {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWShapeAspectDerivingRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWShapeAspectRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWShapeAspectTransition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWShapeRepresentationRelationshipWithTransformation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWSpecifiedHigherUsageOccurrence {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWStructuralResponseProperty {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWStructuralResponsePropertyDefinitionRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWTangent {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepRepr_RWValueRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWAdvancedBrepShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWAdvancedFace {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWAngularLocation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWAngularSize {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWBlock {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWBooleanResult {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWBoxDomain {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWBoxedHalfSpace {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWClosedShell {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWCompoundShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWConnectedEdgeSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWConnectedFaceSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWConnectedFaceShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWConnectedFaceSubSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWContextDependentShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWCsgShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWCsgSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWDefinitionalRepresentationAndShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWDimensionalCharacteristicRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWDimensionalLocation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWDimensionalLocationWithPath {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWDimensionalSize {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWDimensionalSizeWithPath {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWEdge {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWEdgeBasedWireframeModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWEdgeBasedWireframeShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWExtrudedAreaSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWExtrudedFaceSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWFace {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWFaceBasedSurfaceModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWFaceOuterBound {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWFaceSurface {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWFacetedBrep {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWFacetedBrepAndBrepWithVoids {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWFacetedBrepShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWGeometricCurveSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWGeometricSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWGeometricallyBoundedSurfaceShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWGeometricallyBoundedWireframeShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWHalfSpaceSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWLimitsAndFits {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWLoop {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWLoopAndPath {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWManifoldSolidBrep {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWManifoldSurfaceShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWMeasureQualification {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWMeasureRepresentationItemAndQualifiedRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWNonManifoldSurfaceShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWOpenShell {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWOrientedClosedShell {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWOrientedEdge {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWOrientedFace {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWOrientedOpenShell {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWOrientedPath {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWPath {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWPlusMinusTolerance {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWPointRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWPolyLoop {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWPrecisionQualifier {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWQualifiedRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWRevolvedAreaSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWRevolvedFaceSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWRightAngularWedge {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWRightCircularCone {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWRightCircularCylinder {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWSeamEdge {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWShapeDefinitionRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWShapeDimensionRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWShapeRepresentationWithParameters {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWShellBasedSurfaceModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWSolidModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWSolidReplica {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWSphere {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWSubedge {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWSubface {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWSweptAreaSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWSweptFaceSolid {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWToleranceValue {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWTopologicalRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWTorus {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWTransitionalShapeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWTypeQualifier {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWValueFormatTypeQualifier {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWVertex {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWStepShape_RWVertexLoop {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepShape_RWVertexPoint {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class StepRepr_RepresentationItem extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_GeometricRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinition extends Standard_Transient {
  constructor()
  Init(aId: any, aDescription: any, aFormation: any, aFrameOfReference: any): void;
  SetId(aId: any): void;
  Id(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetFormation(aFormation: any): void;
  Formation(): any;
  SetFrameOfReference(aFrameOfReference: any): void;
  FrameOfReference(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_RepresentedDefinition extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  GeneralProperty(): any;
  PropertyDefinition(): any;
  PropertyDefinitionRelationship(): any;
  ShapeAspect(): any;
  ShapeAspectRelationship(): any;
}

export declare class StepRepr_PropertyDefinitionRepresentation extends Standard_Transient {
  constructor()
  Init(aDefinition: StepRepr_RepresentedDefinition, aUsedRepresentation: any): void;
  Definition(): StepRepr_RepresentedDefinition;
  SetDefinition(Definition: StepRepr_RepresentedDefinition): void;
  UsedRepresentation(): any;
  SetUsedRepresentation(UsedRepresentation: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ShapeDefinitionRepresentation extends StepRepr_PropertyDefinitionRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Unit extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  NamedUnit(): any;
  DerivedUnit(): any;
}

export declare class StepBasic_MeasureWithUnit extends Standard_Transient {
  constructor()
  Init(aValueComponent: any, aUnitComponent: StepBasic_Unit): void;
  SetValueComponent(aValueComponent: Standard_Real): void;
  ValueComponent(): Standard_Real;
  ValueComponentMember(): any;
  SetValueComponentMember(val: any): void;
  SetUnitComponent(aUnitComponent: StepBasic_Unit): void;
  UnitComponent(): StepBasic_Unit;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_LengthMeasureWithUnit extends StepBasic_MeasureWithUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Placement extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aLocation: any): void;
  SetLocation(aLocation: any): void;
  Location(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Axis2Placement3d extends StepGeom_Placement {
  constructor()
  Init(aName: any, aLocation: any, hasAaxis: Standard_Boolean, aAxis: any, hasArefDirection: Standard_Boolean, aRefDirection: any): void;
  SetAxis(aAxis: any): void;
  UnSetAxis(): void;
  Axis(): any;
  HasAxis(): Standard_Boolean;
  SetRefDirection(aRefDirection: any): void;
  UnSetRefDirection(): void;
  RefDirection(): any;
  HasRefDirection(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CompoundRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  Init(aName: any, item_element: any): void;
  ItemElement(): any;
  NbItemElement(): Standard_Integer;
  SetItemElement(item_element: any): void;
  ItemElementValue(num: Standard_Integer): any;
  SetItemElementValue(num: Standard_Integer, anelement: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_LimitsAndFits extends Standard_Transient {
  constructor()
  Init(form_variance: any, zone_variance: any, grade: any, source: any): void;
  FormVariance(): any;
  SetFormVariance(form_variance: any): void;
  ZoneVariance(): any;
  SetZoneVariance(zone_variance: any): void;
  Grade(): any;
  SetGrade(grade: any): void;
  Source(): any;
  SetSource(source: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ShapeAspect extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aOfShape: any, aProductDefinitional: StepData_Logical): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetOfShape(aOfShape: any): void;
  OfShape(): any;
  SetProductDefinitional(aProductDefinitional: StepData_Logical): void;
  ProductDefinitional(): StepData_Logical;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CharacterizedDefinition extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CharacterizedObject(): any;
  ProductDefinition(): any;
  ProductDefinitionRelationship(): any;
  ProductDefinitionShape(): any;
  ShapeAspect(): any;
  ShapeAspectRelationship(): any;
  DocumentFile(): any;
}

export declare class StepRepr_PropertyDefinition extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any, aDefinition: StepRepr_CharacterizedDefinition): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  Definition(): StepRepr_CharacterizedDefinition;
  SetDefinition(Definition: StepRepr_CharacterizedDefinition): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ProductDefinitionShape extends StepRepr_PropertyDefinition {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_Representation extends Standard_Transient {
  constructor()
  Init(aName: any, aItems: any, aContextOfItems: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): any;
  NbItems(): Standard_Integer;
  SetContextOfItems(aContextOfItems: any): void;
  ContextOfItems(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ApprovalAssignment extends Standard_Transient {
  constructor();
  Init(aAssignedApproval: any): void;
  SetAssignedApproval(aAssignedApproval: any): void;
  AssignedApproval(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_CertificationAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedCertification: any): void;
  AssignedCertification(): any;
  SetAssignedCertification(AssignedCertification: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ContractAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedContract: any): void;
  AssignedContract(): any;
  SetAssignedContract(AssignedContract: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DateAndTimeAssignment extends Standard_Transient {
  constructor();
  Init(aAssignedDateAndTime: any, aRole: any): void;
  SetAssignedDateAndTime(aAssignedDateAndTime: any): void;
  AssignedDateAndTime(): any;
  SetRole(aRole: any): void;
  Role(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PersonAndOrganizationAssignment extends Standard_Transient {
  constructor();
  Init(aAssignedPersonAndOrganization: any, aRole: any): void;
  SetAssignedPersonAndOrganization(aAssignedPersonAndOrganization: any): void;
  AssignedPersonAndOrganization(): any;
  SetRole(aRole: any): void;
  Role(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SecurityClassificationAssignment extends Standard_Transient {
  constructor();
  Init(aAssignedSecurityClassification: any): void;
  SetAssignedSecurityClassification(aAssignedSecurityClassification: any): void;
  AssignedSecurityClassification(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DocumentReference extends Standard_Transient {
  constructor();
  Init0(aAssignedDocument: any, aSource: any): void;
  AssignedDocument(): any;
  SetAssignedDocument(aAssignedDocument: any): void;
  Source(): any;
  SetSource(aSource: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ActionAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedAction: any): void;
  AssignedAction(): any;
  SetAssignedAction(AssignedAction: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ActionRequestAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedActionRequest: any): void;
  AssignedActionRequest(): any;
  SetAssignedActionRequest(AssignedActionRequest: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_MaterialPropertyRepresentation extends StepRepr_PropertyDefinitionRepresentation {
  constructor()
  Init(aPropertyDefinitionRepresentation_Definition: StepRepr_RepresentedDefinition, aPropertyDefinitionRepresentation_UsedRepresentation: any, aDependentEnvironment: any): void;
  DependentEnvironment(): any;
  SetDependentEnvironment(DependentEnvironment: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DateAssignment extends Standard_Transient {
  constructor();
  Init(aAssignedDate: any, aRole: any): void;
  SetAssignedDate(aAssignedDate: any): void;
  AssignedDate(): any;
  SetRole(aRole: any): void;
  Role(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_IdentificationAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedId: any, aRole: any): void;
  AssignedId(): any;
  SetAssignedId(AssignedId: any): void;
  Role(): any;
  SetRole(Role: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ExternalIdentificationAssignment extends StepBasic_IdentificationAssignment {
  constructor()
  Init(aIdentificationAssignment_AssignedId: any, aIdentificationAssignment_Role: any, aSource: any): void;
  Source(): any;
  SetSource(Source: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_GroupAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedGroup: any): void;
  AssignedGroup(): any;
  SetAssignedGroup(AssignedGroup: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_OrganizationAssignment extends Standard_Transient {
  constructor();
  Init(aAssignedOrganization: any, aRole: any): void;
  SetAssignedOrganization(aAssignedOrganization: any): void;
  AssignedOrganization(): any;
  SetRole(aRole: any): void;
  Role(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Approval extends Standard_Transient {
  constructor()
  Init(aStatus: any, aLevel: any): void;
  SetStatus(aStatus: any): void;
  Status(): any;
  SetLevel(aLevel: any): void;
  Level(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Group extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_GeneralProperty extends Standard_Transient {
  constructor()
  Init(aId: any, aName: any, hasDescription: Standard_Boolean, aDescription: any): void;
  Id(): any;
  SetId(Id: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Action extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any, aChosenMethod: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  ChosenMethod(): any;
  SetChosenMethod(ChosenMethod: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ActionMethod extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any, aConsequence: any, aPurpose: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  Consequence(): any;
  SetConsequence(Consequence: any): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ActionRequestSolution extends Standard_Transient {
  constructor()
  Init(aMethod: any, aRequest: any): void;
  Method(): any;
  SetMethod(Method: any): void;
  Request(): any;
  SetRequest(Request: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Address extends Standard_Transient {
  constructor()
  Init(hasAinternalLocation: Standard_Boolean, aInternalLocation: any, hasAstreetNumber: Standard_Boolean, aStreetNumber: any, hasAstreet: Standard_Boolean, aStreet: any, hasApostalBox: Standard_Boolean, aPostalBox: any, hasAtown: Standard_Boolean, aTown: any, hasAregion: Standard_Boolean, aRegion: any, hasApostalCode: Standard_Boolean, aPostalCode: any, hasAcountry: Standard_Boolean, aCountry: any, hasAfacsimileNumber: Standard_Boolean, aFacsimileNumber: any, hasAtelephoneNumber: Standard_Boolean, aTelephoneNumber: any, hasAelectronicMailAddress: Standard_Boolean, aElectronicMailAddress: any, hasAtelexNumber: Standard_Boolean, aTelexNumber: any): void;
  SetInternalLocation(aInternalLocation: any): void;
  UnSetInternalLocation(): void;
  InternalLocation(): any;
  HasInternalLocation(): Standard_Boolean;
  SetStreetNumber(aStreetNumber: any): void;
  UnSetStreetNumber(): void;
  StreetNumber(): any;
  HasStreetNumber(): Standard_Boolean;
  SetStreet(aStreet: any): void;
  UnSetStreet(): void;
  Street(): any;
  HasStreet(): Standard_Boolean;
  SetPostalBox(aPostalBox: any): void;
  UnSetPostalBox(): void;
  PostalBox(): any;
  HasPostalBox(): Standard_Boolean;
  SetTown(aTown: any): void;
  UnSetTown(): void;
  Town(): any;
  HasTown(): Standard_Boolean;
  SetRegion(aRegion: any): void;
  UnSetRegion(): void;
  Region(): any;
  HasRegion(): Standard_Boolean;
  SetPostalCode(aPostalCode: any): void;
  UnSetPostalCode(): void;
  PostalCode(): any;
  HasPostalCode(): Standard_Boolean;
  SetCountry(aCountry: any): void;
  UnSetCountry(): void;
  Country(): any;
  HasCountry(): Standard_Boolean;
  SetFacsimileNumber(aFacsimileNumber: any): void;
  UnSetFacsimileNumber(): void;
  FacsimileNumber(): any;
  HasFacsimileNumber(): Standard_Boolean;
  SetTelephoneNumber(aTelephoneNumber: any): void;
  UnSetTelephoneNumber(): void;
  TelephoneNumber(): any;
  HasTelephoneNumber(): Standard_Boolean;
  SetElectronicMailAddress(aElectronicMailAddress: any): void;
  UnSetElectronicMailAddress(): void;
  ElectronicMailAddress(): any;
  HasElectronicMailAddress(): Standard_Boolean;
  SetTelexNumber(aTelexNumber: any): void;
  UnSetTelexNumber(): void;
  TelexNumber(): any;
  HasTelexNumber(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ApplicationContext extends Standard_Transient {
  constructor()
  Init(aApplication: any): void;
  SetApplication(aApplication: any): void;
  Application(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ApplicationContextElement extends Standard_Transient {
  constructor()
  Init(aName: any, aFrameOfReference: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetFrameOfReference(aFrameOfReference: any): void;
  FrameOfReference(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ApplicationProtocolDefinition extends Standard_Transient {
  constructor()
  Init(aStatus: any, aApplicationInterpretedModelSchemaName: any, aApplicationProtocolYear: Standard_Integer, aApplication: any): void;
  SetStatus(aStatus: any): void;
  Status(): any;
  SetApplicationInterpretedModelSchemaName(aApplicationInterpretedModelSchemaName: any): void;
  ApplicationInterpretedModelSchemaName(): any;
  SetApplicationProtocolYear(aApplicationProtocolYear: Standard_Integer): void;
  ApplicationProtocolYear(): Standard_Integer;
  SetApplication(aApplication: any): void;
  Application(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DateTimeSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Date(): any;
  LocalTime(): any;
  DateAndTime(): any;
}

export declare class StepBasic_ApprovalDateTime extends Standard_Transient {
  constructor()
  Init(aDateTime: StepBasic_DateTimeSelect, aDatedApproval: any): void;
  SetDateTime(aDateTime: StepBasic_DateTimeSelect): void;
  DateTime(): StepBasic_DateTimeSelect;
  SetDatedApproval(aDatedApproval: any): void;
  DatedApproval(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PersonOrganizationSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Person(): any;
  Organization(): any;
  PersonAndOrganization(): any;
}

export declare class StepBasic_ApprovalPersonOrganization extends Standard_Transient {
  constructor()
  Init(aPersonOrganization: StepBasic_PersonOrganizationSelect, aAuthorizedApproval: any, aRole: any): void;
  SetPersonOrganization(aPersonOrganization: StepBasic_PersonOrganizationSelect): void;
  PersonOrganization(): StepBasic_PersonOrganizationSelect;
  SetAuthorizedApproval(aAuthorizedApproval: any): void;
  AuthorizedApproval(): any;
  SetRole(aRole: any): void;
  Role(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ApprovalRelationship extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aRelatingApproval: any, aRelatedApproval: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetRelatingApproval(aRelatingApproval: any): void;
  RelatingApproval(): any;
  SetRelatedApproval(aRelatedApproval: any): void;
  RelatedApproval(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ApprovalRole extends Standard_Transient {
  constructor()
  Init(aRole: any): void;
  SetRole(aRole: any): void;
  Role(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ApprovalStatus extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_NamedUnit extends Standard_Transient {
  constructor()
  Init(aDimensions: any): void;
  SetDimensions(aDimensions: any): void;
  Dimensions(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_AreaUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DerivedUnitElement extends Standard_Transient {
  constructor()
  Init(aUnit: any, aExponent: Standard_Real): void;
  SetUnit(aUnit: any): void;
  Unit(): any;
  SetExponent(aExponent: Standard_Real): void;
  Exponent(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Document extends Standard_Transient {
  constructor()
  Init(aId: any, aName: any, hasDescription: Standard_Boolean, aDescription: any, aKind: any): void;
  Id(): any;
  SetId(Id: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  Kind(): any;
  SetKind(Kind: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Organization extends Standard_Transient {
  constructor()
  Init(hasAid: Standard_Boolean, aId: any, aName: any, aDescription: any): void;
  SetId(aId: any): void;
  UnSetId(): void;
  Id(): any;
  HasId(): Standard_Boolean;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Person extends Standard_Transient {
  constructor()
  Init(aId: any, hasAlastName: Standard_Boolean, aLastName: any, hasAfirstName: Standard_Boolean, aFirstName: any, hasAmiddleNames: Standard_Boolean, aMiddleNames: any, hasAprefixTitles: Standard_Boolean, aPrefixTitles: any, hasAsuffixTitles: Standard_Boolean, aSuffixTitles: any): void;
  SetId(aId: any): void;
  Id(): any;
  SetLastName(aLastName: any): void;
  UnSetLastName(): void;
  LastName(): any;
  HasLastName(): Standard_Boolean;
  SetFirstName(aFirstName: any): void;
  UnSetFirstName(): void;
  FirstName(): any;
  HasFirstName(): Standard_Boolean;
  SetMiddleNames(aMiddleNames: any): void;
  UnSetMiddleNames(): void;
  MiddleNames(): any;
  HasMiddleNames(): Standard_Boolean;
  MiddleNamesValue(num: Standard_Integer): any;
  NbMiddleNames(): Standard_Integer;
  SetPrefixTitles(aPrefixTitles: any): void;
  UnSetPrefixTitles(): void;
  PrefixTitles(): any;
  HasPrefixTitles(): Standard_Boolean;
  PrefixTitlesValue(num: Standard_Integer): any;
  NbPrefixTitles(): Standard_Integer;
  SetSuffixTitles(aSuffixTitles: any): void;
  UnSetSuffixTitles(): void;
  SuffixTitles(): any;
  HasSuffixTitles(): Standard_Boolean;
  SuffixTitlesValue(num: Standard_Integer): any;
  NbSuffixTitles(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductContext extends StepBasic_ApplicationContextElement {
  constructor()
  Init(aName: any, aFrameOfReference: any, aDisciplineType: any): void;
  SetDisciplineType(aDisciplineType: any): void;
  DisciplineType(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Product extends Standard_Transient {
  constructor()
  Init(aId: any, aName: any, aDescription: any, aFrameOfReference: any): void;
  SetId(aId: any): void;
  Id(): any;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetFrameOfReference(aFrameOfReference: any): void;
  FrameOfReference(): any;
  FrameOfReferenceValue(num: Standard_Integer): any;
  NbFrameOfReference(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_UncertaintyMeasureWithUnit extends StepBasic_MeasureWithUnit {
  constructor()
  Init(aValueComponent: any, aUnitComponent: StepBasic_Unit, aName: any, aDescription: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Date extends Standard_Transient {
  constructor()
  Init(aYearComponent: Standard_Integer): void;
  SetYearComponent(aYearComponent: Standard_Integer): void;
  YearComponent(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_CalendarDate extends StepBasic_Date {
  constructor()
  Init(aYearComponent: Standard_Integer, aDayComponent: Standard_Integer, aMonthComponent: Standard_Integer): void;
  SetDayComponent(aDayComponent: Standard_Integer): void;
  DayComponent(): Standard_Integer;
  SetMonthComponent(aMonthComponent: Standard_Integer): void;
  MonthComponent(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Certification extends Standard_Transient {
  constructor()
  Init(aName: any, aPurpose: any, aKind: any): void;
  Name(): any;
  SetName(Name: any): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  Kind(): any;
  SetKind(Kind: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_CertificationType extends Standard_Transient {
  constructor()
  Init(aDescription: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_CharacterizedObject extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Contract extends Standard_Transient {
  constructor()
  Init(aName: any, aPurpose: any, aKind: any): void;
  Name(): any;
  SetName(Name: any): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  Kind(): any;
  SetKind(Kind: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ContractType extends Standard_Transient {
  constructor()
  Init(aDescription: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnit extends StepBasic_NamedUnit {
  constructor()
  Init(aDimensions: any, aName: any, aConversionFactor: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetConversionFactor(aConversionFactor: any): void;
  ConversionFactor(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndAreaUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  SetAreaUnit(anAreaUnit: any): void;
  AreaUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndLengthUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  Init(aDimensions: any, aName: any, aConversionFactor: any): void;
  SetLengthUnit(aLengthUnit: any): void;
  LengthUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndMassUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  Init(aDimensions: any, aName: any, aConversionFactor: any): void;
  SetMassUnit(aMassUnit: any): void;
  MassUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndPlaneAngleUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  Init(aDimensions: any, aName: any, aConversionFactor: any): void;
  SetPlaneAngleUnit(aPlaneAngleUnit: any): void;
  PlaneAngleUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndRatioUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  Init(aDimensions: any, aName: any, aConversionFactor: any): void;
  SetRatioUnit(aRatioUnit: any): void;
  RatioUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndSolidAngleUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  Init(aDimensions: any, aName: any, aConversionFactor: any): void;
  SetSolidAngleUnit(aSolidAngleUnit: any): void;
  SolidAngleUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndTimeUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  Init(aDimensions: any, aName: any, aConversionFactor: any): void;
  SetTimeUnit(aTimeUnit: any): void;
  TimeUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ConversionBasedUnitAndVolumeUnit extends StepBasic_ConversionBasedUnit {
  constructor()
  SetVolumeUnit(aVolumeUnit: any): void;
  VolumeUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_CoordinatedUniversalTimeOffset extends Standard_Transient {
  constructor()
  Init(aHourOffset: Standard_Integer, hasAminuteOffset: Standard_Boolean, aMinuteOffset: Standard_Integer, aSense: StepBasic_AheadOrBehind): void;
  SetHourOffset(aHourOffset: Standard_Integer): void;
  HourOffset(): Standard_Integer;
  SetMinuteOffset(aMinuteOffset: Standard_Integer): void;
  UnSetMinuteOffset(): void;
  MinuteOffset(): Standard_Integer;
  HasMinuteOffset(): Standard_Boolean;
  SetSense(aSense: StepBasic_AheadOrBehind): void;
  Sense(): StepBasic_AheadOrBehind;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DateAndTime extends Standard_Transient {
  constructor()
  Init(aDateComponent: any, aTimeComponent: any): void;
  SetDateComponent(aDateComponent: any): void;
  DateComponent(): any;
  SetTimeComponent(aTimeComponent: any): void;
  TimeComponent(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DateRole extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DateTimeRole extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DerivedUnit extends Standard_Transient {
  constructor()
  Init(elements: any): void;
  SetElements(elements: any): void;
  Elements(): any;
  NbElements(): Standard_Integer;
  ElementsValue(num: Standard_Integer): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionContext extends StepBasic_ApplicationContextElement {
  constructor()
  Init(aName: any, aFrameOfReference: any, aLifeCycleStage: any): void;
  SetLifeCycleStage(aLifeCycleStage: any): void;
  LifeCycleStage(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DesignContext extends StepBasic_ProductDefinitionContext {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DigitalDocument extends StepBasic_Document {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DimensionalExponents extends Standard_Transient {
  constructor()
  Init(aLengthExponent: Standard_Real, aMassExponent: Standard_Real, aTimeExponent: Standard_Real, aElectricCurrentExponent: Standard_Real, aThermodynamicTemperatureExponent: Standard_Real, aAmountOfSubstanceExponent: Standard_Real, aLuminousIntensityExponent: Standard_Real): void;
  SetLengthExponent(aLengthExponent: Standard_Real): void;
  LengthExponent(): Standard_Real;
  SetMassExponent(aMassExponent: Standard_Real): void;
  MassExponent(): Standard_Real;
  SetTimeExponent(aTimeExponent: Standard_Real): void;
  TimeExponent(): Standard_Real;
  SetElectricCurrentExponent(aElectricCurrentExponent: Standard_Real): void;
  ElectricCurrentExponent(): Standard_Real;
  SetThermodynamicTemperatureExponent(aThermodynamicTemperatureExponent: Standard_Real): void;
  ThermodynamicTemperatureExponent(): Standard_Real;
  SetAmountOfSubstanceExponent(aAmountOfSubstanceExponent: Standard_Real): void;
  AmountOfSubstanceExponent(): Standard_Real;
  SetLuminousIntensityExponent(aLuminousIntensityExponent: Standard_Real): void;
  LuminousIntensityExponent(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DocumentFile extends StepBasic_Document {
  constructor()
  Init(aDocument_Id: any, aDocument_Name: any, hasDocument_Description: Standard_Boolean, aDocument_Description: any, aDocument_Kind: any, aCharacterizedObject_Name: any, hasCharacterizedObject_Description: Standard_Boolean, aCharacterizedObject_Description: any): void;
  CharacterizedObject(): any;
  SetCharacterizedObject(CharacterizedObject: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductOrFormationOrDefinition extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Product(): any;
  ProductDefinitionFormation(): any;
  ProductDefinition(): any;
}

export declare class StepBasic_DocumentProductAssociation extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any, aRelatingDocument: any, aRelatedProduct: StepBasic_ProductOrFormationOrDefinition): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  RelatingDocument(): any;
  SetRelatingDocument(RelatingDocument: any): void;
  RelatedProduct(): StepBasic_ProductOrFormationOrDefinition;
  SetRelatedProduct(RelatedProduct: StepBasic_ProductOrFormationOrDefinition): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DocumentProductEquivalence extends StepBasic_DocumentProductAssociation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DocumentRelationship extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aRelating: any, aRelated: any): void;
  Name(): any;
  SetName(aName: any): void;
  Description(): any;
  SetDescription(aDescription: any): void;
  RelatingDocument(): any;
  SetRelatingDocument(aRelating: any): void;
  RelatedDocument(): any;
  SetRelatedDocument(aRelated: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DocumentRepresentationType extends Standard_Transient {
  constructor()
  Init(aName: any, aRepresentedDocument: any): void;
  Name(): any;
  SetName(Name: any): void;
  RepresentedDocument(): any;
  SetRepresentedDocument(RepresentedDocument: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DocumentType extends Standard_Transient {
  constructor()
  Init(apdt: any): void;
  ProductDataType(): any;
  SetProductDataType(apdt: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_DocumentUsageConstraint extends Standard_Transient {
  constructor()
  Init(aSource: any, ase: any, asev: any): void;
  Source(): any;
  SetSource(aSource: any): void;
  SubjectElement(): any;
  SetSubjectElement(ase: any): void;
  SubjectElementValue(): any;
  SetSubjectElementValue(asev: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_Effectivity extends Standard_Transient {
  constructor()
  Init(aid: any): void;
  Id(): any;
  SetId(aid: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_EffectivityAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedEffectivity: any): void;
  AssignedEffectivity(): any;
  SetAssignedEffectivity(AssignedEffectivity: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_EulerAngles extends Standard_Transient {
  constructor()
  Init(aAngles: any): void;
  Angles(): any;
  SetAngles(Angles: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SourceItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  NewMember(): any;
  Identifier(): any;
}

export declare class StepBasic_ExternalSource extends Standard_Transient {
  constructor()
  Init(aSourceId: StepBasic_SourceItem): void;
  SourceId(): StepBasic_SourceItem;
  SetSourceId(SourceId: StepBasic_SourceItem): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ExternallyDefinedItem extends Standard_Transient {
  constructor()
  Init(aItemId: StepBasic_SourceItem, aSource: any): void;
  ItemId(): StepBasic_SourceItem;
  SetItemId(ItemId: StepBasic_SourceItem): void;
  Source(): any;
  SetSource(Source: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_GroupRelationship extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any, aRelatingGroup: any, aRelatedGroup: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  RelatingGroup(): any;
  SetRelatingGroup(RelatingGroup: any): void;
  RelatedGroup(): any;
  SetRelatedGroup(RelatedGroup: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_IdentificationRole extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_LengthUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_LocalTime extends Standard_Transient {
  constructor()
  Init(aHourComponent: Standard_Integer, hasAminuteComponent: Standard_Boolean, aMinuteComponent: Standard_Integer, hasAsecondComponent: Standard_Boolean, aSecondComponent: Standard_Real, aZone: any): void;
  SetHourComponent(aHourComponent: Standard_Integer): void;
  HourComponent(): Standard_Integer;
  SetMinuteComponent(aMinuteComponent: Standard_Integer): void;
  UnSetMinuteComponent(): void;
  MinuteComponent(): Standard_Integer;
  HasMinuteComponent(): Standard_Boolean;
  SetSecondComponent(aSecondComponent: Standard_Real): void;
  UnSetSecondComponent(): void;
  SecondComponent(): Standard_Real;
  HasSecondComponent(): Standard_Boolean;
  SetZone(aZone: any): void;
  Zone(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_MassMeasureWithUnit extends StepBasic_MeasureWithUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_MassUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_MeasureValueMember extends StepData_SelectReal {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_MechanicalContext extends StepBasic_ProductContext {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_NameAssignment extends Standard_Transient {
  constructor()
  Init(aAssignedName: any): void;
  AssignedName(): any;
  SetAssignedName(AssignedName: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ObjectRole extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_OrdinalDate extends StepBasic_Date {
  constructor()
  Init(aYearComponent: Standard_Integer, aDayComponent: Standard_Integer): void;
  SetDayComponent(aDayComponent: Standard_Integer): void;
  DayComponent(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_OrganizationRole extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_OrganizationalAddress extends StepBasic_Address {
  constructor()
  Init(hasAinternalLocation: Standard_Boolean, aInternalLocation: any, hasAstreetNumber: Standard_Boolean, aStreetNumber: any, hasAstreet: Standard_Boolean, aStreet: any, hasApostalBox: Standard_Boolean, aPostalBox: any, hasAtown: Standard_Boolean, aTown: any, hasAregion: Standard_Boolean, aRegion: any, hasApostalCode: Standard_Boolean, aPostalCode: any, hasAcountry: Standard_Boolean, aCountry: any, hasAfacsimileNumber: Standard_Boolean, aFacsimileNumber: any, hasAtelephoneNumber: Standard_Boolean, aTelephoneNumber: any, hasAelectronicMailAddress: Standard_Boolean, aElectronicMailAddress: any, hasAtelexNumber: Standard_Boolean, aTelexNumber: any, aOrganizations: any, aDescription: any): void;
  SetOrganizations(aOrganizations: any): void;
  Organizations(): any;
  OrganizationsValue(num: Standard_Integer): any;
  NbOrganizations(): Standard_Integer;
  SetDescription(aDescription: any): void;
  Description(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PersonAndOrganization extends Standard_Transient {
  constructor()
  Init(aThePerson: any, aTheOrganization: any): void;
  SetThePerson(aThePerson: any): void;
  ThePerson(): any;
  SetTheOrganization(aTheOrganization: any): void;
  TheOrganization(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PersonAndOrganizationRole extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PersonalAddress extends StepBasic_Address {
  constructor()
  Init(hasAinternalLocation: Standard_Boolean, aInternalLocation: any, hasAstreetNumber: Standard_Boolean, aStreetNumber: any, hasAstreet: Standard_Boolean, aStreet: any, hasApostalBox: Standard_Boolean, aPostalBox: any, hasAtown: Standard_Boolean, aTown: any, hasAregion: Standard_Boolean, aRegion: any, hasApostalCode: Standard_Boolean, aPostalCode: any, hasAcountry: Standard_Boolean, aCountry: any, hasAfacsimileNumber: Standard_Boolean, aFacsimileNumber: any, hasAtelephoneNumber: Standard_Boolean, aTelephoneNumber: any, hasAelectronicMailAddress: Standard_Boolean, aElectronicMailAddress: any, hasAtelexNumber: Standard_Boolean, aTelexNumber: any, aPeople: any, aDescription: any): void;
  SetPeople(aPeople: any): void;
  People(): any;
  PeopleValue(num: Standard_Integer): any;
  NbPeople(): Standard_Integer;
  SetDescription(aDescription: any): void;
  Description(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PhysicallyModeledProductDefinition extends StepBasic_ProductDefinition {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PlaneAngleMeasureWithUnit extends StepBasic_MeasureWithUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_PlaneAngleUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductCategory extends Standard_Transient {
  constructor()
  Init(aName: any, hasAdescription: Standard_Boolean, aDescription: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  UnSetDescription(): void;
  Description(): any;
  HasDescription(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductCategoryRelationship extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any, aCategory: any, aSubCategory: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  Category(): any;
  SetCategory(Category: any): void;
  SubCategory(): any;
  SetSubCategory(SubCategory: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductConceptContext extends StepBasic_ApplicationContextElement {
  constructor()
  Init(aApplicationContextElement_Name: any, aApplicationContextElement_FrameOfReference: any, aMarketSegmentType: any): void;
  MarketSegmentType(): any;
  SetMarketSegmentType(MarketSegmentType: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionEffectivity extends StepBasic_Effectivity {
  constructor()
  Init(aId: any, aUsage: any): void;
  Usage(): any;
  SetUsage(aUsage: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionFormation extends Standard_Transient {
  constructor()
  Init(aId: any, aDescription: any, aOfProduct: any): void;
  SetId(aId: any): void;
  Id(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetOfProduct(aOfProduct: any): void;
  OfProduct(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionFormationRelationship extends Standard_Transient {
  constructor()
  Init(aId: any, aName: any, aDescription: any, aRelatingProductDefinitionFormation: any, aRelatedProductDefinitionFormation: any): void;
  Id(): any;
  SetId(Id: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  RelatingProductDefinitionFormation(): any;
  SetRelatingProductDefinitionFormation(RelatingProductDefinitionFormation: any): void;
  RelatedProductDefinitionFormation(): any;
  SetRelatedProductDefinitionFormation(RelatedProductDefinitionFormation: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionFormationWithSpecifiedSource extends StepBasic_ProductDefinitionFormation {
  constructor()
  Init(aId: any, aDescription: any, aOfProduct: any, aMakeOrBuy: StepBasic_Source): void;
  SetMakeOrBuy(aMakeOrBuy: StepBasic_Source): void;
  MakeOrBuy(): StepBasic_Source;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionOrReference extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinition(): any;
  ProductDefinitionReference(): any;
  ProductDefinitionReferenceWithLocalRepresentation(): any;
}

export declare class StepBasic_ProductDefinitionReference extends Standard_Transient {
  constructor()
  Init_1(theSource: any, theProductId: any, theProductDefinitionFormationId: any, theProductDefinitionId: any, theIdOwningOrganizationName: any): void;
  Init_2(theSource: any, theProductId: any, theProductDefinitionFormationId: any, theProductDefinitionId: any): void;
  Source(): any;
  SetSource(theSource: any): void;
  ProductId(): any;
  SetProductId(theProductId: any): void;
  ProductDefinitionFormationId(): any;
  SetProductDefinitionFormationId(theProductDefinitionFormationId: any): void;
  ProductDefinitionId(): any;
  SetProductDefinitionId(theProductDefinitionId: any): void;
  IdOwningOrganizationName(): any;
  SetIdOwningOrganizationName(theIdOwningOrganizationName: any): void;
  HasIdOwningOrganizationName(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionReferenceWithLocalRepresentation extends StepBasic_ProductDefinition {
  constructor()
  Init(theSource: any, theId: any, theDescription: any, theFormation: any, theFrameOfReference: any): void;
  Source(): any;
  SetSource(theSource: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionRelationship extends Standard_Transient {
  constructor()
  Init_1(aId: any, aName: any, hasDescription: Standard_Boolean, aDescription: any, aRelatingProductDefinition: any, aRelatedProductDefinition: any): void;
  Init_2(aId: any, aName: any, hasDescription: Standard_Boolean, aDescription: any, aRelatingProductDefinition: StepBasic_ProductDefinitionOrReference, aRelatedProductDefinition: StepBasic_ProductDefinitionOrReference): void;
  Id(): any;
  SetId(Id: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  RelatingProductDefinition(): any;
  RelatingProductDefinitionAP242(): StepBasic_ProductDefinitionOrReference;
  SetRelatingProductDefinition_1(RelatingProductDefinition: any): void;
  SetRelatingProductDefinition_2(RelatingProductDefinition: StepBasic_ProductDefinitionOrReference): void;
  RelatedProductDefinition(): any;
  RelatedProductDefinitionAP242(): StepBasic_ProductDefinitionOrReference;
  SetRelatedProductDefinition_1(RelatedProductDefinition: any): void;
  SetRelatedProductDefinition_2(RelatedProductDefinition: StepBasic_ProductDefinitionOrReference): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductDefinitionWithAssociatedDocuments extends StepBasic_ProductDefinition {
  constructor()
  Init(aId: any, aDescription: any, aFormation: any, aFrame: any, aDocIds: any): void;
  DocIds(): any;
  SetDocIds(DocIds: any): void;
  NbDocIds(): Standard_Integer;
  DocIdsValue(num: Standard_Integer): any;
  SetDocIdsValue(num: Standard_Integer, adoc: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductRelatedProductCategory extends StepBasic_ProductCategory {
  constructor()
  Init(aName: any, hasAdescription: Standard_Boolean, aDescription: any, aProducts: any): void;
  SetProducts(aProducts: any): void;
  Products(): any;
  ProductsValue(num: Standard_Integer): any;
  NbProducts(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ProductType extends StepBasic_ProductRelatedProductCategory {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_RatioMeasureWithUnit extends StepBasic_MeasureWithUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_RatioUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_RoleSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ActionAssignment(): any;
  ActionRequestAssignment(): any;
  ApprovalAssignment(): any;
  ApprovalDateTime(): any;
  CertificationAssignment(): any;
  ContractAssignment(): any;
  DocumentReference(): any;
  EffectivityAssignment(): any;
  GroupAssignment(): any;
  NameAssignment(): any;
  SecurityClassificationAssignment(): any;
}

export declare class StepBasic_RoleAssociation extends Standard_Transient {
  constructor()
  Init(aRole: any, aItemWithRole: StepBasic_RoleSelect): void;
  Role(): any;
  SetRole(Role: any): void;
  ItemWithRole(): StepBasic_RoleSelect;
  SetItemWithRole(ItemWithRole: StepBasic_RoleSelect): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SecurityClassification extends Standard_Transient {
  constructor()
  Init(aName: any, aPurpose: any, aSecurityLevel: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetPurpose(aPurpose: any): void;
  Purpose(): any;
  SetSecurityLevel(aSecurityLevel: any): void;
  SecurityLevel(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SecurityClassificationLevel extends Standard_Transient {
  constructor()
  Init(aName: any): void;
  SetName(aName: any): void;
  Name(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnit extends StepBasic_NamedUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetPrefix(aPrefix: StepBasic_SiPrefix): void;
  UnSetPrefix(): void;
  Prefix(): StepBasic_SiPrefix;
  HasPrefix(): Standard_Boolean;
  SetName(aName: StepBasic_SiUnitName): void;
  Name(): StepBasic_SiUnitName;
  SetDimensions(aDimensions: any): void;
  Dimensions(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndAreaUnit extends StepBasic_SiUnit {
  constructor()
  SetAreaUnit(anAreaUnit: any): void;
  AreaUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndLengthUnit extends StepBasic_SiUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetLengthUnit(aLengthUnit: any): void;
  LengthUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndMassUnit extends StepBasic_SiUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetMassUnit(aMassUnit: any): void;
  MassUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndPlaneAngleUnit extends StepBasic_SiUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetPlaneAngleUnit(aPlaneAngleUnit: any): void;
  PlaneAngleUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndRatioUnit extends StepBasic_SiUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetRatioUnit(aRatioUnit: any): void;
  RatioUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndSolidAngleUnit extends StepBasic_SiUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetSolidAngleUnit(aSolidAngleUnit: any): void;
  SolidAngleUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndThermodynamicTemperatureUnit extends StepBasic_SiUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetThermodynamicTemperatureUnit(aThermodynamicTemperatureUnit: any): void;
  ThermodynamicTemperatureUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndTimeUnit extends StepBasic_SiUnit {
  constructor()
  Init(hasAprefix: Standard_Boolean, aPrefix: StepBasic_SiPrefix, aName: StepBasic_SiUnitName): void;
  SetTimeUnit(aTimeUnit: any): void;
  TimeUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SiUnitAndVolumeUnit extends StepBasic_SiUnit {
  constructor()
  SetVolumeUnit(aVolumeUnit: any): void;
  VolumeUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SizeMember extends StepData_SelectReal {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SizeSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  NewMember(): any;
  CaseMem(ent: any): Standard_Integer;
  SetRealValue(aReal: Standard_Real): void;
  RealValue(): Standard_Real;
}

export declare class StepBasic_SolidAngleMeasureWithUnit extends StepBasic_MeasureWithUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_SolidAngleUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_ThermodynamicTemperatureUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_TimeMeasureWithUnit extends StepBasic_MeasureWithUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_TimeUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_VersionedActionRequest extends Standard_Transient {
  constructor()
  Init(aId: any, aVersion: any, aPurpose: any, hasDescription: Standard_Boolean, aDescription: any): void;
  Id(): any;
  SetId(Id: any): void;
  Version(): any;
  SetVersion(Version: any): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_VolumeUnit extends StepBasic_NamedUnit {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepBasic_WeekOfYearAndDayDate extends StepBasic_Date {
  constructor()
  Init(aYearComponent: Standard_Integer, aWeekComponent: Standard_Integer, hasAdayComponent: Standard_Boolean, aDayComponent: Standard_Integer): void;
  SetWeekComponent(aWeekComponent: Standard_Integer): void;
  WeekComponent(): Standard_Integer;
  SetDayComponent(aDayComponent: Standard_Integer): void;
  UnSetDayComponent(): void;
  DayComponent(): Standard_Integer;
  HasDayComponent(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CompositeShapeAspect extends StepRepr_ShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Point extends StepGeom_GeometricRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CompositeCurveSegment extends Standard_Transient {
  constructor()
  Init(aTransition: StepGeom_TransitionCode, aSameSense: Standard_Boolean, aParentCurve: any): void;
  SetTransition(aTransition: StepGeom_TransitionCode): void;
  Transition(): StepGeom_TransitionCode;
  SetSameSense(aSameSense: Standard_Boolean): void;
  SameSense(): Standard_Boolean;
  SetParentCurve(aParentCurve: any): void;
  ParentCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Curve extends StepGeom_GeometricRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BoundedCurve extends StepGeom_Curve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CompositeCurve extends StepGeom_BoundedCurve {
  constructor()
  Init(aName: any, aSegments: any, aSelfIntersect: StepData_Logical): void;
  SetSegments(aSegments: any): void;
  Segments(): any;
  SegmentsValue(num: Standard_Integer): any;
  NbSegments(): Standard_Integer;
  SetSelfIntersect(aSelfIntersect: StepData_Logical): void;
  SelfIntersect(): StepData_Logical;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CompositeCurveOnSurface extends StepGeom_CompositeCurve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BoundaryCurve extends StepGeom_CompositeCurveOnSurface {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CartesianPoint extends StepGeom_Point {
  constructor()
  Init(aName: any, aCoordinates: any): void;
  Init2D(aName: any, X: Standard_Real, Y: Standard_Real): void;
  Init3D(aName: any, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  SetCoordinates(aCoordinates: any): void;
  Coordinates(): any;
  CoordinatesValue(num: Standard_Integer): Standard_Real;
  NbCoordinates(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_PcurveOrSurface extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Pcurve(): any;
  Surface(): any;
}

export declare class StepGeom_SurfaceBoundary extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  BoundaryCurve(): any;
  DegeneratePcurve(): any;
}

export declare class StepGeom_TrimmingSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  NewMember(): any;
  CaseMem(ent: any): Standard_Integer;
  CartesianPoint(): any;
  SetParameterValue(aParameterValue: Standard_Real): void;
  ParameterValue(): Standard_Real;
}

export declare class StepGeom_SurfacePatch extends Standard_Transient {
  constructor()
  Init(aParentSurface: any, aUTransition: StepGeom_TransitionCode, aVTransition: StepGeom_TransitionCode, aUSense: Standard_Boolean, aVSense: Standard_Boolean): void;
  SetParentSurface(aParentSurface: any): void;
  ParentSurface(): any;
  SetUTransition(aUTransition: StepGeom_TransitionCode): void;
  UTransition(): StepGeom_TransitionCode;
  SetVTransition(aVTransition: StepGeom_TransitionCode): void;
  VTransition(): StepGeom_TransitionCode;
  SetUSense(aUSense: Standard_Boolean): void;
  USense(): Standard_Boolean;
  SetVSense(aVSense: Standard_Boolean): void;
  VSense(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Axis1Placement extends StepGeom_Placement {
  constructor()
  Init(aName: any, aLocation: any, hasAaxis: Standard_Boolean, aAxis: any): void;
  SetAxis(aAxis: any): void;
  UnSetAxis(): void;
  Axis(): any;
  HasAxis(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Axis2Placement extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Axis2Placement2d(): any;
  Axis2Placement3d(): any;
}

export declare class StepGeom_Axis2Placement2d extends StepGeom_Placement {
  constructor()
  Init(aName: any, aLocation: any, hasArefDirection: Standard_Boolean, aRefDirection: any): void;
  SetRefDirection(aRefDirection: any): void;
  UnSetRefDirection(): void;
  RefDirection(): any;
  HasRefDirection(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BSplineCurve extends StepGeom_BoundedCurve {
  constructor()
  Init(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical): void;
  SetDegree(aDegree: Standard_Integer): void;
  Degree(): Standard_Integer;
  SetControlPointsList(aControlPointsList: any): void;
  ControlPointsList(): any;
  ControlPointsListValue(num: Standard_Integer): any;
  NbControlPointsList(): Standard_Integer;
  SetCurveForm(aCurveForm: StepGeom_BSplineCurveForm): void;
  CurveForm(): StepGeom_BSplineCurveForm;
  SetClosedCurve(aClosedCurve: StepData_Logical): void;
  ClosedCurve(): StepData_Logical;
  SetSelfIntersect(aSelfIntersect: StepData_Logical): void;
  SelfIntersect(): StepData_Logical;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BSplineCurveWithKnots extends StepGeom_BSplineCurve {
  constructor()
  Init(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aKnotMultiplicities: any, aKnots: any, aKnotSpec: StepGeom_KnotType): void;
  SetKnotMultiplicities(aKnotMultiplicities: any): void;
  KnotMultiplicities(): any;
  KnotMultiplicitiesValue(num: Standard_Integer): Standard_Integer;
  NbKnotMultiplicities(): Standard_Integer;
  SetKnots(aKnots: any): void;
  Knots(): any;
  KnotsValue(num: Standard_Integer): Standard_Real;
  NbKnots(): Standard_Integer;
  SetKnotSpec(aKnotSpec: StepGeom_KnotType): void;
  KnotSpec(): StepGeom_KnotType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve extends StepGeom_BSplineCurve {
  constructor()
  Init_1(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aBSplineCurveWithKnots: any, aRationalBSplineCurve: any): void;
  Init_2(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aKnotMultiplicities: any, aKnots: any, aKnotSpec: StepGeom_KnotType, aWeightsData: any): void;
  SetBSplineCurveWithKnots(aBSplineCurveWithKnots: any): void;
  BSplineCurveWithKnots(): any;
  SetRationalBSplineCurve(aRationalBSplineCurve: any): void;
  RationalBSplineCurve(): any;
  SetKnotMultiplicities(aKnotMultiplicities: any): void;
  KnotMultiplicities(): any;
  KnotMultiplicitiesValue(num: Standard_Integer): Standard_Integer;
  NbKnotMultiplicities(): Standard_Integer;
  SetKnots(aKnots: any): void;
  Knots(): any;
  KnotsValue(num: Standard_Integer): Standard_Real;
  NbKnots(): Standard_Integer;
  SetKnotSpec(aKnotSpec: StepGeom_KnotType): void;
  KnotSpec(): StepGeom_KnotType;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num: Standard_Integer): Standard_Real;
  NbWeightsData(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Surface extends StepGeom_GeometricRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BoundedSurface extends StepGeom_Surface {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BSplineSurface extends StepGeom_BoundedSurface {
  constructor()
  Init(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical): void;
  SetUDegree(aUDegree: Standard_Integer): void;
  UDegree(): Standard_Integer;
  SetVDegree(aVDegree: Standard_Integer): void;
  VDegree(): Standard_Integer;
  SetControlPointsList(aControlPointsList: any): void;
  ControlPointsList(): any;
  ControlPointsListValue(num1: Standard_Integer, num2: Standard_Integer): any;
  NbControlPointsListI(): Standard_Integer;
  NbControlPointsListJ(): Standard_Integer;
  SetSurfaceForm(aSurfaceForm: StepGeom_BSplineSurfaceForm): void;
  SurfaceForm(): StepGeom_BSplineSurfaceForm;
  SetUClosed(aUClosed: StepData_Logical): void;
  UClosed(): StepData_Logical;
  SetVClosed(aVClosed: StepData_Logical): void;
  VClosed(): StepData_Logical;
  SetSelfIntersect(aSelfIntersect: StepData_Logical): void;
  SelfIntersect(): StepData_Logical;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BSplineSurfaceWithKnots extends StepGeom_BSplineSurface {
  constructor()
  Init(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aUMultiplicities: any, aVMultiplicities: any, aUKnots: any, aVKnots: any, aKnotSpec: StepGeom_KnotType): void;
  SetUMultiplicities(aUMultiplicities: any): void;
  UMultiplicities(): any;
  UMultiplicitiesValue(num: Standard_Integer): Standard_Integer;
  NbUMultiplicities(): Standard_Integer;
  SetVMultiplicities(aVMultiplicities: any): void;
  VMultiplicities(): any;
  VMultiplicitiesValue(num: Standard_Integer): Standard_Integer;
  NbVMultiplicities(): Standard_Integer;
  SetUKnots(aUKnots: any): void;
  UKnots(): any;
  UKnotsValue(num: Standard_Integer): Standard_Real;
  NbUKnots(): Standard_Integer;
  SetVKnots(aVKnots: any): void;
  VKnots(): any;
  VKnotsValue(num: Standard_Integer): Standard_Real;
  NbVKnots(): Standard_Integer;
  SetKnotSpec(aKnotSpec: StepGeom_KnotType): void;
  KnotSpec(): StepGeom_KnotType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface extends StepGeom_BSplineSurface {
  constructor()
  Init_1(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aBSplineSurfaceWithKnots: any, aRationalBSplineSurface: any): void;
  Init_2(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aUMultiplicities: any, aVMultiplicities: any, aUKnots: any, aVKnots: any, aKnotSpec: StepGeom_KnotType, aWeightsData: any): void;
  SetBSplineSurfaceWithKnots(aBSplineSurfaceWithKnots: any): void;
  BSplineSurfaceWithKnots(): any;
  SetRationalBSplineSurface(aRationalBSplineSurface: any): void;
  RationalBSplineSurface(): any;
  SetUMultiplicities(aUMultiplicities: any): void;
  UMultiplicities(): any;
  UMultiplicitiesValue(num: Standard_Integer): Standard_Integer;
  NbUMultiplicities(): Standard_Integer;
  SetVMultiplicities(aVMultiplicities: any): void;
  VMultiplicities(): any;
  VMultiplicitiesValue(num: Standard_Integer): Standard_Integer;
  NbVMultiplicities(): Standard_Integer;
  SetUKnots(aUKnots: any): void;
  UKnots(): any;
  UKnotsValue(num: Standard_Integer): Standard_Real;
  NbUKnots(): Standard_Integer;
  SetVKnots(aVKnots: any): void;
  VKnots(): any;
  VKnotsValue(num: Standard_Integer): Standard_Real;
  NbVKnots(): Standard_Integer;
  SetKnotSpec(aKnotSpec: StepGeom_KnotType): void;
  KnotSpec(): StepGeom_KnotType;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num1: Standard_Integer, num2: Standard_Integer): Standard_Real;
  NbWeightsDataI(): Standard_Integer;
  NbWeightsDataJ(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BezierCurve extends StepGeom_BSplineCurve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BezierCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
  constructor()
  Init_1(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aBezierCurve: any, aRationalBSplineCurve: any): void;
  Init_2(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetBezierCurve(aBezierCurve: any): void;
  BezierCurve(): any;
  SetRationalBSplineCurve(aRationalBSplineCurve: any): void;
  RationalBSplineCurve(): any;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num: Standard_Integer): Standard_Real;
  NbWeightsData(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BezierSurface extends StepGeom_BSplineSurface {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_BezierSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
  constructor()
  Init_1(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aBezierSurface: any, aRationalBSplineSurface: any): void;
  Init_2(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetBezierSurface(aBezierSurface: any): void;
  BezierSurface(): any;
  SetRationalBSplineSurface(aRationalBSplineSurface: any): void;
  RationalBSplineSurface(): any;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num1: Standard_Integer, num2: Standard_Integer): Standard_Real;
  NbWeightsDataI(): Standard_Integer;
  NbWeightsDataJ(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CartesianTransformationOperator extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, hasAaxis1: Standard_Boolean, aAxis1: any, hasAaxis2: Standard_Boolean, aAxis2: any, aLocalOrigin: any, hasAscale: Standard_Boolean, aScale: Standard_Real): void;
  SetAxis1(aAxis1: any): void;
  UnSetAxis1(): void;
  Axis1(): any;
  HasAxis1(): Standard_Boolean;
  SetAxis2(aAxis2: any): void;
  UnSetAxis2(): void;
  Axis2(): any;
  HasAxis2(): Standard_Boolean;
  SetLocalOrigin(aLocalOrigin: any): void;
  LocalOrigin(): any;
  SetScale(aScale: Standard_Real): void;
  UnSetScale(): void;
  Scale(): Standard_Real;
  HasScale(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CartesianTransformationOperator2d extends StepGeom_CartesianTransformationOperator {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CartesianTransformationOperator3d extends StepGeom_CartesianTransformationOperator {
  constructor()
  Init(aName: any, hasAaxis1: Standard_Boolean, aAxis1: any, hasAaxis2: Standard_Boolean, aAxis2: any, aLocalOrigin: any, hasAscale: Standard_Boolean, aScale: Standard_Real, hasAaxis3: Standard_Boolean, aAxis3: any): void;
  SetAxis3(aAxis3: any): void;
  UnSetAxis3(): void;
  Axis3(): any;
  HasAxis3(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Conic extends StepGeom_Curve {
  constructor()
  Init(aName: any, aPosition: StepGeom_Axis2Placement): void;
  SetPosition(aPosition: StepGeom_Axis2Placement): void;
  Position(): StepGeom_Axis2Placement;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Circle extends StepGeom_Conic {
  constructor()
  Init(aName: any, aPosition: StepGeom_Axis2Placement, aRadius: Standard_Real): void;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_ElementarySurface extends StepGeom_Surface {
  constructor()
  Init(aName: any, aPosition: any): void;
  SetPosition(aPosition: any): void;
  Position(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_ConicalSurface extends StepGeom_ElementarySurface {
  constructor()
  Init(aName: any, aPosition: any, aRadius: Standard_Real, aSemiAngle: Standard_Real): void;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  SetSemiAngle(aSemiAngle: Standard_Real): void;
  SemiAngle(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CurveBoundedSurface extends StepGeom_BoundedSurface {
  constructor()
  Init(aRepresentationItem_Name: any, aBasisSurface: any, aBoundaries: any, aImplicitOuter: Standard_Boolean): void;
  BasisSurface(): any;
  SetBasisSurface(BasisSurface: any): void;
  Boundaries(): any;
  SetBoundaries(Boundaries: any): void;
  ImplicitOuter(): Standard_Boolean;
  SetImplicitOuter(ImplicitOuter: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CurveOnSurface extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Pcurve(): any;
  SurfaceCurve(): any;
  CompositeCurveOnSurface(): any;
}

export declare class StepGeom_CurveReplica extends StepGeom_Curve {
  constructor()
  Init(aName: any, aParentCurve: any, aTransformation: any): void;
  SetParentCurve(aParentCurve: any): void;
  ParentCurve(): any;
  SetTransformation(aTransformation: any): void;
  Transformation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_CylindricalSurface extends StepGeom_ElementarySurface {
  constructor()
  Init(aName: any, aPosition: any, aRadius: Standard_Real): void;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_DegeneratePcurve extends StepGeom_Point {
  constructor()
  Init(aName: any, aBasisSurface: any, aReferenceToCurve: any): void;
  SetBasisSurface(aBasisSurface: any): void;
  BasisSurface(): any;
  SetReferenceToCurve(aReferenceToCurve: any): void;
  ReferenceToCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_ToroidalSurface extends StepGeom_ElementarySurface {
  constructor()
  Init(aName: any, aPosition: any, aMajorRadius: Standard_Real, aMinorRadius: Standard_Real): void;
  SetMajorRadius(aMajorRadius: Standard_Real): void;
  MajorRadius(): Standard_Real;
  SetMinorRadius(aMinorRadius: Standard_Real): void;
  MinorRadius(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_DegenerateToroidalSurface extends StepGeom_ToroidalSurface {
  constructor()
  Init(aName: any, aPosition: any, aMajorRadius: Standard_Real, aMinorRadius: Standard_Real, aSelectOuter: Standard_Boolean): void;
  SetSelectOuter(aSelectOuter: Standard_Boolean): void;
  SelectOuter(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Direction extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aDirectionRatios: any): void;
  SetDirectionRatios(aDirectionRatios: any): void;
  DirectionRatios(): any;
  DirectionRatiosValue(num: Standard_Integer): Standard_Real;
  NbDirectionRatios(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Ellipse extends StepGeom_Conic {
  constructor()
  Init(aName: any, aPosition: StepGeom_Axis2Placement, aSemiAxis1: Standard_Real, aSemiAxis2: Standard_Real): void;
  SetSemiAxis1(aSemiAxis1: Standard_Real): void;
  SemiAxis1(): Standard_Real;
  SetSemiAxis2(aSemiAxis2: Standard_Real): void;
  SemiAxis2(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_EvaluatedDegeneratePcurve extends StepGeom_DegeneratePcurve {
  constructor()
  Init(aName: any, aBasisSurface: any, aReferenceToCurve: any, aEquivalentPoint: any): void;
  SetEquivalentPoint(aEquivalentPoint: any): void;
  EquivalentPoint(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_RepresentationContext extends Standard_Transient {
  constructor()
  Init(aContextIdentifier: any, aContextType: any): void;
  SetContextIdentifier(aContextIdentifier: any): void;
  ContextIdentifier(): any;
  SetContextType(aContextType: any): void;
  ContextType(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx extends StepRepr_RepresentationContext {
  constructor()
  Init_1(aContextIdentifier: any, aContextType: any, aGeometricRepresentationCtx: any, aGlobalUnitAssignedCtx: any, aGlobalUncertaintyAssignedCtx: any): void;
  Init_2(aContextIdentifier: any, aContextType: any, aCoordinateSpaceDimension: Standard_Integer, aUnits: any, anUncertainty: any): void;
  SetGeometricRepresentationContext(aGeometricRepresentationContext: any): void;
  GeometricRepresentationContext(): any;
  SetGlobalUnitAssignedContext(aGlobalUnitAssignedContext: any): void;
  GlobalUnitAssignedContext(): any;
  SetGlobalUncertaintyAssignedContext(aGlobalUncertaintyAssignedCtx: any): void;
  GlobalUncertaintyAssignedContext(): any;
  SetCoordinateSpaceDimension(aCoordinateSpaceDimension: Standard_Integer): void;
  CoordinateSpaceDimension(): Standard_Integer;
  SetUnits(aUnits: any): void;
  Units(): any;
  UnitsValue(num: Standard_Integer): any;
  NbUnits(): Standard_Integer;
  SetUncertainty(aUncertainty: any): void;
  Uncertainty(): any;
  UncertaintyValue(num: Standard_Integer): any;
  NbUncertainty(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_GeometricRepresentationContext extends StepRepr_RepresentationContext {
  constructor()
  Init(aContextIdentifier: any, aContextType: any, aCoordinateSpaceDimension: Standard_Integer): void;
  SetCoordinateSpaceDimension(aCoordinateSpaceDimension: Standard_Integer): void;
  CoordinateSpaceDimension(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext extends StepRepr_RepresentationContext {
  constructor()
  Init_1(aContextIdentifier: any, aContextType: any, aGeometricRepresentationContext: any, aGlobalUnitAssignedContext: any): void;
  Init_2(aContextIdentifier: any, aContextType: any, aCoordinateSpaceDimension: Standard_Integer, aUnits: any): void;
  SetGeometricRepresentationContext(aGeometricRepresentationContext: any): void;
  GeometricRepresentationContext(): any;
  SetGlobalUnitAssignedContext(aGlobalUnitAssignedContext: any): void;
  GlobalUnitAssignedContext(): any;
  SetCoordinateSpaceDimension(aCoordinateSpaceDimension: Standard_Integer): void;
  CoordinateSpaceDimension(): Standard_Integer;
  SetUnits(aUnits: any): void;
  Units(): any;
  UnitsValue(num: Standard_Integer): any;
  NbUnits(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_GeometricRepresentationContextAndParametricRepresentationContext extends StepRepr_RepresentationContext {
  constructor()
  Init_1(aContextIdentifier: any, aContextType: any, aGeometricRepresentationContext: any, aParametricRepresentationContext: any): void;
  Init_2(aContextIdentifier: any, aContextType: any, aCoordinateSpaceDimension: Standard_Integer): void;
  SetGeometricRepresentationContext(aGeometricRepresentationContext: any): void;
  GeometricRepresentationContext(): any;
  SetParametricRepresentationContext(aParametricRepresentationContext: any): void;
  ParametricRepresentationContext(): any;
  SetCoordinateSpaceDimension(aCoordinateSpaceDimension: Standard_Integer): void;
  CoordinateSpaceDimension(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Hyperbola extends StepGeom_Conic {
  constructor()
  Init(aName: any, aPosition: StepGeom_Axis2Placement, aSemiAxis: Standard_Real, aSemiImagAxis: Standard_Real): void;
  SetSemiAxis(aSemiAxis: Standard_Real): void;
  SemiAxis(): Standard_Real;
  SetSemiImagAxis(aSemiImagAxis: Standard_Real): void;
  SemiImagAxis(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SurfaceCurve extends StepGeom_Curve {
  constructor()
  Init(aName: any, aCurve3d: any, aAssociatedGeometry: any, aMasterRepresentation: StepGeom_PreferredSurfaceCurveRepresentation): void;
  SetCurve3d(aCurve3d: any): void;
  Curve3d(): any;
  SetAssociatedGeometry(aAssociatedGeometry: any): void;
  AssociatedGeometry(): any;
  AssociatedGeometryValue(num: Standard_Integer): StepGeom_PcurveOrSurface;
  NbAssociatedGeometry(): Standard_Integer;
  SetMasterRepresentation(aMasterRepresentation: StepGeom_PreferredSurfaceCurveRepresentation): void;
  MasterRepresentation(): StepGeom_PreferredSurfaceCurveRepresentation;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_IntersectionCurve extends StepGeom_SurfaceCurve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Line extends StepGeom_Curve {
  constructor()
  Init(aName: any, aPnt: any, aDir: any): void;
  SetPnt(aPnt: any): void;
  Pnt(): any;
  SetDir(aDir: any): void;
  Dir(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_OffsetCurve3d extends StepGeom_Curve {
  constructor()
  Init(aName: any, aBasisCurve: any, aDistance: Standard_Real, aSelfIntersect: StepData_Logical, aRefDirection: any): void;
  SetBasisCurve(aBasisCurve: any): void;
  BasisCurve(): any;
  SetDistance(aDistance: Standard_Real): void;
  Distance(): Standard_Real;
  SetSelfIntersect(aSelfIntersect: StepData_Logical): void;
  SelfIntersect(): StepData_Logical;
  SetRefDirection(aRefDirection: any): void;
  RefDirection(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_OffsetSurface extends StepGeom_Surface {
  constructor()
  Init(aName: any, aBasisSurface: any, aDistance: Standard_Real, aSelfIntersect: StepData_Logical): void;
  SetBasisSurface(aBasisSurface: any): void;
  BasisSurface(): any;
  SetDistance(aDistance: Standard_Real): void;
  Distance(): Standard_Real;
  SetSelfIntersect(aSelfIntersect: StepData_Logical): void;
  SelfIntersect(): StepData_Logical;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_OrientedSurface extends StepGeom_Surface {
  constructor()
  Init(aRepresentationItem_Name: any, aOrientation: Standard_Boolean): void;
  Orientation(): Standard_Boolean;
  SetOrientation(Orientation: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_OuterBoundaryCurve extends StepGeom_BoundaryCurve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Parabola extends StepGeom_Conic {
  constructor()
  Init(aName: any, aPosition: StepGeom_Axis2Placement, aFocalDist: Standard_Real): void;
  SetFocalDist(aFocalDist: Standard_Real): void;
  FocalDist(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Pcurve extends StepGeom_Curve {
  constructor()
  Init(aName: any, aBasisSurface: any, aReferenceToCurve: any): void;
  SetBasisSurface(aBasisSurface: any): void;
  BasisSurface(): any;
  SetReferenceToCurve(aReferenceToCurve: any): void;
  ReferenceToCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Plane extends StepGeom_ElementarySurface {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_PointOnCurve extends StepGeom_Point {
  constructor()
  Init(aName: any, aBasisCurve: any, aPointParameter: Standard_Real): void;
  SetBasisCurve(aBasisCurve: any): void;
  BasisCurve(): any;
  SetPointParameter(aPointParameter: Standard_Real): void;
  PointParameter(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_PointOnSurface extends StepGeom_Point {
  constructor()
  Init(aName: any, aBasisSurface: any, aPointParameterU: Standard_Real, aPointParameterV: Standard_Real): void;
  SetBasisSurface(aBasisSurface: any): void;
  BasisSurface(): any;
  SetPointParameterU(aPointParameterU: Standard_Real): void;
  PointParameterU(): Standard_Real;
  SetPointParameterV(aPointParameterV: Standard_Real): void;
  PointParameterV(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_PointReplica extends StepGeom_Point {
  constructor()
  Init(aName: any, aParentPt: any, aTransformation: any): void;
  SetParentPt(aParentPt: any): void;
  ParentPt(): any;
  SetTransformation(aTransformation: any): void;
  Transformation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Polyline extends StepGeom_BoundedCurve {
  constructor()
  Init(aName: any, aPoints: any): void;
  SetPoints(aPoints: any): void;
  Points(): any;
  PointsValue(num: Standard_Integer): any;
  NbPoints(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_QuasiUniformCurve extends StepGeom_BSplineCurve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_QuasiUniformCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
  constructor()
  Init_1(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aQuasiUniformCurve: any, aRationalBSplineCurve: any): void;
  Init_2(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetQuasiUniformCurve(aQuasiUniformCurve: any): void;
  QuasiUniformCurve(): any;
  SetRationalBSplineCurve(aRationalBSplineCurve: any): void;
  RationalBSplineCurve(): any;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num: Standard_Integer): Standard_Real;
  NbWeightsData(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_QuasiUniformSurface extends StepGeom_BSplineSurface {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
  constructor()
  Init_1(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aQuasiUniformSurface: any, aRationalBSplineSurface: any): void;
  Init_2(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetQuasiUniformSurface(aQuasiUniformSurface: any): void;
  QuasiUniformSurface(): any;
  SetRationalBSplineSurface(aRationalBSplineSurface: any): void;
  RationalBSplineSurface(): any;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num1: Standard_Integer, num2: Standard_Integer): Standard_Real;
  NbWeightsDataI(): Standard_Integer;
  NbWeightsDataJ(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_RationalBSplineCurve extends StepGeom_BSplineCurve {
  constructor()
  Init(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num: Standard_Integer): Standard_Real;
  NbWeightsData(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_RationalBSplineSurface extends StepGeom_BSplineSurface {
  constructor()
  Init(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num1: Standard_Integer, num2: Standard_Integer): Standard_Real;
  NbWeightsDataI(): Standard_Integer;
  NbWeightsDataJ(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_RectangularCompositeSurface extends StepGeom_BoundedSurface {
  constructor()
  Init(aName: any, aSegments: any): void;
  SetSegments(aSegments: any): void;
  Segments(): any;
  SegmentsValue(num1: Standard_Integer, num2: Standard_Integer): any;
  NbSegmentsI(): Standard_Integer;
  NbSegmentsJ(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_RectangularTrimmedSurface extends StepGeom_BoundedSurface {
  constructor()
  Init(aName: any, aBasisSurface: any, aU1: Standard_Real, aU2: Standard_Real, aV1: Standard_Real, aV2: Standard_Real, aUsense: Standard_Boolean, aVsense: Standard_Boolean): void;
  SetBasisSurface(aBasisSurface: any): void;
  BasisSurface(): any;
  SetU1(aU1: Standard_Real): void;
  U1(): Standard_Real;
  SetU2(aU2: Standard_Real): void;
  U2(): Standard_Real;
  SetV1(aV1: Standard_Real): void;
  V1(): Standard_Real;
  SetV2(aV2: Standard_Real): void;
  V2(): Standard_Real;
  SetUsense(aUsense: Standard_Boolean): void;
  Usense(): Standard_Boolean;
  SetVsense(aVsense: Standard_Boolean): void;
  Vsense(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_ReparametrisedCompositeCurveSegment extends StepGeom_CompositeCurveSegment {
  constructor()
  Init(aTransition: StepGeom_TransitionCode, aSameSense: Standard_Boolean, aParentCurve: any, aParamLength: Standard_Real): void;
  SetParamLength(aParamLength: Standard_Real): void;
  ParamLength(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SeamCurve extends StepGeom_SurfaceCurve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SphericalSurface extends StepGeom_ElementarySurface {
  constructor()
  Init(aName: any, aPosition: any, aRadius: Standard_Real): void;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SurfaceCurveAndBoundedCurve extends StepGeom_SurfaceCurve {
  constructor()
  BoundedCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SweptSurface extends StepGeom_Surface {
  constructor()
  Init(aName: any, aSweptCurve: any): void;
  SetSweptCurve(aSweptCurve: any): void;
  SweptCurve(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SurfaceOfLinearExtrusion extends StepGeom_SweptSurface {
  constructor()
  Init(aName: any, aSweptCurve: any, aExtrusionAxis: any): void;
  SetExtrusionAxis(aExtrusionAxis: any): void;
  ExtrusionAxis(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SurfaceOfRevolution extends StepGeom_SweptSurface {
  constructor()
  Init(aName: any, aSweptCurve: any, aAxisPosition: any): void;
  SetAxisPosition(aAxisPosition: any): void;
  AxisPosition(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_SurfaceReplica extends StepGeom_Surface {
  constructor()
  Init(aName: any, aParentSurface: any, aTransformation: any): void;
  SetParentSurface(aParentSurface: any): void;
  ParentSurface(): any;
  SetTransformation(aTransformation: any): void;
  Transformation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_TrimmedCurve extends StepGeom_BoundedCurve {
  constructor()
  Init(aName: any, aBasisCurve: any, aTrim1: any, aTrim2: any, aSenseAgreement: Standard_Boolean, aMasterRepresentation: StepGeom_TrimmingPreference): void;
  SetBasisCurve(aBasisCurve: any): void;
  BasisCurve(): any;
  SetTrim1(aTrim1: any): void;
  Trim1(): any;
  Trim1Value(num: Standard_Integer): StepGeom_TrimmingSelect;
  NbTrim1(): Standard_Integer;
  SetTrim2(aTrim2: any): void;
  Trim2(): any;
  Trim2Value(num: Standard_Integer): StepGeom_TrimmingSelect;
  NbTrim2(): Standard_Integer;
  SetSenseAgreement(aSenseAgreement: Standard_Boolean): void;
  SenseAgreement(): Standard_Boolean;
  SetMasterRepresentation(aMasterRepresentation: StepGeom_TrimmingPreference): void;
  MasterRepresentation(): StepGeom_TrimmingPreference;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_TrimmingMember extends StepData_SelectReal {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_UniformCurve extends StepGeom_BSplineCurve {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_UniformCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
  constructor()
  Init_1(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aUniformCurve: any, aRationalBSplineCurve: any): void;
  Init_2(aName: any, aDegree: Standard_Integer, aControlPointsList: any, aCurveForm: StepGeom_BSplineCurveForm, aClosedCurve: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetUniformCurve(aUniformCurve: any): void;
  UniformCurve(): any;
  SetRationalBSplineCurve(aRationalBSplineCurve: any): void;
  RationalBSplineCurve(): any;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num: Standard_Integer): Standard_Real;
  NbWeightsData(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_UniformSurface extends StepGeom_BSplineSurface {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_UniformSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
  constructor()
  Init_1(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aUniformSurface: any, aRationalBSplineSurface: any): void;
  Init_2(aName: any, aUDegree: Standard_Integer, aVDegree: Standard_Integer, aControlPointsList: any, aSurfaceForm: StepGeom_BSplineSurfaceForm, aUClosed: StepData_Logical, aVClosed: StepData_Logical, aSelfIntersect: StepData_Logical, aWeightsData: any): void;
  SetUniformSurface(aUniformSurface: any): void;
  UniformSurface(): any;
  SetRationalBSplineSurface(aRationalBSplineSurface: any): void;
  RationalBSplineSurface(): any;
  SetWeightsData(aWeightsData: any): void;
  WeightsData(): any;
  WeightsDataValue(num1: Standard_Integer, num2: Standard_Integer): Standard_Real;
  NbWeightsDataI(): Standard_Integer;
  NbWeightsDataJ(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_Vector extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aOrientation: any, aMagnitude: Standard_Real): void;
  SetOrientation(aOrientation: any): void;
  Orientation(): any;
  SetMagnitude(aMagnitude: Standard_Real): void;
  Magnitude(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepGeom_VectorOrDirection extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Vector(): any;
  Direction(): any;
}

export declare class StepRepr_ContinuosShapeAspect extends StepRepr_CompositeShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_AllAroundShapeAspect extends StepRepr_ContinuosShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_DerivedShapeAspect extends StepRepr_ShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_Apex extends StepRepr_DerivedShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ProductDefinitionUsage extends StepBasic_ProductDefinitionRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_AssemblyComponentUsage extends StepRepr_ProductDefinitionUsage {
  constructor()
  Init_1(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: any, aProductDefinitionRelationship_RelatedProductDefinition: any, hasReferenceDesignator: Standard_Boolean, aReferenceDesignator: any): void;
  Init_2(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: StepBasic_ProductDefinitionOrReference, aProductDefinitionRelationship_RelatedProductDefinition: StepBasic_ProductDefinitionOrReference, hasReferenceDesignator: Standard_Boolean, aReferenceDesignator: any): void;
  ReferenceDesignator(): any;
  SetReferenceDesignator(ReferenceDesignator: any): void;
  HasReferenceDesignator(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_AssemblyComponentUsageSubstitute extends Standard_Transient {
  constructor()
  Init(aName: any, aDef: any, aBase: any, aSubs: any): void;
  Name(): any;
  SetName(aName: any): void;
  Definition(): any;
  SetDefinition(aDef: any): void;
  Base(): any;
  SetBase(aBase: any): void;
  Substitute(): any;
  SetSubstitute(aSubstitute: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_BetweenShapeAspect extends StepRepr_ContinuosShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CentreOfSymmetry extends StepRepr_DerivedShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CharacterizedRepresentation extends StepRepr_Representation {
  constructor()
  Init(theName: any, theDescription: any, theItems: any, theContextOfItems: any): void;
  SetDescription(theDescription: any): void;
  Description(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CompShAspAndDatumFeatAndShAsp extends StepRepr_ShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp extends StepRepr_CompShAspAndDatumFeatAndShAsp {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_CompositeGroupShapeAspect extends StepRepr_CompositeShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ConfigurationDesignItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinition(): any;
  ProductDefinitionFormation(): any;
}

export declare class StepRepr_ConfigurationDesign extends Standard_Transient {
  constructor()
  Init(aConfiguration: any, aDesign: StepRepr_ConfigurationDesignItem): void;
  Configuration(): any;
  SetConfiguration(Configuration: any): void;
  Design(): StepRepr_ConfigurationDesignItem;
  SetDesign(Design: StepRepr_ConfigurationDesignItem): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ConfigurationEffectivity extends StepBasic_ProductDefinitionEffectivity {
  constructor()
  Init(aEffectivity_Id: any, aProductDefinitionEffectivity_Usage: any, aConfiguration: any): void;
  Configuration(): any;
  SetConfiguration(Configuration: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ConfigurationItem extends Standard_Transient {
  constructor()
  Init(aId: any, aName: any, hasDescription: Standard_Boolean, aDescription: any, aItemConcept: any, hasPurpose: Standard_Boolean, aPurpose: any): void;
  Id(): any;
  SetId(Id: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  ItemConcept(): any;
  SetItemConcept(ItemConcept: any): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  HasPurpose(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ConstructiveGeometryRepresentation extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_RepresentationRelationship extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aRep1: any, aRep2: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetRep1(aRep1: any): void;
  Rep1(): any;
  SetRep2(aRep2: any): void;
  Rep2(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ConstructiveGeometryRepresentationRelationship extends StepRepr_RepresentationRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_DataEnvironment extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aElements: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  Elements(): any;
  SetElements(Elements: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_DefinitionalRepresentation extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_DescriptiveRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  Init(aName: any, aDescription: any): void;
  SetDescription(aDescription: any): void;
  Description(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_Extension extends StepRepr_DerivedShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ExternallyDefinedRepresentation extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ShapeAspectRelationship extends Standard_Transient {
  constructor()
  Init(aName: any, hasDescription: Standard_Boolean, aDescription: any, aRelatingShapeAspect: any, aRelatedShapeAspect: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  RelatingShapeAspect(): any;
  SetRelatingShapeAspect(RelatingShapeAspect: any): void;
  RelatedShapeAspect(): any;
  SetRelatedShapeAspect(RelatedShapeAspect: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_FeatureForDatumTargetRelationship extends StepRepr_ShapeAspectRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_FunctionallyDefinedTransformation extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_GeometricAlignment extends StepRepr_DerivedShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_GlobalUncertaintyAssignedContext extends StepRepr_RepresentationContext {
  constructor()
  Init(aContextIdentifier: any, aContextType: any, aUncertainty: any): void;
  SetUncertainty(aUncertainty: any): void;
  Uncertainty(): any;
  UncertaintyValue(num: Standard_Integer): any;
  NbUncertainty(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_GlobalUnitAssignedContext extends StepRepr_RepresentationContext {
  constructor()
  Init(aContextIdentifier: any, aContextType: any, aUnits: any): void;
  SetUnits(aUnits: any): void;
  Units(): any;
  UnitsValue(num: Standard_Integer): any;
  NbUnits(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_IntegerRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  Init(theName: any, theValue: Standard_Integer): void;
  SetValue(theValue: Standard_Integer): void;
  Value(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ItemDefinedTransformation extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aTransformItem1: any, aTransformItem2: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetDescription(aDescription: any): void;
  Description(): any;
  SetTransformItem1(aItem: any): void;
  TransformItem1(): any;
  SetTransformItem2(aItem: any): void;
  TransformItem2(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_MakeFromUsageOption extends StepRepr_ProductDefinitionUsage {
  constructor()
  Init_1(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: any, aProductDefinitionRelationship_RelatedProductDefinition: any, aRanking: Standard_Integer, aRankingRationale: any, aQuantity: any): void;
  Init_2(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: StepBasic_ProductDefinitionOrReference, aProductDefinitionRelationship_RelatedProductDefinition: StepBasic_ProductDefinitionOrReference, aRanking: Standard_Integer, aRankingRationale: any, aQuantity: any): void;
  Ranking(): Standard_Integer;
  SetRanking(Ranking: Standard_Integer): void;
  RankingRationale(): any;
  SetRankingRationale(RankingRationale: any): void;
  Quantity(): any;
  SetQuantity(Quantity: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_MappedItem extends StepRepr_RepresentationItem {
  constructor()
  Init(aName: any, aMappingSource: any, aMappingTarget: any): void;
  SetMappingSource(aMappingSource: any): void;
  MappingSource(): any;
  SetMappingTarget(aMappingTarget: any): void;
  MappingTarget(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_MaterialDesignation extends Standard_Transient {
  constructor()
  Init(aName: any, aOfDefinition: StepRepr_CharacterizedDefinition): void;
  SetName(aName: any): void;
  Name(): any;
  SetOfDefinition(aOfDefinition: StepRepr_CharacterizedDefinition): void;
  OfDefinition(): StepRepr_CharacterizedDefinition;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_MaterialProperty extends StepRepr_PropertyDefinition {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_MeasureRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  Init(aName: any, aValueComponent: any, aUnitComponent: StepBasic_Unit): void;
  SetMeasure(Measure: any): void;
  Measure(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_NextAssemblyUsageOccurrence extends StepRepr_AssemblyComponentUsage {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ParallelOffset extends StepRepr_DerivedShapeAspect {
  constructor()
  Init(theName: any, theDescription: any, theOfShape: any, theProductDefinitional: StepData_Logical, theOffset: any): void;
  Offset(): any;
  SetOffset(theOffset: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ParametricRepresentationContext extends StepRepr_RepresentationContext {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_PerpendicularTo extends StepRepr_DerivedShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ProductConcept extends Standard_Transient {
  constructor()
  Init(aId: any, aName: any, hasDescription: Standard_Boolean, aDescription: any, aMarketContext: any): void;
  Id(): any;
  SetId(Id: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  HasDescription(): Standard_Boolean;
  MarketContext(): any;
  SetMarketContext(MarketContext: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_PromissoryUsageOccurrence extends StepRepr_AssemblyComponentUsage {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_PropertyDefinitionRelationship extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aRelatingPropertyDefinition: any, aRelatedPropertyDefinition: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  RelatingPropertyDefinition(): any;
  SetRelatingPropertyDefinition(RelatingPropertyDefinition: any): void;
  RelatedPropertyDefinition(): any;
  SetRelatedPropertyDefinition(RelatedPropertyDefinition: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_QuantifiedAssemblyComponentUsage extends StepRepr_AssemblyComponentUsage {
  constructor()
  Init_1(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: any, aProductDefinitionRelationship_RelatedProductDefinition: any, hasAssemblyComponentUsage_ReferenceDesignator: Standard_Boolean, aAssemblyComponentUsage_ReferenceDesignator: any, aQuantity: any): void;
  Init_2(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: StepBasic_ProductDefinitionOrReference, aProductDefinitionRelationship_RelatedProductDefinition: StepBasic_ProductDefinitionOrReference, hasAssemblyComponentUsage_ReferenceDesignator: Standard_Boolean, aAssemblyComponentUsage_ReferenceDesignator: any, aQuantity: any): void;
  Quantity(): any;
  SetQuantity(Quantity: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ReprItemAndMeasureWithUnit extends StepRepr_RepresentationItem {
  constructor()
  Init(aMWU: any, aRI: any): void;
  GetMeasureRepresentationItem(): any;
  SetMeasureWithUnit(aMWU: any): void;
  GetMeasureWithUnit(): any;
  GetRepresentationItem(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ReprItemAndLengthMeasureWithUnit extends StepRepr_ReprItemAndMeasureWithUnit {
  constructor()
  SetLengthMeasureWithUnit(aLMWU: any): void;
  GetLengthMeasureWithUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ReprItemAndMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnit {
  constructor()
  Init(aMWU: any, aRI: any, aQRI: any): void;
  SetQualifiedRepresentationItem(aQRI: any): void;
  GetQualifiedRepresentationItem(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnitAndQRI {
  constructor()
  SetLengthMeasureWithUnit(aLMWU: any): void;
  GetLengthMeasureWithUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ReprItemAndPlaneAngleMeasureWithUnit extends StepRepr_ReprItemAndMeasureWithUnit {
  constructor()
  SetPlaneAngleMeasureWithUnit(aLMWU: any): void;
  GetPlaneAngleMeasureWithUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnitAndQRI {
  constructor()
  SetPlaneAngleMeasureWithUnit(aLMWU: any): void;
  GetPlaneAngleMeasureWithUnit(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_RepresentationMap extends Standard_Transient {
  constructor()
  Init(aMappingOrigin: any, aMappedRepresentation: any): void;
  SetMappingOrigin(aMappingOrigin: any): void;
  MappingOrigin(): any;
  SetMappedRepresentation(aMappedRepresentation: any): void;
  MappedRepresentation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_Transformation extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ItemDefinedTransformation(): any;
  FunctionallyDefinedTransformation(): any;
}

export declare class StepRepr_ShapeRepresentationRelationship extends StepRepr_RepresentationRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_RepresentationRelationshipWithTransformation extends StepRepr_ShapeRepresentationRelationship {
  constructor()
  Init(aName: any, aDescription: any, aRep1: any, aRep2: any, aTransf: StepRepr_Transformation): void;
  TransformationOperator(): StepRepr_Transformation;
  SetTransformationOperator(aTrans: StepRepr_Transformation): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ShapeAspectDerivingRelationship extends StepRepr_ShapeAspectRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ShapeAspectTransition extends StepRepr_ShapeAspectRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ShapeDefinition extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionShape(): any;
  ShapeAspect(): any;
  ShapeAspectRelationship(): any;
}

export declare class StepRepr_ShapeRepresentationRelationshipWithTransformation extends StepRepr_RepresentationRelationshipWithTransformation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_SpecifiedHigherUsageOccurrence extends StepRepr_AssemblyComponentUsage {
  constructor()
  Init_1(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: any, aProductDefinitionRelationship_RelatedProductDefinition: any, hasAssemblyComponentUsage_ReferenceDesignator: Standard_Boolean, aAssemblyComponentUsage_ReferenceDesignator: any, aUpperUsage: any, aNextUsage: any): void;
  Init_2(aProductDefinitionRelationship_Id: any, aProductDefinitionRelationship_Name: any, hasProductDefinitionRelationship_Description: Standard_Boolean, aProductDefinitionRelationship_Description: any, aProductDefinitionRelationship_RelatingProductDefinition: StepBasic_ProductDefinitionOrReference, aProductDefinitionRelationship_RelatedProductDefinition: StepBasic_ProductDefinitionOrReference, hasAssemblyComponentUsage_ReferenceDesignator: Standard_Boolean, aAssemblyComponentUsage_ReferenceDesignator: any, aUpperUsage: any, aNextUsage: any): void;
  UpperUsage(): any;
  SetUpperUsage(UpperUsage: any): void;
  NextUsage(): any;
  SetNextUsage(NextUsage: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_StructuralResponseProperty extends StepRepr_PropertyDefinition {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_StructuralResponsePropertyDefinitionRepresentation extends StepRepr_PropertyDefinitionRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_SuppliedPartRelationship extends StepBasic_ProductDefinitionRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_Tangent extends StepRepr_DerivedShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ValueRange extends StepRepr_CompoundRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepRepr_ValueRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  Init(theName: any, theValueComponentMember: any): void;
  SetValueComponentMember(theValueComponentMember: any): void;
  ValueComponentMember(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ShapeRepresentation extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_AdvancedBrepShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_TopologicalRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_FaceBound extends StepShape_TopologicalRepresentationItem {
  constructor()
  Init(aName: any, aBound: any, aOrientation: Standard_Boolean): void;
  SetBound(aBound: any): void;
  Bound(): any;
  SetOrientation(aOrientation: Standard_Boolean): void;
  Orientation(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Face extends StepShape_TopologicalRepresentationItem {
  constructor()
  Init(aName: any, aBounds: any): void;
  SetBounds(aBounds: any): void;
  Bounds(): any;
  BoundsValue(num: Standard_Integer): any;
  NbBounds(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_FaceSurface extends StepShape_Face {
  constructor()
  Init(aName: any, aBounds: any, aFaceGeometry: any, aSameSense: Standard_Boolean): void;
  SetFaceGeometry(aFaceGeometry: any): void;
  FaceGeometry(): any;
  SetSameSense(aSameSense: Standard_Boolean): void;
  SameSense(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_AdvancedFace extends StepShape_FaceSurface {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_DimensionalLocation extends StepRepr_ShapeAspectRelationship {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_AngularLocation extends StepShape_DimensionalLocation {
  constructor()
  Init(aShapeAspectRelationship_Name: any, hasShapeAspectRelationship_Description: Standard_Boolean, aShapeAspectRelationship_Description: any, aShapeAspectRelationship_RelatingShapeAspect: any, aShapeAspectRelationship_RelatedShapeAspect: any, aAngleSelection: StepShape_AngleRelator): void;
  AngleSelection(): StepShape_AngleRelator;
  SetAngleSelection(AngleSelection: StepShape_AngleRelator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_DimensionalSize extends Standard_Transient {
  constructor()
  Init(aAppliesTo: any, aName: any): void;
  AppliesTo(): any;
  SetAppliesTo(AppliesTo: any): void;
  Name(): any;
  SetName(Name: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_AngularSize extends StepShape_DimensionalSize {
  constructor()
  Init(aDimensionalSize_AppliesTo: any, aDimensionalSize_Name: any, aAngleSelection: StepShape_AngleRelator): void;
  AngleSelection(): StepShape_AngleRelator;
  SetAngleSelection(AngleSelection: StepShape_AngleRelator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Vertex extends StepShape_TopologicalRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Edge extends StepShape_TopologicalRepresentationItem {
  constructor()
  Init(aName: any, aEdgeStart: any, aEdgeEnd: any): void;
  SetEdgeStart(aEdgeStart: any): void;
  EdgeStart(): any;
  SetEdgeEnd(aEdgeEnd: any): void;
  EdgeEnd(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ConnectedEdgeSet extends StepShape_TopologicalRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aCesEdges: any): void;
  CesEdges(): any;
  SetCesEdges(CesEdges: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ConnectedFaceSet extends StepShape_TopologicalRepresentationItem {
  constructor()
  Init(aName: any, aCfsFaces: any): void;
  SetCfsFaces(aCfsFaces: any): void;
  CfsFaces(): any;
  CfsFacesValue(num: Standard_Integer): any;
  NbCfsFaces(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_GeometricSetSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Point(): any;
  Curve(): any;
  Surface(): any;
}

export declare class StepShape_ClosedShell extends StepShape_ConnectedFaceSet {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_OrientedClosedShell extends StepShape_ClosedShell {
  constructor()
  Init(aName: any, aClosedShellElement: any, aOrientation: Standard_Boolean): void;
  SetClosedShellElement(aClosedShellElement: any): void;
  ClosedShellElement(): any;
  SetOrientation(aOrientation: Standard_Boolean): void;
  Orientation(): Standard_Boolean;
  SetCfsFaces(aCfsFaces: any): void;
  CfsFaces(): any;
  CfsFacesValue(num: Standard_Integer): any;
  NbCfsFaces(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_OrientedEdge extends StepShape_Edge {
  constructor()
  Init(aName: any, aEdgeElement: any, aOrientation: Standard_Boolean): void;
  SetEdgeElement(aEdgeElement: any): void;
  EdgeElement(): any;
  SetOrientation(aOrientation: Standard_Boolean): void;
  Orientation(): Standard_Boolean;
  SetEdgeStart(aEdgeStart: any): void;
  EdgeStart(): any;
  SetEdgeEnd(aEdgeEnd: any): void;
  EdgeEnd(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ShapeDimensionRepresentationItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CompoundRepresentationItem(): any;
  DescriptiveRepresentationItem(): any;
  MeasureRepresentationItem(): any;
  Placement(): any;
}

export declare class StepShape_Shell extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  OpenShell(): any;
  ClosedShell(): any;
}

export declare class StepShape_ValueQualifier extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  PrecisionQualifier(): any;
  TypeQualifier(): any;
  ValueFormatTypeQualifier(): any;
}

export declare class StepShape_Block extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aPosition: any, aX: Standard_Real, aY: Standard_Real, aZ: Standard_Real): void;
  SetPosition(aPosition: any): void;
  Position(): any;
  SetX(aX: Standard_Real): void;
  X(): Standard_Real;
  SetY(aY: Standard_Real): void;
  Y(): Standard_Real;
  SetZ(aZ: Standard_Real): void;
  Z(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_CsgPrimitive extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Sphere(): any;
  Block(): any;
  RightAngularWedge(): any;
  Torus(): any;
  RightCircularCone(): any;
  RightCircularCylinder(): any;
}

export declare class StepShape_BooleanOperand {
  constructor()
  SetTypeOfContent(aTypeOfContent: Standard_Integer): void;
  TypeOfContent(): Standard_Integer;
  SolidModel(): any;
  SetSolidModel(aSolidModel: any): void;
  HalfSpaceSolid(): any;
  SetHalfSpaceSolid(aHalfSpaceSolid: any): void;
  CsgPrimitive(): StepShape_CsgPrimitive;
  SetCsgPrimitive(aCsgPrimitive: StepShape_CsgPrimitive): void;
  BooleanResult(): any;
  SetBooleanResult(aBooleanResult: any): void;
}

export declare class StepShape_BooleanResult extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aOperator: StepShape_BooleanOperator, aFirstOperand: StepShape_BooleanOperand, aSecondOperand: StepShape_BooleanOperand): void;
  SetOperator(aOperator: StepShape_BooleanOperator): void;
  Operator(): StepShape_BooleanOperator;
  SetFirstOperand(aFirstOperand: StepShape_BooleanOperand): void;
  FirstOperand(): StepShape_BooleanOperand;
  SetSecondOperand(aSecondOperand: StepShape_BooleanOperand): void;
  SecondOperand(): StepShape_BooleanOperand;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_BoxDomain extends Standard_Transient {
  constructor()
  Init(aCorner: any, aXlength: Standard_Real, aYlength: Standard_Real, aZlength: Standard_Real): void;
  SetCorner(aCorner: any): void;
  Corner(): any;
  SetXlength(aXlength: Standard_Real): void;
  Xlength(): Standard_Real;
  SetYlength(aYlength: Standard_Real): void;
  Ylength(): Standard_Real;
  SetZlength(aZlength: Standard_Real): void;
  Zlength(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_HalfSpaceSolid extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aBaseSurface: any, aAgreementFlag: Standard_Boolean): void;
  SetBaseSurface(aBaseSurface: any): void;
  BaseSurface(): any;
  SetAgreementFlag(aAgreementFlag: Standard_Boolean): void;
  AgreementFlag(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_BoxedHalfSpace extends StepShape_HalfSpaceSolid {
  constructor()
  Init(aName: any, aBaseSurface: any, aAgreementFlag: Standard_Boolean, aEnclosure: any): void;
  SetEnclosure(aEnclosure: any): void;
  Enclosure(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_SolidModel extends StepGeom_GeometricRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ManifoldSolidBrep extends StepShape_SolidModel {
  constructor()
  Init_1(aName: any, aOuter: any): void;
  Init_2(aName: any, aOuter: any): void;
  SetOuter(aOuter: any): void;
  Outer(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_BrepWithVoids extends StepShape_ManifoldSolidBrep {
  constructor()
  Init(aName: any, aOuter: any, aVoids: any): void;
  SetVoids(aVoids: any): void;
  Voids(): any;
  VoidsValue(num: Standard_Integer): any;
  NbVoids(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_CompoundShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ConnectedFaceShapeRepresentation extends StepRepr_Representation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ConnectedFaceSubSet extends StepShape_ConnectedFaceSet {
  constructor()
  Init(aRepresentationItem_Name: any, aConnectedFaceSet_CfsFaces: any, aParentFaceSet: any): void;
  ParentFaceSet(): any;
  SetParentFaceSet(ParentFaceSet: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ContextDependentShapeRepresentation extends Standard_Transient {
  constructor()
  Init(aRepRel: any, aProRel: any): void;
  RepresentationRelation(): any;
  SetRepresentationRelation(aRepRel: any): void;
  RepresentedProductRelation(): any;
  SetRepresentedProductRelation(aProRel: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_CsgSelect {
  constructor()
  SetTypeOfContent(aTypeOfContent: Standard_Integer): void;
  TypeOfContent(): Standard_Integer;
  BooleanResult(): any;
  SetBooleanResult(aBooleanResult: any): void;
  CsgPrimitive(): StepShape_CsgPrimitive;
  SetCsgPrimitive(aCsgPrimitive: StepShape_CsgPrimitive): void;
}

export declare class StepShape_CsgShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_CsgSolid extends StepShape_SolidModel {
  constructor()
  Init(aName: any, aTreeRootExpression: StepShape_CsgSelect): void;
  SetTreeRootExpression(aTreeRootExpression: StepShape_CsgSelect): void;
  TreeRootExpression(): StepShape_CsgSelect;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_DefinitionalRepresentationAndShapeRepresentation extends StepRepr_DefinitionalRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_DimensionalCharacteristic extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  DimensionalLocation(): any;
  DimensionalSize(): any;
}

export declare class StepShape_DimensionalCharacteristicRepresentation extends Standard_Transient {
  constructor()
  Init(aDimension: StepShape_DimensionalCharacteristic, aRepresentation: any): void;
  Dimension(): StepShape_DimensionalCharacteristic;
  SetDimension(Dimension: StepShape_DimensionalCharacteristic): void;
  Representation(): any;
  SetRepresentation(Representation: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_DimensionalLocationWithPath extends StepShape_DimensionalLocation {
  constructor()
  Init(aShapeAspectRelationship_Name: any, hasShapeAspectRelationship_Description: Standard_Boolean, aShapeAspectRelationship_Description: any, aShapeAspectRelationship_RelatingShapeAspect: any, aShapeAspectRelationship_RelatedShapeAspect: any, aPath: any): void;
  Path(): any;
  SetPath(Path: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_DimensionalSizeWithPath extends StepShape_DimensionalSize {
  constructor()
  Init(aDimensionalSize_AppliesTo: any, aDimensionalSize_Name: any, aPath: any): void;
  Path(): any;
  SetPath(Path: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_DirectedDimensionalLocation extends StepShape_DimensionalLocation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_EdgeBasedWireframeModel extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aEbwmBoundary: any): void;
  EbwmBoundary(): any;
  SetEbwmBoundary(EbwmBoundary: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_EdgeBasedWireframeShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_EdgeCurve extends StepShape_Edge {
  constructor()
  Init(aName: any, aEdgeStart: any, aEdgeEnd: any, aEdgeGeometry: any, aSameSense: Standard_Boolean): void;
  SetEdgeGeometry(aEdgeGeometry: any): void;
  EdgeGeometry(): any;
  SetSameSense(aSameSense: Standard_Boolean): void;
  SameSense(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Loop extends StepShape_TopologicalRepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_EdgeLoop extends StepShape_Loop {
  constructor()
  Init(aName: any, aEdgeList: any): void;
  SetEdgeList(aEdgeList: any): void;
  EdgeList(): any;
  EdgeListValue(num: Standard_Integer): any;
  NbEdgeList(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_SweptAreaSolid extends StepShape_SolidModel {
  constructor()
  Init(aName: any, aSweptArea: any): void;
  SetSweptArea(aSweptArea: any): void;
  SweptArea(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ExtrudedAreaSolid extends StepShape_SweptAreaSolid {
  constructor()
  Init(aName: any, aSweptArea: any, aExtrudedDirection: any, aDepth: Standard_Real): void;
  SetExtrudedDirection(aExtrudedDirection: any): void;
  ExtrudedDirection(): any;
  SetDepth(aDepth: Standard_Real): void;
  Depth(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_SweptFaceSolid extends StepShape_SolidModel {
  constructor()
  Init(aName: any, aSweptArea: any): void;
  SetSweptFace(aSweptArea: any): void;
  SweptFace(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ExtrudedFaceSolid extends StepShape_SweptFaceSolid {
  constructor()
  Init(aName: any, aSweptArea: any, aExtrudedDirection: any, aDepth: Standard_Real): void;
  SetExtrudedDirection(aExtrudedDirection: any): void;
  ExtrudedDirection(): any;
  SetDepth(aDepth: Standard_Real): void;
  Depth(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_FaceBasedSurfaceModel extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFbsmFaces: any): void;
  FbsmFaces(): any;
  SetFbsmFaces(FbsmFaces: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_FaceOuterBound extends StepShape_FaceBound {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_FacetedBrep extends StepShape_ManifoldSolidBrep {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_FacetedBrepAndBrepWithVoids extends StepShape_ManifoldSolidBrep {
  constructor()
  Init_1(aName: any, aOuter: any, aFacetedBrep: any, aBrepWithVoids: any): void;
  Init_2(aName: any, aOuter: any, aVoids: any): void;
  SetFacetedBrep(aFacetedBrep: any): void;
  FacetedBrep(): any;
  SetBrepWithVoids(aBrepWithVoids: any): void;
  BrepWithVoids(): any;
  SetVoids(aVoids: any): void;
  Voids(): any;
  VoidsValue(num: Standard_Integer): any;
  NbVoids(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_FacetedBrepShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_GeometricSet extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aElements: any): void;
  SetElements(aElements: any): void;
  Elements(): any;
  ElementsValue(num: Standard_Integer): StepShape_GeometricSetSelect;
  NbElements(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_GeometricCurveSet extends StepShape_GeometricSet {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_GeometricallyBoundedSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_GeometricallyBoundedWireframeShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_LoopAndPath extends StepShape_TopologicalRepresentationItem {
  constructor()
  Init_1(aName: any, aLoop: any, aPath: any): void;
  Init_2(aName: any, aEdgeList: any): void;
  SetLoop(aLoop: any): void;
  Loop(): any;
  SetPath(aPath: any): void;
  Path(): any;
  SetEdgeList(aEdgeList: any): void;
  EdgeList(): any;
  EdgeListValue(num: Standard_Integer): any;
  NbEdgeList(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ManifoldSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_MeasureQualification extends Standard_Transient {
  constructor()
  Init(name: any, description: any, qualified_measure: any, qualifiers: any): void;
  Name(): any;
  SetName(name: any): void;
  Description(): any;
  SetDescription(description: any): void;
  QualifiedMeasure(): any;
  SetQualifiedMeasure(qualified_measure: any): void;
  Qualifiers(): any;
  NbQualifiers(): Standard_Integer;
  SetQualifiers(qualifiers: any): void;
  QualifiersValue(num: Standard_Integer): StepShape_ValueQualifier;
  SetQualifiersValue(num: Standard_Integer, aqualifier: StepShape_ValueQualifier): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  Init(aName: any, aValueComponent: any, aUnitComponent: StepBasic_Unit, qualifiers: any): void;
  SetMeasure(Measure: any): void;
  Measure(): any;
  Qualifiers(): any;
  NbQualifiers(): Standard_Integer;
  SetQualifiers(qualifiers: any): void;
  QualifiersValue(num: Standard_Integer): StepShape_ValueQualifier;
  SetQualifiersValue(num: Standard_Integer, aqualifier: StepShape_ValueQualifier): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_NonManifoldSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_OpenShell extends StepShape_ConnectedFaceSet {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_OrientedFace extends StepShape_Face {
  constructor()
  Init(aName: any, aFaceElement: any, aOrientation: Standard_Boolean): void;
  SetFaceElement(aFaceElement: any): void;
  FaceElement(): any;
  SetOrientation(aOrientation: Standard_Boolean): void;
  Orientation(): Standard_Boolean;
  SetBounds(aBounds: any): void;
  Bounds(): any;
  BoundsValue(num: Standard_Integer): any;
  NbBounds(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_OrientedOpenShell extends StepShape_OpenShell {
  constructor()
  Init(aName: any, aOpenShellElement: any, aOrientation: Standard_Boolean): void;
  SetOpenShellElement(aOpenShellElement: any): void;
  OpenShellElement(): any;
  SetOrientation(aOrientation: Standard_Boolean): void;
  Orientation(): Standard_Boolean;
  SetCfsFaces(aCfsFaces: any): void;
  CfsFaces(): any;
  CfsFacesValue(num: Standard_Integer): any;
  NbCfsFaces(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Path extends StepShape_TopologicalRepresentationItem {
  constructor()
  Init(aName: any, aEdgeList: any): void;
  SetEdgeList(aEdgeList: any): void;
  EdgeList(): any;
  EdgeListValue(num: Standard_Integer): any;
  NbEdgeList(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_OrientedPath extends StepShape_Path {
  constructor()
  Init(aName: any, aPathElement: any, aOrientation: Standard_Boolean): void;
  SetPathElement(aPathElement: any): void;
  PathElement(): any;
  SetOrientation(aOrientation: Standard_Boolean): void;
  Orientation(): Standard_Boolean;
  SetEdgeList(aEdgeList: any): void;
  EdgeList(): any;
  EdgeListValue(num: Standard_Integer): any;
  NbEdgeList(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ToleranceMethodDefinition extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ToleranceValue(): any;
  LimitsAndFits(): any;
}

export declare class StepShape_PlusMinusTolerance extends Standard_Transient {
  constructor()
  Init(range: StepShape_ToleranceMethodDefinition, toleranced_dimension: StepShape_DimensionalCharacteristic): void;
  Range(): StepShape_ToleranceMethodDefinition;
  SetRange(range: StepShape_ToleranceMethodDefinition): void;
  TolerancedDimension(): StepShape_DimensionalCharacteristic;
  SetTolerancedDimension(toleranced_dimension: StepShape_DimensionalCharacteristic): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_PointRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_PolyLoop extends StepShape_Loop {
  constructor()
  Init(aName: any, aPolygon: any): void;
  SetPolygon(aPolygon: any): void;
  Polygon(): any;
  PolygonValue(num: Standard_Integer): any;
  NbPolygon(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_PrecisionQualifier extends Standard_Transient {
  constructor()
  Init(precision_value: Standard_Integer): void;
  PrecisionValue(): Standard_Integer;
  SetPrecisionValue(precision_value: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_QualifiedRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  Init(aName: any, qualifiers: any): void;
  Qualifiers(): any;
  NbQualifiers(): Standard_Integer;
  SetQualifiers(qualifiers: any): void;
  QualifiersValue(num: Standard_Integer): StepShape_ValueQualifier;
  SetQualifiersValue(num: Standard_Integer, aqualifier: StepShape_ValueQualifier): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ReversibleTopologyItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Edge(): any;
  Path(): any;
  Face(): any;
  FaceBound(): any;
  ClosedShell(): any;
  OpenShell(): any;
}

export declare class StepShape_RevolvedAreaSolid extends StepShape_SweptAreaSolid {
  constructor()
  Init(aName: any, aSweptArea: any, aAxis: any, aAngle: Standard_Real): void;
  SetAxis(aAxis: any): void;
  Axis(): any;
  SetAngle(aAngle: Standard_Real): void;
  Angle(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_RevolvedFaceSolid extends StepShape_SweptFaceSolid {
  constructor()
  Init_1(aName: any, aSweptArea: any): void;
  Init_2(aName: any, aSweptArea: any, aAxis: any, aAngle: Standard_Real): void;
  SetAxis(aAxis: any): void;
  Axis(): any;
  SetAngle(aAngle: Standard_Real): void;
  Angle(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_RightAngularWedge extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aPosition: any, aX: Standard_Real, aY: Standard_Real, aZ: Standard_Real, aLtx: Standard_Real): void;
  SetPosition(aPosition: any): void;
  Position(): any;
  SetX(aX: Standard_Real): void;
  X(): Standard_Real;
  SetY(aY: Standard_Real): void;
  Y(): Standard_Real;
  SetZ(aZ: Standard_Real): void;
  Z(): Standard_Real;
  SetLtx(aLtx: Standard_Real): void;
  Ltx(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_RightCircularCone extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aPosition: any, aHeight: Standard_Real, aRadius: Standard_Real, aSemiAngle: Standard_Real): void;
  SetPosition(aPosition: any): void;
  Position(): any;
  SetHeight(aHeight: Standard_Real): void;
  Height(): Standard_Real;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  SetSemiAngle(aSemiAngle: Standard_Real): void;
  SemiAngle(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_RightCircularCylinder extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aPosition: any, aHeight: Standard_Real, aRadius: Standard_Real): void;
  SetPosition(aPosition: any): void;
  Position(): any;
  SetHeight(aHeight: Standard_Real): void;
  Height(): Standard_Real;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_SeamEdge extends StepShape_OrientedEdge {
  constructor()
  Init(aRepresentationItem_Name: any, aOrientedEdge_EdgeElement: any, aOrientedEdge_Orientation: Standard_Boolean, aPcurveReference: any): void;
  PcurveReference(): any;
  SetPcurveReference(PcurveReference: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ShapeDimensionRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  Init_1(theName: any, theItems: any, theContextOfItems: any): void;
  Init_2(theName: any, theItems: any, theContextOfItems: any): void;
  SetItemsAP242(theItems: any): void;
  ItemsAP242(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ShapeRepresentationWithParameters extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ShellBasedSurfaceModel extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aSbsmBoundary: any): void;
  SetSbsmBoundary(aSbsmBoundary: any): void;
  SbsmBoundary(): any;
  SbsmBoundaryValue(num: Standard_Integer): StepShape_Shell;
  NbSbsmBoundary(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_SolidReplica extends StepShape_SolidModel {
  constructor()
  Init(aName: any, aParentSolid: any, aTransformation: any): void;
  SetParentSolid(aParentSolid: any): void;
  ParentSolid(): any;
  SetTransformation(aTransformation: any): void;
  Transformation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Sphere extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aRadius: Standard_Real, aCentre: any): void;
  SetRadius(aRadius: Standard_Real): void;
  Radius(): Standard_Real;
  SetCentre(aCentre: any): void;
  Centre(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Subedge extends StepShape_Edge {
  constructor()
  Init(aRepresentationItem_Name: any, aEdge_EdgeStart: any, aEdge_EdgeEnd: any, aParentEdge: any): void;
  ParentEdge(): any;
  SetParentEdge(ParentEdge: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Subface extends StepShape_Face {
  constructor()
  Init(aRepresentationItem_Name: any, aFace_Bounds: any, aParentFace: any): void;
  ParentFace(): any;
  SetParentFace(ParentFace: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_SurfaceModel extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ShellBasedSurfaceModel(): any;
}

export declare class StepShape_ToleranceValue extends Standard_Transient {
  constructor()
  Init(lower_bound: any, upper_bound: any): void;
  LowerBound(): any;
  SetLowerBound(lower_bound: any): void;
  UpperBound(): any;
  SetUpperBound(upper_bound: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_Torus extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aName: any, aPosition: any, aMajorRadius: Standard_Real, aMinorRadius: Standard_Real): void;
  SetPosition(aPosition: any): void;
  Position(): any;
  SetMajorRadius(aMajorRadius: Standard_Real): void;
  MajorRadius(): Standard_Real;
  SetMinorRadius(aMinorRadius: Standard_Real): void;
  MinorRadius(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_TransitionalShapeRepresentation extends StepShape_ShapeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_TypeQualifier extends Standard_Transient {
  constructor()
  Init(name: any): void;
  Name(): any;
  SetName(name: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_ValueFormatTypeQualifier extends Standard_Transient {
  constructor()
  Init(theFormatType: any): void;
  FormatType(): any;
  SetFormatType(theFormatType: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_VertexLoop extends StepShape_Loop {
  constructor()
  Init(aName: any, aLoopVertex: any): void;
  SetLoopVertex(aLoopVertex: any): void;
  LoopVertex(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepShape_VertexPoint extends StepShape_Vertex {
  constructor()
  Init(aName: any, aVertexGeometry: any): void;
  SetVertexGeometry(aVertexGeometry: any): void;
  VertexGeometry(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_StepRepr_RepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_RepresentationItem): void;
  get(): StepRepr_RepresentationItem;
}

  export declare class Handle_StepRepr_RepresentationItem_1 extends Handle_StepRepr_RepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_RepresentationItem_2 extends Handle_StepRepr_RepresentationItem {
    constructor(thePtr: StepRepr_RepresentationItem);
  }

  export declare class Handle_StepRepr_RepresentationItem_3 extends Handle_StepRepr_RepresentationItem {
    constructor(theHandle: Handle_StepRepr_RepresentationItem);
  }

  export declare class Handle_StepRepr_RepresentationItem_4 extends Handle_StepRepr_RepresentationItem {
    constructor(theHandle: Handle_StepRepr_RepresentationItem);
  }

export declare class Handle_StepGeom_GeometricRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_GeometricRepresentationItem): void;
  get(): StepGeom_GeometricRepresentationItem;
}

  export declare class Handle_StepGeom_GeometricRepresentationItem_1 extends Handle_StepGeom_GeometricRepresentationItem {
    constructor();
  }

  export declare class Handle_StepGeom_GeometricRepresentationItem_2 extends Handle_StepGeom_GeometricRepresentationItem {
    constructor(thePtr: StepGeom_GeometricRepresentationItem);
  }

  export declare class Handle_StepGeom_GeometricRepresentationItem_3 extends Handle_StepGeom_GeometricRepresentationItem {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationItem);
  }

  export declare class Handle_StepGeom_GeometricRepresentationItem_4 extends Handle_StepGeom_GeometricRepresentationItem {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationItem);
  }

export declare class Handle_StepBasic_ProductDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinition): void;
  get(): StepBasic_ProductDefinition;
}

  export declare class Handle_StepBasic_ProductDefinition_1 extends Handle_StepBasic_ProductDefinition {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinition_2 extends Handle_StepBasic_ProductDefinition {
    constructor(thePtr: StepBasic_ProductDefinition);
  }

  export declare class Handle_StepBasic_ProductDefinition_3 extends Handle_StepBasic_ProductDefinition {
    constructor(theHandle: Handle_StepBasic_ProductDefinition);
  }

  export declare class Handle_StepBasic_ProductDefinition_4 extends Handle_StepBasic_ProductDefinition {
    constructor(theHandle: Handle_StepBasic_ProductDefinition);
  }

export declare class Handle_StepRepr_PropertyDefinitionRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_PropertyDefinitionRepresentation): void;
  get(): StepRepr_PropertyDefinitionRepresentation;
}

  export declare class Handle_StepRepr_PropertyDefinitionRepresentation_1 extends Handle_StepRepr_PropertyDefinitionRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_PropertyDefinitionRepresentation_2 extends Handle_StepRepr_PropertyDefinitionRepresentation {
    constructor(thePtr: StepRepr_PropertyDefinitionRepresentation);
  }

  export declare class Handle_StepRepr_PropertyDefinitionRepresentation_3 extends Handle_StepRepr_PropertyDefinitionRepresentation {
    constructor(theHandle: Handle_StepRepr_PropertyDefinitionRepresentation);
  }

  export declare class Handle_StepRepr_PropertyDefinitionRepresentation_4 extends Handle_StepRepr_PropertyDefinitionRepresentation {
    constructor(theHandle: Handle_StepRepr_PropertyDefinitionRepresentation);
  }

export declare class Handle_StepShape_ShapeDefinitionRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ShapeDefinitionRepresentation): void;
  get(): StepShape_ShapeDefinitionRepresentation;
}

  export declare class Handle_StepShape_ShapeDefinitionRepresentation_1 extends Handle_StepShape_ShapeDefinitionRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_ShapeDefinitionRepresentation_2 extends Handle_StepShape_ShapeDefinitionRepresentation {
    constructor(thePtr: StepShape_ShapeDefinitionRepresentation);
  }

  export declare class Handle_StepShape_ShapeDefinitionRepresentation_3 extends Handle_StepShape_ShapeDefinitionRepresentation {
    constructor(theHandle: Handle_StepShape_ShapeDefinitionRepresentation);
  }

  export declare class Handle_StepShape_ShapeDefinitionRepresentation_4 extends Handle_StepShape_ShapeDefinitionRepresentation {
    constructor(theHandle: Handle_StepShape_ShapeDefinitionRepresentation);
  }

export declare class Handle_StepBasic_MeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_MeasureWithUnit): void;
  get(): StepBasic_MeasureWithUnit;
}

  export declare class Handle_StepBasic_MeasureWithUnit_1 extends Handle_StepBasic_MeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_MeasureWithUnit_2 extends Handle_StepBasic_MeasureWithUnit {
    constructor(thePtr: StepBasic_MeasureWithUnit);
  }

  export declare class Handle_StepBasic_MeasureWithUnit_3 extends Handle_StepBasic_MeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_MeasureWithUnit);
  }

  export declare class Handle_StepBasic_MeasureWithUnit_4 extends Handle_StepBasic_MeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_MeasureWithUnit);
  }

export declare class Handle_StepBasic_LengthMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_LengthMeasureWithUnit): void;
  get(): StepBasic_LengthMeasureWithUnit;
}

  export declare class Handle_StepBasic_LengthMeasureWithUnit_1 extends Handle_StepBasic_LengthMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_LengthMeasureWithUnit_2 extends Handle_StepBasic_LengthMeasureWithUnit {
    constructor(thePtr: StepBasic_LengthMeasureWithUnit);
  }

  export declare class Handle_StepBasic_LengthMeasureWithUnit_3 extends Handle_StepBasic_LengthMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_LengthMeasureWithUnit);
  }

  export declare class Handle_StepBasic_LengthMeasureWithUnit_4 extends Handle_StepBasic_LengthMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_LengthMeasureWithUnit);
  }

export declare class Handle_StepGeom_Placement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Placement): void;
  get(): StepGeom_Placement;
}

  export declare class Handle_StepGeom_Placement_1 extends Handle_StepGeom_Placement {
    constructor();
  }

  export declare class Handle_StepGeom_Placement_2 extends Handle_StepGeom_Placement {
    constructor(thePtr: StepGeom_Placement);
  }

  export declare class Handle_StepGeom_Placement_3 extends Handle_StepGeom_Placement {
    constructor(theHandle: Handle_StepGeom_Placement);
  }

  export declare class Handle_StepGeom_Placement_4 extends Handle_StepGeom_Placement {
    constructor(theHandle: Handle_StepGeom_Placement);
  }

export declare class Handle_StepGeom_Axis2Placement3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Axis2Placement3d): void;
  get(): StepGeom_Axis2Placement3d;
}

  export declare class Handle_StepGeom_Axis2Placement3d_1 extends Handle_StepGeom_Axis2Placement3d {
    constructor();
  }

  export declare class Handle_StepGeom_Axis2Placement3d_2 extends Handle_StepGeom_Axis2Placement3d {
    constructor(thePtr: StepGeom_Axis2Placement3d);
  }

  export declare class Handle_StepGeom_Axis2Placement3d_3 extends Handle_StepGeom_Axis2Placement3d {
    constructor(theHandle: Handle_StepGeom_Axis2Placement3d);
  }

  export declare class Handle_StepGeom_Axis2Placement3d_4 extends Handle_StepGeom_Axis2Placement3d {
    constructor(theHandle: Handle_StepGeom_Axis2Placement3d);
  }

export declare class Handle_StepRepr_HArray1OfRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_HArray1OfRepresentationItem): void;
  get(): StepRepr_HArray1OfRepresentationItem;
}

  export declare class Handle_StepRepr_HArray1OfRepresentationItem_1 extends Handle_StepRepr_HArray1OfRepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_HArray1OfRepresentationItem_2 extends Handle_StepRepr_HArray1OfRepresentationItem {
    constructor(thePtr: StepRepr_HArray1OfRepresentationItem);
  }

  export declare class Handle_StepRepr_HArray1OfRepresentationItem_3 extends Handle_StepRepr_HArray1OfRepresentationItem {
    constructor(theHandle: Handle_StepRepr_HArray1OfRepresentationItem);
  }

  export declare class Handle_StepRepr_HArray1OfRepresentationItem_4 extends Handle_StepRepr_HArray1OfRepresentationItem {
    constructor(theHandle: Handle_StepRepr_HArray1OfRepresentationItem);
  }

export declare class Handle_StepRepr_CompoundRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_CompoundRepresentationItem): void;
  get(): StepRepr_CompoundRepresentationItem;
}

  export declare class Handle_StepRepr_CompoundRepresentationItem_1 extends Handle_StepRepr_CompoundRepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_CompoundRepresentationItem_2 extends Handle_StepRepr_CompoundRepresentationItem {
    constructor(thePtr: StepRepr_CompoundRepresentationItem);
  }

  export declare class Handle_StepRepr_CompoundRepresentationItem_3 extends Handle_StepRepr_CompoundRepresentationItem {
    constructor(theHandle: Handle_StepRepr_CompoundRepresentationItem);
  }

  export declare class Handle_StepRepr_CompoundRepresentationItem_4 extends Handle_StepRepr_CompoundRepresentationItem {
    constructor(theHandle: Handle_StepRepr_CompoundRepresentationItem);
  }

export declare class Handle_StepShape_LimitsAndFits {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_LimitsAndFits): void;
  get(): StepShape_LimitsAndFits;
}

  export declare class Handle_StepShape_LimitsAndFits_1 extends Handle_StepShape_LimitsAndFits {
    constructor();
  }

  export declare class Handle_StepShape_LimitsAndFits_2 extends Handle_StepShape_LimitsAndFits {
    constructor(thePtr: StepShape_LimitsAndFits);
  }

  export declare class Handle_StepShape_LimitsAndFits_3 extends Handle_StepShape_LimitsAndFits {
    constructor(theHandle: Handle_StepShape_LimitsAndFits);
  }

  export declare class Handle_StepShape_LimitsAndFits_4 extends Handle_StepShape_LimitsAndFits {
    constructor(theHandle: Handle_StepShape_LimitsAndFits);
  }

export declare class Handle_StepRepr_ShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ShapeAspect): void;
  get(): StepRepr_ShapeAspect;
}

  export declare class Handle_StepRepr_ShapeAspect_1 extends Handle_StepRepr_ShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_ShapeAspect_2 extends Handle_StepRepr_ShapeAspect {
    constructor(thePtr: StepRepr_ShapeAspect);
  }

  export declare class Handle_StepRepr_ShapeAspect_3 extends Handle_StepRepr_ShapeAspect {
    constructor(theHandle: Handle_StepRepr_ShapeAspect);
  }

  export declare class Handle_StepRepr_ShapeAspect_4 extends Handle_StepRepr_ShapeAspect {
    constructor(theHandle: Handle_StepRepr_ShapeAspect);
  }

export declare class Handle_StepRepr_PropertyDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_PropertyDefinition): void;
  get(): StepRepr_PropertyDefinition;
}

  export declare class Handle_StepRepr_PropertyDefinition_1 extends Handle_StepRepr_PropertyDefinition {
    constructor();
  }

  export declare class Handle_StepRepr_PropertyDefinition_2 extends Handle_StepRepr_PropertyDefinition {
    constructor(thePtr: StepRepr_PropertyDefinition);
  }

  export declare class Handle_StepRepr_PropertyDefinition_3 extends Handle_StepRepr_PropertyDefinition {
    constructor(theHandle: Handle_StepRepr_PropertyDefinition);
  }

  export declare class Handle_StepRepr_PropertyDefinition_4 extends Handle_StepRepr_PropertyDefinition {
    constructor(theHandle: Handle_StepRepr_PropertyDefinition);
  }

export declare class Handle_StepRepr_ProductDefinitionShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ProductDefinitionShape): void;
  get(): StepRepr_ProductDefinitionShape;
}

  export declare class Handle_StepRepr_ProductDefinitionShape_1 extends Handle_StepRepr_ProductDefinitionShape {
    constructor();
  }

  export declare class Handle_StepRepr_ProductDefinitionShape_2 extends Handle_StepRepr_ProductDefinitionShape {
    constructor(thePtr: StepRepr_ProductDefinitionShape);
  }

  export declare class Handle_StepRepr_ProductDefinitionShape_3 extends Handle_StepRepr_ProductDefinitionShape {
    constructor(theHandle: Handle_StepRepr_ProductDefinitionShape);
  }

  export declare class Handle_StepRepr_ProductDefinitionShape_4 extends Handle_StepRepr_ProductDefinitionShape {
    constructor(theHandle: Handle_StepRepr_ProductDefinitionShape);
  }

export declare class Handle_StepRepr_Representation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_Representation): void;
  get(): StepRepr_Representation;
}

  export declare class Handle_StepRepr_Representation_1 extends Handle_StepRepr_Representation {
    constructor();
  }

  export declare class Handle_StepRepr_Representation_2 extends Handle_StepRepr_Representation {
    constructor(thePtr: StepRepr_Representation);
  }

  export declare class Handle_StepRepr_Representation_3 extends Handle_StepRepr_Representation {
    constructor(theHandle: Handle_StepRepr_Representation);
  }

  export declare class Handle_StepRepr_Representation_4 extends Handle_StepRepr_Representation {
    constructor(theHandle: Handle_StepRepr_Representation);
  }

export declare class Handle_StepBasic_ApprovalAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApprovalAssignment): void;
  get(): StepBasic_ApprovalAssignment;
}

  export declare class Handle_StepBasic_ApprovalAssignment_1 extends Handle_StepBasic_ApprovalAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_ApprovalAssignment_2 extends Handle_StepBasic_ApprovalAssignment {
    constructor(thePtr: StepBasic_ApprovalAssignment);
  }

  export declare class Handle_StepBasic_ApprovalAssignment_3 extends Handle_StepBasic_ApprovalAssignment {
    constructor(theHandle: Handle_StepBasic_ApprovalAssignment);
  }

  export declare class Handle_StepBasic_ApprovalAssignment_4 extends Handle_StepBasic_ApprovalAssignment {
    constructor(theHandle: Handle_StepBasic_ApprovalAssignment);
  }

export declare class Handle_StepBasic_CertificationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_CertificationAssignment): void;
  get(): StepBasic_CertificationAssignment;
}

  export declare class Handle_StepBasic_CertificationAssignment_1 extends Handle_StepBasic_CertificationAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_CertificationAssignment_2 extends Handle_StepBasic_CertificationAssignment {
    constructor(thePtr: StepBasic_CertificationAssignment);
  }

  export declare class Handle_StepBasic_CertificationAssignment_3 extends Handle_StepBasic_CertificationAssignment {
    constructor(theHandle: Handle_StepBasic_CertificationAssignment);
  }

  export declare class Handle_StepBasic_CertificationAssignment_4 extends Handle_StepBasic_CertificationAssignment {
    constructor(theHandle: Handle_StepBasic_CertificationAssignment);
  }

export declare class Handle_StepBasic_ContractAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ContractAssignment): void;
  get(): StepBasic_ContractAssignment;
}

  export declare class Handle_StepBasic_ContractAssignment_1 extends Handle_StepBasic_ContractAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_ContractAssignment_2 extends Handle_StepBasic_ContractAssignment {
    constructor(thePtr: StepBasic_ContractAssignment);
  }

  export declare class Handle_StepBasic_ContractAssignment_3 extends Handle_StepBasic_ContractAssignment {
    constructor(theHandle: Handle_StepBasic_ContractAssignment);
  }

  export declare class Handle_StepBasic_ContractAssignment_4 extends Handle_StepBasic_ContractAssignment {
    constructor(theHandle: Handle_StepBasic_ContractAssignment);
  }

export declare class Handle_StepBasic_DateAndTimeAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DateAndTimeAssignment): void;
  get(): StepBasic_DateAndTimeAssignment;
}

  export declare class Handle_StepBasic_DateAndTimeAssignment_1 extends Handle_StepBasic_DateAndTimeAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_DateAndTimeAssignment_2 extends Handle_StepBasic_DateAndTimeAssignment {
    constructor(thePtr: StepBasic_DateAndTimeAssignment);
  }

  export declare class Handle_StepBasic_DateAndTimeAssignment_3 extends Handle_StepBasic_DateAndTimeAssignment {
    constructor(theHandle: Handle_StepBasic_DateAndTimeAssignment);
  }

  export declare class Handle_StepBasic_DateAndTimeAssignment_4 extends Handle_StepBasic_DateAndTimeAssignment {
    constructor(theHandle: Handle_StepBasic_DateAndTimeAssignment);
  }

export declare class Handle_StepBasic_PersonAndOrganizationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_PersonAndOrganizationAssignment): void;
  get(): StepBasic_PersonAndOrganizationAssignment;
}

  export declare class Handle_StepBasic_PersonAndOrganizationAssignment_1 extends Handle_StepBasic_PersonAndOrganizationAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_PersonAndOrganizationAssignment_2 extends Handle_StepBasic_PersonAndOrganizationAssignment {
    constructor(thePtr: StepBasic_PersonAndOrganizationAssignment);
  }

  export declare class Handle_StepBasic_PersonAndOrganizationAssignment_3 extends Handle_StepBasic_PersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepBasic_PersonAndOrganizationAssignment);
  }

  export declare class Handle_StepBasic_PersonAndOrganizationAssignment_4 extends Handle_StepBasic_PersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepBasic_PersonAndOrganizationAssignment);
  }

export declare class Handle_StepBasic_SecurityClassificationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SecurityClassificationAssignment): void;
  get(): StepBasic_SecurityClassificationAssignment;
}

  export declare class Handle_StepBasic_SecurityClassificationAssignment_1 extends Handle_StepBasic_SecurityClassificationAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_SecurityClassificationAssignment_2 extends Handle_StepBasic_SecurityClassificationAssignment {
    constructor(thePtr: StepBasic_SecurityClassificationAssignment);
  }

  export declare class Handle_StepBasic_SecurityClassificationAssignment_3 extends Handle_StepBasic_SecurityClassificationAssignment {
    constructor(theHandle: Handle_StepBasic_SecurityClassificationAssignment);
  }

  export declare class Handle_StepBasic_SecurityClassificationAssignment_4 extends Handle_StepBasic_SecurityClassificationAssignment {
    constructor(theHandle: Handle_StepBasic_SecurityClassificationAssignment);
  }

export declare class Handle_StepBasic_DocumentReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentReference): void;
  get(): StepBasic_DocumentReference;
}

  export declare class Handle_StepBasic_DocumentReference_1 extends Handle_StepBasic_DocumentReference {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentReference_2 extends Handle_StepBasic_DocumentReference {
    constructor(thePtr: StepBasic_DocumentReference);
  }

  export declare class Handle_StepBasic_DocumentReference_3 extends Handle_StepBasic_DocumentReference {
    constructor(theHandle: Handle_StepBasic_DocumentReference);
  }

  export declare class Handle_StepBasic_DocumentReference_4 extends Handle_StepBasic_DocumentReference {
    constructor(theHandle: Handle_StepBasic_DocumentReference);
  }

export declare class Handle_StepBasic_ActionAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ActionAssignment): void;
  get(): StepBasic_ActionAssignment;
}

  export declare class Handle_StepBasic_ActionAssignment_1 extends Handle_StepBasic_ActionAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_ActionAssignment_2 extends Handle_StepBasic_ActionAssignment {
    constructor(thePtr: StepBasic_ActionAssignment);
  }

  export declare class Handle_StepBasic_ActionAssignment_3 extends Handle_StepBasic_ActionAssignment {
    constructor(theHandle: Handle_StepBasic_ActionAssignment);
  }

  export declare class Handle_StepBasic_ActionAssignment_4 extends Handle_StepBasic_ActionAssignment {
    constructor(theHandle: Handle_StepBasic_ActionAssignment);
  }

export declare class Handle_StepBasic_ActionRequestAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ActionRequestAssignment): void;
  get(): StepBasic_ActionRequestAssignment;
}

  export declare class Handle_StepBasic_ActionRequestAssignment_1 extends Handle_StepBasic_ActionRequestAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_ActionRequestAssignment_2 extends Handle_StepBasic_ActionRequestAssignment {
    constructor(thePtr: StepBasic_ActionRequestAssignment);
  }

  export declare class Handle_StepBasic_ActionRequestAssignment_3 extends Handle_StepBasic_ActionRequestAssignment {
    constructor(theHandle: Handle_StepBasic_ActionRequestAssignment);
  }

  export declare class Handle_StepBasic_ActionRequestAssignment_4 extends Handle_StepBasic_ActionRequestAssignment {
    constructor(theHandle: Handle_StepBasic_ActionRequestAssignment);
  }

export declare class Handle_StepRepr_MaterialPropertyRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_MaterialPropertyRepresentation): void;
  get(): StepRepr_MaterialPropertyRepresentation;
}

  export declare class Handle_StepRepr_MaterialPropertyRepresentation_1 extends Handle_StepRepr_MaterialPropertyRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_MaterialPropertyRepresentation_2 extends Handle_StepRepr_MaterialPropertyRepresentation {
    constructor(thePtr: StepRepr_MaterialPropertyRepresentation);
  }

  export declare class Handle_StepRepr_MaterialPropertyRepresentation_3 extends Handle_StepRepr_MaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepRepr_MaterialPropertyRepresentation);
  }

  export declare class Handle_StepRepr_MaterialPropertyRepresentation_4 extends Handle_StepRepr_MaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepRepr_MaterialPropertyRepresentation);
  }

export declare class Handle_StepRepr_HArray1OfMaterialPropertyRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_HArray1OfMaterialPropertyRepresentation): void;
  get(): StepRepr_HArray1OfMaterialPropertyRepresentation;
}

  export declare class Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_1 extends Handle_StepRepr_HArray1OfMaterialPropertyRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_2 extends Handle_StepRepr_HArray1OfMaterialPropertyRepresentation {
    constructor(thePtr: StepRepr_HArray1OfMaterialPropertyRepresentation);
  }

  export declare class Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_3 extends Handle_StepRepr_HArray1OfMaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepRepr_HArray1OfMaterialPropertyRepresentation);
  }

  export declare class Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_4 extends Handle_StepRepr_HArray1OfMaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepRepr_HArray1OfMaterialPropertyRepresentation);
  }

export declare class Handle_StepBasic_DateAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DateAssignment): void;
  get(): StepBasic_DateAssignment;
}

  export declare class Handle_StepBasic_DateAssignment_1 extends Handle_StepBasic_DateAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_DateAssignment_2 extends Handle_StepBasic_DateAssignment {
    constructor(thePtr: StepBasic_DateAssignment);
  }

  export declare class Handle_StepBasic_DateAssignment_3 extends Handle_StepBasic_DateAssignment {
    constructor(theHandle: Handle_StepBasic_DateAssignment);
  }

  export declare class Handle_StepBasic_DateAssignment_4 extends Handle_StepBasic_DateAssignment {
    constructor(theHandle: Handle_StepBasic_DateAssignment);
  }

export declare class Handle_StepBasic_IdentificationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_IdentificationAssignment): void;
  get(): StepBasic_IdentificationAssignment;
}

  export declare class Handle_StepBasic_IdentificationAssignment_1 extends Handle_StepBasic_IdentificationAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_IdentificationAssignment_2 extends Handle_StepBasic_IdentificationAssignment {
    constructor(thePtr: StepBasic_IdentificationAssignment);
  }

  export declare class Handle_StepBasic_IdentificationAssignment_3 extends Handle_StepBasic_IdentificationAssignment {
    constructor(theHandle: Handle_StepBasic_IdentificationAssignment);
  }

  export declare class Handle_StepBasic_IdentificationAssignment_4 extends Handle_StepBasic_IdentificationAssignment {
    constructor(theHandle: Handle_StepBasic_IdentificationAssignment);
  }

export declare class Handle_StepBasic_ExternalIdentificationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ExternalIdentificationAssignment): void;
  get(): StepBasic_ExternalIdentificationAssignment;
}

  export declare class Handle_StepBasic_ExternalIdentificationAssignment_1 extends Handle_StepBasic_ExternalIdentificationAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_ExternalIdentificationAssignment_2 extends Handle_StepBasic_ExternalIdentificationAssignment {
    constructor(thePtr: StepBasic_ExternalIdentificationAssignment);
  }

  export declare class Handle_StepBasic_ExternalIdentificationAssignment_3 extends Handle_StepBasic_ExternalIdentificationAssignment {
    constructor(theHandle: Handle_StepBasic_ExternalIdentificationAssignment);
  }

  export declare class Handle_StepBasic_ExternalIdentificationAssignment_4 extends Handle_StepBasic_ExternalIdentificationAssignment {
    constructor(theHandle: Handle_StepBasic_ExternalIdentificationAssignment);
  }

export declare class Handle_StepBasic_GroupAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_GroupAssignment): void;
  get(): StepBasic_GroupAssignment;
}

  export declare class Handle_StepBasic_GroupAssignment_1 extends Handle_StepBasic_GroupAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_GroupAssignment_2 extends Handle_StepBasic_GroupAssignment {
    constructor(thePtr: StepBasic_GroupAssignment);
  }

  export declare class Handle_StepBasic_GroupAssignment_3 extends Handle_StepBasic_GroupAssignment {
    constructor(theHandle: Handle_StepBasic_GroupAssignment);
  }

  export declare class Handle_StepBasic_GroupAssignment_4 extends Handle_StepBasic_GroupAssignment {
    constructor(theHandle: Handle_StepBasic_GroupAssignment);
  }

export declare class Handle_StepBasic_OrganizationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_OrganizationAssignment): void;
  get(): StepBasic_OrganizationAssignment;
}

  export declare class Handle_StepBasic_OrganizationAssignment_1 extends Handle_StepBasic_OrganizationAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_OrganizationAssignment_2 extends Handle_StepBasic_OrganizationAssignment {
    constructor(thePtr: StepBasic_OrganizationAssignment);
  }

  export declare class Handle_StepBasic_OrganizationAssignment_3 extends Handle_StepBasic_OrganizationAssignment {
    constructor(theHandle: Handle_StepBasic_OrganizationAssignment);
  }

  export declare class Handle_StepBasic_OrganizationAssignment_4 extends Handle_StepBasic_OrganizationAssignment {
    constructor(theHandle: Handle_StepBasic_OrganizationAssignment);
  }

export declare class Handle_StepBasic_Approval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Approval): void;
  get(): StepBasic_Approval;
}

  export declare class Handle_StepBasic_Approval_1 extends Handle_StepBasic_Approval {
    constructor();
  }

  export declare class Handle_StepBasic_Approval_2 extends Handle_StepBasic_Approval {
    constructor(thePtr: StepBasic_Approval);
  }

  export declare class Handle_StepBasic_Approval_3 extends Handle_StepBasic_Approval {
    constructor(theHandle: Handle_StepBasic_Approval);
  }

  export declare class Handle_StepBasic_Approval_4 extends Handle_StepBasic_Approval {
    constructor(theHandle: Handle_StepBasic_Approval);
  }

export declare class Handle_StepBasic_HArray1OfApproval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfApproval): void;
  get(): StepBasic_HArray1OfApproval;
}

  export declare class Handle_StepBasic_HArray1OfApproval_1 extends Handle_StepBasic_HArray1OfApproval {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfApproval_2 extends Handle_StepBasic_HArray1OfApproval {
    constructor(thePtr: StepBasic_HArray1OfApproval);
  }

  export declare class Handle_StepBasic_HArray1OfApproval_3 extends Handle_StepBasic_HArray1OfApproval {
    constructor(theHandle: Handle_StepBasic_HArray1OfApproval);
  }

  export declare class Handle_StepBasic_HArray1OfApproval_4 extends Handle_StepBasic_HArray1OfApproval {
    constructor(theHandle: Handle_StepBasic_HArray1OfApproval);
  }

export declare class Handle_StepBasic_Group {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Group): void;
  get(): StepBasic_Group;
}

  export declare class Handle_StepBasic_Group_1 extends Handle_StepBasic_Group {
    constructor();
  }

  export declare class Handle_StepBasic_Group_2 extends Handle_StepBasic_Group {
    constructor(thePtr: StepBasic_Group);
  }

  export declare class Handle_StepBasic_Group_3 extends Handle_StepBasic_Group {
    constructor(theHandle: Handle_StepBasic_Group);
  }

  export declare class Handle_StepBasic_Group_4 extends Handle_StepBasic_Group {
    constructor(theHandle: Handle_StepBasic_Group);
  }

export declare class Handle_StepBasic_GeneralProperty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_GeneralProperty): void;
  get(): StepBasic_GeneralProperty;
}

  export declare class Handle_StepBasic_GeneralProperty_1 extends Handle_StepBasic_GeneralProperty {
    constructor();
  }

  export declare class Handle_StepBasic_GeneralProperty_2 extends Handle_StepBasic_GeneralProperty {
    constructor(thePtr: StepBasic_GeneralProperty);
  }

  export declare class Handle_StepBasic_GeneralProperty_3 extends Handle_StepBasic_GeneralProperty {
    constructor(theHandle: Handle_StepBasic_GeneralProperty);
  }

  export declare class Handle_StepBasic_GeneralProperty_4 extends Handle_StepBasic_GeneralProperty {
    constructor(theHandle: Handle_StepBasic_GeneralProperty);
  }

export declare class Handle_StepBasic_Action {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Action): void;
  get(): StepBasic_Action;
}

  export declare class Handle_StepBasic_Action_1 extends Handle_StepBasic_Action {
    constructor();
  }

  export declare class Handle_StepBasic_Action_2 extends Handle_StepBasic_Action {
    constructor(thePtr: StepBasic_Action);
  }

  export declare class Handle_StepBasic_Action_3 extends Handle_StepBasic_Action {
    constructor(theHandle: Handle_StepBasic_Action);
  }

  export declare class Handle_StepBasic_Action_4 extends Handle_StepBasic_Action {
    constructor(theHandle: Handle_StepBasic_Action);
  }

export declare class Handle_StepBasic_ActionMethod {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ActionMethod): void;
  get(): StepBasic_ActionMethod;
}

  export declare class Handle_StepBasic_ActionMethod_1 extends Handle_StepBasic_ActionMethod {
    constructor();
  }

  export declare class Handle_StepBasic_ActionMethod_2 extends Handle_StepBasic_ActionMethod {
    constructor(thePtr: StepBasic_ActionMethod);
  }

  export declare class Handle_StepBasic_ActionMethod_3 extends Handle_StepBasic_ActionMethod {
    constructor(theHandle: Handle_StepBasic_ActionMethod);
  }

  export declare class Handle_StepBasic_ActionMethod_4 extends Handle_StepBasic_ActionMethod {
    constructor(theHandle: Handle_StepBasic_ActionMethod);
  }

export declare class Handle_StepBasic_ActionRequestSolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ActionRequestSolution): void;
  get(): StepBasic_ActionRequestSolution;
}

  export declare class Handle_StepBasic_ActionRequestSolution_1 extends Handle_StepBasic_ActionRequestSolution {
    constructor();
  }

  export declare class Handle_StepBasic_ActionRequestSolution_2 extends Handle_StepBasic_ActionRequestSolution {
    constructor(thePtr: StepBasic_ActionRequestSolution);
  }

  export declare class Handle_StepBasic_ActionRequestSolution_3 extends Handle_StepBasic_ActionRequestSolution {
    constructor(theHandle: Handle_StepBasic_ActionRequestSolution);
  }

  export declare class Handle_StepBasic_ActionRequestSolution_4 extends Handle_StepBasic_ActionRequestSolution {
    constructor(theHandle: Handle_StepBasic_ActionRequestSolution);
  }

export declare class Handle_StepBasic_Address {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Address): void;
  get(): StepBasic_Address;
}

  export declare class Handle_StepBasic_Address_1 extends Handle_StepBasic_Address {
    constructor();
  }

  export declare class Handle_StepBasic_Address_2 extends Handle_StepBasic_Address {
    constructor(thePtr: StepBasic_Address);
  }

  export declare class Handle_StepBasic_Address_3 extends Handle_StepBasic_Address {
    constructor(theHandle: Handle_StepBasic_Address);
  }

  export declare class Handle_StepBasic_Address_4 extends Handle_StepBasic_Address {
    constructor(theHandle: Handle_StepBasic_Address);
  }

export declare class Handle_StepBasic_ApplicationContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApplicationContext): void;
  get(): StepBasic_ApplicationContext;
}

  export declare class Handle_StepBasic_ApplicationContext_1 extends Handle_StepBasic_ApplicationContext {
    constructor();
  }

  export declare class Handle_StepBasic_ApplicationContext_2 extends Handle_StepBasic_ApplicationContext {
    constructor(thePtr: StepBasic_ApplicationContext);
  }

  export declare class Handle_StepBasic_ApplicationContext_3 extends Handle_StepBasic_ApplicationContext {
    constructor(theHandle: Handle_StepBasic_ApplicationContext);
  }

  export declare class Handle_StepBasic_ApplicationContext_4 extends Handle_StepBasic_ApplicationContext {
    constructor(theHandle: Handle_StepBasic_ApplicationContext);
  }

export declare class Handle_StepBasic_ApplicationContextElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApplicationContextElement): void;
  get(): StepBasic_ApplicationContextElement;
}

  export declare class Handle_StepBasic_ApplicationContextElement_1 extends Handle_StepBasic_ApplicationContextElement {
    constructor();
  }

  export declare class Handle_StepBasic_ApplicationContextElement_2 extends Handle_StepBasic_ApplicationContextElement {
    constructor(thePtr: StepBasic_ApplicationContextElement);
  }

  export declare class Handle_StepBasic_ApplicationContextElement_3 extends Handle_StepBasic_ApplicationContextElement {
    constructor(theHandle: Handle_StepBasic_ApplicationContextElement);
  }

  export declare class Handle_StepBasic_ApplicationContextElement_4 extends Handle_StepBasic_ApplicationContextElement {
    constructor(theHandle: Handle_StepBasic_ApplicationContextElement);
  }

export declare class Handle_StepBasic_ApplicationProtocolDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApplicationProtocolDefinition): void;
  get(): StepBasic_ApplicationProtocolDefinition;
}

  export declare class Handle_StepBasic_ApplicationProtocolDefinition_1 extends Handle_StepBasic_ApplicationProtocolDefinition {
    constructor();
  }

  export declare class Handle_StepBasic_ApplicationProtocolDefinition_2 extends Handle_StepBasic_ApplicationProtocolDefinition {
    constructor(thePtr: StepBasic_ApplicationProtocolDefinition);
  }

  export declare class Handle_StepBasic_ApplicationProtocolDefinition_3 extends Handle_StepBasic_ApplicationProtocolDefinition {
    constructor(theHandle: Handle_StepBasic_ApplicationProtocolDefinition);
  }

  export declare class Handle_StepBasic_ApplicationProtocolDefinition_4 extends Handle_StepBasic_ApplicationProtocolDefinition {
    constructor(theHandle: Handle_StepBasic_ApplicationProtocolDefinition);
  }

export declare class Handle_StepBasic_ApprovalDateTime {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApprovalDateTime): void;
  get(): StepBasic_ApprovalDateTime;
}

  export declare class Handle_StepBasic_ApprovalDateTime_1 extends Handle_StepBasic_ApprovalDateTime {
    constructor();
  }

  export declare class Handle_StepBasic_ApprovalDateTime_2 extends Handle_StepBasic_ApprovalDateTime {
    constructor(thePtr: StepBasic_ApprovalDateTime);
  }

  export declare class Handle_StepBasic_ApprovalDateTime_3 extends Handle_StepBasic_ApprovalDateTime {
    constructor(theHandle: Handle_StepBasic_ApprovalDateTime);
  }

  export declare class Handle_StepBasic_ApprovalDateTime_4 extends Handle_StepBasic_ApprovalDateTime {
    constructor(theHandle: Handle_StepBasic_ApprovalDateTime);
  }

export declare class Handle_StepBasic_ApprovalPersonOrganization {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApprovalPersonOrganization): void;
  get(): StepBasic_ApprovalPersonOrganization;
}

  export declare class Handle_StepBasic_ApprovalPersonOrganization_1 extends Handle_StepBasic_ApprovalPersonOrganization {
    constructor();
  }

  export declare class Handle_StepBasic_ApprovalPersonOrganization_2 extends Handle_StepBasic_ApprovalPersonOrganization {
    constructor(thePtr: StepBasic_ApprovalPersonOrganization);
  }

  export declare class Handle_StepBasic_ApprovalPersonOrganization_3 extends Handle_StepBasic_ApprovalPersonOrganization {
    constructor(theHandle: Handle_StepBasic_ApprovalPersonOrganization);
  }

  export declare class Handle_StepBasic_ApprovalPersonOrganization_4 extends Handle_StepBasic_ApprovalPersonOrganization {
    constructor(theHandle: Handle_StepBasic_ApprovalPersonOrganization);
  }

export declare class Handle_StepBasic_ApprovalRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApprovalRelationship): void;
  get(): StepBasic_ApprovalRelationship;
}

  export declare class Handle_StepBasic_ApprovalRelationship_1 extends Handle_StepBasic_ApprovalRelationship {
    constructor();
  }

  export declare class Handle_StepBasic_ApprovalRelationship_2 extends Handle_StepBasic_ApprovalRelationship {
    constructor(thePtr: StepBasic_ApprovalRelationship);
  }

  export declare class Handle_StepBasic_ApprovalRelationship_3 extends Handle_StepBasic_ApprovalRelationship {
    constructor(theHandle: Handle_StepBasic_ApprovalRelationship);
  }

  export declare class Handle_StepBasic_ApprovalRelationship_4 extends Handle_StepBasic_ApprovalRelationship {
    constructor(theHandle: Handle_StepBasic_ApprovalRelationship);
  }

export declare class Handle_StepBasic_ApprovalRole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApprovalRole): void;
  get(): StepBasic_ApprovalRole;
}

  export declare class Handle_StepBasic_ApprovalRole_1 extends Handle_StepBasic_ApprovalRole {
    constructor();
  }

  export declare class Handle_StepBasic_ApprovalRole_2 extends Handle_StepBasic_ApprovalRole {
    constructor(thePtr: StepBasic_ApprovalRole);
  }

  export declare class Handle_StepBasic_ApprovalRole_3 extends Handle_StepBasic_ApprovalRole {
    constructor(theHandle: Handle_StepBasic_ApprovalRole);
  }

  export declare class Handle_StepBasic_ApprovalRole_4 extends Handle_StepBasic_ApprovalRole {
    constructor(theHandle: Handle_StepBasic_ApprovalRole);
  }

export declare class Handle_StepBasic_ApprovalStatus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ApprovalStatus): void;
  get(): StepBasic_ApprovalStatus;
}

  export declare class Handle_StepBasic_ApprovalStatus_1 extends Handle_StepBasic_ApprovalStatus {
    constructor();
  }

  export declare class Handle_StepBasic_ApprovalStatus_2 extends Handle_StepBasic_ApprovalStatus {
    constructor(thePtr: StepBasic_ApprovalStatus);
  }

  export declare class Handle_StepBasic_ApprovalStatus_3 extends Handle_StepBasic_ApprovalStatus {
    constructor(theHandle: Handle_StepBasic_ApprovalStatus);
  }

  export declare class Handle_StepBasic_ApprovalStatus_4 extends Handle_StepBasic_ApprovalStatus {
    constructor(theHandle: Handle_StepBasic_ApprovalStatus);
  }

export declare class Handle_StepBasic_NamedUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_NamedUnit): void;
  get(): StepBasic_NamedUnit;
}

  export declare class Handle_StepBasic_NamedUnit_1 extends Handle_StepBasic_NamedUnit {
    constructor();
  }

  export declare class Handle_StepBasic_NamedUnit_2 extends Handle_StepBasic_NamedUnit {
    constructor(thePtr: StepBasic_NamedUnit);
  }

  export declare class Handle_StepBasic_NamedUnit_3 extends Handle_StepBasic_NamedUnit {
    constructor(theHandle: Handle_StepBasic_NamedUnit);
  }

  export declare class Handle_StepBasic_NamedUnit_4 extends Handle_StepBasic_NamedUnit {
    constructor(theHandle: Handle_StepBasic_NamedUnit);
  }

export declare class Handle_StepBasic_AreaUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_AreaUnit): void;
  get(): StepBasic_AreaUnit;
}

  export declare class Handle_StepBasic_AreaUnit_1 extends Handle_StepBasic_AreaUnit {
    constructor();
  }

  export declare class Handle_StepBasic_AreaUnit_2 extends Handle_StepBasic_AreaUnit {
    constructor(thePtr: StepBasic_AreaUnit);
  }

  export declare class Handle_StepBasic_AreaUnit_3 extends Handle_StepBasic_AreaUnit {
    constructor(theHandle: Handle_StepBasic_AreaUnit);
  }

  export declare class Handle_StepBasic_AreaUnit_4 extends Handle_StepBasic_AreaUnit {
    constructor(theHandle: Handle_StepBasic_AreaUnit);
  }

export declare class Handle_StepBasic_DerivedUnitElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DerivedUnitElement): void;
  get(): StepBasic_DerivedUnitElement;
}

  export declare class Handle_StepBasic_DerivedUnitElement_1 extends Handle_StepBasic_DerivedUnitElement {
    constructor();
  }

  export declare class Handle_StepBasic_DerivedUnitElement_2 extends Handle_StepBasic_DerivedUnitElement {
    constructor(thePtr: StepBasic_DerivedUnitElement);
  }

  export declare class Handle_StepBasic_DerivedUnitElement_3 extends Handle_StepBasic_DerivedUnitElement {
    constructor(theHandle: Handle_StepBasic_DerivedUnitElement);
  }

  export declare class Handle_StepBasic_DerivedUnitElement_4 extends Handle_StepBasic_DerivedUnitElement {
    constructor(theHandle: Handle_StepBasic_DerivedUnitElement);
  }

export declare class Handle_StepBasic_Document {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Document): void;
  get(): StepBasic_Document;
}

  export declare class Handle_StepBasic_Document_1 extends Handle_StepBasic_Document {
    constructor();
  }

  export declare class Handle_StepBasic_Document_2 extends Handle_StepBasic_Document {
    constructor(thePtr: StepBasic_Document);
  }

  export declare class Handle_StepBasic_Document_3 extends Handle_StepBasic_Document {
    constructor(theHandle: Handle_StepBasic_Document);
  }

  export declare class Handle_StepBasic_Document_4 extends Handle_StepBasic_Document {
    constructor(theHandle: Handle_StepBasic_Document);
  }

export declare class Handle_StepBasic_Organization {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Organization): void;
  get(): StepBasic_Organization;
}

  export declare class Handle_StepBasic_Organization_1 extends Handle_StepBasic_Organization {
    constructor();
  }

  export declare class Handle_StepBasic_Organization_2 extends Handle_StepBasic_Organization {
    constructor(thePtr: StepBasic_Organization);
  }

  export declare class Handle_StepBasic_Organization_3 extends Handle_StepBasic_Organization {
    constructor(theHandle: Handle_StepBasic_Organization);
  }

  export declare class Handle_StepBasic_Organization_4 extends Handle_StepBasic_Organization {
    constructor(theHandle: Handle_StepBasic_Organization);
  }

export declare class Handle_StepBasic_Person {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Person): void;
  get(): StepBasic_Person;
}

  export declare class Handle_StepBasic_Person_1 extends Handle_StepBasic_Person {
    constructor();
  }

  export declare class Handle_StepBasic_Person_2 extends Handle_StepBasic_Person {
    constructor(thePtr: StepBasic_Person);
  }

  export declare class Handle_StepBasic_Person_3 extends Handle_StepBasic_Person {
    constructor(theHandle: Handle_StepBasic_Person);
  }

  export declare class Handle_StepBasic_Person_4 extends Handle_StepBasic_Person {
    constructor(theHandle: Handle_StepBasic_Person);
  }

export declare class Handle_StepBasic_ProductContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductContext): void;
  get(): StepBasic_ProductContext;
}

  export declare class Handle_StepBasic_ProductContext_1 extends Handle_StepBasic_ProductContext {
    constructor();
  }

  export declare class Handle_StepBasic_ProductContext_2 extends Handle_StepBasic_ProductContext {
    constructor(thePtr: StepBasic_ProductContext);
  }

  export declare class Handle_StepBasic_ProductContext_3 extends Handle_StepBasic_ProductContext {
    constructor(theHandle: Handle_StepBasic_ProductContext);
  }

  export declare class Handle_StepBasic_ProductContext_4 extends Handle_StepBasic_ProductContext {
    constructor(theHandle: Handle_StepBasic_ProductContext);
  }

export declare class Handle_StepBasic_HArray1OfProductContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfProductContext): void;
  get(): StepBasic_HArray1OfProductContext;
}

  export declare class Handle_StepBasic_HArray1OfProductContext_1 extends Handle_StepBasic_HArray1OfProductContext {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfProductContext_2 extends Handle_StepBasic_HArray1OfProductContext {
    constructor(thePtr: StepBasic_HArray1OfProductContext);
  }

  export declare class Handle_StepBasic_HArray1OfProductContext_3 extends Handle_StepBasic_HArray1OfProductContext {
    constructor(theHandle: Handle_StepBasic_HArray1OfProductContext);
  }

  export declare class Handle_StepBasic_HArray1OfProductContext_4 extends Handle_StepBasic_HArray1OfProductContext {
    constructor(theHandle: Handle_StepBasic_HArray1OfProductContext);
  }

export declare class Handle_StepBasic_Product {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Product): void;
  get(): StepBasic_Product;
}

  export declare class Handle_StepBasic_Product_1 extends Handle_StepBasic_Product {
    constructor();
  }

  export declare class Handle_StepBasic_Product_2 extends Handle_StepBasic_Product {
    constructor(thePtr: StepBasic_Product);
  }

  export declare class Handle_StepBasic_Product_3 extends Handle_StepBasic_Product {
    constructor(theHandle: Handle_StepBasic_Product);
  }

  export declare class Handle_StepBasic_Product_4 extends Handle_StepBasic_Product {
    constructor(theHandle: Handle_StepBasic_Product);
  }

export declare class Handle_StepBasic_UncertaintyMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_UncertaintyMeasureWithUnit): void;
  get(): StepBasic_UncertaintyMeasureWithUnit;
}

  export declare class Handle_StepBasic_UncertaintyMeasureWithUnit_1 extends Handle_StepBasic_UncertaintyMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_UncertaintyMeasureWithUnit_2 extends Handle_StepBasic_UncertaintyMeasureWithUnit {
    constructor(thePtr: StepBasic_UncertaintyMeasureWithUnit);
  }

  export declare class Handle_StepBasic_UncertaintyMeasureWithUnit_3 extends Handle_StepBasic_UncertaintyMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_UncertaintyMeasureWithUnit);
  }

  export declare class Handle_StepBasic_UncertaintyMeasureWithUnit_4 extends Handle_StepBasic_UncertaintyMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_UncertaintyMeasureWithUnit);
  }

export declare class Handle_StepBasic_Date {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Date): void;
  get(): StepBasic_Date;
}

  export declare class Handle_StepBasic_Date_1 extends Handle_StepBasic_Date {
    constructor();
  }

  export declare class Handle_StepBasic_Date_2 extends Handle_StepBasic_Date {
    constructor(thePtr: StepBasic_Date);
  }

  export declare class Handle_StepBasic_Date_3 extends Handle_StepBasic_Date {
    constructor(theHandle: Handle_StepBasic_Date);
  }

  export declare class Handle_StepBasic_Date_4 extends Handle_StepBasic_Date {
    constructor(theHandle: Handle_StepBasic_Date);
  }

export declare class Handle_StepBasic_CalendarDate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_CalendarDate): void;
  get(): StepBasic_CalendarDate;
}

  export declare class Handle_StepBasic_CalendarDate_1 extends Handle_StepBasic_CalendarDate {
    constructor();
  }

  export declare class Handle_StepBasic_CalendarDate_2 extends Handle_StepBasic_CalendarDate {
    constructor(thePtr: StepBasic_CalendarDate);
  }

  export declare class Handle_StepBasic_CalendarDate_3 extends Handle_StepBasic_CalendarDate {
    constructor(theHandle: Handle_StepBasic_CalendarDate);
  }

  export declare class Handle_StepBasic_CalendarDate_4 extends Handle_StepBasic_CalendarDate {
    constructor(theHandle: Handle_StepBasic_CalendarDate);
  }

export declare class Handle_StepBasic_Certification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Certification): void;
  get(): StepBasic_Certification;
}

  export declare class Handle_StepBasic_Certification_1 extends Handle_StepBasic_Certification {
    constructor();
  }

  export declare class Handle_StepBasic_Certification_2 extends Handle_StepBasic_Certification {
    constructor(thePtr: StepBasic_Certification);
  }

  export declare class Handle_StepBasic_Certification_3 extends Handle_StepBasic_Certification {
    constructor(theHandle: Handle_StepBasic_Certification);
  }

  export declare class Handle_StepBasic_Certification_4 extends Handle_StepBasic_Certification {
    constructor(theHandle: Handle_StepBasic_Certification);
  }

export declare class Handle_StepBasic_CertificationType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_CertificationType): void;
  get(): StepBasic_CertificationType;
}

  export declare class Handle_StepBasic_CertificationType_1 extends Handle_StepBasic_CertificationType {
    constructor();
  }

  export declare class Handle_StepBasic_CertificationType_2 extends Handle_StepBasic_CertificationType {
    constructor(thePtr: StepBasic_CertificationType);
  }

  export declare class Handle_StepBasic_CertificationType_3 extends Handle_StepBasic_CertificationType {
    constructor(theHandle: Handle_StepBasic_CertificationType);
  }

  export declare class Handle_StepBasic_CertificationType_4 extends Handle_StepBasic_CertificationType {
    constructor(theHandle: Handle_StepBasic_CertificationType);
  }

export declare class Handle_StepBasic_CharacterizedObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_CharacterizedObject): void;
  get(): StepBasic_CharacterizedObject;
}

  export declare class Handle_StepBasic_CharacterizedObject_1 extends Handle_StepBasic_CharacterizedObject {
    constructor();
  }

  export declare class Handle_StepBasic_CharacterizedObject_2 extends Handle_StepBasic_CharacterizedObject {
    constructor(thePtr: StepBasic_CharacterizedObject);
  }

  export declare class Handle_StepBasic_CharacterizedObject_3 extends Handle_StepBasic_CharacterizedObject {
    constructor(theHandle: Handle_StepBasic_CharacterizedObject);
  }

  export declare class Handle_StepBasic_CharacterizedObject_4 extends Handle_StepBasic_CharacterizedObject {
    constructor(theHandle: Handle_StepBasic_CharacterizedObject);
  }

export declare class Handle_StepBasic_Contract {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Contract): void;
  get(): StepBasic_Contract;
}

  export declare class Handle_StepBasic_Contract_1 extends Handle_StepBasic_Contract {
    constructor();
  }

  export declare class Handle_StepBasic_Contract_2 extends Handle_StepBasic_Contract {
    constructor(thePtr: StepBasic_Contract);
  }

  export declare class Handle_StepBasic_Contract_3 extends Handle_StepBasic_Contract {
    constructor(theHandle: Handle_StepBasic_Contract);
  }

  export declare class Handle_StepBasic_Contract_4 extends Handle_StepBasic_Contract {
    constructor(theHandle: Handle_StepBasic_Contract);
  }

export declare class Handle_StepBasic_ContractType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ContractType): void;
  get(): StepBasic_ContractType;
}

  export declare class Handle_StepBasic_ContractType_1 extends Handle_StepBasic_ContractType {
    constructor();
  }

  export declare class Handle_StepBasic_ContractType_2 extends Handle_StepBasic_ContractType {
    constructor(thePtr: StepBasic_ContractType);
  }

  export declare class Handle_StepBasic_ContractType_3 extends Handle_StepBasic_ContractType {
    constructor(theHandle: Handle_StepBasic_ContractType);
  }

  export declare class Handle_StepBasic_ContractType_4 extends Handle_StepBasic_ContractType {
    constructor(theHandle: Handle_StepBasic_ContractType);
  }

export declare class Handle_StepBasic_ConversionBasedUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnit): void;
  get(): StepBasic_ConversionBasedUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnit_1 extends Handle_StepBasic_ConversionBasedUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnit_2 extends Handle_StepBasic_ConversionBasedUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnit_3 extends Handle_StepBasic_ConversionBasedUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnit_4 extends Handle_StepBasic_ConversionBasedUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndAreaUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndAreaUnit): void;
  get(): StepBasic_ConversionBasedUnitAndAreaUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndAreaUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndAreaUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndAreaUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndAreaUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndAreaUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndAreaUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndAreaUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndAreaUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndAreaUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndAreaUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndAreaUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndLengthUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndLengthUnit): void;
  get(): StepBasic_ConversionBasedUnitAndLengthUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndLengthUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndLengthUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndLengthUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndLengthUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndLengthUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndLengthUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndLengthUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndLengthUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndLengthUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndLengthUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndLengthUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndMassUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndMassUnit): void;
  get(): StepBasic_ConversionBasedUnitAndMassUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndMassUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndMassUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndMassUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndMassUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndMassUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndMassUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndMassUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndMassUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndMassUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndMassUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndMassUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndPlaneAngleUnit): void;
  get(): StepBasic_ConversionBasedUnitAndPlaneAngleUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndPlaneAngleUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndRatioUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndRatioUnit): void;
  get(): StepBasic_ConversionBasedUnitAndRatioUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndRatioUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndRatioUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndRatioUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndRatioUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndRatioUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndRatioUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndRatioUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndRatioUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndRatioUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndRatioUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndRatioUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndSolidAngleUnit): void;
  get(): StepBasic_ConversionBasedUnitAndSolidAngleUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndSolidAngleUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndTimeUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndTimeUnit): void;
  get(): StepBasic_ConversionBasedUnitAndTimeUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndTimeUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndTimeUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndTimeUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndTimeUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndTimeUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndTimeUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndTimeUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndTimeUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndTimeUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndTimeUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndTimeUnit);
  }

export declare class Handle_StepBasic_ConversionBasedUnitAndVolumeUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ConversionBasedUnitAndVolumeUnit): void;
  get(): StepBasic_ConversionBasedUnitAndVolumeUnit;
}

  export declare class Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_1 extends Handle_StepBasic_ConversionBasedUnitAndVolumeUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_2 extends Handle_StepBasic_ConversionBasedUnitAndVolumeUnit {
    constructor(thePtr: StepBasic_ConversionBasedUnitAndVolumeUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_3 extends Handle_StepBasic_ConversionBasedUnitAndVolumeUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndVolumeUnit);
  }

  export declare class Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_4 extends Handle_StepBasic_ConversionBasedUnitAndVolumeUnit {
    constructor(theHandle: Handle_StepBasic_ConversionBasedUnitAndVolumeUnit);
  }

export declare class Handle_StepBasic_CoordinatedUniversalTimeOffset {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_CoordinatedUniversalTimeOffset): void;
  get(): StepBasic_CoordinatedUniversalTimeOffset;
}

  export declare class Handle_StepBasic_CoordinatedUniversalTimeOffset_1 extends Handle_StepBasic_CoordinatedUniversalTimeOffset {
    constructor();
  }

  export declare class Handle_StepBasic_CoordinatedUniversalTimeOffset_2 extends Handle_StepBasic_CoordinatedUniversalTimeOffset {
    constructor(thePtr: StepBasic_CoordinatedUniversalTimeOffset);
  }

  export declare class Handle_StepBasic_CoordinatedUniversalTimeOffset_3 extends Handle_StepBasic_CoordinatedUniversalTimeOffset {
    constructor(theHandle: Handle_StepBasic_CoordinatedUniversalTimeOffset);
  }

  export declare class Handle_StepBasic_CoordinatedUniversalTimeOffset_4 extends Handle_StepBasic_CoordinatedUniversalTimeOffset {
    constructor(theHandle: Handle_StepBasic_CoordinatedUniversalTimeOffset);
  }

export declare class Handle_StepBasic_DateAndTime {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DateAndTime): void;
  get(): StepBasic_DateAndTime;
}

  export declare class Handle_StepBasic_DateAndTime_1 extends Handle_StepBasic_DateAndTime {
    constructor();
  }

  export declare class Handle_StepBasic_DateAndTime_2 extends Handle_StepBasic_DateAndTime {
    constructor(thePtr: StepBasic_DateAndTime);
  }

  export declare class Handle_StepBasic_DateAndTime_3 extends Handle_StepBasic_DateAndTime {
    constructor(theHandle: Handle_StepBasic_DateAndTime);
  }

  export declare class Handle_StepBasic_DateAndTime_4 extends Handle_StepBasic_DateAndTime {
    constructor(theHandle: Handle_StepBasic_DateAndTime);
  }

export declare class Handle_StepBasic_DateRole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DateRole): void;
  get(): StepBasic_DateRole;
}

  export declare class Handle_StepBasic_DateRole_1 extends Handle_StepBasic_DateRole {
    constructor();
  }

  export declare class Handle_StepBasic_DateRole_2 extends Handle_StepBasic_DateRole {
    constructor(thePtr: StepBasic_DateRole);
  }

  export declare class Handle_StepBasic_DateRole_3 extends Handle_StepBasic_DateRole {
    constructor(theHandle: Handle_StepBasic_DateRole);
  }

  export declare class Handle_StepBasic_DateRole_4 extends Handle_StepBasic_DateRole {
    constructor(theHandle: Handle_StepBasic_DateRole);
  }

export declare class Handle_StepBasic_DateTimeRole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DateTimeRole): void;
  get(): StepBasic_DateTimeRole;
}

  export declare class Handle_StepBasic_DateTimeRole_1 extends Handle_StepBasic_DateTimeRole {
    constructor();
  }

  export declare class Handle_StepBasic_DateTimeRole_2 extends Handle_StepBasic_DateTimeRole {
    constructor(thePtr: StepBasic_DateTimeRole);
  }

  export declare class Handle_StepBasic_DateTimeRole_3 extends Handle_StepBasic_DateTimeRole {
    constructor(theHandle: Handle_StepBasic_DateTimeRole);
  }

  export declare class Handle_StepBasic_DateTimeRole_4 extends Handle_StepBasic_DateTimeRole {
    constructor(theHandle: Handle_StepBasic_DateTimeRole);
  }

export declare class Handle_StepBasic_HArray1OfDerivedUnitElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfDerivedUnitElement): void;
  get(): StepBasic_HArray1OfDerivedUnitElement;
}

  export declare class Handle_StepBasic_HArray1OfDerivedUnitElement_1 extends Handle_StepBasic_HArray1OfDerivedUnitElement {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfDerivedUnitElement_2 extends Handle_StepBasic_HArray1OfDerivedUnitElement {
    constructor(thePtr: StepBasic_HArray1OfDerivedUnitElement);
  }

  export declare class Handle_StepBasic_HArray1OfDerivedUnitElement_3 extends Handle_StepBasic_HArray1OfDerivedUnitElement {
    constructor(theHandle: Handle_StepBasic_HArray1OfDerivedUnitElement);
  }

  export declare class Handle_StepBasic_HArray1OfDerivedUnitElement_4 extends Handle_StepBasic_HArray1OfDerivedUnitElement {
    constructor(theHandle: Handle_StepBasic_HArray1OfDerivedUnitElement);
  }

export declare class Handle_StepBasic_DerivedUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DerivedUnit): void;
  get(): StepBasic_DerivedUnit;
}

  export declare class Handle_StepBasic_DerivedUnit_1 extends Handle_StepBasic_DerivedUnit {
    constructor();
  }

  export declare class Handle_StepBasic_DerivedUnit_2 extends Handle_StepBasic_DerivedUnit {
    constructor(thePtr: StepBasic_DerivedUnit);
  }

  export declare class Handle_StepBasic_DerivedUnit_3 extends Handle_StepBasic_DerivedUnit {
    constructor(theHandle: Handle_StepBasic_DerivedUnit);
  }

  export declare class Handle_StepBasic_DerivedUnit_4 extends Handle_StepBasic_DerivedUnit {
    constructor(theHandle: Handle_StepBasic_DerivedUnit);
  }

export declare class Handle_StepBasic_ProductDefinitionContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionContext): void;
  get(): StepBasic_ProductDefinitionContext;
}

  export declare class Handle_StepBasic_ProductDefinitionContext_1 extends Handle_StepBasic_ProductDefinitionContext {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionContext_2 extends Handle_StepBasic_ProductDefinitionContext {
    constructor(thePtr: StepBasic_ProductDefinitionContext);
  }

  export declare class Handle_StepBasic_ProductDefinitionContext_3 extends Handle_StepBasic_ProductDefinitionContext {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionContext);
  }

  export declare class Handle_StepBasic_ProductDefinitionContext_4 extends Handle_StepBasic_ProductDefinitionContext {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionContext);
  }

export declare class Handle_StepBasic_DesignContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DesignContext): void;
  get(): StepBasic_DesignContext;
}

  export declare class Handle_StepBasic_DesignContext_1 extends Handle_StepBasic_DesignContext {
    constructor();
  }

  export declare class Handle_StepBasic_DesignContext_2 extends Handle_StepBasic_DesignContext {
    constructor(thePtr: StepBasic_DesignContext);
  }

  export declare class Handle_StepBasic_DesignContext_3 extends Handle_StepBasic_DesignContext {
    constructor(theHandle: Handle_StepBasic_DesignContext);
  }

  export declare class Handle_StepBasic_DesignContext_4 extends Handle_StepBasic_DesignContext {
    constructor(theHandle: Handle_StepBasic_DesignContext);
  }

export declare class Handle_StepBasic_DigitalDocument {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DigitalDocument): void;
  get(): StepBasic_DigitalDocument;
}

  export declare class Handle_StepBasic_DigitalDocument_1 extends Handle_StepBasic_DigitalDocument {
    constructor();
  }

  export declare class Handle_StepBasic_DigitalDocument_2 extends Handle_StepBasic_DigitalDocument {
    constructor(thePtr: StepBasic_DigitalDocument);
  }

  export declare class Handle_StepBasic_DigitalDocument_3 extends Handle_StepBasic_DigitalDocument {
    constructor(theHandle: Handle_StepBasic_DigitalDocument);
  }

  export declare class Handle_StepBasic_DigitalDocument_4 extends Handle_StepBasic_DigitalDocument {
    constructor(theHandle: Handle_StepBasic_DigitalDocument);
  }

export declare class Handle_StepBasic_DimensionalExponents {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DimensionalExponents): void;
  get(): StepBasic_DimensionalExponents;
}

  export declare class Handle_StepBasic_DimensionalExponents_1 extends Handle_StepBasic_DimensionalExponents {
    constructor();
  }

  export declare class Handle_StepBasic_DimensionalExponents_2 extends Handle_StepBasic_DimensionalExponents {
    constructor(thePtr: StepBasic_DimensionalExponents);
  }

  export declare class Handle_StepBasic_DimensionalExponents_3 extends Handle_StepBasic_DimensionalExponents {
    constructor(theHandle: Handle_StepBasic_DimensionalExponents);
  }

  export declare class Handle_StepBasic_DimensionalExponents_4 extends Handle_StepBasic_DimensionalExponents {
    constructor(theHandle: Handle_StepBasic_DimensionalExponents);
  }

export declare class Handle_StepBasic_DocumentFile {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentFile): void;
  get(): StepBasic_DocumentFile;
}

  export declare class Handle_StepBasic_DocumentFile_1 extends Handle_StepBasic_DocumentFile {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentFile_2 extends Handle_StepBasic_DocumentFile {
    constructor(thePtr: StepBasic_DocumentFile);
  }

  export declare class Handle_StepBasic_DocumentFile_3 extends Handle_StepBasic_DocumentFile {
    constructor(theHandle: Handle_StepBasic_DocumentFile);
  }

  export declare class Handle_StepBasic_DocumentFile_4 extends Handle_StepBasic_DocumentFile {
    constructor(theHandle: Handle_StepBasic_DocumentFile);
  }

export declare class Handle_StepBasic_DocumentProductAssociation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentProductAssociation): void;
  get(): StepBasic_DocumentProductAssociation;
}

  export declare class Handle_StepBasic_DocumentProductAssociation_1 extends Handle_StepBasic_DocumentProductAssociation {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentProductAssociation_2 extends Handle_StepBasic_DocumentProductAssociation {
    constructor(thePtr: StepBasic_DocumentProductAssociation);
  }

  export declare class Handle_StepBasic_DocumentProductAssociation_3 extends Handle_StepBasic_DocumentProductAssociation {
    constructor(theHandle: Handle_StepBasic_DocumentProductAssociation);
  }

  export declare class Handle_StepBasic_DocumentProductAssociation_4 extends Handle_StepBasic_DocumentProductAssociation {
    constructor(theHandle: Handle_StepBasic_DocumentProductAssociation);
  }

export declare class Handle_StepBasic_DocumentProductEquivalence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentProductEquivalence): void;
  get(): StepBasic_DocumentProductEquivalence;
}

  export declare class Handle_StepBasic_DocumentProductEquivalence_1 extends Handle_StepBasic_DocumentProductEquivalence {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentProductEquivalence_2 extends Handle_StepBasic_DocumentProductEquivalence {
    constructor(thePtr: StepBasic_DocumentProductEquivalence);
  }

  export declare class Handle_StepBasic_DocumentProductEquivalence_3 extends Handle_StepBasic_DocumentProductEquivalence {
    constructor(theHandle: Handle_StepBasic_DocumentProductEquivalence);
  }

  export declare class Handle_StepBasic_DocumentProductEquivalence_4 extends Handle_StepBasic_DocumentProductEquivalence {
    constructor(theHandle: Handle_StepBasic_DocumentProductEquivalence);
  }

export declare class Handle_StepBasic_DocumentRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentRelationship): void;
  get(): StepBasic_DocumentRelationship;
}

  export declare class Handle_StepBasic_DocumentRelationship_1 extends Handle_StepBasic_DocumentRelationship {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentRelationship_2 extends Handle_StepBasic_DocumentRelationship {
    constructor(thePtr: StepBasic_DocumentRelationship);
  }

  export declare class Handle_StepBasic_DocumentRelationship_3 extends Handle_StepBasic_DocumentRelationship {
    constructor(theHandle: Handle_StepBasic_DocumentRelationship);
  }

  export declare class Handle_StepBasic_DocumentRelationship_4 extends Handle_StepBasic_DocumentRelationship {
    constructor(theHandle: Handle_StepBasic_DocumentRelationship);
  }

export declare class Handle_StepBasic_DocumentRepresentationType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentRepresentationType): void;
  get(): StepBasic_DocumentRepresentationType;
}

  export declare class Handle_StepBasic_DocumentRepresentationType_1 extends Handle_StepBasic_DocumentRepresentationType {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentRepresentationType_2 extends Handle_StepBasic_DocumentRepresentationType {
    constructor(thePtr: StepBasic_DocumentRepresentationType);
  }

  export declare class Handle_StepBasic_DocumentRepresentationType_3 extends Handle_StepBasic_DocumentRepresentationType {
    constructor(theHandle: Handle_StepBasic_DocumentRepresentationType);
  }

  export declare class Handle_StepBasic_DocumentRepresentationType_4 extends Handle_StepBasic_DocumentRepresentationType {
    constructor(theHandle: Handle_StepBasic_DocumentRepresentationType);
  }

export declare class Handle_StepBasic_DocumentType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentType): void;
  get(): StepBasic_DocumentType;
}

  export declare class Handle_StepBasic_DocumentType_1 extends Handle_StepBasic_DocumentType {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentType_2 extends Handle_StepBasic_DocumentType {
    constructor(thePtr: StepBasic_DocumentType);
  }

  export declare class Handle_StepBasic_DocumentType_3 extends Handle_StepBasic_DocumentType {
    constructor(theHandle: Handle_StepBasic_DocumentType);
  }

  export declare class Handle_StepBasic_DocumentType_4 extends Handle_StepBasic_DocumentType {
    constructor(theHandle: Handle_StepBasic_DocumentType);
  }

export declare class Handle_StepBasic_DocumentUsageConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_DocumentUsageConstraint): void;
  get(): StepBasic_DocumentUsageConstraint;
}

  export declare class Handle_StepBasic_DocumentUsageConstraint_1 extends Handle_StepBasic_DocumentUsageConstraint {
    constructor();
  }

  export declare class Handle_StepBasic_DocumentUsageConstraint_2 extends Handle_StepBasic_DocumentUsageConstraint {
    constructor(thePtr: StepBasic_DocumentUsageConstraint);
  }

  export declare class Handle_StepBasic_DocumentUsageConstraint_3 extends Handle_StepBasic_DocumentUsageConstraint {
    constructor(theHandle: Handle_StepBasic_DocumentUsageConstraint);
  }

  export declare class Handle_StepBasic_DocumentUsageConstraint_4 extends Handle_StepBasic_DocumentUsageConstraint {
    constructor(theHandle: Handle_StepBasic_DocumentUsageConstraint);
  }

export declare class Handle_StepBasic_Effectivity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_Effectivity): void;
  get(): StepBasic_Effectivity;
}

  export declare class Handle_StepBasic_Effectivity_1 extends Handle_StepBasic_Effectivity {
    constructor();
  }

  export declare class Handle_StepBasic_Effectivity_2 extends Handle_StepBasic_Effectivity {
    constructor(thePtr: StepBasic_Effectivity);
  }

  export declare class Handle_StepBasic_Effectivity_3 extends Handle_StepBasic_Effectivity {
    constructor(theHandle: Handle_StepBasic_Effectivity);
  }

  export declare class Handle_StepBasic_Effectivity_4 extends Handle_StepBasic_Effectivity {
    constructor(theHandle: Handle_StepBasic_Effectivity);
  }

export declare class Handle_StepBasic_EffectivityAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_EffectivityAssignment): void;
  get(): StepBasic_EffectivityAssignment;
}

  export declare class Handle_StepBasic_EffectivityAssignment_1 extends Handle_StepBasic_EffectivityAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_EffectivityAssignment_2 extends Handle_StepBasic_EffectivityAssignment {
    constructor(thePtr: StepBasic_EffectivityAssignment);
  }

  export declare class Handle_StepBasic_EffectivityAssignment_3 extends Handle_StepBasic_EffectivityAssignment {
    constructor(theHandle: Handle_StepBasic_EffectivityAssignment);
  }

  export declare class Handle_StepBasic_EffectivityAssignment_4 extends Handle_StepBasic_EffectivityAssignment {
    constructor(theHandle: Handle_StepBasic_EffectivityAssignment);
  }

export declare class Handle_StepBasic_EulerAngles {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_EulerAngles): void;
  get(): StepBasic_EulerAngles;
}

  export declare class Handle_StepBasic_EulerAngles_1 extends Handle_StepBasic_EulerAngles {
    constructor();
  }

  export declare class Handle_StepBasic_EulerAngles_2 extends Handle_StepBasic_EulerAngles {
    constructor(thePtr: StepBasic_EulerAngles);
  }

  export declare class Handle_StepBasic_EulerAngles_3 extends Handle_StepBasic_EulerAngles {
    constructor(theHandle: Handle_StepBasic_EulerAngles);
  }

  export declare class Handle_StepBasic_EulerAngles_4 extends Handle_StepBasic_EulerAngles {
    constructor(theHandle: Handle_StepBasic_EulerAngles);
  }

export declare class Handle_StepBasic_ExternalSource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ExternalSource): void;
  get(): StepBasic_ExternalSource;
}

  export declare class Handle_StepBasic_ExternalSource_1 extends Handle_StepBasic_ExternalSource {
    constructor();
  }

  export declare class Handle_StepBasic_ExternalSource_2 extends Handle_StepBasic_ExternalSource {
    constructor(thePtr: StepBasic_ExternalSource);
  }

  export declare class Handle_StepBasic_ExternalSource_3 extends Handle_StepBasic_ExternalSource {
    constructor(theHandle: Handle_StepBasic_ExternalSource);
  }

  export declare class Handle_StepBasic_ExternalSource_4 extends Handle_StepBasic_ExternalSource {
    constructor(theHandle: Handle_StepBasic_ExternalSource);
  }

export declare class Handle_StepBasic_ExternallyDefinedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ExternallyDefinedItem): void;
  get(): StepBasic_ExternallyDefinedItem;
}

  export declare class Handle_StepBasic_ExternallyDefinedItem_1 extends Handle_StepBasic_ExternallyDefinedItem {
    constructor();
  }

  export declare class Handle_StepBasic_ExternallyDefinedItem_2 extends Handle_StepBasic_ExternallyDefinedItem {
    constructor(thePtr: StepBasic_ExternallyDefinedItem);
  }

  export declare class Handle_StepBasic_ExternallyDefinedItem_3 extends Handle_StepBasic_ExternallyDefinedItem {
    constructor(theHandle: Handle_StepBasic_ExternallyDefinedItem);
  }

  export declare class Handle_StepBasic_ExternallyDefinedItem_4 extends Handle_StepBasic_ExternallyDefinedItem {
    constructor(theHandle: Handle_StepBasic_ExternallyDefinedItem);
  }

export declare class Handle_StepBasic_GroupRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_GroupRelationship): void;
  get(): StepBasic_GroupRelationship;
}

  export declare class Handle_StepBasic_GroupRelationship_1 extends Handle_StepBasic_GroupRelationship {
    constructor();
  }

  export declare class Handle_StepBasic_GroupRelationship_2 extends Handle_StepBasic_GroupRelationship {
    constructor(thePtr: StepBasic_GroupRelationship);
  }

  export declare class Handle_StepBasic_GroupRelationship_3 extends Handle_StepBasic_GroupRelationship {
    constructor(theHandle: Handle_StepBasic_GroupRelationship);
  }

  export declare class Handle_StepBasic_GroupRelationship_4 extends Handle_StepBasic_GroupRelationship {
    constructor(theHandle: Handle_StepBasic_GroupRelationship);
  }

export declare class Handle_StepBasic_HArray1OfDocument {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfDocument): void;
  get(): StepBasic_HArray1OfDocument;
}

  export declare class Handle_StepBasic_HArray1OfDocument_1 extends Handle_StepBasic_HArray1OfDocument {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfDocument_2 extends Handle_StepBasic_HArray1OfDocument {
    constructor(thePtr: StepBasic_HArray1OfDocument);
  }

  export declare class Handle_StepBasic_HArray1OfDocument_3 extends Handle_StepBasic_HArray1OfDocument {
    constructor(theHandle: Handle_StepBasic_HArray1OfDocument);
  }

  export declare class Handle_StepBasic_HArray1OfDocument_4 extends Handle_StepBasic_HArray1OfDocument {
    constructor(theHandle: Handle_StepBasic_HArray1OfDocument);
  }

export declare class Handle_StepBasic_HArray1OfNamedUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfNamedUnit): void;
  get(): StepBasic_HArray1OfNamedUnit;
}

  export declare class Handle_StepBasic_HArray1OfNamedUnit_1 extends Handle_StepBasic_HArray1OfNamedUnit {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfNamedUnit_2 extends Handle_StepBasic_HArray1OfNamedUnit {
    constructor(thePtr: StepBasic_HArray1OfNamedUnit);
  }

  export declare class Handle_StepBasic_HArray1OfNamedUnit_3 extends Handle_StepBasic_HArray1OfNamedUnit {
    constructor(theHandle: Handle_StepBasic_HArray1OfNamedUnit);
  }

  export declare class Handle_StepBasic_HArray1OfNamedUnit_4 extends Handle_StepBasic_HArray1OfNamedUnit {
    constructor(theHandle: Handle_StepBasic_HArray1OfNamedUnit);
  }

export declare class Handle_StepBasic_HArray1OfOrganization {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfOrganization): void;
  get(): StepBasic_HArray1OfOrganization;
}

  export declare class Handle_StepBasic_HArray1OfOrganization_1 extends Handle_StepBasic_HArray1OfOrganization {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfOrganization_2 extends Handle_StepBasic_HArray1OfOrganization {
    constructor(thePtr: StepBasic_HArray1OfOrganization);
  }

  export declare class Handle_StepBasic_HArray1OfOrganization_3 extends Handle_StepBasic_HArray1OfOrganization {
    constructor(theHandle: Handle_StepBasic_HArray1OfOrganization);
  }

  export declare class Handle_StepBasic_HArray1OfOrganization_4 extends Handle_StepBasic_HArray1OfOrganization {
    constructor(theHandle: Handle_StepBasic_HArray1OfOrganization);
  }

export declare class Handle_StepBasic_HArray1OfPerson {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfPerson): void;
  get(): StepBasic_HArray1OfPerson;
}

  export declare class Handle_StepBasic_HArray1OfPerson_1 extends Handle_StepBasic_HArray1OfPerson {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfPerson_2 extends Handle_StepBasic_HArray1OfPerson {
    constructor(thePtr: StepBasic_HArray1OfPerson);
  }

  export declare class Handle_StepBasic_HArray1OfPerson_3 extends Handle_StepBasic_HArray1OfPerson {
    constructor(theHandle: Handle_StepBasic_HArray1OfPerson);
  }

  export declare class Handle_StepBasic_HArray1OfPerson_4 extends Handle_StepBasic_HArray1OfPerson {
    constructor(theHandle: Handle_StepBasic_HArray1OfPerson);
  }

export declare class Handle_StepBasic_HArray1OfProduct {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfProduct): void;
  get(): StepBasic_HArray1OfProduct;
}

  export declare class Handle_StepBasic_HArray1OfProduct_1 extends Handle_StepBasic_HArray1OfProduct {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfProduct_2 extends Handle_StepBasic_HArray1OfProduct {
    constructor(thePtr: StepBasic_HArray1OfProduct);
  }

  export declare class Handle_StepBasic_HArray1OfProduct_3 extends Handle_StepBasic_HArray1OfProduct {
    constructor(theHandle: Handle_StepBasic_HArray1OfProduct);
  }

  export declare class Handle_StepBasic_HArray1OfProduct_4 extends Handle_StepBasic_HArray1OfProduct {
    constructor(theHandle: Handle_StepBasic_HArray1OfProduct);
  }

export declare class Handle_StepBasic_HArray1OfProductDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfProductDefinition): void;
  get(): StepBasic_HArray1OfProductDefinition;
}

  export declare class Handle_StepBasic_HArray1OfProductDefinition_1 extends Handle_StepBasic_HArray1OfProductDefinition {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfProductDefinition_2 extends Handle_StepBasic_HArray1OfProductDefinition {
    constructor(thePtr: StepBasic_HArray1OfProductDefinition);
  }

  export declare class Handle_StepBasic_HArray1OfProductDefinition_3 extends Handle_StepBasic_HArray1OfProductDefinition {
    constructor(theHandle: Handle_StepBasic_HArray1OfProductDefinition);
  }

  export declare class Handle_StepBasic_HArray1OfProductDefinition_4 extends Handle_StepBasic_HArray1OfProductDefinition {
    constructor(theHandle: Handle_StepBasic_HArray1OfProductDefinition);
  }

export declare class Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_HArray1OfUncertaintyMeasureWithUnit): void;
  get(): StepBasic_HArray1OfUncertaintyMeasureWithUnit;
}

  export declare class Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_1 extends Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_2 extends Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit {
    constructor(thePtr: StepBasic_HArray1OfUncertaintyMeasureWithUnit);
  }

  export declare class Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_3 extends Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit);
  }

  export declare class Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_4 extends Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit);
  }

export declare class Handle_StepBasic_IdentificationRole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_IdentificationRole): void;
  get(): StepBasic_IdentificationRole;
}

  export declare class Handle_StepBasic_IdentificationRole_1 extends Handle_StepBasic_IdentificationRole {
    constructor();
  }

  export declare class Handle_StepBasic_IdentificationRole_2 extends Handle_StepBasic_IdentificationRole {
    constructor(thePtr: StepBasic_IdentificationRole);
  }

  export declare class Handle_StepBasic_IdentificationRole_3 extends Handle_StepBasic_IdentificationRole {
    constructor(theHandle: Handle_StepBasic_IdentificationRole);
  }

  export declare class Handle_StepBasic_IdentificationRole_4 extends Handle_StepBasic_IdentificationRole {
    constructor(theHandle: Handle_StepBasic_IdentificationRole);
  }

export declare class Handle_StepBasic_LengthUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_LengthUnit): void;
  get(): StepBasic_LengthUnit;
}

  export declare class Handle_StepBasic_LengthUnit_1 extends Handle_StepBasic_LengthUnit {
    constructor();
  }

  export declare class Handle_StepBasic_LengthUnit_2 extends Handle_StepBasic_LengthUnit {
    constructor(thePtr: StepBasic_LengthUnit);
  }

  export declare class Handle_StepBasic_LengthUnit_3 extends Handle_StepBasic_LengthUnit {
    constructor(theHandle: Handle_StepBasic_LengthUnit);
  }

  export declare class Handle_StepBasic_LengthUnit_4 extends Handle_StepBasic_LengthUnit {
    constructor(theHandle: Handle_StepBasic_LengthUnit);
  }

export declare class Handle_StepBasic_LocalTime {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_LocalTime): void;
  get(): StepBasic_LocalTime;
}

  export declare class Handle_StepBasic_LocalTime_1 extends Handle_StepBasic_LocalTime {
    constructor();
  }

  export declare class Handle_StepBasic_LocalTime_2 extends Handle_StepBasic_LocalTime {
    constructor(thePtr: StepBasic_LocalTime);
  }

  export declare class Handle_StepBasic_LocalTime_3 extends Handle_StepBasic_LocalTime {
    constructor(theHandle: Handle_StepBasic_LocalTime);
  }

  export declare class Handle_StepBasic_LocalTime_4 extends Handle_StepBasic_LocalTime {
    constructor(theHandle: Handle_StepBasic_LocalTime);
  }

export declare class Handle_StepBasic_MassMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_MassMeasureWithUnit): void;
  get(): StepBasic_MassMeasureWithUnit;
}

  export declare class Handle_StepBasic_MassMeasureWithUnit_1 extends Handle_StepBasic_MassMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_MassMeasureWithUnit_2 extends Handle_StepBasic_MassMeasureWithUnit {
    constructor(thePtr: StepBasic_MassMeasureWithUnit);
  }

  export declare class Handle_StepBasic_MassMeasureWithUnit_3 extends Handle_StepBasic_MassMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_MassMeasureWithUnit);
  }

  export declare class Handle_StepBasic_MassMeasureWithUnit_4 extends Handle_StepBasic_MassMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_MassMeasureWithUnit);
  }

export declare class Handle_StepBasic_MassUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_MassUnit): void;
  get(): StepBasic_MassUnit;
}

  export declare class Handle_StepBasic_MassUnit_1 extends Handle_StepBasic_MassUnit {
    constructor();
  }

  export declare class Handle_StepBasic_MassUnit_2 extends Handle_StepBasic_MassUnit {
    constructor(thePtr: StepBasic_MassUnit);
  }

  export declare class Handle_StepBasic_MassUnit_3 extends Handle_StepBasic_MassUnit {
    constructor(theHandle: Handle_StepBasic_MassUnit);
  }

  export declare class Handle_StepBasic_MassUnit_4 extends Handle_StepBasic_MassUnit {
    constructor(theHandle: Handle_StepBasic_MassUnit);
  }

export declare class Handle_StepBasic_MeasureValueMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_MeasureValueMember): void;
  get(): StepBasic_MeasureValueMember;
}

  export declare class Handle_StepBasic_MeasureValueMember_1 extends Handle_StepBasic_MeasureValueMember {
    constructor();
  }

  export declare class Handle_StepBasic_MeasureValueMember_2 extends Handle_StepBasic_MeasureValueMember {
    constructor(thePtr: StepBasic_MeasureValueMember);
  }

  export declare class Handle_StepBasic_MeasureValueMember_3 extends Handle_StepBasic_MeasureValueMember {
    constructor(theHandle: Handle_StepBasic_MeasureValueMember);
  }

  export declare class Handle_StepBasic_MeasureValueMember_4 extends Handle_StepBasic_MeasureValueMember {
    constructor(theHandle: Handle_StepBasic_MeasureValueMember);
  }

export declare class Handle_StepBasic_MechanicalContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_MechanicalContext): void;
  get(): StepBasic_MechanicalContext;
}

  export declare class Handle_StepBasic_MechanicalContext_1 extends Handle_StepBasic_MechanicalContext {
    constructor();
  }

  export declare class Handle_StepBasic_MechanicalContext_2 extends Handle_StepBasic_MechanicalContext {
    constructor(thePtr: StepBasic_MechanicalContext);
  }

  export declare class Handle_StepBasic_MechanicalContext_3 extends Handle_StepBasic_MechanicalContext {
    constructor(theHandle: Handle_StepBasic_MechanicalContext);
  }

  export declare class Handle_StepBasic_MechanicalContext_4 extends Handle_StepBasic_MechanicalContext {
    constructor(theHandle: Handle_StepBasic_MechanicalContext);
  }

export declare class Handle_StepBasic_NameAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_NameAssignment): void;
  get(): StepBasic_NameAssignment;
}

  export declare class Handle_StepBasic_NameAssignment_1 extends Handle_StepBasic_NameAssignment {
    constructor();
  }

  export declare class Handle_StepBasic_NameAssignment_2 extends Handle_StepBasic_NameAssignment {
    constructor(thePtr: StepBasic_NameAssignment);
  }

  export declare class Handle_StepBasic_NameAssignment_3 extends Handle_StepBasic_NameAssignment {
    constructor(theHandle: Handle_StepBasic_NameAssignment);
  }

  export declare class Handle_StepBasic_NameAssignment_4 extends Handle_StepBasic_NameAssignment {
    constructor(theHandle: Handle_StepBasic_NameAssignment);
  }

export declare class Handle_StepBasic_ObjectRole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ObjectRole): void;
  get(): StepBasic_ObjectRole;
}

  export declare class Handle_StepBasic_ObjectRole_1 extends Handle_StepBasic_ObjectRole {
    constructor();
  }

  export declare class Handle_StepBasic_ObjectRole_2 extends Handle_StepBasic_ObjectRole {
    constructor(thePtr: StepBasic_ObjectRole);
  }

  export declare class Handle_StepBasic_ObjectRole_3 extends Handle_StepBasic_ObjectRole {
    constructor(theHandle: Handle_StepBasic_ObjectRole);
  }

  export declare class Handle_StepBasic_ObjectRole_4 extends Handle_StepBasic_ObjectRole {
    constructor(theHandle: Handle_StepBasic_ObjectRole);
  }

export declare class Handle_StepBasic_OrdinalDate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_OrdinalDate): void;
  get(): StepBasic_OrdinalDate;
}

  export declare class Handle_StepBasic_OrdinalDate_1 extends Handle_StepBasic_OrdinalDate {
    constructor();
  }

  export declare class Handle_StepBasic_OrdinalDate_2 extends Handle_StepBasic_OrdinalDate {
    constructor(thePtr: StepBasic_OrdinalDate);
  }

  export declare class Handle_StepBasic_OrdinalDate_3 extends Handle_StepBasic_OrdinalDate {
    constructor(theHandle: Handle_StepBasic_OrdinalDate);
  }

  export declare class Handle_StepBasic_OrdinalDate_4 extends Handle_StepBasic_OrdinalDate {
    constructor(theHandle: Handle_StepBasic_OrdinalDate);
  }

export declare class Handle_StepBasic_OrganizationRole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_OrganizationRole): void;
  get(): StepBasic_OrganizationRole;
}

  export declare class Handle_StepBasic_OrganizationRole_1 extends Handle_StepBasic_OrganizationRole {
    constructor();
  }

  export declare class Handle_StepBasic_OrganizationRole_2 extends Handle_StepBasic_OrganizationRole {
    constructor(thePtr: StepBasic_OrganizationRole);
  }

  export declare class Handle_StepBasic_OrganizationRole_3 extends Handle_StepBasic_OrganizationRole {
    constructor(theHandle: Handle_StepBasic_OrganizationRole);
  }

  export declare class Handle_StepBasic_OrganizationRole_4 extends Handle_StepBasic_OrganizationRole {
    constructor(theHandle: Handle_StepBasic_OrganizationRole);
  }

export declare class Handle_StepBasic_OrganizationalAddress {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_OrganizationalAddress): void;
  get(): StepBasic_OrganizationalAddress;
}

  export declare class Handle_StepBasic_OrganizationalAddress_1 extends Handle_StepBasic_OrganizationalAddress {
    constructor();
  }

  export declare class Handle_StepBasic_OrganizationalAddress_2 extends Handle_StepBasic_OrganizationalAddress {
    constructor(thePtr: StepBasic_OrganizationalAddress);
  }

  export declare class Handle_StepBasic_OrganizationalAddress_3 extends Handle_StepBasic_OrganizationalAddress {
    constructor(theHandle: Handle_StepBasic_OrganizationalAddress);
  }

  export declare class Handle_StepBasic_OrganizationalAddress_4 extends Handle_StepBasic_OrganizationalAddress {
    constructor(theHandle: Handle_StepBasic_OrganizationalAddress);
  }

export declare class Handle_StepBasic_PersonAndOrganization {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_PersonAndOrganization): void;
  get(): StepBasic_PersonAndOrganization;
}

  export declare class Handle_StepBasic_PersonAndOrganization_1 extends Handle_StepBasic_PersonAndOrganization {
    constructor();
  }

  export declare class Handle_StepBasic_PersonAndOrganization_2 extends Handle_StepBasic_PersonAndOrganization {
    constructor(thePtr: StepBasic_PersonAndOrganization);
  }

  export declare class Handle_StepBasic_PersonAndOrganization_3 extends Handle_StepBasic_PersonAndOrganization {
    constructor(theHandle: Handle_StepBasic_PersonAndOrganization);
  }

  export declare class Handle_StepBasic_PersonAndOrganization_4 extends Handle_StepBasic_PersonAndOrganization {
    constructor(theHandle: Handle_StepBasic_PersonAndOrganization);
  }

export declare class Handle_StepBasic_PersonAndOrganizationRole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_PersonAndOrganizationRole): void;
  get(): StepBasic_PersonAndOrganizationRole;
}

  export declare class Handle_StepBasic_PersonAndOrganizationRole_1 extends Handle_StepBasic_PersonAndOrganizationRole {
    constructor();
  }

  export declare class Handle_StepBasic_PersonAndOrganizationRole_2 extends Handle_StepBasic_PersonAndOrganizationRole {
    constructor(thePtr: StepBasic_PersonAndOrganizationRole);
  }

  export declare class Handle_StepBasic_PersonAndOrganizationRole_3 extends Handle_StepBasic_PersonAndOrganizationRole {
    constructor(theHandle: Handle_StepBasic_PersonAndOrganizationRole);
  }

  export declare class Handle_StepBasic_PersonAndOrganizationRole_4 extends Handle_StepBasic_PersonAndOrganizationRole {
    constructor(theHandle: Handle_StepBasic_PersonAndOrganizationRole);
  }

export declare class Handle_StepBasic_PersonalAddress {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_PersonalAddress): void;
  get(): StepBasic_PersonalAddress;
}

  export declare class Handle_StepBasic_PersonalAddress_1 extends Handle_StepBasic_PersonalAddress {
    constructor();
  }

  export declare class Handle_StepBasic_PersonalAddress_2 extends Handle_StepBasic_PersonalAddress {
    constructor(thePtr: StepBasic_PersonalAddress);
  }

  export declare class Handle_StepBasic_PersonalAddress_3 extends Handle_StepBasic_PersonalAddress {
    constructor(theHandle: Handle_StepBasic_PersonalAddress);
  }

  export declare class Handle_StepBasic_PersonalAddress_4 extends Handle_StepBasic_PersonalAddress {
    constructor(theHandle: Handle_StepBasic_PersonalAddress);
  }

export declare class Handle_StepBasic_PhysicallyModeledProductDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_PhysicallyModeledProductDefinition): void;
  get(): StepBasic_PhysicallyModeledProductDefinition;
}

  export declare class Handle_StepBasic_PhysicallyModeledProductDefinition_1 extends Handle_StepBasic_PhysicallyModeledProductDefinition {
    constructor();
  }

  export declare class Handle_StepBasic_PhysicallyModeledProductDefinition_2 extends Handle_StepBasic_PhysicallyModeledProductDefinition {
    constructor(thePtr: StepBasic_PhysicallyModeledProductDefinition);
  }

  export declare class Handle_StepBasic_PhysicallyModeledProductDefinition_3 extends Handle_StepBasic_PhysicallyModeledProductDefinition {
    constructor(theHandle: Handle_StepBasic_PhysicallyModeledProductDefinition);
  }

  export declare class Handle_StepBasic_PhysicallyModeledProductDefinition_4 extends Handle_StepBasic_PhysicallyModeledProductDefinition {
    constructor(theHandle: Handle_StepBasic_PhysicallyModeledProductDefinition);
  }

export declare class Handle_StepBasic_PlaneAngleMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_PlaneAngleMeasureWithUnit): void;
  get(): StepBasic_PlaneAngleMeasureWithUnit;
}

  export declare class Handle_StepBasic_PlaneAngleMeasureWithUnit_1 extends Handle_StepBasic_PlaneAngleMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_PlaneAngleMeasureWithUnit_2 extends Handle_StepBasic_PlaneAngleMeasureWithUnit {
    constructor(thePtr: StepBasic_PlaneAngleMeasureWithUnit);
  }

  export declare class Handle_StepBasic_PlaneAngleMeasureWithUnit_3 extends Handle_StepBasic_PlaneAngleMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_PlaneAngleMeasureWithUnit);
  }

  export declare class Handle_StepBasic_PlaneAngleMeasureWithUnit_4 extends Handle_StepBasic_PlaneAngleMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_PlaneAngleMeasureWithUnit);
  }

export declare class Handle_StepBasic_PlaneAngleUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_PlaneAngleUnit): void;
  get(): StepBasic_PlaneAngleUnit;
}

  export declare class Handle_StepBasic_PlaneAngleUnit_1 extends Handle_StepBasic_PlaneAngleUnit {
    constructor();
  }

  export declare class Handle_StepBasic_PlaneAngleUnit_2 extends Handle_StepBasic_PlaneAngleUnit {
    constructor(thePtr: StepBasic_PlaneAngleUnit);
  }

  export declare class Handle_StepBasic_PlaneAngleUnit_3 extends Handle_StepBasic_PlaneAngleUnit {
    constructor(theHandle: Handle_StepBasic_PlaneAngleUnit);
  }

  export declare class Handle_StepBasic_PlaneAngleUnit_4 extends Handle_StepBasic_PlaneAngleUnit {
    constructor(theHandle: Handle_StepBasic_PlaneAngleUnit);
  }

export declare class Handle_StepBasic_ProductCategory {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductCategory): void;
  get(): StepBasic_ProductCategory;
}

  export declare class Handle_StepBasic_ProductCategory_1 extends Handle_StepBasic_ProductCategory {
    constructor();
  }

  export declare class Handle_StepBasic_ProductCategory_2 extends Handle_StepBasic_ProductCategory {
    constructor(thePtr: StepBasic_ProductCategory);
  }

  export declare class Handle_StepBasic_ProductCategory_3 extends Handle_StepBasic_ProductCategory {
    constructor(theHandle: Handle_StepBasic_ProductCategory);
  }

  export declare class Handle_StepBasic_ProductCategory_4 extends Handle_StepBasic_ProductCategory {
    constructor(theHandle: Handle_StepBasic_ProductCategory);
  }

export declare class Handle_StepBasic_ProductCategoryRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductCategoryRelationship): void;
  get(): StepBasic_ProductCategoryRelationship;
}

  export declare class Handle_StepBasic_ProductCategoryRelationship_1 extends Handle_StepBasic_ProductCategoryRelationship {
    constructor();
  }

  export declare class Handle_StepBasic_ProductCategoryRelationship_2 extends Handle_StepBasic_ProductCategoryRelationship {
    constructor(thePtr: StepBasic_ProductCategoryRelationship);
  }

  export declare class Handle_StepBasic_ProductCategoryRelationship_3 extends Handle_StepBasic_ProductCategoryRelationship {
    constructor(theHandle: Handle_StepBasic_ProductCategoryRelationship);
  }

  export declare class Handle_StepBasic_ProductCategoryRelationship_4 extends Handle_StepBasic_ProductCategoryRelationship {
    constructor(theHandle: Handle_StepBasic_ProductCategoryRelationship);
  }

export declare class Handle_StepBasic_ProductConceptContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductConceptContext): void;
  get(): StepBasic_ProductConceptContext;
}

  export declare class Handle_StepBasic_ProductConceptContext_1 extends Handle_StepBasic_ProductConceptContext {
    constructor();
  }

  export declare class Handle_StepBasic_ProductConceptContext_2 extends Handle_StepBasic_ProductConceptContext {
    constructor(thePtr: StepBasic_ProductConceptContext);
  }

  export declare class Handle_StepBasic_ProductConceptContext_3 extends Handle_StepBasic_ProductConceptContext {
    constructor(theHandle: Handle_StepBasic_ProductConceptContext);
  }

  export declare class Handle_StepBasic_ProductConceptContext_4 extends Handle_StepBasic_ProductConceptContext {
    constructor(theHandle: Handle_StepBasic_ProductConceptContext);
  }

export declare class Handle_StepBasic_ProductDefinitionEffectivity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionEffectivity): void;
  get(): StepBasic_ProductDefinitionEffectivity;
}

  export declare class Handle_StepBasic_ProductDefinitionEffectivity_1 extends Handle_StepBasic_ProductDefinitionEffectivity {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionEffectivity_2 extends Handle_StepBasic_ProductDefinitionEffectivity {
    constructor(thePtr: StepBasic_ProductDefinitionEffectivity);
  }

  export declare class Handle_StepBasic_ProductDefinitionEffectivity_3 extends Handle_StepBasic_ProductDefinitionEffectivity {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionEffectivity);
  }

  export declare class Handle_StepBasic_ProductDefinitionEffectivity_4 extends Handle_StepBasic_ProductDefinitionEffectivity {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionEffectivity);
  }

export declare class Handle_StepBasic_ProductDefinitionFormation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionFormation): void;
  get(): StepBasic_ProductDefinitionFormation;
}

  export declare class Handle_StepBasic_ProductDefinitionFormation_1 extends Handle_StepBasic_ProductDefinitionFormation {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionFormation_2 extends Handle_StepBasic_ProductDefinitionFormation {
    constructor(thePtr: StepBasic_ProductDefinitionFormation);
  }

  export declare class Handle_StepBasic_ProductDefinitionFormation_3 extends Handle_StepBasic_ProductDefinitionFormation {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionFormation);
  }

  export declare class Handle_StepBasic_ProductDefinitionFormation_4 extends Handle_StepBasic_ProductDefinitionFormation {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionFormation);
  }

export declare class Handle_StepBasic_ProductDefinitionFormationRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionFormationRelationship): void;
  get(): StepBasic_ProductDefinitionFormationRelationship;
}

  export declare class Handle_StepBasic_ProductDefinitionFormationRelationship_1 extends Handle_StepBasic_ProductDefinitionFormationRelationship {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionFormationRelationship_2 extends Handle_StepBasic_ProductDefinitionFormationRelationship {
    constructor(thePtr: StepBasic_ProductDefinitionFormationRelationship);
  }

  export declare class Handle_StepBasic_ProductDefinitionFormationRelationship_3 extends Handle_StepBasic_ProductDefinitionFormationRelationship {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionFormationRelationship);
  }

  export declare class Handle_StepBasic_ProductDefinitionFormationRelationship_4 extends Handle_StepBasic_ProductDefinitionFormationRelationship {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionFormationRelationship);
  }

export declare class Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionFormationWithSpecifiedSource): void;
  get(): StepBasic_ProductDefinitionFormationWithSpecifiedSource;
}

  export declare class Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_1 extends Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_2 extends Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource {
    constructor(thePtr: StepBasic_ProductDefinitionFormationWithSpecifiedSource);
  }

  export declare class Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_3 extends Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource);
  }

  export declare class Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_4 extends Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource);
  }

export declare class Handle_StepBasic_ProductDefinitionReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionReference): void;
  get(): StepBasic_ProductDefinitionReference;
}

  export declare class Handle_StepBasic_ProductDefinitionReference_1 extends Handle_StepBasic_ProductDefinitionReference {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionReference_2 extends Handle_StepBasic_ProductDefinitionReference {
    constructor(thePtr: StepBasic_ProductDefinitionReference);
  }

  export declare class Handle_StepBasic_ProductDefinitionReference_3 extends Handle_StepBasic_ProductDefinitionReference {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionReference);
  }

  export declare class Handle_StepBasic_ProductDefinitionReference_4 extends Handle_StepBasic_ProductDefinitionReference {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionReference);
  }

export declare class Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionReferenceWithLocalRepresentation): void;
  get(): StepBasic_ProductDefinitionReferenceWithLocalRepresentation;
}

  export declare class Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_1 extends Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_2 extends Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation {
    constructor(thePtr: StepBasic_ProductDefinitionReferenceWithLocalRepresentation);
  }

  export declare class Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_3 extends Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation);
  }

  export declare class Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_4 extends Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation);
  }

export declare class Handle_StepBasic_ProductDefinitionRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionRelationship): void;
  get(): StepBasic_ProductDefinitionRelationship;
}

  export declare class Handle_StepBasic_ProductDefinitionRelationship_1 extends Handle_StepBasic_ProductDefinitionRelationship {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionRelationship_2 extends Handle_StepBasic_ProductDefinitionRelationship {
    constructor(thePtr: StepBasic_ProductDefinitionRelationship);
  }

  export declare class Handle_StepBasic_ProductDefinitionRelationship_3 extends Handle_StepBasic_ProductDefinitionRelationship {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionRelationship);
  }

  export declare class Handle_StepBasic_ProductDefinitionRelationship_4 extends Handle_StepBasic_ProductDefinitionRelationship {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionRelationship);
  }

export declare class Handle_StepBasic_ProductDefinitionWithAssociatedDocuments {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductDefinitionWithAssociatedDocuments): void;
  get(): StepBasic_ProductDefinitionWithAssociatedDocuments;
}

  export declare class Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_1 extends Handle_StepBasic_ProductDefinitionWithAssociatedDocuments {
    constructor();
  }

  export declare class Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_2 extends Handle_StepBasic_ProductDefinitionWithAssociatedDocuments {
    constructor(thePtr: StepBasic_ProductDefinitionWithAssociatedDocuments);
  }

  export declare class Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_3 extends Handle_StepBasic_ProductDefinitionWithAssociatedDocuments {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionWithAssociatedDocuments);
  }

  export declare class Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_4 extends Handle_StepBasic_ProductDefinitionWithAssociatedDocuments {
    constructor(theHandle: Handle_StepBasic_ProductDefinitionWithAssociatedDocuments);
  }

export declare class Handle_StepBasic_ProductRelatedProductCategory {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductRelatedProductCategory): void;
  get(): StepBasic_ProductRelatedProductCategory;
}

  export declare class Handle_StepBasic_ProductRelatedProductCategory_1 extends Handle_StepBasic_ProductRelatedProductCategory {
    constructor();
  }

  export declare class Handle_StepBasic_ProductRelatedProductCategory_2 extends Handle_StepBasic_ProductRelatedProductCategory {
    constructor(thePtr: StepBasic_ProductRelatedProductCategory);
  }

  export declare class Handle_StepBasic_ProductRelatedProductCategory_3 extends Handle_StepBasic_ProductRelatedProductCategory {
    constructor(theHandle: Handle_StepBasic_ProductRelatedProductCategory);
  }

  export declare class Handle_StepBasic_ProductRelatedProductCategory_4 extends Handle_StepBasic_ProductRelatedProductCategory {
    constructor(theHandle: Handle_StepBasic_ProductRelatedProductCategory);
  }

export declare class Handle_StepBasic_ProductType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ProductType): void;
  get(): StepBasic_ProductType;
}

  export declare class Handle_StepBasic_ProductType_1 extends Handle_StepBasic_ProductType {
    constructor();
  }

  export declare class Handle_StepBasic_ProductType_2 extends Handle_StepBasic_ProductType {
    constructor(thePtr: StepBasic_ProductType);
  }

  export declare class Handle_StepBasic_ProductType_3 extends Handle_StepBasic_ProductType {
    constructor(theHandle: Handle_StepBasic_ProductType);
  }

  export declare class Handle_StepBasic_ProductType_4 extends Handle_StepBasic_ProductType {
    constructor(theHandle: Handle_StepBasic_ProductType);
  }

export declare class Handle_StepBasic_RatioMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_RatioMeasureWithUnit): void;
  get(): StepBasic_RatioMeasureWithUnit;
}

  export declare class Handle_StepBasic_RatioMeasureWithUnit_1 extends Handle_StepBasic_RatioMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_RatioMeasureWithUnit_2 extends Handle_StepBasic_RatioMeasureWithUnit {
    constructor(thePtr: StepBasic_RatioMeasureWithUnit);
  }

  export declare class Handle_StepBasic_RatioMeasureWithUnit_3 extends Handle_StepBasic_RatioMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_RatioMeasureWithUnit);
  }

  export declare class Handle_StepBasic_RatioMeasureWithUnit_4 extends Handle_StepBasic_RatioMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_RatioMeasureWithUnit);
  }

export declare class Handle_StepBasic_RatioUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_RatioUnit): void;
  get(): StepBasic_RatioUnit;
}

  export declare class Handle_StepBasic_RatioUnit_1 extends Handle_StepBasic_RatioUnit {
    constructor();
  }

  export declare class Handle_StepBasic_RatioUnit_2 extends Handle_StepBasic_RatioUnit {
    constructor(thePtr: StepBasic_RatioUnit);
  }

  export declare class Handle_StepBasic_RatioUnit_3 extends Handle_StepBasic_RatioUnit {
    constructor(theHandle: Handle_StepBasic_RatioUnit);
  }

  export declare class Handle_StepBasic_RatioUnit_4 extends Handle_StepBasic_RatioUnit {
    constructor(theHandle: Handle_StepBasic_RatioUnit);
  }

export declare class Handle_StepBasic_RoleAssociation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_RoleAssociation): void;
  get(): StepBasic_RoleAssociation;
}

  export declare class Handle_StepBasic_RoleAssociation_1 extends Handle_StepBasic_RoleAssociation {
    constructor();
  }

  export declare class Handle_StepBasic_RoleAssociation_2 extends Handle_StepBasic_RoleAssociation {
    constructor(thePtr: StepBasic_RoleAssociation);
  }

  export declare class Handle_StepBasic_RoleAssociation_3 extends Handle_StepBasic_RoleAssociation {
    constructor(theHandle: Handle_StepBasic_RoleAssociation);
  }

  export declare class Handle_StepBasic_RoleAssociation_4 extends Handle_StepBasic_RoleAssociation {
    constructor(theHandle: Handle_StepBasic_RoleAssociation);
  }

export declare class Handle_StepBasic_SecurityClassification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SecurityClassification): void;
  get(): StepBasic_SecurityClassification;
}

  export declare class Handle_StepBasic_SecurityClassification_1 extends Handle_StepBasic_SecurityClassification {
    constructor();
  }

  export declare class Handle_StepBasic_SecurityClassification_2 extends Handle_StepBasic_SecurityClassification {
    constructor(thePtr: StepBasic_SecurityClassification);
  }

  export declare class Handle_StepBasic_SecurityClassification_3 extends Handle_StepBasic_SecurityClassification {
    constructor(theHandle: Handle_StepBasic_SecurityClassification);
  }

  export declare class Handle_StepBasic_SecurityClassification_4 extends Handle_StepBasic_SecurityClassification {
    constructor(theHandle: Handle_StepBasic_SecurityClassification);
  }

export declare class Handle_StepBasic_SecurityClassificationLevel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SecurityClassificationLevel): void;
  get(): StepBasic_SecurityClassificationLevel;
}

  export declare class Handle_StepBasic_SecurityClassificationLevel_1 extends Handle_StepBasic_SecurityClassificationLevel {
    constructor();
  }

  export declare class Handle_StepBasic_SecurityClassificationLevel_2 extends Handle_StepBasic_SecurityClassificationLevel {
    constructor(thePtr: StepBasic_SecurityClassificationLevel);
  }

  export declare class Handle_StepBasic_SecurityClassificationLevel_3 extends Handle_StepBasic_SecurityClassificationLevel {
    constructor(theHandle: Handle_StepBasic_SecurityClassificationLevel);
  }

  export declare class Handle_StepBasic_SecurityClassificationLevel_4 extends Handle_StepBasic_SecurityClassificationLevel {
    constructor(theHandle: Handle_StepBasic_SecurityClassificationLevel);
  }

export declare class Handle_StepBasic_SiUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnit): void;
  get(): StepBasic_SiUnit;
}

  export declare class Handle_StepBasic_SiUnit_1 extends Handle_StepBasic_SiUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnit_2 extends Handle_StepBasic_SiUnit {
    constructor(thePtr: StepBasic_SiUnit);
  }

  export declare class Handle_StepBasic_SiUnit_3 extends Handle_StepBasic_SiUnit {
    constructor(theHandle: Handle_StepBasic_SiUnit);
  }

  export declare class Handle_StepBasic_SiUnit_4 extends Handle_StepBasic_SiUnit {
    constructor(theHandle: Handle_StepBasic_SiUnit);
  }

export declare class Handle_StepBasic_SiUnitAndAreaUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndAreaUnit): void;
  get(): StepBasic_SiUnitAndAreaUnit;
}

  export declare class Handle_StepBasic_SiUnitAndAreaUnit_1 extends Handle_StepBasic_SiUnitAndAreaUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndAreaUnit_2 extends Handle_StepBasic_SiUnitAndAreaUnit {
    constructor(thePtr: StepBasic_SiUnitAndAreaUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndAreaUnit_3 extends Handle_StepBasic_SiUnitAndAreaUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndAreaUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndAreaUnit_4 extends Handle_StepBasic_SiUnitAndAreaUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndAreaUnit);
  }

export declare class Handle_StepBasic_SiUnitAndLengthUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndLengthUnit): void;
  get(): StepBasic_SiUnitAndLengthUnit;
}

  export declare class Handle_StepBasic_SiUnitAndLengthUnit_1 extends Handle_StepBasic_SiUnitAndLengthUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndLengthUnit_2 extends Handle_StepBasic_SiUnitAndLengthUnit {
    constructor(thePtr: StepBasic_SiUnitAndLengthUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndLengthUnit_3 extends Handle_StepBasic_SiUnitAndLengthUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndLengthUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndLengthUnit_4 extends Handle_StepBasic_SiUnitAndLengthUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndLengthUnit);
  }

export declare class Handle_StepBasic_SiUnitAndMassUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndMassUnit): void;
  get(): StepBasic_SiUnitAndMassUnit;
}

  export declare class Handle_StepBasic_SiUnitAndMassUnit_1 extends Handle_StepBasic_SiUnitAndMassUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndMassUnit_2 extends Handle_StepBasic_SiUnitAndMassUnit {
    constructor(thePtr: StepBasic_SiUnitAndMassUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndMassUnit_3 extends Handle_StepBasic_SiUnitAndMassUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndMassUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndMassUnit_4 extends Handle_StepBasic_SiUnitAndMassUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndMassUnit);
  }

export declare class Handle_StepBasic_SiUnitAndPlaneAngleUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndPlaneAngleUnit): void;
  get(): StepBasic_SiUnitAndPlaneAngleUnit;
}

  export declare class Handle_StepBasic_SiUnitAndPlaneAngleUnit_1 extends Handle_StepBasic_SiUnitAndPlaneAngleUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndPlaneAngleUnit_2 extends Handle_StepBasic_SiUnitAndPlaneAngleUnit {
    constructor(thePtr: StepBasic_SiUnitAndPlaneAngleUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndPlaneAngleUnit_3 extends Handle_StepBasic_SiUnitAndPlaneAngleUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndPlaneAngleUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndPlaneAngleUnit_4 extends Handle_StepBasic_SiUnitAndPlaneAngleUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndPlaneAngleUnit);
  }

export declare class Handle_StepBasic_SiUnitAndRatioUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndRatioUnit): void;
  get(): StepBasic_SiUnitAndRatioUnit;
}

  export declare class Handle_StepBasic_SiUnitAndRatioUnit_1 extends Handle_StepBasic_SiUnitAndRatioUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndRatioUnit_2 extends Handle_StepBasic_SiUnitAndRatioUnit {
    constructor(thePtr: StepBasic_SiUnitAndRatioUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndRatioUnit_3 extends Handle_StepBasic_SiUnitAndRatioUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndRatioUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndRatioUnit_4 extends Handle_StepBasic_SiUnitAndRatioUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndRatioUnit);
  }

export declare class Handle_StepBasic_SiUnitAndSolidAngleUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndSolidAngleUnit): void;
  get(): StepBasic_SiUnitAndSolidAngleUnit;
}

  export declare class Handle_StepBasic_SiUnitAndSolidAngleUnit_1 extends Handle_StepBasic_SiUnitAndSolidAngleUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndSolidAngleUnit_2 extends Handle_StepBasic_SiUnitAndSolidAngleUnit {
    constructor(thePtr: StepBasic_SiUnitAndSolidAngleUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndSolidAngleUnit_3 extends Handle_StepBasic_SiUnitAndSolidAngleUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndSolidAngleUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndSolidAngleUnit_4 extends Handle_StepBasic_SiUnitAndSolidAngleUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndSolidAngleUnit);
  }

export declare class Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndThermodynamicTemperatureUnit): void;
  get(): StepBasic_SiUnitAndThermodynamicTemperatureUnit;
}

  export declare class Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_1 extends Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_2 extends Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit {
    constructor(thePtr: StepBasic_SiUnitAndThermodynamicTemperatureUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_3 extends Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_4 extends Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit);
  }

export declare class Handle_StepBasic_SiUnitAndTimeUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndTimeUnit): void;
  get(): StepBasic_SiUnitAndTimeUnit;
}

  export declare class Handle_StepBasic_SiUnitAndTimeUnit_1 extends Handle_StepBasic_SiUnitAndTimeUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndTimeUnit_2 extends Handle_StepBasic_SiUnitAndTimeUnit {
    constructor(thePtr: StepBasic_SiUnitAndTimeUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndTimeUnit_3 extends Handle_StepBasic_SiUnitAndTimeUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndTimeUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndTimeUnit_4 extends Handle_StepBasic_SiUnitAndTimeUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndTimeUnit);
  }

export declare class Handle_StepBasic_SiUnitAndVolumeUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SiUnitAndVolumeUnit): void;
  get(): StepBasic_SiUnitAndVolumeUnit;
}

  export declare class Handle_StepBasic_SiUnitAndVolumeUnit_1 extends Handle_StepBasic_SiUnitAndVolumeUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SiUnitAndVolumeUnit_2 extends Handle_StepBasic_SiUnitAndVolumeUnit {
    constructor(thePtr: StepBasic_SiUnitAndVolumeUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndVolumeUnit_3 extends Handle_StepBasic_SiUnitAndVolumeUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndVolumeUnit);
  }

  export declare class Handle_StepBasic_SiUnitAndVolumeUnit_4 extends Handle_StepBasic_SiUnitAndVolumeUnit {
    constructor(theHandle: Handle_StepBasic_SiUnitAndVolumeUnit);
  }

export declare class Handle_StepBasic_SizeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SizeMember): void;
  get(): StepBasic_SizeMember;
}

  export declare class Handle_StepBasic_SizeMember_1 extends Handle_StepBasic_SizeMember {
    constructor();
  }

  export declare class Handle_StepBasic_SizeMember_2 extends Handle_StepBasic_SizeMember {
    constructor(thePtr: StepBasic_SizeMember);
  }

  export declare class Handle_StepBasic_SizeMember_3 extends Handle_StepBasic_SizeMember {
    constructor(theHandle: Handle_StepBasic_SizeMember);
  }

  export declare class Handle_StepBasic_SizeMember_4 extends Handle_StepBasic_SizeMember {
    constructor(theHandle: Handle_StepBasic_SizeMember);
  }

export declare class Handle_StepBasic_SolidAngleMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SolidAngleMeasureWithUnit): void;
  get(): StepBasic_SolidAngleMeasureWithUnit;
}

  export declare class Handle_StepBasic_SolidAngleMeasureWithUnit_1 extends Handle_StepBasic_SolidAngleMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SolidAngleMeasureWithUnit_2 extends Handle_StepBasic_SolidAngleMeasureWithUnit {
    constructor(thePtr: StepBasic_SolidAngleMeasureWithUnit);
  }

  export declare class Handle_StepBasic_SolidAngleMeasureWithUnit_3 extends Handle_StepBasic_SolidAngleMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_SolidAngleMeasureWithUnit);
  }

  export declare class Handle_StepBasic_SolidAngleMeasureWithUnit_4 extends Handle_StepBasic_SolidAngleMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_SolidAngleMeasureWithUnit);
  }

export declare class Handle_StepBasic_SolidAngleUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_SolidAngleUnit): void;
  get(): StepBasic_SolidAngleUnit;
}

  export declare class Handle_StepBasic_SolidAngleUnit_1 extends Handle_StepBasic_SolidAngleUnit {
    constructor();
  }

  export declare class Handle_StepBasic_SolidAngleUnit_2 extends Handle_StepBasic_SolidAngleUnit {
    constructor(thePtr: StepBasic_SolidAngleUnit);
  }

  export declare class Handle_StepBasic_SolidAngleUnit_3 extends Handle_StepBasic_SolidAngleUnit {
    constructor(theHandle: Handle_StepBasic_SolidAngleUnit);
  }

  export declare class Handle_StepBasic_SolidAngleUnit_4 extends Handle_StepBasic_SolidAngleUnit {
    constructor(theHandle: Handle_StepBasic_SolidAngleUnit);
  }

export declare class Handle_StepBasic_ThermodynamicTemperatureUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_ThermodynamicTemperatureUnit): void;
  get(): StepBasic_ThermodynamicTemperatureUnit;
}

  export declare class Handle_StepBasic_ThermodynamicTemperatureUnit_1 extends Handle_StepBasic_ThermodynamicTemperatureUnit {
    constructor();
  }

  export declare class Handle_StepBasic_ThermodynamicTemperatureUnit_2 extends Handle_StepBasic_ThermodynamicTemperatureUnit {
    constructor(thePtr: StepBasic_ThermodynamicTemperatureUnit);
  }

  export declare class Handle_StepBasic_ThermodynamicTemperatureUnit_3 extends Handle_StepBasic_ThermodynamicTemperatureUnit {
    constructor(theHandle: Handle_StepBasic_ThermodynamicTemperatureUnit);
  }

  export declare class Handle_StepBasic_ThermodynamicTemperatureUnit_4 extends Handle_StepBasic_ThermodynamicTemperatureUnit {
    constructor(theHandle: Handle_StepBasic_ThermodynamicTemperatureUnit);
  }

export declare class Handle_StepBasic_TimeMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_TimeMeasureWithUnit): void;
  get(): StepBasic_TimeMeasureWithUnit;
}

  export declare class Handle_StepBasic_TimeMeasureWithUnit_1 extends Handle_StepBasic_TimeMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepBasic_TimeMeasureWithUnit_2 extends Handle_StepBasic_TimeMeasureWithUnit {
    constructor(thePtr: StepBasic_TimeMeasureWithUnit);
  }

  export declare class Handle_StepBasic_TimeMeasureWithUnit_3 extends Handle_StepBasic_TimeMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_TimeMeasureWithUnit);
  }

  export declare class Handle_StepBasic_TimeMeasureWithUnit_4 extends Handle_StepBasic_TimeMeasureWithUnit {
    constructor(theHandle: Handle_StepBasic_TimeMeasureWithUnit);
  }

export declare class Handle_StepBasic_TimeUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_TimeUnit): void;
  get(): StepBasic_TimeUnit;
}

  export declare class Handle_StepBasic_TimeUnit_1 extends Handle_StepBasic_TimeUnit {
    constructor();
  }

  export declare class Handle_StepBasic_TimeUnit_2 extends Handle_StepBasic_TimeUnit {
    constructor(thePtr: StepBasic_TimeUnit);
  }

  export declare class Handle_StepBasic_TimeUnit_3 extends Handle_StepBasic_TimeUnit {
    constructor(theHandle: Handle_StepBasic_TimeUnit);
  }

  export declare class Handle_StepBasic_TimeUnit_4 extends Handle_StepBasic_TimeUnit {
    constructor(theHandle: Handle_StepBasic_TimeUnit);
  }

export declare class Handle_StepBasic_VersionedActionRequest {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_VersionedActionRequest): void;
  get(): StepBasic_VersionedActionRequest;
}

  export declare class Handle_StepBasic_VersionedActionRequest_1 extends Handle_StepBasic_VersionedActionRequest {
    constructor();
  }

  export declare class Handle_StepBasic_VersionedActionRequest_2 extends Handle_StepBasic_VersionedActionRequest {
    constructor(thePtr: StepBasic_VersionedActionRequest);
  }

  export declare class Handle_StepBasic_VersionedActionRequest_3 extends Handle_StepBasic_VersionedActionRequest {
    constructor(theHandle: Handle_StepBasic_VersionedActionRequest);
  }

  export declare class Handle_StepBasic_VersionedActionRequest_4 extends Handle_StepBasic_VersionedActionRequest {
    constructor(theHandle: Handle_StepBasic_VersionedActionRequest);
  }

export declare class Handle_StepBasic_VolumeUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_VolumeUnit): void;
  get(): StepBasic_VolumeUnit;
}

  export declare class Handle_StepBasic_VolumeUnit_1 extends Handle_StepBasic_VolumeUnit {
    constructor();
  }

  export declare class Handle_StepBasic_VolumeUnit_2 extends Handle_StepBasic_VolumeUnit {
    constructor(thePtr: StepBasic_VolumeUnit);
  }

  export declare class Handle_StepBasic_VolumeUnit_3 extends Handle_StepBasic_VolumeUnit {
    constructor(theHandle: Handle_StepBasic_VolumeUnit);
  }

  export declare class Handle_StepBasic_VolumeUnit_4 extends Handle_StepBasic_VolumeUnit {
    constructor(theHandle: Handle_StepBasic_VolumeUnit);
  }

export declare class Handle_StepBasic_WeekOfYearAndDayDate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepBasic_WeekOfYearAndDayDate): void;
  get(): StepBasic_WeekOfYearAndDayDate;
}

  export declare class Handle_StepBasic_WeekOfYearAndDayDate_1 extends Handle_StepBasic_WeekOfYearAndDayDate {
    constructor();
  }

  export declare class Handle_StepBasic_WeekOfYearAndDayDate_2 extends Handle_StepBasic_WeekOfYearAndDayDate {
    constructor(thePtr: StepBasic_WeekOfYearAndDayDate);
  }

  export declare class Handle_StepBasic_WeekOfYearAndDayDate_3 extends Handle_StepBasic_WeekOfYearAndDayDate {
    constructor(theHandle: Handle_StepBasic_WeekOfYearAndDayDate);
  }

  export declare class Handle_StepBasic_WeekOfYearAndDayDate_4 extends Handle_StepBasic_WeekOfYearAndDayDate {
    constructor(theHandle: Handle_StepBasic_WeekOfYearAndDayDate);
  }

export declare class Handle_StepRepr_CompositeShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_CompositeShapeAspect): void;
  get(): StepRepr_CompositeShapeAspect;
}

  export declare class Handle_StepRepr_CompositeShapeAspect_1 extends Handle_StepRepr_CompositeShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_CompositeShapeAspect_2 extends Handle_StepRepr_CompositeShapeAspect {
    constructor(thePtr: StepRepr_CompositeShapeAspect);
  }

  export declare class Handle_StepRepr_CompositeShapeAspect_3 extends Handle_StepRepr_CompositeShapeAspect {
    constructor(theHandle: Handle_StepRepr_CompositeShapeAspect);
  }

  export declare class Handle_StepRepr_CompositeShapeAspect_4 extends Handle_StepRepr_CompositeShapeAspect {
    constructor(theHandle: Handle_StepRepr_CompositeShapeAspect);
  }

export declare class Handle_StepRepr_HArray1OfShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_HArray1OfShapeAspect): void;
  get(): StepRepr_HArray1OfShapeAspect;
}

  export declare class Handle_StepRepr_HArray1OfShapeAspect_1 extends Handle_StepRepr_HArray1OfShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_HArray1OfShapeAspect_2 extends Handle_StepRepr_HArray1OfShapeAspect {
    constructor(thePtr: StepRepr_HArray1OfShapeAspect);
  }

  export declare class Handle_StepRepr_HArray1OfShapeAspect_3 extends Handle_StepRepr_HArray1OfShapeAspect {
    constructor(theHandle: Handle_StepRepr_HArray1OfShapeAspect);
  }

  export declare class Handle_StepRepr_HArray1OfShapeAspect_4 extends Handle_StepRepr_HArray1OfShapeAspect {
    constructor(theHandle: Handle_StepRepr_HArray1OfShapeAspect);
  }

export declare class Handle_StepGeom_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Point): void;
  get(): StepGeom_Point;
}

  export declare class Handle_StepGeom_Point_1 extends Handle_StepGeom_Point {
    constructor();
  }

  export declare class Handle_StepGeom_Point_2 extends Handle_StepGeom_Point {
    constructor(thePtr: StepGeom_Point);
  }

  export declare class Handle_StepGeom_Point_3 extends Handle_StepGeom_Point {
    constructor(theHandle: Handle_StepGeom_Point);
  }

  export declare class Handle_StepGeom_Point_4 extends Handle_StepGeom_Point {
    constructor(theHandle: Handle_StepGeom_Point);
  }

export declare class Handle_StepGeom_CompositeCurveSegment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CompositeCurveSegment): void;
  get(): StepGeom_CompositeCurveSegment;
}

  export declare class Handle_StepGeom_CompositeCurveSegment_1 extends Handle_StepGeom_CompositeCurveSegment {
    constructor();
  }

  export declare class Handle_StepGeom_CompositeCurveSegment_2 extends Handle_StepGeom_CompositeCurveSegment {
    constructor(thePtr: StepGeom_CompositeCurveSegment);
  }

  export declare class Handle_StepGeom_CompositeCurveSegment_3 extends Handle_StepGeom_CompositeCurveSegment {
    constructor(theHandle: Handle_StepGeom_CompositeCurveSegment);
  }

  export declare class Handle_StepGeom_CompositeCurveSegment_4 extends Handle_StepGeom_CompositeCurveSegment {
    constructor(theHandle: Handle_StepGeom_CompositeCurveSegment);
  }

export declare class Handle_StepGeom_HArray1OfCompositeCurveSegment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray1OfCompositeCurveSegment): void;
  get(): StepGeom_HArray1OfCompositeCurveSegment;
}

  export declare class Handle_StepGeom_HArray1OfCompositeCurveSegment_1 extends Handle_StepGeom_HArray1OfCompositeCurveSegment {
    constructor();
  }

  export declare class Handle_StepGeom_HArray1OfCompositeCurveSegment_2 extends Handle_StepGeom_HArray1OfCompositeCurveSegment {
    constructor(thePtr: StepGeom_HArray1OfCompositeCurveSegment);
  }

  export declare class Handle_StepGeom_HArray1OfCompositeCurveSegment_3 extends Handle_StepGeom_HArray1OfCompositeCurveSegment {
    constructor(theHandle: Handle_StepGeom_HArray1OfCompositeCurveSegment);
  }

  export declare class Handle_StepGeom_HArray1OfCompositeCurveSegment_4 extends Handle_StepGeom_HArray1OfCompositeCurveSegment {
    constructor(theHandle: Handle_StepGeom_HArray1OfCompositeCurveSegment);
  }

export declare class Handle_StepGeom_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Curve): void;
  get(): StepGeom_Curve;
}

  export declare class Handle_StepGeom_Curve_1 extends Handle_StepGeom_Curve {
    constructor();
  }

  export declare class Handle_StepGeom_Curve_2 extends Handle_StepGeom_Curve {
    constructor(thePtr: StepGeom_Curve);
  }

  export declare class Handle_StepGeom_Curve_3 extends Handle_StepGeom_Curve {
    constructor(theHandle: Handle_StepGeom_Curve);
  }

  export declare class Handle_StepGeom_Curve_4 extends Handle_StepGeom_Curve {
    constructor(theHandle: Handle_StepGeom_Curve);
  }

export declare class Handle_StepGeom_BoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BoundedCurve): void;
  get(): StepGeom_BoundedCurve;
}

  export declare class Handle_StepGeom_BoundedCurve_1 extends Handle_StepGeom_BoundedCurve {
    constructor();
  }

  export declare class Handle_StepGeom_BoundedCurve_2 extends Handle_StepGeom_BoundedCurve {
    constructor(thePtr: StepGeom_BoundedCurve);
  }

  export declare class Handle_StepGeom_BoundedCurve_3 extends Handle_StepGeom_BoundedCurve {
    constructor(theHandle: Handle_StepGeom_BoundedCurve);
  }

  export declare class Handle_StepGeom_BoundedCurve_4 extends Handle_StepGeom_BoundedCurve {
    constructor(theHandle: Handle_StepGeom_BoundedCurve);
  }

export declare class Handle_StepGeom_CompositeCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CompositeCurve): void;
  get(): StepGeom_CompositeCurve;
}

  export declare class Handle_StepGeom_CompositeCurve_1 extends Handle_StepGeom_CompositeCurve {
    constructor();
  }

  export declare class Handle_StepGeom_CompositeCurve_2 extends Handle_StepGeom_CompositeCurve {
    constructor(thePtr: StepGeom_CompositeCurve);
  }

  export declare class Handle_StepGeom_CompositeCurve_3 extends Handle_StepGeom_CompositeCurve {
    constructor(theHandle: Handle_StepGeom_CompositeCurve);
  }

  export declare class Handle_StepGeom_CompositeCurve_4 extends Handle_StepGeom_CompositeCurve {
    constructor(theHandle: Handle_StepGeom_CompositeCurve);
  }

export declare class Handle_StepGeom_CompositeCurveOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CompositeCurveOnSurface): void;
  get(): StepGeom_CompositeCurveOnSurface;
}

  export declare class Handle_StepGeom_CompositeCurveOnSurface_1 extends Handle_StepGeom_CompositeCurveOnSurface {
    constructor();
  }

  export declare class Handle_StepGeom_CompositeCurveOnSurface_2 extends Handle_StepGeom_CompositeCurveOnSurface {
    constructor(thePtr: StepGeom_CompositeCurveOnSurface);
  }

  export declare class Handle_StepGeom_CompositeCurveOnSurface_3 extends Handle_StepGeom_CompositeCurveOnSurface {
    constructor(theHandle: Handle_StepGeom_CompositeCurveOnSurface);
  }

  export declare class Handle_StepGeom_CompositeCurveOnSurface_4 extends Handle_StepGeom_CompositeCurveOnSurface {
    constructor(theHandle: Handle_StepGeom_CompositeCurveOnSurface);
  }

export declare class Handle_StepGeom_BoundaryCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BoundaryCurve): void;
  get(): StepGeom_BoundaryCurve;
}

  export declare class Handle_StepGeom_BoundaryCurve_1 extends Handle_StepGeom_BoundaryCurve {
    constructor();
  }

  export declare class Handle_StepGeom_BoundaryCurve_2 extends Handle_StepGeom_BoundaryCurve {
    constructor(thePtr: StepGeom_BoundaryCurve);
  }

  export declare class Handle_StepGeom_BoundaryCurve_3 extends Handle_StepGeom_BoundaryCurve {
    constructor(theHandle: Handle_StepGeom_BoundaryCurve);
  }

  export declare class Handle_StepGeom_BoundaryCurve_4 extends Handle_StepGeom_BoundaryCurve {
    constructor(theHandle: Handle_StepGeom_BoundaryCurve);
  }

export declare class Handle_StepGeom_CartesianPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CartesianPoint): void;
  get(): StepGeom_CartesianPoint;
}

  export declare class Handle_StepGeom_CartesianPoint_1 extends Handle_StepGeom_CartesianPoint {
    constructor();
  }

  export declare class Handle_StepGeom_CartesianPoint_2 extends Handle_StepGeom_CartesianPoint {
    constructor(thePtr: StepGeom_CartesianPoint);
  }

  export declare class Handle_StepGeom_CartesianPoint_3 extends Handle_StepGeom_CartesianPoint {
    constructor(theHandle: Handle_StepGeom_CartesianPoint);
  }

  export declare class Handle_StepGeom_CartesianPoint_4 extends Handle_StepGeom_CartesianPoint {
    constructor(theHandle: Handle_StepGeom_CartesianPoint);
  }

export declare class StepGeom_Array1OfPcurveOrSurface {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepGeom_PcurveOrSurface): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepGeom_Array1OfPcurveOrSurface): StepGeom_Array1OfPcurveOrSurface;
  Move(theOther: StepGeom_Array1OfPcurveOrSurface): StepGeom_Array1OfPcurveOrSurface;
  First(): StepGeom_PcurveOrSurface;
  ChangeFirst(): StepGeom_PcurveOrSurface;
  Last(): StepGeom_PcurveOrSurface;
  ChangeLast(): StepGeom_PcurveOrSurface;
  Value(theIndex: Standard_Integer): StepGeom_PcurveOrSurface;
  ChangeValue(theIndex: Standard_Integer): StepGeom_PcurveOrSurface;
  SetValue(theIndex: Standard_Integer, theItem: StepGeom_PcurveOrSurface): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepGeom_Array1OfPcurveOrSurface_1 extends StepGeom_Array1OfPcurveOrSurface {
    constructor();
  }

  export declare class StepGeom_Array1OfPcurveOrSurface_2 extends StepGeom_Array1OfPcurveOrSurface {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepGeom_Array1OfPcurveOrSurface_3 extends StepGeom_Array1OfPcurveOrSurface {
    constructor(theOther: StepGeom_Array1OfPcurveOrSurface);
  }

  export declare class StepGeom_Array1OfPcurveOrSurface_4 extends StepGeom_Array1OfPcurveOrSurface {
    constructor(theOther: StepGeom_Array1OfPcurveOrSurface);
  }

  export declare class StepGeom_Array1OfPcurveOrSurface_5 extends StepGeom_Array1OfPcurveOrSurface {
    constructor(theBegin: StepGeom_PcurveOrSurface, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepGeom_Array1OfSurfaceBoundary {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepGeom_SurfaceBoundary): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepGeom_Array1OfSurfaceBoundary): StepGeom_Array1OfSurfaceBoundary;
  Move(theOther: StepGeom_Array1OfSurfaceBoundary): StepGeom_Array1OfSurfaceBoundary;
  First(): StepGeom_SurfaceBoundary;
  ChangeFirst(): StepGeom_SurfaceBoundary;
  Last(): StepGeom_SurfaceBoundary;
  ChangeLast(): StepGeom_SurfaceBoundary;
  Value(theIndex: Standard_Integer): StepGeom_SurfaceBoundary;
  ChangeValue(theIndex: Standard_Integer): StepGeom_SurfaceBoundary;
  SetValue(theIndex: Standard_Integer, theItem: StepGeom_SurfaceBoundary): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepGeom_Array1OfSurfaceBoundary_1 extends StepGeom_Array1OfSurfaceBoundary {
    constructor();
  }

  export declare class StepGeom_Array1OfSurfaceBoundary_2 extends StepGeom_Array1OfSurfaceBoundary {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepGeom_Array1OfSurfaceBoundary_3 extends StepGeom_Array1OfSurfaceBoundary {
    constructor(theOther: StepGeom_Array1OfSurfaceBoundary);
  }

  export declare class StepGeom_Array1OfSurfaceBoundary_4 extends StepGeom_Array1OfSurfaceBoundary {
    constructor(theOther: StepGeom_Array1OfSurfaceBoundary);
  }

  export declare class StepGeom_Array1OfSurfaceBoundary_5 extends StepGeom_Array1OfSurfaceBoundary {
    constructor(theBegin: StepGeom_SurfaceBoundary, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepGeom_Array1OfTrimmingSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepGeom_TrimmingSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepGeom_Array1OfTrimmingSelect): StepGeom_Array1OfTrimmingSelect;
  Move(theOther: StepGeom_Array1OfTrimmingSelect): StepGeom_Array1OfTrimmingSelect;
  First(): StepGeom_TrimmingSelect;
  ChangeFirst(): StepGeom_TrimmingSelect;
  Last(): StepGeom_TrimmingSelect;
  ChangeLast(): StepGeom_TrimmingSelect;
  Value(theIndex: Standard_Integer): StepGeom_TrimmingSelect;
  ChangeValue(theIndex: Standard_Integer): StepGeom_TrimmingSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepGeom_TrimmingSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepGeom_Array1OfTrimmingSelect_1 extends StepGeom_Array1OfTrimmingSelect {
    constructor();
  }

  export declare class StepGeom_Array1OfTrimmingSelect_2 extends StepGeom_Array1OfTrimmingSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepGeom_Array1OfTrimmingSelect_3 extends StepGeom_Array1OfTrimmingSelect {
    constructor(theOther: StepGeom_Array1OfTrimmingSelect);
  }

  export declare class StepGeom_Array1OfTrimmingSelect_4 extends StepGeom_Array1OfTrimmingSelect {
    constructor(theOther: StepGeom_Array1OfTrimmingSelect);
  }

  export declare class StepGeom_Array1OfTrimmingSelect_5 extends StepGeom_Array1OfTrimmingSelect {
    constructor(theBegin: StepGeom_TrimmingSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepGeom_SurfacePatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SurfacePatch): void;
  get(): StepGeom_SurfacePatch;
}

  export declare class Handle_StepGeom_SurfacePatch_1 extends Handle_StepGeom_SurfacePatch {
    constructor();
  }

  export declare class Handle_StepGeom_SurfacePatch_2 extends Handle_StepGeom_SurfacePatch {
    constructor(thePtr: StepGeom_SurfacePatch);
  }

  export declare class Handle_StepGeom_SurfacePatch_3 extends Handle_StepGeom_SurfacePatch {
    constructor(theHandle: Handle_StepGeom_SurfacePatch);
  }

  export declare class Handle_StepGeom_SurfacePatch_4 extends Handle_StepGeom_SurfacePatch {
    constructor(theHandle: Handle_StepGeom_SurfacePatch);
  }

export declare class Handle_StepGeom_Axis1Placement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Axis1Placement): void;
  get(): StepGeom_Axis1Placement;
}

  export declare class Handle_StepGeom_Axis1Placement_1 extends Handle_StepGeom_Axis1Placement {
    constructor();
  }

  export declare class Handle_StepGeom_Axis1Placement_2 extends Handle_StepGeom_Axis1Placement {
    constructor(thePtr: StepGeom_Axis1Placement);
  }

  export declare class Handle_StepGeom_Axis1Placement_3 extends Handle_StepGeom_Axis1Placement {
    constructor(theHandle: Handle_StepGeom_Axis1Placement);
  }

  export declare class Handle_StepGeom_Axis1Placement_4 extends Handle_StepGeom_Axis1Placement {
    constructor(theHandle: Handle_StepGeom_Axis1Placement);
  }

export declare class Handle_StepGeom_Axis2Placement2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Axis2Placement2d): void;
  get(): StepGeom_Axis2Placement2d;
}

  export declare class Handle_StepGeom_Axis2Placement2d_1 extends Handle_StepGeom_Axis2Placement2d {
    constructor();
  }

  export declare class Handle_StepGeom_Axis2Placement2d_2 extends Handle_StepGeom_Axis2Placement2d {
    constructor(thePtr: StepGeom_Axis2Placement2d);
  }

  export declare class Handle_StepGeom_Axis2Placement2d_3 extends Handle_StepGeom_Axis2Placement2d {
    constructor(theHandle: Handle_StepGeom_Axis2Placement2d);
  }

  export declare class Handle_StepGeom_Axis2Placement2d_4 extends Handle_StepGeom_Axis2Placement2d {
    constructor(theHandle: Handle_StepGeom_Axis2Placement2d);
  }

export declare class Handle_StepGeom_HArray1OfCartesianPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray1OfCartesianPoint): void;
  get(): StepGeom_HArray1OfCartesianPoint;
}

  export declare class Handle_StepGeom_HArray1OfCartesianPoint_1 extends Handle_StepGeom_HArray1OfCartesianPoint {
    constructor();
  }

  export declare class Handle_StepGeom_HArray1OfCartesianPoint_2 extends Handle_StepGeom_HArray1OfCartesianPoint {
    constructor(thePtr: StepGeom_HArray1OfCartesianPoint);
  }

  export declare class Handle_StepGeom_HArray1OfCartesianPoint_3 extends Handle_StepGeom_HArray1OfCartesianPoint {
    constructor(theHandle: Handle_StepGeom_HArray1OfCartesianPoint);
  }

  export declare class Handle_StepGeom_HArray1OfCartesianPoint_4 extends Handle_StepGeom_HArray1OfCartesianPoint {
    constructor(theHandle: Handle_StepGeom_HArray1OfCartesianPoint);
  }

export declare class Handle_StepGeom_BSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BSplineCurve): void;
  get(): StepGeom_BSplineCurve;
}

  export declare class Handle_StepGeom_BSplineCurve_1 extends Handle_StepGeom_BSplineCurve {
    constructor();
  }

  export declare class Handle_StepGeom_BSplineCurve_2 extends Handle_StepGeom_BSplineCurve {
    constructor(thePtr: StepGeom_BSplineCurve);
  }

  export declare class Handle_StepGeom_BSplineCurve_3 extends Handle_StepGeom_BSplineCurve {
    constructor(theHandle: Handle_StepGeom_BSplineCurve);
  }

  export declare class Handle_StepGeom_BSplineCurve_4 extends Handle_StepGeom_BSplineCurve {
    constructor(theHandle: Handle_StepGeom_BSplineCurve);
  }

export declare class Handle_StepGeom_BSplineCurveWithKnots {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BSplineCurveWithKnots): void;
  get(): StepGeom_BSplineCurveWithKnots;
}

  export declare class Handle_StepGeom_BSplineCurveWithKnots_1 extends Handle_StepGeom_BSplineCurveWithKnots {
    constructor();
  }

  export declare class Handle_StepGeom_BSplineCurveWithKnots_2 extends Handle_StepGeom_BSplineCurveWithKnots {
    constructor(thePtr: StepGeom_BSplineCurveWithKnots);
  }

  export declare class Handle_StepGeom_BSplineCurveWithKnots_3 extends Handle_StepGeom_BSplineCurveWithKnots {
    constructor(theHandle: Handle_StepGeom_BSplineCurveWithKnots);
  }

  export declare class Handle_StepGeom_BSplineCurveWithKnots_4 extends Handle_StepGeom_BSplineCurveWithKnots {
    constructor(theHandle: Handle_StepGeom_BSplineCurveWithKnots);
  }

export declare class Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve): void;
  get(): StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve;
}

  export declare class Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_1 extends Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve {
    constructor();
  }

  export declare class Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_2 extends Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve {
    constructor(thePtr: StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_3 extends Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_4 extends Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve);
  }

export declare class Handle_StepGeom_HArray2OfCartesianPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray2OfCartesianPoint): void;
  get(): StepGeom_HArray2OfCartesianPoint;
}

  export declare class Handle_StepGeom_HArray2OfCartesianPoint_1 extends Handle_StepGeom_HArray2OfCartesianPoint {
    constructor();
  }

  export declare class Handle_StepGeom_HArray2OfCartesianPoint_2 extends Handle_StepGeom_HArray2OfCartesianPoint {
    constructor(thePtr: StepGeom_HArray2OfCartesianPoint);
  }

  export declare class Handle_StepGeom_HArray2OfCartesianPoint_3 extends Handle_StepGeom_HArray2OfCartesianPoint {
    constructor(theHandle: Handle_StepGeom_HArray2OfCartesianPoint);
  }

  export declare class Handle_StepGeom_HArray2OfCartesianPoint_4 extends Handle_StepGeom_HArray2OfCartesianPoint {
    constructor(theHandle: Handle_StepGeom_HArray2OfCartesianPoint);
  }

export declare class Handle_StepGeom_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Surface): void;
  get(): StepGeom_Surface;
}

  export declare class Handle_StepGeom_Surface_1 extends Handle_StepGeom_Surface {
    constructor();
  }

  export declare class Handle_StepGeom_Surface_2 extends Handle_StepGeom_Surface {
    constructor(thePtr: StepGeom_Surface);
  }

  export declare class Handle_StepGeom_Surface_3 extends Handle_StepGeom_Surface {
    constructor(theHandle: Handle_StepGeom_Surface);
  }

  export declare class Handle_StepGeom_Surface_4 extends Handle_StepGeom_Surface {
    constructor(theHandle: Handle_StepGeom_Surface);
  }

export declare class Handle_StepGeom_BoundedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BoundedSurface): void;
  get(): StepGeom_BoundedSurface;
}

  export declare class Handle_StepGeom_BoundedSurface_1 extends Handle_StepGeom_BoundedSurface {
    constructor();
  }

  export declare class Handle_StepGeom_BoundedSurface_2 extends Handle_StepGeom_BoundedSurface {
    constructor(thePtr: StepGeom_BoundedSurface);
  }

  export declare class Handle_StepGeom_BoundedSurface_3 extends Handle_StepGeom_BoundedSurface {
    constructor(theHandle: Handle_StepGeom_BoundedSurface);
  }

  export declare class Handle_StepGeom_BoundedSurface_4 extends Handle_StepGeom_BoundedSurface {
    constructor(theHandle: Handle_StepGeom_BoundedSurface);
  }

export declare class Handle_StepGeom_BSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BSplineSurface): void;
  get(): StepGeom_BSplineSurface;
}

  export declare class Handle_StepGeom_BSplineSurface_1 extends Handle_StepGeom_BSplineSurface {
    constructor();
  }

  export declare class Handle_StepGeom_BSplineSurface_2 extends Handle_StepGeom_BSplineSurface {
    constructor(thePtr: StepGeom_BSplineSurface);
  }

  export declare class Handle_StepGeom_BSplineSurface_3 extends Handle_StepGeom_BSplineSurface {
    constructor(theHandle: Handle_StepGeom_BSplineSurface);
  }

  export declare class Handle_StepGeom_BSplineSurface_4 extends Handle_StepGeom_BSplineSurface {
    constructor(theHandle: Handle_StepGeom_BSplineSurface);
  }

export declare class Handle_StepGeom_BSplineSurfaceWithKnots {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BSplineSurfaceWithKnots): void;
  get(): StepGeom_BSplineSurfaceWithKnots;
}

  export declare class Handle_StepGeom_BSplineSurfaceWithKnots_1 extends Handle_StepGeom_BSplineSurfaceWithKnots {
    constructor();
  }

  export declare class Handle_StepGeom_BSplineSurfaceWithKnots_2 extends Handle_StepGeom_BSplineSurfaceWithKnots {
    constructor(thePtr: StepGeom_BSplineSurfaceWithKnots);
  }

  export declare class Handle_StepGeom_BSplineSurfaceWithKnots_3 extends Handle_StepGeom_BSplineSurfaceWithKnots {
    constructor(theHandle: Handle_StepGeom_BSplineSurfaceWithKnots);
  }

  export declare class Handle_StepGeom_BSplineSurfaceWithKnots_4 extends Handle_StepGeom_BSplineSurfaceWithKnots {
    constructor(theHandle: Handle_StepGeom_BSplineSurfaceWithKnots);
  }

export declare class Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface): void;
  get(): StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface;
}

  export declare class Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_1 extends Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface {
    constructor();
  }

  export declare class Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_2 extends Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface {
    constructor(thePtr: StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_3 extends Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_4 extends Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface);
  }

export declare class Handle_StepGeom_BezierCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BezierCurve): void;
  get(): StepGeom_BezierCurve;
}

  export declare class Handle_StepGeom_BezierCurve_1 extends Handle_StepGeom_BezierCurve {
    constructor();
  }

  export declare class Handle_StepGeom_BezierCurve_2 extends Handle_StepGeom_BezierCurve {
    constructor(thePtr: StepGeom_BezierCurve);
  }

  export declare class Handle_StepGeom_BezierCurve_3 extends Handle_StepGeom_BezierCurve {
    constructor(theHandle: Handle_StepGeom_BezierCurve);
  }

  export declare class Handle_StepGeom_BezierCurve_4 extends Handle_StepGeom_BezierCurve {
    constructor(theHandle: Handle_StepGeom_BezierCurve);
  }

export declare class Handle_StepGeom_BezierCurveAndRationalBSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BezierCurveAndRationalBSplineCurve): void;
  get(): StepGeom_BezierCurveAndRationalBSplineCurve;
}

  export declare class Handle_StepGeom_BezierCurveAndRationalBSplineCurve_1 extends Handle_StepGeom_BezierCurveAndRationalBSplineCurve {
    constructor();
  }

  export declare class Handle_StepGeom_BezierCurveAndRationalBSplineCurve_2 extends Handle_StepGeom_BezierCurveAndRationalBSplineCurve {
    constructor(thePtr: StepGeom_BezierCurveAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_BezierCurveAndRationalBSplineCurve_3 extends Handle_StepGeom_BezierCurveAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_BezierCurveAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_BezierCurveAndRationalBSplineCurve_4 extends Handle_StepGeom_BezierCurveAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_BezierCurveAndRationalBSplineCurve);
  }

export declare class Handle_StepGeom_BezierSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BezierSurface): void;
  get(): StepGeom_BezierSurface;
}

  export declare class Handle_StepGeom_BezierSurface_1 extends Handle_StepGeom_BezierSurface {
    constructor();
  }

  export declare class Handle_StepGeom_BezierSurface_2 extends Handle_StepGeom_BezierSurface {
    constructor(thePtr: StepGeom_BezierSurface);
  }

  export declare class Handle_StepGeom_BezierSurface_3 extends Handle_StepGeom_BezierSurface {
    constructor(theHandle: Handle_StepGeom_BezierSurface);
  }

  export declare class Handle_StepGeom_BezierSurface_4 extends Handle_StepGeom_BezierSurface {
    constructor(theHandle: Handle_StepGeom_BezierSurface);
  }

export declare class Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_BezierSurfaceAndRationalBSplineSurface): void;
  get(): StepGeom_BezierSurfaceAndRationalBSplineSurface;
}

  export declare class Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_1 extends Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface {
    constructor();
  }

  export declare class Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_2 extends Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface {
    constructor(thePtr: StepGeom_BezierSurfaceAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_3 extends Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_4 extends Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface);
  }

export declare class Handle_StepGeom_CartesianTransformationOperator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CartesianTransformationOperator): void;
  get(): StepGeom_CartesianTransformationOperator;
}

  export declare class Handle_StepGeom_CartesianTransformationOperator_1 extends Handle_StepGeom_CartesianTransformationOperator {
    constructor();
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator_2 extends Handle_StepGeom_CartesianTransformationOperator {
    constructor(thePtr: StepGeom_CartesianTransformationOperator);
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator_3 extends Handle_StepGeom_CartesianTransformationOperator {
    constructor(theHandle: Handle_StepGeom_CartesianTransformationOperator);
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator_4 extends Handle_StepGeom_CartesianTransformationOperator {
    constructor(theHandle: Handle_StepGeom_CartesianTransformationOperator);
  }

export declare class Handle_StepGeom_CartesianTransformationOperator2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CartesianTransformationOperator2d): void;
  get(): StepGeom_CartesianTransformationOperator2d;
}

  export declare class Handle_StepGeom_CartesianTransformationOperator2d_1 extends Handle_StepGeom_CartesianTransformationOperator2d {
    constructor();
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator2d_2 extends Handle_StepGeom_CartesianTransformationOperator2d {
    constructor(thePtr: StepGeom_CartesianTransformationOperator2d);
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator2d_3 extends Handle_StepGeom_CartesianTransformationOperator2d {
    constructor(theHandle: Handle_StepGeom_CartesianTransformationOperator2d);
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator2d_4 extends Handle_StepGeom_CartesianTransformationOperator2d {
    constructor(theHandle: Handle_StepGeom_CartesianTransformationOperator2d);
  }

export declare class Handle_StepGeom_CartesianTransformationOperator3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CartesianTransformationOperator3d): void;
  get(): StepGeom_CartesianTransformationOperator3d;
}

  export declare class Handle_StepGeom_CartesianTransformationOperator3d_1 extends Handle_StepGeom_CartesianTransformationOperator3d {
    constructor();
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator3d_2 extends Handle_StepGeom_CartesianTransformationOperator3d {
    constructor(thePtr: StepGeom_CartesianTransformationOperator3d);
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator3d_3 extends Handle_StepGeom_CartesianTransformationOperator3d {
    constructor(theHandle: Handle_StepGeom_CartesianTransformationOperator3d);
  }

  export declare class Handle_StepGeom_CartesianTransformationOperator3d_4 extends Handle_StepGeom_CartesianTransformationOperator3d {
    constructor(theHandle: Handle_StepGeom_CartesianTransformationOperator3d);
  }

export declare class Handle_StepGeom_Conic {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Conic): void;
  get(): StepGeom_Conic;
}

  export declare class Handle_StepGeom_Conic_1 extends Handle_StepGeom_Conic {
    constructor();
  }

  export declare class Handle_StepGeom_Conic_2 extends Handle_StepGeom_Conic {
    constructor(thePtr: StepGeom_Conic);
  }

  export declare class Handle_StepGeom_Conic_3 extends Handle_StepGeom_Conic {
    constructor(theHandle: Handle_StepGeom_Conic);
  }

  export declare class Handle_StepGeom_Conic_4 extends Handle_StepGeom_Conic {
    constructor(theHandle: Handle_StepGeom_Conic);
  }

export declare class Handle_StepGeom_Circle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Circle): void;
  get(): StepGeom_Circle;
}

  export declare class Handle_StepGeom_Circle_1 extends Handle_StepGeom_Circle {
    constructor();
  }

  export declare class Handle_StepGeom_Circle_2 extends Handle_StepGeom_Circle {
    constructor(thePtr: StepGeom_Circle);
  }

  export declare class Handle_StepGeom_Circle_3 extends Handle_StepGeom_Circle {
    constructor(theHandle: Handle_StepGeom_Circle);
  }

  export declare class Handle_StepGeom_Circle_4 extends Handle_StepGeom_Circle {
    constructor(theHandle: Handle_StepGeom_Circle);
  }

export declare class Handle_StepGeom_ElementarySurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_ElementarySurface): void;
  get(): StepGeom_ElementarySurface;
}

  export declare class Handle_StepGeom_ElementarySurface_1 extends Handle_StepGeom_ElementarySurface {
    constructor();
  }

  export declare class Handle_StepGeom_ElementarySurface_2 extends Handle_StepGeom_ElementarySurface {
    constructor(thePtr: StepGeom_ElementarySurface);
  }

  export declare class Handle_StepGeom_ElementarySurface_3 extends Handle_StepGeom_ElementarySurface {
    constructor(theHandle: Handle_StepGeom_ElementarySurface);
  }

  export declare class Handle_StepGeom_ElementarySurface_4 extends Handle_StepGeom_ElementarySurface {
    constructor(theHandle: Handle_StepGeom_ElementarySurface);
  }

export declare class Handle_StepGeom_ConicalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_ConicalSurface): void;
  get(): StepGeom_ConicalSurface;
}

  export declare class Handle_StepGeom_ConicalSurface_1 extends Handle_StepGeom_ConicalSurface {
    constructor();
  }

  export declare class Handle_StepGeom_ConicalSurface_2 extends Handle_StepGeom_ConicalSurface {
    constructor(thePtr: StepGeom_ConicalSurface);
  }

  export declare class Handle_StepGeom_ConicalSurface_3 extends Handle_StepGeom_ConicalSurface {
    constructor(theHandle: Handle_StepGeom_ConicalSurface);
  }

  export declare class Handle_StepGeom_ConicalSurface_4 extends Handle_StepGeom_ConicalSurface {
    constructor(theHandle: Handle_StepGeom_ConicalSurface);
  }

export declare class Handle_StepGeom_HArray1OfSurfaceBoundary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray1OfSurfaceBoundary): void;
  get(): StepGeom_HArray1OfSurfaceBoundary;
}

  export declare class Handle_StepGeom_HArray1OfSurfaceBoundary_1 extends Handle_StepGeom_HArray1OfSurfaceBoundary {
    constructor();
  }

  export declare class Handle_StepGeom_HArray1OfSurfaceBoundary_2 extends Handle_StepGeom_HArray1OfSurfaceBoundary {
    constructor(thePtr: StepGeom_HArray1OfSurfaceBoundary);
  }

  export declare class Handle_StepGeom_HArray1OfSurfaceBoundary_3 extends Handle_StepGeom_HArray1OfSurfaceBoundary {
    constructor(theHandle: Handle_StepGeom_HArray1OfSurfaceBoundary);
  }

  export declare class Handle_StepGeom_HArray1OfSurfaceBoundary_4 extends Handle_StepGeom_HArray1OfSurfaceBoundary {
    constructor(theHandle: Handle_StepGeom_HArray1OfSurfaceBoundary);
  }

export declare class Handle_StepGeom_CurveBoundedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CurveBoundedSurface): void;
  get(): StepGeom_CurveBoundedSurface;
}

  export declare class Handle_StepGeom_CurveBoundedSurface_1 extends Handle_StepGeom_CurveBoundedSurface {
    constructor();
  }

  export declare class Handle_StepGeom_CurveBoundedSurface_2 extends Handle_StepGeom_CurveBoundedSurface {
    constructor(thePtr: StepGeom_CurveBoundedSurface);
  }

  export declare class Handle_StepGeom_CurveBoundedSurface_3 extends Handle_StepGeom_CurveBoundedSurface {
    constructor(theHandle: Handle_StepGeom_CurveBoundedSurface);
  }

  export declare class Handle_StepGeom_CurveBoundedSurface_4 extends Handle_StepGeom_CurveBoundedSurface {
    constructor(theHandle: Handle_StepGeom_CurveBoundedSurface);
  }

export declare class Handle_StepGeom_CurveReplica {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CurveReplica): void;
  get(): StepGeom_CurveReplica;
}

  export declare class Handle_StepGeom_CurveReplica_1 extends Handle_StepGeom_CurveReplica {
    constructor();
  }

  export declare class Handle_StepGeom_CurveReplica_2 extends Handle_StepGeom_CurveReplica {
    constructor(thePtr: StepGeom_CurveReplica);
  }

  export declare class Handle_StepGeom_CurveReplica_3 extends Handle_StepGeom_CurveReplica {
    constructor(theHandle: Handle_StepGeom_CurveReplica);
  }

  export declare class Handle_StepGeom_CurveReplica_4 extends Handle_StepGeom_CurveReplica {
    constructor(theHandle: Handle_StepGeom_CurveReplica);
  }

export declare class Handle_StepGeom_CylindricalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_CylindricalSurface): void;
  get(): StepGeom_CylindricalSurface;
}

  export declare class Handle_StepGeom_CylindricalSurface_1 extends Handle_StepGeom_CylindricalSurface {
    constructor();
  }

  export declare class Handle_StepGeom_CylindricalSurface_2 extends Handle_StepGeom_CylindricalSurface {
    constructor(thePtr: StepGeom_CylindricalSurface);
  }

  export declare class Handle_StepGeom_CylindricalSurface_3 extends Handle_StepGeom_CylindricalSurface {
    constructor(theHandle: Handle_StepGeom_CylindricalSurface);
  }

  export declare class Handle_StepGeom_CylindricalSurface_4 extends Handle_StepGeom_CylindricalSurface {
    constructor(theHandle: Handle_StepGeom_CylindricalSurface);
  }

export declare class Handle_StepGeom_DegeneratePcurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_DegeneratePcurve): void;
  get(): StepGeom_DegeneratePcurve;
}

  export declare class Handle_StepGeom_DegeneratePcurve_1 extends Handle_StepGeom_DegeneratePcurve {
    constructor();
  }

  export declare class Handle_StepGeom_DegeneratePcurve_2 extends Handle_StepGeom_DegeneratePcurve {
    constructor(thePtr: StepGeom_DegeneratePcurve);
  }

  export declare class Handle_StepGeom_DegeneratePcurve_3 extends Handle_StepGeom_DegeneratePcurve {
    constructor(theHandle: Handle_StepGeom_DegeneratePcurve);
  }

  export declare class Handle_StepGeom_DegeneratePcurve_4 extends Handle_StepGeom_DegeneratePcurve {
    constructor(theHandle: Handle_StepGeom_DegeneratePcurve);
  }

export declare class Handle_StepGeom_ToroidalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_ToroidalSurface): void;
  get(): StepGeom_ToroidalSurface;
}

  export declare class Handle_StepGeom_ToroidalSurface_1 extends Handle_StepGeom_ToroidalSurface {
    constructor();
  }

  export declare class Handle_StepGeom_ToroidalSurface_2 extends Handle_StepGeom_ToroidalSurface {
    constructor(thePtr: StepGeom_ToroidalSurface);
  }

  export declare class Handle_StepGeom_ToroidalSurface_3 extends Handle_StepGeom_ToroidalSurface {
    constructor(theHandle: Handle_StepGeom_ToroidalSurface);
  }

  export declare class Handle_StepGeom_ToroidalSurface_4 extends Handle_StepGeom_ToroidalSurface {
    constructor(theHandle: Handle_StepGeom_ToroidalSurface);
  }

export declare class Handle_StepGeom_DegenerateToroidalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_DegenerateToroidalSurface): void;
  get(): StepGeom_DegenerateToroidalSurface;
}

  export declare class Handle_StepGeom_DegenerateToroidalSurface_1 extends Handle_StepGeom_DegenerateToroidalSurface {
    constructor();
  }

  export declare class Handle_StepGeom_DegenerateToroidalSurface_2 extends Handle_StepGeom_DegenerateToroidalSurface {
    constructor(thePtr: StepGeom_DegenerateToroidalSurface);
  }

  export declare class Handle_StepGeom_DegenerateToroidalSurface_3 extends Handle_StepGeom_DegenerateToroidalSurface {
    constructor(theHandle: Handle_StepGeom_DegenerateToroidalSurface);
  }

  export declare class Handle_StepGeom_DegenerateToroidalSurface_4 extends Handle_StepGeom_DegenerateToroidalSurface {
    constructor(theHandle: Handle_StepGeom_DegenerateToroidalSurface);
  }

export declare class Handle_StepGeom_Direction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Direction): void;
  get(): StepGeom_Direction;
}

  export declare class Handle_StepGeom_Direction_1 extends Handle_StepGeom_Direction {
    constructor();
  }

  export declare class Handle_StepGeom_Direction_2 extends Handle_StepGeom_Direction {
    constructor(thePtr: StepGeom_Direction);
  }

  export declare class Handle_StepGeom_Direction_3 extends Handle_StepGeom_Direction {
    constructor(theHandle: Handle_StepGeom_Direction);
  }

  export declare class Handle_StepGeom_Direction_4 extends Handle_StepGeom_Direction {
    constructor(theHandle: Handle_StepGeom_Direction);
  }

export declare class Handle_StepGeom_Ellipse {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Ellipse): void;
  get(): StepGeom_Ellipse;
}

  export declare class Handle_StepGeom_Ellipse_1 extends Handle_StepGeom_Ellipse {
    constructor();
  }

  export declare class Handle_StepGeom_Ellipse_2 extends Handle_StepGeom_Ellipse {
    constructor(thePtr: StepGeom_Ellipse);
  }

  export declare class Handle_StepGeom_Ellipse_3 extends Handle_StepGeom_Ellipse {
    constructor(theHandle: Handle_StepGeom_Ellipse);
  }

  export declare class Handle_StepGeom_Ellipse_4 extends Handle_StepGeom_Ellipse {
    constructor(theHandle: Handle_StepGeom_Ellipse);
  }

export declare class Handle_StepGeom_EvaluatedDegeneratePcurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_EvaluatedDegeneratePcurve): void;
  get(): StepGeom_EvaluatedDegeneratePcurve;
}

  export declare class Handle_StepGeom_EvaluatedDegeneratePcurve_1 extends Handle_StepGeom_EvaluatedDegeneratePcurve {
    constructor();
  }

  export declare class Handle_StepGeom_EvaluatedDegeneratePcurve_2 extends Handle_StepGeom_EvaluatedDegeneratePcurve {
    constructor(thePtr: StepGeom_EvaluatedDegeneratePcurve);
  }

  export declare class Handle_StepGeom_EvaluatedDegeneratePcurve_3 extends Handle_StepGeom_EvaluatedDegeneratePcurve {
    constructor(theHandle: Handle_StepGeom_EvaluatedDegeneratePcurve);
  }

  export declare class Handle_StepGeom_EvaluatedDegeneratePcurve_4 extends Handle_StepGeom_EvaluatedDegeneratePcurve {
    constructor(theHandle: Handle_StepGeom_EvaluatedDegeneratePcurve);
  }

export declare class Handle_StepRepr_RepresentationContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_RepresentationContext): void;
  get(): StepRepr_RepresentationContext;
}

  export declare class Handle_StepRepr_RepresentationContext_1 extends Handle_StepRepr_RepresentationContext {
    constructor();
  }

  export declare class Handle_StepRepr_RepresentationContext_2 extends Handle_StepRepr_RepresentationContext {
    constructor(thePtr: StepRepr_RepresentationContext);
  }

  export declare class Handle_StepRepr_RepresentationContext_3 extends Handle_StepRepr_RepresentationContext {
    constructor(theHandle: Handle_StepRepr_RepresentationContext);
  }

  export declare class Handle_StepRepr_RepresentationContext_4 extends Handle_StepRepr_RepresentationContext {
    constructor(theHandle: Handle_StepRepr_RepresentationContext);
  }

export declare class Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx): void;
  get(): StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx;
}

  export declare class Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_1 extends Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx {
    constructor();
  }

  export declare class Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_2 extends Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx {
    constructor(thePtr: StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx);
  }

  export declare class Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_3 extends Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx {
    constructor(theHandle: Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx);
  }

  export declare class Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_4 extends Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx {
    constructor(theHandle: Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx);
  }

export declare class Handle_StepGeom_GeometricRepresentationContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_GeometricRepresentationContext): void;
  get(): StepGeom_GeometricRepresentationContext;
}

  export declare class Handle_StepGeom_GeometricRepresentationContext_1 extends Handle_StepGeom_GeometricRepresentationContext {
    constructor();
  }

  export declare class Handle_StepGeom_GeometricRepresentationContext_2 extends Handle_StepGeom_GeometricRepresentationContext {
    constructor(thePtr: StepGeom_GeometricRepresentationContext);
  }

  export declare class Handle_StepGeom_GeometricRepresentationContext_3 extends Handle_StepGeom_GeometricRepresentationContext {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationContext);
  }

  export declare class Handle_StepGeom_GeometricRepresentationContext_4 extends Handle_StepGeom_GeometricRepresentationContext {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationContext);
  }

export declare class Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext): void;
  get(): StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext;
}

  export declare class Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_1 extends Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext {
    constructor();
  }

  export declare class Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_2 extends Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext {
    constructor(thePtr: StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext);
  }

  export declare class Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_3 extends Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext);
  }

  export declare class Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_4 extends Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext);
  }

export declare class Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_GeometricRepresentationContextAndParametricRepresentationContext): void;
  get(): StepGeom_GeometricRepresentationContextAndParametricRepresentationContext;
}

  export declare class Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_1 extends Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext {
    constructor();
  }

  export declare class Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_2 extends Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext {
    constructor(thePtr: StepGeom_GeometricRepresentationContextAndParametricRepresentationContext);
  }

  export declare class Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_3 extends Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext);
  }

  export declare class Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_4 extends Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext {
    constructor(theHandle: Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext);
  }

export declare class Handle_StepGeom_HArray1OfBoundaryCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray1OfBoundaryCurve): void;
  get(): StepGeom_HArray1OfBoundaryCurve;
}

  export declare class Handle_StepGeom_HArray1OfBoundaryCurve_1 extends Handle_StepGeom_HArray1OfBoundaryCurve {
    constructor();
  }

  export declare class Handle_StepGeom_HArray1OfBoundaryCurve_2 extends Handle_StepGeom_HArray1OfBoundaryCurve {
    constructor(thePtr: StepGeom_HArray1OfBoundaryCurve);
  }

  export declare class Handle_StepGeom_HArray1OfBoundaryCurve_3 extends Handle_StepGeom_HArray1OfBoundaryCurve {
    constructor(theHandle: Handle_StepGeom_HArray1OfBoundaryCurve);
  }

  export declare class Handle_StepGeom_HArray1OfBoundaryCurve_4 extends Handle_StepGeom_HArray1OfBoundaryCurve {
    constructor(theHandle: Handle_StepGeom_HArray1OfBoundaryCurve);
  }

export declare class Handle_StepGeom_HArray1OfCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray1OfCurve): void;
  get(): StepGeom_HArray1OfCurve;
}

  export declare class Handle_StepGeom_HArray1OfCurve_1 extends Handle_StepGeom_HArray1OfCurve {
    constructor();
  }

  export declare class Handle_StepGeom_HArray1OfCurve_2 extends Handle_StepGeom_HArray1OfCurve {
    constructor(thePtr: StepGeom_HArray1OfCurve);
  }

  export declare class Handle_StepGeom_HArray1OfCurve_3 extends Handle_StepGeom_HArray1OfCurve {
    constructor(theHandle: Handle_StepGeom_HArray1OfCurve);
  }

  export declare class Handle_StepGeom_HArray1OfCurve_4 extends Handle_StepGeom_HArray1OfCurve {
    constructor(theHandle: Handle_StepGeom_HArray1OfCurve);
  }

export declare class Handle_StepGeom_HArray1OfPcurveOrSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray1OfPcurveOrSurface): void;
  get(): StepGeom_HArray1OfPcurveOrSurface;
}

  export declare class Handle_StepGeom_HArray1OfPcurveOrSurface_1 extends Handle_StepGeom_HArray1OfPcurveOrSurface {
    constructor();
  }

  export declare class Handle_StepGeom_HArray1OfPcurveOrSurface_2 extends Handle_StepGeom_HArray1OfPcurveOrSurface {
    constructor(thePtr: StepGeom_HArray1OfPcurveOrSurface);
  }

  export declare class Handle_StepGeom_HArray1OfPcurveOrSurface_3 extends Handle_StepGeom_HArray1OfPcurveOrSurface {
    constructor(theHandle: Handle_StepGeom_HArray1OfPcurveOrSurface);
  }

  export declare class Handle_StepGeom_HArray1OfPcurveOrSurface_4 extends Handle_StepGeom_HArray1OfPcurveOrSurface {
    constructor(theHandle: Handle_StepGeom_HArray1OfPcurveOrSurface);
  }

export declare class Handle_StepGeom_HArray1OfTrimmingSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray1OfTrimmingSelect): void;
  get(): StepGeom_HArray1OfTrimmingSelect;
}

  export declare class Handle_StepGeom_HArray1OfTrimmingSelect_1 extends Handle_StepGeom_HArray1OfTrimmingSelect {
    constructor();
  }

  export declare class Handle_StepGeom_HArray1OfTrimmingSelect_2 extends Handle_StepGeom_HArray1OfTrimmingSelect {
    constructor(thePtr: StepGeom_HArray1OfTrimmingSelect);
  }

  export declare class Handle_StepGeom_HArray1OfTrimmingSelect_3 extends Handle_StepGeom_HArray1OfTrimmingSelect {
    constructor(theHandle: Handle_StepGeom_HArray1OfTrimmingSelect);
  }

  export declare class Handle_StepGeom_HArray1OfTrimmingSelect_4 extends Handle_StepGeom_HArray1OfTrimmingSelect {
    constructor(theHandle: Handle_StepGeom_HArray1OfTrimmingSelect);
  }

export declare class Handle_StepGeom_HArray2OfSurfacePatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_HArray2OfSurfacePatch): void;
  get(): StepGeom_HArray2OfSurfacePatch;
}

  export declare class Handle_StepGeom_HArray2OfSurfacePatch_1 extends Handle_StepGeom_HArray2OfSurfacePatch {
    constructor();
  }

  export declare class Handle_StepGeom_HArray2OfSurfacePatch_2 extends Handle_StepGeom_HArray2OfSurfacePatch {
    constructor(thePtr: StepGeom_HArray2OfSurfacePatch);
  }

  export declare class Handle_StepGeom_HArray2OfSurfacePatch_3 extends Handle_StepGeom_HArray2OfSurfacePatch {
    constructor(theHandle: Handle_StepGeom_HArray2OfSurfacePatch);
  }

  export declare class Handle_StepGeom_HArray2OfSurfacePatch_4 extends Handle_StepGeom_HArray2OfSurfacePatch {
    constructor(theHandle: Handle_StepGeom_HArray2OfSurfacePatch);
  }

export declare class Handle_StepGeom_Hyperbola {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Hyperbola): void;
  get(): StepGeom_Hyperbola;
}

  export declare class Handle_StepGeom_Hyperbola_1 extends Handle_StepGeom_Hyperbola {
    constructor();
  }

  export declare class Handle_StepGeom_Hyperbola_2 extends Handle_StepGeom_Hyperbola {
    constructor(thePtr: StepGeom_Hyperbola);
  }

  export declare class Handle_StepGeom_Hyperbola_3 extends Handle_StepGeom_Hyperbola {
    constructor(theHandle: Handle_StepGeom_Hyperbola);
  }

  export declare class Handle_StepGeom_Hyperbola_4 extends Handle_StepGeom_Hyperbola {
    constructor(theHandle: Handle_StepGeom_Hyperbola);
  }

export declare class Handle_StepGeom_SurfaceCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SurfaceCurve): void;
  get(): StepGeom_SurfaceCurve;
}

  export declare class Handle_StepGeom_SurfaceCurve_1 extends Handle_StepGeom_SurfaceCurve {
    constructor();
  }

  export declare class Handle_StepGeom_SurfaceCurve_2 extends Handle_StepGeom_SurfaceCurve {
    constructor(thePtr: StepGeom_SurfaceCurve);
  }

  export declare class Handle_StepGeom_SurfaceCurve_3 extends Handle_StepGeom_SurfaceCurve {
    constructor(theHandle: Handle_StepGeom_SurfaceCurve);
  }

  export declare class Handle_StepGeom_SurfaceCurve_4 extends Handle_StepGeom_SurfaceCurve {
    constructor(theHandle: Handle_StepGeom_SurfaceCurve);
  }

export declare class Handle_StepGeom_IntersectionCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_IntersectionCurve): void;
  get(): StepGeom_IntersectionCurve;
}

  export declare class Handle_StepGeom_IntersectionCurve_1 extends Handle_StepGeom_IntersectionCurve {
    constructor();
  }

  export declare class Handle_StepGeom_IntersectionCurve_2 extends Handle_StepGeom_IntersectionCurve {
    constructor(thePtr: StepGeom_IntersectionCurve);
  }

  export declare class Handle_StepGeom_IntersectionCurve_3 extends Handle_StepGeom_IntersectionCurve {
    constructor(theHandle: Handle_StepGeom_IntersectionCurve);
  }

  export declare class Handle_StepGeom_IntersectionCurve_4 extends Handle_StepGeom_IntersectionCurve {
    constructor(theHandle: Handle_StepGeom_IntersectionCurve);
  }

export declare class Handle_StepGeom_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Line): void;
  get(): StepGeom_Line;
}

  export declare class Handle_StepGeom_Line_1 extends Handle_StepGeom_Line {
    constructor();
  }

  export declare class Handle_StepGeom_Line_2 extends Handle_StepGeom_Line {
    constructor(thePtr: StepGeom_Line);
  }

  export declare class Handle_StepGeom_Line_3 extends Handle_StepGeom_Line {
    constructor(theHandle: Handle_StepGeom_Line);
  }

  export declare class Handle_StepGeom_Line_4 extends Handle_StepGeom_Line {
    constructor(theHandle: Handle_StepGeom_Line);
  }

export declare class Handle_StepGeom_OffsetCurve3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_OffsetCurve3d): void;
  get(): StepGeom_OffsetCurve3d;
}

  export declare class Handle_StepGeom_OffsetCurve3d_1 extends Handle_StepGeom_OffsetCurve3d {
    constructor();
  }

  export declare class Handle_StepGeom_OffsetCurve3d_2 extends Handle_StepGeom_OffsetCurve3d {
    constructor(thePtr: StepGeom_OffsetCurve3d);
  }

  export declare class Handle_StepGeom_OffsetCurve3d_3 extends Handle_StepGeom_OffsetCurve3d {
    constructor(theHandle: Handle_StepGeom_OffsetCurve3d);
  }

  export declare class Handle_StepGeom_OffsetCurve3d_4 extends Handle_StepGeom_OffsetCurve3d {
    constructor(theHandle: Handle_StepGeom_OffsetCurve3d);
  }

export declare class Handle_StepGeom_OffsetSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_OffsetSurface): void;
  get(): StepGeom_OffsetSurface;
}

  export declare class Handle_StepGeom_OffsetSurface_1 extends Handle_StepGeom_OffsetSurface {
    constructor();
  }

  export declare class Handle_StepGeom_OffsetSurface_2 extends Handle_StepGeom_OffsetSurface {
    constructor(thePtr: StepGeom_OffsetSurface);
  }

  export declare class Handle_StepGeom_OffsetSurface_3 extends Handle_StepGeom_OffsetSurface {
    constructor(theHandle: Handle_StepGeom_OffsetSurface);
  }

  export declare class Handle_StepGeom_OffsetSurface_4 extends Handle_StepGeom_OffsetSurface {
    constructor(theHandle: Handle_StepGeom_OffsetSurface);
  }

export declare class Handle_StepGeom_OrientedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_OrientedSurface): void;
  get(): StepGeom_OrientedSurface;
}

  export declare class Handle_StepGeom_OrientedSurface_1 extends Handle_StepGeom_OrientedSurface {
    constructor();
  }

  export declare class Handle_StepGeom_OrientedSurface_2 extends Handle_StepGeom_OrientedSurface {
    constructor(thePtr: StepGeom_OrientedSurface);
  }

  export declare class Handle_StepGeom_OrientedSurface_3 extends Handle_StepGeom_OrientedSurface {
    constructor(theHandle: Handle_StepGeom_OrientedSurface);
  }

  export declare class Handle_StepGeom_OrientedSurface_4 extends Handle_StepGeom_OrientedSurface {
    constructor(theHandle: Handle_StepGeom_OrientedSurface);
  }

export declare class Handle_StepGeom_OuterBoundaryCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_OuterBoundaryCurve): void;
  get(): StepGeom_OuterBoundaryCurve;
}

  export declare class Handle_StepGeom_OuterBoundaryCurve_1 extends Handle_StepGeom_OuterBoundaryCurve {
    constructor();
  }

  export declare class Handle_StepGeom_OuterBoundaryCurve_2 extends Handle_StepGeom_OuterBoundaryCurve {
    constructor(thePtr: StepGeom_OuterBoundaryCurve);
  }

  export declare class Handle_StepGeom_OuterBoundaryCurve_3 extends Handle_StepGeom_OuterBoundaryCurve {
    constructor(theHandle: Handle_StepGeom_OuterBoundaryCurve);
  }

  export declare class Handle_StepGeom_OuterBoundaryCurve_4 extends Handle_StepGeom_OuterBoundaryCurve {
    constructor(theHandle: Handle_StepGeom_OuterBoundaryCurve);
  }

export declare class Handle_StepGeom_Parabola {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Parabola): void;
  get(): StepGeom_Parabola;
}

  export declare class Handle_StepGeom_Parabola_1 extends Handle_StepGeom_Parabola {
    constructor();
  }

  export declare class Handle_StepGeom_Parabola_2 extends Handle_StepGeom_Parabola {
    constructor(thePtr: StepGeom_Parabola);
  }

  export declare class Handle_StepGeom_Parabola_3 extends Handle_StepGeom_Parabola {
    constructor(theHandle: Handle_StepGeom_Parabola);
  }

  export declare class Handle_StepGeom_Parabola_4 extends Handle_StepGeom_Parabola {
    constructor(theHandle: Handle_StepGeom_Parabola);
  }

export declare class Handle_StepGeom_Pcurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Pcurve): void;
  get(): StepGeom_Pcurve;
}

  export declare class Handle_StepGeom_Pcurve_1 extends Handle_StepGeom_Pcurve {
    constructor();
  }

  export declare class Handle_StepGeom_Pcurve_2 extends Handle_StepGeom_Pcurve {
    constructor(thePtr: StepGeom_Pcurve);
  }

  export declare class Handle_StepGeom_Pcurve_3 extends Handle_StepGeom_Pcurve {
    constructor(theHandle: Handle_StepGeom_Pcurve);
  }

  export declare class Handle_StepGeom_Pcurve_4 extends Handle_StepGeom_Pcurve {
    constructor(theHandle: Handle_StepGeom_Pcurve);
  }

export declare class Handle_StepGeom_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Plane): void;
  get(): StepGeom_Plane;
}

  export declare class Handle_StepGeom_Plane_1 extends Handle_StepGeom_Plane {
    constructor();
  }

  export declare class Handle_StepGeom_Plane_2 extends Handle_StepGeom_Plane {
    constructor(thePtr: StepGeom_Plane);
  }

  export declare class Handle_StepGeom_Plane_3 extends Handle_StepGeom_Plane {
    constructor(theHandle: Handle_StepGeom_Plane);
  }

  export declare class Handle_StepGeom_Plane_4 extends Handle_StepGeom_Plane {
    constructor(theHandle: Handle_StepGeom_Plane);
  }

export declare class Handle_StepGeom_PointOnCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_PointOnCurve): void;
  get(): StepGeom_PointOnCurve;
}

  export declare class Handle_StepGeom_PointOnCurve_1 extends Handle_StepGeom_PointOnCurve {
    constructor();
  }

  export declare class Handle_StepGeom_PointOnCurve_2 extends Handle_StepGeom_PointOnCurve {
    constructor(thePtr: StepGeom_PointOnCurve);
  }

  export declare class Handle_StepGeom_PointOnCurve_3 extends Handle_StepGeom_PointOnCurve {
    constructor(theHandle: Handle_StepGeom_PointOnCurve);
  }

  export declare class Handle_StepGeom_PointOnCurve_4 extends Handle_StepGeom_PointOnCurve {
    constructor(theHandle: Handle_StepGeom_PointOnCurve);
  }

export declare class Handle_StepGeom_PointOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_PointOnSurface): void;
  get(): StepGeom_PointOnSurface;
}

  export declare class Handle_StepGeom_PointOnSurface_1 extends Handle_StepGeom_PointOnSurface {
    constructor();
  }

  export declare class Handle_StepGeom_PointOnSurface_2 extends Handle_StepGeom_PointOnSurface {
    constructor(thePtr: StepGeom_PointOnSurface);
  }

  export declare class Handle_StepGeom_PointOnSurface_3 extends Handle_StepGeom_PointOnSurface {
    constructor(theHandle: Handle_StepGeom_PointOnSurface);
  }

  export declare class Handle_StepGeom_PointOnSurface_4 extends Handle_StepGeom_PointOnSurface {
    constructor(theHandle: Handle_StepGeom_PointOnSurface);
  }

export declare class Handle_StepGeom_PointReplica {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_PointReplica): void;
  get(): StepGeom_PointReplica;
}

  export declare class Handle_StepGeom_PointReplica_1 extends Handle_StepGeom_PointReplica {
    constructor();
  }

  export declare class Handle_StepGeom_PointReplica_2 extends Handle_StepGeom_PointReplica {
    constructor(thePtr: StepGeom_PointReplica);
  }

  export declare class Handle_StepGeom_PointReplica_3 extends Handle_StepGeom_PointReplica {
    constructor(theHandle: Handle_StepGeom_PointReplica);
  }

  export declare class Handle_StepGeom_PointReplica_4 extends Handle_StepGeom_PointReplica {
    constructor(theHandle: Handle_StepGeom_PointReplica);
  }

export declare class Handle_StepGeom_Polyline {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Polyline): void;
  get(): StepGeom_Polyline;
}

  export declare class Handle_StepGeom_Polyline_1 extends Handle_StepGeom_Polyline {
    constructor();
  }

  export declare class Handle_StepGeom_Polyline_2 extends Handle_StepGeom_Polyline {
    constructor(thePtr: StepGeom_Polyline);
  }

  export declare class Handle_StepGeom_Polyline_3 extends Handle_StepGeom_Polyline {
    constructor(theHandle: Handle_StepGeom_Polyline);
  }

  export declare class Handle_StepGeom_Polyline_4 extends Handle_StepGeom_Polyline {
    constructor(theHandle: Handle_StepGeom_Polyline);
  }

export declare class Handle_StepGeom_QuasiUniformCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_QuasiUniformCurve): void;
  get(): StepGeom_QuasiUniformCurve;
}

  export declare class Handle_StepGeom_QuasiUniformCurve_1 extends Handle_StepGeom_QuasiUniformCurve {
    constructor();
  }

  export declare class Handle_StepGeom_QuasiUniformCurve_2 extends Handle_StepGeom_QuasiUniformCurve {
    constructor(thePtr: StepGeom_QuasiUniformCurve);
  }

  export declare class Handle_StepGeom_QuasiUniformCurve_3 extends Handle_StepGeom_QuasiUniformCurve {
    constructor(theHandle: Handle_StepGeom_QuasiUniformCurve);
  }

  export declare class Handle_StepGeom_QuasiUniformCurve_4 extends Handle_StepGeom_QuasiUniformCurve {
    constructor(theHandle: Handle_StepGeom_QuasiUniformCurve);
  }

export declare class Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_QuasiUniformCurveAndRationalBSplineCurve): void;
  get(): StepGeom_QuasiUniformCurveAndRationalBSplineCurve;
}

  export declare class Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_1 extends Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve {
    constructor();
  }

  export declare class Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_2 extends Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve {
    constructor(thePtr: StepGeom_QuasiUniformCurveAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_3 extends Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_4 extends Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve);
  }

export declare class Handle_StepGeom_QuasiUniformSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_QuasiUniformSurface): void;
  get(): StepGeom_QuasiUniformSurface;
}

  export declare class Handle_StepGeom_QuasiUniformSurface_1 extends Handle_StepGeom_QuasiUniformSurface {
    constructor();
  }

  export declare class Handle_StepGeom_QuasiUniformSurface_2 extends Handle_StepGeom_QuasiUniformSurface {
    constructor(thePtr: StepGeom_QuasiUniformSurface);
  }

  export declare class Handle_StepGeom_QuasiUniformSurface_3 extends Handle_StepGeom_QuasiUniformSurface {
    constructor(theHandle: Handle_StepGeom_QuasiUniformSurface);
  }

  export declare class Handle_StepGeom_QuasiUniformSurface_4 extends Handle_StepGeom_QuasiUniformSurface {
    constructor(theHandle: Handle_StepGeom_QuasiUniformSurface);
  }

export declare class Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface): void;
  get(): StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface;
}

  export declare class Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_1 extends Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface {
    constructor();
  }

  export declare class Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_2 extends Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface {
    constructor(thePtr: StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_3 extends Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_4 extends Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface);
  }

export declare class Handle_StepGeom_RationalBSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_RationalBSplineCurve): void;
  get(): StepGeom_RationalBSplineCurve;
}

  export declare class Handle_StepGeom_RationalBSplineCurve_1 extends Handle_StepGeom_RationalBSplineCurve {
    constructor();
  }

  export declare class Handle_StepGeom_RationalBSplineCurve_2 extends Handle_StepGeom_RationalBSplineCurve {
    constructor(thePtr: StepGeom_RationalBSplineCurve);
  }

  export declare class Handle_StepGeom_RationalBSplineCurve_3 extends Handle_StepGeom_RationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_RationalBSplineCurve);
  }

  export declare class Handle_StepGeom_RationalBSplineCurve_4 extends Handle_StepGeom_RationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_RationalBSplineCurve);
  }

export declare class Handle_StepGeom_RationalBSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_RationalBSplineSurface): void;
  get(): StepGeom_RationalBSplineSurface;
}

  export declare class Handle_StepGeom_RationalBSplineSurface_1 extends Handle_StepGeom_RationalBSplineSurface {
    constructor();
  }

  export declare class Handle_StepGeom_RationalBSplineSurface_2 extends Handle_StepGeom_RationalBSplineSurface {
    constructor(thePtr: StepGeom_RationalBSplineSurface);
  }

  export declare class Handle_StepGeom_RationalBSplineSurface_3 extends Handle_StepGeom_RationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_RationalBSplineSurface);
  }

  export declare class Handle_StepGeom_RationalBSplineSurface_4 extends Handle_StepGeom_RationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_RationalBSplineSurface);
  }

export declare class Handle_StepGeom_RectangularCompositeSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_RectangularCompositeSurface): void;
  get(): StepGeom_RectangularCompositeSurface;
}

  export declare class Handle_StepGeom_RectangularCompositeSurface_1 extends Handle_StepGeom_RectangularCompositeSurface {
    constructor();
  }

  export declare class Handle_StepGeom_RectangularCompositeSurface_2 extends Handle_StepGeom_RectangularCompositeSurface {
    constructor(thePtr: StepGeom_RectangularCompositeSurface);
  }

  export declare class Handle_StepGeom_RectangularCompositeSurface_3 extends Handle_StepGeom_RectangularCompositeSurface {
    constructor(theHandle: Handle_StepGeom_RectangularCompositeSurface);
  }

  export declare class Handle_StepGeom_RectangularCompositeSurface_4 extends Handle_StepGeom_RectangularCompositeSurface {
    constructor(theHandle: Handle_StepGeom_RectangularCompositeSurface);
  }

export declare class Handle_StepGeom_RectangularTrimmedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_RectangularTrimmedSurface): void;
  get(): StepGeom_RectangularTrimmedSurface;
}

  export declare class Handle_StepGeom_RectangularTrimmedSurface_1 extends Handle_StepGeom_RectangularTrimmedSurface {
    constructor();
  }

  export declare class Handle_StepGeom_RectangularTrimmedSurface_2 extends Handle_StepGeom_RectangularTrimmedSurface {
    constructor(thePtr: StepGeom_RectangularTrimmedSurface);
  }

  export declare class Handle_StepGeom_RectangularTrimmedSurface_3 extends Handle_StepGeom_RectangularTrimmedSurface {
    constructor(theHandle: Handle_StepGeom_RectangularTrimmedSurface);
  }

  export declare class Handle_StepGeom_RectangularTrimmedSurface_4 extends Handle_StepGeom_RectangularTrimmedSurface {
    constructor(theHandle: Handle_StepGeom_RectangularTrimmedSurface);
  }

export declare class Handle_StepGeom_ReparametrisedCompositeCurveSegment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_ReparametrisedCompositeCurveSegment): void;
  get(): StepGeom_ReparametrisedCompositeCurveSegment;
}

  export declare class Handle_StepGeom_ReparametrisedCompositeCurveSegment_1 extends Handle_StepGeom_ReparametrisedCompositeCurveSegment {
    constructor();
  }

  export declare class Handle_StepGeom_ReparametrisedCompositeCurveSegment_2 extends Handle_StepGeom_ReparametrisedCompositeCurveSegment {
    constructor(thePtr: StepGeom_ReparametrisedCompositeCurveSegment);
  }

  export declare class Handle_StepGeom_ReparametrisedCompositeCurveSegment_3 extends Handle_StepGeom_ReparametrisedCompositeCurveSegment {
    constructor(theHandle: Handle_StepGeom_ReparametrisedCompositeCurveSegment);
  }

  export declare class Handle_StepGeom_ReparametrisedCompositeCurveSegment_4 extends Handle_StepGeom_ReparametrisedCompositeCurveSegment {
    constructor(theHandle: Handle_StepGeom_ReparametrisedCompositeCurveSegment);
  }

export declare class Handle_StepGeom_SeamCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SeamCurve): void;
  get(): StepGeom_SeamCurve;
}

  export declare class Handle_StepGeom_SeamCurve_1 extends Handle_StepGeom_SeamCurve {
    constructor();
  }

  export declare class Handle_StepGeom_SeamCurve_2 extends Handle_StepGeom_SeamCurve {
    constructor(thePtr: StepGeom_SeamCurve);
  }

  export declare class Handle_StepGeom_SeamCurve_3 extends Handle_StepGeom_SeamCurve {
    constructor(theHandle: Handle_StepGeom_SeamCurve);
  }

  export declare class Handle_StepGeom_SeamCurve_4 extends Handle_StepGeom_SeamCurve {
    constructor(theHandle: Handle_StepGeom_SeamCurve);
  }

export declare class Handle_StepGeom_SphericalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SphericalSurface): void;
  get(): StepGeom_SphericalSurface;
}

  export declare class Handle_StepGeom_SphericalSurface_1 extends Handle_StepGeom_SphericalSurface {
    constructor();
  }

  export declare class Handle_StepGeom_SphericalSurface_2 extends Handle_StepGeom_SphericalSurface {
    constructor(thePtr: StepGeom_SphericalSurface);
  }

  export declare class Handle_StepGeom_SphericalSurface_3 extends Handle_StepGeom_SphericalSurface {
    constructor(theHandle: Handle_StepGeom_SphericalSurface);
  }

  export declare class Handle_StepGeom_SphericalSurface_4 extends Handle_StepGeom_SphericalSurface {
    constructor(theHandle: Handle_StepGeom_SphericalSurface);
  }

export declare class Handle_StepGeom_SurfaceCurveAndBoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SurfaceCurveAndBoundedCurve): void;
  get(): StepGeom_SurfaceCurveAndBoundedCurve;
}

  export declare class Handle_StepGeom_SurfaceCurveAndBoundedCurve_1 extends Handle_StepGeom_SurfaceCurveAndBoundedCurve {
    constructor();
  }

  export declare class Handle_StepGeom_SurfaceCurveAndBoundedCurve_2 extends Handle_StepGeom_SurfaceCurveAndBoundedCurve {
    constructor(thePtr: StepGeom_SurfaceCurveAndBoundedCurve);
  }

  export declare class Handle_StepGeom_SurfaceCurveAndBoundedCurve_3 extends Handle_StepGeom_SurfaceCurveAndBoundedCurve {
    constructor(theHandle: Handle_StepGeom_SurfaceCurveAndBoundedCurve);
  }

  export declare class Handle_StepGeom_SurfaceCurveAndBoundedCurve_4 extends Handle_StepGeom_SurfaceCurveAndBoundedCurve {
    constructor(theHandle: Handle_StepGeom_SurfaceCurveAndBoundedCurve);
  }

export declare class Handle_StepGeom_SweptSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SweptSurface): void;
  get(): StepGeom_SweptSurface;
}

  export declare class Handle_StepGeom_SweptSurface_1 extends Handle_StepGeom_SweptSurface {
    constructor();
  }

  export declare class Handle_StepGeom_SweptSurface_2 extends Handle_StepGeom_SweptSurface {
    constructor(thePtr: StepGeom_SweptSurface);
  }

  export declare class Handle_StepGeom_SweptSurface_3 extends Handle_StepGeom_SweptSurface {
    constructor(theHandle: Handle_StepGeom_SweptSurface);
  }

  export declare class Handle_StepGeom_SweptSurface_4 extends Handle_StepGeom_SweptSurface {
    constructor(theHandle: Handle_StepGeom_SweptSurface);
  }

export declare class Handle_StepGeom_SurfaceOfLinearExtrusion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SurfaceOfLinearExtrusion): void;
  get(): StepGeom_SurfaceOfLinearExtrusion;
}

  export declare class Handle_StepGeom_SurfaceOfLinearExtrusion_1 extends Handle_StepGeom_SurfaceOfLinearExtrusion {
    constructor();
  }

  export declare class Handle_StepGeom_SurfaceOfLinearExtrusion_2 extends Handle_StepGeom_SurfaceOfLinearExtrusion {
    constructor(thePtr: StepGeom_SurfaceOfLinearExtrusion);
  }

  export declare class Handle_StepGeom_SurfaceOfLinearExtrusion_3 extends Handle_StepGeom_SurfaceOfLinearExtrusion {
    constructor(theHandle: Handle_StepGeom_SurfaceOfLinearExtrusion);
  }

  export declare class Handle_StepGeom_SurfaceOfLinearExtrusion_4 extends Handle_StepGeom_SurfaceOfLinearExtrusion {
    constructor(theHandle: Handle_StepGeom_SurfaceOfLinearExtrusion);
  }

export declare class Handle_StepGeom_SurfaceOfRevolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SurfaceOfRevolution): void;
  get(): StepGeom_SurfaceOfRevolution;
}

  export declare class Handle_StepGeom_SurfaceOfRevolution_1 extends Handle_StepGeom_SurfaceOfRevolution {
    constructor();
  }

  export declare class Handle_StepGeom_SurfaceOfRevolution_2 extends Handle_StepGeom_SurfaceOfRevolution {
    constructor(thePtr: StepGeom_SurfaceOfRevolution);
  }

  export declare class Handle_StepGeom_SurfaceOfRevolution_3 extends Handle_StepGeom_SurfaceOfRevolution {
    constructor(theHandle: Handle_StepGeom_SurfaceOfRevolution);
  }

  export declare class Handle_StepGeom_SurfaceOfRevolution_4 extends Handle_StepGeom_SurfaceOfRevolution {
    constructor(theHandle: Handle_StepGeom_SurfaceOfRevolution);
  }

export declare class Handle_StepGeom_SurfaceReplica {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_SurfaceReplica): void;
  get(): StepGeom_SurfaceReplica;
}

  export declare class Handle_StepGeom_SurfaceReplica_1 extends Handle_StepGeom_SurfaceReplica {
    constructor();
  }

  export declare class Handle_StepGeom_SurfaceReplica_2 extends Handle_StepGeom_SurfaceReplica {
    constructor(thePtr: StepGeom_SurfaceReplica);
  }

  export declare class Handle_StepGeom_SurfaceReplica_3 extends Handle_StepGeom_SurfaceReplica {
    constructor(theHandle: Handle_StepGeom_SurfaceReplica);
  }

  export declare class Handle_StepGeom_SurfaceReplica_4 extends Handle_StepGeom_SurfaceReplica {
    constructor(theHandle: Handle_StepGeom_SurfaceReplica);
  }

export declare class Handle_StepGeom_TrimmedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_TrimmedCurve): void;
  get(): StepGeom_TrimmedCurve;
}

  export declare class Handle_StepGeom_TrimmedCurve_1 extends Handle_StepGeom_TrimmedCurve {
    constructor();
  }

  export declare class Handle_StepGeom_TrimmedCurve_2 extends Handle_StepGeom_TrimmedCurve {
    constructor(thePtr: StepGeom_TrimmedCurve);
  }

  export declare class Handle_StepGeom_TrimmedCurve_3 extends Handle_StepGeom_TrimmedCurve {
    constructor(theHandle: Handle_StepGeom_TrimmedCurve);
  }

  export declare class Handle_StepGeom_TrimmedCurve_4 extends Handle_StepGeom_TrimmedCurve {
    constructor(theHandle: Handle_StepGeom_TrimmedCurve);
  }

export declare class Handle_StepGeom_TrimmingMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_TrimmingMember): void;
  get(): StepGeom_TrimmingMember;
}

  export declare class Handle_StepGeom_TrimmingMember_1 extends Handle_StepGeom_TrimmingMember {
    constructor();
  }

  export declare class Handle_StepGeom_TrimmingMember_2 extends Handle_StepGeom_TrimmingMember {
    constructor(thePtr: StepGeom_TrimmingMember);
  }

  export declare class Handle_StepGeom_TrimmingMember_3 extends Handle_StepGeom_TrimmingMember {
    constructor(theHandle: Handle_StepGeom_TrimmingMember);
  }

  export declare class Handle_StepGeom_TrimmingMember_4 extends Handle_StepGeom_TrimmingMember {
    constructor(theHandle: Handle_StepGeom_TrimmingMember);
  }

export declare class Handle_StepGeom_UniformCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_UniformCurve): void;
  get(): StepGeom_UniformCurve;
}

  export declare class Handle_StepGeom_UniformCurve_1 extends Handle_StepGeom_UniformCurve {
    constructor();
  }

  export declare class Handle_StepGeom_UniformCurve_2 extends Handle_StepGeom_UniformCurve {
    constructor(thePtr: StepGeom_UniformCurve);
  }

  export declare class Handle_StepGeom_UniformCurve_3 extends Handle_StepGeom_UniformCurve {
    constructor(theHandle: Handle_StepGeom_UniformCurve);
  }

  export declare class Handle_StepGeom_UniformCurve_4 extends Handle_StepGeom_UniformCurve {
    constructor(theHandle: Handle_StepGeom_UniformCurve);
  }

export declare class Handle_StepGeom_UniformCurveAndRationalBSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_UniformCurveAndRationalBSplineCurve): void;
  get(): StepGeom_UniformCurveAndRationalBSplineCurve;
}

  export declare class Handle_StepGeom_UniformCurveAndRationalBSplineCurve_1 extends Handle_StepGeom_UniformCurveAndRationalBSplineCurve {
    constructor();
  }

  export declare class Handle_StepGeom_UniformCurveAndRationalBSplineCurve_2 extends Handle_StepGeom_UniformCurveAndRationalBSplineCurve {
    constructor(thePtr: StepGeom_UniformCurveAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_UniformCurveAndRationalBSplineCurve_3 extends Handle_StepGeom_UniformCurveAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_UniformCurveAndRationalBSplineCurve);
  }

  export declare class Handle_StepGeom_UniformCurveAndRationalBSplineCurve_4 extends Handle_StepGeom_UniformCurveAndRationalBSplineCurve {
    constructor(theHandle: Handle_StepGeom_UniformCurveAndRationalBSplineCurve);
  }

export declare class Handle_StepGeom_UniformSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_UniformSurface): void;
  get(): StepGeom_UniformSurface;
}

  export declare class Handle_StepGeom_UniformSurface_1 extends Handle_StepGeom_UniformSurface {
    constructor();
  }

  export declare class Handle_StepGeom_UniformSurface_2 extends Handle_StepGeom_UniformSurface {
    constructor(thePtr: StepGeom_UniformSurface);
  }

  export declare class Handle_StepGeom_UniformSurface_3 extends Handle_StepGeom_UniformSurface {
    constructor(theHandle: Handle_StepGeom_UniformSurface);
  }

  export declare class Handle_StepGeom_UniformSurface_4 extends Handle_StepGeom_UniformSurface {
    constructor(theHandle: Handle_StepGeom_UniformSurface);
  }

export declare class Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_UniformSurfaceAndRationalBSplineSurface): void;
  get(): StepGeom_UniformSurfaceAndRationalBSplineSurface;
}

  export declare class Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_1 extends Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface {
    constructor();
  }

  export declare class Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_2 extends Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface {
    constructor(thePtr: StepGeom_UniformSurfaceAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_3 extends Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface);
  }

  export declare class Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_4 extends Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface {
    constructor(theHandle: Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface);
  }

export declare class Handle_StepGeom_Vector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepGeom_Vector): void;
  get(): StepGeom_Vector;
}

  export declare class Handle_StepGeom_Vector_1 extends Handle_StepGeom_Vector {
    constructor();
  }

  export declare class Handle_StepGeom_Vector_2 extends Handle_StepGeom_Vector {
    constructor(thePtr: StepGeom_Vector);
  }

  export declare class Handle_StepGeom_Vector_3 extends Handle_StepGeom_Vector {
    constructor(theHandle: Handle_StepGeom_Vector);
  }

  export declare class Handle_StepGeom_Vector_4 extends Handle_StepGeom_Vector {
    constructor(theHandle: Handle_StepGeom_Vector);
  }

export declare class Handle_StepRepr_ContinuosShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ContinuosShapeAspect): void;
  get(): StepRepr_ContinuosShapeAspect;
}

  export declare class Handle_StepRepr_ContinuosShapeAspect_1 extends Handle_StepRepr_ContinuosShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_ContinuosShapeAspect_2 extends Handle_StepRepr_ContinuosShapeAspect {
    constructor(thePtr: StepRepr_ContinuosShapeAspect);
  }

  export declare class Handle_StepRepr_ContinuosShapeAspect_3 extends Handle_StepRepr_ContinuosShapeAspect {
    constructor(theHandle: Handle_StepRepr_ContinuosShapeAspect);
  }

  export declare class Handle_StepRepr_ContinuosShapeAspect_4 extends Handle_StepRepr_ContinuosShapeAspect {
    constructor(theHandle: Handle_StepRepr_ContinuosShapeAspect);
  }

export declare class Handle_StepRepr_AllAroundShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_AllAroundShapeAspect): void;
  get(): StepRepr_AllAroundShapeAspect;
}

  export declare class Handle_StepRepr_AllAroundShapeAspect_1 extends Handle_StepRepr_AllAroundShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_AllAroundShapeAspect_2 extends Handle_StepRepr_AllAroundShapeAspect {
    constructor(thePtr: StepRepr_AllAroundShapeAspect);
  }

  export declare class Handle_StepRepr_AllAroundShapeAspect_3 extends Handle_StepRepr_AllAroundShapeAspect {
    constructor(theHandle: Handle_StepRepr_AllAroundShapeAspect);
  }

  export declare class Handle_StepRepr_AllAroundShapeAspect_4 extends Handle_StepRepr_AllAroundShapeAspect {
    constructor(theHandle: Handle_StepRepr_AllAroundShapeAspect);
  }

export declare class Handle_StepRepr_DerivedShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_DerivedShapeAspect): void;
  get(): StepRepr_DerivedShapeAspect;
}

  export declare class Handle_StepRepr_DerivedShapeAspect_1 extends Handle_StepRepr_DerivedShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_DerivedShapeAspect_2 extends Handle_StepRepr_DerivedShapeAspect {
    constructor(thePtr: StepRepr_DerivedShapeAspect);
  }

  export declare class Handle_StepRepr_DerivedShapeAspect_3 extends Handle_StepRepr_DerivedShapeAspect {
    constructor(theHandle: Handle_StepRepr_DerivedShapeAspect);
  }

  export declare class Handle_StepRepr_DerivedShapeAspect_4 extends Handle_StepRepr_DerivedShapeAspect {
    constructor(theHandle: Handle_StepRepr_DerivedShapeAspect);
  }

export declare class Handle_StepRepr_Apex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_Apex): void;
  get(): StepRepr_Apex;
}

  export declare class Handle_StepRepr_Apex_1 extends Handle_StepRepr_Apex {
    constructor();
  }

  export declare class Handle_StepRepr_Apex_2 extends Handle_StepRepr_Apex {
    constructor(thePtr: StepRepr_Apex);
  }

  export declare class Handle_StepRepr_Apex_3 extends Handle_StepRepr_Apex {
    constructor(theHandle: Handle_StepRepr_Apex);
  }

  export declare class Handle_StepRepr_Apex_4 extends Handle_StepRepr_Apex {
    constructor(theHandle: Handle_StepRepr_Apex);
  }

export declare class Handle_StepRepr_ProductDefinitionUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ProductDefinitionUsage): void;
  get(): StepRepr_ProductDefinitionUsage;
}

  export declare class Handle_StepRepr_ProductDefinitionUsage_1 extends Handle_StepRepr_ProductDefinitionUsage {
    constructor();
  }

  export declare class Handle_StepRepr_ProductDefinitionUsage_2 extends Handle_StepRepr_ProductDefinitionUsage {
    constructor(thePtr: StepRepr_ProductDefinitionUsage);
  }

  export declare class Handle_StepRepr_ProductDefinitionUsage_3 extends Handle_StepRepr_ProductDefinitionUsage {
    constructor(theHandle: Handle_StepRepr_ProductDefinitionUsage);
  }

  export declare class Handle_StepRepr_ProductDefinitionUsage_4 extends Handle_StepRepr_ProductDefinitionUsage {
    constructor(theHandle: Handle_StepRepr_ProductDefinitionUsage);
  }

export declare class Handle_StepRepr_AssemblyComponentUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_AssemblyComponentUsage): void;
  get(): StepRepr_AssemblyComponentUsage;
}

  export declare class Handle_StepRepr_AssemblyComponentUsage_1 extends Handle_StepRepr_AssemblyComponentUsage {
    constructor();
  }

  export declare class Handle_StepRepr_AssemblyComponentUsage_2 extends Handle_StepRepr_AssemblyComponentUsage {
    constructor(thePtr: StepRepr_AssemblyComponentUsage);
  }

  export declare class Handle_StepRepr_AssemblyComponentUsage_3 extends Handle_StepRepr_AssemblyComponentUsage {
    constructor(theHandle: Handle_StepRepr_AssemblyComponentUsage);
  }

  export declare class Handle_StepRepr_AssemblyComponentUsage_4 extends Handle_StepRepr_AssemblyComponentUsage {
    constructor(theHandle: Handle_StepRepr_AssemblyComponentUsage);
  }

export declare class Handle_StepRepr_AssemblyComponentUsageSubstitute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_AssemblyComponentUsageSubstitute): void;
  get(): StepRepr_AssemblyComponentUsageSubstitute;
}

  export declare class Handle_StepRepr_AssemblyComponentUsageSubstitute_1 extends Handle_StepRepr_AssemblyComponentUsageSubstitute {
    constructor();
  }

  export declare class Handle_StepRepr_AssemblyComponentUsageSubstitute_2 extends Handle_StepRepr_AssemblyComponentUsageSubstitute {
    constructor(thePtr: StepRepr_AssemblyComponentUsageSubstitute);
  }

  export declare class Handle_StepRepr_AssemblyComponentUsageSubstitute_3 extends Handle_StepRepr_AssemblyComponentUsageSubstitute {
    constructor(theHandle: Handle_StepRepr_AssemblyComponentUsageSubstitute);
  }

  export declare class Handle_StepRepr_AssemblyComponentUsageSubstitute_4 extends Handle_StepRepr_AssemblyComponentUsageSubstitute {
    constructor(theHandle: Handle_StepRepr_AssemblyComponentUsageSubstitute);
  }

export declare class Handle_StepRepr_BetweenShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_BetweenShapeAspect): void;
  get(): StepRepr_BetweenShapeAspect;
}

  export declare class Handle_StepRepr_BetweenShapeAspect_1 extends Handle_StepRepr_BetweenShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_BetweenShapeAspect_2 extends Handle_StepRepr_BetweenShapeAspect {
    constructor(thePtr: StepRepr_BetweenShapeAspect);
  }

  export declare class Handle_StepRepr_BetweenShapeAspect_3 extends Handle_StepRepr_BetweenShapeAspect {
    constructor(theHandle: Handle_StepRepr_BetweenShapeAspect);
  }

  export declare class Handle_StepRepr_BetweenShapeAspect_4 extends Handle_StepRepr_BetweenShapeAspect {
    constructor(theHandle: Handle_StepRepr_BetweenShapeAspect);
  }

export declare class Handle_StepRepr_CentreOfSymmetry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_CentreOfSymmetry): void;
  get(): StepRepr_CentreOfSymmetry;
}

  export declare class Handle_StepRepr_CentreOfSymmetry_1 extends Handle_StepRepr_CentreOfSymmetry {
    constructor();
  }

  export declare class Handle_StepRepr_CentreOfSymmetry_2 extends Handle_StepRepr_CentreOfSymmetry {
    constructor(thePtr: StepRepr_CentreOfSymmetry);
  }

  export declare class Handle_StepRepr_CentreOfSymmetry_3 extends Handle_StepRepr_CentreOfSymmetry {
    constructor(theHandle: Handle_StepRepr_CentreOfSymmetry);
  }

  export declare class Handle_StepRepr_CentreOfSymmetry_4 extends Handle_StepRepr_CentreOfSymmetry {
    constructor(theHandle: Handle_StepRepr_CentreOfSymmetry);
  }

export declare class Handle_StepRepr_CharacterizedRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_CharacterizedRepresentation): void;
  get(): StepRepr_CharacterizedRepresentation;
}

  export declare class Handle_StepRepr_CharacterizedRepresentation_1 extends Handle_StepRepr_CharacterizedRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_CharacterizedRepresentation_2 extends Handle_StepRepr_CharacterizedRepresentation {
    constructor(thePtr: StepRepr_CharacterizedRepresentation);
  }

  export declare class Handle_StepRepr_CharacterizedRepresentation_3 extends Handle_StepRepr_CharacterizedRepresentation {
    constructor(theHandle: Handle_StepRepr_CharacterizedRepresentation);
  }

  export declare class Handle_StepRepr_CharacterizedRepresentation_4 extends Handle_StepRepr_CharacterizedRepresentation {
    constructor(theHandle: Handle_StepRepr_CharacterizedRepresentation);
  }

export declare class Handle_StepRepr_CompShAspAndDatumFeatAndShAsp {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_CompShAspAndDatumFeatAndShAsp): void;
  get(): StepRepr_CompShAspAndDatumFeatAndShAsp;
}

  export declare class Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_1 extends Handle_StepRepr_CompShAspAndDatumFeatAndShAsp {
    constructor();
  }

  export declare class Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_2 extends Handle_StepRepr_CompShAspAndDatumFeatAndShAsp {
    constructor(thePtr: StepRepr_CompShAspAndDatumFeatAndShAsp);
  }

  export declare class Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_3 extends Handle_StepRepr_CompShAspAndDatumFeatAndShAsp {
    constructor(theHandle: Handle_StepRepr_CompShAspAndDatumFeatAndShAsp);
  }

  export declare class Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_4 extends Handle_StepRepr_CompShAspAndDatumFeatAndShAsp {
    constructor(theHandle: Handle_StepRepr_CompShAspAndDatumFeatAndShAsp);
  }

export declare class Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp): void;
  get(): StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp;
}

  export declare class Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_1 extends Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
    constructor();
  }

  export declare class Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_2 extends Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
    constructor(thePtr: StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp);
  }

  export declare class Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_3 extends Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
    constructor(theHandle: Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp);
  }

  export declare class Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_4 extends Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
    constructor(theHandle: Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp);
  }

export declare class Handle_StepRepr_CompositeGroupShapeAspect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_CompositeGroupShapeAspect): void;
  get(): StepRepr_CompositeGroupShapeAspect;
}

  export declare class Handle_StepRepr_CompositeGroupShapeAspect_1 extends Handle_StepRepr_CompositeGroupShapeAspect {
    constructor();
  }

  export declare class Handle_StepRepr_CompositeGroupShapeAspect_2 extends Handle_StepRepr_CompositeGroupShapeAspect {
    constructor(thePtr: StepRepr_CompositeGroupShapeAspect);
  }

  export declare class Handle_StepRepr_CompositeGroupShapeAspect_3 extends Handle_StepRepr_CompositeGroupShapeAspect {
    constructor(theHandle: Handle_StepRepr_CompositeGroupShapeAspect);
  }

  export declare class Handle_StepRepr_CompositeGroupShapeAspect_4 extends Handle_StepRepr_CompositeGroupShapeAspect {
    constructor(theHandle: Handle_StepRepr_CompositeGroupShapeAspect);
  }

export declare class Handle_StepRepr_ConfigurationDesign {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ConfigurationDesign): void;
  get(): StepRepr_ConfigurationDesign;
}

  export declare class Handle_StepRepr_ConfigurationDesign_1 extends Handle_StepRepr_ConfigurationDesign {
    constructor();
  }

  export declare class Handle_StepRepr_ConfigurationDesign_2 extends Handle_StepRepr_ConfigurationDesign {
    constructor(thePtr: StepRepr_ConfigurationDesign);
  }

  export declare class Handle_StepRepr_ConfigurationDesign_3 extends Handle_StepRepr_ConfigurationDesign {
    constructor(theHandle: Handle_StepRepr_ConfigurationDesign);
  }

  export declare class Handle_StepRepr_ConfigurationDesign_4 extends Handle_StepRepr_ConfigurationDesign {
    constructor(theHandle: Handle_StepRepr_ConfigurationDesign);
  }

export declare class Handle_StepRepr_ConfigurationEffectivity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ConfigurationEffectivity): void;
  get(): StepRepr_ConfigurationEffectivity;
}

  export declare class Handle_StepRepr_ConfigurationEffectivity_1 extends Handle_StepRepr_ConfigurationEffectivity {
    constructor();
  }

  export declare class Handle_StepRepr_ConfigurationEffectivity_2 extends Handle_StepRepr_ConfigurationEffectivity {
    constructor(thePtr: StepRepr_ConfigurationEffectivity);
  }

  export declare class Handle_StepRepr_ConfigurationEffectivity_3 extends Handle_StepRepr_ConfigurationEffectivity {
    constructor(theHandle: Handle_StepRepr_ConfigurationEffectivity);
  }

  export declare class Handle_StepRepr_ConfigurationEffectivity_4 extends Handle_StepRepr_ConfigurationEffectivity {
    constructor(theHandle: Handle_StepRepr_ConfigurationEffectivity);
  }

export declare class Handle_StepRepr_ConfigurationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ConfigurationItem): void;
  get(): StepRepr_ConfigurationItem;
}

  export declare class Handle_StepRepr_ConfigurationItem_1 extends Handle_StepRepr_ConfigurationItem {
    constructor();
  }

  export declare class Handle_StepRepr_ConfigurationItem_2 extends Handle_StepRepr_ConfigurationItem {
    constructor(thePtr: StepRepr_ConfigurationItem);
  }

  export declare class Handle_StepRepr_ConfigurationItem_3 extends Handle_StepRepr_ConfigurationItem {
    constructor(theHandle: Handle_StepRepr_ConfigurationItem);
  }

  export declare class Handle_StepRepr_ConfigurationItem_4 extends Handle_StepRepr_ConfigurationItem {
    constructor(theHandle: Handle_StepRepr_ConfigurationItem);
  }

export declare class Handle_StepRepr_ConstructiveGeometryRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ConstructiveGeometryRepresentation): void;
  get(): StepRepr_ConstructiveGeometryRepresentation;
}

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentation_1 extends Handle_StepRepr_ConstructiveGeometryRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentation_2 extends Handle_StepRepr_ConstructiveGeometryRepresentation {
    constructor(thePtr: StepRepr_ConstructiveGeometryRepresentation);
  }

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentation_3 extends Handle_StepRepr_ConstructiveGeometryRepresentation {
    constructor(theHandle: Handle_StepRepr_ConstructiveGeometryRepresentation);
  }

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentation_4 extends Handle_StepRepr_ConstructiveGeometryRepresentation {
    constructor(theHandle: Handle_StepRepr_ConstructiveGeometryRepresentation);
  }

export declare class Handle_StepRepr_RepresentationRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_RepresentationRelationship): void;
  get(): StepRepr_RepresentationRelationship;
}

  export declare class Handle_StepRepr_RepresentationRelationship_1 extends Handle_StepRepr_RepresentationRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_RepresentationRelationship_2 extends Handle_StepRepr_RepresentationRelationship {
    constructor(thePtr: StepRepr_RepresentationRelationship);
  }

  export declare class Handle_StepRepr_RepresentationRelationship_3 extends Handle_StepRepr_RepresentationRelationship {
    constructor(theHandle: Handle_StepRepr_RepresentationRelationship);
  }

  export declare class Handle_StepRepr_RepresentationRelationship_4 extends Handle_StepRepr_RepresentationRelationship {
    constructor(theHandle: Handle_StepRepr_RepresentationRelationship);
  }

export declare class Handle_StepRepr_ConstructiveGeometryRepresentationRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ConstructiveGeometryRepresentationRelationship): void;
  get(): StepRepr_ConstructiveGeometryRepresentationRelationship;
}

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_1 extends Handle_StepRepr_ConstructiveGeometryRepresentationRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_2 extends Handle_StepRepr_ConstructiveGeometryRepresentationRelationship {
    constructor(thePtr: StepRepr_ConstructiveGeometryRepresentationRelationship);
  }

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_3 extends Handle_StepRepr_ConstructiveGeometryRepresentationRelationship {
    constructor(theHandle: Handle_StepRepr_ConstructiveGeometryRepresentationRelationship);
  }

  export declare class Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_4 extends Handle_StepRepr_ConstructiveGeometryRepresentationRelationship {
    constructor(theHandle: Handle_StepRepr_ConstructiveGeometryRepresentationRelationship);
  }

export declare class Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_HArray1OfPropertyDefinitionRepresentation): void;
  get(): StepRepr_HArray1OfPropertyDefinitionRepresentation;
}

  export declare class Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_1 extends Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_2 extends Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation {
    constructor(thePtr: StepRepr_HArray1OfPropertyDefinitionRepresentation);
  }

  export declare class Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_3 extends Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation {
    constructor(theHandle: Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation);
  }

  export declare class Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_4 extends Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation {
    constructor(theHandle: Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation);
  }

export declare class Handle_StepRepr_DataEnvironment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_DataEnvironment): void;
  get(): StepRepr_DataEnvironment;
}

  export declare class Handle_StepRepr_DataEnvironment_1 extends Handle_StepRepr_DataEnvironment {
    constructor();
  }

  export declare class Handle_StepRepr_DataEnvironment_2 extends Handle_StepRepr_DataEnvironment {
    constructor(thePtr: StepRepr_DataEnvironment);
  }

  export declare class Handle_StepRepr_DataEnvironment_3 extends Handle_StepRepr_DataEnvironment {
    constructor(theHandle: Handle_StepRepr_DataEnvironment);
  }

  export declare class Handle_StepRepr_DataEnvironment_4 extends Handle_StepRepr_DataEnvironment {
    constructor(theHandle: Handle_StepRepr_DataEnvironment);
  }

export declare class Handle_StepRepr_DefinitionalRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_DefinitionalRepresentation): void;
  get(): StepRepr_DefinitionalRepresentation;
}

  export declare class Handle_StepRepr_DefinitionalRepresentation_1 extends Handle_StepRepr_DefinitionalRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_DefinitionalRepresentation_2 extends Handle_StepRepr_DefinitionalRepresentation {
    constructor(thePtr: StepRepr_DefinitionalRepresentation);
  }

  export declare class Handle_StepRepr_DefinitionalRepresentation_3 extends Handle_StepRepr_DefinitionalRepresentation {
    constructor(theHandle: Handle_StepRepr_DefinitionalRepresentation);
  }

  export declare class Handle_StepRepr_DefinitionalRepresentation_4 extends Handle_StepRepr_DefinitionalRepresentation {
    constructor(theHandle: Handle_StepRepr_DefinitionalRepresentation);
  }

export declare class Handle_StepRepr_DescriptiveRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_DescriptiveRepresentationItem): void;
  get(): StepRepr_DescriptiveRepresentationItem;
}

  export declare class Handle_StepRepr_DescriptiveRepresentationItem_1 extends Handle_StepRepr_DescriptiveRepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_DescriptiveRepresentationItem_2 extends Handle_StepRepr_DescriptiveRepresentationItem {
    constructor(thePtr: StepRepr_DescriptiveRepresentationItem);
  }

  export declare class Handle_StepRepr_DescriptiveRepresentationItem_3 extends Handle_StepRepr_DescriptiveRepresentationItem {
    constructor(theHandle: Handle_StepRepr_DescriptiveRepresentationItem);
  }

  export declare class Handle_StepRepr_DescriptiveRepresentationItem_4 extends Handle_StepRepr_DescriptiveRepresentationItem {
    constructor(theHandle: Handle_StepRepr_DescriptiveRepresentationItem);
  }

export declare class Handle_StepRepr_Extension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_Extension): void;
  get(): StepRepr_Extension;
}

  export declare class Handle_StepRepr_Extension_1 extends Handle_StepRepr_Extension {
    constructor();
  }

  export declare class Handle_StepRepr_Extension_2 extends Handle_StepRepr_Extension {
    constructor(thePtr: StepRepr_Extension);
  }

  export declare class Handle_StepRepr_Extension_3 extends Handle_StepRepr_Extension {
    constructor(theHandle: Handle_StepRepr_Extension);
  }

  export declare class Handle_StepRepr_Extension_4 extends Handle_StepRepr_Extension {
    constructor(theHandle: Handle_StepRepr_Extension);
  }

export declare class Handle_StepRepr_ExternallyDefinedRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ExternallyDefinedRepresentation): void;
  get(): StepRepr_ExternallyDefinedRepresentation;
}

  export declare class Handle_StepRepr_ExternallyDefinedRepresentation_1 extends Handle_StepRepr_ExternallyDefinedRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_ExternallyDefinedRepresentation_2 extends Handle_StepRepr_ExternallyDefinedRepresentation {
    constructor(thePtr: StepRepr_ExternallyDefinedRepresentation);
  }

  export declare class Handle_StepRepr_ExternallyDefinedRepresentation_3 extends Handle_StepRepr_ExternallyDefinedRepresentation {
    constructor(theHandle: Handle_StepRepr_ExternallyDefinedRepresentation);
  }

  export declare class Handle_StepRepr_ExternallyDefinedRepresentation_4 extends Handle_StepRepr_ExternallyDefinedRepresentation {
    constructor(theHandle: Handle_StepRepr_ExternallyDefinedRepresentation);
  }

export declare class Handle_StepRepr_ShapeAspectRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ShapeAspectRelationship): void;
  get(): StepRepr_ShapeAspectRelationship;
}

  export declare class Handle_StepRepr_ShapeAspectRelationship_1 extends Handle_StepRepr_ShapeAspectRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_ShapeAspectRelationship_2 extends Handle_StepRepr_ShapeAspectRelationship {
    constructor(thePtr: StepRepr_ShapeAspectRelationship);
  }

  export declare class Handle_StepRepr_ShapeAspectRelationship_3 extends Handle_StepRepr_ShapeAspectRelationship {
    constructor(theHandle: Handle_StepRepr_ShapeAspectRelationship);
  }

  export declare class Handle_StepRepr_ShapeAspectRelationship_4 extends Handle_StepRepr_ShapeAspectRelationship {
    constructor(theHandle: Handle_StepRepr_ShapeAspectRelationship);
  }

export declare class Handle_StepRepr_FeatureForDatumTargetRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_FeatureForDatumTargetRelationship): void;
  get(): StepRepr_FeatureForDatumTargetRelationship;
}

  export declare class Handle_StepRepr_FeatureForDatumTargetRelationship_1 extends Handle_StepRepr_FeatureForDatumTargetRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_FeatureForDatumTargetRelationship_2 extends Handle_StepRepr_FeatureForDatumTargetRelationship {
    constructor(thePtr: StepRepr_FeatureForDatumTargetRelationship);
  }

  export declare class Handle_StepRepr_FeatureForDatumTargetRelationship_3 extends Handle_StepRepr_FeatureForDatumTargetRelationship {
    constructor(theHandle: Handle_StepRepr_FeatureForDatumTargetRelationship);
  }

  export declare class Handle_StepRepr_FeatureForDatumTargetRelationship_4 extends Handle_StepRepr_FeatureForDatumTargetRelationship {
    constructor(theHandle: Handle_StepRepr_FeatureForDatumTargetRelationship);
  }

export declare class Handle_StepRepr_FunctionallyDefinedTransformation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_FunctionallyDefinedTransformation): void;
  get(): StepRepr_FunctionallyDefinedTransformation;
}

  export declare class Handle_StepRepr_FunctionallyDefinedTransformation_1 extends Handle_StepRepr_FunctionallyDefinedTransformation {
    constructor();
  }

  export declare class Handle_StepRepr_FunctionallyDefinedTransformation_2 extends Handle_StepRepr_FunctionallyDefinedTransformation {
    constructor(thePtr: StepRepr_FunctionallyDefinedTransformation);
  }

  export declare class Handle_StepRepr_FunctionallyDefinedTransformation_3 extends Handle_StepRepr_FunctionallyDefinedTransformation {
    constructor(theHandle: Handle_StepRepr_FunctionallyDefinedTransformation);
  }

  export declare class Handle_StepRepr_FunctionallyDefinedTransformation_4 extends Handle_StepRepr_FunctionallyDefinedTransformation {
    constructor(theHandle: Handle_StepRepr_FunctionallyDefinedTransformation);
  }

export declare class Handle_StepRepr_GeometricAlignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_GeometricAlignment): void;
  get(): StepRepr_GeometricAlignment;
}

  export declare class Handle_StepRepr_GeometricAlignment_1 extends Handle_StepRepr_GeometricAlignment {
    constructor();
  }

  export declare class Handle_StepRepr_GeometricAlignment_2 extends Handle_StepRepr_GeometricAlignment {
    constructor(thePtr: StepRepr_GeometricAlignment);
  }

  export declare class Handle_StepRepr_GeometricAlignment_3 extends Handle_StepRepr_GeometricAlignment {
    constructor(theHandle: Handle_StepRepr_GeometricAlignment);
  }

  export declare class Handle_StepRepr_GeometricAlignment_4 extends Handle_StepRepr_GeometricAlignment {
    constructor(theHandle: Handle_StepRepr_GeometricAlignment);
  }

export declare class Handle_StepRepr_GlobalUncertaintyAssignedContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_GlobalUncertaintyAssignedContext): void;
  get(): StepRepr_GlobalUncertaintyAssignedContext;
}

  export declare class Handle_StepRepr_GlobalUncertaintyAssignedContext_1 extends Handle_StepRepr_GlobalUncertaintyAssignedContext {
    constructor();
  }

  export declare class Handle_StepRepr_GlobalUncertaintyAssignedContext_2 extends Handle_StepRepr_GlobalUncertaintyAssignedContext {
    constructor(thePtr: StepRepr_GlobalUncertaintyAssignedContext);
  }

  export declare class Handle_StepRepr_GlobalUncertaintyAssignedContext_3 extends Handle_StepRepr_GlobalUncertaintyAssignedContext {
    constructor(theHandle: Handle_StepRepr_GlobalUncertaintyAssignedContext);
  }

  export declare class Handle_StepRepr_GlobalUncertaintyAssignedContext_4 extends Handle_StepRepr_GlobalUncertaintyAssignedContext {
    constructor(theHandle: Handle_StepRepr_GlobalUncertaintyAssignedContext);
  }

export declare class Handle_StepRepr_GlobalUnitAssignedContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_GlobalUnitAssignedContext): void;
  get(): StepRepr_GlobalUnitAssignedContext;
}

  export declare class Handle_StepRepr_GlobalUnitAssignedContext_1 extends Handle_StepRepr_GlobalUnitAssignedContext {
    constructor();
  }

  export declare class Handle_StepRepr_GlobalUnitAssignedContext_2 extends Handle_StepRepr_GlobalUnitAssignedContext {
    constructor(thePtr: StepRepr_GlobalUnitAssignedContext);
  }

  export declare class Handle_StepRepr_GlobalUnitAssignedContext_3 extends Handle_StepRepr_GlobalUnitAssignedContext {
    constructor(theHandle: Handle_StepRepr_GlobalUnitAssignedContext);
  }

  export declare class Handle_StepRepr_GlobalUnitAssignedContext_4 extends Handle_StepRepr_GlobalUnitAssignedContext {
    constructor(theHandle: Handle_StepRepr_GlobalUnitAssignedContext);
  }

export declare class Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_HSequenceOfMaterialPropertyRepresentation): void;
  get(): StepRepr_HSequenceOfMaterialPropertyRepresentation;
}

  export declare class Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_1 extends Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_2 extends Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation {
    constructor(thePtr: StepRepr_HSequenceOfMaterialPropertyRepresentation);
  }

  export declare class Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_3 extends Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation);
  }

  export declare class Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_4 extends Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation);
  }

export declare class Handle_StepRepr_HSequenceOfRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_HSequenceOfRepresentationItem): void;
  get(): StepRepr_HSequenceOfRepresentationItem;
}

  export declare class Handle_StepRepr_HSequenceOfRepresentationItem_1 extends Handle_StepRepr_HSequenceOfRepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_HSequenceOfRepresentationItem_2 extends Handle_StepRepr_HSequenceOfRepresentationItem {
    constructor(thePtr: StepRepr_HSequenceOfRepresentationItem);
  }

  export declare class Handle_StepRepr_HSequenceOfRepresentationItem_3 extends Handle_StepRepr_HSequenceOfRepresentationItem {
    constructor(theHandle: Handle_StepRepr_HSequenceOfRepresentationItem);
  }

  export declare class Handle_StepRepr_HSequenceOfRepresentationItem_4 extends Handle_StepRepr_HSequenceOfRepresentationItem {
    constructor(theHandle: Handle_StepRepr_HSequenceOfRepresentationItem);
  }

export declare class Handle_StepRepr_IntegerRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_IntegerRepresentationItem): void;
  get(): StepRepr_IntegerRepresentationItem;
}

  export declare class Handle_StepRepr_IntegerRepresentationItem_1 extends Handle_StepRepr_IntegerRepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_IntegerRepresentationItem_2 extends Handle_StepRepr_IntegerRepresentationItem {
    constructor(thePtr: StepRepr_IntegerRepresentationItem);
  }

  export declare class Handle_StepRepr_IntegerRepresentationItem_3 extends Handle_StepRepr_IntegerRepresentationItem {
    constructor(theHandle: Handle_StepRepr_IntegerRepresentationItem);
  }

  export declare class Handle_StepRepr_IntegerRepresentationItem_4 extends Handle_StepRepr_IntegerRepresentationItem {
    constructor(theHandle: Handle_StepRepr_IntegerRepresentationItem);
  }

export declare class Handle_StepRepr_ItemDefinedTransformation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ItemDefinedTransformation): void;
  get(): StepRepr_ItemDefinedTransformation;
}

  export declare class Handle_StepRepr_ItemDefinedTransformation_1 extends Handle_StepRepr_ItemDefinedTransformation {
    constructor();
  }

  export declare class Handle_StepRepr_ItemDefinedTransformation_2 extends Handle_StepRepr_ItemDefinedTransformation {
    constructor(thePtr: StepRepr_ItemDefinedTransformation);
  }

  export declare class Handle_StepRepr_ItemDefinedTransformation_3 extends Handle_StepRepr_ItemDefinedTransformation {
    constructor(theHandle: Handle_StepRepr_ItemDefinedTransformation);
  }

  export declare class Handle_StepRepr_ItemDefinedTransformation_4 extends Handle_StepRepr_ItemDefinedTransformation {
    constructor(theHandle: Handle_StepRepr_ItemDefinedTransformation);
  }

export declare class Handle_StepRepr_MakeFromUsageOption {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_MakeFromUsageOption): void;
  get(): StepRepr_MakeFromUsageOption;
}

  export declare class Handle_StepRepr_MakeFromUsageOption_1 extends Handle_StepRepr_MakeFromUsageOption {
    constructor();
  }

  export declare class Handle_StepRepr_MakeFromUsageOption_2 extends Handle_StepRepr_MakeFromUsageOption {
    constructor(thePtr: StepRepr_MakeFromUsageOption);
  }

  export declare class Handle_StepRepr_MakeFromUsageOption_3 extends Handle_StepRepr_MakeFromUsageOption {
    constructor(theHandle: Handle_StepRepr_MakeFromUsageOption);
  }

  export declare class Handle_StepRepr_MakeFromUsageOption_4 extends Handle_StepRepr_MakeFromUsageOption {
    constructor(theHandle: Handle_StepRepr_MakeFromUsageOption);
  }

export declare class Handle_StepRepr_MappedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_MappedItem): void;
  get(): StepRepr_MappedItem;
}

  export declare class Handle_StepRepr_MappedItem_1 extends Handle_StepRepr_MappedItem {
    constructor();
  }

  export declare class Handle_StepRepr_MappedItem_2 extends Handle_StepRepr_MappedItem {
    constructor(thePtr: StepRepr_MappedItem);
  }

  export declare class Handle_StepRepr_MappedItem_3 extends Handle_StepRepr_MappedItem {
    constructor(theHandle: Handle_StepRepr_MappedItem);
  }

  export declare class Handle_StepRepr_MappedItem_4 extends Handle_StepRepr_MappedItem {
    constructor(theHandle: Handle_StepRepr_MappedItem);
  }

export declare class Handle_StepRepr_MaterialDesignation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_MaterialDesignation): void;
  get(): StepRepr_MaterialDesignation;
}

  export declare class Handle_StepRepr_MaterialDesignation_1 extends Handle_StepRepr_MaterialDesignation {
    constructor();
  }

  export declare class Handle_StepRepr_MaterialDesignation_2 extends Handle_StepRepr_MaterialDesignation {
    constructor(thePtr: StepRepr_MaterialDesignation);
  }

  export declare class Handle_StepRepr_MaterialDesignation_3 extends Handle_StepRepr_MaterialDesignation {
    constructor(theHandle: Handle_StepRepr_MaterialDesignation);
  }

  export declare class Handle_StepRepr_MaterialDesignation_4 extends Handle_StepRepr_MaterialDesignation {
    constructor(theHandle: Handle_StepRepr_MaterialDesignation);
  }

export declare class Handle_StepRepr_MaterialProperty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_MaterialProperty): void;
  get(): StepRepr_MaterialProperty;
}

  export declare class Handle_StepRepr_MaterialProperty_1 extends Handle_StepRepr_MaterialProperty {
    constructor();
  }

  export declare class Handle_StepRepr_MaterialProperty_2 extends Handle_StepRepr_MaterialProperty {
    constructor(thePtr: StepRepr_MaterialProperty);
  }

  export declare class Handle_StepRepr_MaterialProperty_3 extends Handle_StepRepr_MaterialProperty {
    constructor(theHandle: Handle_StepRepr_MaterialProperty);
  }

  export declare class Handle_StepRepr_MaterialProperty_4 extends Handle_StepRepr_MaterialProperty {
    constructor(theHandle: Handle_StepRepr_MaterialProperty);
  }

export declare class Handle_StepRepr_MeasureRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_MeasureRepresentationItem): void;
  get(): StepRepr_MeasureRepresentationItem;
}

  export declare class Handle_StepRepr_MeasureRepresentationItem_1 extends Handle_StepRepr_MeasureRepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_MeasureRepresentationItem_2 extends Handle_StepRepr_MeasureRepresentationItem {
    constructor(thePtr: StepRepr_MeasureRepresentationItem);
  }

  export declare class Handle_StepRepr_MeasureRepresentationItem_3 extends Handle_StepRepr_MeasureRepresentationItem {
    constructor(theHandle: Handle_StepRepr_MeasureRepresentationItem);
  }

  export declare class Handle_StepRepr_MeasureRepresentationItem_4 extends Handle_StepRepr_MeasureRepresentationItem {
    constructor(theHandle: Handle_StepRepr_MeasureRepresentationItem);
  }

export declare class Handle_StepRepr_NextAssemblyUsageOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_NextAssemblyUsageOccurrence): void;
  get(): StepRepr_NextAssemblyUsageOccurrence;
}

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_1 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor();
  }

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_2 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor(thePtr: StepRepr_NextAssemblyUsageOccurrence);
  }

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_3 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_NextAssemblyUsageOccurrence);
  }

  export declare class Handle_StepRepr_NextAssemblyUsageOccurrence_4 extends Handle_StepRepr_NextAssemblyUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_NextAssemblyUsageOccurrence);
  }

export declare class Handle_StepRepr_ParallelOffset {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ParallelOffset): void;
  get(): StepRepr_ParallelOffset;
}

  export declare class Handle_StepRepr_ParallelOffset_1 extends Handle_StepRepr_ParallelOffset {
    constructor();
  }

  export declare class Handle_StepRepr_ParallelOffset_2 extends Handle_StepRepr_ParallelOffset {
    constructor(thePtr: StepRepr_ParallelOffset);
  }

  export declare class Handle_StepRepr_ParallelOffset_3 extends Handle_StepRepr_ParallelOffset {
    constructor(theHandle: Handle_StepRepr_ParallelOffset);
  }

  export declare class Handle_StepRepr_ParallelOffset_4 extends Handle_StepRepr_ParallelOffset {
    constructor(theHandle: Handle_StepRepr_ParallelOffset);
  }

export declare class Handle_StepRepr_ParametricRepresentationContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ParametricRepresentationContext): void;
  get(): StepRepr_ParametricRepresentationContext;
}

  export declare class Handle_StepRepr_ParametricRepresentationContext_1 extends Handle_StepRepr_ParametricRepresentationContext {
    constructor();
  }

  export declare class Handle_StepRepr_ParametricRepresentationContext_2 extends Handle_StepRepr_ParametricRepresentationContext {
    constructor(thePtr: StepRepr_ParametricRepresentationContext);
  }

  export declare class Handle_StepRepr_ParametricRepresentationContext_3 extends Handle_StepRepr_ParametricRepresentationContext {
    constructor(theHandle: Handle_StepRepr_ParametricRepresentationContext);
  }

  export declare class Handle_StepRepr_ParametricRepresentationContext_4 extends Handle_StepRepr_ParametricRepresentationContext {
    constructor(theHandle: Handle_StepRepr_ParametricRepresentationContext);
  }

export declare class Handle_StepRepr_PerpendicularTo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_PerpendicularTo): void;
  get(): StepRepr_PerpendicularTo;
}

  export declare class Handle_StepRepr_PerpendicularTo_1 extends Handle_StepRepr_PerpendicularTo {
    constructor();
  }

  export declare class Handle_StepRepr_PerpendicularTo_2 extends Handle_StepRepr_PerpendicularTo {
    constructor(thePtr: StepRepr_PerpendicularTo);
  }

  export declare class Handle_StepRepr_PerpendicularTo_3 extends Handle_StepRepr_PerpendicularTo {
    constructor(theHandle: Handle_StepRepr_PerpendicularTo);
  }

  export declare class Handle_StepRepr_PerpendicularTo_4 extends Handle_StepRepr_PerpendicularTo {
    constructor(theHandle: Handle_StepRepr_PerpendicularTo);
  }

export declare class Handle_StepRepr_ProductConcept {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ProductConcept): void;
  get(): StepRepr_ProductConcept;
}

  export declare class Handle_StepRepr_ProductConcept_1 extends Handle_StepRepr_ProductConcept {
    constructor();
  }

  export declare class Handle_StepRepr_ProductConcept_2 extends Handle_StepRepr_ProductConcept {
    constructor(thePtr: StepRepr_ProductConcept);
  }

  export declare class Handle_StepRepr_ProductConcept_3 extends Handle_StepRepr_ProductConcept {
    constructor(theHandle: Handle_StepRepr_ProductConcept);
  }

  export declare class Handle_StepRepr_ProductConcept_4 extends Handle_StepRepr_ProductConcept {
    constructor(theHandle: Handle_StepRepr_ProductConcept);
  }

export declare class Handle_StepRepr_PromissoryUsageOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_PromissoryUsageOccurrence): void;
  get(): StepRepr_PromissoryUsageOccurrence;
}

  export declare class Handle_StepRepr_PromissoryUsageOccurrence_1 extends Handle_StepRepr_PromissoryUsageOccurrence {
    constructor();
  }

  export declare class Handle_StepRepr_PromissoryUsageOccurrence_2 extends Handle_StepRepr_PromissoryUsageOccurrence {
    constructor(thePtr: StepRepr_PromissoryUsageOccurrence);
  }

  export declare class Handle_StepRepr_PromissoryUsageOccurrence_3 extends Handle_StepRepr_PromissoryUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_PromissoryUsageOccurrence);
  }

  export declare class Handle_StepRepr_PromissoryUsageOccurrence_4 extends Handle_StepRepr_PromissoryUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_PromissoryUsageOccurrence);
  }

export declare class Handle_StepRepr_PropertyDefinitionRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_PropertyDefinitionRelationship): void;
  get(): StepRepr_PropertyDefinitionRelationship;
}

  export declare class Handle_StepRepr_PropertyDefinitionRelationship_1 extends Handle_StepRepr_PropertyDefinitionRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_PropertyDefinitionRelationship_2 extends Handle_StepRepr_PropertyDefinitionRelationship {
    constructor(thePtr: StepRepr_PropertyDefinitionRelationship);
  }

  export declare class Handle_StepRepr_PropertyDefinitionRelationship_3 extends Handle_StepRepr_PropertyDefinitionRelationship {
    constructor(theHandle: Handle_StepRepr_PropertyDefinitionRelationship);
  }

  export declare class Handle_StepRepr_PropertyDefinitionRelationship_4 extends Handle_StepRepr_PropertyDefinitionRelationship {
    constructor(theHandle: Handle_StepRepr_PropertyDefinitionRelationship);
  }

export declare class Handle_StepRepr_QuantifiedAssemblyComponentUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_QuantifiedAssemblyComponentUsage): void;
  get(): StepRepr_QuantifiedAssemblyComponentUsage;
}

  export declare class Handle_StepRepr_QuantifiedAssemblyComponentUsage_1 extends Handle_StepRepr_QuantifiedAssemblyComponentUsage {
    constructor();
  }

  export declare class Handle_StepRepr_QuantifiedAssemblyComponentUsage_2 extends Handle_StepRepr_QuantifiedAssemblyComponentUsage {
    constructor(thePtr: StepRepr_QuantifiedAssemblyComponentUsage);
  }

  export declare class Handle_StepRepr_QuantifiedAssemblyComponentUsage_3 extends Handle_StepRepr_QuantifiedAssemblyComponentUsage {
    constructor(theHandle: Handle_StepRepr_QuantifiedAssemblyComponentUsage);
  }

  export declare class Handle_StepRepr_QuantifiedAssemblyComponentUsage_4 extends Handle_StepRepr_QuantifiedAssemblyComponentUsage {
    constructor(theHandle: Handle_StepRepr_QuantifiedAssemblyComponentUsage);
  }

export declare class Handle_StepRepr_ReprItemAndMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ReprItemAndMeasureWithUnit): void;
  get(): StepRepr_ReprItemAndMeasureWithUnit;
}

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnit_1 extends Handle_StepRepr_ReprItemAndMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnit_2 extends Handle_StepRepr_ReprItemAndMeasureWithUnit {
    constructor(thePtr: StepRepr_ReprItemAndMeasureWithUnit);
  }

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnit_3 extends Handle_StepRepr_ReprItemAndMeasureWithUnit {
    constructor(theHandle: Handle_StepRepr_ReprItemAndMeasureWithUnit);
  }

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnit_4 extends Handle_StepRepr_ReprItemAndMeasureWithUnit {
    constructor(theHandle: Handle_StepRepr_ReprItemAndMeasureWithUnit);
  }

export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ReprItemAndLengthMeasureWithUnit): void;
  get(): StepRepr_ReprItemAndLengthMeasureWithUnit;
}

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_1 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_2 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnit {
    constructor(thePtr: StepRepr_ReprItemAndLengthMeasureWithUnit);
  }

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_3 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnit {
    constructor(theHandle: Handle_StepRepr_ReprItemAndLengthMeasureWithUnit);
  }

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_4 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnit {
    constructor(theHandle: Handle_StepRepr_ReprItemAndLengthMeasureWithUnit);
  }

export declare class Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ReprItemAndMeasureWithUnitAndQRI): void;
  get(): StepRepr_ReprItemAndMeasureWithUnitAndQRI;
}

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_1 extends Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI {
    constructor();
  }

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_2 extends Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI {
    constructor(thePtr: StepRepr_ReprItemAndMeasureWithUnitAndQRI);
  }

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_3 extends Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI {
    constructor(theHandle: Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI);
  }

  export declare class Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_4 extends Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI {
    constructor(theHandle: Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI);
  }

export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI): void;
  get(): StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI;
}

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_1 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI {
    constructor();
  }

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_2 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI {
    constructor(thePtr: StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI);
  }

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_3 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI {
    constructor(theHandle: Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI);
  }

  export declare class Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_4 extends Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI {
    constructor(theHandle: Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI);
  }

export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ReprItemAndPlaneAngleMeasureWithUnit): void;
  get(): StepRepr_ReprItemAndPlaneAngleMeasureWithUnit;
}

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_1 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit {
    constructor();
  }

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_2 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit {
    constructor(thePtr: StepRepr_ReprItemAndPlaneAngleMeasureWithUnit);
  }

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_3 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit {
    constructor(theHandle: Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit);
  }

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_4 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit {
    constructor(theHandle: Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit);
  }

export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI): void;
  get(): StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI;
}

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_1 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI {
    constructor();
  }

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_2 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI {
    constructor(thePtr: StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI);
  }

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_3 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI {
    constructor(theHandle: Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI);
  }

  export declare class Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_4 extends Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI {
    constructor(theHandle: Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI);
  }

export declare class Handle_StepRepr_RepresentationMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_RepresentationMap): void;
  get(): StepRepr_RepresentationMap;
}

  export declare class Handle_StepRepr_RepresentationMap_1 extends Handle_StepRepr_RepresentationMap {
    constructor();
  }

  export declare class Handle_StepRepr_RepresentationMap_2 extends Handle_StepRepr_RepresentationMap {
    constructor(thePtr: StepRepr_RepresentationMap);
  }

  export declare class Handle_StepRepr_RepresentationMap_3 extends Handle_StepRepr_RepresentationMap {
    constructor(theHandle: Handle_StepRepr_RepresentationMap);
  }

  export declare class Handle_StepRepr_RepresentationMap_4 extends Handle_StepRepr_RepresentationMap {
    constructor(theHandle: Handle_StepRepr_RepresentationMap);
  }

export declare class Handle_StepRepr_ShapeRepresentationRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ShapeRepresentationRelationship): void;
  get(): StepRepr_ShapeRepresentationRelationship;
}

  export declare class Handle_StepRepr_ShapeRepresentationRelationship_1 extends Handle_StepRepr_ShapeRepresentationRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_ShapeRepresentationRelationship_2 extends Handle_StepRepr_ShapeRepresentationRelationship {
    constructor(thePtr: StepRepr_ShapeRepresentationRelationship);
  }

  export declare class Handle_StepRepr_ShapeRepresentationRelationship_3 extends Handle_StepRepr_ShapeRepresentationRelationship {
    constructor(theHandle: Handle_StepRepr_ShapeRepresentationRelationship);
  }

  export declare class Handle_StepRepr_ShapeRepresentationRelationship_4 extends Handle_StepRepr_ShapeRepresentationRelationship {
    constructor(theHandle: Handle_StepRepr_ShapeRepresentationRelationship);
  }

export declare class Handle_StepRepr_RepresentationRelationshipWithTransformation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_RepresentationRelationshipWithTransformation): void;
  get(): StepRepr_RepresentationRelationshipWithTransformation;
}

  export declare class Handle_StepRepr_RepresentationRelationshipWithTransformation_1 extends Handle_StepRepr_RepresentationRelationshipWithTransformation {
    constructor();
  }

  export declare class Handle_StepRepr_RepresentationRelationshipWithTransformation_2 extends Handle_StepRepr_RepresentationRelationshipWithTransformation {
    constructor(thePtr: StepRepr_RepresentationRelationshipWithTransformation);
  }

  export declare class Handle_StepRepr_RepresentationRelationshipWithTransformation_3 extends Handle_StepRepr_RepresentationRelationshipWithTransformation {
    constructor(theHandle: Handle_StepRepr_RepresentationRelationshipWithTransformation);
  }

  export declare class Handle_StepRepr_RepresentationRelationshipWithTransformation_4 extends Handle_StepRepr_RepresentationRelationshipWithTransformation {
    constructor(theHandle: Handle_StepRepr_RepresentationRelationshipWithTransformation);
  }

export declare class Handle_StepRepr_ShapeAspectDerivingRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ShapeAspectDerivingRelationship): void;
  get(): StepRepr_ShapeAspectDerivingRelationship;
}

  export declare class Handle_StepRepr_ShapeAspectDerivingRelationship_1 extends Handle_StepRepr_ShapeAspectDerivingRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_ShapeAspectDerivingRelationship_2 extends Handle_StepRepr_ShapeAspectDerivingRelationship {
    constructor(thePtr: StepRepr_ShapeAspectDerivingRelationship);
  }

  export declare class Handle_StepRepr_ShapeAspectDerivingRelationship_3 extends Handle_StepRepr_ShapeAspectDerivingRelationship {
    constructor(theHandle: Handle_StepRepr_ShapeAspectDerivingRelationship);
  }

  export declare class Handle_StepRepr_ShapeAspectDerivingRelationship_4 extends Handle_StepRepr_ShapeAspectDerivingRelationship {
    constructor(theHandle: Handle_StepRepr_ShapeAspectDerivingRelationship);
  }

export declare class Handle_StepRepr_ShapeAspectTransition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ShapeAspectTransition): void;
  get(): StepRepr_ShapeAspectTransition;
}

  export declare class Handle_StepRepr_ShapeAspectTransition_1 extends Handle_StepRepr_ShapeAspectTransition {
    constructor();
  }

  export declare class Handle_StepRepr_ShapeAspectTransition_2 extends Handle_StepRepr_ShapeAspectTransition {
    constructor(thePtr: StepRepr_ShapeAspectTransition);
  }

  export declare class Handle_StepRepr_ShapeAspectTransition_3 extends Handle_StepRepr_ShapeAspectTransition {
    constructor(theHandle: Handle_StepRepr_ShapeAspectTransition);
  }

  export declare class Handle_StepRepr_ShapeAspectTransition_4 extends Handle_StepRepr_ShapeAspectTransition {
    constructor(theHandle: Handle_StepRepr_ShapeAspectTransition);
  }

export declare class Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ShapeRepresentationRelationshipWithTransformation): void;
  get(): StepRepr_ShapeRepresentationRelationshipWithTransformation;
}

  export declare class Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_1 extends Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation {
    constructor();
  }

  export declare class Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_2 extends Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation {
    constructor(thePtr: StepRepr_ShapeRepresentationRelationshipWithTransformation);
  }

  export declare class Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_3 extends Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation {
    constructor(theHandle: Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation);
  }

  export declare class Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_4 extends Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation {
    constructor(theHandle: Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation);
  }

export declare class Handle_StepRepr_SpecifiedHigherUsageOccurrence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_SpecifiedHigherUsageOccurrence): void;
  get(): StepRepr_SpecifiedHigherUsageOccurrence;
}

  export declare class Handle_StepRepr_SpecifiedHigherUsageOccurrence_1 extends Handle_StepRepr_SpecifiedHigherUsageOccurrence {
    constructor();
  }

  export declare class Handle_StepRepr_SpecifiedHigherUsageOccurrence_2 extends Handle_StepRepr_SpecifiedHigherUsageOccurrence {
    constructor(thePtr: StepRepr_SpecifiedHigherUsageOccurrence);
  }

  export declare class Handle_StepRepr_SpecifiedHigherUsageOccurrence_3 extends Handle_StepRepr_SpecifiedHigherUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_SpecifiedHigherUsageOccurrence);
  }

  export declare class Handle_StepRepr_SpecifiedHigherUsageOccurrence_4 extends Handle_StepRepr_SpecifiedHigherUsageOccurrence {
    constructor(theHandle: Handle_StepRepr_SpecifiedHigherUsageOccurrence);
  }

export declare class Handle_StepRepr_StructuralResponseProperty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_StructuralResponseProperty): void;
  get(): StepRepr_StructuralResponseProperty;
}

  export declare class Handle_StepRepr_StructuralResponseProperty_1 extends Handle_StepRepr_StructuralResponseProperty {
    constructor();
  }

  export declare class Handle_StepRepr_StructuralResponseProperty_2 extends Handle_StepRepr_StructuralResponseProperty {
    constructor(thePtr: StepRepr_StructuralResponseProperty);
  }

  export declare class Handle_StepRepr_StructuralResponseProperty_3 extends Handle_StepRepr_StructuralResponseProperty {
    constructor(theHandle: Handle_StepRepr_StructuralResponseProperty);
  }

  export declare class Handle_StepRepr_StructuralResponseProperty_4 extends Handle_StepRepr_StructuralResponseProperty {
    constructor(theHandle: Handle_StepRepr_StructuralResponseProperty);
  }

export declare class Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_StructuralResponsePropertyDefinitionRepresentation): void;
  get(): StepRepr_StructuralResponsePropertyDefinitionRepresentation;
}

  export declare class Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_1 extends Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation {
    constructor();
  }

  export declare class Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_2 extends Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation {
    constructor(thePtr: StepRepr_StructuralResponsePropertyDefinitionRepresentation);
  }

  export declare class Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_3 extends Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation {
    constructor(theHandle: Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation);
  }

  export declare class Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_4 extends Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation {
    constructor(theHandle: Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation);
  }

export declare class Handle_StepRepr_SuppliedPartRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_SuppliedPartRelationship): void;
  get(): StepRepr_SuppliedPartRelationship;
}

  export declare class Handle_StepRepr_SuppliedPartRelationship_1 extends Handle_StepRepr_SuppliedPartRelationship {
    constructor();
  }

  export declare class Handle_StepRepr_SuppliedPartRelationship_2 extends Handle_StepRepr_SuppliedPartRelationship {
    constructor(thePtr: StepRepr_SuppliedPartRelationship);
  }

  export declare class Handle_StepRepr_SuppliedPartRelationship_3 extends Handle_StepRepr_SuppliedPartRelationship {
    constructor(theHandle: Handle_StepRepr_SuppliedPartRelationship);
  }

  export declare class Handle_StepRepr_SuppliedPartRelationship_4 extends Handle_StepRepr_SuppliedPartRelationship {
    constructor(theHandle: Handle_StepRepr_SuppliedPartRelationship);
  }

export declare class Handle_StepRepr_Tangent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_Tangent): void;
  get(): StepRepr_Tangent;
}

  export declare class Handle_StepRepr_Tangent_1 extends Handle_StepRepr_Tangent {
    constructor();
  }

  export declare class Handle_StepRepr_Tangent_2 extends Handle_StepRepr_Tangent {
    constructor(thePtr: StepRepr_Tangent);
  }

  export declare class Handle_StepRepr_Tangent_3 extends Handle_StepRepr_Tangent {
    constructor(theHandle: Handle_StepRepr_Tangent);
  }

  export declare class Handle_StepRepr_Tangent_4 extends Handle_StepRepr_Tangent {
    constructor(theHandle: Handle_StepRepr_Tangent);
  }

export declare class Handle_StepRepr_ValueRange {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ValueRange): void;
  get(): StepRepr_ValueRange;
}

  export declare class Handle_StepRepr_ValueRange_1 extends Handle_StepRepr_ValueRange {
    constructor();
  }

  export declare class Handle_StepRepr_ValueRange_2 extends Handle_StepRepr_ValueRange {
    constructor(thePtr: StepRepr_ValueRange);
  }

  export declare class Handle_StepRepr_ValueRange_3 extends Handle_StepRepr_ValueRange {
    constructor(theHandle: Handle_StepRepr_ValueRange);
  }

  export declare class Handle_StepRepr_ValueRange_4 extends Handle_StepRepr_ValueRange {
    constructor(theHandle: Handle_StepRepr_ValueRange);
  }

export declare class Handle_StepRepr_ValueRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepRepr_ValueRepresentationItem): void;
  get(): StepRepr_ValueRepresentationItem;
}

  export declare class Handle_StepRepr_ValueRepresentationItem_1 extends Handle_StepRepr_ValueRepresentationItem {
    constructor();
  }

  export declare class Handle_StepRepr_ValueRepresentationItem_2 extends Handle_StepRepr_ValueRepresentationItem {
    constructor(thePtr: StepRepr_ValueRepresentationItem);
  }

  export declare class Handle_StepRepr_ValueRepresentationItem_3 extends Handle_StepRepr_ValueRepresentationItem {
    constructor(theHandle: Handle_StepRepr_ValueRepresentationItem);
  }

  export declare class Handle_StepRepr_ValueRepresentationItem_4 extends Handle_StepRepr_ValueRepresentationItem {
    constructor(theHandle: Handle_StepRepr_ValueRepresentationItem);
  }

export declare class Handle_StepShape_ShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ShapeRepresentation): void;
  get(): StepShape_ShapeRepresentation;
}

  export declare class Handle_StepShape_ShapeRepresentation_1 extends Handle_StepShape_ShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_ShapeRepresentation_2 extends Handle_StepShape_ShapeRepresentation {
    constructor(thePtr: StepShape_ShapeRepresentation);
  }

  export declare class Handle_StepShape_ShapeRepresentation_3 extends Handle_StepShape_ShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ShapeRepresentation);
  }

  export declare class Handle_StepShape_ShapeRepresentation_4 extends Handle_StepShape_ShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ShapeRepresentation);
  }

export declare class Handle_StepShape_AdvancedBrepShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_AdvancedBrepShapeRepresentation): void;
  get(): StepShape_AdvancedBrepShapeRepresentation;
}

  export declare class Handle_StepShape_AdvancedBrepShapeRepresentation_1 extends Handle_StepShape_AdvancedBrepShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_AdvancedBrepShapeRepresentation_2 extends Handle_StepShape_AdvancedBrepShapeRepresentation {
    constructor(thePtr: StepShape_AdvancedBrepShapeRepresentation);
  }

  export declare class Handle_StepShape_AdvancedBrepShapeRepresentation_3 extends Handle_StepShape_AdvancedBrepShapeRepresentation {
    constructor(theHandle: Handle_StepShape_AdvancedBrepShapeRepresentation);
  }

  export declare class Handle_StepShape_AdvancedBrepShapeRepresentation_4 extends Handle_StepShape_AdvancedBrepShapeRepresentation {
    constructor(theHandle: Handle_StepShape_AdvancedBrepShapeRepresentation);
  }

export declare class Handle_StepShape_TopologicalRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_TopologicalRepresentationItem): void;
  get(): StepShape_TopologicalRepresentationItem;
}

  export declare class Handle_StepShape_TopologicalRepresentationItem_1 extends Handle_StepShape_TopologicalRepresentationItem {
    constructor();
  }

  export declare class Handle_StepShape_TopologicalRepresentationItem_2 extends Handle_StepShape_TopologicalRepresentationItem {
    constructor(thePtr: StepShape_TopologicalRepresentationItem);
  }

  export declare class Handle_StepShape_TopologicalRepresentationItem_3 extends Handle_StepShape_TopologicalRepresentationItem {
    constructor(theHandle: Handle_StepShape_TopologicalRepresentationItem);
  }

  export declare class Handle_StepShape_TopologicalRepresentationItem_4 extends Handle_StepShape_TopologicalRepresentationItem {
    constructor(theHandle: Handle_StepShape_TopologicalRepresentationItem);
  }

export declare class Handle_StepShape_FaceBound {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_FaceBound): void;
  get(): StepShape_FaceBound;
}

  export declare class Handle_StepShape_FaceBound_1 extends Handle_StepShape_FaceBound {
    constructor();
  }

  export declare class Handle_StepShape_FaceBound_2 extends Handle_StepShape_FaceBound {
    constructor(thePtr: StepShape_FaceBound);
  }

  export declare class Handle_StepShape_FaceBound_3 extends Handle_StepShape_FaceBound {
    constructor(theHandle: Handle_StepShape_FaceBound);
  }

  export declare class Handle_StepShape_FaceBound_4 extends Handle_StepShape_FaceBound {
    constructor(theHandle: Handle_StepShape_FaceBound);
  }

export declare class Handle_StepShape_HArray1OfFaceBound {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfFaceBound): void;
  get(): StepShape_HArray1OfFaceBound;
}

  export declare class Handle_StepShape_HArray1OfFaceBound_1 extends Handle_StepShape_HArray1OfFaceBound {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfFaceBound_2 extends Handle_StepShape_HArray1OfFaceBound {
    constructor(thePtr: StepShape_HArray1OfFaceBound);
  }

  export declare class Handle_StepShape_HArray1OfFaceBound_3 extends Handle_StepShape_HArray1OfFaceBound {
    constructor(theHandle: Handle_StepShape_HArray1OfFaceBound);
  }

  export declare class Handle_StepShape_HArray1OfFaceBound_4 extends Handle_StepShape_HArray1OfFaceBound {
    constructor(theHandle: Handle_StepShape_HArray1OfFaceBound);
  }

export declare class Handle_StepShape_Face {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Face): void;
  get(): StepShape_Face;
}

  export declare class Handle_StepShape_Face_1 extends Handle_StepShape_Face {
    constructor();
  }

  export declare class Handle_StepShape_Face_2 extends Handle_StepShape_Face {
    constructor(thePtr: StepShape_Face);
  }

  export declare class Handle_StepShape_Face_3 extends Handle_StepShape_Face {
    constructor(theHandle: Handle_StepShape_Face);
  }

  export declare class Handle_StepShape_Face_4 extends Handle_StepShape_Face {
    constructor(theHandle: Handle_StepShape_Face);
  }

export declare class Handle_StepShape_FaceSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_FaceSurface): void;
  get(): StepShape_FaceSurface;
}

  export declare class Handle_StepShape_FaceSurface_1 extends Handle_StepShape_FaceSurface {
    constructor();
  }

  export declare class Handle_StepShape_FaceSurface_2 extends Handle_StepShape_FaceSurface {
    constructor(thePtr: StepShape_FaceSurface);
  }

  export declare class Handle_StepShape_FaceSurface_3 extends Handle_StepShape_FaceSurface {
    constructor(theHandle: Handle_StepShape_FaceSurface);
  }

  export declare class Handle_StepShape_FaceSurface_4 extends Handle_StepShape_FaceSurface {
    constructor(theHandle: Handle_StepShape_FaceSurface);
  }

export declare class Handle_StepShape_AdvancedFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_AdvancedFace): void;
  get(): StepShape_AdvancedFace;
}

  export declare class Handle_StepShape_AdvancedFace_1 extends Handle_StepShape_AdvancedFace {
    constructor();
  }

  export declare class Handle_StepShape_AdvancedFace_2 extends Handle_StepShape_AdvancedFace {
    constructor(thePtr: StepShape_AdvancedFace);
  }

  export declare class Handle_StepShape_AdvancedFace_3 extends Handle_StepShape_AdvancedFace {
    constructor(theHandle: Handle_StepShape_AdvancedFace);
  }

  export declare class Handle_StepShape_AdvancedFace_4 extends Handle_StepShape_AdvancedFace {
    constructor(theHandle: Handle_StepShape_AdvancedFace);
  }

export declare class Handle_StepShape_DimensionalLocation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_DimensionalLocation): void;
  get(): StepShape_DimensionalLocation;
}

  export declare class Handle_StepShape_DimensionalLocation_1 extends Handle_StepShape_DimensionalLocation {
    constructor();
  }

  export declare class Handle_StepShape_DimensionalLocation_2 extends Handle_StepShape_DimensionalLocation {
    constructor(thePtr: StepShape_DimensionalLocation);
  }

  export declare class Handle_StepShape_DimensionalLocation_3 extends Handle_StepShape_DimensionalLocation {
    constructor(theHandle: Handle_StepShape_DimensionalLocation);
  }

  export declare class Handle_StepShape_DimensionalLocation_4 extends Handle_StepShape_DimensionalLocation {
    constructor(theHandle: Handle_StepShape_DimensionalLocation);
  }

export declare class Handle_StepShape_AngularLocation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_AngularLocation): void;
  get(): StepShape_AngularLocation;
}

  export declare class Handle_StepShape_AngularLocation_1 extends Handle_StepShape_AngularLocation {
    constructor();
  }

  export declare class Handle_StepShape_AngularLocation_2 extends Handle_StepShape_AngularLocation {
    constructor(thePtr: StepShape_AngularLocation);
  }

  export declare class Handle_StepShape_AngularLocation_3 extends Handle_StepShape_AngularLocation {
    constructor(theHandle: Handle_StepShape_AngularLocation);
  }

  export declare class Handle_StepShape_AngularLocation_4 extends Handle_StepShape_AngularLocation {
    constructor(theHandle: Handle_StepShape_AngularLocation);
  }

export declare class Handle_StepShape_DimensionalSize {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_DimensionalSize): void;
  get(): StepShape_DimensionalSize;
}

  export declare class Handle_StepShape_DimensionalSize_1 extends Handle_StepShape_DimensionalSize {
    constructor();
  }

  export declare class Handle_StepShape_DimensionalSize_2 extends Handle_StepShape_DimensionalSize {
    constructor(thePtr: StepShape_DimensionalSize);
  }

  export declare class Handle_StepShape_DimensionalSize_3 extends Handle_StepShape_DimensionalSize {
    constructor(theHandle: Handle_StepShape_DimensionalSize);
  }

  export declare class Handle_StepShape_DimensionalSize_4 extends Handle_StepShape_DimensionalSize {
    constructor(theHandle: Handle_StepShape_DimensionalSize);
  }

export declare class Handle_StepShape_AngularSize {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_AngularSize): void;
  get(): StepShape_AngularSize;
}

  export declare class Handle_StepShape_AngularSize_1 extends Handle_StepShape_AngularSize {
    constructor();
  }

  export declare class Handle_StepShape_AngularSize_2 extends Handle_StepShape_AngularSize {
    constructor(thePtr: StepShape_AngularSize);
  }

  export declare class Handle_StepShape_AngularSize_3 extends Handle_StepShape_AngularSize {
    constructor(theHandle: Handle_StepShape_AngularSize);
  }

  export declare class Handle_StepShape_AngularSize_4 extends Handle_StepShape_AngularSize {
    constructor(theHandle: Handle_StepShape_AngularSize);
  }

export declare class Handle_StepShape_Vertex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Vertex): void;
  get(): StepShape_Vertex;
}

  export declare class Handle_StepShape_Vertex_1 extends Handle_StepShape_Vertex {
    constructor();
  }

  export declare class Handle_StepShape_Vertex_2 extends Handle_StepShape_Vertex {
    constructor(thePtr: StepShape_Vertex);
  }

  export declare class Handle_StepShape_Vertex_3 extends Handle_StepShape_Vertex {
    constructor(theHandle: Handle_StepShape_Vertex);
  }

  export declare class Handle_StepShape_Vertex_4 extends Handle_StepShape_Vertex {
    constructor(theHandle: Handle_StepShape_Vertex);
  }

export declare class Handle_StepShape_Edge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Edge): void;
  get(): StepShape_Edge;
}

  export declare class Handle_StepShape_Edge_1 extends Handle_StepShape_Edge {
    constructor();
  }

  export declare class Handle_StepShape_Edge_2 extends Handle_StepShape_Edge {
    constructor(thePtr: StepShape_Edge);
  }

  export declare class Handle_StepShape_Edge_3 extends Handle_StepShape_Edge {
    constructor(theHandle: Handle_StepShape_Edge);
  }

  export declare class Handle_StepShape_Edge_4 extends Handle_StepShape_Edge {
    constructor(theHandle: Handle_StepShape_Edge);
  }

export declare class Handle_StepShape_HArray1OfEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfEdge): void;
  get(): StepShape_HArray1OfEdge;
}

  export declare class Handle_StepShape_HArray1OfEdge_1 extends Handle_StepShape_HArray1OfEdge {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfEdge_2 extends Handle_StepShape_HArray1OfEdge {
    constructor(thePtr: StepShape_HArray1OfEdge);
  }

  export declare class Handle_StepShape_HArray1OfEdge_3 extends Handle_StepShape_HArray1OfEdge {
    constructor(theHandle: Handle_StepShape_HArray1OfEdge);
  }

  export declare class Handle_StepShape_HArray1OfEdge_4 extends Handle_StepShape_HArray1OfEdge {
    constructor(theHandle: Handle_StepShape_HArray1OfEdge);
  }

export declare class Handle_StepShape_ConnectedEdgeSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ConnectedEdgeSet): void;
  get(): StepShape_ConnectedEdgeSet;
}

  export declare class Handle_StepShape_ConnectedEdgeSet_1 extends Handle_StepShape_ConnectedEdgeSet {
    constructor();
  }

  export declare class Handle_StepShape_ConnectedEdgeSet_2 extends Handle_StepShape_ConnectedEdgeSet {
    constructor(thePtr: StepShape_ConnectedEdgeSet);
  }

  export declare class Handle_StepShape_ConnectedEdgeSet_3 extends Handle_StepShape_ConnectedEdgeSet {
    constructor(theHandle: Handle_StepShape_ConnectedEdgeSet);
  }

  export declare class Handle_StepShape_ConnectedEdgeSet_4 extends Handle_StepShape_ConnectedEdgeSet {
    constructor(theHandle: Handle_StepShape_ConnectedEdgeSet);
  }

export declare class Handle_StepShape_HArray1OfFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfFace): void;
  get(): StepShape_HArray1OfFace;
}

  export declare class Handle_StepShape_HArray1OfFace_1 extends Handle_StepShape_HArray1OfFace {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfFace_2 extends Handle_StepShape_HArray1OfFace {
    constructor(thePtr: StepShape_HArray1OfFace);
  }

  export declare class Handle_StepShape_HArray1OfFace_3 extends Handle_StepShape_HArray1OfFace {
    constructor(theHandle: Handle_StepShape_HArray1OfFace);
  }

  export declare class Handle_StepShape_HArray1OfFace_4 extends Handle_StepShape_HArray1OfFace {
    constructor(theHandle: Handle_StepShape_HArray1OfFace);
  }

export declare class Handle_StepShape_ConnectedFaceSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ConnectedFaceSet): void;
  get(): StepShape_ConnectedFaceSet;
}

  export declare class Handle_StepShape_ConnectedFaceSet_1 extends Handle_StepShape_ConnectedFaceSet {
    constructor();
  }

  export declare class Handle_StepShape_ConnectedFaceSet_2 extends Handle_StepShape_ConnectedFaceSet {
    constructor(thePtr: StepShape_ConnectedFaceSet);
  }

  export declare class Handle_StepShape_ConnectedFaceSet_3 extends Handle_StepShape_ConnectedFaceSet {
    constructor(theHandle: Handle_StepShape_ConnectedFaceSet);
  }

  export declare class Handle_StepShape_ConnectedFaceSet_4 extends Handle_StepShape_ConnectedFaceSet {
    constructor(theHandle: Handle_StepShape_ConnectedFaceSet);
  }

export declare class StepShape_Array1OfGeometricSetSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepShape_GeometricSetSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepShape_Array1OfGeometricSetSelect): StepShape_Array1OfGeometricSetSelect;
  Move(theOther: StepShape_Array1OfGeometricSetSelect): StepShape_Array1OfGeometricSetSelect;
  First(): StepShape_GeometricSetSelect;
  ChangeFirst(): StepShape_GeometricSetSelect;
  Last(): StepShape_GeometricSetSelect;
  ChangeLast(): StepShape_GeometricSetSelect;
  Value(theIndex: Standard_Integer): StepShape_GeometricSetSelect;
  ChangeValue(theIndex: Standard_Integer): StepShape_GeometricSetSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepShape_GeometricSetSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepShape_Array1OfGeometricSetSelect_1 extends StepShape_Array1OfGeometricSetSelect {
    constructor();
  }

  export declare class StepShape_Array1OfGeometricSetSelect_2 extends StepShape_Array1OfGeometricSetSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepShape_Array1OfGeometricSetSelect_3 extends StepShape_Array1OfGeometricSetSelect {
    constructor(theOther: StepShape_Array1OfGeometricSetSelect);
  }

  export declare class StepShape_Array1OfGeometricSetSelect_4 extends StepShape_Array1OfGeometricSetSelect {
    constructor(theOther: StepShape_Array1OfGeometricSetSelect);
  }

  export declare class StepShape_Array1OfGeometricSetSelect_5 extends StepShape_Array1OfGeometricSetSelect {
    constructor(theBegin: StepShape_GeometricSetSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepShape_ClosedShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ClosedShell): void;
  get(): StepShape_ClosedShell;
}

  export declare class Handle_StepShape_ClosedShell_1 extends Handle_StepShape_ClosedShell {
    constructor();
  }

  export declare class Handle_StepShape_ClosedShell_2 extends Handle_StepShape_ClosedShell {
    constructor(thePtr: StepShape_ClosedShell);
  }

  export declare class Handle_StepShape_ClosedShell_3 extends Handle_StepShape_ClosedShell {
    constructor(theHandle: Handle_StepShape_ClosedShell);
  }

  export declare class Handle_StepShape_ClosedShell_4 extends Handle_StepShape_ClosedShell {
    constructor(theHandle: Handle_StepShape_ClosedShell);
  }

export declare class Handle_StepShape_OrientedClosedShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_OrientedClosedShell): void;
  get(): StepShape_OrientedClosedShell;
}

  export declare class Handle_StepShape_OrientedClosedShell_1 extends Handle_StepShape_OrientedClosedShell {
    constructor();
  }

  export declare class Handle_StepShape_OrientedClosedShell_2 extends Handle_StepShape_OrientedClosedShell {
    constructor(thePtr: StepShape_OrientedClosedShell);
  }

  export declare class Handle_StepShape_OrientedClosedShell_3 extends Handle_StepShape_OrientedClosedShell {
    constructor(theHandle: Handle_StepShape_OrientedClosedShell);
  }

  export declare class Handle_StepShape_OrientedClosedShell_4 extends Handle_StepShape_OrientedClosedShell {
    constructor(theHandle: Handle_StepShape_OrientedClosedShell);
  }

export declare class Handle_StepShape_OrientedEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_OrientedEdge): void;
  get(): StepShape_OrientedEdge;
}

  export declare class Handle_StepShape_OrientedEdge_1 extends Handle_StepShape_OrientedEdge {
    constructor();
  }

  export declare class Handle_StepShape_OrientedEdge_2 extends Handle_StepShape_OrientedEdge {
    constructor(thePtr: StepShape_OrientedEdge);
  }

  export declare class Handle_StepShape_OrientedEdge_3 extends Handle_StepShape_OrientedEdge {
    constructor(theHandle: Handle_StepShape_OrientedEdge);
  }

  export declare class Handle_StepShape_OrientedEdge_4 extends Handle_StepShape_OrientedEdge {
    constructor(theHandle: Handle_StepShape_OrientedEdge);
  }

export declare class StepShape_Array1OfShapeDimensionRepresentationItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepShape_ShapeDimensionRepresentationItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepShape_Array1OfShapeDimensionRepresentationItem): StepShape_Array1OfShapeDimensionRepresentationItem;
  Move(theOther: StepShape_Array1OfShapeDimensionRepresentationItem): StepShape_Array1OfShapeDimensionRepresentationItem;
  First(): StepShape_ShapeDimensionRepresentationItem;
  ChangeFirst(): StepShape_ShapeDimensionRepresentationItem;
  Last(): StepShape_ShapeDimensionRepresentationItem;
  ChangeLast(): StepShape_ShapeDimensionRepresentationItem;
  Value(theIndex: Standard_Integer): StepShape_ShapeDimensionRepresentationItem;
  ChangeValue(theIndex: Standard_Integer): StepShape_ShapeDimensionRepresentationItem;
  SetValue(theIndex: Standard_Integer, theItem: StepShape_ShapeDimensionRepresentationItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepShape_Array1OfShapeDimensionRepresentationItem_1 extends StepShape_Array1OfShapeDimensionRepresentationItem {
    constructor();
  }

  export declare class StepShape_Array1OfShapeDimensionRepresentationItem_2 extends StepShape_Array1OfShapeDimensionRepresentationItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepShape_Array1OfShapeDimensionRepresentationItem_3 extends StepShape_Array1OfShapeDimensionRepresentationItem {
    constructor(theOther: StepShape_Array1OfShapeDimensionRepresentationItem);
  }

  export declare class StepShape_Array1OfShapeDimensionRepresentationItem_4 extends StepShape_Array1OfShapeDimensionRepresentationItem {
    constructor(theOther: StepShape_Array1OfShapeDimensionRepresentationItem);
  }

  export declare class StepShape_Array1OfShapeDimensionRepresentationItem_5 extends StepShape_Array1OfShapeDimensionRepresentationItem {
    constructor(theBegin: StepShape_ShapeDimensionRepresentationItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepShape_Array1OfShell {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepShape_Shell): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepShape_Array1OfShell): StepShape_Array1OfShell;
  Move(theOther: StepShape_Array1OfShell): StepShape_Array1OfShell;
  First(): StepShape_Shell;
  ChangeFirst(): StepShape_Shell;
  Last(): StepShape_Shell;
  ChangeLast(): StepShape_Shell;
  Value(theIndex: Standard_Integer): StepShape_Shell;
  ChangeValue(theIndex: Standard_Integer): StepShape_Shell;
  SetValue(theIndex: Standard_Integer, theItem: StepShape_Shell): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepShape_Array1OfShell_1 extends StepShape_Array1OfShell {
    constructor();
  }

  export declare class StepShape_Array1OfShell_2 extends StepShape_Array1OfShell {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepShape_Array1OfShell_3 extends StepShape_Array1OfShell {
    constructor(theOther: StepShape_Array1OfShell);
  }

  export declare class StepShape_Array1OfShell_4 extends StepShape_Array1OfShell {
    constructor(theOther: StepShape_Array1OfShell);
  }

  export declare class StepShape_Array1OfShell_5 extends StepShape_Array1OfShell {
    constructor(theBegin: StepShape_Shell, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepShape_Array1OfValueQualifier {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepShape_ValueQualifier): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepShape_Array1OfValueQualifier): StepShape_Array1OfValueQualifier;
  Move(theOther: StepShape_Array1OfValueQualifier): StepShape_Array1OfValueQualifier;
  First(): StepShape_ValueQualifier;
  ChangeFirst(): StepShape_ValueQualifier;
  Last(): StepShape_ValueQualifier;
  ChangeLast(): StepShape_ValueQualifier;
  Value(theIndex: Standard_Integer): StepShape_ValueQualifier;
  ChangeValue(theIndex: Standard_Integer): StepShape_ValueQualifier;
  SetValue(theIndex: Standard_Integer, theItem: StepShape_ValueQualifier): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepShape_Array1OfValueQualifier_1 extends StepShape_Array1OfValueQualifier {
    constructor();
  }

  export declare class StepShape_Array1OfValueQualifier_2 extends StepShape_Array1OfValueQualifier {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepShape_Array1OfValueQualifier_3 extends StepShape_Array1OfValueQualifier {
    constructor(theOther: StepShape_Array1OfValueQualifier);
  }

  export declare class StepShape_Array1OfValueQualifier_4 extends StepShape_Array1OfValueQualifier {
    constructor(theOther: StepShape_Array1OfValueQualifier);
  }

  export declare class StepShape_Array1OfValueQualifier_5 extends StepShape_Array1OfValueQualifier {
    constructor(theBegin: StepShape_ValueQualifier, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepShape_Block {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Block): void;
  get(): StepShape_Block;
}

  export declare class Handle_StepShape_Block_1 extends Handle_StepShape_Block {
    constructor();
  }

  export declare class Handle_StepShape_Block_2 extends Handle_StepShape_Block {
    constructor(thePtr: StepShape_Block);
  }

  export declare class Handle_StepShape_Block_3 extends Handle_StepShape_Block {
    constructor(theHandle: Handle_StepShape_Block);
  }

  export declare class Handle_StepShape_Block_4 extends Handle_StepShape_Block {
    constructor(theHandle: Handle_StepShape_Block);
  }

export declare class Handle_StepShape_BooleanResult {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_BooleanResult): void;
  get(): StepShape_BooleanResult;
}

  export declare class Handle_StepShape_BooleanResult_1 extends Handle_StepShape_BooleanResult {
    constructor();
  }

  export declare class Handle_StepShape_BooleanResult_2 extends Handle_StepShape_BooleanResult {
    constructor(thePtr: StepShape_BooleanResult);
  }

  export declare class Handle_StepShape_BooleanResult_3 extends Handle_StepShape_BooleanResult {
    constructor(theHandle: Handle_StepShape_BooleanResult);
  }

  export declare class Handle_StepShape_BooleanResult_4 extends Handle_StepShape_BooleanResult {
    constructor(theHandle: Handle_StepShape_BooleanResult);
  }

export declare class Handle_StepShape_BoxDomain {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_BoxDomain): void;
  get(): StepShape_BoxDomain;
}

  export declare class Handle_StepShape_BoxDomain_1 extends Handle_StepShape_BoxDomain {
    constructor();
  }

  export declare class Handle_StepShape_BoxDomain_2 extends Handle_StepShape_BoxDomain {
    constructor(thePtr: StepShape_BoxDomain);
  }

  export declare class Handle_StepShape_BoxDomain_3 extends Handle_StepShape_BoxDomain {
    constructor(theHandle: Handle_StepShape_BoxDomain);
  }

  export declare class Handle_StepShape_BoxDomain_4 extends Handle_StepShape_BoxDomain {
    constructor(theHandle: Handle_StepShape_BoxDomain);
  }

export declare class Handle_StepShape_HalfSpaceSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HalfSpaceSolid): void;
  get(): StepShape_HalfSpaceSolid;
}

  export declare class Handle_StepShape_HalfSpaceSolid_1 extends Handle_StepShape_HalfSpaceSolid {
    constructor();
  }

  export declare class Handle_StepShape_HalfSpaceSolid_2 extends Handle_StepShape_HalfSpaceSolid {
    constructor(thePtr: StepShape_HalfSpaceSolid);
  }

  export declare class Handle_StepShape_HalfSpaceSolid_3 extends Handle_StepShape_HalfSpaceSolid {
    constructor(theHandle: Handle_StepShape_HalfSpaceSolid);
  }

  export declare class Handle_StepShape_HalfSpaceSolid_4 extends Handle_StepShape_HalfSpaceSolid {
    constructor(theHandle: Handle_StepShape_HalfSpaceSolid);
  }

export declare class Handle_StepShape_BoxedHalfSpace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_BoxedHalfSpace): void;
  get(): StepShape_BoxedHalfSpace;
}

  export declare class Handle_StepShape_BoxedHalfSpace_1 extends Handle_StepShape_BoxedHalfSpace {
    constructor();
  }

  export declare class Handle_StepShape_BoxedHalfSpace_2 extends Handle_StepShape_BoxedHalfSpace {
    constructor(thePtr: StepShape_BoxedHalfSpace);
  }

  export declare class Handle_StepShape_BoxedHalfSpace_3 extends Handle_StepShape_BoxedHalfSpace {
    constructor(theHandle: Handle_StepShape_BoxedHalfSpace);
  }

  export declare class Handle_StepShape_BoxedHalfSpace_4 extends Handle_StepShape_BoxedHalfSpace {
    constructor(theHandle: Handle_StepShape_BoxedHalfSpace);
  }

export declare class Handle_StepShape_HArray1OfOrientedClosedShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfOrientedClosedShell): void;
  get(): StepShape_HArray1OfOrientedClosedShell;
}

  export declare class Handle_StepShape_HArray1OfOrientedClosedShell_1 extends Handle_StepShape_HArray1OfOrientedClosedShell {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfOrientedClosedShell_2 extends Handle_StepShape_HArray1OfOrientedClosedShell {
    constructor(thePtr: StepShape_HArray1OfOrientedClosedShell);
  }

  export declare class Handle_StepShape_HArray1OfOrientedClosedShell_3 extends Handle_StepShape_HArray1OfOrientedClosedShell {
    constructor(theHandle: Handle_StepShape_HArray1OfOrientedClosedShell);
  }

  export declare class Handle_StepShape_HArray1OfOrientedClosedShell_4 extends Handle_StepShape_HArray1OfOrientedClosedShell {
    constructor(theHandle: Handle_StepShape_HArray1OfOrientedClosedShell);
  }

export declare class Handle_StepShape_SolidModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_SolidModel): void;
  get(): StepShape_SolidModel;
}

  export declare class Handle_StepShape_SolidModel_1 extends Handle_StepShape_SolidModel {
    constructor();
  }

  export declare class Handle_StepShape_SolidModel_2 extends Handle_StepShape_SolidModel {
    constructor(thePtr: StepShape_SolidModel);
  }

  export declare class Handle_StepShape_SolidModel_3 extends Handle_StepShape_SolidModel {
    constructor(theHandle: Handle_StepShape_SolidModel);
  }

  export declare class Handle_StepShape_SolidModel_4 extends Handle_StepShape_SolidModel {
    constructor(theHandle: Handle_StepShape_SolidModel);
  }

export declare class Handle_StepShape_ManifoldSolidBrep {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ManifoldSolidBrep): void;
  get(): StepShape_ManifoldSolidBrep;
}

  export declare class Handle_StepShape_ManifoldSolidBrep_1 extends Handle_StepShape_ManifoldSolidBrep {
    constructor();
  }

  export declare class Handle_StepShape_ManifoldSolidBrep_2 extends Handle_StepShape_ManifoldSolidBrep {
    constructor(thePtr: StepShape_ManifoldSolidBrep);
  }

  export declare class Handle_StepShape_ManifoldSolidBrep_3 extends Handle_StepShape_ManifoldSolidBrep {
    constructor(theHandle: Handle_StepShape_ManifoldSolidBrep);
  }

  export declare class Handle_StepShape_ManifoldSolidBrep_4 extends Handle_StepShape_ManifoldSolidBrep {
    constructor(theHandle: Handle_StepShape_ManifoldSolidBrep);
  }

export declare class Handle_StepShape_BrepWithVoids {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_BrepWithVoids): void;
  get(): StepShape_BrepWithVoids;
}

  export declare class Handle_StepShape_BrepWithVoids_1 extends Handle_StepShape_BrepWithVoids {
    constructor();
  }

  export declare class Handle_StepShape_BrepWithVoids_2 extends Handle_StepShape_BrepWithVoids {
    constructor(thePtr: StepShape_BrepWithVoids);
  }

  export declare class Handle_StepShape_BrepWithVoids_3 extends Handle_StepShape_BrepWithVoids {
    constructor(theHandle: Handle_StepShape_BrepWithVoids);
  }

  export declare class Handle_StepShape_BrepWithVoids_4 extends Handle_StepShape_BrepWithVoids {
    constructor(theHandle: Handle_StepShape_BrepWithVoids);
  }

export declare class Handle_StepShape_CompoundShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_CompoundShapeRepresentation): void;
  get(): StepShape_CompoundShapeRepresentation;
}

  export declare class Handle_StepShape_CompoundShapeRepresentation_1 extends Handle_StepShape_CompoundShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_CompoundShapeRepresentation_2 extends Handle_StepShape_CompoundShapeRepresentation {
    constructor(thePtr: StepShape_CompoundShapeRepresentation);
  }

  export declare class Handle_StepShape_CompoundShapeRepresentation_3 extends Handle_StepShape_CompoundShapeRepresentation {
    constructor(theHandle: Handle_StepShape_CompoundShapeRepresentation);
  }

  export declare class Handle_StepShape_CompoundShapeRepresentation_4 extends Handle_StepShape_CompoundShapeRepresentation {
    constructor(theHandle: Handle_StepShape_CompoundShapeRepresentation);
  }

export declare class Handle_StepShape_ConnectedFaceShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ConnectedFaceShapeRepresentation): void;
  get(): StepShape_ConnectedFaceShapeRepresentation;
}

  export declare class Handle_StepShape_ConnectedFaceShapeRepresentation_1 extends Handle_StepShape_ConnectedFaceShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_ConnectedFaceShapeRepresentation_2 extends Handle_StepShape_ConnectedFaceShapeRepresentation {
    constructor(thePtr: StepShape_ConnectedFaceShapeRepresentation);
  }

  export declare class Handle_StepShape_ConnectedFaceShapeRepresentation_3 extends Handle_StepShape_ConnectedFaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ConnectedFaceShapeRepresentation);
  }

  export declare class Handle_StepShape_ConnectedFaceShapeRepresentation_4 extends Handle_StepShape_ConnectedFaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ConnectedFaceShapeRepresentation);
  }

export declare class Handle_StepShape_ConnectedFaceSubSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ConnectedFaceSubSet): void;
  get(): StepShape_ConnectedFaceSubSet;
}

  export declare class Handle_StepShape_ConnectedFaceSubSet_1 extends Handle_StepShape_ConnectedFaceSubSet {
    constructor();
  }

  export declare class Handle_StepShape_ConnectedFaceSubSet_2 extends Handle_StepShape_ConnectedFaceSubSet {
    constructor(thePtr: StepShape_ConnectedFaceSubSet);
  }

  export declare class Handle_StepShape_ConnectedFaceSubSet_3 extends Handle_StepShape_ConnectedFaceSubSet {
    constructor(theHandle: Handle_StepShape_ConnectedFaceSubSet);
  }

  export declare class Handle_StepShape_ConnectedFaceSubSet_4 extends Handle_StepShape_ConnectedFaceSubSet {
    constructor(theHandle: Handle_StepShape_ConnectedFaceSubSet);
  }

export declare class Handle_StepShape_ContextDependentShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ContextDependentShapeRepresentation): void;
  get(): StepShape_ContextDependentShapeRepresentation;
}

  export declare class Handle_StepShape_ContextDependentShapeRepresentation_1 extends Handle_StepShape_ContextDependentShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_ContextDependentShapeRepresentation_2 extends Handle_StepShape_ContextDependentShapeRepresentation {
    constructor(thePtr: StepShape_ContextDependentShapeRepresentation);
  }

  export declare class Handle_StepShape_ContextDependentShapeRepresentation_3 extends Handle_StepShape_ContextDependentShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ContextDependentShapeRepresentation);
  }

  export declare class Handle_StepShape_ContextDependentShapeRepresentation_4 extends Handle_StepShape_ContextDependentShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ContextDependentShapeRepresentation);
  }

export declare class Handle_StepShape_CsgShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_CsgShapeRepresentation): void;
  get(): StepShape_CsgShapeRepresentation;
}

  export declare class Handle_StepShape_CsgShapeRepresentation_1 extends Handle_StepShape_CsgShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_CsgShapeRepresentation_2 extends Handle_StepShape_CsgShapeRepresentation {
    constructor(thePtr: StepShape_CsgShapeRepresentation);
  }

  export declare class Handle_StepShape_CsgShapeRepresentation_3 extends Handle_StepShape_CsgShapeRepresentation {
    constructor(theHandle: Handle_StepShape_CsgShapeRepresentation);
  }

  export declare class Handle_StepShape_CsgShapeRepresentation_4 extends Handle_StepShape_CsgShapeRepresentation {
    constructor(theHandle: Handle_StepShape_CsgShapeRepresentation);
  }

export declare class Handle_StepShape_CsgSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_CsgSolid): void;
  get(): StepShape_CsgSolid;
}

  export declare class Handle_StepShape_CsgSolid_1 extends Handle_StepShape_CsgSolid {
    constructor();
  }

  export declare class Handle_StepShape_CsgSolid_2 extends Handle_StepShape_CsgSolid {
    constructor(thePtr: StepShape_CsgSolid);
  }

  export declare class Handle_StepShape_CsgSolid_3 extends Handle_StepShape_CsgSolid {
    constructor(theHandle: Handle_StepShape_CsgSolid);
  }

  export declare class Handle_StepShape_CsgSolid_4 extends Handle_StepShape_CsgSolid {
    constructor(theHandle: Handle_StepShape_CsgSolid);
  }

export declare class Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_DefinitionalRepresentationAndShapeRepresentation): void;
  get(): StepShape_DefinitionalRepresentationAndShapeRepresentation;
}

  export declare class Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_1 extends Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_2 extends Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation {
    constructor(thePtr: StepShape_DefinitionalRepresentationAndShapeRepresentation);
  }

  export declare class Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_3 extends Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation {
    constructor(theHandle: Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation);
  }

  export declare class Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_4 extends Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation {
    constructor(theHandle: Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation);
  }

export declare class Handle_StepShape_DimensionalCharacteristicRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_DimensionalCharacteristicRepresentation): void;
  get(): StepShape_DimensionalCharacteristicRepresentation;
}

  export declare class Handle_StepShape_DimensionalCharacteristicRepresentation_1 extends Handle_StepShape_DimensionalCharacteristicRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_DimensionalCharacteristicRepresentation_2 extends Handle_StepShape_DimensionalCharacteristicRepresentation {
    constructor(thePtr: StepShape_DimensionalCharacteristicRepresentation);
  }

  export declare class Handle_StepShape_DimensionalCharacteristicRepresentation_3 extends Handle_StepShape_DimensionalCharacteristicRepresentation {
    constructor(theHandle: Handle_StepShape_DimensionalCharacteristicRepresentation);
  }

  export declare class Handle_StepShape_DimensionalCharacteristicRepresentation_4 extends Handle_StepShape_DimensionalCharacteristicRepresentation {
    constructor(theHandle: Handle_StepShape_DimensionalCharacteristicRepresentation);
  }

export declare class Handle_StepShape_DimensionalLocationWithPath {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_DimensionalLocationWithPath): void;
  get(): StepShape_DimensionalLocationWithPath;
}

  export declare class Handle_StepShape_DimensionalLocationWithPath_1 extends Handle_StepShape_DimensionalLocationWithPath {
    constructor();
  }

  export declare class Handle_StepShape_DimensionalLocationWithPath_2 extends Handle_StepShape_DimensionalLocationWithPath {
    constructor(thePtr: StepShape_DimensionalLocationWithPath);
  }

  export declare class Handle_StepShape_DimensionalLocationWithPath_3 extends Handle_StepShape_DimensionalLocationWithPath {
    constructor(theHandle: Handle_StepShape_DimensionalLocationWithPath);
  }

  export declare class Handle_StepShape_DimensionalLocationWithPath_4 extends Handle_StepShape_DimensionalLocationWithPath {
    constructor(theHandle: Handle_StepShape_DimensionalLocationWithPath);
  }

export declare class Handle_StepShape_DimensionalSizeWithPath {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_DimensionalSizeWithPath): void;
  get(): StepShape_DimensionalSizeWithPath;
}

  export declare class Handle_StepShape_DimensionalSizeWithPath_1 extends Handle_StepShape_DimensionalSizeWithPath {
    constructor();
  }

  export declare class Handle_StepShape_DimensionalSizeWithPath_2 extends Handle_StepShape_DimensionalSizeWithPath {
    constructor(thePtr: StepShape_DimensionalSizeWithPath);
  }

  export declare class Handle_StepShape_DimensionalSizeWithPath_3 extends Handle_StepShape_DimensionalSizeWithPath {
    constructor(theHandle: Handle_StepShape_DimensionalSizeWithPath);
  }

  export declare class Handle_StepShape_DimensionalSizeWithPath_4 extends Handle_StepShape_DimensionalSizeWithPath {
    constructor(theHandle: Handle_StepShape_DimensionalSizeWithPath);
  }

export declare class Handle_StepShape_DirectedDimensionalLocation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_DirectedDimensionalLocation): void;
  get(): StepShape_DirectedDimensionalLocation;
}

  export declare class Handle_StepShape_DirectedDimensionalLocation_1 extends Handle_StepShape_DirectedDimensionalLocation {
    constructor();
  }

  export declare class Handle_StepShape_DirectedDimensionalLocation_2 extends Handle_StepShape_DirectedDimensionalLocation {
    constructor(thePtr: StepShape_DirectedDimensionalLocation);
  }

  export declare class Handle_StepShape_DirectedDimensionalLocation_3 extends Handle_StepShape_DirectedDimensionalLocation {
    constructor(theHandle: Handle_StepShape_DirectedDimensionalLocation);
  }

  export declare class Handle_StepShape_DirectedDimensionalLocation_4 extends Handle_StepShape_DirectedDimensionalLocation {
    constructor(theHandle: Handle_StepShape_DirectedDimensionalLocation);
  }

export declare class Handle_StepShape_HArray1OfConnectedEdgeSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfConnectedEdgeSet): void;
  get(): StepShape_HArray1OfConnectedEdgeSet;
}

  export declare class Handle_StepShape_HArray1OfConnectedEdgeSet_1 extends Handle_StepShape_HArray1OfConnectedEdgeSet {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfConnectedEdgeSet_2 extends Handle_StepShape_HArray1OfConnectedEdgeSet {
    constructor(thePtr: StepShape_HArray1OfConnectedEdgeSet);
  }

  export declare class Handle_StepShape_HArray1OfConnectedEdgeSet_3 extends Handle_StepShape_HArray1OfConnectedEdgeSet {
    constructor(theHandle: Handle_StepShape_HArray1OfConnectedEdgeSet);
  }

  export declare class Handle_StepShape_HArray1OfConnectedEdgeSet_4 extends Handle_StepShape_HArray1OfConnectedEdgeSet {
    constructor(theHandle: Handle_StepShape_HArray1OfConnectedEdgeSet);
  }

export declare class Handle_StepShape_EdgeBasedWireframeModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_EdgeBasedWireframeModel): void;
  get(): StepShape_EdgeBasedWireframeModel;
}

  export declare class Handle_StepShape_EdgeBasedWireframeModel_1 extends Handle_StepShape_EdgeBasedWireframeModel {
    constructor();
  }

  export declare class Handle_StepShape_EdgeBasedWireframeModel_2 extends Handle_StepShape_EdgeBasedWireframeModel {
    constructor(thePtr: StepShape_EdgeBasedWireframeModel);
  }

  export declare class Handle_StepShape_EdgeBasedWireframeModel_3 extends Handle_StepShape_EdgeBasedWireframeModel {
    constructor(theHandle: Handle_StepShape_EdgeBasedWireframeModel);
  }

  export declare class Handle_StepShape_EdgeBasedWireframeModel_4 extends Handle_StepShape_EdgeBasedWireframeModel {
    constructor(theHandle: Handle_StepShape_EdgeBasedWireframeModel);
  }

export declare class Handle_StepShape_EdgeBasedWireframeShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_EdgeBasedWireframeShapeRepresentation): void;
  get(): StepShape_EdgeBasedWireframeShapeRepresentation;
}

  export declare class Handle_StepShape_EdgeBasedWireframeShapeRepresentation_1 extends Handle_StepShape_EdgeBasedWireframeShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_EdgeBasedWireframeShapeRepresentation_2 extends Handle_StepShape_EdgeBasedWireframeShapeRepresentation {
    constructor(thePtr: StepShape_EdgeBasedWireframeShapeRepresentation);
  }

  export declare class Handle_StepShape_EdgeBasedWireframeShapeRepresentation_3 extends Handle_StepShape_EdgeBasedWireframeShapeRepresentation {
    constructor(theHandle: Handle_StepShape_EdgeBasedWireframeShapeRepresentation);
  }

  export declare class Handle_StepShape_EdgeBasedWireframeShapeRepresentation_4 extends Handle_StepShape_EdgeBasedWireframeShapeRepresentation {
    constructor(theHandle: Handle_StepShape_EdgeBasedWireframeShapeRepresentation);
  }

export declare class Handle_StepShape_EdgeCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_EdgeCurve): void;
  get(): StepShape_EdgeCurve;
}

  export declare class Handle_StepShape_EdgeCurve_1 extends Handle_StepShape_EdgeCurve {
    constructor();
  }

  export declare class Handle_StepShape_EdgeCurve_2 extends Handle_StepShape_EdgeCurve {
    constructor(thePtr: StepShape_EdgeCurve);
  }

  export declare class Handle_StepShape_EdgeCurve_3 extends Handle_StepShape_EdgeCurve {
    constructor(theHandle: Handle_StepShape_EdgeCurve);
  }

  export declare class Handle_StepShape_EdgeCurve_4 extends Handle_StepShape_EdgeCurve {
    constructor(theHandle: Handle_StepShape_EdgeCurve);
  }

export declare class Handle_StepShape_HArray1OfOrientedEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfOrientedEdge): void;
  get(): StepShape_HArray1OfOrientedEdge;
}

  export declare class Handle_StepShape_HArray1OfOrientedEdge_1 extends Handle_StepShape_HArray1OfOrientedEdge {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfOrientedEdge_2 extends Handle_StepShape_HArray1OfOrientedEdge {
    constructor(thePtr: StepShape_HArray1OfOrientedEdge);
  }

  export declare class Handle_StepShape_HArray1OfOrientedEdge_3 extends Handle_StepShape_HArray1OfOrientedEdge {
    constructor(theHandle: Handle_StepShape_HArray1OfOrientedEdge);
  }

  export declare class Handle_StepShape_HArray1OfOrientedEdge_4 extends Handle_StepShape_HArray1OfOrientedEdge {
    constructor(theHandle: Handle_StepShape_HArray1OfOrientedEdge);
  }

export declare class Handle_StepShape_Loop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Loop): void;
  get(): StepShape_Loop;
}

  export declare class Handle_StepShape_Loop_1 extends Handle_StepShape_Loop {
    constructor();
  }

  export declare class Handle_StepShape_Loop_2 extends Handle_StepShape_Loop {
    constructor(thePtr: StepShape_Loop);
  }

  export declare class Handle_StepShape_Loop_3 extends Handle_StepShape_Loop {
    constructor(theHandle: Handle_StepShape_Loop);
  }

  export declare class Handle_StepShape_Loop_4 extends Handle_StepShape_Loop {
    constructor(theHandle: Handle_StepShape_Loop);
  }

export declare class Handle_StepShape_EdgeLoop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_EdgeLoop): void;
  get(): StepShape_EdgeLoop;
}

  export declare class Handle_StepShape_EdgeLoop_1 extends Handle_StepShape_EdgeLoop {
    constructor();
  }

  export declare class Handle_StepShape_EdgeLoop_2 extends Handle_StepShape_EdgeLoop {
    constructor(thePtr: StepShape_EdgeLoop);
  }

  export declare class Handle_StepShape_EdgeLoop_3 extends Handle_StepShape_EdgeLoop {
    constructor(theHandle: Handle_StepShape_EdgeLoop);
  }

  export declare class Handle_StepShape_EdgeLoop_4 extends Handle_StepShape_EdgeLoop {
    constructor(theHandle: Handle_StepShape_EdgeLoop);
  }

export declare class Handle_StepShape_SweptAreaSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_SweptAreaSolid): void;
  get(): StepShape_SweptAreaSolid;
}

  export declare class Handle_StepShape_SweptAreaSolid_1 extends Handle_StepShape_SweptAreaSolid {
    constructor();
  }

  export declare class Handle_StepShape_SweptAreaSolid_2 extends Handle_StepShape_SweptAreaSolid {
    constructor(thePtr: StepShape_SweptAreaSolid);
  }

  export declare class Handle_StepShape_SweptAreaSolid_3 extends Handle_StepShape_SweptAreaSolid {
    constructor(theHandle: Handle_StepShape_SweptAreaSolid);
  }

  export declare class Handle_StepShape_SweptAreaSolid_4 extends Handle_StepShape_SweptAreaSolid {
    constructor(theHandle: Handle_StepShape_SweptAreaSolid);
  }

export declare class Handle_StepShape_ExtrudedAreaSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ExtrudedAreaSolid): void;
  get(): StepShape_ExtrudedAreaSolid;
}

  export declare class Handle_StepShape_ExtrudedAreaSolid_1 extends Handle_StepShape_ExtrudedAreaSolid {
    constructor();
  }

  export declare class Handle_StepShape_ExtrudedAreaSolid_2 extends Handle_StepShape_ExtrudedAreaSolid {
    constructor(thePtr: StepShape_ExtrudedAreaSolid);
  }

  export declare class Handle_StepShape_ExtrudedAreaSolid_3 extends Handle_StepShape_ExtrudedAreaSolid {
    constructor(theHandle: Handle_StepShape_ExtrudedAreaSolid);
  }

  export declare class Handle_StepShape_ExtrudedAreaSolid_4 extends Handle_StepShape_ExtrudedAreaSolid {
    constructor(theHandle: Handle_StepShape_ExtrudedAreaSolid);
  }

export declare class Handle_StepShape_SweptFaceSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_SweptFaceSolid): void;
  get(): StepShape_SweptFaceSolid;
}

  export declare class Handle_StepShape_SweptFaceSolid_1 extends Handle_StepShape_SweptFaceSolid {
    constructor();
  }

  export declare class Handle_StepShape_SweptFaceSolid_2 extends Handle_StepShape_SweptFaceSolid {
    constructor(thePtr: StepShape_SweptFaceSolid);
  }

  export declare class Handle_StepShape_SweptFaceSolid_3 extends Handle_StepShape_SweptFaceSolid {
    constructor(theHandle: Handle_StepShape_SweptFaceSolid);
  }

  export declare class Handle_StepShape_SweptFaceSolid_4 extends Handle_StepShape_SweptFaceSolid {
    constructor(theHandle: Handle_StepShape_SweptFaceSolid);
  }

export declare class Handle_StepShape_ExtrudedFaceSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ExtrudedFaceSolid): void;
  get(): StepShape_ExtrudedFaceSolid;
}

  export declare class Handle_StepShape_ExtrudedFaceSolid_1 extends Handle_StepShape_ExtrudedFaceSolid {
    constructor();
  }

  export declare class Handle_StepShape_ExtrudedFaceSolid_2 extends Handle_StepShape_ExtrudedFaceSolid {
    constructor(thePtr: StepShape_ExtrudedFaceSolid);
  }

  export declare class Handle_StepShape_ExtrudedFaceSolid_3 extends Handle_StepShape_ExtrudedFaceSolid {
    constructor(theHandle: Handle_StepShape_ExtrudedFaceSolid);
  }

  export declare class Handle_StepShape_ExtrudedFaceSolid_4 extends Handle_StepShape_ExtrudedFaceSolid {
    constructor(theHandle: Handle_StepShape_ExtrudedFaceSolid);
  }

export declare class Handle_StepShape_HArray1OfConnectedFaceSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfConnectedFaceSet): void;
  get(): StepShape_HArray1OfConnectedFaceSet;
}

  export declare class Handle_StepShape_HArray1OfConnectedFaceSet_1 extends Handle_StepShape_HArray1OfConnectedFaceSet {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfConnectedFaceSet_2 extends Handle_StepShape_HArray1OfConnectedFaceSet {
    constructor(thePtr: StepShape_HArray1OfConnectedFaceSet);
  }

  export declare class Handle_StepShape_HArray1OfConnectedFaceSet_3 extends Handle_StepShape_HArray1OfConnectedFaceSet {
    constructor(theHandle: Handle_StepShape_HArray1OfConnectedFaceSet);
  }

  export declare class Handle_StepShape_HArray1OfConnectedFaceSet_4 extends Handle_StepShape_HArray1OfConnectedFaceSet {
    constructor(theHandle: Handle_StepShape_HArray1OfConnectedFaceSet);
  }

export declare class Handle_StepShape_FaceBasedSurfaceModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_FaceBasedSurfaceModel): void;
  get(): StepShape_FaceBasedSurfaceModel;
}

  export declare class Handle_StepShape_FaceBasedSurfaceModel_1 extends Handle_StepShape_FaceBasedSurfaceModel {
    constructor();
  }

  export declare class Handle_StepShape_FaceBasedSurfaceModel_2 extends Handle_StepShape_FaceBasedSurfaceModel {
    constructor(thePtr: StepShape_FaceBasedSurfaceModel);
  }

  export declare class Handle_StepShape_FaceBasedSurfaceModel_3 extends Handle_StepShape_FaceBasedSurfaceModel {
    constructor(theHandle: Handle_StepShape_FaceBasedSurfaceModel);
  }

  export declare class Handle_StepShape_FaceBasedSurfaceModel_4 extends Handle_StepShape_FaceBasedSurfaceModel {
    constructor(theHandle: Handle_StepShape_FaceBasedSurfaceModel);
  }

export declare class Handle_StepShape_FaceOuterBound {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_FaceOuterBound): void;
  get(): StepShape_FaceOuterBound;
}

  export declare class Handle_StepShape_FaceOuterBound_1 extends Handle_StepShape_FaceOuterBound {
    constructor();
  }

  export declare class Handle_StepShape_FaceOuterBound_2 extends Handle_StepShape_FaceOuterBound {
    constructor(thePtr: StepShape_FaceOuterBound);
  }

  export declare class Handle_StepShape_FaceOuterBound_3 extends Handle_StepShape_FaceOuterBound {
    constructor(theHandle: Handle_StepShape_FaceOuterBound);
  }

  export declare class Handle_StepShape_FaceOuterBound_4 extends Handle_StepShape_FaceOuterBound {
    constructor(theHandle: Handle_StepShape_FaceOuterBound);
  }

export declare class Handle_StepShape_FacetedBrep {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_FacetedBrep): void;
  get(): StepShape_FacetedBrep;
}

  export declare class Handle_StepShape_FacetedBrep_1 extends Handle_StepShape_FacetedBrep {
    constructor();
  }

  export declare class Handle_StepShape_FacetedBrep_2 extends Handle_StepShape_FacetedBrep {
    constructor(thePtr: StepShape_FacetedBrep);
  }

  export declare class Handle_StepShape_FacetedBrep_3 extends Handle_StepShape_FacetedBrep {
    constructor(theHandle: Handle_StepShape_FacetedBrep);
  }

  export declare class Handle_StepShape_FacetedBrep_4 extends Handle_StepShape_FacetedBrep {
    constructor(theHandle: Handle_StepShape_FacetedBrep);
  }

export declare class Handle_StepShape_FacetedBrepAndBrepWithVoids {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_FacetedBrepAndBrepWithVoids): void;
  get(): StepShape_FacetedBrepAndBrepWithVoids;
}

  export declare class Handle_StepShape_FacetedBrepAndBrepWithVoids_1 extends Handle_StepShape_FacetedBrepAndBrepWithVoids {
    constructor();
  }

  export declare class Handle_StepShape_FacetedBrepAndBrepWithVoids_2 extends Handle_StepShape_FacetedBrepAndBrepWithVoids {
    constructor(thePtr: StepShape_FacetedBrepAndBrepWithVoids);
  }

  export declare class Handle_StepShape_FacetedBrepAndBrepWithVoids_3 extends Handle_StepShape_FacetedBrepAndBrepWithVoids {
    constructor(theHandle: Handle_StepShape_FacetedBrepAndBrepWithVoids);
  }

  export declare class Handle_StepShape_FacetedBrepAndBrepWithVoids_4 extends Handle_StepShape_FacetedBrepAndBrepWithVoids {
    constructor(theHandle: Handle_StepShape_FacetedBrepAndBrepWithVoids);
  }

export declare class Handle_StepShape_FacetedBrepShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_FacetedBrepShapeRepresentation): void;
  get(): StepShape_FacetedBrepShapeRepresentation;
}

  export declare class Handle_StepShape_FacetedBrepShapeRepresentation_1 extends Handle_StepShape_FacetedBrepShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_FacetedBrepShapeRepresentation_2 extends Handle_StepShape_FacetedBrepShapeRepresentation {
    constructor(thePtr: StepShape_FacetedBrepShapeRepresentation);
  }

  export declare class Handle_StepShape_FacetedBrepShapeRepresentation_3 extends Handle_StepShape_FacetedBrepShapeRepresentation {
    constructor(theHandle: Handle_StepShape_FacetedBrepShapeRepresentation);
  }

  export declare class Handle_StepShape_FacetedBrepShapeRepresentation_4 extends Handle_StepShape_FacetedBrepShapeRepresentation {
    constructor(theHandle: Handle_StepShape_FacetedBrepShapeRepresentation);
  }

export declare class Handle_StepShape_HArray1OfGeometricSetSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfGeometricSetSelect): void;
  get(): StepShape_HArray1OfGeometricSetSelect;
}

  export declare class Handle_StepShape_HArray1OfGeometricSetSelect_1 extends Handle_StepShape_HArray1OfGeometricSetSelect {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfGeometricSetSelect_2 extends Handle_StepShape_HArray1OfGeometricSetSelect {
    constructor(thePtr: StepShape_HArray1OfGeometricSetSelect);
  }

  export declare class Handle_StepShape_HArray1OfGeometricSetSelect_3 extends Handle_StepShape_HArray1OfGeometricSetSelect {
    constructor(theHandle: Handle_StepShape_HArray1OfGeometricSetSelect);
  }

  export declare class Handle_StepShape_HArray1OfGeometricSetSelect_4 extends Handle_StepShape_HArray1OfGeometricSetSelect {
    constructor(theHandle: Handle_StepShape_HArray1OfGeometricSetSelect);
  }

export declare class Handle_StepShape_GeometricSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_GeometricSet): void;
  get(): StepShape_GeometricSet;
}

  export declare class Handle_StepShape_GeometricSet_1 extends Handle_StepShape_GeometricSet {
    constructor();
  }

  export declare class Handle_StepShape_GeometricSet_2 extends Handle_StepShape_GeometricSet {
    constructor(thePtr: StepShape_GeometricSet);
  }

  export declare class Handle_StepShape_GeometricSet_3 extends Handle_StepShape_GeometricSet {
    constructor(theHandle: Handle_StepShape_GeometricSet);
  }

  export declare class Handle_StepShape_GeometricSet_4 extends Handle_StepShape_GeometricSet {
    constructor(theHandle: Handle_StepShape_GeometricSet);
  }

export declare class Handle_StepShape_GeometricCurveSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_GeometricCurveSet): void;
  get(): StepShape_GeometricCurveSet;
}

  export declare class Handle_StepShape_GeometricCurveSet_1 extends Handle_StepShape_GeometricCurveSet {
    constructor();
  }

  export declare class Handle_StepShape_GeometricCurveSet_2 extends Handle_StepShape_GeometricCurveSet {
    constructor(thePtr: StepShape_GeometricCurveSet);
  }

  export declare class Handle_StepShape_GeometricCurveSet_3 extends Handle_StepShape_GeometricCurveSet {
    constructor(theHandle: Handle_StepShape_GeometricCurveSet);
  }

  export declare class Handle_StepShape_GeometricCurveSet_4 extends Handle_StepShape_GeometricCurveSet {
    constructor(theHandle: Handle_StepShape_GeometricCurveSet);
  }

export declare class Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_GeometricallyBoundedSurfaceShapeRepresentation): void;
  get(): StepShape_GeometricallyBoundedSurfaceShapeRepresentation;
}

  export declare class Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_1 extends Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_2 extends Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation {
    constructor(thePtr: StepShape_GeometricallyBoundedSurfaceShapeRepresentation);
  }

  export declare class Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_3 extends Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation);
  }

  export declare class Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_4 extends Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation);
  }

export declare class Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_GeometricallyBoundedWireframeShapeRepresentation): void;
  get(): StepShape_GeometricallyBoundedWireframeShapeRepresentation;
}

  export declare class Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_1 extends Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_2 extends Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation {
    constructor(thePtr: StepShape_GeometricallyBoundedWireframeShapeRepresentation);
  }

  export declare class Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_3 extends Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation {
    constructor(theHandle: Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation);
  }

  export declare class Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_4 extends Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation {
    constructor(theHandle: Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation);
  }

export declare class Handle_StepShape_HArray1OfShapeDimensionRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfShapeDimensionRepresentationItem): void;
  get(): StepShape_HArray1OfShapeDimensionRepresentationItem;
}

  export declare class Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_1 extends Handle_StepShape_HArray1OfShapeDimensionRepresentationItem {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_2 extends Handle_StepShape_HArray1OfShapeDimensionRepresentationItem {
    constructor(thePtr: StepShape_HArray1OfShapeDimensionRepresentationItem);
  }

  export declare class Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_3 extends Handle_StepShape_HArray1OfShapeDimensionRepresentationItem {
    constructor(theHandle: Handle_StepShape_HArray1OfShapeDimensionRepresentationItem);
  }

  export declare class Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_4 extends Handle_StepShape_HArray1OfShapeDimensionRepresentationItem {
    constructor(theHandle: Handle_StepShape_HArray1OfShapeDimensionRepresentationItem);
  }

export declare class Handle_StepShape_HArray1OfShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfShell): void;
  get(): StepShape_HArray1OfShell;
}

  export declare class Handle_StepShape_HArray1OfShell_1 extends Handle_StepShape_HArray1OfShell {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfShell_2 extends Handle_StepShape_HArray1OfShell {
    constructor(thePtr: StepShape_HArray1OfShell);
  }

  export declare class Handle_StepShape_HArray1OfShell_3 extends Handle_StepShape_HArray1OfShell {
    constructor(theHandle: Handle_StepShape_HArray1OfShell);
  }

  export declare class Handle_StepShape_HArray1OfShell_4 extends Handle_StepShape_HArray1OfShell {
    constructor(theHandle: Handle_StepShape_HArray1OfShell);
  }

export declare class Handle_StepShape_HArray1OfValueQualifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_HArray1OfValueQualifier): void;
  get(): StepShape_HArray1OfValueQualifier;
}

  export declare class Handle_StepShape_HArray1OfValueQualifier_1 extends Handle_StepShape_HArray1OfValueQualifier {
    constructor();
  }

  export declare class Handle_StepShape_HArray1OfValueQualifier_2 extends Handle_StepShape_HArray1OfValueQualifier {
    constructor(thePtr: StepShape_HArray1OfValueQualifier);
  }

  export declare class Handle_StepShape_HArray1OfValueQualifier_3 extends Handle_StepShape_HArray1OfValueQualifier {
    constructor(theHandle: Handle_StepShape_HArray1OfValueQualifier);
  }

  export declare class Handle_StepShape_HArray1OfValueQualifier_4 extends Handle_StepShape_HArray1OfValueQualifier {
    constructor(theHandle: Handle_StepShape_HArray1OfValueQualifier);
  }

export declare class Handle_StepShape_LoopAndPath {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_LoopAndPath): void;
  get(): StepShape_LoopAndPath;
}

  export declare class Handle_StepShape_LoopAndPath_1 extends Handle_StepShape_LoopAndPath {
    constructor();
  }

  export declare class Handle_StepShape_LoopAndPath_2 extends Handle_StepShape_LoopAndPath {
    constructor(thePtr: StepShape_LoopAndPath);
  }

  export declare class Handle_StepShape_LoopAndPath_3 extends Handle_StepShape_LoopAndPath {
    constructor(theHandle: Handle_StepShape_LoopAndPath);
  }

  export declare class Handle_StepShape_LoopAndPath_4 extends Handle_StepShape_LoopAndPath {
    constructor(theHandle: Handle_StepShape_LoopAndPath);
  }

export declare class Handle_StepShape_ManifoldSurfaceShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ManifoldSurfaceShapeRepresentation): void;
  get(): StepShape_ManifoldSurfaceShapeRepresentation;
}

  export declare class Handle_StepShape_ManifoldSurfaceShapeRepresentation_1 extends Handle_StepShape_ManifoldSurfaceShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_ManifoldSurfaceShapeRepresentation_2 extends Handle_StepShape_ManifoldSurfaceShapeRepresentation {
    constructor(thePtr: StepShape_ManifoldSurfaceShapeRepresentation);
  }

  export declare class Handle_StepShape_ManifoldSurfaceShapeRepresentation_3 extends Handle_StepShape_ManifoldSurfaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ManifoldSurfaceShapeRepresentation);
  }

  export declare class Handle_StepShape_ManifoldSurfaceShapeRepresentation_4 extends Handle_StepShape_ManifoldSurfaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_ManifoldSurfaceShapeRepresentation);
  }

export declare class Handle_StepShape_MeasureQualification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_MeasureQualification): void;
  get(): StepShape_MeasureQualification;
}

  export declare class Handle_StepShape_MeasureQualification_1 extends Handle_StepShape_MeasureQualification {
    constructor();
  }

  export declare class Handle_StepShape_MeasureQualification_2 extends Handle_StepShape_MeasureQualification {
    constructor(thePtr: StepShape_MeasureQualification);
  }

  export declare class Handle_StepShape_MeasureQualification_3 extends Handle_StepShape_MeasureQualification {
    constructor(theHandle: Handle_StepShape_MeasureQualification);
  }

  export declare class Handle_StepShape_MeasureQualification_4 extends Handle_StepShape_MeasureQualification {
    constructor(theHandle: Handle_StepShape_MeasureQualification);
  }

export declare class Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem): void;
  get(): StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem;
}

  export declare class Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_1 extends Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem {
    constructor();
  }

  export declare class Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_2 extends Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem {
    constructor(thePtr: StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem);
  }

  export declare class Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_3 extends Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem {
    constructor(theHandle: Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem);
  }

  export declare class Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_4 extends Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem {
    constructor(theHandle: Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem);
  }

export declare class Handle_StepShape_NonManifoldSurfaceShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_NonManifoldSurfaceShapeRepresentation): void;
  get(): StepShape_NonManifoldSurfaceShapeRepresentation;
}

  export declare class Handle_StepShape_NonManifoldSurfaceShapeRepresentation_1 extends Handle_StepShape_NonManifoldSurfaceShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_NonManifoldSurfaceShapeRepresentation_2 extends Handle_StepShape_NonManifoldSurfaceShapeRepresentation {
    constructor(thePtr: StepShape_NonManifoldSurfaceShapeRepresentation);
  }

  export declare class Handle_StepShape_NonManifoldSurfaceShapeRepresentation_3 extends Handle_StepShape_NonManifoldSurfaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_NonManifoldSurfaceShapeRepresentation);
  }

  export declare class Handle_StepShape_NonManifoldSurfaceShapeRepresentation_4 extends Handle_StepShape_NonManifoldSurfaceShapeRepresentation {
    constructor(theHandle: Handle_StepShape_NonManifoldSurfaceShapeRepresentation);
  }

export declare class Handle_StepShape_OpenShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_OpenShell): void;
  get(): StepShape_OpenShell;
}

  export declare class Handle_StepShape_OpenShell_1 extends Handle_StepShape_OpenShell {
    constructor();
  }

  export declare class Handle_StepShape_OpenShell_2 extends Handle_StepShape_OpenShell {
    constructor(thePtr: StepShape_OpenShell);
  }

  export declare class Handle_StepShape_OpenShell_3 extends Handle_StepShape_OpenShell {
    constructor(theHandle: Handle_StepShape_OpenShell);
  }

  export declare class Handle_StepShape_OpenShell_4 extends Handle_StepShape_OpenShell {
    constructor(theHandle: Handle_StepShape_OpenShell);
  }

export declare class Handle_StepShape_OrientedFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_OrientedFace): void;
  get(): StepShape_OrientedFace;
}

  export declare class Handle_StepShape_OrientedFace_1 extends Handle_StepShape_OrientedFace {
    constructor();
  }

  export declare class Handle_StepShape_OrientedFace_2 extends Handle_StepShape_OrientedFace {
    constructor(thePtr: StepShape_OrientedFace);
  }

  export declare class Handle_StepShape_OrientedFace_3 extends Handle_StepShape_OrientedFace {
    constructor(theHandle: Handle_StepShape_OrientedFace);
  }

  export declare class Handle_StepShape_OrientedFace_4 extends Handle_StepShape_OrientedFace {
    constructor(theHandle: Handle_StepShape_OrientedFace);
  }

export declare class Handle_StepShape_OrientedOpenShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_OrientedOpenShell): void;
  get(): StepShape_OrientedOpenShell;
}

  export declare class Handle_StepShape_OrientedOpenShell_1 extends Handle_StepShape_OrientedOpenShell {
    constructor();
  }

  export declare class Handle_StepShape_OrientedOpenShell_2 extends Handle_StepShape_OrientedOpenShell {
    constructor(thePtr: StepShape_OrientedOpenShell);
  }

  export declare class Handle_StepShape_OrientedOpenShell_3 extends Handle_StepShape_OrientedOpenShell {
    constructor(theHandle: Handle_StepShape_OrientedOpenShell);
  }

  export declare class Handle_StepShape_OrientedOpenShell_4 extends Handle_StepShape_OrientedOpenShell {
    constructor(theHandle: Handle_StepShape_OrientedOpenShell);
  }

export declare class Handle_StepShape_Path {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Path): void;
  get(): StepShape_Path;
}

  export declare class Handle_StepShape_Path_1 extends Handle_StepShape_Path {
    constructor();
  }

  export declare class Handle_StepShape_Path_2 extends Handle_StepShape_Path {
    constructor(thePtr: StepShape_Path);
  }

  export declare class Handle_StepShape_Path_3 extends Handle_StepShape_Path {
    constructor(theHandle: Handle_StepShape_Path);
  }

  export declare class Handle_StepShape_Path_4 extends Handle_StepShape_Path {
    constructor(theHandle: Handle_StepShape_Path);
  }

export declare class Handle_StepShape_OrientedPath {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_OrientedPath): void;
  get(): StepShape_OrientedPath;
}

  export declare class Handle_StepShape_OrientedPath_1 extends Handle_StepShape_OrientedPath {
    constructor();
  }

  export declare class Handle_StepShape_OrientedPath_2 extends Handle_StepShape_OrientedPath {
    constructor(thePtr: StepShape_OrientedPath);
  }

  export declare class Handle_StepShape_OrientedPath_3 extends Handle_StepShape_OrientedPath {
    constructor(theHandle: Handle_StepShape_OrientedPath);
  }

  export declare class Handle_StepShape_OrientedPath_4 extends Handle_StepShape_OrientedPath {
    constructor(theHandle: Handle_StepShape_OrientedPath);
  }

export declare class Handle_StepShape_PlusMinusTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_PlusMinusTolerance): void;
  get(): StepShape_PlusMinusTolerance;
}

  export declare class Handle_StepShape_PlusMinusTolerance_1 extends Handle_StepShape_PlusMinusTolerance {
    constructor();
  }

  export declare class Handle_StepShape_PlusMinusTolerance_2 extends Handle_StepShape_PlusMinusTolerance {
    constructor(thePtr: StepShape_PlusMinusTolerance);
  }

  export declare class Handle_StepShape_PlusMinusTolerance_3 extends Handle_StepShape_PlusMinusTolerance {
    constructor(theHandle: Handle_StepShape_PlusMinusTolerance);
  }

  export declare class Handle_StepShape_PlusMinusTolerance_4 extends Handle_StepShape_PlusMinusTolerance {
    constructor(theHandle: Handle_StepShape_PlusMinusTolerance);
  }

export declare class Handle_StepShape_PointRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_PointRepresentation): void;
  get(): StepShape_PointRepresentation;
}

  export declare class Handle_StepShape_PointRepresentation_1 extends Handle_StepShape_PointRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_PointRepresentation_2 extends Handle_StepShape_PointRepresentation {
    constructor(thePtr: StepShape_PointRepresentation);
  }

  export declare class Handle_StepShape_PointRepresentation_3 extends Handle_StepShape_PointRepresentation {
    constructor(theHandle: Handle_StepShape_PointRepresentation);
  }

  export declare class Handle_StepShape_PointRepresentation_4 extends Handle_StepShape_PointRepresentation {
    constructor(theHandle: Handle_StepShape_PointRepresentation);
  }

export declare class Handle_StepShape_PolyLoop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_PolyLoop): void;
  get(): StepShape_PolyLoop;
}

  export declare class Handle_StepShape_PolyLoop_1 extends Handle_StepShape_PolyLoop {
    constructor();
  }

  export declare class Handle_StepShape_PolyLoop_2 extends Handle_StepShape_PolyLoop {
    constructor(thePtr: StepShape_PolyLoop);
  }

  export declare class Handle_StepShape_PolyLoop_3 extends Handle_StepShape_PolyLoop {
    constructor(theHandle: Handle_StepShape_PolyLoop);
  }

  export declare class Handle_StepShape_PolyLoop_4 extends Handle_StepShape_PolyLoop {
    constructor(theHandle: Handle_StepShape_PolyLoop);
  }

export declare class Handle_StepShape_PrecisionQualifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_PrecisionQualifier): void;
  get(): StepShape_PrecisionQualifier;
}

  export declare class Handle_StepShape_PrecisionQualifier_1 extends Handle_StepShape_PrecisionQualifier {
    constructor();
  }

  export declare class Handle_StepShape_PrecisionQualifier_2 extends Handle_StepShape_PrecisionQualifier {
    constructor(thePtr: StepShape_PrecisionQualifier);
  }

  export declare class Handle_StepShape_PrecisionQualifier_3 extends Handle_StepShape_PrecisionQualifier {
    constructor(theHandle: Handle_StepShape_PrecisionQualifier);
  }

  export declare class Handle_StepShape_PrecisionQualifier_4 extends Handle_StepShape_PrecisionQualifier {
    constructor(theHandle: Handle_StepShape_PrecisionQualifier);
  }

export declare class Handle_StepShape_QualifiedRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_QualifiedRepresentationItem): void;
  get(): StepShape_QualifiedRepresentationItem;
}

  export declare class Handle_StepShape_QualifiedRepresentationItem_1 extends Handle_StepShape_QualifiedRepresentationItem {
    constructor();
  }

  export declare class Handle_StepShape_QualifiedRepresentationItem_2 extends Handle_StepShape_QualifiedRepresentationItem {
    constructor(thePtr: StepShape_QualifiedRepresentationItem);
  }

  export declare class Handle_StepShape_QualifiedRepresentationItem_3 extends Handle_StepShape_QualifiedRepresentationItem {
    constructor(theHandle: Handle_StepShape_QualifiedRepresentationItem);
  }

  export declare class Handle_StepShape_QualifiedRepresentationItem_4 extends Handle_StepShape_QualifiedRepresentationItem {
    constructor(theHandle: Handle_StepShape_QualifiedRepresentationItem);
  }

export declare class Handle_StepShape_RevolvedAreaSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_RevolvedAreaSolid): void;
  get(): StepShape_RevolvedAreaSolid;
}

  export declare class Handle_StepShape_RevolvedAreaSolid_1 extends Handle_StepShape_RevolvedAreaSolid {
    constructor();
  }

  export declare class Handle_StepShape_RevolvedAreaSolid_2 extends Handle_StepShape_RevolvedAreaSolid {
    constructor(thePtr: StepShape_RevolvedAreaSolid);
  }

  export declare class Handle_StepShape_RevolvedAreaSolid_3 extends Handle_StepShape_RevolvedAreaSolid {
    constructor(theHandle: Handle_StepShape_RevolvedAreaSolid);
  }

  export declare class Handle_StepShape_RevolvedAreaSolid_4 extends Handle_StepShape_RevolvedAreaSolid {
    constructor(theHandle: Handle_StepShape_RevolvedAreaSolid);
  }

export declare class Handle_StepShape_RevolvedFaceSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_RevolvedFaceSolid): void;
  get(): StepShape_RevolvedFaceSolid;
}

  export declare class Handle_StepShape_RevolvedFaceSolid_1 extends Handle_StepShape_RevolvedFaceSolid {
    constructor();
  }

  export declare class Handle_StepShape_RevolvedFaceSolid_2 extends Handle_StepShape_RevolvedFaceSolid {
    constructor(thePtr: StepShape_RevolvedFaceSolid);
  }

  export declare class Handle_StepShape_RevolvedFaceSolid_3 extends Handle_StepShape_RevolvedFaceSolid {
    constructor(theHandle: Handle_StepShape_RevolvedFaceSolid);
  }

  export declare class Handle_StepShape_RevolvedFaceSolid_4 extends Handle_StepShape_RevolvedFaceSolid {
    constructor(theHandle: Handle_StepShape_RevolvedFaceSolid);
  }

export declare class Handle_StepShape_RightAngularWedge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_RightAngularWedge): void;
  get(): StepShape_RightAngularWedge;
}

  export declare class Handle_StepShape_RightAngularWedge_1 extends Handle_StepShape_RightAngularWedge {
    constructor();
  }

  export declare class Handle_StepShape_RightAngularWedge_2 extends Handle_StepShape_RightAngularWedge {
    constructor(thePtr: StepShape_RightAngularWedge);
  }

  export declare class Handle_StepShape_RightAngularWedge_3 extends Handle_StepShape_RightAngularWedge {
    constructor(theHandle: Handle_StepShape_RightAngularWedge);
  }

  export declare class Handle_StepShape_RightAngularWedge_4 extends Handle_StepShape_RightAngularWedge {
    constructor(theHandle: Handle_StepShape_RightAngularWedge);
  }

export declare class Handle_StepShape_RightCircularCone {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_RightCircularCone): void;
  get(): StepShape_RightCircularCone;
}

  export declare class Handle_StepShape_RightCircularCone_1 extends Handle_StepShape_RightCircularCone {
    constructor();
  }

  export declare class Handle_StepShape_RightCircularCone_2 extends Handle_StepShape_RightCircularCone {
    constructor(thePtr: StepShape_RightCircularCone);
  }

  export declare class Handle_StepShape_RightCircularCone_3 extends Handle_StepShape_RightCircularCone {
    constructor(theHandle: Handle_StepShape_RightCircularCone);
  }

  export declare class Handle_StepShape_RightCircularCone_4 extends Handle_StepShape_RightCircularCone {
    constructor(theHandle: Handle_StepShape_RightCircularCone);
  }

export declare class Handle_StepShape_RightCircularCylinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_RightCircularCylinder): void;
  get(): StepShape_RightCircularCylinder;
}

  export declare class Handle_StepShape_RightCircularCylinder_1 extends Handle_StepShape_RightCircularCylinder {
    constructor();
  }

  export declare class Handle_StepShape_RightCircularCylinder_2 extends Handle_StepShape_RightCircularCylinder {
    constructor(thePtr: StepShape_RightCircularCylinder);
  }

  export declare class Handle_StepShape_RightCircularCylinder_3 extends Handle_StepShape_RightCircularCylinder {
    constructor(theHandle: Handle_StepShape_RightCircularCylinder);
  }

  export declare class Handle_StepShape_RightCircularCylinder_4 extends Handle_StepShape_RightCircularCylinder {
    constructor(theHandle: Handle_StepShape_RightCircularCylinder);
  }

export declare class Handle_StepShape_SeamEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_SeamEdge): void;
  get(): StepShape_SeamEdge;
}

  export declare class Handle_StepShape_SeamEdge_1 extends Handle_StepShape_SeamEdge {
    constructor();
  }

  export declare class Handle_StepShape_SeamEdge_2 extends Handle_StepShape_SeamEdge {
    constructor(thePtr: StepShape_SeamEdge);
  }

  export declare class Handle_StepShape_SeamEdge_3 extends Handle_StepShape_SeamEdge {
    constructor(theHandle: Handle_StepShape_SeamEdge);
  }

  export declare class Handle_StepShape_SeamEdge_4 extends Handle_StepShape_SeamEdge {
    constructor(theHandle: Handle_StepShape_SeamEdge);
  }

export declare class Handle_StepShape_ShapeDimensionRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ShapeDimensionRepresentation): void;
  get(): StepShape_ShapeDimensionRepresentation;
}

  export declare class Handle_StepShape_ShapeDimensionRepresentation_1 extends Handle_StepShape_ShapeDimensionRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_ShapeDimensionRepresentation_2 extends Handle_StepShape_ShapeDimensionRepresentation {
    constructor(thePtr: StepShape_ShapeDimensionRepresentation);
  }

  export declare class Handle_StepShape_ShapeDimensionRepresentation_3 extends Handle_StepShape_ShapeDimensionRepresentation {
    constructor(theHandle: Handle_StepShape_ShapeDimensionRepresentation);
  }

  export declare class Handle_StepShape_ShapeDimensionRepresentation_4 extends Handle_StepShape_ShapeDimensionRepresentation {
    constructor(theHandle: Handle_StepShape_ShapeDimensionRepresentation);
  }

export declare class Handle_StepShape_ShapeRepresentationWithParameters {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ShapeRepresentationWithParameters): void;
  get(): StepShape_ShapeRepresentationWithParameters;
}

  export declare class Handle_StepShape_ShapeRepresentationWithParameters_1 extends Handle_StepShape_ShapeRepresentationWithParameters {
    constructor();
  }

  export declare class Handle_StepShape_ShapeRepresentationWithParameters_2 extends Handle_StepShape_ShapeRepresentationWithParameters {
    constructor(thePtr: StepShape_ShapeRepresentationWithParameters);
  }

  export declare class Handle_StepShape_ShapeRepresentationWithParameters_3 extends Handle_StepShape_ShapeRepresentationWithParameters {
    constructor(theHandle: Handle_StepShape_ShapeRepresentationWithParameters);
  }

  export declare class Handle_StepShape_ShapeRepresentationWithParameters_4 extends Handle_StepShape_ShapeRepresentationWithParameters {
    constructor(theHandle: Handle_StepShape_ShapeRepresentationWithParameters);
  }

export declare class Handle_StepShape_ShellBasedSurfaceModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ShellBasedSurfaceModel): void;
  get(): StepShape_ShellBasedSurfaceModel;
}

  export declare class Handle_StepShape_ShellBasedSurfaceModel_1 extends Handle_StepShape_ShellBasedSurfaceModel {
    constructor();
  }

  export declare class Handle_StepShape_ShellBasedSurfaceModel_2 extends Handle_StepShape_ShellBasedSurfaceModel {
    constructor(thePtr: StepShape_ShellBasedSurfaceModel);
  }

  export declare class Handle_StepShape_ShellBasedSurfaceModel_3 extends Handle_StepShape_ShellBasedSurfaceModel {
    constructor(theHandle: Handle_StepShape_ShellBasedSurfaceModel);
  }

  export declare class Handle_StepShape_ShellBasedSurfaceModel_4 extends Handle_StepShape_ShellBasedSurfaceModel {
    constructor(theHandle: Handle_StepShape_ShellBasedSurfaceModel);
  }

export declare class Handle_StepShape_SolidReplica {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_SolidReplica): void;
  get(): StepShape_SolidReplica;
}

  export declare class Handle_StepShape_SolidReplica_1 extends Handle_StepShape_SolidReplica {
    constructor();
  }

  export declare class Handle_StepShape_SolidReplica_2 extends Handle_StepShape_SolidReplica {
    constructor(thePtr: StepShape_SolidReplica);
  }

  export declare class Handle_StepShape_SolidReplica_3 extends Handle_StepShape_SolidReplica {
    constructor(theHandle: Handle_StepShape_SolidReplica);
  }

  export declare class Handle_StepShape_SolidReplica_4 extends Handle_StepShape_SolidReplica {
    constructor(theHandle: Handle_StepShape_SolidReplica);
  }

export declare class Handle_StepShape_Sphere {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Sphere): void;
  get(): StepShape_Sphere;
}

  export declare class Handle_StepShape_Sphere_1 extends Handle_StepShape_Sphere {
    constructor();
  }

  export declare class Handle_StepShape_Sphere_2 extends Handle_StepShape_Sphere {
    constructor(thePtr: StepShape_Sphere);
  }

  export declare class Handle_StepShape_Sphere_3 extends Handle_StepShape_Sphere {
    constructor(theHandle: Handle_StepShape_Sphere);
  }

  export declare class Handle_StepShape_Sphere_4 extends Handle_StepShape_Sphere {
    constructor(theHandle: Handle_StepShape_Sphere);
  }

export declare class Handle_StepShape_Subedge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Subedge): void;
  get(): StepShape_Subedge;
}

  export declare class Handle_StepShape_Subedge_1 extends Handle_StepShape_Subedge {
    constructor();
  }

  export declare class Handle_StepShape_Subedge_2 extends Handle_StepShape_Subedge {
    constructor(thePtr: StepShape_Subedge);
  }

  export declare class Handle_StepShape_Subedge_3 extends Handle_StepShape_Subedge {
    constructor(theHandle: Handle_StepShape_Subedge);
  }

  export declare class Handle_StepShape_Subedge_4 extends Handle_StepShape_Subedge {
    constructor(theHandle: Handle_StepShape_Subedge);
  }

export declare class Handle_StepShape_Subface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Subface): void;
  get(): StepShape_Subface;
}

  export declare class Handle_StepShape_Subface_1 extends Handle_StepShape_Subface {
    constructor();
  }

  export declare class Handle_StepShape_Subface_2 extends Handle_StepShape_Subface {
    constructor(thePtr: StepShape_Subface);
  }

  export declare class Handle_StepShape_Subface_3 extends Handle_StepShape_Subface {
    constructor(theHandle: Handle_StepShape_Subface);
  }

  export declare class Handle_StepShape_Subface_4 extends Handle_StepShape_Subface {
    constructor(theHandle: Handle_StepShape_Subface);
  }

export declare class Handle_StepShape_ToleranceValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ToleranceValue): void;
  get(): StepShape_ToleranceValue;
}

  export declare class Handle_StepShape_ToleranceValue_1 extends Handle_StepShape_ToleranceValue {
    constructor();
  }

  export declare class Handle_StepShape_ToleranceValue_2 extends Handle_StepShape_ToleranceValue {
    constructor(thePtr: StepShape_ToleranceValue);
  }

  export declare class Handle_StepShape_ToleranceValue_3 extends Handle_StepShape_ToleranceValue {
    constructor(theHandle: Handle_StepShape_ToleranceValue);
  }

  export declare class Handle_StepShape_ToleranceValue_4 extends Handle_StepShape_ToleranceValue {
    constructor(theHandle: Handle_StepShape_ToleranceValue);
  }

export declare class Handle_StepShape_Torus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_Torus): void;
  get(): StepShape_Torus;
}

  export declare class Handle_StepShape_Torus_1 extends Handle_StepShape_Torus {
    constructor();
  }

  export declare class Handle_StepShape_Torus_2 extends Handle_StepShape_Torus {
    constructor(thePtr: StepShape_Torus);
  }

  export declare class Handle_StepShape_Torus_3 extends Handle_StepShape_Torus {
    constructor(theHandle: Handle_StepShape_Torus);
  }

  export declare class Handle_StepShape_Torus_4 extends Handle_StepShape_Torus {
    constructor(theHandle: Handle_StepShape_Torus);
  }

export declare class Handle_StepShape_TransitionalShapeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_TransitionalShapeRepresentation): void;
  get(): StepShape_TransitionalShapeRepresentation;
}

  export declare class Handle_StepShape_TransitionalShapeRepresentation_1 extends Handle_StepShape_TransitionalShapeRepresentation {
    constructor();
  }

  export declare class Handle_StepShape_TransitionalShapeRepresentation_2 extends Handle_StepShape_TransitionalShapeRepresentation {
    constructor(thePtr: StepShape_TransitionalShapeRepresentation);
  }

  export declare class Handle_StepShape_TransitionalShapeRepresentation_3 extends Handle_StepShape_TransitionalShapeRepresentation {
    constructor(theHandle: Handle_StepShape_TransitionalShapeRepresentation);
  }

  export declare class Handle_StepShape_TransitionalShapeRepresentation_4 extends Handle_StepShape_TransitionalShapeRepresentation {
    constructor(theHandle: Handle_StepShape_TransitionalShapeRepresentation);
  }

export declare class Handle_StepShape_TypeQualifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_TypeQualifier): void;
  get(): StepShape_TypeQualifier;
}

  export declare class Handle_StepShape_TypeQualifier_1 extends Handle_StepShape_TypeQualifier {
    constructor();
  }

  export declare class Handle_StepShape_TypeQualifier_2 extends Handle_StepShape_TypeQualifier {
    constructor(thePtr: StepShape_TypeQualifier);
  }

  export declare class Handle_StepShape_TypeQualifier_3 extends Handle_StepShape_TypeQualifier {
    constructor(theHandle: Handle_StepShape_TypeQualifier);
  }

  export declare class Handle_StepShape_TypeQualifier_4 extends Handle_StepShape_TypeQualifier {
    constructor(theHandle: Handle_StepShape_TypeQualifier);
  }

export declare class Handle_StepShape_ValueFormatTypeQualifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_ValueFormatTypeQualifier): void;
  get(): StepShape_ValueFormatTypeQualifier;
}

  export declare class Handle_StepShape_ValueFormatTypeQualifier_1 extends Handle_StepShape_ValueFormatTypeQualifier {
    constructor();
  }

  export declare class Handle_StepShape_ValueFormatTypeQualifier_2 extends Handle_StepShape_ValueFormatTypeQualifier {
    constructor(thePtr: StepShape_ValueFormatTypeQualifier);
  }

  export declare class Handle_StepShape_ValueFormatTypeQualifier_3 extends Handle_StepShape_ValueFormatTypeQualifier {
    constructor(theHandle: Handle_StepShape_ValueFormatTypeQualifier);
  }

  export declare class Handle_StepShape_ValueFormatTypeQualifier_4 extends Handle_StepShape_ValueFormatTypeQualifier {
    constructor(theHandle: Handle_StepShape_ValueFormatTypeQualifier);
  }

export declare class Handle_StepShape_VertexLoop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_VertexLoop): void;
  get(): StepShape_VertexLoop;
}

  export declare class Handle_StepShape_VertexLoop_1 extends Handle_StepShape_VertexLoop {
    constructor();
  }

  export declare class Handle_StepShape_VertexLoop_2 extends Handle_StepShape_VertexLoop {
    constructor(thePtr: StepShape_VertexLoop);
  }

  export declare class Handle_StepShape_VertexLoop_3 extends Handle_StepShape_VertexLoop {
    constructor(theHandle: Handle_StepShape_VertexLoop);
  }

  export declare class Handle_StepShape_VertexLoop_4 extends Handle_StepShape_VertexLoop {
    constructor(theHandle: Handle_StepShape_VertexLoop);
  }

export declare class Handle_StepShape_VertexPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepShape_VertexPoint): void;
  get(): StepShape_VertexPoint;
}

  export declare class Handle_StepShape_VertexPoint_1 extends Handle_StepShape_VertexPoint {
    constructor();
  }

  export declare class Handle_StepShape_VertexPoint_2 extends Handle_StepShape_VertexPoint {
    constructor(thePtr: StepShape_VertexPoint);
  }

  export declare class Handle_StepShape_VertexPoint_3 extends Handle_StepShape_VertexPoint {
    constructor(theHandle: Handle_StepShape_VertexPoint);
  }

  export declare class Handle_StepShape_VertexPoint_4 extends Handle_StepShape_VertexPoint {
    constructor(theHandle: Handle_StepShape_VertexPoint);
  }

export declare type StepBasic_SiPrefix = {
  StepBasic_spExa: {};
  StepBasic_spPeta: {};
  StepBasic_spTera: {};
  StepBasic_spGiga: {};
  StepBasic_spMega: {};
  StepBasic_spKilo: {};
  StepBasic_spHecto: {};
  StepBasic_spDeca: {};
  StepBasic_spDeci: {};
  StepBasic_spCenti: {};
  StepBasic_spMilli: {};
  StepBasic_spMicro: {};
  StepBasic_spNano: {};
  StepBasic_spPico: {};
  StepBasic_spFemto: {};
  StepBasic_spAtto: {};
}

export declare type StepBasic_SiUnitName = {
  StepBasic_sunMetre: {};
  StepBasic_sunGram: {};
  StepBasic_sunSecond: {};
  StepBasic_sunAmpere: {};
  StepBasic_sunKelvin: {};
  StepBasic_sunMole: {};
  StepBasic_sunCandela: {};
  StepBasic_sunRadian: {};
  StepBasic_sunSteradian: {};
  StepBasic_sunHertz: {};
  StepBasic_sunNewton: {};
  StepBasic_sunPascal: {};
  StepBasic_sunJoule: {};
  StepBasic_sunWatt: {};
  StepBasic_sunCoulomb: {};
  StepBasic_sunVolt: {};
  StepBasic_sunFarad: {};
  StepBasic_sunOhm: {};
  StepBasic_sunSiemens: {};
  StepBasic_sunWeber: {};
  StepBasic_sunTesla: {};
  StepBasic_sunHenry: {};
  StepBasic_sunDegreeCelsius: {};
  StepBasic_sunLumen: {};
  StepBasic_sunLux: {};
  StepBasic_sunBecquerel: {};
  StepBasic_sunGray: {};
  StepBasic_sunSievert: {};
}

export declare type StepBasic_AheadOrBehind = {
  StepBasic_aobAhead: {};
  StepBasic_aobExact: {};
  StepBasic_aobBehind: {};
}

export declare type StepBasic_Source = {
  StepBasic_sMade: {};
  StepBasic_sBought: {};
  StepBasic_sNotKnown: {};
}

export declare type StepGeom_TransitionCode = {
  StepGeom_tcDiscontinuous: {};
  StepGeom_tcContinuous: {};
  StepGeom_tcContSameGradient: {};
  StepGeom_tcContSameGradientSameCurvature: {};
}

export declare type StepGeom_BSplineCurveForm = {
  StepGeom_bscfPolylineForm: {};
  StepGeom_bscfCircularArc: {};
  StepGeom_bscfEllipticArc: {};
  StepGeom_bscfParabolicArc: {};
  StepGeom_bscfHyperbolicArc: {};
  StepGeom_bscfUnspecified: {};
}

export declare type StepGeom_KnotType = {
  StepGeom_ktUniformKnots: {};
  StepGeom_ktUnspecified: {};
  StepGeom_ktQuasiUniformKnots: {};
  StepGeom_ktPiecewiseBezierKnots: {};
}

export declare type StepGeom_BSplineSurfaceForm = {
  StepGeom_bssfPlaneSurf: {};
  StepGeom_bssfCylindricalSurf: {};
  StepGeom_bssfConicalSurf: {};
  StepGeom_bssfSphericalSurf: {};
  StepGeom_bssfToroidalSurf: {};
  StepGeom_bssfSurfOfRevolution: {};
  StepGeom_bssfRuledSurf: {};
  StepGeom_bssfGeneralisedCone: {};
  StepGeom_bssfQuadricSurf: {};
  StepGeom_bssfSurfOfLinearExtrusion: {};
  StepGeom_bssfUnspecified: {};
}

export declare type StepGeom_PreferredSurfaceCurveRepresentation = {
  StepGeom_pscrCurve3d: {};
  StepGeom_pscrPcurveS1: {};
  StepGeom_pscrPcurveS2: {};
}

export declare type StepGeom_TrimmingPreference = {
  StepGeom_tpCartesian: {};
  StepGeom_tpParameter: {};
  StepGeom_tpUnspecified: {};
}

export declare type StepShape_AngleRelator = {
  StepShape_Equal: {};
  StepShape_Large: {};
  StepShape_Small: {};
}

export declare type StepShape_BooleanOperator = {
  StepShape_boDifference: {};
  StepShape_boIntersection: {};
  StepShape_boUnion: {};
}

export declare type TKSTEPBaseLib = {
  RWStepBasic_RWAction: typeof RWStepBasic_RWAction;
  RWStepBasic_RWActionAssignment: typeof RWStepBasic_RWActionAssignment;
  RWStepBasic_RWActionMethod: typeof RWStepBasic_RWActionMethod;
  RWStepBasic_RWActionRequestAssignment: typeof RWStepBasic_RWActionRequestAssignment;
  RWStepBasic_RWActionRequestSolution: typeof RWStepBasic_RWActionRequestSolution;
  RWStepBasic_RWAddress: typeof RWStepBasic_RWAddress;
  RWStepBasic_RWApplicationContext: typeof RWStepBasic_RWApplicationContext;
  RWStepBasic_RWApplicationContextElement: typeof RWStepBasic_RWApplicationContextElement;
  RWStepBasic_RWApplicationProtocolDefinition: typeof RWStepBasic_RWApplicationProtocolDefinition;
  RWStepBasic_RWApproval: typeof RWStepBasic_RWApproval;
  RWStepBasic_RWApprovalDateTime: typeof RWStepBasic_RWApprovalDateTime;
  RWStepBasic_RWApprovalPersonOrganization: typeof RWStepBasic_RWApprovalPersonOrganization;
  RWStepBasic_RWApprovalRelationship: typeof RWStepBasic_RWApprovalRelationship;
  RWStepBasic_RWApprovalRole: typeof RWStepBasic_RWApprovalRole;
  RWStepBasic_RWApprovalStatus: typeof RWStepBasic_RWApprovalStatus;
  RWStepBasic_RWCalendarDate: typeof RWStepBasic_RWCalendarDate;
  RWStepBasic_RWCertification: typeof RWStepBasic_RWCertification;
  RWStepBasic_RWCertificationAssignment: typeof RWStepBasic_RWCertificationAssignment;
  RWStepBasic_RWCertificationType: typeof RWStepBasic_RWCertificationType;
  RWStepBasic_RWCharacterizedObject: typeof RWStepBasic_RWCharacterizedObject;
  RWStepBasic_RWContract: typeof RWStepBasic_RWContract;
  RWStepBasic_RWContractAssignment: typeof RWStepBasic_RWContractAssignment;
  RWStepBasic_RWContractType: typeof RWStepBasic_RWContractType;
  RWStepBasic_RWConversionBasedUnit: typeof RWStepBasic_RWConversionBasedUnit;
  RWStepBasic_RWConversionBasedUnitAndAreaUnit: typeof RWStepBasic_RWConversionBasedUnitAndAreaUnit;
  RWStepBasic_RWConversionBasedUnitAndLengthUnit: typeof RWStepBasic_RWConversionBasedUnitAndLengthUnit;
  RWStepBasic_RWConversionBasedUnitAndMassUnit: typeof RWStepBasic_RWConversionBasedUnitAndMassUnit;
  RWStepBasic_RWConversionBasedUnitAndPlaneAngleUnit: typeof RWStepBasic_RWConversionBasedUnitAndPlaneAngleUnit;
  RWStepBasic_RWConversionBasedUnitAndRatioUnit: typeof RWStepBasic_RWConversionBasedUnitAndRatioUnit;
  RWStepBasic_RWConversionBasedUnitAndSolidAngleUnit: typeof RWStepBasic_RWConversionBasedUnitAndSolidAngleUnit;
  RWStepBasic_RWConversionBasedUnitAndTimeUnit: typeof RWStepBasic_RWConversionBasedUnitAndTimeUnit;
  RWStepBasic_RWConversionBasedUnitAndVolumeUnit: typeof RWStepBasic_RWConversionBasedUnitAndVolumeUnit;
  RWStepBasic_RWCoordinatedUniversalTimeOffset: typeof RWStepBasic_RWCoordinatedUniversalTimeOffset;
  RWStepBasic_RWDate: typeof RWStepBasic_RWDate;
  RWStepBasic_RWDateAndTime: typeof RWStepBasic_RWDateAndTime;
  RWStepBasic_RWDateRole: typeof RWStepBasic_RWDateRole;
  RWStepBasic_RWDateTimeRole: typeof RWStepBasic_RWDateTimeRole;
  RWStepBasic_RWDerivedUnit: typeof RWStepBasic_RWDerivedUnit;
  RWStepBasic_RWDerivedUnitElement: typeof RWStepBasic_RWDerivedUnitElement;
  RWStepBasic_RWDimensionalExponents: typeof RWStepBasic_RWDimensionalExponents;
  RWStepBasic_RWDocument: typeof RWStepBasic_RWDocument;
  RWStepBasic_RWDocumentFile: typeof RWStepBasic_RWDocumentFile;
  RWStepBasic_RWDocumentProductAssociation: typeof RWStepBasic_RWDocumentProductAssociation;
  RWStepBasic_RWDocumentProductEquivalence: typeof RWStepBasic_RWDocumentProductEquivalence;
  RWStepBasic_RWDocumentRelationship: typeof RWStepBasic_RWDocumentRelationship;
  RWStepBasic_RWDocumentRepresentationType: typeof RWStepBasic_RWDocumentRepresentationType;
  RWStepBasic_RWDocumentType: typeof RWStepBasic_RWDocumentType;
  RWStepBasic_RWDocumentUsageConstraint: typeof RWStepBasic_RWDocumentUsageConstraint;
  RWStepBasic_RWEffectivity: typeof RWStepBasic_RWEffectivity;
  RWStepBasic_RWEffectivityAssignment: typeof RWStepBasic_RWEffectivityAssignment;
  RWStepBasic_RWEulerAngles: typeof RWStepBasic_RWEulerAngles;
  RWStepBasic_RWExternalIdentificationAssignment: typeof RWStepBasic_RWExternalIdentificationAssignment;
  RWStepBasic_RWExternalSource: typeof RWStepBasic_RWExternalSource;
  RWStepBasic_RWExternallyDefinedItem: typeof RWStepBasic_RWExternallyDefinedItem;
  RWStepBasic_RWGeneralProperty: typeof RWStepBasic_RWGeneralProperty;
  RWStepBasic_RWGroup: typeof RWStepBasic_RWGroup;
  RWStepBasic_RWGroupAssignment: typeof RWStepBasic_RWGroupAssignment;
  RWStepBasic_RWGroupRelationship: typeof RWStepBasic_RWGroupRelationship;
  RWStepBasic_RWIdentificationAssignment: typeof RWStepBasic_RWIdentificationAssignment;
  RWStepBasic_RWIdentificationRole: typeof RWStepBasic_RWIdentificationRole;
  RWStepBasic_RWLengthMeasureWithUnit: typeof RWStepBasic_RWLengthMeasureWithUnit;
  RWStepBasic_RWLengthUnit: typeof RWStepBasic_RWLengthUnit;
  RWStepBasic_RWLocalTime: typeof RWStepBasic_RWLocalTime;
  RWStepBasic_RWMassMeasureWithUnit: typeof RWStepBasic_RWMassMeasureWithUnit;
  RWStepBasic_RWMassUnit: typeof RWStepBasic_RWMassUnit;
  RWStepBasic_RWMeasureWithUnit: typeof RWStepBasic_RWMeasureWithUnit;
  RWStepBasic_RWMechanicalContext: typeof RWStepBasic_RWMechanicalContext;
  RWStepBasic_RWNameAssignment: typeof RWStepBasic_RWNameAssignment;
  RWStepBasic_RWNamedUnit: typeof RWStepBasic_RWNamedUnit;
  RWStepBasic_RWObjectRole: typeof RWStepBasic_RWObjectRole;
  RWStepBasic_RWOrdinalDate: typeof RWStepBasic_RWOrdinalDate;
  RWStepBasic_RWOrganization: typeof RWStepBasic_RWOrganization;
  RWStepBasic_RWOrganizationRole: typeof RWStepBasic_RWOrganizationRole;
  RWStepBasic_RWOrganizationalAddress: typeof RWStepBasic_RWOrganizationalAddress;
  RWStepBasic_RWPerson: typeof RWStepBasic_RWPerson;
  RWStepBasic_RWPersonAndOrganization: typeof RWStepBasic_RWPersonAndOrganization;
  RWStepBasic_RWPersonAndOrganizationRole: typeof RWStepBasic_RWPersonAndOrganizationRole;
  RWStepBasic_RWPersonalAddress: typeof RWStepBasic_RWPersonalAddress;
  RWStepBasic_RWPlaneAngleMeasureWithUnit: typeof RWStepBasic_RWPlaneAngleMeasureWithUnit;
  RWStepBasic_RWPlaneAngleUnit: typeof RWStepBasic_RWPlaneAngleUnit;
  RWStepBasic_RWProduct: typeof RWStepBasic_RWProduct;
  RWStepBasic_RWProductCategory: typeof RWStepBasic_RWProductCategory;
  RWStepBasic_RWProductCategoryRelationship: typeof RWStepBasic_RWProductCategoryRelationship;
  RWStepBasic_RWProductConceptContext: typeof RWStepBasic_RWProductConceptContext;
  RWStepBasic_RWProductContext: typeof RWStepBasic_RWProductContext;
  RWStepBasic_RWProductDefinition: typeof RWStepBasic_RWProductDefinition;
  RWStepBasic_RWProductDefinitionContext: typeof RWStepBasic_RWProductDefinitionContext;
  RWStepBasic_RWProductDefinitionEffectivity: typeof RWStepBasic_RWProductDefinitionEffectivity;
  RWStepBasic_RWProductDefinitionFormation: typeof RWStepBasic_RWProductDefinitionFormation;
  RWStepBasic_RWProductDefinitionFormationRelationship: typeof RWStepBasic_RWProductDefinitionFormationRelationship;
  RWStepBasic_RWProductDefinitionFormationWithSpecifiedSource: typeof RWStepBasic_RWProductDefinitionFormationWithSpecifiedSource;
  RWStepBasic_RWProductDefinitionReference: typeof RWStepBasic_RWProductDefinitionReference;
  RWStepBasic_RWProductDefinitionReferenceWithLocalRepresentation: typeof RWStepBasic_RWProductDefinitionReferenceWithLocalRepresentation;
  RWStepBasic_RWProductDefinitionRelationship: typeof RWStepBasic_RWProductDefinitionRelationship;
  RWStepBasic_RWProductDefinitionWithAssociatedDocuments: typeof RWStepBasic_RWProductDefinitionWithAssociatedDocuments;
  RWStepBasic_RWProductRelatedProductCategory: typeof RWStepBasic_RWProductRelatedProductCategory;
  RWStepBasic_RWProductType: typeof RWStepBasic_RWProductType;
  RWStepBasic_RWRatioMeasureWithUnit: typeof RWStepBasic_RWRatioMeasureWithUnit;
  RWStepBasic_RWRoleAssociation: typeof RWStepBasic_RWRoleAssociation;
  RWStepBasic_RWSecurityClassification: typeof RWStepBasic_RWSecurityClassification;
  RWStepBasic_RWSecurityClassificationLevel: typeof RWStepBasic_RWSecurityClassificationLevel;
  RWStepBasic_RWSiUnit: typeof RWStepBasic_RWSiUnit;
  RWStepBasic_RWSiUnitAndAreaUnit: typeof RWStepBasic_RWSiUnitAndAreaUnit;
  RWStepBasic_RWSiUnitAndLengthUnit: typeof RWStepBasic_RWSiUnitAndLengthUnit;
  RWStepBasic_RWSiUnitAndMassUnit: typeof RWStepBasic_RWSiUnitAndMassUnit;
  RWStepBasic_RWSiUnitAndPlaneAngleUnit: typeof RWStepBasic_RWSiUnitAndPlaneAngleUnit;
  RWStepBasic_RWSiUnitAndRatioUnit: typeof RWStepBasic_RWSiUnitAndRatioUnit;
  RWStepBasic_RWSiUnitAndSolidAngleUnit: typeof RWStepBasic_RWSiUnitAndSolidAngleUnit;
  RWStepBasic_RWSiUnitAndThermodynamicTemperatureUnit: typeof RWStepBasic_RWSiUnitAndThermodynamicTemperatureUnit;
  RWStepBasic_RWSiUnitAndTimeUnit: typeof RWStepBasic_RWSiUnitAndTimeUnit;
  RWStepBasic_RWSiUnitAndVolumeUnit: typeof RWStepBasic_RWSiUnitAndVolumeUnit;
  RWStepBasic_RWSolidAngleMeasureWithUnit: typeof RWStepBasic_RWSolidAngleMeasureWithUnit;
  RWStepBasic_RWSolidAngleUnit: typeof RWStepBasic_RWSolidAngleUnit;
  RWStepBasic_RWThermodynamicTemperatureUnit: typeof RWStepBasic_RWThermodynamicTemperatureUnit;
  RWStepBasic_RWUncertaintyMeasureWithUnit: typeof RWStepBasic_RWUncertaintyMeasureWithUnit;
  RWStepBasic_RWVersionedActionRequest: typeof RWStepBasic_RWVersionedActionRequest;
  RWStepBasic_RWWeekOfYearAndDayDate: typeof RWStepBasic_RWWeekOfYearAndDayDate;
  RWStepRepr_RWAllAroundShapeAspect: typeof RWStepRepr_RWAllAroundShapeAspect;
  RWStepRepr_RWApex: typeof RWStepRepr_RWApex;
  RWStepRepr_RWAssemblyComponentUsage: typeof RWStepRepr_RWAssemblyComponentUsage;
  RWStepRepr_RWAssemblyComponentUsageSubstitute: typeof RWStepRepr_RWAssemblyComponentUsageSubstitute;
  RWStepRepr_RWBetweenShapeAspect: typeof RWStepRepr_RWBetweenShapeAspect;
  RWStepRepr_RWCentreOfSymmetry: typeof RWStepRepr_RWCentreOfSymmetry;
  RWStepRepr_RWCharacterizedRepresentation: typeof RWStepRepr_RWCharacterizedRepresentation;
  RWStepRepr_RWCompGroupShAspAndCompShAspAndDatumFeatAndShAsp: typeof RWStepRepr_RWCompGroupShAspAndCompShAspAndDatumFeatAndShAsp;
  RWStepRepr_RWCompShAspAndDatumFeatAndShAsp: typeof RWStepRepr_RWCompShAspAndDatumFeatAndShAsp;
  RWStepRepr_RWCompositeGroupShapeAspect: typeof RWStepRepr_RWCompositeGroupShapeAspect;
  RWStepRepr_RWCompositeShapeAspect: typeof RWStepRepr_RWCompositeShapeAspect;
  RWStepRepr_RWCompoundRepresentationItem: typeof RWStepRepr_RWCompoundRepresentationItem;
  RWStepRepr_RWConfigurationDesign: typeof RWStepRepr_RWConfigurationDesign;
  RWStepRepr_RWConfigurationEffectivity: typeof RWStepRepr_RWConfigurationEffectivity;
  RWStepRepr_RWConfigurationItem: typeof RWStepRepr_RWConfigurationItem;
  RWStepRepr_RWConstructiveGeometryRepresentation: typeof RWStepRepr_RWConstructiveGeometryRepresentation;
  RWStepRepr_RWConstructiveGeometryRepresentationRelationship: typeof RWStepRepr_RWConstructiveGeometryRepresentationRelationship;
  RWStepRepr_RWContinuosShapeAspect: typeof RWStepRepr_RWContinuosShapeAspect;
  RWStepRepr_RWDataEnvironment: typeof RWStepRepr_RWDataEnvironment;
  RWStepRepr_RWDefinitionalRepresentation: typeof RWStepRepr_RWDefinitionalRepresentation;
  RWStepRepr_RWDerivedShapeAspect: typeof RWStepRepr_RWDerivedShapeAspect;
  RWStepRepr_RWDescriptiveRepresentationItem: typeof RWStepRepr_RWDescriptiveRepresentationItem;
  RWStepRepr_RWExtension: typeof RWStepRepr_RWExtension;
  RWStepRepr_RWFeatureForDatumTargetRelationship: typeof RWStepRepr_RWFeatureForDatumTargetRelationship;
  RWStepRepr_RWFunctionallyDefinedTransformation: typeof RWStepRepr_RWFunctionallyDefinedTransformation;
  RWStepRepr_RWGeometricAlignment: typeof RWStepRepr_RWGeometricAlignment;
  RWStepRepr_RWGlobalUncertaintyAssignedContext: typeof RWStepRepr_RWGlobalUncertaintyAssignedContext;
  RWStepRepr_RWGlobalUnitAssignedContext: typeof RWStepRepr_RWGlobalUnitAssignedContext;
  RWStepRepr_RWIntegerRepresentationItem: typeof RWStepRepr_RWIntegerRepresentationItem;
  RWStepRepr_RWItemDefinedTransformation: typeof RWStepRepr_RWItemDefinedTransformation;
  RWStepRepr_RWMakeFromUsageOption: typeof RWStepRepr_RWMakeFromUsageOption;
  RWStepRepr_RWMappedItem: typeof RWStepRepr_RWMappedItem;
  RWStepRepr_RWMaterialDesignation: typeof RWStepRepr_RWMaterialDesignation;
  RWStepRepr_RWMaterialProperty: typeof RWStepRepr_RWMaterialProperty;
  RWStepRepr_RWMaterialPropertyRepresentation: typeof RWStepRepr_RWMaterialPropertyRepresentation;
  RWStepRepr_RWMeasureRepresentationItem: typeof RWStepRepr_RWMeasureRepresentationItem;
  RWStepRepr_RWParallelOffset: typeof RWStepRepr_RWParallelOffset;
  RWStepRepr_RWParametricRepresentationContext: typeof RWStepRepr_RWParametricRepresentationContext;
  RWStepRepr_RWPerpendicularTo: typeof RWStepRepr_RWPerpendicularTo;
  RWStepRepr_RWProductConcept: typeof RWStepRepr_RWProductConcept;
  RWStepRepr_RWProductDefinitionShape: typeof RWStepRepr_RWProductDefinitionShape;
  RWStepRepr_RWPropertyDefinition: typeof RWStepRepr_RWPropertyDefinition;
  RWStepRepr_RWPropertyDefinitionRelationship: typeof RWStepRepr_RWPropertyDefinitionRelationship;
  RWStepRepr_RWPropertyDefinitionRepresentation: typeof RWStepRepr_RWPropertyDefinitionRepresentation;
  RWStepRepr_RWQuantifiedAssemblyComponentUsage: typeof RWStepRepr_RWQuantifiedAssemblyComponentUsage;
  RWStepRepr_RWReprItemAndLengthMeasureWithUnit: typeof RWStepRepr_RWReprItemAndLengthMeasureWithUnit;
  RWStepRepr_RWReprItemAndLengthMeasureWithUnitAndQRI: typeof RWStepRepr_RWReprItemAndLengthMeasureWithUnitAndQRI;
  RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnit: typeof RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnit;
  RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnitAndQRI: typeof RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnitAndQRI;
  RWStepRepr_RWRepresentation: typeof RWStepRepr_RWRepresentation;
  RWStepRepr_RWRepresentationContext: typeof RWStepRepr_RWRepresentationContext;
  RWStepRepr_RWRepresentationItem: typeof RWStepRepr_RWRepresentationItem;
  RWStepRepr_RWRepresentationMap: typeof RWStepRepr_RWRepresentationMap;
  RWStepRepr_RWRepresentationRelationship: typeof RWStepRepr_RWRepresentationRelationship;
  RWStepRepr_RWRepresentationRelationshipWithTransformation: typeof RWStepRepr_RWRepresentationRelationshipWithTransformation;
  RWStepRepr_RWShapeAspect: typeof RWStepRepr_RWShapeAspect;
  RWStepRepr_RWShapeAspectDerivingRelationship: typeof RWStepRepr_RWShapeAspectDerivingRelationship;
  RWStepRepr_RWShapeAspectRelationship: typeof RWStepRepr_RWShapeAspectRelationship;
  RWStepRepr_RWShapeAspectTransition: typeof RWStepRepr_RWShapeAspectTransition;
  RWStepRepr_RWShapeRepresentationRelationshipWithTransformation: typeof RWStepRepr_RWShapeRepresentationRelationshipWithTransformation;
  RWStepRepr_RWSpecifiedHigherUsageOccurrence: typeof RWStepRepr_RWSpecifiedHigherUsageOccurrence;
  RWStepRepr_RWStructuralResponseProperty: typeof RWStepRepr_RWStructuralResponseProperty;
  RWStepRepr_RWStructuralResponsePropertyDefinitionRepresentation: typeof RWStepRepr_RWStructuralResponsePropertyDefinitionRepresentation;
  RWStepRepr_RWTangent: typeof RWStepRepr_RWTangent;
  RWStepRepr_RWValueRepresentationItem: typeof RWStepRepr_RWValueRepresentationItem;
  RWStepShape_RWAdvancedBrepShapeRepresentation: typeof RWStepShape_RWAdvancedBrepShapeRepresentation;
  RWStepShape_RWAdvancedFace: typeof RWStepShape_RWAdvancedFace;
  RWStepShape_RWAngularLocation: typeof RWStepShape_RWAngularLocation;
  RWStepShape_RWAngularSize: typeof RWStepShape_RWAngularSize;
  RWStepShape_RWBlock: typeof RWStepShape_RWBlock;
  RWStepShape_RWBooleanResult: typeof RWStepShape_RWBooleanResult;
  RWStepShape_RWBoxDomain: typeof RWStepShape_RWBoxDomain;
  RWStepShape_RWBoxedHalfSpace: typeof RWStepShape_RWBoxedHalfSpace;
  RWStepShape_RWClosedShell: typeof RWStepShape_RWClosedShell;
  RWStepShape_RWCompoundShapeRepresentation: typeof RWStepShape_RWCompoundShapeRepresentation;
  RWStepShape_RWConnectedEdgeSet: typeof RWStepShape_RWConnectedEdgeSet;
  RWStepShape_RWConnectedFaceSet: typeof RWStepShape_RWConnectedFaceSet;
  RWStepShape_RWConnectedFaceShapeRepresentation: typeof RWStepShape_RWConnectedFaceShapeRepresentation;
  RWStepShape_RWConnectedFaceSubSet: typeof RWStepShape_RWConnectedFaceSubSet;
  RWStepShape_RWContextDependentShapeRepresentation: typeof RWStepShape_RWContextDependentShapeRepresentation;
  RWStepShape_RWCsgShapeRepresentation: typeof RWStepShape_RWCsgShapeRepresentation;
  RWStepShape_RWCsgSolid: typeof RWStepShape_RWCsgSolid;
  RWStepShape_RWDefinitionalRepresentationAndShapeRepresentation: typeof RWStepShape_RWDefinitionalRepresentationAndShapeRepresentation;
  RWStepShape_RWDimensionalCharacteristicRepresentation: typeof RWStepShape_RWDimensionalCharacteristicRepresentation;
  RWStepShape_RWDimensionalLocation: typeof RWStepShape_RWDimensionalLocation;
  RWStepShape_RWDimensionalLocationWithPath: typeof RWStepShape_RWDimensionalLocationWithPath;
  RWStepShape_RWDimensionalSize: typeof RWStepShape_RWDimensionalSize;
  RWStepShape_RWDimensionalSizeWithPath: typeof RWStepShape_RWDimensionalSizeWithPath;
  RWStepShape_RWEdge: typeof RWStepShape_RWEdge;
  RWStepShape_RWEdgeBasedWireframeModel: typeof RWStepShape_RWEdgeBasedWireframeModel;
  RWStepShape_RWEdgeBasedWireframeShapeRepresentation: typeof RWStepShape_RWEdgeBasedWireframeShapeRepresentation;
  RWStepShape_RWExtrudedAreaSolid: typeof RWStepShape_RWExtrudedAreaSolid;
  RWStepShape_RWExtrudedFaceSolid: typeof RWStepShape_RWExtrudedFaceSolid;
  RWStepShape_RWFace: typeof RWStepShape_RWFace;
  RWStepShape_RWFaceBasedSurfaceModel: typeof RWStepShape_RWFaceBasedSurfaceModel;
  RWStepShape_RWFaceOuterBound: typeof RWStepShape_RWFaceOuterBound;
  RWStepShape_RWFaceSurface: typeof RWStepShape_RWFaceSurface;
  RWStepShape_RWFacetedBrep: typeof RWStepShape_RWFacetedBrep;
  RWStepShape_RWFacetedBrepAndBrepWithVoids: typeof RWStepShape_RWFacetedBrepAndBrepWithVoids;
  RWStepShape_RWFacetedBrepShapeRepresentation: typeof RWStepShape_RWFacetedBrepShapeRepresentation;
  RWStepShape_RWGeometricCurveSet: typeof RWStepShape_RWGeometricCurveSet;
  RWStepShape_RWGeometricSet: typeof RWStepShape_RWGeometricSet;
  RWStepShape_RWGeometricallyBoundedSurfaceShapeRepresentation: typeof RWStepShape_RWGeometricallyBoundedSurfaceShapeRepresentation;
  RWStepShape_RWGeometricallyBoundedWireframeShapeRepresentation: typeof RWStepShape_RWGeometricallyBoundedWireframeShapeRepresentation;
  RWStepShape_RWHalfSpaceSolid: typeof RWStepShape_RWHalfSpaceSolid;
  RWStepShape_RWLimitsAndFits: typeof RWStepShape_RWLimitsAndFits;
  RWStepShape_RWLoop: typeof RWStepShape_RWLoop;
  RWStepShape_RWLoopAndPath: typeof RWStepShape_RWLoopAndPath;
  RWStepShape_RWManifoldSolidBrep: typeof RWStepShape_RWManifoldSolidBrep;
  RWStepShape_RWManifoldSurfaceShapeRepresentation: typeof RWStepShape_RWManifoldSurfaceShapeRepresentation;
  RWStepShape_RWMeasureQualification: typeof RWStepShape_RWMeasureQualification;
  RWStepShape_RWMeasureRepresentationItemAndQualifiedRepresentationItem: typeof RWStepShape_RWMeasureRepresentationItemAndQualifiedRepresentationItem;
  RWStepShape_RWNonManifoldSurfaceShapeRepresentation: typeof RWStepShape_RWNonManifoldSurfaceShapeRepresentation;
  RWStepShape_RWOpenShell: typeof RWStepShape_RWOpenShell;
  RWStepShape_RWOrientedClosedShell: typeof RWStepShape_RWOrientedClosedShell;
  RWStepShape_RWOrientedEdge: typeof RWStepShape_RWOrientedEdge;
  RWStepShape_RWOrientedFace: typeof RWStepShape_RWOrientedFace;
  RWStepShape_RWOrientedOpenShell: typeof RWStepShape_RWOrientedOpenShell;
  RWStepShape_RWOrientedPath: typeof RWStepShape_RWOrientedPath;
  RWStepShape_RWPath: typeof RWStepShape_RWPath;
  RWStepShape_RWPlusMinusTolerance: typeof RWStepShape_RWPlusMinusTolerance;
  RWStepShape_RWPointRepresentation: typeof RWStepShape_RWPointRepresentation;
  RWStepShape_RWPolyLoop: typeof RWStepShape_RWPolyLoop;
  RWStepShape_RWPrecisionQualifier: typeof RWStepShape_RWPrecisionQualifier;
  RWStepShape_RWQualifiedRepresentationItem: typeof RWStepShape_RWQualifiedRepresentationItem;
  RWStepShape_RWRevolvedAreaSolid: typeof RWStepShape_RWRevolvedAreaSolid;
  RWStepShape_RWRevolvedFaceSolid: typeof RWStepShape_RWRevolvedFaceSolid;
  RWStepShape_RWRightAngularWedge: typeof RWStepShape_RWRightAngularWedge;
  RWStepShape_RWRightCircularCone: typeof RWStepShape_RWRightCircularCone;
  RWStepShape_RWRightCircularCylinder: typeof RWStepShape_RWRightCircularCylinder;
  RWStepShape_RWSeamEdge: typeof RWStepShape_RWSeamEdge;
  RWStepShape_RWShapeDefinitionRepresentation: typeof RWStepShape_RWShapeDefinitionRepresentation;
  RWStepShape_RWShapeDimensionRepresentation: typeof RWStepShape_RWShapeDimensionRepresentation;
  RWStepShape_RWShapeRepresentation: typeof RWStepShape_RWShapeRepresentation;
  RWStepShape_RWShapeRepresentationWithParameters: typeof RWStepShape_RWShapeRepresentationWithParameters;
  RWStepShape_RWShellBasedSurfaceModel: typeof RWStepShape_RWShellBasedSurfaceModel;
  RWStepShape_RWSolidModel: typeof RWStepShape_RWSolidModel;
  RWStepShape_RWSolidReplica: typeof RWStepShape_RWSolidReplica;
  RWStepShape_RWSphere: typeof RWStepShape_RWSphere;
  RWStepShape_RWSubedge: typeof RWStepShape_RWSubedge;
  RWStepShape_RWSubface: typeof RWStepShape_RWSubface;
  RWStepShape_RWSweptAreaSolid: typeof RWStepShape_RWSweptAreaSolid;
  RWStepShape_RWSweptFaceSolid: typeof RWStepShape_RWSweptFaceSolid;
  RWStepShape_RWToleranceValue: typeof RWStepShape_RWToleranceValue;
  RWStepShape_RWTopologicalRepresentationItem: typeof RWStepShape_RWTopologicalRepresentationItem;
  RWStepShape_RWTorus: typeof RWStepShape_RWTorus;
  RWStepShape_RWTransitionalShapeRepresentation: typeof RWStepShape_RWTransitionalShapeRepresentation;
  RWStepShape_RWTypeQualifier: typeof RWStepShape_RWTypeQualifier;
  RWStepShape_RWValueFormatTypeQualifier: typeof RWStepShape_RWValueFormatTypeQualifier;
  RWStepShape_RWVertex: typeof RWStepShape_RWVertex;
  RWStepShape_RWVertexLoop: typeof RWStepShape_RWVertexLoop;
  RWStepShape_RWVertexPoint: typeof RWStepShape_RWVertexPoint;
  StepRepr_RepresentationItem: typeof StepRepr_RepresentationItem;
  StepGeom_GeometricRepresentationItem: typeof StepGeom_GeometricRepresentationItem;
  StepBasic_ProductDefinition: typeof StepBasic_ProductDefinition;
  StepRepr_RepresentedDefinition: typeof StepRepr_RepresentedDefinition;
  StepRepr_PropertyDefinitionRepresentation: typeof StepRepr_PropertyDefinitionRepresentation;
  StepShape_ShapeDefinitionRepresentation: typeof StepShape_ShapeDefinitionRepresentation;
  StepBasic_Unit: typeof StepBasic_Unit;
  StepBasic_MeasureWithUnit: typeof StepBasic_MeasureWithUnit;
  StepBasic_LengthMeasureWithUnit: typeof StepBasic_LengthMeasureWithUnit;
  StepGeom_Placement: typeof StepGeom_Placement;
  StepGeom_Axis2Placement3d: typeof StepGeom_Axis2Placement3d;
  StepRepr_CompoundRepresentationItem: typeof StepRepr_CompoundRepresentationItem;
  StepShape_LimitsAndFits: typeof StepShape_LimitsAndFits;
  StepRepr_ShapeAspect: typeof StepRepr_ShapeAspect;
  StepRepr_CharacterizedDefinition: typeof StepRepr_CharacterizedDefinition;
  StepRepr_PropertyDefinition: typeof StepRepr_PropertyDefinition;
  StepRepr_ProductDefinitionShape: typeof StepRepr_ProductDefinitionShape;
  StepRepr_Representation: typeof StepRepr_Representation;
  StepBasic_CertificationAssignment: typeof StepBasic_CertificationAssignment;
  StepBasic_ContractAssignment: typeof StepBasic_ContractAssignment;
  StepBasic_ActionAssignment: typeof StepBasic_ActionAssignment;
  StepBasic_ActionRequestAssignment: typeof StepBasic_ActionRequestAssignment;
  StepRepr_MaterialPropertyRepresentation: typeof StepRepr_MaterialPropertyRepresentation;
  StepBasic_IdentificationAssignment: typeof StepBasic_IdentificationAssignment;
  StepBasic_ExternalIdentificationAssignment: typeof StepBasic_ExternalIdentificationAssignment;
  StepBasic_GroupAssignment: typeof StepBasic_GroupAssignment;
  StepBasic_Approval: typeof StepBasic_Approval;
  StepBasic_Group: typeof StepBasic_Group;
  StepBasic_GeneralProperty: typeof StepBasic_GeneralProperty;
  StepBasic_Action: typeof StepBasic_Action;
  StepBasic_ActionMethod: typeof StepBasic_ActionMethod;
  StepBasic_ActionRequestSolution: typeof StepBasic_ActionRequestSolution;
  StepBasic_Address: typeof StepBasic_Address;
  StepBasic_ApplicationContext: typeof StepBasic_ApplicationContext;
  StepBasic_ApplicationContextElement: typeof StepBasic_ApplicationContextElement;
  StepBasic_ApplicationProtocolDefinition: typeof StepBasic_ApplicationProtocolDefinition;
  StepBasic_DateTimeSelect: typeof StepBasic_DateTimeSelect;
  StepBasic_ApprovalDateTime: typeof StepBasic_ApprovalDateTime;
  StepBasic_PersonOrganizationSelect: typeof StepBasic_PersonOrganizationSelect;
  StepBasic_ApprovalPersonOrganization: typeof StepBasic_ApprovalPersonOrganization;
  StepBasic_ApprovalRelationship: typeof StepBasic_ApprovalRelationship;
  StepBasic_ApprovalRole: typeof StepBasic_ApprovalRole;
  StepBasic_ApprovalStatus: typeof StepBasic_ApprovalStatus;
  StepBasic_NamedUnit: typeof StepBasic_NamedUnit;
  StepBasic_AreaUnit: typeof StepBasic_AreaUnit;
  StepBasic_DerivedUnitElement: typeof StepBasic_DerivedUnitElement;
  StepBasic_Document: typeof StepBasic_Document;
  StepBasic_Organization: typeof StepBasic_Organization;
  StepBasic_Person: typeof StepBasic_Person;
  StepBasic_ProductContext: typeof StepBasic_ProductContext;
  StepBasic_Product: typeof StepBasic_Product;
  StepBasic_UncertaintyMeasureWithUnit: typeof StepBasic_UncertaintyMeasureWithUnit;
  StepBasic_Date: typeof StepBasic_Date;
  StepBasic_CalendarDate: typeof StepBasic_CalendarDate;
  StepBasic_Certification: typeof StepBasic_Certification;
  StepBasic_CertificationType: typeof StepBasic_CertificationType;
  StepBasic_CharacterizedObject: typeof StepBasic_CharacterizedObject;
  StepBasic_Contract: typeof StepBasic_Contract;
  StepBasic_ContractType: typeof StepBasic_ContractType;
  StepBasic_ConversionBasedUnit: typeof StepBasic_ConversionBasedUnit;
  StepBasic_ConversionBasedUnitAndAreaUnit: typeof StepBasic_ConversionBasedUnitAndAreaUnit;
  StepBasic_ConversionBasedUnitAndLengthUnit: typeof StepBasic_ConversionBasedUnitAndLengthUnit;
  StepBasic_ConversionBasedUnitAndMassUnit: typeof StepBasic_ConversionBasedUnitAndMassUnit;
  StepBasic_ConversionBasedUnitAndPlaneAngleUnit: typeof StepBasic_ConversionBasedUnitAndPlaneAngleUnit;
  StepBasic_ConversionBasedUnitAndRatioUnit: typeof StepBasic_ConversionBasedUnitAndRatioUnit;
  StepBasic_ConversionBasedUnitAndSolidAngleUnit: typeof StepBasic_ConversionBasedUnitAndSolidAngleUnit;
  StepBasic_ConversionBasedUnitAndTimeUnit: typeof StepBasic_ConversionBasedUnitAndTimeUnit;
  StepBasic_ConversionBasedUnitAndVolumeUnit: typeof StepBasic_ConversionBasedUnitAndVolumeUnit;
  StepBasic_CoordinatedUniversalTimeOffset: typeof StepBasic_CoordinatedUniversalTimeOffset;
  StepBasic_DateAndTime: typeof StepBasic_DateAndTime;
  StepBasic_DateRole: typeof StepBasic_DateRole;
  StepBasic_DateTimeRole: typeof StepBasic_DateTimeRole;
  StepBasic_DerivedUnit: typeof StepBasic_DerivedUnit;
  StepBasic_ProductDefinitionContext: typeof StepBasic_ProductDefinitionContext;
  StepBasic_DesignContext: typeof StepBasic_DesignContext;
  StepBasic_DigitalDocument: typeof StepBasic_DigitalDocument;
  StepBasic_DimensionalExponents: typeof StepBasic_DimensionalExponents;
  StepBasic_DocumentFile: typeof StepBasic_DocumentFile;
  StepBasic_ProductOrFormationOrDefinition: typeof StepBasic_ProductOrFormationOrDefinition;
  StepBasic_DocumentProductAssociation: typeof StepBasic_DocumentProductAssociation;
  StepBasic_DocumentProductEquivalence: typeof StepBasic_DocumentProductEquivalence;
  StepBasic_DocumentRelationship: typeof StepBasic_DocumentRelationship;
  StepBasic_DocumentRepresentationType: typeof StepBasic_DocumentRepresentationType;
  StepBasic_DocumentType: typeof StepBasic_DocumentType;
  StepBasic_DocumentUsageConstraint: typeof StepBasic_DocumentUsageConstraint;
  StepBasic_Effectivity: typeof StepBasic_Effectivity;
  StepBasic_EffectivityAssignment: typeof StepBasic_EffectivityAssignment;
  StepBasic_EulerAngles: typeof StepBasic_EulerAngles;
  StepBasic_SourceItem: typeof StepBasic_SourceItem;
  StepBasic_ExternalSource: typeof StepBasic_ExternalSource;
  StepBasic_ExternallyDefinedItem: typeof StepBasic_ExternallyDefinedItem;
  StepBasic_GroupRelationship: typeof StepBasic_GroupRelationship;
  StepBasic_IdentificationRole: typeof StepBasic_IdentificationRole;
  StepBasic_LengthUnit: typeof StepBasic_LengthUnit;
  StepBasic_LocalTime: typeof StepBasic_LocalTime;
  StepBasic_MassMeasureWithUnit: typeof StepBasic_MassMeasureWithUnit;
  StepBasic_MassUnit: typeof StepBasic_MassUnit;
  StepBasic_MeasureValueMember: typeof StepBasic_MeasureValueMember;
  StepBasic_MechanicalContext: typeof StepBasic_MechanicalContext;
  StepBasic_NameAssignment: typeof StepBasic_NameAssignment;
  StepBasic_ObjectRole: typeof StepBasic_ObjectRole;
  StepBasic_OrdinalDate: typeof StepBasic_OrdinalDate;
  StepBasic_OrganizationRole: typeof StepBasic_OrganizationRole;
  StepBasic_OrganizationalAddress: typeof StepBasic_OrganizationalAddress;
  StepBasic_PersonAndOrganization: typeof StepBasic_PersonAndOrganization;
  StepBasic_PersonAndOrganizationRole: typeof StepBasic_PersonAndOrganizationRole;
  StepBasic_PersonalAddress: typeof StepBasic_PersonalAddress;
  StepBasic_PhysicallyModeledProductDefinition: typeof StepBasic_PhysicallyModeledProductDefinition;
  StepBasic_PlaneAngleMeasureWithUnit: typeof StepBasic_PlaneAngleMeasureWithUnit;
  StepBasic_PlaneAngleUnit: typeof StepBasic_PlaneAngleUnit;
  StepBasic_ProductCategory: typeof StepBasic_ProductCategory;
  StepBasic_ProductCategoryRelationship: typeof StepBasic_ProductCategoryRelationship;
  StepBasic_ProductConceptContext: typeof StepBasic_ProductConceptContext;
  StepBasic_ProductDefinitionEffectivity: typeof StepBasic_ProductDefinitionEffectivity;
  StepBasic_ProductDefinitionFormation: typeof StepBasic_ProductDefinitionFormation;
  StepBasic_ProductDefinitionFormationRelationship: typeof StepBasic_ProductDefinitionFormationRelationship;
  StepBasic_ProductDefinitionFormationWithSpecifiedSource: typeof StepBasic_ProductDefinitionFormationWithSpecifiedSource;
  StepBasic_ProductDefinitionOrReference: typeof StepBasic_ProductDefinitionOrReference;
  StepBasic_ProductDefinitionReference: typeof StepBasic_ProductDefinitionReference;
  StepBasic_ProductDefinitionReferenceWithLocalRepresentation: typeof StepBasic_ProductDefinitionReferenceWithLocalRepresentation;
  StepBasic_ProductDefinitionRelationship: typeof StepBasic_ProductDefinitionRelationship;
  StepBasic_ProductDefinitionWithAssociatedDocuments: typeof StepBasic_ProductDefinitionWithAssociatedDocuments;
  StepBasic_ProductRelatedProductCategory: typeof StepBasic_ProductRelatedProductCategory;
  StepBasic_ProductType: typeof StepBasic_ProductType;
  StepBasic_RatioMeasureWithUnit: typeof StepBasic_RatioMeasureWithUnit;
  StepBasic_RatioUnit: typeof StepBasic_RatioUnit;
  StepBasic_RoleSelect: typeof StepBasic_RoleSelect;
  StepBasic_RoleAssociation: typeof StepBasic_RoleAssociation;
  StepBasic_SecurityClassification: typeof StepBasic_SecurityClassification;
  StepBasic_SecurityClassificationLevel: typeof StepBasic_SecurityClassificationLevel;
  StepBasic_SiUnit: typeof StepBasic_SiUnit;
  StepBasic_SiUnitAndAreaUnit: typeof StepBasic_SiUnitAndAreaUnit;
  StepBasic_SiUnitAndLengthUnit: typeof StepBasic_SiUnitAndLengthUnit;
  StepBasic_SiUnitAndMassUnit: typeof StepBasic_SiUnitAndMassUnit;
  StepBasic_SiUnitAndPlaneAngleUnit: typeof StepBasic_SiUnitAndPlaneAngleUnit;
  StepBasic_SiUnitAndRatioUnit: typeof StepBasic_SiUnitAndRatioUnit;
  StepBasic_SiUnitAndSolidAngleUnit: typeof StepBasic_SiUnitAndSolidAngleUnit;
  StepBasic_SiUnitAndThermodynamicTemperatureUnit: typeof StepBasic_SiUnitAndThermodynamicTemperatureUnit;
  StepBasic_SiUnitAndTimeUnit: typeof StepBasic_SiUnitAndTimeUnit;
  StepBasic_SiUnitAndVolumeUnit: typeof StepBasic_SiUnitAndVolumeUnit;
  StepBasic_SizeMember: typeof StepBasic_SizeMember;
  StepBasic_SizeSelect: typeof StepBasic_SizeSelect;
  StepBasic_SolidAngleMeasureWithUnit: typeof StepBasic_SolidAngleMeasureWithUnit;
  StepBasic_SolidAngleUnit: typeof StepBasic_SolidAngleUnit;
  StepBasic_ThermodynamicTemperatureUnit: typeof StepBasic_ThermodynamicTemperatureUnit;
  StepBasic_TimeMeasureWithUnit: typeof StepBasic_TimeMeasureWithUnit;
  StepBasic_TimeUnit: typeof StepBasic_TimeUnit;
  StepBasic_VersionedActionRequest: typeof StepBasic_VersionedActionRequest;
  StepBasic_VolumeUnit: typeof StepBasic_VolumeUnit;
  StepBasic_WeekOfYearAndDayDate: typeof StepBasic_WeekOfYearAndDayDate;
  StepRepr_CompositeShapeAspect: typeof StepRepr_CompositeShapeAspect;
  StepGeom_Point: typeof StepGeom_Point;
  StepGeom_CompositeCurveSegment: typeof StepGeom_CompositeCurveSegment;
  StepGeom_Curve: typeof StepGeom_Curve;
  StepGeom_BoundedCurve: typeof StepGeom_BoundedCurve;
  StepGeom_CompositeCurve: typeof StepGeom_CompositeCurve;
  StepGeom_CompositeCurveOnSurface: typeof StepGeom_CompositeCurveOnSurface;
  StepGeom_BoundaryCurve: typeof StepGeom_BoundaryCurve;
  StepGeom_CartesianPoint: typeof StepGeom_CartesianPoint;
  StepGeom_PcurveOrSurface: typeof StepGeom_PcurveOrSurface;
  StepGeom_SurfaceBoundary: typeof StepGeom_SurfaceBoundary;
  StepGeom_TrimmingSelect: typeof StepGeom_TrimmingSelect;
  StepGeom_SurfacePatch: typeof StepGeom_SurfacePatch;
  StepGeom_Axis1Placement: typeof StepGeom_Axis1Placement;
  StepGeom_Axis2Placement: typeof StepGeom_Axis2Placement;
  StepGeom_Axis2Placement2d: typeof StepGeom_Axis2Placement2d;
  StepGeom_BSplineCurve: typeof StepGeom_BSplineCurve;
  StepGeom_BSplineCurveWithKnots: typeof StepGeom_BSplineCurveWithKnots;
  StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve: typeof StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve;
  StepGeom_Surface: typeof StepGeom_Surface;
  StepGeom_BoundedSurface: typeof StepGeom_BoundedSurface;
  StepGeom_BSplineSurface: typeof StepGeom_BSplineSurface;
  StepGeom_BSplineSurfaceWithKnots: typeof StepGeom_BSplineSurfaceWithKnots;
  StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface: typeof StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface;
  StepGeom_BezierCurve: typeof StepGeom_BezierCurve;
  StepGeom_BezierCurveAndRationalBSplineCurve: typeof StepGeom_BezierCurveAndRationalBSplineCurve;
  StepGeom_BezierSurface: typeof StepGeom_BezierSurface;
  StepGeom_BezierSurfaceAndRationalBSplineSurface: typeof StepGeom_BezierSurfaceAndRationalBSplineSurface;
  StepGeom_CartesianTransformationOperator: typeof StepGeom_CartesianTransformationOperator;
  StepGeom_CartesianTransformationOperator2d: typeof StepGeom_CartesianTransformationOperator2d;
  StepGeom_CartesianTransformationOperator3d: typeof StepGeom_CartesianTransformationOperator3d;
  StepGeom_Conic: typeof StepGeom_Conic;
  StepGeom_Circle: typeof StepGeom_Circle;
  StepGeom_ElementarySurface: typeof StepGeom_ElementarySurface;
  StepGeom_ConicalSurface: typeof StepGeom_ConicalSurface;
  StepGeom_CurveBoundedSurface: typeof StepGeom_CurveBoundedSurface;
  StepGeom_CurveOnSurface: typeof StepGeom_CurveOnSurface;
  StepGeom_CurveReplica: typeof StepGeom_CurveReplica;
  StepGeom_CylindricalSurface: typeof StepGeom_CylindricalSurface;
  StepGeom_DegeneratePcurve: typeof StepGeom_DegeneratePcurve;
  StepGeom_ToroidalSurface: typeof StepGeom_ToroidalSurface;
  StepGeom_DegenerateToroidalSurface: typeof StepGeom_DegenerateToroidalSurface;
  StepGeom_Direction: typeof StepGeom_Direction;
  StepGeom_Ellipse: typeof StepGeom_Ellipse;
  StepGeom_EvaluatedDegeneratePcurve: typeof StepGeom_EvaluatedDegeneratePcurve;
  StepRepr_RepresentationContext: typeof StepRepr_RepresentationContext;
  StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx: typeof StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx;
  StepGeom_GeometricRepresentationContext: typeof StepGeom_GeometricRepresentationContext;
  StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext: typeof StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext;
  StepGeom_GeometricRepresentationContextAndParametricRepresentationContext: typeof StepGeom_GeometricRepresentationContextAndParametricRepresentationContext;
  StepGeom_Hyperbola: typeof StepGeom_Hyperbola;
  StepGeom_SurfaceCurve: typeof StepGeom_SurfaceCurve;
  StepGeom_IntersectionCurve: typeof StepGeom_IntersectionCurve;
  StepGeom_Line: typeof StepGeom_Line;
  StepGeom_OffsetCurve3d: typeof StepGeom_OffsetCurve3d;
  StepGeom_OffsetSurface: typeof StepGeom_OffsetSurface;
  StepGeom_OrientedSurface: typeof StepGeom_OrientedSurface;
  StepGeom_OuterBoundaryCurve: typeof StepGeom_OuterBoundaryCurve;
  StepGeom_Parabola: typeof StepGeom_Parabola;
  StepGeom_Pcurve: typeof StepGeom_Pcurve;
  StepGeom_Plane: typeof StepGeom_Plane;
  StepGeom_PointOnCurve: typeof StepGeom_PointOnCurve;
  StepGeom_PointOnSurface: typeof StepGeom_PointOnSurface;
  StepGeom_PointReplica: typeof StepGeom_PointReplica;
  StepGeom_Polyline: typeof StepGeom_Polyline;
  StepGeom_QuasiUniformCurve: typeof StepGeom_QuasiUniformCurve;
  StepGeom_QuasiUniformCurveAndRationalBSplineCurve: typeof StepGeom_QuasiUniformCurveAndRationalBSplineCurve;
  StepGeom_QuasiUniformSurface: typeof StepGeom_QuasiUniformSurface;
  StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface: typeof StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface;
  StepGeom_RationalBSplineCurve: typeof StepGeom_RationalBSplineCurve;
  StepGeom_RationalBSplineSurface: typeof StepGeom_RationalBSplineSurface;
  StepGeom_RectangularCompositeSurface: typeof StepGeom_RectangularCompositeSurface;
  StepGeom_RectangularTrimmedSurface: typeof StepGeom_RectangularTrimmedSurface;
  StepGeom_ReparametrisedCompositeCurveSegment: typeof StepGeom_ReparametrisedCompositeCurveSegment;
  StepGeom_SeamCurve: typeof StepGeom_SeamCurve;
  StepGeom_SphericalSurface: typeof StepGeom_SphericalSurface;
  StepGeom_SurfaceCurveAndBoundedCurve: typeof StepGeom_SurfaceCurveAndBoundedCurve;
  StepGeom_SweptSurface: typeof StepGeom_SweptSurface;
  StepGeom_SurfaceOfLinearExtrusion: typeof StepGeom_SurfaceOfLinearExtrusion;
  StepGeom_SurfaceOfRevolution: typeof StepGeom_SurfaceOfRevolution;
  StepGeom_SurfaceReplica: typeof StepGeom_SurfaceReplica;
  StepGeom_TrimmedCurve: typeof StepGeom_TrimmedCurve;
  StepGeom_TrimmingMember: typeof StepGeom_TrimmingMember;
  StepGeom_UniformCurve: typeof StepGeom_UniformCurve;
  StepGeom_UniformCurveAndRationalBSplineCurve: typeof StepGeom_UniformCurveAndRationalBSplineCurve;
  StepGeom_UniformSurface: typeof StepGeom_UniformSurface;
  StepGeom_UniformSurfaceAndRationalBSplineSurface: typeof StepGeom_UniformSurfaceAndRationalBSplineSurface;
  StepGeom_Vector: typeof StepGeom_Vector;
  StepGeom_VectorOrDirection: typeof StepGeom_VectorOrDirection;
  StepRepr_ContinuosShapeAspect: typeof StepRepr_ContinuosShapeAspect;
  StepRepr_AllAroundShapeAspect: typeof StepRepr_AllAroundShapeAspect;
  StepRepr_DerivedShapeAspect: typeof StepRepr_DerivedShapeAspect;
  StepRepr_Apex: typeof StepRepr_Apex;
  StepRepr_ProductDefinitionUsage: typeof StepRepr_ProductDefinitionUsage;
  StepRepr_AssemblyComponentUsage: typeof StepRepr_AssemblyComponentUsage;
  StepRepr_AssemblyComponentUsageSubstitute: typeof StepRepr_AssemblyComponentUsageSubstitute;
  StepRepr_BetweenShapeAspect: typeof StepRepr_BetweenShapeAspect;
  StepRepr_CentreOfSymmetry: typeof StepRepr_CentreOfSymmetry;
  StepRepr_CharacterizedRepresentation: typeof StepRepr_CharacterizedRepresentation;
  StepRepr_CompShAspAndDatumFeatAndShAsp: typeof StepRepr_CompShAspAndDatumFeatAndShAsp;
  StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp: typeof StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp;
  StepRepr_CompositeGroupShapeAspect: typeof StepRepr_CompositeGroupShapeAspect;
  StepRepr_ConfigurationDesignItem: typeof StepRepr_ConfigurationDesignItem;
  StepRepr_ConfigurationDesign: typeof StepRepr_ConfigurationDesign;
  StepRepr_ConfigurationEffectivity: typeof StepRepr_ConfigurationEffectivity;
  StepRepr_ConfigurationItem: typeof StepRepr_ConfigurationItem;
  StepRepr_ConstructiveGeometryRepresentation: typeof StepRepr_ConstructiveGeometryRepresentation;
  StepRepr_RepresentationRelationship: typeof StepRepr_RepresentationRelationship;
  StepRepr_ConstructiveGeometryRepresentationRelationship: typeof StepRepr_ConstructiveGeometryRepresentationRelationship;
  StepRepr_DataEnvironment: typeof StepRepr_DataEnvironment;
  StepRepr_DefinitionalRepresentation: typeof StepRepr_DefinitionalRepresentation;
  StepRepr_DescriptiveRepresentationItem: typeof StepRepr_DescriptiveRepresentationItem;
  StepRepr_Extension: typeof StepRepr_Extension;
  StepRepr_ExternallyDefinedRepresentation: typeof StepRepr_ExternallyDefinedRepresentation;
  StepRepr_ShapeAspectRelationship: typeof StepRepr_ShapeAspectRelationship;
  StepRepr_FeatureForDatumTargetRelationship: typeof StepRepr_FeatureForDatumTargetRelationship;
  StepRepr_FunctionallyDefinedTransformation: typeof StepRepr_FunctionallyDefinedTransformation;
  StepRepr_GeometricAlignment: typeof StepRepr_GeometricAlignment;
  StepRepr_GlobalUncertaintyAssignedContext: typeof StepRepr_GlobalUncertaintyAssignedContext;
  StepRepr_GlobalUnitAssignedContext: typeof StepRepr_GlobalUnitAssignedContext;
  StepRepr_IntegerRepresentationItem: typeof StepRepr_IntegerRepresentationItem;
  StepRepr_ItemDefinedTransformation: typeof StepRepr_ItemDefinedTransformation;
  StepRepr_MakeFromUsageOption: typeof StepRepr_MakeFromUsageOption;
  StepRepr_MappedItem: typeof StepRepr_MappedItem;
  StepRepr_MaterialDesignation: typeof StepRepr_MaterialDesignation;
  StepRepr_MaterialProperty: typeof StepRepr_MaterialProperty;
  StepRepr_MeasureRepresentationItem: typeof StepRepr_MeasureRepresentationItem;
  StepRepr_NextAssemblyUsageOccurrence: typeof StepRepr_NextAssemblyUsageOccurrence;
  StepRepr_ParallelOffset: typeof StepRepr_ParallelOffset;
  StepRepr_ParametricRepresentationContext: typeof StepRepr_ParametricRepresentationContext;
  StepRepr_PerpendicularTo: typeof StepRepr_PerpendicularTo;
  StepRepr_ProductConcept: typeof StepRepr_ProductConcept;
  StepRepr_PromissoryUsageOccurrence: typeof StepRepr_PromissoryUsageOccurrence;
  StepRepr_PropertyDefinitionRelationship: typeof StepRepr_PropertyDefinitionRelationship;
  StepRepr_QuantifiedAssemblyComponentUsage: typeof StepRepr_QuantifiedAssemblyComponentUsage;
  StepRepr_ReprItemAndMeasureWithUnit: typeof StepRepr_ReprItemAndMeasureWithUnit;
  StepRepr_ReprItemAndLengthMeasureWithUnit: typeof StepRepr_ReprItemAndLengthMeasureWithUnit;
  StepRepr_ReprItemAndMeasureWithUnitAndQRI: typeof StepRepr_ReprItemAndMeasureWithUnitAndQRI;
  StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI: typeof StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI;
  StepRepr_ReprItemAndPlaneAngleMeasureWithUnit: typeof StepRepr_ReprItemAndPlaneAngleMeasureWithUnit;
  StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI: typeof StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI;
  StepRepr_RepresentationMap: typeof StepRepr_RepresentationMap;
  StepRepr_Transformation: typeof StepRepr_Transformation;
  StepRepr_ShapeRepresentationRelationship: typeof StepRepr_ShapeRepresentationRelationship;
  StepRepr_RepresentationRelationshipWithTransformation: typeof StepRepr_RepresentationRelationshipWithTransformation;
  StepRepr_ShapeAspectDerivingRelationship: typeof StepRepr_ShapeAspectDerivingRelationship;
  StepRepr_ShapeAspectTransition: typeof StepRepr_ShapeAspectTransition;
  StepRepr_ShapeDefinition: typeof StepRepr_ShapeDefinition;
  StepRepr_ShapeRepresentationRelationshipWithTransformation: typeof StepRepr_ShapeRepresentationRelationshipWithTransformation;
  StepRepr_SpecifiedHigherUsageOccurrence: typeof StepRepr_SpecifiedHigherUsageOccurrence;
  StepRepr_StructuralResponseProperty: typeof StepRepr_StructuralResponseProperty;
  StepRepr_StructuralResponsePropertyDefinitionRepresentation: typeof StepRepr_StructuralResponsePropertyDefinitionRepresentation;
  StepRepr_SuppliedPartRelationship: typeof StepRepr_SuppliedPartRelationship;
  StepRepr_Tangent: typeof StepRepr_Tangent;
  StepRepr_ValueRange: typeof StepRepr_ValueRange;
  StepRepr_ValueRepresentationItem: typeof StepRepr_ValueRepresentationItem;
  StepShape_ShapeRepresentation: typeof StepShape_ShapeRepresentation;
  StepShape_AdvancedBrepShapeRepresentation: typeof StepShape_AdvancedBrepShapeRepresentation;
  StepShape_TopologicalRepresentationItem: typeof StepShape_TopologicalRepresentationItem;
  StepShape_FaceBound: typeof StepShape_FaceBound;
  StepShape_Face: typeof StepShape_Face;
  StepShape_FaceSurface: typeof StepShape_FaceSurface;
  StepShape_AdvancedFace: typeof StepShape_AdvancedFace;
  StepShape_DimensionalLocation: typeof StepShape_DimensionalLocation;
  StepShape_AngularLocation: typeof StepShape_AngularLocation;
  StepShape_DimensionalSize: typeof StepShape_DimensionalSize;
  StepShape_AngularSize: typeof StepShape_AngularSize;
  StepShape_Vertex: typeof StepShape_Vertex;
  StepShape_Edge: typeof StepShape_Edge;
  StepShape_ConnectedEdgeSet: typeof StepShape_ConnectedEdgeSet;
  StepShape_ConnectedFaceSet: typeof StepShape_ConnectedFaceSet;
  StepShape_GeometricSetSelect: typeof StepShape_GeometricSetSelect;
  StepShape_ClosedShell: typeof StepShape_ClosedShell;
  StepShape_OrientedClosedShell: typeof StepShape_OrientedClosedShell;
  StepShape_OrientedEdge: typeof StepShape_OrientedEdge;
  StepShape_ShapeDimensionRepresentationItem: typeof StepShape_ShapeDimensionRepresentationItem;
  StepShape_Shell: typeof StepShape_Shell;
  StepShape_ValueQualifier: typeof StepShape_ValueQualifier;
  StepShape_Block: typeof StepShape_Block;
  StepShape_CsgPrimitive: typeof StepShape_CsgPrimitive;
  StepShape_BooleanOperand: typeof StepShape_BooleanOperand;
  StepShape_BooleanResult: typeof StepShape_BooleanResult;
  StepShape_BoxDomain: typeof StepShape_BoxDomain;
  StepShape_HalfSpaceSolid: typeof StepShape_HalfSpaceSolid;
  StepShape_BoxedHalfSpace: typeof StepShape_BoxedHalfSpace;
  StepShape_SolidModel: typeof StepShape_SolidModel;
  StepShape_ManifoldSolidBrep: typeof StepShape_ManifoldSolidBrep;
  StepShape_BrepWithVoids: typeof StepShape_BrepWithVoids;
  StepShape_CompoundShapeRepresentation: typeof StepShape_CompoundShapeRepresentation;
  StepShape_ConnectedFaceShapeRepresentation: typeof StepShape_ConnectedFaceShapeRepresentation;
  StepShape_ConnectedFaceSubSet: typeof StepShape_ConnectedFaceSubSet;
  StepShape_ContextDependentShapeRepresentation: typeof StepShape_ContextDependentShapeRepresentation;
  StepShape_CsgSelect: typeof StepShape_CsgSelect;
  StepShape_CsgShapeRepresentation: typeof StepShape_CsgShapeRepresentation;
  StepShape_CsgSolid: typeof StepShape_CsgSolid;
  StepShape_DefinitionalRepresentationAndShapeRepresentation: typeof StepShape_DefinitionalRepresentationAndShapeRepresentation;
  StepShape_DimensionalCharacteristic: typeof StepShape_DimensionalCharacteristic;
  StepShape_DimensionalCharacteristicRepresentation: typeof StepShape_DimensionalCharacteristicRepresentation;
  StepShape_DimensionalLocationWithPath: typeof StepShape_DimensionalLocationWithPath;
  StepShape_DimensionalSizeWithPath: typeof StepShape_DimensionalSizeWithPath;
  StepShape_DirectedDimensionalLocation: typeof StepShape_DirectedDimensionalLocation;
  StepShape_EdgeBasedWireframeModel: typeof StepShape_EdgeBasedWireframeModel;
  StepShape_EdgeBasedWireframeShapeRepresentation: typeof StepShape_EdgeBasedWireframeShapeRepresentation;
  StepShape_EdgeCurve: typeof StepShape_EdgeCurve;
  StepShape_Loop: typeof StepShape_Loop;
  StepShape_EdgeLoop: typeof StepShape_EdgeLoop;
  StepShape_SweptAreaSolid: typeof StepShape_SweptAreaSolid;
  StepShape_ExtrudedAreaSolid: typeof StepShape_ExtrudedAreaSolid;
  StepShape_SweptFaceSolid: typeof StepShape_SweptFaceSolid;
  StepShape_ExtrudedFaceSolid: typeof StepShape_ExtrudedFaceSolid;
  StepShape_FaceBasedSurfaceModel: typeof StepShape_FaceBasedSurfaceModel;
  StepShape_FaceOuterBound: typeof StepShape_FaceOuterBound;
  StepShape_FacetedBrep: typeof StepShape_FacetedBrep;
  StepShape_FacetedBrepAndBrepWithVoids: typeof StepShape_FacetedBrepAndBrepWithVoids;
  StepShape_FacetedBrepShapeRepresentation: typeof StepShape_FacetedBrepShapeRepresentation;
  StepShape_GeometricSet: typeof StepShape_GeometricSet;
  StepShape_GeometricCurveSet: typeof StepShape_GeometricCurveSet;
  StepShape_GeometricallyBoundedSurfaceShapeRepresentation: typeof StepShape_GeometricallyBoundedSurfaceShapeRepresentation;
  StepShape_GeometricallyBoundedWireframeShapeRepresentation: typeof StepShape_GeometricallyBoundedWireframeShapeRepresentation;
  StepShape_LoopAndPath: typeof StepShape_LoopAndPath;
  StepShape_ManifoldSurfaceShapeRepresentation: typeof StepShape_ManifoldSurfaceShapeRepresentation;
  StepShape_MeasureQualification: typeof StepShape_MeasureQualification;
  StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem: typeof StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem;
  StepShape_NonManifoldSurfaceShapeRepresentation: typeof StepShape_NonManifoldSurfaceShapeRepresentation;
  StepShape_OpenShell: typeof StepShape_OpenShell;
  StepShape_OrientedFace: typeof StepShape_OrientedFace;
  StepShape_OrientedOpenShell: typeof StepShape_OrientedOpenShell;
  StepShape_Path: typeof StepShape_Path;
  StepShape_OrientedPath: typeof StepShape_OrientedPath;
  StepShape_ToleranceMethodDefinition: typeof StepShape_ToleranceMethodDefinition;
  StepShape_PlusMinusTolerance: typeof StepShape_PlusMinusTolerance;
  StepShape_PointRepresentation: typeof StepShape_PointRepresentation;
  StepShape_PolyLoop: typeof StepShape_PolyLoop;
  StepShape_PrecisionQualifier: typeof StepShape_PrecisionQualifier;
  StepShape_QualifiedRepresentationItem: typeof StepShape_QualifiedRepresentationItem;
  StepShape_ReversibleTopologyItem: typeof StepShape_ReversibleTopologyItem;
  StepShape_RevolvedAreaSolid: typeof StepShape_RevolvedAreaSolid;
  StepShape_RevolvedFaceSolid: typeof StepShape_RevolvedFaceSolid;
  StepShape_RightAngularWedge: typeof StepShape_RightAngularWedge;
  StepShape_RightCircularCone: typeof StepShape_RightCircularCone;
  StepShape_RightCircularCylinder: typeof StepShape_RightCircularCylinder;
  StepShape_SeamEdge: typeof StepShape_SeamEdge;
  StepShape_ShapeDimensionRepresentation: typeof StepShape_ShapeDimensionRepresentation;
  StepShape_ShapeRepresentationWithParameters: typeof StepShape_ShapeRepresentationWithParameters;
  StepShape_ShellBasedSurfaceModel: typeof StepShape_ShellBasedSurfaceModel;
  StepShape_SolidReplica: typeof StepShape_SolidReplica;
  StepShape_Sphere: typeof StepShape_Sphere;
  StepShape_Subedge: typeof StepShape_Subedge;
  StepShape_Subface: typeof StepShape_Subface;
  StepShape_SurfaceModel: typeof StepShape_SurfaceModel;
  StepShape_ToleranceValue: typeof StepShape_ToleranceValue;
  StepShape_Torus: typeof StepShape_Torus;
  StepShape_TransitionalShapeRepresentation: typeof StepShape_TransitionalShapeRepresentation;
  StepShape_TypeQualifier: typeof StepShape_TypeQualifier;
  StepShape_ValueFormatTypeQualifier: typeof StepShape_ValueFormatTypeQualifier;
  StepShape_VertexLoop: typeof StepShape_VertexLoop;
  StepShape_VertexPoint: typeof StepShape_VertexPoint;
  Handle_StepRepr_RepresentationItem_1: typeof Handle_StepRepr_RepresentationItem_1;
  Handle_StepRepr_RepresentationItem_2: typeof Handle_StepRepr_RepresentationItem_2;
  Handle_StepRepr_RepresentationItem_3: typeof Handle_StepRepr_RepresentationItem_3;
  Handle_StepRepr_RepresentationItem_4: typeof Handle_StepRepr_RepresentationItem_4;
  Handle_StepGeom_GeometricRepresentationItem_1: typeof Handle_StepGeom_GeometricRepresentationItem_1;
  Handle_StepGeom_GeometricRepresentationItem_2: typeof Handle_StepGeom_GeometricRepresentationItem_2;
  Handle_StepGeom_GeometricRepresentationItem_3: typeof Handle_StepGeom_GeometricRepresentationItem_3;
  Handle_StepGeom_GeometricRepresentationItem_4: typeof Handle_StepGeom_GeometricRepresentationItem_4;
  Handle_StepBasic_ProductDefinition_1: typeof Handle_StepBasic_ProductDefinition_1;
  Handle_StepBasic_ProductDefinition_2: typeof Handle_StepBasic_ProductDefinition_2;
  Handle_StepBasic_ProductDefinition_3: typeof Handle_StepBasic_ProductDefinition_3;
  Handle_StepBasic_ProductDefinition_4: typeof Handle_StepBasic_ProductDefinition_4;
  Handle_StepRepr_PropertyDefinitionRepresentation_1: typeof Handle_StepRepr_PropertyDefinitionRepresentation_1;
  Handle_StepRepr_PropertyDefinitionRepresentation_2: typeof Handle_StepRepr_PropertyDefinitionRepresentation_2;
  Handle_StepRepr_PropertyDefinitionRepresentation_3: typeof Handle_StepRepr_PropertyDefinitionRepresentation_3;
  Handle_StepRepr_PropertyDefinitionRepresentation_4: typeof Handle_StepRepr_PropertyDefinitionRepresentation_4;
  Handle_StepShape_ShapeDefinitionRepresentation_1: typeof Handle_StepShape_ShapeDefinitionRepresentation_1;
  Handle_StepShape_ShapeDefinitionRepresentation_2: typeof Handle_StepShape_ShapeDefinitionRepresentation_2;
  Handle_StepShape_ShapeDefinitionRepresentation_3: typeof Handle_StepShape_ShapeDefinitionRepresentation_3;
  Handle_StepShape_ShapeDefinitionRepresentation_4: typeof Handle_StepShape_ShapeDefinitionRepresentation_4;
  Handle_StepBasic_MeasureWithUnit_1: typeof Handle_StepBasic_MeasureWithUnit_1;
  Handle_StepBasic_MeasureWithUnit_2: typeof Handle_StepBasic_MeasureWithUnit_2;
  Handle_StepBasic_MeasureWithUnit_3: typeof Handle_StepBasic_MeasureWithUnit_3;
  Handle_StepBasic_MeasureWithUnit_4: typeof Handle_StepBasic_MeasureWithUnit_4;
  Handle_StepBasic_LengthMeasureWithUnit_1: typeof Handle_StepBasic_LengthMeasureWithUnit_1;
  Handle_StepBasic_LengthMeasureWithUnit_2: typeof Handle_StepBasic_LengthMeasureWithUnit_2;
  Handle_StepBasic_LengthMeasureWithUnit_3: typeof Handle_StepBasic_LengthMeasureWithUnit_3;
  Handle_StepBasic_LengthMeasureWithUnit_4: typeof Handle_StepBasic_LengthMeasureWithUnit_4;
  Handle_StepGeom_Placement_1: typeof Handle_StepGeom_Placement_1;
  Handle_StepGeom_Placement_2: typeof Handle_StepGeom_Placement_2;
  Handle_StepGeom_Placement_3: typeof Handle_StepGeom_Placement_3;
  Handle_StepGeom_Placement_4: typeof Handle_StepGeom_Placement_4;
  Handle_StepGeom_Axis2Placement3d_1: typeof Handle_StepGeom_Axis2Placement3d_1;
  Handle_StepGeom_Axis2Placement3d_2: typeof Handle_StepGeom_Axis2Placement3d_2;
  Handle_StepGeom_Axis2Placement3d_3: typeof Handle_StepGeom_Axis2Placement3d_3;
  Handle_StepGeom_Axis2Placement3d_4: typeof Handle_StepGeom_Axis2Placement3d_4;
  Handle_StepRepr_HArray1OfRepresentationItem_1: typeof Handle_StepRepr_HArray1OfRepresentationItem_1;
  Handle_StepRepr_HArray1OfRepresentationItem_2: typeof Handle_StepRepr_HArray1OfRepresentationItem_2;
  Handle_StepRepr_HArray1OfRepresentationItem_3: typeof Handle_StepRepr_HArray1OfRepresentationItem_3;
  Handle_StepRepr_HArray1OfRepresentationItem_4: typeof Handle_StepRepr_HArray1OfRepresentationItem_4;
  Handle_StepRepr_CompoundRepresentationItem_1: typeof Handle_StepRepr_CompoundRepresentationItem_1;
  Handle_StepRepr_CompoundRepresentationItem_2: typeof Handle_StepRepr_CompoundRepresentationItem_2;
  Handle_StepRepr_CompoundRepresentationItem_3: typeof Handle_StepRepr_CompoundRepresentationItem_3;
  Handle_StepRepr_CompoundRepresentationItem_4: typeof Handle_StepRepr_CompoundRepresentationItem_4;
  Handle_StepShape_LimitsAndFits_1: typeof Handle_StepShape_LimitsAndFits_1;
  Handle_StepShape_LimitsAndFits_2: typeof Handle_StepShape_LimitsAndFits_2;
  Handle_StepShape_LimitsAndFits_3: typeof Handle_StepShape_LimitsAndFits_3;
  Handle_StepShape_LimitsAndFits_4: typeof Handle_StepShape_LimitsAndFits_4;
  Handle_StepRepr_ShapeAspect_1: typeof Handle_StepRepr_ShapeAspect_1;
  Handle_StepRepr_ShapeAspect_2: typeof Handle_StepRepr_ShapeAspect_2;
  Handle_StepRepr_ShapeAspect_3: typeof Handle_StepRepr_ShapeAspect_3;
  Handle_StepRepr_ShapeAspect_4: typeof Handle_StepRepr_ShapeAspect_4;
  Handle_StepRepr_PropertyDefinition_1: typeof Handle_StepRepr_PropertyDefinition_1;
  Handle_StepRepr_PropertyDefinition_2: typeof Handle_StepRepr_PropertyDefinition_2;
  Handle_StepRepr_PropertyDefinition_3: typeof Handle_StepRepr_PropertyDefinition_3;
  Handle_StepRepr_PropertyDefinition_4: typeof Handle_StepRepr_PropertyDefinition_4;
  Handle_StepRepr_ProductDefinitionShape_1: typeof Handle_StepRepr_ProductDefinitionShape_1;
  Handle_StepRepr_ProductDefinitionShape_2: typeof Handle_StepRepr_ProductDefinitionShape_2;
  Handle_StepRepr_ProductDefinitionShape_3: typeof Handle_StepRepr_ProductDefinitionShape_3;
  Handle_StepRepr_ProductDefinitionShape_4: typeof Handle_StepRepr_ProductDefinitionShape_4;
  Handle_StepRepr_Representation_1: typeof Handle_StepRepr_Representation_1;
  Handle_StepRepr_Representation_2: typeof Handle_StepRepr_Representation_2;
  Handle_StepRepr_Representation_3: typeof Handle_StepRepr_Representation_3;
  Handle_StepRepr_Representation_4: typeof Handle_StepRepr_Representation_4;
  Handle_StepBasic_ApprovalAssignment_1: typeof Handle_StepBasic_ApprovalAssignment_1;
  Handle_StepBasic_ApprovalAssignment_2: typeof Handle_StepBasic_ApprovalAssignment_2;
  Handle_StepBasic_ApprovalAssignment_3: typeof Handle_StepBasic_ApprovalAssignment_3;
  Handle_StepBasic_ApprovalAssignment_4: typeof Handle_StepBasic_ApprovalAssignment_4;
  Handle_StepBasic_CertificationAssignment_1: typeof Handle_StepBasic_CertificationAssignment_1;
  Handle_StepBasic_CertificationAssignment_2: typeof Handle_StepBasic_CertificationAssignment_2;
  Handle_StepBasic_CertificationAssignment_3: typeof Handle_StepBasic_CertificationAssignment_3;
  Handle_StepBasic_CertificationAssignment_4: typeof Handle_StepBasic_CertificationAssignment_4;
  Handle_StepBasic_ContractAssignment_1: typeof Handle_StepBasic_ContractAssignment_1;
  Handle_StepBasic_ContractAssignment_2: typeof Handle_StepBasic_ContractAssignment_2;
  Handle_StepBasic_ContractAssignment_3: typeof Handle_StepBasic_ContractAssignment_3;
  Handle_StepBasic_ContractAssignment_4: typeof Handle_StepBasic_ContractAssignment_4;
  Handle_StepBasic_DateAndTimeAssignment_1: typeof Handle_StepBasic_DateAndTimeAssignment_1;
  Handle_StepBasic_DateAndTimeAssignment_2: typeof Handle_StepBasic_DateAndTimeAssignment_2;
  Handle_StepBasic_DateAndTimeAssignment_3: typeof Handle_StepBasic_DateAndTimeAssignment_3;
  Handle_StepBasic_DateAndTimeAssignment_4: typeof Handle_StepBasic_DateAndTimeAssignment_4;
  Handle_StepBasic_PersonAndOrganizationAssignment_1: typeof Handle_StepBasic_PersonAndOrganizationAssignment_1;
  Handle_StepBasic_PersonAndOrganizationAssignment_2: typeof Handle_StepBasic_PersonAndOrganizationAssignment_2;
  Handle_StepBasic_PersonAndOrganizationAssignment_3: typeof Handle_StepBasic_PersonAndOrganizationAssignment_3;
  Handle_StepBasic_PersonAndOrganizationAssignment_4: typeof Handle_StepBasic_PersonAndOrganizationAssignment_4;
  Handle_StepBasic_SecurityClassificationAssignment_1: typeof Handle_StepBasic_SecurityClassificationAssignment_1;
  Handle_StepBasic_SecurityClassificationAssignment_2: typeof Handle_StepBasic_SecurityClassificationAssignment_2;
  Handle_StepBasic_SecurityClassificationAssignment_3: typeof Handle_StepBasic_SecurityClassificationAssignment_3;
  Handle_StepBasic_SecurityClassificationAssignment_4: typeof Handle_StepBasic_SecurityClassificationAssignment_4;
  Handle_StepBasic_DocumentReference_1: typeof Handle_StepBasic_DocumentReference_1;
  Handle_StepBasic_DocumentReference_2: typeof Handle_StepBasic_DocumentReference_2;
  Handle_StepBasic_DocumentReference_3: typeof Handle_StepBasic_DocumentReference_3;
  Handle_StepBasic_DocumentReference_4: typeof Handle_StepBasic_DocumentReference_4;
  Handle_StepBasic_ActionAssignment_1: typeof Handle_StepBasic_ActionAssignment_1;
  Handle_StepBasic_ActionAssignment_2: typeof Handle_StepBasic_ActionAssignment_2;
  Handle_StepBasic_ActionAssignment_3: typeof Handle_StepBasic_ActionAssignment_3;
  Handle_StepBasic_ActionAssignment_4: typeof Handle_StepBasic_ActionAssignment_4;
  Handle_StepBasic_ActionRequestAssignment_1: typeof Handle_StepBasic_ActionRequestAssignment_1;
  Handle_StepBasic_ActionRequestAssignment_2: typeof Handle_StepBasic_ActionRequestAssignment_2;
  Handle_StepBasic_ActionRequestAssignment_3: typeof Handle_StepBasic_ActionRequestAssignment_3;
  Handle_StepBasic_ActionRequestAssignment_4: typeof Handle_StepBasic_ActionRequestAssignment_4;
  Handle_StepRepr_MaterialPropertyRepresentation_1: typeof Handle_StepRepr_MaterialPropertyRepresentation_1;
  Handle_StepRepr_MaterialPropertyRepresentation_2: typeof Handle_StepRepr_MaterialPropertyRepresentation_2;
  Handle_StepRepr_MaterialPropertyRepresentation_3: typeof Handle_StepRepr_MaterialPropertyRepresentation_3;
  Handle_StepRepr_MaterialPropertyRepresentation_4: typeof Handle_StepRepr_MaterialPropertyRepresentation_4;
  Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_1: typeof Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_1;
  Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_2: typeof Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_2;
  Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_3: typeof Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_3;
  Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_4: typeof Handle_StepRepr_HArray1OfMaterialPropertyRepresentation_4;
  Handle_StepBasic_DateAssignment_1: typeof Handle_StepBasic_DateAssignment_1;
  Handle_StepBasic_DateAssignment_2: typeof Handle_StepBasic_DateAssignment_2;
  Handle_StepBasic_DateAssignment_3: typeof Handle_StepBasic_DateAssignment_3;
  Handle_StepBasic_DateAssignment_4: typeof Handle_StepBasic_DateAssignment_4;
  Handle_StepBasic_IdentificationAssignment_1: typeof Handle_StepBasic_IdentificationAssignment_1;
  Handle_StepBasic_IdentificationAssignment_2: typeof Handle_StepBasic_IdentificationAssignment_2;
  Handle_StepBasic_IdentificationAssignment_3: typeof Handle_StepBasic_IdentificationAssignment_3;
  Handle_StepBasic_IdentificationAssignment_4: typeof Handle_StepBasic_IdentificationAssignment_4;
  Handle_StepBasic_ExternalIdentificationAssignment_1: typeof Handle_StepBasic_ExternalIdentificationAssignment_1;
  Handle_StepBasic_ExternalIdentificationAssignment_2: typeof Handle_StepBasic_ExternalIdentificationAssignment_2;
  Handle_StepBasic_ExternalIdentificationAssignment_3: typeof Handle_StepBasic_ExternalIdentificationAssignment_3;
  Handle_StepBasic_ExternalIdentificationAssignment_4: typeof Handle_StepBasic_ExternalIdentificationAssignment_4;
  Handle_StepBasic_GroupAssignment_1: typeof Handle_StepBasic_GroupAssignment_1;
  Handle_StepBasic_GroupAssignment_2: typeof Handle_StepBasic_GroupAssignment_2;
  Handle_StepBasic_GroupAssignment_3: typeof Handle_StepBasic_GroupAssignment_3;
  Handle_StepBasic_GroupAssignment_4: typeof Handle_StepBasic_GroupAssignment_4;
  Handle_StepBasic_OrganizationAssignment_1: typeof Handle_StepBasic_OrganizationAssignment_1;
  Handle_StepBasic_OrganizationAssignment_2: typeof Handle_StepBasic_OrganizationAssignment_2;
  Handle_StepBasic_OrganizationAssignment_3: typeof Handle_StepBasic_OrganizationAssignment_3;
  Handle_StepBasic_OrganizationAssignment_4: typeof Handle_StepBasic_OrganizationAssignment_4;
  Handle_StepBasic_Approval_1: typeof Handle_StepBasic_Approval_1;
  Handle_StepBasic_Approval_2: typeof Handle_StepBasic_Approval_2;
  Handle_StepBasic_Approval_3: typeof Handle_StepBasic_Approval_3;
  Handle_StepBasic_Approval_4: typeof Handle_StepBasic_Approval_4;
  Handle_StepBasic_HArray1OfApproval_1: typeof Handle_StepBasic_HArray1OfApproval_1;
  Handle_StepBasic_HArray1OfApproval_2: typeof Handle_StepBasic_HArray1OfApproval_2;
  Handle_StepBasic_HArray1OfApproval_3: typeof Handle_StepBasic_HArray1OfApproval_3;
  Handle_StepBasic_HArray1OfApproval_4: typeof Handle_StepBasic_HArray1OfApproval_4;
  Handle_StepBasic_Group_1: typeof Handle_StepBasic_Group_1;
  Handle_StepBasic_Group_2: typeof Handle_StepBasic_Group_2;
  Handle_StepBasic_Group_3: typeof Handle_StepBasic_Group_3;
  Handle_StepBasic_Group_4: typeof Handle_StepBasic_Group_4;
  Handle_StepBasic_GeneralProperty_1: typeof Handle_StepBasic_GeneralProperty_1;
  Handle_StepBasic_GeneralProperty_2: typeof Handle_StepBasic_GeneralProperty_2;
  Handle_StepBasic_GeneralProperty_3: typeof Handle_StepBasic_GeneralProperty_3;
  Handle_StepBasic_GeneralProperty_4: typeof Handle_StepBasic_GeneralProperty_4;
  Handle_StepBasic_Action_1: typeof Handle_StepBasic_Action_1;
  Handle_StepBasic_Action_2: typeof Handle_StepBasic_Action_2;
  Handle_StepBasic_Action_3: typeof Handle_StepBasic_Action_3;
  Handle_StepBasic_Action_4: typeof Handle_StepBasic_Action_4;
  Handle_StepBasic_ActionMethod_1: typeof Handle_StepBasic_ActionMethod_1;
  Handle_StepBasic_ActionMethod_2: typeof Handle_StepBasic_ActionMethod_2;
  Handle_StepBasic_ActionMethod_3: typeof Handle_StepBasic_ActionMethod_3;
  Handle_StepBasic_ActionMethod_4: typeof Handle_StepBasic_ActionMethod_4;
  Handle_StepBasic_ActionRequestSolution_1: typeof Handle_StepBasic_ActionRequestSolution_1;
  Handle_StepBasic_ActionRequestSolution_2: typeof Handle_StepBasic_ActionRequestSolution_2;
  Handle_StepBasic_ActionRequestSolution_3: typeof Handle_StepBasic_ActionRequestSolution_3;
  Handle_StepBasic_ActionRequestSolution_4: typeof Handle_StepBasic_ActionRequestSolution_4;
  Handle_StepBasic_Address_1: typeof Handle_StepBasic_Address_1;
  Handle_StepBasic_Address_2: typeof Handle_StepBasic_Address_2;
  Handle_StepBasic_Address_3: typeof Handle_StepBasic_Address_3;
  Handle_StepBasic_Address_4: typeof Handle_StepBasic_Address_4;
  Handle_StepBasic_ApplicationContext_1: typeof Handle_StepBasic_ApplicationContext_1;
  Handle_StepBasic_ApplicationContext_2: typeof Handle_StepBasic_ApplicationContext_2;
  Handle_StepBasic_ApplicationContext_3: typeof Handle_StepBasic_ApplicationContext_3;
  Handle_StepBasic_ApplicationContext_4: typeof Handle_StepBasic_ApplicationContext_4;
  Handle_StepBasic_ApplicationContextElement_1: typeof Handle_StepBasic_ApplicationContextElement_1;
  Handle_StepBasic_ApplicationContextElement_2: typeof Handle_StepBasic_ApplicationContextElement_2;
  Handle_StepBasic_ApplicationContextElement_3: typeof Handle_StepBasic_ApplicationContextElement_3;
  Handle_StepBasic_ApplicationContextElement_4: typeof Handle_StepBasic_ApplicationContextElement_4;
  Handle_StepBasic_ApplicationProtocolDefinition_1: typeof Handle_StepBasic_ApplicationProtocolDefinition_1;
  Handle_StepBasic_ApplicationProtocolDefinition_2: typeof Handle_StepBasic_ApplicationProtocolDefinition_2;
  Handle_StepBasic_ApplicationProtocolDefinition_3: typeof Handle_StepBasic_ApplicationProtocolDefinition_3;
  Handle_StepBasic_ApplicationProtocolDefinition_4: typeof Handle_StepBasic_ApplicationProtocolDefinition_4;
  Handle_StepBasic_ApprovalDateTime_1: typeof Handle_StepBasic_ApprovalDateTime_1;
  Handle_StepBasic_ApprovalDateTime_2: typeof Handle_StepBasic_ApprovalDateTime_2;
  Handle_StepBasic_ApprovalDateTime_3: typeof Handle_StepBasic_ApprovalDateTime_3;
  Handle_StepBasic_ApprovalDateTime_4: typeof Handle_StepBasic_ApprovalDateTime_4;
  Handle_StepBasic_ApprovalPersonOrganization_1: typeof Handle_StepBasic_ApprovalPersonOrganization_1;
  Handle_StepBasic_ApprovalPersonOrganization_2: typeof Handle_StepBasic_ApprovalPersonOrganization_2;
  Handle_StepBasic_ApprovalPersonOrganization_3: typeof Handle_StepBasic_ApprovalPersonOrganization_3;
  Handle_StepBasic_ApprovalPersonOrganization_4: typeof Handle_StepBasic_ApprovalPersonOrganization_4;
  Handle_StepBasic_ApprovalRelationship_1: typeof Handle_StepBasic_ApprovalRelationship_1;
  Handle_StepBasic_ApprovalRelationship_2: typeof Handle_StepBasic_ApprovalRelationship_2;
  Handle_StepBasic_ApprovalRelationship_3: typeof Handle_StepBasic_ApprovalRelationship_3;
  Handle_StepBasic_ApprovalRelationship_4: typeof Handle_StepBasic_ApprovalRelationship_4;
  Handle_StepBasic_ApprovalRole_1: typeof Handle_StepBasic_ApprovalRole_1;
  Handle_StepBasic_ApprovalRole_2: typeof Handle_StepBasic_ApprovalRole_2;
  Handle_StepBasic_ApprovalRole_3: typeof Handle_StepBasic_ApprovalRole_3;
  Handle_StepBasic_ApprovalRole_4: typeof Handle_StepBasic_ApprovalRole_4;
  Handle_StepBasic_ApprovalStatus_1: typeof Handle_StepBasic_ApprovalStatus_1;
  Handle_StepBasic_ApprovalStatus_2: typeof Handle_StepBasic_ApprovalStatus_2;
  Handle_StepBasic_ApprovalStatus_3: typeof Handle_StepBasic_ApprovalStatus_3;
  Handle_StepBasic_ApprovalStatus_4: typeof Handle_StepBasic_ApprovalStatus_4;
  Handle_StepBasic_NamedUnit_1: typeof Handle_StepBasic_NamedUnit_1;
  Handle_StepBasic_NamedUnit_2: typeof Handle_StepBasic_NamedUnit_2;
  Handle_StepBasic_NamedUnit_3: typeof Handle_StepBasic_NamedUnit_3;
  Handle_StepBasic_NamedUnit_4: typeof Handle_StepBasic_NamedUnit_4;
  Handle_StepBasic_AreaUnit_1: typeof Handle_StepBasic_AreaUnit_1;
  Handle_StepBasic_AreaUnit_2: typeof Handle_StepBasic_AreaUnit_2;
  Handle_StepBasic_AreaUnit_3: typeof Handle_StepBasic_AreaUnit_3;
  Handle_StepBasic_AreaUnit_4: typeof Handle_StepBasic_AreaUnit_4;
  Handle_StepBasic_DerivedUnitElement_1: typeof Handle_StepBasic_DerivedUnitElement_1;
  Handle_StepBasic_DerivedUnitElement_2: typeof Handle_StepBasic_DerivedUnitElement_2;
  Handle_StepBasic_DerivedUnitElement_3: typeof Handle_StepBasic_DerivedUnitElement_3;
  Handle_StepBasic_DerivedUnitElement_4: typeof Handle_StepBasic_DerivedUnitElement_4;
  Handle_StepBasic_Document_1: typeof Handle_StepBasic_Document_1;
  Handle_StepBasic_Document_2: typeof Handle_StepBasic_Document_2;
  Handle_StepBasic_Document_3: typeof Handle_StepBasic_Document_3;
  Handle_StepBasic_Document_4: typeof Handle_StepBasic_Document_4;
  Handle_StepBasic_Organization_1: typeof Handle_StepBasic_Organization_1;
  Handle_StepBasic_Organization_2: typeof Handle_StepBasic_Organization_2;
  Handle_StepBasic_Organization_3: typeof Handle_StepBasic_Organization_3;
  Handle_StepBasic_Organization_4: typeof Handle_StepBasic_Organization_4;
  Handle_StepBasic_Person_1: typeof Handle_StepBasic_Person_1;
  Handle_StepBasic_Person_2: typeof Handle_StepBasic_Person_2;
  Handle_StepBasic_Person_3: typeof Handle_StepBasic_Person_3;
  Handle_StepBasic_Person_4: typeof Handle_StepBasic_Person_4;
  Handle_StepBasic_ProductContext_1: typeof Handle_StepBasic_ProductContext_1;
  Handle_StepBasic_ProductContext_2: typeof Handle_StepBasic_ProductContext_2;
  Handle_StepBasic_ProductContext_3: typeof Handle_StepBasic_ProductContext_3;
  Handle_StepBasic_ProductContext_4: typeof Handle_StepBasic_ProductContext_4;
  Handle_StepBasic_HArray1OfProductContext_1: typeof Handle_StepBasic_HArray1OfProductContext_1;
  Handle_StepBasic_HArray1OfProductContext_2: typeof Handle_StepBasic_HArray1OfProductContext_2;
  Handle_StepBasic_HArray1OfProductContext_3: typeof Handle_StepBasic_HArray1OfProductContext_3;
  Handle_StepBasic_HArray1OfProductContext_4: typeof Handle_StepBasic_HArray1OfProductContext_4;
  Handle_StepBasic_Product_1: typeof Handle_StepBasic_Product_1;
  Handle_StepBasic_Product_2: typeof Handle_StepBasic_Product_2;
  Handle_StepBasic_Product_3: typeof Handle_StepBasic_Product_3;
  Handle_StepBasic_Product_4: typeof Handle_StepBasic_Product_4;
  Handle_StepBasic_UncertaintyMeasureWithUnit_1: typeof Handle_StepBasic_UncertaintyMeasureWithUnit_1;
  Handle_StepBasic_UncertaintyMeasureWithUnit_2: typeof Handle_StepBasic_UncertaintyMeasureWithUnit_2;
  Handle_StepBasic_UncertaintyMeasureWithUnit_3: typeof Handle_StepBasic_UncertaintyMeasureWithUnit_3;
  Handle_StepBasic_UncertaintyMeasureWithUnit_4: typeof Handle_StepBasic_UncertaintyMeasureWithUnit_4;
  Handle_StepBasic_Date_1: typeof Handle_StepBasic_Date_1;
  Handle_StepBasic_Date_2: typeof Handle_StepBasic_Date_2;
  Handle_StepBasic_Date_3: typeof Handle_StepBasic_Date_3;
  Handle_StepBasic_Date_4: typeof Handle_StepBasic_Date_4;
  Handle_StepBasic_CalendarDate_1: typeof Handle_StepBasic_CalendarDate_1;
  Handle_StepBasic_CalendarDate_2: typeof Handle_StepBasic_CalendarDate_2;
  Handle_StepBasic_CalendarDate_3: typeof Handle_StepBasic_CalendarDate_3;
  Handle_StepBasic_CalendarDate_4: typeof Handle_StepBasic_CalendarDate_4;
  Handle_StepBasic_Certification_1: typeof Handle_StepBasic_Certification_1;
  Handle_StepBasic_Certification_2: typeof Handle_StepBasic_Certification_2;
  Handle_StepBasic_Certification_3: typeof Handle_StepBasic_Certification_3;
  Handle_StepBasic_Certification_4: typeof Handle_StepBasic_Certification_4;
  Handle_StepBasic_CertificationType_1: typeof Handle_StepBasic_CertificationType_1;
  Handle_StepBasic_CertificationType_2: typeof Handle_StepBasic_CertificationType_2;
  Handle_StepBasic_CertificationType_3: typeof Handle_StepBasic_CertificationType_3;
  Handle_StepBasic_CertificationType_4: typeof Handle_StepBasic_CertificationType_4;
  Handle_StepBasic_CharacterizedObject_1: typeof Handle_StepBasic_CharacterizedObject_1;
  Handle_StepBasic_CharacterizedObject_2: typeof Handle_StepBasic_CharacterizedObject_2;
  Handle_StepBasic_CharacterizedObject_3: typeof Handle_StepBasic_CharacterizedObject_3;
  Handle_StepBasic_CharacterizedObject_4: typeof Handle_StepBasic_CharacterizedObject_4;
  Handle_StepBasic_Contract_1: typeof Handle_StepBasic_Contract_1;
  Handle_StepBasic_Contract_2: typeof Handle_StepBasic_Contract_2;
  Handle_StepBasic_Contract_3: typeof Handle_StepBasic_Contract_3;
  Handle_StepBasic_Contract_4: typeof Handle_StepBasic_Contract_4;
  Handle_StepBasic_ContractType_1: typeof Handle_StepBasic_ContractType_1;
  Handle_StepBasic_ContractType_2: typeof Handle_StepBasic_ContractType_2;
  Handle_StepBasic_ContractType_3: typeof Handle_StepBasic_ContractType_3;
  Handle_StepBasic_ContractType_4: typeof Handle_StepBasic_ContractType_4;
  Handle_StepBasic_ConversionBasedUnit_1: typeof Handle_StepBasic_ConversionBasedUnit_1;
  Handle_StepBasic_ConversionBasedUnit_2: typeof Handle_StepBasic_ConversionBasedUnit_2;
  Handle_StepBasic_ConversionBasedUnit_3: typeof Handle_StepBasic_ConversionBasedUnit_3;
  Handle_StepBasic_ConversionBasedUnit_4: typeof Handle_StepBasic_ConversionBasedUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndAreaUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndAreaUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndAreaUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndAreaUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndAreaUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndAreaUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndAreaUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndAreaUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndLengthUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndLengthUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndLengthUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndLengthUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndLengthUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndLengthUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndLengthUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndLengthUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndMassUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndMassUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndMassUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndMassUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndMassUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndMassUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndMassUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndMassUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndPlaneAngleUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndRatioUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndRatioUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndRatioUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndRatioUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndRatioUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndRatioUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndRatioUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndRatioUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndSolidAngleUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndTimeUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndTimeUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndTimeUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndTimeUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndTimeUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndTimeUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndTimeUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndTimeUnit_4;
  Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_1: typeof Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_1;
  Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_2: typeof Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_2;
  Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_3: typeof Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_3;
  Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_4: typeof Handle_StepBasic_ConversionBasedUnitAndVolumeUnit_4;
  Handle_StepBasic_CoordinatedUniversalTimeOffset_1: typeof Handle_StepBasic_CoordinatedUniversalTimeOffset_1;
  Handle_StepBasic_CoordinatedUniversalTimeOffset_2: typeof Handle_StepBasic_CoordinatedUniversalTimeOffset_2;
  Handle_StepBasic_CoordinatedUniversalTimeOffset_3: typeof Handle_StepBasic_CoordinatedUniversalTimeOffset_3;
  Handle_StepBasic_CoordinatedUniversalTimeOffset_4: typeof Handle_StepBasic_CoordinatedUniversalTimeOffset_4;
  Handle_StepBasic_DateAndTime_1: typeof Handle_StepBasic_DateAndTime_1;
  Handle_StepBasic_DateAndTime_2: typeof Handle_StepBasic_DateAndTime_2;
  Handle_StepBasic_DateAndTime_3: typeof Handle_StepBasic_DateAndTime_3;
  Handle_StepBasic_DateAndTime_4: typeof Handle_StepBasic_DateAndTime_4;
  Handle_StepBasic_DateRole_1: typeof Handle_StepBasic_DateRole_1;
  Handle_StepBasic_DateRole_2: typeof Handle_StepBasic_DateRole_2;
  Handle_StepBasic_DateRole_3: typeof Handle_StepBasic_DateRole_3;
  Handle_StepBasic_DateRole_4: typeof Handle_StepBasic_DateRole_4;
  Handle_StepBasic_DateTimeRole_1: typeof Handle_StepBasic_DateTimeRole_1;
  Handle_StepBasic_DateTimeRole_2: typeof Handle_StepBasic_DateTimeRole_2;
  Handle_StepBasic_DateTimeRole_3: typeof Handle_StepBasic_DateTimeRole_3;
  Handle_StepBasic_DateTimeRole_4: typeof Handle_StepBasic_DateTimeRole_4;
  Handle_StepBasic_HArray1OfDerivedUnitElement_1: typeof Handle_StepBasic_HArray1OfDerivedUnitElement_1;
  Handle_StepBasic_HArray1OfDerivedUnitElement_2: typeof Handle_StepBasic_HArray1OfDerivedUnitElement_2;
  Handle_StepBasic_HArray1OfDerivedUnitElement_3: typeof Handle_StepBasic_HArray1OfDerivedUnitElement_3;
  Handle_StepBasic_HArray1OfDerivedUnitElement_4: typeof Handle_StepBasic_HArray1OfDerivedUnitElement_4;
  Handle_StepBasic_DerivedUnit_1: typeof Handle_StepBasic_DerivedUnit_1;
  Handle_StepBasic_DerivedUnit_2: typeof Handle_StepBasic_DerivedUnit_2;
  Handle_StepBasic_DerivedUnit_3: typeof Handle_StepBasic_DerivedUnit_3;
  Handle_StepBasic_DerivedUnit_4: typeof Handle_StepBasic_DerivedUnit_4;
  Handle_StepBasic_ProductDefinitionContext_1: typeof Handle_StepBasic_ProductDefinitionContext_1;
  Handle_StepBasic_ProductDefinitionContext_2: typeof Handle_StepBasic_ProductDefinitionContext_2;
  Handle_StepBasic_ProductDefinitionContext_3: typeof Handle_StepBasic_ProductDefinitionContext_3;
  Handle_StepBasic_ProductDefinitionContext_4: typeof Handle_StepBasic_ProductDefinitionContext_4;
  Handle_StepBasic_DesignContext_1: typeof Handle_StepBasic_DesignContext_1;
  Handle_StepBasic_DesignContext_2: typeof Handle_StepBasic_DesignContext_2;
  Handle_StepBasic_DesignContext_3: typeof Handle_StepBasic_DesignContext_3;
  Handle_StepBasic_DesignContext_4: typeof Handle_StepBasic_DesignContext_4;
  Handle_StepBasic_DigitalDocument_1: typeof Handle_StepBasic_DigitalDocument_1;
  Handle_StepBasic_DigitalDocument_2: typeof Handle_StepBasic_DigitalDocument_2;
  Handle_StepBasic_DigitalDocument_3: typeof Handle_StepBasic_DigitalDocument_3;
  Handle_StepBasic_DigitalDocument_4: typeof Handle_StepBasic_DigitalDocument_4;
  Handle_StepBasic_DimensionalExponents_1: typeof Handle_StepBasic_DimensionalExponents_1;
  Handle_StepBasic_DimensionalExponents_2: typeof Handle_StepBasic_DimensionalExponents_2;
  Handle_StepBasic_DimensionalExponents_3: typeof Handle_StepBasic_DimensionalExponents_3;
  Handle_StepBasic_DimensionalExponents_4: typeof Handle_StepBasic_DimensionalExponents_4;
  Handle_StepBasic_DocumentFile_1: typeof Handle_StepBasic_DocumentFile_1;
  Handle_StepBasic_DocumentFile_2: typeof Handle_StepBasic_DocumentFile_2;
  Handle_StepBasic_DocumentFile_3: typeof Handle_StepBasic_DocumentFile_3;
  Handle_StepBasic_DocumentFile_4: typeof Handle_StepBasic_DocumentFile_4;
  Handle_StepBasic_DocumentProductAssociation_1: typeof Handle_StepBasic_DocumentProductAssociation_1;
  Handle_StepBasic_DocumentProductAssociation_2: typeof Handle_StepBasic_DocumentProductAssociation_2;
  Handle_StepBasic_DocumentProductAssociation_3: typeof Handle_StepBasic_DocumentProductAssociation_3;
  Handle_StepBasic_DocumentProductAssociation_4: typeof Handle_StepBasic_DocumentProductAssociation_4;
  Handle_StepBasic_DocumentProductEquivalence_1: typeof Handle_StepBasic_DocumentProductEquivalence_1;
  Handle_StepBasic_DocumentProductEquivalence_2: typeof Handle_StepBasic_DocumentProductEquivalence_2;
  Handle_StepBasic_DocumentProductEquivalence_3: typeof Handle_StepBasic_DocumentProductEquivalence_3;
  Handle_StepBasic_DocumentProductEquivalence_4: typeof Handle_StepBasic_DocumentProductEquivalence_4;
  Handle_StepBasic_DocumentRelationship_1: typeof Handle_StepBasic_DocumentRelationship_1;
  Handle_StepBasic_DocumentRelationship_2: typeof Handle_StepBasic_DocumentRelationship_2;
  Handle_StepBasic_DocumentRelationship_3: typeof Handle_StepBasic_DocumentRelationship_3;
  Handle_StepBasic_DocumentRelationship_4: typeof Handle_StepBasic_DocumentRelationship_4;
  Handle_StepBasic_DocumentRepresentationType_1: typeof Handle_StepBasic_DocumentRepresentationType_1;
  Handle_StepBasic_DocumentRepresentationType_2: typeof Handle_StepBasic_DocumentRepresentationType_2;
  Handle_StepBasic_DocumentRepresentationType_3: typeof Handle_StepBasic_DocumentRepresentationType_3;
  Handle_StepBasic_DocumentRepresentationType_4: typeof Handle_StepBasic_DocumentRepresentationType_4;
  Handle_StepBasic_DocumentType_1: typeof Handle_StepBasic_DocumentType_1;
  Handle_StepBasic_DocumentType_2: typeof Handle_StepBasic_DocumentType_2;
  Handle_StepBasic_DocumentType_3: typeof Handle_StepBasic_DocumentType_3;
  Handle_StepBasic_DocumentType_4: typeof Handle_StepBasic_DocumentType_4;
  Handle_StepBasic_DocumentUsageConstraint_1: typeof Handle_StepBasic_DocumentUsageConstraint_1;
  Handle_StepBasic_DocumentUsageConstraint_2: typeof Handle_StepBasic_DocumentUsageConstraint_2;
  Handle_StepBasic_DocumentUsageConstraint_3: typeof Handle_StepBasic_DocumentUsageConstraint_3;
  Handle_StepBasic_DocumentUsageConstraint_4: typeof Handle_StepBasic_DocumentUsageConstraint_4;
  Handle_StepBasic_Effectivity_1: typeof Handle_StepBasic_Effectivity_1;
  Handle_StepBasic_Effectivity_2: typeof Handle_StepBasic_Effectivity_2;
  Handle_StepBasic_Effectivity_3: typeof Handle_StepBasic_Effectivity_3;
  Handle_StepBasic_Effectivity_4: typeof Handle_StepBasic_Effectivity_4;
  Handle_StepBasic_EffectivityAssignment_1: typeof Handle_StepBasic_EffectivityAssignment_1;
  Handle_StepBasic_EffectivityAssignment_2: typeof Handle_StepBasic_EffectivityAssignment_2;
  Handle_StepBasic_EffectivityAssignment_3: typeof Handle_StepBasic_EffectivityAssignment_3;
  Handle_StepBasic_EffectivityAssignment_4: typeof Handle_StepBasic_EffectivityAssignment_4;
  Handle_StepBasic_EulerAngles_1: typeof Handle_StepBasic_EulerAngles_1;
  Handle_StepBasic_EulerAngles_2: typeof Handle_StepBasic_EulerAngles_2;
  Handle_StepBasic_EulerAngles_3: typeof Handle_StepBasic_EulerAngles_3;
  Handle_StepBasic_EulerAngles_4: typeof Handle_StepBasic_EulerAngles_4;
  Handle_StepBasic_ExternalSource_1: typeof Handle_StepBasic_ExternalSource_1;
  Handle_StepBasic_ExternalSource_2: typeof Handle_StepBasic_ExternalSource_2;
  Handle_StepBasic_ExternalSource_3: typeof Handle_StepBasic_ExternalSource_3;
  Handle_StepBasic_ExternalSource_4: typeof Handle_StepBasic_ExternalSource_4;
  Handle_StepBasic_ExternallyDefinedItem_1: typeof Handle_StepBasic_ExternallyDefinedItem_1;
  Handle_StepBasic_ExternallyDefinedItem_2: typeof Handle_StepBasic_ExternallyDefinedItem_2;
  Handle_StepBasic_ExternallyDefinedItem_3: typeof Handle_StepBasic_ExternallyDefinedItem_3;
  Handle_StepBasic_ExternallyDefinedItem_4: typeof Handle_StepBasic_ExternallyDefinedItem_4;
  Handle_StepBasic_GroupRelationship_1: typeof Handle_StepBasic_GroupRelationship_1;
  Handle_StepBasic_GroupRelationship_2: typeof Handle_StepBasic_GroupRelationship_2;
  Handle_StepBasic_GroupRelationship_3: typeof Handle_StepBasic_GroupRelationship_3;
  Handle_StepBasic_GroupRelationship_4: typeof Handle_StepBasic_GroupRelationship_4;
  Handle_StepBasic_HArray1OfDocument_1: typeof Handle_StepBasic_HArray1OfDocument_1;
  Handle_StepBasic_HArray1OfDocument_2: typeof Handle_StepBasic_HArray1OfDocument_2;
  Handle_StepBasic_HArray1OfDocument_3: typeof Handle_StepBasic_HArray1OfDocument_3;
  Handle_StepBasic_HArray1OfDocument_4: typeof Handle_StepBasic_HArray1OfDocument_4;
  Handle_StepBasic_HArray1OfNamedUnit_1: typeof Handle_StepBasic_HArray1OfNamedUnit_1;
  Handle_StepBasic_HArray1OfNamedUnit_2: typeof Handle_StepBasic_HArray1OfNamedUnit_2;
  Handle_StepBasic_HArray1OfNamedUnit_3: typeof Handle_StepBasic_HArray1OfNamedUnit_3;
  Handle_StepBasic_HArray1OfNamedUnit_4: typeof Handle_StepBasic_HArray1OfNamedUnit_4;
  Handle_StepBasic_HArray1OfOrganization_1: typeof Handle_StepBasic_HArray1OfOrganization_1;
  Handle_StepBasic_HArray1OfOrganization_2: typeof Handle_StepBasic_HArray1OfOrganization_2;
  Handle_StepBasic_HArray1OfOrganization_3: typeof Handle_StepBasic_HArray1OfOrganization_3;
  Handle_StepBasic_HArray1OfOrganization_4: typeof Handle_StepBasic_HArray1OfOrganization_4;
  Handle_StepBasic_HArray1OfPerson_1: typeof Handle_StepBasic_HArray1OfPerson_1;
  Handle_StepBasic_HArray1OfPerson_2: typeof Handle_StepBasic_HArray1OfPerson_2;
  Handle_StepBasic_HArray1OfPerson_3: typeof Handle_StepBasic_HArray1OfPerson_3;
  Handle_StepBasic_HArray1OfPerson_4: typeof Handle_StepBasic_HArray1OfPerson_4;
  Handle_StepBasic_HArray1OfProduct_1: typeof Handle_StepBasic_HArray1OfProduct_1;
  Handle_StepBasic_HArray1OfProduct_2: typeof Handle_StepBasic_HArray1OfProduct_2;
  Handle_StepBasic_HArray1OfProduct_3: typeof Handle_StepBasic_HArray1OfProduct_3;
  Handle_StepBasic_HArray1OfProduct_4: typeof Handle_StepBasic_HArray1OfProduct_4;
  Handle_StepBasic_HArray1OfProductDefinition_1: typeof Handle_StepBasic_HArray1OfProductDefinition_1;
  Handle_StepBasic_HArray1OfProductDefinition_2: typeof Handle_StepBasic_HArray1OfProductDefinition_2;
  Handle_StepBasic_HArray1OfProductDefinition_3: typeof Handle_StepBasic_HArray1OfProductDefinition_3;
  Handle_StepBasic_HArray1OfProductDefinition_4: typeof Handle_StepBasic_HArray1OfProductDefinition_4;
  Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_1: typeof Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_1;
  Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_2: typeof Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_2;
  Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_3: typeof Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_3;
  Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_4: typeof Handle_StepBasic_HArray1OfUncertaintyMeasureWithUnit_4;
  Handle_StepBasic_IdentificationRole_1: typeof Handle_StepBasic_IdentificationRole_1;
  Handle_StepBasic_IdentificationRole_2: typeof Handle_StepBasic_IdentificationRole_2;
  Handle_StepBasic_IdentificationRole_3: typeof Handle_StepBasic_IdentificationRole_3;
  Handle_StepBasic_IdentificationRole_4: typeof Handle_StepBasic_IdentificationRole_4;
  Handle_StepBasic_LengthUnit_1: typeof Handle_StepBasic_LengthUnit_1;
  Handle_StepBasic_LengthUnit_2: typeof Handle_StepBasic_LengthUnit_2;
  Handle_StepBasic_LengthUnit_3: typeof Handle_StepBasic_LengthUnit_3;
  Handle_StepBasic_LengthUnit_4: typeof Handle_StepBasic_LengthUnit_4;
  Handle_StepBasic_LocalTime_1: typeof Handle_StepBasic_LocalTime_1;
  Handle_StepBasic_LocalTime_2: typeof Handle_StepBasic_LocalTime_2;
  Handle_StepBasic_LocalTime_3: typeof Handle_StepBasic_LocalTime_3;
  Handle_StepBasic_LocalTime_4: typeof Handle_StepBasic_LocalTime_4;
  Handle_StepBasic_MassMeasureWithUnit_1: typeof Handle_StepBasic_MassMeasureWithUnit_1;
  Handle_StepBasic_MassMeasureWithUnit_2: typeof Handle_StepBasic_MassMeasureWithUnit_2;
  Handle_StepBasic_MassMeasureWithUnit_3: typeof Handle_StepBasic_MassMeasureWithUnit_3;
  Handle_StepBasic_MassMeasureWithUnit_4: typeof Handle_StepBasic_MassMeasureWithUnit_4;
  Handle_StepBasic_MassUnit_1: typeof Handle_StepBasic_MassUnit_1;
  Handle_StepBasic_MassUnit_2: typeof Handle_StepBasic_MassUnit_2;
  Handle_StepBasic_MassUnit_3: typeof Handle_StepBasic_MassUnit_3;
  Handle_StepBasic_MassUnit_4: typeof Handle_StepBasic_MassUnit_4;
  Handle_StepBasic_MeasureValueMember_1: typeof Handle_StepBasic_MeasureValueMember_1;
  Handle_StepBasic_MeasureValueMember_2: typeof Handle_StepBasic_MeasureValueMember_2;
  Handle_StepBasic_MeasureValueMember_3: typeof Handle_StepBasic_MeasureValueMember_3;
  Handle_StepBasic_MeasureValueMember_4: typeof Handle_StepBasic_MeasureValueMember_4;
  Handle_StepBasic_MechanicalContext_1: typeof Handle_StepBasic_MechanicalContext_1;
  Handle_StepBasic_MechanicalContext_2: typeof Handle_StepBasic_MechanicalContext_2;
  Handle_StepBasic_MechanicalContext_3: typeof Handle_StepBasic_MechanicalContext_3;
  Handle_StepBasic_MechanicalContext_4: typeof Handle_StepBasic_MechanicalContext_4;
  Handle_StepBasic_NameAssignment_1: typeof Handle_StepBasic_NameAssignment_1;
  Handle_StepBasic_NameAssignment_2: typeof Handle_StepBasic_NameAssignment_2;
  Handle_StepBasic_NameAssignment_3: typeof Handle_StepBasic_NameAssignment_3;
  Handle_StepBasic_NameAssignment_4: typeof Handle_StepBasic_NameAssignment_4;
  Handle_StepBasic_ObjectRole_1: typeof Handle_StepBasic_ObjectRole_1;
  Handle_StepBasic_ObjectRole_2: typeof Handle_StepBasic_ObjectRole_2;
  Handle_StepBasic_ObjectRole_3: typeof Handle_StepBasic_ObjectRole_3;
  Handle_StepBasic_ObjectRole_4: typeof Handle_StepBasic_ObjectRole_4;
  Handle_StepBasic_OrdinalDate_1: typeof Handle_StepBasic_OrdinalDate_1;
  Handle_StepBasic_OrdinalDate_2: typeof Handle_StepBasic_OrdinalDate_2;
  Handle_StepBasic_OrdinalDate_3: typeof Handle_StepBasic_OrdinalDate_3;
  Handle_StepBasic_OrdinalDate_4: typeof Handle_StepBasic_OrdinalDate_4;
  Handle_StepBasic_OrganizationRole_1: typeof Handle_StepBasic_OrganizationRole_1;
  Handle_StepBasic_OrganizationRole_2: typeof Handle_StepBasic_OrganizationRole_2;
  Handle_StepBasic_OrganizationRole_3: typeof Handle_StepBasic_OrganizationRole_3;
  Handle_StepBasic_OrganizationRole_4: typeof Handle_StepBasic_OrganizationRole_4;
  Handle_StepBasic_OrganizationalAddress_1: typeof Handle_StepBasic_OrganizationalAddress_1;
  Handle_StepBasic_OrganizationalAddress_2: typeof Handle_StepBasic_OrganizationalAddress_2;
  Handle_StepBasic_OrganizationalAddress_3: typeof Handle_StepBasic_OrganizationalAddress_3;
  Handle_StepBasic_OrganizationalAddress_4: typeof Handle_StepBasic_OrganizationalAddress_4;
  Handle_StepBasic_PersonAndOrganization_1: typeof Handle_StepBasic_PersonAndOrganization_1;
  Handle_StepBasic_PersonAndOrganization_2: typeof Handle_StepBasic_PersonAndOrganization_2;
  Handle_StepBasic_PersonAndOrganization_3: typeof Handle_StepBasic_PersonAndOrganization_3;
  Handle_StepBasic_PersonAndOrganization_4: typeof Handle_StepBasic_PersonAndOrganization_4;
  Handle_StepBasic_PersonAndOrganizationRole_1: typeof Handle_StepBasic_PersonAndOrganizationRole_1;
  Handle_StepBasic_PersonAndOrganizationRole_2: typeof Handle_StepBasic_PersonAndOrganizationRole_2;
  Handle_StepBasic_PersonAndOrganizationRole_3: typeof Handle_StepBasic_PersonAndOrganizationRole_3;
  Handle_StepBasic_PersonAndOrganizationRole_4: typeof Handle_StepBasic_PersonAndOrganizationRole_4;
  Handle_StepBasic_PersonalAddress_1: typeof Handle_StepBasic_PersonalAddress_1;
  Handle_StepBasic_PersonalAddress_2: typeof Handle_StepBasic_PersonalAddress_2;
  Handle_StepBasic_PersonalAddress_3: typeof Handle_StepBasic_PersonalAddress_3;
  Handle_StepBasic_PersonalAddress_4: typeof Handle_StepBasic_PersonalAddress_4;
  Handle_StepBasic_PhysicallyModeledProductDefinition_1: typeof Handle_StepBasic_PhysicallyModeledProductDefinition_1;
  Handle_StepBasic_PhysicallyModeledProductDefinition_2: typeof Handle_StepBasic_PhysicallyModeledProductDefinition_2;
  Handle_StepBasic_PhysicallyModeledProductDefinition_3: typeof Handle_StepBasic_PhysicallyModeledProductDefinition_3;
  Handle_StepBasic_PhysicallyModeledProductDefinition_4: typeof Handle_StepBasic_PhysicallyModeledProductDefinition_4;
  Handle_StepBasic_PlaneAngleMeasureWithUnit_1: typeof Handle_StepBasic_PlaneAngleMeasureWithUnit_1;
  Handle_StepBasic_PlaneAngleMeasureWithUnit_2: typeof Handle_StepBasic_PlaneAngleMeasureWithUnit_2;
  Handle_StepBasic_PlaneAngleMeasureWithUnit_3: typeof Handle_StepBasic_PlaneAngleMeasureWithUnit_3;
  Handle_StepBasic_PlaneAngleMeasureWithUnit_4: typeof Handle_StepBasic_PlaneAngleMeasureWithUnit_4;
  Handle_StepBasic_PlaneAngleUnit_1: typeof Handle_StepBasic_PlaneAngleUnit_1;
  Handle_StepBasic_PlaneAngleUnit_2: typeof Handle_StepBasic_PlaneAngleUnit_2;
  Handle_StepBasic_PlaneAngleUnit_3: typeof Handle_StepBasic_PlaneAngleUnit_3;
  Handle_StepBasic_PlaneAngleUnit_4: typeof Handle_StepBasic_PlaneAngleUnit_4;
  Handle_StepBasic_ProductCategory_1: typeof Handle_StepBasic_ProductCategory_1;
  Handle_StepBasic_ProductCategory_2: typeof Handle_StepBasic_ProductCategory_2;
  Handle_StepBasic_ProductCategory_3: typeof Handle_StepBasic_ProductCategory_3;
  Handle_StepBasic_ProductCategory_4: typeof Handle_StepBasic_ProductCategory_4;
  Handle_StepBasic_ProductCategoryRelationship_1: typeof Handle_StepBasic_ProductCategoryRelationship_1;
  Handle_StepBasic_ProductCategoryRelationship_2: typeof Handle_StepBasic_ProductCategoryRelationship_2;
  Handle_StepBasic_ProductCategoryRelationship_3: typeof Handle_StepBasic_ProductCategoryRelationship_3;
  Handle_StepBasic_ProductCategoryRelationship_4: typeof Handle_StepBasic_ProductCategoryRelationship_4;
  Handle_StepBasic_ProductConceptContext_1: typeof Handle_StepBasic_ProductConceptContext_1;
  Handle_StepBasic_ProductConceptContext_2: typeof Handle_StepBasic_ProductConceptContext_2;
  Handle_StepBasic_ProductConceptContext_3: typeof Handle_StepBasic_ProductConceptContext_3;
  Handle_StepBasic_ProductConceptContext_4: typeof Handle_StepBasic_ProductConceptContext_4;
  Handle_StepBasic_ProductDefinitionEffectivity_1: typeof Handle_StepBasic_ProductDefinitionEffectivity_1;
  Handle_StepBasic_ProductDefinitionEffectivity_2: typeof Handle_StepBasic_ProductDefinitionEffectivity_2;
  Handle_StepBasic_ProductDefinitionEffectivity_3: typeof Handle_StepBasic_ProductDefinitionEffectivity_3;
  Handle_StepBasic_ProductDefinitionEffectivity_4: typeof Handle_StepBasic_ProductDefinitionEffectivity_4;
  Handle_StepBasic_ProductDefinitionFormation_1: typeof Handle_StepBasic_ProductDefinitionFormation_1;
  Handle_StepBasic_ProductDefinitionFormation_2: typeof Handle_StepBasic_ProductDefinitionFormation_2;
  Handle_StepBasic_ProductDefinitionFormation_3: typeof Handle_StepBasic_ProductDefinitionFormation_3;
  Handle_StepBasic_ProductDefinitionFormation_4: typeof Handle_StepBasic_ProductDefinitionFormation_4;
  Handle_StepBasic_ProductDefinitionFormationRelationship_1: typeof Handle_StepBasic_ProductDefinitionFormationRelationship_1;
  Handle_StepBasic_ProductDefinitionFormationRelationship_2: typeof Handle_StepBasic_ProductDefinitionFormationRelationship_2;
  Handle_StepBasic_ProductDefinitionFormationRelationship_3: typeof Handle_StepBasic_ProductDefinitionFormationRelationship_3;
  Handle_StepBasic_ProductDefinitionFormationRelationship_4: typeof Handle_StepBasic_ProductDefinitionFormationRelationship_4;
  Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_1: typeof Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_1;
  Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_2: typeof Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_2;
  Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_3: typeof Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_3;
  Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_4: typeof Handle_StepBasic_ProductDefinitionFormationWithSpecifiedSource_4;
  Handle_StepBasic_ProductDefinitionReference_1: typeof Handle_StepBasic_ProductDefinitionReference_1;
  Handle_StepBasic_ProductDefinitionReference_2: typeof Handle_StepBasic_ProductDefinitionReference_2;
  Handle_StepBasic_ProductDefinitionReference_3: typeof Handle_StepBasic_ProductDefinitionReference_3;
  Handle_StepBasic_ProductDefinitionReference_4: typeof Handle_StepBasic_ProductDefinitionReference_4;
  Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_1: typeof Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_1;
  Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_2: typeof Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_2;
  Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_3: typeof Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_3;
  Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_4: typeof Handle_StepBasic_ProductDefinitionReferenceWithLocalRepresentation_4;
  Handle_StepBasic_ProductDefinitionRelationship_1: typeof Handle_StepBasic_ProductDefinitionRelationship_1;
  Handle_StepBasic_ProductDefinitionRelationship_2: typeof Handle_StepBasic_ProductDefinitionRelationship_2;
  Handle_StepBasic_ProductDefinitionRelationship_3: typeof Handle_StepBasic_ProductDefinitionRelationship_3;
  Handle_StepBasic_ProductDefinitionRelationship_4: typeof Handle_StepBasic_ProductDefinitionRelationship_4;
  Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_1: typeof Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_1;
  Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_2: typeof Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_2;
  Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_3: typeof Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_3;
  Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_4: typeof Handle_StepBasic_ProductDefinitionWithAssociatedDocuments_4;
  Handle_StepBasic_ProductRelatedProductCategory_1: typeof Handle_StepBasic_ProductRelatedProductCategory_1;
  Handle_StepBasic_ProductRelatedProductCategory_2: typeof Handle_StepBasic_ProductRelatedProductCategory_2;
  Handle_StepBasic_ProductRelatedProductCategory_3: typeof Handle_StepBasic_ProductRelatedProductCategory_3;
  Handle_StepBasic_ProductRelatedProductCategory_4: typeof Handle_StepBasic_ProductRelatedProductCategory_4;
  Handle_StepBasic_ProductType_1: typeof Handle_StepBasic_ProductType_1;
  Handle_StepBasic_ProductType_2: typeof Handle_StepBasic_ProductType_2;
  Handle_StepBasic_ProductType_3: typeof Handle_StepBasic_ProductType_3;
  Handle_StepBasic_ProductType_4: typeof Handle_StepBasic_ProductType_4;
  Handle_StepBasic_RatioMeasureWithUnit_1: typeof Handle_StepBasic_RatioMeasureWithUnit_1;
  Handle_StepBasic_RatioMeasureWithUnit_2: typeof Handle_StepBasic_RatioMeasureWithUnit_2;
  Handle_StepBasic_RatioMeasureWithUnit_3: typeof Handle_StepBasic_RatioMeasureWithUnit_3;
  Handle_StepBasic_RatioMeasureWithUnit_4: typeof Handle_StepBasic_RatioMeasureWithUnit_4;
  Handle_StepBasic_RatioUnit_1: typeof Handle_StepBasic_RatioUnit_1;
  Handle_StepBasic_RatioUnit_2: typeof Handle_StepBasic_RatioUnit_2;
  Handle_StepBasic_RatioUnit_3: typeof Handle_StepBasic_RatioUnit_3;
  Handle_StepBasic_RatioUnit_4: typeof Handle_StepBasic_RatioUnit_4;
  Handle_StepBasic_RoleAssociation_1: typeof Handle_StepBasic_RoleAssociation_1;
  Handle_StepBasic_RoleAssociation_2: typeof Handle_StepBasic_RoleAssociation_2;
  Handle_StepBasic_RoleAssociation_3: typeof Handle_StepBasic_RoleAssociation_3;
  Handle_StepBasic_RoleAssociation_4: typeof Handle_StepBasic_RoleAssociation_4;
  Handle_StepBasic_SecurityClassification_1: typeof Handle_StepBasic_SecurityClassification_1;
  Handle_StepBasic_SecurityClassification_2: typeof Handle_StepBasic_SecurityClassification_2;
  Handle_StepBasic_SecurityClassification_3: typeof Handle_StepBasic_SecurityClassification_3;
  Handle_StepBasic_SecurityClassification_4: typeof Handle_StepBasic_SecurityClassification_4;
  Handle_StepBasic_SecurityClassificationLevel_1: typeof Handle_StepBasic_SecurityClassificationLevel_1;
  Handle_StepBasic_SecurityClassificationLevel_2: typeof Handle_StepBasic_SecurityClassificationLevel_2;
  Handle_StepBasic_SecurityClassificationLevel_3: typeof Handle_StepBasic_SecurityClassificationLevel_3;
  Handle_StepBasic_SecurityClassificationLevel_4: typeof Handle_StepBasic_SecurityClassificationLevel_4;
  Handle_StepBasic_SiUnit_1: typeof Handle_StepBasic_SiUnit_1;
  Handle_StepBasic_SiUnit_2: typeof Handle_StepBasic_SiUnit_2;
  Handle_StepBasic_SiUnit_3: typeof Handle_StepBasic_SiUnit_3;
  Handle_StepBasic_SiUnit_4: typeof Handle_StepBasic_SiUnit_4;
  Handle_StepBasic_SiUnitAndAreaUnit_1: typeof Handle_StepBasic_SiUnitAndAreaUnit_1;
  Handle_StepBasic_SiUnitAndAreaUnit_2: typeof Handle_StepBasic_SiUnitAndAreaUnit_2;
  Handle_StepBasic_SiUnitAndAreaUnit_3: typeof Handle_StepBasic_SiUnitAndAreaUnit_3;
  Handle_StepBasic_SiUnitAndAreaUnit_4: typeof Handle_StepBasic_SiUnitAndAreaUnit_4;
  Handle_StepBasic_SiUnitAndLengthUnit_1: typeof Handle_StepBasic_SiUnitAndLengthUnit_1;
  Handle_StepBasic_SiUnitAndLengthUnit_2: typeof Handle_StepBasic_SiUnitAndLengthUnit_2;
  Handle_StepBasic_SiUnitAndLengthUnit_3: typeof Handle_StepBasic_SiUnitAndLengthUnit_3;
  Handle_StepBasic_SiUnitAndLengthUnit_4: typeof Handle_StepBasic_SiUnitAndLengthUnit_4;
  Handle_StepBasic_SiUnitAndMassUnit_1: typeof Handle_StepBasic_SiUnitAndMassUnit_1;
  Handle_StepBasic_SiUnitAndMassUnit_2: typeof Handle_StepBasic_SiUnitAndMassUnit_2;
  Handle_StepBasic_SiUnitAndMassUnit_3: typeof Handle_StepBasic_SiUnitAndMassUnit_3;
  Handle_StepBasic_SiUnitAndMassUnit_4: typeof Handle_StepBasic_SiUnitAndMassUnit_4;
  Handle_StepBasic_SiUnitAndPlaneAngleUnit_1: typeof Handle_StepBasic_SiUnitAndPlaneAngleUnit_1;
  Handle_StepBasic_SiUnitAndPlaneAngleUnit_2: typeof Handle_StepBasic_SiUnitAndPlaneAngleUnit_2;
  Handle_StepBasic_SiUnitAndPlaneAngleUnit_3: typeof Handle_StepBasic_SiUnitAndPlaneAngleUnit_3;
  Handle_StepBasic_SiUnitAndPlaneAngleUnit_4: typeof Handle_StepBasic_SiUnitAndPlaneAngleUnit_4;
  Handle_StepBasic_SiUnitAndRatioUnit_1: typeof Handle_StepBasic_SiUnitAndRatioUnit_1;
  Handle_StepBasic_SiUnitAndRatioUnit_2: typeof Handle_StepBasic_SiUnitAndRatioUnit_2;
  Handle_StepBasic_SiUnitAndRatioUnit_3: typeof Handle_StepBasic_SiUnitAndRatioUnit_3;
  Handle_StepBasic_SiUnitAndRatioUnit_4: typeof Handle_StepBasic_SiUnitAndRatioUnit_4;
  Handle_StepBasic_SiUnitAndSolidAngleUnit_1: typeof Handle_StepBasic_SiUnitAndSolidAngleUnit_1;
  Handle_StepBasic_SiUnitAndSolidAngleUnit_2: typeof Handle_StepBasic_SiUnitAndSolidAngleUnit_2;
  Handle_StepBasic_SiUnitAndSolidAngleUnit_3: typeof Handle_StepBasic_SiUnitAndSolidAngleUnit_3;
  Handle_StepBasic_SiUnitAndSolidAngleUnit_4: typeof Handle_StepBasic_SiUnitAndSolidAngleUnit_4;
  Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_1: typeof Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_1;
  Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_2: typeof Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_2;
  Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_3: typeof Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_3;
  Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_4: typeof Handle_StepBasic_SiUnitAndThermodynamicTemperatureUnit_4;
  Handle_StepBasic_SiUnitAndTimeUnit_1: typeof Handle_StepBasic_SiUnitAndTimeUnit_1;
  Handle_StepBasic_SiUnitAndTimeUnit_2: typeof Handle_StepBasic_SiUnitAndTimeUnit_2;
  Handle_StepBasic_SiUnitAndTimeUnit_3: typeof Handle_StepBasic_SiUnitAndTimeUnit_3;
  Handle_StepBasic_SiUnitAndTimeUnit_4: typeof Handle_StepBasic_SiUnitAndTimeUnit_4;
  Handle_StepBasic_SiUnitAndVolumeUnit_1: typeof Handle_StepBasic_SiUnitAndVolumeUnit_1;
  Handle_StepBasic_SiUnitAndVolumeUnit_2: typeof Handle_StepBasic_SiUnitAndVolumeUnit_2;
  Handle_StepBasic_SiUnitAndVolumeUnit_3: typeof Handle_StepBasic_SiUnitAndVolumeUnit_3;
  Handle_StepBasic_SiUnitAndVolumeUnit_4: typeof Handle_StepBasic_SiUnitAndVolumeUnit_4;
  Handle_StepBasic_SizeMember_1: typeof Handle_StepBasic_SizeMember_1;
  Handle_StepBasic_SizeMember_2: typeof Handle_StepBasic_SizeMember_2;
  Handle_StepBasic_SizeMember_3: typeof Handle_StepBasic_SizeMember_3;
  Handle_StepBasic_SizeMember_4: typeof Handle_StepBasic_SizeMember_4;
  Handle_StepBasic_SolidAngleMeasureWithUnit_1: typeof Handle_StepBasic_SolidAngleMeasureWithUnit_1;
  Handle_StepBasic_SolidAngleMeasureWithUnit_2: typeof Handle_StepBasic_SolidAngleMeasureWithUnit_2;
  Handle_StepBasic_SolidAngleMeasureWithUnit_3: typeof Handle_StepBasic_SolidAngleMeasureWithUnit_3;
  Handle_StepBasic_SolidAngleMeasureWithUnit_4: typeof Handle_StepBasic_SolidAngleMeasureWithUnit_4;
  Handle_StepBasic_SolidAngleUnit_1: typeof Handle_StepBasic_SolidAngleUnit_1;
  Handle_StepBasic_SolidAngleUnit_2: typeof Handle_StepBasic_SolidAngleUnit_2;
  Handle_StepBasic_SolidAngleUnit_3: typeof Handle_StepBasic_SolidAngleUnit_3;
  Handle_StepBasic_SolidAngleUnit_4: typeof Handle_StepBasic_SolidAngleUnit_4;
  Handle_StepBasic_ThermodynamicTemperatureUnit_1: typeof Handle_StepBasic_ThermodynamicTemperatureUnit_1;
  Handle_StepBasic_ThermodynamicTemperatureUnit_2: typeof Handle_StepBasic_ThermodynamicTemperatureUnit_2;
  Handle_StepBasic_ThermodynamicTemperatureUnit_3: typeof Handle_StepBasic_ThermodynamicTemperatureUnit_3;
  Handle_StepBasic_ThermodynamicTemperatureUnit_4: typeof Handle_StepBasic_ThermodynamicTemperatureUnit_4;
  Handle_StepBasic_TimeMeasureWithUnit_1: typeof Handle_StepBasic_TimeMeasureWithUnit_1;
  Handle_StepBasic_TimeMeasureWithUnit_2: typeof Handle_StepBasic_TimeMeasureWithUnit_2;
  Handle_StepBasic_TimeMeasureWithUnit_3: typeof Handle_StepBasic_TimeMeasureWithUnit_3;
  Handle_StepBasic_TimeMeasureWithUnit_4: typeof Handle_StepBasic_TimeMeasureWithUnit_4;
  Handle_StepBasic_TimeUnit_1: typeof Handle_StepBasic_TimeUnit_1;
  Handle_StepBasic_TimeUnit_2: typeof Handle_StepBasic_TimeUnit_2;
  Handle_StepBasic_TimeUnit_3: typeof Handle_StepBasic_TimeUnit_3;
  Handle_StepBasic_TimeUnit_4: typeof Handle_StepBasic_TimeUnit_4;
  Handle_StepBasic_VersionedActionRequest_1: typeof Handle_StepBasic_VersionedActionRequest_1;
  Handle_StepBasic_VersionedActionRequest_2: typeof Handle_StepBasic_VersionedActionRequest_2;
  Handle_StepBasic_VersionedActionRequest_3: typeof Handle_StepBasic_VersionedActionRequest_3;
  Handle_StepBasic_VersionedActionRequest_4: typeof Handle_StepBasic_VersionedActionRequest_4;
  Handle_StepBasic_VolumeUnit_1: typeof Handle_StepBasic_VolumeUnit_1;
  Handle_StepBasic_VolumeUnit_2: typeof Handle_StepBasic_VolumeUnit_2;
  Handle_StepBasic_VolumeUnit_3: typeof Handle_StepBasic_VolumeUnit_3;
  Handle_StepBasic_VolumeUnit_4: typeof Handle_StepBasic_VolumeUnit_4;
  Handle_StepBasic_WeekOfYearAndDayDate_1: typeof Handle_StepBasic_WeekOfYearAndDayDate_1;
  Handle_StepBasic_WeekOfYearAndDayDate_2: typeof Handle_StepBasic_WeekOfYearAndDayDate_2;
  Handle_StepBasic_WeekOfYearAndDayDate_3: typeof Handle_StepBasic_WeekOfYearAndDayDate_3;
  Handle_StepBasic_WeekOfYearAndDayDate_4: typeof Handle_StepBasic_WeekOfYearAndDayDate_4;
  Handle_StepRepr_CompositeShapeAspect_1: typeof Handle_StepRepr_CompositeShapeAspect_1;
  Handle_StepRepr_CompositeShapeAspect_2: typeof Handle_StepRepr_CompositeShapeAspect_2;
  Handle_StepRepr_CompositeShapeAspect_3: typeof Handle_StepRepr_CompositeShapeAspect_3;
  Handle_StepRepr_CompositeShapeAspect_4: typeof Handle_StepRepr_CompositeShapeAspect_4;
  Handle_StepRepr_HArray1OfShapeAspect_1: typeof Handle_StepRepr_HArray1OfShapeAspect_1;
  Handle_StepRepr_HArray1OfShapeAspect_2: typeof Handle_StepRepr_HArray1OfShapeAspect_2;
  Handle_StepRepr_HArray1OfShapeAspect_3: typeof Handle_StepRepr_HArray1OfShapeAspect_3;
  Handle_StepRepr_HArray1OfShapeAspect_4: typeof Handle_StepRepr_HArray1OfShapeAspect_4;
  Handle_StepGeom_Point_1: typeof Handle_StepGeom_Point_1;
  Handle_StepGeom_Point_2: typeof Handle_StepGeom_Point_2;
  Handle_StepGeom_Point_3: typeof Handle_StepGeom_Point_3;
  Handle_StepGeom_Point_4: typeof Handle_StepGeom_Point_4;
  Handle_StepGeom_CompositeCurveSegment_1: typeof Handle_StepGeom_CompositeCurveSegment_1;
  Handle_StepGeom_CompositeCurveSegment_2: typeof Handle_StepGeom_CompositeCurveSegment_2;
  Handle_StepGeom_CompositeCurveSegment_3: typeof Handle_StepGeom_CompositeCurveSegment_3;
  Handle_StepGeom_CompositeCurveSegment_4: typeof Handle_StepGeom_CompositeCurveSegment_4;
  Handle_StepGeom_HArray1OfCompositeCurveSegment_1: typeof Handle_StepGeom_HArray1OfCompositeCurveSegment_1;
  Handle_StepGeom_HArray1OfCompositeCurveSegment_2: typeof Handle_StepGeom_HArray1OfCompositeCurveSegment_2;
  Handle_StepGeom_HArray1OfCompositeCurveSegment_3: typeof Handle_StepGeom_HArray1OfCompositeCurveSegment_3;
  Handle_StepGeom_HArray1OfCompositeCurveSegment_4: typeof Handle_StepGeom_HArray1OfCompositeCurveSegment_4;
  Handle_StepGeom_Curve_1: typeof Handle_StepGeom_Curve_1;
  Handle_StepGeom_Curve_2: typeof Handle_StepGeom_Curve_2;
  Handle_StepGeom_Curve_3: typeof Handle_StepGeom_Curve_3;
  Handle_StepGeom_Curve_4: typeof Handle_StepGeom_Curve_4;
  Handle_StepGeom_BoundedCurve_1: typeof Handle_StepGeom_BoundedCurve_1;
  Handle_StepGeom_BoundedCurve_2: typeof Handle_StepGeom_BoundedCurve_2;
  Handle_StepGeom_BoundedCurve_3: typeof Handle_StepGeom_BoundedCurve_3;
  Handle_StepGeom_BoundedCurve_4: typeof Handle_StepGeom_BoundedCurve_4;
  Handle_StepGeom_CompositeCurve_1: typeof Handle_StepGeom_CompositeCurve_1;
  Handle_StepGeom_CompositeCurve_2: typeof Handle_StepGeom_CompositeCurve_2;
  Handle_StepGeom_CompositeCurve_3: typeof Handle_StepGeom_CompositeCurve_3;
  Handle_StepGeom_CompositeCurve_4: typeof Handle_StepGeom_CompositeCurve_4;
  Handle_StepGeom_CompositeCurveOnSurface_1: typeof Handle_StepGeom_CompositeCurveOnSurface_1;
  Handle_StepGeom_CompositeCurveOnSurface_2: typeof Handle_StepGeom_CompositeCurveOnSurface_2;
  Handle_StepGeom_CompositeCurveOnSurface_3: typeof Handle_StepGeom_CompositeCurveOnSurface_3;
  Handle_StepGeom_CompositeCurveOnSurface_4: typeof Handle_StepGeom_CompositeCurveOnSurface_4;
  Handle_StepGeom_BoundaryCurve_1: typeof Handle_StepGeom_BoundaryCurve_1;
  Handle_StepGeom_BoundaryCurve_2: typeof Handle_StepGeom_BoundaryCurve_2;
  Handle_StepGeom_BoundaryCurve_3: typeof Handle_StepGeom_BoundaryCurve_3;
  Handle_StepGeom_BoundaryCurve_4: typeof Handle_StepGeom_BoundaryCurve_4;
  Handle_StepGeom_CartesianPoint_1: typeof Handle_StepGeom_CartesianPoint_1;
  Handle_StepGeom_CartesianPoint_2: typeof Handle_StepGeom_CartesianPoint_2;
  Handle_StepGeom_CartesianPoint_3: typeof Handle_StepGeom_CartesianPoint_3;
  Handle_StepGeom_CartesianPoint_4: typeof Handle_StepGeom_CartesianPoint_4;
  StepGeom_Array1OfPcurveOrSurface_1: typeof StepGeom_Array1OfPcurveOrSurface_1;
  StepGeom_Array1OfPcurveOrSurface_2: typeof StepGeom_Array1OfPcurveOrSurface_2;
  StepGeom_Array1OfPcurveOrSurface_3: typeof StepGeom_Array1OfPcurveOrSurface_3;
  StepGeom_Array1OfPcurveOrSurface_4: typeof StepGeom_Array1OfPcurveOrSurface_4;
  StepGeom_Array1OfPcurveOrSurface_5: typeof StepGeom_Array1OfPcurveOrSurface_5;
  StepGeom_Array1OfSurfaceBoundary_1: typeof StepGeom_Array1OfSurfaceBoundary_1;
  StepGeom_Array1OfSurfaceBoundary_2: typeof StepGeom_Array1OfSurfaceBoundary_2;
  StepGeom_Array1OfSurfaceBoundary_3: typeof StepGeom_Array1OfSurfaceBoundary_3;
  StepGeom_Array1OfSurfaceBoundary_4: typeof StepGeom_Array1OfSurfaceBoundary_4;
  StepGeom_Array1OfSurfaceBoundary_5: typeof StepGeom_Array1OfSurfaceBoundary_5;
  StepGeom_Array1OfTrimmingSelect_1: typeof StepGeom_Array1OfTrimmingSelect_1;
  StepGeom_Array1OfTrimmingSelect_2: typeof StepGeom_Array1OfTrimmingSelect_2;
  StepGeom_Array1OfTrimmingSelect_3: typeof StepGeom_Array1OfTrimmingSelect_3;
  StepGeom_Array1OfTrimmingSelect_4: typeof StepGeom_Array1OfTrimmingSelect_4;
  StepGeom_Array1OfTrimmingSelect_5: typeof StepGeom_Array1OfTrimmingSelect_5;
  Handle_StepGeom_SurfacePatch_1: typeof Handle_StepGeom_SurfacePatch_1;
  Handle_StepGeom_SurfacePatch_2: typeof Handle_StepGeom_SurfacePatch_2;
  Handle_StepGeom_SurfacePatch_3: typeof Handle_StepGeom_SurfacePatch_3;
  Handle_StepGeom_SurfacePatch_4: typeof Handle_StepGeom_SurfacePatch_4;
  Handle_StepGeom_Axis1Placement_1: typeof Handle_StepGeom_Axis1Placement_1;
  Handle_StepGeom_Axis1Placement_2: typeof Handle_StepGeom_Axis1Placement_2;
  Handle_StepGeom_Axis1Placement_3: typeof Handle_StepGeom_Axis1Placement_3;
  Handle_StepGeom_Axis1Placement_4: typeof Handle_StepGeom_Axis1Placement_4;
  Handle_StepGeom_Axis2Placement2d_1: typeof Handle_StepGeom_Axis2Placement2d_1;
  Handle_StepGeom_Axis2Placement2d_2: typeof Handle_StepGeom_Axis2Placement2d_2;
  Handle_StepGeom_Axis2Placement2d_3: typeof Handle_StepGeom_Axis2Placement2d_3;
  Handle_StepGeom_Axis2Placement2d_4: typeof Handle_StepGeom_Axis2Placement2d_4;
  Handle_StepGeom_HArray1OfCartesianPoint_1: typeof Handle_StepGeom_HArray1OfCartesianPoint_1;
  Handle_StepGeom_HArray1OfCartesianPoint_2: typeof Handle_StepGeom_HArray1OfCartesianPoint_2;
  Handle_StepGeom_HArray1OfCartesianPoint_3: typeof Handle_StepGeom_HArray1OfCartesianPoint_3;
  Handle_StepGeom_HArray1OfCartesianPoint_4: typeof Handle_StepGeom_HArray1OfCartesianPoint_4;
  Handle_StepGeom_BSplineCurve_1: typeof Handle_StepGeom_BSplineCurve_1;
  Handle_StepGeom_BSplineCurve_2: typeof Handle_StepGeom_BSplineCurve_2;
  Handle_StepGeom_BSplineCurve_3: typeof Handle_StepGeom_BSplineCurve_3;
  Handle_StepGeom_BSplineCurve_4: typeof Handle_StepGeom_BSplineCurve_4;
  Handle_StepGeom_BSplineCurveWithKnots_1: typeof Handle_StepGeom_BSplineCurveWithKnots_1;
  Handle_StepGeom_BSplineCurveWithKnots_2: typeof Handle_StepGeom_BSplineCurveWithKnots_2;
  Handle_StepGeom_BSplineCurveWithKnots_3: typeof Handle_StepGeom_BSplineCurveWithKnots_3;
  Handle_StepGeom_BSplineCurveWithKnots_4: typeof Handle_StepGeom_BSplineCurveWithKnots_4;
  Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_1: typeof Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_1;
  Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_2: typeof Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_2;
  Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_3: typeof Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_3;
  Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_4: typeof Handle_StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve_4;
  Handle_StepGeom_HArray2OfCartesianPoint_1: typeof Handle_StepGeom_HArray2OfCartesianPoint_1;
  Handle_StepGeom_HArray2OfCartesianPoint_2: typeof Handle_StepGeom_HArray2OfCartesianPoint_2;
  Handle_StepGeom_HArray2OfCartesianPoint_3: typeof Handle_StepGeom_HArray2OfCartesianPoint_3;
  Handle_StepGeom_HArray2OfCartesianPoint_4: typeof Handle_StepGeom_HArray2OfCartesianPoint_4;
  Handle_StepGeom_Surface_1: typeof Handle_StepGeom_Surface_1;
  Handle_StepGeom_Surface_2: typeof Handle_StepGeom_Surface_2;
  Handle_StepGeom_Surface_3: typeof Handle_StepGeom_Surface_3;
  Handle_StepGeom_Surface_4: typeof Handle_StepGeom_Surface_4;
  Handle_StepGeom_BoundedSurface_1: typeof Handle_StepGeom_BoundedSurface_1;
  Handle_StepGeom_BoundedSurface_2: typeof Handle_StepGeom_BoundedSurface_2;
  Handle_StepGeom_BoundedSurface_3: typeof Handle_StepGeom_BoundedSurface_3;
  Handle_StepGeom_BoundedSurface_4: typeof Handle_StepGeom_BoundedSurface_4;
  Handle_StepGeom_BSplineSurface_1: typeof Handle_StepGeom_BSplineSurface_1;
  Handle_StepGeom_BSplineSurface_2: typeof Handle_StepGeom_BSplineSurface_2;
  Handle_StepGeom_BSplineSurface_3: typeof Handle_StepGeom_BSplineSurface_3;
  Handle_StepGeom_BSplineSurface_4: typeof Handle_StepGeom_BSplineSurface_4;
  Handle_StepGeom_BSplineSurfaceWithKnots_1: typeof Handle_StepGeom_BSplineSurfaceWithKnots_1;
  Handle_StepGeom_BSplineSurfaceWithKnots_2: typeof Handle_StepGeom_BSplineSurfaceWithKnots_2;
  Handle_StepGeom_BSplineSurfaceWithKnots_3: typeof Handle_StepGeom_BSplineSurfaceWithKnots_3;
  Handle_StepGeom_BSplineSurfaceWithKnots_4: typeof Handle_StepGeom_BSplineSurfaceWithKnots_4;
  Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_1: typeof Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_1;
  Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_2: typeof Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_2;
  Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_3: typeof Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_3;
  Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_4: typeof Handle_StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface_4;
  Handle_StepGeom_BezierCurve_1: typeof Handle_StepGeom_BezierCurve_1;
  Handle_StepGeom_BezierCurve_2: typeof Handle_StepGeom_BezierCurve_2;
  Handle_StepGeom_BezierCurve_3: typeof Handle_StepGeom_BezierCurve_3;
  Handle_StepGeom_BezierCurve_4: typeof Handle_StepGeom_BezierCurve_4;
  Handle_StepGeom_BezierCurveAndRationalBSplineCurve_1: typeof Handle_StepGeom_BezierCurveAndRationalBSplineCurve_1;
  Handle_StepGeom_BezierCurveAndRationalBSplineCurve_2: typeof Handle_StepGeom_BezierCurveAndRationalBSplineCurve_2;
  Handle_StepGeom_BezierCurveAndRationalBSplineCurve_3: typeof Handle_StepGeom_BezierCurveAndRationalBSplineCurve_3;
  Handle_StepGeom_BezierCurveAndRationalBSplineCurve_4: typeof Handle_StepGeom_BezierCurveAndRationalBSplineCurve_4;
  Handle_StepGeom_BezierSurface_1: typeof Handle_StepGeom_BezierSurface_1;
  Handle_StepGeom_BezierSurface_2: typeof Handle_StepGeom_BezierSurface_2;
  Handle_StepGeom_BezierSurface_3: typeof Handle_StepGeom_BezierSurface_3;
  Handle_StepGeom_BezierSurface_4: typeof Handle_StepGeom_BezierSurface_4;
  Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_1: typeof Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_1;
  Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_2: typeof Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_2;
  Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_3: typeof Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_3;
  Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_4: typeof Handle_StepGeom_BezierSurfaceAndRationalBSplineSurface_4;
  Handle_StepGeom_CartesianTransformationOperator_1: typeof Handle_StepGeom_CartesianTransformationOperator_1;
  Handle_StepGeom_CartesianTransformationOperator_2: typeof Handle_StepGeom_CartesianTransformationOperator_2;
  Handle_StepGeom_CartesianTransformationOperator_3: typeof Handle_StepGeom_CartesianTransformationOperator_3;
  Handle_StepGeom_CartesianTransformationOperator_4: typeof Handle_StepGeom_CartesianTransformationOperator_4;
  Handle_StepGeom_CartesianTransformationOperator2d_1: typeof Handle_StepGeom_CartesianTransformationOperator2d_1;
  Handle_StepGeom_CartesianTransformationOperator2d_2: typeof Handle_StepGeom_CartesianTransformationOperator2d_2;
  Handle_StepGeom_CartesianTransformationOperator2d_3: typeof Handle_StepGeom_CartesianTransformationOperator2d_3;
  Handle_StepGeom_CartesianTransformationOperator2d_4: typeof Handle_StepGeom_CartesianTransformationOperator2d_4;
  Handle_StepGeom_CartesianTransformationOperator3d_1: typeof Handle_StepGeom_CartesianTransformationOperator3d_1;
  Handle_StepGeom_CartesianTransformationOperator3d_2: typeof Handle_StepGeom_CartesianTransformationOperator3d_2;
  Handle_StepGeom_CartesianTransformationOperator3d_3: typeof Handle_StepGeom_CartesianTransformationOperator3d_3;
  Handle_StepGeom_CartesianTransformationOperator3d_4: typeof Handle_StepGeom_CartesianTransformationOperator3d_4;
  Handle_StepGeom_Conic_1: typeof Handle_StepGeom_Conic_1;
  Handle_StepGeom_Conic_2: typeof Handle_StepGeom_Conic_2;
  Handle_StepGeom_Conic_3: typeof Handle_StepGeom_Conic_3;
  Handle_StepGeom_Conic_4: typeof Handle_StepGeom_Conic_4;
  Handle_StepGeom_Circle_1: typeof Handle_StepGeom_Circle_1;
  Handle_StepGeom_Circle_2: typeof Handle_StepGeom_Circle_2;
  Handle_StepGeom_Circle_3: typeof Handle_StepGeom_Circle_3;
  Handle_StepGeom_Circle_4: typeof Handle_StepGeom_Circle_4;
  Handle_StepGeom_ElementarySurface_1: typeof Handle_StepGeom_ElementarySurface_1;
  Handle_StepGeom_ElementarySurface_2: typeof Handle_StepGeom_ElementarySurface_2;
  Handle_StepGeom_ElementarySurface_3: typeof Handle_StepGeom_ElementarySurface_3;
  Handle_StepGeom_ElementarySurface_4: typeof Handle_StepGeom_ElementarySurface_4;
  Handle_StepGeom_ConicalSurface_1: typeof Handle_StepGeom_ConicalSurface_1;
  Handle_StepGeom_ConicalSurface_2: typeof Handle_StepGeom_ConicalSurface_2;
  Handle_StepGeom_ConicalSurface_3: typeof Handle_StepGeom_ConicalSurface_3;
  Handle_StepGeom_ConicalSurface_4: typeof Handle_StepGeom_ConicalSurface_4;
  Handle_StepGeom_HArray1OfSurfaceBoundary_1: typeof Handle_StepGeom_HArray1OfSurfaceBoundary_1;
  Handle_StepGeom_HArray1OfSurfaceBoundary_2: typeof Handle_StepGeom_HArray1OfSurfaceBoundary_2;
  Handle_StepGeom_HArray1OfSurfaceBoundary_3: typeof Handle_StepGeom_HArray1OfSurfaceBoundary_3;
  Handle_StepGeom_HArray1OfSurfaceBoundary_4: typeof Handle_StepGeom_HArray1OfSurfaceBoundary_4;
  Handle_StepGeom_CurveBoundedSurface_1: typeof Handle_StepGeom_CurveBoundedSurface_1;
  Handle_StepGeom_CurveBoundedSurface_2: typeof Handle_StepGeom_CurveBoundedSurface_2;
  Handle_StepGeom_CurveBoundedSurface_3: typeof Handle_StepGeom_CurveBoundedSurface_3;
  Handle_StepGeom_CurveBoundedSurface_4: typeof Handle_StepGeom_CurveBoundedSurface_4;
  Handle_StepGeom_CurveReplica_1: typeof Handle_StepGeom_CurveReplica_1;
  Handle_StepGeom_CurveReplica_2: typeof Handle_StepGeom_CurveReplica_2;
  Handle_StepGeom_CurveReplica_3: typeof Handle_StepGeom_CurveReplica_3;
  Handle_StepGeom_CurveReplica_4: typeof Handle_StepGeom_CurveReplica_4;
  Handle_StepGeom_CylindricalSurface_1: typeof Handle_StepGeom_CylindricalSurface_1;
  Handle_StepGeom_CylindricalSurface_2: typeof Handle_StepGeom_CylindricalSurface_2;
  Handle_StepGeom_CylindricalSurface_3: typeof Handle_StepGeom_CylindricalSurface_3;
  Handle_StepGeom_CylindricalSurface_4: typeof Handle_StepGeom_CylindricalSurface_4;
  Handle_StepGeom_DegeneratePcurve_1: typeof Handle_StepGeom_DegeneratePcurve_1;
  Handle_StepGeom_DegeneratePcurve_2: typeof Handle_StepGeom_DegeneratePcurve_2;
  Handle_StepGeom_DegeneratePcurve_3: typeof Handle_StepGeom_DegeneratePcurve_3;
  Handle_StepGeom_DegeneratePcurve_4: typeof Handle_StepGeom_DegeneratePcurve_4;
  Handle_StepGeom_ToroidalSurface_1: typeof Handle_StepGeom_ToroidalSurface_1;
  Handle_StepGeom_ToroidalSurface_2: typeof Handle_StepGeom_ToroidalSurface_2;
  Handle_StepGeom_ToroidalSurface_3: typeof Handle_StepGeom_ToroidalSurface_3;
  Handle_StepGeom_ToroidalSurface_4: typeof Handle_StepGeom_ToroidalSurface_4;
  Handle_StepGeom_DegenerateToroidalSurface_1: typeof Handle_StepGeom_DegenerateToroidalSurface_1;
  Handle_StepGeom_DegenerateToroidalSurface_2: typeof Handle_StepGeom_DegenerateToroidalSurface_2;
  Handle_StepGeom_DegenerateToroidalSurface_3: typeof Handle_StepGeom_DegenerateToroidalSurface_3;
  Handle_StepGeom_DegenerateToroidalSurface_4: typeof Handle_StepGeom_DegenerateToroidalSurface_4;
  Handle_StepGeom_Direction_1: typeof Handle_StepGeom_Direction_1;
  Handle_StepGeom_Direction_2: typeof Handle_StepGeom_Direction_2;
  Handle_StepGeom_Direction_3: typeof Handle_StepGeom_Direction_3;
  Handle_StepGeom_Direction_4: typeof Handle_StepGeom_Direction_4;
  Handle_StepGeom_Ellipse_1: typeof Handle_StepGeom_Ellipse_1;
  Handle_StepGeom_Ellipse_2: typeof Handle_StepGeom_Ellipse_2;
  Handle_StepGeom_Ellipse_3: typeof Handle_StepGeom_Ellipse_3;
  Handle_StepGeom_Ellipse_4: typeof Handle_StepGeom_Ellipse_4;
  Handle_StepGeom_EvaluatedDegeneratePcurve_1: typeof Handle_StepGeom_EvaluatedDegeneratePcurve_1;
  Handle_StepGeom_EvaluatedDegeneratePcurve_2: typeof Handle_StepGeom_EvaluatedDegeneratePcurve_2;
  Handle_StepGeom_EvaluatedDegeneratePcurve_3: typeof Handle_StepGeom_EvaluatedDegeneratePcurve_3;
  Handle_StepGeom_EvaluatedDegeneratePcurve_4: typeof Handle_StepGeom_EvaluatedDegeneratePcurve_4;
  Handle_StepRepr_RepresentationContext_1: typeof Handle_StepRepr_RepresentationContext_1;
  Handle_StepRepr_RepresentationContext_2: typeof Handle_StepRepr_RepresentationContext_2;
  Handle_StepRepr_RepresentationContext_3: typeof Handle_StepRepr_RepresentationContext_3;
  Handle_StepRepr_RepresentationContext_4: typeof Handle_StepRepr_RepresentationContext_4;
  Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_1: typeof Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_1;
  Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_2: typeof Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_2;
  Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_3: typeof Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_3;
  Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_4: typeof Handle_StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx_4;
  Handle_StepGeom_GeometricRepresentationContext_1: typeof Handle_StepGeom_GeometricRepresentationContext_1;
  Handle_StepGeom_GeometricRepresentationContext_2: typeof Handle_StepGeom_GeometricRepresentationContext_2;
  Handle_StepGeom_GeometricRepresentationContext_3: typeof Handle_StepGeom_GeometricRepresentationContext_3;
  Handle_StepGeom_GeometricRepresentationContext_4: typeof Handle_StepGeom_GeometricRepresentationContext_4;
  Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_1: typeof Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_1;
  Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_2: typeof Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_2;
  Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_3: typeof Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_3;
  Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_4: typeof Handle_StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext_4;
  Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_1: typeof Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_1;
  Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_2: typeof Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_2;
  Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_3: typeof Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_3;
  Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_4: typeof Handle_StepGeom_GeometricRepresentationContextAndParametricRepresentationContext_4;
  Handle_StepGeom_HArray1OfBoundaryCurve_1: typeof Handle_StepGeom_HArray1OfBoundaryCurve_1;
  Handle_StepGeom_HArray1OfBoundaryCurve_2: typeof Handle_StepGeom_HArray1OfBoundaryCurve_2;
  Handle_StepGeom_HArray1OfBoundaryCurve_3: typeof Handle_StepGeom_HArray1OfBoundaryCurve_3;
  Handle_StepGeom_HArray1OfBoundaryCurve_4: typeof Handle_StepGeom_HArray1OfBoundaryCurve_4;
  Handle_StepGeom_HArray1OfCurve_1: typeof Handle_StepGeom_HArray1OfCurve_1;
  Handle_StepGeom_HArray1OfCurve_2: typeof Handle_StepGeom_HArray1OfCurve_2;
  Handle_StepGeom_HArray1OfCurve_3: typeof Handle_StepGeom_HArray1OfCurve_3;
  Handle_StepGeom_HArray1OfCurve_4: typeof Handle_StepGeom_HArray1OfCurve_4;
  Handle_StepGeom_HArray1OfPcurveOrSurface_1: typeof Handle_StepGeom_HArray1OfPcurveOrSurface_1;
  Handle_StepGeom_HArray1OfPcurveOrSurface_2: typeof Handle_StepGeom_HArray1OfPcurveOrSurface_2;
  Handle_StepGeom_HArray1OfPcurveOrSurface_3: typeof Handle_StepGeom_HArray1OfPcurveOrSurface_3;
  Handle_StepGeom_HArray1OfPcurveOrSurface_4: typeof Handle_StepGeom_HArray1OfPcurveOrSurface_4;
  Handle_StepGeom_HArray1OfTrimmingSelect_1: typeof Handle_StepGeom_HArray1OfTrimmingSelect_1;
  Handle_StepGeom_HArray1OfTrimmingSelect_2: typeof Handle_StepGeom_HArray1OfTrimmingSelect_2;
  Handle_StepGeom_HArray1OfTrimmingSelect_3: typeof Handle_StepGeom_HArray1OfTrimmingSelect_3;
  Handle_StepGeom_HArray1OfTrimmingSelect_4: typeof Handle_StepGeom_HArray1OfTrimmingSelect_4;
  Handle_StepGeom_HArray2OfSurfacePatch_1: typeof Handle_StepGeom_HArray2OfSurfacePatch_1;
  Handle_StepGeom_HArray2OfSurfacePatch_2: typeof Handle_StepGeom_HArray2OfSurfacePatch_2;
  Handle_StepGeom_HArray2OfSurfacePatch_3: typeof Handle_StepGeom_HArray2OfSurfacePatch_3;
  Handle_StepGeom_HArray2OfSurfacePatch_4: typeof Handle_StepGeom_HArray2OfSurfacePatch_4;
  Handle_StepGeom_Hyperbola_1: typeof Handle_StepGeom_Hyperbola_1;
  Handle_StepGeom_Hyperbola_2: typeof Handle_StepGeom_Hyperbola_2;
  Handle_StepGeom_Hyperbola_3: typeof Handle_StepGeom_Hyperbola_3;
  Handle_StepGeom_Hyperbola_4: typeof Handle_StepGeom_Hyperbola_4;
  Handle_StepGeom_SurfaceCurve_1: typeof Handle_StepGeom_SurfaceCurve_1;
  Handle_StepGeom_SurfaceCurve_2: typeof Handle_StepGeom_SurfaceCurve_2;
  Handle_StepGeom_SurfaceCurve_3: typeof Handle_StepGeom_SurfaceCurve_3;
  Handle_StepGeom_SurfaceCurve_4: typeof Handle_StepGeom_SurfaceCurve_4;
  Handle_StepGeom_IntersectionCurve_1: typeof Handle_StepGeom_IntersectionCurve_1;
  Handle_StepGeom_IntersectionCurve_2: typeof Handle_StepGeom_IntersectionCurve_2;
  Handle_StepGeom_IntersectionCurve_3: typeof Handle_StepGeom_IntersectionCurve_3;
  Handle_StepGeom_IntersectionCurve_4: typeof Handle_StepGeom_IntersectionCurve_4;
  Handle_StepGeom_Line_1: typeof Handle_StepGeom_Line_1;
  Handle_StepGeom_Line_2: typeof Handle_StepGeom_Line_2;
  Handle_StepGeom_Line_3: typeof Handle_StepGeom_Line_3;
  Handle_StepGeom_Line_4: typeof Handle_StepGeom_Line_4;
  Handle_StepGeom_OffsetCurve3d_1: typeof Handle_StepGeom_OffsetCurve3d_1;
  Handle_StepGeom_OffsetCurve3d_2: typeof Handle_StepGeom_OffsetCurve3d_2;
  Handle_StepGeom_OffsetCurve3d_3: typeof Handle_StepGeom_OffsetCurve3d_3;
  Handle_StepGeom_OffsetCurve3d_4: typeof Handle_StepGeom_OffsetCurve3d_4;
  Handle_StepGeom_OffsetSurface_1: typeof Handle_StepGeom_OffsetSurface_1;
  Handle_StepGeom_OffsetSurface_2: typeof Handle_StepGeom_OffsetSurface_2;
  Handle_StepGeom_OffsetSurface_3: typeof Handle_StepGeom_OffsetSurface_3;
  Handle_StepGeom_OffsetSurface_4: typeof Handle_StepGeom_OffsetSurface_4;
  Handle_StepGeom_OrientedSurface_1: typeof Handle_StepGeom_OrientedSurface_1;
  Handle_StepGeom_OrientedSurface_2: typeof Handle_StepGeom_OrientedSurface_2;
  Handle_StepGeom_OrientedSurface_3: typeof Handle_StepGeom_OrientedSurface_3;
  Handle_StepGeom_OrientedSurface_4: typeof Handle_StepGeom_OrientedSurface_4;
  Handle_StepGeom_OuterBoundaryCurve_1: typeof Handle_StepGeom_OuterBoundaryCurve_1;
  Handle_StepGeom_OuterBoundaryCurve_2: typeof Handle_StepGeom_OuterBoundaryCurve_2;
  Handle_StepGeom_OuterBoundaryCurve_3: typeof Handle_StepGeom_OuterBoundaryCurve_3;
  Handle_StepGeom_OuterBoundaryCurve_4: typeof Handle_StepGeom_OuterBoundaryCurve_4;
  Handle_StepGeom_Parabola_1: typeof Handle_StepGeom_Parabola_1;
  Handle_StepGeom_Parabola_2: typeof Handle_StepGeom_Parabola_2;
  Handle_StepGeom_Parabola_3: typeof Handle_StepGeom_Parabola_3;
  Handle_StepGeom_Parabola_4: typeof Handle_StepGeom_Parabola_4;
  Handle_StepGeom_Pcurve_1: typeof Handle_StepGeom_Pcurve_1;
  Handle_StepGeom_Pcurve_2: typeof Handle_StepGeom_Pcurve_2;
  Handle_StepGeom_Pcurve_3: typeof Handle_StepGeom_Pcurve_3;
  Handle_StepGeom_Pcurve_4: typeof Handle_StepGeom_Pcurve_4;
  Handle_StepGeom_Plane_1: typeof Handle_StepGeom_Plane_1;
  Handle_StepGeom_Plane_2: typeof Handle_StepGeom_Plane_2;
  Handle_StepGeom_Plane_3: typeof Handle_StepGeom_Plane_3;
  Handle_StepGeom_Plane_4: typeof Handle_StepGeom_Plane_4;
  Handle_StepGeom_PointOnCurve_1: typeof Handle_StepGeom_PointOnCurve_1;
  Handle_StepGeom_PointOnCurve_2: typeof Handle_StepGeom_PointOnCurve_2;
  Handle_StepGeom_PointOnCurve_3: typeof Handle_StepGeom_PointOnCurve_3;
  Handle_StepGeom_PointOnCurve_4: typeof Handle_StepGeom_PointOnCurve_4;
  Handle_StepGeom_PointOnSurface_1: typeof Handle_StepGeom_PointOnSurface_1;
  Handle_StepGeom_PointOnSurface_2: typeof Handle_StepGeom_PointOnSurface_2;
  Handle_StepGeom_PointOnSurface_3: typeof Handle_StepGeom_PointOnSurface_3;
  Handle_StepGeom_PointOnSurface_4: typeof Handle_StepGeom_PointOnSurface_4;
  Handle_StepGeom_PointReplica_1: typeof Handle_StepGeom_PointReplica_1;
  Handle_StepGeom_PointReplica_2: typeof Handle_StepGeom_PointReplica_2;
  Handle_StepGeom_PointReplica_3: typeof Handle_StepGeom_PointReplica_3;
  Handle_StepGeom_PointReplica_4: typeof Handle_StepGeom_PointReplica_4;
  Handle_StepGeom_Polyline_1: typeof Handle_StepGeom_Polyline_1;
  Handle_StepGeom_Polyline_2: typeof Handle_StepGeom_Polyline_2;
  Handle_StepGeom_Polyline_3: typeof Handle_StepGeom_Polyline_3;
  Handle_StepGeom_Polyline_4: typeof Handle_StepGeom_Polyline_4;
  Handle_StepGeom_QuasiUniformCurve_1: typeof Handle_StepGeom_QuasiUniformCurve_1;
  Handle_StepGeom_QuasiUniformCurve_2: typeof Handle_StepGeom_QuasiUniformCurve_2;
  Handle_StepGeom_QuasiUniformCurve_3: typeof Handle_StepGeom_QuasiUniformCurve_3;
  Handle_StepGeom_QuasiUniformCurve_4: typeof Handle_StepGeom_QuasiUniformCurve_4;
  Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_1: typeof Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_1;
  Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_2: typeof Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_2;
  Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_3: typeof Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_3;
  Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_4: typeof Handle_StepGeom_QuasiUniformCurveAndRationalBSplineCurve_4;
  Handle_StepGeom_QuasiUniformSurface_1: typeof Handle_StepGeom_QuasiUniformSurface_1;
  Handle_StepGeom_QuasiUniformSurface_2: typeof Handle_StepGeom_QuasiUniformSurface_2;
  Handle_StepGeom_QuasiUniformSurface_3: typeof Handle_StepGeom_QuasiUniformSurface_3;
  Handle_StepGeom_QuasiUniformSurface_4: typeof Handle_StepGeom_QuasiUniformSurface_4;
  Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_1: typeof Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_1;
  Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_2: typeof Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_2;
  Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_3: typeof Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_3;
  Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_4: typeof Handle_StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface_4;
  Handle_StepGeom_RationalBSplineCurve_1: typeof Handle_StepGeom_RationalBSplineCurve_1;
  Handle_StepGeom_RationalBSplineCurve_2: typeof Handle_StepGeom_RationalBSplineCurve_2;
  Handle_StepGeom_RationalBSplineCurve_3: typeof Handle_StepGeom_RationalBSplineCurve_3;
  Handle_StepGeom_RationalBSplineCurve_4: typeof Handle_StepGeom_RationalBSplineCurve_4;
  Handle_StepGeom_RationalBSplineSurface_1: typeof Handle_StepGeom_RationalBSplineSurface_1;
  Handle_StepGeom_RationalBSplineSurface_2: typeof Handle_StepGeom_RationalBSplineSurface_2;
  Handle_StepGeom_RationalBSplineSurface_3: typeof Handle_StepGeom_RationalBSplineSurface_3;
  Handle_StepGeom_RationalBSplineSurface_4: typeof Handle_StepGeom_RationalBSplineSurface_4;
  Handle_StepGeom_RectangularCompositeSurface_1: typeof Handle_StepGeom_RectangularCompositeSurface_1;
  Handle_StepGeom_RectangularCompositeSurface_2: typeof Handle_StepGeom_RectangularCompositeSurface_2;
  Handle_StepGeom_RectangularCompositeSurface_3: typeof Handle_StepGeom_RectangularCompositeSurface_3;
  Handle_StepGeom_RectangularCompositeSurface_4: typeof Handle_StepGeom_RectangularCompositeSurface_4;
  Handle_StepGeom_RectangularTrimmedSurface_1: typeof Handle_StepGeom_RectangularTrimmedSurface_1;
  Handle_StepGeom_RectangularTrimmedSurface_2: typeof Handle_StepGeom_RectangularTrimmedSurface_2;
  Handle_StepGeom_RectangularTrimmedSurface_3: typeof Handle_StepGeom_RectangularTrimmedSurface_3;
  Handle_StepGeom_RectangularTrimmedSurface_4: typeof Handle_StepGeom_RectangularTrimmedSurface_4;
  Handle_StepGeom_ReparametrisedCompositeCurveSegment_1: typeof Handle_StepGeom_ReparametrisedCompositeCurveSegment_1;
  Handle_StepGeom_ReparametrisedCompositeCurveSegment_2: typeof Handle_StepGeom_ReparametrisedCompositeCurveSegment_2;
  Handle_StepGeom_ReparametrisedCompositeCurveSegment_3: typeof Handle_StepGeom_ReparametrisedCompositeCurveSegment_3;
  Handle_StepGeom_ReparametrisedCompositeCurveSegment_4: typeof Handle_StepGeom_ReparametrisedCompositeCurveSegment_4;
  Handle_StepGeom_SeamCurve_1: typeof Handle_StepGeom_SeamCurve_1;
  Handle_StepGeom_SeamCurve_2: typeof Handle_StepGeom_SeamCurve_2;
  Handle_StepGeom_SeamCurve_3: typeof Handle_StepGeom_SeamCurve_3;
  Handle_StepGeom_SeamCurve_4: typeof Handle_StepGeom_SeamCurve_4;
  Handle_StepGeom_SphericalSurface_1: typeof Handle_StepGeom_SphericalSurface_1;
  Handle_StepGeom_SphericalSurface_2: typeof Handle_StepGeom_SphericalSurface_2;
  Handle_StepGeom_SphericalSurface_3: typeof Handle_StepGeom_SphericalSurface_3;
  Handle_StepGeom_SphericalSurface_4: typeof Handle_StepGeom_SphericalSurface_4;
  Handle_StepGeom_SurfaceCurveAndBoundedCurve_1: typeof Handle_StepGeom_SurfaceCurveAndBoundedCurve_1;
  Handle_StepGeom_SurfaceCurveAndBoundedCurve_2: typeof Handle_StepGeom_SurfaceCurveAndBoundedCurve_2;
  Handle_StepGeom_SurfaceCurveAndBoundedCurve_3: typeof Handle_StepGeom_SurfaceCurveAndBoundedCurve_3;
  Handle_StepGeom_SurfaceCurveAndBoundedCurve_4: typeof Handle_StepGeom_SurfaceCurveAndBoundedCurve_4;
  Handle_StepGeom_SweptSurface_1: typeof Handle_StepGeom_SweptSurface_1;
  Handle_StepGeom_SweptSurface_2: typeof Handle_StepGeom_SweptSurface_2;
  Handle_StepGeom_SweptSurface_3: typeof Handle_StepGeom_SweptSurface_3;
  Handle_StepGeom_SweptSurface_4: typeof Handle_StepGeom_SweptSurface_4;
  Handle_StepGeom_SurfaceOfLinearExtrusion_1: typeof Handle_StepGeom_SurfaceOfLinearExtrusion_1;
  Handle_StepGeom_SurfaceOfLinearExtrusion_2: typeof Handle_StepGeom_SurfaceOfLinearExtrusion_2;
  Handle_StepGeom_SurfaceOfLinearExtrusion_3: typeof Handle_StepGeom_SurfaceOfLinearExtrusion_3;
  Handle_StepGeom_SurfaceOfLinearExtrusion_4: typeof Handle_StepGeom_SurfaceOfLinearExtrusion_4;
  Handle_StepGeom_SurfaceOfRevolution_1: typeof Handle_StepGeom_SurfaceOfRevolution_1;
  Handle_StepGeom_SurfaceOfRevolution_2: typeof Handle_StepGeom_SurfaceOfRevolution_2;
  Handle_StepGeom_SurfaceOfRevolution_3: typeof Handle_StepGeom_SurfaceOfRevolution_3;
  Handle_StepGeom_SurfaceOfRevolution_4: typeof Handle_StepGeom_SurfaceOfRevolution_4;
  Handle_StepGeom_SurfaceReplica_1: typeof Handle_StepGeom_SurfaceReplica_1;
  Handle_StepGeom_SurfaceReplica_2: typeof Handle_StepGeom_SurfaceReplica_2;
  Handle_StepGeom_SurfaceReplica_3: typeof Handle_StepGeom_SurfaceReplica_3;
  Handle_StepGeom_SurfaceReplica_4: typeof Handle_StepGeom_SurfaceReplica_4;
  Handle_StepGeom_TrimmedCurve_1: typeof Handle_StepGeom_TrimmedCurve_1;
  Handle_StepGeom_TrimmedCurve_2: typeof Handle_StepGeom_TrimmedCurve_2;
  Handle_StepGeom_TrimmedCurve_3: typeof Handle_StepGeom_TrimmedCurve_3;
  Handle_StepGeom_TrimmedCurve_4: typeof Handle_StepGeom_TrimmedCurve_4;
  Handle_StepGeom_TrimmingMember_1: typeof Handle_StepGeom_TrimmingMember_1;
  Handle_StepGeom_TrimmingMember_2: typeof Handle_StepGeom_TrimmingMember_2;
  Handle_StepGeom_TrimmingMember_3: typeof Handle_StepGeom_TrimmingMember_3;
  Handle_StepGeom_TrimmingMember_4: typeof Handle_StepGeom_TrimmingMember_4;
  Handle_StepGeom_UniformCurve_1: typeof Handle_StepGeom_UniformCurve_1;
  Handle_StepGeom_UniformCurve_2: typeof Handle_StepGeom_UniformCurve_2;
  Handle_StepGeom_UniformCurve_3: typeof Handle_StepGeom_UniformCurve_3;
  Handle_StepGeom_UniformCurve_4: typeof Handle_StepGeom_UniformCurve_4;
  Handle_StepGeom_UniformCurveAndRationalBSplineCurve_1: typeof Handle_StepGeom_UniformCurveAndRationalBSplineCurve_1;
  Handle_StepGeom_UniformCurveAndRationalBSplineCurve_2: typeof Handle_StepGeom_UniformCurveAndRationalBSplineCurve_2;
  Handle_StepGeom_UniformCurveAndRationalBSplineCurve_3: typeof Handle_StepGeom_UniformCurveAndRationalBSplineCurve_3;
  Handle_StepGeom_UniformCurveAndRationalBSplineCurve_4: typeof Handle_StepGeom_UniformCurveAndRationalBSplineCurve_4;
  Handle_StepGeom_UniformSurface_1: typeof Handle_StepGeom_UniformSurface_1;
  Handle_StepGeom_UniformSurface_2: typeof Handle_StepGeom_UniformSurface_2;
  Handle_StepGeom_UniformSurface_3: typeof Handle_StepGeom_UniformSurface_3;
  Handle_StepGeom_UniformSurface_4: typeof Handle_StepGeom_UniformSurface_4;
  Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_1: typeof Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_1;
  Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_2: typeof Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_2;
  Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_3: typeof Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_3;
  Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_4: typeof Handle_StepGeom_UniformSurfaceAndRationalBSplineSurface_4;
  Handle_StepGeom_Vector_1: typeof Handle_StepGeom_Vector_1;
  Handle_StepGeom_Vector_2: typeof Handle_StepGeom_Vector_2;
  Handle_StepGeom_Vector_3: typeof Handle_StepGeom_Vector_3;
  Handle_StepGeom_Vector_4: typeof Handle_StepGeom_Vector_4;
  Handle_StepRepr_ContinuosShapeAspect_1: typeof Handle_StepRepr_ContinuosShapeAspect_1;
  Handle_StepRepr_ContinuosShapeAspect_2: typeof Handle_StepRepr_ContinuosShapeAspect_2;
  Handle_StepRepr_ContinuosShapeAspect_3: typeof Handle_StepRepr_ContinuosShapeAspect_3;
  Handle_StepRepr_ContinuosShapeAspect_4: typeof Handle_StepRepr_ContinuosShapeAspect_4;
  Handle_StepRepr_AllAroundShapeAspect_1: typeof Handle_StepRepr_AllAroundShapeAspect_1;
  Handle_StepRepr_AllAroundShapeAspect_2: typeof Handle_StepRepr_AllAroundShapeAspect_2;
  Handle_StepRepr_AllAroundShapeAspect_3: typeof Handle_StepRepr_AllAroundShapeAspect_3;
  Handle_StepRepr_AllAroundShapeAspect_4: typeof Handle_StepRepr_AllAroundShapeAspect_4;
  Handle_StepRepr_DerivedShapeAspect_1: typeof Handle_StepRepr_DerivedShapeAspect_1;
  Handle_StepRepr_DerivedShapeAspect_2: typeof Handle_StepRepr_DerivedShapeAspect_2;
  Handle_StepRepr_DerivedShapeAspect_3: typeof Handle_StepRepr_DerivedShapeAspect_3;
  Handle_StepRepr_DerivedShapeAspect_4: typeof Handle_StepRepr_DerivedShapeAspect_4;
  Handle_StepRepr_Apex_1: typeof Handle_StepRepr_Apex_1;
  Handle_StepRepr_Apex_2: typeof Handle_StepRepr_Apex_2;
  Handle_StepRepr_Apex_3: typeof Handle_StepRepr_Apex_3;
  Handle_StepRepr_Apex_4: typeof Handle_StepRepr_Apex_4;
  Handle_StepRepr_ProductDefinitionUsage_1: typeof Handle_StepRepr_ProductDefinitionUsage_1;
  Handle_StepRepr_ProductDefinitionUsage_2: typeof Handle_StepRepr_ProductDefinitionUsage_2;
  Handle_StepRepr_ProductDefinitionUsage_3: typeof Handle_StepRepr_ProductDefinitionUsage_3;
  Handle_StepRepr_ProductDefinitionUsage_4: typeof Handle_StepRepr_ProductDefinitionUsage_4;
  Handle_StepRepr_AssemblyComponentUsage_1: typeof Handle_StepRepr_AssemblyComponentUsage_1;
  Handle_StepRepr_AssemblyComponentUsage_2: typeof Handle_StepRepr_AssemblyComponentUsage_2;
  Handle_StepRepr_AssemblyComponentUsage_3: typeof Handle_StepRepr_AssemblyComponentUsage_3;
  Handle_StepRepr_AssemblyComponentUsage_4: typeof Handle_StepRepr_AssemblyComponentUsage_4;
  Handle_StepRepr_AssemblyComponentUsageSubstitute_1: typeof Handle_StepRepr_AssemblyComponentUsageSubstitute_1;
  Handle_StepRepr_AssemblyComponentUsageSubstitute_2: typeof Handle_StepRepr_AssemblyComponentUsageSubstitute_2;
  Handle_StepRepr_AssemblyComponentUsageSubstitute_3: typeof Handle_StepRepr_AssemblyComponentUsageSubstitute_3;
  Handle_StepRepr_AssemblyComponentUsageSubstitute_4: typeof Handle_StepRepr_AssemblyComponentUsageSubstitute_4;
  Handle_StepRepr_BetweenShapeAspect_1: typeof Handle_StepRepr_BetweenShapeAspect_1;
  Handle_StepRepr_BetweenShapeAspect_2: typeof Handle_StepRepr_BetweenShapeAspect_2;
  Handle_StepRepr_BetweenShapeAspect_3: typeof Handle_StepRepr_BetweenShapeAspect_3;
  Handle_StepRepr_BetweenShapeAspect_4: typeof Handle_StepRepr_BetweenShapeAspect_4;
  Handle_StepRepr_CentreOfSymmetry_1: typeof Handle_StepRepr_CentreOfSymmetry_1;
  Handle_StepRepr_CentreOfSymmetry_2: typeof Handle_StepRepr_CentreOfSymmetry_2;
  Handle_StepRepr_CentreOfSymmetry_3: typeof Handle_StepRepr_CentreOfSymmetry_3;
  Handle_StepRepr_CentreOfSymmetry_4: typeof Handle_StepRepr_CentreOfSymmetry_4;
  Handle_StepRepr_CharacterizedRepresentation_1: typeof Handle_StepRepr_CharacterizedRepresentation_1;
  Handle_StepRepr_CharacterizedRepresentation_2: typeof Handle_StepRepr_CharacterizedRepresentation_2;
  Handle_StepRepr_CharacterizedRepresentation_3: typeof Handle_StepRepr_CharacterizedRepresentation_3;
  Handle_StepRepr_CharacterizedRepresentation_4: typeof Handle_StepRepr_CharacterizedRepresentation_4;
  Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_1: typeof Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_1;
  Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_2: typeof Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_2;
  Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_3: typeof Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_3;
  Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_4: typeof Handle_StepRepr_CompShAspAndDatumFeatAndShAsp_4;
  Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_1: typeof Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_1;
  Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_2: typeof Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_2;
  Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_3: typeof Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_3;
  Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_4: typeof Handle_StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp_4;
  Handle_StepRepr_CompositeGroupShapeAspect_1: typeof Handle_StepRepr_CompositeGroupShapeAspect_1;
  Handle_StepRepr_CompositeGroupShapeAspect_2: typeof Handle_StepRepr_CompositeGroupShapeAspect_2;
  Handle_StepRepr_CompositeGroupShapeAspect_3: typeof Handle_StepRepr_CompositeGroupShapeAspect_3;
  Handle_StepRepr_CompositeGroupShapeAspect_4: typeof Handle_StepRepr_CompositeGroupShapeAspect_4;
  Handle_StepRepr_ConfigurationDesign_1: typeof Handle_StepRepr_ConfigurationDesign_1;
  Handle_StepRepr_ConfigurationDesign_2: typeof Handle_StepRepr_ConfigurationDesign_2;
  Handle_StepRepr_ConfigurationDesign_3: typeof Handle_StepRepr_ConfigurationDesign_3;
  Handle_StepRepr_ConfigurationDesign_4: typeof Handle_StepRepr_ConfigurationDesign_4;
  Handle_StepRepr_ConfigurationEffectivity_1: typeof Handle_StepRepr_ConfigurationEffectivity_1;
  Handle_StepRepr_ConfigurationEffectivity_2: typeof Handle_StepRepr_ConfigurationEffectivity_2;
  Handle_StepRepr_ConfigurationEffectivity_3: typeof Handle_StepRepr_ConfigurationEffectivity_3;
  Handle_StepRepr_ConfigurationEffectivity_4: typeof Handle_StepRepr_ConfigurationEffectivity_4;
  Handle_StepRepr_ConfigurationItem_1: typeof Handle_StepRepr_ConfigurationItem_1;
  Handle_StepRepr_ConfigurationItem_2: typeof Handle_StepRepr_ConfigurationItem_2;
  Handle_StepRepr_ConfigurationItem_3: typeof Handle_StepRepr_ConfigurationItem_3;
  Handle_StepRepr_ConfigurationItem_4: typeof Handle_StepRepr_ConfigurationItem_4;
  Handle_StepRepr_ConstructiveGeometryRepresentation_1: typeof Handle_StepRepr_ConstructiveGeometryRepresentation_1;
  Handle_StepRepr_ConstructiveGeometryRepresentation_2: typeof Handle_StepRepr_ConstructiveGeometryRepresentation_2;
  Handle_StepRepr_ConstructiveGeometryRepresentation_3: typeof Handle_StepRepr_ConstructiveGeometryRepresentation_3;
  Handle_StepRepr_ConstructiveGeometryRepresentation_4: typeof Handle_StepRepr_ConstructiveGeometryRepresentation_4;
  Handle_StepRepr_RepresentationRelationship_1: typeof Handle_StepRepr_RepresentationRelationship_1;
  Handle_StepRepr_RepresentationRelationship_2: typeof Handle_StepRepr_RepresentationRelationship_2;
  Handle_StepRepr_RepresentationRelationship_3: typeof Handle_StepRepr_RepresentationRelationship_3;
  Handle_StepRepr_RepresentationRelationship_4: typeof Handle_StepRepr_RepresentationRelationship_4;
  Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_1: typeof Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_1;
  Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_2: typeof Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_2;
  Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_3: typeof Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_3;
  Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_4: typeof Handle_StepRepr_ConstructiveGeometryRepresentationRelationship_4;
  Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_1: typeof Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_1;
  Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_2: typeof Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_2;
  Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_3: typeof Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_3;
  Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_4: typeof Handle_StepRepr_HArray1OfPropertyDefinitionRepresentation_4;
  Handle_StepRepr_DataEnvironment_1: typeof Handle_StepRepr_DataEnvironment_1;
  Handle_StepRepr_DataEnvironment_2: typeof Handle_StepRepr_DataEnvironment_2;
  Handle_StepRepr_DataEnvironment_3: typeof Handle_StepRepr_DataEnvironment_3;
  Handle_StepRepr_DataEnvironment_4: typeof Handle_StepRepr_DataEnvironment_4;
  Handle_StepRepr_DefinitionalRepresentation_1: typeof Handle_StepRepr_DefinitionalRepresentation_1;
  Handle_StepRepr_DefinitionalRepresentation_2: typeof Handle_StepRepr_DefinitionalRepresentation_2;
  Handle_StepRepr_DefinitionalRepresentation_3: typeof Handle_StepRepr_DefinitionalRepresentation_3;
  Handle_StepRepr_DefinitionalRepresentation_4: typeof Handle_StepRepr_DefinitionalRepresentation_4;
  Handle_StepRepr_DescriptiveRepresentationItem_1: typeof Handle_StepRepr_DescriptiveRepresentationItem_1;
  Handle_StepRepr_DescriptiveRepresentationItem_2: typeof Handle_StepRepr_DescriptiveRepresentationItem_2;
  Handle_StepRepr_DescriptiveRepresentationItem_3: typeof Handle_StepRepr_DescriptiveRepresentationItem_3;
  Handle_StepRepr_DescriptiveRepresentationItem_4: typeof Handle_StepRepr_DescriptiveRepresentationItem_4;
  Handle_StepRepr_Extension_1: typeof Handle_StepRepr_Extension_1;
  Handle_StepRepr_Extension_2: typeof Handle_StepRepr_Extension_2;
  Handle_StepRepr_Extension_3: typeof Handle_StepRepr_Extension_3;
  Handle_StepRepr_Extension_4: typeof Handle_StepRepr_Extension_4;
  Handle_StepRepr_ExternallyDefinedRepresentation_1: typeof Handle_StepRepr_ExternallyDefinedRepresentation_1;
  Handle_StepRepr_ExternallyDefinedRepresentation_2: typeof Handle_StepRepr_ExternallyDefinedRepresentation_2;
  Handle_StepRepr_ExternallyDefinedRepresentation_3: typeof Handle_StepRepr_ExternallyDefinedRepresentation_3;
  Handle_StepRepr_ExternallyDefinedRepresentation_4: typeof Handle_StepRepr_ExternallyDefinedRepresentation_4;
  Handle_StepRepr_ShapeAspectRelationship_1: typeof Handle_StepRepr_ShapeAspectRelationship_1;
  Handle_StepRepr_ShapeAspectRelationship_2: typeof Handle_StepRepr_ShapeAspectRelationship_2;
  Handle_StepRepr_ShapeAspectRelationship_3: typeof Handle_StepRepr_ShapeAspectRelationship_3;
  Handle_StepRepr_ShapeAspectRelationship_4: typeof Handle_StepRepr_ShapeAspectRelationship_4;
  Handle_StepRepr_FeatureForDatumTargetRelationship_1: typeof Handle_StepRepr_FeatureForDatumTargetRelationship_1;
  Handle_StepRepr_FeatureForDatumTargetRelationship_2: typeof Handle_StepRepr_FeatureForDatumTargetRelationship_2;
  Handle_StepRepr_FeatureForDatumTargetRelationship_3: typeof Handle_StepRepr_FeatureForDatumTargetRelationship_3;
  Handle_StepRepr_FeatureForDatumTargetRelationship_4: typeof Handle_StepRepr_FeatureForDatumTargetRelationship_4;
  Handle_StepRepr_FunctionallyDefinedTransformation_1: typeof Handle_StepRepr_FunctionallyDefinedTransformation_1;
  Handle_StepRepr_FunctionallyDefinedTransformation_2: typeof Handle_StepRepr_FunctionallyDefinedTransformation_2;
  Handle_StepRepr_FunctionallyDefinedTransformation_3: typeof Handle_StepRepr_FunctionallyDefinedTransformation_3;
  Handle_StepRepr_FunctionallyDefinedTransformation_4: typeof Handle_StepRepr_FunctionallyDefinedTransformation_4;
  Handle_StepRepr_GeometricAlignment_1: typeof Handle_StepRepr_GeometricAlignment_1;
  Handle_StepRepr_GeometricAlignment_2: typeof Handle_StepRepr_GeometricAlignment_2;
  Handle_StepRepr_GeometricAlignment_3: typeof Handle_StepRepr_GeometricAlignment_3;
  Handle_StepRepr_GeometricAlignment_4: typeof Handle_StepRepr_GeometricAlignment_4;
  Handle_StepRepr_GlobalUncertaintyAssignedContext_1: typeof Handle_StepRepr_GlobalUncertaintyAssignedContext_1;
  Handle_StepRepr_GlobalUncertaintyAssignedContext_2: typeof Handle_StepRepr_GlobalUncertaintyAssignedContext_2;
  Handle_StepRepr_GlobalUncertaintyAssignedContext_3: typeof Handle_StepRepr_GlobalUncertaintyAssignedContext_3;
  Handle_StepRepr_GlobalUncertaintyAssignedContext_4: typeof Handle_StepRepr_GlobalUncertaintyAssignedContext_4;
  Handle_StepRepr_GlobalUnitAssignedContext_1: typeof Handle_StepRepr_GlobalUnitAssignedContext_1;
  Handle_StepRepr_GlobalUnitAssignedContext_2: typeof Handle_StepRepr_GlobalUnitAssignedContext_2;
  Handle_StepRepr_GlobalUnitAssignedContext_3: typeof Handle_StepRepr_GlobalUnitAssignedContext_3;
  Handle_StepRepr_GlobalUnitAssignedContext_4: typeof Handle_StepRepr_GlobalUnitAssignedContext_4;
  Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_1: typeof Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_1;
  Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_2: typeof Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_2;
  Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_3: typeof Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_3;
  Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_4: typeof Handle_StepRepr_HSequenceOfMaterialPropertyRepresentation_4;
  Handle_StepRepr_HSequenceOfRepresentationItem_1: typeof Handle_StepRepr_HSequenceOfRepresentationItem_1;
  Handle_StepRepr_HSequenceOfRepresentationItem_2: typeof Handle_StepRepr_HSequenceOfRepresentationItem_2;
  Handle_StepRepr_HSequenceOfRepresentationItem_3: typeof Handle_StepRepr_HSequenceOfRepresentationItem_3;
  Handle_StepRepr_HSequenceOfRepresentationItem_4: typeof Handle_StepRepr_HSequenceOfRepresentationItem_4;
  Handle_StepRepr_IntegerRepresentationItem_1: typeof Handle_StepRepr_IntegerRepresentationItem_1;
  Handle_StepRepr_IntegerRepresentationItem_2: typeof Handle_StepRepr_IntegerRepresentationItem_2;
  Handle_StepRepr_IntegerRepresentationItem_3: typeof Handle_StepRepr_IntegerRepresentationItem_3;
  Handle_StepRepr_IntegerRepresentationItem_4: typeof Handle_StepRepr_IntegerRepresentationItem_4;
  Handle_StepRepr_ItemDefinedTransformation_1: typeof Handle_StepRepr_ItemDefinedTransformation_1;
  Handle_StepRepr_ItemDefinedTransformation_2: typeof Handle_StepRepr_ItemDefinedTransformation_2;
  Handle_StepRepr_ItemDefinedTransformation_3: typeof Handle_StepRepr_ItemDefinedTransformation_3;
  Handle_StepRepr_ItemDefinedTransformation_4: typeof Handle_StepRepr_ItemDefinedTransformation_4;
  Handle_StepRepr_MakeFromUsageOption_1: typeof Handle_StepRepr_MakeFromUsageOption_1;
  Handle_StepRepr_MakeFromUsageOption_2: typeof Handle_StepRepr_MakeFromUsageOption_2;
  Handle_StepRepr_MakeFromUsageOption_3: typeof Handle_StepRepr_MakeFromUsageOption_3;
  Handle_StepRepr_MakeFromUsageOption_4: typeof Handle_StepRepr_MakeFromUsageOption_4;
  Handle_StepRepr_MappedItem_1: typeof Handle_StepRepr_MappedItem_1;
  Handle_StepRepr_MappedItem_2: typeof Handle_StepRepr_MappedItem_2;
  Handle_StepRepr_MappedItem_3: typeof Handle_StepRepr_MappedItem_3;
  Handle_StepRepr_MappedItem_4: typeof Handle_StepRepr_MappedItem_4;
  Handle_StepRepr_MaterialDesignation_1: typeof Handle_StepRepr_MaterialDesignation_1;
  Handle_StepRepr_MaterialDesignation_2: typeof Handle_StepRepr_MaterialDesignation_2;
  Handle_StepRepr_MaterialDesignation_3: typeof Handle_StepRepr_MaterialDesignation_3;
  Handle_StepRepr_MaterialDesignation_4: typeof Handle_StepRepr_MaterialDesignation_4;
  Handle_StepRepr_MaterialProperty_1: typeof Handle_StepRepr_MaterialProperty_1;
  Handle_StepRepr_MaterialProperty_2: typeof Handle_StepRepr_MaterialProperty_2;
  Handle_StepRepr_MaterialProperty_3: typeof Handle_StepRepr_MaterialProperty_3;
  Handle_StepRepr_MaterialProperty_4: typeof Handle_StepRepr_MaterialProperty_4;
  Handle_StepRepr_MeasureRepresentationItem_1: typeof Handle_StepRepr_MeasureRepresentationItem_1;
  Handle_StepRepr_MeasureRepresentationItem_2: typeof Handle_StepRepr_MeasureRepresentationItem_2;
  Handle_StepRepr_MeasureRepresentationItem_3: typeof Handle_StepRepr_MeasureRepresentationItem_3;
  Handle_StepRepr_MeasureRepresentationItem_4: typeof Handle_StepRepr_MeasureRepresentationItem_4;
  Handle_StepRepr_NextAssemblyUsageOccurrence_1: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_1;
  Handle_StepRepr_NextAssemblyUsageOccurrence_2: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_2;
  Handle_StepRepr_NextAssemblyUsageOccurrence_3: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_3;
  Handle_StepRepr_NextAssemblyUsageOccurrence_4: typeof Handle_StepRepr_NextAssemblyUsageOccurrence_4;
  Handle_StepRepr_ParallelOffset_1: typeof Handle_StepRepr_ParallelOffset_1;
  Handle_StepRepr_ParallelOffset_2: typeof Handle_StepRepr_ParallelOffset_2;
  Handle_StepRepr_ParallelOffset_3: typeof Handle_StepRepr_ParallelOffset_3;
  Handle_StepRepr_ParallelOffset_4: typeof Handle_StepRepr_ParallelOffset_4;
  Handle_StepRepr_ParametricRepresentationContext_1: typeof Handle_StepRepr_ParametricRepresentationContext_1;
  Handle_StepRepr_ParametricRepresentationContext_2: typeof Handle_StepRepr_ParametricRepresentationContext_2;
  Handle_StepRepr_ParametricRepresentationContext_3: typeof Handle_StepRepr_ParametricRepresentationContext_3;
  Handle_StepRepr_ParametricRepresentationContext_4: typeof Handle_StepRepr_ParametricRepresentationContext_4;
  Handle_StepRepr_PerpendicularTo_1: typeof Handle_StepRepr_PerpendicularTo_1;
  Handle_StepRepr_PerpendicularTo_2: typeof Handle_StepRepr_PerpendicularTo_2;
  Handle_StepRepr_PerpendicularTo_3: typeof Handle_StepRepr_PerpendicularTo_3;
  Handle_StepRepr_PerpendicularTo_4: typeof Handle_StepRepr_PerpendicularTo_4;
  Handle_StepRepr_ProductConcept_1: typeof Handle_StepRepr_ProductConcept_1;
  Handle_StepRepr_ProductConcept_2: typeof Handle_StepRepr_ProductConcept_2;
  Handle_StepRepr_ProductConcept_3: typeof Handle_StepRepr_ProductConcept_3;
  Handle_StepRepr_ProductConcept_4: typeof Handle_StepRepr_ProductConcept_4;
  Handle_StepRepr_PromissoryUsageOccurrence_1: typeof Handle_StepRepr_PromissoryUsageOccurrence_1;
  Handle_StepRepr_PromissoryUsageOccurrence_2: typeof Handle_StepRepr_PromissoryUsageOccurrence_2;
  Handle_StepRepr_PromissoryUsageOccurrence_3: typeof Handle_StepRepr_PromissoryUsageOccurrence_3;
  Handle_StepRepr_PromissoryUsageOccurrence_4: typeof Handle_StepRepr_PromissoryUsageOccurrence_4;
  Handle_StepRepr_PropertyDefinitionRelationship_1: typeof Handle_StepRepr_PropertyDefinitionRelationship_1;
  Handle_StepRepr_PropertyDefinitionRelationship_2: typeof Handle_StepRepr_PropertyDefinitionRelationship_2;
  Handle_StepRepr_PropertyDefinitionRelationship_3: typeof Handle_StepRepr_PropertyDefinitionRelationship_3;
  Handle_StepRepr_PropertyDefinitionRelationship_4: typeof Handle_StepRepr_PropertyDefinitionRelationship_4;
  Handle_StepRepr_QuantifiedAssemblyComponentUsage_1: typeof Handle_StepRepr_QuantifiedAssemblyComponentUsage_1;
  Handle_StepRepr_QuantifiedAssemblyComponentUsage_2: typeof Handle_StepRepr_QuantifiedAssemblyComponentUsage_2;
  Handle_StepRepr_QuantifiedAssemblyComponentUsage_3: typeof Handle_StepRepr_QuantifiedAssemblyComponentUsage_3;
  Handle_StepRepr_QuantifiedAssemblyComponentUsage_4: typeof Handle_StepRepr_QuantifiedAssemblyComponentUsage_4;
  Handle_StepRepr_ReprItemAndMeasureWithUnit_1: typeof Handle_StepRepr_ReprItemAndMeasureWithUnit_1;
  Handle_StepRepr_ReprItemAndMeasureWithUnit_2: typeof Handle_StepRepr_ReprItemAndMeasureWithUnit_2;
  Handle_StepRepr_ReprItemAndMeasureWithUnit_3: typeof Handle_StepRepr_ReprItemAndMeasureWithUnit_3;
  Handle_StepRepr_ReprItemAndMeasureWithUnit_4: typeof Handle_StepRepr_ReprItemAndMeasureWithUnit_4;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_1: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_1;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_2: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_2;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_3: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_3;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_4: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnit_4;
  Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_1: typeof Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_1;
  Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_2: typeof Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_2;
  Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_3: typeof Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_3;
  Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_4: typeof Handle_StepRepr_ReprItemAndMeasureWithUnitAndQRI_4;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_1: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_1;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_2: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_2;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_3: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_3;
  Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_4: typeof Handle_StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI_4;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_1: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_1;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_2: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_2;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_3: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_3;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_4: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnit_4;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_1: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_1;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_2: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_2;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_3: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_3;
  Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_4: typeof Handle_StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI_4;
  Handle_StepRepr_RepresentationMap_1: typeof Handle_StepRepr_RepresentationMap_1;
  Handle_StepRepr_RepresentationMap_2: typeof Handle_StepRepr_RepresentationMap_2;
  Handle_StepRepr_RepresentationMap_3: typeof Handle_StepRepr_RepresentationMap_3;
  Handle_StepRepr_RepresentationMap_4: typeof Handle_StepRepr_RepresentationMap_4;
  Handle_StepRepr_ShapeRepresentationRelationship_1: typeof Handle_StepRepr_ShapeRepresentationRelationship_1;
  Handle_StepRepr_ShapeRepresentationRelationship_2: typeof Handle_StepRepr_ShapeRepresentationRelationship_2;
  Handle_StepRepr_ShapeRepresentationRelationship_3: typeof Handle_StepRepr_ShapeRepresentationRelationship_3;
  Handle_StepRepr_ShapeRepresentationRelationship_4: typeof Handle_StepRepr_ShapeRepresentationRelationship_4;
  Handle_StepRepr_RepresentationRelationshipWithTransformation_1: typeof Handle_StepRepr_RepresentationRelationshipWithTransformation_1;
  Handle_StepRepr_RepresentationRelationshipWithTransformation_2: typeof Handle_StepRepr_RepresentationRelationshipWithTransformation_2;
  Handle_StepRepr_RepresentationRelationshipWithTransformation_3: typeof Handle_StepRepr_RepresentationRelationshipWithTransformation_3;
  Handle_StepRepr_RepresentationRelationshipWithTransformation_4: typeof Handle_StepRepr_RepresentationRelationshipWithTransformation_4;
  Handle_StepRepr_ShapeAspectDerivingRelationship_1: typeof Handle_StepRepr_ShapeAspectDerivingRelationship_1;
  Handle_StepRepr_ShapeAspectDerivingRelationship_2: typeof Handle_StepRepr_ShapeAspectDerivingRelationship_2;
  Handle_StepRepr_ShapeAspectDerivingRelationship_3: typeof Handle_StepRepr_ShapeAspectDerivingRelationship_3;
  Handle_StepRepr_ShapeAspectDerivingRelationship_4: typeof Handle_StepRepr_ShapeAspectDerivingRelationship_4;
  Handle_StepRepr_ShapeAspectTransition_1: typeof Handle_StepRepr_ShapeAspectTransition_1;
  Handle_StepRepr_ShapeAspectTransition_2: typeof Handle_StepRepr_ShapeAspectTransition_2;
  Handle_StepRepr_ShapeAspectTransition_3: typeof Handle_StepRepr_ShapeAspectTransition_3;
  Handle_StepRepr_ShapeAspectTransition_4: typeof Handle_StepRepr_ShapeAspectTransition_4;
  Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_1: typeof Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_1;
  Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_2: typeof Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_2;
  Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_3: typeof Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_3;
  Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_4: typeof Handle_StepRepr_ShapeRepresentationRelationshipWithTransformation_4;
  Handle_StepRepr_SpecifiedHigherUsageOccurrence_1: typeof Handle_StepRepr_SpecifiedHigherUsageOccurrence_1;
  Handle_StepRepr_SpecifiedHigherUsageOccurrence_2: typeof Handle_StepRepr_SpecifiedHigherUsageOccurrence_2;
  Handle_StepRepr_SpecifiedHigherUsageOccurrence_3: typeof Handle_StepRepr_SpecifiedHigherUsageOccurrence_3;
  Handle_StepRepr_SpecifiedHigherUsageOccurrence_4: typeof Handle_StepRepr_SpecifiedHigherUsageOccurrence_4;
  Handle_StepRepr_StructuralResponseProperty_1: typeof Handle_StepRepr_StructuralResponseProperty_1;
  Handle_StepRepr_StructuralResponseProperty_2: typeof Handle_StepRepr_StructuralResponseProperty_2;
  Handle_StepRepr_StructuralResponseProperty_3: typeof Handle_StepRepr_StructuralResponseProperty_3;
  Handle_StepRepr_StructuralResponseProperty_4: typeof Handle_StepRepr_StructuralResponseProperty_4;
  Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_1: typeof Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_1;
  Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_2: typeof Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_2;
  Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_3: typeof Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_3;
  Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_4: typeof Handle_StepRepr_StructuralResponsePropertyDefinitionRepresentation_4;
  Handle_StepRepr_SuppliedPartRelationship_1: typeof Handle_StepRepr_SuppliedPartRelationship_1;
  Handle_StepRepr_SuppliedPartRelationship_2: typeof Handle_StepRepr_SuppliedPartRelationship_2;
  Handle_StepRepr_SuppliedPartRelationship_3: typeof Handle_StepRepr_SuppliedPartRelationship_3;
  Handle_StepRepr_SuppliedPartRelationship_4: typeof Handle_StepRepr_SuppliedPartRelationship_4;
  Handle_StepRepr_Tangent_1: typeof Handle_StepRepr_Tangent_1;
  Handle_StepRepr_Tangent_2: typeof Handle_StepRepr_Tangent_2;
  Handle_StepRepr_Tangent_3: typeof Handle_StepRepr_Tangent_3;
  Handle_StepRepr_Tangent_4: typeof Handle_StepRepr_Tangent_4;
  Handle_StepRepr_ValueRange_1: typeof Handle_StepRepr_ValueRange_1;
  Handle_StepRepr_ValueRange_2: typeof Handle_StepRepr_ValueRange_2;
  Handle_StepRepr_ValueRange_3: typeof Handle_StepRepr_ValueRange_3;
  Handle_StepRepr_ValueRange_4: typeof Handle_StepRepr_ValueRange_4;
  Handle_StepRepr_ValueRepresentationItem_1: typeof Handle_StepRepr_ValueRepresentationItem_1;
  Handle_StepRepr_ValueRepresentationItem_2: typeof Handle_StepRepr_ValueRepresentationItem_2;
  Handle_StepRepr_ValueRepresentationItem_3: typeof Handle_StepRepr_ValueRepresentationItem_3;
  Handle_StepRepr_ValueRepresentationItem_4: typeof Handle_StepRepr_ValueRepresentationItem_4;
  Handle_StepShape_ShapeRepresentation_1: typeof Handle_StepShape_ShapeRepresentation_1;
  Handle_StepShape_ShapeRepresentation_2: typeof Handle_StepShape_ShapeRepresentation_2;
  Handle_StepShape_ShapeRepresentation_3: typeof Handle_StepShape_ShapeRepresentation_3;
  Handle_StepShape_ShapeRepresentation_4: typeof Handle_StepShape_ShapeRepresentation_4;
  Handle_StepShape_AdvancedBrepShapeRepresentation_1: typeof Handle_StepShape_AdvancedBrepShapeRepresentation_1;
  Handle_StepShape_AdvancedBrepShapeRepresentation_2: typeof Handle_StepShape_AdvancedBrepShapeRepresentation_2;
  Handle_StepShape_AdvancedBrepShapeRepresentation_3: typeof Handle_StepShape_AdvancedBrepShapeRepresentation_3;
  Handle_StepShape_AdvancedBrepShapeRepresentation_4: typeof Handle_StepShape_AdvancedBrepShapeRepresentation_4;
  Handle_StepShape_TopologicalRepresentationItem_1: typeof Handle_StepShape_TopologicalRepresentationItem_1;
  Handle_StepShape_TopologicalRepresentationItem_2: typeof Handle_StepShape_TopologicalRepresentationItem_2;
  Handle_StepShape_TopologicalRepresentationItem_3: typeof Handle_StepShape_TopologicalRepresentationItem_3;
  Handle_StepShape_TopologicalRepresentationItem_4: typeof Handle_StepShape_TopologicalRepresentationItem_4;
  Handle_StepShape_FaceBound_1: typeof Handle_StepShape_FaceBound_1;
  Handle_StepShape_FaceBound_2: typeof Handle_StepShape_FaceBound_2;
  Handle_StepShape_FaceBound_3: typeof Handle_StepShape_FaceBound_3;
  Handle_StepShape_FaceBound_4: typeof Handle_StepShape_FaceBound_4;
  Handle_StepShape_HArray1OfFaceBound_1: typeof Handle_StepShape_HArray1OfFaceBound_1;
  Handle_StepShape_HArray1OfFaceBound_2: typeof Handle_StepShape_HArray1OfFaceBound_2;
  Handle_StepShape_HArray1OfFaceBound_3: typeof Handle_StepShape_HArray1OfFaceBound_3;
  Handle_StepShape_HArray1OfFaceBound_4: typeof Handle_StepShape_HArray1OfFaceBound_4;
  Handle_StepShape_Face_1: typeof Handle_StepShape_Face_1;
  Handle_StepShape_Face_2: typeof Handle_StepShape_Face_2;
  Handle_StepShape_Face_3: typeof Handle_StepShape_Face_3;
  Handle_StepShape_Face_4: typeof Handle_StepShape_Face_4;
  Handle_StepShape_FaceSurface_1: typeof Handle_StepShape_FaceSurface_1;
  Handle_StepShape_FaceSurface_2: typeof Handle_StepShape_FaceSurface_2;
  Handle_StepShape_FaceSurface_3: typeof Handle_StepShape_FaceSurface_3;
  Handle_StepShape_FaceSurface_4: typeof Handle_StepShape_FaceSurface_4;
  Handle_StepShape_AdvancedFace_1: typeof Handle_StepShape_AdvancedFace_1;
  Handle_StepShape_AdvancedFace_2: typeof Handle_StepShape_AdvancedFace_2;
  Handle_StepShape_AdvancedFace_3: typeof Handle_StepShape_AdvancedFace_3;
  Handle_StepShape_AdvancedFace_4: typeof Handle_StepShape_AdvancedFace_4;
  Handle_StepShape_DimensionalLocation_1: typeof Handle_StepShape_DimensionalLocation_1;
  Handle_StepShape_DimensionalLocation_2: typeof Handle_StepShape_DimensionalLocation_2;
  Handle_StepShape_DimensionalLocation_3: typeof Handle_StepShape_DimensionalLocation_3;
  Handle_StepShape_DimensionalLocation_4: typeof Handle_StepShape_DimensionalLocation_4;
  Handle_StepShape_AngularLocation_1: typeof Handle_StepShape_AngularLocation_1;
  Handle_StepShape_AngularLocation_2: typeof Handle_StepShape_AngularLocation_2;
  Handle_StepShape_AngularLocation_3: typeof Handle_StepShape_AngularLocation_3;
  Handle_StepShape_AngularLocation_4: typeof Handle_StepShape_AngularLocation_4;
  Handle_StepShape_DimensionalSize_1: typeof Handle_StepShape_DimensionalSize_1;
  Handle_StepShape_DimensionalSize_2: typeof Handle_StepShape_DimensionalSize_2;
  Handle_StepShape_DimensionalSize_3: typeof Handle_StepShape_DimensionalSize_3;
  Handle_StepShape_DimensionalSize_4: typeof Handle_StepShape_DimensionalSize_4;
  Handle_StepShape_AngularSize_1: typeof Handle_StepShape_AngularSize_1;
  Handle_StepShape_AngularSize_2: typeof Handle_StepShape_AngularSize_2;
  Handle_StepShape_AngularSize_3: typeof Handle_StepShape_AngularSize_3;
  Handle_StepShape_AngularSize_4: typeof Handle_StepShape_AngularSize_4;
  Handle_StepShape_Vertex_1: typeof Handle_StepShape_Vertex_1;
  Handle_StepShape_Vertex_2: typeof Handle_StepShape_Vertex_2;
  Handle_StepShape_Vertex_3: typeof Handle_StepShape_Vertex_3;
  Handle_StepShape_Vertex_4: typeof Handle_StepShape_Vertex_4;
  Handle_StepShape_Edge_1: typeof Handle_StepShape_Edge_1;
  Handle_StepShape_Edge_2: typeof Handle_StepShape_Edge_2;
  Handle_StepShape_Edge_3: typeof Handle_StepShape_Edge_3;
  Handle_StepShape_Edge_4: typeof Handle_StepShape_Edge_4;
  Handle_StepShape_HArray1OfEdge_1: typeof Handle_StepShape_HArray1OfEdge_1;
  Handle_StepShape_HArray1OfEdge_2: typeof Handle_StepShape_HArray1OfEdge_2;
  Handle_StepShape_HArray1OfEdge_3: typeof Handle_StepShape_HArray1OfEdge_3;
  Handle_StepShape_HArray1OfEdge_4: typeof Handle_StepShape_HArray1OfEdge_4;
  Handle_StepShape_ConnectedEdgeSet_1: typeof Handle_StepShape_ConnectedEdgeSet_1;
  Handle_StepShape_ConnectedEdgeSet_2: typeof Handle_StepShape_ConnectedEdgeSet_2;
  Handle_StepShape_ConnectedEdgeSet_3: typeof Handle_StepShape_ConnectedEdgeSet_3;
  Handle_StepShape_ConnectedEdgeSet_4: typeof Handle_StepShape_ConnectedEdgeSet_4;
  Handle_StepShape_HArray1OfFace_1: typeof Handle_StepShape_HArray1OfFace_1;
  Handle_StepShape_HArray1OfFace_2: typeof Handle_StepShape_HArray1OfFace_2;
  Handle_StepShape_HArray1OfFace_3: typeof Handle_StepShape_HArray1OfFace_3;
  Handle_StepShape_HArray1OfFace_4: typeof Handle_StepShape_HArray1OfFace_4;
  Handle_StepShape_ConnectedFaceSet_1: typeof Handle_StepShape_ConnectedFaceSet_1;
  Handle_StepShape_ConnectedFaceSet_2: typeof Handle_StepShape_ConnectedFaceSet_2;
  Handle_StepShape_ConnectedFaceSet_3: typeof Handle_StepShape_ConnectedFaceSet_3;
  Handle_StepShape_ConnectedFaceSet_4: typeof Handle_StepShape_ConnectedFaceSet_4;
  StepShape_Array1OfGeometricSetSelect_1: typeof StepShape_Array1OfGeometricSetSelect_1;
  StepShape_Array1OfGeometricSetSelect_2: typeof StepShape_Array1OfGeometricSetSelect_2;
  StepShape_Array1OfGeometricSetSelect_3: typeof StepShape_Array1OfGeometricSetSelect_3;
  StepShape_Array1OfGeometricSetSelect_4: typeof StepShape_Array1OfGeometricSetSelect_4;
  StepShape_Array1OfGeometricSetSelect_5: typeof StepShape_Array1OfGeometricSetSelect_5;
  Handle_StepShape_ClosedShell_1: typeof Handle_StepShape_ClosedShell_1;
  Handle_StepShape_ClosedShell_2: typeof Handle_StepShape_ClosedShell_2;
  Handle_StepShape_ClosedShell_3: typeof Handle_StepShape_ClosedShell_3;
  Handle_StepShape_ClosedShell_4: typeof Handle_StepShape_ClosedShell_4;
  Handle_StepShape_OrientedClosedShell_1: typeof Handle_StepShape_OrientedClosedShell_1;
  Handle_StepShape_OrientedClosedShell_2: typeof Handle_StepShape_OrientedClosedShell_2;
  Handle_StepShape_OrientedClosedShell_3: typeof Handle_StepShape_OrientedClosedShell_3;
  Handle_StepShape_OrientedClosedShell_4: typeof Handle_StepShape_OrientedClosedShell_4;
  Handle_StepShape_OrientedEdge_1: typeof Handle_StepShape_OrientedEdge_1;
  Handle_StepShape_OrientedEdge_2: typeof Handle_StepShape_OrientedEdge_2;
  Handle_StepShape_OrientedEdge_3: typeof Handle_StepShape_OrientedEdge_3;
  Handle_StepShape_OrientedEdge_4: typeof Handle_StepShape_OrientedEdge_4;
  StepShape_Array1OfShapeDimensionRepresentationItem_1: typeof StepShape_Array1OfShapeDimensionRepresentationItem_1;
  StepShape_Array1OfShapeDimensionRepresentationItem_2: typeof StepShape_Array1OfShapeDimensionRepresentationItem_2;
  StepShape_Array1OfShapeDimensionRepresentationItem_3: typeof StepShape_Array1OfShapeDimensionRepresentationItem_3;
  StepShape_Array1OfShapeDimensionRepresentationItem_4: typeof StepShape_Array1OfShapeDimensionRepresentationItem_4;
  StepShape_Array1OfShapeDimensionRepresentationItem_5: typeof StepShape_Array1OfShapeDimensionRepresentationItem_5;
  StepShape_Array1OfShell_1: typeof StepShape_Array1OfShell_1;
  StepShape_Array1OfShell_2: typeof StepShape_Array1OfShell_2;
  StepShape_Array1OfShell_3: typeof StepShape_Array1OfShell_3;
  StepShape_Array1OfShell_4: typeof StepShape_Array1OfShell_4;
  StepShape_Array1OfShell_5: typeof StepShape_Array1OfShell_5;
  StepShape_Array1OfValueQualifier_1: typeof StepShape_Array1OfValueQualifier_1;
  StepShape_Array1OfValueQualifier_2: typeof StepShape_Array1OfValueQualifier_2;
  StepShape_Array1OfValueQualifier_3: typeof StepShape_Array1OfValueQualifier_3;
  StepShape_Array1OfValueQualifier_4: typeof StepShape_Array1OfValueQualifier_4;
  StepShape_Array1OfValueQualifier_5: typeof StepShape_Array1OfValueQualifier_5;
  Handle_StepShape_Block_1: typeof Handle_StepShape_Block_1;
  Handle_StepShape_Block_2: typeof Handle_StepShape_Block_2;
  Handle_StepShape_Block_3: typeof Handle_StepShape_Block_3;
  Handle_StepShape_Block_4: typeof Handle_StepShape_Block_4;
  Handle_StepShape_BooleanResult_1: typeof Handle_StepShape_BooleanResult_1;
  Handle_StepShape_BooleanResult_2: typeof Handle_StepShape_BooleanResult_2;
  Handle_StepShape_BooleanResult_3: typeof Handle_StepShape_BooleanResult_3;
  Handle_StepShape_BooleanResult_4: typeof Handle_StepShape_BooleanResult_4;
  Handle_StepShape_BoxDomain_1: typeof Handle_StepShape_BoxDomain_1;
  Handle_StepShape_BoxDomain_2: typeof Handle_StepShape_BoxDomain_2;
  Handle_StepShape_BoxDomain_3: typeof Handle_StepShape_BoxDomain_3;
  Handle_StepShape_BoxDomain_4: typeof Handle_StepShape_BoxDomain_4;
  Handle_StepShape_HalfSpaceSolid_1: typeof Handle_StepShape_HalfSpaceSolid_1;
  Handle_StepShape_HalfSpaceSolid_2: typeof Handle_StepShape_HalfSpaceSolid_2;
  Handle_StepShape_HalfSpaceSolid_3: typeof Handle_StepShape_HalfSpaceSolid_3;
  Handle_StepShape_HalfSpaceSolid_4: typeof Handle_StepShape_HalfSpaceSolid_4;
  Handle_StepShape_BoxedHalfSpace_1: typeof Handle_StepShape_BoxedHalfSpace_1;
  Handle_StepShape_BoxedHalfSpace_2: typeof Handle_StepShape_BoxedHalfSpace_2;
  Handle_StepShape_BoxedHalfSpace_3: typeof Handle_StepShape_BoxedHalfSpace_3;
  Handle_StepShape_BoxedHalfSpace_4: typeof Handle_StepShape_BoxedHalfSpace_4;
  Handle_StepShape_HArray1OfOrientedClosedShell_1: typeof Handle_StepShape_HArray1OfOrientedClosedShell_1;
  Handle_StepShape_HArray1OfOrientedClosedShell_2: typeof Handle_StepShape_HArray1OfOrientedClosedShell_2;
  Handle_StepShape_HArray1OfOrientedClosedShell_3: typeof Handle_StepShape_HArray1OfOrientedClosedShell_3;
  Handle_StepShape_HArray1OfOrientedClosedShell_4: typeof Handle_StepShape_HArray1OfOrientedClosedShell_4;
  Handle_StepShape_SolidModel_1: typeof Handle_StepShape_SolidModel_1;
  Handle_StepShape_SolidModel_2: typeof Handle_StepShape_SolidModel_2;
  Handle_StepShape_SolidModel_3: typeof Handle_StepShape_SolidModel_3;
  Handle_StepShape_SolidModel_4: typeof Handle_StepShape_SolidModel_4;
  Handle_StepShape_ManifoldSolidBrep_1: typeof Handle_StepShape_ManifoldSolidBrep_1;
  Handle_StepShape_ManifoldSolidBrep_2: typeof Handle_StepShape_ManifoldSolidBrep_2;
  Handle_StepShape_ManifoldSolidBrep_3: typeof Handle_StepShape_ManifoldSolidBrep_3;
  Handle_StepShape_ManifoldSolidBrep_4: typeof Handle_StepShape_ManifoldSolidBrep_4;
  Handle_StepShape_BrepWithVoids_1: typeof Handle_StepShape_BrepWithVoids_1;
  Handle_StepShape_BrepWithVoids_2: typeof Handle_StepShape_BrepWithVoids_2;
  Handle_StepShape_BrepWithVoids_3: typeof Handle_StepShape_BrepWithVoids_3;
  Handle_StepShape_BrepWithVoids_4: typeof Handle_StepShape_BrepWithVoids_4;
  Handle_StepShape_CompoundShapeRepresentation_1: typeof Handle_StepShape_CompoundShapeRepresentation_1;
  Handle_StepShape_CompoundShapeRepresentation_2: typeof Handle_StepShape_CompoundShapeRepresentation_2;
  Handle_StepShape_CompoundShapeRepresentation_3: typeof Handle_StepShape_CompoundShapeRepresentation_3;
  Handle_StepShape_CompoundShapeRepresentation_4: typeof Handle_StepShape_CompoundShapeRepresentation_4;
  Handle_StepShape_ConnectedFaceShapeRepresentation_1: typeof Handle_StepShape_ConnectedFaceShapeRepresentation_1;
  Handle_StepShape_ConnectedFaceShapeRepresentation_2: typeof Handle_StepShape_ConnectedFaceShapeRepresentation_2;
  Handle_StepShape_ConnectedFaceShapeRepresentation_3: typeof Handle_StepShape_ConnectedFaceShapeRepresentation_3;
  Handle_StepShape_ConnectedFaceShapeRepresentation_4: typeof Handle_StepShape_ConnectedFaceShapeRepresentation_4;
  Handle_StepShape_ConnectedFaceSubSet_1: typeof Handle_StepShape_ConnectedFaceSubSet_1;
  Handle_StepShape_ConnectedFaceSubSet_2: typeof Handle_StepShape_ConnectedFaceSubSet_2;
  Handle_StepShape_ConnectedFaceSubSet_3: typeof Handle_StepShape_ConnectedFaceSubSet_3;
  Handle_StepShape_ConnectedFaceSubSet_4: typeof Handle_StepShape_ConnectedFaceSubSet_4;
  Handle_StepShape_ContextDependentShapeRepresentation_1: typeof Handle_StepShape_ContextDependentShapeRepresentation_1;
  Handle_StepShape_ContextDependentShapeRepresentation_2: typeof Handle_StepShape_ContextDependentShapeRepresentation_2;
  Handle_StepShape_ContextDependentShapeRepresentation_3: typeof Handle_StepShape_ContextDependentShapeRepresentation_3;
  Handle_StepShape_ContextDependentShapeRepresentation_4: typeof Handle_StepShape_ContextDependentShapeRepresentation_4;
  Handle_StepShape_CsgShapeRepresentation_1: typeof Handle_StepShape_CsgShapeRepresentation_1;
  Handle_StepShape_CsgShapeRepresentation_2: typeof Handle_StepShape_CsgShapeRepresentation_2;
  Handle_StepShape_CsgShapeRepresentation_3: typeof Handle_StepShape_CsgShapeRepresentation_3;
  Handle_StepShape_CsgShapeRepresentation_4: typeof Handle_StepShape_CsgShapeRepresentation_4;
  Handle_StepShape_CsgSolid_1: typeof Handle_StepShape_CsgSolid_1;
  Handle_StepShape_CsgSolid_2: typeof Handle_StepShape_CsgSolid_2;
  Handle_StepShape_CsgSolid_3: typeof Handle_StepShape_CsgSolid_3;
  Handle_StepShape_CsgSolid_4: typeof Handle_StepShape_CsgSolid_4;
  Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_1: typeof Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_1;
  Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_2: typeof Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_2;
  Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_3: typeof Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_3;
  Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_4: typeof Handle_StepShape_DefinitionalRepresentationAndShapeRepresentation_4;
  Handle_StepShape_DimensionalCharacteristicRepresentation_1: typeof Handle_StepShape_DimensionalCharacteristicRepresentation_1;
  Handle_StepShape_DimensionalCharacteristicRepresentation_2: typeof Handle_StepShape_DimensionalCharacteristicRepresentation_2;
  Handle_StepShape_DimensionalCharacteristicRepresentation_3: typeof Handle_StepShape_DimensionalCharacteristicRepresentation_3;
  Handle_StepShape_DimensionalCharacteristicRepresentation_4: typeof Handle_StepShape_DimensionalCharacteristicRepresentation_4;
  Handle_StepShape_DimensionalLocationWithPath_1: typeof Handle_StepShape_DimensionalLocationWithPath_1;
  Handle_StepShape_DimensionalLocationWithPath_2: typeof Handle_StepShape_DimensionalLocationWithPath_2;
  Handle_StepShape_DimensionalLocationWithPath_3: typeof Handle_StepShape_DimensionalLocationWithPath_3;
  Handle_StepShape_DimensionalLocationWithPath_4: typeof Handle_StepShape_DimensionalLocationWithPath_4;
  Handle_StepShape_DimensionalSizeWithPath_1: typeof Handle_StepShape_DimensionalSizeWithPath_1;
  Handle_StepShape_DimensionalSizeWithPath_2: typeof Handle_StepShape_DimensionalSizeWithPath_2;
  Handle_StepShape_DimensionalSizeWithPath_3: typeof Handle_StepShape_DimensionalSizeWithPath_3;
  Handle_StepShape_DimensionalSizeWithPath_4: typeof Handle_StepShape_DimensionalSizeWithPath_4;
  Handle_StepShape_DirectedDimensionalLocation_1: typeof Handle_StepShape_DirectedDimensionalLocation_1;
  Handle_StepShape_DirectedDimensionalLocation_2: typeof Handle_StepShape_DirectedDimensionalLocation_2;
  Handle_StepShape_DirectedDimensionalLocation_3: typeof Handle_StepShape_DirectedDimensionalLocation_3;
  Handle_StepShape_DirectedDimensionalLocation_4: typeof Handle_StepShape_DirectedDimensionalLocation_4;
  Handle_StepShape_HArray1OfConnectedEdgeSet_1: typeof Handle_StepShape_HArray1OfConnectedEdgeSet_1;
  Handle_StepShape_HArray1OfConnectedEdgeSet_2: typeof Handle_StepShape_HArray1OfConnectedEdgeSet_2;
  Handle_StepShape_HArray1OfConnectedEdgeSet_3: typeof Handle_StepShape_HArray1OfConnectedEdgeSet_3;
  Handle_StepShape_HArray1OfConnectedEdgeSet_4: typeof Handle_StepShape_HArray1OfConnectedEdgeSet_4;
  Handle_StepShape_EdgeBasedWireframeModel_1: typeof Handle_StepShape_EdgeBasedWireframeModel_1;
  Handle_StepShape_EdgeBasedWireframeModel_2: typeof Handle_StepShape_EdgeBasedWireframeModel_2;
  Handle_StepShape_EdgeBasedWireframeModel_3: typeof Handle_StepShape_EdgeBasedWireframeModel_3;
  Handle_StepShape_EdgeBasedWireframeModel_4: typeof Handle_StepShape_EdgeBasedWireframeModel_4;
  Handle_StepShape_EdgeBasedWireframeShapeRepresentation_1: typeof Handle_StepShape_EdgeBasedWireframeShapeRepresentation_1;
  Handle_StepShape_EdgeBasedWireframeShapeRepresentation_2: typeof Handle_StepShape_EdgeBasedWireframeShapeRepresentation_2;
  Handle_StepShape_EdgeBasedWireframeShapeRepresentation_3: typeof Handle_StepShape_EdgeBasedWireframeShapeRepresentation_3;
  Handle_StepShape_EdgeBasedWireframeShapeRepresentation_4: typeof Handle_StepShape_EdgeBasedWireframeShapeRepresentation_4;
  Handle_StepShape_EdgeCurve_1: typeof Handle_StepShape_EdgeCurve_1;
  Handle_StepShape_EdgeCurve_2: typeof Handle_StepShape_EdgeCurve_2;
  Handle_StepShape_EdgeCurve_3: typeof Handle_StepShape_EdgeCurve_3;
  Handle_StepShape_EdgeCurve_4: typeof Handle_StepShape_EdgeCurve_4;
  Handle_StepShape_HArray1OfOrientedEdge_1: typeof Handle_StepShape_HArray1OfOrientedEdge_1;
  Handle_StepShape_HArray1OfOrientedEdge_2: typeof Handle_StepShape_HArray1OfOrientedEdge_2;
  Handle_StepShape_HArray1OfOrientedEdge_3: typeof Handle_StepShape_HArray1OfOrientedEdge_3;
  Handle_StepShape_HArray1OfOrientedEdge_4: typeof Handle_StepShape_HArray1OfOrientedEdge_4;
  Handle_StepShape_Loop_1: typeof Handle_StepShape_Loop_1;
  Handle_StepShape_Loop_2: typeof Handle_StepShape_Loop_2;
  Handle_StepShape_Loop_3: typeof Handle_StepShape_Loop_3;
  Handle_StepShape_Loop_4: typeof Handle_StepShape_Loop_4;
  Handle_StepShape_EdgeLoop_1: typeof Handle_StepShape_EdgeLoop_1;
  Handle_StepShape_EdgeLoop_2: typeof Handle_StepShape_EdgeLoop_2;
  Handle_StepShape_EdgeLoop_3: typeof Handle_StepShape_EdgeLoop_3;
  Handle_StepShape_EdgeLoop_4: typeof Handle_StepShape_EdgeLoop_4;
  Handle_StepShape_SweptAreaSolid_1: typeof Handle_StepShape_SweptAreaSolid_1;
  Handle_StepShape_SweptAreaSolid_2: typeof Handle_StepShape_SweptAreaSolid_2;
  Handle_StepShape_SweptAreaSolid_3: typeof Handle_StepShape_SweptAreaSolid_3;
  Handle_StepShape_SweptAreaSolid_4: typeof Handle_StepShape_SweptAreaSolid_4;
  Handle_StepShape_ExtrudedAreaSolid_1: typeof Handle_StepShape_ExtrudedAreaSolid_1;
  Handle_StepShape_ExtrudedAreaSolid_2: typeof Handle_StepShape_ExtrudedAreaSolid_2;
  Handle_StepShape_ExtrudedAreaSolid_3: typeof Handle_StepShape_ExtrudedAreaSolid_3;
  Handle_StepShape_ExtrudedAreaSolid_4: typeof Handle_StepShape_ExtrudedAreaSolid_4;
  Handle_StepShape_SweptFaceSolid_1: typeof Handle_StepShape_SweptFaceSolid_1;
  Handle_StepShape_SweptFaceSolid_2: typeof Handle_StepShape_SweptFaceSolid_2;
  Handle_StepShape_SweptFaceSolid_3: typeof Handle_StepShape_SweptFaceSolid_3;
  Handle_StepShape_SweptFaceSolid_4: typeof Handle_StepShape_SweptFaceSolid_4;
  Handle_StepShape_ExtrudedFaceSolid_1: typeof Handle_StepShape_ExtrudedFaceSolid_1;
  Handle_StepShape_ExtrudedFaceSolid_2: typeof Handle_StepShape_ExtrudedFaceSolid_2;
  Handle_StepShape_ExtrudedFaceSolid_3: typeof Handle_StepShape_ExtrudedFaceSolid_3;
  Handle_StepShape_ExtrudedFaceSolid_4: typeof Handle_StepShape_ExtrudedFaceSolid_4;
  Handle_StepShape_HArray1OfConnectedFaceSet_1: typeof Handle_StepShape_HArray1OfConnectedFaceSet_1;
  Handle_StepShape_HArray1OfConnectedFaceSet_2: typeof Handle_StepShape_HArray1OfConnectedFaceSet_2;
  Handle_StepShape_HArray1OfConnectedFaceSet_3: typeof Handle_StepShape_HArray1OfConnectedFaceSet_3;
  Handle_StepShape_HArray1OfConnectedFaceSet_4: typeof Handle_StepShape_HArray1OfConnectedFaceSet_4;
  Handle_StepShape_FaceBasedSurfaceModel_1: typeof Handle_StepShape_FaceBasedSurfaceModel_1;
  Handle_StepShape_FaceBasedSurfaceModel_2: typeof Handle_StepShape_FaceBasedSurfaceModel_2;
  Handle_StepShape_FaceBasedSurfaceModel_3: typeof Handle_StepShape_FaceBasedSurfaceModel_3;
  Handle_StepShape_FaceBasedSurfaceModel_4: typeof Handle_StepShape_FaceBasedSurfaceModel_4;
  Handle_StepShape_FaceOuterBound_1: typeof Handle_StepShape_FaceOuterBound_1;
  Handle_StepShape_FaceOuterBound_2: typeof Handle_StepShape_FaceOuterBound_2;
  Handle_StepShape_FaceOuterBound_3: typeof Handle_StepShape_FaceOuterBound_3;
  Handle_StepShape_FaceOuterBound_4: typeof Handle_StepShape_FaceOuterBound_4;
  Handle_StepShape_FacetedBrep_1: typeof Handle_StepShape_FacetedBrep_1;
  Handle_StepShape_FacetedBrep_2: typeof Handle_StepShape_FacetedBrep_2;
  Handle_StepShape_FacetedBrep_3: typeof Handle_StepShape_FacetedBrep_3;
  Handle_StepShape_FacetedBrep_4: typeof Handle_StepShape_FacetedBrep_4;
  Handle_StepShape_FacetedBrepAndBrepWithVoids_1: typeof Handle_StepShape_FacetedBrepAndBrepWithVoids_1;
  Handle_StepShape_FacetedBrepAndBrepWithVoids_2: typeof Handle_StepShape_FacetedBrepAndBrepWithVoids_2;
  Handle_StepShape_FacetedBrepAndBrepWithVoids_3: typeof Handle_StepShape_FacetedBrepAndBrepWithVoids_3;
  Handle_StepShape_FacetedBrepAndBrepWithVoids_4: typeof Handle_StepShape_FacetedBrepAndBrepWithVoids_4;
  Handle_StepShape_FacetedBrepShapeRepresentation_1: typeof Handle_StepShape_FacetedBrepShapeRepresentation_1;
  Handle_StepShape_FacetedBrepShapeRepresentation_2: typeof Handle_StepShape_FacetedBrepShapeRepresentation_2;
  Handle_StepShape_FacetedBrepShapeRepresentation_3: typeof Handle_StepShape_FacetedBrepShapeRepresentation_3;
  Handle_StepShape_FacetedBrepShapeRepresentation_4: typeof Handle_StepShape_FacetedBrepShapeRepresentation_4;
  Handle_StepShape_HArray1OfGeometricSetSelect_1: typeof Handle_StepShape_HArray1OfGeometricSetSelect_1;
  Handle_StepShape_HArray1OfGeometricSetSelect_2: typeof Handle_StepShape_HArray1OfGeometricSetSelect_2;
  Handle_StepShape_HArray1OfGeometricSetSelect_3: typeof Handle_StepShape_HArray1OfGeometricSetSelect_3;
  Handle_StepShape_HArray1OfGeometricSetSelect_4: typeof Handle_StepShape_HArray1OfGeometricSetSelect_4;
  Handle_StepShape_GeometricSet_1: typeof Handle_StepShape_GeometricSet_1;
  Handle_StepShape_GeometricSet_2: typeof Handle_StepShape_GeometricSet_2;
  Handle_StepShape_GeometricSet_3: typeof Handle_StepShape_GeometricSet_3;
  Handle_StepShape_GeometricSet_4: typeof Handle_StepShape_GeometricSet_4;
  Handle_StepShape_GeometricCurveSet_1: typeof Handle_StepShape_GeometricCurveSet_1;
  Handle_StepShape_GeometricCurveSet_2: typeof Handle_StepShape_GeometricCurveSet_2;
  Handle_StepShape_GeometricCurveSet_3: typeof Handle_StepShape_GeometricCurveSet_3;
  Handle_StepShape_GeometricCurveSet_4: typeof Handle_StepShape_GeometricCurveSet_4;
  Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_1: typeof Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_1;
  Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_2: typeof Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_2;
  Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_3: typeof Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_3;
  Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_4: typeof Handle_StepShape_GeometricallyBoundedSurfaceShapeRepresentation_4;
  Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_1: typeof Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_1;
  Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_2: typeof Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_2;
  Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_3: typeof Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_3;
  Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_4: typeof Handle_StepShape_GeometricallyBoundedWireframeShapeRepresentation_4;
  Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_1: typeof Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_1;
  Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_2: typeof Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_2;
  Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_3: typeof Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_3;
  Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_4: typeof Handle_StepShape_HArray1OfShapeDimensionRepresentationItem_4;
  Handle_StepShape_HArray1OfShell_1: typeof Handle_StepShape_HArray1OfShell_1;
  Handle_StepShape_HArray1OfShell_2: typeof Handle_StepShape_HArray1OfShell_2;
  Handle_StepShape_HArray1OfShell_3: typeof Handle_StepShape_HArray1OfShell_3;
  Handle_StepShape_HArray1OfShell_4: typeof Handle_StepShape_HArray1OfShell_4;
  Handle_StepShape_HArray1OfValueQualifier_1: typeof Handle_StepShape_HArray1OfValueQualifier_1;
  Handle_StepShape_HArray1OfValueQualifier_2: typeof Handle_StepShape_HArray1OfValueQualifier_2;
  Handle_StepShape_HArray1OfValueQualifier_3: typeof Handle_StepShape_HArray1OfValueQualifier_3;
  Handle_StepShape_HArray1OfValueQualifier_4: typeof Handle_StepShape_HArray1OfValueQualifier_4;
  Handle_StepShape_LoopAndPath_1: typeof Handle_StepShape_LoopAndPath_1;
  Handle_StepShape_LoopAndPath_2: typeof Handle_StepShape_LoopAndPath_2;
  Handle_StepShape_LoopAndPath_3: typeof Handle_StepShape_LoopAndPath_3;
  Handle_StepShape_LoopAndPath_4: typeof Handle_StepShape_LoopAndPath_4;
  Handle_StepShape_ManifoldSurfaceShapeRepresentation_1: typeof Handle_StepShape_ManifoldSurfaceShapeRepresentation_1;
  Handle_StepShape_ManifoldSurfaceShapeRepresentation_2: typeof Handle_StepShape_ManifoldSurfaceShapeRepresentation_2;
  Handle_StepShape_ManifoldSurfaceShapeRepresentation_3: typeof Handle_StepShape_ManifoldSurfaceShapeRepresentation_3;
  Handle_StepShape_ManifoldSurfaceShapeRepresentation_4: typeof Handle_StepShape_ManifoldSurfaceShapeRepresentation_4;
  Handle_StepShape_MeasureQualification_1: typeof Handle_StepShape_MeasureQualification_1;
  Handle_StepShape_MeasureQualification_2: typeof Handle_StepShape_MeasureQualification_2;
  Handle_StepShape_MeasureQualification_3: typeof Handle_StepShape_MeasureQualification_3;
  Handle_StepShape_MeasureQualification_4: typeof Handle_StepShape_MeasureQualification_4;
  Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_1: typeof Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_1;
  Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_2: typeof Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_2;
  Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_3: typeof Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_3;
  Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_4: typeof Handle_StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem_4;
  Handle_StepShape_NonManifoldSurfaceShapeRepresentation_1: typeof Handle_StepShape_NonManifoldSurfaceShapeRepresentation_1;
  Handle_StepShape_NonManifoldSurfaceShapeRepresentation_2: typeof Handle_StepShape_NonManifoldSurfaceShapeRepresentation_2;
  Handle_StepShape_NonManifoldSurfaceShapeRepresentation_3: typeof Handle_StepShape_NonManifoldSurfaceShapeRepresentation_3;
  Handle_StepShape_NonManifoldSurfaceShapeRepresentation_4: typeof Handle_StepShape_NonManifoldSurfaceShapeRepresentation_4;
  Handle_StepShape_OpenShell_1: typeof Handle_StepShape_OpenShell_1;
  Handle_StepShape_OpenShell_2: typeof Handle_StepShape_OpenShell_2;
  Handle_StepShape_OpenShell_3: typeof Handle_StepShape_OpenShell_3;
  Handle_StepShape_OpenShell_4: typeof Handle_StepShape_OpenShell_4;
  Handle_StepShape_OrientedFace_1: typeof Handle_StepShape_OrientedFace_1;
  Handle_StepShape_OrientedFace_2: typeof Handle_StepShape_OrientedFace_2;
  Handle_StepShape_OrientedFace_3: typeof Handle_StepShape_OrientedFace_3;
  Handle_StepShape_OrientedFace_4: typeof Handle_StepShape_OrientedFace_4;
  Handle_StepShape_OrientedOpenShell_1: typeof Handle_StepShape_OrientedOpenShell_1;
  Handle_StepShape_OrientedOpenShell_2: typeof Handle_StepShape_OrientedOpenShell_2;
  Handle_StepShape_OrientedOpenShell_3: typeof Handle_StepShape_OrientedOpenShell_3;
  Handle_StepShape_OrientedOpenShell_4: typeof Handle_StepShape_OrientedOpenShell_4;
  Handle_StepShape_Path_1: typeof Handle_StepShape_Path_1;
  Handle_StepShape_Path_2: typeof Handle_StepShape_Path_2;
  Handle_StepShape_Path_3: typeof Handle_StepShape_Path_3;
  Handle_StepShape_Path_4: typeof Handle_StepShape_Path_4;
  Handle_StepShape_OrientedPath_1: typeof Handle_StepShape_OrientedPath_1;
  Handle_StepShape_OrientedPath_2: typeof Handle_StepShape_OrientedPath_2;
  Handle_StepShape_OrientedPath_3: typeof Handle_StepShape_OrientedPath_3;
  Handle_StepShape_OrientedPath_4: typeof Handle_StepShape_OrientedPath_4;
  Handle_StepShape_PlusMinusTolerance_1: typeof Handle_StepShape_PlusMinusTolerance_1;
  Handle_StepShape_PlusMinusTolerance_2: typeof Handle_StepShape_PlusMinusTolerance_2;
  Handle_StepShape_PlusMinusTolerance_3: typeof Handle_StepShape_PlusMinusTolerance_3;
  Handle_StepShape_PlusMinusTolerance_4: typeof Handle_StepShape_PlusMinusTolerance_4;
  Handle_StepShape_PointRepresentation_1: typeof Handle_StepShape_PointRepresentation_1;
  Handle_StepShape_PointRepresentation_2: typeof Handle_StepShape_PointRepresentation_2;
  Handle_StepShape_PointRepresentation_3: typeof Handle_StepShape_PointRepresentation_3;
  Handle_StepShape_PointRepresentation_4: typeof Handle_StepShape_PointRepresentation_4;
  Handle_StepShape_PolyLoop_1: typeof Handle_StepShape_PolyLoop_1;
  Handle_StepShape_PolyLoop_2: typeof Handle_StepShape_PolyLoop_2;
  Handle_StepShape_PolyLoop_3: typeof Handle_StepShape_PolyLoop_3;
  Handle_StepShape_PolyLoop_4: typeof Handle_StepShape_PolyLoop_4;
  Handle_StepShape_PrecisionQualifier_1: typeof Handle_StepShape_PrecisionQualifier_1;
  Handle_StepShape_PrecisionQualifier_2: typeof Handle_StepShape_PrecisionQualifier_2;
  Handle_StepShape_PrecisionQualifier_3: typeof Handle_StepShape_PrecisionQualifier_3;
  Handle_StepShape_PrecisionQualifier_4: typeof Handle_StepShape_PrecisionQualifier_4;
  Handle_StepShape_QualifiedRepresentationItem_1: typeof Handle_StepShape_QualifiedRepresentationItem_1;
  Handle_StepShape_QualifiedRepresentationItem_2: typeof Handle_StepShape_QualifiedRepresentationItem_2;
  Handle_StepShape_QualifiedRepresentationItem_3: typeof Handle_StepShape_QualifiedRepresentationItem_3;
  Handle_StepShape_QualifiedRepresentationItem_4: typeof Handle_StepShape_QualifiedRepresentationItem_4;
  Handle_StepShape_RevolvedAreaSolid_1: typeof Handle_StepShape_RevolvedAreaSolid_1;
  Handle_StepShape_RevolvedAreaSolid_2: typeof Handle_StepShape_RevolvedAreaSolid_2;
  Handle_StepShape_RevolvedAreaSolid_3: typeof Handle_StepShape_RevolvedAreaSolid_3;
  Handle_StepShape_RevolvedAreaSolid_4: typeof Handle_StepShape_RevolvedAreaSolid_4;
  Handle_StepShape_RevolvedFaceSolid_1: typeof Handle_StepShape_RevolvedFaceSolid_1;
  Handle_StepShape_RevolvedFaceSolid_2: typeof Handle_StepShape_RevolvedFaceSolid_2;
  Handle_StepShape_RevolvedFaceSolid_3: typeof Handle_StepShape_RevolvedFaceSolid_3;
  Handle_StepShape_RevolvedFaceSolid_4: typeof Handle_StepShape_RevolvedFaceSolid_4;
  Handle_StepShape_RightAngularWedge_1: typeof Handle_StepShape_RightAngularWedge_1;
  Handle_StepShape_RightAngularWedge_2: typeof Handle_StepShape_RightAngularWedge_2;
  Handle_StepShape_RightAngularWedge_3: typeof Handle_StepShape_RightAngularWedge_3;
  Handle_StepShape_RightAngularWedge_4: typeof Handle_StepShape_RightAngularWedge_4;
  Handle_StepShape_RightCircularCone_1: typeof Handle_StepShape_RightCircularCone_1;
  Handle_StepShape_RightCircularCone_2: typeof Handle_StepShape_RightCircularCone_2;
  Handle_StepShape_RightCircularCone_3: typeof Handle_StepShape_RightCircularCone_3;
  Handle_StepShape_RightCircularCone_4: typeof Handle_StepShape_RightCircularCone_4;
  Handle_StepShape_RightCircularCylinder_1: typeof Handle_StepShape_RightCircularCylinder_1;
  Handle_StepShape_RightCircularCylinder_2: typeof Handle_StepShape_RightCircularCylinder_2;
  Handle_StepShape_RightCircularCylinder_3: typeof Handle_StepShape_RightCircularCylinder_3;
  Handle_StepShape_RightCircularCylinder_4: typeof Handle_StepShape_RightCircularCylinder_4;
  Handle_StepShape_SeamEdge_1: typeof Handle_StepShape_SeamEdge_1;
  Handle_StepShape_SeamEdge_2: typeof Handle_StepShape_SeamEdge_2;
  Handle_StepShape_SeamEdge_3: typeof Handle_StepShape_SeamEdge_3;
  Handle_StepShape_SeamEdge_4: typeof Handle_StepShape_SeamEdge_4;
  Handle_StepShape_ShapeDimensionRepresentation_1: typeof Handle_StepShape_ShapeDimensionRepresentation_1;
  Handle_StepShape_ShapeDimensionRepresentation_2: typeof Handle_StepShape_ShapeDimensionRepresentation_2;
  Handle_StepShape_ShapeDimensionRepresentation_3: typeof Handle_StepShape_ShapeDimensionRepresentation_3;
  Handle_StepShape_ShapeDimensionRepresentation_4: typeof Handle_StepShape_ShapeDimensionRepresentation_4;
  Handle_StepShape_ShapeRepresentationWithParameters_1: typeof Handle_StepShape_ShapeRepresentationWithParameters_1;
  Handle_StepShape_ShapeRepresentationWithParameters_2: typeof Handle_StepShape_ShapeRepresentationWithParameters_2;
  Handle_StepShape_ShapeRepresentationWithParameters_3: typeof Handle_StepShape_ShapeRepresentationWithParameters_3;
  Handle_StepShape_ShapeRepresentationWithParameters_4: typeof Handle_StepShape_ShapeRepresentationWithParameters_4;
  Handle_StepShape_ShellBasedSurfaceModel_1: typeof Handle_StepShape_ShellBasedSurfaceModel_1;
  Handle_StepShape_ShellBasedSurfaceModel_2: typeof Handle_StepShape_ShellBasedSurfaceModel_2;
  Handle_StepShape_ShellBasedSurfaceModel_3: typeof Handle_StepShape_ShellBasedSurfaceModel_3;
  Handle_StepShape_ShellBasedSurfaceModel_4: typeof Handle_StepShape_ShellBasedSurfaceModel_4;
  Handle_StepShape_SolidReplica_1: typeof Handle_StepShape_SolidReplica_1;
  Handle_StepShape_SolidReplica_2: typeof Handle_StepShape_SolidReplica_2;
  Handle_StepShape_SolidReplica_3: typeof Handle_StepShape_SolidReplica_3;
  Handle_StepShape_SolidReplica_4: typeof Handle_StepShape_SolidReplica_4;
  Handle_StepShape_Sphere_1: typeof Handle_StepShape_Sphere_1;
  Handle_StepShape_Sphere_2: typeof Handle_StepShape_Sphere_2;
  Handle_StepShape_Sphere_3: typeof Handle_StepShape_Sphere_3;
  Handle_StepShape_Sphere_4: typeof Handle_StepShape_Sphere_4;
  Handle_StepShape_Subedge_1: typeof Handle_StepShape_Subedge_1;
  Handle_StepShape_Subedge_2: typeof Handle_StepShape_Subedge_2;
  Handle_StepShape_Subedge_3: typeof Handle_StepShape_Subedge_3;
  Handle_StepShape_Subedge_4: typeof Handle_StepShape_Subedge_4;
  Handle_StepShape_Subface_1: typeof Handle_StepShape_Subface_1;
  Handle_StepShape_Subface_2: typeof Handle_StepShape_Subface_2;
  Handle_StepShape_Subface_3: typeof Handle_StepShape_Subface_3;
  Handle_StepShape_Subface_4: typeof Handle_StepShape_Subface_4;
  Handle_StepShape_ToleranceValue_1: typeof Handle_StepShape_ToleranceValue_1;
  Handle_StepShape_ToleranceValue_2: typeof Handle_StepShape_ToleranceValue_2;
  Handle_StepShape_ToleranceValue_3: typeof Handle_StepShape_ToleranceValue_3;
  Handle_StepShape_ToleranceValue_4: typeof Handle_StepShape_ToleranceValue_4;
  Handle_StepShape_Torus_1: typeof Handle_StepShape_Torus_1;
  Handle_StepShape_Torus_2: typeof Handle_StepShape_Torus_2;
  Handle_StepShape_Torus_3: typeof Handle_StepShape_Torus_3;
  Handle_StepShape_Torus_4: typeof Handle_StepShape_Torus_4;
  Handle_StepShape_TransitionalShapeRepresentation_1: typeof Handle_StepShape_TransitionalShapeRepresentation_1;
  Handle_StepShape_TransitionalShapeRepresentation_2: typeof Handle_StepShape_TransitionalShapeRepresentation_2;
  Handle_StepShape_TransitionalShapeRepresentation_3: typeof Handle_StepShape_TransitionalShapeRepresentation_3;
  Handle_StepShape_TransitionalShapeRepresentation_4: typeof Handle_StepShape_TransitionalShapeRepresentation_4;
  Handle_StepShape_TypeQualifier_1: typeof Handle_StepShape_TypeQualifier_1;
  Handle_StepShape_TypeQualifier_2: typeof Handle_StepShape_TypeQualifier_2;
  Handle_StepShape_TypeQualifier_3: typeof Handle_StepShape_TypeQualifier_3;
  Handle_StepShape_TypeQualifier_4: typeof Handle_StepShape_TypeQualifier_4;
  Handle_StepShape_ValueFormatTypeQualifier_1: typeof Handle_StepShape_ValueFormatTypeQualifier_1;
  Handle_StepShape_ValueFormatTypeQualifier_2: typeof Handle_StepShape_ValueFormatTypeQualifier_2;
  Handle_StepShape_ValueFormatTypeQualifier_3: typeof Handle_StepShape_ValueFormatTypeQualifier_3;
  Handle_StepShape_ValueFormatTypeQualifier_4: typeof Handle_StepShape_ValueFormatTypeQualifier_4;
  Handle_StepShape_VertexLoop_1: typeof Handle_StepShape_VertexLoop_1;
  Handle_StepShape_VertexLoop_2: typeof Handle_StepShape_VertexLoop_2;
  Handle_StepShape_VertexLoop_3: typeof Handle_StepShape_VertexLoop_3;
  Handle_StepShape_VertexLoop_4: typeof Handle_StepShape_VertexLoop_4;
  Handle_StepShape_VertexPoint_1: typeof Handle_StepShape_VertexPoint_1;
  Handle_StepShape_VertexPoint_2: typeof Handle_StepShape_VertexPoint_2;
  Handle_StepShape_VertexPoint_3: typeof Handle_StepShape_VertexPoint_3;
  Handle_StepShape_VertexPoint_4: typeof Handle_StepShape_VertexPoint_4;
  StepBasic_SiPrefix: typeof StepBasic_SiPrefix;
  StepBasic_SiUnitName: typeof StepBasic_SiUnitName;
  StepBasic_AheadOrBehind: typeof StepBasic_AheadOrBehind;
  StepBasic_Source: typeof StepBasic_Source;
  StepGeom_TransitionCode: typeof StepGeom_TransitionCode;
  StepGeom_BSplineCurveForm: typeof StepGeom_BSplineCurveForm;
  StepGeom_KnotType: typeof StepGeom_KnotType;
  StepGeom_BSplineSurfaceForm: typeof StepGeom_BSplineSurfaceForm;
  StepGeom_PreferredSurfaceCurveRepresentation: typeof StepGeom_PreferredSurfaceCurveRepresentation;
  StepGeom_TrimmingPreference: typeof StepGeom_TrimmingPreference;
  StepShape_AngleRelator: typeof StepShape_AngleRelator;
  StepShape_BooleanOperator: typeof StepShape_BooleanOperator;
};
