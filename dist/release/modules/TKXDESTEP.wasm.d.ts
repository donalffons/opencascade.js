declare const libName = "./modules/TKXDESTEP.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class STEPCAFControl_ActorWrite extends STEPControl_ActorWrite {
  constructor()
  IsAssembly(S: TopoDS_Shape): Standard_Boolean;
  SetStdMode(stdmode: Standard_Boolean): void;
  ClearMap(): void;
  RegisterAssembly(S: TopoDS_Shape): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPCAFControl_Controller extends STEPControl_Controller {
  constructor()
  Init(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPCAFControl_ExternFile extends Standard_Transient {
  constructor()
  SetWS(WS: any): void;
  GetWS(): any;
  SetLoadStatus(stat: IFSelect_ReturnStatus): void;
  GetLoadStatus(): IFSelect_ReturnStatus;
  SetTransferStatus(isok: Standard_Boolean): void;
  GetTransferStatus(): Standard_Boolean;
  SetWriteStatus(stat: IFSelect_ReturnStatus): void;
  GetWriteStatus(): IFSelect_ReturnStatus;
  SetName(name: any): void;
  GetName(): any;
  SetLabel(L: TDF_Label): void;
  GetLabel(): TDF_Label;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class STEPCAFControl_GDTProperty {
  constructor()
  GetDimModifiers(theCRI: any, theModifiers: XCAFDimTolObjects_DimensionModifiersSequence): void;
  GetDimClassOfTolerance(theLAF: any, theHolle: Standard_Boolean, theFV: XCAFDimTolObjects_DimensionFormVariance, theG: XCAFDimTolObjects_DimensionGrade): void;
  GetDimType(theName: any, theType: XCAFDimTolObjects_DimensionType): Standard_Boolean;
  GetDatumTargetType(theDescription: any, theType: XCAFDimTolObjects_DatumTargetType): Standard_Boolean;
  GetDimQualifierType(theDescription: any, theType: XCAFDimTolObjects_DimensionQualifier): Standard_Boolean;
  GetTolValueType_1(theDescription: any, theType: XCAFDimTolObjects_GeomToleranceTypeValue): Standard_Boolean;
  GetTolValueType_2(theType: XCAFDimTolObjects_GeomToleranceTypeValue): any;
  GetDimTypeName(theType: XCAFDimTolObjects_DimensionType): any;
  GetDimQualifierName(theQualifier: XCAFDimTolObjects_DimensionQualifier): any;
  GetDimModifierName(theModifier: XCAFDimTolObjects_DimensionModif): any;
  GetLimitsAndFits(theHole: Standard_Boolean, theFormVariance: XCAFDimTolObjects_DimensionFormVariance, theGrade: XCAFDimTolObjects_DimensionGrade): any;
  GetDatumTargetName(theDatumType: XCAFDimTolObjects_DatumTargetType): any;
  IsDimensionalLocation(theType: XCAFDimTolObjects_DimensionType): Standard_Boolean;
  IsDimensionalSize(theType: XCAFDimTolObjects_DimensionType): Standard_Boolean;
  GetGeomToleranceType_1(theType: XCAFDimTolObjects_GeomToleranceType): StepDimTol_GeometricToleranceType;
  GetGeomToleranceType_2(theType: StepDimTol_GeometricToleranceType): XCAFDimTolObjects_GeomToleranceType;
  GetGeomTolerance(theType: XCAFDimTolObjects_GeomToleranceType): any;
  GetGeomToleranceModifier(theModifier: XCAFDimTolObjects_GeomToleranceModif): StepDimTol_GeometricToleranceModifier;
  GetDatumRefModifiers(theModifiers: XCAFDimTolObjects_DatumModifiersSequence, theModifWithVal: XCAFDimTolObjects_DatumModifWithValue, theValue: Standard_Real, theUnit: StepBasic_Unit): any;
  GetTessellation(theShape: TopoDS_Shape): any;
}

export declare class STEPCAFControl_Reader {
  Init(WS: any, scratch: Standard_Boolean): void;
  ReadFile(filename: Standard_CString): IFSelect_ReturnStatus;
  NbRootsForTransfer(): Standard_Integer;
  TransferOneRoot(num: Standard_Integer, doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_1(doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_1(filename: TCollection_AsciiString, doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(filename: Standard_CString, doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  ExternFiles(): any;
  ExternFile(name: Standard_CString, ef: any): Standard_Boolean;
  ChangeReader(): STEPControl_Reader;
  Reader(): STEPControl_Reader;
  FindInstance(NAUO: any, STool: any, Tool: STEPConstruct_Tool, ShapeLabelMap: XCAFDoc_DataMapOfShapeLabel): TDF_Label;
  SetColorMode(colormode: Standard_Boolean): void;
  GetColorMode(): Standard_Boolean;
  SetNameMode(namemode: Standard_Boolean): void;
  GetNameMode(): Standard_Boolean;
  SetLayerMode(layermode: Standard_Boolean): void;
  GetLayerMode(): Standard_Boolean;
  SetPropsMode(propsmode: Standard_Boolean): void;
  GetPropsMode(): Standard_Boolean;
  SetSHUOMode(shuomode: Standard_Boolean): void;
  GetSHUOMode(): Standard_Boolean;
  SetGDTMode(gdtmode: Standard_Boolean): void;
  GetGDTMode(): Standard_Boolean;
  SetMatMode(matmode: Standard_Boolean): void;
  GetMatMode(): Standard_Boolean;
  SetViewMode(viewmode: Standard_Boolean): void;
  GetViewMode(): Standard_Boolean;
}

  export declare class STEPCAFControl_Reader_1 extends STEPCAFControl_Reader {
    constructor();
  }

  export declare class STEPCAFControl_Reader_2 extends STEPCAFControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class STEPCAFControl_Writer {
  Init(WS: any, scratch: Standard_Boolean): void;
  Write(filename: Standard_CString): IFSelect_ReturnStatus;
  Transfer_1(doc: any, mode: STEPControl_StepModelType, multi: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_2(L: TDF_Label, mode: STEPControl_StepModelType, multi: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_1(doc: any, filename: TCollection_AsciiString, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(doc: any, filename: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  ExternFiles(): any;
  ExternFile_1(L: TDF_Label, ef: any): Standard_Boolean;
  ExternFile_2(name: Standard_CString, ef: any): Standard_Boolean;
  ChangeWriter(): STEPControl_Writer;
  Writer(): STEPControl_Writer;
  SetColorMode(colormode: Standard_Boolean): void;
  GetColorMode(): Standard_Boolean;
  SetNameMode(namemode: Standard_Boolean): void;
  GetNameMode(): Standard_Boolean;
  SetLayerMode(layermode: Standard_Boolean): void;
  GetLayerMode(): Standard_Boolean;
  SetPropsMode(propsmode: Standard_Boolean): void;
  GetPropsMode(): Standard_Boolean;
  SetSHUOMode(shuomode: Standard_Boolean): void;
  GetSHUOMode(): Standard_Boolean;
  SetDimTolMode(dimtolmode: Standard_Boolean): void;
  GetDimTolMode(): Standard_Boolean;
  SetMaterialMode(matmode: Standard_Boolean): void;
  GetMaterialMode(): Standard_Boolean;
}

  export declare class STEPCAFControl_Writer_1 extends STEPCAFControl_Writer {
    constructor();
  }

  export declare class STEPCAFControl_Writer_2 extends STEPCAFControl_Writer {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class Handle_STEPCAFControl_ActorWrite {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPCAFControl_ActorWrite): void;
  get(): STEPCAFControl_ActorWrite;
}

  export declare class Handle_STEPCAFControl_ActorWrite_1 extends Handle_STEPCAFControl_ActorWrite {
    constructor();
  }

  export declare class Handle_STEPCAFControl_ActorWrite_2 extends Handle_STEPCAFControl_ActorWrite {
    constructor(thePtr: STEPCAFControl_ActorWrite);
  }

  export declare class Handle_STEPCAFControl_ActorWrite_3 extends Handle_STEPCAFControl_ActorWrite {
    constructor(theHandle: Handle_STEPCAFControl_ActorWrite);
  }

  export declare class Handle_STEPCAFControl_ActorWrite_4 extends Handle_STEPCAFControl_ActorWrite {
    constructor(theHandle: Handle_STEPCAFControl_ActorWrite);
  }

export declare class Handle_STEPCAFControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPCAFControl_Controller): void;
  get(): STEPCAFControl_Controller;
}

  export declare class Handle_STEPCAFControl_Controller_1 extends Handle_STEPCAFControl_Controller {
    constructor();
  }

  export declare class Handle_STEPCAFControl_Controller_2 extends Handle_STEPCAFControl_Controller {
    constructor(thePtr: STEPCAFControl_Controller);
  }

  export declare class Handle_STEPCAFControl_Controller_3 extends Handle_STEPCAFControl_Controller {
    constructor(theHandle: Handle_STEPCAFControl_Controller);
  }

  export declare class Handle_STEPCAFControl_Controller_4 extends Handle_STEPCAFControl_Controller {
    constructor(theHandle: Handle_STEPCAFControl_Controller);
  }

export declare class Handle_STEPCAFControl_ExternFile {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPCAFControl_ExternFile): void;
  get(): STEPCAFControl_ExternFile;
}

  export declare class Handle_STEPCAFControl_ExternFile_1 extends Handle_STEPCAFControl_ExternFile {
    constructor();
  }

  export declare class Handle_STEPCAFControl_ExternFile_2 extends Handle_STEPCAFControl_ExternFile {
    constructor(thePtr: STEPCAFControl_ExternFile);
  }

  export declare class Handle_STEPCAFControl_ExternFile_3 extends Handle_STEPCAFControl_ExternFile {
    constructor(theHandle: Handle_STEPCAFControl_ExternFile);
  }

  export declare class Handle_STEPCAFControl_ExternFile_4 extends Handle_STEPCAFControl_ExternFile {
    constructor(theHandle: Handle_STEPCAFControl_ExternFile);
  }

export declare class STEPCAFControl_DataMapOfLabelShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: STEPCAFControl_DataMapOfLabelShape): void;
  Assign(theOther: STEPCAFControl_DataMapOfLabelShape): STEPCAFControl_DataMapOfLabelShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TDF_Label, theItem: TopoDS_Shape): Standard_Boolean;
  Bound(theKey: TDF_Label, theItem: TopoDS_Shape): TopoDS_Shape;
  IsBound(theKey: TDF_Label): Standard_Boolean;
  UnBind(theKey: TDF_Label): Standard_Boolean;
  Seek(theKey: TDF_Label): TopoDS_Shape;
  Find_1(theKey: TDF_Label): TopoDS_Shape;
  Find_2(theKey: TDF_Label, theValue: TopoDS_Shape): Standard_Boolean;
  ChangeSeek(theKey: TDF_Label): TopoDS_Shape;
  ChangeFind(theKey: TDF_Label): TopoDS_Shape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class STEPCAFControl_DataMapOfLabelShape_1 extends STEPCAFControl_DataMapOfLabelShape {
    constructor();
  }

  export declare class STEPCAFControl_DataMapOfLabelShape_2 extends STEPCAFControl_DataMapOfLabelShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class STEPCAFControl_DataMapOfLabelShape_3 extends STEPCAFControl_DataMapOfLabelShape {
    constructor(theOther: STEPCAFControl_DataMapOfLabelShape);
  }

export declare type TKXDESTEPLib = {
  STEPCAFControl_ActorWrite: typeof STEPCAFControl_ActorWrite;
  STEPCAFControl_Controller: typeof STEPCAFControl_Controller;
  STEPCAFControl_ExternFile: typeof STEPCAFControl_ExternFile;
  STEPCAFControl_GDTProperty: typeof STEPCAFControl_GDTProperty;
  STEPCAFControl_Reader_1: typeof STEPCAFControl_Reader_1;
  STEPCAFControl_Reader_2: typeof STEPCAFControl_Reader_2;
  STEPCAFControl_Writer_1: typeof STEPCAFControl_Writer_1;
  STEPCAFControl_Writer_2: typeof STEPCAFControl_Writer_2;
  Handle_STEPCAFControl_ActorWrite_1: typeof Handle_STEPCAFControl_ActorWrite_1;
  Handle_STEPCAFControl_ActorWrite_2: typeof Handle_STEPCAFControl_ActorWrite_2;
  Handle_STEPCAFControl_ActorWrite_3: typeof Handle_STEPCAFControl_ActorWrite_3;
  Handle_STEPCAFControl_ActorWrite_4: typeof Handle_STEPCAFControl_ActorWrite_4;
  Handle_STEPCAFControl_Controller_1: typeof Handle_STEPCAFControl_Controller_1;
  Handle_STEPCAFControl_Controller_2: typeof Handle_STEPCAFControl_Controller_2;
  Handle_STEPCAFControl_Controller_3: typeof Handle_STEPCAFControl_Controller_3;
  Handle_STEPCAFControl_Controller_4: typeof Handle_STEPCAFControl_Controller_4;
  Handle_STEPCAFControl_ExternFile_1: typeof Handle_STEPCAFControl_ExternFile_1;
  Handle_STEPCAFControl_ExternFile_2: typeof Handle_STEPCAFControl_ExternFile_2;
  Handle_STEPCAFControl_ExternFile_3: typeof Handle_STEPCAFControl_ExternFile_3;
  Handle_STEPCAFControl_ExternFile_4: typeof Handle_STEPCAFControl_ExternFile_4;
  STEPCAFControl_DataMapOfLabelShape_1: typeof STEPCAFControl_DataMapOfLabelShape_1;
  STEPCAFControl_DataMapOfLabelShape_2: typeof STEPCAFControl_DataMapOfLabelShape_2;
  STEPCAFControl_DataMapOfLabelShape_3: typeof STEPCAFControl_DataMapOfLabelShape_3;
};
