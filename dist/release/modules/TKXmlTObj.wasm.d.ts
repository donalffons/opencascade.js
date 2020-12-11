declare const libName = "./modules/TKXmlTObj.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class XmlTObjDrivers {
  constructor();
  Factory(aGUID: Standard_GUID): any;
  DefineFormat(theApp: any): void;
  AddDrivers(aDriverTable: any, anMsgDrv: any): void;
}

export declare class XmlTObjDrivers_DocumentRetrievalDriver extends XmlLDrivers_DocumentRetrievalDriver {
  constructor()
  AttributeDrivers(theMsgDriver: any): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlTObjDrivers_DocumentStorageDriver extends XmlLDrivers_DocumentStorageDriver {
  constructor(theCopyright: TCollection_ExtendedString)
  AttributeDrivers(theMsgDriver: any): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlTObjDrivers_IntSparseArrayDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlTObjDrivers_ModelDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlTObjDrivers_ObjectDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlTObjDrivers_ReferenceDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlTObjDrivers_XYZDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_XmlTObjDrivers_DocumentRetrievalDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlTObjDrivers_DocumentRetrievalDriver): void;
  get(): XmlTObjDrivers_DocumentRetrievalDriver;
}

  export declare class Handle_XmlTObjDrivers_DocumentRetrievalDriver_1 extends Handle_XmlTObjDrivers_DocumentRetrievalDriver {
    constructor();
  }

  export declare class Handle_XmlTObjDrivers_DocumentRetrievalDriver_2 extends Handle_XmlTObjDrivers_DocumentRetrievalDriver {
    constructor(thePtr: XmlTObjDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlTObjDrivers_DocumentRetrievalDriver_3 extends Handle_XmlTObjDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlTObjDrivers_DocumentRetrievalDriver_4 extends Handle_XmlTObjDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_DocumentRetrievalDriver);
  }

export declare class Handle_XmlTObjDrivers_DocumentStorageDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlTObjDrivers_DocumentStorageDriver): void;
  get(): XmlTObjDrivers_DocumentStorageDriver;
}

  export declare class Handle_XmlTObjDrivers_DocumentStorageDriver_1 extends Handle_XmlTObjDrivers_DocumentStorageDriver {
    constructor();
  }

  export declare class Handle_XmlTObjDrivers_DocumentStorageDriver_2 extends Handle_XmlTObjDrivers_DocumentStorageDriver {
    constructor(thePtr: XmlTObjDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlTObjDrivers_DocumentStorageDriver_3 extends Handle_XmlTObjDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlTObjDrivers_DocumentStorageDriver_4 extends Handle_XmlTObjDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_DocumentStorageDriver);
  }

export declare class Handle_XmlTObjDrivers_IntSparseArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlTObjDrivers_IntSparseArrayDriver): void;
  get(): XmlTObjDrivers_IntSparseArrayDriver;
}

  export declare class Handle_XmlTObjDrivers_IntSparseArrayDriver_1 extends Handle_XmlTObjDrivers_IntSparseArrayDriver {
    constructor();
  }

  export declare class Handle_XmlTObjDrivers_IntSparseArrayDriver_2 extends Handle_XmlTObjDrivers_IntSparseArrayDriver {
    constructor(thePtr: XmlTObjDrivers_IntSparseArrayDriver);
  }

  export declare class Handle_XmlTObjDrivers_IntSparseArrayDriver_3 extends Handle_XmlTObjDrivers_IntSparseArrayDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_IntSparseArrayDriver);
  }

  export declare class Handle_XmlTObjDrivers_IntSparseArrayDriver_4 extends Handle_XmlTObjDrivers_IntSparseArrayDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_IntSparseArrayDriver);
  }

export declare class Handle_XmlTObjDrivers_ModelDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlTObjDrivers_ModelDriver): void;
  get(): XmlTObjDrivers_ModelDriver;
}

  export declare class Handle_XmlTObjDrivers_ModelDriver_1 extends Handle_XmlTObjDrivers_ModelDriver {
    constructor();
  }

  export declare class Handle_XmlTObjDrivers_ModelDriver_2 extends Handle_XmlTObjDrivers_ModelDriver {
    constructor(thePtr: XmlTObjDrivers_ModelDriver);
  }

  export declare class Handle_XmlTObjDrivers_ModelDriver_3 extends Handle_XmlTObjDrivers_ModelDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_ModelDriver);
  }

  export declare class Handle_XmlTObjDrivers_ModelDriver_4 extends Handle_XmlTObjDrivers_ModelDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_ModelDriver);
  }

export declare class Handle_XmlTObjDrivers_ObjectDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlTObjDrivers_ObjectDriver): void;
  get(): XmlTObjDrivers_ObjectDriver;
}

  export declare class Handle_XmlTObjDrivers_ObjectDriver_1 extends Handle_XmlTObjDrivers_ObjectDriver {
    constructor();
  }

  export declare class Handle_XmlTObjDrivers_ObjectDriver_2 extends Handle_XmlTObjDrivers_ObjectDriver {
    constructor(thePtr: XmlTObjDrivers_ObjectDriver);
  }

  export declare class Handle_XmlTObjDrivers_ObjectDriver_3 extends Handle_XmlTObjDrivers_ObjectDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_ObjectDriver);
  }

  export declare class Handle_XmlTObjDrivers_ObjectDriver_4 extends Handle_XmlTObjDrivers_ObjectDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_ObjectDriver);
  }

export declare class Handle_XmlTObjDrivers_ReferenceDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlTObjDrivers_ReferenceDriver): void;
  get(): XmlTObjDrivers_ReferenceDriver;
}

  export declare class Handle_XmlTObjDrivers_ReferenceDriver_1 extends Handle_XmlTObjDrivers_ReferenceDriver {
    constructor();
  }

  export declare class Handle_XmlTObjDrivers_ReferenceDriver_2 extends Handle_XmlTObjDrivers_ReferenceDriver {
    constructor(thePtr: XmlTObjDrivers_ReferenceDriver);
  }

  export declare class Handle_XmlTObjDrivers_ReferenceDriver_3 extends Handle_XmlTObjDrivers_ReferenceDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_ReferenceDriver);
  }

  export declare class Handle_XmlTObjDrivers_ReferenceDriver_4 extends Handle_XmlTObjDrivers_ReferenceDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_ReferenceDriver);
  }

export declare class Handle_XmlTObjDrivers_XYZDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlTObjDrivers_XYZDriver): void;
  get(): XmlTObjDrivers_XYZDriver;
}

  export declare class Handle_XmlTObjDrivers_XYZDriver_1 extends Handle_XmlTObjDrivers_XYZDriver {
    constructor();
  }

  export declare class Handle_XmlTObjDrivers_XYZDriver_2 extends Handle_XmlTObjDrivers_XYZDriver {
    constructor(thePtr: XmlTObjDrivers_XYZDriver);
  }

  export declare class Handle_XmlTObjDrivers_XYZDriver_3 extends Handle_XmlTObjDrivers_XYZDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_XYZDriver);
  }

  export declare class Handle_XmlTObjDrivers_XYZDriver_4 extends Handle_XmlTObjDrivers_XYZDriver {
    constructor(theHandle: Handle_XmlTObjDrivers_XYZDriver);
  }

export declare type TKXmlTObjLib = {
  XmlTObjDrivers_DocumentRetrievalDriver: typeof XmlTObjDrivers_DocumentRetrievalDriver;
  XmlTObjDrivers_DocumentStorageDriver: typeof XmlTObjDrivers_DocumentStorageDriver;
  XmlTObjDrivers_IntSparseArrayDriver: typeof XmlTObjDrivers_IntSparseArrayDriver;
  XmlTObjDrivers_ModelDriver: typeof XmlTObjDrivers_ModelDriver;
  XmlTObjDrivers_ObjectDriver: typeof XmlTObjDrivers_ObjectDriver;
  XmlTObjDrivers_ReferenceDriver: typeof XmlTObjDrivers_ReferenceDriver;
  XmlTObjDrivers_XYZDriver: typeof XmlTObjDrivers_XYZDriver;
  Handle_XmlTObjDrivers_DocumentRetrievalDriver_1: typeof Handle_XmlTObjDrivers_DocumentRetrievalDriver_1;
  Handle_XmlTObjDrivers_DocumentRetrievalDriver_2: typeof Handle_XmlTObjDrivers_DocumentRetrievalDriver_2;
  Handle_XmlTObjDrivers_DocumentRetrievalDriver_3: typeof Handle_XmlTObjDrivers_DocumentRetrievalDriver_3;
  Handle_XmlTObjDrivers_DocumentRetrievalDriver_4: typeof Handle_XmlTObjDrivers_DocumentRetrievalDriver_4;
  Handle_XmlTObjDrivers_DocumentStorageDriver_1: typeof Handle_XmlTObjDrivers_DocumentStorageDriver_1;
  Handle_XmlTObjDrivers_DocumentStorageDriver_2: typeof Handle_XmlTObjDrivers_DocumentStorageDriver_2;
  Handle_XmlTObjDrivers_DocumentStorageDriver_3: typeof Handle_XmlTObjDrivers_DocumentStorageDriver_3;
  Handle_XmlTObjDrivers_DocumentStorageDriver_4: typeof Handle_XmlTObjDrivers_DocumentStorageDriver_4;
  Handle_XmlTObjDrivers_IntSparseArrayDriver_1: typeof Handle_XmlTObjDrivers_IntSparseArrayDriver_1;
  Handle_XmlTObjDrivers_IntSparseArrayDriver_2: typeof Handle_XmlTObjDrivers_IntSparseArrayDriver_2;
  Handle_XmlTObjDrivers_IntSparseArrayDriver_3: typeof Handle_XmlTObjDrivers_IntSparseArrayDriver_3;
  Handle_XmlTObjDrivers_IntSparseArrayDriver_4: typeof Handle_XmlTObjDrivers_IntSparseArrayDriver_4;
  Handle_XmlTObjDrivers_ModelDriver_1: typeof Handle_XmlTObjDrivers_ModelDriver_1;
  Handle_XmlTObjDrivers_ModelDriver_2: typeof Handle_XmlTObjDrivers_ModelDriver_2;
  Handle_XmlTObjDrivers_ModelDriver_3: typeof Handle_XmlTObjDrivers_ModelDriver_3;
  Handle_XmlTObjDrivers_ModelDriver_4: typeof Handle_XmlTObjDrivers_ModelDriver_4;
  Handle_XmlTObjDrivers_ObjectDriver_1: typeof Handle_XmlTObjDrivers_ObjectDriver_1;
  Handle_XmlTObjDrivers_ObjectDriver_2: typeof Handle_XmlTObjDrivers_ObjectDriver_2;
  Handle_XmlTObjDrivers_ObjectDriver_3: typeof Handle_XmlTObjDrivers_ObjectDriver_3;
  Handle_XmlTObjDrivers_ObjectDriver_4: typeof Handle_XmlTObjDrivers_ObjectDriver_4;
  Handle_XmlTObjDrivers_ReferenceDriver_1: typeof Handle_XmlTObjDrivers_ReferenceDriver_1;
  Handle_XmlTObjDrivers_ReferenceDriver_2: typeof Handle_XmlTObjDrivers_ReferenceDriver_2;
  Handle_XmlTObjDrivers_ReferenceDriver_3: typeof Handle_XmlTObjDrivers_ReferenceDriver_3;
  Handle_XmlTObjDrivers_ReferenceDriver_4: typeof Handle_XmlTObjDrivers_ReferenceDriver_4;
  Handle_XmlTObjDrivers_XYZDriver_1: typeof Handle_XmlTObjDrivers_XYZDriver_1;
  Handle_XmlTObjDrivers_XYZDriver_2: typeof Handle_XmlTObjDrivers_XYZDriver_2;
  Handle_XmlTObjDrivers_XYZDriver_3: typeof Handle_XmlTObjDrivers_XYZDriver_3;
  Handle_XmlTObjDrivers_XYZDriver_4: typeof Handle_XmlTObjDrivers_XYZDriver_4;
};
