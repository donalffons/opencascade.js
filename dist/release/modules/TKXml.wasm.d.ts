declare const libName = "./modules/TKXml.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class XmlDrivers {
  constructor();
  Factory(theGUID: Standard_GUID): any;
  DefineFormat(theApp: any): void;
  AttributeDrivers(theMsgDriver: any): any;
}

export declare class XmlDrivers_DocumentRetrievalDriver extends XmlLDrivers_DocumentRetrievalDriver {
  constructor()
  AttributeDrivers(theMsgDriver: any): any;
  ReadShapeSection(thePDoc: XmlObjMgt_Element, theMsgDriver: any, theRange: Message_ProgressRange): any;
  ShapeSetCleaning(theDriver: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlDrivers_DocumentStorageDriver extends XmlLDrivers_DocumentStorageDriver {
  constructor(theCopyright: TCollection_ExtendedString)
  AttributeDrivers(theMsgDriver: any): any;
  WriteShapeSection(thePDoc: XmlObjMgt_Element, theRange: Message_ProgressRange): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataXtd {
  constructor();
  AddDrivers(aDriverTable: any, anMsgDrv: any): void;
  SetDocumentVersion(DocVersion: Standard_Integer): void;
  DocumentVersion(): Standard_Integer;
}

export declare class XmlMDataXtd_ConstraintDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataXtd_GeometryDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataXtd_PatternStdDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataXtd_PositionDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataXtd_PresentationDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataXtd_TriangulationDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMNaming {
  constructor();
  AddDrivers(aDriverTable: any, aMessageDriver: any): void;
}

export declare class XmlMNaming_NamedShapeDriver extends XmlMDF_ADriver {
  constructor(aMessageDriver: any)
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
  ReadShapeSection(anElement: XmlObjMgt_Element, theRange: Message_ProgressRange): void;
  WriteShapeSection(anElement: XmlObjMgt_Element, theRange: Message_ProgressRange): void;
  Clear(): void;
  GetShapesLocations(): TopTools_LocationSet;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMNaming_NamingDriver extends XmlMDF_ADriver {
  constructor(aMessageDriver: any)
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMNaming_Shape1 {
  Element_1(): XmlObjMgt_Element;
  Element_2(): XmlObjMgt_Element;
  TShapeId(): Standard_Integer;
  LocId(): Standard_Integer;
  Orientation(): TopAbs_Orientation;
  SetShape(ID: Standard_Integer, LocID: Standard_Integer, Orient: TopAbs_Orientation): void;
  SetVertex(theVertex: TopoDS_Shape): void;
}

  export declare class XmlMNaming_Shape1_1 extends XmlMNaming_Shape1 {
    constructor(Doc: XmlObjMgt_Document);
  }

  export declare class XmlMNaming_Shape1_2 extends XmlMNaming_Shape1 {
    constructor(E: XmlObjMgt_Element);
  }

export declare class Handle_XmlDrivers_DocumentRetrievalDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlDrivers_DocumentRetrievalDriver): void;
  get(): XmlDrivers_DocumentRetrievalDriver;
}

  export declare class Handle_XmlDrivers_DocumentRetrievalDriver_1 extends Handle_XmlDrivers_DocumentRetrievalDriver {
    constructor();
  }

  export declare class Handle_XmlDrivers_DocumentRetrievalDriver_2 extends Handle_XmlDrivers_DocumentRetrievalDriver {
    constructor(thePtr: XmlDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlDrivers_DocumentRetrievalDriver_3 extends Handle_XmlDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlDrivers_DocumentRetrievalDriver_4 extends Handle_XmlDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlDrivers_DocumentRetrievalDriver);
  }

export declare class Handle_XmlDrivers_DocumentStorageDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlDrivers_DocumentStorageDriver): void;
  get(): XmlDrivers_DocumentStorageDriver;
}

  export declare class Handle_XmlDrivers_DocumentStorageDriver_1 extends Handle_XmlDrivers_DocumentStorageDriver {
    constructor();
  }

  export declare class Handle_XmlDrivers_DocumentStorageDriver_2 extends Handle_XmlDrivers_DocumentStorageDriver {
    constructor(thePtr: XmlDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlDrivers_DocumentStorageDriver_3 extends Handle_XmlDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlDrivers_DocumentStorageDriver_4 extends Handle_XmlDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlDrivers_DocumentStorageDriver);
  }

export declare class Handle_XmlMDataXtd_ConstraintDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataXtd_ConstraintDriver): void;
  get(): XmlMDataXtd_ConstraintDriver;
}

  export declare class Handle_XmlMDataXtd_ConstraintDriver_1 extends Handle_XmlMDataXtd_ConstraintDriver {
    constructor();
  }

  export declare class Handle_XmlMDataXtd_ConstraintDriver_2 extends Handle_XmlMDataXtd_ConstraintDriver {
    constructor(thePtr: XmlMDataXtd_ConstraintDriver);
  }

  export declare class Handle_XmlMDataXtd_ConstraintDriver_3 extends Handle_XmlMDataXtd_ConstraintDriver {
    constructor(theHandle: Handle_XmlMDataXtd_ConstraintDriver);
  }

  export declare class Handle_XmlMDataXtd_ConstraintDriver_4 extends Handle_XmlMDataXtd_ConstraintDriver {
    constructor(theHandle: Handle_XmlMDataXtd_ConstraintDriver);
  }

export declare class Handle_XmlMDataXtd_GeometryDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataXtd_GeometryDriver): void;
  get(): XmlMDataXtd_GeometryDriver;
}

  export declare class Handle_XmlMDataXtd_GeometryDriver_1 extends Handle_XmlMDataXtd_GeometryDriver {
    constructor();
  }

  export declare class Handle_XmlMDataXtd_GeometryDriver_2 extends Handle_XmlMDataXtd_GeometryDriver {
    constructor(thePtr: XmlMDataXtd_GeometryDriver);
  }

  export declare class Handle_XmlMDataXtd_GeometryDriver_3 extends Handle_XmlMDataXtd_GeometryDriver {
    constructor(theHandle: Handle_XmlMDataXtd_GeometryDriver);
  }

  export declare class Handle_XmlMDataXtd_GeometryDriver_4 extends Handle_XmlMDataXtd_GeometryDriver {
    constructor(theHandle: Handle_XmlMDataXtd_GeometryDriver);
  }

export declare class Handle_XmlMDataXtd_PatternStdDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataXtd_PatternStdDriver): void;
  get(): XmlMDataXtd_PatternStdDriver;
}

  export declare class Handle_XmlMDataXtd_PatternStdDriver_1 extends Handle_XmlMDataXtd_PatternStdDriver {
    constructor();
  }

  export declare class Handle_XmlMDataXtd_PatternStdDriver_2 extends Handle_XmlMDataXtd_PatternStdDriver {
    constructor(thePtr: XmlMDataXtd_PatternStdDriver);
  }

  export declare class Handle_XmlMDataXtd_PatternStdDriver_3 extends Handle_XmlMDataXtd_PatternStdDriver {
    constructor(theHandle: Handle_XmlMDataXtd_PatternStdDriver);
  }

  export declare class Handle_XmlMDataXtd_PatternStdDriver_4 extends Handle_XmlMDataXtd_PatternStdDriver {
    constructor(theHandle: Handle_XmlMDataXtd_PatternStdDriver);
  }

export declare class Handle_XmlMDataXtd_PositionDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataXtd_PositionDriver): void;
  get(): XmlMDataXtd_PositionDriver;
}

  export declare class Handle_XmlMDataXtd_PositionDriver_1 extends Handle_XmlMDataXtd_PositionDriver {
    constructor();
  }

  export declare class Handle_XmlMDataXtd_PositionDriver_2 extends Handle_XmlMDataXtd_PositionDriver {
    constructor(thePtr: XmlMDataXtd_PositionDriver);
  }

  export declare class Handle_XmlMDataXtd_PositionDriver_3 extends Handle_XmlMDataXtd_PositionDriver {
    constructor(theHandle: Handle_XmlMDataXtd_PositionDriver);
  }

  export declare class Handle_XmlMDataXtd_PositionDriver_4 extends Handle_XmlMDataXtd_PositionDriver {
    constructor(theHandle: Handle_XmlMDataXtd_PositionDriver);
  }

export declare class Handle_XmlMDataXtd_PresentationDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataXtd_PresentationDriver): void;
  get(): XmlMDataXtd_PresentationDriver;
}

  export declare class Handle_XmlMDataXtd_PresentationDriver_1 extends Handle_XmlMDataXtd_PresentationDriver {
    constructor();
  }

  export declare class Handle_XmlMDataXtd_PresentationDriver_2 extends Handle_XmlMDataXtd_PresentationDriver {
    constructor(thePtr: XmlMDataXtd_PresentationDriver);
  }

  export declare class Handle_XmlMDataXtd_PresentationDriver_3 extends Handle_XmlMDataXtd_PresentationDriver {
    constructor(theHandle: Handle_XmlMDataXtd_PresentationDriver);
  }

  export declare class Handle_XmlMDataXtd_PresentationDriver_4 extends Handle_XmlMDataXtd_PresentationDriver {
    constructor(theHandle: Handle_XmlMDataXtd_PresentationDriver);
  }

export declare class Handle_XmlMDataXtd_TriangulationDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataXtd_TriangulationDriver): void;
  get(): XmlMDataXtd_TriangulationDriver;
}

  export declare class Handle_XmlMDataXtd_TriangulationDriver_1 extends Handle_XmlMDataXtd_TriangulationDriver {
    constructor();
  }

  export declare class Handle_XmlMDataXtd_TriangulationDriver_2 extends Handle_XmlMDataXtd_TriangulationDriver {
    constructor(thePtr: XmlMDataXtd_TriangulationDriver);
  }

  export declare class Handle_XmlMDataXtd_TriangulationDriver_3 extends Handle_XmlMDataXtd_TriangulationDriver {
    constructor(theHandle: Handle_XmlMDataXtd_TriangulationDriver);
  }

  export declare class Handle_XmlMDataXtd_TriangulationDriver_4 extends Handle_XmlMDataXtd_TriangulationDriver {
    constructor(theHandle: Handle_XmlMDataXtd_TriangulationDriver);
  }

export declare class Handle_XmlMNaming_NamedShapeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMNaming_NamedShapeDriver): void;
  get(): XmlMNaming_NamedShapeDriver;
}

  export declare class Handle_XmlMNaming_NamedShapeDriver_1 extends Handle_XmlMNaming_NamedShapeDriver {
    constructor();
  }

  export declare class Handle_XmlMNaming_NamedShapeDriver_2 extends Handle_XmlMNaming_NamedShapeDriver {
    constructor(thePtr: XmlMNaming_NamedShapeDriver);
  }

  export declare class Handle_XmlMNaming_NamedShapeDriver_3 extends Handle_XmlMNaming_NamedShapeDriver {
    constructor(theHandle: Handle_XmlMNaming_NamedShapeDriver);
  }

  export declare class Handle_XmlMNaming_NamedShapeDriver_4 extends Handle_XmlMNaming_NamedShapeDriver {
    constructor(theHandle: Handle_XmlMNaming_NamedShapeDriver);
  }

export declare class Handle_XmlMNaming_NamingDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMNaming_NamingDriver): void;
  get(): XmlMNaming_NamingDriver;
}

  export declare class Handle_XmlMNaming_NamingDriver_1 extends Handle_XmlMNaming_NamingDriver {
    constructor();
  }

  export declare class Handle_XmlMNaming_NamingDriver_2 extends Handle_XmlMNaming_NamingDriver {
    constructor(thePtr: XmlMNaming_NamingDriver);
  }

  export declare class Handle_XmlMNaming_NamingDriver_3 extends Handle_XmlMNaming_NamingDriver {
    constructor(theHandle: Handle_XmlMNaming_NamingDriver);
  }

  export declare class Handle_XmlMNaming_NamingDriver_4 extends Handle_XmlMNaming_NamingDriver {
    constructor(theHandle: Handle_XmlMNaming_NamingDriver);
  }

export declare type TKXmlLib = {
  XmlDrivers_DocumentRetrievalDriver: typeof XmlDrivers_DocumentRetrievalDriver;
  XmlDrivers_DocumentStorageDriver: typeof XmlDrivers_DocumentStorageDriver;
  XmlMDataXtd_ConstraintDriver: typeof XmlMDataXtd_ConstraintDriver;
  XmlMDataXtd_GeometryDriver: typeof XmlMDataXtd_GeometryDriver;
  XmlMDataXtd_PatternStdDriver: typeof XmlMDataXtd_PatternStdDriver;
  XmlMDataXtd_PositionDriver: typeof XmlMDataXtd_PositionDriver;
  XmlMDataXtd_PresentationDriver: typeof XmlMDataXtd_PresentationDriver;
  XmlMDataXtd_TriangulationDriver: typeof XmlMDataXtd_TriangulationDriver;
  XmlMNaming_NamedShapeDriver: typeof XmlMNaming_NamedShapeDriver;
  XmlMNaming_NamingDriver: typeof XmlMNaming_NamingDriver;
  XmlMNaming_Shape1_1: typeof XmlMNaming_Shape1_1;
  XmlMNaming_Shape1_2: typeof XmlMNaming_Shape1_2;
  Handle_XmlDrivers_DocumentRetrievalDriver_1: typeof Handle_XmlDrivers_DocumentRetrievalDriver_1;
  Handle_XmlDrivers_DocumentRetrievalDriver_2: typeof Handle_XmlDrivers_DocumentRetrievalDriver_2;
  Handle_XmlDrivers_DocumentRetrievalDriver_3: typeof Handle_XmlDrivers_DocumentRetrievalDriver_3;
  Handle_XmlDrivers_DocumentRetrievalDriver_4: typeof Handle_XmlDrivers_DocumentRetrievalDriver_4;
  Handle_XmlDrivers_DocumentStorageDriver_1: typeof Handle_XmlDrivers_DocumentStorageDriver_1;
  Handle_XmlDrivers_DocumentStorageDriver_2: typeof Handle_XmlDrivers_DocumentStorageDriver_2;
  Handle_XmlDrivers_DocumentStorageDriver_3: typeof Handle_XmlDrivers_DocumentStorageDriver_3;
  Handle_XmlDrivers_DocumentStorageDriver_4: typeof Handle_XmlDrivers_DocumentStorageDriver_4;
  Handle_XmlMDataXtd_ConstraintDriver_1: typeof Handle_XmlMDataXtd_ConstraintDriver_1;
  Handle_XmlMDataXtd_ConstraintDriver_2: typeof Handle_XmlMDataXtd_ConstraintDriver_2;
  Handle_XmlMDataXtd_ConstraintDriver_3: typeof Handle_XmlMDataXtd_ConstraintDriver_3;
  Handle_XmlMDataXtd_ConstraintDriver_4: typeof Handle_XmlMDataXtd_ConstraintDriver_4;
  Handle_XmlMDataXtd_GeometryDriver_1: typeof Handle_XmlMDataXtd_GeometryDriver_1;
  Handle_XmlMDataXtd_GeometryDriver_2: typeof Handle_XmlMDataXtd_GeometryDriver_2;
  Handle_XmlMDataXtd_GeometryDriver_3: typeof Handle_XmlMDataXtd_GeometryDriver_3;
  Handle_XmlMDataXtd_GeometryDriver_4: typeof Handle_XmlMDataXtd_GeometryDriver_4;
  Handle_XmlMDataXtd_PatternStdDriver_1: typeof Handle_XmlMDataXtd_PatternStdDriver_1;
  Handle_XmlMDataXtd_PatternStdDriver_2: typeof Handle_XmlMDataXtd_PatternStdDriver_2;
  Handle_XmlMDataXtd_PatternStdDriver_3: typeof Handle_XmlMDataXtd_PatternStdDriver_3;
  Handle_XmlMDataXtd_PatternStdDriver_4: typeof Handle_XmlMDataXtd_PatternStdDriver_4;
  Handle_XmlMDataXtd_PositionDriver_1: typeof Handle_XmlMDataXtd_PositionDriver_1;
  Handle_XmlMDataXtd_PositionDriver_2: typeof Handle_XmlMDataXtd_PositionDriver_2;
  Handle_XmlMDataXtd_PositionDriver_3: typeof Handle_XmlMDataXtd_PositionDriver_3;
  Handle_XmlMDataXtd_PositionDriver_4: typeof Handle_XmlMDataXtd_PositionDriver_4;
  Handle_XmlMDataXtd_PresentationDriver_1: typeof Handle_XmlMDataXtd_PresentationDriver_1;
  Handle_XmlMDataXtd_PresentationDriver_2: typeof Handle_XmlMDataXtd_PresentationDriver_2;
  Handle_XmlMDataXtd_PresentationDriver_3: typeof Handle_XmlMDataXtd_PresentationDriver_3;
  Handle_XmlMDataXtd_PresentationDriver_4: typeof Handle_XmlMDataXtd_PresentationDriver_4;
  Handle_XmlMDataXtd_TriangulationDriver_1: typeof Handle_XmlMDataXtd_TriangulationDriver_1;
  Handle_XmlMDataXtd_TriangulationDriver_2: typeof Handle_XmlMDataXtd_TriangulationDriver_2;
  Handle_XmlMDataXtd_TriangulationDriver_3: typeof Handle_XmlMDataXtd_TriangulationDriver_3;
  Handle_XmlMDataXtd_TriangulationDriver_4: typeof Handle_XmlMDataXtd_TriangulationDriver_4;
  Handle_XmlMNaming_NamedShapeDriver_1: typeof Handle_XmlMNaming_NamedShapeDriver_1;
  Handle_XmlMNaming_NamedShapeDriver_2: typeof Handle_XmlMNaming_NamedShapeDriver_2;
  Handle_XmlMNaming_NamedShapeDriver_3: typeof Handle_XmlMNaming_NamedShapeDriver_3;
  Handle_XmlMNaming_NamedShapeDriver_4: typeof Handle_XmlMNaming_NamedShapeDriver_4;
  Handle_XmlMNaming_NamingDriver_1: typeof Handle_XmlMNaming_NamingDriver_1;
  Handle_XmlMNaming_NamingDriver_2: typeof Handle_XmlMNaming_NamingDriver_2;
  Handle_XmlMNaming_NamingDriver_3: typeof Handle_XmlMNaming_NamingDriver_3;
  Handle_XmlMNaming_NamingDriver_4: typeof Handle_XmlMNaming_NamingDriver_4;
};
