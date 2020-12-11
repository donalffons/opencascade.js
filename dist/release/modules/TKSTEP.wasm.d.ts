declare const libName = "./modules/TKSTEP.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class GeomToStep_Root {
  constructor();
  IsDone(): Standard_Boolean;
}

export declare class GeomToStep_MakeAxis1Placement extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeAxis1Placement_1 extends GeomToStep_MakeAxis1Placement {
    constructor(A: gp_Ax1);
  }

  export declare class GeomToStep_MakeAxis1Placement_2 extends GeomToStep_MakeAxis1Placement {
    constructor(A: gp_Ax2d);
  }

  export declare class GeomToStep_MakeAxis1Placement_3 extends GeomToStep_MakeAxis1Placement {
    constructor(A: any);
  }

  export declare class GeomToStep_MakeAxis1Placement_4 extends GeomToStep_MakeAxis1Placement {
    constructor(A: any);
  }

export declare class GeomToStep_MakeAxis2Placement2d extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeAxis2Placement2d_1 extends GeomToStep_MakeAxis2Placement2d {
    constructor(A: gp_Ax2);
  }

  export declare class GeomToStep_MakeAxis2Placement2d_2 extends GeomToStep_MakeAxis2Placement2d {
    constructor(A: gp_Ax22d);
  }

export declare class GeomToStep_MakeAxis2Placement3d extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeAxis2Placement3d_1 extends GeomToStep_MakeAxis2Placement3d {
    constructor();
  }

  export declare class GeomToStep_MakeAxis2Placement3d_2 extends GeomToStep_MakeAxis2Placement3d {
    constructor(A: gp_Ax2);
  }

  export declare class GeomToStep_MakeAxis2Placement3d_3 extends GeomToStep_MakeAxis2Placement3d {
    constructor(A: gp_Ax3);
  }

  export declare class GeomToStep_MakeAxis2Placement3d_4 extends GeomToStep_MakeAxis2Placement3d {
    constructor(T: gp_Trsf);
  }

  export declare class GeomToStep_MakeAxis2Placement3d_5 extends GeomToStep_MakeAxis2Placement3d {
    constructor(A: any);
  }

export declare class GeomToStep_MakeBSplineCurveWithKnots extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeBSplineCurveWithKnots_1 extends GeomToStep_MakeBSplineCurveWithKnots {
    constructor(Bsplin: any);
  }

  export declare class GeomToStep_MakeBSplineCurveWithKnots_2 extends GeomToStep_MakeBSplineCurveWithKnots {
    constructor(Bsplin: any);
  }

export declare class GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve_1 extends GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve {
    constructor(Bsplin: any);
  }

  export declare class GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve_2 extends GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve {
    constructor(Bsplin: any);
  }

export declare class GeomToStep_MakeBSplineSurfaceWithKnots extends GeomToStep_Root {
  constructor(Bsplin: any)
  Value(): any;
}

export declare class GeomToStep_MakeBSplineSurfaceWithKnotsAndRationalBSplineSurface extends GeomToStep_Root {
  constructor(Bsplin: any)
  Value(): any;
}

export declare class GeomToStep_MakeBoundedCurve extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeBoundedCurve_1 extends GeomToStep_MakeBoundedCurve {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeBoundedCurve_2 extends GeomToStep_MakeBoundedCurve {
    constructor(C: any);
  }

export declare class GeomToStep_MakeBoundedSurface extends GeomToStep_Root {
  constructor(C: any)
  Value(): any;
}

export declare class GeomToStep_MakeCartesianPoint extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeCartesianPoint_1 extends GeomToStep_MakeCartesianPoint {
    constructor(P: gp_Pnt);
  }

  export declare class GeomToStep_MakeCartesianPoint_2 extends GeomToStep_MakeCartesianPoint {
    constructor(P: gp_Pnt2d);
  }

  export declare class GeomToStep_MakeCartesianPoint_3 extends GeomToStep_MakeCartesianPoint {
    constructor(P: any);
  }

  export declare class GeomToStep_MakeCartesianPoint_4 extends GeomToStep_MakeCartesianPoint {
    constructor(P: any);
  }

export declare class GeomToStep_MakeCircle extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeCircle_1 extends GeomToStep_MakeCircle {
    constructor(C: gp_Circ);
  }

  export declare class GeomToStep_MakeCircle_2 extends GeomToStep_MakeCircle {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeCircle_3 extends GeomToStep_MakeCircle {
    constructor(C: any);
  }

export declare class GeomToStep_MakeConic extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeConic_1 extends GeomToStep_MakeConic {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeConic_2 extends GeomToStep_MakeConic {
    constructor(C: any);
  }

export declare class GeomToStep_MakeConicalSurface extends GeomToStep_Root {
  constructor(CSurf: any)
  Value(): any;
}

export declare class GeomToStep_MakeCurve extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeCurve_1 extends GeomToStep_MakeCurve {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeCurve_2 extends GeomToStep_MakeCurve {
    constructor(C: any);
  }

export declare class GeomToStep_MakeCylindricalSurface extends GeomToStep_Root {
  constructor(CSurf: any)
  Value(): any;
}

export declare class GeomToStep_MakeDirection extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeDirection_1 extends GeomToStep_MakeDirection {
    constructor(D: gp_Dir);
  }

  export declare class GeomToStep_MakeDirection_2 extends GeomToStep_MakeDirection {
    constructor(D: gp_Dir2d);
  }

  export declare class GeomToStep_MakeDirection_3 extends GeomToStep_MakeDirection {
    constructor(D: any);
  }

  export declare class GeomToStep_MakeDirection_4 extends GeomToStep_MakeDirection {
    constructor(D: any);
  }

export declare class GeomToStep_MakeElementarySurface extends GeomToStep_Root {
  constructor(S: any)
  Value(): any;
}

export declare class GeomToStep_MakeEllipse extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeEllipse_1 extends GeomToStep_MakeEllipse {
    constructor(C: gp_Elips);
  }

  export declare class GeomToStep_MakeEllipse_2 extends GeomToStep_MakeEllipse {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeEllipse_3 extends GeomToStep_MakeEllipse {
    constructor(C: any);
  }

export declare class GeomToStep_MakeHyperbola extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeHyperbola_1 extends GeomToStep_MakeHyperbola {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeHyperbola_2 extends GeomToStep_MakeHyperbola {
    constructor(C: any);
  }

export declare class GeomToStep_MakeLine extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeLine_1 extends GeomToStep_MakeLine {
    constructor(L: gp_Lin);
  }

  export declare class GeomToStep_MakeLine_2 extends GeomToStep_MakeLine {
    constructor(L: gp_Lin2d);
  }

  export declare class GeomToStep_MakeLine_3 extends GeomToStep_MakeLine {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeLine_4 extends GeomToStep_MakeLine {
    constructor(C: any);
  }

export declare class GeomToStep_MakeParabola extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeParabola_1 extends GeomToStep_MakeParabola {
    constructor(C: any);
  }

  export declare class GeomToStep_MakeParabola_2 extends GeomToStep_MakeParabola {
    constructor(C: any);
  }

export declare class GeomToStep_MakePlane extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakePlane_1 extends GeomToStep_MakePlane {
    constructor(P: gp_Pln);
  }

  export declare class GeomToStep_MakePlane_2 extends GeomToStep_MakePlane {
    constructor(P: any);
  }

export declare class GeomToStep_MakePolyline extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakePolyline_1 extends GeomToStep_MakePolyline {
    constructor(P: TColgp_Array1OfPnt);
  }

  export declare class GeomToStep_MakePolyline_2 extends GeomToStep_MakePolyline {
    constructor(P: TColgp_Array1OfPnt2d);
  }

export declare class GeomToStep_MakeRectangularTrimmedSurface extends GeomToStep_Root {
  constructor(RTSurf: any)
  Value(): any;
}

export declare class GeomToStep_MakeSphericalSurface extends GeomToStep_Root {
  constructor(CSurf: any)
  Value(): any;
}

export declare class GeomToStep_MakeSurface extends GeomToStep_Root {
  constructor(C: any)
  Value(): any;
}

export declare class GeomToStep_MakeSurfaceOfLinearExtrusion extends GeomToStep_Root {
  constructor(CSurf: any)
  Value(): any;
}

export declare class GeomToStep_MakeSurfaceOfRevolution extends GeomToStep_Root {
  constructor(RevSurf: any)
  Value(): any;
}

export declare class GeomToStep_MakeSweptSurface extends GeomToStep_Root {
  constructor(S: any)
  Value(): any;
}

export declare class GeomToStep_MakeToroidalSurface extends GeomToStep_Root {
  constructor(TorSurf: any)
  Value(): any;
}

export declare class GeomToStep_MakeVector extends GeomToStep_Root {
  Value(): any;
}

  export declare class GeomToStep_MakeVector_1 extends GeomToStep_MakeVector {
    constructor(V: gp_Vec);
  }

  export declare class GeomToStep_MakeVector_2 extends GeomToStep_MakeVector {
    constructor(V: gp_Vec2d);
  }

  export declare class GeomToStep_MakeVector_3 extends GeomToStep_MakeVector {
    constructor(V: any);
  }

  export declare class GeomToStep_MakeVector_4 extends GeomToStep_MakeVector {
    constructor(V: any);
  }

export declare class RWStepAP203_RWCcDesignApproval {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWCcDesignCertification {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWCcDesignContract {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWCcDesignDateAndTimeAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWCcDesignPersonAndOrganizationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWCcDesignSecurityClassification {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWCcDesignSpecificationReference {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWChange {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWChangeRequest {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWStartRequest {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP203_RWStartWork {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214 {
  constructor();
  Init(): void;
}

export declare class RWStepAP214_RWAppliedApprovalAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedDateAndTimeAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedDateAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedDocumentReference {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedExternalIdentificationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedGroupAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedOrganizationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedPersonAndOrganizationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedPresentedItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAppliedSecurityClassificationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignActualDateAndTimeAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignActualDateAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignApprovalAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignDateAndPersonAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignDocumentReference {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignGroupAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignNominalDateAndTimeAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignNominalDateAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignOrganizationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignPersonAndOrganizationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignPresentedItem {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWAutoDesignSecurityClassificationAssignment {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWClass {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWExternallyDefinedClass {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWExternallyDefinedGeneralProperty {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_RWRepItemGroup {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP214_ReadWriteModule extends StepData_ReadWriteModule {
  constructor()
  CaseStep_1(atype: TCollection_AsciiString): Standard_Integer;
  CaseStep_2(types: TColStd_SequenceOfAsciiString): Standard_Integer;
  IsComplex(CN: Standard_Integer): Standard_Boolean;
  StepType(CN: Standard_Integer): TCollection_AsciiString;
  ComplexType(CN: Standard_Integer, types: TColStd_SequenceOfAsciiString): Standard_Boolean;
  ReadStep(CN: Standard_Integer, data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(CN: Standard_Integer, SW: StepData_StepWriter, ent: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class RWStepAP242_RWDraughtingModelItemAssociation {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP242_RWGeometricItemSpecificUsage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP242_RWIdAttribute {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class RWStepAP242_RWItemIdentifiedRepresentationUsage {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
  Share(ent: any, iter: Interface_EntityIterator): void;
}

export declare class STEPConstruct_AP203Context {
  constructor()
  DefaultApproval(): any;
  SetDefaultApproval(app: any): void;
  DefaultDateAndTime(): any;
  SetDefaultDateAndTime(dt: any): void;
  DefaultPersonAndOrganization(): any;
  SetDefaultPersonAndOrganization(po: any): void;
  DefaultSecurityClassificationLevel(): any;
  SetDefaultSecurityClassificationLevel(sc: any): void;
  RoleCreator(): any;
  RoleDesignOwner(): any;
  RoleDesignSupplier(): any;
  RoleClassificationOfficer(): any;
  RoleCreationDate(): any;
  RoleClassificationDate(): any;
  RoleApprover(): any;
  Init_1(sdr: any): void;
  Init_2(SDRTool: STEPConstruct_Part): void;
  Init_3(nauo: any): void;
  GetCreator(): any;
  GetDesignOwner(): any;
  GetDesignSupplier(): any;
  GetClassificationOfficer(): any;
  GetSecurity(): any;
  GetCreationDate(): any;
  GetClassificationDate(): any;
  GetApproval(): any;
  GetApprover(): any;
  GetApprovalDateTime(): any;
  GetProductCategoryRelationship(): any;
  Clear(): void;
  InitRoles(): void;
  InitAssembly(nauo: any): void;
  InitSecurityRequisites(): void;
  InitApprovalRequisites(): void;
}

export declare class STEPConstruct_ContextTool {
  SetModel(aStepModel: any): void;
  GetAPD(): any;
  AddAPD(enforce: Standard_Boolean): void;
  IsAP203(): Standard_Boolean;
  IsAP214(): Standard_Boolean;
  IsAP242(): Standard_Boolean;
  GetACstatus(): any;
  GetACschemaName(): any;
  GetACyear(): Standard_Integer;
  GetACname(): any;
  SetACstatus(status: any): void;
  SetACschemaName(schemaName: any): void;
  SetACyear(year: Standard_Integer): void;
  SetACname(name: any): void;
  GetDefaultAxis(): any;
  AP203Context(): STEPConstruct_AP203Context;
  Level(): Standard_Integer;
  NextLevel(): void;
  PrevLevel(): void;
  SetLevel(lev: Standard_Integer): void;
  Index(): Standard_Integer;
  NextIndex(): void;
  PrevIndex(): void;
  SetIndex(ind: Standard_Integer): void;
  GetProductName(): any;
  GetRootsForPart(SDRTool: STEPConstruct_Part): any;
  GetRootsForAssemblyLink(assembly: STEPConstruct_Assembly): any;
}

  export declare class STEPConstruct_ContextTool_1 extends STEPConstruct_ContextTool {
    constructor();
  }

  export declare class STEPConstruct_ContextTool_2 extends STEPConstruct_ContextTool {
    constructor(aStepModel: any);
  }

export declare class STEPControl_ActorWrite extends Transfer_ActorOfFinderProcess {
  constructor()
  Recognize(start: any): Standard_Boolean;
  Transfer(start: any, FP: any, theProgress: Message_ProgressRange): any;
  TransferSubShape(start: any, SDR: any, AX1: any, FP: any, shapeGroup: any, isManifold: Standard_Boolean, theProgress: Message_ProgressRange): any;
  TransferShape(start: any, SDR: any, FP: any, shapeGroup: any, isManifold: Standard_Boolean, theProgress: Message_ProgressRange): any;
  TransferCompound(start: any, SDR: any, FP: any, theProgress: Message_ProgressRange): any;
  SetMode(M: STEPControl_StepModelType): void;
  Mode(): STEPControl_StepModelType;
  SetGroupMode(mode: Standard_Integer): void;
  GroupMode(): Standard_Integer;
  SetTolerance(Tol: Standard_Real): void;
  IsAssembly(S: TopoDS_Shape): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPControl_Controller extends XSControl_Controller {
  constructor()
  NewModel(): any;
  Customise(WS: any): void;
  TransferWriteShape(shape: TopoDS_Shape, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  Init(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPConstruct_Tool {
  WS(): any;
  Model(): any;
  Graph(recompute: Standard_Boolean): Interface_Graph;
  TransientProcess(): any;
  FinderProcess(): any;
}

  export declare class STEPConstruct_Tool_1 extends STEPConstruct_Tool {
    constructor();
  }

  export declare class STEPConstruct_Tool_2 extends STEPConstruct_Tool {
    constructor(WS: any);
  }

export declare class STEPControl_Reader extends XSControl_Reader {
  StepModel(): any;
  TransferRoot(num: Standard_Integer, theProgress: Message_ProgressRange): Standard_Boolean;
  NbRootsForTransfer(): Standard_Integer;
  FileUnits(theUnitLengthNames: TColStd_SequenceOfAsciiString, theUnitAngleNames: TColStd_SequenceOfAsciiString, theUnitSolidAngleNames: TColStd_SequenceOfAsciiString): void;
}

  export declare class STEPControl_Reader_1 extends STEPControl_Reader {
    constructor();
  }

  export declare class STEPControl_Reader_2 extends STEPControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class STEPControl_Writer {
  SetTolerance(Tol: Standard_Real): void;
  UnsetTolerance(): void;
  SetWS(WS: any, scratch: Standard_Boolean): void;
  WS(): any;
  Model(newone: Standard_Boolean): any;
  Transfer(sh: TopoDS_Shape, mode: STEPControl_StepModelType, compgraph: Standard_Boolean, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  Write(filename: Standard_CString): IFSelect_ReturnStatus;
  PrintStatsTransfer(what: Standard_Integer, mode: Standard_Integer): void;
}

  export declare class STEPControl_Writer_1 extends STEPControl_Writer {
    constructor();
  }

  export declare class STEPControl_Writer_2 extends STEPControl_Writer {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class StepAP242_ItemIdentifiedRepresentationUsageDefinition extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AppliedApprovalAssignment(): any;
  AppliedDateAndTimeAssignment(): any;
  AppliedDateAssignment(): any;
  AppliedDocumentReference(): any;
  AppliedExternalIdentificationAssignment(): any;
  AppliedGroupAssignment(): any;
  AppliedOrganizationAssignment(): any;
  AppliedPersonAndOrganizationAssignment(): any;
  AppliedSecurityClassificationAssignment(): any;
  DimensionalSize(): any;
  GeneralProperty(): any;
  GeometricTolerance(): any;
  ProductDefinitionRelationship(): any;
  PropertyDefinition(): any;
  PropertyDefinitionRelationship(): any;
  ShapeAspect(): any;
  ShapeAspectRelationship(): any;
}

export declare class StepAP242_ItemIdentifiedRepresentationUsage extends Standard_Transient {
  constructor()
  Init(theName: any, theDescription: any, theDefinition: StepAP242_ItemIdentifiedRepresentationUsageDefinition, theUsedRepresentation: any, theIdentifiedItem: any): void;
  SetName(theName: any): void;
  Name(): any;
  SetDescription(theDescription: any): void;
  Description(): any;
  SetDefinition(theDefinition: StepAP242_ItemIdentifiedRepresentationUsageDefinition): void;
  Definition(): StepAP242_ItemIdentifiedRepresentationUsageDefinition;
  SetUsedRepresentation(theUsedRepresentation: any): void;
  UsedRepresentation(): any;
  IdentifiedItem(): any;
  NbIdentifiedItem(): Standard_Integer;
  SetIdentifiedItem(theIdentifiedItem: any): void;
  IdentifiedItemValue(num: Standard_Integer): any;
  SetIdentifiedItemValue(num: Standard_Integer, theItem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP242_GeometricItemSpecificUsage extends StepAP242_ItemIdentifiedRepresentationUsage {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPConstruct {
  constructor();
  FindEntity_1(FinderProcess: any, Shape: TopoDS_Shape): any;
  FindEntity_2(FinderProcess: any, Shape: TopoDS_Shape, Loc: TopLoc_Location): any;
  FindShape(TransientProcess: any, item: any): TopoDS_Shape;
  FindCDSR(ComponentBinder: any, AssemblySDR: any, ComponentCDSR: any): Standard_Boolean;
}

export declare class STEPConstruct_Assembly {
  constructor()
  Init(aSR: any, SDR0: any, Ax0: any, Loc: any): void;
  MakeRelationship(): void;
  ItemValue(): any;
  ItemLocation(): any;
  GetNAUO(): any;
  CheckSRRReversesNAUO(theGraph: Interface_Graph, CDSR: any): Standard_Boolean;
}

export declare class STEPConstruct_PointHasher {
  constructor();
  HashCode(thePoint: gp_Pnt, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(Point1: gp_Pnt, Point2: gp_Pnt): Standard_Boolean;
}

export declare class STEPConstruct_ExternRefs extends STEPConstruct_Tool {
  Init(WS: any): Standard_Boolean;
  Clear(): void;
  LoadExternRefs(): Standard_Boolean;
  NbExternRefs(): Standard_Integer;
  FileName(num: Standard_Integer): Standard_CString;
  ProdDef(num: Standard_Integer): any;
  DocFile(num: Standard_Integer): any;
  Format(num: Standard_Integer): any;
  AddExternRef(filename: Standard_CString, PD: any, format: Standard_CString): Standard_Integer;
  checkAP214Shared(): void;
  WriteExternRefs(num: Standard_Integer): Standard_Integer;
  SetAP214APD(APD: any): void;
  GetAP214APD(): any;
}

  export declare class STEPConstruct_ExternRefs_1 extends STEPConstruct_ExternRefs {
    constructor();
  }

  export declare class STEPConstruct_ExternRefs_2 extends STEPConstruct_ExternRefs {
    constructor(WS: any);
  }

export declare class STEPConstruct_Part {
  constructor()
  MakeSDR(aShape: any, aName: any, AC: any): void;
  ReadSDR(aShape: any): void;
  IsDone(): Standard_Boolean;
  SDRValue(): any;
  SRValue(): any;
  PC(): any;
  PCname(): any;
  PCdisciplineType(): any;
  SetPCname(name: any): void;
  SetPCdisciplineType(label: any): void;
  AC(): any;
  ACapplication(): any;
  SetACapplication(text: any): void;
  PDC(): any;
  PDCname(): any;
  PDCstage(): any;
  SetPDCname(label: any): void;
  SetPDCstage(label: any): void;
  Product(): any;
  Pid(): any;
  Pname(): any;
  Pdescription(): any;
  SetPid(id: any): void;
  SetPname(label: any): void;
  SetPdescription(text: any): void;
  PDF(): any;
  PDFid(): any;
  PDFdescription(): any;
  SetPDFid(id: any): void;
  SetPDFdescription(text: any): void;
  PD(): any;
  PDdescription(): any;
  SetPDdescription(text: any): void;
  PDS(): any;
  PDSname(): any;
  PDSdescription(): any;
  SetPDSname(label: any): void;
  SetPDSdescription(text: any): void;
  PRPC(): any;
  PRPCname(): any;
  PRPCdescription(): any;
  SetPRPCname(label: any): void;
  SetPRPCdescription(text: any): void;
}

export declare class STEPConstruct_Styles extends STEPConstruct_Tool {
  Init(WS: any): Standard_Boolean;
  NbStyles(): Standard_Integer;
  Style(i: Standard_Integer): any;
  ClearStyles(): void;
  AddStyle_1(style: any): void;
  AddStyle_2(item: any, PSA: any, Override: any): any;
  AddStyle_3(Shape: TopoDS_Shape, PSA: any, Override: any): any;
  CreateMDGPR(Context: any, MDGPR: any): Standard_Boolean;
  CreateNAUOSRD(Context: any, CDSR: any, initPDS: any): Standard_Boolean;
  FindContext(Shape: TopoDS_Shape): any;
  LoadStyles(): Standard_Boolean;
  LoadInvisStyles(InvSyles: any): Standard_Boolean;
  MakeColorPSA(item: any, SurfCol: any, CurveCol: any, RenderCol: any, RenderTransp: Standard_Real, isForNAUO: Standard_Boolean): any;
  GetColorPSA(item: any, Col: any): any;
  GetColors(style: any, SurfCol: any, BoundCol: any, CurveCol: any, RenderCol: any, RenderTransp: Standard_Real, IsComponent: Standard_Boolean): Standard_Boolean;
  EncodeColor_1(Col: Quantity_Color): any;
  EncodeColor_2(Col: Quantity_Color, DPDCs: STEPConstruct_DataMapOfAsciiStringTransient, ColRGBs: STEPConstruct_DataMapOfPointTransient): any;
  DecodeColor(Colour: any, Col: Quantity_Color): Standard_Boolean;
}

  export declare class STEPConstruct_Styles_1 extends STEPConstruct_Styles {
    constructor();
  }

  export declare class STEPConstruct_Styles_2 extends STEPConstruct_Styles {
    constructor(WS: any);
  }

export declare class STEPConstruct_UnitContext {
  constructor()
  Init(Tol3d: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Value(): any;
  ComputeFactors_1(aContext: any): Standard_Integer;
  ComputeFactors_2(aUnit: any): Standard_Integer;
  ComputeTolerance(aContext: any): Standard_Integer;
  LengthFactor(): Standard_Real;
  PlaneAngleFactor(): Standard_Real;
  SolidAngleFactor(): Standard_Real;
  Uncertainty(): Standard_Real;
  AreaFactor(): Standard_Real;
  VolumeFactor(): Standard_Real;
  HasUncertainty(): Standard_Boolean;
  LengthDone(): Standard_Boolean;
  PlaneAngleDone(): Standard_Boolean;
  SolidAngleDone(): Standard_Boolean;
  AreaDone(): Standard_Boolean;
  VolumeDone(): Standard_Boolean;
  StatusMessage(status: Standard_Integer): Standard_CString;
  ConvertSiPrefix(aPrefix: StepBasic_SiPrefix): Standard_Real;
}

export declare class STEPConstruct_ValidationProps extends STEPConstruct_Tool {
  Init(WS: any): Standard_Boolean;
  AddProp_1(Shape: TopoDS_Shape, Prop: any, Descr: Standard_CString, instance: Standard_Boolean): Standard_Boolean;
  AddProp_2(target: StepRepr_CharacterizedDefinition, Context: any, Prop: any, Descr: Standard_CString): Standard_Boolean;
  AddArea(Shape: TopoDS_Shape, Area: Standard_Real): Standard_Boolean;
  AddVolume(Shape: TopoDS_Shape, Vol: Standard_Real): Standard_Boolean;
  AddCentroid(Shape: TopoDS_Shape, Pnt: gp_Pnt, instance: Standard_Boolean): Standard_Boolean;
  FindTarget(S: TopoDS_Shape, target: StepRepr_CharacterizedDefinition, Context: any, instance: Standard_Boolean): Standard_Boolean;
  LoadProps(seq: TColStd_SequenceOfTransient): Standard_Boolean;
  GetPropNAUO(PD: any): any;
  GetPropPD(PD: any): any;
  GetPropShape_1(ProdDef: any): TopoDS_Shape;
  GetPropShape_2(PD: any): TopoDS_Shape;
  GetPropReal(item: any, Val: Standard_Real, isArea: Standard_Boolean): Standard_Boolean;
  GetPropPnt(item: any, Context: any, Pnt: gp_Pnt): Standard_Boolean;
  SetAssemblyShape(shape: TopoDS_Shape): void;
}

  export declare class STEPConstruct_ValidationProps_1 extends STEPConstruct_ValidationProps {
    constructor();
  }

  export declare class STEPConstruct_ValidationProps_2 extends STEPConstruct_ValidationProps {
    constructor(WS: any);
  }

export declare class StepToTopoDS_NMTool {
  Init(MapOfRI: StepToTopoDS_DataMapOfRI, MapOfRINames: StepToTopoDS_DataMapOfRINames): void;
  SetActive(isActive: Standard_Boolean): void;
  IsActive(): Standard_Boolean;
  CleanUp(): void;
  IsBound_1(RI: any): Standard_Boolean;
  IsBound_2(RIName: TCollection_AsciiString): Standard_Boolean;
  Bind_1(RI: any, S: TopoDS_Shape): void;
  Bind_2(RIName: TCollection_AsciiString, S: TopoDS_Shape): void;
  Find_1(RI: any): TopoDS_Shape;
  Find_2(RIName: TCollection_AsciiString): TopoDS_Shape;
  RegisterNMEdge(Edge: TopoDS_Shape): void;
  IsSuspectedAsClosing(BaseShell: TopoDS_Shape, SuspectedShell: TopoDS_Shape): Standard_Boolean;
  IsPureNMShell(Shell: TopoDS_Shape): Standard_Boolean;
  SetIDEASCase(IDEASCase: Standard_Boolean): void;
  IsIDEASCase(): Standard_Boolean;
}

  export declare class StepToTopoDS_NMTool_1 extends StepToTopoDS_NMTool {
    constructor();
  }

  export declare class StepToTopoDS_NMTool_2 extends StepToTopoDS_NMTool {
    constructor(MapOfRI: StepToTopoDS_DataMapOfRI, MapOfRINames: StepToTopoDS_DataMapOfRINames);
  }

export declare class STEPControl_ActorRead extends Transfer_ActorOfTransientProcess {
  constructor()
  Recognize(start: any): Standard_Boolean;
  Transfer(start: any, TP: any, theProgress: Message_ProgressRange): any;
  TransferShape(start: any, TP: any, isManifold: Standard_Boolean, theUseTrsf: Standard_Boolean, theProgress: Message_ProgressRange): any;
  PrepareUnits(rep: any, TP: any): void;
  ResetUnits(): void;
  ComputeTransformation(Origin: any, Target: any, OrigContext: any, TargContext: any, TP: any, Trsf: gp_Trsf): Standard_Boolean;
  ComputeSRRWT(SRR: any, TP: any, Trsf: gp_Trsf): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPEdit {
  constructor();
  Protocol(): any;
  NewModel(): any;
  SignType(): any;
  NewSelectSDR(): any;
  NewSelectPlacedItem(): any;
  NewSelectShapeRepr(): any;
}

export declare class STEPEdit_EditContext extends IFSelect_Editor {
  constructor()
  Label(): TCollection_AsciiString;
  Recognize(form: any): Standard_Boolean;
  StringValue(form: any, num: Standard_Integer): any;
  Apply(form: any, ent: any, model: any): Standard_Boolean;
  Load(form: any, ent: any, model: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPEdit_EditSDR extends IFSelect_Editor {
  constructor()
  Label(): TCollection_AsciiString;
  Recognize(form: any): Standard_Boolean;
  StringValue(form: any, num: Standard_Integer): any;
  Apply(form: any, ent: any, model: any): Standard_Boolean;
  Load(form: any, ent: any, model: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPSelections_AssemblyLink extends Standard_Transient {
  GetNAUO(): any;
  GetItem(): any;
  GetComponent(): any;
  SetNAUO(nauo: any): void;
  SetItem(item: any): void;
  SetComponent(part: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class STEPSelections_AssemblyLink_1 extends STEPSelections_AssemblyLink {
    constructor();
  }

  export declare class STEPSelections_AssemblyLink_2 extends STEPSelections_AssemblyLink {
    constructor(nauo: any, item: any, part: any);
  }

export declare class STEPSelections_AssemblyComponent extends Standard_Transient {
  GetSDR(): any;
  GetList(): any;
  SetSDR(sdr: any): void;
  SetList(list: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class STEPSelections_AssemblyComponent_1 extends STEPSelections_AssemblyComponent {
    constructor();
  }

  export declare class STEPSelections_AssemblyComponent_2 extends STEPSelections_AssemblyComponent {
    constructor(sdr: any, list: any);
  }

export declare class STEPSelections_AssemblyExplorer {
  constructor(G: Interface_Graph)
  Init(G: Interface_Graph): void;
  Dump(os: Standard_OStream): void;
  FindSDRWithProduct(product: any): any;
  FillListWithGraph(cmp: any): void;
  FindItemWithNAUO(nauo: any): any;
  NbAssemblies(): Standard_Integer;
  Root(rank: Standard_Integer): any;
}

export declare class STEPSelections_SelectAssembly extends IFSelect_SelectExplore {
  constructor()
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  ExploreLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPSelections_SelectDerived extends StepSelect_StepType {
  constructor()
  Matches(ent: any, model: any, text: TCollection_AsciiString, exact: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPSelections_SelectFaces extends IFSelect_SelectExplore {
  constructor()
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  ExploreLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPSelections_SelectForTransfer extends XSControl_SelectForTransfer {
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class STEPSelections_SelectForTransfer_1 extends STEPSelections_SelectForTransfer {
    constructor();
  }

  export declare class STEPSelections_SelectForTransfer_2 extends STEPSelections_SelectForTransfer {
    constructor(TR: any);
  }

export declare class STEPSelections_SelectGSCurves extends IFSelect_SelectExplore {
  constructor()
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  ExploreLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPSelections_SelectInstances extends IFSelect_SelectExplore {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  ExploreLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_ApprovedItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionFormation(): any;
  ProductDefinition(): any;
  ConfigurationEffectivity(): any;
  ConfigurationItem(): any;
  SecurityClassification(): any;
  ChangeRequest(): any;
  Change(): any;
  StartRequest(): any;
  StartWork(): any;
  Certification(): any;
  Contract(): any;
}

export declare class StepAP203_CertifiedItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  SuppliedPartRelationship(): any;
}

export declare class StepAP203_ChangeRequestItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionFormation(): any;
}

export declare class StepAP203_ClassifiedItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionFormation(): any;
  AssemblyComponentUsage(): any;
}

export declare class StepAP203_ContractedItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionFormation(): any;
}

export declare class StepAP203_DateTimeItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinition(): any;
  ChangeRequest(): any;
  StartRequest(): any;
  Change(): any;
  StartWork(): any;
  ApprovalPersonOrganization(): any;
  Contract(): any;
  SecurityClassification(): any;
  Certification(): any;
}

export declare class StepAP203_PersonOrganizationItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Change(): any;
  StartWork(): any;
  ChangeRequest(): any;
  StartRequest(): any;
  ConfigurationItem(): any;
  Product(): any;
  ProductDefinitionFormation(): any;
  ProductDefinition(): any;
  Contract(): any;
  SecurityClassification(): any;
}

export declare class StepAP203_SpecifiedItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinition(): any;
  ShapeAspect(): any;
}

export declare class StepAP203_StartRequestItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionFormation(): any;
}

export declare class StepAP203_WorkItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionFormation(): any;
}

export declare class StepAP203_CcDesignApproval extends StepBasic_ApprovalAssignment {
  constructor()
  Init(aApprovalAssignment_AssignedApproval: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_CcDesignCertification extends StepBasic_CertificationAssignment {
  constructor()
  Init(aCertificationAssignment_AssignedCertification: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_CcDesignContract extends StepBasic_ContractAssignment {
  constructor()
  Init(aContractAssignment_AssignedContract: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_CcDesignDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
  constructor()
  Init(aDateAndTimeAssignment_AssignedDateAndTime: any, aDateAndTimeAssignment_Role: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_CcDesignPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
  constructor()
  Init(aPersonAndOrganizationAssignment_AssignedPersonAndOrganization: any, aPersonAndOrganizationAssignment_Role: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_CcDesignSecurityClassification extends StepBasic_SecurityClassificationAssignment {
  constructor()
  Init(aSecurityClassificationAssignment_AssignedSecurityClassification: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_CcDesignSpecificationReference extends StepBasic_DocumentReference {
  constructor()
  Init(aDocumentReference_AssignedDocument: any, aDocumentReference_Source: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_Change extends StepBasic_ActionAssignment {
  constructor()
  Init(aActionAssignment_AssignedAction: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_ChangeRequest extends StepBasic_ActionRequestAssignment {
  constructor()
  Init(aActionRequestAssignment_AssignedActionRequest: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_StartRequest extends StepBasic_ActionRequestAssignment {
  constructor()
  Init(aActionRequestAssignment_AssignedActionRequest: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP203_StartWork extends StepBasic_ActionAssignment {
  constructor()
  Init(aActionAssignment_AssignedAction: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP209_Construct extends STEPConstruct_Tool {
  Init(WS: any): Standard_Boolean;
  IsDesing(PD: any): Standard_Boolean;
  IsAnalys(PD: any): Standard_Boolean;
  FeaModel_1(Prod: any): any;
  FeaModel_2(PDF: any): any;
  GetFeaAxis2Placement3d(theFeaModel: any): any;
  IdealShape_1(Prod: any): any;
  IdealShape_2(PDF: any): any;
  NominShape_1(Prod: any): any;
  NominShape_2(PDF: any): any;
  GetElementMaterial(): any;
  GetElemGeomRelat(): any;
  GetElements1D(theFeaModel: any): any;
  GetElements2D(theFEAModel: any): any;
  GetElements3D(theFEAModel: any): any;
  GetCurElemSection(ElemRepr: any): any;
  GetShReprForElem(ElemRepr: any): any;
  CreateAnalysStructure(Prod: any): Standard_Boolean;
  CreateFeaStructure(Prod: any): Standard_Boolean;
  ReplaceCcDesingToApplied(): Standard_Boolean;
  CreateAddingEntities(AnaPD: any): Standard_Boolean;
  CreateAP203Structure(): any;
  CreateAdding203Entities(PD: any, aModel: any): Standard_Boolean;
  FeaModel_3(PDS: any): any;
  FeaModel_4(PD: any): any;
  IdealShape_3(PD: any): any;
  IdealShape_4(PDS: any): any;
}

  export declare class StepAP209_Construct_1 extends StepAP209_Construct {
    constructor();
  }

  export declare class StepAP209_Construct_2 extends StepAP209_Construct {
    constructor(WS: any);
  }

export declare class StepAP214 {
  constructor();
  Protocol(): any;
}

export declare class StepAP214_ApprovalItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AssemblyComponentUsageSubstitute(): any;
  DocumentFile(): any;
  MaterialDesignation(): any;
  MechanicalDesignGeometricPresentationRepresentation(): any;
  PresentationArea(): any;
  Product(): any;
  ProductDefinition(): any;
  ProductDefinitionFormation(): any;
  ProductDefinitionRelationship(): any;
  PropertyDefinition(): any;
  ShapeRepresentation(): any;
  SecurityClassification(): any;
  ConfigurationItem(): any;
  Date(): any;
  Document(): any;
  Effectivity(): any;
  Group(): any;
  GroupRelationship(): any;
  ProductDefinitionFormationRelationship(): any;
  Representation(): any;
  ShapeAspectRelationship(): any;
}

export declare class StepAP214_AppliedApprovalAssignment extends StepBasic_ApprovalAssignment {
  constructor()
  Init(aAssignedApproval: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_ApprovalItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_DateAndTimeItem extends StepAP214_ApprovalItem {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ApprovalPersonOrganization(): any;
  AppliedPersonAndOrganizationAssignment(): any;
  AppliedOrganizationAssignment(): any;
}

export declare class StepAP214_AppliedDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
  constructor()
  Init(aAssignedDateAndTime: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_DateAndTimeItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_DateItem extends StepAP214_ApprovalItem {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ApprovalPersonOrganization(): any;
  AppliedPersonAndOrganizationAssignment(): any;
  AppliedOrganizationAssignment(): any;
  AppliedSecurityClassificationAssignment(): any;
}

export declare class StepAP214_AppliedDateAssignment extends StepBasic_DateAssignment {
  constructor()
  Init(aAssignedDate: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_DateItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_DocumentReferenceItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Approval(): any;
  DescriptiveRepresentationItem(): any;
  MaterialDesignation(): any;
  ProductDefinition(): any;
  ProductDefinitionRelationship(): any;
  PropertyDefinition(): any;
  Representation(): any;
  ShapeAspect(): any;
  ShapeAspectRelationship(): any;
  AppliedExternalIdentificationAssignment(): any;
  AssemblyComponentUsage(): any;
  CharacterizedObject(): any;
  DimensionalSize(): any;
  ExternallyDefinedItem(): any;
  Group(): any;
  GroupRelationship(): any;
  MeasureRepresentationItem(): any;
  ProductCategory(): any;
  ProductDefinitionContext(): any;
  RepresentationItem(): any;
}

export declare class StepAP214_AppliedDocumentReference extends StepBasic_DocumentReference {
  constructor()
  Init(aAssignedDocument: any, aSource: any, aItems: any): void;
  Items(): any;
  SetItems(aItems: any): void;
  ItemsValue(num: Standard_Integer): StepAP214_DocumentReferenceItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_ExternalIdentificationItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  DocumentFile(): any;
  ExternallyDefinedClass(): any;
  ExternallyDefinedGeneralProperty(): any;
  ProductDefinition(): any;
  AppliedOrganizationAssignment(): any;
  AppliedPersonAndOrganizationAssignment(): any;
  Approval(): any;
  ApprovalStatus(): any;
  ExternalSource(): any;
  OrganizationalAddress(): any;
  SecurityClassification(): any;
  TrimmedCurve(): any;
  VersionedActionRequest(): any;
  DateAndTimeAssignment(): any;
  DateAssignment(): any;
}

export declare class StepAP214_AppliedExternalIdentificationAssignment extends StepBasic_ExternalIdentificationAssignment {
  constructor()
  Init(aIdentificationAssignment_AssignedId: any, aIdentificationAssignment_Role: any, aExternalIdentificationAssignment_Source: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_GroupItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  GeometricRepresentationItem(): any;
  GroupRelationship(): any;
  MappedItem(): any;
  ProductDefinition(): any;
  ProductDefinitionFormation(): any;
  PropertyDefinitionRepresentation(): any;
  Representation(): any;
  RepresentationItem(): any;
  RepresentationRelationshipWithTransformation(): any;
  ShapeAspect(): any;
  ShapeAspectRelationship(): any;
  ShapeRepresentationRelationship(): any;
  StyledItem(): any;
  TopologicalRepresentationItem(): any;
}

export declare class StepAP214_AppliedGroupAssignment extends StepBasic_GroupAssignment {
  constructor()
  Init(aGroupAssignment_AssignedGroup: any, aItems: any): void;
  Items(): any;
  SetItems(Items: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_OrganizationItem extends StepAP214_ApprovalItem {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AppliedOrganizationAssignment(): any;
  Approval(): any;
  AppliedSecurityClassificationAssignment(): any;
}

export declare class StepAP214_AppliedOrganizationAssignment extends StepBasic_OrganizationAssignment {
  constructor()
  Init(aAssignedOrganization: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_OrganizationItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_PersonAndOrganizationItem extends StepAP214_ApprovalItem {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AppliedOrganizationAssignment(): any;
  AppliedSecurityClassificationAssignment(): any;
  Approval(): any;
}

export declare class StepAP214_AppliedPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
  constructor()
  Init(aAssignedPersonAndOrganization: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_PersonAndOrganizationItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_PresentedItemSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionRelationship(): any;
  ProductDefinition(): any;
}

export declare class StepAP214_AppliedPresentedItem extends StepVisual_PresentedItem {
  constructor()
  Init(aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_PresentedItemSelect;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_SecurityClassificationItem extends StepAP214_ApprovalItem {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Action(): any;
  AssemblyComponentUsage(): any;
  ConfigurationDesign(): any;
  ConfigurationEffectivity(): any;
  DraughtingModel(): any;
  GeneralProperty(): any;
  MakeFromUsageOption(): any;
  ProductConcept(): any;
  ProductDefinitionUsage(): any;
  VersionedActionRequest(): any;
}

export declare class StepAP214_AppliedSecurityClassificationAssignment extends StepBasic_SecurityClassificationAssignment {
  constructor()
  Init(aAssignedSecurityClassification: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_SecurityClassificationItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignDateAndPersonItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AutoDesignOrganizationAssignment(): any;
  Product(): any;
  ProductDefinition(): any;
  ProductDefinitionFormation(): any;
  Representation(): any;
  AutoDesignDocumentReference(): any;
  ExternallyDefinedRepresentation(): any;
  ProductDefinitionRelationship(): any;
  ProductDefinitionWithAssociatedDocuments(): any;
}

export declare class StepAP214_AutoDesignDateAndTimeItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ApprovalPersonOrganization(): any;
  AutoDesignDateAndPersonAssignment(): any;
  ProductDefinitionEffectivity(): any;
}

export declare class StepAP214_AutoDesignDatedItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ApprovalPersonOrganization(): any;
  AutoDesignDateAndPersonAssignment(): any;
  ProductDefinitionEffectivity(): any;
}

export declare class StepAP214_AutoDesignGeneralOrgItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Product(): any;
  ProductDefinition(): any;
  ProductDefinitionFormation(): any;
  ProductDefinitionRelationship(): any;
  ProductDefinitionWithAssociatedDocuments(): any;
  Representation(): any;
  ExternallyDefinedRepresentation(): any;
  AutoDesignDocumentReference(): any;
}

export declare class StepAP214_AutoDesignGroupedItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  AdvancedBrepShapeRepresentation(): any;
  CsgShapeRepresentation(): any;
  FacetedBrepShapeRepresentation(): any;
  GeometricallyBoundedSurfaceShapeRepresentation(): any;
  GeometricallyBoundedWireframeShapeRepresentation(): any;
  ManifoldSurfaceShapeRepresentation(): any;
  Representation(): any;
  RepresentationItem(): any;
  ShapeAspect(): any;
  ShapeRepresentation(): any;
  TemplateInstance(): any;
}

export declare class StepAP214_AutoDesignPresentedItemSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  ProductDefinitionRelationship(): any;
  ProductDefinition(): any;
  ProductDefinitionShape(): any;
  RepresentationRelationship(): any;
  ShapeAspect(): any;
  DocumentRelationship(): any;
}

export declare class StepAP214_AutoDesignReferencingItem extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Approval(): any;
  DocumentRelationship(): any;
  ExternallyDefinedRepresentation(): any;
  MappedItem(): any;
  MaterialDesignation(): any;
  PresentationArea(): any;
  PresentationView(): any;
  ProductCategory(): any;
  ProductDefinition(): any;
  ProductDefinitionRelationship(): any;
  PropertyDefinition(): any;
  Representation(): any;
  RepresentationRelationship(): any;
  ShapeAspect(): any;
}

export declare class StepAP214_AutoDesignActualDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
  constructor()
  Init(aAssignedDateAndTime: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignDateAndTimeItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignActualDateAssignment extends StepBasic_DateAssignment {
  constructor()
  Init(aAssignedDate: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignDatedItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignApprovalAssignment extends StepBasic_ApprovalAssignment {
  constructor()
  Init(aAssignedApproval: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignGeneralOrgItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignDateAndPersonAssignment extends StepBasic_PersonAndOrganizationAssignment {
  constructor()
  Init(aAssignedPersonAndOrganization: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignDateAndPersonItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignDocumentReference extends StepBasic_DocumentReference {
  constructor()
  Init(aAssignedDocument: any, aSource: any, aItems: any): void;
  Items(): any;
  SetItems(aItems: any): void;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignReferencingItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignGroupAssignment extends StepBasic_GroupAssignment {
  constructor()
  Init(aAssignedGroup: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignGroupedItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignNominalDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
  constructor()
  Init(aAssignedDateAndTime: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignDateAndTimeItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignNominalDateAssignment extends StepBasic_DateAssignment {
  constructor()
  Init(aAssignedDate: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignDatedItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignOrganizationAssignment extends StepBasic_OrganizationAssignment {
  constructor()
  Init(aAssignedOrganization: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignGeneralOrgItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignOrganizationItem extends StepAP214_AutoDesignGeneralOrgItem {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Document(): any;
  PhysicallyModeledProductDefinition(): any;
}

export declare class StepAP214_AutoDesignPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
  constructor()
  Init(aAssignedPersonAndOrganization: any, aRole: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignGeneralOrgItem;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignPresentedItem extends StepVisual_PresentedItem {
  constructor()
  Init(aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): StepAP214_AutoDesignPresentedItemSelect;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_AutoDesignSecurityClassificationAssignment extends StepBasic_SecurityClassificationAssignment {
  constructor()
  Init(aAssignedSecurityClassification: any, aItems: any): void;
  SetItems(aItems: any): void;
  Items(): any;
  ItemsValue(num: Standard_Integer): any;
  NbItems(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_Class extends StepBasic_Group {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_ExternallyDefinedClass extends StepAP214_Class {
  constructor()
  Init(aGroup_Name: any, hasGroup_Description: Standard_Boolean, aGroup_Description: any, aExternallyDefinedItem_ItemId: StepBasic_SourceItem, aExternallyDefinedItem_Source: any): void;
  ExternallyDefinedItem(): any;
  SetExternallyDefinedItem(ExternallyDefinedItem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_ExternallyDefinedGeneralProperty extends StepBasic_GeneralProperty {
  constructor()
  Init(aGeneralProperty_Id: any, aGeneralProperty_Name: any, hasGeneralProperty_Description: Standard_Boolean, aGeneralProperty_Description: any, aExternallyDefinedItem_ItemId: StepBasic_SourceItem, aExternallyDefinedItem_Source: any): void;
  ExternallyDefinedItem(): any;
  SetExternallyDefinedItem(ExternallyDefinedItem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_Protocol extends StepData_Protocol {
  constructor()
  TypeNumber(atype: any): Standard_Integer;
  SchemaName(): Standard_CString;
  NbResources(): Standard_Integer;
  Resource(num: Standard_Integer): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP214_RepItemGroup extends StepBasic_Group {
  constructor()
  Init(aGroup_Name: any, hasGroup_Description: Standard_Boolean, aGroup_Description: any, aRepresentationItem_Name: any): void;
  RepresentationItem(): any;
  SetRepresentationItem(RepresentationItem: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP242_DraughtingModelItemAssociation extends StepAP242_ItemIdentifiedRepresentationUsage {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepAP242_IdAttributeSelect extends StepData_SelectType {
  constructor()
  CaseNum(ent: any): Standard_Integer;
  Action(): any;
  Address(): any;
  ApplicationContext(): any;
  DimensionalSize(): any;
  GeometricTolerance(): any;
  Group(): any;
  ProductCategory(): any;
  PropertyDefinition(): any;
  Representation(): any;
  ShapeAspect(): any;
  ShapeAspectRelationship(): any;
}

export declare class StepAP242_IdAttribute extends Standard_Transient {
  constructor()
  Init(theAttributeValue: any, theIdentifiedItem: StepAP242_IdAttributeSelect): void;
  SetAttributeValue(theAttributeValue: any): void;
  AttributeValue(): any;
  SetIdentifiedItem(theIdentifiedItem: StepAP242_IdAttributeSelect): void;
  IdentifiedItem(): StepAP242_IdAttributeSelect;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepToGeom {
  constructor();
  MakeAxis1Placement(SA: any): any;
  MakeAxis2Placement(SA: any): any;
  MakeAxisPlacement(SA: any): any;
  MakeBoundedCurve(SC: any): any;
  MakeBoundedCurve2d(SC: any): any;
  MakeBoundedSurface(SS: any): any;
  MakeBSplineCurve(SC: any): any;
  MakeBSplineCurve2d(SC: any): any;
  MakeBSplineSurface(SS: any): any;
  MakeCartesianPoint(SP: any): any;
  MakeCartesianPoint2d(SP: any): any;
  MakeCircle(SC: any): any;
  MakeCircle2d(SC: any): any;
  MakeConic(SC: any): any;
  MakeConic2d(SC: any): any;
  MakeConicalSurface(SS: any): any;
  MakeCurve(SC: any): any;
  MakeCurve2d(SC: any): any;
  MakeCylindricalSurface(SS: any): any;
  MakeDirection(SD: any): any;
  MakeDirection2d(SD: any): any;
  MakeElementarySurface(SS: any): any;
  MakeEllipse(SC: any): any;
  MakeEllipse2d(SC: any): any;
  MakeHyperbola(SC: any): any;
  MakeHyperbola2d(SC: any): any;
  MakeLine(SC: any): any;
  MakeLine2d(SC: any): any;
  MakeParabola(SC: any): any;
  MakeParabola2d(SC: any): any;
  MakePlane(SP: any): any;
  MakePolyline(SPL: any): any;
  MakePolyline2d(SPL: any): any;
  MakeRectangularTrimmedSurface(SS: any): any;
  MakeSphericalSurface(SS: any): any;
  MakeSurface(SS: any): any;
  MakeSurfaceOfLinearExtrusion(SS: any): any;
  MakeSurfaceOfRevolution(SS: any): any;
  MakeSweptSurface(SS: any): any;
  MakeToroidalSurface(SS: any): any;
  MakeTransformation2d(SCTO: any, CT: gp_Trsf2d): Standard_Boolean;
  MakeTransformation3d(SCTO: any, CT: gp_Trsf): Standard_Boolean;
  MakeTrimmedCurve(SC: any): any;
  MakeTrimmedCurve2d(SC: any): any;
  MakeVectorWithMagnitude(SV: any): any;
  MakeVectorWithMagnitude2d(SV: any): any;
}

export declare class StepToTopoDS {
  constructor();
  DecodeBuilderError(Error: StepToTopoDS_BuilderError): any;
  DecodeShellError(Error: StepToTopoDS_TranslateShellError): any;
  DecodeFaceError(Error: StepToTopoDS_TranslateFaceError): any;
  DecodeEdgeError(Error: StepToTopoDS_TranslateEdgeError): any;
  DecodeVertexError(Error: StepToTopoDS_TranslateVertexError): any;
  DecodeVertexLoopError(Error: StepToTopoDS_TranslateVertexLoopError): any;
  DecodePolyLoopError(Error: StepToTopoDS_TranslatePolyLoopError): any;
  DecodeGeometricToolError(Error: StepToTopoDS_GeometricToolError): Standard_CString;
}

export declare class StepToTopoDS_Root {
  IsDone(): Standard_Boolean;
  Precision(): Standard_Real;
  SetPrecision(preci: Standard_Real): void;
  MaxTol(): Standard_Real;
  SetMaxTol(maxpreci: Standard_Real): void;
}

export declare class StepToTopoDS_CartesianPointHasher {
  constructor();
  HashCode(theCartesianPoint: any, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(K1: any, K2: any): Standard_Boolean;
}

export declare class StepToTopoDS_PointPair {
  constructor(P1: any, P2: any)
}

export declare class StepToTopoDS_PointPairHasher {
  constructor();
  HashCode(thePointPair: StepToTopoDS_PointPair, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(K1: StepToTopoDS_PointPair, K2: StepToTopoDS_PointPair): Standard_Boolean;
}

export declare class StepToTopoDS_GeometricTool {
  constructor();
  PCurve(SC: any, S: any, PC: any, last: Standard_Integer): Standard_Integer;
  IsSeamCurve(SC: any, S: any, E: any, EL: any): Standard_Boolean;
  IsLikeSeam(SC: any, S: any, E: any, EL: any): Standard_Boolean;
  UpdateParam3d(C: any, w1: Standard_Real, w2: Standard_Real, preci: Standard_Real): Standard_Boolean;
}

export declare class StepToTopoDS_MakeTransformed extends StepToTopoDS_Root {
  constructor()
  Compute_1(Origin: any, Target: any): Standard_Boolean;
  Compute_2(Operator: any): Standard_Boolean;
  Transformation(): gp_Trsf;
  Transform(shape: TopoDS_Shape): Standard_Boolean;
  TranslateMappedItem(mapit: any, TP: any, theProgress: Message_ProgressRange): TopoDS_Shape;
}

export declare class StepToTopoDS_Tool {
  Init(Map: StepToTopoDS_DataMapOfTRI, TP: any): void;
  IsBound(TRI: any): Standard_Boolean;
  Bind(TRI: any, S: TopoDS_Shape): void;
  Find(TRI: any): TopoDS_Shape;
  ClearEdgeMap(): void;
  IsEdgeBound(PP: StepToTopoDS_PointPair): Standard_Boolean;
  BindEdge(PP: StepToTopoDS_PointPair, E: TopoDS_Edge): void;
  FindEdge(PP: StepToTopoDS_PointPair): TopoDS_Edge;
  ClearVertexMap(): void;
  IsVertexBound(PG: any): Standard_Boolean;
  BindVertex(P: any, V: TopoDS_Vertex): void;
  FindVertex(P: any): TopoDS_Vertex;
  ComputePCurve_1(B: Standard_Boolean): void;
  ComputePCurve_2(): Standard_Boolean;
  TransientProcess(): any;
  AddContinuity_1(GeomSurf: any): void;
  AddContinuity_2(GeomCurve: any): void;
  AddContinuity_3(GeomCur2d: any): void;
  C0Surf(): Standard_Integer;
  C1Surf(): Standard_Integer;
  C2Surf(): Standard_Integer;
  C0Cur2(): Standard_Integer;
  C1Cur2(): Standard_Integer;
  C2Cur2(): Standard_Integer;
  C0Cur3(): Standard_Integer;
  C1Cur3(): Standard_Integer;
  C2Cur3(): Standard_Integer;
}

  export declare class StepToTopoDS_Tool_1 extends StepToTopoDS_Tool {
    constructor();
  }

  export declare class StepToTopoDS_Tool_2 extends StepToTopoDS_Tool {
    constructor(Map: StepToTopoDS_DataMapOfTRI, TP: any);
  }

export declare class StepToTopoDS_TranslateCompositeCurve extends StepToTopoDS_Root {
  Init_1(CC: any, TP: any): Standard_Boolean;
  Init_2(CC: any, TP: any, S: any, Surf: any): Standard_Boolean;
  Value(): TopoDS_Wire;
  IsInfiniteSegment(): Standard_Boolean;
}

  export declare class StepToTopoDS_TranslateCompositeCurve_1 extends StepToTopoDS_TranslateCompositeCurve {
    constructor();
  }

  export declare class StepToTopoDS_TranslateCompositeCurve_2 extends StepToTopoDS_TranslateCompositeCurve {
    constructor(CC: any, TP: any);
  }

  export declare class StepToTopoDS_TranslateCompositeCurve_3 extends StepToTopoDS_TranslateCompositeCurve {
    constructor(CC: any, TP: any, S: any, Surf: any);
  }

export declare class StepToTopoDS_TranslateCurveBoundedSurface extends StepToTopoDS_Root {
  Init(CBS: any, TP: any): Standard_Boolean;
  Value(): TopoDS_Face;
}

  export declare class StepToTopoDS_TranslateCurveBoundedSurface_1 extends StepToTopoDS_TranslateCurveBoundedSurface {
    constructor();
  }

  export declare class StepToTopoDS_TranslateCurveBoundedSurface_2 extends StepToTopoDS_TranslateCurveBoundedSurface {
    constructor(CBS: any, TP: any);
  }

export declare class StepToTopoDS_TranslateEdge extends StepToTopoDS_Root {
  Init(E: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool): void;
  MakeFromCurve3D(C3D: any, EC: any, Vend: any, preci: Standard_Real, E: TopoDS_Edge, V1: TopoDS_Vertex, V2: TopoDS_Vertex, T: StepToTopoDS_Tool): void;
  MakePCurve(PCU: any, ConvSurf: any): any;
  Value(): TopoDS_Shape;
  Error(): StepToTopoDS_TranslateEdgeError;
}

  export declare class StepToTopoDS_TranslateEdge_1 extends StepToTopoDS_TranslateEdge {
    constructor();
  }

  export declare class StepToTopoDS_TranslateEdge_2 extends StepToTopoDS_TranslateEdge {
    constructor(E: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool);
  }

export declare class StepToTopoDS_TranslateEdgeLoop extends StepToTopoDS_Root {
  Init(FB: any, F: TopoDS_Face, S: any, SS: any, ss: Standard_Boolean, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool): void;
  Value(): TopoDS_Shape;
  Error(): StepToTopoDS_TranslateEdgeLoopError;
}

  export declare class StepToTopoDS_TranslateEdgeLoop_1 extends StepToTopoDS_TranslateEdgeLoop {
    constructor();
  }

  export declare class StepToTopoDS_TranslateEdgeLoop_2 extends StepToTopoDS_TranslateEdgeLoop {
    constructor(FB: any, F: TopoDS_Face, S: any, SS: any, ss: Standard_Boolean, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool);
  }

export declare class StepToTopoDS_TranslateFace extends StepToTopoDS_Root {
  Init(FS: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool): void;
  Value(): TopoDS_Shape;
  Error(): StepToTopoDS_TranslateFaceError;
}

  export declare class StepToTopoDS_TranslateFace_1 extends StepToTopoDS_TranslateFace {
    constructor();
  }

  export declare class StepToTopoDS_TranslateFace_2 extends StepToTopoDS_TranslateFace {
    constructor(FS: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool);
  }

export declare class StepToTopoDS_TranslatePolyLoop extends StepToTopoDS_Root {
  Init(PL: any, T: StepToTopoDS_Tool, S: any, F: TopoDS_Face): void;
  Value(): TopoDS_Shape;
  Error(): StepToTopoDS_TranslatePolyLoopError;
}

  export declare class StepToTopoDS_TranslatePolyLoop_1 extends StepToTopoDS_TranslatePolyLoop {
    constructor();
  }

  export declare class StepToTopoDS_TranslatePolyLoop_2 extends StepToTopoDS_TranslatePolyLoop {
    constructor(PL: any, T: StepToTopoDS_Tool, S: any, F: TopoDS_Face);
  }

export declare class StepToTopoDS_TranslateShell extends StepToTopoDS_Root {
  constructor()
  Init(CFS: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool, theProgress: Message_ProgressRange): void;
  Value(): TopoDS_Shape;
  Error(): StepToTopoDS_TranslateShellError;
}

export declare class StepToTopoDS_TranslateVertex extends StepToTopoDS_Root {
  Init(V: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool): void;
  Value(): TopoDS_Shape;
  Error(): StepToTopoDS_TranslateVertexError;
}

  export declare class StepToTopoDS_TranslateVertex_1 extends StepToTopoDS_TranslateVertex {
    constructor();
  }

  export declare class StepToTopoDS_TranslateVertex_2 extends StepToTopoDS_TranslateVertex {
    constructor(V: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool);
  }

export declare class StepToTopoDS_TranslateVertexLoop extends StepToTopoDS_Root {
  Init(VL: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool): void;
  Value(): TopoDS_Shape;
  Error(): StepToTopoDS_TranslateVertexLoopError;
}

  export declare class StepToTopoDS_TranslateVertexLoop_1 extends StepToTopoDS_TranslateVertexLoop {
    constructor();
  }

  export declare class StepToTopoDS_TranslateVertexLoop_2 extends StepToTopoDS_TranslateVertexLoop {
    constructor(VL: any, T: StepToTopoDS_Tool, NMTool: StepToTopoDS_NMTool);
  }

export declare class TopoDSToStep {
  constructor();
  DecodeBuilderError(E: TopoDSToStep_BuilderError): any;
  DecodeFaceError(E: TopoDSToStep_MakeFaceError): any;
  DecodeWireError(E: TopoDSToStep_MakeWireError): any;
  DecodeEdgeError(E: TopoDSToStep_MakeEdgeError): any;
  DecodeVertexError(E: TopoDSToStep_MakeVertexError): any;
  AddResult_1(FP: any, Shape: TopoDS_Shape, entity: any): void;
  AddResult_2(FP: any, Tool: TopoDSToStep_Tool): void;
}

export declare class TopoDSToStep_Root {
  Tolerance(): Standard_Real;
  IsDone(): Standard_Boolean;
}

export declare class TopoDSToStep_Builder extends TopoDSToStep_Root {
  Init(S: TopoDS_Shape, T: TopoDSToStep_Tool, FP: any, theProgress: Message_ProgressRange): void;
  Error(): TopoDSToStep_BuilderError;
  Value(): any;
}

  export declare class TopoDSToStep_Builder_1 extends TopoDSToStep_Builder {
    constructor();
  }

  export declare class TopoDSToStep_Builder_2 extends TopoDSToStep_Builder {
    constructor(S: TopoDS_Shape, T: TopoDSToStep_Tool, FP: any, theProgress: Message_ProgressRange);
  }

export declare class TopoDSToStep_FacetedTool {
  constructor();
  CheckTopoDSShape(SH: TopoDS_Shape): TopoDSToStep_FacetedError;
}

export declare class TopoDSToStep_MakeBrepWithVoids extends TopoDSToStep_Root {
  constructor(S: TopoDS_Solid, FP: any, theProgress: Message_ProgressRange)
  Value(): any;
}

export declare class TopoDSToStep_MakeFacetedBrep extends TopoDSToStep_Root {
  Value(): any;
}

  export declare class TopoDSToStep_MakeFacetedBrep_1 extends TopoDSToStep_MakeFacetedBrep {
    constructor(S: TopoDS_Shell, FP: any, theProgress: Message_ProgressRange);
  }

  export declare class TopoDSToStep_MakeFacetedBrep_2 extends TopoDSToStep_MakeFacetedBrep {
    constructor(S: TopoDS_Solid, FP: any, theProgress: Message_ProgressRange);
  }

export declare class TopoDSToStep_MakeFacetedBrepAndBrepWithVoids extends TopoDSToStep_Root {
  constructor(S: TopoDS_Solid, FP: any, theProgress: Message_ProgressRange)
  Value(): any;
}

export declare class TopoDSToStep_MakeGeometricCurveSet extends TopoDSToStep_Root {
  constructor(SH: TopoDS_Shape, FP: any)
  Value(): any;
}

export declare class TopoDSToStep_MakeManifoldSolidBrep extends TopoDSToStep_Root {
  Value(): any;
}

  export declare class TopoDSToStep_MakeManifoldSolidBrep_1 extends TopoDSToStep_MakeManifoldSolidBrep {
    constructor(S: TopoDS_Shell, FP: any, theProgress: Message_ProgressRange);
  }

  export declare class TopoDSToStep_MakeManifoldSolidBrep_2 extends TopoDSToStep_MakeManifoldSolidBrep {
    constructor(S: TopoDS_Solid, FP: any, theProgress: Message_ProgressRange);
  }

export declare class TopoDSToStep_MakeShellBasedSurfaceModel extends TopoDSToStep_Root {
  Value(): any;
}

  export declare class TopoDSToStep_MakeShellBasedSurfaceModel_1 extends TopoDSToStep_MakeShellBasedSurfaceModel {
    constructor(F: TopoDS_Face, FP: any, theProgress: Message_ProgressRange);
  }

  export declare class TopoDSToStep_MakeShellBasedSurfaceModel_2 extends TopoDSToStep_MakeShellBasedSurfaceModel {
    constructor(S: TopoDS_Shell, FP: any, theProgress: Message_ProgressRange);
  }

  export declare class TopoDSToStep_MakeShellBasedSurfaceModel_3 extends TopoDSToStep_MakeShellBasedSurfaceModel {
    constructor(S: TopoDS_Solid, FP: any, theProgress: Message_ProgressRange);
  }

export declare class TopoDSToStep_MakeStepEdge extends TopoDSToStep_Root {
  Init(E: TopoDS_Edge, T: TopoDSToStep_Tool, FP: any): void;
  Value(): any;
  Error(): TopoDSToStep_MakeEdgeError;
}

  export declare class TopoDSToStep_MakeStepEdge_1 extends TopoDSToStep_MakeStepEdge {
    constructor();
  }

  export declare class TopoDSToStep_MakeStepEdge_2 extends TopoDSToStep_MakeStepEdge {
    constructor(E: TopoDS_Edge, T: TopoDSToStep_Tool, FP: any);
  }

export declare class TopoDSToStep_MakeStepFace extends TopoDSToStep_Root {
  Init(F: TopoDS_Face, T: TopoDSToStep_Tool, FP: any): void;
  Value(): any;
  Error(): TopoDSToStep_MakeFaceError;
}

  export declare class TopoDSToStep_MakeStepFace_1 extends TopoDSToStep_MakeStepFace {
    constructor();
  }

  export declare class TopoDSToStep_MakeStepFace_2 extends TopoDSToStep_MakeStepFace {
    constructor(F: TopoDS_Face, T: TopoDSToStep_Tool, FP: any);
  }

export declare class TopoDSToStep_MakeStepVertex extends TopoDSToStep_Root {
  Init(V: TopoDS_Vertex, T: TopoDSToStep_Tool, FP: any): void;
  Value(): any;
  Error(): TopoDSToStep_MakeVertexError;
}

  export declare class TopoDSToStep_MakeStepVertex_1 extends TopoDSToStep_MakeStepVertex {
    constructor();
  }

  export declare class TopoDSToStep_MakeStepVertex_2 extends TopoDSToStep_MakeStepVertex {
    constructor(V: TopoDS_Vertex, T: TopoDSToStep_Tool, FP: any);
  }

export declare class TopoDSToStep_MakeStepWire extends TopoDSToStep_Root {
  Init(W: TopoDS_Wire, T: TopoDSToStep_Tool, FP: any): void;
  Value(): any;
  Error(): TopoDSToStep_MakeWireError;
}

  export declare class TopoDSToStep_MakeStepWire_1 extends TopoDSToStep_MakeStepWire {
    constructor();
  }

  export declare class TopoDSToStep_MakeStepWire_2 extends TopoDSToStep_MakeStepWire {
    constructor(W: TopoDS_Wire, T: TopoDSToStep_Tool, FP: any);
  }

export declare class TopoDSToStep_Tool {
  Init(M: MoniTool_DataMapOfShapeTransient, FacetedContext: Standard_Boolean): void;
  IsBound(S: TopoDS_Shape): Standard_Boolean;
  Bind(S: TopoDS_Shape, T: any): void;
  Find(S: TopoDS_Shape): any;
  Faceted(): Standard_Boolean;
  SetCurrentShell(S: TopoDS_Shell): void;
  CurrentShell(): TopoDS_Shell;
  SetCurrentFace(F: TopoDS_Face): void;
  CurrentFace(): TopoDS_Face;
  SetCurrentWire(W: TopoDS_Wire): void;
  CurrentWire(): TopoDS_Wire;
  SetCurrentEdge(E: TopoDS_Edge): void;
  CurrentEdge(): TopoDS_Edge;
  SetCurrentVertex(V: TopoDS_Vertex): void;
  CurrentVertex(): TopoDS_Vertex;
  Lowest3DTolerance(): Standard_Real;
  SetSurfaceReversed(B: Standard_Boolean): void;
  SurfaceReversed(): Standard_Boolean;
  Map(): MoniTool_DataMapOfShapeTransient;
  PCurveMode(): Standard_Integer;
}

  export declare class TopoDSToStep_Tool_1 extends TopoDSToStep_Tool {
    constructor();
  }

  export declare class TopoDSToStep_Tool_2 extends TopoDSToStep_Tool {
    constructor(M: MoniTool_DataMapOfShapeTransient, FacetedContext: Standard_Boolean);
  }

export declare class TopoDSToStep_WireframeBuilder extends TopoDSToStep_Root {
  Init(S: TopoDS_Shape, T: TopoDSToStep_Tool, FP: any): void;
  Error(): TopoDSToStep_BuilderError;
  Value(): any;
  GetTrimmedCurveFromEdge(E: TopoDS_Edge, F: TopoDS_Face, M: MoniTool_DataMapOfShapeTransient, L: any): Standard_Boolean;
  GetTrimmedCurveFromFace(F: TopoDS_Face, M: MoniTool_DataMapOfShapeTransient, L: any): Standard_Boolean;
  GetTrimmedCurveFromShape(S: TopoDS_Shape, M: MoniTool_DataMapOfShapeTransient, L: any): Standard_Boolean;
}

  export declare class TopoDSToStep_WireframeBuilder_1 extends TopoDSToStep_WireframeBuilder {
    constructor();
  }

  export declare class TopoDSToStep_WireframeBuilder_2 extends TopoDSToStep_WireframeBuilder {
    constructor(S: TopoDS_Shape, T: TopoDSToStep_Tool, FP: any);
  }

export declare class Handle_RWStepAP214_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: RWStepAP214_GeneralModule): void;
  get(): RWStepAP214_GeneralModule;
}

  export declare class Handle_RWStepAP214_GeneralModule_1 extends Handle_RWStepAP214_GeneralModule {
    constructor();
  }

  export declare class Handle_RWStepAP214_GeneralModule_2 extends Handle_RWStepAP214_GeneralModule {
    constructor(thePtr: RWStepAP214_GeneralModule);
  }

  export declare class Handle_RWStepAP214_GeneralModule_3 extends Handle_RWStepAP214_GeneralModule {
    constructor(theHandle: Handle_RWStepAP214_GeneralModule);
  }

  export declare class Handle_RWStepAP214_GeneralModule_4 extends Handle_RWStepAP214_GeneralModule {
    constructor(theHandle: Handle_RWStepAP214_GeneralModule);
  }

export declare class Handle_RWStepAP214_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: RWStepAP214_ReadWriteModule): void;
  get(): RWStepAP214_ReadWriteModule;
}

  export declare class Handle_RWStepAP214_ReadWriteModule_1 extends Handle_RWStepAP214_ReadWriteModule {
    constructor();
  }

  export declare class Handle_RWStepAP214_ReadWriteModule_2 extends Handle_RWStepAP214_ReadWriteModule {
    constructor(thePtr: RWStepAP214_ReadWriteModule);
  }

  export declare class Handle_RWStepAP214_ReadWriteModule_3 extends Handle_RWStepAP214_ReadWriteModule {
    constructor(theHandle: Handle_RWStepAP214_ReadWriteModule);
  }

  export declare class Handle_RWStepAP214_ReadWriteModule_4 extends Handle_RWStepAP214_ReadWriteModule {
    constructor(theHandle: Handle_RWStepAP214_ReadWriteModule);
  }

export declare class Handle_STEPControl_ActorWrite {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPControl_ActorWrite): void;
  get(): STEPControl_ActorWrite;
}

  export declare class Handle_STEPControl_ActorWrite_1 extends Handle_STEPControl_ActorWrite {
    constructor();
  }

  export declare class Handle_STEPControl_ActorWrite_2 extends Handle_STEPControl_ActorWrite {
    constructor(thePtr: STEPControl_ActorWrite);
  }

  export declare class Handle_STEPControl_ActorWrite_3 extends Handle_STEPControl_ActorWrite {
    constructor(theHandle: Handle_STEPControl_ActorWrite);
  }

  export declare class Handle_STEPControl_ActorWrite_4 extends Handle_STEPControl_ActorWrite {
    constructor(theHandle: Handle_STEPControl_ActorWrite);
  }

export declare class Handle_STEPControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPControl_Controller): void;
  get(): STEPControl_Controller;
}

  export declare class Handle_STEPControl_Controller_1 extends Handle_STEPControl_Controller {
    constructor();
  }

  export declare class Handle_STEPControl_Controller_2 extends Handle_STEPControl_Controller {
    constructor(thePtr: STEPControl_Controller);
  }

  export declare class Handle_STEPControl_Controller_3 extends Handle_STEPControl_Controller {
    constructor(theHandle: Handle_STEPControl_Controller);
  }

  export declare class Handle_STEPControl_Controller_4 extends Handle_STEPControl_Controller {
    constructor(theHandle: Handle_STEPControl_Controller);
  }

export declare class Handle_StepAP242_ItemIdentifiedRepresentationUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP242_ItemIdentifiedRepresentationUsage): void;
  get(): StepAP242_ItemIdentifiedRepresentationUsage;
}

  export declare class Handle_StepAP242_ItemIdentifiedRepresentationUsage_1 extends Handle_StepAP242_ItemIdentifiedRepresentationUsage {
    constructor();
  }

  export declare class Handle_StepAP242_ItemIdentifiedRepresentationUsage_2 extends Handle_StepAP242_ItemIdentifiedRepresentationUsage {
    constructor(thePtr: StepAP242_ItemIdentifiedRepresentationUsage);
  }

  export declare class Handle_StepAP242_ItemIdentifiedRepresentationUsage_3 extends Handle_StepAP242_ItemIdentifiedRepresentationUsage {
    constructor(theHandle: Handle_StepAP242_ItemIdentifiedRepresentationUsage);
  }

  export declare class Handle_StepAP242_ItemIdentifiedRepresentationUsage_4 extends Handle_StepAP242_ItemIdentifiedRepresentationUsage {
    constructor(theHandle: Handle_StepAP242_ItemIdentifiedRepresentationUsage);
  }

export declare class Handle_StepAP242_GeometricItemSpecificUsage {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP242_GeometricItemSpecificUsage): void;
  get(): StepAP242_GeometricItemSpecificUsage;
}

  export declare class Handle_StepAP242_GeometricItemSpecificUsage_1 extends Handle_StepAP242_GeometricItemSpecificUsage {
    constructor();
  }

  export declare class Handle_StepAP242_GeometricItemSpecificUsage_2 extends Handle_StepAP242_GeometricItemSpecificUsage {
    constructor(thePtr: StepAP242_GeometricItemSpecificUsage);
  }

  export declare class Handle_StepAP242_GeometricItemSpecificUsage_3 extends Handle_StepAP242_GeometricItemSpecificUsage {
    constructor(theHandle: Handle_StepAP242_GeometricItemSpecificUsage);
  }

  export declare class Handle_StepAP242_GeometricItemSpecificUsage_4 extends Handle_StepAP242_GeometricItemSpecificUsage {
    constructor(theHandle: Handle_StepAP242_GeometricItemSpecificUsage);
  }

export declare class StepToTopoDS_DataMapOfRINames extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: StepToTopoDS_DataMapOfRINames): void;
  Assign(theOther: StepToTopoDS_DataMapOfRINames): StepToTopoDS_DataMapOfRINames;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_AsciiString, theItem: TopoDS_Shape): Standard_Boolean;
  Bound(theKey: TCollection_AsciiString, theItem: TopoDS_Shape): TopoDS_Shape;
  IsBound(theKey: TCollection_AsciiString): Standard_Boolean;
  UnBind(theKey: TCollection_AsciiString): Standard_Boolean;
  Seek(theKey: TCollection_AsciiString): TopoDS_Shape;
  Find_1(theKey: TCollection_AsciiString): TopoDS_Shape;
  Find_2(theKey: TCollection_AsciiString, theValue: TopoDS_Shape): Standard_Boolean;
  ChangeSeek(theKey: TCollection_AsciiString): TopoDS_Shape;
  ChangeFind(theKey: TCollection_AsciiString): TopoDS_Shape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class StepToTopoDS_DataMapOfRINames_1 extends StepToTopoDS_DataMapOfRINames {
    constructor();
  }

  export declare class StepToTopoDS_DataMapOfRINames_2 extends StepToTopoDS_DataMapOfRINames {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class StepToTopoDS_DataMapOfRINames_3 extends StepToTopoDS_DataMapOfRINames {
    constructor(theOther: StepToTopoDS_DataMapOfRINames);
  }

export declare class Handle_STEPControl_ActorRead {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPControl_ActorRead): void;
  get(): STEPControl_ActorRead;
}

  export declare class Handle_STEPControl_ActorRead_1 extends Handle_STEPControl_ActorRead {
    constructor();
  }

  export declare class Handle_STEPControl_ActorRead_2 extends Handle_STEPControl_ActorRead {
    constructor(thePtr: STEPControl_ActorRead);
  }

  export declare class Handle_STEPControl_ActorRead_3 extends Handle_STEPControl_ActorRead {
    constructor(theHandle: Handle_STEPControl_ActorRead);
  }

  export declare class Handle_STEPControl_ActorRead_4 extends Handle_STEPControl_ActorRead {
    constructor(theHandle: Handle_STEPControl_ActorRead);
  }

export declare class Handle_STEPEdit_EditContext {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPEdit_EditContext): void;
  get(): STEPEdit_EditContext;
}

  export declare class Handle_STEPEdit_EditContext_1 extends Handle_STEPEdit_EditContext {
    constructor();
  }

  export declare class Handle_STEPEdit_EditContext_2 extends Handle_STEPEdit_EditContext {
    constructor(thePtr: STEPEdit_EditContext);
  }

  export declare class Handle_STEPEdit_EditContext_3 extends Handle_STEPEdit_EditContext {
    constructor(theHandle: Handle_STEPEdit_EditContext);
  }

  export declare class Handle_STEPEdit_EditContext_4 extends Handle_STEPEdit_EditContext {
    constructor(theHandle: Handle_STEPEdit_EditContext);
  }

export declare class Handle_STEPEdit_EditSDR {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPEdit_EditSDR): void;
  get(): STEPEdit_EditSDR;
}

  export declare class Handle_STEPEdit_EditSDR_1 extends Handle_STEPEdit_EditSDR {
    constructor();
  }

  export declare class Handle_STEPEdit_EditSDR_2 extends Handle_STEPEdit_EditSDR {
    constructor(thePtr: STEPEdit_EditSDR);
  }

  export declare class Handle_STEPEdit_EditSDR_3 extends Handle_STEPEdit_EditSDR {
    constructor(theHandle: Handle_STEPEdit_EditSDR);
  }

  export declare class Handle_STEPEdit_EditSDR_4 extends Handle_STEPEdit_EditSDR {
    constructor(theHandle: Handle_STEPEdit_EditSDR);
  }

export declare class Handle_STEPSelections_AssemblyLink {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_AssemblyLink): void;
  get(): STEPSelections_AssemblyLink;
}

  export declare class Handle_STEPSelections_AssemblyLink_1 extends Handle_STEPSelections_AssemblyLink {
    constructor();
  }

  export declare class Handle_STEPSelections_AssemblyLink_2 extends Handle_STEPSelections_AssemblyLink {
    constructor(thePtr: STEPSelections_AssemblyLink);
  }

  export declare class Handle_STEPSelections_AssemblyLink_3 extends Handle_STEPSelections_AssemblyLink {
    constructor(theHandle: Handle_STEPSelections_AssemblyLink);
  }

  export declare class Handle_STEPSelections_AssemblyLink_4 extends Handle_STEPSelections_AssemblyLink {
    constructor(theHandle: Handle_STEPSelections_AssemblyLink);
  }

export declare class Handle_STEPSelections_HSequenceOfAssemblyLink {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_HSequenceOfAssemblyLink): void;
  get(): STEPSelections_HSequenceOfAssemblyLink;
}

  export declare class Handle_STEPSelections_HSequenceOfAssemblyLink_1 extends Handle_STEPSelections_HSequenceOfAssemblyLink {
    constructor();
  }

  export declare class Handle_STEPSelections_HSequenceOfAssemblyLink_2 extends Handle_STEPSelections_HSequenceOfAssemblyLink {
    constructor(thePtr: STEPSelections_HSequenceOfAssemblyLink);
  }

  export declare class Handle_STEPSelections_HSequenceOfAssemblyLink_3 extends Handle_STEPSelections_HSequenceOfAssemblyLink {
    constructor(theHandle: Handle_STEPSelections_HSequenceOfAssemblyLink);
  }

  export declare class Handle_STEPSelections_HSequenceOfAssemblyLink_4 extends Handle_STEPSelections_HSequenceOfAssemblyLink {
    constructor(theHandle: Handle_STEPSelections_HSequenceOfAssemblyLink);
  }

export declare class Handle_STEPSelections_AssemblyComponent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_AssemblyComponent): void;
  get(): STEPSelections_AssemblyComponent;
}

  export declare class Handle_STEPSelections_AssemblyComponent_1 extends Handle_STEPSelections_AssemblyComponent {
    constructor();
  }

  export declare class Handle_STEPSelections_AssemblyComponent_2 extends Handle_STEPSelections_AssemblyComponent {
    constructor(thePtr: STEPSelections_AssemblyComponent);
  }

  export declare class Handle_STEPSelections_AssemblyComponent_3 extends Handle_STEPSelections_AssemblyComponent {
    constructor(theHandle: Handle_STEPSelections_AssemblyComponent);
  }

  export declare class Handle_STEPSelections_AssemblyComponent_4 extends Handle_STEPSelections_AssemblyComponent {
    constructor(theHandle: Handle_STEPSelections_AssemblyComponent);
  }

export declare class Handle_STEPSelections_SelectAssembly {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_SelectAssembly): void;
  get(): STEPSelections_SelectAssembly;
}

  export declare class Handle_STEPSelections_SelectAssembly_1 extends Handle_STEPSelections_SelectAssembly {
    constructor();
  }

  export declare class Handle_STEPSelections_SelectAssembly_2 extends Handle_STEPSelections_SelectAssembly {
    constructor(thePtr: STEPSelections_SelectAssembly);
  }

  export declare class Handle_STEPSelections_SelectAssembly_3 extends Handle_STEPSelections_SelectAssembly {
    constructor(theHandle: Handle_STEPSelections_SelectAssembly);
  }

  export declare class Handle_STEPSelections_SelectAssembly_4 extends Handle_STEPSelections_SelectAssembly {
    constructor(theHandle: Handle_STEPSelections_SelectAssembly);
  }

export declare class Handle_STEPSelections_SelectDerived {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_SelectDerived): void;
  get(): STEPSelections_SelectDerived;
}

  export declare class Handle_STEPSelections_SelectDerived_1 extends Handle_STEPSelections_SelectDerived {
    constructor();
  }

  export declare class Handle_STEPSelections_SelectDerived_2 extends Handle_STEPSelections_SelectDerived {
    constructor(thePtr: STEPSelections_SelectDerived);
  }

  export declare class Handle_STEPSelections_SelectDerived_3 extends Handle_STEPSelections_SelectDerived {
    constructor(theHandle: Handle_STEPSelections_SelectDerived);
  }

  export declare class Handle_STEPSelections_SelectDerived_4 extends Handle_STEPSelections_SelectDerived {
    constructor(theHandle: Handle_STEPSelections_SelectDerived);
  }

export declare class Handle_STEPSelections_SelectFaces {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_SelectFaces): void;
  get(): STEPSelections_SelectFaces;
}

  export declare class Handle_STEPSelections_SelectFaces_1 extends Handle_STEPSelections_SelectFaces {
    constructor();
  }

  export declare class Handle_STEPSelections_SelectFaces_2 extends Handle_STEPSelections_SelectFaces {
    constructor(thePtr: STEPSelections_SelectFaces);
  }

  export declare class Handle_STEPSelections_SelectFaces_3 extends Handle_STEPSelections_SelectFaces {
    constructor(theHandle: Handle_STEPSelections_SelectFaces);
  }

  export declare class Handle_STEPSelections_SelectFaces_4 extends Handle_STEPSelections_SelectFaces {
    constructor(theHandle: Handle_STEPSelections_SelectFaces);
  }

export declare class Handle_STEPSelections_SelectForTransfer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_SelectForTransfer): void;
  get(): STEPSelections_SelectForTransfer;
}

  export declare class Handle_STEPSelections_SelectForTransfer_1 extends Handle_STEPSelections_SelectForTransfer {
    constructor();
  }

  export declare class Handle_STEPSelections_SelectForTransfer_2 extends Handle_STEPSelections_SelectForTransfer {
    constructor(thePtr: STEPSelections_SelectForTransfer);
  }

  export declare class Handle_STEPSelections_SelectForTransfer_3 extends Handle_STEPSelections_SelectForTransfer {
    constructor(theHandle: Handle_STEPSelections_SelectForTransfer);
  }

  export declare class Handle_STEPSelections_SelectForTransfer_4 extends Handle_STEPSelections_SelectForTransfer {
    constructor(theHandle: Handle_STEPSelections_SelectForTransfer);
  }

export declare class Handle_STEPSelections_SelectGSCurves {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_SelectGSCurves): void;
  get(): STEPSelections_SelectGSCurves;
}

  export declare class Handle_STEPSelections_SelectGSCurves_1 extends Handle_STEPSelections_SelectGSCurves {
    constructor();
  }

  export declare class Handle_STEPSelections_SelectGSCurves_2 extends Handle_STEPSelections_SelectGSCurves {
    constructor(thePtr: STEPSelections_SelectGSCurves);
  }

  export declare class Handle_STEPSelections_SelectGSCurves_3 extends Handle_STEPSelections_SelectGSCurves {
    constructor(theHandle: Handle_STEPSelections_SelectGSCurves);
  }

  export declare class Handle_STEPSelections_SelectGSCurves_4 extends Handle_STEPSelections_SelectGSCurves {
    constructor(theHandle: Handle_STEPSelections_SelectGSCurves);
  }

export declare class Handle_STEPSelections_SelectInstances {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPSelections_SelectInstances): void;
  get(): STEPSelections_SelectInstances;
}

  export declare class Handle_STEPSelections_SelectInstances_1 extends Handle_STEPSelections_SelectInstances {
    constructor();
  }

  export declare class Handle_STEPSelections_SelectInstances_2 extends Handle_STEPSelections_SelectInstances {
    constructor(thePtr: STEPSelections_SelectInstances);
  }

  export declare class Handle_STEPSelections_SelectInstances_3 extends Handle_STEPSelections_SelectInstances {
    constructor(theHandle: Handle_STEPSelections_SelectInstances);
  }

  export declare class Handle_STEPSelections_SelectInstances_4 extends Handle_STEPSelections_SelectInstances {
    constructor(theHandle: Handle_STEPSelections_SelectInstances);
  }

export declare class StepAP203_Array1OfApprovedItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_ApprovedItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfApprovedItem): StepAP203_Array1OfApprovedItem;
  Move(theOther: StepAP203_Array1OfApprovedItem): StepAP203_Array1OfApprovedItem;
  First(): StepAP203_ApprovedItem;
  ChangeFirst(): StepAP203_ApprovedItem;
  Last(): StepAP203_ApprovedItem;
  ChangeLast(): StepAP203_ApprovedItem;
  Value(theIndex: Standard_Integer): StepAP203_ApprovedItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_ApprovedItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_ApprovedItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfApprovedItem_1 extends StepAP203_Array1OfApprovedItem {
    constructor();
  }

  export declare class StepAP203_Array1OfApprovedItem_2 extends StepAP203_Array1OfApprovedItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfApprovedItem_3 extends StepAP203_Array1OfApprovedItem {
    constructor(theOther: StepAP203_Array1OfApprovedItem);
  }

  export declare class StepAP203_Array1OfApprovedItem_4 extends StepAP203_Array1OfApprovedItem {
    constructor(theOther: StepAP203_Array1OfApprovedItem);
  }

  export declare class StepAP203_Array1OfApprovedItem_5 extends StepAP203_Array1OfApprovedItem {
    constructor(theBegin: StepAP203_ApprovedItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfCertifiedItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_CertifiedItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfCertifiedItem): StepAP203_Array1OfCertifiedItem;
  Move(theOther: StepAP203_Array1OfCertifiedItem): StepAP203_Array1OfCertifiedItem;
  First(): StepAP203_CertifiedItem;
  ChangeFirst(): StepAP203_CertifiedItem;
  Last(): StepAP203_CertifiedItem;
  ChangeLast(): StepAP203_CertifiedItem;
  Value(theIndex: Standard_Integer): StepAP203_CertifiedItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_CertifiedItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_CertifiedItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfCertifiedItem_1 extends StepAP203_Array1OfCertifiedItem {
    constructor();
  }

  export declare class StepAP203_Array1OfCertifiedItem_2 extends StepAP203_Array1OfCertifiedItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfCertifiedItem_3 extends StepAP203_Array1OfCertifiedItem {
    constructor(theOther: StepAP203_Array1OfCertifiedItem);
  }

  export declare class StepAP203_Array1OfCertifiedItem_4 extends StepAP203_Array1OfCertifiedItem {
    constructor(theOther: StepAP203_Array1OfCertifiedItem);
  }

  export declare class StepAP203_Array1OfCertifiedItem_5 extends StepAP203_Array1OfCertifiedItem {
    constructor(theBegin: StepAP203_CertifiedItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfChangeRequestItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_ChangeRequestItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfChangeRequestItem): StepAP203_Array1OfChangeRequestItem;
  Move(theOther: StepAP203_Array1OfChangeRequestItem): StepAP203_Array1OfChangeRequestItem;
  First(): StepAP203_ChangeRequestItem;
  ChangeFirst(): StepAP203_ChangeRequestItem;
  Last(): StepAP203_ChangeRequestItem;
  ChangeLast(): StepAP203_ChangeRequestItem;
  Value(theIndex: Standard_Integer): StepAP203_ChangeRequestItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_ChangeRequestItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_ChangeRequestItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfChangeRequestItem_1 extends StepAP203_Array1OfChangeRequestItem {
    constructor();
  }

  export declare class StepAP203_Array1OfChangeRequestItem_2 extends StepAP203_Array1OfChangeRequestItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfChangeRequestItem_3 extends StepAP203_Array1OfChangeRequestItem {
    constructor(theOther: StepAP203_Array1OfChangeRequestItem);
  }

  export declare class StepAP203_Array1OfChangeRequestItem_4 extends StepAP203_Array1OfChangeRequestItem {
    constructor(theOther: StepAP203_Array1OfChangeRequestItem);
  }

  export declare class StepAP203_Array1OfChangeRequestItem_5 extends StepAP203_Array1OfChangeRequestItem {
    constructor(theBegin: StepAP203_ChangeRequestItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfClassifiedItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_ClassifiedItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfClassifiedItem): StepAP203_Array1OfClassifiedItem;
  Move(theOther: StepAP203_Array1OfClassifiedItem): StepAP203_Array1OfClassifiedItem;
  First(): StepAP203_ClassifiedItem;
  ChangeFirst(): StepAP203_ClassifiedItem;
  Last(): StepAP203_ClassifiedItem;
  ChangeLast(): StepAP203_ClassifiedItem;
  Value(theIndex: Standard_Integer): StepAP203_ClassifiedItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_ClassifiedItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_ClassifiedItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfClassifiedItem_1 extends StepAP203_Array1OfClassifiedItem {
    constructor();
  }

  export declare class StepAP203_Array1OfClassifiedItem_2 extends StepAP203_Array1OfClassifiedItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfClassifiedItem_3 extends StepAP203_Array1OfClassifiedItem {
    constructor(theOther: StepAP203_Array1OfClassifiedItem);
  }

  export declare class StepAP203_Array1OfClassifiedItem_4 extends StepAP203_Array1OfClassifiedItem {
    constructor(theOther: StepAP203_Array1OfClassifiedItem);
  }

  export declare class StepAP203_Array1OfClassifiedItem_5 extends StepAP203_Array1OfClassifiedItem {
    constructor(theBegin: StepAP203_ClassifiedItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfContractedItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_ContractedItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfContractedItem): StepAP203_Array1OfContractedItem;
  Move(theOther: StepAP203_Array1OfContractedItem): StepAP203_Array1OfContractedItem;
  First(): StepAP203_ContractedItem;
  ChangeFirst(): StepAP203_ContractedItem;
  Last(): StepAP203_ContractedItem;
  ChangeLast(): StepAP203_ContractedItem;
  Value(theIndex: Standard_Integer): StepAP203_ContractedItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_ContractedItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_ContractedItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfContractedItem_1 extends StepAP203_Array1OfContractedItem {
    constructor();
  }

  export declare class StepAP203_Array1OfContractedItem_2 extends StepAP203_Array1OfContractedItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfContractedItem_3 extends StepAP203_Array1OfContractedItem {
    constructor(theOther: StepAP203_Array1OfContractedItem);
  }

  export declare class StepAP203_Array1OfContractedItem_4 extends StepAP203_Array1OfContractedItem {
    constructor(theOther: StepAP203_Array1OfContractedItem);
  }

  export declare class StepAP203_Array1OfContractedItem_5 extends StepAP203_Array1OfContractedItem {
    constructor(theBegin: StepAP203_ContractedItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfDateTimeItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_DateTimeItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfDateTimeItem): StepAP203_Array1OfDateTimeItem;
  Move(theOther: StepAP203_Array1OfDateTimeItem): StepAP203_Array1OfDateTimeItem;
  First(): StepAP203_DateTimeItem;
  ChangeFirst(): StepAP203_DateTimeItem;
  Last(): StepAP203_DateTimeItem;
  ChangeLast(): StepAP203_DateTimeItem;
  Value(theIndex: Standard_Integer): StepAP203_DateTimeItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_DateTimeItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_DateTimeItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfDateTimeItem_1 extends StepAP203_Array1OfDateTimeItem {
    constructor();
  }

  export declare class StepAP203_Array1OfDateTimeItem_2 extends StepAP203_Array1OfDateTimeItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfDateTimeItem_3 extends StepAP203_Array1OfDateTimeItem {
    constructor(theOther: StepAP203_Array1OfDateTimeItem);
  }

  export declare class StepAP203_Array1OfDateTimeItem_4 extends StepAP203_Array1OfDateTimeItem {
    constructor(theOther: StepAP203_Array1OfDateTimeItem);
  }

  export declare class StepAP203_Array1OfDateTimeItem_5 extends StepAP203_Array1OfDateTimeItem {
    constructor(theBegin: StepAP203_DateTimeItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfPersonOrganizationItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_PersonOrganizationItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfPersonOrganizationItem): StepAP203_Array1OfPersonOrganizationItem;
  Move(theOther: StepAP203_Array1OfPersonOrganizationItem): StepAP203_Array1OfPersonOrganizationItem;
  First(): StepAP203_PersonOrganizationItem;
  ChangeFirst(): StepAP203_PersonOrganizationItem;
  Last(): StepAP203_PersonOrganizationItem;
  ChangeLast(): StepAP203_PersonOrganizationItem;
  Value(theIndex: Standard_Integer): StepAP203_PersonOrganizationItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_PersonOrganizationItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_PersonOrganizationItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfPersonOrganizationItem_1 extends StepAP203_Array1OfPersonOrganizationItem {
    constructor();
  }

  export declare class StepAP203_Array1OfPersonOrganizationItem_2 extends StepAP203_Array1OfPersonOrganizationItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfPersonOrganizationItem_3 extends StepAP203_Array1OfPersonOrganizationItem {
    constructor(theOther: StepAP203_Array1OfPersonOrganizationItem);
  }

  export declare class StepAP203_Array1OfPersonOrganizationItem_4 extends StepAP203_Array1OfPersonOrganizationItem {
    constructor(theOther: StepAP203_Array1OfPersonOrganizationItem);
  }

  export declare class StepAP203_Array1OfPersonOrganizationItem_5 extends StepAP203_Array1OfPersonOrganizationItem {
    constructor(theBegin: StepAP203_PersonOrganizationItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfSpecifiedItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_SpecifiedItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfSpecifiedItem): StepAP203_Array1OfSpecifiedItem;
  Move(theOther: StepAP203_Array1OfSpecifiedItem): StepAP203_Array1OfSpecifiedItem;
  First(): StepAP203_SpecifiedItem;
  ChangeFirst(): StepAP203_SpecifiedItem;
  Last(): StepAP203_SpecifiedItem;
  ChangeLast(): StepAP203_SpecifiedItem;
  Value(theIndex: Standard_Integer): StepAP203_SpecifiedItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_SpecifiedItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_SpecifiedItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfSpecifiedItem_1 extends StepAP203_Array1OfSpecifiedItem {
    constructor();
  }

  export declare class StepAP203_Array1OfSpecifiedItem_2 extends StepAP203_Array1OfSpecifiedItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfSpecifiedItem_3 extends StepAP203_Array1OfSpecifiedItem {
    constructor(theOther: StepAP203_Array1OfSpecifiedItem);
  }

  export declare class StepAP203_Array1OfSpecifiedItem_4 extends StepAP203_Array1OfSpecifiedItem {
    constructor(theOther: StepAP203_Array1OfSpecifiedItem);
  }

  export declare class StepAP203_Array1OfSpecifiedItem_5 extends StepAP203_Array1OfSpecifiedItem {
    constructor(theBegin: StepAP203_SpecifiedItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfStartRequestItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_StartRequestItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfStartRequestItem): StepAP203_Array1OfStartRequestItem;
  Move(theOther: StepAP203_Array1OfStartRequestItem): StepAP203_Array1OfStartRequestItem;
  First(): StepAP203_StartRequestItem;
  ChangeFirst(): StepAP203_StartRequestItem;
  Last(): StepAP203_StartRequestItem;
  ChangeLast(): StepAP203_StartRequestItem;
  Value(theIndex: Standard_Integer): StepAP203_StartRequestItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_StartRequestItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_StartRequestItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfStartRequestItem_1 extends StepAP203_Array1OfStartRequestItem {
    constructor();
  }

  export declare class StepAP203_Array1OfStartRequestItem_2 extends StepAP203_Array1OfStartRequestItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfStartRequestItem_3 extends StepAP203_Array1OfStartRequestItem {
    constructor(theOther: StepAP203_Array1OfStartRequestItem);
  }

  export declare class StepAP203_Array1OfStartRequestItem_4 extends StepAP203_Array1OfStartRequestItem {
    constructor(theOther: StepAP203_Array1OfStartRequestItem);
  }

  export declare class StepAP203_Array1OfStartRequestItem_5 extends StepAP203_Array1OfStartRequestItem {
    constructor(theBegin: StepAP203_StartRequestItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP203_Array1OfWorkItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP203_WorkItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP203_Array1OfWorkItem): StepAP203_Array1OfWorkItem;
  Move(theOther: StepAP203_Array1OfWorkItem): StepAP203_Array1OfWorkItem;
  First(): StepAP203_WorkItem;
  ChangeFirst(): StepAP203_WorkItem;
  Last(): StepAP203_WorkItem;
  ChangeLast(): StepAP203_WorkItem;
  Value(theIndex: Standard_Integer): StepAP203_WorkItem;
  ChangeValue(theIndex: Standard_Integer): StepAP203_WorkItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP203_WorkItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP203_Array1OfWorkItem_1 extends StepAP203_Array1OfWorkItem {
    constructor();
  }

  export declare class StepAP203_Array1OfWorkItem_2 extends StepAP203_Array1OfWorkItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP203_Array1OfWorkItem_3 extends StepAP203_Array1OfWorkItem {
    constructor(theOther: StepAP203_Array1OfWorkItem);
  }

  export declare class StepAP203_Array1OfWorkItem_4 extends StepAP203_Array1OfWorkItem {
    constructor(theOther: StepAP203_Array1OfWorkItem);
  }

  export declare class StepAP203_Array1OfWorkItem_5 extends StepAP203_Array1OfWorkItem {
    constructor(theBegin: StepAP203_WorkItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP203_HArray1OfApprovedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfApprovedItem): void;
  get(): StepAP203_HArray1OfApprovedItem;
}

  export declare class Handle_StepAP203_HArray1OfApprovedItem_1 extends Handle_StepAP203_HArray1OfApprovedItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfApprovedItem_2 extends Handle_StepAP203_HArray1OfApprovedItem {
    constructor(thePtr: StepAP203_HArray1OfApprovedItem);
  }

  export declare class Handle_StepAP203_HArray1OfApprovedItem_3 extends Handle_StepAP203_HArray1OfApprovedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfApprovedItem);
  }

  export declare class Handle_StepAP203_HArray1OfApprovedItem_4 extends Handle_StepAP203_HArray1OfApprovedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfApprovedItem);
  }

export declare class Handle_StepAP203_CcDesignApproval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_CcDesignApproval): void;
  get(): StepAP203_CcDesignApproval;
}

  export declare class Handle_StepAP203_CcDesignApproval_1 extends Handle_StepAP203_CcDesignApproval {
    constructor();
  }

  export declare class Handle_StepAP203_CcDesignApproval_2 extends Handle_StepAP203_CcDesignApproval {
    constructor(thePtr: StepAP203_CcDesignApproval);
  }

  export declare class Handle_StepAP203_CcDesignApproval_3 extends Handle_StepAP203_CcDesignApproval {
    constructor(theHandle: Handle_StepAP203_CcDesignApproval);
  }

  export declare class Handle_StepAP203_CcDesignApproval_4 extends Handle_StepAP203_CcDesignApproval {
    constructor(theHandle: Handle_StepAP203_CcDesignApproval);
  }

export declare class Handle_StepAP203_HArray1OfCertifiedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfCertifiedItem): void;
  get(): StepAP203_HArray1OfCertifiedItem;
}

  export declare class Handle_StepAP203_HArray1OfCertifiedItem_1 extends Handle_StepAP203_HArray1OfCertifiedItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfCertifiedItem_2 extends Handle_StepAP203_HArray1OfCertifiedItem {
    constructor(thePtr: StepAP203_HArray1OfCertifiedItem);
  }

  export declare class Handle_StepAP203_HArray1OfCertifiedItem_3 extends Handle_StepAP203_HArray1OfCertifiedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfCertifiedItem);
  }

  export declare class Handle_StepAP203_HArray1OfCertifiedItem_4 extends Handle_StepAP203_HArray1OfCertifiedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfCertifiedItem);
  }

export declare class Handle_StepAP203_CcDesignCertification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_CcDesignCertification): void;
  get(): StepAP203_CcDesignCertification;
}

  export declare class Handle_StepAP203_CcDesignCertification_1 extends Handle_StepAP203_CcDesignCertification {
    constructor();
  }

  export declare class Handle_StepAP203_CcDesignCertification_2 extends Handle_StepAP203_CcDesignCertification {
    constructor(thePtr: StepAP203_CcDesignCertification);
  }

  export declare class Handle_StepAP203_CcDesignCertification_3 extends Handle_StepAP203_CcDesignCertification {
    constructor(theHandle: Handle_StepAP203_CcDesignCertification);
  }

  export declare class Handle_StepAP203_CcDesignCertification_4 extends Handle_StepAP203_CcDesignCertification {
    constructor(theHandle: Handle_StepAP203_CcDesignCertification);
  }

export declare class Handle_StepAP203_HArray1OfContractedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfContractedItem): void;
  get(): StepAP203_HArray1OfContractedItem;
}

  export declare class Handle_StepAP203_HArray1OfContractedItem_1 extends Handle_StepAP203_HArray1OfContractedItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfContractedItem_2 extends Handle_StepAP203_HArray1OfContractedItem {
    constructor(thePtr: StepAP203_HArray1OfContractedItem);
  }

  export declare class Handle_StepAP203_HArray1OfContractedItem_3 extends Handle_StepAP203_HArray1OfContractedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfContractedItem);
  }

  export declare class Handle_StepAP203_HArray1OfContractedItem_4 extends Handle_StepAP203_HArray1OfContractedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfContractedItem);
  }

export declare class Handle_StepAP203_CcDesignContract {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_CcDesignContract): void;
  get(): StepAP203_CcDesignContract;
}

  export declare class Handle_StepAP203_CcDesignContract_1 extends Handle_StepAP203_CcDesignContract {
    constructor();
  }

  export declare class Handle_StepAP203_CcDesignContract_2 extends Handle_StepAP203_CcDesignContract {
    constructor(thePtr: StepAP203_CcDesignContract);
  }

  export declare class Handle_StepAP203_CcDesignContract_3 extends Handle_StepAP203_CcDesignContract {
    constructor(theHandle: Handle_StepAP203_CcDesignContract);
  }

  export declare class Handle_StepAP203_CcDesignContract_4 extends Handle_StepAP203_CcDesignContract {
    constructor(theHandle: Handle_StepAP203_CcDesignContract);
  }

export declare class Handle_StepAP203_HArray1OfDateTimeItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfDateTimeItem): void;
  get(): StepAP203_HArray1OfDateTimeItem;
}

  export declare class Handle_StepAP203_HArray1OfDateTimeItem_1 extends Handle_StepAP203_HArray1OfDateTimeItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfDateTimeItem_2 extends Handle_StepAP203_HArray1OfDateTimeItem {
    constructor(thePtr: StepAP203_HArray1OfDateTimeItem);
  }

  export declare class Handle_StepAP203_HArray1OfDateTimeItem_3 extends Handle_StepAP203_HArray1OfDateTimeItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfDateTimeItem);
  }

  export declare class Handle_StepAP203_HArray1OfDateTimeItem_4 extends Handle_StepAP203_HArray1OfDateTimeItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfDateTimeItem);
  }

export declare class Handle_StepAP203_CcDesignDateAndTimeAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_CcDesignDateAndTimeAssignment): void;
  get(): StepAP203_CcDesignDateAndTimeAssignment;
}

  export declare class Handle_StepAP203_CcDesignDateAndTimeAssignment_1 extends Handle_StepAP203_CcDesignDateAndTimeAssignment {
    constructor();
  }

  export declare class Handle_StepAP203_CcDesignDateAndTimeAssignment_2 extends Handle_StepAP203_CcDesignDateAndTimeAssignment {
    constructor(thePtr: StepAP203_CcDesignDateAndTimeAssignment);
  }

  export declare class Handle_StepAP203_CcDesignDateAndTimeAssignment_3 extends Handle_StepAP203_CcDesignDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP203_CcDesignDateAndTimeAssignment);
  }

  export declare class Handle_StepAP203_CcDesignDateAndTimeAssignment_4 extends Handle_StepAP203_CcDesignDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP203_CcDesignDateAndTimeAssignment);
  }

export declare class Handle_StepAP203_HArray1OfPersonOrganizationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfPersonOrganizationItem): void;
  get(): StepAP203_HArray1OfPersonOrganizationItem;
}

  export declare class Handle_StepAP203_HArray1OfPersonOrganizationItem_1 extends Handle_StepAP203_HArray1OfPersonOrganizationItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfPersonOrganizationItem_2 extends Handle_StepAP203_HArray1OfPersonOrganizationItem {
    constructor(thePtr: StepAP203_HArray1OfPersonOrganizationItem);
  }

  export declare class Handle_StepAP203_HArray1OfPersonOrganizationItem_3 extends Handle_StepAP203_HArray1OfPersonOrganizationItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfPersonOrganizationItem);
  }

  export declare class Handle_StepAP203_HArray1OfPersonOrganizationItem_4 extends Handle_StepAP203_HArray1OfPersonOrganizationItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfPersonOrganizationItem);
  }

export declare class Handle_StepAP203_CcDesignPersonAndOrganizationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_CcDesignPersonAndOrganizationAssignment): void;
  get(): StepAP203_CcDesignPersonAndOrganizationAssignment;
}

  export declare class Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_1 extends Handle_StepAP203_CcDesignPersonAndOrganizationAssignment {
    constructor();
  }

  export declare class Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_2 extends Handle_StepAP203_CcDesignPersonAndOrganizationAssignment {
    constructor(thePtr: StepAP203_CcDesignPersonAndOrganizationAssignment);
  }

  export declare class Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_3 extends Handle_StepAP203_CcDesignPersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepAP203_CcDesignPersonAndOrganizationAssignment);
  }

  export declare class Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_4 extends Handle_StepAP203_CcDesignPersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepAP203_CcDesignPersonAndOrganizationAssignment);
  }

export declare class Handle_StepAP203_HArray1OfClassifiedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfClassifiedItem): void;
  get(): StepAP203_HArray1OfClassifiedItem;
}

  export declare class Handle_StepAP203_HArray1OfClassifiedItem_1 extends Handle_StepAP203_HArray1OfClassifiedItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfClassifiedItem_2 extends Handle_StepAP203_HArray1OfClassifiedItem {
    constructor(thePtr: StepAP203_HArray1OfClassifiedItem);
  }

  export declare class Handle_StepAP203_HArray1OfClassifiedItem_3 extends Handle_StepAP203_HArray1OfClassifiedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfClassifiedItem);
  }

  export declare class Handle_StepAP203_HArray1OfClassifiedItem_4 extends Handle_StepAP203_HArray1OfClassifiedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfClassifiedItem);
  }

export declare class Handle_StepAP203_CcDesignSecurityClassification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_CcDesignSecurityClassification): void;
  get(): StepAP203_CcDesignSecurityClassification;
}

  export declare class Handle_StepAP203_CcDesignSecurityClassification_1 extends Handle_StepAP203_CcDesignSecurityClassification {
    constructor();
  }

  export declare class Handle_StepAP203_CcDesignSecurityClassification_2 extends Handle_StepAP203_CcDesignSecurityClassification {
    constructor(thePtr: StepAP203_CcDesignSecurityClassification);
  }

  export declare class Handle_StepAP203_CcDesignSecurityClassification_3 extends Handle_StepAP203_CcDesignSecurityClassification {
    constructor(theHandle: Handle_StepAP203_CcDesignSecurityClassification);
  }

  export declare class Handle_StepAP203_CcDesignSecurityClassification_4 extends Handle_StepAP203_CcDesignSecurityClassification {
    constructor(theHandle: Handle_StepAP203_CcDesignSecurityClassification);
  }

export declare class Handle_StepAP203_HArray1OfSpecifiedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfSpecifiedItem): void;
  get(): StepAP203_HArray1OfSpecifiedItem;
}

  export declare class Handle_StepAP203_HArray1OfSpecifiedItem_1 extends Handle_StepAP203_HArray1OfSpecifiedItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfSpecifiedItem_2 extends Handle_StepAP203_HArray1OfSpecifiedItem {
    constructor(thePtr: StepAP203_HArray1OfSpecifiedItem);
  }

  export declare class Handle_StepAP203_HArray1OfSpecifiedItem_3 extends Handle_StepAP203_HArray1OfSpecifiedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfSpecifiedItem);
  }

  export declare class Handle_StepAP203_HArray1OfSpecifiedItem_4 extends Handle_StepAP203_HArray1OfSpecifiedItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfSpecifiedItem);
  }

export declare class Handle_StepAP203_CcDesignSpecificationReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_CcDesignSpecificationReference): void;
  get(): StepAP203_CcDesignSpecificationReference;
}

  export declare class Handle_StepAP203_CcDesignSpecificationReference_1 extends Handle_StepAP203_CcDesignSpecificationReference {
    constructor();
  }

  export declare class Handle_StepAP203_CcDesignSpecificationReference_2 extends Handle_StepAP203_CcDesignSpecificationReference {
    constructor(thePtr: StepAP203_CcDesignSpecificationReference);
  }

  export declare class Handle_StepAP203_CcDesignSpecificationReference_3 extends Handle_StepAP203_CcDesignSpecificationReference {
    constructor(theHandle: Handle_StepAP203_CcDesignSpecificationReference);
  }

  export declare class Handle_StepAP203_CcDesignSpecificationReference_4 extends Handle_StepAP203_CcDesignSpecificationReference {
    constructor(theHandle: Handle_StepAP203_CcDesignSpecificationReference);
  }

export declare class Handle_StepAP203_HArray1OfWorkItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfWorkItem): void;
  get(): StepAP203_HArray1OfWorkItem;
}

  export declare class Handle_StepAP203_HArray1OfWorkItem_1 extends Handle_StepAP203_HArray1OfWorkItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfWorkItem_2 extends Handle_StepAP203_HArray1OfWorkItem {
    constructor(thePtr: StepAP203_HArray1OfWorkItem);
  }

  export declare class Handle_StepAP203_HArray1OfWorkItem_3 extends Handle_StepAP203_HArray1OfWorkItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfWorkItem);
  }

  export declare class Handle_StepAP203_HArray1OfWorkItem_4 extends Handle_StepAP203_HArray1OfWorkItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfWorkItem);
  }

export declare class Handle_StepAP203_Change {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_Change): void;
  get(): StepAP203_Change;
}

  export declare class Handle_StepAP203_Change_1 extends Handle_StepAP203_Change {
    constructor();
  }

  export declare class Handle_StepAP203_Change_2 extends Handle_StepAP203_Change {
    constructor(thePtr: StepAP203_Change);
  }

  export declare class Handle_StepAP203_Change_3 extends Handle_StepAP203_Change {
    constructor(theHandle: Handle_StepAP203_Change);
  }

  export declare class Handle_StepAP203_Change_4 extends Handle_StepAP203_Change {
    constructor(theHandle: Handle_StepAP203_Change);
  }

export declare class Handle_StepAP203_HArray1OfChangeRequestItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfChangeRequestItem): void;
  get(): StepAP203_HArray1OfChangeRequestItem;
}

  export declare class Handle_StepAP203_HArray1OfChangeRequestItem_1 extends Handle_StepAP203_HArray1OfChangeRequestItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfChangeRequestItem_2 extends Handle_StepAP203_HArray1OfChangeRequestItem {
    constructor(thePtr: StepAP203_HArray1OfChangeRequestItem);
  }

  export declare class Handle_StepAP203_HArray1OfChangeRequestItem_3 extends Handle_StepAP203_HArray1OfChangeRequestItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfChangeRequestItem);
  }

  export declare class Handle_StepAP203_HArray1OfChangeRequestItem_4 extends Handle_StepAP203_HArray1OfChangeRequestItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfChangeRequestItem);
  }

export declare class Handle_StepAP203_ChangeRequest {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_ChangeRequest): void;
  get(): StepAP203_ChangeRequest;
}

  export declare class Handle_StepAP203_ChangeRequest_1 extends Handle_StepAP203_ChangeRequest {
    constructor();
  }

  export declare class Handle_StepAP203_ChangeRequest_2 extends Handle_StepAP203_ChangeRequest {
    constructor(thePtr: StepAP203_ChangeRequest);
  }

  export declare class Handle_StepAP203_ChangeRequest_3 extends Handle_StepAP203_ChangeRequest {
    constructor(theHandle: Handle_StepAP203_ChangeRequest);
  }

  export declare class Handle_StepAP203_ChangeRequest_4 extends Handle_StepAP203_ChangeRequest {
    constructor(theHandle: Handle_StepAP203_ChangeRequest);
  }

export declare class Handle_StepAP203_HArray1OfStartRequestItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_HArray1OfStartRequestItem): void;
  get(): StepAP203_HArray1OfStartRequestItem;
}

  export declare class Handle_StepAP203_HArray1OfStartRequestItem_1 extends Handle_StepAP203_HArray1OfStartRequestItem {
    constructor();
  }

  export declare class Handle_StepAP203_HArray1OfStartRequestItem_2 extends Handle_StepAP203_HArray1OfStartRequestItem {
    constructor(thePtr: StepAP203_HArray1OfStartRequestItem);
  }

  export declare class Handle_StepAP203_HArray1OfStartRequestItem_3 extends Handle_StepAP203_HArray1OfStartRequestItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfStartRequestItem);
  }

  export declare class Handle_StepAP203_HArray1OfStartRequestItem_4 extends Handle_StepAP203_HArray1OfStartRequestItem {
    constructor(theHandle: Handle_StepAP203_HArray1OfStartRequestItem);
  }

export declare class Handle_StepAP203_StartRequest {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_StartRequest): void;
  get(): StepAP203_StartRequest;
}

  export declare class Handle_StepAP203_StartRequest_1 extends Handle_StepAP203_StartRequest {
    constructor();
  }

  export declare class Handle_StepAP203_StartRequest_2 extends Handle_StepAP203_StartRequest {
    constructor(thePtr: StepAP203_StartRequest);
  }

  export declare class Handle_StepAP203_StartRequest_3 extends Handle_StepAP203_StartRequest {
    constructor(theHandle: Handle_StepAP203_StartRequest);
  }

  export declare class Handle_StepAP203_StartRequest_4 extends Handle_StepAP203_StartRequest {
    constructor(theHandle: Handle_StepAP203_StartRequest);
  }

export declare class Handle_StepAP203_StartWork {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP203_StartWork): void;
  get(): StepAP203_StartWork;
}

  export declare class Handle_StepAP203_StartWork_1 extends Handle_StepAP203_StartWork {
    constructor();
  }

  export declare class Handle_StepAP203_StartWork_2 extends Handle_StepAP203_StartWork {
    constructor(thePtr: StepAP203_StartWork);
  }

  export declare class Handle_StepAP203_StartWork_3 extends Handle_StepAP203_StartWork {
    constructor(theHandle: Handle_StepAP203_StartWork);
  }

  export declare class Handle_StepAP203_StartWork_4 extends Handle_StepAP203_StartWork {
    constructor(theHandle: Handle_StepAP203_StartWork);
  }

export declare class StepAP214_Array1OfApprovalItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_ApprovalItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfApprovalItem): StepAP214_Array1OfApprovalItem;
  Move(theOther: StepAP214_Array1OfApprovalItem): StepAP214_Array1OfApprovalItem;
  First(): StepAP214_ApprovalItem;
  ChangeFirst(): StepAP214_ApprovalItem;
  Last(): StepAP214_ApprovalItem;
  ChangeLast(): StepAP214_ApprovalItem;
  Value(theIndex: Standard_Integer): StepAP214_ApprovalItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_ApprovalItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_ApprovalItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfApprovalItem_1 extends StepAP214_Array1OfApprovalItem {
    constructor();
  }

  export declare class StepAP214_Array1OfApprovalItem_2 extends StepAP214_Array1OfApprovalItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfApprovalItem_3 extends StepAP214_Array1OfApprovalItem {
    constructor(theOther: StepAP214_Array1OfApprovalItem);
  }

  export declare class StepAP214_Array1OfApprovalItem_4 extends StepAP214_Array1OfApprovalItem {
    constructor(theOther: StepAP214_Array1OfApprovalItem);
  }

  export declare class StepAP214_Array1OfApprovalItem_5 extends StepAP214_Array1OfApprovalItem {
    constructor(theBegin: StepAP214_ApprovalItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfApprovalItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfApprovalItem): void;
  get(): StepAP214_HArray1OfApprovalItem;
}

  export declare class Handle_StepAP214_HArray1OfApprovalItem_1 extends Handle_StepAP214_HArray1OfApprovalItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfApprovalItem_2 extends Handle_StepAP214_HArray1OfApprovalItem {
    constructor(thePtr: StepAP214_HArray1OfApprovalItem);
  }

  export declare class Handle_StepAP214_HArray1OfApprovalItem_3 extends Handle_StepAP214_HArray1OfApprovalItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfApprovalItem);
  }

  export declare class Handle_StepAP214_HArray1OfApprovalItem_4 extends Handle_StepAP214_HArray1OfApprovalItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfApprovalItem);
  }

export declare class Handle_StepAP214_AppliedApprovalAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedApprovalAssignment): void;
  get(): StepAP214_AppliedApprovalAssignment;
}

  export declare class Handle_StepAP214_AppliedApprovalAssignment_1 extends Handle_StepAP214_AppliedApprovalAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedApprovalAssignment_2 extends Handle_StepAP214_AppliedApprovalAssignment {
    constructor(thePtr: StepAP214_AppliedApprovalAssignment);
  }

  export declare class Handle_StepAP214_AppliedApprovalAssignment_3 extends Handle_StepAP214_AppliedApprovalAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedApprovalAssignment);
  }

  export declare class Handle_StepAP214_AppliedApprovalAssignment_4 extends Handle_StepAP214_AppliedApprovalAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedApprovalAssignment);
  }

export declare class StepAP214_Array1OfDateAndTimeItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_DateAndTimeItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfDateAndTimeItem): StepAP214_Array1OfDateAndTimeItem;
  Move(theOther: StepAP214_Array1OfDateAndTimeItem): StepAP214_Array1OfDateAndTimeItem;
  First(): StepAP214_DateAndTimeItem;
  ChangeFirst(): StepAP214_DateAndTimeItem;
  Last(): StepAP214_DateAndTimeItem;
  ChangeLast(): StepAP214_DateAndTimeItem;
  Value(theIndex: Standard_Integer): StepAP214_DateAndTimeItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_DateAndTimeItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_DateAndTimeItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfDateAndTimeItem_1 extends StepAP214_Array1OfDateAndTimeItem {
    constructor();
  }

  export declare class StepAP214_Array1OfDateAndTimeItem_2 extends StepAP214_Array1OfDateAndTimeItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfDateAndTimeItem_3 extends StepAP214_Array1OfDateAndTimeItem {
    constructor(theOther: StepAP214_Array1OfDateAndTimeItem);
  }

  export declare class StepAP214_Array1OfDateAndTimeItem_4 extends StepAP214_Array1OfDateAndTimeItem {
    constructor(theOther: StepAP214_Array1OfDateAndTimeItem);
  }

  export declare class StepAP214_Array1OfDateAndTimeItem_5 extends StepAP214_Array1OfDateAndTimeItem {
    constructor(theBegin: StepAP214_DateAndTimeItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfDateAndTimeItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfDateAndTimeItem): void;
  get(): StepAP214_HArray1OfDateAndTimeItem;
}

  export declare class Handle_StepAP214_HArray1OfDateAndTimeItem_1 extends Handle_StepAP214_HArray1OfDateAndTimeItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfDateAndTimeItem_2 extends Handle_StepAP214_HArray1OfDateAndTimeItem {
    constructor(thePtr: StepAP214_HArray1OfDateAndTimeItem);
  }

  export declare class Handle_StepAP214_HArray1OfDateAndTimeItem_3 extends Handle_StepAP214_HArray1OfDateAndTimeItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfDateAndTimeItem);
  }

  export declare class Handle_StepAP214_HArray1OfDateAndTimeItem_4 extends Handle_StepAP214_HArray1OfDateAndTimeItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfDateAndTimeItem);
  }

export declare class Handle_StepAP214_AppliedDateAndTimeAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedDateAndTimeAssignment): void;
  get(): StepAP214_AppliedDateAndTimeAssignment;
}

  export declare class Handle_StepAP214_AppliedDateAndTimeAssignment_1 extends Handle_StepAP214_AppliedDateAndTimeAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedDateAndTimeAssignment_2 extends Handle_StepAP214_AppliedDateAndTimeAssignment {
    constructor(thePtr: StepAP214_AppliedDateAndTimeAssignment);
  }

  export declare class Handle_StepAP214_AppliedDateAndTimeAssignment_3 extends Handle_StepAP214_AppliedDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedDateAndTimeAssignment);
  }

  export declare class Handle_StepAP214_AppliedDateAndTimeAssignment_4 extends Handle_StepAP214_AppliedDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedDateAndTimeAssignment);
  }

export declare class StepAP214_Array1OfDateItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_DateItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfDateItem): StepAP214_Array1OfDateItem;
  Move(theOther: StepAP214_Array1OfDateItem): StepAP214_Array1OfDateItem;
  First(): StepAP214_DateItem;
  ChangeFirst(): StepAP214_DateItem;
  Last(): StepAP214_DateItem;
  ChangeLast(): StepAP214_DateItem;
  Value(theIndex: Standard_Integer): StepAP214_DateItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_DateItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_DateItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfDateItem_1 extends StepAP214_Array1OfDateItem {
    constructor();
  }

  export declare class StepAP214_Array1OfDateItem_2 extends StepAP214_Array1OfDateItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfDateItem_3 extends StepAP214_Array1OfDateItem {
    constructor(theOther: StepAP214_Array1OfDateItem);
  }

  export declare class StepAP214_Array1OfDateItem_4 extends StepAP214_Array1OfDateItem {
    constructor(theOther: StepAP214_Array1OfDateItem);
  }

  export declare class StepAP214_Array1OfDateItem_5 extends StepAP214_Array1OfDateItem {
    constructor(theBegin: StepAP214_DateItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfDateItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfDateItem): void;
  get(): StepAP214_HArray1OfDateItem;
}

  export declare class Handle_StepAP214_HArray1OfDateItem_1 extends Handle_StepAP214_HArray1OfDateItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfDateItem_2 extends Handle_StepAP214_HArray1OfDateItem {
    constructor(thePtr: StepAP214_HArray1OfDateItem);
  }

  export declare class Handle_StepAP214_HArray1OfDateItem_3 extends Handle_StepAP214_HArray1OfDateItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfDateItem);
  }

  export declare class Handle_StepAP214_HArray1OfDateItem_4 extends Handle_StepAP214_HArray1OfDateItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfDateItem);
  }

export declare class Handle_StepAP214_AppliedDateAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedDateAssignment): void;
  get(): StepAP214_AppliedDateAssignment;
}

  export declare class Handle_StepAP214_AppliedDateAssignment_1 extends Handle_StepAP214_AppliedDateAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedDateAssignment_2 extends Handle_StepAP214_AppliedDateAssignment {
    constructor(thePtr: StepAP214_AppliedDateAssignment);
  }

  export declare class Handle_StepAP214_AppliedDateAssignment_3 extends Handle_StepAP214_AppliedDateAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedDateAssignment);
  }

  export declare class Handle_StepAP214_AppliedDateAssignment_4 extends Handle_StepAP214_AppliedDateAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedDateAssignment);
  }

export declare class StepAP214_Array1OfDocumentReferenceItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_DocumentReferenceItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfDocumentReferenceItem): StepAP214_Array1OfDocumentReferenceItem;
  Move(theOther: StepAP214_Array1OfDocumentReferenceItem): StepAP214_Array1OfDocumentReferenceItem;
  First(): StepAP214_DocumentReferenceItem;
  ChangeFirst(): StepAP214_DocumentReferenceItem;
  Last(): StepAP214_DocumentReferenceItem;
  ChangeLast(): StepAP214_DocumentReferenceItem;
  Value(theIndex: Standard_Integer): StepAP214_DocumentReferenceItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_DocumentReferenceItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_DocumentReferenceItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfDocumentReferenceItem_1 extends StepAP214_Array1OfDocumentReferenceItem {
    constructor();
  }

  export declare class StepAP214_Array1OfDocumentReferenceItem_2 extends StepAP214_Array1OfDocumentReferenceItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfDocumentReferenceItem_3 extends StepAP214_Array1OfDocumentReferenceItem {
    constructor(theOther: StepAP214_Array1OfDocumentReferenceItem);
  }

  export declare class StepAP214_Array1OfDocumentReferenceItem_4 extends StepAP214_Array1OfDocumentReferenceItem {
    constructor(theOther: StepAP214_Array1OfDocumentReferenceItem);
  }

  export declare class StepAP214_Array1OfDocumentReferenceItem_5 extends StepAP214_Array1OfDocumentReferenceItem {
    constructor(theBegin: StepAP214_DocumentReferenceItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfDocumentReferenceItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfDocumentReferenceItem): void;
  get(): StepAP214_HArray1OfDocumentReferenceItem;
}

  export declare class Handle_StepAP214_HArray1OfDocumentReferenceItem_1 extends Handle_StepAP214_HArray1OfDocumentReferenceItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfDocumentReferenceItem_2 extends Handle_StepAP214_HArray1OfDocumentReferenceItem {
    constructor(thePtr: StepAP214_HArray1OfDocumentReferenceItem);
  }

  export declare class Handle_StepAP214_HArray1OfDocumentReferenceItem_3 extends Handle_StepAP214_HArray1OfDocumentReferenceItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfDocumentReferenceItem);
  }

  export declare class Handle_StepAP214_HArray1OfDocumentReferenceItem_4 extends Handle_StepAP214_HArray1OfDocumentReferenceItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfDocumentReferenceItem);
  }

export declare class Handle_StepAP214_AppliedDocumentReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedDocumentReference): void;
  get(): StepAP214_AppliedDocumentReference;
}

  export declare class Handle_StepAP214_AppliedDocumentReference_1 extends Handle_StepAP214_AppliedDocumentReference {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedDocumentReference_2 extends Handle_StepAP214_AppliedDocumentReference {
    constructor(thePtr: StepAP214_AppliedDocumentReference);
  }

  export declare class Handle_StepAP214_AppliedDocumentReference_3 extends Handle_StepAP214_AppliedDocumentReference {
    constructor(theHandle: Handle_StepAP214_AppliedDocumentReference);
  }

  export declare class Handle_StepAP214_AppliedDocumentReference_4 extends Handle_StepAP214_AppliedDocumentReference {
    constructor(theHandle: Handle_StepAP214_AppliedDocumentReference);
  }

export declare class StepAP214_Array1OfExternalIdentificationItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_ExternalIdentificationItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfExternalIdentificationItem): StepAP214_Array1OfExternalIdentificationItem;
  Move(theOther: StepAP214_Array1OfExternalIdentificationItem): StepAP214_Array1OfExternalIdentificationItem;
  First(): StepAP214_ExternalIdentificationItem;
  ChangeFirst(): StepAP214_ExternalIdentificationItem;
  Last(): StepAP214_ExternalIdentificationItem;
  ChangeLast(): StepAP214_ExternalIdentificationItem;
  Value(theIndex: Standard_Integer): StepAP214_ExternalIdentificationItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_ExternalIdentificationItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_ExternalIdentificationItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfExternalIdentificationItem_1 extends StepAP214_Array1OfExternalIdentificationItem {
    constructor();
  }

  export declare class StepAP214_Array1OfExternalIdentificationItem_2 extends StepAP214_Array1OfExternalIdentificationItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfExternalIdentificationItem_3 extends StepAP214_Array1OfExternalIdentificationItem {
    constructor(theOther: StepAP214_Array1OfExternalIdentificationItem);
  }

  export declare class StepAP214_Array1OfExternalIdentificationItem_4 extends StepAP214_Array1OfExternalIdentificationItem {
    constructor(theOther: StepAP214_Array1OfExternalIdentificationItem);
  }

  export declare class StepAP214_Array1OfExternalIdentificationItem_5 extends StepAP214_Array1OfExternalIdentificationItem {
    constructor(theBegin: StepAP214_ExternalIdentificationItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfExternalIdentificationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfExternalIdentificationItem): void;
  get(): StepAP214_HArray1OfExternalIdentificationItem;
}

  export declare class Handle_StepAP214_HArray1OfExternalIdentificationItem_1 extends Handle_StepAP214_HArray1OfExternalIdentificationItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfExternalIdentificationItem_2 extends Handle_StepAP214_HArray1OfExternalIdentificationItem {
    constructor(thePtr: StepAP214_HArray1OfExternalIdentificationItem);
  }

  export declare class Handle_StepAP214_HArray1OfExternalIdentificationItem_3 extends Handle_StepAP214_HArray1OfExternalIdentificationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfExternalIdentificationItem);
  }

  export declare class Handle_StepAP214_HArray1OfExternalIdentificationItem_4 extends Handle_StepAP214_HArray1OfExternalIdentificationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfExternalIdentificationItem);
  }

export declare class Handle_StepAP214_AppliedExternalIdentificationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedExternalIdentificationAssignment): void;
  get(): StepAP214_AppliedExternalIdentificationAssignment;
}

  export declare class Handle_StepAP214_AppliedExternalIdentificationAssignment_1 extends Handle_StepAP214_AppliedExternalIdentificationAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedExternalIdentificationAssignment_2 extends Handle_StepAP214_AppliedExternalIdentificationAssignment {
    constructor(thePtr: StepAP214_AppliedExternalIdentificationAssignment);
  }

  export declare class Handle_StepAP214_AppliedExternalIdentificationAssignment_3 extends Handle_StepAP214_AppliedExternalIdentificationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedExternalIdentificationAssignment);
  }

  export declare class Handle_StepAP214_AppliedExternalIdentificationAssignment_4 extends Handle_StepAP214_AppliedExternalIdentificationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedExternalIdentificationAssignment);
  }

export declare class StepAP214_Array1OfGroupItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_GroupItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfGroupItem): StepAP214_Array1OfGroupItem;
  Move(theOther: StepAP214_Array1OfGroupItem): StepAP214_Array1OfGroupItem;
  First(): StepAP214_GroupItem;
  ChangeFirst(): StepAP214_GroupItem;
  Last(): StepAP214_GroupItem;
  ChangeLast(): StepAP214_GroupItem;
  Value(theIndex: Standard_Integer): StepAP214_GroupItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_GroupItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_GroupItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfGroupItem_1 extends StepAP214_Array1OfGroupItem {
    constructor();
  }

  export declare class StepAP214_Array1OfGroupItem_2 extends StepAP214_Array1OfGroupItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfGroupItem_3 extends StepAP214_Array1OfGroupItem {
    constructor(theOther: StepAP214_Array1OfGroupItem);
  }

  export declare class StepAP214_Array1OfGroupItem_4 extends StepAP214_Array1OfGroupItem {
    constructor(theOther: StepAP214_Array1OfGroupItem);
  }

  export declare class StepAP214_Array1OfGroupItem_5 extends StepAP214_Array1OfGroupItem {
    constructor(theBegin: StepAP214_GroupItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfGroupItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfGroupItem): void;
  get(): StepAP214_HArray1OfGroupItem;
}

  export declare class Handle_StepAP214_HArray1OfGroupItem_1 extends Handle_StepAP214_HArray1OfGroupItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfGroupItem_2 extends Handle_StepAP214_HArray1OfGroupItem {
    constructor(thePtr: StepAP214_HArray1OfGroupItem);
  }

  export declare class Handle_StepAP214_HArray1OfGroupItem_3 extends Handle_StepAP214_HArray1OfGroupItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfGroupItem);
  }

  export declare class Handle_StepAP214_HArray1OfGroupItem_4 extends Handle_StepAP214_HArray1OfGroupItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfGroupItem);
  }

export declare class Handle_StepAP214_AppliedGroupAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedGroupAssignment): void;
  get(): StepAP214_AppliedGroupAssignment;
}

  export declare class Handle_StepAP214_AppliedGroupAssignment_1 extends Handle_StepAP214_AppliedGroupAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedGroupAssignment_2 extends Handle_StepAP214_AppliedGroupAssignment {
    constructor(thePtr: StepAP214_AppliedGroupAssignment);
  }

  export declare class Handle_StepAP214_AppliedGroupAssignment_3 extends Handle_StepAP214_AppliedGroupAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedGroupAssignment);
  }

  export declare class Handle_StepAP214_AppliedGroupAssignment_4 extends Handle_StepAP214_AppliedGroupAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedGroupAssignment);
  }

export declare class StepAP214_Array1OfOrganizationItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_OrganizationItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfOrganizationItem): StepAP214_Array1OfOrganizationItem;
  Move(theOther: StepAP214_Array1OfOrganizationItem): StepAP214_Array1OfOrganizationItem;
  First(): StepAP214_OrganizationItem;
  ChangeFirst(): StepAP214_OrganizationItem;
  Last(): StepAP214_OrganizationItem;
  ChangeLast(): StepAP214_OrganizationItem;
  Value(theIndex: Standard_Integer): StepAP214_OrganizationItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_OrganizationItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_OrganizationItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfOrganizationItem_1 extends StepAP214_Array1OfOrganizationItem {
    constructor();
  }

  export declare class StepAP214_Array1OfOrganizationItem_2 extends StepAP214_Array1OfOrganizationItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfOrganizationItem_3 extends StepAP214_Array1OfOrganizationItem {
    constructor(theOther: StepAP214_Array1OfOrganizationItem);
  }

  export declare class StepAP214_Array1OfOrganizationItem_4 extends StepAP214_Array1OfOrganizationItem {
    constructor(theOther: StepAP214_Array1OfOrganizationItem);
  }

  export declare class StepAP214_Array1OfOrganizationItem_5 extends StepAP214_Array1OfOrganizationItem {
    constructor(theBegin: StepAP214_OrganizationItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfOrganizationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfOrganizationItem): void;
  get(): StepAP214_HArray1OfOrganizationItem;
}

  export declare class Handle_StepAP214_HArray1OfOrganizationItem_1 extends Handle_StepAP214_HArray1OfOrganizationItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfOrganizationItem_2 extends Handle_StepAP214_HArray1OfOrganizationItem {
    constructor(thePtr: StepAP214_HArray1OfOrganizationItem);
  }

  export declare class Handle_StepAP214_HArray1OfOrganizationItem_3 extends Handle_StepAP214_HArray1OfOrganizationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfOrganizationItem);
  }

  export declare class Handle_StepAP214_HArray1OfOrganizationItem_4 extends Handle_StepAP214_HArray1OfOrganizationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfOrganizationItem);
  }

export declare class Handle_StepAP214_AppliedOrganizationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedOrganizationAssignment): void;
  get(): StepAP214_AppliedOrganizationAssignment;
}

  export declare class Handle_StepAP214_AppliedOrganizationAssignment_1 extends Handle_StepAP214_AppliedOrganizationAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedOrganizationAssignment_2 extends Handle_StepAP214_AppliedOrganizationAssignment {
    constructor(thePtr: StepAP214_AppliedOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AppliedOrganizationAssignment_3 extends Handle_StepAP214_AppliedOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AppliedOrganizationAssignment_4 extends Handle_StepAP214_AppliedOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedOrganizationAssignment);
  }

export declare class StepAP214_Array1OfPersonAndOrganizationItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_PersonAndOrganizationItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfPersonAndOrganizationItem): StepAP214_Array1OfPersonAndOrganizationItem;
  Move(theOther: StepAP214_Array1OfPersonAndOrganizationItem): StepAP214_Array1OfPersonAndOrganizationItem;
  First(): StepAP214_PersonAndOrganizationItem;
  ChangeFirst(): StepAP214_PersonAndOrganizationItem;
  Last(): StepAP214_PersonAndOrganizationItem;
  ChangeLast(): StepAP214_PersonAndOrganizationItem;
  Value(theIndex: Standard_Integer): StepAP214_PersonAndOrganizationItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_PersonAndOrganizationItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_PersonAndOrganizationItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfPersonAndOrganizationItem_1 extends StepAP214_Array1OfPersonAndOrganizationItem {
    constructor();
  }

  export declare class StepAP214_Array1OfPersonAndOrganizationItem_2 extends StepAP214_Array1OfPersonAndOrganizationItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfPersonAndOrganizationItem_3 extends StepAP214_Array1OfPersonAndOrganizationItem {
    constructor(theOther: StepAP214_Array1OfPersonAndOrganizationItem);
  }

  export declare class StepAP214_Array1OfPersonAndOrganizationItem_4 extends StepAP214_Array1OfPersonAndOrganizationItem {
    constructor(theOther: StepAP214_Array1OfPersonAndOrganizationItem);
  }

  export declare class StepAP214_Array1OfPersonAndOrganizationItem_5 extends StepAP214_Array1OfPersonAndOrganizationItem {
    constructor(theBegin: StepAP214_PersonAndOrganizationItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfPersonAndOrganizationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfPersonAndOrganizationItem): void;
  get(): StepAP214_HArray1OfPersonAndOrganizationItem;
}

  export declare class Handle_StepAP214_HArray1OfPersonAndOrganizationItem_1 extends Handle_StepAP214_HArray1OfPersonAndOrganizationItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfPersonAndOrganizationItem_2 extends Handle_StepAP214_HArray1OfPersonAndOrganizationItem {
    constructor(thePtr: StepAP214_HArray1OfPersonAndOrganizationItem);
  }

  export declare class Handle_StepAP214_HArray1OfPersonAndOrganizationItem_3 extends Handle_StepAP214_HArray1OfPersonAndOrganizationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfPersonAndOrganizationItem);
  }

  export declare class Handle_StepAP214_HArray1OfPersonAndOrganizationItem_4 extends Handle_StepAP214_HArray1OfPersonAndOrganizationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfPersonAndOrganizationItem);
  }

export declare class Handle_StepAP214_AppliedPersonAndOrganizationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedPersonAndOrganizationAssignment): void;
  get(): StepAP214_AppliedPersonAndOrganizationAssignment;
}

  export declare class Handle_StepAP214_AppliedPersonAndOrganizationAssignment_1 extends Handle_StepAP214_AppliedPersonAndOrganizationAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedPersonAndOrganizationAssignment_2 extends Handle_StepAP214_AppliedPersonAndOrganizationAssignment {
    constructor(thePtr: StepAP214_AppliedPersonAndOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AppliedPersonAndOrganizationAssignment_3 extends Handle_StepAP214_AppliedPersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedPersonAndOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AppliedPersonAndOrganizationAssignment_4 extends Handle_StepAP214_AppliedPersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedPersonAndOrganizationAssignment);
  }

export declare class StepAP214_Array1OfPresentedItemSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_PresentedItemSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfPresentedItemSelect): StepAP214_Array1OfPresentedItemSelect;
  Move(theOther: StepAP214_Array1OfPresentedItemSelect): StepAP214_Array1OfPresentedItemSelect;
  First(): StepAP214_PresentedItemSelect;
  ChangeFirst(): StepAP214_PresentedItemSelect;
  Last(): StepAP214_PresentedItemSelect;
  ChangeLast(): StepAP214_PresentedItemSelect;
  Value(theIndex: Standard_Integer): StepAP214_PresentedItemSelect;
  ChangeValue(theIndex: Standard_Integer): StepAP214_PresentedItemSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_PresentedItemSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfPresentedItemSelect_1 extends StepAP214_Array1OfPresentedItemSelect {
    constructor();
  }

  export declare class StepAP214_Array1OfPresentedItemSelect_2 extends StepAP214_Array1OfPresentedItemSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfPresentedItemSelect_3 extends StepAP214_Array1OfPresentedItemSelect {
    constructor(theOther: StepAP214_Array1OfPresentedItemSelect);
  }

  export declare class StepAP214_Array1OfPresentedItemSelect_4 extends StepAP214_Array1OfPresentedItemSelect {
    constructor(theOther: StepAP214_Array1OfPresentedItemSelect);
  }

  export declare class StepAP214_Array1OfPresentedItemSelect_5 extends StepAP214_Array1OfPresentedItemSelect {
    constructor(theBegin: StepAP214_PresentedItemSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfPresentedItemSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfPresentedItemSelect): void;
  get(): StepAP214_HArray1OfPresentedItemSelect;
}

  export declare class Handle_StepAP214_HArray1OfPresentedItemSelect_1 extends Handle_StepAP214_HArray1OfPresentedItemSelect {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfPresentedItemSelect_2 extends Handle_StepAP214_HArray1OfPresentedItemSelect {
    constructor(thePtr: StepAP214_HArray1OfPresentedItemSelect);
  }

  export declare class Handle_StepAP214_HArray1OfPresentedItemSelect_3 extends Handle_StepAP214_HArray1OfPresentedItemSelect {
    constructor(theHandle: Handle_StepAP214_HArray1OfPresentedItemSelect);
  }

  export declare class Handle_StepAP214_HArray1OfPresentedItemSelect_4 extends Handle_StepAP214_HArray1OfPresentedItemSelect {
    constructor(theHandle: Handle_StepAP214_HArray1OfPresentedItemSelect);
  }

export declare class Handle_StepAP214_AppliedPresentedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedPresentedItem): void;
  get(): StepAP214_AppliedPresentedItem;
}

  export declare class Handle_StepAP214_AppliedPresentedItem_1 extends Handle_StepAP214_AppliedPresentedItem {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedPresentedItem_2 extends Handle_StepAP214_AppliedPresentedItem {
    constructor(thePtr: StepAP214_AppliedPresentedItem);
  }

  export declare class Handle_StepAP214_AppliedPresentedItem_3 extends Handle_StepAP214_AppliedPresentedItem {
    constructor(theHandle: Handle_StepAP214_AppliedPresentedItem);
  }

  export declare class Handle_StepAP214_AppliedPresentedItem_4 extends Handle_StepAP214_AppliedPresentedItem {
    constructor(theHandle: Handle_StepAP214_AppliedPresentedItem);
  }

export declare class StepAP214_Array1OfSecurityClassificationItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_SecurityClassificationItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfSecurityClassificationItem): StepAP214_Array1OfSecurityClassificationItem;
  Move(theOther: StepAP214_Array1OfSecurityClassificationItem): StepAP214_Array1OfSecurityClassificationItem;
  First(): StepAP214_SecurityClassificationItem;
  ChangeFirst(): StepAP214_SecurityClassificationItem;
  Last(): StepAP214_SecurityClassificationItem;
  ChangeLast(): StepAP214_SecurityClassificationItem;
  Value(theIndex: Standard_Integer): StepAP214_SecurityClassificationItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_SecurityClassificationItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_SecurityClassificationItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfSecurityClassificationItem_1 extends StepAP214_Array1OfSecurityClassificationItem {
    constructor();
  }

  export declare class StepAP214_Array1OfSecurityClassificationItem_2 extends StepAP214_Array1OfSecurityClassificationItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfSecurityClassificationItem_3 extends StepAP214_Array1OfSecurityClassificationItem {
    constructor(theOther: StepAP214_Array1OfSecurityClassificationItem);
  }

  export declare class StepAP214_Array1OfSecurityClassificationItem_4 extends StepAP214_Array1OfSecurityClassificationItem {
    constructor(theOther: StepAP214_Array1OfSecurityClassificationItem);
  }

  export declare class StepAP214_Array1OfSecurityClassificationItem_5 extends StepAP214_Array1OfSecurityClassificationItem {
    constructor(theBegin: StepAP214_SecurityClassificationItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfSecurityClassificationItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfSecurityClassificationItem): void;
  get(): StepAP214_HArray1OfSecurityClassificationItem;
}

  export declare class Handle_StepAP214_HArray1OfSecurityClassificationItem_1 extends Handle_StepAP214_HArray1OfSecurityClassificationItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfSecurityClassificationItem_2 extends Handle_StepAP214_HArray1OfSecurityClassificationItem {
    constructor(thePtr: StepAP214_HArray1OfSecurityClassificationItem);
  }

  export declare class Handle_StepAP214_HArray1OfSecurityClassificationItem_3 extends Handle_StepAP214_HArray1OfSecurityClassificationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfSecurityClassificationItem);
  }

  export declare class Handle_StepAP214_HArray1OfSecurityClassificationItem_4 extends Handle_StepAP214_HArray1OfSecurityClassificationItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfSecurityClassificationItem);
  }

export declare class Handle_StepAP214_AppliedSecurityClassificationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AppliedSecurityClassificationAssignment): void;
  get(): StepAP214_AppliedSecurityClassificationAssignment;
}

  export declare class Handle_StepAP214_AppliedSecurityClassificationAssignment_1 extends Handle_StepAP214_AppliedSecurityClassificationAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AppliedSecurityClassificationAssignment_2 extends Handle_StepAP214_AppliedSecurityClassificationAssignment {
    constructor(thePtr: StepAP214_AppliedSecurityClassificationAssignment);
  }

  export declare class Handle_StepAP214_AppliedSecurityClassificationAssignment_3 extends Handle_StepAP214_AppliedSecurityClassificationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedSecurityClassificationAssignment);
  }

  export declare class Handle_StepAP214_AppliedSecurityClassificationAssignment_4 extends Handle_StepAP214_AppliedSecurityClassificationAssignment {
    constructor(theHandle: Handle_StepAP214_AppliedSecurityClassificationAssignment);
  }

export declare class StepAP214_Array1OfAutoDesignDateAndPersonItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_AutoDesignDateAndPersonItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfAutoDesignDateAndPersonItem): StepAP214_Array1OfAutoDesignDateAndPersonItem;
  Move(theOther: StepAP214_Array1OfAutoDesignDateAndPersonItem): StepAP214_Array1OfAutoDesignDateAndPersonItem;
  First(): StepAP214_AutoDesignDateAndPersonItem;
  ChangeFirst(): StepAP214_AutoDesignDateAndPersonItem;
  Last(): StepAP214_AutoDesignDateAndPersonItem;
  ChangeLast(): StepAP214_AutoDesignDateAndPersonItem;
  Value(theIndex: Standard_Integer): StepAP214_AutoDesignDateAndPersonItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_AutoDesignDateAndPersonItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_AutoDesignDateAndPersonItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfAutoDesignDateAndPersonItem_1 extends StepAP214_Array1OfAutoDesignDateAndPersonItem {
    constructor();
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndPersonItem_2 extends StepAP214_Array1OfAutoDesignDateAndPersonItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndPersonItem_3 extends StepAP214_Array1OfAutoDesignDateAndPersonItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignDateAndPersonItem);
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndPersonItem_4 extends StepAP214_Array1OfAutoDesignDateAndPersonItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignDateAndPersonItem);
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndPersonItem_5 extends StepAP214_Array1OfAutoDesignDateAndPersonItem {
    constructor(theBegin: StepAP214_AutoDesignDateAndPersonItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP214_Array1OfAutoDesignDateAndTimeItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_AutoDesignDateAndTimeItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfAutoDesignDateAndTimeItem): StepAP214_Array1OfAutoDesignDateAndTimeItem;
  Move(theOther: StepAP214_Array1OfAutoDesignDateAndTimeItem): StepAP214_Array1OfAutoDesignDateAndTimeItem;
  First(): StepAP214_AutoDesignDateAndTimeItem;
  ChangeFirst(): StepAP214_AutoDesignDateAndTimeItem;
  Last(): StepAP214_AutoDesignDateAndTimeItem;
  ChangeLast(): StepAP214_AutoDesignDateAndTimeItem;
  Value(theIndex: Standard_Integer): StepAP214_AutoDesignDateAndTimeItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_AutoDesignDateAndTimeItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_AutoDesignDateAndTimeItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfAutoDesignDateAndTimeItem_1 extends StepAP214_Array1OfAutoDesignDateAndTimeItem {
    constructor();
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndTimeItem_2 extends StepAP214_Array1OfAutoDesignDateAndTimeItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndTimeItem_3 extends StepAP214_Array1OfAutoDesignDateAndTimeItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignDateAndTimeItem);
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndTimeItem_4 extends StepAP214_Array1OfAutoDesignDateAndTimeItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignDateAndTimeItem);
  }

  export declare class StepAP214_Array1OfAutoDesignDateAndTimeItem_5 extends StepAP214_Array1OfAutoDesignDateAndTimeItem {
    constructor(theBegin: StepAP214_AutoDesignDateAndTimeItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP214_Array1OfAutoDesignDatedItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_AutoDesignDatedItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfAutoDesignDatedItem): StepAP214_Array1OfAutoDesignDatedItem;
  Move(theOther: StepAP214_Array1OfAutoDesignDatedItem): StepAP214_Array1OfAutoDesignDatedItem;
  First(): StepAP214_AutoDesignDatedItem;
  ChangeFirst(): StepAP214_AutoDesignDatedItem;
  Last(): StepAP214_AutoDesignDatedItem;
  ChangeLast(): StepAP214_AutoDesignDatedItem;
  Value(theIndex: Standard_Integer): StepAP214_AutoDesignDatedItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_AutoDesignDatedItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_AutoDesignDatedItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfAutoDesignDatedItem_1 extends StepAP214_Array1OfAutoDesignDatedItem {
    constructor();
  }

  export declare class StepAP214_Array1OfAutoDesignDatedItem_2 extends StepAP214_Array1OfAutoDesignDatedItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfAutoDesignDatedItem_3 extends StepAP214_Array1OfAutoDesignDatedItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignDatedItem);
  }

  export declare class StepAP214_Array1OfAutoDesignDatedItem_4 extends StepAP214_Array1OfAutoDesignDatedItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignDatedItem);
  }

  export declare class StepAP214_Array1OfAutoDesignDatedItem_5 extends StepAP214_Array1OfAutoDesignDatedItem {
    constructor(theBegin: StepAP214_AutoDesignDatedItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP214_Array1OfAutoDesignGeneralOrgItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_AutoDesignGeneralOrgItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfAutoDesignGeneralOrgItem): StepAP214_Array1OfAutoDesignGeneralOrgItem;
  Move(theOther: StepAP214_Array1OfAutoDesignGeneralOrgItem): StepAP214_Array1OfAutoDesignGeneralOrgItem;
  First(): StepAP214_AutoDesignGeneralOrgItem;
  ChangeFirst(): StepAP214_AutoDesignGeneralOrgItem;
  Last(): StepAP214_AutoDesignGeneralOrgItem;
  ChangeLast(): StepAP214_AutoDesignGeneralOrgItem;
  Value(theIndex: Standard_Integer): StepAP214_AutoDesignGeneralOrgItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_AutoDesignGeneralOrgItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_AutoDesignGeneralOrgItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfAutoDesignGeneralOrgItem_1 extends StepAP214_Array1OfAutoDesignGeneralOrgItem {
    constructor();
  }

  export declare class StepAP214_Array1OfAutoDesignGeneralOrgItem_2 extends StepAP214_Array1OfAutoDesignGeneralOrgItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfAutoDesignGeneralOrgItem_3 extends StepAP214_Array1OfAutoDesignGeneralOrgItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignGeneralOrgItem);
  }

  export declare class StepAP214_Array1OfAutoDesignGeneralOrgItem_4 extends StepAP214_Array1OfAutoDesignGeneralOrgItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignGeneralOrgItem);
  }

  export declare class StepAP214_Array1OfAutoDesignGeneralOrgItem_5 extends StepAP214_Array1OfAutoDesignGeneralOrgItem {
    constructor(theBegin: StepAP214_AutoDesignGeneralOrgItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP214_Array1OfAutoDesignGroupedItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_AutoDesignGroupedItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfAutoDesignGroupedItem): StepAP214_Array1OfAutoDesignGroupedItem;
  Move(theOther: StepAP214_Array1OfAutoDesignGroupedItem): StepAP214_Array1OfAutoDesignGroupedItem;
  First(): StepAP214_AutoDesignGroupedItem;
  ChangeFirst(): StepAP214_AutoDesignGroupedItem;
  Last(): StepAP214_AutoDesignGroupedItem;
  ChangeLast(): StepAP214_AutoDesignGroupedItem;
  Value(theIndex: Standard_Integer): StepAP214_AutoDesignGroupedItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_AutoDesignGroupedItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_AutoDesignGroupedItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfAutoDesignGroupedItem_1 extends StepAP214_Array1OfAutoDesignGroupedItem {
    constructor();
  }

  export declare class StepAP214_Array1OfAutoDesignGroupedItem_2 extends StepAP214_Array1OfAutoDesignGroupedItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfAutoDesignGroupedItem_3 extends StepAP214_Array1OfAutoDesignGroupedItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignGroupedItem);
  }

  export declare class StepAP214_Array1OfAutoDesignGroupedItem_4 extends StepAP214_Array1OfAutoDesignGroupedItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignGroupedItem);
  }

  export declare class StepAP214_Array1OfAutoDesignGroupedItem_5 extends StepAP214_Array1OfAutoDesignGroupedItem {
    constructor(theBegin: StepAP214_AutoDesignGroupedItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP214_Array1OfAutoDesignPresentedItemSelect {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_AutoDesignPresentedItemSelect): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfAutoDesignPresentedItemSelect): StepAP214_Array1OfAutoDesignPresentedItemSelect;
  Move(theOther: StepAP214_Array1OfAutoDesignPresentedItemSelect): StepAP214_Array1OfAutoDesignPresentedItemSelect;
  First(): StepAP214_AutoDesignPresentedItemSelect;
  ChangeFirst(): StepAP214_AutoDesignPresentedItemSelect;
  Last(): StepAP214_AutoDesignPresentedItemSelect;
  ChangeLast(): StepAP214_AutoDesignPresentedItemSelect;
  Value(theIndex: Standard_Integer): StepAP214_AutoDesignPresentedItemSelect;
  ChangeValue(theIndex: Standard_Integer): StepAP214_AutoDesignPresentedItemSelect;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_AutoDesignPresentedItemSelect): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfAutoDesignPresentedItemSelect_1 extends StepAP214_Array1OfAutoDesignPresentedItemSelect {
    constructor();
  }

  export declare class StepAP214_Array1OfAutoDesignPresentedItemSelect_2 extends StepAP214_Array1OfAutoDesignPresentedItemSelect {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfAutoDesignPresentedItemSelect_3 extends StepAP214_Array1OfAutoDesignPresentedItemSelect {
    constructor(theOther: StepAP214_Array1OfAutoDesignPresentedItemSelect);
  }

  export declare class StepAP214_Array1OfAutoDesignPresentedItemSelect_4 extends StepAP214_Array1OfAutoDesignPresentedItemSelect {
    constructor(theOther: StepAP214_Array1OfAutoDesignPresentedItemSelect);
  }

  export declare class StepAP214_Array1OfAutoDesignPresentedItemSelect_5 extends StepAP214_Array1OfAutoDesignPresentedItemSelect {
    constructor(theBegin: StepAP214_AutoDesignPresentedItemSelect, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class StepAP214_Array1OfAutoDesignReferencingItem {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepAP214_AutoDesignReferencingItem): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepAP214_Array1OfAutoDesignReferencingItem): StepAP214_Array1OfAutoDesignReferencingItem;
  Move(theOther: StepAP214_Array1OfAutoDesignReferencingItem): StepAP214_Array1OfAutoDesignReferencingItem;
  First(): StepAP214_AutoDesignReferencingItem;
  ChangeFirst(): StepAP214_AutoDesignReferencingItem;
  Last(): StepAP214_AutoDesignReferencingItem;
  ChangeLast(): StepAP214_AutoDesignReferencingItem;
  Value(theIndex: Standard_Integer): StepAP214_AutoDesignReferencingItem;
  ChangeValue(theIndex: Standard_Integer): StepAP214_AutoDesignReferencingItem;
  SetValue(theIndex: Standard_Integer, theItem: StepAP214_AutoDesignReferencingItem): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepAP214_Array1OfAutoDesignReferencingItem_1 extends StepAP214_Array1OfAutoDesignReferencingItem {
    constructor();
  }

  export declare class StepAP214_Array1OfAutoDesignReferencingItem_2 extends StepAP214_Array1OfAutoDesignReferencingItem {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepAP214_Array1OfAutoDesignReferencingItem_3 extends StepAP214_Array1OfAutoDesignReferencingItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignReferencingItem);
  }

  export declare class StepAP214_Array1OfAutoDesignReferencingItem_4 extends StepAP214_Array1OfAutoDesignReferencingItem {
    constructor(theOther: StepAP214_Array1OfAutoDesignReferencingItem);
  }

  export declare class StepAP214_Array1OfAutoDesignReferencingItem_5 extends StepAP214_Array1OfAutoDesignReferencingItem {
    constructor(theBegin: StepAP214_AutoDesignReferencingItem, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfAutoDesignDateAndTimeItem): void;
  get(): StepAP214_HArray1OfAutoDesignDateAndTimeItem;
}

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_1 extends Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_2 extends Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem {
    constructor(thePtr: StepAP214_HArray1OfAutoDesignDateAndTimeItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_3 extends Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_4 extends Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem);
  }

export declare class Handle_StepAP214_AutoDesignActualDateAndTimeAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignActualDateAndTimeAssignment): void;
  get(): StepAP214_AutoDesignActualDateAndTimeAssignment;
}

  export declare class Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_1 extends Handle_StepAP214_AutoDesignActualDateAndTimeAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_2 extends Handle_StepAP214_AutoDesignActualDateAndTimeAssignment {
    constructor(thePtr: StepAP214_AutoDesignActualDateAndTimeAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_3 extends Handle_StepAP214_AutoDesignActualDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignActualDateAndTimeAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_4 extends Handle_StepAP214_AutoDesignActualDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignActualDateAndTimeAssignment);
  }

export declare class Handle_StepAP214_HArray1OfAutoDesignDatedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfAutoDesignDatedItem): void;
  get(): StepAP214_HArray1OfAutoDesignDatedItem;
}

  export declare class Handle_StepAP214_HArray1OfAutoDesignDatedItem_1 extends Handle_StepAP214_HArray1OfAutoDesignDatedItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDatedItem_2 extends Handle_StepAP214_HArray1OfAutoDesignDatedItem {
    constructor(thePtr: StepAP214_HArray1OfAutoDesignDatedItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDatedItem_3 extends Handle_StepAP214_HArray1OfAutoDesignDatedItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignDatedItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDatedItem_4 extends Handle_StepAP214_HArray1OfAutoDesignDatedItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignDatedItem);
  }

export declare class Handle_StepAP214_AutoDesignActualDateAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignActualDateAssignment): void;
  get(): StepAP214_AutoDesignActualDateAssignment;
}

  export declare class Handle_StepAP214_AutoDesignActualDateAssignment_1 extends Handle_StepAP214_AutoDesignActualDateAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignActualDateAssignment_2 extends Handle_StepAP214_AutoDesignActualDateAssignment {
    constructor(thePtr: StepAP214_AutoDesignActualDateAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignActualDateAssignment_3 extends Handle_StepAP214_AutoDesignActualDateAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignActualDateAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignActualDateAssignment_4 extends Handle_StepAP214_AutoDesignActualDateAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignActualDateAssignment);
  }

export declare class Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfAutoDesignGeneralOrgItem): void;
  get(): StepAP214_HArray1OfAutoDesignGeneralOrgItem;
}

  export declare class Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_1 extends Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_2 extends Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem {
    constructor(thePtr: StepAP214_HArray1OfAutoDesignGeneralOrgItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_3 extends Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_4 extends Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem);
  }

export declare class Handle_StepAP214_AutoDesignApprovalAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignApprovalAssignment): void;
  get(): StepAP214_AutoDesignApprovalAssignment;
}

  export declare class Handle_StepAP214_AutoDesignApprovalAssignment_1 extends Handle_StepAP214_AutoDesignApprovalAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignApprovalAssignment_2 extends Handle_StepAP214_AutoDesignApprovalAssignment {
    constructor(thePtr: StepAP214_AutoDesignApprovalAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignApprovalAssignment_3 extends Handle_StepAP214_AutoDesignApprovalAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignApprovalAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignApprovalAssignment_4 extends Handle_StepAP214_AutoDesignApprovalAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignApprovalAssignment);
  }

export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfAutoDesignDateAndPersonItem): void;
  get(): StepAP214_HArray1OfAutoDesignDateAndPersonItem;
}

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_1 extends Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_2 extends Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem {
    constructor(thePtr: StepAP214_HArray1OfAutoDesignDateAndPersonItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_3 extends Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_4 extends Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem);
  }

export declare class Handle_StepAP214_AutoDesignDateAndPersonAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignDateAndPersonAssignment): void;
  get(): StepAP214_AutoDesignDateAndPersonAssignment;
}

  export declare class Handle_StepAP214_AutoDesignDateAndPersonAssignment_1 extends Handle_StepAP214_AutoDesignDateAndPersonAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignDateAndPersonAssignment_2 extends Handle_StepAP214_AutoDesignDateAndPersonAssignment {
    constructor(thePtr: StepAP214_AutoDesignDateAndPersonAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignDateAndPersonAssignment_3 extends Handle_StepAP214_AutoDesignDateAndPersonAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignDateAndPersonAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignDateAndPersonAssignment_4 extends Handle_StepAP214_AutoDesignDateAndPersonAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignDateAndPersonAssignment);
  }

export declare class Handle_StepAP214_HArray1OfAutoDesignReferencingItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfAutoDesignReferencingItem): void;
  get(): StepAP214_HArray1OfAutoDesignReferencingItem;
}

  export declare class Handle_StepAP214_HArray1OfAutoDesignReferencingItem_1 extends Handle_StepAP214_HArray1OfAutoDesignReferencingItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignReferencingItem_2 extends Handle_StepAP214_HArray1OfAutoDesignReferencingItem {
    constructor(thePtr: StepAP214_HArray1OfAutoDesignReferencingItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignReferencingItem_3 extends Handle_StepAP214_HArray1OfAutoDesignReferencingItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignReferencingItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignReferencingItem_4 extends Handle_StepAP214_HArray1OfAutoDesignReferencingItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignReferencingItem);
  }

export declare class Handle_StepAP214_AutoDesignDocumentReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignDocumentReference): void;
  get(): StepAP214_AutoDesignDocumentReference;
}

  export declare class Handle_StepAP214_AutoDesignDocumentReference_1 extends Handle_StepAP214_AutoDesignDocumentReference {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignDocumentReference_2 extends Handle_StepAP214_AutoDesignDocumentReference {
    constructor(thePtr: StepAP214_AutoDesignDocumentReference);
  }

  export declare class Handle_StepAP214_AutoDesignDocumentReference_3 extends Handle_StepAP214_AutoDesignDocumentReference {
    constructor(theHandle: Handle_StepAP214_AutoDesignDocumentReference);
  }

  export declare class Handle_StepAP214_AutoDesignDocumentReference_4 extends Handle_StepAP214_AutoDesignDocumentReference {
    constructor(theHandle: Handle_StepAP214_AutoDesignDocumentReference);
  }

export declare class Handle_StepAP214_HArray1OfAutoDesignGroupedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfAutoDesignGroupedItem): void;
  get(): StepAP214_HArray1OfAutoDesignGroupedItem;
}

  export declare class Handle_StepAP214_HArray1OfAutoDesignGroupedItem_1 extends Handle_StepAP214_HArray1OfAutoDesignGroupedItem {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignGroupedItem_2 extends Handle_StepAP214_HArray1OfAutoDesignGroupedItem {
    constructor(thePtr: StepAP214_HArray1OfAutoDesignGroupedItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignGroupedItem_3 extends Handle_StepAP214_HArray1OfAutoDesignGroupedItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignGroupedItem);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignGroupedItem_4 extends Handle_StepAP214_HArray1OfAutoDesignGroupedItem {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignGroupedItem);
  }

export declare class Handle_StepAP214_AutoDesignGroupAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignGroupAssignment): void;
  get(): StepAP214_AutoDesignGroupAssignment;
}

  export declare class Handle_StepAP214_AutoDesignGroupAssignment_1 extends Handle_StepAP214_AutoDesignGroupAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignGroupAssignment_2 extends Handle_StepAP214_AutoDesignGroupAssignment {
    constructor(thePtr: StepAP214_AutoDesignGroupAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignGroupAssignment_3 extends Handle_StepAP214_AutoDesignGroupAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignGroupAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignGroupAssignment_4 extends Handle_StepAP214_AutoDesignGroupAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignGroupAssignment);
  }

export declare class Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignNominalDateAndTimeAssignment): void;
  get(): StepAP214_AutoDesignNominalDateAndTimeAssignment;
}

  export declare class Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_1 extends Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_2 extends Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment {
    constructor(thePtr: StepAP214_AutoDesignNominalDateAndTimeAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_3 extends Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_4 extends Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment);
  }

export declare class Handle_StepAP214_AutoDesignNominalDateAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignNominalDateAssignment): void;
  get(): StepAP214_AutoDesignNominalDateAssignment;
}

  export declare class Handle_StepAP214_AutoDesignNominalDateAssignment_1 extends Handle_StepAP214_AutoDesignNominalDateAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignNominalDateAssignment_2 extends Handle_StepAP214_AutoDesignNominalDateAssignment {
    constructor(thePtr: StepAP214_AutoDesignNominalDateAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignNominalDateAssignment_3 extends Handle_StepAP214_AutoDesignNominalDateAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignNominalDateAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignNominalDateAssignment_4 extends Handle_StepAP214_AutoDesignNominalDateAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignNominalDateAssignment);
  }

export declare class Handle_StepAP214_AutoDesignOrganizationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignOrganizationAssignment): void;
  get(): StepAP214_AutoDesignOrganizationAssignment;
}

  export declare class Handle_StepAP214_AutoDesignOrganizationAssignment_1 extends Handle_StepAP214_AutoDesignOrganizationAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignOrganizationAssignment_2 extends Handle_StepAP214_AutoDesignOrganizationAssignment {
    constructor(thePtr: StepAP214_AutoDesignOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignOrganizationAssignment_3 extends Handle_StepAP214_AutoDesignOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignOrganizationAssignment_4 extends Handle_StepAP214_AutoDesignOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignOrganizationAssignment);
  }

export declare class Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignPersonAndOrganizationAssignment): void;
  get(): StepAP214_AutoDesignPersonAndOrganizationAssignment;
}

  export declare class Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_1 extends Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_2 extends Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment {
    constructor(thePtr: StepAP214_AutoDesignPersonAndOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_3 extends Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_4 extends Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment);
  }

export declare class Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_HArray1OfAutoDesignPresentedItemSelect): void;
  get(): StepAP214_HArray1OfAutoDesignPresentedItemSelect;
}

  export declare class Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_1 extends Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect {
    constructor();
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_2 extends Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect {
    constructor(thePtr: StepAP214_HArray1OfAutoDesignPresentedItemSelect);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_3 extends Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect);
  }

  export declare class Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_4 extends Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect {
    constructor(theHandle: Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect);
  }

export declare class Handle_StepAP214_AutoDesignPresentedItem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignPresentedItem): void;
  get(): StepAP214_AutoDesignPresentedItem;
}

  export declare class Handle_StepAP214_AutoDesignPresentedItem_1 extends Handle_StepAP214_AutoDesignPresentedItem {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignPresentedItem_2 extends Handle_StepAP214_AutoDesignPresentedItem {
    constructor(thePtr: StepAP214_AutoDesignPresentedItem);
  }

  export declare class Handle_StepAP214_AutoDesignPresentedItem_3 extends Handle_StepAP214_AutoDesignPresentedItem {
    constructor(theHandle: Handle_StepAP214_AutoDesignPresentedItem);
  }

  export declare class Handle_StepAP214_AutoDesignPresentedItem_4 extends Handle_StepAP214_AutoDesignPresentedItem {
    constructor(theHandle: Handle_StepAP214_AutoDesignPresentedItem);
  }

export declare class Handle_StepAP214_AutoDesignSecurityClassificationAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_AutoDesignSecurityClassificationAssignment): void;
  get(): StepAP214_AutoDesignSecurityClassificationAssignment;
}

  export declare class Handle_StepAP214_AutoDesignSecurityClassificationAssignment_1 extends Handle_StepAP214_AutoDesignSecurityClassificationAssignment {
    constructor();
  }

  export declare class Handle_StepAP214_AutoDesignSecurityClassificationAssignment_2 extends Handle_StepAP214_AutoDesignSecurityClassificationAssignment {
    constructor(thePtr: StepAP214_AutoDesignSecurityClassificationAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignSecurityClassificationAssignment_3 extends Handle_StepAP214_AutoDesignSecurityClassificationAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignSecurityClassificationAssignment);
  }

  export declare class Handle_StepAP214_AutoDesignSecurityClassificationAssignment_4 extends Handle_StepAP214_AutoDesignSecurityClassificationAssignment {
    constructor(theHandle: Handle_StepAP214_AutoDesignSecurityClassificationAssignment);
  }

export declare class Handle_StepAP214_Class {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_Class): void;
  get(): StepAP214_Class;
}

  export declare class Handle_StepAP214_Class_1 extends Handle_StepAP214_Class {
    constructor();
  }

  export declare class Handle_StepAP214_Class_2 extends Handle_StepAP214_Class {
    constructor(thePtr: StepAP214_Class);
  }

  export declare class Handle_StepAP214_Class_3 extends Handle_StepAP214_Class {
    constructor(theHandle: Handle_StepAP214_Class);
  }

  export declare class Handle_StepAP214_Class_4 extends Handle_StepAP214_Class {
    constructor(theHandle: Handle_StepAP214_Class);
  }

export declare class Handle_StepAP214_ExternallyDefinedClass {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_ExternallyDefinedClass): void;
  get(): StepAP214_ExternallyDefinedClass;
}

  export declare class Handle_StepAP214_ExternallyDefinedClass_1 extends Handle_StepAP214_ExternallyDefinedClass {
    constructor();
  }

  export declare class Handle_StepAP214_ExternallyDefinedClass_2 extends Handle_StepAP214_ExternallyDefinedClass {
    constructor(thePtr: StepAP214_ExternallyDefinedClass);
  }

  export declare class Handle_StepAP214_ExternallyDefinedClass_3 extends Handle_StepAP214_ExternallyDefinedClass {
    constructor(theHandle: Handle_StepAP214_ExternallyDefinedClass);
  }

  export declare class Handle_StepAP214_ExternallyDefinedClass_4 extends Handle_StepAP214_ExternallyDefinedClass {
    constructor(theHandle: Handle_StepAP214_ExternallyDefinedClass);
  }

export declare class Handle_StepAP214_ExternallyDefinedGeneralProperty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_ExternallyDefinedGeneralProperty): void;
  get(): StepAP214_ExternallyDefinedGeneralProperty;
}

  export declare class Handle_StepAP214_ExternallyDefinedGeneralProperty_1 extends Handle_StepAP214_ExternallyDefinedGeneralProperty {
    constructor();
  }

  export declare class Handle_StepAP214_ExternallyDefinedGeneralProperty_2 extends Handle_StepAP214_ExternallyDefinedGeneralProperty {
    constructor(thePtr: StepAP214_ExternallyDefinedGeneralProperty);
  }

  export declare class Handle_StepAP214_ExternallyDefinedGeneralProperty_3 extends Handle_StepAP214_ExternallyDefinedGeneralProperty {
    constructor(theHandle: Handle_StepAP214_ExternallyDefinedGeneralProperty);
  }

  export declare class Handle_StepAP214_ExternallyDefinedGeneralProperty_4 extends Handle_StepAP214_ExternallyDefinedGeneralProperty {
    constructor(theHandle: Handle_StepAP214_ExternallyDefinedGeneralProperty);
  }

export declare class Handle_StepAP214_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_Protocol): void;
  get(): StepAP214_Protocol;
}

  export declare class Handle_StepAP214_Protocol_1 extends Handle_StepAP214_Protocol {
    constructor();
  }

  export declare class Handle_StepAP214_Protocol_2 extends Handle_StepAP214_Protocol {
    constructor(thePtr: StepAP214_Protocol);
  }

  export declare class Handle_StepAP214_Protocol_3 extends Handle_StepAP214_Protocol {
    constructor(theHandle: Handle_StepAP214_Protocol);
  }

  export declare class Handle_StepAP214_Protocol_4 extends Handle_StepAP214_Protocol {
    constructor(theHandle: Handle_StepAP214_Protocol);
  }

export declare class Handle_StepAP214_RepItemGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP214_RepItemGroup): void;
  get(): StepAP214_RepItemGroup;
}

  export declare class Handle_StepAP214_RepItemGroup_1 extends Handle_StepAP214_RepItemGroup {
    constructor();
  }

  export declare class Handle_StepAP214_RepItemGroup_2 extends Handle_StepAP214_RepItemGroup {
    constructor(thePtr: StepAP214_RepItemGroup);
  }

  export declare class Handle_StepAP214_RepItemGroup_3 extends Handle_StepAP214_RepItemGroup {
    constructor(theHandle: Handle_StepAP214_RepItemGroup);
  }

  export declare class Handle_StepAP214_RepItemGroup_4 extends Handle_StepAP214_RepItemGroup {
    constructor(theHandle: Handle_StepAP214_RepItemGroup);
  }

export declare class Handle_StepAP242_DraughtingModelItemAssociation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP242_DraughtingModelItemAssociation): void;
  get(): StepAP242_DraughtingModelItemAssociation;
}

  export declare class Handle_StepAP242_DraughtingModelItemAssociation_1 extends Handle_StepAP242_DraughtingModelItemAssociation {
    constructor();
  }

  export declare class Handle_StepAP242_DraughtingModelItemAssociation_2 extends Handle_StepAP242_DraughtingModelItemAssociation {
    constructor(thePtr: StepAP242_DraughtingModelItemAssociation);
  }

  export declare class Handle_StepAP242_DraughtingModelItemAssociation_3 extends Handle_StepAP242_DraughtingModelItemAssociation {
    constructor(theHandle: Handle_StepAP242_DraughtingModelItemAssociation);
  }

  export declare class Handle_StepAP242_DraughtingModelItemAssociation_4 extends Handle_StepAP242_DraughtingModelItemAssociation {
    constructor(theHandle: Handle_StepAP242_DraughtingModelItemAssociation);
  }

export declare class Handle_StepAP242_IdAttribute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepAP242_IdAttribute): void;
  get(): StepAP242_IdAttribute;
}

  export declare class Handle_StepAP242_IdAttribute_1 extends Handle_StepAP242_IdAttribute {
    constructor();
  }

  export declare class Handle_StepAP242_IdAttribute_2 extends Handle_StepAP242_IdAttribute {
    constructor(thePtr: StepAP242_IdAttribute);
  }

  export declare class Handle_StepAP242_IdAttribute_3 extends Handle_StepAP242_IdAttribute {
    constructor(theHandle: Handle_StepAP242_IdAttribute);
  }

  export declare class Handle_StepAP242_IdAttribute_4 extends Handle_StepAP242_IdAttribute {
    constructor(theHandle: Handle_StepAP242_IdAttribute);
  }

export declare class StepToTopoDS_PointEdgeMap extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: StepToTopoDS_PointEdgeMap): void;
  Assign(theOther: StepToTopoDS_PointEdgeMap): StepToTopoDS_PointEdgeMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: StepToTopoDS_PointPair, theItem: TopoDS_Edge): Standard_Boolean;
  Bound(theKey: StepToTopoDS_PointPair, theItem: TopoDS_Edge): TopoDS_Edge;
  IsBound(theKey: StepToTopoDS_PointPair): Standard_Boolean;
  UnBind(theKey: StepToTopoDS_PointPair): Standard_Boolean;
  Seek(theKey: StepToTopoDS_PointPair): TopoDS_Edge;
  Find_1(theKey: StepToTopoDS_PointPair): TopoDS_Edge;
  Find_2(theKey: StepToTopoDS_PointPair, theValue: TopoDS_Edge): Standard_Boolean;
  ChangeSeek(theKey: StepToTopoDS_PointPair): TopoDS_Edge;
  ChangeFind(theKey: StepToTopoDS_PointPair): TopoDS_Edge;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class StepToTopoDS_PointEdgeMap_1 extends StepToTopoDS_PointEdgeMap {
    constructor();
  }

  export declare class StepToTopoDS_PointEdgeMap_2 extends StepToTopoDS_PointEdgeMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class StepToTopoDS_PointEdgeMap_3 extends StepToTopoDS_PointEdgeMap {
    constructor(theOther: StepToTopoDS_PointEdgeMap);
  }

export declare type STEPControl_StepModelType = {
  STEPControl_AsIs: {};
  STEPControl_ManifoldSolidBrep: {};
  STEPControl_BrepWithVoids: {};
  STEPControl_FacetedBrep: {};
  STEPControl_FacetedBrepAndBrepWithVoids: {};
  STEPControl_ShellBasedSurfaceModel: {};
  STEPControl_GeometricCurveSet: {};
  STEPControl_Hybrid: {};
}

export declare type StepToTopoDS_BuilderError = {
  StepToTopoDS_BuilderDone: {};
  StepToTopoDS_BuilderOther: {};
}

export declare type StepToTopoDS_TranslateShellError = {
  StepToTopoDS_TranslateShellDone: {};
  StepToTopoDS_TranslateShellOther: {};
}

export declare type StepToTopoDS_TranslateFaceError = {
  StepToTopoDS_TranslateFaceDone: {};
  StepToTopoDS_TranslateFaceOther: {};
}

export declare type StepToTopoDS_TranslateEdgeError = {
  StepToTopoDS_TranslateEdgeDone: {};
  StepToTopoDS_TranslateEdgeOther: {};
}

export declare type StepToTopoDS_TranslateVertexError = {
  StepToTopoDS_TranslateVertexDone: {};
  StepToTopoDS_TranslateVertexOther: {};
}

export declare type StepToTopoDS_TranslateVertexLoopError = {
  StepToTopoDS_TranslateVertexLoopDone: {};
  StepToTopoDS_TranslateVertexLoopOther: {};
}

export declare type StepToTopoDS_TranslatePolyLoopError = {
  StepToTopoDS_TranslatePolyLoopDone: {};
  StepToTopoDS_TranslatePolyLoopOther: {};
}

export declare type StepToTopoDS_GeometricToolError = {
  StepToTopoDS_GeometricToolDone: {};
  StepToTopoDS_GeometricToolIsDegenerated: {};
  StepToTopoDS_GeometricToolHasNoPCurve: {};
  StepToTopoDS_GeometricToolWrong3dParameters: {};
  StepToTopoDS_GeometricToolNoProjectiOnCurve: {};
  StepToTopoDS_GeometricToolOther: {};
}

export declare type StepToTopoDS_TranslateEdgeLoopError = {
  StepToTopoDS_TranslateEdgeLoopDone: {};
  StepToTopoDS_TranslateEdgeLoopOther: {};
}

export declare type TopoDSToStep_BuilderError = {
  TopoDSToStep_BuilderDone: {};
  TopoDSToStep_NoFaceMapped: {};
  TopoDSToStep_BuilderOther: {};
}

export declare type TopoDSToStep_MakeFaceError = {
  TopoDSToStep_FaceDone: {};
  TopoDSToStep_InfiniteFace: {};
  TopoDSToStep_NonManifoldFace: {};
  TopoDSToStep_NoWireMapped: {};
  TopoDSToStep_FaceOther: {};
}

export declare type TopoDSToStep_MakeWireError = {
  TopoDSToStep_WireDone: {};
  TopoDSToStep_NonManifoldWire: {};
  TopoDSToStep_WireOther: {};
}

export declare type TopoDSToStep_MakeEdgeError = {
  TopoDSToStep_EdgeDone: {};
  TopoDSToStep_NonManifoldEdge: {};
  TopoDSToStep_EdgeOther: {};
}

export declare type TopoDSToStep_MakeVertexError = {
  TopoDSToStep_VertexDone: {};
  TopoDSToStep_VertexOther: {};
}

export declare type TopoDSToStep_FacetedError = {
  TopoDSToStep_FacetedDone: {};
  TopoDSToStep_SurfaceNotPlane: {};
  TopoDSToStep_PCurveNotLinear: {};
}

export declare type TKSTEPLib = {
  GeomToStep_MakeAxis1Placement_1: typeof GeomToStep_MakeAxis1Placement_1;
  GeomToStep_MakeAxis1Placement_2: typeof GeomToStep_MakeAxis1Placement_2;
  GeomToStep_MakeAxis1Placement_3: typeof GeomToStep_MakeAxis1Placement_3;
  GeomToStep_MakeAxis1Placement_4: typeof GeomToStep_MakeAxis1Placement_4;
  GeomToStep_MakeAxis2Placement2d_1: typeof GeomToStep_MakeAxis2Placement2d_1;
  GeomToStep_MakeAxis2Placement2d_2: typeof GeomToStep_MakeAxis2Placement2d_2;
  GeomToStep_MakeAxis2Placement3d_1: typeof GeomToStep_MakeAxis2Placement3d_1;
  GeomToStep_MakeAxis2Placement3d_2: typeof GeomToStep_MakeAxis2Placement3d_2;
  GeomToStep_MakeAxis2Placement3d_3: typeof GeomToStep_MakeAxis2Placement3d_3;
  GeomToStep_MakeAxis2Placement3d_4: typeof GeomToStep_MakeAxis2Placement3d_4;
  GeomToStep_MakeAxis2Placement3d_5: typeof GeomToStep_MakeAxis2Placement3d_5;
  GeomToStep_MakeBSplineCurveWithKnots_1: typeof GeomToStep_MakeBSplineCurveWithKnots_1;
  GeomToStep_MakeBSplineCurveWithKnots_2: typeof GeomToStep_MakeBSplineCurveWithKnots_2;
  GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve_1: typeof GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve_1;
  GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve_2: typeof GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve_2;
  GeomToStep_MakeBSplineSurfaceWithKnots: typeof GeomToStep_MakeBSplineSurfaceWithKnots;
  GeomToStep_MakeBSplineSurfaceWithKnotsAndRationalBSplineSurface: typeof GeomToStep_MakeBSplineSurfaceWithKnotsAndRationalBSplineSurface;
  GeomToStep_MakeBoundedCurve_1: typeof GeomToStep_MakeBoundedCurve_1;
  GeomToStep_MakeBoundedCurve_2: typeof GeomToStep_MakeBoundedCurve_2;
  GeomToStep_MakeBoundedSurface: typeof GeomToStep_MakeBoundedSurface;
  GeomToStep_MakeCartesianPoint_1: typeof GeomToStep_MakeCartesianPoint_1;
  GeomToStep_MakeCartesianPoint_2: typeof GeomToStep_MakeCartesianPoint_2;
  GeomToStep_MakeCartesianPoint_3: typeof GeomToStep_MakeCartesianPoint_3;
  GeomToStep_MakeCartesianPoint_4: typeof GeomToStep_MakeCartesianPoint_4;
  GeomToStep_MakeCircle_1: typeof GeomToStep_MakeCircle_1;
  GeomToStep_MakeCircle_2: typeof GeomToStep_MakeCircle_2;
  GeomToStep_MakeCircle_3: typeof GeomToStep_MakeCircle_3;
  GeomToStep_MakeConic_1: typeof GeomToStep_MakeConic_1;
  GeomToStep_MakeConic_2: typeof GeomToStep_MakeConic_2;
  GeomToStep_MakeConicalSurface: typeof GeomToStep_MakeConicalSurface;
  GeomToStep_MakeCurve_1: typeof GeomToStep_MakeCurve_1;
  GeomToStep_MakeCurve_2: typeof GeomToStep_MakeCurve_2;
  GeomToStep_MakeCylindricalSurface: typeof GeomToStep_MakeCylindricalSurface;
  GeomToStep_MakeDirection_1: typeof GeomToStep_MakeDirection_1;
  GeomToStep_MakeDirection_2: typeof GeomToStep_MakeDirection_2;
  GeomToStep_MakeDirection_3: typeof GeomToStep_MakeDirection_3;
  GeomToStep_MakeDirection_4: typeof GeomToStep_MakeDirection_4;
  GeomToStep_MakeElementarySurface: typeof GeomToStep_MakeElementarySurface;
  GeomToStep_MakeEllipse_1: typeof GeomToStep_MakeEllipse_1;
  GeomToStep_MakeEllipse_2: typeof GeomToStep_MakeEllipse_2;
  GeomToStep_MakeEllipse_3: typeof GeomToStep_MakeEllipse_3;
  GeomToStep_MakeHyperbola_1: typeof GeomToStep_MakeHyperbola_1;
  GeomToStep_MakeHyperbola_2: typeof GeomToStep_MakeHyperbola_2;
  GeomToStep_MakeLine_1: typeof GeomToStep_MakeLine_1;
  GeomToStep_MakeLine_2: typeof GeomToStep_MakeLine_2;
  GeomToStep_MakeLine_3: typeof GeomToStep_MakeLine_3;
  GeomToStep_MakeLine_4: typeof GeomToStep_MakeLine_4;
  GeomToStep_MakeParabola_1: typeof GeomToStep_MakeParabola_1;
  GeomToStep_MakeParabola_2: typeof GeomToStep_MakeParabola_2;
  GeomToStep_MakePlane_1: typeof GeomToStep_MakePlane_1;
  GeomToStep_MakePlane_2: typeof GeomToStep_MakePlane_2;
  GeomToStep_MakePolyline_1: typeof GeomToStep_MakePolyline_1;
  GeomToStep_MakePolyline_2: typeof GeomToStep_MakePolyline_2;
  GeomToStep_MakeRectangularTrimmedSurface: typeof GeomToStep_MakeRectangularTrimmedSurface;
  GeomToStep_MakeSphericalSurface: typeof GeomToStep_MakeSphericalSurface;
  GeomToStep_MakeSurface: typeof GeomToStep_MakeSurface;
  GeomToStep_MakeSurfaceOfLinearExtrusion: typeof GeomToStep_MakeSurfaceOfLinearExtrusion;
  GeomToStep_MakeSurfaceOfRevolution: typeof GeomToStep_MakeSurfaceOfRevolution;
  GeomToStep_MakeSweptSurface: typeof GeomToStep_MakeSweptSurface;
  GeomToStep_MakeToroidalSurface: typeof GeomToStep_MakeToroidalSurface;
  GeomToStep_MakeVector_1: typeof GeomToStep_MakeVector_1;
  GeomToStep_MakeVector_2: typeof GeomToStep_MakeVector_2;
  GeomToStep_MakeVector_3: typeof GeomToStep_MakeVector_3;
  GeomToStep_MakeVector_4: typeof GeomToStep_MakeVector_4;
  RWStepAP203_RWCcDesignApproval: typeof RWStepAP203_RWCcDesignApproval;
  RWStepAP203_RWCcDesignCertification: typeof RWStepAP203_RWCcDesignCertification;
  RWStepAP203_RWCcDesignContract: typeof RWStepAP203_RWCcDesignContract;
  RWStepAP203_RWCcDesignDateAndTimeAssignment: typeof RWStepAP203_RWCcDesignDateAndTimeAssignment;
  RWStepAP203_RWCcDesignPersonAndOrganizationAssignment: typeof RWStepAP203_RWCcDesignPersonAndOrganizationAssignment;
  RWStepAP203_RWCcDesignSecurityClassification: typeof RWStepAP203_RWCcDesignSecurityClassification;
  RWStepAP203_RWCcDesignSpecificationReference: typeof RWStepAP203_RWCcDesignSpecificationReference;
  RWStepAP203_RWChange: typeof RWStepAP203_RWChange;
  RWStepAP203_RWChangeRequest: typeof RWStepAP203_RWChangeRequest;
  RWStepAP203_RWStartRequest: typeof RWStepAP203_RWStartRequest;
  RWStepAP203_RWStartWork: typeof RWStepAP203_RWStartWork;
  RWStepAP214_RWAppliedApprovalAssignment: typeof RWStepAP214_RWAppliedApprovalAssignment;
  RWStepAP214_RWAppliedDateAndTimeAssignment: typeof RWStepAP214_RWAppliedDateAndTimeAssignment;
  RWStepAP214_RWAppliedDateAssignment: typeof RWStepAP214_RWAppliedDateAssignment;
  RWStepAP214_RWAppliedDocumentReference: typeof RWStepAP214_RWAppliedDocumentReference;
  RWStepAP214_RWAppliedExternalIdentificationAssignment: typeof RWStepAP214_RWAppliedExternalIdentificationAssignment;
  RWStepAP214_RWAppliedGroupAssignment: typeof RWStepAP214_RWAppliedGroupAssignment;
  RWStepAP214_RWAppliedOrganizationAssignment: typeof RWStepAP214_RWAppliedOrganizationAssignment;
  RWStepAP214_RWAppliedPersonAndOrganizationAssignment: typeof RWStepAP214_RWAppliedPersonAndOrganizationAssignment;
  RWStepAP214_RWAppliedPresentedItem: typeof RWStepAP214_RWAppliedPresentedItem;
  RWStepAP214_RWAppliedSecurityClassificationAssignment: typeof RWStepAP214_RWAppliedSecurityClassificationAssignment;
  RWStepAP214_RWAutoDesignActualDateAndTimeAssignment: typeof RWStepAP214_RWAutoDesignActualDateAndTimeAssignment;
  RWStepAP214_RWAutoDesignActualDateAssignment: typeof RWStepAP214_RWAutoDesignActualDateAssignment;
  RWStepAP214_RWAutoDesignApprovalAssignment: typeof RWStepAP214_RWAutoDesignApprovalAssignment;
  RWStepAP214_RWAutoDesignDateAndPersonAssignment: typeof RWStepAP214_RWAutoDesignDateAndPersonAssignment;
  RWStepAP214_RWAutoDesignDocumentReference: typeof RWStepAP214_RWAutoDesignDocumentReference;
  RWStepAP214_RWAutoDesignGroupAssignment: typeof RWStepAP214_RWAutoDesignGroupAssignment;
  RWStepAP214_RWAutoDesignNominalDateAndTimeAssignment: typeof RWStepAP214_RWAutoDesignNominalDateAndTimeAssignment;
  RWStepAP214_RWAutoDesignNominalDateAssignment: typeof RWStepAP214_RWAutoDesignNominalDateAssignment;
  RWStepAP214_RWAutoDesignOrganizationAssignment: typeof RWStepAP214_RWAutoDesignOrganizationAssignment;
  RWStepAP214_RWAutoDesignPersonAndOrganizationAssignment: typeof RWStepAP214_RWAutoDesignPersonAndOrganizationAssignment;
  RWStepAP214_RWAutoDesignPresentedItem: typeof RWStepAP214_RWAutoDesignPresentedItem;
  RWStepAP214_RWAutoDesignSecurityClassificationAssignment: typeof RWStepAP214_RWAutoDesignSecurityClassificationAssignment;
  RWStepAP214_RWClass: typeof RWStepAP214_RWClass;
  RWStepAP214_RWExternallyDefinedClass: typeof RWStepAP214_RWExternallyDefinedClass;
  RWStepAP214_RWExternallyDefinedGeneralProperty: typeof RWStepAP214_RWExternallyDefinedGeneralProperty;
  RWStepAP214_RWRepItemGroup: typeof RWStepAP214_RWRepItemGroup;
  RWStepAP214_ReadWriteModule: typeof RWStepAP214_ReadWriteModule;
  RWStepAP242_RWDraughtingModelItemAssociation: typeof RWStepAP242_RWDraughtingModelItemAssociation;
  RWStepAP242_RWGeometricItemSpecificUsage: typeof RWStepAP242_RWGeometricItemSpecificUsage;
  RWStepAP242_RWIdAttribute: typeof RWStepAP242_RWIdAttribute;
  RWStepAP242_RWItemIdentifiedRepresentationUsage: typeof RWStepAP242_RWItemIdentifiedRepresentationUsage;
  STEPConstruct_AP203Context: typeof STEPConstruct_AP203Context;
  STEPConstruct_ContextTool_1: typeof STEPConstruct_ContextTool_1;
  STEPConstruct_ContextTool_2: typeof STEPConstruct_ContextTool_2;
  STEPControl_ActorWrite: typeof STEPControl_ActorWrite;
  STEPControl_Controller: typeof STEPControl_Controller;
  STEPConstruct_Tool_1: typeof STEPConstruct_Tool_1;
  STEPConstruct_Tool_2: typeof STEPConstruct_Tool_2;
  STEPControl_Reader_1: typeof STEPControl_Reader_1;
  STEPControl_Reader_2: typeof STEPControl_Reader_2;
  STEPControl_Writer_1: typeof STEPControl_Writer_1;
  STEPControl_Writer_2: typeof STEPControl_Writer_2;
  StepAP242_ItemIdentifiedRepresentationUsageDefinition: typeof StepAP242_ItemIdentifiedRepresentationUsageDefinition;
  StepAP242_ItemIdentifiedRepresentationUsage: typeof StepAP242_ItemIdentifiedRepresentationUsage;
  StepAP242_GeometricItemSpecificUsage: typeof StepAP242_GeometricItemSpecificUsage;
  STEPConstruct_Assembly: typeof STEPConstruct_Assembly;
  STEPConstruct_ExternRefs_1: typeof STEPConstruct_ExternRefs_1;
  STEPConstruct_ExternRefs_2: typeof STEPConstruct_ExternRefs_2;
  STEPConstruct_Part: typeof STEPConstruct_Part;
  STEPConstruct_Styles_1: typeof STEPConstruct_Styles_1;
  STEPConstruct_Styles_2: typeof STEPConstruct_Styles_2;
  STEPConstruct_UnitContext: typeof STEPConstruct_UnitContext;
  STEPConstruct_ValidationProps_1: typeof STEPConstruct_ValidationProps_1;
  STEPConstruct_ValidationProps_2: typeof STEPConstruct_ValidationProps_2;
  StepToTopoDS_NMTool_1: typeof StepToTopoDS_NMTool_1;
  StepToTopoDS_NMTool_2: typeof StepToTopoDS_NMTool_2;
  STEPControl_ActorRead: typeof STEPControl_ActorRead;
  STEPEdit_EditContext: typeof STEPEdit_EditContext;
  STEPEdit_EditSDR: typeof STEPEdit_EditSDR;
  STEPSelections_AssemblyLink_1: typeof STEPSelections_AssemblyLink_1;
  STEPSelections_AssemblyLink_2: typeof STEPSelections_AssemblyLink_2;
  STEPSelections_AssemblyComponent_1: typeof STEPSelections_AssemblyComponent_1;
  STEPSelections_AssemblyComponent_2: typeof STEPSelections_AssemblyComponent_2;
  STEPSelections_AssemblyExplorer: typeof STEPSelections_AssemblyExplorer;
  STEPSelections_SelectAssembly: typeof STEPSelections_SelectAssembly;
  STEPSelections_SelectDerived: typeof STEPSelections_SelectDerived;
  STEPSelections_SelectFaces: typeof STEPSelections_SelectFaces;
  STEPSelections_SelectForTransfer_1: typeof STEPSelections_SelectForTransfer_1;
  STEPSelections_SelectForTransfer_2: typeof STEPSelections_SelectForTransfer_2;
  STEPSelections_SelectGSCurves: typeof STEPSelections_SelectGSCurves;
  STEPSelections_SelectInstances: typeof STEPSelections_SelectInstances;
  StepAP203_ApprovedItem: typeof StepAP203_ApprovedItem;
  StepAP203_CertifiedItem: typeof StepAP203_CertifiedItem;
  StepAP203_ChangeRequestItem: typeof StepAP203_ChangeRequestItem;
  StepAP203_ClassifiedItem: typeof StepAP203_ClassifiedItem;
  StepAP203_ContractedItem: typeof StepAP203_ContractedItem;
  StepAP203_DateTimeItem: typeof StepAP203_DateTimeItem;
  StepAP203_PersonOrganizationItem: typeof StepAP203_PersonOrganizationItem;
  StepAP203_SpecifiedItem: typeof StepAP203_SpecifiedItem;
  StepAP203_StartRequestItem: typeof StepAP203_StartRequestItem;
  StepAP203_WorkItem: typeof StepAP203_WorkItem;
  StepAP203_CcDesignApproval: typeof StepAP203_CcDesignApproval;
  StepAP203_CcDesignCertification: typeof StepAP203_CcDesignCertification;
  StepAP203_CcDesignContract: typeof StepAP203_CcDesignContract;
  StepAP203_CcDesignDateAndTimeAssignment: typeof StepAP203_CcDesignDateAndTimeAssignment;
  StepAP203_CcDesignPersonAndOrganizationAssignment: typeof StepAP203_CcDesignPersonAndOrganizationAssignment;
  StepAP203_CcDesignSecurityClassification: typeof StepAP203_CcDesignSecurityClassification;
  StepAP203_CcDesignSpecificationReference: typeof StepAP203_CcDesignSpecificationReference;
  StepAP203_Change: typeof StepAP203_Change;
  StepAP203_ChangeRequest: typeof StepAP203_ChangeRequest;
  StepAP203_StartRequest: typeof StepAP203_StartRequest;
  StepAP203_StartWork: typeof StepAP203_StartWork;
  StepAP209_Construct_1: typeof StepAP209_Construct_1;
  StepAP209_Construct_2: typeof StepAP209_Construct_2;
  StepAP214_ApprovalItem: typeof StepAP214_ApprovalItem;
  StepAP214_AppliedApprovalAssignment: typeof StepAP214_AppliedApprovalAssignment;
  StepAP214_DateAndTimeItem: typeof StepAP214_DateAndTimeItem;
  StepAP214_AppliedDateAndTimeAssignment: typeof StepAP214_AppliedDateAndTimeAssignment;
  StepAP214_DateItem: typeof StepAP214_DateItem;
  StepAP214_AppliedDateAssignment: typeof StepAP214_AppliedDateAssignment;
  StepAP214_DocumentReferenceItem: typeof StepAP214_DocumentReferenceItem;
  StepAP214_AppliedDocumentReference: typeof StepAP214_AppliedDocumentReference;
  StepAP214_ExternalIdentificationItem: typeof StepAP214_ExternalIdentificationItem;
  StepAP214_AppliedExternalIdentificationAssignment: typeof StepAP214_AppliedExternalIdentificationAssignment;
  StepAP214_GroupItem: typeof StepAP214_GroupItem;
  StepAP214_AppliedGroupAssignment: typeof StepAP214_AppliedGroupAssignment;
  StepAP214_OrganizationItem: typeof StepAP214_OrganizationItem;
  StepAP214_AppliedOrganizationAssignment: typeof StepAP214_AppliedOrganizationAssignment;
  StepAP214_PersonAndOrganizationItem: typeof StepAP214_PersonAndOrganizationItem;
  StepAP214_AppliedPersonAndOrganizationAssignment: typeof StepAP214_AppliedPersonAndOrganizationAssignment;
  StepAP214_PresentedItemSelect: typeof StepAP214_PresentedItemSelect;
  StepAP214_AppliedPresentedItem: typeof StepAP214_AppliedPresentedItem;
  StepAP214_SecurityClassificationItem: typeof StepAP214_SecurityClassificationItem;
  StepAP214_AppliedSecurityClassificationAssignment: typeof StepAP214_AppliedSecurityClassificationAssignment;
  StepAP214_AutoDesignDateAndPersonItem: typeof StepAP214_AutoDesignDateAndPersonItem;
  StepAP214_AutoDesignDateAndTimeItem: typeof StepAP214_AutoDesignDateAndTimeItem;
  StepAP214_AutoDesignDatedItem: typeof StepAP214_AutoDesignDatedItem;
  StepAP214_AutoDesignGeneralOrgItem: typeof StepAP214_AutoDesignGeneralOrgItem;
  StepAP214_AutoDesignGroupedItem: typeof StepAP214_AutoDesignGroupedItem;
  StepAP214_AutoDesignPresentedItemSelect: typeof StepAP214_AutoDesignPresentedItemSelect;
  StepAP214_AutoDesignReferencingItem: typeof StepAP214_AutoDesignReferencingItem;
  StepAP214_AutoDesignActualDateAndTimeAssignment: typeof StepAP214_AutoDesignActualDateAndTimeAssignment;
  StepAP214_AutoDesignActualDateAssignment: typeof StepAP214_AutoDesignActualDateAssignment;
  StepAP214_AutoDesignApprovalAssignment: typeof StepAP214_AutoDesignApprovalAssignment;
  StepAP214_AutoDesignDateAndPersonAssignment: typeof StepAP214_AutoDesignDateAndPersonAssignment;
  StepAP214_AutoDesignDocumentReference: typeof StepAP214_AutoDesignDocumentReference;
  StepAP214_AutoDesignGroupAssignment: typeof StepAP214_AutoDesignGroupAssignment;
  StepAP214_AutoDesignNominalDateAndTimeAssignment: typeof StepAP214_AutoDesignNominalDateAndTimeAssignment;
  StepAP214_AutoDesignNominalDateAssignment: typeof StepAP214_AutoDesignNominalDateAssignment;
  StepAP214_AutoDesignOrganizationAssignment: typeof StepAP214_AutoDesignOrganizationAssignment;
  StepAP214_AutoDesignOrganizationItem: typeof StepAP214_AutoDesignOrganizationItem;
  StepAP214_AutoDesignPersonAndOrganizationAssignment: typeof StepAP214_AutoDesignPersonAndOrganizationAssignment;
  StepAP214_AutoDesignPresentedItem: typeof StepAP214_AutoDesignPresentedItem;
  StepAP214_AutoDesignSecurityClassificationAssignment: typeof StepAP214_AutoDesignSecurityClassificationAssignment;
  StepAP214_Class: typeof StepAP214_Class;
  StepAP214_ExternallyDefinedClass: typeof StepAP214_ExternallyDefinedClass;
  StepAP214_ExternallyDefinedGeneralProperty: typeof StepAP214_ExternallyDefinedGeneralProperty;
  StepAP214_Protocol: typeof StepAP214_Protocol;
  StepAP214_RepItemGroup: typeof StepAP214_RepItemGroup;
  StepAP242_DraughtingModelItemAssociation: typeof StepAP242_DraughtingModelItemAssociation;
  StepAP242_IdAttributeSelect: typeof StepAP242_IdAttributeSelect;
  StepAP242_IdAttribute: typeof StepAP242_IdAttribute;
  StepToTopoDS_PointPair: typeof StepToTopoDS_PointPair;
  StepToTopoDS_MakeTransformed: typeof StepToTopoDS_MakeTransformed;
  StepToTopoDS_Tool_1: typeof StepToTopoDS_Tool_1;
  StepToTopoDS_Tool_2: typeof StepToTopoDS_Tool_2;
  StepToTopoDS_TranslateCompositeCurve_1: typeof StepToTopoDS_TranslateCompositeCurve_1;
  StepToTopoDS_TranslateCompositeCurve_2: typeof StepToTopoDS_TranslateCompositeCurve_2;
  StepToTopoDS_TranslateCompositeCurve_3: typeof StepToTopoDS_TranslateCompositeCurve_3;
  StepToTopoDS_TranslateCurveBoundedSurface_1: typeof StepToTopoDS_TranslateCurveBoundedSurface_1;
  StepToTopoDS_TranslateCurveBoundedSurface_2: typeof StepToTopoDS_TranslateCurveBoundedSurface_2;
  StepToTopoDS_TranslateEdge_1: typeof StepToTopoDS_TranslateEdge_1;
  StepToTopoDS_TranslateEdge_2: typeof StepToTopoDS_TranslateEdge_2;
  StepToTopoDS_TranslateEdgeLoop_1: typeof StepToTopoDS_TranslateEdgeLoop_1;
  StepToTopoDS_TranslateEdgeLoop_2: typeof StepToTopoDS_TranslateEdgeLoop_2;
  StepToTopoDS_TranslateFace_1: typeof StepToTopoDS_TranslateFace_1;
  StepToTopoDS_TranslateFace_2: typeof StepToTopoDS_TranslateFace_2;
  StepToTopoDS_TranslatePolyLoop_1: typeof StepToTopoDS_TranslatePolyLoop_1;
  StepToTopoDS_TranslatePolyLoop_2: typeof StepToTopoDS_TranslatePolyLoop_2;
  StepToTopoDS_TranslateShell: typeof StepToTopoDS_TranslateShell;
  StepToTopoDS_TranslateVertex_1: typeof StepToTopoDS_TranslateVertex_1;
  StepToTopoDS_TranslateVertex_2: typeof StepToTopoDS_TranslateVertex_2;
  StepToTopoDS_TranslateVertexLoop_1: typeof StepToTopoDS_TranslateVertexLoop_1;
  StepToTopoDS_TranslateVertexLoop_2: typeof StepToTopoDS_TranslateVertexLoop_2;
  TopoDSToStep_Builder_1: typeof TopoDSToStep_Builder_1;
  TopoDSToStep_Builder_2: typeof TopoDSToStep_Builder_2;
  TopoDSToStep_MakeBrepWithVoids: typeof TopoDSToStep_MakeBrepWithVoids;
  TopoDSToStep_MakeFacetedBrep_1: typeof TopoDSToStep_MakeFacetedBrep_1;
  TopoDSToStep_MakeFacetedBrep_2: typeof TopoDSToStep_MakeFacetedBrep_2;
  TopoDSToStep_MakeFacetedBrepAndBrepWithVoids: typeof TopoDSToStep_MakeFacetedBrepAndBrepWithVoids;
  TopoDSToStep_MakeGeometricCurveSet: typeof TopoDSToStep_MakeGeometricCurveSet;
  TopoDSToStep_MakeManifoldSolidBrep_1: typeof TopoDSToStep_MakeManifoldSolidBrep_1;
  TopoDSToStep_MakeManifoldSolidBrep_2: typeof TopoDSToStep_MakeManifoldSolidBrep_2;
  TopoDSToStep_MakeShellBasedSurfaceModel_1: typeof TopoDSToStep_MakeShellBasedSurfaceModel_1;
  TopoDSToStep_MakeShellBasedSurfaceModel_2: typeof TopoDSToStep_MakeShellBasedSurfaceModel_2;
  TopoDSToStep_MakeShellBasedSurfaceModel_3: typeof TopoDSToStep_MakeShellBasedSurfaceModel_3;
  TopoDSToStep_MakeStepEdge_1: typeof TopoDSToStep_MakeStepEdge_1;
  TopoDSToStep_MakeStepEdge_2: typeof TopoDSToStep_MakeStepEdge_2;
  TopoDSToStep_MakeStepFace_1: typeof TopoDSToStep_MakeStepFace_1;
  TopoDSToStep_MakeStepFace_2: typeof TopoDSToStep_MakeStepFace_2;
  TopoDSToStep_MakeStepVertex_1: typeof TopoDSToStep_MakeStepVertex_1;
  TopoDSToStep_MakeStepVertex_2: typeof TopoDSToStep_MakeStepVertex_2;
  TopoDSToStep_MakeStepWire_1: typeof TopoDSToStep_MakeStepWire_1;
  TopoDSToStep_MakeStepWire_2: typeof TopoDSToStep_MakeStepWire_2;
  TopoDSToStep_Tool_1: typeof TopoDSToStep_Tool_1;
  TopoDSToStep_Tool_2: typeof TopoDSToStep_Tool_2;
  TopoDSToStep_WireframeBuilder_1: typeof TopoDSToStep_WireframeBuilder_1;
  TopoDSToStep_WireframeBuilder_2: typeof TopoDSToStep_WireframeBuilder_2;
  Handle_RWStepAP214_GeneralModule_1: typeof Handle_RWStepAP214_GeneralModule_1;
  Handle_RWStepAP214_GeneralModule_2: typeof Handle_RWStepAP214_GeneralModule_2;
  Handle_RWStepAP214_GeneralModule_3: typeof Handle_RWStepAP214_GeneralModule_3;
  Handle_RWStepAP214_GeneralModule_4: typeof Handle_RWStepAP214_GeneralModule_4;
  Handle_RWStepAP214_ReadWriteModule_1: typeof Handle_RWStepAP214_ReadWriteModule_1;
  Handle_RWStepAP214_ReadWriteModule_2: typeof Handle_RWStepAP214_ReadWriteModule_2;
  Handle_RWStepAP214_ReadWriteModule_3: typeof Handle_RWStepAP214_ReadWriteModule_3;
  Handle_RWStepAP214_ReadWriteModule_4: typeof Handle_RWStepAP214_ReadWriteModule_4;
  Handle_STEPControl_ActorWrite_1: typeof Handle_STEPControl_ActorWrite_1;
  Handle_STEPControl_ActorWrite_2: typeof Handle_STEPControl_ActorWrite_2;
  Handle_STEPControl_ActorWrite_3: typeof Handle_STEPControl_ActorWrite_3;
  Handle_STEPControl_ActorWrite_4: typeof Handle_STEPControl_ActorWrite_4;
  Handle_STEPControl_Controller_1: typeof Handle_STEPControl_Controller_1;
  Handle_STEPControl_Controller_2: typeof Handle_STEPControl_Controller_2;
  Handle_STEPControl_Controller_3: typeof Handle_STEPControl_Controller_3;
  Handle_STEPControl_Controller_4: typeof Handle_STEPControl_Controller_4;
  Handle_StepAP242_ItemIdentifiedRepresentationUsage_1: typeof Handle_StepAP242_ItemIdentifiedRepresentationUsage_1;
  Handle_StepAP242_ItemIdentifiedRepresentationUsage_2: typeof Handle_StepAP242_ItemIdentifiedRepresentationUsage_2;
  Handle_StepAP242_ItemIdentifiedRepresentationUsage_3: typeof Handle_StepAP242_ItemIdentifiedRepresentationUsage_3;
  Handle_StepAP242_ItemIdentifiedRepresentationUsage_4: typeof Handle_StepAP242_ItemIdentifiedRepresentationUsage_4;
  Handle_StepAP242_GeometricItemSpecificUsage_1: typeof Handle_StepAP242_GeometricItemSpecificUsage_1;
  Handle_StepAP242_GeometricItemSpecificUsage_2: typeof Handle_StepAP242_GeometricItemSpecificUsage_2;
  Handle_StepAP242_GeometricItemSpecificUsage_3: typeof Handle_StepAP242_GeometricItemSpecificUsage_3;
  Handle_StepAP242_GeometricItemSpecificUsage_4: typeof Handle_StepAP242_GeometricItemSpecificUsage_4;
  StepToTopoDS_DataMapOfRINames_1: typeof StepToTopoDS_DataMapOfRINames_1;
  StepToTopoDS_DataMapOfRINames_2: typeof StepToTopoDS_DataMapOfRINames_2;
  StepToTopoDS_DataMapOfRINames_3: typeof StepToTopoDS_DataMapOfRINames_3;
  Handle_STEPControl_ActorRead_1: typeof Handle_STEPControl_ActorRead_1;
  Handle_STEPControl_ActorRead_2: typeof Handle_STEPControl_ActorRead_2;
  Handle_STEPControl_ActorRead_3: typeof Handle_STEPControl_ActorRead_3;
  Handle_STEPControl_ActorRead_4: typeof Handle_STEPControl_ActorRead_4;
  Handle_STEPEdit_EditContext_1: typeof Handle_STEPEdit_EditContext_1;
  Handle_STEPEdit_EditContext_2: typeof Handle_STEPEdit_EditContext_2;
  Handle_STEPEdit_EditContext_3: typeof Handle_STEPEdit_EditContext_3;
  Handle_STEPEdit_EditContext_4: typeof Handle_STEPEdit_EditContext_4;
  Handle_STEPEdit_EditSDR_1: typeof Handle_STEPEdit_EditSDR_1;
  Handle_STEPEdit_EditSDR_2: typeof Handle_STEPEdit_EditSDR_2;
  Handle_STEPEdit_EditSDR_3: typeof Handle_STEPEdit_EditSDR_3;
  Handle_STEPEdit_EditSDR_4: typeof Handle_STEPEdit_EditSDR_4;
  Handle_STEPSelections_AssemblyLink_1: typeof Handle_STEPSelections_AssemblyLink_1;
  Handle_STEPSelections_AssemblyLink_2: typeof Handle_STEPSelections_AssemblyLink_2;
  Handle_STEPSelections_AssemblyLink_3: typeof Handle_STEPSelections_AssemblyLink_3;
  Handle_STEPSelections_AssemblyLink_4: typeof Handle_STEPSelections_AssemblyLink_4;
  Handle_STEPSelections_HSequenceOfAssemblyLink_1: typeof Handle_STEPSelections_HSequenceOfAssemblyLink_1;
  Handle_STEPSelections_HSequenceOfAssemblyLink_2: typeof Handle_STEPSelections_HSequenceOfAssemblyLink_2;
  Handle_STEPSelections_HSequenceOfAssemblyLink_3: typeof Handle_STEPSelections_HSequenceOfAssemblyLink_3;
  Handle_STEPSelections_HSequenceOfAssemblyLink_4: typeof Handle_STEPSelections_HSequenceOfAssemblyLink_4;
  Handle_STEPSelections_AssemblyComponent_1: typeof Handle_STEPSelections_AssemblyComponent_1;
  Handle_STEPSelections_AssemblyComponent_2: typeof Handle_STEPSelections_AssemblyComponent_2;
  Handle_STEPSelections_AssemblyComponent_3: typeof Handle_STEPSelections_AssemblyComponent_3;
  Handle_STEPSelections_AssemblyComponent_4: typeof Handle_STEPSelections_AssemblyComponent_4;
  Handle_STEPSelections_SelectAssembly_1: typeof Handle_STEPSelections_SelectAssembly_1;
  Handle_STEPSelections_SelectAssembly_2: typeof Handle_STEPSelections_SelectAssembly_2;
  Handle_STEPSelections_SelectAssembly_3: typeof Handle_STEPSelections_SelectAssembly_3;
  Handle_STEPSelections_SelectAssembly_4: typeof Handle_STEPSelections_SelectAssembly_4;
  Handle_STEPSelections_SelectDerived_1: typeof Handle_STEPSelections_SelectDerived_1;
  Handle_STEPSelections_SelectDerived_2: typeof Handle_STEPSelections_SelectDerived_2;
  Handle_STEPSelections_SelectDerived_3: typeof Handle_STEPSelections_SelectDerived_3;
  Handle_STEPSelections_SelectDerived_4: typeof Handle_STEPSelections_SelectDerived_4;
  Handle_STEPSelections_SelectFaces_1: typeof Handle_STEPSelections_SelectFaces_1;
  Handle_STEPSelections_SelectFaces_2: typeof Handle_STEPSelections_SelectFaces_2;
  Handle_STEPSelections_SelectFaces_3: typeof Handle_STEPSelections_SelectFaces_3;
  Handle_STEPSelections_SelectFaces_4: typeof Handle_STEPSelections_SelectFaces_4;
  Handle_STEPSelections_SelectForTransfer_1: typeof Handle_STEPSelections_SelectForTransfer_1;
  Handle_STEPSelections_SelectForTransfer_2: typeof Handle_STEPSelections_SelectForTransfer_2;
  Handle_STEPSelections_SelectForTransfer_3: typeof Handle_STEPSelections_SelectForTransfer_3;
  Handle_STEPSelections_SelectForTransfer_4: typeof Handle_STEPSelections_SelectForTransfer_4;
  Handle_STEPSelections_SelectGSCurves_1: typeof Handle_STEPSelections_SelectGSCurves_1;
  Handle_STEPSelections_SelectGSCurves_2: typeof Handle_STEPSelections_SelectGSCurves_2;
  Handle_STEPSelections_SelectGSCurves_3: typeof Handle_STEPSelections_SelectGSCurves_3;
  Handle_STEPSelections_SelectGSCurves_4: typeof Handle_STEPSelections_SelectGSCurves_4;
  Handle_STEPSelections_SelectInstances_1: typeof Handle_STEPSelections_SelectInstances_1;
  Handle_STEPSelections_SelectInstances_2: typeof Handle_STEPSelections_SelectInstances_2;
  Handle_STEPSelections_SelectInstances_3: typeof Handle_STEPSelections_SelectInstances_3;
  Handle_STEPSelections_SelectInstances_4: typeof Handle_STEPSelections_SelectInstances_4;
  StepAP203_Array1OfApprovedItem_1: typeof StepAP203_Array1OfApprovedItem_1;
  StepAP203_Array1OfApprovedItem_2: typeof StepAP203_Array1OfApprovedItem_2;
  StepAP203_Array1OfApprovedItem_3: typeof StepAP203_Array1OfApprovedItem_3;
  StepAP203_Array1OfApprovedItem_4: typeof StepAP203_Array1OfApprovedItem_4;
  StepAP203_Array1OfApprovedItem_5: typeof StepAP203_Array1OfApprovedItem_5;
  StepAP203_Array1OfCertifiedItem_1: typeof StepAP203_Array1OfCertifiedItem_1;
  StepAP203_Array1OfCertifiedItem_2: typeof StepAP203_Array1OfCertifiedItem_2;
  StepAP203_Array1OfCertifiedItem_3: typeof StepAP203_Array1OfCertifiedItem_3;
  StepAP203_Array1OfCertifiedItem_4: typeof StepAP203_Array1OfCertifiedItem_4;
  StepAP203_Array1OfCertifiedItem_5: typeof StepAP203_Array1OfCertifiedItem_5;
  StepAP203_Array1OfChangeRequestItem_1: typeof StepAP203_Array1OfChangeRequestItem_1;
  StepAP203_Array1OfChangeRequestItem_2: typeof StepAP203_Array1OfChangeRequestItem_2;
  StepAP203_Array1OfChangeRequestItem_3: typeof StepAP203_Array1OfChangeRequestItem_3;
  StepAP203_Array1OfChangeRequestItem_4: typeof StepAP203_Array1OfChangeRequestItem_4;
  StepAP203_Array1OfChangeRequestItem_5: typeof StepAP203_Array1OfChangeRequestItem_5;
  StepAP203_Array1OfClassifiedItem_1: typeof StepAP203_Array1OfClassifiedItem_1;
  StepAP203_Array1OfClassifiedItem_2: typeof StepAP203_Array1OfClassifiedItem_2;
  StepAP203_Array1OfClassifiedItem_3: typeof StepAP203_Array1OfClassifiedItem_3;
  StepAP203_Array1OfClassifiedItem_4: typeof StepAP203_Array1OfClassifiedItem_4;
  StepAP203_Array1OfClassifiedItem_5: typeof StepAP203_Array1OfClassifiedItem_5;
  StepAP203_Array1OfContractedItem_1: typeof StepAP203_Array1OfContractedItem_1;
  StepAP203_Array1OfContractedItem_2: typeof StepAP203_Array1OfContractedItem_2;
  StepAP203_Array1OfContractedItem_3: typeof StepAP203_Array1OfContractedItem_3;
  StepAP203_Array1OfContractedItem_4: typeof StepAP203_Array1OfContractedItem_4;
  StepAP203_Array1OfContractedItem_5: typeof StepAP203_Array1OfContractedItem_5;
  StepAP203_Array1OfDateTimeItem_1: typeof StepAP203_Array1OfDateTimeItem_1;
  StepAP203_Array1OfDateTimeItem_2: typeof StepAP203_Array1OfDateTimeItem_2;
  StepAP203_Array1OfDateTimeItem_3: typeof StepAP203_Array1OfDateTimeItem_3;
  StepAP203_Array1OfDateTimeItem_4: typeof StepAP203_Array1OfDateTimeItem_4;
  StepAP203_Array1OfDateTimeItem_5: typeof StepAP203_Array1OfDateTimeItem_5;
  StepAP203_Array1OfPersonOrganizationItem_1: typeof StepAP203_Array1OfPersonOrganizationItem_1;
  StepAP203_Array1OfPersonOrganizationItem_2: typeof StepAP203_Array1OfPersonOrganizationItem_2;
  StepAP203_Array1OfPersonOrganizationItem_3: typeof StepAP203_Array1OfPersonOrganizationItem_3;
  StepAP203_Array1OfPersonOrganizationItem_4: typeof StepAP203_Array1OfPersonOrganizationItem_4;
  StepAP203_Array1OfPersonOrganizationItem_5: typeof StepAP203_Array1OfPersonOrganizationItem_5;
  StepAP203_Array1OfSpecifiedItem_1: typeof StepAP203_Array1OfSpecifiedItem_1;
  StepAP203_Array1OfSpecifiedItem_2: typeof StepAP203_Array1OfSpecifiedItem_2;
  StepAP203_Array1OfSpecifiedItem_3: typeof StepAP203_Array1OfSpecifiedItem_3;
  StepAP203_Array1OfSpecifiedItem_4: typeof StepAP203_Array1OfSpecifiedItem_4;
  StepAP203_Array1OfSpecifiedItem_5: typeof StepAP203_Array1OfSpecifiedItem_5;
  StepAP203_Array1OfStartRequestItem_1: typeof StepAP203_Array1OfStartRequestItem_1;
  StepAP203_Array1OfStartRequestItem_2: typeof StepAP203_Array1OfStartRequestItem_2;
  StepAP203_Array1OfStartRequestItem_3: typeof StepAP203_Array1OfStartRequestItem_3;
  StepAP203_Array1OfStartRequestItem_4: typeof StepAP203_Array1OfStartRequestItem_4;
  StepAP203_Array1OfStartRequestItem_5: typeof StepAP203_Array1OfStartRequestItem_5;
  StepAP203_Array1OfWorkItem_1: typeof StepAP203_Array1OfWorkItem_1;
  StepAP203_Array1OfWorkItem_2: typeof StepAP203_Array1OfWorkItem_2;
  StepAP203_Array1OfWorkItem_3: typeof StepAP203_Array1OfWorkItem_3;
  StepAP203_Array1OfWorkItem_4: typeof StepAP203_Array1OfWorkItem_4;
  StepAP203_Array1OfWorkItem_5: typeof StepAP203_Array1OfWorkItem_5;
  Handle_StepAP203_HArray1OfApprovedItem_1: typeof Handle_StepAP203_HArray1OfApprovedItem_1;
  Handle_StepAP203_HArray1OfApprovedItem_2: typeof Handle_StepAP203_HArray1OfApprovedItem_2;
  Handle_StepAP203_HArray1OfApprovedItem_3: typeof Handle_StepAP203_HArray1OfApprovedItem_3;
  Handle_StepAP203_HArray1OfApprovedItem_4: typeof Handle_StepAP203_HArray1OfApprovedItem_4;
  Handle_StepAP203_CcDesignApproval_1: typeof Handle_StepAP203_CcDesignApproval_1;
  Handle_StepAP203_CcDesignApproval_2: typeof Handle_StepAP203_CcDesignApproval_2;
  Handle_StepAP203_CcDesignApproval_3: typeof Handle_StepAP203_CcDesignApproval_3;
  Handle_StepAP203_CcDesignApproval_4: typeof Handle_StepAP203_CcDesignApproval_4;
  Handle_StepAP203_HArray1OfCertifiedItem_1: typeof Handle_StepAP203_HArray1OfCertifiedItem_1;
  Handle_StepAP203_HArray1OfCertifiedItem_2: typeof Handle_StepAP203_HArray1OfCertifiedItem_2;
  Handle_StepAP203_HArray1OfCertifiedItem_3: typeof Handle_StepAP203_HArray1OfCertifiedItem_3;
  Handle_StepAP203_HArray1OfCertifiedItem_4: typeof Handle_StepAP203_HArray1OfCertifiedItem_4;
  Handle_StepAP203_CcDesignCertification_1: typeof Handle_StepAP203_CcDesignCertification_1;
  Handle_StepAP203_CcDesignCertification_2: typeof Handle_StepAP203_CcDesignCertification_2;
  Handle_StepAP203_CcDesignCertification_3: typeof Handle_StepAP203_CcDesignCertification_3;
  Handle_StepAP203_CcDesignCertification_4: typeof Handle_StepAP203_CcDesignCertification_4;
  Handle_StepAP203_HArray1OfContractedItem_1: typeof Handle_StepAP203_HArray1OfContractedItem_1;
  Handle_StepAP203_HArray1OfContractedItem_2: typeof Handle_StepAP203_HArray1OfContractedItem_2;
  Handle_StepAP203_HArray1OfContractedItem_3: typeof Handle_StepAP203_HArray1OfContractedItem_3;
  Handle_StepAP203_HArray1OfContractedItem_4: typeof Handle_StepAP203_HArray1OfContractedItem_4;
  Handle_StepAP203_CcDesignContract_1: typeof Handle_StepAP203_CcDesignContract_1;
  Handle_StepAP203_CcDesignContract_2: typeof Handle_StepAP203_CcDesignContract_2;
  Handle_StepAP203_CcDesignContract_3: typeof Handle_StepAP203_CcDesignContract_3;
  Handle_StepAP203_CcDesignContract_4: typeof Handle_StepAP203_CcDesignContract_4;
  Handle_StepAP203_HArray1OfDateTimeItem_1: typeof Handle_StepAP203_HArray1OfDateTimeItem_1;
  Handle_StepAP203_HArray1OfDateTimeItem_2: typeof Handle_StepAP203_HArray1OfDateTimeItem_2;
  Handle_StepAP203_HArray1OfDateTimeItem_3: typeof Handle_StepAP203_HArray1OfDateTimeItem_3;
  Handle_StepAP203_HArray1OfDateTimeItem_4: typeof Handle_StepAP203_HArray1OfDateTimeItem_4;
  Handle_StepAP203_CcDesignDateAndTimeAssignment_1: typeof Handle_StepAP203_CcDesignDateAndTimeAssignment_1;
  Handle_StepAP203_CcDesignDateAndTimeAssignment_2: typeof Handle_StepAP203_CcDesignDateAndTimeAssignment_2;
  Handle_StepAP203_CcDesignDateAndTimeAssignment_3: typeof Handle_StepAP203_CcDesignDateAndTimeAssignment_3;
  Handle_StepAP203_CcDesignDateAndTimeAssignment_4: typeof Handle_StepAP203_CcDesignDateAndTimeAssignment_4;
  Handle_StepAP203_HArray1OfPersonOrganizationItem_1: typeof Handle_StepAP203_HArray1OfPersonOrganizationItem_1;
  Handle_StepAP203_HArray1OfPersonOrganizationItem_2: typeof Handle_StepAP203_HArray1OfPersonOrganizationItem_2;
  Handle_StepAP203_HArray1OfPersonOrganizationItem_3: typeof Handle_StepAP203_HArray1OfPersonOrganizationItem_3;
  Handle_StepAP203_HArray1OfPersonOrganizationItem_4: typeof Handle_StepAP203_HArray1OfPersonOrganizationItem_4;
  Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_1: typeof Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_1;
  Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_2: typeof Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_2;
  Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_3: typeof Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_3;
  Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_4: typeof Handle_StepAP203_CcDesignPersonAndOrganizationAssignment_4;
  Handle_StepAP203_HArray1OfClassifiedItem_1: typeof Handle_StepAP203_HArray1OfClassifiedItem_1;
  Handle_StepAP203_HArray1OfClassifiedItem_2: typeof Handle_StepAP203_HArray1OfClassifiedItem_2;
  Handle_StepAP203_HArray1OfClassifiedItem_3: typeof Handle_StepAP203_HArray1OfClassifiedItem_3;
  Handle_StepAP203_HArray1OfClassifiedItem_4: typeof Handle_StepAP203_HArray1OfClassifiedItem_4;
  Handle_StepAP203_CcDesignSecurityClassification_1: typeof Handle_StepAP203_CcDesignSecurityClassification_1;
  Handle_StepAP203_CcDesignSecurityClassification_2: typeof Handle_StepAP203_CcDesignSecurityClassification_2;
  Handle_StepAP203_CcDesignSecurityClassification_3: typeof Handle_StepAP203_CcDesignSecurityClassification_3;
  Handle_StepAP203_CcDesignSecurityClassification_4: typeof Handle_StepAP203_CcDesignSecurityClassification_4;
  Handle_StepAP203_HArray1OfSpecifiedItem_1: typeof Handle_StepAP203_HArray1OfSpecifiedItem_1;
  Handle_StepAP203_HArray1OfSpecifiedItem_2: typeof Handle_StepAP203_HArray1OfSpecifiedItem_2;
  Handle_StepAP203_HArray1OfSpecifiedItem_3: typeof Handle_StepAP203_HArray1OfSpecifiedItem_3;
  Handle_StepAP203_HArray1OfSpecifiedItem_4: typeof Handle_StepAP203_HArray1OfSpecifiedItem_4;
  Handle_StepAP203_CcDesignSpecificationReference_1: typeof Handle_StepAP203_CcDesignSpecificationReference_1;
  Handle_StepAP203_CcDesignSpecificationReference_2: typeof Handle_StepAP203_CcDesignSpecificationReference_2;
  Handle_StepAP203_CcDesignSpecificationReference_3: typeof Handle_StepAP203_CcDesignSpecificationReference_3;
  Handle_StepAP203_CcDesignSpecificationReference_4: typeof Handle_StepAP203_CcDesignSpecificationReference_4;
  Handle_StepAP203_HArray1OfWorkItem_1: typeof Handle_StepAP203_HArray1OfWorkItem_1;
  Handle_StepAP203_HArray1OfWorkItem_2: typeof Handle_StepAP203_HArray1OfWorkItem_2;
  Handle_StepAP203_HArray1OfWorkItem_3: typeof Handle_StepAP203_HArray1OfWorkItem_3;
  Handle_StepAP203_HArray1OfWorkItem_4: typeof Handle_StepAP203_HArray1OfWorkItem_4;
  Handle_StepAP203_Change_1: typeof Handle_StepAP203_Change_1;
  Handle_StepAP203_Change_2: typeof Handle_StepAP203_Change_2;
  Handle_StepAP203_Change_3: typeof Handle_StepAP203_Change_3;
  Handle_StepAP203_Change_4: typeof Handle_StepAP203_Change_4;
  Handle_StepAP203_HArray1OfChangeRequestItem_1: typeof Handle_StepAP203_HArray1OfChangeRequestItem_1;
  Handle_StepAP203_HArray1OfChangeRequestItem_2: typeof Handle_StepAP203_HArray1OfChangeRequestItem_2;
  Handle_StepAP203_HArray1OfChangeRequestItem_3: typeof Handle_StepAP203_HArray1OfChangeRequestItem_3;
  Handle_StepAP203_HArray1OfChangeRequestItem_4: typeof Handle_StepAP203_HArray1OfChangeRequestItem_4;
  Handle_StepAP203_ChangeRequest_1: typeof Handle_StepAP203_ChangeRequest_1;
  Handle_StepAP203_ChangeRequest_2: typeof Handle_StepAP203_ChangeRequest_2;
  Handle_StepAP203_ChangeRequest_3: typeof Handle_StepAP203_ChangeRequest_3;
  Handle_StepAP203_ChangeRequest_4: typeof Handle_StepAP203_ChangeRequest_4;
  Handle_StepAP203_HArray1OfStartRequestItem_1: typeof Handle_StepAP203_HArray1OfStartRequestItem_1;
  Handle_StepAP203_HArray1OfStartRequestItem_2: typeof Handle_StepAP203_HArray1OfStartRequestItem_2;
  Handle_StepAP203_HArray1OfStartRequestItem_3: typeof Handle_StepAP203_HArray1OfStartRequestItem_3;
  Handle_StepAP203_HArray1OfStartRequestItem_4: typeof Handle_StepAP203_HArray1OfStartRequestItem_4;
  Handle_StepAP203_StartRequest_1: typeof Handle_StepAP203_StartRequest_1;
  Handle_StepAP203_StartRequest_2: typeof Handle_StepAP203_StartRequest_2;
  Handle_StepAP203_StartRequest_3: typeof Handle_StepAP203_StartRequest_3;
  Handle_StepAP203_StartRequest_4: typeof Handle_StepAP203_StartRequest_4;
  Handle_StepAP203_StartWork_1: typeof Handle_StepAP203_StartWork_1;
  Handle_StepAP203_StartWork_2: typeof Handle_StepAP203_StartWork_2;
  Handle_StepAP203_StartWork_3: typeof Handle_StepAP203_StartWork_3;
  Handle_StepAP203_StartWork_4: typeof Handle_StepAP203_StartWork_4;
  StepAP214_Array1OfApprovalItem_1: typeof StepAP214_Array1OfApprovalItem_1;
  StepAP214_Array1OfApprovalItem_2: typeof StepAP214_Array1OfApprovalItem_2;
  StepAP214_Array1OfApprovalItem_3: typeof StepAP214_Array1OfApprovalItem_3;
  StepAP214_Array1OfApprovalItem_4: typeof StepAP214_Array1OfApprovalItem_4;
  StepAP214_Array1OfApprovalItem_5: typeof StepAP214_Array1OfApprovalItem_5;
  Handle_StepAP214_HArray1OfApprovalItem_1: typeof Handle_StepAP214_HArray1OfApprovalItem_1;
  Handle_StepAP214_HArray1OfApprovalItem_2: typeof Handle_StepAP214_HArray1OfApprovalItem_2;
  Handle_StepAP214_HArray1OfApprovalItem_3: typeof Handle_StepAP214_HArray1OfApprovalItem_3;
  Handle_StepAP214_HArray1OfApprovalItem_4: typeof Handle_StepAP214_HArray1OfApprovalItem_4;
  Handle_StepAP214_AppliedApprovalAssignment_1: typeof Handle_StepAP214_AppliedApprovalAssignment_1;
  Handle_StepAP214_AppliedApprovalAssignment_2: typeof Handle_StepAP214_AppliedApprovalAssignment_2;
  Handle_StepAP214_AppliedApprovalAssignment_3: typeof Handle_StepAP214_AppliedApprovalAssignment_3;
  Handle_StepAP214_AppliedApprovalAssignment_4: typeof Handle_StepAP214_AppliedApprovalAssignment_4;
  StepAP214_Array1OfDateAndTimeItem_1: typeof StepAP214_Array1OfDateAndTimeItem_1;
  StepAP214_Array1OfDateAndTimeItem_2: typeof StepAP214_Array1OfDateAndTimeItem_2;
  StepAP214_Array1OfDateAndTimeItem_3: typeof StepAP214_Array1OfDateAndTimeItem_3;
  StepAP214_Array1OfDateAndTimeItem_4: typeof StepAP214_Array1OfDateAndTimeItem_4;
  StepAP214_Array1OfDateAndTimeItem_5: typeof StepAP214_Array1OfDateAndTimeItem_5;
  Handle_StepAP214_HArray1OfDateAndTimeItem_1: typeof Handle_StepAP214_HArray1OfDateAndTimeItem_1;
  Handle_StepAP214_HArray1OfDateAndTimeItem_2: typeof Handle_StepAP214_HArray1OfDateAndTimeItem_2;
  Handle_StepAP214_HArray1OfDateAndTimeItem_3: typeof Handle_StepAP214_HArray1OfDateAndTimeItem_3;
  Handle_StepAP214_HArray1OfDateAndTimeItem_4: typeof Handle_StepAP214_HArray1OfDateAndTimeItem_4;
  Handle_StepAP214_AppliedDateAndTimeAssignment_1: typeof Handle_StepAP214_AppliedDateAndTimeAssignment_1;
  Handle_StepAP214_AppliedDateAndTimeAssignment_2: typeof Handle_StepAP214_AppliedDateAndTimeAssignment_2;
  Handle_StepAP214_AppliedDateAndTimeAssignment_3: typeof Handle_StepAP214_AppliedDateAndTimeAssignment_3;
  Handle_StepAP214_AppliedDateAndTimeAssignment_4: typeof Handle_StepAP214_AppliedDateAndTimeAssignment_4;
  StepAP214_Array1OfDateItem_1: typeof StepAP214_Array1OfDateItem_1;
  StepAP214_Array1OfDateItem_2: typeof StepAP214_Array1OfDateItem_2;
  StepAP214_Array1OfDateItem_3: typeof StepAP214_Array1OfDateItem_3;
  StepAP214_Array1OfDateItem_4: typeof StepAP214_Array1OfDateItem_4;
  StepAP214_Array1OfDateItem_5: typeof StepAP214_Array1OfDateItem_5;
  Handle_StepAP214_HArray1OfDateItem_1: typeof Handle_StepAP214_HArray1OfDateItem_1;
  Handle_StepAP214_HArray1OfDateItem_2: typeof Handle_StepAP214_HArray1OfDateItem_2;
  Handle_StepAP214_HArray1OfDateItem_3: typeof Handle_StepAP214_HArray1OfDateItem_3;
  Handle_StepAP214_HArray1OfDateItem_4: typeof Handle_StepAP214_HArray1OfDateItem_4;
  Handle_StepAP214_AppliedDateAssignment_1: typeof Handle_StepAP214_AppliedDateAssignment_1;
  Handle_StepAP214_AppliedDateAssignment_2: typeof Handle_StepAP214_AppliedDateAssignment_2;
  Handle_StepAP214_AppliedDateAssignment_3: typeof Handle_StepAP214_AppliedDateAssignment_3;
  Handle_StepAP214_AppliedDateAssignment_4: typeof Handle_StepAP214_AppliedDateAssignment_4;
  StepAP214_Array1OfDocumentReferenceItem_1: typeof StepAP214_Array1OfDocumentReferenceItem_1;
  StepAP214_Array1OfDocumentReferenceItem_2: typeof StepAP214_Array1OfDocumentReferenceItem_2;
  StepAP214_Array1OfDocumentReferenceItem_3: typeof StepAP214_Array1OfDocumentReferenceItem_3;
  StepAP214_Array1OfDocumentReferenceItem_4: typeof StepAP214_Array1OfDocumentReferenceItem_4;
  StepAP214_Array1OfDocumentReferenceItem_5: typeof StepAP214_Array1OfDocumentReferenceItem_5;
  Handle_StepAP214_HArray1OfDocumentReferenceItem_1: typeof Handle_StepAP214_HArray1OfDocumentReferenceItem_1;
  Handle_StepAP214_HArray1OfDocumentReferenceItem_2: typeof Handle_StepAP214_HArray1OfDocumentReferenceItem_2;
  Handle_StepAP214_HArray1OfDocumentReferenceItem_3: typeof Handle_StepAP214_HArray1OfDocumentReferenceItem_3;
  Handle_StepAP214_HArray1OfDocumentReferenceItem_4: typeof Handle_StepAP214_HArray1OfDocumentReferenceItem_4;
  Handle_StepAP214_AppliedDocumentReference_1: typeof Handle_StepAP214_AppliedDocumentReference_1;
  Handle_StepAP214_AppliedDocumentReference_2: typeof Handle_StepAP214_AppliedDocumentReference_2;
  Handle_StepAP214_AppliedDocumentReference_3: typeof Handle_StepAP214_AppliedDocumentReference_3;
  Handle_StepAP214_AppliedDocumentReference_4: typeof Handle_StepAP214_AppliedDocumentReference_4;
  StepAP214_Array1OfExternalIdentificationItem_1: typeof StepAP214_Array1OfExternalIdentificationItem_1;
  StepAP214_Array1OfExternalIdentificationItem_2: typeof StepAP214_Array1OfExternalIdentificationItem_2;
  StepAP214_Array1OfExternalIdentificationItem_3: typeof StepAP214_Array1OfExternalIdentificationItem_3;
  StepAP214_Array1OfExternalIdentificationItem_4: typeof StepAP214_Array1OfExternalIdentificationItem_4;
  StepAP214_Array1OfExternalIdentificationItem_5: typeof StepAP214_Array1OfExternalIdentificationItem_5;
  Handle_StepAP214_HArray1OfExternalIdentificationItem_1: typeof Handle_StepAP214_HArray1OfExternalIdentificationItem_1;
  Handle_StepAP214_HArray1OfExternalIdentificationItem_2: typeof Handle_StepAP214_HArray1OfExternalIdentificationItem_2;
  Handle_StepAP214_HArray1OfExternalIdentificationItem_3: typeof Handle_StepAP214_HArray1OfExternalIdentificationItem_3;
  Handle_StepAP214_HArray1OfExternalIdentificationItem_4: typeof Handle_StepAP214_HArray1OfExternalIdentificationItem_4;
  Handle_StepAP214_AppliedExternalIdentificationAssignment_1: typeof Handle_StepAP214_AppliedExternalIdentificationAssignment_1;
  Handle_StepAP214_AppliedExternalIdentificationAssignment_2: typeof Handle_StepAP214_AppliedExternalIdentificationAssignment_2;
  Handle_StepAP214_AppliedExternalIdentificationAssignment_3: typeof Handle_StepAP214_AppliedExternalIdentificationAssignment_3;
  Handle_StepAP214_AppliedExternalIdentificationAssignment_4: typeof Handle_StepAP214_AppliedExternalIdentificationAssignment_4;
  StepAP214_Array1OfGroupItem_1: typeof StepAP214_Array1OfGroupItem_1;
  StepAP214_Array1OfGroupItem_2: typeof StepAP214_Array1OfGroupItem_2;
  StepAP214_Array1OfGroupItem_3: typeof StepAP214_Array1OfGroupItem_3;
  StepAP214_Array1OfGroupItem_4: typeof StepAP214_Array1OfGroupItem_4;
  StepAP214_Array1OfGroupItem_5: typeof StepAP214_Array1OfGroupItem_5;
  Handle_StepAP214_HArray1OfGroupItem_1: typeof Handle_StepAP214_HArray1OfGroupItem_1;
  Handle_StepAP214_HArray1OfGroupItem_2: typeof Handle_StepAP214_HArray1OfGroupItem_2;
  Handle_StepAP214_HArray1OfGroupItem_3: typeof Handle_StepAP214_HArray1OfGroupItem_3;
  Handle_StepAP214_HArray1OfGroupItem_4: typeof Handle_StepAP214_HArray1OfGroupItem_4;
  Handle_StepAP214_AppliedGroupAssignment_1: typeof Handle_StepAP214_AppliedGroupAssignment_1;
  Handle_StepAP214_AppliedGroupAssignment_2: typeof Handle_StepAP214_AppliedGroupAssignment_2;
  Handle_StepAP214_AppliedGroupAssignment_3: typeof Handle_StepAP214_AppliedGroupAssignment_3;
  Handle_StepAP214_AppliedGroupAssignment_4: typeof Handle_StepAP214_AppliedGroupAssignment_4;
  StepAP214_Array1OfOrganizationItem_1: typeof StepAP214_Array1OfOrganizationItem_1;
  StepAP214_Array1OfOrganizationItem_2: typeof StepAP214_Array1OfOrganizationItem_2;
  StepAP214_Array1OfOrganizationItem_3: typeof StepAP214_Array1OfOrganizationItem_3;
  StepAP214_Array1OfOrganizationItem_4: typeof StepAP214_Array1OfOrganizationItem_4;
  StepAP214_Array1OfOrganizationItem_5: typeof StepAP214_Array1OfOrganizationItem_5;
  Handle_StepAP214_HArray1OfOrganizationItem_1: typeof Handle_StepAP214_HArray1OfOrganizationItem_1;
  Handle_StepAP214_HArray1OfOrganizationItem_2: typeof Handle_StepAP214_HArray1OfOrganizationItem_2;
  Handle_StepAP214_HArray1OfOrganizationItem_3: typeof Handle_StepAP214_HArray1OfOrganizationItem_3;
  Handle_StepAP214_HArray1OfOrganizationItem_4: typeof Handle_StepAP214_HArray1OfOrganizationItem_4;
  Handle_StepAP214_AppliedOrganizationAssignment_1: typeof Handle_StepAP214_AppliedOrganizationAssignment_1;
  Handle_StepAP214_AppliedOrganizationAssignment_2: typeof Handle_StepAP214_AppliedOrganizationAssignment_2;
  Handle_StepAP214_AppliedOrganizationAssignment_3: typeof Handle_StepAP214_AppliedOrganizationAssignment_3;
  Handle_StepAP214_AppliedOrganizationAssignment_4: typeof Handle_StepAP214_AppliedOrganizationAssignment_4;
  StepAP214_Array1OfPersonAndOrganizationItem_1: typeof StepAP214_Array1OfPersonAndOrganizationItem_1;
  StepAP214_Array1OfPersonAndOrganizationItem_2: typeof StepAP214_Array1OfPersonAndOrganizationItem_2;
  StepAP214_Array1OfPersonAndOrganizationItem_3: typeof StepAP214_Array1OfPersonAndOrganizationItem_3;
  StepAP214_Array1OfPersonAndOrganizationItem_4: typeof StepAP214_Array1OfPersonAndOrganizationItem_4;
  StepAP214_Array1OfPersonAndOrganizationItem_5: typeof StepAP214_Array1OfPersonAndOrganizationItem_5;
  Handle_StepAP214_HArray1OfPersonAndOrganizationItem_1: typeof Handle_StepAP214_HArray1OfPersonAndOrganizationItem_1;
  Handle_StepAP214_HArray1OfPersonAndOrganizationItem_2: typeof Handle_StepAP214_HArray1OfPersonAndOrganizationItem_2;
  Handle_StepAP214_HArray1OfPersonAndOrganizationItem_3: typeof Handle_StepAP214_HArray1OfPersonAndOrganizationItem_3;
  Handle_StepAP214_HArray1OfPersonAndOrganizationItem_4: typeof Handle_StepAP214_HArray1OfPersonAndOrganizationItem_4;
  Handle_StepAP214_AppliedPersonAndOrganizationAssignment_1: typeof Handle_StepAP214_AppliedPersonAndOrganizationAssignment_1;
  Handle_StepAP214_AppliedPersonAndOrganizationAssignment_2: typeof Handle_StepAP214_AppliedPersonAndOrganizationAssignment_2;
  Handle_StepAP214_AppliedPersonAndOrganizationAssignment_3: typeof Handle_StepAP214_AppliedPersonAndOrganizationAssignment_3;
  Handle_StepAP214_AppliedPersonAndOrganizationAssignment_4: typeof Handle_StepAP214_AppliedPersonAndOrganizationAssignment_4;
  StepAP214_Array1OfPresentedItemSelect_1: typeof StepAP214_Array1OfPresentedItemSelect_1;
  StepAP214_Array1OfPresentedItemSelect_2: typeof StepAP214_Array1OfPresentedItemSelect_2;
  StepAP214_Array1OfPresentedItemSelect_3: typeof StepAP214_Array1OfPresentedItemSelect_3;
  StepAP214_Array1OfPresentedItemSelect_4: typeof StepAP214_Array1OfPresentedItemSelect_4;
  StepAP214_Array1OfPresentedItemSelect_5: typeof StepAP214_Array1OfPresentedItemSelect_5;
  Handle_StepAP214_HArray1OfPresentedItemSelect_1: typeof Handle_StepAP214_HArray1OfPresentedItemSelect_1;
  Handle_StepAP214_HArray1OfPresentedItemSelect_2: typeof Handle_StepAP214_HArray1OfPresentedItemSelect_2;
  Handle_StepAP214_HArray1OfPresentedItemSelect_3: typeof Handle_StepAP214_HArray1OfPresentedItemSelect_3;
  Handle_StepAP214_HArray1OfPresentedItemSelect_4: typeof Handle_StepAP214_HArray1OfPresentedItemSelect_4;
  Handle_StepAP214_AppliedPresentedItem_1: typeof Handle_StepAP214_AppliedPresentedItem_1;
  Handle_StepAP214_AppliedPresentedItem_2: typeof Handle_StepAP214_AppliedPresentedItem_2;
  Handle_StepAP214_AppliedPresentedItem_3: typeof Handle_StepAP214_AppliedPresentedItem_3;
  Handle_StepAP214_AppliedPresentedItem_4: typeof Handle_StepAP214_AppliedPresentedItem_4;
  StepAP214_Array1OfSecurityClassificationItem_1: typeof StepAP214_Array1OfSecurityClassificationItem_1;
  StepAP214_Array1OfSecurityClassificationItem_2: typeof StepAP214_Array1OfSecurityClassificationItem_2;
  StepAP214_Array1OfSecurityClassificationItem_3: typeof StepAP214_Array1OfSecurityClassificationItem_3;
  StepAP214_Array1OfSecurityClassificationItem_4: typeof StepAP214_Array1OfSecurityClassificationItem_4;
  StepAP214_Array1OfSecurityClassificationItem_5: typeof StepAP214_Array1OfSecurityClassificationItem_5;
  Handle_StepAP214_HArray1OfSecurityClassificationItem_1: typeof Handle_StepAP214_HArray1OfSecurityClassificationItem_1;
  Handle_StepAP214_HArray1OfSecurityClassificationItem_2: typeof Handle_StepAP214_HArray1OfSecurityClassificationItem_2;
  Handle_StepAP214_HArray1OfSecurityClassificationItem_3: typeof Handle_StepAP214_HArray1OfSecurityClassificationItem_3;
  Handle_StepAP214_HArray1OfSecurityClassificationItem_4: typeof Handle_StepAP214_HArray1OfSecurityClassificationItem_4;
  Handle_StepAP214_AppliedSecurityClassificationAssignment_1: typeof Handle_StepAP214_AppliedSecurityClassificationAssignment_1;
  Handle_StepAP214_AppliedSecurityClassificationAssignment_2: typeof Handle_StepAP214_AppliedSecurityClassificationAssignment_2;
  Handle_StepAP214_AppliedSecurityClassificationAssignment_3: typeof Handle_StepAP214_AppliedSecurityClassificationAssignment_3;
  Handle_StepAP214_AppliedSecurityClassificationAssignment_4: typeof Handle_StepAP214_AppliedSecurityClassificationAssignment_4;
  StepAP214_Array1OfAutoDesignDateAndPersonItem_1: typeof StepAP214_Array1OfAutoDesignDateAndPersonItem_1;
  StepAP214_Array1OfAutoDesignDateAndPersonItem_2: typeof StepAP214_Array1OfAutoDesignDateAndPersonItem_2;
  StepAP214_Array1OfAutoDesignDateAndPersonItem_3: typeof StepAP214_Array1OfAutoDesignDateAndPersonItem_3;
  StepAP214_Array1OfAutoDesignDateAndPersonItem_4: typeof StepAP214_Array1OfAutoDesignDateAndPersonItem_4;
  StepAP214_Array1OfAutoDesignDateAndPersonItem_5: typeof StepAP214_Array1OfAutoDesignDateAndPersonItem_5;
  StepAP214_Array1OfAutoDesignDateAndTimeItem_1: typeof StepAP214_Array1OfAutoDesignDateAndTimeItem_1;
  StepAP214_Array1OfAutoDesignDateAndTimeItem_2: typeof StepAP214_Array1OfAutoDesignDateAndTimeItem_2;
  StepAP214_Array1OfAutoDesignDateAndTimeItem_3: typeof StepAP214_Array1OfAutoDesignDateAndTimeItem_3;
  StepAP214_Array1OfAutoDesignDateAndTimeItem_4: typeof StepAP214_Array1OfAutoDesignDateAndTimeItem_4;
  StepAP214_Array1OfAutoDesignDateAndTimeItem_5: typeof StepAP214_Array1OfAutoDesignDateAndTimeItem_5;
  StepAP214_Array1OfAutoDesignDatedItem_1: typeof StepAP214_Array1OfAutoDesignDatedItem_1;
  StepAP214_Array1OfAutoDesignDatedItem_2: typeof StepAP214_Array1OfAutoDesignDatedItem_2;
  StepAP214_Array1OfAutoDesignDatedItem_3: typeof StepAP214_Array1OfAutoDesignDatedItem_3;
  StepAP214_Array1OfAutoDesignDatedItem_4: typeof StepAP214_Array1OfAutoDesignDatedItem_4;
  StepAP214_Array1OfAutoDesignDatedItem_5: typeof StepAP214_Array1OfAutoDesignDatedItem_5;
  StepAP214_Array1OfAutoDesignGeneralOrgItem_1: typeof StepAP214_Array1OfAutoDesignGeneralOrgItem_1;
  StepAP214_Array1OfAutoDesignGeneralOrgItem_2: typeof StepAP214_Array1OfAutoDesignGeneralOrgItem_2;
  StepAP214_Array1OfAutoDesignGeneralOrgItem_3: typeof StepAP214_Array1OfAutoDesignGeneralOrgItem_3;
  StepAP214_Array1OfAutoDesignGeneralOrgItem_4: typeof StepAP214_Array1OfAutoDesignGeneralOrgItem_4;
  StepAP214_Array1OfAutoDesignGeneralOrgItem_5: typeof StepAP214_Array1OfAutoDesignGeneralOrgItem_5;
  StepAP214_Array1OfAutoDesignGroupedItem_1: typeof StepAP214_Array1OfAutoDesignGroupedItem_1;
  StepAP214_Array1OfAutoDesignGroupedItem_2: typeof StepAP214_Array1OfAutoDesignGroupedItem_2;
  StepAP214_Array1OfAutoDesignGroupedItem_3: typeof StepAP214_Array1OfAutoDesignGroupedItem_3;
  StepAP214_Array1OfAutoDesignGroupedItem_4: typeof StepAP214_Array1OfAutoDesignGroupedItem_4;
  StepAP214_Array1OfAutoDesignGroupedItem_5: typeof StepAP214_Array1OfAutoDesignGroupedItem_5;
  StepAP214_Array1OfAutoDesignPresentedItemSelect_1: typeof StepAP214_Array1OfAutoDesignPresentedItemSelect_1;
  StepAP214_Array1OfAutoDesignPresentedItemSelect_2: typeof StepAP214_Array1OfAutoDesignPresentedItemSelect_2;
  StepAP214_Array1OfAutoDesignPresentedItemSelect_3: typeof StepAP214_Array1OfAutoDesignPresentedItemSelect_3;
  StepAP214_Array1OfAutoDesignPresentedItemSelect_4: typeof StepAP214_Array1OfAutoDesignPresentedItemSelect_4;
  StepAP214_Array1OfAutoDesignPresentedItemSelect_5: typeof StepAP214_Array1OfAutoDesignPresentedItemSelect_5;
  StepAP214_Array1OfAutoDesignReferencingItem_1: typeof StepAP214_Array1OfAutoDesignReferencingItem_1;
  StepAP214_Array1OfAutoDesignReferencingItem_2: typeof StepAP214_Array1OfAutoDesignReferencingItem_2;
  StepAP214_Array1OfAutoDesignReferencingItem_3: typeof StepAP214_Array1OfAutoDesignReferencingItem_3;
  StepAP214_Array1OfAutoDesignReferencingItem_4: typeof StepAP214_Array1OfAutoDesignReferencingItem_4;
  StepAP214_Array1OfAutoDesignReferencingItem_5: typeof StepAP214_Array1OfAutoDesignReferencingItem_5;
  Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_1: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_1;
  Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_2: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_2;
  Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_3: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_3;
  Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_4: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndTimeItem_4;
  Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_1: typeof Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_1;
  Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_2: typeof Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_2;
  Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_3: typeof Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_3;
  Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_4: typeof Handle_StepAP214_AutoDesignActualDateAndTimeAssignment_4;
  Handle_StepAP214_HArray1OfAutoDesignDatedItem_1: typeof Handle_StepAP214_HArray1OfAutoDesignDatedItem_1;
  Handle_StepAP214_HArray1OfAutoDesignDatedItem_2: typeof Handle_StepAP214_HArray1OfAutoDesignDatedItem_2;
  Handle_StepAP214_HArray1OfAutoDesignDatedItem_3: typeof Handle_StepAP214_HArray1OfAutoDesignDatedItem_3;
  Handle_StepAP214_HArray1OfAutoDesignDatedItem_4: typeof Handle_StepAP214_HArray1OfAutoDesignDatedItem_4;
  Handle_StepAP214_AutoDesignActualDateAssignment_1: typeof Handle_StepAP214_AutoDesignActualDateAssignment_1;
  Handle_StepAP214_AutoDesignActualDateAssignment_2: typeof Handle_StepAP214_AutoDesignActualDateAssignment_2;
  Handle_StepAP214_AutoDesignActualDateAssignment_3: typeof Handle_StepAP214_AutoDesignActualDateAssignment_3;
  Handle_StepAP214_AutoDesignActualDateAssignment_4: typeof Handle_StepAP214_AutoDesignActualDateAssignment_4;
  Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_1: typeof Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_1;
  Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_2: typeof Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_2;
  Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_3: typeof Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_3;
  Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_4: typeof Handle_StepAP214_HArray1OfAutoDesignGeneralOrgItem_4;
  Handle_StepAP214_AutoDesignApprovalAssignment_1: typeof Handle_StepAP214_AutoDesignApprovalAssignment_1;
  Handle_StepAP214_AutoDesignApprovalAssignment_2: typeof Handle_StepAP214_AutoDesignApprovalAssignment_2;
  Handle_StepAP214_AutoDesignApprovalAssignment_3: typeof Handle_StepAP214_AutoDesignApprovalAssignment_3;
  Handle_StepAP214_AutoDesignApprovalAssignment_4: typeof Handle_StepAP214_AutoDesignApprovalAssignment_4;
  Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_1: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_1;
  Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_2: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_2;
  Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_3: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_3;
  Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_4: typeof Handle_StepAP214_HArray1OfAutoDesignDateAndPersonItem_4;
  Handle_StepAP214_AutoDesignDateAndPersonAssignment_1: typeof Handle_StepAP214_AutoDesignDateAndPersonAssignment_1;
  Handle_StepAP214_AutoDesignDateAndPersonAssignment_2: typeof Handle_StepAP214_AutoDesignDateAndPersonAssignment_2;
  Handle_StepAP214_AutoDesignDateAndPersonAssignment_3: typeof Handle_StepAP214_AutoDesignDateAndPersonAssignment_3;
  Handle_StepAP214_AutoDesignDateAndPersonAssignment_4: typeof Handle_StepAP214_AutoDesignDateAndPersonAssignment_4;
  Handle_StepAP214_HArray1OfAutoDesignReferencingItem_1: typeof Handle_StepAP214_HArray1OfAutoDesignReferencingItem_1;
  Handle_StepAP214_HArray1OfAutoDesignReferencingItem_2: typeof Handle_StepAP214_HArray1OfAutoDesignReferencingItem_2;
  Handle_StepAP214_HArray1OfAutoDesignReferencingItem_3: typeof Handle_StepAP214_HArray1OfAutoDesignReferencingItem_3;
  Handle_StepAP214_HArray1OfAutoDesignReferencingItem_4: typeof Handle_StepAP214_HArray1OfAutoDesignReferencingItem_4;
  Handle_StepAP214_AutoDesignDocumentReference_1: typeof Handle_StepAP214_AutoDesignDocumentReference_1;
  Handle_StepAP214_AutoDesignDocumentReference_2: typeof Handle_StepAP214_AutoDesignDocumentReference_2;
  Handle_StepAP214_AutoDesignDocumentReference_3: typeof Handle_StepAP214_AutoDesignDocumentReference_3;
  Handle_StepAP214_AutoDesignDocumentReference_4: typeof Handle_StepAP214_AutoDesignDocumentReference_4;
  Handle_StepAP214_HArray1OfAutoDesignGroupedItem_1: typeof Handle_StepAP214_HArray1OfAutoDesignGroupedItem_1;
  Handle_StepAP214_HArray1OfAutoDesignGroupedItem_2: typeof Handle_StepAP214_HArray1OfAutoDesignGroupedItem_2;
  Handle_StepAP214_HArray1OfAutoDesignGroupedItem_3: typeof Handle_StepAP214_HArray1OfAutoDesignGroupedItem_3;
  Handle_StepAP214_HArray1OfAutoDesignGroupedItem_4: typeof Handle_StepAP214_HArray1OfAutoDesignGroupedItem_4;
  Handle_StepAP214_AutoDesignGroupAssignment_1: typeof Handle_StepAP214_AutoDesignGroupAssignment_1;
  Handle_StepAP214_AutoDesignGroupAssignment_2: typeof Handle_StepAP214_AutoDesignGroupAssignment_2;
  Handle_StepAP214_AutoDesignGroupAssignment_3: typeof Handle_StepAP214_AutoDesignGroupAssignment_3;
  Handle_StepAP214_AutoDesignGroupAssignment_4: typeof Handle_StepAP214_AutoDesignGroupAssignment_4;
  Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_1: typeof Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_1;
  Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_2: typeof Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_2;
  Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_3: typeof Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_3;
  Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_4: typeof Handle_StepAP214_AutoDesignNominalDateAndTimeAssignment_4;
  Handle_StepAP214_AutoDesignNominalDateAssignment_1: typeof Handle_StepAP214_AutoDesignNominalDateAssignment_1;
  Handle_StepAP214_AutoDesignNominalDateAssignment_2: typeof Handle_StepAP214_AutoDesignNominalDateAssignment_2;
  Handle_StepAP214_AutoDesignNominalDateAssignment_3: typeof Handle_StepAP214_AutoDesignNominalDateAssignment_3;
  Handle_StepAP214_AutoDesignNominalDateAssignment_4: typeof Handle_StepAP214_AutoDesignNominalDateAssignment_4;
  Handle_StepAP214_AutoDesignOrganizationAssignment_1: typeof Handle_StepAP214_AutoDesignOrganizationAssignment_1;
  Handle_StepAP214_AutoDesignOrganizationAssignment_2: typeof Handle_StepAP214_AutoDesignOrganizationAssignment_2;
  Handle_StepAP214_AutoDesignOrganizationAssignment_3: typeof Handle_StepAP214_AutoDesignOrganizationAssignment_3;
  Handle_StepAP214_AutoDesignOrganizationAssignment_4: typeof Handle_StepAP214_AutoDesignOrganizationAssignment_4;
  Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_1: typeof Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_1;
  Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_2: typeof Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_2;
  Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_3: typeof Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_3;
  Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_4: typeof Handle_StepAP214_AutoDesignPersonAndOrganizationAssignment_4;
  Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_1: typeof Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_1;
  Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_2: typeof Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_2;
  Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_3: typeof Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_3;
  Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_4: typeof Handle_StepAP214_HArray1OfAutoDesignPresentedItemSelect_4;
  Handle_StepAP214_AutoDesignPresentedItem_1: typeof Handle_StepAP214_AutoDesignPresentedItem_1;
  Handle_StepAP214_AutoDesignPresentedItem_2: typeof Handle_StepAP214_AutoDesignPresentedItem_2;
  Handle_StepAP214_AutoDesignPresentedItem_3: typeof Handle_StepAP214_AutoDesignPresentedItem_3;
  Handle_StepAP214_AutoDesignPresentedItem_4: typeof Handle_StepAP214_AutoDesignPresentedItem_4;
  Handle_StepAP214_AutoDesignSecurityClassificationAssignment_1: typeof Handle_StepAP214_AutoDesignSecurityClassificationAssignment_1;
  Handle_StepAP214_AutoDesignSecurityClassificationAssignment_2: typeof Handle_StepAP214_AutoDesignSecurityClassificationAssignment_2;
  Handle_StepAP214_AutoDesignSecurityClassificationAssignment_3: typeof Handle_StepAP214_AutoDesignSecurityClassificationAssignment_3;
  Handle_StepAP214_AutoDesignSecurityClassificationAssignment_4: typeof Handle_StepAP214_AutoDesignSecurityClassificationAssignment_4;
  Handle_StepAP214_Class_1: typeof Handle_StepAP214_Class_1;
  Handle_StepAP214_Class_2: typeof Handle_StepAP214_Class_2;
  Handle_StepAP214_Class_3: typeof Handle_StepAP214_Class_3;
  Handle_StepAP214_Class_4: typeof Handle_StepAP214_Class_4;
  Handle_StepAP214_ExternallyDefinedClass_1: typeof Handle_StepAP214_ExternallyDefinedClass_1;
  Handle_StepAP214_ExternallyDefinedClass_2: typeof Handle_StepAP214_ExternallyDefinedClass_2;
  Handle_StepAP214_ExternallyDefinedClass_3: typeof Handle_StepAP214_ExternallyDefinedClass_3;
  Handle_StepAP214_ExternallyDefinedClass_4: typeof Handle_StepAP214_ExternallyDefinedClass_4;
  Handle_StepAP214_ExternallyDefinedGeneralProperty_1: typeof Handle_StepAP214_ExternallyDefinedGeneralProperty_1;
  Handle_StepAP214_ExternallyDefinedGeneralProperty_2: typeof Handle_StepAP214_ExternallyDefinedGeneralProperty_2;
  Handle_StepAP214_ExternallyDefinedGeneralProperty_3: typeof Handle_StepAP214_ExternallyDefinedGeneralProperty_3;
  Handle_StepAP214_ExternallyDefinedGeneralProperty_4: typeof Handle_StepAP214_ExternallyDefinedGeneralProperty_4;
  Handle_StepAP214_Protocol_1: typeof Handle_StepAP214_Protocol_1;
  Handle_StepAP214_Protocol_2: typeof Handle_StepAP214_Protocol_2;
  Handle_StepAP214_Protocol_3: typeof Handle_StepAP214_Protocol_3;
  Handle_StepAP214_Protocol_4: typeof Handle_StepAP214_Protocol_4;
  Handle_StepAP214_RepItemGroup_1: typeof Handle_StepAP214_RepItemGroup_1;
  Handle_StepAP214_RepItemGroup_2: typeof Handle_StepAP214_RepItemGroup_2;
  Handle_StepAP214_RepItemGroup_3: typeof Handle_StepAP214_RepItemGroup_3;
  Handle_StepAP214_RepItemGroup_4: typeof Handle_StepAP214_RepItemGroup_4;
  Handle_StepAP242_DraughtingModelItemAssociation_1: typeof Handle_StepAP242_DraughtingModelItemAssociation_1;
  Handle_StepAP242_DraughtingModelItemAssociation_2: typeof Handle_StepAP242_DraughtingModelItemAssociation_2;
  Handle_StepAP242_DraughtingModelItemAssociation_3: typeof Handle_StepAP242_DraughtingModelItemAssociation_3;
  Handle_StepAP242_DraughtingModelItemAssociation_4: typeof Handle_StepAP242_DraughtingModelItemAssociation_4;
  Handle_StepAP242_IdAttribute_1: typeof Handle_StepAP242_IdAttribute_1;
  Handle_StepAP242_IdAttribute_2: typeof Handle_StepAP242_IdAttribute_2;
  Handle_StepAP242_IdAttribute_3: typeof Handle_StepAP242_IdAttribute_3;
  Handle_StepAP242_IdAttribute_4: typeof Handle_StepAP242_IdAttribute_4;
  StepToTopoDS_PointEdgeMap_1: typeof StepToTopoDS_PointEdgeMap_1;
  StepToTopoDS_PointEdgeMap_2: typeof StepToTopoDS_PointEdgeMap_2;
  StepToTopoDS_PointEdgeMap_3: typeof StepToTopoDS_PointEdgeMap_3;
  STEPControl_StepModelType: typeof STEPControl_StepModelType;
  StepToTopoDS_BuilderError: typeof StepToTopoDS_BuilderError;
  StepToTopoDS_TranslateShellError: typeof StepToTopoDS_TranslateShellError;
  StepToTopoDS_TranslateFaceError: typeof StepToTopoDS_TranslateFaceError;
  StepToTopoDS_TranslateEdgeError: typeof StepToTopoDS_TranslateEdgeError;
  StepToTopoDS_TranslateVertexError: typeof StepToTopoDS_TranslateVertexError;
  StepToTopoDS_TranslateVertexLoopError: typeof StepToTopoDS_TranslateVertexLoopError;
  StepToTopoDS_TranslatePolyLoopError: typeof StepToTopoDS_TranslatePolyLoopError;
  StepToTopoDS_GeometricToolError: typeof StepToTopoDS_GeometricToolError;
  StepToTopoDS_TranslateEdgeLoopError: typeof StepToTopoDS_TranslateEdgeLoopError;
  TopoDSToStep_BuilderError: typeof TopoDSToStep_BuilderError;
  TopoDSToStep_MakeFaceError: typeof TopoDSToStep_MakeFaceError;
  TopoDSToStep_MakeWireError: typeof TopoDSToStep_MakeWireError;
  TopoDSToStep_MakeEdgeError: typeof TopoDSToStep_MakeEdgeError;
  TopoDSToStep_MakeVertexError: typeof TopoDSToStep_MakeVertexError;
  TopoDSToStep_FacetedError: typeof TopoDSToStep_FacetedError;
};
