declare const libName = "./modules/TKSTEP209.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class RWStepElement_RWAnalysisItemWithinRepresentation {
  constructor()
  ReadStep(data: Handle_StepData_StepReaderData, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWCurve3dElementDescriptor {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWCurveElementEndReleasePacket {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWCurveElementSectionDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWCurveElementSectionDerivedDefinitions {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWElementDescriptor {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWElementMaterial {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWSurface3dElementDescriptor {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWSurfaceElementProperty {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWSurfaceSection {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWSurfaceSectionField {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWSurfaceSectionFieldConstant {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWSurfaceSectionFieldVarying {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWUniformSurfaceSection {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepElement_RWVolume3dElementDescriptor {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWAlignedCurve3dElementCoordinateSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWAlignedSurface3dElementCoordinateSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWArbitraryVolume3dElementCoordinateSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWConstantSurface3dElementCoordinateSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurve3dElementProperty {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurve3dElementRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurveElementEndOffset {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurveElementEndRelease {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurveElementInterval {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurveElementIntervalConstant {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurveElementIntervalLinearlyVarying {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWCurveElementLocation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWDummyNode {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWElementGeometricRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWElementGroup {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWElementRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaAreaDensity {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaAxis2Placement3d {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaCurveSectionGeometricRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaGroup {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaLinearElasticity {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaMassDensity {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaMaterialPropertyRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaMaterialPropertyRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaModel {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaModel3d {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaModelDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaMoistureAbsorption {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaParametricPoint {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaRepresentationItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaSecantCoefficientOfLinearThermalExpansion {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaShellBendingStiffness {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaShellMembraneBendingCouplingStiffness {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaShellMembraneStiffness {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaShellShearStiffness {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaSurfaceSectionGeometricRelationship {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFeaTangentialCoefficientOfLinearThermalExpansion {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFreedomAndCoefficient {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWFreedomsList {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWGeometricNode {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWNode {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWNodeDefinition {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWNodeGroup {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWNodeRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWNodeSet {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWNodeWithSolutionCoordinateSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWNodeWithVector {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWParametricCurve3dElementCoordinateDirection {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWParametricCurve3dElementCoordinateSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWParametricSurface3dElementCoordinateSystem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWSurface3dElementRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepFEA_RWVolume3dElementRepresentation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class StepElement_ElementMaterial extends Standard_Transient {
  constructor()
  Init(aMaterialId: any, aDescription: any, aProperties: any): void;
  MaterialId(): any;
  SetMaterialId(MaterialId: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  Properties(): any;
  SetProperties(Properties: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_ElementOrElementGroup extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ElementRepresentation(): any;
  ElementGroup(): any;
}

export declare class StepElement_ElementAspect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetElementVolume(aVal: StepElement_ElementVolume): void;
  ElementVolume(): StepElement_ElementVolume;
  SetVolume3dFace(aVal: Standard_Integer): void;
  Volume3dFace(): Standard_Integer;
  SetVolume2dFace(aVal: Standard_Integer): void;
  Volume2dFace(): Standard_Integer;
  SetVolume3dEdge(aVal: Standard_Integer): void;
  Volume3dEdge(): Standard_Integer;
  SetVolume2dEdge(aVal: Standard_Integer): void;
  Volume2dEdge(): Standard_Integer;
  SetSurface3dFace(aVal: Standard_Integer): void;
  Surface3dFace(): Standard_Integer;
  SetSurface2dFace(aVal: Standard_Integer): void;
  Surface2dFace(): Standard_Integer;
  SetSurface3dEdge(aVal: Standard_Integer): void;
  Surface3dEdge(): Standard_Integer;
  SetSurface2dEdge(aVal: Standard_Integer): void;
  Surface2dEdge(): Standard_Integer;
  SetCurveEdge(aVal: StepElement_CurveEdge): void;
  CurveEdge(): StepElement_CurveEdge;
}

export declare class StepFEA_ElementGeometricRelationship extends Standard_Transient {
  constructor()
  Init(aElementRef: StepFEA_ElementOrElementGroup, aItem: any, aAspect: StepElement_ElementAspect): void;
  ElementRef(): StepFEA_ElementOrElementGroup;
  SetElementRef(ElementRef: StepFEA_ElementOrElementGroup): void;
  Item(): any;
  SetItem(Item: any): void;
  Aspect(): StepElement_ElementAspect;
  SetAspect(Aspect: StepElement_ElementAspect): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_NodeRepresentation extends StepRepr_Representation {
  constructor()
  Init(aRepresentation_Name: any, aRepresentation_Items: any, aRepresentation_ContextOfItems: any, aModelRef: any): void;
  ModelRef(): any;
  SetModelRef(ModelRef: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_ElementRepresentation extends StepRepr_Representation {
  constructor()
  Init(aRepresentation_Name: any, aRepresentation_Items: any, aRepresentation_ContextOfItems: any, aNodeList: any): void;
  NodeList(): any;
  SetNodeList(NodeList: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_CurveElementSectionDefinition extends Standard_Transient {
  constructor()
  Init(aDescription: any, aSectionAngle: Standard_Real): void;
  Description(): any;
  SetDescription(Description: any): void;
  SectionAngle(): Standard_Real;
  SetSectionAngle(SectionAngle: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_AnalysisItemWithinRepresentation extends Standard_Transient {
  constructor()
  Init(aName: any, aDescription: any, aItem: any, aRep: any): void;
  Name(): any;
  SetName(Name: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  Item(): any;
  SetItem(Item: any): void;
  Rep(): any;
  SetRep(Rep: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_CurveElementFreedom extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetEnumeratedCurveElementFreedom(aVal: StepElement_EnumeratedCurveElementFreedom): void;
  EnumeratedCurveElementFreedom(): StepElement_EnumeratedCurveElementFreedom;
  SetApplicationDefinedDegreeOfFreedom(aVal: any): void;
  ApplicationDefinedDegreeOfFreedom(): any;
}

export declare class StepElement_CurveElementEndReleasePacket extends Standard_Transient {
  constructor()
  Init(aReleaseFreedom: StepElement_CurveElementFreedom, aReleaseStiffness: Standard_Real): void;
  ReleaseFreedom(): StepElement_CurveElementFreedom;
  SetReleaseFreedom(ReleaseFreedom: StepElement_CurveElementFreedom): void;
  ReleaseStiffness(): Standard_Real;
  SetReleaseStiffness(ReleaseStiffness: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_CurveElementPurposeMember extends StepData_SelectNamed {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_SurfaceElementPurposeMember extends StepData_SelectNamed {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_MeasureOrUnspecifiedValue extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetContextDependentMeasure(aVal: Standard_Real): void;
  ContextDependentMeasure(): Standard_Real;
  SetUnspecifiedValue(aVal: StepElement_UnspecifiedValue): void;
  UnspecifiedValue(): StepElement_UnspecifiedValue;
}

export declare class StepElement_SurfaceSection extends Standard_Transient {
  constructor()
  Init(aOffset: StepElement_MeasureOrUnspecifiedValue, aNonStructuralMass: StepElement_MeasureOrUnspecifiedValue, aNonStructuralMassOffset: StepElement_MeasureOrUnspecifiedValue): void;
  Offset(): StepElement_MeasureOrUnspecifiedValue;
  SetOffset(Offset: StepElement_MeasureOrUnspecifiedValue): void;
  NonStructuralMass(): StepElement_MeasureOrUnspecifiedValue;
  SetNonStructuralMass(NonStructuralMass: StepElement_MeasureOrUnspecifiedValue): void;
  NonStructuralMassOffset(): StepElement_MeasureOrUnspecifiedValue;
  SetNonStructuralMassOffset(NonStructuralMassOffset: StepElement_MeasureOrUnspecifiedValue): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_VolumeElementPurpose extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetEnumeratedVolumeElementPurpose(aVal: StepElement_EnumeratedVolumeElementPurpose): void;
  EnumeratedVolumeElementPurpose(): StepElement_EnumeratedVolumeElementPurpose;
  SetApplicationDefinedElementPurpose(aVal: any): void;
  ApplicationDefinedElementPurpose(): any;
}

export declare class StepElement_VolumeElementPurposeMember extends StepData_SelectNamed {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_SurfaceElementPurpose extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetEnumeratedSurfaceElementPurpose(aVal: StepElement_EnumeratedSurfaceElementPurpose): void;
  EnumeratedSurfaceElementPurpose(): StepElement_EnumeratedSurfaceElementPurpose;
  SetApplicationDefinedElementPurpose(aVal: any): void;
  ApplicationDefinedElementPurpose(): any;
}

export declare class StepElement_ElementDescriptor extends Standard_Transient {
  constructor()
  Init(aTopologyOrder: StepElement_ElementOrder, aDescription: any): void;
  TopologyOrder(): StepElement_ElementOrder;
  SetTopologyOrder(TopologyOrder: StepElement_ElementOrder): void;
  Description(): any;
  SetDescription(Description: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_Curve3dElementDescriptor extends StepElement_ElementDescriptor {
  constructor()
  Init(aElementDescriptor_TopologyOrder: StepElement_ElementOrder, aElementDescriptor_Description: any, aPurpose: any): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_CurveElementFreedomMember extends StepData_SelectNamed {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_CurveElementPurpose extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetEnumeratedCurveElementPurpose(aVal: StepElement_EnumeratedCurveElementPurpose): void;
  EnumeratedCurveElementPurpose(): StepElement_EnumeratedCurveElementPurpose;
  SetApplicationDefinedElementPurpose(aVal: any): void;
  ApplicationDefinedElementPurpose(): any;
}

export declare class StepElement_CurveElementSectionDerivedDefinitions extends StepElement_CurveElementSectionDefinition {
  constructor()
  Init(aCurveElementSectionDefinition_Description: any, aCurveElementSectionDefinition_SectionAngle: Standard_Real, aCrossSectionalArea: Standard_Real, aShearArea: any, aSecondMomentOfArea: any, aTorsionalConstant: Standard_Real, aWarpingConstant: StepElement_MeasureOrUnspecifiedValue, aLocationOfCentroid: any, aLocationOfShearCentre: any, aLocationOfNonStructuralMass: any, aNonStructuralMass: StepElement_MeasureOrUnspecifiedValue, aPolarMoment: StepElement_MeasureOrUnspecifiedValue): void;
  CrossSectionalArea(): Standard_Real;
  SetCrossSectionalArea(CrossSectionalArea: Standard_Real): void;
  ShearArea(): any;
  SetShearArea(ShearArea: any): void;
  SecondMomentOfArea(): any;
  SetSecondMomentOfArea(SecondMomentOfArea: any): void;
  TorsionalConstant(): Standard_Real;
  SetTorsionalConstant(TorsionalConstant: Standard_Real): void;
  WarpingConstant(): StepElement_MeasureOrUnspecifiedValue;
  SetWarpingConstant(WarpingConstant: StepElement_MeasureOrUnspecifiedValue): void;
  LocationOfCentroid(): any;
  SetLocationOfCentroid(LocationOfCentroid: any): void;
  LocationOfShearCentre(): any;
  SetLocationOfShearCentre(LocationOfShearCentre: any): void;
  LocationOfNonStructuralMass(): any;
  SetLocationOfNonStructuralMass(LocationOfNonStructuralMass: any): void;
  NonStructuralMass(): StepElement_MeasureOrUnspecifiedValue;
  SetNonStructuralMass(NonStructuralMass: StepElement_MeasureOrUnspecifiedValue): void;
  PolarMoment(): StepElement_MeasureOrUnspecifiedValue;
  SetPolarMoment(PolarMoment: StepElement_MeasureOrUnspecifiedValue): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_ElementAspectMember extends StepData_SelectNamed {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_MeasureOrUnspecifiedValueMember extends StepData_SelectNamed {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_Surface3dElementDescriptor extends StepElement_ElementDescriptor {
  constructor()
  Init(aElementDescriptor_TopologyOrder: StepElement_ElementOrder, aElementDescriptor_Description: any, aPurpose: any, aShape: StepElement_Element2dShape): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  Shape(): StepElement_Element2dShape;
  SetShape(Shape: StepElement_Element2dShape): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_SurfaceElementProperty extends Standard_Transient {
  constructor()
  Init(aPropertyId: any, aDescription: any, aSection: any): void;
  PropertyId(): any;
  SetPropertyId(PropertyId: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  Section(): any;
  SetSection(Section: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_SurfaceSectionField extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_SurfaceSectionFieldConstant extends StepElement_SurfaceSectionField {
  constructor()
  Init(aDefinition: any): void;
  Definition(): any;
  SetDefinition(Definition: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_SurfaceSectionFieldVarying extends StepElement_SurfaceSectionField {
  constructor()
  Init(aDefinitions: any, aAdditionalNodeValues: Standard_Boolean): void;
  Definitions(): any;
  SetDefinitions(Definitions: any): void;
  AdditionalNodeValues(): Standard_Boolean;
  SetAdditionalNodeValues(AdditionalNodeValues: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_UniformSurfaceSection extends StepElement_SurfaceSection {
  constructor()
  Init(aSurfaceSection_Offset: StepElement_MeasureOrUnspecifiedValue, aSurfaceSection_NonStructuralMass: StepElement_MeasureOrUnspecifiedValue, aSurfaceSection_NonStructuralMassOffset: StepElement_MeasureOrUnspecifiedValue, aThickness: Standard_Real, aBendingThickness: StepElement_MeasureOrUnspecifiedValue, aShearThickness: StepElement_MeasureOrUnspecifiedValue): void;
  Thickness(): Standard_Real;
  SetThickness(Thickness: Standard_Real): void;
  BendingThickness(): StepElement_MeasureOrUnspecifiedValue;
  SetBendingThickness(BendingThickness: StepElement_MeasureOrUnspecifiedValue): void;
  ShearThickness(): StepElement_MeasureOrUnspecifiedValue;
  SetShearThickness(ShearThickness: StepElement_MeasureOrUnspecifiedValue): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepElement_Volume3dElementDescriptor extends StepElement_ElementDescriptor {
  constructor()
  Init(aElementDescriptor_TopologyOrder: StepElement_ElementOrder, aElementDescriptor_Description: any, aPurpose: any, aShape: StepElement_Volume3dElementShape): void;
  Purpose(): any;
  SetPurpose(Purpose: any): void;
  Shape(): StepElement_Volume3dElementShape;
  SetShape(Shape: StepElement_Volume3dElementShape): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_AlignedCurve3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aCoordinateSystem: any): void;
  CoordinateSystem(): any;
  SetCoordinateSystem(CoordinateSystem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_AlignedSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aCoordinateSystem: any): void;
  CoordinateSystem(): any;
  SetCoordinateSystem(CoordinateSystem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_ArbitraryVolume3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aCoordinateSystem: any): void;
  CoordinateSystem(): any;
  SetCoordinateSystem(CoordinateSystem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_CurveElementEndCoordinateSystem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  FeaAxis2Placement3d(): any;
  AlignedCurve3dElementCoordinateSystem(): any;
  ParametricCurve3dElementCoordinateSystem(): any;
}

export declare class StepFEA_CurveElementEndOffset extends Standard_Transient {
  constructor()
  Init(aCoordinateSystem: StepFEA_CurveElementEndCoordinateSystem, aOffsetVector: any): void;
  CoordinateSystem(): StepFEA_CurveElementEndCoordinateSystem;
  SetCoordinateSystem(CoordinateSystem: StepFEA_CurveElementEndCoordinateSystem): void;
  OffsetVector(): any;
  SetOffsetVector(OffsetVector: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_CurveElementEndRelease extends Standard_Transient {
  constructor()
  Init(aCoordinateSystem: StepFEA_CurveElementEndCoordinateSystem, aReleases: any): void;
  CoordinateSystem(): StepFEA_CurveElementEndCoordinateSystem;
  SetCoordinateSystem(CoordinateSystem: StepFEA_CurveElementEndCoordinateSystem): void;
  Releases(): any;
  SetReleases(Releases: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_CurveElementInterval extends Standard_Transient {
  constructor()
  Init(aFinishPosition: any, aEuAngles: any): void;
  FinishPosition(): any;
  SetFinishPosition(FinishPosition: any): void;
  EuAngles(): any;
  SetEuAngles(EuAngles: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_DegreeOfFreedom extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetEnumeratedDegreeOfFreedom(aVal: StepFEA_EnumeratedDegreeOfFreedom): void;
  EnumeratedDegreeOfFreedom(): StepFEA_EnumeratedDegreeOfFreedom;
  SetApplicationDefinedDegreeOfFreedom(aVal: any): void;
  ApplicationDefinedDegreeOfFreedom(): any;
}

export declare class StepFEA_ConstantSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aAxis: Standard_Integer, aAngle: Standard_Real): void;
  Axis(): Standard_Integer;
  SetAxis(Axis: Standard_Integer): void;
  Angle(): Standard_Real;
  SetAngle(Angle: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_Curve3dElementProperty extends Standard_Transient {
  constructor()
  Init(aPropertyId: any, aDescription: any, aIntervalDefinitions: any, aEndOffsets: any, aEndReleases: any): void;
  PropertyId(): any;
  SetPropertyId(PropertyId: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  IntervalDefinitions(): any;
  SetIntervalDefinitions(IntervalDefinitions: any): void;
  EndOffsets(): any;
  SetEndOffsets(EndOffsets: any): void;
  EndReleases(): any;
  SetEndReleases(EndReleases: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_Curve3dElementRepresentation extends StepFEA_ElementRepresentation {
  constructor()
  Init(aRepresentation_Name: any, aRepresentation_Items: any, aRepresentation_ContextOfItems: any, aElementRepresentation_NodeList: any, aModelRef: any, aElementDescriptor: any, aProperty: any, aMaterial: any): void;
  ModelRef(): any;
  SetModelRef(ModelRef: any): void;
  ElementDescriptor(): any;
  SetElementDescriptor(ElementDescriptor: any): void;
  Property(): any;
  SetProperty(Property: any): void;
  Material(): any;
  SetMaterial(Material: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_CurveElementIntervalConstant extends StepFEA_CurveElementInterval {
  constructor()
  Init(aCurveElementInterval_FinishPosition: any, aCurveElementInterval_EuAngles: any, aSection: any): void;
  Section(): any;
  SetSection(Section: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_CurveElementIntervalLinearlyVarying extends StepFEA_CurveElementInterval {
  constructor()
  Init(aCurveElementInterval_FinishPosition: any, aCurveElementInterval_EuAngles: any, aSections: any): void;
  Sections(): any;
  SetSections(Sections: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_CurveElementLocation extends Standard_Transient {
  constructor()
  Init(aCoordinate: any): void;
  Coordinate(): any;
  SetCoordinate(Coordinate: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_DegreeOfFreedomMember extends StepData_SelectNamed {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_DummyNode extends StepFEA_NodeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaGroup extends StepBasic_Group {
  constructor()
  Init(aGroup_Name: any, aGroup_Description: any, aModelRef: any): void;
  ModelRef(): any;
  SetModelRef(ModelRef: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_ElementGroup extends StepFEA_FeaGroup {
  constructor()
  Init(aGroup_Name: any, aGroup_Description: any, aFeaGroup_ModelRef: any, aElements: any): void;
  Elements(): any;
  SetElements(Elements: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaMaterialPropertyRepresentationItem extends StepRepr_RepresentationItem {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaAreaDensity extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstant: Standard_Real): void;
  FeaConstant(): Standard_Real;
  SetFeaConstant(FeaConstant: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaAxis2Placement3d extends StepGeom_Axis2Placement3d {
  constructor()
  Init(aRepresentationItem_Name: any, aPlacement_Location: any, hasAxis2Placement3d_Axis: Standard_Boolean, aAxis2Placement3d_Axis: any, hasAxis2Placement3d_RefDirection: Standard_Boolean, aAxis2Placement3d_RefDirection: any, aSystemType: StepFEA_CoordinateSystemType, aDescription: any): void;
  SystemType(): StepFEA_CoordinateSystemType;
  SetSystemType(SystemType: StepFEA_CoordinateSystemType): void;
  Description(): any;
  SetDescription(Description: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaCurveSectionGeometricRelationship extends Standard_Transient {
  constructor()
  Init(aSectionRef: any, aItem: any): void;
  SectionRef(): any;
  SetSectionRef(SectionRef: any): void;
  Item(): any;
  SetItem(Item: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaLinearElasticity extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor43d): void;
  FeaConstants(): StepFEA_SymmetricTensor43d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor43d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaMassDensity extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstant: Standard_Real): void;
  FeaConstant(): Standard_Real;
  SetFeaConstant(FeaConstant: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaMaterialPropertyRepresentation extends StepRepr_MaterialPropertyRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaModel extends StepRepr_Representation {
  constructor()
  Init(aRepresentation_Name: any, aRepresentation_Items: any, aRepresentation_ContextOfItems: any, aCreatingSoftware: any, aIntendedAnalysisCode: any, aDescription: any, aAnalysisType: any): void;
  CreatingSoftware(): any;
  SetCreatingSoftware(CreatingSoftware: any): void;
  IntendedAnalysisCode(): any;
  SetIntendedAnalysisCode(IntendedAnalysisCode: any): void;
  Description(): any;
  SetDescription(Description: any): void;
  AnalysisType(): any;
  SetAnalysisType(AnalysisType: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaModel3d extends StepFEA_FeaModel {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaModelDefinition extends StepRepr_ShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_SymmetricTensor23d extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  CaseMem(ent: any): Standard_Integer;
  NewMember(): any;
  SetIsotropicSymmetricTensor23d(aVal: Standard_Real): void;
  IsotropicSymmetricTensor23d(): Standard_Real;
  SetOrthotropicSymmetricTensor23d(aVal: any): void;
  OrthotropicSymmetricTensor23d(): any;
  SetAnisotropicSymmetricTensor23d(aVal: any): void;
  AnisotropicSymmetricTensor23d(): any;
}

export declare class StepFEA_FeaMoistureAbsorption extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor23d): void;
  FeaConstants(): StepFEA_SymmetricTensor23d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor23d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaParametricPoint extends StepGeom_Point {
  constructor()
  Init(aRepresentationItem_Name: any, aCoordinates: any): void;
  Coordinates(): any;
  SetCoordinates(Coordinates: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaSecantCoefficientOfLinearThermalExpansion extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor23d, aReferenceTemperature: Standard_Real): void;
  FeaConstants(): StepFEA_SymmetricTensor23d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor23d): void;
  ReferenceTemperature(): Standard_Real;
  SetReferenceTemperature(ReferenceTemperature: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_SymmetricTensor42d extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AnisotropicSymmetricTensor42d(): any;
}

export declare class StepFEA_FeaShellBendingStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor42d): void;
  FeaConstants(): StepFEA_SymmetricTensor42d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor42d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaShellMembraneBendingCouplingStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor42d): void;
  FeaConstants(): StepFEA_SymmetricTensor42d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor42d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaShellMembraneStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor42d): void;
  FeaConstants(): StepFEA_SymmetricTensor42d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor42d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_SymmetricTensor22d extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AnisotropicSymmetricTensor22d(): any;
}

export declare class StepFEA_FeaShellShearStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor22d): void;
  FeaConstants(): StepFEA_SymmetricTensor22d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor22d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaSurfaceSectionGeometricRelationship extends Standard_Transient {
  constructor()
  Init(aSectionRef: any, aItem: any): void;
  SectionRef(): any;
  SetSectionRef(SectionRef: any): void;
  Item(): any;
  SetItem(Item: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion extends StepFEA_FeaMaterialPropertyRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aFeaConstants: StepFEA_SymmetricTensor23d): void;
  FeaConstants(): StepFEA_SymmetricTensor23d;
  SetFeaConstants(FeaConstants: StepFEA_SymmetricTensor23d): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FreedomAndCoefficient extends Standard_Transient {
  constructor()
  Init(aFreedom: StepFEA_DegreeOfFreedom, aA: StepElement_MeasureOrUnspecifiedValue): void;
  Freedom(): StepFEA_DegreeOfFreedom;
  SetFreedom(Freedom: StepFEA_DegreeOfFreedom): void;
  A(): StepElement_MeasureOrUnspecifiedValue;
  SetA(A: StepElement_MeasureOrUnspecifiedValue): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_FreedomsList extends Standard_Transient {
  constructor()
  Init(aFreedoms: any): void;
  Freedoms(): any;
  SetFreedoms(Freedoms: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_GeometricNode extends StepFEA_NodeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_Node extends StepFEA_NodeRepresentation {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_NodeDefinition extends StepRepr_ShapeAspect {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_NodeGroup extends StepFEA_FeaGroup {
  constructor()
  Init(aGroup_Name: any, aGroup_Description: any, aFeaGroup_ModelRef: any, aNodes: any): void;
  Nodes(): any;
  SetNodes(Nodes: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_NodeSet extends StepGeom_GeometricRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aNodes: any): void;
  Nodes(): any;
  SetNodes(Nodes: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_NodeWithSolutionCoordinateSystem extends StepFEA_Node {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_NodeWithVector extends StepFEA_Node {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_ParametricCurve3dElementCoordinateDirection extends StepFEA_FeaRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aOrientation: any): void;
  Orientation(): any;
  SetOrientation(Orientation: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_ParametricCurve3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aDirection: any): void;
  Direction(): any;
  SetDirection(Direction: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_ParametricSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
  constructor()
  Init(aRepresentationItem_Name: any, aAxis: Standard_Integer, aAngle: Standard_Real): void;
  Axis(): Standard_Integer;
  SetAxis(Axis: Standard_Integer): void;
  Angle(): Standard_Real;
  SetAngle(Angle: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_Surface3dElementRepresentation extends StepFEA_ElementRepresentation {
  constructor()
  Init(aRepresentation_Name: any, aRepresentation_Items: any, aRepresentation_ContextOfItems: any, aElementRepresentation_NodeList: any, aModelRef: any, aElementDescriptor: any, aProperty: any, aMaterial: any): void;
  ModelRef(): any;
  SetModelRef(ModelRef: any): void;
  ElementDescriptor(): any;
  SetElementDescriptor(ElementDescriptor: any): void;
  Property(): any;
  SetProperty(Property: any): void;
  Material(): any;
  SetMaterial(Material: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_SymmetricTensor23dMember extends StepData_SelectArrReal {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_SymmetricTensor43dMember extends StepData_SelectArrReal {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepFEA_Volume3dElementRepresentation extends StepFEA_ElementRepresentation {
  constructor()
  Init(aRepresentation_Name: any, aRepresentation_Items: any, aRepresentation_ContextOfItems: any, aElementRepresentation_NodeList: any, aModelRef: any, aElementDescriptor: any, aMaterial: any): void;
  ModelRef(): any;
  SetModelRef(ModelRef: any): void;
  ElementDescriptor(): any;
  SetElementDescriptor(ElementDescriptor: any): void;
  Material(): any;
  SetMaterial(Material: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_StepElement_ElementMaterial {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_ElementMaterial): void;
  get(): StepElement_ElementMaterial;
}

  export declare class Handle_StepElement_ElementMaterial_1 extends Handle_StepElement_ElementMaterial {
    constructor();
  }

  export declare class Handle_StepElement_ElementMaterial_2 extends Handle_StepElement_ElementMaterial {
    constructor(thePtr: StepElement_ElementMaterial);
  }

  export declare class Handle_StepElement_ElementMaterial_3 extends Handle_StepElement_ElementMaterial {
    constructor(theHandle: Handle_StepElement_ElementMaterial);
  }

  export declare class Handle_StepElement_ElementMaterial_4 extends Handle_StepElement_ElementMaterial {
    constructor(theHandle: Handle_StepElement_ElementMaterial);
  }

export declare class Handle_StepElement_HSequenceOfElementMaterial {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HSequenceOfElementMaterial): void;
  get(): StepElement_HSequenceOfElementMaterial;
}

  export declare class Handle_StepElement_HSequenceOfElementMaterial_1 extends Handle_StepElement_HSequenceOfElementMaterial {
    constructor();
  }

  export declare class Handle_StepElement_HSequenceOfElementMaterial_2 extends Handle_StepElement_HSequenceOfElementMaterial {
    constructor(thePtr: StepElement_HSequenceOfElementMaterial);
  }

  export declare class Handle_StepElement_HSequenceOfElementMaterial_3 extends Handle_StepElement_HSequenceOfElementMaterial {
    constructor(theHandle: Handle_StepElement_HSequenceOfElementMaterial);
  }

  export declare class Handle_StepElement_HSequenceOfElementMaterial_4 extends Handle_StepElement_HSequenceOfElementMaterial {
    constructor(theHandle: Handle_StepElement_HSequenceOfElementMaterial);
  }

export declare class Handle_StepFEA_ElementGeometricRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ElementGeometricRelationship): void;
  get(): StepFEA_ElementGeometricRelationship;
}

  export declare class Handle_StepFEA_ElementGeometricRelationship_1 extends Handle_StepFEA_ElementGeometricRelationship {
    constructor();
  }

  export declare class Handle_StepFEA_ElementGeometricRelationship_2 extends Handle_StepFEA_ElementGeometricRelationship {
    constructor(thePtr: StepFEA_ElementGeometricRelationship);
  }

  export declare class Handle_StepFEA_ElementGeometricRelationship_3 extends Handle_StepFEA_ElementGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_ElementGeometricRelationship);
  }

  export declare class Handle_StepFEA_ElementGeometricRelationship_4 extends Handle_StepFEA_ElementGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_ElementGeometricRelationship);
  }

export declare class Handle_StepFEA_HSequenceOfElementGeometricRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HSequenceOfElementGeometricRelationship): void;
  get(): StepFEA_HSequenceOfElementGeometricRelationship;
}

  export declare class Handle_StepFEA_HSequenceOfElementGeometricRelationship_1 extends Handle_StepFEA_HSequenceOfElementGeometricRelationship {
    constructor();
  }

  export declare class Handle_StepFEA_HSequenceOfElementGeometricRelationship_2 extends Handle_StepFEA_HSequenceOfElementGeometricRelationship {
    constructor(thePtr: StepFEA_HSequenceOfElementGeometricRelationship);
  }

  export declare class Handle_StepFEA_HSequenceOfElementGeometricRelationship_3 extends Handle_StepFEA_HSequenceOfElementGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_HSequenceOfElementGeometricRelationship);
  }

  export declare class Handle_StepFEA_HSequenceOfElementGeometricRelationship_4 extends Handle_StepFEA_HSequenceOfElementGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_HSequenceOfElementGeometricRelationship);
  }

export declare class Handle_StepFEA_NodeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_NodeRepresentation): void;
  get(): StepFEA_NodeRepresentation;
}

  export declare class Handle_StepFEA_NodeRepresentation_1 extends Handle_StepFEA_NodeRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_NodeRepresentation_2 extends Handle_StepFEA_NodeRepresentation {
    constructor(thePtr: StepFEA_NodeRepresentation);
  }

  export declare class Handle_StepFEA_NodeRepresentation_3 extends Handle_StepFEA_NodeRepresentation {
    constructor(theHandle: Handle_StepFEA_NodeRepresentation);
  }

  export declare class Handle_StepFEA_NodeRepresentation_4 extends Handle_StepFEA_NodeRepresentation {
    constructor(theHandle: Handle_StepFEA_NodeRepresentation);
  }

export declare class Handle_StepFEA_HArray1OfNodeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HArray1OfNodeRepresentation): void;
  get(): StepFEA_HArray1OfNodeRepresentation;
}

  export declare class Handle_StepFEA_HArray1OfNodeRepresentation_1 extends Handle_StepFEA_HArray1OfNodeRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_HArray1OfNodeRepresentation_2 extends Handle_StepFEA_HArray1OfNodeRepresentation {
    constructor(thePtr: StepFEA_HArray1OfNodeRepresentation);
  }

  export declare class Handle_StepFEA_HArray1OfNodeRepresentation_3 extends Handle_StepFEA_HArray1OfNodeRepresentation {
    constructor(theHandle: Handle_StepFEA_HArray1OfNodeRepresentation);
  }

  export declare class Handle_StepFEA_HArray1OfNodeRepresentation_4 extends Handle_StepFEA_HArray1OfNodeRepresentation {
    constructor(theHandle: Handle_StepFEA_HArray1OfNodeRepresentation);
  }

export declare class Handle_StepFEA_ElementRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ElementRepresentation): void;
  get(): StepFEA_ElementRepresentation;
}

  export declare class Handle_StepFEA_ElementRepresentation_1 extends Handle_StepFEA_ElementRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_ElementRepresentation_2 extends Handle_StepFEA_ElementRepresentation {
    constructor(thePtr: StepFEA_ElementRepresentation);
  }

  export declare class Handle_StepFEA_ElementRepresentation_3 extends Handle_StepFEA_ElementRepresentation {
    constructor(theHandle: Handle_StepFEA_ElementRepresentation);
  }

  export declare class Handle_StepFEA_ElementRepresentation_4 extends Handle_StepFEA_ElementRepresentation {
    constructor(theHandle: Handle_StepFEA_ElementRepresentation);
  }

export declare class Handle_StepFEA_HSequenceOfElementRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HSequenceOfElementRepresentation): void;
  get(): StepFEA_HSequenceOfElementRepresentation;
}

  export declare class Handle_StepFEA_HSequenceOfElementRepresentation_1 extends Handle_StepFEA_HSequenceOfElementRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_HSequenceOfElementRepresentation_2 extends Handle_StepFEA_HSequenceOfElementRepresentation {
    constructor(thePtr: StepFEA_HSequenceOfElementRepresentation);
  }

  export declare class Handle_StepFEA_HSequenceOfElementRepresentation_3 extends Handle_StepFEA_HSequenceOfElementRepresentation {
    constructor(theHandle: Handle_StepFEA_HSequenceOfElementRepresentation);
  }

  export declare class Handle_StepFEA_HSequenceOfElementRepresentation_4 extends Handle_StepFEA_HSequenceOfElementRepresentation {
    constructor(theHandle: Handle_StepFEA_HSequenceOfElementRepresentation);
  }

export declare class Handle_StepElement_CurveElementSectionDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_CurveElementSectionDefinition): void;
  get(): StepElement_CurveElementSectionDefinition;
}

  export declare class Handle_StepElement_CurveElementSectionDefinition_1 extends Handle_StepElement_CurveElementSectionDefinition {
    constructor();
  }

  export declare class Handle_StepElement_CurveElementSectionDefinition_2 extends Handle_StepElement_CurveElementSectionDefinition {
    constructor(thePtr: StepElement_CurveElementSectionDefinition);
  }

  export declare class Handle_StepElement_CurveElementSectionDefinition_3 extends Handle_StepElement_CurveElementSectionDefinition {
    constructor(theHandle: Handle_StepElement_CurveElementSectionDefinition);
  }

  export declare class Handle_StepElement_CurveElementSectionDefinition_4 extends Handle_StepElement_CurveElementSectionDefinition {
    constructor(theHandle: Handle_StepElement_CurveElementSectionDefinition);
  }

export declare class Handle_StepElement_HSequenceOfCurveElementSectionDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HSequenceOfCurveElementSectionDefinition): void;
  get(): StepElement_HSequenceOfCurveElementSectionDefinition;
}

  export declare class Handle_StepElement_HSequenceOfCurveElementSectionDefinition_1 extends Handle_StepElement_HSequenceOfCurveElementSectionDefinition {
    constructor();
  }

  export declare class Handle_StepElement_HSequenceOfCurveElementSectionDefinition_2 extends Handle_StepElement_HSequenceOfCurveElementSectionDefinition {
    constructor(thePtr: StepElement_HSequenceOfCurveElementSectionDefinition);
  }

  export declare class Handle_StepElement_HSequenceOfCurveElementSectionDefinition_3 extends Handle_StepElement_HSequenceOfCurveElementSectionDefinition {
    constructor(theHandle: Handle_StepElement_HSequenceOfCurveElementSectionDefinition);
  }

  export declare class Handle_StepElement_HSequenceOfCurveElementSectionDefinition_4 extends Handle_StepElement_HSequenceOfCurveElementSectionDefinition {
    constructor(theHandle: Handle_StepElement_HSequenceOfCurveElementSectionDefinition);
  }

export declare class Handle_StepElement_AnalysisItemWithinRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_AnalysisItemWithinRepresentation): void;
  get(): StepElement_AnalysisItemWithinRepresentation;
}

  export declare class Handle_StepElement_AnalysisItemWithinRepresentation_1 extends Handle_StepElement_AnalysisItemWithinRepresentation {
    constructor();
  }

  export declare class Handle_StepElement_AnalysisItemWithinRepresentation_2 extends Handle_StepElement_AnalysisItemWithinRepresentation {
    constructor(thePtr: StepElement_AnalysisItemWithinRepresentation);
  }

  export declare class Handle_StepElement_AnalysisItemWithinRepresentation_3 extends Handle_StepElement_AnalysisItemWithinRepresentation {
    constructor(theHandle: Handle_StepElement_AnalysisItemWithinRepresentation);
  }

  export declare class Handle_StepElement_AnalysisItemWithinRepresentation_4 extends Handle_StepElement_AnalysisItemWithinRepresentation {
    constructor(theHandle: Handle_StepElement_AnalysisItemWithinRepresentation);
  }

export declare class Handle_StepElement_CurveElementEndReleasePacket {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_CurveElementEndReleasePacket): void;
  get(): StepElement_CurveElementEndReleasePacket;
}

  export declare class Handle_StepElement_CurveElementEndReleasePacket_1 extends Handle_StepElement_CurveElementEndReleasePacket {
    constructor();
  }

  export declare class Handle_StepElement_CurveElementEndReleasePacket_2 extends Handle_StepElement_CurveElementEndReleasePacket {
    constructor(thePtr: StepElement_CurveElementEndReleasePacket);
  }

  export declare class Handle_StepElement_CurveElementEndReleasePacket_3 extends Handle_StepElement_CurveElementEndReleasePacket {
    constructor(theHandle: Handle_StepElement_CurveElementEndReleasePacket);
  }

  export declare class Handle_StepElement_CurveElementEndReleasePacket_4 extends Handle_StepElement_CurveElementEndReleasePacket {
    constructor(theHandle: Handle_StepElement_CurveElementEndReleasePacket);
  }

export declare class Handle_StepElement_CurveElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_CurveElementPurposeMember): void;
  get(): StepElement_CurveElementPurposeMember;
}

  export declare class Handle_StepElement_CurveElementPurposeMember_1 extends Handle_StepElement_CurveElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_CurveElementPurposeMember_2 extends Handle_StepElement_CurveElementPurposeMember {
    constructor(thePtr: StepElement_CurveElementPurposeMember);
  }

  export declare class Handle_StepElement_CurveElementPurposeMember_3 extends Handle_StepElement_CurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_CurveElementPurposeMember);
  }

  export declare class Handle_StepElement_CurveElementPurposeMember_4 extends Handle_StepElement_CurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_CurveElementPurposeMember);
  }

export declare class Handle_StepElement_HSequenceOfCurveElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HSequenceOfCurveElementPurposeMember): void;
  get(): StepElement_HSequenceOfCurveElementPurposeMember;
}

  export declare class Handle_StepElement_HSequenceOfCurveElementPurposeMember_1 extends Handle_StepElement_HSequenceOfCurveElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_HSequenceOfCurveElementPurposeMember_2 extends Handle_StepElement_HSequenceOfCurveElementPurposeMember {
    constructor(thePtr: StepElement_HSequenceOfCurveElementPurposeMember);
  }

  export declare class Handle_StepElement_HSequenceOfCurveElementPurposeMember_3 extends Handle_StepElement_HSequenceOfCurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HSequenceOfCurveElementPurposeMember);
  }

  export declare class Handle_StepElement_HSequenceOfCurveElementPurposeMember_4 extends Handle_StepElement_HSequenceOfCurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HSequenceOfCurveElementPurposeMember);
  }

export declare class Handle_StepElement_SurfaceElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_SurfaceElementPurposeMember): void;
  get(): StepElement_SurfaceElementPurposeMember;
}

  export declare class Handle_StepElement_SurfaceElementPurposeMember_1 extends Handle_StepElement_SurfaceElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_SurfaceElementPurposeMember_2 extends Handle_StepElement_SurfaceElementPurposeMember {
    constructor(thePtr: StepElement_SurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_SurfaceElementPurposeMember_3 extends Handle_StepElement_SurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_SurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_SurfaceElementPurposeMember_4 extends Handle_StepElement_SurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_SurfaceElementPurposeMember);
  }

export declare class Handle_StepElement_HSequenceOfSurfaceElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HSequenceOfSurfaceElementPurposeMember): void;
  get(): StepElement_HSequenceOfSurfaceElementPurposeMember;
}

  export declare class Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_1 extends Handle_StepElement_HSequenceOfSurfaceElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_2 extends Handle_StepElement_HSequenceOfSurfaceElementPurposeMember {
    constructor(thePtr: StepElement_HSequenceOfSurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_3 extends Handle_StepElement_HSequenceOfSurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HSequenceOfSurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_4 extends Handle_StepElement_HSequenceOfSurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HSequenceOfSurfaceElementPurposeMember);
  }

export declare class StepElement_Array1OfMeasureOrUnspecifiedValue {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepElement_MeasureOrUnspecifiedValue): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepElement_Array1OfMeasureOrUnspecifiedValue): StepElement_Array1OfMeasureOrUnspecifiedValue;
  Move(theOther: StepElement_Array1OfMeasureOrUnspecifiedValue): StepElement_Array1OfMeasureOrUnspecifiedValue;
  First(): StepElement_MeasureOrUnspecifiedValue;
  ChangeFirst(): StepElement_MeasureOrUnspecifiedValue;
  Last(): StepElement_MeasureOrUnspecifiedValue;
  ChangeLast(): StepElement_MeasureOrUnspecifiedValue;
  Value(theIndex: Standard_Integer): StepElement_MeasureOrUnspecifiedValue;
  ChangeValue(theIndex: Standard_Integer): StepElement_MeasureOrUnspecifiedValue;
  SetValue(theIndex: Standard_Integer, theItem: StepElement_MeasureOrUnspecifiedValue): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepElement_Array1OfMeasureOrUnspecifiedValue_1 extends StepElement_Array1OfMeasureOrUnspecifiedValue {
    constructor();
  }

  export declare class StepElement_Array1OfMeasureOrUnspecifiedValue_2 extends StepElement_Array1OfMeasureOrUnspecifiedValue {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepElement_Array1OfMeasureOrUnspecifiedValue_3 extends StepElement_Array1OfMeasureOrUnspecifiedValue {
    constructor(theOther: StepElement_Array1OfMeasureOrUnspecifiedValue);
  }

  export declare class StepElement_Array1OfMeasureOrUnspecifiedValue_4 extends StepElement_Array1OfMeasureOrUnspecifiedValue {
    constructor(theOther: StepElement_Array1OfMeasureOrUnspecifiedValue);
  }

  export declare class StepElement_Array1OfMeasureOrUnspecifiedValue_5 extends StepElement_Array1OfMeasureOrUnspecifiedValue {
    constructor(theBegin: StepElement_MeasureOrUnspecifiedValue, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepElement_SurfaceSection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_SurfaceSection): void;
  get(): StepElement_SurfaceSection;
}

  export declare class Handle_StepElement_SurfaceSection_1 extends Handle_StepElement_SurfaceSection {
    constructor();
  }

  export declare class Handle_StepElement_SurfaceSection_2 extends Handle_StepElement_SurfaceSection {
    constructor(thePtr: StepElement_SurfaceSection);
  }

  export declare class Handle_StepElement_SurfaceSection_3 extends Handle_StepElement_SurfaceSection {
    constructor(theHandle: Handle_StepElement_SurfaceSection);
  }

  export declare class Handle_StepElement_SurfaceSection_4 extends Handle_StepElement_SurfaceSection {
    constructor(theHandle: Handle_StepElement_SurfaceSection);
  }

export declare class StepElement_Array1OfVolumeElementPurpose {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepElement_VolumeElementPurpose): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepElement_Array1OfVolumeElementPurpose): StepElement_Array1OfVolumeElementPurpose;
  Move(theOther: StepElement_Array1OfVolumeElementPurpose): StepElement_Array1OfVolumeElementPurpose;
  First(): StepElement_VolumeElementPurpose;
  ChangeFirst(): StepElement_VolumeElementPurpose;
  Last(): StepElement_VolumeElementPurpose;
  ChangeLast(): StepElement_VolumeElementPurpose;
  Value(theIndex: Standard_Integer): StepElement_VolumeElementPurpose;
  ChangeValue(theIndex: Standard_Integer): StepElement_VolumeElementPurpose;
  SetValue(theIndex: Standard_Integer, theItem: StepElement_VolumeElementPurpose): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepElement_Array1OfVolumeElementPurpose_1 extends StepElement_Array1OfVolumeElementPurpose {
    constructor();
  }

  export declare class StepElement_Array1OfVolumeElementPurpose_2 extends StepElement_Array1OfVolumeElementPurpose {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepElement_Array1OfVolumeElementPurpose_3 extends StepElement_Array1OfVolumeElementPurpose {
    constructor(theOther: StepElement_Array1OfVolumeElementPurpose);
  }

  export declare class StepElement_Array1OfVolumeElementPurpose_4 extends StepElement_Array1OfVolumeElementPurpose {
    constructor(theOther: StepElement_Array1OfVolumeElementPurpose);
  }

  export declare class StepElement_Array1OfVolumeElementPurpose_5 extends StepElement_Array1OfVolumeElementPurpose {
    constructor(theBegin: StepElement_VolumeElementPurpose, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepElement_VolumeElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_VolumeElementPurposeMember): void;
  get(): StepElement_VolumeElementPurposeMember;
}

  export declare class Handle_StepElement_VolumeElementPurposeMember_1 extends Handle_StepElement_VolumeElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_VolumeElementPurposeMember_2 extends Handle_StepElement_VolumeElementPurposeMember {
    constructor(thePtr: StepElement_VolumeElementPurposeMember);
  }

  export declare class Handle_StepElement_VolumeElementPurposeMember_3 extends Handle_StepElement_VolumeElementPurposeMember {
    constructor(theHandle: Handle_StepElement_VolumeElementPurposeMember);
  }

  export declare class Handle_StepElement_VolumeElementPurposeMember_4 extends Handle_StepElement_VolumeElementPurposeMember {
    constructor(theHandle: Handle_StepElement_VolumeElementPurposeMember);
  }

export declare class StepElement_Array2OfSurfaceElementPurpose {
  Init(theValue: StepElement_SurfaceElementPurpose): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: StepElement_Array2OfSurfaceElementPurpose): StepElement_Array2OfSurfaceElementPurpose;
  Move(theOther: StepElement_Array2OfSurfaceElementPurpose): StepElement_Array2OfSurfaceElementPurpose;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): StepElement_SurfaceElementPurpose;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): StepElement_SurfaceElementPurpose;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: StepElement_SurfaceElementPurpose): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepElement_Array2OfSurfaceElementPurpose_1 extends StepElement_Array2OfSurfaceElementPurpose {
    constructor();
  }

  export declare class StepElement_Array2OfSurfaceElementPurpose_2 extends StepElement_Array2OfSurfaceElementPurpose {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class StepElement_Array2OfSurfaceElementPurpose_3 extends StepElement_Array2OfSurfaceElementPurpose {
    constructor(theOther: StepElement_Array2OfSurfaceElementPurpose);
  }

  export declare class StepElement_Array2OfSurfaceElementPurpose_4 extends StepElement_Array2OfSurfaceElementPurpose {
    constructor(theOther: StepElement_Array2OfSurfaceElementPurpose);
  }

  export declare class StepElement_Array2OfSurfaceElementPurpose_5 extends StepElement_Array2OfSurfaceElementPurpose {
    constructor(theBegin: StepElement_SurfaceElementPurpose, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfHSequenceOfCurveElementPurposeMember): void;
  get(): StepElement_HArray1OfHSequenceOfCurveElementPurposeMember;
}

  export declare class Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_1 extends Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_2 extends Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember {
    constructor(thePtr: StepElement_HArray1OfHSequenceOfCurveElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_3 extends Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_4 extends Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember);
  }

export declare class Handle_StepElement_ElementDescriptor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_ElementDescriptor): void;
  get(): StepElement_ElementDescriptor;
}

  export declare class Handle_StepElement_ElementDescriptor_1 extends Handle_StepElement_ElementDescriptor {
    constructor();
  }

  export declare class Handle_StepElement_ElementDescriptor_2 extends Handle_StepElement_ElementDescriptor {
    constructor(thePtr: StepElement_ElementDescriptor);
  }

  export declare class Handle_StepElement_ElementDescriptor_3 extends Handle_StepElement_ElementDescriptor {
    constructor(theHandle: Handle_StepElement_ElementDescriptor);
  }

  export declare class Handle_StepElement_ElementDescriptor_4 extends Handle_StepElement_ElementDescriptor {
    constructor(theHandle: Handle_StepElement_ElementDescriptor);
  }

export declare class Handle_StepElement_Curve3dElementDescriptor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_Curve3dElementDescriptor): void;
  get(): StepElement_Curve3dElementDescriptor;
}

  export declare class Handle_StepElement_Curve3dElementDescriptor_1 extends Handle_StepElement_Curve3dElementDescriptor {
    constructor();
  }

  export declare class Handle_StepElement_Curve3dElementDescriptor_2 extends Handle_StepElement_Curve3dElementDescriptor {
    constructor(thePtr: StepElement_Curve3dElementDescriptor);
  }

  export declare class Handle_StepElement_Curve3dElementDescriptor_3 extends Handle_StepElement_Curve3dElementDescriptor {
    constructor(theHandle: Handle_StepElement_Curve3dElementDescriptor);
  }

  export declare class Handle_StepElement_Curve3dElementDescriptor_4 extends Handle_StepElement_Curve3dElementDescriptor {
    constructor(theHandle: Handle_StepElement_Curve3dElementDescriptor);
  }

export declare class Handle_StepElement_CurveElementFreedomMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_CurveElementFreedomMember): void;
  get(): StepElement_CurveElementFreedomMember;
}

  export declare class Handle_StepElement_CurveElementFreedomMember_1 extends Handle_StepElement_CurveElementFreedomMember {
    constructor();
  }

  export declare class Handle_StepElement_CurveElementFreedomMember_2 extends Handle_StepElement_CurveElementFreedomMember {
    constructor(thePtr: StepElement_CurveElementFreedomMember);
  }

  export declare class Handle_StepElement_CurveElementFreedomMember_3 extends Handle_StepElement_CurveElementFreedomMember {
    constructor(theHandle: Handle_StepElement_CurveElementFreedomMember);
  }

  export declare class Handle_StepElement_CurveElementFreedomMember_4 extends Handle_StepElement_CurveElementFreedomMember {
    constructor(theHandle: Handle_StepElement_CurveElementFreedomMember);
  }

export declare class Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfMeasureOrUnspecifiedValue): void;
  get(): StepElement_HArray1OfMeasureOrUnspecifiedValue;
}

  export declare class Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_1 extends Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_2 extends Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue {
    constructor(thePtr: StepElement_HArray1OfMeasureOrUnspecifiedValue);
  }

  export declare class Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_3 extends Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue {
    constructor(theHandle: Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue);
  }

  export declare class Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_4 extends Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue {
    constructor(theHandle: Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue);
  }

export declare class Handle_StepElement_CurveElementSectionDerivedDefinitions {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_CurveElementSectionDerivedDefinitions): void;
  get(): StepElement_CurveElementSectionDerivedDefinitions;
}

  export declare class Handle_StepElement_CurveElementSectionDerivedDefinitions_1 extends Handle_StepElement_CurveElementSectionDerivedDefinitions {
    constructor();
  }

  export declare class Handle_StepElement_CurveElementSectionDerivedDefinitions_2 extends Handle_StepElement_CurveElementSectionDerivedDefinitions {
    constructor(thePtr: StepElement_CurveElementSectionDerivedDefinitions);
  }

  export declare class Handle_StepElement_CurveElementSectionDerivedDefinitions_3 extends Handle_StepElement_CurveElementSectionDerivedDefinitions {
    constructor(theHandle: Handle_StepElement_CurveElementSectionDerivedDefinitions);
  }

  export declare class Handle_StepElement_CurveElementSectionDerivedDefinitions_4 extends Handle_StepElement_CurveElementSectionDerivedDefinitions {
    constructor(theHandle: Handle_StepElement_CurveElementSectionDerivedDefinitions);
  }

export declare class Handle_StepElement_ElementAspectMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_ElementAspectMember): void;
  get(): StepElement_ElementAspectMember;
}

  export declare class Handle_StepElement_ElementAspectMember_1 extends Handle_StepElement_ElementAspectMember {
    constructor();
  }

  export declare class Handle_StepElement_ElementAspectMember_2 extends Handle_StepElement_ElementAspectMember {
    constructor(thePtr: StepElement_ElementAspectMember);
  }

  export declare class Handle_StepElement_ElementAspectMember_3 extends Handle_StepElement_ElementAspectMember {
    constructor(theHandle: Handle_StepElement_ElementAspectMember);
  }

  export declare class Handle_StepElement_ElementAspectMember_4 extends Handle_StepElement_ElementAspectMember {
    constructor(theHandle: Handle_StepElement_ElementAspectMember);
  }

export declare class Handle_StepElement_HArray1OfCurveElementEndReleasePacket {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfCurveElementEndReleasePacket): void;
  get(): StepElement_HArray1OfCurveElementEndReleasePacket;
}

  export declare class Handle_StepElement_HArray1OfCurveElementEndReleasePacket_1 extends Handle_StepElement_HArray1OfCurveElementEndReleasePacket {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfCurveElementEndReleasePacket_2 extends Handle_StepElement_HArray1OfCurveElementEndReleasePacket {
    constructor(thePtr: StepElement_HArray1OfCurveElementEndReleasePacket);
  }

  export declare class Handle_StepElement_HArray1OfCurveElementEndReleasePacket_3 extends Handle_StepElement_HArray1OfCurveElementEndReleasePacket {
    constructor(theHandle: Handle_StepElement_HArray1OfCurveElementEndReleasePacket);
  }

  export declare class Handle_StepElement_HArray1OfCurveElementEndReleasePacket_4 extends Handle_StepElement_HArray1OfCurveElementEndReleasePacket {
    constructor(theHandle: Handle_StepElement_HArray1OfCurveElementEndReleasePacket);
  }

export declare class Handle_StepElement_HArray1OfCurveElementSectionDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfCurveElementSectionDefinition): void;
  get(): StepElement_HArray1OfCurveElementSectionDefinition;
}

  export declare class Handle_StepElement_HArray1OfCurveElementSectionDefinition_1 extends Handle_StepElement_HArray1OfCurveElementSectionDefinition {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfCurveElementSectionDefinition_2 extends Handle_StepElement_HArray1OfCurveElementSectionDefinition {
    constructor(thePtr: StepElement_HArray1OfCurveElementSectionDefinition);
  }

  export declare class Handle_StepElement_HArray1OfCurveElementSectionDefinition_3 extends Handle_StepElement_HArray1OfCurveElementSectionDefinition {
    constructor(theHandle: Handle_StepElement_HArray1OfCurveElementSectionDefinition);
  }

  export declare class Handle_StepElement_HArray1OfCurveElementSectionDefinition_4 extends Handle_StepElement_HArray1OfCurveElementSectionDefinition {
    constructor(theHandle: Handle_StepElement_HArray1OfCurveElementSectionDefinition);
  }

export declare class Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember): void;
  get(): StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember;
}

  export declare class Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_1 extends Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_2 extends Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember {
    constructor(thePtr: StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_3 extends Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_4 extends Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember);
  }

export declare class Handle_StepElement_HArray1OfSurfaceSection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfSurfaceSection): void;
  get(): StepElement_HArray1OfSurfaceSection;
}

  export declare class Handle_StepElement_HArray1OfSurfaceSection_1 extends Handle_StepElement_HArray1OfSurfaceSection {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfSurfaceSection_2 extends Handle_StepElement_HArray1OfSurfaceSection {
    constructor(thePtr: StepElement_HArray1OfSurfaceSection);
  }

  export declare class Handle_StepElement_HArray1OfSurfaceSection_3 extends Handle_StepElement_HArray1OfSurfaceSection {
    constructor(theHandle: Handle_StepElement_HArray1OfSurfaceSection);
  }

  export declare class Handle_StepElement_HArray1OfSurfaceSection_4 extends Handle_StepElement_HArray1OfSurfaceSection {
    constructor(theHandle: Handle_StepElement_HArray1OfSurfaceSection);
  }

export declare class Handle_StepElement_HArray1OfVolumeElementPurpose {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfVolumeElementPurpose): void;
  get(): StepElement_HArray1OfVolumeElementPurpose;
}

  export declare class Handle_StepElement_HArray1OfVolumeElementPurpose_1 extends Handle_StepElement_HArray1OfVolumeElementPurpose {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfVolumeElementPurpose_2 extends Handle_StepElement_HArray1OfVolumeElementPurpose {
    constructor(thePtr: StepElement_HArray1OfVolumeElementPurpose);
  }

  export declare class Handle_StepElement_HArray1OfVolumeElementPurpose_3 extends Handle_StepElement_HArray1OfVolumeElementPurpose {
    constructor(theHandle: Handle_StepElement_HArray1OfVolumeElementPurpose);
  }

  export declare class Handle_StepElement_HArray1OfVolumeElementPurpose_4 extends Handle_StepElement_HArray1OfVolumeElementPurpose {
    constructor(theHandle: Handle_StepElement_HArray1OfVolumeElementPurpose);
  }

export declare class Handle_StepElement_HArray1OfVolumeElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray1OfVolumeElementPurposeMember): void;
  get(): StepElement_HArray1OfVolumeElementPurposeMember;
}

  export declare class Handle_StepElement_HArray1OfVolumeElementPurposeMember_1 extends Handle_StepElement_HArray1OfVolumeElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_HArray1OfVolumeElementPurposeMember_2 extends Handle_StepElement_HArray1OfVolumeElementPurposeMember {
    constructor(thePtr: StepElement_HArray1OfVolumeElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray1OfVolumeElementPurposeMember_3 extends Handle_StepElement_HArray1OfVolumeElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray1OfVolumeElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray1OfVolumeElementPurposeMember_4 extends Handle_StepElement_HArray1OfVolumeElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray1OfVolumeElementPurposeMember);
  }

export declare class Handle_StepElement_HArray2OfCurveElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray2OfCurveElementPurposeMember): void;
  get(): StepElement_HArray2OfCurveElementPurposeMember;
}

  export declare class Handle_StepElement_HArray2OfCurveElementPurposeMember_1 extends Handle_StepElement_HArray2OfCurveElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_HArray2OfCurveElementPurposeMember_2 extends Handle_StepElement_HArray2OfCurveElementPurposeMember {
    constructor(thePtr: StepElement_HArray2OfCurveElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray2OfCurveElementPurposeMember_3 extends Handle_StepElement_HArray2OfCurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray2OfCurveElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray2OfCurveElementPurposeMember_4 extends Handle_StepElement_HArray2OfCurveElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray2OfCurveElementPurposeMember);
  }

export declare class Handle_StepElement_HArray2OfSurfaceElementPurpose {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray2OfSurfaceElementPurpose): void;
  get(): StepElement_HArray2OfSurfaceElementPurpose;
}

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurpose_1 extends Handle_StepElement_HArray2OfSurfaceElementPurpose {
    constructor();
  }

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurpose_2 extends Handle_StepElement_HArray2OfSurfaceElementPurpose {
    constructor(thePtr: StepElement_HArray2OfSurfaceElementPurpose);
  }

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurpose_3 extends Handle_StepElement_HArray2OfSurfaceElementPurpose {
    constructor(theHandle: Handle_StepElement_HArray2OfSurfaceElementPurpose);
  }

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurpose_4 extends Handle_StepElement_HArray2OfSurfaceElementPurpose {
    constructor(theHandle: Handle_StepElement_HArray2OfSurfaceElementPurpose);
  }

export declare class Handle_StepElement_HArray2OfSurfaceElementPurposeMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_HArray2OfSurfaceElementPurposeMember): void;
  get(): StepElement_HArray2OfSurfaceElementPurposeMember;
}

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurposeMember_1 extends Handle_StepElement_HArray2OfSurfaceElementPurposeMember {
    constructor();
  }

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurposeMember_2 extends Handle_StepElement_HArray2OfSurfaceElementPurposeMember {
    constructor(thePtr: StepElement_HArray2OfSurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurposeMember_3 extends Handle_StepElement_HArray2OfSurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray2OfSurfaceElementPurposeMember);
  }

  export declare class Handle_StepElement_HArray2OfSurfaceElementPurposeMember_4 extends Handle_StepElement_HArray2OfSurfaceElementPurposeMember {
    constructor(theHandle: Handle_StepElement_HArray2OfSurfaceElementPurposeMember);
  }

export declare class Handle_StepElement_MeasureOrUnspecifiedValueMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_MeasureOrUnspecifiedValueMember): void;
  get(): StepElement_MeasureOrUnspecifiedValueMember;
}

  export declare class Handle_StepElement_MeasureOrUnspecifiedValueMember_1 extends Handle_StepElement_MeasureOrUnspecifiedValueMember {
    constructor();
  }

  export declare class Handle_StepElement_MeasureOrUnspecifiedValueMember_2 extends Handle_StepElement_MeasureOrUnspecifiedValueMember {
    constructor(thePtr: StepElement_MeasureOrUnspecifiedValueMember);
  }

  export declare class Handle_StepElement_MeasureOrUnspecifiedValueMember_3 extends Handle_StepElement_MeasureOrUnspecifiedValueMember {
    constructor(theHandle: Handle_StepElement_MeasureOrUnspecifiedValueMember);
  }

  export declare class Handle_StepElement_MeasureOrUnspecifiedValueMember_4 extends Handle_StepElement_MeasureOrUnspecifiedValueMember {
    constructor(theHandle: Handle_StepElement_MeasureOrUnspecifiedValueMember);
  }

export declare class Handle_StepElement_Surface3dElementDescriptor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_Surface3dElementDescriptor): void;
  get(): StepElement_Surface3dElementDescriptor;
}

  export declare class Handle_StepElement_Surface3dElementDescriptor_1 extends Handle_StepElement_Surface3dElementDescriptor {
    constructor();
  }

  export declare class Handle_StepElement_Surface3dElementDescriptor_2 extends Handle_StepElement_Surface3dElementDescriptor {
    constructor(thePtr: StepElement_Surface3dElementDescriptor);
  }

  export declare class Handle_StepElement_Surface3dElementDescriptor_3 extends Handle_StepElement_Surface3dElementDescriptor {
    constructor(theHandle: Handle_StepElement_Surface3dElementDescriptor);
  }

  export declare class Handle_StepElement_Surface3dElementDescriptor_4 extends Handle_StepElement_Surface3dElementDescriptor {
    constructor(theHandle: Handle_StepElement_Surface3dElementDescriptor);
  }

export declare class Handle_StepElement_SurfaceElementProperty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_SurfaceElementProperty): void;
  get(): StepElement_SurfaceElementProperty;
}

  export declare class Handle_StepElement_SurfaceElementProperty_1 extends Handle_StepElement_SurfaceElementProperty {
    constructor();
  }

  export declare class Handle_StepElement_SurfaceElementProperty_2 extends Handle_StepElement_SurfaceElementProperty {
    constructor(thePtr: StepElement_SurfaceElementProperty);
  }

  export declare class Handle_StepElement_SurfaceElementProperty_3 extends Handle_StepElement_SurfaceElementProperty {
    constructor(theHandle: Handle_StepElement_SurfaceElementProperty);
  }

  export declare class Handle_StepElement_SurfaceElementProperty_4 extends Handle_StepElement_SurfaceElementProperty {
    constructor(theHandle: Handle_StepElement_SurfaceElementProperty);
  }

export declare class Handle_StepElement_SurfaceSectionField {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_SurfaceSectionField): void;
  get(): StepElement_SurfaceSectionField;
}

  export declare class Handle_StepElement_SurfaceSectionField_1 extends Handle_StepElement_SurfaceSectionField {
    constructor();
  }

  export declare class Handle_StepElement_SurfaceSectionField_2 extends Handle_StepElement_SurfaceSectionField {
    constructor(thePtr: StepElement_SurfaceSectionField);
  }

  export declare class Handle_StepElement_SurfaceSectionField_3 extends Handle_StepElement_SurfaceSectionField {
    constructor(theHandle: Handle_StepElement_SurfaceSectionField);
  }

  export declare class Handle_StepElement_SurfaceSectionField_4 extends Handle_StepElement_SurfaceSectionField {
    constructor(theHandle: Handle_StepElement_SurfaceSectionField);
  }

export declare class Handle_StepElement_SurfaceSectionFieldConstant {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_SurfaceSectionFieldConstant): void;
  get(): StepElement_SurfaceSectionFieldConstant;
}

  export declare class Handle_StepElement_SurfaceSectionFieldConstant_1 extends Handle_StepElement_SurfaceSectionFieldConstant {
    constructor();
  }

  export declare class Handle_StepElement_SurfaceSectionFieldConstant_2 extends Handle_StepElement_SurfaceSectionFieldConstant {
    constructor(thePtr: StepElement_SurfaceSectionFieldConstant);
  }

  export declare class Handle_StepElement_SurfaceSectionFieldConstant_3 extends Handle_StepElement_SurfaceSectionFieldConstant {
    constructor(theHandle: Handle_StepElement_SurfaceSectionFieldConstant);
  }

  export declare class Handle_StepElement_SurfaceSectionFieldConstant_4 extends Handle_StepElement_SurfaceSectionFieldConstant {
    constructor(theHandle: Handle_StepElement_SurfaceSectionFieldConstant);
  }

export declare class Handle_StepElement_SurfaceSectionFieldVarying {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_SurfaceSectionFieldVarying): void;
  get(): StepElement_SurfaceSectionFieldVarying;
}

  export declare class Handle_StepElement_SurfaceSectionFieldVarying_1 extends Handle_StepElement_SurfaceSectionFieldVarying {
    constructor();
  }

  export declare class Handle_StepElement_SurfaceSectionFieldVarying_2 extends Handle_StepElement_SurfaceSectionFieldVarying {
    constructor(thePtr: StepElement_SurfaceSectionFieldVarying);
  }

  export declare class Handle_StepElement_SurfaceSectionFieldVarying_3 extends Handle_StepElement_SurfaceSectionFieldVarying {
    constructor(theHandle: Handle_StepElement_SurfaceSectionFieldVarying);
  }

  export declare class Handle_StepElement_SurfaceSectionFieldVarying_4 extends Handle_StepElement_SurfaceSectionFieldVarying {
    constructor(theHandle: Handle_StepElement_SurfaceSectionFieldVarying);
  }

export declare class Handle_StepElement_UniformSurfaceSection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_UniformSurfaceSection): void;
  get(): StepElement_UniformSurfaceSection;
}

  export declare class Handle_StepElement_UniformSurfaceSection_1 extends Handle_StepElement_UniformSurfaceSection {
    constructor();
  }

  export declare class Handle_StepElement_UniformSurfaceSection_2 extends Handle_StepElement_UniformSurfaceSection {
    constructor(thePtr: StepElement_UniformSurfaceSection);
  }

  export declare class Handle_StepElement_UniformSurfaceSection_3 extends Handle_StepElement_UniformSurfaceSection {
    constructor(theHandle: Handle_StepElement_UniformSurfaceSection);
  }

  export declare class Handle_StepElement_UniformSurfaceSection_4 extends Handle_StepElement_UniformSurfaceSection {
    constructor(theHandle: Handle_StepElement_UniformSurfaceSection);
  }

export declare class Handle_StepElement_Volume3dElementDescriptor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepElement_Volume3dElementDescriptor): void;
  get(): StepElement_Volume3dElementDescriptor;
}

  export declare class Handle_StepElement_Volume3dElementDescriptor_1 extends Handle_StepElement_Volume3dElementDescriptor {
    constructor();
  }

  export declare class Handle_StepElement_Volume3dElementDescriptor_2 extends Handle_StepElement_Volume3dElementDescriptor {
    constructor(thePtr: StepElement_Volume3dElementDescriptor);
  }

  export declare class Handle_StepElement_Volume3dElementDescriptor_3 extends Handle_StepElement_Volume3dElementDescriptor {
    constructor(theHandle: Handle_StepElement_Volume3dElementDescriptor);
  }

  export declare class Handle_StepElement_Volume3dElementDescriptor_4 extends Handle_StepElement_Volume3dElementDescriptor {
    constructor(theHandle: Handle_StepElement_Volume3dElementDescriptor);
  }

export declare class Handle_StepFEA_FeaRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaRepresentationItem): void;
  get(): StepFEA_FeaRepresentationItem;
}

  export declare class Handle_StepFEA_FeaRepresentationItem_1 extends Handle_StepFEA_FeaRepresentationItem {
    constructor();
  }

  export declare class Handle_StepFEA_FeaRepresentationItem_2 extends Handle_StepFEA_FeaRepresentationItem {
    constructor(thePtr: StepFEA_FeaRepresentationItem);
  }

  export declare class Handle_StepFEA_FeaRepresentationItem_3 extends Handle_StepFEA_FeaRepresentationItem {
    constructor(theHandle: Handle_StepFEA_FeaRepresentationItem);
  }

  export declare class Handle_StepFEA_FeaRepresentationItem_4 extends Handle_StepFEA_FeaRepresentationItem {
    constructor(theHandle: Handle_StepFEA_FeaRepresentationItem);
  }

export declare class Handle_StepFEA_AlignedCurve3dElementCoordinateSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_AlignedCurve3dElementCoordinateSystem): void;
  get(): StepFEA_AlignedCurve3dElementCoordinateSystem;
}

  export declare class Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_1 extends Handle_StepFEA_AlignedCurve3dElementCoordinateSystem {
    constructor();
  }

  export declare class Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_2 extends Handle_StepFEA_AlignedCurve3dElementCoordinateSystem {
    constructor(thePtr: StepFEA_AlignedCurve3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_3 extends Handle_StepFEA_AlignedCurve3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_AlignedCurve3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_4 extends Handle_StepFEA_AlignedCurve3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_AlignedCurve3dElementCoordinateSystem);
  }

export declare class Handle_StepFEA_AlignedSurface3dElementCoordinateSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_AlignedSurface3dElementCoordinateSystem): void;
  get(): StepFEA_AlignedSurface3dElementCoordinateSystem;
}

  export declare class Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_1 extends Handle_StepFEA_AlignedSurface3dElementCoordinateSystem {
    constructor();
  }

  export declare class Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_2 extends Handle_StepFEA_AlignedSurface3dElementCoordinateSystem {
    constructor(thePtr: StepFEA_AlignedSurface3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_3 extends Handle_StepFEA_AlignedSurface3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_AlignedSurface3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_4 extends Handle_StepFEA_AlignedSurface3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_AlignedSurface3dElementCoordinateSystem);
  }

export declare class Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ArbitraryVolume3dElementCoordinateSystem): void;
  get(): StepFEA_ArbitraryVolume3dElementCoordinateSystem;
}

  export declare class Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_1 extends Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem {
    constructor();
  }

  export declare class Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_2 extends Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem {
    constructor(thePtr: StepFEA_ArbitraryVolume3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_3 extends Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_4 extends Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem);
  }

export declare class Handle_StepFEA_CurveElementEndOffset {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_CurveElementEndOffset): void;
  get(): StepFEA_CurveElementEndOffset;
}

  export declare class Handle_StepFEA_CurveElementEndOffset_1 extends Handle_StepFEA_CurveElementEndOffset {
    constructor();
  }

  export declare class Handle_StepFEA_CurveElementEndOffset_2 extends Handle_StepFEA_CurveElementEndOffset {
    constructor(thePtr: StepFEA_CurveElementEndOffset);
  }

  export declare class Handle_StepFEA_CurveElementEndOffset_3 extends Handle_StepFEA_CurveElementEndOffset {
    constructor(theHandle: Handle_StepFEA_CurveElementEndOffset);
  }

  export declare class Handle_StepFEA_CurveElementEndOffset_4 extends Handle_StepFEA_CurveElementEndOffset {
    constructor(theHandle: Handle_StepFEA_CurveElementEndOffset);
  }

export declare class Handle_StepFEA_CurveElementEndRelease {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_CurveElementEndRelease): void;
  get(): StepFEA_CurveElementEndRelease;
}

  export declare class Handle_StepFEA_CurveElementEndRelease_1 extends Handle_StepFEA_CurveElementEndRelease {
    constructor();
  }

  export declare class Handle_StepFEA_CurveElementEndRelease_2 extends Handle_StepFEA_CurveElementEndRelease {
    constructor(thePtr: StepFEA_CurveElementEndRelease);
  }

  export declare class Handle_StepFEA_CurveElementEndRelease_3 extends Handle_StepFEA_CurveElementEndRelease {
    constructor(theHandle: Handle_StepFEA_CurveElementEndRelease);
  }

  export declare class Handle_StepFEA_CurveElementEndRelease_4 extends Handle_StepFEA_CurveElementEndRelease {
    constructor(theHandle: Handle_StepFEA_CurveElementEndRelease);
  }

export declare class Handle_StepFEA_CurveElementInterval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_CurveElementInterval): void;
  get(): StepFEA_CurveElementInterval;
}

  export declare class Handle_StepFEA_CurveElementInterval_1 extends Handle_StepFEA_CurveElementInterval {
    constructor();
  }

  export declare class Handle_StepFEA_CurveElementInterval_2 extends Handle_StepFEA_CurveElementInterval {
    constructor(thePtr: StepFEA_CurveElementInterval);
  }

  export declare class Handle_StepFEA_CurveElementInterval_3 extends Handle_StepFEA_CurveElementInterval {
    constructor(theHandle: Handle_StepFEA_CurveElementInterval);
  }

  export declare class Handle_StepFEA_CurveElementInterval_4 extends Handle_StepFEA_CurveElementInterval {
    constructor(theHandle: Handle_StepFEA_CurveElementInterval);
  }

export declare class StepFEA_Array1OfDegreeOfFreedom {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepFEA_DegreeOfFreedom): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepFEA_Array1OfDegreeOfFreedom): StepFEA_Array1OfDegreeOfFreedom;
  Move(theOther: StepFEA_Array1OfDegreeOfFreedom): StepFEA_Array1OfDegreeOfFreedom;
  First(): StepFEA_DegreeOfFreedom;
  ChangeFirst(): StepFEA_DegreeOfFreedom;
  Last(): StepFEA_DegreeOfFreedom;
  ChangeLast(): StepFEA_DegreeOfFreedom;
  Value(theIndex: Standard_Integer): StepFEA_DegreeOfFreedom;
  ChangeValue(theIndex: Standard_Integer): StepFEA_DegreeOfFreedom;
  SetValue(theIndex: Standard_Integer, theItem: StepFEA_DegreeOfFreedom): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepFEA_Array1OfDegreeOfFreedom_1 extends StepFEA_Array1OfDegreeOfFreedom {
    constructor();
  }

  export declare class StepFEA_Array1OfDegreeOfFreedom_2 extends StepFEA_Array1OfDegreeOfFreedom {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepFEA_Array1OfDegreeOfFreedom_3 extends StepFEA_Array1OfDegreeOfFreedom {
    constructor(theOther: StepFEA_Array1OfDegreeOfFreedom);
  }

  export declare class StepFEA_Array1OfDegreeOfFreedom_4 extends StepFEA_Array1OfDegreeOfFreedom {
    constructor(theOther: StepFEA_Array1OfDegreeOfFreedom);
  }

  export declare class StepFEA_Array1OfDegreeOfFreedom_5 extends StepFEA_Array1OfDegreeOfFreedom {
    constructor(theBegin: StepFEA_DegreeOfFreedom, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepFEA_ConstantSurface3dElementCoordinateSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ConstantSurface3dElementCoordinateSystem): void;
  get(): StepFEA_ConstantSurface3dElementCoordinateSystem;
}

  export declare class Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_1 extends Handle_StepFEA_ConstantSurface3dElementCoordinateSystem {
    constructor();
  }

  export declare class Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_2 extends Handle_StepFEA_ConstantSurface3dElementCoordinateSystem {
    constructor(thePtr: StepFEA_ConstantSurface3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_3 extends Handle_StepFEA_ConstantSurface3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ConstantSurface3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_4 extends Handle_StepFEA_ConstantSurface3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ConstantSurface3dElementCoordinateSystem);
  }

export declare class Handle_StepFEA_HArray1OfCurveElementInterval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HArray1OfCurveElementInterval): void;
  get(): StepFEA_HArray1OfCurveElementInterval;
}

  export declare class Handle_StepFEA_HArray1OfCurveElementInterval_1 extends Handle_StepFEA_HArray1OfCurveElementInterval {
    constructor();
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementInterval_2 extends Handle_StepFEA_HArray1OfCurveElementInterval {
    constructor(thePtr: StepFEA_HArray1OfCurveElementInterval);
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementInterval_3 extends Handle_StepFEA_HArray1OfCurveElementInterval {
    constructor(theHandle: Handle_StepFEA_HArray1OfCurveElementInterval);
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementInterval_4 extends Handle_StepFEA_HArray1OfCurveElementInterval {
    constructor(theHandle: Handle_StepFEA_HArray1OfCurveElementInterval);
  }

export declare class Handle_StepFEA_HArray1OfCurveElementEndOffset {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HArray1OfCurveElementEndOffset): void;
  get(): StepFEA_HArray1OfCurveElementEndOffset;
}

  export declare class Handle_StepFEA_HArray1OfCurveElementEndOffset_1 extends Handle_StepFEA_HArray1OfCurveElementEndOffset {
    constructor();
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementEndOffset_2 extends Handle_StepFEA_HArray1OfCurveElementEndOffset {
    constructor(thePtr: StepFEA_HArray1OfCurveElementEndOffset);
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementEndOffset_3 extends Handle_StepFEA_HArray1OfCurveElementEndOffset {
    constructor(theHandle: Handle_StepFEA_HArray1OfCurveElementEndOffset);
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementEndOffset_4 extends Handle_StepFEA_HArray1OfCurveElementEndOffset {
    constructor(theHandle: Handle_StepFEA_HArray1OfCurveElementEndOffset);
  }

export declare class Handle_StepFEA_HArray1OfCurveElementEndRelease {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HArray1OfCurveElementEndRelease): void;
  get(): StepFEA_HArray1OfCurveElementEndRelease;
}

  export declare class Handle_StepFEA_HArray1OfCurveElementEndRelease_1 extends Handle_StepFEA_HArray1OfCurveElementEndRelease {
    constructor();
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementEndRelease_2 extends Handle_StepFEA_HArray1OfCurveElementEndRelease {
    constructor(thePtr: StepFEA_HArray1OfCurveElementEndRelease);
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementEndRelease_3 extends Handle_StepFEA_HArray1OfCurveElementEndRelease {
    constructor(theHandle: Handle_StepFEA_HArray1OfCurveElementEndRelease);
  }

  export declare class Handle_StepFEA_HArray1OfCurveElementEndRelease_4 extends Handle_StepFEA_HArray1OfCurveElementEndRelease {
    constructor(theHandle: Handle_StepFEA_HArray1OfCurveElementEndRelease);
  }

export declare class Handle_StepFEA_Curve3dElementProperty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_Curve3dElementProperty): void;
  get(): StepFEA_Curve3dElementProperty;
}

  export declare class Handle_StepFEA_Curve3dElementProperty_1 extends Handle_StepFEA_Curve3dElementProperty {
    constructor();
  }

  export declare class Handle_StepFEA_Curve3dElementProperty_2 extends Handle_StepFEA_Curve3dElementProperty {
    constructor(thePtr: StepFEA_Curve3dElementProperty);
  }

  export declare class Handle_StepFEA_Curve3dElementProperty_3 extends Handle_StepFEA_Curve3dElementProperty {
    constructor(theHandle: Handle_StepFEA_Curve3dElementProperty);
  }

  export declare class Handle_StepFEA_Curve3dElementProperty_4 extends Handle_StepFEA_Curve3dElementProperty {
    constructor(theHandle: Handle_StepFEA_Curve3dElementProperty);
  }

export declare class Handle_StepFEA_Curve3dElementRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_Curve3dElementRepresentation): void;
  get(): StepFEA_Curve3dElementRepresentation;
}

  export declare class Handle_StepFEA_Curve3dElementRepresentation_1 extends Handle_StepFEA_Curve3dElementRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_Curve3dElementRepresentation_2 extends Handle_StepFEA_Curve3dElementRepresentation {
    constructor(thePtr: StepFEA_Curve3dElementRepresentation);
  }

  export declare class Handle_StepFEA_Curve3dElementRepresentation_3 extends Handle_StepFEA_Curve3dElementRepresentation {
    constructor(theHandle: Handle_StepFEA_Curve3dElementRepresentation);
  }

  export declare class Handle_StepFEA_Curve3dElementRepresentation_4 extends Handle_StepFEA_Curve3dElementRepresentation {
    constructor(theHandle: Handle_StepFEA_Curve3dElementRepresentation);
  }

export declare class Handle_StepFEA_CurveElementIntervalConstant {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_CurveElementIntervalConstant): void;
  get(): StepFEA_CurveElementIntervalConstant;
}

  export declare class Handle_StepFEA_CurveElementIntervalConstant_1 extends Handle_StepFEA_CurveElementIntervalConstant {
    constructor();
  }

  export declare class Handle_StepFEA_CurveElementIntervalConstant_2 extends Handle_StepFEA_CurveElementIntervalConstant {
    constructor(thePtr: StepFEA_CurveElementIntervalConstant);
  }

  export declare class Handle_StepFEA_CurveElementIntervalConstant_3 extends Handle_StepFEA_CurveElementIntervalConstant {
    constructor(theHandle: Handle_StepFEA_CurveElementIntervalConstant);
  }

  export declare class Handle_StepFEA_CurveElementIntervalConstant_4 extends Handle_StepFEA_CurveElementIntervalConstant {
    constructor(theHandle: Handle_StepFEA_CurveElementIntervalConstant);
  }

export declare class Handle_StepFEA_CurveElementIntervalLinearlyVarying {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_CurveElementIntervalLinearlyVarying): void;
  get(): StepFEA_CurveElementIntervalLinearlyVarying;
}

  export declare class Handle_StepFEA_CurveElementIntervalLinearlyVarying_1 extends Handle_StepFEA_CurveElementIntervalLinearlyVarying {
    constructor();
  }

  export declare class Handle_StepFEA_CurveElementIntervalLinearlyVarying_2 extends Handle_StepFEA_CurveElementIntervalLinearlyVarying {
    constructor(thePtr: StepFEA_CurveElementIntervalLinearlyVarying);
  }

  export declare class Handle_StepFEA_CurveElementIntervalLinearlyVarying_3 extends Handle_StepFEA_CurveElementIntervalLinearlyVarying {
    constructor(theHandle: Handle_StepFEA_CurveElementIntervalLinearlyVarying);
  }

  export declare class Handle_StepFEA_CurveElementIntervalLinearlyVarying_4 extends Handle_StepFEA_CurveElementIntervalLinearlyVarying {
    constructor(theHandle: Handle_StepFEA_CurveElementIntervalLinearlyVarying);
  }

export declare class Handle_StepFEA_CurveElementLocation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_CurveElementLocation): void;
  get(): StepFEA_CurveElementLocation;
}

  export declare class Handle_StepFEA_CurveElementLocation_1 extends Handle_StepFEA_CurveElementLocation {
    constructor();
  }

  export declare class Handle_StepFEA_CurveElementLocation_2 extends Handle_StepFEA_CurveElementLocation {
    constructor(thePtr: StepFEA_CurveElementLocation);
  }

  export declare class Handle_StepFEA_CurveElementLocation_3 extends Handle_StepFEA_CurveElementLocation {
    constructor(theHandle: Handle_StepFEA_CurveElementLocation);
  }

  export declare class Handle_StepFEA_CurveElementLocation_4 extends Handle_StepFEA_CurveElementLocation {
    constructor(theHandle: Handle_StepFEA_CurveElementLocation);
  }

export declare class Handle_StepFEA_DegreeOfFreedomMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_DegreeOfFreedomMember): void;
  get(): StepFEA_DegreeOfFreedomMember;
}

  export declare class Handle_StepFEA_DegreeOfFreedomMember_1 extends Handle_StepFEA_DegreeOfFreedomMember {
    constructor();
  }

  export declare class Handle_StepFEA_DegreeOfFreedomMember_2 extends Handle_StepFEA_DegreeOfFreedomMember {
    constructor(thePtr: StepFEA_DegreeOfFreedomMember);
  }

  export declare class Handle_StepFEA_DegreeOfFreedomMember_3 extends Handle_StepFEA_DegreeOfFreedomMember {
    constructor(theHandle: Handle_StepFEA_DegreeOfFreedomMember);
  }

  export declare class Handle_StepFEA_DegreeOfFreedomMember_4 extends Handle_StepFEA_DegreeOfFreedomMember {
    constructor(theHandle: Handle_StepFEA_DegreeOfFreedomMember);
  }

export declare class Handle_StepFEA_DummyNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_DummyNode): void;
  get(): StepFEA_DummyNode;
}

  export declare class Handle_StepFEA_DummyNode_1 extends Handle_StepFEA_DummyNode {
    constructor();
  }

  export declare class Handle_StepFEA_DummyNode_2 extends Handle_StepFEA_DummyNode {
    constructor(thePtr: StepFEA_DummyNode);
  }

  export declare class Handle_StepFEA_DummyNode_3 extends Handle_StepFEA_DummyNode {
    constructor(theHandle: Handle_StepFEA_DummyNode);
  }

  export declare class Handle_StepFEA_DummyNode_4 extends Handle_StepFEA_DummyNode {
    constructor(theHandle: Handle_StepFEA_DummyNode);
  }

export declare class Handle_StepFEA_HArray1OfElementRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HArray1OfElementRepresentation): void;
  get(): StepFEA_HArray1OfElementRepresentation;
}

  export declare class Handle_StepFEA_HArray1OfElementRepresentation_1 extends Handle_StepFEA_HArray1OfElementRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_HArray1OfElementRepresentation_2 extends Handle_StepFEA_HArray1OfElementRepresentation {
    constructor(thePtr: StepFEA_HArray1OfElementRepresentation);
  }

  export declare class Handle_StepFEA_HArray1OfElementRepresentation_3 extends Handle_StepFEA_HArray1OfElementRepresentation {
    constructor(theHandle: Handle_StepFEA_HArray1OfElementRepresentation);
  }

  export declare class Handle_StepFEA_HArray1OfElementRepresentation_4 extends Handle_StepFEA_HArray1OfElementRepresentation {
    constructor(theHandle: Handle_StepFEA_HArray1OfElementRepresentation);
  }

export declare class Handle_StepFEA_FeaGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaGroup): void;
  get(): StepFEA_FeaGroup;
}

  export declare class Handle_StepFEA_FeaGroup_1 extends Handle_StepFEA_FeaGroup {
    constructor();
  }

  export declare class Handle_StepFEA_FeaGroup_2 extends Handle_StepFEA_FeaGroup {
    constructor(thePtr: StepFEA_FeaGroup);
  }

  export declare class Handle_StepFEA_FeaGroup_3 extends Handle_StepFEA_FeaGroup {
    constructor(theHandle: Handle_StepFEA_FeaGroup);
  }

  export declare class Handle_StepFEA_FeaGroup_4 extends Handle_StepFEA_FeaGroup {
    constructor(theHandle: Handle_StepFEA_FeaGroup);
  }

export declare class Handle_StepFEA_ElementGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ElementGroup): void;
  get(): StepFEA_ElementGroup;
}

  export declare class Handle_StepFEA_ElementGroup_1 extends Handle_StepFEA_ElementGroup {
    constructor();
  }

  export declare class Handle_StepFEA_ElementGroup_2 extends Handle_StepFEA_ElementGroup {
    constructor(thePtr: StepFEA_ElementGroup);
  }

  export declare class Handle_StepFEA_ElementGroup_3 extends Handle_StepFEA_ElementGroup {
    constructor(theHandle: Handle_StepFEA_ElementGroup);
  }

  export declare class Handle_StepFEA_ElementGroup_4 extends Handle_StepFEA_ElementGroup {
    constructor(theHandle: Handle_StepFEA_ElementGroup);
  }

export declare class Handle_StepFEA_FeaMaterialPropertyRepresentationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaMaterialPropertyRepresentationItem): void;
  get(): StepFEA_FeaMaterialPropertyRepresentationItem;
}

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentationItem_1 extends Handle_StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentationItem_2 extends Handle_StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor(thePtr: StepFEA_FeaMaterialPropertyRepresentationItem);
  }

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentationItem_3 extends Handle_StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor(theHandle: Handle_StepFEA_FeaMaterialPropertyRepresentationItem);
  }

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentationItem_4 extends Handle_StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor(theHandle: Handle_StepFEA_FeaMaterialPropertyRepresentationItem);
  }

export declare class Handle_StepFEA_FeaAreaDensity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaAreaDensity): void;
  get(): StepFEA_FeaAreaDensity;
}

  export declare class Handle_StepFEA_FeaAreaDensity_1 extends Handle_StepFEA_FeaAreaDensity {
    constructor();
  }

  export declare class Handle_StepFEA_FeaAreaDensity_2 extends Handle_StepFEA_FeaAreaDensity {
    constructor(thePtr: StepFEA_FeaAreaDensity);
  }

  export declare class Handle_StepFEA_FeaAreaDensity_3 extends Handle_StepFEA_FeaAreaDensity {
    constructor(theHandle: Handle_StepFEA_FeaAreaDensity);
  }

  export declare class Handle_StepFEA_FeaAreaDensity_4 extends Handle_StepFEA_FeaAreaDensity {
    constructor(theHandle: Handle_StepFEA_FeaAreaDensity);
  }

export declare class Handle_StepFEA_FeaAxis2Placement3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaAxis2Placement3d): void;
  get(): StepFEA_FeaAxis2Placement3d;
}

  export declare class Handle_StepFEA_FeaAxis2Placement3d_1 extends Handle_StepFEA_FeaAxis2Placement3d {
    constructor();
  }

  export declare class Handle_StepFEA_FeaAxis2Placement3d_2 extends Handle_StepFEA_FeaAxis2Placement3d {
    constructor(thePtr: StepFEA_FeaAxis2Placement3d);
  }

  export declare class Handle_StepFEA_FeaAxis2Placement3d_3 extends Handle_StepFEA_FeaAxis2Placement3d {
    constructor(theHandle: Handle_StepFEA_FeaAxis2Placement3d);
  }

  export declare class Handle_StepFEA_FeaAxis2Placement3d_4 extends Handle_StepFEA_FeaAxis2Placement3d {
    constructor(theHandle: Handle_StepFEA_FeaAxis2Placement3d);
  }

export declare class Handle_StepFEA_FeaCurveSectionGeometricRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaCurveSectionGeometricRelationship): void;
  get(): StepFEA_FeaCurveSectionGeometricRelationship;
}

  export declare class Handle_StepFEA_FeaCurveSectionGeometricRelationship_1 extends Handle_StepFEA_FeaCurveSectionGeometricRelationship {
    constructor();
  }

  export declare class Handle_StepFEA_FeaCurveSectionGeometricRelationship_2 extends Handle_StepFEA_FeaCurveSectionGeometricRelationship {
    constructor(thePtr: StepFEA_FeaCurveSectionGeometricRelationship);
  }

  export declare class Handle_StepFEA_FeaCurveSectionGeometricRelationship_3 extends Handle_StepFEA_FeaCurveSectionGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_FeaCurveSectionGeometricRelationship);
  }

  export declare class Handle_StepFEA_FeaCurveSectionGeometricRelationship_4 extends Handle_StepFEA_FeaCurveSectionGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_FeaCurveSectionGeometricRelationship);
  }

export declare class Handle_StepFEA_FeaLinearElasticity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaLinearElasticity): void;
  get(): StepFEA_FeaLinearElasticity;
}

  export declare class Handle_StepFEA_FeaLinearElasticity_1 extends Handle_StepFEA_FeaLinearElasticity {
    constructor();
  }

  export declare class Handle_StepFEA_FeaLinearElasticity_2 extends Handle_StepFEA_FeaLinearElasticity {
    constructor(thePtr: StepFEA_FeaLinearElasticity);
  }

  export declare class Handle_StepFEA_FeaLinearElasticity_3 extends Handle_StepFEA_FeaLinearElasticity {
    constructor(theHandle: Handle_StepFEA_FeaLinearElasticity);
  }

  export declare class Handle_StepFEA_FeaLinearElasticity_4 extends Handle_StepFEA_FeaLinearElasticity {
    constructor(theHandle: Handle_StepFEA_FeaLinearElasticity);
  }

export declare class Handle_StepFEA_FeaMassDensity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaMassDensity): void;
  get(): StepFEA_FeaMassDensity;
}

  export declare class Handle_StepFEA_FeaMassDensity_1 extends Handle_StepFEA_FeaMassDensity {
    constructor();
  }

  export declare class Handle_StepFEA_FeaMassDensity_2 extends Handle_StepFEA_FeaMassDensity {
    constructor(thePtr: StepFEA_FeaMassDensity);
  }

  export declare class Handle_StepFEA_FeaMassDensity_3 extends Handle_StepFEA_FeaMassDensity {
    constructor(theHandle: Handle_StepFEA_FeaMassDensity);
  }

  export declare class Handle_StepFEA_FeaMassDensity_4 extends Handle_StepFEA_FeaMassDensity {
    constructor(theHandle: Handle_StepFEA_FeaMassDensity);
  }

export declare class Handle_StepFEA_FeaMaterialPropertyRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaMaterialPropertyRepresentation): void;
  get(): StepFEA_FeaMaterialPropertyRepresentation;
}

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentation_1 extends Handle_StepFEA_FeaMaterialPropertyRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentation_2 extends Handle_StepFEA_FeaMaterialPropertyRepresentation {
    constructor(thePtr: StepFEA_FeaMaterialPropertyRepresentation);
  }

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentation_3 extends Handle_StepFEA_FeaMaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepFEA_FeaMaterialPropertyRepresentation);
  }

  export declare class Handle_StepFEA_FeaMaterialPropertyRepresentation_4 extends Handle_StepFEA_FeaMaterialPropertyRepresentation {
    constructor(theHandle: Handle_StepFEA_FeaMaterialPropertyRepresentation);
  }

export declare class Handle_StepFEA_FeaModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaModel): void;
  get(): StepFEA_FeaModel;
}

  export declare class Handle_StepFEA_FeaModel_1 extends Handle_StepFEA_FeaModel {
    constructor();
  }

  export declare class Handle_StepFEA_FeaModel_2 extends Handle_StepFEA_FeaModel {
    constructor(thePtr: StepFEA_FeaModel);
  }

  export declare class Handle_StepFEA_FeaModel_3 extends Handle_StepFEA_FeaModel {
    constructor(theHandle: Handle_StepFEA_FeaModel);
  }

  export declare class Handle_StepFEA_FeaModel_4 extends Handle_StepFEA_FeaModel {
    constructor(theHandle: Handle_StepFEA_FeaModel);
  }

export declare class Handle_StepFEA_FeaModel3d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaModel3d): void;
  get(): StepFEA_FeaModel3d;
}

  export declare class Handle_StepFEA_FeaModel3d_1 extends Handle_StepFEA_FeaModel3d {
    constructor();
  }

  export declare class Handle_StepFEA_FeaModel3d_2 extends Handle_StepFEA_FeaModel3d {
    constructor(thePtr: StepFEA_FeaModel3d);
  }

  export declare class Handle_StepFEA_FeaModel3d_3 extends Handle_StepFEA_FeaModel3d {
    constructor(theHandle: Handle_StepFEA_FeaModel3d);
  }

  export declare class Handle_StepFEA_FeaModel3d_4 extends Handle_StepFEA_FeaModel3d {
    constructor(theHandle: Handle_StepFEA_FeaModel3d);
  }

export declare class Handle_StepFEA_FeaModelDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaModelDefinition): void;
  get(): StepFEA_FeaModelDefinition;
}

  export declare class Handle_StepFEA_FeaModelDefinition_1 extends Handle_StepFEA_FeaModelDefinition {
    constructor();
  }

  export declare class Handle_StepFEA_FeaModelDefinition_2 extends Handle_StepFEA_FeaModelDefinition {
    constructor(thePtr: StepFEA_FeaModelDefinition);
  }

  export declare class Handle_StepFEA_FeaModelDefinition_3 extends Handle_StepFEA_FeaModelDefinition {
    constructor(theHandle: Handle_StepFEA_FeaModelDefinition);
  }

  export declare class Handle_StepFEA_FeaModelDefinition_4 extends Handle_StepFEA_FeaModelDefinition {
    constructor(theHandle: Handle_StepFEA_FeaModelDefinition);
  }

export declare class Handle_StepFEA_FeaMoistureAbsorption {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaMoistureAbsorption): void;
  get(): StepFEA_FeaMoistureAbsorption;
}

  export declare class Handle_StepFEA_FeaMoistureAbsorption_1 extends Handle_StepFEA_FeaMoistureAbsorption {
    constructor();
  }

  export declare class Handle_StepFEA_FeaMoistureAbsorption_2 extends Handle_StepFEA_FeaMoistureAbsorption {
    constructor(thePtr: StepFEA_FeaMoistureAbsorption);
  }

  export declare class Handle_StepFEA_FeaMoistureAbsorption_3 extends Handle_StepFEA_FeaMoistureAbsorption {
    constructor(theHandle: Handle_StepFEA_FeaMoistureAbsorption);
  }

  export declare class Handle_StepFEA_FeaMoistureAbsorption_4 extends Handle_StepFEA_FeaMoistureAbsorption {
    constructor(theHandle: Handle_StepFEA_FeaMoistureAbsorption);
  }

export declare class Handle_StepFEA_FeaParametricPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaParametricPoint): void;
  get(): StepFEA_FeaParametricPoint;
}

  export declare class Handle_StepFEA_FeaParametricPoint_1 extends Handle_StepFEA_FeaParametricPoint {
    constructor();
  }

  export declare class Handle_StepFEA_FeaParametricPoint_2 extends Handle_StepFEA_FeaParametricPoint {
    constructor(thePtr: StepFEA_FeaParametricPoint);
  }

  export declare class Handle_StepFEA_FeaParametricPoint_3 extends Handle_StepFEA_FeaParametricPoint {
    constructor(theHandle: Handle_StepFEA_FeaParametricPoint);
  }

  export declare class Handle_StepFEA_FeaParametricPoint_4 extends Handle_StepFEA_FeaParametricPoint {
    constructor(theHandle: Handle_StepFEA_FeaParametricPoint);
  }

export declare class Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaSecantCoefficientOfLinearThermalExpansion): void;
  get(): StepFEA_FeaSecantCoefficientOfLinearThermalExpansion;
}

  export declare class Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_1 extends Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion {
    constructor();
  }

  export declare class Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_2 extends Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion {
    constructor(thePtr: StepFEA_FeaSecantCoefficientOfLinearThermalExpansion);
  }

  export declare class Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_3 extends Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion {
    constructor(theHandle: Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion);
  }

  export declare class Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_4 extends Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion {
    constructor(theHandle: Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion);
  }

export declare class Handle_StepFEA_FeaShellBendingStiffness {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaShellBendingStiffness): void;
  get(): StepFEA_FeaShellBendingStiffness;
}

  export declare class Handle_StepFEA_FeaShellBendingStiffness_1 extends Handle_StepFEA_FeaShellBendingStiffness {
    constructor();
  }

  export declare class Handle_StepFEA_FeaShellBendingStiffness_2 extends Handle_StepFEA_FeaShellBendingStiffness {
    constructor(thePtr: StepFEA_FeaShellBendingStiffness);
  }

  export declare class Handle_StepFEA_FeaShellBendingStiffness_3 extends Handle_StepFEA_FeaShellBendingStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellBendingStiffness);
  }

  export declare class Handle_StepFEA_FeaShellBendingStiffness_4 extends Handle_StepFEA_FeaShellBendingStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellBendingStiffness);
  }

export declare class Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaShellMembraneBendingCouplingStiffness): void;
  get(): StepFEA_FeaShellMembraneBendingCouplingStiffness;
}

  export declare class Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_1 extends Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness {
    constructor();
  }

  export declare class Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_2 extends Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness {
    constructor(thePtr: StepFEA_FeaShellMembraneBendingCouplingStiffness);
  }

  export declare class Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_3 extends Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness);
  }

  export declare class Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_4 extends Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness);
  }

export declare class Handle_StepFEA_FeaShellMembraneStiffness {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaShellMembraneStiffness): void;
  get(): StepFEA_FeaShellMembraneStiffness;
}

  export declare class Handle_StepFEA_FeaShellMembraneStiffness_1 extends Handle_StepFEA_FeaShellMembraneStiffness {
    constructor();
  }

  export declare class Handle_StepFEA_FeaShellMembraneStiffness_2 extends Handle_StepFEA_FeaShellMembraneStiffness {
    constructor(thePtr: StepFEA_FeaShellMembraneStiffness);
  }

  export declare class Handle_StepFEA_FeaShellMembraneStiffness_3 extends Handle_StepFEA_FeaShellMembraneStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellMembraneStiffness);
  }

  export declare class Handle_StepFEA_FeaShellMembraneStiffness_4 extends Handle_StepFEA_FeaShellMembraneStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellMembraneStiffness);
  }

export declare class Handle_StepFEA_FeaShellShearStiffness {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaShellShearStiffness): void;
  get(): StepFEA_FeaShellShearStiffness;
}

  export declare class Handle_StepFEA_FeaShellShearStiffness_1 extends Handle_StepFEA_FeaShellShearStiffness {
    constructor();
  }

  export declare class Handle_StepFEA_FeaShellShearStiffness_2 extends Handle_StepFEA_FeaShellShearStiffness {
    constructor(thePtr: StepFEA_FeaShellShearStiffness);
  }

  export declare class Handle_StepFEA_FeaShellShearStiffness_3 extends Handle_StepFEA_FeaShellShearStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellShearStiffness);
  }

  export declare class Handle_StepFEA_FeaShellShearStiffness_4 extends Handle_StepFEA_FeaShellShearStiffness {
    constructor(theHandle: Handle_StepFEA_FeaShellShearStiffness);
  }

export declare class Handle_StepFEA_FeaSurfaceSectionGeometricRelationship {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaSurfaceSectionGeometricRelationship): void;
  get(): StepFEA_FeaSurfaceSectionGeometricRelationship;
}

  export declare class Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_1 extends Handle_StepFEA_FeaSurfaceSectionGeometricRelationship {
    constructor();
  }

  export declare class Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_2 extends Handle_StepFEA_FeaSurfaceSectionGeometricRelationship {
    constructor(thePtr: StepFEA_FeaSurfaceSectionGeometricRelationship);
  }

  export declare class Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_3 extends Handle_StepFEA_FeaSurfaceSectionGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_FeaSurfaceSectionGeometricRelationship);
  }

  export declare class Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_4 extends Handle_StepFEA_FeaSurfaceSectionGeometricRelationship {
    constructor(theHandle: Handle_StepFEA_FeaSurfaceSectionGeometricRelationship);
  }

export declare class Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion): void;
  get(): StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion;
}

  export declare class Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_1 extends Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion {
    constructor();
  }

  export declare class Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_2 extends Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion {
    constructor(thePtr: StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion);
  }

  export declare class Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_3 extends Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion {
    constructor(theHandle: Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion);
  }

  export declare class Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_4 extends Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion {
    constructor(theHandle: Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion);
  }

export declare class Handle_StepFEA_FreedomAndCoefficient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FreedomAndCoefficient): void;
  get(): StepFEA_FreedomAndCoefficient;
}

  export declare class Handle_StepFEA_FreedomAndCoefficient_1 extends Handle_StepFEA_FreedomAndCoefficient {
    constructor();
  }

  export declare class Handle_StepFEA_FreedomAndCoefficient_2 extends Handle_StepFEA_FreedomAndCoefficient {
    constructor(thePtr: StepFEA_FreedomAndCoefficient);
  }

  export declare class Handle_StepFEA_FreedomAndCoefficient_3 extends Handle_StepFEA_FreedomAndCoefficient {
    constructor(theHandle: Handle_StepFEA_FreedomAndCoefficient);
  }

  export declare class Handle_StepFEA_FreedomAndCoefficient_4 extends Handle_StepFEA_FreedomAndCoefficient {
    constructor(theHandle: Handle_StepFEA_FreedomAndCoefficient);
  }

export declare class Handle_StepFEA_HArray1OfDegreeOfFreedom {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HArray1OfDegreeOfFreedom): void;
  get(): StepFEA_HArray1OfDegreeOfFreedom;
}

  export declare class Handle_StepFEA_HArray1OfDegreeOfFreedom_1 extends Handle_StepFEA_HArray1OfDegreeOfFreedom {
    constructor();
  }

  export declare class Handle_StepFEA_HArray1OfDegreeOfFreedom_2 extends Handle_StepFEA_HArray1OfDegreeOfFreedom {
    constructor(thePtr: StepFEA_HArray1OfDegreeOfFreedom);
  }

  export declare class Handle_StepFEA_HArray1OfDegreeOfFreedom_3 extends Handle_StepFEA_HArray1OfDegreeOfFreedom {
    constructor(theHandle: Handle_StepFEA_HArray1OfDegreeOfFreedom);
  }

  export declare class Handle_StepFEA_HArray1OfDegreeOfFreedom_4 extends Handle_StepFEA_HArray1OfDegreeOfFreedom {
    constructor(theHandle: Handle_StepFEA_HArray1OfDegreeOfFreedom);
  }

export declare class Handle_StepFEA_FreedomsList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_FreedomsList): void;
  get(): StepFEA_FreedomsList;
}

  export declare class Handle_StepFEA_FreedomsList_1 extends Handle_StepFEA_FreedomsList {
    constructor();
  }

  export declare class Handle_StepFEA_FreedomsList_2 extends Handle_StepFEA_FreedomsList {
    constructor(thePtr: StepFEA_FreedomsList);
  }

  export declare class Handle_StepFEA_FreedomsList_3 extends Handle_StepFEA_FreedomsList {
    constructor(theHandle: Handle_StepFEA_FreedomsList);
  }

  export declare class Handle_StepFEA_FreedomsList_4 extends Handle_StepFEA_FreedomsList {
    constructor(theHandle: Handle_StepFEA_FreedomsList);
  }

export declare class Handle_StepFEA_GeometricNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_GeometricNode): void;
  get(): StepFEA_GeometricNode;
}

  export declare class Handle_StepFEA_GeometricNode_1 extends Handle_StepFEA_GeometricNode {
    constructor();
  }

  export declare class Handle_StepFEA_GeometricNode_2 extends Handle_StepFEA_GeometricNode {
    constructor(thePtr: StepFEA_GeometricNode);
  }

  export declare class Handle_StepFEA_GeometricNode_3 extends Handle_StepFEA_GeometricNode {
    constructor(theHandle: Handle_StepFEA_GeometricNode);
  }

  export declare class Handle_StepFEA_GeometricNode_4 extends Handle_StepFEA_GeometricNode {
    constructor(theHandle: Handle_StepFEA_GeometricNode);
  }

export declare class Handle_StepFEA_HSequenceOfCurve3dElementProperty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HSequenceOfCurve3dElementProperty): void;
  get(): StepFEA_HSequenceOfCurve3dElementProperty;
}

  export declare class Handle_StepFEA_HSequenceOfCurve3dElementProperty_1 extends Handle_StepFEA_HSequenceOfCurve3dElementProperty {
    constructor();
  }

  export declare class Handle_StepFEA_HSequenceOfCurve3dElementProperty_2 extends Handle_StepFEA_HSequenceOfCurve3dElementProperty {
    constructor(thePtr: StepFEA_HSequenceOfCurve3dElementProperty);
  }

  export declare class Handle_StepFEA_HSequenceOfCurve3dElementProperty_3 extends Handle_StepFEA_HSequenceOfCurve3dElementProperty {
    constructor(theHandle: Handle_StepFEA_HSequenceOfCurve3dElementProperty);
  }

  export declare class Handle_StepFEA_HSequenceOfCurve3dElementProperty_4 extends Handle_StepFEA_HSequenceOfCurve3dElementProperty {
    constructor(theHandle: Handle_StepFEA_HSequenceOfCurve3dElementProperty);
  }

export declare class Handle_StepFEA_HSequenceOfNodeRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_HSequenceOfNodeRepresentation): void;
  get(): StepFEA_HSequenceOfNodeRepresentation;
}

  export declare class Handle_StepFEA_HSequenceOfNodeRepresentation_1 extends Handle_StepFEA_HSequenceOfNodeRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_HSequenceOfNodeRepresentation_2 extends Handle_StepFEA_HSequenceOfNodeRepresentation {
    constructor(thePtr: StepFEA_HSequenceOfNodeRepresentation);
  }

  export declare class Handle_StepFEA_HSequenceOfNodeRepresentation_3 extends Handle_StepFEA_HSequenceOfNodeRepresentation {
    constructor(theHandle: Handle_StepFEA_HSequenceOfNodeRepresentation);
  }

  export declare class Handle_StepFEA_HSequenceOfNodeRepresentation_4 extends Handle_StepFEA_HSequenceOfNodeRepresentation {
    constructor(theHandle: Handle_StepFEA_HSequenceOfNodeRepresentation);
  }

export declare class Handle_StepFEA_Node {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_Node): void;
  get(): StepFEA_Node;
}

  export declare class Handle_StepFEA_Node_1 extends Handle_StepFEA_Node {
    constructor();
  }

  export declare class Handle_StepFEA_Node_2 extends Handle_StepFEA_Node {
    constructor(thePtr: StepFEA_Node);
  }

  export declare class Handle_StepFEA_Node_3 extends Handle_StepFEA_Node {
    constructor(theHandle: Handle_StepFEA_Node);
  }

  export declare class Handle_StepFEA_Node_4 extends Handle_StepFEA_Node {
    constructor(theHandle: Handle_StepFEA_Node);
  }

export declare class Handle_StepFEA_NodeDefinition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_NodeDefinition): void;
  get(): StepFEA_NodeDefinition;
}

  export declare class Handle_StepFEA_NodeDefinition_1 extends Handle_StepFEA_NodeDefinition {
    constructor();
  }

  export declare class Handle_StepFEA_NodeDefinition_2 extends Handle_StepFEA_NodeDefinition {
    constructor(thePtr: StepFEA_NodeDefinition);
  }

  export declare class Handle_StepFEA_NodeDefinition_3 extends Handle_StepFEA_NodeDefinition {
    constructor(theHandle: Handle_StepFEA_NodeDefinition);
  }

  export declare class Handle_StepFEA_NodeDefinition_4 extends Handle_StepFEA_NodeDefinition {
    constructor(theHandle: Handle_StepFEA_NodeDefinition);
  }

export declare class Handle_StepFEA_NodeGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_NodeGroup): void;
  get(): StepFEA_NodeGroup;
}

  export declare class Handle_StepFEA_NodeGroup_1 extends Handle_StepFEA_NodeGroup {
    constructor();
  }

  export declare class Handle_StepFEA_NodeGroup_2 extends Handle_StepFEA_NodeGroup {
    constructor(thePtr: StepFEA_NodeGroup);
  }

  export declare class Handle_StepFEA_NodeGroup_3 extends Handle_StepFEA_NodeGroup {
    constructor(theHandle: Handle_StepFEA_NodeGroup);
  }

  export declare class Handle_StepFEA_NodeGroup_4 extends Handle_StepFEA_NodeGroup {
    constructor(theHandle: Handle_StepFEA_NodeGroup);
  }

export declare class Handle_StepFEA_NodeSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_NodeSet): void;
  get(): StepFEA_NodeSet;
}

  export declare class Handle_StepFEA_NodeSet_1 extends Handle_StepFEA_NodeSet {
    constructor();
  }

  export declare class Handle_StepFEA_NodeSet_2 extends Handle_StepFEA_NodeSet {
    constructor(thePtr: StepFEA_NodeSet);
  }

  export declare class Handle_StepFEA_NodeSet_3 extends Handle_StepFEA_NodeSet {
    constructor(theHandle: Handle_StepFEA_NodeSet);
  }

  export declare class Handle_StepFEA_NodeSet_4 extends Handle_StepFEA_NodeSet {
    constructor(theHandle: Handle_StepFEA_NodeSet);
  }

export declare class Handle_StepFEA_NodeWithSolutionCoordinateSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_NodeWithSolutionCoordinateSystem): void;
  get(): StepFEA_NodeWithSolutionCoordinateSystem;
}

  export declare class Handle_StepFEA_NodeWithSolutionCoordinateSystem_1 extends Handle_StepFEA_NodeWithSolutionCoordinateSystem {
    constructor();
  }

  export declare class Handle_StepFEA_NodeWithSolutionCoordinateSystem_2 extends Handle_StepFEA_NodeWithSolutionCoordinateSystem {
    constructor(thePtr: StepFEA_NodeWithSolutionCoordinateSystem);
  }

  export declare class Handle_StepFEA_NodeWithSolutionCoordinateSystem_3 extends Handle_StepFEA_NodeWithSolutionCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_NodeWithSolutionCoordinateSystem);
  }

  export declare class Handle_StepFEA_NodeWithSolutionCoordinateSystem_4 extends Handle_StepFEA_NodeWithSolutionCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_NodeWithSolutionCoordinateSystem);
  }

export declare class Handle_StepFEA_NodeWithVector {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_NodeWithVector): void;
  get(): StepFEA_NodeWithVector;
}

  export declare class Handle_StepFEA_NodeWithVector_1 extends Handle_StepFEA_NodeWithVector {
    constructor();
  }

  export declare class Handle_StepFEA_NodeWithVector_2 extends Handle_StepFEA_NodeWithVector {
    constructor(thePtr: StepFEA_NodeWithVector);
  }

  export declare class Handle_StepFEA_NodeWithVector_3 extends Handle_StepFEA_NodeWithVector {
    constructor(theHandle: Handle_StepFEA_NodeWithVector);
  }

  export declare class Handle_StepFEA_NodeWithVector_4 extends Handle_StepFEA_NodeWithVector {
    constructor(theHandle: Handle_StepFEA_NodeWithVector);
  }

export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateDirection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ParametricCurve3dElementCoordinateDirection): void;
  get(): StepFEA_ParametricCurve3dElementCoordinateDirection;
}

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_1 extends Handle_StepFEA_ParametricCurve3dElementCoordinateDirection {
    constructor();
  }

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_2 extends Handle_StepFEA_ParametricCurve3dElementCoordinateDirection {
    constructor(thePtr: StepFEA_ParametricCurve3dElementCoordinateDirection);
  }

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_3 extends Handle_StepFEA_ParametricCurve3dElementCoordinateDirection {
    constructor(theHandle: Handle_StepFEA_ParametricCurve3dElementCoordinateDirection);
  }

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_4 extends Handle_StepFEA_ParametricCurve3dElementCoordinateDirection {
    constructor(theHandle: Handle_StepFEA_ParametricCurve3dElementCoordinateDirection);
  }

export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ParametricCurve3dElementCoordinateSystem): void;
  get(): StepFEA_ParametricCurve3dElementCoordinateSystem;
}

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_1 extends Handle_StepFEA_ParametricCurve3dElementCoordinateSystem {
    constructor();
  }

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_2 extends Handle_StepFEA_ParametricCurve3dElementCoordinateSystem {
    constructor(thePtr: StepFEA_ParametricCurve3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_3 extends Handle_StepFEA_ParametricCurve3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ParametricCurve3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_4 extends Handle_StepFEA_ParametricCurve3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ParametricCurve3dElementCoordinateSystem);
  }

export declare class Handle_StepFEA_ParametricSurface3dElementCoordinateSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_ParametricSurface3dElementCoordinateSystem): void;
  get(): StepFEA_ParametricSurface3dElementCoordinateSystem;
}

  export declare class Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_1 extends Handle_StepFEA_ParametricSurface3dElementCoordinateSystem {
    constructor();
  }

  export declare class Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_2 extends Handle_StepFEA_ParametricSurface3dElementCoordinateSystem {
    constructor(thePtr: StepFEA_ParametricSurface3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_3 extends Handle_StepFEA_ParametricSurface3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ParametricSurface3dElementCoordinateSystem);
  }

  export declare class Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_4 extends Handle_StepFEA_ParametricSurface3dElementCoordinateSystem {
    constructor(theHandle: Handle_StepFEA_ParametricSurface3dElementCoordinateSystem);
  }

export declare class Handle_StepFEA_Surface3dElementRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_Surface3dElementRepresentation): void;
  get(): StepFEA_Surface3dElementRepresentation;
}

  export declare class Handle_StepFEA_Surface3dElementRepresentation_1 extends Handle_StepFEA_Surface3dElementRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_Surface3dElementRepresentation_2 extends Handle_StepFEA_Surface3dElementRepresentation {
    constructor(thePtr: StepFEA_Surface3dElementRepresentation);
  }

  export declare class Handle_StepFEA_Surface3dElementRepresentation_3 extends Handle_StepFEA_Surface3dElementRepresentation {
    constructor(theHandle: Handle_StepFEA_Surface3dElementRepresentation);
  }

  export declare class Handle_StepFEA_Surface3dElementRepresentation_4 extends Handle_StepFEA_Surface3dElementRepresentation {
    constructor(theHandle: Handle_StepFEA_Surface3dElementRepresentation);
  }

export declare class Handle_StepFEA_SymmetricTensor23dMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_SymmetricTensor23dMember): void;
  get(): StepFEA_SymmetricTensor23dMember;
}

  export declare class Handle_StepFEA_SymmetricTensor23dMember_1 extends Handle_StepFEA_SymmetricTensor23dMember {
    constructor();
  }

  export declare class Handle_StepFEA_SymmetricTensor23dMember_2 extends Handle_StepFEA_SymmetricTensor23dMember {
    constructor(thePtr: StepFEA_SymmetricTensor23dMember);
  }

  export declare class Handle_StepFEA_SymmetricTensor23dMember_3 extends Handle_StepFEA_SymmetricTensor23dMember {
    constructor(theHandle: Handle_StepFEA_SymmetricTensor23dMember);
  }

  export declare class Handle_StepFEA_SymmetricTensor23dMember_4 extends Handle_StepFEA_SymmetricTensor23dMember {
    constructor(theHandle: Handle_StepFEA_SymmetricTensor23dMember);
  }

export declare class Handle_StepFEA_SymmetricTensor43dMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_SymmetricTensor43dMember): void;
  get(): StepFEA_SymmetricTensor43dMember;
}

  export declare class Handle_StepFEA_SymmetricTensor43dMember_1 extends Handle_StepFEA_SymmetricTensor43dMember {
    constructor();
  }

  export declare class Handle_StepFEA_SymmetricTensor43dMember_2 extends Handle_StepFEA_SymmetricTensor43dMember {
    constructor(thePtr: StepFEA_SymmetricTensor43dMember);
  }

  export declare class Handle_StepFEA_SymmetricTensor43dMember_3 extends Handle_StepFEA_SymmetricTensor43dMember {
    constructor(theHandle: Handle_StepFEA_SymmetricTensor43dMember);
  }

  export declare class Handle_StepFEA_SymmetricTensor43dMember_4 extends Handle_StepFEA_SymmetricTensor43dMember {
    constructor(theHandle: Handle_StepFEA_SymmetricTensor43dMember);
  }

export declare class Handle_StepFEA_Volume3dElementRepresentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepFEA_Volume3dElementRepresentation): void;
  get(): StepFEA_Volume3dElementRepresentation;
}

  export declare class Handle_StepFEA_Volume3dElementRepresentation_1 extends Handle_StepFEA_Volume3dElementRepresentation {
    constructor();
  }

  export declare class Handle_StepFEA_Volume3dElementRepresentation_2 extends Handle_StepFEA_Volume3dElementRepresentation {
    constructor(thePtr: StepFEA_Volume3dElementRepresentation);
  }

  export declare class Handle_StepFEA_Volume3dElementRepresentation_3 extends Handle_StepFEA_Volume3dElementRepresentation {
    constructor(theHandle: Handle_StepFEA_Volume3dElementRepresentation);
  }

  export declare class Handle_StepFEA_Volume3dElementRepresentation_4 extends Handle_StepFEA_Volume3dElementRepresentation {
    constructor(theHandle: Handle_StepFEA_Volume3dElementRepresentation);
  }

export declare type StepElement_ElementVolume = {
  StepElement_Volume: {};
}

export declare type StepElement_CurveEdge = {
  StepElement_ElementEdge: {};
}

export declare type StepElement_EnumeratedCurveElementFreedom = {
  StepElement_XTranslation: {};
  StepElement_YTranslation: {};
  StepElement_ZTranslation: {};
  StepElement_XRotation: {};
  StepElement_YRotation: {};
  StepElement_ZRotation: {};
  StepElement_Warp: {};
  StepElement_None: {};
}

export declare type StepElement_UnspecifiedValue = {
  StepElement_Unspecified: {};
}

export declare type StepElement_EnumeratedVolumeElementPurpose = {
  StepElement_StressDisplacement: {};
}

export declare type StepElement_EnumeratedSurfaceElementPurpose = {
  StepElement_MembraneDirect: {};
  StepElement_MembraneShear: {};
  StepElement_BendingDirect: {};
  StepElement_BendingTorsion: {};
  StepElement_NormalToPlaneShear: {};
}

export declare type StepElement_ElementOrder = {
  StepElement_Linear: {};
  StepElement_Quadratic: {};
  StepElement_Cubic: {};
}

export declare type StepElement_EnumeratedCurveElementPurpose = {
  StepElement_Axial: {};
  StepElement_YYBending: {};
  StepElement_ZZBending: {};
  StepElement_Torsion: {};
  StepElement_XYShear: {};
  StepElement_XZShear: {};
  StepElement_Warping: {};
}

export declare type StepElement_Element2dShape = {
  StepElement_Quadrilateral: {};
  StepElement_Triangle: {};
}

export declare type StepElement_Volume3dElementShape = {
  StepElement_Hexahedron: {};
  StepElement_Wedge: {};
  StepElement_Tetrahedron: {};
  StepElement_Pyramid: {};
}

export declare type StepFEA_EnumeratedDegreeOfFreedom = {
  StepFEA_XTranslation: {};
  StepFEA_YTranslation: {};
  StepFEA_ZTranslation: {};
  StepFEA_XRotation: {};
  StepFEA_YRotation: {};
  StepFEA_ZRotation: {};
  StepFEA_Warp: {};
}

export declare type StepFEA_CoordinateSystemType = {
  StepFEA_Cartesian: {};
  StepFEA_Cylindrical: {};
  StepFEA_Spherical: {};
}

export declare type StepFEA_CurveEdge = {
  StepFEA_ElementEdge: {};
}

export declare type StepFEA_ElementVolume = {
  StepFEA_Volume: {};
}

export declare type StepFEA_UnspecifiedValue = {
  StepFEA_Unspecified: {};
}

export declare type TKSTEP209Lib = {
  RWStepElement_RWAnalysisItemWithinRepresentation: typeof RWStepElement_RWAnalysisItemWithinRepresentation;
  RWStepElement_RWCurve3dElementDescriptor: typeof RWStepElement_RWCurve3dElementDescriptor;
  RWStepElement_RWCurveElementEndReleasePacket: typeof RWStepElement_RWCurveElementEndReleasePacket;
  RWStepElement_RWCurveElementSectionDefinition: typeof RWStepElement_RWCurveElementSectionDefinition;
  RWStepElement_RWCurveElementSectionDerivedDefinitions: typeof RWStepElement_RWCurveElementSectionDerivedDefinitions;
  RWStepElement_RWElementDescriptor: typeof RWStepElement_RWElementDescriptor;
  RWStepElement_RWElementMaterial: typeof RWStepElement_RWElementMaterial;
  RWStepElement_RWSurface3dElementDescriptor: typeof RWStepElement_RWSurface3dElementDescriptor;
  RWStepElement_RWSurfaceElementProperty: typeof RWStepElement_RWSurfaceElementProperty;
  RWStepElement_RWSurfaceSection: typeof RWStepElement_RWSurfaceSection;
  RWStepElement_RWSurfaceSectionField: typeof RWStepElement_RWSurfaceSectionField;
  RWStepElement_RWSurfaceSectionFieldConstant: typeof RWStepElement_RWSurfaceSectionFieldConstant;
  RWStepElement_RWSurfaceSectionFieldVarying: typeof RWStepElement_RWSurfaceSectionFieldVarying;
  RWStepElement_RWUniformSurfaceSection: typeof RWStepElement_RWUniformSurfaceSection;
  RWStepElement_RWVolume3dElementDescriptor: typeof RWStepElement_RWVolume3dElementDescriptor;
  RWStepFEA_RWAlignedCurve3dElementCoordinateSystem: typeof RWStepFEA_RWAlignedCurve3dElementCoordinateSystem;
  RWStepFEA_RWAlignedSurface3dElementCoordinateSystem: typeof RWStepFEA_RWAlignedSurface3dElementCoordinateSystem;
  RWStepFEA_RWArbitraryVolume3dElementCoordinateSystem: typeof RWStepFEA_RWArbitraryVolume3dElementCoordinateSystem;
  RWStepFEA_RWConstantSurface3dElementCoordinateSystem: typeof RWStepFEA_RWConstantSurface3dElementCoordinateSystem;
  RWStepFEA_RWCurve3dElementProperty: typeof RWStepFEA_RWCurve3dElementProperty;
  RWStepFEA_RWCurve3dElementRepresentation: typeof RWStepFEA_RWCurve3dElementRepresentation;
  RWStepFEA_RWCurveElementEndOffset: typeof RWStepFEA_RWCurveElementEndOffset;
  RWStepFEA_RWCurveElementEndRelease: typeof RWStepFEA_RWCurveElementEndRelease;
  RWStepFEA_RWCurveElementInterval: typeof RWStepFEA_RWCurveElementInterval;
  RWStepFEA_RWCurveElementIntervalConstant: typeof RWStepFEA_RWCurveElementIntervalConstant;
  RWStepFEA_RWCurveElementIntervalLinearlyVarying: typeof RWStepFEA_RWCurveElementIntervalLinearlyVarying;
  RWStepFEA_RWCurveElementLocation: typeof RWStepFEA_RWCurveElementLocation;
  RWStepFEA_RWDummyNode: typeof RWStepFEA_RWDummyNode;
  RWStepFEA_RWElementGeometricRelationship: typeof RWStepFEA_RWElementGeometricRelationship;
  RWStepFEA_RWElementGroup: typeof RWStepFEA_RWElementGroup;
  RWStepFEA_RWElementRepresentation: typeof RWStepFEA_RWElementRepresentation;
  RWStepFEA_RWFeaAreaDensity: typeof RWStepFEA_RWFeaAreaDensity;
  RWStepFEA_RWFeaAxis2Placement3d: typeof RWStepFEA_RWFeaAxis2Placement3d;
  RWStepFEA_RWFeaCurveSectionGeometricRelationship: typeof RWStepFEA_RWFeaCurveSectionGeometricRelationship;
  RWStepFEA_RWFeaGroup: typeof RWStepFEA_RWFeaGroup;
  RWStepFEA_RWFeaLinearElasticity: typeof RWStepFEA_RWFeaLinearElasticity;
  RWStepFEA_RWFeaMassDensity: typeof RWStepFEA_RWFeaMassDensity;
  RWStepFEA_RWFeaMaterialPropertyRepresentation: typeof RWStepFEA_RWFeaMaterialPropertyRepresentation;
  RWStepFEA_RWFeaMaterialPropertyRepresentationItem: typeof RWStepFEA_RWFeaMaterialPropertyRepresentationItem;
  RWStepFEA_RWFeaModel: typeof RWStepFEA_RWFeaModel;
  RWStepFEA_RWFeaModel3d: typeof RWStepFEA_RWFeaModel3d;
  RWStepFEA_RWFeaModelDefinition: typeof RWStepFEA_RWFeaModelDefinition;
  RWStepFEA_RWFeaMoistureAbsorption: typeof RWStepFEA_RWFeaMoistureAbsorption;
  RWStepFEA_RWFeaParametricPoint: typeof RWStepFEA_RWFeaParametricPoint;
  RWStepFEA_RWFeaRepresentationItem: typeof RWStepFEA_RWFeaRepresentationItem;
  RWStepFEA_RWFeaSecantCoefficientOfLinearThermalExpansion: typeof RWStepFEA_RWFeaSecantCoefficientOfLinearThermalExpansion;
  RWStepFEA_RWFeaShellBendingStiffness: typeof RWStepFEA_RWFeaShellBendingStiffness;
  RWStepFEA_RWFeaShellMembraneBendingCouplingStiffness: typeof RWStepFEA_RWFeaShellMembraneBendingCouplingStiffness;
  RWStepFEA_RWFeaShellMembraneStiffness: typeof RWStepFEA_RWFeaShellMembraneStiffness;
  RWStepFEA_RWFeaShellShearStiffness: typeof RWStepFEA_RWFeaShellShearStiffness;
  RWStepFEA_RWFeaSurfaceSectionGeometricRelationship: typeof RWStepFEA_RWFeaSurfaceSectionGeometricRelationship;
  RWStepFEA_RWFeaTangentialCoefficientOfLinearThermalExpansion: typeof RWStepFEA_RWFeaTangentialCoefficientOfLinearThermalExpansion;
  RWStepFEA_RWFreedomAndCoefficient: typeof RWStepFEA_RWFreedomAndCoefficient;
  RWStepFEA_RWFreedomsList: typeof RWStepFEA_RWFreedomsList;
  RWStepFEA_RWGeometricNode: typeof RWStepFEA_RWGeometricNode;
  RWStepFEA_RWNode: typeof RWStepFEA_RWNode;
  RWStepFEA_RWNodeDefinition: typeof RWStepFEA_RWNodeDefinition;
  RWStepFEA_RWNodeGroup: typeof RWStepFEA_RWNodeGroup;
  RWStepFEA_RWNodeRepresentation: typeof RWStepFEA_RWNodeRepresentation;
  RWStepFEA_RWNodeSet: typeof RWStepFEA_RWNodeSet;
  RWStepFEA_RWNodeWithSolutionCoordinateSystem: typeof RWStepFEA_RWNodeWithSolutionCoordinateSystem;
  RWStepFEA_RWNodeWithVector: typeof RWStepFEA_RWNodeWithVector;
  RWStepFEA_RWParametricCurve3dElementCoordinateDirection: typeof RWStepFEA_RWParametricCurve3dElementCoordinateDirection;
  RWStepFEA_RWParametricCurve3dElementCoordinateSystem: typeof RWStepFEA_RWParametricCurve3dElementCoordinateSystem;
  RWStepFEA_RWParametricSurface3dElementCoordinateSystem: typeof RWStepFEA_RWParametricSurface3dElementCoordinateSystem;
  RWStepFEA_RWSurface3dElementRepresentation: typeof RWStepFEA_RWSurface3dElementRepresentation;
  RWStepFEA_RWVolume3dElementRepresentation: typeof RWStepFEA_RWVolume3dElementRepresentation;
  StepElement_ElementMaterial: typeof StepElement_ElementMaterial;
  StepFEA_ElementOrElementGroup: typeof StepFEA_ElementOrElementGroup;
  StepElement_ElementAspect: typeof StepElement_ElementAspect;
  StepFEA_ElementGeometricRelationship: typeof StepFEA_ElementGeometricRelationship;
  StepFEA_NodeRepresentation: typeof StepFEA_NodeRepresentation;
  StepFEA_ElementRepresentation: typeof StepFEA_ElementRepresentation;
  StepElement_CurveElementSectionDefinition: typeof StepElement_CurveElementSectionDefinition;
  StepElement_AnalysisItemWithinRepresentation: typeof StepElement_AnalysisItemWithinRepresentation;
  StepElement_CurveElementFreedom: typeof StepElement_CurveElementFreedom;
  StepElement_CurveElementEndReleasePacket: typeof StepElement_CurveElementEndReleasePacket;
  StepElement_CurveElementPurposeMember: typeof StepElement_CurveElementPurposeMember;
  StepElement_SurfaceElementPurposeMember: typeof StepElement_SurfaceElementPurposeMember;
  StepElement_MeasureOrUnspecifiedValue: typeof StepElement_MeasureOrUnspecifiedValue;
  StepElement_SurfaceSection: typeof StepElement_SurfaceSection;
  StepElement_VolumeElementPurpose: typeof StepElement_VolumeElementPurpose;
  StepElement_VolumeElementPurposeMember: typeof StepElement_VolumeElementPurposeMember;
  StepElement_SurfaceElementPurpose: typeof StepElement_SurfaceElementPurpose;
  StepElement_ElementDescriptor: typeof StepElement_ElementDescriptor;
  StepElement_Curve3dElementDescriptor: typeof StepElement_Curve3dElementDescriptor;
  StepElement_CurveElementFreedomMember: typeof StepElement_CurveElementFreedomMember;
  StepElement_CurveElementPurpose: typeof StepElement_CurveElementPurpose;
  StepElement_CurveElementSectionDerivedDefinitions: typeof StepElement_CurveElementSectionDerivedDefinitions;
  StepElement_ElementAspectMember: typeof StepElement_ElementAspectMember;
  StepElement_MeasureOrUnspecifiedValueMember: typeof StepElement_MeasureOrUnspecifiedValueMember;
  StepElement_Surface3dElementDescriptor: typeof StepElement_Surface3dElementDescriptor;
  StepElement_SurfaceElementProperty: typeof StepElement_SurfaceElementProperty;
  StepElement_SurfaceSectionField: typeof StepElement_SurfaceSectionField;
  StepElement_SurfaceSectionFieldConstant: typeof StepElement_SurfaceSectionFieldConstant;
  StepElement_SurfaceSectionFieldVarying: typeof StepElement_SurfaceSectionFieldVarying;
  StepElement_UniformSurfaceSection: typeof StepElement_UniformSurfaceSection;
  StepElement_Volume3dElementDescriptor: typeof StepElement_Volume3dElementDescriptor;
  StepFEA_FeaRepresentationItem: typeof StepFEA_FeaRepresentationItem;
  StepFEA_AlignedCurve3dElementCoordinateSystem: typeof StepFEA_AlignedCurve3dElementCoordinateSystem;
  StepFEA_AlignedSurface3dElementCoordinateSystem: typeof StepFEA_AlignedSurface3dElementCoordinateSystem;
  StepFEA_ArbitraryVolume3dElementCoordinateSystem: typeof StepFEA_ArbitraryVolume3dElementCoordinateSystem;
  StepFEA_CurveElementEndCoordinateSystem: typeof StepFEA_CurveElementEndCoordinateSystem;
  StepFEA_CurveElementEndOffset: typeof StepFEA_CurveElementEndOffset;
  StepFEA_CurveElementEndRelease: typeof StepFEA_CurveElementEndRelease;
  StepFEA_CurveElementInterval: typeof StepFEA_CurveElementInterval;
  StepFEA_DegreeOfFreedom: typeof StepFEA_DegreeOfFreedom;
  StepFEA_ConstantSurface3dElementCoordinateSystem: typeof StepFEA_ConstantSurface3dElementCoordinateSystem;
  StepFEA_Curve3dElementProperty: typeof StepFEA_Curve3dElementProperty;
  StepFEA_Curve3dElementRepresentation: typeof StepFEA_Curve3dElementRepresentation;
  StepFEA_CurveElementIntervalConstant: typeof StepFEA_CurveElementIntervalConstant;
  StepFEA_CurveElementIntervalLinearlyVarying: typeof StepFEA_CurveElementIntervalLinearlyVarying;
  StepFEA_CurveElementLocation: typeof StepFEA_CurveElementLocation;
  StepFEA_DegreeOfFreedomMember: typeof StepFEA_DegreeOfFreedomMember;
  StepFEA_DummyNode: typeof StepFEA_DummyNode;
  StepFEA_FeaGroup: typeof StepFEA_FeaGroup;
  StepFEA_ElementGroup: typeof StepFEA_ElementGroup;
  StepFEA_FeaMaterialPropertyRepresentationItem: typeof StepFEA_FeaMaterialPropertyRepresentationItem;
  StepFEA_FeaAreaDensity: typeof StepFEA_FeaAreaDensity;
  StepFEA_FeaAxis2Placement3d: typeof StepFEA_FeaAxis2Placement3d;
  StepFEA_FeaCurveSectionGeometricRelationship: typeof StepFEA_FeaCurveSectionGeometricRelationship;
  StepFEA_FeaLinearElasticity: typeof StepFEA_FeaLinearElasticity;
  StepFEA_FeaMassDensity: typeof StepFEA_FeaMassDensity;
  StepFEA_FeaMaterialPropertyRepresentation: typeof StepFEA_FeaMaterialPropertyRepresentation;
  StepFEA_FeaModel: typeof StepFEA_FeaModel;
  StepFEA_FeaModel3d: typeof StepFEA_FeaModel3d;
  StepFEA_FeaModelDefinition: typeof StepFEA_FeaModelDefinition;
  StepFEA_SymmetricTensor23d: typeof StepFEA_SymmetricTensor23d;
  StepFEA_FeaMoistureAbsorption: typeof StepFEA_FeaMoistureAbsorption;
  StepFEA_FeaParametricPoint: typeof StepFEA_FeaParametricPoint;
  StepFEA_FeaSecantCoefficientOfLinearThermalExpansion: typeof StepFEA_FeaSecantCoefficientOfLinearThermalExpansion;
  StepFEA_SymmetricTensor42d: typeof StepFEA_SymmetricTensor42d;
  StepFEA_FeaShellBendingStiffness: typeof StepFEA_FeaShellBendingStiffness;
  StepFEA_FeaShellMembraneBendingCouplingStiffness: typeof StepFEA_FeaShellMembraneBendingCouplingStiffness;
  StepFEA_FeaShellMembraneStiffness: typeof StepFEA_FeaShellMembraneStiffness;
  StepFEA_SymmetricTensor22d: typeof StepFEA_SymmetricTensor22d;
  StepFEA_FeaShellShearStiffness: typeof StepFEA_FeaShellShearStiffness;
  StepFEA_FeaSurfaceSectionGeometricRelationship: typeof StepFEA_FeaSurfaceSectionGeometricRelationship;
  StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion: typeof StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion;
  StepFEA_FreedomAndCoefficient: typeof StepFEA_FreedomAndCoefficient;
  StepFEA_FreedomsList: typeof StepFEA_FreedomsList;
  StepFEA_GeometricNode: typeof StepFEA_GeometricNode;
  StepFEA_Node: typeof StepFEA_Node;
  StepFEA_NodeDefinition: typeof StepFEA_NodeDefinition;
  StepFEA_NodeGroup: typeof StepFEA_NodeGroup;
  StepFEA_NodeSet: typeof StepFEA_NodeSet;
  StepFEA_NodeWithSolutionCoordinateSystem: typeof StepFEA_NodeWithSolutionCoordinateSystem;
  StepFEA_NodeWithVector: typeof StepFEA_NodeWithVector;
  StepFEA_ParametricCurve3dElementCoordinateDirection: typeof StepFEA_ParametricCurve3dElementCoordinateDirection;
  StepFEA_ParametricCurve3dElementCoordinateSystem: typeof StepFEA_ParametricCurve3dElementCoordinateSystem;
  StepFEA_ParametricSurface3dElementCoordinateSystem: typeof StepFEA_ParametricSurface3dElementCoordinateSystem;
  StepFEA_Surface3dElementRepresentation: typeof StepFEA_Surface3dElementRepresentation;
  StepFEA_SymmetricTensor23dMember: typeof StepFEA_SymmetricTensor23dMember;
  StepFEA_SymmetricTensor43dMember: typeof StepFEA_SymmetricTensor43dMember;
  StepFEA_Volume3dElementRepresentation: typeof StepFEA_Volume3dElementRepresentation;
  Handle_StepElement_ElementMaterial_1: typeof Handle_StepElement_ElementMaterial_1;
  Handle_StepElement_ElementMaterial_2: typeof Handle_StepElement_ElementMaterial_2;
  Handle_StepElement_ElementMaterial_3: typeof Handle_StepElement_ElementMaterial_3;
  Handle_StepElement_ElementMaterial_4: typeof Handle_StepElement_ElementMaterial_4;
  Handle_StepElement_HSequenceOfElementMaterial_1: typeof Handle_StepElement_HSequenceOfElementMaterial_1;
  Handle_StepElement_HSequenceOfElementMaterial_2: typeof Handle_StepElement_HSequenceOfElementMaterial_2;
  Handle_StepElement_HSequenceOfElementMaterial_3: typeof Handle_StepElement_HSequenceOfElementMaterial_3;
  Handle_StepElement_HSequenceOfElementMaterial_4: typeof Handle_StepElement_HSequenceOfElementMaterial_4;
  Handle_StepFEA_ElementGeometricRelationship_1: typeof Handle_StepFEA_ElementGeometricRelationship_1;
  Handle_StepFEA_ElementGeometricRelationship_2: typeof Handle_StepFEA_ElementGeometricRelationship_2;
  Handle_StepFEA_ElementGeometricRelationship_3: typeof Handle_StepFEA_ElementGeometricRelationship_3;
  Handle_StepFEA_ElementGeometricRelationship_4: typeof Handle_StepFEA_ElementGeometricRelationship_4;
  Handle_StepFEA_HSequenceOfElementGeometricRelationship_1: typeof Handle_StepFEA_HSequenceOfElementGeometricRelationship_1;
  Handle_StepFEA_HSequenceOfElementGeometricRelationship_2: typeof Handle_StepFEA_HSequenceOfElementGeometricRelationship_2;
  Handle_StepFEA_HSequenceOfElementGeometricRelationship_3: typeof Handle_StepFEA_HSequenceOfElementGeometricRelationship_3;
  Handle_StepFEA_HSequenceOfElementGeometricRelationship_4: typeof Handle_StepFEA_HSequenceOfElementGeometricRelationship_4;
  Handle_StepFEA_NodeRepresentation_1: typeof Handle_StepFEA_NodeRepresentation_1;
  Handle_StepFEA_NodeRepresentation_2: typeof Handle_StepFEA_NodeRepresentation_2;
  Handle_StepFEA_NodeRepresentation_3: typeof Handle_StepFEA_NodeRepresentation_3;
  Handle_StepFEA_NodeRepresentation_4: typeof Handle_StepFEA_NodeRepresentation_4;
  Handle_StepFEA_HArray1OfNodeRepresentation_1: typeof Handle_StepFEA_HArray1OfNodeRepresentation_1;
  Handle_StepFEA_HArray1OfNodeRepresentation_2: typeof Handle_StepFEA_HArray1OfNodeRepresentation_2;
  Handle_StepFEA_HArray1OfNodeRepresentation_3: typeof Handle_StepFEA_HArray1OfNodeRepresentation_3;
  Handle_StepFEA_HArray1OfNodeRepresentation_4: typeof Handle_StepFEA_HArray1OfNodeRepresentation_4;
  Handle_StepFEA_ElementRepresentation_1: typeof Handle_StepFEA_ElementRepresentation_1;
  Handle_StepFEA_ElementRepresentation_2: typeof Handle_StepFEA_ElementRepresentation_2;
  Handle_StepFEA_ElementRepresentation_3: typeof Handle_StepFEA_ElementRepresentation_3;
  Handle_StepFEA_ElementRepresentation_4: typeof Handle_StepFEA_ElementRepresentation_4;
  Handle_StepFEA_HSequenceOfElementRepresentation_1: typeof Handle_StepFEA_HSequenceOfElementRepresentation_1;
  Handle_StepFEA_HSequenceOfElementRepresentation_2: typeof Handle_StepFEA_HSequenceOfElementRepresentation_2;
  Handle_StepFEA_HSequenceOfElementRepresentation_3: typeof Handle_StepFEA_HSequenceOfElementRepresentation_3;
  Handle_StepFEA_HSequenceOfElementRepresentation_4: typeof Handle_StepFEA_HSequenceOfElementRepresentation_4;
  Handle_StepElement_CurveElementSectionDefinition_1: typeof Handle_StepElement_CurveElementSectionDefinition_1;
  Handle_StepElement_CurveElementSectionDefinition_2: typeof Handle_StepElement_CurveElementSectionDefinition_2;
  Handle_StepElement_CurveElementSectionDefinition_3: typeof Handle_StepElement_CurveElementSectionDefinition_3;
  Handle_StepElement_CurveElementSectionDefinition_4: typeof Handle_StepElement_CurveElementSectionDefinition_4;
  Handle_StepElement_HSequenceOfCurveElementSectionDefinition_1: typeof Handle_StepElement_HSequenceOfCurveElementSectionDefinition_1;
  Handle_StepElement_HSequenceOfCurveElementSectionDefinition_2: typeof Handle_StepElement_HSequenceOfCurveElementSectionDefinition_2;
  Handle_StepElement_HSequenceOfCurveElementSectionDefinition_3: typeof Handle_StepElement_HSequenceOfCurveElementSectionDefinition_3;
  Handle_StepElement_HSequenceOfCurveElementSectionDefinition_4: typeof Handle_StepElement_HSequenceOfCurveElementSectionDefinition_4;
  Handle_StepElement_AnalysisItemWithinRepresentation_1: typeof Handle_StepElement_AnalysisItemWithinRepresentation_1;
  Handle_StepElement_AnalysisItemWithinRepresentation_2: typeof Handle_StepElement_AnalysisItemWithinRepresentation_2;
  Handle_StepElement_AnalysisItemWithinRepresentation_3: typeof Handle_StepElement_AnalysisItemWithinRepresentation_3;
  Handle_StepElement_AnalysisItemWithinRepresentation_4: typeof Handle_StepElement_AnalysisItemWithinRepresentation_4;
  Handle_StepElement_CurveElementEndReleasePacket_1: typeof Handle_StepElement_CurveElementEndReleasePacket_1;
  Handle_StepElement_CurveElementEndReleasePacket_2: typeof Handle_StepElement_CurveElementEndReleasePacket_2;
  Handle_StepElement_CurveElementEndReleasePacket_3: typeof Handle_StepElement_CurveElementEndReleasePacket_3;
  Handle_StepElement_CurveElementEndReleasePacket_4: typeof Handle_StepElement_CurveElementEndReleasePacket_4;
  Handle_StepElement_CurveElementPurposeMember_1: typeof Handle_StepElement_CurveElementPurposeMember_1;
  Handle_StepElement_CurveElementPurposeMember_2: typeof Handle_StepElement_CurveElementPurposeMember_2;
  Handle_StepElement_CurveElementPurposeMember_3: typeof Handle_StepElement_CurveElementPurposeMember_3;
  Handle_StepElement_CurveElementPurposeMember_4: typeof Handle_StepElement_CurveElementPurposeMember_4;
  Handle_StepElement_HSequenceOfCurveElementPurposeMember_1: typeof Handle_StepElement_HSequenceOfCurveElementPurposeMember_1;
  Handle_StepElement_HSequenceOfCurveElementPurposeMember_2: typeof Handle_StepElement_HSequenceOfCurveElementPurposeMember_2;
  Handle_StepElement_HSequenceOfCurveElementPurposeMember_3: typeof Handle_StepElement_HSequenceOfCurveElementPurposeMember_3;
  Handle_StepElement_HSequenceOfCurveElementPurposeMember_4: typeof Handle_StepElement_HSequenceOfCurveElementPurposeMember_4;
  Handle_StepElement_SurfaceElementPurposeMember_1: typeof Handle_StepElement_SurfaceElementPurposeMember_1;
  Handle_StepElement_SurfaceElementPurposeMember_2: typeof Handle_StepElement_SurfaceElementPurposeMember_2;
  Handle_StepElement_SurfaceElementPurposeMember_3: typeof Handle_StepElement_SurfaceElementPurposeMember_3;
  Handle_StepElement_SurfaceElementPurposeMember_4: typeof Handle_StepElement_SurfaceElementPurposeMember_4;
  Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_1: typeof Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_1;
  Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_2: typeof Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_2;
  Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_3: typeof Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_3;
  Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_4: typeof Handle_StepElement_HSequenceOfSurfaceElementPurposeMember_4;
  StepElement_Array1OfMeasureOrUnspecifiedValue_1: typeof StepElement_Array1OfMeasureOrUnspecifiedValue_1;
  StepElement_Array1OfMeasureOrUnspecifiedValue_2: typeof StepElement_Array1OfMeasureOrUnspecifiedValue_2;
  StepElement_Array1OfMeasureOrUnspecifiedValue_3: typeof StepElement_Array1OfMeasureOrUnspecifiedValue_3;
  StepElement_Array1OfMeasureOrUnspecifiedValue_4: typeof StepElement_Array1OfMeasureOrUnspecifiedValue_4;
  StepElement_Array1OfMeasureOrUnspecifiedValue_5: typeof StepElement_Array1OfMeasureOrUnspecifiedValue_5;
  Handle_StepElement_SurfaceSection_1: typeof Handle_StepElement_SurfaceSection_1;
  Handle_StepElement_SurfaceSection_2: typeof Handle_StepElement_SurfaceSection_2;
  Handle_StepElement_SurfaceSection_3: typeof Handle_StepElement_SurfaceSection_3;
  Handle_StepElement_SurfaceSection_4: typeof Handle_StepElement_SurfaceSection_4;
  StepElement_Array1OfVolumeElementPurpose_1: typeof StepElement_Array1OfVolumeElementPurpose_1;
  StepElement_Array1OfVolumeElementPurpose_2: typeof StepElement_Array1OfVolumeElementPurpose_2;
  StepElement_Array1OfVolumeElementPurpose_3: typeof StepElement_Array1OfVolumeElementPurpose_3;
  StepElement_Array1OfVolumeElementPurpose_4: typeof StepElement_Array1OfVolumeElementPurpose_4;
  StepElement_Array1OfVolumeElementPurpose_5: typeof StepElement_Array1OfVolumeElementPurpose_5;
  Handle_StepElement_VolumeElementPurposeMember_1: typeof Handle_StepElement_VolumeElementPurposeMember_1;
  Handle_StepElement_VolumeElementPurposeMember_2: typeof Handle_StepElement_VolumeElementPurposeMember_2;
  Handle_StepElement_VolumeElementPurposeMember_3: typeof Handle_StepElement_VolumeElementPurposeMember_3;
  Handle_StepElement_VolumeElementPurposeMember_4: typeof Handle_StepElement_VolumeElementPurposeMember_4;
  StepElement_Array2OfSurfaceElementPurpose_1: typeof StepElement_Array2OfSurfaceElementPurpose_1;
  StepElement_Array2OfSurfaceElementPurpose_2: typeof StepElement_Array2OfSurfaceElementPurpose_2;
  StepElement_Array2OfSurfaceElementPurpose_3: typeof StepElement_Array2OfSurfaceElementPurpose_3;
  StepElement_Array2OfSurfaceElementPurpose_4: typeof StepElement_Array2OfSurfaceElementPurpose_4;
  StepElement_Array2OfSurfaceElementPurpose_5: typeof StepElement_Array2OfSurfaceElementPurpose_5;
  Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_1: typeof Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_1;
  Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_2: typeof Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_2;
  Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_3: typeof Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_3;
  Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_4: typeof Handle_StepElement_HArray1OfHSequenceOfCurveElementPurposeMember_4;
  Handle_StepElement_ElementDescriptor_1: typeof Handle_StepElement_ElementDescriptor_1;
  Handle_StepElement_ElementDescriptor_2: typeof Handle_StepElement_ElementDescriptor_2;
  Handle_StepElement_ElementDescriptor_3: typeof Handle_StepElement_ElementDescriptor_3;
  Handle_StepElement_ElementDescriptor_4: typeof Handle_StepElement_ElementDescriptor_4;
  Handle_StepElement_Curve3dElementDescriptor_1: typeof Handle_StepElement_Curve3dElementDescriptor_1;
  Handle_StepElement_Curve3dElementDescriptor_2: typeof Handle_StepElement_Curve3dElementDescriptor_2;
  Handle_StepElement_Curve3dElementDescriptor_3: typeof Handle_StepElement_Curve3dElementDescriptor_3;
  Handle_StepElement_Curve3dElementDescriptor_4: typeof Handle_StepElement_Curve3dElementDescriptor_4;
  Handle_StepElement_CurveElementFreedomMember_1: typeof Handle_StepElement_CurveElementFreedomMember_1;
  Handle_StepElement_CurveElementFreedomMember_2: typeof Handle_StepElement_CurveElementFreedomMember_2;
  Handle_StepElement_CurveElementFreedomMember_3: typeof Handle_StepElement_CurveElementFreedomMember_3;
  Handle_StepElement_CurveElementFreedomMember_4: typeof Handle_StepElement_CurveElementFreedomMember_4;
  Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_1: typeof Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_1;
  Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_2: typeof Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_2;
  Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_3: typeof Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_3;
  Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_4: typeof Handle_StepElement_HArray1OfMeasureOrUnspecifiedValue_4;
  Handle_StepElement_CurveElementSectionDerivedDefinitions_1: typeof Handle_StepElement_CurveElementSectionDerivedDefinitions_1;
  Handle_StepElement_CurveElementSectionDerivedDefinitions_2: typeof Handle_StepElement_CurveElementSectionDerivedDefinitions_2;
  Handle_StepElement_CurveElementSectionDerivedDefinitions_3: typeof Handle_StepElement_CurveElementSectionDerivedDefinitions_3;
  Handle_StepElement_CurveElementSectionDerivedDefinitions_4: typeof Handle_StepElement_CurveElementSectionDerivedDefinitions_4;
  Handle_StepElement_ElementAspectMember_1: typeof Handle_StepElement_ElementAspectMember_1;
  Handle_StepElement_ElementAspectMember_2: typeof Handle_StepElement_ElementAspectMember_2;
  Handle_StepElement_ElementAspectMember_3: typeof Handle_StepElement_ElementAspectMember_3;
  Handle_StepElement_ElementAspectMember_4: typeof Handle_StepElement_ElementAspectMember_4;
  Handle_StepElement_HArray1OfCurveElementEndReleasePacket_1: typeof Handle_StepElement_HArray1OfCurveElementEndReleasePacket_1;
  Handle_StepElement_HArray1OfCurveElementEndReleasePacket_2: typeof Handle_StepElement_HArray1OfCurveElementEndReleasePacket_2;
  Handle_StepElement_HArray1OfCurveElementEndReleasePacket_3: typeof Handle_StepElement_HArray1OfCurveElementEndReleasePacket_3;
  Handle_StepElement_HArray1OfCurveElementEndReleasePacket_4: typeof Handle_StepElement_HArray1OfCurveElementEndReleasePacket_4;
  Handle_StepElement_HArray1OfCurveElementSectionDefinition_1: typeof Handle_StepElement_HArray1OfCurveElementSectionDefinition_1;
  Handle_StepElement_HArray1OfCurveElementSectionDefinition_2: typeof Handle_StepElement_HArray1OfCurveElementSectionDefinition_2;
  Handle_StepElement_HArray1OfCurveElementSectionDefinition_3: typeof Handle_StepElement_HArray1OfCurveElementSectionDefinition_3;
  Handle_StepElement_HArray1OfCurveElementSectionDefinition_4: typeof Handle_StepElement_HArray1OfCurveElementSectionDefinition_4;
  Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_1: typeof Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_1;
  Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_2: typeof Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_2;
  Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_3: typeof Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_3;
  Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_4: typeof Handle_StepElement_HArray1OfHSequenceOfSurfaceElementPurposeMember_4;
  Handle_StepElement_HArray1OfSurfaceSection_1: typeof Handle_StepElement_HArray1OfSurfaceSection_1;
  Handle_StepElement_HArray1OfSurfaceSection_2: typeof Handle_StepElement_HArray1OfSurfaceSection_2;
  Handle_StepElement_HArray1OfSurfaceSection_3: typeof Handle_StepElement_HArray1OfSurfaceSection_3;
  Handle_StepElement_HArray1OfSurfaceSection_4: typeof Handle_StepElement_HArray1OfSurfaceSection_4;
  Handle_StepElement_HArray1OfVolumeElementPurpose_1: typeof Handle_StepElement_HArray1OfVolumeElementPurpose_1;
  Handle_StepElement_HArray1OfVolumeElementPurpose_2: typeof Handle_StepElement_HArray1OfVolumeElementPurpose_2;
  Handle_StepElement_HArray1OfVolumeElementPurpose_3: typeof Handle_StepElement_HArray1OfVolumeElementPurpose_3;
  Handle_StepElement_HArray1OfVolumeElementPurpose_4: typeof Handle_StepElement_HArray1OfVolumeElementPurpose_4;
  Handle_StepElement_HArray1OfVolumeElementPurposeMember_1: typeof Handle_StepElement_HArray1OfVolumeElementPurposeMember_1;
  Handle_StepElement_HArray1OfVolumeElementPurposeMember_2: typeof Handle_StepElement_HArray1OfVolumeElementPurposeMember_2;
  Handle_StepElement_HArray1OfVolumeElementPurposeMember_3: typeof Handle_StepElement_HArray1OfVolumeElementPurposeMember_3;
  Handle_StepElement_HArray1OfVolumeElementPurposeMember_4: typeof Handle_StepElement_HArray1OfVolumeElementPurposeMember_4;
  Handle_StepElement_HArray2OfCurveElementPurposeMember_1: typeof Handle_StepElement_HArray2OfCurveElementPurposeMember_1;
  Handle_StepElement_HArray2OfCurveElementPurposeMember_2: typeof Handle_StepElement_HArray2OfCurveElementPurposeMember_2;
  Handle_StepElement_HArray2OfCurveElementPurposeMember_3: typeof Handle_StepElement_HArray2OfCurveElementPurposeMember_3;
  Handle_StepElement_HArray2OfCurveElementPurposeMember_4: typeof Handle_StepElement_HArray2OfCurveElementPurposeMember_4;
  Handle_StepElement_HArray2OfSurfaceElementPurpose_1: typeof Handle_StepElement_HArray2OfSurfaceElementPurpose_1;
  Handle_StepElement_HArray2OfSurfaceElementPurpose_2: typeof Handle_StepElement_HArray2OfSurfaceElementPurpose_2;
  Handle_StepElement_HArray2OfSurfaceElementPurpose_3: typeof Handle_StepElement_HArray2OfSurfaceElementPurpose_3;
  Handle_StepElement_HArray2OfSurfaceElementPurpose_4: typeof Handle_StepElement_HArray2OfSurfaceElementPurpose_4;
  Handle_StepElement_HArray2OfSurfaceElementPurposeMember_1: typeof Handle_StepElement_HArray2OfSurfaceElementPurposeMember_1;
  Handle_StepElement_HArray2OfSurfaceElementPurposeMember_2: typeof Handle_StepElement_HArray2OfSurfaceElementPurposeMember_2;
  Handle_StepElement_HArray2OfSurfaceElementPurposeMember_3: typeof Handle_StepElement_HArray2OfSurfaceElementPurposeMember_3;
  Handle_StepElement_HArray2OfSurfaceElementPurposeMember_4: typeof Handle_StepElement_HArray2OfSurfaceElementPurposeMember_4;
  Handle_StepElement_MeasureOrUnspecifiedValueMember_1: typeof Handle_StepElement_MeasureOrUnspecifiedValueMember_1;
  Handle_StepElement_MeasureOrUnspecifiedValueMember_2: typeof Handle_StepElement_MeasureOrUnspecifiedValueMember_2;
  Handle_StepElement_MeasureOrUnspecifiedValueMember_3: typeof Handle_StepElement_MeasureOrUnspecifiedValueMember_3;
  Handle_StepElement_MeasureOrUnspecifiedValueMember_4: typeof Handle_StepElement_MeasureOrUnspecifiedValueMember_4;
  Handle_StepElement_Surface3dElementDescriptor_1: typeof Handle_StepElement_Surface3dElementDescriptor_1;
  Handle_StepElement_Surface3dElementDescriptor_2: typeof Handle_StepElement_Surface3dElementDescriptor_2;
  Handle_StepElement_Surface3dElementDescriptor_3: typeof Handle_StepElement_Surface3dElementDescriptor_3;
  Handle_StepElement_Surface3dElementDescriptor_4: typeof Handle_StepElement_Surface3dElementDescriptor_4;
  Handle_StepElement_SurfaceElementProperty_1: typeof Handle_StepElement_SurfaceElementProperty_1;
  Handle_StepElement_SurfaceElementProperty_2: typeof Handle_StepElement_SurfaceElementProperty_2;
  Handle_StepElement_SurfaceElementProperty_3: typeof Handle_StepElement_SurfaceElementProperty_3;
  Handle_StepElement_SurfaceElementProperty_4: typeof Handle_StepElement_SurfaceElementProperty_4;
  Handle_StepElement_SurfaceSectionField_1: typeof Handle_StepElement_SurfaceSectionField_1;
  Handle_StepElement_SurfaceSectionField_2: typeof Handle_StepElement_SurfaceSectionField_2;
  Handle_StepElement_SurfaceSectionField_3: typeof Handle_StepElement_SurfaceSectionField_3;
  Handle_StepElement_SurfaceSectionField_4: typeof Handle_StepElement_SurfaceSectionField_4;
  Handle_StepElement_SurfaceSectionFieldConstant_1: typeof Handle_StepElement_SurfaceSectionFieldConstant_1;
  Handle_StepElement_SurfaceSectionFieldConstant_2: typeof Handle_StepElement_SurfaceSectionFieldConstant_2;
  Handle_StepElement_SurfaceSectionFieldConstant_3: typeof Handle_StepElement_SurfaceSectionFieldConstant_3;
  Handle_StepElement_SurfaceSectionFieldConstant_4: typeof Handle_StepElement_SurfaceSectionFieldConstant_4;
  Handle_StepElement_SurfaceSectionFieldVarying_1: typeof Handle_StepElement_SurfaceSectionFieldVarying_1;
  Handle_StepElement_SurfaceSectionFieldVarying_2: typeof Handle_StepElement_SurfaceSectionFieldVarying_2;
  Handle_StepElement_SurfaceSectionFieldVarying_3: typeof Handle_StepElement_SurfaceSectionFieldVarying_3;
  Handle_StepElement_SurfaceSectionFieldVarying_4: typeof Handle_StepElement_SurfaceSectionFieldVarying_4;
  Handle_StepElement_UniformSurfaceSection_1: typeof Handle_StepElement_UniformSurfaceSection_1;
  Handle_StepElement_UniformSurfaceSection_2: typeof Handle_StepElement_UniformSurfaceSection_2;
  Handle_StepElement_UniformSurfaceSection_3: typeof Handle_StepElement_UniformSurfaceSection_3;
  Handle_StepElement_UniformSurfaceSection_4: typeof Handle_StepElement_UniformSurfaceSection_4;
  Handle_StepElement_Volume3dElementDescriptor_1: typeof Handle_StepElement_Volume3dElementDescriptor_1;
  Handle_StepElement_Volume3dElementDescriptor_2: typeof Handle_StepElement_Volume3dElementDescriptor_2;
  Handle_StepElement_Volume3dElementDescriptor_3: typeof Handle_StepElement_Volume3dElementDescriptor_3;
  Handle_StepElement_Volume3dElementDescriptor_4: typeof Handle_StepElement_Volume3dElementDescriptor_4;
  Handle_StepFEA_FeaRepresentationItem_1: typeof Handle_StepFEA_FeaRepresentationItem_1;
  Handle_StepFEA_FeaRepresentationItem_2: typeof Handle_StepFEA_FeaRepresentationItem_2;
  Handle_StepFEA_FeaRepresentationItem_3: typeof Handle_StepFEA_FeaRepresentationItem_3;
  Handle_StepFEA_FeaRepresentationItem_4: typeof Handle_StepFEA_FeaRepresentationItem_4;
  Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_1: typeof Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_1;
  Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_2: typeof Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_2;
  Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_3: typeof Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_3;
  Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_4: typeof Handle_StepFEA_AlignedCurve3dElementCoordinateSystem_4;
  Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_1: typeof Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_1;
  Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_2: typeof Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_2;
  Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_3: typeof Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_3;
  Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_4: typeof Handle_StepFEA_AlignedSurface3dElementCoordinateSystem_4;
  Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_1: typeof Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_1;
  Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_2: typeof Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_2;
  Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_3: typeof Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_3;
  Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_4: typeof Handle_StepFEA_ArbitraryVolume3dElementCoordinateSystem_4;
  Handle_StepFEA_CurveElementEndOffset_1: typeof Handle_StepFEA_CurveElementEndOffset_1;
  Handle_StepFEA_CurveElementEndOffset_2: typeof Handle_StepFEA_CurveElementEndOffset_2;
  Handle_StepFEA_CurveElementEndOffset_3: typeof Handle_StepFEA_CurveElementEndOffset_3;
  Handle_StepFEA_CurveElementEndOffset_4: typeof Handle_StepFEA_CurveElementEndOffset_4;
  Handle_StepFEA_CurveElementEndRelease_1: typeof Handle_StepFEA_CurveElementEndRelease_1;
  Handle_StepFEA_CurveElementEndRelease_2: typeof Handle_StepFEA_CurveElementEndRelease_2;
  Handle_StepFEA_CurveElementEndRelease_3: typeof Handle_StepFEA_CurveElementEndRelease_3;
  Handle_StepFEA_CurveElementEndRelease_4: typeof Handle_StepFEA_CurveElementEndRelease_4;
  Handle_StepFEA_CurveElementInterval_1: typeof Handle_StepFEA_CurveElementInterval_1;
  Handle_StepFEA_CurveElementInterval_2: typeof Handle_StepFEA_CurveElementInterval_2;
  Handle_StepFEA_CurveElementInterval_3: typeof Handle_StepFEA_CurveElementInterval_3;
  Handle_StepFEA_CurveElementInterval_4: typeof Handle_StepFEA_CurveElementInterval_4;
  StepFEA_Array1OfDegreeOfFreedom_1: typeof StepFEA_Array1OfDegreeOfFreedom_1;
  StepFEA_Array1OfDegreeOfFreedom_2: typeof StepFEA_Array1OfDegreeOfFreedom_2;
  StepFEA_Array1OfDegreeOfFreedom_3: typeof StepFEA_Array1OfDegreeOfFreedom_3;
  StepFEA_Array1OfDegreeOfFreedom_4: typeof StepFEA_Array1OfDegreeOfFreedom_4;
  StepFEA_Array1OfDegreeOfFreedom_5: typeof StepFEA_Array1OfDegreeOfFreedom_5;
  Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_1: typeof Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_1;
  Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_2: typeof Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_2;
  Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_3: typeof Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_3;
  Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_4: typeof Handle_StepFEA_ConstantSurface3dElementCoordinateSystem_4;
  Handle_StepFEA_HArray1OfCurveElementInterval_1: typeof Handle_StepFEA_HArray1OfCurveElementInterval_1;
  Handle_StepFEA_HArray1OfCurveElementInterval_2: typeof Handle_StepFEA_HArray1OfCurveElementInterval_2;
  Handle_StepFEA_HArray1OfCurveElementInterval_3: typeof Handle_StepFEA_HArray1OfCurveElementInterval_3;
  Handle_StepFEA_HArray1OfCurveElementInterval_4: typeof Handle_StepFEA_HArray1OfCurveElementInterval_4;
  Handle_StepFEA_HArray1OfCurveElementEndOffset_1: typeof Handle_StepFEA_HArray1OfCurveElementEndOffset_1;
  Handle_StepFEA_HArray1OfCurveElementEndOffset_2: typeof Handle_StepFEA_HArray1OfCurveElementEndOffset_2;
  Handle_StepFEA_HArray1OfCurveElementEndOffset_3: typeof Handle_StepFEA_HArray1OfCurveElementEndOffset_3;
  Handle_StepFEA_HArray1OfCurveElementEndOffset_4: typeof Handle_StepFEA_HArray1OfCurveElementEndOffset_4;
  Handle_StepFEA_HArray1OfCurveElementEndRelease_1: typeof Handle_StepFEA_HArray1OfCurveElementEndRelease_1;
  Handle_StepFEA_HArray1OfCurveElementEndRelease_2: typeof Handle_StepFEA_HArray1OfCurveElementEndRelease_2;
  Handle_StepFEA_HArray1OfCurveElementEndRelease_3: typeof Handle_StepFEA_HArray1OfCurveElementEndRelease_3;
  Handle_StepFEA_HArray1OfCurveElementEndRelease_4: typeof Handle_StepFEA_HArray1OfCurveElementEndRelease_4;
  Handle_StepFEA_Curve3dElementProperty_1: typeof Handle_StepFEA_Curve3dElementProperty_1;
  Handle_StepFEA_Curve3dElementProperty_2: typeof Handle_StepFEA_Curve3dElementProperty_2;
  Handle_StepFEA_Curve3dElementProperty_3: typeof Handle_StepFEA_Curve3dElementProperty_3;
  Handle_StepFEA_Curve3dElementProperty_4: typeof Handle_StepFEA_Curve3dElementProperty_4;
  Handle_StepFEA_Curve3dElementRepresentation_1: typeof Handle_StepFEA_Curve3dElementRepresentation_1;
  Handle_StepFEA_Curve3dElementRepresentation_2: typeof Handle_StepFEA_Curve3dElementRepresentation_2;
  Handle_StepFEA_Curve3dElementRepresentation_3: typeof Handle_StepFEA_Curve3dElementRepresentation_3;
  Handle_StepFEA_Curve3dElementRepresentation_4: typeof Handle_StepFEA_Curve3dElementRepresentation_4;
  Handle_StepFEA_CurveElementIntervalConstant_1: typeof Handle_StepFEA_CurveElementIntervalConstant_1;
  Handle_StepFEA_CurveElementIntervalConstant_2: typeof Handle_StepFEA_CurveElementIntervalConstant_2;
  Handle_StepFEA_CurveElementIntervalConstant_3: typeof Handle_StepFEA_CurveElementIntervalConstant_3;
  Handle_StepFEA_CurveElementIntervalConstant_4: typeof Handle_StepFEA_CurveElementIntervalConstant_4;
  Handle_StepFEA_CurveElementIntervalLinearlyVarying_1: typeof Handle_StepFEA_CurveElementIntervalLinearlyVarying_1;
  Handle_StepFEA_CurveElementIntervalLinearlyVarying_2: typeof Handle_StepFEA_CurveElementIntervalLinearlyVarying_2;
  Handle_StepFEA_CurveElementIntervalLinearlyVarying_3: typeof Handle_StepFEA_CurveElementIntervalLinearlyVarying_3;
  Handle_StepFEA_CurveElementIntervalLinearlyVarying_4: typeof Handle_StepFEA_CurveElementIntervalLinearlyVarying_4;
  Handle_StepFEA_CurveElementLocation_1: typeof Handle_StepFEA_CurveElementLocation_1;
  Handle_StepFEA_CurveElementLocation_2: typeof Handle_StepFEA_CurveElementLocation_2;
  Handle_StepFEA_CurveElementLocation_3: typeof Handle_StepFEA_CurveElementLocation_3;
  Handle_StepFEA_CurveElementLocation_4: typeof Handle_StepFEA_CurveElementLocation_4;
  Handle_StepFEA_DegreeOfFreedomMember_1: typeof Handle_StepFEA_DegreeOfFreedomMember_1;
  Handle_StepFEA_DegreeOfFreedomMember_2: typeof Handle_StepFEA_DegreeOfFreedomMember_2;
  Handle_StepFEA_DegreeOfFreedomMember_3: typeof Handle_StepFEA_DegreeOfFreedomMember_3;
  Handle_StepFEA_DegreeOfFreedomMember_4: typeof Handle_StepFEA_DegreeOfFreedomMember_4;
  Handle_StepFEA_DummyNode_1: typeof Handle_StepFEA_DummyNode_1;
  Handle_StepFEA_DummyNode_2: typeof Handle_StepFEA_DummyNode_2;
  Handle_StepFEA_DummyNode_3: typeof Handle_StepFEA_DummyNode_3;
  Handle_StepFEA_DummyNode_4: typeof Handle_StepFEA_DummyNode_4;
  Handle_StepFEA_HArray1OfElementRepresentation_1: typeof Handle_StepFEA_HArray1OfElementRepresentation_1;
  Handle_StepFEA_HArray1OfElementRepresentation_2: typeof Handle_StepFEA_HArray1OfElementRepresentation_2;
  Handle_StepFEA_HArray1OfElementRepresentation_3: typeof Handle_StepFEA_HArray1OfElementRepresentation_3;
  Handle_StepFEA_HArray1OfElementRepresentation_4: typeof Handle_StepFEA_HArray1OfElementRepresentation_4;
  Handle_StepFEA_FeaGroup_1: typeof Handle_StepFEA_FeaGroup_1;
  Handle_StepFEA_FeaGroup_2: typeof Handle_StepFEA_FeaGroup_2;
  Handle_StepFEA_FeaGroup_3: typeof Handle_StepFEA_FeaGroup_3;
  Handle_StepFEA_FeaGroup_4: typeof Handle_StepFEA_FeaGroup_4;
  Handle_StepFEA_ElementGroup_1: typeof Handle_StepFEA_ElementGroup_1;
  Handle_StepFEA_ElementGroup_2: typeof Handle_StepFEA_ElementGroup_2;
  Handle_StepFEA_ElementGroup_3: typeof Handle_StepFEA_ElementGroup_3;
  Handle_StepFEA_ElementGroup_4: typeof Handle_StepFEA_ElementGroup_4;
  Handle_StepFEA_FeaMaterialPropertyRepresentationItem_1: typeof Handle_StepFEA_FeaMaterialPropertyRepresentationItem_1;
  Handle_StepFEA_FeaMaterialPropertyRepresentationItem_2: typeof Handle_StepFEA_FeaMaterialPropertyRepresentationItem_2;
  Handle_StepFEA_FeaMaterialPropertyRepresentationItem_3: typeof Handle_StepFEA_FeaMaterialPropertyRepresentationItem_3;
  Handle_StepFEA_FeaMaterialPropertyRepresentationItem_4: typeof Handle_StepFEA_FeaMaterialPropertyRepresentationItem_4;
  Handle_StepFEA_FeaAreaDensity_1: typeof Handle_StepFEA_FeaAreaDensity_1;
  Handle_StepFEA_FeaAreaDensity_2: typeof Handle_StepFEA_FeaAreaDensity_2;
  Handle_StepFEA_FeaAreaDensity_3: typeof Handle_StepFEA_FeaAreaDensity_3;
  Handle_StepFEA_FeaAreaDensity_4: typeof Handle_StepFEA_FeaAreaDensity_4;
  Handle_StepFEA_FeaAxis2Placement3d_1: typeof Handle_StepFEA_FeaAxis2Placement3d_1;
  Handle_StepFEA_FeaAxis2Placement3d_2: typeof Handle_StepFEA_FeaAxis2Placement3d_2;
  Handle_StepFEA_FeaAxis2Placement3d_3: typeof Handle_StepFEA_FeaAxis2Placement3d_3;
  Handle_StepFEA_FeaAxis2Placement3d_4: typeof Handle_StepFEA_FeaAxis2Placement3d_4;
  Handle_StepFEA_FeaCurveSectionGeometricRelationship_1: typeof Handle_StepFEA_FeaCurveSectionGeometricRelationship_1;
  Handle_StepFEA_FeaCurveSectionGeometricRelationship_2: typeof Handle_StepFEA_FeaCurveSectionGeometricRelationship_2;
  Handle_StepFEA_FeaCurveSectionGeometricRelationship_3: typeof Handle_StepFEA_FeaCurveSectionGeometricRelationship_3;
  Handle_StepFEA_FeaCurveSectionGeometricRelationship_4: typeof Handle_StepFEA_FeaCurveSectionGeometricRelationship_4;
  Handle_StepFEA_FeaLinearElasticity_1: typeof Handle_StepFEA_FeaLinearElasticity_1;
  Handle_StepFEA_FeaLinearElasticity_2: typeof Handle_StepFEA_FeaLinearElasticity_2;
  Handle_StepFEA_FeaLinearElasticity_3: typeof Handle_StepFEA_FeaLinearElasticity_3;
  Handle_StepFEA_FeaLinearElasticity_4: typeof Handle_StepFEA_FeaLinearElasticity_4;
  Handle_StepFEA_FeaMassDensity_1: typeof Handle_StepFEA_FeaMassDensity_1;
  Handle_StepFEA_FeaMassDensity_2: typeof Handle_StepFEA_FeaMassDensity_2;
  Handle_StepFEA_FeaMassDensity_3: typeof Handle_StepFEA_FeaMassDensity_3;
  Handle_StepFEA_FeaMassDensity_4: typeof Handle_StepFEA_FeaMassDensity_4;
  Handle_StepFEA_FeaMaterialPropertyRepresentation_1: typeof Handle_StepFEA_FeaMaterialPropertyRepresentation_1;
  Handle_StepFEA_FeaMaterialPropertyRepresentation_2: typeof Handle_StepFEA_FeaMaterialPropertyRepresentation_2;
  Handle_StepFEA_FeaMaterialPropertyRepresentation_3: typeof Handle_StepFEA_FeaMaterialPropertyRepresentation_3;
  Handle_StepFEA_FeaMaterialPropertyRepresentation_4: typeof Handle_StepFEA_FeaMaterialPropertyRepresentation_4;
  Handle_StepFEA_FeaModel_1: typeof Handle_StepFEA_FeaModel_1;
  Handle_StepFEA_FeaModel_2: typeof Handle_StepFEA_FeaModel_2;
  Handle_StepFEA_FeaModel_3: typeof Handle_StepFEA_FeaModel_3;
  Handle_StepFEA_FeaModel_4: typeof Handle_StepFEA_FeaModel_4;
  Handle_StepFEA_FeaModel3d_1: typeof Handle_StepFEA_FeaModel3d_1;
  Handle_StepFEA_FeaModel3d_2: typeof Handle_StepFEA_FeaModel3d_2;
  Handle_StepFEA_FeaModel3d_3: typeof Handle_StepFEA_FeaModel3d_3;
  Handle_StepFEA_FeaModel3d_4: typeof Handle_StepFEA_FeaModel3d_4;
  Handle_StepFEA_FeaModelDefinition_1: typeof Handle_StepFEA_FeaModelDefinition_1;
  Handle_StepFEA_FeaModelDefinition_2: typeof Handle_StepFEA_FeaModelDefinition_2;
  Handle_StepFEA_FeaModelDefinition_3: typeof Handle_StepFEA_FeaModelDefinition_3;
  Handle_StepFEA_FeaModelDefinition_4: typeof Handle_StepFEA_FeaModelDefinition_4;
  Handle_StepFEA_FeaMoistureAbsorption_1: typeof Handle_StepFEA_FeaMoistureAbsorption_1;
  Handle_StepFEA_FeaMoistureAbsorption_2: typeof Handle_StepFEA_FeaMoistureAbsorption_2;
  Handle_StepFEA_FeaMoistureAbsorption_3: typeof Handle_StepFEA_FeaMoistureAbsorption_3;
  Handle_StepFEA_FeaMoistureAbsorption_4: typeof Handle_StepFEA_FeaMoistureAbsorption_4;
  Handle_StepFEA_FeaParametricPoint_1: typeof Handle_StepFEA_FeaParametricPoint_1;
  Handle_StepFEA_FeaParametricPoint_2: typeof Handle_StepFEA_FeaParametricPoint_2;
  Handle_StepFEA_FeaParametricPoint_3: typeof Handle_StepFEA_FeaParametricPoint_3;
  Handle_StepFEA_FeaParametricPoint_4: typeof Handle_StepFEA_FeaParametricPoint_4;
  Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_1: typeof Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_1;
  Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_2: typeof Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_2;
  Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_3: typeof Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_3;
  Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_4: typeof Handle_StepFEA_FeaSecantCoefficientOfLinearThermalExpansion_4;
  Handle_StepFEA_FeaShellBendingStiffness_1: typeof Handle_StepFEA_FeaShellBendingStiffness_1;
  Handle_StepFEA_FeaShellBendingStiffness_2: typeof Handle_StepFEA_FeaShellBendingStiffness_2;
  Handle_StepFEA_FeaShellBendingStiffness_3: typeof Handle_StepFEA_FeaShellBendingStiffness_3;
  Handle_StepFEA_FeaShellBendingStiffness_4: typeof Handle_StepFEA_FeaShellBendingStiffness_4;
  Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_1: typeof Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_1;
  Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_2: typeof Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_2;
  Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_3: typeof Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_3;
  Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_4: typeof Handle_StepFEA_FeaShellMembraneBendingCouplingStiffness_4;
  Handle_StepFEA_FeaShellMembraneStiffness_1: typeof Handle_StepFEA_FeaShellMembraneStiffness_1;
  Handle_StepFEA_FeaShellMembraneStiffness_2: typeof Handle_StepFEA_FeaShellMembraneStiffness_2;
  Handle_StepFEA_FeaShellMembraneStiffness_3: typeof Handle_StepFEA_FeaShellMembraneStiffness_3;
  Handle_StepFEA_FeaShellMembraneStiffness_4: typeof Handle_StepFEA_FeaShellMembraneStiffness_4;
  Handle_StepFEA_FeaShellShearStiffness_1: typeof Handle_StepFEA_FeaShellShearStiffness_1;
  Handle_StepFEA_FeaShellShearStiffness_2: typeof Handle_StepFEA_FeaShellShearStiffness_2;
  Handle_StepFEA_FeaShellShearStiffness_3: typeof Handle_StepFEA_FeaShellShearStiffness_3;
  Handle_StepFEA_FeaShellShearStiffness_4: typeof Handle_StepFEA_FeaShellShearStiffness_4;
  Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_1: typeof Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_1;
  Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_2: typeof Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_2;
  Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_3: typeof Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_3;
  Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_4: typeof Handle_StepFEA_FeaSurfaceSectionGeometricRelationship_4;
  Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_1: typeof Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_1;
  Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_2: typeof Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_2;
  Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_3: typeof Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_3;
  Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_4: typeof Handle_StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion_4;
  Handle_StepFEA_FreedomAndCoefficient_1: typeof Handle_StepFEA_FreedomAndCoefficient_1;
  Handle_StepFEA_FreedomAndCoefficient_2: typeof Handle_StepFEA_FreedomAndCoefficient_2;
  Handle_StepFEA_FreedomAndCoefficient_3: typeof Handle_StepFEA_FreedomAndCoefficient_3;
  Handle_StepFEA_FreedomAndCoefficient_4: typeof Handle_StepFEA_FreedomAndCoefficient_4;
  Handle_StepFEA_HArray1OfDegreeOfFreedom_1: typeof Handle_StepFEA_HArray1OfDegreeOfFreedom_1;
  Handle_StepFEA_HArray1OfDegreeOfFreedom_2: typeof Handle_StepFEA_HArray1OfDegreeOfFreedom_2;
  Handle_StepFEA_HArray1OfDegreeOfFreedom_3: typeof Handle_StepFEA_HArray1OfDegreeOfFreedom_3;
  Handle_StepFEA_HArray1OfDegreeOfFreedom_4: typeof Handle_StepFEA_HArray1OfDegreeOfFreedom_4;
  Handle_StepFEA_FreedomsList_1: typeof Handle_StepFEA_FreedomsList_1;
  Handle_StepFEA_FreedomsList_2: typeof Handle_StepFEA_FreedomsList_2;
  Handle_StepFEA_FreedomsList_3: typeof Handle_StepFEA_FreedomsList_3;
  Handle_StepFEA_FreedomsList_4: typeof Handle_StepFEA_FreedomsList_4;
  Handle_StepFEA_GeometricNode_1: typeof Handle_StepFEA_GeometricNode_1;
  Handle_StepFEA_GeometricNode_2: typeof Handle_StepFEA_GeometricNode_2;
  Handle_StepFEA_GeometricNode_3: typeof Handle_StepFEA_GeometricNode_3;
  Handle_StepFEA_GeometricNode_4: typeof Handle_StepFEA_GeometricNode_4;
  Handle_StepFEA_HSequenceOfCurve3dElementProperty_1: typeof Handle_StepFEA_HSequenceOfCurve3dElementProperty_1;
  Handle_StepFEA_HSequenceOfCurve3dElementProperty_2: typeof Handle_StepFEA_HSequenceOfCurve3dElementProperty_2;
  Handle_StepFEA_HSequenceOfCurve3dElementProperty_3: typeof Handle_StepFEA_HSequenceOfCurve3dElementProperty_3;
  Handle_StepFEA_HSequenceOfCurve3dElementProperty_4: typeof Handle_StepFEA_HSequenceOfCurve3dElementProperty_4;
  Handle_StepFEA_HSequenceOfNodeRepresentation_1: typeof Handle_StepFEA_HSequenceOfNodeRepresentation_1;
  Handle_StepFEA_HSequenceOfNodeRepresentation_2: typeof Handle_StepFEA_HSequenceOfNodeRepresentation_2;
  Handle_StepFEA_HSequenceOfNodeRepresentation_3: typeof Handle_StepFEA_HSequenceOfNodeRepresentation_3;
  Handle_StepFEA_HSequenceOfNodeRepresentation_4: typeof Handle_StepFEA_HSequenceOfNodeRepresentation_4;
  Handle_StepFEA_Node_1: typeof Handle_StepFEA_Node_1;
  Handle_StepFEA_Node_2: typeof Handle_StepFEA_Node_2;
  Handle_StepFEA_Node_3: typeof Handle_StepFEA_Node_3;
  Handle_StepFEA_Node_4: typeof Handle_StepFEA_Node_4;
  Handle_StepFEA_NodeDefinition_1: typeof Handle_StepFEA_NodeDefinition_1;
  Handle_StepFEA_NodeDefinition_2: typeof Handle_StepFEA_NodeDefinition_2;
  Handle_StepFEA_NodeDefinition_3: typeof Handle_StepFEA_NodeDefinition_3;
  Handle_StepFEA_NodeDefinition_4: typeof Handle_StepFEA_NodeDefinition_4;
  Handle_StepFEA_NodeGroup_1: typeof Handle_StepFEA_NodeGroup_1;
  Handle_StepFEA_NodeGroup_2: typeof Handle_StepFEA_NodeGroup_2;
  Handle_StepFEA_NodeGroup_3: typeof Handle_StepFEA_NodeGroup_3;
  Handle_StepFEA_NodeGroup_4: typeof Handle_StepFEA_NodeGroup_4;
  Handle_StepFEA_NodeSet_1: typeof Handle_StepFEA_NodeSet_1;
  Handle_StepFEA_NodeSet_2: typeof Handle_StepFEA_NodeSet_2;
  Handle_StepFEA_NodeSet_3: typeof Handle_StepFEA_NodeSet_3;
  Handle_StepFEA_NodeSet_4: typeof Handle_StepFEA_NodeSet_4;
  Handle_StepFEA_NodeWithSolutionCoordinateSystem_1: typeof Handle_StepFEA_NodeWithSolutionCoordinateSystem_1;
  Handle_StepFEA_NodeWithSolutionCoordinateSystem_2: typeof Handle_StepFEA_NodeWithSolutionCoordinateSystem_2;
  Handle_StepFEA_NodeWithSolutionCoordinateSystem_3: typeof Handle_StepFEA_NodeWithSolutionCoordinateSystem_3;
  Handle_StepFEA_NodeWithSolutionCoordinateSystem_4: typeof Handle_StepFEA_NodeWithSolutionCoordinateSystem_4;
  Handle_StepFEA_NodeWithVector_1: typeof Handle_StepFEA_NodeWithVector_1;
  Handle_StepFEA_NodeWithVector_2: typeof Handle_StepFEA_NodeWithVector_2;
  Handle_StepFEA_NodeWithVector_3: typeof Handle_StepFEA_NodeWithVector_3;
  Handle_StepFEA_NodeWithVector_4: typeof Handle_StepFEA_NodeWithVector_4;
  Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_1: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_1;
  Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_2: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_2;
  Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_3: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_3;
  Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_4: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateDirection_4;
  Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_1: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_1;
  Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_2: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_2;
  Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_3: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_3;
  Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_4: typeof Handle_StepFEA_ParametricCurve3dElementCoordinateSystem_4;
  Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_1: typeof Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_1;
  Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_2: typeof Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_2;
  Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_3: typeof Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_3;
  Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_4: typeof Handle_StepFEA_ParametricSurface3dElementCoordinateSystem_4;
  Handle_StepFEA_Surface3dElementRepresentation_1: typeof Handle_StepFEA_Surface3dElementRepresentation_1;
  Handle_StepFEA_Surface3dElementRepresentation_2: typeof Handle_StepFEA_Surface3dElementRepresentation_2;
  Handle_StepFEA_Surface3dElementRepresentation_3: typeof Handle_StepFEA_Surface3dElementRepresentation_3;
  Handle_StepFEA_Surface3dElementRepresentation_4: typeof Handle_StepFEA_Surface3dElementRepresentation_4;
  Handle_StepFEA_SymmetricTensor23dMember_1: typeof Handle_StepFEA_SymmetricTensor23dMember_1;
  Handle_StepFEA_SymmetricTensor23dMember_2: typeof Handle_StepFEA_SymmetricTensor23dMember_2;
  Handle_StepFEA_SymmetricTensor23dMember_3: typeof Handle_StepFEA_SymmetricTensor23dMember_3;
  Handle_StepFEA_SymmetricTensor23dMember_4: typeof Handle_StepFEA_SymmetricTensor23dMember_4;
  Handle_StepFEA_SymmetricTensor43dMember_1: typeof Handle_StepFEA_SymmetricTensor43dMember_1;
  Handle_StepFEA_SymmetricTensor43dMember_2: typeof Handle_StepFEA_SymmetricTensor43dMember_2;
  Handle_StepFEA_SymmetricTensor43dMember_3: typeof Handle_StepFEA_SymmetricTensor43dMember_3;
  Handle_StepFEA_SymmetricTensor43dMember_4: typeof Handle_StepFEA_SymmetricTensor43dMember_4;
  Handle_StepFEA_Volume3dElementRepresentation_1: typeof Handle_StepFEA_Volume3dElementRepresentation_1;
  Handle_StepFEA_Volume3dElementRepresentation_2: typeof Handle_StepFEA_Volume3dElementRepresentation_2;
  Handle_StepFEA_Volume3dElementRepresentation_3: typeof Handle_StepFEA_Volume3dElementRepresentation_3;
  Handle_StepFEA_Volume3dElementRepresentation_4: typeof Handle_StepFEA_Volume3dElementRepresentation_4;
  StepElement_ElementVolume: typeof StepElement_ElementVolume;
  StepElement_CurveEdge: typeof StepElement_CurveEdge;
  StepElement_EnumeratedCurveElementFreedom: typeof StepElement_EnumeratedCurveElementFreedom;
  StepElement_UnspecifiedValue: typeof StepElement_UnspecifiedValue;
  StepElement_EnumeratedVolumeElementPurpose: typeof StepElement_EnumeratedVolumeElementPurpose;
  StepElement_EnumeratedSurfaceElementPurpose: typeof StepElement_EnumeratedSurfaceElementPurpose;
  StepElement_ElementOrder: typeof StepElement_ElementOrder;
  StepElement_EnumeratedCurveElementPurpose: typeof StepElement_EnumeratedCurveElementPurpose;
  StepElement_Element2dShape: typeof StepElement_Element2dShape;
  StepElement_Volume3dElementShape: typeof StepElement_Volume3dElementShape;
  StepFEA_EnumeratedDegreeOfFreedom: typeof StepFEA_EnumeratedDegreeOfFreedom;
  StepFEA_CoordinateSystemType: typeof StepFEA_CoordinateSystemType;
  StepFEA_CurveEdge: typeof StepFEA_CurveEdge;
  StepFEA_ElementVolume: typeof StepFEA_ElementVolume;
  StepFEA_UnspecifiedValue: typeof StepFEA_UnspecifiedValue;
};
