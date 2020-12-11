declare const libName = "./modules/TKXmlXCAF.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class XmlMXCAFDoc {
  constructor();
  AddDrivers(aDriverTable: Handle_XmlMDF_ADriverTable, anMsgDrv: any): void;
}

export declare class XmlMXCAFDoc_AssemblyItemRefDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_CentroidDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_ColorDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_DatumDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_DimTolDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_GraphNodeDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_LocationDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  Translate_1(theLoc: TopLoc_Location, theParent: XmlObjMgt_Element, theMap: XmlObjMgt_SRelocationTable): void;
  Translate_2(theParent: XmlObjMgt_Element, theLoc: TopLoc_Location, theMap: XmlObjMgt_RRelocationTable): Standard_Boolean;
  SetSharedLocations(theLocations: TopTools_LocationSetPtr): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_MaterialDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_NoteDriver extends XmlMDF_ADriver {
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_NoteBinDataDriver extends XmlMXCAFDoc_NoteDriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_NoteCommentDriver extends XmlMXCAFDoc_NoteDriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMXCAFDoc_VisMaterialDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
}

export declare class XmlMXCAFDoc_VisMaterialToolDriver extends XmlMDF_ADriver {
  constructor(theMsgDriver: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
}

export declare class XmlXCAFDrivers {
  constructor();
  Factory(aGUID: Standard_GUID): any;
  DefineFormat(theApp: any): void;
}

export declare class XmlXCAFDrivers_DocumentRetrievalDriver extends XmlDrivers_DocumentRetrievalDriver {
  constructor()
  AttributeDrivers(theMsgDriver: any): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlXCAFDrivers_DocumentStorageDriver extends XmlDrivers_DocumentStorageDriver {
  constructor(theCopyright: TCollection_ExtendedString)
  AttributeDrivers(theMsgDriver: any): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_XmlMXCAFDoc_AssemblyItemRefDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_AssemblyItemRefDriver): void;
  get(): XmlMXCAFDoc_AssemblyItemRefDriver;
}

  export declare class Handle_XmlMXCAFDoc_AssemblyItemRefDriver_1 extends Handle_XmlMXCAFDoc_AssemblyItemRefDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_AssemblyItemRefDriver_2 extends Handle_XmlMXCAFDoc_AssemblyItemRefDriver {
    constructor(thePtr: XmlMXCAFDoc_AssemblyItemRefDriver);
  }

  export declare class Handle_XmlMXCAFDoc_AssemblyItemRefDriver_3 extends Handle_XmlMXCAFDoc_AssemblyItemRefDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_AssemblyItemRefDriver);
  }

  export declare class Handle_XmlMXCAFDoc_AssemblyItemRefDriver_4 extends Handle_XmlMXCAFDoc_AssemblyItemRefDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_AssemblyItemRefDriver);
  }

export declare class Handle_XmlMXCAFDoc_CentroidDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_CentroidDriver): void;
  get(): XmlMXCAFDoc_CentroidDriver;
}

  export declare class Handle_XmlMXCAFDoc_CentroidDriver_1 extends Handle_XmlMXCAFDoc_CentroidDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_CentroidDriver_2 extends Handle_XmlMXCAFDoc_CentroidDriver {
    constructor(thePtr: XmlMXCAFDoc_CentroidDriver);
  }

  export declare class Handle_XmlMXCAFDoc_CentroidDriver_3 extends Handle_XmlMXCAFDoc_CentroidDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_CentroidDriver);
  }

  export declare class Handle_XmlMXCAFDoc_CentroidDriver_4 extends Handle_XmlMXCAFDoc_CentroidDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_CentroidDriver);
  }

export declare class Handle_XmlMXCAFDoc_ColorDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_ColorDriver): void;
  get(): XmlMXCAFDoc_ColorDriver;
}

  export declare class Handle_XmlMXCAFDoc_ColorDriver_1 extends Handle_XmlMXCAFDoc_ColorDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_ColorDriver_2 extends Handle_XmlMXCAFDoc_ColorDriver {
    constructor(thePtr: XmlMXCAFDoc_ColorDriver);
  }

  export declare class Handle_XmlMXCAFDoc_ColorDriver_3 extends Handle_XmlMXCAFDoc_ColorDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_ColorDriver);
  }

  export declare class Handle_XmlMXCAFDoc_ColorDriver_4 extends Handle_XmlMXCAFDoc_ColorDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_ColorDriver);
  }

export declare class Handle_XmlMXCAFDoc_DatumDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_DatumDriver): void;
  get(): XmlMXCAFDoc_DatumDriver;
}

  export declare class Handle_XmlMXCAFDoc_DatumDriver_1 extends Handle_XmlMXCAFDoc_DatumDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_DatumDriver_2 extends Handle_XmlMXCAFDoc_DatumDriver {
    constructor(thePtr: XmlMXCAFDoc_DatumDriver);
  }

  export declare class Handle_XmlMXCAFDoc_DatumDriver_3 extends Handle_XmlMXCAFDoc_DatumDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_DatumDriver);
  }

  export declare class Handle_XmlMXCAFDoc_DatumDriver_4 extends Handle_XmlMXCAFDoc_DatumDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_DatumDriver);
  }

export declare class Handle_XmlMXCAFDoc_DimTolDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_DimTolDriver): void;
  get(): XmlMXCAFDoc_DimTolDriver;
}

  export declare class Handle_XmlMXCAFDoc_DimTolDriver_1 extends Handle_XmlMXCAFDoc_DimTolDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_DimTolDriver_2 extends Handle_XmlMXCAFDoc_DimTolDriver {
    constructor(thePtr: XmlMXCAFDoc_DimTolDriver);
  }

  export declare class Handle_XmlMXCAFDoc_DimTolDriver_3 extends Handle_XmlMXCAFDoc_DimTolDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_DimTolDriver);
  }

  export declare class Handle_XmlMXCAFDoc_DimTolDriver_4 extends Handle_XmlMXCAFDoc_DimTolDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_DimTolDriver);
  }

export declare class Handle_XmlMXCAFDoc_GraphNodeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_GraphNodeDriver): void;
  get(): XmlMXCAFDoc_GraphNodeDriver;
}

  export declare class Handle_XmlMXCAFDoc_GraphNodeDriver_1 extends Handle_XmlMXCAFDoc_GraphNodeDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_GraphNodeDriver_2 extends Handle_XmlMXCAFDoc_GraphNodeDriver {
    constructor(thePtr: XmlMXCAFDoc_GraphNodeDriver);
  }

  export declare class Handle_XmlMXCAFDoc_GraphNodeDriver_3 extends Handle_XmlMXCAFDoc_GraphNodeDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_GraphNodeDriver);
  }

  export declare class Handle_XmlMXCAFDoc_GraphNodeDriver_4 extends Handle_XmlMXCAFDoc_GraphNodeDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_GraphNodeDriver);
  }

export declare class Handle_XmlMXCAFDoc_LocationDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_LocationDriver): void;
  get(): XmlMXCAFDoc_LocationDriver;
}

  export declare class Handle_XmlMXCAFDoc_LocationDriver_1 extends Handle_XmlMXCAFDoc_LocationDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_LocationDriver_2 extends Handle_XmlMXCAFDoc_LocationDriver {
    constructor(thePtr: XmlMXCAFDoc_LocationDriver);
  }

  export declare class Handle_XmlMXCAFDoc_LocationDriver_3 extends Handle_XmlMXCAFDoc_LocationDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_LocationDriver);
  }

  export declare class Handle_XmlMXCAFDoc_LocationDriver_4 extends Handle_XmlMXCAFDoc_LocationDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_LocationDriver);
  }

export declare class Handle_XmlMXCAFDoc_MaterialDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_MaterialDriver): void;
  get(): XmlMXCAFDoc_MaterialDriver;
}

  export declare class Handle_XmlMXCAFDoc_MaterialDriver_1 extends Handle_XmlMXCAFDoc_MaterialDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_MaterialDriver_2 extends Handle_XmlMXCAFDoc_MaterialDriver {
    constructor(thePtr: XmlMXCAFDoc_MaterialDriver);
  }

  export declare class Handle_XmlMXCAFDoc_MaterialDriver_3 extends Handle_XmlMXCAFDoc_MaterialDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_MaterialDriver);
  }

  export declare class Handle_XmlMXCAFDoc_MaterialDriver_4 extends Handle_XmlMXCAFDoc_MaterialDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_MaterialDriver);
  }

export declare class Handle_XmlMXCAFDoc_NoteDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_NoteDriver): void;
  get(): XmlMXCAFDoc_NoteDriver;
}

  export declare class Handle_XmlMXCAFDoc_NoteDriver_1 extends Handle_XmlMXCAFDoc_NoteDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_NoteDriver_2 extends Handle_XmlMXCAFDoc_NoteDriver {
    constructor(thePtr: XmlMXCAFDoc_NoteDriver);
  }

  export declare class Handle_XmlMXCAFDoc_NoteDriver_3 extends Handle_XmlMXCAFDoc_NoteDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_NoteDriver);
  }

  export declare class Handle_XmlMXCAFDoc_NoteDriver_4 extends Handle_XmlMXCAFDoc_NoteDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_NoteDriver);
  }

export declare class Handle_XmlMXCAFDoc_NoteBinDataDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_NoteBinDataDriver): void;
  get(): XmlMXCAFDoc_NoteBinDataDriver;
}

  export declare class Handle_XmlMXCAFDoc_NoteBinDataDriver_1 extends Handle_XmlMXCAFDoc_NoteBinDataDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_NoteBinDataDriver_2 extends Handle_XmlMXCAFDoc_NoteBinDataDriver {
    constructor(thePtr: XmlMXCAFDoc_NoteBinDataDriver);
  }

  export declare class Handle_XmlMXCAFDoc_NoteBinDataDriver_3 extends Handle_XmlMXCAFDoc_NoteBinDataDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_NoteBinDataDriver);
  }

  export declare class Handle_XmlMXCAFDoc_NoteBinDataDriver_4 extends Handle_XmlMXCAFDoc_NoteBinDataDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_NoteBinDataDriver);
  }

export declare class Handle_XmlMXCAFDoc_NoteCommentDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_NoteCommentDriver): void;
  get(): XmlMXCAFDoc_NoteCommentDriver;
}

  export declare class Handle_XmlMXCAFDoc_NoteCommentDriver_1 extends Handle_XmlMXCAFDoc_NoteCommentDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_NoteCommentDriver_2 extends Handle_XmlMXCAFDoc_NoteCommentDriver {
    constructor(thePtr: XmlMXCAFDoc_NoteCommentDriver);
  }

  export declare class Handle_XmlMXCAFDoc_NoteCommentDriver_3 extends Handle_XmlMXCAFDoc_NoteCommentDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_NoteCommentDriver);
  }

  export declare class Handle_XmlMXCAFDoc_NoteCommentDriver_4 extends Handle_XmlMXCAFDoc_NoteCommentDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_NoteCommentDriver);
  }

export declare class Handle_XmlMXCAFDoc_VisMaterialDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_VisMaterialDriver): void;
  get(): XmlMXCAFDoc_VisMaterialDriver;
}

  export declare class Handle_XmlMXCAFDoc_VisMaterialDriver_1 extends Handle_XmlMXCAFDoc_VisMaterialDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_VisMaterialDriver_2 extends Handle_XmlMXCAFDoc_VisMaterialDriver {
    constructor(thePtr: XmlMXCAFDoc_VisMaterialDriver);
  }

  export declare class Handle_XmlMXCAFDoc_VisMaterialDriver_3 extends Handle_XmlMXCAFDoc_VisMaterialDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_VisMaterialDriver);
  }

  export declare class Handle_XmlMXCAFDoc_VisMaterialDriver_4 extends Handle_XmlMXCAFDoc_VisMaterialDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_VisMaterialDriver);
  }

export declare class Handle_XmlMXCAFDoc_VisMaterialToolDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMXCAFDoc_VisMaterialToolDriver): void;
  get(): XmlMXCAFDoc_VisMaterialToolDriver;
}

  export declare class Handle_XmlMXCAFDoc_VisMaterialToolDriver_1 extends Handle_XmlMXCAFDoc_VisMaterialToolDriver {
    constructor();
  }

  export declare class Handle_XmlMXCAFDoc_VisMaterialToolDriver_2 extends Handle_XmlMXCAFDoc_VisMaterialToolDriver {
    constructor(thePtr: XmlMXCAFDoc_VisMaterialToolDriver);
  }

  export declare class Handle_XmlMXCAFDoc_VisMaterialToolDriver_3 extends Handle_XmlMXCAFDoc_VisMaterialToolDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_VisMaterialToolDriver);
  }

  export declare class Handle_XmlMXCAFDoc_VisMaterialToolDriver_4 extends Handle_XmlMXCAFDoc_VisMaterialToolDriver {
    constructor(theHandle: Handle_XmlMXCAFDoc_VisMaterialToolDriver);
  }

export declare class Handle_XmlXCAFDrivers_DocumentRetrievalDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlXCAFDrivers_DocumentRetrievalDriver): void;
  get(): XmlXCAFDrivers_DocumentRetrievalDriver;
}

  export declare class Handle_XmlXCAFDrivers_DocumentRetrievalDriver_1 extends Handle_XmlXCAFDrivers_DocumentRetrievalDriver {
    constructor();
  }

  export declare class Handle_XmlXCAFDrivers_DocumentRetrievalDriver_2 extends Handle_XmlXCAFDrivers_DocumentRetrievalDriver {
    constructor(thePtr: XmlXCAFDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlXCAFDrivers_DocumentRetrievalDriver_3 extends Handle_XmlXCAFDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlXCAFDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlXCAFDrivers_DocumentRetrievalDriver_4 extends Handle_XmlXCAFDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlXCAFDrivers_DocumentRetrievalDriver);
  }

export declare class Handle_XmlXCAFDrivers_DocumentStorageDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlXCAFDrivers_DocumentStorageDriver): void;
  get(): XmlXCAFDrivers_DocumentStorageDriver;
}

  export declare class Handle_XmlXCAFDrivers_DocumentStorageDriver_1 extends Handle_XmlXCAFDrivers_DocumentStorageDriver {
    constructor();
  }

  export declare class Handle_XmlXCAFDrivers_DocumentStorageDriver_2 extends Handle_XmlXCAFDrivers_DocumentStorageDriver {
    constructor(thePtr: XmlXCAFDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlXCAFDrivers_DocumentStorageDriver_3 extends Handle_XmlXCAFDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlXCAFDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlXCAFDrivers_DocumentStorageDriver_4 extends Handle_XmlXCAFDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlXCAFDrivers_DocumentStorageDriver);
  }

export declare type TKXmlXCAFLib = {
  XmlMXCAFDoc_AssemblyItemRefDriver: typeof XmlMXCAFDoc_AssemblyItemRefDriver;
  XmlMXCAFDoc_CentroidDriver: typeof XmlMXCAFDoc_CentroidDriver;
  XmlMXCAFDoc_ColorDriver: typeof XmlMXCAFDoc_ColorDriver;
  XmlMXCAFDoc_DatumDriver: typeof XmlMXCAFDoc_DatumDriver;
  XmlMXCAFDoc_DimTolDriver: typeof XmlMXCAFDoc_DimTolDriver;
  XmlMXCAFDoc_GraphNodeDriver: typeof XmlMXCAFDoc_GraphNodeDriver;
  XmlMXCAFDoc_LocationDriver: typeof XmlMXCAFDoc_LocationDriver;
  XmlMXCAFDoc_MaterialDriver: typeof XmlMXCAFDoc_MaterialDriver;
  XmlMXCAFDoc_NoteBinDataDriver: typeof XmlMXCAFDoc_NoteBinDataDriver;
  XmlMXCAFDoc_NoteCommentDriver: typeof XmlMXCAFDoc_NoteCommentDriver;
  XmlMXCAFDoc_VisMaterialDriver: typeof XmlMXCAFDoc_VisMaterialDriver;
  XmlMXCAFDoc_VisMaterialToolDriver: typeof XmlMXCAFDoc_VisMaterialToolDriver;
  XmlXCAFDrivers_DocumentRetrievalDriver: typeof XmlXCAFDrivers_DocumentRetrievalDriver;
  XmlXCAFDrivers_DocumentStorageDriver: typeof XmlXCAFDrivers_DocumentStorageDriver;
  Handle_XmlMXCAFDoc_AssemblyItemRefDriver_1: typeof Handle_XmlMXCAFDoc_AssemblyItemRefDriver_1;
  Handle_XmlMXCAFDoc_AssemblyItemRefDriver_2: typeof Handle_XmlMXCAFDoc_AssemblyItemRefDriver_2;
  Handle_XmlMXCAFDoc_AssemblyItemRefDriver_3: typeof Handle_XmlMXCAFDoc_AssemblyItemRefDriver_3;
  Handle_XmlMXCAFDoc_AssemblyItemRefDriver_4: typeof Handle_XmlMXCAFDoc_AssemblyItemRefDriver_4;
  Handle_XmlMXCAFDoc_CentroidDriver_1: typeof Handle_XmlMXCAFDoc_CentroidDriver_1;
  Handle_XmlMXCAFDoc_CentroidDriver_2: typeof Handle_XmlMXCAFDoc_CentroidDriver_2;
  Handle_XmlMXCAFDoc_CentroidDriver_3: typeof Handle_XmlMXCAFDoc_CentroidDriver_3;
  Handle_XmlMXCAFDoc_CentroidDriver_4: typeof Handle_XmlMXCAFDoc_CentroidDriver_4;
  Handle_XmlMXCAFDoc_ColorDriver_1: typeof Handle_XmlMXCAFDoc_ColorDriver_1;
  Handle_XmlMXCAFDoc_ColorDriver_2: typeof Handle_XmlMXCAFDoc_ColorDriver_2;
  Handle_XmlMXCAFDoc_ColorDriver_3: typeof Handle_XmlMXCAFDoc_ColorDriver_3;
  Handle_XmlMXCAFDoc_ColorDriver_4: typeof Handle_XmlMXCAFDoc_ColorDriver_4;
  Handle_XmlMXCAFDoc_DatumDriver_1: typeof Handle_XmlMXCAFDoc_DatumDriver_1;
  Handle_XmlMXCAFDoc_DatumDriver_2: typeof Handle_XmlMXCAFDoc_DatumDriver_2;
  Handle_XmlMXCAFDoc_DatumDriver_3: typeof Handle_XmlMXCAFDoc_DatumDriver_3;
  Handle_XmlMXCAFDoc_DatumDriver_4: typeof Handle_XmlMXCAFDoc_DatumDriver_4;
  Handle_XmlMXCAFDoc_DimTolDriver_1: typeof Handle_XmlMXCAFDoc_DimTolDriver_1;
  Handle_XmlMXCAFDoc_DimTolDriver_2: typeof Handle_XmlMXCAFDoc_DimTolDriver_2;
  Handle_XmlMXCAFDoc_DimTolDriver_3: typeof Handle_XmlMXCAFDoc_DimTolDriver_3;
  Handle_XmlMXCAFDoc_DimTolDriver_4: typeof Handle_XmlMXCAFDoc_DimTolDriver_4;
  Handle_XmlMXCAFDoc_GraphNodeDriver_1: typeof Handle_XmlMXCAFDoc_GraphNodeDriver_1;
  Handle_XmlMXCAFDoc_GraphNodeDriver_2: typeof Handle_XmlMXCAFDoc_GraphNodeDriver_2;
  Handle_XmlMXCAFDoc_GraphNodeDriver_3: typeof Handle_XmlMXCAFDoc_GraphNodeDriver_3;
  Handle_XmlMXCAFDoc_GraphNodeDriver_4: typeof Handle_XmlMXCAFDoc_GraphNodeDriver_4;
  Handle_XmlMXCAFDoc_LocationDriver_1: typeof Handle_XmlMXCAFDoc_LocationDriver_1;
  Handle_XmlMXCAFDoc_LocationDriver_2: typeof Handle_XmlMXCAFDoc_LocationDriver_2;
  Handle_XmlMXCAFDoc_LocationDriver_3: typeof Handle_XmlMXCAFDoc_LocationDriver_3;
  Handle_XmlMXCAFDoc_LocationDriver_4: typeof Handle_XmlMXCAFDoc_LocationDriver_4;
  Handle_XmlMXCAFDoc_MaterialDriver_1: typeof Handle_XmlMXCAFDoc_MaterialDriver_1;
  Handle_XmlMXCAFDoc_MaterialDriver_2: typeof Handle_XmlMXCAFDoc_MaterialDriver_2;
  Handle_XmlMXCAFDoc_MaterialDriver_3: typeof Handle_XmlMXCAFDoc_MaterialDriver_3;
  Handle_XmlMXCAFDoc_MaterialDriver_4: typeof Handle_XmlMXCAFDoc_MaterialDriver_4;
  Handle_XmlMXCAFDoc_NoteDriver_1: typeof Handle_XmlMXCAFDoc_NoteDriver_1;
  Handle_XmlMXCAFDoc_NoteDriver_2: typeof Handle_XmlMXCAFDoc_NoteDriver_2;
  Handle_XmlMXCAFDoc_NoteDriver_3: typeof Handle_XmlMXCAFDoc_NoteDriver_3;
  Handle_XmlMXCAFDoc_NoteDriver_4: typeof Handle_XmlMXCAFDoc_NoteDriver_4;
  Handle_XmlMXCAFDoc_NoteBinDataDriver_1: typeof Handle_XmlMXCAFDoc_NoteBinDataDriver_1;
  Handle_XmlMXCAFDoc_NoteBinDataDriver_2: typeof Handle_XmlMXCAFDoc_NoteBinDataDriver_2;
  Handle_XmlMXCAFDoc_NoteBinDataDriver_3: typeof Handle_XmlMXCAFDoc_NoteBinDataDriver_3;
  Handle_XmlMXCAFDoc_NoteBinDataDriver_4: typeof Handle_XmlMXCAFDoc_NoteBinDataDriver_4;
  Handle_XmlMXCAFDoc_NoteCommentDriver_1: typeof Handle_XmlMXCAFDoc_NoteCommentDriver_1;
  Handle_XmlMXCAFDoc_NoteCommentDriver_2: typeof Handle_XmlMXCAFDoc_NoteCommentDriver_2;
  Handle_XmlMXCAFDoc_NoteCommentDriver_3: typeof Handle_XmlMXCAFDoc_NoteCommentDriver_3;
  Handle_XmlMXCAFDoc_NoteCommentDriver_4: typeof Handle_XmlMXCAFDoc_NoteCommentDriver_4;
  Handle_XmlMXCAFDoc_VisMaterialDriver_1: typeof Handle_XmlMXCAFDoc_VisMaterialDriver_1;
  Handle_XmlMXCAFDoc_VisMaterialDriver_2: typeof Handle_XmlMXCAFDoc_VisMaterialDriver_2;
  Handle_XmlMXCAFDoc_VisMaterialDriver_3: typeof Handle_XmlMXCAFDoc_VisMaterialDriver_3;
  Handle_XmlMXCAFDoc_VisMaterialDriver_4: typeof Handle_XmlMXCAFDoc_VisMaterialDriver_4;
  Handle_XmlMXCAFDoc_VisMaterialToolDriver_1: typeof Handle_XmlMXCAFDoc_VisMaterialToolDriver_1;
  Handle_XmlMXCAFDoc_VisMaterialToolDriver_2: typeof Handle_XmlMXCAFDoc_VisMaterialToolDriver_2;
  Handle_XmlMXCAFDoc_VisMaterialToolDriver_3: typeof Handle_XmlMXCAFDoc_VisMaterialToolDriver_3;
  Handle_XmlMXCAFDoc_VisMaterialToolDriver_4: typeof Handle_XmlMXCAFDoc_VisMaterialToolDriver_4;
  Handle_XmlXCAFDrivers_DocumentRetrievalDriver_1: typeof Handle_XmlXCAFDrivers_DocumentRetrievalDriver_1;
  Handle_XmlXCAFDrivers_DocumentRetrievalDriver_2: typeof Handle_XmlXCAFDrivers_DocumentRetrievalDriver_2;
  Handle_XmlXCAFDrivers_DocumentRetrievalDriver_3: typeof Handle_XmlXCAFDrivers_DocumentRetrievalDriver_3;
  Handle_XmlXCAFDrivers_DocumentRetrievalDriver_4: typeof Handle_XmlXCAFDrivers_DocumentRetrievalDriver_4;
  Handle_XmlXCAFDrivers_DocumentStorageDriver_1: typeof Handle_XmlXCAFDrivers_DocumentStorageDriver_1;
  Handle_XmlXCAFDrivers_DocumentStorageDriver_2: typeof Handle_XmlXCAFDrivers_DocumentStorageDriver_2;
  Handle_XmlXCAFDrivers_DocumentStorageDriver_3: typeof Handle_XmlXCAFDrivers_DocumentStorageDriver_3;
  Handle_XmlXCAFDrivers_DocumentStorageDriver_4: typeof Handle_XmlXCAFDrivers_DocumentStorageDriver_4;
};
