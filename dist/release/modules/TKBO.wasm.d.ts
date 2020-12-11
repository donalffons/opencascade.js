declare const libName = "./modules/TKBO.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BOPAlgo_AlertBOPNotAllowed extends Message_Alert {
  constructor();
  get_type_name(): Standard_Character;
  get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertBOPNotSet extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertBuilderFailed extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertIntersectionFailed extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertMultipleArguments extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertNoFiller extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertNullInputShapes extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertPostTreatFF extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertSolidBuilderFailed extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertTooFewArguments extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertBadPositioning extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertEmptyShape extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertNotSplittableEdge extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertRemovalOfIBForEdgesFailed extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertRemovalOfIBForFacesFailed extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertRemovalOfIBForMDimShapes extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertRemovalOfIBForSolidsFailed extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertSelfInterferingShape extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertShellSplitterFailed extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertTooSmallEdge extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertIntersectionOfPairOfShapesFailed extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertBuildingPCurveFailed extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertAcquiredSelfIntersection extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnsupportedType extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertNoFacesToRemove extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToRemoveTheFeature extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertRemoveFeaturesFailed extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertSolidBuilderUnusedFaces extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertFaceBuilderUnusedEdges extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToOrientTheShape extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnknownShape extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertNoPeriodicityRequired extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToTrim extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToMakeIdentical extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToRepeat extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertMultiDimensionalArguments extends Message_Alert {
  constructor();
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToMakePeriodic extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToGlue extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertShapeIsNotPeriodic extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_AlertUnableToMakeClosedEdgeOnFace extends TopoDS_AlertWithShape {
  constructor(theShape: TopoDS_Shape)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BOPAlgo_Options {
  Allocator(): any;
  Clear(): void;
  AddError(theAlert: any): void;
  AddWarning(theAlert: any): void;
  HasErrors(): Standard_Boolean;
  HasError(theType: any): Standard_Boolean;
  HasWarnings(): Standard_Boolean;
  HasWarning(theType: any): Standard_Boolean;
  GetReport(): any;
  DumpErrors(theOS: Standard_OStream): void;
  DumpWarnings(theOS: Standard_OStream): void;
  ClearWarnings(): void;
  GetParallelMode(): Standard_Boolean;
  SetParallelMode(theNewMode: Standard_Boolean): void;
  SetRunParallel(theFlag: Standard_Boolean): void;
  RunParallel(): Standard_Boolean;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  FuzzyValue(): Standard_Real;
  SetProgressIndicator(theProgress: Message_ProgressScope): void;
  SetUseOBB(theUseOBB: Standard_Boolean): void;
  UseOBB(): Standard_Boolean;
}

  export declare class BOPAlgo_Options_1 extends BOPAlgo_Options {
    constructor();
  }

  export declare class BOPAlgo_Options_2 extends BOPAlgo_Options {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_Algo extends BOPAlgo_Options {
  Perform(): void;
}

export declare class BOPAlgo_CheckResult {
  constructor()
  SetShape1(TheShape: TopoDS_Shape): void;
  AddFaultyShape1(TheShape: TopoDS_Shape): void;
  SetShape2(TheShape: TopoDS_Shape): void;
  AddFaultyShape2(TheShape: TopoDS_Shape): void;
  GetShape1(): TopoDS_Shape;
  GetShape2(): TopoDS_Shape;
  GetFaultyShapes1(): TopTools_ListOfShape;
  GetFaultyShapes2(): TopTools_ListOfShape;
  SetCheckStatus(TheStatus: BOPAlgo_CheckStatus): void;
  GetCheckStatus(): BOPAlgo_CheckStatus;
  SetMaxDistance1(theDist: Standard_Real): void;
  SetMaxDistance2(theDist: Standard_Real): void;
  SetMaxParameter1(thePar: Standard_Real): void;
  SetMaxParameter2(thePar: Standard_Real): void;
  GetMaxDistance1(): Standard_Real;
  GetMaxDistance2(): Standard_Real;
  GetMaxParameter1(): Standard_Real;
  GetMaxParameter2(): Standard_Real;
}

export declare class BOPAlgo_ArgumentAnalyzer extends BOPAlgo_Algo {
  constructor()
  SetShape1(TheShape: TopoDS_Shape): void;
  SetShape2(TheShape: TopoDS_Shape): void;
  GetShape1(): TopoDS_Shape;
  GetShape2(): TopoDS_Shape;
  OperationType(): BOPAlgo_Operation;
  StopOnFirstFaulty(): Standard_Boolean;
  ArgumentTypeMode(): Standard_Boolean;
  SelfInterMode(): Standard_Boolean;
  SmallEdgeMode(): Standard_Boolean;
  RebuildFaceMode(): Standard_Boolean;
  TangentMode(): Standard_Boolean;
  MergeVertexMode(): Standard_Boolean;
  MergeEdgeMode(): Standard_Boolean;
  ContinuityMode(): Standard_Boolean;
  CurveOnSurfaceMode(): Standard_Boolean;
  Perform(): void;
  HasFaulty(): Standard_Boolean;
  GetCheckResult(): BOPAlgo_ListOfCheckResult;
}

export declare class BOPAlgo_BuilderShape extends BOPAlgo_Algo {
  Shape(): TopoDS_Shape;
  Modified(theS: TopoDS_Shape): TopTools_ListOfShape;
  Generated(theS: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(theS: TopoDS_Shape): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasDeleted(): Standard_Boolean;
  History(): any;
  SetToFillHistory(theHistFlag: Standard_Boolean): void;
  HasHistory(): Standard_Boolean;
}

export declare class BOPAlgo_Builder extends BOPAlgo_BuilderShape {
  Clear(): void;
  PPaveFiller(): BOPAlgo_PPaveFiller;
  PDS(): BOPDS_PDS;
  Context(): any;
  AddArgument(theShape: TopoDS_Shape): void;
  SetArguments(theLS: TopTools_ListOfShape): void;
  Arguments(): TopTools_ListOfShape;
  SetNonDestructive(theFlag: Standard_Boolean): void;
  NonDestructive(): Standard_Boolean;
  SetGlue(theGlue: BOPAlgo_GlueEnum): void;
  Glue(): BOPAlgo_GlueEnum;
  SetCheckInverted(theCheck: Standard_Boolean): void;
  CheckInverted(): Standard_Boolean;
  Perform(): void;
  PerformWithFiller(theFiller: BOPAlgo_PaveFiller): void;
  BuildBOP_1(theObjects: TopTools_ListOfShape, theObjState: TopAbs_State, theTools: TopTools_ListOfShape, theToolsState: TopAbs_State, theReport: any): void;
  BuildBOP_2(theObjects: TopTools_ListOfShape, theTools: TopTools_ListOfShape, theOperation: BOPAlgo_Operation, theReport: any): void;
  Images(): TopTools_DataMapOfShapeListOfShape;
  Origins(): TopTools_DataMapOfShapeListOfShape;
  ShapesSD(): TopTools_DataMapOfShapeShape;
}

  export declare class BOPAlgo_Builder_1 extends BOPAlgo_Builder {
    constructor();
  }

  export declare class BOPAlgo_Builder_2 extends BOPAlgo_Builder {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_ToolsProvider extends BOPAlgo_Builder {
  Clear(): void;
  AddTool(theShape: TopoDS_Shape): void;
  SetTools(theShapes: TopTools_ListOfShape): void;
  Tools(): TopTools_ListOfShape;
}

  export declare class BOPAlgo_ToolsProvider_1 extends BOPAlgo_ToolsProvider {
    constructor();
  }

  export declare class BOPAlgo_ToolsProvider_2 extends BOPAlgo_ToolsProvider {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_BOP extends BOPAlgo_ToolsProvider {
  Clear(): void;
  SetOperation(theOperation: BOPAlgo_Operation): void;
  Operation(): BOPAlgo_Operation;
  Perform(): void;
}

  export declare class BOPAlgo_BOP_1 extends BOPAlgo_BOP {
    constructor();
  }

  export declare class BOPAlgo_BOP_2 extends BOPAlgo_BOP {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_BuilderArea extends BOPAlgo_Algo {
  SetContext(theContext: any): void;
  Shapes(): TopTools_ListOfShape;
  SetShapes(theLS: TopTools_ListOfShape): void;
  Loops(): TopTools_ListOfShape;
  Areas(): TopTools_ListOfShape;
  SetAvoidInternalShapes(theAvoidInternal: Standard_Boolean): void;
  IsAvoidInternalShapes(): Standard_Boolean;
}

export declare class BOPAlgo_BuilderFace extends BOPAlgo_BuilderArea {
  SetFace(theFace: TopoDS_Face): void;
  Face(): TopoDS_Face;
  Perform(): void;
  Orientation(): TopAbs_Orientation;
}

  export declare class BOPAlgo_BuilderFace_1 extends BOPAlgo_BuilderFace {
    constructor();
  }

  export declare class BOPAlgo_BuilderFace_2 extends BOPAlgo_BuilderFace {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_BuilderSolid extends BOPAlgo_BuilderArea {
  Perform(): void;
  GetBoxesMap(): TopTools_DataMapOfShapeBox;
}

  export declare class BOPAlgo_BuilderSolid_1 extends BOPAlgo_BuilderSolid {
    constructor();
  }

  export declare class BOPAlgo_BuilderSolid_2 extends BOPAlgo_BuilderSolid {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_CellsBuilder extends BOPAlgo_Builder {
  Clear(): void;
  AddToResult(theLSToTake: TopTools_ListOfShape, theLSToAvoid: TopTools_ListOfShape, theMaterial: Standard_Integer, theUpdate: Standard_Boolean): void;
  AddAllToResult(theMaterial: Standard_Integer, theUpdate: Standard_Boolean): void;
  RemoveFromResult(theLSToTake: TopTools_ListOfShape, theLSToAvoid: TopTools_ListOfShape): void;
  RemoveAllFromResult(): void;
  RemoveInternalBoundaries(): void;
  GetAllParts(): TopoDS_Shape;
  MakeContainers(): void;
}

  export declare class BOPAlgo_CellsBuilder_1 extends BOPAlgo_CellsBuilder {
    constructor();
  }

  export declare class BOPAlgo_CellsBuilder_2 extends BOPAlgo_CellsBuilder {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_SectionAttribute {
  Approximation_1(theApprox: Standard_Boolean): void;
  PCurveOnS1_1(thePCurveOnS1: Standard_Boolean): void;
  PCurveOnS2_1(thePCurveOnS2: Standard_Boolean): void;
  Approximation_2(): Standard_Boolean;
  PCurveOnS1_2(): Standard_Boolean;
  PCurveOnS2_2(): Standard_Boolean;
}

  export declare class BOPAlgo_SectionAttribute_1 extends BOPAlgo_SectionAttribute {
    constructor();
  }

  export declare class BOPAlgo_SectionAttribute_2 extends BOPAlgo_SectionAttribute {
    constructor(theAproximation: Standard_Boolean, thePCurveOnS1: Standard_Boolean, thePCurveOnS2: Standard_Boolean);
  }

export declare class BOPDS_Pave {
  constructor()
  SetIndex(theIndex: Standard_Integer): void;
  Index(): Standard_Integer;
  SetParameter(theParameter: Standard_Real): void;
  Parameter(): Standard_Real;
  Contents(theIndex: Standard_Integer, theParameter: Standard_Real): void;
  IsLess(theOther: BOPDS_Pave): Standard_Boolean;
  IsEqual(theOther: BOPDS_Pave): Standard_Boolean;
  Dump(): void;
}

export declare class BOPDS_PaveBlock extends Standard_Transient {
  SetPave1(thePave: BOPDS_Pave): void;
  Pave1(): BOPDS_Pave;
  SetPave2(thePave: BOPDS_Pave): void;
  Pave2(): BOPDS_Pave;
  SetEdge(theEdge: Standard_Integer): void;
  Edge(): Standard_Integer;
  HasEdge_1(): Standard_Boolean;
  HasEdge_2(theEdge: Standard_Integer): Standard_Boolean;
  SetOriginalEdge(theEdge: Standard_Integer): void;
  OriginalEdge(): Standard_Integer;
  IsSplitEdge(): Standard_Boolean;
  Range(theT1: Standard_Real, theT2: Standard_Real): void;
  HasSameBounds(theOther: any): Standard_Boolean;
  Indices(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  IsToUpdate(): Standard_Boolean;
  AppendExtPave(thePave: BOPDS_Pave): void;
  AppendExtPave1(thePave: BOPDS_Pave): void;
  RemoveExtPave(theVertNum: Standard_Integer): void;
  ExtPaves(): BOPDS_ListOfPave;
  ChangeExtPaves(): BOPDS_ListOfPave;
  Update(theLPB: BOPDS_ListOfPaveBlock, theFlag: Standard_Boolean): void;
  ContainsParameter(thePrm: Standard_Real, theTol: Standard_Real, theInd: Standard_Integer): Standard_Boolean;
  SetShrunkData(theTS1: Standard_Real, theTS2: Standard_Real, theBox: Bnd_Box, theIsSplittable: Standard_Boolean): void;
  ShrunkData(theTS1: Standard_Real, theTS2: Standard_Real, theBox: Bnd_Box, theIsSplittable: Standard_Boolean): void;
  HasShrunkData(): Standard_Boolean;
  Dump(): void;
  IsSplittable(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BOPDS_PaveBlock_1 extends BOPDS_PaveBlock {
    constructor();
  }

  export declare class BOPDS_PaveBlock_2 extends BOPDS_PaveBlock {
    constructor(theAllocator: any);
  }

export declare class BOPDS_CoupleOfPaveBlocks {
  SetIndex(theIndex: Standard_Integer): void;
  Index(): Standard_Integer;
  SetIndexInterf(theIndex: Standard_Integer): void;
  IndexInterf(): Standard_Integer;
  SetPaveBlocks(thePB1: any, thePB2: any): void;
  PaveBlocks(thePB1: any, thePB2: any): void;
  SetPaveBlock1(thePB: any): void;
  PaveBlock1(): any;
  SetPaveBlock2(thePB: any): void;
  PaveBlock2(): any;
  SetTolerance(theTol: Standard_Real): void;
  Tolerance(): Standard_Real;
}

  export declare class BOPDS_CoupleOfPaveBlocks_1 extends BOPDS_CoupleOfPaveBlocks {
    constructor();
  }

  export declare class BOPDS_CoupleOfPaveBlocks_2 extends BOPDS_CoupleOfPaveBlocks {
    constructor(thePB1: any, thePB2: any);
  }

export declare class BOPDS_Pair {
  SetIndices(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  Indices(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  IsEqual(theOther: BOPDS_Pair): Standard_Boolean;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
}

  export declare class BOPDS_Pair_1 extends BOPDS_Pair {
    constructor();
  }

  export declare class BOPDS_Pair_2 extends BOPDS_Pair {
    constructor(theIndex1: Standard_Integer, theIndex2: Standard_Integer);
  }

export declare class BOPDS_PairMapHasher {
  constructor();
  HashCode(thePair: BOPDS_Pair, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(thePair1: BOPDS_Pair, thePair2: BOPDS_Pair): Standard_Boolean;
}

export declare class IntTools_Curve {
  SetCurves(the3dCurve: any, the2dCurve1: any, the2dCurve2: any): void;
  SetCurve(the3dCurve: any): void;
  SetFirstCurve2d(the2dCurve1: any): void;
  SetSecondCurve2d(the2dCurve2: any): void;
  SetTolerance(theTolerance: Standard_Real): void;
  SetTangentialTolerance(theTangentialTolerance: Standard_Real): void;
  Curve(): any;
  FirstCurve2d(): any;
  SecondCurve2d(): any;
  Tolerance(): Standard_Real;
  TangentialTolerance(): Standard_Real;
  HasBounds(): Standard_Boolean;
  Bounds(theFirst: Standard_Real, theLast: Standard_Real, theFirstPnt: gp_Pnt, theLastPnt: gp_Pnt): Standard_Boolean;
  D0(thePar: Standard_Real, thePnt: gp_Pnt): Standard_Boolean;
  Type(): GeomAbs_CurveType;
}

  export declare class IntTools_Curve_1 extends IntTools_Curve {
    constructor();
  }

  export declare class IntTools_Curve_2 extends IntTools_Curve {
    constructor(the3dCurve3d: any, the2dCurve1: any, the2dCurve2: any, theTolerance: Standard_Real, theTangentialTolerance: Standard_Real);
  }

export declare class BOPDS_Curve {
  SetCurve(theC: IntTools_Curve): void;
  Curve(): IntTools_Curve;
  SetBox(theBox: Bnd_Box): void;
  Box(): Bnd_Box;
  ChangeBox(): Bnd_Box;
  SetPaveBlocks(theLPB: BOPDS_ListOfPaveBlock): void;
  PaveBlocks(): BOPDS_ListOfPaveBlock;
  ChangePaveBlocks(): BOPDS_ListOfPaveBlock;
  InitPaveBlock1(): void;
  ChangePaveBlock1(): any;
  TechnoVertices(): TColStd_ListOfInteger;
  ChangeTechnoVertices(): TColStd_ListOfInteger;
  HasEdge(): Standard_Boolean;
  SetTolerance(theTol: Standard_Real): void;
  Tolerance(): Standard_Real;
  TangentialTolerance(): Standard_Real;
}

  export declare class BOPDS_Curve_1 extends BOPDS_Curve {
    constructor();
  }

  export declare class BOPDS_Curve_2 extends BOPDS_Curve {
    constructor(theAllocator: any);
  }

export declare class IntTools_ShrunkRange {
  constructor()
  SetData(aE: TopoDS_Edge, aT1: Standard_Real, aT2: Standard_Real, aV1: TopoDS_Vertex, aV2: TopoDS_Vertex): void;
  SetContext(aCtx: any): void;
  Context(): any;
  SetShrunkRange(aT1: Standard_Real, aT2: Standard_Real): void;
  ShrunkRange(aT1: Standard_Real, aT2: Standard_Real): void;
  BndBox(): Bnd_Box;
  Edge(): TopoDS_Edge;
  Perform(): void;
  IsDone(): Standard_Boolean;
  IsSplittable(): Standard_Boolean;
  Length(): Standard_Real;
}

export declare class BOPAlgo_CheckerSI {
  constructor()
  Perform(): void;
  SetLevelOfCheck(theLevel: Standard_Integer): void;
}

export declare class BOPAlgo_MakePeriodic extends BOPAlgo_Options {
  constructor()
  SetShape(theShape: TopoDS_Shape): void;
  SetPeriodicityParameters(theParams: any): void;
  PeriodicityParameters(): any;
  MakePeriodic(theDirectionID: Standard_Integer, theIsPeriodic: Standard_Boolean, thePeriod: Standard_Real): void;
  IsPeriodic(theDirectionID: Standard_Integer): Standard_Boolean;
  Period(theDirectionID: Standard_Integer): Standard_Real;
  MakeXPeriodic(theIsPeriodic: Standard_Boolean, thePeriod: Standard_Real): void;
  IsXPeriodic(): Standard_Boolean;
  XPeriod(): Standard_Real;
  MakeYPeriodic(theIsPeriodic: Standard_Boolean, thePeriod: Standard_Real): void;
  IsYPeriodic(): Standard_Boolean;
  YPeriod(): Standard_Real;
  MakeZPeriodic(theIsPeriodic: Standard_Boolean, thePeriod: Standard_Real): void;
  IsZPeriodic(): Standard_Boolean;
  ZPeriod(): Standard_Real;
  SetTrimmed(theDirectionID: Standard_Integer, theIsTrimmed: Standard_Boolean, theFirst: Standard_Real): void;
  IsInputTrimmed(theDirectionID: Standard_Integer): Standard_Boolean;
  PeriodFirst(theDirectionID: Standard_Integer): Standard_Real;
  SetXTrimmed(theIsTrimmed: Standard_Boolean, theFirst: Standard_Boolean): void;
  IsInputXTrimmed(): Standard_Boolean;
  XPeriodFirst(): Standard_Real;
  SetYTrimmed(theIsTrimmed: Standard_Boolean, theFirst: Standard_Boolean): void;
  IsInputYTrimmed(): Standard_Boolean;
  YPeriodFirst(): Standard_Real;
  SetZTrimmed(theIsTrimmed: Standard_Boolean, theFirst: Standard_Boolean): void;
  IsInputZTrimmed(): Standard_Boolean;
  ZPeriodFirst(): Standard_Real;
  Perform(): void;
  RepeatShape(theDirectionID: Standard_Integer, theTimes: Standard_Integer): TopoDS_Shape;
  XRepeat(theTimes: Standard_Integer): TopoDS_Shape;
  YRepeat(theTimes: Standard_Integer): TopoDS_Shape;
  ZRepeat(theTimes: Standard_Integer): TopoDS_Shape;
  RepeatedShape(): TopoDS_Shape;
  ClearRepetitions(): void;
  Shape(): TopoDS_Shape;
  GetTwins(theS: TopoDS_Shape): TopTools_ListOfShape;
  History(): any;
  Clear(): void;
  ToDirectionID(theDirectionID: Standard_Integer): Standard_Integer;
}

export declare class BOPAlgo_MakeConnected extends BOPAlgo_Options {
  constructor()
  SetArguments(theArgs: TopTools_ListOfShape): void;
  AddArgument(theS: TopoDS_Shape): void;
  Arguments(): TopTools_ListOfShape;
  Perform(): void;
  MakePeriodic(theParams: any): void;
  RepeatShape(theDirectionID: Standard_Integer, theTimes: Standard_Integer): void;
  ClearRepetitions(): void;
  PeriodicityTool(): BOPAlgo_MakePeriodic;
  MaterialsOnPositiveSide(theS: TopoDS_Shape): TopTools_ListOfShape;
  MaterialsOnNegativeSide(theS: TopoDS_Shape): TopTools_ListOfShape;
  History(): any;
  GetModified(theS: TopoDS_Shape): TopTools_ListOfShape;
  GetOrigins(theS: TopoDS_Shape): TopTools_ListOfShape;
  Shape(): TopoDS_Shape;
  PeriodicShape(): TopoDS_Shape;
  Clear(): void;
}

export declare class BOPAlgo_MakerVolume extends BOPAlgo_Builder {
  Clear(): void;
  SetIntersect(bIntersect: Standard_Boolean): void;
  IsIntersect(): Standard_Boolean;
  Box(): TopoDS_Solid;
  Faces(): TopTools_ListOfShape;
  SetAvoidInternalShapes(theAvoidInternal: Standard_Boolean): void;
  IsAvoidInternalShapes(): Standard_Boolean;
  Perform(): void;
}

  export declare class BOPAlgo_MakerVolume_1 extends BOPAlgo_MakerVolume {
    constructor();
  }

  export declare class BOPAlgo_MakerVolume_2 extends BOPAlgo_MakerVolume {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_RemoveFeatures extends BOPAlgo_BuilderShape {
  constructor()
  SetShape(theShape: TopoDS_Shape): void;
  InputShape(): TopoDS_Shape;
  AddFaceToRemove(theFace: TopoDS_Shape): void;
  AddFacesToRemove(theFaces: TopTools_ListOfShape): void;
  FacesToRemove(): TopTools_ListOfShape;
  Perform(): void;
  Clear(): void;
}

export declare class BOPAlgo_Section extends BOPAlgo_Builder {
}

  export declare class BOPAlgo_Section_1 extends BOPAlgo_Section {
    constructor();
  }

  export declare class BOPAlgo_Section_2 extends BOPAlgo_Section {
    constructor(theAllocator: any);
  }

export declare class BOPTools_ConnexityBlock {
  Shapes(): TopTools_ListOfShape;
  ChangeShapes(): TopTools_ListOfShape;
  SetRegular(theFlag: Standard_Boolean): void;
  IsRegular(): Standard_Boolean;
  Loops(): TopTools_ListOfShape;
  ChangeLoops(): TopTools_ListOfShape;
}

  export declare class BOPTools_ConnexityBlock_1 extends BOPTools_ConnexityBlock {
    constructor();
  }

  export declare class BOPTools_ConnexityBlock_2 extends BOPTools_ConnexityBlock {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_ShellSplitter extends BOPAlgo_Algo {
  AddStartElement(theS: TopoDS_Shape): void;
  StartElements(): TopTools_ListOfShape;
  Perform(): void;
  Shells(): TopTools_ListOfShape;
  SplitBlock(theCB: BOPTools_ConnexityBlock): void;
}

  export declare class BOPAlgo_ShellSplitter_1 extends BOPAlgo_ShellSplitter {
    constructor();
  }

  export declare class BOPAlgo_ShellSplitter_2 extends BOPAlgo_ShellSplitter {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_Splitter extends BOPAlgo_ToolsProvider {
  Perform(): void;
}

  export declare class BOPAlgo_Splitter_1 extends BOPAlgo_Splitter {
    constructor();
  }

  export declare class BOPAlgo_Splitter_2 extends BOPAlgo_Splitter {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_Tools {
  constructor();
  FillMap_2(thePB1: any, theF: Standard_Integer, theMILI: BOPDS_IndexedDataMapOfPaveBlockListOfInteger, theAllocator: any): void;
  PerformCommonBlocks_1(theMBlocks: BOPDS_IndexedDataMapOfPaveBlockListOfPaveBlock, theAllocator: any, theDS: BOPDS_PDS, theContext: any): void;
  PerformCommonBlocks_2(theMBlocks: BOPDS_IndexedDataMapOfPaveBlockListOfInteger, theAllocator: any, pDS: BOPDS_PDS, theContext: any): void;
  ComputeToleranceOfCB(theCB: any, theDS: BOPDS_PDS, theContext: any): Standard_Real;
  EdgesToWires(theEdges: TopoDS_Shape, theWires: TopoDS_Shape, theShared: Standard_Boolean, theAngTol: Standard_Real): Standard_Integer;
  WiresToFaces(theWires: TopoDS_Shape, theFaces: TopoDS_Shape, theAngTol: Standard_Real): Standard_Boolean;
  IntersectVertices(theVertices: TopTools_IndexedDataMapOfShapeReal, theFuzzyValue: Standard_Real, theChains: TopTools_ListOfListOfShape): void;
  ClassifyFaces(theFaces: TopTools_ListOfShape, theSolids: TopTools_ListOfShape, theRunParallel: Standard_Boolean, theContext: any, theInParts: TopTools_IndexedDataMapOfShapeListOfShape, theShapeBoxMap: TopTools_DataMapOfShapeBox, theSolidsIF: TopTools_DataMapOfShapeListOfShape): void;
  FillInternals(theSolids: TopTools_ListOfShape, theParts: TopTools_ListOfShape, theImages: TopTools_DataMapOfShapeListOfShape, theContext: any): void;
  TrsfToPoint(theBox1: Bnd_Box, theBox2: Bnd_Box, theTrsf: gp_Trsf, thePoint: gp_Pnt, theCriteria: Standard_Real): Standard_Boolean;
}

export declare class BOPAlgo_WireEdgeSet {
  Clear(): void;
  SetFace(aF: TopoDS_Face): void;
  Face(): TopoDS_Face;
  AddStartElement(sS: TopoDS_Shape): void;
  StartElements(): TopTools_ListOfShape;
  AddShape(sS: TopoDS_Shape): void;
  Shapes(): TopTools_ListOfShape;
}

  export declare class BOPAlgo_WireEdgeSet_1 extends BOPAlgo_WireEdgeSet {
    constructor();
  }

  export declare class BOPAlgo_WireEdgeSet_2 extends BOPAlgo_WireEdgeSet {
    constructor(theAllocator: any);
  }

export declare class BOPAlgo_WireSplitter extends BOPAlgo_Algo {
  SetWES(theWES: BOPAlgo_WireEdgeSet): void;
  WES(): BOPAlgo_WireEdgeSet;
  SetContext(theContext: any): void;
  Context(): any;
  Perform(): void;
  MakeWire(theLE: TopTools_ListOfShape, theW: TopoDS_Wire): void;
  SplitBlock(theF: TopoDS_Face, theCB: BOPTools_ConnexityBlock, theContext: any): void;
}

  export declare class BOPAlgo_WireSplitter_1 extends BOPAlgo_WireSplitter {
    constructor();
  }

  export declare class BOPAlgo_WireSplitter_2 extends BOPAlgo_WireSplitter {
    constructor(theAllocator: any);
  }

export declare class BOPDS_CommonBlock extends Standard_Transient {
  AddPaveBlock(aPB: any): void;
  SetPaveBlocks(aLPB: BOPDS_ListOfPaveBlock): void;
  AddFace(aF: Standard_Integer): void;
  SetFaces(aLF: TColStd_ListOfInteger): void;
  AppendFaces(aLF: TColStd_ListOfInteger): void;
  PaveBlocks(): BOPDS_ListOfPaveBlock;
  Faces(): TColStd_ListOfInteger;
  PaveBlock1(): any;
  PaveBlockOnEdge(theIndex: Standard_Integer): any;
  IsPaveBlockOnFace(theIndex: Standard_Integer): Standard_Boolean;
  IsPaveBlockOnEdge(theIndex: Standard_Integer): Standard_Boolean;
  Contains_1(thePB: any): Standard_Boolean;
  Contains_2(theF: Standard_Integer): Standard_Boolean;
  SetEdge(theEdge: Standard_Integer): void;
  Edge(): Standard_Integer;
  Dump(): void;
  SetRealPaveBlock(thePB: any): void;
  SetTolerance(theTol: Standard_Real): void;
  Tolerance(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BOPDS_CommonBlock_1 extends BOPDS_CommonBlock {
    constructor();
  }

  export declare class BOPDS_CommonBlock_2 extends BOPDS_CommonBlock {
    constructor(theAllocator: any);
  }

export declare class BOPDS_FaceInfo {
  Clear(): void;
  SetIndex(theI: Standard_Integer): void;
  Index(): Standard_Integer;
  PaveBlocksIn(): BOPDS_IndexedMapOfPaveBlock;
  ChangePaveBlocksIn(): BOPDS_IndexedMapOfPaveBlock;
  VerticesIn(): TColStd_MapOfInteger;
  ChangeVerticesIn(): TColStd_MapOfInteger;
  PaveBlocksOn(): BOPDS_IndexedMapOfPaveBlock;
  ChangePaveBlocksOn(): BOPDS_IndexedMapOfPaveBlock;
  VerticesOn(): TColStd_MapOfInteger;
  ChangeVerticesOn(): TColStd_MapOfInteger;
  PaveBlocksSc(): BOPDS_IndexedMapOfPaveBlock;
  ChangePaveBlocksSc(): BOPDS_IndexedMapOfPaveBlock;
  VerticesSc(): TColStd_MapOfInteger;
  ChangeVerticesSc(): TColStd_MapOfInteger;
}

  export declare class BOPDS_FaceInfo_1 extends BOPDS_FaceInfo {
    constructor();
  }

  export declare class BOPDS_FaceInfo_2 extends BOPDS_FaceInfo {
    constructor(theAllocator: any);
  }

export declare class BOPDS_IndexRange {
  constructor()
  SetFirst(theI1: Standard_Integer): void;
  SetLast(theI2: Standard_Integer): void;
  First(): Standard_Integer;
  Last(): Standard_Integer;
  SetIndices(theI1: Standard_Integer, theI2: Standard_Integer): void;
  Indices(theI1: Standard_Integer, theI2: Standard_Integer): void;
  Contains(theIndex: Standard_Integer): Standard_Boolean;
  Dump(): void;
}

export declare class IntTools_Range {
  SetFirst(aFirst: Standard_Real): void;
  SetLast(aLast: Standard_Real): void;
  First(): Standard_Real;
  Last(): Standard_Real;
  Range(aFirst: Standard_Real, aLast: Standard_Real): void;
}

  export declare class IntTools_Range_1 extends IntTools_Range {
    constructor();
  }

  export declare class IntTools_Range_2 extends IntTools_Range {
    constructor(aFirst: Standard_Real, aLast: Standard_Real);
  }

export declare class IntTools_CommonPrt {
  Assign(Other: IntTools_CommonPrt): IntTools_CommonPrt;
  SetEdge1(anE: TopoDS_Edge): void;
  SetEdge2(anE: TopoDS_Edge): void;
  SetType(aType: TopAbs_ShapeEnum): void;
  SetRange1_1(aR: IntTools_Range): void;
  SetRange1_2(tf: Standard_Real, tl: Standard_Real): void;
  AppendRange2_1(aR: IntTools_Range): void;
  AppendRange2_2(tf: Standard_Real, tl: Standard_Real): void;
  SetVertexParameter1(tV: Standard_Real): void;
  SetVertexParameter2(tV: Standard_Real): void;
  Edge1(): TopoDS_Edge;
  Edge2(): TopoDS_Edge;
  Type(): TopAbs_ShapeEnum;
  Range1_1(): IntTools_Range;
  Range1_2(tf: Standard_Real, tl: Standard_Real): void;
  Ranges2(): IntTools_SequenceOfRanges;
  ChangeRanges2(): IntTools_SequenceOfRanges;
  VertexParameter1(): Standard_Real;
  VertexParameter2(): Standard_Real;
  Copy(anOther: IntTools_CommonPrt): void;
  AllNullFlag(): Standard_Boolean;
  SetAllNullFlag(aFlag: Standard_Boolean): void;
  SetBoundingPoints(aP1: gp_Pnt, aP2: gp_Pnt): void;
  BoundingPoints(aP1: gp_Pnt, aP2: gp_Pnt): void;
}

  export declare class IntTools_CommonPrt_1 extends IntTools_CommonPrt {
    constructor();
  }

  export declare class IntTools_CommonPrt_2 extends IntTools_CommonPrt {
    constructor(aCPrt: IntTools_CommonPrt);
  }

export declare class BOPDS_Point {
  constructor()
  SetPnt(thePnt: gp_Pnt): void;
  Pnt(): gp_Pnt;
  SetPnt2D1(thePnt: gp_Pnt2d): void;
  Pnt2D1(): gp_Pnt2d;
  SetPnt2D2(thePnt: gp_Pnt2d): void;
  Pnt2D2(): gp_Pnt2d;
  SetIndex(theIndex: Standard_Integer): void;
  Index(): Standard_Integer;
}

export declare class BOPDS_Interf {
  SetIndices(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  Indices(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  SetIndex1(theIndex: Standard_Integer): void;
  SetIndex2(theIndex: Standard_Integer): void;
  Index1(): Standard_Integer;
  Index2(): Standard_Integer;
  OppositeIndex(theI: Standard_Integer): Standard_Integer;
  Contains(theIndex: Standard_Integer): Standard_Boolean;
  SetIndexNew(theIndex: Standard_Integer): void;
  IndexNew(): Standard_Integer;
  HasIndexNew_1(theIndex: Standard_Integer): Standard_Boolean;
  HasIndexNew_2(): Standard_Boolean;
}

export declare class BOPDS_InterfVV extends BOPDS_Interf {
}

  export declare class BOPDS_InterfVV_1 extends BOPDS_InterfVV {
    constructor();
  }

  export declare class BOPDS_InterfVV_2 extends BOPDS_InterfVV {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfVE extends BOPDS_Interf {
  SetParameter(theT: Standard_Real): void;
  Parameter(): Standard_Real;
}

  export declare class BOPDS_InterfVE_1 extends BOPDS_InterfVE {
    constructor();
  }

  export declare class BOPDS_InterfVE_2 extends BOPDS_InterfVE {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfVF extends BOPDS_Interf {
  SetUV(theU: Standard_Real, theV: Standard_Real): void;
  UV(theU: Standard_Real, theV: Standard_Real): void;
}

  export declare class BOPDS_InterfVF_1 extends BOPDS_InterfVF {
    constructor();
  }

  export declare class BOPDS_InterfVF_2 extends BOPDS_InterfVF {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfEE extends BOPDS_Interf {
  SetCommonPart(theCP: IntTools_CommonPrt): void;
  CommonPart(): IntTools_CommonPrt;
}

  export declare class BOPDS_InterfEE_1 extends BOPDS_InterfEE {
    constructor();
  }

  export declare class BOPDS_InterfEE_2 extends BOPDS_InterfEE {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfEF extends BOPDS_Interf {
  SetCommonPart(theCP: IntTools_CommonPrt): void;
  CommonPart(): IntTools_CommonPrt;
}

  export declare class BOPDS_InterfEF_1 extends BOPDS_InterfEF {
    constructor();
  }

  export declare class BOPDS_InterfEF_2 extends BOPDS_InterfEF {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfFF extends BOPDS_Interf {
  constructor()
  Init(theNbCurves: Standard_Integer, theNbPoints: Standard_Integer): void;
  SetTangentFaces(theFlag: Standard_Boolean): void;
  TangentFaces(): Standard_Boolean;
  Curves(): BOPDS_VectorOfCurve;
  ChangeCurves(): BOPDS_VectorOfCurve;
  Points(): BOPDS_VectorOfPoint;
  ChangePoints(): BOPDS_VectorOfPoint;
}

export declare class BOPDS_InterfVZ extends BOPDS_Interf {
}

  export declare class BOPDS_InterfVZ_1 extends BOPDS_InterfVZ {
    constructor();
  }

  export declare class BOPDS_InterfVZ_2 extends BOPDS_InterfVZ {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfEZ extends BOPDS_Interf {
}

  export declare class BOPDS_InterfEZ_1 extends BOPDS_InterfEZ {
    constructor();
  }

  export declare class BOPDS_InterfEZ_2 extends BOPDS_InterfEZ {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfFZ extends BOPDS_Interf {
}

  export declare class BOPDS_InterfFZ_1 extends BOPDS_InterfFZ {
    constructor();
  }

  export declare class BOPDS_InterfFZ_2 extends BOPDS_InterfFZ {
    constructor(theAllocator: any);
  }

export declare class BOPDS_InterfZZ extends BOPDS_Interf {
}

  export declare class BOPDS_InterfZZ_1 extends BOPDS_InterfZZ {
    constructor();
  }

  export declare class BOPDS_InterfZZ_2 extends BOPDS_InterfZZ {
    constructor(theAllocator: any);
  }

export declare class BOPDS_ShapeInfo {
  SetShape(theS: TopoDS_Shape): void;
  Shape(): TopoDS_Shape;
  SetShapeType(theType: TopAbs_ShapeEnum): void;
  ShapeType(): TopAbs_ShapeEnum;
  SetBox(theBox: Bnd_Box): void;
  Box(): Bnd_Box;
  ChangeBox(): Bnd_Box;
  SubShapes(): TColStd_ListOfInteger;
  ChangeSubShapes(): TColStd_ListOfInteger;
  HasSubShape(theI: Standard_Integer): Standard_Boolean;
  HasReference(): Standard_Boolean;
  SetReference(theI: Standard_Integer): void;
  Reference(): Standard_Integer;
  HasBRep(): Standard_Boolean;
  IsInterfering(): Standard_Boolean;
  HasFlag_1(): Standard_Boolean;
  HasFlag_2(theFlag: Standard_Integer): Standard_Boolean;
  SetFlag(theI: Standard_Integer): void;
  Flag(): Standard_Integer;
  Dump(): void;
}

  export declare class BOPDS_ShapeInfo_1 extends BOPDS_ShapeInfo {
    constructor();
  }

  export declare class BOPDS_ShapeInfo_2 extends BOPDS_ShapeInfo {
    constructor(theAllocator: any);
  }

export declare class BOPDS_Tools {
  constructor();
  TypeToInteger_1(theT1: TopAbs_ShapeEnum, theT2: TopAbs_ShapeEnum): Standard_Integer;
  TypeToInteger_2(theT: TopAbs_ShapeEnum): Standard_Integer;
  HasBRep(theT: TopAbs_ShapeEnum): Standard_Boolean;
  IsInterfering(theT: TopAbs_ShapeEnum): Standard_Boolean;
}

export declare class BOPDS_DS {
  Clear(): void;
  Allocator(): any;
  SetArguments(theLS: TopTools_ListOfShape): void;
  Arguments(): TopTools_ListOfShape;
  Init(theFuzz: Standard_Real): void;
  NbShapes(): Standard_Integer;
  NbSourceShapes(): Standard_Integer;
  NbRanges(): Standard_Integer;
  Range(theIndex: Standard_Integer): BOPDS_IndexRange;
  Rank(theIndex: Standard_Integer): Standard_Integer;
  IsNewShape(theIndex: Standard_Integer): Standard_Boolean;
  Append_1(theSI: BOPDS_ShapeInfo): Standard_Integer;
  Append_2(theS: TopoDS_Shape): Standard_Integer;
  ShapeInfo(theIndex: Standard_Integer): BOPDS_ShapeInfo;
  ChangeShapeInfo(theIndex: Standard_Integer): BOPDS_ShapeInfo;
  Shape(theIndex: Standard_Integer): TopoDS_Shape;
  Index(theS: TopoDS_Shape): Standard_Integer;
  PaveBlocksPool(): BOPDS_VectorOfListOfPaveBlock;
  ChangePaveBlocksPool(): BOPDS_VectorOfListOfPaveBlock;
  HasPaveBlocks(theIndex: Standard_Integer): Standard_Boolean;
  PaveBlocks(theIndex: Standard_Integer): BOPDS_ListOfPaveBlock;
  ChangePaveBlocks(theIndex: Standard_Integer): BOPDS_ListOfPaveBlock;
  UpdatePaveBlocks(): void;
  UpdatePaveBlock(thePB: any): void;
  UpdateCommonBlock(theCB: any, theFuzz: Standard_Real): void;
  IsCommonBlock(thePB: any): Standard_Boolean;
  CommonBlock(thePB: any): any;
  SetCommonBlock(thePB: any, theCB: any): void;
  RealPaveBlock(thePB: any): any;
  IsCommonBlockOnEdge(thePB: any): Standard_Boolean;
  FaceInfoPool(): BOPDS_VectorOfFaceInfo;
  HasFaceInfo(theIndex: Standard_Integer): Standard_Boolean;
  FaceInfo(theIndex: Standard_Integer): BOPDS_FaceInfo;
  ChangeFaceInfo(theIndex: Standard_Integer): BOPDS_FaceInfo;
  UpdateFaceInfoIn_1(theIndex: Standard_Integer): void;
  UpdateFaceInfoIn_2(theFaces: TColStd_MapOfInteger): void;
  UpdateFaceInfoOn_1(theIndex: Standard_Integer): void;
  UpdateFaceInfoOn_2(theFaces: TColStd_MapOfInteger): void;
  FaceInfoOn(theIndex: Standard_Integer, theMPB: BOPDS_IndexedMapOfPaveBlock, theMVP: TColStd_MapOfInteger): void;
  FaceInfoIn(theIndex: Standard_Integer, theMPB: BOPDS_IndexedMapOfPaveBlock, theMVP: TColStd_MapOfInteger): void;
  AloneVertices(theF: Standard_Integer, theLI: TColStd_ListOfInteger): void;
  RefineFaceInfoOn(): void;
  RefineFaceInfoIn(): void;
  SubShapesOnIn(theNF1: Standard_Integer, theNF2: Standard_Integer, theMVOnIn: TColStd_MapOfInteger, theMVCommon: TColStd_MapOfInteger, thePBOnIn: BOPDS_IndexedMapOfPaveBlock, theCommonPB: BOPDS_MapOfPaveBlock): void;
  SharedEdges(theF1: Standard_Integer, theF2: Standard_Integer, theLI: TColStd_ListOfInteger, theAllocator: any): void;
  ShapesSD(): TColStd_DataMapOfIntegerInteger;
  AddShapeSD(theIndex: Standard_Integer, theIndexSD: Standard_Integer): void;
  HasShapeSD(theIndex: Standard_Integer, theIndexSD: Standard_Integer): Standard_Boolean;
  InterfVV(): BOPDS_VectorOfInterfVV;
  InterfVE(): BOPDS_VectorOfInterfVE;
  InterfVF(): BOPDS_VectorOfInterfVF;
  InterfEE(): BOPDS_VectorOfInterfEE;
  InterfEF(): BOPDS_VectorOfInterfEF;
  InterfFF(): BOPDS_VectorOfInterfFF;
  InterfVZ(): BOPDS_VectorOfInterfVZ;
  InterfEZ(): BOPDS_VectorOfInterfEZ;
  InterfFZ(): BOPDS_VectorOfInterfFZ;
  InterfZZ(): BOPDS_VectorOfInterfZZ;
  NbInterfTypes(): Standard_Integer;
  AddInterf(theI1: Standard_Integer, theI2: Standard_Integer): Standard_Boolean;
  HasInterf_1(theI: Standard_Integer): Standard_Boolean;
  HasInterf_2(theI1: Standard_Integer, theI2: Standard_Integer): Standard_Boolean;
  HasInterfShapeSubShapes(theI1: Standard_Integer, theI2: Standard_Integer, theFlag: Standard_Boolean): Standard_Boolean;
  HasInterfSubShapes(theI1: Standard_Integer, theI2: Standard_Integer): Standard_Boolean;
  Interferences(): BOPDS_MapOfPair;
  Dump(): void;
  IsSubShape(theI1: Standard_Integer, theI2: Standard_Integer): Standard_Boolean;
  Paves(theIndex: Standard_Integer, theLP: BOPDS_ListOfPave): void;
  UpdatePaveBlocksWithSDVertices(): void;
  UpdatePaveBlockWithSDVertices(thePB: any): void;
  UpdateCommonBlockWithSDVertices(theCB: any): void;
  InitPaveBlocksForVertex(theNV: Standard_Integer): void;
  ReleasePaveBlocks(): void;
  IsValidShrunkData(thePB: any): Standard_Boolean;
  BuildBndBoxSolid(theIndex: Standard_Integer, theBox: Bnd_Box, theCheckInverted: Standard_Boolean): void;
}

  export declare class BOPDS_DS_1 extends BOPDS_DS {
    constructor();
  }

  export declare class BOPDS_DS_2 extends BOPDS_DS {
    constructor(theAllocator: any);
  }

export declare class BOPDS_PaveMapHasher {
  constructor();
  HashCode(thePave: BOPDS_Pave, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(aPave1: BOPDS_Pave, aPave2: BOPDS_Pave): Standard_Boolean;
}

export declare class BOPDS_SubIterator {
  SetDS(pDS: BOPDS_PDS): void;
  DS(): BOPDS_DS;
  SetSubSet1(theLI: TColStd_ListOfInteger): void;
  SubSet1(): TColStd_ListOfInteger;
  SetSubSet2(theLI: TColStd_ListOfInteger): void;
  SubSet2(): TColStd_ListOfInteger;
  Initialize(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  Prepare(): void;
  ExpectedLength(): Standard_Integer;
}

  export declare class BOPDS_SubIterator_1 extends BOPDS_SubIterator {
    constructor();
  }

  export declare class BOPDS_SubIterator_2 extends BOPDS_SubIterator {
    constructor(theAllocator: any);
  }

export declare class BOPTools_CoupleOfShape {
  constructor()
  SetShape1(theShape: TopoDS_Shape): void;
  Shape1(): TopoDS_Shape;
  SetShape2(theShape: TopoDS_Shape): void;
  Shape2(): TopoDS_Shape;
}

export declare class BOPTools_AlgoTools {
  constructor();
  DTolerance(): Standard_Real;
  ComputeVV_1(theV: TopoDS_Vertex, theP: gp_Pnt, theTolP: Standard_Real): Standard_Integer;
  ComputeVV_2(theV1: TopoDS_Vertex, theV2: TopoDS_Vertex, theFuzz: Standard_Real): Standard_Integer;
  MakeVertex(theLV: TopTools_ListOfShape, theV: TopoDS_Vertex): void;
  MakeNewVertex_1(aP1: gp_Pnt, aTol: Standard_Real, aNewVertex: TopoDS_Vertex): void;
  MakeNewVertex_2(aV1: TopoDS_Vertex, aV2: TopoDS_Vertex, aNewVertex: TopoDS_Vertex): void;
  MakeNewVertex_3(aE1: TopoDS_Edge, aP1: Standard_Real, aE2: TopoDS_Edge, aP2: Standard_Real, aNewVertex: TopoDS_Vertex): void;
  MakeNewVertex_4(aE1: TopoDS_Edge, aP1: Standard_Real, aF2: TopoDS_Face, aNewVertex: TopoDS_Vertex): void;
  UpdateVertex_1(aIC: IntTools_Curve, aT: Standard_Real, aV: TopoDS_Vertex): void;
  UpdateVertex_2(aE: TopoDS_Edge, aT: Standard_Real, aV: TopoDS_Vertex): void;
  UpdateVertex_3(aVF: TopoDS_Vertex, aVN: TopoDS_Vertex): void;
  MakeEdge(theCurve: IntTools_Curve, theV1: TopoDS_Vertex, theT1: Standard_Real, theV2: TopoDS_Vertex, theT2: Standard_Real, theTolR3D: Standard_Real, theE: TopoDS_Edge): void;
  CopyEdge(theEdge: TopoDS_Edge): TopoDS_Edge;
  MakeSplitEdge(aE1: TopoDS_Edge, aV1: TopoDS_Vertex, aP1: Standard_Real, aV2: TopoDS_Vertex, aP2: Standard_Real, aNewEdge: TopoDS_Edge): void;
  MakeSectEdge(aIC: IntTools_Curve, aV1: TopoDS_Vertex, aP1: Standard_Real, aV2: TopoDS_Vertex, aP2: Standard_Real, aNewEdge: TopoDS_Edge): void;
  ComputeState_1(thePoint: gp_Pnt, theSolid: TopoDS_Solid, theTol: Standard_Real, theContext: any): TopAbs_State;
  ComputeState_2(theVertex: TopoDS_Vertex, theSolid: TopoDS_Solid, theTol: Standard_Real, theContext: any): TopAbs_State;
  ComputeState_3(theEdge: TopoDS_Edge, theSolid: TopoDS_Solid, theTol: Standard_Real, theContext: any): TopAbs_State;
  ComputeState_4(theFace: TopoDS_Face, theSolid: TopoDS_Solid, theTol: Standard_Real, theBounds: TopTools_IndexedMapOfShape, theContext: any): TopAbs_State;
  ComputeStateByOnePoint(theShape: TopoDS_Shape, theSolid: TopoDS_Solid, theTol: Standard_Real, theContext: any): TopAbs_State;
  GetFaceOff(theEdge: TopoDS_Edge, theFace: TopoDS_Face, theLCEF: BOPTools_ListOfCoupleOfShape, theFaceOff: TopoDS_Face, theContext: any): Standard_Boolean;
  IsInternalFace_1(theFace: TopoDS_Face, theEdge: TopoDS_Edge, theFace1: TopoDS_Face, theFace2: TopoDS_Face, theContext: any): Standard_Integer;
  IsInternalFace_2(theFace: TopoDS_Face, theEdge: TopoDS_Edge, theLF: TopTools_ListOfShape, theContext: any): Standard_Integer;
  IsInternalFace_3(theFace: TopoDS_Face, theSolid: TopoDS_Solid, theMEF: TopTools_IndexedDataMapOfShapeListOfShape, theTol: Standard_Real, theContext: any): Standard_Boolean;
  MakePCurve(theE: TopoDS_Edge, theF1: TopoDS_Face, theF2: TopoDS_Face, theCurve: IntTools_Curve, thePC1: Standard_Boolean, thePC2: Standard_Boolean, theContext: any): void;
  IsHole(theW: TopoDS_Shape, theF: TopoDS_Shape): Standard_Boolean;
  IsSplitToReverse_1(theSplit: TopoDS_Shape, theShape: TopoDS_Shape, theContext: any, theError: Standard_Integer): Standard_Boolean;
  IsSplitToReverseWithWarn(theSplit: TopoDS_Shape, theShape: TopoDS_Shape, theContext: any, theReport: any): Standard_Boolean;
  IsSplitToReverse_2(theSplit: TopoDS_Face, theShape: TopoDS_Face, theContext: any, theError: Standard_Integer): Standard_Boolean;
  IsSplitToReverse_3(theSplit: TopoDS_Edge, theShape: TopoDS_Edge, theContext: any, theError: Standard_Integer): Standard_Boolean;
  Sense(theF1: TopoDS_Face, theF2: TopoDS_Face, theContext: any): Standard_Integer;
  MakeConnexityBlock(theLS: TopTools_ListOfShape, theMapAvoid: TopTools_IndexedMapOfShape, theLSCB: TopTools_ListOfShape, theAllocator: any): void;
  MakeConnexityBlocks_1(theS: TopoDS_Shape, theConnectionType: TopAbs_ShapeEnum, theElementType: TopAbs_ShapeEnum, theLCB: TopTools_ListOfShape): void;
  MakeConnexityBlocks_2(theS: TopoDS_Shape, theConnectionType: TopAbs_ShapeEnum, theElementType: TopAbs_ShapeEnum, theLCB: TopTools_ListOfListOfShape, theConnectionMap: TopTools_IndexedDataMapOfShapeListOfShape): void;
  MakeConnexityBlocks_3(theLS: TopTools_ListOfShape, theConnectionType: TopAbs_ShapeEnum, theElementType: TopAbs_ShapeEnum, theLCB: BOPTools_ListOfConnexityBlock): void;
  OrientEdgesOnWire(theWire: TopoDS_Shape): void;
  OrientFacesOnShell(theShell: TopoDS_Shape): void;
  CorrectTolerances(theS: TopoDS_Shape, theMapToAvoid: TopTools_IndexedMapOfShape, theTolMax: Standard_Real, theRunParallel: Standard_Boolean): void;
  CorrectCurveOnSurface(theS: TopoDS_Shape, theMapToAvoid: TopTools_IndexedMapOfShape, theTolMax: Standard_Real, theRunParallel: Standard_Boolean): void;
  CorrectPointOnCurve(theS: TopoDS_Shape, theMapToAvoid: TopTools_IndexedMapOfShape, theTolMax: Standard_Real, theRunParallel: Standard_Boolean): void;
  CorrectShapeTolerances(theS: TopoDS_Shape, theMapToAvoid: TopTools_IndexedMapOfShape, theRunParallel: Standard_Boolean): void;
  AreFacesSameDomain(theF1: TopoDS_Face, theF2: TopoDS_Face, theContext: any, theFuzz: Standard_Real): Standard_Boolean;
  GetEdgeOff(theEdge: TopoDS_Edge, theFace: TopoDS_Face, theEdgeOff: TopoDS_Edge): Standard_Boolean;
  GetEdgeOnFace(theEdge: TopoDS_Edge, theFace: TopoDS_Face, theEdgeOnF: TopoDS_Edge): Standard_Boolean;
  CorrectRange_1(aE1: TopoDS_Edge, aE2: TopoDS_Edge, aSR: IntTools_Range, aNewSR: IntTools_Range): void;
  CorrectRange_2(aE: TopoDS_Edge, aF: TopoDS_Face, aSR: IntTools_Range, aNewSR: IntTools_Range): void;
  IsMicroEdge(theEdge: TopoDS_Edge, theContext: any, theCheckSplittable: Standard_Boolean): Standard_Boolean;
  IsInvertedSolid(theSolid: TopoDS_Solid): Standard_Boolean;
  ComputeTolerance(theFace: TopoDS_Face, theEdge: TopoDS_Edge, theMaxDist: Standard_Real, theMaxPar: Standard_Real): Standard_Boolean;
  MakeContainer(theType: TopAbs_ShapeEnum, theShape: TopoDS_Shape): void;
  PointOnEdge(aEdge: TopoDS_Edge, aPrm: Standard_Real, aP: gp_Pnt): void;
  IsBlockInOnFace(aShR: IntTools_Range, aF: TopoDS_Face, aE: TopoDS_Edge, aContext: any): Standard_Boolean;
  Dimensions(theS: TopoDS_Shape, theDMin: Standard_Integer, theDMax: Standard_Integer): void;
  Dimension(theS: TopoDS_Shape): Standard_Integer;
  TreatCompound(theS: TopoDS_Shape, theList: TopTools_ListOfShape, theMap: TopTools_MapOfShape): void;
  IsOpenShell(theShell: TopoDS_Shell): Standard_Boolean;
}

export declare class BOPTools_AlgoTools2D {
  constructor();
  BuildPCurveForEdgeOnFace(aE: TopoDS_Edge, aF: TopoDS_Face, theContext: any): void;
  EdgeTangent(anE: TopoDS_Edge, aT: Standard_Real, Tau: gp_Vec): Standard_Boolean;
  PointOnSurface(aE: TopoDS_Edge, aF: TopoDS_Face, aT: Standard_Real, U: Standard_Real, V: Standard_Real, theContext: any): void;
  CurveOnSurface_1(aE: TopoDS_Edge, aF: TopoDS_Face, aC: any, aToler: Standard_Real, theContext: any): void;
  CurveOnSurface_2(aE: TopoDS_Edge, aF: TopoDS_Face, aC: any, aFirst: Standard_Real, aLast: Standard_Real, aToler: Standard_Real, theContext: any): void;
  HasCurveOnSurface_1(aE: TopoDS_Edge, aF: TopoDS_Face, aC: any, aFirst: Standard_Real, aLast: Standard_Real, aToler: Standard_Real): Standard_Boolean;
  HasCurveOnSurface_2(aE: TopoDS_Edge, aF: TopoDS_Face): Standard_Boolean;
  AdjustPCurveOnFace_1(theF: TopoDS_Face, theC3D: any, theC2D: any, theC2DA: any, theContext: any): void;
  AdjustPCurveOnFace_2(theF: TopoDS_Face, theFirst: Standard_Real, theLast: Standard_Real, theC2D: any, theC2DA: any, theContext: any): void;
  AdjustPCurveOnSurf(aF: BRepAdaptor_Surface, aT1: Standard_Real, aT2: Standard_Real, aC2D: any, aC2DA: any): void;
  IntermediatePoint_1(aFirst: Standard_Real, aLast: Standard_Real): Standard_Real;
  IntermediatePoint_2(anE: TopoDS_Edge): Standard_Real;
  Make2D(aE: TopoDS_Edge, aF: TopoDS_Face, aC: any, aFirst: Standard_Real, aLast: Standard_Real, aToler: Standard_Real, theContext: any): void;
  MakePCurveOnFace_1(aF: TopoDS_Face, C3D: any, aC: any, aToler: Standard_Real, theContext: any): void;
  MakePCurveOnFace_2(aF: TopoDS_Face, C3D: any, aT1: Standard_Real, aT2: Standard_Real, aC: any, aToler: Standard_Real, theContext: any): void;
  AttachExistingPCurve(aEold: TopoDS_Edge, aEnew: TopoDS_Edge, aF: TopoDS_Face, aCtx: any): Standard_Integer;
  IsEdgeIsoline(theE: TopoDS_Edge, theF: TopoDS_Face, isTheUIso: Standard_Boolean, isTheVIso: Standard_Boolean): void;
}

export declare class BOPTools_AlgoTools3D {
  constructor();
  DoSplitSEAMOnFace_1(theESplit: TopoDS_Edge, theFace: TopoDS_Face): Standard_Boolean;
  DoSplitSEAMOnFace_2(theEOrigin: TopoDS_Edge, theESplit: TopoDS_Edge, theFace: TopoDS_Face): Standard_Boolean;
  GetNormalToFaceOnEdge_1(aE: TopoDS_Edge, aF: TopoDS_Face, aT: Standard_Real, aD: gp_Dir, theContext: any): void;
  GetNormalToFaceOnEdge_2(aE: TopoDS_Edge, aF: TopoDS_Face, aD: gp_Dir, theContext: any): void;
  SenseFlag(aNF1: gp_Dir, aNF2: gp_Dir): Standard_Integer;
  GetNormalToSurface(aS: any, U: Standard_Real, V: Standard_Real, aD: gp_Dir): Standard_Boolean;
  GetApproxNormalToFaceOnEdge_1(aE: TopoDS_Edge, aF: TopoDS_Face, aT: Standard_Real, aPx: gp_Pnt, aD: gp_Dir, theContext: any): Standard_Boolean;
  GetApproxNormalToFaceOnEdge_2(theE: TopoDS_Edge, theF: TopoDS_Face, aT: Standard_Real, aP: gp_Pnt, aDNF: gp_Dir, aDt2D: Standard_Real): Standard_Boolean;
  GetApproxNormalToFaceOnEdge_3(theE: TopoDS_Edge, theF: TopoDS_Face, aT: Standard_Real, aDt2D: Standard_Real, aP: gp_Pnt, aDNF: gp_Dir, theContext: any): Standard_Boolean;
  PointNearEdge_1(aE: TopoDS_Edge, aF: TopoDS_Face, aT: Standard_Real, aDt2D: Standard_Real, aP2D: gp_Pnt2d, aPx: gp_Pnt, theContext: any): Standard_Integer;
  PointNearEdge_2(aE: TopoDS_Edge, aF: TopoDS_Face, aT: Standard_Real, aDt2D: Standard_Real, aP2D: gp_Pnt2d, aPx: gp_Pnt): Standard_Integer;
  PointNearEdge_3(aE: TopoDS_Edge, aF: TopoDS_Face, aT: Standard_Real, aP2D: gp_Pnt2d, aPx: gp_Pnt, theContext: any): Standard_Integer;
  PointNearEdge_4(aE: TopoDS_Edge, aF: TopoDS_Face, aP2D: gp_Pnt2d, aPx: gp_Pnt, theContext: any): Standard_Integer;
  MinStepIn2d(): Standard_Real;
  IsEmptyShape(aS: TopoDS_Shape): Standard_Boolean;
  OrientEdgeOnFace(aE: TopoDS_Edge, aF: TopoDS_Face, aER: TopoDS_Edge): void;
  PointInFace_1(theF: TopoDS_Face, theP: gp_Pnt, theP2D: gp_Pnt2d, theContext: any): Standard_Integer;
  PointInFace_2(theF: TopoDS_Face, theE: TopoDS_Edge, theT: Standard_Real, theDt2D: Standard_Real, theP: gp_Pnt, theP2D: gp_Pnt2d, theContext: any): Standard_Integer;
  PointInFace_3(theF: TopoDS_Face, theL: any, theP: gp_Pnt, theP2D: gp_Pnt2d, theContext: any, theDt2D: Standard_Real): Standard_Integer;
}

export declare class BOPTools_Set {
  Assign(Other: BOPTools_Set): BOPTools_Set;
  Shape(): TopoDS_Shape;
  Add(theS: TopoDS_Shape, theType: TopAbs_ShapeEnum): void;
  NbShapes(): Standard_Integer;
  IsEqual(aOther: BOPTools_Set): Standard_Boolean;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
}

  export declare class BOPTools_Set_1 extends BOPTools_Set {
    constructor();
  }

  export declare class BOPTools_Set_2 extends BOPTools_Set {
    constructor(theAllocator: any);
  }

  export declare class BOPTools_Set_3 extends BOPTools_Set {
    constructor(theOther: BOPTools_Set);
  }

export declare class BOPTools_SetMapHasher {
  constructor();
  HashCode(theSet: BOPTools_Set, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(aSet1: BOPTools_Set, aSet2: BOPTools_Set): Standard_Boolean;
}

export declare class BRepAlgoAPI_Algo extends BRepBuilderAPI_MakeShape {
  Shape(): TopoDS_Shape;
}

export declare class BRepAlgoAPI_BuilderAlgo extends BRepAlgoAPI_Algo {
  SetArguments(theLS: TopTools_ListOfShape): void;
  Arguments(): TopTools_ListOfShape;
  SetNonDestructive(theFlag: Standard_Boolean): void;
  NonDestructive(): Standard_Boolean;
  SetGlue(theGlue: BOPAlgo_GlueEnum): void;
  Glue(): BOPAlgo_GlueEnum;
  SetCheckInverted(theCheck: Standard_Boolean): void;
  CheckInverted(): Standard_Boolean;
  Build(): void;
  SimplifyResult(theUnifyEdges: Standard_Boolean, theUnifyFaces: Standard_Boolean, theAngularTol: Standard_Real): void;
  Modified(theS: TopoDS_Shape): TopTools_ListOfShape;
  Generated(theS: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(aS: TopoDS_Shape): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasDeleted(): Standard_Boolean;
  SetToFillHistory(theHistFlag: Standard_Boolean): void;
  HasHistory(): Standard_Boolean;
  SectionEdges(): TopTools_ListOfShape;
  DSFiller(): BOPAlgo_PPaveFiller;
  Builder(): BOPAlgo_PBuilder;
  History(): any;
}

  export declare class BRepAlgoAPI_BuilderAlgo_1 extends BRepAlgoAPI_BuilderAlgo {
    constructor();
  }

  export declare class BRepAlgoAPI_BuilderAlgo_2 extends BRepAlgoAPI_BuilderAlgo {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_BooleanOperation extends BRepAlgoAPI_BuilderAlgo {
  Shape1(): TopoDS_Shape;
  Shape2(): TopoDS_Shape;
  SetTools(theLS: TopTools_ListOfShape): void;
  Tools(): TopTools_ListOfShape;
  SetOperation(theBOP: BOPAlgo_Operation): void;
  Operation(): BOPAlgo_Operation;
  Build(): void;
}

  export declare class BRepAlgoAPI_BooleanOperation_1 extends BRepAlgoAPI_BooleanOperation {
    constructor();
  }

  export declare class BRepAlgoAPI_BooleanOperation_2 extends BRepAlgoAPI_BooleanOperation {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_Check extends BOPAlgo_Options {
  SetData_1(theS: TopoDS_Shape, bTestSE: Standard_Boolean, bTestSI: Standard_Boolean): void;
  SetData_2(theS1: TopoDS_Shape, theS2: TopoDS_Shape, theOp: BOPAlgo_Operation, bTestSE: Standard_Boolean, bTestSI: Standard_Boolean): void;
  Perform(): void;
  IsValid(): Standard_Boolean;
  Result(): BOPAlgo_ListOfCheckResult;
}

  export declare class BRepAlgoAPI_Check_1 extends BRepAlgoAPI_Check {
    constructor();
  }

  export declare class BRepAlgoAPI_Check_2 extends BRepAlgoAPI_Check {
    constructor(theS: TopoDS_Shape, bTestSE: Standard_Boolean, bTestSI: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Check_3 extends BRepAlgoAPI_Check {
    constructor(theS1: TopoDS_Shape, theS2: TopoDS_Shape, theOp: BOPAlgo_Operation, bTestSE: Standard_Boolean, bTestSI: Standard_Boolean);
  }

export declare class BRepAlgoAPI_Common extends BRepAlgoAPI_BooleanOperation {
}

  export declare class BRepAlgoAPI_Common_1 extends BRepAlgoAPI_Common {
    constructor();
  }

  export declare class BRepAlgoAPI_Common_2 extends BRepAlgoAPI_Common {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Common_3 extends BRepAlgoAPI_Common {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape);
  }

  export declare class BRepAlgoAPI_Common_4 extends BRepAlgoAPI_Common {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, PF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_Cut extends BRepAlgoAPI_BooleanOperation {
}

  export declare class BRepAlgoAPI_Cut_1 extends BRepAlgoAPI_Cut {
    constructor();
  }

  export declare class BRepAlgoAPI_Cut_2 extends BRepAlgoAPI_Cut {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Cut_3 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape);
  }

  export declare class BRepAlgoAPI_Cut_4 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, bFWD: Standard_Boolean);
  }

export declare class BRepAlgoAPI_Defeaturing extends BRepAlgoAPI_Algo {
  constructor()
  SetShape(theShape: TopoDS_Shape): void;
  InputShape(): TopoDS_Shape;
  AddFaceToRemove(theFace: TopoDS_Shape): void;
  AddFacesToRemove(theFaces: TopTools_ListOfShape): void;
  FacesToRemove(): TopTools_ListOfShape;
  Build(): void;
  SetToFillHistory(theFlag: Standard_Boolean): void;
  HasHistory(): Standard_Boolean;
  Modified(theS: TopoDS_Shape): TopTools_ListOfShape;
  Generated(theS: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(theS: TopoDS_Shape): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasDeleted(): Standard_Boolean;
  History(): any;
}

export declare class BRepAlgoAPI_Fuse extends BRepAlgoAPI_BooleanOperation {
}

  export declare class BRepAlgoAPI_Fuse_1 extends BRepAlgoAPI_Fuse {
    constructor();
  }

  export declare class BRepAlgoAPI_Fuse_2 extends BRepAlgoAPI_Fuse {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Fuse_3 extends BRepAlgoAPI_Fuse {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape);
  }

  export declare class BRepAlgoAPI_Fuse_4 extends BRepAlgoAPI_Fuse {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_Section extends BRepAlgoAPI_BooleanOperation {
  Init1_1(S1: TopoDS_Shape): void;
  Init1_2(Pl: gp_Pln): void;
  Init1_3(Sf: any): void;
  Init2_1(S2: TopoDS_Shape): void;
  Init2_2(Pl: gp_Pln): void;
  Init2_3(Sf: any): void;
  Approximation(B: Standard_Boolean): void;
  ComputePCurveOn1(B: Standard_Boolean): void;
  ComputePCurveOn2(B: Standard_Boolean): void;
  Build(): void;
  HasAncestorFaceOn1(E: TopoDS_Shape, F: TopoDS_Shape): Standard_Boolean;
  HasAncestorFaceOn2(E: TopoDS_Shape, F: TopoDS_Shape): Standard_Boolean;
}

  export declare class BRepAlgoAPI_Section_1 extends BRepAlgoAPI_Section {
    constructor();
  }

  export declare class BRepAlgoAPI_Section_2 extends BRepAlgoAPI_Section {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Section_3 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_4 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_5 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, Pl: gp_Pln, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_6 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, Sf: any, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_7 extends BRepAlgoAPI_Section {
    constructor(Sf: any, S2: TopoDS_Shape, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_8 extends BRepAlgoAPI_Section {
    constructor(Sf1: any, Sf2: any, PerformNow: Standard_Boolean);
  }

export declare class BRepAlgoAPI_Splitter extends BRepAlgoAPI_BuilderAlgo {
  SetTools(theLS: TopTools_ListOfShape): void;
  Tools(): TopTools_ListOfShape;
  Build(): void;
}

  export declare class BRepAlgoAPI_Splitter_1 extends BRepAlgoAPI_Splitter {
    constructor();
  }

  export declare class BRepAlgoAPI_Splitter_2 extends BRepAlgoAPI_Splitter {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class IntTools_Root {
  SetRoot(aRoot: Standard_Real): void;
  SetType(aType: Standard_Integer): void;
  SetStateBefore(aState: TopAbs_State): void;
  SetStateAfter(aState: TopAbs_State): void;
  SetLayerHeight(aHeight: Standard_Real): void;
  SetInterval(t1: Standard_Real, t2: Standard_Real, f1: Standard_Real, f2: Standard_Real): void;
  Root(): Standard_Real;
  Type(): Standard_Integer;
  StateBefore(): TopAbs_State;
  StateAfter(): TopAbs_State;
  LayerHeight(): Standard_Real;
  IsValid(): Standard_Boolean;
  Interval(t1: Standard_Real, t2: Standard_Real, f1: Standard_Real, f2: Standard_Real): void;
}

  export declare class IntTools_Root_1 extends IntTools_Root {
    constructor();
  }

  export declare class IntTools_Root_2 extends IntTools_Root {
    constructor(aRoot: Standard_Real, aType: Standard_Integer);
  }

export declare class IntTools {
  constructor();
  Length(E: TopoDS_Edge): Standard_Real;
  RemoveIdenticalRoots(aSeq: IntTools_SequenceOfRoots, anEpsT: Standard_Real): void;
  SortRoots(aSeq: IntTools_SequenceOfRoots, anEpsT: Standard_Real): void;
  FindRootStates(aSeq: IntTools_SequenceOfRoots, anEpsNull: Standard_Real): void;
  Parameter(P: gp_Pnt, Curve: any, aParm: Standard_Real): Standard_Integer;
  GetRadius(C: BRepAdaptor_Curve, t1: Standard_Real, t3: Standard_Real, R: Standard_Real): Standard_Integer;
  PrepareArgs(C: BRepAdaptor_Curve, tMax: Standard_Real, tMin: Standard_Real, Discret: Standard_Integer, Deflect: Standard_Real, anArgs: IntTools_CArray1OfReal): Standard_Integer;
}

export declare class IntTools_BaseRangeSample {
  SetDepth(theDepth: Standard_Integer): void;
  GetDepth(): Standard_Integer;
}

  export declare class IntTools_BaseRangeSample_1 extends IntTools_BaseRangeSample {
    constructor();
  }

  export declare class IntTools_BaseRangeSample_2 extends IntTools_BaseRangeSample {
    constructor(theDepth: Standard_Integer);
  }

export declare class IntTools_MarkedRangeSet {
  SetBoundaries(theFirstBoundary: Standard_Real, theLastBoundary: Standard_Real, theInitFlag: Standard_Integer): void;
  SetRanges(theSortedArray: IntTools_CArray1OfReal, theInitFlag: Standard_Integer): void;
  InsertRange_1(theFirstBoundary: Standard_Real, theLastBoundary: Standard_Real, theFlag: Standard_Integer): Standard_Boolean;
  InsertRange_2(theRange: IntTools_Range, theFlag: Standard_Integer): Standard_Boolean;
  InsertRange_3(theFirstBoundary: Standard_Real, theLastBoundary: Standard_Real, theFlag: Standard_Integer, theIndex: Standard_Integer): Standard_Boolean;
  InsertRange_4(theRange: IntTools_Range, theFlag: Standard_Integer, theIndex: Standard_Integer): Standard_Boolean;
  SetFlag(theIndex: Standard_Integer, theFlag: Standard_Integer): void;
  Flag(theIndex: Standard_Integer): Standard_Integer;
  GetIndex_1(theValue: Standard_Real): Standard_Integer;
  GetIndices(theValue: Standard_Real): TColStd_SequenceOfInteger;
  GetIndex_2(theValue: Standard_Real, UseLower: Standard_Boolean): Standard_Integer;
  Length(): Standard_Integer;
  Range(theIndex: Standard_Integer): IntTools_Range;
}

  export declare class IntTools_MarkedRangeSet_1 extends IntTools_MarkedRangeSet {
    constructor();
  }

  export declare class IntTools_MarkedRangeSet_2 extends IntTools_MarkedRangeSet {
    constructor(theFirstBoundary: Standard_Real, theLastBoundary: Standard_Real, theInitFlag: Standard_Integer);
  }

  export declare class IntTools_MarkedRangeSet_3 extends IntTools_MarkedRangeSet {
    constructor(theSortedArray: IntTools_CArray1OfReal, theInitFlag: Standard_Integer);
  }

export declare class IntTools_CurveRangeSample extends IntTools_BaseRangeSample {
  SetRangeIndex(theIndex: Standard_Integer): void;
  GetRangeIndex(): Standard_Integer;
  IsEqual(Other: IntTools_CurveRangeSample): Standard_Boolean;
  GetRange(theFirst: Standard_Real, theLast: Standard_Real, theNbSample: Standard_Integer): IntTools_Range;
  GetRangeIndexDeeper(theNbSample: Standard_Integer): Standard_Integer;
}

  export declare class IntTools_CurveRangeSample_1 extends IntTools_CurveRangeSample {
    constructor();
  }

  export declare class IntTools_CurveRangeSample_2 extends IntTools_CurveRangeSample {
    constructor(theIndex: Standard_Integer);
  }

export declare class IntTools_SurfaceRangeSample {
  Assign(Other: IntTools_SurfaceRangeSample): IntTools_SurfaceRangeSample;
  SetRanges(theRangeU: IntTools_CurveRangeSample, theRangeV: IntTools_CurveRangeSample): void;
  GetRanges(theRangeU: IntTools_CurveRangeSample, theRangeV: IntTools_CurveRangeSample): void;
  SetIndexes(theIndexU: Standard_Integer, theIndexV: Standard_Integer): void;
  GetIndexes(theIndexU: Standard_Integer, theIndexV: Standard_Integer): void;
  GetDepths(theDepthU: Standard_Integer, theDepthV: Standard_Integer): void;
  SetSampleRangeU(theRangeSampleU: IntTools_CurveRangeSample): void;
  GetSampleRangeU(): IntTools_CurveRangeSample;
  SetSampleRangeV(theRangeSampleV: IntTools_CurveRangeSample): void;
  GetSampleRangeV(): IntTools_CurveRangeSample;
  SetIndexU(theIndexU: Standard_Integer): void;
  GetIndexU(): Standard_Integer;
  SetIndexV(theIndexV: Standard_Integer): void;
  GetIndexV(): Standard_Integer;
  SetDepthU(theDepthU: Standard_Integer): void;
  GetDepthU(): Standard_Integer;
  SetDepthV(theDepthV: Standard_Integer): void;
  GetDepthV(): Standard_Integer;
  GetRangeU(theFirstU: Standard_Real, theLastU: Standard_Real, theNbSampleU: Standard_Integer): IntTools_Range;
  GetRangeV(theFirstV: Standard_Real, theLastV: Standard_Real, theNbSampleV: Standard_Integer): IntTools_Range;
  IsEqual(Other: IntTools_SurfaceRangeSample): Standard_Boolean;
  GetRangeIndexUDeeper(theNbSampleU: Standard_Integer): Standard_Integer;
  GetRangeIndexVDeeper(theNbSampleV: Standard_Integer): Standard_Integer;
}

  export declare class IntTools_SurfaceRangeSample_1 extends IntTools_SurfaceRangeSample {
    constructor();
  }

  export declare class IntTools_SurfaceRangeSample_2 extends IntTools_SurfaceRangeSample {
    constructor(theIndexU: Standard_Integer, theDepthU: Standard_Integer, theIndexV: Standard_Integer, theDepthV: Standard_Integer);
  }

  export declare class IntTools_SurfaceRangeSample_3 extends IntTools_SurfaceRangeSample {
    constructor(theRangeU: IntTools_CurveRangeSample, theRangeV: IntTools_CurveRangeSample);
  }

  export declare class IntTools_SurfaceRangeSample_4 extends IntTools_SurfaceRangeSample {
    constructor(Other: IntTools_SurfaceRangeSample);
  }

export declare class IntTools_BeanFaceIntersector {
  Init_1(theEdge: TopoDS_Edge, theFace: TopoDS_Face): void;
  Init_2(theCurve: BRepAdaptor_Curve, theSurface: BRepAdaptor_Surface, theBeanTolerance: Standard_Real, theFaceTolerance: Standard_Real): void;
  Init_3(theCurve: BRepAdaptor_Curve, theSurface: BRepAdaptor_Surface, theFirstParOnCurve: Standard_Real, theLastParOnCurve: Standard_Real, theUMinParameter: Standard_Real, theUMaxParameter: Standard_Real, theVMinParameter: Standard_Real, theVMaxParameter: Standard_Real, theBeanTolerance: Standard_Real, theFaceTolerance: Standard_Real): void;
  SetContext(theContext: any): void;
  Context(): any;
  SetBeanParameters(theFirstParOnCurve: Standard_Real, theLastParOnCurve: Standard_Real): void;
  SetSurfaceParameters(theUMinParameter: Standard_Real, theUMaxParameter: Standard_Real, theVMinParameter: Standard_Real, theVMaxParameter: Standard_Real): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  Result_1(): IntTools_SequenceOfRanges;
  Result_2(theResults: IntTools_SequenceOfRanges): void;
  MinimalSquareDistance(): Standard_Real;
}

  export declare class IntTools_BeanFaceIntersector_1 extends IntTools_BeanFaceIntersector {
    constructor();
  }

  export declare class IntTools_BeanFaceIntersector_2 extends IntTools_BeanFaceIntersector {
    constructor(theEdge: TopoDS_Edge, theFace: TopoDS_Face);
  }

  export declare class IntTools_BeanFaceIntersector_3 extends IntTools_BeanFaceIntersector {
    constructor(theCurve: BRepAdaptor_Curve, theSurface: BRepAdaptor_Surface, theBeanTolerance: Standard_Real, theFaceTolerance: Standard_Real);
  }

  export declare class IntTools_BeanFaceIntersector_4 extends IntTools_BeanFaceIntersector {
    constructor(theCurve: BRepAdaptor_Curve, theSurface: BRepAdaptor_Surface, theFirstParOnCurve: Standard_Real, theLastParOnCurve: Standard_Real, theUMinParameter: Standard_Real, theUMaxParameter: Standard_Real, theVMinParameter: Standard_Real, theVMaxParameter: Standard_Real, theBeanTolerance: Standard_Real, theFaceTolerance: Standard_Real);
  }

export declare class IntTools_CArray1OfInteger {
  Init(V: Standard_Integer): void;
  Resize(theNewLength: Standard_Integer): void;
  Destroy(): void;
  Length(): Standard_Integer;
  Append(Value: Standard_Integer): void;
  SetValue(Index: Standard_Integer, Value: Standard_Integer): void;
  Value(Index: Standard_Integer): Standard_Integer;
  ChangeValue(Index: Standard_Integer): Standard_Integer;
  IsEqual(Other: IntTools_CArray1OfInteger): Standard_Boolean;
}

  export declare class IntTools_CArray1OfInteger_1 extends IntTools_CArray1OfInteger {
    constructor(Length: Standard_Integer);
  }

  export declare class IntTools_CArray1OfInteger_2 extends IntTools_CArray1OfInteger {
    constructor(Item: Standard_Integer, Length: Standard_Integer);
  }

export declare class IntTools_CArray1OfReal {
  Init(V: Standard_Real): void;
  Resize(theNewLength: Standard_Integer): void;
  Destroy(): void;
  Length(): Standard_Integer;
  Append(Value: Standard_Real): void;
  SetValue(Index: Standard_Integer, Value: Standard_Real): void;
  Value(Index: Standard_Integer): Standard_Real;
  ChangeValue(Index: Standard_Integer): Standard_Real;
  IsEqual(Other: IntTools_CArray1OfReal): Standard_Boolean;
}

  export declare class IntTools_CArray1OfReal_1 extends IntTools_CArray1OfReal {
    constructor(Length: Standard_Integer);
  }

  export declare class IntTools_CArray1OfReal_2 extends IntTools_CArray1OfReal {
    constructor(Item: Standard_Real, Length: Standard_Integer);
  }

export declare class IntTools_CurveRangeSampleMapHasher {
  constructor();
  HashCode(theKey: IntTools_CurveRangeSample, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(S1: IntTools_CurveRangeSample, S2: IntTools_CurveRangeSample): Standard_Boolean;
}

export declare class IntTools_CurveRangeLocalizeData {
  constructor(theNbSample: Standard_Integer, theMinRange: Standard_Real)
  GetNbSample(): Standard_Integer;
  GetMinRange(): Standard_Real;
  AddOutRange(theRange: IntTools_CurveRangeSample): void;
  AddBox(theRange: IntTools_CurveRangeSample, theBox: Bnd_Box): void;
  FindBox(theRange: IntTools_CurveRangeSample, theBox: Bnd_Box): Standard_Boolean;
  IsRangeOut(theRange: IntTools_CurveRangeSample): Standard_Boolean;
  ListRangeOut(theList: IntTools_ListOfCurveRangeSample): void;
}

export declare class IntTools_SurfaceRangeSampleMapHasher {
  constructor();
  HashCode(theKey: IntTools_SurfaceRangeSample, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(S1: IntTools_SurfaceRangeSample, S2: IntTools_SurfaceRangeSample): Standard_Boolean;
}

export declare class IntTools_EdgeEdge {
  SetEdge1_1(theEdge: TopoDS_Edge): void;
  SetEdge1_2(theEdge: TopoDS_Edge, aT1: Standard_Real, aT2: Standard_Real): void;
  SetRange1_1(theRange1: IntTools_Range): void;
  SetRange1_2(aT1: Standard_Real, aT2: Standard_Real): void;
  SetEdge2_1(theEdge: TopoDS_Edge): void;
  SetEdge2_2(theEdge: TopoDS_Edge, aT1: Standard_Real, aT2: Standard_Real): void;
  SetRange2_1(theRange: IntTools_Range): void;
  SetRange2_2(aT1: Standard_Real, aT2: Standard_Real): void;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  FuzzyValue(): Standard_Real;
  CommonParts(): IntTools_SequenceOfCommonPrts;
  UseQuickCoincidenceCheck(bFlag: Standard_Boolean): void;
  IsCoincidenceCheckedQuickly(): Standard_Boolean;
}

  export declare class IntTools_EdgeEdge_1 extends IntTools_EdgeEdge {
    constructor();
  }

  export declare class IntTools_EdgeEdge_2 extends IntTools_EdgeEdge {
    constructor(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge);
  }

  export declare class IntTools_EdgeEdge_3 extends IntTools_EdgeEdge {
    constructor(theEdge1: TopoDS_Edge, aT11: Standard_Real, aT12: Standard_Real, theEdge2: TopoDS_Edge, aT21: Standard_Real, aT22: Standard_Real);
  }

export declare class IntTools_EdgeFace {
  constructor()
  SetEdge(theEdge: TopoDS_Edge): void;
  Edge(): TopoDS_Edge;
  SetFace(theFace: TopoDS_Face): void;
  Face(): TopoDS_Face;
  SetRange_1(theRange: IntTools_Range): void;
  SetRange_2(theFirst: Standard_Real, theLast: Standard_Real): void;
  Range(): IntTools_Range;
  SetContext(theContext: any): void;
  Context(): any;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  FuzzyValue(): Standard_Real;
  UseQuickCoincidenceCheck(theFlag: Standard_Boolean): void;
  IsCoincidenceCheckedQuickly(): Standard_Boolean;
  Perform(): void;
  IsDone(): Standard_Boolean;
  ErrorStatus(): Standard_Integer;
  CommonParts(): IntTools_SequenceOfCommonPrts;
  MinimalDistance(): Standard_Real;
}

export declare class IntTools_FClass2d {
  Init(F: TopoDS_Face, Tol: Standard_Real): void;
  PerformInfinitePoint(): TopAbs_State;
  Perform(Puv: gp_Pnt2d, RecadreOnPeriodic: Standard_Boolean): TopAbs_State;
  Destroy(): void;
  TestOnRestriction(Puv: gp_Pnt2d, Tol: Standard_Real, RecadreOnPeriodic: Standard_Boolean): TopAbs_State;
  IsHole(): Standard_Boolean;
}

  export declare class IntTools_FClass2d_1 extends IntTools_FClass2d {
    constructor();
  }

  export declare class IntTools_FClass2d_2 extends IntTools_FClass2d {
    constructor(F: TopoDS_Face, Tol: Standard_Real);
  }

export declare class IntTools_PntOn2Faces {
  SetP1(aP1: IntTools_PntOnFace): void;
  SetP2(aP2: IntTools_PntOnFace): void;
  SetValid(bF: Standard_Boolean): void;
  P1(): IntTools_PntOnFace;
  P2(): IntTools_PntOnFace;
  IsValid(): Standard_Boolean;
}

  export declare class IntTools_PntOn2Faces_1 extends IntTools_PntOn2Faces {
    constructor();
  }

  export declare class IntTools_PntOn2Faces_2 extends IntTools_PntOn2Faces {
    constructor(aP1: IntTools_PntOnFace, aP2: IntTools_PntOnFace);
  }

export declare class IntTools_FaceFace {
  constructor()
  SetParameters(ApproxCurves: Standard_Boolean, ComputeCurveOnS1: Standard_Boolean, ComputeCurveOnS2: Standard_Boolean, ApproximationTolerance: Standard_Real): void;
  Perform(F1: TopoDS_Face, F2: TopoDS_Face): void;
  IsDone(): Standard_Boolean;
  Lines(): IntTools_SequenceOfCurves;
  Points(): IntTools_SequenceOfPntOn2Faces;
  Face1(): TopoDS_Face;
  Face2(): TopoDS_Face;
  TangentFaces(): Standard_Boolean;
  PrepareLines3D(bToSplit: Standard_Boolean): void;
  SetList(ListOfPnts: IntSurf_ListOfPntOn2S): void;
  SetContext(aContext: any): void;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  FuzzyValue(): Standard_Real;
  Context(): any;
}

export declare class IntTools_SurfaceRangeLocalizeData {
  Assign(Other: IntTools_SurfaceRangeLocalizeData): IntTools_SurfaceRangeLocalizeData;
  GetNbSampleU(): Standard_Integer;
  GetNbSampleV(): Standard_Integer;
  GetMinRangeU(): Standard_Real;
  GetMinRangeV(): Standard_Real;
  AddOutRange(theRange: IntTools_SurfaceRangeSample): void;
  AddBox(theRange: IntTools_SurfaceRangeSample, theBox: Bnd_Box): void;
  FindBox(theRange: IntTools_SurfaceRangeSample, theBox: Bnd_Box): Standard_Boolean;
  IsRangeOut(theRange: IntTools_SurfaceRangeSample): Standard_Boolean;
  ListRangeOut(theList: IntTools_ListOfSurfaceRangeSample): void;
  RemoveRangeOutAll(): void;
  SetGridDeflection(theDeflection: Standard_Real): void;
  GetGridDeflection(): Standard_Real;
  SetRangeUGrid(theNbUGrid: Standard_Integer): void;
  GetRangeUGrid(): Standard_Integer;
  SetUParam(theIndex: Standard_Integer, theUParam: Standard_Real): void;
  GetUParam(theIndex: Standard_Integer): Standard_Real;
  SetRangeVGrid(theNbVGrid: Standard_Integer): void;
  GetRangeVGrid(): Standard_Integer;
  SetVParam(theIndex: Standard_Integer, theVParam: Standard_Real): void;
  GetVParam(theIndex: Standard_Integer): Standard_Real;
  SetGridPoint(theUIndex: Standard_Integer, theVIndex: Standard_Integer, thePoint: gp_Pnt): void;
  GetGridPoint(theUIndex: Standard_Integer, theVIndex: Standard_Integer): gp_Pnt;
  SetFrame(theUMin: Standard_Real, theUMax: Standard_Real, theVMin: Standard_Real, theVMax: Standard_Real): void;
  GetNBUPointsInFrame(): Standard_Integer;
  GetNBVPointsInFrame(): Standard_Integer;
  GetPointInFrame(theUIndex: Standard_Integer, theVIndex: Standard_Integer): gp_Pnt;
  GetUParamInFrame(theIndex: Standard_Integer): Standard_Real;
  GetVParamInFrame(theIndex: Standard_Integer): Standard_Real;
  ClearGrid(): void;
}

  export declare class IntTools_SurfaceRangeLocalizeData_1 extends IntTools_SurfaceRangeLocalizeData {
    constructor();
  }

  export declare class IntTools_SurfaceRangeLocalizeData_2 extends IntTools_SurfaceRangeLocalizeData {
    constructor(theNbSampleU: Standard_Integer, theNbSampleV: Standard_Integer, theMinRangeU: Standard_Real, theMinRangeV: Standard_Real);
  }

  export declare class IntTools_SurfaceRangeLocalizeData_3 extends IntTools_SurfaceRangeLocalizeData {
    constructor(Other: IntTools_SurfaceRangeLocalizeData);
  }

export declare class IntTools_Tools {
  constructor();
  ComputeVV(V1: TopoDS_Vertex, V2: TopoDS_Vertex): Standard_Integer;
  HasInternalEdge(aW: TopoDS_Wire): Standard_Boolean;
  MakeFaceFromWireAndFace(aW: TopoDS_Wire, aF: TopoDS_Face, aFNew: TopoDS_Face): void;
  ClassifyPointByFace(aF: TopoDS_Face, P: gp_Pnt2d): TopAbs_State;
  IsVertex_1(E: TopoDS_Edge, t: Standard_Real): Standard_Boolean;
  IsVertex_2(E: TopoDS_Edge, V: TopoDS_Vertex, t: Standard_Real): Standard_Boolean;
  IsVertex_3(aCmnPrt: IntTools_CommonPrt): Standard_Boolean;
  IsMiddlePointsEqual(E1: TopoDS_Edge, E2: TopoDS_Edge): Standard_Boolean;
  IsVertex_4(aP: gp_Pnt, aTolPV: Standard_Real, aV: TopoDS_Vertex): Standard_Boolean;
  IntermediatePoint(aFirst: Standard_Real, aLast: Standard_Real): Standard_Real;
  SplitCurve(aC: IntTools_Curve, aS: IntTools_SequenceOfCurves): Standard_Integer;
  RejectLines(aSIn: IntTools_SequenceOfCurves, aSOut: IntTools_SequenceOfCurves): void;
  IsDirsCoinside_1(D1: gp_Dir, D2: gp_Dir): Standard_Boolean;
  IsDirsCoinside_2(D1: gp_Dir, D2: gp_Dir, aTol: Standard_Real): Standard_Boolean;
  IsClosed(aC: any): Standard_Boolean;
  CurveTolerance(aC: any, aTolBase: Standard_Real): Standard_Real;
  CheckCurve(theCurve: IntTools_Curve, theBox: Bnd_Box): Standard_Boolean;
  IsOnPave(theT: Standard_Real, theRange: IntTools_Range, theTol: Standard_Real): Standard_Boolean;
  VertexParameters(theCP: IntTools_CommonPrt, theT1: Standard_Real, theT2: Standard_Real): void;
  VertexParameter(theCP: IntTools_CommonPrt, theT: Standard_Real): void;
  IsOnPave1(theT: Standard_Real, theRange: IntTools_Range, theTol: Standard_Real): Standard_Boolean;
  IsInRange(theRRef: IntTools_Range, theR: IntTools_Range, theTol: Standard_Real): Standard_Boolean;
  SegPln(theLin: gp_Lin, theTLin1: Standard_Real, theTLin2: Standard_Real, theTolLin: Standard_Real, thePln: gp_Pln, theTolPln: Standard_Real, theP: gp_Pnt, theT: Standard_Real, theTolP: Standard_Real, theTmin: Standard_Real, theTmax: Standard_Real): Standard_Integer;
  ComputeTolerance(theCurve3D: any, theCurve2D: any, theSurf: any, theFirst: Standard_Real, theLast: Standard_Real, theMaxDist: Standard_Real, theMaxPar: Standard_Real, theTolRange: Standard_Real): Standard_Boolean;
  ComputeIntRange(theTol1: Standard_Real, theTol2: Standard_Real, theAngle: Standard_Real): Standard_Real;
}

export declare class IntTools_TopolTool extends Adaptor3d_TopolTool {
  Initialize_1(): void;
  Initialize_2(theSurface: any): void;
  ComputeSamplePoints(): void;
  NbSamplesU(): Standard_Integer;
  NbSamplesV(): Standard_Integer;
  NbSamples(): Standard_Integer;
  SamplePoint(Index: Standard_Integer, P2d: gp_Pnt2d, P3d: gp_Pnt): void;
  SamplePnts(theDefl: Standard_Real, theNUmin: Standard_Integer, theNVmin: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IntTools_TopolTool_1 extends IntTools_TopolTool {
    constructor();
  }

  export declare class IntTools_TopolTool_2 extends IntTools_TopolTool {
    constructor(theSurface: any);
  }

export declare class IntTools_WLineTool {
  constructor();
  NotUseSurfacesForApprox(aF1: TopoDS_Face, aF2: TopoDS_Face, WL: any, ifprm: Standard_Integer, ilprm: Standard_Integer): Standard_Boolean;
  DecompositionOfWLine(theWLine: any, theSurface1: any, theSurface2: any, theFace1: TopoDS_Face, theFace2: TopoDS_Face, theLConstructor: GeomInt_LineConstructor, theAvoidLConstructor: Standard_Boolean, theTol: Standard_Real, theNewLines: IntPatch_SequenceOfLine, theReachedTol3d: Standard_Real, a10: any): Standard_Boolean;
}

export declare class BOPAlgo_ListOfCheckResult extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: BOPAlgo_ListOfCheckResult): BOPAlgo_ListOfCheckResult;
  Clear(theAllocator: any): void;
  First_1(): BOPAlgo_CheckResult;
  First_2(): BOPAlgo_CheckResult;
  Last_1(): BOPAlgo_CheckResult;
  Last_2(): BOPAlgo_CheckResult;
  Append_1(theItem: BOPAlgo_CheckResult): BOPAlgo_CheckResult;
  Append_3(theOther: BOPAlgo_ListOfCheckResult): void;
  Prepend_1(theItem: BOPAlgo_CheckResult): BOPAlgo_CheckResult;
  Prepend_2(theOther: BOPAlgo_ListOfCheckResult): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class BOPAlgo_ListOfCheckResult_1 extends BOPAlgo_ListOfCheckResult {
    constructor();
  }

  export declare class BOPAlgo_ListOfCheckResult_2 extends BOPAlgo_ListOfCheckResult {
    constructor(theAllocator: any);
  }

  export declare class BOPAlgo_ListOfCheckResult_3 extends BOPAlgo_ListOfCheckResult {
    constructor(theOther: BOPAlgo_ListOfCheckResult);
  }

export declare class BOPDS_ListOfPave extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: BOPDS_ListOfPave): BOPDS_ListOfPave;
  Clear(theAllocator: any): void;
  First_1(): BOPDS_Pave;
  First_2(): BOPDS_Pave;
  Last_1(): BOPDS_Pave;
  Last_2(): BOPDS_Pave;
  Append_1(theItem: BOPDS_Pave): BOPDS_Pave;
  Append_3(theOther: BOPDS_ListOfPave): void;
  Prepend_1(theItem: BOPDS_Pave): BOPDS_Pave;
  Prepend_2(theOther: BOPDS_ListOfPave): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class BOPDS_ListOfPave_1 extends BOPDS_ListOfPave {
    constructor();
  }

  export declare class BOPDS_ListOfPave_2 extends BOPDS_ListOfPave {
    constructor(theAllocator: any);
  }

  export declare class BOPDS_ListOfPave_3 extends BOPDS_ListOfPave {
    constructor(theOther: BOPDS_ListOfPave);
  }

export declare class Handle_BOPDS_PaveBlock {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BOPDS_PaveBlock): void;
  get(): BOPDS_PaveBlock;
}

  export declare class Handle_BOPDS_PaveBlock_1 extends Handle_BOPDS_PaveBlock {
    constructor();
  }

  export declare class Handle_BOPDS_PaveBlock_2 extends Handle_BOPDS_PaveBlock {
    constructor(thePtr: BOPDS_PaveBlock);
  }

  export declare class Handle_BOPDS_PaveBlock_3 extends Handle_BOPDS_PaveBlock {
    constructor(theHandle: Handle_BOPDS_PaveBlock);
  }

  export declare class Handle_BOPDS_PaveBlock_4 extends Handle_BOPDS_PaveBlock {
    constructor(theHandle: Handle_BOPDS_PaveBlock);
  }

export declare class BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks): void;
  Assign(theOther: BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks): BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TopoDS_Shape, theItem: BOPDS_CoupleOfPaveBlocks): Standard_Integer;
  Contains(theKey1: TopoDS_Shape): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopoDS_Shape, theItem: BOPDS_CoupleOfPaveBlocks): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopoDS_Shape): void;
  FindKey(theIndex: Standard_Integer): TopoDS_Shape;
  FindFromIndex(theIndex: Standard_Integer): BOPDS_CoupleOfPaveBlocks;
  ChangeFromIndex(theIndex: Standard_Integer): BOPDS_CoupleOfPaveBlocks;
  FindIndex(theKey1: TopoDS_Shape): Standard_Integer;
  FindFromKey_1(theKey1: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  ChangeFromKey(theKey1: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  Seek(theKey1: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  ChangeSeek(theKey1: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  FindFromKey_2(theKey1: TopoDS_Shape, theValue: BOPDS_CoupleOfPaveBlocks): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_1 extends BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks {
    constructor();
  }

  export declare class BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_2 extends BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_3 extends BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks {
    constructor(theOther: BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks);
  }

export declare class BOPDS_MapOfPair extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BOPDS_MapOfPair): void;
  Assign(theOther: BOPDS_MapOfPair): BOPDS_MapOfPair;
  ReSize(N: Standard_Integer): void;
  Add(K: BOPDS_Pair): Standard_Boolean;
  Added(K: BOPDS_Pair): BOPDS_Pair;
  Contains_1(K: BOPDS_Pair): Standard_Boolean;
  Remove(K: BOPDS_Pair): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: BOPDS_MapOfPair): Standard_Boolean;
  Contains_2(theOther: BOPDS_MapOfPair): Standard_Boolean;
  Union(theLeft: BOPDS_MapOfPair, theRight: BOPDS_MapOfPair): void;
  Unite(theOther: BOPDS_MapOfPair): Standard_Boolean;
  HasIntersection(theMap: BOPDS_MapOfPair): Standard_Boolean;
  Intersection(theLeft: BOPDS_MapOfPair, theRight: BOPDS_MapOfPair): void;
  Intersect(theOther: BOPDS_MapOfPair): Standard_Boolean;
  Subtraction(theLeft: BOPDS_MapOfPair, theRight: BOPDS_MapOfPair): void;
  Subtract(theOther: BOPDS_MapOfPair): Standard_Boolean;
  Difference(theLeft: BOPDS_MapOfPair, theRight: BOPDS_MapOfPair): void;
  Differ(theOther: BOPDS_MapOfPair): Standard_Boolean;
}

  export declare class BOPDS_MapOfPair_1 extends BOPDS_MapOfPair {
    constructor();
  }

  export declare class BOPDS_MapOfPair_2 extends BOPDS_MapOfPair {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BOPDS_MapOfPair_3 extends BOPDS_MapOfPair {
    constructor(theOther: BOPDS_MapOfPair);
  }

export declare class BOPDS_VectorOfCurve extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfCurve, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_Curve): BOPDS_Curve;
  Appended(): BOPDS_Curve;
  Value(theIndex: Standard_Integer): BOPDS_Curve;
  First(): BOPDS_Curve;
  ChangeFirst(): BOPDS_Curve;
  Last(): BOPDS_Curve;
  ChangeLast(): BOPDS_Curve;
  ChangeValue(theIndex: Standard_Integer): BOPDS_Curve;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_Curve): BOPDS_Curve;
}

  export declare class BOPDS_VectorOfCurve_1 extends BOPDS_VectorOfCurve {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfCurve_2 extends BOPDS_VectorOfCurve {
    constructor(theOther: BOPDS_VectorOfCurve);
  }

export declare class BOPTools_ListOfConnexityBlock extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: BOPTools_ListOfConnexityBlock): BOPTools_ListOfConnexityBlock;
  Clear(theAllocator: any): void;
  First_1(): BOPTools_ConnexityBlock;
  First_2(): BOPTools_ConnexityBlock;
  Last_1(): BOPTools_ConnexityBlock;
  Last_2(): BOPTools_ConnexityBlock;
  Append_1(theItem: BOPTools_ConnexityBlock): BOPTools_ConnexityBlock;
  Append_3(theOther: BOPTools_ListOfConnexityBlock): void;
  Prepend_1(theItem: BOPTools_ConnexityBlock): BOPTools_ConnexityBlock;
  Prepend_2(theOther: BOPTools_ListOfConnexityBlock): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class BOPTools_ListOfConnexityBlock_1 extends BOPTools_ListOfConnexityBlock {
    constructor();
  }

  export declare class BOPTools_ListOfConnexityBlock_2 extends BOPTools_ListOfConnexityBlock {
    constructor(theAllocator: any);
  }

  export declare class BOPTools_ListOfConnexityBlock_3 extends BOPTools_ListOfConnexityBlock {
    constructor(theOther: BOPTools_ListOfConnexityBlock);
  }

export declare class Handle_IntTools_Context {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntTools_Context): void;
  get(): IntTools_Context;
}

  export declare class Handle_IntTools_Context_1 extends Handle_IntTools_Context {
    constructor();
  }

  export declare class Handle_IntTools_Context_2 extends Handle_IntTools_Context {
    constructor(thePtr: IntTools_Context);
  }

  export declare class Handle_IntTools_Context_3 extends Handle_IntTools_Context {
    constructor(theHandle: Handle_IntTools_Context);
  }

  export declare class Handle_IntTools_Context_4 extends Handle_IntTools_Context {
    constructor(theHandle: Handle_IntTools_Context);
  }

export declare class Handle_BOPDS_CommonBlock {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BOPDS_CommonBlock): void;
  get(): BOPDS_CommonBlock;
}

  export declare class Handle_BOPDS_CommonBlock_1 extends Handle_BOPDS_CommonBlock {
    constructor();
  }

  export declare class Handle_BOPDS_CommonBlock_2 extends Handle_BOPDS_CommonBlock {
    constructor(thePtr: BOPDS_CommonBlock);
  }

  export declare class Handle_BOPDS_CommonBlock_3 extends Handle_BOPDS_CommonBlock {
    constructor(theHandle: Handle_BOPDS_CommonBlock);
  }

  export declare class Handle_BOPDS_CommonBlock_4 extends Handle_BOPDS_CommonBlock {
    constructor(theHandle: Handle_BOPDS_CommonBlock);
  }

export declare class BOPDS_VectorOfFaceInfo extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfFaceInfo, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_FaceInfo): BOPDS_FaceInfo;
  Appended(): BOPDS_FaceInfo;
  Value(theIndex: Standard_Integer): BOPDS_FaceInfo;
  First(): BOPDS_FaceInfo;
  ChangeFirst(): BOPDS_FaceInfo;
  Last(): BOPDS_FaceInfo;
  ChangeLast(): BOPDS_FaceInfo;
  ChangeValue(theIndex: Standard_Integer): BOPDS_FaceInfo;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_FaceInfo): BOPDS_FaceInfo;
}

  export declare class BOPDS_VectorOfFaceInfo_1 extends BOPDS_VectorOfFaceInfo {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfFaceInfo_2 extends BOPDS_VectorOfFaceInfo {
    constructor(theOther: BOPDS_VectorOfFaceInfo);
  }

export declare class BOPDS_VectorOfIndexRange extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfIndexRange, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_IndexRange): BOPDS_IndexRange;
  Appended(): BOPDS_IndexRange;
  Value(theIndex: Standard_Integer): BOPDS_IndexRange;
  First(): BOPDS_IndexRange;
  ChangeFirst(): BOPDS_IndexRange;
  Last(): BOPDS_IndexRange;
  ChangeLast(): BOPDS_IndexRange;
  ChangeValue(theIndex: Standard_Integer): BOPDS_IndexRange;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_IndexRange): BOPDS_IndexRange;
}

  export declare class BOPDS_VectorOfIndexRange_1 extends BOPDS_VectorOfIndexRange {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfIndexRange_2 extends BOPDS_VectorOfIndexRange {
    constructor(theOther: BOPDS_VectorOfIndexRange);
  }

export declare class IntTools_SequenceOfRanges extends NCollection_BaseSequence {
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
  Assign(theOther: IntTools_SequenceOfRanges): IntTools_SequenceOfRanges;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntTools_Range): void;
  Append_2(theSeq: IntTools_SequenceOfRanges): void;
  Prepend_1(theItem: IntTools_Range): void;
  Prepend_2(theSeq: IntTools_SequenceOfRanges): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntTools_Range): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRanges): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRanges): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntTools_Range): void;
  Split(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRanges): void;
  First(): IntTools_Range;
  ChangeFirst(): IntTools_Range;
  Last(): IntTools_Range;
  ChangeLast(): IntTools_Range;
  Value(theIndex: Standard_Integer): IntTools_Range;
  ChangeValue(theIndex: Standard_Integer): IntTools_Range;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_Range): void;
}

  export declare class IntTools_SequenceOfRanges_1 extends IntTools_SequenceOfRanges {
    constructor();
  }

  export declare class IntTools_SequenceOfRanges_2 extends IntTools_SequenceOfRanges {
    constructor(theAllocator: any);
  }

  export declare class IntTools_SequenceOfRanges_3 extends IntTools_SequenceOfRanges {
    constructor(theOther: IntTools_SequenceOfRanges);
  }

export declare class BOPDS_VectorOfPoint extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfPoint, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_Point): BOPDS_Point;
  Appended(): BOPDS_Point;
  Value(theIndex: Standard_Integer): BOPDS_Point;
  First(): BOPDS_Point;
  ChangeFirst(): BOPDS_Point;
  Last(): BOPDS_Point;
  ChangeLast(): BOPDS_Point;
  ChangeValue(theIndex: Standard_Integer): BOPDS_Point;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_Point): BOPDS_Point;
}

  export declare class BOPDS_VectorOfPoint_1 extends BOPDS_VectorOfPoint {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfPoint_2 extends BOPDS_VectorOfPoint {
    constructor(theOther: BOPDS_VectorOfPoint);
  }

export declare class BOPDS_VectorOfInterfEE extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfEE, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfEE): BOPDS_InterfEE;
  Appended(): BOPDS_InterfEE;
  Value(theIndex: Standard_Integer): BOPDS_InterfEE;
  First(): BOPDS_InterfEE;
  ChangeFirst(): BOPDS_InterfEE;
  Last(): BOPDS_InterfEE;
  ChangeLast(): BOPDS_InterfEE;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfEE;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfEE): BOPDS_InterfEE;
}

  export declare class BOPDS_VectorOfInterfEE_1 extends BOPDS_VectorOfInterfEE {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfEE_2 extends BOPDS_VectorOfInterfEE {
    constructor(theOther: BOPDS_VectorOfInterfEE);
  }

export declare class BOPDS_VectorOfInterfEF extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfEF, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfEF): BOPDS_InterfEF;
  Appended(): BOPDS_InterfEF;
  Value(theIndex: Standard_Integer): BOPDS_InterfEF;
  First(): BOPDS_InterfEF;
  ChangeFirst(): BOPDS_InterfEF;
  Last(): BOPDS_InterfEF;
  ChangeLast(): BOPDS_InterfEF;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfEF;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfEF): BOPDS_InterfEF;
}

  export declare class BOPDS_VectorOfInterfEF_1 extends BOPDS_VectorOfInterfEF {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfEF_2 extends BOPDS_VectorOfInterfEF {
    constructor(theOther: BOPDS_VectorOfInterfEF);
  }

export declare class BOPDS_VectorOfInterfEZ extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfEZ, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfEZ): BOPDS_InterfEZ;
  Appended(): BOPDS_InterfEZ;
  Value(theIndex: Standard_Integer): BOPDS_InterfEZ;
  First(): BOPDS_InterfEZ;
  ChangeFirst(): BOPDS_InterfEZ;
  Last(): BOPDS_InterfEZ;
  ChangeLast(): BOPDS_InterfEZ;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfEZ;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfEZ): BOPDS_InterfEZ;
}

  export declare class BOPDS_VectorOfInterfEZ_1 extends BOPDS_VectorOfInterfEZ {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfEZ_2 extends BOPDS_VectorOfInterfEZ {
    constructor(theOther: BOPDS_VectorOfInterfEZ);
  }

export declare class BOPDS_VectorOfInterfFF extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfFF, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfFF): BOPDS_InterfFF;
  Appended(): BOPDS_InterfFF;
  Value(theIndex: Standard_Integer): BOPDS_InterfFF;
  First(): BOPDS_InterfFF;
  ChangeFirst(): BOPDS_InterfFF;
  Last(): BOPDS_InterfFF;
  ChangeLast(): BOPDS_InterfFF;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfFF;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfFF): BOPDS_InterfFF;
}

  export declare class BOPDS_VectorOfInterfFF_1 extends BOPDS_VectorOfInterfFF {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfFF_2 extends BOPDS_VectorOfInterfFF {
    constructor(theOther: BOPDS_VectorOfInterfFF);
  }

export declare class BOPDS_VectorOfInterfFZ extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfFZ, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfFZ): BOPDS_InterfFZ;
  Appended(): BOPDS_InterfFZ;
  Value(theIndex: Standard_Integer): BOPDS_InterfFZ;
  First(): BOPDS_InterfFZ;
  ChangeFirst(): BOPDS_InterfFZ;
  Last(): BOPDS_InterfFZ;
  ChangeLast(): BOPDS_InterfFZ;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfFZ;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfFZ): BOPDS_InterfFZ;
}

  export declare class BOPDS_VectorOfInterfFZ_1 extends BOPDS_VectorOfInterfFZ {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfFZ_2 extends BOPDS_VectorOfInterfFZ {
    constructor(theOther: BOPDS_VectorOfInterfFZ);
  }

export declare class BOPDS_VectorOfInterfVE extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfVE, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfVE): BOPDS_InterfVE;
  Appended(): BOPDS_InterfVE;
  Value(theIndex: Standard_Integer): BOPDS_InterfVE;
  First(): BOPDS_InterfVE;
  ChangeFirst(): BOPDS_InterfVE;
  Last(): BOPDS_InterfVE;
  ChangeLast(): BOPDS_InterfVE;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfVE;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfVE): BOPDS_InterfVE;
}

  export declare class BOPDS_VectorOfInterfVE_1 extends BOPDS_VectorOfInterfVE {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfVE_2 extends BOPDS_VectorOfInterfVE {
    constructor(theOther: BOPDS_VectorOfInterfVE);
  }

export declare class BOPDS_VectorOfInterfVF extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfVF, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfVF): BOPDS_InterfVF;
  Appended(): BOPDS_InterfVF;
  Value(theIndex: Standard_Integer): BOPDS_InterfVF;
  First(): BOPDS_InterfVF;
  ChangeFirst(): BOPDS_InterfVF;
  Last(): BOPDS_InterfVF;
  ChangeLast(): BOPDS_InterfVF;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfVF;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfVF): BOPDS_InterfVF;
}

  export declare class BOPDS_VectorOfInterfVF_1 extends BOPDS_VectorOfInterfVF {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfVF_2 extends BOPDS_VectorOfInterfVF {
    constructor(theOther: BOPDS_VectorOfInterfVF);
  }

export declare class BOPDS_VectorOfInterfVV extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfVV, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfVV): BOPDS_InterfVV;
  Appended(): BOPDS_InterfVV;
  Value(theIndex: Standard_Integer): BOPDS_InterfVV;
  First(): BOPDS_InterfVV;
  ChangeFirst(): BOPDS_InterfVV;
  Last(): BOPDS_InterfVV;
  ChangeLast(): BOPDS_InterfVV;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfVV;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfVV): BOPDS_InterfVV;
}

  export declare class BOPDS_VectorOfInterfVV_1 extends BOPDS_VectorOfInterfVV {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfVV_2 extends BOPDS_VectorOfInterfVV {
    constructor(theOther: BOPDS_VectorOfInterfVV);
  }

export declare class BOPDS_VectorOfInterfVZ extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfVZ, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfVZ): BOPDS_InterfVZ;
  Appended(): BOPDS_InterfVZ;
  Value(theIndex: Standard_Integer): BOPDS_InterfVZ;
  First(): BOPDS_InterfVZ;
  ChangeFirst(): BOPDS_InterfVZ;
  Last(): BOPDS_InterfVZ;
  ChangeLast(): BOPDS_InterfVZ;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfVZ;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfVZ): BOPDS_InterfVZ;
}

  export declare class BOPDS_VectorOfInterfVZ_1 extends BOPDS_VectorOfInterfVZ {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfVZ_2 extends BOPDS_VectorOfInterfVZ {
    constructor(theOther: BOPDS_VectorOfInterfVZ);
  }

export declare class BOPDS_VectorOfInterfZZ extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfInterfZZ, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_InterfZZ): BOPDS_InterfZZ;
  Appended(): BOPDS_InterfZZ;
  Value(theIndex: Standard_Integer): BOPDS_InterfZZ;
  First(): BOPDS_InterfZZ;
  ChangeFirst(): BOPDS_InterfZZ;
  Last(): BOPDS_InterfZZ;
  ChangeLast(): BOPDS_InterfZZ;
  ChangeValue(theIndex: Standard_Integer): BOPDS_InterfZZ;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_InterfZZ): BOPDS_InterfZZ;
}

  export declare class BOPDS_VectorOfInterfZZ_1 extends BOPDS_VectorOfInterfZZ {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfInterfZZ_2 extends BOPDS_VectorOfInterfZZ {
    constructor(theOther: BOPDS_VectorOfInterfZZ);
  }

export declare class BOPDS_VectorOfListOfPaveBlock extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfListOfPaveBlock, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_ListOfPaveBlock): BOPDS_ListOfPaveBlock;
  Appended(): BOPDS_ListOfPaveBlock;
  Value(theIndex: Standard_Integer): BOPDS_ListOfPaveBlock;
  First(): BOPDS_ListOfPaveBlock;
  ChangeFirst(): BOPDS_ListOfPaveBlock;
  Last(): BOPDS_ListOfPaveBlock;
  ChangeLast(): BOPDS_ListOfPaveBlock;
  ChangeValue(theIndex: Standard_Integer): BOPDS_ListOfPaveBlock;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_ListOfPaveBlock): BOPDS_ListOfPaveBlock;
}

  export declare class BOPDS_VectorOfListOfPaveBlock_1 extends BOPDS_VectorOfListOfPaveBlock {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfListOfPaveBlock_2 extends BOPDS_VectorOfListOfPaveBlock {
    constructor(theOther: BOPDS_VectorOfListOfPaveBlock);
  }

export declare class BOPDS_VectorOfShapeInfo extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfShapeInfo, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_ShapeInfo): BOPDS_ShapeInfo;
  Appended(): BOPDS_ShapeInfo;
  Value(theIndex: Standard_Integer): BOPDS_ShapeInfo;
  First(): BOPDS_ShapeInfo;
  ChangeFirst(): BOPDS_ShapeInfo;
  Last(): BOPDS_ShapeInfo;
  ChangeLast(): BOPDS_ShapeInfo;
  ChangeValue(theIndex: Standard_Integer): BOPDS_ShapeInfo;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_ShapeInfo): BOPDS_ShapeInfo;
}

  export declare class BOPDS_VectorOfShapeInfo_1 extends BOPDS_VectorOfShapeInfo {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfShapeInfo_2 extends BOPDS_VectorOfShapeInfo {
    constructor(theOther: BOPDS_VectorOfShapeInfo);
  }

export declare class BOPDS_DataMapOfIntegerListOfPaveBlock extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BOPDS_DataMapOfIntegerListOfPaveBlock): void;
  Assign(theOther: BOPDS_DataMapOfIntegerListOfPaveBlock): BOPDS_DataMapOfIntegerListOfPaveBlock;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: BOPDS_ListOfPaveBlock): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: BOPDS_ListOfPaveBlock): BOPDS_ListOfPaveBlock;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): BOPDS_ListOfPaveBlock;
  Find_1(theKey: Standard_Integer): BOPDS_ListOfPaveBlock;
  Find_2(theKey: Standard_Integer, theValue: BOPDS_ListOfPaveBlock): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): BOPDS_ListOfPaveBlock;
  ChangeFind(theKey: Standard_Integer): BOPDS_ListOfPaveBlock;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BOPDS_DataMapOfIntegerListOfPaveBlock_1 extends BOPDS_DataMapOfIntegerListOfPaveBlock {
    constructor();
  }

  export declare class BOPDS_DataMapOfIntegerListOfPaveBlock_2 extends BOPDS_DataMapOfIntegerListOfPaveBlock {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BOPDS_DataMapOfIntegerListOfPaveBlock_3 extends BOPDS_DataMapOfIntegerListOfPaveBlock {
    constructor(theOther: BOPDS_DataMapOfIntegerListOfPaveBlock);
  }

export declare class BOPDS_DataMapOfShapeCoupleOfPaveBlocks extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BOPDS_DataMapOfShapeCoupleOfPaveBlocks): void;
  Assign(theOther: BOPDS_DataMapOfShapeCoupleOfPaveBlocks): BOPDS_DataMapOfShapeCoupleOfPaveBlocks;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: BOPDS_CoupleOfPaveBlocks): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: BOPDS_CoupleOfPaveBlocks): BOPDS_CoupleOfPaveBlocks;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  Find_1(theKey: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  Find_2(theKey: TopoDS_Shape, theValue: BOPDS_CoupleOfPaveBlocks): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  ChangeFind(theKey: TopoDS_Shape): BOPDS_CoupleOfPaveBlocks;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BOPDS_DataMapOfShapeCoupleOfPaveBlocks_1 extends BOPDS_DataMapOfShapeCoupleOfPaveBlocks {
    constructor();
  }

  export declare class BOPDS_DataMapOfShapeCoupleOfPaveBlocks_2 extends BOPDS_DataMapOfShapeCoupleOfPaveBlocks {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BOPDS_DataMapOfShapeCoupleOfPaveBlocks_3 extends BOPDS_DataMapOfShapeCoupleOfPaveBlocks {
    constructor(theOther: BOPDS_DataMapOfShapeCoupleOfPaveBlocks);
  }

export declare class BOPDS_MapOfPave extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BOPDS_MapOfPave): void;
  Assign(theOther: BOPDS_MapOfPave): BOPDS_MapOfPave;
  ReSize(N: Standard_Integer): void;
  Add(K: BOPDS_Pave): Standard_Boolean;
  Added(K: BOPDS_Pave): BOPDS_Pave;
  Contains_1(K: BOPDS_Pave): Standard_Boolean;
  Remove(K: BOPDS_Pave): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: BOPDS_MapOfPave): Standard_Boolean;
  Contains_2(theOther: BOPDS_MapOfPave): Standard_Boolean;
  Union(theLeft: BOPDS_MapOfPave, theRight: BOPDS_MapOfPave): void;
  Unite(theOther: BOPDS_MapOfPave): Standard_Boolean;
  HasIntersection(theMap: BOPDS_MapOfPave): Standard_Boolean;
  Intersection(theLeft: BOPDS_MapOfPave, theRight: BOPDS_MapOfPave): void;
  Intersect(theOther: BOPDS_MapOfPave): Standard_Boolean;
  Subtraction(theLeft: BOPDS_MapOfPave, theRight: BOPDS_MapOfPave): void;
  Subtract(theOther: BOPDS_MapOfPave): Standard_Boolean;
  Difference(theLeft: BOPDS_MapOfPave, theRight: BOPDS_MapOfPave): void;
  Differ(theOther: BOPDS_MapOfPave): Standard_Boolean;
}

  export declare class BOPDS_MapOfPave_1 extends BOPDS_MapOfPave {
    constructor();
  }

  export declare class BOPDS_MapOfPave_2 extends BOPDS_MapOfPave {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BOPDS_MapOfPave_3 extends BOPDS_MapOfPave {
    constructor(theOther: BOPDS_MapOfPave);
  }

export declare class BOPDS_VectorOfPair extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfPair, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_Pair): BOPDS_Pair;
  Appended(): BOPDS_Pair;
  Value(theIndex: Standard_Integer): BOPDS_Pair;
  First(): BOPDS_Pair;
  ChangeFirst(): BOPDS_Pair;
  Last(): BOPDS_Pair;
  ChangeLast(): BOPDS_Pair;
  ChangeValue(theIndex: Standard_Integer): BOPDS_Pair;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_Pair): BOPDS_Pair;
}

  export declare class BOPDS_VectorOfPair_1 extends BOPDS_VectorOfPair {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfPair_2 extends BOPDS_VectorOfPair {
    constructor(theOther: BOPDS_VectorOfPair);
  }

export declare class BOPDS_VectorOfPave {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: BOPDS_Pave): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfPave): BOPDS_VectorOfPave;
  Move(theOther: BOPDS_VectorOfPave): BOPDS_VectorOfPave;
  First(): BOPDS_Pave;
  ChangeFirst(): BOPDS_Pave;
  Last(): BOPDS_Pave;
  ChangeLast(): BOPDS_Pave;
  Value(theIndex: Standard_Integer): BOPDS_Pave;
  ChangeValue(theIndex: Standard_Integer): BOPDS_Pave;
  SetValue(theIndex: Standard_Integer, theItem: BOPDS_Pave): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class BOPDS_VectorOfPave_1 extends BOPDS_VectorOfPave {
    constructor();
  }

  export declare class BOPDS_VectorOfPave_2 extends BOPDS_VectorOfPave {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class BOPDS_VectorOfPave_3 extends BOPDS_VectorOfPave {
    constructor(theOther: BOPDS_VectorOfPave);
  }

  export declare class BOPDS_VectorOfPave_4 extends BOPDS_VectorOfPave {
    constructor(theOther: BOPDS_VectorOfPave);
  }

  export declare class BOPDS_VectorOfPave_5 extends BOPDS_VectorOfPave {
    constructor(theBegin: BOPDS_Pave, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class BOPDS_VectorOfVectorOfPair extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BOPDS_VectorOfVectorOfPair, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BOPDS_VectorOfPair): BOPDS_VectorOfPair;
  Appended(): BOPDS_VectorOfPair;
  Value(theIndex: Standard_Integer): BOPDS_VectorOfPair;
  First(): BOPDS_VectorOfPair;
  ChangeFirst(): BOPDS_VectorOfPair;
  Last(): BOPDS_VectorOfPair;
  ChangeLast(): BOPDS_VectorOfPair;
  ChangeValue(theIndex: Standard_Integer): BOPDS_VectorOfPair;
  SetValue(theIndex: Standard_Integer, theValue: BOPDS_VectorOfPair): BOPDS_VectorOfPair;
}

  export declare class BOPDS_VectorOfVectorOfPair_1 extends BOPDS_VectorOfVectorOfPair {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BOPDS_VectorOfVectorOfPair_2 extends BOPDS_VectorOfVectorOfPair {
    constructor(theOther: BOPDS_VectorOfVectorOfPair);
  }

export declare class BOPTools_ListOfCoupleOfShape extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: BOPTools_ListOfCoupleOfShape): BOPTools_ListOfCoupleOfShape;
  Clear(theAllocator: any): void;
  First_1(): BOPTools_CoupleOfShape;
  First_2(): BOPTools_CoupleOfShape;
  Last_1(): BOPTools_CoupleOfShape;
  Last_2(): BOPTools_CoupleOfShape;
  Append_1(theItem: BOPTools_CoupleOfShape): BOPTools_CoupleOfShape;
  Append_3(theOther: BOPTools_ListOfCoupleOfShape): void;
  Prepend_1(theItem: BOPTools_CoupleOfShape): BOPTools_CoupleOfShape;
  Prepend_2(theOther: BOPTools_ListOfCoupleOfShape): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class BOPTools_ListOfCoupleOfShape_1 extends BOPTools_ListOfCoupleOfShape {
    constructor();
  }

  export declare class BOPTools_ListOfCoupleOfShape_2 extends BOPTools_ListOfCoupleOfShape {
    constructor(theAllocator: any);
  }

  export declare class BOPTools_ListOfCoupleOfShape_3 extends BOPTools_ListOfCoupleOfShape {
    constructor(theOther: BOPTools_ListOfCoupleOfShape);
  }

export declare class BOPTools_IndexedDataMapOfSetShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BOPTools_IndexedDataMapOfSetShape): void;
  Assign(theOther: BOPTools_IndexedDataMapOfSetShape): BOPTools_IndexedDataMapOfSetShape;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: BOPTools_Set, theItem: TopoDS_Shape): Standard_Integer;
  Contains(theKey1: BOPTools_Set): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: BOPTools_Set, theItem: TopoDS_Shape): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: BOPTools_Set): void;
  FindKey(theIndex: Standard_Integer): BOPTools_Set;
  FindFromIndex(theIndex: Standard_Integer): TopoDS_Shape;
  ChangeFromIndex(theIndex: Standard_Integer): TopoDS_Shape;
  FindIndex(theKey1: BOPTools_Set): Standard_Integer;
  FindFromKey_1(theKey1: BOPTools_Set): TopoDS_Shape;
  ChangeFromKey(theKey1: BOPTools_Set): TopoDS_Shape;
  Seek(theKey1: BOPTools_Set): TopoDS_Shape;
  ChangeSeek(theKey1: BOPTools_Set): TopoDS_Shape;
  FindFromKey_2(theKey1: BOPTools_Set, theValue: TopoDS_Shape): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class BOPTools_IndexedDataMapOfSetShape_1 extends BOPTools_IndexedDataMapOfSetShape {
    constructor();
  }

  export declare class BOPTools_IndexedDataMapOfSetShape_2 extends BOPTools_IndexedDataMapOfSetShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BOPTools_IndexedDataMapOfSetShape_3 extends BOPTools_IndexedDataMapOfSetShape {
    constructor(theOther: BOPTools_IndexedDataMapOfSetShape);
  }

export declare class BOPTools_MapOfSet extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: BOPTools_MapOfSet): void;
  Assign(theOther: BOPTools_MapOfSet): BOPTools_MapOfSet;
  ReSize(N: Standard_Integer): void;
  Add(K: BOPTools_Set): Standard_Boolean;
  Added(K: BOPTools_Set): BOPTools_Set;
  Contains_1(K: BOPTools_Set): Standard_Boolean;
  Remove(K: BOPTools_Set): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: BOPTools_MapOfSet): Standard_Boolean;
  Contains_2(theOther: BOPTools_MapOfSet): Standard_Boolean;
  Union(theLeft: BOPTools_MapOfSet, theRight: BOPTools_MapOfSet): void;
  Unite(theOther: BOPTools_MapOfSet): Standard_Boolean;
  HasIntersection(theMap: BOPTools_MapOfSet): Standard_Boolean;
  Intersection(theLeft: BOPTools_MapOfSet, theRight: BOPTools_MapOfSet): void;
  Intersect(theOther: BOPTools_MapOfSet): Standard_Boolean;
  Subtraction(theLeft: BOPTools_MapOfSet, theRight: BOPTools_MapOfSet): void;
  Subtract(theOther: BOPTools_MapOfSet): Standard_Boolean;
  Difference(theLeft: BOPTools_MapOfSet, theRight: BOPTools_MapOfSet): void;
  Differ(theOther: BOPTools_MapOfSet): Standard_Boolean;
}

  export declare class BOPTools_MapOfSet_1 extends BOPTools_MapOfSet {
    constructor();
  }

  export declare class BOPTools_MapOfSet_2 extends BOPTools_MapOfSet {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class BOPTools_MapOfSet_3 extends BOPTools_MapOfSet {
    constructor(theOther: BOPTools_MapOfSet);
  }

export declare class IntTools_SequenceOfRoots extends NCollection_BaseSequence {
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
  Assign(theOther: IntTools_SequenceOfRoots): IntTools_SequenceOfRoots;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntTools_Root): void;
  Append_2(theSeq: IntTools_SequenceOfRoots): void;
  Prepend_1(theItem: IntTools_Root): void;
  Prepend_2(theSeq: IntTools_SequenceOfRoots): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntTools_Root): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRoots): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRoots): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntTools_Root): void;
  Split(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfRoots): void;
  First(): IntTools_Root;
  ChangeFirst(): IntTools_Root;
  Last(): IntTools_Root;
  ChangeLast(): IntTools_Root;
  Value(theIndex: Standard_Integer): IntTools_Root;
  ChangeValue(theIndex: Standard_Integer): IntTools_Root;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_Root): void;
}

  export declare class IntTools_SequenceOfRoots_1 extends IntTools_SequenceOfRoots {
    constructor();
  }

  export declare class IntTools_SequenceOfRoots_2 extends IntTools_SequenceOfRoots {
    constructor(theAllocator: any);
  }

  export declare class IntTools_SequenceOfRoots_3 extends IntTools_SequenceOfRoots {
    constructor(theOther: IntTools_SequenceOfRoots);
  }

export declare class IntTools_Array1OfRange {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: IntTools_Range): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: IntTools_Array1OfRange): IntTools_Array1OfRange;
  Move(theOther: IntTools_Array1OfRange): IntTools_Array1OfRange;
  First(): IntTools_Range;
  ChangeFirst(): IntTools_Range;
  Last(): IntTools_Range;
  ChangeLast(): IntTools_Range;
  Value(theIndex: Standard_Integer): IntTools_Range;
  ChangeValue(theIndex: Standard_Integer): IntTools_Range;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_Range): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class IntTools_Array1OfRange_1 extends IntTools_Array1OfRange {
    constructor();
  }

  export declare class IntTools_Array1OfRange_2 extends IntTools_Array1OfRange {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class IntTools_Array1OfRange_3 extends IntTools_Array1OfRange {
    constructor(theOther: IntTools_Array1OfRange);
  }

  export declare class IntTools_Array1OfRange_4 extends IntTools_Array1OfRange {
    constructor(theOther: IntTools_Array1OfRange);
  }

  export declare class IntTools_Array1OfRange_5 extends IntTools_Array1OfRange {
    constructor(theBegin: IntTools_Range, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class IntTools_Array1OfRoots {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: IntTools_Root): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: IntTools_Array1OfRoots): IntTools_Array1OfRoots;
  Move(theOther: IntTools_Array1OfRoots): IntTools_Array1OfRoots;
  First(): IntTools_Root;
  ChangeFirst(): IntTools_Root;
  Last(): IntTools_Root;
  ChangeLast(): IntTools_Root;
  Value(theIndex: Standard_Integer): IntTools_Root;
  ChangeValue(theIndex: Standard_Integer): IntTools_Root;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_Root): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class IntTools_Array1OfRoots_1 extends IntTools_Array1OfRoots {
    constructor();
  }

  export declare class IntTools_Array1OfRoots_2 extends IntTools_Array1OfRoots {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class IntTools_Array1OfRoots_3 extends IntTools_Array1OfRoots {
    constructor(theOther: IntTools_Array1OfRoots);
  }

  export declare class IntTools_Array1OfRoots_4 extends IntTools_Array1OfRoots {
    constructor(theOther: IntTools_Array1OfRoots);
  }

  export declare class IntTools_Array1OfRoots_5 extends IntTools_Array1OfRoots {
    constructor(theBegin: IntTools_Root, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class IntTools_ListOfCurveRangeSample extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: IntTools_ListOfCurveRangeSample): IntTools_ListOfCurveRangeSample;
  Clear(theAllocator: any): void;
  First_1(): IntTools_CurveRangeSample;
  First_2(): IntTools_CurveRangeSample;
  Last_1(): IntTools_CurveRangeSample;
  Last_2(): IntTools_CurveRangeSample;
  Append_1(theItem: IntTools_CurveRangeSample): IntTools_CurveRangeSample;
  Append_3(theOther: IntTools_ListOfCurveRangeSample): void;
  Prepend_1(theItem: IntTools_CurveRangeSample): IntTools_CurveRangeSample;
  Prepend_2(theOther: IntTools_ListOfCurveRangeSample): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class IntTools_ListOfCurveRangeSample_1 extends IntTools_ListOfCurveRangeSample {
    constructor();
  }

  export declare class IntTools_ListOfCurveRangeSample_2 extends IntTools_ListOfCurveRangeSample {
    constructor(theAllocator: any);
  }

  export declare class IntTools_ListOfCurveRangeSample_3 extends IntTools_ListOfCurveRangeSample {
    constructor(theOther: IntTools_ListOfCurveRangeSample);
  }

export declare class IntTools_ListOfSurfaceRangeSample extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: IntTools_ListOfSurfaceRangeSample): IntTools_ListOfSurfaceRangeSample;
  Clear(theAllocator: any): void;
  First_1(): IntTools_SurfaceRangeSample;
  First_2(): IntTools_SurfaceRangeSample;
  Last_1(): IntTools_SurfaceRangeSample;
  Last_2(): IntTools_SurfaceRangeSample;
  Append_1(theItem: IntTools_SurfaceRangeSample): IntTools_SurfaceRangeSample;
  Append_3(theOther: IntTools_ListOfSurfaceRangeSample): void;
  Prepend_1(theItem: IntTools_SurfaceRangeSample): IntTools_SurfaceRangeSample;
  Prepend_2(theOther: IntTools_ListOfSurfaceRangeSample): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class IntTools_ListOfSurfaceRangeSample_1 extends IntTools_ListOfSurfaceRangeSample {
    constructor();
  }

  export declare class IntTools_ListOfSurfaceRangeSample_2 extends IntTools_ListOfSurfaceRangeSample {
    constructor(theAllocator: any);
  }

  export declare class IntTools_ListOfSurfaceRangeSample_3 extends IntTools_ListOfSurfaceRangeSample {
    constructor(theOther: IntTools_ListOfSurfaceRangeSample);
  }

export declare class IntTools_MapOfCurveSample extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: IntTools_MapOfCurveSample): void;
  Assign(theOther: IntTools_MapOfCurveSample): IntTools_MapOfCurveSample;
  ReSize(N: Standard_Integer): void;
  Add(K: IntTools_CurveRangeSample): Standard_Boolean;
  Added(K: IntTools_CurveRangeSample): IntTools_CurveRangeSample;
  Contains_1(K: IntTools_CurveRangeSample): Standard_Boolean;
  Remove(K: IntTools_CurveRangeSample): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: IntTools_MapOfCurveSample): Standard_Boolean;
  Contains_2(theOther: IntTools_MapOfCurveSample): Standard_Boolean;
  Union(theLeft: IntTools_MapOfCurveSample, theRight: IntTools_MapOfCurveSample): void;
  Unite(theOther: IntTools_MapOfCurveSample): Standard_Boolean;
  HasIntersection(theMap: IntTools_MapOfCurveSample): Standard_Boolean;
  Intersection(theLeft: IntTools_MapOfCurveSample, theRight: IntTools_MapOfCurveSample): void;
  Intersect(theOther: IntTools_MapOfCurveSample): Standard_Boolean;
  Subtraction(theLeft: IntTools_MapOfCurveSample, theRight: IntTools_MapOfCurveSample): void;
  Subtract(theOther: IntTools_MapOfCurveSample): Standard_Boolean;
  Difference(theLeft: IntTools_MapOfCurveSample, theRight: IntTools_MapOfCurveSample): void;
  Differ(theOther: IntTools_MapOfCurveSample): Standard_Boolean;
}

  export declare class IntTools_MapOfCurveSample_1 extends IntTools_MapOfCurveSample {
    constructor();
  }

  export declare class IntTools_MapOfCurveSample_2 extends IntTools_MapOfCurveSample {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class IntTools_MapOfCurveSample_3 extends IntTools_MapOfCurveSample {
    constructor(theOther: IntTools_MapOfCurveSample);
  }

export declare class IntTools_DataMapOfCurveSampleBox extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: IntTools_DataMapOfCurveSampleBox): void;
  Assign(theOther: IntTools_DataMapOfCurveSampleBox): IntTools_DataMapOfCurveSampleBox;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: IntTools_CurveRangeSample, theItem: Bnd_Box): Standard_Boolean;
  Bound(theKey: IntTools_CurveRangeSample, theItem: Bnd_Box): Bnd_Box;
  IsBound(theKey: IntTools_CurveRangeSample): Standard_Boolean;
  UnBind(theKey: IntTools_CurveRangeSample): Standard_Boolean;
  Seek(theKey: IntTools_CurveRangeSample): Bnd_Box;
  Find_1(theKey: IntTools_CurveRangeSample): Bnd_Box;
  Find_2(theKey: IntTools_CurveRangeSample, theValue: Bnd_Box): Standard_Boolean;
  ChangeSeek(theKey: IntTools_CurveRangeSample): Bnd_Box;
  ChangeFind(theKey: IntTools_CurveRangeSample): Bnd_Box;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class IntTools_DataMapOfCurveSampleBox_1 extends IntTools_DataMapOfCurveSampleBox {
    constructor();
  }

  export declare class IntTools_DataMapOfCurveSampleBox_2 extends IntTools_DataMapOfCurveSampleBox {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class IntTools_DataMapOfCurveSampleBox_3 extends IntTools_DataMapOfCurveSampleBox {
    constructor(theOther: IntTools_DataMapOfCurveSampleBox);
  }

export declare class IntTools_DataMapOfSurfaceSampleBox extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: IntTools_DataMapOfSurfaceSampleBox): void;
  Assign(theOther: IntTools_DataMapOfSurfaceSampleBox): IntTools_DataMapOfSurfaceSampleBox;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: IntTools_SurfaceRangeSample, theItem: Bnd_Box): Standard_Boolean;
  Bound(theKey: IntTools_SurfaceRangeSample, theItem: Bnd_Box): Bnd_Box;
  IsBound(theKey: IntTools_SurfaceRangeSample): Standard_Boolean;
  UnBind(theKey: IntTools_SurfaceRangeSample): Standard_Boolean;
  Seek(theKey: IntTools_SurfaceRangeSample): Bnd_Box;
  Find_1(theKey: IntTools_SurfaceRangeSample): Bnd_Box;
  Find_2(theKey: IntTools_SurfaceRangeSample, theValue: Bnd_Box): Standard_Boolean;
  ChangeSeek(theKey: IntTools_SurfaceRangeSample): Bnd_Box;
  ChangeFind(theKey: IntTools_SurfaceRangeSample): Bnd_Box;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class IntTools_DataMapOfSurfaceSampleBox_1 extends IntTools_DataMapOfSurfaceSampleBox {
    constructor();
  }

  export declare class IntTools_DataMapOfSurfaceSampleBox_2 extends IntTools_DataMapOfSurfaceSampleBox {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class IntTools_DataMapOfSurfaceSampleBox_3 extends IntTools_DataMapOfSurfaceSampleBox {
    constructor(theOther: IntTools_DataMapOfSurfaceSampleBox);
  }

export declare class IntTools_SequenceOfCommonPrts extends NCollection_BaseSequence {
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
  Assign(theOther: IntTools_SequenceOfCommonPrts): IntTools_SequenceOfCommonPrts;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntTools_CommonPrt): void;
  Append_2(theSeq: IntTools_SequenceOfCommonPrts): void;
  Prepend_1(theItem: IntTools_CommonPrt): void;
  Prepend_2(theSeq: IntTools_SequenceOfCommonPrts): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntTools_CommonPrt): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCommonPrts): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCommonPrts): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntTools_CommonPrt): void;
  Split(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCommonPrts): void;
  First(): IntTools_CommonPrt;
  ChangeFirst(): IntTools_CommonPrt;
  Last(): IntTools_CommonPrt;
  ChangeLast(): IntTools_CommonPrt;
  Value(theIndex: Standard_Integer): IntTools_CommonPrt;
  ChangeValue(theIndex: Standard_Integer): IntTools_CommonPrt;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_CommonPrt): void;
}

  export declare class IntTools_SequenceOfCommonPrts_1 extends IntTools_SequenceOfCommonPrts {
    constructor();
  }

  export declare class IntTools_SequenceOfCommonPrts_2 extends IntTools_SequenceOfCommonPrts {
    constructor(theAllocator: any);
  }

  export declare class IntTools_SequenceOfCommonPrts_3 extends IntTools_SequenceOfCommonPrts {
    constructor(theOther: IntTools_SequenceOfCommonPrts);
  }

export declare class IntTools_SequenceOfCurves extends NCollection_BaseSequence {
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
  Assign(theOther: IntTools_SequenceOfCurves): IntTools_SequenceOfCurves;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntTools_Curve): void;
  Append_2(theSeq: IntTools_SequenceOfCurves): void;
  Prepend_1(theItem: IntTools_Curve): void;
  Prepend_2(theSeq: IntTools_SequenceOfCurves): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntTools_Curve): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCurves): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCurves): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntTools_Curve): void;
  Split(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfCurves): void;
  First(): IntTools_Curve;
  ChangeFirst(): IntTools_Curve;
  Last(): IntTools_Curve;
  ChangeLast(): IntTools_Curve;
  Value(theIndex: Standard_Integer): IntTools_Curve;
  ChangeValue(theIndex: Standard_Integer): IntTools_Curve;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_Curve): void;
}

  export declare class IntTools_SequenceOfCurves_1 extends IntTools_SequenceOfCurves {
    constructor();
  }

  export declare class IntTools_SequenceOfCurves_2 extends IntTools_SequenceOfCurves {
    constructor(theAllocator: any);
  }

  export declare class IntTools_SequenceOfCurves_3 extends IntTools_SequenceOfCurves {
    constructor(theOther: IntTools_SequenceOfCurves);
  }

export declare class IntTools_SequenceOfPntOn2Faces extends NCollection_BaseSequence {
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
  Assign(theOther: IntTools_SequenceOfPntOn2Faces): IntTools_SequenceOfPntOn2Faces;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: IntTools_PntOn2Faces): void;
  Append_2(theSeq: IntTools_SequenceOfPntOn2Faces): void;
  Prepend_1(theItem: IntTools_PntOn2Faces): void;
  Prepend_2(theSeq: IntTools_SequenceOfPntOn2Faces): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: IntTools_PntOn2Faces): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfPntOn2Faces): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfPntOn2Faces): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: IntTools_PntOn2Faces): void;
  Split(theIndex: Standard_Integer, theSeq: IntTools_SequenceOfPntOn2Faces): void;
  First(): IntTools_PntOn2Faces;
  ChangeFirst(): IntTools_PntOn2Faces;
  Last(): IntTools_PntOn2Faces;
  ChangeLast(): IntTools_PntOn2Faces;
  Value(theIndex: Standard_Integer): IntTools_PntOn2Faces;
  ChangeValue(theIndex: Standard_Integer): IntTools_PntOn2Faces;
  SetValue(theIndex: Standard_Integer, theItem: IntTools_PntOn2Faces): void;
}

  export declare class IntTools_SequenceOfPntOn2Faces_1 extends IntTools_SequenceOfPntOn2Faces {
    constructor();
  }

  export declare class IntTools_SequenceOfPntOn2Faces_2 extends IntTools_SequenceOfPntOn2Faces {
    constructor(theAllocator: any);
  }

  export declare class IntTools_SequenceOfPntOn2Faces_3 extends IntTools_SequenceOfPntOn2Faces {
    constructor(theOther: IntTools_SequenceOfPntOn2Faces);
  }

export declare class IntTools_ListOfBox extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: IntTools_ListOfBox): IntTools_ListOfBox;
  Clear(theAllocator: any): void;
  First_1(): Bnd_Box;
  First_2(): Bnd_Box;
  Last_1(): Bnd_Box;
  Last_2(): Bnd_Box;
  Append_1(theItem: Bnd_Box): Bnd_Box;
  Append_3(theOther: IntTools_ListOfBox): void;
  Prepend_1(theItem: Bnd_Box): Bnd_Box;
  Prepend_2(theOther: IntTools_ListOfBox): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class IntTools_ListOfBox_1 extends IntTools_ListOfBox {
    constructor();
  }

  export declare class IntTools_ListOfBox_2 extends IntTools_ListOfBox {
    constructor(theAllocator: any);
  }

  export declare class IntTools_ListOfBox_3 extends IntTools_ListOfBox {
    constructor(theOther: IntTools_ListOfBox);
  }

export declare class IntTools_MapOfSurfaceSample extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: IntTools_MapOfSurfaceSample): void;
  Assign(theOther: IntTools_MapOfSurfaceSample): IntTools_MapOfSurfaceSample;
  ReSize(N: Standard_Integer): void;
  Add(K: IntTools_SurfaceRangeSample): Standard_Boolean;
  Added(K: IntTools_SurfaceRangeSample): IntTools_SurfaceRangeSample;
  Contains_1(K: IntTools_SurfaceRangeSample): Standard_Boolean;
  Remove(K: IntTools_SurfaceRangeSample): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: IntTools_MapOfSurfaceSample): Standard_Boolean;
  Contains_2(theOther: IntTools_MapOfSurfaceSample): Standard_Boolean;
  Union(theLeft: IntTools_MapOfSurfaceSample, theRight: IntTools_MapOfSurfaceSample): void;
  Unite(theOther: IntTools_MapOfSurfaceSample): Standard_Boolean;
  HasIntersection(theMap: IntTools_MapOfSurfaceSample): Standard_Boolean;
  Intersection(theLeft: IntTools_MapOfSurfaceSample, theRight: IntTools_MapOfSurfaceSample): void;
  Intersect(theOther: IntTools_MapOfSurfaceSample): Standard_Boolean;
  Subtraction(theLeft: IntTools_MapOfSurfaceSample, theRight: IntTools_MapOfSurfaceSample): void;
  Subtract(theOther: IntTools_MapOfSurfaceSample): Standard_Boolean;
  Difference(theLeft: IntTools_MapOfSurfaceSample, theRight: IntTools_MapOfSurfaceSample): void;
  Differ(theOther: IntTools_MapOfSurfaceSample): Standard_Boolean;
}

  export declare class IntTools_MapOfSurfaceSample_1 extends IntTools_MapOfSurfaceSample {
    constructor();
  }

  export declare class IntTools_MapOfSurfaceSample_2 extends IntTools_MapOfSurfaceSample {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class IntTools_MapOfSurfaceSample_3 extends IntTools_MapOfSurfaceSample {
    constructor(theOther: IntTools_MapOfSurfaceSample);
  }

export declare class Handle_IntTools_TopolTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IntTools_TopolTool): void;
  get(): IntTools_TopolTool;
}

  export declare class Handle_IntTools_TopolTool_1 extends Handle_IntTools_TopolTool {
    constructor();
  }

  export declare class Handle_IntTools_TopolTool_2 extends Handle_IntTools_TopolTool {
    constructor(thePtr: IntTools_TopolTool);
  }

  export declare class Handle_IntTools_TopolTool_3 extends Handle_IntTools_TopolTool {
    constructor(theHandle: Handle_IntTools_TopolTool);
  }

  export declare class Handle_IntTools_TopolTool_4 extends Handle_IntTools_TopolTool {
    constructor(theHandle: Handle_IntTools_TopolTool);
  }

export declare type BOPAlgo_Operation = {
  BOPAlgo_COMMON: {};
  BOPAlgo_FUSE: {};
  BOPAlgo_CUT: {};
  BOPAlgo_CUT21: {};
  BOPAlgo_SECTION: {};
  BOPAlgo_UNKNOWN: {};
}

export declare type BOPAlgo_CheckStatus = {
  BOPAlgo_CheckUnknown: {};
  BOPAlgo_BadType: {};
  BOPAlgo_SelfIntersect: {};
  BOPAlgo_TooSmallEdge: {};
  BOPAlgo_NonRecoverableFace: {};
  BOPAlgo_IncompatibilityOfVertex: {};
  BOPAlgo_IncompatibilityOfEdge: {};
  BOPAlgo_IncompatibilityOfFace: {};
  BOPAlgo_OperationAborted: {};
  BOPAlgo_GeomAbs_C0: {};
  BOPAlgo_InvalidCurveOnSurface: {};
  BOPAlgo_NotValid: {};
}

export declare type BOPAlgo_GlueEnum = {
  BOPAlgo_GlueOff: {};
  BOPAlgo_GlueShift: {};
  BOPAlgo_GlueFull: {};
}

export declare type TKBOLib = {
  BOPAlgo_AlertBadPositioning: typeof BOPAlgo_AlertBadPositioning;
  BOPAlgo_AlertEmptyShape: typeof BOPAlgo_AlertEmptyShape;
  BOPAlgo_AlertNotSplittableEdge: typeof BOPAlgo_AlertNotSplittableEdge;
  BOPAlgo_AlertRemovalOfIBForEdgesFailed: typeof BOPAlgo_AlertRemovalOfIBForEdgesFailed;
  BOPAlgo_AlertRemovalOfIBForFacesFailed: typeof BOPAlgo_AlertRemovalOfIBForFacesFailed;
  BOPAlgo_AlertRemovalOfIBForMDimShapes: typeof BOPAlgo_AlertRemovalOfIBForMDimShapes;
  BOPAlgo_AlertRemovalOfIBForSolidsFailed: typeof BOPAlgo_AlertRemovalOfIBForSolidsFailed;
  BOPAlgo_AlertSelfInterferingShape: typeof BOPAlgo_AlertSelfInterferingShape;
  BOPAlgo_AlertShellSplitterFailed: typeof BOPAlgo_AlertShellSplitterFailed;
  BOPAlgo_AlertTooSmallEdge: typeof BOPAlgo_AlertTooSmallEdge;
  BOPAlgo_AlertIntersectionOfPairOfShapesFailed: typeof BOPAlgo_AlertIntersectionOfPairOfShapesFailed;
  BOPAlgo_AlertBuildingPCurveFailed: typeof BOPAlgo_AlertBuildingPCurveFailed;
  BOPAlgo_AlertAcquiredSelfIntersection: typeof BOPAlgo_AlertAcquiredSelfIntersection;
  BOPAlgo_AlertUnsupportedType: typeof BOPAlgo_AlertUnsupportedType;
  BOPAlgo_AlertUnableToRemoveTheFeature: typeof BOPAlgo_AlertUnableToRemoveTheFeature;
  BOPAlgo_AlertSolidBuilderUnusedFaces: typeof BOPAlgo_AlertSolidBuilderUnusedFaces;
  BOPAlgo_AlertFaceBuilderUnusedEdges: typeof BOPAlgo_AlertFaceBuilderUnusedEdges;
  BOPAlgo_AlertUnableToOrientTheShape: typeof BOPAlgo_AlertUnableToOrientTheShape;
  BOPAlgo_AlertUnknownShape: typeof BOPAlgo_AlertUnknownShape;
  BOPAlgo_AlertUnableToTrim: typeof BOPAlgo_AlertUnableToTrim;
  BOPAlgo_AlertUnableToMakeIdentical: typeof BOPAlgo_AlertUnableToMakeIdentical;
  BOPAlgo_AlertUnableToRepeat: typeof BOPAlgo_AlertUnableToRepeat;
  BOPAlgo_AlertUnableToMakePeriodic: typeof BOPAlgo_AlertUnableToMakePeriodic;
  BOPAlgo_AlertUnableToGlue: typeof BOPAlgo_AlertUnableToGlue;
  BOPAlgo_AlertShapeIsNotPeriodic: typeof BOPAlgo_AlertShapeIsNotPeriodic;
  BOPAlgo_AlertUnableToMakeClosedEdgeOnFace: typeof BOPAlgo_AlertUnableToMakeClosedEdgeOnFace;
  BOPAlgo_Options_1: typeof BOPAlgo_Options_1;
  BOPAlgo_Options_2: typeof BOPAlgo_Options_2;
  BOPAlgo_CheckResult: typeof BOPAlgo_CheckResult;
  BOPAlgo_ArgumentAnalyzer: typeof BOPAlgo_ArgumentAnalyzer;
  BOPAlgo_Builder_1: typeof BOPAlgo_Builder_1;
  BOPAlgo_Builder_2: typeof BOPAlgo_Builder_2;
  BOPAlgo_ToolsProvider_1: typeof BOPAlgo_ToolsProvider_1;
  BOPAlgo_ToolsProvider_2: typeof BOPAlgo_ToolsProvider_2;
  BOPAlgo_BOP_1: typeof BOPAlgo_BOP_1;
  BOPAlgo_BOP_2: typeof BOPAlgo_BOP_2;
  BOPAlgo_BuilderFace_1: typeof BOPAlgo_BuilderFace_1;
  BOPAlgo_BuilderFace_2: typeof BOPAlgo_BuilderFace_2;
  BOPAlgo_BuilderSolid_1: typeof BOPAlgo_BuilderSolid_1;
  BOPAlgo_BuilderSolid_2: typeof BOPAlgo_BuilderSolid_2;
  BOPAlgo_CellsBuilder_1: typeof BOPAlgo_CellsBuilder_1;
  BOPAlgo_CellsBuilder_2: typeof BOPAlgo_CellsBuilder_2;
  BOPAlgo_SectionAttribute_1: typeof BOPAlgo_SectionAttribute_1;
  BOPAlgo_SectionAttribute_2: typeof BOPAlgo_SectionAttribute_2;
  BOPDS_Pave: typeof BOPDS_Pave;
  BOPDS_PaveBlock_1: typeof BOPDS_PaveBlock_1;
  BOPDS_PaveBlock_2: typeof BOPDS_PaveBlock_2;
  BOPDS_CoupleOfPaveBlocks_1: typeof BOPDS_CoupleOfPaveBlocks_1;
  BOPDS_CoupleOfPaveBlocks_2: typeof BOPDS_CoupleOfPaveBlocks_2;
  BOPDS_Pair_1: typeof BOPDS_Pair_1;
  BOPDS_Pair_2: typeof BOPDS_Pair_2;
  IntTools_Curve_1: typeof IntTools_Curve_1;
  IntTools_Curve_2: typeof IntTools_Curve_2;
  BOPDS_Curve_1: typeof BOPDS_Curve_1;
  BOPDS_Curve_2: typeof BOPDS_Curve_2;
  IntTools_ShrunkRange: typeof IntTools_ShrunkRange;
  BOPAlgo_CheckerSI: typeof BOPAlgo_CheckerSI;
  BOPAlgo_MakePeriodic: typeof BOPAlgo_MakePeriodic;
  BOPAlgo_MakeConnected: typeof BOPAlgo_MakeConnected;
  BOPAlgo_MakerVolume_1: typeof BOPAlgo_MakerVolume_1;
  BOPAlgo_MakerVolume_2: typeof BOPAlgo_MakerVolume_2;
  BOPAlgo_RemoveFeatures: typeof BOPAlgo_RemoveFeatures;
  BOPAlgo_Section_1: typeof BOPAlgo_Section_1;
  BOPAlgo_Section_2: typeof BOPAlgo_Section_2;
  BOPTools_ConnexityBlock_1: typeof BOPTools_ConnexityBlock_1;
  BOPTools_ConnexityBlock_2: typeof BOPTools_ConnexityBlock_2;
  BOPAlgo_ShellSplitter_1: typeof BOPAlgo_ShellSplitter_1;
  BOPAlgo_ShellSplitter_2: typeof BOPAlgo_ShellSplitter_2;
  BOPAlgo_Splitter_1: typeof BOPAlgo_Splitter_1;
  BOPAlgo_Splitter_2: typeof BOPAlgo_Splitter_2;
  BOPAlgo_WireEdgeSet_1: typeof BOPAlgo_WireEdgeSet_1;
  BOPAlgo_WireEdgeSet_2: typeof BOPAlgo_WireEdgeSet_2;
  BOPAlgo_WireSplitter_1: typeof BOPAlgo_WireSplitter_1;
  BOPAlgo_WireSplitter_2: typeof BOPAlgo_WireSplitter_2;
  BOPDS_CommonBlock_1: typeof BOPDS_CommonBlock_1;
  BOPDS_CommonBlock_2: typeof BOPDS_CommonBlock_2;
  BOPDS_FaceInfo_1: typeof BOPDS_FaceInfo_1;
  BOPDS_FaceInfo_2: typeof BOPDS_FaceInfo_2;
  BOPDS_IndexRange: typeof BOPDS_IndexRange;
  IntTools_Range_1: typeof IntTools_Range_1;
  IntTools_Range_2: typeof IntTools_Range_2;
  IntTools_CommonPrt_1: typeof IntTools_CommonPrt_1;
  IntTools_CommonPrt_2: typeof IntTools_CommonPrt_2;
  BOPDS_Point: typeof BOPDS_Point;
  BOPDS_InterfVV_1: typeof BOPDS_InterfVV_1;
  BOPDS_InterfVV_2: typeof BOPDS_InterfVV_2;
  BOPDS_InterfVE_1: typeof BOPDS_InterfVE_1;
  BOPDS_InterfVE_2: typeof BOPDS_InterfVE_2;
  BOPDS_InterfVF_1: typeof BOPDS_InterfVF_1;
  BOPDS_InterfVF_2: typeof BOPDS_InterfVF_2;
  BOPDS_InterfEE_1: typeof BOPDS_InterfEE_1;
  BOPDS_InterfEE_2: typeof BOPDS_InterfEE_2;
  BOPDS_InterfEF_1: typeof BOPDS_InterfEF_1;
  BOPDS_InterfEF_2: typeof BOPDS_InterfEF_2;
  BOPDS_InterfFF: typeof BOPDS_InterfFF;
  BOPDS_InterfVZ_1: typeof BOPDS_InterfVZ_1;
  BOPDS_InterfVZ_2: typeof BOPDS_InterfVZ_2;
  BOPDS_InterfEZ_1: typeof BOPDS_InterfEZ_1;
  BOPDS_InterfEZ_2: typeof BOPDS_InterfEZ_2;
  BOPDS_InterfFZ_1: typeof BOPDS_InterfFZ_1;
  BOPDS_InterfFZ_2: typeof BOPDS_InterfFZ_2;
  BOPDS_InterfZZ_1: typeof BOPDS_InterfZZ_1;
  BOPDS_InterfZZ_2: typeof BOPDS_InterfZZ_2;
  BOPDS_ShapeInfo_1: typeof BOPDS_ShapeInfo_1;
  BOPDS_ShapeInfo_2: typeof BOPDS_ShapeInfo_2;
  BOPDS_DS_1: typeof BOPDS_DS_1;
  BOPDS_DS_2: typeof BOPDS_DS_2;
  BOPDS_SubIterator_1: typeof BOPDS_SubIterator_1;
  BOPDS_SubIterator_2: typeof BOPDS_SubIterator_2;
  BOPTools_CoupleOfShape: typeof BOPTools_CoupleOfShape;
  BOPTools_Set_1: typeof BOPTools_Set_1;
  BOPTools_Set_2: typeof BOPTools_Set_2;
  BOPTools_Set_3: typeof BOPTools_Set_3;
  BRepAlgoAPI_BuilderAlgo_1: typeof BRepAlgoAPI_BuilderAlgo_1;
  BRepAlgoAPI_BuilderAlgo_2: typeof BRepAlgoAPI_BuilderAlgo_2;
  BRepAlgoAPI_BooleanOperation_1: typeof BRepAlgoAPI_BooleanOperation_1;
  BRepAlgoAPI_BooleanOperation_2: typeof BRepAlgoAPI_BooleanOperation_2;
  BRepAlgoAPI_Check_1: typeof BRepAlgoAPI_Check_1;
  BRepAlgoAPI_Check_2: typeof BRepAlgoAPI_Check_2;
  BRepAlgoAPI_Check_3: typeof BRepAlgoAPI_Check_3;
  BRepAlgoAPI_Common_1: typeof BRepAlgoAPI_Common_1;
  BRepAlgoAPI_Common_2: typeof BRepAlgoAPI_Common_2;
  BRepAlgoAPI_Common_3: typeof BRepAlgoAPI_Common_3;
  BRepAlgoAPI_Common_4: typeof BRepAlgoAPI_Common_4;
  BRepAlgoAPI_Cut_1: typeof BRepAlgoAPI_Cut_1;
  BRepAlgoAPI_Cut_2: typeof BRepAlgoAPI_Cut_2;
  BRepAlgoAPI_Cut_3: typeof BRepAlgoAPI_Cut_3;
  BRepAlgoAPI_Cut_4: typeof BRepAlgoAPI_Cut_4;
  BRepAlgoAPI_Defeaturing: typeof BRepAlgoAPI_Defeaturing;
  BRepAlgoAPI_Fuse_1: typeof BRepAlgoAPI_Fuse_1;
  BRepAlgoAPI_Fuse_2: typeof BRepAlgoAPI_Fuse_2;
  BRepAlgoAPI_Fuse_3: typeof BRepAlgoAPI_Fuse_3;
  BRepAlgoAPI_Fuse_4: typeof BRepAlgoAPI_Fuse_4;
  BRepAlgoAPI_Section_1: typeof BRepAlgoAPI_Section_1;
  BRepAlgoAPI_Section_2: typeof BRepAlgoAPI_Section_2;
  BRepAlgoAPI_Section_3: typeof BRepAlgoAPI_Section_3;
  BRepAlgoAPI_Section_4: typeof BRepAlgoAPI_Section_4;
  BRepAlgoAPI_Section_5: typeof BRepAlgoAPI_Section_5;
  BRepAlgoAPI_Section_6: typeof BRepAlgoAPI_Section_6;
  BRepAlgoAPI_Section_7: typeof BRepAlgoAPI_Section_7;
  BRepAlgoAPI_Section_8: typeof BRepAlgoAPI_Section_8;
  BRepAlgoAPI_Splitter_1: typeof BRepAlgoAPI_Splitter_1;
  BRepAlgoAPI_Splitter_2: typeof BRepAlgoAPI_Splitter_2;
  IntTools_Root_1: typeof IntTools_Root_1;
  IntTools_Root_2: typeof IntTools_Root_2;
  IntTools_BaseRangeSample_1: typeof IntTools_BaseRangeSample_1;
  IntTools_BaseRangeSample_2: typeof IntTools_BaseRangeSample_2;
  IntTools_MarkedRangeSet_1: typeof IntTools_MarkedRangeSet_1;
  IntTools_MarkedRangeSet_2: typeof IntTools_MarkedRangeSet_2;
  IntTools_MarkedRangeSet_3: typeof IntTools_MarkedRangeSet_3;
  IntTools_CurveRangeSample_1: typeof IntTools_CurveRangeSample_1;
  IntTools_CurveRangeSample_2: typeof IntTools_CurveRangeSample_2;
  IntTools_SurfaceRangeSample_1: typeof IntTools_SurfaceRangeSample_1;
  IntTools_SurfaceRangeSample_2: typeof IntTools_SurfaceRangeSample_2;
  IntTools_SurfaceRangeSample_3: typeof IntTools_SurfaceRangeSample_3;
  IntTools_SurfaceRangeSample_4: typeof IntTools_SurfaceRangeSample_4;
  IntTools_BeanFaceIntersector_1: typeof IntTools_BeanFaceIntersector_1;
  IntTools_BeanFaceIntersector_2: typeof IntTools_BeanFaceIntersector_2;
  IntTools_BeanFaceIntersector_3: typeof IntTools_BeanFaceIntersector_3;
  IntTools_BeanFaceIntersector_4: typeof IntTools_BeanFaceIntersector_4;
  IntTools_CArray1OfInteger_1: typeof IntTools_CArray1OfInteger_1;
  IntTools_CArray1OfInteger_2: typeof IntTools_CArray1OfInteger_2;
  IntTools_CArray1OfReal_1: typeof IntTools_CArray1OfReal_1;
  IntTools_CArray1OfReal_2: typeof IntTools_CArray1OfReal_2;
  IntTools_CurveRangeLocalizeData: typeof IntTools_CurveRangeLocalizeData;
  IntTools_EdgeEdge_1: typeof IntTools_EdgeEdge_1;
  IntTools_EdgeEdge_2: typeof IntTools_EdgeEdge_2;
  IntTools_EdgeEdge_3: typeof IntTools_EdgeEdge_3;
  IntTools_EdgeFace: typeof IntTools_EdgeFace;
  IntTools_FClass2d_1: typeof IntTools_FClass2d_1;
  IntTools_FClass2d_2: typeof IntTools_FClass2d_2;
  IntTools_PntOn2Faces_1: typeof IntTools_PntOn2Faces_1;
  IntTools_PntOn2Faces_2: typeof IntTools_PntOn2Faces_2;
  IntTools_FaceFace: typeof IntTools_FaceFace;
  IntTools_SurfaceRangeLocalizeData_1: typeof IntTools_SurfaceRangeLocalizeData_1;
  IntTools_SurfaceRangeLocalizeData_2: typeof IntTools_SurfaceRangeLocalizeData_2;
  IntTools_SurfaceRangeLocalizeData_3: typeof IntTools_SurfaceRangeLocalizeData_3;
  IntTools_TopolTool_1: typeof IntTools_TopolTool_1;
  IntTools_TopolTool_2: typeof IntTools_TopolTool_2;
  BOPAlgo_ListOfCheckResult_1: typeof BOPAlgo_ListOfCheckResult_1;
  BOPAlgo_ListOfCheckResult_2: typeof BOPAlgo_ListOfCheckResult_2;
  BOPAlgo_ListOfCheckResult_3: typeof BOPAlgo_ListOfCheckResult_3;
  BOPDS_ListOfPave_1: typeof BOPDS_ListOfPave_1;
  BOPDS_ListOfPave_2: typeof BOPDS_ListOfPave_2;
  BOPDS_ListOfPave_3: typeof BOPDS_ListOfPave_3;
  Handle_BOPDS_PaveBlock_1: typeof Handle_BOPDS_PaveBlock_1;
  Handle_BOPDS_PaveBlock_2: typeof Handle_BOPDS_PaveBlock_2;
  Handle_BOPDS_PaveBlock_3: typeof Handle_BOPDS_PaveBlock_3;
  Handle_BOPDS_PaveBlock_4: typeof Handle_BOPDS_PaveBlock_4;
  BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_1: typeof BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_1;
  BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_2: typeof BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_2;
  BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_3: typeof BOPDS_IndexedDataMapOfShapeCoupleOfPaveBlocks_3;
  BOPDS_MapOfPair_1: typeof BOPDS_MapOfPair_1;
  BOPDS_MapOfPair_2: typeof BOPDS_MapOfPair_2;
  BOPDS_MapOfPair_3: typeof BOPDS_MapOfPair_3;
  BOPDS_VectorOfCurve_1: typeof BOPDS_VectorOfCurve_1;
  BOPDS_VectorOfCurve_2: typeof BOPDS_VectorOfCurve_2;
  BOPTools_ListOfConnexityBlock_1: typeof BOPTools_ListOfConnexityBlock_1;
  BOPTools_ListOfConnexityBlock_2: typeof BOPTools_ListOfConnexityBlock_2;
  BOPTools_ListOfConnexityBlock_3: typeof BOPTools_ListOfConnexityBlock_3;
  Handle_IntTools_Context_1: typeof Handle_IntTools_Context_1;
  Handle_IntTools_Context_2: typeof Handle_IntTools_Context_2;
  Handle_IntTools_Context_3: typeof Handle_IntTools_Context_3;
  Handle_IntTools_Context_4: typeof Handle_IntTools_Context_4;
  Handle_BOPDS_CommonBlock_1: typeof Handle_BOPDS_CommonBlock_1;
  Handle_BOPDS_CommonBlock_2: typeof Handle_BOPDS_CommonBlock_2;
  Handle_BOPDS_CommonBlock_3: typeof Handle_BOPDS_CommonBlock_3;
  Handle_BOPDS_CommonBlock_4: typeof Handle_BOPDS_CommonBlock_4;
  BOPDS_VectorOfFaceInfo_1: typeof BOPDS_VectorOfFaceInfo_1;
  BOPDS_VectorOfFaceInfo_2: typeof BOPDS_VectorOfFaceInfo_2;
  BOPDS_VectorOfIndexRange_1: typeof BOPDS_VectorOfIndexRange_1;
  BOPDS_VectorOfIndexRange_2: typeof BOPDS_VectorOfIndexRange_2;
  IntTools_SequenceOfRanges_1: typeof IntTools_SequenceOfRanges_1;
  IntTools_SequenceOfRanges_2: typeof IntTools_SequenceOfRanges_2;
  IntTools_SequenceOfRanges_3: typeof IntTools_SequenceOfRanges_3;
  BOPDS_VectorOfPoint_1: typeof BOPDS_VectorOfPoint_1;
  BOPDS_VectorOfPoint_2: typeof BOPDS_VectorOfPoint_2;
  BOPDS_VectorOfInterfEE_1: typeof BOPDS_VectorOfInterfEE_1;
  BOPDS_VectorOfInterfEE_2: typeof BOPDS_VectorOfInterfEE_2;
  BOPDS_VectorOfInterfEF_1: typeof BOPDS_VectorOfInterfEF_1;
  BOPDS_VectorOfInterfEF_2: typeof BOPDS_VectorOfInterfEF_2;
  BOPDS_VectorOfInterfEZ_1: typeof BOPDS_VectorOfInterfEZ_1;
  BOPDS_VectorOfInterfEZ_2: typeof BOPDS_VectorOfInterfEZ_2;
  BOPDS_VectorOfInterfFF_1: typeof BOPDS_VectorOfInterfFF_1;
  BOPDS_VectorOfInterfFF_2: typeof BOPDS_VectorOfInterfFF_2;
  BOPDS_VectorOfInterfFZ_1: typeof BOPDS_VectorOfInterfFZ_1;
  BOPDS_VectorOfInterfFZ_2: typeof BOPDS_VectorOfInterfFZ_2;
  BOPDS_VectorOfInterfVE_1: typeof BOPDS_VectorOfInterfVE_1;
  BOPDS_VectorOfInterfVE_2: typeof BOPDS_VectorOfInterfVE_2;
  BOPDS_VectorOfInterfVF_1: typeof BOPDS_VectorOfInterfVF_1;
  BOPDS_VectorOfInterfVF_2: typeof BOPDS_VectorOfInterfVF_2;
  BOPDS_VectorOfInterfVV_1: typeof BOPDS_VectorOfInterfVV_1;
  BOPDS_VectorOfInterfVV_2: typeof BOPDS_VectorOfInterfVV_2;
  BOPDS_VectorOfInterfVZ_1: typeof BOPDS_VectorOfInterfVZ_1;
  BOPDS_VectorOfInterfVZ_2: typeof BOPDS_VectorOfInterfVZ_2;
  BOPDS_VectorOfInterfZZ_1: typeof BOPDS_VectorOfInterfZZ_1;
  BOPDS_VectorOfInterfZZ_2: typeof BOPDS_VectorOfInterfZZ_2;
  BOPDS_VectorOfListOfPaveBlock_1: typeof BOPDS_VectorOfListOfPaveBlock_1;
  BOPDS_VectorOfListOfPaveBlock_2: typeof BOPDS_VectorOfListOfPaveBlock_2;
  BOPDS_VectorOfShapeInfo_1: typeof BOPDS_VectorOfShapeInfo_1;
  BOPDS_VectorOfShapeInfo_2: typeof BOPDS_VectorOfShapeInfo_2;
  BOPDS_DataMapOfIntegerListOfPaveBlock_1: typeof BOPDS_DataMapOfIntegerListOfPaveBlock_1;
  BOPDS_DataMapOfIntegerListOfPaveBlock_2: typeof BOPDS_DataMapOfIntegerListOfPaveBlock_2;
  BOPDS_DataMapOfIntegerListOfPaveBlock_3: typeof BOPDS_DataMapOfIntegerListOfPaveBlock_3;
  BOPDS_DataMapOfShapeCoupleOfPaveBlocks_1: typeof BOPDS_DataMapOfShapeCoupleOfPaveBlocks_1;
  BOPDS_DataMapOfShapeCoupleOfPaveBlocks_2: typeof BOPDS_DataMapOfShapeCoupleOfPaveBlocks_2;
  BOPDS_DataMapOfShapeCoupleOfPaveBlocks_3: typeof BOPDS_DataMapOfShapeCoupleOfPaveBlocks_3;
  BOPDS_MapOfPave_1: typeof BOPDS_MapOfPave_1;
  BOPDS_MapOfPave_2: typeof BOPDS_MapOfPave_2;
  BOPDS_MapOfPave_3: typeof BOPDS_MapOfPave_3;
  BOPDS_VectorOfPair_1: typeof BOPDS_VectorOfPair_1;
  BOPDS_VectorOfPair_2: typeof BOPDS_VectorOfPair_2;
  BOPDS_VectorOfPave_1: typeof BOPDS_VectorOfPave_1;
  BOPDS_VectorOfPave_2: typeof BOPDS_VectorOfPave_2;
  BOPDS_VectorOfPave_3: typeof BOPDS_VectorOfPave_3;
  BOPDS_VectorOfPave_4: typeof BOPDS_VectorOfPave_4;
  BOPDS_VectorOfPave_5: typeof BOPDS_VectorOfPave_5;
  BOPDS_VectorOfVectorOfPair_1: typeof BOPDS_VectorOfVectorOfPair_1;
  BOPDS_VectorOfVectorOfPair_2: typeof BOPDS_VectorOfVectorOfPair_2;
  BOPTools_ListOfCoupleOfShape_1: typeof BOPTools_ListOfCoupleOfShape_1;
  BOPTools_ListOfCoupleOfShape_2: typeof BOPTools_ListOfCoupleOfShape_2;
  BOPTools_ListOfCoupleOfShape_3: typeof BOPTools_ListOfCoupleOfShape_3;
  BOPTools_IndexedDataMapOfSetShape_1: typeof BOPTools_IndexedDataMapOfSetShape_1;
  BOPTools_IndexedDataMapOfSetShape_2: typeof BOPTools_IndexedDataMapOfSetShape_2;
  BOPTools_IndexedDataMapOfSetShape_3: typeof BOPTools_IndexedDataMapOfSetShape_3;
  BOPTools_MapOfSet_1: typeof BOPTools_MapOfSet_1;
  BOPTools_MapOfSet_2: typeof BOPTools_MapOfSet_2;
  BOPTools_MapOfSet_3: typeof BOPTools_MapOfSet_3;
  IntTools_SequenceOfRoots_1: typeof IntTools_SequenceOfRoots_1;
  IntTools_SequenceOfRoots_2: typeof IntTools_SequenceOfRoots_2;
  IntTools_SequenceOfRoots_3: typeof IntTools_SequenceOfRoots_3;
  IntTools_Array1OfRange_1: typeof IntTools_Array1OfRange_1;
  IntTools_Array1OfRange_2: typeof IntTools_Array1OfRange_2;
  IntTools_Array1OfRange_3: typeof IntTools_Array1OfRange_3;
  IntTools_Array1OfRange_4: typeof IntTools_Array1OfRange_4;
  IntTools_Array1OfRange_5: typeof IntTools_Array1OfRange_5;
  IntTools_Array1OfRoots_1: typeof IntTools_Array1OfRoots_1;
  IntTools_Array1OfRoots_2: typeof IntTools_Array1OfRoots_2;
  IntTools_Array1OfRoots_3: typeof IntTools_Array1OfRoots_3;
  IntTools_Array1OfRoots_4: typeof IntTools_Array1OfRoots_4;
  IntTools_Array1OfRoots_5: typeof IntTools_Array1OfRoots_5;
  IntTools_ListOfCurveRangeSample_1: typeof IntTools_ListOfCurveRangeSample_1;
  IntTools_ListOfCurveRangeSample_2: typeof IntTools_ListOfCurveRangeSample_2;
  IntTools_ListOfCurveRangeSample_3: typeof IntTools_ListOfCurveRangeSample_3;
  IntTools_ListOfSurfaceRangeSample_1: typeof IntTools_ListOfSurfaceRangeSample_1;
  IntTools_ListOfSurfaceRangeSample_2: typeof IntTools_ListOfSurfaceRangeSample_2;
  IntTools_ListOfSurfaceRangeSample_3: typeof IntTools_ListOfSurfaceRangeSample_3;
  IntTools_MapOfCurveSample_1: typeof IntTools_MapOfCurveSample_1;
  IntTools_MapOfCurveSample_2: typeof IntTools_MapOfCurveSample_2;
  IntTools_MapOfCurveSample_3: typeof IntTools_MapOfCurveSample_3;
  IntTools_DataMapOfCurveSampleBox_1: typeof IntTools_DataMapOfCurveSampleBox_1;
  IntTools_DataMapOfCurveSampleBox_2: typeof IntTools_DataMapOfCurveSampleBox_2;
  IntTools_DataMapOfCurveSampleBox_3: typeof IntTools_DataMapOfCurveSampleBox_3;
  IntTools_DataMapOfSurfaceSampleBox_1: typeof IntTools_DataMapOfSurfaceSampleBox_1;
  IntTools_DataMapOfSurfaceSampleBox_2: typeof IntTools_DataMapOfSurfaceSampleBox_2;
  IntTools_DataMapOfSurfaceSampleBox_3: typeof IntTools_DataMapOfSurfaceSampleBox_3;
  IntTools_SequenceOfCommonPrts_1: typeof IntTools_SequenceOfCommonPrts_1;
  IntTools_SequenceOfCommonPrts_2: typeof IntTools_SequenceOfCommonPrts_2;
  IntTools_SequenceOfCommonPrts_3: typeof IntTools_SequenceOfCommonPrts_3;
  IntTools_SequenceOfCurves_1: typeof IntTools_SequenceOfCurves_1;
  IntTools_SequenceOfCurves_2: typeof IntTools_SequenceOfCurves_2;
  IntTools_SequenceOfCurves_3: typeof IntTools_SequenceOfCurves_3;
  IntTools_SequenceOfPntOn2Faces_1: typeof IntTools_SequenceOfPntOn2Faces_1;
  IntTools_SequenceOfPntOn2Faces_2: typeof IntTools_SequenceOfPntOn2Faces_2;
  IntTools_SequenceOfPntOn2Faces_3: typeof IntTools_SequenceOfPntOn2Faces_3;
  IntTools_ListOfBox_1: typeof IntTools_ListOfBox_1;
  IntTools_ListOfBox_2: typeof IntTools_ListOfBox_2;
  IntTools_ListOfBox_3: typeof IntTools_ListOfBox_3;
  IntTools_MapOfSurfaceSample_1: typeof IntTools_MapOfSurfaceSample_1;
  IntTools_MapOfSurfaceSample_2: typeof IntTools_MapOfSurfaceSample_2;
  IntTools_MapOfSurfaceSample_3: typeof IntTools_MapOfSurfaceSample_3;
  Handle_IntTools_TopolTool_1: typeof Handle_IntTools_TopolTool_1;
  Handle_IntTools_TopolTool_2: typeof Handle_IntTools_TopolTool_2;
  Handle_IntTools_TopolTool_3: typeof Handle_IntTools_TopolTool_3;
  Handle_IntTools_TopolTool_4: typeof Handle_IntTools_TopolTool_4;
  BOPAlgo_Operation: typeof BOPAlgo_Operation;
  BOPAlgo_CheckStatus: typeof BOPAlgo_CheckStatus;
  BOPAlgo_GlueEnum: typeof BOPAlgo_GlueEnum;
};
