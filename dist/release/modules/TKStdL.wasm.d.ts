declare const libName = "./modules/TKStdL.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class StdObjMgt_Persistent extends Standard_Transient {
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(a0: any): void;
  PName(): Standard_CString;
  ImportDocument(theDocument: any): void;
  CreateAttribute(): any;
  GetAttribute(): any;
  ImportAttribute(): void;
  AsciiString(): any;
  ExtString(): any;
  Label(theDF: any): TDF_Label;
  TypeNum_1(): Standard_Integer;
  TypeNum_2(theTypeNum: Standard_Integer): void;
  RefNum_1(): Standard_Integer;
  RefNum_2(theRefNum: Standard_Integer): void;
}

export declare class StdObjMgt_SharedObject {
  constructor();
}

export declare class StdObjMgt_ReadData {
  constructor(theDriver: any, theNumberOfObjects: Standard_Integer)
  ReadPersistentObject(theRef: Standard_Integer): void;
  PersistentObject(theRef: Standard_Integer): any;
  ReadReference(): any;
}

export declare class StdObjMgt_WriteData {
  constructor(theDriver: any)
  WritePersistentObject(thePersistent: any): void;
}

export declare class StdLPersistent_HArray1 {
  constructor();
}

export declare class StdLPersistent_HArray2 {
  constructor();
}

export declare class StdLDrivers_DocumentRetrievalDriver extends PCDM_RetrievalDriver {
  constructor();
  CreateDocument(): any;
  Read_1(theFileName: TCollection_ExtendedString, theNewDocument: any, theApplication: any, theRange: Message_ProgressRange): void;
  Read_2(theIStream: Standard_IStream, theStorageData: any, theDoc: any, theApplication: any, theRange: Message_ProgressRange): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StdLDrivers {
  constructor();
  Factory(aGUID: Standard_GUID): any;
  DefineFormat(theApp: any): void;
  BindTypes(theMap: StdObjMgt_MapOfInstantiators): void;
}

export declare class StdLPersistent {
  constructor();
  BindTypes(theMap: StdObjMgt_MapOfInstantiators): void;
}

export declare class StdLPersistent_Collection {
  constructor();
}

export declare class StdLPersistent_Data extends StdObjMgt_Persistent {
  constructor()
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(theChildren: any): void;
  PName(): Standard_CString;
  Import(): any;
}

export declare class StdLPersistent_HString {
  constructor();
}

export declare class StdLPersistent_Dependency {
  constructor();
}

export declare class StdLPersistent_Document extends StdObjMgt_Persistent {
  constructor();
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(a0: any): void;
  PName(): Standard_CString;
  ImportDocument(theDocument: any): void;
}

export declare class StdLPersistent_Function {
  constructor()
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(a0: any): void;
  PName(): Standard_CString;
  Import(theAttribute: any): void;
}

export declare class StdLPersistent_NamedData {
  constructor();
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(a0: any): void;
  PName(): Standard_CString;
  Import(theAttribute: any): void;
}

export declare class StdLPersistent_Real {
  constructor()
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(a0: any): void;
  PName(): Standard_CString;
  Import(theAttribute: any): void;
}

export declare class StdLPersistent_TreeNode {
  constructor();
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(a0: any): void;
  PName(): Standard_CString;
  CreateAttribute(): any;
  ImportAttribute(): void;
}

export declare class StdLPersistent_Value {
  constructor();
}

export declare class StdLPersistent_Variable {
  constructor()
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(theChildren: any): void;
  PName(): Standard_CString;
  Import(theAttribute: any): void;
}

export declare class StdLPersistent_Void {
  constructor();
}

export declare class StdLPersistent_XLink {
  constructor();
  Read(theReadData: StdObjMgt_ReadData): void;
  Write(theWriteData: StdObjMgt_WriteData): void;
  PChildren(theChildren: any): void;
  PName(): Standard_CString;
  Import(theAttribute: any): void;
}

export declare class StdObjMgt_MapOfInstantiators {
  constructor();
}

export declare class Handle_StdLPersistent_HArray1OfPersistent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdLPersistent_HArray1OfPersistent): void;
  get(): StdLPersistent_HArray1OfPersistent;
}

  export declare class Handle_StdLPersistent_HArray1OfPersistent_1 extends Handle_StdLPersistent_HArray1OfPersistent {
    constructor();
  }

  export declare class Handle_StdLPersistent_HArray1OfPersistent_2 extends Handle_StdLPersistent_HArray1OfPersistent {
    constructor(thePtr: StdLPersistent_HArray1OfPersistent);
  }

  export declare class Handle_StdLPersistent_HArray1OfPersistent_3 extends Handle_StdLPersistent_HArray1OfPersistent {
    constructor(theHandle: Handle_StdLPersistent_HArray1OfPersistent);
  }

  export declare class Handle_StdLPersistent_HArray1OfPersistent_4 extends Handle_StdLPersistent_HArray1OfPersistent {
    constructor(theHandle: Handle_StdLPersistent_HArray1OfPersistent);
  }

export declare class Handle_StdLPersistent_HArray2OfPersistent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdLPersistent_HArray2OfPersistent): void;
  get(): StdLPersistent_HArray2OfPersistent;
}

  export declare class Handle_StdLPersistent_HArray2OfPersistent_1 extends Handle_StdLPersistent_HArray2OfPersistent {
    constructor();
  }

  export declare class Handle_StdLPersistent_HArray2OfPersistent_2 extends Handle_StdLPersistent_HArray2OfPersistent {
    constructor(thePtr: StdLPersistent_HArray2OfPersistent);
  }

  export declare class Handle_StdLPersistent_HArray2OfPersistent_3 extends Handle_StdLPersistent_HArray2OfPersistent {
    constructor(theHandle: Handle_StdLPersistent_HArray2OfPersistent);
  }

  export declare class Handle_StdLPersistent_HArray2OfPersistent_4 extends Handle_StdLPersistent_HArray2OfPersistent {
    constructor(theHandle: Handle_StdLPersistent_HArray2OfPersistent);
  }

export declare type TKStdLLib = {
  StdObjMgt_ReadData: typeof StdObjMgt_ReadData;
  StdObjMgt_WriteData: typeof StdObjMgt_WriteData;
  StdLPersistent_Data: typeof StdLPersistent_Data;
  StdLPersistent_Function: typeof StdLPersistent_Function;
  StdLPersistent_Real: typeof StdLPersistent_Real;
  StdLPersistent_Variable: typeof StdLPersistent_Variable;
  Handle_StdLPersistent_HArray1OfPersistent_1: typeof Handle_StdLPersistent_HArray1OfPersistent_1;
  Handle_StdLPersistent_HArray1OfPersistent_2: typeof Handle_StdLPersistent_HArray1OfPersistent_2;
  Handle_StdLPersistent_HArray1OfPersistent_3: typeof Handle_StdLPersistent_HArray1OfPersistent_3;
  Handle_StdLPersistent_HArray1OfPersistent_4: typeof Handle_StdLPersistent_HArray1OfPersistent_4;
  Handle_StdLPersistent_HArray2OfPersistent_1: typeof Handle_StdLPersistent_HArray2OfPersistent_1;
  Handle_StdLPersistent_HArray2OfPersistent_2: typeof Handle_StdLPersistent_HArray2OfPersistent_2;
  Handle_StdLPersistent_HArray2OfPersistent_3: typeof Handle_StdLPersistent_HArray2OfPersistent_3;
  Handle_StdLPersistent_HArray2OfPersistent_4: typeof Handle_StdLPersistent_HArray2OfPersistent_4;
};
